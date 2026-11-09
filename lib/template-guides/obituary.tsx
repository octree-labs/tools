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
    question: "What should an obituary include?",
    answer:
      "Usually the full name, dates of birth and death, a short life story (where they were born, education, work, marriage, interests), the family members who survive them, details of the funeral or memorial service, and any request such as donations in lieu of flowers. This template has a place for each of these, in that order.",
  },
  {
    question: "How do I add a photo to the obituary?",
    answer:
      "The template draws an empty circle with a [Photo] label as a placeholder. Upload the photo next to the .tex file and replace that tikzpicture with one that clips the image to the circle; the guide above shows the exact code. graphicx and tikz are already loaded.",
  },
  {
    question: "What paper size is the obituary template?",
    answer:
      "A5 (148 x 210 mm) with 0.75-inch margins, a common size for memorial cards and service programmes. To print on A4 or letter paper, change a5paper in the geometry options; the border is drawn relative to the page edges, so it adjusts automatically.",
  },
  {
    question: "Does the obituary template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, graphicx, xcolor, tikz, parskip and the tgtermes font, all part of TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or a local install. Compile twice so the decorative border lands in the right place.",
  },
];

export default function ObituaryGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An obituary template in LaTeX</GuideH2>
      <GuideP>
        This obituary LaTeX template creates a dignified memorial page that can be
        printed as a card, added to a memorial service programme, or shared as a PDF. The page is A5 with a double-line
        border drawn around the edge, and the content is centred and calm: a small cross
        symbol, &quot;In Loving Memory&quot; in small capitals, a circular frame for a
        photograph, the person&apos;s name in large bold type, their dates of birth and
        death, and a thin accent-coloured rule.
      </GuideP>
      <GuideP>
        Below the header, the sample text shows the usual parts of an obituary: a
        short biography covering birthplace, education, career, marriage and
        interests; a &quot;Survived by&quot; list of family; the time and place of the
        memorial service; a line asking for donations in lieu of flowers; and a closing
        quotation in italics. The typeface is TeX Gyre Termes (a Times-style serif)
        from <GuideCode>tgtermes</GuideCode>, the border and photo frame are drawn with{" "}
        <GuideCode>tikz</GuideCode>, and two colours, a dark grey border and a warm
        brown accent, are defined with <GuideCode>xcolor</GuideCode>.{" "}
        <GuideCode>parskip</GuideCode> separates paragraphs with space instead of
        indentation. The document is plain <GuideCode>article</GuideCode> with standard
        packages, so it compiles as an obituary template for Overleaf, in Octree or on
        any TeX Live install. Replace the sample text, add a photo, and adapt the
        wording to the family&apos;s customs.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>A5 page with a double-rule decorative border</li>
        <li>&quot;In Loving Memory&quot; heading, circular photo frame, name and dates</li>
        <li>Biography paragraphs, survivors list and service details</li>
        <li>Donation note and closing quotation</li>
        <li>Two named colours: <GuideCode>border</GuideCode> and <GuideCode>accent</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>obituary.tex</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX, twice: the border uses TikZ{" "}
          <GuideCode>remember picture</GuideCode>, which needs a second pass to position.
        </li>
        <li>
          Edit the name, the dates line, the biography paragraphs, the survivors and the
          service details.
        </li>
        <li>
          Remove the <GuideCode>$\dagger$</GuideCode> line if a cross is not appropriate.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Insert the photo in the circle.</strong> Replace the placeholder{" "}
        <GuideCode>tikzpicture</GuideCode> with one that clips the image to the same
        1.2-inch circle and redraws the frame:
      </GuideP>
      <GuidePre>{`\\begin{tikzpicture}
  \\begin{scope}
    \\clip (0,0) circle (1.2in);
    \\node at (0,0) {\\includegraphics[width=2.4in]{photo}};
  \\end{scope}
  \\draw[accent, line width=1pt] (0,0) circle (1.2in);
\\end{tikzpicture}`}</GuidePre>
      <GuideP>
        <strong>Quotation marks.</strong> The closing quotation is wrapped in{" "}
        <GuideCode>\textquotedblleft</GuideCode> and{" "}
        <GuideCode>\textquotedblright</GuideCode>. If you type your own quote, open it
        with two backticks and close it with two apostrophes:{" "}
        <GuideCode>``To live in hearts we leave behind is not to die.&apos;&apos;</GuideCode>
      </GuideP>
      <GuideP>
        <strong>Change the tone.</strong> Adjust the{" "}
        <GuideCode>accent</GuideCode> colour (for example{" "}
        <GuideCode>{"\\definecolor{accent}{RGB}{40,60,100}"}</GuideCode> for navy), or
        the border widths in the two <GuideCode>\draw</GuideCode> commands. The border
        is only drawn on the first page, so keep the text to one page or shorten the
        biography.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/certificate">certificate</GuideLink>,{" "}
        <GuideLink href="/templates/leaflet">leaflet</GuideLink> and{" "}
        <GuideLink href="/templates/letter">formal letter</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Obituary template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
