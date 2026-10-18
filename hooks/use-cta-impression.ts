'use client';

import { useEffect, useRef } from 'react';
import { trackCtaImpression } from '@/lib/analytics';

/**
 * Fire `cta_impression` once per mount when the referenced element becomes
 * visible (IntersectionObserver; falls back to on-mount where unsupported).
 * Returns the ref to attach to the CTA container.
 */
export function useCtaImpression<T extends HTMLElement>(placement: string, enabled = true) {
  const ref = useRef<T | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    if (!enabled || fired.current) return;
    const fire = () => {
      if (fired.current) return;
      fired.current = true;
      trackCtaImpression(placement);
    };

    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      fire();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          fire();
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [placement, enabled]);

  return ref;
}
