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
    question: "È il file di stile ufficiale di ICML 2026?",
    answer:
      "No. È una bozza a due colonne in stile ICML, basata sulla classe standard article con il font Times e margini di 0,75 pollici, così si compila ovunque senza file aggiuntivi. Le sottomissioni a ICML devono usare il file di stile ufficiale e il paper d’esempio contenuti nell’author kit indicato nella call for papers su icml.cc, che ha i propri comandi per titolo e autori. Scrivi e rivedi qui, poi sposta le sezioni nel kit ufficiale.",
  },
  {
    question: "Questo template ICML si compila su Overleaf?",
    answer:
      "Sì, con pdfLaTeX, il compilatore predefinito di Overleaf. Aggiungi un file references.bib accanto al file .tex, perché il template termina con \\bibliography{references}. Tutti i pacchetti sono inclusi in TeX Live, compreso il vecchio pacchetto subfigure.",
  },
  {
    question: "Come faccio a estendere una figura o una tabella su entrambe le colonne?",
    answer:
      "Usa gli ambienti con l’asterisco: \\begin{figure*}[t] ... \\end{figure*} oppure \\begin{table*}[t] ... \\end{table*}, con larghezze espresse rispetto a \\textwidth. I float a due colonne possono andare solo in cima a una pagina o in una pagina di soli float, di solito quella successiva alla pagina in cui sono definiti.",
  },
  {
    question: "Qual è il limite di pagine di ICML 2026?",
    answer:
      "L’abstract d’esempio di questo template parla di otto pagine per il testo principale, con bibliografia e appendici senza limiti, in linea con le call degli ultimi anni. Verifica il limite esatto e le regole per la versione camera-ready nella call for papers ufficiale di ICML 2026.",
  },
  {
    question: "Come fanno titolo e autori a occupare entrambe le colonne?",
    answer:
      "Il template ridefinisce \\maketitle in modo che stampi il blocco del titolo dentro \\twocolumn[...], che lo compone sull’intera larghezza della pagina. L’abstract comincia poi nella colonna di sinistra, come negli articoli ICML.",
  },
];

