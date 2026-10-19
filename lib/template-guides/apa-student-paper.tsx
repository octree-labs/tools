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
    question: "What margins does an APA 7 paper use?",
    answer:
      "One inch (2.54 cm) on all four sides of every page, including the title page and the References page. The apa7 class sets this for you; do not load geometry on top of it. The page number sits in the header, inside the top margin, flush right.",
  },
  {
    question: "What font does APA 7 require?",
    answer:
      "APA 7 accepts several fonts as long as you use one consistently: 12-point Times New Roman, 11-point Calibri, 11-point Arial, 11-point Georgia, or 10-point Lucida Sans Unicode, and the manual explicitly lists 10-point Computer Modern, LaTeX's default, as acceptable too. The template loads newtxtext for the Times New Roman look most instructors expect; delete that line to use Computer Modern instead.",
  },
  {
    question: "Is an APA paper double spaced everywhere?",
    answer:
      "Yes. The whole paper is double spaced: title page, body text, headings, block quotations and the References page. There is no extra blank line before or after headings or between paragraphs, and every paragraph starts with a 0.5-inch first-line indent. The only exceptions are the body of tables and figures (single, 1.5 or double spacing), footnotes (single spaced) and displayed equations, which may be set with extra space. The apa7 class applies double spacing automatically in stu and man modes; do not add setspace.",
  },
  {
    question: "Does a student APA paper need a running head?",
    answer:
      "No. APA 7 removed the running head from student papers; only a page number, flush right in the header of every page, is required. The title page counts as page 1. Professional (manuscript) papers still carry a running head of up to 50 characters in capital letters, which you give the apa7 class with \\shorttitle after switching the class option from stu to man.",
  },
  {
    question: "Does a student APA paper need an abstract?",
    answer:
      "Usually not. The APA 7 student paper format does not include an abstract unless the instructor or institution asks for one. If yours does, add \\abstract{...} before \\begin{document}; the apa7 class then prints it on its own page after the title page, with the heading Abstract centred in bold, the paragraph not indented, and optional keywords on an indented line below it.",
  },
  {
    question: "How do I cite in APA format in LaTeX?",
    answer:
      "Load biblatex with style=apa and backend=biber, keep your sources in a .bib file and cite with \\textcite{key} for a narrative citation (Halvorsen and Reyes (2023) found...) or \\parencite{key} for a parenthetical one (...was the same (Okafor, 2021)). Add a page with \\parencite[p.~12]{key}. \\printbibliography at the end produces the References page, formatted and alphabetised by the biblatex-apa style. Compile with latexmk so biber runs.",
  },
  {
    question: "Where does the References page go and how is it formatted?",
    answer:
      "On its own page immediately after the last page of text, continuing the page numbering, with the heading References centred in bold at the top. Entries are double spaced, listed alphabetically by the first author's surname, and each has a 0.5-inch hanging indent: the first line flush left and every following line indented. biblatex-apa and the apa7 class produce all of this from \\printbibliography; nothing in the reference list is typed by hand.",
  },
];

