import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Arrows - Every Arrow in LaTeX, Copy-Paste (→ ⇒ ↦ ⟶)",
  description: "All LaTeX arrows, copy-ready: \\rightarrow, \\to, \\Rightarrow, \\mapsto, \\longrightarrow, \\xrightarrow. How to write an arrow in LaTeX in math and text mode.",
  keywords: [
    // Core keywords
    "latex symbols",
    "math symbols",
    "symbol copy paste",
    "unicode math symbols",
    // Arrow keywords
    "latex arrows",
    "arrow latex",
    "arrows in latex",
    "arrow in latex",
    "latex arrow with text above",
    "xrightarrow latex",
    "latex arrow symbols",
    "latex right arrow",
    "latex left arrow",
    "latex double arrow",
    "latex implies arrow",
    "latex mapsto",
    "rightarrow latex",
    "leftarrow latex",
    "leftrightarrow latex",
    "Rightarrow latex",
    "Leftrightarrow latex",
    "latex up arrow",
    "latex down arrow",
    "latex long arrow",
    "latex harpoon",
    "latex hook arrow",
    "directional arrows latex",
    "inference symbols",
    "logical equivalence symbol",
  ],
  openGraph: {
    title: "LaTeX Arrows - Every Arrow in LaTeX, Copy-Paste",
    description: "How to write an arrow in LaTeX: copy-ready commands for right, double, long and labelled arrows.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'arrows', defaultMetadata);
}

export default function ArrowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
