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
    question: "How do I write lecture notes in LaTeX?",
    answer:
      "Start from a template like this one: set the course code in the header, put the lecture number and topic in \\title, and write each part of the lecture as a \\section. Use the definition, theorem, lemma and example environments for numbered statements and \\begin{proof} for proofs. Keep one .tex file per lecture, or combine lectures into one file with a \\section or \\part per lecture.",
  },
  {
    question: "Why are the theorems not in italics?",
    answer:
      "The template sets \\theoremstyle{definition} before all four \\newtheorem lines, so theorems and lemmas are typeset upright like definitions. If you prefer the classic italic theorem style, add \\theoremstyle{plain} before the theorem and lemma lines and keep \\theoremstyle{definition} for definition and example.",
  },
  {
    question: "Can I use these lecture notes in Overleaf?",
    answer:
      "Yes. The template uses only the article class and standard packages (geometry, amsmath, amssymb, amsthm, fancyhdr, graphicx), so it compiles unchanged in a blank Overleaf project with pdfLaTeX, in Octree, or on any TeX Live or MiKTeX install.",
  },
  {
    question: "How are definitions and theorems numbered?",
    answer:
      "Definitions, theorems and examples are each numbered within the current section, so the first theorem in Section 3 is Theorem 3.1. Lemmas share the theorem counter, so a lemma after Theorem 3.1 becomes Lemma 3.2. Definitions and examples have their own counters, which means Definition 3.1 and Theorem 3.1 can both exist.",
  },
];

export default function LectureNotesGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A lecture notes template in LaTeX</GuideH2>
      <GuideP>
        This lecture notes LaTeX template gives instructors and students a clean
        structure for one lecture: a title with the lecture number and topic, a running
        header with the course code, and numbered definitions, theorems, lemmas and
        examples with proofs. It is suited to any subject with formal statements, such
        as mathematics, computer science, physics or economics, and works just as well
        for students typing up notes from class.
      </GuideP>
      <GuideP>
        The document is the standard <GuideCode>article</GuideCode> class at 11 pt with
        one-inch margins, so it compiles as an Overleaf lecture notes template, in
        Octree or on a local install without extra files. <GuideCode>fancyhdr</GuideCode>{" "}
        puts the course code on the left of every page, &quot;Lecture Notes&quot; in the
        centre and the date on the right, with the page number in the footer.{" "}
        <GuideCode>amsthm</GuideCode> provides the numbered statement environments and{" "}
        <GuideCode>amsmath</GuideCode>/<GuideCode>amssymb</GuideCode> handle equations.
        The sample lecture follows a teaching order that is easy to reuse: an Overview
        with learning objectives, an Introduction with a definition and example, Main
        Content with a theorem and proof, then Applications, a Summary of key takeaways
        and Further Reading. Replace the placeholders in square brackets and you have a
        consistent format for a whole term of lectures.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title block for lecture number, topic, instructor and date</li>
        <li>Running header with course code and date, page number in the footer</li>
        <li>
          <GuideCode>definition</GuideCode>, <GuideCode>theorem</GuideCode>,{" "}
          <GuideCode>lemma</GuideCode> and <GuideCode>example</GuideCode> environments
          numbered by section, plus <GuideCode>proof</GuideCode>
        </li>
        <li>Sections for overview, content, applications, summary and further reading</li>
        <li><GuideCode>graphicx</GuideCode> loaded for diagrams and board photos</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>lecture01.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX. No bibliography tool is needed.</li>
        <li>
          Set the course code in <GuideCode>\lhead</GuideCode>, then edit{" "}
          <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode> and{" "}
          <GuideCode>\date</GuideCode> for each lecture.
        </li>
        <li>
          Write statements with <GuideCode>{"\\begin{definition}"}</GuideCode>,{" "}
          <GuideCode>{"\\begin{theorem}"}</GuideCode> and{" "}
          <GuideCode>{"\\begin{proof}"}</GuideCode>; numbering is automatic.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Fill in the header.</strong> The three header slots are set in the
        preamble. <GuideCode>\rhead</GuideCode> prints <GuideCode>\today</GuideCode> by
        default, which changes every time you recompile; use the lecture date instead:
      </GuideP>
      <GuidePre>{`\\lhead{MATH 201}
\\chead{Lecture 4: Eigenvalues}
\\rhead{12 February}`}</GuidePre>
      <GuideP>
        <strong>Number everything in one sequence.</strong> Definitions and examples
        currently have their own counters. To get Definition 2.1, Theorem 2.2, Example
        2.3, give them the theorem counter and define the theorem first. Adding a{" "}
        <GuideCode>corollary</GuideCode> works the same way:
      </GuideP>
      <GuidePre>{`\\theoremstyle{definition}
\\newtheorem{theorem}{Theorem}[section]
\\newtheorem{definition}[theorem]{Definition}
\\newtheorem{lemma}[theorem]{Lemma}
\\newtheorem{corollary}[theorem]{Corollary}
\\newtheorem{example}[theorem]{Example}`}</GuidePre>
      <GuideP>
        <strong>Add a figure.</strong> <GuideCode>graphicx</GuideCode> is already loaded,
        so a diagram or a photo of the board only needs{" "}
        <GuideCode>{"\\includegraphics[width=0.6\\textwidth]{diagram}"}</GuideCode>{" "}
        inside a <GuideCode>figure</GuideCode> environment with a{" "}
        <GuideCode>\caption</GuideCode>.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/math-notes">math notes</GuideLink>,{" "}
        <GuideLink href="/templates/cornell-notes">Cornell notes</GuideLink> and{" "}
        <GuideLink href="/templates/syllabus">course syllabus</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Lecture notes template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
