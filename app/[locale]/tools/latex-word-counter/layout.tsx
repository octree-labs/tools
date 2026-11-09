import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Word Count Online - Free LaTeX Word Counter",
  description: "Get an accurate LaTeX word count online. Paste your .tex source to count words in LaTeX, excluding commands, math and comments, with texcount-compatible totals.",
  keywords: [
    "LaTeX word counter",
    "latex word count",
    "word count latex",
    "count words latex",
    "latex word count online",
    "texcount",
    "word count LaTeX document",
    "texcount online",
    "LaTeX statistics",
    "count words in tex file",
    "LaTeX document length",
    "academic word count",
    "thesis word counter",
    "paper word count",
    "overleaf word count",
    "latex character count",
    "tex word counter",
  ],
  alternates: {
    canonical: '/tools/latex-word-counter',
  },
  openGraph: {
    title: "LaTeX Word Count Online - Free LaTeX Word Counter",
    description: "Count words in LaTeX online, excluding commands, math and comments, with texcount-compatible totals.",
    url: 'https://tools.useoctree.com/tools/latex-word-counter',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "LaTeX Word Count Online - Free LaTeX Word Counter",
    description: "Count words in LaTeX online, excluding commands, math and comments, with texcount-compatible totals.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'latex-word-counter', defaultMetadata);
}

export default function LatexWordCounterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

