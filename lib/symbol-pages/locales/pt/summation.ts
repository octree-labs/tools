import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/summation/<slug>. */
const text: SymbolPageTranslations = {
  "summation": {
    name: "Somatório",
    meaning: "Operador de somatório com sigma maiúsculo, que soma os termos de uma sequência.",
    usage: "Os limites vêm com _ e ^: \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}. Em modo de exibição, os limites ficam centralizados embaixo e em cima de um sigma ampliado, enquanto no texto corrido ficam ao lado e o sinal permanece pequeno; \\limits e \\nolimits mudam esse comportamento. Use \\sum, e não \\Sigma, que é apenas a letra grega e não cresce nem empilha limites. Para condições de várias linhas sob o sinal, \\substack{0 \\le i \\le m \\\\ 0 < j < n} as empilha de forma organizada. Uma soma só com subscrito, \\sum_i, é comum em física e em aprendizado de máquina quando o intervalo é óbvio.",
  },
  "summation-to-infinity": {
    name: "Somatório até o infinito",
    meaning: "Soma indexada de n = 0 até o infinito, a forma usada em séries de potências.",
    usage: "Começar em zero é natural para séries de potências e de Taylor: e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} e a série geométrica \\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r} para |r| < 1. Confira com cuidado o índice inicial, pois passar de n = 0 para n = 1 elimina o primeiro termo e muda a forma fechada. Em modo de exibição os limites ficam empilhados; no texto corrido vão para o lado do sigma. Quando o limite superior é infinito, \\sum_{n \\ge 0} é uma alternativa compacta. Funções geradoras de uma sequência a_n escrevem-se da mesma forma, \\sum_{n=0}^{\\infty} a_n x^n.",
  },
  "product": {
    name: "Produtório",
    meaning: "Operador de produtório com pi maiúsculo, que multiplica os termos de uma sequência.",
    usage: "Os limites funcionam como em \\sum: n! = \\prod_{k=1}^{n} k e, em estatística, a verossimilhança L(\\theta) = \\prod_{i=1}^{n} f(x_i \\mid \\theta). Ele é maior que a letra \\Pi e posiciona os limites em cima e embaixo no estilo de exibição, então não o substitua pela letra grega. Tomar logaritmos transforma um produto em soma, \\log\\prod_i a_i = \\sum_i \\log a_i, um passo de quase toda dedução de máxima verossimilhança. Produtos cartesianos de conjuntos, \\prod_{i \\in I} X_i, usam o mesmo comando. Seu equivalente de cabeça para baixo, \\coprod, denota coprodutos.",
  },
  "coproduct": {
    name: "Coproduto",
    meaning: "Sinal de produtório invertido que denota o coproduto, como uma união disjunta de conjuntos.",
    usage: "A teoria das categorias e a topologia algébrica usam \\coprod_{i \\in I} X_i para o coproduto de uma família: união disjunta para conjuntos e espaços, soma direta para grupos abelianos ou módulos. É um operador grande como \\prod, então os limites se empilham embaixo e em cima no estilo de exibição. Não o confunda com \\amalg, seu equivalente binário pequeno para exatamente dois objetos, X \\amalg Y. Uniões disjuntas também se escrevem \\bigsqcup, que tem forma de taça quadrada; escolha o que sua área usa. A construção dual, o produto categórico, usa \\prod.",
  },
  "big-union-with-index": {
    name: "Grande união indexada",
    meaning: "Grande união sobre uma família indexada de conjuntos, de A_1 até A_n.",
    usage: "Uniões finitas e enumeráveis, \\bigcup_{i=1}^{n} A_i ou \\bigcup_{n=1}^{\\infty} A_n, aparecem na teoria da medida para a aditividade enumerável, na cota da união em probabilidade e em topologia para coberturas abertas. \\bigcup é o operador grande; \\cup é a versão binária para dois conjuntos, A \\cup B. Os limites se empilham embaixo e em cima em modo de exibição e vão para o lado no texto corrido. Os conjuntos de índices não precisam ser numéricos: \\bigcup_{\\alpha \\in \\Lambda} U_\\alpha é comum para coberturas arbitrárias. Para uma união de conjuntos dois a dois disjuntos, passe para \\bigsqcup ou declare a disjunção por extenso.",
  },
  "big-intersection-with-index": {
    name: "Grande interseção indexada",
    meaning: "Grande interseção sobre uma família indexada de conjuntos, de A_1 até A_n.",
    usage: "Interseções de famílias indexadas enunciam resultados como a propriedade dos intervalos encaixados, \\bigcap_{n=1}^{\\infty} [a_n, b_n] \\neq \\varnothing, ou definem a sigma-álgebra gerada por uma coleção como a interseção de todas as que a contêm. Use \\bigcap para famílias e \\cap para dois conjuntos, A \\cap B. A lei de De Morgan liga os dois operadores grandes: \\left(\\bigcup_i A_i\\right)^c = \\bigcap_i A_i^c. No estilo de exibição os índices ficam embaixo e em cima; no texto corrido, acrescente \\limits só se necessário. Uma interseção sobre uma família de índices vazia só faz sentido em relação a um conjunto ambiente, então diga qual é.",
  },
  "big-wedge": {
    name: "Grande conjunção",
    meaning: "Operador grande em forma de cunha para a conjunção de muitas proposições ou para uma potência exterior.",
    usage: "Em lógica, \\bigwedge_{i=1}^{n} \\varphi_i é a conjunção de n fórmulas, a forma n-ária de \\wedge (também \\land); a forma normal conjuntiva é um \\bigwedge de cláusulas. Em teoria dos reticulados, denota o ínfimo de um conjunto, e em geometria diferencial \\bigwedge^k V é a k-ésima potência exterior de um espaço vetorial. Os limites se comportam como os de \\sum: empilhados em exibição, ao lado do sinal no texto corrido. Não o confunda com \\Lambda, a maiúscula grega, que alguns autores usam em tamanho normal para potências exteriores. Seu operador dual é \\bigvee.",
  },
  "big-vee": {
    name: "Grande disjunção",
    meaning: "Operador grande em forma de V para a disjunção de muitas proposições ou para o supremo num reticulado.",
    usage: "A lógica usa \\bigvee_{i=1}^{n} \\varphi_i para uma disjunção de n termos, generalizando \\vee (também \\lor); a forma normal disjuntiva é literalmente um \\bigvee de termos \\bigwedge. Em teoria da ordem e reticulados, \\bigvee S é o supremo de um conjunto S. Como operador grande, seus limites se empilham em modo de exibição e vão para o lado no texto corrido. Evite usar a letra V ou um \\vee com subscrito em seu lugar, pois continuam pequenos e não posicionam limites. Em topologia algébrica, \\bigvee_{i} S^1 denota uma soma em cunha de círculos, colando espaços pontuados em seus pontos base.",
  },
  "big-direct-sum": {
    name: "Grande soma direta",
    meaning: "Grande mais circulado, a soma direta de uma família de espaços ou módulos.",
    usage: "Um operador diagonalizável decompõe seu espaço em autoespaços, V = \\bigoplus_{\\lambda} E_\\lambda, e anéis graduados aparecem como \\bigoplus_{n \\ge 0} R_n. \\oplus é a forma binária para duas parcelas, U \\oplus W. Em ciência da computação e criptografia, \\bigoplus_{i} x_i costuma significar o XOR de muitos bits, reaproveitando o mesmo glifo. Os limites se empilham no estilo de exibição como em \\sum. Note que a soma direta de infinitos módulos difere do produto direto \\prod, que admite infinitas componentes não nulas, então escolha o operador que corresponde à sua construção.",
  },
  "big-tensor-product": {
    name: "Grande produto tensorial",
    meaning: "Grande vezes circulado, o produto tensorial de uma família de espaços ou operadores.",
    usage: "A computação quântica escreve o espaço de estados de n qubits como \\bigotimes_{i=1}^{n} \\mathbb{C}^2, e a álgebra multilinear constrói a álgebra tensorial T(V) = \\bigoplus_k V^{\\otimes k}. A forma binária \\otimes une dois fatores, A \\otimes B, que também denota o produto de Kronecker de matrizes. Como operador grande, \\bigotimes recebe limites empilhados em modo de exibição. Mantenha a forma com expoente V^{\\otimes n} para potências tensoriais repetidas de um único espaço; é mais compacta que um operador grande com limites. Indique o anel ou corpo de base quando não for óbvio, como em \\otimes_R.",
  },
  "big-circle-dot": {
    name: "Grande ponto circulado",
    meaning: "Grande ponto circulado, usado para um produto n-ário elemento a elemento ou simétrico.",
    usage: "\\bigodot é a versão de operador grande de \\odot. Em aprendizado de máquina, \\odot é o produto de Hadamard, elemento a elemento, então \\bigodot_{i=1}^{n} \\mathbf{v}_i pode denotar o produto elemento a elemento de muitos vetores; artigos sobre decomposição tensorial usam \\odot para o produto de Khatri-Rao, e alguns textos de álgebra o usam para potências simétricas. Como o significado varia conforme a área, defina-o na seção de notação. Os limites se empilham como os de \\sum no estilo de exibição. Não o confunda com \\bigcirc, que é um grande círculo vazio com espaçamento de operador binário, e não um operador grande.",
  },
  "big-square-union": {
    name: "Grande união quadrada",
    meaning: "Grande taça quadrada, que denota a união disjunta de uma família indexada de conjuntos.",
    usage: "Escrever X = \\bigsqcup_{i \\in I} X_i indica ao mesmo tempo uma união e que as partes são duas a duas disjuntas, convenção comum em topologia, teoria da medida e teoria das categorias. A forma binária é \\sqcup, como em A \\sqcup B. \\coprod é uma alternativa que alguns autores preferem para a mesma construção categórica, enquanto \\bigcup sozinho não diz nada sobre disjunção. Em teoria dos domínios e semântica denotacional, \\bigsqcup denota, em vez disso, o supremo de um conjunto dirigido. Como operador grande, seus limites se empilham em modo de exibição e ficam ao lado no texto corrido.",
  },
  "double-sum": {
    name: "Somatório duplo",
    meaning: "Dois somatórios aninhados, sobre i de 1 a m e j de 1 a n, como ao somar as entradas de uma matriz.",
    usage: "Somatórios duplos somam todas as entradas de um arranjo m por n, como na norma de Frobenius \\lVert A \\rVert_F^2 = \\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{ij}^2. O LaTeX coloca os dois operadores lado a lado com espaçamento adequado, então não é preciso espaço manual entre eles. Quando os dois índices compartilham uma condição, um único sinal como \\sum_{i,j} ou \\sum_{1 \\le i < j \\le n} é mais compacto, e \\substack empilha várias condições sob um único sigma. Trocar a ordem de somatórios duplos finitos é sempre válido, mas os infinitos exigem convergência absoluta ou termos não negativos.",
  },
  "indexed-sum": {
    name: "Somatório sobre um conjunto de índices",
    meaning: "Soma sobre cada elemento k de um conjunto K, e não sobre um intervalo numérico.",
    usage: "Somas indexadas por conjuntos são naturais quando o conjunto de índices não é um intervalo: somas sobre primos \\sum_{p \\le x}, sobre divisores \\sum_{d \\mid n} ou sobre vértices no lema do aperto de mãos \\sum_{v \\in V} \\deg v = 2|E|. Fazem sentido para qualquer conjunto finito e, para os infinitos, quando a série converge absolutamente, pois nenhuma ordem está implícita. Para várias condições, use \\substack, como em \\sum_{\\substack{k \\in K \\\\ k \\ne 0}}. Em modo de exibição a condição fica centralizada sob o sigma, então mantenha-a curta para evitar um vão largo em torno do operador.",
  },
};

export default text;
