import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Quantifiers in LaTeX - For All ∀, There Exists ∃, ∈",
  description: "Quantifier symbols in LaTeX, copy-ready: for all \\forall, there exists \\exists, \\nexists, unique existence \\exists!, element of \\in and logical connectives.",
  keywords: [
    "for all latex",
    "there exists latex",
    "quantifiers latex",
    "forall symbol latex",
    "quantifier symbols",
    "forall exists latex",
    "latex for all",
    "latex exists",
    "latex not exists",
    "unique exists latex",
    "element of symbol",
    "not element of symbol",
    "set membership symbol",
    "forall latex",
    "exists latex",
    "nexists latex",
    "in notin latex",
    "set builder notation",
    "such that latex",
    "quantified statement latex",
    "logic symbols",
    "math symbols",
    "latex symbols",
  ],
  openGraph: {
    title: "Quantifiers in LaTeX - For All ∀, There Exists ∃, ∈",
    description: "How to write for all, there exists and such that in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'quantifiers', defaultMetadata);
}

export default function QuantifiersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
