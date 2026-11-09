import { EPRINT_LIMITS } from './eprint';

/**
 * Download https://arxiv.org/e-print/<id>. Follows arXiv's API etiquette:
 * a User-Agent naming the tool with a contact URL, one request at a time
 * per instance (the caller throttles), no persistent caching.
 */

export const ARXIV_USER_AGENT =
  'OctreeTools-arXivToLaTeX/1.0 (+https://tools.useoctree.com/tools/arxiv-to-latex)';

const FETCH_TIMEOUT_MS = 30_000;

export class ArxivFetchError extends Error {
  constructor(
    message: string,
    readonly code: 'not_found' | 'upstream_error' | 'timeout' | 'too_large',
    readonly status: number,
  ) {
    super(message);
    this.name = 'ArxivFetchError';
  }
}

export async function fetchEprint(idWithVersion: string): Promise<Uint8Array> {
  let response: Response;
  try {
    response = await fetch(`https://arxiv.org/e-print/${idWithVersion}`, {
      headers: { 'User-Agent': ARXIV_USER_AGENT, Accept: '*/*' },
      redirect: 'follow',
      cache: 'no-store',
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
  } catch (err) {
    if ((err as Error).name === 'TimeoutError' || (err as Error).name === 'AbortError') {
      throw new ArxivFetchError('arXiv took too long to respond. Please try again.', 'timeout', 504);
    }
    throw new ArxivFetchError('Could not reach arXiv. Please try again.', 'upstream_error', 502);
  }

  const finalHost = new URL(response.url || 'https://arxiv.org').hostname;
  if (finalHost !== 'arxiv.org' && !finalHost.endsWith('.arxiv.org')) {
    throw new ArxivFetchError('arXiv returned an unexpected redirect.', 'upstream_error', 502);
  }

  if (response.status === 404 || response.status === 410) {
    throw new ArxivFetchError('No arXiv paper with this ID was found. Check the ID and version.', 'not_found', 404);
  }
  if (!response.ok) {
    throw new ArxivFetchError(`arXiv answered with HTTP ${response.status}. Please try again later.`, 'upstream_error', 502);
  }
  const type = response.headers.get('content-type') || '';
  if (type.startsWith('text/html')) {
    // arXiv answers some missing or withdrawn IDs with an HTML page.
    throw new ArxivFetchError('No source is available for this arXiv ID. Check the ID and version.', 'not_found', 404);
  }
  const declared = Number(response.headers.get('content-length') || 0);
  if (declared > EPRINT_LIMITS.maxCompressedBytes) {
    await response.body?.cancel();
    throw new ArxivFetchError('This paper\'s source is larger than 30 MB, too big to open here.', 'too_large', 413);
  }

  const reader = response.body?.getReader();
  if (!reader) throw new ArxivFetchError('arXiv sent an empty response.', 'upstream_error', 502);
  const chunks: Uint8Array[] = [];
  let total = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.length;
      if (total > EPRINT_LIMITS.maxCompressedBytes) {
        await reader.cancel();
        throw new ArxivFetchError('This paper\'s source is larger than 30 MB, too big to open here.', 'too_large', 413);
      }
      chunks.push(value);
    }
  } catch (err) {
    if (err instanceof ArxivFetchError) throw err;
    if ((err as Error).name === 'TimeoutError' || (err as Error).name === 'AbortError') {
      throw new ArxivFetchError('arXiv took too long to respond. Please try again.', 'timeout', 504);
    }
    throw new ArxivFetchError('The download from arXiv failed. Please try again.', 'upstream_error', 502);
  }

  const out = new Uint8Array(total);
  let pos = 0;
  for (const chunk of chunks) {
    out.set(chunk, pos);
    pos += chunk.length;
  }
  if (out.length === 0) throw new ArxivFetchError('arXiv sent an empty response.', 'upstream_error', 502);
  return out;
}
