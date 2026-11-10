import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/latin/<slug>. */
const text: SymbolPageTranslations = {
  "o-with-umlaut-diaeresis": {
    name: "O mit Trema",
    meaning: "Setzt zwei Punkte über das o und ergibt ö als mathematischen Akzent; im Fließtext schreibt man denselben Buchstaben als \\\"o.",
    usage: "\\ddot ist ein Akzent des Mathematikmodus, \\ddot{o} liefert also ein kursives o mit zwei Punkten, geeignet für Formeln, aber nicht für Wörter. Für deutsche, schwedische, finnische, türkische oder ungarische Wörter wie Köln oder Gödel verwenden Sie den Textakzent \\\"{o} oder tippen ö direkt in eine UTF-8-Quelle. In Mathematik und Physik ist \\ddot{x} die Newtonsche Notation für die zweite Ableitung nach der Zeit, und \\dddot{x} ergibt die dritte. Die Variante mit einem Punkt, \\dot{x}, kennzeichnet eine erste Ableitung. \\ddot im Fließtext verursacht einen Fehler wegen eines fehlenden Dollarzeichens, ein häufiger Anfängerfehler beim Kopieren von Namen mit Akzenten.",
  },
  "o-with-grave-accent": {
    name: "O mit Gravis",
    meaning: "Setzt einen Gravis über das o und erzeugt ò als mathematischen Akzent; für Wörter verwendet man den Textbefehl \\`o.",
    usage: "Der Gravis kennzeichnet Betonung oder Vokalqualität im Italienischen (però, città), Katalanischen und Vietnamesischen und kommt in französischen Wörtern wie où vor. Schreiben Sie solche Wörter im Dokument mit \\`{o} oder tippen Sie den Buchstaben mit Akzent direkt, denn \\grave funktioniert nur im Mathematikmodus und setzt den Buchstaben in mathematischer Kursivschrift. In der Mathematik ist \\grave selten; gelegentlich verziert ein Autor damit eine Variable, wenn \\hat, \\tilde und \\bar bereits vergeben sind. Verwechseln Sie den Gravis nicht mit dem Akut \\acute, der in die andere Richtung geneigt ist.",
    example: "\\grave{o} \\quad \\text{vgl. den Textakzent in } \\text{per\\`{o}}",
  },
  "o-with-acute-accent": {
    name: "O mit Akut",
    meaning: "Setzt einen Akut über das o und ergibt ó als mathematischen Akzent; in Wörtern verwendet man die Textform \\'o.",
    usage: "Der Akut kommt im Spanischen (canción, José), Portugiesischen, Polnischen (ó in Kraków), Isländischen und Ungarischen vor. Schreiben Sie für all diese Wörter \\'{o} oder tippen Sie ó direkt, denn \\acute{o} funktioniert nur im Mathematikmodus und liefert einen kursiven Buchstaben. In der Mathematik ist \\acute eine selten genutzte Verzierung, die manchmal eine transformierte Variable kennzeichnet. Beachten Sie, dass ein Strich x' etwas anderes ist als ein Akut. Das lange ungarische ő verwendet den doppelten Akut \\H{o}, nicht zwei einfache Akute.",
    example: "\\acute{o} \\quad \\text{vgl. } \\text{Krak\\'{o}w}",
  },
  "o-with-circumflex": {
    name: "O mit Zirkumflex",
    meaning: "Setzt einen Zirkumflex über das o und ergibt ô; in der Mathematik kennzeichnet derselbe Befehl \\hat Schätzer und Einheitsvektoren.",
    usage: "Für französische, portugiesische oder vietnamesische Wörter wie hôtel oder côte verwenden Sie den Textakzent \\^{o} oder tippen ô direkt; \\hat funktioniert nur im Mathematikmodus. In der Mathematik ist \\hat allgegenwärtig: \\hat{\\theta} für einen Schätzer, \\hat{y} für eine Vorhersage, \\hat{\\mathbf{x}} für einen Einheitsvektor, \\hat{H} für einen quantenmechanischen Operator und \\hat{f} für eine Fourier-Transformierte. Für Akzente über mehreren Zeichen verwenden Sie \\widehat{AB}, das sich streckt. Für ein Dach über i oder j verwenden Sie \\hat{\\imath}, damit der Punkt entfällt.",
  },
  "o-with-tilde": {
    name: "O mit Tilde",
    meaning: "Setzt eine Tilde über das o und ergibt õ; als mathematischer Akzent verziert \\tilde auch Variablen wie \\tilde{x}.",
    usage: "Im Portugiesischen (põe, Camões) und Estnischen (õ ist dort ein eigener Buchstabe) ist im Fließtext der Textbefehl \\~{o} oder ein getipptes õ die richtige Wahl. Im Mathematikmodus kennzeichnet \\tilde eine transformierte, genäherte oder alternative Größe, etwa eine normierte Variable \\tilde{x} oder die Soft-O-Notation \\tilde{O}(n). Für breite Argumente streckt sich \\widetilde{AB} über den gesamten Ausdruck. Verwechseln Sie den Akzent nicht mit \\sim, der eigenständigen Tilde-Relation mit der Bedeutung „ist verteilt wie“ oder „asymptotisch gleich“. Tilden auf Großbuchstaben können hoch sitzen, prüfen Sie daher den Zeilenabstand.",
  },
  "o-with-macron": {
    name: "O mit Makron",
    meaning: "Setzt einen Makron-Strich über das o und ergibt ō; derselbe Akzent \\bar bezeichnet in der Mathematik Mittelwerte und komplex Konjugierte.",
    usage: "Makronen kennzeichnen lange Vokale in Lateinwörterbüchern, in der japanischen Umschrift (Tōkyō, Ōsaka), im Māori und im Hawaiischen; im Text verwenden Sie \\={o} oder tippen ō. In der Mathematik ist \\bar{x} ein Stichprobenmittelwert, \\bar{z} eine komplex Konjugierte und \\bar{A} manchmal ein Abschluss oder Komplement. Der Strich von \\bar hat eine feste, kurze Breite, verwenden Sie daher für längere Ausdrücke \\overline{A \\cup B}, das sich über das ganze Argument erstreckt. Manche Autoren bevorzugen \\overline sogar für einzelne Buchstaben, damit Konjugierte und Abschlüsse einheitlich aussehen.",
  },
  "o-with-dot-above": {
    name: "O mit Punkt darüber",
    meaning: "Setzt einen einzelnen Punkt über das o und ergibt ȯ; in der Mathematik ist der Akzent \\dot die Newtonsche Notation für eine Zeitableitung.",
    usage: "Als Buchstabe ist ȯ selten; er kommt in einigen Transliterationen und im Livischen vor. Verwenden Sie im Text den Akzent \\.{o} oder ein getipptes Zeichen, denn \\dot funktioniert nur im Mathematikmodus. In Physik und Technik bezeichnet \\dot{x} die Ableitung dx/dt, die Geschwindigkeit ist also \\dot{\\mathbf{r}}, und ein Zustandsraummodell lautet \\dot{\\mathbf{x}} = A\\mathbf{x} + B\\mathbf{u}. Zwei Punkte, \\ddot{x}, ergeben die zweite Ableitung. Verwechseln Sie den Akzent nicht mit \\cdot, einem zentrierten Multiplikationspunkt auf der Mathematikachse, nicht über einem Buchstaben.",
  },
  "o-with-breve": {
    name: "O mit Breve",
    meaning: "Setzt ein Breve, ein kleines Häkchen in Schalenform, über das o und ergibt ŏ; für Wörter verwendet man stattdessen den Textakzent \\u{o}.",
    usage: "Das Breve kennzeichnet kurze Vokale in der lateinischen Metrik und kommt in der McCune-Reischauer-Umschrift des Koreanischen vor, etwa in Chŏng. Das rumänische ă und das türkische ğ tragen dasselbe Zeichen auf anderen Buchstaben. Im Fließtext schreiben Sie \\u{o} oder tippen ŏ; \\breve funktioniert nur im Mathematikmodus und setzt den Buchstaben kursiv. Mathematisch wird es selten verwendet, meist als weitere Verzierung einer veränderten Variablen nach Dach und Tilde. Verwechseln Sie das Breve nicht mit dem Hatschek \\check, der spitz statt rund ist.",
    example: "\\breve{o} \\quad \\text{vgl. } \\text{Ch\\u{o}ng}",
  },
  "o-with-caron-hacek": {
    name: "O mit Hatschek",
    meaning: "Setzt einen Hatschek (Caron) über das o und ergibt ǒ; im Fließtext schreibt man dasselbe Zeichen mit \\v{o}.",
    usage: "In Hanyu Pinyin kennzeichnet ǒ den dritten Ton, wie in wǒ, und der Hatschek ist zentral für die tschechische, slowakische und andere slawische Rechtschreibungen auf Buchstaben wie č und š. Verwenden Sie im Text \\v{o} oder ein getipptes ǒ; \\check ist der Akzent für den Mathematikmodus. Mathematiker verwenden \\check für die Čech-Kohomologie \\check{H}, inverse Fourier-Transformierte \\check{f} und duale Objekte. Er ist spitz, anders als das runde Breve \\breve, und zeigt nach unten, anders als der Zirkumflex \\hat. Für breite Argumente ist \\widecheck kein Standard, beschränken Sie \\check daher auf einzelne Buchstaben.",
  },
  "o-with-double-acute": {
    name: "O mit doppeltem Akut",
    meaning: "Schreibt das lange ungarische ő mit doppeltem Akut, ein Textmodus-Befehl für Namen wie Erdős.",
    usage: "\\H ist ein Textakzent, kein mathematischer Akzent; verwenden Sie ihn also im Fließtext oder innerhalb von \\text{...}, im reinen Mathematikmodus löst er einen Fehler aus. Das Ungarische unterscheidet ö von ő und ü von ű, der Name des Mathematikers lautet also Erdős, nicht Erdös, und ihn im Literaturverzeichnis richtig zu schreiben ist eine Höflichkeit, die den zusätzlichen Befehl wert ist. Setzen Sie den Akzent in BibTeX in geschweifte Klammern, {\\H{o}}, damit Sortierung und Groß-/Kleinschreibung ihn nicht verfälschen. Versuchen Sie nicht, ihn mit zwei einfachen Akuten nachzuahmen.",
    example: "\\text{Erd\\H{o}s-Zahl } = 1",
  },
  "o-with-cedilla": {
    name: "O mit Cedille",
    meaning: "Schreibt ein o mit Cedille darunter, ein seltener Buchstabe, den LaTeX normalerweise mit dem Textakzent \\c{o} erzeugt.",
    usage: "Die Cedille kennt man vom ç im Französischen und Portugiesischen, auf dem o ist sie jedoch ungewöhnlich; sie kommt in der marshallesischen Rechtschreibung und in einigen Transkriptionssystemen vor. Das vorkomponierte Zeichen in \\text einzugeben funktioniert in vielen Web-Renderern, ein klassischer LaTeX-Lauf kennt die kombinierende Cedille aber womöglich nicht, daher ist \\c{o} im Text die zuverlässige Quellform. Verwechseln Sie die Cedille nicht mit dem Ogonek, dem Häkchen am polnischen ą und ę, das in die andere Richtung zeigt und mit \\k geschrieben wird. Keines von beiden funktioniert im Mathematikmodus ohne \\text.",
  },
  "o-with-dot-below": {
    name: "O mit Punkt darunter",
    meaning: "Schreibt ein o mit einem Punkt darunter, ọ, verwendet im Yoruba und Vietnamesischen und in LaTeX-Text als \\d{o} geschrieben.",
    usage: "Das Yoruba verwendet ọ als eigenen Vokal (wie in Yorùbá-Wörtern wie ọjọ́), und das Vietnamesische nutzt den Unterpunkt als Zeichen für den schweren Ton. In einer LaTeX-Quelle ergibt der Textakzent \\d{o} diesen Buchstaben, während das direkte Tippen von ọ mit einer Schrift, die die Glyphe enthält, ebenfalls funktioniert. Wie andere Textakzente ist \\d im reinen Mathematikmodus ungültig; setzen Sie Wörter in \\text. Verwenden Sie nicht \\dot, das den Punkt darüber setzt und ein mathematischer Akzent für Ableitungen ist. Die Kombination von Tönen mit einem Unterpunkt kann eine Schrift mit vorkomponierten Glyphen erfordern.",
  },
  "o-with-underline": {
    name: "Unterstrichenes O",
    meaning: "Unterstreicht das o; in der Mathematik kennzeichnet \\underline Vektoren, untere Schranken oder hervorgehobene Symbole.",
    usage: "\\underline funktioniert im Text- und im Mathematikmodus und zieht eine Linie unter das gesamte Argument, \\underline{o} ergibt also ein unterstrichenes o. Manche Texte aus Technik und Mechanik verwenden \\underline{u} für Vektoren statt Fettdruck, und Arbeiten zur Optimierung schreiben \\underline{x} für eine untere Schranke, gepaart mit \\overline{x} für eine obere. In Transliterationen ist ein Makron darunter ein eigener Textakzent, \\b{o}, der kürzer ist und mittig unter dem Buchstaben sitzt. Für Hervorhebungen im Fließtext ist \\emph dem Unterstreichen vorzuziehen, da Unterstreichungen nicht über Zeilen umbrechen.",
  },
  "linked-o-o-two-o-s-joined-by-a-dash": {
    name: "Verbundenes o-o (zwei durch einen Strich verbundene o)",
    meaning: "Verbindet zwei o mit einem Minuszeichen, das durch negative Abstände eng herangezogen wird, und imitiert so ein verbundenes o-o-Zeichen.",
    usage: "Diese Konstruktion ist kein Standardbefehl: Jedes \\! fügt einen negativen schmalen Abstand ein, sodass o\\!\\!-\\!\\!o ein mathematisches Minuszeichen an beide Buchstaben heranzieht und das Ergebnis wie zwei verbundene Ringe aussieht. Da sie im Mathematikmodus zusammengesetzt wird, sind die o kursiv und die Abstände hängen von der Schrift ab. Wenn Sie die mittelalterliche oo-Ligatur oder einen ähnlichen historischen Buchstaben brauchen, ist eine Schrift, die dieses Zeichen enthält, sauberer als dieser Behelf. Für eine hantelartige Bindung oder Verknüpfung bietet ein richtiges Diagrammwerkzeug bessere Kontrolle. Verwenden Sie es nur für einen schnellen optischen Effekt.",
  },
  "oe-ligature-lowercase": {
    name: "Kleine OE-Ligatur",
    meaning: "Schreibt die kleine Ligatur œ, die in französischen Wörtern wie cœur und œuvre vorkommt; in LaTeX lautet sie \\oe.",
    usage: "Die französische Rechtschreibung verlangt die Ligatur in Wörtern wie sœur, cœur und œil, oe zu schreiben ist also ein Rechtschreibfehler und nicht nur eine typografische Entscheidung. Verwenden Sie in der LaTeX-Quelle \\oe oder tippen Sie œ direkt; \\oe ist ein Textbefehl, verwenden Sie daher im Mathematikmodus \\text. Das Englische nutzt sie in älteren oder britischen Schreibweisen wie fœtus. Anders als die Ligaturen ff oder fi, die TeX automatisch bildet, ist œ ein eigener Buchstabe und entsteht nie durch Tippen von oe. Denken Sie an ein Leerzeichen nach \\oe, wie in c\\oe ur, oder verwenden Sie Klammern wie c{\\oe}ur.",
  },
  "oe-ligature-uppercase": {
    name: "Große OE-Ligatur",
    meaning: "Schreibt die große Ligatur Œ, die im Französischen verwendet wird, wie in Œuvres complètes; in LaTeX lautet sie \\OE.",
    usage: "Das große Œ steht am Anfang französischer Wörter und in Titeln in Großbuchstaben, also ŒUVRES statt OEUVRES. Tippen Sie das Zeichen direkt oder verwenden Sie \\OE im Textmodus; im Mathematikmodus muss es in \\text stehen. Prüfen Sie bei Kapitälchen oder Überschriften in Großbuchstaben, ob \\MakeUppercase aus \\oe ein \\OE macht, was LaTeX korrekt erledigt. Verwechseln Sie es nicht mit Æ, dem Äsc, das ein a statt eines o verwendet. Auch ältere englische Schreibweisen wie Œdipus nutzen es.",
  },
  "ae-ligature-lowercase-ash": {
    name: "Kleine AE-Ligatur (Äsc)",
    meaning: "Schreibt das kleine æ, genannt Äsc, einen Buchstaben des Dänischen, Norwegischen, Isländischen und Altenglischen; in LaTeX lautet er \\ae.",
    usage: "Im Dänischen und Norwegischen ist æ ein vollwertiger Buchstabe des Alphabets, der nach z einsortiert wird, und sollte in Namen nie durch ae ersetzt werden. Das Englische verwendet ihn in stilisierten Schreibweisen wie encyclopædia und Cæsar, und das IPA-Symbol æ bezeichnet den Vokal in cat. Verwenden Sie in LaTeX \\ae oder tippen Sie æ direkt; es ist ein Textbefehl, setzen Sie ihn im Mathematikmodus also in \\text. Trennen Sie einen folgenden Buchstaben mit Klammern oder einem Leerzeichen, wie in \\ae{}ble. Er unterscheidet sich von œ, das o und e verbindet.",
  },
  "ae-ligature-uppercase": {
    name: "Große AE-Ligatur",
    meaning: "Schreibt das große Æ, das große Äsc, das im Dänischen, Norwegischen, Isländischen und Altenglischen verwendet wird.",
    usage: "Das große Æ steht am Anfang dänischer und norwegischer Wörter und erscheint in altenglischen Namen wie Ælfred. LaTeX stellt im Textmodus \\AE bereit, oder Sie tippen Æ direkt. In Überschriften in Großbuchstaben wandelt die Großschreibung von LaTeX \\ae automatisch in \\AE um. Literaturverzeichnisse mit skandinavischen Namen sollten den Buchstaben unverändert lassen, da die Sortierregeln ihn ans Ende des Alphabets stellen. Verwechseln Sie es nicht mit Œ, das O und E verbindet und zur französischen Rechtschreibung gehört. Das direkte Tippen in einer UTF-8-Datei ist heute die einfachste Möglichkeit.",
  },
  "a-with-ring-above": {
    name: "Kleines a mit Ring",
    meaning: "Schreibt å, ein a mit Ring, einen Buchstaben des Schwedischen, Dänischen, Norwegischen und Finnischen; in LaTeX-Text lautet er \\aa.",
    usage: "In den skandinavischen Sprachen ist å ein eigener Vokal, der am Ende des Alphabets einsortiert wird, wie in på oder Århus. LaTeX schreibt ihn mit \\aa oder dem allgemeinen Ringakzent \\r{a}, oder Sie tippen å direkt. Das sind Textbefehle, setzen Sie sie im Mathematikmodus also in \\text. Verwenden Sie nicht den mathematischen Akzent \\mathring{a}, der einen Ring auf einen kursiven mathematischen Buchstaben setzt und etwa für das Innere einer Menge gedacht ist. Literaturverwaltungssoftware sollte {\\aa} beim Sortieren als einzelnen Buchstaben behandeln.",
  },
  "a-with-ring-above-angstrom": {
    name: "Großes A mit Ring (Ångström)",
    meaning: "Schreibt das große Å, das in skandinavischen Wörtern und als Symbol der Einheit Ångström (10^{-10} m) verwendet wird.",
    usage: "Physiker und Chemiker geben Bindungslängen und Wellenlängen in Ångström an, etwa 1.54 Å, und der LaTeX-Befehl \\AA liefert im Textmodus die richtige Glyphe. Schreiben Sie im Mathematikmodus \\text{\\AA} oder verwenden Sie ein eigenes Einheitenmakro, da \\AA allein ein Textbefehl ist. Als Buchstabe steht es am Anfang schwedischer und dänischer Ortsnamen wie Åland. Das separate Unicode-Ångström-Zeichen wird zu genau diesem Buchstaben normalisiert, die Verwendung von Å ist also korrekt. Setzen Sie einen schmalen Abstand zwischen Zahl und Einheit, wie in 1.54\\,\\text{Å}.",
  },
  "o-with-stroke-lowercase": {
    name: "Kleines durchgestrichenes O",
    meaning: "Schreibt ø, das durchgestrichene o des Dänischen, Norwegischen und Färöischen; in LaTeX ist es der Textbefehl \\o.",
    usage: "ø ist im Dänischen und Norwegischen ein vollwertiger Vokal, wie in København oder Søren Kierkegaard, und sollte in Namen nicht durch o oder oe ersetzt werden. Verwenden Sie \\o oder tippen Sie ø direkt; es ist ein Textbefehl, verwenden Sie im Mathematikmodus also \\text. Es ähnelt den Symbolen für die leere Menge \\emptyset und \\varnothing sowie dem Durchmesserzeichen, doch das sind andere Zeichen mit anderen Bedeutungen, verwenden Sie ø also nicht für die leere Menge. Auch die phonetische Transkription nutzt ø für einen gerundeten Vorderzungenvokal.",
  },
  "o-with-stroke-uppercase": {
    name: "Großes durchgestrichenes O",
    meaning: "Schreibt das große Ø, wie in Øresund, das durchgestrichene große O, in LaTeX-Text als \\O geschrieben.",
    usage: "Das große Ø steht am Anfang dänischer und norwegischer Wörter wie Øresund und Østergaard. Verwenden Sie in LaTeX \\O im Textmodus oder tippen Sie Ø direkt; \\O ist im Mathematikmodus ohne \\text nicht definiert. Da es der leeren Menge \\emptyset und dem Durchmesserzeichen ähnelt, ist es verlockend, es dafür zu verwenden, doch das sind eigene Zeichen, die Screenreader und Suchmaschinen unterschiedlich behandeln. In den skandinavischen Alphabeten wird Ø im Norwegischen und Dänischen nach Æ und vor Å einsortiert.",
  },
  "l-with-stroke-lowercase": {
    name: "Kleines L mit Querstrich",
    meaning: "Schreibt ł, das polnische durchgestrichene l, das wie ein englisches w ausgesprochen wird; in LaTeX-Text lautet es \\l.",
    usage: "Das Polnische verwendet ł in vielen gängigen Wörtern und Namen wie złoty, Wrocław und Łukasiewicz, dem Logiker hinter der polnischen Notation. Schreiben Sie in einer LaTeX-Quelle \\l oder tippen Sie ł direkt; es ist ein Textbefehl, verwenden Sie im Mathematikmodus also \\text. Folgt direkt ein Buchstabe, trennen Sie ihn mit Klammern ab, wie in z\\l{}oty. Manchen Schriften fehlt ł, was zu einer fehlenden Glyphe statt einer Warnung führen kann, prüfen Sie also das PDF. Es unterscheidet sich vom durchgestrichenen kleinen Lambda ƛ.",
  },
  "l-with-stroke-uppercase": {
    name: "Großes L mit Querstrich",
    meaning: "Schreibt das große Ł, wie in Łódź, das große polnische durchgestrichene L, in LaTeX als \\L geschrieben.",
    usage: "Das große Ł steht am Anfang von Namen wie Łódź und Łukasiewicz, Literaturverzeichnisse mit polnischen Autoren brauchen es also, um Namen korrekt zu schreiben. Verwenden Sie \\L im Textmodus oder tippen Sie Ł direkt; im Mathematikmodus setzen Sie es in \\text. Halten Sie es in BibTeX in geschweiften Klammern, {\\L}ukasiewicz, damit Groß-/Kleinschreibung und Sortierung funktionieren. Verwechseln Sie \\L nicht mit \\pounds, dem Pfund-Sterling-Zeichen, das ein anderes Symbol ist, obwohl beide einen Querstrich auf einer L-ähnlichen Form haben. Das direkte Tippen von Ł in einer UTF-8-Quelle ist in modernen Setups die einfachste Möglichkeit.",
  },
  "dotless-i-math": {
    name: "Punktloses i (Mathematik)",
    meaning: "Liefert ein punktloses kursives mathematisches i, damit Akzente wie \\hat oder \\vec ohne störenden Punkt darauf sitzen.",
    usage: "Der Hauptgrund für \\imath ist die Platzierung von Akzenten: \\hat{\\imath} ergibt in der Physik den Einheitsvektor i-Dach ohne Punkt unter dem Dach, während \\hat{i} den Punkt behält. Es erscheint auch als \\vec{\\imath} in der Vektoranalysis und manchmal als gesetzte imaginäre Einheit. Im Text ist das punktlose i \\i, das Sie für türkische Wörter wie ılık oder für i mit Akzent in älteren Kodierungen verwenden würden. Verwechseln Sie \\imath nicht mit \\iota, dem griechischen Buchstaben mit anderer Form.",
  },
  "dotless-j-math": {
    name: "Punktloses j (Mathematik)",
    meaning: "Liefert ein punktloses kursives mathematisches j, verwendet unter Akzenten wie beim Einheitsvektor j-Dach.",
    usage: "Physik und Technik schreiben die kartesischen Einheitsvektoren als \\hat{\\imath}, \\hat{\\jmath}, \\hat{k}, und \\jmath entfernt den Punkt, damit das Dach sauber sitzt. Elektrotechniker, die j für die imaginäre Einheit verwenden, setzen manchmal ebenfalls Akzente darauf. Im Textmodus lautet der entsprechende Befehl \\j. Ohne Akzent gibt es keinen üblichen Grund, \\jmath zu verwenden, beschränken Sie es also auf Formen mit Akzent. Beachten Sie, dass \\vec{\\jmath} und \\hat{\\jmath} den Akzent leicht unterschiedlich positionieren, prüfen Sie also die Abstände.",
  },
  "inverted-question-mark": {
    name: "Umgekehrtes Fragezeichen",
    meaning: "Schreibt ¿, das umgekehrte Fragezeichen, das im Spanischen eine Frage einleitet; LaTeX akzeptiert dafür auch ?`.",
    usage: "Das Spanische setzt ¿ an den Anfang einer Frage und ? an ihr Ende, wie in ¿Dónde está? In LaTeX erzeugt die Ligatur ?` (Fragezeichen gefolgt von einem Backtick) in Standardschriften das umgekehrte Zeichen, und \\textquestiondown ist der benannte Befehl. Das direkte Tippen von ¿ funktioniert bei UTF-8-Eingabe ebenfalls. Es ist ein Textzeichen, setzen Sie es im Mathematikmodus also in \\text. Auch das Galicische und Asturische verwenden es, das Katalanische dagegen in der Regel nicht. Da ?` eine Ligatur ist, kann ein versehentlicher Backtick nach einem Fragezeichen das umgekehrte Zeichen erzeugen, prüfen Sie also Sätze, die mit einer Frage enden, auf die ein Anführungszeichen folgt.",
  },
  "inverted-exclamation-mark": {
    name: "Umgekehrtes Ausrufezeichen",
    meaning: "Schreibt ¡, das umgekehrte Ausrufezeichen, das im Spanischen einen Ausruf einleitet; LaTeX akzeptiert dafür auch !`.",
    usage: "Das Spanische umschließt Ausrufe mit ¡ und !, wie in ¡Hola!, und dieselbe Paarung gilt auch mitten im Satz. LaTeX erzeugt es aus der Ligatur !` (Ausrufezeichen gefolgt von einem Backtick) oder mit dem benannten Befehl \\textexclamdown, und das Tippen von ¡ in einer UTF-8-Datei funktioniert ebenfalls. Im Mathematikmodus muss es in \\text stehen. Verwechseln Sie es nicht mit dem kleinen i oder dem senkrechten Strich |, die in manchen serifenlosen Schriften ähnlich aussehen können. Wie bei der Fragezeichen-Ligatur wird eine wörtliche Folge !` in Ihrer Quelle zu ¡, was Autoren, die Code zitieren, gelegentlich überrascht.",
  },
};

export default text;
