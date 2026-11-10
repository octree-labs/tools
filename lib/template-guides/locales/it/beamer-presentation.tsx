import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "../../ui";

const faq: GuideFaqItem[] = [
  {
    question: "Questo template Beamer funziona su Overleaf?",
    answer:
      "Sì. Usa soltanto la classe di documento beamer con il tema predefinito Madrid e il tema di colori default, e non carica pacchetti aggiuntivi. Incolla il sorgente in un progetto Overleaf vuoto, in Octree o in qualsiasi installazione di TeX Live o MiKTeX e si compila senza modifiche con pdfLaTeX, il compilatore predefinito di Overleaf.",
  },
  {
    question: "Come ottengo diapositive in 16:9 invece che in 4:3?",
    answer:
      "Aggiungi l’opzione aspectratio alla riga della classe: \\documentclass[aspectratio=169]{beamer}. Il formato predefinito di Beamer è 4:3 (128 per 96 mm); 169 dà 160 per 90 mm, che riempie i proiettori moderni e le videochiamate. Sono accettati anche 1610 e 43.",
  },
  {
    question: "Quali temi Beamer posso usare al posto di Madrid?",
    answer:
      "Funziona qualsiasi tema distribuito con beamer, basta cambiare \\usetheme{Madrid}: scelte comuni sono AnnArbor, Berlin, Boadilla, CambridgeUS, Copenhagen, Darmstadt, Frankfurt, Singapore e Warsaw. I temi di colori come beaver, crane, dolphin, seahorse e whale vanno in \\usecolortheme{...}. Funziona anche il tema di terze parti metropolis, che però rende meglio con XeLaTeX o LuaLaTeX perché è pensato per i font Fira.",
  },
  {
    question: "Perché il piè di pagina mostra un titolo lunghissimo o il nome completo dell’università?",
    answer:
      "Madrid stampa autore, istituto, titolo e data nel piè di pagina usando le forme brevi di questi campi. Dai a ciascuno una versione breve tra parentesi quadre, per esempio \\title[Titolo breve]{Titolo completo della presentazione} e \\institute[ABC]{Alpha Beta College}: il piè di pagina userà il testo breve, mentre la diapositiva del titolo conserverà quello lungo.",
  },
  {
    question: "Come creo una dispensa stampabile dalle diapositive?",
    answer:
      "Aggiungi handout alle opzioni della classe (\\documentclass[handout]{beamer}). Le sovrapposizioni create con \\pause e con le specifiche <2-> si riducono a una sola pagina per frame. Per stampare più frame per foglio, aggiungi al preambolo \\usepackage{pgfpages} e \\pgfpagesuselayout{4 on 1}[a4paper,border shrink=5mm].",
  },
];

