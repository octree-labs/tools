import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideH3,
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
    question: "Is this the official NeurIPS 2027 style file?",
    answer:
      "No. NeurIPS requires neurips_2027.sty from the style kit linked on neurips.cc, which is not on TeX Live. This template reproduces the NeurIPS layout with the standard article class so you can start writing now, and the body (\\title, \\author with \\And, abstract, sections, checklist) is written in the official template's conventions so that replacing one preamble block with \\usepackage[preprint]{neurips_2027} is all it takes to switch.",
  },
  {
    question: "What do the preprint and final options do?",
    answer:
      "With no option, the official style anonymises the author block, adds line numbers and prints 'Submitted to ...' in the footer, which is what you upload for review. [preprint] shows the authors and prints 'Preprint. Under review.' for arXiv. [final] is the camera-ready version with the conference footer. This template emulates the [preprint] look; its comments show what to change for the anonymised submission.",
  },
  {
    question: "What is the NeurIPS page limit?",
    answer:
      "Recent NeurIPS calls allow nine content pages for the main text, with references, appendices and the paper checklist not counting toward the limit, and one extra page for the camera-ready. Confirm the number in the NeurIPS 2027 call for papers because it has changed in the past.",
  },
  {
    question: "Is the paper checklist mandatory?",
    answer:
      "Yes. Since 2021 every NeurIPS submission must include the paper checklist after the references and appendices, answering each question with Yes, No or NA and a short justification. The official template contains the complete list of questions with guidelines; copy it from neurips_2027.tex. The section in this template shows the expected format with eight representative items.",
  },
  {
    question: "How do I lay out four or more authors?",
    answer:
      "\\And places the next author block beside the previous one and \\AND starts a new row. Three blocks fit on one row if the affiliation lines are short; longer lines wrap to a second row automatically. For many authors with shared affiliations, list the names on one row and put the affiliations in a single block on the next row, as in many NeurIPS papers.",
  },
];

