'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Check, Copy, Download, ImageDown, Loader2 } from 'lucide-react';
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

const DEFAULT_LATEX = `\\documentclass[preview,border=4pt]{standalone}
\\usepackage{amsmath,amssymb}

\\begin{document}
$\\displaystyle \\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}$
\\end{document}`;

const SCALE_OPTIONS = [
  { label: '1× (96 DPI)', dpi: 96 },
  { label: '2× (192 DPI)', dpi: 192 },
  { label: '4× (384 DPI)', dpi: 384 },
] as const;

interface RenderResult {
  dataUrl: string;
  width: number;
  height: number;
}

function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function renderFirstPageToPng(
  pdfBytes: Uint8Array,
  dpi: number,
  transparent: boolean
): Promise<RenderResult> {
  const pdfjs = await import('pdfjs-dist');
  if (!pdfjs.GlobalWorkerOptions.workerSrc) {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  }
  const doc = await pdfjs.getDocument({ data: pdfBytes }).promise;
  try {
    const page = await doc.getPage(1);
    const viewport = page.getViewport({ scale: dpi / 72 });
    const canvas = document.createElement('canvas');
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) throw new Error('Canvas is not available');
    await page.render({
      canvas,
      canvasContext: context,
      viewport,
      background: transparent ? 'rgba(0,0,0,0)' : 'rgb(255,255,255)',
    }).promise;
    return { dataUrl: canvas.toDataURL('image/png'), width: canvas.width, height: canvas.height };
  } finally {
    await doc.destroy();
  }
}

async function dataUrlToBlob(dataUrl: string): Promise<Blob> {
  const response = await fetch(dataUrl);
  return response.blob();
}

export default function LatexToPngTool() {
  const t = useTranslations('toolsSpecific.latexToPng');
  const tTools = useTranslations('tools');
  const tCommon = useTranslations('common');

  const [latex, setLatex] = useState<string>(DEFAULT_LATEX);
  const [dpi, setDpi] = useState<number>(192);
  const [transparent, setTransparent] = useState<boolean>(true);
  const [isConverting, setIsConverting] = useState(false);
  const [result, setResult] = useState<RenderResult | null>(null);
  const [error, setError] = useState<string>('');
  const [log, setLog] = useState<string>('');
  const [showLog, setShowLog] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState('');
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.languages.register({ id: 'latex' });
      monaco.languages.setLanguageConfiguration('latex', latexLanguageConfiguration);
      monaco.languages.setMonarchTokensProvider('latex', latexTokenProvider);
      registerLatexCompletions(monaco);
    });
    return () => {
      if (copiedTimer.current) clearTimeout(copiedTimer.current);
    };
  }, []);

  const convert = async () => {
    if (!latex.trim()) return;
    setIsConverting(true);
    setError('');
    setLog('');
    setShowLog(false);
    setCopyError('');
    setResult(null);

    try {
      const response = await fetch('/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latex }),
      });

      let data: { pdf?: string; error?: string; log?: string } = {};
      try {
        data = await response.json();
      } catch {
        // Non-JSON body; handled below.
      }

      if (!response.ok || !data.pdf) {
        setError(data.error || tTools('failedToCompile'));
        setLog(data.log || '');
        return;
      }

      try {
        const rendered = await renderFirstPageToPng(base64ToBytes(data.pdf), dpi, transparent);
        setResult(rendered);
      } catch (renderError) {
        console.error('PNG render error:', renderError);
        setError(t('renderFailed'));
      }
    } catch (err) {
      console.error('Conversion error:', err);
      setError(tTools('failedToCompile'));
    } finally {
      setIsConverting(false);
    }
  };

  const download = () => {
    if (!result) return;
    const a = document.createElement('a');
    a.href = result.dataUrl;
    a.download = 'latex.png';
    a.click();
  };

  const copyToClipboard = async () => {
    if (!result) return;
    setCopyError('');
    try {
      if (typeof ClipboardItem === 'undefined' || !navigator.clipboard?.write) {
        throw new Error('Clipboard images are not supported');
      }
      const blob = await dataUrlToBlob(result.dataUrl);
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      setCopied(true);
      if (copiedTimer.current) clearTimeout(copiedTimer.current);
      copiedTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Clipboard error:', err);
      setCopyError(t('copyFailed'));
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

            <div className="mt-3 flex flex-wrap items-center gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <span>{t('scaleLabel')}</span>
                <select
                  value={dpi}
                  onChange={(e) => setDpi(Number(e.target.value))}
                  className="rounded-md border border-gray-200 bg-white px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {SCALE_OPTIONS.map((option) => (
                    <option key={option.dpi} value={option.dpi}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={transparent}
                  onChange={(e) => setTransparent(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                {t('transparentLabel')}
              </label>
            </div>

            <Button
              onClick={convert}
              disabled={isConverting || !latex.trim()}
              variant="gradient"
              size="lg"
              className="mt-3 w-full"
            >
              {isConverting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t('converting')}
                </>
              ) : (
                <>
                  <ImageDown className="h-4 w-4" />
                  {t('convert')}
                </>
              )}
            </Button>

            {error && (
              <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-4">
                <p className="text-sm font-medium text-red-800">{t('compileFailed')}</p>
                <p className="mt-1 text-sm text-red-700 break-words">{error}</p>
                {log && (
                  <>
                    <button
                      type="button"
                      onClick={() => setShowLog((v) => !v)}
                      className="mt-2 text-sm font-medium text-red-800 underline underline-offset-2"
                    >
                      {showLog ? t('hideLog') : t('showLog')}
                    </button>
                    {showLog && (
                      <pre className="mt-2 max-h-64 overflow-auto rounded-md bg-white border border-red-100 p-3 text-xs text-gray-800 whitespace-pre-wrap">
                        {log}
                      </pre>
                    )}
                  </>
                )}
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
              <p className="text-sm text-gray-600">
                {result ? `${result.width} × ${result.height} px` : t('outputHint')}
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl h-[520px] w-full flex flex-col overflow-hidden">
              <div
                className="flex-1 overflow-auto p-6 flex items-center justify-center"
                style={{
                  backgroundImage:
                    'linear-gradient(45deg, #f3f4f6 25%, transparent 25%), linear-gradient(-45deg, #f3f4f6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f3f4f6 75%), linear-gradient(-45deg, transparent 75%, #f3f4f6 75%)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0',
                }}
              >
                {isConverting ? (
                  <div className="text-center">
                    <Loader2 className="mx-auto h-12 w-12 text-blue-500 animate-spin mb-4" />
                    <p className="text-gray-600">{t('converting')}</p>
                  </div>
                ) : result ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={result.dataUrl}
                    alt="Rendered LaTeX"
                    className="max-w-full max-h-full object-contain"
                    style={{ imageRendering: 'auto' }}
                  />
                ) : (
                  <p className="text-gray-400">{t('imageWillAppear')}</p>
                )}
              </div>
            </div>

            {result && !isConverting && (
              <div className="mt-3 flex flex-wrap gap-3">
                <button
                  onClick={download}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-base font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <Download className="h-5 w-5" />
                  {t('downloadPng')}
                </button>
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-base font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  {copied ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5" />}
                  {copied ? t('copied') : t('copyToClipboard')}
                </button>
              </div>
            )}
            {copyError && <p className="mt-2 text-sm text-red-700">{copyError}</p>}
          </div>
        </div>

        <div className="mt-16">
          <OctreeCTA source="tools:latex-to-png" />
        </div>
      </div>
    </div>
  );
}
