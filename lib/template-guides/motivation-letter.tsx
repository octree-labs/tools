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
    question: "What should a motivation letter include?",
    answer:
      "Why you want this specific programme or position, what in your background prepares you for it, and what you plan to do with it. This template structures that as Academic Background and Motivation, Relevant Experience, Why This Program, Future Goals and a Conclusion, each a short bold-headed block of one or two paragraphs.",
  },
  {
    question: "What is the difference between a motivation letter and a cover letter?",
    answer:
      "Both are one- or two-page letters, but a cover letter accompanies a job application and focuses on matching your experience to the role, while a motivation letter is more common for university admissions, scholarships and volunteering and focuses on why you want the opportunity and how it fits your goals. A statement of purpose is the essay-style equivalent used by many graduate programmes.",
  },
  {
    question: "How long should a motivation letter be?",
    answer:
      "Follow the length the programme asks for, which is often one page or a word limit. The sample in this template runs onto a second page at 11 pt; shorten each section and remove the bold headings if you need a single page.",
  },
  {
    question: "Does this motivation letter template work in Overleaf?",
    answer:
      "Yes. It uses the standard letter class with the geometry package, so it compiles with pdfLaTeX in Overleaf, Octree or any local TeX install.",
  },
];

export default function MotivationLetterGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A motivation letter template in LaTeX</GuideH2>
      <GuideP>
        This motivation letter LaTeX template is written for applications to a master&apos;s
        or PhD programme, but the same structure works for scholarships, exchange
        programmes and professional roles. It is addressed to an Admissions Committee,
        opens with &quot;Dear Members of the Selection Committee&quot;, and walks
        through the argument a selection panel looks for in five bold-headed blocks:
        Academic Background and Motivation, Relevant Experience, Why This Program,
        Future Goals, and a Conclusion that thanks the reader and asks for an interview.
      </GuideP>
      <GuideP>
        Every paragraph is a fill-in-the-blanks prompt (&quot;My interest in field began
        when/how&quot;, &quot;The opportunity to work with Professor Name&quot;), so you
        can see what each part needs to say while you replace it with your own story.
        The document uses LaTeX&apos;s standard <GuideCode>letter</GuideCode> class at 11
        pt with one-inch margins: your address, email and phone go in{" "}
        <GuideCode>\address</GuideCode>, your name in <GuideCode>\signature</GuideCode>,
        and the class places them, the date, the recipient block and the signature for
        you. Nothing beyond <GuideCode>geometry</GuideCode> is loaded, so it compiles
        unchanged as a motivation letter template for Overleaf, in Octree or with any
        local TeX install. As written, the sample runs onto a second page; if the
        programme asks for one page, cut each section down to its strongest paragraph.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Sender block with address, email and phone; automatic date</li>
        <li>Recipient block for committee, programme and university</li>
        <li>Five headed sections with guided prompts</li>
        <li>Closing and signature from <GuideCode>\signature</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>motivation.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>
          Edit <GuideCode>\signature</GuideCode> and <GuideCode>\address</GuideCode> in the
          preamble, then the recipient address in{" "}
          <GuideCode>{"\\begin{letter}{...}"}</GuideCode>.
        </li>
        <li>
          Rewrite each section, naming the programme, faculty and resources specifically;
          a letter that could be sent to any university is the most common weakness.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Gain space.</strong> Tighten the margins slightly and drop to 10 pt. With
        the full sample text this still spills onto a second page, so pair it with
        shorter paragraphs:
      </GuideP>
      <GuidePre>{`\\documentclass[10pt]{letter}
\\usepackage[margin=0.8in]{geometry}`}</GuidePre>
      <GuideP>
        <strong>Write it as flowing prose.</strong> Some committees prefer a letter
        without headings. Delete the five <GuideCode>{"\\textbf{...}"}</GuideCode>{" "}
        heading lines and make sure each paragraph opens with a sentence that does the
        heading&apos;s job.
      </GuideP>
      <GuideP>
        <strong>Set the date and paper size.</strong> For a dated letter on A4, which most
        European universities expect:
      </GuideP>
      <GuidePre>{`\\usepackage[a4paper,margin=1in]{geometry}
\\date{3 March 2026}`}</GuidePre>

      <GuideP>
        Related templates: <GuideLink href="/templates/statement-of-purpose">statement of purpose</GuideLink>,{" "}
        <GuideLink href="/templates/cover-letter">cover letter</GuideLink> and{" "}
        <GuideLink href="/templates/research-statement">research statement</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Motivation letter FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
