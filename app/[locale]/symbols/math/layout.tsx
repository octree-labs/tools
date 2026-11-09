import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Math Symbols - Copy-Paste List of Common Commands",
  description: "LaTeX math symbols, copy-ready: \\pm, \\times, \\div, \\neq, \\leq, \\approx, \\infty, \\sqrt, \\frac, exponents and \\mathbb{R}, with the package each one needs.",
  keywords: [
    "latex math symbols",
    "math symbols latex",
    "latex symbols list",
    "math symbols overleaf",
    "latex math commands",
    // Core head keywords
    "math symbols",
    "latex symbols",
    "mathematical symbols list",
    "symbols in latex",
    "unicode math symbols",
    "copy math symbols",
    "symbol copy paste",
    "academic symbols",
    "scientific symbols",
    // Operator & relation keywords
    "comparison symbols",
    "relation symbols",
    "inequality symbols",
    "equivalence symbols",
    "proportional symbol",
    "approximation symbol",
    "latex operators",
    "latex plus minus",
    "latex times symbol",
    "latex divide symbol",
    "latex fraction",
    "latex square root",
    "latex summation",
    "latex integral",
    "latex infinity",
    "latex approximately equal",
    "latex not equal",
    "math symbol cheat sheet",
    "latex symbol reference",
    "complete list of latex symbols",
  ],
  openGraph: {
    title: "LaTeX Math Symbols - Copy-Paste List of Common Commands",
    description: "The everyday LaTeX math symbols with copy-ready commands and packages.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'math', defaultMetadata);
}

export default function MathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
