import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/combinatorics/<slug>. */
const text: SymbolPageTranslations = {
  "combination-ncr": {
    name: "Combinación (nCr)",
    meaning: "Número de formas de elegir k elementos de entre n sin tener en cuenta el orden; se lee «n sobre k».",
    usage: "Su valor es C(n, k) = \\frac{n!}{k!(n-k)!}, idéntico al coeficiente binomial \\binom{n}{k}, que es la notación preferida en la mayor parte de las matemáticas. \\binom adapta su tamaño al contexto; \\dbinom fuerza el tamaño de presentación y \\tbinom el de texto. Evita en LaTeX la sintaxis de TeX simple {n \\choose k}, contra la que advierte amsmath. Otras notaciones son nCr, {}^nC_k y C^k_n, esta última común en textos franceses con los índices intercambiados, así que comprueba la convención. La regla de Pascal, C(n, k) = C(n-1, k-1) + C(n-1, k), genera el triángulo de Pascal.",
  },
  "permutation-npr": {
    name: "Variación (nPr)",
    meaning: "Número de disposiciones ordenadas de k elementos elegidos entre n elementos distintos; se lee «variaciones de n elementos tomados de k en k» (también «permutaciones de n tomadas de k en k»).",
    usage: "Las variaciones (sin repetición) cuentan selecciones ordenadas: P(n, k) = \\frac{n!}{(n-k)!} = n(n-1)\\cdots(n-k+1), así que P(5, 2) = 20. Es igual al factorial descendente (n)_k o n^{\\underline{k}}, y se relaciona con las combinaciones mediante P(n, k) = k!\\,C(n, k). Otras notaciones que verás son nPr, {}^nP_k y A^k_n (arreglos) en textos franceses y chinos. Como P(\\cdot) también denota probabilidad, el lector puede malinterpretar P(n, k) en un capítulo de probabilidad; cambiar a (n)_k o n^{\\underline{k}} lo evita. Usa \\cdots entre los factores de un producto.",
  },
  "multinomial": {
    name: "Coeficiente multinomial",
    meaning: "Coeficiente multinomial: número de formas de repartir n elementos en grupos de tamaños k_1 a k_m, cuyos tamaños suman n.",
    usage: "Su valor es n! / (k_1!\\,k_2!\\cdots k_m!), con k_1 + \\cdots + k_m = n, y da los coeficientes del teorema multinomial, (x_1 + \\cdots + x_m)^n = \\sum \\binom{n}{k_1, \\ldots, k_m} x_1^{k_1}\\cdots x_m^{k_m}. Cuenta las ordenaciones distintas de una palabra con letras repetidas, por ejemplo 11!/(4!\\,4!\\,2!\\,1!) para MISSISSIPPI. La construcción reutiliza \\binom con una lista separada por comas en la posición inferior; el coeficiente binomial \\binom{n}{k} es el caso particular \\binom{n}{k, n-k}. Usa \\ldots entre comas, no \\cdots.",
  },
  "falling-factorial": {
    name: "Factorial descendente",
    meaning: "Factorial descendente en notación combinatoria: n(n-1)...(n-k+1), el producto de k factores decrecientes.",
    usage: "(n)_k cuenta las aplicaciones inyectivas de un conjunto de k elementos en uno de n elementos y es igual a n!/(n-k)! para enteros. Atención: esta notación al estilo de Pochhammer es ambigua, porque en funciones especiales (a)_n significa el factorial ascendente. La notación de Knuth, n^{\\underline{k}} para el descendente y n^{\\overline{k}} para el ascendente, elimina la ambigüedad y es la que se usa en Concrete Mathematics; se escribe con \\underline y \\overline en el exponente. Los factoriales descendentes se convierten en potencias ordinarias mediante los números de Stirling: x^n = \\sum_k S(n,k)(x)_k. Define tu notación explícitamente en el artículo.",
  },
  "rising-factorial": {
    name: "Factorial ascendente",
    meaning: "Factorial ascendente escrito con un superíndice entre paréntesis: n(n+1)...(n+k-1).",
    usage: "Esta notación, común en combinatoria y probabilidad, denota el factorial ascendente n^{(k)} = n(n+1)\\cdots(n+k-1) = \\Gamma(n+k)/\\Gamma(n). Es ambigua: en cálculo f^{(k)} es la derivada k-ésima, y algunos autores usan x^{(k)} para el factorial descendente. Son alternativas n^{\\overline{k}} de Knuth o el símbolo de Pochhammer (n)_k de las funciones especiales, aunque este último choca con el factorial descendente combinatorio. Los paréntesis deben ir dentro de las llaves del superíndice, ^{(k)}. Los factoriales ascendentes cuentan las colocaciones ordenadas de k bolas en n tubos ordenados.",
  },
  "stirling-first-kind": {
    name: "Número de Stirling de primera especie",
    meaning: "Número de Stirling de primera especie sin signo: permutaciones de n elementos con exactamente k ciclos, en notación de corchetes.",
    usage: "\\genfrac recibe seis argumentos: delimitador izquierdo, delimitador derecho, grosor de la raya, estilo, numerador y denominador. Fijar el grosor en 0pt elimina la raya de fracción y da la notación de corchetes apilados de Concrete Mathematics. Estos números satisfacen la recurrencia {n+1 \\brack k} = n {n \\brack k} + {n \\brack k-1} y su suma sobre k es n!. En lugar de repetir la llamada de seis argumentos, define una macro como \\newcommand{\\stirlingI}[2]{\\genfrac{[}{]}{0pt}{}{#1}{#2}}. El cuarto argumento vacío deja que el tamaño dependa del contexto; usa 0 para el estilo de presentación o 1 para el de texto.",
  },
  "stirling-second-kind": {
    name: "Número de Stirling de segunda especie",
    meaning: "Número de Stirling de segunda especie: formas de particionar un conjunto de n elementos en k bloques no vacíos, en notación de llaves.",
    usage: "Aquí \\genfrac dibuja las llaves escapadas \\{ y \\} como delimitadores con una raya de 0pt, lo que produce la notación de llaves popularizada por Knuth. Los números cumplen S(n+1, k) = k\\,S(n, k) + S(n, k-1), su suma sobre k es el número de Bell B_n y convierten potencias en factoriales descendentes: x^n = \\sum_k {n \\brace k}(x)_k. Como las llaves deben escaparse, olvidar una barra invertida es el error de compilación habitual. Envuélvelo en una macro como \\stirlingII{n}{k}. La notación alternativa S(n, k) es más sencilla de escribir y común en textos de informática.",
  },
  "bell-number": {
    name: "Número de Bell",
    meaning: "Número de Bell B_n: número total de formas de particionar un conjunto de n elementos en bloques no vacíos.",
    usage: "Los números de Bell empiezan por 1, 1, 2, 5, 15, 52, 203 y son iguales a la suma de los números de Stirling de segunda especie, B_n = \\sum_k S(n, k). Satisfacen B_{n+1} = \\sum_k \\binom{n}{k} B_k y la fórmula de Dobinski B_n = \\frac{1}{e}\\sum_{k \\geq 0} \\frac{k^n}{k!}. Un conflicto de notación a vigilar: B_n también denota los números de Bernoulli, que aparecen en la fórmula de Euler-Maclaurin y en los valores de la función zeta, así que en análisis puede ser necesario renombrar uno de ellos. Las llaves son obligatorias cuando el índice es una expresión, como en B_{n+1}. Son los momentos de una distribución de Poisson de media 1.",
  },
  "fibonacci": {
    name: "Número de Fibonacci",
    meaning: "Número de Fibonacci F_n, definido por F_0 = 0, F_1 = 1 y F_n = F_{n-1} + F_{n-2}.",
    usage: "Los números de Fibonacci empiezan por 0, 1, 1, 2, 3, 5, 8, 13 y tienen la forma cerrada F_n = (\\varphi^n - \\psi^n)/\\sqrt{5}, la fórmula de Binet, donde \\varphi = (1+\\sqrt5)/2 es el número áureo. Cuentan los teselados de un tablero de 1 \\times n con cuadrados y dominós (hay F_{n+1}) y aparecen en el análisis del algoritmo de Euclides y de los montículos de Fibonacci. Algunos textos empiezan la numeración en F_1 = F_2 = 1, así que indica tus valores iniciales. Usa \\varphi para el número áureo, como hace la mayoría de los autores; \\phi es la variante recta. Las llaves son necesarias en F_{n-1}.",
  },
  "partition": {
    name: "Función de partición",
    meaning: "Función de partición p(n): número de formas de escribir n como suma de enteros positivos, sin tener en cuenta el orden.",
    usage: "Por ejemplo, p(4) = 5 porque 4 = 3+1 = 2+2 = 2+1+1 = 1+1+1+1. La función generatriz de Euler es \\sum_n p(n) x^n = \\prod_{k \\geq 1} \\frac{1}{1 - x^k}, y Hardy y Ramanujan hallaron la asintótica p(n) \\sim \\frac{1}{4n\\sqrt{3}} e^{\\pi\\sqrt{2n/3}}. Entre las congruencias de Ramanujan está p(5k+4) \\equiv 0 \\pmod 5. La p minúscula choca con la notación de densidad de probabilidad y con los números primos, así que defínela en contextos mixtos. Las versiones restringidas se escriben p_k(n) o p(n, k) para particiones en a lo sumo k partes.",
  },
  "derangement": {
    name: "Número de desarreglos",
    meaning: "Número de desarreglos D_n: permutaciones de n elementos en las que ningún elemento permanece en su posición original.",
    usage: "D_n cuenta las permutaciones sin puntos fijos y empieza por 1, 0, 1, 2, 9, 44, 265. El principio de inclusión-exclusión da D_n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}, así que D_n es el entero más próximo a n!/e y la probabilidad de que una permutación aleatoria sea un desarreglo tiende a 1/e. Entre las recurrencias está D_n = (n-1)(D_{n-1} + D_{n-2}). La historia clásica es el problema de los sombreros. El mismo número también se escribe !n, el subfactorial; D_n es más fácil de leer en el texto corrido. Ten en cuenta que D_n también designa el grupo diédrico en álgebra, así que aclara cuál es cuál si aparecen ambos.",
  },
  "double-factorial": {
    name: "Doble factorial",
    meaning: "Doble factorial: producto de todos los enteros desde n hasta 1 o 2 que tienen la misma paridad que n.",
    usage: "Para n impar, n!! = n(n-2)\\cdots 3 \\cdot 1, así que 7!! = 105; para n par termina en 2, así que 8!! = 384. No es (n!)!, una interpretación errónea frecuente, así que conviene una breve definición. Entre sus identidades están (2n)!! = 2^n n! y (2n-1)!! = \\frac{(2n)!}{2^n n!}, que cuenta los emparejamientos perfectos de 2n puntos y aparece en los momentos gaussianos, \\mathbb{E}[X^{2n}] = (2n-1)!! para una normal estándar. En TeX, ! es un símbolo de cierre, así que n!! no necesita espaciado especial. Por convenio, 0!! = (-1)!! = 1.",
  },
  "subfactorial": {
    name: "Subfactorial",
    meaning: "Subfactorial de n, una notación con signo de exclamación prefijo para el número de desarreglos de n objetos.",
    usage: "!n es igual a D_n, el número de permutaciones sin puntos fijos: !4 = 9 y !n = \\left\\lfloor n!/e + 1/2 \\right\\rfloor para n \\geq 1. La exclamación prefija es compacta pero fácil de malinterpretar, sobre todo tras una variable, donde m!n parece m factorial por n. Escribir D_n, o añadir una agrupación explícita, lo evita. En TeX el signo de exclamación pertenece a la clase de cierre, así que tras una relación binaria como = se compone sin espacio adicional, como se desea. Algunos autores usan la exclamación invertida o n\\text{¡}, pero esa notación es poco frecuente.",
  },
  "pochhammer": {
    name: "Símbolo de Pochhammer",
    meaning: "Símbolo de Pochhammer: en funciones especiales, el factorial ascendente a(a+1)...(a+n-1).",
    usage: "En la literatura sobre funciones hipergeométricas y especiales, (a)_n = a(a+1)\\cdots(a+n-1) = \\Gamma(a+n)/\\Gamma(a), con (a)_0 = 1. Es la pieza básica de la serie {}_pF_q, por ejemplo {}_2F_1(a,b;c;z) = \\sum_n \\frac{(a)_n (b)_n}{(c)_n} \\frac{z^n}{n!}. Los combinatorios usan el mismo (x)_n para el factorial descendente, así que es uno de los conflictos de notación más conocidos; la DLMF y la mayoría de las referencias de funciones especiales usan el significado ascendente. La notación a^{\\overline{n}} de Knuth no es ambigua si tu público es mixto. Los paréntesis son aquí ordinarios, con el tamaño del argumento.",
  },
};

export default text;
