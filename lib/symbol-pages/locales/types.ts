/**
 * Translated body copy for one symbol page, keyed in its category file by the
 * page slug (lib/symbol-pages/index.ts). The command, packages, mode and the
 * compiled example document are language-neutral and are not repeated here.
 */
export interface SymbolPageTranslation {
  /** Display name in this language: page title, h1, breadcrumb, FAQ questions. */
  name: string;
  /** One sentence: what the symbol denotes. Leads the meta description. */
  meaning: string;
  /** "Where it is used": fields, conventions, look-alike commands, tips. Commands verbatim. */
  usage: string;
  /**
   * Optional replacement for the math-mode example, only to translate words
   * inside \text{...}. Must stay ASCII so the measured packages and the
   * pdfLaTeX note still hold; leave it out to keep the English example.
   */
  example?: string;
}

/** slug -> translation, for one category in one locale. */
export type SymbolPageTranslations = Record<string, SymbolPageTranslation>;
