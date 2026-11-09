import { test } from 'node:test';
import assert from 'node:assert/strict';
import { gzipSync, inflateRawSync } from 'node:zlib';
import { formatArxivId, parseArxivId } from '../lib/arxiv/id';
import { ArchiveError, parseTar, safeArchivePath } from '../lib/arxiv/tar';
import { unpackEprint } from '../lib/arxiv/eprint';
import { findMainTex, flattenLatex } from '../lib/arxiv/latex';
import { buildZip, crc32, ZipTooLargeError } from '../lib/arxiv/zip';
import { createUpstreamThrottle } from '../lib/rate-limit';

// --- helpers -----------------------------------------------------------------

interface TarSpec {
  name: string;
  body?: string;
  type?: string;
  linkname?: string;
}

function writeString(buf: Uint8Array, offset: number, length: number, value: string) {
  const bytes = new TextEncoder().encode(value);
  buf.set(bytes.subarray(0, length), offset);
}

function tarHeader(name: string, size: number, type: string, linkname = ''): Uint8Array {
  const h = new Uint8Array(512);
  writeString(h, 0, 100, name);
  writeString(h, 100, 8, '0000644\0');
  writeString(h, 108, 8, '0000000\0');
  writeString(h, 116, 8, '0000000\0');
  writeString(h, 124, 12, size.toString(8).padStart(11, '0') + '\0');
  writeString(h, 136, 12, '00000000000\0');
  writeString(h, 156, 1, type);
  writeString(h, 157, 100, linkname);
  writeString(h, 257, 6, 'ustar\0');
  writeString(h, 263, 2, '00');
  for (let i = 148; i < 156; i++) h[i] = 0x20;
  let sum = 0;
  for (const b of h) sum += b;
  writeString(h, 148, 8, sum.toString(8).padStart(6, '0') + '\0 ');
  return h;
}

function makeTar(entries: TarSpec[]): Uint8Array {
  const parts: Uint8Array[] = [];
  for (const e of entries) {
    const body = new TextEncoder().encode(e.body ?? '');
    parts.push(tarHeader(e.name, body.length, e.type ?? '0', e.linkname));
    const padded = new Uint8Array(Math.ceil(body.length / 512) * 512);
    padded.set(body);
    parts.push(padded);
  }
  parts.push(new Uint8Array(1024));
  const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
  let pos = 0;
  for (const p of parts) {
    out.set(p, pos);
    pos += p.length;
  }
  return out;
}

const LIMITS = { maxFiles: 200, maxTotalBytes: 10_000_000 };
const text = (data: Uint8Array) => new TextDecoder().decode(data);

// --- ID parser ---------------------------------------------------------------

test('parses bare new-style IDs with and without versions', () => {
  assert.deepEqual(parseArxivId('2401.12345'), { id: '2401.12345' });
  assert.deepEqual(parseArxivId(' 2401.12345v2 '), { id: '2401.12345', version: 2 });
  assert.deepEqual(parseArxivId('arXiv:1706.03762'), { id: '1706.03762' });
  assert.deepEqual(parseArxivId('0704.0001'), { id: '0704.0001' });
});

test('parses old-style IDs', () => {
  assert.deepEqual(parseArxivId('hep-th/9711200'), { id: 'hep-th/9711200' });
  assert.deepEqual(parseArxivId('math.GT/0309136v1'), { id: 'math.GT/0309136', version: 1 });
  assert.deepEqual(parseArxivId('arxiv.org/abs/cond-mat/0011234'), { id: 'cond-mat/0011234' });
});

test('parses arxiv.org URLs', () => {
  assert.deepEqual(parseArxivId('https://arxiv.org/abs/2401.12345v2'), { id: '2401.12345', version: 2 });
  assert.deepEqual(parseArxivId('arxiv.org/abs/2401.12345v2'), { id: '2401.12345', version: 2 });
  assert.deepEqual(parseArxivId('https://arxiv.org/pdf/2401.12345'), { id: '2401.12345' });
  assert.deepEqual(parseArxivId('https://arxiv.org/pdf/2401.12345v3.pdf'), { id: '2401.12345', version: 3 });
  assert.deepEqual(parseArxivId('http://export.arxiv.org/abs/2401.12345?context=cs'), { id: '2401.12345' });
  assert.deepEqual(parseArxivId('https://www.arxiv.org/e-print/2401.12345'), { id: '2401.12345' });
});

