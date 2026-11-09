import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideUl,
  type GuideFaqItem,
} from "./ui";

const faq: GuideFaqItem[] = [
  {
    question: "Does this homework template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, amsmath, amssymb, amsthm, fancyhdr and enumitem, all part of TeX Live, so it compiles unchanged in Overleaf, Octree or a local install with pdfLaTeX.",
  },
  {
    question: "How do I write a proof with a QED box?",
    answer:
      "amsthm is loaded, so wrap the argument in \\begin{proof} ... \\end{proof}. LaTeX prints an italic Proof. label and a square at the end. Use \\qedhere inside a final displayed equation to put the square on that line instead of below it.",
  },
  {
    question: "How do I put my name and the assignment number in the header?",
    answer:
      "The header is set by three fancyhdr commands in the preamble: \\lhead{Course Number}, \\chead{Homework X} and \\rhead{Due Date}. Replace the text in each, or put your name in one of them, for example \\rhead{Jane Doe}.",
  },
  {
    question: "What is the difference between the homework and assignment templates?",
    answer:
      "The assignment template is a problem sheet for the person setting the work. This homework template is laid out for the student answering it: a header on every page, your name and ID in the title block, and worked Question and Solution pairs, with amsthm and amssymb loaded for proofs and symbols.",
  },
];

export default function HomeworkGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A homework template for LaTeX and Overleaf</GuideH2>
      <GuideP>
        This homework template for LaTeX and Overleaf is set up for students who
        type up problem sets, especially in maths, physics, computer science and
        economics. It uses the standard <GuideCode>article</GuideCode> class at 12 pt
        with 1 inch margins and a running header from{" "}
        <GuideCode>fancyhdr</GuideCode> that shows the course number on the left,
        the homework number in the centre and the due date on the right, with the
        page number in the footer, so loose pages are always identifiable.
      </GuideP>
      <GuideP>
        The title block holds Homework Assignment X, your name and student ID, and the
        date. Each problem is an unnumbered <GuideCode>\section*</GuideCode> with a
        bold Question and a bold Solution, and the three samples show the kinds of
        answers problem sets need: solving a quadratic equation with the quadratic
        formula, the opening of a proof that the square root of 2 is irrational, and
        a definite integral evaluated step by step. The preamble loads{" "}
        <GuideCode>amsmath</GuideCode> and <GuideCode>amssymb</GuideCode> for
        equations and symbols, <GuideCode>amsthm</GuideCode> for the{" "}
        <GuideCode>proof</GuideCode> environment, and <GuideCode>enumitem</GuideCode>{" "}
        for lettered sub-parts, so most of what a weekly problem set asks for is
        already available without touching the preamble. If
        you are the instructor writing the problems, the{" "}
        <GuideLink href="/templates/assignment">assignment template</GuideLink> is
        the simpler starting point.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>12 pt article with 1 inch margins</li>
        <li>Header with course, homework number and due date; page number footer</li>
        <li>Title block with name and student ID</li>
        <li>Three Question / Solution examples (algebra, proof, integral)</li>
        <li>
          <GuideCode>amsthm</GuideCode>, <GuideCode>amssymb</GuideCode> and{" "}
          <GuideCode>enumitem</GuideCode> preloaded
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>homework.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX.</li>
        <li>
          Edit the header (<GuideCode>\lhead</GuideCode>, <GuideCode>\chead</GuideCode>,{" "}
          <GuideCode>\rhead</GuideCode>) and the title block.
        </li>
        <li>
          Copy a <GuideCode>{"\\section*{Problem N}"}</GuideCode> block for each
          problem and write the question and your solution.
        </li>
        <li>Export the PDF and submit it.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Finish proofs with the proof environment.</strong> amsthm is loaded,
        so Problem 2 can be written out in full with a QED box:
      </GuideP>
      <GuidePre>{`\\begin{proof}
Suppose $\\sqrt{2} = p/q$ with $p, q$ integers and $\\gcd(p,q) = 1$.
Then $p^2 = 2q^2$, so $p^2$ is even and hence $p$ is even; write $p = 2k$.
Then $4k^2 = 2q^2$, so $q^2 = 2k^2$ and $q$ is even too,
contradicting $\\gcd(p,q) = 1$.
\\end{proof}`}</GuidePre>
      <GuideP>
        <strong>Set the course details once.</strong> Define macros in the preamble
        and use them in the header and title, so next week&apos;s homework only
        changes two lines:
      </GuideP>
      <GuidePre>{`\\newcommand{\\course}{MATH 201}
\\newcommand{\\hwnum}{3}
\\newcommand{\\due}{October 14}

\\lhead{\\course}
\\chead{Homework \\hwnum}
\\rhead{Due \\due}
\\title{Homework Assignment \\hwnum}`}</GuidePre>
      <GuideP>
        <strong>Answer multi-part problems.</strong> enumitem is loaded, so lettered
        parts are one option away:
      </GuideP>
      <GuidePre>{`\\section*{Problem 4}
\\begin{enumerate}[label=(\\alph*)]
  \\item Show that $f(x) = x^3$ is injective.
  \\item Is $f$ surjective on $\\mathbb{R}$? Justify your answer.
\\end{enumerate}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/assignment">assignment</GuideLink>,{" "}
        <GuideLink href="/templates/math-problem-set">math problem set</GuideLink> and{" "}
        <GuideLink href="/templates/lab-report">lab report</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Homework template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
