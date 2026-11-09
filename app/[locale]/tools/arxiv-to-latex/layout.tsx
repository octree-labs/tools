import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "arXiv to LaTeX - Download arXiv LaTeX Source (.tex) Free",
  description: "Paste an arXiv ID or link to get the paper's LaTeX source: browse the .tex files, download the arXiv source code as a .zip, or open it in Octree. Free, no sign-up.",
  keywords: [
    "arxiv to latex",
    "arxiv latex source",
    "arxiv download latex",
    "download arxiv tex",
    "arxiv paper source",
    "arxiv tex files",
    "import arxiv papers",
    "arxiv source code",
    "arxiv latex editor",
    "arxiv paper import",
    "arxiv octree",
  ],
  alternates: {
    canonical: '/tools/arxiv-to-latex',
  },
  openGraph: {
    title: "arXiv to LaTeX - Download arXiv LaTeX Source",
    description: "Get the LaTeX source of any arXiv paper: browse the files, download a .zip, or open it in Octree.",
    url: 'https://tools.useoctree.com/tools/arxiv-to-latex',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "arXiv to LaTeX - Download arXiv LaTeX Source",
    description: "Get the LaTeX source of any arXiv paper: browse the files, download a .zip, or open it in Octree.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'arxiv-to-latex', defaultMetadata);
}

export default function ArxivToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
