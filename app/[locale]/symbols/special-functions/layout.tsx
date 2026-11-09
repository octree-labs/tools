import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Special Functions in LaTeX - Gamma, Zeta, Erf, Bessel",
  description: "Special functions in LaTeX, copy-ready: Gamma \\Gamma(z), Beta, zeta \\zeta(s), erf with \\operatorname, Bessel J_n, Legendre and hypergeometric {}_2F_1.",
  keywords: [
    "gamma function latex",
    "erf latex",
    "zeta function latex",
    "special functions latex",
    "special functions symbols",
    "gamma function notation",
    "latex gamma function",
    "riemann zeta latex",
    "bessel function latex",
    "error function latex",
    "erf erfc latex",
    "legendre polynomial latex",
    "hermite polynomial latex",
    "laguerre polynomial latex",
    "chebyshev polynomial latex",
    "hypergeometric function latex",
    "digamma function latex",
    "elliptic integral latex",
    "dirac delta latex",
    "heaviside function latex",
    "beta function latex",
    "mathematical analysis symbols",
    "advanced math symbols",
    "math symbols",
  ],
  openGraph: {
    title: "Special Functions in LaTeX - Gamma, Zeta, Erf, Bessel",
    description: "How to write the Gamma, zeta, error, Bessel and hypergeometric functions in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'special-functions', defaultMetadata);
}

export default function SpecialFunctionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

