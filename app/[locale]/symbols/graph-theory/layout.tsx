import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Graph Theory Symbols in LaTeX - Degree, Adjacency, K_n",
  description: "Graph theory symbols in LaTeX, copy-ready: G = (V, E), adjacency u \\sim v, degree \\deg(v), complete graphs K_n, chromatic number \\chi(G), TikZ drawing.",
  keywords: [
    "graph theory symbols latex",
    "graph theory latex",
    "degree of vertex latex",
    "draw graph latex tikz",
    "adjacency symbol latex",
    "graph theory symbols",
    "adjacency notation",
    "graph symbols latex",
    "vertex edge symbols",
    "latex graph notation",
    "path cycle latex",
    "degree notation graph",
    "complete graph latex",
    "bipartite graph latex",
    "adjacency matrix latex",
    "chromatic number latex",
    "clique notation",
    "independent set latex",
    "tree forest latex",
    "planar graph latex",
    "matching graph latex",
    "graph coloring latex",
    "computer science symbols",
    "discrete math symbols",
    "math symbols",
  ],
  openGraph: {
    title: "Graph Theory Symbols in LaTeX - Degree, Adjacency, K_n",
    description: "How to write graph theory notation and draw graphs with TikZ in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'graph-theory', defaultMetadata);
}

export default function GraphTheoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

