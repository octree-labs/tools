import type { FaqJsonLdItem } from "@/lib/json-ld";
import {
  Cmd,
  IntroFaq,
  IntroH2,
  IntroH3,
  IntroP,
  IntroSection,
  Pre,
  QuickRefTable,
  type QuickRefRow,
} from "./ui";

const quickRef: QuickRefRow[] = [
  { latex: "s_i \\in S_i", use: "Strategy of player i" },
  { latex: "s_{-i}", use: "Strategies of all other players" },
  { latex: "u_i(s_i, s_{-i})", use: "Payoff (utility) of player i" },
  { latex: "s^* = (s_1^*, \\ldots, s_n^*)", use: "Nash equilibrium profile" },
  { latex: "\\operatorname{BR}_i(s_{-i})", use: "Best response", pkg: "amsmath" },
  { latex: "\\sigma_i \\in \\Delta(S_i)", use: "Mixed strategy" },
  { latex: "\\mathbb{E}[u_i(\\sigma)]", use: "Expected payoff", pkg: "amssymb" },
  { latex: "a \\succ b", use: "Strict preference" },
  { latex: "a \\succeq b", use: "Weak preference" },
  { latex: "\\max_{s_i} \\min_{s_{-i}} u_i", use: "Maximin value" },
  { latex: "\\phi_i(v)", use: "Shapley value" },
  { latex: "v(S)", use: "Value of coalition S" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write a payoff matrix in LaTeX?",
    answer:
      "Use an array inside display math, with a vertical rule after the row labels: \\begin{array}{c|cc} & L & R \\\\ \\hline U & 3,3 & 0,5 \\\\ D & 5,0 & 1,1 \\end{array}. For a strategic-form game with player names, the sgame package provides a game environment.",
  },
  {
    question: "How do I write s minus i in LaTeX?",
    answer:
      "Put the minus sign and the index inside braces: s_{-i}. Without braces, s_-i lowers only the minus sign. The same applies to profiles like (s_i', s_{-i}) and best responses BR_i(s_{-i}).",
  },
  {
    question: "How do I mark a Nash equilibrium in LaTeX?",
    answer:
      "Use a superscript star: s^* for the profile and s_i^* for one player's equilibrium strategy. The equilibrium condition reads u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) for all s_i \\in S_i.",
  },
];

export default function GameTheoryIntro() {
  return (
    <IntroSection>
      <IntroH2>Game theory symbols in LaTeX: strategies, payoffs and equilibria</IntroH2>
      <IntroP>
        Game theory notation in LaTeX is mostly indexed letters, so the trick is consistent subscripts.
        A player&apos;s strategy is <Cmd>{"s_i"}</Cmd>, the strategies of everyone else are <Cmd>{"s_{-i}"}</Cmd>,
        the payoff is <Cmd>{"u_i(s_i, s_{-i})"}</Cmd>, and a Nash equilibrium is marked with a
        star, <Cmd>{"s^*"}</Cmd>. Mixed strategies use <Cmd>{"\\sigma_i \\in \\Delta(S_i)"}</Cmd>,
        preferences use <Cmd>{"\\succ"}</Cmd> and <Cmd>{"\\succeq"}</Cmd>, and a best response
        reads best as <Cmd>{"\\operatorname{BR}_i"}</Cmd> from amsmath. Payoff matrices are tables
        built with array. The table lists the game theory symbols people use most, with the package
        each one needs; the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: strategies, payoffs and equilibria</IntroH3>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Writing a payoff matrix</IntroH3>
      <IntroP>
        A two-player payoff matrix is an array in display math, with a rule after the row labels.
        The sgame package draws strategic-form games with player names if you need more:
      </IntroP>
      <Pre>{"\\[\n\\begin{array}{c|cc}\n    & L   & R   \\\\ \\hline\n  U & 3,3 & 0,5 \\\\\n  D & 5,0 & 1,1\n\\end{array}\n\\]"}</Pre>

      <IntroH3>Frequently asked questions about game theory in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
