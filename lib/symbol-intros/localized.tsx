import type { ReactNode } from "react";
import type { FaqJsonLdItem } from "@/lib/json-ld";
import {
  IntroFaq,
  IntroH2,
  IntroH3,
  IntroSection,
  QuickRefTable,
  type QuickRefLabels,
  type QuickRefRow,
} from "./ui";

/**
 * A translated symbol intro. It covers the parts that carry the page: the
 * heading, the opening paragraph(s), the quick-reference "Use" column and the
 * FAQs (rendered together with their FAQPage JSON-LD). The longer English-only
 * sections of the English intro are left out rather than shown untranslated.
 *
 * LaTeX commands, package names and numbers stay verbatim; only prose is
 * translated.
 */
export interface LocalizedIntro {
  title: string;
  /** Opening paragraph(s); use the IntroP and Cmd primitives from ./ui. */
  intro: ReactNode;
  quickRefHeading?: string;
  /**
   * Translated "Use" cells keyed by the row's `latex` from the English
   * module's `quickRef`. Rows without a translation keep the English text.
   */
  use?: Record<string, string>;
  faqHeading?: string;
  faq?: FaqJsonLdItem[];
}

/** Everything one locale file in ./locales exports. */
export interface IntroLocale {
  /** BCP 47 tag, matching lib/seo.ts toLanguageTag (`cn` is `zh`). */
  languageTag: string;
  labels: QuickRefLabels;
  intros: Partial<Record<string, LocalizedIntro>>;
}

export function LocalizedIntroView({
  content,
  rows,
  locale,
}: {
  content: LocalizedIntro;
  /** The English quick-reference rows; only `use` is swapped. */
  rows?: QuickRefRow[];
  locale: IntroLocale;
}) {
  const translatedRows = rows?.map((row) => ({
    ...row,
    use: content.use?.[row.latex] ?? row.use,
  }));
  return (
    <IntroSection>
      <IntroH2>{content.title}</IntroH2>
      {content.intro}
      {translatedRows && translatedRows.length > 0 && (
        <>
          {content.quickRefHeading && <IntroH3>{content.quickRefHeading}</IntroH3>}
          <QuickRefTable rows={translatedRows} labels={locale.labels} />
        </>
      )}
      {content.faq && content.faq.length > 0 && (
        <>
          {content.faqHeading && <IntroH3>{content.faqHeading}</IntroH3>}
          <IntroFaq items={content.faq} inLanguage={locale.languageTag} />
        </>
      )}
    </IntroSection>
  );
}
