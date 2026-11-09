import type { Metadata } from "next";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { localizedPath, toLanguageTag } from "@/lib/seo";
import { SYMBOL_PAGE_INDEXED_LOCALES, isSymbolPageIndexedLocale } from "./index";

/**
 * Indexed locales get a self canonical and hreflang over the indexed locales
 * only. Other locales (English body copy under a translated chrome) point
 * their canonical at the English page and are noindex, follow, so they are
 * not near-duplicates competing with it.
 */
export function symbolPageAlternates(path: string, locale: string): Pick<Metadata, "alternates" | "robots"> {
  if (!isSymbolPageIndexedLocale(locale)) {
    return {
      alternates: { canonical: localizedPath(path, DEFAULT_LOCALE) },
      robots: { index: false, follow: true },
    };
  }
  const languages: Record<string, string> = {};
  for (const loc of SYMBOL_PAGE_INDEXED_LOCALES) languages[toLanguageTag(loc)] = localizedPath(path, loc);
  languages["x-default"] = localizedPath(path, DEFAULT_LOCALE);
  return { alternates: { canonical: localizedPath(path, locale), languages } };
}
