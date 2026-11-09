import type { DraftFile } from '@/lib/draft-files';

/**
 * Templates are single files, but a few embed their bibliography with
 * `\begin{filecontents*}{references.bib} … \end{filecontents*}` so they compile
 * on their own. Open in Octree splits those blocks out into real files (the
 * .bib the user can edit in the project) and removes them, together with the
 * comment lines directly above that explain the block, from `main.tex`.
 * Returns null for a template with nothing to split (it opens as one file).
 */

const BLOCK_RE =
  /\\begin\{filecontents\*?\}(?:\[[^\]]*\])?\{([^}]+)\}[^\n]*\n([\s\S]*?)\\end\{filecontents\*?\}[^\n]*(?:\n|$)/g;

export function templateFiles(code: string): DraftFile[] | null {
  const extracted: DraftFile[] = [];
  let main = '';
  let last = 0;
  for (const match of code.matchAll(BLOCK_RE)) {
    const name = match[1].trim();
    if (!name || extracted.some((f) => f.path === name)) return null;
    let before = code.slice(last, match.index);
    // Drop the run of `%` comment lines right above the block (they describe it).
    before = before.replace(/(?:^|\n)(?:[ \t]*%[^\n]*\n)+$/, (run) => (run.startsWith('\n') ? '\n' : ''));
    main += before;
    extracted.push({ path: name, content: match[2] });
    last = match.index! + match[0].length;
  }
  if (extracted.length === 0) return null;
  main += code.slice(last);
  return [{ path: 'main.tex', content: main.replace(/^\n+/, '') }, ...extracted];
}
