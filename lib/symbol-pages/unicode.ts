import katex from "katex";

const MANUAL: Record<string, string> = {
  "\\ne": "≠",
  "\\varphi": "φ",
  "\\ell": "ℓ",
  "\\implies": "⟹",
  "\\iff": "⟺",
  "\\not\\subset": "⊄",
  "\\not\\equiv": "≢",
  "\\mathbb{N}": "ℕ",
  "\\mathbb{Z}": "ℤ",
  "\\mathbb{Q}": "ℚ",
  "\\mathbb{R}": "ℝ",
  "\\mathbb{C}": "ℂ",
  "\\mathbb{P}": "ℙ",
  "\\mathbb{H}": "ℍ",
  "\\mathbb{E}": "𝔼",
  "^{\\circ}": "°",
};

const DECODE: Record<string, string> = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#x27;": "'" };

/**
 * The single Unicode character a command stands for (\neq -> ≠), read from
 * KaTeX's MathML output. Undefined for constructs (\frac{a}{b}), plain ASCII
 * (+, <) and anything that renders to more than one character.
 */
export function unicodeFor(latex: string): string | undefined {
  if (MANUAL[latex]) return MANUAL[latex];
  let mathml: string;
  try {
    mathml = katex.renderToString(latex, { output: "mathml", throwOnError: true, strict: false });
  } catch {
    return undefined;
  }
  const semantics = mathml.match(/<semantics>([\s\S]*)<annotation/)?.[1] ?? "";
  const leaves = [...semantics.matchAll(/<(mi|mo|mn|mtext)[^>]*>([^<]*)<\/\1>/g)].map((m) =>
    m[2].replace(/&[#\w]+;/g, (e) => DECODE[e] ?? e).trim(),
  );
  if (leaves.length !== 1) return undefined;
  const chars = [...leaves[0]];
  if (chars.length !== 1 || chars[0].charCodeAt(0) < 0x80) return undefined;
  return chars[0];
}