test('rejects invalid IDs and foreign hosts', () => {
  for (const bad of [
    '',
    'hello',
    '2401.123',
    '2413.12345', // month 13
    '1301.12345', // 5 digits before 2015
    '1601.1234', // 4 digits after 2014
    '2401.12345/../../etc',
    'https://example.com/abs/2401.12345',
    'https://arxiv.org.evil.com/abs/2401.12345',
    'https://arxiv.org/list/cs.AI/recent',
    '../2401.12345',
  ]) {
    assert.equal(parseArxivId(bad), null, bad);
  }
});

test('formatArxivId adds the version', () => {
  assert.equal(formatArxivId({ id: '2401.12345', version: 2 }), '2401.12345v2');
  assert.equal(formatArxivId({ id: 'hep-th/9711200' }), 'hep-th/9711200');
});

// --- tar safety ----------------------------------------------------------------

test('tar: reads regular files and skips directories', () => {
  const tar = makeTar([
    { name: 'figs/', type: '5' },
    { name: './main.tex', body: '\\documentclass{article}' },
    { name: 'figs/a.txt', body: 'x'.repeat(700) },
  ]);
  const { files, skipped } = parseTar(tar, LIMITS);
  assert.deepEqual(files.map((f) => f.path), ['main.tex', 'figs/a.txt']);
  assert.equal(text(files[0].data), '\\documentclass{article}');
  assert.equal(files[1].data.length, 700);
  assert.deepEqual(skipped, []);
});

test('tar: path traversal rejects the whole archive', () => {
  for (const name of ['../evil.tex', 'a/../../evil.tex', '/etc/passwd', 'C:/x.tex', 'a\\..\\..\\x.tex']) {
    const tar = makeTar([{ name: 'ok.tex', body: 'ok' }, { name, body: 'bad' }]);
    assert.throws(
      () => parseTar(tar, LIMITS),
      (err: unknown) => err instanceof ArchiveError && err.code === 'unsafe_path',
      name,
    );
  }
});

test('tar: GNU long names are validated too', () => {
  const longName = `${'a/'.repeat(60)}../../../../../../../../../../../../../../../../../../../../../../../../../../../../../../../../evil`;
  const tar = makeTar([{ name: '././@LongLink', type: 'L', body: longName }, { name: 'short', body: 'x' }]);
  assert.throws(() => parseTar(tar, LIMITS), (err: unknown) => err instanceof ArchiveError && err.code === 'unsafe_path');
});

test('tar: symlinks and hardlinks are skipped, never followed', () => {
  const tar = makeTar([
    { name: 'main.tex', body: 'hi' },
    { name: 'link.tex', type: '2', linkname: '/etc/passwd' },
    { name: 'hard.tex', type: '1', linkname: 'main.tex' },
  ]);
  const { files, skipped } = parseTar(tar, LIMITS);
  assert.deepEqual(files.map((f) => f.path), ['main.tex']);
  assert.equal(skipped.length, 2);
});

test('tar: file count and size limits', () => {
  const many = makeTar(Array.from({ length: 4 }, (_, i) => ({ name: `f${i}.tex`, body: 'x' })));
  assert.throws(() => parseTar(many, { maxFiles: 3, maxTotalBytes: 1e6 }), (e: unknown) => e instanceof ArchiveError && e.code === 'too_many_files');
  const big = makeTar([{ name: 'a.tex', body: 'x'.repeat(2000) }]);
  assert.throws(() => parseTar(big, { maxFiles: 10, maxTotalBytes: 1000 }), (e: unknown) => e instanceof ArchiveError && e.code === 'too_large');
});

