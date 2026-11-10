import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/geometry/<slug>. */
const text: SymbolPageTranslations = {
  "angle": {
    name: "Winkelzeichen",
    meaning: "Winkelzeichen vor den Eckpunktbezeichnungen, wie beim Winkel ABC mit Scheitel B.",
    usage: "Geometrische Beweise schreiben \\angle ABC für den Winkel am Scheitel B und \\angle ABC \\cong \\angle DEF für kongruente Winkel. Das Symbol ist ein gewöhnliches mathematisches Zeichen, daher wird danach kein zusätzlicher Abstand eingefügt, was zu Bezeichnungen wie \\angle A passt. Amerikanische Lehrbücher geben Winkelgrößen oft als m\\angle A = 60^{\\circ} an und trennen so den Winkel von seiner Größe. Verwandte Symbole sind \\measuredangle, das einen Bogen hinzufügt, um einen gemessenen oder orientierten Winkel zu kennzeichnen, und \\sphericalangle für Winkel auf einer Kugel. Verwenden Sie es nicht als Abkürzung für das Wort Winkel im Fließtext.",
  },
  "measured-angle": {
    name: "Gemessener Winkel",
    meaning: "Winkelzeichen mit Bogen, häufig für einen gemessenen oder orientierten Winkel verwendet.",
    usage: "Manche Geometrietexte reservieren \\angle für den Winkel als Figur und \\measuredangle für seine Maßzahl und schreiben \\measuredangle ABC = 30^{\\circ}. In der Olympiade-Geometrie bezeichnet \\measuredangle häufig orientierte Winkel modulo 180^{\\circ}, wodurch Argumente über Sehnenvierecke unabhängig von der Lage in der Skizze werden: A, B, C, D liegen genau dann auf einem Kreis, wenn \\measuredangle ABC = \\measuredangle ADC gilt. Da die Konventionen variieren, erläutern Sie Ihre Bedeutung in einer Bemerkung zur Notation. Es verhält sich wie ein gewöhnliches Symbol, der Abstand zu benachbarten Buchstaben ist also knapp.",
  },
  "spherical-angle": {
    name: "Sphärischer Winkel",
    meaning: "Zeichen für den sphärischen Winkel, verwendet für Winkel zwischen Großkreisbögen auf einer Kugel.",
    usage: "Sphärische Geometrie, Navigation und Astronomie verwenden es für Winkel zwischen Bögen auf einer Kugel, wo die Winkelsumme eines Dreiecks mehr als 180^{\\circ} beträgt. Der Satz von Girard gibt den Flächeninhalt eines sphärischen Dreiecks als R^2(A + B + C - \\pi) an, den sphärischen Exzess. Seine Form unterscheidet sich sowohl von \\measuredangle als auch vom einfachen \\angle, tauschen Sie sie also nicht beliebig aus. Manche Autoren verwenden es für Raumwinkel oder orientierte Winkel, eine einzeilige Definition hilft daher den Lesern. Es ist ein gewöhnliches Symbol, fügen Sie also \\, ein, wenn es zu nah an einer folgenden Bezeichnung steht.",
  },
  "not-congruent": {
    name: "Zeichen für Nichtkongruenz",
    meaning: "Durchgestrichenes Kongruenzzeichen: Zwei Figuren oder Objekte sind nicht kongruent bzw. nicht isomorph.",
    usage: "In der Geometrie besagt \\triangle ABC \\ncong \\triangle DEF, dass die Dreiecke nicht kongruent sind; in der Algebra bedeutet \\cong oft isomorph, G \\ncong H heißt also, dass zwei Gruppen nicht isomorph sind. Es ist eine Relation, die Abstände werden daher automatisch gesetzt. Bevorzugen Sie diese fertige Glyphe gegenüber \\not\\cong, das einen allgemeinen Schrägstrich darüberlegt, der außermittig sitzen kann. Verwandte negierte Relationen sind \\neq und \\nsim. Wenn Sie \\cong für Isomorphie verwenden, nennen Sie die Kategorie oder Struktur, falls sie nicht offensichtlich ist, denn Räume können homöomorph sein, ohne als Gruppen isomorph zu sein.",
  },
  "similar-or-equal": {
    name: "Zeichen für ähnlich oder gleich",
    meaning: "Tilde über einem einzelnen Strich, gelesen als homotopieäquivalent, asymptotisch gleich oder isomorph.",
    usage: "Die Bedeutung hängt vom Fachgebiet ab: Topologen schreiben X \\simeq Y für Homotopieäquivalenz, Kategorientheoretiker für Äquivalenz von Kategorien und Physiker für ungefähre Gleichheit. Vergleichen Sie es mit \\cong (Tilde über zwei Strichen), meist für Isomorphie oder Kongruenz reserviert, \\approx (zwei Tilden) für numerische Näherung und \\sim für asymptotische Äquivalenz oder Äquivalenzrelationen. Da sich die Konventionen überschneiden, geben Sie an, welche Sie verwenden. Als Relationszeichen erhält es auf beiden Seiten automatisch einen breiten Abstand, manuelle Abstände sind also nicht nötig.",
  },
  "arc": {
    name: "Kreisbogen",
    meaning: "Nach unten offener Bogen, manchmal über Buchstaben gesetzt, um einen Kreisbogen zu kennzeichnen.",
    usage: "Für sich allein ist \\frown ein Bogen der Relationsklasse, und in der Mengenlehre bezeichnet er die Verkettung von Folgen, s^\\frown t. Für den geometrischen Bogen zwischen den Punkten A und B muss das Symbol über den Buchstaben stehen; \\overset{\\frown}{AB} leistet das, auch wenn sich der Bogen nicht streckt, und eigene breite Bogenakzente aus zusätzlichen Schriften sehen bei langen Bezeichnungen besser aus. Sein Spiegelbild ist \\smile, und in manchen Notationen für Verträglichkeitsrelationen werden beide kombiniert. Da das einfache Symbol Relationsabstände hat, prüfen Sie das Ergebnis, wenn es zwischen Buchstaben steht.",
  },
  "prime-feet-minutes": {
    name: "Strich (Fuß/Minuten)",
    meaning: "Ein einfacher Strich, der nach einer Zahl Fuß, Bogenminuten oder Zeitminuten kennzeichnet.",
    usage: "Im Mathematikmodus wird ein Apostroph zu einem hochgestellten Strich, 5'\\,9'' bedeutet also fünf Fuß neun Zoll, und 12^{\\circ}\\,30' ergibt zwölf Grad dreißig Bogenminuten. Außerhalb des Mathematikmodus ist der Apostroph ein einfaches schließendes Anführungszeichen und sieht nicht wie ein Strich aus, setzen Sie Maßangaben daher in den Mathematikmodus. Dasselbe Zeichen erzeugt Ableitungsstriche, f'(x), und kennzeichnet transformierte Punkte oder Variablen, A' und x'. Fügen Sie bei geografischen Koordinaten wie 40^{\\circ}\\,26'\\,46'' schmale Abstände zwischen den Bestandteilen ein, damit sie nicht zusammenlaufen.",
  },
  "double-prime-inches-seconds": {
    name: "Doppelstrich (Zoll/Sekunden)",
    meaning: "Zwei Striche, die nach einer Zahl Zoll, Bogensekunden oder Sekunden kennzeichnen.",
    usage: "Im Mathematikmodus wird '' zu einem einzigen Exponenten aus zwei Strichen, 6'' bezeichnet also sechs Zoll oder sechs Bogensekunden, und 2^{\\circ}\\,15'\\,30'' schreibt einen Winkel in Grad, Minuten und Sekunden. Ein stattdessen getipptes doppeltes Anführungszeichen erzeugt eine andere Glyphe und sollte vermieden werden. Im Textmodus ergeben zwei Apostrophe ein schließendes Anführungszeichen, keinen Strich, Maßangaben gehören also in den Mathematikmodus. Dieselbe Konstruktion schreibt zweite Ableitungen, f''(x), und zweifach transformierte Punkte wie A''. Astronomen verwenden es für Bogensekunden, etwa bei einer Auflösung von 0.1''.",
  },
  "line-segment": {
    name: "Strecke",
    meaning: "Strich über AB, die übliche Notation für die Strecke zwischen den Punkten A und B.",
    usage: "Geometrietexte schreiben \\overline{AB} für die Strecke und einfach AB für ihre Länge, \\overline{AB} \\cong \\overline{CD} geht also mit AB = CD einher. Der Strich erstreckt sich über das gesamte Argument, anders als \\bar{x}, ein Akzent fester Breite für einen einzelnen Buchstaben. Weitere Bedeutungen von \\overline sind die komplexe Konjugation \\overline{z}, der Abschluss einer Menge \\overline{A} und die Negation in der booleschen Algebra, \\overline{A \\cdot B}. Strahlen und Geraden verwenden \\overrightarrow{AB} und \\overleftrightarrow{AB}, die Richtung oder unendliche Ausdehnung anzeigen.",
  },
};

export default text;
