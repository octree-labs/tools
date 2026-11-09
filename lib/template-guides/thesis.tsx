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
    question: "How do I structure a thesis in LaTeX?",
    answer:
      "Use the book or report class, put the title page, abstract and table of contents in \\frontmatter, the numbered chapters in \\mainmatter and the bibliography and appendices in \\backmatter, as this template does. For a long thesis, keep each chapter in its own file and include it with \\include{chapters/introduction}.",
  },
  {
    question: "Does this thesis template follow my university's rules?",
    answer:
      "It gives a common default (12 pt, one-inch margins, double spacing, one-sided), but universities set their own requirements for margins, spacing, title page wording and front matter order. Check your graduate school's formatting guide and adjust the geometry and setspace lines and the title page to match.",
  },
  {
    question: "How do I add a list of figures and appendices?",
    answer:
      "Add \\listoffigures and \\listoftables after \\tableofcontents. For appendices, put \\appendix after the last chapter and before \\backmatter, then write \\chapter{Additional Results}; the class numbers them Appendix A, B and so on.",
  },
  {
    question: "Can I write my thesis in Overleaf with this template?",
    answer:
      "Yes. It uses the book class with geometry, amsmath, amsthm, amssymb, graphicx and setspace, all part of TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or a local install. Compile twice so the table of contents is complete.",
  },
];

export default function ThesisGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A PhD and master&apos;s thesis template in LaTeX</GuideH2>
      <GuideP>
        This thesis LaTeX template is a lean skeleton for a PhD dissertation or a
        master&apos;s thesis. It uses the <GuideCode>book</GuideCode> class with the{" "}
        <GuideCode>oneside</GuideCode> option at 12 pt, one-inch margins and double
        spacing from <GuideCode>setspace</GuideCode>, a common baseline for theses that
        are submitted as PDFs. The front matter has a title page built from{" "}
        <GuideCode>\maketitle</GuideCode>, an unnumbered Abstract chapter and a table of
        contents, with roman page numbers handled by{" "}
        <GuideCode>\frontmatter</GuideCode>.
      </GuideP>
      <GuideP>
        The main matter contains the six chapters most theses use: Introduction (with
        Background and Research Questions sections), Literature Review, Methodology,
        Results, Discussion and Conclusion, each a one-line placeholder for you to
        expand. The back matter holds a <GuideCode>thebibliography</GuideCode> reference
        list. The preamble loads <GuideCode>amsmath</GuideCode>,{" "}
        <GuideCode>amsthm</GuideCode> and <GuideCode>amssymb</GuideCode> for
        mathematics and <GuideCode>graphicx</GuideCode> for figures, which covers most
        STEM and social science theses. The template is deliberately minimal: it does
        not yet include a list of figures, appendices, acknowledgements or a formal
        degree statement on the title page, and the steps below show how to add each
        one. Because every package ships with TeX Live, it works as a thesis template
        for Overleaf, in Octree or on a local install. Before you start writing, compare
        it with your university&apos;s formatting guide, since margins, spacing and
        title-page wording are usually prescribed.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>One-sided <GuideCode>book</GuideCode> class, 12 pt, double spaced</li>
        <li>Title page, abstract and table of contents in the front matter</li>
        <li>Six numbered chapters from Introduction to Conclusion</li>
        <li>Bibliography in the back matter</li>
        <li>AMS maths packages and <GuideCode>graphicx</GuideCode> loaded</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>thesis.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX, twice, so the table of contents fills in.</li>
        <li>
          Edit <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode> and{" "}
          <GuideCode>\date</GuideCode>, and write the abstract.
        </li>
        <li>
          Expand each <GuideCode>\chapter</GuideCode>; move chapters into separate files
          once they grow.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>A formal title page.</strong> Replace <GuideCode>\maketitle</GuideCode>{" "}
        with a <GuideCode>titlepage</GuideCode> that carries the degree statement your
        university requires:
      </GuideP>
      <GuidePre>{`\\begin{titlepage}
\\centering
\\vspace*{2cm}
{\\Huge\\bfseries Thesis Title\\par}
\\vspace{1.5cm}
{\\Large Your Name\\par}
\\vfill
A thesis submitted in partial fulfillment of the requirements\\\\
for the degree of Doctor of Philosophy\\\\[1em]
Department Name, University Name\\\\[1em]
Month Year
\\end{titlepage}`}</GuidePre>
      <GuideP>
        <strong>Lists, acknowledgements and appendices.</strong> Extend the front and
        back matter:
      </GuideP>
      <GuidePre>{`\\chapter*{Acknowledgements}
I thank ...
\\tableofcontents
\\listoffigures
\\listoftables

\\mainmatter
\\include{chapters/introduction}
...
\\appendix
\\chapter{Additional Results}
\\backmatter`}</GuidePre>
      <GuideP>
        <strong>Single-spaced front matter.</strong> Many guides want the table of
        contents single spaced; wrap it in{" "}
        <GuideCode>{"\\begin{singlespace} \\tableofcontents \\end{singlespace}"}</GuideCode>,
        which <GuideCode>setspace</GuideCode> provides.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/dissertation">dissertation</GuideLink>,{" "}
        <GuideLink href="/templates/research-proposal">research proposal</GuideLink> and{" "}
        <GuideLink href="/templates/literature-review">literature review</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Thesis template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