export default function BeamerPresentationGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Un template Beamer per presentazioni in LaTeX e Overleaf</GuideH2>
      <GuideP>
        Questo è un template Beamer per presentazioni in LaTeX e Overleaf: una
        presentazione di partenza breve e pulita, costruita sulla classe standard{" "}
        <GuideCode>beamer</GuideCode> con il tema predefinito{" "}
        <GuideCode>Madrid</GuideCode> e il tema di colori di default. Madrid è uno
        dei temi Beamer più usati per le presentazioni accademiche perché offre,
        senza alcuna configurazione, una barra colorata per il titolo del frame,
        blocchi con angoli arrotondati e un piè di pagina in tre parti con autore,
        titolo e numero di diapositiva.
      </GuideP>
      <GuideP>
        Il template non carica pacchetti oltre a Beamer stesso, quindi è a tutti gli
        effetti un template Beamer per Overleaf: incollalo in un progetto Overleaf
        vuoto, aprilo in Octree o compilalo su qualsiasi installazione di TeX Live o
        MiKTeX, e con pdfLaTeX si compila al primo tentativo. La presentazione
        d’esempio contiene una diapositiva del titolo, un indice generato dai comandi{" "}
        <GuideCode>\section</GuideCode> e i frame Introduzione, Contenuto principale
        e Conclusioni, da sostituire con il tuo materiale.
      </GuideP>
      <GuideP>
        Se stai confrontando diversi template Beamer, parti da questo quando vuoi
        l’aspetto tradizionale che revisori e commissioni si aspettano per un
        intervento a un convegno, una discussione di tesi o una lezione. Per una
        presentazione su sfondo scuro, guarda il{" "}
        <GuideLink href="/templates/beamer-dark">tema scuro per Beamer</GuideLink>;
        per un poster A0 realizzato con Beamer, il template{" "}
        <GuideLink href="/templates/conference-poster">poster per convegni</GuideLink>.
      </GuideP>

      <GuideH2 id="included">Che cosa contiene</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass{beamer}"}</GuideCode> con{" "}
          <GuideCode>{"\\usetheme{Madrid}"}</GuideCode> e{" "}
          <GuideCode>{"\\usecolortheme{default}"}</GuideCode>
        </li>
        <li>
          Diapositiva del titolo generata da <GuideCode>\title</GuideCode>,{" "}
          <GuideCode>\author</GuideCode>, <GuideCode>\institute</GuideCode> e{" "}
          <GuideCode>\date</GuideCode>
        </li>
        <li>Un frame con l’indice generato automaticamente</li>
        <li>Tre sezioni (Introduzione, Contenuto principale, Conclusioni), ciascuna con un frame</li>
        <li>Un frame con un elenco itemize da copiare per le diapositive a punti</li>
        <li>Nessun pacchetto, font o immagine esterni, quindi si compila ovunque</li>
      </GuideUl>

      <GuideH2 id="how-to-use">Come si usa</GuideH2>
      <GuideOl>
        <li>
          Fai clic su <em>Open as Template</em> per modificarlo in Octree con
          l’anteprima PDF in tempo reale, oppure su <em>View Source</em> e incolla il
          codice in un nuovo progetto Overleaf o in un file locale{" "}
          <GuideCode>slides.tex</GuideCode>.
        </li>
        <li>
          Compila con pdfLaTeX (<GuideCode>latexmk -pdf slides.tex</GuideCode>).
          Funzionano anche XeLaTeX e LuaLaTeX, che ti servono solo se passi ai font
          di sistema con <GuideCode>fontspec</GuideCode> o se usi il tema metropolis.
        </li>
        <li>
          Modifica il blocco del titolo all’inizio del file:{" "}
          <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode>,{" "}
          <GuideCode>\institute</GuideCode> e <GuideCode>\date</GuideCode> compilano
          sia la diapositiva del titolo sia il piè di pagina.
        </li>
        <li>
          Per aggiungere una diapositiva copia un blocco{" "}
          <GuideCode>{"\\begin{frame} ... \\end{frame}"}</GuideCode>. Metti un{" "}
          <GuideCode>\section</GuideCode> prima di un gruppo di frame perché compaia
          nell’indice.
        </li>
        <li>Compila due volte, così l’indice e i numeri delle diapositive sono aggiornati.</li>
      </GuideOl>

      <GuideH2 id="customise">Personalizzare il template</GuideH2>
      <GuideP>
        <strong>Cambia tema e colori.</strong> Le due righe dopo la classe
        controllano l’intero aspetto. Puoi sostituire il tema di layout e quello di
        colori in modo indipendente, ed eliminare i simboli di navigazione in basso a
        destra, che quasi nessun relatore usa:
      </GuideP>
      <GuidePre>{`\\documentclass[aspectratio=169]{beamer}
\\usetheme{Madrid}
\\usecolortheme{beaver}   % oppure crane, dolphin, seahorse, whale
\\setbeamertemplate{navigation symbols}{}`}</GuidePre>
      <GuideP>
        <strong>Usa campi brevi nel piè di pagina.</strong> Madrid stampa autore,
        istituto e titolo nel piè di pagina, quindi i nomi lunghi escono dallo
        spazio disponibile. Usa le forme brevi facoltative:
      </GuideP>
      <GuidePre>{`\\title[Short Title]{A Much Longer Presentation Title}
\\author[A.~Author]{Alice Author}
\\institute[UoX]{University of Example}`}</GuidePre>
      <GuideP>
        <strong>Mostra lo schema a ogni sezione.</strong> Inserisci queste righe nel
        preambolo e Beamer aggiungerà un frame con lo schema della presentazione,
        con la sezione corrente evidenziata, ogni volta che inizia un nuovo{" "}
        <GuideCode>\section</GuideCode>:
      </GuideP>
      <GuidePre>{`\\AtBeginSection[]{
  \\begin{frame}
    \\frametitle{Outline}
    \\tableofcontents[currentsection]
  \\end{frame}
}`}</GuidePre>

      <GuideH2 id="comparison">Template Beamer correlati</GuideH2>
      <GuideTable
        headers={["Template", "Aspetto", "Compilatore"]}
        rows={[
          [<strong key="b">Presentazione Beamer</strong>, "Madrid, chiaro, 4:3", "pdfLaTeX"],
          [
            <GuideLink key="d" href="/templates/beamer-dark">
              Tema scuro per Beamer
            </GuideLink>,
            "Madrid con palette scura, 16:9",
            "pdfLaTeX",
          ],
          [
            <GuideLink key="p" href="/templates/conference-poster">
              Poster per convegni
            </GuideLink>,
            "beamerposter A0",
            "pdfLaTeX",
          ],
        ]}
      />

      <GuideH2 id="faq">Domande frequenti sul template Beamer</GuideH2>
      <GuideFaq items={faq} inLanguage="it" />
    </article>
  );
}
