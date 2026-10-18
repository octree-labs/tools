import posthog, { type CaptureOptions } from 'posthog-js';

/**
 * Product analytics event names shared across the tools site.
 * Event properties must never contain PII or user LaTeX source — slugs,
 * titles and tool identifiers only.
 */
export const EVENTS = {
  OPEN_IN_OCTREE_CLICKED: 'open_in_octree_clicked',
  TEMPLATE_VIEWED: 'template_viewed',
  TEMPLATE_DOWNLOADED: 'template_downloaded',
  CONVERTER_USED: 'converter_used',
  SYMBOL_COPIED: 'symbol_copied',
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
