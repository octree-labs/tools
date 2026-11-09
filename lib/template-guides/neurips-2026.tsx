import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "./ui";

const faq: GuideFaqItem[] = [
  {
    question: "Is this the official NeurIPS 2026 style file?",
    answer:
      "No. This is a NeurIPS-style draft built on the standard article class with Times, 1 inch margins and natbib, so it compiles anywhere without extra files. The NeurIPS submission must use the official style file from the style kit linked in the call for papers on neurips.cc. Because the body uses the same commands (\\title, \\author, abstract, sections, \\bibliographystyle{plainnat}), switching is mostly a preamble change.",
  },
  {
    question: "Does the NeurIPS template work in Overleaf?",
    answer:
      "Yes. It compiles with pdfLaTeX, the Overleaf default, and uses only packages that ship with TeX Live. Add a references.bib file next to the .tex file, because the template ends with \\bibliography{references}.",
  },
  {
    question: "Where does the NeurIPS paper checklist go?",
    answer:
      "In this template it is a section after the references and \\appendix, which is where NeurIPS asks for it. The six items here show the answer format only. Copy the complete, current checklist from the official NeurIPS 2026 style kit and answer every question.",
  },
  {
    question: "What is the NeurIPS 2026 page limit?",
    answer:
      "The sample abstract in this template mentions nine pages of main content with references and the checklist not counted, which matches recent NeurIPS calls. Page limits can change between years, so confirm the number in the official NeurIPS 2026 call for papers before you submit.",
  },
  {
    question: "Should I use \\citep or \\citet?",
    answer:
      "Both are available because natbib is loaded. \\citet{key} gives a textual citation ('Smith et al. (2024)') for use as part of a sentence, and \\citep{key} gives a parenthetical one. The plainnat bibliography style supports both.",
  },
];

export default function Neurips2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A NeurIPS 2026 LaTeX template for drafting</GuideH2>
      <GuideP>
        This NeurIPS template gives you a NeurIPS-style machine learning paper that
        compiles straight away in Overleaf, Octree or any TeX Live install. It is a
        drafting template, not the official style file: it uses the standard{" "}
        <GuideCode>article</GuideCode> class at 11 pt with the{" "}
        <GuideCode>times</GuideCode> font, 1 inch margins and no paragraph indentation,
        plus the packages most NeurIPS papers load (<GuideCode>hyperref</GuideCode>,{" "}
        <GuideCode>booktabs</GuideCode>, <GuideCode>amsmath</GuideCode>,{" "}
        <GuideCode>nicefrac</GuideCode>, <GuideCode>microtype</GuideCode> and{" "}
        <GuideCode>natbib</GuideCode>).
      </GuideP>
      <GuideP>
        The sample paper follows the shape reviewers expect: title and single author
        block with a <GuideCode>\thanks</GuideCode> footnote, abstract, Introduction,
        Related Work, Method with a numbered equation, Experiments with a{" "}
        <GuideCode>booktabs</GuideCode> results table, Conclusion, a{" "}
        <GuideCode>plainnat</GuideCode> bibliography and a NeurIPS Paper Checklist
        section after <GuideCode>\appendix</GuideCode>. Write your content here, then
        move it into the official NeurIPS 2026 style kit from{" "}
        <GuideLink href="https://neurips.cc" external>
          neurips.cc
        </GuideLink>{" "}
        for the submission PDF, which takes a few minutes because the commands are the
        same. Next year&apos;s version is the{" "}
        <GuideLink href="/templates/neurips-2027">NeurIPS 2027 template</GuideLink>.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title, author block with affiliation and email, and an author footnote</li>
        <li>Abstract and five numbered sections</li>
        <li>A display equation using <GuideCode>amsfonts</GuideCode> blackboard bold</li>
        <li>A results table with <GuideCode>\toprule</GuideCode>, <GuideCode>\midrule</GuideCode> and <GuideCode>\bottomrule</GuideCode></li>
        <li>natbib with the <GuideCode>plainnat</GuideCode> style</li>
        <li>A NeurIPS Paper Checklist section with six example answers</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>
          Create <GuideCode>references.bib</GuideCode> next to it with your BibTeX
          entries, and cite them with <GuideCode>\citet</GuideCode> or{" "}
          <GuideCode>\citep</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX and BibTeX, for example{" "}
          <GuideCode>latexmk -pdf paper.tex</GuideCode>. No Unicode fonts are needed,
          so XeLaTeX and LuaLaTeX bring no benefit here.
        </li>
        <li>
          Edit <GuideCode>\title</GuideCode> and <GuideCode>\author</GuideCode> at the
          top of the preamble; for the anonymous review version, replace the author
          block with <GuideCode>Anonymous Author(s)</GuideCode>.
        </li>
        <li>
          Before submitting, move the content into the official style file and paste
          the full checklist from the official kit.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Add more authors.</strong> The template has one author. The official
        style separates author blocks with <GuideCode>\And</GuideCode>; in this
        article-class draft, use the standard <GuideCode>\and</GuideCode> instead:
      </GuideP>
      <GuidePre>{`\\author{
  First Author \\\\ University A \\\\ \\texttt{first@a.edu}
  \\and
  Second Author \\\\ Lab B \\\\ \\texttt{second@b.org}
}`}</GuidePre>
      <GuideP>
        <strong>Add a figure.</strong> <GuideCode>graphicx</GuideCode> is already
        loaded. NeurIPS papers put figure captions below the figure and table captions
        above the table, as in the sample table:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
  \\centering
  \\includegraphics[width=0.8\\linewidth]{example-image}
  \\caption{Training loss over time.}
  \\label{fig:loss}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Answer the checklist properly.</strong> Each item takes an answer and a
        short justification. Keep the format of the sample items and add the
        justification on the same line:
      </GuideP>
      <GuidePre>{`\\item \\textbf{Limitations:} Did you describe the limitations of your work?
  \\textbf{[Yes]} Justification: see Section~5.`}</GuidePre>

      <GuideH2 id="comparison">Related conference templates</GuideH2>
      <GuideTable
        headers={["Template", "Layout"]}
        rows={[
          [<strong key="n">NeurIPS 2026</strong>, "Single column, natbib, checklist"],
          [
            <GuideLink key="n7" href="/templates/neurips-2027">
              NeurIPS 2027
            </GuideLink>,
            "Single column, closer NeurIPS layout emulation",
          ],
          [
            <GuideLink key="i" href="/templates/icml-2026">
              ICML 2026
            </GuideLink>,
            "Two columns, algorithm environment",
          ],
          [
            <GuideLink key="l" href="/templates/iclr-2026">
              ICLR 2026
            </GuideLink>,
            "Single column, reproducibility statement",
          ],
        ]}
      />
      <GuideP>
        For submission dates, see the{" "}
        <GuideLink href="/conference-deadlines">conference deadlines page</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">NeurIPS template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
