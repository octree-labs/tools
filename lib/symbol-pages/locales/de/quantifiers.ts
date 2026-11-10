import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/quantifiers/<slug>. */
const text: SymbolPageTranslations = {
  "unique-exists": {
    name: "Quantor der eindeutigen Existenz",
    meaning: "Es gibt genau ein: der Existenzquantor, gefolgt von einem Ausrufezeichen, das die Eindeutigkeit fordert.",
    usage: "Eindeutigkeitsaussagen wie die Existenz einer eindeutigen Lösung eines Anfangswertproblems oder eines eindeutigen neutralen Elements in einer Gruppe schreibt man als \\exists! x. Das Ausrufezeichen ist in TeX ein schließendes Symbol, daher wird \\exists! x vernünftig gesetzt; manche Autoren fügen zur Verdeutlichung noch \\, vor der Variablen ein. Formal ist \\exists! x\\, P(x) eine Abkürzung für \\exists x\\,(P(x) \\wedge \\forall y\\,(P(y) \\to y = x)). Vermeiden Sie \\exists_1, das manche Leser als Variable mit Index deuten. Im Fließtext liest sich „es gibt genau ein“ oft besser als das Symbol.",
  },
  "for-all-x": {
    name: "Allquantor über x",
    meaning: "Der Allquantor, auf x angewandt: Die folgende Aussage gilt für jeden Wert von x.",
    usage: "Definitionen der Stetigkeit, Gruppenaxiome und Induktionsprinzipien beginnen alle mit \\forall x. Das Symbol \\forall ist ein gewöhnliches mathematisches Atom, daher setzt TeX nach der Variablen keinen Abstand; ein \\, oder ein Doppelpunkt, wie in \\forall x\\, P(x) oder \\forall x : P(x), macht lange Formeln deutlich lesbarer. Manche Autoren stellen den Quantor in Worten hinter die Aussage („für alle x“), was im Fließtext angenehmer ist. Verwenden Sie \\forall im laufenden Satz nicht als Abkürzung für „für alle“, es sei denn, Ihr Publikum erwartet diese Kurzschreibweise.",
  },
  "exists-x": {
    name: "Existenzquantor über x",
    meaning: "Der Existenzquantor bindet x und behauptet, dass mindestens ein Wert von x die Aussage wahr macht.",
    usage: "Typische Anwendungen sind die Definition des Grenzwerts (\\exists \\delta > 0), die Surjektivität (\\forall y\\, \\exists x : f(x) = y) und Zeugen in der Logik. Die Reihenfolge ist wichtig: \\forall y \\exists x ist etwas anderes als \\exists x \\forall y, schreiben Sie Quantorenketten also sorgfältig. Die Negation gibt es als eigenes Symbol \\nexists für „es gibt kein“. Wie \\forall erhält auch \\exists nach der gebundenen Variablen keinen automatischen Abstand, setzen Sie also vor das Prädikat einen schmalen Abstand oder einen Doppelpunkt. Für Eindeutigkeit hängen Sie ein Ausrufezeichen an und erhalten \\exists!.",
  },
  "for-all-in-set": {
    name: "Beschränkter Allquantor",
    meaning: "Beschränkter Allquantor: Die Aussage muss für jedes Element x der Menge A gelten.",
    usage: "Die Einschränkung des Quantors auf eine Menge, wie in \\forall x \\in A, ist eine Kurzform für \\forall x\\,(x \\in A \\to P(x)) und entspricht der Art, wie die meisten Mathematiker tatsächlich schreiben. \\in hat Relationsabstände, die Wendung wird also von selbst richtig gesetzt; trennen Sie sie zur besseren Lesbarkeit nur durch ein Komma, einen Doppelpunkt oder \\; vom Prädikat. Bei mehreren Variablen können Sie \\forall x, y \\in A schreiben, statt den Quantor zu wiederholen. Verwechseln Sie \\in nicht mit \\epsilon oder \\varepsilon, die in manchen Schriften ähnlich aussehen, aber Buchstaben sind und nicht die Elementrelation.",
  },
  "exists-in-set": {
    name: "Beschränkter Existenzquantor",
    meaning: "Beschränkter Existenzquantor: Ein Element x aus A erfüllt die nachfolgende Bedingung.",
    usage: "Diese kompakte Form ersetzt \\exists x\\,(x \\in A \\wedge P(x)) und begegnet einem in der Analysis ständig, etwa bei der Dichtheit der rationalen Zahlen: Zwischen zwei beliebigen reellen Zahlen gilt \\exists q \\in \\mathbb{Q}. Die Negation von \\exists x \\in A\\, P(x) ist \\forall x \\in A\\, \\neg P(x), eine Regel, die man beim Verneinen von Definitionen im Kopf behalten sollte. Verwenden Sie \\nexists x \\in A für „kein Element von A“. Setzen Sie vor das Prädikat einen Doppelpunkt, „sodass“ oder \\;, damit der Leser sieht, wo der Quantor endet.",
  },
  "such-that-colon": {
    name: "Doppelpunkt „sodass“",
    meaning: "Doppelpunkt, gelesen als „sodass“ oder „mit“, der in quantifizierten Aussagen und in der Mengenbildungsschreibweise eine Variable von ihrer Bedingung trennt.",
    usage: "Im Mathematikmodus wird ein einfacher Doppelpunkt als Relation behandelt und erhält auf beiden Seiten gleich große, breite Abstände, was zu \\{x : x > 0\\} und \\forall x : P(x) passt. Für eine Funktionssignatur verwenden Sie stattdessen \\colon, das Interpunktionsabstände hat: f\\colon A \\to B sieht richtig aus, während f : A \\to B vor dem Doppelpunkt eine Lücke lässt. Bei Definitionen kann das aus zwei Zeichen gebaute := vertikal versetzt wirken; ein eigenes Definitionssymbol aus einem Erweiterungspaket behebt das. Manche Autoren bevorzugen in der Mengenbildungsschreibweise \\mid oder einen senkrechten Strich; entscheiden Sie sich für eine Variante und bleiben Sie dabei.",
  },
  "set-builder": {
    name: "Mengenbildungsschreibweise",
    meaning: "Mengenbildungsschreibweise (beschreibende Mengendarstellung): die Menge aller x, für die die Eigenschaft P(x) gilt, geschrieben mit geschweiften Klammern und einem Trennzeichen.",
    usage: "Geschweifte Klammern müssen im Mathematikmodus als \\{ und \\} maskiert werden, sonst dienen sie nur zur Gruppierung und verschwinden aus der Ausgabe. \\mid ist eine Relation und erhält daher auf beiden Seiten passende Abstände, anders als ein nackter Strich |, der ein gewöhnliches Symbol ist und die Buchstaben zusammendrängt. Enthält die Bedingung Brüche oder hohe Ausdrücke, skalieren Sie alles gemeinsam: \\left\\{ x \\;\\middle|\\; \\frac{x}{2} \\in \\mathbb{Z} \\right\\}. Ein Doppelpunkt eignet sich ebenso gut als Trennzeichen und vermeidet Verwechslungen, wenn die Bedingung selbst Beträge enthält.",
  },
  "quantified-statement": {
    name: "Aussage mit verschachtelten Quantoren",
    meaning: "Eine Aussage mit verschachtelten Quantoren: Zu jedem x existiert ein y, das P(x, y) wahr macht, wobei y von x abhängen darf.",
    usage: "Dieses Muster liegt Epsilon-Delta-Definitionen zugrunde und Aussagen wie „jede ganze Zahl hat einen Nachfolger“. Vertauscht man die Reihenfolge zu \\exists y \\forall x, entsteht eine viel stärkere Behauptung, nämlich ein einziges y, das für alle x funktioniert; die beiden zu verwechseln ist ein klassischer Fehler in Beweisen. Der Doppelpunkt trennt das Quantorenpräfix von der Matrix der Formel; kollidiert Ihre Doppelpunkt-Konvention anderswo mit der Funktionsschreibweise, verwenden Sie stattdessen einen Punkt oder Klammern. Für bessere Lesbarkeit bei längeren Präfixen fügen Sie \\, zwischen den Quantorenblöcken ein oder schreiben jeden als eigene Wendung: Für alle x existiert ein y.",
  },
};

export default text;
