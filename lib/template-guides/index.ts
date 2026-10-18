import type { ComponentType } from "react";
import ApaTitlePageGuide from "./apa-title-page";
import BeamerDarkGuide from "./beamer-dark";
import Emnlp2026Guide from "./emnlp-2026";
import HarvardResumeGuide from "./harvard-resume";
import JakesResumeGuide from "./jakes-resume";
import LetterOfRecommendationGuide from "./letter-of-recommendation";

/**
 * Long-form guides rendered below the preview on template pages.
 *
 * Guides are English-only editorial content aimed at search terms; they render
 * in every locale. Add a new guide by creating `lib/template-guides/<slug>.tsx`
 * and registering it here.
 */
const templateGuides: Record<string, ComponentType> = {
  "apa-title-page": ApaTitlePageGuide,
  "beamer-dark": BeamerDarkGuide,
  "emnlp-2026": Emnlp2026Guide,
  "harvard-resume": HarvardResumeGuide,
  "jakes-resume": JakesResumeGuide,
  "letter-of-recommendation": LetterOfRecommendationGuide,
};

export function getTemplateGuide(slug: string): ComponentType | undefined {
  return templateGuides[slug];
}
