import { test } from 'node:test';
import assert from 'node:assert/strict';
import { htmlToBlocks, htmlToDocx, type Block } from '../lib/html-to-docx';

const text = (block: Block) =>
  block.type === 'table' ? '' : block.runs.map((r) => (r.break ? '\n' : '') + r.text).join('');

test('headings map to levels and keep text', () => {
  const blocks = htmlToBlocks('<h1>Title</h1><h2>Section</h2><h3>Sub</h3>');
  assert.deepEqual(
    blocks.map((b) => (b.type === 'heading' ? [b.level, text(b)] : null)),
    [[1, 'Title'], [2, 'Section'], [3, 'Sub']]
  );
});

test('paragraph inline formatting becomes styled runs', () => {
  const [p] = htmlToBlocks('<p>Some <strong>bold</strong>, <em>italic</em>, <code>x</code> and <sup>2</sup>.</p>');
  assert.equal(p.type, 'paragraph');
  if (p.type !== 'paragraph') return;
  assert.equal(text(p), 'Some bold, italic, x and 2.');
  assert.equal(p.runs.find((r) => r.text === 'bold')?.bold, true);
  assert.equal(p.runs.find((r) => r.text === 'italic')?.italics, true);
  assert.equal(p.runs.find((r) => r.text === 'x')?.code, true);
  assert.equal(p.runs.find((r) => r.text === '2')?.superScript, true);
});

test('whitespace is collapsed and trimmed like a browser', () => {
  const [p] = htmlToBlocks('<p>\n   Hello\n   <b> world </b>  !\n</p>');
  assert.equal(text(p), 'Hello world !');
});

test('HTML entities are decoded', () => {
  const [p] = htmlToBlocks('<p>a &lt; b &amp;&amp; &alpha; &#8594; c</p>');
  assert.equal(text(p), 'a < b && α → c');
});

test('display math paragraphs are centered', () => {
  const blocks = htmlToBlocks('<p class="math">E = mc²</p><div class="equation">∫ f(x) dx</div><p>plain</p>');
  assert.equal(blocks[0].type === 'paragraph' && blocks[0].align, 'center');
  assert.equal(blocks[1].type === 'paragraph' && blocks[1].align, 'center');
  assert.equal(blocks[2].type === 'paragraph' && blocks[2].align, undefined);
});

test('unordered and ordered lists, including nesting', () => {
  const blocks = htmlToBlocks(
    '<ul><li>One</li><li>Two<ul><li>Two.a</li></ul></li></ul><ol><li>First</li><li>Second</li></ol>'
  );
  const items = blocks.filter((b) => b.type === 'list-item');
  assert.equal(items.length, 5);
  assert.deepEqual(
    items.map((b) => (b.type === 'list-item' ? [text(b), b.ordered, b.level] : null)),
    [
      ['One', false, 0],
      ['Two', false, 0],
      ['Two.a', false, 1],
      ['First', true, 0],
      ['Second', true, 0],
    ]
  );
});

test('each <ol> gets its own numbering instance', () => {
  const blocks = htmlToBlocks('<ol><li>a</li></ol><p>x</p><ol><li>b</li></ol>');
  const ids = blocks.filter((b) => b.type === 'list-item').map((b) => (b.type === 'list-item' ? b.listId : -1));
  assert.notEqual(ids[0], ids[1]);
});

test('tables keep rows, cells, and header rows', () => {
  const [table] = htmlToBlocks(
    '<table><thead><tr><th>Item</th><th>A</th></tr></thead><tbody><tr><td>Row 1</td><td>10</td></tr><tr><td>Row 2</td><td>20</td></tr></tbody></table>'
  );
  assert.equal(table.type, 'table');
  if (table.type !== 'table') return;
  assert.equal(table.headerRows, 1);
  assert.equal(table.rows.length, 3);
  assert.deepEqual(
    table.rows.map((r) => r.map((cell) => cell.map((run) => run.text).join(''))),
    [['Item', 'A'], ['Row 1', '10'], ['Row 2', '20']]
  );
  assert.equal(table.rows[0][0][0].bold, true);
});

test('a table without thead but with th cells still gets a header row', () => {
  const [table] = htmlToBlocks('<table><tr><th>H</th></tr><tr><td>v</td></tr></table>');
  assert.equal(table.type === 'table' && table.headerRows, 1);
});

test('links keep their href', () => {
  const [p] = htmlToBlocks('<p>See <a href="https://example.com">the site</a>.</p>');
  assert.equal(p.type === 'paragraph' && p.runs[1].href, 'https://example.com');
});

test('unsafe link schemes are dropped, http(s) and mailto are kept', () => {
  const [p] = htmlToBlocks(
    '<p><a href="javascript:alert(1)">js</a> <a href="mailto:a@b.c">m</a> <a href=" HTTP://x.y ">h</a></p>'
  );
  if (p.type !== 'paragraph') throw new Error('expected paragraph');
  assert.equal(p.runs.find((r) => r.text === 'js')?.href, undefined);
  assert.equal(p.runs.find((r) => r.text === 'm')?.href, 'mailto:a@b.c');
  assert.equal(p.runs.find((r) => r.text === 'h')?.href, 'HTTP://x.y');
});

test('pathologically deep nesting does not throw', async () => {
  const html = '<div>'.repeat(3000) + '<p>deep <b>' + '<i>'.repeat(3000) + 'text' + '</i>'.repeat(3000) + '</b></p>' + '</div>'.repeat(3000);
  const blocks = htmlToBlocks(html);
  assert.ok(blocks.length >= 1);
  assert.match(blocks.map(text).join(' '), /deep/);
  const buffer = await htmlToDocx(html);
  assert.equal(buffer.subarray(0, 2).toString('latin1'), 'PK');
});

test('line breaks and preformatted blocks', () => {
  const blocks = htmlToBlocks('<p>line one<br>line two</p><pre>a = 1\nb = 2</pre>');
  assert.equal(text(blocks[0]), 'line one\nline two');
  assert.equal(blocks[1].type === 'paragraph' && blocks[1].code, true);
  assert.equal(text(blocks[1]), 'a = 1\nb = 2');
});

test('wrapper elements, full documents, and scripts are handled', () => {
  const blocks = htmlToBlocks(
    '<html><head><title>t</title><style>p{}</style></head><body><div><section><p>inner</p></section></div><script>alert(1)</script></body></html>'
  );
  assert.equal(blocks.length, 1);
  assert.equal(text(blocks[0]), 'inner');
});

test('stray text and bare inline elements become paragraphs', () => {
  const blocks = htmlToBlocks('Just text<strong>bold alone</strong>');
  assert.deepEqual(blocks.map(text), ['Just text', 'bold alone']);
});

test('blockquotes are indented', () => {
  const [p] = htmlToBlocks('<blockquote><p>quoted</p></blockquote>');
  assert.equal(p.type === 'paragraph' && p.indent, true);
});

test('htmlToDocx produces a Word (zip) file containing the content', async () => {
  const buffer = await htmlToDocx('<h1>Hello</h1><p>World</p><ul><li>item</li></ul>', 'Test');
  assert.ok(Buffer.isBuffer(buffer));
  // Zip local file header signature "PK\x03\x04"
  assert.equal(buffer.subarray(0, 4).toString('latin1'), 'PK\u0003\u0004');
  assert.ok(buffer.length > 1000);
});

test('empty input still yields a valid document', async () => {
  const buffer = await htmlToDocx('');
  assert.equal(buffer.subarray(0, 2).toString('latin1'), 'PK');
});
