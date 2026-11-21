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
    question: "È il file di stile ufficiale di NeurIPS 2026?",
    answer:
      "No. È una bozza in stile NeurIPS costruita sulla classe standard article con il font Times, margini di un pollice e natbib, così si compila ovunque senza file aggiuntivi. Per la sottomissione a NeurIPS va usato il file di stile ufficiale incluso nello style kit indicato nella call for papers su neurips.cc. Dato che il corpo del testo usa gli stessi comandi (\\title, \\author, abstract, sezioni, \\bibliographystyle{plainnat}), il passaggio consiste soprattutto nel cambiare il preambolo.",
  },
  {
    question: "Il template NeurIPS funziona su Overleaf?",
    answer:
      "Sì. Si compila con pdfLaTeX, il compilatore predefinito di Overleaf, e usa soltanto pacchetti inclusi in TeX Live. Aggiungi un file references.bib accanto al file .tex, perché il template termina con \\bibliography{references}.",
  },
  {
    question: "Dove va la checklist del paper NeurIPS?",
    answer:
      "In questo template è una sezione dopo la bibliografia e dopo \\appendix, cioè dove la chiede NeurIPS. I sei punti presenti mostrano soltanto il formato delle risposte. Copia la checklist completa e aggiornata dallo style kit ufficiale di NeurIPS 2026 e rispondi a tutte le domande.",
  },
  {
    question: "Qual è il limite di pagine di NeurIPS 2026?",
    answer:
      "L’abstract d’esempio di questo template parla di nove pagine di contenuto principale, escluse bibliografia e checklist, in linea con le call degli ultimi anni. I limiti di pagine possono cambiare da un anno all’altro, quindi verifica il numero nella call for papers ufficiale di NeurIPS 2026 prima di sottomettere.",
  },
  {
    question: "Devo usare \\citep o \\citet?",
    answer:
      "Sono disponibili entrambi, perché è caricato natbib. \\citet{key} produce una citazione testuale (‘Smith et al. (2024)’) da usare come parte della frase, mentre \\citep{key} ne produce una tra parentesi. Lo stile bibliografico plainnat li supporta entrambi.",
  },
];

