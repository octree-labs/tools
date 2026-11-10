import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/config";
import { getSymbolCopy } from "../content";
import { getSymbolPageRef, type SymbolPageRef } from "../index";
import type { SymbolPageTranslation, SymbolPageTranslations } from "./types";
import cnAccents from "./cn/accents";
import deAccents from "./de/accents";
import esAccents from "./es/accents";
import frAccents from "./fr/accents";
import itAccents from "./it/accents";
import ptAccents from "./pt/accents";
import ruAccents from "./ru/accents";
import viAccents from "./vi/accents";
import cnArrows from "./cn/arrows";
import deArrows from "./de/arrows";
import esArrows from "./es/arrows";
import frArrows from "./fr/arrows";
import itArrows from "./it/arrows";
import ptArrows from "./pt/arrows";
import ruArrows from "./ru/arrows";
import viArrows from "./vi/arrows";
import cnBoolean from "./cn/boolean";
import deBoolean from "./de/boolean";
import esBoolean from "./es/boolean";
import frBoolean from "./fr/boolean";
import itBoolean from "./it/boolean";
import ptBoolean from "./pt/boolean";
import ruBoolean from "./ru/boolean";
import viBoolean from "./vi/boolean";
import cnBrackets from "./cn/brackets";
import deBrackets from "./de/brackets";
import esBrackets from "./es/brackets";
import frBrackets from "./fr/brackets";
import itBrackets from "./it/brackets";
import ptBrackets from "./pt/brackets";
import ruBrackets from "./ru/brackets";
import viBrackets from "./vi/brackets";
import cnCalculus from "./cn/calculus";
import deCalculus from "./de/calculus";
import esCalculus from "./es/calculus";
import frCalculus from "./fr/calculus";
import itCalculus from "./it/calculus";
import ptCalculus from "./pt/calculus";
import ruCalculus from "./ru/calculus";
import viCalculus from "./vi/calculus";
import cnChemistry from "./cn/chemistry";
import deChemistry from "./de/chemistry";
import esChemistry from "./es/chemistry";
import frChemistry from "./fr/chemistry";
import itChemistry from "./it/chemistry";
import ptChemistry from "./pt/chemistry";
import ruChemistry from "./ru/chemistry";
import viChemistry from "./vi/chemistry";
import cnCombinatorics from "./cn/combinatorics";
import deCombinatorics from "./de/combinatorics";
import esCombinatorics from "./es/combinatorics";
import frCombinatorics from "./fr/combinatorics";
import itCombinatorics from "./it/combinatorics";
import ptCombinatorics from "./pt/combinatorics";
import ruCombinatorics from "./ru/combinatorics";
import viCombinatorics from "./vi/combinatorics";
import cnComplex from "./cn/complex";
import deComplex from "./de/complex";
import esComplex from "./es/complex";
import frComplex from "./fr/complex";
import itComplex from "./it/complex";
import ptComplex from "./pt/complex";
import ruComplex from "./ru/complex";
import viComplex from "./vi/complex";
import cnComputerScience from "./cn/computer-science";
import deComputerScience from "./de/computer-science";
import esComputerScience from "./es/computer-science";
import frComputerScience from "./fr/computer-science";
import itComputerScience from "./it/computer-science";
import ptComputerScience from "./pt/computer-science";
import ruComputerScience from "./ru/computer-science";
import viComputerScience from "./vi/computer-science";
import cnDifferentialGeometry from "./cn/differential-geometry";
import deDifferentialGeometry from "./de/differential-geometry";
import esDifferentialGeometry from "./es/differential-geometry";
import frDifferentialGeometry from "./fr/differential-geometry";
import itDifferentialGeometry from "./it/differential-geometry";
import ptDifferentialGeometry from "./pt/differential-geometry";
import ruDifferentialGeometry from "./ru/differential-geometry";
import viDifferentialGeometry from "./vi/differential-geometry";
import cnFinance from "./cn/finance";
import deFinance from "./de/finance";
import esFinance from "./es/finance";
import frFinance from "./fr/finance";
import itFinance from "./it/finance";
import ptFinance from "./pt/finance";
import ruFinance from "./ru/finance";
import viFinance from "./vi/finance";
import cnFunctions from "./cn/functions";
import deFunctions from "./de/functions";
import esFunctions from "./es/functions";
import frFunctions from "./fr/functions";
import itFunctions from "./it/functions";
import ptFunctions from "./pt/functions";
import ruFunctions from "./ru/functions";
import viFunctions from "./vi/functions";
import cnGameTheory from "./cn/game-theory";
import deGameTheory from "./de/game-theory";
import esGameTheory from "./es/game-theory";
import frGameTheory from "./fr/game-theory";
import itGameTheory from "./it/game-theory";
import ptGameTheory from "./pt/game-theory";
import ruGameTheory from "./ru/game-theory";
import viGameTheory from "./vi/game-theory";
import cnGeometry from "./cn/geometry";
import deGeometry from "./de/geometry";
import esGeometry from "./es/geometry";
import frGeometry from "./fr/geometry";
import itGeometry from "./it/geometry";
import ptGeometry from "./pt/geometry";
import ruGeometry from "./ru/geometry";
import viGeometry from "./vi/geometry";
import cnGraphTheory from "./cn/graph-theory";
import esGraphTheory from "./es/graph-theory";
import frGraphTheory from "./fr/graph-theory";
import ruGraphTheory from "./ru/graph-theory";
import cnGreek from "./cn/greek";
import deGreek from "./de/greek";
import esGreek from "./es/greek";
import frGreek from "./fr/greek";
import itGreek from "./it/greek";
import ptGreek from "./pt/greek";
import ruGreek from "./ru/greek";
import viGreek from "./vi/greek";
import cnLatin from "./cn/latin";
import esLatin from "./es/latin";
import frLatin from "./fr/latin";
import ruLatin from "./ru/latin";
import cnLinearAlgebra from "./cn/linear-algebra";
import esLinearAlgebra from "./es/linear-algebra";
import frLinearAlgebra from "./fr/linear-algebra";
import ruLinearAlgebra from "./ru/linear-algebra";
import cnLogic from "./cn/logic";
import deLogic from "./de/logic";
import esLogic from "./es/logic";
import frLogic from "./fr/logic";
import itLogic from "./it/logic";
import ptLogic from "./pt/logic";
import ruLogic from "./ru/logic";
import viLogic from "./vi/logic";
import cnMachineLearning from "./cn/machine-learning";
import esMachineLearning from "./es/machine-learning";
import frMachineLearning from "./fr/machine-learning";
import ruMachineLearning from "./ru/machine-learning";
import cnMath from "./cn/math";
import deMath from "./de/math";
import esMath from "./es/math";
import frMath from "./fr/math";
import itMath from "./it/math";
import ptMath from "./pt/math";
import ruMath from "./ru/math";
import viMath from "./vi/math";
import cnModalLogic from "./cn/modal-logic";
import esModalLogic from "./es/modal-logic";
import frModalLogic from "./fr/modal-logic";
import ruModalLogic from "./ru/modal-logic";
import cnNumberTheory from "./cn/number-theory";
import esNumberTheory from "./es/number-theory";
import frNumberTheory from "./fr/number-theory";
import ruNumberTheory from "./ru/number-theory";
import cnOperators from "./cn/operators";
import esOperators from "./es/operators";
import frOperators from "./fr/operators";
import ruOperators from "./ru/operators";
import cnOptimization from "./cn/optimization";
import esOptimization from "./es/optimization";
import frOptimization from "./fr/optimization";
import ruOptimization from "./ru/optimization";
import cnOrder from "./cn/order";
import esOrder from "./es/order";
import frOrder from "./fr/order";
import ruOrder from "./ru/order";
import cnPhysics from "./cn/physics";
import dePhysics from "./de/physics";
import esPhysics from "./es/physics";
import frPhysics from "./fr/physics";
import itPhysics from "./it/physics";
import ptPhysics from "./pt/physics";
import ruPhysics from "./ru/physics";
import viPhysics from "./vi/physics";
import cnProbability from "./cn/probability";
import deProbability from "./de/probability";
import esProbability from "./es/probability";
import frProbability from "./fr/probability";
import itProbability from "./it/probability";
import ptProbability from "./pt/probability";
import ruProbability from "./ru/probability";
import viProbability from "./vi/probability";
import cnQuantifiers from "./cn/quantifiers";
import deQuantifiers from "./de/quantifiers";
import esQuantifiers from "./es/quantifiers";
import frQuantifiers from "./fr/quantifiers";
import itQuantifiers from "./it/quantifiers";
import ptQuantifiers from "./pt/quantifiers";
import ruQuantifiers from "./ru/quantifiers";
import viQuantifiers from "./vi/quantifiers";
import cnRelations from "./cn/relations";
import esRelations from "./es/relations";
import frRelations from "./fr/relations";
import ruRelations from "./ru/relations";
import cnSetTheory from "./cn/set-theory";
import deSetTheory from "./de/set-theory";
import esSetTheory from "./es/set-theory";
import frSetTheory from "./fr/set-theory";
import itSetTheory from "./it/set-theory";
import ptSetTheory from "./pt/set-theory";
import ruSetTheory from "./ru/set-theory";
import viSetTheory from "./vi/set-theory";
import cnSpecialFunctions from "./cn/special-functions";
import esSpecialFunctions from "./es/special-functions";
import frSpecialFunctions from "./fr/special-functions";
import ruSpecialFunctions from "./ru/special-functions";
import cnSummation from "./cn/summation";
import esSummation from "./es/summation";
import frSummation from "./fr/summation";
import ruSummation from "./ru/summation";
import cnTensors from "./cn/tensors";
import esTensors from "./es/tensors";
import frTensors from "./fr/tensors";
import ruTensors from "./ru/tensors";
import cnTopology from "./cn/topology";
import esTopology from "./es/topology";
import frTopology from "./fr/topology";
import ruTopology from "./ru/topology";
import cnTrigonometry from "./cn/trigonometry";
import esTrigonometry from "./es/trigonometry";
import frTrigonometry from "./fr/trigonometry";
import ruTrigonometry from "./ru/trigonometry";
import cnUnits from "./cn/units";
import esUnits from "./es/units";
import frUnits from "./fr/units";
import ruUnits from "./ru/units";

