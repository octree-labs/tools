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
    question: "What is the difference between an academic CV and a resume?",
    answer:
      "A resume is a one-page marketing document tailored to a single job, listing only the most relevant experience. An academic CV (curriculum vitae) is a complete record of your scholarly career: every degree, publication, grant, talk, course taught and service role, in reverse chronological order within each section. It has no page limit and grows throughout your career; a graduate student's CV is typically two to four pages, a senior professor's can exceed twenty.",
  },
  {
    question: "How long should an academic CV be?",
    answer:
      "As long as it needs to be to list everything, and no longer. Two to three pages is normal for PhD students and postdocs, four to eight for early-career faculty. Do not pad it: committees read the first page closely and skim the rest, so put Education, current position and the strongest publications first. Only cut sections that are empty; never cut publications to save space.",
  },
  {
    question: "How do I add my publications from BibTeX to a LaTeX CV?",
    answer:
      "Use biblatex with the biblatex-publist package or the plain \\nocite{*} approach: load \\usepackage[style=authoryear,sorting=ydnt]{biblatex}, \\addbibresource{publications.bib}, then put \\nocite{*} and \\printbibliography[heading=none] under the Publications heading. Compile with biber. This keeps the CV in sync with the same .bib file you cite from in your papers.",
  },
  {
    question: "Should I include references on an academic CV?",
    answer:
      "Yes, for academic job applications list three to five referees with name, title, institution and email under a final References section, since search committees contact them directly. For grant applications and promotion dossiers the section is usually omitted or replaced with \"available on request\". Always ask referees before listing them.",
  },
  {
    question: "Does this template work on Overleaf and with pdflatex?",
    answer:
      "Yes. It uses only the standard article class plus geometry, enumitem and hyperref, all of which ship with every TeX distribution and with Overleaf. Compile with pdflatex, or with xelatex or lualatex if you switch to a system font via fontspec.",
  },
];

