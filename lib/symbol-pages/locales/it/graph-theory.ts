import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/graph-theory/<slug>. */
const text: SymbolPageTranslations = {
  "vertex": {
    name: "Vertice",
    meaning: "La v minuscola in corsivo, la lettera convenzionale per un singolo vertice di un grafo.",
    usage: "I vertici si scrivono con lettere minuscole come u, v, w, e l'appartenenza è v \\in V(G). Il grado di un vertice è \\deg(v), il suo intorno N(v), e uno spigolo tra due vertici si scrive spesso uv o \\{u, v\\}. Trattandosi di una semplice lettera, la questione principale è la coerenza: non riutilizzate v per un vettore o una velocità nello stesso testo. L'indicizzazione con pedici, v_1, \\dots, v_n, fornisce un ordinamento utile per le matrici di adiacenza. Quando i vertici portano etichette o pesi, funzioni come w(v) mantengono pulita la notazione.",
  },
  "edge": {
    name: "Spigolo",
    meaning: "La e minuscola in corsivo, la lettera usuale per un singolo spigolo (o lato) di un grafo.",
    usage: "Uno spigolo e = uv o e = \\{u, v\\} collega due vertici; nei grafi orientati un arco si scrive e = (u, v) e l'ordine conta. L'appartenenza è e \\in E(G), e i pesi degli spigoli sono w(e). Poiché e indica anche il numero di Nepero, alcuni autori scrivono quella costante in tondo, \\mathrm{e}, per evitare confusione quando grafi ed esponenziali compaiono insieme, per esempio negli argomenti probabilistici. Gli spigoli con pedice e_1, \\dots, e_m indicizzano le colonne di una matrice di incidenza. Gli estremi di e si scrivono talvolta e^- ed e^+ per coda e testa.",
  },
  "graph": {
    name: "Grafo",
    meaning: "Definizione di un grafo G come coppia ordinata formata da un insieme di vertici V e un insieme di spigoli E.",
    usage: "È la frase d'apertura della maggior parte dei ragionamenti di teoria dei grafi; fissa V come insieme dei vertici ed E \\subseteq \\binom{V}{2} come spigoli per un grafo semplice, oppure E \\subseteq V \\times V per un grafo orientato. Abbreviazioni comuni: n = |V| e m = |E|. I grafi pesati la estendono a G = (V, E, w). Usate le parentesi tonde, non quelle angolari, per la coppia ordinata. Nei lavori più lunghi scrivete V(G) ed E(G) quando entrano in gioco più grafi. La \\mathcal{G} calligrafica è talvolta riservata a una famiglia di grafi o a un modello grafico.",
  },
  "vertex-set": {
    name: "Insieme dei vertici",
    meaning: "Insieme dei vertici del grafo G, scritto come funzione di G quando si considerano più grafi.",
    usage: "V(G) chiarisce a quale grafo appartiene un insieme di vertici, cosa importante quando si confronta un grafo con un sottografo H, dove V(H) \\subseteq V(G). L'ordine del grafo è |V(G)|, spesso abbreviato in n o |G|. Per complementari e grafi dei lati vale V(\\overline{G}) = V(G), mentre V(L(G)) = E(G). La V in corsivo semplice è lo standard; non serve alcun comando speciale. Scrivete le definizioni per comprensione con le graffe \\{ \\} e usate \\mid o i due punti per la condizione. Una somma sui vertici si legge \\sum_{v \\in V(G)}.",
  },
  "edge-set": {
    name: "Insieme degli spigoli",
    meaning: "Insieme degli spigoli del grafo G, l'insieme di tutte le coppie di vertici collegate da uno spigolo.",
    usage: "E(G) si scrive esplicitamente quando è in gioco più di un grafo; la sua cardinalità |E(G)|, scritta anche e(G) o \\|G\\| in alcuni testi, è la dimensione del grafo. Il lemma delle strette di mano la collega ai gradi: \\sum_v \\deg(v) = 2|E(G)|. Un grafo semplice soddisfa |E(G)| \\leq \\binom{n}{2}, e un albero ha esattamente n - 1 spigoli. Tenete presente che E è molto sovraccarica, in particolare con il valore atteso nella combinatoria probabilistica, quindi usare la \\mathbb{E} da lavagna per il valore atteso aiuta a tenere distinti i due usi.",
  },
  "adjacency": {
    name: "Adiacenza",
    meaning: "Relazione di adiacenza: u e v sono collegati da uno spigolo nel grafo.",
    usage: "\\sim è una relazione binaria, quindi TeX pone spazi ampi e bilanciati attorno a essa, e u \\sim v si legge correttamente. Per specificare il grafo scrivete u \\sim_G v. Alcuni autori usano invece u \\leftrightarrow v o uv \\in E(G). La non adiacenza si scrive u \\nsim v. Non confondete \\sim con \\simeq (equivalenza asintotica od omotopica), \\approx (approssimativamente uguale) o \\backsim (tilde rovesciata). In probabilità x \\sim p significa estratto da, quindi negli articoli interdisciplinari definite esplicitamente l'adiacenza. Gli intorni ne seguono naturalmente: N(v) = \\{u : u \\sim v\\}.",
  },
  "degree": {
    name: "Grado di un vertice",
    meaning: "Grado del vertice v: il numero di spigoli incidenti in esso, con i cappi contati due volte.",
    usage: "\\deg è uno dei nomi di operatore predefiniti di LaTeX, quindi viene stampato in tondo con la spaziatura corretta, a differenza di deg digitato direttamente, che dà tre lettere in corsivo. Il lemma delle strette di mano afferma che \\sum_v \\deg(v) = 2|E|, e molti autori abbreviano in d(v) o d_G(v). Il grado minimo e massimo si scrivono \\delta(G) e \\Delta(G). Per un grafo in pedice \\deg_G(v) funziona in modo naturale. Lo stesso comando compone anche il grado di un polinomio, \\deg(p), in algebra. Un grafo regolare ha \\deg(v) = k per ogni vertice.",
  },
  "in-degree": {
    name: "Grado entrante",
    meaning: "Grado entrante del vertice v in un grafo orientato: il numero di archi che terminano in v.",
    usage: "Nei grafi orientati ogni arco contribuisce di uno al grado uscente della sua coda e di uno al grado entrante della sua testa, quindi \\sum_v \\deg^-(v) = \\sum_v \\deg^+(v) = |E|. Una sorgente ha \\deg^-(v) = 0. Il meno in apice è la convenzione più comune, anche se alcuni testi scrivono d^-(v), \\deg_{\\text{in}}(v) o \\mathrm{indeg}(v). Racchiudete l'apice tra graffe, ^{-}, perché sia chiaramente agganciato. Nei contesti di PageRank e delle catene di Markov il grado entrante è legato a quante pagine puntano a un nodo. L'ordinamento topologico con l'algoritmo di Kahn rimuove ripetutamente i vertici con grado entrante zero.",
  },
  "out-degree": {
    name: "Grado uscente",
    meaning: "Grado uscente del vertice v in un grafo orientato: il numero di archi che partono da v.",
    usage: "Il grado uscente conta gli archi la cui coda è v; un pozzo ha \\deg^+(v) = 0. Sommato su tutti i vertici è uguale a |E|, come il grado entrante totale. Il più in apice è comune, con d^+(v) e \\deg_{\\text{out}}(v) come alternative, quindi definite la vostra notazione. Un grafo orientato ha un circuito euleriano esattamente quando è connesso (ignorando i vertici isolati) e \\deg^+(v) = \\deg^-(v) in ogni vertice. In termini di matrice di adiacenza, il grado uscente è una somma di riga e quello entrante una somma di colonna. Racchiudete l'apice tra graffe, ^{+}, per chiarezza nel sorgente.",
  },
  "path": {
    name: "Cammino",
    meaning: "Grafo cammino su n vertici: n vertici collegati in linea da n - 1 spigoli.",
    usage: "P_n è una famiglia fondamentale della teoria dei grafi, insieme a C_n e K_n. Le convenzioni variano, ed è una vera fonte di confusione: molti testi fanno contare a n i vertici, mentre altri, tra cui Diestel, scrivono P^k per un cammino con k spigoli. Dichiarate la vostra. I cammini hanno numero cromatico 2 per n \\geq 2 e sono alberi. Nel conteggio, i cammini si distinguono dalle passeggiate perché i vertici non possono ripetersi. Il pedice è un semplice indice; per indici più lunghi usate le graffe, P_{n+1}. Non confondetelo con P(n, k), le disposizioni.",
    example: "P_n \\text{ ha } n \\text{ vertici e } n - 1 \\text{ spigoli}",
  },
  "cycle": {
    name: "Ciclo",
    meaning: "Grafo ciclo su n vertici (con n almeno 3), che forma un unico anello chiuso; in combinatoria anche l'n-esimo numero di Catalan.",
    usage: "In teoria dei grafi C_n è il ciclo con n vertici e n spigoli; è bipartito esattamente quando n è pari, quindi \\chi(C_n) = 2 per n pari e 3 per n dispari. In combinatoria la stessa notazione indica comunemente il numero di Catalan C_n = \\frac{1}{n+1}\\binom{2n}{n}, che conta le parentesizzazioni bilanciate, gli alberi binari e i cammini di Dyck: 1, 1, 2, 5, 14, 42. Poiché questa pagina è condivisa tra i due ambiti, dichiarate presto quale significato intendete. Per indici composti servono le graffe, C_{2k+1}.",
  },
  "complete-graph": {
    name: "Grafo completo",
    meaning: "Grafo completo su n vertici, in cui ogni coppia di vertici distinti è collegata da uno spigolo.",
    usage: "K_n ha \\binom{n}{2} = n(n-1)/2 spigoli e numero cromatico n. La lettera onora Kuratowski, il cui teorema afferma che un grafo è planare se e solo se non contiene una suddivisione di K_5 o di K_{3,3}. I numeri di Ramsey si formulano con i grafi completi: R(3,3) = 6 significa che ogni 2-colorazione degli spigoli di K_6 contiene un triangolo monocromatico. La formula di Cayley conta n^{n-2} alberi ricoprenti di K_n. Usate le graffe per pedici di più caratteri come K_{n+1}. Una cricca di dimensione k in G è un sottografo isomorfo a K_k.",
  },
  "bipartite": {
    name: "Grafo bipartito completo",
    meaning: "Grafo bipartito completo: due parti di dimensioni m e n, con ogni vertice di una parte collegato a ogni vertice dell'altra.",
    usage: "K_{m,n} ha m + n vertici e mn spigoli, e K_{1,n} è il grafo a stella. K_{3,3}, il grafo delle utenze, è uno dei due sottografi proibiti di Kuratowski per la planarità. Notate che la virgola sta dentro le graffe: K_{m,n}; scrivendo K_m,n la n finisce sulla linea di base. TeX aggiunge un po' di spazio dopo la virgola nei pedici, il che rende bene; per un aspetto più compatto alcuni scrivono K_{m\\,n} senza virgola, ma è raro. Il problema di Zarankiewicz chiede quanti spigoli possa avere un grafo senza contenere una copia di K_{s,t}.",
  },
  "adjacency-matrix": {
    name: "Matrice di adiacenza",
    meaning: "Elemento in riga i, colonna j della matrice di adiacenza: 1 se i vertici i e j sono adiacenti, 0 altrimenti.",
    usage: "Per un grafo semplice non orientato la matrice di adiacenza è simmetrica con zeri sulla diagonale; nei grafi pesati A_{ij} contiene il peso dello spigolo. Un fatto classico: (A^k)_{ij} conta le passeggiate di lunghezza k da i a j, quindi \\operatorname{tr}(A^3)/6 è il numero di triangoli. I gradi sono somme di riga, \\deg(i) = \\sum_j A_{ij}, e la laplaciana è L = D - A. Scrivete A_{ij} con le graffe; A_ij metterebbe in pedice solo la i. Per indici con virgole A_{i,j} è più chiaro quando gli indici sono espressioni, come A_{i+1,j}.",
    example: "(A^k)_{ij} = \\#\\{\\text{passeggiate di lunghezza } k \\text{ da } i \\text{ a } j\\}",
  },
  "incidence-matrix": {
    name: "Matrice di incidenza",
    meaning: "La B maiuscola, per convenzione la matrice di incidenza di un grafo, con le righe per i vertici e le colonne per gli spigoli.",
    usage: "Per un grafo non orientato B_{ve} = 1 quando il vertice v è un estremo dello spigolo e. Per un grafo orientato, o orientato arbitrariamente, gli elementi valgono -1 nella coda e +1 nella testa (o il contrario, a seconda dell'autore), e allora BB^\\top = L = D - A, la laplaciana del grafo. Alcuni libri chiamano la matrice M o N invece di B. È una matrice n \\times m, quindi indicatene le dimensioni. Per una matrice di incidenza non orientata BB^\\top è uguale a D + A, la laplaciana senza segno, frequente fonte di errori di segno.",
  },
  "connected": {
    name: "Connessione tra vertici",
    meaning: "Relazione di connessione: esiste un cammino tra i vertici u e v, che quindi stanno nella stessa componente.",
    usage: "\\leftrightarrow è una freccia di classe relazione, quindi riceve una spaziatura simmetrica. In teoria dei grafi u \\leftrightarrow v significa spesso che u e v sono connessi, mentre nelle catene di Markov significa che due stati comunicano. I grafi orientati richiedono attenzione: la raggiungibilità reciproca è la relazione di forte connessione, scritta talvolta u \\rightleftarrows v. Non confondete \\leftrightarrow con la più lunga \\longleftrightarrow o con la doppia freccia \\Leftrightarrow, che indica l'equivalenza logica. Alcuni autori scrivono u \\sim v per l'adiacenza e riservano \\leftrightarrow alla connessione, scelta pulita se dichiarata. È una relazione di equivalenza le cui classi sono le componenti.",
    example: "u \\leftrightarrow v \\iff \\exists \\text{ un cammino } u\\text{-}v \\text{ in } G",
  },
  "tree": {
    name: "Albero",
    meaning: "La T maiuscola, la lettera usuale per un albero: un grafo connesso privo di cicli.",
    usage: "Un albero con n vertici ha esattamente n - 1 spigoli, un unico cammino tra due vertici qualsiasi e almeno due foglie quando n \\geq 2. Gli alberi ricoprenti si scrivono T \\subseteq G, e la formula di Cayley afferma che K_n ha n^{n-2} alberi ricoprenti etichettati. Gli algoritmi per l'albero ricoprente minimo, come quelli di Kruskal e di Prim, minimizzano w(T) = \\sum_{e \\in T} w(e). Basta la T in corsivo semplice; attenzione ai conflitti con l'apice di trasposizione o con il tempo, e nei documenti che parlano anche di alberi preferite ^\\top per le trasposte. Gli alberi radicati si scrivono spesso (T, r).",
  },
  "forest": {
    name: "Foresta",
    meaning: "La F maiuscola, che per convenzione indica una foresta: un grafo aciclico le cui componenti sono alberi.",
    usage: "Una foresta con n vertici e k componenti connesse ha n - k spigoli, il che generalizza la formula degli alberi. Le foreste ricoprenti compaiono nell'algoritmo di Kruskal, che fa crescere una foresta aggiungendo lo spigolo più economico che non crea cicli, e nella visione matroidale dei grafi, dove le foreste sono gli insiemi indipendenti del matroide grafico. Come lettera semplice F non richiede comandi, ma si scontra con le facce nei grafi planari (la formula di Eulero V - E + F = 2) e con i numeri di Fibonacci, quindi cambiate lettera se compaiono entrambi. L'arboricità di un grafo conta le foreste necessarie a coprirne gli spigoli.",
  },
  "chromatic-number": {
    name: "Numero cromatico",
    meaning: "Numero cromatico di G: il minor numero di colori necessario per colorare i vertici in modo che vertici adiacenti abbiano colori diversi.",
    usage: "Scritto con la greca \\chi, il numero cromatico soddisfa \\omega(G) \\leq \\chi(G) \\leq \\Delta(G) + 1, e il teorema di Brooks abbassa il limite superiore a \\Delta(G) tranne che per grafi completi e cicli dispari. Il teorema dei quattro colori afferma che \\chi(G) \\leq 4 per i grafi planari. La versione per gli spigoli è l'indice cromatico \\chi'(G). Non confondete \\chi con la x latina, che in alcuni font le somiglia, né con la caratteristica di Eulero, che usa anch'essa \\chi. Calcolare \\chi(G) è NP-difficile, quindi molti articoli forniscono stime invece di valori esatti.",
  },
  "clique": {
    name: "Numero di cricca",
    meaning: "Numero di cricca di G: la dimensione del più grande sottografo completo contenuto nel grafo.",
    usage: "Il numero di cricca è un limite inferiore del numero cromatico, \\omega(G) \\leq \\chi(G), e i grafi in cui vale l'uguaglianza per ogni sottografo indotto si dicono perfetti. È complementare al numero di indipendenza: \\omega(G) = \\alpha(\\overline{G}), con \\overline{G} il complementare. Calcolarlo è NP-difficile. Usate la greca minuscola \\omega, non w. Il simbolo è sovraccarico altrove: la notazione asintotica omega piccolo e \\omega(n), il numero di fattori primi distinti, quindi in contesti misti una breve definizione aiuta. Il teorema di Turán limita gli spigoli di un grafo con \\omega(G) \\leq r.",
  },
  "independent-set": {
    name: "Numero di indipendenza",
    meaning: "Numero di indipendenza di G: la dimensione del più grande insieme di vertici a due a due non adiacenti.",
    usage: "Il numero di indipendenza soddisfa \\alpha(G) \\cdot \\chi(G) \\geq |V(G)|, poiché ogni classe di colore è un insieme indipendente, e \\alpha(G) = \\omega(\\overline{G}). L'identità di Gallai lo collega al numero di copertura dei vertici: \\alpha(G) + \\tau(G) = |V(G)|. Calcolarlo è NP-difficile in generale ma facile sui grafi bipartiti grazie al teorema di Kőnig. Usate \\alpha, la lettera greca, che nella maggior parte dei font si distingue bene dalla a. Gli analoghi per gli spigoli sono \\alpha'(G) o \\nu(G), il numero di accoppiamento. La stima di Caro-Wei dà \\alpha(G) \\geq \\sum_v 1/(\\deg(v)+1).",
  },
  "matching": {
    name: "Accoppiamento",
    meaning: "La M maiuscola, la lettera standard per un accoppiamento (matching): un insieme di spigoli a due a due privi di vertici in comune.",
    usage: "Un accoppiamento M \\subseteq E(G) è perfetto quando copre ogni vertice, quindi |M| = |V(G)|/2, e massimo quando non ne esiste uno più grande; la sua dimensione è il numero di accoppiamento \\nu(G). Il teorema di Hall dà la condizione per un accoppiamento perfetto nei grafi bipartiti: |N(S)| \\geq |S| per ogni sottoinsieme S di una delle due parti. Tra gli algoritmi ci sono Hopcroft-Karp per i grafi bipartiti e l'algoritmo dei blossom di Edmonds nel caso generale. I cammini aumentanti si scrivono spesso rispetto a M, e la differenza simmetrica M \\triangle M' compare in molte dimostrazioni. Evitate M se anche una matrice ha bisogno di un nome.",
  },
  "planar-graph": {
    name: "Grafo planare",
    meaning: "Immersione di un grafo G nel piano, in cui gli spigoli si incontrano solo negli estremi comuni; G è allora planare.",
    usage: "La freccia uncinata \\hookrightarrow indica per convenzione un'iniezione o un'immersione, quindi G \\hookrightarrow \\mathbb{R}^2 afferma che G si può disegnare nel piano senza incroci. I grafi planari connessi soddisfano la formula di Eulero V - E + F = 2, e i grafi planari semplici con almeno tre vertici hanno al più 3V - 6 spigoli. I teoremi di Kuratowski e di Wagner li caratterizzano vietando K_5 e K_{3,3}. \\hookrightarrow è una freccia con spaziatura da relazione; la sua inversa è \\hookleftarrow. L'immersione nella sfera è equivalente, e altre superfici si scrivono G \\hookrightarrow S_g.",
  },
};

export default text;