export type { SymbolPageTranslation, SymbolPageTranslations } from "./types";

/**
 * locale -> category -> slug -> translated body copy. cn, es, fr and ru cover
 * every category; de, it, pt and vi cover a growing subset. A symbol page is a real
 * alternate in a locale (self canonical, hreflang, sitemap) only when it has
 * an entry here; every other locale renders the English copy under the
 * translated chrome, canonicalises to the English URL and is noindex.
 *
 * To localise another category: add lib/symbol-pages/locales/<locale>/<category>.ts
 * (every slug of the category, see ./types.ts) and register it below.
 */
const TRANSLATIONS: Record<string, Record<string, SymbolPageTranslations>> = {
  cn: {
    "accents": cnAccents,
    "arrows": cnArrows,
    "boolean": cnBoolean,
    "brackets": cnBrackets,
    "calculus": cnCalculus,
    "chemistry": cnChemistry,
    "combinatorics": cnCombinatorics,
    "complex": cnComplex,
    "computer-science": cnComputerScience,
    "differential-geometry": cnDifferentialGeometry,
    "finance": cnFinance,
    "functions": cnFunctions,
    "game-theory": cnGameTheory,
    "geometry": cnGeometry,
    "graph-theory": cnGraphTheory,
    "greek": cnGreek,
    "latin": cnLatin,
    "linear-algebra": cnLinearAlgebra,
    "logic": cnLogic,
    "machine-learning": cnMachineLearning,
    "math": cnMath,
    "modal-logic": cnModalLogic,
    "number-theory": cnNumberTheory,
    "operators": cnOperators,
    "optimization": cnOptimization,
    "order": cnOrder,
    "physics": cnPhysics,
    "probability": cnProbability,
    "quantifiers": cnQuantifiers,
    "relations": cnRelations,
    "set-theory": cnSetTheory,
    "special-functions": cnSpecialFunctions,
    "summation": cnSummation,
    "tensors": cnTensors,
    "topology": cnTopology,
    "trigonometry": cnTrigonometry,
    "units": cnUnits,
  },
  es: {
    "accents": esAccents,
    "arrows": esArrows,
    "boolean": esBoolean,
    "brackets": esBrackets,
    "calculus": esCalculus,
    "chemistry": esChemistry,
    "combinatorics": esCombinatorics,
    "complex": esComplex,
    "computer-science": esComputerScience,
    "differential-geometry": esDifferentialGeometry,
    "finance": esFinance,
    "functions": esFunctions,
    "game-theory": esGameTheory,
    "geometry": esGeometry,
    "graph-theory": esGraphTheory,
    "greek": esGreek,
    "latin": esLatin,
    "linear-algebra": esLinearAlgebra,
    "logic": esLogic,
    "machine-learning": esMachineLearning,
    "math": esMath,
    "modal-logic": esModalLogic,
    "number-theory": esNumberTheory,
    "operators": esOperators,
    "optimization": esOptimization,
    "order": esOrder,
    "physics": esPhysics,
    "probability": esProbability,
    "quantifiers": esQuantifiers,
    "relations": esRelations,
    "set-theory": esSetTheory,
    "special-functions": esSpecialFunctions,
    "summation": esSummation,
    "tensors": esTensors,
    "topology": esTopology,
    "trigonometry": esTrigonometry,
    "units": esUnits,
  },
  fr: {
    "accents": frAccents,
    "arrows": frArrows,
    "boolean": frBoolean,
    "brackets": frBrackets,
    "calculus": frCalculus,
    "chemistry": frChemistry,
    "combinatorics": frCombinatorics,
    "complex": frComplex,
    "computer-science": frComputerScience,
    "differential-geometry": frDifferentialGeometry,
    "finance": frFinance,
    "functions": frFunctions,
    "game-theory": frGameTheory,
    "geometry": frGeometry,
    "graph-theory": frGraphTheory,
    "greek": frGreek,
    "latin": frLatin,
    "linear-algebra": frLinearAlgebra,
    "logic": frLogic,
    "machine-learning": frMachineLearning,
    "math": frMath,
    "modal-logic": frModalLogic,
    "number-theory": frNumberTheory,
    "operators": frOperators,
    "optimization": frOptimization,
    "order": frOrder,
    "physics": frPhysics,
    "probability": frProbability,
    "quantifiers": frQuantifiers,
    "relations": frRelations,
    "set-theory": frSetTheory,
    "special-functions": frSpecialFunctions,
    "summation": frSummation,
    "tensors": frTensors,
    "topology": frTopology,
    "trigonometry": frTrigonometry,
    "units": frUnits,
  },
  ru: {
    "accents": ruAccents,
    "arrows": ruArrows,
    "boolean": ruBoolean,
    "brackets": ruBrackets,
    "calculus": ruCalculus,
    "chemistry": ruChemistry,
    "combinatorics": ruCombinatorics,
    "complex": ruComplex,
    "computer-science": ruComputerScience,
    "differential-geometry": ruDifferentialGeometry,
    "finance": ruFinance,
    "functions": ruFunctions,
    "game-theory": ruGameTheory,
    "geometry": ruGeometry,
    "graph-theory": ruGraphTheory,
    "greek": ruGreek,
    "latin": ruLatin,
    "linear-algebra": ruLinearAlgebra,
    "logic": ruLogic,
    "machine-learning": ruMachineLearning,
    "math": ruMath,
    "modal-logic": ruModalLogic,
    "number-theory": ruNumberTheory,
    "operators": ruOperators,
    "optimization": ruOptimization,
    "order": ruOrder,
    "physics": ruPhysics,
    "probability": ruProbability,
    "quantifiers": ruQuantifiers,
    "relations": ruRelations,
    "set-theory": ruSetTheory,
    "special-functions": ruSpecialFunctions,
    "summation": ruSummation,
    "tensors": ruTensors,
    "topology": ruTopology,
    "trigonometry": ruTrigonometry,
    "units": ruUnits,
  },
  de: {
    "accents": deAccents,
    "arrows": deArrows,
    "boolean": deBoolean,
    "brackets": deBrackets,
    "calculus": deCalculus,
    "chemistry": deChemistry,
    "combinatorics": deCombinatorics,
    "complex": deComplex,
    "computer-science": deComputerScience,
    "differential-geometry": deDifferentialGeometry,
    "finance": deFinance,
    "functions": deFunctions,
    "game-theory": deGameTheory,
    "geometry": deGeometry,
    "greek": deGreek,
    "logic": deLogic,
    "math": deMath,
    "physics": dePhysics,
    "probability": deProbability,
    "quantifiers": deQuantifiers,
    "set-theory": deSetTheory,
  },
  it: {
    "accents": itAccents,
    "arrows": itArrows,
    "boolean": itBoolean,
    "brackets": itBrackets,
    "calculus": itCalculus,
    "chemistry": itChemistry,
    "combinatorics": itCombinatorics,
    "complex": itComplex,
    "computer-science": itComputerScience,
    "differential-geometry": itDifferentialGeometry,
    "finance": itFinance,
    "functions": itFunctions,
    "game-theory": itGameTheory,
    "geometry": itGeometry,
    "greek": itGreek,
    "logic": itLogic,
    "math": itMath,
    "physics": itPhysics,
    "probability": itProbability,
    "quantifiers": itQuantifiers,
    "set-theory": itSetTheory,
  },
  pt: {
    "accents": ptAccents,
    "arrows": ptArrows,
    "boolean": ptBoolean,
    "brackets": ptBrackets,
    "calculus": ptCalculus,
    "chemistry": ptChemistry,
    "combinatorics": ptCombinatorics,
    "complex": ptComplex,
    "computer-science": ptComputerScience,
    "differential-geometry": ptDifferentialGeometry,
    "finance": ptFinance,
    "functions": ptFunctions,
    "game-theory": ptGameTheory,
    "geometry": ptGeometry,
    "greek": ptGreek,
    "logic": ptLogic,
    "math": ptMath,
    "physics": ptPhysics,
    "probability": ptProbability,
    "quantifiers": ptQuantifiers,
    "set-theory": ptSetTheory,
  },
  vi: {
    "accents": viAccents,
    "arrows": viArrows,
    "boolean": viBoolean,
    "brackets": viBrackets,
    "calculus": viCalculus,
    "chemistry": viChemistry,
    "combinatorics": viCombinatorics,
    "complex": viComplex,
    "computer-science": viComputerScience,
    "differential-geometry": viDifferentialGeometry,
    "finance": viFinance,
    "functions": viFunctions,
    "game-theory": viGameTheory,
    "geometry": viGeometry,
    "greek": viGreek,
    "logic": viLogic,
    "math": viMath,
    "physics": viPhysics,
    "probability": viProbability,
    "quantifiers": viQuantifiers,
    "set-theory": viSetTheory,
  },
};

