import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Chemistry Symbols in LaTeX - Yields Arrow, Equilibrium",
  description: "Chemistry symbols in LaTeX, copy-ready: yields arrow, equilibrium \\rightleftharpoons, mhchem \\ce reactions, ions, isotopes, bonds and gas or precipitate.",
  keywords: [
    "chemistry symbols latex",
    "yields arrow",
    "equilibrium symbol latex",
    "equilibrium symbol copy paste",
    "mhchem",
    "latex chemical equation",
    // Chemistry keywords
    "chemistry symbols",
    "reaction arrow symbols",
    "equilibrium symbol",
    "state symbols chemistry",
    "isotope notation symbols",
    "bond symbols",
    "chemical equation symbols",
    "stoichiometry symbols",
    // LaTeX specific
    "latex chemistry symbols",
    "latex reaction arrows",
    "latex equilibrium arrow",
    "latex chemical bonds",
    "latex isotope notation",
    "latex subscript superscript",
    "rightleftharpoons latex",
    "latex yields arrow",
    "latex precipitate",
    "latex gas symbol",
    "latex degree celsius",
    "latex single bond",
    "latex double bond",
    "latex triple bond",
    "latex partial charge",
    "latex electron",
    "latex aqueous solid liquid gas",
    "chemistry notation latex",
    "scientific symbols",
  ],
  openGraph: {
    title: "Chemistry Symbols in LaTeX - Yields Arrow, Equilibrium",
    description: "How to write reactions, the yields arrow, the equilibrium symbol and formulas in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'chemistry', defaultMetadata);
}

export default function ChemistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
