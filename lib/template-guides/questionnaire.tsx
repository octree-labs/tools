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
    question: "How do I make a questionnaire in LaTeX?",
    answer:
      "Number the questions with an enumerate list and draw answer options as checkbox lists, as this template does: enumitem's label=$\\square$ turns an itemize list into tick boxes, a tabular with $\\square$ cells gives a rating scale or Likert grid, and \\vspace leaves room for open answers. The resume option keeps question numbers running across parts.",
  },
  {
    question: "How do I create a Likert scale table?",
    answer:
      "Use a tabular with one wide column for the statement and one column per answer, with $\\square$ in each cell. The template's agreement table does this with five columns from Strongly Disagree to Strongly Agree. Because the long headers do not wrap, the table is wider than the text block; narrow the statement column and give the answer columns fixed, centred widths with the array package to fix it.",
  },
  {
    question: "How do I keep question numbers running between sections?",
    answer:
      "Open each later list with \\begin{enumerate}[leftmargin=*, resume]. enumitem's resume option continues numbering from the previous enumerate, so Part 2 starts at question 5 after the four demographic questions.",
  },
  {
    question: "Can I use this questionnaire template in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, enumitem, amsmath and amssymb, all part of TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or a local install. The output is a printable PDF; it is not a fillable online form.",
  },
];

export default function QuestionnaireGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A questionnaire and survey template in LaTeX</GuideH2>
      <GuideP>
        This questionnaire LaTeX template produces a printable research survey for
        studies, course evaluations, customer feedback or any paper-based data
        collection. It opens with a title and study name, a Participant Information
        paragraph explaining the time required and confidentiality, blank lines for a
        participant ID and date, and general instructions. The questions follow in three
        parts with one continuous numbering sequence.
      </GuideP>
      <GuideP>
        Part 1, Demographic Information, has tick-box questions for age band, gender and
        education (each with an &quot;Other&quot; line) and a write-in occupation line.
        Part 2, Main Questions, shows the common question types side by side: a 1 to 5
        rating scale, a frequency question, a five-point agreement (Likert) table for
        several statements, a select-all-that-apply list and three open-ended questions
        with space to write. Part 3 asks for additional comments, and the form ends with
        a thank-you and the researcher&apos;s contact line. Checkboxes are{" "}
        <GuideCode>$\square$</GuideCode> symbols from <GuideCode>amssymb</GuideCode>, set
        as list labels with <GuideCode>enumitem</GuideCode>, whose{" "}
        <GuideCode>resume</GuideCode> option carries question numbers from one part to
        the next. The document is the standard <GuideCode>article</GuideCode> class at 11
        pt with one-inch margins, so it works as a survey template for Overleaf, in Octree
        or with any local TeX install. Swap the bracketed topics for your own and delete
        question types you do not need.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title, study name, participant information, ID and date lines</li>
        <li>Demographic tick-box questions with &quot;Other&quot; write-ins</li>
        <li>Rating scale, frequency, Likert table and select-all questions</li>
        <li>Open-ended questions with writing space</li>
        <li>Continuous question numbering across three parts</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>survey.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>
          Edit the title block and the Participant Information paragraph, including the
          estimated completion time.
        </li>
        <li>
          Edit each <GuideCode>\item</GuideCode>; options inside{" "}
          <GuideCode>{"\\begin{itemize}[label=$\\square$]"}</GuideCode> become tick boxes.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Fit the Likert table to the page.</strong> As shipped, the agreement
        table is wider than the text block because its long headers cannot wrap. Load{" "}
        <GuideCode>array</GuideCode>, narrow the statement column and give the five
        answer columns fixed, centred widths so the headers wrap:
      </GuideP>
      <GuidePre>{`\\usepackage{array}
...
\\begin{tabular}{|p{4.8cm}|*{5}{>{\\centering\\arraybackslash}p{1.7cm}|}}
\\hline
\\textbf{Statement} & \\textbf{Strongly Disagree} & \\textbf{Disagree} &
  \\textbf{Neutral} & \\textbf{Agree} & \\textbf{Strongly Agree} \\\\
\\hline
Statement 1 & $\\square$ & $\\square$ & $\\square$ & $\\square$ & $\\square$ \\\\
\\hline
\\end{tabular}`}</GuidePre>
      <GuideP>
        <strong>Put short options on one line.</strong> For yes/no or short scales, an{" "}
        <GuideCode>inline</GuideCode> list saves space. Load enumitem with the option
        and use <GuideCode>itemize*</GuideCode>:
      </GuideP>
      <GuidePre>{`\\usepackage[inline]{enumitem}
...
\\item Have you used [product] before?
\\begin{itemize*}[label=$\\square$, itemjoin=\\quad]
\\item Yes \\item No \\item Not sure
\\end{itemize*}`}</GuidePre>
      <GuideP>
        <strong>Ruled answer lines.</strong> Instead of blank{" "}
        <GuideCode>\vspace{"{3cm}"}</GuideCode> for open questions, repeat{" "}
        <GuideCode>{"\\par\\noindent\\rule{\\linewidth}{0.4pt}\\vspace{0.6cm}"}</GuideCode>{" "}
        a few times to give respondents lines to write on.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/quiz-template">quiz</GuideLink>,{" "}
        <GuideLink href="/templates/research-proposal">research proposal</GuideLink> and{" "}
        <GuideLink href="/templates/table-template">table template</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Questionnaire template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
