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
    question: "Why is the Executive Summary before the table of contents?",
    answer:
      "Many business readers only read the summary, so the template puts it straight after the title page. It is an unnumbered \\chapter* added to the contents with \\addcontentsline, so it is still listed. Move \\tableofcontents above it if your organisation prefers the contents first.",
  },
  {
    question: "Why do chapter opening pages have no header?",
    answer:
      "The report class switches the first page of every chapter to the plain page style, which in this template shows only the centred page number. The fancy header with the report label and date appears on the following pages. Redefine the plain style with \\fancypagestyle{plain}{...} if you want the header on those pages too.",
  },
  {
    question: "How do I number the appendices A, B, C?",
    answer:
      "The template uses unnumbered \\section* headings under an unnumbered Appendices chapter. For lettered appendices that appear in the contents, write \\appendix and then \\chapter{Data Sources}, \\chapter{Detailed Calculations}; report prints them as Appendix A and Appendix B.",
  },
  {
    question: "Does this business report template work in Overleaf?",
    answer:
      "Yes. It uses the report class with geometry, graphicx, booktabs, fancyhdr and xcolor, all in TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX. Compile twice so the table of contents is filled in.",
  },
];

export default function BusinessReportGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A business report template in LaTeX</GuideH2>
      <GuideP>
        This business report template in LaTeX is a corporate-style report with a
        branded title page, running headers and the structure managers expect:
        summary first, then context, analysis, recommendations and next steps. It
        uses the <GuideCode>report</GuideCode> class at 11 pt with 1 inch margins
        and a single navy colour, <GuideCode>corpblue</GuideCode> (RGB 0, 51, 102),
        for the title rules and the header text.
      </GuideP>
      <GuideP>
        The title page frames the report name between two coloured rules and lists
        who it was prepared for and by, with the date. An Executive Summary with Key
        Findings and Recommendations lists comes next, followed by the table of
        contents and five chapters: Introduction (purpose, scope, methodology),
        Background, Analysis (three findings, a <GuideCode>booktabs</GuideCode>{" "}
        metrics table with Current and Target columns, and implications),
        Recommendations, and Conclusion with numbered next steps. Each recommendation
        uses the same five bold labels (Description, Rationale, Implementation,
        Timeline, Resources Required), which keeps proposals comparable. Unnumbered
        appendices for data sources and calculations close the report. Running
        headers come from <GuideCode>fancyhdr</GuideCode>: the label Business Report
        on the left, the date on the right and the page number centred in the
        footer. Use it for quarterly reviews, market analyses, consulting
        deliverables or a university business report assignment. For a plan aimed at
        investors, see the{" "}
        <GuideLink href="/templates/business-plan">business plan template</GuideLink>.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title page with coloured rules, prepared for and prepared by</li>
        <li>Executive Summary with key findings and recommendations</li>
        <li>Table of contents and five numbered chapters</li>
        <li>
          A <GuideCode>booktabs</GuideCode> metrics table
        </li>
        <li>
          <GuideCode>fancyhdr</GuideCode> header and footer in{" "}
          <GuideCode>corpblue</GuideCode>
        </li>
        <li>Unnumbered appendices</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>report.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX, twice, so the table of contents is complete.</li>
        <li>
          Edit the title page: report title, Prepared for and Prepared by.
        </li>
        <li>
          Change the header label in <GuideCode>\lhead</GuideCode> from Business Report
          to your report&apos;s short title.
        </li>
        <li>
          Replace the bracketed prompts chapter by chapter, then write the Executive
          Summary from your findings.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Set the header and a fixed date.</strong> The header prints{" "}
        <GuideCode>\today</GuideCode>, which changes every time you compile. For a
        report that has been issued, use fixed text:
      </GuideP>
      <GuidePre>{`\\lhead{\\color{corpblue}\\textbf{Q3 Market Review}}
\\rhead{\\color{corpblue}30 September 2026}`}</GuidePre>
      <GuideP>
        <strong>Add a chart.</strong> pgfplots draws charts from numbers in the
        source, so the figure updates when the data does. Add{" "}
        <GuideCode>{"\\usepackage{pgfplots}"}</GuideCode> and{" "}
        <GuideCode>{"\\pgfplotsset{compat=1.18}"}</GuideCode> to the preamble:
      </GuideP>
      <GuidePre>{`\\begin{figure}[h]
\\centering
\\begin{tikzpicture}
\\begin{axis}[ybar, symbolic x coords={Q1,Q2,Q3,Q4}, xtick=data,
  ylabel={Revenue (k\\$)}, bar width=14pt, width=0.8\\textwidth, height=6cm]
\\addplot[fill=corpblue] coordinates {(Q1,120) (Q2,135) (Q3,160) (Q4,172)};
\\end{axis}
\\end{tikzpicture}
\\caption{Quarterly revenue}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Use lettered appendices.</strong> Replace the Appendices chapter with{" "}
        <GuideCode>\appendix</GuideCode> and one chapter per appendix; they appear in
        the contents as A, B and so on:
      </GuideP>
      <GuidePre>{`\\appendix
\\chapter{Data Sources}
[List of data sources]

\\chapter{Detailed Calculations}
[Supporting calculations]`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/business-plan">business plan</GuideLink>,{" "}
        <GuideLink href="/templates/technical-report">technical report</GuideLink> and{" "}
        <GuideLink href="/templates/memo">memo</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Business report template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
