import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/boolean/<slug>. */
const text: SymbolPageTranslations = {
  "nand": {
    name: "NAND (barra de Sheffer)",
    meaning: "Cunha com uma barra por cima, usada como o conectivo NAND (barra de Sheffer): verdadeiro, a menos que ambas as entradas sejam verdadeiras.",
    usage: "O NAND é funcionalmente completo, então toda função booleana pode ser construída apenas com p \\barwedge q, e os projetistas de circuitos digitais o usam exatamente por isso. Lógicos também escrevem a barra de Sheffer como uma barra vertical, p \\mid q, ou como p \\uparrow q, então declare sua notação uma vez. \\barwedge é um operador binário, com espaçamento médio de cada lado. Não o confunda com \\veebar, que tem a barra sob um “ou” e costuma denotar o ou exclusivo, nem com \\doublebarwedge, que traz duas barras. Sua tabela-verdade é o complemento da de \\wedge.",
  },
  "nor-operator-bar-over-vee": {
    name: "Operador NOR (barra sobre o “ou”)",
    meaning: "Um “ou” com um acento de barra em cima, montado à mão para representar o NOR (seta de Peirce): verdadeiro apenas quando ambas as entradas são falsas.",
    usage: "Não há um comando único padrão para o glifo do NOR nas fontes matemáticas comuns, então \\bar{\\vee} o simula colocando um acento sobre o símbolo de disjunção. Um efeito colateral: um símbolo acentuado vira um átomo comum e perde o espaçamento de operador binário que \\vee tinha; escreva \\mathbin{\\bar{\\vee}} para restaurá-lo, de preferência dentro de um \\newcommand. A notação alternativa p \\downarrow q (seta de Peirce) é amplamente compreendida e evita o problema. Não confunda com \\veebar, cuja barra fica sob o “ou” e normalmente significa XOR.",
  },
  "boolean-and": {
    name: "E booleano",
    meaning: "Ponto centralizado entre duas variáveis, a notação de engenharia para o E booleano (conjunção lógica).",
    usage: "A álgebra de comutação e a eletrônica digital escrevem a conjunção de forma multiplicativa: A \\cdot B, ou simplesmente AB, refletindo o fato de que o E se comporta como a multiplicação sobre 0 e 1. Na lógica formal, a mesma operação é escrita A \\wedge B ou A \\land B. \\cdot é um operador binário, então já recebe espaçamento médio; não use um ponto final, que no modo matemático se comporta como pontuação e fica na linha de base. Muitos livros omitem o ponto em expressões de soma de produtos como AB + \\overline{A}C, mantendo \\cdot apenas onde a justaposição seria ambígua, por exemplo entre nomes de sinais com várias letras.",
  },
  "boolean-or": {
    name: "OU booleano",
    meaning: "Sinal de mais usado como OU booleano na álgebra de comutação: a saída é 1 quando pelo menos uma entrada é 1.",
    usage: "Projetistas de circuitos escrevem a disjunção como A + B, de modo que formas de soma de produtos como AB + \\overline{A}C se leem com naturalidade. Cuidado com o significado aritmético: na álgebra booleana 1 + 1 = 1, enquanto no corpo com dois elementos o sinal de mais significa XOR e 1 + 1 = 0, razão pela qual o XOR costuma ter seu próprio símbolo, \\oplus. Lógicos escrevem o mesmo OU como A \\vee B ou A \\lor B. Nenhum comando especial é necessário; o + já tem espaçamento de operador binário, e em expressões longas é possível quebrar a linha antes de um + dentro de um ambiente multline.",
  },
  "boolean-not": {
    name: "NÃO booleano",
    meaning: "Barra traçada sobre toda a largura do argumento; indica o NÃO booleano em circuitos lógicos e o fecho de um conjunto em topologia.",
    usage: "Em lógica digital, \\overline{A} é o sinal invertido, e \\overline{A \\cdot B} traça uma única barra contínua sobre toda a expressão, que é a razão visual pela qual os engenheiros o preferem a um \\neg prefixado. Topólogos usam a mesma construção para o fecho de um conjunto. Comparado a \\bar{A}, um acento de largura fixa pensado para uma única letra, \\overline se estende para cobrir tudo o que está entre as chaves. Negações aninhadas como \\overline{\\overline{A}} se empilham de forma limpa. Para uma barra um pouco mais curta sobre letras isoladas, alguns autores preferem \\bar; qualquer um serve, desde que se mantenha a consistência.",
  },
  "complement": {
    name: "Complemento",
    meaning: "Uma linha após uma variável ou conjunto, notação compacta para o complemento ou a negação booleana de A.",
    usage: "Cursos de teoria dos conjuntos costumam escrever A' para o complemento U \\setminus A, e alguns livros de projeto lógico escrevem A' em vez de \\overline{A} porque cabe numa linha e é fácil de digitar. No modo matemático, o apóstrofo vira automaticamente um expoente \\prime, então A'' dá uma linha dupla com o espaçamento correto. O perigo é a ambiguidade: A' também denota derivadas, conjuntos derivados em topologia e espaços duais. Alternativas incluem A^c e A^{\\complement}. Qualquer que seja a escolha, defina-a uma vez perto do início do documento.",
  },
  "de-morgan": {
    name: "Lei de De Morgan",
    meaning: "A lei de De Morgan em notação booleana: o complemento de um E é igual ao OU dos complementos.",
    usage: "Essa identidade permite converter circuitos baseados em E em circuitos baseados em OU, e é a razão pela qual uma porta NAND equivale a uma porta OU com as entradas invertidas. Sua forma dual é \\overline{A + B} = \\overline{A} \\cdot \\overline{B}. O exemplo mostra por que \\overline importa: uma única barra longa sobre A \\cdot B difere visivelmente de barras separadas sobre cada letra, e essa distinção é todo o conteúdo da lei. Na notação de conjuntos, a mesma lei é (A \\cap B)^c = A^c \\cup B^c, e na lógica, \\neg(p \\wedge q) \\equiv \\neg p \\vee \\neg q.",
  },
};

export default text;
