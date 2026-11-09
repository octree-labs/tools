import content from "./content.json";
import facts from "./facts.json";

/** Hand-written copy for one command (see scripts/symbol-facts.py for how facts are produced). */
export interface SymbolCopy {
  /** One sentence: what the symbol denotes. Leads the meta description. */
  meaning: string;
  /** "Where it is used": fields, conventions, look-alike commands, tips. */
  usage: string;
  /** Math-mode snippet (no $) using the command in context. */
  example: string;
}

/**
 * Facts measured by compiling every command (scripts/symbol-facts.py), not
 * written by hand: the packages it needs, whether it works in text mode, the
 * packages the full example needs.
 */
export interface SymbolFacts {
  packages: string[];
  mode: "math" | "text" | "both";
  examplePackages: string[];
}

const copy = content as Record<string, SymbolCopy>;
const measured = facts as Record<string, SymbolFacts>;

export function getSymbolCopy(latex: string): SymbolCopy | undefined {
  return copy[latex];
}

export function getSymbolFacts(latex: string): SymbolFacts | undefined {
  return measured[latex];
}
