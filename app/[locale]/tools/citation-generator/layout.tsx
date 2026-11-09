import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "BibTeX Citation Generator: Free BibTeX Generator Online",
  description: "Free BibTeX citation generator. Paste a reference, title and authors or a DOI and get a BibTeX entry for your .bib file. Export references.bib. No signup.",
  keywords: [
    "bibtex citation generator",
    "bibtex generator",
    "bibtex reference generator",
    "latex cite generator",
    "generate bibtex citation",
    "citation generator bibtex",
    "LaTeX citation generator",
    "BibTeX generator",
    "citation maker",
    "generate BibTeX",
    "DOI to BibTeX",
    "free citation generator",
    "academic citation generator",
    "bibliography generator",
    "reference generator",
    "BibTeX citation maker",
    "zotero citation",
    "zotero alternative",
    "latex citation",
    "citation latex",
    "bibtex maker online",
    "cite generator",
    "apa citation generator",
    "mla citation generator",
    "chicago citation generator",
    "ieee citation generator",
    "latex bibliography",
    "biblatex generator",
  ],
  alternates: {
    canonical: '/tools/citation-generator',
  },
  openGraph: {
    title: "BibTeX Citation Generator: Free BibTeX Generator Online",
    description: "Paste a reference, title and authors or a DOI and get a BibTeX entry for your .bib file. Free, no signup.",
    url: 'https://tools.useoctree.com/tools/citation-generator',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "BibTeX Citation Generator: Free BibTeX Generator Online",
    description: "Paste a reference, title and authors or a DOI and get a BibTeX entry for your .bib file. Free, no signup.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'citation-generator', defaultMetadata);
}

export default function CitationGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 