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
    question: "What is an annotated bibliography?",
    answer:
      "It is a list of sources (books, articles, web pages) formatted as a reference list, in which each citation is followed by a short paragraph, the annotation, that summarises the source, evaluates its quality and explains how it relates to your research. Instructors assign one so you read your sources closely before you write the paper. It is usually a standalone assignment, though it can also be attached to a paper or proposal.",
  },
  {
    question: "How long should each annotation be?",
    answer:
      "Most assignments ask for 100 to 150 words per source, which is one solid paragraph covering the summary, the evaluation and the relevance. Some instructors ask for 200 to 300 words or for separate paragraphs for each part. Check the brief; if it does not say, the three sample annotations in this template (121 to 126 words each) are a safe length.",
  },
  {
    question: "What is the difference between an APA and an MLA annotated bibliography?",
    answer:
      "The layout is nearly identical: double spacing, a hanging indent on the citation and an annotation indented half an inch. The citations differ. APA 7 uses initials, the year in parentheses after the author, sentence-case titles and a page number in the header; MLA 9 uses full names, title case with quotation marks for articles, the date after the publisher and a running header with your last name. The heading is bold in APA and plain in MLA. This template switches between the two with one line.",
  },
  {
    question: "How do I make a hanging indent and an indented annotation in LaTeX?",
    answer:
      "The citation uses \\hangindent=0.5in with \\hangafter=1, which indents every line after the first. The annotation sets \\leftskip=0.5in inside a group, which moves the whole paragraph in by half an inch. Both are plain TeX primitives, so no extra package is needed and the trick works in any document class. The template wraps them in \\entry{...} and \\annotation{...} so you never touch the primitives.",
  },
  {
    question: "Can I generate an annotated bibliography from a .bib file?",
    answer:
      "Yes. biblatex reads an annotation field from each BibTeX entry. Load \\usepackage[style=apa,backend=biber]{biblatex} (or style=mla), add an annotation = {...} field to every entry in refs.bib, redefine the annotation field format to print as an indented paragraph, and finish with \\printbibliography[title={Annotated Bibliography}]. The comment block at the top of the template shows the four lines needed. For a short assignment the manual \\entry / \\annotation pair is quicker and easier to proofread.",
  },
  {
    question: "Does an annotated bibliography need a title page?",
    answer:
      "In APA 7 a student assignment normally has a title page with the title, your name, course, instructor and due date, followed by the annotated bibliography on the next page. In MLA 9 there is no title page; your name, instructor, course and date go in the top left corner of the first page. Neither is included here so the template stays standalone; append it to the APA Title Page template or add the MLA four-line heading before the centred title.",
  },
];