test('safeArchivePath normalizes harmless prefixes', () => {
  assert.equal(safeArchivePath('./a//b/./c.tex'), 'a/b/c.tex');
  assert.equal(safeArchivePath('./'), null);
});

// --- e-print unpacking -------------------------------------------------------

test('unpackEprint: gzipped tar', () => {
  const gz = gzipSync(makeTar([{ name: 'main.tex', body: 'x' }]));
  const out = unpackEprint(new Uint8Array(gz));
  assert.equal(out.kind, 'source');
  if (out.kind === 'source') assert.deepEqual(out.files.map((f) => f.path), ['main.tex']);
});

test('unpackEprint: single gzipped .tex and PDF-only submissions', () => {
  const single = unpackEprint(new Uint8Array(gzipSync('\\documentclass{article}\n')), '2401.12345');
  assert.equal(single.kind, 'source');
  if (single.kind === 'source') assert.equal(single.files[0].path, '2401.12345.tex');

  assert.equal(unpackEprint(new TextEncoder().encode('%PDF-1.5\n...')).kind, 'pdf');
  assert.equal(unpackEprint(new Uint8Array(gzipSync('%PDF-1.4 x'))).kind, 'pdf');
});

test('unpackEprint: gzip bombs are rejected', () => {
  const bomb = gzipSync(Buffer.alloc(130 * 1024 * 1024));
  assert.throws(() => unpackEprint(new Uint8Array(bomb)), (e: unknown) => e instanceof ArchiveError && e.code === 'too_large');
});

// --- main-file detection and flattening --------------------------------------

test('findMainTex prefers the file with \\begin{document} that nothing inputs', () => {
  const files = [
    { path: 'sections/intro.tex', text: '\\section{Intro}' },
    { path: 'template.tex', text: '% \\documentclass{article}\n\\documentclass{article}\n' },
    { path: 'paper.tex', text: '\\documentclass{article}\n\\begin{document}\n\\input{sections/intro}\n\\end{document}' },
    { path: 'supp.tex', text: '\\documentclass{article}\n\\begin{document}x\\end{document}' },
  ];
  assert.equal(findMainTex(files), 'paper.tex');
});

test('findMainTex ignores commented \\documentclass and honours 00README.json', () => {
  assert.equal(
    findMainTex([
      { path: 'a.tex', text: '%\\documentclass{article}\n\\begin{document}' },
      { path: 'b.tex', text: '\\documentclass{revtex4}\n\\begin{document}\\end{document}' },
    ]),
    'b.tex',
  );
  assert.equal(
    findMainTex([
      { path: 'a.tex', text: '\\documentclass{article}\n\\begin{document}\\end{document}' },
      { path: 'z.tex', text: '\\documentclass{article}\n\\begin{document}\\end{document}' },
      { path: '00README.json', text: JSON.stringify({ sources: [{ filename: 'z.tex', usage: 'toplevel' }] }) },
    ]),
    'z.tex',
  );
  assert.equal(findMainTex([{ path: 'only.tex', text: 'no class here' }]), 'only.tex');
  assert.equal(findMainTex([{ path: 'refs.bib', text: '@article{x}' }]), null);
});

test('findMainTex handles a main file inside a folder and an \\input-ed preamble', () => {
  const files = [
    { path: 'src/main.tex', text: '\\input{preamble}\n\\begin{document}\n\\end{document}' },
    { path: 'src/preamble.tex', text: '\\documentclass{article}' },
  ];
  // \documentclass lives in the \input-ed preamble; the file with \begin{document} is the root.
  assert.equal(findMainTex(files), 'src/main.tex');
});

