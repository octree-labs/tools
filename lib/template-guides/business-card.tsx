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
    question: "What size is this business card template?",
    answer:
      "3.5 by 2 inches, the standard US business card, set with geometry's paperwidth and paperheight and zero margins. Every page of the PDF is one card, so you can send it straight to a print shop that accepts one card per page.",
  },
  {
    question: "Why does the preamble set \\fboxsep to 0pt?",
    answer:
      "The front design is a \\colorbox around a minipage exactly as tall as the card. By default \\colorbox adds \\fboxsep padding on every side, which would make the box taller than the page and leave a blank first page. With \\fboxsep, \\parindent and \\topskip set to 0pt the PDF has exactly three pages: front, back and the alternative single-sided design. Keep those lines if you change the card size.",
  },
  {
    question: "How do I make a European-size business card?",
    answer:
      "Change the geometry line to paperwidth=85mm, paperheight=55mm, then replace 3.5in with 85mm and 2in with 55mm in the minipage sizes, and shrink the inner logo box to match. The text sizes may need to come down a step on the smaller card.",
  },
  {
    question: "Does this business card template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, xcolor and graphicx, all part of TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX.",
  },
];

export default function BusinessCardGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A business card template in LaTeX</GuideH2>
      <GuideP>
        This business card template in LaTeX produces print-ready cards at the US
        standard size of 3.5 by 2 inches. Instead of placing cards on a sheet, it
        sets the page itself to the card size with{" "}
        <GuideCode>geometry</GuideCode> (<GuideCode>paperwidth=3.5in</GuideCode>,{" "}
        <GuideCode>paperheight=2in</GuideCode>, zero margins), so each page of the PDF
        is exactly one card and nothing needs trimming or imposition before you send
        it to a printer or an online print service.
      </GuideP>
      <GuideP>
        The file contains three designs. The front is a full-bleed block in the
        template&apos;s blue (<GuideCode>cardcolor</GuideCode>, RGB 41, 128, 185)
        with your name in large bold white type and a professional title underneath.
        The back is white, with a Contact Information heading, a two-column table of
        phone, email, website and LinkedIn, and a company name and address. The third
        page is an alternative single-sided card that puts name, title and all
        contact details on the left and a coloured LOGO placeholder on the right.
        Everything is built from <GuideCode>minipage</GuideCode>,{" "}
        <GuideCode>\colorbox</GuideCode> and a <GuideCode>tabular</GuideCode>, using
        only <GuideCode>xcolor</GuideCode> and <GuideCode>graphicx</GuideCode>, so
        the layout is easy to follow and to change. Keeping cards in LaTeX is handy
        when you already set your CV or letterhead in LaTeX and want the same fonts
        and colours.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>3.5 × 2 inch pages with zero margins and no page numbers</li>
        <li>A coloured front with name and title</li>
        <li>A back with a contact table and address</li>
        <li>An alternative single-sided design with a logo area</li>
        <li>
          One colour defined as <GuideCode>cardcolor</GuideCode> for the whole set
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>card.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX.</li>
        <li>
          Replace YOUR NAME, Professional Title, the contact rows and the address on
          each page you keep.
        </li>
        <li>
          Delete the pages you do not need: keep pages one and two for a double-sided
          card, or only the last page for a single-sided one.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Change the colour.</strong> Every coloured element uses{" "}
        <GuideCode>cardcolor</GuideCode>, so one line rebrands the set. xcolor accepts
        RGB, HTML hex or a named mix:
      </GuideP>
      <GuidePre>{`\\definecolor{cardcolor}{HTML}{1B4332}   % dark green
% or \\colorlet{cardcolor}{teal!80!black}`}</GuidePre>
      <GuideP>
        <strong>Put your logo in the placeholder.</strong> On the single-sided card,
        replace the text inside the inner minipage with an image. graphicx is loaded;
        keep the width under the 1 inch box:
      </GuideP>
      <GuidePre>{`\\begin{minipage}[c][1.5in][c]{1in}
\\centering
\\includegraphics[width=0.9in]{logo}
\\end{minipage}`}</GuidePre>
      <GuideP>
        <strong>Make the links clickable in the PDF.</strong> For a card you also
        share digitally, load <GuideCode>hyperref</GuideCode> and wrap the email and
        website in the contact table:
      </GuideP>
      <GuidePre>{`\\usepackage[hidelinks]{hyperref}   % in the preamble

\\textbf{Email:} & \\href{mailto:your.name@email.com}{your.name@email.com} \\\\
\\textbf{Website:} & \\href{https://www.yourwebsite.com}{www.yourwebsite.com} \\\\`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/flyer">flyer</GuideLink>,{" "}
        <GuideLink href="/templates/letter">letter</GuideLink> and{" "}
        <GuideLink href="/templates/certificate">certificate</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Business card template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
