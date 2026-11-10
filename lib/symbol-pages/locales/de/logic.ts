import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/logic/<slug>. */
const text: SymbolPageTranslations = {
  "not-exists": {
    name: "Negierter Existenzquantor",
    meaning: "Negierter Existenzquantor: Es gibt kein Objekt mit der angegebenen Eigenschaft.",
    usage: "\\nexists x \\in \\mathbb{Q} : x^2 = 2 besagt, dass 2 keine rationale Quadratwurzel hat. Das Zeichen ist ein durchgestrichenes \\exists, als eigenständige Glyphe gestaltet; \\not\\exists funktioniert auch, doch der Schrägstrich sitzt dabei womöglich falsch. Logisch ist es äquivalent zu \\forall x\\, \\neg P(x), und viele Logiker schreiben der Klarheit halber lieber \\neg \\exists x. Setzen Sie nach der gebundenen Variablen einen kleinen Abstand oder einen Doppelpunkt, wie in \\nexists x \\, P(x). Für eindeutige Existenz lautet das Symbol \\exists!.",
  },
  "negation": {
    name: "Negation",
    meaning: "Das logische Negationszeichen, ein L-förmiger Haken vor einer Formel, bedeutet „nicht“.",
    usage: "In der Logik schreibt man \\neg p für „nicht p“, und in der klassischen Logik gilt \\neg\\neg p \\equiv p; \\lnot ist ein exakter Alias. Manche Texte verwenden stattdessen \\sim p, einen Überstrich \\bar{p} oder p', besonders in der Booleschen Algebra und bei digitalen Schaltungen. \\neg ist ein gewöhnliches Symbol, daher erscheint zwischen ihm und seinem Operanden kein Abstand, was genau das gewünschte Schriftbild ist. Die De-Morganschen Gesetze, \\neg(p \\land q) \\equiv \\neg p \\lor \\neg q, sind ein typisches Beispiel für eine abgesetzte Formel. In Programmierkontexten sieht man sowohl ! als auch \\lnot.",
  },
  "logical-and": {
    name: "Konjunktion (logisches Und)",
    meaning: "Logisches UND (Konjunktion), genau dann wahr, wenn beide Operanden wahr sind.",
    usage: "\\land ist ein Alias für \\wedge und wird in der Logik der Lesbarkeit wegen gewählt, etwa in p \\land q oder \\forall x\\, (P(x) \\land Q(x)). Da LaTeX es als binären Operator einstuft, werden die Abstände in p \\land q automatisch gesetzt; fügen Sie kein \\, von Hand hinzu. Für die Konjunktion vieler Formeln verwenden Sie den großen Operator \\bigwedge_{i=1}^{n} p_i. In der Booleschen Algebra wird UND stattdessen oft als Multiplikation geschrieben, pq oder p \\cdot q. Verwenden Sie \\land in der Logik und \\wedge in der äußeren Algebra, damit der Quelltext klar bleibt, auch wenn beide gleich gedruckt werden.",
  },
  "logical-or": {
    name: "Disjunktion (logisches Oder)",
    meaning: "Logisches ODER (Disjunktion), wahr, wenn mindestens ein Operand wahr ist.",
    usage: "\\lor ist ein Alias für \\vee und wird in Aussagen- und Prädikatenlogik verwendet: p \\lor \\neg p ist der Satz vom ausgeschlossenen Dritten. LaTeX setzt es mit den Abständen eines binären Operators, p \\lor q braucht also keine manuellen Abstandsbefehle. Für viele Disjunktionsglieder gibt es den großen Operator \\bigvee_{i} p_i. Das ausschließende Oder ist ein anderes Symbol: \\oplus oder \\veebar. In der Booleschen Algebra und im Schaltungsentwurf wird ODER oft als + geschrieben. Bevorzugen Sie \\lor in logischen Formeln und \\vee in der Verbandstheorie, damit der Quelltext lesbar bleibt, auch wenn beide gleich aussehen.",
  },
  "proves": {
    name: "Ableitbarkeitszeichen (Turnstile)",
    meaning: "Das Drehkreuz besagt, dass die Formel rechts aus den Annahmen links herleitbar (beweisbar) ist.",
    usage: "In der Beweistheorie schreibt man \\Gamma \\vdash \\varphi für syntaktische Folgerung, und die Typentheorie verwendet es in Typisierungsurteilen \\Gamma \\vdash e : \\tau. Es unterscheidet sich von \\models, das die semantische Folgerung (Wahrheit in allen Modellen) ausdrückt; Korrektheit und Vollständigkeit besagen, dass beide in der Prädikatenlogik erster Stufe zusammenfallen. Die Negation ist \\nvdash. \\vdash ist eine Relation, die Abstände werden also automatisch gesetzt. Für Schlussregeln erzeugt \\frac oder ein spezielles Paket für Beweisbäume den waagerechten Strich, mit Urteilen, die \\vdash enthalten, darüber und darunter. Das Spiegelsymbol ist \\dashv.",
  },
  "models": {
    name: "Semantische Folgerung (doppeltes Turnstile)",
    meaning: "Doppeltes Drehkreuz: semantische Folgerung oder Erfüllung, also wahr in jedem Modell.",
    usage: "\\mathcal{M} \\models \\varphi besagt, dass die Struktur M die Formel \\varphi erfüllt, und \\Gamma \\models \\varphi, dass jedes Modell von \\Gamma auch \\varphi erfüllt. Den Gegensatz bildet \\vdash, die syntaktische Beweisbarkeit. Die Negation ist \\not\\models oder die eigene Glyphe \\nvDash. Das ähnliche \\vDash hat etwas andere Proportionen und wird in manchen Logiken neben \\Vdash für das Forcing in der Mengenlehre verwendet. Als Relation erhält es Abstände auf beiden Seiten. Beim Model Checking schreibt man s \\models \\phi für einen Zustand, der eine temporallogische Formel erfüllt.",
  },
  "therefore": {
    name: "Folgerungszeichen „also“",
    meaning: "Drei Punkte im Dreieck, gelesen „also“ oder „folglich“, leiten eine Schlussfolgerung ein.",
    usage: "\\therefore ist in der Schulmathematik und bei informellen Herleitungen verbreitet: x + 2 = 5, \\therefore x = 3. In formalen Arbeiten bevorzugt man meist Wörter wie „somit“ oder den Implikationspfeil \\implies. Es wird als Relation gesetzt, die Abstände zwischen den Ausdrücken entstehen also automatisch. Die auf dem Kopf stehende Variante \\because bedeutet „weil“. Auch im Text muss es im Mathematikmodus stehen, etwa $\\therefore$, sofern Sie keine Textsymbol-Alternative laden. Da seine Bedeutung den meisten Lesern klar ist, eignet es sich gut für Folien und ausgearbeitete Lösungen, wo der Platz knapp ist.",
  },
  "because": {
    name: "Begründungszeichen „weil“",
    meaning: "Drei Punkte in Form eines umgedrehten Dreiecks, gelesen „weil“ oder „da“, leiten eine Begründung ein.",
    usage: "\\because leitet eine Begründung ein, typischerweise in schrittweisen Schullösungen: \\angle A = \\angle B \\quad \\because AB = AC. Es ist das Spiegelbild von \\therefore, mit dem einzelnen Punkt unten. Im formalen Schreiben schreibt man meist „da“ aus oder verwendet eine Textanmerkung wie \\text{(nach Lemma 2)}. Als Relationssymbol hat es Abstände auf beiden Seiten, und ein \\quad oder \\qquad davor trennt die Begründung von der Gleichung. Setzen Sie es in Fachartikeln sparsam ein. In Beweisen ist es für die Leser meist angenehmer, die Begründung in Worten zu formulieren.",
  },
  "contradiction-falsum-bottom": {
    name: "Widerspruch (Falsum, Bottom)",
    meaning: "Das Up-Tack-Symbol (Bottom): Falsum oder Widerspruch in der Logik und das kleinste Element eines Verbands.",
    usage: "Die Logik verwendet \\bot für eine stets falsche Aussage; die Herleitung von \\bot beweist also die Negation, und \\neg p lässt sich als p \\to \\bot definieren. Domänentheorie und Verbandstheorie verwenden \\bot für das kleinste Element, die Typentheorie für den leeren Typ. \\bot ist ein gewöhnliches Symbol; dieselbe Glyphe mit Relationsabständen ist \\perp, das Sie für die Orthogonalität zweier Objekte brauchen. Das duale Symbol ist \\top. Bei Widerspruchsbeweisen schreiben manche Autoren \\bot oder \\Rightarrow\\Leftarrow ans Ende des widersprüchlichen Schritts.",
  },
  "tautology-verum-top": {
    name: "Tautologie (Verum, Top)",
    meaning: "Das Down-Tack-Symbol (Top): Verum, die stets wahre Aussage, und das größte Element eines Verbands.",
    usage: "In der Logik ist \\top eine Tautologie, das neutrale Element der Konjunktion (p \\land \\top \\equiv p). Verbände und Domänentheorie verwenden es für das größte Element, die Typentheorie für den Einheitstyp. Es ist außerdem als Exponent für die Transponierte einer Matrix verbreitet, A^\\top, als Alternative zu A^T oder A^\\intercal. \\top ist ein gewöhnliches Symbol. Verwechseln Sie es nicht mit dem Buchstaben T, der auf der Grundlinie sitzt und andere Proportionen hat. Das duale Symbol ist \\bot.",
  },
  "not-equivalent": {
    name: "Zeichen für Nichtäquivalenz",
    meaning: "Durchgestrichener Dreifachstrich: nicht kongruent modulo n oder nicht identisch gleich.",
    usage: "In der Zahlentheorie schreibt man a \\not\\equiv b \\pmod{n}, wenn n die Differenz a - b nicht teilt, etwa in der Voraussetzung des kleinen Fermatschen Satzes a \\not\\equiv 0 \\pmod{p}. Das Präfix \\not legt einen Schrägstrich über die Relation; setzen Sie es unmittelbar vor \\equiv. In manchen Schriften wirkt der Schrägstrich leicht aus der Mitte verschoben, doch unter den gängigen Symbolschriften gibt es keine verbreitete eigene Glyphe, daher ist \\not\\equiv die übliche Wahl. In der Logik bedeutet es „nicht logisch äquivalent“. Für einfache Ungleichheit verwenden Sie stattdessen \\neq.",
  },
};

export default text;
