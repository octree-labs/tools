import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/greek/<slug>. */
const text: SymbolPageTranslations = {
  alpha: {
    name: "Alfa",
    meaning: "Alfa minuscola greca, nome abituale per angoli, livelli di significatività, learning rate e coefficienti.",
    usage: "In statistica \\alpha è il livello di significatività di un test, come in \\alpha = 0.05, e il parametro di forma delle distribuzioni Beta e Gamma. I fisici la usano per la costante di struttura fine \\alpha \\approx 1/137 e per le particelle alfa. In geometria si assegna agli angoli, spesso insieme a \\beta e \\gamma. Non esiste un comando \\Alpha per la maiuscola, perché l'alfa maiuscola è identica alla A latina; scrivete A o \\mathrm{A}. Fate attenzione a non confondere \\alpha con la a latina o con il simbolo di proporzionalità \\propto nei font in stile manoscritto.",
    example: "P(\\text{rifiuto } H_0 \\mid H_0 \\text{ vera}) = \\alpha",
  },
  beta: {
    name: "Beta",
    meaning: "Beta minuscola greca, standard per i coefficienti di regressione, gli angoli e il secondo parametro di una distribuzione.",
    usage: "I modelli di regressione scrivono y = \\beta_0 + \\beta_1 x + \\varepsilon, e \\hat{\\beta} indica i coefficienti stimati. Nei test di ipotesi \\beta è la probabilità di errore di secondo tipo, quindi la potenza è 1 - \\beta. La fisica la usa per v/c in relatività e per l'inverso della temperatura \\beta = 1/(k_B T). La finanza usa il beta di un titolo rispetto al mercato. Non esiste un comando \\Beta, poiché la beta maiuscola è uguale alla B latina. La ß tedesca (esse-zeta) è un carattere diverso, scritto \\ss, e non va usata al posto di \\beta.",
  },
  gamma: {
    name: "Gamma",
    meaning: "Gamma minuscola greca, usata per la costante di Eulero-Mascheroni, il fattore di Lorentz e i fattori di sconto.",
    usage: "\\gamma è il fattore di Lorentz \\gamma = 1/\\sqrt{1 - v^2/c^2} in relatività ristretta e la costante di Eulero-Mascheroni \\gamma \\approx 0.5772 in analisi. Il reinforcement learning la usa come fattore di sconto in \\sum_t \\gamma^t r_t, e la fisica per i raggi gamma e i fotoni. In geometria indica spesso il terzo angolo di un triangolo dopo \\alpha e \\beta, e in analisi complessa \\gamma è una curva o un cammino. Notate che la maiuscola \\Gamma, cioè la funzione gamma, è un comando a parte; non scrivete \\Gamma per la costante.",
  },
  "gamma-upper": {
    name: "Gamma maiuscola",
    meaning: "Gamma maiuscola greca, nota soprattutto come funzione gamma Γ(z), che estende il fattoriale.",
    usage: "\\Gamma(n) = (n-1)! per gli interi positivi, e in generale \\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}\\,dt. Serve anche per i simboli di Christoffel \\Gamma^k_{ij} in geometria differenziale, per la distribuzione Gamma e per un contesto di tipizzazione \\Gamma \\vdash e : \\tau in teoria dei tipi. In LaTeX le maiuscole greche sono in tondo per impostazione predefinita; per una versione corsiva usate \\varGamma. I teorici dei grafi usano talvolta \\Gamma(v) per l'intorno di un vertice. Non confondetela con la L latina ruotata né con \\gamma, la costante minuscola.",
  },
  delta: {
    name: "Delta",
    meaning: "Delta minuscola greca, usata per quantità piccole, la delta di Dirac e la delta di Kronecker.",
    usage: "L'analisi la abbina a epsilon nelle definizioni di limite e continuità, come in |x - a| < \\delta. La delta di Dirac \\delta(x) soddisfa \\int f(x)\\delta(x - a)\\,dx = f(a), e la delta di Kronecker \\delta_{ij} vale 1 quando i = j e 0 altrimenti. Il calcolo delle variazioni scrive \\delta S per una variazione, e la chimica usa \\delta+ e \\delta- per le cariche parziali. Si distingue da \\partial, il simbolo ricurvo della derivata parziale, e dalla maiuscola \\Delta usata per le variazioni finite.",
  },
  "delta-upper": {
    name: "Delta maiuscola",
    meaning: "Delta maiuscola greca, usata per una variazione finita di una grandezza, il laplaciano e i discriminanti.",
    usage: "Fisica e chimica scrivono \\Delta x per uno spostamento e \\Delta H per la variazione di entalpia, come in \\Delta G = \\Delta H - T\\Delta S. In analisi \\Delta è l'operatore di Laplace \\Delta u = \\nabla^2 u, e in algebra è il discriminante \\Delta = b^2 - 4ac. I geometri la usano per un triangolo, anche se \\triangle è un simbolo distinto, non pieno, più adatto a quello scopo. Le maiuscole greche sono in tondo; usate \\varDelta per una versione corsiva. Non confondete \\Delta con \\nabla, che è lo stesso triangolo capovolto.",
  },
  epsilon: {
    name: "Epsilon",
    meaning: "Epsilon minuscola lunata ϵ, usata per quantità positive piccole e termini di errore.",
    usage: "\\epsilon stampa la forma lunata ϵ, mentre \\varepsilon dà la forma aperta e ricurva ε che molti lettori associano all'epsilon scritta a mano. Gli analisti usano l'una o l'altra per un numero arbitrariamente piccolo in \\forall \\epsilon > 0, ma mantenete una sola forma in tutto l'articolo. Molti autori riservano \\epsilon alle quantità piccole e usano \\varepsilon per i termini di errore o il rumore. Non confondete nessuna delle due con il simbolo di appartenenza \\in, che somiglia a ϵ ma è una relazione con spaziatura diversa. La fisica usa anche \\epsilon_0 per la permittività del vuoto.",
  },
  "epsilon-variant": {
    name: "Epsilon (variante)",
    meaning: "Variante della epsilon minuscola ε, la forma aperta e ricurva spesso preferita per termini di errore e numeri piccoli.",
    usage: "\\varepsilon produce la forma arrotondata ε, più vicina all'epsilon scritta a mano rispetto alla lunata \\epsilon. La statistica scrive il termine di rumore di una regressione come \\varepsilon_i \\sim \\mathcal{N}(0, \\sigma^2), e molti manuali di analisi preferiscono \\varepsilon nelle dimostrazioni epsilon-delta. La fisica usa \\varepsilon_0 per la permittività del vuoto e \\varepsilon_{ijk} per il simbolo di Levi-Civita. Poiché le due forme si mescolano facilmente per errore, valutate di ridefinirne una nel preambolo così da digitare un solo comando. Evitate di usarla come sostituto del simbolo di appartenenza \\in.",
  },
  zeta: {
    name: "Zeta",
    meaning: "Zeta minuscola greca, nota soprattutto per la funzione zeta di Riemann e per il coefficiente di smorzamento.",
    usage: "La funzione zeta di Riemann \\zeta(s) = \\sum_{n=1}^{\\infty} n^{-s} è l'uso più caratteristico, con il risultato del problema di Basilea \\zeta(2) = \\pi^2/6. Gli ingegneri usano \\zeta come coefficiente di smorzamento di un sistema del secondo ordine, come in \\ddot{x} + 2\\zeta\\omega_n \\dot{x} + \\omega_n^2 x = 0. L'analisi complessa la usa per una variabile complessa muta, e la teoria dei numeri per le radici dell'unità \\zeta_n = e^{2\\pi i/n}. Non esiste un comando \\Zeta perché la zeta maiuscola è uguale alla Z latina. La sua forma scritta a mano si confonde facilmente con \\xi, quindi verificate quale lettera intende una fonte.",
  },
  eta: {
    name: "Eta",
    meaning: "Eta minuscola greca, usata per learning rate, rendimento, viscosità e metrica di Minkowski.",
    usage: "Nel machine learning \\eta è il learning rate convenzionale in aggiornamenti come w \\leftarrow w - \\eta \\nabla L(w). La termodinamica scrive il rendimento come \\eta = W/Q_h, la fluidodinamica la usa per la viscosità dinamica e la relatività scrive la metrica di Minkowski \\eta_{\\mu\\nu}. La statistica la usa talvolta per il predittore lineare \\eta = X\\beta di un modello lineare generalizzato. L'eta maiuscola somiglia alla H latina, quindi non esiste un comando \\Eta. Non confondete \\eta con la n latina nelle slide in font senza grazie, dove il tratto discendente può essere poco visibile.",
  },
  theta: {
    name: "Theta",
    meaning: "Theta minuscola greca, il nome abituale per gli angoli e per i parametri dei modelli in statistica e ML.",
    usage: "La trigonometria e le coordinate polari usano \\theta per gli angoli, come in (r\\cos\\theta, r\\sin\\theta). Statistica e machine learning la usano per i vettori di parametri, con \\hat{\\theta} per uno stimatore e \\theta^* per l'ottimo. I limiti asintotici stretti (Theta grande) usano la maiuscola \\Theta, non \\theta. La variante \\vartheta è una forma corsiveggiante usata talvolta per un secondo angolo o in fisica. Per uno stimatore, \\hat{\\theta} centra il cappello meglio di \\widehat{\\theta}, pensato per argomenti più larghi. Nella notazione bayesiana \\theta indica anche la quantità incognita nella distribuzione a posteriori p(\\theta \\mid x).",
  },
  "theta-upper": {
    name: "Theta maiuscola",
    meaning: "Theta maiuscola greca, standard per i limiti asintotici stretti e gli spazi dei parametri.",
    usage: "L'analisi degli algoritmi scrive \\Theta(n \\log n) per un limite valido sia dall'alto sia dal basso, accanto a O e \\Omega. La statistica usa \\Theta per uno spazio dei parametri, come in \\theta \\in \\Theta. La fisica la usa per la funzione gradino di Heaviside \\Theta(x) e, in alcuni testi, per la temperatura. In LaTeX le maiuscole greche sono in tondo; \\varTheta dà una forma corsiva se uno stile la richiede. Non confondete \\Theta con il glifo dell'insieme vuoto o con la cifra 0 attraversata da una barra.",
  },
  iota: {
    name: "Iota",
    meaning: "Iota minuscola greca, una lettera stretta senza puntino usata per le mappe di inclusione e nella notazione degli indici.",
    usage: "\\iota indica comunemente una mappa di inclusione o un'immersione, come in \\iota : A \\hookrightarrow X, e il prodotto interno \\iota_X \\omega in geometria differenziale. APL e alcuni linguaggi funzionali usano iota per un generatore di indici, che compare nei testi di informatica. Poiché somiglia a una i senza puntino, assicuratevi che non venga confusa con \\imath, la i senza puntino usata sotto gli accenti. Non esiste un comando \\Iota; la iota maiuscola somiglia alla I latina. È abbastanza rara da rendere utile, per il lettore, una definizione di una riga al primo utilizzo.",
  },
  kappa: {
    name: "Kappa",
    meaning: "Kappa minuscola greca, usata per la curvatura, il numero di condizionamento e il kappa di Cohen.",
    usage: "La geometria differenziale scrive la curvatura di una curva come \\kappa = |\\gamma''(s)|, e l'analisi numerica usa \\kappa(A) = \\|A\\|\\|A^{-1}\\| per il numero di condizionamento di una matrice. La statistica ha il \\kappa di Cohen per l'accordo tra valutatori, e la fisica la usa per la conducibilità termica o la costante dielettrica. La variante \\varkappa dà un glifo diverso, preferito da alcuni autori. Non esiste un comando \\Kappa perché la kappa maiuscola è identica alla K latina. Non scambiate \\kappa con la k latina, poiché molte formule le usano entrambe.",
  },
  lambda: {
    name: "Lambda",
    meaning: "Lambda minuscola greca, usata per autovalori, lunghezze d'onda, tassi e intensità della regolarizzazione.",
    usage: "L'algebra lineare scrive Av = \\lambda v per un autovalore e un autovettore. La fisica usa \\lambda per la lunghezza d'onda in c = \\lambda f, la probabilità per il tasso di una distribuzione di Poisson o esponenziale, e l'ottimizzazione per i moltiplicatori di Lagrange e per il peso della penalità in ridge o lasso, \\lambda\\|w\\|^2. L'informatica scrive le funzioni anonime con il lambda calcolo, \\lambda x.\\, x + 1. La maiuscola \\Lambda è un comando distinto con usi diversi. Anche le schedulazioni del learning rate e lo smoothing esponenziale prendono in prestito \\lambda per i fattori di decadimento.",
  },
  "lambda-upper": {
    name: "Lambda maiuscola",
    meaning: "Lambda maiuscola greca, comune per le matrici diagonali di autovalori e per la costante cosmologica.",
    usage: "La decomposizione spettrale A = Q\\Lambda Q^{-1} usa \\Lambda per la matrice diagonale degli autovalori. La cosmologia scrive la costante cosmologica come \\Lambda, e il modello cosmologico standard si compone come \\Lambda\\text{CDM}. La fisica delle particelle la usa per il barione Lambda, e la teoria dei reticoli o la teoria dei numeri possono usare \\Lambda per un reticolo o per la funzione di von Mangoldt \\Lambda(n). In LaTeX le maiuscole greche sono in tondo; usate \\varLambda per una forma corsiva. Non scambiatela per l'«e» logico \\wedge, che è un glifo diverso con spaziatura da operatore.",
  },
  mu: {
    name: "Mu",
    meaning: "Mu minuscola greca, standard per la media, le misure, i coefficienti di attrito e il prefisso micro.",
    usage: "La probabilità scrive la media come \\mu = E[X], quindi una distribuzione normale è \\mathcal{N}(\\mu, \\sigma^2). La teoria della misura usa \\mu per una misura, e la fisica per il coefficiente di attrito, la permeabilità magnetica \\mu_0 e la massa ridotta. Come prefisso di unità in \\mu m o \\mu s viene resa in corsivo matematico, mentre le norme tipografiche richiedono un segno micro in tondo, e racchiuderla in \\mathrm non cambia la forma di una lettera greca. L'ottimizzazione usa \\mu per i parametri di barriera nei metodi a punto interno.",
  },
  nu: {
    name: "Nu",
    meaning: "Nu minuscola greca, usata per la frequenza, i gradi di libertà e la viscosità cinematica.",
    usage: "La fisica scrive l'energia del fotone come E = h\\nu, dove \\nu è la frequenza, e la fluidodinamica usa \\nu per la viscosità cinematica. La statistica usa \\nu per i gradi di libertà nella distribuzione t di Student, e la fisica delle particelle scrive i neutrini come \\nu_e, \\nu_\\mu. La relatività usa gli indici greci \\mu\\nu per le componenti dei tensori, come in g_{\\mu\\nu}. In molti font \\nu somiglia molto alla v latina, quindi evitate di usare entrambe le lettere nella stessa formula. Non esiste un comando \\Nu; la nu maiuscola è la N latina.",
  },
  xi: {
    name: "Xi",
    meaning: "Xi minuscola greca, una lettera a serpentina usata per variabili aleatorie, variabili mute e smorzamento.",
    usage: "I testi di probabilità usano spesso \\xi per una variabile aleatoria o un termine di rumore, e l'analisi per un punto intermedio, come nel teorema del valor medio f(b) - f(a) = f'(\\xi)(b - a). L'analisi di Fourier scrive le variabili di frequenza come \\xi in \\hat{f}(\\xi). Alcuni testi di ingegneria usano \\xi per il coefficiente di smorzamento al posto di \\zeta. Poiché \\xi e \\zeta sono difficili da distinguere quando sono scritte a mano, verificate quale lettera intende una fonte. La sua forma maiuscola \\Xi è un comando distinto.",
  },
  "xi-upper": {
    name: "Xi maiuscola",
    meaning: "Xi maiuscola greca, una lettera a tre barre usata per il barione Xi e per alcune funzioni speciali.",
    usage: "\\Xi è relativamente rara in matematica. I fisici delle particelle la usano per i barioni Xi, scritti \\Xi^0 e \\Xi^-, e talvolta indica la funzione xi di Riemann \\Xi(t) nella teoria analitica dei numeri. La meccanica statistica scrive occasionalmente la funzione di partizione gran canonica come \\Xi. Come le altre maiuscole greche in LaTeX, è in tondo; \\varXi dà la forma corsiva. Non confondetela con il segno di equivalenza \\equiv, che ha tre barre di uguale lunghezza e spaziatura da relazione.",
  },
  pi: {
    name: "Pi",
    meaning: "Pi minuscola greca, la costante del cerchio 3,14159…, usata anche per permutazioni e politiche.",
    usage: "\\pi è il rapporto tra la circonferenza di un cerchio e il suo diametro, e compare in A = \\pi r^2, e^{i\\pi} + 1 = 0 e negli angoli in radianti come \\pi/2. Il reinforcement learning usa \\pi per una politica \\pi(a \\mid s), la combinatoria per una permutazione, e la teoria dei numeri scrive \\pi(x) per la funzione che conta i numeri primi. La variante \\varpi è un glifo diverso. Quando pi è una costante, alcune norme redazionali preferiscono una forma in tondo, ma LaTeX standard dà una \\pi in corsivo. Non usate il grande operatore \\prod al posto di \\pi, né viceversa.",
  },
  "pi-upper": {
    name: "Pi maiuscola",
    meaning: "Pi maiuscola greca, una lettera ordinaria usata per proiezioni, profitto e pressione osmotica.",
    usage: "\\Pi è una lettera di dimensione fissa, non l'operatore di produttoria; per i prodotti su un indice usate \\prod, che si ridimensiona e posiziona gli estremi. Come lettera, \\Pi indica le mappe di proiezione, la funzione di profitto in economia, la pressione osmotica e il pi-calcolo in informatica. La teoria dei tipi scrive i tipi di funzione dipendenti come \\Pi_{x:A} B(x). La teoria della complessità usa \\Pi_k per i livelli della gerarchia polinomiale. Le maiuscole greche sono in tondo per impostazione predefinita, e \\varPi dà una variante corsiva se serve.",
  },
  rho: {
    name: "Rho",
    meaning: "Rho minuscola greca, usata per la densità, i coefficienti di correlazione e la densità di carica.",
    usage: "La fisica usa \\rho per la densità di massa, \\rho = m/V, e per la densità di carica nelle equazioni di Maxwell \\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0. La statistica scrive la correlazione di Pearson come \\rho_{XY} e la correlazione per ranghi di Spearman come \\rho. La teoria delle rappresentazioni usa \\rho per una rappresentazione, e la meccanica quantistica per una matrice densità. La variante \\varrho ha una coda ricurva che alcuni autori usano per tenere distinti due significati. Non confondete \\rho con la p latina, che le somiglia in molti font.",
  },
  sigma: {
    name: "Sigma",
    meaning: "Sigma minuscola greca: la deviazione standard, le funzioni di attivazione e la sigma-algebra.",
    usage: "La statistica scrive la deviazione standard come \\sigma e la varianza come \\sigma^2. Il machine learning usa \\sigma(x) = 1/(1 + e^{-x}) per la sigmoide logistica e \\sigma per una generica funzione di attivazione. La teoria della misura parla di \\sigma-algebre, la fisica usa \\sigma per sezioni d'urto, conducibilità e matrici di Pauli \\sigma_x, e l'algebra lineare usa \\sigma_i per i valori singolari. La variante del sigma finale \\varsigma somiglia a una s latina ed è usata raramente in matematica. Non usate la maiuscola \\Sigma per la sommatoria; per quella c'è \\sum.",
  },
  "sigma-upper": {
    name: "Sigma maiuscola",
    meaning: "Sigma maiuscola greca come lettera, usata soprattutto per matrici di covarianza e alfabeti.",
    usage: "In statistica \\Sigma indica una matrice di covarianza, come in \\mathbf{x} \\sim \\mathcal{N}(\\boldsymbol{\\mu}, \\Sigma), e la SVD scrive A = U\\Sigma V^\\top. La teoria dei linguaggi formali usa \\Sigma per un alfabeto e \\Sigma^* per tutte le stringhe su di esso. Per la sommatoria usate invece \\sum: \\Sigma è una lettera ordinaria di dimensione fissa che non cresce in modalità display e non porta estremi. La teoria della complessità usa \\Sigma_k^p per la gerarchia polinomiale. Le maiuscole greche sono in tondo; \\varSigma è la variante corsiva.",
  },
  tau: {
    name: "Tau",
    meaning: "Tau minuscola greca, usata per costanti di tempo, momento torcente, tempo proprio e correlazione per ranghi di Kendall.",
    usage: "La fisica scrive il momento torcente come \\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}, una costante di tempo in e^{-t/\\tau} e il tempo proprio \\tau in relatività. La statistica ha il \\tau di Kendall, e alcuni autori usano \\tau = 2\\pi come costante del cerchio. La teoria dei numeri usa \\tau(n) per il numero dei divisori, e le forme modulari usano \\tau per un punto del semipiano superiore. La teoria dei tipi scrive spesso i tipi come \\tau e \\sigma. Non esiste un comando \\Tau, poiché la tau maiuscola è uguale alla T latina. In alcuni font \\tau somiglia a una t minuscola, quindi scegliete nomi distinti per variabili vicine.",
  },
  upsilon: {
    name: "Upsilon",
    meaning: "Upsilon minuscola greca, una lettera usata di rado che somiglia molto alla u o alla v latina.",
    usage: "La \\upsilon minuscola è poco comune in matematica, soprattutto perché si confonde facilmente con u e con \\nu. Compare nella fisica delle particelle, per il mesone Upsilon di solito scritto in maiuscolo, e occasionalmente come velocità o come generica variabile indice. Se vi serve una nuova variabile, spesso una lettera meno ambigua è una scelta migliore. Quando la usate, definitela esplicitamente. In LaTeX \\upsilon è in corsivo come le altre lettere greche minuscole, mentre la maiuscola \\Upsilon ha un proprio comando.",
  },
  "upsilon-upper": {
    name: "Upsilon maiuscola",
    meaning: "Upsilon maiuscola greca, nota soprattutto per il mesone Upsilon nella fisica delle particelle.",
    usage: "\\Upsilon indica la famiglia di mesoni del bottomonio, \\Upsilon(1S), \\Upsilon(2S), nella fisica delle particelle. In matematica è rara, e indica occasionalmente una funzione o un insieme quando le altre lettere sono già occupate. A differenza dell'alfa o della beta maiuscola, la upsilon maiuscola ha in Computer Modern una forma distinta con i bracci ricurvi, quindi non è semplicemente una Y latina e ha un proprio comando. Come le altre maiuscole greche è in tondo; \\varUpsilon dà la forma corsiva. Controllatene la leggibilità nelle slide, dove può sembrare una Y.",
  },
  phi: {
    name: "Fi",
    meaning: "Fi minuscola greca, usata per gli angoli, la sezione aurea, la funzione phi di Eulero e le feature map.",
    usage: "\\phi dà la forma chiusa con l'asta, mentre \\varphi dà la forma aperta ad anello; molti autori scelgono \\varphi per le funzioni e riservano \\phi agli angoli. La teoria dei numeri scrive la funzione phi di Eulero come \\varphi(n) o \\phi(n), la sezione aurea è \\phi = (1 + \\sqrt{5})/2 e le coordinate sferiche usano \\phi per un angolo. Il machine learning usa \\phi(x) per una feature map nei metodi kernel, e la fisica per potenziali scalari e funzioni d'onda. Non confondete \\phi con \\emptyset o con la Ø scandinava.",
  },
  "phi-upper": {
    name: "Fi maiuscola",
    meaning: "Fi maiuscola greca, usata per la funzione di ripartizione normale standard, il flusso magnetico e i potenziali.",
    usage: "La statistica scrive la funzione di ripartizione della normale standard come \\Phi(z), con la minuscola \\phi(z) per la densità. La fisica usa \\Phi_B per il flusso magnetico e \\Phi per il potenziale elettrico, mentre l'ingegneria la usa per il flusso in generale. In algebra lineare e in ottimizzazione \\Phi può indicare una matrice di disegno di funzioni di base. In LaTeX le maiuscole greche sono in tondo; \\varPhi dà la variante corsiva. Non confondete \\Phi con \\emptyset o con il simbolo cerchiato \\oslash. La sua inversa \\Phi^{-1} dà i quantili normali, come z_{0.975} \\approx 1.96.",
  },
  chi: {
    name: "Chi",
    meaning: "Chi minuscola greca, usata per la distribuzione chi quadro, le funzioni caratteristiche e la suscettività.",
    usage: "La statistica chi quadro \\chi^2 = \\sum (O_i - E_i)^2/E_i è l'uso più noto, insieme a \\chi^2_k per la distribuzione con k gradi di libertà. Insiemistica e probabilità scrivono la funzione indicatrice o caratteristica di un insieme come \\chi_A. La topologia usa \\chi(M) per la caratteristica di Eulero, la teoria dei grafi \\chi(G) per il numero cromatico, e la fisica \\chi per la suscettività magnetica. Notate che \\chi scende sotto la linea di base, quindi controllate la posizione dei pedici. Non confondetela con la x latina o con l'operatore \\times.",
  },
  psi: {
    name: "Psi",
    meaning: "Psi minuscola greca, la lettera convenzionale per la funzione d'onda quantistica e la funzione digamma.",
    usage: "La meccanica quantistica scrive le funzioni d'onda come \\psi(x, t) e gli stati come |\\psi\\rangle nella notazione di Dirac, con l'equazione di Schrödinger i\\hbar\\,\\partial_t \\psi = \\hat{H}\\psi. Tra le funzioni speciali, \\psi(x) = \\Gamma'(x)/\\Gamma(x) è la funzione digamma. La fluidodinamica usa \\psi per la funzione di corrente, e l'analisi wavelet per la wavelet madre. Nella notazione bra-ket, \\langle \\psi | \\phi \\rangle usa \\langle e \\rangle, non i segni di minore e maggiore. La maiuscola \\Psi è un comando distinto. La normalizzazione richiede \\int |\\psi|^2\\,dx = 1.",
  },
  "psi-upper": {
    name: "Psi maiuscola",
    meaning: "Psi maiuscola greca, spesso una funzione d'onda a molti corpi o uno stato in meccanica quantistica.",
    usage: "La fisica usa \\Psi per una funzione d'onda totale o a molte particelle e riserva \\psi agli stati di singola particella, come nell'equazione di Schrödinger dipendente dal tempo per \\Psi(\\mathbf{r}, t). La fisica delle particelle scrive il mesone J/\\psi in minuscolo, ma \\Psi si usa per alcuni stati del charmonio. In matematica può indicare una funzione o un funtore quando le altre lettere sono occupate. Le maiuscole greche sono in tondo; \\varPsi dà una versione corsiva. Anche la psicologia usa il simbolo come emblema, ma questo uso compare raramente nelle formule.",
  },
  omega: {
    name: "Omega",
    meaning: "Omega minuscola greca, usata per la pulsazione, gli esiti di un esperimento aleatorio e il primo ordinale infinito.",
    usage: "La fisica scrive la pulsazione come \\omega = 2\\pi f, quindi un oscillatore armonico è x(t) = A\\cos(\\omega t + \\varphi). La probabilità usa \\omega \\in \\Omega per un esito nello spazio campionario, e la teoria degli insiemi usa \\omega per il primo ordinale infinito. La teoria della complessità scrive omega piccolo \\omega(n) per limiti inferiori stretti, e la geometria differenziale usa \\omega per le forme differenziali. La teoria dei numeri ha \\omega(n), il numero di fattori primi distinti. Fate attenzione a non confondere \\omega con la w latina negli appunti scritti a mano.",
  },
  "omega-upper": {
    name: "Omega maiuscola",
    meaning: "Omega maiuscola greca, usata per l'unità ohm, gli spazi campionari e i limiti asintotici inferiori.",
    usage: "Come unità, \\Omega è l'ohm, quindi un resistore è 10\\,\\mathrm{k}\\Omega; separate numero e unità con uno spazio sottile. La probabilità scrive lo spazio campionario come \\Omega nella terna (\\Omega, \\mathcal{F}, P). L'analisi degli algoritmi usa \\Omega(n \\log n) per un limite inferiore, accanto a O e \\Theta. L'analisi scrive spesso un dominio aperto come \\Omega \\subset \\mathbb{R}^n. Le maiuscole greche sono in tondo, e \\varOmega dà una variante corsiva. Non confondete \\Omega con il mho, un omega capovolto un tempo usato per il siemens.",
  },
};

export default text;
