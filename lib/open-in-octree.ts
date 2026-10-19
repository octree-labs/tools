import { BEFORE_NAVIGATION, EVENTS, track } from '@/lib/analytics';

export const DRAFTS_ENDPOINT = 'https://app.useoctree.com/api/drafts';

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
}

/**
 * Submit a top-level form POST to the app's drafts endpoint. A real navigation
 * (not fetch) avoids CORS and carries large payloads; the app handles auth and
 * redirects. Every Open-in-Octree path must go through here.
 */
export function postDraftForm({ latex, title, source }: DraftPayload) {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = DRAFTS_ENDPOINT;
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
  const resolvedSource = templateSlug ? `tools:templates:${templateSlug}` : source || '';
  const resolvedTitle = title || 'Imported from Tools';

  // Fired before the form POST below navigates away; never awaited.
  track(
    EVENTS.OPEN_IN_OCTREE_CLICKED,
    {
      source: resolvedSource,
      placement: placement || resolvedSource,
      title: resolvedTitle,
      title_length: resolvedTitle.length,
      template_slug: templateSlug,
    },
    BEFORE_NAVIGATION,
  );

  postDraftForm({ latex, title: resolvedTitle, source: resolvedSource });
}
