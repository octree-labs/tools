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
    question: "What goes on an APA 7 student title page?",
    answer:
      "Six things, centred in the upper half of the page: the paper title in bold title case, the author's name, the department and university, the course number and name, the instructor's name, and the assignment due date, each on its own double-spaced line. A page number sits in the top right corner. Student papers do not have a running head or an author note. This template fills all of these fields through \\title, \\author, \\authorsaffiliations, \\course, \\professor and \\duedate.",
  },
  {
    question: "What is the difference between a student and a professional APA title page?",
    answer:
      "A professional (manuscript) title page replaces the course, instructor and due date with an author note and adds a running head: an abbreviated title of up to 50 characters in capitals in the top left of every page. Professional papers also normally include an abstract and keywords. In the apa7 class you switch between the two by changing the stu class option to man and using \\shorttitle, \\authorsnames and \\authornote, as described in the comments at the top of the template.",
  },
  {
    question: "Does APA 7 require Times New Roman?",
    answer:
      "No. APA 7 accepts several fonts, including 12-point Times New Roman, 11-point Calibri or Arial, 11-point Georgia and 10-point Lucida Sans Unicode, as long as the same font is used throughout. The apa7 class uses Latin Modern by default LaTeX font in student and manuscript modes. If your instructor expects Times, add \\usepackage{newtxtext} to the preamble; the class already sets 12pt and double spacing.",
  },
  {
    question: "How do I add APA references to this template?",
    answer:
      "Use biblatex with the apa style. Add \\usepackage[style=apa,backend=biber]{biblatex} and \\addbibresource{refs.bib} to the preamble, cite with \\parencite or \\textcite, and put \\printbibliography where the reference list should go. The template already loads babel and csquotes, which biblatex-apa requires. Compile with pdflatex, then biber, then pdflatex twice; Octree and Overleaf run biber for you.",
  },
  {
    question: "Why does my title repeat at the top of the first body page?",
    answer:
      "APA 7 student papers repeat the full title, bold and centred, at the start of the text. The apa7 class does this automatically. This template passes the donotrepeattitle class option to suppress it, so if you want the repeated title back, simply remove that option from the \\documentclass line.",
  },
];

