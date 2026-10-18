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
    question: "Is this the official JFM LaTeX template?",
    answer:
      "No. The Journal of Fluid Mechanics is typeset with jfm.cls, a class that Cambridge University Press distributes through the journal's author pages and that is not part of TeX Live. This template reproduces the JFM layout with the standard article class so you can draft anywhere, and it uses the same front-matter macro names as jfm.cls (\\shorttitle, \\shortauthor, \\aff, \\corresp, \\email, \\affiliation, keywords) so moving the body into the official template is a copy-and-paste job.",
  },
  {
    question: "Where do I download jfm.cls?",
    answer:
      "From the Journal of Fluid Mechanics pages on cambridge.org: open the journal, go to the information for authors, and download the LaTeX template package, which contains jfm.cls, jfm.bst, the instructions for contributors and a sample article. Put jfm.cls and jfm.bst next to your .tex file, delete the emulation block in this template's preamble, and change the documentclass line to \\documentclass{jfm}.",
  },
  {
    question: "What citation style does JFM use?",
    answer:
      "Author-year, with no comma between author and year: Batchelor (1967) in running text and (Pope 2000; Kim et al. 1987) in parentheses. The template configures natbib with \\setcitestyle{aysep={}} so \\citet and \\citep produce exactly this. The reference list sets author names in small caps, which the hand-written entries reproduce with \\textsc.",
  },
  {
    question: "Does JFM have a page limit?",
    answer:
      "JFM Papers have no hard page limit but the journal expects concise articles; JFM Rapids are limited to about ten printed pages. Check the current instructions for contributors for the article types (Paper, Rapids, Perspectives, Focus on Fluids) and their limits before submitting.",
  },
  {
    question: "Why does the first page say 'Banner appropriate to article type will appear here'?",
    answer:
      "That line is printed by the official jfm.cls on every manuscript and is replaced by the production team with the article type banner (for example JFM Rapids). The template reproduces it so your draft looks like the real thing; the official class prints it automatically and you do not need to type it.",
  },
];

