import type { ComponentType } from "react";
import { deTemplateGuides } from "./de";

/**
 * Translated template guides, one map per route locale (`cn` is Simplified
 * Chinese), keyed by template slug. The English guide in
 * `lib/template-guides/<slug>.tsx` is the source and renders in every locale
 * without a translation.
 *
 * To add a locale, create `./<locale>/index.ts` exporting a
 * `Record<string, ComponentType>` of the translated guides and register it
 * here. Translated guides pass `inLanguage` to `GuideFaq` so the FAQPage
 * JSON-LD carries the page language.
 */
export const templateGuideLocales: Partial<Record<string, Record<string, ComponentType>>> = {
  de: deTemplateGuides,
};
