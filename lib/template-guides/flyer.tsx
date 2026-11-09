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
    question: "How do I add a photo or logo?",
    answer:
      "graphicx is loaded, so \\includegraphics[width=\\textwidth,height=4cm,keepaspectratio]{photo} works anywhere in the page. The sample text already fills most of a letter page, so make room first: shorten the description or the What to Expect list and reduce the \\vspace{1cm} gaps, then check that the PDF is still one page.",
  },
  {
    question: "Why use LaTeX for a flyer instead of a design tool?",
    answer:
      "It is useful when you produce many similar flyers (a seminar series, recurring events, several languages): the layout is fixed in one file and only the text changes, the output is a vector PDF that prints sharply at any size, and you can keep it under version control alongside the rest of your documents.",
  },
  {
    question: "How do I keep the flyer on one page?",
    answer:
      "The sample just fits a letter page. If your text runs over, reduce the \\vspace{1cm} gaps between blocks first, then shorten the description or the What to Expect list. Pages break silently in LaTeX, so look at the page count after every big edit.",
  },
  {
    question: "Does this flyer template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, graphicx, xcolor and tikz, all in TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX.",
  },
];

export default function FlyerGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A flyer template in LaTeX</GuideH2>
      <GuideP>
        This flyer template in LaTeX is a one-page promotional poster for an event,
        workshop, open day or product launch. It uses the standard{" "}
        <GuideCode>article</GuideCode> class with 0.5 inch margins, no page number,
        and two colours defined once in the preamble:{" "}
        <GuideCode>primarycolor</GuideCode>, a bright blue (RGB 33, 150, 243), and{" "}
        <GuideCode>accentcolor</GuideCode>, an amber (RGB 255, 193, 7) used as a pale
        tint for the details box.
      </GuideP>
      <GuideP>
        The page reads top to bottom like a typical event flyer. A full-width blue
        banner carries the EVENT TITLE and a tagline in white. Below it, a coloured
        headline and a short paragraph sell the event, then a tinted Event Details
        box lists date, time, location over three lines and admission in a two-column
        table. A What to Expect list follows with five bold-labelled highlights
        (activities, speakers, networking, refreshments, prizes), and a second blue
        banner closes with a REGISTER NOW call to action and website, email and
        phone, with a small note about limited spaces underneath. Every block is a{" "}
        <GuideCode>\colorbox</GuideCode> around a <GuideCode>minipage</GuideCode>{" "}
        sized from <GuideCode>\textwidth</GuideCode>, so the layout survives text
        edits, and <GuideCode>graphicx</GuideCode> and <GuideCode>tikz</GuideCode>{" "}
        are loaded for adding a photo, logo or drawn shapes. Use it for society
        events, seminars, community notices or a recurring series. For a folded handout with more
        text, see the{" "}
        <GuideLink href="/templates/leaflet">leaflet template</GuideLink>.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>One page, 0.5 inch margins, no page number</li>
        <li>Header and call-to-action banners in the primary colour</li>
        <li>An event details box with date, time, location and admission</li>
        <li>A What to Expect list with bold labels</li>
        <li>
          <GuideCode>primarycolor</GuideCode> and <GuideCode>accentcolor</GuideCode>{" "}
          for one-line rebranding
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>flyer.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX.</li>
        <li>Replace the title, tagline, headline and description.</li>
        <li>Fill in the Event Details table and the What to Expect items.</li>
        <li>
          Update the registration details in the bottom banner and check the PDF is
          still one page.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Rebrand with two lines.</strong> Every coloured element uses the two
        named colours, so changing them restyles the whole flyer:
      </GuideP>
      <GuidePre>{`\\definecolor{primarycolor}{HTML}{7B2CBF}   % purple
\\definecolor{accentcolor}{HTML}{F72585}    % pink`}</GuidePre>
      <GuideP>
        <strong>Print on A4.</strong> The template uses the article default, US
        letter. Add the paper size to the geometry line; the boxes are sized from{" "}
        <GuideCode>\textwidth</GuideCode>, and the sample still fits on one A4 page:
      </GuideP>
      <GuidePre>{`\\usepackage[a4paper,margin=0.5in]{geometry}`}</GuidePre>
      <GuideP>
        <strong>Add a QR code for registration.</strong> The{" "}
        <GuideCode>qrcode</GuideCode> package draws scannable codes without an image
        file. Add <GuideCode>{"\\usepackage{qrcode}"}</GuideCode> to the preamble and
        put the code in the call-to-action banner. It adds height, so reduce the{" "}
        <GuideCode>{"\\vspace{1cm}"}</GuideCode> gaps between blocks to{" "}
        <GuideCode>0.4cm</GuideCode> to keep the flyer on one page:
      </GuideP>
      <GuidePre>{`{\\Large \\textcolor{white}{Visit: www.eventwebsite.com}}\\\\[0.3cm]
\\colorbox{white}{\\qrcode[height=2.5cm]{https://www.eventwebsite.com}}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/leaflet">leaflet</GuideLink>,{" "}
        <GuideLink href="/templates/newsletter">newsletter</GuideLink> and{" "}
        <GuideLink href="/templates/poster">poster</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Flyer template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
