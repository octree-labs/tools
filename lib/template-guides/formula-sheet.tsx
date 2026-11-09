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
    question: "How do I fit the formula sheet on one page?",
    answer:
      "As written, the sample runs onto a second page with the Statistics section. Narrow the margins to 0.5 inch in the geometry line and change \\begin{multicols}{2} to \\begin{multicols}{3}; with those two changes the whole sample fits on one letter page. Going down to \\documentclass[10pt]{article} buys more room if you add sections.",
  },
  {
    question: "Which topics does the formula sheet cover?",
    answer:
      "Calculus (derivatives of common functions, sum, product, quotient and chain rules, basic integrals and the fundamental theorem), trigonometry (Pythagorean identity, angle sum and double angle formulas), algebra (quadratic formula, exponent and logarithm rules), geometry (areas and volumes) and statistics (mean, sample variance and standard deviation).",
  },
  {
    question: "Can I use this as an exam cheat sheet?",
    answer:
      "Yes, if your exam allows one. Delete what you know by heart, add the formulas you keep forgetting, and use the one-page settings above. Check the exam rules for the allowed size, whether it must be handwritten, and whether both sides are permitted.",
  },
  {
    question: "Does this formula sheet template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, amsmath, amssymb and multicol, all part of TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX.",
  },
];

export default function FormulaSheetGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A formula sheet template in LaTeX</GuideH2>
      <GuideP>
        This formula sheet template in LaTeX is a compact two-column reference of the
        formulas students reach for most in calculus, trigonometry, algebra, geometry
        and introductory statistics. It uses the standard{" "}
        <GuideCode>article</GuideCode> class at 11 pt with 0.75 inch margins, the{" "}
        <GuideCode>multicol</GuideCode> package for newspaper-style columns that
        balance automatically, and <GuideCode>amsmath</GuideCode> for aligned
        equations. Paragraph indentation is switched off so labels and formulas
        line up flush left.
      </GuideP>
      <GuideP>
        Each topic is an unnumbered <GuideCode>\section*</GuideCode> with bold
        labels for its groups of formulas. Groups of related formulas sit in{" "}
        <GuideCode>align*</GuideCode> blocks aligned on the equals sign, for example
        the six derivatives, the differentiation rules and the six basic integrals;
        single results such as the fundamental theorem of calculus, the quadratic
        formula and the Pythagorean identity are displayed on their own. Geometry
        formulas carry text labels (Circle, Triangle, Sphere, Cone) inside the
        alignment, and statistics covers the mean, the sample variance with its{" "}
        <GuideCode>n - 1</GuideCode> denominator and the standard deviation. A
        centred header names the sheet and the course. Teachers can hand it out as an
        exam formula sheet; students can trim and extend it into a personal cheat
        sheet. As written it runs just over one page; the first tip below gets it
        onto a single sheet. For a denser, boxed layout, see the{" "}
        <GuideLink href="/templates/math-cheat-sheet">math cheat sheet template</GuideLink>
        .
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Two balanced columns with <GuideCode>multicol</GuideCode></li>
        <li>Calculus: derivatives, rules, integrals, fundamental theorem</li>
        <li>Trigonometry: Pythagorean, angle sum and double angle identities</li>
        <li>Algebra: quadratic formula, exponent and logarithm rules</li>
        <li>Geometry areas and volumes; statistics mean, variance and SD</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>formulas.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX.</li>
        <li>
          Change the header line <GuideCode>Course Name - Exam</GuideCode> to your
          course.
        </li>
        <li>
          Delete sections you do not need and add new ones by copying a{" "}
          <GuideCode>\section*</GuideCode> with its <GuideCode>align*</GuideCode>{" "}
          blocks.
        </li>
        <li>Check the page count before printing.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Fit it on one page.</strong> Narrow the margins and switch to three
        columns; the full sample then fits on a single letter page:
      </GuideP>
      <GuidePre>{`\\usepackage[margin=0.5in]{geometry}
...
\\begin{multicols}{3}`}</GuidePre>
      <GuideP>
        <strong>Add a topic.</strong> Copy the pattern of the existing sections: a
        bold label, then an <GuideCode>align*</GuideCode> block with{" "}
        <GuideCode>&amp;</GuideCode> before each equals sign:
      </GuideP>
      <GuidePre>{`\\section*{Probability}

\\textbf{Basic Rules:}
\\begin{align*}
P(A \\cup B) &= P(A) + P(B) - P(A \\cap B)\\\\
P(A \\mid B) &= \\frac{P(A \\cap B)}{P(B)}\\\\
P(A \\mid B) &= \\frac{P(B \\mid A)\\,P(A)}{P(B)}
\\end{align*}`}</GuidePre>
      <GuideP>
        <strong>Separate the columns and highlight key results.</strong> A rule
        between columns makes a dense sheet easier to scan, and amsmath&apos;s{" "}
        <GuideCode>\boxed</GuideCode> frames the formulas you must not miss:
      </GuideP>
      <GuidePre>{`\\setlength{\\columnseprule}{0.4pt}   % in the preamble

\\[
\\boxed{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}}
\\]`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/math-cheat-sheet">math cheat sheet</GuideLink>,{" "}
        <GuideLink href="/templates/math-exam">math exam</GuideLink> and{" "}
        <GuideLink href="/templates/lecture-notes">lecture notes</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Formula sheet template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
