import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Set Theory Symbols - Subset, Element Of, Empty Set",
  description: "LaTeX set theory symbols, copy-ready: element of \\in, subset \\subseteq, union \\cup, intersection \\cap, empty set \\emptyset, set-builder notation, \\mathbb{R}.",
  keywords: [
    "latex subset",
    "element of latex",
    "latex set theory symbols",
    "empty set latex",
    "union latex",
    "subset latex",
    "subseteq latex",
    "set builder notation latex",
    // Set theory keywords
    "set notation symbols",
    "set theory symbols",
    "empty set symbol",
    "element of symbol",
    "not element of symbol",
    "union symbol",
    "intersection symbol",
    "power set symbol",
    "cardinality symbol",
    "set builder notation",
    "subset symbol",
    "superset symbol",
    "set membership symbol",
    "belongs to symbol",
    // LaTeX specific
    "latex set theory",
    "emptyset latex",
    "in notin latex",
    "cup cap latex",
    "subset subseteq latex",
    "latex natural numbers",
    "latex integers",
    "latex real numbers",
    "mathbb latex",
    "latex number sets",
    "varnothing latex",
    "latex element symbol",
    "unicode math symbols",
    "copy math symbols",
  ],
  openGraph: {
    title: "LaTeX Set Theory Symbols - Subset, Element Of, Empty Set",
    description: "How to write subset, element of, union, intersection and the empty set in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'set-theory', defaultMetadata);
}

export default function SetTheoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
