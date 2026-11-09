import type { ReactNode } from "react";
import { getFaqJsonLd, serializeJsonLd, type FaqJsonLdItem } from "@/lib/json-ld";

/**
 * Editorial block rendered below a tool. It is a server component (no hooks)
 * so it is part of the static HTML in every locale. Each tool keeps its
 * English copy in its own seo-content.tsx and passes it here; translations
 * live in lib/tool-seo/locales and are picked by LocalizedToolSeoContent.
 */

export interface ToolSeoItem {
  title: string;
  body: ReactNode;
}

export interface ToolSeoContentProps {
  /** The H2; it carries the page's main search phrase. */
  heading: string;
  /** What the tool does, which engine runs it, and its limits. */
  intro: ReactNode;
  stepsHeading: string;
  steps: ToolSeoItem[];
  tipsHeading?: string;
  tips?: ToolSeoItem[];
  faqHeading: string;
  /** Rendered as a list and as FAQPage JSON-LD; keep answers plain text. */
  faq: FaqJsonLdItem[];
  /** Closing line with the internal links (learn page, related tools). */
  related: ReactNode;
  /** BCP 47 tag of a translated block, emitted as the FAQPage inLanguage. */
  inLanguage?: string;
}

export function ToolSeoContent({
  heading,
  intro,
  stepsHeading,
  steps,
  tipsHeading,
  tips,
  faqHeading,
  faq,
  related,
  inLanguage,
}: ToolSeoContentProps) {
  // Chinese prose closes a run-in title with a full-width colon, not "."
  const titleEnd = inLanguage === "zh" ? "：" : ".";
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 pb-20 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">{heading}</h2>
        <div className="space-y-4 mb-10">{intro}</div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{stepsHeading}</h3>
        <ol className="list-decimal pl-6 space-y-3 mb-10">
          {steps.map((step) => (
            <li key={step.title}>
              <span className="font-medium text-gray-900">{step.title}{titleEnd}</span> {step.body}
            </li>
          ))}
        </ol>

        {tipsHeading && tips && tips.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{tipsHeading}</h3>
            <ul className="list-disc pl-6 space-y-3 mb-10">
              {tips.map((tip) => (
                <li key={tip.title}>
                  <span className="font-medium text-gray-900">{tip.title}{titleEnd}</span> {tip.body}
                </li>
              ))}
            </ul>
          </>
        )}

        <h3 className="text-xl font-semibold text-gray-900 mb-4">{faqHeading}</h3>
        <dl className="space-y-6 mb-10">
          {faq.map((item) => (
            <div key={item.question}>
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="text-sm text-gray-600">{related}</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(getFaqJsonLd(faq, inLanguage)) }}
        />
      </div>
    </section>
  );
}
