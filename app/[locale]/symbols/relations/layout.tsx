import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Relations - Not Equal ≠, Approx ≈, Less Than <, ≤",
  description: "Relation symbols in LaTeX, copy-ready: not equal \\neq, approximately equal \\approx, less than <, \\leq, \\geq, \\equiv, \\sim, \\cong, \\propto and negations.",
  keywords: [
    "not equal latex",
    "approx latex",
    "approximately equal latex",
    "latex approximate symbol",
    "latex less than",
    "approximately equal in latex",
    "almost equal latex",
    "comparison symbols",
    "relation symbols latex",
    "inequality symbols",
    "equivalence symbols",
    "proportional symbol",
    "approximation symbol",
    "parallel symbol",
    "perpendicular symbol",
    "subset symbol",
    "superset symbol",
    "latex less than equal",
    "latex greater than equal",
    "latex not equal",
    "latex approximately",
    "latex equivalent",
    "latex proportional",
    "leq geq latex",
    "neq approx latex",
    "equiv propto latex",
    "math symbols",
    "latex symbols",
    "symbol copy paste",
  ],
  openGraph: {
    title: "LaTeX Relations - Not Equal ≠, Approx ≈, Less Than <, ≤",
    description: "How to write not equal, approximately equal, less than and other relations in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'relations', defaultMetadata);
}

export default function RelationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

