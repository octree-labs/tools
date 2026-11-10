import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/set-theory/<slug>. */
const text: SymbolPageTranslations = {
  "empty-set-variant": {
    name: "Conjunto vazio (variante)",
    meaning: "Símbolo variante do conjunto vazio: um círculo redondo cortado por um traço diagonal, o conjunto sem elementos.",
    usage: "\\varnothing e \\emptyset significam a mesma coisa, o conjunto vazio, mas têm aparência diferente: na fonte Computer Modern, \\emptyset é um zero estreito e alto com um traço, enquanto \\varnothing é um círculo redondo com um traço, preferido por muitos matemáticos. Use um deles de forma consistente, por exemplo A \\cap B = \\varnothing para conjuntos disjuntos. Não é a letra grega \\phi nem \\varphi, nem a letra escandinava \\O, então evite usá-las como substitutas. Alguns autores redefinem \\emptyset como \\varnothing no preâmbulo para trocar todas as ocorrências de uma só vez.",
  },
  "contains": {
    name: "Pertinência invertida (contém)",
    meaning: "Relação de pertinência invertida: o conjunto à esquerda contém o elemento à direita.",
    usage: "A \\ni x diz o mesmo que x \\in A, com o conjunto primeiro, o que soa natural em expressões como uma vizinhança U \\ni x. Textos antigos e alguns lógicos também usavam \\ni para “tal que”, embora hoje \\mid ou dois-pontos sejam o padrão. \\owns é um atalho de \\ni. Negue-o com \\not\\ni. Não o confunda com a letra épsilon nem com um \\in virado à mão; \\ni é uma relação de verdade, com o espaçamento correspondente.",
  },
  "not-subset": {
    name: "Não inclusão (não é subconjunto)",
    meaning: "Sinal de subconjunto cortado: o conjunto da esquerda não é subconjunto do conjunto da direita.",
    usage: "\\not\\subset sobrepõe um traço a \\subset usando o prefixo genérico \\not. O resultado é aceitável, embora o traço às vezes fique descentralizado; os glifos dedicados \\nsubseteq (não é subconjunto nem igual) e \\nsubset, em alguns pacotes de símbolos, ficam melhores. Como o próprio \\subset é ambíguo entre inclusão própria e não estrita, \\nsubseteq costuma ser a negação mais clara. Exemplo: \\mathbb{Q} \\not\\subset \\mathbb{Z}, pois 1/2 é racional, mas não é inteiro. Mantenha \\not imediatamente antes da relação, sem espaço nem chaves, para que se combinem corretamente.",
    example: "\\mathbb{Q} \\not\\subset \\mathbb{Z} \\text{ pois } \\tfrac{1}{2} \\notin \\mathbb{Z}",
  },
  "big-union": {
    name: "União generalizada",
    meaning: "Operador grande de união para a união de uma família indexada de conjuntos, com limites acima e abaixo.",
    usage: "\\bigcup_{i=1}^{\\infty} A_i escreve uma união enumerável, e \\bigcup_{\\alpha \\in I} U_\\alpha uma união sobre um conjunto de índices, como em coberturas abertas. Ele se comporta como \\sum: os limites ficam abaixo e acima no estilo de destaque e ao lado em linha, e \\limits os força para baixo em linha. Não o use entre dois conjuntos; A \\cup B usa o \\cup binário. Operadores grandes relacionados incluem \\bigcap, \\bigsqcup para uniões disjuntas e \\biguplus para a união de multiconjuntos. As leis de De Morgan o combinam com \\bigcap e com complementares.",
  },
  "big-intersection": {
    name: "Interseção generalizada",
    meaning: "Operador grande de interseção para intersectar uma família indexada de conjuntos.",
    usage: "\\bigcap_{n=1}^{\\infty} (0, 1/n) = \\varnothing é um exemplo clássico, e a topologia escreve \\bigcap_{\\alpha} F_\\alpha para interseções de fechados. Como os outros operadores grandes, seus limites ficam abaixo e acima no modo de destaque e ao lado em linha, e ele aumenta de tamanho no estilo de destaque. Para dois conjuntos, use o \\cap binário. Intervalos encaixados, o conjunto de Cantor \\bigcap_n C_n e a definição da sigma-álgebra gerada como a interseção de todas as sigma-álgebras que contêm a família usam esse símbolo.",
  },
  "complement": {
    name: "Complementar",
    meaning: "Símbolo de complementar, em geral sobrescrito a um conjunto para denotar todos os elementos fora dele.",
    usage: "A^\\complement denota o complementar de A em relação a um universo, de modo que A \\cup A^\\complement = U. É um símbolo comum que parece um C estilizado. Alternativas frequentes são A^c, A' e \\overline{A}, mas a barra pode ser confundida com o fecho topológico e a linha com derivadas, então \\complement não deixa ambiguidade. Escreva-o como sobrescrito; sozinho, ele raramente aparece. A lei de De Morgan, (A \\cup B)^\\complement = A^\\complement \\cap B^\\complement, é um uso clássico.",
  },
  "natural-numbers": {
    name: "Números naturais",
    meaning: "N em negrito de quadro-negro, o símbolo padrão do conjunto dos números naturais 1, 2, 3 e assim por diante.",
    usage: "Se \\mathbb{N} inclui ou não o 0 varia: a lógica e a computação costumam começar em 0, enquanto a teoria dos números frequentemente começa em 1, então declare a sua convenção ou escreva \\mathbb{N}_0 ou \\mathbb{Z}_{\\ge 0} e \\mathbb{Z}_{>0}. O comando \\mathbb, na fonte padrão de negrito de quadro-negro, cobre apenas letras maiúsculas, então \\mathbb{1} ou letras minúsculas não saem como esperado sem outro pacote de fontes. Muitos autores definem \\newcommand{\\N}{\\mathbb{N}} por brevidade. Sequências costumam ser escritas (a_n)_{n \\in \\mathbb{N}}. Demonstrações por indução normalmente começam com “para todo n \\in \\mathbb{N}”.",
  },
  "integers": {
    name: "Números inteiros",
    meaning: "Z em negrito de quadro-negro, o conjunto de todos os inteiros: positivos, negativos e o zero.",
    usage: "O Z vem do alemão Zahlen. Construções comuns incluem o grupo cíclico \\mathbb{Z}/n\\mathbb{Z}, os inteiros p-ádicos \\mathbb{Z}_p (cuidado: alguns autores usam \\mathbb{Z}_n para o grupo cíclico), o reticulado \\mathbb{Z}^n e \\mathbb{Z}[i] para os inteiros gaussianos. Subconjuntos são escritos com subscritos, como \\mathbb{Z}_{\\ge 0}. \\mathbb só funciona com letras maiúsculas nas fontes padrão. Evite imitá-lo com o negrito \\mathbf{Z}, a antiga convenção impressa. Em teoria dos anéis, \\mathbb{Z} é o anel inicial, e todo grupo abeliano é um \\mathbb{Z}-módulo.",
  },
  "rational-numbers": {
    name: "Números racionais",
    meaning: "Q em negrito de quadro-negro, o corpo dos números racionais (frações de inteiros).",
    usage: "Q vem de quociente. Aparece em extensões de corpos como \\mathbb{Q}(\\sqrt{2}), em afirmações de densidade como a de que \\mathbb{Q} é denso em \\mathbb{R} e na teoria algébrica dos números com \\overline{\\mathbb{Q}} para os números algébricos. Os números p-ádicos são escritos \\mathbb{Q}_p. Os racionais positivos são \\mathbb{Q}_{>0} ou \\mathbb{Q}^+. Como \\mathbb só cobre letras maiúsculas, aqui não há problema. Definir \\newcommand{\\Q}{\\mathbb{Q}} economiza digitação em documentos com muita álgebra. Seu fecho algébrico é enumerável, enquanto seu completamento em relação ao valor absoluto usual dá \\mathbb{R}. Pontos racionais em curvas são escritos C(\\mathbb{Q}).",
  },
  "real-numbers": {
    name: "Números reais",
    meaning: "R em negrito de quadro-negro, o conjunto dos números reais que formam a reta numérica contínua.",
    usage: "\\mathbb{R}^n é o espaço euclidiano, f : \\mathbb{R} \\to \\mathbb{R} uma função real, e \\mathbb{R}_{\\ge 0} ou \\mathbb{R}_+ os reais não negativos (as convenções divergem sobre se \\mathbb{R}^+ inclui o 0). Espaços de matrizes são escritos \\mathbb{R}^{m \\times n}. A reta estendida é \\overline{\\mathbb{R}} ou [-\\infty, \\infty]. Evite \\Re, que imprime um R em fraktur para a parte real de um número complexo, e não o conjunto dos reais. Muitos autores definem uma macro curta \\R. Sua completude, o fato de todo conjunto limitado ter supremo, é o que o separa de \\mathbb{Q}.",
  },
  "complex-numbers": {
    name: "Números complexos",
    meaning: "C em negrito de quadro-negro, o corpo dos números complexos da forma a + bi, com a e b reais.",
    usage: "A análise complexa trabalha com funções f : \\mathbb{C} \\to \\mathbb{C}, a álgebra linear com \\mathbb{C}^n e matrizes hermitianas em \\mathbb{C}^{n \\times n}, e a geometria algébrica com anéis de polinômios \\mathbb{C}[x]. O plano furado é \\mathbb{C} \\setminus \\{0\\} ou \\mathbb{C}^\\times, e a esfera de Riemann é \\hat{\\mathbb{C}} ou \\mathbb{C} \\cup \\{\\infty\\}. O teorema fundamental da álgebra diz que \\mathbb{C} é algebricamente fechado. Não use \\mathcal{C}, que em geral denota uma categoria ou uma classe de funções como C^\\infty. O espaço projetivo complexo é escrito \\mathbb{CP}^n ou \\mathbb{P}^n_\\mathbb{C}.",
  },
  "power-set": {
    name: "Conjunto das partes",
    meaning: "P caligráfico, a notação usual para o conjunto das partes (o conjunto de todos os subconjuntos) de um conjunto.",
    usage: "\\mathcal{P}(A) é o conjunto das partes, com |\\mathcal{P}(A)| = 2^{|A|} para A finito, e o teorema de Cantor diz que não existe sobrejeção A \\to \\mathcal{P}(A). Alguns autores usam \\wp, o p de Weierstrass, ou 2^A. \\mathcal{P} também é usado para medidas de probabilidade, partições ou a classe P da teoria da complexidade, então o contexto importa. O alfabeto caligráfico cobre apenas letras maiúsculas. Para um P mais cursivo, um comando de fonte script como \\mathscr, de um pacote adicional, é uma alternativa.",
  },
  "cardinality": {
    name: "Cardinalidade",
    meaning: "Barras verticais em torno de um conjunto, que dão sua cardinalidade: o número de elementos que ele contém.",
    usage: "Para conjuntos finitos, |A| conta os elementos, como na fórmula de inclusão-exclusão |A \\cup B| = |A| + |B| - |A \\cap B|; para conjuntos infinitos, é o número cardinal. A mesma notação significa valor absoluto para números e determinante para matrizes, então o contexto decide. Alternativas incluem \\#A e \\operatorname{card}(A). Para um espaçamento que distingue esquerda e direita, escreva \\lvert A \\rvert, e use \\left| ... \\right| em torno de conteúdos altos como \\mathcal{P}(\\mathbb{N}). Em combinatória, |A| = |B| para conjuntos finitos costuma ser demonstrado exibindo uma bijeção.",
  },
  "aleph": {
    name: "Álef",
    meaning: "Letra hebraica álef, usada para os números cardinais infinitos, a começar pelo infinito enumerável, álef-zero.",
    usage: "\\aleph_0 é a cardinalidade de \\mathbb{N}, \\aleph_1 o cardinal seguinte, e a hipótese do contínuo afirma 2^{\\aleph_0} = \\aleph_1. Escreva os subscritos como \\aleph_0, e não \\aleph0. Outras letras hebraicas disponíveis no modo matemático incluem \\beth, \\gimel e \\daleth, com os números bet \\beth_1 = 2^{\\aleph_0} medindo o contínuo. \\aleph é um símbolo comum. Não o confunda com \\alpha nem com o N dos números naturais. O argumento diagonal de Cantor mostra que os reais não são enumeráveis, então sua cardinalidade é estritamente maior que \\aleph_0.",
  },
};

export default text;
