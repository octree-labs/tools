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
    question: "How do I make a cheat sheet in LaTeX?",
    answer:
      "Use a landscape page with small margins and split it into columns with the multicol package, as this template does: \\documentclass[10pt,landscape]{article}, geometry with margin=0.5in, and \\begin{multicols}{3}. Then write short \\section* headings and formulas in \\[ ... \\] and align* blocks.",
  },
  {
    question: "How do I fit more on one page?",
    answer:
      "Increase the column count to four, switch the body to \\small or \\footnotesize right after \\begin{multicols}, and reduce the space around the \\section* headings with the titlesec package. Shrinking the margins below half an inch also helps, but check that your printer does not crop the edges.",
  },
  {
    question: "What topics does the math cheat sheet cover?",
    answer:
      "The sample covers algebra (quadratic formula, binomial theorem, logarithm laws), trigonometric identities, calculus (derivatives, product, quotient and chain rules, standard integrals, integration by parts), series (geometric, Taylor and common expansions), 2x2 linear algebra and basic probability including Bayes' theorem.",
  },
  {
    question: "Can I add colour to the headings?",
    answer:
      "Yes. The template already loads xcolor, so you can write \\section*{\\color{blue} Algebra} for a single heading, or define a colour once with \\definecolor and use it in every heading.",
  },
];

export default function MathCheatSheetGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A math cheat sheet template in LaTeX</GuideH2>
      <GuideP>
        This math cheat sheet LaTeX template packs the formulas you need for an exam or
        a course into a dense, readable reference sheet. The page is landscape, the
        margins are half an inch, and the content flows through three columns separated
        by thin vertical rules, which is the layout most students use for an allowed
        crib sheet or a formula reference pinned above the desk.
      </GuideP>
      <GuideP>
        The sample sheet is already filled with standard material: the quadratic formula,
        binomial theorem and logarithm laws; Pythagorean, angle-sum and double-angle
        trigonometric identities; derivatives, the product, quotient and chain rules,
        common integrals and integration by parts; geometric and Taylor series with the
        expansions of <GuideCode>e^x</GuideCode>, sine and cosine; 2x2 determinants and
        inverses; and conditional probability, Bayes&apos; theorem and expected value.
        Keep what you need and replace the rest with your own course&apos;s formulas.
        The source is the standard <GuideCode>article</GuideCode> class at 10 pt with{" "}
        <GuideCode>multicol</GuideCode> for the columns and{" "}
        <GuideCode>amsmath</GuideCode>/<GuideCode>amssymb</GuideCode> for the maths, so
        it compiles as a cheat sheet template for Overleaf, Octree or a local install.
        With every section filled, the sample runs slightly past one page; trim it or
        use the tips below to fit it on a single sheet.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Landscape page, 0.5 in margins, three columns with column rules</li>
        <li>Six topic sections: algebra, trigonometry, calculus, series, linear algebra, probability</li>
        <li>Aligned formula groups with <GuideCode>align*</GuideCode></li>
        <li><GuideCode>xcolor</GuideCode> loaded for coloured headings or highlights</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>cheatsheet.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>
          Change the title in the <GuideCode>center</GuideCode> block, then edit or add{" "}
          <GuideCode>\section*</GuideCode> blocks inside the{" "}
          <GuideCode>multicols</GuideCode> environment. Content flows from column to
          column automatically.
        </li>
        <li>Print in landscape orientation at 100% scale.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Four smaller columns.</strong> Change the column count and set a smaller
        font for everything inside it:
      </GuideP>
      <GuidePre>{`\\begin{multicols}{4}
\\footnotesize
\\section*{Algebra}
...
\\end{multicols}`}</GuidePre>
      <GuideP>
        <strong>Tighter headings.</strong> <GuideCode>\section*</GuideCode> leaves a lot
        of space above and below. Load <GuideCode>titlesec</GuideCode> in the preamble and
        shrink the heading size and spacing:
      </GuideP>
      <GuidePre>{`\\usepackage{titlesec}
\\titleformat*{\\section}{\\normalsize\\bfseries}
\\titlespacing*{\\section}{0pt}{1ex}{0.5ex}`}</GuidePre>
      <GuideP>
        <strong>Two-sided sheet.</strong> If you are allowed both sides, end the first
        page with <GuideCode>\end{"{multicols}"}</GuideCode>,{" "}
        <GuideCode>\newpage</GuideCode> and start a new{" "}
        <GuideCode>{"\\begin{multicols}{3}"}</GuideCode>; otherwise the columns simply
        continue onto page two.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/formula-sheet">formula sheet</GuideLink>,{" "}
        <GuideLink href="/templates/math-notes">math notes</GuideLink> and{" "}
        <GuideLink href="/templates/math-exam">math exam</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Math cheat sheet FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
