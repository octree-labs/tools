import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideLink,
  GuideOl,
  GuideP,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "./ui";

const faq: GuideFaqItem[] = [
  {
    question: "What makes a resume ATS friendly?",
    answer:
      "An ATS-friendly resume is one that an applicant tracking system can turn into clean, ordered text: a single column, standard section names such as Experience and Education, real selectable text rather than icons or images, no tables or text boxes, consistent date formats, and a common font. This template follows all of those rules out of the box.",
  },
  {
    question: "Is a LaTeX PDF safe to upload to an ATS?",
    answer:
      "Yes, as long as the PDF contains real text and a simple layout. This template compiles with pdfLaTeX, embeds a standard Type 1 font, maps every glyph to Unicode with \\pdfgentounicode and writes real space characters with \\pdfinterwordspaceon, so the extracted text matches what you typed. Avoid fancy templates with sidebars, icon fonts or text placed with TikZ.",
  },
  {
    question: "Should I use Word or LaTeX for an ATS resume?",
    answer:
      "Either works if the layout is plain. LaTeX gives you consistent spacing, no accidental formatting drift and version control, and the PDF it produces is as parseable as one exported from Word. If a job posting asks specifically for a .docx file, submit that; otherwise a PDF from this template is fine.",
  },
  {
    question: "How do I test whether my resume passes the ATS?",
    answer:
      "Open the PDF, select all, copy and paste into a plain text editor. If the sections appear in order, each job title is followed by its dates on the same line, and no words run together or go missing, a parser will read it the same way. You can also upload it to a free resume parser to see the fields it extracts.",
  },
  {
    question: "Can I add colour or a photo?",
    answer:
      "A single accent colour on headings is harmless because colour does not affect text extraction. Photos are a different matter: they add nothing a parser can read and are discouraged in the US, UK and Canada. If you want a more designed look for a human-only audience, keep this version for online applications and use a second file for networking.",
  },
];

