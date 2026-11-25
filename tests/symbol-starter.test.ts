import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createTranslator } from 'next-intl';
import en from '../messages/en.json';
import { SYMBOL_CATEGORIES, SYMBOL_PAGES, getSymbolPageRef } from '../lib/symbol-pages';
import { getSymbolCopy, getSymbolFacts } from '../lib/symbol-pages/content';
import { buildSymbolPageModel, type SymbolPageT } from '../lib/symbol-pages/model';
import { DRAFTS_ENDPOINT, openInOctree } from '../lib/open-in-octree';
import {
  CATEGORY_STARTER_SIZE,
  buildCategoryStarterDocument,
  buildSymbolStarterDocument,
  orderPackages,
  verbatim,
} from '../lib/symbol-pages/starter';

const t: SymbolPageT = createTranslator({ locale: 'en', messages: en as never, namespace: 'symbolPage' as never }) as never;

function starterFor(category: string, slug: string) {
  const ref = getSymbolPageRef(category, slug)!;
  return buildSymbolStarterDocument(ref, getSymbolCopy(ref.latex)!, getSymbolFacts(ref.latex)!);
}

function usepackages(latex: string): string[] {
  return [...latex.matchAll(/\\usepackage\{([^}]*)\}/g)].flatMap((m) => m[1].split(','));
}

test('every symbol page has a complete starter document that uses its command', () => {
  for (const ref of SYMBOL_PAGES) {
    const copy = getSymbolCopy(ref.latex)!;
    const facts = getSymbolFacts(ref.latex)!;
    const doc = buildSymbolStarterDocument(ref, copy, facts);
    assert.match(doc.latex, /^\\documentclass\{article\}\n/, ref.latex);
    assert.match(doc.latex, /\\begin\{document\}[\s\S]*\\end\{document\}$/, ref.latex);
    assert.equal(doc.latex.match(/\\begin\{document\}/g)!.length, 1, ref.latex);
    // The command is shown verbatim and typeset; the example inline and as a numbered equation.
    assert.ok(doc.latex.includes(verbatim(ref.latex)), ref.latex);
    assert.ok(doc.latex.includes(facts.mode === 'text' ? ` ${ref.latex}.` : `$${ref.latex}$`), ref.latex);
    assert.ok(doc.latex.includes(`$${copy.example}$`), ref.latex);
    assert.match(doc.latex, /\\begin\{equation\}[\s\S]*\\label\{eq:example\}[\s\S]*\\end\{equation\}/);
    // Every package the command or its example was measured to need is loaded, nothing else.
    const loaded = usepackages(doc.latex);
    const expected = new Set([...facts.packages, ...facts.examplePackages, ...(doc.unicode ? ['fontspec'] : [])]);
    assert.deepEqual(new Set(loaded), expected, ref.latex);
    assert.ok(doc.latex.length < 4000, ref.latex);
  }
});

test('package mapping: amssymb, amsmath, stmaryrd and cancel come from the measured facts', () => {
  assert.deepEqual(usepackages(starterFor('arrows', 'right-arrow').latex), ['amssymb']);
  const plain = SYMBOL_PAGES.find((r) => { const f = getSymbolFacts(r.latex)!; return !f.packages.length && !f.examplePackages.length; })!;
  assert.deepEqual(usepackages(starterFor(plain.category, plain.slug).latex), []);
  const cancel = SYMBOL_PAGES.find((r) => getSymbolFacts(r.latex)!.examplePackages.includes('cancel'))!;
  assert.ok(usepackages(starterFor(cancel.category, cancel.slug).latex).includes('cancel'));
  const stmary = SYMBOL_PAGES.find((r) => getSymbolFacts(r.latex)!.packages.includes('stmaryrd'))!;
  assert.ok(usepackages(starterFor(stmary.category, stmary.slug).latex).includes('stmaryrd'));
  assert.deepEqual(orderPackages(['amssymb', 'cancel', 'amsmath', 'amssymb']), ['amsmath', 'amssymb', 'cancel']);
});

