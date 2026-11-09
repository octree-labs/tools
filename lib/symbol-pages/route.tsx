import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { generateAlternates, withDefaultOgImage } from "@/lib/seo";
import { SymbolPageView } from "@/components/symbol-page/SymbolPageView";
import { SYMBOL_PAGES, getSymbolPageRef } from "./index";
import { getSymbolPageT } from "./i18n";
import { buildSymbolPageModel } from "./model";

type Params = { locale: string; symbol: string };

/**
 * Route handlers shared by every app/[locale]/symbols/<category>/[symbol]
 * page. English pages are prerendered at build time; the other 15 locales
 * render on first request and are then cached (ISR with no expiry), which
 * keeps the build to ~650 symbol pages instead of ~10k.
 */
export function symbolPageRoute(category: string) {
  const refs = SYMBOL_PAGES.filter((p) => p.category === category);

  function generateStaticParams({ params }: { params: { locale: string } }) {
    if (params.locale !== DEFAULT_LOCALE) return [];
    return refs.map((ref) => ({ symbol: ref.slug }));
  }

  async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { locale, symbol } = await params;
    const ref = getSymbolPageRef(category, symbol);
    if (!ref) return {};
    const model = buildSymbolPageModel(ref, await getSymbolPageT(locale));
    if (!model) return {};
    return withDefaultOgImage({
      title: model.title,
      description: model.metaDescription,
      keywords: [
        `latex ${ref.name.toLowerCase()}`,
        `${ref.name.toLowerCase()} latex`,
        `${ref.latex} latex`,
        `how to write ${ref.name.toLowerCase()} in latex`,
      ],
      alternates: generateAlternates(`/symbols/${category}/${ref.slug}`, locale),
      openGraph: { title: model.title, description: model.metaDescription, type: "article" },
      twitter: { title: model.title, description: model.metaDescription },
    });
  }

  async function Page({ params }: { params: Promise<Params> }) {
    const { locale, symbol } = await params;
    setRequestLocale(locale);
    const ref = getSymbolPageRef(category, symbol);
    if (!ref) notFound();
    const model = buildSymbolPageModel(ref, await getSymbolPageT(locale));
    if (!model) notFound();
    return <SymbolPageView model={model} locale={locale} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}
