/**
 * Upload validation shared by the AI converter UI (components/AIToolLayout)
 * and its API route (app/api/convert). Pure functions so both sides agree on
 * what is accepted and tests can cover them without a browser.
 */

export type UploadKind = 'image' | 'pdf';

/**
 * Raw file limit. Vercel rejects request bodies over 4.5 MB and the file
 * travels base64-encoded (+33%) inside JSON, so 3 MB is the safe ceiling.
 */
export const MAX_UPLOAD_BYTES = 3 * 1024 * 1024;
export const MAX_UPLOAD_LABEL = '3 MB';

/**
 * Page ceiling for PDFs. The tools are anonymous and there is no per-IP rate
 * limiter (an in-memory one does not hold on serverless), so cost per request
 * is bounded here instead: gpt-4o-mini reads every page as text plus an image,
 * and the reply is capped at 12k tokens anyway, so longer PDFs only cost more
 * without converting more.
 */
export const MAX_PDF_PAGES = 20;

/** Image types the vision model accepts (HEIC is not one of them). */
export const IMAGE_MIME_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'] as const;
const IMAGE_EXTENSIONS: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  gif: 'image/gif',
};

export const UPLOAD_ERRORS = {
  unsupported_pdf_only: 'Only PDF files are supported by this tool.',
  unsupported_image_only: 'Only image files (JPEG, PNG, WebP, GIF) are supported by this tool.',
  unsupported: 'Only images (JPEG, PNG, WebP, GIF) and PDF files are supported.',
  too_large: `This file is larger than ${MAX_UPLOAD_LABEL}. Open it in Octree to convert larger documents.`,
  too_many_pages: `This PDF has more than ${MAX_PDF_PAGES} pages. Open it in Octree to convert longer documents.`,
  empty: 'This file is empty.',
  unreadable: 'This file could not be read. Please try another file.',
} as const;

/** Drop a ```latex ... ``` wrapper the model sometimes adds despite the prompt. */
export function stripCodeFences(text: string): string {
  const match = /^\s*```[a-z]*\s*\n([\s\S]*?)\n?```\s*$/i.exec(text);
  return match ? match[1] : text;
}

export interface FileLike {
  name: string;
  type: string;
  size: number;
}

/** MIME type for a file, falling back to the extension when the browser leaves `type` empty. */
export function resolveMime(file: Pick<FileLike, 'name' | 'type'>): string {
  const type = (file.type || '').toLowerCase();
  if (type) return type === 'image/jpg' ? 'image/jpeg' : type;
  const ext = file.name.toLowerCase().split('.').pop() || '';
  if (ext === 'pdf') return 'application/pdf';
  return IMAGE_EXTENSIONS[ext] || '';
}

export function kindOfMime(mime: string): UploadKind | null {
  if (mime === 'application/pdf') return 'pdf';
  if ((IMAGE_MIME_TYPES as readonly string[]).includes(mime)) return 'image';
  return null;
}

/** Which kinds a tool accepts, from its `acceptedFormats` label ("PDF", "JPEG, PNG"). */
export function allowedKinds(acceptedFormats: string): UploadKind[] {
  const kinds: UploadKind[] = [];
  if (/JPE?G|PNG/i.test(acceptedFormats)) kinds.push('image');
  if (/PDF/i.test(acceptedFormats)) kinds.push('pdf');
  return kinds;
}

/** `accept` attribute for the file input matching `allowedKinds`. */
export function acceptAttribute(kinds: UploadKind[]): string {
  const parts: string[] = [];
  if (kinds.includes('image')) parts.push(...IMAGE_MIME_TYPES, '.png', '.jpg', '.jpeg', '.webp', '.gif');
  if (kinds.includes('pdf')) parts.push('application/pdf', '.pdf');
  return parts.join(',');
}

export type UploadCheck =
  | { ok: true; kind: UploadKind; mime: string }
  | { ok: false; error: string };

function unsupportedMessage(allowed: UploadKind[]): string {
  if (allowed.length === 1 && allowed[0] === 'pdf') return UPLOAD_ERRORS.unsupported_pdf_only;
  if (allowed.length === 1 && allowed[0] === 'image') return UPLOAD_ERRORS.unsupported_image_only;
  return UPLOAD_ERRORS.unsupported;
}

