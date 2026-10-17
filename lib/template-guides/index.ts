import type { ComponentType } from "react";
import JakesResumeGuide from "./jakes-resume";

/**
 * Long-form guides rendered below the preview on template pages.
 *
 * Guides are English-only editorial content aimed at search terms; they render
 * in every locale. Add a new guide by creating `lib/template-guides/<slug>.tsx`
 * and registering it here.
 */
const templateGuides: Record<string, ComponentType> = {
  "jakes-resume": JakesResumeGuide,
};

export function getTemplateGuide(slug: string): ComponentType | undefined {
  return templateGuides[slug];
}
