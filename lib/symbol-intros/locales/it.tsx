import type { IntroLocale } from "../localized";
import { Cmd, IntroLink, IntroP } from "../ui";

/** Italian (route locale `it`). */
const it: IntroLocale = {
  languageTag: "it",
  labels: {
    symbol: "Simbolo",
    command: "Comando",
    use: "Uso",
    package: "Pacchetto",
    builtIn: "integrato",
    copy: "Copia",
  },
  intros: {
    arrows: {
      title: "Frecce in LaTeX: come scrivere una freccia in LaTeX",
      intro: (
        <IntroP>
          Le frecce in LaTeX sono comandi della modalità matematica che prendono il nome dalla loro
          direzione: per scrivere una freccia in LaTeX usa <Cmd>{"$\\rightarrow$"}</Cmd> per
          &rarr;, <Cmd>{"$\\leftarrow$"}</Cmd> per &larr; e <Cmd>{"$\\Rightarrow$"}</Cmd> per la
          freccia doppia &rArr;. La tabella raccoglie le 12 frecce più usate, con il pacchetto
          richiesto da ciascuna; l&rsquo;elenco completo dei simboli di freccia si trova più in
          basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: le frecce più usate",
      use: {
        "\\rightarrow": "Freccia a destra",
        "\\to": "Applicazione tra insiemi, limiti (x \u2192 \u221e)",
        "\\leftarrow": "Freccia a sinistra, assegnazione",
        "\\leftrightarrow": "Freccia bidirezionale (sinistra-destra)",
        "\\Rightarrow": "Implica (freccia doppia)",
        "\\Leftrightarrow": "Se e solo se",
        "\\mapsto": "Legge di una funzione, x \u21a6 x\u00b2",
        "\\longrightarrow": "Freccia lunga a destra",
        "\\uparrow": "Freccia verso l’alto",
        "\\downarrow": "Freccia verso il basso",
        "\\hookrightarrow": "Iniezione, inclusione",
        "\\xrightarrow{f}": "Freccia con testo sopra, si allunga in base al testo",
      },
      faqHeading: "Domande frequenti sulle frecce in LaTeX",
      faq: [
        {
          question: "Come si scrive una freccia in LaTeX?",
          answer:
            "Le frecce sono simboli matematici, quindi vanno in modalità matematica: $\\rightarrow$ (o la forma abbreviata $\\to$) produce una freccia a destra, $\\leftarrow$ una freccia a sinistra e $\\leftrightarrow$ una freccia bidirezionale. Con l’iniziale maiuscola si ottiene la versione a doppio tratto, per esempio \\Rightarrow e \\Leftrightarrow. Nessuna richiede pacchetti.",
        },
        {
          question: "Come si fa una freccia lunga in LaTeX?",
          answer:
            "Aggiungi il prefisso long al nome: \\longrightarrow, \\longleftarrow e \\longleftrightarrow, oppure \\Longrightarrow e \\Longleftrightarrow per le frecce doppie, e \\longmapsto per una freccia di applicazione lunga. Se la freccia deve crescere insieme a un’etichetta, usa invece \\xrightarrow{...} di amsmath.",
        },
        {
          question: "Come si mette del testo sopra una freccia in LaTeX?",
          answer:
            "Carica amsmath e usa \\xrightarrow{testo} o \\xleftarrow{testo}; la freccia si allunga per adattarsi all’etichetta. Un argomento facoltativo aggiunge testo sotto la freccia: \\xrightarrow[sotto]{sopra}. Per una freccia di dimensione fissa puoi anche scrivere \\overset{f}{\\rightarrow}.",
        },
        {
          question: "Come si scrive una freccia doppia in LaTeX?",
          answer:
            "Usa \\Rightarrow per \u21d2, \\Leftarrow per \u21d0 e \\Leftrightarrow per \u21d4. In logica, \\implies (amsmath) e il comando integrato \\iff producono le stesse frecce con una spaziatura più ampia. Per due frecce sovrapposte usa \\rightleftarrows (amssymb), oppure \\rightleftharpoons per gli equilibri chimici.",
        },
        {
          question: "Come si usa una freccia in modalità testo in LaTeX?",
          answer:
            "Scrivere \\rightarrow fuori dalla modalità matematica provoca l’errore \u201cMissing $ inserted\u201d. Puoi racchiuderla come $\\rightarrow$ oppure usare i comandi di modalità testo \\textrightarrow, \\textleftarrow, \\textuparrow e \\textdownarrow, che fanno parte del nucleo di LaTeX (textcomp) e usano lo stesso font del testo circostante.",
        },
      ],
    },
    math: {
      title: "Simboli matematici in LaTeX: l’essenziale",
      intro: (
        <IntroP>
          I simboli matematici di LaTeX funzionano solo in modalità matematica, quindi racchiudili
          in <Cmd>{"$...$"}</Cmd> per le formule nel testo o in <Cmd>{"\\[...\\]"}</Cmd> per
          un&rsquo;equazione in display. Quelli di uso quotidiano sono integrati:{" "}
          <Cmd>{"\\pm"}</Cmd>, <Cmd>{"\\times"}</Cmd>, <Cmd>{"\\div"}</Cmd> e <Cmd>{"\\cdot"}</Cmd>{" "}
          per l&rsquo;aritmetica, <Cmd>{"\\neq"}</Cmd>, <Cmd>{"\\leq"}</Cmd>, <Cmd>{"\\geq"}</Cmd> e{" "}
          <Cmd>{"\\approx"}</Cmd> per i confronti, <Cmd>{"\\infty"}</Cmd>,{" "}
          <Cmd>{"\\sqrt{x}"}</Cmd> e <Cmd>{"\\frac{a}{b}"}</Cmd>. Apici e pedici usano{" "}
          <Cmd>{"^"}</Cmd> e <Cmd>{"_"}</Cmd>, con le graffe quando comprendono più di un carattere:{" "}
          <Cmd>{"x^{2n}"}</Cmd>. Simboli aggiuntivi come <Cmd>{"\\mathbb{R}"}</Cmd> e{" "}
          <Cmd>{"\\therefore"}</Cmd> provengono da amssymb. La tabella raccoglie i simboli
          matematici più usati, con il pacchetto richiesto da ciascuno; l&rsquo;elenco completo si
          trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: simboli matematici di uso quotidiano",
      use: {
        "\\pm": "Più o meno",
        "\\times": "Moltiplicazione (per)",
        "\\div": "Divisione",
        "\\cdot": "Punto centrato, moltiplicazione",
        "\\neq": "Diverso da",
        "\\leq": "Minore o uguale a",
        "\\approx": "Circa uguale",
        "\\infty": "Infinito",
        "\\sqrt{x}": "Radice quadrata (\\sqrt[n]{x} per la radice n-esima)",
        "\\frac{a}{b}": "Frazione",
        "x^{2n}": "Apice (esponente)",
        "\\mathbb{R}": "Numeri reali",
      },
      faqHeading: "Domande frequenti sui simboli matematici in LaTeX",
      faq: [
        {
          question: "Come si scrivono i simboli matematici in LaTeX?",
          answer:
            "Mettili in modalità matematica, $...$ per le formule nel testo e \\[...\\] o un ambiente equation per quelle in display, e usa il comando del simbolo, per esempio $a \\times b \\neq c$. Usare un comando matematico fuori dalla modalità matematica provoca l’errore Missing $ inserted.",
        },
        {
          question: "Quali pacchetti servono per i simboli matematici in LaTeX?",
          answer:
            "La maggior parte dei simboli è integrata. Aggiungi \\usepackage{amsmath} per ambienti come align e comandi come \\text e \\operatorname, e \\usepackage{amssymb} per simboli aggiuntivi come \\mathbb{R}, \\therefore, \\nexists e \\varnothing. mathtools estende amsmath con correzioni e strumenti in più.",
        },
        {
          question: "Come si trova il comando LaTeX di un simbolo?",
          answer:
            "Cerca in questa pagina o nelle pagine delle categorie e clicca su una scheda per copiarne il comando. Se sai solo che aspetto ha il simbolo, Detexify ti permette di disegnarlo e suggerisce i comandi corrispondenti, e la Comprehensive LaTeX Symbol List copre migliaia di simboli.",
        },
      ],
    },
    "set-theory": {
      title: "Simboli di teoria degli insiemi in LaTeX: sottoinsieme, appartenenza, unione e insieme vuoto",
      intro: (
        <IntroP>
          I simboli di teoria degli insiemi in LaTeX sono quasi tutti integrati. «Appartiene a» è{" "}
          <Cmd>{"\\in"}</Cmd> (∈) e «non appartiene a» è <Cmd>{"\\notin"}</Cmd>; «sottoinsieme» è{" "}
          <Cmd>{"\\subset"}</Cmd> (⊂) e «sottoinsieme o uguale», <Cmd>{"\\subseteq"}</Cmd> (⊆);
          l&rsquo;unione e l&rsquo;intersezione sono <Cmd>{"\\cup"}</Cmd> e <Cmd>{"\\cap"}</Cmd>,
          la differenza insiemistica è <Cmd>{"\\setminus"}</Cmd> e l&rsquo;insieme vuoto è{" "}
          <Cmd>{"\\emptyset"}</Cmd> (∅). Alcuni extra richiedono amssymb: l&rsquo;insieme vuoto più
          tondo <Cmd>{"\\varnothing"}</Cmd>, il sottoinsieme proprio <Cmd>{"\\subsetneq"}</Cmd> e
          gli insiemi numerici come <Cmd>{"\\mathbb{N}"}</Cmd> e <Cmd>{"\\mathbb{R}"}</Cmd>. Le
          parentesi graffe vanno precedute da una barra rovesciata, quindi un insieme si scrive{" "}
          <Cmd>{"\\{1, 2, 3\\}"}</Cmd>. La tabella raccoglie i simboli di teoria degli insiemi più
          usati, con il pacchetto richiesto da ciascuno; l&rsquo;elenco completo si trova più in
          basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: i simboli di teoria degli insiemi più usati",
      use: {
        "\\in": "Appartiene a",
        "\\notin": "Non appartiene a",
        "\\subset": "Sottoinsieme",
        "\\subseteq": "Sottoinsieme o uguale",
        "\\subsetneq": "Sottoinsieme proprio (non uguale)",
        "\\cup": "Unione",
        "\\cap": "Intersezione",
        "A \\setminus B": "Differenza insiemistica",
        "\\emptyset": "Insieme vuoto (\\varnothing in amssymb)",
        "\\mathbb{R}": "Numeri reali (anche \\mathbb{N}, \\mathbb{Z}, \\mathbb{Q})",
        "\\{ x \\in A \\mid x > 0 \\}": "Notazione per caratteristica",
        "\\mathcal{P}(A)": "Insieme delle parti",
      },
      faqHeading: "Domande frequenti sulla teoria degli insiemi in LaTeX",
      faq: [
        {
          question: "Come si scrive sottoinsieme in LaTeX?",
          answer:
            "Usa \\subset per ⊂ e \\subseteq per ⊆, entrambi integrati: $A \\subseteq B$. Per un sottoinsieme proprio che escluda esplicitamente l’uguaglianza, amssymb offre \\subsetneq (⊊). Le versioni per il sovrainsieme sono \\supset, \\supseteq e \\supsetneq, e \\not\\subset le nega.",
        },
        {
          question: "Come si scrive il simbolo di appartenenza in LaTeX?",
          answer:
            "\\in produce ∈, come in $x \\in A$, e \\notin produce ∉. La forma rovesciata \\ni (∋) si legge «contiene come elemento». Tutti e tre sono integrati.",
        },
        {
          question: "Come si scrive l’insieme vuoto in LaTeX?",
          answer:
            "\\emptyset produce ∅ ed è integrato. Molti autori preferiscono il più tondo \\varnothing, che richiede \\usepackage{amssymb}. In ogni caso non usare \\phi né \\O, che sono una lettera greca e una lettera scandinava.",
        },
      ],
    },
    logic: {
      title: "Simboli di logica in LaTeX",
      intro: (
        <>
          <IntroP>
            I connettivi della logica proposizionale sono <Cmd>{"\\land"}</Cmd> (e),{" "}
            <Cmd>{"\\lor"}</Cmd> (o) e <Cmd>{"\\lnot"}</Cmd> (non); <Cmd>{"\\wedge"}</Cmd>,{" "}
            <Cmd>{"\\vee"}</Cmd> e <Cmd>{"\\neg"}</Cmd> sono alias identici. Implicazione ed
            equivalenza si scrivono meglio con <Cmd>{"\\implies"}</Cmd> (di amsmath) e{" "}
            <Cmd>{"\\iff"}</Cmd>, che aggiungono la spaziatura da relazione attorno alle frecce;
            anche <Cmd>{"\\Rightarrow"}</Cmd> e <Cmd>{"\\Leftrightarrow"}</Cmd> da soli funzionano.
            I quantificatori sono <Cmd>{"\\forall"}</Cmd> ed <Cmd>{"\\exists"}</Cmd>, con{" "}
            <Cmd>{"\\nexists"}</Cmd> per &ldquo;non esiste&rdquo;, e le costanti vero e falso sono{" "}
            <Cmd>{"\\top"}</Cmd> e <Cmd>{"\\bot"}</Cmd>.
          </IntroP>
          <IntroP>
            La teoria della dimostrazione e la semantica hanno i loro tornelli:{" "}
            <Cmd>{"\\vdash"}</Cmd> significa &ldquo;dimostra&rdquo; o conseguenza sintattica,{" "}
            <Cmd>{"\\models"}</Cmd> (anche <Cmd>{"\\vDash"}</Cmd>) significa
            &ldquo;soddisfa&rdquo; o conseguenza semantica, e <Cmd>{"\\nvdash"}</Cmd> nega il
            primo. I marcatori di inferenza <Cmd>{"\\therefore"}</Cmd> e{" "}
            <Cmd>{"\\because"}</Cmd> provengono da amssymb, come <Cmd>{"\\nexists"}</Cmd> e{" "}
            <Cmd>{"\\vDash"}</Cmd>. L&rsquo;equivalenza logica tra formule si scrive di solito{" "}
            <Cmd>{"\\equiv"}</Cmd>, la disgiunzione esclusiva è <Cmd>{"\\oplus"}</Cmd> e la barra di
            Sheffer (NAND) è <Cmd>{"\\uparrow"}</Cmd>. Gli operatori modali <Cmd>{"\\Box"}</Cmd>{" "}
            e <Cmd>{"\\Diamond"}</Cmd> si trovano nella pagina dei{" "}
            <IntroLink href="/it/symbols/modal-logic">simboli di logica modale</IntroLink>.
          </IntroP>
          <IntroP>
            Tutto ciò funziona solo in modalità matematica, quindi racchiudi i simboli in{" "}
            <Cmd>{"$...$"}</Cmd> e carica <Cmd>{"\\usepackage{amsmath, amssymb}"}</Cmd> nel
            preambolo. Una formula tipica: <Cmd>{"\\forall x\\, (P(x) \\implies Q(x))"}</Cmd>. Per
            vedere come si combinano con insiemi, funzioni e relazioni, leggi la nostra guida alle{" "}
            <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
              espressioni matematiche in LaTeX
            </IntroLink>
            .
          </IntroP>
        </>
      ),
    },
    physics: {
      title: "Simboli di meccanica quantistica in LaTeX",
      intro: (
        <IntroP>
          I simboli di meccanica quantistica che i fisici scrivono più spesso sono tutti integrati
          in LaTeX: la costante di Planck ridotta <Cmd>{"\\hbar"}</Cmd>, il bra{" "}
          <Cmd>{"\\langle \\psi |"}</Cmd> e il ket <Cmd>{"| \\psi \\rangle"}</Cmd>, gli operatori
          con il cappello come <Cmd>{"\\hat{H}"}</Cmd>, l&rsquo;aggiunto <Cmd>{"A^\\dagger"}</Cmd>,
          il laplaciano <Cmd>{"\\nabla^2"}</Cmd> e la derivata temporale <Cmd>{"\\partial_t"}</Cmd>.
          Per una notazione bra-ket più compatta, i pacchetti braket e physics aggiungono{" "}
          <Cmd>{"\\bra{}"}</Cmd>, <Cmd>{"\\ket{}"}</Cmd> e <Cmd>{"\\braket{}"}</Cmd>. La tabella
          raccoglie i simboli di fisica quantistica più usati, con il pacchetto richiesto da
          ciascuno; l&rsquo;elenco completo dei simboli di fisica si trova più in basso.
        </IntroP>
      ),
      use: {
        "\\hbar": "Costante di Planck ridotta (h tagliato)",
        "\\langle \\psi |": "Bra, con comandi di base",
        "| \\psi \\rangle": "Ket, con comandi di base",
        "\\langle \\phi | \\psi \\rangle": "Prodotto interno (bra-ket)",
        "\\bra{\\psi}": "Bra",
        "\\ket{\\psi}": "Ket",
        "\\braket{\\phi|\\psi}": "Prodotto interno (physics: \\braket{\\phi}{\\psi})",
        "\\hat{H}": "Operatore hamiltoniano",
        "A^\\dagger": "Aggiunto hermitiano (dagger)",
        "\\nabla^2": "Laplaciano",
        "\\partial_t \\psi": "Derivata temporale",
        "\\otimes": "Prodotto tensoriale di stati",
      },
      faqHeading: "Domande frequenti",
      faq: [
        {
          question: "Come si scrive la notazione bra-ket in LaTeX?",
          answer:
            "Senza alcun pacchetto, scrivi un bra come \\langle \\psi |, un ket come | \\psi \\rangle e un prodotto interno come \\langle \\phi | \\psi \\rangle. Con \\usepackage{braket} puoi scrivere \\bra{\\psi}, \\ket{\\psi} e \\braket{\\phi|\\psi}; con \\usepackage{physics} il prodotto interno prende invece due argomenti, \\braket{\\phi}{\\psi}. Carica solo uno dei due pacchetti, perché entrambi definiscono questi comandi.",
        },
        {
          question: "Come si scrive h tagliato in LaTeX?",
          answer:
            "La costante di Planck ridotta \u210f è \\hbar, che è integrata e si usa in modalità matematica: $\\hbar$. L’equazione di Schr\u00f6dinger diventa quindi i\\hbar \\partial_t \\psi = \\hat{H} \\psi.",
        },
        {
          question: "Come si scrivono gli operatori e il dagger in LaTeX?",
          answer:
            "Indica gli operatori con un cappello, \\hat{H} o \\hat{p}, e scrivi l’aggiunto hermitiano con \\dagger come apice, A^\\dagger. I valori di aspettazione sono \\langle \\hat{A} \\rangle, o \\expval{A} con il pacchetto physics, e i commutatori sono [\\hat{x}, \\hat{p}] = i\\hbar.",
        },
      ],
    },
    functions: {
      title: "Composizione di funzioni e isomorfismo in LaTeX",
      intro: (
        <IntroP>
          La composizione di funzioni in LaTeX è <Cmd>{"\\circ"}</Cmd>, come in{" "}
          <Cmd>{"g \\circ f"}</Cmd>, e il simbolo di isomorfismo in LaTeX è <Cmd>{"\\cong"}</Cmd>{" "}
          (&cong;), con <Cmd>{"\\simeq"}</Cmd> per un&rsquo;equivalenza più debole; tutti e tre
          sono integrati. Una funzione si dichiara con <Cmd>{"f \\colon A \\to B"}</Cmd>, dove{" "}
          <Cmd>{"\\colon"}</Cmd> dà la spaziatura corretta, e la sua legge con{" "}
          <Cmd>{"\\mapsto"}</Cmd>, come in <Cmd>{"x \\mapsto x^2"}</Cmd>. L&rsquo;applicazione
          identità è <Cmd>{"\\operatorname{id}"}</Cmd> di amsmath. La tabella raccoglie i comandi
          per funzioni e applicazioni più usati, con il pacchetto richiesto da ciascuno;
          l&rsquo;elenco completo dei simboli si trova più in basso.
        </IntroP>
      ),
      use: {
        "f \\colon A \\to B": "Funzione da A a B",
        "x \\mapsto x^2": "Viene mandato in (legge della funzione)",
        "g \\circ f": "Composizione, g dopo f",
        "f^{-1}": "Funzione inversa",
        "\\cong": "Isomorfo a",
        "\\simeq": "Omotopicamente equivalente, isomorfismo debole",
        "\\xrightarrow{\\sim}": "Freccia di isomorfismo",
        "\\operatorname{id}_A": "Applicazione identità",
        "\\hookrightarrow": "Iniezione, inclusione",
        "\\twoheadrightarrow": "Suriezione",
        "f|_A": "Restrizione ad A",
      },
      faqHeading: "Domande frequenti",
      faq: [
        {
          question: "Come si scrive la composizione di funzioni in LaTeX?",
          answer:
            "Usa \\circ, che è integrato: $g \\circ f$ produce g ∘ f, che si legge \u201cg dopo f\u201d. Scrivi (g \\circ f)(x) = g(f(x)) per la legge. Non usare una o minuscola né \\cdot, che hanno dimensione e spaziatura sbagliate.",
        },
        {
          question: "Come si scrive il simbolo di isomorfismo in LaTeX?",
          answer:
            "Il simbolo di isomorfismo standard ≅ è \\cong, integrato: $G \\cong H$. Per un’equivalenza omotopica o una nozione più debole usa \\simeq (≃), e per una freccia che è un isomorfismo usa \\xrightarrow{\\sim} di amsmath, oppure \\cong sopra una freccia con \\xrightarrow{\\cong}.",
        },
        {
          question: "Come si scrive f: A → B in LaTeX?",
          answer:
            "Scrivi f \\colon A \\to B. Il comando \\colon dà la spaziatura di un segno di punteggiatura; i due punti normali vengono spaziati come una relazione e lasciano troppo spazio prima di A. Usa \\mapsto per la legge, come in x \\mapsto x^2.",
        },
      ],
    },
    chemistry: {
      title: "Simboli di chimica in LaTeX: frecce di reazione, equilibrio e formule",
      intro: (
        <IntroP>
          Per i simboli di chimica in LaTeX, il pacchetto mhchem fa quasi tutto il lavoro:{" "}
          <Cmd>{"\\ce{2H2 + O2 -> 2H2O}"}</Cmd> compone un&rsquo;intera reazione con i simboli degli
          elementi in tondo, i pedici e una freccia di reazione. Senza mhchem, la freccia di
          reazione è <Cmd>{"\\rightarrow"}</Cmd>, il simbolo di equilibrio è{" "}
          <Cmd>{"\\rightleftharpoons"}</Cmd> e le formule si scrivono come{" "}
          <Cmd>{"\\mathrm{H_2O}"}</Cmd> in modalità matematica, così che le lettere degli elementi
          non escano in corsivo. Le condizioni di reazione vanno sopra una freccia estensibile con{" "}
          <Cmd>{"\\xrightarrow{\\Delta}"}</Cmd> di amsmath. La tabella raccoglie i simboli di chimica
          più usati, con il pacchetto richiesto da ciascuno; l&rsquo;elenco completo si trova più in
          basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: reazioni, frecce e formule",
      use: {
        "\\ce{2H2 + O2 -> 2H2O}": "Reazione completa",
        "\\ce{A <=> B}": "Equilibrio in mhchem",
        "\\rightarrow": "Produce (freccia di reazione)",
        "\\rightleftharpoons": "Simbolo di equilibrio (arpioni)",
        "\\xrightarrow{\\Delta}": "Freccia con calore o condizioni sopra",
        "\\mathrm{H_2O}": "Formula chimica in modalità matematica",
        "\\mathrm{Na^+}": "Carica di uno ione",
        "{}^{14}_{6}\\mathrm{C}": "Isotopo (numero di massa e numero atomico)",
        "\\Delta H^\\circ": "Variazione di entalpia standard",
        "\\uparrow": "Sviluppo di gas",
        "\\downarrow": "Precipitato",
        "\\ce{HC#CH}": "Legame triplo (= per un legame doppio)",
      },
      faqHeading: "Domande frequenti sulla chimica in LaTeX",
      faq: [
        {
          question: "Come si scrive la freccia di reazione in LaTeX?",
          answer:
            "In modalità matematica la freccia di reazione è \\rightarrow, o \\longrightarrow per una più lunga. Con mhchem scrivi -> dentro \\ce{...}, per esempio \\ce{A + B -> C}. Per mettere le condizioni sopra la freccia usa \\xrightarrow{\\Delta} di amsmath, oppure ->[\\Delta] dentro \\ce.",
        },
        {
          question: "Come si scrive il simbolo di equilibrio in LaTeX?",
          answer:
            "Il simbolo di equilibrio ⇌ è \\rightleftharpoons, che è integrato: $\\mathrm{N_2} + 3\\mathrm{H_2} \\rightleftharpoons 2\\mathrm{NH_3}$. In mhchem scrivi <=> dentro \\ce{...}; sono disponibili anche <=>> e <<=> per equilibri spostati verso destra o verso sinistra.",
        },
        {
          question: "Come si scrivono le formule chimiche con i pedici in LaTeX?",
          answer:
            "Usa \\ce{H2SO4} di mhchem, che mette le cifre a pedice e mantiene le lettere in tondo. Senza mhchem scrivi \\mathrm{H_2SO_4} in modalità matematica; un semplice H_2SO_4 metterebbe le lettere in corsivo, come se fossero variabili.",
        },
      ],
    },
    probability: {
      title: "Simboli di probabilità e statistica in LaTeX",
      intro: (
        <IntroP>
          Il simbolo di probabilità in LaTeX è <Cmd>{"\\Pr"}</Cmd> o <Cmd>{"\\mathbb{P}"}</Cmd>, e
          l&rsquo;operatore valore atteso è <Cmd>{"\\mathbb{E}[X]"}</Cmd>. La tabella raccoglie gli
          otto comandi più usati, con il pacchetto richiesto da ciascuno; l&rsquo;elenco completo
          dei simboli di probabilità e statistica si trova più in basso.
        </IntroP>
      ),
      use: {
        "\\Pr(A)": "Operatore di probabilità (Pr in tondo)",
        "\\mathbb{P}(A)": "Simbolo di probabilità, grassetto da lavagna",
        "\\mathbb{E}[X]": "Operatore valore atteso",
        "\\operatorname{Var}(X)": "Varianza",
        "\\operatorname{Cov}(X, Y)": "Covarianza",
        "P(A \\mid B)": "Probabilità condizionata",
        "X \\sim \\mathcal{N}(\\mu, \\sigma^2)": "Ha distribuzione (normale)",
        "\\binom{n}{k}": "Coefficiente binomiale",
      },
      faqHeading: "Domande frequenti",
      faq: [
        {
          question: "Come si scrive il simbolo di probabilità in LaTeX?",
          answer:
            "Usa l’operatore integrato \\Pr, come in \\Pr(A), per ottenere Pr in tondo con la spaziatura da operatore, oppure il grassetto da lavagna \\mathbb{P}(A) con \\usepackage{amssymb}. Per la probabilità condizionata scrivi P(A \\mid B); \\mid spazia correttamente la barra, cosa che un semplice | non fa.",
        },
        {
          question: "Come si scrive l’operatore valore atteso in LaTeX?",
          answer:
            "Scrivi \\mathbb{E}[X] (amssymb) per una E in grassetto da lavagna, oppure \\operatorname{E}[X] (amsmath) per una E in tondo. Per riutilizzarlo, dichiaralo una volta nel preambolo con \\DeclareMathOperator{\\E}{\\mathbb{E}} e poi scrivi \\E[X].",
        },
        {
          question: "Come si scrive la varianza in LaTeX?",
          answer:
            "La varianza non ha un comando integrato, quindi scrivi \\operatorname{Var}(X) con amsmath, oppure dichiara \\DeclareMathOperator{\\Var}{Var} nel preambolo e usa \\Var(X). La deviazione standard è \\sigma e la varianza si può scrivere anche \\sigma^2.",
        },
      ],
    },
    greek: {
      title: "Lettere greche in LaTeX: l’alfabeto greco completo",
      intro: (
        <IntroP>
          Le lettere greche in LaTeX si scrivono con una barra rovesciata e il nome della lettera
          in modalità matematica: <Cmd>{"\\alpha"}</Cmd>, <Cmd>{"\\beta"}</Cmd>,{" "}
          <Cmd>{"\\gamma"}</Cmd>, <Cmd>{"\\pi"}</Cmd>. Scrivi il nome con l&rsquo;iniziale maiuscola
          per la forma maiuscola, come <Cmd>{"\\Gamma"}</Cmd>, <Cmd>{"\\Delta"}</Cmd> e{" "}
          <Cmd>{"\\Omega"}</Cmd>; le maiuscole identiche a lettere latine, come Alfa e Beta, non
          hanno un comando e si scrivono semplicemente A e B. Diverse lettere hanno forme varianti:{" "}
          <Cmd>{"\\varepsilon"}</Cmd>, <Cmd>{"\\vartheta"}</Cmd>, <Cmd>{"\\varphi"}</Cmd> e{" "}
          <Cmd>{"\\varsigma"}</Cmd>. Sono tutte integrate. La tabella raccoglie le lettere greche
          più usate; l&rsquo;alfabeto greco completo in LaTeX si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: le lettere greche più usate",
      use: {
        "\\alpha": "Alfa",
        "\\beta": "Beta",
        "\\gamma": "Gamma (\\Gamma maiuscola)",
        "\\delta": "Delta (\\Delta maiuscola)",
        "\\epsilon": "Epsilon ϵ (\\varepsilon per ε)",
        "\\theta": "Theta (variante \\vartheta, \\Theta maiuscola)",
        "\\lambda": "Lambda (\\Lambda maiuscola)",
        "\\mu": "Mu",
        "\\pi": "Pi (\\Pi maiuscola)",
        "\\sigma": "Sigma (\\Sigma maiuscola)",
        "\\phi": "Phi ϕ (\\varphi per φ, \\Phi maiuscola)",
        "\\omega": "Omega (\\Omega maiuscola)",
      },
      faqHeading: "Domande frequenti sulle lettere greche in LaTeX",
      faq: [
        {
          question: "Come si scrivono le lettere greche in LaTeX?",
          answer:
            "Scrivi una barra rovesciata e il nome della lettera in modalità matematica: $\\alpha$, $\\beta$, $\\gamma$, $\\theta$, $\\pi$. Per la maiuscola, rendi maiuscola la prima lettera: \\Gamma, \\Delta, \\Theta, \\Lambda, \\Xi, \\Pi, \\Sigma, \\Upsilon, \\Phi, \\Psi, \\Omega. Non serve alcun pacchetto.",
        },
        {
          question: "Perché in LaTeX non esiste il comando \\Alpha?",
          answer:
            "Le maiuscole Alfa, Beta, Epsilon, Zeta, Eta, Iota, Kappa, Mu, Nu, Omicron, Rho, Tau e Chi sono identiche a lettere latine, quindi LaTeX non le definisce; scrivi A, B, E e così via. Allo stesso modo, l’omicron minuscola è semplicemente o.",
        },
        {
          question: "Come si mette una lettera greca in grassetto in LaTeX?",
          answer:
            "Usa \\boldsymbol{\\alpha} di amsmath o \\bm{\\alpha} del pacchetto bm. \\mathbf agisce solo su lettere latine, cifre e greche maiuscole, quindi \\mathbf{\\alpha} lascia l’alfa invariata.",
        },
      ],
    },
    quantifiers: {
      title: "Quantificatori in LaTeX: per ogni, esiste e appartenenza",
      intro: (
        <IntroP>
          I quantificatori in LaTeX sono <Cmd>{"\\forall"}</Cmd> (per ogni, ∀) ed{" "}
          <Cmd>{"\\exists"}</Cmd> (esiste, ∃), entrambi integrati; <Cmd>{"\\nexists"}</Cmd> per «non
          esiste» proviene da amssymb, e l&rsquo;esistenza unica si scrive{" "}
          <Cmd>{"\\exists!"}</Cmd>. Gli enunciati quantificati li combinano di solito con
          l&rsquo;appartenenza, <Cmd>{"\\in"}</Cmd>, e un separatore come una virgola o i due punti:{" "}
          <Cmd>{"\\forall x \\in \\mathbb{R},\\ x^2 \\geq 0"}</Cmd>. La negazione è{" "}
          <Cmd>{"\\neg"}</Cmd>, mentre implicazione ed equivalenza sono <Cmd>{"\\implies"}</Cmd> e{" "}
          <Cmd>{"\\iff"}</Cmd>. La tabella raccoglie i simboli di quantificatori più usati, con il
          pacchetto richiesto da ciascuno; l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: quantificatori e connettivi",
      use: {
        "\\forall": "Per ogni",
        "\\exists": "Esiste",
        "\\nexists": "Non esiste",
        "\\exists!": "Esiste esattamente uno",
        "\\forall x \\in A": "Per ogni x in A",
        "\\in": "Appartiene a",
        "\\notin": "Non appartiene a",
        "\\neg": "Non",
        "\\land": "E",
        "\\lor": "O",
        "\\implies": "Implica",
        "\\iff": "Se e solo se",
      },
      faqHeading: "Domande frequenti sui quantificatori in LaTeX",
      faq: [
        {
          question: "Come si scrive «per ogni» in LaTeX?",
          answer:
            "Usa \\forall in modalità matematica: $\\forall x \\in \\mathbb{R}$ produce ∀x ∈ ℝ. È integrato. Aggiungi un separatore dopo la variabile vincolata, per esempio \\forall x,\\ P(x) o \\forall x : P(x), così la formula si legge con chiarezza.",
        },
        {
          question: "Come si scrivono «esiste» e «non esiste» in LaTeX?",
          answer:
            "«Esiste» è \\exists (∃), integrato. «Non esiste» è \\nexists (∄), che richiede \\usepackage{amssymb}; anche \\not\\exists funziona senza pacchetti, ma il risultato è meno pulito. Per l’esistenza unica scrivi \\exists!.",
        },
        {
          question: "Come si scrive «tale che» in LaTeX?",
          answer:
            "Nella notazione per caratteristica usa una barra verticale o i due punti: \\{ x \\in A \\mid x > 0 \\} o \\{ x : x > 0 \\}; \\mid dà la spaziatura corretta. In un enunciato quantificato è comune una virgola o \\text{ t.c. }, come in \\exists x \\in A \\text{ t.c. } x > 0.",
        },
      ],
    },
    boolean: {
      title: "Simboli di algebra booleana in LaTeX: AND, OR e XOR",
      intro: (
        <IntroP>
          I simboli di algebra booleana in LaTeX riutilizzano i connettivi logici: il simbolo AND è{" "}
          <Cmd>{"\\land"}</Cmd> (&and;), il simbolo OR è <Cmd>{"\\lor"}</Cmd> (&or;) e NOT è{" "}
          <Cmd>{"\\lnot"}</Cmd> (&not;). Lo XOR in LaTeX è <Cmd>{"\\oplus"}</Cmd> (&oplus;), oppure{" "}
          <Cmd>{"\\veebar"}</Cmd> di amssymb. Implicazione ed equivalenza sono{" "}
          <Cmd>{"\\Rightarrow"}</Cmd> e <Cmd>{"\\iff"}</Cmd>, le costanti vero e falso sono{" "}
          <Cmd>{"\\top"}</Cmd> e <Cmd>{"\\bot"}</Cmd>, e i quantificatori sono{" "}
          <Cmd>{"\\forall"}</Cmd> ed <Cmd>{"\\exists"}</Cmd>. Vanno tutti in modalità matematica. La
          tabella raccoglie i comandi più usati, con il pacchetto richiesto da ciascuno;
          l&rsquo;elenco completo dei simboli delle porte logiche si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: operazioni booleane",
      use: {
        "\\land": "AND, congiunzione (alias \\wedge)",
        "\\lor": "OR, disgiunzione (alias \\vee)",
        "\\lnot": "NOT, negazione (alias \\neg)",
        "\\overline{A}": "NOT, notazione con barra",
        "\\oplus": "XOR (o esclusivo)",
        "\\veebar": "XOR, stile della logica",
        "\\barwedge": "NAND",
        "\\Rightarrow": "Implica",
        "\\iff": "Se e solo se (equivalenza)",
        "\\top": "Vero, 1",
        "\\bot": "Falso, 0",
        "\\forall x \\, \\exists y": "Per ogni, esiste",
      },
      faqHeading: "Domande frequenti sui simboli booleani in LaTeX",
      faq: [
        {
          question: "Come si scrivono i simboli AND e OR in LaTeX?",
          answer:
            "AND (∧) è \\land o il suo alias \\wedge, e OR (∨) è \\lor o \\vee. Sono entrambi integrati e vanno in modalità matematica: $A \\land B$, $A \\lor B$. NOT è \\lnot o \\neg. Nella notazione dei circuiti puoi anche scrivere A \\cdot B per AND, A + B per OR e \\overline{A} per NOT.",
        },
        {
          question: "Come si scrive XOR in LaTeX?",
          answer:
            "Usa \\oplus (⊕), che è integrato: $A \\oplus B$. I testi di logica usano talvolta \\veebar (⊻), che richiede \\usepackage{amssymb}. XNOR si scrive di solito \\odot o \\overline{A \\oplus B}.",
        },
        {
          question: "Quale pacchetto serve per i simboli di algebra booleana in LaTeX?",
          answer:
            "Nessuno per quelli comuni: \\land, \\lor, \\lnot, \\oplus, \\Rightarrow, \\iff, \\top, \\bot, \\forall ed \\exists sono integrati. Carica amssymb per \\veebar e \\barwedge, e amsmath per \\implies.",
        },
      ],
    },
    brackets: {
      title: "Parentesi in LaTeX: graffe, angolari, parte intera e norme",
      intro: (
        <IntroP>
          I delimitatori di LaTeX sono di due tipi: quelli che si digitano direttamente, come{" "}
          <Cmd>{"("}</Cmd>, <Cmd>{")"}</Cmd>, <Cmd>{"["}</Cmd> e <Cmd>{"]"}</Cmd>, e quelli che
          richiedono un comando, come <Cmd>{"\\{"}</Cmd> e <Cmd>{"\\}"}</Cmd> per le graffe,{" "}
          <Cmd>{"\\langle"}</Cmd> e <Cmd>{"\\rangle"}</Cmd> per le parentesi angolari,{" "}
          <Cmd>{"\\lfloor"}</Cmd> e <Cmd>{"\\rfloor"}</Cmd> per la parte intera inferiore, e{" "}
          <Cmd>{"\\lVert"}</Cmd> e <Cmd>{"\\rVert"}</Cmd> per una norma. Se anteponi{" "}
          <Cmd>{"\\left"}</Cmd> e <Cmd>{"\\right"}</Cmd> a una qualsiasi coppia, LaTeX adatta la
          dimensione dei delimitatori al contenuto, per esempio a una frazione. Le parentesi quadre
          doppie richiedono il pacchetto stmaryrd. La tabella raccoglie le parentesi e i
          delimitatori più usati, con il pacchetto richiesto da ciascuno; l&rsquo;elenco completo si
          trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: le parentesi più usate",
      use: {
        "\\left( \\frac{a}{b} \\right)": "Parentesi che si adattano al contenuto",
        "\\{ x \\}": "Parentesi graffe (con barra rovesciata)",
        "\\langle x \\rangle": "Parentesi angolari, prodotto scalare",
        "\\lfloor x \\rfloor": "Parte intera inferiore (floor)",
        "\\lceil x \\rceil": "Parte intera superiore (ceiling)",
        "\\lvert x \\rvert": "Valore assoluto",
        "\\lVert x \\rVert": "Norma",
        "\\llbracket x \\rrbracket": "Parentesi quadre doppie",
        "\\bigl( x \\bigr)": "Dimensioni manuali: \\big, \\Big, \\bigg, \\Bigg",
        "[a, b)": "Intervallo semiaperto",
        "\\underbrace{a + b}_{n}": "Graffa sotto un’espressione (\\overbrace sopra)",
      },
      faqHeading: "Domande frequenti sulle parentesi in LaTeX",
      faq: [
        {
          question: "Come si scrivono le parentesi graffe in LaTeX?",
          answer:
            "Le graffe sono i caratteri di raggruppamento di LaTeX, quindi una { o } da sola non viene stampata. Precedile con una barra rovesciata: \\{ e \\} funzionano nel testo e in modalità matematica, per esempio $\\{1, 2, 3\\}$. Usa \\left\\{ e \\right\\} per graffe che crescono con il contenuto; \\lbrace e \\rbrace sono alternative con nome.",
        },
        {
          question: "Come si scrivono le parentesi angolari in LaTeX?",
          answer:
            "Usa \\langle e \\rangle, come in $\\langle u, v \\rangle$. Non usare i tasti < e >: sono simboli di relazione con forma e spaziatura diverse. Per contenuti alti scrivi \\left\\langle ... \\right\\rangle.",
        },
        {
          question: "Come si scrivono le parentesi quadre doppie in LaTeX?",
          answer:
            "Carica \\usepackage{stmaryrd} e scrivi \\llbracket x \\rrbracket per le parentesi quadre doppie ⟦x⟧ usate in semantica e per gli intervalli di interi. Senza il pacchetto, [\\![ x ]\\!] le imita accostando due parentesi con uno spazio fine negativo.",
        },
      ],
    },
    calculus: {
      title: "Simboli di analisi in LaTeX: derivate, integrali e limiti",
      intro: (
        <IntroP>
          I simboli di base dell&rsquo;analisi in LaTeX sono tutti integrati. Una derivata in LaTeX
          è una frazione, <Cmd>{"\\frac{dy}{dx}"}</Cmd>, o un apice, <Cmd>{"f'(x)"}</Cmd>; una
          derivata parziale usa <Cmd>{"\\partial"}</Cmd>, come in{" "}
          <Cmd>{"\\frac{\\partial f}{\\partial x}"}</Cmd>; un integrale è{" "}
          <Cmd>{"\\int_a^b f(x)\\,dx"}</Cmd>; e un limite è <Cmd>{"\\lim_{x \\to 0}"}</Cmd>. Gli
          integrali multipli come <Cmd>{"\\iint"}</Cmd> e <Cmd>{"\\iiint"}</Cmd> provengono da
          amsmath, e il pacchetto physics aggiunge scorciatoie come <Cmd>{"\\dv"}</Cmd> e{" "}
          <Cmd>{"\\pdv"}</Cmd>. La tabella raccoglie i simboli di analisi più usati, con il
          pacchetto richiesto da ciascuno; l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: derivate, integrali e limiti",
      use: {
        "\\frac{dy}{dx}": "Derivata (notazione di Leibniz)",
        "f'(x)": "Derivata (notazione con apice); f''(x) per la seconda",
        "\\frac{d^2 y}{dx^2}": "Derivata seconda",
        "\\frac{\\partial f}{\\partial x}": "Derivata parziale",
        "\\dot{x}": "Derivata temporale (punto di Newton); \\ddot{x} per la seconda",
        "\\int_a^b f(x)\\,dx": "Integrale definito",
        "\\iint_D f\\,dA": "Integrale doppio (\\iiint per il triplo)",
        "\\oint_C": "Integrale di contorno (integrale di linea chiuso)",
        "\\lim_{x \\to 0}": "Limite",
        "\\nabla f": "Gradiente",
        "\\dv{f}{x}": "Scorciatoia per la derivata",
        "\\pdv{f}{x}": "Scorciatoia per la derivata parziale",
      },
      faqHeading: "Domande frequenti sui simboli di analisi in LaTeX",
      faq: [
        {
          question: "Come si scrive una derivata in LaTeX?",
          answer:
            "Scrivila come frazione in modalità matematica: $\\frac{dy}{dx}$ per dy/dx e $\\frac{d^2y}{dx^2}$ per la derivata seconda. La notazione con apice è f'(x) e f''(x), e la notazione con il punto di Newton è \\dot{x} e \\ddot{x}. Sono tutte integrate; il pacchetto physics aggiunge \\dv{y}{x} come scorciatoia.",
        },
        {
          question: "Come si scrive una derivata parziale in LaTeX?",
          answer:
            "Usa il simbolo integrato \\partial dentro una frazione: $\\frac{\\partial f}{\\partial x}$, e $\\frac{\\partial^2 f}{\\partial x \\partial y}$ per una derivata seconda mista. Con \\usepackage{physics}, \\pdv{f}{x} e \\pdv{f}{x}{y} producono lo stesso risultato.",
        },
        {
          question: "Come si scrive un integrale con gli estremi in LaTeX?",
          answer:
            "Usa \\int con un pedice e un apice: $\\int_a^b f(x)\\,dx$. Aggiungi \\limits (\\int\\limits_a^b) per mettere gli estremi sopra e sotto il segno. Per integrali doppi e tripli carica amsmath e usa \\iint e \\iiint, che spaziano correttamente i segni; \\oint dà un integrale su un contorno chiuso.",
        },
      ],
    },
    combinatorics: {
      title: "Coefficiente binomiale e fattoriale in LaTeX: simboli di calcolo combinatorio",
      intro: (
        <IntroP>
          Per scrivere «n su k» in LaTeX, carica amsmath e usa <Cmd>{"\\binom{n}{k}"}</Cmd>, che
          stampa il coefficiente binomiale tra parentesi e ne adatta la dimensione alle formule nel
          testo o in display; <Cmd>{"\\dbinom"}</Cmd> e <Cmd>{"\\tbinom"}</Cmd> forzano la
          dimensione grande o piccola. Un fattoriale in LaTeX non richiede alcun comando:{" "}
          <Cmd>{"n!"}</Cmd> è la lettera seguita da un punto esclamativo, quindi la formula del
          coefficiente binomiale è <Cmd>{"\\frac{n!}{k!(n-k)!}"}</Cmd>. La tabella raccoglie i
          comandi di calcolo combinatorio più usati, con il pacchetto richiesto da ciascuno;
          l&rsquo;elenco completo dei simboli si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: coefficienti binomiali e fattoriali",
      use: {
        "\\binom{n}{k}": "n su k (coefficiente binomiale)",
        "\\dbinom{n}{k}": "Binomiale in dimensione display, anche nel testo",
        "\\tbinom{n}{k}": "Binomiale in dimensione testo, anche nelle formule in display",
        "{n \\choose k}": "\\choose di plain TeX (da evitare con amsmath)",
        "n!": "Fattoriale",
        "n!!": "Semifattoriale (doppio fattoriale)",
        "\\frac{n!}{k!(n-k)!}": "Formula del coefficiente binomiale",
        "\\binom{n}{k_1, k_2, \\ldots, k_m}": "Coefficiente multinomiale",
        "P(n, k) = \\frac{n!}{(n-k)!}": "Disposizioni semplici di n elementi a k a k",
        "n^{\\underline{k}}": "Fattoriale decrescente",
      },
      faqHeading: "Domande frequenti sui simboli di calcolo combinatorio in LaTeX",
      faq: [
        {
          question: "Come si scrive «n su k» in LaTeX?",
          answer:
            "Carica amsmath e scrivi \\binom{n}{k}, che stampa n su k tra parentesi e ne adatta la dimensione alle formule nel testo o in display. Usa \\dbinom{n}{k} per forzare la dimensione grande delle formule in display e \\tbinom{n}{k} per la dimensione piccola del testo. Anche la forma di plain TeX {n \\choose k} funziona, ma amsmath la sconsiglia.",
        },
        {
          question: "Come si scrive un fattoriale in LaTeX?",
          answer:
            "Un fattoriale non richiede alcun comando: scrivi n! in modalità matematica. Il semifattoriale è n!!, e per un’espressione racchiudila tra parentesi, come in (n+1)!. La formula del coefficiente binomiale è \\frac{n!}{k!(n-k)!}.",
        },
        {
          question: "Come si scrive un coefficiente multinomiale in LaTeX?",
          answer:
            "Riutilizza \\binom con un elenco nell’argomento inferiore: \\binom{n}{k_1, k_2, \\ldots, k_m}. Oppure scrivilo per esteso come \\frac{n!}{k_1!\\,k_2!\\cdots k_m!}.",
        },
      ],
    },
    complex: {
      title: "Simbolo dei numeri complessi e coniugato in LaTeX",
      intro: (
        <IntroP>
          Il simbolo dei numeri complessi è la C da lavagna &#8450;, che in LaTeX si scrive{" "}
          <Cmd>{"\\mathbb{C}"}</Cmd> con il pacchetto amssymb. Il complesso coniugato in LaTeX è{" "}
          <Cmd>{"\\bar{z}"}</Cmd> per una sola lettera o <Cmd>{"\\overline{z}"}</Cmd> per
          un&rsquo;intera espressione, e in fisica si scrive <Cmd>{"z^*"}</Cmd>. Parte reale e parte
          immaginaria sono <Cmd>{"\\Re"}</Cmd> e <Cmd>{"\\Im"}</Cmd>, oppure la forma in tondo{" "}
          <Cmd>{"\\operatorname{Re}"}</Cmd>; il modulo è <Cmd>{"|z|"}</Cmd> e l&rsquo;argomento{" "}
          <Cmd>{"\\arg z"}</Cmd>. La tabella raccoglie i simboli dei numeri complessi più usati, con
          il pacchetto richiesto da ciascuno; l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: notazione dei numeri complessi",
      use: {
        "\\mathbb{C}": "Insieme dei numeri complessi",
        "z = a + bi": "Forma algebrica",
        "\\bar{z}": "Complesso coniugato (una lettera)",
        "\\overline{z + w}": "Coniugato di un’espressione",
        "z^*": "Coniugato, notazione della fisica",
        "\\Re(z)": "Parte reale, ℜ gotica (Fraktur)",
        "\\Im(z)": "Parte immaginaria, ℑ gotica (Fraktur)",
        "\\operatorname{Re}(z)": "Parte reale, in tondo (anche Im)",
        "|z|": "Modulo (valore assoluto)",
        "\\arg z": "Argomento",
        "re^{i\\theta}": "Forma polare",
        "\\mathrm{i}": "Unità immaginaria in tondo",
      },
      faqHeading: "Domande frequenti sui numeri complessi in LaTeX",
      faq: [
        {
          question: "Qual è il simbolo dei numeri complessi?",
          answer:
            "L’insieme dei numeri complessi è la C da lavagna, ℂ. In LaTeX scrivi \\mathbb{C} con \\usepackage{amssymb} (o amsfonts), come in z \\in \\mathbb{C}. I numeri reali sono \\mathbb{R} nello stesso stile.",
        },
        {
          question: "Come si scrive il complesso coniugato in LaTeX?",
          answer:
            "Usa \\bar{z} per una sola lettera e \\overline{z + w} per un’espressione più lunga, perché \\overline si estende su tutto il suo argomento. In fisica e ingegneria si scrive spesso z^*, e la trasposta coniugata di una matrice è A^\\dagger o A^*.",
        },
        {
          question: "Come si scrivono parte reale e parte immaginaria in LaTeX?",
          answer:
            "I comandi integrati \\Re e \\Im stampano le lettere gotiche ℜ e ℑ. Per le forme in tondo Re e Im usate dalla maggior parte dei testi attuali, scrivi \\operatorname{Re}(z) e \\operatorname{Im}(z) con amsmath, oppure ridefinisci gli originali una volta con \\renewcommand{\\Re}{\\operatorname{Re}}.",
        },
      ],
    },
    "computer-science": {
      title: "Simboli di informatica in LaTeX: O grande, parte intera e notazione degli algoritmi",
      intro: (
        <IntroP>
          La maggior parte dei simboli di informatica in LaTeX sono normali comandi matematici. La
          notazione O grande in LaTeX è <Cmd>{"O(n \\log n)"}</Cmd> o, in molti articoli, la
          calligrafica <Cmd>{"\\mathcal{O}(n)"}</Cmd>; le sue parenti sono{" "}
          <Cmd>{"\\Omega(n)"}</Cmd>, <Cmd>{"\\Theta(n)"}</Cmd> e la o piccolo <Cmd>{"o(n)"}</Cmd>.
          Le parti intere inferiore e superiore sono <Cmd>{"\\lfloor x \\rfloor"}</Cmd> e{" "}
          <Cmd>{"\\lceil x \\rceil"}</Cmd>, lo XOR è <Cmd>{"\\oplus"}</Cmd>, l&rsquo;assegnazione
          nello pseudocodice è <Cmd>{"\\gets"}</Cmd>, e una definizione con := risulta più pulita
          con <Cmd>{"\\coloneqq"}</Cmd> di mathtools. La tabella raccoglie i simboli di informatica
          più usati, con il pacchetto richiesto da ciascuno; l&rsquo;elenco completo si trova più
          in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: complessità, arrotondamento e algoritmi",
      use: {
        "O(n \\log n)": "O grande (limite superiore)",
        "\\mathcal{O}(n)": "O grande, stile calligrafico",
        "\\Omega(n)": "Omega grande (limite inferiore)",
        "\\Theta(n^2)": "Theta grande (limite stretto)",
        "o(n)": "o piccolo",
        "\\lfloor \\log_2 n \\rfloor": "Parte intera inferiore del logaritmo in base 2",
        "\\lceil n/2 \\rceil": "Parte intera superiore",
        "a \\bmod n": "Modulo come operatore binario",
        "\\oplus": "XOR",
        "x \\gets x + 1": "Assegnazione nello pseudocodice",
        "\\coloneqq": "Definito come (:=)",
        "\\{0,1\\}^*": "Tutte le stringhe binarie (stella di Kleene)",
      },
      faqHeading: "Domande frequenti sui simboli di informatica in LaTeX",
      faq: [
        {
          question: "Come si scrive la notazione O grande in LaTeX?",
          answer:
            "Scrivi O(n) in modalità matematica: $O(n \\log n)$. Molti autori preferiscono la forma calligrafica $\\mathcal{O}(n)$, che non richiede pacchetti. Omega grande e Theta grande usano le maiuscole greche \\Omega(n) e \\Theta(n), e la o piccolo è o(n). Scrivi \\log e non log, così il nome della funzione appare in tondo.",
        },
        {
          question: "Come si scrivono le funzioni parte intera inferiore e superiore in LaTeX?",
          answer:
            "Usa i delimitatori integrati \\lfloor x \\rfloor per ⌊x⌋ e \\lceil x \\rceil per ⌈x⌉. Per contenuti alti anteponi \\left e \\right, come in \\left\\lfloor \\frac{n}{2} \\right\\rfloor, oppure definisci \\floor e \\ceil con \\DeclarePairedDelimiter di mathtools.",
        },
        {
          question: "Come si scrive mod in LaTeX?",
          answer:
            "Usa \\bmod per l’operatore binario, a \\bmod n, e \\pmod{n} per una congruenza, come in a \\equiv b \\pmod{n}, che stampa (mod n) con la spaziatura corretta. Sono entrambi integrati; amsmath aggiunge \\mod{n} e \\pod{n} per altri stili di spaziatura.",
        },
      ],
    },
    "differential-geometry": {
      title: "Simboli di geometria differenziale in LaTeX: forme, connessioni e curvatura",
      intro: (
        <IntroP>
          I simboli di geometria differenziale in LaTeX si costruiscono con pochi comandi integrati.
          Il prodotto esterno di forme è <Cmd>{"\\alpha \\wedge \\beta"}</Cmd>, con{" "}
          <Cmd>{"\\bigwedge^k V"}</Cmd> per la potenza esterna; il differenziale esterno è{" "}
          <Cmd>{"d\\omega"}</Cmd>; la derivata covariante è <Cmd>{"\\nabla_X Y"}</Cmd>; e la
          derivata di Lie è <Cmd>{"\\mathcal{L}_X"}</Cmd>. I simboli di Christoffel e i tensori di
          curvatura sono lettere con indici, <Cmd>{"\\Gamma^k_{ij}"}</Cmd> e{" "}
          <Cmd>{"R^l{}_{ijk}"}</Cmd>, e lo spazio tangente in un punto è <Cmd>{"T_pM"}</Cmd>. La
          tabella raccoglie i simboli di geometria differenziale più usati; sono tutti integrati, e
          l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: varietà, forme e curvatura",
      use: {
        "T_pM": "Spazio tangente in p",
        "T^*_pM": "Spazio cotangente in p",
        "\\nabla_X Y": "Derivata covariante (connessione)",
        "\\Gamma^k_{ij}": "Simboli di Christoffel",
        "R^l{}_{ijk}": "Tensore di curvatura di Riemann",
        "g_{ij}": "Tensore metrico",
        "\\alpha \\wedge \\beta": "Prodotto esterno di forme",
        "\\bigwedge^k V": "Potenza esterna, k-forme",
        "d\\omega": "Differenziale esterno",
        "\\mathcal{L}_X": "Derivata di Lie",
        "[X, Y]": "Parentesi di Lie di campi vettoriali",
        "\\star\\omega": "Operatore star di Hodge",
      },
      faqHeading: "Domande frequenti sui simboli di geometria differenziale in LaTeX",
      faq: [
        {
          question: "Come si scrive il prodotto esterno (wedge) in LaTeX?",
          answer:
            "Usa \\wedge tra le forme, $\\alpha \\wedge \\beta$; è un operatore binario con la spaziatura corretta. Per la potenza esterna o un grande prodotto esterno su un insieme di indici, usa l’operatore grande \\bigwedge, come in \\bigwedge^k V o \\bigwedge_{i=1}^{n} dx_i. Sono entrambi integrati.",
        },
        {
          question: "Come si scrive la derivata covariante in LaTeX?",
          answer:
            "Scrivi \\nabla con la direzione a pedice: $\\nabla_X Y$, oppure \\nabla_\\mu V^\\nu in notazione con indici. Le derivate parziali lungo le coordinate si scrivono \\partial_\\mu, e anche la notazione con il punto e virgola V^\\nu{}_{;\\mu} è comune nei testi di fisica.",
        },
        {
          question: "Come si scrivono la derivata di Lie e il differenziale esterno in LaTeX?",
          answer:
            "La derivata di Lie è una L calligrafica con pedice, \\mathcal{L}_X T. Il differenziale esterno è una d normale, d\\omega; alcuni autori lo scrivono in tondo con \\mathrm{d}\\omega per distinguerlo da una variabile.",
        },
      ],
    },
    finance: {
      title: "Simboli di valuta e finanza in LaTeX: dollaro, euro e formule",
      intro: (
        <IntroP>
          I simboli di valuta in LaTeX richiedono un po&rsquo; di attenzione, perché il segno del
          dollaro apre la modalità matematica. Scrivilo come <Cmd>{"\\$"}</Cmd> per stampare un
          segno del dollaro; il simbolo della sterlina è <Cmd>{"\\pounds"}</Cmd>, e il simbolo
          dell&rsquo;euro è <Cmd>{"\\texteuro"}</Cmd>, oppure <Cmd>{"\\euro"}</Cmd> del pacchetto
          eurosym per il disegno ufficiale. La percentuale è <Cmd>{"\\%"}</Cmd> perché un % senza
          barra rovesciata apre un commento, e il per mille è <Cmd>{"\\textperthousand"}</Cmd>. Le
          formule finanziarie, come il valore attuale netto o l&rsquo;interesse composto, sono
          normale matematica costruita con <Cmd>{"\\sum"}</Cmd> e <Cmd>{"\\frac"}</Cmd>. La tabella
          raccoglie i simboli finanziari più usati, con il pacchetto richiesto da ciascuno;
          l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: valute, percentuali e formule",
      use: {
        "\\$": "Segno del dollaro",
        "\\pounds": "Sterlina",
        "\\texteuro": "Simbolo dell’euro (textcomp, integrato)",
        "\\euro": "Simbolo ufficiale dell’euro",
        "\\textyen": "Simbolo dello yen (textcomp, integrato)",
        "\\%": "Percentuale",
        "\\textperthousand": "Per mille (textcomp, integrato)",
        "\\mathrm{NPV} = \\sum_{t=0}^{n} \\frac{C_t}{(1+r)^t}": "Valore attuale netto (VAN)",
        "A = P\\left(1 + \\frac{r}{n}\\right)^{nt}": "Interesse composto",
        "A = Pe^{rt}": "Capitalizzazione continua",
        "\\pm": "Più o meno",
      },
      faqHeading: "Domande frequenti sui simboli finanziari in LaTeX",
      faq: [
        {
          question: "Come si scrive il segno del dollaro in LaTeX?",
          answer:
            "Precedilo con una barra rovesciata: \\$ stampa $ sia in modalità testo sia in modalità matematica, per esempio \\$100. Un $ da solo apre o chiude la modalità matematica, per questo un segno del dollaro non protetto in un prezzo provoca errori o trasforma il resto della riga in una formula.",
        },
        {
          question: "Come si scrive il simbolo dell’euro in LaTeX?",
          answer:
            "\\texteuro (da textcomp, che ora fa parte del nucleo di LaTeX) stampa il simbolo dell’euro del font corrente senza pacchetti aggiuntivi. Per il disegno ufficiale dell’UE carica \\usepackage{eurosym} e scrivi \\euro. Con XeLaTeX o LuaLaTeX puoi anche digitare € direttamente.",
        },
        {
          question: "Come si scrive il simbolo di percentuale in LaTeX?",
          answer:
            "Scrivi \\%. Un % senza barra rovesciata apre un commento, quindi tutto ciò che lo segue sulla riga scompare dal documento. Per il per mille usa \\textperthousand, e per i numeri con unità il pacchetto siunitx offre \\qty{5}{\\percent}.",
        },
      ],
    },
    "game-theory": {
      title: "Simboli di teoria dei giochi in LaTeX: strategie, payoff ed equilibri",
      intro: (
        <IntroP>
          La notazione di teoria dei giochi in LaTeX consiste soprattutto in lettere con indici,
          quindi la chiave è usare pedici coerenti. La strategia di un giocatore è{" "}
          <Cmd>{"s_i"}</Cmd>, le strategie di tutti gli altri sono <Cmd>{"s_{-i}"}</Cmd>, il payoff
          è <Cmd>{"u_i(s_i, s_{-i})"}</Cmd>, e un equilibrio di Nash si indica con un asterisco,{" "}
          <Cmd>{"s^*"}</Cmd>. Le strategie miste usano{" "}
          <Cmd>{"\\sigma_i \\in \\Delta(S_i)"}</Cmd>, le preferenze usano <Cmd>{"\\succ"}</Cmd> e{" "}
          <Cmd>{"\\succeq"}</Cmd>, e la miglior risposta si scrive meglio con{" "}
          <Cmd>{"\\operatorname{BR}_i"}</Cmd> di amsmath. Le matrici dei payoff sono tabelle
          costruite con array. La tabella raccoglie i simboli di teoria dei giochi più usati, con il
          pacchetto richiesto da ciascuno; l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: strategie, payoff ed equilibri",
      use: {
        "s_i \\in S_i": "Strategia del giocatore i",
        "s_{-i}": "Strategie di tutti gli altri giocatori",
        "u_i(s_i, s_{-i})": "Payoff (utilità) del giocatore i",
        "s^* = (s_1^*, \\ldots, s_n^*)": "Profilo di equilibrio di Nash",
        "\\operatorname{BR}_i(s_{-i})": "Miglior risposta",
        "\\sigma_i \\in \\Delta(S_i)": "Strategia mista",
        "\\mathbb{E}[u_i(\\sigma)]": "Payoff atteso",
        "a \\succ b": "Preferenza stretta",
        "a \\succeq b": "Preferenza debole",
        "\\max_{s_i} \\min_{s_{-i}} u_i": "Valore maximin",
        "\\phi_i(v)": "Valore di Shapley",
        "v(S)": "Valore della coalizione S",
      },
      faqHeading: "Domande frequenti sui simboli di teoria dei giochi in LaTeX",
      faq: [
        {
          question: "Come si scrive una matrice dei payoff in LaTeX?",
          answer:
            "Usa un array dentro una formula in display, con una linea verticale dopo le etichette delle righe: \\begin{array}{c|cc} & L & R \\\\ \\hline U & 3,3 & 0,5 \\\\ D & 5,0 & 1,1 \\end{array}. Per un gioco in forma strategica con i nomi dei giocatori, il pacchetto sgame offre un ambiente game.",
        },
        {
          question: "Come si scrive s meno i in LaTeX?",
          answer:
            "Metti il segno meno e l’indice tra graffe: s_{-i}. Senza graffe, s_-i abbassa solo il segno meno. Lo stesso vale per profili come (s_i', s_{-i}) e per le migliori risposte come BR_i(s_{-i}).",
        },
        {
          question: "Come si indica un equilibrio di Nash in LaTeX?",
          answer:
            "Usa un asterisco come apice: s^* per il profilo e s_i^* per la strategia di equilibrio di un giocatore. La condizione di equilibrio è u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) per ogni s_i \\in S_i.",
        },
      ],
    },
    geometry: {
      title: "Simboli di geometria in LaTeX: perpendicolare, parallelo, angolo e triangolo",
      intro: (
        <IntroP>
          I simboli di geometria in LaTeX sono per lo più integrati. Perpendicolare, che è anche il
          simbolo di ortogonalità, è <Cmd>{"\\perp"}</Cmd> (⊥), parallelo è{" "}
          <Cmd>{"\\parallel"}</Cmd> (∥), un angolo è <Cmd>{"\\angle ABC"}</Cmd> e un triangolo è{" "}
          <Cmd>{"\\triangle ABC"}</Cmd>. Congruente è <Cmd>{"\\cong"}</Cmd> e simile è{" "}
          <Cmd>{"\\sim"}</Cmd>. Un segmento porta una barra, <Cmd>{"\\overline{AB}"}</Cmd>, una
          semiretta o un vettore porta una freccia, <Cmd>{"\\overrightarrow{AB}"}</Cmd>, e il
          simbolo di grado è un cerchietto ad apice, <Cmd>{"90^\\circ"}</Cmd>. Solo pochi extra,
          come <Cmd>{"\\measuredangle"}</Cmd> e <Cmd>{"\\nparallel"}</Cmd>, richiedono amssymb. La
          tabella raccoglie i simboli di geometria più usati, con il pacchetto richiesto da
          ciascuno; l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: i simboli di geometria più usati",
      use: {
        "\\perp": "Perpendicolare, ortogonale",
        "\\parallel": "Parallelo",
        "\\nparallel": "Non parallelo",
        "\\angle ABC": "Angolo",
        "\\measuredangle ABC": "Angolo misurato",
        "\\triangle ABC": "Triangolo",
        "\\cong": "Congruente",
        "\\sim": "Simile",
        "\\overline{AB}": "Segmento",
        "\\overrightarrow{AB}": "Semiretta o vettore",
        "\\overleftrightarrow{AB}": "Retta passante per A e B",
        "90^\\circ": "Simbolo di grado",
      },
      faqHeading: "Domande frequenti sui simboli di geometria in LaTeX",
      faq: [
        {
          question: "Come si scrive il simbolo di perpendicolare o ortogonale in LaTeX?",
          answer:
            "Usa \\perp in modalità matematica: $AB \\perp CD$ stampa AB ⊥ CD. Lo stesso comando serve per i vettori ortogonali, u \\perp v, e per il complemento ortogonale V^\\perp. È integrato, quindi non richiede alcun pacchetto.",
        },
        {
          question: "Come si scrive il simbolo di triangolo in LaTeX?",
          answer:
            "\\triangle stampa △, come in $\\triangle ABC$, e non richiede pacchetti. amssymb aggiunge il più piccolo \\vartriangle e quello pieno \\blacktriangle.",
        },
        {
          question: "Come si scrive il simbolo di grado in LaTeX?",
          answer:
            "In modalità matematica scrivi un cerchietto come apice: $90^\\circ$. Nel testo, \\textdegree stampa °, e il pacchetto siunitx dà un risultato uniforme con \\ang{45} o \\qty{90}{\\degree}.",
        },
      ],
    },
    "graph-theory": {
      title: "Simboli di teoria dei grafi in LaTeX: vertici, archi, grado e colorazione",
      intro: (
        <IntroP>
          La notazione di teoria dei grafi in LaTeX consiste soprattutto in lettere normali e
          operatori integrati. Un grafo è <Cmd>{"G = (V, E)"}</Cmd>, l&rsquo;adiacenza è{" "}
          <Cmd>{"u \\sim v"}</Cmd>, il grado di un vertice è <Cmd>{"\\deg(v)"}</Cmd>{" "}
          (l&rsquo;operatore <Cmd>{"\\deg"}</Cmd> è integrato), e i grafi completi e bipartiti
          completi sono <Cmd>{"K_n"}</Cmd> e <Cmd>{"K_{m,n}"}</Cmd>. Gli invarianti dei grafi usano
          lettere greche: il numero cromatico <Cmd>{"\\chi(G)"}</Cmd>, il numero di clique{" "}
          <Cmd>{"\\omega(G)"}</Cmd>, il numero di indipendenza <Cmd>{"\\alpha(G)"}</Cmd>, e i gradi
          massimo e minimo <Cmd>{"\\Delta(G)"}</Cmd> e <Cmd>{"\\delta(G)"}</Cmd>. Per disegnare il
          grafo vero e proprio, usa TikZ. La tabella raccoglie i simboli di teoria dei grafi più
          usati; sono tutti integrati, e l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: i simboli di teoria dei grafi più usati",
      use: {
        "G = (V, E)": "Grafo con insieme dei vertici V e insieme degli archi E",
        "u \\sim v": "u è adiacente a v",
        "\\deg(v)": "Grado di un vertice",
        "\\deg^{+}(v)": "Grado uscente (\\deg^{-} per il grado entrante)",
        "N(v)": "Vicinato di v",
        "K_n": "Grafo completo",
        "K_{m,n}": "Grafo bipartito completo",
        "\\chi(G)": "Numero cromatico",
        "\\omega(G)": "Numero di clique",
        "\\alpha(G)": "Numero di indipendenza",
        "\\Delta(G)": "Grado massimo (\\delta(G) per il minimo)",
        "G \\cong H": "Grafi isomorfi",
      },
      faqHeading: "Domande frequenti sui simboli di teoria dei grafi in LaTeX",
      faq: [
        {
          question: "Come si scrive il grado di un vertice in LaTeX?",
          answer:
            "Usa l’operatore integrato \\deg, che stampa deg in tondo con la spaziatura corretta: $\\deg(v)$. Per i grafi orientati, \\deg^{+}(v) e \\deg^{-}(v) danno il grado uscente e il grado entrante, e il lemma delle strette di mano si scrive \\sum_{v \\in V} \\deg(v) = 2|E|.",
        },
        {
          question: "Come si disegna un grafo in LaTeX?",
          answer:
            "Carica \\usepackage{tikz}, posiziona i vertici con \\node[circle,draw] (a) at (0,0) {a}; e collegali con \\draw (a) -- (b);. Per grafi più grandi, la libreria graphs di TikZ e il pacchetto tkz-graph semplificano la sintassi.",
        },
        {
          question: "Come si scrive il numero cromatico in LaTeX?",
          answer:
            "Il numero cromatico è \\chi(G), con la lettera greca chi. L’indice cromatico (numero cromatico degli archi) si scrive di solito \\chi'(G), il numero di clique \\omega(G) e il numero di indipendenza \\alpha(G). Sono tutti integrati.",
        },
      ],
    },
    latin: {
      title: "Lettere latine in LaTeX: lettere speciali e accenti",
      intro: (
        <IntroP>
          Le lettere latine che vanno oltre la A-Z, come le legature æ e œ, le scandinave ø e å, la
          ß tedesca e la ł polacca, hanno ciascuna un breve comando in LaTeX: <Cmd>{"\\ae"}</Cmd>,{" "}
          <Cmd>{"\\oe"}</Cmd>, <Cmd>{"\\o"}</Cmd>, <Cmd>{"\\aa"}</Cmd>, <Cmd>{"\\ss"}</Cmd> e{" "}
          <Cmd>{"\\l"}</Cmd>, con le versioni maiuscole come <Cmd>{"\\AE"}</Cmd> e{" "}
          <Cmd>{"\\O"}</Cmd>. Le lettere accentate combinano un comando di accento con la lettera di
          base, per esempio <Cmd>{"\\'e"}</Cmd> per é e <Cmd>{"\\~n"}</Cmd> per ñ. Sono tutti
          integrati e funzionano in modalità testo. La tabella raccoglie i simboli latini più usati;
          l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: lettere speciali e accenti",
      use: {
        "\\ae": "Legatura æ (\\AE per Æ)",
        "\\oe": "Legatura œ (\\OE per Œ)",
        "\\o": "O barrata ø (\\O per Ø)",
        "\\aa": "A con anello å (\\AA per Å)",
        "\\ss": "Eszett tedesca ß",
        "\\l": "Ł polacca ł (\\L per Ł)",
        "\\i": "I senza puntino, base per gli accenti",
        "\\'e": "Accento acuto é",
        "\\\"o": "Dieresi ö",
        "\\~n": "Tilde ñ",
        "\\c{c}": "Cediglia ç",
        "\\v{s}": "Pipa (háček) š",
      },
      faqHeading: "Domande frequenti sulle lettere latine in LaTeX",
      faq: [
        {
          question: "Come si scrivono lettere latine speciali come æ, ø e ß in LaTeX?",
          answer:
            "Ognuna ha un comando integrato di modalità testo: \\ae e \\AE per æ e Æ, \\oe e \\OE per œ e Œ, \\o e \\O per ø e Ø, \\aa e \\AA per å e Å, \\ss per ß, e \\l e \\L per ł e Ł. Dal 2018 LaTeX legge anche UTF-8, quindi puoi digitare le lettere direttamente.",
        },
        {
          question: "Come si usano questi caratteri latini in modalità matematica?",
          answer:
            "I comandi funzionano solo in modalità testo, quindi racchiudili in \\text{...} di amsmath, come in $x_{\\text{\\ae}}$. In modalità matematica le lettere senza puntino hanno i loro comandi, \\imath e \\jmath, usati per vettori con accento come \\hat{\\imath}.",
        },
        {
          question: "Perché le lettere accentate non si copiano né si sillabano bene nel mio PDF?",
          answer:
            "Con la codifica dei font OT1 predefinita, LaTeX costruisce le lettere accentate a partire da due pezzi. Aggiungi \\usepackage[T1]{fontenc} al preambolo perché é, ö e ñ diventino glifi singoli che si sillabano, si cercano e si copiano correttamente.",
        },
      ],
    },
    "linear-algebra": {
      title: "Simboli di algebra lineare in LaTeX: matrici, vettori, trasposta e norme",
      intro: (
        <IntroP>
          L&rsquo;algebra lineare in LaTeX parte dagli ambienti per le matrici di amsmath:{" "}
          <Cmd>{"pmatrix"}</Cmd> per le parentesi tonde, <Cmd>{"bmatrix"}</Cmd> per le quadre e{" "}
          <Cmd>{"vmatrix"}</Cmd> per un determinante. Un vettore è <Cmd>{"\\mathbf{v}"}</Cmd> o{" "}
          <Cmd>{"\\vec{v}"}</Cmd>, la trasposta è <Cmd>{"A^\\top"}</Cmd> (o <Cmd>{"A^T"}</Cmd>),
          l&rsquo;inversa <Cmd>{"A^{-1}"}</Cmd>, la trasposta coniugata <Cmd>{"A^\\dagger"}</Cmd> e
          la norma <Cmd>{"\\|x\\|"}</Cmd>. Il determinante <Cmd>{"\\det"}</Cmd> è integrato, mentre
          traccia e rango si scrivono meglio con <Cmd>{"\\operatorname{tr}"}</Cmd> e{" "}
          <Cmd>{"\\operatorname{rank}"}</Cmd>. La tabella raccoglie i simboli di algebra lineare più
          usati, con il pacchetto richiesto da ciascuno; l&rsquo;elenco completo si trova più in
          basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: matrici, vettori e operazioni",
      use: {
        "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}": "Matrice tra parentesi tonde",
        "\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}": "Matrice tra parentesi quadre",
        "\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}": "Barre del determinante",
        "\\mathbf{v}": "Vettore in grassetto",
        "\\vec{v}": "Vettore con freccia",
        "A^\\top": "Trasposta",
        "A^{-1}": "Inversa",
        "A^\\dagger": "Trasposta coniugata",
        "\\det(A)": "Determinante",
        "\\operatorname{tr}(A)": "Traccia",
        "\\|x\\|_2": "Norma euclidea",
        "\\langle u, v \\rangle": "Prodotto scalare (prodotto interno)",
      },
      faqHeading: "Domande frequenti sull’algebra lineare in LaTeX",
      faq: [
        {
          question: "Come si scrive una matrice in LaTeX?",
          answer:
            "Carica amsmath e usa un ambiente per matrici in modalità matematica, separando le colonne con & e le righe con \\\\: \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}. pmatrix dà parentesi tonde, bmatrix quadre, Bmatrix graffe, vmatrix barre singole per un determinante e Vmatrix barre doppie.",
        },
        {
          question: "Come si scrive la trasposta in LaTeX?",
          answer:
            "Scrivi A^\\top, che stampa una piccola T, oppure semplicemente A^T, o A^\\intercal di amssymb. Scegli una forma e usala in modo coerente; A^\\top è comune nei testi attuali perché non si confonde con una variabile T.",
        },
        {
          question: "Come si scrive un vettore in LaTeX?",
          answer:
            "Usa \\mathbf{v} per un vettore in grassetto o \\vec{v} per un accento a freccia; \\boldsymbol{v} di amsmath funziona anche con le lettere greche. Un vettore colonna è una matrice con una sola colonna: \\begin{pmatrix} x \\\\ y \\end{pmatrix}.",
        },
      ],
    },
    "machine-learning": {
      title: "Simbolo del gradiente in LaTeX e altra notazione di machine learning",
      intro: (
        <IntroP>
          Il simbolo del gradiente in LaTeX è <Cmd>{"\\nabla"}</Cmd>, che stampa &nabla; e non
          richiede alcun pacchetto: scrivi <Cmd>{"\\nabla f"}</Cmd> per il gradiente di{" "}
          <Cmd>{"f"}</Cmd>, o <Cmd>{"\\nabla_\\theta \\mathcal{L}"}</Cmd> per il gradiente di una
          funzione di perdita rispetto ai parametri. Le derivate parziali usano{" "}
          <Cmd>{"\\partial"}</Cmd>, le previsioni sono <Cmd>{"\\hat{y}"}</Cmd>, il valore atteso è{" "}
          <Cmd>{"\\mathbb{E}"}</Cmd> e l&rsquo;argmax è <Cmd>{"\\operatorname*{arg\\,max}"}</Cmd>.
          La tabella raccoglie i comandi più usati per scrivere un gradiente in LaTeX, con il
          pacchetto richiesto da ciascuno; l&rsquo;elenco completo dei simboli di machine learning
          si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: gradienti, perdite e ottimizzazione",
      use: {
        "\\nabla": "Simbolo del gradiente (nabla)",
        "\\nabla_\\theta \\mathcal{L}": "Gradiente della perdita rispetto a θ",
        "\\partial": "Derivata parziale",
        "\\frac{\\partial \\mathcal{L}}{\\partial w}": "Derivata parziale della perdita",
        "\\mathcal{L}": "Funzione di perdita",
        "\\theta": "Parametri del modello",
        "\\hat{y}": "Previsione, stima",
        "\\mathbb{E}": "Valore atteso",
        "\\operatorname*{arg\\,max}_\\theta": "Argmax con il pedice sotto",
        "\\operatorname*{arg\\,min}_\\theta": "Argmin con il pedice sotto",
        "\\|w\\|_2": "Norma L2 dei pesi",
        "\\odot": "Prodotto di Hadamard (elemento per elemento)",
      },
      faqHeading: "Domande frequenti sulla notazione di machine learning in LaTeX",
      faq: [
        {
          question: "Come si scrive il simbolo del gradiente in LaTeX?",
          answer:
            "Il simbolo del gradiente ∇ è \\nabla, è integrato in LaTeX e si usa in modalità matematica: $\\nabla f$. Metti a pedice la variabile rispetto a cui derivi, come in \\nabla_\\theta \\mathcal{L}(\\theta), e scrivi il laplaciano come \\nabla^2 f. Non richiede alcun pacchetto.",
        },
        {
          question: "Come si scrive una derivata parziale in LaTeX?",
          answer:
            "Usa \\partial: \\frac{\\partial f}{\\partial x} per una derivata prima e \\frac{\\partial^2 f}{\\partial x^2} per una derivata seconda. Una componente del gradiente si scrive allo stesso modo, per esempio \\frac{\\partial \\mathcal{L}}{\\partial w_i}.",
        },
        {
          question: "Come si scrivono argmax e argmin in LaTeX?",
          answer:
            "Con amsmath, scrivi \\operatorname*{arg\\,max}_\\theta f(\\theta); l’asterisco mette il pedice sotto nelle formule in display. Se lo usi spesso, dichiaralo una volta nel preambolo con \\DeclareMathOperator*{\\argmax}{arg\\,max} e poi scrivi \\argmax_\\theta. Anche la scorciatoia \\arg\\max_\\theta funziona, ma in quel caso il pedice finisce solo sotto max e non sotto l’intero arg max.",
        },
        {
          question: "Come si scrivono il valore atteso e la funzione di perdita in LaTeX?",
          answer:
            "Il valore atteso è la E da lavagna \\mathbb{E}, che richiede \\usepackage{amssymb}, come in \\mathbb{E}_{x \\sim p}[f(x)]. La funzione di perdita è di solito una L calligrafica, \\mathcal{L}, che è integrata.",
        },
      ],
    },
    "modal-logic": {
      title: "Simboli di logica modale in LaTeX: box, diamante e semantica di Kripke",
      intro: (
        <IntroP>
          I due simboli di base della logica modale in LaTeX sono <Cmd>{"\\Box"}</Cmd> per la
          necessità (□) e <Cmd>{"\\Diamond"}</Cmd> per la possibilità (◇), entrambi di amssymb;{" "}
          <Cmd>{"\\Box p"}</Cmd> si legge «è necessario che p» e <Cmd>{"\\Diamond p"}</Cmd> «è
          possibile che p». La semantica di Kripke usa <Cmd>{"\\models"}</Cmd> (integrato) o{" "}
          <Cmd>{"\\Vdash"}</Cmd>, come in <Cmd>{"\\mathcal{M}, w \\models p"}</Cmd>, con una
          relazione di accessibilità <Cmd>{"wRv"}</Cmd>. La logica epistemica scrive la conoscenza
          come <Cmd>{"K_a p"}</Cmd>, e la logica temporale aggiunge <Cmd>{"\\bigcirc p"}</Cmd> per
          «prossimo» e <Cmd>{"p \\mathbin{\\mathcal{U}} q"}</Cmd> per «fino a». La tabella raccoglie
          i simboli di logica modale più usati, con il pacchetto richiesto da ciascuno;
          l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: operatori modali, epistemici e temporali",
      use: {
        "\\Box p": "Necessariamente p",
        "\\Diamond p": "Possibilmente p",
        "\\Box(p \\to q)": "Necessità di un’implicazione (assioma K)",
        "\\neg\\Box\\neg p": "Non necessariamente non p, equivale a \\Diamond p",
        "\\mathcal{M}, w \\models p": "p è vera nel mondo w",
        "w \\Vdash p": "Forcing, soddisfacimento",
        "wRv": "Relazione di accessibilità",
        "K_a p": "L’agente a sa che p",
        "B_a p": "L’agente a crede che p",
        "C_G p": "Conoscenza comune nel gruppo G",
        "\\bigcirc p": "Prossimo (logica temporale)",
        "p \\mathbin{\\mathcal{U}} q": "Fino a (logica temporale)",
      },
      faqHeading: "Domande frequenti sui simboli di logica modale in LaTeX",
      faq: [
        {
          question: "Come si scrivono i simboli box e diamante in LaTeX?",
          answer:
            "Carica \\usepackage{amssymb} e scrivi \\Box p per la necessità e \\Diamond p per la possibilità. Il pacchetto latexsym offre gli stessi due comandi. Tieni presente che il comando integrato \\diamond è un piccolo operatore binario, non il diamante modale.",
        },
        {
          question: "Come si scrive il simbolo di soddisfacimento (doppio tornello) in LaTeX?",
          answer:
            "\\models è integrato e stampa ⊨, come in $\\mathcal{M}, w \\models \\varphi$. amssymb aggiunge \\vDash (⊨), \\Vdash (⊩) per il forcing e \\nvDash per «non soddisfa»; \\vdash (⊢) per la derivabilità è integrato.",
        },
        {
          question: "Come si scrivono «fino a» e «prossimo» della logica temporale in LaTeX?",
          answer:
            "Usa \\bigcirc p per «prossimo», e trasforma la U calligrafica in un operatore binario per «fino a»: p \\mathbin{\\mathcal{U}} q, che dà la spaziatura corretta. «Sempre» e «prima o poi» si scrivono di solito \\Box p e \\Diamond p, oppure \\mathbf{G} p e \\mathbf{F} p.",
        },
      ],
    },
    "number-theory": {
      title: "Simboli di teoria dei numeri in LaTeX",
      intro: (
        <IntroP>
          Il modulo e l&rsquo;operazione mod in LaTeX hanno diverse forme: <Cmd>{"\\bmod"}</Cmd>{" "}
          per un resto, <Cmd>{"\\pmod{n}"}</Cmd> dopo una congruenza, e{" "}
          <Cmd>{"\\lvert z \\rvert"}</Cmd> per il modulo (valore assoluto) di un numero. La tabella
          raccoglie gli otto comandi più usati, con il pacchetto richiesto da ciascuno;
          l&rsquo;elenco completo dei simboli di teoria dei numeri si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: divisibilità e aritmetica modulare",
      use: {
        "a \\bmod n": "Modulo come operazione binaria",
        "a \\equiv b \\pmod{n}": "Congruenza con (mod n)",
        "a \\equiv b \\mod{n}": "Congruenza senza parentesi",
        "\\lvert z \\rvert": "Modulo / valore assoluto",
        "a \\mid b": "a divide b",
        "a \\nmid b": "a non divide b",
        "\\gcd(a, b)": "Massimo comun divisore",
        "\\operatorname{lcm}(a, b)": "Minimo comune multiplo",
      },
      faqHeading: "Domande frequenti sui simboli di teoria dei numeri in LaTeX",
      faq: [
        {
          question: "Come si scrive mod (modulo) in LaTeX?",
          answer:
            "Usa \\bmod per l’operazione binaria, come in a \\bmod n, e \\pmod{n} dopo una congruenza: a \\equiv b \\pmod{n} aggiunge per te le parentesi e la spaziatura. amsmath offre anche \\mod{n} (senza parentesi) e \\pod{n} (parentesi senza la parola mod).",
        },
        {
          question: "Come si scrive il modulo (valore assoluto) in LaTeX?",
          answer:
            "Scrivi \\lvert z \\rvert con amsmath, oppure \\left| z \\right| quando le barre devono crescere con un contenuto alto. Se lo usi spesso, mathtools ti permette di dichiarare \\DeclarePairedDelimiter{\\abs}{\\lvert}{\\rvert} e poi scrivere \\abs{z}.",
        },
        {
          question: "Come si scrive «divide» in LaTeX?",
          answer:
            "Usa \\mid, come in a \\mid b, che LaTeX spazia come una relazione; una | da sola risulta troppo stretta. La negazione \\nmid (a non divide b) richiede \\usepackage{amssymb}.",
        },
      ],
    },
    operators: {
      title: "Operatori in LaTeX: più cerchiato, per, punto e operatori grandi",
      intro: (
        <IntroP>
          Gli operatori di LaTeX si dividono in due gruppi. Gli operatori binari stanno tra due
          termini con una spaziatura media: <Cmd>{"\\times"}</Cmd>, <Cmd>{"\\cdot"}</Cmd>,{" "}
          <Cmd>{"\\ast"}</Cmd>, <Cmd>{"\\circ"}</Cmd> e la famiglia degli operatori cerchiati{" "}
          <Cmd>{"\\oplus"}</Cmd> (più cerchiato, ⊕), <Cmd>{"\\otimes"}</Cmd> (⊗),{" "}
          <Cmd>{"\\odot"}</Cmd> (⊙) e <Cmd>{"\\ominus"}</Cmd>. Gli operatori grandi accettano
          estremi e crescono nelle formule in display: <Cmd>{"\\sum"}</Cmd>, <Cmd>{"\\prod"}</Cmd>,{" "}
          <Cmd>{"\\bigoplus"}</Cmd>, <Cmd>{"\\bigotimes"}</Cmd> e <Cmd>{"\\bigcup"}</Cmd>. Sono tutti
          integrati. Gli operatori con nome come <Cmd>{"\\max"}</Cmd>, <Cmd>{"\\sin"}</Cmd> e{" "}
          <Cmd>{"\\det"}</Cmd> sono predefiniti, e puoi dichiarare i tuoi con{" "}
          <Cmd>{"\\DeclareMathOperator"}</Cmd> di amsmath. La tabella raccoglie gli operatori di
          LaTeX più usati; l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: operatori binari e grandi",
      use: {
        "\\oplus": "Più cerchiato: somma diretta, XOR",
        "\\otimes": "Per cerchiato: prodotto tensoriale",
        "\\odot": "Punto cerchiato: prodotto di Hadamard",
        "\\ominus": "Meno cerchiato",
        "\\oslash": "Barra cerchiata",
        "\\times": "Prodotto vettoriale, moltiplicazione",
        "\\cdot": "Punto centrato",
        "\\ast": "Operatore asterisco, convoluzione",
        "\\circ": "Composizione",
        "\\star": "Operatore stella",
        "\\bigoplus_{i=1}^{n} V_i": "Somma diretta su un indice",
        "\\bigotimes_{i=1}^{n} V_i": "Prodotto tensoriale su un indice",
      },
      faqHeading: "Domande frequenti sugli operatori in LaTeX",
      faq: [
        {
          question: "Come si scrive il più cerchiato in LaTeX?",
          answer:
            "Usa \\oplus per ⊕, il più cerchiato usato per le somme dirette e lo XOR. È un operatore binario integrato: $A \\oplus B$. Per una somma diretta di molti termini, usa l’operatore grande \\bigoplus_{i=1}^{n} V_i.",
        },
        {
          question: "Come si scrive l’operatore odot (punto cerchiato) in LaTeX?",
          answer:
            "\\odot stampa ⊙ e si usa per il prodotto di Hadamard (elemento per elemento), $A \\odot B$. La versione grande è \\bigodot. Sono entrambi integrati.",
        },
        {
          question: "Come si definisce un nuovo operatore in LaTeX?",
          answer:
            "Carica amsmath e scrivi \\DeclareMathOperator{\\Tr}{Tr} nel preambolo; a quel punto \\Tr(A) stampa Tr in tondo con la spaziatura da operatore. Usa \\DeclareMathOperator* quando gli estremi devono andare sotto, come in \\argmax. Per un uso occasionale, \\operatorname{Tr} fa lo stesso direttamente nella formula.",
        },
      ],
    },
    optimization: {
      title: "Simboli di ottimizzazione in LaTeX: argmax, argmin e vincoli",
      intro: (
        <IntroP>
          La notazione di ottimizzazione in LaTeX ruota attorno a <Cmd>{"\\min"}</Cmd>,{" "}
          <Cmd>{"\\max"}</Cmd> e alle loro versioni arg. <Cmd>{"\\min_{x}"}</Cmd> e{" "}
          <Cmd>{"\\max_{x}"}</Cmd> sono integrati e mettono la variabile sotto l&rsquo;operatore
          nelle formule in display, ma non esiste un <Cmd>{"\\argmax"}</Cmd> integrato: scrivi{" "}
          <Cmd>{"\\operatorname*{arg\\,max}_x"}</Cmd> oppure dichiara <Cmd>{"\\argmax"}</Cmd> una
          volta con <Cmd>{"\\DeclareMathOperator*"}</Cmd> di amsmath. I vincoli seguono{" "}
          <Cmd>{"\\text{s.t.}"}</Cmd> («soggetto a»), la lagrangiana è{" "}
          <Cmd>{"\\mathcal{L}(x, \\lambda)"}</Cmd>, l&rsquo;ottimo è <Cmd>{"x^*"}</Cmd>, e i vincoli
          semidefiniti usano <Cmd>{"\\succeq 0"}</Cmd>. La tabella raccoglie i simboli di
          ottimizzazione più usati, con il pacchetto richiesto da ciascuno; l&rsquo;elenco completo
          si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: obiettivi, vincoli e ottimalità",
      use: {
        "\\operatorname*{arg\\,max}_{x} f(x)": "Argmax con la variabile sotto",
        "\\operatorname*{arg\\,min}_{x} f(x)": "Argmin con la variabile sotto",
        "\\min_{x \\in \\mathcal{X}} f(x)": "Minimizzare su un insieme",
        "\\max_{x} f(x)": "Massimizzare",
        "\\text{s.t.}": "Soggetto a (in italiano anche \\text{s.a.})",
        "g_i(x) \\leq 0": "Vincolo di disuguaglianza",
        "h_j(x) = 0": "Vincolo di uguaglianza",
        "\\mathcal{L}(x, \\lambda)": "Lagrangiana",
        "\\nabla f(x^*) = 0": "Condizione di ottimalità del primo ordine",
        "\\nabla^2 f(x)": "Matrice hessiana",
        "X \\succeq 0": "Semidefinita positiva",
        "\\lambda_i \\geq 0": "Variabili duali (moltiplicatori)",
      },
      faqHeading: "Domande frequenti sui simboli di ottimizzazione in LaTeX",
      faq: [
        {
          question: "Come si scrive argmax in LaTeX?",
          answer:
            "Scrivi \\operatorname*{arg\\,max}_{x} f(x) con amsmath; l’asterisco mette x sotto l’operatore nelle formule in display. Per riutilizzarlo, aggiungi \\DeclareMathOperator*{\\argmax}{arg\\,max} al preambolo e scrivi \\argmax_x f(x). Anche \\arg\\max stampa arg max, ma il suo pedice si lega solo a max.",
        },
        {
          question: "Come si scrive un problema di ottimizzazione vincolata in LaTeX?",
          answer:
            "Metti obiettivo e vincoli in un ambiente aligned: \\min_{x} \\quad & f(x) \\\\ \\text{s.a.} \\quad & g(x) \\leq 0. Il pacchetto optidef offre gli ambienti mini e maxi, che allineano per te obiettivo e vincoli.",
        },
        {
          question: "Come si scrive «soggetto a» in LaTeX?",
          answer:
            "Usa \\text{s.a.} o \\text{soggetto a} di amsmath (in inglese, \\text{s.t.}) perché le parole compaiano in tondo con la spaziatura normale. Se scrivi s.a. direttamente in modalità matematica, vengono stampate le variabili s e a in corsivo.",
        },
      ],
    },
    order: {
      title: "Minore di, maggiore di e minore o uguale in LaTeX",
      intro: (
        <IntroP>
          In LaTeX i segni minore di e maggiore di si digitano direttamente in modalità matematica
          come <Cmd>{"<"}</Cmd> e <Cmd>{">"}</Cmd>. Minore o uguale in LaTeX è{" "}
          <Cmd>{"\\leq"}</Cmd> (o l&rsquo;alias <Cmd>{"\\le"}</Cmd>), maggiore o uguale è{" "}
          <Cmd>{"\\geq"}</Cmd> (<Cmd>{"\\ge"}</Cmd>) e diverso da è <Cmd>{"\\neq"}</Cmd>; tutti e tre
          sono integrati, quindi <Cmd>{"$a \\leq b$"}</Cmd> funziona in qualsiasi documento. Molto
          minore di è <Cmd>{"\\ll"}</Cmd>, e le forme inclinate, approssimate e negate provengono da
          amssymb. La tabella raccoglie i simboli di disuguaglianza più usati, con il pacchetto
          richiesto da ciascuno; l&rsquo;elenco completo dei simboli d&rsquo;ordine si trova più in
          basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: disuguaglianze e ordine",
      use: {
        "<": "Minore di (si digita direttamente)",
        ">": "Maggiore di (si digita direttamente)",
        "\\leq": "Minore o uguale a (alias \\le)",
        "\\geq": "Maggiore o uguale a (alias \\ge)",
        "\\neq": "Diverso da (alias \\ne)",
        "\\ll": "Molto minore di",
        "\\gg": "Molto maggiore di",
        "\\leqslant": "Minore o uguale a, inclinato",
        "\\lesssim": "Minore o circa uguale a",
        "\\not<": "Non minore di",
        "\\nleq": "Né minore né uguale a",
        "\\prec": "Precede (ordine parziale); \\succ per «segue»",
      },
      faqHeading: "Domande frequenti sui simboli di disuguaglianza in LaTeX",
      faq: [
        {
          question: "Come si scrive minore o uguale in LaTeX?",
          answer:
            "Scrivi \\leq, o il suo alias più breve \\le, in modalità matematica: $a \\leq b$. Maggiore o uguale è \\geq o \\ge. Sono entrambi integrati. Per lo stile inclinato comune nei testi europei, carica amssymb e usa \\leqslant e \\geqslant.",
        },
        {
          question: "Come si scrive il simbolo minore di in LaTeX?",
          answer:
            "In modalità matematica digita < direttamente: $a < b$. Nel testo corrente, fuori dalla modalità matematica, la codifica dei font OT1 predefinita stampa ¡ al posto di <, quindi racchiudilo come $<$, usa \\textless (e \\textgreater per >) oppure carica \\usepackage[T1]{fontenc}.",
        },
        {
          question: "Come si scrive «non minore di» o «diverso da» in LaTeX?",
          answer:
            "Diverso da è \\neq o \\ne. Per le altre relazioni anteponi \\not al simbolo, come in \\not<, oppure carica amssymb per le negazioni specifiche \\nless, \\ngtr, \\nleq e \\ngeq, che risultano più pulite di una barra sovrapposta.",
        },
        {
          question: "Che differenza c’è tra \\leq e \\le in LaTeX?",
          answer:
            "Nessuna: \\le è un alias di \\leq ed entrambi stampano ≤, così come \\ge è un alias di \\geq e \\ne un alias di \\neq. Usa quello che preferisci, ma in modo coerente.",
        },
      ],
    },
    relations: {
      title: "Simboli di relazione in LaTeX: diverso da, circa uguale e minore di",
      intro: (
        <IntroP>
          I simboli di relazione in LaTeX confrontano due espressioni, e quelli comuni sono tutti
          integrati. Diverso da in LaTeX è <Cmd>{"\\neq"}</Cmd> (≠), circa uguale è{" "}
          <Cmd>{"\\approx"}</Cmd> (≈), minore di e maggiore di si digitano come <Cmd>{"<"}</Cmd> e{" "}
          <Cmd>{">"}</Cmd>, e minore o uguale è <Cmd>{"\\leq"}</Cmd> (≤). L&rsquo;equivalenza è{" "}
          <Cmd>{"\\equiv"}</Cmd>, simile è <Cmd>{"\\sim"}</Cmd>, congruente è <Cmd>{"\\cong"}</Cmd>{" "}
          e proporzionale a è <Cmd>{"\\propto"}</Cmd>. Puoi negare qualsiasi relazione anteponendo{" "}
          <Cmd>{"\\not"}</Cmd>, oppure caricare amssymb per forme specifiche come{" "}
          <Cmd>{"\\nleq"}</Cmd> e inclinate come <Cmd>{"\\leqslant"}</Cmd>. La tabella raccoglie le
          relazioni più usate, con il pacchetto richiesto da ciascuna; l&rsquo;elenco completo si
          trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: i simboli di relazione più usati",
      use: {
        "\\neq": "Diverso da (alias \\ne)",
        "\\approx": "Circa uguale",
        "<": "Minore di",
        ">": "Maggiore di",
        "\\leq": "Minore o uguale a",
        "\\geq": "Maggiore o uguale a",
        "\\equiv": "Equivalente, identico, congruo modulo n",
        "\\sim": "Simile, «ha distribuzione»",
        "\\cong": "Congruente, isomorfo",
        "\\propto": "Proporzionale a",
        "\\ll": "Molto minore di (\\gg per molto maggiore di)",
        "\\leqslant": "Minore o uguale a, inclinato",
      },
      faqHeading: "Domande frequenti sui simboli di relazione in LaTeX",
      faq: [
        {
          question: "Come si scrive «diverso da» in LaTeX?",
          answer:
            "Usa \\neq (o il suo alias \\ne) in modalità matematica: $a \\neq b$ stampa a ≠ b. Non richiede alcun pacchetto. Per altre relazioni negate anteponi \\not, come in \\not\\equiv, oppure usa le versioni specifiche di amssymb, come \\nleq e \\ncong.",
        },
        {
          question: "Come si scrive «circa uguale» in LaTeX?",
          answer:
            "\\approx stampa ≈ ed è il simbolo standard di circa uguale: $\\pi \\approx 3.14$. I suoi parenti stretti sono \\simeq (≃), \\cong (≅), \\sim (∼) e \\doteq (≐), tutti integrati, e \\approxeq (≊) di amssymb.",
        },
        {
          question: "Come si scrive «minore di» in LaTeX?",
          answer:
            "In modalità matematica digita < e > direttamente: $a < b$. Nel testo corrente, fuori dalla modalità matematica, usa \\textless e \\textgreater oppure racchiudi il segno in $...$, perché con la vecchia codifica dei font OT1 un < da solo può essere stampato come un punto esclamativo capovolto.",
        },
      ],
    },
    "special-functions": {
      title: "Funzioni speciali in LaTeX: gamma, beta, zeta, erf e Bessel",
      intro: (
        <IntroP>
          Le funzioni speciali in LaTeX si scrivono con lettere greche o con nomi in tondo. La
          funzione gamma è <Cmd>{"\\Gamma(z)"}</Cmd>, la funzione zeta di Riemann{" "}
          <Cmd>{"\\zeta(s)"}</Cmd>, la funzione digamma <Cmd>{"\\psi(x)"}</Cmd> e la delta di Dirac{" "}
          <Cmd>{"\\delta(x)"}</Cmd>. Le funzioni con nomi in lettere latine devono essere in tondo:
          non esiste un <Cmd>{"\\erf"}</Cmd> integrato, quindi scrivi{" "}
          <Cmd>{"\\operatorname{erf}(x)"}</Cmd> oppure dichiaralo una volta con{" "}
          <Cmd>{"\\DeclareMathOperator"}</Cmd> di amsmath. Le funzioni di Bessel e i polinomi
          ortogonali sono lettere con indici, come <Cmd>{"J_n(x)"}</Cmd> e <Cmd>{"P_n(x)"}</Cmd>, e
          la funzione ipergeometrica è <Cmd>{"{}_2F_1(a, b; c; z)"}</Cmd>. La tabella raccoglie le
          funzioni speciali più usate, con il pacchetto richiesto da ciascuna; l&rsquo;elenco
          completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: le funzioni speciali più usate",
      use: {
        "\\Gamma(z)": "Funzione gamma",
        "\\mathrm{B}(x, y)": "Funzione beta (B maiuscola in tondo)",
        "\\zeta(s)": "Funzione zeta di Riemann",
        "\\operatorname{erf}(x)": "Funzione degli errori",
        "\\operatorname{erfc}(x)": "Funzione degli errori complementare",
        "J_n(x)": "Funzione di Bessel di prima specie",
        "Y_n(x)": "Funzione di Bessel di seconda specie",
        "P_n(x)": "Polinomio di Legendre",
        "H_n(x)": "Polinomio di Hermite",
        "{}_2F_1(a, b; c; z)": "Funzione ipergeometrica di Gauss",
        "\\psi(x)": "Funzione digamma",
        "\\delta(x)": "Delta di Dirac",
      },
      faqHeading: "Domande frequenti sulle funzioni speciali in LaTeX",
      faq: [
        {
          question: "Come si scrive la funzione gamma in LaTeX?",
          answer:
            "Usa la lettera greca maiuscola: $\\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt$. Non richiede alcun pacchetto. La funzione beta si scrive di solito con una B in tondo, \\mathrm{B}(x, y), così non si confonde con una variabile.",
        },
        {
          question: "Come si scrive la funzione degli errori erf in LaTeX?",
          answer:
            "LaTeX non ha un comando \\erf. Usa \\operatorname{erf}(x) di amsmath, oppure aggiungi \\DeclareMathOperator{\\erf}{erf} al preambolo e scrivi \\erf(x). Così erf appare in tondo con la spaziatura da operatore, a differenza di erf scritto così com’è, che stampa tre variabili in corsivo.",
        },
        {
          question: "Come si scrive la funzione ipergeometrica in LaTeX?",
          answer:
            "Usa un gruppo vuoto per mettere il pedice a sinistra: {}_2F_1(a, b; c; z). Il pacchetto mathtools offre anche \\prescript{}{2}{F}_{1} per gli indici anteposti, e la forma generalizzata {}_pF_q segue lo stesso schema.",
        },
      ],
    },
    summation: {
      title: "Sommatoria in LaTeX: notazione sigma, produttorie e estremi",
      intro: (
        <IntroP>
          Una sommatoria in LaTeX si scrive con <Cmd>{"\\sum"}</Cmd>, che stampa la sigma maiuscola
          (Σ) come operatore grande: <Cmd>{"\\sum_{i=1}^{n} a_i"}</Cmd> mette l&rsquo;indice sotto e
          l&rsquo;estremo superiore sopra. Il simbolo di produttoria funziona allo stesso modo con{" "}
          <Cmd>{"\\prod_{i=1}^{n}"}</Cmd>. Nelle formule in display gli estremi vanno sopra e sotto
          il segno; nelle formule nel testo finiscono di lato, a meno che tu non aggiunga{" "}
          <Cmd>{"\\limits"}</Cmd> o <Cmd>{"\\displaystyle"}</Cmd>. Le condizioni su più righe sotto
          una sommatoria usano <Cmd>{"\\substack"}</Cmd> di amsmath, e gli operatori insiemistici
          grandi <Cmd>{"\\bigcup"}</Cmd> e <Cmd>{"\\bigcap"}</Cmd> seguono le stesse regole. La
          tabella raccoglie i simboli di sommatoria più usati, con il pacchetto richiesto da
          ciascuno; l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: sommatorie, produttorie ed estremi",
      use: {
        "\\sum_{i=1}^{n} a_i": "Sommatoria (notazione sigma)",
        "\\sum_{n=1}^{\\infty} \\frac{1}{n^2}": "Serie infinita",
        "\\prod_{i=1}^{n} x_i": "Produttoria",
        "\\coprod": "Coprodotto",
        "\\sum\\limits_{i=1}^{n}": "Estremi sopra e sotto in una formula nel testo",
        "\\displaystyle\\sum_{i=1}^{n}": "Sommatoria in dimensione display in una formula nel testo",
        "\\sum_{i=1}^{n} \\sum_{j=1}^{m} a_{ij}": "Sommatoria doppia",
        "\\sum_{\\substack{i < j \\\\ i \\neq k}}": "Condizioni su più righe",
        "\\bigcup_{i \\in I} A_i": "Unione su un indice",
        "\\bigcap_{i=1}^{n} A_i": "Intersezione su un indice",
        "\\sum_{k=0}^{n} \\binom{n}{k}": "Somma di coefficienti binomiali",
      },
      faqHeading: "Domande frequenti sulla sommatoria in LaTeX",
      faq: [
        {
          question: "Come si scrive una sommatoria in LaTeX?",
          answer:
            "Usa \\sum con un pedice e un apice in modalità matematica: $\\sum_{i=1}^{n} a_i$. Racchiudi tra graffe gli estremi di più di un carattere. In un’equazione in display (\\[...\\]) gli estremi compaiono sopra e sotto la sigma; nel testo compaiono di lato.",
        },
        {
          question: "Come si mettono gli estremi sopra e sotto la sommatoria in una formula nel testo?",
          answer:
            "Aggiungi \\limits dopo l’operatore, \\sum\\limits_{i=1}^{n}, oppure dai a tutta la sommatoria la dimensione display con \\displaystyle\\sum_{i=1}^{n}. Usalo con moderazione, perché aumenta l’interlinea del paragrafo.",
        },
        {
          question: "Come si scrive il simbolo di produttoria in LaTeX?",
          answer:
            "\\prod stampa il simbolo di produttoria ∏ e accetta gli estremi esattamente come \\sum: $\\prod_{i=1}^{n} x_i$. Non usare \\Pi, che è la lettera greca: non cresce nelle formule in display e non posiziona correttamente gli estremi.",
        },
      ],
    },
    tensors: {
      title: "Notazione tensoriale in LaTeX: indici, convenzione di Einstein e il pacchetto tensor",
      intro: (
        <IntroP>
          La notazione tensoriale in LaTeX si costruisce con apici e pedici:{" "}
          <Cmd>{"T^{ij}_{kl}"}</Cmd> per un tensore con due indici in alto e due in basso,{" "}
          <Cmd>{"g_{\\mu\\nu}"}</Cmd> per la metrica e <Cmd>{"\\delta^i_j"}</Cmd> per la delta di
          Kronecker. Quando conta l&rsquo;ordine degli indici misti, sfalsali con un gruppo vuoto,{" "}
          <Cmd>{"T^{i}{}_{j}"}</Cmd>, oppure carica il pacchetto tensor e scrivi{" "}
          <Cmd>{"\\tensor{T}{^i_j}"}</Cmd>. Il simbolo di Levi-Civita è{" "}
          <Cmd>{"\\epsilon_{ijk}"}</Cmd>, il prodotto tensoriale è <Cmd>{"\\otimes"}</Cmd>, e la
          convenzione di Einstein consiste semplicemente nel ripetere un indice,{" "}
          <Cmd>{"A^i B_i"}</Cmd>. La tabella raccoglie i simboli tensoriali più usati, con il
          pacchetto richiesto da ciascuno; l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: indici e operazioni con i tensori",
      use: {
        "T^{ij}_{kl}": "Tensore con indici in alto e in basso",
        "T^{i}{}_{j}": "Indici sfalsati (l’ordine conta)",
        "\\tensor{T}{^i_j^k}": "Indici sfalsati in modo semplice",
        "g_{\\mu\\nu}": "Tensore metrico",
        "\\delta^i_j": "Delta di Kronecker",
        "\\epsilon_{ijk}": "Simbolo di Levi-Civita",
        "A^i B_i": "Convenzione di Einstein (indice ripetuto)",
        "A \\otimes B": "Prodotto tensoriale",
        "\\partial_\\mu": "Derivata parziale rispetto a una coordinata",
        "\\nabla_\\mu T^{\\nu}": "Derivata covariante",
        "T_{(ij)}": "Simmetrizzazione",
        "T_{[ij]}": "Antisimmetrizzazione",
      },
      faqHeading: "Domande frequenti sulla notazione tensoriale in LaTeX",
      faq: [
        {
          question: "Come si scrive un tensore con indici in alto e in basso in LaTeX?",
          answer:
            "Combina apici e pedici: $T^{ij}_{kl}$. Se conta l’ordine orizzontale degli indici, inserisci un gruppo vuoto così che non si sovrappongano: T^{i}{}_{j} mette j dopo i. Il pacchetto tensor lo automatizza con \\tensor{T}{^i_j} e T\\indices{^i_j}.",
        },
        {
          question: "Come si scrivono la delta di Kronecker e il simbolo di Levi-Civita in LaTeX?",
          answer:
            "La delta di Kronecker è \\delta_{ij} o \\delta^i_j, e il simbolo di Levi-Civita è \\epsilon_{ijk} o \\varepsilon_{ijk}, a seconda della forma di epsilon usata nel tuo campo. Sono entrambi lettere greche integrate con indici.",
        },
        {
          question: "Come si scrive la convenzione di Einstein in LaTeX?",
          answer:
            "Non c’è alcun comando speciale: ripetere un indice in alto e in basso sottintende la somma, quindi A^i B_i significa \\sum_i A^i B_i. Scrivi la \\sum esplicita solo quando vuoi mostrarla, e usa indici greci come \\mu e \\nu per le componenti dello spazio-tempo.",
        },
      ],
    },
    topology: {
      title: "Simboli di topologia in LaTeX: chiusura, frontiera, omeomorfismo e aleph",
      intro: (
        <IntroP>
          I simboli di topologia in LaTeX sono per lo più integrati. La chiusura di un insieme è{" "}
          <Cmd>{"\\overline{A}"}</Cmd>, la sua frontiera è <Cmd>{"\\partial A"}</Cmd> e il suo
          interno è <Cmd>{"A^\\circ"}</Cmd> o <Cmd>{"\\operatorname{int} A"}</Cmd>. La relazione di
          omeomorfismo si scrive di solito <Cmd>{"\\cong"}</Cmd> (≅), l&rsquo;equivalenza omotopica{" "}
          <Cmd>{"\\simeq"}</Cmd>, il gruppo fondamentale <Cmd>{"\\pi_1(X)"}</Cmd> e
          l&rsquo;omologia <Cmd>{"H_n(X)"}</Cmd>. La notazione insiemistica resta la stessa:
          appartiene a è <Cmd>{"\\in"}</Cmd> e sottoinsieme o uguale è <Cmd>{"\\subseteq"}</Cmd>.
          Per i cardinali, <Cmd>{"\\aleph_0"}</Cmd> è integrato e <Cmd>{"\\beth"}</Cmd> proviene da
          amssymb. La tabella raccoglie i simboli di topologia più usati, con il pacchetto
          richiesto da ciascuno; l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: i simboli di topologia più usati",
      use: {
        "\\overline{A}": "Chiusura",
        "\\partial A": "Frontiera",
        "A^\\circ": "Interno (anche \\operatorname{int} A)",
        "X \\cong Y": "Omeomorfi",
        "X \\simeq Y": "Omotopicamente equivalenti",
        "\\pi_1(X, x_0)": "Gruppo fondamentale",
        "H_n(X)": "n-esimo gruppo di omologia",
        "\\mathcal{T}": "Topologia su un insieme",
        "x \\in U \\subseteq X": "Appartiene a, sottoinsieme o uguale",
        "S^n": "n-sfera",
        "\\aleph_0": "Aleph zero (cardinalità numerabile)",
        "\\beth_1": "Numero beth",
      },
      faqHeading: "Domande frequenti sui simboli di topologia in LaTeX",
      faq: [
        {
          question: "Come si scrive il simbolo di omeomorfismo in LaTeX?",
          answer:
            "La maggior parte dei testi usa \\cong (≅): $X \\cong Y$. Alcuni autori usano \\approx (≈) o \\simeq (≃), anche se \\simeq indica di solito l’equivalenza omotopica. Sono tutti e tre integrati; dichiara la tua convenzione una volta se può esserci ambiguità.",
        },
        {
          question: "Come si scrive il simbolo beth in LaTeX?",
          answer:
            "\\beth stampa ℶ e richiede \\usepackage{amssymb}, che offre anche \\gimel e \\daleth. \\aleph (ℵ) è integrato. I cardinali prendono i pedici come di consueto: \\aleph_0, \\beth_1, e \\mathfrak{c} (amssymb) per la cardinalità del continuo.",
        },
        {
          question: "Come si scrivono la chiusura e l’interno di un insieme in LaTeX?",
          answer:
            "La chiusura è \\overline{A}, o \\bar{A} per una sola lettera, oppure \\operatorname{cl}(A). L’interno è A^\\circ o \\operatorname{int}(A) con amsmath, e la frontiera è \\partial A. Usa \\overline invece di \\bar per tutto ciò che è più lungo di una lettera.",
        },
      ],
    },
    trigonometry: {
      title: "Trigonometria in LaTeX: seno, coseno, tangente e funzioni trigonometriche inverse",
      intro: (
        <IntroP>
          Le funzioni trigonometriche di LaTeX hanno comandi propri: <Cmd>{"\\sin"}</Cmd>,{" "}
          <Cmd>{"\\cos"}</Cmd>, <Cmd>{"\\tan"}</Cmd>, <Cmd>{"\\cot"}</Cmd>, <Cmd>{"\\sec"}</Cmd> e{" "}
          <Cmd>{"\\csc"}</Cmd>, oltre alle inverse <Cmd>{"\\arcsin"}</Cmd>,{" "}
          <Cmd>{"\\arccos"}</Cmd> e <Cmd>{"\\arctan"}</Cmd> e alle iperboliche{" "}
          <Cmd>{"\\sinh"}</Cmd>, <Cmd>{"\\cosh"}</Cmd> e <Cmd>{"\\tanh"}</Cmd>. Usa sempre il comando
          invece di digitare sin, perché il comando mette il nome in tondo con la spaziatura
          corretta, mentre sin scritto così com&rsquo;è stampa tre variabili in corsivo. Le potenze
          vanno subito dopo il nome, <Cmd>{"\\sin^2 \\theta"}</Cmd>, e i gradi sono un cerchietto ad
          apice, <Cmd>{"30^\\circ"}</Cmd>. La tabella raccoglie i simboli trigonometrici più usati,
          con il pacchetto richiesto da ciascuno; l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: funzioni e identità trigonometriche",
      use: {
        "\\sin \\theta": "Seno",
        "\\cos \\theta": "Coseno",
        "\\tan \\theta": "Tangente",
        "\\sec \\theta": "Secante (\\csc cosecante, \\cot cotangente)",
        "\\arcsin x": "Arcoseno",
        "\\arccos x": "Arcocoseno",
        "\\arctan x": "Arcotangente",
        "\\sin^{-1} x": "Arcoseno, notazione a potenza",
        "\\sin^2 \\theta + \\cos^2 \\theta = 1": "Identità fondamentale (pitagorica)",
        "\\sinh x": "Seno iperbolico (\\cosh, \\tanh)",
        "30^\\circ": "Gradi",
        "\\operatorname{arcsec} x": "Arcosecante (non integrato)",
      },
      faqHeading: "Domande frequenti sulla trigonometria in LaTeX",
      faq: [
        {
          question: "Come si scrivono seno, coseno e tangente in LaTeX?",
          answer:
            "Usa i comandi integrati in modalità matematica: $\\sin x$, $\\cos x$, $\\tan x$, e \\cot, \\sec e \\csc per le reciproche. Scrivere sin senza barra rovesciata stampa il prodotto in corsivo s·i·n, ed è per questo che esistono i comandi.",
        },
        {
          question: "Come si scrivono funzioni trigonometriche inverse come l’arcoseno in LaTeX?",
          answer:
            "\\arcsin, \\arccos e \\arctan sono integrati, così come \\sinh, \\cosh, \\tanh e \\coth. \\arcsec, \\arccsc, \\arccot, \\sech e \\csch non lo sono: scrivi \\operatorname{arcsec} x, oppure aggiungi \\DeclareMathOperator{\\arcsec}{arcsec} al preambolo con amsmath. Funziona anche la notazione a potenza \\sin^{-1} x.",
        },
        {
          question: "Come si scrivono seno al quadrato e gradi in LaTeX?",
          answer:
            "Metti l’esponente subito dopo il comando: \\sin^2 \\theta. Per i gradi usa un cerchietto come apice, $30^\\circ$, oppure \\ang{30} di siunitx per una formattazione uniforme nel testo e nelle tabelle.",
        },
      ],
    },
    units: {
      title: "Unità di misura in LaTeX: siunitx, simbolo di grado e unità SI",
      intro: (
        <IntroP>
          Le unità di misura in LaTeX sono più semplici con il pacchetto siunitx:{" "}
          <Cmd>{"\\qty{9.81}{\\metre\\per\\second\\squared}"}</Cmd> compone un numero e la sua
          unità con lettere in tondo e la spaziatura corretta, <Cmd>{"\\unit{\\kilo\\gram}"}</Cmd>{" "}
          stampa un&rsquo;unità da sola e <Cmd>{"\\num{6.022e23}"}</Cmd> formatta un numero. Senza
          siunitx, metti le unità in tondo a mano, come in{" "}
          <Cmd>{"9.81\\,\\mathrm{m/s^2}"}</Cmd>, con uno spazio fine <Cmd>{"\\,"}</Cmd> tra il
          numero e l&rsquo;unità. Il simbolo di grado è <Cmd>{"^\\circ"}</Cmd> in modalità
          matematica o <Cmd>{"\\qty{20}{\\degreeCelsius}"}</Cmd> con siunitx, e l&rsquo;ångström è{" "}
          <Cmd>{"\\AA"}</Cmd>. La tabella raccoglie i comandi per le unità più usati, con il
          pacchetto richiesto da ciascuno; l&rsquo;elenco completo si trova più in basso.
        </IntroP>
      ),
      quickRefHeading: "Riferimento rapido: unità con e senza siunitx",
      use: {
        "\\qty{9.81}{\\metre\\per\\second\\squared}": "Grandezza con unità",
        "\\unit{\\kilo\\gram}": "Unità da sola",
        "\\num{6.022e23}": "Numero formattato",
        "\\qty{20}{\\degreeCelsius}": "Gradi Celsius",
        "\\ang{45}": "Angolo in gradi",
        "\\qty{10}{\\micro\\metre}": "Prefisso SI (micrometro)",
        "\\qty{5}{\\kilo\\ohm}": "Kiloohm",
        "9.81\\,\\mathrm{m/s^2}": "Unità a mano, senza pacchetto",
        "^\\circ": "Simbolo di grado in modalità matematica",
        "\\AA": "Ångström (modalità testo)",
        "\\textdegree": "Simbolo di grado in modalità testo",
        "\\hbar": "Costante di Planck ridotta",
      },
      faqHeading: "Domande frequenti sulle unità di misura in LaTeX",
      faq: [
        {
          question: "Come si scrivono le unità di misura in LaTeX?",
          answer:
            "Carica \\usepackage{siunitx} e scrivi \\qty{3.0}{\\metre\\per\\second} per un valore con unità, \\unit{\\kilo\\gram} per un’unità da sola e \\num{1.5e-3} per un numero. La versione 3 di siunitx usa \\qty e \\unit; i vecchi \\SI e \\si funzionano ancora. Senza il pacchetto, scrivi 3.0\\,\\mathrm{m/s}.",
        },
        {
          question: "Come si scrive il simbolo di grado in LaTeX?",
          answer:
            "In modalità matematica usa un cerchietto come apice: $90^\\circ$, o $20^\\circ\\mathrm{C}$ per la temperatura. Nel testo, \\textdegree stampa °. Con siunitx, \\ang{90} e \\qty{20}{\\degreeCelsius} danno una spaziatura uniforme ovunque.",
        },
        {
          question: "siunitx va in conflitto con il pacchetto physics?",
          answer:
            "Entrambi i pacchetti definiscono un comando \\qty, quindi caricarli insieme provoca un conflitto. Se ti serve physics, per le grandezze con unità usa la vecchia forma di siunitx \\SI{9.81}{\\metre\\per\\second\\squared}, che la versione 3 di siunitx supporta ancora.",
        },
      ],
    },
    accents: {
      title: "Accenti e lettere speciali in LaTeX",
      intro: (
        <>
          <IntroP>
            Nel testo, LaTeX costruisce le lettere accentate a partire da un comando e dalla lettera
            di base: l&rsquo;accento acuto <Cmd>{"\\'e"}</Cmd> (é), il grave <Cmd>{"\\`e"}</Cmd>{" "}
            (è), il circonflesso <Cmd>{"\\^e"}</Cmd> (ê), la dieresi <Cmd>{"\\\"o"}</Cmd> (ö), la
            tilde <Cmd>{"\\~n"}</Cmd> (ñ), la cediglia <Cmd>{"\\c{c}"}</Cmd> (ç), la pipa{" "}
            <Cmd>{"\\v{s}"}</Cmd> (š), la breve <Cmd>{"\\u{a}"}</Cmd> (ă), il doppio acuto ungherese{" "}
            <Cmd>{"\\H{o}"}</Cmd> (ő), il punto sopra <Cmd>{"\\.z"}</Cmd> (ż), il macron{" "}
            <Cmd>{"\\=a"}</Cmd> (ā), il punto sotto <Cmd>{"\\d{a}"}</Cmd>, la barra sotto{" "}
            <Cmd>{"\\b{a}"}</Cmd>, l&rsquo;anello <Cmd>{"\\r{a}"}</Cmd> (å) e l&rsquo;ogonek{" "}
            <Cmd>{"\\k{e}"}</Cmd> (ę). Alcune lettere hanno un comando proprio:{" "}
            <Cmd>{"\\l"}</Cmd> (ł), <Cmd>{"\\o"}</Cmd> (ø), <Cmd>{"\\ae"}</Cmd> (æ) e{" "}
            <Cmd>{"\\ss"}</Cmd> (ß). Per accentare una i o una j, usa le forme senza puntino{" "}
            <Cmd>{"\\i"}</Cmd> e <Cmd>{"\\j"}</Cmd>, come in <Cmd>{"\\'{\\i}"}</Cmd> per í, così
            l&rsquo;accento non si scontra con il puntino.
          </IntroP>
          <IntroP>
            La modalità matematica usa un insieme diverso, che si mette su una variabile e non su
            una lettera del testo: <Cmd>{"\\hat{x}"}</Cmd>, <Cmd>{"\\bar{x}"}</Cmd>,{" "}
            <Cmd>{"\\vec{v}"}</Cmd>, <Cmd>{"\\tilde{x}"}</Cmd>, <Cmd>{"\\dot{x}"}</Cmd> e{" "}
            <Cmd>{"\\ddot{x}"}</Cmd> per le derivate, <Cmd>{"\\acute"}</Cmd>,{" "}
            <Cmd>{"\\grave"}</Cmd>, <Cmd>{"\\breve"}</Cmd> e <Cmd>{"\\check"}</Cmd>. Per più di un
            carattere, LaTeX di base offre gli accenti estensibili <Cmd>{"\\widehat{xy}"}</Cmd> e{" "}
            <Cmd>{"\\widetilde{xy}"}</Cmd>, oltre a <Cmd>{"\\overline{z}"}</Cmd> per i coniugati e{" "}
            <Cmd>{"\\overrightarrow{AB}"}</Cmd> per i vettori; nessuno richiede amsmath.
          </IntroP>
          <IntroP>
            Dal 2018 LaTeX legge UTF-8 per impostazione predefinita, quindi puoi digitare é, ö o ñ
            direttamente nel sorgente (le installazioni più vecchie richiedono{" "}
            <Cmd>{"\\usepackage[utf8]{inputenc}"}</Cmd>). Aggiungi{" "}
            <Cmd>{"\\usepackage[T1]{fontenc}"}</Cmd> perché le lettere accentate siano glifi singoli
            che si sillabano e si copiano correttamente, invece di essere composte da due pezzi. Per
            un esempio pratico, consulta la nostra guida ai{" "}
            <IntroLink
              href="https://www.useoctree.com/blog/spanish-characters-latex-accents-special-letters"
              external
            >
              caratteri spagnoli e accenti in LaTeX
            </IntroLink>
            , oppure la panoramica sui{" "}
            <IntroLink href="https://www.useoctree.com/learn/special-characters" external>
              caratteri speciali in LaTeX
            </IntroLink>
            . Clicca su una scheda qui sotto per copiarne il comando.
          </IntroP>
        </>
      ),
    },
  },
};

export default it;