export default function Icml2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Un template LaTeX per scrivere la bozza del paper ICML 2026</GuideH2>
      <GuideP>
        Questo template ICML 2026 è un articolo di machine learning a due colonne
        che si compila subito su Overleaf, in Octree o in qualsiasi installazione di
        TeX Live. È un template per la stesura, non il file di stile ufficiale: usa
        la classe standard <GuideCode>article</GuideCode> con l’opzione{" "}
        <GuideCode>twocolumn</GuideCode> in corpo 10 pt, il font{" "}
        <GuideCode>times</GuideCode> e margini di 0,75 pollici, e ridefinisce{" "}
        <GuideCode>\maketitle</GuideCode> perché il titolo e il blocco degli autori
        occupino entrambe le colonne sopra l’abstract, come negli articoli ICML.
      </GuideP>
      <GuideP>
        Il preambolo carica ciò che serve di solito a un paper ICML:{" "}
        <GuideCode>algorithm</GuideCode> e <GuideCode>algorithmic</GuideCode> per lo
        pseudocodice, <GuideCode>booktabs</GuideCode> per le tabelle,{" "}
        <GuideCode>subfigure</GuideCode> per i pannelli affiancati,{" "}
        <GuideCode>amsmath</GuideCode> e <GuideCode>hyperref</GuideCode>. L’articolo
        d’esempio ha un blocco di tre autori con affiliazioni numerate e una nota sul
        contributo paritario, un abstract, Introduzione, Lavori correlati, una
        sezione Metodo con una funzione di perdita regolarizzata, una tabella negli
        Esperimenti, una sezione Accessibility and Reproducibility e una bibliografia
        BibTeX in stile <GuideCode>plain</GuideCode>. Scrivi la bozza qui, poi sposta
        le sezioni nell’author kit ufficiale di ICML 2026, disponibile su{" "}
        <GuideLink href="https://icml.cc" external>
          icml.cc
        </GuideLink>
        , per il PDF da sottomettere.
      </GuideP>

      <GuideH2 id="included">Che cosa contiene</GuideH2>
      <GuideUl>
        <li>Impaginazione a due colonne in corpo 10 pt con blocco del titolo a tutta larghezza</li>
        <li>Tre autori con affiliazioni in apice e un marcatore di contributo paritario</li>
        <li>Abstract e sei sezioni, tra cui Accessibility and Reproducibility</li>
        <li>Un’equazione in display e una tabella dei risultati in <GuideCode>booktabs</GuideCode></li>
        <li>
          <GuideCode>algorithm</GuideCode>/<GuideCode>algorithmic</GuideCode> caricati per
          lo pseudocodice
        </li>
        <li>BibTeX con lo stile <GuideCode>plain</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">Come si usa</GuideH2>
      <GuideOl>
        <li>
          Fai clic su <em>Open as Template</em> per modificarlo in Octree, oppure su{" "}
          <em>View Source</em> e incolla il codice su Overleaf o in un file locale{" "}
          <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>
          Crea un file <GuideCode>references.bib</GuideCode> accanto al sorgente e
          cita le voci con <GuideCode>\cite</GuideCode>.
        </li>
        <li>
          Compila con pdfLaTeX e BibTeX (
          <GuideCode>latexmk -pdf paper.tex</GuideCode>). Il template non richiede font
          di sistema, quindi XeLaTeX o LuaLaTeX non sono necessari.
        </li>
        <li>
          Modifica <GuideCode>\title</GuideCode> e il blocco{" "}
          <GuideCode>\author</GuideCode> nel preambolo. Per la versione destinata alla
          revisione in doppio cieco, rimuovi nomi e affiliazioni.
        </li>
        <li>
          Prima di sottomettere, copia le tue sezioni nel paper d’esempio ufficiale
          di ICML 2026 e usa il suo stile bibliografico.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Personalizzare il template</GuideH2>
      <GuideP>
        <strong>Scrivi lo pseudocodice.</strong> Il pacchetto{" "}
        <GuideCode>algorithmic</GuideCode> usa comandi in maiuscolo. Ecco un
        algoritmo flottante che sta in una colonna:
      </GuideP>
      <GuidePre>{`\\begin{algorithm}[tb]
  \\caption{SGD with weight decay}
  \\label{alg:sgd}
  \\begin{algorithmic}
    \\STATE {\\bfseries Input:} data $\\{(x_i, y_i)\\}_{i=1}^{n}$, step size $\\eta$
    \\FOR{$t = 1$ {\\bfseries to} $T$}
      \\STATE Sample $i$ uniformly from $\\{1, \\dots, n\\}$
      \\STATE $\\theta \\leftarrow \\theta - \\eta \\nabla_\\theta \\ell(f_\\theta(x_i), y_i)$
    \\ENDFOR
  \\end{algorithmic}
\\end{algorithm}`}</GuidePre>
      <GuideP>
        <strong>Sostituisci subfigure con subcaption.</strong>{" "}
        <GuideCode>subfigure</GuideCode> è obsoleto. Elimina{" "}
        <GuideCode>{"\\usepackage{subfigure}"}</GuideCode> (i due pacchetti non
        possono essere caricati insieme), aggiungi{" "}
        <GuideCode>{"\\usepackage{subcaption}"}</GuideCode> e scrivi i pannelli così:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
  \\centering
  \\begin{subfigure}{0.48\\columnwidth}
    \\includegraphics[width=\\linewidth]{example-image-a}
    \\caption{Dataset A}
  \\end{subfigure}\\hfill
  \\begin{subfigure}{0.48\\columnwidth}
    \\includegraphics[width=\\linewidth]{example-image-b}
    \\caption{Dataset B}
  \\end{subfigure}
  \\caption{Accuracy on both datasets.}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Tieni allineato il blocco del titolo.</strong> Autori e affiliazioni
        sono testo semplice dentro <GuideCode>\author</GuideCode>, separati da{" "}
        <GuideCode>\quad</GuideCode>, con gli apici scritti come{" "}
        <GuideCode>{"$^{1}$"}</GuideCode>. Per aggiungere un autore copia una voce{" "}
        <GuideCode>{"Firstname Lastname$^{1}$"}</GuideCode> e una nuova riga di
        affiliazione; segnala il contributo paritario con{" "}
        <GuideCode>{"$^{*}$"}</GuideCode>.
      </GuideP>

      <GuideP>
        Template correlati:{" "}
        <GuideLink href="/templates/neurips-2026">NeurIPS 2026</GuideLink>,{" "}
        <GuideLink href="/templates/iclr-2026">ICLR 2026</GuideLink> e{" "}
        <GuideLink href="/templates/aaai-2027">AAAI 2027</GuideLink>. Per le date,
        consulta la{" "}
        <GuideLink href="/conference-deadlines">pagina delle scadenze delle conferenze</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Domande frequenti sul template ICML</GuideH2>
      <GuideFaq items={faq} inLanguage="it" />
    </article>
  );
}
