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
    question: "How long should a letter of recommendation be?",
    answer:
      "One full page is the norm, and two pages is the maximum for graduate school or faculty letters. Anything shorter than about three paragraphs reads as lukewarm, because committees assume a recommender with a lot to say writes more. This template produces roughly one page at 11pt with one-inch margins once the placeholders are filled; cut the Personal Qualities section or shorten the examples if you run onto a third page.",
  },
  {
    question: "What should the first paragraph of a recommendation letter say?",
    answer:
      "State who you are recommending, for what, how you know them, in what capacity and for how long, and your overall level of enthusiasm. The template's opening paragraph does exactly this: it names the program, the duration of the relationship, your role (professor, advisor or supervisor) and a comparative statement about where the candidate ranks among students you have taught.",
  },
  {
    question: "How do I add a letterhead or logo to the LaTeX letter?",
    answer:
      "Load graphicx and put an \\includegraphics inside the \\address command, which the letter class prints at the top right of the first page: \\address{\\includegraphics[height=1.5cm]{logo.png}\\\\Department Name\\\\University Name\\\\...}. For a full-width pre-printed letterhead, use the eso-pic package to place a PDF or image behind the first page, or simply print on letterhead paper.",
  },
  {
    question: "How do I insert a scanned signature?",
    answer:
      "Put the image in the \\signature argument: \\signature{\\includegraphics[height=1.2cm]{signature.png}\\\\Professor Name\\\\Title\\\\Department}. The letter class leaves vertical space after \\closing for a handwritten signature by default; with an image, you can remove that gap by setting \\longindentation=0pt and adjusting \\medskipamount, or leave it and sign by hand.",
  },
  {
    question: "Should a recommendation letter be dated and addressed to a person?",
    answer:
      "Yes. The letter class prints \\today automatically below the sender address; override it with \\date{March 3, 2026} if you need a specific date. Address the letter to a named person or committee when you know one (the template uses the Admissions Committee of the program) and open with 'Dear Members of the Admissions Committee' or 'Dear Dr. Name'. 'To Whom It May Concern' is acceptable only for general-purpose letters.",
  },
];

