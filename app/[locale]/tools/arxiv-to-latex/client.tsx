'use client';

import { useEffect, useMemo, useState, type FormEvent } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { loader } from '@monaco-editor/react';
import { useTranslations } from 'next-intl';
import {
  AlertCircle,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Download,
  ExternalLink,
  File,
  FileText,
  Folder,
  Loader2,
  Star,
} from 'lucide-react';
import { dmSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { latexLanguageConfiguration, latexTokenProvider } from '@/lib/editor-config';
import { OctreeCTA } from '@/components/OctreeCTA';
import { OctreeLogo } from '@/components/icons/octree-logo';
import { openInOctree } from '@/lib/open-in-octree';
import { trackConverterUsed } from '@/lib/analytics';
import { useCtaImpression } from '@/hooks/use-cta-impression';
import { parseArxivId } from '@/lib/arxiv/id';
import type { ArxivErrorBody, ArxivSourceFile, ArxivSourceResponse } from '@/lib/arxiv/types';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const TOOL = 'arxiv-to-latex';
const RESULT_SOURCE = `tools:${TOOL}:result`;
const EXAMPLES = [
  { id: '1706.03762', label: 'Attention Is All You Need' },
  { id: '2301.00001', label: '2301.00001' },
  { id: 'hep-th/9711200', label: 'hep-th/9711200 (old-style ID)' },
];

interface ToolError {
  message: string;
  code: string;
}

interface TreeNode {
  name: string;
  path: string;
  file?: ArxivSourceFile;
  children: TreeNode[];
}

function buildTree(files: ArxivSourceFile[]): TreeNode[] {
  const root: TreeNode = { name: '', path: '', children: [] };
  for (const file of files) {
    const parts = file.path.split('/');
    let node = root;
    parts.forEach((part, i) => {
      const path = parts.slice(0, i + 1).join('/');
      const isFile = i === parts.length - 1;
      let child = node.children.find((c) => c.name === part && Boolean(c.file) === isFile);
      if (!child) {
        child = { name: part, path, children: [], file: isFile ? file : undefined };
        node.children.push(child);
      }
      node = child;
    });
  }
  const sort = (nodes: TreeNode[]): TreeNode[] =>
    nodes
      .sort((a, b) => (a.file ? 1 : 0) - (b.file ? 1 : 0) || a.name.localeCompare(b.name))
      .map((n) => ({ ...n, children: sort(n.children) }));
  return sort(root.children);
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function FileTree({
  nodes,
  depth,
  selected,
  mainFile,
  contents,
  onSelect,
}: {
  nodes: TreeNode[];
  depth: number;
  selected: string | null;
  mainFile: string | null;
  contents: Record<string, string>;
  onSelect: (path: string) => void;
}) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  return (
    <ul className="text-sm">
      {nodes.map((node) => {
        const pad = { paddingLeft: `${depth * 14 + 8}px` };
        if (!node.file) {
          const isCollapsed = collapsed[node.path];
          return (
            <li key={node.path}>
              <button
                type="button"
                onClick={() => setCollapsed((c) => ({ ...c, [node.path]: !isCollapsed }))}
                className="flex w-full items-center gap-1.5 rounded px-2 py-1 text-left text-gray-700 hover:bg-gray-100"
                style={pad}
              >
                {isCollapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                <Folder className="h-4 w-4 text-gray-400" />
                <span className="truncate">{node.name}</span>
              </button>
              {!isCollapsed && (
                <FileTree
                  nodes={node.children}
                  depth={depth + 1}
                  selected={selected}
                  mainFile={mainFile}
                  contents={contents}
                  onSelect={onSelect}
                />
              )}
            </li>
          );
        }
        const viewable = node.path in contents;
        const isMain = node.path === mainFile;
        return (
          <li key={node.path}>
            <button
              type="button"
              disabled={!viewable}
              onClick={() => onSelect(node.path)}
              title={viewable ? node.path : `${node.path} (binary file, included in the .zip)`}
              className={cn(
                'flex w-full items-center gap-1.5 rounded px-2 py-1 text-left',
                selected === node.path ? 'bg-blue-50 text-blue-800' : 'text-gray-700',
                viewable ? 'hover:bg-gray-100' : 'cursor-default text-gray-400',
              )}
              style={{ paddingLeft: `${depth * 14 + 26}px` }}
            >
              {node.file.text ? <FileText className="h-4 w-4 shrink-0" /> : <File className="h-4 w-4 shrink-0" />}
              <span className="truncate">{node.name}</span>
              {isMain && (
                <span className="ml-1 inline-flex shrink-0 items-center gap-0.5 rounded bg-amber-100 px-1.5 text-xs font-medium text-amber-800">
                  <Star className="h-3 w-3" /> main
                </span>
              )}
              <span className="ml-auto shrink-0 pl-2 text-xs text-gray-400">{formatBytes(node.file.size)}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function OpenInOctreeBar({ result }: { result: ArxivSourceResponse }) {
  const ref = useCtaImpression<HTMLDivElement>(RESULT_SOURCE);
  const octree = result.octree;
  if (!octree) {
    return (
      <div className="mt-4 rounded-xl border border-gray-200 bg-white p-3 text-sm text-gray-600">
        The main file is too large to open in Octree from here. Download the .zip and upload it to an Octree
        project instead.
      </div>
    );
  }
  return (
    <div
      ref={ref}
      data-cta-placement={RESULT_SOURCE}
      className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-blue-200 bg-blue-50/70 p-3"
    >
      <p className="min-w-0 flex-1 text-sm text-gray-700">
        {octree.mode === 'flattened' && octree.inlined.length > 0
          ? `Opens ${result.mainFile} as one file in Octree, with ${octree.inlined.length} \\input/\\include file${octree.inlined.length === 1 ? '' : 's'} inlined. `
          : `Opens ${result.mainFile} in Octree. `}
        Figures and other files are not carried over yet: upload them from the .zip to compile with images.
      </p>
      <button
        type="button"
        onClick={() =>
          openInOctree({ latex: octree.latex, title: `arXiv ${result.id}`, source: RESULT_SOURCE })
        }
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
      >
        <OctreeLogo className="h-5 w-5" />
        Open in Octree
      </button>
    </div>
  );
}

export default function ArxivToLatexClient() {
  const tCommon = useTranslations('common');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ToolError | null>(null);
  const [result, setResult] = useState<ArxivSourceResponse | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    loader.init().then((monaco) => {
      if (!monaco.languages.getLanguages().some((l) => l.id === 'latex')) {
        monaco.languages.register({ id: 'latex' });
        monaco.languages.setLanguageConfiguration('latex', latexLanguageConfiguration);
        monaco.languages.setMonarchTokensProvider('latex', latexTokenProvider);
      }
    });
  }, []);

  const tree = useMemo(() => (result ? buildTree(result.files) : []), [result]);

  const fetchSource = async (raw: string) => {
    const value = raw.trim();
    if (!value) return;
    if (!parseArxivId(value)) {
      setResult(null);
      setError({
        code: 'invalid_id',
        message: 'That is not a valid arXiv ID or URL. Use an ID like 2401.12345 or a link like arxiv.org/abs/2401.12345.',
      });
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch('/api/arxiv-to-latex', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: value }),
      });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as Partial<ArxivErrorBody> | null;
        setError({
          message: body?.error || 'Something went wrong while fetching this paper. Please try again.',
          code: body?.code || 'error',
        });
        trackConverterUsed(TOOL, false);
        return;
      }
      const data = (await response.json()) as ArxivSourceResponse;
      setResult(data);
      setSelected(data.mainFile && data.mainFile in data.contents ? data.mainFile : Object.keys(data.contents)[0] ?? null);
      trackConverterUsed(TOOL, true);
    } catch {
      setError({ message: 'Could not reach the server. Check your connection and try again.', code: 'network' });
      trackConverterUsed(TOOL, false);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchSource(input);
  };

  const zipHref = result ? `/api/arxiv-to-latex?format=zip&id=${encodeURIComponent(result.id)}` : '#';
  const textCount = result ? result.files.filter((f) => f.text).length : 0;

  return (
    <div className={cn('min-h-screen bg-gray-50', dmSans.className)}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-10">
          <div className="relative mb-3 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 self-start text-gray-600 transition-colors hover:text-gray-900 sm:absolute sm:left-0"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">{tCommon('backToTools')}</span>
            </Link>
            <h1 className="text-center text-4xl font-light text-gray-900">arXiv to LaTeX</h1>
          </div>
          <p className="text-center text-lg text-gray-600">
            Download the LaTeX source of any arXiv paper, browse its files and open it in Octree
          </p>
        </div>

        <form onSubmit={onSubmit} className="mx-auto max-w-3xl">
          <label htmlFor="arxiv-id" className="mb-2 block text-sm font-medium text-gray-700">
            arXiv ID or URL
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="arxiv-id"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="2401.12345 or https://arxiv.org/abs/2401.12345v2"
              autoComplete="off"
              spellCheck={false}
              className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
              {loading ? 'Fetching source…' : 'Get LaTeX source'}
            </button>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <span>Try:</span>
            {EXAMPLES.map((ex) => (
              <button
                key={ex.id}
                type="button"
                disabled={loading}
                onClick={() => {
                  setInput(ex.id);
                  fetchSource(ex.id);
                }}
                className="rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-700 hover:border-gray-300 hover:bg-gray-100 disabled:opacity-50"
              >
                {ex.label}
              </button>
            ))}
          </div>
        </form>

        {error && (
          <div
            role="alert"
            className="mx-auto mt-6 flex max-w-3xl items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p>{error.message}</p>
              {(error.code === 'pdf_only' || error.code === 'postscript_only') && (
                <p className="mt-2">
                  You can still recreate the text and math as LaTeX with the{' '}
                  <Link href="/tools/pdf-to-latex" className="font-medium underline">
                    PDF to LaTeX converter
                  </Link>
                  .
                </p>
              )}
            </div>
          </div>
        )}

        {result && (
          <div className="mt-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-medium text-gray-900">
                  arXiv:{result.id}{' '}
                  <a
                    href={result.absUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-normal text-blue-700 hover:underline"
                  >
                    abstract <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </h2>
                <p className="text-sm text-gray-500">
                  {result.files.length} file{result.files.length === 1 ? '' : 's'} ({textCount} text)
                  {result.mainFile ? ` · main file ${result.mainFile}` : ' · no main .tex file found'}
                </p>
              </div>
              {result.zipAvailable ? (
                <a
                  href={zipHref}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50"
                >
                  <Download className="h-4 w-4" /> Download .zip
                </a>
              ) : null}
              <a
                href={result.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50"
              >
                <ExternalLink className="h-4 w-4" /> Original archive on arXiv
              </a>
            </div>

            <div className="grid gap-4 lg:grid-cols-[300px_minmax(0,1fr)]">
              <div className="max-h-[620px] overflow-auto rounded-xl border border-gray-200 bg-white p-2">
                <FileTree
                  nodes={tree}
                  depth={0}
                  selected={selected}
                  mainFile={result.mainFile}
                  contents={result.contents}
                  onSelect={setSelected}
                />
              </div>
              <div className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="border-b border-gray-200 px-4 py-2 text-sm text-gray-600">
                  {selected ?? 'No text file to show'}
                </div>
                <div className="h-[580px]">
                  {selected && (
                    <Editor
                      height="100%"
                      language={/\.(tex|ltx|sty|cls|bbl|latex)$/i.test(selected) ? 'latex' : 'plaintext'}
                      value={result.contents[selected] ?? ''}
                      theme="vs-light"
                      options={{
                        readOnly: true,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        fontSize: 14,
                        lineNumbers: 'on',
                        wordWrap: 'on',
                        padding: { top: 8, bottom: 8 },
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            {!result.zipAvailable && (
              <p className="mt-3 text-sm text-gray-600">
                This source is too large to repackage as a .zip here; use the original archive from arXiv (a
                .tar.gz) instead.
              </p>
            )}
            {result.skipped.length > 0 && (
              <p className="mt-3 text-sm text-gray-600">
                Not unpacked: {result.skipped.slice(0, 5).join(', ')}
                {result.skipped.length > 5 ? ` and ${result.skipped.length - 5} more` : ''}.
              </p>
            )}

            <OpenInOctreeBar result={result} />
          </div>
        )}

        <div className="mt-16">
          <OctreeCTA source={`tools:${TOOL}`} />
        </div>
      </div>
    </div>
  );
}
