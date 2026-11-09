import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Optimization Symbols in LaTeX - Argmax, Argmin, s.t.",
  description: "Optimization symbols in LaTeX, copy-ready: argmax and argmin with \\DeclareMathOperator*, min and max, subject to, Lagrangian, constraints and optidef.",
  keywords: [
    "argmax latex",
    "argmin latex",
    "optimization latex",
    "optimization problem latex",
    "latex min max",
    "optimization symbols",
    "argmax argmin latex",
    "latex argmax",
    "latex argmin",
    "constraint notation latex",
    "lagrangian symbols",
    "operations research symbols",
    "minimize maximize latex",
    "subject to latex",
    "kkt conditions latex",
    "optimal value latex",
    "feasible set latex",
    "hessian latex",
    "gradient latex",
    "convex optimization latex",
    "positive definite latex",
    "machine learning symbols",
    "math symbols",
  ],
  openGraph: {
    title: "Optimization Symbols in LaTeX - Argmax, Argmin, s.t.",
    description: "How to write argmax, argmin and constrained optimization problems in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'optimization', defaultMetadata);
}

export default function OptimizationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
