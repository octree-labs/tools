import type { ComponentType } from "react";
import BeamerPresentationGuideCn from "./beamer-presentation";
import CoverLetterGuideCn from "./cover-letter";
import Icml2026GuideCn from "./icml-2026";
import IeeeConferenceGuideCn from "./ieee-conference";
import LetterOfRecommendationGuideCn from "./letter-of-recommendation";
import MathExamGuideCn from "./math-exam";
import MathNotesGuideCn from "./math-notes";
import Neurips2026GuideCn from "./neurips-2026";
import PosterGuideCn from "./poster";
import ResearchPaperGuideCn from "./research-paper";
import ResearchProposalGuideCn from "./research-proposal";
import WhitePaperGuideCn from "./white-paper";

/** Simplified Chinese (`cn` route, `zh` content language) template guides. */
export const cnTemplateGuides: Record<string, ComponentType> = {
  "beamer-presentation": BeamerPresentationGuideCn,
  "cover-letter": CoverLetterGuideCn,
  "icml-2026": Icml2026GuideCn,
  "ieee-conference": IeeeConferenceGuideCn,
  "letter-of-recommendation": LetterOfRecommendationGuideCn,
  "math-exam": MathExamGuideCn,
  "math-notes": MathNotesGuideCn,
  "neurips-2026": Neurips2026GuideCn,
  poster: PosterGuideCn,
  "research-paper": ResearchPaperGuideCn,
  "research-proposal": ResearchProposalGuideCn,
  "white-paper": WhitePaperGuideCn,
};
