export interface TemplateJsonLd {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  programmingLanguage: string;
  codeRepository: string;
  author: {
    "@type": string;
    name: string;
  };
}

export const getTemplateJsonLd = (
  title: string,
  description: string
): TemplateJsonLd => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    // "Letter of Recommendation Template" -> "Letter of Recommendation LaTeX Template",
    // never "... Template LaTeX Template".
    name: /\btemplate$/i.test(title)
      ? title.replace(/\s*template$/i, " LaTeX Template")
      : `${title} LaTeX Template`,
    description: description,
    programmingLanguage: "LaTeX",
    codeRepository: "https://tools.useoctree.com/templates",
    author: {
      "@type": "Organization",
      name: "Octree",
    },
  };
};


export interface FaqJsonLdItem {
  question: string;
  answer: string;
}

/** schema.org FAQPage markup for a list of question/answer pairs. */
export const getFaqJsonLd = (items: FaqJsonLdItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
};

/**
 * Serialises JSON-LD for a <script type="application/ld+json"> tag, escaping
 * `<` so user-visible text can never close the script element.
 */
export const serializeJsonLd = (data: unknown): string =>
  JSON.stringify(data).replace(/</g, "\\u003c");
