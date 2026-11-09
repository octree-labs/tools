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
    question: "Is this the official Interspeech 2026 template?",
    answer:
      "No. It approximates the Interspeech layout with the standard article class (A4, 11pt, two columns, Times, 0.75 inch margins) and a redefined \\maketitle, so it compiles anywhere. Interspeech provides an official LaTeX paper kit through the conference website; move your sections into it before submitting.",
  },
  {
    question: "What is the Interspeech 2026 page limit?",
    answer:
      "The template's sample text says a maximum of 4 pages of technical content plus up to 2 pages for references only. Check the Interspeech 2026 paper submission guidelines for the current rule; because this draft does not use the official style, measure length in the official kit.",
  },
  {
    question: "How long should the abstract be?",
    answer:
      "The template's abstract says 100 to 200 words. Keep it to one paragraph without citations, and follow it with the Index Terms line.",
  },
  {
    question: "Does this Interspeech template compile in Overleaf?",
    answer:
      "Yes, with pdfLaTeX. All packages, including IEEEtran.bst for the bibliography, are in TeX Live. Add a references.bib file and cite at least one entry so the reference list is not empty.",
  },
];

export default function Interspeech2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An Interspeech 2026 LaTeX template for drafting</GuideH2>
      <GuideP>
        This Interspeech 2026 LaTeX template is a two-column speech and language
        processing paper that compiles immediately in Overleaf, Octree or any TeX
        Live install. It is a drafting approximation rather than the official
        Interspeech kit: it uses the standard <GuideCode>article</GuideCode> class on
        A4 paper at 11 pt with the <GuideCode>twocolumn</GuideCode> option, Times
        through the <GuideCode>times</GuideCode> package and 0.75 inch margins, with{" "}
        <GuideCode>\maketitle</GuideCode> redefined to print a compact title, author
        and affiliation block across both columns.
      </GuideP>
      <GuideP>
        The sample paper follows the shape of an Interspeech submission. The abstract
        is followed by a bold Index Terms line (speech recognition, human-computer
        interaction, computational paralinguistics). The body has Introduction,
        Related Work, a Method section with a numbered sinusoidal signal model,
        Experiments with a <GuideCode>booktabs</GuideCode> table of word error rate on
        LibriSpeech test-clean and test-other, a Multimedia Appendix section showing
        where to link anonymised audio demos, and Conclusions. References use BibTeX
        with the <GuideCode>IEEEtran</GuideCode> style, which gives numbered
        references, and the preamble loads <GuideCode>amsmath</GuideCode>,{" "}
        <GuideCode>graphicx</GuideCode> and <GuideCode>hyperref</GuideCode>. Use it
        to write and iterate quickly, for example while experiments are still
        running, and then move the text, tables and references into the official
        Interspeech 2026 paper kit from the conference website for the PDF you
        submit. For text-focused NLP venues, see the{" "}
        <GuideLink href="/templates/acl-2026">ACL 2026 template</GuideLink>.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[a4paper,11pt,twocolumn]{article}"}</GuideCode>{" "}
          with a full-width title block
        </li>
        <li>Two authors with numbered affiliations and an email line</li>
        <li>Abstract and an Index Terms line</li>
        <li>A numbered equation and a WER results table</li>
        <li>A Multimedia Appendix section for anonymised demo links</li>
        <li>BibTeX with the IEEEtran style</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>
          Create <GuideCode>references.bib</GuideCode> and cite with{" "}
          <GuideCode>\cite</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX and BibTeX (<GuideCode>latexmk -pdf paper.tex</GuideCode>
          ).
        </li>
        <li>
          Edit the title, authors and Index Terms; anonymise the author block for
          review.
        </li>
        <li>Move the content into the official Interspeech 2026 kit to submit.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Anonymise the author block.</strong> Keep the real authors in a
        comment for the camera-ready version:
      </GuideP>
      <GuidePre>{`\\author{Anonymous submission to Interspeech 2026}
% \\author{
%   Author Name$^1$, Co-author Name$^2$ \\\\ ...
% }`}</GuidePre>
      <GuideP>
        <strong>Compress citation ranges.</strong> With the IEEEtran style,{" "}
        <GuideCode>{"\\cite{a,b,c}"}</GuideCode> prints [1, 2, 3]. Load the{" "}
        <GuideCode>cite</GuideCode> package to sort and compress them into a range:
      </GuideP>
      <GuidePre>{`\\usepackage{cite}   % in the preamble

Recent end-to-end systems \\cite{smith2024,knuth1984} ...`}</GuidePre>
      <GuideP>
        <strong>Add a spectrogram figure.</strong> Size single-column figures with{" "}
        <GuideCode>\columnwidth</GuideCode> and place them at the top of a column:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
  \\centering
  \\includegraphics[width=\\columnwidth]{example-image-a}
  \\caption{Log-mel spectrograms of a test utterance before and after enhancement.}
  \\label{fig:spec}
\\end{figure}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/acl-2026">ACL 2026</GuideLink>,{" "}
        <GuideLink href="/templates/icra-2026">ICRA 2026</GuideLink> and{" "}
        <GuideLink href="/templates/ieee-conference">IEEE conference</GuideLink>. For
        dates, see the{" "}
        <GuideLink href="/conference-deadlines">conference deadlines page</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Interspeech 2026 template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
