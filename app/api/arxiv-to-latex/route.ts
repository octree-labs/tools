import { NextRequest } from 'next/server';
import { formatArxivId, parseArxivId } from '@/lib/arxiv/id';
import { ArchiveError, type ArchiveFile } from '@/lib/arxiv/tar';
import { unpackEprint } from '@/lib/arxiv/eprint';
import { ArxivFetchError, fetchEprint } from '@/lib/arxiv/fetch-eprint';
import { decodeText, findMainTex, flattenLatex, type TexSource } from '@/lib/arxiv/latex';
import { buildZip, ZipTooLargeError } from '@/lib/arxiv/zip';
import type { ArxivErrorBody, ArxivSourceResponse } from '@/lib/arxiv/types';
import { clientIp, createRateLimiter, createUpstreamThrottle } from '@/lib/rate-limit';

export const runtime = 'nodejs';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

/** Matches the app's /api/drafts cap, so Open in Octree never posts a draft it would reject. */
const DRAFT_MAX_CHARS = 200_000;
/**
 * JSON bytes of text sent back for the viewer; keeps the response under Vercel's 4.5 MB limit
 * (measured as encoded JSON: backslashes double, non-ASCII is 2-3 bytes).
 */
const CONTENTS_BUDGET_BYTES = 3_000_000;
/** Largest zip served (Vercel caps function responses at 4.5 MB). */
const MAX_ZIP_BYTES = 4 * 1024 * 1024;

const globalForArxiv = globalThis as unknown as {
  __arxivIpLimiter__?: ReturnType<typeof createRateLimiter>;
  __arxivUpstream__?: ReturnType<typeof createUpstreamThrottle>;
};
/** Per client: a lookup plus a zip download is two requests; 12/min is generous for a person. */
const ipLimiter = (globalForArxiv.__arxivIpLimiter__ ??= createRateLimiter({ limit: 12, windowMs: 60_000 }));
/** arXiv asks automated clients to stay around one request per second. */
const upstream = (globalForArxiv.__arxivUpstream__ ??= createUpstreamThrottle({ intervalMs: 1_000, maxWaitMs: 15_000 }));

function errorJson(status: number, error: string, code: string, headers?: HeadersInit): Response {
  return Response.json({ error, code } satisfies ArxivErrorBody, {
    status,
    headers: { 'Cache-Control': 'no-store', ...headers },
  });
}

type Loaded =
  | { ok: true; id: string; files: ArchiveFile[]; skipped: string[]; compressedBytes: number }
  | { ok: false; response: Response };

async function loadSource(request: NextRequest, input: string | null): Promise<Loaded> {
  const parsed = parseArxivId(input || '');
  if (!parsed) {
    return {
      ok: false,
      response: errorJson(
        400,
        'That is not a valid arXiv ID or URL. Use an ID like 2401.12345 or a link like arxiv.org/abs/2401.12345.',
        'invalid_id',
      ),
    };
  }

  const decision = ipLimiter.check(clientIp(request.headers));
  if (!decision.allowed) {
    return {
      ok: false,
      response: errorJson(429, 'Too many requests. Please wait a minute and try again.', 'rate_limited', {
        'Retry-After': String(decision.retryAfterSeconds),
      }),
    };
  }
  if (!(await upstream.acquire())) {
    return {
      ok: false,
      response: errorJson(503, 'The tool is busy right now. Please try again in a few seconds.', 'busy', {
        'Retry-After': '5',
      }),
    };
  }

  const id = formatArxivId(parsed);
  try {
    const raw = await fetchEprint(id);
    const eprint = unpackEprint(raw, id.replace(/[^\w.-]+/g, '_'));
    if (eprint.kind === 'pdf' || eprint.kind === 'postscript') {
      return {
        ok: false,
        response: errorJson(
          422,
          'This paper has no LaTeX source: the authors submitted only a PDF to arXiv.',
          eprint.kind === 'pdf' ? 'pdf_only' : 'postscript_only',
        ),
      };
    }
    if (eprint.files.length === 0) {
      return { ok: false, response: errorJson(422, 'The source archive for this paper is empty.', 'empty') };
    }
    return { ok: true, id, files: eprint.files, skipped: eprint.skipped, compressedBytes: raw.length };
  } catch (err) {
    if (err instanceof ArxivFetchError) {
      const headers = err.retryAfterSeconds ? { 'Retry-After': String(err.retryAfterSeconds) } : undefined;
      return { ok: false, response: errorJson(err.status, err.message, err.code, headers) };
    }
    if (err instanceof ArchiveError) {
      const status = err.code === 'too_many_files' || err.code === 'too_large' ? 413 : 422;
      const message =
        err.code === 'unsafe_path'
          ? 'The source archive contains unsafe file paths and was rejected.'
          : err.code === 'too_many_files'
            ? `${err.message} Download it from arXiv instead.`
            : err.message;
      return { ok: false, response: errorJson(status, message, err.code) };
    }
    console.error('arxiv-to-latex error:', err);
    return { ok: false, response: errorJson(500, 'Something went wrong while reading this paper.', 'internal') };
  }
}