test('flattenLatex inlines \\input/\\include relative to the main file and the .bbl', () => {
  const files = [
    {
      path: 'paper/main.tex',
      text: [
        '\\documentclass{article}',
        '\\begin{document}',
        '\\input{sec/intro}',
        '% \\input{sec/skipped}',
        '\\include{sec/body} % trailing comment',
        '\\input{missing}',
        '\\bibliography{refs}',
        '\\end{document}',
      ].join('\n'),
    },
    { path: 'paper/sec/intro.tex', text: 'Intro \\input{sec/nested.tex}' },
    { path: 'paper/sec/nested.tex', text: 'Nested' },
    { path: 'paper/sec/body.tex', text: 'Body' },
    { path: 'paper/sec/skipped.tex', text: 'SHOULD NOT APPEAR' },
    { path: 'paper/main.bbl', text: '\\begin{thebibliography}{1}\\end{thebibliography}' },
  ];
  const { latex, inlined, missing } = flattenLatex('paper/main.tex', files);
  assert.match(latex, /Intro \n%% >>> paper\/sec\/nested\.tex\nNested/);
  assert.match(latex, /\\clearpage\n%% >>> paper\/sec\/body\.tex\nBody/);
  assert.match(latex, /% trailing comment/);
  assert.match(latex, /% \\input\{sec\/skipped\}/);
  assert.doesNotMatch(latex, /SHOULD NOT APPEAR/);
  assert.match(latex, /\\begin\{thebibliography\}/);
  assert.doesNotMatch(latex, /\\bibliography\{refs\}/);
  assert.match(latex, /\\input\{missing\}/);
  assert.deepEqual(missing, ['missing']);
  assert.deepEqual(inlined.sort(), ['paper/main.bbl', 'paper/sec/body.tex', 'paper/sec/intro.tex', 'paper/sec/nested.tex']);
});

test('flattenLatex stops on cycles and never escapes the source', () => {
  const files = [
    { path: 'main.tex', text: '\\input{a}\n\\input{../../etc/passwd}' },
    { path: 'a.tex', text: 'A \\input{main}' },
  ];
  const { latex } = flattenLatex('main.tex', files);
  assert.equal((latex.match(/%% >>> a\.tex/g) || []).length, 1);
  assert.match(latex, /\\input\{\.\.\/\.\.\/etc\/passwd\}/);
});

// --- review hardening ---------------------------------------------------------

function paxRecord(key: string, value: string): string {
  const body = ` ${key}=${value}\n`;
  let len = body.length + 1;
  while (`${len}${body}`.length !== len) len++;
  return `${len}${body}`;
}

test('id parser: malformed percent-escapes and look-alike hosts are rejected, not thrown', () => {
  assert.equal(parseArxivId('https://arxiv.org/abs/%E0%A4%A'), null);
  assert.equal(parseArxivId('https://arxiv.org.evil.com/abs/2401.12345'), null);
  assert.equal(parseArxivId('https://evil.com/arxiv.org/abs/2401.12345'), null);
  assert.equal(parseArxivId('2401.12345/../../x'), null);
  assert.deepEqual(parseArxivId('https://arxiv.org/abs/2401.12345?x=@evil.com'), { id: '2401.12345' });
});

test('tar: absolute paths, pax path traversal and device files', () => {
  assert.throws(() => parseTar(makeTar([{ name: '/etc/passwd', body: 'x' }]), LIMITS), ArchiveError);
  const pax = makeTar([
    { name: 'PaxHeaders/x', type: 'x', body: paxRecord('path', '../../evil.tex') },
    { name: 'harmless.tex', body: 'x' },
  ]);
  assert.throws(() => parseTar(pax, LIMITS), (e: ArchiveError) => e.code === 'unsafe_path');
  const dev = parseTar(makeTar([{ name: 'dev/null', type: '3' }, { name: 'fifo', type: '6' }, { name: 'a.tex', body: 'a' }]), LIMITS);
  assert.deepEqual(dev.files.map((f) => f.path), ['a.tex']);
  assert.equal(dev.skipped.length, 2);
});

test('tar: thousands of link entries cannot bypass the file cap', () => {
  const entries = Array.from({ length: 50 }, (_, i) => ({ name: `l${i}`, type: '2', linkname: 'x' }));
  assert.throws(() => parseTar(makeTar(entries), { maxFiles: 4, maxTotalBytes: 1e6 }), (e: ArchiveError) => e.code === 'too_many_files');
});

