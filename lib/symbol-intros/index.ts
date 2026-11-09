import type { ComponentType } from "react";
import AccentsIntro from "./accents";
import ArrowsIntro from "./arrows";
import BooleanIntro from "./boolean";
import BracketsIntro from "./brackets";
import CalculusIntro from "./calculus";
import ChemistryIntro from "./chemistry";
import CombinatoricsIntro from "./combinatorics";
import ComplexIntro from "./complex";
import ComputerScienceIntro from "./computer-science";
import DifferentialGeometryIntro from "./differential-geometry";
import FinanceIntro from "./finance";
import FunctionsIntro from "./functions";
import GameTheoryIntro from "./game-theory";
import GeometryIntro from "./geometry";
import LatinIntro from "./latin";
import LogicIntro from "./logic";
import MachineLearningIntro from "./machine-learning";
import NumberTheoryIntro from "./number-theory";
import OrderIntro from "./order";
import PhysicsIntro from "./physics";
import ProbabilityIntro from "./probability";

/**
 * Editorial intros rendered above the symbol grid on category pages.
 *
 * Intros are English-only content aimed at search terms (the pages otherwise
 * contain almost no indexable text) and render in every locale, like the
 * template guides in lib/template-guides. Add one by creating
 * `lib/symbol-intros/<slug>.tsx` and registering it here, keyed by the URL slug.
 */
const symbolIntros: Record<string, ComponentType> = {
  accents: AccentsIntro,
  arrows: ArrowsIntro,
  boolean: BooleanIntro,
  brackets: BracketsIntro,
  calculus: CalculusIntro,
  chemistry: ChemistryIntro,
  combinatorics: CombinatoricsIntro,
  complex: ComplexIntro,
  "computer-science": ComputerScienceIntro,
  "differential-geometry": DifferentialGeometryIntro,
  finance: FinanceIntro,
  functions: FunctionsIntro,
  "game-theory": GameTheoryIntro,
  geometry: GeometryIntro,
  latin: LatinIntro,
  logic: LogicIntro,
  "machine-learning": MachineLearningIntro,
  "number-theory": NumberTheoryIntro,
  order: OrderIntro,
  physics: PhysicsIntro,
  probability: ProbabilityIntro,
};

export function getSymbolIntro(slug: string): ComponentType | undefined {
  return symbolIntros[slug];
}