/** Client-side check before the file is read and sent. */
export function checkUpload(file: FileLike, allowed: UploadKind[]): UploadCheck {
  const mime = resolveMime(file);
  const kind = kindOfMime(mime);
  if (!kind || !allowed.includes(kind)) return { ok: false, error: unsupportedMessage(allowed) };
  if (file.size <= 0) return { ok: false, error: UPLOAD_ERRORS.empty };
  if (file.size > MAX_UPLOAD_BYTES) return { ok: false, error: UPLOAD_ERRORS.too_large };
  return { ok: true, kind, mime };
}

/**
 * Best-effort page count from the raw PDF bytes: the largest `/Count` of a
 * `/Type /Pages` node, else the number of `/Type /Page` objects. Returns null
 * when neither is visible (e.g. page tree inside compressed object streams);
 * the byte limit still applies then.
 */
export function estimatePdfPages(bytes: Uint8Array): number | null {
  const text = new TextDecoder('latin1').decode(bytes);
  let maxCount = 0;
  for (const m of text.matchAll(/\/Type\s*\/Pages\b[^>]*?\/Count\s+(\d+)|\/Count\s+(\d+)[^>]*?\/Type\s*\/Pages\b/g)) {
    maxCount = Math.max(maxCount, Number(m[1] ?? m[2]));
  }
  if (maxCount > 0) return maxCount;
  const pages = text.match(/\/Type\s*\/Page(?![a-zA-Z])/g)?.length ?? 0;
  return pages > 0 ? pages : null;
}

export type ConvertRequest =
  | { ok: true; kind: UploadKind; mime: string; dataUrl: string; filename: string }
  | { ok: false; status: 400 | 413 | 415; code: string; error: string };

function base64ToBytes(base64: string): Uint8Array {
  return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
}

const DATA_URL_RE = /^data:([a-z0-9.+/-]+);base64,([A-Za-z0-9+/=\s]+)$/i;

/** Server-side validation of the `/api/convert` JSON body (`{ image: dataUrl, filename? }`). */
export function parseConvertRequest(body: unknown): ConvertRequest {
  const image = (body as { image?: unknown } | null)?.image;
  if (typeof image !== 'string' || !image) {
    return { ok: false, status: 400, code: 'missing_file', error: 'No file was sent.' };
  }
  const match = DATA_URL_RE.exec(image);
  if (!match) {
    return { ok: false, status: 400, code: 'invalid_file', error: 'The file could not be read.' };
  }
  const mime = match[1].toLowerCase() === 'image/jpg' ? 'image/jpeg' : match[1].toLowerCase();
  const kind = kindOfMime(mime);
  if (!kind) {
    return { ok: false, status: 415, code: 'unsupported_type', error: UPLOAD_ERRORS.unsupported };
  }
  const base64 = match[2].replace(/\s/g, '');
  const padding = base64.endsWith('==') ? 2 : base64.endsWith('=') ? 1 : 0;
  const bytes = Math.floor((base64.length * 3) / 4) - padding;
  if (bytes <= 0) {
    return { ok: false, status: 400, code: 'empty_file', error: UPLOAD_ERRORS.empty };
  }
  if (bytes > MAX_UPLOAD_BYTES) {
    return { ok: false, status: 413, code: 'file_too_large', error: UPLOAD_ERRORS.too_large };
  }
  if (kind === 'pdf') {
    let pages: number | null;
    try {
      pages = estimatePdfPages(base64ToBytes(base64));
    } catch {
      return { ok: false, status: 400, code: 'invalid_file', error: 'The file could not be read.' };
    }
    if (pages !== null && pages > MAX_PDF_PAGES) {
      return { ok: false, status: 413, code: 'too_many_pages', error: UPLOAD_ERRORS.too_many_pages };
    }
  }
  const rawName = (body as { filename?: unknown }).filename;
  const filename =
    typeof rawName === 'string' && rawName.trim()
      ? rawName.trim().slice(0, 200)
      : kind === 'pdf'
        ? 'document.pdf'
        : 'image';
  return { ok: true, kind, mime, dataUrl: `data:${mime};base64,${base64}`, filename };
}
