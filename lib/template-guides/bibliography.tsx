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
    question: "Why does changing \\bibliographystyle not change the reference list?",
    answer:
      "Because the template writes the reference list by hand in a thebibliography environment. \\bibliographystyle only affects lists that BibTeX generates from a .bib file, so the apalike line in the template has no visible effect. To switch styles with one line, move the entries to references.bib and replace the environment with \\bibliographystyle{...} and \\bibliography{references}.",
  },
  {
    question: "Why do references I never cite still appear?",
    answer:
      "Every \\bibitem in a hand-written thebibliography is printed, cited or not; the sample includes Miller, Taylor and White entries that the text never cites. With BibTeX only cited entries appear, and \\nocite{*} adds every entry in the .bib file.",
  },
  {
    question: "Should I use natbib or biblatex?",
    answer:
      "This template uses natbib, which works with BibTeX and with the bibliography styles most journals still supply as .bst files. biblatex with the biber backend is more flexible (per-type formatting, multiple bibliographies, better Unicode support) but needs its own commands such as \\addbibresource and \\printbibliography. Check what your journal or university template expects before switching.",
  },
  {
    question: "Does this bibliography template work in Overleaf?",
    answer:
      "Yes. It uses only the article class, geometry and natbib, and as written needs no BibTeX run, so it compiles in Overleaf, Octree or a local install with pdfLaTeX. Run it twice so the citations resolve.",
  },
];

export default function BibliographyGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A bibliography template in LaTeX with natbib</GuideH2>
      <GuideP>
        This bibliography template in LaTeX is a worked reference sheet for citing
        sources with <GuideCode>natbib</GuideCode>. It compiles to a short document
        that shows each citation command next to its output and ends with a reference
        list covering the source types you meet most often: a book, an edition of a
        textbook, journal articles, a conference paper, a web page with an access
        date, a PhD thesis, a technical report and a chapter in an edited book. The
        entries are formatted in an author-year, APA-like style.
      </GuideP>
      <GuideP>
        The document uses the standard <GuideCode>article</GuideCode> class with 1
        inch margins. Citation examples cover parenthetical{" "}
        <GuideCode>\citep</GuideCode>, textual <GuideCode>\citet</GuideCode>,{" "}
        <GuideCode>\citeauthor</GuideCode>, <GuideCode>\citeyear</GuideCode> and
        multiple keys in one command. The reference list is written by hand in a{" "}
        <GuideCode>thebibliography</GuideCode> environment, with each{" "}
        <GuideCode>\bibitem</GuideCode> carrying an{" "}
        <GuideCode>[Author, Year]</GuideCode> label that natbib reads to build the
        author-year citations, so it needs no <GuideCode>.bib</GuideCode> file and no
        BibTeX run. That makes it a useful LaTeX bibliography example to copy entries
        from, and a quick way to see how natbib behaves before you move a real project
        to BibTeX. A closing section lists common BibTeX styles. For an annotated list
        of sources, use the{" "}
        <GuideLink href="/templates/annotated-bibliography">
          annotated bibliography template
        </GuideLink>
        .
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>natbib</GuideCode> in its default author-year mode
        </li>
        <li>
          Examples of <GuideCode>\citep</GuideCode>, <GuideCode>\citet</GuideCode>,{" "}
          <GuideCode>\citeauthor</GuideCode> and <GuideCode>\citeyear</GuideCode>
        </li>
        <li>Ten reference entries across seven source types</li>
        <li>Notes on .bib files and a list of common BibTeX styles</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>references.tex</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX, twice, so the citations resolve. No BibTeX run is
          needed for the template as written.
        </li>
        <li>
          Replace the sample <GuideCode>\bibitem</GuideCode> entries with your sources,
          keeping the <GuideCode>[Author, Year]</GuideCode> label and a unique key.
        </li>
        <li>
          Cite each key in the text with <GuideCode>\citep</GuideCode> or{" "}
          <GuideCode>\citet</GuideCode>.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Move the entries to a .bib file.</strong> For more than a handful of
        sources, let BibTeX format the list. Save the entries in{" "}
        <GuideCode>references.bib</GuideCode>, delete the{" "}
        <GuideCode>thebibliography</GuideCode> environment and keep two lines; the
        citation commands do not change:
      </GuideP>
      <GuidePre>{`% references.bib
@book{knuth1984,
  author    = {Knuth, Donald E.},
  title     = {The {\\TeX}book},
  publisher = {Addison-Wesley},
  year      = {1984}
}

% in the .tex file, where thebibliography was
\\bibliographystyle{apalike}
\\bibliography{references}`}</GuidePre>
      <GuideP>
        <strong>Give long author lists a full form.</strong> natbib accepts a label of
        the form <GuideCode>[Short(Year)Long]</GuideCode>. <GuideCode>\citet</GuideCode>{" "}
        then prints the short form and <GuideCode>{"\\citet*"}</GuideCode> the full
        author list:
      </GuideP>
      <GuidePre>{`\\bibitem[Cormen et~al.(2009)Cormen, Leiserson, Rivest, and Stein]{cormen2009}
Cormen, T. H., Leiserson, C. E., Rivest, R. L., and Stein, C. (2009).
\\textit{Introduction to Algorithms}, 3rd edition. MIT Press.

% \\citet{cormen2009}  -> Cormen et al. (2009)
% \\citet*{cormen2009} -> Cormen, Leiserson, Rivest, and Stein (2009)`}</GuidePre>
      <GuideP>
        <strong>Switch to numbered citations.</strong> Load natbib with the{" "}
        <GuideCode>numbers</GuideCode> option and every <GuideCode>\citep</GuideCode>{" "}
        prints a bracketed number instead of author and year; add{" "}
        <GuideCode>sort&amp;compress</GuideCode> to turn [3, 1, 2] into [1–3]:
      </GuideP>
      <GuidePre>{`\\usepackage[numbers,sort&compress]{natbib}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/annotated-bibliography">annotated bibliography</GuideLink>,{" "}
        <GuideLink href="/templates/mla-works-cited">MLA works cited</GuideLink> and{" "}
        <GuideLink href="/templates/literature-review">literature review</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Bibliography template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
