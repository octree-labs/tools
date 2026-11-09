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
    question: "Does this dissertation template meet my university's formatting rules?",
    answer:
      "It follows common conventions (12pt, 1 inch margins, double spacing, roman-numbered front matter, a formal title page) but every graduate school publishes its own requirements for margins, spacing, title page wording and page numbering. Check them before submission; many universities also offer an official LaTeX class, which takes precedence.",
  },
  {
    question: "Why are the Acknowledgments and Abstract not in the table of contents?",
    answer:
      "They are unnumbered \\chapter* headings, which LaTeX leaves out of the contents. Add \\addcontentsline{toc}{chapter}{Abstract} straight after \\chapter*{Abstract} (and the same for Acknowledgments) if your guidelines want them listed.",
  },
  {
    question: "What is the difference between a dissertation and a thesis template?",
    answer:
      "Mostly the name, which varies by country and degree. This template is set up for a PhD dissertation with the book class and front matter, main matter and back matter. The thesis template on this site covers the same ground; pick whichever is closer to your department's required structure.",
  },
  {
    question: "Does this dissertation template work in Overleaf?",
    answer:
      "Yes. It uses the book class with geometry, the AMS packages, graphicx, hyperref, setspace and tocbibind, all part of TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX. Compile twice for the table of contents.",
  },
];

export default function DissertationGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A PhD dissertation template in LaTeX</GuideH2>
      <GuideP>
        This dissertation template in LaTeX sets up the complete skeleton of a PhD
        dissertation: a formal title page, front matter, six core chapters and a
        bibliography. It uses the <GuideCode>book</GuideCode> class at 12 pt with
        the <GuideCode>oneside</GuideCode> option (no blank left-hand pages), 1 inch
        margins and double spacing from <GuideCode>setspace</GuideCode>, the
        settings most graduate schools ask for.
      </GuideP>
      <GuideP>
        The title page reads &quot;A dissertation submitted in partial fulfillment of
        the requirements for the degree of Doctor of Philosophy&quot; with your name,
        field, university and date, so you only replace the details. The book
        class&apos;s <GuideCode>\frontmatter</GuideCode>,{" "}
        <GuideCode>\mainmatter</GuideCode> and <GuideCode>\backmatter</GuideCode>{" "}
        commands handle numbering: Acknowledgments, Abstract and the table of
        contents get roman page numbers, and arabic numbering restarts at Chapter 1.
        The main matter holds Introduction, Literature Review, Methodology, Results,
        Discussion and Conclusion, each with a first section to replace. The preamble
        loads <GuideCode>amsmath</GuideCode>, <GuideCode>amssymb</GuideCode> and{" "}
        <GuideCode>amsthm</GuideCode> for mathematics, <GuideCode>graphicx</GuideCode>{" "}
        for figures, <GuideCode>hyperref</GuideCode> with hidden link boxes for a
        clickable contents page, and <GuideCode>tocbibind</GuideCode>, which adds the
        bibliography to the table of contents. References are a short{" "}
        <GuideCode>thebibliography</GuideCode> list that you can replace with BibTeX
        or biblatex. For the proposal that comes before the dissertation, see the{" "}
        <GuideLink href="/templates/research-proposal">research proposal template</GuideLink>
        .
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[12pt,oneside]{book}"}</GuideCode>, 1 inch
          margins, double spacing
        </li>
        <li>Formal PhD title page</li>
        <li>Acknowledgments, Abstract and table of contents in roman-numbered front matter</li>
        <li>Six chapters from Introduction to Conclusion</li>
        <li>
          <GuideCode>amsthm</GuideCode>, <GuideCode>hyperref</GuideCode> and{" "}
          <GuideCode>tocbibind</GuideCode> preloaded
        </li>
        <li>A bibliography in the back matter</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>dissertation.tex</GuideCode>
          .
        </li>
        <li>Compile with pdfLaTeX, twice, so the contents and links are current.</li>
        <li>
          Edit the title page directly; it is typed out in the{" "}
          <GuideCode>titlepage</GuideCode> environment rather than taken from{" "}
          <GuideCode>\title</GuideCode>, so change both if you use the metadata
          elsewhere.
        </li>
        <li>
          Move each chapter into its own file and pull it in with{" "}
          <GuideCode>{"\\include{chapter1}"}</GuideCode> once the document grows.
        </li>
        <li>Replace the sample bibliography entry with your references.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Add lists of figures and tables.</strong> Put them after the table of
        contents in the front matter; tocbibind lists them in the contents
        automatically:
      </GuideP>
      <GuidePre>{`\\tableofcontents
\\listoffigures
\\listoftables

\\mainmatter`}</GuidePre>
      <GuideP>
        <strong>Define theorem environments.</strong> amsthm is loaded but no
        environments are defined. Number them by chapter in the preamble:
      </GuideP>
      <GuidePre>{`\\newtheorem{theorem}{Theorem}[chapter]
\\newtheorem{lemma}[theorem]{Lemma}
\\theoremstyle{definition}
\\newtheorem{definition}[theorem]{Definition}

% in a chapter
\\begin{theorem}\\label{thm:main}
Every bounded monotone sequence converges.
\\end{theorem}`}</GuidePre>
      <GuideP>
        <strong>Switch to a .bib file.</strong> Replace the{" "}
        <GuideCode>thebibliography</GuideCode> environment in the back matter with
        BibTeX; tocbibind still adds the Bibliography heading to the contents:
      </GuideP>
      <GuidePre>{`\\backmatter
\\bibliographystyle{plain}
\\bibliography{references}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/thesis">thesis</GuideLink>,{" "}
        <GuideLink href="/templates/book-chapter">book chapter</GuideLink> and{" "}
        <GuideLink href="/templates/literature-review">literature review</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Dissertation template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
