import type { ComponentType } from "react";
import Aaai2027Guide from "./aaai-2027";
import AcademicCvGuide from "./academic-cv";
import ApaTitlePageGuide from "./apa-title-page";
import BeamerDarkGuide from "./beamer-dark";
import ConferencePosterGuide from "./conference-poster";
import Emnlp2026Guide from "./emnlp-2026";
import HarvardResumeGuide from "./harvard-resume";
import IeeeConferenceGuide from "./ieee-conference";
import JfmPaperGuide from "./jfm-paper";
import JakesResumeGuide from "./jakes-resume";
import LetterOfRecommendationGuide from "./letter-of-recommendation";
import Neurips2027Guide from "./neurips-2027";

/**
 * Long-form guides rendered below the preview on template pages.
 *
 * Guides are English-only editorial content aimed at search terms; they render
 * in every locale. Add a new guide by creating `lib/template-guides/<slug>.tsx`
 * and registering it here.
 */
const templateGuides: Record<string, ComponentType> = {
  "aaai-2027": Aaai2027Guide,
  "academic-cv": AcademicCvGuide,
  "apa-title-page": ApaTitlePageGuide,
  "beamer-dark": BeamerDarkGuide,
  "conference-poster": ConferencePosterGuide,
  "emnlp-2026": Emnlp2026Guide,
  "harvard-resume": HarvardResumeGuide,
  "ieee-conference": IeeeConferenceGuide,
  "jfm-paper": JfmPaperGuide,
  "jakes-resume": JakesResumeGuide,
  "letter-of-recommendation": LetterOfRecommendationGuide,
  "neurips-2027": Neurips2027Guide,
};

export function getTemplateGuide(slug: string): ComponentType | undefined {
  return templateGuides[slug];
}
