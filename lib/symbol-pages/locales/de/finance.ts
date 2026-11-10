import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/finance/<slug>. */
const text: SymbolPageTranslations = {
  "dollar-sign": {
    name: "Dollarzeichen",
    meaning: "Maskiertes Dollarzeichen: gibt ein wörtliches $ aus, statt den Mathematikmodus zu beginnen oder zu beenden.",
    usage: "Ein nicht maskiertes $ schaltet in LaTeX den Mathematikmodus um, Preise brauchen daher \\$, wie in \\$19.99. Es funktioniert im Text- und im Mathematikmodus, sodass Formeln wie \\$100 \\times 1.05 = \\$105 problemlos gelingen. In Markdown-basierten Werkzeugen und KaTeX-Renderern gilt dieselbe Maskierung. Für Tabellen voller Geldbeträge kann das Paket siunitx die Zahlen am Dezimalzeichen ausrichten, während das Symbol im Spaltenkopf steht. Die Angabe USD vermeidet Mehrdeutigkeit, wenn mehrere Dollarwährungen, etwa kanadische oder australische Dollar, in einem Dokument vorkommen.",
  },
  "euro-sign": {
    name: "Eurozeichen",
    meaning: "Währungszeichen des Euro, als wörtliches Zeichen innerhalb von \\text eingegeben, für Preise und Geldbeträge in Euro.",
    usage: "Das Zeichen € direkt in \\text einzufügen funktioniert, wenn das Dokument UTF-8-kodiert ist und die Schrift die Glyphe enthält, was bei den meisten modernen Setups der Fall ist. Mit pdfLaTeX ist \\texteuro die Befehlsform, und \\euro liefert das offizielle, geometrisch festgelegte Design. Die Stellung des Eurozeichens unterscheidet sich je nach Land: In Deutschland und Frankreich schreibt man 10 €, in Irland und den Niederlanden steht es oft voran. Setzen Sie in Tabellen das Zeichen besser in den Spaltenkopf, statt es in jeder Zelle zu wiederholen. In XeLaTeX und LuaLaTeX kommt das Zeichen direkt aus der gewählten Schrift.",
  },
  "pound-sterling-sign": {
    name: "Pfund-Sterling-Zeichen",
    meaning: "Pfund-Sterling-Zeichen als wörtliches Zeichen in \\text, verwendet für Beträge in britischen Pfund.",
    usage: "Das Zeichen £ direkt in \\text einzugeben funktioniert in UTF-8-Dokumenten. LaTeX bietet außerdem den eingebauten Befehl \\pounds, der in Text und Mathematik funktioniert; mit den Standardschriften Computer Modern stammt er jedoch aus der kursiven Schrift und wirkt geneigt, was viele Nutzer überrascht. Ein Wechsel der Schriftkodierung ergibt eine aufrechte Glyphe. Nach britischer Konvention steht das Zeichen ohne Abstand vor dem Betrag, wie in £1,500. Dieselbe Glyphe dient auch mehreren anderen Pfund-Währungen. Richten Sie in Finanztabellen am Dezimalzeichen aus und setzen Sie das Zeichen in den Kopf, um die Tabelle übersichtlich zu halten.",
  },
  "yen-sign": {
    name: "Yen-Zeichen",
    meaning: "Yen- bzw. Yuan-Zeichen, als wörtliches Zeichen innerhalb von \\text eingegeben, für Beträge in japanischen Yen und chinesischen Yuan.",
    usage: "Dieselbe Glyphe steht sowohl für den japanischen Yen als auch für den chinesischen Renminbi Yuan, weshalb Fachartikel oft JPY oder CNY ergänzen, um Mehrdeutigkeit zu vermeiden. Das Zeichen ¥ in \\text funktioniert in UTF-8-Dokumenten mit einer Schrift, die es enthält; \\textyen ist unter pdfLaTeX die Alternative als Befehl. Yen-Beträge haben selten Nachkommastellen, da die Währung im Alltag keine Untereinheit nutzt, typisch ist also \\text{¥}1{,}200. Manche Schriften zeichnen es mit einem Querstrich, andere mit zwei; beides ist üblich, doch sollten Sie innerhalb eines Dokuments bei einer Schrift bleiben.",
  },
  "indian-rupee-sign": {
    name: "Zeichen der indischen Rupie",
    meaning: "Zeichen der indischen Rupie als wörtliches Zeichen in \\text, verwendet für Beträge in indischen Rupien.",
    usage: "Das Rupienzeichen wurde 2010 in Indien eingeführt, daher fehlt es in vielen älteren Schriften, auch im Standard Computer Modern; mit pdfLaTeX wird oft gar nichts ausgegeben. Am zuverlässigsten ist das Kompilieren mit XeLaTeX oder LuaLaTeX und einer Schrift wie Noto Sans oder einer aktuellen Systemschrift, die die Glyphe enthält. Ist sie nicht verfügbar, sind Rs. oder INR anerkannte Alternativen in Textform. Das indische Zahlensystem gruppiert Ziffern in Lakh und Crore, z. B. 1,00,000; verwenden Sie im Mathematikmodus {,}, damit das Komma keinen unerwünschten Abstand erzeugt.",
  },
  "bitcoin-sign": {
    name: "Bitcoin-Zeichen",
    meaning: "Bitcoin-Zeichen, als wörtliches Zeichen innerhalb von \\text eingegeben, für Beträge in Bitcoin.",
    usage: "Die Bitcoin-Glyphe ist jünger als die meisten Schriften, daher kann pdfLaTeX mit Standardschriften sie meist nicht ausgeben; praktikabel sind XeLaTeX oder LuaLaTeX mit einer Schrift, die sie enthält, oder eine Icon-Schrift. Viele Arbeiten aus Finanzwesen und Ökonomie schreiben einfach BTC, was nie Schriftprobleme bereitet, und sat für die kleinste Einheit, wobei 1 BTC 100.000.000 Satoshi entspricht. Bitcoin-Beträge haben häufig bis zu acht Nachkommastellen, die Ausrichtung am Dezimalzeichen in Tabellen ist daher besonders wichtig. Prüfen Sie die PDF-Ausgabe sorgfältig, denn eine fehlende Glyphe bleibt oft unbemerkt und erzeugt nur eine Warnung im Log.",
  },
  "percent-sign": {
    name: "Prozentzeichen",
    meaning: "Maskiertes Prozentzeichen: gibt % aus, statt einen LaTeX-Kommentar zu beginnen.",
    usage: "In LaTeX kommentiert ein einfaches % den Rest der Zeile aus, eine klassische Ursache für verschwindenden Text, daher braucht jede Prozentangabe \\%. Es funktioniert im Text- und im Mathematikmodus, etwa bei einem Zinssatz von 5\\% oder r = 3.5\\%. Beim Abstand gibt es unterschiedliche Konventionen: Im Englischen schreibt man meist 5% ohne Abstand, während manche europäische und SI-Konventionen einen schmalen Abstand einfügen, 5\\,\\%. siunitx regelt das einheitlich, wenn Sie viele Größen setzen. Wenn es um Prozentpunkte geht, schreiben Sie pp oder Prozentpunkte, um einen Anstieg von 4% auf 5% von einer relativen Änderung um 1% zu unterscheiden.",
  },
  "per-mille-sign": {
    name: "Promillezeichen",
    meaning: "Promillezeichen, also Teile pro Tausend, als wörtliches Zeichen innerhalb von \\text eingegeben.",
    usage: "Promille drückt Anteile pro Tausend aus, 5‰ entsprechen also 0.5%. Es kommt in Versicherungs- und Sterbetafeln vor, bei Salzgehalt und Isotopenverhältnissen wie \\delta^{13}C in der Geochemie sowie bei Promillegrenzen für Blutalkohol in mehreren Ländern. Die Befehlsform unter pdfLaTeX ist \\textperthousand; im Mathematikmodus umschließen Sie es wie hier mit \\text. Verwechseln Sie es nicht mit dem Basispunkt, der Teile pro Zehntausend angibt und eine eigene, selten unterstützte Glyphe hat. Falls der Schrift des Lesers das Zeichen fehlen könnte, ist die Ausschreibung Promille oder pro Tausend eine eindeutige Alternative.",
  },
  "basis-point": {
    name: "Basispunkt",
    meaning: "Abkürzung für Basispunkt: ein Hundertstel eines Prozentpunkts, verwendet für Zinssätze und Spreads.",
    usage: "Ein Basispunkt entspricht 0.01%, ein Zinsanstieg von 4.25% auf 4.50% beträgt also 25 bp. Anleihespreads, Zinsentscheidungen von Zentralbanken und Fondsgebühren werden so angegeben, weil prozentuale Änderungen von Zinssätzen mehrdeutig sind. Wenn Sie bp in \\text setzen, bleibt es aufrecht, und TeX liest b und p nicht als zwei kursive, miteinander multiplizierte Variablen. Trennen Sie Zahl und Einheit mit einem schmalen Abstand bzw. \\, wie in 25\\,\\text{bp}. Manche Autoren schreiben bps oder bips. Kurioserweise ist bp auch TeXs eigene Einheit für den PostScript-Punkt (big point), 1/72 Zoll, doch der Kontext hält beides auseinander.",
  },
  "npv": {
    name: "Kapitalwert",
    meaning: "Kapitalwert (Nettobarwert, englisch NPV): die Summe der abgezinsten künftigen Zahlungsströme abzüglich der Anfangsinvestition.",
    usage: "Der Kapitalwert wird als \\text{NPV} = \\sum_{t=0}^{n} \\frac{C_t}{(1+r)^t} berechnet, wobei C_0 meist die negative Anfangsauszahlung und r der Kalkulationszinssatz ist. Ein Projekt wird angenommen, wenn NPV > 0 gilt. Setzen Sie das Akronym in \\text, damit es aufrecht bleibt und TeX es nicht als N mal P mal V mit kursiven Abständen behandelt. \\mathrm{NPV} sieht gleich aus, ignoriert aber den umgebenden Textstil, was innerhalb von Theoremen sicherer ist. Verwenden Sie es als Funktion, etwa \\text{NPV}(r), dann fügt \\operatorname{NPV} den passenden Abstand vor der Klammer ein.",
  },
  "irr": {
    name: "Interner Zinsfuß",
    meaning: "Interner Zinsfuß (englisch IRR): der Abzinsungssatz, bei dem der Kapitalwert eines Projekts gleich null ist.",
    usage: "Der interne Zinsfuß ist implizit durch 0 = \\sum_{t=0}^{n} C_t / (1 + \\text{IRR})^t definiert, besitzt also im Allgemeinen keine geschlossene Form und wird numerisch bestimmt. Ein Projekt ist attraktiv, wenn sein IRR die Kapitalkosten übersteigt. Zahlungsströme, die mehr als einmal das Vorzeichen wechseln, können mehrere interne Zinsfüße ergeben, eine bekannte Schwäche gegenüber dem Kapitalwert. Verwenden Sie \\text oder \\mathrm, damit das Akronym aufrecht bleibt; IRR direkt im Mathematikmodus getippt ergibt drei kursive Variablen mit Produktabständen. Steht es in einem Nenner, sorgen \\left( \\right) für eine saubere Skalierung um den Bruch.",
  },
  "roi": {
    name: "Kapitalrendite",
    meaning: "Kapitalrendite (Return on Investment, ROI): der Gewinn einer Investition im Verhältnis zu ihren Kosten, meist in Prozent angegeben.",
    usage: "Die Kapitalrendite berechnet sich als \\text{ROI} = (\\text{gain} - \\text{cost}) / \\text{cost}, zur Darstellung oft mit 100\\% multipliziert. Anders als der IRR ignoriert sie den zeitlichen Verlauf der Zahlungsströme, daher verwendet man für mehrjährige Vergleiche annualisierte Varianten. Mit \\text bleiben die Buchstaben aufrecht und werden wie ein Wort gesetzt; direkt im Mathematikmodus getippt werden R, O und I zu kursiven Variablen, und das O kann mit einer Null verwechselt werden. Verwenden Sie in Brüchen \\frac mit \\text-Teilen in Zähler und Nenner oder \\dfrac in Fließtextabsätzen, damit es lesbar bleibt.",
    example: "\\text{ROI} = \\frac{\\text{Gewinn} - \\text{Kosten}}{\\text{Kosten}} \\times 100\\%",
  },
  "summation": {
    name: "Summe über Perioden",
    meaning: "Summation über die Zeitperioden t von 1 bis n, die übliche Art, Zahlungsströme über mehrere Perioden zusammenzufassen.",
    usage: "Finanzformeln summieren über Perioden: der Barwert einer Annuität, \\sum_{t=1}^{n} \\frac{C}{(1+r)^t}, die Anleihebewertung aus Kupons plus Nennwert und der Kapitalwert, der bei t = 0 beginnt, um die Anfangsauszahlung einzuschließen. In abgesetzten Formeln stehen die Grenzen über und unter dem Sigma; im Fließtext rücken sie verkleinert nach rechts. Mit \\sum\\limits erzwingen Sie gestapelte Grenzen im Absatz. Wählen Sie den Startindex bewusst, denn ein Beginn bei 0 oder 1 verändert das Ergebnis. In stetiger Zeit ist das Gegenstück ein Integral mit Abzinsung e^{-rt}.",
  },
  "present-value": {
    name: "Barwert",
    meaning: "Barwert eines einzelnen Zahlungsstroms C zum Zeitpunkt t, abgezinst mit dem Zinssatz r pro Periode.",
    usage: "Beim Abzinsen wird ein künftiger Betrag durch den Wachstumsfaktor (1+r)^t geteilt, 1,000 in 3 Jahren sind bei 5% heute also etwa 863.84 wert. Summiert man diesen Term über die Perioden, erhält man Kapitalwert und Anleihepreise. In abgesetzten Formeln zeichnet \\frac einen Bruch in voller Größe; im Fließtext schrumpft er, daher liest sich \\tfrac oder die Schrägstrichform C/(1+r)^t oft besser. Wird der Nenner komplizierter, etwa bei einem variablen Zinssatz (1 + r_t), verwenden Sie \\prod oder setzen den Exponenten in Klammern: ^{t} ist wichtig, sobald t aus mehr als einem Zeichen besteht, wie bei ^{t-1}.",
  },
  "compound-interest": {
    name: "Zinseszins",
    meaning: "Zinseszinsformel: der Betrag A nach t Jahren, wenn das Anfangskapital P zum Zinssatz r n-mal pro Jahr verzinst wird.",
    usage: "Dabei ist P das Anfangskapital, r der jährliche Nominalzinssatz, n die Zahl der Zinsperioden pro Jahr und t die Anzahl der Jahre; monatliche Verzinsung bedeutet n = 12. Wächst n, nähert sich der Betrag der stetigen Formel Pe^{rt}. Der Exponent muss in Klammern stehen, ^{nt}, sonst wird nur n hochgestellt. Der Schrägstrich r/n hält die Zeile kompakt; in abgesetzten Gleichungen ist \\left(1 + \\frac{r}{n}\\right)^{nt} üblicher, wobei das Paar \\left( \\right) die Klammern an den Bruch anpasst. Schreiben Sie \\frac nicht in nicht skalierte Klammern, die sonst sichtbar zu kurz bleiben.",
  },
  "continuous-compounding": {
    name: "Stetige Verzinsung",
    meaning: "Formel der stetigen Verzinsung: das Kapital P wächst nach der Zeit t beim stetigen Zinssatz r auf Pe^{rt}.",
    usage: "Dies ist der Grenzwert des Zinseszinses bei unendlich häufiger Verzinsung, da (1 + r/n)^{nt} \\to e^{rt}. Die Formel wird in der gesamten Derivatebewertung verwendet, etwa beim Diskontfaktor e^{-rT} in der Black-Scholes-Formel. Setzen Sie den Exponenten in Klammern, e^{rt}, damit beide Buchstaben hochgestellt werden. Manche Stile setzen die Eulersche Zahl aufrecht, \\mathrm{e}^{rt}, um sie von einer Variablen namens e zu unterscheiden; beides ist bei einheitlicher Verwendung akzeptiert. Bei langen Exponenten ist \\exp(rt) besser lesbar als ein winziger Exponent, besonders mit Brüchen im Exponenten.",
  },
};

export default text;
