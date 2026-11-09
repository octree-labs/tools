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
import LeafletGuide from "./leaflet";
import LectureNotesGuide from "./lecture-notes";
import LetterGuide from "./letter";
import LetterOfRecommendationGuide from "./letter-of-recommendation";
import LiteratureReviewGuide from "./literature-review";
import ManuscriptGuide from "./manuscript";
import MathCheatSheetGuide from "./math-cheat-sheet";
import MathExamGuide from "./math-exam";
import MathExercisesGuide from "./math-exercises";
import MathNotesGuide from "./math-notes";
import MathProblemSetGuide from "./math-problem-set";
import MathematicalDocumentGuide from "./mathematical-document";
import MeetingMinutesGuide from "./meeting-minutes";
import MemoGuide from "./memo";
import MlaPaperGuide from "./mla-paper";
import MlaWorksCitedGuide from "./mla-works-cited";
import MotivationLetterGuide from "./motivation-letter";
import Neurips2026Guide from "./neurips-2026";
import Neurips2027Guide from "./neurips-2027";
import NewsletterGuide from "./newsletter";
import ObituaryGuide from "./obituary";
import PosterGuide from "./poster";
import ProjectReportGuide from "./project-report";
import QuestionnaireGuide from "./questionnaire";
import QuizTemplateGuide from "./quiz-template";
import RecipeBookGuide from "./recipe-book";
import ResearchPaperGuide from "./research-paper";
import ResearchProposalGuide from "./research-proposal";
import ResearchStatementGuide from "./research-statement";
import ResumeGuide from "./resume";
import ScientificReportGuide from "./scientific-report";
import StatementOfPurposeGuide from "./statement-of-purpose";
import SyllabusGuide from "./syllabus";
import TableTemplateGuide from "./table-template";
import TechnicalReportGuide from "./technical-report";
import ThesisGuide from "./thesis";
import WhitePaperGuide from "./white-paper";
import WorksheetGuide from "./worksheet";
import Www2026Guide from "./www-2026";

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
  "leaflet": LeafletGuide,
  "lecture-notes": LectureNotesGuide,
  "letter": LetterGuide,
  "letter-of-recommendation": LetterOfRecommendationGuide,
  "literature-review": LiteratureReviewGuide,
  "manuscript": ManuscriptGuide,
  "math-cheat-sheet": MathCheatSheetGuide,
  "math-exam": MathExamGuide,
  "math-exercises": MathExercisesGuide,
  "math-notes": MathNotesGuide,
  "math-problem-set": MathProblemSetGuide,
  "mathematical-document": MathematicalDocumentGuide,
  "meeting-minutes": MeetingMinutesGuide,
  "memo": MemoGuide,
  "mla-paper": MlaPaperGuide,
  "mla-works-cited": MlaWorksCitedGuide,
  "motivation-letter": MotivationLetterGuide,
  "neurips-2026": Neurips2026Guide,
  "neurips-2027": Neurips2027Guide,
  "newsletter": NewsletterGuide,
  "obituary": ObituaryGuide,
  "poster": PosterGuide,
  "project-report": ProjectReportGuide,
  "questionnaire": QuestionnaireGuide,
  "quiz-template": QuizTemplateGuide,
  "recipe-book": RecipeBookGuide,
  "research-paper": ResearchPaperGuide,
  "research-proposal": ResearchProposalGuide,
  "research-statement": ResearchStatementGuide,
  resume: ResumeGuide,
  "scientific-report": ScientificReportGuide,
  "statement-of-purpose": StatementOfPurposeGuide,
  "syllabus": SyllabusGuide,
  "table-template": TableTemplateGuide,
  "technical-report": TechnicalReportGuide,
  "thesis": ThesisGuide,
  "white-paper": WhitePaperGuide,
  "worksheet": WorksheetGuide,
  "www-2026": Www2026Guide,
};

export function getTemplateGuide(slug: string): ComponentType | undefined {
  return templateGuides[slug];
}
