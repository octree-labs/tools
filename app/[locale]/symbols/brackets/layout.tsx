import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Brackets - Braces, Angle, Floor, Double Brackets",
  description: "LaTeX brackets, copy-ready: curly braces \\{ \\}, angle brackets \\langle \\rangle, floor, ceiling, norms, \\left \\right sizing and double brackets.",
  keywords: [
    "curly braces latex",
    "angle brackets latex",
    "double bracket latex",
    "latex floor ceiling",
    "latex norm",
    "left right latex",
    // Brackets & delimiters keywords
    "bracket symbols",
    "parentheses symbols",
    "delimiter symbols",
    "angle bracket symbol",
    "floor symbol",
    "ceiling symbol",
    "absolute value symbol",
    "norm symbol",
    "double bracket symbol",
    // LaTeX specific
    "latex brackets",
    "latex delimiters",
    "latex angle brackets",
    "latex floor symbol",
    "latex ceiling symbol",
    "latex norm symbol",
    "langle rangle latex",
    "lfloor rfloor latex",
    "lceil rceil latex",
    "latex double brackets",
    "llbracket latex",
    "latex left right",
    "latex big brackets",
    "math delimiters latex",
    "latex parentheses",
    "latex curly braces",
    "latex vertical bar",
    "math symbols copy paste",
    "unicode math symbols",
  ],
  openGraph: {
    title: "LaTeX Brackets - Braces, Angle, Floor, Double Brackets",
    description: "How to write curly braces, angle brackets, floor, norms and double brackets in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'brackets', defaultMetadata);
}

export default function BracketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
