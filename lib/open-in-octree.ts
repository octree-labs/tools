import { BEFORE_NAVIGATION, EVENTS, track } from '@/lib/analytics';

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
  latex: string;
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
export function postDraftForm({ latex, title, source, placement }: DraftPayload) {
  const form = document.createElement('form');
  form.method = 'POST';
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

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

export async function openInOctree({ latex, title, source, placement, templateSlug }: OpenInOctreeOptions) {
  // Template pages get a per-template source (tools:templates:<slug>); every other caller keeps its own.
  const resolvedSource = normalizePlacement(templateSlug ? `tools:templates:${templateSlug}` : source);
  const resolvedPlacement = placement ? normalizePlacement(placement) : resolvedSource;
  const resolvedTitle = title || 'Imported from Tools';

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
    },
    BEFORE_NAVIGATION,
  );

  postDraftForm({ latex, title: resolvedTitle, source: resolvedSource, placement: resolvedPlacement });
}
