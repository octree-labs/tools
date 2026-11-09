/**
 * Multi-file "Open in Octree" drafts, shared by the browser (lib/open-in-octree.ts)
 * and the arXiv route. No browser or analytics imports, so server code can use it.
 */

/** One text file of a multi-file draft; `path` is relative to the project root. */
export interface DraftFile {
  path: string;
  content: string;
}

/**
 * The app's /api/drafts rules for `files` (octree-labs/octree lib/import/draft-files.ts,
 * which follows the public compile API): at most 50 files, 2 MB of UTF-8 in total,
 * relative forward-slash paths that never escape the project, text files only.
 * `maxContentChars` is the single `content` cap every app version enforces.
 */
export const DRAFT_LIMITS = {
  maxFiles: 50,
  maxFilesBytes: 2 * 1024 * 1024,
  maxPathLength: 512,
  maxContentChars: 200_000,
};

/** The app refuses these extensions in `files` (lib/constants/file-types.ts BINARY_FILE_EXTENSIONS). */
const APP_BINARY_EXTENSIONS = new Set(
  (
    'eps png jpg jpeg gif bmp tiff tif pdf ps svg webp ico heic heif avif psd ai raw cr2 nef dng exr hdr jfif ' +
    'jp2 jpx jxr pgm ppm pbm pcx tga dds emf wmf ttf ttc otf otc woff woff2 eot fon fnt dfont pfb pfa afm pfm ' +
    'tfm vf pk gf mf fmt base mem synctex zip tar gz tgz bz2 tbz tbz2 xz txz 7z rar lz lzma lz4 zst doc docx ' +
    'xls xlsx ppt pptx odt ods odp rtf mp3 mp4 wav ogg webm mov avi flac aac m4a mkv flv stl obj fbx blend 3ds ' +
    'db sqlite sqlite3 exe dll so dylib bin dat o a class pyc pyo swf iso dmg img msi deb rpm apk ipa'
  ).split(' '),
);

/**
 * The app's path character set (Supabase Storage object keys, minus `?`); it
 * refuses a draft with any other path, so such files are dropped here.
 */
const SAFE_PATH_RE = /^[\w/!\-.*'() &$@=;:+,]+$/;

function extensionOf(path: string): string {
  const base = path.slice(path.lastIndexOf('/') + 1);
  const dot = base.lastIndexOf('.');
  return dot === -1 ? '' : base.slice(dot + 1).toLowerCase();
}

/** Mirrors the app's path check; returns the normalised path or null when the app would reject it. */
export function normaliseDraftPath(path: string): string | null {
  if (!path || path.length > DRAFT_LIMITS.maxPathLength) return null;
  if (path.includes('\0') || path.includes('\\')) return null;
  if (path.startsWith('/') || /^[A-Za-z]:/.test(path) || path.endsWith('/')) return null;
  const parts: string[] = [];
  for (const part of path.split('/')) {
    if (part === '' || part === '.') continue;
    if (part === '..') {
      if (parts.length === 0) return null;
      parts.pop();
      continue;
    }
    parts.push(part);
  }
  return parts.length > 0 ? parts.join('/') : null;
}

function utf8Bytes(text: string): number {
  return new TextEncoder().encode(text).length;
}

/**
 * Prepares a file set for the app's `files` field: drops files the app cannot
 * take (binary extensions, unsafe paths), puts the main file first and checks
 * the caps. Returns null when the set should go as a single file instead (one
 * file, no usable main file, or over the caps).
 */
export function prepareDraftFiles(
  files: DraftFile[],
  main?: string,
): { files: DraftFile[]; main: string } | null {
  const seen = new Set<string>();
  const kept: DraftFile[] = [];
  for (const file of files) {
    // NUL marks a binary file under a text extension; the app refuses it.
    if (typeof file.content !== 'string' || file.content.includes('\0')) continue;
    const path = normaliseDraftPath(file.path);
    // The app also refuses case-only duplicates (`Refs.bib` / `refs.bib`).
    const folded = path?.toLowerCase();
    if (!path || !folded || !SAFE_PATH_RE.test(path) || seen.has(folded) || APP_BINARY_EXTENSIONS.has(extensionOf(path))) {
      continue;
    }
    seen.add(folded);
    kept.push({ path, content: file.content });
  }
  if (kept.length < 2 || kept.length > DRAFT_LIMITS.maxFiles) return null;

  const hasClass = (f: DraftFile) => /\\documentclass\b/.test(f.content);
  const wanted = main ? normaliseDraftPath(main) : null;
  const mainFile = wanted
    ? kept.find((f) => f.path === wanted)
    : (kept.find((f) => f.path === 'main.tex' && hasClass(f)) ?? kept.find((f) => f.path.endsWith('.tex') && hasClass(f)));
  if (!mainFile || !mainFile.path.endsWith('.tex') || !hasClass(mainFile)) return null;

  const total = kept.reduce((sum, f) => sum + utf8Bytes(f.content), 0);
  if (total > DRAFT_LIMITS.maxFilesBytes) return null;

  return { files: [mainFile, ...kept.filter((f) => f !== mainFile)], main: mainFile.path };
}

