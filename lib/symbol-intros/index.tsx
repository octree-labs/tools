import type { ComponentType, ReactNode } from "react";
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
import GraphTheoryIntro from "./graph-theory";
import GreekIntro from "./greek";
import LatinIntro from "./latin";
import LinearAlgebraIntro from "./linear-algebra";
import LogicIntro from "./logic";
import MachineLearningIntro from "./machine-learning";
import MathIntro from "./math";
import ModalLogicIntro from "./modal-logic";
import NumberTheoryIntro from "./number-theory";
import OperatorsIntro from "./operators";
import OptimizationIntro from "./optimization";
import OrderIntro from "./order";
import PhysicsIntro from "./physics";
import ProbabilityIntro from "./probability";
import QuantifiersIntro from "./quantifiers";
import RelationsIntro from "./relations";
import SetTheoryIntro from "./set-theory";
import SpecialFunctionsIntro from "./special-functions";
import SummationIntro from "./summation";
import TensorsIntro from "./tensors";
import TopologyIntro from "./topology";
import TrigonometryIntro from "./trigonometry";
import UnitsIntro from "./units";
import { LocalizedIntroView, type IntroLocale } from "./localized";
import { quickRefs } from "./quick-refs";
import cn from "./locales/cn";
import es from "./locales/es";
import fr from "./locales/fr";
import ru from "./locales/ru";

/**
 * Editorial intros rendered above the symbol grid on category pages.
 *
 * Intros are aimed at search terms (the pages otherwise contain almost no
 * indexable text). The English intro is the source and renders in every
 * locale that has no translation. Add one by creating
 * `lib/symbol-intros/<slug>.tsx` and registering it here, keyed by the URL slug.
 *
 * Translations live in `lib/symbol-intros/locales/<locale>.tsx`, one file per
 * route locale (`cn` is Simplified Chinese, emitted as `zh`), keyed by the
 * same slug. To translate another page, export its `quickRef` from the
 * English module, add it to `./quick-refs.ts` and add an entry to each locale
 * file. To add a locale, create its file and register it in `introLocales`.
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
  "graph-theory": GraphTheoryIntro,
  greek: GreekIntro,
  latin: LatinIntro,
  "linear-algebra": LinearAlgebraIntro,
  logic: LogicIntro,
  "machine-learning": MachineLearningIntro,
  math: MathIntro,
  "modal-logic": ModalLogicIntro,
  "number-theory": NumberTheoryIntro,
  operators: OperatorsIntro,
  optimization: OptimizationIntro,
  order: OrderIntro,
  physics: PhysicsIntro,
  probability: ProbabilityIntro,
  quantifiers: QuantifiersIntro,
  relations: RelationsIntro,
  "set-theory": SetTheoryIntro,
  "special-functions": SpecialFunctionsIntro,
  summation: SummationIntro,
  tensors: TensorsIntro,
  topology: TopologyIntro,
  trigonometry: TrigonometryIntro,
  units: UnitsIntro,
};

const introLocales: Partial<Record<string, IntroLocale>> = { cn, es, fr, ru };

/**
 * The intro for a category page in the given route locale, falling back to
 * the English intro when there is no translation.
 */
export function getSymbolIntro(slug: string, locale = "en"): ReactNode {
  const introLocale = introLocales[locale];
  const translated = introLocale?.intros[slug];
  if (introLocale && translated) {
    return (
      <LocalizedIntroView content={translated} rows={quickRefs[slug]} locale={introLocale} />
    );
  }
  const Intro = symbolIntros[slug];
  return Intro ? <Intro /> : undefined;
}
