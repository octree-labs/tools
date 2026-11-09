import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/config";
import { getSymbolCopy } from "../content";
import { getSymbolPageRef, type SymbolPageRef } from "../index";
import type { SymbolPageTranslation, SymbolPageTranslations } from "./types";
import cnArrows from "./cn/arrows";
import esArrows from "./es/arrows";
import frArrows from "./fr/arrows";
import ruArrows from "./ru/arrows";
import cnSetTheory from "./cn/set-theory";
import esSetTheory from "./es/set-theory";
import frSetTheory from "./fr/set-theory";
import ruSetTheory from "./ru/set-theory";
import cnMath from "./cn/math";
import esMath from "./es/math";
import frMath from "./fr/math";
import ruMath from "./ru/math";

export type { SymbolPageTranslation, SymbolPageTranslations } from "./types";

/**
 * locale -> category -> slug -> translated body copy. A symbol page is a real
 * alternate in a locale (self canonical, hreflang, sitemap) only when it has
 * an entry here; every other locale renders the English copy under the
 * translated chrome, canonicalises to the English URL and is noindex.
 *
 * To localise another category: add lib/symbol-pages/locales/<locale>/<category>.ts
 * (every slug of the category, see ./types.ts) and register it below.
 */
const TRANSLATIONS: Record<string, Record<string, SymbolPageTranslations>> = {
  cn: { "math": cnMath, "set-theory": cnSetTheory, "arrows": cnArrows },
  es: { "math": esMath, "set-theory": esSetTheory, "arrows": esArrows },
  fr: { "math": frMath, "set-theory": frSetTheory, "arrows": frArrows },
  ru: { "math": ruMath, "set-theory": ruSetTheory, "arrows": ruArrows },
};

/** Locales that have translated symbol copy for at least one category. */
export const SYMBOL_PAGE_TEXT_LOCALES: readonly string[] = Object.keys(TRANSLATIONS);

/** Categories translated in `locale` (English: every category). */
export function translatedSymbolCategories(locale: string): string[] {
  return Object.keys(TRANSLATIONS[locale] ?? {});
}

/** Slugs with a translation in one locale's category file. */
export function translatedSymbolSlugs(locale: string, category: string): string[] {
  return Object.keys(TRANSLATIONS[locale]?.[category] ?? {});
}

export function getSymbolPageTranslation(
  category: string,
  slug: string,
  locale: string,
): SymbolPageTranslation | undefined {
  if (locale === DEFAULT_LOCALE) return undefined;
  return TRANSLATIONS[locale]?.[category]?.[slug];
}

/** English pages always count; any other locale only with a translation. */
export function isSymbolPageLocalized(category: string, slug: string, locale: string): boolean {
  return locale === DEFAULT_LOCALE || getSymbolPageTranslation(category, slug, locale) !== undefined;
}

/** The locales in which this page is a real alternate, in LOCALES order (English first). */
export function symbolPageLocales(ref: Pick<SymbolPageRef, "category" | "slug">): string[] {
  return LOCALES.filter((locale) => isSymbolPageLocalized(ref.category, ref.slug, locale));
}

/** Body text of a symbol page in one locale, falling back to English field by field. */
export interface SymbolPageText {
  name: string;
  meaning: string;
  usage: string;
  example: string;
  /** True for English and for translated pairs: the page is indexable in this locale. */
  localized: boolean;
}

export function getSymbolPageText(category: string, slug: string, locale: string): SymbolPageText | undefined {
  const ref = getSymbolPageRef(category, slug);
  const copy = ref && getSymbolCopy(ref.latex);
  if (!ref || !copy) return undefined;
  const local = getSymbolPageTranslation(category, slug, locale);
  return {
    name: local?.name ?? ref.name,
    meaning: local?.meaning ?? copy.meaning,
    usage: local?.usage ?? copy.usage,
    example: local?.example ?? copy.example,
    localized: locale === DEFAULT_LOCALE || local !== undefined,
  };
}
