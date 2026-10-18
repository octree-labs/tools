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
    question: "What is the IEEE paper format?",
    answer:
      "An IEEE conference paper is set on US letter paper in two columns of 10 pt Times text with a 24 pt centred title, author blocks under the title, a bold run-in Abstract and Index Terms, Roman-numbered sections with small-caps headings, numbered citations in square brackets and no page numbers. The IEEEtran LaTeX class in conference mode produces all of this automatically; you only supply the content.",
  },
  {
    question: "Is IEEEtran the official IEEE template?",
    answer:
      "Yes. IEEEtran.cls is the class IEEE distributes for its transactions, journals and conferences, and the conference option matches the IEEE conference template on the IEEE author centre. It is included in TeX Live and MiKTeX, so no download is needed. Some conferences ship a copy of the class with their call for papers; it is normally the same file.",
  },
  {
    question: "How many authors can I list and how do I share an affiliation?",
    answer:
      "There is no limit. Each \\IEEEauthorblockN / \\IEEEauthorblockA pair is one block, separated by \\and; IEEEtran lays out up to three per row. For many authors sharing affiliations, use the commented alternative in the template: list names once with \\IEEEauthorrefmark{1} markers and give each affiliation one \\IEEEauthorblockA line.",
  },
  {
    question: "Can I use BibTeX with this template?",
    answer:
      "Yes. The template ships with a hand-written thebibliography so it compiles standalone. Delete that environment, keep \\bibliographystyle{IEEEtran} and add \\bibliography{refs} pointing at your .bib file; IEEEtran.bst is bundled with the class. The cite package already loaded collapses consecutive numbers into ranges.",
  },
  {
    question: "Why must I not change the margins?",
    answer:
      "IEEE PDF eXpress and the conference chairs check the page geometry. IEEEtran sets the margins, column width and gutter the IEEE specification requires; adding geometry or changing \\textwidth produces a paper that fails the compliance check. If your paper is too long, cut text or figures instead.",
  },
];