export default function AcademicCvGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is an academic CV?</GuideH2>
      <GuideP>
        An academic CV, or curriculum vitae, is the full record of a scholar&apos;s training,
        research output, funding, teaching and service. Unlike a resume, which is cut to one
        page and rewritten for each job, a CV is cumulative and comprehensive: it lists every
        peer-reviewed paper, every grant and every course, and it is what search committees,
        grant panels, tenure reviewers and fellowship juries actually read. The emphasis is on
        verifiable scholarly output rather than skills or objectives, and the length is
        whatever it takes. If you need the one-page document for industry roles, use{" "}
        <GuideLink href="/templates/jakes-resume">Jake&apos;s Resume</GuideLink> or the{" "}
        <GuideLink href="/templates/harvard-resume">Harvard resume</GuideLink> instead.
      </GuideP>
      <GuideP>
        This academic CV template is deliberately plain so that the content, not the design,
        carries the document. It is built on the standard <GuideCode>article</GuideCode> class
        at 11pt on A4 paper with 1in margins from <GuideCode>geometry</GuideCode>, compact
        lists from <GuideCode>enumitem</GuideCode> and clickable email and website links from{" "}
        <GuideCode>hyperref</GuideCode>. A centred header holds your name in{" "}
        <GuideCode>\LARGE\textbf</GuideCode> with department, university, email and website
        on the line below. Each section is an unnumbered{" "}
        <GuideCode>\section*</GuideCode>, so adding or reordering sections is a matter of
        moving a block.
      </GuideP>

      <GuideH2 id="sections">The sections, in the order committees expect</GuideH2>
      <GuideH3>Education</GuideH3>
      <GuideP>
        Degrees in reverse chronological order with institution and year; the template uses a
        bulleted list with the degree in bold. For a PhD add the dissertation title and
        advisor on a second line, and list the expected date if you have not yet defended.
      </GuideP>
      <GuideH3>Research interests and appointments</GuideH3>
      <GuideP>
        A one-line summary of your field, followed, once you have them, by an{" "}
        <em>Appointments</em> or <em>Positions</em> section for postdocs, lectureships and
        visiting roles. Faculty applicants should put current appointment before Education.
      </GuideP>
      <GuideH3>Publications</GuideH3>
      <GuideP>
        The heart of the CV. Split into subsections once you have more than a handful:
        journal articles, conference papers, book chapters, preprints, and then talks and
        posters. Number entries and bold your own name. Rather than retyping every reference,
        drive the list from the same <GuideCode>.bib</GuideCode> file you cite from with
        biblatex:
      </GuideP>
      <GuidePre>{`\\usepackage[style=authoryear,sorting=ydnt,maxbibnames=99]{biblatex}
\\addbibresource{publications.bib}
...
\\section*{Publications}
\\nocite{*}
\\printbibliography[heading=none]`}</GuidePre>
      <GuideP>
        <GuideCode>sorting=ydnt</GuideCode> orders newest first and <GuideCode>maxbibnames=99</GuideCode>{" "}
        prevents &quot;et al.&quot; from hiding co-authors. Use separate{" "}
        <GuideCode>\printbibliography[type=article]</GuideCode> and{" "}
        <GuideCode>[type=inproceedings]</GuideCode> calls to split journals from conferences,
        and compile with <GuideCode>biber</GuideCode>. The{" "}
        <GuideLink href="/tools/citation-generator">citation generator</GuideLink> turns a DOI
        into a BibTeX entry if a paper is missing from your file.
      </GuideP>
      <GuideH3>Grants, fellowships and awards</GuideH3>
      <GuideP>
        List funding with the agency, title, your role (PI or co-I), amount and years. Keep
        prizes and fellowships in a separate <em>Awards</em> section, as the template does,
        because panels look for funding history specifically.
      </GuideP>
      <GuideH3>Teaching</GuideH3>
      <GuideP>
        Course code and title, institution, role (instructor, TA, guest lecturer) and term.
        Add supervised students (PhD, master&apos;s, undergraduate theses) as a sub-list; for
        teaching-focused positions move this section above Publications.
      </GuideP>
      <GuideH3>Service</GuideH3>
      <GuideP>
        Peer review (list the journals and conferences), programme committees, editorial
        roles, departmental committees, outreach and society memberships. This is the section
        most people forget and the one that signals you are a working member of the
        community.
      </GuideP>
      <GuideH3>References</GuideH3>
      <GuideP>
        Three to five referees with name, position, institution and email, placed last. Omit
        it for grant applications, where it is not expected.
      </GuideP>

      <GuideH2 id="length">Length and formatting norms</GuideH2>
      <GuideUl>
        <li>No page limit, but front-load: the first page should show your current position, degrees and best work.</li>
        <li>Reverse chronological order inside every section; consistent date format throughout.</li>
        <li>Black text, one font, no photo, no skill bars. Page numbers and your name in the footer help when a committee prints twenty CVs.</li>
        <li>US applications usually say &quot;CV&quot; and expect A4 or letter; UK and European applications may also ask for a short two-page version, so keep a trimmed copy.</li>
      </GuideUl>

      <GuideH2 id="customize">How to customize this template</GuideH2>
      <GuideOl>
        <li>
          <strong>Fonts.</strong> Replace Computer Modern with{" "}
          <GuideCode>\usepackage{"{newtxtext,newtxmath}"}</GuideCode> for Times or{" "}
          <GuideCode>\usepackage{"{libertine}"}</GuideCode> for Linux Libertine; under
          xelatex use <GuideCode>fontspec</GuideCode> and <GuideCode>\setmainfont</GuideCode>.
        </li>
        <li>
          <strong>Margins and paper.</strong> Edit{" "}
          <GuideCode>\usepackage[margin=1in]{"{geometry}"}</GuideCode>; 0.75in is the
          practical minimum. Change <GuideCode>a4paper</GuideCode> to{" "}
          <GuideCode>letterpaper</GuideCode> for North American applications.
        </li>
        <li>
          <strong>Section order.</strong> Each section is a self-contained{" "}
          <GuideCode>\section*{"{...}"}</GuideCode> block; cut and paste to reorder. Add a
          rule under headings with <GuideCode>titlesec</GuideCode> and{" "}
          <GuideCode>\titleformat</GuideCode> if you want the look of the resume templates.
        </li>
        <li>
          <strong>Dates in the margin.</strong> For the classic two-column CV look, wrap
          entries in a <GuideCode>tabularx</GuideCode> with a narrow left column for years.
        </li>
        <li>
          <strong>Footer.</strong> Add <GuideCode>fancyhdr</GuideCode> with{" "}
          <GuideCode>\fancyfoot[C]{"{Your Name --- \\thepage}"}</GuideCode> for multi-page CVs.
        </li>
      </GuideOl>

      <GuideH2 id="comparison">Academic CV vs the resume templates</GuideH2>
      <GuideTable
        headers={["Template", "Length", "Best for", "Key sections"]}
        rows={[
          [
            <strong key="cv">Academic CV</strong>,
            "2+ pages",
            "PhD applications, postdocs, faculty jobs, grants, tenure",
            "Education, Publications, Grants, Teaching, Service, References",
          ],
          [
            <GuideLink key="j" href="/templates/jakes-resume">
              Jake&apos;s Resume
            </GuideLink>,
            "1 page",
            "Software and engineering roles",
            "Education, Experience, Projects, Technical Skills",
          ],
          [
            <GuideLink key="h" href="/templates/harvard-resume">
              Harvard Resume
            </GuideLink>,
            "1 page",
            "Finance, consulting, law, business",
            "Education, Experience, Leadership, Skills & Interests",
          ],
          [
            <GuideLink key="c" href="/templates/cover-letter">
              Cover Letter
            </GuideLink>,
            "1 page",
            "Accompanying any of the above",
            "Letterhead, recipient, body, signature",
          ],
        ]}
      />
      <GuideP>
        For a broader comparison of LaTeX resume and CV layouts, including which ones pass
        applicant tracking systems, read the{" "}
        <GuideLink
          href="https://www.useoctree.com/blog/latex-resume-templates-professional-cv-guide"
          external
        >
          guide to LaTeX resume templates and professional CVs
        </GuideLink>{" "}
        on the Octree blog.
      </GuideP>

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
