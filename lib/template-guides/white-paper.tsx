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
    question: "What is the structure of a white paper?",
    answer:
      "A title page, an executive summary, a statement of the problem, the proposed solution, the benefits, evidence such as a case study, and a conclusion with a call to action. This template follows that order: Executive Summary, The Challenge, The Solution, Benefits, Case Study and Conclusion, after a title page that also previews the executive summary in a box.",
  },
  {
    question: "Are the statistics in the template real?",
    answer:
      "No. Figures such as the 40% cost reduction and the $5M case-study saving are placeholders that show where numbers go. Replace them with your own measured results or cited sources, and add a references section if you quote third-party data.",
  },
  {
    question: "How do I change the white paper's colour scheme?",
    answer:
      "One colour, primarycolor, is defined with \\definecolor{primarycolor}{RGB}{0,51,102} and used for the title, the section headings (through titlesec) and the frame of the summary box. Change the RGB values to your brand colour and everything updates.",
  },
  {
    question: "Does this white paper template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, graphicx, xcolor, titlesec, hyperref and tcolorbox, all part of TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or a local install.",
  },
];

export default function WhitePaperGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A white paper template in LaTeX</GuideH2>
      <GuideP>
        This white paper LaTeX template produces a polished, branded report of the kind
        companies publish to explain a problem and argue for their approach to it:
        product white papers, technical position papers and thought-leadership pieces
        for marketing or sales. The title page carries a large two-line title in the
        brand colour, an italic subtitle, the company name and date, and a framed
        Executive Summary box at the foot of the page, so a reader gets the main point
        before turning over.
      </GuideP>
      <GuideP>
        The body follows the classic problem-solution structure in six numbered
        sections: Executive Summary, The Challenge, The Solution, Benefits (a bullet
        list of outcomes), Case Study and Conclusion. The sample is written for a
        fictional AI platform, and its percentages and savings figures are placeholders
        to replace with real, sourced numbers. The source uses the standard{" "}
        <GuideCode>article</GuideCode> class at 11 pt with one-inch margins.{" "}
        <GuideCode>titlesec</GuideCode> sets the section headings in large, bold type in
        a single brand colour, <GuideCode>primarycolor</GuideCode>;{" "}
        <GuideCode>tcolorbox</GuideCode> draws the summary box;{" "}
        <GuideCode>hyperref</GuideCode> makes links clickable in the PDF; and{" "}
        <GuideCode>graphicx</GuideCode> is loaded for charts and diagrams. Paragraph
        indentation is turned off for a modern, business-document look. Everything
        ships with TeX Live, so it compiles as a white paper template for Overleaf, in
        Octree or with any local install.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Branded title page with subtitle, company, date and an executive summary box</li>
        <li>Six numbered sections in a problem-solution structure</li>
        <li>Coloured section headings via <GuideCode>titlesec</GuideCode></li>
        <li>One brand colour, <GuideCode>primarycolor</GuideCode>, used throughout</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>whitepaper.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>
          Set your brand colour in the <GuideCode>\definecolor</GuideCode> line, then edit
          the title, subtitle, company name and date on the title page.
        </li>
        <li>
          Rewrite the summary box and each section; keep the executive summary to a few
          sentences.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Separate paragraphs with space.</strong> The template sets{" "}
        <GuideCode>\parindent</GuideCode> to zero but adds no space between
        paragraphs, so consecutive paragraphs run together. Replace the{" "}
        <GuideCode>\setlength</GuideCode> line with:
      </GuideP>
      <GuidePre>{`\\usepackage{parskip}`}</GuidePre>
      <GuideP>
        <strong>Highlight a key result.</strong> Reuse the title-page box style in the
        body for a statistic or quote:
      </GuideP>
      <GuidePre>{`\\begin{tcolorbox}[colback=primarycolor!5,colframe=primarycolor,title=Key result]
Company XYZ cut [metric] by [amount] within [time period].
\\end{tcolorbox}`}</GuidePre>
      <GuideP>
        <strong>Brand every page.</strong> Add a footer with the company name and page
        number using <GuideCode>fancyhdr</GuideCode>:{" "}
        <GuideCode>{"\\usepackage{fancyhdr} \\pagestyle{fancy} \\fancyhf{} \\lfoot{TechCorp Industries} \\rfoot{\\thepage} \\renewcommand{\\headrulewidth}{0pt}"}</GuideCode>.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/business-report">business report</GuideLink>,{" "}
        <GuideLink href="/templates/technical-report">technical report</GuideLink> and{" "}
        <GuideLink href="/templates/business-plan">business plan</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">White paper template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
