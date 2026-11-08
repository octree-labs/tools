import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Probability Symbols in LaTeX - P, Expectation Operator E, Var",
  description: "Every probability symbol in LaTeX with copy-ready commands: \\Pr and \\mathbb{P}, the expectation operator \\mathbb{E}[X], Var, Cov, ~, σ, μ and binomial coefficients.",
  keywords: [
    // Probability & statistics keywords
    "probability symbols",
    "probability symbol",
    "probability symbol latex",
    "expectation operator latex",
    "expected value latex",
    "statistics symbols",
    "expectation symbol",
    "variance symbol",
    "standard deviation symbol",
    "conditional probability symbol",
    "distribution symbols",
    "random variable notation",
    "covariance symbol",
    "correlation symbol",
    // LaTeX specific
    "latex probability",
    "latex statistics",
    "latex expectation",
    "latex variance",
    "latex standard deviation",
    "latex mean",
    "latex distribution",
    "mathbb P E latex",
    "latex sigma mu",
    "latex sample mean",
    "bar x latex",
    "sim latex",
    "latex normal distribution",
    "latex independent",
    "perp latex",
    "latex conditional probability",
    "binom latex",
    "latex binomial coefficient",
    "math symbols",
    "scientific symbols",
  ],
  openGraph: {
    title: "Probability Symbols in LaTeX - Expectation, Variance & More",
    description: "Copy-paste LaTeX for the probability symbol, the expectation operator, variance and statistical notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'probability', defaultMetadata);
}

export default function ProbabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
