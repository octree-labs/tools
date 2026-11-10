import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/operators/<slug>. */
const text: SymbolPageTranslations = {
  "direct-sum": {
    name: "Direkte Summe",
    meaning: "Eingekreistes Plus für direkte Summen von Räumen oder Moduln und für das exklusive Oder (XOR) in der booleschen Algebra.",
    usage: "In der linearen Algebra schreibt man V = U \\oplus W, wenn sich jeder Vektor eindeutig in Anteile aus U und W zerlegen lässt, und die Modultheorie bildet \\mathbb{Z} \\oplus \\mathbb{Z}. In Informatik und Kryptographie ist a \\oplus b das bitweise XOR, etwa beim One-Time-Pad c = m \\oplus k. Es ist ein binärer Operator und erhält daher mittleren Abstand. Für eine direkte Summe über eine Indexmenge verwenden Sie den großen Operator \\bigoplus_{i \\in I} V_i, der Grenzen wie \\sum annimmt. Verwechseln Sie es nicht mit \\pm oder einem einfachen +; in manchen Algebren bezeichnet \\oplus auch eine deformierte Addition.",
  },
  "tensor-product": {
    name: "Tensorprodukt",
    meaning: "Eingekreistes Mal, das Tensorprodukt von Vektoren, Räumen, Moduln oder Matrizen (Kronecker-Produkt).",
    usage: "Die multilineare Algebra schreibt V \\otimes W, die Quantenmechanik schreibt zusammengesetzte Zustände |\\psi\\rangle \\otimes |\\phi\\rangle, und in der Matrizenrechnung steht A \\otimes B für das Kronecker-Produkt. Im maschinellen Lernen erscheint es manchmal für dyadische Produkte. Es ist ein binärer Operator mit mittlerem Abstand. Für iterierte Produkte verwenden Sie den großen Operator \\bigotimes_{i=1}^n V_i, und für das Tensorprodukt über einem Ring setzen Sie den Ring als Index, M \\otimes_R N. Verwenden Sie nicht \\times, das kartesische Produkt bzw. Kreuzprodukt.",
  },
  "circle-dot": {
    name: "Eingekreister Punkt",
    meaning: "Eingekreister Punkt, meist für das elementweise Produkt (Hadamard-Produkt) von Vektoren oder Matrizen.",
    usage: "Arbeiten zum Deep Learning schreiben h_t = o_t \\odot \\tanh(c_t) für elementweise Produkte in LSTMs und Attention-Masken, und die numerische lineare Algebra verwendet A \\odot B für das Hadamard-Produkt, oft neben \\circ in derselben Bedeutung. In physikalischen Skizzen kennzeichnet ein eingekreister Punkt einen Vektor, der aus der Zeichenebene herauszeigt, dort ist er allerdings ein Symbol und kein Operator. Es ist ein binärer Operator mit mittlerem Abstand; die große Form \\bigodot gibt es ebenfalls. Geben Sie in Ihrem Notationsabschnitt an, ob \\odot das Hadamard-Produkt bedeutet, da manche Autoren es für XNOR oder andere Verknüpfungen verwenden.",
  },
  "circle-minus": {
    name: "Eingekreistes Minus",
    meaning: "Eingekreistes Minus, verwendet für orthogonale Komplemente innerhalb eines Raumes und für einige differenzartige Operationen.",
    usage: "In der Theorie der Hilberträume bezeichnet H \\ominus K das orthogonale Komplement eines abgeschlossenen Unterraums K in H, das Gegenstück zu \\oplus. Die morphologische Bildverarbeitung verwendet A \\ominus B für die Erosion, und manche Texte zur Mengenlehre nutzen es für die symmetrische Differenz, wobei dort \\triangle üblicher ist. Es ist ein binärer Operator, der Abstand wird also automatisch gesetzt. Da seine Bedeutung variiert, sollten Sie es in Ihrer Arbeit einmal definieren. Eine standardisierte große Operatorversion gibt es nicht. Als symmetrische Differenz gilt A \\ominus B gleich (A \\setminus B) \\cup (B \\setminus A).",
  },
  "circle-slash": {
    name: "Eingekreister Schrägstrich",
    meaning: "Eingekreister Schrägstrich, meist für die elementweise Division (Hadamard-Division) von Vektoren oder Matrizen.",
    usage: "Texte zu Matrizenrechnung und maschinellem Lernen schreiben A \\oslash B für die eintragsweise Division und kombinieren es mit \\odot für die eintragsweise Multiplikation, etwa bei normierten Aktualisierungen x \\oslash \\sqrt{v}. LaTeX behandelt es als binären Operator, es erhält also denselben mittleren Abstand wie \\odot und \\otimes. Beachten Sie, dass es sich von \\varnothing und \\emptyset unterscheidet, die wie ein durchgestrichener Kreis aussehen, aber gewöhnliche Symbole für die leere Menge sind, sowie vom skandinavischen Buchstaben \\o. Da es nicht allgemein bekannt ist, führen Sie es im Notationsabschnitt ein.",
  },
  "star": {
    name: "Stern",
    meaning: "Fünfzackiger Stern als binärer Operator, verwendet für Faltung, Hodge-Dualität und eigene Produkte.",
    usage: "In der Signalverarbeitung wird die Kreuzkorrelation manchmal als f \\star g geschrieben, die Differentialgeometrie verwendet \\star für den Hodge-Stern-Operator, und Algebraiker nutzen es für allgemeine Verknüpfungen oder das Moyal-Sternprodukt. Optimale Werte in der Optimierung schreibt man x^\\star, als Alternative zu x^*. \\star ist ein binärer Operator, verschieden von \\ast (dem Asterisk) und von dem Textsymbol, das \\bigstar erzeugt. Da es den Abstand eines binären Operators hat, kann die Verwendung als vorangestellter Operator wie beim Hodge-Stern geschweifte Klammern erfordern: {\\star}\\omega.",
  },
  "asterisk": {
    name: "Asterisk",
    meaning: "Asterisk als binärer Operator, meist für die Faltung oder eine allgemeine Gruppenverknüpfung.",
    usage: "Im Mathematikmodus ist \\ast dasselbe Zeichen wie ein getipptes *, ein binärer Operator mit mittlerem Abstand, verwendet für die Faltung (f \\ast g)(t) = \\int f(\\tau) g(t - \\tau)\\,d\\tau und für allgemeine Verknüpfungen in der Algebra. Hochgestellt bezeichnet A^* oder A^\\ast je nach Fachgebiet den adjungierten Operator, die konjugiert Transponierte, den Dualraum oder den Kleene-Stern. Es sitzt zentriert auf der Mathematikachse, anders als der hochgestellte Text-Asterisk. Für einen markierten Optimalwert x^\\star bevorzugen manche Autoren \\star, um die Bedeutungen auseinanderzuhalten.",
  },
  "composition": {
    name: "Komposition",
    meaning: "Kleiner Kreisoperator, Standard für die Komposition (Verkettung) von Funktionen und auch für Grad verwendet.",
    usage: "(f \\circ g)(x) = f(g(x)) ist die Hauptanwendung. Hochgestellt ergibt 90^\\circ Grad, wobei ein eigenes Gradzeichen aus einer Textbegleitschrift besser aussehen kann, und A^\\circ bezeichnet oft das Innere oder die Polarmenge. Manche Autoren verwenden \\circ für das Hadamard-Produkt, wobei \\odot die eindeutigere Alternative ist. \\circ ist ein binärer Operator und erhält daher mittleren Abstand; \\bigcirc ist ein größerer Kreis und \\cdot ein gefüllter Punkt. Vermeiden Sie den Buchstaben o für die Komposition.",
  },
  "bullet": {
    name: "Aufzählungspunkt",
    meaning: "Gefüllter runder Punkt als binärer Operator, verwendet für Platzhalter, allgemeine Produkte und graduierte Objekte.",
    usage: "Kategorientheorie und homologische Algebra verwenden \\bullet als Indexplatzhalter, etwa C_\\bullet für einen Kettenkomplex und H^\\bullet für die gesamte Kohomologie. Es dient auch als Platzhalterargument, f(\\bullet, y), und als Verknüpfungszeichen in der Algebra. Aufzählungspunkte in itemize-Listen werden von \\textbullet erzeugt, nicht vom mathematischen \\bullet. Im Vergleich zu \\cdot ist es größer und kräftiger; \\cdot ist die richtige Wahl für gewöhnliche Multiplikation oder Skalarprodukte. Als binärer Operator erhält es mittleren Abstand, als Platzhalter in f(\\bullet) passt der Abstand dennoch, da kein linker Operand vorhanden ist.",
  },
  "diamond": {
    name: "Raute",
    meaning: "Kleine Raute als binärer Operator, verwendet für allgemeine Verknüpfungen und einige modale und algebraische Notationen.",
    usage: "\\diamond erscheint als beliebige Verknüpfung (a \\diamond b), als Rautenprodukt in der Lie-Theorie und in der Automatentheorie. Die Modallogik schreibt die Möglichkeit mit einer größeren Raute, meist \\Diamond oder \\lozenge, statt mit dieser kleinen Operatorversion. Da \\diamond ein binärer Operator ist, ergibt die Verwendung als vorangestellter Operator vor einer Formel einen seltsamen Abstand; verwenden Sie \\Diamond oder klammern Sie es als {\\diamond}p. Es unterscheidet sich von \\diamondsuit, der Spielkartenfarbe Karo, die ein gewöhnliches Symbol ist.",
  },
  "big-circle": {
    name: "Großer Kreis",
    meaning: "Großer offener Kreis als binärer Operator, größer als \\circ, verwendet für spezielle Produkte und Diagramme.",
    usage: "\\bigcirc ist vor allem ein frei wählbares Symbol für eigene Verknüpfungen, etwa ein kastenartiges Produkt, oder dient in der temporalen Logik als Kreis für den Nächster-Zeitpunkt-Operator, \\bigcirc p. Es ist ein binärer Operator und kein großer Operator mit Grenzen, wächst also im Display-Modus nicht so wie \\bigcup. Um ein Symbol einzukreisen, ist das Überlagern mit \\bigcirc umständlich; ein eingekreister Knoten aus einem Zeichenpaket oder \\textcircled funktioniert besser. Für die Komposition ist das kleinere \\circ Standard. Für einen eingekreisten Operator wie \\oplus oder \\otimes passen die eigenen Befehle besser als Überlagerungen.",
  },
  "triangle-up": {
    name: "Aufwärts zeigendes Dreieck",
    meaning: "Nach oben zeigendes offenes Dreieck, verwendet für Dreiecke in der Geometrie, die symmetrische Differenz und den Laplace-Operator.",
    usage: "Die Geometrie schreibt \\triangle ABC für ein Dreieck, die Mengenlehre A \\triangle B für die symmetrische Differenz, und manche Texte verwenden es für den Laplace-Operator, obwohl \\Delta oder \\nabla^2 üblicher ist. In Standard-LaTeX ist \\triangle ein gewöhnliches Symbol und kein binärer Operator, in A \\triangle B sollten Sie daher \\mathbin{\\triangle} für den korrekten Abstand verwenden oder auf \\bigtriangleup ausweichen, das bereits ein binärer Operator ist. Es ist größer und anders geformt als das griechische große \\Delta.",
  },
  "triangle-down": {
    name: "Abwärts zeigendes Dreieck",
    meaning: "Kleines nach unten zeigendes offenes Dreieck, ein gewöhnliches Symbol und kein Operator.",
    usage: "\\triangledown ist ein kleineres, nach unten zeigendes Dreieck mit gewöhnlichem Abstand, das in manchen Notationen als Verzierung oder Markierung dient. Es ist nicht dasselbe wie \\nabla, der Gradientenoperator, der eine andere Form hat und für \\nabla f das Richtige ist; ebenso wenig ist es \\bigtriangledown, ein größerer binärer Operator. Wenn Sie \\triangledown als Verknüpfung verwenden, setzen Sie es in \\mathbin, um Operatorabstand zu erhalten. Für gefüllte Varianten steht \\blacktriangledown zur Verfügung. In fertigen Arbeiten kommt es selten vor, meist als Verweis auf eine Diagrammmarkierung in Bildunterschriften oder als eigene Verknüpfung.",
  },
  "square": {
    name: "Quadrat",
    meaning: "Offenes Quadratsymbol, verwendet für den d'Alembert-Operator, die modale Notwendigkeit und als Beweisendezeichen.",
    usage: "Physiker schreiben \\square für den d'Alembertschen Wellenoperator, \\square = \\partial_t^2/c^2 - \\nabla^2, die Modallogik verwendet \\square p für „notwendigerweise p“ (oft als \\Box), und das hohle Quadrat dient als Grabstein am Ende von Beweisen. In amsthm-Beweisen wird der Grabstein automatisch über \\qedsymbol gesetzt, Sie tippen ihn also selten selbst. \\square ist ein gewöhnliches Symbol; \\blacksquare liefert die gefüllte Version. Viele Logiktexte schreiben \\Box für die Notwendigkeit; die beiden Zeichen sehen nahezu gleich aus. Als Operator vor einem Feld ist kein zusätzlicher Abstand nötig.",
  },
  "wedge": {
    name: "Keilprodukt",
    meaning: "Keil als binärer Operator, für das logische UND, das äußere Produkt (Dachprodukt) und das Infimum in Verbänden.",
    usage: "Die Differentialgeometrie bildet Formen wie dx \\wedge dy, mit \\omega \\wedge \\eta = (-1)^{kl} \\eta \\wedge \\omega. Die Logik verwendet p \\wedge q für die Konjunktion (\\land ist ein Alias), die Verbandstheorie schreibt a \\wedge b für die größte untere Schranke, und Stochastiker schreiben s \\wedge t für \\min(s, t). Es ist ein binärer Operator mit mittlerem Abstand. Für Konjunktionen über eine Indexmenge verwenden Sie den großen Operator \\bigwedge. In der Topologie ist X \\wedge Y das Smash-Produkt punktierter Räume. Verwechseln Sie es nicht mit dem Dach-Akzent \\hat oder \\widehat.",
  },
  "vee": {
    name: "Disjunktionszeichen",
    meaning: "Vee als binärer Operator, für das logische ODER, das Supremum in Verbänden und Einpunktvereinigungen von Räumen.",
    usage: "Die Logik schreibt p \\vee q für die inklusive Disjunktion, und \\lor ist ein identischer Alias. Die Verbandstheorie verwendet a \\vee b für die kleinste obere Schranke, die Wahrscheinlichkeitstheorie schreibt s \\vee t für \\max(s, t), und die Topologie verwendet X \\vee Y für die Einpunktvereinigung, bei der Räume an einem Basispunkt verklebt werden. Für viele Terme verwenden Sie \\bigvee_{i} p_i. Es unterscheidet sich vom Buchstaben v und von \\veebar, das manche Texte für das exklusive Oder verwenden. Das Symbol hat den Abstand eines binären Operators.",
  },
  "amalgamation": {
    name: "Amalgamation",
    meaning: "Amalgamationsoperator, verwendet für disjunkte Vereinigungen und Koprodukte.",
    usage: "Kategorientheorie und Topologie schreiben X \\amalg Y für das Koprodukt bzw. die disjunkte Vereinigung, und die Gruppentheorie verwendet G \\ast_H K für amalgamierte freie Produkte, in manchen Texten mit \\amalg. \\amalg ist ein binärer Operator. Für die indizierte Version mit Grenzen verwenden Sie den großen Operator \\coprod_{i \\in I} X_i, der gleich aussieht, aber im Display-Stil mitwächst. Alternativen für die disjunkte Vereinigung sind \\sqcup und \\bigsqcup, die flacher geformt und in der Mengenlehre gebräuchlicher sind.",
  },
  "dagger": {
    name: "Kreuzzeichen",
    meaning: "Kreuzsymbol, hauptsächlich hochgestellt für Adjungierte und hermitesch Konjugierte verwendet.",
    usage: "Die Quantenmechanik schreibt A^\\dagger für den hermitesch adjungierten Operator, a^\\dagger ist also der Erzeugungsoperator, und in der linearen Algebra steht A^\\dagger in manchen Texten für die Moore-Penrose-Pseudoinverse (A^+ ist die Alternative). Das Kreuz markiert auch Fußnoten oder besondere Einträge in Tabellen. In der Mathematik ist es ein binärer Operator, hochgestellt spielt sein Abstand jedoch keine Rolle. Im Textmodus verwenden Sie \\textdagger. Die doppelte Version \\ddagger dient für Fußnoten zweiter Ebene und einige spezielle Notationen. Die Quantenfeldtheorie verwendet es ständig für Erzeugungs- und Vernichtungsoperatoren.",
  },
  "double-dagger": {
    name: "Doppelkreuz",
    meaning: "Doppelkreuzsymbol, verwendet als Fußnotenzeichen und gelegentlich als hochgestellte Verzierung.",
    usage: "\\ddagger ist in vielen Stilen das zweite Fußnotensymbol nach \\dagger und markiert Zugehörigkeiten oder Tabellenanmerkungen. In der Mathematik verziert es manchmal Operatoren, etwa einen Übergangszustand X^\\ddagger in der chemischen Kinetik (Aktivierungsenergie \\Delta G^\\ddagger). Als mathematischer Befehl ist es ein binärer Operator, hochgestellt spielt der Abstand jedoch keine Rolle. Im Textmodus verwenden Sie \\textdaggerdbl. Da seine Bedeutung nicht standardisiert ist, erklären Sie es bei der ersten Verwendung. Hochgestellt braucht es keine Klammern: X^\\ddagger funktioniert direkt.",
  },
  "wreath-product": {
    name: "Kranzprodukt",
    meaning: "Kranzoperator, zwischen Gruppen geschrieben für das Kranzprodukt.",
    usage: "Die Gruppentheorie schreibt G \\wr H für das Kranzprodukt, zum Beispiel die hyperoktaedrische Gruppe \\mathbb{Z}_2 \\wr S_n, und Sylow-Untergruppen symmetrischer Gruppen sind iterierte Kranzprodukte. Das Symbol ist eine kleine senkrechte Wellenlinie, die als binärer Operator gesetzt wird. Es ähnelt etwas einer gedrehten Tilde, trägt aber anders als die Relation \\sim den Abstand eines binären Operators. Manche Autoren schreiben die Faktoren in umgekehrter Reihenfolge, geben Sie also an, welche Gruppe operiert. Die Gruppe des Zauberwürfels und Automorphismengruppen von Bäumen sind Standardbeispiele für Kranzprodukte.",
  },
  "set-minus": {
    name: "Mengendifferenz",
    meaning: "Operator der Mengendifferenz: A \\setminus B ist die Menge der Elemente von A, die nicht in B liegen.",
    usage: "Verwenden Sie \\setminus für die Mengendifferenz, A \\setminus B, und für das Herausnehmen, \\mathbb{R} \\setminus \\{0\\}. Es ist ein binärer Operator mit korrektem Abstand, während \\backslash gleich aussieht, aber ein gewöhnliches Symbol für Quotienten wie G \\backslash X (Linksnebenklassen) ist. Eine kleinere Variante, \\smallsetminus, passt zu manchen Schriften besser. Manche Autoren schreiben stattdessen A - B, doch \\setminus vermeidet die Verwechslung mit der Subtraktion. Zusammen mit \\complement gilt: A \\setminus B = A \\cap B^\\complement. In Brüchen wie G \\backslash X / H für Doppelnebenklassen behalten Sie stattdessen \\backslash für den Quotienten bei.",
  },
};

export default text;
