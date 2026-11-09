import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Sum in LaTeX - Sigma Notation, Product, Limits",
  description: "Sum in LaTeX, copy-ready: sigma notation \\sum_{i=1}^{n}, products \\prod, double sums, \\limits for inline math, \\substack conditions and big unions.",
  keywords: [
    "sum latex",
    "sigma notation latex",
    "summation latex",
    "product symbol latex",
    "prod latex",
    "summation symbol",
    "product notation latex",
    "sigma notation",
    "pi notation",
    "latex sum",
    "latex prod",
    "latex summation",
    "latex product",
    "sum limits latex",
    "prod limits latex",
    "bigcup bigcap latex",
    "bigoplus latex",
    "bigotimes latex",
    "indexed sum latex",
    "double sum latex",
    "summation notation",
    "product notation symbol",
    "math symbols",
    "latex symbols",
    "symbol copy paste",
  ],
  openGraph: {
    title: "Sum in LaTeX - Sigma Notation, Product, Limits",
    description: "How to write sums, products and their limits in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'summation', defaultMetadata);
}

export default function SummationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

