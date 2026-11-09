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
    question: "Is this the official ECCV 2026 template?",
    answer:
      "No. The sample text describes ECCV's Springer LNCS single-column format, but the template itself approximates it with the standard article class at 11pt and 1 inch margins, so it compiles anywhere without extra files. ECCV submissions must use the official kit, based on Springer's llncs class, linked from the ECCV 2026 website. Draft here and move your sections into the kit before submitting.",
  },
  {
    question: "What is the ECCV 2026 page limit?",
    answer:
      "The template's abstract says 14 pages excluding references. Because the article-class layout here is not the LNCS page size, page counts in this draft will not match the official kit; check the ECCV 2026 call for papers and measure length in the official template.",
  },
  {
    question: "How do I convert a two-column CVPR paper to ECCV?",
    answer:
      "Paste the sections into the single-column layout, then resize figures relative to \\linewidth rather than \\columnwidth, turn figure* and table* floats into ordinary figure and table floats, and recheck tables that were split to fit a narrow column. The template's CVPR-to-ECCV Migration section is a reminder of this step.",
  },
  {
    question: "Does this ECCV template compile in Overleaf?",
    answer:
      "Yes, with pdfLaTeX. All packages are in TeX Live. Add a references.bib file, since the template ends with \\bibliography{references} and the plain style, and cite at least one entry.",
  },
];

export default function Eccv2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An ECCV 2026 LaTeX template for drafting</GuideH2>
      <GuideP>
        This ECCV 2026 LaTeX template is a single-column computer vision paper you can
        start writing in straight away in Overleaf, Octree or any TeX Live install.
        ECCV publishes in Springer&apos;s Lecture Notes in Computer Science format,
        and the template&apos;s sample text describes that format, but the file
        itself is an approximation: it uses the standard{" "}
        <GuideCode>article</GuideCode> class at 11 pt with 1 inch margins and Times,
        not Springer&apos;s <GuideCode>llncs</GuideCode> class. That keeps it
        dependency-free for drafting; the PDF you submit should come from the official
        ECCV kit.
      </GuideP>
      <GuideP>
        The title block lists three authors with numbered affiliations and a grouped
        email line in braces. The abstract ends with
        a bold Keywords line. The body covers Introduction, a short CVPR-to-ECCV
        Migration note about rescaling figures designed for two columns, a Method
        section with a two-layer network equation, Experiments with a{" "}
        <GuideCode>booktabs</GuideCode> comparison table (mAP and FPS against a
        baseline and prior work), and Conclusion, followed by a BibTeX bibliography in
        the <GuideCode>plain</GuideCode> style. <GuideCode>amsmath</GuideCode>,{" "}
        <GuideCode>graphicx</GuideCode> and <GuideCode>hyperref</GuideCode> are
        loaded. Because the layout is single column, it is also a convenient place to
        rework a paper that started life in a two-column format such as the{" "}
        <GuideLink href="/templates/cvpr-2026">CVPR 2026 template</GuideLink>.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[11pt]{article}"}</GuideCode>, single column, 1
          inch margins, Times
        </li>
        <li>Three authors, three affiliations and a grouped email line</li>
        <li>Abstract with a Keywords line</li>
        <li>Five sections, including a CVPR-to-ECCV migration note</li>
        <li>A booktabs comparison table and BibTeX with the plain style</li>
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
          Replace the title, authors, affiliations and keywords; for review, remove
          names and affiliations.
        </li>
        <li>Move the sections into the official ECCV kit for submission.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Size figures for one column.</strong> In a single-column paper,
        width is relative to <GuideCode>\linewidth</GuideCode>; two images side by
        side each take just under half:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
  \\centering
  \\includegraphics[width=0.48\\linewidth]{example-image-a}\\hfill
  \\includegraphics[width=0.48\\linewidth]{example-image-b}
  \\caption{Left: input. Right: our reconstruction.}
  \\label{fig:recon}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Anonymise the title block.</strong> Review is double blind, so replace
        the authors, affiliations and emails with a placeholder and keep the real
        block commented out:
      </GuideP>
      <GuidePre>{`\\author{Anonymous ECCV 2026 Submission \\\\[0.5em] Paper ID \\#1234}
% \\author{First Author$^{1}$ \\and Second Author$^{2,3}$ ...}`}</GuidePre>
      <GuideP>
        <strong>Reference equations and tables.</strong> The method equation uses{" "}
        <GuideCode>$$...$$</GuideCode>, which is unnumbered. Use{" "}
        <GuideCode>equation</GuideCode> and label the table so both can be cited in
        the text:
      </GuideP>
      <GuidePre>{`\\begin{equation}
  f(x) = \\mathrm{softmax}(W_2 \\cdot \\mathrm{ReLU}(W_1 x + b_1) + b_2)
  \\label{eq:mlp}
\\end{equation}
% in the table, after \\caption{...}: \\label{tab:sota}
Table~\\ref{tab:sota} reports results for the model in Eq.~\\eqref{eq:mlp}.`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/cvpr-2026">CVPR 2026</GuideLink>,{" "}
        <GuideLink href="/templates/icra-2026">ICRA 2026</GuideLink> and{" "}
        <GuideLink href="/templates/iclr-2026">ICLR 2026</GuideLink>. For dates, see
        the <GuideLink href="/conference-deadlines">conference deadlines page</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">ECCV 2026 template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
