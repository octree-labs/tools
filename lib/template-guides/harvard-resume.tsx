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
    question: "What is the Harvard resume format?",
    answer:
      "The Harvard resume format is the one-page bullet resume taught by Harvard's Office of Career Services (now the Mignone Center for Career Success) in its Resumes and Cover Letters guide. It has a centred name and contact line, then Education, Experience, Leadership & Activities and Skills & Interests, each entry showing the organisation and location on one line, the role and dates on the next, and two to four bullets that start with an action verb and end with a result. It uses no colour, photos, columns or graphics.",
  },
  {
    question: "Is the Harvard resume template ATS friendly?",
    answer:
      "Yes. The template is a single-column article-class document with standard section names, no tables in the text flow, no icons and no header or footer content, so applicant tracking systems extract it as clean, ordered text. Keep it that way when customising: do not add a sidebar, a two-column skills grid or an image.",
  },
  {
    question: "Should Education go first on a Harvard resume?",
    answer:
      "For students and graduates within about three years of their degree, yes. The format puts Education first because it is the strongest, most comparable credential. Once you have several years of full-time experience, move the Experience section above Education and shorten the education entry to one or two lines.",
  },
  {
    question: "Can I use this template if I did not go to Harvard?",
    answer:
      "Of course. The format is named for the career office that popularised it, not for the institution on the page. Replace every placeholder, including the Harvard email and clubs, with your own details. The style is widely used for finance, consulting, law, policy and general business applications from any university.",
  },
  {
    question: "How do I fit everything on one page?",
    answer:
      "Trim content before shrinking the layout. Cut bullets that do not show a skill the target role needs, drop the high school entry once you are past second year, and limit each bullet to one or two lines. If you still need space, reduce the geometry margins from 0.75in to 0.6in or change the class option from 11pt to 10pt. Do not go below 10pt or below 0.5in margins.",
  },
];

