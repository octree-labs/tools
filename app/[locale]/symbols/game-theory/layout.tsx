import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Game Theory Symbols in LaTeX - Nash Equilibrium, Payoffs",
  description: "Game theory symbols in LaTeX, copy-ready: strategies s_i and s_{-i}, payoffs u_i, Nash equilibrium s^*, best response, mixed strategies, payoff matrices.",
  keywords: [
    "game theory symbols latex",
    "nash equilibrium latex",
    "payoff matrix latex",
    "game theory symbols",
    "nash equilibrium notation",
    "latex game theory",
    "strategy notation latex",
    "payoff function latex",
    "best response latex",
    "mixed strategy latex",
    "dominant strategy latex",
    "pareto optimal latex",
    "minimax latex",
    "zero sum game latex",
    "shapley value latex",
    "subgame perfect latex",
    "cooperative game latex",
    "economics symbols",
    "decision theory latex",
    "math symbols",
  ],
  openGraph: {
    title: "Game Theory Symbols in LaTeX - Nash Equilibrium, Payoffs",
    description: "How to write strategies, payoffs, Nash equilibria and payoff matrices in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'game-theory', defaultMetadata);
}

export default function GameTheoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
