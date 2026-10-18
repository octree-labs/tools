import { Cmd, IntroH2, IntroLink, IntroP, IntroSection } from "./ui";

export default function NumberTheoryIntro() {
  return (
    <IntroSection>
      <IntroH2>Number theory symbols in LaTeX</IntroH2>
      <IntroP>
        Divisibility is the symbol people search for most: <Cmd>a \mid b</Cmd> means a divides b,
        and <Cmd>\nmid</Cmd> (from amssymb) negates it. Use <Cmd>\mid</Cmd> rather than a plain
        bar so LaTeX treats it as a relation with the right spacing. Congruences use{" "}
        <Cmd>\equiv</Cmd> together with <Cmd>\pmod{"{n}"}</Cmd>, which adds the parentheses and
        spacing for you: <Cmd>a \equiv b \pmod{"{n}"}</Cmd>. Inline remainders use{" "}
        <Cmd>\bmod</Cmd>, as in <Cmd>a \bmod n</Cmd>.
      </IntroP>
      <IntroP>
        The greatest common divisor has its own operator, <Cmd>\gcd(a, b)</Cmd>; the least
        common multiple does not, so write <Cmd>\operatorname{"{lcm}"}(a, b)</Cmd> with amsmath.
        Euler&rsquo;s totient is <Cmd>\varphi(n)</Cmd> (or <Cmd>\phi(n)</Cmd>), the M&ouml;bius
        function is <Cmd>\mu(n)</Cmd>, the divisor function is <Cmd>\sigma(n)</Cmd>, and the
        prime-counting function is <Cmd>\pi(x)</Cmd>. Floor and ceiling are{" "}
        <Cmd>\lfloor x \rfloor</Cmd> and <Cmd>\lceil x \rceil</Cmd>, and the Legendre symbol is a
        fraction in parentheses: <Cmd>\left(\frac{"{a}{p}"}\right)</Cmd>. Sums over divisors
        read naturally as <Cmd>\sum_{"{d \\mid n}"} f(d)</Cmd>.
      </IntroP>
      <IntroP>
        The number sets <Cmd>\mathbb{"{N}"}</Cmd>, <Cmd>\mathbb{"{Z}"}</Cmd>,{" "}
        <Cmd>\mathbb{"{Q}"}</Cmd> and <Cmd>\mathbb{"{Z}"}/n\mathbb{"{Z}"}</Cmd> need{" "}
        <Cmd>\usepackage{"{amssymb}"}</Cmd> (or amsfonts). Read more about blackboard bold in our
        guide to the{" "}
        <IntroLink href="https://www.useoctree.com/blog/real-numbers-symbol-blackboard-bold" external>
          real numbers symbol
        </IntroLink>{" "}
        and the overview of{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          mathematical expressions in LaTeX
        </IntroLink>
        .
      </IntroP>
    </IntroSection>
  );
}
