'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Download, FileType2, Info, Loader2 } from 'lucide-react';
import { DM_Sans } from 'next/font/google';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { loader } from '@monaco-editor/react';
import { cn } from '@/lib/utils';
import {
  latexLanguageConfiguration,
  latexTokenProvider,
  registerLatexCompletions,
} from '@/lib/editor-config';
import { Button } from '@/components/ui/button';
import { OctreeCTA } from '@/components/OctreeCTA';
import { useTranslations } from 'next-intl';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const DEFAULT_LATEX = `\\documentclass{article}
\\usepackage{amsmath, amssymb}
\\usepackage{booktabs}
\\title{Converting LaTeX to Word}
\\author{Jane Doe}
\\begin{document}
\\maketitle

\\section{Introduction}
This is some \\textbf{bold} and \\textit{italic} text with inline math $E = mc^2$.

\\subsection{Lists}
\\begin{itemize}
  \\item First point
  \\item Second point
\\end{itemize}

\\subsection{A Table}
\\begin{tabular}{lcc}
\\toprule
Item & A & B \\\\
\\midrule
Row 1 & 10 & 20 \\\\
Row 2 & 30 & 40 \\\\
\\bottomrule
\\end{tabular}

\\subsection{Display Math}
\\begin{equation}
  \\int_a^b f(x)\\,dx = F(b) - F(a)
\\end{equation}

\\end{document}`;

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function LatexToWordTool() {
  const t = useTranslations('toolsSpecific.latexToWord');
  const tTools = useTranslations('tools');
  const tCommon = useTranslations('common');

  const [latex, setLatex] = useState<string>(DEFAULT_LATEX);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string>('');
  const [docxUrl, setDocxUrl] = useState<string>('');
  const [docxSize, setDocxSize] = useState<number>(0);
  const urlRef = useRef<string>('');

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.languages.register({ id: 'latex' });
      monaco.languages.setLanguageConfiguration('latex', latexLanguageConfiguration);
      monaco.languages.setMonarchTokensProvider('latex', latexTokenProvider);
      registerLatexCompletions(monaco);
    });
    return () => {
      if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    };
  }, []);

  const setResultUrl = (url: string) => {
    if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    urlRef.current = url;
    setDocxUrl(url);
  };

  const convert = async () => {
    if (!latex.trim()) return;
    setIsConverting(true);
    setError('');
    setResultUrl('');
    setDocxSize(0);

    try {
      const response = await fetch('/api/convert-latex-to-docx', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latex }),
      });

      if (!response.ok) {
        let message = t('failedToConvert');
        try {
          const data = await response.json();
          if (data?.error) message = data.error;
        } catch {
          // ignore parse errors
        }
        throw new Error(message);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setResultUrl(url);
      setDocxSize(blob.size);

      // Trigger the download right away; the button stays for re-downloads.
      const a = document.createElement('a');
      a.href = url;
      a.download = 'document.docx';
      a.click();
    } catch (err) {
      console.error('LaTeX to Word error:', err);
      setError(err instanceof Error ? err.message : t('failedToConvert'));
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className={cn('bg-gray-50', dmSans.className)}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12">
          <div className="relative flex items-start justify-center mb-3">
            <Link
              href="/"
              className="absolute left-0 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">{tCommon('backToTools')}</span>
            </Link>
            <h1 className="text-4xl font-light text-gray-900">{t('title')}</h1>
          </div>
          <p className="text-lg text-gray-600 text-center">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input */}
          <div className="flex flex-col">
            <div className="min-h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-900 border border-orange-200">
                  {tTools('input')}
                </span>
                <h2 className="text-xl font-medium text-gray-900">{t('inputLabel')}</h2>
              </div>
              <p className="text-sm text-gray-600">{t('inputHint')}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl h-[520px] w-full flex flex-col overflow-hidden">
              <div className="flex-1 overflow-hidden">
                <Editor
                  height="100%"
                  language="latex"
                  value={latex}
                  onChange={(value) => setLatex(value || '')}
                  theme="vs-light"
                  options={{
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    fontSize: 14,
                    lineNumbers: 'on',
                    wordWrap: 'on',
                    padding: { top: 16, bottom: 16 },
                  }}
                />
              </div>
            </div>

            <Button
              onClick={convert}
              disabled={isConverting || !latex.trim()}
              variant="gradient"
              size="lg"
              className="mt-2 w-full"
            >
              {isConverting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t('converting')}
                </>
              ) : (
                <>
                  <FileType2 className="h-4 w-4" />
                  {t('convert')}
                </>
              )}
            </Button>

            {error && (
              <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-4">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}
          </div>

          {/* Output */}
          <div className="flex flex-col">
            <div className="min-h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-green-50 px-3 py-1.5 text-sm font-medium text-green-900 border border-green-200">
                  {tTools('output')}
                </span>
                <h2 className="text-xl font-medium text-gray-900">{t('outputLabel')}</h2>
              </div>
              <p className="text-sm text-gray-600">{t('outputHint')}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl h-[520px] w-full flex flex-col overflow-hidden">
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                {isConverting ? (
                  <>
                    <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
                    <p className="text-gray-600">{t('converting')}</p>
                  </>
                ) : docxUrl ? (
                  <>
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 border border-blue-200 mb-6">
                      <FileType2 className="h-10 w-10 text-blue-600" />
                    </div>
                    <p className="text-lg font-medium text-gray-900 mb-1">{t('ready')}</p>
                    <p className="text-sm text-gray-500 mb-6">
                      {t('fileSize', { size: formatBytes(docxSize) })}
                    </p>
                    <a
                      href={docxUrl}
                      download="document.docx"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-base font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      <Download className="h-5 w-5" />
                      {t('download')}
                    </a>
                  </>
                ) : (
                  <p className="text-gray-400">{t('documentWillAppear')}</p>
                )}
              </div>
            </div>

            <div className="mt-3 flex gap-3 rounded-lg bg-blue-50 border border-blue-200 p-4 text-sm text-blue-900">
              <Info className="h-5 w-5 shrink-0 text-blue-600" />
              <div>
                <p className="font-medium">{t('mathNoteTitle')}</p>
                <p className="mt-1">{t('mathNote')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <OctreeCTA source="tools:latex-to-word" />
        </div>
      </div>
    </div>
  );
}
