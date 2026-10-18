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
    question: "What is an MLA works cited page?",
    answer:
      "It is the list of every source you cited in an MLA-style paper, placed on its own page at the end. Each entry gives the core elements the MLA Handbook (9th edition) asks for, in order: author, title of source, title of container, other contributors, version, number, publisher, publication date and location. The page is headed Works Cited, double spaced, alphabetised, and every entry has a half-inch hanging indent. In-text citations in the body (Author page) point to these entries.",
  },
  {
    question: "What is the difference between a works cited page and a bibliography?",
    answer:
      "A works cited page lists only the sources you actually cite in the paper. A bibliography (or Works Consulted, in MLA terms) also lists material you read but did not cite. MLA papers normally end with a Works Cited page; add a separate Works Consulted list only if your instructor asks for one.",
  },
  {
    question: "How do I make a hanging indent in LaTeX?",
    answer:
      "Set \\hangindent to the indent width and \\hangafter to 1 at the start of the paragraph, which this template wraps in the \\entry command: \\newcommand{\\entry}[1]{\\par\\noindent\\hangindent=0.5in\\hangafter=1 #1\\par}. Every line after the first is then indented by 0.5 inches. There is no need for the hanging package, and the trick works in any document class.",
  },
  {
    question: "Does the works cited page need a page number and running header?",
    answer:
      "Yes. MLA 9 asks for your last name and the page number half an inch from the top right corner of every page, including the works cited page, which continues the numbering of the essay. The template prints them with fancyhdr. If you compile the page separately, set the counter with \\setcounter{page}{n} so it shows the correct number.",
  },
  {
    question: "Can LaTeX generate MLA citations automatically?",
    answer:
      "Yes, with the biblatex-mla package. Load \\usepackage[style=mla,backend=biber]{biblatex}, point it at your .bib file with \\addbibresource, cite with \\autocite{key} in the text, and print the list with \\printbibliography[title={Works Cited}]. Compile with pdflatex, biber, then pdflatex twice, or let latexmk handle it. The manual \\entry approach in this template is simpler for a short paper and lets you control the punctuation exactly.",
  },
  {
    question: "What font and spacing does MLA require?",
    answer:
      "MLA 9 asks for a legible font in which regular and italic styles are clearly different, typically 12-point Times New Roman, double spacing throughout with no extra space between entries, and one-inch margins on all sides. The template sets these with the newtxtext font package, setspace and geometry.",
  },
];

