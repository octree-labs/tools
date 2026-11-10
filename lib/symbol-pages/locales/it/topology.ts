import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/topology/<slug>. */
const text: SymbolPageTranslations = {
  "aleph-null": {
    name: "Aleph zero",
    meaning: "Aleph zero, la cardinalità dei numeri naturali e il più piccolo cardinale infinito.",
    usage: "Ogni insieme che si può elencare come una successione, come \\mathbb{Z} o \\mathbb{Q}, ha cardinalità \\aleph_0, e un'aritmetica come \\aleph_0 + \\aleph_0 = \\aleph_0 \\cdot \\aleph_0 = \\aleph_0 mostra come i cardinali infiniti assorbono. L'argomento diagonale di Cantor dimostra che 2^{\\aleph_0} > \\aleph_0, quindi i reali sono strettamente più numerosi. \\aleph è disponibile senza pacchetti aggiuntivi e si comporta come un simbolo ordinario, quindi il pedice si attacca direttamente. Alcuni testi più vecchi scrivono \\omega per l'ordinale corrispondente; tenete distinti cardinali e ordinali nella vostra notazione.",
  },
  "aleph-one": {
    name: "Aleph uno",
    meaning: "Aleph uno, il primo cardinale non numerabile: la grandezza infinita successiva a quella del numerabile.",
    usage: "L'ipotesi del continuo afferma che 2^{\\aleph_0} = \\aleph_1, cioè che nessun insieme ha cardinalità strettamente compresa tra quella degli interi e quella dei reali; Gödel e Cohen hanno dimostrato che è indipendente da ZFC. Non scrivete |\\mathbb{R}| = \\aleph_1 come un fatto, poiché è proprio l'ipotesi aperta; per il continuo usate \\mathfrak{c} o 2^{\\aleph_0}. \\aleph_1 è anche la cardinalità di \\omega_1, l'insieme degli ordinali numerabili. Gli aleph successivi seguono lo schema \\aleph_\\alpha con pedici ordinali, e il pedice richiede le graffe se è più lungo di un solo elemento.",
  },
  "beth": {
    name: "Beth",
    meaning: "Lettera ebraica beth, usata per i numeri beth: insiemi delle parti iterati a partire dal cardinale numerabile.",
    usage: "La successione dei beth è definita da \\beth_0 = \\aleph_0 e \\beth_{\\alpha+1} = 2^{\\beth_\\alpha}, quindi \\beth_1 è la cardinalità dei reali e \\beth_2 quella di tutte le funzioni reali. L'ipotesi generalizzata del continuo è l'enunciato \\aleph_\\alpha = \\beth_\\alpha per ogni ordinale. Accanto ad \\aleph, l'insieme esteso di simboli di LaTeX offre \\beth, \\gimel e \\daleth, la seconda, la terza e la quarta lettera ebraica. Come \\aleph è un simbolo ordinario, quindi i pedici si attaccano direttamente; si vede raramente al di fuori della teoria degli insiemi.",
  },
  "weierstrass-p": {
    name: "P di Weierstrass",
    meaning: "P in stile calligrafico per la funzione ellittica di Weierstrass, una funzione meromorfa doppiamente periodica.",
    usage: "La funzione di Weierstrass \\wp(z) soddisfa (\\wp')^2 = 4\\wp^3 - g_2 \\wp - g_3, ed è per questo che parametrizza le curve ellittiche. Il glifo è una p corsiva speciale, non legata ad alcuna famiglia di caratteri, quindi \\mathcal{P} o \\mathscr{P} sono simboli diversi. Alcuni autori usano \\wp per l'insieme delle parti, ma \\mathcal{P}(X) è la scelta più comune ed evita il conflitto con la funzione ellittica. Notate che la notazione con il primo funziona come al solito, \\wp'(z), e che il simbolo scende leggermente sotto la linea di base, come un discendente.",
  },
  "fraktur-r-real-part-symbol": {
    name: "R gotica (simbolo di parte reale)",
    meaning: "R maiuscola gotica, il simbolo classico per prendere la parte reale di una quantità complessa.",
    usage: "Da solo \\Re è semplicemente un glifo, non un operatore, quindi non c'è spaziatura automatica prima dell'argomento; fatelo seguire da parentesi o graffe, come in \\Re(s) > 1 per il semipiano in cui converge la serie della zeta di Riemann. I teorici analitici dei numeri usano proprio questo stile. Se volete un aspetto diverso, ridefinitelo con \\renewcommand{\\Re}{\\operatorname{Re}} nel preambolo, così ogni occorrenza cambia in un colpo solo. Notate che \\Re differisce da \\mathfrak{R}, che dà una R gotica da un altro tipo di carattere e ha un aspetto leggermente diverso.",
  },
  "fraktur-i-imaginary-part-symbol": {
    name: "I gotica (simbolo di parte immaginaria)",
    meaning: "I maiuscola gotica, il glifo tradizionale per la parte immaginaria di un numero complesso.",
    usage: "L'integrazione sui cammini e la teoria spettrale usano \\Im per separare le quantità: la parte immaginaria di una funzione di Green dà la densità degli stati, e \\Im \\tau > 0 definisce il semipiano superiore modulare. Come per \\Re, il comando stampa solo un simbolo, quindi dovete aggiungere voi le parentesi. Molti lettori trovano le lettere gotiche facili da fraintendere, e ridefinendo con \\renewcommand{\\Im}{\\operatorname{Im}} si passa a un «Im» in tondo. Se nel vostro testo compare anche l'immagine di un omomorfismo, scrivetela \\operatorname{im} in minuscolo per tenere separate le due cose.",
  },
  "calligraphic-o": {
    name: "O calligrafica",
    meaning: "O calligrafica, usata per la famiglia degli aperti in topologia e per diverse altre strutture.",
    usage: "Uno spazio topologico si scrive spesso (X, \\mathcal{O}), con \\mathcal{O} la collezione degli aperti, anche se \\tau è altrettanto comune. La stessa lettera ha molti altri usi: la notazione asintotica O grande \\mathcal{O}(n \\log n), il fascio strutturale \\mathcal{O}_X in geometria algebrica e l'anello degli interi \\mathcal{O}_K di un campo di numeri. Con i tipi di carattere standard \\mathcal supporta solo le lettere maiuscole. Per la notazione asintotica molte guide di stile preferiscono una semplice O corsiva, quindi sceglietene una e applicatela ovunque.",
  },
  "interior": {
    name: "Parte interna",
    meaning: "Parte interna di A, l'unione di tutti gli aperti contenuti in A; si scrive con un piccolo cerchio come apice.",
    usage: "La parte interna è il più grande aperto contenuto in A, e si collega alla chiusura tramite \\partial A = \\overline{A} \\setminus A^{\\circ}. L'apice \\circ è il cerchietto della composizione portato in alto; non va confuso con il simbolo dei gradi nelle unità di misura. Altre notazioni comuni sono \\operatorname{int} A e \\mathring{A}, quest'ultima con il cerchietto direttamente sopra la lettera; \\mathring è più adatto per lettere singole con pedici come U_1. Per un intervallo chiuso, [a, b]^{\\circ} = (a, b).",
  },
  "exterior": {
    name: "Parte esterna",
    meaning: "Parte esterna di un insieme A: la parte interna del suo complementare, formata dai punti che hanno un intorno disgiunto da A.",
    usage: "Ogni spazio si scompone in tre parti disgiunte, la parte interna, la frontiera e la parte esterna di A, e \\text{ext}(A) = (X \\setminus A)^{\\circ}. Scrivere ext in modalità matematica senza alcun comando produce le lettere corsive e, x, t moltiplicate tra loro, quindi un contenitore è indispensabile. \\text eredita il tipo di carattere circostante, che diventa corsivo dentro un teorema; \\operatorname{ext} resta in tondo e dà la spaziatura da operatore, e \\DeclareMathOperator{\\ext}{ext} lo rende riutilizzabile. Tenete presente che ext abbrevia anche l'algebra esterna e i gruppi Ext dell'algebra omologica.",
  },
  "boundary-operator": {
    name: "Operatore di bordo",
    meaning: "Frontiera di A: i punti ogni cui intorno interseca sia A sia il suo complementare.",
    usage: "La frontiera di un disco è la sua circonferenza, e la frontiera dei razionali nei reali è tutto, \\partial \\mathbb{Q} = \\mathbb{R}. Lo stesso simbolo \\partial è l'operatore di bordo in topologia algebrica, \\partial_n : C_n \\to C_{n-1} con \\partial \\circ \\partial = 0, e compare nel teorema di Stokes \\int_{\\partial M} \\omega = \\int_M d\\omega. Alcuni testi scrivono invece \\operatorname{Fr} A o \\operatorname{bd} A. Poiché \\partial è un simbolo ordinario, nulla lo separa dal nome dell'insieme; quell'aspetto compatto è proprio la convenzione voluta.",
  },
  "direct-limit": {
    name: "Limite diretto",
    meaning: "Limite diretto (colimite) di un sistema diretto, composto come «lim» con una freccia verso destra al di sotto.",
    usage: "I limiti diretti costruiscono oggetti come \\mathbb{Q}, ottenuto come \\varinjlim \\frac{1}{n}\\mathbb{Z}, o la spiga di un fascio, \\mathcal{F}_x = \\varinjlim_{U \\ni x} \\mathcal{F}(U). In modalità display l'insieme degli indici va sotto la freccia; nel testo va di lato. Il pacchetto amsmath offre anche \\injlim, che stampa «inj lim» a parole, quindi scegliete la forma in uso nel vostro settore. I teorici delle categorie scrivono spesso \\operatorname*{colim}, poiché i limiti diretti sono un caso particolare dei colimiti. La controparte per i sistemi inversi è \\varprojlim.",
  },
  "inverse-limit": {
    name: "Limite inverso",
    meaning: "Limite inverso (proiettivo) di un sistema, mostrato come «lim» con una freccia verso sinistra al di sotto.",
    usage: "Gli interi p-adici sono l'esempio classico, \\mathbb{Z}_p = \\varprojlim \\mathbb{Z}/p^n\\mathbb{Z}, e i gruppi profiniti come i gruppi di Galois sono limiti inversi di gruppi finiti. Come per \\lim, in stile display il pedice va sotto. L'alternativa \\projlim stampa le parole «proj lim» senza freccia. La teoria delle categorie generalizza il concetto a un limite qualsiasi, di solito scritto \\lim. Controllate che le frecce puntino nel verso giusto: \\varprojlim ha la freccia verso sinistra e corrisponde a mappe che scendono lungo il sistema, \\varinjlim quella verso destra.",
  },
  "quotient": {
    name: "Quoziente",
    meaning: "Quoziente di A rispetto a B: un gruppo, un anello, un modulo o uno spazio in cui B viene collassato o fattorizzato.",
    usage: "I quozienti compaiono come \\mathbb{Z}/n\\mathbb{Z}, G/H per le classi laterali e X/A per il collasso di un sottospazio a un punto. In modalità matematica / è un simbolo ordinario senza spazi attorno, che è l'aspetto standard. Per un quoziente rispetto a una relazione di equivalenza, racchiudete la tilde tra graffe, X/{\\sim}, altrimenti \\sim riceve la spaziatura da relazione e lascia un vuoto. Con operandi alti, \\big/ o costruzioni con \\left. \\middle/ \\right. mantengono la barra proporzionata. Non usate \\setminus in questo caso: indica la differenza insiemistica, un'operazione diversa. Precisate quale struttura porta il quoziente, poiché G/H è un gruppo solo se H è normale.",
  },
  "fundamental-group": {
    name: "Gruppo fondamentale",
    meaning: "Gruppo fondamentale di uno spazio: classi di omotopia di cammini chiusi con un punto base, con la concatenazione come prodotto.",
    usage: "Il calcolo classico \\pi_1(S^1) \\cong \\mathbb{Z} conta quante volte un cammino chiuso si avvolge attorno alla circonferenza, e uno spazio con \\pi_1 banale si dice semplicemente connesso. Indicate esplicitamente il punto base, \\pi_1(X, x_0), quando è rilevante; per gli spazi connessi per archi lo si omette spesso. I gruppi di omotopia superiori seguono lo stesso schema, \\pi_n(X). Per l'isomorfismo usate \\cong anziché =. Se nello stesso documento \\pi indica anche il numero o una proiezione, valutate se i lettori potrebbero confonderli.",
  },
  "homology": {
    name: "Omologia",
    meaning: "n-esimo gruppo di omologia di uno spazio o di un complesso di catene, che misura i buchi n-dimensionali.",
    usage: "Per le sfere H_n(S^n) \\cong \\mathbb{Z}, mentre H_k(S^n) = 0 per 0 < k < n, e la caratteristica di Eulero è la somma a segni alterni dei ranghi degli H_n. I coefficienti si scrivono dopo un punto e virgola, H_n(X; \\mathbb{Z}/2), e l'omologia relativa come H_n(X, A). I pedici indicano l'omologia, gli apici la coomologia, quindi non confondeteli. Le varianti si distinguono con decorazioni: omologia ridotta \\tilde{H}_n, omologia singolare H_n^{\\mathrm{sing}}. In algebra omologica si definisce come \\ker \\partial_n / \\operatorname{im} \\partial_{n+1}. Le successioni esatte lunghe di questi gruppi si disegnano di solito come diagrammi commutativi.",
  },
  "cohomology": {
    name: "Coomologia",
    meaning: "n-esimo gruppo di coomologia, la teoria duale dell'omologia, dotata di una struttura di anello tramite il cup prodotto.",
    usage: "La coomologia di de Rham H^n_{\\mathrm{dR}}(M) classifica le forme differenziali chiuse modulo quelle esatte, e il cup prodotto \\smile rende H^\\ast(X) un anello graduato. Combinando apice e pedice, come in H^n_{\\mathrm{dR}}, li si impila in modo ordinato; usate \\mathrm per le etichette che sono parole e non variabili. L'indice in apice la distingue dall'omologia H_n, una convenzione da rispettare. La coomologia dei gruppi H^n(G, M) e la coomologia dei fasci H^n(X, \\mathcal{F}) usano lo stesso simbolo con argomenti diversi. La dualità di Poincaré mette in relazione H^k e H_{n-k} sulle varietà chiuse orientate di dimensione n, il che spiega perché le due notazioni compaiano spesso insieme.",
  },
  "calligraphic-c-category": {
    name: "C calligrafica (categoria)",
    meaning: "C calligrafica, il nome predefinito per una categoria arbitraria; usata anche per insiemi di vincoli o insiemi ammissibili.",
    usage: "La teoria delle categorie scrive gli oggetti come X \\in \\mathcal{C} e gli insiemi di morfismi come \\operatorname{Hom}_{\\mathcal{C}}(X, Y), e una seconda categoria si chiama di solito \\mathcal{D}. Le categorie concrete si scrivono spesso in grassetto o senza grazie, come \\mathbf{Set} o \\mathsf{Grp}, per distinguere i nomi dalle variabili. L'ottimizzazione usa \\mathcal{C} per un insieme ammissibile convesso, come in \\min_{x \\in \\mathcal{C}} f(x). Con i tipi di carattere predefiniti \\mathcal fornisce solo lettere maiuscole; \\mathscr dà uno stile corsivo più arricciato se vi serve una seconda famiglia.",
  },
  "calligraphic-f-functor": {
    name: "F calligrafica (funtore)",
    meaning: "F calligrafica, che indica spesso un funtore tra categorie, un fascio, una sigma-algebra o una trasformata.",
    usage: "Un funtore \\mathcal{F} \\colon \\mathcal{C} \\to \\mathcal{D} trasforma oggetti e morfismi preservando la composizione. Al di fuori della teoria delle categorie la stessa lettera indica un fascio \\mathcal{F}(U), una sigma-algebra o una filtrazione (\\mathcal{F}_t in probabilità), oppure la trasformata di Fourier \\mathcal{F}\\{f\\}. A causa di questi molteplici usi, introducete la lettera in modo esplicito. Per scrivere la segnatura del funtore usate \\colon anziché :, così da ottenere la spaziatura da punteggiatura. Molti autori riservano le semplici F, G corsive ai funtori e usano le lettere calligrafiche per i fasci. Una trasformazione naturale tra due funtori si scrive spesso \\eta \\colon \\mathcal{F} \\Rightarrow \\mathcal{G}.",
  },
};

export default text;