export default function ApaTitlePageGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is this APA title page template?</GuideH2>
      <GuideP>
        This is a free APA title page template for LaTeX that produces a correct APA
        7th edition <em>student</em> title page, followed by a short paper skeleton with
        Introduction, Method, Results and Discussion headings. It is built on the{" "}
        <GuideCode>apa7</GuideCode> document class by Daniel A. Weiss, the standard
        LaTeX implementation of the Publication Manual of the American Psychological
        Association, so the spacing, font size, heading levels and page numbering follow
        the APA format without any manual layout work. If you are writing a psychology,
        education, nursing or social science assignment and have been told to use
        &quot;APA format&quot;, this is the title page you need.
      </GuideP>
      <GuideP>
        The class line is{" "}
        <GuideCode>
          \documentclass[stu,12pt,donotrepeattitle,floatsintext]{"{apa7}"}
        </GuideCode>
        . The <GuideCode>stu</GuideCode> option selects the student paper mode;{" "}
        <GuideCode>12pt</GuideCode> matches the usual 12-point requirement;{" "}
        <GuideCode>donotrepeattitle</GuideCode> stops the title from being printed again
        on the first body page; and <GuideCode>floatsintext</GuideCode> places tables
        and figures where you write them instead of collecting them at the end of the
        manuscript. Two support packages follow:{" "}
        <GuideCode>\usepackage[american]{"{babel}"}</GuideCode> and{" "}
        <GuideCode>\usepackage{"{csquotes}"}</GuideCode>, both of which the class and{" "}
        <GuideCode>biblatex-apa</GuideCode> expect to be present.
      </GuideP>

      <GuideH2 id="apa-rules">APA 7 title page (cover page) rules: student vs professional</GuideH2>
      <GuideP>
        APA calls this page the title page; many course guides call it the APA cover
        page. They are the same first page. APA 7 (2019) introduced two different title pages. Which one you need depends on
        who will read the paper, not on how advanced the work is.
      </GuideP>
      <GuideTable
        headers={["Element", "Student paper", "Professional paper"]}
        rows={[
          ["Title", "Bold, title case, centred, 3-4 lines from the top", "Same"],
          ["Author name(s)", "One blank line below the title", "Same, with superscript affiliation numbers"],
          ["Affiliation", "Department, University", "One line per affiliation"],
          ["Course number and name", "Yes", "No"],
          ["Instructor name", "Yes", "No"],
          ["Assignment due date", "Yes", "No"],
          ["Author note", "No", "Yes (ORCID, changes of affiliation, disclosures, contact)"],
          ["Running head", "No (page number only)", "Yes: short title in capitals, max 50 characters, top left"],
          ["Abstract and keywords", "Only if the instructor asks", "Yes, on page 2"],
        ]}
      />
      <GuideP>
        Everything on the title page is double spaced, in the same font as the body, with
        one-inch margins. The page number appears in the top right corner of every page,
        including the title page. The <GuideCode>apa7</GuideCode> class handles all of this
        for you; your job is only to fill in the fields.
      </GuideP>

      <GuideH2 id="walkthrough">Section-by-section walkthrough</GuideH2>
      <GuideH3>Class options</GuideH3>
      <GuideP>
        <GuideCode>apa7</GuideCode> has four modes. <GuideCode>stu</GuideCode> is the
        student paper used here. <GuideCode>man</GuideCode> is the professional manuscript
        for journal submission: running head, author note, abstract page, and double
        spacing throughout. <GuideCode>jou</GuideCode> typesets the paper to look like a
        printed journal article in two columns, which is handy for a final class
        portfolio. <GuideCode>doc</GuideCode> is a plain single-column document for
        reading. You can also pass <GuideCode>10pt</GuideCode>,{" "}
        <GuideCode>11pt</GuideCode> or <GuideCode>12pt</GuideCode>, and{" "}
        <GuideCode>a4paper</GuideCode> if you are outside North America.
      </GuideP>

      <GuideH3>Title page fields</GuideH3>
      <GuideP>
        The block after the preamble sets the six student fields:
      </GuideP>
      <GuidePre>{`\\title{The Effect of Sleep Duration on Memory Consolidation in Undergraduates}
\\author{First Last}
\\authorsaffiliations{{Department of Psychology, Example University}}
\\course{PSY 101: Introduction to Psychology}
\\professor{Dr. Jane Smith}
\\duedate{\\today}`}</GuidePre>
      <GuideP>
        Note the double braces in <GuideCode>\authorsaffiliations</GuideCode>: the outer
        pair is the argument and each inner pair is one affiliation, so several
        affiliations are written as{" "}
        <GuideCode>{"{{Dept A, Uni A}, {Dept B, Uni B}}"}</GuideCode>. APA asks for the
        title to be concise (APA 7 sets no word limit), in title case; the class makes
        it bold and centred automatically. <GuideCode>\duedate{"{\\today}"}</GuideCode>{" "}
        prints the compile date; replace it with a literal date such as{" "}
        <GuideCode>March 3, 2026</GuideCode> so the PDF does not change every time you
        rebuild it. Write the course exactly as it appears in your syllabus, and the
        instructor&apos;s name with the title they use (Dr., Professor).
      </GuideP>

      <GuideH3>\maketitle and the body</GuideH3>
      <GuideP>
        <GuideCode>\maketitle</GuideCode> inside the document emits the title page and
        starts the text on a new page. The rest of the template uses ordinary{" "}
        <GuideCode>\section</GuideCode> and <GuideCode>\subsection</GuideCode> commands,
        which <GuideCode>apa7</GuideCode> maps to the five APA heading levels: level 1
        is bold and centred, level 2 bold and left-aligned, level 3 bold italic, and
        levels 4 and 5 are indented run-in headings. Citations in the text use the
        author-date form, &quot;(Author, 2023)&quot;, which biblatex-apa produces
        automatically.
      </GuideP>

      <GuideH2 id="professional">Switching to the professional title page</GuideH2>
      <GuideP>
        The comment block at the top of the template lists the steps. In short, change{" "}
        <GuideCode>stu</GuideCode> to <GuideCode>man</GuideCode>, then use the
        multi-author forms:
      </GuideP>
      <GuidePre>{`\\documentclass[man,12pt,floatsintext]{apa7}
\\title{The Effect of Sleep Duration on Memory Consolidation}
\\shorttitle{SLEEP AND MEMORY CONSOLIDATION}
\\authorsnames[1,2]{First Author, Second Author}
\\authorsaffiliations{{Department of Psychology, University One},
                     {School of Medicine, University Two}}
\\authornote{Correspondence concerning this article should be addressed to ...}
\\abstract{One paragraph of 150 to 250 words.}
\\keywords{sleep, memory, consolidation}`}</GuidePre>
      <GuideP>
        The numbers in <GuideCode>\authorsnames[1,2]</GuideCode> link each author to an
        affiliation; an author with two affiliations is written as{" "}
        <GuideCode>{"{1,2}"}</GuideCode>. <GuideCode>\shorttitle</GuideCode> becomes the
        running head. The student-only fields (<GuideCode>\course</GuideCode>,{" "}
        <GuideCode>\professor</GuideCode>, <GuideCode>\duedate</GuideCode>) are not printed in
        manuscript mode, so delete them to keep the preamble tidy.
      </GuideP>

      <GuideH2 id="customize">How to customize the template</GuideH2>
      <GuideUl>
        <li>
          <strong>Font.</strong> APA 7 permits any accessible font used consistently. The
          class does not force Times in <GuideCode>stu</GuideCode> or{" "}
          <GuideCode>man</GuideCode> mode. For 12-point Times New Roman, add{" "}
          <GuideCode>\usepackage{"{newtxtext}"}</GuideCode> (and{" "}
          <GuideCode>newtxmath</GuideCode> if you have equations). The older{" "}
          <GuideCode>times</GuideCode> package also works but is no longer maintained.
        </li>
        <li>
          <strong>Abstract.</strong> Add <GuideCode>\abstract{"{...}"}</GuideCode> and{" "}
          <GuideCode>\keywords{"{...}"}</GuideCode> before{" "}
          <GuideCode>\begin{"{document}"}</GuideCode>; the class puts them on their own
          page after the title page, with &quot;Keywords:&quot; in italics.
        </li>
        <li>
          <strong>References.</strong> Load{" "}
          <GuideCode>\usepackage[style=apa,backend=biber]{"{biblatex}"}</GuideCode>, point it
          at a <GuideCode>.bib</GuideCode> file with <GuideCode>\addbibresource</GuideCode>,
          cite with <GuideCode>\parencite</GuideCode> and <GuideCode>\textcite</GuideCode>,
          and end the document with <GuideCode>\printbibliography</GuideCode>. The
          reference list gets its hanging indent and title automatically.
        </li>
        <li>
          <strong>Tables and figures.</strong> Keep <GuideCode>floatsintext</GuideCode> for
          coursework. Use <GuideCode>\begin{"{table}"}</GuideCode> with{" "}
          <GuideCode>\caption</GuideCode> above the table and{" "}
          <GuideCode>\begin{"{figure}"}</GuideCode> with the caption above the image; the
          class formats the &quot;Table 1&quot; label and italic title per APA.
        </li>
        <li>
          <strong>Spacing.</strong> Double spacing is the default (the class sets{" "}
          <GuideCode>\linespread</GuideCode> itself). If your instructor allows single
          spacing, load <GuideCode>setspace</GuideCode> and use{" "}
          <GuideCode>\singlespacing</GuideCode> inside the body.
        </li>
      </GuideUl>

      <GuideH2 id="errors">Common errors and how to fix them</GuideH2>
      <GuideUl>
        <li>
          <strong>&quot;File `apa7.cls&apos; not found&quot;.</strong> The class is not in
          your local distribution. Run <GuideCode>tlmgr install apa7</GuideCode> (TeX
          Live) or let MiKTeX install it on first use. Octree and Overleaf already have
          it.
        </li>
        <li>
          <strong>&quot;Package csquotes Warning: No style for language&quot;</strong> or
          warnings about <GuideCode>babel</GuideCode>. Keep the two package lines in the
          template; <GuideCode>biblatex-apa</GuideCode> needs{" "}
          <GuideCode>csquotes</GuideCode>, and <GuideCode>csquotes</GuideCode> needs a
          language from <GuideCode>babel</GuideCode>.
        </li>
        <li>
          <strong>&quot;Undefined control sequence \authorsnames&quot;.</strong> Your
          copy of <GuideCode>apa7</GuideCode> predates the multi-author commands (added in
          version 2.01, July 2020). Update the package, or use the older{" "}
          <GuideCode>\author</GuideCode>/<GuideCode>\affiliation</GuideCode> pair (now
          deprecated, with a warning).
        </li>
        <li>
          <strong>Empty or missing reference list.</strong> Biber has not been run. Compile
          with pdflatex, then biber, then pdflatex twice, or use{" "}
          <GuideCode>latexmk</GuideCode>, which does it for you.
        </li>
        <li>
          <strong>Title appears twice.</strong> Remove the{" "}
          <GuideCode>donotrepeattitle</GuideCode> option if you want the APA-standard
          repeated title; keep it if your instructor prefers the body to start with the
          first heading.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile the APA title page</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> click <em>Open as template</em> above. The file opens
          with a live preview and you can fill in the title, course and instructor fields
          directly, or ask the AI assistant to draft your introduction in APA style.
        </li>
        <li>
          <strong>In Overleaf:</strong> paste the source into a blank project. pdfLaTeX is
          fine; if you add biblatex, Overleaf runs biber automatically.
        </li>
        <li>
          <strong>Locally:</strong> save as <GuideCode>paper.tex</GuideCode> and run{" "}
          <GuideCode>pdflatex paper.tex</GuideCode>. With references:
          <GuidePre>{`pdflatex paper.tex
