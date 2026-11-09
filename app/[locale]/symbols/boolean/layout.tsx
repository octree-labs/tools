import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Boolean Algebra Symbols in LaTeX - AND, OR, XOR, NOT",
  description: "Boolean algebra symbols in LaTeX: AND \\land, OR \\lor, NOT \\lnot, XOR \\oplus and \\veebar, NAND, implies, iff, true ⊤ and false ⊥, with copy-ready commands.",
  keywords: [
    "xor latex",
    "latex and or symbol",
    "latex and symbol",
    "latex or symbol",
    "boolean algebra symbols latex",
    "boolean algebra symbols",
    "logic gate symbols latex",
    "and or not symbols",
    "xor symbol",
    "nand symbol",
    "nor symbol",
    "latex and or",
    "latex not",
    "latex xor",
    "land lor latex",
    "neg latex",
    "oplus latex",
    "boolean and latex",
    "boolean or latex",
    "de morgan latex",
    "complement symbol",
    "logic symbols cs",
    "digital logic symbols",
    "math symbols",
    "computer science symbols",
  ],
  openGraph: {
    title: "Boolean Algebra Symbols in LaTeX - AND, OR, XOR, NOT",
    description: "Copy-paste LaTeX for AND, OR, NOT, XOR, NAND and boolean algebra.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'boolean', defaultMetadata);
}

export default function BooleanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

