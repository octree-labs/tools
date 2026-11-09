import { BEFORE_NAVIGATION, EVENTS, track } from '@/lib/analytics';
import { DRAFT_LIMITS, prepareDraftFiles, type DraftFile } from '@/lib/draft-files';

export { DRAFT_LIMITS, normaliseDraftPath, prepareDraftFiles, type DraftFile } from '@/lib/draft-files';

export const APP_ORIGIN = 'https://app.useoctree.com';
export const DRAFTS_ENDPOINT = `${APP_ORIGIN}/api/drafts`;

/** `utm_medium` values: big CTA cards / inline buttons, the site header, and draft form POSTs. */
export type AppLinkMedium = 'cta' | 'nav' | 'draft';

/**
 * Every placement/source string starts with `tools:` so tools traffic is one
 * prefix in PostHog (`templates:mla-paper` → `tools:templates:mla-paper`).
 */
export function normalizePlacement(placement: string | undefined): string {
  const value = (placement || '').trim();
  if (!value || value === 'tools') return 'tools';
  return value.startsWith('tools:') ? value : `tools:${value}`;
}

/**
 * Absolute app URL for `path` with utm params appended (existing query on
 * `path` is kept). utm must travel in the URL: PostHog campaign properties
 * live in per-origin localStorage and do not cross to app.useoctree.com.
 */
export function appUrl(
  path: string,
  { placement, medium = 'cta' }: { placement: string; medium?: AppLinkMedium },
): string {
  const url = new URL(path || '/', APP_ORIGIN);
  url.searchParams.set('utm_source', 'tools');
  url.searchParams.set('utm_medium', medium);
  url.searchParams.set('utm_campaign', normalizePlacement(placement));
  return url.toString();
}

/**
 * Properties for `open_in_octree_clicked` on a plain link to the app
 * (`kind: 'link'`). `source` equals `placement` (as it does for every draft
 * click in production), so link clicks such as `tools:templates:<slug>:cta`
 * never share a `source` with the draft clicks (`tools:templates:<slug>`) and
 * do not inflate source-grouped draft conversion.
 */
export function linkClickProps(placement: string) {
  const resolved = normalizePlacement(placement);
  return { source: resolved, placement: resolved, kind: 'link' as const };
}

export interface OpenInOctreeOptions {
  /**
   * Single-file LaTeX. With `files` this is the fallback an app without
   * multi-file support stores instead (it ignores `files`), so it should be
   * the whole document (e.g. flattened) and at most 200k characters.
   */
  latex: string;
  /** The real project (main .tex, .bib, .cls, sub-files). Sent when it has 2+ usable files. */
  files?: DraftFile[];
  /** Path of the main file in `files`; else `main.tex` or the first `.tex` with `\documentclass`. */
  main?: string;
  title?: string;
  source?: string;
  /** Where on the page the CTA sits; defaults to `source` so it joins `cta_impression.placement`. */
  placement?: string;
  /** Set by template pages so the app can attribute the draft to a specific template. */
  templateSlug?: string;
}

export interface DraftPayload {
  latex: string;
  title: string;
  source: string;
  /** Already prepared with `prepareDraftFiles` (main first). */
  files?: DraftFile[];
  main?: string;
  /** utm_campaign on the form action; defaults to `source`. */
  placement?: string;
}

/**
 * Submit a top-level form POST to the app's drafts endpoint. A real navigation
 * (not fetch) avoids CORS and carries large payloads; the app handles auth and
 * redirects (octree-labs/octree#426 copies utm_* from the action URL onto its
 * redirect; until it ships, draft visitors lose utm at the 303). Every
 * Open-in-Octree path must go through here.
 */
export function postDraftForm({ latex, title, source, placement, files, main }: DraftPayload) {
  const form = document.createElement('form');
  form.method = 'POST';
  if (files && files.length > 0) {
    // Multipart keeps a 2 MB file set at ~2.5 MB on the wire; urlencoding
    // would triple every backslash and brace past Vercel's 4.5 MB body cap.
    form.enctype = 'multipart/form-data';
  }
  form.action = appUrl('/api/drafts', { placement: placement || source, medium: 'draft' });
  form.style.display = 'none';

  const contentInput = document.createElement('textarea');
  contentInput.name = 'content';
  contentInput.value = latex;
  form.appendChild(contentInput);

  const titleInput = document.createElement('input');
  titleInput.type = 'hidden';
  titleInput.name = 'title';
  titleInput.value = title;
  form.appendChild(titleInput);

  const sourceInput = document.createElement('input');
  sourceInput.type = 'hidden';
  sourceInput.name = 'source';
  sourceInput.value = source;
  form.appendChild(sourceInput);

  if (files && files.length > 0) {
    // An app without multi-file support ignores these two fields and stores
    // `content`, so the hand-off degrades to today's single file.
    const filesInput = document.createElement('textarea');
    filesInput.name = 'files';
    filesInput.value = JSON.stringify(files);
    form.appendChild(filesInput);

    if (main) {
      const mainInput = document.createElement('input');
      mainInput.type = 'hidden';
      mainInput.name = 'main';
      mainInput.value = main;
      form.appendChild(mainInput);
    }
  }

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

export async function openInOctree({
  latex,
  files,
  main,
  title,
  source,
  placement,
  templateSlug,
}: OpenInOctreeOptions) {
  // Template pages get a per-template source (tools:templates:<slug>); every other caller keeps its own.
  const resolvedSource = normalizePlacement(templateSlug ? `tools:templates:${templateSlug}` : source);
  const resolvedPlacement = placement ? normalizePlacement(placement) : resolvedSource;
  const resolvedTitle = title || 'Imported from Tools';
  const prepared = files ? prepareDraftFiles(files, main) : null;
  // `content` is what an app without multi-file support stores; with files
  // the current app takes the main file from `files` instead.
  const content =
    prepared && latex.length > DRAFT_LIMITS.maxContentChars ? prepared.files[0].content : latex;

  // Fired before the form POST below navigates away; never awaited.
  track(
    EVENTS.OPEN_IN_OCTREE_CLICKED,
    {
      source: resolvedSource,
      placement: resolvedPlacement,
      kind: 'draft',
      title: resolvedTitle,
      title_length: resolvedTitle.length,
      template_slug: templateSlug,
      file_count: prepared ? prepared.files.length : 1,
    },
    BEFORE_NAVIGATION,
  );

  postDraftForm({
    latex: content,
    title: resolvedTitle,
    source: resolvedSource,
    placement: resolvedPlacement,
    files: prepared?.files,
    main: prepared?.main,
  });
}
