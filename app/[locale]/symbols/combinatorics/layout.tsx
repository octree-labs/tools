import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Choose in LaTeX (\\binom) & Factorial - Combinatorics Symbols",
  description: "Write n choose k in LaTeX with \\binom{n}{k}, \\dbinom and \\tbinom, and a factorial with n!. Copy-ready commands for multinomials, permutations and Stirling numbers.",
  keywords: [
    "choose in latex",
    "n choose k latex",
    "latex choose",
    "latex factorial",
    "factorial in latex",
    "binom latex",
    "combinatorics symbols",
    "permutation notation",
    "combination symbols",
    "factorial latex",
    "binomial coefficient latex",
    "ncr npr latex",
    "latex binom",
    "stirling numbers latex",
    "catalan number latex",
    "bell number latex",
    "fibonacci latex",
    "partition function latex",
    "derangement latex",
    "double factorial latex",
    "multinomial latex",
    "falling factorial latex",
    "rising factorial latex",
    "pochhammer symbol",
    "counting symbols",
    "discrete math symbols",
    "math symbols",
  ],
  openGraph: {
    title: "Choose & Factorial in LaTeX - Combinatorics Symbols",
    description: "Copy-paste LaTeX for n choose k, factorials, multinomial coefficients and permutations.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'combinatorics', defaultMetadata);
}

export default function CombinatoricsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

