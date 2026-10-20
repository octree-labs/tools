import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideH3,
  GuideOl,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "./ui";

const faq: GuideFaqItem[] = [
  {
    question: "How long should a lab report be?",
    answer:
      "Most undergraduate lab reports run three to six pages at 12pt with one-inch margins, including one or two tables and figures. The abstract should stay under 200 words and the conclusion under half a page. If your instructor sets a page limit, move raw data and long derivations into the appendix, which usually does not count toward it. The filled-in pendulum example in this template compiles to three pages.",
  },
  {
    question: "What is the difference between a lab report and a research paper?",
    answer:
      "Both use the IMRaD structure (Introduction, Methods, Results and Discussion), but a lab report documents a set experiment whose expected outcome is known, so it emphasises procedure, measurement uncertainty and comparison with an accepted value. A research paper argues for a new finding, so it needs a literature review, a much longer discussion and a formal reference list. A lab report typically cites only the lab manual and a textbook.",
  },
  {
    question: "Can I use this lab report template for chemistry, biology or physics?",
    answer:
      "Yes. The section structure is the same across the sciences; only the content of the example changes. For a chemistry titration, the Introduction states the reaction and molarity relation, the Results table lists titre volumes, and the Discussion compares the computed concentration with the known one. For a biology lab, Materials and Methods usually gains a subsection on sample preparation and the Results section leans on figures. Rename or add sections freely; the article class does not impose any.",
  },
  {
    question: "How do I add a data table to the lab report?",
    answer:
      "Copy the table environment from the Results section. The template loads booktabs for the \\toprule, \\midrule and \\bottomrule rules and siunitx for the S column type, which aligns numbers on the decimal point. Set table-format to the number of digits before and after the point (S[table-format=1.3] for 0.200), wrap non-numeric header cells in braces, and give every table a \\caption above the tabular and a \\label so you can reference it with Table~\\ref{tab:data}.",
  },
  {
    question: "Should the lab report be written in past or present tense?",
    answer:
      "Use past tense for anything you did or observed (the bob was displaced, the period was measured) and present tense for established theory and for statements about your tables and figures (Table 1 shows, the period depends on length). Many courses ask for the passive voice in Materials and Methods so the procedure, not the student, is the subject of each sentence; the example in this template follows that convention.",
  },
];