test('non-ASCII commands load fontspec (Octree then compiles with XeLaTeX); ASCII ones never do', () => {
  for (const ref of SYMBOL_PAGES) {
    const doc = starterFor(ref.category, ref.slug);
    const nonAscii = /[^\u0000-\u007f]/.test(doc.latex.replace(/\\usepackage\{fontspec\}.*\n/, ''));
    assert.equal(doc.unicode, nonAscii, ref.latex);
    assert.equal(/\\usepackage\{fontspec\}/.test(doc.latex), nonAscii, ref.latex);
  }
  const euro = SYMBOL_PAGES.find((r) => r.latex === '\\text{€}')!;
  assert.ok(starterFor(euro.category, euro.slug).unicode);
});

test('headings never put a non-ASCII name into a pdfLaTeX document', () => {
  // "o with caron (háček)": ASCII command, non-ASCII name.
  const check = SYMBOL_PAGES.find((r) => r.latex === '\\check{o}')!;
  const doc = starterFor(check.category, check.slug);
  assert.equal(doc.unicode, false);
  assert.match(doc.latex, /\\title\{\\texttt\{\\textbackslash\{\}check\\\{o\\\}\} in \\LaTeX\}/);
});

test('verbatim picks a delimiter the command does not contain', () => {
  assert.equal(verbatim('\\rightarrow'), '\\verb|\\rightarrow|');
  assert.equal(verbatim('|A|'), '\\verb!|A|!');
  assert.equal(verbatim('\\|'), '\\verb!\\|!');
});

test('the page model carries the starter document and a localized draft title', () => {
  const ref = getSymbolPageRef('arrows', 'right-arrow')!;
  const model = buildSymbolPageModel(ref, t, 'en')!;
  assert.equal(model.starterTitle, 'Right Arrow in LaTeX');
  assert.ok(model.starterDocument.includes('\\title{Right Arrow in \\LaTeX}'));
  assert.ok(model.starterDocument.includes('$\\rightarrow$'));
});

test('every category index has a starter document with its first ASCII symbols', () => {
  for (const category of SYMBOL_CATEGORIES) {
    const doc = buildCategoryStarterDocument(category.slug);
    assert.ok(doc, category.slug);
    const items = doc.latex.match(/\\item /g) ?? [];
    assert.equal(items.length, Math.min(CATEGORY_STARTER_SIZE, category.symbols.length), category.slug);
    assert.match(doc.latex, /\\begin\{document\}[\s\S]*\\end\{document\}$/);
    const first = category.symbols.find((s) => !/[^\u0000-\u007f]/.test(s.latex))!;
    assert.ok(doc.latex.includes(verbatim(first.latex)), category.slug);
    for (const p of getSymbolFacts(first.latex)!.examplePackages) assert.ok(usepackages(doc.latex).includes(p));
  }
  assert.equal(buildCategoryStarterDocument('no-such-category'), undefined);
});

type FakeEl = { tag: string; name?: string; value?: string; action?: string; method?: string; children: FakeEl[]; submitted?: boolean };

/** Runs `fn` against a minimal document and returns the form it submitted. */
function captureForm(fn: () => void): FakeEl {
  const created: FakeEl[] = [];
  const g = globalThis as unknown as { document?: unknown };
  const previous = g.document;
  g.document = {
    createElement(tag: string) {
      const el = { tag, style: {}, children: [] as FakeEl[], appendChild(c: FakeEl) { el.children.push(c); }, submit() { (el as FakeEl).submitted = true; } };
      created.push(el as unknown as FakeEl);
      return el;
    },
    body: { appendChild() {}, removeChild() {} },
  };
  try { fn(); } finally { g.document = previous; }
  return created.find((el) => el.tag === 'form')!;
}

test('the symbol card posts the starter document with the page source and placement', () => {
  const ref = getSymbolPageRef('arrows', 'right-arrow')!;
  const model = buildSymbolPageModel(ref, t, 'en')!;
  const source = 'tools:symbols:arrows:right-arrow';
  const form = captureForm(() => openInOctree({ latex: model.starterDocument, title: model.starterTitle, source, placement: source }));
  assert.equal(form.method, 'POST');
  assert.equal(form.submitted, true);
  const action = new URL(form.action!);
  assert.equal(`${action.origin}${action.pathname}`, DRAFTS_ENDPOINT);
  assert.equal(action.searchParams.get('utm_source'), 'tools');
  assert.equal(action.searchParams.get('utm_campaign'), source);
  const fields = Object.fromEntries(form.children.map((c) => [c.name, c.value]));
  assert.deepEqual(fields, { content: model.starterDocument, title: 'Right Arrow in LaTeX', source });
});