export default function AnnotatedBibliographyGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is this annotated bibliography template?</GuideH2>
      <GuideP>
        This is a free LaTeX template for an annotated bibliography in APA 7 format, with a
        one-line switch to MLA 9. It gives you letter paper with one-inch margins, 12-point
        Times-style text, double spacing, left-aligned text with hyphenation off, the page
        number in the top right corner, the heading &quot;Annotated Bibliography&quot; centred
        and bold, every reference flush left with a half-inch hanging indent, and every
        annotation as a separate paragraph indented half an inch from the left margin, which
        is exactly what section 9.51 of the <em>Publication Manual</em> asks for. Three
        fictional sample sources (a journal article with a DOI, a book and a web page) come
        with finished 120-word annotations you can study and replace.
      </GuideP>
      <GuideP>
        The document class is plain <GuideCode>article</GuideCode>, and the layout comes from
        four standard packages: <GuideCode>geometry</GuideCode>, <GuideCode>newtxtext</GuideCode>,{" "}
        <GuideCode>setspace</GuideCode> and <GuideCode>fancyhdr</GuideCode>. Two tiny commands
        defined in the preamble, <GuideCode>\entry{"{...}"}</GuideCode> for the citation and{" "}
        <GuideCode>\annotation{"{...}"}</GuideCode> for the paragraph under it, do all the
        indenting. Nothing needs installing; the file compiles with pdfLaTeX on any TeX
        distribution and in Overleaf.
      </GuideP>

      <GuideH2 id="example">Annotated bibliography example</GuideH2>
      <GuideP>
        Here is the first source from the template as it appears on the page. The citation is
        an APA 7 journal article with two authors and a DOI; the annotation underneath it runs
        to 126 words and moves through summary, evaluation and relevance in that order.
      </GuideP>
      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 px-6 py-5 font-serif text-[15px] leading-7 text-gray-900">
        <p className="pl-8 -indent-8">
          Halvorsen, I., &amp; Reyes, T. (2023). Sleep timing and working memory in first-year
          undergraduates. <em>Journal of Student Learning Research, 14</em>(2), 115&ndash;132.
          https://doi.org/10.0000/jslr.2023.0142
        </p>
        <p className="mt-4 pl-8">
          Halvorsen and Reyes report a semester-long study of 212 first-year undergraduates
          that tracked bedtime with wrist actigraphy and measured working memory with a
          digit-span task every four weeks. Students whose bedtimes varied by more than ninety
          minutes across the week scored lower on every test than consistent sleepers, even
          when total sleep time was the same. The sample is large and the measures are
          objective, but all participants came from one campus and the authors do not control
          for caffeine or screen use, which they acknowledge as a limitation. The article is
          the most rigorous evidence in this bibliography for the claim that sleep regularity,
          not only sleep length, affects learning, and it supplies the working-memory data on
          which the second section of my paper rests.
        </p>
      </div>
      <GuideP>
        Notice the three moves. Sentences one and two <strong>summarise</strong> what the
        authors did and found. Sentence three <strong>evaluates</strong>: it names a strength
        (sample size, objective measures) and a weakness (one campus, no control for caffeine).
        The last sentence states the <strong>relevance</strong>: which claim in the paper this
        source supports and where it will be used. The same shape works for every source type.
        In LaTeX the example is simply:
      </GuideP>
      <GuidePre>{`\\entry{Halvorsen, I., \\& Reyes, T. (2023). Sleep timing and working memory in first-year undergraduates. \\textit{Journal of Student Learning Research, 14}(2), 115--132. \\url{https://doi.org/10.0000/jslr.2023.0142}}
\\annotation{Halvorsen and Reyes report a semester-long study of 212 first-year undergraduates ...}`}</GuidePre>

      <GuideH2 id="contents">What an annotation must contain: summary, evaluation, relevance</GuideH2>
      <GuideP>
        An annotation is not an abstract copied from the journal and not a book review. Most
        rubrics score the same three parts, so write one or two sentences on each and keep the
        whole paragraph between 100 and 150 words unless the assignment says otherwise.
      </GuideP>
      <GuideOl>
        <li>
          <strong>Summary.</strong> What is the source about and what does it argue or find?
          For an empirical study, name the method, the sample and the main result. For a book
          or essay, state the thesis and the scope. Use your own words; do not quote.
        </li>
        <li>
          <strong>Evaluation.</strong> How reliable and useful is it? Comment on the author&apos;s
          credentials, the evidence and method, the date, any bias or limitation, and how it
          compares with other sources in the list. Be specific: &quot;the sample is drawn from one
          campus&quot; beats &quot;the study has limitations&quot;.
        </li>
        <li>
          <strong>Relevance.</strong> How will you use it? Say which part of your argument it
          supports, what background or counter-argument it provides, or why it shaped your
          research question. If the assignment is a standalone exercise, say how it fits the
          topic.
        </li>
      </GuideOl>
      <GuideP>
        Some instructors ask for a purely descriptive (summary-only) or a purely evaluative
        annotation, or for the three parts as separate paragraphs. The{" "}
        <GuideCode>\annotation</GuideCode> command accepts several paragraphs; separate them
        with a blank line and APA will want the second and later paragraphs to carry an extra
        first-line indent, which you can add with <GuideCode>\hspace*{"{0.5in}"}</GuideCode>.
      </GuideP>

      <GuideH2 id="apa">APA annotated bibliography format (APA 7)</GuideH2>
      <GuideP>
        Use this checklist against your own page. Everything in the left column is set up in
        the template; the right column shows which line does it.
      </GuideP>
      <GuideTable
        headers={["Rule (APA 7, section 9.51)", "Where the template handles it"]}
        rows={[
          [
            "One-inch margins on all sides, 12-point legible font such as Times New Roman",
            <>
              <GuideCode>\usepackage[margin=1in]{"{geometry}"}</GuideCode> and{" "}
              <GuideCode>newtxtext</GuideCode>
            </>,
          ],
          [
            "Double spacing throughout, no extra space between references or annotations",
            <>
              <GuideCode>\doublespacing</GuideCode> and{" "}
              <GuideCode>\setlength{"{\\parskip}{0pt}"}</GuideCode>
            </>,
          ],
          [
            "Text left-aligned with an uneven right margin, no automatic hyphenation",
            <>
              <GuideCode>\raggedright</GuideCode> and <GuideCode>\hyphenpenalty=10000</GuideCode>
            </>,
          ],
          [
            "Page number top right; student papers have no running head",
            <GuideCode key="head">\fancyhead[R]{"{\\thepage}"}</GuideCode>,
          ],
          [
            "Heading \"Annotated Bibliography\" bold and centred (an APA section label)",
            <GuideCode key="heading">{"{\\centering\\textbf{Annotated Bibliography}\\par}"}</GuideCode>,
          ],
          [
            "References alphabetised by first author's surname, each with a 0.5 in hanging indent",
            <>
              <GuideCode>\entry</GuideCode> uses <GuideCode>\hangindent=0.5in</GuideCode>; you
              order the entries
            </>,
          ],
          [
            "Annotation as a new paragraph under its reference, indented 0.5 in from the left margin, flush left within that indent",
            <>
              <GuideCode>\annotation</GuideCode> sets <GuideCode>\leftskip=0.5in</GuideCode>
            </>,
          ],
          [
            "Reference format: Author, A. A. (Year). Title in sentence case. Source. DOI as https://doi.org/...",
            "The three sample entries; DOIs and URLs with \\url{...} in the body font",
          ],
        ]}
      />

      <GuideH3>The three APA reference patterns in the template</GuideH3>
      <GuideUl>
        <li>
          <strong>Journal article:</strong> Author, A. A., &amp; Author, B. B. (Year). Title of
          article. <em>Journal Name, volume</em>(issue), first&ndash;last page. https://doi.org/xxx
          &mdash; the journal name and volume number are italic together, the issue number is
          not.
        </li>
        <li>
          <strong>Book:</strong> Author, A. A. (Year). <em>Title of book: Subtitle in sentence
          case</em>. Publisher. &mdash; no place of publication in APA 7, and the publisher&apos;s
          name is given in full.
        </li>
        <li>
          <strong>Web page:</strong> Group Author. (Year, Month Day). <em>Title of page</em>.
          Site Name. URL &mdash; omit the site name when it is the same as the author, as in the
          Sleep Research Collective entry; add &quot;Retrieved Month Day, Year, from&quot; before
          the URL only if the page is designed to change.
        </li>
      </GuideUl>

      <GuideH2 id="mla">MLA annotated bibliography format (MLA 9)</GuideH2>
      <GuideP>
        To switch the whole document to MLA 9, change one line in the preamble and set your
        surname:
      </GuideP>
      <GuidePre>{`\\newif\\ifmla
\\mlatrue                    % was \\mlafalse
\\newcommand{\\lastname}{Smith}`}</GuidePre>
      <GuideP>
        Every <GuideCode>\ifmla ... \else ... \fi</GuideCode> block in the file then takes its
        first branch: the running header becomes &quot;Smith 1&quot;, the heading becomes plain
        centred text (MLA does not bold section headings), and the three references print in
        MLA form while the annotations stay as they are. The MLA Handbook calls the list an
        &quot;Annotated Bibliography&quot; or &quot;Annotated List of Works Cited&quot;; edit the
        heading string if your instructor prefers the second. Everything else, including the
        double spacing, hanging indent and indented annotation, is the same in both styles, so
        the switch only touches what differs.
      </GuideP>
      <GuideTable
        headers={["Element", "APA 7", "MLA 9"]}
        rows={[
          ["Author", "Halvorsen, I., & Reyes, T.", "Halvorsen, Ingrid, and Tomás Reyes."],
          ["Date", "(2023) right after the author", "2023, after the volume and issue"],
          ["Article title", "Sentence case, no quotation marks", "Title Case in “curly quotation marks”"],
          ["Volume and issue", "14(2) with the volume italic", "vol. 14, no. 2"],
          ["Pages", "115–132", "pp. 115–32"],
          ["URL", "https://www.example.org/...", "www.example.org/... (protocol dropped)"],
          ["Heading", "Bold, centred", "Plain, centred"],
          ["Header", "Page number", "Last name and page number"],
        ]}
      />
      <GuideP>
        Write each MLA entry with the same <GuideCode>\entry</GuideCode> command; the template
        shows the MLA versions of all three sample sources in the <GuideCode>\ifmla</GuideCode>{" "}
        branches. For the full set of MLA core elements and more entry formats, see the{" "}
        <GuideLink href="/templates/mla-works-cited">MLA Works Cited Page</GuideLink> template.
      </GuideP>

      <GuideH2 id="walkthrough">Section-by-section walkthrough</GuideH2>
      <GuideH3>Preamble: page, font, spacing and header</GuideH3>
      <GuidePre>{`\\documentclass[12pt,letterpaper]{article}
\\usepackage[margin=1in,headheight=15pt,headsep=21pt]{geometry}
\\usepackage{newtxtext}      % Times-like 12 pt text font
\\usepackage{setspace}       % double spacing
\\usepackage{fancyhdr}       % page number in the header
\\usepackage[hidelinks]{hyperref}   % also loads url
\\urlstyle{same}

\\newif\\ifmla
\\mlafalse                   % APA 7 (default); \\mlatrue for MLA 9
\\newcommand{\\lastname}{Smith}

\\doublespacing
\\raggedright
\\hyphenpenalty=10000
\\frenchspacing
\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{0pt}
\\pagestyle{fancy}
\\fancyhf{}
\\ifmla \\fancyhead[R]{\\lastname\\ \\thepage} \\else \\fancyhead[R]{\\thepage} \\fi
\\renewcommand{\\headrulewidth}{0pt}`}</GuidePre>
      <GuideP>
        <GuideCode>headheight</GuideCode> plus <GuideCode>headsep</GuideCode> add up to half an
        inch, which puts the page number where both style guides want it.{" "}
        <GuideCode>\raggedright</GuideCode> and <GuideCode>\hyphenpenalty=10000</GuideCode> give
        the left-aligned, unhyphenated text APA 7 (section 2.23) and MLA 9 both require.{" "}
        <GuideCode>\frenchspacing</GuideCode> gives one space after a period, and{" "}
        <GuideCode>\urlstyle{"{same}"}</GuideCode> keeps DOIs and URLs in the body font. The{" "}
        <GuideCode>url</GuideCode> package lets a long DOI break after a slash or period rather
        than poke into the margin.
      </GuideP>

      <GuideH3>The \entry and \annotation commands</GuideH3>
      <GuidePre>{`\\newcommand{\\entry}[1]{%
  \\par\\noindent\\hangindent=0.5in\\hangafter=1 #1\\par}

\\newcommand{\\annotation}[1]{%
  \\par{\\leftskip=0.5in\\noindent #1\\par}}`}</GuidePre>
      <GuideP>
        Each reference is one paragraph with <GuideCode>\hangindent=0.5in</GuideCode> and{" "}
        <GuideCode>\hangafter=1</GuideCode>, so line one sits flush left and every later line is
        indented half an inch. The annotation is a paragraph whose{" "}
        <GuideCode>\leftskip</GuideCode> is half an inch, so every line of it, including the
        first, starts half an inch in. Because the assignment is made inside a group and ended
        with <GuideCode>\par</GuideCode> before the closing brace, it applies to that paragraph
        only, and the next <GuideCode>\entry</GuideCode> returns to the margin. No{" "}
        <GuideCode>hanging</GuideCode> or <GuideCode>changepage</GuideCode> package is needed.
      </GuideP>

      <GuideH3>The body</GuideH3>
      <GuideP>
        The body is the centred heading followed by three source blocks, each an{" "}
        <GuideCode>\ifmla</GuideCode> pair of references (MLA first, APA second) and one{" "}
        <GuideCode>\annotation</GuideCode>. Sources are in alphabetical order: Halvorsen,
        Okafor, Sleep Research Collective. To add a fourth source, copy a block, replace the
        two references and the annotation, and put it in the right alphabetical position; if
        you only ever use one style you can delete the other branch and the{" "}
        <GuideCode>\ifmla</GuideCode> / <GuideCode>\else</GuideCode> / <GuideCode>\fi</GuideCode>{" "}
        lines.
      </GuideP>

      <GuideH2 id="customize">How to customize the template</GuideH2>
      <GuideUl>
        <li>
          <strong>Change the heading.</strong> Edit the string in the two{" "}
          <GuideCode>\centering</GuideCode> lines. APA assignments sometimes want the paper
          title instead of &quot;Annotated Bibliography&quot;; MLA may want &quot;Annotated List
          of Works Cited&quot;.
        </li>
        <li>
          <strong>Add an APA title page.</strong> Put the body of this file after the{" "}
          <GuideCode>\maketitle</GuideCode> of the{" "}
          <GuideLink href="/templates/apa-title-page">APA Title Page</GuideLink> template (which
          uses the <GuideCode>apa7</GuideCode> class) and move the{" "}
          <GuideCode>\entry</GuideCode> and <GuideCode>\annotation</GuideCode> definitions into
          its preamble; the class already sets the margins, spacing and page number.
        </li>
        <li>
          <strong>Add the MLA first-page heading.</strong> Before the centred title, add four
          flush-left lines: your name, the instructor&apos;s name, the course, and the date as
          day Month year, each ended with <GuideCode>\\</GuideCode>.
        </li>
        <li>
          <strong>Longer annotations.</strong> The command takes any amount of text. For
          separate summary, evaluation and relevance paragraphs, leave a blank line between
          them inside the braces and start the second and third with{" "}
          <GuideCode>\hspace*{"{0.5in}"}</GuideCode> for the APA first-line indent.
        </li>
        <li>
          <strong>Generate it from a .bib file.</strong> For a long list, keep the sources and
          annotations in BibTeX with an <GuideCode>annotation</GuideCode> field and let{" "}
          <GuideCode>biblatex</GuideCode> (style <GuideCode>apa</GuideCode> or{" "}
          <GuideCode>mla</GuideCode>) build the page; the four lines are in the comment block
          at the top of the template. Compile with <GuideCode>latexmk</GuideCode> so biber runs.
        </li>
        <li>
          <strong>Font and paper.</strong> <GuideCode>newtxtext</GuideCode> is the maintained
          Times clone; <GuideCode>mathptmx</GuideCode> or <GuideCode>times</GuideCode> give the
          same look on an older distribution. Outside North America replace{" "}
          <GuideCode>letterpaper</GuideCode> with <GuideCode>a4paper</GuideCode> in the class
          options and in <GuideCode>geometry</GuideCode>.
        </li>
      </GuideUl>

      <GuideH2 id="mistakes">Common mistakes and how to fix them</GuideH2>
      <GuideUl>
        <li>
          <strong>Annotation that only summarises.</strong> The commonest reason for a low mark.
          Every annotation needs at least one sentence of evaluation and one of relevance; use
          the three-part structure above as a checklist.
        </li>
        <li>
          <strong>Annotation flush with the margin.</strong> If you type the paragraph without{" "}
          <GuideCode>\annotation{"{...}"}</GuideCode> it starts at the left margin and looks like
          a second reference. Wrap it in the command.
        </li>
        <li>
          <strong>Entries not alphabetised.</strong> LaTeX prints blocks in the order you write
          them. Sort by the first author&apos;s surname; for a source with no author, by the
          first significant word of the title.
        </li>
        <li>
          <strong>Title case in an APA reference.</strong> APA 7 uses sentence case for article
          and book titles (capitalise only the first word, the first word after a colon and
          proper nouns); journal names stay in title case. MLA uses title case throughout.
        </li>
        <li>
          <strong>Ampersand errors.</strong> In the APA author list type{" "}
          <GuideCode>\&amp;</GuideCode>, not a bare <GuideCode>&amp;</GuideCode>, which LaTeX
          reads as a table column separator and stops with &quot;Misplaced alignment tab&quot;.
        </li>
        <li>
          <strong>Extra space between sources.</strong> A blank line between blocks is harmless,
          but <GuideCode>\vspace</GuideCode> or <GuideCode>\bigskip</GuideCode> breaks the uniform
          double spacing both styles require. Remove them.
        </li>
        <li>
          <strong>Heading made with \section*.</strong> That prints it larger and left-aligned.
          Both styles want the heading in the same size as the body, centred; the template uses{" "}
          <GuideCode>\centering</GuideCode> inside a group so no extra vertical space is added.
        </li>
        <li>
          <strong>&quot;Undefined control sequence \entry&quot;.</strong> You pasted the body
          into another document without the two <GuideCode>\newcommand</GuideCode> lines. Copy
          them into that preamble too.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile the annotated bibliography</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> click <em>Open as template</em> above. The document opens
          with a live preview; replace the sample sources, or paste a citation and ask the AI
          assistant to format it in APA 7 or MLA 9 and draft the annotation from your notes.
        </li>
        <li>
          <strong>In Overleaf:</strong> create a blank project, paste the source into{" "}
          <GuideCode>main.tex</GuideCode> and recompile with the default pdfLaTeX compiler.
          Every package used is in a standard TeX Live install.
        </li>
        <li>
          <strong>Locally:</strong> save as <GuideCode>annotated-bibliography.tex</GuideCode> and
          run:
          <GuidePre>{`pdflatex annotated-bibliography.tex
# or, with biblatex and a .bib file:
latexmk -pdf annotated-bibliography.tex`}</GuidePre>
          One pdfLaTeX pass is enough for the manual version.
        </li>
      </GuideOl>

      <GuideH2 id="comparison">Related templates</GuideH2>
      <GuideTable
        headers={["Template", "Best for", "Style", "Formatting"]}
        rows={[
          [
            <strong key="a">Annotated Bibliography</strong>,
            "Research-methods, composition and literature-review assignments",
            "APA 7 or MLA 9",
            "Hanging-indent references with indented annotation paragraphs; manual entries",
          ],
          [
            <GuideLink key="m" href="/templates/mla-works-cited">
              MLA Works Cited Page
            </GuideLink>,
            "The plain works cited list at the end of an MLA essay",
            "MLA 9",
            "Running header, hanging indent and eight entry formats",
          ],
          [
            <GuideLink key="t" href="/templates/apa-title-page">
              APA Title Page
            </GuideLink>,
            "The cover page an APA assignment needs in front of this list",
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
        ]}
      />

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
