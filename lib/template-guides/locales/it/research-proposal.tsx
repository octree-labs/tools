import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideH3,
  GuideLink,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "../../ui";

const faq: GuideFaqItem[] = [
  {
    question: "Quanto deve essere lunga una proposta di ricerca?",
    answer:
      "Un progetto di tesi magistrale o di dottorato occupa di solito da 5 a 15 pagine; una proposta per un bando di finanziamento ha la lunghezza che il bando prescrive, spesso da 2 a 5 pagine più il budget. L’esempio di questo template, in corpo 11pt con margini di un pollice, occupa tre pagine: una lunghezza ragionevole per un elaborato di corso o per una prima bozza da inviare al relatore. Se ti servono più pagine, amplia prima la rassegna della letteratura e la metodologia; le altre sezioni devono restare brevi.",
  },
  {
    question: "Che differenza c’è tra una proposta di ricerca e un progetto di tesi?",
    answer:
      "Il progetto di tesi è una proposta di ricerca rivolta a una commissione di dottorato o di laurea: deve dimostrare che il lavoro è realizzabile da un solo studente nel tempo disponibile e di solito aggiunge un indice provvisorio dei capitoli e un piano di supervisione. Una proposta per un finanziamento si rivolge invece a un ente finanziatore e aggiunge la giustificazione del budget, i risultati attesi (deliverable) e una dichiarazione d’impatto. Le sezioni centrali (contesto, domande, letteratura, metodi, cronoprogramma, bibliografia) sono le stesse, ed è per questo che il template funziona in entrambi i casi.",
  },
  {
    question: "Posso usare questo template per candidarmi a un dottorato?",
    answer:
      "Sì. Molti corsi di dottorato chiedono un progetto di 1.500-3.000 parole con la struttura usata qui. Sostituisci l’argomento d’esempio, formula le domande di ricerca in modo esplicito e fai in modo che il cronoprogramma copra l’intera durata del corso (tre o quattro anni invece di dodici mesi). Controlla le indicazioni del dipartimento per eventuali sezioni obbligatorie, come Fabbisogni formativi o Supervisione, e aggiungile con nuovi comandi \\section.",
  },
  {
    question: "Come si citano le fonti nella proposta di ricerca?",
    answer:
      "Il template carica natbib con l’opzione round, quindi \\citet{key} produce Cepeda et al. (2006) e \\citep{key} produce (Cepeda et al., 2006). La bibliografia si trova in un ambiente thebibliography alla fine del file: ogni voce comincia con \\bibitem[Author(Year)]{key}, così natbib può costruire l’etichetta autore-anno. Se hai già un file .bib, elimina quell’ambiente, aggiungi \\bibliographystyle{plainnat} e \\bibliography{references} ed esegui BibTeX.",
  },
  {
    question: "Una proposta di ricerca deve contenere un budget?",
    answer:
      "Solo se chiedi dei fondi. Le proposte di finanziamento lo includono sempre, di solito come tabella con una breve giustificazione, e la sezione Budget del template ne mostra una versione compatta con booktabs. I progetti di tesi in genere lo omettono, a meno che lavoro sul campo, strumentazione o compensi ai partecipanti richiedano l’approvazione del dipartimento; in quel caso tieni la tabella ed elimina le righe che non ti servono.",
  },
];

