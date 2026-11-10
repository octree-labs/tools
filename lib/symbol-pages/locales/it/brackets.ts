import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/brackets/<slug>. */
const text: SymbolPageTranslations = {
  "angle-bracket-left": {
    name: "Parentesi angolare sinistra",
    meaning: "Parentesi angolare aperta, usata per prodotti scalari, valori di aspettazione e sottogruppi generati.",
    usage: "La parentesi angolare sinistra apre notazioni come il prodotto scalare \\langle u, v \\rangle, un bra-ket \\langle \\psi | \\phi \\rangle, il sottogruppo \\langle g \\rangle o una media temporale \\langle x \\rangle. Non usate mai al suo posto il segno di minore <: è una relazione con una spaziatura ampia e la forma sbagliata. Funziona con \\left e \\right per il dimensionamento automatico, e con \\big, \\Big e simili per le dimensioni manuali. Accoppiatela sempre con \\rangle; se vi serve un solo lato visibile, usate \\left. o \\right. come partner invisibile.",
  },
  "angle-bracket-right": {
    name: "Parentesi angolare destra",
    meaning: "Parentesi angolare chiusa che termina prodotti scalari, ket, medie e altre notazioni con parentesi angolari.",
    usage: "\\rangle chiude ciò che \\langle apre: \\langle f, g \\rangle negli spazi di Hilbert, il ket di Dirac |\\psi\\rangle e presentazioni come \\langle a, b \\mid a^2 = b^3 \\rangle. Il segno di maggiore > non è un sostituto, perché è una relazione con spazio aggiuntivo attorno e un angolo più piatto. Quando il contenuto è alto, come con frazioni o sommatorie, usate \\left\\langle ... \\right\\rangle così che entrambi i lati crescano insieme. Un ket usato da solo si scrive |\\psi\\rangle e non richiede un \\langle corrispondente.",
  },
  "angle-brackets": {
    name: "Parentesi angolari",
    meaning: "Racchiude un'espressione tra parentesi angolari, per medie, prodotti scalari o lo span di generatori.",
    usage: "Questa coppia si usa per i valori di aspettazione in fisica, \\langle E \\rangle, per i prodotti scalari \\langle x, y \\rangle e per il sottogruppo o l'ideale generato da alcuni elementi, \\langle a \\rangle. Per argomenti alti passate a \\left\\langle \\frac{a}{b} \\right\\rangle. Se scrivete spesso prodotti scalari, definite una macro, per esempio con uno strumento per delimitatori accoppiati, così che il dimensionamento sia coerente. Nella notazione di Dirac molti preferiscono un insieme dedicato di macro bra-ket, perché la spaziatura attorno alla barra verticale dentro \\langle \\phi | \\psi \\rangle può risultare irregolare; \\mid aggiunge la spaziatura di una relazione, mentre | non ne aggiunge alcuna.",
  },
  "ceiling-left": {
    name: "Parte intera superiore sinistra",
    meaning: "Parentesi sinistra della parte intera superiore, la metà di apertura della funzione che arrotonda per eccesso a un intero.",
    usage: "\\lceil apre la notazione della parte intera superiore \\lceil x \\rceil, il più piccolo intero maggiore o uguale a x. È un delimitatore, quindi funziona con \\left\\lceil ... \\right\\rceil per contenuti alti come \\frac{n}{2}, e con il dimensionamento in stile \\big. La parentesi della parte intera superiore ha il tratto orizzontale in alto, mentre quella della parte intera inferiore, \\lfloor, lo ha in basso: una coppia facile da confondere in fase di revisione. Alcuni autori usano \\lceil e \\rceil anche come virgolette angolari per la numerazione di Gödel, per la quale \\ulcorner è un'alternativa.",
  },
  "ceiling-right": {
    name: "Parte intera superiore destra",
    meaning: "Parentesi destra della parte intera superiore, che chiude la notazione della funzione di arrotondamento per eccesso.",
    usage: "Accoppiate \\rceil con \\lceil per scrivere \\lceil \\log_2 n \\rceil, il numero di bit necessari in molti algoritmi, o \\lceil n/k \\rceil per il numero di blocchi di dimensione k necessari a coprire n elementi. A differenza delle parentesi tonde, la parte intera superiore non ha un equivalente ASCII, quindi il comando è l'unico modo per ottenere il simbolo. Usate \\right\\rceil quando la parentesi sinistra corrispondente è stata posta con \\left. Se scrivete spesso parti intere superiori, una macro per delimitatori accoppiati come \\ceil{x} mantiene coerenti le dimensioni in tutto il documento.",
    example: "\\text{blocchi} = \\lceil n / k \\rceil",
  },
  "ceiling": {
    name: "Parte intera superiore",
    meaning: "Arrotonda x per eccesso al più piccolo intero maggiore o uguale a esso: la funzione parte intera superiore.",
    usage: "Le parti intere superiori compaiono nell'analisi degli algoritmi (\\lceil \\log_2 n \\rceil confronti, \\lceil n/2 \\rceil nel merge sort), in teoria dei numeri e nei problemi di conteggio come il principio dei cassetti, dove qualche cassetto contiene almeno \\lceil n/k \\rceil oggetti. Per gli argomenti negativi ricordate che \\lceil -2.5 \\rceil = -2. Quando l'argomento è una frazione o un'espressione alta, usate \\left\\lceil ... \\right\\rceil così che le parentesi crescano. Non sostituitele con le parentesi quadre [x]: i testi più vecchi usavano [x] per la parte intera inferiore, il che la rende ambigua.",
  },
  "floor-left": {
    name: "Parte intera inferiore sinistra",
    meaning: "Parentesi sinistra della parte intera inferiore, la metà di apertura della funzione che arrotonda per difetto a un intero.",
    usage: "\\lfloor apre notazioni come \\lfloor x \\rfloor e \\lfloor n/2 \\rfloor. La parentesi della parte intera inferiore ha la barra in basso, a differenza di \\lceil, la cui barra è in alto. Essendo un delimitatore, può essere dimensionata con \\left\\lfloor o \\bigl\\lfloor. In teoria dei numeri la stessa parentesi compare in formule come la formula di Legendre per la potenza di un primo che divide n!. Se il vostro font o renderer mostra una semplice parentesi quadra, controllate di aver digitato \\lfloor e non [, che è un glifo diverso.",
  },
  "floor-right": {
    name: "Parte intera inferiore destra",
    meaning: "Parentesi destra della parte intera inferiore, che chiude la notazione della funzione di arrotondamento per difetto.",
    usage: "Chiudete ogni \\lfloor con \\rfloor, per esempio in \\lfloor x \\rfloor o nella divisione intera \\lfloor a/b \\rfloor che molti linguaggi di programmazione implementano per operandi positivi. Quando la parentesi sinistra è stata posta con \\left\\lfloor, quella destra deve essere \\right\\rfloor nello stesso gruppo matematico, altrimenti LaTeX segnala un \\right mancante. La coppia si usa anche per l'arrotondamento all'intero più vicino tramite \\lfloor x + 1/2 \\rfloor. Una macro per delimitatori accoppiati come \\floor{x} mantiene coerente la notazione nei documenti lunghi.",
  },
  "floor": {
    name: "Parte intera inferiore",
    meaning: "Arrotonda x per difetto al più grande intero minore o uguale a esso: la funzione parte intera inferiore.",
    usage: "La parte intera inferiore compare nella divisione intera, nella parte frazionaria \\{x\\} = x - \\lfloor x \\rfloor, nel punto medio della ricerca binaria \\lfloor (lo + hi)/2 \\rfloor e in somme di teoria dei numeri come la formula di Legendre. Per i numeri negativi arrotonda allontanandosi dallo zero: \\lfloor -2.5 \\rfloor = -3, il che differisce dal troncamento. La letteratura più vecchia scriveva [x] per la parte intera inferiore (la parentesi di Gauss), ma oggi si preferisce la notazione con le parentesi apposite perché non è ambigua. Usate \\left\\lfloor ... \\right\\rfloor attorno alle frazioni così che le parentesi si adattino all'altezza del contenuto.",
  },
  "double-vertical-bar": {
    name: "Doppia barra verticale",
    meaning: "Doppia barra verticale, il delimitatore delle norme e in alcuni contesti il simbolo di parallelismo.",
    usage: "\\| stampa due linee verticali e si usa soprattutto in coppia per le norme, \\|x\\|. Come simbolo isolato ha una spaziatura ordinaria, quindi quando intendete la relazione «è parallelo a» usate \\parallel, che aggiunge la spaziatura di una relazione. Per le norme si raccomandano \\lVert e \\rVert, perché indicano a LaTeX quale lato apre e quale chiude, dando la spaziatura corretta accanto agli operatori e ai segni meno. Può essere dimensionata con \\left\\| ... \\right\\| o \\big\\|. In modalità testo \\| non produce le barre: usate \\textbardbl o passate alla modalità matematica.",
  },
  "norm": {
    name: "Norma",
    meaning: "Racchiude un vettore o una funzione tra doppie barre per indicarne la norma, cioè la lunghezza o grandezza.",
    usage: "Le norme sono ovunque in analisi e in algebra lineare: la norma euclidea \\|x\\|_2, la norma del sup \\|f\\|_\\infty, la norma di Frobenius \\|A\\|_F e la disuguaglianza triangolare \\|x + y\\| \\le \\|x\\| + \\|y\\|. Un pedice dopo la barra di chiusura indica di quale norma si tratta. Scrivere \\lVert x \\rVert invece di \\| x \\| dà una spaziatura migliore in espressioni come \\|{-x}\\|, perché LaTeX conosce allora il ruolo di ciascuna barra. Per contenuti alti, come frazioni dentro la norma, usate \\left\\| ... \\right\\|. Le barre singole |x| sono riservate ai valori assoluti.",
  },
  "double-bracket-left": {
    name: "Doppia parentesi quadra sinistra",
    meaning: "Doppia parentesi quadra (cava) sinistra, usata per le parentesi semantiche, gli intervalli di interi e la notazione di Iverson.",
    usage: "Nella semantica dei linguaggi di programmazione \\llbracket e \\rrbracket indica il significato di un'espressione, come nella semantica denotazionale. I testi di tradizione francese e la combinatoria scrivono \\llbracket 1, n \\rrbracket per l'intervallo di interi \\{1, \\dots, n\\}, e alcuni autori la usano per la parentesi di Iverson. Il comando non fa parte del nucleo di LaTeX né dei font di simboli AMS, quindi richiede un pacchetto di simboli che lo fornisca; KaTeX lo supporta direttamente. Cresce solo con pacchetti che ne forniscono versioni estensibili, quindi per contenuti alti verificate la vostra configurazione. Accoppiatela con \\rrbracket.",
  },
  "double-bracket-right": {
    name: "Doppia parentesi quadra destra",
    meaning: "Doppia parentesi quadra destra, che chiude la notazione delle parentesi semantiche o degli intervalli di interi.",
    usage: "Chiudete \\llbracket con \\rrbracket per scrivere \\llbracket P \\rrbracket_\\sigma, il significato del programma P nello stato \\sigma, o l'intervallo di interi \\llbracket a, b \\rrbracket. Non simulatela con ]] o con ]\\!], che danno una forma e una spaziatura diverse dal glifo della parentesi cava. Gli autori che usano molte parentesi semantiche definiscono spesso una macro come \\sem{e}, così che lo stile della parentesi si possa cambiare in un solo punto, per esempio passando a [\\![ e ]\\!] se il font con la doppia parentesi non è disponibile.",
  },
  "double-brackets": {
    name: "Doppie parentesi quadre",
    meaning: "Racchiude un'espressione tra doppie parentesi quadre, per la semantica denotazionale o gli intervalli di interi.",
    usage: "Questa coppia di parentesi dà la funzione semantica nella semantica formale, \\llbracket x \\rrbracket_\\rho per il valore di x nell'ambiente \\rho, e l'intervallo discreto \\llbracket m, n \\rrbracket in combinatoria. Compare anche nella parentesi di Iverson e nella notazione del salto per le discontinuità nelle EDP numeriche, \\llbracket u \\rrbracket = u^+ - u^-. Poiché il glifo non è nei font predefiniti, il sorgente richiede un pacchetto di simboli; consultate la nota sui pacchetti in questa pagina. I tratti cavi la rendono visivamente distinta da parentesi ordinarie annidate.",
  },
  "parentheses": {
    name: "Parentesi tonde",
    meaning: "Parentesi tonde che crescono automaticamente fino all'altezza di ciò che racchiudono.",
    usage: "\\left( e \\right) misurano il loro contenuto e scelgono una dimensione adatta, quindi \\left( \\frac{a}{b} \\right)^2 ottiene parentesi alte mentre un semplice (x) resta piccolo. Ogni \\left richiede un \\right nello stesso gruppo, e un a capo dentro align non può separarli. Abusarne appesantisce le espressioni semplici, e \\left...\\right aggiunge un po' di spazio in più come atomo interno, il che può far apparire larga f\\left(x\\right); per gli argomenti delle funzioni spesso sono migliori \\bigl( ... \\bigr) o le parentesi semplici. Si dimensionano sull'elemento più alto, inclusi gli estremi delle sommatorie.",
  },
  "square-brackets": {
    name: "Parentesi quadre",
    meaning: "Parentesi quadre che si adattano al contenuto, per raggruppamenti, commutatori o intervalli chiusi.",
    usage: "Le parentesi quadre servono come livello successivo di raggruppamento all'esterno delle tonde, per l'intervallo chiuso [a, b], il commutatore [A, B] = AB - BA, il valore atteso \\mathbb{E}[X] e le matrici. Con \\left[ ... \\right] le parentesi si estendono attorno a frazioni, integrali o matrici, come in \\left[ \\frac{x^2}{2} \\right]_0^1 per le primitive valutate. In un ambiente bmatrix le parentesi sono già fornite, quindi non vi serve scrivere \\left[. Per parentesi annidate in un'espressione lunga, dimensioni manuali come \\Bigl[ ... \\Bigr] danno un controllo più fine.",
  },
  "curly-braces": {
    name: "Parentesi graffe",
    meaning: "Parentesi graffe che si estendono fino all'altezza del contenuto, per la notazione insiemistica per proprietà e le definizioni raggruppate.",
    usage: "Le graffe vanno precedute dalla barra rovesciata, \\{ e \\}, perché le graffe nude sono caratteri di raggruppamento di LaTeX e non stampano nulla. Con \\left\\{ ... \\right\\} crescono attorno a contenuti alti come \\left\\{ \\frac{p}{q} : q \\neq 0 \\right\\}. Per una barra separatrice nella notazione insiemistica che cresca anch'essa, usate \\middle| tra le due. Per le definizioni a tratti l'ambiente cases traccia già la graffa sinistra, quindi non serve scrivere a mano \\left\\{ ... \\right.. In modalità testo usate \\textbraceleft o semplicemente \\{ in modalità matematica.",
  },
  "vertical-bar": {
    name: "Barre verticali",
    meaning: "Barre verticali che si ridimensionano in base al contenuto, per valori assoluti e determinanti.",
    usage: "Usate \\left| ... \\right| quando un valore assoluto contiene una frazione o una somma, come in \\left| \\frac{a}{b} \\right|, e per i determinanti di matrici alte (anche se vmatrix è più semplice). Per LaTeX il semplice | è ambiguo: non sa distinguere una barra di apertura da una di chiusura, il che può rovinare la spaziatura attorno a un segno meno iniziale. Per risultati coerenti definite una macro con \\lvert e \\rvert, oppure usate \\left\\lvert ... \\right\\rvert. Per i separatori nella notazione insiemistica e per le probabilità condizionate usate invece \\mid o \\middle|.",
  },
  "big-parentheses": {
    name: "Parentesi grandi",
    meaning: "Parentesi fissate al secondo gradino di dimensione, più grandi di \\big ma più piccole di \\bigg.",
    usage: "TeX offre quattro dimensioni manuali: \\big, \\Big, \\bigg e \\Bigg. \\Big( si adatta attorno a singole frazioni o a sommatorie con estremi piccoli e, a differenza di \\left, non analizza il contenuto, quindi può attraversare gli a capo negli ambienti multiriga e dà risultati prevedibili. Per una spaziatura corretta usate \\Bigl( per aprire e \\Bigr) per chiudere, perché un \\Big da solo produce un atomo ordinario. Le dimensioni manuali sono spesso preferibili a \\left...\\right negli argomenti delle funzioni, dove \\left aggiunge spazio in più. Le dimensioni sono fisse, quindi non si riducono nei pedici.",
  },
  "bigg-parentheses": {
    name: "Parentesi molto grandi",
    meaning: "La più grande delle quattro dimensioni manuali dei delimitatori di TeX, per contenuti molto alti come le frazioni annidate.",
    usage: "\\Bigg( produce parentesi circa due volte e mezza più grandi della dimensione normale, adatte attorno a frazioni sovrapposte, grandi integrali con estremi o somme di frazioni. Poiché la dimensione è fissa, è prevedibile tra le righe di un align, dove \\left e \\right non possono essere separati. Usate \\Biggl e \\Biggr per una spaziatura corretta di apertura e chiusura. Se il contenuto è ancora più alto, \\left( ... \\right) può crescere oltre \\Bigg usando pezzi estensibili. La sequenza dalla più piccola alla più grande è \\big, \\Big, \\bigg, \\Bigg.",
  },
  "left-delimiter-with-invisible-right": {
    name: "Delimitatore sinistro con destro invisibile",
    meaning: "Mostra solo una parentesi sinistra ridimensionabile; \\right. è un delimitatore di chiusura invisibile che soddisfa l'accoppiamento.",
    usage: "Ogni \\left deve essere accoppiato a un \\right, e la forma con il punto \\right. permette di chiudere il gruppo senza stampare nulla. È utile quando un'espressione tra parentesi prosegue su un'altra riga di un align (aprite con \\left( su una riga, chiudete con \\right. e ripartite con \\left. ... \\right) sulla successiva), o per graffe su un solo lato. Le dimensioni delle due metà sono calcolate indipendentemente, quindi aggiungete un \\vphantom del contenuto alto per mantenerle uguali. Per le funzioni definite a tratti l'ambiente cases è una scelta più pulita di \\left\\{ ... \\right.",
  },
  "right-delimiter-with-invisible-left": {
    name: "Delimitatore destro con sinistro invisibile",
    meaning: "Stampa solo una parentesi di chiusura ridimensionabile; \\left. funge da partner di apertura invisibile.",
    usage: "\\left. è l'apertura invisibile che permette a \\right) di dimensionarsi sul contenuto. Un uso comune è la barra di valutazione \\left. \\frac{df}{dx} \\right|_{x=0}, dove deve comparire ed estendersi solo la linea verticale a destra. Serve anche a terminare una parentesi aperta su una riga precedente di un'equazione multiriga. Poiché ogni metà è dimensionata separatamente, inserite \\vphantom{...} con l'elemento più alto dell'altra riga per far corrispondere le altezze. Il punto in sé non viene stampato, ma aggiunge il piccolo spazio del delimitatore nullo.",
  },
  "half-open-interval-brackets": {
    name: "Parentesi di intervallo semiaperto",
    meaning: "Accoppia una parentesi quadra sinistra con una parentesi tonda destra: è la notazione di un intervallo semiaperto.",
    usage: "\\left e \\right non devono avere la stessa forma, quindi \\left[ ... \\right) scrive l'intervallo semiaperto [a, b), chiuso in a e aperto in b, comune in probabilità (le funzioni di ripartizione sono continue a destra su [x, \\infty)) e in teoria della misura. Le coppie miste gestiscono anche (a, b], scritto \\left( ... \\right]. Per intervalli semplici basta il semplice [0, 1) senza \\left/\\right, che è più pulito. Alcuni testi europei usano invece parentesi rovesciate, come in [a, b[, che potete digitare direttamente.",
  },
};

export default text;