/** Locales that have translated symbol copy for at least one category. */
export const SYMBOL_PAGE_TEXT_LOCALES: readonly string[] = Object.keys(TRANSLATIONS);

/** Categories translated in `locale` (English: every category). */
export function translatedSymbolCategories(locale: string): string[] {
  return Object.keys(TRANSLATIONS[locale] ?? {});
}

/** Slugs with a translation in one locale's category file. */
export function translatedSymbolSlugs(locale: string, category: string): string[] {
  return Object.keys(TRANSLATIONS[locale]?.[category] ?? {});
}

export function getSymbolPageTranslation(
  category: string,
  slug: string,
  locale: string,
): SymbolPageTranslation | undefined {
  if (locale === DEFAULT_LOCALE) return undefined;
  return TRANSLATIONS[locale]?.[category]?.[slug];
}

/** English pages always count; any other locale only with a translation. */
export function isSymbolPageLocalized(category: string, slug: string, locale: string): boolean {
  return locale === DEFAULT_LOCALE || getSymbolPageTranslation(category, slug, locale) !== undefined;
}

/** The locales in which this page is a real alternate, in LOCALES order (English first). */
export function symbolPageLocales(ref: Pick<SymbolPageRef, "category" | "slug">): string[] {
  return LOCALES.filter((locale) => isSymbolPageLocalized(ref.category, ref.slug, locale));
}

/** Body text of a symbol page in one locale, falling back to English field by field. */
export interface SymbolPageText {
  name: string;
  meaning: string;
  usage: string;
  example: string;
  /** True for English and for translated pairs: the page is indexable in this locale. */
  localized: boolean;
}

export function getSymbolPageText(category: string, slug: string, locale: string): SymbolPageText | undefined {
  const ref = getSymbolPageRef(category, slug);
  const copy = ref && getSymbolCopy(ref.latex);
  if (!ref || !copy) return undefined;
  const local = getSymbolPageTranslation(category, slug, locale);
  return {
    name: local?.name ?? ref.name,
    meaning: local?.meaning ?? copy.meaning,
    usage: local?.usage ?? copy.usage,
    example: local?.example ?? copy.example,
    localized: locale === DEFAULT_LOCALE || local !== undefined,
  };
}
