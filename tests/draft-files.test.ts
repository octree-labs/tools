import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DRAFT_LIMITS, normaliseDraftPath, postDraftForm, prepareDraftFiles } from '../lib/open-in-octree';
import { templateFiles } from '../lib/template-files';
import { templates } from '../lib/templates';

const DOC = '\\documentclass{article}\n\\begin{document}\\input{intro}\\bibliography{refs}\\end{document}';

test('prepareDraftFiles puts the main file first and keeps the rest', () => {
  const out = prepareDraftFiles([
    { path: 'refs.bib', content: '@misc{a}' },
    { path: 'intro.tex', content: 'Intro' },
    { path: 'paper.tex', content: DOC },
  ]);
  assert.deepEqual(out?.files.map((f) => f.path), ['paper.tex', 'refs.bib', 'intro.tex']);
  assert.equal(out?.main, 'paper.tex');
});

test('prepareDraftFiles honours main, normalises paths and drops what the app refuses', () => {
  const out = prepareDraftFiles(
    [
      { path: './a/main.tex', content: DOC },
      { path: 'fig.png', content: 'x' },
      { path: 'data.dat', content: '1 2' },
      { path: '../escape.tex', content: 'x' },
      { path: '/abs.tex', content: 'x' },
      { path: 'a\\b.tex', content: 'x' },
      { path: 'a/refs.bib', content: '@misc{a}' },
      { path: 'a/./refs.bib', content: 'duplicate' },
    ],
    'a/main.tex',
  );
  assert.deepEqual(out?.files, [
    { path: 'a/main.tex', content: DOC },
    { path: 'a/refs.bib', content: '@misc{a}' },
  ]);
});

test('prepareDraftFiles falls back to a single file (null) when it cannot send files', () => {
  // One file only.
  assert.equal(prepareDraftFiles([{ path: 'main.tex', content: DOC }]), null);
  // No \documentclass anywhere, or a non-.tex main.
  assert.equal(prepareDraftFiles([{ path: 'a.tex', content: 'x' }, { path: 'b.bib', content: 'y' }]), null);
  assert.equal(prepareDraftFiles([{ path: 'a.ltx', content: DOC }, { path: 'b.bib', content: 'y' }], 'a.ltx'), null);
  // Over the caps.
  const many = [{ path: 'main.tex', content: DOC }];
  for (let i = 0; i < DRAFT_LIMITS.maxFiles; i++) many.push({ path: `s${i}.tex`, content: 'x' });
  assert.equal(prepareDraftFiles(many), null);
  assert.ok(prepareDraftFiles(many.slice(0, DRAFT_LIMITS.maxFiles)));
  const big = 'x'.repeat(DRAFT_LIMITS.maxFilesBytes);
  assert.equal(prepareDraftFiles([{ path: 'main.tex', content: DOC }, { path: 'big.tex', content: big }]), null);
});

test('normaliseDraftPath mirrors the app path rules', () => {
  assert.equal(normaliseDraftPath('a/../b.tex'), 'b.tex');
  assert.equal(normaliseDraftPath('../b.tex'), null);
  assert.equal(normaliseDraftPath('dir/'), null);
  assert.equal(normaliseDraftPath('C:/x.tex'), null);
  assert.equal(normaliseDraftPath('x'.repeat(513)), null);
});

interface FakeElement {
  tag: string;
  name?: string;
  type?: string;
  value?: string;
  method?: string;
  enctype?: string;
  action?: string;
  style: Record<string, string>;
  children: FakeElement[];
  submitted: boolean;
  appendChild(child: FakeElement): void;
  submit(): void;
}

function captureForm(run: () => void): FakeElement {
  const created: FakeElement[] = [];
  const fakeDocument = {
    createElement(tag: string): FakeElement {
      const el: FakeElement = {
        tag,
        style: {},
        children: [],
        submitted: false,
        appendChild(child) {
          this.children.push(child);
        },
        submit() {
          this.submitted = true;
        },
      };
      created.push(el);
      return el;
    },
    body: { appendChild() {}, removeChild() {} },
  };
  const g = globalThis as unknown as { document?: unknown };
  const previous = g.document;
  g.document = fakeDocument;
  try {
    run();
  } finally {
    g.document = previous;
  }
  const form = created.find((el) => el.tag === 'form');
  assert.ok(form);
  return form;
}

test('postDraftForm sends files and main as multipart alongside the fallback content', () => {
  const files = [
    { path: 'paper.tex', content: DOC },
    { path: 'refs.bib', content: '@misc{a}' },
  ];
  const form = captureForm(() =>
    postDraftForm({ latex: 'flattened', title: 'Paper', source: 'tools:arxiv-to-latex:result', files, main: 'paper.tex' }),
  );
  assert.equal(form.enctype, 'multipart/form-data');
  const fields = Object.fromEntries(form.children.map((c) => [c.name, c.value]));
  assert.equal(fields.content, 'flattened');
  assert.deepEqual(JSON.parse(fields.files!), files);
  assert.equal(fields.main, 'paper.tex');
});

test('postDraftForm without files posts exactly the single-file fields, urlencoded', () => {
  const form = captureForm(() => postDraftForm({ latex: 'x', title: 't', source: 'tools' }));
  assert.equal(form.enctype, undefined);
  assert.deepEqual(form.children.map((c) => c.name), ['content', 'title', 'source']);
});

test('templateFiles splits filecontents bibliographies into real files', () => {
  const code = [
    '\\documentclass{article}',
    '',
    '% Sample bibliography: written to refs.bib on the first compile.',
    '% Replace it with your own.',
    '\\begin{filecontents*}[overwrite]{refs.bib}',
    '@misc{a, title={A}}',
    '\\end{filecontents*}',
    '\\addbibresource{refs.bib}',
    '\\begin{document}x\\end{document}',
  ].join('\n');
  assert.deepEqual(templateFiles(code), [
    {
      path: 'main.tex',
      content: '\\documentclass{article}\n\n\\addbibresource{refs.bib}\n\\begin{document}x\\end{document}',
    },
    { path: 'refs.bib', content: '@misc{a, title={A}}\n' },
  ]);
  assert.equal(templateFiles(DOC), null);
});

test('every template with a filecontents block opens as a valid multi-file draft', () => {
  const split = templates.filter((t) => templateFiles(t.code));
  assert.ok(split.length >= 6, `expected the filecontents templates, got ${split.length}`);
  for (const t of split) {
    const files = templateFiles(t.code)!;
    assert.ok(!files[0].content.includes('filecontents*}'), `${t.slug}: block left in main.tex`);
    const prepared = prepareDraftFiles(files);
    assert.ok(prepared, `${t.slug}: not sendable`);
    assert.equal(prepared.main, 'main.tex');
  }
});
