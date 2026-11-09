/**
 * arXiv identifier parsing for the arXiv to LaTeX tool. Accepts bare IDs
 * (`2401.12345`, `2401.12345v2`, `hep-th/9711200`), `arXiv:` prefixes and
 * arxiv.org URLs (/abs, /pdf, /e-print, /src, /html, /format), and returns a
 * normalized ID that is safe to put in an arxiv.org URL path.
 */

export interface ArxivId {
  /** ID without version, e.g. `2401.12345` or `hep-th/9711200`. */
  id: string;
  /** Version number when the input named one (`v2` -> 2). */
  version?: number;
}

/** New-style IDs (April 2007 on): YYMM.NNNN until 2014, YYMM.NNNNN from 2015. */
const NEW_STYLE = /^(\d{2})(\d{2})\.(\d{4,5})(?:v(\d{1,3}))?$/i;
/** Old-style IDs: archive(.SUBJECT)/YYMMNNN, e.g. hep-th/9711200, math.GT/0309136. */
const OLD_STYLE = /^([a-z]+(?:-[a-z]+)?)(?:\.([a-z]{2}))?\/(\d{2})(\d{2})(\d{3})(?:v(\d{1,3}))?$/i;

const URL_PATH = /^\/(?:abs|pdf|e-print|src|html|format)\/(.+?)(?:\.pdf)?\/?$/i;

function parseBare(raw: string): ArxivId | null {
  const value = raw.trim().replace(/^arxiv:\s*/i, '');

  const fresh = NEW_STYLE.exec(value);
  if (fresh) {
    const [, yy, mm, num, v] = fresh;
    const month = Number(mm);
    if (month < 1 || month > 12) return null;
    const year = Number(yy);
    // 5-digit numbers start in 1501; 4-digit ones end with 1412 (new scheme began 0704).
    if (num.length === 5 && year < 15) return null;
    if (num.length === 4 && (year > 14 || (year === 7 && month < 4) || year < 7)) return null;
    return withVersion(`${yy}${mm}.${num}`, v);
  }

  const old = OLD_STYLE.exec(value);
  if (old) {
    const [, archive, subject, yy, mm, num, v] = old;
    const month = Number(mm);
    if (month < 1 || month > 12) return null;
    const id = `${archive.toLowerCase()}${subject ? `.${subject.toUpperCase()}` : ''}/${yy}${mm}${num}`;
    return withVersion(id, v);
  }

  return null;
}

function withVersion(id: string, v: string | undefined): ArxivId {
  const version = v ? Number(v) : undefined;
  return version ? { id, version } : { id };
}

/** Parse user input into an arXiv ID, or null when it is not one. */
export function parseArxivId(input: string): ArxivId | null {
  const raw = (input || '').trim();
  if (!raw || raw.length > 300) return null;

  const direct = parseBare(raw);
  if (direct) return direct;

  let url: URL;
  try {
    url = new URL(/^[a-z]+:\/\//i.test(raw) ? raw : `https://${raw}`);
  } catch {
    return null;
  }
  const host = url.hostname.toLowerCase();
  if (host !== 'arxiv.org' && !host.endsWith('.arxiv.org')) return null;

  const match = URL_PATH.exec(decodeURIComponent(url.pathname));
  return match ? parseBare(match[1]) : null;
}

/** `2401.12345v2` style string for URLs and file names. */
export function formatArxivId({ id, version }: ArxivId): string {
  return version ? `${id}v${version}` : id;
}
