import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/math/<slug>. */
const text: SymbolPageTranslations = {
  "addition": {
    name: "Addizione",
    meaning: "Somma due quantità; è il segno più binario, usato anche come segno unario per i numeri positivi.",
    usage: "Digitando + in modalità matematica si ottiene un operatore binario, quindi TeX inserisce automaticamente uno spazio medio su ciascun lato, come in a + b. Quando il più apre un'espressione o segue un altro operatore o una relazione, come in -(+3) o x = +1, TeX lo tratta come unario ed elimina lo spazio. In un'equazione multline o split spezzata prima di un più, scrivete {}+ all'inizio della riga di continuazione per ripristinare la spaziatura binaria. Per un più in apice, come nello ione Na^+ o nell'insieme \\mathbb{R}^+, non servono graffe. Evitate \\oplus, a meno che non intendiate una somma diretta o lo XOR, che è un simbolo diverso.",
  },
  "subtraction": {
    name: "Sottrazione",
    meaning: "Sottrae una quantità da un'altra; in modalità matematica il tasto del trattino diventa un vero segno meno, non un trattino.",
    usage: "In modalità matematica il trattino viene convertito in un vero segno meno, più lungo del trattino testuale e con la spaziatura di un operatore binario in a - b. Fuori dalla modalità matematica si ottiene solo un trattino corto, quindi un numero negativo nel testo corrente va comunque scritto $-5$ e non digitato così com'è. Quando il meno è unario, come in -x o e^{-t}, TeX elimina automaticamente lo spazio attorno. Non confondetelo con \\setminus, che indica la differenza insiemistica A \\setminus B, né con il trattino medio usato per gli intervalli. Per un meno in apice, come in x^{-1} o Cl^-, le graffe servono solo quando segue più di un carattere.",
  },
  "multiplication": {
    name: "Moltiplicazione",
    meaning: "Produce il segno di croce ×, usato per la moltiplicazione, il prodotto vettoriale e il prodotto cartesiano.",
    usage: "In aritmetica \\times scrive 3 \\times 4 o la notazione scientifica come 6.02 \\times 10^{23}. In algebra lineare e in fisica è il prodotto vettoriale, \\mathbf{a} \\times \\mathbf{b}, e indica anche le dimensioni di una matrice, come una matrice m \\times n. La teoria degli insiemi lo usa per il prodotto cartesiano A \\times B. Confrontatelo con \\cdot, la scelta abituale per il prodotto scalare e per la moltiplicazione tra variabili, e con l'asterisco *, che di norma indica la convoluzione. L'operatore grande \\bigtimes non fa parte di LaTeX standard, quindi per un prodotto cartesiano indicizzato molti autori scrivono invece \\prod.",
  },
  "division": {
    name: "Divisione",
    meaning: "Produce l'obelo ÷, il segno di divisione delle elementari con un punto sopra e uno sotto una barra.",
    usage: "L'obelo compare nelle schede di aritmetica, nelle espressioni in stile calcolatrice e in alcune tabelle, come in 12 \\div 4 = 3. La matematica di ricerca non lo usa quasi mai: scrivete invece una frazione con \\frac{12}{4}, una barra in linea 12/4 o i due punti per i rapporti. In alcuni paesi l'obelo è evitato del tutto, e la norma ISO 80000-2 ne sconsiglia l'uso. Poiché \\div è un operatore binario, TeX lo spazia come + e -. Non confondetelo con \\mid o con la barra /, che in teoria dei numeri e dei gruppi indicano rispettivamente la divisibilità e il quoziente, per esempio G/N.",
  },
  "fraction": {
    name: "Frazione",
    meaning: "Compone una frazione a due piani con numeratore a sopra il denominatore b, separati da una linea orizzontale.",
    usage: "\\frac prende due argomenti, numeratore e denominatore, quindi \\frac{a}{b} è solo un segnaposto per un rapporto qualsiasi, come \\frac{dy}{dx} o \\frac{n(n+1)}{2}. In linea si riduce alla dimensione del testo, il che può risultare compresso; \\dfrac forza la dimensione display e \\tfrac quella testuale. Per rapporti semplici in linea una barra, a/b, si legge spesso meglio di una frazione a due piani. I coefficienti binomiali usano \\binom{n}{k}, non \\frac senza linea. Le frazioni continue sono più pulite con \\cfrac, che mantiene ogni livello a grandezza piena. Quando una frazione sta tra parentesi, usate \\left( e \\right) perché le parentesi crescano fino alla sua altezza.",
  },
  "square-root": {
    name: "Radice quadrata",
    meaning: "Traccia un segno di radice sopra l'argomento, dando la radice quadrata principale di x.",
    usage: "\\sqrt allunga automaticamente il radicale fino a coprire ciò che mettete tra graffe, quindi \\sqrt{x^2 + y^2} ottiene un vinculum più lungo e un segno più alto. È il modo standard di scrivere la norma euclidea, la formula risolutiva delle equazioni di secondo grado e la deviazione standard come \\sqrt{\\operatorname{Var}(X)}. Radicali su argomenti di altezze diverse possono apparire irregolari; aggiungere \\vphantom{y} o \\mathstrut all'interno fa combaciare radici vicine. Per un indice, come nella radice cubica, usate l'argomento opzionale \\sqrt[3]{x}. Nel testo in linea, x^{1/2} è talvolta più chiaro di un radicale su una frazione alta.",
  },
  "n-th-root": {
    name: "Radice n-esima",
    meaning: "Scrive la radice n-esima di x, con l'indice n collocato nell'angolo del segno di radice.",
    usage: "L'indice va tra parentesi quadre prima del radicando, quindi \\sqrt[3]{8} = 2 è una radice cubica e \\sqrt[n]{x} denota x^{1/n}. Compare nel criterio della radice per le serie, \\limsup \\sqrt[n]{|a_n|}, e nelle medie geometriche \\sqrt[n]{x_1 x_2 \\cdots x_n}. TeX a volte colloca l'indice in modo goffo, specie se è alto; \\leftroot{} e \\uproot{} lo spostano, come in \\sqrt[\\leftroot{-2}\\uproot{2}n]{x}. Tenete l'indice breve: per esponenti complicati, scrivere la potenza x^{1/(k+1)} è più leggibile di un radicale.",
  },
  "summation": {
    name: "Sommatoria",
    meaning: "Somma una successione di termini al variare dell'indice i da 1 a n, con l'operatore grande sigma maiuscola.",
    usage: "\\sum è un operatore grande: in display gli estremi i=1 e n stanno sotto e sopra la sigma, mentre in linea si spostano a lato come pedice e apice. Aggiungete \\limits per forzare gli estremi impilati in linea, o \\nolimits per averli a lato in display, anche se gli estremi impilati in linea possono alterare l'interlinea. Per condizioni su più righe sotto la sigma usate \\substack{0 \\le i \\le m \\\\ 0 < j < n}. Non usate la lettera greca \\Sigma per la sommatoria: è un simbolo ordinario più piccolo, senza spaziatura da operatore. Usi tipici sono le serie, i valori attesi e \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}.",
  },
  "product": {
    name: "Produttoria",
    meaning: "Moltiplica una successione di fattori per i da 1 a n, con l'operatore grande pi maiuscola.",
    usage: "\\prod si comporta come \\sum: gli estremi stanno sopra e sotto in stile display e a lato nel testo in linea. Scrive i fattoriali come n! = \\prod_{i=1}^{n} i, le verosimiglianze L(\\theta) = \\prod_{i} p(x_i \\mid \\theta) e i prodotti di Eulero sui primi. Non sostituitelo con la lettera greca \\Pi, che è un simbolo ordinario di dimensione fissa. La versione capovolta \\coprod denota i coprodotti in teoria delle categorie. Quando la produttoria è una verosimiglianza di cui si prenderà il logaritmo, è comune mostrare esplicitamente il passaggio a una somma, dato che \\log trasforma \\prod in \\sum.",
  },
  "integral": {
    name: "Integrale",
    meaning: "Scrive il segno di integrale definito con estremo inferiore a ed estremo superiore b.",
    usage: "A differenza di \\sum, gli estremi di \\int stanno a lato per impostazione predefinita anche in display; aggiungete \\limits, come in \\int\\limits_a^b, se il vostro stile li richiede impilati. Mettete uno spazio sottile \\, prima del differenziale, come in \\int_a^b f(x)\\,dx; alcuni autori usano una d dritta con \\mathrm{d}x. Gli integrali multipli hanno comandi dedicati, \\iint e \\iiint, che spaziano i segni meglio di \\int ripetuto. Gli integrali di linea su curve chiuse usano \\oint. Per la barra di valutazione dopo l'integrazione scrivete \\Big|_a^b oppure \\left. F(x) \\right|_a^b.",
  },
  "limit": {
    name: "Limite",
    meaning: "Scrive l'operatore di limite con x che tende a infinito posto sotto «lim».",
    usage: "\\lim è un nome di operatore predefinito, quindi viene stampato in tondo dritto e, in display, colloca il pedice x \\to \\infty direttamente sotto. In linea il pedice si sposta a lato per mantenere ordinata l'interlinea. La freccia interna è \\to, alias breve di \\rightarrow. I limiti unilaterali si scrivono x \\to 0^+ o x \\downarrow 0. Gli operatori affini \\limsup e \\liminf funzionano allo stesso modo. Se vi serve una parola personalizzata simile a un limite, con pedici impilati, definitela con \\DeclareMathOperator* (l'asterisco abilita i limiti) invece di scrivere \\text{lim}.",
  },
  "infinity": {
    name: "Infinito",
    meaning: "Traccia la lemniscata ∞, che rappresenta una quantità illimitata o un limite che cresce senza limiti.",
    usage: "\\infty compare in limiti come x \\to \\infty, negli integrali impropri \\int_0^\\infty e^{-x}\\,dx e negli estremi delle serie \\sum_{n=1}^{\\infty}. Indica anche la norma del sup \\|f\\|_\\infty, lo spazio L^\\infty e le funzioni lisce C^\\infty. Scrivete -\\infty e +\\infty con il segno attaccato; TeX spazia correttamente il segno come unario. Ricordate che \\infty non è un numero reale, quindi un intervallo che lo contiene va aperto da quel lato, come in [0, \\infty). Per la retta reale estesa, \\overline{\\mathbb{R}} è una notazione diffusa.",
  },
  "approximately-equal": {
    name: "Circa uguale (approssimazione)",
    meaning: "Afferma che due valori sono approssimativamente uguali, come una stima numerica o una costante arrotondata.",
    usage: "Usate \\approx per approssimazioni numeriche come \\pi \\approx 3.14159 e per sviluppi al primo ordine come \\sin x \\approx x per x piccolo. È una relazione, quindi TeX gli dà uno spazio ampio come a =. Diversi simboli simili hanno altri significati: \\simeq spesso indica uguaglianza asintotica o isomorfismo, \\sim significa asintotico o «distribuito come», \\cong denota congruenza o isomorfismo, e \\approxeq è una variante più rara. Nei testi di finanza e ingegneria \\approx segnala di solito risultati arrotondati; indicate la precisione, per esempio alla terza cifra decimale, così che il lettore sappia quanto è grossolana la stima.",
  },
  "not-equal": {
    name: "Simbolo di diverso",
    meaning: "Dice che due quantità non sono uguali; è la negazione del segno di uguale.",
    usage: "\\neq e il suo alias breve \\ne producono lo stesso segno di uguale barrato, e si può usare l'uno o l'altro. Compare in condizioni come x \\neq 0, in affermazioni di distinzione i \\neq j e, negli articoli orientati alla programmazione, come test di disuguaglianza. Anche \\not= funziona, ma la posizione della barra può differire leggermente dal glifo dedicato. Nei testi di informatica evitate di digitare != in modalità matematica: viene stampato come un punto esclamativo seguito da un segno di uguale. Per «non equivalente» o «non congruo» usate \\not\\equiv o \\ncong anziché \\neq.",
  },
  "less-than-or-equal": {
    name: "Minore o uguale",
    meaning: "Esprime che il membro di sinistra è minore o uguale a quello di destra.",
    usage: "\\leq ha un alias più breve, \\le, ed entrambi stampano lo stesso glifo con una sola barra orizzontale. Digitando <= in modalità matematica si ottengono due simboli separati, quindi usate sempre il comando. Disuguaglianze come la disuguaglianza triangolare \\|x+y\\| \\leq \\|x\\|+\\|y\\| e limitazioni come 0 \\leq p \\leq 1 sono il suo pane quotidiano. La variante inclinata \\leqslant è preferita in alcune tradizioni europee e russe, e \\leqq ha una doppia barra. In teoria degli ordini e dei reticoli \\leq indica un ordine parziale, mentre \\preceq si usa per preordini più generali.",
  },
  "greater-than-or-equal": {
    name: "Maggiore o uguale",
    meaning: "Esprime che il membro di sinistra è maggiore o uguale a quello di destra.",
    usage: "\\geq e il suo alias \\ge sono intercambiabili. Digitando >= in modalità matematica si stampano due caratteri separati, quindi usate il comando. Contesti comuni sono le limitazioni inferiori come n \\geq 1, la disuguaglianza tra media aritmetica e geometrica e i vincoli di ottimizzazione come x_i \\geq 0. La forma inclinata \\geqslant è preferita da alcune riviste, e \\geqq ha una doppia barra. In teoria degli ordini la relazione inversa \\succeq generalizza \\geq. Quando possibile mantenete una catena di disuguaglianze orientata in un solo verso, perché a \\leq b \\leq c si legge più facilmente che mescolando \\leq e \\geq.",
  },
  "implies": {
    name: "Implicazione",
    meaning: "Scrive una lunga freccia doppia per l'implicazione logica: l'enunciato a sinistra implica quello a destra.",
    usage: "\\implies produce \\Longrightarrow circondato da uno spazio extra ampio, adatto alle implicazioni tra enunciati completi, come in x > 2 \\implies x^2 > 4. Per l'implicazione tra formule all'interno di un'espressione logica, molti logici preferiscono il più corto \\Rightarrow o \\to, senza il grande spazio. Il suo inverso è \\impliedby. Nelle dimostrazioni evitate di impilare diversi \\implies di seguito per tutta la pagina: frasi complete con «quindi» si leggono spesso meglio. Nella notazione della logica proposizionale, p \\to q è più comune di p \\implies q.",
    example: "x^2 = 4 \\implies x = 2 \\text{ o } x = -2",
  },
  "if-and-only-if": {
    name: "Equivalenza (se e solo se)",
    meaning: "Scrive una lunga freccia doppia a due punte per l'equivalenza logica, letta «se e solo se».",
    usage: "\\iff produce \\Longleftrightarrow con uno spazio extra ampio su entrambi i lati. Collega due enunciati che si implicano a vicenda, come in un teorema del tipo n \\text{ pari} \\iff n^2 \\text{ pari}. I testi di logica preferiscono spesso \\leftrightarrow o \\Leftrightarrow per il bicondizionale all'interno delle formule, riservando \\iff agli enunciati in prosa. A causa di quella spaziatura, \\iff risulta troppo largo in pedici compatti o nelle condizioni della notazione insiemistica. Non confondetelo con \\equiv, che significa identicamente uguale o congruo modulo n.",
  },
  "for-all": {
    name: "Quantificatore universale",
    meaning: "Produce il quantificatore universale ∀, letto «per ogni» o «per tutti».",
    usage: "\\forall apre gli enunciati quantificati universalmente, come nella definizione epsilon-delta \\forall \\varepsilon > 0\\ \\exists \\delta > 0. TeX lo tratta come simbolo ordinario, quindi non c'è spazio automatico dopo la variabile vincolata; aggiungete \\, o \\ oppure un separatore come i due punti o un punto, secondo la vostra convenzione. Nelle dimostrazioni ricche di prosa molte guide di stile preferiscono scrivere «per ogni» a parole invece di \\forall. Nel lambda calcolo tipato e nella teoria dei tipi introduce anche i tipi polimorfi, per esempio \\forall \\alpha.\\, \\alpha \\to \\alpha.",
  },
  "exists": {
    name: "Quantificatore esistenziale",
    meaning: "Produce il quantificatore esistenziale ∃, letto «esiste» o «per qualche».",
    usage: "\\exists afferma che almeno un elemento soddisfa una proprietà, come in \\exists x \\in \\mathbb{R} : x^2 = 2. L'unicità si scrive \\exists! (esiste esattamente uno), e \\nexists dà il simbolo negato per «non esiste». Come \\forall è un simbolo ordinario, quindi inserite uno spazio sottile o i due punti dopo la variabile vincolata per leggibilità. L'ordine dei quantificatori conta: \\forall x\\, \\exists y è diverso da \\exists y\\, \\forall x, quindi mantenetelo nella sequenza voluta. Nella scrittura logica formale, le parentesi attorno al campo d'azione, \\exists x\\,(P(x)), evitano ambiguità.",
  },
  "element-of": {
    name: "Appartenenza",
    meaning: "Esprime l'appartenenza: l'elemento a sinistra appartiene all'insieme a destra.",
    usage: "\\in è la relazione fondamentale di appartenenza, come in x \\in \\mathbb{R} o n \\in \\mathbb{N}, e riceve la spaziatura di relazione. Il suo speculare \\ni si legge «contiene come elemento», e \\notin lo nega. Non confondetelo con \\epsilon o \\varepsilon, lettere greche dall'aspetto simile ma con spaziatura e significato diversi. Nelle somme e nella notazione insiemistica vincola l'indice, come in \\sum_{x \\in S} f(x) o \\{x \\in X : f(x) > 0\\}. Per la relazione di inclusione tra due insiemi usate \\subseteq, non \\in.",
  },
  "not-element-of": {
    name: "Non appartenenza",
    meaning: "Esprime la non appartenenza: l'elemento a sinistra non appartiene all'insieme indicato.",
    usage: "\\notin è una versione barrata dedicata di \\in, composta come relazione, come in \\sqrt{2} \\notin \\mathbb{Q}. Scrivere \\not\\in dà un risultato simile, ma \\notin posiziona meglio la barra ed è la scelta standard. I suoi compagni naturali sono \\in e \\ni, e per negare l'inclusione si usa \\not\\subset o \\nsubseteq. Contesti tipici sono le dimostrazioni per assurdo e le descrizioni dei complementari, come x \\in A^c \\iff x \\notin A. Nei quantificatori, \\forall x \\notin S è un'abbreviazione accettabile, ma esplicitare il dominio è più chiaro.",
  },
  "subset": {
    name: "Sottoinsieme",
    meaning: "Indica che un insieme è contenuto in un altro; spesso letto come sottoinsieme proprio o stretto.",
    usage: "Le convenzioni variano: alcuni autori usano \\subset per qualsiasi sottoinsieme, altri lo riservano ai sottoinsiemi propri e usano \\subseteq quando è ammessa l'uguaglianza. Per non lasciare ambiguità, molti articoli scrivono \\subseteq per «sottoinsieme o uguale» e \\subsetneq per «sottoinsieme proprio», dichiarando la convenzione una volta sola. La relazione inversa è \\supset. Enunciati tipici sono \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} e le inclusioni tra sottospazi in algebra lineare. La negazione \\not\\subset funziona, e \\nsubseteq fornisce un glifo più pulito per la negazione di «sottoinsieme o uguale». Qualunque lettura adottiate, evitate di alternarle nello stesso documento.",
  },
  "union": {
    name: "Unione",
    meaning: "Forma l'unione di insiemi: tutti gli elementi che appartengono ad almeno uno di essi.",
    usage: "\\cup è un operatore binario, come in A \\cup B, e riceve uno spazio medio su entrambi i lati. Per l'unione su una famiglia indicizzata usate l'operatore grande \\bigcup, che in display impila gli estremi: \\bigcup_{i=1}^{\\infty} A_i. L'unione disgiunta si scrive spesso \\sqcup o \\dot\\cup. In probabilità A \\cup B corrisponde all'evento «A oppure B», da cui P(A \\cup B) = P(A) + P(B) - P(A \\cap B). Non usate la lettera U né il \\lor logico al posto dell'unione insiemistica.",
  },
  "intersection": {
    name: "Intersezione",
    meaning: "Forma l'intersezione di insiemi: gli elementi comuni a tutti.",
    usage: "\\cap è un operatore binario scritto tra insiemi, come in A \\cap B, mentre \\bigcap è la versione come operatore grande per le famiglie, \\bigcap_{n} U_n. In probabilità rappresenta gli eventi congiunti, quindi P(A \\cap B) = P(A)P(B) definisce l'indipendenza. Il suo corrispettivo logico è \\land (e), e il meet della teoria dei reticoli \\wedge gli somiglia ma è un glifo diverso. Le leggi di De Morgan lo collegano all'unione: (A \\cup B)^c = A^c \\cap B^c. Se A \\cap B = \\emptyset, gli insiemi sono disgiunti.",
  },
  "empty-set": {
    name: "Insieme vuoto",
    meaning: "Denota l'insieme vuoto, l'unico insieme che non contiene alcun elemento.",
    usage: "\\emptyset stampa il glifo predefinito dell'insieme vuoto, un cerchio barrato. Molti matematici preferiscono la forma più rotonda \\varnothing, distinta da uno zero barrato e comune nei testi moderni. Sceglietene una e usatela in modo coerente. Usi tipici sono la disgiunzione A \\cap B = \\emptyset e i risultati della notazione insiemistica. Non confondetelo con la lettera scandinava Ø né con \\phi e \\varphi. Anche scrivere \\{\\} per l'insieme vuoto è accettabile, ma notate che \\{\\emptyset\\} è un insieme con un elemento.",
  },
  "partial-derivative": {
    name: "Derivata parziale",
    meaning: "Scrive la ∂ ricurva delle derivate parziali, che in topologia indica anche la frontiera di un insieme.",
    usage: "\\partial compare nelle derivate parziali come \\frac{\\partial f}{\\partial x} e nelle derivate miste \\frac{\\partial^2 f}{\\partial x\\,\\partial y}. In topologia e geometria, \\partial A è la frontiera di un insieme o il bordo di una varietà, usato nel teorema di Stokes \\int_{\\partial M} \\omega = \\int_M d\\omega. Per forme brevi con pedice, \\partial_x f e \\partial_t u sono comuni negli articoli di EDP. Non confondetelo con \\delta (variazione) o con d (derivata totale). Uno spazio sottile tra i fattori \\partial al denominatore migliora la spaziatura.",
  },
  "nabla": {
    name: "Nabla",
    meaning: "Scrive il nabla ∇, l'operatore differenziale vettoriale per gradiente, divergenza e rotore.",
    usage: "\\nabla f è il gradiente, \\nabla \\cdot \\mathbf{F} la divergenza, \\nabla \\times \\mathbf{F} il rotore, e \\nabla^2 o \\Delta il laplaciano. Nel machine learning, \\nabla_\\theta L(\\theta) denota il gradiente di una funzione di perdita rispetto ai parametri, come nella discesa del gradiente \\theta \\leftarrow \\theta - \\eta \\nabla_\\theta L. I geometri differenziali usano \\nabla per una connessione o derivata covariante, \\nabla_X Y. È un simbolo ordinario, quindi non viene inserito spazio aggiuntivo. Alcuni autori lo mettono in grassetto con \\boldsymbol{\\nabla} per sottolineare che è un operatore vettoriale.",
  },
  "plus-minus": {
    name: "Più o meno",
    meaning: "Produce il segno più o meno ±, per due alternative o per una tolleranza attorno a un valore.",
    usage: "\\pm compare nella formula risolutiva x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a} e nell'incertezza di misura, come 9.81 \\pm 0.02. Il suo corrispettivo \\mp (meno o più) si usa quando i segni devono invertirsi insieme, come in \\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b. È un operatore binario, quindi TeX lo spazia come +. Nelle tabelle di risultati sperimentali, allineare i numeri attorno al segno \\pm migliora la leggibilità. I testi di finanza lo usano per gli intervalli, come un rendimento del 5\\% \\pm 2\\%.",
  },
  "dot-product": {
    name: "Prodotto scalare",
    meaning: "Inserisce un punto centrato, usato per il prodotto scalare e per la moltiplicazione tra fattori.",
    usage: "\\cdot è un operatore binario posto sull'asse matematico, come in \\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i e in prodotti come 2 \\cdot 3. Indica anche un argomento segnaposto, come in \\|\\cdot\\| o f(\\cdot). Non usate un punto, che sta sulla linea di base, né \\bullet, che è più grande. Per i puntini tra fattori moltiplicati usate \\cdots, centrato verticalmente, e \\ldots per gli elenchi. Usate \\times per i prodotti vettoriali e la notazione scientifica, riservando \\cdot ai prodotti scalari e interni.",
  },
};

export default text;
