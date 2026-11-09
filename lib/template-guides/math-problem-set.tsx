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
    question: "How do I write up a problem set in LaTeX?",
    answer:
      "Put your name, the course and the due date in the title block, keep each problem as an \\item of the numbered list, and write your solution directly under the problem statement, for example after a \\par\\textbf{Solution.} line. Use \\[ ... \\] or align* for multi-line derivations and the proof environment from amsthm for proofs.",
  },
  {
    question: "How many points is the sample problem set worth?",
    answer:
      "The six main problems are worth 10, 15, 15, 20, 20 and 20 points, which is 100 in total, and the optional bonus problem adds 10 more. The point values are typed in bold at the start of each item, so update them by hand when you change problems.",
  },
  {
    question: "How do I label the problems 'Problem 1', 'Problem 2'?",
    answer:
      "The list uses enumitem, so change the opening line to \\begin{enumerate}[label=\\textbf{Problem \\arabic*.}, leftmargin=*]. The sub-parts already use label=(\\alph*) and will keep their (a), (b) labels.",
  },
  {
    question: "Does this problem set template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, amsmath, amssymb, amsthm and enumitem, all part of TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or on a local install.",
  },
];

export default function MathProblemSetGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A math problem set template in LaTeX</GuideH2>
      <GuideP>
        This math problem set LaTeX template is a weekly assignment sheet that
        instructors can hand out and students can use to typeset their solutions. The
        title block reads &quot;Problem Set X&quot; with the course name and due date,
        followed by an Instructions list (show your work, write your own solutions even
        when collaborating, hand in at the start of class) and a numbered list of
        problems with point values in bold.
      </GuideP>
      <GuideP>
        The sample set is a realistic mix for a first- or second-year course worth 100
        points: classifying the critical points of a cubic, an induction proof of the
        sum <GuideCode>1 + 2 + ... + n</GuideCode>, inverting a 2x2 matrix, a series
        convergence test, a two-part question on continuity and uniform continuity of{" "}
        <GuideCode>x²</GuideCode>, and a definite integral, plus an optional 10-point
        bonus problem. Problems are an <GuideCode>enumerate</GuideCode> list styled with{" "}
        <GuideCode>enumitem</GuideCode>, so numbering is automatic and sub-parts are
        labelled (a), (b). The document is the standard <GuideCode>article</GuideCode>{" "}
        class at 12 pt with one-inch margins and the AMS packages for mathematics,
        which makes it a homework and problem set template for Overleaf, Octree or any
        local TeX install. Students can type a solution
        under each problem; instructors can swap in new problems every week and keep the
        same layout for the whole term.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title block with problem set number, course and due date</li>
        <li>Instructions section</li>
        <li>Six numbered problems with bold point values, one with parts (a) and (b)</li>
        <li>Optional bonus problem</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>pset.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>
          Edit <GuideCode>\title</GuideCode> and <GuideCode>\author</GuideCode>; the
          author line holds the course and the due date, separated by{" "}
          <GuideCode>\\</GuideCode>.
        </li>
        <li>Replace each <GuideCode>\item</GuideCode> with your own problem and points.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Write solutions under each problem.</strong> Students can add their
        name to the title and a solution after each item:
      </GuideP>
      <GuidePre>{`\\author{Your Name\\\\Math Course\\\\Due: Date}

\\item \\textbf{(15 points)}
Prove that for all $n \\geq 1$: $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$.

\\begin{proof}
For $n = 1$ both sides equal $1$. If the formula holds for $n$, then
$1 + \\cdots + n + (n+1) = \\frac{n(n+1)}{2} + (n+1) = \\frac{(n+1)(n+2)}{2}$.
\\end{proof}`}</GuidePre>
      <GuideP>
        <strong>Label problems by name.</strong> Change the list options so each item
        reads &quot;Problem 1.&quot; instead of &quot;1.&quot;:
      </GuideP>
      <GuidePre>{`\\begin{enumerate}[label=\\textbf{Problem \\arabic*.}, leftmargin=*]`}</GuidePre>
      <GuideP>
        <strong>Start problems on new pages.</strong> Graders often prefer each solution
        on its own page; put <GuideCode>\newpage</GuideCode> before each{" "}
        <GuideCode>\item</GuideCode> after the first.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/homework">homework</GuideLink>,{" "}
        <GuideLink href="/templates/math-exercises">math exercises</GuideLink> and{" "}
        <GuideLink href="/templates/math-exam">math exam</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Math problem set FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
