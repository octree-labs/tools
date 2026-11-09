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
    question: "Is this the official CVPR 2026 author kit?",
    answer:
      "No. It is a two-column CVPR-style draft on the standard article class (10pt, letter paper, Times, 0.75 inch margins) that compiles anywhere. CVPR submissions must be built with the official author kit linked from the CVPR 2026 website, which adds the review ruler, paper ID and the required bibliography style. Draft here, then move your sections into the kit.",
  },
  {
    question: "What is the CVPR 2026 page limit?",
    answer:
      "The template's sample text says papers must not exceed 8 pages excluding references. Check the CVPR 2026 author guidelines for the exact rule, including how supplementary material is handled.",
  },
  {
    question: "Do I need the Compute and Environmental Impact section?",
    answer:
      "The template includes it and its sample text says all submissions must state the compute resources used. Requirements like this change between years, so confirm in the CVPR 2026 call for papers and author guidelines before relying on it.",
  },
  {
    question: "Does this CVPR template compile in Overleaf?",
    answer:
      "Yes, with pdfLaTeX. All packages are in TeX Live. Create a references.bib file next to the .tex file, because the template ends with \\bibliography{references}, and cite at least one entry so the References section is not empty.",
  },
];

export default function Cvpr2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A CVPR 2026 LaTeX template for drafting</GuideH2>
      <GuideP>
        This CVPR 2026 LaTeX template is a two-column computer vision paper that
        compiles immediately in Overleaf, Octree or any TeX Live install. It is a
        drafting template rather than the official CVPR author kit: it uses the
        standard <GuideCode>article</GuideCode> class with the{" "}
        <GuideCode>10pt</GuideCode>, <GuideCode>twocolumn</GuideCode> and{" "}
        <GuideCode>letterpaper</GuideCode> options, Times through the{" "}
        <GuideCode>times</GuideCode> package and 0.75 inch margins, with the title
        and authors spanning both columns above the abstract.
      </GuideP>
      <GuideP>
        The sample paper has the sections a CVPR submission usually contains:
        Introduction, Related Work, a Method section with a multi-task detection loss
        (classification, box and mask terms), Experiments with a{" "}
        <GuideCode>booktabs</GuideCode> table of AP, AP50 and AP75 on COCO-style
        results, a Compute and Environmental Impact statement, and Conclusion. The
        preamble also loads <GuideCode>amsmath</GuideCode>,{" "}
        <GuideCode>amssymb</GuideCode>, <GuideCode>graphicx</GuideCode>,{" "}
        <GuideCode>xcolor</GuideCode> and <GuideCode>hyperref</GuideCode>, and the
        bibliography uses BibTeX with the <GuideCode>plain</GuideCode> style. The
        official kit adds a line-numbered review ruler, a paper ID and its own
        bibliography style, so use this template to write and iterate on content,
        then paste your sections into the kit from the CVPR 2026 website for the PDF
        you submit. If you are also targeting ECCV, the{" "}
        <GuideLink href="/templates/eccv-2026">ECCV 2026 template</GuideLink> is
        single column, and its sample text covers moving a two-column paper across.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[10pt,twocolumn,letterpaper]{article}"}</GuideCode>{" "}
          with 0.75 inch margins and Times
        </li>
        <li>Two authors with superscript affiliations and emails</li>
        <li>Abstract and six sections, including Compute and Environmental Impact</li>
        <li>A detection loss equation and a booktabs results table</li>
        <li>BibTeX with <GuideCode>{"\\bibliographystyle{plain}"}</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>
          Create <GuideCode>references.bib</GuideCode> and cite entries with{" "}
          <GuideCode>\cite</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX and BibTeX (<GuideCode>latexmk -pdf paper.tex</GuideCode>
          ).
        </li>
        <li>
          Replace the title (<GuideCode>CVPR 2026 Author Guidelines</GuideCode> in the
          sample) and the author block; use an anonymous author line for review.
        </li>
        <li>Move the finished sections into the official CVPR author kit.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Anonymise for review.</strong> CVPR review is double blind. Replace the
        author block and keep the real one commented out:
      </GuideP>
      <GuidePre>{`\\author{Anonymous CVPR submission \\\\[0.5em] Paper ID 1234}
% \\author{First Author$^1$ \\and Second Author$^2$ \\\\[0.5em] ...}`}</GuidePre>
      <GuideP>
        <strong>Add a wide qualitative figure.</strong> Load{" "}
        <GuideCode>{"\\usepackage{subcaption}"}</GuideCode> and use the starred
        float so the panels span both columns:
      </GuideP>
      <GuidePre>{`\\begin{figure*}[t]
  \\centering
  \\begin{subfigure}{0.32\\textwidth}
    \\includegraphics[width=\\linewidth]{example-image-a}
    \\caption{Input}
  \\end{subfigure}\\hfill
  \\begin{subfigure}{0.32\\textwidth}
    \\includegraphics[width=\\linewidth]{example-image-b}
    \\caption{Baseline}
  \\end{subfigure}\\hfill
  \\begin{subfigure}{0.32\\textwidth}
    \\includegraphics[width=\\linewidth]{example-image-c}
    \\caption{Ours}
  \\end{subfigure}
  \\caption{Qualitative comparison.}
  \\label{fig:qualitative}
\\end{figure*}`}</GuidePre>
      <GuideP>
        <strong>Number the loss.</strong> The sample uses <GuideCode>$$...$$</GuideCode>,
        which cannot be referenced. Switch to <GuideCode>equation</GuideCode>:
      </GuideP>
      <GuidePre>{`\\begin{equation}
  \\mathcal{L}_{total} = \\mathcal{L}_{cls} + \\lambda_{box}\\mathcal{L}_{box}
    + \\lambda_{mask}\\mathcal{L}_{mask}
  \\label{eq:loss}
\\end{equation}
We minimise Eq.~\\eqref{eq:loss} with SGD.`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/eccv-2026">ECCV 2026</GuideLink>,{" "}
        <GuideLink href="/templates/icra-2026">ICRA 2026</GuideLink> and{" "}
        <GuideLink href="/templates/neurips-2026">NeurIPS 2026</GuideLink>. For dates,
        see the <GuideLink href="/conference-deadlines">conference deadlines page</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">CVPR 2026 template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
