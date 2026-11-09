/**
 * LaTeX-side helpers for arXiv sources: decode text files, find the main
 * .tex file, and inline \input/\include so the paper can be opened in Octree
 * as a single file.
 */

export interface TexSource {
  path: string;
  text: string;
}

export const TEXT_EXTENSIONS = new Set([
  'tex', 'ltx', 'latex', 'bib', 'bbl', 'bst', 'sty', 'cls', 'clo', 'cfg', 'def', 'fd',
  'dtx', 'ins', 'txt', 'md', 'tikz', 'pgf', 'pdf_tex', 'pdftex_t', 'pstex_t', 'csv',
  'dat', 'json', 'xml', 'mk', 'ist', 'gin', 'idx', 'nls', 'abs', 'readme', 'xxx', 'bbx',
  'cbx', 'dbx', 'lbx', 'tikzstyles', 'lua', 'py', 'r', 'm', 'sh', 'bat', 'gnuplot', 'gp',
]);

function extensionOf(path: string): string {
  const base = path.slice(path.lastIndexOf('/') + 1);
  const dot = base.lastIndexOf('.');
  return dot === -1 ? '' : base.slice(dot + 1).toLowerCase();
}

/** Decode a file as text when its extension and bytes say it is text, else null. */
export function decodeText(path: string, data: Uint8Array): string | null {
  const ext = extensionOf(path);
  const base = path.slice(path.lastIndexOf('/') + 1).toLowerCase();
  if (!TEXT_EXTENSIONS.has(ext) && !base.startsWith('00readme') && base !== 'makefile') return null;
  const probe = data.subarray(0, 8192);
  if (probe.includes(0)) return null;
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(data);
  } catch {
    // Older submissions are often Latin-1.
    return new TextDecoder('latin1').decode(data);
  }
}

/** Index of the first unescaped % on a line, or -1. */
function commentStart(line: string): number {
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '\\') {
      i++;
      continue;
    }
    if (line[i] === '%') return i;
  }
  return -1;
}

/** Text with % comments removed (line structure kept). */
export function stripComments(text: string): string {
  return text
    .split('\n')
    .map((line) => {
      const at = commentStart(line);
      return at === -1 ? line : line.slice(0, at);
    })
    .join('\n');
}

const DOCUMENTCLASS = /\\document(?:class|style)\b/;
const BEGIN_DOCUMENT = /\\begin\s*\{document\}/;
/**
 * \import-package commands (`\import{dir}{file}`, `\subimport`, `\inputfrom`, ...) in groups 1-3,
 * then \input/\include/\subfile with a braced (5) or bare (6) argument.
 */
const INCLUDE_RE =
  /\\(?:(subimport|import|subinputfrom|inputfrom|subincludefrom|includefrom)\*?\s*\{([^{}]*)\}\s*\{([^{}]*)\}|(input|include|subfile)(?:\s*\{([^{}]*)\}|\s+([^\s{}%\\]+)))/g;
const INCLUDE_HINT = /\\(?:input|include|subfile|import|subimport|subinputfrom|subincludefrom)/;
const STANDALONE = /\\documentclass\s*(?:\[[^\]]*\])?\s*\{standalone\}/;
const COMMON_NAMES = new Set(['main', 'ms', 'paper', 'article', 'manuscript', 'root', 'arxiv']);

function dirname(path: string): string {
  const at = path.lastIndexOf('/');
  return at === -1 ? '' : path.slice(0, at);
}

interface IncludeMatch {
  cmd: string;
  /** Folder the target is resolved in. */
  dir: string | null;
  target: string;
  braced: boolean;
}

/**
 * Interpret one INCLUDE_RE match. `inputDir` is where \input resolves (the main file's folder,
 * or the folder of the enclosing \import), `rootDir` is the main file's folder.
 */
function readInclude(m: RegExpMatchArray | string[], inputDir: string, rootDir: string): IncludeMatch {
  if (m[1]) {
    const sub = m[1].startsWith('sub');
    const dir = joinPath(sub ? inputDir : rootDir, m[2] ?? '');
    return { cmd: m[1], dir, target: (m[3] ?? '').trim(), braced: true };
  }
  return { cmd: m[4], dir: inputDir, target: (m[5] ?? m[6] ?? '').trim(), braced: m[5] !== undefined };
}

