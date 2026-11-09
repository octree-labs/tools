import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { SYMBOL_CATEGORIES } from "./catalog";
import nameOverrides from "./names.json";

export { SYMBOL_CATEGORIES } from "./catalog";

/**
 * Locales whose symbol pages are real alternates: title AND body copy in
 * that language. The body copy (./content.json) is English only, so this is
 * just English; every other locale's symbol page canonicalises to the English
 * URL, is noindex, and is left out of the sitemap and of hreflang. Add a
 * locale here only together with translated content for it.
 */
export const SYMBOL_PAGE_INDEXED_LOCALES: readonly string[] = [DEFAULT_LOCALE];

export function isSymbolPageIndexedLocale(locale: string): boolean {
  return SYMBOL_PAGE_INDEXED_LOCALES.includes(locale);
}

/**
 * One entry per distinct LaTeX command in lib/symbols.ts. This module is
 * light (no prose) so client code can import it for links; the page copy
 * lives in ./content.
 */
export interface SymbolPageRef {
  /** Home category slug: the first category in SYMBOL_CATEGORIES listing the command. */
  category: string;
  slug: string;
  /** Command exactly as in the dataset (copied by the copy button). */
  latex: string;
  /** Display name: the dataset name, or a readable override (./names.json) for bare characters. */
  name: string;
  /** Other categories that list the same command and link to this page. */
  alsoIn: string[];
}

const TRANSLITERATE: Record<string, string> = {
  "œ": "oe", "Œ": "oe", "æ": "ae", "Æ": "ae", "ø": "o", "Ø": "o", "ł": "l", "Ł": "l",
  "ß": "ss", "ı": "i", "ȷ": "j", "¿": "inverted question mark", "¡": "inverted exclamation mark",
};

/** ASCII kebab-case: "Gamma (Upper)" -> "gamma-upper", "Less Than or Equal" -> "less-than-or-equal". */
export function slugify(text: string): string {
  return text
    .replace(/[^\u0000-\u007f]/g, (ch) => TRANSLITERATE[ch] ?? ch)
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** "\\leftarrow" -> "leftarrow", "\\hat{x}" -> "hat-x". */
export function commandSlug(latex: string): string {
  return slugify(latex.replace(/\\/g, " ")) || "symbol";
}

function build(): SymbolPageRef[] {
  const overrides = nameOverrides as Record<string, string>;
  const pages: SymbolPageRef[] = [];
  const byLatex = new Map<string, SymbolPageRef>();
  const used = new Map<string, Set<string>>();
  for (const category of SYMBOL_CATEGORIES) {
    for (const symbol of category.symbols) {
      const existing = byLatex.get(symbol.latex);
      if (existing) {
        if (existing.category !== category.slug && !existing.alsoIn.includes(category.slug)) {
          existing.alsoIn.push(category.slug);
        }
        continue;
      }
      const name = overrides[symbol.latex] ?? symbol.name;
      const taken = used.get(category.slug) ?? new Set<string>();
      used.set(category.slug, taken);
      let slug = slugify(name) || commandSlug(symbol.latex);
      if (taken.has(slug)) slug = `${slug}-${commandSlug(symbol.latex)}`;
      for (let i = 2; taken.has(slug); i++) slug = `${slug.replace(/-\d+$/, "")}-${i}`;
      taken.add(slug);
      const ref: SymbolPageRef = { category: category.slug, slug, latex: symbol.latex, name, alsoIn: [] };
      byLatex.set(symbol.latex, ref);
      pages.push(ref);
    }
  }
  return pages;
}

export const SYMBOL_PAGES: SymbolPageRef[] = build();

const byLatex = new Map(SYMBOL_PAGES.map((p) => [p.latex, p]));
const byPath = new Map(SYMBOL_PAGES.map((p) => [`${p.category}/${p.slug}`, p]));

export function getSymbolPageRef(category: string, slug: string): SymbolPageRef | undefined {
  return byPath.get(`${category}/${slug}`);
}

export function getSymbolPageRefByLatex(latex: string): SymbolPageRef | undefined {
  return byLatex.get(latex);
}

/** Locale-less path of a symbol page, e.g. /symbols/math/not-equal. */
export function symbolPagePath(ref: Pick<SymbolPageRef, "category" | "slug">): string {
  return `/symbols/${ref.category}/${ref.slug}`;
}

/** command -> page path, for the given category's grid (duplicates point at their home page). */
export function symbolHrefsFor(categorySlug: string): Record<string, string> {
  const category = SYMBOL_CATEGORIES.find((c) => c.slug === categorySlug);
  const hrefs: Record<string, string> = {};
  for (const symbol of category?.symbols ?? []) {
    const ref = byLatex.get(symbol.latex);
    if (ref) hrefs[symbol.latex] = symbolPagePath(ref);
  }
  return hrefs;
}

export function categoryName(slug: string): string {
  return SYMBOL_CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}

/**
 * Up to `count` neighbours from the same category list (the symbols around it
 * in the dataset order, which groups variants together), each resolved to its
 * home page and never the page itself.
 */
export function relatedSymbolPages(ref: SymbolPageRef, count = 6): SymbolPageRef[] {
  const list = SYMBOL_CATEGORIES.find((c) => c.slug === ref.category)?.symbols ?? [];
  const index = list.findIndex((s) => s.latex === ref.latex);
  // Interleave after/before so the closest neighbours on both sides come first.
  const after = list.slice(index + 1);
  const before = list.slice(0, Math.max(index, 0)).reverse();
  const interleaved: typeof list = [];
  for (let i = 0; i < Math.max(after.length, before.length); i++) {
    if (after[i]) interleaved.push(after[i]);
    if (before[i]) interleaved.push(before[i]);
  }
  const out: SymbolPageRef[] = [];
  for (const symbol of interleaved) {
    const target = byLatex.get(symbol.latex);
    if (!target || target.latex === ref.latex || out.includes(target)) continue;
    out.push(target);
    if (out.length === count) break;
  }
  return out;
}
