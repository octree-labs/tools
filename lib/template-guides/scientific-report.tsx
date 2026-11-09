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
    question: "What is the structure of a scientific report?",
    answer:
      "Title page, abstract, introduction (background, objectives, significance), literature review, methodology (design, materials, procedures, analysis, ethics), results, discussion (interpretation, implications, limitations, future research), conclusion and references. This template has all of these as chapters and sections, so you can fill it in from top to bottom.",
  },
  {
    question: "How do I add my own references?",
    answer:
      "The template ends with \\bibliography{references}. A filecontents* block at the top writes a sample references.bib, with one entry cited in the Literature Review, when no such file exists. Upload or create your own references.bib next to the .tex file, delete the block, cite entries with \\cite{key}, and compile with pdfLaTeX, BibTeX, then pdfLaTeX twice. Overleaf and Octree run BibTeX automatically.",
  },
  {
    question: "How do I add a figure to the Results chapter?",
    answer:
      "The Result 1 subsection already contains a figure environment with a caption and the label fig:results1, but no image. Add \\includegraphics[width=0.8\\textwidth]{plot} above the \\caption, upload plot.png next to the .tex file, and refer to it in the text with Figure~\\ref{fig:results1}.",
  },
  {
    question: "Does this scientific report template work in Overleaf?",
    answer:
      "Yes. It uses the report class with geometry, amsmath, amssymb, graphicx, cite and abstract, all part of TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or a local install. The sample references.bib is generated from the source, so no extra file is needed.",
  },
];

export default function ScientificReportGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A scientific report template in LaTeX</GuideH2>
      <GuideP>
        This scientific report LaTeX template is a complete, chapter-based structure for
        reporting an empirical study: a research project, a lab-based investigation, a
        dissertation-style report or a technical report for a funder. It starts with a
        title page that reads &quot;Scientific Report&quot; above the report title,
        followed by authors with numbered affiliations and the date, then an abstract
        and a table of contents.
      </GuideP>
      <GuideP>
        The body follows the conventional scientific order in six chapters. Introduction
        covers Background, Objectives and Significance; Literature Review has a
        Theoretical Framework and the Research Gap; Methodology describes the
        Experimental Design, Materials, Procedures (data collection and analysis, with a
        significance level of 0.05 as the placeholder) and Ethical Considerations;
        Results separates primary findings, with a figure placeholder, from secondary
        findings; Discussion covers interpretation, comparison with previous studies,
        implications, limitations and future research; and the Conclusion ends with
        recommendations. References come from BibTeX with the{" "}
        <GuideCode>plain</GuideCode> style and the <GuideCode>cite</GuideCode> package.
        The source is the <GuideCode>report</GuideCode> class at 12 pt with one-inch
        margins, with <GuideCode>amsmath</GuideCode>, <GuideCode>graphicx</GuideCode> and
        the <GuideCode>abstract</GuideCode> package, so it compiles as a scientific report
        template for Overleaf, in Octree or locally; a{" "}
        <GuideCode>filecontents*</GuideCode> block at the top writes a one-entry sample{" "}
        <GuideCode>references.bib</GuideCode> so the bibliography builds out of the box.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title page with authors and superscript affiliations</li>
        <li>Abstract and table of contents</li>
        <li>Six chapters from Introduction to Conclusion with standard subsections</li>
        <li>Labelled figure placeholder in Results</li>
        <li>BibTeX bibliography with the <GuideCode>plain</GuideCode> style</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>report.tex</GuideCode>.
        </li>
        <li>
          Replace the sample bibliography: put your own{" "}
          <GuideCode>references.bib</GuideCode> next to the .tex file, delete the{" "}
          <GuideCode>filecontents*</GuideCode> block, and cite entries with{" "}
          <GuideCode>{"\\cite{key}"}</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX and BibTeX (<GuideCode>latexmk -pdf report.tex</GuideCode>{" "}
          locally); Overleaf and Octree do this for you.
        </li>
        <li>
          Edit the title page, the abstract and each chapter, replacing the bracketed
          placeholders.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Add reference entries.</strong> The sample entry, cited in the
        Literature Review as <GuideCode>{"\\cite{smith2021}"}</GuideCode>, shows the
        format; copy it for each source in your <GuideCode>references.bib</GuideCode>:
      </GuideP>
      <GuidePre>{`@article{smith2021,
  author  = {Smith, Jane and Lee, Kim},
  title   = {Effects of temperature on enzyme activity},
  journal = {Journal of Example Studies},
  year    = {2021},
  volume  = {12},
  pages   = {34--56}
}`}</GuidePre>
      <GuideP>
        <strong>Fill the figure placeholder.</strong> Add the image above the existing
        caption:
      </GuideP>
      <GuidePre>{`\\begin{figure}[h]
\\centering
\\includegraphics[width=0.8\\textwidth]{plot}
\\caption{Results visualization}
\\label{fig:results1}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Report statistics in a table.</strong> Add{" "}
        <GuideCode>{"\\usepackage{booktabs}"}</GuideCode> and use{" "}
        <GuideCode>\toprule</GuideCode>, <GuideCode>\midrule</GuideCode> and{" "}
        <GuideCode>\bottomrule</GuideCode> inside a <GuideCode>table</GuideCode>{" "}
        environment with a caption, so tables match the figure numbering by chapter.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/lab-report">lab report</GuideLink>,{" "}
        <GuideLink href="/templates/technical-report">technical report</GuideLink> and{" "}
        <GuideLink href="/templates/research-proposal">research proposal</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Scientific report template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
