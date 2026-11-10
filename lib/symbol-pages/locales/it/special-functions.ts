import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/special-functions/<slug>. */
const text: SymbolPageTranslations = {
  "gamma-function": {
    name: "Funzione gamma",
    meaning: "Funzione gamma, l'estensione del fattoriale ai numeri complessi, con Gamma(n) = (n-1)!.",
    usage: "Definita da \\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt per \\operatorname{Re} z > 0, soddisfa \\Gamma(z+1) = z\\Gamma(z) e \\Gamma(1/2) = \\sqrt{\\pi}. La formula di riflessione \\Gamma(z)\\Gamma(1-z) = \\pi/\\sin(\\pi z) e l'approssimazione di Stirling sono strumenti standard. \\Gamma compone una gamma maiuscola in tondo, lo stile abituale; \\varGamma dà una variante in corsivo. Compare nelle costanti di normalizzazione delle distribuzioni gamma, beta, chi quadrato e t di Student. Usate \\, prima di dt nell'integrale. Non confondete la funzione con \\gamma, la costante di Eulero-Mascheroni.",
  },
  "beta-function": {
    name: "Funzione beta",
    meaning: "Funzione beta B(x, y), un integrale su [0, 1] strettamente legato alla funzione gamma.",
    usage: "La funzione beta è B(x, y) = \\int_0^1 t^{x-1}(1-t)^{y-1}\\,dt = \\frac{\\Gamma(x)\\Gamma(y)}{\\Gamma(x+y)}, e normalizza la distribuzione beta nella statistica bayesiana. A rigore il simbolo è una beta greca maiuscola, ma LaTeX non ha un comando \\Beta perché sarebbe identica alla B latina, quindi B è corretto; alcuni autori scrivono \\mathrm{B} per segnalare che si tratta di una funzione. È simmetrica, B(x, y) = B(y, x). La versione incompleta è B(z; a, b) e la forma regolarizzata I_z(a, b). Evitate conflitti con i numeri di Bell o di Bernoulli B_n.",
  },
  "riemann-zeta-function": {
    name: "Funzione zeta di Riemann",
    meaning: "Funzione zeta di Riemann, definita per Re s > 1 come somma della serie di 1/n^s ed estesa al piano complesso.",
    usage: "\\zeta(s) = \\sum_{n=1}^\\infty n^{-s} collega l'analisi ai numeri primi tramite il prodotto di Eulero \\prod_p (1 - p^{-s})^{-1}. Tra i valori celebri ci sono \\zeta(2) = \\pi^2/6 (il problema di Basilea) e \\zeta(-1) = -1/12 per prolungamento analitico. L'ipotesi di Riemann afferma che gli zeri non banali giacciono sulla retta \\operatorname{Re} s = 1/2. Usate \\zeta, che scritta a mano può somigliare a \\xi ma a stampa è ben distinta. Per convenzione la variabile è s = \\sigma + it. La zeta di Hurwitz è \\zeta(s, a), e in fisica \\zeta compare spesso negli integrali di Bose-Einstein.",
  },
  "error-function": {
    name: "Funzione degli errori",
    meaning: "Funzione degli errori: l'integrale riscalato della gaussiana e^{-t^2} da 0 a x, usato per le probabilità della distribuzione normale.",
    usage: "La definizione è \\text{erf}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_0^x e^{-t^2}\\,dt, con limiti \\pm 1 a \\pm\\infty. La funzione di ripartizione della normale standard è \\Phi(x) = \\frac{1}{2}\\big[1 + \\text{erf}(x/\\sqrt{2})\\big], ed erf risolve l'equazione del calore con una condizione iniziale a gradino. \\text{erf} si stampa in tondo, ma segue il font circostante, quindi diventa corsivo dentro i teoremi; \\operatorname{erf}, o un \\DeclareMathOperator nel preambolo, è più robusto e aggiunge la spaziatura corretta. È dispari: \\text{erf}(-x) = -\\text{erf}(x). L'inversa è \\text{erf}^{-1}, usata per calcolare i quantili della normale.",
  },
  "complementary-error": {
    name: "Funzione degli errori complementare",
    meaning: "Funzione degli errori complementare, 1 - erf(x): l'integrale riscalato della coda gaussiana da x a infinito.",
    usage: "\\text{erfc}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_x^\\infty e^{-t^2}\\,dt = 1 - \\text{erf}(x), ed è la forma preferita per le piccole probabilità di coda, perché calcolare numericamente 1 - \\text{erf}(x) fa perdere precisione per x grande. Fornisce la probabilità di errore sul bit nelle telecomunicazioni, Q(x) = \\frac{1}{2}\\text{erfc}(x/\\sqrt{2}), e i profili di diffusione nella trasmissione del calore. La versione riscalata \\text{erfcx}(x) = e^{x^2}\\text{erfc}(x) evita che il risultato venga arrotondato a zero. Come per erf, \\operatorname{erfc} resta in tondo nei contesti in corsivo e si spazia correttamente da sé, quindi è la scelta più sicura. Per x grande si comporta approssimativamente come e^{-x^2}/(x\\sqrt{\\pi}).",
  },
  "bessel-j": {
    name: "Funzione di Bessel di prima specie",
    meaning: "Funzione di Bessel di prima specie di ordine n, la soluzione dell'equazione di Bessel che resta finita nell'origine.",
    usage: "J_n risolve x^2 y'' + x y' + (x^2 - n^2) y = 0 e ha la serie \\sum_m \\frac{(-1)^m}{m!\\,\\Gamma(m+n+1)} (x/2)^{2m+n}. Descrive le membrane vibranti dei tamburi, le guide d'onda cilindriche e la diffrazione attraverso un'apertura circolare, dove la figura di Airy coinvolge J_1. Per ordini non interi si scrive per convenzione J_\\nu(x), con \\nu. La funzione generatrice è e^{(x/2)(t - 1/t)} = \\sum_n J_n(x) t^n. Per gli ordini composti servono le graffe, J_{n+1}(x). I suoi zeri si scrivono spesso j_{n,k} e determinano le frequenze di risonanza di una membrana circolare.",
  },
  "bessel-y": {
    name: "Funzione di Bessel di seconda specie",
    meaning: "Funzione di Bessel di seconda specie di ordine n, la soluzione dell'equazione di Bessel singolare nell'origine.",
    usage: "Y_n, detta anche funzione di Weber o di Neumann e scritta N_n in alcuni testi di fisica, è la seconda soluzione indipendente dell'equazione di Bessel, con Y_n(x) \\to -\\infty per x \\to 0^+. Per \\nu non intero, Y_\\nu(x) = \\frac{J_\\nu(x)\\cos(\\nu\\pi) - J_{-\\nu}(x)}{\\sin(\\nu\\pi)}, mentre gli ordini interi si definiscono con un passaggio al limite. Nei problemi al contorno su un disco intero il termine Y_n viene scartato per garantire la regolarità al centro, ma si mantiene su una corona circolare. Le funzioni di Hankel combinano entrambe: H_n^{(1)} = J_n + iY_n.",
  },
  "modified-bessel-i": {
    name: "Funzione di Bessel modificata di prima specie",
    meaning: "Funzione di Bessel modificata di prima specie, una soluzione dell'equazione di Bessel modificata che cresce esponenzialmente.",
    usage: "I_n risolve x^2 y'' + x y' - (x^2 + n^2) y = 0 ed è legata a J_n da I_n(x) = i^{-n} J_n(ix). A differenza di J_n non oscilla, ma cresce come e^x/\\sqrt{2\\pi x}. Compare nella conduzione del calore nei cilindri, nella costante di normalizzazione 2\\pi I_0(\\kappa) della distribuzione di von Mises e nella distribuzione di Rice. Per l'ordine generico usate \\nu, I_\\nu(x). Non confondetela con la matrice identità I_n o con la misura di informazione I(X; Y); l'argomento tra parentesi di solito chiarisce, ma una definizione aiuta.",
  },
  "modified-bessel-k": {
    name: "Funzione di Bessel modificata di seconda specie",
    meaning: "Funzione di Bessel modificata di seconda specie, la soluzione decrescente dell'equazione di Bessel modificata.",
    usage: "K_n, detta talvolta funzione di Macdonald, decresce come \\sqrt{\\pi/(2x)}\\,e^{-x} per x grande e diverge nell'origine. Forma con I_n la coppia di soluzioni indipendenti dell'equazione di Bessel modificata. Compare nel nucleo di covarianza di Matérn usato nei processi gaussiani, nel potenziale di Yukawa in due dimensioni e nelle costanti di normalizzazione delle distribuzioni gaussiane inverse generalizzate. Attenzione: K(k) indica anche l'integrale ellittico completo e K_n il grafo completo, quindi specificate di quale K si tratta quando i settori si sovrappongono.",
  },
  "legendre-p": {
    name: "Polinomio di Legendre",
    meaning: "Polinomio di Legendre di grado n, ortogonale su [-1, 1] con peso 1.",
    usage: "I polinomi di Legendre iniziano con P_0 = 1, P_1 = x, P_2 = \\frac{1}{2}(3x^2 - 1) e seguono la formula di Rodrigues P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n}(x^2 - 1)^n. L'ortogonalità si scrive \\int_{-1}^1 P_m P_n\\,dx = \\frac{2}{2n+1}\\delta_{mn}. Compaiono negli sviluppi in multipoli, nelle armoniche sferiche e nei nodi della quadratura di Gauss-Legendre. Le funzioni associate di Legendre si scrivono P_n^m(x) o P_\\ell^m(\\cos\\theta). I fisici usano spesso \\ell per il grado. Non confondeteli con il grafo cammino P_n o con la probabilità P; l'argomento x di solito indica che si tratta del polinomio.",
  },
  "legendre-q": {
    name: "Funzione di Legendre di seconda specie",
    meaning: "Funzione di Legendre di seconda specie, la seconda soluzione dell'equazione di Legendre, singolare in x = 1 e in x = -1.",
    usage: "Q_n risolve la stessa equazione di P_n, (1 - x^2) y'' - 2x y' + n(n+1) y = 0, ma non è un polinomio: per esempio Q_0(x) = \\frac{1}{2}\\ln\\frac{1+x}{1-x} e Q_1(x) = x Q_0(x) - 1. A causa delle singolarità logaritmiche in \\pm 1, di solito viene scartata nei problemi sull'intera sfera e mantenuta solo quando il dominio esclude i poli, come in un cono o nella regione esterna a uno sferoide prolato. Le versioni associate sono Q_n^m(x). Usate \\ln con \\frac per il logaritmo, e \\left( \\right) se l'argomento diventa alto.",
  },
  "hermite-polynomial": {
    name: "Polinomio di Hermite",
    meaning: "Polinomio di Hermite di grado n, ortogonale sulla retta reale con peso gaussiano.",
    usage: "I polinomi di Hermite dei fisici seguono H_n(x) = (-1)^n e^{x^2} \\frac{d^n}{dx^n} e^{-x^2}, iniziano con 1, 2x, 4x^2 - 2 e forniscono le autofunzioni dell'oscillatore armonico quantistico \\psi_n \\propto H_n(x) e^{-x^2/2}. I probabilisti usano una normalizzazione diversa, scritta He_n(x), con peso e^{-x^2/2}; le due famiglie sono legate da un riscalamento, quindi indicate quale intendete. La relazione di ricorrenza è H_{n+1} = 2x H_n - 2n H_{n-1}. H indica anche l'entropia, il gradino di Heaviside e le hamiltoniane, quindi una breve definizione aiuta i lettori.",
  },
  "laguerre-polynomial": {
    name: "Polinomio di Laguerre",
    meaning: "Polinomio di Laguerre di grado n, ortogonale su [0, infinito) con peso e^{-x}.",
    usage: "I polinomi di Laguerre soddisfano la formula di Rodrigues L_n(x) = \\frac{e^x}{n!} \\frac{d^n}{dx^n}(e^{-x} x^n), iniziano con L_0 = 1 e L_1 = 1 - x e risolvono x y'' + (1 - x) y' + n y = 0. La forma generalizzata L_n^{(\\alpha)}(x), con l'apice tra parentesi, fornisce le funzioni d'onda radiali dell'atomo di idrogeno. I testi di fisica più vecchi usano una normalizzazione diversa, che differisce per un fattore n!, quindi controllate le fonti prima di mescolare formule. Definiscono anche la quadratura di Gauss-Laguerre per integrali con peso e^{-x}. Evitate la confusione con una lagrangiana o una funzione di perdita L.",
  },
  "chebyshev-t": {
    name: "Polinomio di Čebyšëv di prima specie",
    meaning: "Polinomio di Čebyšëv di prima specie, definito da T_n(cos theta) = cos(n theta).",
    usage: "I polinomi T di Čebyšëv seguono T_0 = 1, T_1 = x e T_{n+1} = 2x T_n - T_{n-1}, da cui T_2 = 2x^2 - 1. Sono ortogonali su [-1, 1] con peso 1/\\sqrt{1 - x^2} e, tra i polinomi monici di grado n, 2^{1-n} T_n ha il massimo più piccolo su quell'intervallo. Questa proprietà di minimax è alla base dei nodi di Čebyšëv per l'interpolazione, che evitano il fenomeno di Runge, e dei metodi spettrali di Čebyšëv. La lettera T si scontra talvolta con la temperatura, il periodo o la trasposta, quindi definitela quando serve; usate ^\\top per le trasposte, così da evitare ambiguità.",
  },
  "chebyshev-u": {
    name: "Polinomio di Čebyšëv di seconda specie",
    meaning: "Polinomio di Čebyšëv di seconda specie, con U_n(cos theta) sin theta = sin((n+1) theta).",
    usage: "I polinomi U condividono con T_n la ricorrenza U_{n+1} = 2x U_n - U_{n-1}, ma partono da U_0 = 1, U_1 = 2x. Sono ortogonali su [-1, 1] con peso \\sqrt{1 - x^2} e sono legati a quelli di prima specie da T_n'(x) = n U_{n-1}(x). U_n compare nei polinomi caratteristici dei grafi cammino, negli autoproblemi delle matrici di Toeplitz tridiagonali e nella quadratura di Gauss-Čebyšëv di seconda specie. Scrivete l'identità che li definisce con \\frac e \\sin come mostrato sotto, usando \\theta anziché t per rispettare la convenzione trigonometrica.",
  },
  "hypergeometric": {
    name: "Funzione ipergeometrica",
    meaning: "Funzione ipergeometrica di Gauss: la serie di potenze in z con coefficienti costruiti dai simboli di Pochhammer di a, b, c.",
    usage: "È definita come {}_2F_1(a,b;c;z) = \\sum_{n \\geq 0} \\frac{(a)_n (b)_n}{(c)_n} \\frac{z^n}{n!} per |z| < 1 e si specializza in molte funzioni elementari e speciali, per esempio \\ln(1+z) = z\\,{}_2F_1(1,1;2;-z). Il gruppo vuoto {} dà al pedice sinistro 2 qualcosa a cui agganciarsi, il trucco standard per gli indici a sinistra; il comando \\prescript offre un controllo più fine. I punti e virgola separano i parametri del numeratore, quelli del denominatore e l'argomento. La forma generale {}_pF_q segue lo stesso schema, e il teorema di Gauss ne dà il valore in z = 1.",
  },
  "digamma": {
    name: "Funzione digamma",
    meaning: "Funzione digamma, la derivata logaritmica della funzione gamma: Gamma'(x)/Gamma(x).",
    usage: "\\psi(x) = \\frac{d}{dx}\\ln\\Gamma(x) soddisfa \\psi(x+1) = \\psi(x) + 1/x, quindi \\psi(n+1) = H_n - \\gamma, con H_n il numero armonico e \\gamma la costante di Eulero-Mascheroni, e \\psi(1) = -\\gamma. Compare nell'inferenza variazionale bayesiana per le distribuzioni di Dirichlet, dove \\mathbb{E}[\\ln \\theta_k] = \\psi(\\alpha_k) - \\psi(\\sum_j \\alpha_j). La \\psi greca è lo standard; alcuni testi scrivono F(x). Non usate \\digamma, che stampa la lettera greca arcaica digamma e non la funzione. In meccanica quantistica \\psi è la funzione d'onda, quindi definitela.",
  },
  "polygamma": {
    name: "Funzione poligamma",
    meaning: "Funzione poligamma di ordine n: la derivata (n+1)-esima di ln Gamma(x), ovvero la derivata n-esima della digamma.",
    usage: "\\psi^{(n)}(x) = \\frac{d^{n+1}}{dx^{n+1}} \\ln \\Gamma(x), dove \\psi^{(0)} = \\psi è la digamma e \\psi^{(1)} la funzione trigamma. Valori notevoli: \\psi^{(1)}(1) = \\pi^2/6 e, in generale, \\psi^{(n)}(1) = (-1)^{n+1} n!\\,\\zeta(n+1). La trigamma fornisce l'informazione di Fisher e i termini di varianza per i modelli gamma e di Dirichlet. L'apice tra parentesi indica l'ordine di derivazione, non una potenza; scrivere solo ^n verrebbe letto come elevamento a potenza. Le graffe attorno a (n) sono necessarie perché l'intero gruppo venga rialzato. Molti autori scrivono la trigamma semplicemente come \\psi'(x), notazione altrettanto standard.",
  },
  "elliptic-integral-k": {
    name: "Integrale ellittico completo di prima specie",
    meaning: "Integrale ellittico completo di prima specie, l'integrale di 1/sqrt(1 - k^2 sin^2 theta) su un quarto di periodo.",
    usage: "K(k) = \\int_0^{\\pi/2} \\frac{d\\theta}{\\sqrt{1 - k^2 \\sin^2\\theta}}, con K(0) = \\pi/2 e una divergenza logaritmica per k \\to 1. Fornisce il periodo esatto di un pendolo, T = 4\\sqrt{L/g}\\,K(\\sin(\\theta_0/2)). L'insidia maggiore è la convenzione sull'argomento: alcuni testi e programmi usano il parametro m = k^2 e scrivono K(m), quindi K(0.5) può indicare due numeri diversi. Dichiarate se usate il modulo k o il parametro m. La versione incompleta è F(\\phi, k). La media aritmetico-geometrica fornisce una formula rapida: K(k) = \\frac{\\pi}{2\\,\\mathrm{AGM}(1, \\sqrt{1-k^2})}.",
  },
  "elliptic-integral-e": {
    name: "Integrale ellittico completo di seconda specie",
    meaning: "Integrale ellittico completo di seconda specie, l'integrale di sqrt(1 - k^2 sin^2 theta) su un quarto di periodo.",
    usage: "E(k) = \\int_0^{\\pi/2} \\sqrt{1 - k^2 \\sin^2\\theta}\\,d\\theta, con E(0) = \\pi/2 ed E(1) = 1. Il perimetro di un'ellisse con semiasse maggiore a ed eccentricità e è 4a\\,E(e), che non ha una forma chiusa elementare. La relazione di Legendre lo lega a K: E K' + E' K - K K' = \\pi/2, dove gli apici indicano il modulo complementare. Come per K, verificate se una fonte usa il modulo k o il parametro m = k^2. La semplice lettera E si scontra con l'energia, il valore atteso e gli insiemi di lati, quindi definitela presto.",
  },
  "dirac-delta-function": {
    name: "Delta di Dirac",
    meaning: "Delta di Dirac: una distribuzione nulla lontano da 0 e con integrale 1, che sotto un integrale estrae f(0).",
    usage: "La sua proprietà caratteristica è l'identità di campionamento \\int f(x)\\,\\delta(x - a)\\,dx = f(a). È una distribuzione, non una funzione ordinaria, ed è la derivata del gradino di Heaviside, H'(x) = \\delta(x). Nell'elaborazione dei segnali modella un impulso; la sua trasformata di Fourier è 1. Per il riscalamento vale \\delta(ax) = \\delta(x)/|a|. Non confondetela con la delta di Kronecker \\delta_{ij}, un simbolo discreto uguale a 1 quando i = j. La \\delta minuscola è distinta da \\Delta (laplaciano o differenza) e da \\partial.",
  },
  "heaviside-step-function": {
    name: "Funzione gradino di Heaviside",
    meaning: "Funzione gradino di Heaviside: vale 0 per x negativo e 1 per x positivo, e si attiva nell'origine.",
    usage: "Il gradino di Heaviside H(x) modella un segnale acceso all'istante zero, e la sua derivata nel senso delle distribuzioni è la delta di Dirac: H'(x) = \\delta(x). Il valore in 0 è una convenzione: comunemente 1/2 in analisi di Fourier, 1 in teoria del controllo, talvolta lasciato indefinito. Notazioni alternative sono \\theta(x) in fisica, u(t) in ingegneria e la funzione indicatrice \\mathbf{1}_{x \\geq 0}. Per chiarezza definitela con un ambiente cases. Poiché H indica anche l'entropia, i polinomi di Hermite e le hamiltoniane, una breve definizione al primo utilizzo evita confusione ai lettori. La sua trasformata di Laplace è 1/s.",
  },
};

export default text;