export default function HarvardResumeGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is the Harvard resume template?</GuideH2>
      <GuideP>
        This Harvard resume template is a LaTeX implementation of the bullet resume taught
        by the Harvard Office of Career Services (OCS), the format shown in Harvard&apos;s
        widely circulated &quot;Resumes and Cover Letters&quot; guide and the one most
        finance, consulting and law recruiters have seen thousands of times. What makes a
        resume &quot;Harvard format&quot; is restraint: one page, black text, a centred
        name, a single line of contact details, and, in the sample resume from Harvard's guide, four sections in this order:
        Education, Experience, Leadership &amp; Activities, and Skills &amp; Interests. Every
        entry has the organisation and location on one line, the role and dates on the
        next, and a few short bullets that begin with an action verb and end with a
        concrete result. There are no photos, colours, columns, skill bars or icons.
      </GuideP>
      <GuideP>
        The template reproduces that look with the standard{" "}
        <GuideCode>article</GuideCode> class at 11pt on US letter paper and a short list of
        packages: <GuideCode>geometry</GuideCode> for 0.75in side margins and 0.6in top and
        bottom margins, <GuideCode>enumitem</GuideCode> for compact bullets,{" "}
        <GuideCode>titlesec</GuideCode> for the small-caps section headings with a thin rule,{" "}
        <GuideCode>hyperref</GuideCode> (with <GuideCode>hidelinks</GuideCode>) for a
        clickable LinkedIn URL, and <GuideCode>fontenc</GuideCode>/
        <GuideCode>inputenc</GuideCode> for proper accented characters.{" "}
        <GuideCode>\pagestyle{"{empty}"}</GuideCode> removes page numbers and{" "}
        <GuideCode>\raggedright</GuideCode> avoids stretched word spacing in bullets.
      </GuideP>

      <GuideH2 id="macros">The four helper commands</GuideH2>
      <GuideP>
        Instead of raw formatting, the template defines four macros in the preamble so
        every entry is written the same way:
      </GuideP>
      <GuidePre>{`\\name{Jordan A. Smith}                 % large bold small-caps name, centred
\\contact{City \\textbar{} email \\textbar{} phone \\textbar{} \\href{...}{linkedin.com/in/...}}
\\entry{Goldman Sachs}{New York, NY}      % bold organisation ....... location
\\role{Summer Analyst, IBD}{June 2026 -- August 2026}   % italic title ... dates`}</GuidePre>
      <GuideP>
        <GuideCode>\entry</GuideCode> adds 4pt of space above the organisation name and
        uses <GuideCode>\hfill</GuideCode> to push the location to the right margin;{" "}
        <GuideCode>\role</GuideCode> does the same for the italic title and dates. Bullets
        are plain <GuideCode>itemize</GuideCode> lists, tuned by the{" "}
        <GuideCode>\setlist</GuideCode> line to a 0.18in indent with 1pt between items. To
        add a new job, copy an <GuideCode>\entry</GuideCode>, <GuideCode>\role</GuideCode>{" "}
        and <GuideCode>itemize</GuideCode> block and change the text. Ampersands and
        dollar signs inside the arguments must be escaped (<GuideCode>\&amp;</GuideCode>,{" "}
        <GuideCode>\$</GuideCode>), as in the sample.
      </GuideP>

      <GuideH2 id="walkthrough">Section-by-section walkthrough</GuideH2>
      <GuideH3>Name and contact line</GuideH3>
      <GuideP>
        Name in <GuideCode>\LARGE\bfseries\scshape</GuideCode>, then one line with city and
        ZIP, email, phone and a LinkedIn URL separated by vertical bars. Harvard&apos;s
        guide's sample uses a single line; two are acceptable if you add a portfolio or
        GitHub link. Use a personal or university email you check daily.
      </GuideP>
      <GuideH3>Education</GuideH3>
      <GuideP>
        For students this is the first section. List the university, degree and field
        (&quot;A.B. in Economics&quot;), secondary field or minor, GPA if 3.5 or higher,
        and the expected graduation date. The sample adds a &quot;Relevant
        coursework&quot; bullet and an &quot;Honors&quot; bullet; both are optional and
        the first to cut when space is tight. Keep the high school entry only in your
        first two years of college, or if it carries a notable distinction such as
        valedictorian or a national award.
      </GuideP>
      <GuideH3>Experience</GuideH3>
      <GuideP>
        Internships, research assistantships and part-time jobs in reverse chronological
        order. Harvard&apos;s guide gives the same advice on bullets: start each with a strong
        verb in the past tense (Built, Analyzed, Led, Designed, Negotiated), name the
        tools or methods, and quantify the outcome. Compare &quot;Helped with financial
        models&quot; with the sample&apos;s &quot;Built discounted cash flow and
        comparable-company models for three live M&amp;A transactions totaling \$2.4B in
        deal value&quot;. Two to four bullets per role; one line each where possible.
      </GuideP>
      <GuideH3>Leadership &amp; Activities</GuideH3>
      <GuideP>
        This section is the most distinctive part of the Harvard format. Clubs, athletics,
        volunteering and student organisations are written exactly like jobs, with a
        role, dates and achievement bullets, because recruiters at consulting and
        banking firms treat leadership as evidence of initiative and teamwork. Favour
        entries where you led people, ran a budget or produced a measurable result.
      </GuideP>
      <GuideH3>Skills &amp; Interests</GuideH3>
      <GuideP>
        Three bullets: Technical (software, programming languages, statistical tools),
        Languages (with proficiency level), and Interests. The interests line is
        deliberate: Harvard&apos;s sample lists two or three specific interests as a
        conversation starter, so &quot;sourdough baking, chess&quot; is better than
        &quot;reading, travel&quot;.
      </GuideP>

      <GuideH2 id="tailoring">Tailoring for finance and consulting vs engineering</GuideH2>
      <GuideUl>
        <li>
          <strong>Finance and consulting:</strong> keep the four sections exactly as they
          are. Put GPA and test scores (if strong) in Education, lead Experience bullets
          with deal sizes, revenue, cost savings and client outcomes, and give Leadership
          &amp; Activities real space; case competitions, investment clubs and varsity
          sport are read closely. Keep the Technical line to Excel, financial modelling
          and any data tools.
        </li>
        <li>
          <strong>Software and engineering:</strong> add a <em>Projects</em> section after
          Experience using the same <GuideCode>\entry</GuideCode>/
          <GuideCode>\role</GuideCode> pair (project name and GitHub link on the first
          line, technologies and dates on the second), rename the last section to
          &quot;Technical Skills&quot; and list languages, frameworks and tools first.
          Shrink Leadership &amp; Activities to one or two entries, or fold it into
          Projects. If you want a template built around that structure from the start,
          see <GuideLink href="/templates/jakes-resume">Jake&apos;s Resume</GuideLink>.
        </li>
        <li>
          <strong>Policy, law and nonprofit:</strong> keep the Harvard order, rename
          &quot;Leadership &amp; Activities&quot; to &quot;Leadership &amp; Service&quot; if
          most entries are volunteering, and include writing samples or publications as
          bullets under the relevant role.
        </li>
      </GuideUl>

      <GuideH2 id="ats">ATS notes</GuideH2>
      <GuideP>
        Applicant tracking systems flatten your PDF to text and search it for section
        names and keywords. This template is ATS-safe as shipped: single column, standard
        headings, selectable text and nothing in the header or footer. To keep it that
        way, do not move the contact line into a header, do not add a photo, keep the
        section names conventional, mirror the exact wording of the job posting in your
        bullets (for example &quot;financial modeling&quot; if that is the phrase used),
        and export to PDF with a simple file name such as{" "}
        <GuideCode>Jordan-Smith-Resume.pdf</GuideCode>.
      </GuideP>

      <GuideH2 id="customize">How to customize the template</GuideH2>
      <GuideUl>
        <li>
          <strong>Margins and size.</strong> Edit the{" "}
          <GuideCode>\usepackage[margin=0.75in,top=0.6in,bottom=0.6in]{"{geometry}"}</GuideCode>{" "}
          line, or switch <GuideCode>11pt</GuideCode> to <GuideCode>10pt</GuideCode>. Use{" "}
          <GuideCode>a4paper</GuideCode> instead of <GuideCode>letterpaper</GuideCode> for
          applications in Europe or Asia.
        </li>
        <li>
          <strong>Font.</strong> The default is Computer Modern. For a Times look that
          matches the original Word version of the Harvard guide, add{" "}
          <GuideCode>\usepackage{"{newtxtext}"}</GuideCode>; for a modern serif try{" "}
          <GuideCode>\usepackage{"{charter}"}</GuideCode>.
        </li>
        <li>
          <strong>Section heading style.</strong> The look is set by one{" "}
          <GuideCode>\titleformat</GuideCode> line. Remove{" "}
          <GuideCode>\scshape</GuideCode> for plain bold headings or change{" "}
          <GuideCode>\titlerule</GuideCode> to nothing to drop the underline.
        </li>
        <li>
          <strong>Add a section.</strong> Copy any <GuideCode>\section{"{...}"}</GuideCode>{" "}
          block. Common additions are Projects, Publications, Certifications and Awards.
        </li>
        <li>
          <strong>Bullet spacing.</strong> Adjust <GuideCode>itemsep</GuideCode> and{" "}
          <GuideCode>topsep</GuideCode> in the <GuideCode>\setlist</GuideCode> line; the
          values shipped are about as tight as stays readable.
        </li>
      </GuideUl>

      <GuideH2 id="errors">Common errors and how to fix them</GuideH2>
      <GuideUl>
        <li>
          <strong>&quot;File `titlesec.sty&apos; not found&quot;</strong> (or{" "}
          <GuideCode>enumitem</GuideCode>). Install with{" "}
          <GuideCode>tlmgr install titlesec enumitem</GuideCode>; Octree and Overleaf
          include both.
        </li>
        <li>
          <strong>&quot;Misplaced alignment tab character &amp;&quot;.</strong> A bare
          ampersand in a company name or section title. Write <GuideCode>\&amp;</GuideCode>,
          as in <GuideCode>Leadership \&amp; Activities</GuideCode>.
        </li>
        <li>
          <strong>&quot;Missing $ inserted&quot;.</strong> A bare <GuideCode>$</GuideCode>{" "}
          or <GuideCode>%</GuideCode> in a bullet. Escape them as{" "}
          <GuideCode>\$2.4B</GuideCode> and <GuideCode>60\%</GuideCode>.
        </li>
        <li>
          <strong>Overfull \hbox warnings.</strong> Usually a long URL in the contact
          line. Shorten the visible link text; the warning does not stop compilation.
        </li>
        <li>
          <strong>Resume spills to two pages.</strong> Remove bullets, not spacing, first;
          see the FAQ below for the order of cuts.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile the Harvard resume</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> click <em>Open as template</em>. You get a live PDF
          preview while you type, and the AI assistant can rewrite weak bullets into the
          verb-plus-result form the Harvard guide asks for.
        </li>
        <li>
          <strong>In Overleaf:</strong> paste the source into a new blank project and
          compile with pdfLaTeX, the default.
        </li>
        <li>
          <strong>Locally:</strong> save as <GuideCode>resume.tex</GuideCode> and run{" "}
          <GuideCode>pdflatex resume.tex</GuideCode>. One pass is enough; there are no
          cross-references or bibliography.
        </li>
      </GuideOl>

      <GuideH2 id="comparison">Harvard resume vs other LaTeX resume templates</GuideH2>
      <GuideTable
        headers={["Template", "Best for", "Sections", "Look"]}
        rows={[
          [
            <strong key="h">Harvard Resume</strong>,
            "Finance, consulting, law, policy and general business applicants",
            "Education, Experience, Leadership & Activities, Skills & Interests",
            "Small-caps ruled headings, italic roles, plain bullets",
          ],
          [
            <GuideLink key="j" href="/templates/jakes-resume">
              Jake&apos;s Resume
            </GuideLink>,
            "Software, data and engineering students",
            "Education, Experience, Projects, Technical Skills",
            "Very similar; macro-driven with a dedicated Projects block",
          ],
          [
            <GuideLink key="a" href="/templates/academic-cv">
              Academic CV
            </GuideLink>,
            "Graduate students, postdocs and faculty",
            "Publications, Research, Teaching, Awards, multi-page",
            "Longer, A4, no one-page constraint",
          ],
        ]}
      />
      <GuideP>
        Pair the resume with the{" "}
        <GuideLink href="/templates/cover-letter">cover letter template</GuideLink>, which
        uses the same restrained style, for a complete application.
      </GuideP>

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