export default function Neurips2027Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is this NeurIPS 2027 template?</GuideH2>
      <GuideP>
        This is a NeurIPS 2027 style LaTeX paper that compiles with plain pdfLaTeX.
        NeurIPS submissions must use <GuideCode>neurips_2027.sty</GuideCode> from the
        style kit on neurips.cc, which is not distributed with TeX Live, so the
        template reproduces the NeurIPS layout with the{" "}
        <GuideCode>article</GuideCode> class and standard packages: US letter, 10 pt
        Times text on a 5.5 by 9 in text block, a 17 pt bold title, the side-by-side
        author block built with <GuideCode>\And</GuideCode>, a centred bold Abstract
        heading with the abstract indented half an inch on each side, numbered bold
        section headings, run-in bold paragraph headings, centred page numbers, the
        &quot;Preprint. Under review.&quot; first-page notice, natbib citations and
        a NeurIPS paper checklist section after the appendix.
      </GuideP>
      <GuideP>
        The sample paper is a short machine learning paper with a contribution list,
        Related work, Experimental setup with run-in paragraphs, two numbered
        equations, a <GuideCode>booktabs</GuideCode> table, a TikZ iso-loss figure, a
        Limitations section (which NeurIPS reviewers look for), Conclusion, four
        references, an appendix and eight checklist items in the official
        question/answer/justification format.
      </GuideP>

      <GuideH2 id="official">Switching to the official neurips_2027.sty</GuideH2>
      <GuideOl>
        <li>
          Download the style kit from the NeurIPS 2027 call for papers on neurips.cc
          and put <GuideCode>neurips_2027.sty</GuideCode> next to your file.
        </li>
        <li>
          Delete everything between the <GuideCode>EMULATION (begin)</GuideCode> and{" "}
          <GuideCode>EMULATION (end)</GuideCode> markers and replace it with one line:
        </li>
      </GuideOl>
      <GuidePre>{`\\documentclass{article}
\\usepackage[preprint]{neurips_2027}   % (none) = anonymous submission, [final] = camera-ready
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{hyperref}
\\usepackage{url}
\\usepackage{booktabs}
\\usepackage{amsfonts}
\\usepackage{nicefrac}
\\usepackage{microtype}
\\usepackage{xcolor}`}</GuidePre>
      <GuideOl>
        <li value={3}>
          Keep <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode>,{" "}
          <GuideCode>\maketitle</GuideCode>, the abstract and the sections exactly as
          they are; they use the same commands as the official template.
        </li>
        <li>
          Replace the hand-written bibliography with{" "}
          <GuideCode>\bibliographystyle{"{plainnat}"}</GuideCode> and{" "}
          <GuideCode>\bibliography{"{refs}"}</GuideCode>.
        </li>
        <li>
          Paste the complete checklist from <GuideCode>neurips_2027.tex</GuideCode>{" "}
          over the sample checklist section and answer every item.
        </li>
      </GuideOl>

      <GuideH2 id="walkthrough">Walkthrough of the emulation</GuideH2>
      <GuideH3>Author block</GuideH3>
      <GuidePre>{`\\author{%
  First Author \\\\
  Department of Computer Science \\\\
  Example University \\\\
  \\texttt{fauthor@example.edu}
  \\And
  Second Author \\\\
  ...
}`}</GuidePre>
      <GuideP>
        Each author is a centred <GuideCode>tabular</GuideCode>; <GuideCode>\And</GuideCode>{" "}
        ends one and starts the next on the same row, <GuideCode>\AND</GuideCode> moves
        to a new row. Email addresses are set in <GuideCode>\texttt</GuideCode>, as in
        the official style. For the anonymous submission, replace the whole block with{" "}
        <GuideCode>Anonymous Author(s)</GuideCode> and a placeholder affiliation.
      </GuideP>
      <GuideH3>Abstract and headings</GuideH3>
      <GuideP>
        The <GuideCode>abstract</GuideCode> environment prints the centred bold heading
        and indents the text with a <GuideCode>list</GuideCode>, matching the 0.5 in
        inset of the real style. <GuideCode>titlesec</GuideCode> sets 12 pt bold
        sections, 10 pt bold subsections and run-in bold paragraphs with the NeurIPS
        spacing.
      </GuideP>
      <GuideH3>Preprint notice</GuideH3>
      <GuideP>
        The redefined <GuideCode>\maketitle</GuideCode> prints &quot;Preprint. Under
        review.&quot; as an unmarked footnote on the first page. For an anonymised
        draft change that string to &quot;Submitted to 41st Conference on Neural
        Information Processing Systems (NeurIPS 2027). Do not distribute.&quot;
      </GuideP>
      <GuideH3>Citations</GuideH3>
      <GuideP>
        <GuideCode>natbib</GuideCode> is loaded with the <GuideCode>numbers</GuideCode>{" "}
        option, so <GuideCode>\citep</GuideCode> gives [1] and{" "}
        <GuideCode>\citet</GuideCode> gives &quot;Kaplan et al. [3]&quot;, the two
        forms NeurIPS papers use. The <GuideCode>\bibitem</GuideCode> entries carry
        author-year labels so <GuideCode>\citet</GuideCode> can print the names.
      </GuideP>

      <GuideH2 id="rules">NeurIPS formatting rules</GuideH2>
      <GuideUl>
        <li>Do not change margins, fonts or the text block; reviewers check.</li>
        <li>
          Nine content pages; references, appendices and the checklist are free.
        </li>
        <li>
          The checklist must be included after the references in the submitted PDF.
        </li>
        <li>
          Figures should be legible in black and white and have captions below;
          table captions go above.
        </li>
        <li>
          Anonymise: no author names, no acknowledgements, no identifying URLs in the
          review version.
        </li>
      </GuideUl>

      <GuideH2 id="errors">Common errors</GuideH2>
      <GuideUl>
        <li>
          <strong>&quot;Command \And already defined&quot;.</strong> You are compiling
          with the official style and the emulation block at the same time; delete
          the emulation.
        </li>
        <li>
          <strong>Third author drops to a new row.</strong> The row is too wide;
          shorten affiliation lines or accept the second row.
        </li>
        <li>
          <strong>Checklist counts toward the page limit.</strong> Only if it is placed
          before the references. Keep the order: body, references, appendix,
          checklist.
        </li>
        <li>
          <strong>Line numbers missing in the review PDF.</strong> They come from the
          official style with no option; the emulation does not add them.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile</GuideH2>
      <GuideP>
        In Octree, click <em>Open as template</em> and write with the live preview.
        Locally, run <GuideCode>pdflatex paper.tex</GuideCode> twice or{" "}
        <GuideCode>latexmk -pdf paper.tex</GuideCode>. XeLaTeX and LuaLaTeX also work.
      </GuideP>

      <GuideH2 id="comparison">Related templates</GuideH2>
      <GuideTable
        headers={["Template", "Venue", "Layout"]}
        rows={[
          [<strong key="n">NeurIPS 2027</strong>, "NeurIPS, ICLR, ICML drafts", "Single column, numeric citations"],
          [
            <GuideLink key="a" href="/templates/aaai-2027">
              AAAI 2027
            </GuideLink>,
            "AAAI",
            "Two columns, author-year citations",
          ],
          [
            <GuideLink key="e" href="/templates/emnlp-2026">
              EMNLP 2026
            </GuideLink>,
            "ACL, EMNLP, NAACL",
            "Two columns, ACL style",
          ],
          [
            <GuideLink key="p" href="/templates/conference-poster">
              Conference Poster
            </GuideLink>,
            "The poster session",
            "A0 beamerposter",
          ],
        ]}
      />
      <GuideP>
        NeurIPS usually takes abstracts in early or mid May with full papers a week
        later; see the{" "}
        <GuideLink href="/conference-deadlines">conference deadlines page</GuideLink>{" "}
        for the other venues.
      </GuideP>

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