export default function JfmPaperGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is this JFM template?</GuideH2>
      <GuideP>
        This is a Journal of Fluid Mechanics style article template for LaTeX. It
        mirrors the JFM manuscript layout: a 10 pt Times single column on a JFM-sized
        text block, the italic banner line above the title, authors with affiliation
        superscripts and a dagger for the corresponding author, the received/revised
        line, an unheaded abstract, a Key words line, numbered sections with bold
        headings and italic subsections, running heads that show the short title on
        odd pages and the short author list on even pages, author-year citations in
        JFM form, and the JFM back matter in order: Acknowledgements, Funding,
        Declaration of interests, Author ORCIDs, appendices and references with
        author names in small caps.
      </GuideP>
      <GuideP>
        The official <GuideCode>jfm.cls</GuideCode> is not on TeX Live, so the template
        builds the look with <GuideCode>article</GuideCode>,{" "}
        <GuideCode>newtxtext</GuideCode> and <GuideCode>newtxmath</GuideCode> for the
        Times fonts, <GuideCode>geometry</GuideCode>, <GuideCode>fancyhdr</GuideCode>,{" "}
        <GuideCode>titlesec</GuideCode> and <GuideCode>natbib</GuideCode>. The
        emulation lives in one clearly marked block of the preamble; the front-matter
        commands are named exactly as in jfm.cls, so when you download the official
        class from the Cambridge University Press author pages you delete that block,
        change one documentclass line and keep the rest of the file.
      </GuideP>

      <GuideH2 id="front-matter">The JFM front matter</GuideH2>
      <GuidePre>{`\\shorttitle{Wall-bounded turbulence at moderate Reynolds number}
\\shortauthor{A. N. Author, B. Collaborator and C. D. Supervisor}
\\title{Scaling of near-wall streaks in turbulent channel flow ...}
\\author{A. N. Author\\aff{1}\\corresp{\\email{a.author@example.ac.uk}},
  B. Collaborator\\aff{2} \\and C. D. Supervisor\\aff{1}}
\\affiliation{\\aff{1}Department of Engineering, Example University ...\\\\
  \\aff{2}Institut de M\\'ecanique des Fluides ...}`}</GuidePre>
      <GuideUl>
        <li>
          <GuideCode>\shorttitle</GuideCode> and <GuideCode>\shortauthor</GuideCode> feed
          the running heads; keep them under about 60 characters.
        </li>
        <li>
          <GuideCode>\aff{"{n}"}</GuideCode> prints an affiliation superscript, and{" "}
          <GuideCode>\corresp{"{\\email{...}}"}</GuideCode> adds the dagger and the
          first-page footnote &quot;Email address for correspondence&quot;.
        </li>
        <li>
          <GuideCode>\affiliation</GuideCode> lists every affiliation, one per line with
          its superscript.
        </li>
        <li>
          The <GuideCode>abstract</GuideCode> environment prints without a heading, as in
          JFM, and <GuideCode>keywords</GuideCode> prints the bold &quot;Key words:&quot;
          label. Choose keywords from the JFM keyword list in the instructions for
          contributors.
        </li>
      </GuideUl>

      <GuideH2 id="body">Body conventions</GuideH2>
      <GuideH3>Mathematics</GuideH3>
      <GuideP>
        JFM sets vectors in bold italic (<GuideCode>\bm{"{u}"}</GuideCode> from the{" "}
        <GuideCode>bm</GuideCode> package), dimensionless groups upright-italic via the
        shorthands <GuideCode>\Rey</GuideCode> and <GuideCode>\Pran</GuideCode> defined
        in the preamble, and differentials upright with <GuideCode>\dd</GuideCode>.
        Equations are numbered consecutively through the paper; the sample includes
        the Navier&ndash;Stokes equations, a two-point correlation and a model
        equation written with <GuideCode>amsmath</GuideCode>.
      </GuideP>
      <GuideH3>Sections and cross-references</GuideH3>
      <GuideP>
        Sections are referred to as &quot;&sect;&thinsp;3&quot; in running text (the
        template writes <GuideCode>\S\,\ref{"{...}"}</GuideCode>), figures as
        &quot;figure 1&quot; and tables as &quot;table 1&quot; in lower case, which is
        the JFM house style.
      </GuideP>
      <GuideH3>Floats</GuideH3>
      <GuideP>
        Table captions go below the table in JFM, unlike most journals. The sample
        figure is a TikZ plot so that the template compiles with no image files;
        replace it with <GuideCode>\includegraphics[width=0.7\textwidth]{"{spacing.pdf}"}</GuideCode>.
      </GuideP>
      <GuideH3>Citations and references</GuideH3>
      <GuideP>
        Use <GuideCode>\citet</GuideCode> for &quot;Kim et al. (1987)&quot; and{" "}
        <GuideCode>\citep</GuideCode> for &quot;(Kim et al. 1987)&quot;. The hand-written{" "}
        <GuideCode>\bibitem[Author(Year)]{"{key}"}</GuideCode> entries use small caps
        for author names and bold volume numbers, matching jfm.bst. With BibTeX and
        the official package, use{" "}
        <GuideCode>\bibliographystyle{"{jfm}"}</GuideCode> and{" "}
        <GuideCode>\bibliography{"{refs}"}</GuideCode>.
      </GuideP>

      <GuideH2 id="official">Moving to the official jfm.cls</GuideH2>
      <GuideOl>
        <li>
          Download the LaTeX template from the Journal of Fluid Mechanics author
          pages at cambridge.org and copy <GuideCode>jfm.cls</GuideCode> and{" "}
          <GuideCode>jfm.bst</GuideCode> next to your file.
        </li>
        <li>
          Replace <GuideCode>\documentclass[10pt,twoside]{"{article}"}</GuideCode> with{" "}
          <GuideCode>\documentclass{"{jfm}"}</GuideCode>.
        </li>
        <li>
          Delete everything between the &quot;Emulation of the jfm.cls front-matter
          macros&quot; comment and <GuideCode>\makeatother</GuideCode>, plus the{" "}
          <GuideCode>titlesec</GuideCode>, <GuideCode>fancyhdr</GuideCode>,{" "}
          <GuideCode>geometry</GuideCode> and font package lines; jfm.cls provides all
          of them.
        </li>
        <li>
          Keep the body and the back matter unchanged. Compile and compare with the
          sample article in the official package.
        </li>
      </GuideOl>

      <GuideH2 id="errors">Common errors</GuideH2>
      <GuideUl>
        <li>
          <strong>&quot;Command \Bbbk already defined&quot;.</strong> You added{" "}
          <GuideCode>amssymb</GuideCode>; <GuideCode>newtxmath</GuideCode> already
          provides the AMS symbols, so remove it.
        </li>
        <li>
          <strong>Empty corresponding-author footnote.</strong> The{" "}
          <GuideCode>\corresp</GuideCode> call must be inside{" "}
          <GuideCode>\author</GuideCode>, as in the sample.
        </li>
        <li>
          <strong>Running heads missing on page 1.</strong> Intentional: the first page
          uses the plain style, as in the journal.
        </li>
        <li>
          <strong>Citation shows a question mark.</strong> The{" "}
          <GuideCode>\bibitem</GuideCode> key does not match the{" "}
          <GuideCode>\citep</GuideCode> key, or you need a second pdflatex pass.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile</GuideH2>
      <GuideP>
        In Octree, click <em>Open as template</em>; the preview updates as you type.
        Locally run <GuideCode>pdflatex</GuideCode> twice (or{" "}
        <GuideCode>latexmk -pdf</GuideCode>) so the running heads and references
        resolve. The template also compiles with XeLaTeX and LuaLaTeX.
      </GuideP>

      <GuideH2 id="comparison">Related templates</GuideH2>
      <GuideTable
        headers={["Template", "Venue type", "Layout"]}
        rows={[
          [<strong key="j">JFM Paper</strong>, "Fluid mechanics journal article", "Single column, author-year citations"],
          [
            <GuideLink key="i" href="/templates/ieee-conference">
              IEEE Conference Paper
            </GuideLink>,
            "Engineering conferences",
            "Two columns, numeric citations",
          ],
          [
            <GuideLink key="r" href="/templates/research-paper">
              Research Paper
            </GuideLink>,
            "Generic starting point",
            "Two columns, IEEEtran",
          ],
        ]}
      />

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