export default function ResearchProposalGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Che cos’è una proposta di ricerca?</GuideH2>
      <GuideP>
        Una proposta di ricerca è un documento breve che argomenta a favore di uno
        studio prima che venga svolto: a quale domanda risponderai, perché è
        importante, che cosa si sa già, come condurrai il lavoro e quanto costerà
        in tempo e denaro. Relatori, commissioni e enti finanziatori la usano per
        decidere se il progetto vale la pena e se sei in grado di portarlo a
        termine. Questo template LaTeX gratuito per proposte di ricerca ti offre la
        struttura standard insieme a un esempio completo (un esperimento di
        ripetizione dilazionata con studenti di una seconda lingua), così puoi
        vedere come appare ogni sezione una volta finita prima di sostituirne il
        contenuto con il tuo.
      </GuideP>

      <GuideH2 id="format">Struttura della proposta di ricerca: cosa va in ogni sezione</GuideH2>
      <GuideP>
        Le sezioni seguono l’ordine adottato dalla maggior parte delle linee guida
        universitarie; se il bando di un ente finanziatore prescrive titoli propri,
        prevalgono quelli. Le lunghezze indicate valgono per una proposta da tre a
        dieci pagine; aumentale in proporzione per un progetto di tesi completo.
      </GuideP>
      <GuideTable
        headers={["Sezione", "Contenuto", "Lunghezza tipica"]}
        rows={[
          [
            "Frontespizio",
            "Un titolo specifico che nomini le variabili o il fenomeno studiato, il tuo nome, il relatore, il dipartimento e la data di consegna.",
            "Mezza pagina",
          ],
          [
            "Abstract",
            "Il problema, la lacuna, il metodo e il contributo atteso in un solo paragrafo.",
            "Da 100 a 200 parole",
          ],
          [
            "Introduzione e contesto",
            "Perché il tema è rilevante, i concetti chiave e la lacuna nelle conoscenze attuali, con due o tre citazioni.",
            "Da una a due pagine",
          ],
          [
            "Domande di ricerca e ipotesi",
            "Da due a quattro domande numerate, ciascuna con un’ipotesi verificabile o una risposta attesa.",
            "Mezza pagina",
          ],
          [
            "Rassegna della letteratura",
            "Che cosa hanno trovato gli studi precedenti, dove sono in disaccordo e che cosa nessuno ha ancora fatto.",
            "Da una a tre pagine",
          ],
          [
            "Metodologia",
            "Disegno dello studio, partecipanti o dati, materiali, procedura e piano di analisi, con dettaglio sufficiente a valutarne la fattibilità.",
            "Da una a tre pagine",
          ],
          [
            "Cronoprogramma",
            "Una tabella o un diagramma di Gantt delle fasi per mesi o trimestri; il template lo colloca alla fine della Metodologia.",
            "Un quarto di pagina",
          ],
          [
            "Risultati attesi e rilevanza",
            "Che cosa ti aspetti di trovare e chi ne trae beneficio: la disciplina, i professionisti, le politiche pubbliche.",
            "Mezza pagina",
          ],
          [
            "Budget",
            "Costi voce per voce con il totale; solo per le proposte di finanziamento.",
            "Un quarto di pagina",
          ],
          [
            "Bibliografia",
            "Tutte le fonti citate, nello stile richiesto dal dipartimento o dall’ente finanziatore.",
            "Secondo necessità",
          ],
        ]}
      />

      <GuideH2 id="thesis-vs-grant">Progetto di tesi o proposta di finanziamento</GuideH2>
      <GuideP>
        Lo stesso template serve per entrambi, ma cambia l’enfasi. Per un progetto
        di tesi, amplia la rassegna della letteratura e la metodologia, estendi il
        cronoprogramma all’intera durata del corso di studi, aggiungi un indice
        provvisorio dei capitoli ed elimina il budget, a meno che il dipartimento
        non lo richieda. Per una domanda di finanziamento, mantieni il contesto
        sintetico, aggiungi la giustificazione del budget e l’elenco dei
        deliverable, e rispetta alla lettera il limite di pagine e i titoli delle
        sezioni indicati dall’ente. Se lo scopo del documento è ottenere fondi,
        parti piuttosto dal{" "}
        <GuideLink href="/templates/grant-proposal">template per proposte di finanziamento</GuideLink>,
        organizzato attorno agli obiettivi specifici e alla relazione sul budget;
        se stai già scrivendo la tesi, il{" "}
        <GuideLink href="/templates/thesis">template per la tesi</GuideLink> riprende
        da dove questa proposta si ferma.
      </GuideP>

      <GuideH2 id="customise">Come personalizzare il template per la proposta di ricerca</GuideH2>
      <GuideH3>Frontespizio e relatore</GuideH3>
      <GuideP>
        Candidato, relatore e dipartimento si trovano nel comando{" "}
        <GuideCode>\author</GuideCode>. Mantieni le righe con{" "}
        <GuideCode>\normalsize</GuideCode> perché l’affiliazione resti più piccola
        del tuo nome e, al momento della consegna, sostituisci il contenuto di{" "}
        <GuideCode>\date</GuideCode> con una data fissa.
      </GuideP>
      <GuidePre>{`\\author{Your Name \\\\[4pt]
  \\normalsize Supervisor: Dr.\\ Supervisor Name \\\\
  \\normalsize Department of Linguistics, University Name \\\\
  \\normalsize \\texttt{your.email@university.edu}}
\\date{Submitted: 15 March 2026}`}</GuidePre>

      <GuideH3>Tabella del cronoprogramma</GuideH3>
      <GuideP>
        Il cronoprogramma è una tabella <GuideCode>booktabs</GuideCode> con una
        colonna per trimestre e un quadratino pieno (
        <GuideCode>$\blacksquare$</GuideCode> di{" "}
        <GuideCode>amssymb</GuideCode>) in ogni cella attiva. Per un progetto più
        breve aggiungi una colonna per mese, oppure una riga per ciascun pacchetto
        di lavoro. Per un dottorato triennale usa come colonne gli anni o i
        semestri.
      </GuideP>
      <GuidePre>{`\\begin{tabular}{c >{\\raggedright\\arraybackslash}p{6.4cm} c c c c}
  \\toprule
  Phase & Activity & Y1 & Y2 & Y3 & Y4 \\\\
  \\midrule
  1 & Literature review and ethics approval & $\\blacksquare$ & & & \\\\
  2 & Data collection & & $\\blacksquare$ & $\\blacksquare$ & \\\\
  3 & Analysis and writing up & & & $\\blacksquare$ & $\\blacksquare$ \\\\
  \\bottomrule
\\end{tabular}`}</GuidePre>

      <GuideH3>Citazioni e bibliografia</GuideH3>
      <GuideUl>
        <li>
          <GuideCode>{"\\citet{key}"}</GuideCode> per una citazione inserita nella
          frase (Nakata (2015) ha osservato...), <GuideCode>{"\\citep{key}"}</GuideCode>{" "}
          per una citazione tra parentesi.
        </li>
        <li>
          Ogni <GuideCode>\bibitem</GuideCode> porta un’etichetta{" "}
          <GuideCode>[Author(Year)]</GuideCode>, così natbib compone le citazioni
          autore-anno senza BibTeX; il file si compila con un passaggio di
          pdflatex più un secondo per i riferimenti incrociati.
        </li>
        <li>
          Per passare a un file <GuideCode>.bib</GuideCode>, sostituisci
          l’ambiente <GuideCode>thebibliography</GuideCode> con{" "}
          <GuideCode>{"\\bibliographystyle{plainnat}"}</GuideCode> e{" "}
          <GuideCode>{"\\bibliography{references}"}</GuideCode>, oppure usa lo
          stile APA con il pacchetto <GuideCode>apacite</GuideCode> se il tuo
          dipartimento lo richiede.
        </li>
      </GuideUl>

      <GuideH2 id="faq">Domande frequenti sul template per la proposta di ricerca</GuideH2>
      <GuideFaq items={faq} inLanguage="it" />
    </article>
  );
}
