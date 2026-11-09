import Link from "next/link";
import { getTranslations } from "next-intl/server";
import KatexPreview from "@/components/KatexPreview";
import { CopyLatexButton } from "@/components/CopyLatexButton";
import { OctreeCTA } from "@/components/OctreeCTA";
import { IntroFaq } from "@/lib/symbol-intros/ui";
import { serializeJsonLd } from "@/lib/json-ld";
import { localizedPath, toLanguageTag } from "@/lib/seo";
import { symbolSlugToTranslationKey } from "@/lib/symbol-categories";
import { symbolPagePath } from "@/lib/symbol-pages";
import { getSymbolPageT } from "@/lib/symbol-pages/i18n";
import type { SymbolPageModel } from "@/lib/symbol-pages/model";
import { OpenExampleButton } from "./OpenExampleButton";

const SITE = "https://tools.useoctree.com";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>
      {children}
    </section>
  );
}

export async function SymbolPageView({ model, locale }: { model: SymbolPageModel; locale: string }) {
  const t = await getSymbolPageT(locale);
  const ts = await getTranslations({ locale, namespace: "symbols" });
  const { ref, copy, facts } = model;
  const categoryTitle = (slug: string) => {
    const key = symbolSlugToTranslationKey[slug];
    return key && ts.has(`categories.${key}.title`) ? ts(`categories.${key}.title`) : slug;
  };
  const href = (path: string) => localizedPath(path, locale);
  const categoryPath = `/symbols/${ref.category}`;
  const pagePath = symbolPagePath(ref);
  const source = `tools:symbols:${ref.category}:${ref.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: t("breadcrumbSymbols"), path: "/symbols" },
      { name: categoryTitle(ref.category), path: categoryPath },
      { name: model.name, path: pagePath },
    ].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE}${href(item.path)}`,
    })),
  };

  return (
    <article className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href={href("/symbols")} className="hover:text-gray-900">{t("breadcrumbSymbols")}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={href(categoryPath)} className="hover:text-gray-900">{categoryTitle(ref.category)}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-gray-900">{model.name}</li>
        </ol>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 break-words">{model.title}</h1>

      <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 mb-10">
        <div className="flex items-center justify-center min-h-[120px] text-4xl sm:text-5xl mb-6">
          <KatexPreview latex={ref.latex} displayMode={true} />
        </div>
        <dl className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-6 gap-y-3 text-sm">
          <dt className="font-semibold text-gray-900">{t("commandLabel")}</dt>
          <dd className="flex flex-wrap items-center gap-3">
            <code className="font-mono text-base text-gray-900 bg-gray-50 border border-gray-200 rounded px-2 py-1 break-all">
              {ref.latex}
            </code>
            <CopyLatexButton latex={ref.latex} />
          </dd>
          <dt className="font-semibold text-gray-900">{t("packageLabel")}</dt>
          <dd>
            {model.usepackage ? (
              <span className="flex flex-wrap items-center gap-3">
                <span>{t("packageNeeded")}:</span>
                <code className="font-mono text-gray-900 bg-gray-50 border border-gray-200 rounded px-2 py-1">
                  {model.usepackage}
                </code>
                <CopyLatexButton latex={model.usepackage} />
              </span>
            ) : (
              t("packageNone")
            )}
          </dd>
          <dt className="font-semibold text-gray-900">{t("modeLabel")}</dt>
          <dd>{t(facts.mode === "math" ? "modeMath" : facts.mode === "text" ? "modeText" : "modeBoth")}</dd>
          {model.unicode && (
            <>
              <dt className="font-semibold text-gray-900">{t("unicodeLabel")}</dt>
              <dd className="flex flex-wrap items-center gap-3">
                <span className="text-2xl text-gray-900">{model.unicode}</span>
                <code className="font-mono text-xs text-gray-500">
                  U+{model.unicode.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")}
                </code>
                <CopyLatexButton latex={model.unicode} />
              </dd>
            </>
          )}
        </dl>
      </div>

      <Section title={t("whereUsed")}>
        <p className="mb-3">{copy.meaning}</p>
        <p className="mb-3">{copy.usage}</p>
        {ref.alsoIn.length > 0 && (
          <p className="text-sm text-gray-600">
            {t("alsoListed")}:{" "}
            {ref.alsoIn.map((slug, i) => (
              <span key={slug}>
                {i > 0 && ", "}
                <Link href={href(`/symbols/${slug}`)} className="text-blue-600 hover:underline">
                  {categoryTitle(slug)}
                </Link>
              </span>
            ))}
          </p>
        )}
      </Section>

      <Section title={t("example")}>
        <p className="mb-3">{t(model.needsUnicodeEngine ? "exampleIntroUnicode" : "exampleIntro")}</p>
        <div className="flex items-center justify-center bg-white border border-gray-200 rounded-lg p-4 mb-3 text-lg overflow-x-auto">
          <KatexPreview latex={copy.example} displayMode={true} />
        </div>
        <div className="relative">
          <pre className="mb-3 p-3 pr-20 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 overflow-x-auto">
            <code>{model.exampleDocument}</code>
          </pre>
          <CopyLatexButton latex={model.exampleDocument} className="absolute top-2 right-2 bg-white" />
        </div>
        <OpenExampleButton
          latex={model.exampleDocument}
          title={model.title}
          source={source}
          label={t("openExample")}
        />
      </Section>

      <Section title={t("related")}>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          {model.related.map((rel) => (
            <li key={rel.latex}>
              <Link
                href={href(symbolPagePath(rel))}
                className="flex items-center justify-between gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-gray-300 hover:shadow-sm transition"
              >
                <span className="font-medium text-gray-900">{rel.name}</span>
                <code className="font-mono text-xs text-gray-500 truncate">{rel.latex}</code>
              </Link>
            </li>
          ))}
        </ul>
        <Link href={href(categoryPath)} className="text-sm text-blue-600 hover:underline">
          {t("allInCategory", { category: categoryTitle(ref.category) })} &rarr;
        </Link>
      </Section>

      <Section title={t("faqHeading")}>
        <IntroFaq items={model.faq} inLanguage={toLanguageTag(locale)} />
      </Section>

      <div className="mt-12">
        <OctreeCTA source={source} />
      </div>
    </article>
  );
}
