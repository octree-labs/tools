import type { QuickRefRow } from "./ui";
import { quickRef as arrowsQuickRef } from "./arrows";
import { quickRef as chemistryQuickRef } from "./chemistry";
import { quickRef as functionsQuickRef } from "./functions";
import { quickRef as greekQuickRef } from "./greek";
import { quickRef as mathQuickRef } from "./math";
import { quickRef as physicsQuickRef } from "./physics";
import { quickRef as probabilityQuickRef } from "./probability";
import { quickRef as quantifiersQuickRef } from "./quantifiers";
import { quickRef as setTheoryQuickRef } from "./set-theory";

/** English quick-reference rows that translated intros reuse (commands stay verbatim). */
export const quickRefs: Record<string, QuickRefRow[]> = {
  arrows: arrowsQuickRef,
  chemistry: chemistryQuickRef,
  functions: functionsQuickRef,
  greek: greekQuickRef,
  math: mathQuickRef,
  physics: physicsQuickRef,
  probability: probabilityQuickRef,
  quantifiers: quantifiersQuickRef,
  "set-theory": setTheoryQuickRef,
};
