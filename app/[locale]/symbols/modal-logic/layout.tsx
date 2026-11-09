import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Modal Logic Symbols in LaTeX - Box, Diamond, Models",
  description: "Modal logic symbols in LaTeX, copy-ready: necessity \\Box, possibility \\Diamond, \\models and \\Vdash, Kripke frames, knowledge K_a p and temporal operators.",
  keywords: [
    "modal logic symbols latex",
    "box symbol latex",
    "diamond symbol latex",
    "models symbol latex",
    "necessity possibility latex",
    "modal logic symbols",
    "necessity possibility symbols",
    "latex box diamond",
    "latex necessity",
    "latex possibility",
    "temporal logic latex",
    "epistemic logic latex",
    "knows believes latex",
    "common knowledge latex",
    "until next latex",
    "kripke model latex",
    "possible worlds latex",
    "deontic logic latex",
    "ought permitted latex",
    "accessibility relation latex",
    "philosophy logic symbols",
    "computer science logic",
    "formal verification symbols",
    "math symbols",
  ],
  openGraph: {
    title: "Modal Logic Symbols in LaTeX - Box, Diamond, Models",
    description: "How to write necessity, possibility, Kripke semantics and temporal operators in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'modal-logic', defaultMetadata);
}

export default function ModalLogicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
