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
    question: "How do I take math notes in LaTeX?",
    answer:
      "Use a template with the theorem environments already defined, like this one, so you only type \\begin{theorem}, \\begin{definition} or \\begin{proof} and the numbering and formatting are automatic. Define shortcuts for symbols you use often, such as \\newcommand{\\R}{\\mathbb{R}}, to keep up during a lecture.",
  },
  {
    question: "Which theorem environments does the template define?",
    answer:
      "Eight: theorem, lemma, proposition and corollary in italic plain style; definition and example in upright definition style; and remark and note in the lighter remark style. All of them share one counter numbered within the section, so you get Definition 2.1, Theorem 2.2, Example 2.3. The proof environment comes from amsthm.",
  },
  {
    question: "How do I refer to a theorem by number?",
    answer:
      "Put \\label{thm:closed} inside the theorem and write Theorem~\\ref{thm:closed} in the text. LaTeX fills in the number; compile twice so the reference resolves.",
  },
  {
    question: "Can I use these math notes in Overleaf?",
    answer:
      "Yes. The template uses the article class with geometry, amsmath, amssymb, amsthm, fancyhdr and xcolor, all part of TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or on a local install.",
  },
];

export default function MathNotesGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A math notes template in LaTeX</GuideH2>
      <GuideP>
        This math notes LaTeX template is set up for writing up a mathematics lecture
        or your own study notes with properly numbered results. It defines the full set
        of statement types used in maths courses (theorem, lemma, proposition,
        corollary, definition, example, remark and note), all sharing a single counter
        numbered by section, so references like &quot;Lemma 3.4&quot; are unambiguous
        across a whole set of notes. Theorems are italic, definitions and examples are
        upright, and remarks use the lighter remark style, following the usual{" "}
        <GuideCode>amsthm</GuideCode> conventions.
      </GuideP>
      <GuideP>
        The sample lecture is a short piece of point-set topology: a definition of
        continuity via open sets, the theorem that a continuous map from a compact space
        to a Hausdorff space is closed, a proof skeleton, an example, a remark, a lemma
        on compact images and two exercises. The document is the standard{" "}
        <GuideCode>article</GuideCode> class at 11 pt with one-inch margins.{" "}
        <GuideCode>fancyhdr</GuideCode> prints the course name, &quot;Lecture
        Notes&quot; and the date across the top of each page with the page number
        below, and <GuideCode>xcolor</GuideCode> is loaded for highlighting. It works as
        a math notes template for Overleaf, in Octree or with any local TeX
        distribution, and scales from a single lecture to a full course by adding
        sections.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Eight theorem-like environments on one shared, section-based counter</li>
        <li>Three theorem styles: plain, definition and remark</li>
        <li>Running header for course, title and date, page number in the footer</li>
        <li>Sample topology lecture with definition, theorem, proof, example and exercises</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>notes.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX. Compile twice if you use <GuideCode>\ref</GuideCode>.</li>
        <li>
          Set the header with <GuideCode>\lhead</GuideCode> (course) and{" "}
          <GuideCode>\rhead</GuideCode> (date), and the lecture title in{" "}
          <GuideCode>\title</GuideCode>.
        </li>
        <li>
          Write results with the environments, for example{" "}
          <GuideCode>{"\\begin{proposition} ... \\end{proposition}"}</GuideCode>.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Add notation shortcuts.</strong> Put these in the preamble to type{" "}
        <GuideCode>\R</GuideCode> instead of <GuideCode>{"\\mathbb{R}"}</GuideCode>:
      </GuideP>
      <GuidePre>{`\\newcommand{\\R}{\\mathbb{R}}
\\newcommand{\\N}{\\mathbb{N}}
\\DeclareMathOperator{\\interior}{int}`}</GuidePre>
      <GuideP>
        <strong>Shade theorems.</strong> Load <GuideCode>tcolorbox</GuideCode> after the{" "}
        <GuideCode>\newtheorem</GuideCode> lines and wrap an environment in a coloured
        box without changing how you write it:
      </GuideP>
      <GuidePre>{`\\usepackage{tcolorbox}
\\tcolorboxenvironment{theorem}{colback=blue!5,colframe=blue!50!black}`}</GuidePre>
      <GuideP>
        <strong>Highlight a key idea.</strong> <GuideCode>xcolor</GuideCode> is already
        loaded, so <GuideCode>{"\\textcolor{red}{...}"}</GuideCode> marks a warning or a
        common mistake inline.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/lecture-notes">lecture notes</GuideLink>,{" "}
        <GuideLink href="/templates/mathematical-document">mathematical document</GuideLink>{" "}
        and <GuideLink href="/templates/math-cheat-sheet">math cheat sheet</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Math notes template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
