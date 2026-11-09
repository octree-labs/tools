import type { FaqJsonLdItem } from "@/lib/json-ld";
import {
  Cmd,
  IntroFaq,
  IntroH2,
  IntroH3,
  IntroLink,
  IntroP,
  IntroSection,
  QuickRefTable,
  type QuickRefRow,
} from "./ui";

export const quickRef: QuickRefRow[] = [
  { latex: "\\Pr(A)", use: "Probability operator (upright Pr)" },
  { latex: "\\mathbb{P}(A)", use: "Probability symbol, blackboard bold", pkg: "amssymb" },
  { latex: "\\mathbb{E}[X]", use: "Expectation operator", pkg: "amssymb" },
  { latex: "\\operatorname{Var}(X)", use: "Variance", pkg: "amsmath" },
  { latex: "\\operatorname{Cov}(X, Y)", use: "Covariance", pkg: "amsmath" },
  { latex: "P(A \\mid B)", use: "Conditional probability" },
  { latex: "X \\sim \\mathcal{N}(\\mu, \\sigma^2)", use: "Distributed as (normal)" },
  { latex: "\\binom{n}{k}", use: "Binomial coefficient", pkg: "amsmath" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write the probability symbol in LaTeX?",
    answer:
      "Use the built-in operator \\Pr, as in \\Pr(A), for an upright Pr with operator spacing, or blackboard bold \\mathbb{P}(A) with \\usepackage{amssymb}. For conditional probability write P(A \\mid B); \\mid spaces the bar correctly where a plain | does not.",
  },
  {
    question: "How do I write the expectation operator in LaTeX?",
    answer:
      "Write \\mathbb{E}[X] (amssymb) for a blackboard-bold E, or \\operatorname{E}[X] (amsmath) for an upright E. To reuse it, declare it once in the preamble with \\DeclareMathOperator{\\E}{\\mathbb{E}} and then write \\E[X].",
  },
  {
    question: "How do I write variance in LaTeX?",
    answer:
      "Variance has no built-in command, so write \\operatorname{Var}(X) with amsmath, or declare \\DeclareMathOperator{\\Var}{Var} in the preamble and use \\Var(X). The standard deviation is \\sigma and the variance can also be written \\sigma^2.",
  },
];

export default function ProbabilityIntro() {
  return (
    <IntroSection>
      <IntroH2>Probability and statistics symbols in LaTeX</IntroH2>
      <IntroP>
        The probability symbol in LaTeX is <Cmd>\Pr</Cmd> or <Cmd>\mathbb{"{P}"}</Cmd>, and the
        expectation operator is <Cmd>\mathbb{"{E}"}[X]</Cmd>. The table lists the eight commands
        people use most, with the package each one needs; the full list of probability and
        statistics symbols follows below.
      </IntroP>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        Probability notation starts with the probability operator. LaTeX ships <Cmd>\Pr</Cmd>,
        which typesets an upright &ldquo;Pr&rdquo; with operator spacing, while most papers use
        blackboard bold <Cmd>\mathbb{"{P}"}</Cmd> for probability and <Cmd>\mathbb{"{E}"}</Cmd> for
        expectation, as in <Cmd>\mathbb{"{E}"}[X]</Cmd>. Conditional probability uses the vertical
        bar <Cmd>\mid</Cmd>, which gets the right spacing where a plain <Cmd>|</Cmd> does not:{" "}
        <Cmd>P(A \mid B)</Cmd>. A random variable&rsquo;s distribution is written with{" "}
        <Cmd>\sim</Cmd>, for example <Cmd>X \sim \mathcal{"{N}"}(\mu, \sigma^2)</Cmd>, and{" "}
        <Cmd>\propto</Cmd> says a density is proportional to something.
      </IntroP>
      <IntroP>
        Variance and covariance are not built in, so write them as operators:{" "}
        <Cmd>\operatorname{"{Var}"}(X)</Cmd> and <Cmd>\operatorname{"{Cov}"}(X, Y)</Cmd> from
        amsmath, or declare them once in the preamble with{" "}
        <Cmd>\DeclareMathOperator{"{\\Var}{Var}"}</Cmd>. The parameters themselves are Greek
        letters: <Cmd>\mu</Cmd>, <Cmd>\sigma</Cmd>, <Cmd>\rho</Cmd>, <Cmd>\lambda</Cmd> and{" "}
        <Cmd>\theta</Cmd>, with estimates marked by <Cmd>\hat{"{\\theta}"}</Cmd> and sample means
        by <Cmd>\bar{"{x}"}</Cmd>. Binomial coefficients come from amsmath&rsquo;s{" "}
        <Cmd>\binom{"{n}{k}"}</Cmd>, chi-squared is <Cmd>\chi^2</Cmd>, and independence is usually{" "}
        <Cmd>\perp</Cmd> or the double symbol <Cmd>\perp\!\!\!\perp</Cmd>.
      </IntroP>
      <IntroP>
        Load <Cmd>\usepackage{"{amsmath, amssymb}"}</Cmd> for <Cmd>\mathbb</Cmd>,{" "}
        <Cmd>\operatorname</Cmd> and <Cmd>\binom</Cmd>. For the full alphabet see our guide to{" "}
        <IntroLink href="https://www.useoctree.com/learn/greek-letters-math-symbols" external>
          Greek letters and math symbols
        </IntroLink>{" "}
        and the page on{" "}
        <IntroLink href="https://www.useoctree.com/learn/math-functions" external>
          math functions and operators
        </IntroLink>
        .
      </IntroP>

      <IntroH3>Frequently asked questions</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
