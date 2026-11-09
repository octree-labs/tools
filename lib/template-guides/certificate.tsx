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
    question: "Can I change it to a certificate of completion or participation?",
    answer:
      "Yes. The heading is plain text inside \\textsc{Certificate of Achievement}; change it to Certificate of Completion, Participation or Appreciation, and adjust the lines 'has successfully completed' and 'with distinction' to match. Delete the 'with distinction' line entirely if it does not apply.",
  },
  {
    question: "What paper size does the certificate use?",
    answer:
      "Landscape US letter: the template sets the landscape class option but no paper size, and US letter is the article class default. For A4, change the geometry line to \\usepackage[a4paper,landscape,margin=0.5in]{geometry}.",
  },
  {
    question: "How do I make certificates for a whole class or event?",
    answer:
      "Wrap the certificate body in a command that takes the recipient name as an argument, then call it once per person; each call ends with \\newpage, so you get one certificate per page in a single PDF ready to print.",
  },
  {
    question: "Does this certificate template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, graphicx and xcolor, all part of TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX.",
  },
];

export default function CertificateGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A certificate template in LaTeX</GuideH2>
      <GuideP>
        This certificate template in LaTeX produces a formal landscape award
        certificate on a single page, ready to print or send as a PDF. It uses the
        standard <GuideCode>article</GuideCode> class with the{" "}
        <GuideCode>landscape</GuideCode> option, 0.5 inch margins and no page
        number, and two colours defined in the preamble:{" "}
        <GuideCode>certgold</GuideCode> (a goldenrod) and{" "}
        <GuideCode>certblue</GuideCode> (a dark navy).
      </GuideP>
      <GuideP>
        The design is centred and symmetrical. A thick gold rule over a thin navy
        rule frames the top of the page, mirrored at the bottom. Between them come
        the heading Certificate of Achievement in large small capitals, a short gold
        rule, &quot;This is to certify that&quot;, the recipient&apos;s name in large
        bold type, &quot;has successfully completed&quot;, the course or programme
        name, an optional &quot;with distinction&quot; line and the award date. Two
        signature lines sit side by side for an instructor and a director, each with
        a name and title, and a small italic footer carries the organisation name,
        website and date. Every element is plain text, a rule or a minipage, so
        wording, spacing and colours are easy to change. Use it for course completion, training, workshop attendance,
        awards, employee recognition or competition results; and because the
        recipient and course are just two lines of text, the same file can generate a
        certificate for every participant, as shown below.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Landscape page with 0.5 inch margins and no page number</li>
        <li>Gold and navy decorative rules at top and bottom</li>
        <li>Heading, recipient, achievement and date lines</li>
        <li>Two signature blocks with names and titles</li>
        <li>An organisation footer line</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>certificate.tex</GuideCode>
          .
        </li>
        <li>Compile with pdfLaTeX.</li>
        <li>
          Replace <GuideCode>[Recipient Name]</GuideCode>,{" "}
          <GuideCode>[Course/Program Name]</GuideCode> and{" "}
          <GuideCode>[Date]</GuideCode>.
        </li>
        <li>Fill in the two signatories and the organisation footer.</li>
        <li>Print on heavy paper, or sign digitally on the PDF.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Draw a border around the whole page.</strong> TikZ can draw a double
        frame relative to the page edges. Add <GuideCode>{"\\usepackage{tikz}"}</GuideCode>{" "}
        to the preamble and put this right after{" "}
        <GuideCode>{"\\begin{document}"}</GuideCode> (it needs two compiler runs):
      </GuideP>
      <GuidePre>{`\\begin{tikzpicture}[remember picture, overlay]
  \\draw[certgold, line width=4pt]
    ([shift={(0.3in,-0.3in)}]current page.north west)
    rectangle ([shift={(-0.3in,0.3in)}]current page.south east);
  \\draw[certblue, line width=1pt]
    ([shift={(0.42in,-0.42in)}]current page.north west)
    rectangle ([shift={(-0.42in,0.42in)}]current page.south east);
\\end{tikzpicture}`}</GuidePre>
      <GuideP>
        <strong>Add a logo or seal.</strong> graphicx is loaded; put the image above
        the heading and size it by height. To keep everything on one page, also
        reduce the <GuideCode>{"\\vspace*{1.5cm}"}</GuideCode> at the top of the
        document to <GuideCode>0.3cm</GuideCode>:
      </GuideP>
      <GuidePre>{`\\includegraphics[height=2cm]{logo}

\\vspace{0.5cm}

{\\Huge \\textsc{Certificate of Achievement}}`}</GuidePre>
      <GuideP>
        <strong>Print one certificate per name.</strong> Move the body into a command
        with the name as its argument, then call it for each recipient:
      </GuideP>
      <GuidePre>{`\\newcommand{\\cert}[1]{%
  \\begin{center}
  {\\Huge \\textsc{Certificate of Achievement}}\\par\\vspace{1cm}
  {\\Large \\textit{This is to certify that}}\\par\\vspace{0.5cm}
  {\\Huge \\textbf{#1}}\\par\\vspace{0.5cm}
  {\\Large \\textit{has successfully completed}}\\par\\vspace{0.5cm}
  {\\LARGE \\textbf{Introduction to Data Science}}
  \\end{center}
  \\newpage}

\\cert{Ada Lovelace}
\\cert{Alan Turing}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/letter-of-recommendation">letter of recommendation</GuideLink>,{" "}
        <GuideLink href="/templates/flyer">flyer</GuideLink> and{" "}
        <GuideLink href="/templates/business-card">business card</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Certificate template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
