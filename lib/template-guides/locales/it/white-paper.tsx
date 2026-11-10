import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideUl,
  type GuideFaqItem,
} from "../../ui";

const faq: GuideFaqItem[] = [
  {
    question: "Qual è la struttura di un white paper?",
    answer:
      "Un frontespizio, un executive summary, l’esposizione del problema, la soluzione proposta, i benefici, delle prove a sostegno come un caso di studio, e una conclusione con un invito all’azione. Questo template segue quell’ordine: Executive Summary, The Challenge, The Solution, Benefits, Case Study e Conclusion, dopo un frontespizio che anticipa l’executive summary in un riquadro.",
  },
  {
    question: "Le statistiche del template sono reali?",
    answer:
      "No. Dati come la riduzione dei costi del 40% e il risparmio di 5 milioni di dollari del caso di studio sono segnaposto che mostrano dove vanno i numeri. Sostituiscili con risultati misurati da te o con fonti citate, e aggiungi una sezione bibliografica se riporti dati di terzi.",
  },
  {
    question: "Come cambio i colori del white paper?",
    answer:
      "Un solo colore, primarycolor, è definito con \\definecolor{primarycolor}{RGB}{0,51,102} e viene usato per il titolo, i titoli delle sezioni (tramite titlesec) e la cornice del riquadro di sintesi. Cambia i valori RGB con il colore del tuo marchio e tutto si aggiorna di conseguenza.",
  },
  {
    question: "Questo template per white paper funziona su Overleaf?",
    answer:
      "Sì. Usa la classe article con geometry, graphicx, xcolor, titlesec, hyperref e tcolorbox, tutti inclusi in TeX Live, quindi si compila con pdfLaTeX su Overleaf, in Octree o in un’installazione locale.",
  },
];

export default function WhitePaperGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Un template LaTeX per white paper</GuideH2>
      <GuideP>
        Questo template LaTeX per white paper produce un documento curato e con
        l’identità visiva del tuo marchio, del tipo che le aziende pubblicano per
        illustrare un problema e sostenere il proprio approccio: white paper di
        prodotto, documenti tecnici di posizione e contenuti di thought leadership
        per il marketing o le vendite. Il frontespizio presenta un grande titolo su
        due righe nel colore del marchio, un sottotitolo in corsivo, il nome
        dell’azienda e la data, e in fondo alla pagina un riquadro incorniciato con
        l’Executive Summary, così chi legge coglie il punto principale prima ancora
        di girare pagina.
      </GuideP>
      <GuideP>
        Il corpo segue la classica struttura problema-soluzione in sei sezioni
        numerate: Executive Summary, The Challenge, The Solution, Benefits (un
        elenco puntato dei risultati), Case Study e Conclusion. L’esempio è scritto
        per una piattaforma di IA immaginaria, e le sue percentuali e cifre di
        risparmio sono segnaposto da sostituire con numeri reali e documentati. Il
        sorgente usa la classe standard <GuideCode>article</GuideCode> in corpo 11
        pt con margini di un pollice. <GuideCode>titlesec</GuideCode> compone i
        titoli delle sezioni in caratteri grandi e in grassetto in un unico colore
        del marchio, <GuideCode>primarycolor</GuideCode>;{" "}
        <GuideCode>tcolorbox</GuideCode> disegna il riquadro di sintesi;{" "}
        <GuideCode>hyperref</GuideCode> rende cliccabili i link nel PDF; e{" "}
        <GuideCode>graphicx</GuideCode> è caricato per grafici e diagrammi. Il
        rientro dei paragrafi è disattivato per un aspetto moderno da documento
        aziendale. Tutto è incluso in TeX Live, quindi si compila come template per
        white paper su Overleaf, in Octree o con qualsiasi installazione locale.
      </GuideP>

      <GuideH2 id="included">Che cosa contiene</GuideH2>
      <GuideUl>
        <li>Frontespizio personalizzato con sottotitolo, azienda, data e riquadro dell’executive summary</li>
        <li>Sei sezioni numerate con struttura problema-soluzione</li>
        <li>Titoli delle sezioni colorati tramite <GuideCode>titlesec</GuideCode></li>
        <li>Un unico colore del marchio, <GuideCode>primarycolor</GuideCode>, usato in tutto il documento</li>
      </GuideUl>

      <GuideH2 id="how-to-use">Come si usa</GuideH2>
      <GuideOl>
        <li>
          Fai clic su <em>Open as Template</em> per modificarlo in Octree, oppure su{" "}
          <em>View Source</em> e incolla il codice su Overleaf o in un file locale{" "}
          <GuideCode>whitepaper.tex</GuideCode>.
        </li>
        <li>Compila con pdfLaTeX; basta un passaggio.</li>
        <li>
          Imposta il colore del tuo marchio nella riga{" "}
          <GuideCode>\definecolor</GuideCode>, poi modifica titolo, sottotitolo, nome
          dell’azienda e data nel frontespizio.
        </li>
        <li>
          Riscrivi il riquadro di sintesi e ogni sezione; limita l’executive summary
          a poche frasi.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Personalizzare il template</GuideH2>
      <GuideP>
        <strong>Separa i paragrafi con uno spazio.</strong> Il template imposta{" "}
        <GuideCode>\parindent</GuideCode> a zero ma non aggiunge spazio tra i
        paragrafi, che quindi si susseguono senza stacco. Sostituisci la riga{" "}
        <GuideCode>\setlength</GuideCode> con:
      </GuideP>
      <GuidePre>{`\\usepackage{parskip}`}</GuidePre>
      <GuideP>
        <strong>Metti in risalto un risultato chiave.</strong> Riprendi nel corpo del
        testo lo stile del riquadro del frontespizio per una statistica o una
        citazione:
      </GuideP>
      <GuidePre>{`\\begin{tcolorbox}[colback=primarycolor!5,colframe=primarycolor,title=Key result]
Company XYZ cut [metric] by [amount] within [time period].
\\end{tcolorbox}`}</GuidePre>
      <GuideP>
        <strong>Porta il marchio su ogni pagina.</strong> Aggiungi un piè di pagina
        con il nome dell’azienda e il numero di pagina usando{" "}
        <GuideCode>fancyhdr</GuideCode>:{" "}
        <GuideCode>{"\\usepackage{fancyhdr} \\pagestyle{fancy} \\fancyhf{} \\lfoot{TechCorp Industries} \\rfoot{\\thepage} \\renewcommand{\\headrulewidth}{0pt}"}</GuideCode>.
      </GuideP>

      <GuideP>
        Template correlati: <GuideLink href="/templates/business-report">report aziendale</GuideLink>,{" "}
        <GuideLink href="/templates/technical-report">relazione tecnica</GuideLink> e{" "}
        <GuideLink href="/templates/business-plan">business plan</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Domande frequenti sul template per white paper</GuideH2>
      <GuideFaq items={faq} inLanguage="it" />
    </article>
  );
}
