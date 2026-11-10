import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/calculus/<slug>. */
const text: SymbolPageTranslations = {
  "integral": {
    name: "Integrale",
    meaning: "Traccia il segno di integrale, usato per le primitive e per gli integrali definiti come l'area sotto una curva.",
    usage: "Scrivete gli estremi come pedice e apice: \\int_a^b f(x)\\,dx dà un integrale definito, e in stile display gli estremi si trovano per impostazione predefinita accanto al segno. Aggiungete \\limits subito dopo \\int per collocare gli estremi sopra e sotto, uno stile preferito da alcuni testi di fisica. Mettete uno spazio sottile \\, prima del differenziale così che dx non urti l'integranda. Per gli integrali ripetuti \\int\\int lascia uno spazio sgradevole; usate \\iint o \\iiint, che stringono automaticamente la spaziatura. In linea il segno si rimpicciolisce sensibilmente, quindi gli integrali lunghi o annidati si leggono di solito meglio in un ambiente display.",
  },
  "double-integral": {
    name: "Integrale doppio",
    meaning: "Segno di integrale doppio per integrare una funzione di due variabili su una regione piana.",
    usage: "Un integrale doppio compare ogni volta che si integra su un'area, come in \\iint_D f(x,y)\\,dA per la massa, per la probabilità su una densità congiunta o per il flusso attraverso una superficie. Digitare a mano \\int\\int produce due segni con troppo spazio tra loro; \\iint li avvicina in un'unica coppia compatta. Indicate la regione come un unico pedice, \\iint_{D}, invece di dividere gli estremi tra i due segni. Se vi servono estremi separati per ciascuna variabile, scrivete invece \\int_a^b\\!\\int_c^d, poiché il comando combinato accetta un solo insieme di estremi. Lo spazio sottile negativo \\! impedisce a queste coppie costruite a mano di allontanarsi.",
  },
  "triple-integral": {
    name: "Integrale triplo",
    meaning: "Segno di integrale triplo, usato per integrare su una regione solida tridimensionale.",
    usage: "Gli integrali di volume come \\iiint_V \\rho\\,dV per la massa totale, o il primo membro del teorema della divergenza \\iiint_V \\nabla\\cdot\\mathbf{F}\\,dV, usano questo simbolo. Come \\iint, avvicina i tre segni più di quanto farebbe \\int\\int\\int, così che il risultato si legga come un unico operatore. La regione va in un unico pedice; per estremi espliciti su ciascuna variabile concatenate invece comandi \\int separati. Esistono anche \\iiiint per quattro segni e \\idotsint, che traccia due segni separati da puntini per un integrale n-uplo. In coordinate sferiche ricordate lo jacobiano: dV = r^2\\sin\\theta\\,dr\\,d\\theta\\,d\\phi.",
  },
  "contour-integral": {
    name: "Integrale di linea chiuso",
    meaning: "Segno di integrale con un piccolo cerchio, che indica l'integrazione lungo una curva chiusa.",
    usage: "L'analisi complessa vi fa ampio ricorso: il teorema integrale di Cauchy afferma che \\oint_\\gamma f(z)\\,dz = 0 per f olomorfa, e il teorema dei residui calcola tali integrali come 2\\pi i per una somma di residui. In fisica compare nella circuitazione e nelle leggi di Ampère e di Faraday, per esempio \\oint_C \\mathbf{B}\\cdot d\\boldsymbol{\\ell}. Indicate il cammino nel pedice; \\oint_{\\partial S} segnala il bordo di una superficie. Un integrale su superficie chiusa con un cerchio sopra due segni non fa parte dell'insieme standard di comandi, quindi molti autori scrivono semplicemente \\iint_{\\partial V} e precisano che la superficie è chiusa.",
  },
  "derivative": {
    name: "Derivata",
    meaning: "Notazione di Leibniz per l'operatore di derivata rispetto a x, costruita con una frazione.",
    usage: "Scrivere \\frac{d}{dx} dà la forma operatoriale usata in regole come \\frac{d}{dx}\\sin x = \\cos x, mentre \\frac{dy}{dx} indica la derivata di una variabile dipendente. Molte guide di stile compongono il differenziale d in tondo, come \\mathrm{d}, per distinguerlo da una variabile chiamata d; una macro come \\newcommand{\\diff}{\\mathrm{d}} mantiene la coerenza. Nel testo corrente \\frac si riduce a una dimensione minuscola, quindi lì preferite \\tfrac o la forma con la barra dy/dx. Per gli ordini superiori scrivete \\frac{d^2y}{dx^2}, con l'esponente sulla d al numeratore ma sulla x al denominatore.",
  },
  "partial-derivative-operator": {
    name: "Operatore di derivata parziale",
    meaning: "Operatore di derivata parziale rispetto a x, che mantiene fisse tutte le altre variabili.",
    usage: "Il calcolo in più variabili e le EDP ne sono pieni: l'equazione del calore \\frac{\\partial u}{\\partial t} = k\\frac{\\partial^2 u}{\\partial x^2}, i gradienti e le matrici jacobiane lo usano tutti. La \\partial ricurva lo distingue dalla d ordinaria di \\frac{d}{dx}, riservata alle funzioni di una variabile. Le derivate miste si scrivono \\frac{\\partial^2 f}{\\partial x\\,\\partial y}, con uno spazio sottile tra i fattori al denominatore. Quando le frazioni diventano affollate, l'abbreviazione con pedice \\partial_x f o f_x è un'alternativa compatta, comune in fisica e nei lunghi sistemi di EDP, dove le frazioni sovrapposte farebbero esplodere l'altezza delle righe.",
  },
  "limit": {
    name: "Limite",
    meaning: "Operatore di limite con la condizione di avvicinamento x \\to a scritta sotto di esso.",
    usage: "Poiché \\lim è un operatore predefinito, viene composto in tondo e in modalità display colloca il suo pedice sotto, come in \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1. In linea il pedice si sposta di lato per risparmiare altezza di riga; forzatelo sotto con \\lim\\limits_{x\\to a} solo se l'altezza aggiuntiva è accettabile. I limiti unilaterali usano x \\to a^+ o x \\to a^-, e i limiti all'infinito x \\to \\infty. Gli operatori correlati \\limsup e \\liminf si comportano allo stesso modo. Per la freccia usate \\to invece di un trattino seguito dal segno di maggiore, che verrebbero stampati come due simboli separati.",
  },
  "summation": {
    name: "Sommatoria",
    meaning: "Simbolo di sommatoria con indice che parte da n = 1 e arriva all'infinito, la forma di una serie infinita.",
    usage: "Le serie infinite come il problema di Basilea \\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6} o la serie armonica divergente si scrivono così. In modalità display gli estremi si collocano sopra e sotto una sigma grande; in linea si spostano a destra di una più piccola, il che mantiene regolare l'interlinea. Aggiungete \\limits se vi servono gli estremi sovrapposti in linea, oppure \\displaystyle con parsimonia. Non usate la lettera greca \\Sigma come sostituto: è una lettera di dimensione ordinaria, non un operatore, e non gestisce correttamente gli estremi. La convergenza si esprime spesso tramite le somme parziali, S_N = \\sum_{n=1}^{N} a_n.",
  },
  "product": {
    name: "Produttoria",
    meaning: "Operatore di produttoria per n da 1 all'infinito, usato per scrivere i prodotti infiniti.",
    usage: "Risultati classici come il prodotto di Eulero per la funzione zeta e il prodotto di Wallis per \\pi si scrivono con esso. Come per \\sum, gli estremi vanno sotto e sopra l'operatore in stile display e di lato in linea. Non confondetelo con \\Pi, la lettera greca maiuscola, che ha una forma simile ma resta di dimensione ordinaria e prende gli estremi come semplici pedici. Un prodotto infinito si dice convergente quando i suoi prodotti parziali tendono a un limite non nullo, quindi gli autori scrivono spesso \\prod_{n=1}^{\\infty}(1+a_n) insieme alla condizione \\sum |a_n| < \\infty, che ne garantisce la convergenza.",
  },
  "differential": {
    name: "Differenziale",
    meaning: "Differenziale di x, che chiude un integrale e indica la variabile di integrazione.",
    usage: "Digitato come semplice dx, la d risulta in corsivo e attaccata all'integranda, quindi la soluzione abituale è uno spazio sottile: \\int f(x)\\,dx. Lo stile ISO e molte riviste compongono la d in tondo con \\mathrm{d}x; una macro come \\newcommand{\\dd}{\\mathrm{d}} mantiene la coerenza in tutto un articolo. Negli integrali multipli separate i differenziali con spazi sottili, dx\\,dy, o abbreviateli come dA o dV. Lo stesso differenziale compare nelle derivate di Leibniz \\frac{dy}{dx} e nelle forme differenziali, dove i prodotti si scrivono dx \\wedge dy e l'ordine conta perché il prodotto esterno è antisimmetrico.",
  },
  "prime-derivative": {
    name: "Derivata con apice",
    meaning: "Notazione di Lagrange con l'apice per la derivata prima di f calcolata in x.",
    usage: "Digitare un apostrofo in modalità matematica produce un apice come esponente, quindi f' è un'abbreviazione di f^{\\prime}. La notazione con l'apice è compatta per le funzioni di una variabile, come nel teorema del valor medio f'(c) = \\frac{f(b)-f(a)}{b-a}. Se vi serve anche un esponente, scrivete f'^2, che combina entrambi in un unico apice, oppure raggruppate come (f'(x))^2; scrivere f^2' provoca un errore di doppio apice. Evitate di incollare un apostrofo tipografico, che non diventa un apice, ed evitate un \\prime isolato fuori da un esponente, che viene stampato a grandezza piena sulla linea di base. In fisica un apice può indicare anche una coordinata trasformata come x'.",
  },
  "double-prime": {
    name: "Derivata seconda con doppio apice",
    meaning: "Derivata seconda di f in x nella notazione con gli apici, che descrive la concavità o l'accelerazione.",
    usage: "Due apostrofi in modalità matematica si combinano in un unico esponente con due apici, equivalente a f^{\\prime\\prime}. Il criterio della derivata seconda lo usa: se f'(c) = 0 e f''(c) > 0, allora c è un punto di minimo locale. In meccanica x''(t) dà l'accelerazione, anche se per le derivate rispetto al tempo si preferisce la forma con i punti \\ddot{x}. Tre apici f''' sono ancora leggibili, ma oltre passate a f^{(4)}(x), con l'ordine tra parentesi così che non venga scambiato per una potenza. Non digitate mai il carattere delle virgolette doppie al posto di due apostrofi: viene reso con un glifo del tutto diverso.",
  },
  "approaches": {
    name: "Freccia di tendenza",
    meaning: "Freccia verso destra letta come 'tende a' nei limiti o 'va in' tra insiemi.",
    usage: "Ha un doppio ruolo: nei limiti, x \\to 0 o n \\to \\infty; nelle segnature di funzione, f\\colon X \\to Y. \\to è semplicemente un alias di \\rightarrow, quindi il risultato è identico; scegliete quello che si legge meglio nel sorgente. Non confondetelo con \\mapsto, che mostra dove va un singolo elemento (x \\mapsto x^2), né con \\longrightarrow, una freccia più lunga per le formule in display. Per i modi di convergenza decoratelo: \\xrightarrow{d} per la convergenza in distribuzione, oppure sovrapponete un'etichetta con \\overset{p}{\\to}. Ha la spaziatura di una relazione, quindi non servono spazi manuali attorno.",
  },
  "evaluated-at": {
    name: "Barra di valutazione",
    meaning: "Barra verticale di valutazione con estremi, che mostra una primitiva valutata da a a b.",
    usage: "Dopo aver integrato, scrivere F(x)\\Big|_{a}^{b} = F(b) - F(a) è l'abbreviazione standard derivata dal teorema fondamentale del calcolo integrale. \\Big fissa la barra a una dimensione maggiorata, adatta alle frazioni ordinarie; per espressioni più alte usate \\bigg| oppure accoppiate \\left. con \\right|_{a}^{b} così che la barra cresca in base a ciò che la precede. Alcuni autori preferiscono le parentesi quadre, \\Big[ F(x) \\Big]_a^b, che non lasciano dubbi su quanta parte dell'espressione viene valutata. Un semplice | senza dimensionamento è troppo corto e fa sì che gli estremi si affollino contro la primitiva, specialmente dopo una frazione.",
  },
};

export default text;
