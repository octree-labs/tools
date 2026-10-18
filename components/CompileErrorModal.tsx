'use client';

import { AlertCircle, Sparkles, X } from 'lucide-react';
import { OctreeLogo } from '@/components/icons/octree-logo';
import { openInOctree } from '@/lib/open-in-octree';
import { withCompileErrorContext } from '@/lib/wrap-document';
import { useCtaImpression } from '@/hooks/use-cta-impression';
import type { FC } from 'react';

interface CompileErrorModalProps {
  isOpen: boolean;
  errorMessage: string;
  /** Raw compiler log from /api/compile, when the server returned one. */
  errorLog?: string;
  latex: string;
  onClose: () => void;
  /** Tool source, e.g. `tools:latex-preview`; the CTA sends `<source>:fix-error`. */
  source?: string;
  title?: string;
}

const ErrorPanel: FC<Omit<CompileErrorModalProps, 'isOpen'>> = ({
  errorMessage,
  errorLog = '',
  latex,
  onClose,
  source = 'tools',
  title = 'Imported from Tools',
}) => {
  const fixSource = `${source}:fix-error`;
  const ctaRef = useCtaImpression<HTMLButtonElement>(fixSource);

  const handleFixInOctree = () => {
    openInOctree({
      latex: withCompileErrorContext(latex, errorLog || errorMessage),
      title,
      source: fixSource,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-full bg-red-50 p-2 text-red-500">
            <AlertCircle className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-semibold text-gray-900">Compilation failed</h2>
            <p className="mt-2 text-sm text-gray-600">
              {errorMessage || 'We could not generate a PDF preview.'}
            </p>
            {errorLog && (
              <pre className="mt-3 max-h-48 overflow-auto rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs leading-5 text-gray-700 whitespace-pre-wrap break-words">
                {errorLog}
              </pre>
            )}
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50/70 p-4">
          <p className="text-sm text-gray-700">
            Octree opens this document with the error log at the top, so its AI edit knows exactly
            what to fix.
          </p>
          <button
            ref={ctaRef}
            type="button"
            onClick={handleFixInOctree}
            data-cta-placement={fixSource}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            <Sparkles className="h-4 w-4" />
            Fix this error with AI in Octree
            <OctreeLogo className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-3">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const CompileErrorModal: FC<CompileErrorModalProps> = ({ isOpen, ...props }) => {
  // Mount the panel only while open so the impression fires once per failure.
  if (!isOpen) return null;
  return <ErrorPanel {...props} />;
};
