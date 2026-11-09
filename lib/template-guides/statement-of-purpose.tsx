import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideUl,
  type GuideFaqItem,
} from "./ui";

const faq: GuideFaqItem[] = [
  {
    question: "What should a statement of purpose include?",
    answer:
      "An opening that explains how your interest in the field began, your academic background, your research and any relevant professional experience, the specific research questions you want to pursue, why this particular programme and its faculty fit those interests, and your longer-term goals. This template has a section for each, in that order.",
  },
  {
    question: "How long should a statement of purpose be?",
    answer:
      "Use the limit the programme gives, which is often stated as a word count or a page count. The sample in this template runs to about two pages at 11 pt with one-and-a-half line spacing. Overleaf's Word Count menu item or the texcount tool will count the words in your .tex file.",
  },
  {
    question: "Should a statement of purpose have headings?",
    answer:
      "Many applicants submit it as continuous prose, and some programmes expect that. The template uses unnumbered \\section* headings to make the structure clear while you draft; delete them before submitting if you want a flowing essay, and make sure each paragraph's first sentence carries the point the heading made.",
  },
  {
    question: "Does this statement of purpose template work in Overleaf?",
    answer:
      "Yes. It uses only the article class with geometry and setspace, so it compiles with pdfLaTeX in Overleaf, Octree or any local TeX install.",
  },
];

export default function StatementOfPurposeGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A statement of purpose template in LaTeX</GuideH2>
      <GuideP>
        This statement of purpose LaTeX template is designed for graduate school
        applications to master&apos;s and PhD programmes. A centred heading carries the
        title, your name, the programme and the university, and the essay below is
        typeset at 11 pt with one-and-a-half line spacing and one-inch margins, which
        is comfortable to read in a PDF and easy to annotate if an advisor prints it.
      </GuideP>
      <GuideP>
        The structure follows the argument admissions committees look for. An opening
        paragraph tells the story of how your interest in the field started; Academic
        Background covers your degree, coursework and senior thesis; Research Experience
        describes work with a professor and as a research assistant, with outcomes such
        as publications or presentations; Professional Experience connects industry work
        to your academic goals; Research Interests names the questions you want to work
        on and the faculty whose work matches; Why [University Name] gives specific
        reasons for this programme; and a Conclusion restates your fit. Every paragraph
        is a prompt with bracketed placeholders, so you can see what each part should
        contain while you write your own. The source uses the standard{" "}
        <GuideCode>article</GuideCode> class with <GuideCode>setspace</GuideCode> for
        the line spacing and unnumbered <GuideCode>\section*</GuideCode> headings, and
        compiles as a statement of purpose template for Overleaf, in Octree or with any
        local TeX install. Keep one copy per programme so that the Why section stays
        specific.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Centred heading with name, programme and university</li>
        <li>Opening paragraph and six headed sections with prompts</li>
        <li>One-and-a-half line spacing via <GuideCode>setspace</GuideCode></li>
        <li>Page numbers in the footer, no running header</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>sop.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>Edit the name, programme and university in the <GuideCode>center</GuideCode> block.</li>
        <li>
          Replace each bracketed placeholder. Name specific faculty, labs and resources
          in the Research Interests and Why sections.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Match the programme&apos;s formatting rules.</strong> If the application
        asks for 12 pt Times and double spacing, change the class option and spacing
        command and add a Times-style font:
      </GuideP>
      <GuidePre>{`\\documentclass[12pt]{article}
\\usepackage[margin=1in]{geometry}
\\usepackage{newtxtext}
\\usepackage{setspace}
\\doublespacing`}</GuidePre>
      <GuideP>
        <strong>Put your name on every page.</strong> Uploaded documents are sometimes
        separated, so a small header helps:
      </GuideP>
      <GuidePre>{`\\usepackage{fancyhdr}
\\pagestyle{fancy}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0pt}
\\rhead{Your Name -- Statement of Purpose}
\\cfoot{\\thepage}`}</GuidePre>
      <GuideP>
        <strong>Switch to flowing prose.</strong> Delete the{" "}
        <GuideCode>\section*</GuideCode> lines for a continuous essay; the paragraphs
        already read in order without them.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/motivation-letter">motivation letter</GuideLink>,{" "}
        <GuideLink href="/templates/research-statement">research statement</GuideLink> and{" "}
        <GuideLink href="/templates/academic-cv">academic CV</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Statement of purpose FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