biber paper
pdflatex paper.tex
pdflatex paper.tex
# or simply: latexmk -pdf paper.tex`}</GuidePre>
        </li>
      </GuideOl>

      <GuideH2 id="comparison">Related templates</GuideH2>
      <GuideTable
        headers={["Template", "Best for", "Class", "Formatting"]}
        rows={[
          [
            <strong key="a">APA Title Page</strong>,
            "Psychology, education and social science coursework",
            <GuideCode key="c">apa7</GuideCode>,
            "APA 7 title page, headings, spacing and references handled by the class",
          ],
          [
            <GuideLink key="e" href="/templates/essay">
              Academic Essay
            </GuideLink>,
            "Humanities essays where no specific style is enforced",
            <>
              <GuideCode>article</GuideCode> + <GuideCode>geometry</GuideCode>
            </>,
            "Plain 12pt article; add your own title block and citation style",
          ],
          [
            <GuideLink key="j" href="/templates/journal-article">
              Journal Article
            </GuideLink>,
            "Manuscripts for journals that accept a generic single-column format",
            <>
              <GuideCode>article</GuideCode> + <GuideCode>geometry</GuideCode>
            </>,
            "Abstract, numbered sections and bibliography scaffold",
          ],
        ]}
      />
      <GuideP>
        For a full APA-formatted manuscript with abstract and references, start from this
        template in <GuideCode>man</GuideCode> mode; for a non-APA course assignment, the{" "}
        <GuideLink href="/templates/assignment">assignment template</GuideLink> is lighter.
      </GuideP>

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
