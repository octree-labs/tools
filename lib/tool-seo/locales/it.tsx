import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import { GuideCode, GuidePre, GuideTable } from "@/lib/template-guides/ui";
import type { ToolSeoLocale } from "..";

const translations: ToolSeoLocale = {
  "latex-preview": {
    heading: "Editor LaTeX online: compilatore LaTeX gratuito e visualizzatore PDF",
    intro: (
      <>
        <p>
          Questa pagina riunisce un editor, un compilatore e un visualizzatore LaTeX online. Scrivi
          il documento a sinistra e il PDF compilato appare a destra. La compilazione usa una
          distribuzione TeX Live completa sul servizio di compilazione di Octree: amsmath, TikZ,
          pgfplots, beamer, geometry, hyperref e il resto di TeX Live funzionano senza installare
          nulla.
        </p>
        <p>
          pdfLaTeX è il motore predefinito; il servizio passa a XeLaTeX per fontspec e i font di
          sistema, e a LuaLaTeX per il codice Lua. Non serve alcun account. L’editor contiene un
          solo file: immagini, file .bib e progetti con più file si gestiscono nell’editor Octree,
          dove un account gratuito salva anche il tuo lavoro. Lo shell escape è disattivato,
          quindi minted non è disponibile.
        </p>
      </>
    ),
    stepsHeading: "Come usare l’editor LaTeX online",
    steps: [
      {
        title: "Scrivi o incolla un documento completo",
        body: (
          <>
            Sostituisci l’esempio con il tuo codice LaTeX, da <Cmd>\documentclass</Cmd> a{" "}
            <Cmd>\end{"{document}"}</Cmd>. L’editor evidenzia la sintassi LaTeX e completa i
            comandi più comuni.
          </>
        ),
      },
      {
        title: "Guarda il PDF aggiornarsi",
        body: "L’anteprima si ricompila circa un secondo dopo l’ultima battitura. Se la compilazione non riesce, una finestra mostra il messaggio di errore e il log.",
      },
      {
        title: "Conserva il risultato",
        body: "Fai clic su «Apri in Octree» per salvare il documento come progetto, aggiungere immagini e file .bib o chiedere all’IA di modificarlo.",
      },
    ],
    tipsHeading: "Errori LaTeX comuni e come correggerli",
    tips: [
      {
        title: "File `name.sty' not found",
        body: (
          <>
            Un pacchetto caricato con <Cmd>\usepackage</Cmd> ha un nome sbagliato o non fa parte
            di TeX Live. Controlla il nome: tutti i pacchetti CTAN inclusi in TeX Live sono
            installati.
          </>
        ),
      },
      {
        title: "Missing $ inserted",
        body: (
          <>
            Un comando riservato alla modalità matematica, come <Cmd>^</Cmd>, <Cmd>_</Cmd> o{" "}
            <Cmd>\alpha</Cmd>, compare fuori dalla modalità matematica. Racchiudilo tra{" "}
            <Cmd>$...$</Cmd>, oppure scrivi un trattino basso letterale come <Cmd>\_</Cmd>.
          </>
        ),
      },
      {
        title: "Undefined control sequence",
        body: (
          <>
            Un comando è scritto male oppure il suo pacchetto non è caricato, per esempio{" "}
            <Cmd>\mathbb</Cmd> senza <Cmd>amssymb</Cmd>. Il log indica la riga interessata.
          </>
        ),
      },
      {
        title: "Non trovi l’errore",
        body: "Fai clic su «Fix this error with AI in Octree» nella finestra di errore. Octree apre il documento con il log dell’errore allegato, così l’IA sa esattamente cosa correggere.",
      },
    ],
    faqHeading: "FAQ sull’editor LaTeX online",
    faq: [
      {
        question: "Si può modificare LaTeX online senza installare nulla?",
        answer:
          "Sì. Scrivi o incolla LaTeX nell’editor di questa pagina e il PDF appare accanto. La compilazione avviene su un’installazione TeX Live completa sui server di Octree, quindi non serve una distribuzione TeX locale.",
      },
      {
        question: "Questo visualizzatore LaTeX è gratuito? Serve un account?",
        answer:
          "È gratuito e non richiede alcun account. In questa pagina non viene salvato nulla: copia il codice prima di uscire, oppure aprilo in Octree con un account gratuito per conservarlo come progetto.",
      },
      {
        question: "Quale compilatore LaTeX usa l’anteprima online?",
        answer:
          "pdfLaTeX per impostazione predefinita. Il servizio di compilazione passa a XeLaTeX quando il documento carica fontspec, polyglossia, unicode-math o xeCJK, e a LuaLaTeX quando usa \\directlua o luacode.",
      },
      {
        question: "Posso caricare immagini o una bibliografia .bib?",
        answer:
          "Non in questa pagina: compila un solo file main.tex. Un ambiente thebibliography funziona, ma i file grafici e i file .bib richiedono l’editor Octree, che gestisce progetti con più file.",
      },
      {
        question: "Perché un pacchetto come minted non compila?",
        answer:
          "minted e gli altri pacchetti che richiedono lo shell escape (\\write18) sono disattivati per motivi di sicurezza. Per il codice usa invece il pacchetto listings o verbatim.",
      },
    ],
    related: (
      <>
        Sei alle prime armi con LaTeX? Parti dall’
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introduzione a LaTeX
        </IntroLink>
        , sfoglia i <IntroLink href="/templates">modelli LaTeX</IntroLink> pronti all’uso, oppure
        descrivi un documento e lascia che il{" "}
        <IntroLink href="/tools/ai-latex-generator">generatore LaTeX con IA</IntroLink> lo scriva.
      </>
    ),
  },

  "math-to-latex": {
    heading: "Convertire formule scritte a mano in LaTeX online",
    intro: (
      <>
        <p>
          Questo convertitore da matematica a LaTeX trasforma l’immagine di formule scritte a mano
          o stampate in codice LaTeX. Carica una foto, una scansione o uno screenshot di
          un’equazione: un modello di IA con visione trascrive frazioni, radici, sommatorie,
          integrali, matrici e lettere greche in notazione amsmath standard.
        </p>
        <p>
          Il risultato è un documento LaTeX completo, che l’anteprima compila con pdfLaTeX su una
          distribuzione TeX Live completa del servizio di compilazione di Octree. Non serve alcun
          account. Lo strumento dà i risultati migliori con un’equazione o poche righe alla volta;
          conviene dividere le pagine lunghe di calcoli in più immagini.
        </p>
      </>
    ),
    stepsHeading: "Come convertire formule in LaTeX",
    steps: [
      {
        title: "Scatta un’immagine nitida",
        body: "Fotografa o cattura uno screenshot della formula: una riga del quaderno, una lavagna, un appunto sul tablet o una formula del libro di testo. Ritaglia sulla parte che ti serve.",
      },
      {
        title: "Caricala",
        body: "Trascina il file JPEG o PNG nell’area di caricamento. Il LaTeX compare progressivamente nel pannello del codice mentre l’IA legge l’immagine.",
      },
      {
        title: "Controlla l’anteprima e copia",
        body: "Apri la scheda dell’anteprima per confrontare il risultato compilato con l’originale, poi copia il codice, scaricalo o aprilo in Octree per continuare a modificarlo.",
      },
    ],
    tipsHeading: "Consigli per conversioni precise",
    tips: [
      {
        title: "Un’espressione o un breve blocco per immagine",
        body: "Il convertitore è pensato per equazioni e brevi passaggi di calcolo; dividi una pagina intera di calcoli in più caricamenti.",
      },
      {
        title: "Scrivi in modo leggibile e con buon contrasto",
        body: "Inchiostro scuro su carta bianca, luce uniforme e inquadratura frontale riducono gli scambi tra simboli come 1 e l, o x e ×.",
      },
      {
        title: "Controlla sempre i simboli",
        body: "Il riconoscimento della scrittura a mano commette errori. Verifica pedici, apici e lettere greche nell’anteprima prima di usare il codice.",
      },
    ],
    faqHeading: "FAQ sulla conversione da matematica a LaTeX",
    faq: [
      {
        question: "Come si convertono formule scritte a mano in LaTeX?",
        answer:
          "Carica una foto o una scansione della formula scritta a mano in formato JPEG o PNG. L’IA la legge e restituisce il LaTeX in un documento completo che carica amsmath e amssymb, e l’anteprima lo compila per permetterti di controllare ogni simbolo.",
      },
      {
        question: "Questo convertitore LaTeX online è gratuito?",
        answer:
          "Sì. Conversione, anteprima, copia e download sono gratuiti e non richiedono alcun account. Un account Octree gratuito serve solo per salvare il risultato come progetto.",
      },
      {
        question: "Funziona con la scrittura a mano su iPad o tablet?",
        answer:
          "Sì. Esporta la pagina o uno screenshot da GoodNotes, Notability, OneNote o un’app simile come immagine, ritaglia sull’equazione e caricala.",
      },
      {
        question: "Posso digitare la formula invece di caricare un’immagine?",
        answer:
          "Questa pagina converte immagini. Per convertire formule digitate o una descrizione a parole come «integrale di x al quadrato da 0 a 1», usa il convertitore da equazione a LaTeX.",
      },
      {
        question: "Il LaTeX ottenuto compila in Overleaf?",
        answer:
          "Sì. Il risultato usa la notazione amsmath standard e compila con pdfLaTeX su qualsiasi distribuzione TeX, inclusi Overleaf e Octree. L’anteprima di questa pagina lo compila con una TeX Live completa.",
      },
    ],
    related: (
      <>
        Scopri come funziona la matematica in LaTeX nella{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guida alle espressioni matematiche
        </IntroLink>
        , converti formule digitate con il{" "}
        <IntroLink href="/tools/equation-to-latex">convertitore da equazione a LaTeX</IntroLink>,
        oppure cerca un comando nel{" "}
        <IntroLink href="/symbols">riferimento dei simboli LaTeX</IntroLink>.
      </>
    ),
  },

  "pdf-to-latex": {
    heading: "Convertire PDF in LaTeX online",
    intro: (
      <>
        <p>
          Un PDF contiene le pagine finali, non il LaTeX che le ha prodotte: convertire un PDF in
          LaTeX significa quindi ricreare testo e formule come sorgente modificabile. Il metodo
          dipende dall’origine del PDF: gli articoli arXiv di solito sono accompagnati dal sorgente
          originale, e per tutto il resto il convertitore di questa pagina ricrea il LaTeX con
          l’IA.
        </p>
        <p>
          Carica un PDF fino a 3 MB e 20 pagine e ottieni un documento LaTeX completo, compilato
          con una distribuzione TeX Live completa sul servizio di compilazione di Octree per
          poterlo controllare. Non serve alcun account. Il risultato non conserva i font, il layout
          né le immagini originali, ed è meglio convertire i documenti lunghi una sezione alla
          volta.
        </p>
      </>
    ),
    stepsHeading: "Come convertire un PDF in LaTeX",
    steps: [
      {
        title: "Controlla prima arXiv",
        body: "Se il PDF è un articolo arXiv, di solito è disponibile il sorgente LaTeX originale degli autori. Scaricalo dal link «TeX Source» nella pagina arXiv dell’articolo invece di convertire il PDF.",
      },
      {
        title: "Carica il PDF",
        body: "Trascina un PDF fino a 3 MB e 20 pagine nel convertitore qui sopra. L’IA legge testo e formule e restituisce un documento LaTeX completo che carica amsmath; l’anteprima lo compila per confrontarlo con l’originale.",
      },
      {
        title: "Converti i file lunghi a pezzi",
        body: "Per un PDF lungo, estrai le pagine che ti servono, oppure cattura uno screenshot di un blocco di equazioni e usa il convertitore da matematica a LaTeX.",
      },
      {
        title: "Assembla e modifica",
        body: "Incolla i pezzi nell’editor LaTeX online per correggerli con un’anteprima PDF in tempo reale, oppure aprili in Octree per salvare il documento come progetto.",
      },
    ],
    tipsHeading: "Consigli prima di convertire",
    tips: [
      {
        title: "Le figure non vengono estratte",
        body: "Immagini e grafici del PDF non vengono ricreati in LaTeX. Reinseriscili con \\includegraphics, oppure ridisegna gli schemi con lo strumento da immagine a TikZ.",
      },
      {
        title: "Rileggi le formule",
        body: "Il riconoscimento commette errori nelle formule e nelle tabelle dense. Confronta pedici, segni e allineamenti con l’originale.",
      },
    ],
    faqHeading: "FAQ sulla conversione da PDF a LaTeX",
    faq: [
      {
        question: "Come si converte un PDF in LaTeX?",
        answer:
          "Un PDF non contiene il proprio sorgente LaTeX: testo e formule devono essere ricreati. Per gli articoli arXiv, scarica il sorgente originale dal link «TeX Source» nella pagina arXiv dell’articolo. Per gli altri PDF, carica il file (massimo 3 MB e 20 pagine) nel convertitore di questa pagina, poi confronta l’anteprima compilata con l’originale.",
      },
      {
        question: "La conversione da PDF a LaTeX è gratuita?",
        answer:
          "Sì. Il convertitore di PDF, il convertitore da matematica a LaTeX e l’editor LaTeX online non richiedono alcun account. Un account Octree gratuito serve solo per salvare il risultato come progetto.",
      },
      {
        question: "Posso convertire un articolo intero o una tesi?",
        answer:
          "Il convertitore accetta PDF fino a 3 MB e 20 pagine, e la lunghezza del risultato è limitata a ogni conversione: conviene convertire una tesi capitolo per capitolo. Per gli articoli pubblicati su arXiv, scarica invece il sorgente originale.",
      },
      {
        question: "Il risultato mantiene il layout esatto del PDF?",
        answer:
          "No. Testo, titoli e formule vengono ricreati come LaTeX pulito e modificabile; font, spaziature, layout e immagini non vengono copiati.",
      },
      {
        question: "Posso convertire un PDF scansionato?",
        answer:
          "Le scansioni nitide di pagine stampate o scritte a mano in modo ordinato possono funzionare. Scansioni a bassa risoluzione, storte o poco contrastate causano errori nei simboli: controlla attentamente il risultato.",
      },
    ],
    related: (
      <>
        Converti screenshot di equazioni con il{" "}
        <IntroLink href="/tools/math-to-latex">convertitore da matematica a LaTeX</IntroLink>,
        modifica il risultato nell’
        <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>, oppure leggi la{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guida alla matematica in LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "image-to-tikz": {
    heading: "Convertire un’immagine in TikZ: trasforma uno schema in LaTeX modificabile",
    intro: (
      <>
        <p>
          Questo convertitore da immagine a TikZ trasforma l’immagine di uno schema in codice TikZ
          da modificare e compilare. Carica un diagramma di flusso, uno schema a blocchi, un albero,
          un grafo o uno schizzo: un modello di IA con visione lo ricostruisce come nodi e percorsi
          in un documento LaTeX autonomo, mantenendo il più possibile etichette e colori.
        </p>
        <p>
          L’anteprima compila il risultato con pdfLaTeX su una distribuzione TeX Live completa del
          servizio di compilazione di Octree. Non serve alcun account. Il risultato è una
          riproduzione fedele, non un ricalco al pixel: metti in conto qualche ritocco manuale per
          le figure che devono corrispondere esattamente.
        </p>
      </>
    ),
    stepsHeading: "Come convertire un’immagine in TikZ",
    steps: [
      {
        title: "Carica lo schema",
        body: "Trascina uno screenshot, un’esportazione o una foto dello schema in formato JPEG, PNG, GIF o WebP, fino a 20 MB.",
      },
      {
        title: "Lascia che l’IA lo ridisegni in TikZ",
        body: (
          <>
            Il modello legge forme, frecce, etichette e colori, poi scrive un documento LaTeX
            autonomo con un <Cmd>tikzpicture</Cmd> e librerie come positioning, arrows e
            shapes.geometric.
          </>
        ),
      },
      {
        title: "Confronta e rifinisci",
        body: "Apri la scheda dell’anteprima per confrontare lo schema compilato con la tua immagine. Copia o scarica il codice, oppure aprilo in Octree per sistemarlo con l’IA.",
      },
    ],
    tipsHeading: "Consigli per una conversione migliore",
    tips: [
      {
        title: "Ritaglia sullo schema",
        body: "Togli didascalie, testo della pagina e altre figure; un solo schema per immagine dà i risultati migliori.",
      },
      {
        title: "Preferisci sorgenti pulite",
        body: "Esportazioni e screenshot funzionano meglio delle foto. Per uno schizzo a mano usa inchiostro scuro su carta bianca e fotografa frontalmente.",
      },
      {
        title: "Per i grafici di dati c’è pgfplots",
        body: "Il convertitore ridisegna forme; non recupera i dati. Per grafici costruiti a partire da numeri usa il generatore pgfplots.",
      },
    ],
    faqHeading: "FAQ sulla conversione da immagine a TikZ",
    faq: [
      {
        question: "Come si converte un’immagine in TikZ?",
        answer:
          "Carica lo schema in formato JPEG, PNG, GIF o WebP. L’IA restituisce un documento LaTeX completo con un tikzpicture che lo ridisegna, e l’anteprima compila il codice per confrontarlo con l’originale.",
      },
      {
        question: "Il codice TikZ è una copia esatta della mia immagine?",
        answer:
          "No. È una riproduzione con nodi e percorsi modificabili, non un ricalco. Disposizione, etichette e frecce di solito vengono mantenute, ma spaziature, curve e colori possono differire: per una figura da pubblicazione aspettati di dover ritoccare alcune coordinate.",
      },
      {
        question: "Quali schemi si convertono meglio?",
        answer:
          "Diagrammi di flusso, schemi a blocchi, alberi, grafi, macchine a stati e figure geometriche semplici. Figure dense con molti elementi sovrapposti, fotografie e grafici di dati si convertono male.",
      },
      {
        question: "Posso convertire uno schizzo a mano o la foto di una lavagna?",
        answer:
          "Sì, se tratti ed etichette sono leggibili. Ritaglia la foto sullo schema e cura l’illuminazione; una matita chiara o un’inquadratura storta riducono la precisione.",
      },
      {
        question: "Il convertitore da immagine a TikZ è gratuito?",
        answer:
          "Sì, e non richiede alcun account. Il codice generato compila con pdfLaTeX e TeX Live, quindi funziona in Overleaf, Octree o in un’installazione LaTeX locale.",
      },
    ],
    related: (
      <>
        Impara i comandi del risultato con la{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          guida a TikZ
        </IntroLink>
        . Non hai un’immagine di partenza? Descrivi lo schema al{" "}
        <IntroLink href="/tools/tikz-generator">generatore TikZ</IntroLink>, oppure traccia dati con
        il <IntroLink href="/tools/pgfplots-generator">generatore pgfplots</IntroLink>.
      </>
    ),
  },

  "tikz-generator": {
    heading: "Generatore TikZ online: crea schemi TikZ da una descrizione",
    intro: (
      <>
        <p>
          Questo generatore TikZ scrive codice TikZ a partire da una descrizione a parole dello
          schema. Produce un documento LaTeX completo con un tikzpicture commentato e le librerie
          necessarie, come positioning, arrows.meta e shapes: parti da una base funzionante invece
          che da una pagina bianca.
        </p>
        <p>
          L’anteprima compila il codice con pdfLaTeX su una distribuzione TeX Live completa del
          servizio di compilazione di Octree. Non serve alcun account. Qui il codice generato è di
          sola lettura; per un editor TikZ online con anteprima in tempo reale, incollalo
          nell’editor LaTeX o aprilo in Octree, dove un account gratuito lo salva.
        </p>
      </>
    ),
    stepsHeading: "Come creare uno schema TikZ online",
    steps: [
      {
        title: "Descrivi lo schema",
        body: "Indica i nodi, i collegamenti e la disposizione, per esempio «un diagramma di flusso con Inizio, Elaborazione e Fine collegati da sinistra a destra».",
      },
      {
        title: "Genera il TikZ",
        body: "L’IA scrive un documento LaTeX completo con un tikzpicture commentato e le librerie TikZ di cui ha bisogno.",
      },
      {
        title: "Visualizza l’anteprima e modifica",
        body: "Controlla lo schema compilato nella scheda dell’anteprima. Per modificare il codice a mano, incollalo nell’editor LaTeX online o aprilo in Octree.",
      },
    ],
    tipsHeading: "Consigli per schemi TikZ migliori",
    tips: [
      {
        title: "Sii preciso",
        body: "Indica le etichette dei nodi, le forme, la direzione delle frecce e i colori. Specificare «da sinistra a destra» o «dall’alto in basso» risolve la maggior parte dei problemi di disposizione.",
      },
      {
        title: "Procedi a piccoli passi",
        body: "Genera prima una versione semplice, poi chiedi una modifica alla volta in Octree invece di riscrivere la richiesta da zero.",
      },
      {
        title: "Usa pgfplots per i grafici di funzioni",
        body: "Per assi, grafici di funzioni e grafici di dati, il generatore pgfplots produce codice più pulito del TikZ puro.",
      },
    ],
    faqHeading: "FAQ sul generatore TikZ",
    faq: [
      {
        question: "Si può usare TikZ online senza installare LaTeX?",
        answer:
          "Sì. Il generatore TikZ scrive il codice e lo compila sui server di Octree con una distribuzione TeX Live completa: l’anteprima dello schema funziona nel browser senza installare nulla.",
      },
      {
        question: "Esiste un editor TikZ online con anteprima in tempo reale?",
        answer:
          "In questa pagina il codice generato è di sola lettura. Incollalo nell’editor LaTeX online gratuito su tools.useoctree.com/tools/latex-preview, che ricompila mentre scrivi, oppure aprilo in Octree per modificarlo con l’IA e salvarlo come progetto.",
      },
      {
        question: "Che tipi di schemi TikZ può generare?",
        answer:
          "Diagrammi di flusso, alberi, grafi e reti, schemi a blocchi, macchine a stati, bozze di reti neurali, diagrammi di Venn, diagrammi commutativi e figure geometriche. I disegni tecnici molto dettagliati di solito richiedono ritocchi manuali.",
      },
      {
        question: "Il generatore TikZ è gratuito?",
        answer:
          "Sì. Generare, visualizzare in anteprima, copiare e scaricare il codice non richiede alcun account. Un account Octree gratuito serve solo per salvare lo schema come progetto.",
      },
      {
        question: "Il codice funziona in Overleaf?",
        answer:
          "Sì. Il risultato è un documento LaTeX standard che carica tikz e librerie TikZ standard e compila con pdfLaTeX: funziona in Overleaf, in Octree e nelle distribuzioni TeX locali.",
      },
    ],
    related: (
      <>
        Impara la sintassi con la{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          guida a TikZ
        </IntroLink>
        , modifica codice TikZ nell’
        <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>, oppure trasforma
        un’immagine esistente in codice con{" "}
        <IntroLink href="/tools/image-to-tikz">da immagine a TikZ</IntroLink>.
      </>
    ),
  },

  "ai-latex-generator": {
    heading: "Generatore LaTeX con IA: trasforma una descrizione in codice LaTeX",
    intro: (
      <>
        <p>
          Questo generatore LaTeX con IA scrive codice LaTeX a partire da una descrizione a parole.
          Chiedi una presentazione beamer, una relazione di laboratorio, un articolo a due colonne o
          una tabella: restituisce un documento completo con la classe di documento giusta,
          pacchetti come amsmath, amssymb e graphicx e una struttura di sezioni da completare.
        </p>
        <p>
          L’anteprima compila il codice con una distribuzione TeX Live completa sul servizio di
          compilazione di Octree: pdfLaTeX per impostazione predefinita, XeLaTeX o LuaLaTeX quando
          il codice lo richiede. Non serve alcun account; registrati gratuitamente solo se vuoi
          salvare il risultato come progetto.
        </p>
      </>
    ),
    stepsHeading: "Come generare LaTeX con l’IA",
    steps: [
      {
        title: "Descrivi ciò che ti serve",
        body: "Scrivi una o due frasi: il tipo di documento, le sezioni ed eventuali elementi particolari, come una tabella, un’equazione o un layout a due colonne.",
      },
      {
        title: "Genera il codice LaTeX",
        body: "Fai clic su «Genera LaTeX». Il codice compare progressivamente come documento completo, con classe di documento, pacchetti e struttura già impostati.",
      },
      {
        title: "Visualizza l’anteprima, poi copia o continua a modificare",
        body: "Passa alla scheda dell’anteprima per vedere il PDF compilato. Copia il codice, scaricalo come .tex o PDF, oppure aprilo in Octree per rielaborarlo.",
      },
    ],
    tipsHeading: "Consigli per un LaTeX migliore",
    tips: [
      {
        title: "Indica la classe di documento",
        body: "Specifica article, report, slide beamer o letter, ed elenca le sezioni che vuoi; una richiesta vaga produce un documento generico.",
      },
      {
        title: "Chiedi una cosa alla volta",
        body: "Una sola tabella, un layout di figure o una serie di slide escono più puliti di un’intera tesi in un’unica richiesta. Le richieste lunghe possono venire troncate.",
      },
      {
        title: "Sostituisci il testo di esempio",
        body: "Il generatore scrive una struttura e contenuti di esempio, non la tua ricerca. Controlla ogni equazione e non tenere mai una citazione che non hai verificato.",
      },
    ],
    faqHeading: "FAQ sul generatore LaTeX con IA",
    faq: [
      {
        question: "Che cos’è un generatore LaTeX con IA?",
        answer:
          "Trasforma una descrizione a parole in codice LaTeX. Descrivi il documento e il generatore scrive un file .tex completo con la classe di documento, i pacchetti necessari, le sezioni e contenuti di esempio che poi modifichi.",
      },
      {
        question: "Il generatore di codice LaTeX è gratuito?",
        answer:
          "Sì. Puoi generare, visualizzare in anteprima, copiare e scaricare LaTeX senza account. Un account Octree gratuito serve solo se vuoi salvare il documento come progetto e continuare a modificarlo.",
      },
      {
        question: "Il LaTeX generato compila?",
        answer:
          "L’anteprima lo compila con una TeX Live completa sul servizio di compilazione di Octree (pdfLaTeX per impostazione predefinita, XeLaTeX o LuaLaTeX quando il codice ne ha bisogno). Se non riesce, la finestra di errore propone di aprire il documento in Octree, dove l’IA corregge l’errore a partire dal log.",
      },
      {
        question: "Può scrivere un articolo intero al posto mio?",
        answer:
          "Scrive lo scheletro di un articolo: classe di documento, pacchetti, sezioni e contenuti di esempio, come un’equazione o una tabella tipo. Quei contenuti sono segnaposto, e i documenti molto lunghi possono venire troncati: considera il risultato un punto di partenza.",
      },
      {
        question: "Che tipi di documenti può generare?",
        answer:
          "Articoli, relazioni, presentazioni beamer, lettere, CV, schede di esercizi, tabelle ed equazioni singole sono richieste frequenti. Se un documento richiede un pacchetto particolare, indicalo nella descrizione.",
      },
    ],
    related: (
      <>
        Vuoi capire il codice che scrive? Leggi l’
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introduzione a LaTeX
        </IntroLink>
        , oppure incolla qualsiasi codice LaTeX nell’
        <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink> per modificarlo con
        un’anteprima PDF in tempo reale.
      </>
    ),
  },

  "table-to-latex": {
    heading: "Convertire una tabella in LaTeX: generatore di tabelle LaTeX da CSV",
    intro: (
      <>
        <p>
          Questo generatore di tabelle LaTeX trasforma un file CSV in una tabella LaTeX formattata.
          Carica un .csv esportato da Excel, Google Sheets o qualsiasi foglio di calcolo: un modello
          di IA (OpenAI gpt-4o-mini) scrive un documento LaTeX completo attorno a un ambiente{" "}
          <Cmd>tabular</Cmd>, carica booktabs per filetti orizzontali puliti e imposta la riga di
          intestazione e l’allineamento delle colonne. È il modo più rapido per convertire Excel in
          LaTeX: salva prima il foglio come CSV, perché i file .xlsx non vengono letti
          direttamente.
        </p>
        <p>
          La scheda «Anteprima» compila la tabella con una distribuzione TeX Live completa sul
          servizio di compilazione di Octree, così vedi il risultato prima di esportare il file
          .tex, un PDF o un’immagine JPG. Il file viene letto nel browser e inviato come testo, e
          ogni conversione restituisce circa 2.000 token di LaTeX, sufficienti per una tabella di
          risultati di qualche decina di righe. Lo strumento è gratuito e non richiede alcun
          account.
        </p>
      </>
    ),
    stepsHeading: "Come convertire un file CSV in una tabella LaTeX",
    steps: [
      {
        title: "Salva la tabella come CSV",
        body: "In Excel scegli File > Salva con nome > CSV UTF-8 (delimitato da virgole); in Google Sheets, File > Scarica > Valori separati da virgole (.csv). Tieni la riga di intestazione come prima riga.",
      },
      {
        title: "Carica il file .csv",
        body: "Trascina il file nell’area di caricamento o fai clic per sceglierlo. La tabella LaTeX compare progressivamente nella scheda «Codice» come documento completo.",
      },
      {
        title: "Visualizza l’anteprima ed esporta",
        body: "Apri la scheda «Anteprima» per compilare la tabella in PDF, poi esporta il file .tex, il PDF o un’immagine JPG, oppure aprila in Octree per inserire la tabella nel tuo articolo.",
      },
    ],
    tipsHeading: "Problemi comuni con le tabelle e come risolverli",
    tips: [
      {
        title: "I caratteri speciali rompono la tabella",
        body: (
          <>
            <Cmd>&amp;</Cmd>, <Cmd>%</Cmd>, <Cmd>$</Cmd>, <Cmd>#</Cmd> e <Cmd>_</Cmd> nelle celle
            vanno scritti come <Cmd>\&amp;</Cmd>, <Cmd>\%</Cmd>, <Cmd>\$</Cmd>, <Cmd>\#</Cmd> e{" "}
            <Cmd>\_</Cmd>. Se l’anteprima non riesce, il log indica la riga da correggere.
          </>
        ),
      },
      {
        title: "La tabella esce dalla pagina",
        body: (
          <>
            Le tabelle larghe superano la larghezza del testo. Usa pagine orizzontali, un font più
            piccolo come <Cmd>\small</Cmd>, oppure racchiudi il tabular in{" "}
            <Cmd>\resizebox{"{\\textwidth}{!}{...}"}</Cmd> di graphicx.
          </>
        ),
      },
      {
        title: "I fogli di calcolo grandi vengono troncati",
        body: "Ogni conversione restituisce circa 2.000 token di LaTeX, cioè una tabella di qualche decina di righe. Dividi i fogli più grandi in più file CSV, oppure tieni solo le righe utili all’articolo.",
      },
    ],
    faqHeading: "FAQ sul generatore di tabelle LaTeX",
    faq: [
      {
        question: "Come si converte una tabella Excel in LaTeX?",
        answer:
          "Salva il foglio come file CSV in Excel (File > Salva con nome > CSV), poi carica qui il .csv. Lo strumento non legge direttamente i file .xlsx, ma un’esportazione CSV del foglio contiene gli stessi valori delle celle. Ottieni una tabella booktabs in un documento LaTeX completo, che puoi visualizzare in anteprima, scaricare e incollare nel tuo articolo.",
      },
      {
        question: "Quali formati di file accetta il generatore di tabelle LaTeX?",
        answer:
          "Solo file .csv. Excel, Google Sheets, LibreOffice Calc e Numbers possono tutti esportare un foglio in CSV. JSON, file .xlsx e tabelle incollate non sono accettati in questa pagina.",
      },
      {
        question: "Il risultato usa booktabs?",
        answer:
          "Sì. Il documento generato carica booktabs e la tabella di norma usa i suoi filetti \\toprule, \\midrule e \\bottomrule. Copia l’ambiente tabular o table nel tuo documento e aggiungi \\usepackage{booktabs} al preambolo.",
      },
      {
        question: "Il convertitore da CSV a LaTeX è gratuito?",
        answer:
          "Sì, è gratuito e non richiede alcun account. La tabella è scritta da un modello di IA (OpenAI gpt-4o-mini): controlla numeri e allineamento delle colonne nell’anteprima prima di usarla.",
      },
    ],
    related: (
      <>
        Scopri tabular, multirow e i tipi di colonna nella{" "}
        <IntroLink href="https://www.useoctree.com/learn/tables" external>
          guida alle tabelle LaTeX
        </IntroLink>
        , traccia gli stessi dati con il{" "}
        <IntroLink href="/tools/pgfplots-generator">generatore PGFPlots</IntroLink>, oppure consulta
        tutti i <IntroLink href="/tools/latex-converter">convertitori LaTeX</IntroLink>.
      </>
    ),
  },

  "equation-to-latex": {
    heading: "Convertire un’equazione in LaTeX: come funziona il convertitore",
    intro: (
      <p>
        Converti qualsiasi equazione matematica in LaTeX in tre passaggi. Lo strumento accetta
        equazioni digitate, screenshot ed equazioni scritte a mano, e produce LaTeX da incollare
        direttamente in un articolo, un compito o negli appunti delle lezioni.
      </p>
    ),
    stepsHeading: "Convertire un’equazione in LaTeX in tre passaggi",
    steps: [
      {
        title: "Inserisci o carica l’equazione",
        body: "Scrivi l’equazione a parole («integrale di x al quadrato da 0 a 1»), incollala in qualsiasi notazione oppure trascina un’immagine: lo screenshot di una formula del libro, la foto di una lavagna o un’equazione scritta a mano dall’iPad o dal telefono.",
      },
      {
        title: "Converti in LaTeX",
        body: "Fai clic su «Converti in LaTeX». L’IA legge l’equazione, riconosce frazioni, radici, sommatorie, integrali, matrici e lettere greche, e scrive LaTeX standard con amsmath: il risultato compila in Overleaf, Octree o qualsiasi distribuzione TeX.",
      },
      {
        title: "Controlla l’anteprima e copia il codice",
        body: "L’equazione renderizzata compare accanto al codice, così puoi verificare ogni simbolo. Copia il LaTeX, scaricalo come file .tex o PDF, oppure aprilo in Octree per continuare a modificarlo.",
      },
    ],
    tipsHeading: "A cosa serve?",
    tips: [
      {
        title: "Compiti ed esercitazioni",
        body: "Trasforma una soluzione scritta a mano in un elaborato digitato senza dover prima imparare tutti i comandi LaTeX.",
      },
      {
        title: "Articoli di ricerca e tesi",
        body: "Trasferisci equazioni dai tuoi appunti, dalle slide o da vecchi PDF al manoscritto, come LaTeX pulito e modificabile.",
      },
      {
        title: "Appunti delle lezioni",
        body: "Fotografa la lavagna o il quaderno dopo la lezione e converti ogni formula in LaTeX per i tuoi appunti.",
      },
      {
        title: "Screenshot di formule dai libri",
        body: "Carica un ritaglio di una pagina di un libro o di una rivista e ottieni il LaTeX della formula invece di ridigitarla.",
      },
      {
        title: "Scrittura a mano su iPad o tablet",
        body: "Esporta le equazioni scritte a mano da GoodNotes, Notability o OneNote come immagini e convertile in un solo passaggio.",
      },
    ],
    faqHeading: "FAQ sulla conversione da equazione a LaTeX",
    faq: [
      {
        question: "Come si converte un’equazione in LaTeX?",
        answer:
          "Scrivi l’equazione come testo semplice o in notazione matematica, oppure caricane un’immagine, poi fai clic su «Converti in LaTeX». Il convertitore restituisce codice LaTeX che usa amsmath e mostra un’anteprima renderizzata, così puoi controllarlo prima di copiarlo nel documento.",
      },
      {
        question: "Posso convertire un’equazione scritta a mano in LaTeX?",
        answer:
          "Sì. Carica una foto o una scansione di un’equazione scritta a mano in formato JPEG, PNG, GIF o WebP, anche esportata da un’app per iPad o tablet. Immagini nitide e ben contrastate, con un’equazione per immagine, danno il LaTeX più preciso.",
      },
      {
        question: "Il convertitore da equazione a LaTeX è gratuito?",
        answer:
          "Sì. Il convertitore è gratuito e non richiede alcun account. Puoi copiare il LaTeX, scaricare un file .tex o un PDF compilato, oppure aprire il risultato nell’editor Octree.",
      },
      {
        question: "Quali pacchetti LaTeX richiede il risultato?",
        answer:
          "Il codice generato usa una notazione matematica standard che compila con i pacchetti amsmath, amssymb e amsfonts. Se scarichi il file .tex, il preambolo li include già, e il risultato funziona in Overleaf e in tutte le distribuzioni TeX più diffuse.",
      },
    ],
    related: (
      <>
        Cerchi i comandi dietro il risultato? Sfoglia il{" "}
        <IntroLink href="/symbols">riferimento dei simboli LaTeX</IntroLink>. La matematica in testo
        semplice si scrive direttamente nel campo qui sopra; per continuare a modificare il
        risultato come documento completo, usa l’
        <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>.
      </>
    ),
  },

  "arxiv-to-latex": {
    heading: "Da arXiv a LaTeX: scarica il sorgente LaTeX di qualsiasi articolo",
    intro: (
      <>
        <p>
          La maggior parte degli articoli su arXiv è scritta in LaTeX, e arXiv conserva il sorgente
          caricato dagli autori: i file .tex, la bibliografia, i file di stile e le figure. Questo
          strumento recupera per te quel sorgente LaTeX da arXiv. Incolla un identificativo o un
          link: puoi sfogliare i file, leggere il file .tex principale e scaricare il codice
          sorgente arXiv come .zip, senza dover estrarre tu un archivio .tar.gz.
        </p>
        <p>
          I download arrivano direttamente dal servizio e-print di arXiv e non viene conservato
          nulla. Sono supportati sorgenti fino a 30 MB e 200 file. Gli articoli caricati solo come
          PDF non hanno TeX da scaricare; lo strumento lo segnala e ti indirizza invece a un
          convertitore.
        </p>
      </>
    ),
    stepsHeading: "Come scaricare il sorgente TeX di un articolo arXiv",
    steps: [
      {
        title: "Incolla l’identificativo o il link arXiv",
        body: "Inserisci un identificativo come 2401.12345, un identificativo nel vecchio formato come hep-th/9711200, oppure qualsiasi link arxiv.org/abs o arxiv.org/pdf. Aggiungi una versione (2401.12345v2) per ottenere quella revisione precisa; senza versione ottieni la più recente.",
      },
      {
        title: "Sfoglia il sorgente LaTeX",
        body: "Lo strumento scarica l’e-print dell’articolo da arXiv, lo estrae e mostra tutti i file. Il file .tex principale, quello con \\documentclass e \\begin{document}, si apre nel visualizzatore; fai clic su qualsiasi altro file .tex, .bib o .sty per leggerlo.",
      },
      {
        title: "Scaricalo o modificalo",
        body: "Scarica il codice sorgente arXiv come .zip, oppure apri il file principale in Octree con i file \\input e \\include già integrati. Poi carica le figure dallo .zip per compilarlo con le sue immagini.",
      },
    ],
    faqHeading: "FAQ sul sorgente LaTeX degli articoli arXiv",
    faq: [
      {
        question: "Come si scarica il sorgente LaTeX di un articolo arXiv?",
        answer:
          "Incolla l’identificativo o l’URL arXiv dell’articolo nello strumento di questa pagina. Recupera da arXiv il sorgente caricato dagli autori, elenca tutti i file, mostra il file .tex principale e ti permette di scaricare tutto come .zip. Su arxiv.org gli stessi file si trovano dietro il link «TeX Source» nella pagina dell’abstract, sotto forma di archivio .tar.gz.",
      },
      {
        question: "Perché un articolo risulta senza sorgente LaTeX?",
        answer:
          "Alcuni autori caricano su arXiv solo un PDF, quindi non c’è alcun file .tex da scaricare. Per questi articoli il convertitore da PDF a LaTeX può ricreare testo e formule come LaTeX modificabile, ma non recupera il sorgente originale.",
      },
      {
        question: "Qual è il file .tex principale?",
        answer:
          "I sorgenti arXiv contengono spesso più file .tex. Lo strumento sceglie quello che il file 00README di arXiv indica come file di primo livello, se esiste; altrimenti, il file che contiene \\documentclass e \\begin{document} e che nessun altro file include con \\input. Le sezioni caricate con \\input o \\include compaiono come file separati nell’albero.",
      },
      {
        question: "Posso riutilizzare il sorgente LaTeX di un articolo arXiv?",
        answer:
          "Il sorgente è utile per vedere come è stato composto un articolo, controllare un’equazione o riprendere una macro. Il riutilizzo di testo, figure o dell’intero articolo dipende dalla licenza scelta dagli autori su arXiv, indicata nella pagina dell’abstract; in ogni caso cita gli autori.",
      },
    ],
    related: (
      <>
        Nessun sorgente su arXiv? Prova il{" "}
        <IntroLink href="/tools/pdf-to-latex">convertitore da PDF a LaTeX</IntroLink>. Modifica e
        compila il sorgente nell’<IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>,
        oppure contane le parole con il{" "}
        <IntroLink href="/tools/latex-word-counter">contatore di parole LaTeX</IntroLink>.
      </>
    ),
  },

  "citation-generator": {
    heading: "Generatore di citazioni BibTeX per LaTeX",
    intro: (
      <>
        <p>
          Questo generatore di citazioni BibTeX trasforma i riferimenti di un libro, un articolo di
          rivista, un contributo a un convegno o una pagina web in una voce BibTeX da incollare in
          un file .bib e citare da LaTeX. Incolla campi strutturati o un riferimento in testo
          libero: il generatore scrive una voce con un tipo di voce, una chiave di citazione e i
          campi che riesce a identificare (author, title, year, journal o booktitle, volume, pages,
          publisher e DOI).
        </p>
        <p>
          Un modello di IA (OpenAI gpt-4o-mini) scrive le voci a partire dal testo incollato. Non
          interroga Crossref, PubMed né il catalogo di una biblioteca: un DOI o un URL da soli non
          bastano quindi per un risultato affidabile. Indica titolo e autori e confronta il
          risultato con la fonte. Lo strumento è gratuito, non richiede alcun account ed esporta un
          file references.bib compatibile con BibTeX, natbib e biblatex.
        </p>
      </>
    ),
    stepsHeading: "Come generare una citazione BibTeX",
    steps: [
      {
        title: "Descrivi la fonte",
        body: "Incolla titolo, autori, anno e sede di pubblicazione (rivista, convegno o editore) di un libro, un articolo o un contributo, in qualsiasi ordine o come riferimento in testo libero. Puoi aggiungere anche un DOI o un URL, ma indica tutti i dettagli che hai: il generatore non va a cercarli.",
      },
      {
        title: "Genera la voce BibTeX",
        body: (
          <>
            Fai clic su «Genera BibTeX». L’IA sceglie il tipo di voce (<Cmd>@article</Cmd>,{" "}
            <Cmd>@book</Cmd>, <Cmd>@inproceedings</Cmd> e così via), scrive una chiave di citazione
            come <Cmd>goodfellow2016deep</Cmd> e compila i campi che riesce a identificare.
          </>
        ),
      },
      {
        title: "Controllala e salvala",
        body: (
          <>
            Confronta i campi con la pagina dell’editore, poi copia la voce o fai clic su «Esporta
            come .bib» per scaricare <Cmd>references.bib</Cmd>. La scheda «Anteprima» apre in
            Octree un documento di prova natbib che cita tutte le chiavi.
          </>
        ),
      },
    ],
    tipsHeading: "Errori BibTeX comuni e come correggerli",
    tips: [
      {
        title: "Citation undefined",
        body: (
          <>
            La chiave usata in <Cmd>\cite{"{...}"}</Cmd> deve corrispondere esattamente a quella
            dopo <Cmd>@article{"{"}</Cmd>, e il documento deve contenere{" "}
            <Cmd>\bibliography{"{references}"}</Cmd> con uno stile come{" "}
            <Cmd>\bibliographystyle{"{plain}"}</Cmd>. Esegui BibTeX, poi LaTeX due volte.
          </>
        ),
      },
      {
        title: "Nomi nell’ordine sbagliato",
        body: (
          <>
            Separa gli autori con <Cmd>and</Cmd>, non con le virgole:{" "}
            <Cmd>author = {"{Smith, John and Doe, Jane}"}</Cmd>. Una virgola all’interno di un nome
            indica l’ordine Cognome, Nome.
          </>
        ),
      },
      {
        title: "Le maiuscole spariscono",
        body: (
          <>
            Molti stili mettono i titoli in minuscolo. Racchiudi sigle e nomi propri tra
            parentesi graffe, per esempio <Cmd>{"{BERT}"}</Cmd> o <Cmd>{"{Bayesian}"}</Cmd>, per
            conservarne le maiuscole.
          </>
        ),
      },
    ],
    faqHeading: "FAQ sul generatore di citazioni BibTeX",
    faq: [
      {
        question: "Come si genera una citazione BibTeX?",
        answer:
          "Incolla i dettagli della fonte (titolo, autori, anno, rivista o editore) nel campo e fai clic su «Genera BibTeX». Lo strumento restituisce una voce BibTeX completa, con tipo di voce, chiave di citazione e campi corrispondenti, che puoi copiare o scaricare come file references.bib.",
      },
      {
        question: "Può creare una voce BibTeX da un DOI o da un URL?",
        answer:
          "Puoi incollare un DOI o un URL, ma il generatore non li cerca né in Crossref né sul web: un modello di IA scrive la voce a partire dal testo fornito. Per un articolo noto spesso compila i campi correttamente, ma può sbagliare: controlla ogni campo, oppure incolla titolo, autori e sede di pubblicazione insieme al DOI.",
      },
      {
        question: "Formatta citazioni APA, MLA o IEEE?",
        answer:
          "Produce solo BibTeX. Lo stile di citazione si sceglie nel documento LaTeX, per esempio con \\bibliographystyle{IEEEtran} o \\bibliographystyle{apalike}, oppure con biblatex e style=apa: la stessa voce .bib può così essere stampata in qualsiasi stile.",
      },
      {
        question: "Il generatore BibTeX è gratuito?",
        answer:
          "Sì. È gratuito e non richiede alcun account. In questa pagina non viene salvato nulla: copia la voce o esporta il file .bib prima di uscire.",
      },
    ],
    related: (
      <>
        Consulta esempi commentati nella{" "}
        <IntroLink href="https://www.useoctree.com/learn/bibliography-examples" external>
          guida alle bibliografie LaTeX
        </IntroLink>
        , inizia un articolo dai <IntroLink href="/templates">modelli LaTeX</IntroLink>, oppure
        compila il documento nell’
        <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>.
      </>
    ),
  },

  "html-to-latex": {
    heading: "Convertire HTML in LaTeX online",
    intro: (
      <>
        <p>
          Questo convertitore da HTML a LaTeX trasforma markup web in un documento LaTeX completo e
          compilabile. Incolla l’HTML nell’editor: un modello di IA (OpenAI gpt-4o-mini) associa
          ogni elemento al suo equivalente LaTeX. I titoli da <Cmd>{"<h1>"}</Cmd> a{" "}
          <Cmd>{"<h3>"}</Cmd> diventano sezioni, <Cmd>{"<ul>"}</Cmd> e <Cmd>{"<ol>"}</Cmd>{" "}
          diventano itemize ed enumerate, <Cmd>{"<table>"}</Cmd> diventa tabular, e{" "}
          <Cmd>{"<strong>"}</Cmd>, <Cmd>{"<em>"}</Cmd>, <Cmd>{"<code>"}</Cmd> e i link diventano i
          comandi LaTeX corrispondenti, con amsmath, amssymb e hyperref nel preambolo.
        </p>
        <p>
          La scheda «Anteprima» compila il risultato con una distribuzione TeX Live completa sul
          servizio di compilazione di Octree, così vedi il PDF prima di scaricare il file .tex. Lo
          strumento accetta markup incollato, non un URL, e ogni conversione restituisce circa
          2.000 token di LaTeX: conviene convertire le pagine lunghe in più parti. È gratuito e non
          richiede alcun account.
        </p>
      </>
    ),
    stepsHeading: "Come convertire HTML in LaTeX",
    steps: [
      {
        title: "Incolla il tuo HTML",
        body: "Sostituisci l’esempio con il tuo markup: una pagina completa, un frammento di articolo o il codice sorgente di una tabella copiato da un sito web o da un’esportazione del CMS.",
      },
      {
        title: "Avvia la conversione in LaTeX",
        body: (
          <>
            Fai clic su «Converti in LaTeX». Il LaTeX compare progressivamente nella scheda
            «Codice» come documento completo, da <Cmd>\documentclass{"{article}"}</Cmd> a{" "}
            <Cmd>\end{"{document}"}</Cmd>.
          </>
        ),
      },
      {
        title: "Visualizza l’anteprima ed esporta",
        body: "Apri la scheda «Anteprima» per compilare il documento in PDF, poi esportalo come file .tex o PDF, oppure aprilo in Octree per continuare a modificarlo.",
      },
    ],
    tipsHeading: "Consigli per una conversione pulita",
    tips: [
      {
        title: "Togli ciò che LaTeX non può usare",
        body: "Elimina script, stili inline, navigazione e pubblicità prima della conversione. Il CSS applicato ai paragrafi, come colori e font, non ha un equivalente LaTeX diretto, e un input più breve lascia più spazio al contenuto.",
      },
      {
        title: "Le immagini diventano segnaposto",
        body: (
          <>
            Un tag <Cmd>{"<img>"}</Cmd> può diventare solo una riga <Cmd>\includegraphics</Cmd>;
            il file dell’immagine non viene scaricato, quindi l’anteprima non può mostrarlo.
            Aggiungi i file in Octree oppure commenta quelle righe.
          </>
        ),
      },
      {
        title: "Caratteri speciali",
        body: (
          <>
            Se la compilazione si blocca su un simbolo, verifica che <Cmd>&amp;</Cmd>,{" "}
            <Cmd>%</Cmd>, <Cmd>#</Cmd> e <Cmd>_</Cmd> nel testo siano stati scritti come{" "}
            <Cmd>\&amp;</Cmd>, <Cmd>\%</Cmd>, <Cmd>\#</Cmd> e <Cmd>\_</Cmd>.
          </>
        ),
      },
    ],
    faqHeading: "FAQ sulla conversione da HTML a LaTeX",
    faq: [
      {
        question: "Come si converte HTML in LaTeX?",
        answer:
          "Incolla l’HTML nell’editor di questa pagina e fai clic su «Converti in LaTeX». I titoli diventano comandi \\section, gli elenchi diventano itemize o enumerate, le tabelle diventano tabular, e grassetto, corsivo e link diventano \\textbf, \\emph e \\href. Controlla il risultato nella scheda «Anteprima» e scarica il .tex o il PDF.",
      },
      {
        question: "Questo strumento può convertire LaTeX in HTML?",
        answer:
          "No, converte solo da HTML a LaTeX. Per passare da LaTeX a HTML, la soluzione abituale è uno strumento TeX locale come make4ht o htlatex di TeX4ht, oppure Pandoc (pandoc paper.tex -o paper.html). Per la pubblicazione sul web, il convertitore da LaTeX a Markdown di questo sito è un’altra opzione.",
      },
      {
        question: "Quanto HTML si può convertire?",
        answer:
          "Non c’è un limite fisso in ingresso, ma ogni conversione restituisce circa 2.000 token di LaTeX, cioè qualche pagina. Converti una pagina lunga sezione per sezione, oppure togli prima script, stili e navigazione per inviare solo il contenuto.",
      },
      {
        question: "Il convertitore da HTML a LaTeX è gratuito?",
        answer:
          "Sì, è gratuito e non richiede alcun account. La conversione usa un modello di IA (OpenAI gpt-4o-mini): rileggi il risultato, in particolare le tabelle con celle unite.",
      },
    ],
    related: (
      <>
        Ti serve un altro formato? Consulta tutti i{" "}
        <IntroLink href="/tools/latex-converter">convertitori LaTeX</IntroLink>, converti{" "}
        <IntroLink href="/tools/markdown-to-latex">Markdown in LaTeX</IntroLink>, oppure impara le
        basi con la{" "}
        <IntroLink href="https://www.useoctree.com/learn/tables" external>
          guida alle tabelle LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "latex-to-word": {
    heading: "Convertire LaTeX in Word (DOCX) online",
    intro: (
      <>
        <p>
          Questo convertitore da LaTeX a Word trasforma un documento .tex in un file Microsoft Word
          .docx modificabile. Lavora in due passaggi. Prima un modello di IA (OpenAI gpt-4o-mini)
          legge il tuo LaTeX e lo riscrive come HTML semantico pulito: mantiene i titoli{" "}
          <GuideCode>\section</GuideCode>, gli elenchi, le tabelle <GuideCode>tabular</GuideCode>,
          grassetto e corsivo, i link e le note a piè di pagina, ed elimina il preambolo e i
          comandi di layout, che in Word non hanno senso. Poi questo HTML viene convertito in modo
          deterministico in elementi nativi di Word: stili da Titolo 1 a Titolo 6, elenchi puntati
          e numerati, tabelle con riga di intestazione e testo formattato.
        </p>
        <p>
          Il risultato è un vero file .docx: revisioni, commenti e sommario funzionano come in
          qualsiasi file Word. Le formule vengono scritte come testo Unicode leggibile invece che
          come equazioni di Word, le figure sono sostituite dalle loro didascalie e l’input è
          limitato a 60.000 caratteri. Il convertitore è gratuito, non richiede alcun account e non
          conserva nulla dopo aver restituito il file.
        </p>
        <GuideTable
          headers={["LaTeX", "Risultato in Word"]}
          rows={[
            [<GuideCode key="1">\title, \section, \subsection</GuideCode>, "Stili Titolo, Titolo 1, Titolo 2"],
            [<GuideCode key="2">itemize, enumerate, description</GuideCode>, "Elenchi puntati e numerati, con i livelli di annidamento"],
            [<GuideCode key="3">tabular, booktabs, longtable</GuideCode>, "Tabella di Word con riga di intestazione in grassetto; didascalia sopra"],
            [<GuideCode key="4">\textbf, \emph, \underline, \texttt</GuideCode>, "Testo in grassetto, corsivo, sottolineato, a spaziatura fissa"],
            [<GuideCode key="5">$inline math$</GuideCode>, "Testo leggibile con simboli Unicode, apici e pedici"],
            [<GuideCode key="6">equation, align, \[ \]</GuideCode>, "Un paragrafo centrato per riga di equazione, con il suo numero"],
            [<GuideCode key="7">\href, \url, \footnote</GuideCode>, "Collegamento ipertestuale cliccabile; testo della nota tra parentesi"],
            [<GuideCode key="8">\cite, thebibliography</GuideCode>, "Rimandi [key] e sezione «References» numerata"],
            [<GuideCode key="9">figure, \includegraphics</GuideCode>, "Solo didascalia (i file delle immagini non vengono inviati)"],
          ]}
        />
      </>
    ),
    stepsHeading: "Come convertire LaTeX in Word",
    steps: [
      {
        title: "Incolla il tuo LaTeX",
        body: "Incolla il contenuto del file .tex, un documento completo o un estratto, fino a 60.000 caratteri.",
      },
      {
        title: "Avvia la conversione in Word",
        body: "Fai clic su «Convert to Word». Al termine della conversione document.docx si scarica automaticamente; il pulsante di download resta visibile per ottenerne un’altra copia.",
      },
      {
        title: "Apri il file in Word",
        body: "Apri il file in Microsoft Word, Google Docs, LibreOffice o Pages. I titoli usano gli stili di titolo di Word (Titolo 1, Titolo 2 e così via), quindi il riquadro di spostamento e il sommario funzionano subito.",
      },
    ],
    tipsHeading: "Limiti e come aggirarli",
    tips: [
      {
        title: "Le equazioni sono testo semplice",
        body: (
          <>
            Le formule diventano testo Unicode leggibile come x² + y² = r², non equazioni di Word
            modificabili. Per avere equazioni native di Word (OMML), esegui Pandoc in locale:{" "}
            <Cmd>pandoc paper.tex -o paper.docx --citeproc --bibliography=refs.bib</Cmd>, oppure
            trasforma una formula chiave in immagine con il{" "}
            <IntroLink href="/tools/latex-to-png">convertitore da LaTeX a PNG</IntroLink>.
          </>
        ),
      },
      {
        title: "Le figure compaiono come didascalie",
        body: "I file delle immagini non vengono inviati insieme al testo, quindi ogni figura è sostituita dalla sua didascalia. Inserisci poi le immagini in Word.",
      },
      {
        title: "Il testo è troppo lungo",
        body: "Il limite è di 60.000 caratteri. Converti una tesi capitolo per capitolo e incolla le parti in un unico file Word.",
      },
    ],
    faqHeading: "FAQ sulla conversione da LaTeX a Word",
    faq: [
      {
        question: "Come si converte un file LaTeX in Word?",
        answer:
          "Incolla il contenuto del file .tex nell’editor e fai clic su «Convert to Word». Il convertitore legge la struttura del LaTeX, la ricostruisce come documento Word con veri titoli, elenchi, tabelle e formattazione del testo, e scarica document.docx sul tuo computer. Aprilo in Microsoft Word, Google Docs, LibreOffice o Pages.",
      },
      {
        question: "Cosa succede alle equazioni quando si converte LaTeX in Word?",
        answer:
          "Le formule in linea e in display vengono convertite in testo semplice leggibile con simboli Unicode (per esempio x² + y² = r² o ∫ f(x) dx), e le equazioni in display sono centrate su una riga a sé. Non sono oggetti equazione nativi di Word. Se ti servono equazioni di Word modificabili (OMML), esegui Pandoc in locale: pandoc paper.tex -o paper.docx. Per una formula con resa perfetta, trasformala in immagine con lo strumento da LaTeX a PNG e incolla l’immagine.",
      },
      {
        question: "Tabelle, elenchi e bibliografie vengono mantenuti?",
        answer:
          "Le tabelle (tabular, booktabs, longtable) diventano vere tabelle di Word con una riga di intestazione; itemize ed enumerate diventano elenchi puntati e numerati; grassetto, corsivo, sottolineato, spaziatura fissa, link e note a piè di pagina vengono mantenuti. Le citazioni compaiono come [key] o come testo autore-anno, e un ambiente thebibliography diventa una sezione «References» numerata. Le figure sono sostituite dalle didascalie, perché il convertitore non ha accesso ai file delle immagini.",
      },
      {
        question: "La conversione da LaTeX a Word è gratuita? Il mio documento viene conservato?",
        answer:
          "Il convertitore è gratuito, senza registrazione. Il tuo LaTeX viene inviato al nostro server per la conversione; il file Word è generato in memoria e restituito in streaming al browser, e non viene conservato nulla dopo l’invio della risposta. Sono supportati documenti fino a 60.000 caratteri, abbastanza per un articolo o un capitolo di tesi tipico.",
      },
    ],
    related: (
      <>
        Ti serve invece Markdown per Notion o GitHub? Usa il{" "}
        <IntroLink href="/tools/latex-to-markdown">convertitore da LaTeX a Markdown</IntroLink>,
        compila un PDF nell’<IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>,
        oppure consulta tutti i <IntroLink href="/tools/latex-converter">convertitori LaTeX</IntroLink>.
      </>
    ),
  },

  "latex-to-png": {
    heading: "Convertire LaTeX in PNG: le tue equazioni come immagine",
    intro: (
      <>
        <p>
          Questo convertitore da LaTeX a PNG rende un’equazione, una figura TikZ o la prima pagina
          di un documento come immagine PNG. Il codice viene compilato con un’installazione TeX
          Live completa sul servizio di compilazione di Octree, lo stesso usato dall’
          <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>: sono disponibili
          tutti i pacchetti che useresti in locale. Il PDF torna al browser, dove pdf.js rasterizza
          la prima pagina alla risoluzione (DPI) scelta e produce un PNG con sfondo trasparente o
          bianco. Non interviene alcuna IA e non viene conservato nulla al termine della
          compilazione.
        </p>
        <p>
          Per una formula isolata, la classe <GuideCode>standalone</GuideCode> con l’opzione{" "}
          <GuideCode>preview</GuideCode> ritaglia la pagina sull’equazione, e{" "}
          <GuideCode>border=4pt</GuideCode> aggiunge un piccolo margine attorno. Usa l’immagine
          nelle slide, in Word e Google Docs, nei file README, in Notion, Slack o in un’email:
          ovunque la matematica non possa essere composta. Lo strumento è gratuito e non richiede
          alcun account.
        </p>
        <GuidePre>{`\\documentclass[preview,border=4pt]{standalone}
\\usepackage{amsmath,amssymb}
\\begin{document}
$\\displaystyle \\hat{H}\\psi = E\\psi$
\\end{document}`}</GuidePre>
      </>
    ),
    stepsHeading: "Come convertire LaTeX in PNG",
    steps: [
      {
        title: "Scrivi l’equazione o il documento",
        body: (
          <>
            Modifica l’esempio, che usa{" "}
            <Cmd>\documentclass[preview,border=4pt]{"{standalone}"}</Cmd> per ritagliare l’immagine
            sulla formula, oppure incolla qualsiasi documento completo.
          </>
        ),
      },
      {
        title: "Scegli risoluzione e sfondo",
        body: "Scegli 1× (96 DPI), 2× (192 DPI) o 4× (384 DPI), e lascia selezionato «Transparent background» per slide e temi scuri, oppure deselezionalo per uno sfondo bianco.",
      },
      {
        title: "Converti e salva",
        body: "Fai clic su «Convert to PNG». Scarica latex.png o copia l’immagine negli appunti per incollarla in PowerPoint, Google Docs, Notion o Slack.",
      },
    ],
    tipsHeading: "Consigli per immagini migliori",
    tips: [
      {
        title: "La formula tocca il bordo",
        body: (
          <>
            Aumenta <Cmd>border=4pt</Cmd> nelle opzioni della classe di documento. Usa{" "}
            <Cmd>$\displaystyle ...$</Cmd> in linea invece di <Cmd>\[ ... \]</Cmd>, che occupa
            tutta la larghezza della riga.
          </>
        ),
      },
      {
        title: "Un’immagine per una slide scura",
        body: (
          <>
            Carica <Cmd>xcolor</Cmd> e scrivi <Cmd>\color{"{white}"}</Cmd> prima della formula; con
            lo sfondo trasparente, il testo bianco risalta su qualsiasi tema scuro.
          </>
        ),
      },
      {
        title: "Viene mostrata una sola pagina",
        body: "Viene resa solo la prima pagina del PDF. Fai una conversione per equazione, oppure compila un documento di più pagine in PDF nell’editor LaTeX online.",
      },
    ],
    faqHeading: "FAQ sulla conversione da LaTeX a PNG",
    faq: [
      {
        question: "Come si converte un’equazione LaTeX in un’immagine PNG?",
        answer:
          "Inserisci l’equazione in un documento standalone (l’esempio predefinito usa \\documentclass[preview,border=4pt]{standalone}), scegli una risoluzione e fai clic su «Convert to PNG». Il LaTeX viene compilato in PDF sul nostro server, la prima pagina viene resa nel browser e puoi scaricare il PNG o copiarlo direttamente negli appunti.",
      },
      {
        question: "Posso ottenere un PNG LaTeX con sfondo trasparente?",
        answer:
          "Sì. Lascia selezionata l’opzione «Transparent background». Poiché la classe standalone non colora la pagina, tutti i pixel fuori dalla formula restano trasparenti: l’immagine si integra bene in slide scure, sfondi colorati e pagine web. Deseleziona l’opzione per uno sfondo bianco opaco.",
      },
      {
        question: "Quale risoluzione scegliere per slide o stampa?",
        answer:
          "1× (96 DPI) basta per un’anteprima veloce o un messaggio in chat. Scegli 2× (192 DPI) per Google Slides, PowerPoint, Word, Google Docs e Notion, dove l’immagine appare più o meno alla sua dimensione naturale sugli schermi ad alta densità. Scegli 4× (384 DPI) se l’immagine va stampata o ingrandita.",
      },
      {
        question: "Funziona con un documento LaTeX completo, e non solo con un’equazione?",
        answer:
          "Sì. Qualsiasi documento che compila con pdflatex funziona, compresi un articolo, una presentazione beamer o una figura TikZ. Solo la prima pagina viene resa in PNG; per un documento di più pagine, usa lo strumento di anteprima LaTeX per compilare e scaricare il PDF completo.",
      },
    ],
    related: (
      <>
        Ti serve l’intero documento? Compilalo nell’
        <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>, trasformalo in un{" "}
        <IntroLink href="/tools/latex-to-word">file Word</IntroLink>, oppure cerca comandi nella{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guida alla matematica in LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "markdown-to-latex": {
    heading: "Convertire Markdown in LaTeX online",
    intro: (
      <>
        <p>
          Questo convertitore da Markdown a LaTeX trasforma testo .md in un documento LaTeX
          completo e compilabile. Un modello di IA (OpenAI gpt-4o-mini) riscrive i titoli come
          sezioni, grassetto e corsivo come <Cmd>\textbf</Cmd> e <Cmd>\textit</Cmd>, gli elenchi
          puntati e numerati come itemize ed enumerate, le tabelle come tabular, i blocchi di
          codice delimitati come listati di codice e i link come collegamenti ipertestuali. Carica
          pacchetti come booktabs, listings e hyperref, e mantiene la matematica in linea e in
          display come matematica LaTeX.
        </p>
        <p>
          La scheda «Anteprima» compila il risultato con una distribuzione TeX Live completa sul
          servizio di compilazione di Octree, così vedi il PDF prima di scaricare il file .tex.
          L’input è testo incollato e ogni conversione restituisce circa 2.000 token di LaTeX,
          sufficienti per qualche pagina; dividi i file più lunghi. Lo strumento è gratuito, non
          richiede alcun account ed è adatto a file README, appunti delle lezioni e bozze scritte in
          Obsidian, Notion o Typora che devono diventare un articolo o un capitolo di tesi.
        </p>
      </>
    ),
    stepsHeading: "Come convertire Markdown in LaTeX",
    steps: [
      {
        title: "Incolla il tuo Markdown",
        body: "Sostituisci l’esempio con il tuo contenuto .md: appunti di Obsidian o Notion, un README, oppure una bozza con titoli, elenchi, tabelle, blocchi di codice e formule.",
      },
      {
        title: "Avvia la conversione in LaTeX",
        body: (
          <>
            Fai clic su «Converti in LaTeX». Un documento completo compare progressivamente nella
            scheda «Codice», con i titoli <Cmd>#</Cmd> come <Cmd>\section</Cmd>, gli elenchi come
            itemize ed enumerate, e le formule <Cmd>$...$</Cmd> e <Cmd>$$...$$</Cmd> mantenute come
            matematica LaTeX.
          </>
        ),
      },
      {
        title: "Visualizza l’anteprima ed esporta",
        body: "Apri la scheda «Anteprima» per compilare il documento in PDF, poi esporta il file .tex o il PDF, oppure aprilo in Octree per continuare a scrivere.",
      },
    ],
    tipsHeading: "Problemi comuni e come risolverli",
    tips: [
      {
        title: "Undefined control sequence nelle formule",
        body: (
          <>
            Le formule Markdown vengono passate così come sono: comandi specifici di KaTeX o un{" "}
            <Cmd>\mathbb</Cmd> senza amssymb possono quindi non compilare. Il log indica la riga;
            correggi il comando o aggiungi il pacchetto.
          </>
        ),
      },
      {
        title: "Le immagini non compaiono",
        body: (
          <>
            <Cmd>![alt](image.png)</Cmd> diventa una riga <Cmd>\includegraphics</Cmd>, ma il file
            dell’immagine non viene importato. Caricalo in Octree oppure commenta la riga per
            compilare.
          </>
        ),
      },
      {
        title: "I documenti lunghi si interrompono prima della fine",
        body: "Ogni conversione restituisce circa 2.000 token di LaTeX. Converti un file lungo un capitolo o una sezione alla volta, poi unisci le parti.",
      },
    ],
    faqHeading: "FAQ sulla conversione da Markdown a LaTeX",
    faq: [
      {
        question: "Come si converte Markdown in LaTeX online?",
        answer:
          "Incolla il tuo Markdown nell’editor di questa pagina e fai clic su «Converti in LaTeX». Lo strumento restituisce un documento LaTeX completo con i pacchetti necessari, che puoi visualizzare in anteprima come PDF e scaricare come file .tex. Non servono installazioni né account.",
      },
      {
        question: "Le equazioni matematiche vengono mantenute?",
        answer:
          "Sì. La matematica in linea tra $...$ e quella in display tra $$...$$ viene mantenuta come matematica LaTeX, e amsmath e amssymb vengono caricati nel preambolo: le equazioni scritte per MathJax o KaTeX di solito compilano senza modifiche.",
      },
      {
        question: "Che differenza c’è con Pandoc?",
        answer:
          "Pandoc (pandoc notes.md -o notes.tex) è un convertitore deterministico da riga di comando, da installare in locale. Questo strumento funziona nel browser, usa un modello di IA (OpenAI gpt-4o-mini) per scrivere il LaTeX e compila subito un’anteprima PDF. Rileggi il risultato, perché l’IA può riformulare o ristrutturare il contenuto.",
      },
      {
        question: "Posso convertire un file .md in .tex?",
        answer:
          "Apri il file .md in un qualsiasi editor di testo, copia il contenuto nel convertitore e fai clic su «Converti in LaTeX», poi usa «Esporta» per scaricare document.tex. La pagina accetta testo incollato, non il caricamento di file.",
      },
    ],
    related: (
      <>
        Vuoi fare il contrario? Usa il{" "}
        <IntroLink href="/tools/latex-to-markdown">convertitore da LaTeX a Markdown</IntroLink>,
        consulta tutti i <IntroLink href="/tools/latex-converter">convertitori LaTeX</IntroLink>,
        oppure leggi l’
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introduzione a LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "latex-converter": {
    heading: "Convertitori LaTeX: converti da e verso LaTeX online",
    intro: (
      <>
        <p>
          I convertitori LaTeX di Octree coprono i formati che più spesso bisogna portare dentro o
          fuori da LaTeX. Verso LaTeX: Markdown, HTML, MathML e diagrammi Mermaid, tabelle CSV da
          Excel o Google Sheets, PDF, foto di equazioni, immagini di schemi e articoli arXiv. Da
          LaTeX: Markdown per GitHub e Notion, Word .docx per revisori e piattaforme di
          sottomissione, immagini PNG per le slide e PDF tramite l’editor LaTeX online.
        </p>
        <p>
          Ogni convertitore è gratuito, funziona nel browser e non richiede alcun account. La
          maggior parte usa un modello di IA, perché passare da un formato all’altro richiede
          discernimento; i risultati in LaTeX vengono compilati con una distribuzione TeX Live
          completa sul servizio di compilazione di Octree, così puoi controllare il PDF prima di
          scaricarlo. Da arXiv a LaTeX, da LaTeX a PNG e da LaTeX a PDF non usano alcuna IA. La
          tabella qui sopra elenca ogni convertitore con il suo input, il suo output e l’uso
          migliore.
        </p>
      </>
    ),
    stepsHeading: "Come usare i convertitori LaTeX",
    steps: [
      {
        title: "Parti da ciò che hai",
        body: "Scegli la scheda che corrisponde al tuo input: Markdown, HTML, MathML, Mermaid, un file CSV, un PDF, un’immagine o un identificativo arXiv per ottenere LaTeX, oppure un documento LaTeX per ottenere Markdown, un file Word, un’immagine PNG o un PDF.",
      },
      {
        title: "Incolla o carica, poi converti",
        body: "Ogni convertitore si apre su una pagina dedicata. Incolla il contenuto o carica il file e avvia la conversione; i convertitori con IA mostrano il risultato man mano che viene scritto.",
      },
      {
        title: "Controlla il risultato ed esporta",
        body: "I risultati in LaTeX sono accompagnati da un’anteprima PDF compilata, così puoi verificarli prima di scaricare il file .tex. Apri un risultato LaTeX in Octree per continuare a modificarlo.",
      },
    ],
    tipsHeading: "Consigli per conversioni migliori",
    tips: [
      {
        title: "Rileggi il risultato dell’IA",
        body: "I convertitori con IA gestiscono input disordinati e pacchetti insoliti, ma possono riformulare o omettere contenuti. Confronta l’anteprima con il sorgente prima di inviare qualsiasi cosa.",
      },
      {
        title: "Converti i documenti lunghi in più parti",
        body: "I convertitori Markdown, HTML, Mermaid, CSV e da LaTeX a Markdown restituiscono circa 2.000 token per conversione, cioè qualche pagina, e da LaTeX a Word accetta fino a 60.000 caratteri. Dividi una tesi per capitoli.",
      },
      {
        title: "Le figure viaggiano a parte",
        body: "Nessun convertitore invia i file delle immagini insieme al testo. Le figure diventano righe \\includegraphics, link a immagini o didascalie: aggiungi i file in seguito.",
      },
    ],
    faqHeading: "FAQ sui convertitori LaTeX",
    faq: [
      {
        question: "Che cos’è un convertitore LaTeX?",
        answer:
          "Un convertitore LaTeX traduce tra un sorgente LaTeX e un altro formato. I convertitori verso LaTeX prendono Markdown, HTML, MathML, Mermaid, tabelle CSV, PDF o immagini e producono codice .tex; i convertitori da LaTeX prendono un sorgente .tex e producono Markdown, immagini PNG, documenti Word o PDF. Questa pagina raccoglie tutti i convertitori gratuiti di Octree, in entrambe le direzioni.",
      },
      {
        question: "Quali convertitori usano l’IA e quali sono deterministici?",
        answer:
          "Markdown, HTML, MathML, Mermaid, tabella (CSV), PDF, immagine ed equazione verso LaTeX, oltre a da LaTeX a Markdown, usano un modello di IA. Da LaTeX a Word usa l’IA per un primo passaggio, poi costruisce il .docx in modo deterministico. Da arXiv a LaTeX, da LaTeX a PNG e da LaTeX a PDF non usano alcuna IA: scaricano o compilano il tuo input così com’è.",
      },
      {
        question: "Come si converte gratis LaTeX in Word o in PDF?",
        answer:
          "Per Word, apri il convertitore da LaTeX a Word, incolla il documento e scarica document.docx. Per il PDF, apri l’editor LaTeX online, incolla il documento e scarica il PDF compilato. Entrambi sono gratuiti e non richiedono alcun account.",
      },
      {
        question: "C’è un limite alla dimensione dei documenti?",
        answer:
          "Da LaTeX a Word accetta fino a 60.000 caratteri, e da PDF a LaTeX accetta PDF fino a 3 MB e 20 pagine. I convertitori Markdown, HTML, Mermaid, CSV e da LaTeX a Markdown restituiscono circa 2.000 token per conversione, cioè qualche pagina: converti i documenti lunghi in più parti. Gli strumenti basati sulla compilazione accettano qualsiasi documento che compili entro il limite di tempo del server.",
      },
    ],
    related: (
      <>
        Sei alle prime armi con LaTeX? Leggi l’
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introduzione a LaTeX
        </IntroLink>
        , modifica un documento nell’
        <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>, oppure sfoglia l’
        <IntroLink href="/">elenco completo degli strumenti LaTeX</IntroLink>.
      </>
    ),
  },

  "latex-to-markdown": {
    heading: "Convertire LaTeX in Markdown online",
    intro: (
      <>
        <p>
          Questo convertitore da LaTeX a Markdown trasforma un documento o un estratto .tex in
          Markdown standard e pulito. Un modello di IA (OpenAI gpt-4o-mini) riscrive le sezioni come
          titoli <Cmd>#</Cmd>, itemize ed enumerate come elenchi, le tabelle tabular e booktabs come
          tabelle Markdown, <Cmd>\textbf</Cmd> e <Cmd>\emph</Cmd> come grassetto e corsivo, gli
          ambienti di codice come blocchi di codice delimitati e <Cmd>\href</Cmd> come link. Le
          formule restano in LaTeX tra <Cmd>$...$</Cmd> e <Cmd>$$...$$</Cmd>, che GitHub, Obsidian
          e gli altri renderer KaTeX o MathJax visualizzano.
        </p>
        <p>
          Lo strumento è gratuito, non richiede alcun account e accetta testo incollato. Ogni
          conversione restituisce circa 2.000 token di Markdown: converti gli articoli lunghi in più
          parti. Le figure diventano link a immagini quando possibile e le citazioni non vengono
          risolte da un file .bib, quindi metti in conto di sistemarle a mano. Usalo per pubblicare
          un articolo su un blog, trasformare appunti delle lezioni in un README o spostare note
          LaTeX in Notion o Obsidian.
        </p>
      </>
    ),
    stepsHeading: "Come convertire LaTeX in Markdown",
    steps: [
      {
        title: "Incolla il tuo LaTeX",
        body: "Incolla un documento .tex completo o un semplice estratto, come una sezione, una tabella o un elenco. Il preambolo non è necessario.",
      },
      {
        title: "Avvia la conversione in Markdown",
        body: "Fai clic su «Converti in Markdown». Il Markdown compare progressivamente nell’editor di output, man mano che viene scritto.",
      },
      {
        title: "Copialo o scaricalo",
        body: "Copia il Markdown dall’editor di output, oppure usa «Esporta come Markdown» per scaricare document.md per GitHub, Obsidian, Notion o un sito statico.",
      },
    ],
    tipsHeading: "Consigli per una conversione pulita",
    tips: [
      {
        title: "Le formule hanno bisogno di un renderer",
        body: (
          <>
            Le equazioni restano nella forma <Cmd>$...$</Cmd> e <Cmd>$$...$$</Cmd>. GitHub,
            Obsidian, Jupyter e la maggior parte dei generatori di siti statici con KaTeX o MathJax
            le visualizzano; i visualizzatori Markdown di base mostrano il LaTeX grezzo.
          </>
        ),
      },
      {
        title: "Macro personalizzate",
        body: (
          <>
            I comandi definiti con <Cmd>\newcommand</Cmd> non hanno un equivalente in Markdown.
            Includi le loro definizioni nell’input, così il convertitore può espanderli, e controlla
            il risultato.
          </>
        ),
      },
      {
        title: "Figure e citazioni",
        body: (
          <>
            Le figure diventano, quando possibile, link a immagini Markdown verso i nomi di file
            originali, e le chiavi <Cmd>\cite</Cmd> non vengono risolte da un file .bib. Metti le
            immagini accanto al file .md e sistema i riferimenti a mano.
          </>
        ),
      },
    ],
    faqHeading: "FAQ sulla conversione da LaTeX a Markdown",
    faq: [
      {
        question: "Come si converte LaTeX in Markdown?",
        answer:
          "Incolla il tuo LaTeX nell’editor a sinistra e fai clic su «Converti in Markdown». Le sezioni diventano titoli #, itemize ed enumerate diventano elenchi, tabular diventa una tabella Markdown, \\textbf e \\emph diventano grassetto e corsivo, e gli ambienti di codice diventano blocchi di codice delimitati. Copia il risultato o esporta document.md.",
      },
      {
        question: "Le equazioni vengono mantenute?",
        answer:
          "Sì. La matematica in linea viene mantenuta tra $...$ e quella in display tra $$...$$, scritta in LaTeX: si visualizza ovunque il Markdown sia reso con MathJax o KaTeX, compresi GitHub, Obsidian e i notebook Jupyter.",
      },
      {
        question: "Quanto LaTeX si può convertire?",
        answer:
          "Non c’è un limite fisso in ingresso, ma ogni conversione restituisce circa 2.000 token di Markdown, cioè qualche pagina. Converti una tesi o un articolo lungo un capitolo o una sezione alla volta.",
      },
      {
        question: "È gratuito? È meglio di Pandoc?",
        answer:
          "È gratuito e senza account. Lo strumento usa un modello di IA (OpenAI gpt-4o-mini), che se la cava con pacchetti insoliti e sorgenti disordinati, ma il cui risultato va riletto. Pandoc (pandoc paper.tex -o paper.md) è deterministico e più adatto ai documenti molto lunghi, ma va installato in locale.",
      },
    ],
    related: (
      <>
        Vuoi fare il contrario? Usa il{" "}
        <IntroLink href="/tools/markdown-to-latex">convertitore da Markdown a LaTeX</IntroLink>,
        esporta in <IntroLink href="/tools/latex-to-word">Word</IntroLink>, oppure consulta tutti i{" "}
        <IntroLink href="/tools/latex-converter">convertitori LaTeX</IntroLink>.
      </>
    ),
  },

  "latex-word-counter": {
    heading: "Contare le parole di un documento LaTeX online",
    intro: (
      <p>
        Contare le parole in LaTeX è più difficile che in un elaboratore di testi: un semplice
        conteggio delle parole di un file .tex include anche comandi come{" "}
        <Cmd>\begin{"{itemize}"}</Cmd>, le etichette e le equazioni. Questo contatore di parole
        LaTeX gratuito legge il sorgente come deve fare uno strumento che capisce TeX, ignorando il
        markup e la matematica, e ti dà il numero di parole del testo che il lettore vede davvero.
      </p>
    ),
    stepsHeading: "Come contare le parole in LaTeX",
    steps: [
      {
        title: "Incolla il sorgente LaTeX",
        body: "Incolla nell’editor l’intero file .tex, preambolo compreso, oppure solo la sezione che vuoi misurare.",
      },
      {
        title: "Lascia che conti",
        body: "Il numero di parole si aggiorna automaticamente mentre scrivi. Il sorgente passa per texcount, il contatore incluso in TeX Live e usato da Overleaf, quindi comandi e markup vengono rimossi correttamente.",
      },
      {
        title: "Leggi la ripartizione",
        body: "Consulta il totale delle parole e i conteggi separati per corpo del testo, titoli e didascalie, e usa quello richiesto dalla tua rivista, dal tuo corso o dalla tua scuola di dottorato.",
      },
    ],
    tipsHeading: "Cosa viene contato",
    tips: [
      {
        title: "Corpo del testo",
        body: "Le parole di paragrafi, elenchi e note a piè di pagina, compreso il testo all’interno dei comandi di formattazione come \\textbf{...} e \\emph{...}. È il numero principale a cui si riferisce la maggior parte dei limiti di parole.",
      },
      {
        title: "Titoli",
        body: "Le parole dei titoli \\section, \\subsection, \\chapter e simili, contate a parte così puoi includerle o escluderle.",
      },
      {
        title: "Didascalie",
        body: "Le parole delle didascalie di figure e tabelle scritte con \\caption{...}, anch’esse contate a parte.",
      },
      {
        title: "Cosa non viene contato",
        body: "I comandi e le loro opzioni, le etichette, i riferimenti incrociati e le chiavi di citazione (\\label, \\ref, \\cite), i commenti dopo % e la matematica: le formule in linea $...$ e le equazioni in display non sono parole, quindi un’equazione non gonfia mai il totale.",
      },
    ],
    faqHeading: "FAQ sul conteggio delle parole in LaTeX",
    faq: [
      {
        question: "Come si ottiene il numero di parole di un documento LaTeX?",
        answer:
          "Incolla il sorgente .tex nel contatore di parole LaTeX qui sopra: il numero di parole compare subito, con totali separati per corpo del testo, titoli e didascalie. Offline, esegui texcount sul file da riga di comando: texcount -inc -total main.tex.",
      },
      {
        question: "Il conteggio delle parole LaTeX include le equazioni?",
        answer:
          "No. La matematica in linea come $E = mc^2$ e le equazioni in display sono trattate come formule e non come parole, quindi non vengono aggiunte al conteggio.",
      },
      {
        question: "Come si confronta con texcount e con il conteggio parole di Overleaf?",
        answer:
          "Esegue texcount, lo script Perl incluso in TeX Live e MiKTeX, quindi i numeri corrispondono a texcount -total sul tuo computer. Anche il conteggio parole di Overleaf si basa su texcount, quindi i totali dovrebbero essere molto vicini. La differenza è che non ti servono né un’installazione TeX locale né un account.",
      },
      {
        question: "Bibliografia e commenti sono inclusi nel conteggio?",
        answer:
          "No. I commenti dopo % vengono ignorati, e texcount ignora la bibliografia per impostazione predefinita: i riferimenti da \\bibliography o da un ambiente thebibliography non vengono contati. Nemmeno le chiavi di citazione in \\cite{...} vengono contate come parole.",
      },
    ],
    related: (
      <>
        Ti serve il documento in un altro formato? Prova il{" "}
        <IntroLink href="/tools/latex-to-word">convertitore da LaTeX a Word</IntroLink> se la tua
        sottomissione richiede un .docx, oppure sfoglia il{" "}
        <IntroLink href="/symbols">riferimento dei simboli LaTeX</IntroLink>.
      </>
    ),
  },

  "mathml-to-latex": {
    heading: "Convertire MathML in LaTeX online",
    intro: (
      <>
        <p>
          Questo convertitore da MathML a LaTeX trasforma markup MathML in matematica LaTeX da
          incollare in un articolo. Incolla un elemento <Cmd>{"<math>"}</Cmd>: un modello di IA
          (OpenAI gpt-4o-mini) riscrive l’albero in codice amsmath. <Cmd>{"<mfrac>"}</Cmd> diventa{" "}
          <Cmd>\frac</Cmd>, <Cmd>{"<msqrt>"}</Cmd> diventa <Cmd>\sqrt</Cmd>, <Cmd>{"<msup>"}</Cmd>{" "}
          e <Cmd>{"<msub>"}</Cmd> diventano apici e pedici, e <Cmd>{"<mtable>"}</Cmd> diventa una
          matrice o un blocco allineato. Lettere greche e operatori scritti come caratteri Unicode
          tornano di solito come comandi LaTeX.
        </p>
        <p>
          Il risultato è un documento LaTeX completo, e la scheda «Anteprima» lo compila con una
          distribuzione TeX Live completa sul servizio di compilazione di Octree, così puoi
          controllare ogni simbolo. L’editor evidenzia la sintassi XML, quindi funziona anche come
          semplice editor MathML online. Ogni conversione restituisce fino a circa 1.500 token di
          LaTeX, più che sufficienti per qualche equazione. Lo strumento è gratuito e non richiede
          alcun account.
        </p>
      </>
    ),
    stepsHeading: "Come convertire MathML in LaTeX",
    steps: [
      {
        title: "Incolla il MathML",
        body: (
          <>
            Incolla un elemento <Cmd>{"<math>"}</Cmd> copiato da una pagina web, da
            un’esportazione di Word o MathType, oppure MathML preso da un file EPUB o JATS XML.
          </>
        ),
      },
      {
        title: "Avvia la conversione in LaTeX",
        body: "Fai clic su «Converti in LaTeX». L’equazione torna in un documento LaTeX completo che carica amsmath e amssymb.",
      },
      {
        title: "Controlla l’anteprima",
        body: "Apri la scheda «Anteprima» per compilare il documento e confrontare l’equazione composta con l’originale, poi copia la formula, esporta il file .tex o il PDF, oppure aprilo in Octree.",
      },
    ],
    tipsHeading: "Consigli per convertire MathML",
    tips: [
      {
        title: "Copia l’intero elemento math",
        body: (
          <>
            Includi tutto, da <Cmd>{"<math>"}</Cmd> a <Cmd>{"</math>"}</Cmd>. Un frammento che
            inizia a metà di un <Cmd>{"<mrow>"}</Cmd> può perdere parentesi o termini.
          </>
        ),
      },
      {
        title: "Ottenere MathML da Word",
        body: "Word salva le equazioni in OMML, non in MathML. In Word per Windows attiva Opzioni equazione > «Copia MathML negli Appunti come testo normale», poi copia l’equazione e incollala qui.",
      },
      {
        title: "Ti serve solo l’equazione",
        body: (
          <>
            Copia le righe comprese tra <Cmd>\begin{"{document}"}</Cmd> e{" "}
            <Cmd>\end{"{document}"}</Cmd> nel tuo file; il preambolo ha bisogno solo di{" "}
            <Cmd>\usepackage{"{amsmath,amssymb}"}</Cmd>.
          </>
        ),
      },
    ],
    faqHeading: "FAQ sulla conversione da MathML a LaTeX",
    faq: [
      {
        question: "Come si converte MathML in LaTeX?",
        answer:
          "Incolla il markup MathML nell’editor e fai clic su «Converti in LaTeX». Elementi come mfrac, msqrt, msup, msub, mover e mtable vengono riscritti come \\frac, \\sqrt, apici, pedici, accenti e matrici, e il risultato compare come documento LaTeX completo che puoi compilare nella scheda «Anteprima».",
      },
      {
        question: "Il Content MathML è supportato?",
        answer:
          "Lo strumento è pensato per il Presentation MathML, quello esportato da browser, Word e MathType. Anche il Content MathML (apply, ci, cn) di solito viene convertito, perché il markup è letto da un modello di IA, ma controlla il risultato nell’anteprima.",
      },
      {
        question: "Posso convertire più equazioni alla volta?",
        answer:
          "Sì. Incolla più elementi math uno dopo l’altro: vengono convertiti in un unico documento. Ogni conversione restituisce fino a circa 1.500 token di LaTeX, quindi dividi i file molto lunghi.",
      },
      {
        question: "Il convertitore da MathML a LaTeX è gratuito?",
        answer:
          "Sì, è gratuito e non richiede alcun account. La conversione usa OpenAI gpt-4o-mini e l’anteprima compila con una distribuzione TeX Live completa, così puoi controllare l’equazione prima di usarla.",
      },
    ],
    related: (
      <>
        Scrivi equazioni a mano con la{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guida alla matematica in LaTeX
        </IntroLink>
        , converti la foto di un’equazione con lo strumento{" "}
        <IntroLink href="/tools/math-to-latex">da matematica a LaTeX</IntroLink>, oppure consulta
        tutti i <IntroLink href="/tools/latex-converter">convertitori LaTeX</IntroLink>.
      </>
    ),
  },

  "mermaid-to-latex": {
    heading: "Convertire un diagramma Mermaid in TikZ per LaTeX",
    intro: (
      <>
        <p>
          Questo convertitore trasforma il codice di un diagramma Mermaid in TikZ: un diagramma di
          flusso abbozzato in un file Markdown, in un README di GitHub o in Notion può così entrare
          in un articolo LaTeX come grafica vettoriale nativa. Incolla la definizione Mermaid: un
          modello di IA (OpenAI gpt-4o-mini) riscrive ogni nodo, etichetta e freccia in un{" "}
          <Cmd>tikzpicture</Cmd>, con posizioni esplicite perché i nodi non si sovrappongano,
          all’interno di un documento standalone o article completo che carica tikz e le librerie
          necessarie.
        </p>
        <p>
          La scheda «Anteprima» compila il diagramma con una distribuzione TeX Live completa sul
          servizio di compilazione di Octree, così puoi controllare la disposizione prima di
          esportare il file .tex o il PDF. Mermaid dispone i diagrammi automaticamente, TikZ no:
          i diagrammi grandi possono quindi richiedere ritocchi alle spaziature. I diagrammi di
          flusso danno i risultati migliori; ogni conversione restituisce fino a circa 2.000 token
          di LaTeX. Lo strumento è gratuito e non richiede alcun account.
        </p>
      </>
    ),
    stepsHeading: "Come convertire Mermaid in TikZ",
    steps: [
      {
        title: "Incolla il codice Mermaid",
        body: (
          <>
            Incolla la definizione del diagramma, partendo dal suo tipo, come <Cmd>graph TD</Cmd>,{" "}
            <Cmd>flowchart LR</Cmd> o <Cmd>sequenceDiagram</Cmd>, senza il blocco{" "}
            <Cmd>```mermaid</Cmd> che lo racchiude.
          </>
        ),
      },
      {
        title: "Avvia la conversione in TikZ",
        body: "Fai clic su «Converti in LaTeX». L’IA riscrive nodi, etichette e frecce in un tikzpicture, all’interno di un documento LaTeX completo.",
      },
      {
        title: "Visualizza l’anteprima, ritocca ed esporta",
        body: "Apri la scheda «Anteprima» per compilare il diagramma in PDF. Se qualcosa si sovrappone, modifica le distanze o le posizioni dei nodi nel codice, poi esporta diagram.tex o diagram.pdf, oppure aprilo in Octree.",
      },
    ],
    tipsHeading: "Problemi comuni e come risolverli",
    tips: [
      {
        title: "I nodi si sovrappongono",
        body: (
          <>
            Aumenta <Cmd>node distance</Cmd> nelle opzioni del tikzpicture, oppure cambia la
            posizione di un nodo, per esempio da <Cmd>below of=</Cmd> a <Cmd>right of=</Cmd>. TikZ
            non dispone i grafi automaticamente come fa Mermaid.
          </>
        ),
      },
      {
        title: "Libreria non caricata",
        body: (
          <>
            Un errore su una punta di freccia o una forma sconosciuta di solito significa che manca
            un <Cmd>\usetikzlibrary</Cmd>, per esempio <Cmd>arrows.meta</Cmd>, <Cmd>shapes</Cmd> o{" "}
            <Cmd>positioning</Cmd>. Aggiungilo al preambolo.
          </>
        ),
      },
      {
        title: "Inizia in piccolo",
        body: "I diagrammi di flusso si convertono in modo più affidabile. Per diagrammi grandi o complessi, converti una parte alla volta e unisci i tikzpicture.",
      },
    ],
    faqHeading: "FAQ sulla conversione da Mermaid a LaTeX",
    faq: [
      {
        question: "Come si usa un diagramma Mermaid in LaTeX?",
        answer:
          "LaTeX non sa visualizzare Mermaid direttamente. Incolla il codice Mermaid in questo convertitore: riscrive il diagramma in TikZ, il pacchetto di disegno nativo di LaTeX. Copia il tikzpicture nel tuo documento e carica il pacchetto tikz, oppure esporta il file .tex completo.",
      },
      {
        question: "Quali tipi di diagrammi Mermaid sono supportati?",
        answer:
          "Diagrammi di flusso e grafi (graph e flowchart) si convertono in modo più affidabile. Anche diagrammi di sequenza, di stato e delle classi possono essere convertiti, perché il codice è letto da un modello di IA, ma aspettati di dover ritoccare le posizioni nel TikZ ottenuto.",
      },
      {
        question: "Perché convertire Mermaid in TikZ invece di usare un’immagine?",
        answer:
          "Un diagramma TikZ è grafica vettoriale disegnata da LaTeX stesso: usa lo stesso font del testo, resta nitido a qualsiasi ingrandimento e si modifica nel sorgente. Un PNG o un SVG esportato non si può modificare senza ripassare da Mermaid.",
      },
      {
        question: "Il convertitore da Mermaid a LaTeX è gratuito?",
        answer:
          "Sì, è gratuito e non richiede alcun account. La conversione usa OpenAI gpt-4o-mini e restituisce fino a circa 2.000 token di LaTeX, e l’anteprima compila con una distribuzione TeX Live completa.",
      },
    ],
    related: (
      <>
        Impara i comandi di disegno con la{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          guida a TikZ
        </IntroLink>
        , descrivi uno schema a parole con il{" "}
        <IntroLink href="/tools/tikz-generator">generatore TikZ</IntroLink>, oppure ridisegna uno
        schizzo con lo strumento <IntroLink href="/tools/image-to-tikz">da immagine a TikZ</IntroLink>.
      </>
    ),
  },

  "pgfplots-generator": {
    heading: "Generatore PGFPlots: crea un grafico pgfplots in LaTeX",
    intro: (
      <>
        <p>
          Questo generatore PGFPlots trasforma la descrizione a parole di un grafico in codice
          pgfplots. Descrivi una funzione, una serie di punti o un tipo di grafico: un modello di IA
          (OpenAI GPT-5) scrive un documento LaTeX completo con un ambiente <Cmd>tikzpicture</Cmd>{" "}
          e <Cmd>axis</Cmd> commentato. Grafici di funzioni e a linee, grafici a barre, grafici a
          dispersione, istogrammi e superfici 3D, con le etichette degli assi, gli intervalli, la
          legenda e i colori richiesti.
        </p>
        <p>
          La scheda «Anteprima» compila il grafico con una distribuzione TeX Live completa sul
          servizio di compilazione di Octree, così vedi il PDF prima di esportare il file .tex.
          Poiché il grafico è disegnato da LaTeX, usa il font del documento e resta nitido a
          qualsiasi dimensione, a differenza di un’immagine incollata da un foglio di calcolo. Il
          generatore è gratuito e non richiede alcun account; il codice prodotto è tuo e si
          modifica liberamente, dalle etichette delle tacche agli stili dei tracciati.
        </p>
      </>
    ),
    stepsHeading: "Come generare un grafico pgfplots",
    steps: [
      {
        title: "Descrivi il grafico",
        body: "Indica cosa tracciare: la funzione o i dati, il tipo di grafico (linee, barre, dispersione, area, istogramma o superficie 3D), gli intervalli degli assi, le etichette, la legenda e i colori. Puoi anche incollare una piccola tabella di valori.",
      },
      {
        title: "Genera il codice",
        body: (
          <>
            Fai clic su «Genera grafico». L’IA scrive un documento completo con{" "}
            <Cmd>\pgfplotsset{"{compat=1.18}"}</Cmd> e un ambiente <Cmd>axis</Cmd> commentato.
          </>
        ),
      },
      {
        title: "Visualizza l’anteprima ed esporta",
        body: "Apri la scheda «Anteprima» per compilare il grafico in PDF. Modifica il codice per rifinirlo, poi esporta pgfplot.tex o pgfplot.pdf, oppure aprilo in Octree.",
      },
    ],
    tipsHeading: "Errori pgfplots comuni e come correggerli",
    tips: [
      {
        title: "Dimension too large",
        body: (
          <>
            Una funzione che cresce molto in fretta, come <Cmd>exp(x)</Cmd> su un dominio ampio,
            supera le capacità dell’aritmetica di TeX. Riduci il <Cmd>domain</Cmd>, aggiungi{" "}
            <Cmd>restrict y to domain</Cmd> oppure usa un asse logaritmico.
          </>
        ),
      },
      {
        title: "Curve spigolose",
        body: (
          <>
            Aumenta <Cmd>samples</Cmd>, per esempio <Cmd>samples=200</Cmd>, per curve lisce. Tieni
            un valore più basso per i grafici 3D, molto più lenti da compilare.
          </>
        ),
      },
      {
        title: "Tracciare i tuoi dati",
        body: (
          <>
            Sostituisci le coordinate generate con i tuoi valori usando <Cmd>\addplot table</Cmd> o{" "}
            <Cmd>\addplot coordinates</Cmd>; lo stile degli assi resta invariato.
          </>
        ),
      },
    ],
    faqHeading: "FAQ sul generatore PGFPlots",
    faq: [
      {
        question: "Che cos’è un generatore PGFPlots?",
        answer:
          "Scrive il codice pgfplots al posto tuo. pgfplots è il pacchetto LaTeX che disegna grafici con TikZ; invece di imparare le sue opzioni per gli assi, descrivi il grafico a parole e ottieni un documento completo da compilare, modificare e incollare in un articolo.",
      },
      {
        question: "Che tipi di grafici può creare?",
        answer:
          "Tutto ciò che pgfplots sa disegnare: grafici di funzioni, grafici a linee, grafici a barre, grafici a dispersione, istogrammi, barre di errore, grafici ad area e superfici o mesh 3D. Descrivi i dati, gli assi e lo stile che vuoi, e il codice ne tiene conto.",
      },
      {
        question: "Come inserisco il grafico nel mio documento LaTeX?",
        answer:
          "Aggiungi \\usepackage{pgfplots} e \\pgfplotsset{compat=1.18} al preambolo, poi copia l’ambiente tikzpicture dal codice generato nel tuo documento, di solito all’interno di un ambiente figure con una didascalia.",
      },
      {
        question: "Il generatore PGFPlots è gratuito?",
        answer:
          "Sì, è gratuito e non richiede alcun account. Il codice è scritto da un modello di IA (OpenAI GPT-5) e compilato con una distribuzione TeX Live completa: controlla nell’anteprima che corrisponda a ciò che hai chiesto.",
      },
    ],
    related: (
      <>
        Impara le opzioni degli assi con la{" "}
        <IntroLink href="https://www.useoctree.com/learn/pgfplots" external>
          guida a pgfplots
        </IntroLink>
        , disegna schemi con il{" "}
        <IntroLink href="/tools/tikz-generator">generatore TikZ</IntroLink>, oppure trasforma un CSV
        in tabella con il{" "}
        <IntroLink href="/tools/table-to-latex">generatore di tabelle LaTeX</IntroLink>.
      </>
    ),
  },
};

export default translations;
