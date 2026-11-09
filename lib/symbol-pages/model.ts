import type { FaqJsonLdItem } from "@/lib/json-ld";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { getSymbolFacts, type SymbolCopy, type SymbolFacts } from "./content";
import { relatedSymbolPages, type SymbolPageRef } from "./index";
import { getSymbolPageText } from "./locales";
import { unicodeFor } from "./unicode";

/** Message lookup for the `symbolPage` namespace (next-intl translator or a test stub). */
export type SymbolPageT = (key: string, values?: Record<string, string>) => string;

export interface SymbolPageModel {
  ref: SymbolPageRef;
  /** Display name in the page's locale (ref.name stays English). */
  name: string;
  /** Body copy in the page's locale, or English where it is not translated. */
  copy: SymbolCopy;
  /** The body copy is in the page's locale (always true for English): the page is indexable. */
  localized: boolean;
  facts: SymbolFacts;
  title: string;
  metaDescription: string;
  /** e.g. \usepackage{amssymb}; empty when the command is built in. */
  usepackage: string;
  exampleDocument: string;
  /** The command or example contains a non-ASCII character (needs XeLaTeX/LuaLaTeX). */
  needsUnicodeEngine: boolean;
  /** The Unicode character for the "copy the Unicode character" line, when there is one. */
  unicode?: string;
  /** Neighbouring pages; `name` is localised where that page is translated. */
  related: SymbolPageRef[];
  faq: FaqJsonLdItem[];
}

const NON_ASCII = /[^\u0000-\u007f]/;

export function usepackageLine(packages: string[]): string {
  return packages.length ? `\\usepackage{${packages.join(",")}}` : "";
}

/** A complete document that compiles (checked by scripts/symbol-facts.py). */
export function buildExampleDocument(ref: SymbolPageRef, copy: SymbolCopy, facts: SymbolFacts): string {
  const lines = ["\\documentclass{article}"];
  if (facts.examplePackages.length) lines.push(usepackageLine(facts.examplePackages));
  lines.push("\\begin{document}");
  const own = facts.mode === "text" ? ref.latex : `$${ref.latex}$`;
  lines.push(`${escapeText(ref.name)}: ${own}`);
  lines.push("");
  lines.push(`\\[ ${copy.example} \\]`);
  lines.push("\\end{document}");
  return lines.join("\n");
}

const TEXT_ESCAPES: Record<string, string> = {
  "\\": "\\textbackslash{}", "&": "\\&", "%": "\\%", "#": "\\#", _: "\\_",
  "{": "\\{", "}": "\\}", $: "\\$", "^": "\\^{}", "~": "\\~{}",
};

/** Escapes a plain-text name for the example document (mirrors scripts/symbol-facts.py). */
function escapeText(text: string): string {
  return text.replace(/[\\&%#_{}$^~]/g, (ch) => TEXT_ESCAPES[ch]);
}

function packageList(packages: string[]): string {
  return packages.join(" + ");
}

export function buildSymbolPageModel(
  ref: SymbolPageRef,
  t: SymbolPageT,
  locale: string = DEFAULT_LOCALE,
): SymbolPageModel | undefined {
  const text = getSymbolPageText(ref.category, ref.slug, locale);
  const facts = getSymbolFacts(ref.latex);
  if (!text || !facts) return undefined;
  const { name, localized } = text;
  const copy: SymbolCopy = { meaning: text.meaning, usage: text.usage, example: text.example };

  const command = ref.latex;
  const unicode = unicodeFor(command);
  const usepackage = usepackageLine(facts.packages);
  const title = t("title", { name, command });
  const packageSentence = facts.packages.length
    ? t("faqHowPkg", { packages: packageList(facts.packages), usepackage })
    : t("faqHowNoPkg");

  const howAnswer =
    facts.mode === "text"
      ? t("faqHowAText", { command, example: command, packageSentence })
      : t("faqHowA", { command, example: copy.example, packageSentence });
  const pkgAnswer = facts.packages.length
    ? t("faqPkg", { command, packages: packageList(facts.packages), usepackage })
    : t("faqPkgNone", { command });
  let modeAnswer: string;
  if (facts.mode === "math") {
    modeAnswer = t("faqModeMath", { command });
    if (unicode) modeAnswer += ` ${t("faqModeMathUnicode", { char: unicode })}`;
  } else if (facts.mode === "text") {
    modeAnswer = t("faqModeTextOnly", { command });
  } else {
    modeAnswer = t("faqModeBoth", { command });
  }

  return {
    ref,
    name,
    copy,
    localized,
    facts,
    title,
    metaDescription: t("metaDescription", { meaning: copy.meaning, command }),
    usepackage,
    exampleDocument: buildExampleDocument(ref, copy, facts),
    unicode,
    needsUnicodeEngine: NON_ASCII.test(ref.latex) || NON_ASCII.test(copy.example),
    related: relatedSymbolPages(ref, 6).map((rel) => ({
      ...rel,
      name: getSymbolPageText(rel.category, rel.slug, locale)?.name ?? rel.name,
    })),
    faq: [
      { question: t("faqHowQ", { name }), answer: howAnswer },
      { question: t("faqPkgQ", { command }), answer: pkgAnswer },
      { question: t("faqModeQ", { command }), answer: modeAnswer },
    ],
  };
}
