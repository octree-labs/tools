import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { withDefaultOgImage } from "@/lib/seo";
import { SymbolPageView } from "@/components/symbol-page/SymbolPageView";
import { SYMBOL_PAGES, getSymbolPageRef } from "./index";
import { symbolPageAlternates } from "./seo";
import { isSymbolPageLocalized } from "./locales";
import { getSymbolPageT } from "./i18n";
import { buildSymbolPageModel } from "./model";

type Params = { locale: string; symbol: string };


/**
 * Route handlers shared by every app/[locale]/symbols/<category>/[symbol]
 * page. English pages, and pages translated into another locale
 * (./locales), are prerendered at build time; the untranslated pages of the
 * other locales render on first request and are then cached (ISR with no
 * expiry), which keeps the build far below ~10.5k pages (3.2 GB of output).
 */
export function symbolPageRoute(category: string) {
  const refs = SYMBOL_PAGES.filter((p) => p.category === category);

  function generateStaticParams({ params }: { params: { locale: string } }) {
    // Next only prerenders a route when every parent param set yields at
    // least one child (a parent that yields none leaves an incomplete param
    // set and the whole route falls back to on-demand). Other locales
    // therefore prerender their translated symbols, or the category's first
    // symbol when none is translated; the rest render on first request and
    // stay cached.
    const translated = refs.filter((ref) => isSymbolPageLocalized(category, ref.slug, params.locale));
    const list = params.locale === DEFAULT_LOCALE ? refs : translated.length ? translated : refs.slice(0, 1);
    return list.map((ref) => ({ locale: params.locale, symbol: ref.slug }));
  }

  async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { locale, symbol } = await params;
    const ref = getSymbolPageRef(category, symbol);
    if (!ref) return {};
    const model = buildSymbolPageModel(ref, await getSymbolPageT(locale), locale);
    if (!model) return {};
    const name = model.name.toLowerCase();
    return withDefaultOgImage({
      title: model.title,
      description: model.metaDescription,
      keywords: [
        `latex ${name}`,
        `${name} latex`,
        `${ref.latex} latex`,
        ...(locale === DEFAULT_LOCALE ? [`how to write ${name} in latex`] : []),
      ],
      ...symbolPageAlternates(ref, locale),
      openGraph: { title: model.title, description: model.metaDescription, type: "article" },
      twitter: { title: model.title, description: model.metaDescription },
    });
  }

  async function Page({ params }: { params: Promise<Params> }) {
    const { locale, symbol } = await params;
    setRequestLocale(locale);
    const ref = getSymbolPageRef(category, symbol);
    if (!ref) notFound();
    const model = buildSymbolPageModel(ref, await getSymbolPageT(locale), locale);
    if (!model) notFound();
    return <SymbolPageView model={model} locale={locale} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}
