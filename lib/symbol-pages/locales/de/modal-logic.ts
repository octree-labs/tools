import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/modal-logic/<slug>. */
const text: SymbolPageTranslations = {
  "possibly": {
    name: "Möglichkeitsoperator",
    meaning: "Möglichkeitsoperator: \\Diamond p wird „möglicherweise p“ gelesen und ist in einer Welt wahr, wenn p in einer erreichbaren Welt gilt.",
    usage: "Er ist dual zur Notwendigkeit, \\Diamond p \\leftrightarrow \\neg\\Box\\neg p, und im System T gilt p \\to \\Diamond p. Die Temporallogik liest ihn als „irgendwann“, und die dynamische Logik schreibt für dieselbe Idee \\langle a \\rangle p. \\Diamond ist ein großes gewöhnliches Symbol; \\diamond ist ein kleiner binärer Operator und \\lozenge eine schmale Raute, vertauschen Sie sie also nicht. TeX behandelt \\Diamond als gewöhnliches Symbol, \\Diamond p wird daher ohne Lücke gesetzt; fügen Sie \\, nur ein, wenn Ihr Hausstil Abstand verlangt.",
  },
  "not-necessary": {
    name: "Negierte Notwendigkeit",
    meaning: "Negierte Notwendigkeit: \\neg\\Box p besagt, dass p nicht notwendig ist, was äquivalent zu \\Diamond\\neg p ist.",
    usage: "Die Dualität \\neg\\Box p \\leftrightarrow \\Diamond\\neg p erlaubt es, Negationen nach innen zu ziehen, das modale Gegenstück zu den De-Morganschen Gesetzen für Quantoren. Semantisch gilt die Formel in einer Welt, wenn eine erreichbare Welt p falsch macht. \\neg ist ein gewöhnliches Symbol, \\neg\\Box p wird also eng gesetzt; Sie können auch \\lnot schreiben, es ist ein Alias. Für ein durchgestrichenes Kästchen gibt es keinen Standardbefehl, und ein kombiniertes Zeichen würde Leser verwirren, behalten Sie daher die Form mit zwei Symbolen bei. In epistemischen Lesarten besagt \\neg K_a p, dass der Agent p nicht weiß, was schwächer ist als \\neg p zu wissen.",
  },
  "not-possible": {
    name: "Unmöglichkeit",
    meaning: "Negierte Möglichkeit: \\neg\\Diamond p besagt, dass p unmöglich ist, äquivalent zu \\Box\\neg p.",
    usage: "Unmöglichkeit ist die Notwendigkeit der Negation, \\neg\\Diamond p \\leftrightarrow \\Box\\neg p, und sie gilt in einer Welt, wenn keine erreichbare Welt p erfüllt. Ein Widerspruch ist in jeder normalen Modallogik unmöglich, \\neg\\Diamond\\bot. Epistemische Lesarten besagen, dass ein Agent p für ausgeschlossen hält. Der Befehl \\neg lässt sich mit identischer Ausgabe durch \\lnot ersetzen. Vermeiden Sie eine improvisierte durchgestrichene Raute mit \\not\\Diamond, das für Relationen gedacht ist und den Strich schlecht platziert. Steht die Negation innen, \\Diamond\\neg p, bedeutet das etwas anderes: p könnte nicht gelten.",
  },
  "necessary-implication": {
    name: "Strikte Implikation",
    meaning: "Notwendige Implikation: \\Box(p \\to q) besagt, dass in jeder erreichbaren Welt p q impliziert (strikte Implikation).",
    usage: "Dies ist das Antezedens des Distributionsaxioms K, \\Box(p \\to q) \\to (\\Box p \\to \\Box q), das jede normale Modallogik enthält. C. I. Lewis führte die strikte Implikation genau als diese Formel ein, daher wird \\Box(p \\to q) oft als „p impliziert q strikt“ gelesen. \\to und \\rightarrow ergeben denselben Pfeil; \\implies ist ein langer Pfeil mit zusätzlichem Abstand, besser geeignet für Schlüsse auf der Metaebene als für objektsprachliche Junktoren. Die Klammern sind nötig, da \\Box stärker bindet als \\to. Die Nezessitationsregel erlaubt es, \\Box(p \\to q) aus jedem Theorem p \\to q herzuleiten.",
  },
  "possible-conjunction": {
    name: "Mögliche Konjunktion",
    meaning: "Mögliche Konjunktion: \\Diamond(p \\land q) besagt, dass es eine erreichbare Welt gibt, in der p und q beide gelten.",
    usage: "Sie impliziert \\Diamond p \\land \\Diamond q, aber nicht umgekehrt, da p und q in verschiedenen Welten möglich sein können; diese Asymmetrie ist ein klassischer Prüfungspunkt. Ihr Dual ist \\Box(\\neg p \\lor \\neg q). \\land und \\wedge erzeugen dasselbe Symbol; \\land liest sich in logischen Arbeiten besser. Behalten Sie die Klammern bei, denn \\Diamond p \\land q wird als (\\Diamond p) \\land q gelesen. In Kripke-Begriffen muss eine einzige Zeugenwelt beide Konjunkte zugleich erfüllen. Beispiel: Regen ist möglich und kein Regen ist möglich, doch Regen und kein Regen zusammen ist es nicht.",
  },
  "knows": {
    name: "Wissensoperator",
    meaning: "Epistemischer Wissensoperator: K_a p wird „Agent a weiß, dass p“ gelesen.",
    usage: "Die epistemische Logik modelliert Wissen meist mit S5: dem Wahrheitsaxiom K_a p \\to p, der positiven Introspektion K_a p \\to K_a K_a p und der negativen Introspektion. Semantisch gilt K_a p, wenn p in jeder Welt wahr ist, die Agent a nicht von der tatsächlichen unterscheiden kann. Das Dual \\hat{K}_a p oder M_a p bedeutet, dass a p für möglich hält. Verwenden Sie ein aufrechtes K, \\mathsf{K}_a oder \\mathrm{K}_a, wenn das kursive K mit der Logik namens K kollidiert, und schreiben Sie mehrbuchstabige Agentennamen im Index als \\text{Alice}.",
  },
  "believes": {
    name: "Glaubensoperator",
    meaning: "Glaubensoperator: B_a p wird „Agent a glaubt, dass p“ gelesen; anders als Wissen kann Glaube falsch sein.",
    usage: "Die doxastische Logik verwendet typischerweise KD45: Konsistenz B_a p \\to \\neg B_a\\neg p und beide Introspektionsaxiome, aber kein Wahrheitsaxiom, sodass B_a p \\to p nicht gilt. Die Verbindung von Wissen und Glauben K_a p \\to B_a p ist ein verbreitetes Brückenprinzip. Arbeiten zur Glaubensrevision schreiben B_a(p \\mid q) für bedingten Glauben. Wie bei K_a sollten Sie ein aufrechtes \\mathsf{B} in Betracht ziehen, wenn das kursive B schon anderweitig belegt ist, und es nicht mit dem Kästchen \\Box verwechseln, dem allgemeinen Notwendigkeitsoperator.",
  },
  "common-knowledge": {
    name: "Gemeinsames Wissen",
    meaning: "Gemeinsames Wissen in der Gruppe G: Jeder weiß p, jeder weiß, dass jeder p weiß, und so weiter ohne Ende.",
    usage: "Bedeutet E_G p, dass jeder in G p weiß, so ist gemeinsames Wissen die unendliche Konjunktion E_G p \\land E_G E_G p \\land \\cdots, und es erfüllt das Fixpunktaxiom C_G p \\leftrightarrow E_G(p \\land C_G p). Das Rätsel der schmutzigen Kinder und das Problem des koordinierten Angriffs beruhen auf dem Unterschied zwischen E_G und C_G. Verteiltes Wissen schreibt man D_G p. G ist eine Menge von Agenten, schreiben Sie es daher als kursiven Großbuchstaben und definieren Sie es ausdrücklich.",
  },
  "always-temporal-box": {
    name: "Immer (temporales Kästchen)",
    meaning: "Temporales „immer“: \\Box p besagt, dass p jetzt und zu jedem zukünftigen Zeitpunkt des Ablaufs gilt.",
    usage: "In der linearen Temporallogik schreibt man \\Box oft als G (globally), und Sicherheitseigenschaften haben die Form \\Box\\neg\\mathit{bad}. Der Operator ist dual zu „irgendwann“, \\Box p \\leftrightarrow \\neg\\Diamond\\neg p, und \\Box\\Diamond p drückt aus, dass p unendlich oft eintritt. Dasselbe Kästchen ist in der alethischen Modallogik die Notwendigkeit, geben Sie also an, welche Lesart gilt. \\Box und \\square ergeben nahezu identische Quadrate; \\Box ist der übliche Modaloperator, und ein Abstand vor p wird nicht automatisch eingefügt. CTL stellt einen Pfadquantor voran, etwa AG p.",
  },
  "eventually-temporal-diamond": {
    name: "Irgendwann (temporale Raute)",
    meaning: "Temporales „irgendwann“: \\Diamond p besagt, dass p zu einem gegenwärtigen oder zukünftigen Zeitpunkt gilt.",
    usage: "Die lineare Temporallogik schreibt ihn auch F p (future), und er lässt sich über „until“ als \\Diamond p \\equiv \\top\\,\\mathcal{U}\\,p definieren. Lebendigkeitseigenschaften haben typischerweise diese Gestalt, etwa \\Box(\\mathit{req} \\to \\Diamond\\mathit{grant}). \\Diamond\\Box p bedeutet, dass p ab irgendeinem Zeitpunkt für immer gilt. In der alethischen Modallogik bedeutet dieselbe Raute „möglicherweise“, geben Sie also die temporale Lesart an. Verwenden Sie \\Diamond, nicht \\diamond, das ein kleinerer binärer Operator ist. In der Computation Tree Logic wird ein Pfadquantor vorangestellt, etwa AF p oder EF p.",
  },
  "until": {
    name: "Until-Operator",
    meaning: "Until-Operator der Temporallogik: p \\mathcal{U} q gilt, wenn q irgendwann gilt und p zu jedem Zeitpunkt davor gilt.",
    usage: "Das starke Until verlangt, dass q eintritt; das schwache Until p \\mathcal{W} q erlaubt auch, dass p für immer gilt. „Irgendwann“ wird abgeleitet als \\Diamond q \\equiv \\top \\mathcal{U} q. Einfach geschrieben ist \\mathcal{U} ein gewöhnliches Symbol, p\\mathcal{U}q wird also ohne Abstand um das U gesetzt; schreiben Sie p \\mathbin{\\mathcal{U}} q für die Abstände eines binären Operators oder definieren Sie \\newcommand{\\until}{\\mathbin{\\mathcal{U}}}. Viele LTL-Arbeiten verwenden statt des kalligrafischen Buchstabens ein aufrechtes U, \\mathbin{\\mathsf{U}}. Logiken mit Vergangenheitsoperatoren ergänzen „since“, das rückwärts gerichtete Spiegelbild.",
  },
  "next": {
    name: "Next-Operator",
    meaning: "Nächster-Zeitpunkt-Operator der Temporallogik: \\bigcirc p besagt, dass p im unmittelbar folgenden Zustand gilt.",
    usage: "Er ist der einzige LTL-Operator, der an diskrete Zeitschritte gebunden ist, und wird auch als X p geschrieben. Das Expansionsgesetz p \\mathcal{U} q \\leftrightarrow q \\lor (p \\land \\bigcirc(p \\mathcal{U} q)) nutzt ihn, um Until Schritt für Schritt aufzufalten. \\bigcirc ist ein großer Kreis in der Größe von \\Box und \\Diamond und passt optisch zu ihnen; \\circ ist ein kleiner Verkettungsoperator und hier falsch. Manche Arbeiten bevorzugen \\mathsf{X} für Klarheit in textlastigen Spezifikationen.",
  },
  "accessibility": {
    name: "Erreichbarkeitsrelation",
    meaning: "Erreichbarkeitsrelation der Kripke-Semantik: w R v bedeutet, dass die Welt v von der Welt w aus erreichbar ist (als möglich gilt).",
    usage: "Eigenschaften von R entsprechen modalen Axiomen: Reflexivität liefert T (\\Box p \\to p), Transitivität liefert 4 (\\Box p \\to \\Box\\Box p), und eine Äquivalenzrelation liefert S5. Die Wahrheit von \\Box p in w verlangt p in jedem v mit wRv. Als w R v getippt behandelt TeX R als gewöhnlichen Buchstaben, und die Leerzeichen verschwinden, sodass wRv entsteht; verwenden Sie w \\mathrel{R} v für Relationsabstände oder definieren Sie ein Makro. Manche Autoren schreiben stattdessen R(w, v) oder w \\to v.",
  },
  "kripke-model": {
    name: "Kripke-Modell",
    meaning: "Erfüllung in einem Kripke-Modell: Die Formel p ist in der Welt w des Modells \\mathcal{M} wahr.",
    usage: "Ein Kripke-Modell \\mathcal{M} = (W, R, V) besteht aus Welten, einer Erreichbarkeitsrelation und einer Bewertung, und Wahrheit wird Welt für Welt definiert, etwa \\mathcal{M}, w \\models \\Box p genau dann, wenn p in allen R-Nachfolgern gilt. \\models ist eine Relation mit passenden Abständen; \\vDash ergibt ein ähnliches Doppel-Drehkreuz, und seine Negationen sind \\not\\models oder \\nvDash. Verwenden Sie nicht \\vdash, das Beweisbarkeit statt Wahrheit bedeutet. Ist das Modell fest, kürzen Autoren zu w \\models p oder w \\Vdash p ab.",
  },
  "possible-world": {
    name: "Mögliche Welt",
    meaning: "Eine mögliche Welt: ein Punkt in einem Kripke-Rahmen, an dem Formeln als wahr oder falsch ausgewertet werden.",
    usage: "Welten stammen aus einer Menge W, und ein Rahmen ist das Paar (W, R) mit einer Erreichbarkeitsrelation. Je nach Logik kann eine Welt für einen Programmzustand, einen Zeitpunkt oder eine epistemische Alternative stehen. Üblich sind kleine Buchstaben w, v, u für Welten und w_0 für die tatsächliche Welt. Da ein bloßes kursives w so häufig vorkommt, führen Sie es ausdrücklich ein und schreiben Sie in der ersten Formel am besten w \\in W, um die Lesart festzulegen.",
  },
  "deontic-ought": {
    name: "Deontisches Gebot",
    meaning: "Deontische Verpflichtung: O p wird „es soll der Fall sein, dass p“ oder „p ist geboten“ gelesen.",
    usage: "Die deontische Standardlogik ist die normale Modallogik KD mit dem Axiom D, O p \\to P p, das die Widerspruchsfreiheit von Pflichten ausdrückt, während das Wahrheitsaxiom O p \\to p bewusst nicht gilt. Contrary-to-Duty-Rätsel wie Chisholms Paradox zeigen ihre Grenzen auf und motivieren die dyadische Verpflichtung O(p \\mid q). Im Mathematikmodus wird O p ohne Abstand als Op gesetzt, schreiben Sie daher O\\,p oder verwenden Sie ein aufrechtes \\mathbf{O} oder \\mathsf{O}, damit es nicht als O-Notation gelesen wird.",
  },
  "deontic-permitted": {
    name: "Deontische Erlaubnis",
    meaning: "Deontische Erlaubnis: P p wird „p ist erlaubt“ gelesen, das Dual der Verpflichtung.",
    usage: "Erlaubnis ist definiert als P p \\leftrightarrow \\neg O\\neg p, und Verbot als F p \\leftrightarrow O\\neg p. In der deontischen Standardlogik ist jede Verpflichtung erlaubt, O p \\to P p. Die freie Wahlerlaubnis, bei der P(p \\lor q) P p implizieren sollte, ist ein bekanntes Rätsel, das das Standardsystem nicht validiert. Ein kursives P kollidiert mit der Notation für Wahrscheinlichkeiten, daher verwenden viele Autoren \\mathsf{P} oder \\mathbf{P}; fügen Sie danach \\, ein, um den Operator von der Formel zu trennen.",
  },
};

export default text;