export default function Neurips2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Un template LaTeX per scrivere la bozza del paper NeurIPS 2026</GuideH2>
      <GuideP>
        Questo template NeurIPS ti fornisce un articolo di machine learning in stile
        NeurIPS che si compila subito su Overleaf, in Octree o in qualsiasi
        installazione di TeX Live. È un template per la stesura, non il file di
        stile ufficiale: usa la classe standard <GuideCode>article</GuideCode> in
        corpo 11 pt con il font <GuideCode>times</GuideCode>, margini di un pollice e
        nessun rientro di paragrafo, più i pacchetti che carica la maggior parte dei
        paper NeurIPS (<GuideCode>hyperref</GuideCode>,{" "}
        <GuideCode>booktabs</GuideCode>, <GuideCode>amsmath</GuideCode>,{" "}
        <GuideCode>nicefrac</GuideCode>, <GuideCode>microtype</GuideCode> e{" "}
        <GuideCode>natbib</GuideCode>).
      </GuideP>
      <GuideP>
        L’articolo d’esempio segue la struttura che i revisori si aspettano: titolo
        e blocco di un singolo autore con una nota <GuideCode>\thanks</GuideCode>,
        abstract, Introduzione, Lavori correlati, Metodo con un’equazione numerata,
        Esperimenti con una tabella dei risultati in{" "}
        <GuideCode>booktabs</GuideCode>, Conclusioni, una bibliografia{" "}
        <GuideCode>plainnat</GuideCode> e una sezione NeurIPS Paper Checklist dopo{" "}
        <GuideCode>\appendix</GuideCode>. Scrivi qui i tuoi contenuti e poi spostali
        nello style kit ufficiale di NeurIPS 2026, disponibile su{" "}
        <GuideLink href="https://neurips.cc" external>
          neurips.cc
        </GuideLink>
        , per il PDF da sottomettere: bastano pochi minuti, perché i comandi sono
        gli stessi. La versione dell’anno prossimo è il{" "}
        <GuideLink href="/templates/neurips-2027">template NeurIPS 2027</GuideLink>.
      </GuideP>

      <GuideH2 id="included">Che cosa contiene</GuideH2>
      <GuideUl>
        <li>Titolo, blocco dell’autore con affiliazione ed email, e una nota a piè di pagina per l’autore</li>
        <li>Abstract e cinque sezioni numerate</li>
        <li>Un’equazione in display con il grassetto da lavagna di <GuideCode>amsfonts</GuideCode></li>
        <li>Una tabella dei risultati con <GuideCode>\toprule</GuideCode>, <GuideCode>\midrule</GuideCode> e <GuideCode>\bottomrule</GuideCode></li>
        <li>natbib con lo stile <GuideCode>plainnat</GuideCode></li>
        <li>Una sezione NeurIPS Paper Checklist con sei risposte d’esempio</li>
      </GuideUl>

      <GuideH2 id="how-to-use">Come si usa</GuideH2>
      <GuideOl>
        <li>
          Fai clic su <em>Open as Template</em> per modificarlo in Octree, oppure su{" "}
          <em>View Source</em> e incolla il codice su Overleaf o in un file locale{" "}
          <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>
          Crea accanto un file <GuideCode>references.bib</GuideCode> con le tue voci
          BibTeX e citale con <GuideCode>\citet</GuideCode> o{" "}
          <GuideCode>\citep</GuideCode>.
        </li>
        <li>
          Compila con pdfLaTeX e BibTeX, per esempio con{" "}
          <GuideCode>latexmk -pdf paper.tex</GuideCode>. Non servono font Unicode,
          quindi XeLaTeX e LuaLaTeX qui non portano alcun vantaggio.
        </li>
        <li>
          Modifica <GuideCode>\title</GuideCode> e <GuideCode>\author</GuideCode>{" "}
          all’inizio del preambolo; per la versione anonima destinata alla revisione,
          sostituisci il blocco degli autori con{" "}
          <GuideCode>Anonymous Author(s)</GuideCode>.
        </li>
        <li>
          Prima di sottomettere, sposta il contenuto nel file di stile ufficiale e
          incolla la checklist completa presa dallo style kit ufficiale.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Personalizzare il template</GuideH2>
      <GuideP>
        <strong>Aggiungi altri autori.</strong> Il template ha un solo autore. Lo
        stile ufficiale separa i blocchi degli autori con{" "}
        <GuideCode>\And</GuideCode>; in questa bozza basata sulla classe article usa
        invece il comando standard <GuideCode>\and</GuideCode>:
      </GuideP>
      <GuidePre>{`\\author{
  First Author \\\\ University A \\\\ \\texttt{first@a.edu}
  \\and
  Second Author \\\\ Lab B \\\\ \\texttt{second@b.org}
}`}</GuidePre>
      <GuideP>
        <strong>Aggiungi una figura.</strong> <GuideCode>graphicx</GuideCode> è già
        caricato. Nei paper NeurIPS la didascalia delle figure va sotto la figura e
        quella delle tabelle sopra la tabella, come nella tabella d’esempio:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
  \\centering
  \\includegraphics[width=0.8\\linewidth]{example-image}
  \\caption{Training loss over time.}
  \\label{fig:loss}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Compila la checklist come si deve.</strong> Ogni punto richiede una
        risposta e una breve giustificazione. Mantieni il formato dei punti d’esempio
        e aggiungi la giustificazione sulla stessa riga:
      </GuideP>
      <GuidePre>{`\\item \\textbf{Limitations:} Did you describe the limitations of your work?
  \\textbf{[Yes]} Justification: see Section~5.`}</GuidePre>

      <GuideH2 id="comparison">Template per conferenze correlati</GuideH2>
      <GuideTable
        headers={["Template", "Impaginazione"]}
        rows={[
          [<strong key="n">NeurIPS 2026</strong>, "Una colonna, natbib, checklist"],
          [
            <GuideLink key="n7" href="/templates/neurips-2027">
              NeurIPS 2027
            </GuideLink>,
            "Una colonna, imitazione più fedele dell’impaginazione NeurIPS",
          ],
          [
            <GuideLink key="i" href="/templates/icml-2026">
              ICML 2026
            </GuideLink>,
            "Due colonne, ambiente algorithm",
          ],
          [
            <GuideLink key="l" href="/templates/iclr-2026">
              ICLR 2026
            </GuideLink>,
            "Una colonna, dichiarazione di riproducibilità",
          ],
        ]}
      />
      <GuideP>
        Per le date di sottomissione, consulta la{" "}
        <GuideLink href="/conference-deadlines">pagina delle scadenze delle conferenze</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Domande frequenti sul template NeurIPS</GuideH2>
      <GuideFaq items={faq} inLanguage="it" />
    </article>
  );
}
