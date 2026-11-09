import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Topology Symbols in LaTeX - Closure, Boundary, Homeomorphic",
  description: "Topology symbols in LaTeX, copy-ready: closure \\overline{A}, boundary \\partial A, interior, homeomorphic \\cong, fundamental group, \\aleph_0 and \\beth.",
  keywords: [
    "topology symbols latex",
    "homeomorphic symbol",
    "homeomorphic latex",
    "beth symbol latex",
    "beth math symbol",
    "belong to symbol in latex",
    "closure latex",
    "subset equal latex",
    // Core keywords
    "math symbols",
    "latex symbols",
    "academic symbols",
    "research symbols",
    // Topology keywords
    "latex topology symbols",
    "latex abstract math",
    "latex aleph",
    "latex boundary",
    "latex weierstrass p",
    "latex real part",
    "latex imaginary part",
    "partial latex",
    "aleph latex",
    "wp latex",
    "Re Im latex",
    "latex homology",
    "latex cohomology",
    "latex fundamental group",
    "latex category theory",
    "latex functor",
    "latex tensor product",
    "latex wedge product",
    "abstract math symbols",
    "topology notation latex",
    "cardinality symbol",
    "mathematical symbols list",
  ],
  openGraph: {
    title: "Topology Symbols in LaTeX - Closure, Boundary, Homeomorphic",
    description: "How to write closure, boundary, homeomorphic and cardinal symbols in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'topology', defaultMetadata);
}

export default function TopologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
