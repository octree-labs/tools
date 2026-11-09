import type { ComponentType } from "react";
import Aaai2027Guide from "./aaai-2027";
import AcademicCvGuide from "./academic-cv";
import AnnotatedBibliographyGuide from "./annotated-bibliography";
import ApaStudentPaperGuide from "./apa-student-paper";
import ApaTitlePageGuide from "./apa-title-page";
import AtsResumeGuide from "./ats-resume";
import BeamerDarkGuide from "./beamer-dark";
import BeamerPresentationGuide from "./beamer-presentation";
import CornellNotesGuide from "./cornell-notes";
import ConferencePosterGuide from "./conference-poster";
import CoverLetterGuide from "./cover-letter";
import Emnlp2026Guide from "./emnlp-2026";
import HarvardResumeGuide from "./harvard-resume";
import Icml2026Guide from "./icml-2026";
import IeeeConferenceGuide from "./ieee-conference";
import JfmPaperGuide from "./jfm-paper";
import JakesResumeGuide from "./jakes-resume";
import LabReportGuide from "./lab-report";
import LetterOfRecommendationGuide from "./letter-of-recommendation";
import LiteratureReviewGuide from "./literature-review";
import MeetingMinutesGuide from "./meeting-minutes";
import MlaPaperGuide from "./mla-paper";
import MlaWorksCitedGuide from "./mla-works-cited";
import Neurips2026Guide from "./neurips-2026";
import Neurips2027Guide from "./neurips-2027";
import ResearchProposalGuide from "./research-proposal";
import ResumeGuide from "./resume";

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
  "annotated-bibliography": AnnotatedBibliographyGuide,
  "apa-student-paper": ApaStudentPaperGuide,
  "apa-title-page": ApaTitlePageGuide,
  "ats-resume": AtsResumeGuide,
  "beamer-dark": BeamerDarkGuide,
  "beamer-presentation": BeamerPresentationGuide,
  "cornell-notes": CornellNotesGuide,
  "conference-poster": ConferencePosterGuide,
  "cover-letter": CoverLetterGuide,
  "emnlp-2026": Emnlp2026Guide,
  "harvard-resume": HarvardResumeGuide,
  "icml-2026": Icml2026Guide,
  "ieee-conference": IeeeConferenceGuide,
  "jfm-paper": JfmPaperGuide,
  "jakes-resume": JakesResumeGuide,
  "lab-report": LabReportGuide,
  "letter-of-recommendation": LetterOfRecommendationGuide,
  "literature-review": LiteratureReviewGuide,
  "meeting-minutes": MeetingMinutesGuide,
  "mla-paper": MlaPaperGuide,
  "mla-works-cited": MlaWorksCitedGuide,
  "neurips-2026": Neurips2026Guide,
  "neurips-2027": Neurips2027Guide,
  "research-proposal": ResearchProposalGuide,
  resume: ResumeGuide,
};

export function getTemplateGuide(slug: string): ComponentType | undefined {
  return templateGuides[slug];
}
