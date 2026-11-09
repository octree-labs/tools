/**
 * Minimal in-memory tar reader for arXiv e-prints. Nothing is ever written to
 * disk, but entry names still end up in the file tree, the zip download and
 * the Open in Octree payload, so the archive is held to strict rules:
 * absolute paths and `..` segments reject the whole archive, symlinks,
 * hardlinks and device entries are skipped, and file count is capped.
 */

export class ArchiveError extends Error {
  constructor(
    message: string,
    readonly code: 'unsafe_path' | 'too_many_files' | 'too_large' | 'corrupt',
  ) {
    super(message);
    this.name = 'ArchiveError';
  }
}

export interface ArchiveFile {
  path: string;
  data: Uint8Array;
}

export interface TarResult {
  files: ArchiveFile[];
  /** Entries left out (links, devices) with the reason, for the UI. */
  skipped: string[];
}

export interface TarLimits {
  maxFiles: number;
  maxTotalBytes: number;
}

const BLOCK = 512;
const decoder = new TextDecoder('utf-8');

function readString(buf: Uint8Array, offset: number, length: number): string {
  const slice = buf.subarray(offset, offset + length);
  const nul = slice.indexOf(0);
  return decoder.decode(nul === -1 ? slice : slice.subarray(0, nul));
}

function readNumber(buf: Uint8Array, offset: number, length: number): number {
  // GNU base-256 encoding for large values: high bit of the first byte set.
  if (buf[offset] & 0x80) {
    let value = buf[offset] & 0x7f;
    for (let i = 1; i < length; i++) value = value * 256 + buf[offset + i];
    return value;
  }
  const text = readString(buf, offset, length).trim();
  if (!text) return 0;
  if (!/^[0-7]+$/.test(text)) throw new ArchiveError('The archive is corrupt.', 'corrupt');
  return parseInt(text, 8);
}

/** True when `buf` starts with a tar header whose checksum is valid. */
export function looksLikeTar(buf: Uint8Array): boolean {
  if (buf.length < BLOCK) return false;
  return headerChecksumOk(buf, 0);
}

function headerChecksumOk(buf: Uint8Array, offset: number): boolean {
  const stored = readString(buf, offset + 148, 8).trim();
  if (!/^[0-7]+$/.test(stored)) return false;
  let sum = 0;
  for (let i = 0; i < BLOCK; i++) {
    sum += i >= 148 && i < 156 ? 0x20 : buf[offset + i];
  }
  return sum === parseInt(stored, 8);
}

function isZeroBlock(buf: Uint8Array, offset: number): boolean {
  for (let i = offset; i < offset + BLOCK; i++) if (buf[i] !== 0) return false;
  return true;
}

/**
 * Normalize an archive path. Returns null for names that are only `.`/empty;
 * throws for absolute paths, drive letters and `..` segments.
 */
export function safeArchivePath(name: string): string | null {
  if (name.includes('\0')) throw new ArchiveError(`Unsafe path in archive: ${JSON.stringify(name)}`, 'unsafe_path');
  const unified = name.replace(/\\/g, '/');
  if (unified.startsWith('/') || /^[a-zA-Z]:/.test(unified)) {
    throw new ArchiveError(`Unsafe path in archive: ${name}`, 'unsafe_path');
  }
  const parts: string[] = [];
  for (const segment of unified.split('/')) {
    if (segment === '' || segment === '.') continue;
    if (segment === '..') throw new ArchiveError(`Unsafe path in archive: ${name}`, 'unsafe_path');
    parts.push(segment);
  }
  return parts.length ? parts.join('/') : null;
}

/** Parse pax extended header records (`<len> key=value\n`). */
function parsePax(data: Uint8Array): Record<string, string> {
  const out: Record<string, string> = {};
  const text = decoder.decode(data);
  let pos = 0;
  while (pos < text.length) {
    const space = text.indexOf(' ', pos);
    if (space === -1) break;
    const len = parseInt(text.slice(pos, space), 10);
    if (!Number.isFinite(len) || len <= 0) break;
    const record = text.slice(space + 1, pos + len - 1);
    const eq = record.indexOf('=');
    if (eq > 0) out[record.slice(0, eq)] = record.slice(eq + 1);
    pos += len;
  }
  return out;
}

export function parseTar(buf: Uint8Array, limits: TarLimits): TarResult {
  const files: ArchiveFile[] = [];
  const skipped: string[] = [];
  const seen = new Set<string>();
  let total = 0;
  let offset = 0;
  let longName: string | null = null;
  let paxPath: string | null = null;
  // Links, directories and metadata headers are not counted as files, but each one still costs
  // work and (for links/devices) a `skipped` string sent to the browser, so bound them too.
  const maxEntries = limits.maxFiles * 10;
  let entries = 0;

  while (offset + BLOCK <= buf.length) {
    if (isZeroBlock(buf, offset)) break;
    if (++entries > maxEntries) {
      throw new ArchiveError(`The source has more than ${limits.maxFiles} files.`, 'too_many_files');
    }
    if (!headerChecksumOk(buf, offset)) throw new ArchiveError('The archive is corrupt.', 'corrupt');
    const header = offset;

    const size = readNumber(buf, offset + 124, 12);
    const type = String.fromCharCode(buf[offset + 156] || 0x30);
    const magic = readString(buf, offset + 257, 6);
    const dataStart = offset + BLOCK;
    const dataEnd = dataStart + size;
    if (dataEnd > buf.length) throw new ArchiveError('The archive is truncated.', 'corrupt');
    const data = buf.subarray(dataStart, dataEnd);
    offset = dataStart + Math.ceil(size / BLOCK) * BLOCK;

    if (type === 'L') {
      longName = readString(data, 0, data.length);
      continue;
    }
    if (type === 'x') {
      const pax = parsePax(data);
      if (pax.path) paxPath = pax.path;
      continue;
    }
    if (type === 'g' || type === 'K') continue;

    let name = readString(buf, header, 100);
    // POSIX ustar only: old GNU headers ("ustar  ") keep atime/ctime where the prefix would be.
    if (magic === 'ustar') {
      const prefix = readString(buf, header + 345, 155);
      if (prefix) name = `${prefix}/${name}`;
    }
    if (paxPath !== null) name = paxPath;
    else if (longName !== null) name = longName;
    longName = null;
    paxPath = null;

    // Validate every name, including links and directories we skip.
    const path = safeArchivePath(name);

    if (type === '5') continue; // directory
    if (type === '1' || type === '2') {
      skipped.push(`${path ?? name} (link)`);
      continue;
    }
    if (type !== '0' && type !== '7') {
      skipped.push(`${path ?? name} (special file)`);
      continue;
    }
    if (!path) continue;

    if (files.length >= limits.maxFiles) {
      throw new ArchiveError(`The source has more than ${limits.maxFiles} files.`, 'too_many_files');
    }
    total += size;
    if (total > limits.maxTotalBytes) {
      throw new ArchiveError('The unpacked source is too large.', 'too_large');
    }
    if (seen.has(path)) {
      // Later entries win, as with `tar -x`.
      const index = files.findIndex((f) => f.path === path);
      files[index] = { path, data };
    } else {
      seen.add(path);
      files.push({ path, data });
    }
  }

  return { files, skipped };
}
