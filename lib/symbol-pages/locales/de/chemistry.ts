import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/chemistry/<slug>. */
const text: SymbolPageTranslations = {
  "equilibrium-arrow": {
    name: "Gleichgewichtspfeil",
    meaning: "Paar gegenläufiger Halbpfeile (Harpunen), das eine chemische Reaktion im dynamischen Gleichgewicht anzeigt.",
    usage: "Die IUPAC empfiehlt Harpunen für das Gleichgewicht, wie in N_2 + 3H_2 \\rightleftharpoons 2NH_3, während zwei volle Pfeile allgemein einen umkehrbaren Vorgang anzeigen. Die obere Harpune zeigt nach rechts, passend zur Hinreaktion. Ihr Spiegelbild ist \\leftrightharpoons, mit der nach links zeigenden Harpune oben. Das Symbol ist eine Relation, TeX setzt die Abstände also wie bei =. Um Bedingungen wie einen Katalysator über den Pfeil zu schreiben, können Sie \\overset{\\text{Fe}}{\\rightleftharpoons} verwenden, auch wenn spezielle Chemiewerkzeuge längere Pfeile liefern. In der Physik bezeichnet dasselbe Symbol manchmal eine wechselseitige Zuordnung.",
  },
  "reversible-reaction": {
    name: "Umkehrbare Reaktion",
    meaning: "Zwei übereinanderliegende volle Pfeile, oben nach links und unten nach rechts, für umkehrbare Reaktionen oder Abbildungen in beide Richtungen.",
    usage: "Manche Chemietexte verwenden volle Doppelpfeile für eine Reaktion, die in beide Richtungen ablaufen kann, und behalten Harpunen (\\rightleftharpoons) dem echten Gleichgewicht vor; die meisten modernen Texte verwenden für beides Harpunen. Achten Sie auf die Stapelreihenfolge: \\leftrightarrows setzt den Linkspfeil nach oben, \\rightleftarrows dagegen den Rechtspfeil, was meist gewünscht ist, wenn die Hinreaktion von links nach rechts verläuft. Verwechseln Sie diese nicht mit \\leftrightarrow, einem einzelnen Pfeil mit zwei Spitzen. In der Kategorientheorie bezeichnet das Paar oft eine Adjunktion oder ein Paar paralleler Abbildungen.",
  },
  "isotope": {
    name: "Isotop",
    meaning: "Nuklidschreibweise mit der Massenzahl als linkem Exponenten und der Ordnungszahl als linkem Index, hier Kohlenstoff-14.",
    usage: "Die leere Gruppe {} gibt den Indizes etwas, an das sie sich anlehnen können, sodass sie links vom Elementsymbol stehen. Ein Schönheitsfehler: TeX richtet den Index linksbündig unter dem Exponenten aus, sodass die einstellige 6 weit vom C entfernt landet. Füllen Sie mit \\phantom{1}6 auf, um die Zahlen rechtsbündig am Symbol auszurichten. Kerngleichungen kombinieren solche Angaben, etwa beim Betazerfall von Kohlenstoff-14 zu Stickstoff-14. Verwenden Sie \\text oder \\mathrm für das Element, damit es aufrecht bleibt; die Ordnungszahl entfällt oft, weil sie sich bereits aus dem Element ergibt, was {}^{14}\\text{C} liefert.",
  },
  "superscript-charge": {
    name: "Ladung als Exponent",
    meaning: "Ionenschreibweise mit der Ladung als Exponent, hier das Natrium-Kation mit einer einfachen positiven Ladung.",
    usage: "Schreiben Sie mehrfach geladene Ionen mit der Zahl vor dem Vorzeichen, \\text{Ca}^{2+} und \\text{SO}_4^{2-}, gemäß der IUPAC-Reihenfolge. Die geschweiften Klammern sind wichtig: ^{2+} hält beide Zeichen im Exponenten. Ein abschließendes Minus im Exponenten wird als unär behandelt, sodass ^{-} sauber erscheint. Verwenden Sie \\mathrm{Na} statt \\text{Na}, wenn die Formel in einem kursiven Satz oder einer Bildunterschrift stehen könnte, denn \\text übernimmt die umgebende Schrift, während \\mathrm stets aufrecht ist. Treffen Index und Ladung zusammen, steht die Ladung über der Anzahl, wie beim Sulfat.",
  },
  "subscript-count": {
    name: "Index für die Atomanzahl",
    meaning: "Summenformel von Wasser, in der der Index 2 die Wasserstoffatome je Molekül zählt.",
    usage: "Elementsymbole müssen aufrecht stehen, deshalb wird jede Buchstabengruppe in \\text eingeschlossen; ein kursives H_2O sähe wie Variablen aus. Kürzer und gleichwertig ist \\mathrm{H_2O}, das alles einschließlich des Index aufrecht hält und gegen umgebende Kursivschrift immun ist. Indizes zählen nur Atome und dürfen nie mit Ladungen im Exponenten verwechselt werden. Formeln mit Klammern folgen demselben Muster, \\mathrm{Ca(OH)_2}. Für umfangreiche Chemie spart ein eigenes Chemiepaket Arbeit, für wenige Formeln ist dieser manuelle Weg aber völlig ausreichend.",
  },
  "degrees-celsius": {
    name: "Grad Celsius",
    meaning: "Die Einheit Grad Celsius, gebildet aus einem hochgestellten Kreis und einem aufrechten C; Wasser gefriert bei 0 °C.",
    usage: "Das Gradzeichen ist \\circ im Exponenten; ein o oder eine 0 ist falsch. Nach SI-Konvention steht zwischen Zahl und Einheit ein Leerraum, schreiben Sie also 25\\,^{\\circ}\\text{C} mit schmalem Abstand, und setzen Sie nie einen Abstand zwischen Gradzeichen und C. Temperaturdifferenzen in Celsius sind gleich den Differenzen in Kelvin, was bei Rechnungen mit Wärmekapazitäten wichtig ist. \\text wird in Satzumgebungen kursiv; \\mathrm{C} vermeidet das. Einheitenpakete bieten semantische Befehle, doch diese Konstruktion ist der übliche manuelle Weg und funktioniert überall, auch in KaTeX.",
  },
  "bond": {
    name: "Einfachbindung",
    meaning: "Kovalente Einfachbindung zwischen zwei Kohlenstoffatomen, dargestellt als kurzer Strich zwischen den Elementsymbolen.",
    usage: "Im Mathematikmodus wird der Bindestrich zum Minuszeichen mit dem Abstand eines binären Operators, sodass die Bindung von Lücken umgeben ist und eher wie eine Subtraktion aussieht. Mit \\text{C}{-}\\text{C} verschwindet der Abstand und die Bindung wird kompakt. Bindungslängen und -energien werden oft mitangegeben, etwa eine C-C-Bindung von etwa 154 pm. Für Halbstrukturformeln wie \\mathrm{CH_3{-}CH_3} gilt derselbe Trick mit geschweiften Klammern. Für mehr als ein paar Bindungen liefern Zeichenwerkzeuge oder ein Strukturpaket echte Skelettformeln.",
  },
  "double-bond": {
    name: "Doppelbindung",
    meaning: "Kohlenstoff-Kohlenstoff-Doppelbindung aus einer Sigma- und einer Pi-Bindung, charakteristisch für Alkene wie Ethen.",
    usage: "Da = im Mathematikmodus eine Relation ist, fügt TeX auf beiden Seiten breite Abstände ein, sodass es eher wie eine Gleichung als wie eine Bindung aussieht. In geschweiften Klammern, \\text{C}{=}\\text{C}, wird es zu einem gewöhnlichen Symbol und rückt die Atome zusammen. Alkene schreibt man etwa \\mathrm{H_2C{=}CH_2}. Die Doppelbindung ist kürzer und stärker als eine Einfachbindung und schränkt die Drehbarkeit ein, wodurch cis-trans-Isomere entstehen. Setzen Sie die Bindung eng an die Atome, damit Leser sie in einer Reaktionsgleichung nicht mit einem Gleichheitszeichen verwechseln können.",
  },
  "triple-bond": {
    name: "Dreifachbindung",
    meaning: "Kohlenstoff-Kohlenstoff-Dreifachbindung, typisch für Alkine wie Ethin (Acetylen), dargestellt mit drei waagerechten Strichen.",
    usage: "\\equiv ist eine Relation, dasselbe Symbol wie für Kongruenz (a \\equiv b \\pmod n) und Identität, und erhält daher standardmäßig breite Abstände; {\\equiv} erzeugt eine engere Bindung zwischen den Atomen. Eine Dreifachbindung besteht aus einer Sigma- und zwei Pi-Komponenten und ist die kürzeste der Kohlenstoff-Kohlenstoff-Bindungen. Stickstoffgas schreibt man \\mathrm{N{\\equiv}N}. Manche Schriften zeichnen \\equiv etwas breit, was gut zur Chemie passt. Vermeiden Sie \\cong oder \\approx, die ähnlich aussehen, aber Isomorphie und Näherung bedeuten.",
  },
  "partial-charge": {
    name: "Partialladung",
    meaning: "Positive Partialladung eines Atoms in einer polaren Bindung, geschrieben als kleines Delta mit Pluszeichen.",
    usage: "Im Wasser tragen die Wasserstoffatome \\delta^{+} und der Sauerstoff \\delta^{-}, eine Ladungstrennung, die Wasserstoffbrückenbindungen bewirkt. Delta bedeutet hier „ein Bruchteil von“ und keine Änderung, verwechseln Sie es also nicht mit \\Delta. Um die Angabe über ein Atom zu setzen, verwenden Sie \\overset{\\delta^{+}}{\\text{H}}, was die Formel lesbar hält. Manche Texte schreiben \\delta+ im Fließtext ohne Hochstellung; im Formelsatz ist die hochgestellte Form verbreiteter. Kombinieren Sie sie mit \\delta^{-} am elektronegativeren Partner; \\delta\\delta^{+} bezeichnet eine noch kleinere Partialladung.",
  },
  "electron": {
    name: "Elektron",
    meaning: "Symbol für das Elektron, ein kleines e mit hochgestellter negativer Ladung, verwendet in Redox-Halbgleichungen.",
    usage: "Halbgleichungen gleichen die Ladung mit Elektronen aus, wie in \\text{Cu}^{2+} + 2e^{-} \\to \\text{Cu}. Das Positron ist e^{+}. Physikalische Stilrichtlinien setzen Teilchensymbole oft aufrecht, \\mathrm{e}^{-}, was auch Verwechslungen mit der Eulerschen Zahl vermeidet, wenn in der Nähe Exponentialfunktionen stehen. Da e^- mit einem Exponenten aus einem einzigen Token funktioniert, sind geschweifte Klammern optional, halten die Schreibweise aber einheitlich mit mehrstelligen Ladungen. In der Kernschreibweise kann ein Elektron auch als {}^{\\phantom{-}0}_{-1}e geschrieben werden oder als \\beta^{-}, wenn es beim Zerfall emittiert wird. Das Antineutrino des Betazerfalls schreibt man daneben als \\bar{\\nu}_e.",
  },
  "aqueous": {
    name: "Wässrige Lösung (aq)",
    meaning: "Zustandssymbol für wässrig: Die Spezies ist in Wasser gelöst, wie Ionen in Lösung.",
    usage: "Zustandssymbole folgen der Formel, entweder in der Zeile als \\text{NaCl(aq)} oder als Index, \\text{NaCl}_{\\text{(aq)}}; beides ist üblich, entscheiden Sie sich für eines. Tippt man (aq) im Mathematikmodus ohne \\text, erhält man kursive a und q mit mathematischem Abstand, die Umhüllung ist also wichtig. Ionengleichungen stützen sich auf diese Angabe, um zu zeigen, welche Spezies dissoziieren. Bei vielen Gleichungen definieren Sie ein Makro wie \\newcommand{\\aq}{\\text{(aq)}}. \\mathrm{(aq)} ist eine Alternative, die auch in kursiver Umgebung aufrecht bleibt. Es kennzeichnet auch hydratisierte Protonen, geschrieben \\text{H}^{+}\\text{(aq)}.",
  },
  "solid": {
    name: "Fester Zustand (s)",
    meaning: "Zustandssymbol, das eine Spezies als Feststoff kennzeichnet, oft einen Niederschlag oder eine Metallelektrode.",
    usage: "Fällungsreaktionen enden mit einem Feststoff wie \\text{AgCl(s)}, und die Thermochemie hängt davon ab: Die Bildungsenthalpie von Kohlenstoff bezieht sich auf Graphit im festen Zustand. Manche älteren Texte verwenden stattdessen einen Abwärtspfeil für einen Niederschlag; das eingeklammerte Symbol ist die von der IUPAC bevorzugte Form. Schreiben Sie es ohne Abstand direkt hinter die Formel. Mit \\text bleibt das s aufrecht; im Mathematikmodus wäre ein nicht umschlossenes s kursiv und könnte mit der Einheit Sekunde oder einer Variablen verwechselt werden.",
  },
  "liquid": {
    name: "Flüssiger Zustand (l)",
    meaning: "Zustandssymbol für eine reine Flüssigkeit wie Wasser oder Quecksilber, geschrieben hinter der chemischen Formel.",
    usage: "Verbrennungsgleichungen unterscheiden \\text{H}_2\\text{O(l)} von \\text{H}_2\\text{O(g)}, weil sich die Enthalpieänderung um die Verdampfungswärme unterscheidet. Beachten Sie den Unterschied zwischen (l), einer reinen Flüssigkeit, und (aq), einer wässrigen Lösung. Aufrechte Schrift ist hier besonders wichtig: In manchen Schriften sieht ein kursives l wie die Ziffer 1 oder ein senkrechter Strich aus, was Leser verwirren kann. \\text oder \\mathrm sorgen für einen klar aufrechten Buchstaben. Setzen Sie das Symbol ohne zusätzlichen Abstand direkt an die Formel.",
  },
  "gas-state-symbol-g": {
    name: "Zustandssymbol für Gase (g)",
    meaning: "Zustandssymbol für die Gasphase, angehängt an Formeln von Gasen und Dämpfen in Gleichungen.",
    usage: "Spezies in der Gasphase sind wichtig für Gleichgewichtskonstanten bezogen auf Partialdrücke, K_p, und für Berechnungen mit idealen Gasen; die Kennzeichnung mit (g) macht diese Abhängigkeiten deutlich. Ältere Texte verwenden manchmal einen Aufwärtspfeil für entweichendes Gas, heute wird jedoch das Zustandssymbol bevorzugt. Eine nützliche Gewohnheit ist es, jede Spezies in einer thermochemischen Gleichung zu kennzeichnen, damit die Enthalpiewerte eindeutig sind. Enthält Ihr Dokument viele Formeln, verhindert ein Makro wie \\newcommand{\\gas}{\\text{(g)}} Tippfehler. \\mathrm{(g)} liefert in kursivem Text dasselbe aufrechte Ergebnis.",
  },
};

export default text;
