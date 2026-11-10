import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/modal-logic/<slug>. */
const text: SymbolPageTranslations = {
  "possibly": {
    name: "Operatore di possibilità",
    meaning: "Operatore di possibilità: \\Diamond p si legge \"possibilmente p\" ed è vero in un mondo se p vale in almeno un mondo accessibile.",
    usage: "È il duale della necessità, \\Diamond p \\leftrightarrow \\neg\\Box\\neg p, e nel sistema T vale p \\to \\Diamond p. La logica temporale lo legge come \"prima o poi\" e la logica dinamica scrive \\langle a \\rangle p per la stessa idea. \\Diamond è un simbolo ordinario grande; \\diamond è un piccolo operatore binario e \\lozenge una losanga stretta, quindi non scambiateli. TeX tratta \\Diamond come simbolo ordinario, quindi \\Diamond p viene composto senza spazio; aggiungete \\, solo se il vostro stile editoriale lo richiede.",
  },
  "not-necessary": {
    name: "Negazione della necessità",
    meaning: "Necessità negata: \\neg\\Box p afferma che p non è necessario, il che equivale a \\Diamond\\neg p.",
    usage: "La dualità \\neg\\Box p \\leftrightarrow \\Diamond\\neg p permette di spostare le negazioni verso l'interno, l'analogo modale delle leggi di De Morgan per i quantificatori. Dal punto di vista semantico vale in un mondo quando qualche mondo accessibile rende falso p. \\neg è un simbolo ordinario, quindi \\neg\\Box p viene composto in modo compatto; se preferite scrivete \\lnot, che è un alias. Per un quadrato barrato non esiste un comando singolo standard, e un glifo combinato confonderebbe i lettori, quindi mantenete la forma a due simboli. Nelle letture epistemiche, \\neg K_a p afferma che l'agente non sa p, il che è più debole di sapere \\neg p.",
  },
  "not-possible": {
    name: "Negazione della possibilità",
    meaning: "Possibilità negata: \\neg\\Diamond p afferma che p è impossibile, equivalente a \\Box\\neg p.",
    usage: "L'impossibilità è la necessità della negazione, \\neg\\Diamond p \\leftrightarrow \\Box\\neg p, e vale in un mondo quando nessun mondo accessibile soddisfa p. Una contraddizione è impossibile in ogni logica modale normale, \\neg\\Diamond\\bot. Nelle letture epistemiche significa che un agente considera p escluso. Il comando \\neg può essere sostituito da \\lnot con un risultato identico. Evitate di improvvisare un rombo barrato con \\not\\Diamond, pensato per le relazioni, che posiziona male la barra. Spostare la negazione all'interno, \\Diamond\\neg p, significa una cosa diversa: p potrebbe non valere.",
  },
  "necessary-implication": {
    name: "Implicazione necessaria",
    meaning: "Implicazione necessitata: \\Box(p \\to q) afferma che in ogni mondo accessibile p implica q (implicazione stretta).",
    usage: "È l'antecedente dell'assioma di distribuzione K, \\Box(p \\to q) \\to (\\Box p \\to \\Box q), incluso in ogni logica modale normale. C. I. Lewis introdusse l'implicazione stretta esattamente come questa formula, quindi \\Box(p \\to q) si legge spesso come \"p implica strettamente q\". \\to e \\rightarrow danno la stessa freccia; \\implies è una freccia lunga con spazio aggiuntivo, più adatta al ragionamento di metalivello che ai connettivi del linguaggio oggetto. Le parentesi sono obbligatorie, perché \\Box lega più strettamente di \\to. La regola di necessitazione permette di derivare \\Box(p \\to q) da qualsiasi teorema p \\to q.",
  },
  "possible-conjunction": {
    name: "Congiunzione possibile",
    meaning: "Congiunzione possibile: \\Diamond(p \\land q) afferma che esiste un mondo accessibile in cui valgono sia p sia q.",
    usage: "Implica \\Diamond p \\land \\Diamond q, ma non il contrario, perché p e q possono essere possibili in mondi diversi; questa asimmetria è un classico punto d'esame. Il suo duale è \\Box(\\neg p \\lor \\neg q). \\land e \\wedge producono lo stesso simbolo; \\land si legge meglio negli articoli di logica. Mantenete le parentesi, perché \\Diamond p \\land q viene interpretato come (\\Diamond p) \\land q. In termini di Kripke, un unico mondo testimone deve soddisfare contemporaneamente entrambi i congiunti. Per esempio, è possibile che piova ed è possibile che non piova, eppure non è possibile che piova e non piova insieme.",
  },
  "knows": {
    name: "Operatore di conoscenza",
    meaning: "Operatore epistemico di conoscenza: K_a p si legge \"l'agente a sa che p\".",
    usage: "La logica epistemica modella di solito la conoscenza con S5: l'assioma di verità K_a p \\to p, l'introspezione positiva K_a p \\to K_a K_a p e l'introspezione negativa. Dal punto di vista semantico K_a p vale quando p è vero in ogni mondo che l'agente a non sa distinguere da quello attuale. Il duale \\hat{K}_a p o M_a p significa che a considera p possibile. Usate una K dritta, \\mathsf{K}_a o \\mathrm{K}_a, se la K corsiva si confonde con la logica chiamata K, e scrivete i nomi di agenti di più lettere come \\text{Alice} nel pedice.",
  },
  "believes": {
    name: "Operatore di credenza",
    meaning: "Operatore di credenza: B_a p si legge \"l'agente a crede che p\", e a differenza della conoscenza può essere falso.",
    usage: "La logica doxastica usa tipicamente KD45: la coerenza B_a p \\to \\neg B_a\\neg p ed entrambi gli assiomi di introspezione, ma nessun assioma di verità, quindi B_a p \\to p non vale. Il legame tra conoscenza e credenza K_a p \\to B_a p è un comune principio ponte. Gli articoli sulla revisione delle credenze scrivono B_a(p \\mid q) per la credenza condizionata. Come per K_a, valutate una \\mathsf{B} dritta se la B corsiva è usata per altro, e non confondetela con il quadrato \\Box, che è l'operatore generico di necessità.",
  },
  "common-knowledge": {
    name: "Conoscenza comune",
    meaning: "Conoscenza comune nel gruppo G: tutti sanno p, tutti sanno che tutti sanno p, e così via all'infinito.",
    usage: "Se E_G p significa che tutti in G sanno p, la conoscenza comune è la congiunzione infinita E_G p \\land E_G E_G p \\land \\cdots, e soddisfa l'assioma di punto fisso C_G p \\leftrightarrow E_G(p \\land C_G p). Il problema dei bambini con la fronte sporca e quello dell'attacco coordinato si basano sulla differenza tra E_G e C_G. La conoscenza distribuita si scrive D_G p. G è un insieme di agenti, quindi scrivetelo come lettera maiuscola corsiva e definitelo esplicitamente.",
  },
  "always-temporal-box": {
    name: "Operatore temporale \"sempre\"",
    meaning: "\"Sempre\" temporale: \\Box p afferma che p vale ora e in ogni istante futuro dell'esecuzione.",
    usage: "Nella logica temporale lineare \\Box si scrive spesso G (globalmente), e le proprietà di safety hanno la forma \\Box\\neg\\mathit{bad}. È il duale di \"prima o poi\", \\Box p \\leftrightarrow \\neg\\Diamond\\neg p, e \\Box\\Diamond p esprime che p si verifica infinitamente spesso. Lo stesso quadrato indica la necessità nella logica modale aletica, quindi specificate quale lettura si applica. \\Box e \\square danno quadrati quasi identici; \\Box è l'operatore modale convenzionale e lo spazio prima di p non viene aggiunto automaticamente. CTL lo fa precedere da un quantificatore di cammino, come in AG p.",
  },
  "eventually-temporal-diamond": {
    name: "Operatore temporale \"prima o poi\"",
    meaning: "\"Prima o poi\" temporale: \\Diamond p afferma che p vale in qualche istante presente o futuro.",
    usage: "La logica temporale lineare lo scrive anche F p (futuro), e può essere definito a partire da until come \\Diamond p \\equiv \\top\\,\\mathcal{U}\\,p. Le proprietà di liveness hanno tipicamente questa forma, come \\Box(\\mathit{req} \\to \\Diamond\\mathit{grant}). \\Diamond\\Box p significa che p prima o poi vale per sempre. Nella logica modale aletica lo stesso rombo significa \"possibilmente\", quindi specificate la lettura temporale. Usate \\Diamond, non \\diamond, che è un operatore binario più piccolo. Nella logica ad albero di computazione è preceduto da un quantificatore di cammino, come in AF p o EF p.",
  },
  "until": {
    name: "Operatore until",
    meaning: "Operatore until della logica temporale: p \\mathcal{U} q vale se q prima o poi vale e p vale in ogni istante precedente.",
    usage: "L'until forte richiede che q si verifichi; l'until debole p \\mathcal{W} q ammette anche che p valga per sempre. \"Prima o poi\" si ricava come \\Diamond q \\equiv \\top \\mathcal{U} q. Scritto semplicemente, \\mathcal{U} è un simbolo ordinario, quindi p\\mathcal{U}q viene composto senza spazio attorno alla U; racchiudetelo come p \\mathbin{\\mathcal{U}} q per ottenere la spaziatura da operatore binario, oppure definite \\newcommand{\\until}{\\mathbin{\\mathcal{U}}}. Molti articoli di LTL usano invece una U in tondo, \\mathbin{\\mathsf{U}}, al posto della lettera calligrafica. Le logiche del passato aggiungono since, la sua immagine speculare rivolta all'indietro.",
  },
  "next": {
    name: "Operatore next",
    meaning: "Operatore di istante successivo della logica temporale: \\bigcirc p afferma che p vale nello stato immediatamente successivo.",
    usage: "È l'unico operatore LTL legato a passi di tempo discreti, e si scrive anche X p. La legge di espansione p \\mathcal{U} q \\leftrightarrow q \\lor (p \\land \\bigcirc(p \\mathcal{U} q)) lo usa per sviluppare until un passo alla volta. \\bigcirc è un cerchio grande dimensionato come \\Box e \\Diamond, quindi si accorda visivamente con essi; \\circ è un piccolo operatore di composizione ed è sbagliato in questo contesto. Alcuni articoli preferiscono \\mathsf{X} per chiarezza nelle specifiche ricche di testo semplice.",
  },
  "accessibility": {
    name: "Relazione di accessibilità",
    meaning: "Relazione di accessibilità nella semantica di Kripke: w R v significa che il mondo v è accessibile (considerato possibile) dal mondo w.",
    usage: "Le proprietà di R corrispondono agli assiomi modali: la riflessività dà T (\\Box p \\to p), la transitività dà 4 (\\Box p \\to \\Box\\Box p) e una relazione di equivalenza dà S5. La verità di \\Box p in w richiede p in ogni v con wRv. Scritto come w R v, TeX tratta R come una lettera ordinaria e gli spazi scompaiono, producendo wRv; usate w \\mathrel{R} v per la spaziatura da relazione, oppure definite una macro. Alcuni autori scrivono invece R(w, v) o w \\to v.",
  },
  "kripke-model": {
    name: "Modello di Kripke",
    meaning: "Soddisfacibilità in un modello di Kripke: la formula p è vera nel mondo w del modello \\mathcal{M}.",
    usage: "Un modello di Kripke \\mathcal{M} = (W, R, V) ha mondi, una relazione di accessibilità e una valutazione, e la verità è definita mondo per mondo, per esempio \\mathcal{M}, w \\models \\Box p se e solo se p vale in tutti gli R-successori. \\models è una relazione con la spaziatura corretta; \\vDash dà un glifo a doppio tornello simile, e le sue negazioni sono \\not\\models o \\nvDash. Non usate \\vdash, che indica la derivabilità e non la verità. Quando il modello è fissato, gli autori abbreviano in w \\models p o w \\Vdash p.",
  },
  "possible-world": {
    name: "Mondo possibile",
    meaning: "Un mondo possibile: un punto di un frame di Kripke in cui le formule vengono valutate come vere o false.",
    usage: "I mondi sono presi da un insieme W, e un frame è la coppia (W, R) con una relazione di accessibilità. A seconda della logica, un mondo può rappresentare uno stato di un programma, un istante di tempo o un'alternativa epistemica. Per convenzione si usano le minuscole w, v, u per i mondi e w_0 per quello attuale. Poiché una w corsiva isolata è molto comune, introducetela esplicitamente, e preferite w \\in W nella prima formula per fissarne la lettura.",
  },
  "deontic-ought": {
    name: "Obbligo deontico",
    meaning: "Obbligo deontico: O p si legge \"deve essere che p\" oppure \"p è obbligatorio\".",
    usage: "La logica deontica standard è la logica modale normale KD, con l'assioma D, O p \\to P p, che afferma che gli obblighi sono coerenti, mentre l'assioma di verità O p \\to p viene deliberatamente escluso. I rompicapi degli obblighi riparatori, come il paradosso di Chisholm, ne mostrano i limiti e motivano l'obbligo diadico O(p \\mid q). In modalità matematica O p viene composto come Op senza spazio, quindi scrivete O\\,p oppure usate una \\mathbf{O} o una \\mathsf{O} dritta, per evitare che venga letta come notazione O grande.",
  },
  "deontic-permitted": {
    name: "Permesso deontico",
    meaning: "Permesso deontico: P p si legge \"p è permesso\", il duale dell'obbligo.",
    usage: "Il permesso è definito come P p \\leftrightarrow \\neg O\\neg p, e il divieto come F p \\leftrightarrow O\\neg p. Nella logica deontica standard ogni obbligo è permesso, O p \\to P p. Il permesso di libera scelta, in cui P(p \\lor q) dovrebbe implicare P p, è un rompicapo noto che il sistema standard non convalida. Una P corsiva si scontra con la notazione della probabilità, quindi molti autori usano \\mathsf{P} o \\mathbf{P}; aggiungete \\, dopo di essa per separare l'operatore dalla formula.",
  },
};

export default text;
