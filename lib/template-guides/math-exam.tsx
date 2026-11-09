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
    question: "How do I make a math exam in LaTeX?",
    answer:
      "Start from this template: it has a header with the course and term, name and student ID lines, an instructions list, a points table and numbered problems with blank space for working. Edit the header, write each problem as a \\textbf{Problem N.} paragraph with its points, and set the answer space with \\vspace.",
  },
  {
    question: "Does the points table add up automatically?",
    answer:
      "No. The table is a plain tabular, so when you add, remove or re-weight a problem you must update the Problem, Points and Total rows and the instructions line by hand. If you want automatic totals, the exam document class (part of TeX Live) provides \\question[points] and, after \\addpoints in the preamble, a \\gradetable that sums points for you.",
  },
  {
    question: "How do I give students more room to write?",
    answer:
      "Increase the \\vspace after each problem, for example \\vspace{8cm}, or start a problem on a fresh page with \\newpage. Problems 1 to 3 use 4 cm and problem 4 uses 6 cm in the sample.",
  },
  {
    question: "Can I print this exam from Overleaf?",
    answer:
      "Yes. The template uses the article class with geometry, amsmath, amssymb, amsthm and fancyhdr, so it compiles with pdfLaTeX in Overleaf, Octree or a local TeX install. Download the PDF and print at 100% scale on letter paper; add a4paper to the geometry options for A4.",
  },
];

export default function MathExamGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A math exam template in LaTeX</GuideH2>
      <GuideP>
        This math exam LaTeX template produces a printable, formal mathematics test with
        everything a cover page needs: a header with the course, exam name and term on
        every page, lines for the student&apos;s name and ID, a short list of
        instructions, and a points table with an empty score column for grading. The
        sample is a five-problem, 100-point final for an introductory course, covering
        a quadratic equation, a quotient-rule derivative, a substitution integral, a
        short proof about even integers and a trigonometric limit.
      </GuideP>
      <GuideP>
        Each problem is a bold &quot;Problem N.&quot; label with its points in brackets,
        the question, and a fixed block of vertical space for working, so students write
        their answers directly on the paper. The source uses the standard{" "}
        <GuideCode>article</GuideCode> class at 12 pt with one-inch margins,{" "}
        <GuideCode>fancyhdr</GuideCode> for the header and page number, and{" "}
        <GuideCode>amsmath</GuideCode>/<GuideCode>amssymb</GuideCode> for the
        mathematics, so it works as an exam template for Overleaf, Octree or any local
        TeX install. Because it uses no special exam class, every element is plain LaTeX
        that is easy to move around: change the header, rewrite the problems and adjust
        the answer space, and you have a quiz, midterm or final ready to print.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Running header with course, exam name and term; page number in the footer</li>
        <li>Name and student ID lines</li>
        <li>Instructions list (problems, points, time, allowed materials)</li>
        <li>Points table with Problem, Points and Score columns</li>
        <li>Five sample problems with blank answer space</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>exam.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>
          Edit <GuideCode>\lhead</GuideCode>, <GuideCode>\chead</GuideCode> and{" "}
          <GuideCode>\rhead</GuideCode>, the centred title, and the instructions.
        </li>
        <li>
          Rewrite the problems, then update the points table so the rows and total
          match.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Add a problem.</strong> Copy one problem block, change its number and
        points, and add a matching row before <GuideCode>\textbf{"{Total}"}</GuideCode>{" "}
        in the table:
      </GuideP>
      <GuidePre>{`\\noindent
\\textbf{Problem 6.} (10 points) Find all real solutions of
\\[
|2x - 3| = 5
\\]

\\vspace{4cm}`}</GuidePre>
      <GuideP>
        <strong>Control page breaks.</strong> The sample forces problem 4 onto a new page
        with <GuideCode>\newpage</GuideCode>. Put one before any problem that would
        otherwise be split from its answer space.
      </GuideP>
      <GuideP>
        <strong>Switch to the exam class for automatic totals.</strong> If you write many
        exams, the <GuideCode>exam</GuideCode> class tracks points for you and builds
        the grading table:
      </GuideP>
      <GuidePre>{`\\documentclass[12pt]{exam}
\\usepackage{amsmath,amssymb}
\\addpoints
\\begin{document}
\\begin{center}
\\gradetable[h][questions]
\\end{center}
\\begin{questions}
\\question[20] Solve $3x^2 - 7x + 2 = 0$.
\\vspace{4cm}
\\question[20] Find the derivative of $f(x) = \\frac{\\sin x}{x^2+1}$.
\\vspace{4cm}
\\end{questions}
\\end{document}`}</GuidePre>

      <GuideP>
        Related templates: <GuideLink href="/templates/quiz-template">quiz</GuideLink>,{" "}
        <GuideLink href="/templates/math-problem-set">math problem set</GuideLink> and{" "}
        <GuideLink href="/templates/grading-rubric">grading rubric</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Math exam template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
