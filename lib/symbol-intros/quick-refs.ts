import type { QuickRefRow } from "./ui";
import { quickRef as arrowsQuickRef } from "./arrows";
import { quickRef as booleanQuickRef } from "./boolean";
import { quickRef as bracketsQuickRef } from "./brackets";
import { quickRef as calculusQuickRef } from "./calculus";
import { quickRef as chemistryQuickRef } from "./chemistry";
import { quickRef as combinatoricsQuickRef } from "./combinatorics";
import { quickRef as complexQuickRef } from "./complex";
import { quickRef as computerScienceQuickRef } from "./computer-science";
import { quickRef as differentialGeometryQuickRef } from "./differential-geometry";
import { quickRef as financeQuickRef } from "./finance";
import { quickRef as functionsQuickRef } from "./functions";
import { quickRef as gameTheoryQuickRef } from "./game-theory";
import { quickRef as geometryQuickRef } from "./geometry";
import { quickRef as graphTheoryQuickRef } from "./graph-theory";
import { quickRef as greekQuickRef } from "./greek";
import { quickRef as latinQuickRef } from "./latin";
import { quickRef as linearAlgebraQuickRef } from "./linear-algebra";
import { quickRef as machineLearningQuickRef } from "./machine-learning";
import { quickRef as mathQuickRef } from "./math";
import { quickRef as modalLogicQuickRef } from "./modal-logic";
import { quickRef as numberTheoryQuickRef } from "./number-theory";
import { quickRef as operatorsQuickRef } from "./operators";
import { quickRef as optimizationQuickRef } from "./optimization";
import { quickRef as orderQuickRef } from "./order";
import { quickRef as physicsQuickRef } from "./physics";
import { quickRef as probabilityQuickRef } from "./probability";
import { quickRef as quantifiersQuickRef } from "./quantifiers";
import { quickRef as relationsQuickRef } from "./relations";
import { quickRef as setTheoryQuickRef } from "./set-theory";
import { quickRef as specialFunctionsQuickRef } from "./special-functions";
import { quickRef as summationQuickRef } from "./summation";
import { quickRef as tensorsQuickRef } from "./tensors";
import { quickRef as topologyQuickRef } from "./topology";
import { quickRef as trigonometryQuickRef } from "./trigonometry";
import { quickRef as unitsQuickRef } from "./units";

/** English quick-reference rows that translated intros reuse (commands stay verbatim). */
export const quickRefs: Record<string, QuickRefRow[]> = {
  arrows: arrowsQuickRef,
  boolean: booleanQuickRef,
  brackets: bracketsQuickRef,
  calculus: calculusQuickRef,
  chemistry: chemistryQuickRef,
  combinatorics: combinatoricsQuickRef,
  complex: complexQuickRef,
  "computer-science": computerScienceQuickRef,
  "differential-geometry": differentialGeometryQuickRef,
  finance: financeQuickRef,
  functions: functionsQuickRef,
  "game-theory": gameTheoryQuickRef,
  geometry: geometryQuickRef,
  "graph-theory": graphTheoryQuickRef,
  greek: greekQuickRef,
  latin: latinQuickRef,
  "linear-algebra": linearAlgebraQuickRef,
  "machine-learning": machineLearningQuickRef,
  math: mathQuickRef,
  "modal-logic": modalLogicQuickRef,
  "number-theory": numberTheoryQuickRef,
  operators: operatorsQuickRef,
  optimization: optimizationQuickRef,
  order: orderQuickRef,
  physics: physicsQuickRef,
  probability: probabilityQuickRef,
  quantifiers: quantifiersQuickRef,
  relations: relationsQuickRef,
  "set-theory": setTheoryQuickRef,
  "special-functions": specialFunctionsQuickRef,
  summation: summationQuickRef,
  tensors: tensorsQuickRef,
  topology: topologyQuickRef,
  trigonometry: trigonometryQuickRef,
  units: unitsQuickRef,
};
