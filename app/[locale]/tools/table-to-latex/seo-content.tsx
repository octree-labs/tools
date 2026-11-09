import { ToolSeoContent } from "@/components/ToolSeoContent";
import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";

const steps = [
  {
    title: "Save your table as CSV",
    body: "In Excel choose File > Save As > CSV (Comma delimited); in Google Sheets choose File > Download > Comma-separated values. Keep the header row as the first line.",
  },
  {
    title: "Upload the .csv file",
    body: "Drop the file onto the upload area or click to choose it. The LaTeX table streams into the Code tab as a complete document.",
  },
  {
    title: "Preview and export",
    body: "Open the Preview tab to compile the table to PDF, then export the .tex file, the PDF or a JPG image, or open it in Octree to place the table in your paper.",
  },
];

const tips = [
  {
    title: "Special characters break the table",
    body: (
      <>
        <Cmd>&amp;</Cmd>, <Cmd>%</Cmd>, <Cmd>$</Cmd>, <Cmd>#</Cmd> and <Cmd>_</Cmd> in cells must be
        escaped as <Cmd>\&amp;</Cmd>, <Cmd>\%</Cmd>, <Cmd>\$</Cmd>, <Cmd>\#</Cmd> and <Cmd>\_</Cmd>.
        If the preview fails, the log names the row to fix.
      </>
    ),
  },
  {
    title: "Table runs off the page",
    body: (
      <>
        Wide tables overflow the text width. Use landscape pages, a smaller font such as{" "}
        <Cmd>\small</Cmd>, or wrap the tabular in <Cmd>\resizebox{"{\\textwidth}{!}{...}"}</Cmd>{" "}
        from graphicx.
      </>
    ),
  },
  {
    title: "Large spreadsheets get cut off",
    body: "Each conversion returns about 2,000 tokens of LaTeX, which fits a table of a few dozen rows. Split bigger sheets into several CSV files, or keep only the rows the paper needs.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I convert Excel to LaTeX?",
    answer:
      "Save the sheet as a CSV file in Excel (File > Save As > CSV), then upload the .csv here. The tool does not read .xlsx files directly, but a CSV export of the sheet carries the same cell values. You get a booktabs table inside a complete LaTeX document that you can preview, download and paste into your paper.",
  },
  {
    question: "Which file formats does the LaTeX table generator accept?",
    answer:
      "Only .csv files. Excel, Google Sheets, LibreOffice Calc and Numbers can all export a sheet as CSV. JSON, .xlsx and pasted tables are not accepted on this page.",
  },
  {
    question: "Does the output use booktabs?",
    answer:
      "Yes. The generated document loads booktabs, and the table normally uses its \\toprule, \\midrule and \\bottomrule rules. Copy the tabular or table environment into your own document and add \\usepackage{booktabs} to its preamble.",
  },
  {
    question: "Is the CSV to LaTeX converter free?",
    answer:
      "Yes, it is free and needs no account. The table is written by an AI model (OpenAI gpt-4o-mini), so check numbers and column alignment in the preview before you use it.",
  },
];

export default function TableToLatexSeoContent() {
  return (
    <ToolSeoContent
      heading="LaTeX Table Generator from CSV"
      intro={
        <>
          <p>
            This LaTeX table generator turns a CSV file into a typeset LaTeX table. Upload a
            .csv exported from Excel, Google Sheets or any spreadsheet and an AI model (OpenAI
            gpt-4o-mini) writes a complete LaTeX document around a <Cmd>tabular</Cmd>{" "}
            environment, loading booktabs for clean horizontal rules and setting the header row
            and column alignment. It is the quickest way to convert Excel to LaTeX: save the sheet as CSV first,
            since .xlsx files are not read directly.
          </p>
          <p>
            The Preview tab compiles the table with a full TeX Live distribution on the Octree
            compile service, so you see the result before you export the .tex file, a PDF or a
            JPG image. The file is read in your browser and sent as text, and each conversion returns
            about 2,000 tokens of LaTeX, which fits a results table of a few dozen rows. It is
            free and needs no account.
          </p>
        </>
      }
      stepsHeading="How to convert a CSV file to a LaTeX table"
      steps={steps}
      tipsHeading="Common table problems and how to fix them"
      tips={tips}
      faqHeading="LaTeX table generator FAQ"
      faq={faq}
      related={
        <>
          Learn tabular, multirow and column types in the{" "}
          <IntroLink href="https://www.useoctree.com/learn/tables" external>
            LaTeX tables guide
          </IntroLink>
          , plot the same data with the{" "}
          <IntroLink href="/tools/pgfplots-generator">PGFPlots generator</IntroLink>, or see all{" "}
          <IntroLink href="/tools/latex-converter">LaTeX converters</IntroLink>.
        </>
      }
    />
  );
}
