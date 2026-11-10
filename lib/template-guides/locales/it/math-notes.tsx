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
    question: "Come si prendono appunti di matematica in LaTeX?",
    answer:
      "Usa un template in cui gli ambienti per i teoremi sono già definiti, come questo: così scrivi soltanto \\begin{theorem}, \\begin{definition} o \\begin{proof} e numerazione e formattazione sono automatiche. Definisci scorciatoie per i simboli che usi spesso, come \\newcommand{\\R}{\\mathbb{R}}, per stare al passo durante la lezione.",
  },
  {
    question: "Quali ambienti per i teoremi definisce il template?",
    answer:
      "Otto: theorem, lemma, proposition e corollary in stile plain, in corsivo; definition ed example in stile definition, in tondo; remark e note nello stile più leggero remark. Tutti condividono un unico contatore numerato per sezione, quindi ottieni Definizione 2.1, Teorema 2.2, Esempio 2.3. L’ambiente proof è fornito da amsthm.",
  },
  {
    question: "Come richiamo un teorema con il suo numero?",
    answer:
      "Inserisci \\label{thm:closed} all’interno del teorema e scrivi Teorema~\\ref{thm:closed} nel testo. LaTeX inserisce il numero; compila due volte perché il riferimento venga risolto.",
  },
  {
    question: "Posso usare questi appunti di matematica su Overleaf?",
    answer:
      "Sì. Il template usa la classe article con geometry, amsmath, amssymb, amsthm, fancyhdr e xcolor, tutti inclusi in TeX Live, quindi si compila con pdfLaTeX su Overleaf, in Octree o in un’installazione locale.",
  },
];

export default function MathNotesGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Un template LaTeX per appunti di matematica</GuideH2>
      <GuideP>
        Questo template LaTeX per appunti di matematica è pensato per mettere in
        bella una lezione di matematica o i tuoi appunti di studio, con i risultati
        numerati correttamente. Definisce l’intera serie di enunciati usati nei
        corsi di matematica (teorema, lemma, proposizione, corollario, definizione,
        esempio, osservazione e nota), tutti con un unico contatore numerato per
        sezione, così riferimenti come &quot;Lemma 3.4&quot; sono univoci in tutto
        l’insieme degli appunti. I teoremi sono in corsivo, definizioni ed esempi in
        tondo e le osservazioni usano lo stile più leggero remark, secondo le
        consuete convenzioni di <GuideCode>amsthm</GuideCode>.
      </GuideP>
      <GuideP>
        La lezione d’esempio è un breve capitolo di topologia generale: una
        definizione di continuità tramite gli aperti, il teorema secondo cui
        un’applicazione continua da uno spazio compatto a uno spazio di Hausdorff è
        chiusa, uno schema di dimostrazione, un esempio, un’osservazione, un lemma
        sulle immagini dei compatti e due esercizi. Il documento usa la classe
        standard <GuideCode>article</GuideCode> in corpo 11 pt con margini di un
        pollice. <GuideCode>fancyhdr</GuideCode> stampa il nome del corso,
        &quot;Lecture Notes&quot; e la data in cima a ogni pagina, con il numero di
        pagina in basso, e <GuideCode>xcolor</GuideCode> è caricato per le
        evidenziazioni. Funziona come template per appunti di matematica su
        Overleaf, in Octree o con qualsiasi distribuzione TeX locale, e cresce da
        una singola lezione a un corso intero aggiungendo sezioni.
      </GuideP>

      <GuideH2 id="included">Che cosa contiene</GuideH2>
      <GuideUl>
        <li>Otto ambienti di tipo teorema con un unico contatore condiviso, numerato per sezione</li>
        <li>Tre stili per i teoremi: plain, definition e remark</li>
        <li>Intestazione corrente con corso, titolo e data; numero di pagina nel piè di pagina</li>
        <li>Lezione d’esempio di topologia con definizione, teorema, dimostrazione, esempio ed esercizi</li>
      </GuideUl>

      <GuideH2 id="how-to-use">Come si usa</GuideH2>
      <GuideOl>
        <li>
          Fai clic su <em>Open as Template</em> per modificarlo in Octree, oppure su{" "}
          <em>View Source</em> e incolla il codice su Overleaf o in un file locale{" "}
          <GuideCode>notes.tex</GuideCode>.
        </li>
        <li>Compila con pdfLaTeX. Se usi <GuideCode>\ref</GuideCode>, compila due volte.</li>
        <li>
          Imposta l’intestazione con <GuideCode>\lhead</GuideCode> (corso) e{" "}
          <GuideCode>\rhead</GuideCode> (data), e il titolo della lezione in{" "}
          <GuideCode>\title</GuideCode>.
        </li>
        <li>
          Scrivi i risultati con gli ambienti, per esempio{" "}
          <GuideCode>{"\\begin{proposition} ... \\end{proposition}"}</GuideCode>.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Personalizzare il template</GuideH2>
      <GuideP>
        <strong>Aggiungi scorciatoie per la notazione.</strong> Inserisci queste
        righe nel preambolo per scrivere <GuideCode>\R</GuideCode> al posto di{" "}
        <GuideCode>{"\\mathbb{R}"}</GuideCode>:
      </GuideP>
      <GuidePre>{`\\newcommand{\\R}{\\mathbb{R}}
\\newcommand{\\N}{\\mathbb{N}}
\\DeclareMathOperator{\\interior}{int}`}</GuidePre>
      <GuideP>
        <strong>Metti i teoremi su sfondo colorato.</strong> Carica{" "}
        <GuideCode>tcolorbox</GuideCode> dopo le righe{" "}
        <GuideCode>\newtheorem</GuideCode> e racchiudi un ambiente in un riquadro
        colorato senza cambiare il modo in cui lo scrivi:
      </GuideP>
      <GuidePre>{`\\usepackage{tcolorbox}
\\tcolorboxenvironment{theorem}{colback=blue!5,colframe=blue!50!black}`}</GuidePre>
      <GuideP>
        <strong>Evidenzia un’idea chiave.</strong> <GuideCode>xcolor</GuideCode> è
        già caricato, quindi <GuideCode>{"\\textcolor{red}{...}"}</GuideCode>{" "}
        segnala nel testo un avvertimento o un errore frequente.
      </GuideP>

      <GuideP>
        Template correlati: <GuideLink href="/templates/lecture-notes">dispense del corso</GuideLink>,{" "}
        <GuideLink href="/templates/mathematical-document">documento matematico</GuideLink>{" "}
        e <GuideLink href="/templates/math-cheat-sheet">formulario di matematica</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Domande frequenti sul template per appunti di matematica</GuideH2>
      <GuideFaq items={faq} inLanguage="it" />
    </article>
  );
}
