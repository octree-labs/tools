import { parse, HTMLElement, Node, NodeType, TextNode } from 'node-html-parser';
import {
  AlignmentType,
  Document,
  ExternalHyperlink,
  HeadingLevel,
  LevelFormat,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
  type IParagraphOptions,
  type ParagraphChild,
} from 'docx';

/**
 * A small HTML -> .docx mapper for the semantic subset the LaTeX to Word
 * converter asks the model to emit: headings, paragraphs, lists, tables,
 * inline bold/italic/underline/code/sub/sup, links, line breaks and
 * preformatted blocks. Anything else is unwrapped to its text content.
 *
 * The conversion runs in two steps so the HTML walk can be unit-tested
 * without unzipping a Word file:
 *   htmlToBlocks(html)  -> intermediate block list
 *   blocksToDocx(blocks) -> Document (then Packer.toBuffer)
 */

export interface Run {
  text: string;
  bold?: boolean;
  italics?: boolean;
  underline?: boolean;
  code?: boolean;
  superScript?: boolean;
  subScript?: boolean;
  href?: string;
  /** Emit a line break before this run's text. */
  break?: boolean;
}

export type HeadingLevelNumber = 1 | 2 | 3 | 4 | 5 | 6;

export type Block =
  | { type: 'heading'; level: HeadingLevelNumber; runs: Run[] }
  | { type: 'paragraph'; runs: Run[]; align?: 'center'; indent?: boolean; code?: boolean }
  | { type: 'list-item'; ordered: boolean; level: number; runs: Run[]; listId: number }
  | { type: 'table'; rows: Run[][][]; headerRows: number };

type RunStyle = Omit<Run, 'text' | 'break'>;

const INLINE_TAGS = new Set([
  'a', 'abbr', 'b', 'br', 'cite', 'code', 'del', 'em', 'i', 'kbd', 'mark', 'q', 's',
  'samp', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'font',
]);

const SKIP_TAGS = new Set(['script', 'style', 'head', 'title', 'meta', 'link', 'noscript', 'template']);

/** Nesting deeper than this is flattened to text instead of recursing further. */
const MAX_DEPTH = 256;

/**
 * Text content of a subtree, collected iteratively. node-html-parser's own
 * `.text` getter recurses, so it cannot be used on pathologically deep input.
 */
function flattenText(node: Node): string {
  const parts: string[] = [];
  const stack: Node[] = [node];
  while (stack.length) {
    const n = stack.pop()!;
    if (isText(n)) {
      parts.push(n.text);
      continue;
    }
    if (!isElement(n) || SKIP_TAGS.has(tagOf(n))) continue;
    for (let i = n.childNodes.length - 1; i >= 0; i--) stack.push(n.childNodes[i]);
  }
  return parts.join('');
}

/** Only keep link targets Word can open safely (no javascript:, data:, file: ...). */
function safeHref(href: string | undefined): string | undefined {
  if (!href) return undefined;
  const trimmed = href.trim();
  return /^(https?:\/\/|mailto:)/i.test(trimmed) ? trimmed : undefined;
}

const HEADING_TAGS: Record<string, HeadingLevelNumber> = {
  h1: 1, h2: 2, h3: 3, h4: 4, h5: 5, h6: 6,
};

function isElement(node: Node): node is HTMLElement {
  return node.nodeType === NodeType.ELEMENT_NODE;
}

function isText(node: Node): node is TextNode {
  return node.nodeType === NodeType.TEXT_NODE;
}

function tagOf(node: HTMLElement): string {
  return (node.rawTagName || '').toLowerCase();
}

function isCentered(el: HTMLElement): boolean {
  const cls = (el.getAttribute('class') || '').toLowerCase();
  const style = (el.getAttribute('style') || '').toLowerCase().replace(/\s+/g, '');
  const align = (el.getAttribute('align') || '').toLowerCase();
  return (
    tagOf(el) === 'center' ||
    /\b(math|equation|display|katex-display|formula)\b/.test(cls) ||
    style.includes('text-align:center') ||
    align === 'center'
  );
}

/** Collapse whitespace the way a browser renders inline text. */
function normalizeInline(text: string): string {
  return text.replace(/\s+/g, ' ');
}

