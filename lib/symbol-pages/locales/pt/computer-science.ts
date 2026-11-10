import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/computer-science/<slug>. */
const text: SymbolPageTranslations = {
  "big-o": {
    name: "Notação O grande",
    meaning: "Limite superior assintótico: f(n) = O(n) significa que f não cresce mais rápido que um múltiplo constante de n para n grande.",
    usage: "O O grande é a ferramenta básica da análise de algoritmos: a busca linear roda em O(n), a ordenação por intercalação em O(n \\log n) e a multiplicação ingênua de matrizes em O(n^3). Em rigor, O(g) é um conjunto de funções, então f \\in O(g) é a forma precisa, embora f(n) = O(g(n)) seja a convenção quase universal. Alguns autores preferem um \\mathcal{O}(n) caligráfico para distinguir o operador de uma variável chamada O; escolha uma forma e mantenha-a em todo o artigo. Escreva o custo real dentro do argumento, como em O(n^2 \\log n), e não O(n^2) \\cdot \\log n, e lembre-se de que O só limita por cima, portanto não afirma que o limite é justo.",
  },
  "big-omega": {
    name: "Notação Ômega grande",
    meaning: "Limite inferior assintótico: f(n) = Ω(n) significa que f cresce pelo menos tão rápido quanto uma constante vezes n para n grande.",
    usage: "O ômega maiúsculo expressa limites inferiores, sendo o mais famoso o de que qualquer ordenação baseada em comparações precisa de \\Omega(n \\log n) comparações no pior caso. Ele é digitado com a maiúscula grega reta \\Omega; o amsmath também oferece \\varOmega, uma forma inclinada que alguns tipógrafos preferem para variáveis, mas que fica estranha como operador. Note que a teoria analítica dos números usa o sentido mais antigo de Hardy e Littlewood, em que \\Omega significa que a cota não é o(g), então verifique qual definição a fonte segue. Combine-o com O para delimitar um tempo de execução e passe para \\Theta quando os dois lados coincidirem.",
  },
  "big-theta": {
    name: "Notação Theta grande",
    meaning: "Limite assintótico justo: f(n) = Θ(n) significa que f é limitada por cima e por baixo por múltiplos constantes de n.",
    usage: "O Theta é a afirmação correta quando você demonstrou limites superior e inferior coincidentes: a busca binária é \\Theta(\\log n), e o caso intermediário do Teorema Mestre dá \\Theta(n^{\\log_b a} \\log n). Formalmente, f \\in \\Theta(g) exatamente quando f \\in O(g) e f \\in \\Omega(g). Muitos artigos escrevem O onde se quer dizer \\Theta; os revisores de conferências de teoria percebem, então use \\Theta quando a justeza for o ponto. O \\Theta maiúsculo é reto por padrão; não o confunda com o \\theta minúsculo, que em geral designa um ângulo ou um vetor de parâmetros, e evite \\vartheta, uma variante da letra minúscula.",
  },
  "little-o": {
    name: "Notação o pequeno",
    meaning: "Limite superior assintótico estrito: f(n) = o(n) significa que f(n)/n tende a 0 quando n cresce.",
    usage: "O o pequeno exprime que uma função é desprezível em relação a outra, como em \\log n = o(n) ou n = o(n^2). Ele é estritamente mais forte que o O grande: toda função o(g) é O(g), mas n é O(n) sem ser o(n). Os analistas o usam constantemente em expansões de Taylor, como \\sin x = x + o(x) quando x \\to 0, então indique sempre o ponto-limite quando não for o infinito. Como se trata apenas de uma letra o em itálico, não há comando especial; certifique-se de que os leitores não o confundam com um zero e mantenha-o minúsculo para não colidir com o O grande.",
    example: "\\log n = o(n) \\quad \\text{pois} \\quad \\lim_{n\\to\\infty} \\frac{\\log n}{n} = 0",
  },
  "little-omega": {
    name: "Notação ômega pequeno",
    meaning: "Limite inferior assintótico estrito: f(n) = ω(n) significa que f(n)/n cresce sem limite.",
    usage: "O ômega pequeno é a imagem espelhada do o pequeno: f = \\omega(g) exatamente quando g = o(f), de modo que n^2 = \\omega(n) e n \\log n = \\omega(n). Ele aparece com menos frequência que \\Omega, principalmente em demonstrações de limites inferiores e em algoritmos aleatorizados, quando uma quantidade precisa crescer estritamente mais rápido que linearmente. Use o ômega grego minúsculo \\omega, e não o w latino, que se parece com ele em algumas fontes. Atenção: o mesmo símbolo tem vários sentidos: em teoria dos grafos, \\omega(G) é o número de clique e, em teoria dos números, \\omega(n) conta os fatores primos distintos, então defina seu uso quando os contextos se misturarem.",
  },
  "modulo": {
    name: "Operador módulo",
    meaning: "Operador binário de módulo: compõe “mod” entre dois operandos, como em a mod n, com espaçamento de operador.",
    usage: "Use \\bmod para a operação de resto dentro de uma expressão, como em 17 \\bmod 5 = 2 ou na função de espalhamento h(k) = k \\bmod m. Ele produz mod reto com espaço médio dos dois lados, exatamente como um operador binário. Para congruências, use \\pmod: a \\equiv b \\pmod{n} imprime a forma entre parênteses com espaço extra antes. O amsmath também define \\mod{n}, que dá um espaço maior sem parênteses, e \\pod{n}, que mantém os parênteses mas omite a palavra. Digitar as letras mod sem comando as colocaria em itálico, como um produto de variáveis, então use sempre um desses comandos.",
  },
  "logarithm": {
    name: "Logaritmo",
    meaning: "Compõe o nome da função logaritmo em tipo romano reto, com o espaçamento correto antes do argumento.",
    usage: "O \\log é um dos nomes de função predefinidos do LaTeX, então imprime log reto e insere um espaço fino antes do argumento, ao contrário de digitar log, que coloca em itálico três variáveis. Acrescente uma base com um subíndice, como em \\log_2 n para logaritmos binários; na análise de algoritmos, um \\log sem subíndice costuma significar base 2, enquanto na matemática muitas vezes significa o logaritmo natural, então indique a convenção. O LaTeX também predefine \\lg para logaritmos na base 2 e \\ln para logaritmos naturais. Quando o argumento tiver mais de um símbolo, acrescente parênteses, por exemplo \\log(n+1), e use \\left( \\right) para argumentos altos.",
  },
  "natural-log": {
    name: "Logaritmo natural",
    meaning: "Imprime o nome do logaritmo natural, ln, em tipo reto e com espaçamento de operador.",
    usage: "O \\ln é o comando predefinido para o logaritmo na base e, que produz ln reto seguido do espaçamento adequado, assim como \\sin ou \\exp. Ele aparece em identidades do cálculo como \\frac{d}{dx}\\ln x = \\frac{1}{x}, na teoria da informação quando a entropia é medida em nats e nas log-verossimilhanças. Muitos matemáticos escrevem \\log para o logaritmo natural, enquanto engenheiros e cientistas da computação reservam \\ln para a base e e \\log para a base 10 ou 2, então escolha de forma consistente. Para um argumento como uma fração, envolva-o com \\left( e \\right) para que os parênteses se ajustem ao tamanho.",
  },
};

export default text;
