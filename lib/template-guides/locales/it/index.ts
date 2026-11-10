import type { ComponentType } from "react";
import BeamerPresentationGuide from "./beamer-presentation";
import CoverLetterGuide from "./cover-letter";
import Icml2026Guide from "./icml-2026";
import IeeeConferenceGuide from "./ieee-conference";
import LetterOfRecommendationGuide from "./letter-of-recommendation";
import MathExamGuide from "./math-exam";
import MathNotesGuide from "./math-notes";
import Neurips2026Guide from "./neurips-2026";
import PosterGuide from "./poster";
import ResearchPaperGuide from "./research-paper";
import ResearchProposalGuide from "./research-proposal";
import WhitePaperGuide from "./white-paper";

/** Italian translations of the template guides, keyed by template slug. */
export const itTemplateGuides: Record<string, ComponentType> = {
  "beamer-presentation": BeamerPresentationGuide,
  "cover-letter": CoverLetterGuide,
  "icml-2026": Icml2026Guide,
  "ieee-conference": IeeeConferenceGuide,
  "letter-of-recommendation": LetterOfRecommendationGuide,
  "math-exam": MathExamGuide,
  "math-notes": MathNotesGuide,
  "neurips-2026": Neurips2026Guide,
  poster: PosterGuide,
  "research-paper": ResearchPaperGuide,
  "research-proposal": ResearchProposalGuide,
  "white-paper": WhitePaperGuide,
};
