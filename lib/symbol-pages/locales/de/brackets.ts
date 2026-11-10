import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/brackets/<slug>. */
const text: SymbolPageTranslations = {
  "angle-bracket-left": {
    name: "Linke spitze Klammer",
    meaning: "Öffnende spitze Klammer, verwendet für Skalarprodukte, Erwartungswerte und erzeugte Untergruppen.",
    usage: "Die linke spitze Klammer leitet Notationen ein wie das Skalarprodukt \\langle u, v \\rangle, ein Bra-Ket \\langle \\psi | \\phi \\rangle, die Untergruppe \\langle g \\rangle oder einen zeitlichen Mittelwert \\langle x \\rangle. Verwenden Sie dafür niemals das Kleiner-Zeichen <: Es ist eine Relation mit breitem Abstand und hat die falsche Form. Sie funktioniert mit \\left und \\right für die automatische Größenanpassung und mit \\big, \\Big und verwandten Befehlen für manuelle Größen. Verwenden Sie sie immer zusammen mit \\rangle; soll nur eine Seite sichtbar sein, nehmen Sie \\left. oder \\right. als unsichtbares Gegenstück.",
  },
  "angle-bracket-right": {
    name: "Rechte spitze Klammer",
    meaning: "Schließende spitze Klammer, die Skalarprodukte, Kets, Mittelwerte und andere Notationen mit spitzen Klammern beendet.",
    usage: "\\rangle schließt, was \\langle öffnet: \\langle f, g \\rangle in Hilberträumen, das Dirac-Ket |\\psi\\rangle und Präsentationen wie \\langle a, b \\mid a^2 = b^3 \\rangle. Das Größer-Zeichen > ist kein Ersatz, da es eine Relation mit zusätzlichem Abstand und einem flacheren Winkel ist. Ist der Inhalt hoch, etwa bei Brüchen oder Summen, verwenden Sie \\left\\langle ... \\right\\rangle, damit beide Seiten gemeinsam wachsen. Ein alleinstehendes Ket wird als |\\psi\\rangle geschrieben und braucht kein passendes \\langle.",
  },
  "angle-brackets": {
    name: "Spitze Klammern",
    meaning: "Schließt einen Ausdruck in spitze Klammern ein, für Mittelwerte, Skalarprodukte oder das Erzeugnis von Erzeugern.",
    usage: "Dieses Klammerpaar wird in der Physik für Erwartungswerte verwendet, \\langle E \\rangle, für Skalarprodukte \\langle x, y \\rangle und für die von Elementen erzeugte Untergruppe oder das erzeugte Ideal, \\langle a \\rangle. Bei hohen Argumenten wechseln Sie zu \\left\\langle \\frac{a}{b} \\right\\rangle. Wenn Sie häufig Skalarprodukte schreiben, definieren Sie ein Makro, etwa mit einem Werkzeug für gepaarte Begrenzer, damit die Größen einheitlich bleiben. In der Dirac-Notation bevorzugen viele einen eigenen Satz von Bra-Ket-Makros, da der Abstand um den senkrechten Strich in \\langle \\phi | \\psi \\rangle ungleichmäßig sein kann; \\mid fügt den Abstand einer Relation hinzu, | dagegen keinen.",
  },
  "ceiling-left": {
    name: "Linke Aufrundungsklammer",
    meaning: "Linke Aufrundungsklammer, die öffnende Hälfte der Aufrundungsfunktion, die auf eine ganze Zahl aufrundet.",
    usage: "\\lceil eröffnet die Aufrundungsnotation \\lceil x \\rceil, die kleinste ganze Zahl, die mindestens x ist. Sie ist ein Begrenzer und funktioniert daher mit \\left\\lceil ... \\right\\rceil für hohen Inhalt wie \\frac{n}{2} sowie mit Größen im Stil von \\big. Bei der Aufrundungsklammer liegt der waagerechte Strich oben, bei der Abrundungsklammer \\lfloor unten, ein Paar, das man beim Korrekturlesen leicht verwechselt. Manche Autoren verwenden \\lceil und \\rceil auch als Eckanführungszeichen für die Gödelnummerierung, wofür \\ulcorner eine Alternative ist.",
  },
  "ceiling-right": {
    name: "Rechte Aufrundungsklammer",
    meaning: "Rechte Aufrundungsklammer, die die Notation der Aufrundungsfunktion schließt.",
    usage: "Kombinieren Sie \\rceil mit \\lceil, um \\lceil \\log_2 n \\rceil zu schreiben, die in vielen Algorithmen benötigte Anzahl an Bits, oder \\lceil n/k \\rceil für die Anzahl der Blöcke der Größe k, die nötig sind, um n Elemente abzudecken. Anders als für runde Klammern gibt es für die Aufrundungsklammer kein ASCII-Gegenstück, der Befehl ist also die einzige Möglichkeit, das Symbol zu erhalten. Verwenden Sie \\right\\rceil, wenn die passende linke Klammer mit \\left gesetzt wurde. Wenn Sie häufig Aufrundungen schreiben, hält ein Makro für gepaarte Begrenzer wie \\ceil{x} die Größen im ganzen Dokument einheitlich.",
  },
  "ceiling": {
    name: "Aufrundungsfunktion",
    meaning: "Rundet x auf die kleinste ganze Zahl auf, die größer oder gleich x ist: die Aufrundungsfunktion.",
    usage: "Aufrundungen kommen in der Algorithmenanalyse vor (\\lceil \\log_2 n \\rceil Vergleiche, \\lceil n/2 \\rceil bei Mergesort), in der Zahlentheorie und bei Abzählproblemen wie dem Schubfachprinzip, nach dem ein Fach mindestens \\lceil n/k \\rceil Elemente enthält. Beachten Sie bei negativen Eingaben, dass \\lceil -2.5 \\rceil = -2 gilt. Ist das Argument ein Bruch oder ein hoher Ausdruck, verwenden Sie \\left\\lceil ... \\right\\rceil, damit die Klammern mitwachsen. Ersetzen Sie sie nicht durch eckige Klammern [x]: Ältere Texte verwendeten [x] für die Abrundung, was die Schreibweise mehrdeutig macht.",
  },
  "floor-left": {
    name: "Linke Abrundungsklammer",
    meaning: "Linke Abrundungsklammer, die öffnende Hälfte der Abrundungsfunktion, die auf eine ganze Zahl abrundet.",
    usage: "\\lfloor leitet Notationen wie \\lfloor x \\rfloor und \\lfloor n/2 \\rfloor ein. Bei der Abrundungsklammer liegt der Strich unten, im Gegensatz zu \\lceil, dessen Strich oben liegt. Als Begrenzer lässt sie sich mit \\left\\lfloor oder \\bigl\\lfloor in der Größe anpassen. In der Zahlentheorie erscheint dieselbe Klammer in Formeln wie der Legendre-Formel für die Potenz einer Primzahl, die n! teilt. Zeigt Ihre Schrift oder Ihr Renderer eine einfache eckige Klammer, prüfen Sie, ob Sie \\lfloor und nicht [ getippt haben, das ein anderes Zeichen ist.",
  },
  "floor-right": {
    name: "Rechte Abrundungsklammer",
    meaning: "Rechte Abrundungsklammer, die die Notation der Abrundungsfunktion schließt.",
    usage: "Schließen Sie jedes \\lfloor mit \\rfloor, zum Beispiel in \\lfloor x \\rfloor oder bei der ganzzahligen Division \\lfloor a/b \\rfloor, die viele Programmiersprachen für positive Operanden umsetzen. Wurde die linke Klammer mit \\left\\lfloor gesetzt, muss die rechte \\right\\rfloor in derselben mathematischen Gruppe sein, sonst meldet LaTeX ein fehlendes \\right. Das Paar dient auch zum Runden auf die nächste ganze Zahl über \\lfloor x + 1/2 \\rfloor. Ein Makro für gepaarte Begrenzer wie \\floor{x} hält die Notation in langen Dokumenten einheitlich.",
  },
  "floor": {
    name: "Abrundungsfunktion",
    meaning: "Rundet x auf die größte ganze Zahl ab, die kleiner oder gleich x ist: die Abrundungsfunktion.",
    usage: "Die Abrundung erscheint bei der ganzzahligen Division, beim gebrochenen Anteil \\{x\\} = x - \\lfloor x \\rfloor, beim Mittelpunkt der binären Suche \\lfloor (lo + hi)/2 \\rfloor und in zahlentheoretischen Summen wie der Legendre-Formel. Bei negativen Zahlen rundet sie von null weg: \\lfloor -2.5 \\rfloor = -3, was sich vom Abschneiden unterscheidet. Ältere Literatur schrieb [x] für die Abrundung (die Gauß-Klammer), heute wird jedoch die Klammernotation bevorzugt, weil sie eindeutig ist. Verwenden Sie \\left\\lfloor ... \\right\\rfloor um Brüche, damit die Klammern zur Höhe des Inhalts passen.",
  },
  "double-vertical-bar": {
    name: "Doppelter senkrechter Strich",
    meaning: "Doppelter senkrechter Strich, der Begrenzer für Normen und in manchen Zusammenhängen das Zeichen für Parallelität.",
    usage: "\\| erzeugt zwei senkrechte Linien und wird meist paarweise für Normen verwendet, \\|x\\|. Als einfaches Symbol hat es gewöhnliche Abstände; meinen Sie die Relation „ist parallel zu“, verwenden Sie daher \\parallel, das den Abstand einer Relation hinzufügt. Für Normen werden \\lVert und \\rVert empfohlen, da sie LaTeX mitteilen, welche Seite öffnet und welche schließt, was neben Operatoren und Minuszeichen korrekte Abstände ergibt. Die Größe lässt sich mit \\left\\| ... \\right\\| oder \\big\\| anpassen. Im Textmodus liefert \\| keine Striche; verwenden Sie \\textbardbl oder wechseln Sie in den Mathematikmodus.",
  },
  "norm": {
    name: "Norm",
    meaning: "Schließt einen Vektor oder eine Funktion in Doppelstriche ein, um ihre Norm, also ihre Länge oder Größe, zu bezeichnen.",
    usage: "Normen sind in Analysis und linearer Algebra allgegenwärtig: die euklidische Norm \\|x\\|_2, die Supremumsnorm \\|f\\|_\\infty, die Frobeniusnorm \\|A\\|_F und die Dreiecksungleichung \\|x + y\\| \\le \\|x\\| + \\|y\\|. Ein Index nach dem schließenden Strich gibt an, welche Norm gemeint ist. Schreiben Sie \\lVert x \\rVert statt \\| x \\|, erhalten Sie in Ausdrücken wie \\|{-x}\\| bessere Abstände, da LaTeX dann die Rolle jedes Strichs kennt. Für hohen Inhalt, etwa Brüche innerhalb der Norm, verwenden Sie \\left\\| ... \\right\\|. Einfache Striche |x| sind für Beträge reserviert.",
  },
  "double-bracket-left": {
    name: "Linke doppelte eckige Klammer",
    meaning: "Linke doppelte (hohle) eckige Klammer, verwendet für semantische Klammern, ganzzahlige Intervalle und die Iverson-Notation.",
    usage: "In der Semantik von Programmiersprachen bezeichnet \\llbracket e \\rrbracket die Bedeutung eines Ausdrucks, wie in der denotationellen Semantik. Texte der französischen Tradition und die Kombinatorik schreiben \\llbracket 1, n \\rrbracket für das ganzzahlige Intervall \\{1, \\dots, n\\}, und manche Autoren verwenden sie für die Iverson-Klammer. Der Befehl ist weder im LaTeX-Kern noch in den AMS-Symbolschriften enthalten und benötigt daher ein Symbolpaket, das ihn bereitstellt; KaTeX unterstützt ihn direkt. Sie wächst nur mit Paketen, die dehnbare Versionen bereitstellen, prüfen Sie also bei hohem Inhalt Ihre Konfiguration. Verwenden Sie sie zusammen mit \\rrbracket.",
  },
  "double-bracket-right": {
    name: "Rechte doppelte eckige Klammer",
    meaning: "Rechte doppelte eckige Klammer, die die Notation semantischer Klammern oder ganzzahliger Intervalle schließt.",
    usage: "Schließen Sie \\llbracket mit \\rrbracket, um \\llbracket P \\rrbracket_\\sigma zu schreiben, die Bedeutung des Programms P im Zustand \\sigma, oder den ganzzahligen Bereich \\llbracket a, b \\rrbracket. Imitieren Sie sie nicht mit ]] oder mit ]\\!], die eine andere Form und andere Abstände ergeben als das hohle Klammerzeichen. Autoren mit vielen semantischen Klammern definieren oft ein Makro wie \\sem{e}, damit sich der Klammerstil an einer Stelle ändern lässt, etwa durch Umstellen auf [\\![ e ]\\!], falls die Schrift mit der doppelten Klammer nicht verfügbar ist.",
  },
  "double-brackets": {
    name: "Doppelte eckige Klammern",
    meaning: "Schließt einen Ausdruck in doppelte eckige Klammern ein, für denotationelle Semantik oder ganzzahlige Intervalle.",
    usage: "Dieses Klammerpaar liefert in der formalen Semantik die semantische Funktion, \\llbracket x \\rrbracket_\\rho für den Wert von x in der Umgebung \\rho, und in der Kombinatorik das diskrete Intervall \\llbracket m, n \\rrbracket. Es erscheint auch in der Iverson-Klammer und in der Sprungnotation für Unstetigkeiten bei numerischen partiellen Differentialgleichungen, \\llbracket u \\rrbracket = u^+ - u^-. Da das Zeichen nicht in den Standardschriften enthalten ist, benötigt der Quelltext ein Symbolpaket; beachten Sie den Pakethinweis auf dieser Seite. Die hohlen Striche unterscheiden es optisch deutlich von verschachtelten gewöhnlichen Klammern.",
  },
  "parentheses": {
    name: "Runde Klammern",
    meaning: "Runde Klammern, die automatisch auf die Höhe ihres Inhalts mitwachsen.",
    usage: "\\left( und \\right) messen ihren Inhalt und wählen eine passende Größe, sodass \\left( \\frac{a}{b} \\right)^2 hohe Klammern erhält, während ein einfaches (x) klein bleibt. Jedes \\left braucht ein \\right in derselben Gruppe, und ein Zeilenumbruch innerhalb von align kann sie nicht trennen. Übermäßiger Gebrauch lässt einfache Ausdrücke schwerfällig wirken, und \\left...\\right fügt als inneres Atom etwas zusätzlichen Abstand ein, wodurch f\\left(x\\right) locker aussehen kann; für Funktionsargumente sind \\bigl( ... \\bigr) oder einfache Klammern oft besser. Sie richten ihre Größe nach dem höchsten Element, einschließlich der Grenzen von Summen.",
  },
  "square-brackets": {
    name: "Eckige Klammern",
    meaning: "Eckige Klammern, die sich ihrem Inhalt anpassen, zum Gruppieren, für Kommutatoren oder abgeschlossene Intervalle.",
    usage: "Eckige Klammern dienen als nächste Gruppierungsebene außerhalb runder Klammern, für das abgeschlossene Intervall [a, b], den Kommutator [A, B] = AB - BA, den Erwartungswert \\mathbb{E}[X] und Matrizen. Mit \\left[ ... \\right] strecken sich die Klammern um Brüche, Integrale oder Matrizen, wie in \\left[ \\frac{x^2}{2} \\right]_0^1 für ausgewertete Stammfunktionen. In einer bmatrix-Umgebung sind die Klammern bereits vorhanden, Sie brauchen \\left[ also nicht selbst. Für verschachtelte Klammern in einem langen Ausdruck bieten manuelle Größen wie \\Bigl[ ... \\Bigr] eine feinere Kontrolle.",
  },
  "curly-braces": {
    name: "Geschweifte Klammern",
    meaning: "Geschweifte Klammern, die sich auf die Höhe des Inhalts strecken, für die Mengenbildernotation und gruppierte Definitionen.",
    usage: "Geschweifte Klammern müssen als \\{ und \\} maskiert werden, da einfache geschweifte Klammern in LaTeX Gruppierungszeichen sind und nichts ausgeben. Mit \\left\\{ ... \\right\\} wachsen sie um hohen Inhalt wie \\left\\{ \\frac{p}{q} : q \\neq 0 \\right\\}. Für einen Trennstrich in der Mengenbildernotation, der ebenfalls mitwächst, verwenden Sie \\middle| dazwischen. Für abschnittsweise Definitionen zeichnet die cases-Umgebung die linke Klammer bereits selbst, Sie brauchen \\left\\{ ... \\right. also nicht von Hand. Im Textmodus verwenden Sie \\textbraceleft oder einfach \\{ im Mathematikmodus.",
  },
  "vertical-bar": {
    name: "Senkrechte Striche",
    meaning: "Senkrechte Striche, die sich ihrem Inhalt anpassen, für Beträge und Determinanten.",
    usage: "Verwenden Sie \\left| ... \\right|, wenn ein Betrag einen Bruch oder eine Summe enthält, wie in \\left| \\frac{a}{b} \\right|, und für Determinanten hoher Matrizen (wobei vmatrix einfacher ist). Ein einfaches | ist für LaTeX mehrdeutig: Es kann einen öffnenden nicht von einem schließenden Strich unterscheiden, was die Abstände um ein vorangestelltes Minuszeichen verderben kann. Für einheitliche Ergebnisse definieren Sie ein Makro mit \\lvert und \\rvert oder verwenden \\left\\lvert ... \\right\\rvert. Für Trennstriche in der Mengenbildernotation und bedingte Wahrscheinlichkeiten verwenden Sie stattdessen \\mid oder \\middle|.",
  },
  "big-parentheses": {
    name: "Große runde Klammern",
    meaning: "Runde Klammern in der zweiten festen Größenstufe, größer als \\big, aber kleiner als \\bigg.",
    usage: "TeX bietet vier manuelle Größen: \\big, \\Big, \\bigg und \\Bigg. \\Big( passt um einzelne Brüche oder Summen mit kleinen Grenzen und durchsucht, anders als \\left, den Inhalt nicht, kann also in mehrzeiligen Umgebungen über Zeilenumbrüche hinweg verwendet werden und liefert vorhersehbare Ergebnisse. Für korrekte Abstände verwenden Sie \\Bigl( zum Öffnen und \\Bigr) zum Schließen, da ein bloßes \\Big ein gewöhnliches Atom erzeugt. Manuelle Größen sind innerhalb von Funktionsargumenten oft \\left...\\right vorzuziehen, da \\left dort zusätzlichen Abstand einfügt. Die Größen sind fest und schrumpfen daher in Indizes nicht.",
  },
  "bigg-parentheses": {
    name: "Sehr große runde Klammern",
    meaning: "Die größte der vier manuellen Begrenzergrößen von TeX, für sehr hohen Inhalt wie verschachtelte Brüche.",
    usage: "\\Bigg( erzeugt runde Klammern von etwa zweieinhalbfacher Normalgröße, geeignet für gestapelte Brüche, große Integrale mit Grenzen oder Summen von Brüchen. Da die Größe fest ist, ist sie über mehrere Zeilen einer align-Umgebung hinweg vorhersehbar, wo sich \\left und \\right nicht trennen lassen. Verwenden Sie \\Biggl und \\Biggr für korrekte öffnende und schließende Abstände. Ist der Inhalt noch höher, kann \\left( ... \\right) mithilfe dehnbarer Teilstücke über \\Bigg hinauswachsen. Die Reihenfolge von klein nach groß lautet \\big, \\Big, \\bigg, \\Bigg.",
  },
  "left-delimiter-with-invisible-right": {
    name: "Linker Begrenzer mit unsichtbarem rechten",
    meaning: "Zeigt nur eine linke runde Klammer mit anpassbarer Größe; \\right. ist ein unsichtbarer schließender Begrenzer, der die Paarbildung erfüllt.",
    usage: "Zu jedem \\left muss ein \\right gehören, und die Form mit Punkt, \\right., schließt die Gruppe, ohne etwas auszugeben. Das ist nützlich, wenn ein geklammerter Ausdruck in einer weiteren Zeile eines align fortgesetzt wird (öffnen Sie mit \\left( in einer Zeile, schließen Sie mit \\right. und beginnen Sie in der nächsten neu mit \\left. ... \\right)), oder für einseitige geschweifte Klammern. Die Größen der beiden Hälften werden unabhängig berechnet, fügen Sie daher ein \\vphantom des hohen Inhalts hinzu, damit sie gleich bleiben. Für abschnittsweise definierte Funktionen ist die cases-Umgebung die sauberere Wahl als \\left\\{ ... \\right.",
  },
  "right-delimiter-with-invisible-left": {
    name: "Rechter Begrenzer mit unsichtbarem linken",
    meaning: "Gibt nur eine schließende runde Klammer mit anpassbarer Größe aus; \\left. dient als unsichtbares öffnendes Gegenstück.",
    usage: "\\left. ist der unsichtbare Öffner, mit dem sich \\right) an den Inhalt anpassen kann. Eine häufige Anwendung ist der Auswertungsstrich \\left. \\frac{df}{dx} \\right|_{x=0}, bei dem nur der rechte senkrechte Strich erscheinen und sich strecken soll. Er schließt auch eine Klammer ab, die in einer vorherigen Zeile einer mehrzeiligen Gleichung geöffnet wurde. Da jede Hälfte separat bemessen wird, fügen Sie \\vphantom{...} mit dem höchsten Teil aus der anderen Zeile ein, um die Höhen anzugleichen. Der Punkt selbst wird nicht ausgegeben, fügt aber den kleinen Abstand eines leeren Begrenzers hinzu.",
  },
  "half-open-interval-brackets": {
    name: "Klammern für halboffene Intervalle",
    meaning: "Kombiniert eine linke eckige Klammer mit einer rechten runden Klammer, die Notation für ein halboffenes Intervall.",
    usage: "\\left und \\right müssen in der Form nicht übereinstimmen, sodass \\left[ ... \\right) das halboffene Intervall [a, b) schreibt, abgeschlossen bei a und offen bei b, wie es in der Wahrscheinlichkeitsrechnung (Verteilungsfunktionen sind auf [x, \\infty) rechtsstetig) und in der Maßtheorie üblich ist. Ungleiche Paare erfassen auch (a, b], geschrieben als \\left( ... \\right]. Für einfache Intervalle genügt ein schlichtes [0, 1) ohne \\left/\\right und ist sauberer. Manche europäischen Texte verwenden stattdessen umgekehrte Klammern, wie in [a, b[, die Sie direkt eingeben können.",
  },
};

export default text;
