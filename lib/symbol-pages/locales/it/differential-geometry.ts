import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/differential-geometry/<slug>. */
const text: SymbolPageTranslations = {
  "manifold": {
    name: "Varietà",
    meaning: "M calligrafica, il modo standard di indicare una varietà differenziabile negli articoli di geometria differenziale e topologia.",
    usage: "Scrivere \\mathcal{M} invece di una semplice M in corsivo segnala che l'oggetto è uno spazio e non una matrice o un numero, il che aiuta quando M è già occupata. Le carte si scrivono \\varphi: U \\subseteq \\mathcal{M} \\to \\mathbb{R}^n e la dimensione come \\dim \\mathcal{M} = n. La stessa lettera indica anche i modelli di Kripke in logica e gli spazi di moduli in geometria algebrica, quindi definitela una volta nel testo. \\mathcal ha glifi affidabili solo per le maiuscole latine; per una M corsiva più arricciata usate \\mathscr{M}, e mantenete un unico stile in tutto l'articolo.",
  },
  "tangent-space": {
    name: "Spazio tangente",
    meaning: "Spazio tangente della varietà M nel punto p: lo spazio vettoriale di tutti i vettori velocità delle curve passanti per p.",
    usage: "Per una varietà di dimensione n, T_p M è uno spazio vettoriale reale di dimensione n con base coordinata \\partial/\\partial x^i in p. Il differenziale di un'applicazione liscia si scrive dF_p: T_p M \\to T_{F(p)} N, e un campo vettoriale assegna a ogni p un elemento di T_p M. In modalità matematica lo spazio tra T_p e M viene ignorato, quindi il risultato è in ogni caso il compatto T_pM; aggiungete \\, se volete una separazione visibile. Se la varietà si chiama \\mathcal{M}, scrivete T_p\\mathcal{M} per coerenza.",
  },
  "cotangent-space": {
    name: "Spazio cotangente",
    meaning: "Spazio cotangente in p: il duale di T_p M, costituito dai funzionali lineari (covettori) sui vettori tangenti in p.",
    usage: "Gli elementi di T^*_p M sono covettori come il differenziale df_p, e i differenziali coordinati dx^i formano la base duale di \\partial/\\partial x^i. Mettere l'asterisco prima o dopo il pedice (T^*_p M oppure T_p^* M) produce lo stesso risultato, perché TeX sovrappone apice e pedice indipendentemente dall'ordine. Usate ^* anziché ^{\\ast} solo per brevità; entrambi danno lo stesso asterisco. La metrica identifica T_p M con T^*_p M abbassando un indice, ed è così che i gradienti diventano covettori.",
  },
  "tangent-bundle": {
    name: "Fibrato tangente",
    meaning: "Fibrato tangente: l'unione disgiunta di tutti gli spazi tangenti T_p M, a sua volta una varietà di dimensione doppia rispetto a M.",
    usage: "Un punto di TM è una coppia (p, v) con v \\in T_p M, e la proiezione \\pi: TM \\to M dimentica il vettore. Un campo vettoriale è esattamente una sezione liscia X: M \\to TM con \\pi \\circ X = \\mathrm{id}. Il pushforward di F: M \\to N si scrive spesso TF o dF: TM \\to TN. Poiché TeX compone le due lettere in corsivo senza spazio, TM si legge correttamente come un unico nome; se è possibile confonderlo con un prodotto T \\cdot M, segnalatelo nel testo.",
  },
  "cotangent-bundle": {
    name: "Fibrato cotangente",
    meaning: "Fibrato cotangente: il fibrato di tutti gli spazi cotangenti di M, lo spazio delle fasi naturale della meccanica hamiltoniana.",
    usage: "I punti di T^*M sono coppie (q, p) formate da una posizione e da un covettore, ed è per questo che la meccanica classica vive qui. È dotato di una forma simplettica canonica \\omega = dq^i \\wedge dp_i, e le 1-forme su M sono sezioni di T^*M. Le forme di grado superiore sono sezioni di \\Lambda^k T^*M, scritto con \\Lambda o \\bigwedge^k. L'asterisco è un apice, quindi T^*M e T^{*}M danno lo stesso risultato; evitate T*M senza accento circonflesso, che mette una stella in stile operatore binario sulla linea di base.",
  },
  "covariant-derivative": {
    name: "Derivata covariante",
    meaning: "Derivata covariante del campo vettoriale Y nella direzione X, definita da una connessione affine \\nabla.",
    usage: "Una connessione affine è lineare rispetto alle funzioni in X e soddisfa la regola di Leibniz \\nabla_X(fY) = (Xf)Y + f\\nabla_X Y. La connessione di Levi-Civita è l'unica priva di torsione e compatibile con la metrica, il che dà \\nabla_X Y - \\nabla_Y X = [X, Y]. In coordinate si riduce a \\nabla_i Y^k = \\partial_i Y^k + \\Gamma^k_{ij} Y^j. La direzione in pedice è composta in piccolo; per espressioni lunghe come \\nabla_{\\dot\\gamma}\\dot\\gamma, racchiudete il pedice tra graffe in modo che il punto resti attaccato.",
  },
  "christoffel-symbol": {
    name: "Simbolo di Christoffel",
    meaning: "Simboli di Christoffel: i coefficienti della connessione che descrivono come variano da punto a punto i vettori della base coordinata.",
    usage: "Per la connessione di Levi-Civita si calcolano dalla metrica come \\Gamma^k_{ij} = \\tfrac12 g^{kl}(\\partial_i g_{jl} + \\partial_j g_{il} - \\partial_l g_{ij}), e sono simmetrici in i e j. Non sono le componenti di un tensore, ed è per questo che possono annullarsi in un punto in coordinate normali. In LaTeX le lettere greche maiuscole sono in tondo per impostazione predefinita; se il vostro stile le vuole in corsivo, usate \\varGamma. Alcuni testi più vecchi scrivono quelli di seconda specie con un simbolo a graffe, ma oggi la forma con \\Gamma è lo standard.",
  },
  "riemann-curvature": {
    name: "Tensore di curvatura di Riemann",
    meaning: "Componenti del tensore di curvatura di Riemann, che misura quanto il trasporto parallelo lungo un piccolo cammino chiuso non riporti un vettore a se stesso.",
    usage: "Con una convenzione comune, R^l_{ijk} = \\partial_j \\Gamma^l_{ik} - \\partial_k \\Gamma^l_{ij} + \\Gamma^l_{jm}\\Gamma^m_{ik} - \\Gamma^l_{km}\\Gamma^m_{ij}, ma il segno e l'ordine degli indici variano tra i manuali, quindi dichiarate il vostro. Scritto come R^l_{ijk}, TeX sovrappone l direttamente sopra i, nascondendo quale posizione è in alto; per sfalsare gli indici usate R^l{}_{ijk}, dove il gruppo vuoto sposta il pedice a destra. Abbassando il primo indice si ottiene R_{lijk}, antisimmetrico nella prima coppia e nell'ultima coppia di posizioni con le convenzioni usuali, ma verificate la posizione degli indici della vostra fonte prima di citare identità.",
  },
  "ricci-tensor": {
    name: "Tensore di Ricci",
    meaning: "Tensore di Ricci: la traccia del tensore di Riemann su una coppia di indici, una grandezza di curvatura simmetrica a due indici.",
    usage: "Si ottiene per contrazione, R_{ij} = R^k_{ikj} secondo una convenzione comune, e governa la distorsione del volume lungo le geodetiche. Le equazioni di campo di Einstein si scrivono R_{\\mu\\nu} - \\tfrac12 R g_{\\mu\\nu} = 8\\pi G T_{\\mu\\nu}, e una varietà con R_{ij} = \\lambda g_{ij} si dice di Einstein. I fisici usano di solito indici greci \\mu\\nu, i matematici indici latini ij. Ricci-piatta significa R_{ij} = 0, la condizione che definisce le metriche di Calabi-Yau. Alcuni autori scrivono \\mathrm{Ric} per il tensore senza coordinate; \\operatorname{Ric} dà lo stesso testo in tondo con la spaziatura da operatore.",
  },
  "scalar-curvature": {
    name: "Curvatura scalare",
    meaning: "Curvatura scalare: la traccia completa del tensore di Ricci, un singolo numero in ogni punto di una varietà riemanniana.",
    usage: "È definita da R = g^{ij} R_{ij} e in dimensione due è uguale al doppio della curvatura gaussiana K. L'azione di Einstein-Hilbert la integra, S = \\int R \\sqrt{-g}\\, d^4x, e il problema di Yamabe cerca una metrica conforme con R costante. Poiché una R isolata indica anche i reali, una relazione o un raggio, molti autori scrivono invece \\mathrm{Scal} o s; non usate mai R per \\mathbb{R} nello stesso articolo. Componetela come una semplice R in corsivo in modalità matematica.",
  },
  "metric-tensor": {
    name: "Tensore metrico",
    meaning: "Componenti del tensore metrico, la forma simmetrica definita positiva che definisce lunghezze e angoli su una varietà.",
    usage: "L'elemento di linea si scrive ds^2 = g_{ij}\\, dx^i dx^j con sommatoria sottintesa, e la lunghezza di una curva è \\int \\sqrt{g_{ij}\\dot x^i \\dot x^j}\\, dt. In relatività la metrica è lorentziana e indicizzata g_{\\mu\\nu}, per esempio la metrica di Minkowski \\eta_{\\mu\\nu}. Il suo determinante compare nella forma di volume \\sqrt{\\det g}\\, dx^1 \\cdots dx^n, spesso abbreviato in \\sqrt{g}. Aggiungete spazi sottili con \\, tra la metrica e i differenziali, così che ds^2 = g_{ij}\\,dx^i\\,dx^j non risulti affollato. In forma matriciale si scrive spesso (g_{ij}) o semplicemente g.",
  },
  "inverse-metric": {
    name: "Metrica inversa",
    meaning: "Metrica inversa: la matrice inversa di g_{ij}, usata per alzare gli indici e formare tracce e gradienti.",
    usage: "È definita da g^{ij} g_{jk} = \\delta^i_k, quindi in un riferimento ortonormale coincide con l'identità. Alzare un indice la usa direttamente, v^i = g^{ij} v_j, e il gradiente di una funzione ha componenti (\\nabla f)^i = g^{ij}\\partial_j f. L'operatore di Laplace-Beltrami è \\frac{1}{\\sqrt{g}}\\partial_i(\\sqrt{g}\\, g^{ij}\\partial_j f). Non confondete g^{ij} con il reciproco di una singola componente; è un elemento della matrice inversa, quindi g^{11} \\ne 1/g_{11} a meno che la metrica sia diagonale.",
  },
  "exterior-derivative": {
    name: "Derivata esterna",
    meaning: "Derivata esterna di una forma differenziale \\omega, che ne aumenta il grado di uno e generalizza gradiente, rotore e divergenza.",
    usage: "L'operatore soddisfa d \\circ d = 0 e la regola di Leibniz graduata d(\\alpha \\wedge \\beta) = d\\alpha \\wedge \\beta + (-1)^k \\alpha \\wedge d\\beta per una k-forma \\alpha. Il teorema di Stokes diventa \\int_M d\\omega = \\int_{\\partial M} \\omega, e una forma è chiusa quando d\\omega = 0 ed esatta quando \\omega = d\\eta. Molti stili compongono l'operatore in tondo come \\mathrm{d}\\omega per distinguerlo da una variabile d; qualunque scelta facciate, usatela in modo coerente, anche negli integrali come \\int f\\, dx.",
  },
  "wedge-product": {
    name: "Prodotto esterno",
    meaning: "Prodotto esterno (wedge) di due forme differenziali, un prodotto antisimmetrico che costruisce forme di grado superiore.",
    usage: "Per una k-forma \\alpha e una l-forma \\beta è commutativo in senso graduato, \\alpha \\wedge \\beta = (-1)^{kl} \\beta \\wedge \\alpha, quindi una 1-forma moltiplicata esternamente per se stessa dà zero. Le forme di volume si scrivono dx^1 \\wedge \\cdots \\wedge dx^n. \\wedge è un operatore binario, quindi TeX aggiunge uno spazio medio su entrambi i lati; \\land produce lo stesso identico glifo ed è meglio riservarlo all'and logico. Per la potenza esterna o per un grande wedge su un insieme di indici, usate \\bigwedge, come in \\bigwedge^k V.",
  },
  "lie-derivative": {
    name: "Derivata di Lie",
    meaning: "Derivata di Lie lungo il campo vettoriale X, che misura come varia un tensore sotto il flusso generato da X.",
    usage: "Sulle funzioni è semplicemente \\mathcal{L}_X f = Xf, sui campi vettoriali è la parentesi di Lie \\mathcal{L}_X Y = [X, Y], e sulle forme la formula magica di Cartan dà \\mathcal{L}_X = d\\iota_X + \\iota_X d. A differenza di \\nabla_X, non richiede né una connessione né una metrica. Un campo vettoriale di Killing soddisfa \\mathcal{L}_X g = 0. La L calligrafica è la scelta abituale; \\pounds_X compare in alcuni testi di relatività, ma \\mathcal{L} è più chiara. Evitate di confonderla con una lagrangiana \\mathcal{L} negli articoli di fisica che usano entrambe.",
  },
  "lie-bracket": {
    name: "Parentesi di Lie",
    meaning: "Parentesi di Lie di due campi vettoriali: il campo vettoriale che agisce sulle funzioni come X(Yf) - Y(Xf).",
    usage: "La parentesi è bilineare, antisimmetrica e soddisfa l'identità di Jacobi [X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0, il che rende i campi vettoriali un'algebra di Lie. In coordinate le sue componenti sono X^j\\partial_j Y^i - Y^j\\partial_j X^i. La stessa notazione con parentesi quadre indica il commutatore AB - BA di matrici o di operatori quantistici. Le semplici [ e ] vanno bene per argomenti brevi; per contenuti alti usate \\left[ \\right] o \\bigl[ \\bigr] in modo che le parentesi si adattino. Misura quanto i flussi di X e Y non commutino, e i campi vettoriali coordinati soddisfano sempre [\\partial_i, \\partial_j] = 0.",
  },
  "connection-form": {
    name: "Forma di connessione",
    meaning: "1-forme di connessione: una matrice di 1-forme che descrive una connessione rispetto a un riferimento scelto del fibrato.",
    usage: "Nel metodo del riferimento mobile di Cartan con corriferimento e^i, la prima equazione di struttura per una connessione priva di torsione è de^i = -\\omega^i_j \\wedge e^j. Per una connessione metrica in un riferimento ortonormale la matrice è antisimmetrica, \\omega_{ij} = -\\omega_{ji}. I fisici chiamano lo stesso oggetto connessione di spin \\omega^a{}_b. Usate \\omega^i{}_j per sfalsare gli indici quando il loro ordine conta, e non confondetela con una forma simplettica o di Kähler, anch'essa scritta \\omega. Sotto un cambiamento di riferimento si trasforma in modo non omogeneo, quindi, come i simboli di Christoffel, non è un tensore.",
  },
  "curvature-form": {
    name: "Forma di curvatura",
    meaning: "2-forme di curvatura: una matrice di 2-forme che codifica la curvatura di una connessione in un dato riferimento.",
    usage: "La seconda equazione di struttura di Cartan le definisce come \\Omega^i_j = d\\omega^i_j + \\omega^i_k \\wedge \\omega^k_j, o in forma compatta \\Omega = d\\omega + \\omega \\wedge \\omega. Sviluppandole nel corriferimento si ritrova il tensore di Riemann, \\Omega^i_j = \\tfrac12 R^i_{jkl}\\, e^k \\wedge e^l. La teoria di Chern-Weil costruisce a partire da queste forme classi caratteristiche come \\operatorname{tr}(\\Omega \\wedge \\Omega). La \\Omega maiuscola è in tondo per impostazione predefinita; \\varOmega ne dà una versione in corsivo. La stessa lettera indica anche lo spazio delle forme \\Omega^k(M), quindi il contesto dovrebbe chiarire il significato.",
  },
  "geodesic": {
    name: "Geodetica",
    meaning: "Una curva su una varietà parametrizzata da t; in questo contesto una geodetica, la curva con accelerazione covariante nulla.",
    usage: "Una geodetica soddisfa \\nabla_{\\dot\\gamma}\\dot\\gamma = 0, che in coordinate diventa \\ddot\\gamma^k + \\Gamma^k_{ij}\\dot\\gamma^i\\dot\\gamma^j = 0. I dati iniziali \\gamma(0) = p e \\dot\\gamma(0) = v definiscono la mappa esponenziale \\exp_p(v) = \\gamma(1). Usate \\dot{\\gamma} e \\ddot{\\gamma} per le derivate temporali; \\gamma'(t) è l'alternativa quando t non è il tempo. Scrivete \\dot\\gamma^k anziché \\dot{\\gamma^k} in modo che il punto stia solo sopra la lettera, e mantenete \\gamma minuscola, poiché \\Gamma è riservata ai simboli di Christoffel. Su una sfera rotonda le geodetiche sono archi di cerchi massimi.",
  },
  "parallel-transport": {
    name: "Trasporto parallelo",
    meaning: "Trasporto parallelo lungo la curva \\gamma: l'applicazione lineare che sposta i vettori tra spazi tangenti senza ruotarli.",
    usage: "È un'applicazione P_\\gamma: T_{\\gamma(0)}M \\to T_{\\gamma(1)}M e, per una connessione compatibile con la metrica, è un'isometria. Il trasporto lungo cammini chiusi genera il gruppo di olonomia, la cui non banalità riflette la curvatura. Alcuni testi scrivono \\tau_\\gamma, \\Pi_\\gamma o P^\\gamma_{t \\leftarrow s} per indicare gli estremi. Per un pedice di una sola lettera le graffe in P_{\\gamma} sono facoltative, ma mantenetele quando il pedice si allunga, come in P_{\\gamma|[0,t]}. Un campo vettoriale V è parallelo lungo \\gamma quando \\nabla_{\\dot\\gamma} V = 0, e P_\\gamma manda V(0) in V(1). Lungo un piccolo cammino chiuso, il trasporto differisce dall'identità per un termine proporzionale alla curvatura.",
  },
};

export default text;
