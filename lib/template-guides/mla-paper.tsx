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
    question: "Is this an MLA format example or a template?",
    answer:
      "Both. The compiled PDF in the preview is an MLA format example: a finished two-page paper with the running header, four-line heading, centred title, double-spaced body, an in-text citation, a block quote and a Works Cited page, all set to MLA 9. The .tex source is the template: change the six commands at the top (name, last name, instructor, course, date, title), replace the sample paragraphs with your essay and the two entries with your sources, and the layout stays correct.",
  },
  {
    question: "What is the MLA heading?",
    answer:
      "The MLA heading is the four-line block at the top left of the first page: your full name, your instructor's name, the course name or number, and the date written day month year (19 October 2026). Each item sits on its own line, double spaced like the rest of the paper, with no blank line between them. The title follows on the next line, centred. The heading appears only on page 1; every page also carries the running header.",
  },
  {
    question: "What is the difference between the MLA heading and the MLA header?",
    answer:
      "The heading is the four lines of information on the first page only. The header (running head) is your last name followed by a space and the page number, in the top right corner of every page, half an inch from the top edge: for example Smith 1, Smith 2. The template prints the header with fancyhdr and the heading with four \\noindent lines after \\begin{document}.",
  },
  {
    question: "Does an MLA paper need a title page?",
    answer:
      "No. MLA 9 does not use a title page for a standard research paper or essay; the four-line heading and the centred title replace it. Some instructors and some group projects ask for one anyway. The template includes a commented-out title page block you can enable in that case: course, instructor and date in the upper third, the title in the middle, your name near the bottom, all centred and double spaced, with no header or page number on that page.",
  },
  {
    question: "Should the MLA title be bold, underlined or in a larger font?",
    answer:
      "None of those. The title is centred on the line after the heading, in the same 12-point font as the body, in title case, with no bold, italics, underlining, quotation marks or full stop. Italicise only the parts that would be italic in running text, such as the title of a novel you are discussing. The template sets it with {\\centering \\papertitle\\par}, which adds no vertical space above or below.",
  },
  {
    question: "How do I format a block quote in MLA?",
    answer:
      "Use a block quotation for prose that runs more than four lines or verse of more than three lines. Introduce it with a colon or a complete sentence, indent the whole quotation half an inch from the left margin, keep it double spaced, omit the quotation marks, and put the parenthetical citation after the final period rather than before it. The template's blockquote environment does the indent; you write the citation as (Okafor 118) at the end.",
  },
  {
    question: "What font and spacing does MLA 9 require?",
    answer:
      "A legible font in which regular and italic are clearly different, typically 12-point Times New Roman; double spacing throughout, including the heading, block quotes and the Works Cited page; one-inch margins on all sides; a half-inch first-line indent on every paragraph; left-aligned text with automatic hyphenation off; and one space after a period. The template sets all of these with newtxtext, setspace, geometry, \\parindent, \\raggedright, \\hyphenpenalty and \\frenchspacing.",
  },
  {
    question: "How do I add the Works Cited page to my paper?",
    answer:
      "It is already in the template. After the last paragraph a \\newpage starts the Works Cited page, which continues the page numbering, has the title Works Cited centred in plain text, and lists one \\entry{...} per source in alphabetical order with a half-inch hanging indent. Replace the two sample entries with your own sources. For the full set of entry formats see the MLA works cited page template.",
  },
];

