import { BEFORE_NAVIGATION, EVENTS, track } from '@/lib/analytics';

export interface OpenInOctreeOptions {
  latex: string;
  title?: string;
  source?: string;
  /** Set by template pages so the app can attribute the draft to a specific template. */
  templateSlug?: string;
}

export async function openInOctree({ latex, title, source, templateSlug }: OpenInOctreeOptions) {
  // Template pages get a per-template source (tools:templates:<slug>); every other caller keeps its own.
  const resolvedSource = templateSlug ? `tools:templates:${templateSlug}` : source || '';

  // Fired before the form POST below navigates away; never awaited.
  track(
    EVENTS.OPEN_IN_OCTREE_CLICKED,
    { source: resolvedSource, title: title || 'Imported from Tools', template_slug: templateSlug },
    BEFORE_NAVIGATION,
  );

  // Submit a top-level form POST to avoid CORS and carry large payloads
  const postDraft = () => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://app.useoctree.com/api/drafts';
    form.style.display = 'none';

    const contentInput = document.createElement('textarea');
    contentInput.name = 'content';
    contentInput.value = latex;
    form.appendChild(contentInput);

    const titleInput = document.createElement('input');
    titleInput.type = 'hidden';
    titleInput.name = 'title';
    titleInput.value = title || 'Imported from Tools';
    form.appendChild(titleInput);

    const sourceInput = document.createElement('input');
    sourceInput.type = 'hidden';
    sourceInput.name = 'source';
    sourceInput.value = resolvedSource;
    form.appendChild(sourceInput);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  // Always use the simple, reliable draft POST; app handles auth/redirects
  postDraft();
} 