export default function MlaWorksCitedGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is this MLA works cited page template?</GuideH2>
      <GuideP>
        This is a free LaTeX template for an MLA works cited page that follows the{" "}
        <em>MLA Handbook</em>, 9th edition: letter paper with one-inch margins, 12-point
        Times-style text, double spacing throughout, a running header with your last name
        and the page number, the heading &quot;Works Cited&quot; centred at the top, and
        every entry flush left with a half-inch hanging indent. It ships with eight
        correctly punctuated sample entries (a book, a chapter in an edited collection, a
        translated book, a journal article with a DOI, a newspaper article read online, a
        print journal article, a film and a web page) that you can copy and adapt.
      </GuideP>
      <GuideP>
        The document class is plain <GuideCode>article</GuideCode>; no special MLA class
        is needed. Formatting comes from four standard packages:{" "}
        <GuideCode>geometry</GuideCode> for the margins, <GuideCode>newtxtext</GuideCode>{" "}
        for a Times New Roman look, <GuideCode>setspace</GuideCode> for double spacing and{" "}
        <GuideCode>fancyhdr</GuideCode> for the header. Entries are written with a small{" "}
        <GuideCode>\entry{"{...}"}</GuideCode> command defined in the preamble, so there is
        nothing to install and the file compiles with pdfLaTeX on any TeX distribution.
      </GuideP>

      <GuideH2 id="rules">MLA 9 works cited formatting rules</GuideH2>
      <GuideP>
        Use this checklist against your own page. Everything in the left column is set up
        for you in the template; the right column says which line does it.
      </GuideP>
      <GuideTable
        headers={["Rule", "Where the template handles it"]}
        rows={[
          [
            "Starts on a new page at the end of the paper, continuing its page numbers",
            <>
              <GuideCode>\newpage</GuideCode> before the heading when appended to an essay;{" "}
              <GuideCode>\setcounter{"{page}"}</GuideCode> if compiled separately
            </>,
          ],
          [
            "Running header: last name and page number, top right, 0.5 in from the top",
            <>
              <GuideCode>\fancyhead[R]{"{\\lastname\\ \\thepage}"}</GuideCode> with{" "}
              <GuideCode>headsep=21pt</GuideCode>
            </>,
          ],
          [
            "One-inch margins on all sides",
            <GuideCode key="geometry">\usepackage[margin=1in]{"{geometry}"}</GuideCode>,
          ],
          [
            "Heading \"Works Cited\" centred, same size and weight as the text",
            <GuideCode key="heading">\begin{"{center}"} Works Cited \end{"{center}"}</GuideCode>,
          ],
          [
            "Double spacing throughout, no extra space between entries",
            <>
              <GuideCode>\doublespacing</GuideCode> and{" "}
              <GuideCode>\setlength{"{\\parskip}{0pt}"}</GuideCode>
            </>,
          ],
          [
            "Hanging indent of 0.5 in on every entry",
            <GuideCode key="hang">\hangindent=0.5in</GuideCode>,
          ],
          [
            "Entries in alphabetical order by author surname, or by title when there is no author",
            "You order the \\entry lines; the template comments show where",
          ],
          [
            "Titles of containers (books, journals, films, websites) in italics; titles of parts (articles, chapters, pages) in quotation marks",
            <>
              <GuideCode>\textit{"{...}"}</GuideCode> and curly quotation marks
            </>,
          ],
          [
            "URLs without http:// or https://; DOIs as https://doi.org/...",
            <>
              <GuideCode>\url{"{...}"}</GuideCode> in the text font, breaking at any character
            </>,
          ],
        ]}
      />

      <GuideH3>The nine core elements, in order</GuideH3>
      <GuideP>
        MLA 9 builds every entry from the same list of core elements. Include the ones
        that apply to your source, in this order, with the punctuation shown:
      </GuideP>
      <GuideOl>
        <li>
          <strong>Author.</strong> Surname, First name. Two authors: Surname, First, and
          First Surname. Three or more: Surname, First, et al.
        </li>
        <li>
          <strong>Title of source.</strong> Italic for a self-contained work, in quotation
          marks for a work inside a container.
        </li>
        <li>
          <strong>Title of container,</strong> in italics: the journal, anthology, newspaper,
          website or streaming service that holds the source.
        </li>
        <li>
          <strong>Other contributors,</strong> such as &quot;edited by&quot;,
          &quot;translated by&quot; or &quot;directed by&quot;.
        </li>
        <li>
          <strong>Version,</strong> for example 2nd ed. or director&apos;s cut.
        </li>
        <li>
          <strong>Number,</strong> as vol. 12, no. 3 or season 2, episode 4.
        </li>
        <li>
          <strong>Publisher,</strong> omitting business words such as Inc. and abbreviating
          University Press to UP.
        </li>
        <li>
          <strong>Publication date,</strong> day Month year, with months longer than four
          letters abbreviated (Jan., Feb., Mar., Apr., Aug., Sept., Oct., Nov., Dec.).
        </li>
        <li>
          <strong>Location.</strong> Page range (pp. 55--61), DOI or URL. End the entry with
          a period.
        </li>
      </GuideOl>
      <GuideP>
        Elements 3 to 9 can repeat when a source sits inside two containers, for example a
        journal article (container 1: the journal) retrieved from a database (container 2:
        JSTOR). An access date (&quot;Accessed 18 Oct. 2026.&quot;) is optional but
        recommended for web pages that have no publication date or that change often.
      </GuideP>

      <GuideH2 id="walkthrough">Section-by-section walkthrough</GuideH2>
      <GuideH3>Preamble: page, font, spacing and header</GuideH3>
      <GuidePre>{`\\documentclass[12pt,letterpaper]{article}
\\usepackage[margin=1in,headheight=15pt,headsep=21pt]{geometry}
\\usepackage{newtxtext}      % Times-like 12 pt text font
\\usepackage{setspace}       % double spacing
\\usepackage{fancyhdr}       % running header
\\usepackage[hidelinks]{hyperref}
\\usepackage{xurl}           % let long URLs break at any character
\\urlstyle{same}

\\newcommand{\\lastname}{Smith}
\\doublespacing
\\frenchspacing
\\pagestyle{fancy}
\\fancyhf{}
\\fancyhead[R]{\\lastname\\ \\thepage}
\\renewcommand{\\headrulewidth}{0pt}`}</GuidePre>
      <GuideP>
        Change <GuideCode>\lastname</GuideCode> to your own surname; it is the only field
        in the header. <GuideCode>headheight</GuideCode> plus{" "}
        <GuideCode>headsep</GuideCode> add up to half an inch, which puts the header
        where MLA wants it. <GuideCode>\frenchspacing</GuideCode> gives a single space after
        periods, matching the look of a paper typed in a word processor, and{" "}
        <GuideCode>\urlstyle{"{same}"}</GuideCode> keeps URLs in the body font rather than
        typewriter. <GuideCode>hidelinks</GuideCode> stops hyperref from drawing coloured
        boxes around links in the PDF.
      </GuideP>

      <GuideH3>The \entry command</GuideH3>
      <GuidePre>{`\\newcommand{\\entry}[1]{%
  \\par\\noindent\\hangindent=0.5in\\hangafter=1 #1\\par}`}</GuidePre>
      <GuideP>
        Each works cited entry is one paragraph. <GuideCode>\hangindent=0.5in</GuideCode>{" "}
        indents every line after the first by half an inch and{" "}
        <GuideCode>\hangafter=1</GuideCode> says the indent starts on line two. Because{" "}
        <GuideCode>\parindent</GuideCode> is set to zero and <GuideCode>\parskip</GuideCode>{" "}
        to zero, the first line sits flush left and the spacing between entries is the same
        double spacing as inside them, exactly as MLA requires.
      </GuideP>

      <GuideH3>The entries</GuideH3>
      <GuideP>
        The body is the centred heading followed by eight <GuideCode>\entry</GuideCode>{" "}
        lines in alphabetical order. Note how the film <em>Parasite</em>, which has no
        author, is alphabetised under P by its title, and how the Purdue OWL page uses the
        organisation as author. Replace the samples with your own sources, keeping one{" "}
        <GuideCode>\entry{"{...}"}</GuideCode> per source.
      </GuideP>

      <GuideH2 id="formats">Common MLA entry formats</GuideH2>
      <GuideH3>Book</GuideH3>
      <GuidePre>{`\\entry{Austen, Jane. \\textit{Pride and Prejudice}. Edited by Pat Rogers, Cambridge UP, 2006.}`}</GuidePre>
      <GuideP>
        Pattern: Author. <em>Title</em>. Other contributors, Publisher, Year. Drop the
        editor clause for a plain edition; add &quot;2nd ed.,&quot; before the publisher
        for a numbered edition; list an e-book as &quot;E-book ed.&quot; in the version slot.
      </GuideP>

      <GuideH3>Journal article with a DOI</GuideH3>
      <GuidePre>{`\\entry{Kirschenbaum, Matthew G. “What Is Digital Humanities and What's It Doing in English Departments?” \\textit{ADE Bulletin}, no.\\ 150, 2010, pp. 55--61, \\url{https://doi.org/10.1632/ade.150.55}.}`}</GuidePre>
      <GuideP>
        Pattern: Author. &quot;Article Title.&quot; <em>Journal</em>, vol. X, no. Y, Year,
        pp. A--B, DOI. Use <GuideCode>--</GuideCode> for the en dash in page ranges and{" "}
        <GuideCode>no.\ 150</GuideCode> (a backslash-space) so LaTeX does not treat the
        abbreviation&apos;s period as the end of a sentence. If there is no DOI, give the
        database name as a second container (<em>JSTOR</em>, URL) or the article URL.
      </GuideP>

      <GuideH3>Web page</GuideH3>
      <GuidePre>{`\\entry{Purdue Online Writing Lab. “MLA Formatting and Style Guide.” \\textit{Purdue OWL}, Purdue University, \\url{owl.purdue.edu/owl/research_and_citation/mla_style/...}. Accessed 18 Oct. 2026.}`}</GuidePre>
      <GuideP>
        Pattern: Author or organisation. &quot;Page Title.&quot; <em>Site Name</em>,
        Publisher (omit if the same as the site name), Date, URL. Accessed Date. MLA 9
        strips the protocol from URLs, so write <GuideCode>www.example.com/...</GuideCode>{" "}
        rather than <GuideCode>https://www.example.com/...</GuideCode>.
      </GuideP>

      <GuideH3>Chapter in an edited book</GuideH3>
      <GuidePre>{`\\entry{Butler, Judith. “Performative Acts and Gender Constitution.” \\textit{Performing Feminisms}, edited by Sue-Ellen Case, Johns Hopkins UP, 1990, pp. 270--82.}`}</GuidePre>
      <GuideP>
        Pattern: Chapter Author. &quot;Chapter Title.&quot; <em>Book Title</em>, edited by
        Editor Name, Publisher, Year, pp. A--B. The same shape covers a poem or story in an
        anthology and an essay in a collection. For a film, start with the title in italics
        unless your discussion focuses on one person&apos;s contribution:{" "}
        <GuideCode>{"\\textit{Parasite}. Directed by Bong Joon-ho, CJ Entertainment, 2019."}</GuideCode>
      </GuideP>

      <GuideH2 id="customize">How to customize the template</GuideH2>
      <GuideUl>
        <li>
          <strong>Append it to your essay.</strong> Copy everything between{" "}
          <GuideCode>\begin{"{document}"}</GuideCode> and{" "}
          <GuideCode>\end{"{document}"}</GuideCode> to the end of your paper after a{" "}
          <GuideCode>\newpage</GuideCode>, and move the preamble lines (packages,{" "}
          <GuideCode>\lastname</GuideCode>, <GuideCode>\entry</GuideCode>) into the essay&apos;s
          preamble. The page number then continues automatically.
        </li>
        <li>
          <strong>Automate it with biblatex-mla.</strong> For a long paper, keep your sources
          in a <GuideCode>.bib</GuideCode> file and let LaTeX build the list: add{" "}
          <GuideCode>\usepackage[style=mla,backend=biber]{"{biblatex}"}</GuideCode> and{" "}
          <GuideCode>\addbibresource{"{refs.bib}"}</GuideCode> to the preamble, cite with{" "}
          <GuideCode>\autocite{"{key}"}</GuideCode>, and end with{" "}
          <GuideCode>\printbibliography[title={"{Works Cited}"}]</GuideCode>. The style
          handles the hanging indent, alphabetisation and punctuation for you; you lose the
          ability to hand-tune a single entry.
        </li>
        <li>
          <strong>Font.</strong> <GuideCode>newtxtext</GuideCode> is the maintained Times
          clone. If your distribution lacks it, <GuideCode>\usepackage{"{mathptmx}"}</GuideCode>{" "}
          or the older <GuideCode>\usepackage{"{times}"}</GuideCode> give the same look. If
          your instructor allows another legible font, swap the package; nothing else
          changes.
        </li>
        <li>
          <strong>Paper size.</strong> Outside North America replace{" "}
          <GuideCode>letterpaper</GuideCode> with <GuideCode>a4paper</GuideCode> in both the
          class options and <GuideCode>geometry</GuideCode>; MLA does not prescribe a paper
          size, only the margins.
        </li>
        <li>
          <strong>Works Consulted.</strong> If you must also list sources you read but did
          not cite, add a second centred heading &quot;Works Consulted&quot; after the first
          list and continue with more <GuideCode>\entry</GuideCode> lines.
        </li>
      </GuideUl>

      <GuideH2 id="mistakes">Common mistakes and how to fix them</GuideH2>
      <GuideUl>
        <li>
          <strong>Entries not alphabetised.</strong> LaTeX prints <GuideCode>\entry</GuideCode>{" "}
          lines in the order you write them. Sort by the first word of the entry, ignoring
          A, An and The. Works by the same author go in title order, with three hyphens
          (<GuideCode>---.</GuideCode>) replacing the name after the first entry.
        </li>
        <li>
          <strong>Straight quotation marks.</strong> Typing <GuideCode>&quot;Title&quot;</GuideCode>{" "}
          prints two closing marks in pdfLaTeX. Use the curly characters “ and ” as the
          template does, or TeX&apos;s <GuideCode>``Title&apos;&apos;</GuideCode>.
        </li>
        <li>
          <strong>Extra space between entries.</strong> A blank line before an{" "}
          <GuideCode>\entry</GuideCode> is harmless, but any <GuideCode>\vspace</GuideCode>{" "}
          or <GuideCode>\bigskip</GuideCode> breaks the uniform double spacing. Remove them.
        </li>
        <li>
          <strong>Bold or underlined heading.</strong> MLA wants &quot;Works Cited&quot; in
          plain text, the same size as the body. Do not wrap it in{" "}
          <GuideCode>\textbf</GuideCode> or <GuideCode>\section*</GuideCode>, which would
          enlarge it.
        </li>
        <li>
          <strong>Overfull hbox warnings on URLs.</strong> A long URL that cannot break runs
          into the margin. The template loads <GuideCode>xurl</GuideCode> so{" "}
          <GuideCode>\url</GuideCode> can break anywhere; keep it if you add more web
          sources.
        </li>
        <li>
          <strong>Page number restarts at 1.</strong> When the works cited page is compiled
          as its own file it is page 1. Either append it to the essay or set{" "}
          <GuideCode>\setcounter{"{page}{n}"}</GuideCode> before the heading.
        </li>
        <li>
          <strong>&quot;Undefined control sequence \entry&quot;.</strong> You pasted the
          entries into another document without the <GuideCode>\newcommand</GuideCode> from
          the preamble. Copy that definition too.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile the works cited page</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> click <em>Open as template</em> above. The page opens
          with a live preview; change <GuideCode>\lastname</GuideCode>, replace the sample
          entries, or paste a source and ask the AI assistant to format it as an MLA 9
          entry.
        </li>
        <li>
          <strong>In Overleaf:</strong> create a blank project, paste the source into{" "}
          <GuideCode>main.tex</GuideCode> and recompile. The default pdfLaTeX compiler is
          correct; every package used is in a standard TeX Live install.
        </li>
        <li>
          <strong>Locally:</strong> save as <GuideCode>works-cited.tex</GuideCode> and run:
          <GuidePre>{`pdflatex works-cited.tex
# or, with biblatex-mla:
latexmk -pdf works-cited.tex`}</GuidePre>
          One pdfLaTeX pass is enough for the manual version; biblatex needs the biber run
          that <GuideCode>latexmk</GuideCode> performs automatically.
        </li>
      </GuideOl>

      <GuideH2 id="comparison">Related templates</GuideH2>
      <GuideTable
        headers={["Template", "Best for", "Style", "Formatting"]}
        rows={[
          [
            <strong key="m">MLA Works Cited Page</strong>,
            "Literature, composition and humanities courses that require MLA",
            "MLA 9",
            "Running header, hanging indent and double spacing set up; manual entries",
          ],
          [
            <GuideLink key="a" href="/templates/apa-title-page">
              APA Title Page
            </GuideLink>,
            "Psychology, education and social science coursework",
            "APA 7",
            <>
              <GuideCode>apa7</GuideCode> class handles the title page and reference list
            </>,
          ],
          [
            <GuideLink key="b" href="/templates/bibliography">
              Bibliography
            </GuideLink>,
            "Papers where the citation style is up to you",
            "BibTeX",
            "Reference list generated from a .bib file",
          ],
          [
            <GuideLink key="e" href="/templates/essay">
              Academic Essay
            </GuideLink>,
            "The essay body that this works cited page belongs to",
            "Plain article",
            "12pt text with a simple title block; add this page at the end",
          ],
        ]}
      />

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
