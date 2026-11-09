import createMiddleware from 'next-intl/middleware';
import { routing } from '@/src/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - api routes
  // - _next (Next.js internals)
  // - static files (with extensions)
  // - the PostHog relay (lib/posthog-proxy.ts, rewritten in next.config.ts):
  //   next-intl would otherwise redirect /relay-o7/e/ to a locale path and
  //   drop the event batch. Matchers must be static literals, so the prefix
  //   is repeated here.
  matcher: ['/((?!api|_next|relay-o7(?:/|$)|opengraph-image|.*\\..*).*)']
};
