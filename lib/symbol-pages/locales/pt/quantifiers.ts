import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/quantifiers/<slug>. */
const text: SymbolPageTranslations = {
  "unique-exists": {
    name: "Quantificador de existência única",
    meaning: "Existe exatamente um: o quantificador existencial seguido de um ponto de exclamação para exigir unicidade.",
    usage: "Enunciados de unicidade, como a existência de uma única solução para um problema de valor inicial ou de um único elemento neutro num grupo, são escritos \\exists! x. O ponto de exclamação é um símbolo de fechamento na matemática do TeX, então \\exists! x fica bem espaçado, embora alguns autores acrescentem \\, antes da variável por clareza. Formalmente, \\exists! x\\, P(x) abrevia \\exists x\\,(P(x) \\wedge \\forall y\\,(P(y) \\to y = x)). Evite \\exists_1, que alguns leitores interpretam como uma variável com subscrito. Na prosa, “existe um único” costuma ser mais legível que o símbolo.",
  },
  "for-all-x": {
    name: "Quantificador universal sobre x",
    meaning: "Quantificador universal aplicado a x, afirmando que o enunciado seguinte vale para todo valor de x.",
    usage: "As definições de continuidade, os axiomas de grupo e os princípios de indução começam todos com \\forall x. O símbolo \\forall é um átomo matemático comum, então o TeX não insere espaço depois da variável; acrescentar \\, ou dois-pontos, como em \\forall x\\, P(x) ou \\forall x : P(x), torna fórmulas longas muito mais legíveis. Alguns autores colocam o quantificador depois do enunciado, por extenso (“para todo x”), o que é mais suave na prosa. Não use \\forall em frases corridas como abreviação de “para todo”, a menos que seu público espere essa forma abreviada.",
  },
  "exists-x": {
    name: "Quantificador existencial sobre x",
    meaning: "Quantificador existencial que liga x, afirmando que pelo menos um valor de x torna o enunciado verdadeiro.",
    usage: "Usos típicos incluem a definição de limite (\\exists \\delta > 0), a sobrejetividade (\\forall y\\, \\exists x : f(x) = y) e as testemunhas em lógica. A ordem importa: \\forall y \\exists x é diferente de \\exists x \\forall y, então escreva as sequências de quantificadores com cuidado. Sua forma negada, \\nexists, existe como símbolo próprio para “não existe”. Assim como \\forall, \\exists não recebe espaço automático depois da variável ligada, então acrescente um espaço fino ou dois-pontos antes do predicado. Para a unicidade, acrescente um ponto de exclamação e obtenha \\exists!.",
  },
  "for-all-in-set": {
    name: "Quantificador universal limitado",
    meaning: "Quantificador universal limitado: o enunciado deve valer para todo elemento x do conjunto A.",
    usage: "Restringir o quantificador a um conjunto, como em \\forall x \\in A, é uma abreviação de \\forall x\\,(x \\in A \\to P(x)) e é como a maioria dos matemáticos de fato escreve. \\in tem espaçamento de relação, então a expressão se espaça sozinha; basta separá-la do predicado com vírgula, dois-pontos ou \\; para facilitar a leitura. Com várias variáveis, você pode escrever \\forall x, y \\in A em vez de repetir o quantificador. Não confunda \\in com \\epsilon nem com \\varepsilon, que parecem semelhantes em algumas fontes, mas são letras, e não a relação de pertinência.",
  },
  "exists-in-set": {
    name: "Quantificador existencial limitado",
    meaning: "Quantificador existencial limitado: algum elemento x pertencente a A satisfaz a condição que vem a seguir.",
    usage: "Essa forma compacta substitui \\exists x\\,(x \\in A \\wedge P(x)) e aparece o tempo todo em análise, por exemplo na densidade dos racionais: entre dois reais quaisquer, \\exists q \\in \\mathbb{Q}. A negação de \\exists x \\in A\\, P(x) é \\forall x \\in A\\, \\neg P(x), regra que vale ter em mente ao negar definições. Use \\nexists x \\in A para “nenhum elemento de A”. Coloque dois-pontos, “tal que” ou \\; antes do predicado, para que o leitor veja onde termina o quantificador.",
  },
  "such-that-colon": {
    name: "Dois-pontos de “tal que”",
    meaning: "Dois-pontos lidos “tal que” em enunciados quantificados e na notação de conjuntos por compreensão, separando a variável da sua condição.",
    usage: "No modo matemático, os dois-pontos simples são tratados como relação e recebem o mesmo espaço largo dos dois lados, o que convém a \\{x : x > 0\\} e a \\forall x : P(x). Para a assinatura de uma função, use \\colon, que tem espaçamento de pontuação: f\\colon A \\to B fica correto, enquanto f : A \\to B deixa um vão antes dos dois-pontos. Para definições, := formado por dois caracteres pode ficar desalinhado verticalmente; um símbolo de definição dedicado, de um pacote de extensão, resolve isso. Alguns autores preferem \\mid ou uma barra vertical na notação por compreensão; escolha uma opção e mantenha a consistência.",
  },
  "set-builder": {
    name: "Notação de conjunto por compreensão",
    meaning: "Notação de conjunto por compreensão: o conjunto de todos os x para os quais vale a propriedade P(x), escrito com chaves e um separador.",
    usage: "No modo matemático, as chaves precisam ser escapadas como \\{ e \\}; caso contrário, apenas agrupam e somem da saída. \\mid é uma relação, então recebe o espaço adequado dos dois lados, ao contrário de uma | simples, que é um símbolo comum e aperta as letras. Quando a condição contém frações ou material alto, dimensione tudo junto: \\left\\{ x \\;\\middle|\\; \\frac{x}{2} \\in \\mathbb{Z} \\right\\}. Os dois-pontos funcionam igualmente bem como separador e evitam confusão quando a própria condição contém valores absolutos.",
  },
  "quantified-statement": {
    name: "Enunciado com quantificadores aninhados",
    meaning: "Uma sentença com quantificadores aninhados: para todo x existe algum y que torna P(x, y) verdadeiro, podendo y depender de x.",
    usage: "Esse padrão está por trás das definições épsilon-delta e de enunciados como “todo inteiro tem um sucessor”. Trocar a ordem para \\exists y \\forall x produz uma afirmação muito mais forte, a de que um único y serve para todo x, e confundir as duas é um erro clássico em demonstrações. Os dois-pontos separam o prefixo de quantificadores da matriz da fórmula; se a sua convenção para os dois-pontos conflitar com a notação de funções em outro lugar, use um ponto ou colchetes. Para facilitar a leitura de prefixos mais longos, acrescente \\, entre os blocos de quantificadores, ou escreva cada um numa expressão própria: para todo x existe y.",
  },
};

export default text;
