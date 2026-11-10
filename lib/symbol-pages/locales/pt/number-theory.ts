import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/number-theory/<slug>. */
const text: SymbolPageTranslations = {
  "does-not-divide": {
    name: "Símbolo de não divisibilidade",
    meaning: "Barra vertical cortada que afirma que um inteiro não divide outro.",
    usage: "Em teoria dos números se escreve 3 \\nmid 10, e o símbolo aparece em hipóteses como a do pequeno teorema de Fermat: se p \\nmid a, então a^{p-1} \\equiv 1 \\pmod p. É a negação de \\mid e tem o mesmo espaçamento de relação; \\not\\mid produz um traço muitas vezes mal posicionado, então prefira \\nmid. Evite uma barra | comum com um traço digitado à mão. Na ciência da computação ele aparece em condições sobre passos, períodos e tamanhos de tabelas de dispersão, como k \\nmid n. Outras negações pré-compostas relacionadas são \\nparallel e \\nleq.",
  },
  "gcd": {
    name: "Máximo divisor comum",
    meaning: "Máximo divisor comum de a e b, o maior inteiro que divide ambos.",
    usage: "\\gcd é um operador predefinido, por isso sai em fonte reta e, assim como \\lim, aceita limites embaixo no modo display. A identidade de Bézout diz que \\gcd(a, b) = ax + by para certos inteiros x e y, e a e b são primos entre si quando \\gcd(a, b) = 1. Em textos em português também é comum escrever mdc(a, b) ou MDC(a, b). Muitos artigos de teoria dos números omitem o nome e escrevem (a, b), o que é compacto, mas conflita com pares ordenados e intervalos abertos. O algoritmo de Euclides se apoia em \\gcd(a, b) = \\gcd(b, a \\bmod b), em que \\bmod dá o espaçamento de operador binário. Não existe um comando embutido correspondente para o mínimo múltiplo comum.",
  },
  "lcm": {
    name: "Mínimo múltiplo comum",
    meaning: "Mínimo múltiplo comum de a e b, o menor inteiro positivo que ambos dividem.",
    usage: "Ao contrário de \\gcd, não existe um comando \\lcm embutido, e é por isso que esta entrada usa \\text. Uma linha no preâmbulo, \\DeclareMathOperator{\\lcm}{lcm}, cria um operador de verdade com o espaçamento adequado; no meio do texto, use \\operatorname{lcm}. A identidade \\gcd(a, b)\\cdot\\text{lcm}(a, b) = |ab| relaciona os dois. O mínimo múltiplo comum aparece ao somar frações com denominadores diferentes, no período de ciclos combinados e na ordem de um elemento de um grupo produto. Alguns textos escrevem [a, b] para o MMC, espelhando (a, b) para o MDC.",
  },
  "modulo": {
    name: "Módulo",
    meaning: "O \"mod n\" entre parênteses depois de uma congruência, que indica o módulo.",
    usage: "Escreva a \\equiv b \\pmod{n} para afirmar que n divide a - b. \\pmod acrescenta os parênteses e um espaço generoso antes deles, o que combina com congruências em destaque. Os comandos irmãos servem a outros casos: \\bmod é o operador binário para o resto, como em a \\bmod n = r; \\mod dá a palavra mod sem parênteses; e \\pod dá apenas os parênteses. No meio do texto, o espaço grande que \\pmod insere pode parecer excessivo, por isso alguns autores passam a usar \\bmod ou uma macro própria. Enunciados do teorema chinês do resto encadeiam várias congruências com módulos diferentes.",
  },
  "euler-phi": {
    name: "Função phi de Euler",
    meaning: "Função totiente de Euler: quantos inteiros de 1 a n são primos com n, escrita com o phi curvo.",
    usage: "O teorema de Euler, a^{\\varphi(n)} \\equiv 1 \\pmod n para \\gcd(a, n) = 1, e a fórmula do produto \\varphi(n) = n\\prod_{p \\mid n}(1 - 1/p) são as aparições clássicas. \\varphi dá a forma aberta, com laço, enquanto \\phi dá a forma com um traço reto atravessando um círculo; ambas designam a mesma função, e a escolha é questão de estilo. Muitos textos de teoria dos números escolhem \\varphi para deixar \\phi livre para outros usos, como a razão áurea ou um ângulo. A geração de chaves do RSA usa \\varphi(pq) = (p-1)(q-1).",
  },
  "phi-function": {
    name: "Função phi",
    meaning: "A função totiente de Euler escrita com o phi de traço reto em vez da variante curva.",
    usage: "Muitos livros escrevem a função totiente como \\phi(n), por exemplo \\phi(p) = p - 1 para um primo p e \\phi(p^k) = p^k - p^{k-1}. Na fonte padrão Computer Modern, \\phi é um círculo cortado por um traço vertical, enquanto \\varphi é a forma com laço. Ambos denotam a mesma função, então escolha um e seja consistente. Se a razão áurea, um ângulo ou um potencial também aparecerem, reserve \\phi para um significado e \\varphi para o outro. A multiplicatividade, \\phi(mn) = \\phi(m)\\phi(n) para m e n primos entre si, é uma fórmula em destaque comum.",
  },
  "prime": {
    name: "Número primo",
    meaning: "O p minúsculo em itálico, a letra convencional para um número primo em teoria dos números.",
    usage: "Por convenção, p, e q para um segundo primo, denotam primos, de modo que enunciados como \"para todo primo p\" ou somas e produtos indexados por p dispensam explicações. O produto de Euler \\zeta(s) = \\prod_p (1 - p^{-s})^{-1} é o caso clássico em que o índice percorre implicitamente os primos. Digitar p no modo matemático dá a letra em itálico; mantenha-a no modo matemático também no texto corrido, para que combine com as fórmulas em destaque. Para evitar ambiguidade com probabilidades ou valores-p, declare a convenção cedo. Potências de primos se escrevem p^k, e os números p-ádicos, \\mathbb{Q}_p.",
  },
  "prime-notation": {
    name: "Notação do n-ésimo primo",
    meaning: "O p_n com índice, que nomeia o n-ésimo primo, de modo que p_1 = 2, p_2 = 3, p_3 = 5.",
    usage: "Sequências de primos são indexadas assim em resultados como a demonstração de Euclides, em que p_1 p_2 \\cdots p_n + 1 tem um fator primo fora da lista, e na estimativa assintótica p_n \\sim n\\ln n que decorre do teorema dos números primos. Índices com mais de um caractere precisam de chaves, p_{n+1}; caso contrário, só o n desce. O postulado de Bertrand fica p_{n+1} < 2p_n. O primorial, produto dos n primeiros primos, costuma ser escrito p_n\\#. A função de contagem de primos \\pi(x) é essencialmente a inversa de n \\mapsto p_n.",
  },
  "legendre-symbol": {
    name: "Símbolo de Legendre",
    meaning: "Símbolo de Legendre (a/p): vale 1, -1 ou 0 conforme a seja ou não um resíduo quadrático módulo p.",
    usage: "Para um primo ímpar p, \\left(\\frac{a}{p}\\right) vale 1 se a é um quadrado não nulo módulo p, -1 se não é, e 0 se p \\mid a. A reciprocidade quadrática é a célebre identidade que relaciona \\left(\\frac{p}{q}\\right) e \\left(\\frac{q}{p}\\right) por meio do sinal (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}. \\left( \\right) ajusta automaticamente os parênteses à altura da fração. Não use \\binom, que omite o traço de fração exigido pelo símbolo; \\genfrac{(}{)}{}{}{a}{p} é uma alternativa equivalente. O critério de Euler o calcula como a^{(p-1)/2} módulo p.",
  },
  "integer-part": {
    name: "Parte inteira",
    meaning: "Colchetes em torno de x, uma notação mais antiga para a parte inteira, ou piso, de x.",
    usage: "A teoria dos números clássica e muitos textos de olimpíada escrevem [x] para o maior inteiro que não excede x, como na fórmula de Legendre para o expoente de p em n!, que soma [n/p^k] sobre k \\ge 1. A escrita moderna prefere \\lfloor x \\rfloor, que não é ambíguo, porque colchetes também agrupam expressões, denotam intervalos fechados e servem como colchetes de Iverson. Se você mantiver [x], defina-o explicitamente. Para números negativos, o piso e o truncamento diferem: \\lfloor -2.5 \\rfloor = -3, enquanto o truncamento em direção a zero dá -2.",
  },
  "fractional-part": {
    name: "Parte fracionária",
    meaning: "Parte fracionária de x, definida como x menos o seu piso, escrita com chaves escapadas.",
    usage: "Como chaves simples apenas agrupam em LaTeX, as chaves visíveis precisam ser escapadas como \\{ e \\}. A parte fracionária satisfaz x = \\lfloor x \\rfloor + \\{x\\} com 0 \\le \\{x\\} < 1 e aparece em resultados de equidistribuição, como o teorema de Weyl, segundo o qual \\{n\\alpha\\} é uniformemente distribuída para \\alpha irracional. As mesmas chaves também denotam conjuntos, então \\{x\\} poderia ser lido como o conjunto unitário que contém x; defina a notação ou escreva \\operatorname{frac}(x). Para conteúdos mais altos, use \\left\\{ ... \\right\\}.",
  },
  "sum-of-divisors": {
    name: "Soma dos divisores",
    meaning: "Função soma dos divisores: o total de todos os divisores positivos de n.",
    usage: "\\sigma(n) = \\sum_{d \\mid n} d, então \\sigma(6) = 1 + 2 + 3 + 6 = 12. Um número é perfeito exatamente quando \\sigma(n) = 2n, e a forma geral \\sigma_k(n) = \\sum_{d \\mid n} d^k inclui a contagem de divisores como \\sigma_0. A função é multiplicativa, com \\sigma(p^k) = \\frac{p^{k+1}-1}{p-1} para potências de primos, e por isso pode ser calculada a partir de uma fatoração. O \\sigma minúsculo também significa desvio padrão, então uma breve observação ajuda em trabalhos interdisciplinares. O \\Sigma maiúsculo não tem relação aqui.",
  },
  "mobius-function": {
    name: "Função de Möbius",
    meaning: "Função de Möbius: 0 se o quadrado de um primo divide n; caso contrário, (-1)^k para k fatores primos.",
    usage: "Seu papel principal é a inversão de Möbius: se g(n) = \\sum_{d \\mid n} f(d), então f(n) = \\sum_{d \\mid n} \\mu(d)\\, g(n/d). Ela também satisfaz \\sum_{d \\mid n} \\mu(d) = 0 para n > 1, e sua série de Dirichlet é a recíproca da função zeta, \\frac{1}{\\zeta(s)} = \\sum_{n \\ge 1} \\frac{\\mu(n)}{n^s}. A letra \\mu é muito sobrecarregada, significando média em estatística e medida em análise, então introduza-a explicitamente. No modo matemático, use o \\mu grego, nunca um u latino parecido.",
  },
  "number-of-divisors": {
    name: "Número de divisores",
    meaning: "Função contagem de divisores: quantos divisores positivos n possui.",
    usage: "d(n) = \\sum_{d \\mid n} 1, então d(12) = 6. Para n = p_1^{a_1}\\cdots p_k^{a_k}, a fórmula d(n) = (a_1+1)\\cdots(a_k+1) mostra que ela é multiplicativa. Outros nomes comuns são \\tau(n) e \\sigma_0(n), então confira qual deles a sua referência usa. O problema dos divisores de Dirichlet estuda a ordem média, \\sum_{n \\le x} d(n) = x\\ln x + (2\\gamma - 1)x + O(\\sqrt{x}). Atenção: a letra d também é a variável usual de divisor dentro dessas somas, então prefira \\tau(n) quando ambas apareceriam na mesma fórmula.",
  },
};

export default text;