function joinPath(dir: string, name: string): string | null {
  const parts = dir ? dir.split('/') : [];
  for (const segment of name.trim().replace(/\\/g, '/').split('/')) {
    if (segment === '' || segment === '.') continue;
    if (segment === '..') {
      if (!parts.length) return null;
      parts.pop();
    } else {
      parts.push(segment);
    }
  }
  return parts.join('/');
}

/** Resolve an \input target the way TeX does: as given, then with `.tex`. */
function resolveInclude(baseDir: string, target: string, files: Map<string, string>): string | null {
  const joined = joinPath(baseDir, target);
  if (!joined) return null;
  if (files.has(joined)) return joined;
  if (files.has(`${joined}.tex`)) return `${joined}.tex`;
  return null;
}

/** Top-level file named by arXiv's 00README.json (or legacy 00README.XXX `toplevelfile`). */
function readmeToplevel(files: TexSource[]): string | null {
  for (const file of files) {
    const base = file.path.toLowerCase();
    if (base === '00readme.json') {
      try {
        const parsed = JSON.parse(file.text) as { sources?: Array<{ filename?: string; usage?: string }> };
        const top = parsed.sources?.find((s) => s.usage === 'toplevel' && s.filename);
        if (top?.filename) return top.filename;
      } catch {
        // ignore malformed readme
      }
    }
    if (base === '00readme.xxx') {
      const match = /^\s*(\S+)\s+toplevelfile\b/im.exec(file.text);
      if (match) return match[1];
    }
  }
  return null;
}

/**
 * Pick the main .tex file: the 00README toplevel when present; otherwise
 * among files with \documentclass or \begin{document}, prefer ones with
 * \begin{document}, that no other file \inputs, with \documentclass, near
 * the root, with a usual name, then the largest.
 */
export function findMainTex(files: TexSource[]): string | null {
  const texFiles = files.filter((f) => /\.(tex|ltx|latex)$/i.test(f.path));
  const byPath = new Map(texFiles.map((f) => [f.path, f.text]));

  const fromReadme = readmeToplevel(files);
  if (fromReadme && byPath.has(fromReadme)) return fromReadme;

  const stripped = new Map(texFiles.map((f) => [f.path, stripComments(f.text)]));
  // A file with \begin{document} counts too: some papers keep \documentclass in an \input preamble.
  const candidates = texFiles.filter((f) => {
    const text = stripped.get(f.path) || '';
    return DOCUMENTCLASS.test(text) || BEGIN_DOCUMENT.test(text);
  });
  if (candidates.length === 0) return texFiles.length === 1 ? texFiles[0].path : null;

  const included = new Set<string>();
  const includeCount = new Map<string, number>();
  for (const f of texFiles) {
    let count = 0;
    for (const m of (stripped.get(f.path) || '').matchAll(INCLUDE_RE)) {
      const inc = readInclude(m, dirname(f.path), dirname(f.path));
      const resolved = inc.target && inc.dir !== null ? resolveInclude(inc.dir, inc.target, byPath) : null;
      if (resolved && resolved !== f.path) {
        included.add(resolved);
        count++;
      }
    }
    includeCount.set(f.path, count);
  }

  const score = (f: TexSource) => {
    const text = stripped.get(f.path) || '';
    const base = f.path.slice(f.path.lastIndexOf('/') + 1).replace(/\.[^.]+$/, '').toLowerCase();
    return [
      BEGIN_DOCUMENT.test(text) ? 1 : 0,
      included.has(f.path) ? 0 : 1,
      // A standalone figure/table document is never the paper.
      STANDALONE.test(text) ? 0 : 1,
      DOCUMENTCLASS.test(text) ? 1 : 0,
      includeCount.get(f.path) ?? 0,
      -f.path.split('/').length,
      COMMON_NAMES.has(base) ? 1 : 0,
      f.text.length,
    ];
  };
  const ranked = candidates
    .map((f) => ({ f, s: score(f) }))
    .sort((a, b) => {
      for (let i = 0; i < a.s.length; i++) if (a.s[i] !== b.s[i]) return b.s[i] - a.s[i];
      return a.f.path.localeCompare(b.f.path);
    });
  return ranked[0].f.path;
}

