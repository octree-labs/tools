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
    question: "Is this the official ICML 2026 style file?",
    answer:
      "No. It is a two-column ICML-style draft on the standard article class with Times and 0.75 inch margins, so it compiles anywhere without extra files. ICML submissions must use the official style file and example paper from the author kit linked in the call for papers on icml.cc, which has its own title and author commands. Write and iterate here, then move the sections into the official kit.",
  },
  {
    question: "Does this ICML template compile in Overleaf?",
    answer:
      "Yes, with pdfLaTeX, the Overleaf default. Add a references.bib file next to the .tex file because the template ends with \\bibliography{references}. All packages ship with TeX Live, including the older subfigure package.",
  },
  {
    question: "How do I make a figure or table span both columns?",
    answer:
      "Use the starred environments: \\begin{figure*}[t] ... \\end{figure*} or \\begin{table*}[t] ... \\end{table*}, with widths given relative to \\textwidth. Two-column floats can only appear at the top of a page, usually the page after where they are defined.",
  },
  {
    question: "What is the ICML 2026 page limit?",
    answer:
      "The sample abstract in this template mentions eight pages for the main text with references and appendices unlimited, which matches recent ICML calls. Confirm the exact limit and the rules for the camera-ready in the official ICML 2026 call for papers.",
  },
  {
    question: "Why does the abstract span the full page width?",
    answer:
      "It does not; only the title and authors do. The template redefines \\maketitle to print the title block inside \\twocolumn[...], which typesets it across both columns, and the abstract then starts in the left column as in ICML papers.",
  },
];

export default function Icml2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An ICML 2026 LaTeX template for drafting</GuideH2>
      <GuideP>
        This ICML 2026 template is a two-column machine learning paper that compiles
        immediately in Overleaf, Octree or any TeX Live install. It is a drafting
        template rather than the official style file: it uses the standard{" "}
        <GuideCode>article</GuideCode> class with the <GuideCode>twocolumn</GuideCode>{" "}
        option at 10 pt, the <GuideCode>times</GuideCode> font and 0.75 inch margins, and
        redefines <GuideCode>\maketitle</GuideCode> so the title and author block span
        both columns above the abstract, as in ICML papers.
      </GuideP>
      <GuideP>
        The preamble loads what ICML papers typically need:{" "}
        <GuideCode>algorithm</GuideCode> and <GuideCode>algorithmic</GuideCode> for
        pseudocode, <GuideCode>booktabs</GuideCode> for tables,{" "}
        <GuideCode>subfigure</GuideCode> for side-by-side panels,{" "}
        <GuideCode>amsmath</GuideCode> and <GuideCode>hyperref</GuideCode>. The sample
        paper has a three-author block with numbered affiliations and an equal
        contribution note, an abstract, Introduction, Related Work, a Method section
        with a regularised loss, an Experiments table, an Accessibility and
        Reproducibility section and a <GuideCode>plain</GuideCode> BibTeX
        bibliography. Draft here, then move the sections into the official ICML 2026
        author kit from{" "}
        <GuideLink href="https://icml.cc" external>
          icml.cc
        </GuideLink>{" "}
        for the submitted PDF.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Two-column 10 pt layout with a full-width title block</li>
        <li>Three authors with superscript affiliations and an equal contribution marker</li>
        <li>Abstract and six sections, including Accessibility and Reproducibility</li>
        <li>A display equation and a <GuideCode>booktabs</GuideCode> results table</li>
        <li>
          <GuideCode>algorithm</GuideCode>/<GuideCode>algorithmic</GuideCode> loaded for
          pseudocode
        </li>
        <li>BibTeX with the <GuideCode>plain</GuideCode> style</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>
          Create <GuideCode>references.bib</GuideCode> next to the file and cite entries
          with <GuideCode>\cite</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX and BibTeX (<GuideCode>latexmk -pdf paper.tex</GuideCode>).
          The template needs no system fonts, so XeLaTeX or LuaLaTeX are not required.
        </li>
        <li>
          Edit <GuideCode>\title</GuideCode> and the <GuideCode>\author</GuideCode> block
          in the preamble. For the double-blind review version, remove names and
          affiliations.
        </li>
        <li>
          Before submitting, copy your sections into the official ICML 2026 example
          paper and use its bibliography style.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Write pseudocode.</strong> The <GuideCode>algorithmic</GuideCode>{" "}
        package uses upper-case commands. A floating algorithm that fits one column:
      </GuideP>
      <GuidePre>{`\\begin{algorithm}[tb]
  \\caption{SGD with weight decay}
  \\label{alg:sgd}
  \\begin{algorithmic}
    \\STATE {\\bfseries Input:} data $\\{(x_i, y_i)\\}_{i=1}^{n}$, step size $\\eta$
    \\FOR{$t = 1$ {\\bfseries to} $T$}
      \\STATE Sample $i$ uniformly from $\\{1, \\dots, n\\}$
      \\STATE $\\theta \\leftarrow \\theta - \\eta \\nabla_\\theta \\ell(f_\\theta(x_i), y_i)$
    \\ENDFOR
  \\end{algorithmic}
\\end{algorithm}`}</GuidePre>
      <GuideP>
        <strong>Replace subfigure with subcaption.</strong> <GuideCode>subfigure</GuideCode>{" "}
        is obsolete. Delete <GuideCode>{"\\usepackage{subfigure}"}</GuideCode> (the two
        cannot be loaded together), add <GuideCode>{"\\usepackage{subcaption}"}</GuideCode>,
        and write panels like this:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
  \\centering
  \\begin{subfigure}{0.48\\columnwidth}
    \\includegraphics[width=\\linewidth]{example-image-a}
    \\caption{Dataset A}
  \\end{subfigure}\\hfill
  \\begin{subfigure}{0.48\\columnwidth}
    \\includegraphics[width=\\linewidth]{example-image-b}
    \\caption{Dataset B}
  \\end{subfigure}
  \\caption{Accuracy on both datasets.}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Keep the title block in sync.</strong> Authors and affiliations are
        plain text inside <GuideCode>\author</GuideCode>, separated by{" "}
        <GuideCode>\quad</GuideCode>, with superscripts written as{" "}
        <GuideCode>{"$^{1}$"}</GuideCode>. Add an author by copying one{" "}
        <GuideCode>{"Firstname Lastname$^{1}$"}</GuideCode> entry and a new affiliation
        line; mark equal contribution with <GuideCode>{"$^{*}$"}</GuideCode>.
      </GuideP>

      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/neurips-2026">NeurIPS 2026</GuideLink>,{" "}
        <GuideLink href="/templates/iclr-2026">ICLR 2026</GuideLink> and{" "}
        <GuideLink href="/templates/aaai-2027">AAAI 2027</GuideLink>. For dates, see
        the <GuideLink href="/conference-deadlines">conference deadlines page</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">ICML template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