export default function LetterOfRecommendationGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is this letter of recommendation template?</GuideH2>
      <GuideP>
        This is a free letter of recommendation template in LaTeX, written from the point
        of view of a professor or supervisor recommending a student for a graduate
        program. It uses the standard <GuideCode>letter</GuideCode> document class at 11pt
        with one-inch margins from <GuideCode>geometry</GuideCode> and{" "}
        <GuideCode>hyperref</GuideCode> for a clickable email address. The body is organised
        under four bold run-in headings, Academic Excellence, Research Capabilities,
        Personal Qualities and Recommendation, with placeholder text that tells you what
        kind of evidence belongs in each. Fill in the names, dates and examples, compile,
        and you have a clean, correctly laid out letter with sender address, date,
        recipient block, salutation, closing and signature in the places a reader
        expects them.
      </GuideP>
      <GuideP>
        Because the <GuideCode>letter</GuideCode> class handles the layout, the template is
        equally useful for academic, employment, scholarship, internship and character
        references; only the headings and the evidence change.
      </GuideP>

      <GuideH2 id="structure">The structure of a strong recommendation letter</GuideH2>
      <GuideP>
        Admissions committees and hiring managers read hundreds of these letters. The
        ones that help a candidate share a predictable shape, which the template follows:
      </GuideP>
      <GuideOl>
        <li>
          <strong>Opening: relationship and verdict.</strong> Who you are recommending,
          for what, how long and in what capacity you have known them, and your overall
          judgement in one sentence. The template&apos;s first paragraph does this and adds
          a comparative statement (&quot;one of the most outstanding students I have
          encountered in my X years of teaching&quot;). Comparisons are the single most
          useful thing a letter can contain, because they calibrate your praise.
        </li>
        <li>
          <strong>Two or three specific examples.</strong> Each middle section should
          contain a concrete story: a project, a result, a decision the candidate made
          and what came of it. &quot;Excellent analytical skills&quot; is an assertion;
          &quot;identified a flaw in our sampling design that two postdocs had missed, and
          proposed the fix we used in the published paper&quot; is evidence.
        </li>
        <li>
          <strong>Comparative and contextual statements.</strong> Rank the candidate where
          you honestly can (&quot;top 5 percent of the roughly 400 students I have
          taught&quot;), and explain what the grade or achievement means in your course or
          lab.
        </li>
        <li>
          <strong>Personal qualities.</strong> Maturity, collaboration, leadership,
          persistence, with one example each. Keep it short.
        </li>
        <li>
          <strong>Closing: unreserved recommendation and an offer of contact.</strong>{" "}
          Restate the recommendation, say why the candidate fits this program or role,
          and invite the reader to get in touch, with email and phone.
        </li>
      </GuideOl>

      <GuideH2 id="walkthrough">Section-by-section walkthrough of the template</GuideH2>
      <GuideH3>Preamble: \signature and \address</GuideH3>
      <GuidePre>{`\\signature{Professor Name\\\\Title\\\\Department}
\\address{Department Name\\\\University Name\\\\Address\\\\City, State ZIP\\\\Email: professor@university.edu}`}</GuidePre>
      <GuideP>
        In the <GuideCode>letter</GuideCode> class, <GuideCode>\address</GuideCode> is the{" "}
        <em>sender&apos;s</em> address; it is printed at the top right of the first page,
        with the date underneath. <GuideCode>\signature</GuideCode> is the text printed
        under the closing, after a gap for a handwritten signature. Both are defined
        once in the preamble and reused by every <GuideCode>letter</GuideCode> environment
        in the file, which makes it easy to produce several letters for the same student
        in one document.
      </GuideP>
      <GuideH3>The letter environment and \opening</GuideH3>
      <GuideP>
        <GuideCode>\begin{"{letter}{Admissions Committee\\\\Graduate Program Name\\\\...}"}</GuideCode>{" "}
        takes the <em>recipient&apos;s</em> address as its argument and prints it at the
        left above the salutation. <GuideCode>\opening{"{Dear Members of the Admissions Committee,}"}</GuideCode>{" "}
        prints the salutation and starts the body. Both commands are required: a letter
        without <GuideCode>\opening</GuideCode> produces an error.
      </GuideP>
      <GuideH3>Body paragraphs</GuideH3>
      <GuideP>
        The body is ordinary paragraphs separated by blank lines, with{" "}
        <GuideCode>\textbf{"{Academic Excellence}"}</GuideCode> and the other three headings
        set as bold lines of their own. The <GuideCode>letter</GuideCode> class does not
        indent paragraphs and adds a little space between them, which is the right
        convention for correspondence. Replace every placeholder, including the
        he/she/they alternatives, with the candidate&apos;s name and pronouns; a letter
        that still says &quot;Student Name&quot; or &quot;his/her&quot; is the classic
        sign of a template left unfinished.
      </GuideP>
      <GuideH3>\closing</GuideH3>
      <GuideP>
        <GuideCode>\closing{"{Sincerely,}"}</GuideCode> prints the complimentary close,
        leaves room to sign, and prints the <GuideCode>\signature</GuideCode> block. After
        it you may add <GuideCode>\encl{"{Transcript}"}</GuideCode>,{" "}
        <GuideCode>\cc{"{Graduate Coordinator}"}</GuideCode> or{" "}
        <GuideCode>\ps{"{...}"}</GuideCode> for a postscript.
      </GuideP>

      <GuideH2 id="variants">Academic vs professional recommendation letters</GuideH2>
      <GuideUl>
        <li>
          <strong>Graduate school (the template default):</strong> emphasise research,
          intellectual independence, writing and analytical ability, and grades in
          context. Keep the four headings.
        </li>
        <li>
          <strong>Employment:</strong> rename the headings to Performance and Results,
          Skills, Teamwork and Character, and Recommendation. Use outcomes the employer
          cares about: projects delivered, revenue, reliability, how they handled a
          setback. Mention the dates of employment and the job title in the opening.
        </li>
        <li>
          <strong>Scholarship or fellowship:</strong> tie each example to the award&apos;s
          criteria (leadership, service, potential) and say explicitly why this candidate
          deserves this award.
        </li>
        <li>
          <strong>Character reference:</strong> drop the academic section, keep Personal
          Qualities, and be clear about how you know the person and that the relationship
          is not purely professional.
        </li>
      </GuideUl>

      <GuideH2 id="customize">How to customize: letterhead, signature, dates, length</GuideH2>
      <GuideUl>
        <li>
          <strong>Letterhead or logo.</strong> Add{" "}
          <GuideCode>\usepackage{"{graphicx}"}</GuideCode> and place{" "}
          <GuideCode>\includegraphics[height=1.5cm]{"{logo.png}"}</GuideCode> as the first
          line of <GuideCode>\address</GuideCode>. For a full-page pre-printed letterhead
          PDF, use <GuideCode>eso-pic</GuideCode> with{" "}
          <GuideCode>\AddToShipoutPictureBG*</GuideCode> on the first page.
        </li>
        <li>
          <strong>Signature image.</strong>{" "}
          <GuideCode>\signature{"{\\includegraphics[height=1.2cm]{sig.png}\\\\Professor Name\\\\Title}"}</GuideCode>
          . Scan in black ink on white and crop tightly.
        </li>
        <li>
          <strong>Left-align the closing.</strong> The class indents the closing and
          signature to the middle of the page by default. Add{" "}
          <GuideCode>\longindentation=0pt</GuideCode> in the preamble to put them at the
          left margin, the more common modern layout.
        </li>
        <li>
          <strong>Date.</strong> <GuideCode>\today</GuideCode> is printed automatically;
          use <GuideCode>\date{"{March 3, 2026}"}</GuideCode> before{" "}
          <GuideCode>\begin{"{document}"}</GuideCode> to fix it.
        </li>
        <li>
          <strong>Contact details.</strong> <GuideCode>\telephone{"{...}"}</GuideCode> is
          available, though with the default <GuideCode>letter</GuideCode> class it only
          appears if you also use <GuideCode>\makelabels</GuideCode>; it is simpler to
          include the phone number in <GuideCode>\address</GuideCode>.
        </li>
        <li>
          <strong>Font and size.</strong> Change <GuideCode>11pt</GuideCode> to{" "}
          <GuideCode>12pt</GuideCode> for a more traditional look, or add{" "}
          <GuideCode>\usepackage{"{newtxtext}"}</GuideCode> for Times.{" "}
          <GuideCode>a4paper</GuideCode> in the class options switches the paper size.
        </li>
        <li>
          <strong>Length.</strong> Aim for one page, never more than two. Trim examples
          before trimming the comparative statements.
        </li>
      </GuideUl>

      <GuideH2 id="errors">Common errors and how to fix them</GuideH2>
      <GuideUl>
        <li>
          <strong>&quot;LaTeX Error: \opening missing&quot;</strong> or odd spacing at
          the top. Every <GuideCode>letter</GuideCode> environment must contain an{" "}
          <GuideCode>\opening</GuideCode> before the body text.
        </li>
        <li>
          <strong>&quot;Undefined control sequence \includegraphics&quot;.</strong> Add{" "}
          <GuideCode>\usepackage{"{graphicx}"}</GuideCode> to the preamble.
        </li>
        <li>
          <strong>&quot;Misplaced alignment tab character &amp;&quot;.</strong> A bare
          ampersand in a department name such as &quot;Research &amp; Development&quot;.
          Write <GuideCode>\&amp;</GuideCode>.
        </li>
        <li>
          <strong>Address lines run together.</strong> Lines inside{" "}
          <GuideCode>\address</GuideCode>, <GuideCode>\signature</GuideCode> and the
          recipient argument are separated by <GuideCode>\\</GuideCode>, not by blank
          lines.
        </li>
        <li>
          <strong>Sender address on the left instead of the right.</strong> You wrote{" "}
          <GuideCode>\address</GuideCode> inside the letter environment, after{" "}
          <GuideCode>\opening</GuideCode>. Keep it in the preamble as the template does.
        </li>
        <li>
          <strong>Second page has no header.</strong> That is the class default. Add{" "}
          <GuideCode>\pagestyle{"{headings}"}</GuideCode> to print the recipient name,
          date and page number on continuation pages.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile the letter</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> click <em>Open as template</em>. Fill in the
          placeholders in the editor with a live preview, or paste your notes about the
          student and ask the AI assistant to draft each section.
        </li>
        <li>
          <strong>In Overleaf:</strong> paste the source into a blank project and compile
          with pdfLaTeX. Upload any logo or signature images to the project root.
        </li>
        <li>
          <strong>Locally:</strong> save as <GuideCode>letter.tex</GuideCode> and run{" "}
          <GuideCode>pdflatex letter.tex</GuideCode>. One pass is enough.
        </li>
      </GuideOl>

      <GuideH2 id="comparison">Related letter templates</GuideH2>
      <GuideTable
        headers={["Template", "Best for", "Class", "Structure"]}
        rows={[
          [
            <strong key="r">Letter of Recommendation</strong>,
            "Professors, advisors and managers writing for a candidate",
            <GuideCode key="c1">letter</GuideCode>,
            "Four headed sections: excellence, research, qualities, recommendation",
          ],
          [
            <GuideLink key="l" href="/templates/letter">
              Formal Letter
            </GuideLink>,
            "General business and official correspondence",
            <GuideCode key="c2">letter</GuideCode>,
            "Plain body with sender, recipient, opening and closing",
          ],
          [
            <GuideLink key="c" href="/templates/cover-letter">
              Cover Letter
            </GuideLink>,
            "Applicants writing about themselves for a job or program",
            <GuideCode key="c3">letter</GuideCode>,
            "Three or four paragraphs matching experience to the role",
          ],
        ]}
      />
      <GuideP>
        If you are the applicant rather than the recommender, the{" "}
        <GuideLink href="/templates/motivation-letter">motivation letter</GuideLink> and{" "}
        <GuideLink href="/templates/statement-of-purpose">statement of purpose</GuideLink>{" "}
        templates cover the documents you write yourself.
      </GuideP>

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
