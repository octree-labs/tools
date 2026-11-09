/** JSON contract of /api/arxiv-to-latex (shared by the route and the page). */

export interface ArxivSourceFile {
  path: string;
  size: number;
  /** Text files can be shown in the viewer. */
  text: boolean;
}

export interface ArxivSourceResponse {
  /** ID as requested, with version when one was given (e.g. `2401.12345v2`). */
  id: string;
  absUrl: string;
  /** arXiv's own download of the original source archive. */
  sourceUrl: string;
  mainFile: string | null;
  files: ArxivSourceFile[];
  /** Text file contents, keyed by path (large sources may leave some out). */
  contents: Record<string, string>;
  /** Links, devices and other entries that were not unpacked. */
  skipped: string[];
  /**
   * Single-file LaTeX for Open in Octree: the main file with \input/\include
   * (and the .bbl) inlined, or the main file alone when that is too large.
   */
  octree: {
    latex: string;
    mode: 'flattened' | 'main-only';
    inlined: string[];
    missing: string[];
  } | null;
  /** Whether /api/arxiv-to-latex?format=zip can serve this source. */
  zipAvailable: boolean;
}

export interface ArxivErrorBody {
  error: string;
  code: string;
}
