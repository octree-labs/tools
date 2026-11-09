import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Latin Symbols in LaTeX - æ, ø, ß, ł & Accented Letters",
  description: "Latin symbols and special letters in LaTeX: \\ae, \\oe, \\o, \\aa, \\ss, \\l, dotless \\i and accents like \\'e, \\\"o, \\~n, \\c{c}. Copy-ready commands.",
  keywords: [
    // Core keywords
    "symbol latin",
    "latin symbols",
    "latin symbols latex",
    "latex ss",
    "latex ae",
    "latex symbols",
    "symbol copy paste",
    "unicode math symbols",
    "academic symbols",
    // Latin letter keywords
    "latex accented letters",
    "latex special characters",
    "latex umlaut",
    "latex acute accent",
    "latex grave accent",
    "latex tilde accent",
    "latex cedilla",
    "latex scandinavian letters",
    "latex french accents",
    "latex german umlaut",
    "ddot latex",
    "acute latex",
    "grave latex",
    "latex ae ligature",
    "latex oe ligature",
    "latex o slash",
    "imath jmath latex",
    "dotless i latex",
    "how to type math symbols",
    "how to write symbols in latex",
  ],
  openGraph: {
    title: "Latin Symbols in LaTeX - Special Letters & Accents",
    description: "Copy-paste LaTeX for æ, œ, ø, å, ß, ł and accented Latin letters.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'latin', defaultMetadata);
}

export default function LatinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