export default function LabReportGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is a lab report?</GuideH2>
      <GuideP>
        A lab report is a structured write-up of an experiment: what you set out to
        measure, how you measured it, what you found and what those numbers mean.
        Science courses use the same IMRaD organisation as journal articles
        (Introduction, Methods, Results and Discussion) so that a reader can repeat
        the experiment and check your reasoning. This free lab report template in
        LaTeX gives you that structure with a complete, filled-in lab report example
        (a simple pendulum measurement of <em>g</em>) so you can see what each section
        looks like when it is finished before you replace the content with your own.
      </GuideP>

      <GuideH2 id="format">Lab report format: the standard sections</GuideH2>
      <GuideP>
        Each section in the template answers one question. Keep them in this order
        unless your lab manual says otherwise.
      </GuideP>
      <GuideTable
        headers={["Section", "What goes in it"]}
        rows={[
          [
            "Title block",
            "Experiment title, your name, lab partner, course and section, instructor, and the dates the experiment was performed and the report submitted.",
          ],
          [
            "Abstract",
            "Three to five sentences: the aim, the method in one clause, the key numerical result with its uncertainty, and the main conclusion.",
          ],
          [
            "Introduction",
            "The purpose of the experiment, the theory you rely on with its governing equation, and what result you expect. Cite the textbook or lab manual.",
          ],
          [
            "Materials and Methods",
            "A list of equipment with its precision, then a numbered procedure in enough detail that another student could repeat it.",
          ],
          [
            "Results",
            "Tables and figures with numbered captions, the quantities you computed from them, and their uncertainties. No interpretation yet.",
          ],
          [
            "Discussion",
            "Comparison with the accepted or expected value, the sources of error that explain any difference, and how the experiment could be improved.",
          ],
          [
            "Conclusion",
            "Two to four sentences that answer the aim stated in the Introduction, quoting the final result.",
          ],
          [
            "References",
            "Textbook, lab manual and any papers you cited, numbered in order of citation.",
          ],
          [
            "Appendix",
            "Raw data, sample calculations, derivations and anything else that would interrupt the Results section.",
          ],
        ]}
      />

      <GuideH2 id="example">Lab report example: how the template maps to an experiment</GuideH2>
      <GuideP>
        The example in the template measures the acceleration due to gravity with a
        simple pendulum. Here is how its content lands in each section, so you can
        swap in your own experiment one section at a time.
      </GuideP>
      <GuideOl>
        <li>
          <strong>Introduction</strong> states the aim (find <em>g</em>), gives the period
          equation <em>T</em> = 2π√(<em>L</em>/<em>g</em>), and rearranges it to the
          linear form <em>T</em><sup>2</sup> = (4π<sup>2</sup>/<em>g</em>)<em>L</em> that the
          analysis will fit.
        </li>
        <li>
          <strong>Materials and Methods</strong> lists the metre rule and stopwatch with
          their precision, then the procedure: time 20 oscillations, repeat three times,
          average, and do this for six lengths.
        </li>
        <li>
          <strong>Results</strong> holds Table 1 (length, period, squared period, aligned
          on the decimal point), Figure 1 (a placeholder box for the plot of{" "}
          <em>T</em><sup>2</sup> against <em>L</em>) and a numbered equation that turns the
          fitted slope into <em>g</em> = 9.78 ± 0.12 m/s<sup>2</sup>.
        </li>
        <li>
          <strong>Discussion</strong> compares the result with 9.81 m/s<sup>2</sup>, names
          reaction time as the dominant error and suggests a photogate.
        </li>
        <li>
          <strong>Conclusion, References and Appendix</strong> restate the result, cite
          the textbook and a journal article, and show one worked calculation for a
          single data row.
        </li>
      </GuideOl>
      <GuideP>
        A titration follows the same map: the Introduction gives the reaction and the
        molarity relation, the Results table lists burette readings and the mean titre,
        and the Discussion compares the computed concentration with the known one.
      </GuideP>

      <GuideH2 id="conventions">Lab report formatting conventions</GuideH2>
      <GuideUl>
        <li>
          Write Materials and Methods in the past tense and passive voice (&ldquo;the bob
          was displaced by 5°&rdquo;); use the present tense for theory and for what a
          table or figure shows.
        </li>
        <li>
          Number every table and figure, put the caption above a table and below a
          figure, and refer to each one in the text with <GuideCode>\ref</GuideCode>{" "}
          before it appears.
        </li>
        <li>
          Quote results to the significant figures your instrument justifies and always
          with an uncertainty: <GuideCode>{"\\SI{9.78 \\pm 0.12}{\\meter\\per\\second\\squared}"}</GuideCode>{" "}
          typesets as (9.78 ± 0.12) m s<sup>−2</sup> because the preamble sets{" "}
          <GuideCode>{"\\sisetup{separate-uncertainty=true}"}</GuideCode>; without it siunitx
          prints the compact form 9.78(12).
        </li>
        <li>
          Number equations you refer back to and cite them with{" "}
          <GuideCode>\eqref</GuideCode>, as the template does for the period equation.
        </li>
      </GuideUl>

      <GuideH2 id="customise">How to customise the lab report template</GuideH2>
      <GuideH3>Course, section and instructor fields</GuideH3>
      <GuideP>
        The title block lives in the <GuideCode>\author</GuideCode> and{" "}
        <GuideCode>\date</GuideCode> commands in the preamble. Edit the course code,
        section, instructor name and the two dates; delete the partner line if you
        worked alone.
      </GuideP>
      <GuidePre>{`\\author{Student Name \\\\ Lab Partner: Partner Name \\\\[6pt]
  \\normalsize CHEM 110, Section 04 \\\\
  \\normalsize Instructor: Dr.\\ Instructor Name}
\\date{Experiment performed: 14 March 2026 \\\\ Report submitted: \\today}`}</GuidePre>

      <GuideH3>Adding a data table with booktabs and siunitx</GuideH3>
      <GuideP>
        Copy the Results table and change the column specification. One{" "}
        <GuideCode>S</GuideCode> column per numeric quantity keeps the decimal points
        aligned; header cells that are not numbers go in braces.
      </GuideP>
      <GuidePre>{`\\begin{table}[htbp]
  \\centering
  \\caption{Titre volumes for three runs.}
  \\label{tab:titre}
  \\begin{tabular}{l S[table-format=2.2] S[table-format=2.2]}
    \\toprule
    Run & {Initial (\\si{\\milli\\liter})} & {Final (\\si{\\milli\\liter})} \\\\
    \\midrule
    1 & 0.00 & 24.35 \\\\
    2 & 0.00 & 24.40 \\\\
    \\bottomrule
  \\end{tabular}
\\end{table}`}</GuidePre>

      <GuideH3>Adding a plot</GuideH3>
      <GuideP>
        Replace the placeholder box in Figure 1 with{" "}
        <GuideCode>{"\\includegraphics[width=0.8\\textwidth]{plot.pdf}"}</GuideCode> after
        uploading the image, or draw the plot in LaTeX with pgfplots:
      </GuideP>
      <GuidePre>{`\\usepackage{pgfplots}
\\pgfplotsset{compat=1.18}
...
\\begin{tikzpicture}
  \\begin{axis}[xlabel={$L$ (m)}, ylabel={$T^2$ (s$^2$)}, width=0.8\\textwidth]
    \\addplot[only marks] table {data.dat};
    \\addplot[no marks, domain=0:1.2] {4.038*x};
  \\end{axis}
\\end{tikzpicture}`}</GuidePre>

      <GuideH3>Citing sources</GuideH3>
      <GuideP>
        The template uses a <GuideCode>thebibliography</GuideCode> environment, which
        needs no extra files: add a <GuideCode>\bibitem</GuideCode> and cite it with{" "}
        <GuideCode>\cite</GuideCode>. For longer reference lists switch to biblatex by
        adding <GuideCode>{"\\usepackage[style=ieee]{biblatex}"}</GuideCode> and{" "}
        <GuideCode>{"\\addbibresource{refs.bib}"}</GuideCode> to the preamble and replacing
        the environment with <GuideCode>\printbibliography</GuideCode>.
      </GuideP>

      <GuideH2 id="faq">Lab report template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