function trimRuns(runs: Run[]): Run[] {
  const out = runs.filter((r) => r.text !== '' || r.break);
  if (out.length === 0) return out;
  // Trim leading whitespace of the first text run and trailing whitespace of the last.
  const first = out[0];
  if (!first.break) first.text = first.text.replace(/^\s+/, '');
  const last = out[out.length - 1];
  last.text = last.text.replace(/\s+$/, '');
  // Collapse whitespace across adjacent runs ("a " + " b" -> "a " + "b").
  for (let i = 1; i < out.length; i++) {
    if (/\s$/.test(out[i - 1].text) && !out[i].break) {
      out[i].text = out[i].text.replace(/^\s+/, '');
    }
  }
  return out.filter((r) => r.text !== '' || r.break);
}

/** Collect inline runs under `node`, skipping nested block-level children. */
function collectRuns(node: Node, style: RunStyle, preformatted = false): Run[] {
  const runs: Run[] = [];

  const visit = (n: Node, s: RunStyle, depth: number) => {
    if (isText(n)) {
      const text = preformatted ? n.text : normalizeInline(n.text);
      if (text) runs.push({ text, ...s });
      return;
    }
    if (!isElement(n)) return;
    const tag = tagOf(n);
    if (SKIP_TAGS.has(tag)) return;
    if (depth > MAX_DEPTH) {
      const text = preformatted ? flattenText(n) : normalizeInline(flattenText(n));
      if (text) runs.push({ text, ...s });
      return;
    }

    if (tag === 'br') {
      runs.push({ text: '', break: true, ...s });
      return;
    }
    if (tag === 'img') {
      const alt = n.getAttribute('alt');
      if (alt) runs.push({ text: `[${normalizeInline(alt)}]`, ...s, italics: true });
      return;
    }

    let next: RunStyle = s;
    switch (tag) {
      case 'strong':
      case 'b':
        next = { ...s, bold: true };
        break;
      case 'em':
      case 'i':
      case 'cite':
      case 'var':
        next = { ...s, italics: true };
        break;
      case 'u':
        next = { ...s, underline: true };
        break;
      case 'code':
      case 'kbd':
      case 'samp':
        next = { ...s, code: true };
        break;
      case 'sup':
        next = { ...s, superScript: true };
        break;
      case 'sub':
        next = { ...s, subScript: true };
        break;
      case 'a': {
        const href = safeHref(n.getAttribute('href'));
        next = href ? { ...s, href } : s;
        break;
      }
      default:
        break;
    }

    // Nested block elements inside an inline context (e.g. <p> inside <li>)
    // are flattened: their text is joined with a line break.
    if (!INLINE_TAGS.has(tag) && tag !== '' && runs.length > 0 && !preformatted) {
      runs.push({ text: '', break: true, ...s });
    }
    for (const child of n.childNodes) visit(child, next, depth + 1);
  };

  for (const child of node.childNodes) visit(child, style, 0);
  return trimRuns(runs);
}

interface WalkContext {
  blocks: Block[];
  depth: number;
  listLevel: number;
  listId: number;
  nextListId: () => number;
  ordered: boolean;
  indent: boolean;
}

