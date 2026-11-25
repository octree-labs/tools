import type { ComponentType } from "react";
import BeamerPresentationGuideEs from "./beamer-presentation";
import CoverLetterGuideEs from "./cover-letter";
import Icml2026GuideEs from "./icml-2026";
import IeeeConferenceGuideEs from "./ieee-conference";
import LetterOfRecommendationGuideEs from "./letter-of-recommendation";
import MathExamGuideEs from "./math-exam";
import MathNotesGuideEs from "./math-notes";
import Neurips2026GuideEs from "./neurips-2026";
import PosterGuideEs from "./poster";
import ResearchPaperGuideEs from "./research-paper";
import ResearchProposalGuideEs from "./research-proposal";
import WhitePaperGuideEs from "./white-paper";

/** Spanish (`es`) translations of template guides, keyed by template slug. */
export const esTemplateGuides: Record<string, ComponentType> = {
  "beamer-presentation": BeamerPresentationGuideEs,
  "cover-letter": CoverLetterGuideEs,
  "icml-2026": Icml2026GuideEs,
  "ieee-conference": IeeeConferenceGuideEs,
  "letter-of-recommendation": LetterOfRecommendationGuideEs,
  "math-exam": MathExamGuideEs,
  "math-notes": MathNotesGuideEs,
  "neurips-2026": Neurips2026GuideEs,
  poster: PosterGuideEs,
  "research-paper": ResearchPaperGuideEs,
  "research-proposal": ResearchProposalGuideEs,
  "white-paper": WhitePaperGuideEs,
};
