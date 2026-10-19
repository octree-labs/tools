'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';
import { dropNoiseExceptions } from '@/lib/exception-filter';

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

// Initialise once, synchronously, when this client module is first evaluated in
// the browser so the very first pageview (captured in an effect below) is not
// lost. Without a key (local dev) this is a no-op and every `track()` call is too.
if (typeof window !== 'undefined' && POSTHOG_KEY && !posthog.__loaded) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: 'identified_only',
    // App Router navigations do not reload the page; PostHogPageView captures them.
    capture_pageview: false,
    capture_pageleave: true,
    capture_exceptions: true,
    // Drop browser/extension noise (Edge SafeLinks, ResizeObserver) before it reaches error tracking.
    before_send: dropNoiseExceptions,
    cross_subdomain_cookie: true,
    persistence: 'localStorage+cookie',
    // Converter inputs may hold user documents: never record what is typed.
    session_recording: { maskAllInputs: true },
  });
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname || !posthog.__loaded) return;
    let url = window.origin + pathname;
    const query = searchParams.toString();
    if (query) url += `?${query}`;
    posthog.capture('$pageview', { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* useSearchParams needs a Suspense boundary so static pages keep prerendering. */}
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
    </>
  );
}
