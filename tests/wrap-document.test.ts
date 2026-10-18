import { test } from 'node:test';
import assert from 'node:assert/strict';
import { wrapAsDocument, withCompileErrorContext } from '../lib/wrap-document';

test('full documents pass through unchanged', () => {
  const doc = '\\documentclass{article}\n\\begin{document}x\\end{document}';
  assert.equal(wrapAsDocument(doc, { packages: ['tikz'] }), doc);
});

test('fragments get an article preamble with amsmath/amssymb', () => {
  const out = wrapAsDocument('$x^2$');
  assert.match(out, /^\\documentclass\{article\}\n\\usepackage\{amsmath\}\n\\usepackage\{amssymb\}\n/);
  assert.match(out, /\\begin\{document\}\n\n\$x\^2\$\n\n\\end\{document\}/);
});

test('requested and detected packages are loaded once, pgfplots implies tikz', () => {
  const out = wrapAsDocument('\\begin{tikzpicture}\\begin{axis}\\addplot{x};\\end{axis}\\end{tikzpicture}', {
    packages: ['tikz'],
    tikzLibraries: ['arrows.meta', 'arrows.meta'],
  });
  assert.equal((out.match(/\\usepackage\{pgfplots\}/g) || []).length, 1);
  assert.doesNotMatch(out, /\\usepackage\{tikz\}/);
  assert.match(out, /\\pgfplotsset\{compat=1\.18\}/);
  assert.match(out, /\\usetikzlibrary\{arrows\.meta\}/);
});

test('booktabs and graphicx are detected from the fragment', () => {
  const out = wrapAsDocument('\\toprule\n\\includegraphics{a.png}');
  assert.match(out, /\\usepackage\{graphicx\}/);
  assert.match(out, /\\usepackage\{booktabs\}/);
});

test('preamble lines inside a fragment are hoisted above \\begin{document}', () => {
  const out = wrapAsDocument(
    '\\usepackage[dvipsnames]{xcolor}\n\\usetikzlibrary{shapes.geometric}\n\n\\begin{tikzpicture}\n\\node[draw, ellipse, fill=Cerulean] {\\textcolor{red}{E}};\n\\end{tikzpicture}',
    { packages: ['tikz'], tikzLibraries: ['arrows.meta'] },
  );
  const [preamble, body] = out.split('\\begin{document}');
  assert.doesNotMatch(body, /\\usepackage|\\usetikzlibrary/);
  assert.match(preamble, /\\usepackage\[dvipsnames\]\{xcolor\}/);
  assert.ok(preamble.indexOf('\\usepackage{tikz}') < preamble.indexOf('\\usetikzlibrary{shapes.geometric}'));
  assert.equal((preamble.match(/\\usepackage(\[[^\]]*\])?\{xcolor\}/g) || []).length, 1);
  assert.match(body, /^\n\n\\begin\{tikzpicture\}/);
});

test('markdown fences around the output are stripped', () => {
  const out = wrapAsDocument('```latex\n\\documentclass{article}\n\\begin{document}hi\\end{document}\n```');
  assert.equal(out, '\\documentclass{article}\n\\begin{document}hi\\end{document}');
});

test('error context is a % comment block capped at 40 log lines', () => {
  const log = Array.from({ length: 60 }, (_, i) => `line ${i + 1}`).join('\n');
  const out = withCompileErrorContext('\\documentclass{article}', log);
  const lines = out.split('\n');
  assert.equal(lines[0], '% ---- Compile error from tools.useoctree.com ----');
  assert.ok(lines.includes('% line 40'));
  assert.ok(!lines.includes('% line 41'));
  assert.ok(lines.includes('% ... (20 more lines omitted)'));
  assert.equal(lines[lines.length - 1], '\\documentclass{article}');
  assert.ok(lines.slice(0, -2).every((l) => l.startsWith('%')));
});

test('error context keeps % and non-ASCII lines as comments and drops server temp paths', () => {
  const out = withCompileErrorContext('x', '(/tmp/latex-8f2k1x/main.tex\n% 50% done, ü日本語 ^^M \\end{document}');
  assert.ok(out.includes('% (./main.tex'));
  assert.ok(out.includes('% % 50% done, ü日本語 ^^M \\end{document}'));
  assert.ok(!out.includes('/tmp/'));
});

test('an empty log leaves the source untouched', () => {
  assert.equal(withCompileErrorContext('x', '  \n'), 'x');
});