test('findMainTex: a standalone figure never wins, the file with more \\inputs does', () => {
  const files = [
    { path: 'fig.tex', text: '\\documentclass{standalone}\\begin{document}x\\end{document}' + 'x'.repeat(5000) },
    { path: 'supp.tex', text: '\\documentclass{article}\\begin{document}\\end{document}' + 'y'.repeat(5000) },
    { path: 'neurips.tex', text: '\\documentclass{article}\\begin{document}\\input{a}\\input{b}\\end{document}' },
    { path: 'a.tex', text: 'A' },
    { path: 'b.tex', text: 'B' },
  ];
  assert.equal(findMainTex(files), 'neurips.tex');
});

test('flattenLatex: \\import / \\subimport resolve nested \\input in the imported folder', () => {
  const files = [
    { path: 'main.tex', text: '\\begin{document}\n\\import{chapters/}{one}\n\\end{document}' },
    { path: 'chapters/one.tex', text: 'One \\input{part} \\subimport{deep/}{two.tex}' },
    { path: 'chapters/part.tex', text: 'Part' },
    { path: 'chapters/deep/two.tex', text: 'Two' },
  ];
  const { latex, inlined, missing } = flattenLatex('main.tex', files);
  assert.match(latex, /One/);
  assert.match(latex, /Part/);
  assert.match(latex, /Two/);
  assert.deepEqual(missing, []);
  assert.deepEqual(inlined.sort(), ['chapters/deep/two.tex', 'chapters/one.tex', 'chapters/part.tex']);
});

test('flattenLatex: fan-out is bounded by maxChars (no exponential blow-up)', () => {
  const fan = Array.from({ length: 30 }, () => '\\input{b}').join('\n');
  const files = [
    { path: 'main.tex', text: fan },
    { path: 'b.tex', text: Array.from({ length: 30 }, () => '\\input{c}').join('\n') },
    { path: 'c.tex', text: 'z'.repeat(10_000) },
  ];
  const { latex } = flattenLatex('main.tex', files, { maxChars: 200_000 });
  assert.ok(latex.length < 300_000, `got ${latex.length}`);
});

test('buildZip stops once the output passes maxBytes', () => {
  const noise = new Uint8Array(100_000).map(() => Math.floor(Math.random() * 256));
  assert.throws(() => buildZip([{ path: 'a', data: noise }, { path: 'b', data: noise }], 150_000), ZipTooLargeError);
});

// --- zip and throttle ----------------------------------------------------------

test('crc32 matches the standard check value', () => {
  assert.equal(crc32(new TextEncoder().encode('123456789')), 0xcbf43926);
});

test('buildZip writes readable entries', () => {
  const body = new TextEncoder().encode('hello '.repeat(100));
  const zip = buildZip([{ path: 'dir/a.tex', data: body }]);
  const view = new DataView(zip.buffer);
  assert.equal(view.getUint32(0, true), 0x04034b50);
  const method = view.getUint16(8, true);
  const compressed = view.getUint32(18, true);
  const nameLen = view.getUint16(26, true);
  assert.equal(text(zip.subarray(30, 30 + nameLen)), 'dir/a.tex');
  const data = zip.subarray(30 + nameLen, 30 + nameLen + compressed);
  const out = method === 8 ? new Uint8Array(inflateRawSync(data)) : data;
  assert.equal(text(out), 'hello '.repeat(100));
  assert.equal(view.getUint32(zip.length - 22, true), 0x06054b50);
});

test('upstream throttle spaces requests one interval apart and refuses long queues', () => {
  const t = createUpstreamThrottle({ intervalMs: 1000, maxWaitMs: 2500 });
  assert.equal(t.reserve(0), 0);
  assert.equal(t.reserve(0), 1000);
  assert.equal(t.reserve(0), 2000);
  assert.equal(t.reserve(0), -1);
  assert.equal(t.reserve(5000), 0);
});
