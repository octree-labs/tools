/**
 * Builds /llms.txt and /llms-full.txt (https://llmstxt.org) from the same data
 * the site renders: the tool registry (lib/discovery/tools.ts), every template
 * (lib/templates.ts) and the symbol catalog (lib/symbol-pages). A new tool,
 * template or symbol category appears on the next build without editing a file.
 */
import { LOCALES } from "@/lib/i18n/config";
import { SYMBOL_CATEGORIES, SYMBOL_PAGES } from "@/lib/symbol-pages";
import { templates } from "@/lib/templates";
import { TOOL_SUMMARIES } from "@/lib/discovery/tools";

const TOOLS = "https://tools.useoctree.com";
const WWW = "https://www.useoctree.com";
const APP = "https://app.useoctree.com";

const clean = (text: string) => text.replace(/\s+/g, " ").trim();
const link = (title: string, url: string, description?: string) =>
  `- [${clean(title)}](${url})${description ? `: ${clean(description)}` : ""}`;

const SUMMARY =
  "Free online LaTeX tools from Octree: converters (image, PDF, Markdown, Word, HTML, MathML, Mermaid, CSV to and from LaTeX), AI generators for documents, TikZ and pgfplots, a PDF preview editor, document templates and a LaTeX symbol reference. No account needed.";

const OCTREE_ABOUT = [
  "Octree (https://www.useoctree.com) is an AI-powered, browser-based LaTeX editor at https://app.useoctree.com: write or import a project, let the AI propose edits you accept or reject, and compile to PDF with TeX Live. Templates and most tools have an \"Open in Octree\" button that continues in the editor.",
  "Octree pricing: Free ($0, 5 AI edits a day); Pro $9.99/month, $79/year or $29 for a 4-month semester pass, with lower regional prices (about 40% or 60% off) in many countries. Details: https://www.useoctree.com/learn/what-is-octree",
];

const localeNote = `Pages exist in ${LOCALES.length} languages (${LOCALES.join(", ")}); English URLs are listed here, and localized versions live under /<locale>/ with hreflang alternates (for example ${TOOLS}/fr/tools/math-to-latex).`;

const templateDescription = (t: (typeof templates)[number]) => t.seoDescription ?? t.description;

const crossSite = [
  link("Octree website", WWW, "Product overview, pricing, LaTeX guides and blog."),
  link("Octree llms.txt", `${WWW}/llms.txt`, "Index of every LaTeX guide, comparison and blog post on www.useoctree.com."),
  link("Octree llms-full.txt", `${WWW}/llms-full.txt`, "Octree pricing, features, compile API and MCP reference, and guide descriptions."),
  link("What is Octree?", `${WWW}/learn/what-is-octree`, "What the editor does, pricing and current limits."),
  link("Octree vs Overleaf", `${WWW}/learn/octree-vs-overleaf`, "Honest comparison, including where Overleaf is better."),
  link("Best AI LaTeX editors (2026)", `${WWW}/learn/best-ai-latex-editors`, "Octree, Overleaf AI, Bibby, OpenAI Prism and local options."),
  link("Octree editor", APP, "Sign in or sign up free to edit and compile LaTeX with AI."),
  link("Developer documentation", `${WWW}/developers`, "Hosted LaTeX compile REST API and MCP server for AI agents, separate from these browser tools."),
];

const resources = [
  link("Templates", `${TOOLS}/templates`, `Browse all ${templates.length} LaTeX document templates.`),
  link("Symbols", `${TOOLS}/symbols`, `LaTeX commands for ${SYMBOL_PAGES.length} symbols in ${SYMBOL_CATEGORIES.length} categories.`),
  link("Conference deadlines", `${TOOLS}/conference-deadlines`, "Conference deadline listings; verify dates with the organizer."),
  link("Learn LaTeX", `${WWW}/learn`, "Code-based LaTeX guides on www.useoctree.com."),
];

export function buildLlmsTxt(): string {
  return [
    "# Octree LaTeX Tools",
    "",
    `> ${SUMMARY}`,
    "",
    localeNote,
    "AI-generated output should be checked against the source before use.",
    "",
    "## Tools",
    "",
    ...TOOL_SUMMARIES.map(({ slug, title, summary }) => link(title, `${TOOLS}/tools/${slug}`, summary)),
    "",
    "## Resources",
    "",
    ...resources,
    "",
    "## Octree",
    "",
    ...crossSite,
    "",
    "## Templates",
    "",
    ...templates.map((t) => link(t.title, `${TOOLS}/templates/${t.slug}`, templateDescription(t))),
    "",
    "## Optional",
    "",
    link("Tool summaries and limitations", `${TOOLS}/llms-full.txt`, "Longer description of every tool, template and symbol category."),
    ...SYMBOL_CATEGORIES.map(({ slug, name, symbols }) =>
      link(`${name} symbols`, `${TOOLS}/symbols/${slug}`, `${symbols.length} LaTeX commands with rendered output.`),
    ),
    "",
  ].join("\n");
}

export function buildLlmsFullTxt(): string {
  return [
    "# Octree LaTeX Tools",
    "",
    `> ${SUMMARY}`,
    "",
    localeNote,
    "AI-generated output should be checked against the source before use.",
    "",
    "## About Octree",
    "",
    ...OCTREE_ABOUT.flatMap((paragraph) => [paragraph, ""]),
    ...crossSite,
    "",
    "## Tool summaries and limitations",
    "",
    ...TOOL_SUMMARIES.flatMap(({ slug, title, details }) => [
      `### ${title}`,
      "",
      `URL: ${TOOLS}/tools/${slug}`,
      "",
      clean(details),
      "",
    ]),
    "## Templates",
    "",
    "Each template page shows the full LaTeX source, a compiled PDF preview and an Open in Octree button.",
    "",
    ...templates.map(
      (t) => `- [${clean(t.title)}](${TOOLS}/templates/${t.slug}) (${t.category}): ${clean(templateDescription(t))}`,
    ),
    "",
    "## Symbol reference",
    "",
    `Each category lists LaTeX commands with rendered output and the package they need; ${SYMBOL_PAGES.length} symbols also have their own page under /symbols/<category>/<symbol>.`,
    "",
    ...SYMBOL_CATEGORIES.map(({ slug, name, symbols }) =>
      link(`${name} symbols`, `${TOOLS}/symbols/${slug}`, `${symbols.length} commands.`),
    ),
    "",
    "## Resources",
    "",
    ...resources,
    "",
  ].join("\n");
}

export const textResponse = (body: string) =>
  new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
