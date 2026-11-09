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
    question: "How do I write a formal letter in LaTeX?",
    answer:
      "Use the standard letter class, as this template does. Put your name in \\signature and your address in \\address in the preamble, then write each letter inside \\begin{letter}{recipient address} ... \\end{letter}, starting with \\opening{Dear ...,} and ending with \\closing{Sincerely,}. LaTeX places the addresses, date and signature for you.",
  },
  {
    question: "How do I change the date on the letter?",
    answer:
      "The letter class prints today's date under your address automatically. To fix a specific date, add \\date{3 March 2026} in the preamble before \\begin{document}.",
  },
  {
    question: "Can I add cc, enclosures or a postscript?",
    answer:
      "Yes. After \\closing, add \\cc{Name} for copies, \\encl{Document name} for enclosures and \\ps{P.S. text} for a postscript. These commands are part of the standard letter class, so no extra package is needed.",
  },
  {
    question: "Does this letter template work in Overleaf?",
    answer:
      "Yes. It uses only the letter class and the geometry package, both part of every TeX distribution, so it compiles with pdfLaTeX in Overleaf, Octree or a local install.",
  },
];

export default function LetterGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A formal letter template in LaTeX</GuideH2>
      <GuideP>
        This formal letter LaTeX template is the shortest route to a correctly laid-out
        business letter: your address and the date at the top right, the recipient&apos;s
        address on the left, a salutation, three body paragraphs, a closing and your name
        under space for a handwritten signature. Use it for complaints, requests,
        resignations, notices to a landlord or any other formal correspondence.
      </GuideP>
      <GuideP>
        It is built on LaTeX&apos;s standard <GuideCode>letter</GuideCode> class at 11 pt
        with one-inch margins from <GuideCode>geometry</GuideCode>, and loads nothing
        else, so it compiles as a letter template for Overleaf, Octree, or any TeX Live
        or MiKTeX install. The class does the layout for you: you fill in{" "}
        <GuideCode>\address</GuideCode> and <GuideCode>\signature</GuideCode> once in the
        preamble, then write the letter between{" "}
        <GuideCode>{"\\begin{letter}{...}"}</GuideCode> and{" "}
        <GuideCode>{"\\end{letter}"}</GuideCode>, with the recipient&apos;s address as
        the argument. <GuideCode>\opening</GuideCode> sets the salutation and{" "}
        <GuideCode>\closing</GuideCode> the sign-off, and the date is filled in
        automatically. The sample body paragraphs describe what each one should contain
        (purpose, supporting details, next steps), so you can write straight over them.
        Because the sender details live in the preamble, you can also put several{" "}
        <GuideCode>letter</GuideCode> environments in one file to send the same letter
        to different recipients.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Sender address block and automatic date, aligned right</li>
        <li>Recipient address block on the left</li>
        <li>Salutation, three guided body paragraphs and a closing</li>
        <li>Signature block printed from <GuideCode>\signature</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>letter.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>
          Edit <GuideCode>\signature</GuideCode> and <GuideCode>\address</GuideCode> in the
          preamble. Separate address lines with <GuideCode>\\</GuideCode>.
        </li>
        <li>
          Replace the recipient address in <GuideCode>{"\\begin{letter}{...}"}</GuideCode>,
          the salutation in <GuideCode>\opening</GuideCode> and the body text.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Fix the date and paper size.</strong> By default the class prints the
        compile date. For a dated letter or A4 paper:
      </GuideP>
      <GuidePre>{`\\usepackage[a4paper,margin=1in]{geometry}
\\date{3 March 2026}`}</GuidePre>
      <GuideP>
        <strong>Add copies, enclosures and a P.S.</strong> These go after{" "}
        <GuideCode>\closing</GuideCode>, inside the <GuideCode>letter</GuideCode>{" "}
        environment:
      </GuideP>
      <GuidePre>{`\\closing{Sincerely,}
\\cc{Jane Smith, Human Resources}
\\encl{Copy of invoice 1042}
\\ps{P.S. I am available by phone on weekdays.}`}</GuidePre>
      <GuideP>
        <strong>Sign with an image.</strong> Load <GuideCode>graphicx</GuideCode> and put
        the image in the signature, above your typed name:{" "}
        <GuideCode>{"\\signature{\\includegraphics[width=4cm]{signature}\\\\ Your Name}"}</GuideCode>.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/cover-letter">cover letter</GuideLink>,{" "}
        <GuideLink href="/templates/motivation-letter">motivation letter</GuideLink> and{" "}
        <GuideLink href="/templates/letter-of-recommendation">letter of recommendation</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Formal letter template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
