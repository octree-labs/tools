'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { OctreeLogo } from '@/components/icons/octree-logo';
import { openInOctree } from '@/lib/open-in-octree';
import { wrapAsDocument, type WrapOptions } from '@/lib/wrap-document';
import { useCtaImpression } from '@/hooks/use-cta-impression';

interface ResultBarProps {
  /** The tool's output; fragments are wrapped into a compilable document on click. */
  latex: string;
  /** Tool slug, e.g. `tikz-generator`; sets the draft source `tools:<tool>:result`. */
  tool: string;
  /** Draft title in Octree, e.g. "TikZ Generator result". */
  title: string;
  /** Packages the tool needs when its output is a fragment. */
  wrap?: WrapOptions;
  /** Existing copy/download controls, rendered next to the primary action. */
  children?: ReactNode;
}

/**
 * Shown under a converter's output once a conversion succeeds: the primary
 * cross-over to the Octree editor plus the tool's own export actions.
 */
export function ResultBar({ latex, tool, title, wrap, children }: ResultBarProps) {
  const t = useTranslations('cta');
  const source = `tools:${tool}:result`;
  const ref = useCtaImpression<HTMLDivElement>(source);

  return (
    <div
      ref={ref}
      data-cta-placement={source}
      className="mt-3 flex flex-wrap items-center gap-3 rounded-xl border border-blue-200 bg-blue-50/70 p-3"
    >
      <p className="min-w-0 flex-1 text-sm text-gray-700">{t('resultReadyHint')}</p>
      <button
        type="button"
        onClick={() => openInOctree({ latex: wrapAsDocument(latex, wrap), title, source })}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
      >
        <OctreeLogo className="h-5 w-5" />
        {t('openResultInOctree')}
      </button>
      {children}
    </div>
  );
}
