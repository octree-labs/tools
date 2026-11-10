import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/arrows/<slug>. */
const text: SymbolPageTranslations = {
  "left-arrow": {
    name: "Freccia a sinistra",
    meaning: "Traccia una freccia singola corta rivolta a sinistra, usata per l'assegnazione negli algoritmi e per le mappe scritte al contrario.",
    usage: "Lo pseudocodice scrive l'assegnazione come x \\leftarrow x + 1, e \\gets è un alias predefinito proprio di questa freccia, più naturale da leggere negli algoritmi. In matematica indica talvolta una mappa scritta da destra a sinistra, B \\leftarrow A, o, in testi più vecchi, un limite da destra. Gli articoli di machine learning la usano per l'aggiornamento dei parametri, \\theta \\leftarrow \\theta - \\eta g. È una relazione, quindi TeX le aggiunge attorno uno spazio ampio. Per una freccia più lunga usate \\longleftarrow, e per una con etichetta la freccia estensibile \\xleftarrow{text}.",
  },
  "right-arrow": {
    name: "Freccia a destra",
    meaning: "Traccia una freccia singola corta rivolta a destra, per le segnature di funzioni, i limiti e le reazioni chimiche.",
    usage: "\\rightarrow ha l'alias più breve \\to, la scelta abituale in f : A \\to B e nei limiti x \\to 0. Usate invece \\mapsto per descrivere che cosa accade a un elemento, come in x \\mapsto x^2. In logica, p \\rightarrow q è l'implicazione materiale, distinta dalla freccia doppia \\Rightarrow usata tra enunciati. I chimici la usano per le reazioni semplici, e nella teoria dei grafi indica gli archi orientati u \\rightarrow v. Quando vi serve un'etichetta sopra la freccia, la versione estensibile \\xrightarrow{\\text{label}} si allunga per contenerla.",
  },
  "up-arrow": {
    name: "Freccia in su",
    meaning: "Traccia una freccia verso l'alto, usata per i limiti crescenti, lo spin su, lo sviluppo di gas e la notazione di Knuth.",
    usage: "In analisi si scrive x_n \\uparrow x per una successione che cresce verso il suo limite, come nel teorema della convergenza monotona. La fisica la usa per lo spin su, |\\uparrow\\rangle, e la chimica segna con una freccia in su, dopo il prodotto, un gas che si libera da una reazione. La notazione a frecce di Knuth per numeri enormi scrive 3 \\uparrow\\uparrow 3 per l'esponenziazione iterata. \\uparrow funziona anche come delimitatore, quindi \\big\\uparrow o \\left\\uparrow ... \\right. ne producono versioni più alte. La freccia a doppio tratto \\Uparrow è un simbolo distinto.",
  },
  "long-left-arrow": {
    name: "Freccia lunga a sinistra",
    meaning: "Traccia una freccia singola lunga rivolta a sinistra, una versione allungata di \\leftarrow per mappe larghe o enfatizzate.",
    usage: "\\longleftarrow è una freccia lunga di lunghezza fissa, circa il doppio di \\leftarrow, costruita da un segno meno e una punta. È utile quando le frecce collegano espressioni lunghe o nei diagrammi in linea di successioni esatte scritte da destra a sinistra. Per un testo sopra la freccia è meglio la freccia estensibile \\xleftarrow{f}, che si allunga con l'etichetta. L'assegnazione negli algoritmi usa di solito il corto \\gets. La sua controparte a doppio tratto è \\Longleftarrow, alla base del simbolo «è implicato da» \\impliedby.",
  },
  "long-right-arrow": {
    name: "Freccia lunga a destra",
    meaning: "Traccia una freccia singola lunga rivolta a destra, spesso per enunciati di convergenza e frecce tra espressioni lunghe.",
    usage: "Si usa \\longrightarrow quando un \\to corto appare compresso, per esempio in a_n \\longrightarrow L o tra due termini lunghi in una riduzione. Una condizione sotto la freccia si aggiunge con \\xrightarrow[n \\to \\infty]{}, che si allunga fino all'etichetta, oppure con \\underset{n\\to\\infty}{\\longrightarrow}. In chimica si usano frecce lunghe per le reazioni con le condizioni scritte sopra. È un simbolo di lunghezza fissa, a differenza delle frecce estensibili. La versione doppia è \\Longrightarrow, ciò che \\implies stampa con spazio aggiuntivo.",
  },
  "down-arrow": {
    name: "Freccia in giù",
    meaning: "Traccia una freccia verso il basso, usata per i limiti decrescenti, lo spin giù, i precipitati e le riduzioni big-step.",
    usage: "Una successione che decresce verso il suo limite si scrive x_n \\downarrow x, e i limiti unilaterali compaiono come t \\downarrow 0. I fisici scrivono lo spin giù come |\\downarrow\\rangle, e i chimici mettono una freccia dopo un precipitato solido. Nella teoria dei domini e nella semantica dei linguaggi di programmazione, e\\downarrow significa che un calcolo converge. Come \\uparrow è un delimitatore, quindi \\Big\\downarrow dà una freccia più alta, comoda negli schizzi di diagrammi verticali. La versione a doppio tratto è \\Downarrow. Alcuni testi di topologia e teoria degli ordini scrivono anche {\\downarrow}x per l'insieme inferiore generato da un elemento.",
  },
  "left-arrow-double": {
    name: "Freccia doppia a sinistra",
    meaning: "Traccia una freccia corta a doppio tratto rivolta a sinistra, letta «è implicato da» o usata per segnare la metà inversa di una dimostrazione.",
    usage: "Nelle dimostrazioni di un'equivalenza gli autori etichettano le due direzioni (\\Rightarrow) e (\\Leftarrow), quest'ultima per l'implicazione inversa. Tra formule, A \\Leftarrow B significa che B implica A. Per una versione lunga e spaziata tra enunciati completi, \\impliedby dà \\Longleftarrow con spazio aggiuntivo, speculare a \\implies. Attenzione a non confondere \\Leftarrow con \\leq in una lettura veloce, perché alcuni lettori ne fraintendono la forma. I testi di logica preferiscono più spesso riformulare con una freccia a destra, quindi riservate \\Leftarrow alle direzioni inverse.",
    example: "(\\Leftarrow)\\ \\text{Sia } n^2 \\text{ pari. Allora anche } n \\text{ risulta pari.}",
  },
  "right-arrow-double": {
    name: "Freccia doppia a destra",
    meaning: "Traccia una freccia corta a doppio tratto rivolta a destra, il segno standard di implicazione tra formule.",
    usage: "\\Rightarrow afferma che una formula ne implica un'altra, come in p \\Rightarrow q, e indica la direzione diretta (\\Rightarrow) nelle dimostrazioni di equivalenza. \\implies stampa il più lungo \\Longrightarrow con uno spazio extra ampio ed è adatto alle implicazioni tra enunciati completi. In probabilità si scrive X_n \\Rightarrow X per la convergenza debole delle distribuzioni, e nella riscrittura di termini indica un passo di riduzione. L'algebra di Boole la usa per il condizionale. Preferitela alla freccia singola \\to quando gli oggetti sono enunciati anziché insiemi o funzioni.",
  },
  "up-arrow-double": {
    name: "Freccia doppia in su",
    meaning: "Traccia una freccia a doppio tratto verso l'alto, un simbolo raro utilizzabile anche come delimitatore estensibile.",
    usage: "\\Uparrow non ha un significato standard unico in matematica. Compare occasionalmente nei diagrammi, in alcuni testi di logica e teoria della dimostrazione e, in fisica, per uno stato fortemente polarizzato. Essendo un delimitatore, \\Big\\Uparrow e \\left\\Uparrow ... \\right. lo ingrandiscono verticalmente. Se vi serve solo indicare una direzione verso l'alto, la scelta abituale è \\uparrow. Se usate \\Uparrow per una relazione personalizzata, definitela nel testo la prima volta che compare, così che il lettore non debba indovinare.",
  },
  "long-left-arrow-double": {
    name: "Freccia doppia lunga a sinistra",
    meaning: "Traccia una freccia lunga a doppio tratto rivolta a sinistra; con spaziatura aggiuntiva diventa il segno «è implicato da».",
    usage: "\\Longleftarrow è il glifo alla base di \\impliedby, che aggiunge spazi ampi su ciascun lato per l'uso tra enunciati completi. Usate direttamente \\Longleftarrow quando volete la freccia lunga senza quella spaziatura, per esempio in una catena compatta dentro una tabella. Nelle dimostrazioni può introdurre la direzione inversa, (\\Longleftarrow). Il gemello rivolto a destra, \\Longrightarrow, sta alla base di \\implies, e quello a due punte \\Longleftrightarrow alla base di \\iff. Evitate di mescolare forme corte e lunghe nella stessa dimostrazione. Le frecce inverse si leggono meglio quando l'ipotesi più forte sta a destra.",
  },
  "long-right-arrow-double": {
    name: "Freccia doppia lunga a destra",
    meaning: "Traccia una freccia lunga a doppio tratto rivolta a destra; circondata da spazi diventa il segno \\implies.",
    usage: "\\Longrightarrow è il glifo nudo usato da \\implies, senza lo spazio extra ampio. Sceglietelo quando vi serve un'implicazione in uno spazio ristretto, come un pedice, una cella di matrice o una tabella compatta, e \\implies tra proposizioni complete in display. Si usa anche per riduzioni in più passi nei sistemi di riscrittura e, in alcuni testi di probabilità, per la convergenza. La versione corta \\Rightarrow è migliore tra formule brevi. Scrivete l'implicazione inversa con \\Longleftarrow. In una sequenza di passaggi in display, allineate le frecce con l'ambiente align così che ogni passaggio inizi nella stessa colonna.",
    example: "a \\mid b \\text{ e } b \\mid c \\Longrightarrow a \\mid c",
  },
  "down-arrow-double": {
    name: "Freccia doppia in giù",
    meaning: "Traccia una freccia a doppio tratto verso il basso, usata per la valutazione big-step nella semantica dei linguaggi di programmazione.",
    usage: "La semantica operazionale scrive e \\Downarrow v per dire che l'espressione e si valuta nel valore v in stile big-step, il principale uso tecnico di questo simbolo. Nei diagrammi e nelle dimostrazioni logiche può indicare un passo di inferenza verticale. Come le altre frecce verticali, \\Downarrow è un delimitatore, quindi \\Big\\Downarrow ne dà una versione più alta. Non confondetelo con \\downarrow, che nella stessa semantica può indicare la terminazione. Definite la vostra convenzione quando introducete il giudizio. La semantica small-step, invece, usa \\to o \\longrightarrow per i singoli passi di riduzione e \\to^* per la loro chiusura riflessiva e transitiva.",
  },
  "left-right-arrow": {
    name: "Freccia bidirezionale",
    meaning: "Traccia una freccia corta a due punte, per corrispondenze, il bicondizionale e le strutture di risonanza.",
    usage: "La logica usa p \\leftrightarrow q per il connettivo bicondizionale all'interno delle formule, mentre \\Leftrightarrow e \\iff sono più comuni tra enunciati completi. In combinatoria descrive una corrispondenza biunivoca tra oggetti, e in chimica si usa tra strutture di risonanza, non per l'equilibrio, che usa \\rightleftharpoons. La teoria dei grafi può usarla per archi non orientati o bidirezionali. È una relazione e riceve uno spazio ampio. Per una versione più lunga usate \\longleftrightarrow. Nelle tavole di verità equivale allo XNOR, vero esattamente quando i due lati concordano.",
  },
  "long-left-right-arrow": {
    name: "Freccia bidirezionale lunga",
    meaning: "Traccia una freccia singola lunga a due punte, un \\leftrightarrow allungato per corrispondenze tra espressioni lunghe.",
    usage: "\\longleftrightarrow si adatta a una corrispondenza tra due oggetti lunghi, per esempio una biiezione tra sottoinsiemi e stringhe binarie, dove la freccia corta si perderebbe. È un simbolo di lunghezza fissa, quindi per le etichette servono \\overset o una costruzione impilata. Notate che \\iff è costruito dalla freccia a doppio tratto \\Longleftrightarrow, non da questa versione a tratto singolo, quindi non usate \\longleftrightarrow per l'equivalenza logica nelle dimostrazioni. La fisica la usa per una dualità tra due teorie. La lunghezza extra aiuta anche quando la freccia porta un testo impilato sopra.",
  },
  "up-down-arrow": {
    name: "Freccia su e giù",
    meaning: "Traccia una freccia verticale a due punte, usata soprattutto come delimitatore estensibile o nei diagrammi.",
    usage: "\\updownarrow punta sia verso l'alto sia verso il basso, il che la rende comoda nei diagrammi verticali per mostrare una relazione bidirezionale tra righe. Essendo un delimitatore, si ingrandisce con \\big, \\Big oppure \\left e \\right. In fisica indica talvolta una sovrapposizione di stati di spin o un'oscillazione verticale. La sua variante a doppio tratto è \\Updownarrow. Se state disegnando un diagramma commutativo completo, un ambiente dedicato ai diagrammi allineerà le frecce verticali meglio che posizionare \\updownarrow a mano. Raramente serve negli articoli moderni, ma è utile negli appunti delle lezioni.",
  },
  "left-right-arrow-double": {
    name: "Freccia doppia bidirezionale",
    meaning: "Traccia una freccia corta a doppio tratto e due punte per l'equivalenza logica tra formule.",
    usage: "\\Leftrightarrow afferma che due formule si implicano a vicenda, come in A \\Leftrightarrow B. Per l'equivalenza tra enunciati completi in display, \\iff dà il più lungo \\Longleftrightarrow con spazio aggiuntivo. L'algebra di Boole la usa per lo XNOR o il bicondizionale. Nelle catene di equazioni equivalenti, allineare una colonna di \\Leftrightarrow con align è uno schema comune negli eserciziari svolti. Non confondetela con \\equiv, che esprime identità o congruenza e non equivalenza logica. Scrivetela solo quando ogni passaggio è davvero reversibile: elevare al quadrato entrambi i membri, per esempio, rompe l'equivalenza.",
  },
  "long-left-right-arrow-double": {
    name: "Freccia doppia bidirezionale lunga",
    meaning: "Traccia una freccia lunga a doppio tratto e due punte, lo stesso glifo usato da \\iff.",
    usage: "\\Longleftrightarrow stampa la stessa freccia di \\iff, ma senza gli spazi extra ampi che \\iff aggiunge. Ciò la rende la scelta migliore in pedici, tabelle o testo in linea compatto, mentre \\iff si legge meglio negli enunciati di teoremi in display. Compare anche nelle dimostrazioni in cui le due direzioni sono argomentate insieme. Tra formule brevi è preferibile il corto \\Leftrightarrow. Mantenete una scelta coerente in tutto il documento, specialmente negli enunciati dei teoremi. Serve anche nelle catene di passaggi algebrici reversibili allineate in un ambiente align, dove la lunghezza extra separa visivamente le equazioni lunghe. Come le altre frecce è una relazione, quindi TeX le dà uno spazio ampio su entrambi i lati.",
    example: "A \\text{ invertibile} \\Longleftrightarrow \\det A \\neq 0",
  },
  "up-down-arrow-double": {
    name: "Freccia doppia su e giù",
    meaning: "Traccia una freccia verticale a doppio tratto e due punte, un simbolo utilizzabile come delimitatore per l'equivalenza in verticale.",
    usage: "\\Updownarrow si usa soprattutto nelle disposizioni verticali, come due enunciati equivalenti impilati in un array, dove svolge il ruolo di un \\Leftrightarrow ruotato. È un delimitatore, quindi le versioni \\Big\\Updownarrow e \\left ... \\right crescono in verticale. Al di fuori di questi diagrammi non ha un significato ampiamente consolidato. Se vi serve la versione a tratto singolo, usate \\updownarrow. Un semplice array con una colonna centrata mantiene allineati gli enunciati e la freccia. Nelle slide delle lezioni può anche mostrare che due definizioni impilate verticalmente sono intercambiabili. Abbinatela a \\Leftrightarrow quando la stessa equivalenza compare altrove anche in orizzontale.",
    example: "\\begin{array}{c} A \\text{ vale} \\\\ \\Updownarrow \\\\ B \\text{ vale} \\end{array}",
  },
  "maps-to": {
    name: "Freccia di applicazione (mapsto)",
    meaning: "Traccia una freccia con stanghetta che mostra dove una funzione manda un singolo elemento, come in x ↦ x².",
    usage: "Usate \\mapsto per gli elementi e \\to per gli insiemi: f : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2 indica insieme dominio, codominio e legge. Gli articoli di lambda calcolo e programmazione funzionale la usano per le funzioni anonime, e in semantica si scrivono così sostituzioni o aggiornamenti dell'ambiente, [x \\mapsto v]. Differisce da \\to solo per la piccola stanghetta in coda, quindi verificate che si veda chiaramente nei corpi piccoli. Per espressioni lunghe usate \\longmapsto. Nei diagrammi commutativi, anche le frecce a livello di elementi si disegnano con la coda a stanghetta.",
  },
  "long-maps-to": {
    name: "Freccia di applicazione lunga",
    meaning: "Traccia una lunga freccia con stanghetta che manda un elemento nella sua immagine, per espressioni più larghe di quelle adatte a \\mapsto.",
    usage: "\\longmapsto dà più spazio quando l'input o l'output è lungo, come in (x, y) \\longmapsto x^2 + y^2, o quando volete che la legge sugli elementi sia allineata con un \\longrightarrow sovrastante. Si legge come \\mapsto e va abbinata a \\to o \\longrightarrow nella riga che indica dominio e codominio. Essendo di lunghezza fissa, un'etichetta sopra richiede comunque \\overset. Usarla in modo coerente nelle definizioni di funzioni in display dà un aspetto pulito su due righe.",
  },
  "northeast-arrow": {
    name: "Freccia a nord-est",
    meaning: "Traccia una freccia diagonale rivolta in alto a destra, per andamenti crescenti e lati di diagrammi.",
    usage: "\\nearrow si usa spesso informalmente per «cresce verso», come in a_n \\nearrow a, la controparte diagonale di \\uparrow. Collega anche le voci in diagrammi costruiti a mano, illustrazioni di matrici e schizzi di tipo Hasse. Con \\searrow, \\swarrow e \\nwarrow forma un insieme completo di frecce diagonali. Queste frecce non si allungano, quindi per frecce diagonali lunghe è più adatto uno strumento per diagrammi. Negli appunti di economia e di analisi dei dati può riassumere un andamento crescente in una cella di tabella. Definitene il significato una volta, poiché è una notazione e non un simbolo formale.",
  },
  "hook-left-arrow": {
    name: "Freccia uncinata a sinistra",
    meaning: "Traccia una freccia a sinistra con un uncino in coda, la forma rovesciata della freccia d'inclusione.",
    usage: "\\hookleftarrow è lo speculare di \\hookrightarrow e si usa quando un'inclusione o un'iniezione è disegnata da destra a sinistra, per esempio in una successione esatta scritta al contrario o in un diagramma in cui il codominio sta a sinistra. Per il resto è rara. Nella documentazione delle tastiere un glifo simile rappresenta il tasto Invio, ma è un significato diverso. Se le vostre frecce puntano per lo più a destra, riformulare l'enunciato con \\hookrightarrow è spesso più chiaro. Ha spaziatura di relazione come le altre frecce. La sua lunghezza coincide con quella di \\hookrightarrow, quindi i diagrammi speculari restano equilibrati. Quando vi servono molte frecce di questo tipo, un ambiente dedicato ai diagrammi gestisce gli uncini automaticamente.",
  },
  "hook-right-arrow": {
    name: "Freccia uncinata a destra",
    meaning: "Traccia una freccia a destra con la coda uncinata, il simbolo standard per una mappa iniettiva, un'inclusione o un'immersione.",
    usage: "Scrivere \\iota : A \\hookrightarrow X dice al lettore che la mappa è un'inclusione o un'iniezione, senza doverlo spiegare a parole. L'analisi la usa per le immersioni continue tra spazi di funzioni, come in H^1(\\Omega) \\hookrightarrow L^2(\\Omega), e le immersioni compatte sono talvolta segnate con un'ulteriore decorazione. La teoria delle categorie la usa per i monomorfismi. La controparte suriettiva è \\twoheadrightarrow. L'uncino rende la freccia più lunga di \\to, quindi controllate l'allineamento nei diagrammi. È una relazione, quindi TeX la circonda di spazio ampio.",
  },
  "southeast-arrow": {
    name: "Freccia a sud-est",
    meaning: "Traccia una freccia diagonale rivolta in basso a destra, per andamenti decrescenti e lati di diagrammi.",
    usage: "\\searrow abbrevia spesso «decresce verso», come in \\varepsilon_n \\searrow 0 per una successione monotona decrescente. Completa \\nearrow, \\swarrow e \\nwarrow nei diagrammi informali, come una griglia 2 per 2 di oggetti. I fisici la usano negli schizzi di livelli energetici o catene di decadimento. Le frecce hanno dimensione fissa, quindi si prestano a un uso rapido in linea più che a diagrammi curati. Il nome sta per southeast (sud-est), non per search. Chi la vede per la prima volta può aspettarsi un'icona di ricerca, quindi una breve definizione aiuta. Nelle tabelle che riassumono la monotonia, \\nearrow e \\searrow offrono una sintesi visiva compatta.",
    example: "\\varepsilon_n \\searrow 0 \\quad \\text{per } n \\to \\infty",
  },
  "left-harpoon-up": {
    name: "Arpione a sinistra in alto",
    meaning: "Traccia un arpione rivolto a sinistra con l'uncino in alto, metà di una punta di freccia verso sinistra.",
    usage: "\\leftharpoonup si usa soprattutto come componente di altri simboli o in notazioni specialistiche. Alcuni testi di fisica mettono un arpione sopra i vettori, e impilare \\rightharpoonup sopra \\leftharpoondown ricrea le frecce di equilibrio, anche se \\rightleftharpoons esiste già. Può comparire anche negli schemi di reazione. Poiché gli arpioni si somigliano nei corpi piccoli, scegliete con cura la direzione dell'uncino e mantenetela coerente. Nella maggior parte dei documenti compare dentro altre costruzioni più che da solo. I suoi parenti sono \\rightharpoonup, \\leftharpoondown e \\rightharpoondown, che differiscono solo per direzione e lato dell'uncino. Come le altre frecce riceve spaziatura di relazione.",
  },
  "right-harpoon-up": {
    name: "Arpione a destra in alto",
    meaning: "Traccia un arpione rivolto a destra con l'uncino in alto, il segno abituale della convergenza debole.",
    usage: "L'analisi funzionale scrive u_n \\rightharpoonup u per la convergenza debole, distinguendola dalla convergenza forte u_n \\to u. La convergenza debole-* si scrive spesso \\overset{*}{\\rightharpoonup}. In fisica un arpione a destra serve talvolta da accento vettoriale. Forma anche la metà superiore del simbolo di equilibrio \\rightleftharpoons in chimica. Tenete \\rightharpoonup distinto da \\rightharpoondown, che ha l'uncino in basso, perché i lettori potrebbero considerarle notazioni diverse. In KaTeX e LaTeX il glifo ha spaziatura di relazione, quindi u_n \\rightharpoonup u si spazia come un segno di uguale. Quando scrivete, indicate lo spazio in cui la convergenza è debole, come nell'esempio.",
  },
  "southwest-arrow": {
    name: "Freccia a sud-ovest",
    meaning: "Traccia una freccia diagonale rivolta in basso a sinistra, soprattutto per diagrammi e schemi di flusso.",
    usage: "\\swarrow indica un passo in basso a sinistra, come in una griglia di oggetti disegnata a mano o per illustrare come si combinano i termini nel determinante di una matrice. Insieme a \\nearrow, \\searrow e \\nwarrow copre le quattro diagonali. Non si allunga, quindi le frecce diagonali lunghe richiedono uno strumento per diagrammi. Talvolta segnala un andamento in una tabella, ma per i valori decrescenti è più comune \\searrow. Combinatela con la spaziatura \\quad negli array per posizionarla correttamente.",
  },
  "left-harpoon-down": {
    name: "Arpione a sinistra in basso",
    meaning: "Traccia un arpione rivolto a sinistra con l'uncino in basso, la metà inferiore di una punta di freccia divisa.",
    usage: "\\leftharpoondown è la metà inferiore del simbolo di equilibrio \\rightleftharpoons, dove sta sotto \\rightharpoonup. Da solo compare di rado, in alcuni schemi di reazione o come segno di convergenza debole rovesciato. Se vi serve una freccia di equilibrio, usate direttamente \\rightleftharpoons invece di impilare arpioni a mano. Notate che gli arpioni sono distinti da \\leftarrow e non vanno scambiati con leggerezza. Ha spaziatura di relazione come le frecce ordinarie. I suoi fratelli sono \\leftharpoonup, \\rightharpoonup e \\rightharpoondown. Nella maggior parte degli articoli non vi servirà affatto, perché una freccia semplice dice la stessa cosa in modo più chiaro.",
  },
  "right-harpoon-down": {
    name: "Arpione a destra in basso",
    meaning: "Traccia un arpione rivolto a destra con l'uncino in basso, una variante della mezza freccia con l'uncino inferiore.",
    usage: "\\rightharpoondown è lo speculare di \\rightharpoonup quanto alla posizione dell'uncino, e compare in alcune notazioni di equilibrio e come accento vettoriale. Poiché \\rightharpoonup è il simbolo consolidato della convergenza debole, usare \\rightharpoondown per quello confonderebbe i lettori. Si abbina talvolta a \\leftharpoonup in \\leftrightharpoons, la disposizione dell'equilibrio inverso. Come per tutti gli arpioni, verificate che l'uncino sia visibile nel PDF finale con il corpo scelto. I suoi fratelli \\leftharpoonup e \\leftharpoondown completano l'insieme dei quattro arpioni. Come le altre frecce, riceve spaziatura di relazione.",
  },
  "northwest-arrow": {
    name: "Freccia a nord-ovest",
    meaning: "Traccia una freccia diagonale rivolta in alto a sinistra, usata soprattutto in diagrammi e illustrazioni.",
    usage: "\\nwarrow è la meno comune delle quattro frecce diagonali. Compare negli array costruiti a mano che mostrano le relazioni tra le voci, come le dipendenze in una tabella di programmazione dinamica dove una cella dipende dalla vicina in alto a sinistra. Combinata con \\nearrow, \\searrow e \\swarrow permette di abbozzare piccoli diagrammi senza un pacchetto di disegno. Per diagrammi commutativi curati, un ambiente dedicato ai diagrammi fornisce lunghezze ed etichette corrette. La dimensione fissa e la spaziatura di relazione la rendono comoda dentro array e tabelle. Leggere le quattro frecce diagonali come punti cardinali (northeast, southeast, southwest, northwest, cioè nord-est, sud-est, sud-ovest, nord-ovest) aiuta a ricordarne i nomi.",
  },
};

export default text;
