import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "Mermaid to TikZ: Convert Mermaid Diagrams to LaTeX",
  description: "Convert Mermaid diagrams to TikZ LaTeX code. Flowcharts and other Mermaid diagrams become a compilable tikzpicture with a live PDF preview. Free, no signup.",
  keywords: [
    "mermaid latex",
    "mermaid to tikz",
    "convert Mermaid to LaTeX",
    "Mermaid to LaTeX converter",
    "Mermaid to LaTeX online",
    "Mermaid diagram to LaTeX",
    "Mermaid LaTeX converter",
    "free Mermaid to LaTeX converter",
    "AI Mermaid to LaTeX converter",
    "diagram to LaTeX",
    "mermaid to tikz",
    "flowchart to latex",
    "sequence diagram to latex",
    "gantt chart to latex",
    "state diagram to latex",
    "class diagram to latex",
    "mermaid js to tikz",
    "markdown diagram to latex",
  ],
  alternates: {
    canonical: '/tools/mermaid-to-latex',
  },
  openGraph: {
    title: "Mermaid to TikZ: Convert Mermaid Diagrams to LaTeX",
    description: "Convert Mermaid diagrams to TikZ LaTeX code with a live PDF preview. Free, no signup.",
    url: 'https://tools.useoctree.com/tools/mermaid-to-latex',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mermaid to TikZ: Convert Mermaid Diagrams to LaTeX",
    description: "Convert Mermaid diagrams to TikZ LaTeX code with a live PDF preview. Free, no signup.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'mermaid-to-latex', defaultMetadata);
}

export default function MermaidToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 