export default function IeeeConferenceGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is this IEEE conference template?</GuideH2>
      <GuideP>
        This template is the full official IEEE conference paper format produced by{" "}
        <GuideCode>\documentclass[conference]{"{IEEEtran}"}</GuideCode>, the class IEEE
        distributes for its conferences and that is already installed in every TeX
        distribution. It includes everything a complete submission needs: a title
        with a funding footnote via <GuideCode>\thanks</GuideCode>, a three-author block
        using <GuideCode>\IEEEauthorblockN</GuideCode> and{" "}
        <GuideCode>\IEEEauthorblockA</GuideCode>, the bold run-in Abstract and Index
        Terms, a drop-cap introduction with <GuideCode>\IEEEPARstart</GuideCode>, a
        numbered equation, an <GuideCode>algorithmic</GuideCode> listing, a{" "}
        <GuideCode>booktabs</GuideCode> table with the caption above, a figure with the
        caption below, an Acknowledgment section and an IEEE-style reference list.
      </GuideP>
      <GuideP>
        It differs from the shorter{" "}
        <GuideLink href="/templates/research-paper">Research Paper</GuideLink> template,
        which also uses IEEEtran, by covering the complete format: correct author
        blocks with department, institution, city and email, keywords, acknowledgment,
        a table and a figure with proper IEEE captions, and five formatted references.
        Use this one when you are writing a real submission.
      </GuideP>

      <GuideH2 id="format">The IEEE format rules the class enforces</GuideH2>
      <GuideUl>
        <li>US letter paper, two columns, 10 pt Times-like body font.</li>
        <li>24 pt title, 11 pt author names, 10 pt affiliations, all centred.</li>
        <li>
          Margins and a 0.25 in column gutter set by the class. Do not load{" "}
          <GuideCode>geometry</GuideCode> or alter <GuideCode>\textwidth</GuideCode>.
        </li>
        <li>Abstract and Index Terms in bold with a run-in heading.</li>
        <li>
          Roman-numbered sections in small caps, lettered subsections in italics.
        </li>
        <li>
          Table captions above the table in small caps (&quot;TABLE I&quot;); figure
          captions below (&quot;Fig. 1.&quot;).
        </li>
        <li>
          Numbered citations in square brackets, consecutive numbers collapsed by
          the <GuideCode>cite</GuideCode> package.
        </li>
        <li>No page numbers; the conference adds them when it builds the proceedings.</li>
      </GuideUl>

      <GuideH2 id="walkthrough">Walkthrough</GuideH2>
      <GuideH3>Author block</GuideH3>
      <GuidePre>{`\\author{%
  \\IEEEauthorblockN{1\\textsuperscript{st} Given Name Surname}
  \\IEEEauthorblockA{\\textit{Dept. of Electrical Engineering} \\\\
    \\textit{Example University}\\\\
    City, Country \\\\
    first.author@example.edu}
  \\and
  ...
}`}</GuidePre>
      <GuideP>
        One N/A pair per author, separated by <GuideCode>\and</GuideCode>; IEEEtran
        places up to three blocks per row. The ordinal prefix (1st, 2nd) is the
        current IEEE conference template convention and can be deleted. For six or
        more authors sharing institutions, use the{" "}
        <GuideCode>\IEEEauthorrefmark</GuideCode> variant left as a comment in the
        source.
      </GuideP>
      <GuideH3>Abstract, keywords and introduction</GuideH3>
      <GuideP>
        <GuideCode>abstract</GuideCode> and <GuideCode>IEEEkeywords</GuideCode> must come
        after <GuideCode>\maketitle</GuideCode>. Keep the abstract to 150 to 250 words
        and give three to six comma-separated index terms in alphabetical order.{" "}
        <GuideCode>\IEEEPARstart{"{D}{eep}"}</GuideCode> produces the drop capital that
        opens IEEE papers; it is optional.
      </GuideP>
      <GuideH3>Equations, algorithms, tables and figures</GuideH3>
      <GuideP>
        The sample uses an <GuideCode>aligned</GuideCode> block inside{" "}
        <GuideCode>equation</GuideCode> so a long optimisation problem fits one column,
        an <GuideCode>algorithmic</GuideCode> listing for the method, and{" "}
        <GuideCode>[htbp]</GuideCode> floats for the table and figure. The figure is a
        TikZ bar chart so the template compiles without image files; replace it with{" "}
        <GuideCode>\includegraphics[width=\columnwidth]{"{energy.pdf}"}</GuideCode>. Wide
        tables or figures that need both columns use{" "}
        <GuideCode>table*</GuideCode> and <GuideCode>figure*</GuideCode>.
      </GuideP>
      <GuideH3>References</GuideH3>
      <GuideP>
        IEEE style lists authors as initials then surname, titles in quotation marks,
        venues abbreviated and in italics, and the year last. With BibTeX, remove the{" "}
        <GuideCode>thebibliography</GuideCode> block and use{" "}
        <GuideCode>\bibliographystyle{"{IEEEtran}"}</GuideCode> with{" "}
        <GuideCode>\bibliography{"{refs}"}</GuideCode>.
      </GuideP>

      <GuideH2 id="customize">Switching between IEEE formats</GuideH2>
      <GuideTable
        headers={["Target", "Class line", "Notes"]}
        rows={[
          [
            "Conference paper",
            <GuideCode key="c">\documentclass[conference]{"{IEEEtran}"}</GuideCode>,
            "This template",
          ],
          [
            "Transactions / journal",
            <GuideCode key="j">\documentclass[journal]{"{IEEEtran}"}</GuideCode>,
            "Adds running heads, author biographies, single-column abstract",
          ],
          [
            "Double-blind review",
            <GuideCode key="r">\documentclass[conference]{"{IEEEtran}"}</GuideCode>,
            "Replace the author block with one anonymous block and remove \\thanks",
          ],
          [
            "Draft with line spacing",
            <GuideCode key="d">\documentclass[conference,draftcls,onecolumn]{"{IEEEtran}"}</GuideCode>,
            "For circulating a readable draft; never submit this way",
          ],
        ]}
      />

      <GuideH2 id="errors">Common errors</GuideH2>
      <GuideUl>
        <li>
          <strong>&quot;Command \thanks already defined&quot; or \thanks ignored.</strong>{" "}
          Keep <GuideCode>\IEEEoverridecommandlockouts</GuideCode> right after the
          documentclass line, as in the template.
        </li>
        <li>
          <strong>Overfull equation.</strong> Break it with{" "}
          <GuideCode>aligned</GuideCode> or <GuideCode>split</GuideCode>; IEEE columns
          are only 3.5 in wide.
        </li>
        <li>
          <strong>Figure floats to the end.</strong> Use{" "}
          <GuideCode>[!t]</GuideCode> for top placement and make sure the figure is
          narrower than <GuideCode>\columnwidth</GuideCode>.
        </li>
        <li>
          <strong>Paper exceeds the page limit.</strong> Most IEEE conferences allow
          six pages with one or two paid extra pages; trim content rather than
          spacing, which is checked.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> click <em>Open as template</em> and write with the
          live two-column preview.
        </li>
        <li>
          <strong>In Overleaf:</strong> paste into a new project; pdfLaTeX is the
          default and IEEEtran is preinstalled.
        </li>
        <li>
          <strong>Locally:</strong> <GuideCode>pdflatex paper.tex</GuideCode> twice for
          cross-references, or <GuideCode>latexmk -pdf paper.tex</GuideCode>.
        </li>
      </GuideOl>
      <GuideP>
        Submitting to ICASSP, CVPR or another IEEE-style venue? See the{" "}
        <GuideLink href="/conference-deadlines">conference deadlines page</GuideLink>{" "}
        for typical submission windows.
      </GuideP>

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
