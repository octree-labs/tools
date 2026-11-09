import { gunzipSync } from 'node:zlib';
import { ArchiveError, looksLikeTar, parseTar, safeArchivePath, type ArchiveFile } from './tar';

/**
 * Turn the bytes served by https://arxiv.org/e-print/<id> into files. arXiv
 * serves one of: a gzipped tar (multi-file source), a gzipped single .tex,
 * or the PDF itself when the authors submitted no source.
 */

export const EPRINT_LIMITS = {
  /** Largest download accepted from arXiv. */
  maxCompressedBytes: 30 * 1024 * 1024,
  /** Largest unpacked size (gzip bomb guard). */
  maxUnpackedBytes: 120 * 1024 * 1024,
  maxFiles: 200,
};

export type Eprint =
  | { kind: 'pdf' }
  | { kind: 'postscript' }
  | { kind: 'source'; files: ArchiveFile[]; skipped: string[] };

function startsWith(buf: Uint8Array, text: string): boolean {
  if (buf.length < text.length) return false;
  for (let i = 0; i < text.length; i++) if (buf[i] !== text.charCodeAt(i)) return false;
  return true;
}

function isGzip(buf: Uint8Array): boolean {
  return buf.length > 18 && buf[0] === 0x1f && buf[1] === 0x8b;
}

/** Original file name stored in a gzip header (FNAME), if any. */
export function gzipOriginalName(buf: Uint8Array): string | null {
  if (!isGzip(buf)) return null;
  const flags = buf[3];
  if (!(flags & 0x08)) return null;
  let pos = 10;
  if (flags & 0x04) pos += 2 + (buf[10] | (buf[11] << 8)); // FEXTRA
  const end = buf.indexOf(0, pos);
  if (end === -1 || end - pos > 255) return null;
  return new TextDecoder('latin1').decode(buf.subarray(pos, end));
}

function singleFileName(raw: Uint8Array, fallbackBase: string): string {
  const original = gzipOriginalName(raw);
  if (original) {
    try {
      const safe = safeArchivePath(original);
      const base = safe?.slice(safe.lastIndexOf('/') + 1);
      if (base && /\.(tex|ltx|latex)$/i.test(base)) return base;
    } catch {
      // fall through to the default name
    }
  }
  return `${fallbackBase}.tex`;
}

export function unpackEprint(raw: Uint8Array, fallbackBase = 'main'): Eprint {
  if (raw.length > EPRINT_LIMITS.maxCompressedBytes) {
    throw new ArchiveError('The source is larger than 30 MB.', 'too_large');
  }

  let body = raw;
  if (isGzip(raw)) {
    try {
      body = new Uint8Array(gunzipSync(raw, { maxOutputLength: EPRINT_LIMITS.maxUnpackedBytes }));
    } catch (err) {
      const code = (err as { code?: string }).code;
      if (code === 'ERR_BUFFER_TOO_LARGE' || (err instanceof RangeError)) {
        throw new ArchiveError('The unpacked source is too large.', 'too_large');
      }
      throw new ArchiveError('The source archive is corrupt.', 'corrupt');
    }
  }

  if (startsWith(body, '%PDF')) return { kind: 'pdf' };
  if (startsWith(body, '%!PS')) return { kind: 'postscript' };

  if (looksLikeTar(body)) {
    const { files, skipped } = parseTar(body, {
      maxFiles: EPRINT_LIMITS.maxFiles,
      maxTotalBytes: EPRINT_LIMITS.maxUnpackedBytes,
    });
    return { kind: 'source', files, skipped };
  }

  // A single (gzipped) .tex file.
  return { kind: 'source', files: [{ path: singleFileName(raw, fallbackBase), data: body }], skipped: [] };
}