export default function MlaPaperGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is this MLA format paper template?</GuideH2>
      <GuideP>
        This is a free LaTeX template for a complete paper in MLA format, following the{" "}
        <em>MLA Handbook</em>, 9th edition. It gives you every element an MLA essay is
        marked on: the running header with your last name and page number, the four-line
        MLA heading, the centred plain-text title, double-spaced 12-point Times-style text
        with one-inch margins and half-inch paragraph indents, a block quotation, an
        in-text citation in the Author page form, and a Works Cited page on its own sheet
        with hanging indents. A short two-paragraph sample essay shows each rule in use, so
        the preview above doubles as an MLA format example you can compare your own draft
        against.
      </GuideP>
      <GuideP>
        The document class is plain <GuideCode>article</GuideCode>; there is no MLA class
        to install. The layout comes from four standard packages,{" "}
        <GuideCode>geometry</GuideCode>, <GuideCode>newtxtext</GuideCode>,{" "}
        <GuideCode>setspace</GuideCode> and <GuideCode>fancyhdr</GuideCode>, plus a small{" "}
        <GuideCode>blockquote</GuideCode> environment and an{" "}
        <GuideCode>\entry</GuideCode> command defined in the preamble. It compiles with
        pdfLaTeX on any TeX distribution and in Overleaf without changes.
      </GuideP>

      <GuideH2 id="format-example">MLA format example</GuideH2>
      <GuideP>
        The preview above is a complete MLA format example: a two-page paper that follows
        the 9th edition exactly. Reading the first page from top to bottom, this is what
        you see and why each element is there:
      </GuideP>
      <GuideOl>
        <li>
          <strong>Running header.</strong> <em>Smith 1</em> in the top right corner, half
          an inch from the top edge and flush with the right margin: the writer&apos;s
          last name, a space and the page number, with no &ldquo;p.&rdquo; or comma. It
          repeats on every page.
        </li>
        <li>
          <strong>Four-line heading.</strong> One inch from the top, flush left:{" "}
          <em>Jordan Smith</em>, <em>Professor Elena Marquez</em>, <em>English 102</em>,{" "}
          <em>19 October 2026</em>. That is student, instructor, course and date, one per
          line, with the date in day Month year order and no commas. This MLA heading
          example appears on page 1 only.
        </li>
        <li>
          <strong>Title.</strong> On the next line, centred:{" "}
          <em>Reading the City: Memory and Place in Contemporary Fiction</em>. It is in
          title case and in the same 12-point font as the body, with no bold, underlining,
          italics, quotation marks or larger size.
        </li>
        <li>
          <strong>First paragraph.</strong> Starts directly below the title with a
          half-inch first-line indent. There is no extra space between the heading, the
          title and the text; everything is double spaced, with a ragged right edge and
          one-inch margins.
        </li>
        <li>
          <strong>In-text citation.</strong> A short quotation in quotation marks is
          followed by <em>(Alvarez 47)</em>: author&apos;s last name and page number, no
          comma and no &ldquo;p.&rdquo;, placed before the sentence&apos;s period.
        </li>
        <li>
          <strong>Block quote.</strong> Partway through the second paragraph, a sentence
          ending in a colon introduces a block quotation: indented half an inch from the
          left margin, still double spaced, with no quotation marks. MLA calls for this
          layout when a prose quotation would run to more than four lines of your text;
          the three-line sample is kept short to show the format. The citation{" "}
          <em>(Okafor 118)</em> comes after the final period. The sentence that follows
          continues the same paragraph, so it returns to the left margin without an
          indent.
        </li>
      </GuideOl>
      <GuideP>
        <strong>Works Cited page.</strong> Page 2 starts on a new page with the header{" "}
        <em>Smith 2</em> and the title <em>Works Cited</em> centred in plain text. The two
        sources are listed alphabetically by the author&apos;s last name (Alvarez, then
        Okafor), double spaced, each with a half-inch hanging indent so the second line of
        the Okafor entry is indented and the author names stand out at the left margin.
      </GuideP>
      <GuideP>
        In the source, the information that fills the heading and title is collected in
        six commands so you only edit the top of the file:
      </GuideP>
      <GuidePre>{`\\newcommand{\\studentname}{Jordan Smith}
\\newcommand{\\lastname}{Smith}          % printed in the running header
\\newcommand{\\instructor}{Professor Elena Marquez}
\\newcommand{\\course}{English 102}
\\newcommand{\\duedate}{19 October 2026}  % MLA date order: day month year
\\newcommand{\\papertitle}{Reading the City: Memory and Place in Contemporary Fiction}`}</GuidePre>

      <GuideH2 id="heading-and-header">MLA heading and header</GuideH2>
      <GuideP>
        MLA uses two things that are easy to confuse. The <strong>MLA header</strong> is
        the running head: your last name, a space and the page number, in the top right
        corner of every page, half an inch below the top edge and flush with the right
        margin. The <strong>MLA heading</strong> is the block of four lines at the top left
        of the first page only, in this order:
      </GuideP>
      <GuideOl>
        <li>Your full name</li>
        <li>Your instructor&apos;s name (for example Professor Elena Marquez)</li>
        <li>The course name or number (English 102)</li>
        <li>The date, written day month year with no commas (19 October 2026)</li>
      </GuideOl>
      <GuideP>
        Each line of the heading is double spaced like the rest of the paper; there is no
        blank line between the lines, between the heading and the title, or between the
        title and the first paragraph. In the template the header is produced by{" "}
        <GuideCode>fancyhdr</GuideCode>:
      </GuideP>
      <GuidePre>{`\\usepackage[margin=1in,headheight=15pt,headsep=21pt]{geometry}
\\usepackage{fancyhdr}
\\newcommand{\\lastname}{Smith}
\\pagestyle{fancy}
\\fancyhf{}
\\fancyhead[R]{\\lastname\\ \\thepage}
\\renewcommand{\\headrulewidth}{0pt}`}</GuidePre>
      <GuideP>
        <GuideCode>headheight</GuideCode> plus <GuideCode>headsep</GuideCode> add up to
        half an inch, so the header sits half an inch below the top edge of the page, as
        MLA wants, and{" "}
        <GuideCode>headrulewidth</GuideCode> set to zero removes the line fancyhdr would
        otherwise draw. The heading is four <GuideCode>\noindent</GuideCode> paragraphs
        after <GuideCode>\begin{"{document}"}</GuideCode>:
      </GuideP>
      <GuidePre>{`\\noindent\\studentname\\par
\\noindent\\instructor\\par
\\noindent\\course\\par
\\noindent\\duedate\\par`}</GuidePre>
      <GuideP>
        The <GuideCode>\noindent</GuideCode> matters: under <GuideCode>\raggedright</GuideCode>{" "}
        a <GuideCode>\\</GuideCode> line break ends the paragraph, so without it lines two
        to four would pick up the half-inch first-line indent.
      </GuideP>

      <GuideH2 id="rules">MLA paper format rules</GuideH2>
      <GuideP>
        Use this checklist against your own paper. The left column is the rule from the
        handbook; the right column is the line in the template that handles it.
      </GuideP>
      <GuideTable
        headers={["Rule", "Where the template handles it"]}
        rows={[
          [
            "Letter paper with one-inch margins on all sides",
            <GuideCode key="geo">\usepackage[margin=1in]{"{geometry}"}</GuideCode>,
          ],
          [
            "12-point legible serif font, typically Times New Roman",
            <>
              <GuideCode>12pt</GuideCode> class option and <GuideCode>\usepackage{"{newtxtext}"}</GuideCode>
            </>,
          ],
          [
            "Double spacing throughout, including heading, quotations and Works Cited",
            <GuideCode key="ds">\doublespacing</GuideCode>,
          ],
          [
            "No extra space between paragraphs",
            <GuideCode key="ps">\setlength{"{\\parskip}{0pt}"}</GuideCode>,
          ],
          [
            "First line of every paragraph indented half an inch",
            <GuideCode key="pi">\setlength{"{\\parindent}{0.5in}"}</GuideCode>,
          ],
          [
            "Running header: last name and page number, top right, 0.5 in from the top",
            <GuideCode key="fh">\fancyhead[R]{"{\\lastname\\ \\thepage}"}</GuideCode>,
          ],
          [
            "Four-line heading at the top left of page 1, then the title centred in plain text",
            <>
              four <GuideCode>\noindent ... \par</GuideCode> lines and{" "}
              <GuideCode>{"{\\centering \\papertitle\\par}"}</GuideCode>
            </>,
          ],
          [
            "Text left-aligned, not justified; automatic hyphenation off",
            <>
              <GuideCode>\raggedright</GuideCode> and <GuideCode>\hyphenpenalty=10000</GuideCode>
            </>,
          ],
          [
            "One space after a period",
            <GuideCode key="fs">\frenchspacing</GuideCode>,
          ],
          [
            "Block quotations indented 0.5 in, no quotation marks, citation after the period",
            <GuideCode key="bq">\begin{"{blockquote}"} ... \end{"{blockquote}"}</GuideCode>,
          ],
          [
            "Works Cited on a new page, title centred, entries with a 0.5 in hanging indent",
            <>
              <GuideCode>\newpage</GuideCode>, <GuideCode>{"{\\centering Works Cited\\par}"}</GuideCode>{" "}
              and <GuideCode>\entry{"{...}"}</GuideCode>
            </>,
          ],
          [
            "No title page unless the instructor requires one",
            "Commented-out title page block after \\begin{document}",
          ],
        ]}
      />

      <GuideH2 id="title-page">Do you need an MLA title page?</GuideH2>
      <GuideP>
        Usually not. The MLA Handbook does not call for a separate title page on a student
        paper: the four-line heading and the centred title on page 1 do that job, and page
        1 is the first page of text. You need a title page only when your instructor asks
        for one, or occasionally for a group project where all the authors&apos; names
        would not fit in the heading.
      </GuideP>
      <GuideP>
        If you do need one, the template has the layout ready in a commented block
        directly after <GuideCode>\begin{"{document}"}</GuideCode>. Remove the{" "}
        <GuideCode>%</GuideCode> signs, and delete the four heading lines that follow it:
      </GuideP>
      <GuidePre>{`\\thispagestyle{empty}
\\begin{center}
  \\vspace*{1.5in}
  \\course\\\\
  \\instructor\\\\
  \\duedate
  \\vfill
  \\papertitle
  \\vfill
  \\studentname
  \\vspace*{1.5in}
\\end{center}
\\newpage
\\setcounter{page}{1}      % drop this line if the title page should count as page 1`}</GuidePre>
      <GuideP>
        This puts the course information in the upper third of the page, the title in the
        middle and your name near the bottom, all centred and double spaced, with no header
        on the title page itself. The last line restarts the numbering so the first page of
        text is <em>Smith 1</em>; delete it if your instructor counts the title page.
      </GuideP>

      <GuideH2 id="citations">MLA in-text citations and block quotes</GuideH2>
      <GuideP>
        MLA cites sources in the text with the author&apos;s last name and the page number
        in parentheses, with no comma and no &quot;p.&quot;: <em>(Alvarez 47)</em>. The
        citation goes before the period of the sentence it supports. If the author is named
        in the sentence, give only the page: <em>Alvarez describes the city as a palimpsest
        (47)</em>. Two authors are joined with &quot;and&quot;; three or more take
        &quot;et al.&quot;; a source with no author is cited by a shortened title in the
        same style it has on the Works Cited page. Every in-text citation must match the
        first word of an entry on the Works Cited page.
      </GuideP>
      <GuideP>
        A quotation that would run more than four lines of prose (or three of verse) becomes
        a block quote. Introduce it with a colon or a full sentence, indent the whole block
        half an inch, keep the double spacing, leave out the quotation marks, and place the
        citation <em>after</em> the final period. The template provides a small environment
        for this:
      </GuideP>
      <GuidePre>{`\\newenvironment{blockquote}
  {\\par\\setlength{\\leftskip}{0.5in}\\noindent\\ignorespaces}
  {\\par}

... argues that the genre's maps are unreliable on purpose:
\\begin{blockquote}
The novel does not want its reader to find the street. It wants the reader to
feel the street slip ... where the story lives. (Okafor 118)
\\end{blockquote}
\\noindent Okafor's point explains why ...`}</GuidePre>
      <GuideP>
        Setting <GuideCode>\leftskip</GuideCode> inside the environment indents every line
        of the quotation by half an inch and the closing <GuideCode>\par</GuideCode> makes
        sure the setting applies before the group ends. Unlike the built-in{" "}
        <GuideCode>quote</GuideCode> environment it adds no vertical space above or below,
        so the double spacing stays uniform. If the sentence after the quotation continues
        the same paragraph, start it with <GuideCode>\noindent</GuideCode>; if it begins a
        new paragraph, leave a blank line and let the normal indent apply.
      </GuideP>

      <GuideH2 id="walkthrough">Section-by-section walkthrough</GuideH2>
      <GuideH3>Preamble: page, font, spacing and header</GuideH3>
      <GuidePre>{`\\documentclass[12pt,letterpaper]{article}
\\usepackage[margin=1in,headheight=15pt,headsep=21pt]{geometry}
\\usepackage{newtxtext}      % Times-like 12 pt text font
\\usepackage{setspace}       % double spacing
\\usepackage{fancyhdr}       % running header
\\usepackage[hidelinks]{hyperref}

\\doublespacing
\\raggedright               % MLA: do not justify the right margin
\\hyphenpenalty=10000       % MLA: turn automatic hyphenation off
\\frenchspacing
\\setlength{\\parindent}{0.5in}
\\setlength{\\parskip}{0pt}`}</GuidePre>
      <GuideP>
        The order of the last lines is deliberate: <GuideCode>\raggedright</GuideCode>{" "}
        resets <GuideCode>\parindent</GuideCode> to zero, so the half-inch indent is set
        after it. <GuideCode>newtxtext</GuideCode> is the maintained Times clone;{" "}
        <GuideCode>setspace</GuideCode> provides <GuideCode>\doublespacing</GuideCode>,
        which scales the line spacing for a 12-point font the same way a word processor
        does. <GuideCode>hyperref</GuideCode> is there only so that URLs in Works Cited
        entries can break after a slash or period; <GuideCode>hidelinks</GuideCode> keeps
        the PDF free of coloured link boxes.
      </GuideP>

      <GuideH3>The heading, title and body</GuideH3>
      <GuideP>
        After <GuideCode>\begin{"{document}"}</GuideCode> come the optional title page
        block (commented out), the four heading lines, the centred title and the essay.
        Paragraphs are separated by a blank line, as usual in LaTeX, and get their half-inch
        indent automatically. Short quotations go inside curly quotation marks “ ” with the
        citation before the period; long ones go in a <GuideCode>blockquote</GuideCode>.
        Titles of books, films and journals are set with <GuideCode>\textit</GuideCode>;
        titles of articles, chapters and poems go in quotation marks.
      </GuideP>

      <GuideH3>The Works Cited page</GuideH3>
      <GuidePre>{`\\newpage

{\\centering Works Cited\\par}

\\entry{Alvarez, Marisol. \\textit{The Cartographer's Daughter}. Harbor Lane Press, 2019.}

\\entry{Okafor, Daniel. “Streets without Names: Memory and Mapping in the Postwar Novel.” \\textit{Journal of Urban Fiction}, vol. 14, no.\\ 2, 2021, pp. 113--31.}`}</GuidePre>
      <GuideP>
        <GuideCode>\newpage</GuideCode> starts the list on its own page while the page
        number continues. The title is plain text, centred with{" "}
        <GuideCode>\centering</GuideCode> inside a group so that no extra space is added.
        Each <GuideCode>\entry</GuideCode> is a paragraph with{" "}
        <GuideCode>\hangindent=0.5in</GuideCode>, which indents every line after the
        first; <GuideCode>\noindent</GuideCode> inside the command cancels the body&apos;s
        paragraph indent. Keep the entries in alphabetical order by the first word,
        ignoring A, An and The. The{" "}
        <GuideLink href="/templates/mla-works-cited">MLA works cited page template</GuideLink>{" "}
        has eight more entry formats you can copy: edited books, translations, journal
        articles with a DOI, newspaper articles, films and web pages.
      </GuideP>

      <GuideH2 id="customize">How to customize the template</GuideH2>
      <GuideUl>
        <li>
          <strong>Your details.</strong> Edit the six <GuideCode>\newcommand</GuideCode>{" "}
          lines at the top: name, last name (for the header), instructor, course, date and
          title. Nothing else in the file needs to change for a new paper.
        </li>
        <li>
          <strong>Section headings.</strong> MLA permits optional headings in longer papers.
          Keep them in the body font and flush left, for example{" "}
          <GuideCode>{"\\noindent\\textbf{1. Background}\\par"}</GuideCode>, rather than
          using <GuideCode>\section</GuideCode>, which would enlarge them and add space.
        </li>
        <li>
          <strong>Automated citations.</strong> For a long paper, keep your sources in a{" "}
          <GuideCode>.bib</GuideCode> file and load{" "}
          <GuideCode>\usepackage[style=mla,backend=biber]{"{biblatex}"}</GuideCode>; cite
          with <GuideCode>\autocite[47]{"{alvarez2019}"}</GuideCode> and replace the manual
          entries with <GuideCode>\printbibliography[title={"{Works Cited}"}]</GuideCode>.
          Compile with latexmk so biber runs.
        </li>
        <li>
          <strong>Font.</strong> <GuideCode>newtxtext</GuideCode> gives the Times New Roman
          look. If your instructor allows another legible font, swap the package, for
          example <GuideCode>\usepackage{"{tgpagella}"}</GuideCode>; the rest of the layout
          is unaffected.
        </li>
        <li>
          <strong>Paper size.</strong> Outside North America change{" "}
          <GuideCode>letterpaper</GuideCode> to <GuideCode>a4paper</GuideCode> in the class
          options and in <GuideCode>geometry</GuideCode>. MLA specifies the margins, not the
          paper size.
        </li>
        <li>
          <strong>Endnotes.</strong> If you use notes, MLA places them on a page titled
          Notes before the Works Cited. Load <GuideCode>endnotes</GuideCode>, write{" "}
          <GuideCode>\endnote{"{...}"}</GuideCode> in the text and put{" "}
          <GuideCode>\theendnotes</GuideCode> after a <GuideCode>\newpage</GuideCode>{" "}
          with a centred &quot;Notes&quot; title.
        </li>
      </GuideUl>

      <GuideH2 id="mistakes">Common mistakes and how to fix them</GuideH2>
      <GuideUl>
        <li>
          <strong>Heading lines indented.</strong> If the instructor&apos;s name, course or
          date shifts right by half an inch, a <GuideCode>\\</GuideCode> was used instead of
          the <GuideCode>\noindent ... \par</GuideCode> pattern. Under{" "}
          <GuideCode>\raggedright</GuideCode> a line break ends the paragraph and the next
          line gets the paragraph indent.
        </li>
        <li>
          <strong>Title in bold or larger type.</strong> Do not use{" "}
          <GuideCode>\maketitle</GuideCode>, <GuideCode>\section*</GuideCode> or{" "}
          <GuideCode>\textbf</GuideCode> for the title; MLA wants it in the body font.
          Likewise avoid the <GuideCode>center</GuideCode> environment, which adds vertical
          space; the template uses <GuideCode>\centering</GuideCode> inside braces.
        </li>
        <li>
          <strong>Extra space between paragraphs.</strong> Any <GuideCode>\vspace</GuideCode>,{" "}
          <GuideCode>\bigskip</GuideCode> or a <GuideCode>parskip</GuideCode> package breaks
          the uniform double spacing. Remove them; paragraphs are marked by indent only.
        </li>
        <li>
          <strong>Citation inside the block quote&apos;s period.</strong> For a block quote
          the citation follows the final period: <em>...the story lives. (Okafor 118)</em>.
          For a short quotation in running text it comes before the period:{" "}
          <em>...failed to fill&quot; (Alvarez 47).</em>
        </li>
        <li>
          <strong>Page number restarts after the title page.</strong> If you enabled the
          optional title page and the first text page still shows 2, make sure the{" "}
          <GuideCode>\setcounter{"{page}{1}"}</GuideCode> line is uncommented after the{" "}
          <GuideCode>\newpage</GuideCode>.
        </li>
        <li>
          <strong>Straight quotation marks.</strong> Typing <GuideCode>&quot;...&quot;</GuideCode>{" "}
          prints straight marks. Use the curly characters “ ” as the template does, or
          TeX&apos;s <GuideCode>``...&apos;&apos;</GuideCode>.
        </li>
        <li>
          <strong>Works Cited not on its own page.</strong> The <GuideCode>\newpage</GuideCode>{" "}
          before the title was deleted. Put it back; the list always starts a new page even
          if the last page of text is nearly empty.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile the MLA paper</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> click <em>Open as template</em> above. The paper opens
          with a live preview; fill in the heading commands, paste your essay, or ask the AI
          assistant to turn a source into an MLA 9 Works Cited entry.
        </li>
        <li>
          <strong>In Overleaf:</strong> create a blank project, paste the source into{" "}
          <GuideCode>main.tex</GuideCode> and recompile. The default pdfLaTeX compiler is
          correct and every package used ships with a standard TeX Live install.
        </li>
        <li>
          <strong>Locally:</strong> save as <GuideCode>paper.tex</GuideCode> and run:
          <GuidePre>{`pdflatex paper.tex
# or, with biblatex-mla:
latexmk -pdf paper.tex`}</GuidePre>
          One pdfLaTeX pass is enough for the manual Works Cited; biblatex needs the biber
          run that <GuideCode>latexmk</GuideCode> performs automatically.
        </li>
      </GuideOl>

      <GuideH2 id="comparison">Related templates</GuideH2>
      <GuideTable
        headers={["Template", "Best for", "Style", "Formatting"]}
        rows={[
          [
            <strong key="m">MLA Format Paper</strong>,
            "Essays and research papers for literature, composition and humanities courses",
            "MLA 9",
            "Heading, header, double spacing, block quote and Works Cited all set up",
          ],
          [
            <GuideLink key="w" href="/templates/mla-works-cited">
              MLA Works Cited Page
            </GuideLink>,
            "The reference list on its own, with eight entry formats to copy",
            "MLA 9",
            "Hanging indent, running header and alphabetised sample entries",
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
            <GuideLink key="e" href="/templates/essay">
              Academic Essay
            </GuideLink>,
            "Essays where no citation style is prescribed",
            "Plain article",
            "12pt text with a simple title block",
          ],
        ]}
      />

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
