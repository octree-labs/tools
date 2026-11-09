import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";
import { LocalizedToolSeoContent } from "@/lib/tool-seo";

const steps = [
  {
    title: "Describe the source",
    body: "Paste the title, authors, year and venue of a book, article or conference paper, in any order or as a free-text reference. A DOI or URL can go in too, but add the details you have, because the generator does not fetch them.",
  },
  {
    title: "Generate the BibTeX entry",
    body: (
      <>
        Click Generate BibTeX. The AI picks the entry type (<Cmd>@article</Cmd>,{" "}
        <Cmd>@book</Cmd>, <Cmd>@inproceedings</Cmd> and so on), writes a citation key such as{" "}
        <Cmd>goodfellow2016deep</Cmd> and fills in the fields it can identify.
      </>
    ),
  },
  {
    title: "Check it and save it",
    body: (
      <>
        Compare the fields with the publisher page, then copy the entry or click Export as .bib
        to download <Cmd>references.bib</Cmd>. The Preview tab opens a natbib test document in
        Octree that cites every key.
      </>
    ),
  },
];

const tips = [
  {
    title: "Citation undefined",
    body: (
      <>
        The key in <Cmd>\cite{"{...}"}</Cmd> must match the key after <Cmd>@article{"{"}</Cmd>{" "}
        exactly, and the document needs <Cmd>\bibliography{"{references}"}</Cmd> with a style
        such as <Cmd>\bibliographystyle{"{plain}"}</Cmd>. Run BibTeX, then LaTeX twice.
      </>
    ),
  },
  {
    title: "Names in the wrong order",
    body: (
      <>
        Separate authors with <Cmd>and</Cmd>, not commas: <Cmd>author = {"{Smith, John and Doe, Jane}"}</Cmd>.
        A comma inside one name marks Last, First.
      </>
    ),
  },
  {
    title: "Capital letters disappear",
    body: (
      <>
        Many styles lowercase titles. Wrap acronyms and proper nouns in braces, for example{" "}
        <Cmd>{"{BERT}"}</Cmd> or <Cmd>{"{Bayesian}"}</Cmd>, to keep their capitals.
      </>
    ),
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I generate a BibTeX citation?",
    answer:
      "Paste the details of the source (title, authors, year, journal or publisher) into the box and click Generate BibTeX. The tool returns a complete BibTeX entry with an entry type, a citation key and the matching fields, which you can copy or download as references.bib.",
  },
  {
    question: "Can it make a BibTeX entry from a DOI or URL?",
    answer:
      "You can paste a DOI or URL, but the generator does not look it up in Crossref or on the web: an AI model writes the entry from the text you give it. For a well-known paper it often fills the fields correctly, but it can get them wrong, so check every field, or paste the title, authors and venue along with the DOI.",
  },
  {
    question: "Does it format APA, MLA or IEEE citations?",
    answer:
      "It outputs BibTeX only. The citation style is chosen in your LaTeX document, for example \\bibliographystyle{IEEEtran} or \\bibliographystyle{apalike}, or with biblatex and style=apa, so the same .bib entry can be printed in any style.",
  },
  {
    question: "Is the BibTeX generator free?",
    answer:
      "Yes. It is free and needs no account. Nothing is saved on this page, so copy the entry or export the .bib file before you leave.",
  },
];

export default function CitationGeneratorSeoContent({ locale }: { locale?: string }) {
  return (
    <LocalizedToolSeoContent
      slug="citation-generator"
      locale={locale}
      heading="Citation Generator (BibTeX)"
      intro={
        <>
          <p>
            This BibTeX citation generator turns the details of a book, journal article,
            conference paper or web page into a BibTeX entry you can paste into a .bib file and
            cite from LaTeX. Paste structured fields or a free-text reference, and the generator
            writes an entry with an entry type, a citation key and the fields it can identify: author, title, year, journal or booktitle,
            volume, pages, publisher and DOI.
          </p>
          <p>
            An AI model (OpenAI gpt-4o-mini) writes the entries from the text you paste. It does
            not query Crossref, PubMed or a library catalogue, so a bare DOI or URL is not
            enough for a reliable result: include the title and authors and check the output
            against the source. The tool is free, needs no account, and exports a
            references.bib file that works with BibTeX, natbib and biblatex.
          </p>
        </>
      }
      stepsHeading="How to generate a BibTeX citation"
      steps={steps}
      tipsHeading="Common BibTeX errors and how to fix them"
      tips={tips}
      faqHeading="BibTeX citation generator FAQ"
      faq={faq}
      related={
        <>
          See worked examples in the{" "}
          <IntroLink href="https://www.useoctree.com/learn/bibliography-examples" external>
            LaTeX bibliography guide
          </IntroLink>
          , start a paper from the <IntroLink href="/templates">LaTeX templates</IntroLink>, or
          compile your document in the{" "}
          <IntroLink href="/tools/latex-preview">online LaTeX editor</IntroLink>.
        </>
      }
    />
  );
}
