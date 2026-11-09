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
    question: "Is this the official ICLR 2026 style file?",
    answer:
      "No. It is a single-column ICLR-style draft on the standard article class (11pt, 1 inch margins, Times) that compiles anywhere. ICLR submissions must use the official ICLR 2026 style files linked from the call for papers, which set the exact layout and the anonymous header. Write and iterate here, then move the sections into the official template.",
  },
  {
    question: "What is the ICLR 2026 page limit?",
    answer:
      "This template does not state one. ICLR sets the limit for the main text, and whether the reproducibility and ethics statements count towards it, in the call for papers for each year, so check the ICLR 2026 call before you trim.",
  },
  {
    question: "Is the reproducibility statement required?",
    answer:
      "The template's own text says authors are encouraged to include one, and places it as an unnumbered section after the Conclusion. Follow the ICLR 2026 author guide for its exact status and position.",
  },
  {
    question: "Does this ICLR template compile in Overleaf?",
    answer:
      "Yes, with pdfLaTeX. All packages, including natbib and plainnat.bst, are in TeX Live. Add a references.bib file next to the .tex file and cite at least one entry so the References section is not empty.",
  },
];

export default function Iclr2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An ICLR 2026 LaTeX template for drafting</GuideH2>
      <GuideP>
        This ICLR 2026 LaTeX template is a single-column machine learning paper that
        compiles immediately in Overleaf, Octree or any TeX Live install. It is a
        drafting template, not the official ICLR style file: it uses the standard{" "}
        <GuideCode>article</GuideCode> class at 11 pt with 1 inch margins and Times,
        which gives a page that looks broadly like an ICLR paper without the
        conference&apos;s own <GuideCode>.sty</GuideCode> file.
      </GuideP>
      <GuideP>
        The author block reproduces the familiar ICLR example authors, Antiquark of
        Cranberry-Lemon University with a <GuideCode>\thanks</GuideCode> footnote
        and two co-authors joined with <GuideCode>\and</GuideCode>, so you can see
        how names, departments, addresses and grouped emails are laid out. The
        abstract mentions OpenReview, where ICLR reviews are public. The body has
        Introduction, Related Work, a Method section with a numbered layer equation,
        Experiments with a <GuideCode>booktabs</GuideCode> table comparing accuracy and
        parameter count, Conclusion, and an unnumbered Reproducibility Statement
        pointing to code and an appendix. Citations use{" "}
        <GuideCode>natbib</GuideCode> with the <GuideCode>plainnat</GuideCode> style,
        so <GuideCode>\citet</GuideCode> and <GuideCode>\citep</GuideCode> produce
        author-year citations, the convention ICLR papers follow, and your citation
        commands carry over unchanged to the official template.{" "}
        <GuideCode>amsmath</GuideCode>, <GuideCode>graphicx</GuideCode>,{" "}
        <GuideCode>url</GuideCode> and <GuideCode>hyperref</GuideCode> are loaded.
        Draft here, then paste your sections into the official ICLR 2026 style files
        for the version you upload.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[11pt]{article}"}</GuideCode>, single column, Times
        </li>
        <li>Multi-author block with a footnote and grouped emails</li>
        <li>Abstract and five numbered sections</li>
        <li>A numbered equation and a booktabs results table</li>
        <li>An unnumbered Reproducibility Statement</li>
        <li>natbib with <GuideCode>plainnat</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>
          Create <GuideCode>references.bib</GuideCode> and cite with{" "}
          <GuideCode>\citet</GuideCode> and <GuideCode>\citep</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX and BibTeX (<GuideCode>latexmk -pdf paper.tex</GuideCode>
          ).
        </li>
        <li>
          Replace the sample authors; for review, use an anonymous author line.
        </li>
        <li>Move the sections into the official ICLR 2026 template to submit.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Anonymise for OpenReview.</strong> Replace the author block and keep
        the real one in a comment for the camera-ready:
      </GuideP>
      <GuidePre>{`\\author{Anonymous authors \\\\ Paper under double-blind review}
% \\author{ Antiquark ... }`}</GuidePre>
      <GuideP>
        <strong>Add the appendix the reproducibility statement mentions.</strong>{" "}
        <GuideCode>\appendix</GuideCode> switches section numbering to letters, so the
        first appendix section is Appendix A:
      </GuideP>
      <GuidePre>{`\\bibliographystyle{plainnat}
\\bibliography{references}

\\appendix
\\section{Hyperparameters}\\label{app:hparams}
\\begin{tabular}{lc}
\\toprule
Hyperparameter & Value \\\\
\\midrule
Learning rate & $3 \\times 10^{-4}$ \\\\
Batch size & 256 \\\\
\\bottomrule
\\end{tabular}`}</GuidePre>
      <GuideP>
        <strong>Reference the appendix instead of hard-coding it.</strong> The sample
        text says &quot;Appendix A&quot; literally; with a label, the reference updates
        if you reorder appendices:
      </GuideP>
      <GuidePre>{`All hyperparameters are listed in Appendix~\\ref{app:hparams}.`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/neurips-2026">NeurIPS 2026</GuideLink>,{" "}
        <GuideLink href="/templates/icml-2026">ICML 2026</GuideLink> and{" "}
        <GuideLink href="/templates/aaai-2026">AAAI 2026</GuideLink>. For dates, see
        the <GuideLink href="/conference-deadlines">conference deadlines page</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">ICLR 2026 template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