export default function AtsResumeGuide() {
  return (
    <article>
      <GuideH2 id="what-is-ats">What an ATS is and how it reads your resume</GuideH2>
      <GuideP>
        An applicant tracking system (ATS) is the software behind most online job
        applications: Workday, Greenhouse, Lever, iCIMS, Taleo and others. It does not look
        at your PDF the way a recruiter does. A parser flattens the file to plain text and
        labels chunks of it as contact details, work history, education and skills so
        recruiters can filter and search. If the parser misreads your layout, experience
        lands in the wrong field or vanishes, and a search for &quot;Kubernetes&quot; will
        not find you even though it is on the page.
      </GuideP>
      <GuideP>
        This ATS-friendly resume template is built around what parsers can read: one
        column, black text, standard headings and nothing clever. Every formatting
        decision in the source is commented with the parsing problem it avoids.
      </GuideP>

      <GuideH2 id="rules">The rules this template follows</GuideH2>
      <GuideUl>
        <li>
          <strong>Single column.</strong> Parsers read top to bottom. A sidebar or second
          column gets interleaved line by line, splicing skills into job descriptions. The
          template uses the plain <GuideCode>article</GuideCode> class with no{" "}
          <GuideCode>multicol</GuideCode> or <GuideCode>minipage</GuideCode>.
        </li>
        <li>
          <strong>Standard headings.</strong> Summary, Experience, Education, Skills,
          Certifications and Projects are the labels parsers are trained on; avoid names
          like &quot;Where I&apos;ve Been&quot;. Headings are unnumbered bold text with a
          thin <GuideCode>\rule</GuideCode>, so they stay ordinary body text.
        </li>
        <li>
          <strong>Real text only.</strong> No icon fonts, skill bars, logos or text inside
          images. If it is not selectable, the ATS cannot read it.
        </li>
        <li>
          <strong>No tables, headers or footers.</strong> Table cells get merged or
          reordered, and many parsers drop header and footer regions, which is where people
          put their contact details. Here the contact line sits in the body and dates are
          right-aligned with <GuideCode>\hfill</GuideCode> on the same line as the title.
        </li>
        <li>
          <strong>Consistent dates.</strong> Every entry uses the same{" "}
          <GuideCode>Month YYYY -- Month YYYY</GuideCode> pattern, which date parsers match
          reliably and use to compute years of experience.
        </li>
        <li>
          <strong>Standard fonts, correct Unicode.</strong> Latin Modern through{" "}
          <GuideCode>fontenc</GuideCode> with <GuideCode>T1</GuideCode> encoding,{" "}
          <GuideCode>\pdfgentounicode=1</GuideCode> so ligatures like &quot;fi&quot; copy
          as two letters, and <GuideCode>\pdfinterwordspaceon</GuideCode> so word gaps are
          real space characters rather than positioning the parser has to guess at.
        </li>
        <li>
          <strong>Keyword matching.</strong> Skills are plain comma-separated keywords by
          category and each bullet names its tools. Mirror the posting&apos;s wording: if it
          says &quot;CI/CD&quot;, write &quot;CI/CD&quot;.
        </li>
      </GuideUl>

      <GuideH2 id="customize">How to customise it</GuideH2>
      <GuideOl>
        <li>
          Replace the name, contact line and the <GuideCode>pdftitle</GuideCode>/
          <GuideCode>pdfauthor</GuideCode> metadata in <GuideCode>\hypersetup</GuideCode>;
          some systems read the candidate name from there.
        </li>
        <li>
          Each job is an <GuideCode>\entry{"{Title}{Dates}"}</GuideCode> line, a{" "}
          <GuideCode>\subentry{"{Company}{Location}"}</GuideCode> line and an{" "}
          <GuideCode>itemize</GuideCode> block. Copy a block to add a role; delete one to
          remove it. Start bullets with a verb and end with a number.
        </li>
        <li>
          Reorder sections freely. Students should move Education above Experience;
          everyone else keeps Experience first. Drop Certifications or Projects if they are
          empty rather than leaving a heading with nothing under it.
        </li>
        <li>
          Stay on one page by cutting bullets before touching the layout. If you must, the
          margins in the <GuideCode>geometry</GuideCode> line can go down to 0.5in and the
          class size to 10pt.
        </li>
      </GuideOl>

      <GuideH2 id="test">How to test the PDF</GuideH2>
      <GuideP>
        Open the compiled PDF, select all, and paste into a plain-text editor. You should
        see the sections in order, one job title and date range per line, and no missing
        characters. That is roughly what the ATS sees; if something looks wrong there, fix
        the source rather than hoping the parser does better.
      </GuideP>

      <GuideH2 id="when">When to use this vs other resume templates</GuideH2>
      <GuideTable
        headers={["Template", "Best for", "Difference"]}
        rows={[
          [
            <strong key="a">ATS-Friendly Resume</strong>,
            "Online applications through large company portals, career changers, anyone unsure how their PDF will be parsed",
            "Plainest layout, Summary and Certifications sections, parser-safe PDF settings",
          ],
          [
            <GuideLink key="h" href="/templates/harvard-resume">
              Harvard Resume
            </GuideLink>,
            "Finance, consulting, law and business students",
            "Small-caps headings, Leadership & Activities section, also single column",
          ],
          [
            <GuideLink key="j" href="/templates/jakes-resume">
              Jake&apos;s Resume
            </GuideLink>,
            "Software engineering students and new graduates",
            "Projects-heavy structure; uses tabular* for entry lines, which most parsers handle but this template avoids",
          ],
          [
            <GuideLink key="c" href="/templates/academic-cv">
              Academic CV
            </GuideLink>,
            "Graduate school, postdoc and faculty applications",
            "Multi-page with Publications and Teaching; not read by an ATS",
          ],
        ]}
      />
      <GuideP>
        For a broader comparison of resume and CV templates, see the{" "}
        <GuideLink
          href="https://www.useoctree.com/blog/latex-resume-templates-professional-cv-guide"
          external
        >
          LaTeX resume templates guide
        </GuideLink>
        .
      </GuideP>

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
