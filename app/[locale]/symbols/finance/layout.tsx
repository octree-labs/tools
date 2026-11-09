import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Currency Symbols in LaTeX - Dollar, Euro, Pound, Percent",
  description: "Currency and finance symbols in LaTeX, copy-ready: dollar \\$, euro \\texteuro and \\euro, pound \\pounds, yen, percent \\%, plus NPV and interest formulas.",
  keywords: [
    "dollar sign latex",
    "euro symbol latex",
    "currency symbols latex",
    "pound sign latex",
    "percent sign latex",
    "finance symbols latex",
    // Core keywords
    "latex symbols",
    "symbol copy paste",
    "unicode math symbols",
    // Finance keywords
    "latex currency symbols",
    "latex finance symbols",
    "latex dollar sign",
    "latex euro symbol",
    "latex pound symbol",
    "latex yen symbol",
    "latex rupee symbol",
    "latex bitcoin symbol",
    "latex percent",
    "latex per mille",
    "latex npv irr",
    "latex present value",
    "latex compound interest",
    "latex financial formulas",
    "latex summation finance",
    "latex interest rate",
    "money symbols latex",
    "academic symbols",
    "research symbols",
  ],
  openGraph: {
    title: "Currency Symbols in LaTeX - Dollar, Euro, Pound, Percent",
    description: "How to write dollar, euro, pound and percent signs and finance formulas in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'finance', defaultMetadata);
}

export default function FinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
