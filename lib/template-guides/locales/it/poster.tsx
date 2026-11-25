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
    question: "Come si crea un poster scientifico in LaTeX?",
    answer:
      "Usa una classe per poster come tikzposter, su cui è costruito questo template. Imposta formato e orientamento della carta in \\documentclass, titolo, autori e istituto nel preambolo, e scrivi i contenuti come riquadri \\block{Titolo}{Testo} disposti dentro \\begin{columns} con \\column{larghezza}. La classe si occupa della barra del titolo, dello stile dei riquadri e delle spaziature.",
  },
  {
    question: "Come cambio il tema del poster?",
    answer:
      "Aggiungi un comando di tema dopo \\documentclass, per esempio \\usetheme{Rays}. tikzposter include diversi temi predefiniti, tra cui Default, Rays, Basic, Simple, Envelope, Wave, Board, Autumn e Desert, più degli stili di colore separati da impostare con \\usecolorstyle.",
  },
  {
    question: "Come cambio il formato del poster o lo metto in orizzontale?",
    answer:
      "Modifica le opzioni della classe. tikzposter supporta a0paper, a1paper e a2paper e le parole chiave portrait o landscape, per esempio \\documentclass[25pt,a1paper,landscape]{tikzposter}. L’opzione 25pt è la dimensione del font di base; tikzposter accetta valori da 12pt a 25pt.",
  },
  {
    question: "Il template tikzposter si compila su Overleaf?",
    answer:
      "Sì. tikzposter fa parte di TeX Live, quindi il file si compila con pdfLaTeX su Overleaf, in Octree o in un’installazione locale senza file aggiuntivi. Poster grandi con molte immagini possono richiedere più tempo di compilazione di un documento normale.",
  },
];

export default function PosterGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Un template LaTeX per poster scientifici (tikzposter)</GuideH2>
      <GuideP>
        Questo template LaTeX per poster scientifici usa la classe{" "}
        <GuideCode>tikzposter</GuideCode> per produrre un poster da convegno o di
        ricerca in formato A0 verticale con un font di base da 25 pt, il più grande
        offerto dalla classe, così il testo resta leggibile anche a qualche metro di
        distanza. La barra del titolo in alto riporta i valori di{" "}
        <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode> e{" "}
        <GuideCode>\institute</GuideCode> impostati nel preambolo, e tutto ciò che
        sta sotto è costruito con riquadri <GuideCode>\block</GuideCode>.
      </GuideP>
      <GuideP>
        L’impaginazione d’esempio segue l’ordine che ci si aspetta nella maggior
        parte delle sessioni poster: un riquadro Abstract a tutta larghezza, poi due
        colonne uguali con Introduzione e Metodi a sinistra e Risultati e
        Conclusioni a destra, e in fondo un riquadro Bibliografia a tutta larghezza.
        Le colonne si dichiarano con <GuideCode>{"\\begin{columns}"}</GuideCode> e{" "}
        <GuideCode>{"\\column{0.5}"}</GuideCode>, dove il numero indica la frazione
        della larghezza del poster, quindi per un’impaginazione a tre colonne basta
        scrivere tre volte <GuideCode>{"\\column{0.33}"}</GuideCode>. Il template usa
        il tema predefinito di tikzposter e, oltre alla classe, carica soltanto{" "}
        <GuideCode>amsmath</GuideCode>. tikzposter fa parte di TeX Live, il che lo
        rende un template per poster utilizzabile su Overleaf, in Octree o in
        qualsiasi installazione locale. Per un’alternativa basata su beamer con
        un’impaginazione di ricerca a tre colonne, guarda il template per poster da
        convegno.
      </GuideP>

      <GuideH2 id="included">Che cosa contiene</GuideH2>
      <GuideUl>
        <li><GuideCode>tikzposter</GuideCode> A0 verticale a 25 pt</li>
        <li>Barra del titolo con titolo, autori e istituto</li>
        <li>Riquadri Abstract e Bibliografia a tutta larghezza</li>
        <li>Corpo a due colonne: Introduzione, Metodi, Risultati e Conclusioni</li>
      </GuideUl>

      <GuideH2 id="how-to-use">Come si usa</GuideH2>
      <GuideOl>
        <li>
          Fai clic su <em>Open as Template</em> per modificarlo in Octree, oppure su{" "}
          <em>View Source</em> e incolla il codice su Overleaf o in un file locale{" "}
          <GuideCode>poster.tex</GuideCode>.
        </li>
        <li>Compila con pdfLaTeX.</li>
        <li>
          Modifica <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode> e{" "}
          <GuideCode>\institute</GuideCode>, poi il testo all’interno di ogni{" "}
          <GuideCode>{"\\block{...}{...}"}</GuideCode>.
        </li>
        <li>
          Verifica il formato richiesto dal convegno e impostalo nelle opzioni della
          classe prima di aggiungere le figure.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Personalizzare il template</GuideH2>
      <GuideP>
        <strong>Scegli un tema.</strong> Una riga dopo{" "}
        <GuideCode>\documentclass</GuideCode> cambia lo stile della barra del titolo
        e di tutti i riquadri:
      </GuideP>
      <GuidePre>{`\\documentclass[25pt,a0paper,portrait]{tikzposter}
\\usetheme{Rays}
\\usecolorstyle{Denmark}`}</GuidePre>
      <GuideP>
        <strong>Aggiungi una figura a un riquadro.</strong> Carica{" "}
        <GuideCode>graphicx</GuideCode> nel preambolo e usa l’ambiente{" "}
        <GuideCode>tikzfigure</GuideCode> di tikzposter, che aggiunge una didascalia
        numerata; le larghezze sono relative al riquadro tramite{" "}
        <GuideCode>\linewidth</GuideCode>:
      </GuideP>
      <GuidePre>{`\\block{Results}{
  Key findings and data visualization.
  \\begin{tikzfigure}[Accuracy on the test set]
    \\includegraphics[width=0.9\\linewidth]{results}
  \\end{tikzfigure}
}`}</GuidePre>
      <GuideP>
        <strong>Colonne di larghezza diversa.</strong> Le colonne non devono essere
        per forza uguali; per una colonna dei risultati più ampia usa{" "}
        <GuideCode>{"\\column{0.4}"}</GuideCode> e{" "}
        <GuideCode>{"\\column{0.6}"}</GuideCode>.
      </GuideP>

      <GuideP>
        Template correlati: <GuideLink href="/templates/conference-poster">poster per convegni (beamerposter)</GuideLink>,{" "}
        <GuideLink href="/templates/beamer-presentation">presentazione Beamer</GuideLink> e{" "}
        <GuideLink href="/templates/research-paper">articolo di ricerca</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Domande frequenti sul template per poster scientifici</GuideH2>
      <GuideFaq items={faq} inLanguage="it" />
    </article>
  );
}
