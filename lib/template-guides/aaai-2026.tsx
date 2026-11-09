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
    question: "Is this the official AAAI 2026 style file?",
    answer:
      "No. It is a two-column AAAI-style draft built on the standard article class with Times, 0.75 inch margins and a redefined \\maketitle, so it compiles anywhere without extra files. AAAI papers must be produced with the style file and BibTeX style from the official AAAI author kit on aaai.org. Write here, then move your sections into the kit's preamble before you submit.",
  },
  {
    question: "How does the bibliography work?",
    answer:
      "A filecontents* block in the preamble writes a references.bib with one sample entry on the first compile, the Related Work section cites it, and the list is set with \\bibliographystyle{plainnat}, a natbib style in TeX Live. Replace the sample entry with your own, or delete the block and add your own references.bib (an existing file is never overwritten). The official AAAI author kit ships its own .bst, which you switch to when you move the paper into the kit.",
  },
  {
    question: "What is the AAAI 2026 page limit?",
    answer:
      "The template's own sample text says AAAI papers are limited to 7 pages of content plus additional pages for references only. Treat that as a reminder rather than the rule: the call for papers for the edition you submit to is the authority on page limits and appendices.",
  },
  {
    question: "Does this AAAI template work in Overleaf?",
    answer:
      "Yes. Every package it loads ships with TeX Live, so it compiles in Overleaf, Octree or a local install with pdfLaTeX, which is the Overleaf default. The sample bibliography is written from the file itself, so no extra files are needed.",
  },
];

export default function Aaai2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An AAAI 2026 LaTeX template for drafting</GuideH2>
      <GuideP>
        This AAAI 2026 LaTeX template is a two-column paper skeleton that compiles
        straight away in Overleaf, Octree or any TeX Live install. It is a drafting
        template, not the official AAAI style file: it uses the standard{" "}
        <GuideCode>article</GuideCode> class with the <GuideCode>letterpaper</GuideCode>{" "}
        and <GuideCode>twocolumn</GuideCode> options, Times, Helvetica and Courier via
        the <GuideCode>times</GuideCode>, <GuideCode>helvet</GuideCode> and{" "}
        <GuideCode>courier</GuideCode> packages, 0.75 inch margins, and a redefined{" "}
        <GuideCode>\maketitle</GuideCode> that prints the title and author block
        across both columns.
      </GuideP>
      <GuideP>
        The author is set to Anonymous Submission, as AAAI review is double blind,
        and the body walks through the sections an AI paper usually needs:
        Introduction, Related Work, Methodology with a numbered pseudocode block,
        Experiments with a <GuideCode>booktabs</GuideCode> results table, Conclusion
        and an unnumbered Acknowledgments section. The preamble also loads{" "}
        <GuideCode>natbib</GuideCode>, <GuideCode>caption</GuideCode>,{" "}
        <GuideCode>amsmath</GuideCode> and <GuideCode>hyperref</GuideCode>. Use it to
        get words on the page, then paste the sections into the official author kit
        from aaai.org for the PDF you submit. If you are targeting the next edition,
        the <GuideLink href="/templates/aaai-2027">AAAI 2027 template</GuideLink>{" "}
        reproduces the author-kit layout more closely.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[letterpaper,twocolumn]{article}"}</GuideCode>{" "}
          with 0.75 inch margins and a full-width title block
        </li>
        <li>Anonymous author line and an abstract placeholder</li>
        <li>
          An <GuideCode>algorithm</GuideCode> float written with the{" "}
          <GuideCode>algorithmic</GuideCode> package (numbered lines,{" "}
          <GuideCode>\STATE</GuideCode>, <GuideCode>\WHILE</GuideCode>)
        </li>
        <li>
          A <GuideCode>booktabs</GuideCode> table with <GuideCode>\toprule</GuideCode>,{" "}
          <GuideCode>\midrule</GuideCode> and <GuideCode>\bottomrule</GuideCode>
        </li>
        <li>
          BibTeX with <GuideCode>{"\\bibliographystyle{plainnat}"}</GuideCode> and a
          sample <GuideCode>references.bib</GuideCode> written by a{" "}
          <GuideCode>{"filecontents*"}</GuideCode> block
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree with a live preview, or{" "}
          <em>View Source</em> and paste the code into a new Overleaf project or a local{" "}
          <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>
          Replace the sample entry in the <GuideCode>{"filecontents*"}</GuideCode>{" "}
          block with your references, or add your own{" "}
          <GuideCode>references.bib</GuideCode> and delete the block.
        </li>
        <li>
          Compile with pdfLaTeX and BibTeX (<GuideCode>latexmk -pdf paper.tex</GuideCode>
          ). The template uses Type 1 Times through the <GuideCode>times</GuideCode>{" "}
          package, so XeLaTeX and LuaLaTeX are not needed.
        </li>
        <li>
          Replace <GuideCode>\title</GuideCode>, the abstract and each section. Keep{" "}
          <GuideCode>{"\\author{Anonymous Submission}"}</GuideCode> for review.
        </li>
        <li>
          Before submitting, move the text into the official AAAI author kit and
          compile it there.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Cite with natbib.</strong> The draft uses{" "}
        <GuideCode>plainnat</GuideCode>; cite with <GuideCode>\citet</GuideCode>{" "}
        (Smith et al. (2024)) or <GuideCode>\citep</GuideCode> ((Smith et al.,
        2024)):
      </GuideP>
      <GuidePre>{`As shown by \\citet{smith2024}, ... \\citep{smith2024}.

\\bibliographystyle{plainnat}
\\bibliography{references}`}</GuidePre>
      <GuideP>
        <strong>Write pseudocode with the loaded package.</strong> The template uses{" "}
        <GuideCode>algorithmic</GuideCode>, whose commands are upper case.{" "}
        <GuideCode>\REQUIRE</GuideCode> and <GuideCode>\ENSURE</GuideCode> print
        Require and Ensure lines, a tidier alternative to the bold Input and Output
        lines in the sample:
      </GuideP>
      <GuidePre>{`\\begin{algorithm}[t]
\\caption{Greedy selection}
\\label{alg:greedy}
\\begin{algorithmic}[1]
\\REQUIRE candidates $C$, budget $k$
\\ENSURE selected set $S$
\\STATE $S \\gets \\emptyset$
\\FOR{$i = 1$ \\TO $k$}
  \\STATE $c \\gets \\arg\\max_{c \\in C} f(S \\cup \\{c\\})$
  \\STATE $S \\gets S \\cup \\{c\\}$
\\ENDFOR
\\RETURN $S$
\\end{algorithmic}
\\end{algorithm}`}</GuidePre>
      <GuideP>
        <strong>Span a figure across both columns.</strong> Use the starred float
        and size it against <GuideCode>\textwidth</GuideCode>; two-column floats
        land at the top of a page:
      </GuideP>
      <GuidePre>{`\\begin{figure*}[t]
  \\centering
  \\includegraphics[width=0.9\\textwidth]{overview.pdf}
  \\caption{Overview of the proposed method.}
  \\label{fig:overview}
\\end{figure*}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/aaai-2027">AAAI 2027</GuideLink>,{" "}
        <GuideLink href="/templates/icml-2026">ICML 2026</GuideLink> and{" "}
        <GuideLink href="/templates/iclr-2026">ICLR 2026</GuideLink>. For dates, see
        the <GuideLink href="/conference-deadlines">conference deadlines page</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">AAAI 2026 template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
