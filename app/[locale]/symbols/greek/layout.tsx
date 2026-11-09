import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Greek Letters in LaTeX - Full Greek Alphabet, Copy-Paste",
  description: "Greek letters in LaTeX, copy-ready: \\alpha, \\beta, \\gamma, \\delta, \\theta, \\pi, \\sigma, \\omega, uppercase \\Gamma to \\Omega, variants and bold Greek.",
  keywords: [
    "greek letters latex",
    "latex greek alphabet",
    "alpha latex",
    "theta latex",
    "sigma latex",
    "bold greek letters latex",
    // Core keywords
    "latex symbols",
    "math symbols",
    "symbol copy paste",
    "unicode math symbols",
    "copy math symbols",
    // Greek letter keywords
    "latex greek letters",
    "latex alpha",
    "latex beta",
    "latex gamma",
    "latex delta",
    "latex theta",
    "latex pi",
    "latex sigma",
    "latex omega",
    "latex epsilon",
    "latex lambda",
    "latex phi",
    "latex psi",
    "greek symbols latex",
    "latex uppercase greek",
    "latex lowercase greek",
    "varepsilon latex",
    "varphi latex",
    "greek alphabet latex",
    "greek alphabet",
    "greek letter alphabet",
    "mathematical symbols list",
    "academic symbols",
    "scientific symbols",
  ],
  openGraph: {
    title: "Greek Letters in LaTeX - Full Greek Alphabet, Copy-Paste",
    description: "How to write every Greek letter in LaTeX, uppercase, variant and bold forms.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'greek', defaultMetadata);
}

export default function GreekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