function walk(node: Node, ctx: WalkContext): void {
  if (isText(node)) {
    // Stray text directly inside a container becomes its own paragraph.
    const runs = trimRuns([{ text: normalizeInline(node.text) }]);
    if (runs.length) ctx.blocks.push({ type: 'paragraph', runs, indent: ctx.indent || undefined });
    return;
  }
  if (!isElement(node)) return;

  const tag = tagOf(node);
  if (SKIP_TAGS.has(tag)) return;

  if (ctx.depth > MAX_DEPTH) {
    // Pathologically deep markup: flatten whatever is left to a paragraph.
    const runs = trimRuns([{ text: normalizeInline(flattenText(node)) }]);
    if (runs.length) ctx.blocks.push({ type: 'paragraph', runs, indent: ctx.indent || undefined });
    return;
  }

  if (tag in HEADING_TAGS) {
    const runs = collectRuns(node, {});
    if (runs.length) ctx.blocks.push({ type: 'heading', level: HEADING_TAGS[tag], runs });
    return;
  }

  if (tag === 'p' || tag === 'center') {
    const runs = collectRuns(node, {});
    if (runs.length) {
      ctx.blocks.push({
        type: 'paragraph',
        runs,
        align: isCentered(node) ? 'center' : undefined,
        indent: ctx.indent || undefined,
      });
    }
    return;
  }

  if (tag === 'pre') {
    const runs = collectRuns(node, { code: true }, true);
    const lines = runs.flatMap((r) => r.text.split('\n').map((line, i) => ({ ...r, text: line, break: i > 0 || r.break })));
    const trimmed = trimRuns(lines);
    if (trimmed.length) ctx.blocks.push({ type: 'paragraph', runs: trimmed, code: true });
    return;
  }

  if (tag === 'ul' || tag === 'ol') {
    const ordered = tag === 'ol';
    const listId = ctx.nextListId();
    for (const li of node.childNodes) {
      if (!isElement(li) || tagOf(li) !== 'li') continue;
      // Inline content of the item, excluding nested lists.
      const clone = parse(li.innerHTML);
      for (const nested of clone.querySelectorAll('ul, ol')) {
        // Only strip direct nested lists (deeper ones are inside those).
        if (nested.parentNode === clone) nested.remove();
      }
      const runs = collectRuns(clone, {});
      ctx.blocks.push({ type: 'list-item', ordered, level: ctx.listLevel, runs, listId });
      for (const child of li.childNodes) {
        if (isElement(child) && (tagOf(child) === 'ul' || tagOf(child) === 'ol')) {
          walk(child, { ...ctx, listLevel: Math.min(ctx.listLevel + 1, 8), depth: ctx.depth + 1 });
        }
      }
    }
    return;
  }

  if (tag === 'table') {
    const rows: Run[][][] = [];
    let headerRows = 0;
    const trs = node.querySelectorAll('tr').filter((tr) => {
      // Only rows belonging to this table, not a nested one.
      let p: Node | null = tr.parentNode;
      while (p && isElement(p) && tagOf(p) !== 'table') p = p.parentNode;
      return p === node;
    });
    for (const tr of trs) {
      const cells: Run[][] = [];
      let allHeader = true;
      for (const cell of tr.childNodes) {
        if (!isElement(cell)) continue;
        const ct = tagOf(cell);
        if (ct !== 'td' && ct !== 'th') continue;
        if (ct !== 'th') allHeader = false;
        cells.push(collectRuns(cell, ct === 'th' ? { bold: true } : {}));
      }
      if (cells.length === 0) continue;
      const parent = tr.parentNode;
      const inThead = parent !== null && isElement(parent) && tagOf(parent) === 'thead';
      if ((inThead || allHeader) && rows.length === headerRows) headerRows++;
      rows.push(cells);
    }
    if (rows.length) ctx.blocks.push({ type: 'table', rows, headerRows });
    return;
  }

  if (tag === 'blockquote') {
    for (const child of node.childNodes) walk(child, { ...ctx, indent: true, depth: ctx.depth + 1 });
    return;
  }

  if (tag === 'hr') {
    ctx.blocks.push({ type: 'paragraph', runs: [] });
    return;
  }

  if (INLINE_TAGS.has(tag) || tag === 'img') {
    // Inline element at block level: wrap in a paragraph.
    const wrapper = parse('<p></p>').firstChild as HTMLElement;
    wrapper.appendChild(node.clone());
    const runs = collectRuns(wrapper, {});
    if (runs.length) ctx.blocks.push({ type: 'paragraph', runs, indent: ctx.indent || undefined });
    return;
  }

  // div, section, article, body, html, main, header, footer, figure, ... : recurse.
  if (isCentered(node) && !node.childNodes.some((c) => isElement(c) && !INLINE_TAGS.has(tagOf(c)))) {
    const runs = collectRuns(node, {});
    if (runs.length) ctx.blocks.push({ type: 'paragraph', runs, align: 'center' });
    return;
  }
  const inner = { ...ctx, depth: ctx.depth + 1 };
  for (const child of node.childNodes) walk(child, inner);
}

/** Parse an HTML fragment (or full document) into a flat list of blocks. */
export function htmlToBlocks(html: string): Block[] {
  const root = parse(html, { blockTextElements: { script: true, style: true, pre: true } });
  // querySelector recurses through the whole tree; only look for <body> when
  // the input is a full document so deeply nested fragments cannot overflow it.
  const body = (/<body[\s>]/i.test(html) ? root.querySelector('body') : null) ?? root;
  let counter = 0;
  const ctx: WalkContext = {
    blocks: [],
    depth: 0,
    listLevel: 0,
    listId: 0,
    nextListId: () => ++counter,
    ordered: false,
    indent: false,
  };
  for (const child of body.childNodes) walk(child, ctx);
  // Merge consecutive stray-text paragraphs is unnecessary; just drop empty ones
  // except explicit <hr> spacers.
  return ctx.blocks;
}

