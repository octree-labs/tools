import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/units/<slug>. */
const text: SymbolPageTranslations = {
  "angstrom-a": {
    name: "Ångström (Å)",
    meaning: "Unità ångström, pari a 10⁻¹⁰ metri (0,1 nm), usata per i raggi atomici, le lunghezze di legame e le lunghezze d'onda dei raggi X.",
    usage: "\\AA è un comando della modalità testo, quindi in modalità matematica va racchiuso in \\text, come mostrato; usarlo da solo in modalità matematica produce un avviso e un risultato errato. Cristallografi e biologi strutturali indicano ancora distanze come 1.54\\,\\text{\\AA} per la lunghezza d'onda K-alfa del rame, anche se il SI preferisce nanometri o picometri. Il simbolo simile \\mathring{A} funziona in modalità matematica, ma è una variabile accentata, non il simbolo dell'unità. Mettete uno spazio sottile tra il numero e l'unità. La minuscola \\aa dà la lettera scandinava, non l'unità.",
  },
  "degrees-fahrenheit": {
    name: "Grado Fahrenheit",
    meaning: "Unità di temperatura grado Fahrenheit; a pressione normale l'acqua gela a 32 °F e bolle a 212 °F.",
    usage: "La conversione è T_F = \\frac{9}{5} T_C + 32, e una differenza di temperatura di un grado Fahrenheit equivale a 5/9 di kelvin. La costruzione ricalca quella per i gradi Celsius: un \\circ in apice seguito da una F in tondo, con uno spazio sottile tra il numero e il simbolo di grado. Dati meteorologici statunitensi, impianti di climatizzazione e alcune norme tecniche lo usano ancora, ma le riviste scientifiche si aspettano quasi sempre il SI. Evitate di scrivere il grado con una o minuscola o con \\degree, a meno che questo comando non sia definito nella vostra configurazione.",
  },
  "kelvin": {
    name: "Kelvin",
    meaning: "Kelvin, l'unità di base del SI per la temperatura termodinamica, con lo zero allo zero assoluto.",
    usage: "Dal 1967 l'unità si scrive K senza simbolo di grado: 300 K, non 300 °K. Lo zero assoluto è 0 K, il punto triplo dell'acqua 273,16 K, e T(\\text{K}) = T(^{\\circ}\\text{C}) + 273.15. I simboli delle unità devono essere in tondo, cosa che \\text garantisce; una K corsiva è una variabile, come una costante di equilibrio o una rigidezza. Lasciate uno spazio sottile tra numero e unità, 4.2\\,\\text{K}. Nel testo corsivo dei teoremi \\mathrm{K} è più sicuro, perché \\text seguirebbe il corsivo.",
  },
  "meter": {
    name: "Metro",
    meaning: "Metro, l'unità di base del SI per la lunghezza, definita tramite la velocità della luce nel vuoto.",
    usage: "Una m in tondo è l'unità, mentre una m corsiva indica di solito la massa, quindi \\text{m} o \\mathrm{m} sono indispensabili: confrontate m = 2\\,\\text{kg} con h = 2\\,\\text{m}. Lo stile SI mette uno spazio tra valore e unità e non volge mai il simbolo al plurale. Le unità derivate si combinano con le potenze, \\text{m}^2 e \\text{m}^3, e i prefissi si attaccano direttamente, \\text{km}, \\text{mm}. La velocità si scrive \\text{m/s} o \\text{m}\\,\\text{s}^{-1}; le riviste variano, quindi verificate le norme redazionali. Non confondete il simbolo con il prefisso milli, che usa anch'esso la m.",
  },
  "kilogram": {
    name: "Kilogrammo",
    meaning: "Kilogrammo, l'unità di base del SI per la massa, ora fissata tramite la costante di Planck anziché un prototipo fisico.",
    usage: "È l'unica unità di base del SI che contiene già un prefisso, quindi multipli e sottomultipli si formano a partire dal grammo: scrivete \\text{mg}, non \\mu\\text{kg}. Le densità si danno in \\text{kg}/\\text{m}^3 o \\text{kg}\\,\\text{m}^{-3}; l'acqua è circa 1000\\,\\text{kg}\\,\\text{m}^{-3}. Mantenete il simbolo minuscolo, poiché Kg o KG sono errati. Le unità vanno in tondo, quindi racchiudetele in \\text o \\mathrm, e aggiungete \\, tra il numero e kg. Nelle unità derivate come il newton, per convenzione kg viene per primo, \\text{kg}\\,\\text{m}\\,\\text{s}^{-2}. Simbolo e nome restano minuscoli anche a inizio frase.",
  },
  "second": {
    name: "Secondo",
    meaning: "Secondo, l'unità di base del SI per il tempo, definita dalla frequenza della transizione iperfine del cesio 133.",
    usage: "Una s in tondo è l'unità; una s corsiva indica spesso uno spostamento o una lunghezza d'arco, quindi la formattazione è significativa in s = 5\\,\\text{m} rispetto a t = 5\\,\\text{s}. Evitate abbreviazioni come sec nella scrittura tecnica. I secondi alla meno uno, \\text{s}^{-1}, misurano frequenze e tassi e coincidono con l'hertz quando descrivono una frequenza. Tra le forme con prefisso ci sono \\text{ms}, \\mu\\text{s} e \\text{ns}; per il prefisso micro lo stile SI preferisce una mu in tondo, che il semplice \\mu non fornisce con i caratteri predefiniti.",
  },
  "ampere": {
    name: "Ampere",
    meaning: "Ampere, l'unità di base del SI per la corrente elettrica, definita tramite la carica elementare.",
    usage: "I circuiti sono pieni di A: I = 2\\,\\text{A}, la densità di corrente in \\text{A}/\\text{m}^2 e la carica, dato che un coulomb equivale a un ampere secondo. Una A corsiva indica di solito un'area o un potenziale vettore, quindi la formattazione in tondo distingue l'unità. Le forme con prefisso come \\text{mA} e \\mu\\text{A} sono comuni in elettronica. Scrivete il numero, uno spazio sottile e poi il simbolo. Nel testo il nome dell'unità è minuscolo, ampere, anche se il simbolo è maiuscolo perché rende omaggio ad André-Marie Ampère. Un milliampere è un millesimo, scritto 5\\,\\text{mA}.",
  },
  "volt": {
    name: "Volt",
    meaning: "Volt, l'unità SI di differenza di potenziale elettrico: un joule di energia per coulomb di carica.",
    usage: "La legge di Ohm V = IR usa una V corsiva per la grandezza tensione, mentre l'unità è in tondo, come in 230\\,\\text{V}; confonderle è un errore tipografico comune. In termodinamica la V corsiva indica anche il volume, un motivo in più per tenere le unità in tondo. Espressioni equivalenti sono \\text{J}/\\text{C} e \\text{W}/\\text{A}. L'intensità del campo elettrico si misura in \\text{V}/\\text{m}. Le versioni con prefisso \\text{mV} e \\text{kV} si attaccano direttamente senza spazio, mentre numero e unità sono separati da \\,. Le batterie, per esempio, hanno tensioni nominali di 1,5 V o 9 V.",
  },
  "watt": {
    name: "Watt",
    meaning: "Watt, l'unità SI di potenza: un joule trasferito al secondo.",
    usage: "La potenza compare in P = VI, P = I^2 R e nel flusso radiativo in \\text{W}/\\text{m}^2, come la costante solare di circa 1361\\,\\text{W}\\,\\text{m}^{-2}. La W corsiva indica di solito il lavoro, quindi l'unità in tondo e la grandezza in corsivo possono stare fianco a fianco: W = 10\\,\\text{J} in 2\\,\\text{s} dà 5\\,\\text{W}. Le bollette dell'energia usano i kilowattora, scritti \\text{kW}\\,\\text{h} o \\text{kWh}. Non scrivete W/s per l'energia; il watt è già una grandezza per unità di tempo. Le grandi centrali hanno potenze nominali in megawatt, \\text{MW}, e le perdite di trasmissione si calcolano come I^2 R.",
  },
  "joule": {
    name: "Joule",
    meaning: "Joule, l'unità SI di energia, lavoro e calore, pari a un newton metro, ovvero kg·m²/s².",
    usage: "L'energia cinetica \\frac{1}{2}mv^2 risulta in joule quando si usano le unità SI, e le grandezze molari usano \\text{kJ}/\\text{mol}. Anche il momento torcente ha dimensionalmente le unità N m, ma per convenzione si scrive \\text{N}\\,\\text{m} anziché J, per segnalare che non è un'energia. La formattazione in tondo distingue l'unità dalla J corsiva, che può indicare una densità di corrente, un momento d'inerzia o uno jacobiano. Indicate il prodotto di unità con uno spazio sottile o con \\cdot, come \\text{kg}\\cdot\\text{m}^2\\,\\text{s}^{-2}. L'energia degli alimenti in kilocalorie si converte con 1\\,\\text{kcal} = 4184\\,\\text{J}.",
  },
  "newton": {
    name: "Newton",
    meaning: "Newton, l'unità SI di forza: la forza che imprime a un kilogrammo un'accelerazione di un metro al secondo quadrato.",
    usage: "Pesi e forze si esprimono in newton, quindi una massa di 1 kg pesa circa 9.81\\,\\text{N} sulla superficie terrestre. Sforzo e pressione dividono per un'area, \\text{N}/\\text{m}^2, cioè il pascal. Una N in tondo è l'unità; una N corsiva è spesso una reazione normale, un conteggio o un numero legato ad Avogadro, mentre la N a doppio tratto \\mathbb{N} indica i numeri naturali. Lasciate uno spazio sottile tra numero e unità. Le costanti elastiche si misurano in \\text{N}/\\text{m}. L'unità rende omaggio a Isaac Newton, quindi il simbolo è maiuscolo ma il nome dell'unità no.",
  },
  "pascal": {
    name: "Pascal",
    meaning: "Pascal, l'unità SI di pressione e di sforzo, pari a un newton al metro quadrato.",
    usage: "Poiché il pascal è piccolissimo, i valori pratici usano prefissi: la pressione atmosferica è circa 101.325\\,\\text{kPa}, le carte meteorologiche usano gli ettopascal (hPa) e le resistenze dei materiali si danno in MPa o GPa. Il modulo di Young dell'acciaio è circa 200\\,\\text{GPa}. Il simbolo ha la P maiuscola e la a minuscola, che devono restare in tondo; \\text{Pa} lo garantisce. La pressione in sé è una p o P corsiva. Scrivere l'unità come \\text{N}/\\text{m}^2 è equivalente ma meno comune nei testi moderni. Pressione relativa e pressione assoluta differiscono di circa un'atmosfera, quindi precisate quale intendete.",
  },
  "hertz": {
    name: "Hertz",
    meaning: "Hertz, l'unità SI di frequenza: un ciclo al secondo, dimensionalmente uguale ai secondi alla meno uno.",
    usage: "L'elaborazione dei segnali e l'acustica indicano frequenze come 440\\,\\text{Hz} per il la del diapason e frequenze di campionamento come 44.1\\,\\text{kHz}; i processori lavorano in GHz. La pulsazione \\omega = 2\\pi f si esprime abitualmente in \\text{rad}/\\text{s}, non in hertz, per evitare confusioni di un fattore 2π. Mantenete la H maiuscola e la z minuscola. I prefissi si attaccano direttamente, \\text{MHz}, e il numero è seguito da uno spazio sottile prima dell'unità. Per l'attività radioattiva la stessa dimensione prende invece il nome di becquerel. Il periodo è il reciproco, T = 1/f.",
  },
  "per-slash-in-units": {
    name: "Barra obliqua nelle unità di misura",
    meaning: "Barra obliqua usata con il significato di «al» o «per» nelle unità composte come m/s, per dividere un'unità per un'altra.",
    usage: "In modalità matematica / è un simbolo ordinario senza spaziatura aggiuntiva, che dà l'aspetto compatto \\text{m}/\\text{s} richiesto dalle unità. Le regole del SI ammettono una sola barra obliqua in un'unità, quindi l'accelerazione è \\text{m}/\\text{s}^2 e mai m/s/s; per unità complicate gli esponenti negativi come \\text{J}\\,\\text{kg}^{-1}\\,\\text{K}^{-1} sono più chiari. Usate le parentesi quando il denominatore ha più fattori: \\text{W}/(\\text{m}^2\\,\\text{K}). Per le frazioni generiche nelle equazioni in display, \\frac è di solito preferibile alla barra, ma nel testo la barra evita numeri impilati e compressi.",
  },
  "squared": {
    name: "Quadrato (seconda potenza)",
    meaning: "Apice 2, che eleva una grandezza o un'unità alla seconda potenza, come in x² o nei metri quadrati.",
    usage: "Scrivere ^2 rende apice il singolo elemento successivo; per esponenti più lunghi servono le graffe, x^{12}, poiché x^12 darebbe x^1 seguito da un 2. Le unità al quadrato, come \\text{m}^2, descrivono aree, e \\text{s}^2 compare nell'accelerazione. Applicato alle funzioni, \\sin^2 x significa (\\sin x)^2, una convenzione che non si estende a \\sin^{-1}, che indica l'inversa. I doppi apici come x^2^3 producono un errore; scrivete x^{2^3} o (x^2)^3 a seconda di ciò che intendete. Nei testi scientifici usate \\text{m}^2 anziché abbreviazioni come mq.",
  },
  "cubed": {
    name: "Cubo (terza potenza)",
    meaning: "Apice 3 per l'elevamento al cubo: terze potenze di numeri o variabili e unità cubiche di volume.",
    usage: "I volumi si esprimono in \\text{m}^3, \\text{cm}^3 o litri (1\\,\\text{L} = 10^{-3}\\,\\text{m}^3), e le densità usano unità al metro cubo, \\text{kg}/\\text{m}^3. In algebra i cubi compaiono in identità come a^3 - b^3 = (a - b)(a^2 + ab + b^2). L'apice si applica solo all'elemento precedente, quindi un'unità con prefisso viene elevata al cubo nel suo insieme, \\text{cm}^3, che significa (cm) al cubo e non c per m al cubo. Racchiudete tra graffe gli esponenti di più elementi: x^{3n}. La radice cubica si scrive \\sqrt[3]{x}. Nei testi scientifici scrivete \\text{m}^3, non abbreviazioni come mc.",
  },
};

export default text;
