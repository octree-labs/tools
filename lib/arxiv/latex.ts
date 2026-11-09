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
const INCLUDE_RE = /\\(input|include|subfile)(?:\s*\{([^{}]*)\}|\s+([^\s{}%\\]+))/g;
const COMMON_NAMES = new Set(['main', 'ms', 'paper', 'article', 'manuscript', 'root', 'arxiv']);

function dirname(path: string): string {
  const at = path.lastIndexOf('/');
  return at === -1 ? '' : path.slice(0, at);
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
  for (const f of texFiles) {
    for (const m of (stripped.get(f.path) || '').matchAll(INCLUDE_RE)) {
      const target = (m[2] ?? m[3] ?? '').trim();
      const resolved = target && resolveInclude(dirname(f.path), target, byPath);
      if (resolved && resolved !== f.path) included.add(resolved);
    }
  }

  const score = (f: TexSource) => {
    const text = stripped.get(f.path) || '';
    const base = f.path.slice(f.path.lastIndexOf('/') + 1).replace(/\.[^.]+$/, '').toLowerCase();
    return [
      BEGIN_DOCUMENT.test(text) ? 1 : 0,
      included.has(f.path) ? 0 : 1,
      DOCUMENTCLASS.test(text) ? 1 : 0,
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

/**
 * Inline \input, \include and \subfile (relative to the main file's folder,
 * as TeX resolves them), and replace \bibliography{...} with the main file's
 * .bbl when the source ships one. Commented-out commands are left alone.
 */
export function flattenLatex(mainPath: string, files: TexSource[], maxDepth = 8): FlattenResult {
  const byPath = new Map(files.map((f) => [f.path, f.text]));
  const baseDir = dirname(mainPath);
  const inlined: string[] = [];
  const missing: string[] = [];

  const expand = (text: string, stack: string[]): string =>
    text
      .split('\n')
      .map((line) => {
        const cut = commentStart(line);
        const code = cut === -1 ? line : line.slice(0, cut);
        const comment = cut === -1 ? '' : line.slice(cut);
        if (!/\\(input|include|subfile)/.test(code)) return line;
        const replaced = code.replace(INCLUDE_RE, (whole, cmd: string, braced?: string, bare?: string) => {
          const target = (braced ?? bare ?? '').trim();
          const resolved = target ? resolveInclude(baseDir, target, byPath) : null;
          if (!resolved) {
            // Bare `\input epsf` style lines load macro files from TeX's path; not worth reporting.
            if (target && (braced !== undefined || cmd !== 'input')) missing.push(target);
            return whole;
          }
          if (stack.includes(resolved) || stack.length > maxDepth) return whole;
          inlined.push(resolved);
          let body = byPath.get(resolved) || '';
          if (cmd === 'subfile') body = subfileBody(body);
          const inner = expand(body, [...stack, resolved]);
          const open = `%% >>> ${resolved}`;
          const close = `%% <<< ${resolved}`;
          return cmd === 'include'
            ? `\\clearpage\n${open}\n${inner}\n${close}\n\\clearpage\n`
            : `\n${open}\n${inner}\n${close}\n`;
        });
        return replaced + comment;
      })
      .join('\n');

  let latex = expand(byPath.get(mainPath) || '', [mainPath]);

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
