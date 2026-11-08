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

const quickRef: QuickRefRow[] = [
  { latex: "a \\bmod n", use: "Modulo as a binary operation" },
  { latex: "a \\equiv b \\pmod{n}", use: "Congruence with (mod n)" },
  { latex: "a \\equiv b \\mod{n}", use: "Congruence without parentheses", pkg: "amsmath" },
  { latex: "\\lvert z \\rvert", use: "Modulus / absolute value", pkg: "amsmath" },
  { latex: "a \\mid b", use: "a divides b" },
  { latex: "a \\nmid b", use: "a does not divide b", pkg: "amssymb" },
  { latex: "\\gcd(a, b)", use: "Greatest common divisor" },
  { latex: "\\operatorname{lcm}(a, b)", use: "Least common multiple", pkg: "amsmath" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write mod (modulo) in LaTeX?",
    answer:
      "Use \\bmod for the binary operation, as in a \\bmod n, and \\pmod{n} after a congruence: a \\equiv b \\pmod{n} adds the parentheses and spacing for you. amsmath also provides \\mod{n} (no parentheses) and \\pod{n} (parentheses without the word mod).",
  },
  {
    question: "How do I write the modulus (absolute value) in LaTeX?",
    answer:
      "Write \\lvert z \\rvert with amsmath, or \\left| z \\right| when the bars should grow with tall content. For frequent use, mathtools lets you declare \\DeclarePairedDelimiter{\\abs}{\\lvert}{\\rvert} and then write \\abs{z}.",
  },
  {
    question: "How do I write \u201cdivides\u201d in LaTeX?",
    answer:
      "Use \\mid, as in a \\mid b, which LaTeX spaces as a relation; a plain | is too tight. The negation \\nmid (a does not divide b) needs \\usepackage{amssymb}.",
  },
];

export default function NumberTheoryIntro() {
  return (
    <IntroSection>
      <IntroH2>Number theory symbols in LaTeX</IntroH2>
      <IntroP>
        Modulus and mod in LaTeX come in a few forms: <Cmd>\bmod</Cmd> for a remainder,{" "}
        <Cmd>\pmod{"{n}"}</Cmd> after a congruence, and <Cmd>\lvert z \rvert</Cmd> for the
        modulus (absolute value) of a number. The table lists the eight commands people use most,
        with the package each one needs; the full list of number theory symbols follows below.
      </IntroP>
      <QuickRefTable rows={quickRef} />
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

      <IntroH3>Frequently asked questions</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
