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
    question: "Is Jake's Resume ATS friendly?",
    answer:
      "Yes. Jake's Resume is a single-column document built on the standard article class, with no graphics, text boxes, or multi-column layouts in the text flow. It compiles to a PDF with selectable, Unicode-mapped text (via \\pdfgentounicode=1 and glyphtounicode), uses conventional section names like Education, Experience, Projects and Technical Skills, and keeps the page header and footer empty, so applicant tracking systems parse it well in practice.",
  },
  {
    question: "Is Jake's Resume free to use?",
    answer:
      "Yes. The template was written by Jake Gutierrez and is released under the MIT license, so you can use, modify and share it freely for personal and commercial job applications without attribution requirements on the resume itself. You can open it in Octree, Overleaf, or any local LaTeX installation at no cost.",
  },
  {
    question: "Should Jake's Resume be one page or two?",
    answer:
      "One page. The template is designed and tuned for a single letter-size page, which is what recruiters and ATS screeners expect from students and early-career engineers. If your content spills onto a second page, tighten bullet points, drop older or less relevant entries, or reduce the margins slightly rather than adding a second page.",
  },
  {
    question: "How do I add a photo to Jake's Resume?",
    answer:
      "The template deliberately has no photo, and for US, UK and Canadian tech applications you should leave it out, because photos can confuse ATS parsers and introduce bias concerns. If a photo is expected in your region, load the graphicx package and place a small \\includegraphics inside a minipage next to the heading block, keeping all text outside the image so it stays selectable.",
  },
  {
    question: "Can I use Jake's Resume in Overleaf?",
    answer:
      "Yes. Create a blank project in Overleaf, paste the source from this page into main.tex and compile with the default pdfLaTeX compiler; every package the template loads is part of TeX Live, which Overleaf uses. The template is also listed in the Overleaf gallery as Jake's Resume. The same source opens in Octree with the Open as template button, so you can switch editors without changing a line.",
  },
  {
    question: "Does Jake's Resume work with XeLaTeX or LuaLaTeX?",
    answer:
      "Mostly, with one change. \\pdfgentounicode=1 and \\input{glyphtounicode} are pdfTeX-specific, so under XeLaTeX you should remove or comment out those two lines; XeLaTeX already embeds Unicode text mappings. Everything else in the template compiles under XeLaTeX and LuaLaTeX, which is useful if you want to use a system font via fontspec. The default and recommended engine is pdfLaTeX.",
  },
];

