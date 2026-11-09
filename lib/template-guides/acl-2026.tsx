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
    question: "Is this the official ACL 2026 style?",
    answer:
      "No. It approximates the ACL look with the standard article class (11pt, two columns, Times, 0.75 inch margins) so it compiles anywhere. ARR and ACL submissions must use the official acl.sty and acl_natbib.bst from the ACL style files linked in the call for papers. Your sections, tables and citations carry over when you switch the preamble.",
  },
  {
    question: "What is the ACL 2026 page limit?",
    answer:
      "The template's sample text says 8 pages for long papers and 4 for short papers, excluding references, and that the Limitations section does not count towards the limit. Confirm both in the ACL 2026 and ARR calls for papers, which are the authority.",
  },
  {
    question: "Is the Limitations section required?",
    answer:
      "The template marks it as mandatory and places it as an unnumbered section after the Conclusion, followed by an Ethics Statement. Keep both headings and replace the placeholder text; check the current ARR guidelines for what reviewers expect in each.",
  },
  {
    question: "Does this ACL template compile in Overleaf?",
    answer:
      "Yes, with pdfLaTeX. All packages ship with TeX Live, including natbib and plainnat.bst. Add a references.bib file next to the .tex file and cite at least one entry, otherwise the References section stays empty.",
  },
];

export default function Acl2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An ACL 2026 LaTeX template for drafting</GuideH2>
      <GuideP>
        This ACL 2026 LaTeX template is a two-column NLP paper that compiles in
        Overleaf, Octree or any TeX Live install without extra files. It is an
        approximation of the ACL format rather than the official style: it uses the
        standard <GuideCode>article</GuideCode> class at 11 pt with the{" "}
        <GuideCode>twocolumn</GuideCode> option, Times through the{" "}
        <GuideCode>times</GuideCode> package, 0.75 inch margins and{" "}
        <GuideCode>microtype</GuideCode> for tighter line breaking. ARR and ACL
        submissions must be built with <GuideCode>acl.sty</GuideCode> from the official
        ACL style files, so draft here and switch the preamble before you submit.
      </GuideP>
      <GuideP>
        The sample paper follows the ACL Rolling Review structure: Introduction,
        Related Work, Method with a softmax equation, Experiments with a{" "}
        <GuideCode>booktabs</GuideCode> table of GLUE-style results, Conclusion, and
        the unnumbered Limitations and Ethics Statement sections that ACL papers
        carry at the end. Citations use <GuideCode>natbib</GuideCode> with the{" "}
        <GuideCode>plainnat</GuideCode> style, which gives the author-year{" "}
        <GuideCode>\citet</GuideCode> and <GuideCode>\citep</GuideCode> commands that
        the official <GuideCode>acl_natbib.bst</GuideCode> also supports, so your
        citation commands do not change when you move to the official files. For an
        ACL-family template that ships the official preamble as a comment block, see
        the <GuideLink href="/templates/emnlp-2026">EMNLP 2026 template</GuideLink>.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[11pt,twocolumn]{article}"}</GuideCode> with
          Times, <GuideCode>latexsym</GuideCode> and <GuideCode>microtype</GuideCode>
        </li>
        <li>Two authors with superscript affiliation markers and email lines</li>
        <li>Abstract, five numbered sections and a results table</li>
        <li>Unnumbered Limitations and Ethics Statement sections</li>
        <li>
          natbib with <GuideCode>{"\\bibliographystyle{plainnat}"}</GuideCode> and{" "}
          <GuideCode>{"\\bibliography{references}"}</GuideCode>
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>
          Add a <GuideCode>references.bib</GuideCode> file next to it and cite entries
          with <GuideCode>\citet</GuideCode> or <GuideCode>\citep</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX and BibTeX (<GuideCode>latexmk -pdf paper.tex</GuideCode>
          ). No system fonts are used, so XeLaTeX is not needed.
        </li>
        <li>
          Edit <GuideCode>\title</GuideCode> and the <GuideCode>\author</GuideCode>{" "}
          block. Authors are separated by <GuideCode>\and</GuideCode>; affiliations are
          plain lines after <GuideCode>{"\\\\[0.5em]"}</GuideCode>.
        </li>
        <li>
          Before submitting, move the text into the official ACL style files and
          compile there with <GuideCode>acl_natbib</GuideCode>.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Anonymise the author block for review.</strong> ARR review is double
        blind. Replace the two names and affiliations with a single line and keep the
        real block in a comment for the camera-ready:
      </GuideP>
      <GuidePre>{`\\author{Anonymous ACL submission}
% \\author{First Author$^1$ \\and Second Author$^2$ \\\\[0.5em]
% $^1$Affiliation 1, email@domain \\\\
% $^2$Affiliation 2, email@domain}`}</GuidePre>
      <GuideP>
        <strong>Number the equations.</strong> The sample method uses{" "}
        <GuideCode>$$...$$</GuideCode>, which produces an unnumbered display that you
        cannot reference. <GuideCode>amsmath</GuideCode> is loaded, so use{" "}
        <GuideCode>equation</GuideCode> with a label instead:
      </GuideP>
      <GuidePre>{`\\begin{equation}
  P(y \\mid x) = \\frac{\\exp(f(x,y))}{\\sum_{y'} \\exp(f(x,y'))}
  \\label{eq:softmax}
\\end{equation}
Equation~\\eqref{eq:softmax} defines the output distribution.`}</GuidePre>
      <GuideP>
        <strong>Place tables at the top of a column.</strong> In two-column papers{" "}
        <GuideCode>[h]</GuideCode> often fails and LaTeX moves the float anyway. Use{" "}
        <GuideCode>[t]</GuideCode> and put the caption above the table, as ACL papers
        do; for a wide table use <GuideCode>{"table*"}</GuideCode>:
      </GuideP>
      <GuidePre>{`\\begin{table*}[t]
\\centering
\\caption{Results on all benchmarks.}
\\label{tab:main}
\\begin{tabular}{lcccc}
\\toprule
Model & MNLI & SST-2 & QQP & QNLI \\\\
\\midrule
Baseline & 84.6 & 93.5 & 71.2 & 90.5 \\\\
Ours & \\textbf{87.2} & \\textbf{95.1} & \\textbf{72.8} & \\textbf{92.0} \\\\
\\bottomrule
\\end{tabular}
\\end{table*}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/emnlp-2026">EMNLP 2026</GuideLink>,{" "}
        <GuideLink href="/templates/interspeech-2026">Interspeech 2026</GuideLink> and{" "}
        <GuideLink href="/templates/neurips-2026">NeurIPS 2026</GuideLink>. For dates,
        see the <GuideLink href="/conference-deadlines">conference deadlines page</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">ACL 2026 template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
