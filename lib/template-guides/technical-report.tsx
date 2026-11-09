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
    question: "What is the structure of a technical report?",
    answer:
      "A title page with a report number, then an executive summary of the key findings, an introduction with background and objectives, the system or method description, implementation details, results with measured figures, a conclusion and references. This template has those chapters in that order, starting with a one-page Executive Summary so readers can stop after the first chapter.",
  },
  {
    question: "How do I add code listings to the technical report?",
    answer:
      "The listings package is already loaded and configured with a grey background, small monospaced text, line numbers and line breaking. Put code inside \\begin{lstlisting}[language=Python] ... \\end{lstlisting}, or include a source file with \\lstinputlisting[language=Python]{script.py}.",
  },
  {
    question: "Why does '<100ms' print strangely in the table?",
    answer:
      "In text mode with pdfLaTeX's default font encoding, the < character prints as an inverted exclamation mark. Write the comparison in math mode, $<$100\\,ms, or load \\usepackage[T1]{fontenc} in the preamble.",
  },
  {
    question: "Does the technical report template work in Overleaf?",
    answer:
      "Yes. It uses the report class with geometry, amsmath, amssymb, graphicx, booktabs, listings, xcolor and hyperref, all part of TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or a local install. Compile twice so the table of contents fills in.",
  },
];

export default function TechnicalReportGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A technical report template in LaTeX</GuideH2>
      <GuideP>
        This technical report LaTeX template is set up for engineering and IT
        documentation: architecture reviews, system design documents, post-project
        reports and internal research write-ups. The title page reads &quot;TECHNICAL
        REPORT&quot; above a two-line report title, followed by a report number
        (TR-2025-001 in the sample), the authoring team, the date, and a classification
        and project code at the bottom of the page, the kind of metadata organisations
        use to file and track reports.
      </GuideP>
      <GuideP>
        The sample report documents a cloud-native platform. After the table of
        contents, an Executive Summary lists key findings as bullets; Introduction
        gives the background and numbered objectives; System Architecture gives an
        overview; Implementation lists the technology stack; Results reports performance
        in a <GuideCode>booktabs</GuideCode> table of target versus actual uptime,
        latency and throughput; and a Conclusion summarises, followed by a reference
        list. The source uses the <GuideCode>report</GuideCode> class at 11 pt with
        one-inch margins, so each part is a numbered chapter on a new page. The
        preamble also configures <GuideCode>listings</GuideCode> with a grey background,
        line numbers and line breaking for code samples, and loads{" "}
        <GuideCode>amsmath</GuideCode>, <GuideCode>graphicx</GuideCode> and{" "}
        <GuideCode>hyperref</GuideCode> for equations, diagrams and clickable
        cross-references. It compiles as a technical report template for Overleaf, in
        Octree or with any local TeX install.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title page with report number, authors, date, classification and project code</li>
        <li>Executive Summary with key findings</li>
        <li>Introduction, System Architecture, Implementation, Results and Conclusion chapters</li>
        <li>A <GuideCode>booktabs</GuideCode> results table</li>
        <li>Pre-configured <GuideCode>listings</GuideCode> style for code</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>report.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX, twice, so the table of contents updates.</li>
        <li>
          Edit the <GuideCode>titlepage</GuideCode> block: title, report number, team,
          date, classification and project code.
        </li>
        <li>
          Replace the chapters with your own content, and add a{" "}
          <GuideCode>\bibitem</GuideCode> for each source you cite with{" "}
          <GuideCode>{"\\cite{...}"}</GuideCode>.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Add a code listing.</strong> The <GuideCode>codestyle</GuideCode> is
        already active, so only the language and an optional caption are needed:
      </GuideP>
      <GuidePre>{`\\begin{lstlisting}[language=Python, caption={Health check endpoint}]
@app.get("/health")
def health():
    return {"status": "ok"}
\\end{lstlisting}`}</GuidePre>
      <GuideP>
        <strong>Colour code keywords and comments.</strong>{" "}
        <GuideCode>codegreen</GuideCode> is defined but unused. Add these keys to{" "}
        <GuideCode>\lstdefinestyle{"{codestyle}"}</GuideCode>:
      </GuideP>
      <GuidePre>{`    keywordstyle=\\color{blue},
    commentstyle=\\color{codegreen},
    stringstyle=\\color{purple},`}</GuidePre>
      <GuideP>
        <strong>Fix the comparison signs.</strong> In the results table,{" "}
        <GuideCode>&lt;100ms</GuideCode> is plain text, which pdfLaTeX&apos;s default
        encoding prints as an inverted exclamation mark. Write{" "}
        <GuideCode>$&lt;$100\,ms</GuideCode>, or add{" "}
        <GuideCode>{"\\usepackage[T1]{fontenc}"}</GuideCode> to the preamble.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/project-report">project report</GuideLink>,{" "}
        <GuideLink href="/templates/white-paper">white paper</GuideLink> and{" "}
        <GuideLink href="/templates/algorithm">algorithm</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Technical report template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
