import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/logic/<slug>. */
const text: SymbolPageTranslations = {
  "not-exists": {
    name: "Quantificador existencial negado",
    meaning: "Quantificador existencial negado: não existe objeto com a propriedade enunciada.",
    usage: "\\nexists x \\in \\mathbb{Q} : x^2 = 2 afirma que 2 não tem raiz quadrada racional. O símbolo é um \\exists cortado, desenhado como um glifo único; \\not\\exists também funciona, mas o traço pode ficar mal posicionado. Logicamente equivale a \\forall x\\, \\neg P(x), e muitos lógicos preferem escrever \\neg \\exists x por clareza. Acrescente um pequeno espaço ou dois-pontos depois da variável ligada, como em \\nexists x \\, P(x). Para a existência única, o símbolo é \\exists!.",
  },
  "negation": {
    name: "Negação",
    meaning: "Sinal de negação lógica, um gancho em forma de L colocado antes de uma fórmula para significar “não”.",
    usage: "A lógica escreve \\neg p para “não p” e \\neg\\neg p \\equiv p na lógica clássica; \\lnot é um sinônimo exato. Alguns textos usam \\sim p, uma barra superior \\bar{p} ou p', sobretudo em álgebra booleana e em circuitos digitais. \\neg é um símbolo comum, então não aparece espaço entre ele e o operando, que é o efeito desejado. As leis de De Morgan, \\neg(p \\land q) \\equiv \\neg p \\lor \\neg q, são uma fórmula típica em destaque. Em contextos de programação, aparecem tanto ! quanto \\lnot.",
  },
  "logical-and": {
    name: "Conjunção lógica",
    meaning: "E lógico (conjunção), verdadeiro exatamente quando os dois operandos são verdadeiros.",
    usage: "\\land é um sinônimo de \\wedge, escolhido pela legibilidade em lógica, como em p \\land q ou \\forall x\\, (P(x) \\land Q(x)). Como o LaTeX o classifica como operador binário, o espaço em torno de p \\land q é colocado automaticamente; não acrescente \\, à mão. Para a conjunção de muitas fórmulas, use o operador grande \\bigwedge_{i=1}^{n} p_i. Em álgebra booleana, o E costuma ser escrito como multiplicação, pq ou p \\cdot q. Use \\land em lógica e \\wedge em álgebra exterior para que o código-fonte fique claro, embora os dois sejam impressos da mesma forma.",
  },
  "logical-or": {
    name: "Disjunção lógica",
    meaning: "Ou lógico (disjunção), verdadeiro quando pelo menos um dos operandos é verdadeiro.",
    usage: "\\lor é um sinônimo de \\vee, usado em lógica proposicional e de predicados: p \\lor \\neg p é a lei do terceiro excluído. O LaTeX o espaça como operador binário, então p \\lor q não precisa de comandos de espaçamento manuais. Para muitas disjunções, \\bigvee_{i} p_i é o operador grande. O ou exclusivo é outro símbolo: \\oplus ou \\veebar. A álgebra booleana e o projeto de circuitos costumam escrever o OU como +. Prefira \\lor em fórmulas lógicas e \\vee em teoria dos reticulados, para um código-fonte legível, embora os dois sejam impressos iguais.",
  },
  "proves": {
    name: "Símbolo de dedução (catraca)",
    meaning: "Catraca (turnstile), indicando que a fórmula da direita é derivável (demonstrável) a partir das hipóteses da esquerda.",
    usage: "A teoria da prova escreve \\Gamma \\vdash \\varphi para a consequência sintática, e a teoria de tipos o usa em julgamentos de tipagem \\Gamma \\vdash e : \\tau. Ele difere de \\models, que expressa a consequência semântica (verdade em todos os modelos); os teoremas de correção e completude dizem que as duas coincidem na lógica de primeira ordem. Negue-o com \\nvdash. \\vdash é uma relação, então o espaçamento é automático. Para regras de inferência, \\frac ou um pacote dedicado a árvores de prova produz o traço horizontal, com julgamentos contendo \\vdash acima e abaixo. O símbolo espelhado é \\dashv.",
  },
  "models": {
    name: "Consequência semântica (catraca dupla)",
    meaning: "Catraca dupla: consequência semântica ou satisfação, ou seja, verdadeiro em todo modelo.",
    usage: "\\mathcal{M} \\models \\varphi diz que a estrutura M satisfaz a fórmula \\varphi, e \\Gamma \\models \\varphi diz que todo modelo de \\Gamma satisfaz \\varphi. Contrasta com \\vdash, que é a demonstrabilidade sintática. Sua negação é \\not\\models ou o glifo dedicado \\nvDash. O semelhante \\vDash tem proporções um pouco diferentes e é usado em algumas lógicas junto com \\Vdash, para o forcing na teoria dos conjuntos. Como relação, recebe espaçamento dos dois lados. A verificação de modelos escreve s \\models \\phi para um estado que satisfaz uma fórmula temporal.",
  },
  "therefore": {
    name: "Sinal de “portanto”",
    meaning: "Três pontos em triângulo, lidos “portanto”, que introduzem uma conclusão.",
    usage: "\\therefore é comum na matemática escolar e em deduções informais: x + 2 = 5, \\therefore x = 3. Artigos formais costumam preferir palavras como “logo” ou a seta de implicação \\implies. É composto como relação, então o espaçamento entre expressões é automático. A versão de cabeça para baixo, \\because, significa “porque”. No texto, ainda precisa estar no modo matemático, por exemplo $\\therefore$, a menos que você carregue uma alternativa de símbolo para texto. Como seu significado é claro para a maioria dos leitores, funciona bem em slides e em soluções resolvidas com pouco espaço.",
  },
  "because": {
    name: "Sinal de “porque”",
    meaning: "Três pontos formando um triângulo invertido, lidos “porque” ou “já que”, que introduzem uma justificativa.",
    usage: "\\because introduz uma justificativa, em geral em soluções escolares passo a passo: \\angle A = \\angle B \\quad \\because AB = AC. É o espelho de \\therefore, com o ponto isolado embaixo. Textos formais costumam escrever “já que” por extenso ou usar uma anotação em texto como \\text{(pelo Lema 2)}. Como símbolo de relação, tem espaçamento dos dois lados, e um \\quad ou \\qquad antes dele separa a justificativa da equação. Use-o com moderação em artigos. Em demonstrações, escrever a justificativa em palavras costuma ser mais gentil com o leitor.",
  },
  "contradiction-falsum-bottom": {
    name: "Contradição (falsum)",
    meaning: "Símbolo de tachinha para cima (bottom): o falsum ou contradição em lógica, e o menor elemento de um reticulado.",
    usage: "A lógica usa \\bot para uma proposição sempre falsa, de modo que derivar \\bot prova a negação, e \\neg p pode ser definido como p \\to \\bot. A teoria de domínios e os reticulados usam \\bot para o elemento mínimo, e a teoria de tipos para o tipo vazio. \\bot é um símbolo comum; o mesmo glifo com espaçamento de relação é \\perp, que é o que você quer para a ortogonalidade entre dois objetos. Seu dual é \\top. Em demonstrações por absurdo, alguns autores escrevem \\bot ou \\Rightarrow\\Leftarrow ao final do passo contraditório.",
  },
  "tautology-verum-top": {
    name: "Tautologia (verum)",
    meaning: "Símbolo de tachinha para baixo (top): o verum, a proposição sempre verdadeira, e o maior elemento de um reticulado.",
    usage: "Em lógica, \\top é uma tautologia, o elemento neutro da conjunção (p \\land \\top \\equiv p). Os reticulados e a teoria de domínios o usam para o elemento máximo, e a teoria de tipos para o tipo unitário. Também é muito usado como sobrescrito para a transposta de uma matriz, A^\\top, como alternativa a A^T ou A^\\intercal. \\top é um símbolo comum. Não o confunda com a letra T, que fica na linha de base e tem outras proporções. Seu dual é \\bot.",
  },
  "not-equivalent": {
    name: "Sinal de não equivalência",
    meaning: "Barra tripla cortada: não côngruo módulo n, ou não identicamente igual.",
    usage: "A teoria dos números escreve a \\not\\equiv b \\pmod{n} quando n não divide a - b, por exemplo na hipótese do pequeno teorema de Fermat, a \\not\\equiv 0 \\pmod{p}. O prefixo \\not sobrepõe um traço à relação; coloque-o imediatamente antes de \\equiv. Em algumas fontes o traço parece um pouco descentralizado, mas não há glifo dedicado padrão nas fontes de símbolos comuns, então \\not\\equiv é a escolha habitual. Em lógica, significa “não logicamente equivalente”. Para a simples desigualdade, use \\neq.",
  },
};

export default text;