export default function JakesResumeGuide() {
  return (
    <article>
      <GuideH2 id="what-is-jakes-resume">What is Jake&apos;s Resume?</GuideH2>
      <GuideP>
        Jake&apos;s Resume is a free LaTeX resume template written by Jake Gutierrez and
        published on GitHub under the MIT license. It started as a cleanup of Sourabh
        Bajaj&apos;s earlier <GuideCode>sb2nov/resume</GuideCode> template and has since
        become one of the most widely used resume templates on Overleaf and GitHub. If you have
        looked at a software engineering resume from a university career fair in the last
        few years, there is a good chance it was built on this template. The sample
        document on Overleaf uses the placeholder name &quot;Jake Ryan&quot;, which is why
        you will also see it searched for as the &quot;Jake Ryan resume&quot;.
      </GuideP>
      <GuideP>
        The template is fully Overleaf-compatible. It uses only packages that ship with TeX
        Live, so the source on this page compiles unchanged in a blank Overleaf project with
        the default pdfLaTeX compiler, in Octree, or on a local TeX Live or MiKTeX install.
        Nothing here is Overleaf-specific, which means a resume you start in one editor can
        be moved to another by copying a single <GuideCode>.tex</GuideCode> file. See{" "}
        <a
          href="#compile"
          className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
        >
          How to compile Jake&apos;s Resume
        </a> for the
        Overleaf steps.
      </GuideP>
      <GuideP>
        Technically, it is a single-page, single-column document built on the standard{" "}
        <GuideCode>article</GuideCode> class at 11pt on US letter paper. It defines a small
        set of custom macros, most importantly <GuideCode>\resumeSubheading</GuideCode> and{" "}
        <GuideCode>\resumeItem</GuideCode>, so that each job, degree or project is written as
        a short command call instead of raw layout code. The template uses the default
        Computer Modern typeface (Latin Modern on most modern TeX installations) and relies
        on a handful of standard packages: <GuideCode>titlesec</GuideCode> for the ruled
        section headings, <GuideCode>enumitem</GuideCode> for tight bullet lists,{" "}
        <GuideCode>hyperref</GuideCode> for clickable email and profile links,{" "}
        <GuideCode>fancyhdr</GuideCode> to clear the page header and footer,{" "}
        <GuideCode>fullpage</GuideCode> and a few <GuideCode>\addtolength</GuideCode> calls for
        the narrow margins, and <GuideCode>tabularx</GuideCode> for the left/right aligned
        subheadings. Many forks add <GuideCode>fontawesome5</GuideCode> for icons next to the
        contact links, but the original template does not require it.
      </GuideP>

      <GuideH2 id="why-popular">Why Jake&apos;s Resume is so popular with CS and engineering students</GuideH2>
      <GuideP>
        The template fits the exact shape of an early-career technical resume: a
        contact header, Education, Experience, Projects and Technical Skills, in that
        order, on one page. That structure is what recruiters at software companies expect
        and what applicant tracking systems (ATS) parse most reliably. Beyond the
        structure, a few properties explain its popularity:
      </GuideP>
      <GuideUl>
        <li>
          <strong>It looks deliberately plain.</strong> Small-caps section titles with a
          thin rule, black text, no colour and no sidebars. Nothing distracts from the
          bullet points, which is where the hiring signal lives.
        </li>
        <li>
          <strong>It is dense without looking cramped.</strong> The negative{" "}
          <GuideCode>\vspace</GuideCode> adjustments inside the macros and the{" "}
          <GuideCode>\small</GuideCode> body text let you fit three or four roles and several
          projects on one page.
        </li>
        <li>
          <strong>It is easy to edit without knowing LaTeX.</strong> Copying a{" "}
          <GuideCode>\resumeSubheading</GuideCode> block and changing four arguments is all
          most people ever need to do.
        </li>
        <li>
          <strong>It is ATS-safe by construction.</strong> The author added{" "}
          <GuideCode>\pdfgentounicode=1</GuideCode> and <GuideCode>\input{"{glyphtounicode}"}</GuideCode>{" "}
          specifically so the PDF text extracts cleanly.
        </li>
      </GuideUl>

      <GuideH2 id="walkthrough">Section-by-section walkthrough</GuideH2>
      <GuideH3>Header: name and links</GuideH3>
      <GuideP>
        The header is a centred block with your name in <GuideCode>\Huge \scshape</GuideCode>{" "}
        followed by a single line of contact details separated by vertical bars. Keep it
        to phone, email, LinkedIn and GitHub (or a personal site). Each link is wrapped in{" "}
        <GuideCode>\href</GuideCode> with <GuideCode>\underline</GuideCode> so it is both
        clickable and visibly a link in print. Write the URL in a readable form such as{" "}
        <GuideCode>linkedin.com/in/yourname</GuideCode>; ATS systems and humans both read the
        visible text, not the hidden target.
      </GuideP>

      <GuideH3>Education</GuideH3>
      <GuideP>
        One <GuideCode>\resumeSubheading</GuideCode> per institution with the school, location,
        degree and dates. Students usually put Education first because it is their
        strongest credential; once you have two or more years of full-time experience,
        move it below Experience. Add GPA only if it is strong (3.5+ on a 4.0 scale) and
        add relevant coursework only if you have little experience to show.
      </GuideP>

      <GuideH3>Experience</GuideH3>
      <GuideP>
        Each role is a <GuideCode>\resumeSubheading</GuideCode> with title, dates, company and
        location, followed by a <GuideCode>\resumeItemListStart</GuideCode> block of two to
        four <GuideCode>\resumeItem</GuideCode> bullets. This section carries the most weight,
        so spend your editing time on the bullets. A reliable formula is{" "}
        <strong>action verb + what you built or changed + measurable result</strong>:
      </GuideP>
      <GuideUl>
        <li>
          Weak: <em>Worked on the backend API.</em>
        </li>
        <li>
          Strong: <em>Rebuilt the order-history API in Go, cutting p95 latency from 800 ms
          to 120 ms for 2M daily requests.</em>
        </li>
      </GuideUl>
      <GuideP>
        Start every bullet with a past-tense verb (Built, Reduced, Designed, Shipped,
        Automated), name the technologies inline so keyword matching works, and include a
        number wherever you honestly can: users, requests, percent improvement, hours saved,
        dollars. Keep each bullet to one or two lines; the template&apos;s tight spacing makes
        three-line bullets look like paragraphs.
      </GuideP>

      <GuideH3>Projects</GuideH3>
      <GuideP>
        Projects use <GuideCode>\resumeProjectHeading</GuideCode>, which takes a bold project
        name plus an italic technology list on the left and dates on the right. Treat them
        like jobs: what it does, what was hard, what the outcome was (stars, users, a
        competition result, a deployed URL). Two or three projects are plenty; pick the ones
        that match the roles you are applying for.
      </GuideP>

      <GuideH3>Technical Skills</GuideH3>
      <GuideP>
        A short grouped list of Languages, Frameworks, Developer Tools and Libraries.
        List only what you could discuss in an interview, put the most relevant items
        first, and keep it to four lines. This section exists mostly for keyword matching,
        so mirror the wording used in the job posting (for example &quot;PostgreSQL&quot;
        rather than &quot;Postgres&quot; if that is what the listing says).
      </GuideP>

      <GuideH2 id="customize">How to customize Jake&apos;s Resume</GuideH2>
      <GuideUl>
        <li>
          <strong>Reorder sections.</strong> Each section is a self-contained{" "}
          <GuideCode>\section{"{...}"}</GuideCode> block between the{" "}
          <GuideCode>%-----------</GuideCode> comment markers; cut and paste whole blocks to
          reorder them.
        </li>
        <li>
          <strong>Add a Summary.</strong> Insert{" "}
          <GuideCode>\section{"{Summary}"}</GuideCode> followed by a two-line paragraph right
          after the header. Only do this if you are changing careers or have 5+ years of
          experience; students should spend the space on projects.
        </li>
        <li>
          <strong>Change margins.</strong> The margins are set with the{" "}
          <GuideCode>\addtolength</GuideCode> lines near the top. Adding{" "}
          <GuideCode>\addtolength{"{"}\textheight{"}"}{"{"}0.2in{"}"}</GuideCode> (with a matching{" "}
          <GuideCode>\addtolength{"{"}\topmargin{"}"}{"{"}-0.1in{"}"}</GuideCode>) buys a few extra
          lines; the template already sits at 0.5in margins, so do not go much tighter.
        </li>
        <li>
          <strong>Change font size.</strong> Edit the class option:{" "}
          <GuideCode>\documentclass[letterpaper,10pt]{"{article}"}</GuideCode>. Switch to{" "}
          <GuideCode>a4paper</GuideCode> for applications outside North America.
        </li>
        <li>
          <strong>Switch fonts.</strong> The preamble ships with commented-out options.
          Uncomment one line, for example{" "}
          <GuideCode>\usepackage[sfdefault]{"{roboto}"}</GuideCode> for a sans-serif look or{" "}
          <GuideCode>\usepackage{"{charter}"}</GuideCode> for a classic serif; Fira Sans,
          Source Sans Pro, Noto Sans and Cormorant Garamond are also pre-listed.
        </li>
        <li>
          <strong>Colour links.</strong> Replace <GuideCode>[hidelinks]</GuideCode> in the
          hyperref line with{" "}
          <GuideCode>[colorlinks=true,urlcolor=blue]</GuideCode> if you want visibly blue
          links. Keep body text black.
        </li>
        <li>
          <strong>Add icons.</strong> Add <GuideCode>\usepackage{"{fontawesome5}"}</GuideCode>{" "}
          and prefix links with <GuideCode>\faGithub</GuideCode>,{" "}
          <GuideCode>\faLinkedin</GuideCode> or <GuideCode>\faEnvelope</GuideCode>. Icons are
          decorative; they are ignored by ATS parsers, so keep the text next to them.
        </li>
        <li>
          <strong>A second page?</strong> The template will flow onto a second page if you
          add enough content, but you should not. Recruiters spend seconds on a student
          resume, and ATS scoring does not reward length. Cut before you overflow.
        </li>
      </GuideUl>

      <GuideH2 id="ats">ATS considerations</GuideH2>
      <GuideP>
        Applicant tracking systems convert your PDF to plain text and then look for
        sections and keywords. Jake&apos;s Resume already does the important things right,
        but it is easy to undo them while customising. Keep these rules:
      </GuideP>
      <GuideUl>
        <li>Stay single column. Do not add a sidebar or a two-column skills grid.</li>
        <li>
          Do not put content in tables or graphics in the text flow. The{" "}
          <GuideCode>tabular*</GuideCode> inside <GuideCode>\resumeSubheading</GuideCode> is a
          two-row alignment helper and extracts fine; a multi-row table of skills does not.
        </li>
        <li>
          Keep text selectable. Never paste a screenshot of a section, and keep{" "}
          <GuideCode>\pdfgentounicode=1</GuideCode> in the preamble so ligatures such as
          &quot;fi&quot; map back to real characters.
        </li>
        <li>
          Use standard headings: Education, Experience, Projects, Skills. Clever names like
          &quot;What I&apos;ve built&quot; can fail section detection.
        </li>
        <li>
          Export to PDF, not DOCX, and keep the file name simple (
          <GuideCode>Firstname-Lastname-Resume.pdf</GuideCode>).
        </li>
        <li>
          Avoid text in the page header or footer. The template clears both with{" "}
          <GuideCode>\fancyhf{"{}"}</GuideCode>; some parsers drop that region entirely.
        </li>
      </GuideUl>

      <GuideH2 id="errors">Common errors and how to fix them</GuideH2>
      <GuideUl>
        <li>
          <strong>Missing package (&quot;File `titlesec.sty&apos; not found&quot;).</strong>{" "}
          On a local install, run <GuideCode>tlmgr install titlesec</GuideCode> (or install
          the full <GuideCode>texlive-latex-extra</GuideCode> set on Debian/Ubuntu). Octree
          and Overleaf ship all of the template&apos;s packages.
        </li>
        <li>
          <strong>&quot;Overfull \hbox&quot; warnings.</strong> These are warnings, not
          errors, and usually come from a long URL or an unbreakable word in a bullet. The
          PDF still compiles. Shorten the text, or let <GuideCode>\raggedright</GuideCode>{" "}
          (already set) absorb it.
        </li>
        <li>
          <strong>&quot;fontawesome5.sty not found&quot;.</strong> You added icons but your
          distribution lacks the package. Run{" "}
          <GuideCode>tlmgr install fontawesome5</GuideCode>, or remove the{" "}
          <GuideCode>\usepackage</GuideCode> line and the <GuideCode>\fa...</GuideCode>{" "}
          commands.
        </li>
        <li>
          <strong>&quot;Undefined control sequence \pdfgentounicode&quot;.</strong> You are
          compiling with XeLaTeX or LuaLaTeX. Either switch the compiler to pdfLaTeX or
          remove the <GuideCode>\input{"{glyphtounicode}"}</GuideCode> and{" "}
          <GuideCode>\pdfgentounicode=1</GuideCode> lines.
        </li>
        <li>
          <strong>Unescaped special characters.</strong> Percent signs, ampersands and
          hashes inside bullets must be written as <GuideCode>\%</GuideCode>,{" "}
          <GuideCode>\&amp;</GuideCode> and <GuideCode>\#</GuideCode>; a bare{" "}
          <GuideCode>%</GuideCode> silently comments out the rest of the line.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile Jake&apos;s Resume</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> click <em>Open as template</em> at the top of this
          page. The source opens in the Octree editor with a live PDF preview, and you can
          ask the AI assistant to rewrite bullets or tighten the layout. No installation is
          needed.
        </li>
        <li>
          <strong>In Overleaf:</strong> create a blank project, paste the source into{" "}
          <GuideCode>main.tex</GuideCode> and make sure the compiler is set to pdfLaTeX
          under Menu. The template is also available in the Overleaf gallery as
          &quot;Jake&apos;s Resume&quot;.
        </li>
        <li>
          <strong>Locally:</strong> save the source as <GuideCode>resume.tex</GuideCode> and
          run:
          <GuidePre>{`pdflatex resume.tex
# or, with automatic reruns:
latexmk -pdf resume.tex`}</GuidePre>
          You need a TeX distribution such as TeX Live or MiKTeX. One pass is enough
          because the template has no bibliography or cross-references.
        </li>
      </GuideOl>
      <GuideP>
        New to LaTeX? The{" "}
        <GuideLink href="https://www.useoctree.com/learn/latex" external>
          Octree LaTeX guide
        </GuideLink>{" "}
        covers the basics of documents, packages and compiling.
      </GuideP>

      <GuideH2 id="comparison">Jake&apos;s Resume vs other LaTeX resume templates</GuideH2>
      <GuideTable
        headers={["Template", "Best for", "Layout", "Base", "Customisation"]}
        rows={[
          [
            <strong key="j">Jake&apos;s Resume</strong>,
            "Students and early-career software, data and engineering roles",
            "One page, single column, ruled small-caps headings",
            <>
              <GuideCode>article</GuideCode> + custom macros
            </>,
            "Edit macro arguments; fonts switchable from the preamble",
          ],
          [
            <GuideLink key="r" href="/templates/resume">
              Resume
            </GuideLink>,
            "A minimal starting point for any field",
            "One page, single column, plain bold headings",
            <>
              <GuideCode>article</GuideCode> + <GuideCode>geometry</GuideCode>
            </>,
            "Plain LaTeX with no macros; easiest to restructure",
          ],
          [
            <GuideLink key="a" href="/templates/academic-cv">
              Academic CV
            </GuideLink>,
            "Graduate students, postdocs and faculty",
            "Multi-page, single column, A4",
            <>
              <GuideCode>article</GuideCode> + <GuideCode>geometry</GuideCode>
            </>,
            "Sections for publications, teaching and awards",
          ],
        ]}
      />
      <GuideP>
        Pair any of these with the{" "}
        <GuideLink href="/templates/cover-letter">cover letter template</GuideLink> for a
        matching application package.
      </GuideP>

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
