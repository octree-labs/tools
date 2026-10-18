import { Cmd, IntroH2, IntroLink, IntroP, IntroSection } from "./ui";

export default function ProbabilityIntro() {
  return (
    <IntroSection>
      <IntroH2>Probability and statistics symbols in LaTeX</IntroH2>
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
    </IntroSection>
  );
}
