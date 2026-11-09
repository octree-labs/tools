import type { Metadata } from "next";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { localizedPath, toLanguageTag } from "@/lib/seo";
import { symbolPagePath, type SymbolPageRef } from "./index";
import { isSymbolPageLocalized, symbolPageLocales } from "./locales";

/**
 * A page whose body copy is translated in `locale` (always true for English)
 * gets a self canonical and hreflang over the locales it is translated in.
 * Other locales (English body copy under a translated chrome) point their
 * canonical at the English page and are noindex, follow, so they are not
 * near-duplicates competing with it.
 */
export function symbolPageAlternates(
  ref: Pick<SymbolPageRef, "category" | "slug">,
  locale: string,
): Pick<Metadata, "alternates" | "robots"> {
  const path = symbolPagePath(ref);
  if (!isSymbolPageLocalized(ref.category, ref.slug, locale)) {
    return {
      alternates: { canonical: localizedPath(path, DEFAULT_LOCALE) },
      robots: { index: false, follow: true },
    };
  }
  const languages: Record<string, string> = {};
  for (const loc of symbolPageLocales(ref)) languages[toLanguageTag(loc)] = localizedPath(path, loc);
  languages["x-default"] = localizedPath(path, DEFAULT_LOCALE);
  return { alternates: { canonical: localizedPath(path, locale), languages } };
}
