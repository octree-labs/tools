import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Trigonometry - Sin, Cos, Tan, Arcsin & Degrees",
  description: "LaTeX trigonometry symbols, copy-ready: \\sin, \\cos, \\tan, \\sec, \\csc, \\cot, inverse \\arcsin and \\arctan, hyperbolic functions, \\sin^2 and degrees.",
  keywords: [
    "latex trigonometry",
    "trig functions latex",
    "sin latex",
    "cos latex",
    "arcsin latex",
    "sin squared latex",
    "trigonometry symbols",
    "trig notation latex",
    "latex sin cos tan",
    "latex arcsin arccos",
    "inverse trig latex",
    "latex sinh cosh tanh",
    "hyperbolic functions latex",
    "latex secant cosecant",
    "latex cotangent",
    "radians degrees latex",
    "angle theta phi latex",
    "latex trig functions",
    "sin inverse latex",
    "cos inverse latex",
    "tan inverse latex",
    "trigonometric identities latex",
    "math symbols",
    "calculus symbols",
  ],
  openGraph: {
    title: "LaTeX Trigonometry - Sin, Cos, Tan, Arcsin & Degrees",
    description: "How to write trig functions, inverse trig functions and degrees in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'trigonometry', defaultMetadata);
}

export default function TrigonometryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

