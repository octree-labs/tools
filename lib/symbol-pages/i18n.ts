import { getTranslations } from "next-intl/server";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import type { SymbolPageT } from "./model";

/**
 * `symbolPage` messages exist in en, cn, ru, es, fr, de, it, pt and vi; every other locale
 * falls back to the English strings key by key.
 */
export async function getSymbolPageT(locale: string): Promise<SymbolPageT> {
  const local = await getTranslations({ locale, namespace: "symbolPage" });
  const english = locale === DEFAULT_LOCALE ? local : await getTranslations({ locale: DEFAULT_LOCALE, namespace: "symbolPage" });
  return (key, values) => (local.has(key) ? local(key, values) : english(key, values));
}
