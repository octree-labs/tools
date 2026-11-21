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
    question: "Quale classe di documento usa questo template per articoli di ricerca?",
    answer:
      "IEEEtran con l’opzione conference, la classe LaTeX di IEEE. Produce l’impaginazione a due colonne delle conferenze IEEE con font in stile Times, i comandi IEEE per il blocco degli autori e i titoli delle sezioni in stile IEEE. La classe fa parte di TeX Live, quindi non servono file aggiuntivi.",
  },
  {
    question: "Come aggiungo una figura larga quanto la colonna?",
    answer:
      "La figura d’esempio ha soltanto la didascalia. Aggiungi \\includegraphics[width=\\columnwidth]{results} prima di \\caption all’interno dell’ambiente figure; graphicx è già caricato. Per una figura che occupa entrambe le colonne usa figure* con width=\\textwidth.",
  },
  {
    question: "Come si citano le fonti in questo template?",
    answer:
      "Scrivi \\cite{ref1} nel testo; il pacchetto cite ordina e comprime le citazioni numeriche, per esempio [1]-[3]. La bibliografia è un elenco thebibliography alla fine del file. Per usare invece un file .bib, sostituisci quell’elenco con \\bibliographystyle{IEEEtran} e \\bibliography{refs} ed esegui BibTeX.",
  },
  {
    question: "Posso usare questo template per articoli di ricerca su Overleaf?",
    answer:
      "Sì. IEEEtran, amsmath, amssymb, graphicx e cite sono tutti inclusi in TeX Live, quindi si compila con pdfLaTeX su Overleaf, in Octree o in un’installazione locale. Prima di sottomettere a una sede specifica, controlla le istruzioni per gli autori: alcune conferenze IEEE forniscono i propri file di template.",
  },
];

export default function ResearchPaperGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Un template LaTeX per articoli di ricerca (stile IEEE)</GuideH2>
      <GuideP>
        Questo template LaTeX per articoli di ricerca è un punto di partenza breve e
        pulito per un articolo scientifico o di ingegneria nel formato a due colonne
        delle conferenze IEEE. È costruito su <GuideCode>IEEEtran</GuideCode>, la
        classe di documento di IEEE, caricata con l’opzione{" "}
        <GuideCode>conference</GuideCode>, quindi blocco del titolo, impaginazione
        delle colonne, font e stili dei titoli corrispondono a quelli usati dalle
        conferenze IEEE. È adatto a un elaborato per un corso, a una sottomissione
        per un workshop o a una prima bozza da trasferire poi nel kit ufficiale di
        una sede di pubblicazione.
      </GuideP>
      <GuideP>
        L’articolo d’esempio contiene le sezioni che servono a quasi ogni articolo
        di ricerca: un titolo e un blocco degli autori IEEE (nome, dipartimento,
        università ed email), un abstract, poi Introduzione, Lavori correlati,
        Metodologia, Risultati e Conclusioni, e una bibliografia numerata. La
        sezione Risultati contiene una <GuideCode>figure</GuideCode> segnaposto con
        didascalia dove va il tuo grafico. Oltre alla classe, il preambolo carica{" "}
        <GuideCode>amsmath</GuideCode> e <GuideCode>amssymb</GuideCode> per le
        equazioni, <GuideCode>graphicx</GuideCode> per le figure e{" "}
        <GuideCode>cite</GuideCode> per le citazioni numeriche compresse. Tutto è
        incluso in TeX Live, quindi funziona come template per articoli di ricerca
        su Overleaf, in Octree o con un’installazione locale. Il sorgente è
        volutamente essenziale; per un esempio IEEE più completo, con più autori,
        equazioni, tabelle e parole chiave, guarda il template per articoli da
        conferenza IEEE.
      </GuideP>

      <GuideH2 id="included">Che cosa contiene</GuideH2>
      <GuideUl>
        <li>Impaginazione a due colonne per conferenze con <GuideCode>IEEEtran</GuideCode></li>
        <li>Blocco degli autori IEEE per nome, affiliazione ed email</li>
        <li>Abstract e cinque sezioni standard</li>
        <li>Una figura segnaposto e una bibliografia <GuideCode>thebibliography</GuideCode></li>
        <li><GuideCode>amsmath</GuideCode>, <GuideCode>amssymb</GuideCode>, <GuideCode>graphicx</GuideCode> e <GuideCode>cite</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">Come si usa</GuideH2>
      <GuideOl>
        <li>
          Fai clic su <em>Open as Template</em> per modificarlo in Octree, oppure su{" "}
          <em>View Source</em> e incolla il codice su Overleaf o in un file locale{" "}
          <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>Compila con pdfLaTeX, due volte quando inizi a citare le fonti.</li>
        <li>
          Modifica <GuideCode>\title</GuideCode> e la coppia{" "}
          <GuideCode>\IEEEauthorblockN</GuideCode>/<GuideCode>\IEEEauthorblockA</GuideCode>{" "}
          in <GuideCode>\author</GuideCode>.
        </li>
        <li>Sostituisci i segnaposto tra parentesi quadre di ogni sezione con i tuoi contenuti.</li>
      </GuideOl>

      <GuideH2 id="customise">Personalizzare il template</GuideH2>
      <GuideP>
        <strong>Aggiungi coautori.</strong> Ripeti il blocco dell’autore e separa i
        blocchi con <GuideCode>\and</GuideCode>; IEEEtran li affianca:
      </GuideP>
      <GuidePre>{`\\author{\\IEEEauthorblockN{First Author}
\\IEEEauthorblockA{Department\\\\University Name\\\\first@university.edu}
\\and
\\IEEEauthorblockN{Second Author}
\\IEEEauthorblockA{Department\\\\University Name\\\\second@university.edu}}`}</GuidePre>
      <GuideP>
        <strong>Inserisci una figura vera nei Risultati.</strong> Dimensionala sulla
        larghezza della colonna:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
\\centering
\\includegraphics[width=\\columnwidth]{results}
\\caption{Results visualization}
\\label{fig:results}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Passa a BibTeX.</strong> Sostituisci il blocco{" "}
        <GuideCode>thebibliography</GuideCode> con{" "}
        <GuideCode>{"\\bibliographystyle{IEEEtran}"}</GuideCode> e{" "}
        <GuideCode>{"\\bibliography{refs}"}</GuideCode>, metti le tue voci in{" "}
        <GuideCode>refs.bib</GuideCode> e compila con pdfLaTeX, BibTeX e poi due
        volte pdfLaTeX (oppure <GuideCode>latexmk -pdf paper.tex</GuideCode>).
      </GuideP>

      <GuideP>
        Template correlati: <GuideLink href="/templates/ieee-conference">articolo per conferenze IEEE</GuideLink>,{" "}
        <GuideLink href="/templates/journal-article">articolo per rivista</GuideLink> e{" "}
        <GuideLink href="/templates/article-template">articolo</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Domande frequenti sul template per articoli di ricerca</GuideH2>
      <GuideFaq items={faq} inLanguage="it" />
    </article>
  );
}
