/**
 * Helpers that turn a converter's output into something Octree can open
 * and compile straight away.
 */

export type WrapPackage =
  | 'tikz'
  | 'pgfplots'
  | 'booktabs'
  | 'graphicx'
  | 'multirow'
  | 'hyperref'
  | 'mathtools'
  | 'xcolor';

export interface WrapOptions {
  /** Packages the tool always needs on top of amsmath/amssymb. */
  packages?: WrapPackage[];
  /** TikZ libraries to load when tikz is included (deduplicated). */
  tikzLibraries?: string[];
}

const PACKAGE_ORDER: WrapPackage[] = [
  'mathtools',
  'graphicx',
  'xcolor',
  'booktabs',
  'multirow',
  'tikz',
  'pgfplots',
  'hyperref',
];

/** Packages inferred from the fragment itself so the document compiles without edits. */
const DETECTORS: Array<[WrapPackage, RegExp]> = [
  ['tikz', /\\begin\{tikzpicture\}|\\tikz\b|\\usetikzlibrary/],
  ['pgfplots', /\\begin\{axis\}|\\addplot|\\pgfplotsset/],
  ['booktabs', /\\(toprule|midrule|bottomrule|cmidrule)\b/],
  ['graphicx', /\\includegraphics\b/],
  ['multirow', /\\multirow\b/],
  ['hyperref', /\\(href|url)\b/],
  ['xcolor', /\\(textcolor|color|definecolor|colorbox)\b/],
];

export function isFullDocument(latex: string): boolean {
  return /\\documentclass\b/.test(latex);
}

/** Strip ```latex fences AI converters occasionally leave around their output. */
function stripFences(latex: string): string {
  const trimmed = latex.trim();
  const fenced = trimmed.match(/^```(?:latex|tex)?\s*\n([\s\S]*?)\n```$/);
  return fenced ? fenced[1] : trimmed;
}

const PACKAGE_LINE = /^\s*\\usepackage(?:\[[^\]]*\])?\{[^}]*\}\s*$/;
const SETUP_LINE = /^\s*\\(?:usetikzlibrary|usepgfplotslibrary|pgfplotsset)\{[^}]*\}\s*$/;

interface HoistedPreamble {
  body: string;
  /** `\usepackage` lines found anywhere; LaTeX rejects them inside the body. */
  packages: string[];
  /** Library/option lines that led the fragment, kept after the packages. */
  setup: string[];
}

/**
 * Pull preamble-only lines out of a fragment so they land in the generated
 * preamble instead of the document body ("Can be used only in preamble").
 */
function hoistPreamble(body: string): HoistedPreamble {
  const packages: string[] = [];
  const setup: string[] = [];
  const rest: string[] = [];
  let leading = true;
  for (const line of body.split('\n')) {
    if (PACKAGE_LINE.test(line)) {
      packages.push(line.trim());
      continue;
    }
    if (leading && SETUP_LINE.test(line)) {
      setup.push(line.trim());
      continue;
    }
    if (line.trim()) leading = false;
    rest.push(line);
  }
  return { body: rest.join('\n').trim(), packages, setup };
}

/**
 * Wrap a LaTeX fragment in a minimal, compilable `article` document.
 * Output that already carries `\documentclass` is returned unchanged
 * (after fence stripping), so it is safe to call on every tool's result.
 */
export function wrapAsDocument(latex: string, options: WrapOptions = {}): string {
  const stripped = stripFences(latex);
  if (!stripped) return stripped;
  if (isFullDocument(stripped)) return stripped;

  const { body, packages: hoistedPackages, setup: hoistedSetup } = hoistPreamble(stripped);
  const wanted = new Set<WrapPackage>(options.packages ?? []);
  for (const [pkg, re] of DETECTORS) {
    if (re.test(body)) wanted.add(pkg);
  }
  // pgfplots loads tikz itself; avoid loading both explicitly.
  if (wanted.has('pgfplots')) wanted.delete('tikz');

  const lines = ['\\documentclass{article}', '\\usepackage{amsmath}', '\\usepackage{amssymb}'];
  // The fragment's own \usepackage lines go first: a later option-less load of
  // the same package is a no-op, whereas the reverse order is an option clash.
  lines.push(...hoistedPackages);
  const alreadyLoaded = (pkg: WrapPackage) =>
    hoistedPackages.some((line) => new RegExp(`\\{[^}]*\\b${pkg}\\b[^}]*\\}\\s*$`).test(line));
  for (const pkg of PACKAGE_ORDER) {
    if (!wanted.has(pkg) || alreadyLoaded(pkg)) continue;
    lines.push(`\\usepackage{${pkg}}`);
    if (pkg === 'pgfplots') lines.push('\\pgfplotsset{compat=1.18}');
  }

  const libraries = new Set(options.tikzLibraries ?? []);
  if ((wanted.has('tikz') || wanted.has('pgfplots')) && libraries.size > 0) {
    lines.push(`\\usetikzlibrary{${Array.from(libraries).join(',')}}`);
  }
  lines.push(...hoistedSetup);

  return `${lines.join('\n')}\n\n\\begin{document}\n\n${body}\n\n\\end{document}\n`;
}

export const ERROR_LOG_LINES = 40;

/**
 * Prepend the first lines of a compiler log as a `%` comment block so the
 * AI edit in Octree opens with the failure in context. The source itself
 * is left untouched below the block.
 */
export function withCompileErrorContext(latex: string, log: string, maxLines = ERROR_LOG_LINES): string {
  const logLines = log
    .replace(/\r\n?/g, '\n')
    .split('\n')
    // The compile service runs in a throwaway temp dir; its path is noise.
    .map((line) => line.replace(/\/tmp\/latex-[^/\s]+\//g, './').trimEnd())
    .filter((line, index, all) => line.length > 0 || (index > 0 && all[index - 1].length > 0));
  if (logLines.length === 0) return latex;

  const excerpt = logLines.slice(0, maxLines);
  const truncated = logLines.length > maxLines;

  const header = [
    '% ---- Compile error from tools.useoctree.com ----',
    '% This document failed to compile. The first lines of the compiler log are',
    '% below; ask the AI to fix the error, then delete this comment block.',
    '%',
  ];
  const body = excerpt.map((line) => `% ${line}`);
  const footer = [
    truncated ? `% ... (${logLines.length - maxLines} more lines omitted)` : null,
    '% ---- End of compile error ----',
    '',
  ].filter((line): line is string => line !== null);

  return [...header, ...body, ...footer, latex].join('\n');
}
