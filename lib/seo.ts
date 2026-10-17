import type { Metadata } from 'next';
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/lib/i18n/config';

/**
 * URL locale segments are not all valid BCP 47 language tags. Google ignores
 * hreflang entries with unknown codes (Search Console reports "unknown language
 * code"), so map the URL segment to the tag search engines expect.
 */
const LOCALE_TO_LANGUAGE_TAG: Partial<Record<Locale, string>> = {
  cn: 'zh',
};

export function toLanguageTag(locale: string): string {
  return LOCALE_TO_LANGUAGE_TAG[locale as Locale] ?? locale;
}

/** Path for a given route in a given locale (default locale has no prefix). */
export function localizedPath(path: string, locale: string): string {
  if (locale === DEFAULT_LOCALE) return path || '/';
  return `/${locale}${path}`;
}

/**
 * Generates the `alternates` metadata object with both canonical URL and
 * hreflang language alternates for all supported locales.
 *
 * This ensures every page has:
 * - A correct canonical tag (locale-prefixed for non-default locales)
 * - hreflang tags for all 16 locales + x-default
 *
 * @param path - The path without locale prefix, e.g. '/tools/tikz-generator' or '/templates'
 * @param locale - The current page locale
 */
export function generateAlternates(path: string, locale: string) {
  const languages: Record<string, string> = {};

  for (const loc of LOCALES) {
    languages[toLanguageTag(loc)] = localizedPath(path, loc);
  }

  // x-default points to the English (default locale) version
  languages['x-default'] = localizedPath(path, DEFAULT_LOCALE);

  return {
    canonical: localizedPath(path, locale),
    languages,
  };
}

/** Site-wide social preview, rendered by app/[locale]/opengraph-image.tsx. */
export const DEFAULT_OG_IMAGES = [
  {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: 'Octree LaTeX Tools – free AI converters, templates and symbol references',
  },
];

/**
 * Nested segments that define their own `openGraph` replace the parent's,
 * which drops the file-based opengraph-image. Re-attach the default image
 * wherever a page did not supply one of its own.
 */
export function withDefaultOgImage(metadata: Metadata): Metadata {
  const og = typeof metadata.openGraph === 'object' && metadata.openGraph ? metadata.openGraph : {};
  const tw = typeof metadata.twitter === 'object' && metadata.twitter ? metadata.twitter : {};
  return {
    ...metadata,
    openGraph: { ...og, images: og.images ?? DEFAULT_OG_IMAGES },
    twitter: { card: 'summary_large_image', ...tw, images: tw.images ?? DEFAULT_OG_IMAGES },
  };
}
