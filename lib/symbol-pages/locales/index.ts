import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/config";
import { getSymbolCopy } from "../content";
import { getSymbolPageRef, type SymbolPageRef } from "../index";
import type { SymbolPageTranslation, SymbolPageTranslations } from "./types";
import cnArrows from "./cn/arrows";
import esArrows from "./es/arrows";
import frArrows from "./fr/arrows";
import ruArrows from "./ru/arrows";
import cnFinance from "./cn/finance";
import esFinance from "./es/finance";
import frFinance from "./fr/finance";
import ruFinance from "./ru/finance";
import cnFunctions from "./cn/functions";
import esFunctions from "./es/functions";
import frFunctions from "./fr/functions";
import ruFunctions from "./ru/functions";
import cnGameTheory from "./cn/game-theory";
import esGameTheory from "./es/game-theory";
import frGameTheory from "./fr/game-theory";
import ruGameTheory from "./ru/game-theory";
import cnMath from "./cn/math";
import esMath from "./es/math";
import frMath from "./fr/math";
import ruMath from "./ru/math";
import cnProbability from "./cn/probability";
import esProbability from "./es/probability";
import frProbability from "./fr/probability";
import ruProbability from "./ru/probability";
import cnQuantifiers from "./cn/quantifiers";
import esQuantifiers from "./es/quantifiers";
import frQuantifiers from "./fr/quantifiers";
import ruQuantifiers from "./ru/quantifiers";
import cnRelations from "./cn/relations";
import esRelations from "./es/relations";
import frRelations from "./fr/relations";
import ruRelations from "./ru/relations";
import cnSetTheory from "./cn/set-theory";
import esSetTheory from "./es/set-theory";
import frSetTheory from "./fr/set-theory";
import ruSetTheory from "./ru/set-theory";
import cnSpecialFunctions from "./cn/special-functions";
import esSpecialFunctions from "./es/special-functions";
import frSpecialFunctions from "./fr/special-functions";
import ruSpecialFunctions from "./ru/special-functions";
import cnSummation from "./cn/summation";
import esSummation from "./es/summation";
import frSummation from "./fr/summation";
import ruSummation from "./ru/summation";
import cnTensors from "./cn/tensors";
import esTensors from "./es/tensors";
import frTensors from "./fr/tensors";
import ruTensors from "./ru/tensors";
import cnTopology from "./cn/topology";
import esTopology from "./es/topology";
import frTopology from "./fr/topology";
import ruTopology from "./ru/topology";
import cnTrigonometry from "./cn/trigonometry";
import esTrigonometry from "./es/trigonometry";
import frTrigonometry from "./fr/trigonometry";
import ruTrigonometry from "./ru/trigonometry";
import cnUnits from "./cn/units";
import esUnits from "./es/units";
import frUnits from "./fr/units";
import ruUnits from "./ru/units";

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
  cn: {
    "arrows": cnArrows,
    "finance": cnFinance,
    "functions": cnFunctions,
    "game-theory": cnGameTheory,
    "math": cnMath,
    "probability": cnProbability,
    "quantifiers": cnQuantifiers,
    "relations": cnRelations,
    "set-theory": cnSetTheory,
    "special-functions": cnSpecialFunctions,
    "summation": cnSummation,
    "tensors": cnTensors,
    "topology": cnTopology,
    "trigonometry": cnTrigonometry,
    "units": cnUnits,
  },
  es: {
    "arrows": esArrows,
    "finance": esFinance,
    "functions": esFunctions,
    "game-theory": esGameTheory,
    "math": esMath,
    "probability": esProbability,
    "quantifiers": esQuantifiers,
    "relations": esRelations,
    "set-theory": esSetTheory,
    "special-functions": esSpecialFunctions,
    "summation": esSummation,
    "tensors": esTensors,
    "topology": esTopology,
    "trigonometry": esTrigonometry,
    "units": esUnits,
  },
  fr: {
    "arrows": frArrows,
    "finance": frFinance,
    "functions": frFunctions,
    "game-theory": frGameTheory,
    "math": frMath,
    "probability": frProbability,
    "quantifiers": frQuantifiers,
    "relations": frRelations,
    "set-theory": frSetTheory,
    "special-functions": frSpecialFunctions,
    "summation": frSummation,
    "tensors": frTensors,
    "topology": frTopology,
    "trigonometry": frTrigonometry,
    "units": frUnits,
  },
  ru: {
    "arrows": ruArrows,
    "finance": ruFinance,
    "functions": ruFunctions,
    "game-theory": ruGameTheory,
    "math": ruMath,
    "probability": ruProbability,
    "quantifiers": ruQuantifiers,
    "relations": ruRelations,
    "set-theory": ruSetTheory,
    "special-functions": ruSpecialFunctions,
    "summation": ruSummation,
    "tensors": ruTensors,
    "topology": ruTopology,
    "trigonometry": ruTrigonometry,
    "units": ruUnits,
  },
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
