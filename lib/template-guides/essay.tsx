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
    question: "Is this essay template APA or MLA?",
    answer:
      "Neither exactly. It is a general academic essay with author-year citations through natbib and the apalike BibTeX style, which is close to APA in the reference list but does not follow every APA or MLA rule (title page, running head, headers). If your course requires a specific style, use the APA student paper or MLA paper template instead.",
  },
  {
    question: "How do I cite a page number?",
    answer:
      "natbib takes the page as an optional argument: \\citet[p.~45]{smith2020} prints Smith (2020, p. 45) and \\citep[p.~45]{smith2020} prints (Smith, 2020, p. 45). This replaces the manual (p. XX) placeholders in the template.",
  },
  {
    question: "How do I make it single-spaced or 1.5-spaced?",
    answer:
      "The template uses \\doublespacing from setspace. Replace it with \\onehalfspacing or \\singlespacing in the preamble, or remove the line for LaTeX's default spacing.",
  },
  {
    question: "Does this essay template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, setspace and natbib, all in TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX. Add a references.bib file with the keys you cite.",
  },
];

export default function EssayGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An academic essay template in LaTeX</GuideH2>
      <GuideP>
        This academic essay template in LaTeX is set up the way most university
        essays are submitted: 12 pt type, 1 inch margins and double spacing, with a
        title block giving the student, course and professor and an author-year
        reference list at the end. It uses the standard <GuideCode>article</GuideCode>{" "}
        class, <GuideCode>setspace</GuideCode> for the double spacing, and{" "}
        <GuideCode>natbib</GuideCode> with the <GuideCode>apalike</GuideCode> BibTeX
        style for citations.
      </GuideP>
      <GuideP>
        The body is a model argumentative essay structure with fill-in prompts. The
        Introduction frames a debate (some scholars argue position A, others position
        B) and ends with a thesis statement and a sentence on why the topic matters.
        First Main Point and Second Main Point develop the argument with quotations
        and evidence cited through <GuideCode>\citet</GuideCode>; a Counterarguments
        section states the opposing view with <GuideCode>\citep</GuideCode> and
        rebuts it; and the Conclusion restates the thesis and ends on a final
        thought. Headings are unnumbered (<GuideCode>\section*</GuideCode>), which
        suits essays better than numbered report sections, and you can delete them
        entirely for a continuous essay. Because the reference list is generated
        from a <GuideCode>.bib</GuideCode> file, only works you actually cite appear,
        sorted and formatted for you. Use it for argumentative, analytical or
        persuasive essays and for a classic five-paragraph essay; for a strict style
        guide, start from the{" "}
        <GuideLink href="/templates/apa-student-paper">APA student paper</GuideLink>{" "}
        or <GuideLink href="/templates/mla-paper">MLA paper</GuideLink> template.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>12 pt article with 1 inch margins and double spacing</li>
        <li>Title block with student, course and professor</li>
        <li>Introduction with thesis prompt, two main points, counterarguments, conclusion</li>
        <li>
          <GuideCode>natbib</GuideCode> citations and an{" "}
          <GuideCode>apalike</GuideCode> reference list
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>essay.tex</GuideCode>.
        </li>
        <li>
          Create <GuideCode>references.bib</GuideCode> with an entry for every source;
          the template cites the keys <GuideCode>author</GuideCode>,{" "}
          <GuideCode>author2</GuideCode> and <GuideCode>citationcounter</GuideCode>,
          so rename those to your keys.
        </li>
        <li>
          Compile with pdfLaTeX and BibTeX (<GuideCode>latexmk -pdf essay.tex</GuideCode>
          ).
        </li>
        <li>
          Fill in the title block and replace each bracketed prompt, starting with
          the thesis statement.
        </li>
        <li>Replace the <GuideCode>(p. XX)</GuideCode> placeholders with page citations.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Cite pages with natbib.</strong> Put the page in the optional argument
        instead of typing it after the citation:
      </GuideP>
      <GuidePre>{`As \\citet[p.~112]{smith2020} argues, "..."
This view has been challenged \\citep[see][pp.~4--7]{jones2019}.`}</GuidePre>
      <GuideP>
        <strong>Single-space long quotations.</strong> Many style guides want block
        quotes single spaced inside a double-spaced essay. setspace provides an
        environment for that:
      </GuideP>
      <GuidePre>{`\\begin{quote}
\\begin{singlespace}
A quotation of more than about forty words goes here, indented
from both margins and single spaced. \\citep[p.~23]{smith2020}
\\end{singlespace}
\\end{quote}`}</GuidePre>
      <GuideP>
        <strong>Add a word count and drop the date.</strong> Many essay briefs ask for
        a word count on the front. Put it in the date slot of the title block:
      </GuideP>
      <GuidePre>{`\\date{Word count: 2{,}480}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/mla-paper">MLA paper</GuideLink>,{" "}
        <GuideLink href="/templates/apa-student-paper">APA student paper</GuideLink> and{" "}
        <GuideLink href="/templates/literature-review">literature review</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Essay template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
