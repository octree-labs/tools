import { defineRouting } from 'next-intl/routing';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n/config';

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'as-needed',
  // The middleware's `Link` header would advertise the raw URL segment (`cn`)
  // as an hreflang code, which Google rejects as an unknown language and which
  // conflicts with the `zh` alternates rendered in <head> via lib/seo.ts.
  // Pages already emit the full hreflang set, so drop the header.
  alternateLinks: false
});
