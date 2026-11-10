import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/modal-logic/<slug>. */
const text: SymbolPageTranslations = {
  "possibly": {
    name: "Operador de possibilidade",
    meaning: "Operador de possibilidade: \\Diamond p se lê \"possivelmente p\" e é verdadeiro em um mundo se p vale em algum mundo acessível.",
    usage: "É o dual da necessidade, \\Diamond p \\leftrightarrow \\neg\\Box\\neg p, e no sistema T temos p \\to \\Diamond p. A lógica temporal o lê como \"em algum momento\", e a lógica dinâmica escreve \\langle a \\rangle p para a mesma ideia. \\Diamond é um símbolo comum grande; \\diamond é um operador binário pequeno e \\lozenge um losango estreito, então não os troque. O TeX trata \\Diamond como símbolo comum, de modo que \\Diamond p sai sem espaço; acrescente \\, apenas se o seu estilo editorial pedir espaço.",
  },
  "not-necessary": {
    name: "Negação da necessidade",
    meaning: "Necessidade negada: \\neg\\Box p diz que p não é necessário, o que equivale a \\Diamond\\neg p.",
    usage: "A dualidade \\neg\\Box p \\leftrightarrow \\Diamond\\neg p permite empurrar negações para dentro, a contrapartida modal das leis de De Morgan para quantificadores. Semanticamente, vale em um mundo quando algum mundo acessível torna p falso. \\neg é um símbolo comum, então \\neg\\Box p sai compacto; se preferir, escreva \\lnot, que é um sinônimo. Não existe um comando único padrão para uma caixa riscada, e um glifo combinado confundiria os leitores, então mantenha a forma com dois símbolos. Em leituras epistêmicas, \\neg K_a p diz que o agente não sabe p, o que é mais fraco do que saber \\neg p.",
  },
  "not-possible": {
    name: "Impossibilidade",
    meaning: "Possibilidade negada: \\neg\\Diamond p diz que p é impossível, o que equivale a \\Box\\neg p.",
    usage: "A impossibilidade é a necessidade da negação, \\neg\\Diamond p \\leftrightarrow \\Box\\neg p, e vale em um mundo quando nenhum mundo acessível satisfaz p. Uma contradição é impossível em toda lógica modal normal, \\neg\\Diamond\\bot. Leituras epistêmicas dizem que um agente considera p descartado. O comando \\neg pode ser substituído por \\lnot com resultado idêntico. Evite improvisar um losango cortado com \\not\\Diamond, que foi feito para relações e posiciona mal o traço. Levar a negação para dentro, \\Diamond\\neg p, significa outra coisa: p poderia falhar.",
  },
  "necessary-implication": {
    name: "Implicação necessária",
    meaning: "Implicação necessitada: \\Box(p \\to q) diz que, em todo mundo acessível, p implica q (implicação estrita).",
    usage: "Este é o antecedente do axioma de distribuição K, \\Box(p \\to q) \\to (\\Box p \\to \\Box q), que toda lógica modal normal inclui. C. I. Lewis introduziu a implicação estrita exatamente como essa fórmula, por isso \\Box(p \\to q) costuma ser lido como \"p implica estritamente q\". \\to e \\rightarrow dão a mesma seta; \\implies é uma seta longa com espaço extra, mais adequada ao raciocínio no metanível do que aos conectivos da linguagem-objeto. Os parênteses são obrigatórios, já que \\Box liga mais forte que \\to. A regra de necessitação permite derivar \\Box(p \\to q) de qualquer teorema p \\to q.",
  },
  "possible-conjunction": {
    name: "Conjunção possível",
    meaning: "Conjunção possível: \\Diamond(p \\land q) diz que existe um mundo acessível em que p e q valem ao mesmo tempo.",
    usage: "Ela implica \\Diamond p \\land \\Diamond q, mas não o contrário, pois p e q podem ser possíveis em mundos diferentes; essa assimetria é um ponto clássico de prova. Seu dual é \\Box(\\neg p \\lor \\neg q). \\land e \\wedge produzem o mesmo símbolo; \\land se lê melhor em artigos de lógica. Mantenha os parênteses, porque \\Diamond p \\land q é analisado como (\\Diamond p) \\land q. Em termos de Kripke, um único mundo testemunha precisa satisfazer as duas conjunções de uma vez. Por exemplo, é possível chover e é possível não chover, mas chover e não chover ao mesmo tempo não é.",
  },
  "knows": {
    name: "Operador de conhecimento",
    meaning: "Operador epistêmico de conhecimento: K_a p se lê \"o agente a sabe que p\".",
    usage: "A lógica epistêmica costuma modelar o conhecimento com S5: o axioma da verdade K_a p \\to p, a introspecção positiva K_a p \\to K_a K_a p e a introspecção negativa. Semanticamente, K_a p vale quando p é verdadeiro em todo mundo que o agente a não consegue distinguir do mundo real. O dual \\hat{K}_a p ou M_a p significa que a considera p possível. Use um K reto, \\mathsf{K}_a ou \\mathrm{K}_a, se o K itálico conflitar com a lógica chamada K, e escreva nomes de agentes com várias letras como \\text{Alice} no índice.",
  },
  "believes": {
    name: "Operador de crença",
    meaning: "Operador de crença: B_a p se lê \"o agente a acredita que p\", o que, ao contrário do conhecimento, pode ser falso.",
    usage: "A lógica doxástica costuma usar KD45: a consistência B_a p \\to \\neg B_a\\neg p e os dois axiomas de introspecção, mas sem o axioma da verdade, de modo que B_a p \\to p falha. A ligação entre conhecimento e crença, K_a p \\to B_a p, é um princípio-ponte comum. Artigos sobre revisão de crenças escrevem B_a(p \\mid q) para crença condicional. Assim como com K_a, considere um \\mathsf{B} reto se o B itálico for usado para outra coisa, e não o confunda com a caixa \\Box, que é o operador genérico de necessidade.",
  },
  "common-knowledge": {
    name: "Conhecimento comum",
    meaning: "Conhecimento comum no grupo G: todos sabem p, todos sabem que todos sabem p, e assim por diante, sem fim.",
    usage: "Com E_G p significando que todos em G sabem p, o conhecimento comum é a conjunção infinita E_G p \\land E_G E_G p \\land \\cdots, e satisfaz o axioma de ponto fixo C_G p \\leftrightarrow E_G(p \\land C_G p). Os enigmas das crianças enlameadas e do ataque coordenado giram em torno da diferença entre E_G e C_G. O conhecimento distribuído se escreve D_G p. G é um conjunto de agentes, então escreva-o como uma letra maiúscula em itálico e defina-o explicitamente.",
  },
  "always-temporal-box": {
    name: "Sempre (caixa temporal)",
    meaning: "O \"sempre\" temporal: \\Box p diz que p vale agora e em todo instante futuro da execução.",
    usage: "Na lógica temporal linear, \\Box costuma ser escrito G (globalmente), e propriedades de segurança têm a forma \\Box\\neg\\mathit{bad}. É dual de \"em algum momento\", \\Box p \\leftrightarrow \\neg\\Diamond\\neg p, e \\Box\\Diamond p expressa que p acontece infinitas vezes. A mesma caixa é a necessidade na lógica modal alética, então indique qual leitura se aplica. \\Box e \\square dão quadrados quase idênticos; \\Box é o operador modal convencional, e o espaço antes de p não é acrescentado automaticamente. A CTL o prefixa com um quantificador de caminhos, como em AG p.",
  },
  "eventually-temporal-diamond": {
    name: "Em algum momento (losango temporal)",
    meaning: "O \"em algum momento\" temporal: \\Diamond p diz que p vale em algum instante presente ou futuro.",
    usage: "A lógica temporal linear também o escreve F p (futuro), e ele pode ser definido a partir do \"até\" como \\Diamond p \\equiv \\top\\,\\mathcal{U}\\,p. Propriedades de vivacidade costumam ter essa forma, como \\Box(\\mathit{req} \\to \\Diamond\\mathit{grant}). \\Diamond\\Box p significa que p passa a valer para sempre a partir de algum momento. Na lógica modal alética o mesmo losango significa \"possivelmente\", então explicite a leitura temporal. Use \\Diamond, não \\diamond, que é um operador binário menor. Na lógica de árvore de computação ele é prefixado por um quantificador de caminhos, como em AF p ou EF p.",
  },
  "until": {
    name: "Operador até",
    meaning: "Operador \"até\" da lógica temporal: p \\mathcal{U} q vale se q vale em algum momento e p vale em todos os instantes anteriores.",
    usage: "O \"até\" forte exige que q ocorra; o \"até\" fraco p \\mathcal{W} q também permite p para sempre. O \"em algum momento\" é derivado como \\Diamond q \\equiv \\top \\mathcal{U} q. Escrito sem mais nada, \\mathcal{U} é um símbolo comum, então p\\mathcal{U}q sai sem espaço em torno do U; envolva-o como p \\mathbin{\\mathcal{U}} q para obter o espaçamento de operador binário, ou defina \\newcommand{\\until}{\\mathbin{\\mathcal{U}}}. Muitos artigos de LTL usam um U reto, \\mathbin{\\mathsf{U}}, em vez da letra caligráfica. Lógicas com passado acrescentam o \"desde\", sua imagem espelhada voltada para trás.",
  },
  "next": {
    name: "Operador próximo",
    meaning: "Operador de próximo instante da lógica temporal: \\bigcirc p diz que p vale no estado imediatamente seguinte.",
    usage: "É o único operador da LTL ligado a passos de tempo discretos, e também se escreve X p. A lei de expansão p \\mathcal{U} q \\leftrightarrow q \\lor (p \\land \\bigcirc(p \\mathcal{U} q)) o usa para desdobrar o \"até\" um passo de cada vez. \\bigcirc é um círculo grande, do tamanho de \\Box e \\Diamond, e por isso combina visualmente com eles; \\circ é um pequeno operador de composição e está errado aqui. Alguns artigos preferem \\mathsf{X} por clareza em especificações com muito texto.",
  },
  "accessibility": {
    name: "Relação de acessibilidade",
    meaning: "Relação de acessibilidade na semântica de Kripke: w R v significa que o mundo v é acessível (considerado possível) a partir do mundo w.",
    usage: "As propriedades de R correspondem a axiomas modais: reflexiva dá T (\\Box p \\to p), transitiva dá 4 (\\Box p \\to \\Box\\Box p), e uma relação de equivalência dá S5. A verdade de \\Box p em w exige p em todo v com wRv. Digitado como w R v, o TeX trata R como uma letra comum e os espaços somem, produzindo wRv; use w \\mathrel{R} v para o espaçamento de relação, ou defina uma macro. Alguns autores escrevem R(w, v) ou w \\to v.",
  },
  "kripke-model": {
    name: "Modelo de Kripke",
    meaning: "Satisfação em um modelo de Kripke: a fórmula p é verdadeira no mundo w do modelo \\mathcal{M}.",
    usage: "Um modelo de Kripke \\mathcal{M} = (W, R, V) tem mundos, uma relação de acessibilidade e uma valoração, e a verdade é definida mundo a mundo; por exemplo, \\mathcal{M}, w \\models \\Box p se e somente se p vale em todos os R-sucessores. \\models é uma relação com o espaçamento correto; \\vDash dá um glifo de duplo torniquete parecido, e suas negações são \\not\\models ou \\nvDash. Não use \\vdash, que significa derivabilidade, e não verdade. Quando o modelo está fixo, os autores abreviam para w \\models p ou w \\Vdash p.",
  },
  "possible-world": {
    name: "Mundo possível",
    meaning: "Um mundo possível: um ponto de um quadro de Kripke em que as fórmulas são avaliadas como verdadeiras ou falsas.",
    usage: "Os mundos são tomados de um conjunto W, e um quadro é o par (W, R) com uma relação de acessibilidade. Dependendo da lógica, um mundo pode representar o estado de um programa, um instante no tempo ou uma alternativa epistêmica. Por convenção, usam-se w, v, u minúsculos para mundos e w_0 para o mundo real. Como um w itálico isolado é muito comum, introduza-o explicitamente e prefira w \\in W na primeira fórmula para fixar a leitura.",
  },
  "deontic-ought": {
    name: "Obrigação deôntica",
    meaning: "Obrigação deôntica: O p se lê \"deve ser o caso que p\" ou \"p é obrigatório\".",
    usage: "A lógica deôntica padrão é a lógica modal normal KD, com o axioma D, O p \\to P p, que diz que as obrigações são consistentes, enquanto o axioma da verdade O p \\to p falha de propósito. Enigmas de deveres contrários, como o paradoxo de Chisholm, mostram seus limites e motivam a obrigação diádica O(p \\mid q). No modo matemático, O p sai como Op sem espaço, então escreva O\\,p ou use um \\mathbf{O} ou \\mathsf{O} reto para que não seja lido como a notação O grande.",
  },
  "deontic-permitted": {
    name: "Permissão deôntica",
    meaning: "Permissão deôntica: P p se lê \"p é permitido\", o dual da obrigação.",
    usage: "A permissão é definida como P p \\leftrightarrow \\neg O\\neg p, e a proibição como F p \\leftrightarrow O\\neg p. Na lógica deôntica padrão, toda obrigação é permitida, O p \\to P p. A permissão de livre escolha, em que P(p \\lor q) deveria implicar P p, é um enigma conhecido que o sistema padrão não valida. Um P itálico colide com a notação de probabilidade, por isso muitos autores usam \\mathsf{P} ou \\mathbf{P}; acrescente \\, depois dele para separar o operador da fórmula.",
  },
};

export default text;
