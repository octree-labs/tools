import * as S from "@/lib/symbols";
import type { SymbolItem } from "@/lib/symbols";

/**
 * Category slug -> symbol list and English name, in the order a command's
 * "home" category is picked. A command listed in several categories
 * (\rightarrow is in arrows, chemistry) gets ONE page, under the first
 * category here that lists it; the other categories link to that page.
 * General-purpose categories therefore come first.
 */
export const SYMBOL_CATEGORIES: { slug: string; name: string; symbols: SymbolItem[] }[] = [
  { slug: "math", name: "Math", symbols: S.mathSymbols },
  { slug: "greek", name: "Greek letters", symbols: S.greekSymbols },
  { slug: "latin", name: "Latin and accented letters", symbols: S.latinSymbols },
  { slug: "arrows", name: "Arrows", symbols: S.arrowSymbols },
  { slug: "accents", name: "Accents", symbols: S.accentSymbols },
  { slug: "brackets", name: "Brackets and delimiters", symbols: S.bracketSymbols },
  { slug: "relations", name: "Relations", symbols: S.relationSymbols },
  { slug: "operators", name: "Operators", symbols: S.operatorSymbols },
  { slug: "set-theory", name: "Set theory", symbols: S.setTheorySymbols },
  { slug: "logic", name: "Logic", symbols: S.logicSymbols },
  { slug: "calculus", name: "Calculus", symbols: S.calculusSymbols },
  { slug: "linear-algebra", name: "Linear algebra", symbols: S.linearAlgebraSymbols },
  { slug: "probability", name: "Probability and statistics", symbols: S.probabilitySymbols },
  { slug: "summation", name: "Sums and big operators", symbols: S.summationSymbols },
  { slug: "functions", name: "Functions", symbols: S.functionSymbols },
  { slug: "trigonometry", name: "Trigonometry", symbols: S.trigSymbols },
  { slug: "geometry", name: "Geometry", symbols: S.geometrySymbols },
  { slug: "number-theory", name: "Number theory", symbols: S.numberTheorySymbols },
  { slug: "order", name: "Order relations", symbols: S.orderSymbols },
  { slug: "boolean", name: "Boolean algebra", symbols: S.booleanSymbols },
  { slug: "quantifiers", name: "Quantifiers", symbols: S.quantifierSymbols },
  { slug: "complex", name: "Complex numbers", symbols: S.complexSymbols },
  { slug: "topology", name: "Topology", symbols: S.topologySymbols },
  { slug: "physics", name: "Physics", symbols: S.physicsSymbols },
  { slug: "chemistry", name: "Chemistry", symbols: S.chemistrySymbols },
  { slug: "units", name: "Units", symbols: S.unitSymbols },
  { slug: "computer-science", name: "Computer science", symbols: S.csSymbols },
  { slug: "machine-learning", name: "Machine learning", symbols: S.mlSymbols },
  { slug: "optimization", name: "Optimization", symbols: S.optimizationSymbols },
  { slug: "finance", name: "Finance", symbols: S.financeSymbols },
  { slug: "graph-theory", name: "Graph theory", symbols: S.graphSymbols },
  { slug: "combinatorics", name: "Combinatorics", symbols: S.combinatoricsSymbols },
  { slug: "special-functions", name: "Special functions", symbols: S.specialFunctionSymbols },
  { slug: "differential-geometry", name: "Differential geometry", symbols: S.diffGeoSymbols },
  { slug: "tensors", name: "Tensors", symbols: S.tensorSymbols },
  { slug: "modal-logic", name: "Modal logic", symbols: S.modalSymbols },
  { slug: "game-theory", name: "Game theory", symbols: S.gameTheorySymbols },
];
