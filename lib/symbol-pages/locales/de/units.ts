import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/units/<slug>. */
const text: SymbolPageTranslations = {
  "angstrom-a": {
    name: "Ångström (Å)",
    meaning: "Die Einheit Ångström, 10⁻¹⁰ Meter (0,1 nm), verwendet für Atomradien, Bindungslängen und Röntgenwellenlängen.",
    usage: "\\AA ist ein Befehl für den Textmodus, im Mathematikmodus muss er daher wie gezeigt in \\text eingeschlossen werden; ohne Umhüllung im Mathematikmodus erzeugt er eine Warnung und eine falsche Ausgabe. Kristallographen und Strukturbiologen geben Abstände nach wie vor in der Form 1.54\\,\\text{\\AA} an, etwa für die Wellenlänge der Kupfer-Kα-Strahlung, obwohl das SI Nanometer oder Pikometer bevorzugt. Das ähnlich aussehende \\mathring{A} funktioniert im Mathematikmodus, ist aber eine Variable mit Akzent und nicht das Einheitenzeichen. Setzen Sie einen kleinen Abstand zwischen Zahl und Einheit. Das kleine \\aa liefert den skandinavischen Buchstaben, nicht die Einheit.",
  },
  "degrees-fahrenheit": {
    name: "Grad Fahrenheit",
    meaning: "Die Temperatureinheit Grad Fahrenheit; Wasser gefriert bei Normaldruck bei 32 °F und siedet bei 212 °F.",
    usage: "Die Umrechnung lautet T_F = \\frac{9}{5} T_C + 32, und eine Temperaturdifferenz von einem Grad Fahrenheit entspricht 5/9 Kelvin. Die Konstruktion entspricht der für Celsius: ein hochgestelltes \\circ, gefolgt von einem aufrechten F, mit einem kleinen Abstand zwischen Zahl und Gradzeichen. Wetterdaten aus den USA, die Klima- und Lüftungstechnik sowie manche technischen Normen verwenden sie noch, wissenschaftliche Zeitschriften erwarten jedoch fast immer SI-Einheiten. Schreiben Sie das Gradzeichen nicht mit einem kleinen o und verwenden Sie \\degree nur, wenn dieser Befehl in Ihrer Umgebung definiert ist.",
  },
  "kelvin": {
    name: "Kelvin",
    meaning: "Kelvin, die SI-Basiseinheit der thermodynamischen Temperatur, mit dem Nullpunkt beim absoluten Nullpunkt.",
    usage: "Seit 1967 wird die Einheit ohne Gradzeichen als K geschrieben: 300 K, nicht 300 °K. Der absolute Nullpunkt liegt bei 0 K, der Tripelpunkt des Wassers bei 273,16 K, und es gilt T(\\text{K}) = T(^{\\circ}\\text{C}) + 273.15. Einheitenzeichen müssen aufrecht stehen, wofür \\text sorgt; ein kursives K ist eine Variable, etwa eine Gleichgewichtskonstante oder eine Steifigkeit. Lassen Sie einen kleinen Abstand zwischen Zahl und Einheit, 4.2\\,\\text{K}. In kursivem Satztext ist \\mathrm{K} sicherer, da \\text der kursiven Schrift folgen würde.",
  },
  "meter": {
    name: "Meter",
    meaning: "Meter, die SI-Basiseinheit der Länge, definiert über die Lichtgeschwindigkeit im Vakuum.",
    usage: "Ein aufrechtes m ist die Einheit, während ein kursives m meist die Masse bezeichnet, \\text{m} oder \\mathrm{m} ist daher unverzichtbar: Vergleichen Sie m = 2\\,\\text{kg} mit h = 2\\,\\text{m}. Nach SI-Regeln steht zwischen Wert und Einheit ein Abstand, und das Zeichen erhält nie eine Pluralform. Abgeleitete Einheiten entstehen durch Potenzen, \\text{m}^2 und \\text{m}^3, und Vorsätze werden direkt angefügt, \\text{km}, \\text{mm}. Geschwindigkeiten schreibt man \\text{m/s} oder \\text{m}\\,\\text{s}^{-1}; die Zeitschriften handhaben das unterschiedlich, prüfen Sie also die Hausregeln. Verwechseln Sie das Zeichen nicht mit dem Vorsatz Milli, der ebenfalls m verwendet.",
  },
  "kilogram": {
    name: "Kilogramm",
    meaning: "Kilogramm, die SI-Basiseinheit der Masse, heute über die Planck-Konstante statt über einen physischen Prototyp festgelegt.",
    usage: "Es ist die einzige SI-Basiseinheit mit eingebautem Vorsatz, Vielfache und Teile werden daher vom Gramm gebildet: Schreiben Sie \\text{mg}, nicht \\mu\\text{kg}. Dichten werden in \\text{kg}/\\text{m}^3 oder \\text{kg}\\,\\text{m}^{-3} angegeben; Wasser hat etwa 1000\\,\\text{kg}\\,\\text{m}^{-3}. Schreiben Sie das Zeichen klein, denn Kg oder KG sind falsch. Einheiten stehen aufrecht, umschließen Sie sie also mit \\text oder \\mathrm, und fügen Sie \\, zwischen Zahl und kg ein. In abgeleiteten Einheiten wie dem Newton steht kg nach Konvention an erster Stelle, \\text{kg}\\,\\text{m}\\,\\text{s}^{-2}. Das Einheitenzeichen bleibt auch am Satzanfang klein.",
  },
  "second": {
    name: "Sekunde",
    meaning: "Sekunde, die SI-Basiseinheit der Zeit, definiert über die Frequenz des Hyperfeinstrukturübergangs von Caesium-133.",
    usage: "Ein aufrechtes s ist die Einheit; ein kursives s steht oft für eine Wegstrecke oder Bogenlänge, die Formatierung trägt also in s = 5\\,\\text{m} gegenüber t = 5\\,\\text{s} Bedeutung. Vermeiden Sie in technischen Texten Abkürzungen wie sek. Reziproke Sekunden, \\text{s}^{-1}, messen Raten und sind bei der Angabe von Frequenzen dasselbe wie Hertz. Zu den Formen mit Vorsatz gehören \\text{ms}, \\mu\\text{s} und \\text{ns}; für den Vorsatz Mikro verlangt der SI-Stil ein aufrechtes My, das ein schlichtes \\mu in den Standardschriften nicht liefert.",
  },
  "ampere": {
    name: "Ampere",
    meaning: "Ampere, die SI-Basiseinheit der elektrischen Stromstärke, definiert über die Elementarladung.",
    usage: "Schaltungen sind voller A: I = 2\\,\\text{A}, Stromdichte in \\text{A}/\\text{m}^2, und bei der Ladung entspricht ein Coulomb einer Amperesekunde. Ein kursives A bezeichnet meist eine Fläche oder ein Vektorpotential, die aufrechte Formatierung hebt also die Einheit davon ab. Formen mit Vorsatz wie \\text{mA} und \\mu\\text{A} sind in der Elektronik üblich. Schreiben Sie die Zahl, einen kleinen Abstand und dann das Zeichen. Das Zeichen wird großgeschrieben, weil die Einheit André-Marie Ampère ehrt. Ein Milliampere ist ein Tausendstel, geschrieben 5\\,\\text{mA}.",
  },
  "volt": {
    name: "Volt",
    meaning: "Volt, die SI-Einheit der elektrischen Potentialdifferenz: ein Joule Energie pro Coulomb Ladung.",
    usage: "Das ohmsche Gesetz V = IR verwendet ein kursives V für die Größe Spannung, während die Einheit selbst aufrecht steht, wie in 230\\,\\text{V}; beides zu verwechseln ist ein häufiger Satzfehler. Ein kursives V bezeichnet in der Thermodynamik außerdem das Volumen, ein weiterer Grund, Einheiten aufrecht zu halten. Gleichwertige Ausdrücke sind \\text{J}/\\text{C} und \\text{W}/\\text{A}. Die elektrische Feldstärke wird in \\text{V}/\\text{m} gemessen. Formen mit Vorsatz, \\text{mV} und \\text{kV}, werden ohne Abstand angefügt, während Zahl und Einheit durch \\, getrennt werden. Batterien sind beispielsweise für 1.5\\,\\text{V} oder 9\\,\\text{V} ausgelegt.",
  },
  "watt": {
    name: "Watt",
    meaning: "Watt, die SI-Einheit der Leistung: ein Joule pro Sekunde übertragene Energie.",
    usage: "Leistung erscheint in P = VI, P = I^2 R und als Strahlungsflussdichte in \\text{W}/\\text{m}^2, wie bei der Solarkonstante von etwa 1361\\,\\text{W}\\,\\text{m}^{-2}. Der kursive Buchstabe W bezeichnet meist die Arbeit, aufrechte Einheit und kursive Größe können also nebeneinanderstehen: W = 10\\,\\text{J} in 2\\,\\text{s} ergibt 5\\,\\text{W}. Energierechnungen verwenden Kilowattstunden, geschrieben \\text{kW}\\,\\text{h} oder \\text{kWh}. Schreiben Sie nicht W/s für Energie; ein Watt ist bereits eine Rate. Große Kraftwerke werden in Megawatt angegeben, \\text{MW}, und Übertragungsverluste berechnet man als I^2 R.",
  },
  "joule": {
    name: "Joule",
    meaning: "Joule, die SI-Einheit von Energie, Arbeit und Wärme, gleich einem Newtonmeter oder kg·m²/s².",
    usage: "Die kinetische Energie \\frac{1}{2}mv^2 ergibt sich in SI-Einheiten in Joule, und molare Größen verwenden \\text{kJ}/\\text{mol}. Das Drehmoment hat ebenfalls die Dimension N m, wird aber nach Konvention als \\text{N}\\,\\text{m} statt J geschrieben, um anzuzeigen, dass es keine Energie ist. Die aufrechte Formatierung unterscheidet die Einheit vom kursiven J, das eine Stromdichte, ein Trägheitsmoment oder eine Jacobi-Determinante sein kann. Schreiben Sie die Multiplikation von Einheiten mit einem kleinen Abstand oder mit \\cdot, etwa \\text{kg}\\cdot\\text{m}^2\\,\\text{s}^{-2}. Der Energiegehalt von Lebensmitteln in Kilokalorien wird mit 1\\,\\text{kcal} = 4184\\,\\text{J} umgerechnet.",
  },
  "newton": {
    name: "Newton",
    meaning: "Newton, die SI-Einheit der Kraft: die Kraft, die ein Kilogramm mit einem Meter pro Sekunde zum Quadrat beschleunigt.",
    usage: "Gewichtskräfte und Kräfte werden in Newton angegeben, eine Masse von 1 kg wiegt an der Erdoberfläche also etwa 9.81\\,\\text{N}. Mechanische Spannung und Druck teilen durch eine Fläche, \\text{N}/\\text{m}^2, das ist das Pascal. Ein aufrechtes N ist die Einheit; ein kursives N ist oft eine Normalkraft, eine Anzahl oder eine Größe im Zusammenhang mit der Avogadro-Konstante, und das Tafel-\\mathbb{N} bezeichnet die natürlichen Zahlen. Lassen Sie einen kleinen Abstand zwischen Zahl und Einheit. Federkonstanten werden in \\text{N}/\\text{m} gemessen. Die Einheit ehrt Isaac Newton, daher wird das Zeichen großgeschrieben.",
  },
  "pascal": {
    name: "Pascal",
    meaning: "Pascal, die SI-Einheit von Druck und mechanischer Spannung, ein Newton pro Quadratmeter.",
    usage: "Da ein Pascal winzig ist, verwenden praktische Werte Vorsätze: Der Luftdruck beträgt etwa 101.325\\,\\text{kPa}, Wetterkarten verwenden Hektopascal (hPa), und Materialfestigkeiten werden in MPa oder GPa angegeben. Der Elastizitätsmodul von Stahl liegt bei etwa 200\\,\\text{GPa}. Das Zeichen besteht aus einem großen P und einem kleinen a, die aufrecht bleiben müssen; \\text{Pa} erreicht das. Der Druck selbst ist ein kursives p oder P. Die Einheit als \\text{N}/\\text{m}^2 zu schreiben ist gleichwertig, in modernen Texten aber seltener. Überdruck und Absolutdruck unterscheiden sich um etwa eine Atmosphäre, geben Sie also an, welchen Sie meinen.",
  },
  "hertz": {
    name: "Hertz",
    meaning: "Hertz, die SI-Einheit der Frequenz: eine Schwingung pro Sekunde, dimensionsmäßig gleich reziproken Sekunden.",
    usage: "Signalverarbeitung und Akustik geben Frequenzen wie 440\\,\\text{Hz} für den Kammerton a und Abtastraten wie 44.1\\,\\text{kHz} an; Prozessoren arbeiten im GHz-Bereich. Die Kreisfrequenz \\omega = 2\\pi f wird üblicherweise in \\text{rad}/\\text{s} angegeben, nicht in Hertz, um eine Verwechslung um den Faktor 2\\pi zu vermeiden. Behalten Sie das große H und das kleine z bei. Vorsätze werden direkt angefügt, \\text{MHz}, und vor der Einheit steht nach der Zahl ein kleiner Abstand. Für die Aktivität radioaktiver Stoffe heißt dieselbe Dimension stattdessen Becquerel. Die Periodendauer ist der Kehrwert, T = 1/f.",
  },
  "per-slash-in-units": {
    name: "Schrägstrich in Einheiten (pro)",
    meaning: "Schrägstrich in der Bedeutung „pro“ in zusammengesetzten Einheiten wie m/s, der eine Einheit durch eine andere teilt.",
    usage: "Im Mathematikmodus ist / ein gewöhnliches Symbol ohne zusätzlichen Abstand, was das enge Schriftbild \\text{m}/\\text{s} ergibt, das Einheiten brauchen. Die SI-Regeln erlauben nur einen Schrägstrich pro Einheit, die Beschleunigung ist also \\text{m}/\\text{s}^2 und niemals m/s/s; bei komplizierten Einheiten sind negative Exponenten wie \\text{J}\\,\\text{kg}^{-1}\\,\\text{K}^{-1} klarer. Verwenden Sie Klammern, wenn der Nenner mehrere Faktoren hat: \\text{W}/(\\text{m}^2\\,\\text{K}). Für allgemeine Brüche in abgesetzten Gleichungen ist \\frac meist besser als ein Schrägstrich, im Fließtext vermeidet der Schrägstrich jedoch gedrängte übereinanderstehende Zahlen.",
  },
  "squared": {
    name: "Zweite Potenz (Quadrat)",
    meaning: "Hochgestellte 2, die eine Größe oder Einheit in die zweite Potenz erhebt, wie bei x² oder Quadratmetern.",
    usage: "Mit ^2 wird das nächste einzelne Token als Exponent angehängt; für längere Exponenten brauchen Sie geschweifte Klammern, x^{12}, da x^12 ein x^1 gefolgt von einer 2 ergäbe. Quadrierte Einheiten wie \\text{m}^2 beschreiben Flächen, und \\text{s}^2 erscheint bei der Beschleunigung. Bei Funktionen bedeutet \\sin^2 x dasselbe wie (\\sin x)^2, eine Konvention, die sich nicht auf \\sin^{-1} überträgt, das die Umkehrfunktion bezeichnet. Doppelte Exponenten wie x^2^3 erzeugen einen Fehler; schreiben Sie je nach Bedeutung x^{2^3} oder (x^2)^3. Verwenden Sie in wissenschaftlichen Texten \\text{m}^2 statt qm.",
  },
  "cubed": {
    name: "Dritte Potenz (Kubik)",
    meaning: "Hochgestellte 3 zum Kubieren: dritte Potenzen von Zahlen oder Variablen sowie kubische Volumeneinheiten.",
    usage: "Volumina werden in \\text{m}^3, \\text{cm}^3 oder Litern angegeben (1\\,\\text{L} = 10^{-3}\\,\\text{m}^3), und Dichten verwenden Einheiten pro Kubikeinheit, \\text{kg}/\\text{m}^3. In der Algebra erscheinen dritte Potenzen in Identitäten wie a^3 - b^3 = (a - b)(a^2 + ab + b^2). Der Exponent wirkt nur auf das vorangehende Token, eine Einheit mit Vorsatz wird also als Ganzes kubiert, \\text{cm}^3, was (cm) hoch drei bedeutet und nicht c mal m hoch drei. Setzen Sie Exponenten aus mehreren Token in geschweifte Klammern: x^{3n}. Die Kubikwurzel schreibt man \\sqrt[3]{x}. Schreiben Sie in wissenschaftlichen Texten \\text{m}^3, nicht cbm.",
  },
};

export default text;
