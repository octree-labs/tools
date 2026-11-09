import {
  GuideCode,
  GuideFaq,
  GuideH2,
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
    question: "Does this LaTeX resume template work in Overleaf?",
    answer:
      "Yes. It is a plain article document that loads only geometry, enumitem and hyperref, which are part of every TeX distribution. Paste the source into a blank Overleaf project, Octree or a local TeX Live or MiKTeX install and it compiles unchanged with pdfLaTeX.",
  },
  {
    question: "Is a LaTeX resume ATS-friendly?",
    answer:
      "A single-column LaTeX resume with real text (no images or text inside tables) parses well in applicant tracking systems, and this template is single column. Two things help further: keep standard section names such as Experience, Education and Skills, and add \\usepackage[T1]{fontenc} and \\usepackage{lmodern} so accented characters are stored as single glyphs and copy out of the PDF correctly. For a layout tuned specifically for ATS parsing, see the ATS-friendly resume template.",
  },
  {
    question: "How do I keep my resume to one page?",
    answer:
      "Reduce the margin in \\usepackage[margin=0.75in]{geometry} to 0.5in, switch the class option from 11pt to 10pt, and keep the noitemsep option on every itemize. Shorter bullets help most: one line per achievement, starting with a verb and ending with a number where you can.",
  },
  {
    question: "How is this different from Jake's Resume?",
    answer:
      "This template is deliberately minimal: standard \\section* headings, \\hfill for right-aligned dates and no custom macros, so it is easy to read and change. Jake's Resume defines its own \\resumeSubheading-style commands and a ruled section style for a denser, more polished look that is popular in software engineering applications.",
  },
  {
    question: "Can I use a different font?",
    answer:
      "With pdfLaTeX, load a font package such as \\usepackage{charter} or \\usepackage{lmodern} in the preamble. To use any font installed on your system, compile with XeLaTeX or LuaLaTeX and add \\usepackage{fontspec} with \\setmainfont{Font Name}.",
  },
];

export default function ResumeGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A simple LaTeX resume template</GuideH2>
      <GuideP>
        This LaTeX resume template is a one-page, single-column resume for job
        applications in software, engineering, research and other technical fields. It
        is written as a plain <GuideCode>article</GuideCode> document with standard
        commands, so you can understand every line of it in a few minutes: a centred
        name and contact line, then <GuideCode>{"\\section*"}</GuideCode> headings for
        Experience, Education, Skills and Projects, with job titles on the left and
        dates pushed to the right with <GuideCode>\hfill</GuideCode>.
      </GuideP>
      <GuideP>
        The template loads only three packages: <GuideCode>geometry</GuideCode> for the
        0.75 inch margins, <GuideCode>enumitem</GuideCode> for tight bullet lists and{" "}
        <GuideCode>hyperref</GuideCode> for clickable links. That makes it an
        Overleaf-compatible resume template: it compiles with pdfLaTeX in Overleaf,
        Octree, TeX Live or MiKTeX without any changes or custom class files. Page
        numbers are switched off with <GuideCode>{"\\pagestyle{empty}"}</GuideCode>.
      </GuideP>
      <GuideP>
        Use it when you want a clean resume in LaTeX that you fully control. If you would
        rather start from a more styled design, compare it with{" "}
        <GuideLink href="/templates/jakes-resume">Jake&apos;s Resume</GuideLink>, the{" "}
        <GuideLink href="/templates/ats-resume">ATS-friendly resume</GuideLink> or the{" "}
        <GuideLink href="/templates/harvard-resume">Harvard resume</GuideLink> templates
        below.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>A centred header with your name and a phone, email, LinkedIn and GitHub line</li>
        <li>Experience with title, company, location and dates on one line</li>
        <li>
          Achievement bullets using <GuideCode>{"\\begin{itemize}[noitemsep]"}</GuideCode>
        </li>
        <li>Education with degree, university, graduation date, major and GPA</li>
        <li>Skills grouped into labelled lines (Programming, Tools)</li>
        <li>A Projects section for side projects or research</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree with a live preview, or{" "}
          <em>View Source</em> and paste the code into a new Overleaf project or a local{" "}
          <GuideCode>resume.tex</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX (<GuideCode>latexmk -pdf resume.tex</GuideCode>). You only
          need XeLaTeX or LuaLaTeX if you switch to a system font with{" "}
          <GuideCode>fontspec</GuideCode>.
        </li>
        <li>
          Replace <GuideCode>Your Name</GuideCode> and the contact line in the{" "}
          <GuideCode>center</GuideCode> block at the top.
        </li>
        <li>
          Copy the Experience block (the bold title line plus its itemize) once per
          role, most recent first.
        </li>
        <li>Delete sections you do not need and check that the PDF stays on one page.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Make the contact links clickable.</strong> hyperref is already loaded;
        replace the plain contact text with links and hide the coloured boxes:
      </GuideP>
      <GuidePre>{`\\hypersetup{hidelinks}
...
\\href{mailto:you@example.com}{you@example.com} |
\\href{https://linkedin.com/in/you}{linkedin.com/in/you} |
\\href{https://github.com/you}{github.com/you}`}</GuidePre>
      <GuideP>
        <strong>Smaller, ruled section headings.</strong> The default{" "}
        <GuideCode>{"\\section*"}</GuideCode> is large for a resume. Add{" "}
        <GuideCode>titlesec</GuideCode> to the preamble for small caps headings with a
        rule underneath and less vertical space:
      </GuideP>
      <GuidePre>{`\\usepackage{titlesec}
\\titleformat{\\section}{\\large\\scshape}{}{0pt}{}[\\titlerule]
\\titlespacing*{\\section}{0pt}{10pt}{6pt}`}</GuidePre>
      <GuideP>
        <strong>One command per role.</strong> If you have many positions, define a
        macro so every entry lines up the same way:
      </GuideP>
      <GuidePre>{`\\newcommand{\\role}[4]{\\textbf{#1} \\hfill #2\\\\ \\textit{#3} \\hfill #4\\\\}

\\role{Software Engineer}{Jan 2024 -- Present}{Acme Corp}{Berlin, Germany}
\\begin{itemize}[noitemsep]
\\item Cut API latency by 40\\% by adding a caching layer
\\end{itemize}`}</GuidePre>

      <GuideH2 id="comparison">Other LaTeX resume templates</GuideH2>
      <GuideTable
        headers={["Template", "Best for", "Style"]}
        rows={[
          [<strong key="r">Resume</strong>, "Any technical role", "Minimal, standard commands"],
          [
            <GuideLink key="j" href="/templates/jakes-resume">
              Jake&apos;s Resume
            </GuideLink>,
            "Software engineering",
            "Dense, ruled sections",
          ],
          [
            <GuideLink key="a" href="/templates/ats-resume">
              ATS-Friendly Resume
            </GuideLink>,
            "Large-company applications",
            "Parser-safe single column",
          ],
          [
            <GuideLink key="h" href="/templates/harvard-resume">
              Harvard Resume
            </GuideLink>,
            "Business, consulting, finance",
            "Harvard OCS format, ruled headings",
          ],
          [
            <GuideLink key="c" href="/templates/academic-cv">
              Academic CV
            </GuideLink>,
            "Faculty and research jobs",
            "Multi-page, publications",
          ],
        ]}
      />

      <GuideH2 id="faq">LaTeX resume template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
