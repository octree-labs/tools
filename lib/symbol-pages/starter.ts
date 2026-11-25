import { getSymbolCopy, getSymbolFacts, type SymbolCopy, type SymbolFacts } from "./content";
import { SYMBOL_CATEGORIES, type SymbolPageRef } from "./index";

/**
 * Starter documents for the "Open in Octree" CTAs on symbol pages: a short,
 * compilable article that already uses the symbol, so a visitor who came to
 * copy one command lands in the editor with it working in context.
 *
 * Only constructs already proven by scripts/symbol-facts.py are used: the
 * command in math mode (or running text for text-only commands) with
 * `facts.packages`, and the page's example in display math with
 * `facts.examplePackages`. tests/symbol-starter.test.ts checks the shape.
 * When this was written every generated document (all symbols, translated
 * examples and categories) compiled with Tectonic, and a sample of ~150 with
 * Octree's compile service (pdfLaTeX, XeLaTeX for the fontspec ones).
 */

const NON_ASCII = /[^\u0000-\u007f]/;

/** Package order in the preamble (the candidate order of scripts/symbol-facts.py). */
const PACKAGE_ORDER = [
  "amsmath", "amssymb", "mathtools", "stmaryrd", "cancel", "mathrsfs", "bm", "esint",
  "wasysym", "gensymb", "eurosym", "braket", "upgreek", "physics",
];

const TEXT_ESCAPES: Record<string, string> = {
  "\\": "\\textbackslash{}", "&": "\\&", "%": "\\%", "#": "\\#", _: "\\_",
  "{": "\\{", "}": "\\}", $: "\\$", "^": "\\^{}", "~": "\\~{}",
};

function escapeText(text: string): string {
  return text.replace(/[\\&%#_{}$^~]/g, (ch) => TEXT_ESCAPES[ch]);
}

/** Packages in a stable order with duplicates removed. */
export function orderPackages(packages: Iterable<string>): string[] {
  const unique = [...new Set(packages)];
  const rank = (p: string) => {
    const i = PACKAGE_ORDER.indexOf(p);
    return i === -1 ? PACKAGE_ORDER.length : i;
  };
  return unique.sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
}

/** `\verb` with a delimiter that does not occur in the command (`\verb|\|` would break). */
export function verbatim(command: string): string {
  const delimiter = ["|", "!", "+", "@", "=", ";", "\""].find((d) => !command.includes(d));
  return delimiter ? `\\verb${delimiter}${command}${delimiter}` : `\\texttt{${escapeText(command)}}`;
}

/**
 * The preamble. A document with a non-ASCII character loads fontspec, which
 * makes Octree's compile service pick XeLaTeX (pdfLaTeX cannot typeset
 * characters such as ł or ₹ without extra setup).
 */
function preamble(packages: string[], unicode: boolean, title: string): string[] {
  const lines = ["\\documentclass{article}"];
  if (unicode) lines.push("\\usepackage{fontspec} % Unicode characters: compiles with XeLaTeX");
  if (packages.length) lines.push(`\\usepackage{${orderPackages(packages).join(",")}}`);
  lines.push("", `\\title{${title}}`, "\\date{}", "", "\\begin{document}", "\\maketitle", "");
  return lines;
}

/** Heading text: the English name, or the command when the name has characters pdfLaTeX may lack. */
function headingName(ref: Pick<SymbolPageRef, "name" | "latex">, unicode: boolean): string {
  if (unicode || !NON_ASCII.test(ref.name)) return escapeText(ref.name);
  return `\\texttt{${escapeText(ref.latex)}}`;
}

/** The command typeset on its own: in math mode, or as running text for text-only commands. */
function typeset(latex: string, facts: SymbolFacts): string {
  return facts.mode === "text" ? latex : `$${latex}$`;
}

export interface StarterDocument {
  latex: string;
  /** The packages loaded (after fontspec when `unicode`). */
  packages: string[];
  /** Loads fontspec, so it needs XeLaTeX or LuaLaTeX. */
  unicode: boolean;
}

/**
 * A starter document for one symbol page:
 *
 *   - title "<name> in \LaTeX", packages from the measured facts
 *   - the command shown verbatim next to its rendered form, inline
 *   - the page's example inline in a sentence and as a numbered equation
 *     that the text cross-references
 */
export function buildSymbolStarterDocument(
  ref: Pick<SymbolPageRef, "name" | "latex">,
  copy: Pick<SymbolCopy, "example">,
  facts: SymbolFacts,
): StarterDocument {
  const unicode = NON_ASCII.test(ref.latex) || NON_ASCII.test(copy.example);
  const packages = orderPackages([...facts.packages, ...facts.examplePackages]);
  const name = headingName(ref, unicode);
  const lines = preamble(packages, unicode, `${name} in \\LaTeX`);
  lines.push(
    "\\section{Inline}",
    `The command ${verbatim(ref.latex)} gives ${typeset(ref.latex, facts)}.`,
    `In running text it looks like this: $${copy.example}$.`,
    "",
    "\\section{Displayed}",
    "A numbered equation you can refer to:",
    "\\begin{equation}",
    `  ${copy.example}`,
    "  \\label{eq:example}",
    "\\end{equation}",
    "Equation~(\\ref{eq:example}) uses the same command in display style.",
    "",
    "% Edit the lines above or add your own; the PDF updates when you compile.",
    "\\end{document}",
  );
  return { latex: lines.join("\n"), packages, unicode };
}

/** How many symbols a category's starter document lists. */
export const CATEGORY_STARTER_SIZE = 6;

/**
 * A starter document for a category index page: the first
 * CATEGORY_STARTER_SIZE ASCII commands of the category, each verbatim and
 * rendered in a list, then the first one's example as a numbered equation.
 * Undefined when the category has no usable symbol.
 */
export function buildCategoryStarterDocument(categorySlug: string): StarterDocument | undefined {
  const category = SYMBOL_CATEGORIES.find((c) => c.slug === categorySlug);
  if (!category) return undefined;
  const picked: { name: string; latex: string; facts: SymbolFacts }[] = [];
  for (const symbol of category.symbols) {
    if (NON_ASCII.test(symbol.latex) || picked.some((p) => p.latex === symbol.latex)) continue;
    const facts = getSymbolFacts(symbol.latex);
    if (!facts) continue;
    picked.push({ name: symbol.name, latex: symbol.latex, facts });
    if (picked.length === CATEGORY_STARTER_SIZE) break;
  }
  if (!picked.length) return undefined;

  const first = picked[0];
  const example = getSymbolCopy(first.latex)?.example;
  const exampleUnicode = example ? NON_ASCII.test(example) : false;
  const packages = orderPackages(
    picked.flatMap((p) => p.facts.packages).concat(example ? first.facts.examplePackages : []),
  );
  const title = `${escapeText(category.name)} symbols in \\LaTeX`;
  const lines = preamble(packages, exampleUnicode, title);
  lines.push("\\begin{itemize}");
  for (const p of picked) {
    const name = headingName(p, exampleUnicode);
    lines.push(`  \\item ${name}: ${typeset(p.latex, p.facts)} \\quad ${verbatim(p.latex)}`);
  }
  lines.push("\\end{itemize}", "");
  if (example) {
    lines.push(
      "In a formula:",
      "\\begin{equation}",
      `  ${example}`,
      "\\end{equation}",
      "",
    );
  }
  lines.push("% Edit the lines above or add your own; the PDF updates when you compile.", "\\end{document}");
  return { latex: lines.join("\n"), packages, unicode: exampleUnicode };
}