const NUMBERED_REFERENCE = 'latex-to-word-numbered';

function runsToChildren(runs: Run[], monospace = false): ParagraphChild[] {
  return runs.map((run) => {
    const textRun = new TextRun({
      text: run.text,
      break: run.break ? 1 : undefined,
      bold: run.bold,
      italics: run.italics,
      underline: run.underline ? {} : undefined,
      superScript: run.superScript,
      subScript: run.subScript,
      font: run.code || monospace ? 'Consolas' : undefined,
      shading: run.code && !monospace ? { fill: 'F3F4F6' } : undefined,
      style: run.href ? 'Hyperlink' : undefined,
    });
    if (run.href) {
      return new ExternalHyperlink({ link: run.href, children: [textRun] });
    }
    return textRun;
  });
}

const HEADING_MAP: Record<HeadingLevelNumber, (typeof HeadingLevel)[keyof typeof HeadingLevel]> = {
  1: HeadingLevel.HEADING_1,
  2: HeadingLevel.HEADING_2,
  3: HeadingLevel.HEADING_3,
  4: HeadingLevel.HEADING_4,
  5: HeadingLevel.HEADING_5,
  6: HeadingLevel.HEADING_6,
};

function blockToDocx(block: Block): Paragraph | Table {
  switch (block.type) {
    case 'heading':
      return new Paragraph({
        heading: HEADING_MAP[block.level],
        children: runsToChildren(block.runs),
      });
    case 'paragraph': {
      const options: IParagraphOptions = {
        children: runsToChildren(block.runs, block.code),
        alignment: block.align === 'center' ? AlignmentType.CENTER : undefined,
        indent: block.indent ? { left: 720 } : undefined,
        spacing: { after: 160 },
        shading: block.code ? { fill: 'F3F4F6' } : undefined,
      };
      return new Paragraph(options);
    }
    case 'list-item':
      return new Paragraph({
        children: runsToChildren(block.runs),
        numbering: block.ordered
          ? { reference: NUMBERED_REFERENCE, level: block.level, instance: block.listId }
          : undefined,
        bullet: block.ordered ? undefined : { level: block.level },
        spacing: { after: 60 },
      });
    case 'table': {
      const columns = Math.max(...block.rows.map((r) => r.length));
      return new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: block.rows.map((cells, rowIndex) => {
          const padded = [...cells];
          while (padded.length < columns) padded.push([]);
          return new TableRow({
            tableHeader: rowIndex < block.headerRows,
            children: padded.map(
              (cellRuns) =>
                new TableCell({
                  children: [new Paragraph({ children: runsToChildren(cellRuns) })],
                })
            ),
          });
        }),
      });
    }
  }
}

/** Build a docx Document from blocks. */
export function blocksToDocx(blocks: Block[], title?: string): Document {
  const children = blocks.map(blockToDocx);
  // Ordered lists restart numbering per <ol> via `instance`; declare enough levels.
  return new Document({
    title,
    creator: 'Octree LaTeX to Word',
    styles: {
      default: {
        document: { run: { font: 'Calibri', size: 22 } },
      },
    },
    numbering: {
      config: [
        {
          reference: NUMBERED_REFERENCE,
          levels: [0, 1, 2, 3, 4, 5, 6, 7, 8].map((level) => ({
            level,
            format: LevelFormat.DECIMAL,
            text: `%${level + 1}.`,
            alignment: AlignmentType.START,
            style: { paragraph: { indent: { left: 720 * (level + 1), hanging: 360 } } },
          })),
        },
      ],
    },
    sections: [{ children: children.length ? children : [new Paragraph('')] }],
  });
}

/** Convert an HTML fragment to a .docx file buffer. */
export async function htmlToDocx(html: string, title?: string): Promise<Buffer> {
  const blocks = htmlToBlocks(html);
  const doc = blocksToDocx(blocks, title);
  return Packer.toBuffer(doc);
}
