import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/accents/<slug>. */
const text: SymbolPageTranslations = {
  "hat": {
    name: "Cappello",
    meaning: "Pone un piccolo accento circonflesso su un singolo carattere, per indicare stimatori, versori o trasformate di Fourier.",
    usage: "Gli statistici scrivono \\hat{\\theta} per uno stimatore di \\theta e \\hat{y} per i valori stimati nella regressione, i fisici usano \\hat{x} o \\hat{\\mathbf{n}} per versori e operatori quantistici, e gli analisti scrivono \\hat{f} per la trasformata di Fourier. L'accento ha larghezza fissa, quindi sta bene solo sopra un singolo simbolo; per più lettere passate a \\widehat{xy}. Sopra una i o una j usate le forme senza puntino \\imath e \\jmath, così che il cappello non si appoggi sul punto. Nel testo corrente, fuori dalla modalità matematica, l'accento circonflesso equivalente è \\^{o}, non \\hat.",
  },
  "wide-hat": {
    name: "Cappello largo",
    meaning: "Estende un accento circonflesso su un'espressione di più lettere, come la trasformata di Fourier di un prodotto.",
    usage: "Usate \\widehat quando l'accento deve coprire più di un glifo, per esempio \\widehat{f * g} = \\hat{f}\\,\\hat{g} per la convoluzione, \\widehat{ABC} per un angolo in alcune tradizioni geometriche, o \\widehat{G} per il gruppo duale o il completamento di un gruppo. Nei font standard Computer Modern il cappello cresce solo fino a una larghezza limitata, quindi sulle espressioni lunghe smette di allungarsi e appare sottodimensionato; in quel caso un apice come (f g)^\\wedge o un operatore \\mathcal{F}\\{\\cdot\\} si legge meglio. Per una singola lettera preferite \\hat{x}, che è posizionato con più precisione sui caratteri corsivi.",
  },
  "tilde": {
    name: "Tilde",
    meaning: "Pone una piccola tilde ondulata su un singolo simbolo, spesso per indicare un'approssimazione, una trasformata o una variabile modificata.",
    usage: "Una tilde su una lettera segnala di solito un oggetto collegato ma alterato: \\tilde{x} per una soluzione perturbata o approssimata, \\tilde{f} per una trasformata di Laplace o di altro tipo, \\tilde{O}(n) per la complessità soft-O che nasconde i fattori logaritmici, o \\tilde{X} per un rivestimento universale in topologia. Come \\hat, ha larghezza fissa, quindi su due o più lettere usate \\widetilde. Non confondetela con \\sim, che è un simbolo di relazione posto tra due termini (X \\sim N(0,1)), né con l'accento testuale \\~{n} usato in parole come señor. Per le lettere senza puntino scrivete \\tilde{\\imath}.",
  },
  "wide-tilde": {
    name: "Tilde larga",
    meaning: "Traccia una tilde estensibile su un gruppo di simboli, usata per rivestimenti, chiusure ed espressioni modificate.",
    usage: "Scegliete \\widetilde quando la tilde deve coprire più caratteri, come in \\widetilde{GL}_n per un gruppo di rivestimento, \\widetilde{AB} per un arco in alcuni testi di geometria, o \\widetilde{f(x)} per una funzione regolarizzata. La sua larghezza cresce con il contenuto, ma solo fino a un massimo che dipende dal font, oltre il quale resta centrata e appare corta; per argomenti lunghi una notazione postfissa o un operatore con nome è più chiara. Su una singola lettera \\tilde{x} offre un posizionamento migliore e un accento più piccolo. Per scrivere la tilde come carattere autonomo nel testo, il comando da usare è invece \\textasciitilde.",
  },
  "dot": {
    name: "Punto sovrapposto",
    meaning: "Aggiunge un singolo punto sopra una variabile: è la notazione di Newton per la derivata prima rispetto al tempo.",
    usage: "In meccanica e nei sistemi dinamici \\dot{x} significa dx/dt, così equazioni come \\dot{x} = Ax o la lagrangiana L(q, \\dot{q}, t) si scrivono in modo compatto. I fisici lo usano anche per le portate, come \\dot{m} per la portata massica. Il punto è un accento matematico e funziona anche sulle lettere greche: \\dot{\\theta}. Non confondetelo con \\cdot (un punto di moltiplicazione centrato) né con l'accento testuale \\.{z} usato nelle parole polacche. Per la derivata seconda usate \\ddot{x} invece di sovrapporre due comandi \\dot, che disallineano i punti.",
  },
  "double-dot": {
    name: "Doppio punto",
    meaning: "Pone due punti sopra una variabile per indicarne la derivata seconda rispetto al tempo, come nell'accelerazione.",
    usage: "La seconda legge di Newton si scrive comunemente m\\ddot{x} = F, e l'oscillatore armonico \\ddot{x} + \\omega^2 x = 0. Nella meccanica lagrangiana le equazioni di Eulero-Lagrange producono termini in \\ddot{q}. Anche se somiglia a una dieresi, \\ddot è un accento matematico; per parole tedesche o turche nel testo usate invece \\\"{o}. I punti sono centrati sull'asse inclinato del simbolo, quindi sulle lettere corsive si spostano leggermente a destra, ed è voluto. Per la derivata terza esiste \\dddot{x}, ma oltre quella la notazione di Leibniz o x^{(n)} è più chiara.",
  },
  "triple-dot": {
    name: "Triplo punto",
    meaning: "Pone tre punti sopra una variabile: notazione alla Newton per la derivata terza rispetto al tempo (lo strappo).",
    usage: "Le derivate terze compaiono nella pianificazione del moto e nei controlli, dove \\dddot{x} è lo strappo (jerk), e nella forza di reazione radiativa di Abraham-Lorentz, proporzionale a \\dddot{\\mathbf{x}}. È accompagnato da \\ddddot per quattro punti, e nessuno dei due fa parte del nucleo minimo di LaTeX. I suoi punti sono più ravvicinati di quanto potrebbero esserlo con tre chiamate manuali a \\dot, e si trova alla stessa altezza di \\ddot. Poiché tre punti diventano difficili da leggere in corpo piccolo o nei pedici, molti autori passano a x^{(3)} o d^3x/dt^3 per gli ordini superiori.",
  },
  "bar": {
    name: "Barra",
    meaning: "Pone una breve barra orizzontale sopra un simbolo, tipicamente per una media campionaria o un complesso coniugato.",
    usage: "La statistica usa \\bar{x} per la media campionaria, (1/n)\\sum x_i; l'analisi complessa scrive \\bar{z} per il coniugato; e \\bar{A} può indicare la chiusura di un insieme. La barra ha una larghezza fissa pari circa a quella di una lettera, quindi \\bar{xy} risulta sbagliato: usate \\overline{xy} per coprire più simboli, che è anche la scelta abituale per coniugare un'espressione come \\overline{z + w}. Nel testo l'accento macron è \\={a}, non \\bar. I vettori in grassetto lo accettano senza problemi: \\bar{\\mathbf{v}}.",
  },
  "overline": {
    name: "Sopralineatura",
    meaning: "Traccia una linea sopra un'intera espressione, per coniugati, chiusure, decimali periodici o nomi di segmenti.",
    usage: "A differenza di \\bar, il filetto di \\overline si estende per tutta la larghezza del suo argomento, quindi è adatto a \\overline{z_1 z_2} = \\bar{z}_1 \\bar{z}_2, alla chiusura \\overline{A \\cup B}, alla negazione booleana \\overline{A + B}, al segmento \\overline{AB} e ai decimali periodici come 0.\\overline{3}. Le sopralineature annidate si sovrappongono ad altezze crescenti, il che può apparire irregolare quando sono affiancate; aggiungere a ciascuna un \\vphantom del contenuto più alto aiuta ad allinearle. In modalità testo un filetto superiore non è disponibile direttamente: racchiudetelo in modalità matematica. Il suo corrispettivo per la sottolineatura è \\underline.",
  },
  "underline": {
    name: "Sottolineatura",
    meaning: "Traccia un filetto sotto un'espressione, usato per enfasi, limiti inferiori o integrali inferiori.",
    usage: "In matematica \\underline si usa per gli integrali inferiori di Darboux, il limite inferiore \\underline{\\lim}, i minoranti e per contrassegnare elementi distinti; alcuni ambiti sottolineano i vettori invece di usare il grassetto. Funziona sia in modalità testo sia in modalità matematica, ma nel testo disattiva la sillabazione e l'andata a capo, quindi è una scelta poco adatta per enfatizzare parole, dove si preferisce \\emph. La profondità del filetto dipende dai discendenti, quindi \\underline{a} e \\underline{y} si trovano ad altezze diverse; aggiungere un \\vphantom{y} a ciascuno li allinea. Il suo gemello superiore è \\overline.",
  },
  "vector-arrow": {
    name: "Freccia vettoriale",
    meaning: "Pone una piccola freccia rivolta a destra sopra una singola lettera per indicare che è un vettore.",
    usage: "La fisica scolastica e molti testi di ingegneria scrivono i vettori come \\vec{F}, \\vec{v} o \\vec{r}, mentre la matematica pura usa più spesso il grassetto \\mathbf{v} o lettere semplici. La freccia ha una dimensione fissa pensata per un solo carattere; sopra due punti come AB appare compressa, quindi usate invece \\overrightarrow{AB}. Sulle lettere corsive la freccia è leggermente spostata a destra del centro per seguirne l'inclinazione. Combinarla con un cappello per i versori (\\hat{\\vec{x}}) funziona, ma risulta molto alta, perciò molti preferiscono \\hat{\\mathbf{x}}.",
  },
  "wide-vector": {
    name: "Freccia vettoriale larga",
    meaning: "Estende una freccia rivolta a destra sopra il suo argomento: è la notazione standard per il vettore da A a B.",
    usage: "La geometria e l'algebra vettoriale usano \\overrightarrow{AB} per il vettore dal punto A al punto B, dando identità come \\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}. La freccia si allarga per adattarsi al contenuto, a differenza di \\vec, che copre una sola lettera. In teoria delle categorie e in analisi funzionale indica talvolta la direzione di un limite o un insieme diretto. La freccia è disegnata a piena altezza, quindi aggiunge uno spazio verticale evidente; nel testo in linea con interlinea stretta valutate \\vec{v} o le lettere in grassetto. Usate \\overleftarrow per la direzione opposta.",
  },
  "left-vector": {
    name: "Freccia vettoriale verso sinistra",
    meaning: "Traccia una freccia rivolta a sinistra che copre l'argomento, per indicare una direzione invertita o una sequenza letta all'indietro.",
    usage: "Meno comune della sua controparte rivolta a destra, \\overleftarrow{AB} compare quando un vettore o un cammino è letto da B verso A, per la parola o stringa rovesciata nella teoria dei linguaggi formali e per le grandezze a tempo inverso o aggiunte in fisica. La sua freccia si estende sull'intero argomento proprio come \\overrightarrow. Se vi servono frecce sotto l'espressione, amsmath fornisce \\underleftarrow e \\underrightarrow. Per un vettore all'indietro su una sola lettera non esiste una forma breve predefinita come \\vec, quindi questo comando largo è la scelta abituale.",
  },
  "line-arrow-over-ab": {
    name: "Freccia bidirezionale (sopra AB)",
    meaning: "Traccia una freccia a doppia punta sopra il suo argomento, la notazione abituale per la retta passante per i punti A e B.",
    usage: "La geometria scolastica distingue tre oggetti costruiti da due punti: \\overline{AB} per il segmento, \\overrightarrow{AB} per la semiretta e \\overleftrightarrow{AB} per la retta infinita. La freccia si estende con il contenuto e ha punte a entrambe le estremità. È usata occasionalmente anche per relazioni bidirezionali o limiti bilaterali. Poiché è piuttosto alta, nei paragrafi fitti può urtare la riga superiore; la modalità display evita il problema. La versione corrispondente con la freccia sotto è \\underleftrightarrow. Tenete presente la distinzione da \\overline{AB}, che indica solo il segmento finito.",
  },
  "acute": {
    name: "Accento acuto",
    meaning: "Pone un accento acuto (un tratto ascendente) sopra un simbolo matematico, usato talvolta come segno simile a un apice.",
    usage: "Gli accenti in modalità matematica come \\acute esistono soprattutto per completezza; in pratica compaiono come decorazioni di variabili, per esempio \\acute{x} per una coordinata trasformata in alcuni testi di fisica. Per le lettere accentate nelle parole usate l'accento testuale \\'{e}, come in café; \\acute non funziona fuori dalla modalità matematica. La versione matematica usa il font corsivo matematico, quindi \\acute{e} dentro un'equazione non corrisponde a una lettera tonda accentata nel paragrafo circostante. Se vi serve solo un segno in stile derivata, x' (apice) è molto più standard.",
  },
  "grave": {
    name: "Accento grave",
    meaning: "Pone un accento grave (un tratto discendente) sopra un simbolo in modalità matematica, come decorazione di variabile.",
    usage: "\\grave è la controparte in modalità matematica dell'accento testuale \\`{a} che si vede in parole francesi come voilà. Nelle equazioni è usato di rado e serve solo come ulteriore modo di distinguere variabili collegate, accanto ad apici, cappelli e tilde. Essendo un accento matematico, compone il suo argomento in corsivo matematico; per una parola accentata in un'equazione scrivete invece \\text{\\`{a}}. Se state scegliendo una decorazione per una nuova variabile, il lettore troverà di solito più familiari \\tilde, \\hat o un apice.",
  },
  "breve": {
    name: "Breve",
    meaning: "Aggiunge una breve (una piccola curva a forma di coppa) sopra un simbolo, una decorazione di variabile meno comune.",
    usage: "In matematica \\breve{x} compare come contrassegno alternativo quando cappello, barra e tilde sono già occupati, per esempio in alcuni articoli di elaborazione dei segnali e di statistica per uno stimatore modificato, e nella notazione della teoria di Lie. La breve è arrotondata in basso, a differenza di \\check, che è appuntito. Per testi in rumeno o turco (ă, ğ) usate l'accento testuale \\u{a} invece del comando matematico. L'accento ha larghezza fissa, quindi si adatta solo a singole lettere.",
  },
  "check": {
    name: "Caron",
    meaning: "Pone un caron (háček), un piccolo accento a forma di v, sopra un simbolo; è usato in particolare per la coomologia di Čech.",
    usage: "La topologia algebrica scrive \\check{H}^n(X) per la coomologia di Čech, e alcuni testi usano \\check{x} per un oggetto duale o antitrasformato, l'opposto di un cappello. La forma a v lo distingue dalla breve arrotondata \\breve e da \\hat, che è una v rovesciata. Nel testo un háček ceco come č si ottiene con \\v{c}, non con \\check. L'accento ha larghezza fissa; nel nucleo di LaTeX non esiste un \\widecheck standard, quindi sulle espressioni lunghe gli autori usano invece un apice.",
  },
  "ring": {
    name: "Cerchietto",
    meaning: "Pone un piccolo cerchio sopra un simbolo, usato per l'interno degli insiemi e per alcuni simboli di unità.",
    usage: "La topologia scrive talvolta \\mathring{A} per l'interno di A (in alternativa ad A^\\circ o \\operatorname{int} A), e la geometria differenziale lo usa per grandezze a traccia nulla o di riferimento. Per il simbolo dell'ångström nel testo usate \\AA, e per la lettera scandinava å usate \\aa; \\mathring è solo per la modalità matematica. Si distingue da un apice \\circ, che sta in alto a destra invece che centrato sopra. Il cerchietto è dimensionato per una singola lettera. Sopra le lettere i e j usate \\imath o \\jmath, così che il cerchietto sostituisca il puntino.",
  },
  "overbrace": {
    name: "Graffa superiore",
    meaning: "Traccia una parentesi graffa orizzontale sopra un'espressione, con un'etichetta facoltativa indicata tramite un apice.",
    usage: "Le graffe superiori annotano parti di una formula, per esempio indicando n copie in \\overbrace{1 + 1 + \\cdots + 1}^{n} o dando un nome a un termine in una derivazione. L'apice dopo il comando viene posto sopra la punta della graffa, e racchiudere l'etichetta in \\text la mantiene in tondo e di dimensione leggibile. La graffa aggiunge molta altezza, quindi è adatta alla modalità display; in linea allontana le righe. Combinatela con \\underbrace sulla stessa espressione per annotare sopra e sotto. Per una graffa con etichetta di lato usate invece \\left\\{ ... \\right..",
    example: "\\overbrace{a + a + \\cdots + a}^{n \\text{ volte}} = na",
  },
  "underbrace": {
    name: "Graffa inferiore",
    meaning: "Pone una parentesi graffa sotto un'espressione, con un'etichetta indicata tramite un pedice sotto di essa.",
    usage: "I libri di testo usano \\underbrace per spiegare parti di un'equazione, per esempio evidenziando \\underbrace{\\frac{1}{2}mv^2}_{\\text{kinetic}} in un bilancio energetico o contando i fattori di un prodotto. L'etichetta va in un pedice subito dopo il comando; usate \\text per le parole e contenuto in \\scriptstyle per brevi formule. La graffa si estende esattamente per la larghezza del suo argomento. Le graffe annidate o sovrapposte richiedono attenzione: potete applicare una graffa inferiore a una parte di un'espressione che ha già una graffa superiore, ma le graffe non possono incrociarsi. Come \\overbrace, rende al meglio in modalità display.",
    example: "E = \\underbrace{\\tfrac{1}{2} m v^2}_{\\text{cinetica}} + mgh",
  },
  "cancel": {
    name: "Cancellazione",
    meaning: "Barra un'espressione con una linea diagonale per mostrare termini che si semplificano in una derivazione.",
    usage: "Insegnanti e dispense usano \\cancel per mostrare le semplificazioni, per esempio un fattore che si semplifica in una frazione o termini opposti che si annullano in una somma. Lo stesso pacchetto offre \\bcancel (in direzione della barra rovesciata), \\xcancel (una X sul termine) e \\cancelto{0}{x}, che disegna una freccia verso il valore a cui tende il termine. Il colore del tratto si può cambiare separatamente da quello del testo, il che è utile nelle slide. \\cancel funziona anche in modalità testo, ma si usa soprattutto in matematica. Gli articoli formali raramente mostrano le semplificazioni in questo modo: è uno strumento didattico.",
  },
  "boxed-formula": {
    name: "Formula incorniciata",
    meaning: "Traccia una cornice rettangolare attorno a un'espressione matematica, spesso per mettere in evidenza un risultato finale.",
    usage: "Gli studenti incorniciano le risposte finali e gli autori evidenziano le identità chiave con \\boxed{E = mc^2}. Il comando funziona in modalità matematica, mantenendo il contenuto in stile display o testuale a seconda dei casi, a differenza di \\fbox, che passa alla modalità testo e richiede $...$ al suo interno. Negli ambienti align applicate \\boxed a un membro o al contenuto di un'intera riga, ma non a cavallo del punto di allineamento &. La spaziatura interna e lo spessore del filetto dipendono da \\fboxsep e \\fboxrule, quindi potete regolarli localmente. Per cornici colorate il passo successivo abituale è \\fcolorbox attorno a una formula in linea.",
  },
};

export default text;