function buildResponse(id: string, files: ArchiveFile[], skipped: string[], compressedBytes: number): ArxivSourceResponse {
  const sorted = [...files].sort((a, b) => a.path.localeCompare(b.path));
  const texts: TexSource[] = [];
  const listing = sorted.map((file) => {
    const text = decodeText(file.path, file.data);
    if (text !== null) texts.push({ path: file.path, text });
    return { path: file.path, size: file.data.length, text: text !== null };
  });

  const mainFile = findMainTex(texts);

  // Main file first, then other .tex, then the rest, until the budget runs out.
  const priority = (p: string) => (p === mainFile ? 0 : /\.(tex|ltx)$/i.test(p) ? 1 : /\.(bib|bbl)$/i.test(p) ? 2 : 3);
  const contents: Record<string, string> = {};
  const jsonBytes = (s: string) => Buffer.byteLength(JSON.stringify(s));
  // The Octree payload and the listing share the same response.
  let used = Buffer.byteLength(JSON.stringify(listing)) + Buffer.byteLength(JSON.stringify(skipped));
  const octreeReserve = DRAFT_MAX_CHARS * 2;
  for (const t of [...texts].sort((a, b) => priority(a.path) - priority(b.path))) {
    const cost = t.text.length > CONTENTS_BUDGET_BYTES ? Infinity : jsonBytes(t.text) + jsonBytes(t.path);
    if (used + cost > CONTENTS_BUDGET_BYTES - octreeReserve) continue;
    contents[t.path] = t.text;
    used += cost;
  }

  let octree: ArxivSourceResponse['octree'] = null;
  if (mainFile) {
    const flat = flattenLatex(mainFile, texts, { maxChars: DRAFT_MAX_CHARS });
    const mainText = texts.find((t) => t.path === mainFile)?.text ?? '';
    if (flat.latex.length <= DRAFT_MAX_CHARS) {
      octree = { latex: flat.latex, mode: 'flattened', inlined: flat.inlined, missing: flat.missing };
    } else if (mainText.length <= DRAFT_MAX_CHARS) {
      octree = { latex: mainText, mode: 'main-only', inlined: [], missing: [] };
    }
  }

  return {
    id,
    absUrl: `https://arxiv.org/abs/${id}`,
    sourceUrl: `https://arxiv.org/src/${id}`,
    mainFile,
    files: listing,
    contents,
    skipped,
    octree,
    // The zip is about the size of arXiv's gzip; leave headroom under the response cap.
    zipAvailable: compressedBytes <= MAX_ZIP_BYTES * 0.9,
  };
}

/** POST { id } -> file tree, text contents and the Open in Octree payload. */
export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as { id?: unknown } | null;
  const input = typeof body?.id === 'string' ? body.id : null;
  const loaded = await loadSource(request, input);
  if (!loaded.ok) return loaded.response;
  return Response.json(buildResponse(loaded.id, loaded.files, loaded.skipped, loaded.compressedBytes), {
    headers: { 'Cache-Control': 'no-store' },
  });
}

/** GET ?id=<id>&format=zip -> the source as a .zip download. */
export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  if (params.get('format') !== 'zip') {
    return errorJson(400, 'Use POST with { id }, or GET with ?id=<arXiv id>&format=zip.', 'bad_request');
  }
  const loaded = await loadSource(request, params.get('id'));
  if (!loaded.ok) return loaded.response;

  const tooLarge = () =>
    errorJson(
      413,
      'This source is too large to repackage here. Download the original archive from arXiv instead.',
      'zip_too_large',
    );
  // Same rule as zipAvailable; refuse before deflating anything.
  if (loaded.compressedBytes > MAX_ZIP_BYTES * 0.9) return tooLarge();
  let zip: Uint8Array;
  try {
    zip = buildZip([...loaded.files].sort((a, b) => a.path.localeCompare(b.path)), MAX_ZIP_BYTES);
  } catch (err) {
    if (err instanceof ZipTooLargeError) return tooLarge();
    throw err;
  }
  const name = `arXiv-${loaded.id.replace(/[^\w.-]+/g, '_')}.zip`;
  return new Response(zip as unknown as BodyInit, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${name}"`,
      'Content-Length': String(zip.length),
      'Cache-Control': 'no-store',
    },
  });
}
