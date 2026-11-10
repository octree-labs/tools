import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/relations/<slug>. */
const text: SymbolPageTranslations = {
  "less-than": {
    name: "Segno di minore",
    meaning: "La relazione di minore, che afferma che la quantità a sinistra è strettamente più piccola di quella a destra.",
    usage: "Digitato direttamente in modalità matematica, < diventa una relazione con il giusto spazio intorno, come in 0 < x < 1 o in una disuguaglianza stretta di una dimostrazione epsilon-delta. Non usatelo come parentesi angolare per i prodotti scalari: per quello c'è \\langle. In modalità testo, con la vecchia codifica dei font predefinita, < può stampare un punto esclamativo capovolto, quindi scrivete \\textless o usate la modalità matematica. La sua forma non stretta è \\leq (o \\le), e la negazione è \\not< o \\nless. I motori di resa per il web come MathJax accettano anche \\lt, utile in HTML.",
  },
  "greater-than": {
    name: "Segno di maggiore",
    meaning: "La relazione di maggiore, che afferma che la quantità a sinistra è strettamente più grande di quella a destra.",
    usage: "In modalità matematica > è un simbolo di relazione e riceve automaticamente la spaziatura da relazione, quindi x > 0 non richiede spazi manuali. Chiude disuguaglianze strette come \\lambda_{\\max} > 0 o la condizione n > N nelle definizioni di limite. Non va usato come parentesi angolare di chiusura: per quello c'è \\rangle. In modalità testo, con la vecchia codifica dei font, il carattere può essere stampato come un punto interrogativo capovolto, quindi usate \\textgreater o la modalità matematica. I comandi correlati sono \\geq (o \\ge), \\gg per “molto maggiore” e \\ngtr per la sua negazione.",
  },
  "equivalent": {
    name: "Equivalenza",
    meaning: "Relazione a tre barre che significa identicamente uguale, congruente modulo n o logicamente equivalente.",
    usage: "La teoria dei numeri scrive a \\equiv b \\pmod{n} per la congruenza, l'analisi scrive f \\equiv 0 per dire che una funzione si annulla ovunque, e la logica lo usa per l'equivalenza logica tra formule. Abbinatelo a \\pmod{n} per il modulo tra parentesi o a \\bmod per la forma binaria a \\bmod n. È distinto da \\cong (isomorfismo o congruenza geometrica) e da \\triangleq o := (definizioni), anche se alcuni autori lo usano pure per le definizioni. Negatelo con \\not\\equiv. In fisica \\equiv introduce spesso un'abbreviazione: \\omega \\equiv 2\\pi f.",
  },
  "proportional-to": {
    name: "Proporzionalità",
    meaning: "Indica che una quantità è proporzionale a un'altra, cioè uguale a meno di un fattore costante.",
    usage: "La fisica scrive F \\propto 1/r^2 per le leggi dell'inverso del quadrato, e la statistica bayesiana vi ricorre di continuo: p(\\theta \\mid x) \\propto p(x \\mid \\theta)\\, p(\\theta), tralasciando la costante di normalizzazione. È una relazione, quindi la spaziatura è automatica. Non confondetelo con la lettera greca \\alpha, che in alcuni font gli somiglia ma non ha spaziatura da relazione. La variante \\varpropto ha una forma leggermente diversa. Per gli ordini di crescita nell'analisi degli algoritmi, \\sim o \\Theta sono di solito più chiari. Esplicitate la costante solo quando conta; altrimenti lo scopo di \\propto è proprio nasconderla.",
  },
  "similar-to": {
    name: "Simbolo di similitudine",
    meaning: "Relazione a tilde per “distribuito come”, asintoticamente equivalente, simile o equivalente rispetto a una relazione.",
    usage: "In probabilità X \\sim \\mathcal{N}(0, 1) si legge “X ha distribuzione normale standard”. In analisi asintotica f \\sim g significa f/g \\to 1, come nella formula di Stirling. L'algebra usa x \\sim y per una relazione di equivalenza, e la geometria lo usa per i triangoli simili. Come relazione ha spazio su entrambi i lati; per una tilde come accento su una lettera usate \\tilde{x}. Parenti stretti sono \\simeq (asintoticamente uguale o omotopicamente equivalente), \\approx (approssimativamente uguale) e \\thicksim, una versione più marcata. Come prefisso nel senso di “circa”, come in \\sim 10^3, la spaziatura può risultare strana; scrivete {\\sim}10^3.",
  },
  "congruent": {
    name: "Simbolo di congruenza",
    meaning: "Tilde sopra un segno di uguale, che indica l'isomorfismo tra strutture o la congruenza tra figure geometriche.",
    usage: "Gli algebristi scrivono G \\cong H per gruppi isomorfi e V \\cong V^{**} per spazi di dimensione finita, mentre la geometria usa \\triangle ABC \\cong \\triangle DEF per triangoli congruenti. Alcuni testi di fisica e ingegneria lo usano per “approssimativamente uguale”, ma \\approx è più chiaro a questo scopo. È diverso da \\simeq (a barra singola, usato per l'equivalenza omotopica o l'uguaglianza asintotica) e da \\equiv (tre barre). Per indicare l'applicazione, ponetela sopra il simbolo con \\overset{\\phi}{\\cong} o usate una freccia come \\xrightarrow{\\sim}.",
  },
  "subset-or-equal": {
    name: "Inclusione non stretta",
    meaning: "Afferma che ogni elemento dell'insieme a sinistra appartiene anche all'insieme a destra; i due insiemi possono coincidere.",
    usage: "Usate \\subseteq per l'inclusione che ammette l'uguaglianza, come in A \\subseteq A, e in definizioni come quella di una topologia chiusa rispetto alle unioni di sottofamiglie \\mathcal{U} \\subseteq \\tau. Molti autori usano il semplice \\subset con lo stesso significato, mentre altri riservano \\subset all'inclusione stretta, quindi conviene dichiarare la propria convenzione. Per un'inclusione stretta senza ambiguità usate \\subsetneq. La negazione è \\nsubseteq o \\not\\subseteq. Per dimostrare che due insiemi sono uguali, una dimostrazione standard mostra A \\subseteq B e B \\subseteq A.",
  },
  "proper-subset": {
    name: "Sottoinsieme proprio",
    meaning: "Simbolo di sottoinsieme con la barra inferiore tagliata: l'insieme a sinistra è contenuto in quello a destra ma non è uguale a esso.",
    usage: "\\subsetneq esprime esplicitamente l'inclusione stretta, eliminando l'ambiguità di \\subset, che alcuni testi trattano come non stretta. Compare in catene come \\mathbb{N} \\subsetneq \\mathbb{Z} \\subsetneq \\mathbb{Q} e negli argomenti di massimalità per gli ideali. Le varianti includono \\subsetneqq (doppia barra tagliata) e \\varsubsetneq, il cui tratto attraversa solo la barra. Non confondetelo con \\nsubseteq, che significa “non è affatto un sottoinsieme”. Il suo corrispondente per i sovrainsiemi è \\supsetneq. È una relazione, quindi la spaziatura intorno è gestita automaticamente. Per dimostrare che un'inclusione è stretta, mostrate A \\subseteq B ed esibite un elemento di B che non sta in A.",
  },
  "superset": {
    name: "Sovrainsieme",
    meaning: "Relazione di sovrainsieme: l'insieme a sinistra contiene quello a destra (spesso in senso stretto, a seconda della convenzione).",
    usage: "\\supset è l'immagine speculare di \\subset, quindi A \\supset B dice che B è contenuto in A. Come per \\subset, gli autori non concordano sul fatto che ammetta l'uguaglianza; dichiarate la vostra convenzione oppure usate \\supseteq e \\supsetneq per eliminare ogni dubbio. I testi di logica di tradizioni più antiche, compresi i Principia Mathematica, usavano \\supset per l'implicazione materiale, quindi potete trovare p \\supset q negli articoli di filosofia. Nei testi nuovi \\to o \\implies sono più chiari per l'implicazione. La negazione è \\not\\supset, e \\nsupseteq copre la versione non stretta.",
  },
  "superset-or-equal": {
    name: "Sovrainsieme non stretto",
    meaning: "Relazione di sovrainsieme o uguale: l'insieme a sinistra comprende ogni elemento dell'insieme a destra.",
    usage: "Leggete A \\supseteq B come “A contiene B”, eventualmente con uguaglianza. È naturale quando il soggetto è l'insieme più grande, come in \\overline{A} \\supseteq A per le chiusure o in \\ker f \\supseteq \\operatorname{im} g negli argomenti sulle successioni esatte. È semplicemente \\subseteq letto nell'altra direzione, quindi scegliete la forma che mette per primo l'insieme importante. La versione stretta è \\supsetneq e la negazione è \\nsupseteq. Nella teoria dei reticoli e degli ordini esprime anche l'ordine di inclusione inverso sulle famiglie di insiemi.",
  },
  "perpendicular": {
    name: "Perpendicolarità",
    meaning: "Relazione di perpendicolarità, che indica rette, vettori o sottospazi ortogonali e l'indipendenza di variabili.",
    usage: "La geometria scrive AB \\perp CD, l'algebra lineare scrive u \\perp v quando \\langle u, v \\rangle = 0 e W^\\perp per un complemento ortogonale, e la teoria dei numeri usa talvolta a \\perp b per interi coprimi. I probabilisti scrivono X \\perp Y per l'indipendenza, spesso raddoppiato come X \\perp\\!\\!\\!\\perp Y per imitare il simbolo dedicato di indipendenza. \\perp è una relazione con spazio su entrambi i lati, mentre \\bot ha la stessa forma ma spaziatura ordinaria, adatta al falso logico o a un elemento minimo. In un apice come W^\\perp va bene l'uno o l'altro, perché lì la spaziatura è soppressa.",
  },
  "parallel": {
    name: "Parallelismo",
    meaning: "Relazione che significa “è parallelo a”, per rette, piani o vettori; è anche un operatore di composizione parallela.",
    usage: "La geometria scrive \\ell_1 \\parallel \\ell_2, la fisica scrive componenti come F_\\parallel (spesso tramite \\|), e l'elettrotecnica usa R_1 \\parallel R_2 per resistori in parallelo. I calcoli di processo lo usano per la composizione parallela, P \\parallel Q. Il glifo è lo stesso di \\|, ma \\parallel riceve la spaziatura da relazione, quindi usatelo tra oggetti e riservate \\| (o \\lVert, \\rVert) ai delimitatori di norma. La sua negazione è \\nparallel. Per la divergenza di Kullback-Leibler D(P \\parallel Q) la spaziatura da relazione è lo standard, anche se alcuni preferiscono \\|.",
  },
  "not-parallel": {
    name: "Negazione del parallelismo",
    meaning: "Relazione di parallelismo negata, che afferma che due rette o due vettori non sono paralleli.",
    usage: "\\nparallel traccia una barra obliqua attraverso la doppia barra e si usa nei problemi di geometria come \\ell_1 \\nparallel \\ell_2, il che implica che le rette si incontrano (nel piano) o sono sghembe (nello spazio). È una relazione con la stessa spaziatura di \\parallel. Scrivere \\not\\parallel può funzionare, ma la barra sovrapposta è spesso mal centrata, quindi il glifo dedicato ha un aspetto migliore. Esiste anche \\nshortparallel, una variante più corta. In fisica una componente non parallela si scrive più spesso con \\perp.",
  },
  "much-less-than": {
    name: "Molto minore",
    meaning: "Relazione di molto minore, che dice che la quantità a sinistra è più piccola di quella a destra di ordini di grandezza.",
    usage: "La fisica e l'ingegneria usano \\ll per i regimi di approssimazione: v \\ll c per il moto non relativistico, o x \\ll 1 per giustificare \\sin x \\approx x. La teoria analitica dei numeri usa la notazione di Vinogradov f \\ll g, che significa f = O(g), e la teoria della misura scrive \\mu \\ll \\nu per l'assoluta continuità. È un unico glifo, quindi non digitate << o < <, che danno due simboli di relazione separati con una spaziatura sbagliata. La versione tripla \\lll esiste per disuguaglianze ancora più forti.",
  },
  "much-greater-than": {
    name: "Molto maggiore",
    meaning: "Relazione di molto maggiore, che indica che una quantità supera di gran lunga un'altra.",
    usage: "Usate \\gg nei ragionamenti asintotici o fisici, come n \\gg 1 per le approssimazioni a grandi campioni, kT \\gg \\hbar\\omega per il limite classico, o la notazione di Vinogradov f \\gg g, che significa g = O(f). È un unico simbolo con spaziatura da relazione; digitando >> si ottengono due relazioni separate. Esiste anche il più forte \\ggg. Poiché \\gg non è quantitativo, gli articoli lo fanno spesso seguire da un'affermazione precisa, per esempio n \\gg \\log(1/\\delta) insieme alla costante coinvolta. I ragionamenti asintotici in fisica enunciano spesso il regime una volta sola, per esempio L \\gg \\lambda, e poi trascurano i termini piccoli.",
  },
  "precedes": {
    name: "Relazione “precede”",
    meaning: "Relazione “precede”, per ordinamenti stretti che non sono l'ordinario minore numerico.",
    usage: "\\prec esprime ordini stretti astratti: le preferenze in economia (x \\prec y significa che y è strettamente preferito), la maggiorazione nell'analisi matriciale, gli ordini di dominanza sulle partizioni e la relazione “accade prima di” nei sistemi distribuiti. La sua forma curva segnala che l'ordine non è il < numerico. La versione non stretta è \\preceq, e \\preccurlyeq dà una variante a barra curva preferita in alcuni testi. L'algebra lineare scrive A \\prec B per l'ordine di Loewner, nel senso che B - A è definita positiva. Tra le negazioni c'è \\nprec.",
  },
  "succeeds": {
    name: "Relazione “segue”",
    meaning: "Relazione “segue”, inversa di \\prec, per ordinamenti stretti astratti.",
    usage: "\\succ si legge “segue” o “è preferito a”: in microeconomia x \\succ y significa che x è strettamente preferito a y, e nell'analisi matriciale A \\succ 0 afferma che A è definita positiva (ordine di Loewner). Gli articoli di ottimizzazione lo usano nei vincoli semidefiniti. È un simbolo di relazione, quindi la spaziatura è automatica. La forma non stretta è \\succeq, la forma a barra curva \\succcurlyeq e la negazione \\nsucc. Evitate > per questi ordini, perché i lettori lo intenderebbero come un confronto numerico.",
  },
  "precedes-or-equal": {
    name: "Relazione “precede o uguale”",
    meaning: "Relazione “precede o uguale”, versione non stretta di \\prec per ordini parziali e di preferenza.",
    usage: "La teoria degli ordini scrive x \\preceq y per un ordine parziale generico, riservando \\le ai numeri. Gli economisti lo usano per la preferenza debole, e chi si occupa di analisi matriciale scrive A \\preceq B quando B - A è semidefinita positiva. Nell'ottimizzazione convessa la disuguaglianza generalizzata x \\preceq_K y usa un pedice per il cono. \\preccurlyeq ha un aspetto simile, con la barra inferiore curva, e alcuni autori lo preferiscono per evitare confusione con \\leq. Il simbolo inverso è \\succeq, e \\npreceq ne è la negazione.",
  },
  "succeeds-or-equal": {
    name: "Relazione “segue o uguale”",
    meaning: "Relazione “segue o uguale”, vista più spesso in A \\succeq 0 per le matrici semidefinite positive.",
    usage: "I vincoli della programmazione semidefinita si scrivono X \\succeq 0, nel senso che X è simmetrica semidefinita positiva, e l'ordine di Loewner confronta le matrici come A \\succeq B. Gli economisti usano \\succeq per la preferenza debole, letta “buono almeno quanto”. È una relazione con spaziatura standard. La versione stretta è \\succ, la variante curva \\succcurlyeq e la negazione \\nsucceq. Per i confronti numerici restate su \\geq, così che i lettori non vadano a cercare un ordine non standard. In un programma semidefinito il vincolo è di solito elencato su una riga a sé dopo s.t.",
  },
  "asymptotic": {
    name: "Relazione asintotica",
    meaning: "Relazione di equivalenza asintotica: due funzioni crescono con la stessa velocità a meno di fattori costanti.",
    usage: "In analisi e in teoria dei numeri f \\asymp g significa che esistono costanti c, C > 0 con c g \\le f \\le C g per argomenti grandi, il che equivale a f = \\Theta(g) in informatica. È più debole di f \\sim g, che richiede che il rapporto tenda a 1. Il glifo, una coppia di archi contrapposti, non va confuso con \\approx né con \\smile e \\frown. È una relazione, quindi la spaziatura è automatica. Alcuni testi di fisica lo usano anche in senso lato per “asintoticamente uguale”, quindi definitelo se la precisione conta.",
  },
  "defined-as": {
    name: "Simbolo di definizione (due punti e uguale)",
    meaning: "Due punti seguiti da uguale, il segno di definizione: il membro sinistro è definito uguale al membro destro.",
    usage: "Scrivere f(x) := x^2 + 1 indica una definizione anziché un'affermazione di uguaglianza, e i due punti stanno dal lato dell'oggetto che si definisce (=: inverte la direzione). Digitati direttamente, i due punti e il segno di uguale sono entrambi relazioni, quindi TeX li compone senza spazio tra loro, ma i due punti non sono centrati verticalmente rispetto al segno di uguale, il che infastidisce alcuni tipografi. Il comando \\coloneqq di un pacchetto di strumenti matematici corregge questo allineamento. Nello pseudocodice indica anche l'assegnazione, x := x + 1. Alternative sono \\triangleq e \\stackrel{\\text{def}}{=}.",
  },
  "triangle-equal": {
    name: "Uguale con triangolo",
    meaning: "Segno di uguale sormontato da un piccolo triangolo, letto “è definito come”.",
    usage: "Gli articoli di elaborazione dei segnali, teoria del controllo e teoria dell'informazione preferiscono spesso \\triangleq per le definizioni, come in H(X) \\triangleq -\\sum p(x) \\log p(x). Svolge lo stesso ruolo di := ma è simmetrico, quindi non indica quale lato sia nuovo. Alcuni lettori non lo conoscono, quindi menzionate la convenzione una volta nella sezione sulle notazioni. Alternative sono \\stackrel{\\text{def}}{=} o \\overset{\\mathrm{def}}{=}, e \\equiv in fisica. È una relazione, quindi la spaziatura è automatica. Esplicitate la convenzione per qualsiasi lettore esterno al vostro settore.",
  },
};

export default text;
