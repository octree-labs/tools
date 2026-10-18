import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX to Word Converter — Convert .tex to .docx Online",
  description: "Free online LaTeX to Word converter. Turn .tex documents into editable .docx files with headings, lists, tables, bold and italic text preserved. No sign-up, download instantly.",
  keywords: [
    "latex to word",
    "latex to docx",
    "convert latex to word",
    "latex to word converter",
    "tex to docx",
    "tex to word",
    "latex to word online",
    "convert tex to docx",
    "latex to microsoft word",
    "latex document to word",
    "export latex to word",
    "latex to doc",
    "latex to word free",
    "pandoc latex to docx alternative",
  ],
  alternates: {
    canonical: '/tools/latex-to-word',
  },
  openGraph: {
    title: "LaTeX to Word Converter — Convert .tex to .docx Online",
    description: "Turn LaTeX documents into editable Word files with headings, lists and tables preserved. Free, no sign-up.",
    url: 'https://tools.useoctree.com/tools/latex-to-word',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "LaTeX to Word Converter — Convert .tex to .docx Online",
    description: "Turn LaTeX documents into editable Word files with headings, lists and tables preserved. Free, no sign-up.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'latex-to-word', defaultMetadata);
}

export default function LatexToWordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
