import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/chemistry/<slug>. */
const text: SymbolPageTranslations = {
  "equilibrium-arrow": {
    name: "Freccia di equilibrio",
    meaning: "Coppia di semifrecce opposte (arpioni) che indica una reazione chimica in equilibrio dinamico.",
    usage: "La IUPAC raccomanda gli arpioni per l'equilibrio, come in N_2 + 3H_2 \\rightleftharpoons 2NH_3, mentre due frecce intere indicano in generale un processo reversibile. L'arpione superiore punta a destra, in accordo con la reazione diretta. La sua immagine speculare è \\leftrightharpoons, con l'arpione verso sinistra in alto. È una relazione, quindi TeX la spazia come =. Per scrivere le condizioni sopra la freccia, per esempio un catalizzatore, potete usare \\overset{\\text{Fe}}{\\rightleftharpoons}, anche se gli strumenti dedicati alla chimica offrono frecce più lunghe. In fisica lo stesso simbolo indica talvolta una corrispondenza bidirezionale.",
  },
  "reversible-reaction": {
    name: "Reazione reversibile",
    meaning: "Due frecce intere sovrapposte, verso sinistra in alto e verso destra in basso, usate per reazioni reversibili o mappe nei due sensi.",
    usage: "Alcuni testi di chimica usano doppie frecce intere per una reazione che può procedere in entrambe le direzioni, riservando gli arpioni (\\rightleftharpoons) al vero equilibrio; la maggior parte dei testi moderni usa gli arpioni in entrambi i casi. Attenzione all'ordine di sovrapposizione: \\leftrightarrows mette in alto la freccia verso sinistra, mentre \\rightleftarrows mette in alto quella verso destra, che di solito è ciò che serve quando la reazione diretta va da sinistra a destra. Non confondetele con \\leftrightarrow, una singola freccia a doppia punta. Nella teoria delle categorie la coppia indica spesso un'aggiunzione o una coppia di mappe parallele.",
  },
  isotope: {
    name: "Isotopo",
    meaning: "Notazione del nuclide con il numero di massa come apice a sinistra e il numero atomico come pedice a sinistra, qui il carbonio-14.",
    usage: "Il gruppo vuoto {} fornisce agli indici un elemento a cui agganciarsi, collocandoli a sinistra del simbolo dell'elemento. Un difetto: TeX allinea a sinistra il pedice sotto l'apice, così il 6 a una sola cifra finisce lontano dalla C. Aggiungete \\phantom{1}6 per allineare a destra i numeri rispetto al simbolo. Le equazioni nucleari combinano queste notazioni, come nel decadimento beta del carbonio-14 in azoto-14. Usate \\text o \\mathrm per l'elemento, così resta in tondo; il numero atomico viene spesso omesso quando è già implicito nell'elemento, ottenendo {}^{14}\\text{C}.",
  },
  "superscript-charge": {
    name: "Carica in apice",
    meaning: "Notazione degli ioni con la carica in apice, qui il catione sodio con una singola carica positiva.",
    usage: "Scrivete gli ioni con più cariche mettendo il numero prima del segno, \\text{Ca}^{2+} e \\text{SO}_4^{2-}, secondo l'ordine IUPAC. Le graffe sono importanti: ^{2+} mantiene entrambi i caratteri nell'apice. Un meno finale in apice è trattato come unario, quindi ^{-} viene reso in modo pulito. Usate \\mathrm{Na} anziché \\text{Na} se la formula può comparire dentro un teorema o una didascalia in corsivo, perché \\text copia il font circostante mentre \\mathrm è sempre in tondo. Quando pedici e cariche coincidono, la carica sta sopra il numero di atomi, come nel solfato.",
  },
  "subscript-count": {
    name: "Numero di atomi in pedice",
    meaning: "Formula molecolare dell'acqua, in cui il pedice 2 conta gli atomi di idrogeno in ogni molecola.",
    usage: "I simboli degli elementi devono essere in tondo, ed è per questo che ogni gruppo di lettere è racchiuso in \\text; H_2O in corsivo sembrerebbe un insieme di variabili. Un equivalente più breve è \\mathrm{H_2O}, che mantiene tutto in tondo, pedice compreso, ed è immune al corsivo circostante. I pedici contano solo gli atomi e non vanno mai confusi con le cariche in apice. Le formule con parentesi seguono lo stesso schema, \\mathrm{Ca(OH)_2}. Per un uso intensivo della chimica un pacchetto dedicato fa risparmiare fatica, ma per poche formule questo approccio manuale è perfettamente adeguato.",
  },
  "degrees-celsius": {
    name: "Gradi Celsius",
    meaning: "Unità grado Celsius, formata da un cerchietto in apice e una C in tondo; l'acqua congela a 0 °C.",
    usage: "Il segno di grado è \\circ in apice; una o o uno 0 sono sbagliati. Lo stile SI prevede uno spazio tra numero e unità, quindi scrivete 25\\,^{\\circ}\\text{C} con uno spazio sottile, e non mettete mai uno spazio tra il segno di grado e la C. Le differenze di temperatura in gradi Celsius sono uguali alle differenze in kelvin, un fatto che conta nei calcoli di capacità termica. \\text diventa corsivo dentro i teoremi; \\mathrm{C} lo evita. I pacchetti per le unità di misura forniscono comandi semantici, ma questa costruzione è l'approccio manuale comune e funziona ovunque, KaTeX compreso.",
  },
  bond: {
    name: "Legame semplice",
    meaning: "Legame covalente semplice tra due atomi di carbonio, disegnato come un breve trattino tra i simboli degli elementi.",
    usage: "In modalità matematica il trattino diventa un segno meno con spaziatura da operatore binario, quindi il legame appare con spazi attorno e somiglia piuttosto a una sottrazione. Scriverlo come \\text{C}{-}\\text{C} elimina la spaziatura e dà un legame compatto. Lunghezze ed energie di legame sono spesso indicate accanto, per esempio un legame C-C di circa 154 pm. Per le formule di struttura condensate come \\mathrm{CH_3{-}CH_3} vale lo stesso trucco con le graffe. Per qualcosa che vada oltre pochi legami, gli strumenti di disegno o un pacchetto per le strutture producono vere formule scheletriche.",
  },
  "double-bond": {
    name: "Doppio legame",
    meaning: "Doppio legame carbonio-carbonio, formato da un legame sigma e uno pi greco, caratteristico degli alcheni come l'etene.",
    usage: "Poiché in modalità matematica = è una relazione, TeX inserisce spazi ampi su entrambi i lati, e il risultato sembra un'equazione più che un legame. Racchiuderlo tra graffe, \\text{C}{=}\\text{C}, lo trasforma in un simbolo ordinario e avvicina gli atomi. Gli alcheni si scrivono come \\mathrm{H_2C{=}CH_2}. Il doppio legame è più corto e più forte di un legame semplice e impedisce la rotazione, dando origine agli isomeri cis-trans. Fate in modo che il lettore non possa scambiare il legame per un segno di uguale in una riga di reazione, tenendolo stretto agli atomi.",
  },
  "triple-bond": {
    name: "Triplo legame",
    meaning: "Triplo legame carbonio-carbonio, tipico degli alchini come l'etino (acetilene), disegnato con tre linee orizzontali.",
    usage: "\\equiv è una relazione, lo stesso simbolo usato per la congruenza (a \\equiv b \\pmod n) e per l'identità, quindi per impostazione predefinita è spaziato ampiamente; {\\equiv} produce un legame più stretto tra gli atomi. Un triplo legame ha una componente sigma e due pi greco ed è il più corto dei legami carbonio-carbonio. L'azoto gassoso si scrive \\mathrm{N{\\equiv}N}. Alcuni font disegnano \\equiv un po' largo, il che si adatta bene alla chimica. Evitate \\cong o \\approx, che sembrano abbastanza simili ma significano isomorfismo e approssimazione.",
  },
  "partial-charge": {
    name: "Carica parziale",
    meaning: "Carica parziale positiva su un atomo in un legame polare, scritta come delta minuscola con un più.",
    usage: "Nell'acqua gli idrogeni portano \\delta^{+} e l'ossigeno \\delta^{-}, la separazione di carica che determina il legame a idrogeno. Qui delta significa «una frazione di», non una variazione, quindi non confondetela con \\Delta. Per collocare l'etichetta sopra un atomo, usate \\overset{\\delta^{+}}{\\text{H}}, che mantiene leggibile la formula. Alcuni testi scrivono \\delta+ in linea senza apice; la forma in apice è più comune nei testi composti tipograficamente. Abbinatela a \\delta^{-} sul partner più elettronegativo, e \\delta\\delta^{+} indica una carica parziale ancora più piccola.",
  },
  electron: {
    name: "Elettrone",
    meaning: "Simbolo dell'elettrone, una e minuscola con la carica negativa in apice, usato nelle semireazioni redox.",
    usage: "Le semireazioni bilanciano la carica con gli elettroni, come in \\text{Cu}^{2+} + 2e^{-} \\to \\text{Cu}. Il positrone è e^{+}. Le norme redazionali di fisica compongono spesso i simboli delle particelle in tondo, \\mathrm{e}^{-}, il che evita anche la confusione con il numero di Nepero quando compaiono esponenziali vicini. Poiché e^- con un apice di un solo token funziona, le graffe sono facoltative, ma mantengono la coerenza con le cariche di più caratteri. Nella notazione nucleare un elettrone può anche essere scritto {}^{\\phantom{-}0}_{-1}e oppure \\beta^{-} quando viene emesso in un decadimento. L'antineutrino del decadimento beta si scrive \\bar{\\nu}_e accanto ad esso.",
  },
  aqueous: {
    name: "Simbolo di stato acquoso (aq)",
    meaning: "Simbolo di stato per «acquoso»: la specie è disciolta in acqua, come gli ioni in soluzione.",
    usage: "I simboli di stato seguono la formula, in linea come \\text{NaCl(aq)} o come pedice, \\text{NaCl}_{\\text{(aq)}}; entrambe le forme sono accettate, quindi sceglietene una. Digitare (aq) in modalità matematica senza \\text darebbe una a e una q in corsivo con spaziatura matematica, quindi l'involucro è importante. Le equazioni ioniche nette si basano su questa etichetta per mostrare quali specie si dissociano. Se scrivete molte equazioni, definite una macro come \\newcommand{\\aq}{\\text{(aq)}}. \\mathrm{(aq)} è un'alternativa che resta in tondo nei contesti in corsivo. Indica anche i protoni idratati, scritti \\text{H}^{+}\\text{(aq)}.",
  },
  solid: {
    name: "Simbolo di stato solido (s)",
    meaning: "Simbolo di stato che indica una specie solida, spesso un precipitato o un elettrodo metallico.",
    usage: "Le reazioni di precipitazione terminano con un solido, come \\text{AgCl(s)}, e la termochimica ne dipende: l'entalpia di formazione del carbonio si riferisce alla grafite allo stato solido. Alcuni testi più vecchi usano invece una freccia verso il basso per un precipitato; il simbolo tra parentesi è la forma preferita dalla IUPAC. Scrivetelo subito dopo la formula, senza spazi. Racchiuderlo in \\text mantiene la s in tondo; in modalità matematica una s non racchiusa sarebbe in corsivo e potrebbe essere scambiata per l'unità secondo o per una variabile.",
  },
  liquid: {
    name: "Simbolo di stato liquido (l)",
    meaning: "Simbolo di stato per un liquido puro, come l'acqua o il mercurio, scritto dopo la formula chimica.",
    usage: "Le equazioni di combustione distinguono \\text{H}_2\\text{O(l)} da \\text{H}_2\\text{O(g)} perché la variazione di entalpia differisce per il calore di vaporizzazione. Notate la differenza tra (l), un liquido puro, e (aq), una soluzione acquosa. Il tondo è particolarmente importante qui: in alcuni font una l in corsivo sembra la cifra 1 o una barra verticale, il che può confondere il lettore. Usare \\text o \\mathrm garantisce una lettera in tondo ben leggibile. Tenete il simbolo attaccato alla formula, senza spazi aggiuntivi.",
  },
  "gas-state-symbol-g": {
    name: "Simbolo di stato gassoso (g)",
    meaning: "Simbolo di stato per la fase gassosa, posto dopo le formule di gas e vapori nelle equazioni.",
    usage: "Le specie in fase gassosa contano per le costanti di equilibrio in termini di pressione, K_p, e per i calcoli con i gas ideali; contrassegnarle con (g) rende esplicite queste dipendenze. I testi più vecchi usano talvolta una freccia verso l'alto per indicare un gas che si libera, ma oggi si preferisce il simbolo di stato. Una buona abitudine è etichettare ogni specie in un'equazione termochimica, così i valori di entalpia non sono ambigui. Se il documento contiene molte formule, una macro come \\newcommand{\\gas}{\\text{(g)}} previene gli errori di battitura. \\mathrm{(g)} dà lo stesso risultato in tondo dentro il testo in corsivo.",
  },
};

export default text;
