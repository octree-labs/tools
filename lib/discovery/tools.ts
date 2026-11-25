/**
 * Every tool route under /tools, in sitemap order, with the copy used by
 * /llms.txt (summary) and /llms-full.txt (details). app/sitemap.ts reads the
 * slugs from here, so a new tool needs an entry here to be listed anywhere.
 */
export interface ToolSummary {
  slug: string
  title: string
  /** One line for /llms.txt. */
  summary: string
  /** Two or three sentences for /llms-full.txt: what it does and its limits. */
  details: string
}

export const TOOL_SUMMARIES: ToolSummary[] = [
  {
    slug: "ai-latex-generator",
    title: "AI LaTeX Generator",
    summary: "Generate a LaTeX document from a plain-language description.",
    details:
      "Generate a LaTeX document from a plain-language description. Describe an article, report, presentation or table. Review and compile the generated source before using it.",
  },
  {
    slug: "citation-generator",
    title: "Citation Generator",
    summary: "Turn reference details into BibTeX entries.",
    details:
      "Turn reference details into BibTeX entries. Paste structured fields or a reference. Check authors, publication details and identifiers against the original source before citing.",
  },
  {
    slug: "equation-to-latex",
    title: "Equation to LaTeX",
    summary: "Convert typed descriptions or equation images into LaTeX.",
    details:
      "Convert typed descriptions or equation images into LaTeX. Type an equation in plain language, paste notation or upload a picture. Check the rendered preview against the original formula.",
  },
  {
    slug: "html-to-latex",
    title: "HTML to LaTeX",
    summary: "Convert HTML markup into a LaTeX document.",
    details:
      "Convert HTML markup into a LaTeX document. Paste headings, lists, tables, formatting and links. Review the resulting LaTeX and PDF; this is not a browser screenshot converter.",
  },
  {
    slug: "image-to-tikz",
    title: "Image to TikZ",
    summary: "Recreate diagram images as editable TikZ code.",
    details:
      "Recreate diagram images as editable TikZ code. Upload a flowchart, tree, graph or sketch. AI reconstructs nodes, paths and labels; inspect geometry and labels before publication.",
  },
  {
    slug: "latex-preview",
    title: "LaTeX Preview",
    summary: "Edit LaTeX source and compile it to a PDF preview.",
    details:
      "Edit LaTeX source and compile it to a PDF preview. Use the online editor to test documents without installing TeX locally. Compilation runs on the Octree compile service.",
  },
  {
    slug: "latex-to-markdown",
    title: "LaTeX to Markdown",
    summary: "Convert LaTeX documents or snippets into Markdown.",
    details:
      "Convert LaTeX documents or snippets into Markdown. Headings, lists, tables and formatting become Markdown. Math remains LaTeX between dollar delimiters and needs a compatible math renderer.",
  },
  {
    slug: "latex-word-counter",
    title: "LaTeX Word Counter",
    summary: "Count words in LaTeX source with texcount.",
    details:
      "Count words in LaTeX source with texcount. Paste source to see separate body, heading and caption counts. Commands, comments, citation keys and math do not count as prose words.",
  },
  {
    slug: "markdown-to-latex",
    title: "Markdown to LaTeX",
    summary: "Convert Markdown text into a compilable LaTeX document.",
    details:
      "Convert Markdown text into a compilable LaTeX document. Paste headings, lists, tables, code blocks and links. Inline and display math remain LaTeX math; review the output before compiling.",
  },
  {
    slug: "math-to-latex",
    title: "Math to LaTeX",
    summary: "Transcribe handwritten or printed math images into LaTeX.",
    details:
      "Transcribe handwritten or printed math images into LaTeX. Upload a photo, scan or screenshot of an equation. Inspect fractions, symbols and subscripts against the original image.",
  },
  {
    slug: "mathml-to-latex",
    title: "MathML to LaTeX",
    summary: "Convert MathML markup into LaTeX math.",
    details:
      "Convert MathML markup into LaTeX math. Paste a MathML math element to translate fractions, roots, scripts and matrices into LaTeX notation.",
  },
  {
    slug: "mermaid-to-latex",
    title: "Mermaid to LaTeX",
    summary: "Convert Mermaid diagram definitions into TikZ.",
    details:
      "Convert Mermaid diagram definitions into TikZ. Paste Mermaid source to generate a LaTeX diagram. Review node placement, labels and arrows in the compiled preview.",
  },
  {
    slug: "pdf-to-latex",
    title: "PDF to LaTeX",
    summary: "Reconstruct editable LaTeX from PDF content.",
    details:
      "Reconstruct editable LaTeX from PDF content. A PDF does not contain its original LaTeX source. For arXiv papers, try the source downloader first; otherwise review the AI reconstruction for missing text, equations and layout differences.",
  },
  {
    slug: "pgfplots-generator",
    title: "PGFPlots Generator",
    summary: "Generate pgfplots chart code from a description.",
    details:
      "Generate pgfplots chart code from a description. Describe a function, data points or chart type, with labels and ranges. Verify the generated data and axes before using the figure.",
  },
  {
    slug: "table-to-latex",
    title: "Table to LaTeX",
    summary: "Convert CSV table data into a LaTeX table.",
    details:
      "Convert CSV table data into a LaTeX table. Export Excel or Google Sheets data as CSV first: this tool does not read .xlsx directly. Review headers, alignment and values in the generated table.",
  },
  {
    slug: "tikz-generator",
    title: "TikZ Generator",
    summary: "Generate TikZ diagrams from plain-language descriptions.",
    details:
      "Generate TikZ diagrams from plain-language descriptions. Describe the nodes, relationships and layout you need. The result is a LaTeX starting point to compile, inspect and refine.",
  },
  {
    slug: "arxiv-to-latex",
    title: "arXiv to LaTeX",
    summary: "Retrieve the source authors uploaded to arXiv.",
    details:
      "Retrieve the source authors uploaded to arXiv. Paste an arXiv ID or link to browse source files and download a ZIP. This retrieves available source rather than reconstructing it from the PDF.",
  },
  {
    slug: "latex-to-png",
    title: "LaTeX to PNG",
    summary: "Render LaTeX equations, diagrams or a document's first page as PNG.",
    details:
      "Render LaTeX equations, diagrams or a document's first page as PNG. The service compiles a PDF, then the browser rasterises its first page at the selected DPI. Choose a transparent or white background; this is not a multi-page image export.",
  },
  {
    slug: "latex-to-word",
    title: "LaTeX to Word",
    summary: "Convert LaTeX source to an editable Word .docx file.",
    details:
      "Convert LaTeX source to an editable Word .docx file. Headings, lists, tables and text formatting are retained. Equations become readable text rather than native Word equations; figures become captions. Input is limited to 60,000 characters.",
  },
  {
    slug: "latex-converter",
    title: "LaTeX Converter",
    summary: "Find the right converter for moving content into or out of LaTeX.",
    details:
      "Find the right converter for moving content into or out of LaTeX. This is a directory of conversion tools, not a single universal file converter. Choose a tool matching the input and output formats.",
  },
]

export const TOOL_SLUGS: string[] = TOOL_SUMMARIES.map((tool) => tool.slug)
