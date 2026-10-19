import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const title = "Equation to LaTeX Converter – Math & Handwritten Equations | Free";
const description =
  "Free equation to LaTeX converter. Type a math equation or upload a photo, screenshot or handwritten equation and get clean LaTeX code with a live preview.";

const defaultMetadata: Metadata = {
  title,
  description,
  keywords: [
    "equation to latex converter",
    "equation to LaTeX",
    "math equation to latex",
    "convert equation to latex",
    "handwritten equation to latex",
    "math to LaTeX converter",
    "image to LaTeX",
    "screenshot to latex",
    "equation converter",
    "LaTeX equation generator",
    "free LaTeX converter",
    "online equation converter",
    "latex equation editor",
    "equation editor latex",
    "math formula latex",
    "latex formula generator",
    "latex math editor",
    "quadratic formula latex",
    "fraction latex",
    "integral latex",
    "derivative latex",
    "summation latex",
  ],
  openGraph: {
    title,
    description,
    url: 'https://tools.useoctree.com/tools/equation-to-latex',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'equation-to-latex', defaultMetadata);
}

export default function EquationToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
