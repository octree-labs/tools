import posthog, { type CaptureOptions } from 'posthog-js';

/**
 * Product analytics event names shared across the tools site.
 * Event properties must never contain PII or user LaTeX source — slugs,
 * titles and tool identifiers only.
 *
 * Tools → app funnel contract (helpers in lib/open-in-octree.ts):
 * - `source`: the tool or page, always `tools:`-prefixed (`tools:latex-preview`,
 *   `tools:templates:<slug>`, `tools:header`); see normalizePlacement().
 * - `placement`: the specific CTA on that page (`tools:latex-preview:fix-error`,
 *   `tools:image-to-tikz:result`, `tools:latex-preview:cta` for the OctreeCTA
 *   card, `tools:header`). cta_impression and open_in_octree_clicked share it.
 * - `kind` (open_in_octree_clicked only): `draft` = form POST of LaTeX to
 *   /api/drafts, `link` = plain navigation to the app.
 * - Every app URL carries utm_source=tools, utm_medium=cta|nav|draft and
 *   utm_campaign=<placement> (appUrl()), because PostHog campaign properties
 *   do not cross from tools to app.useoctree.com (per-origin localStorage).
 */
export const EVENTS = {
  OPEN_IN_OCTREE_CLICKED: 'open_in_octree_clicked',
  /** A draft queued before sign-in was posted after SSO completed; not a fresh click. */
  OPEN_IN_OCTREE_RESUMED: 'open_in_octree_resumed',
  TEMPLATE_VIEWED: 'template_viewed',
  TEMPLATE_DOWNLOADED: 'template_downloaded',
  CONVERTER_USED: 'converter_used',
  SYMBOL_COPIED: 'symbol_copied',
  CTA_IMPRESSION: 'cta_impression',
} as const;

export type EventName = (typeof EVENTS)[keyof typeof EVENTS];
export type EventProps = Record<string, string | number | boolean | null | undefined>;

/** True once posthog.init() has run in the browser (false on the server or without a key). */
export function isPostHogLoaded(): boolean {
  return typeof window !== 'undefined' && Boolean(posthog.__loaded);
}

/** Capture a product event; a silent no-op when PostHog is not loaded. */
export function track(event: EventName, props?: EventProps, options?: CaptureOptions) {
  if (!isPostHogLoaded()) return;
  try {
    posthog.capture(event, props, options);
  } catch {
    // Analytics must never break the UI.
  }
}

/**
 * For events fired right before a full-page navigation (form POST, external
 * link): skip the batch queue and use sendBeacon so the request outlives the page.
 */
export const BEFORE_NAVIGATION: CaptureOptions = { send_instantly: true, transport: 'sendBeacon' };

/** One helper for every converter/generator: called at its success and failure points. */
export function trackConverterUsed(tool: string, success: boolean) {
  track(EVENTS.CONVERTER_USED, { tool, success });
}

/**
 * A conversion CTA became visible. `placement` equals the `placement` its click
 * sends with open_in_octree_clicked (and the utm_campaign on the app URL), so
 * conversion per placement is open_in_octree_clicked / cta_impression grouped
 * by that string. See the contract on EVENTS.
 */
export function trackCtaImpression(placement: string) {
  track(EVENTS.CTA_IMPRESSION, { placement });
}
