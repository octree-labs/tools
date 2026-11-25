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
    question: "Come si prepara un compito di matematica in LaTeX?",
    answer:
      "Parti da questo template: ha un’intestazione con il corso e il periodo, le righe per nome e matricola, un elenco di istruzioni, una tabella dei punteggi ed esercizi numerati con spazio libero per lo svolgimento. Modifica l’intestazione, scrivi ogni esercizio come un paragrafo \\textbf{Problem N.} con il relativo punteggio e regola lo spazio per la risposta con \\vspace.",
  },
  {
    question: "La tabella dei punteggi si somma da sola?",
    answer:
      "No. La tabella è un normale tabular, quindi quando aggiungi, togli o cambi il peso di un esercizio devi aggiornare a mano le righe Problem, Points e Total e la riga delle istruzioni. Se vuoi i totali automatici, la classe di documento exam (inclusa in TeX Live) offre \\question[punti] e, dopo \\addpoints nel preambolo, un comando \\gradetable che somma i punti al posto tuo.",
  },
  {
    question: "Come lascio agli studenti più spazio per scrivere?",
    answer:
      "Aumenta il \\vspace dopo ogni esercizio, per esempio \\vspace{8cm}, oppure fai iniziare un esercizio su una pagina nuova con \\newpage. Nell’esempio, gli esercizi 1 e 2 sono seguiti da 4 cm, l’esercizio 3 da un salto pagina e l’esercizio 4 da 6 cm.",
  },
  {
    question: "Posso stampare questo compito da Overleaf?",
    answer:
      "Sì. Il template usa la classe article con geometry, amsmath, amssymb, amsthm e fancyhdr, quindi si compila con pdfLaTeX su Overleaf, in Octree o in un’installazione TeX locale. Scarica il PDF e stampalo in scala 100% su carta formato Letter; per il formato A4 aggiungi a4paper alle opzioni di geometry.",
  },
];

export default function MathExamGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Un template LaTeX per compiti di matematica</GuideH2>
      <GuideP>
        Questo template LaTeX per compiti di matematica produce una prova scritta
        formale, pronta da stampare, con tutto ciò che serve in prima pagina:
        un’intestazione con il corso, il nome della prova e il periodo su ogni
        pagina, le righe per il nome e la matricola dello studente, un breve elenco
        di istruzioni e una tabella dei punteggi con una colonna vuota per la
        valutazione. L’esempio è un esame finale da cinque esercizi e 100 punti per
        un corso introduttivo, con un’equazione di secondo grado, una derivata con
        la regola del quoziente, un integrale per sostituzione, una breve
        dimostrazione sui numeri pari e un limite trigonometrico.
      </GuideP>
      <GuideP>
        Ogni esercizio è composto da un’etichetta in grassetto &quot;Problem N.&quot;
        con il punteggio tra parentesi, il testo della domanda e un blocco fisso di
        spazio verticale per lo svolgimento, così gli studenti scrivono le risposte
        direttamente sul foglio. Il sorgente usa la classe standard{" "}
        <GuideCode>article</GuideCode> in corpo 12 pt con margini di un pollice,{" "}
        <GuideCode>fancyhdr</GuideCode> per l’intestazione e il numero di pagina, e{" "}
        <GuideCode>amsmath</GuideCode>/<GuideCode>amssymb</GuideCode> per la
        matematica, quindi funziona come template per compiti su Overleaf, in Octree
        o in qualsiasi installazione TeX locale. Poiché non usa una classe speciale
        per esami, ogni elemento è LaTeX semplice e facile da spostare: cambia
        l’intestazione, riscrivi gli esercizi e regola lo spazio per le risposte, e
        avrai un test, una prova intermedia o un esame finale pronto da stampare.
      </GuideP>

      <GuideH2 id="included">Che cosa contiene</GuideH2>
      <GuideUl>
        <li>Intestazione corrente con corso, nome della prova e periodo; numero di pagina nel piè di pagina</li>
        <li>Righe per il nome e la matricola</li>
        <li>Elenco di istruzioni (esercizi, punteggi, durata, materiale consentito)</li>
        <li>Tabella dei punteggi con le colonne Problem, Points e Score</li>
        <li>Cinque esercizi d’esempio con spazio libero per le risposte</li>
      </GuideUl>

      <GuideH2 id="how-to-use">Come si usa</GuideH2>
      <GuideOl>
        <li>
          Fai clic su <em>Open as Template</em> per modificarlo in Octree, oppure su{" "}
          <em>View Source</em> e incolla il codice su Overleaf o in un file locale{" "}
          <GuideCode>exam.tex</GuideCode>.
        </li>
        <li>Compila con pdfLaTeX; basta un passaggio.</li>
        <li>
          Modifica <GuideCode>\lhead</GuideCode>, <GuideCode>\chead</GuideCode> e{" "}
          <GuideCode>\rhead</GuideCode>, il titolo centrato e le istruzioni.
        </li>
        <li>
          Riscrivi gli esercizi, poi aggiorna la tabella dei punteggi perché righe e
          totale corrispondano.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Personalizzare il template</GuideH2>
      <GuideP>
        <strong>Aggiungi un esercizio.</strong> Copia il blocco di un esercizio,
        cambiane numero e punteggio, e aggiungi la riga corrispondente nella tabella
        prima di <GuideCode>\textbf{"{Total}"}</GuideCode>:
      </GuideP>
      <GuidePre>{`\\noindent
\\textbf{Problem 6.} (10 points) Find all real solutions of
\\[
|2x - 3| = 5
\\]

\\vspace{4cm}`}</GuidePre>
      <GuideP>
        <strong>Controlla i salti pagina.</strong> L’esempio porta l’esercizio 4 su
        una nuova pagina con <GuideCode>\newpage</GuideCode>. Inseriscine uno prima
        di qualunque esercizio che altrimenti finirebbe separato dal suo spazio per
        la risposta.
      </GuideP>
      <GuideP>
        <strong>Passa alla classe exam per i totali automatici.</strong> Se prepari
        molti compiti, la classe <GuideCode>exam</GuideCode> tiene il conto dei punti
        al posto tuo e costruisce la tabella di valutazione:
      </GuideP>
      <GuidePre>{`\\documentclass[12pt]{exam}
\\usepackage{amsmath,amssymb}
\\addpoints
\\begin{document}
\\begin{center}
\\gradetable[h][questions]
\\end{center}
\\begin{questions}
\\question[20] Solve $3x^2 - 7x + 2 = 0$.
\\vspace{4cm}
\\question[20] Find the derivative of $f(x) = \\frac{\\sin x}{x^2+1}$.
\\vspace{4cm}
\\end{questions}
\\end{document}`}</GuidePre>

      <GuideP>
        Template correlati: <GuideLink href="/templates/quiz-template">quiz</GuideLink>,{" "}
        <GuideLink href="/templates/math-problem-set">esercitazione di matematica</GuideLink> e{" "}
        <GuideLink href="/templates/grading-rubric">griglia di valutazione</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Domande frequenti sul template per compiti di matematica</GuideH2>
      <GuideFaq items={faq} inLanguage="it" />
    </article>
  );
}
