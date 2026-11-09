import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Complex Number Symbol ℂ & Conjugate in LaTeX",
  description: "The symbol for complex numbers is ℂ (\\mathbb{C}). Copy-ready LaTeX for the complex conjugate \\bar{z}, z^*, Re, Im, modulus |z|, argument and polar form.",
  keywords: [
    "complex number symbol",
    "symbol for complex numbers",
    "complex numbers symbol",
    "conjugate latex",
    "latex conjugate",
    "complex number symbols",
    "imaginary unit symbol",
    "latex complex numbers",
    "real part imaginary part latex",
    "latex re im",
    "complex conjugate latex",
    "modulus latex",
    "argument latex",
    "polar form latex",
    "euler formula latex",
    "complex exponential latex",
    "complex logarithm latex",
    "upper half plane latex",
    "mathbb c latex",
    "complex analysis symbols",
    "i j imaginary latex",
    "z bar latex",
    "math symbols",
  ],
  openGraph: {
    title: "Complex Number Symbol ℂ & Conjugate in LaTeX",
    description: "Copy-paste LaTeX for the complex numbers symbol, conjugates, Re, Im, modulus and polar form.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'complex', defaultMetadata);
}

export default function ComplexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