export default function ApaStudentPaperGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is this APA student paper template?</GuideH2>
      <GuideP>
        This is a free LaTeX template for a complete student paper in APA format, following
        the <em>Publication Manual of the American Psychological Association</em>, 7th
        edition. It is a working APA paper example rather than a blank skeleton: a student
        title page with title, author, affiliation, course, instructor and due date; the
        page number in the top right corner of every page; the title repeated as the first
        line of the body; Level 1, 2 and 3 headings; double-spaced 12-point text with
        one-inch margins and half-inch paragraph indents; narrative and parenthetical
        author-date citations; and a References page on its own sheet with hanging indents.
        The sample body is a short report (an introduction, then Method, Results and
        Discussion) so you can compare every rule against the preview above.
      </GuideP>
      <GuideP>
        The document class is <GuideCode>apa7</GuideCode>, the maintained APA class in TeX
        Live and Overleaf, in its student mode (<GuideCode>stu</GuideCode>). The class owns
        the formatting, so the preamble is short: <GuideCode>babel</GuideCode> and{" "}
        <GuideCode>csquotes</GuideCode> for American English punctuation,{" "}
        <GuideCode>newtxtext</GuideCode> for a Times New Roman look, and{" "}
        <GuideCode>biblatex</GuideCode> with the <GuideCode>apa</GuideCode> style and{" "}
        <GuideCode>biber</GuideCode> for citations. The three sample sources live in a small{" "}
        <GuideCode>.bib</GuideCode> file written out by a <GuideCode>filecontents</GuideCode>{" "}
        block, so the whole template is one file that compiles with{" "}
        <GuideCode>latexmk</GuideCode> anywhere.
      </GuideP>

      <GuideH2 id="rules">APA 7 student paper format rules</GuideH2>
      <GuideP>
        Use this checklist against your own paper. The left column is the rule from the
        manual; the right column is what in the template produces it.
      </GuideP>
      <GuideTable
        headers={["Rule", "Where the template handles it"]}
        rows={[
          [
            "Letter paper with one-inch margins on all sides",
            <>
              <GuideCode>apa7</GuideCode> class default
            </>,
          ],
          [
            "An accepted font, used consistently: 12 pt Times New Roman, 11 pt Calibri, Arial or Georgia, 10 pt Lucida Sans Unicode or Computer Modern",
            <>
              <GuideCode>12pt</GuideCode> class option and <GuideCode>\usepackage{"{newtxtext}"}</GuideCode>
            </>,
          ],
          [
            "Double spacing throughout, including title page, headings, quotations and references",
            <>
              <GuideCode>stu</GuideCode> mode sets it; no <GuideCode>setspace</GuideCode> needed
            </>,
          ],
          [
            "First line of every paragraph indented 0.5 in; no extra space between paragraphs",
            <>
              class default; paragraphs are separated by a blank line in the source
            </>,
          ],
          [
            "Page number flush right in the header of every page, title page included; no running head",
            <>
              <GuideCode>stu</GuideCode> mode prints only <GuideCode>\thepage</GuideCode>
            </>,
          ],
          [
            "Student title page: bold title, author, affiliation, course, instructor, due date, centred in the upper half",
            <>
              <GuideCode>\title</GuideCode>, <GuideCode>\authorsnames</GuideCode>,{" "}
              <GuideCode>\authorsaffiliations</GuideCode>, <GuideCode>\course</GuideCode>,{" "}
              <GuideCode>\professor</GuideCode>, <GuideCode>\duedate</GuideCode> and{" "}
              <GuideCode>\maketitle</GuideCode>
            </>,
          ],
          [
            "Title repeated in bold, centred, at the top of the first text page; no Introduction heading",
            <>
              class default (disable with the <GuideCode>donotrepeattitle</GuideCode> option)
            </>,
          ],
          [
            "Five heading levels: centred bold; flush-left bold; flush-left bold italic; indented bold run-in; indented bold italic run-in",
            <>
              <GuideCode>\section</GuideCode>, <GuideCode>\subsection</GuideCode>,{" "}
              <GuideCode>\subsubsection</GuideCode>, <GuideCode>\paragraph</GuideCode>,{" "}
              <GuideCode>\subparagraph</GuideCode>
            </>,
          ],
          [
            "Author-date citations: Author (Year) in the sentence, (Author, Year) in parentheses",
            <>
              <GuideCode>\textcite{"{key}"}</GuideCode> and <GuideCode>\parencite{"{key}"}</GuideCode>
            </>,
          ],
          [
            "References on a new page, heading centred in bold, alphabetical, 0.5 in hanging indent",
            <GuideCode key="pb">\printbibliography</GuideCode>,
          ],
          [
            "No abstract or running head on a student paper unless the instructor asks",
            <>
              omitted in <GuideCode>stu</GuideCode> mode; add <GuideCode>\abstract</GuideCode>{" "}
              or switch to <GuideCode>man</GuideCode> when required
            </>,
          ],
        ]}
      />

      <GuideH2 id="title-page">APA title page (student version)</GuideH2>
      <GuideP>
        The student title page is the part of APA 7 that differs most from the professional
        format, and the apa7 class builds it for you from six commands in the preamble:
      </GuideP>
      <GuidePre>{`\\title{Sleep Regularity and Working Memory in First-Year Undergraduates}
\\authorsnames{Jordan A. Rivera}
\\authorsaffiliations{{Department of Psychology, Example University}}
\\course{PSY 240: Cognitive Psychology}
\\professor{Dr. Maria Lopez}
\\duedate{October 19, 2026}

\\begin{document}
\\maketitle`}</GuidePre>
      <GuideP>
        <GuideCode>\maketitle</GuideCode> lays the page out as the manual specifies: the
        title in bold, title case, centred three or four lines below the top margin, then a
        blank double-spaced line, then the author&apos;s name, the department and
        university, the course number and name, the instructor&apos;s name and the due
        date, each on its own centred line. The page number 1 sits in the top right corner;
        there is no running head, no author note and no abstract. For a group assignment
        list the authors on one line with <GuideCode>\authorsnames{"{Ana Kim, Lee Park}"}</GuideCode>;
        the double braces in <GuideCode>\authorsaffiliations</GuideCode> wrap each
        affiliation, so a second institution is a second{" "}
        <GuideCode>{"{...}"}</GuideCode> group.
      </GuideP>
      <GuideP>
        Write the date in the form your instructor uses; the manual&apos;s examples use the
        Month Day, Year form, as in <em>October 19, 2026</em>. If you only need the cover sheet, the{" "}
        <GuideLink href="/templates/apa-title-page">APA title page template</GuideLink> is
        this same block on its own.
      </GuideP>

      <GuideH2 id="headings">APA headings (Levels 1–5)</GuideH2>
      <GuideP>
        APA 7 defines five heading levels and the apa7 class maps the five standard LaTeX
        sectioning commands onto them, with no numbering:
      </GuideP>
      <GuideTable
        headers={["Level", "Format", "LaTeX command"]}
        rows={[
          [
            "1",
            "Centred, bold, title case; text begins on the next line as a new paragraph",
            <GuideCode key="1">\section{"{Method}"}</GuideCode>,
          ],
          [
            "2",
            "Flush left, bold, title case; text begins on the next line",
            <GuideCode key="2">\subsection{"{Participants}"}</GuideCode>,
          ],
          [
            "3",
            "Flush left, bold italic, title case; text begins on the next line",
            <GuideCode key="3">\subsubsection{"{Sleep Diary}"}</GuideCode>,
          ],
          [
            "4",
            "Indented, bold, title case, ending with a period; text continues on the same line",
            <GuideCode key="4">\paragraph{"{Stimuli}"}</GuideCode>,
          ],
          [
            "5",
            "Indented, bold italic, title case, ending with a period; text continues on the same line",
            <GuideCode key="5">\subparagraph{"{Practice Trials}"}</GuideCode>,
          ],
        ]}
      />
      <GuideP>
        The template uses Levels 1 to 3 (<em>Method</em>, <em>Participants</em>,{" "}
        <em>Sleep Diary</em>). The introduction has no heading of its own: APA treats the
        repeated title on the first text page as its Level 1 heading, which is why the class
        prints it there and the first paragraph follows directly. Use levels in order (a
        Level 3 only under a Level 2) and give a section at least two subsections or none.
        Headings are double spaced like the body with no extra space above or below; the
        class takes care of that, so never add <GuideCode>\vspace</GuideCode> around them.
        Do not use <GuideCode>\section*</GuideCode> to drop the number: apa7 already
        prints headings unnumbered.
      </GuideP>

      <GuideH2 id="citations">In-text citations and references</GuideH2>
      <GuideP>
        APA uses author-date citations. A <strong>narrative</strong> citation names the
        author as part of the sentence with the year in parentheses:{" "}
        <em>Halvorsen and Reyes (2023) found that...</em>. A <strong>parenthetical</strong>{" "}
        citation puts both inside the parentheses at the end of the clause:{" "}
        <em>...which stages a night contains (Okafor, 2021).</em> Two authors are joined
        with &quot;and&quot; in a narrative citation and an ampersand in a parenthetical
        one; three or more authors become the first surname plus <em>et al.</em> from the
        first citation; a group author is written out in full. The template loads{" "}
        <GuideCode>biblatex</GuideCode> with the <GuideCode>apa</GuideCode> style so these
        rules are applied for you:
      </GuideP>
      <GuidePre>{`\\usepackage[american]{babel}
\\usepackage{csquotes}
\\usepackage[style=apa,backend=biber]{biblatex}
\\addbibresource{sample-refs.bib}

\\textcite{halvorsen2023} found that students ...       % Halvorsen and Reyes (2023) found that students ...
... which stages a night contains \\parencite{okafor2021}.   % ... (Okafor, 2021).
... as one review put it \\parencite[p.~41]{okafor2021}.    % ... (Okafor, 2021, p. 41).`}</GuidePre>
      <GuideP>
        <GuideCode>babel</GuideCode> with the <GuideCode>american</GuideCode> option and{" "}
        <GuideCode>csquotes</GuideCode> are required by biblatex-apa; they supply the
        English connectives and the quotation-mark style the APA style expects. Sources are
        ordinary BibTeX entries. The template writes three samples (a journal article with a
        DOI, a book and a web page by a group author) into{" "}
        <GuideCode>sample-refs.bib</GuideCode> through a <GuideCode>filecontents*</GuideCode>{" "}
        block so that nothing else has to be uploaded:
      </GuideP>
      <GuidePre>{`\\begin{filecontents*}[overwrite]{sample-refs.bib}
@article{halvorsen2023,
  author  = {Halvorsen, Ingrid and Reyes, Tom{\\'a}s},
  title   = {Sleep timing and working memory in first-year undergraduates},
  journal = {Journal of Student Learning Research},
  year    = {2023},
  volume  = {14},
  number  = {2},
  pages   = {115--132},
  doi     = {10.0000/jslr.2023.0142},
}
@online{src2024,
  author  = {{Sleep Research Collective}},
  title   = {Study habits and sleep: A guide for first-year students},
  date    = {2024-03-08},
  url     = {https://www.example.org/sleep-guide},
}
\\end{filecontents*}`}</GuidePre>
      <GuideP>
        Note the two details that trip people up: a group author goes in double braces so
        biber does not split it into a first and last name, and a web page uses a full{" "}
        <GuideCode>date</GuideCode> field so the reference prints <em>(2024, March 8)</em>.
        Titles are entered in sentence case; biblatex-apa keeps them as written. At the end
        of the paper <GuideCode>\printbibliography</GuideCode> starts the References page,
        centres its bold heading, sorts the entries by surname and sets each with a
        half-inch hanging indent. If you prefer BibTeX, the apa7 class also supports <GuideCode>apacite</GuideCode> through
        its <GuideCode>apacite</GuideCode> and <GuideCode>natbib</GuideCode> class options, but
        biblatex-apa is the maintained option and the class default.
      </GuideP>

      <GuideH2 id="format-example">APA paper example: page by page</GuideH2>
      <GuideP>
        Here is what the compiled template looks like. <strong>Page 1</strong> is the title
        page: the number 1 in the top right corner, the bold title centred in the upper
        half, and below it <em>Jordan A. Rivera</em>, <em>Department of Psychology,
        Example University</em>, <em>PSY 240: Cognitive Psychology</em>,{" "}
        <em>Dr. Maria Lopez</em> and <em>October 19, 2026</em>, each on its own
        double-spaced line. <strong>Page 2</strong> opens with the title again in bold,
        then the introduction, which contains a narrative citation,{" "}
        <em>Halvorsen and Reyes (2023)</em>, and two parenthetical ones. The Level 1
        heading <em>Method</em> is centred in bold; under it <em>Participants</em> and{" "}
        <em>Materials</em> are Level 2, flush left in bold, and <em>Sleep Diary</em> and{" "}
        <em>Working Memory Task</em> are Level 3, flush left in bold italic.
      </GuideP>
      <GuideP>
        <strong>Page 3</strong> carries the <em>Results</em> and <em>Discussion</em>{" "}
        sections, with statistical symbols in italics (<em>b</em>, <em>SE</em>, <em>p</em>)
        as the manual requires. <strong>Page 4</strong> is the References page: the heading
        centred in bold, three entries in alphabetical order, double spaced, each with a
        hanging indent, the DOI and URL printed as plain links. Every page has the number in
        the same place and nothing else in the header.
      </GuideP>

      <GuideH2 id="student-vs-professional">Student vs professional paper</GuideH2>
      <GuideP>
        APA 7 introduced two versions of the paper. The <strong>student paper</strong> is
        for coursework: a title page with course and instructor details, a page number but
        no running head, and no abstract, author note or keywords unless the instructor asks.
        The <strong>professional paper</strong> is for manuscripts sent to a journal: a
        running head on every page, an author note, an abstract with keywords, and
        affiliations given per author. The body, headings, citations and References page
        are identical in both.
      </GuideP>
      <GuideTable
        headers={["Element", "Student paper (stu)", "Professional paper (man)"]}
        rows={[
          ["Title page", "Title, author, affiliation, course, instructor, due date", "Title, authors, affiliations, author note"],
          ["Running head", "None; page number only", "Short title in capitals, max 50 characters, plus page number"],
          ["Abstract", "Only if required", "Required, usually no more than 250 words, with keywords"],
          ["Author note", "None", "ORCID, changes of affiliation, disclosures, contact"],
          ["Headings, citations, references", "Same", "Same"],
        ]}
      />
      <GuideP>
        The template ships in student mode and has the professional alternative in a
        commented block at the end of the preamble. To switch, change the class option and
        replace the student fields:
      </GuideP>
      <GuidePre>{`\\documentclass[man,12pt,floatsintext]{apa7}

\\shorttitle{SLEEP REGULARITY AND WORKING MEMORY}   % running head, caps, max 50 characters
\\authorsnames[1,2]{Jordan A. Rivera, Maria Lopez}
\\authorsaffiliations{{Department of Psychology, Example University},
                     {School of Education, Second University}}
\\authornote{Correspondence concerning this article should be addressed to ...}
\\abstract{One paragraph of up to 250 words.}
\\keywords{sleep, working memory, undergraduates}
% delete \\course, \\professor and \\duedate`}</GuidePre>
      <GuideP>
        The numbers in <GuideCode>\authorsnames[1,2]</GuideCode> attach each author to the
        matching affiliation. A third mode, <GuideCode>jou</GuideCode>, typesets the paper
        two-column as it would appear in a printed journal, and{" "}
        <GuideCode>doc</GuideCode> gives a plain single-spaced document; neither is used for
        submissions.
      </GuideP>

      <GuideH2 id="walkthrough">Section-by-section walkthrough</GuideH2>
      <GuideH3>Preamble: class, language, font and bibliography</GuideH3>
      <GuidePre>{`\\documentclass[stu,12pt,floatsintext]{apa7}

\\usepackage[american]{babel}
\\usepackage{csquotes}
\\usepackage{newtxtext}      % Times-like 12 pt text (APA 7 also accepts Computer Modern: delete this line)
\\usepackage[style=apa,backend=biber]{biblatex}`}</GuidePre>
      <GuideP>
        <GuideCode>stu</GuideCode> selects the student paper; <GuideCode>12pt</GuideCode>{" "}
        is the size for Times New Roman; <GuideCode>floatsintext</GuideCode> places tables
        and figures where they are referenced instead of collecting them after the
        References page, which is what instructors expect from a student paper. Nothing
        else about the page is set by hand: margins, spacing, indents and the header all
        come from the class. <GuideCode>newtxtext</GuideCode> only changes the typeface.
      </GuideP>

      <GuideH3>Title page fields and the body</GuideH3>
      <GuideP>
        After the bibliography block come the six title page commands, the commented
        professional alternative, and <GuideCode>\begin{"{document}"}</GuideCode> followed
        by <GuideCode>\maketitle</GuideCode>. The introduction starts straight after it,
        with no heading. Each later section is a <GuideCode>\section</GuideCode>, and
        subsections nest below it. Paragraphs are separated by a blank line in the source
        and get their half-inch indent automatically. Italicise statistical symbols with{" "}
        <GuideCode>\emph</GuideCode> and use a real minus sign, <GuideCode>$-$</GuideCode>,
        for negative values.
      </GuideP>

      <GuideH3>The References page</GuideH3>
      <GuidePre>{`\\section{Discussion}
...

\\printbibliography

\\end{document}`}</GuidePre>
      <GuideP>
        One command. The class starts a new page, prints <em>References</em> centred in
        bold, and biblatex-apa formats every cited entry with its hanging indent. Only
        sources you actually cite appear; to list a source you read but did not cite, add{" "}
        <GuideCode>\nocite{"{key}"}</GuideCode> anywhere in the body.
      </GuideP>

      <GuideH2 id="customize">How to customize the template</GuideH2>
      <GuideUl>
        <li>
          <strong>Your details.</strong> Edit the six title page commands in the preamble.
          Nothing else needs to change for a new paper.
        </li>
        <li>
          <strong>Your sources.</strong> Replace the entries inside the{" "}
          <GuideCode>filecontents*</GuideCode> block, or delete the block, upload your own{" "}
          <GuideCode>.bib</GuideCode> file and point <GuideCode>\addbibresource</GuideCode>{" "}
          at it. The <GuideCode>overwrite</GuideCode> option means the block rewrites{" "}
          <GuideCode>sample-refs.bib</GuideCode> on every run, so do not keep a real file
          under that name.
        </li>
        <li>
          <strong>Abstract.</strong> If required, add{" "}
          <GuideCode>\abstract{"{...}"}</GuideCode> and optionally{" "}
          <GuideCode>\keywords{"{...}"}</GuideCode> before{" "}
          <GuideCode>\begin{"{document}"}</GuideCode>; the class prints them on page 2.
        </li>
        <li>
          <strong>Tables and figures.</strong> Use the standard <GuideCode>table</GuideCode>{" "}
          and <GuideCode>figure</GuideCode> environments with <GuideCode>\caption</GuideCode>;
          the class formats the number in bold and the title in italics above the float, as
          APA 7 requires. Remove <GuideCode>floatsintext</GuideCode> to move all floats to
          the end of the paper, as a journal manuscript would.
        </li>
        <li>
          <strong>Font.</strong> Delete <GuideCode>newtxtext</GuideCode> for Computer Modern,
          or delete it and add the class options <GuideCode>helv</GuideCode> and{" "}
          <GuideCode>11pt</GuideCode> for a Helvetica (Arial-style) paper.
        </li>
        <li>
          <strong>Block quotations.</strong> Quotations of 40 words or more go in the{" "}
          <GuideCode>quote</GuideCode> environment with no quotation marks and the citation
          after the final period. The class keeps the double spacing; the standard environment
          indents the block about 0.4 in on both sides, close to the 0.5-inch left indent the
          manual specifies.
        </li>
        <li>
          <strong>Paper size.</strong> Add <GuideCode>a4paper</GuideCode> to the class
          options outside North America. The margins stay one inch.
        </li>
      </GuideUl>

      <GuideH2 id="mistakes">Common mistakes and how to fix them</GuideH2>
      <GuideUl>
        <li>
          <strong>Citations print as [halvorsen2023] or the References page is empty.</strong>{" "}
          biber has not run. Compile with <GuideCode>latexmk -pdf</GuideCode>, or run
          pdflatex, then <GuideCode>biber main</GuideCode>, then pdflatex twice. In Overleaf
          and Octree this happens automatically.
        </li>
        <li>
          <strong>Warning that csquotes is missing, or wrong quotation marks and punctuation.</strong>{" "}
          biblatex-apa needs csquotes and expects American babel. Keep <GuideCode>\usepackage[american]{"{babel}"}</GuideCode> and{" "}
          <GuideCode>\usepackage{"{csquotes}"}</GuideCode> in the preamble.
        </li>
        <li>
          <strong>Running head appears on a student paper.</strong> The class option is{" "}
          <GuideCode>man</GuideCode> or a <GuideCode>\shorttitle</GuideCode> was added. Use{" "}
          <GuideCode>stu</GuideCode> and leave <GuideCode>\shorttitle</GuideCode> out.
        </li>
        <li>
          <strong>Title missing from the top of page 2.</strong> The{" "}
          <GuideCode>donotrepeattitle</GuideCode> option is set. Remove it: APA 7 wants the
          title repeated above the introduction.
        </li>
        <li>
          <strong>Numbered headings.</strong> Something redefined the sectioning commands,
          usually a copied preamble with <GuideCode>titlesec</GuideCode>. Delete it; the
          class already prints unnumbered headings in the five APA styles.
        </li>
        <li>
          <strong>Single-spaced text or odd margins.</strong> <GuideCode>setspace</GuideCode>{" "}
          or <GuideCode>geometry</GuideCode> was loaded on top of the class. Remove them;
          both are already handled.
        </li>
        <li>
          <strong>Group author split into initials.</strong> <em>Collective, S. R.</em>{" "}
          in the reference list means the group name needs double braces in the{" "}
          <GuideCode>.bib</GuideCode> entry: <GuideCode>{"author = {{Sleep Research Collective}}"}</GuideCode>.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile the APA paper</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> click <em>Open as template</em> above. The paper opens
          with a live preview and biber runs on every compile; fill in the title page
          fields, paste your text, or ask the AI assistant to turn a source into a BibTeX
          entry.
        </li>
        <li>
          <strong>In Overleaf:</strong> create a blank project, paste the source into{" "}
          <GuideCode>main.tex</GuideCode> and recompile. Overleaf detects biblatex and runs
          biber for you; the apa7 class and biblatex-apa are preinstalled.
        </li>
        <li>
          <strong>Locally:</strong> save as <GuideCode>paper.tex</GuideCode> and run:
          <GuidePre>{`latexmk -pdf paper.tex
# or by hand:
pdflatex paper.tex && biber paper && pdflatex paper.tex && pdflatex paper.tex`}</GuidePre>
          <GuideCode>apa7</GuideCode>, <GuideCode>biblatex-apa</GuideCode> and{" "}
          <GuideCode>newtxtext</GuideCode> are all part of a full TeX Live or MiKTeX
          install.
        </li>
      </GuideOl>

      <GuideH2 id="comparison">Related templates</GuideH2>
      <GuideTable
        headers={["Template", "Best for", "Style", "Formatting"]}
        rows={[
          [
            <strong key="s">APA Student Paper</strong>,
            "Coursework in psychology, education, nursing and the social sciences",
            "APA 7",
            "Student title page, headings, citations and References all set up by apa7",
          ],
          [
            <GuideLink key="t" href="/templates/apa-title-page">
              APA Title Page
            </GuideLink>,
            "The cover sheet on its own, student or professional",
            "APA 7",
            <>
              Same <GuideCode>apa7</GuideCode> fields without the body
            </>,
          ],
          [
            <GuideLink key="a" href="/templates/annotated-bibliography">
              Annotated Bibliography
            </GuideLink>,
            "A reference list with a paragraph of evaluation under each source",
            "APA 7 / MLA 9",
            "Hanging-indent entries with indented annotations",
          ],
          [
            <GuideLink key="m" href="/templates/mla-paper">
              MLA Format Paper
            </GuideLink>,
            "Essays for literature, composition and humanities courses",
            "MLA 9",
            "Four-line heading, Lastname page-number header and Works Cited page",
          ],
        ]}
      />

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