export interface FlattenResult {
  latex: string;
  /** Files inlined into the result. */
  inlined: string[];
  /** \input targets that are not in the source (often packages or generated files). */
  missing: string[];
}

export interface FlattenOptions {
  /** Nesting limit for \input chains. */
  maxDepth?: number;
  /**
   * Stop inlining once this many characters have been inlined, so a file
   * \input-ed many times (or a deep fan-out) cannot blow up memory. The
   * result can then exceed the cap and the caller falls back to main-only.
   */
  maxChars?: number;
}

/**
 * Inline \input, \include, \subfile and the import package's \import /
 * \subimport (relative to the main file's folder, as TeX resolves them), and
 * replace \bibliography{...} with the main file's .bbl when the source ships
 * one. Only text sources are candidates, so binaries are never inlined.
 * Commented-out commands are left alone.
 */
export function flattenLatex(mainPath: string, files: TexSource[], options: FlattenOptions = {}): FlattenResult {
  const { maxDepth = 8, maxChars = 1_000_000 } = options;
  const byPath = new Map(files.map((f) => [f.path, f.text]));
  const rootDir = dirname(mainPath);
  const inlined: string[] = [];
  const missing: string[] = [];
  let budget = maxChars;

  const expand = (text: string, stack: string[], inputDir: string): string =>
    text
      .split('\n')
      .map((line) => {
        const cut = commentStart(line);
        const code = cut === -1 ? line : line.slice(0, cut);
        const comment = cut === -1 ? '' : line.slice(cut);
        if (!INCLUDE_HINT.test(code)) return line;
        const replaced = code.replace(INCLUDE_RE, (...args: string[]) => {
          const whole = args[0];
          const inc = readInclude(args, inputDir, rootDir);
          const resolved = inc.target && inc.dir !== null ? resolveInclude(inc.dir, inc.target, byPath) : null;
          if (!resolved) {
            // Bare `\input epsf` style lines load macro files from TeX's path; not worth reporting.
            if (inc.target && (inc.braced || inc.cmd !== 'input')) missing.push(inc.target);
            return whole;
          }
          if (stack.includes(resolved) || stack.length > maxDepth) return whole;
          let body = byPath.get(resolved) || '';
          if (budget - body.length < 0) return whole;
          budget -= body.length;
          inlined.push(resolved);
          if (inc.cmd === 'subfile') body = subfileBody(body);
          // Inside an \import-ed file, \input resolves against the imported folder.
          const isImport = inc.cmd !== 'input' && inc.cmd !== 'include' && inc.cmd !== 'subfile';
          const inner = expand(body, [...stack, resolved], isImport ? dirname(resolved) : inputDir);
          const open = `%% >>> ${resolved}`;
          const close = `%% <<< ${resolved}`;
          return /include/.test(inc.cmd)
            ? `\\clearpage\n${open}\n${inner}\n${close}\n\\clearpage\n`
            : `\n${open}\n${inner}\n${close}\n`;
        });
        return replaced + comment;
      })
      .join('\n');

  let latex = expand(byPath.get(mainPath) || '', [mainPath], rootDir);

  const bblPath = mainPath.replace(/\.[^./]+$/, '') + '.bbl';
  const bbl = byPath.get(bblPath);
  if (bbl !== undefined) {
    let used = false;
    latex = latex
      .split('\n')
      .map((line) => {
        const cut = commentStart(line);
        const code = cut === -1 ? line : line.slice(0, cut);
        if (used || !/\\bibliography\s*\{/.test(code)) return line;
        used = true;
        return code.replace(/\\bibliography\s*\{[^{}]*\}/, `\n%% >>> ${bblPath}\n${bbl}\n%% <<< ${bblPath}\n`);
      })
      .join('\n');
    if (used) inlined.push(bblPath);
  }

  return { latex, inlined: [...new Set(inlined)], missing: [...new Set(missing)] };
}

/** A \subfile target is a full document; keep only what is inside its document environment. */
function subfileBody(text: string): string {
  const begin = /\\begin\s*\{document\}/.exec(text);
  const end = /\\end\s*\{document\}/.exec(text);
  if (!begin || !end || end.index < begin.index) return text;
  return text.slice(begin.index + begin[0].length, end.index);
}
