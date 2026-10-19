'use client';

import '@/lib/promise-polyfill';
import { useEffect } from 'react';
import { BEFORE_NAVIGATION, EVENTS, track } from '@/lib/analytics';
import { postDraftForm } from '@/lib/open-in-octree';

export default function ClientBootstrap() {
  useEffect(() => {
    // If we have a pending draft intent and are now authenticated on tools, complete SSO and post
    (async () => {
      try {
        // Strip OAuth hash tokens from URL to avoid leaking into any next params
        if (typeof window !== 'undefined' && window.location.hash) {
          const hash = window.location.hash;
          if (hash.startsWith('#access_token') || hash.includes('provider_token')) {
            history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }

        const { createClient } = await import('@supabase/supabase-js');
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL as string,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
        );
        const { data: sessionData } = await supabase.auth.getSession();
        const intentRaw = localStorage.getItem('octree_draft_intent');
        if (sessionData.session && intentRaw) {
          const { access_token, refresh_token } = sessionData.session;
          await fetch('https://app.useoctree.com/api/sso', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ access_token, refresh_token, next: '/import' }),
          });

          const intent = JSON.parse(intentRaw) as { latex: string; title: string; source: string };
          const title = intent.title ?? '';
          const source = intent.source ?? '';

          // The original click was already counted as open_in_octree_clicked before sign-in;
          // this is the same draft being completed, so it gets its own event name.
          track(
            EVENTS.OPEN_IN_OCTREE_RESUMED,
            { source, placement: source, title_length: title.length },
            BEFORE_NAVIGATION,
          );

          // Post the draft via form submit to trigger redirect to /import
          postDraftForm({ latex: intent.latex, title, source });
          localStorage.removeItem('octree_draft_intent');
        }
      } catch {}
    })();
  }, []);

  return null;
}
