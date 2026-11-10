import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/order/<slug>. */
const text: SymbolPageTranslations = {
  "curly-precedes": {
    name: "Geschwungenes Vorgängerzeichen",
    meaning: "Geschwungene Relation „vorangehend oder gleich“, verwendet für nicht strikte Ordnungen und Präferenzrelationen, die nicht das übliche numerische ≤ sind.",
    usage: "Ordnungstheoretiker und Ökonomen greifen zu \\preccurlyeq, wenn eine abstrakte Präordnung ein Symbol braucht, das sich sichtbar von \\leq unterscheidet, etwa die schwache Präferenz eines Konsumenten x \\preccurlyeq y oder die Dominanzordnung auf Partitionen. Das strikte Gegenstück ist \\prec, das Spiegelbild \\succcurlyeq. Verwechseln Sie es nicht mit \\preceq, das darunter einen geraden statt eines gebogenen Strichs hat; manche Autoren verwenden beide in einer Arbeit, um zwei verschiedene Ordnungen zu kennzeichnen. Da es eine Relation ist, umgibt TeX es automatisch mit breiten Abständen, ergänzen Sie also nie manuell \\, oder \;.",
    example: "x \\preccurlyeq y \\text{ und } y \\preccurlyeq z \\implies x \\preccurlyeq z",
  },
  "curly-succeeds": {
    name: "Geschwungenes Nachfolgerzeichen",
    meaning: "Geschwungene Relation „nachfolgend oder gleich“, die Umkehrung von \\preccurlyeq für schwache Ordnungen, Präferenzen und Majorisierung.",
    usage: "In der Mikroökonomie liest man x \\succcurlyeq y als „x wird y schwach vorgezogen“, und in der linearen Algebra kennzeichnet es manchmal Majorisierung oder eine verallgemeinerte Ungleichung. Das gerade unterstrichene \\succeq sieht ähnlich aus und ist die gängigere Wahl für positiv semidefinite Matrizen (A \\succeq 0), wählen Sie also eine Konvention und halten Sie sie in der ganzen Arbeit durch. Die strikte Version ist \\succ. Da sich ein Relationssymbol mit \\not nur unschön verneinen lässt, prüfen Sie die Ausgabe: Eigene Verneinungen wie \\nsucceq gibt es für die Form mit geradem Strich, und sie sehen meist besser aus als \\not\\succcurlyeq.",
  },
  "not-less-than": {
    name: "Nicht-kleiner-Zeichen",
    meaning: "Verneintes Kleiner-Zeichen: drückt aus, dass eine Größe nicht echt kleiner als eine andere ist.",
    usage: "a \\nless b ist in einer Totalordnung logisch dasselbe wie a \\geq b, in einer Halbordnung sagen beide jedoch Verschiedenes aus, und genau dort ist \\nless angebracht: Zwei unvergleichbare Elemente erfüllen sowohl a \\nless b als auch b \\nless a. Das Zeichen ist ein einzelnes vorgefertigtes Symbol mit Schrägstrich und daher sauberer als \\not<, dessen Strich außermittig sitzen kann. Das Gegenstück für die andere Richtung ist \\ngtr. Für verneinte nicht strikte Versionen verwenden Sie \\nleq oder \\nleqslant, statt \\not zu stapeln.",
    example: "a \\nless b \\text{ und } b \\nless a \\text{ (unvergleichbar)}",
  },
  "not-greater-than": {
    name: "Nicht-größer-Zeichen",
    meaning: "Verneintes Größer-Zeichen, das aussagt, dass die linke Seite nicht echt größer als die rechte ist.",
    usage: "Der Befehlsname lässt die Vokale von „greater“ weg (\\ngtr, nicht \\ngt oder \\ngreater), was beim Tippen aus dem Gedächtnis oft zu Fehlern führt. In einer linearen Ordnung bedeutet x \\ngtr y einfach x \\leq y, daher bevorzugen die meisten die positive Form; natürlicher ist \\ngtr in Halbordnungen, Verbänden oder wenn das Scheitern einer Voraussetzung festgehalten wird, etwa bei einer Folge, die nicht schließlich größer als eine Schranke ist. Kombinieren Sie es mit \\nless für die Gegenrichtung und \\ngeq für die verneinte nicht strikte Version. Es hat wie > selbst Relationsabstand.",
  },
  "not-less-or-equal": {
    name: "Nicht-kleiner-gleich-Zeichen",
    meaning: "Nicht kleiner oder gleich: Verneinung von ≤ mit einem Schrägstrich durch die Form mit waagerechtem Strich.",
    usage: "Verwenden Sie \\nleq, wenn Sie festhalten, dass eine Ungleichung nicht gilt, etwa in Gegenbeispielen oder in Halbordnungen, in denen x \\nleq y nicht y \\leq x impliziert. Es gibt drei verwandte Zeichen: \\nleq verneint das einfach unterstrichene \\leq, \\nleqslant verneint das schräge \\leqslant, und \\nleqq verneint das doppelt unterstrichene \\leqq. Passen Sie die Verneinung an den unverneinten Stil an, den der Rest Ihres Dokuments verwendet, damit die Symbole wie eine Familie aussehen. Ein vorgefertigtes \\nleq ist \\not\\leq vorzuziehen, das einen allgemeinen Schrägstrich setzt, der nicht zum Strich passen muss.",
    example: "\\exists\\, x, y \\in P : x \\nleq y \\text{ und } y \\nleq x",
  },
  "not-greater-or-equal": {
    name: "Nicht-größer-gleich-Zeichen",
    meaning: "Nicht größer oder gleich: die durchgestrichene Form von ≥, die anzeigt, dass die Ungleichung nicht gilt.",
    usage: "In der reellen Analysis ist x \\ngeq 0 einfach x < 0, bei Vektor- oder Matrixordnungen ist es jedoch schwächer: Ein Vektor kann komponentenweise nicht nichtnegativ sein, ohne negativ zu sein, dort ist \\ngeq also das ehrliche Symbol. Es gehört zur selben Gruppe wie \\nleq, \\ngeqslant und \\ngeqq, und Sie sollten die Version wählen, deren unverneinter Zwilling in Ihrem Text vorkommt. Vermeiden Sie \\not\\geq, wenn Ihnen das Aussehen wichtig ist, da der allgemeine Schrägstrich für = positioniert ist und verrutscht wirken kann. Wie alle Relationen erhält es automatisch breiten Abstand.",
    example: "\\mathbf{v} \\ngeq \\mathbf{0} \\text{ obwohl } v_1 > 0",
  },
  "minimum": {
    name: "Minimum",
    meaning: "Minimumoperator, der den kleinsten Wert einer endlichen Menge oder den kleinsten Wert liefert, den eine Funktion annimmt.",
    usage: "\\min ist ein vordefinierter Operatorname: Er setzt ein aufrechtes „min“ mit korrektem Abstand, und im Display-Modus steht ein Index darunter, wie in \\min_{x \\in S} f(x). Im Fließtext rückt der Index zur Seite, um Zeilenhöhe zu sparen; mit \\min\\limits_{x} erzwingen Sie ihn darunter, falls wirklich nötig. Ein einfach getipptes min im Mathematikmodus ergibt drei kursive, miteinander multiplizierte Variablen, ein häufiger Fehler. Für das minimierende Argument gibt es keinen eingebauten Befehl, definieren Sie daher \\DeclareMathOperator*{\\argmin}{arg\\,min} in der Präambel. Unterscheiden Sie \\min von \\inf, das nicht angenommen werden muss.",
  },
  "maximum": {
    name: "Maximum",
    meaning: "Maximumoperator: das größte Element einer Menge oder der größte Wert, den eine Funktion auf ihrem Definitionsbereich erreicht.",
    usage: "Optimierungsprobleme, die Maximumnorm \\|x\\|_\\infty = \\max_i |x_i| und ReLU-Aktivierungen \\max(0, x) beruhen alle auf \\max. Bei Grenzen verhält es sich wie \\sum: im Display-Stil unter dem Operator, im Fließtext daneben. Klammern danach werden nicht automatisch skaliert, schreiben Sie also \\max\\left( a, b \\right) oder \\max\\bigl( \\dots \\bigr), wenn das Argument Brüche enthält. Wenn das Maximum möglicherweise nicht existiert, verwenden Sie stattdessen \\sup. Für einen Argmax-Operator deklarieren Sie einen mit dem Stern-Befehl \\DeclareMathOperator*, damit auch sein Index im Display-Modus darunter steht.",
  },
  "infimum": {
    name: "Infimum",
    meaning: "Infimum, die größte untere Schranke einer Menge reeller Zahlen, die auch dann existiert, wenn es kein Minimum gibt.",
    usage: "Die Menge \\{1/n : n \\in \\mathbb{N}\\} hat \\inf gleich 0, aber kein Minimum, das klassische Beispiel dafür, warum die Analysis \\inf statt \\min braucht. Der Befehl setzt ein aufrechtes „inf“ mit Operatorabstand und Grenzen im Display-Stil darunter, sodass \\inf_{n \\ge 1} a_n in einer Gleichungsumgebung richtig aussieht. Ein häufiger Fehler ist die Verwechslung von \\inf mit \\infty, dem Unendlichzeichen. Verwandte Operatoren sind \\liminf, das bereits als Befehl existiert, und das wesentliche Infimum, das Sie selbst definieren müssten, etwa mit \\operatorname*{ess\\,inf}.",
  },
  "supremum": {
    name: "Supremum",
    meaning: "Supremum: die kleinste obere Schranke einer Menge, zentral für die Vollständigkeit der reellen Zahlen und für Normdefinitionen.",
    usage: "Operatornormen schreibt man \\|A\\| = \\sup_{\\|x\\| = 1} \\|Ax\\|, und die Supremumsnorm einer Funktion ist \\sup_x |f(x)|. Der Befehl setzt seinen Index im Display-Modus darunter und im Fließtext rechts daneben, genau wie \\lim. Verwenden Sie \\limsup für den Limes superior, statt \\lim und \\sup von Hand zu kombinieren, und denken Sie daran, dass \\sup für jede beschränkte nichtleere Teilmenge der reellen Zahlen existiert, \\max dagegen nicht unbedingt. Ist die Indexbedingung lang, stapeln Sie Zeilen mit \\substack{...} unter dem Operator, statt einen breiten Index hineinzuzwängen.",
  },
  "least-upper-bound": {
    name: "Kleinste obere Schranke",
    meaning: "Abkürzung „lub“ für die kleinste obere Schranke, ein älteres Synonym für das Supremum, verbreitet in Ordnungs- und Verbandstheorie.",
    usage: "Lehrbücher über Halbordnungen und Verbände schreiben manchmal \\text{lub}\\, S statt \\sup S, und das Supremum a \\vee b ist die kleinste obere Schranke eines Paares. Der Satz mit \\text funktioniert, hat aber zwei Nachteile: \\text übernimmt die umgebende Schrift, wird also in einem kursiven Satz ebenfalls kursiv, und es liefert keinen Operatorabstand vor dem Argument. Sauberer ist \\operatorname{lub} oder eine Präambelzeile \\DeclareMathOperator{\\lub}{lub}, die es aufrecht hält und wie \\sup Abstand gibt. Verwenden Sie die Stern-Deklaration, wenn Indizes im Display-Modus darunter stehen sollen.",
  },
  "greatest-lower-bound": {
    name: "Größte untere Schranke",
    meaning: "Abkürzung „glb“ für die größte untere Schranke, die ordnungstheoretische Bezeichnung für das Infimum einer Menge.",
    usage: "In der Verbandstheorie ist das Infimum a \\wedge b als größte untere Schranke von a und b definiert, und vollständige Verbände sind solche, in denen jede Teilmenge eine größte untere und eine kleinste obere Schranke hat. Da LaTeX kein eingebautes \\glb kennt, schreibt man \\text{glb}, das im normalen Text aufrecht erscheint, in Satzumgebungen aber kursiv wird und den schmalen Abstand eines Operators vermissen lässt. Bevorzugen Sie \\operatorname{glb} oder \\DeclareMathOperator{\\glb}{glb} für einheitliche Ergebnisse. Kommen Ihre Leser eher aus der Analysis als aus der Ordnungstheorie, ist \\inf womöglich die vertrautere Schreibweise für denselben Begriff.",
  },
};

export default text;
