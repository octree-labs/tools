import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Computer Science Symbols in LaTeX - Big O, Floor, XOR",
  description: "Computer science symbols in LaTeX, copy-ready: Big O notation O(n), \\Omega, \\Theta, floor and ceiling, \\bmod, XOR \\oplus, \\gets and := for algorithms.",
  keywords: [
    "big o notation latex",
    "big o latex",
    "computer science symbols latex",
    "floor latex",
    "ceiling latex",
    "xor latex",
    "latex mod",
    // Computer science keywords
    "computer science symbols",
    "algorithm symbols",
    "big o notation symbols",
    "complexity notation symbols",
    "logical symbols cs",
    "programming math symbols",
    "lambda calculus symbols",
    "recursion notation symbols",
    // LaTeX specific
    "latex computer science",
    "latex big o notation",
    "latex algorithm symbols",
    "latex complexity",
    "latex assignment",
    "latex xor",
    "latex floor ceiling",
    "big O Omega Theta latex",
    "latex mapsto",
    "latex definition",
    "triangleq latex",
    "latex modulo",
    "latex divides",
    "lfloor lceil latex",
    "oplus latex",
    "land lor latex",
    "latex logarithm",
    "latex natural log",
    "academic symbols",
  ],
  openGraph: {
    title: "Computer Science Symbols in LaTeX - Big O, Floor, XOR",
    description: "How to write Big O notation, floor, ceiling, mod and pseudocode symbols in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'computer-science', defaultMetadata);
}

export default function ComputerScienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
