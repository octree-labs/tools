import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Less Than or Equal To in LaTeX (\\leq) - Inequality Symbols",
  description: "Less than, greater than and less than or equal to in LaTeX: <, >, \\leq, \\geq, \\neq, \\ll, \\lesssim, \\prec and negations, with copy-ready commands and packages.",
  keywords: [
    "latex less than",
    "less than or equal to in latex",
    "less than or equal to latex",
    "greater than or equal to latex",
    "leq latex",
    "latex not equal",
    "order symbols",
    "inequality notation math",
    "latex inequality",
    "latex order",
    "precedes symbol",
    "succeeds symbol",
    "much less than",
    "much greater than",
    "prec succ latex",
    "preceq succeq latex",
    "ll gg latex",
    "min max latex",
    "inf sup latex",
    "supremum infimum",
    "partial order symbols",
    "order theory latex",
    "math symbols",
    "comparison symbols",
  ],
  openGraph: {
    title: "Less Than, Greater Than & ≤ in LaTeX - Inequality Symbols",
    description: "Copy-paste LaTeX for less than, less than or equal to, not equal and order symbols.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'order', defaultMetadata);
}

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
