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
    question: "What chapters should a project report have?",
    answer:
      "A typical student or capstone project report has an Introduction (background, objectives, scope), a Literature Review, a Methodology chapter (design and implementation), Results and Analysis, a Conclusion with future work, and references. This template contains exactly those five chapters plus a title page, table of contents and bibliography. Follow your department's handbook if it prescribes other headings.",
  },
  {
    question: "How do I add an abstract or acknowledgements?",
    answer:
      "Insert them between \\end{titlepage} and \\tableofcontents. The report class has an abstract environment, \\begin{abstract} ... \\end{abstract}; for acknowledgements use an unnumbered chapter, \\chapter*{Acknowledgements}, and add it to the contents with \\addcontentsline{toc}{chapter}{Acknowledgements}.",
  },
  {
    question: "Why is the header in capital letters?",
    answer:
      "The left header prints \\leftmark, which the report class fills with the current chapter in upper case, such as CHAPTER 2. LITERATURE REVIEW. To use the normal case, add \\renewcommand{\\chaptermark}[1]{\\markboth{#1}{}} after the fancyhdr settings.",
  },
  {
    question: "Does the project report template work in Overleaf?",
    answer:
      "Yes. It uses the report class with geometry, graphicx, hyperref and fancyhdr, all part of TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or a local install. Compile twice so the table of contents fills in.",
  },
];

export default function ProjectReportGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A project report template in LaTeX</GuideH2>
      <GuideP>
        This project report LaTeX template is a full chapter-based report for a
        university course project, final-year or capstone project, or an internal
        technical project. It opens with a formal title page (project title, &quot;Project
        Report&quot;, student name and ID, &quot;in partial fulfillment of the
        requirements for&quot; the course, department, university and date), followed by
        an automatic table of contents and five chapters that follow the standard
        project structure.
      </GuideP>
      <GuideP>
        Chapter 1, Introduction, has Background, Objectives and Scope sections; Chapter
        2 is the Literature Review with Related Work and Theoretical Framework; Chapter 3,
        Methodology, covers System Design and Implementation; Chapter 4, Results and
        Analysis, has Experimental Setup and Results; and Chapter 5 is the Conclusion
        with a Summary and Future Work, followed by a bibliography. The source uses the{" "}
        <GuideCode>report</GuideCode> class at 12 pt with one-inch margins, so chapters
        start on new pages and are numbered automatically.{" "}
        <GuideCode>fancyhdr</GuideCode> puts the current chapter name in the top-left
        corner and &quot;Page N&quot; on the right, <GuideCode>hyperref</GuideCode> makes
        the table of contents clickable in the PDF, and <GuideCode>graphicx</GuideCode>{" "}
        is ready for diagrams and screenshots. All of it compiles as a project report
        template for Overleaf, in Octree or with a local TeX install; replace the
        bracketed placeholders and add your figures and tables.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title page with student details and &quot;partial fulfillment&quot; statement</li>
        <li>Clickable table of contents</li>
        <li>Five chapters: Introduction, Literature Review, Methodology, Results and Analysis, Conclusion</li>
        <li>Header with chapter name and page number</li>
        <li>A <GuideCode>thebibliography</GuideCode> reference list</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>report.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX, twice, so the table of contents and links update.</li>
        <li>
          Fill in the <GuideCode>titlepage</GuideCode> block: title, name, ID, course,
          department and university.
        </li>
        <li>
          Write each chapter, and cite entries with{" "}
          <GuideCode>{"\\cite{ref1}"}</GuideCode>, adding a{" "}
          <GuideCode>\bibitem</GuideCode> for each source.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Add an abstract and list of figures.</strong> Put these between{" "}
        <GuideCode>{"\\end{titlepage}"}</GuideCode> and the contents:
      </GuideP>
      <GuidePre>{`\\begin{abstract}
This project develops [system] to solve [problem]. ...
\\end{abstract}

\\tableofcontents
\\listoffigures`}</GuidePre>
      <GuideP>
        <strong>Add a figure.</strong> <GuideCode>graphicx</GuideCode> is loaded, so a
        system diagram in the Methodology chapter is:
      </GuideP>
      <GuidePre>{`\\begin{figure}[htbp]
  \\centering
  \\includegraphics[width=0.8\\textwidth]{architecture}
  \\caption{System architecture.}
  \\label{fig:architecture}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Plain-case chapter names in the header.</strong> Add{" "}
        <GuideCode>{"\\renewcommand{\\chaptermark}[1]{\\markboth{#1}{}}"}</GuideCode>{" "}
        after the <GuideCode>\fancyhf</GuideCode> lines so the header reads
        &quot;Literature Review&quot; rather than &quot;CHAPTER 2. LITERATURE
        REVIEW&quot;.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/technical-report">technical report</GuideLink>,{" "}
        <GuideLink href="/templates/internship-report">internship report</GuideLink> and{" "}
        <GuideLink href="/templates/thesis">thesis</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Project report template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
