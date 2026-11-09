import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Calculus Symbols in LaTeX - Derivative, Integral, Limit",
  description: "Calculus symbols in LaTeX, copy-ready: derivatives \\frac{dy}{dx}, partial derivatives \\partial, integrals \\int_a^b, limits \\lim and physics shortcuts.",
  keywords: [
    "derivative latex",
    "partial derivative latex",
    "integral latex",
    "limit latex",
    "calculus symbols latex",
    "double integral latex",
    "derivadas en latex",
    // Calculus & analysis keywords
    "calculus symbols",
    "derivative symbols",
    "integral symbols",
    "partial derivative symbol",
    "gradient symbol",
    "divergence symbol",
    "laplacian symbol",
    "limit notation symbols",
    "summation symbol",
    "product notation symbol",
    // LaTeX specific
    "latex calculus",
    "latex derivative",
    "latex integral",
    "latex partial derivative",
    "latex limit",
    "latex summation",
    "latex nabla",
    "latex gradient",
    "int latex",
    "iint iiint latex",
    "oint latex",
    "partial latex",
    "nabla latex",
    "lim latex",
    "sum prod latex",
    "frac d dx latex",
    "latex infinity",
    "latex contour integral",
    "math symbols",
    "scientific symbols",
  ],
  openGraph: {
    title: "Calculus Symbols in LaTeX - Derivative, Integral, Limit",
    description: "How to write derivatives, partial derivatives, integrals and limits in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'calculus', defaultMetadata);
}

export default function CalculusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
