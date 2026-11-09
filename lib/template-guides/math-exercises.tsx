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
    question: "How do I number exercises in LaTeX?",
    answer:
      "This template defines an exercise environment with \\newtheorem{exercise}{Exercise}, so every \\begin{exercise} ... \\end{exercise} is numbered Exercise 1, 2, 3 automatically across the whole document. To restart numbering in each section (Exercise 2.1, 2.2), change the line to \\newtheorem{exercise}{Exercise}[section].",
  },
  {
    question: "How do I add solutions that I can hide?",
    answer:
      "Load the comment package and define solution as a comment environment: \\includecomment{solution} prints every solution, \\excludecomment{solution} removes them. Write \\begin{solution} ... \\end{solution} after each exercise and switch one line to produce the student sheet or the answer key from the same file.",
  },
  {
    question: "Why is the exercise text in italics?",
    answer:
      "\\newtheorem uses the plain theorem style by default, which sets the body in italics. Add \\theoremstyle{definition} on the line before \\newtheorem{exercise}{Exercise} to typeset exercises upright.",
  },
  {
    question: "Does this math exercises template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, amsmath, amssymb, amsthm and enumitem, all included in TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or a local install.",
  },
];

export default function MathExercisesGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A math exercises template in LaTeX</GuideH2>
      <GuideP>
        This math exercises LaTeX template is a clean sheet of numbered practice
        problems grouped by topic. It is meant for teachers building practice sets,
        tutors preparing revision material and students collecting problems to work
        through before an exam. The sample contains six exercises in three sections:
        solving a quadratic and simplifying a rational expression in Algebra; a
        product-and-chain-rule derivative and a definite integral of{" "}
        <GuideCode>sin²x</GuideCode> in Calculus; and eigenvalues of a 2x2 matrix plus a
        linear independence check in Linear Algebra.
      </GuideP>
      <GuideP>
        Each problem sits in an <GuideCode>exercise</GuideCode> environment defined
        with <GuideCode>amsthm</GuideCode>&apos;s <GuideCode>\newtheorem</GuideCode>, so
        numbering is automatic and continues across sections: delete or reorder
        exercises and the numbers update on the next compile. A one-centimetre gap after
        each exercise leaves a little room for short answers. The document is the
        standard <GuideCode>article</GuideCode> class at 12 pt with one-inch margins,
        with <GuideCode>amsmath</GuideCode> and <GuideCode>amssymb</GuideCode> for
        matrices, vectors and integrals and <GuideCode>enumitem</GuideCode> loaded for
        multi-part questions. Nothing is specific to one editor, so the same file works
        as a math exercises template for Overleaf, in Octree, or on a local TeX Live
        install, and it is a good base for an answer key once you add solutions.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title block with course name</li>
        <li>An automatically numbered <GuideCode>exercise</GuideCode> environment</li>
        <li>Six sample exercises across Algebra, Calculus and Linear Algebra</li>
        <li>Matrix and column-vector examples with <GuideCode>pmatrix</GuideCode></li>
        <li><GuideCode>enumitem</GuideCode> loaded for parts (a), (b), (c)</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>exercises.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>
          Change <GuideCode>\title</GuideCode> and <GuideCode>\author</GuideCode> (the
          course name), then replace the sections and exercises with your own.
        </li>
        <li>
          Adjust the <GuideCode>\vspace{"{1cm}"}</GuideCode> after each exercise if
          students write on the sheet.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Upright text, numbered by section.</strong> Replace the{" "}
        <GuideCode>\newtheorem</GuideCode> line with:
      </GuideP>
      <GuidePre>{`\\theoremstyle{definition}
\\newtheorem{exercise}{Exercise}[section]`}</GuidePre>
      <GuideP>
        <strong>One file for the sheet and the answer key.</strong> Add the{" "}
        <GuideCode>comment</GuideCode> package and a <GuideCode>solution</GuideCode>{" "}
        environment you can switch off:
      </GuideP>
      <GuidePre>{`\\usepackage{comment}
\\includecomment{solution}   % or \\excludecomment{solution}

\\begin{exercise}
Solve for $x$: $2x^2 - 5x + 3 = 0$
\\end{exercise}
\\begin{solution}
\\textit{Solution.} $(2x-3)(x-1) = 0$, so $x = 1$ or $x = \\tfrac{3}{2}$.
\\end{solution}`}</GuidePre>
      <GuideP>
        <strong>Multi-part exercises.</strong> <GuideCode>enumitem</GuideCode> is already
        loaded, so lettered parts need only{" "}
        <GuideCode>{"\\begin{enumerate}[label=(\\alph*)]"}</GuideCode> inside the
        exercise.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/math-problem-set">math problem set</GuideLink>,{" "}
        <GuideLink href="/templates/worksheet">worksheet</GuideLink> and{" "}
        <GuideLink href="/templates/homework">homework</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Math exercises template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
