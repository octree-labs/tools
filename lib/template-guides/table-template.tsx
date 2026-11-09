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
    question: "How do I make a table in LaTeX?",
    answer:
      "Put a tabular environment inside a table float: the tabular argument sets one letter per column (l, c, r for left, centre, right, or p{width} for wrapping text), cells are separated with &, rows end with \\\\, and \\hline draws horizontal rules. Add \\caption and \\centering inside the table environment. The first table in this template is exactly that.",
  },
  {
    question: "How do I merge cells in a LaTeX table?",
    answer:
      "Use \\multicolumn{3}{c|}{Text} to merge cells across columns and \\multirow{2}{*}{Text} from the multirow package to merge down rows, then \\cline{2-4} to draw a partial rule. The Multirow and Multicolumn example in this template shows both together.",
  },
  {
    question: "How do I colour table rows?",
    answer:
      "Load xcolor with the table option, \\usepackage[table]{xcolor}, and put \\rowcolor{gray!10} at the start of a row. For automatic striping, use \\rowcolors{2}{gray!10}{white} before the tabular.",
  },
  {
    question: "Why does my table not stay where I put it?",
    answer:
      "Tables are floats, and LaTeX moves them to avoid bad page breaks. The examples use [h], which LaTeX often relaxes to [ht]; [htbp] gives it the most freedom, and \\usepackage{float} with [H] forces the table to stay exactly in place.",
  },
];

export default function TableTemplateGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">LaTeX table templates and examples</GuideH2>
      <GuideP>
        This LaTeX table template is a collection of eight ready-to-copy table layouts
        in one document, each in its own section with a caption, so you can find the
        style you need, copy it into your paper or report and change the data. It is
        useful both as a reference while learning how LaTeX tables work and as a
        starting point when you need something specific, such as merged header cells or
        striped rows, without hunting through package documentation.
      </GuideP>
      <GuideP>
        The examples are: a basic ruled table with left, centre and right aligned
        columns; a professional <GuideCode>booktabs</GuideCode> table with a total row;
        a table with fixed-width paragraph columns that wrap long text; a coloured
        table with a shaded header and alternating row colours; a table with merged
        cells using <GuideCode>\multirow</GuideCode> and{" "}
        <GuideCode>\multicolumn</GuideCode>; a scientific data table with trial values
        and means; a three-plan feature comparison; and a weekly schedule grid. The
        preamble loads <GuideCode>booktabs</GuideCode>, <GuideCode>array</GuideCode>,{" "}
        <GuideCode>multirow</GuideCode> and <GuideCode>xcolor</GuideCode> with the{" "}
        <GuideCode>table</GuideCode> option, on the standard{" "}
        <GuideCode>article</GuideCode> class at 11 pt. Every package is part of TeX
        Live, so the file compiles as a table template for Overleaf, in Octree or
        locally, and each table works on its own once you copy the matching{" "}
        <GuideCode>\usepackage</GuideCode> lines into your document.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Basic, booktabs and paragraph-column tables</li>
        <li>Coloured header and striped rows with <GuideCode>\rowcolor</GuideCode></li>
        <li>Merged cells with <GuideCode>\multirow</GuideCode>, <GuideCode>\multicolumn</GuideCode> and <GuideCode>\cline</GuideCode></li>
        <li>Data, comparison and weekly schedule tables</li>
        <li>Each table in a captioned <GuideCode>table</GuideCode> float</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>tables.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>
          Copy the <GuideCode>{"\\begin{table}"}</GuideCode> ...{" "}
          <GuideCode>{"\\end{table}"}</GuideCode> block you want, plus the packages it
          needs, into your own document.
        </li>
        <li>
          Add <GuideCode>{"\\label{tab:name}"}</GuideCode> after each{" "}
          <GuideCode>\caption</GuideCode> and refer to it with{" "}
          <GuideCode>{"Table~\\ref{tab:name}"}</GuideCode>.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Stretch a table to the text width.</strong> The paragraph-column example
        uses fixed widths. With <GuideCode>tabularx</GuideCode>, an{" "}
        <GuideCode>X</GuideCode> column takes up whatever width is left:
      </GuideP>
      <GuidePre>{`\\usepackage{tabularx}
...
\\begin{tabularx}{\\textwidth}{|l|X|l|}
\\hline
\\textbf{Name} & \\textbf{Description} & \\textbf{Status} \\\\
\\hline
Project A & This is a longer description that will wrap within the column & Complete \\\\
\\hline
\\end{tabularx}`}</GuidePre>
      <GuideP>
        <strong>Align numbers on the decimal point.</strong> For the scientific data
        table, <GuideCode>siunitx</GuideCode>&apos;s <GuideCode>S</GuideCode> column
        lines up decimals; wrap text headers in braces:
      </GuideP>
      <GuidePre>{`\\usepackage{siunitx}
...
\\begin{tabular}{@{}lSSSS@{}}
\\toprule
\\textbf{Experiment} & {\\textbf{Trial 1}} & {\\textbf{Trial 2}} & {\\textbf{Trial 3}} & {\\textbf{Mean}} \\\\
\\midrule
Test A & 5.2 & 5.4 & 5.3 & 5.3 \\\\
Test B & 17.15 & 7.3 & 7.0 & 10.48 \\\\
\\bottomrule
\\end{tabular}`}</GuidePre>
      <GuideP>
        <strong>Automatic row striping.</strong> Instead of a{" "}
        <GuideCode>\rowcolor</GuideCode> on every other row, put{" "}
        <GuideCode>{"\\rowcolors{2}{gray!10}{white}"}</GuideCode> before the{" "}
        <GuideCode>tabular</GuideCode>; it works because <GuideCode>xcolor</GuideCode>{" "}
        is loaded with the <GuideCode>table</GuideCode> option.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/scientific-report">scientific report</GuideLink>,{" "}
        <GuideLink href="/templates/lab-report">lab report</GuideLink> and{" "}
        <GuideLink href="/templates/invoice">invoice</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Table template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
