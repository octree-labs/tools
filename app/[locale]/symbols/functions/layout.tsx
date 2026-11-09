import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Function Composition & Isomorphism in LaTeX - ∘, ≅, ↦",
  description: "Function composition in LaTeX is \\circ and isomorphism is \\cong. Copy-ready commands for f \\colon A \\to B, \\mapsto, \\simeq, identity, inverse and injections.",
  keywords: [
    "isomorphism latex",
    "latex isomorphism",
    "composition function latex",
    "function composition latex",
    "latex circ",
    "latex cong",
    "function notation symbols",
    "mapping symbols latex",
    "latex function",
    "latex mapsto",
    "latex arrow",
    "composition symbol",
    "injective symbol",
    "surjective symbol",
    "bijective symbol",
    "latex to arrow",
    "mapsto latex",
    "circ latex",
    "function definition latex",
    "domain codomain latex",
    "image kernel latex",
    "piecewise function latex",
    "function inverse latex",
    "math symbols",
    "latex symbols",
  ],
  openGraph: {
    title: "Function Composition & Isomorphism in LaTeX",
    description: "Copy-paste LaTeX for composition ∘, isomorphism ≅, maps-to ↦ and function notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'functions', defaultMetadata);
}

export default function FunctionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

