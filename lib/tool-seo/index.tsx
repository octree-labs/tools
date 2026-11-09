import { ToolSeoContent, type ToolSeoContentProps } from "@/components/ToolSeoContent";
import { toLanguageTag } from "@/lib/seo";
import cn from "./locales/cn";
import es from "./locales/es";
import fr from "./locales/fr";
import ru from "./locales/ru";

/**
 * Translated SEO blocks for tool pages, one file per route locale in
 * ./locales (`cn` is Simplified Chinese, emitted as `zh`), keyed by the tool's
 * URL slug. The English block in app/[locale]/tools/<slug>/seo-content.tsx is
 * the source and renders in every locale without a translation.
 *
 * Product names, LaTeX commands, file formats and limits stay verbatim; only
 * prose is translated. To translate another tool, add an entry for its slug
 * to each locale file; to add a locale, create its file and register it here.
 */
export type ToolSeoTranslation = Omit<ToolSeoContentProps, "inLanguage">;
export type ToolSeoLocale = Partial<Record<string, ToolSeoTranslation>>;

export const toolSeoLocales: Partial<Record<string, ToolSeoLocale>> = { cn, es, fr, ru };

/** The translated block for a tool in a route locale, if there is one. */
export function getToolSeoTranslation(slug: string, locale = "en"): ToolSeoTranslation | undefined {
  return toolSeoLocales[locale]?.[slug];
}

/**
 * Renders the tool's block in the page locale, falling back to the English
 * props passed in. A translated block carries `inLanguage` in its FAQPage
 * JSON-LD; the English one is unchanged.
 */
export function LocalizedToolSeoContent({
  slug,
  locale = "en",
  ...english
}: ToolSeoTranslation & { slug: string; locale?: string }) {
  const translated = getToolSeoTranslation(slug, locale);
  if (translated) {
    return <ToolSeoContent {...translated} inLanguage={toLanguageTag(locale)} />;
  }
  return <ToolSeoContent {...english} />;
}
