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
    question: "Which document class does this research paper template use?",
    answer:
      "IEEEtran with the conference option, IEEE's own LaTeX class. It gives the two-column IEEE conference layout with Times-style fonts, the IEEE author block commands and IEEE-style section headings. The class is part of TeX Live, so no extra files are needed.",
  },
  {
    question: "How do I add a figure that fits the column?",
    answer:
      "The sample figure has only a caption. Add \\includegraphics[width=\\columnwidth]{results} before the \\caption inside the figure environment; graphicx is already loaded. Use figure* with width=\\textwidth for a figure that spans both columns.",
  },
  {
    question: "How do I cite references in this template?",
    answer:
      "Write \\cite{ref1} in the text; the cite package sorts and compresses numeric citations such as [1]-[3]. References are a thebibliography list at the end. To use a .bib file instead, replace that list with \\bibliographystyle{IEEEtran} and \\bibliography{refs} and run BibTeX.",
  },
  {
    question: "Can I use this research paper template in Overleaf?",
    answer:
      "Yes. IEEEtran, amsmath, amssymb, graphicx and cite all ship with TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or a local install. Before submitting to a specific venue, check its author instructions; some IEEE conferences provide their own template files.",
  },
];

export default function ResearchPaperGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A research paper template in LaTeX (IEEE style)</GuideH2>
      <GuideP>
        This research paper LaTeX template is a short, clean starting point for a
        scientific or engineering paper in the two-column IEEE conference format. It is
        built on <GuideCode>IEEEtran</GuideCode>, IEEE&apos;s own document class, loaded
        with the <GuideCode>conference</GuideCode> option, so the title block, column
        layout, fonts and heading styles match what IEEE conferences use. It is a good
        fit for a course paper, a workshop submission or a first draft you will later
        move into a venue&apos;s official kit.
      </GuideP>
      <GuideP>
        The sample paper contains the sections nearly every research paper needs: a
        title and an IEEE author block (name, department, university and email), an
        abstract, then Introduction, Related Work, Methodology, Results and Conclusion,
        and a numbered reference list. The Results section holds a placeholder{" "}
        <GuideCode>figure</GuideCode> with a caption where your plot goes. Besides the
        class, the preamble loads <GuideCode>amsmath</GuideCode> and{" "}
        <GuideCode>amssymb</GuideCode> for equations, <GuideCode>graphicx</GuideCode>{" "}
        for figures and <GuideCode>cite</GuideCode> for compressed numeric citations.
        Everything ships with TeX Live, so it works as a research paper template for
        Overleaf, in Octree or with a local install. The source is deliberately minimal;
        for a fuller IEEE example with multiple authors, equations, tables and keywords,
        see the IEEE conference paper template.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li><GuideCode>IEEEtran</GuideCode> two-column conference layout</li>
        <li>IEEE author block for name, affiliation and email</li>
        <li>Abstract and five standard sections</li>
        <li>Figure placeholder and a <GuideCode>thebibliography</GuideCode> reference list</li>
        <li><GuideCode>amsmath</GuideCode>, <GuideCode>amssymb</GuideCode>, <GuideCode>graphicx</GuideCode> and <GuideCode>cite</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX, twice once you cite references.</li>
        <li>
          Edit <GuideCode>\title</GuideCode> and the{" "}
          <GuideCode>\IEEEauthorblockN</GuideCode>/<GuideCode>\IEEEauthorblockA</GuideCode>{" "}
          pair in <GuideCode>\author</GuideCode>.
        </li>
        <li>Replace the bracketed placeholders in each section with your content.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Add co-authors.</strong> Repeat the author block and separate blocks with{" "}
        <GuideCode>\and</GuideCode>; IEEEtran places them side by side:
      </GuideP>
      <GuidePre>{`\\author{\\IEEEauthorblockN{First Author}
\\IEEEauthorblockA{Department\\\\University Name\\\\first@university.edu}
\\and
\\IEEEauthorblockN{Second Author}
\\IEEEauthorblockA{Department\\\\University Name\\\\second@university.edu}}`}</GuidePre>
      <GuideP>
        <strong>Put a real figure in Results.</strong> Size it to the column width:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
\\centering
\\includegraphics[width=\\columnwidth]{results}
\\caption{Results visualization}
\\label{fig:results}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Switch to BibTeX.</strong> Replace the{" "}
        <GuideCode>thebibliography</GuideCode> block with{" "}
        <GuideCode>{"\\bibliographystyle{IEEEtran}"}</GuideCode> and{" "}
        <GuideCode>{"\\bibliography{refs}"}</GuideCode>, put your entries in{" "}
        <GuideCode>refs.bib</GuideCode>, and compile with pdfLaTeX, BibTeX, then pdfLaTeX
        twice (or <GuideCode>latexmk -pdf paper.tex</GuideCode>).
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/ieee-conference">IEEE conference paper</GuideLink>,{" "}
        <GuideLink href="/templates/journal-article">journal article</GuideLink> and{" "}
        <GuideLink href="/templates/article-template">article</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Research paper template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
