import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/number-theory/<slug>. */
const text: SymbolPageTranslations = {
  "does-not-divide": {
    name: "Símbolo de no divisibilidad",
    meaning: "Barra vertical tachada que indica que un entero no divide a otro.",
    usage: "Los especialistas en teoría de números escriben 3 \\nmid 10 y lo usan en hipótesis como la del pequeño teorema de Fermat: si p \\nmid a, entonces a^{p-1} \\equiv 1 \\pmod p. Es la negación de \\mid y tiene el mismo espaciado de relación; \\not\\mid produce una barra a menudo mal colocada, así que prefiere \\nmid. Evita una | simple con una barra añadida a mano. En informática aparece en condiciones sobre pasos, periodos y tamaños de tablas hash, como k \\nmid n. Otras negaciones precompuestas relacionadas son \\nparallel y \\nleq.",
  },
  "gcd": {
    name: "Máximo común divisor",
    meaning: "Máximo común divisor de a y b, el mayor entero que divide a ambos.",
    usage: "\\gcd es un operador predefinido, así que se imprime en redonda y, como \\lim, admite límites debajo en estilo display. La identidad de Bézout dice que \\gcd(a, b) = ax + by para ciertos enteros x e y, y a y b son coprimos cuando \\gcd(a, b) = 1. Muchos artículos de teoría de números omiten el nombre y escriben (a, b), lo que es compacto pero choca con los pares ordenados y los intervalos abiertos. El algoritmo de Euclides se basa en \\gcd(a, b) = \\gcd(b, a \\bmod b), donde \\bmod da espaciado de operador binario. No existe un comando predefinido equivalente para el mínimo común múltiplo.",
  },
  "lcm": {
    name: "Mínimo común múltiplo",
    meaning: "Mínimo común múltiplo de a y b, el menor entero positivo divisible por ambos.",
    usage: "A diferencia de \\gcd, no existe un comando \\lcm predefinido, por eso esta entrada usa \\text. Una línea en el preámbulo, \\DeclareMathOperator{\\lcm}{lcm}, da un operador propiamente dicho con el espaciado correspondiente, o usa \\operatorname{lcm} directamente. La identidad \\gcd(a, b)\\cdot\\text{lcm}(a, b) = |ab| relaciona ambos. Los mínimos comunes múltiplos aparecen al sumar fracciones con distinto denominador, en el periodo de ciclos combinados y en el orden de un elemento de un grupo producto. Algunos textos escriben [a, b] para el mcm, en paralelo con (a, b) para el mcd; en español también es habitual escribir \\operatorname{mcm} y \\operatorname{mcd}.",
  },
  "modulo": {
    name: "Módulo",
    meaning: "«mod n» entre paréntesis tras una congruencia, que indica el módulo.",
    usage: "Escribe a \\equiv b \\pmod{n} para afirmar que n divide a a - b. \\pmod añade los paréntesis y un espacio generoso antes de ellos, lo que va bien en congruencias destacadas. Sus hermanos cubren otros casos: \\bmod es el operador binario para el resto, como en a \\bmod n = r; \\mod da la palabra mod sin paréntesis; y \\pod da solo los paréntesis. En el texto en línea, el gran espacio que inserta \\pmod puede resultar excesivo, así que algunos autores pasan a \\bmod o a una macro propia. Los enunciados del teorema chino del resto encadenan varias congruencias con módulos distintos.",
  },
  "euler-phi": {
    name: "Función phi de Euler",
    meaning: "Función de Euler (indicatriz): cuántos enteros de 1 a n son coprimos con n, escrita con la phi curva.",
    usage: "El teorema de Euler a^{\\varphi(n)} \\equiv 1 \\pmod n para \\gcd(a, n) = 1 y la fórmula del producto \\varphi(n) = n\\prod_{p \\mid n}(1 - 1/p) son sus apariciones habituales. \\varphi da la forma abierta con bucle, mientras que \\phi da la forma con un trazo recto que atraviesa un círculo; ambas nombran la misma función, y la elección es cuestión de estilo editorial. Muchos textos de teoría de números eligen \\varphi para dejar \\phi libre para otros usos, como la razón áurea o un ángulo. La generación de claves RSA usa \\varphi(pq) = (p-1)(q-1).",
  },
  "phi-function": {
    name: "Función phi",
    meaning: "La función de Euler escrita con la phi de trazo recto en lugar de la variante curva.",
    usage: "Muchos libros de texto escriben la función de Euler como \\phi(n), por ejemplo \\phi(p) = p - 1 para un primo p y \\phi(p^k) = p^k - p^{k-1}. En la fuente Computer Modern por defecto, \\phi es un círculo atravesado por un trazo vertical, mientras que \\varphi es la forma con bucle. Ambas denotan la misma función, así que elige una y sé coherente. Si también aparecen la razón áurea, un ángulo o un potencial, reserva \\phi para un significado y \\varphi para el otro. La multiplicatividad, \\phi(mn) = \\phi(m)\\phi(n) para m y n coprimos, es una fórmula destacada habitual.",
  },
  "prime": {
    name: "Número primo",
    meaning: "La p minúscula en cursiva, la letra convencional para un número primo en teoría de números.",
    usage: "Por convención p, y q para un segundo primo, denotan primos, así que enunciados como «para todo primo p» o sumas y productos indexados por p apenas necesitan más explicación. El producto de Euler \\zeta(s) = \\prod_p (1 - p^{-s})^{-1} es el caso clásico en que el índice recorre implícitamente los primos. Escribir p en modo matemático da la letra cursiva; mantenla en modo matemático también en la prosa, para que coincida con las fórmulas destacadas. Para evitar ambigüedad con probabilidades o p-valores, establece la convención pronto. Las potencias de primos se escriben p^k, y los números p-ádicos \\mathbb{Q}_p.",
  },
  "prime-notation": {
    name: "Notación del n-ésimo primo",
    meaning: "p_n con subíndice, que nombra el n-ésimo primo, de modo que p_1 = 2, p_2 = 3, p_3 = 5.",
    usage: "Las sucesiones de primos se indexan así en resultados como la demostración de Euclides, donde p_1 p_2 \\cdots p_n + 1 tiene un factor primo fuera de la lista, y en la asintótica p_n \\sim n\\ln n del teorema de los números primos. Los subíndices de varios caracteres necesitan llaves, p_{n+1}; si no, solo baja la n. El postulado de Bertrand se escribe p_{n+1} < 2p_n. El primorial, el producto de los n primeros primos, suele escribirse p_n\\#. La función contadora de primos \\pi(x) es esencialmente la inversa de n \\mapsto p_n.",
  },
  "legendre-symbol": {
    name: "Símbolo de Legendre",
    meaning: "Símbolo de Legendre (a/p): vale 1, -1 o 0 según a sea o no un residuo cuadrático módulo p.",
    usage: "Para un primo impar p, \\left(\\frac{a}{p}\\right) vale 1 si a es un cuadrado no nulo módulo p, -1 si no lo es, y 0 si p \\mid a. La reciprocidad cuadrática es la famosa identidad que relaciona \\left(\\frac{p}{q}\\right) y \\left(\\frac{q}{p}\\right) mediante el signo (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}. \\left( \\right) ajusta automáticamente los paréntesis al tamaño de la fracción. No uses \\binom, que omite la raya de fracción que el símbolo requiere; \\genfrac{(}{)}{}{}{a}{p} es una alternativa equivalente. El criterio de Euler lo calcula como a^{(p-1)/2} módulo p.",
  },
  "integer-part": {
    name: "Parte entera",
    meaning: "Corchetes alrededor de x, una notación antigua para la parte entera o el suelo de x.",
    usage: "La teoría de números clásica y muchos textos de olimpiadas escriben [x] para el mayor entero que no supera x, como en la fórmula de Legendre para el exponente de p en n!, que suma [n/p^k] para k \\ge 1. La escritura moderna prefiere \\lfloor x \\rfloor, que no es ambigua, porque los corchetes también agrupan expresiones, denotan intervalos cerrados y sirven como corchetes de Iverson. Si mantienes [x], defínelo explícitamente. Para números negativos, el suelo y el truncamiento difieren: \\lfloor -2.5 \\rfloor = -3, mientras que truncar hacia cero da -2.",
  },
  "fractional-part": {
    name: "Parte fraccionaria",
    meaning: "Parte fraccionaria de x, definida como x menos su suelo, escrita con llaves escapadas.",
    usage: "Como en LaTeX las llaves sin más solo agrupan, las visibles deben escaparse como \\{ y \\}. La parte fraccionaria cumple x = \\lfloor x \\rfloor + \\{x\\} con 0 \\le \\{x\\} < 1, y aparece en resultados de equidistribución como el teorema de Weyl, según el cual \\{n\\alpha\\} está uniformemente distribuida para \\alpha irracional. Las mismas llaves también denotan conjuntos, así que \\{x\\} podría leerse como el conjunto unitario que contiene x; define la notación o escribe \\operatorname{frac}(x). Para contenidos más altos, usa \\left\\{ ... \\right\\}.",
  },
  "sum-of-divisors": {
    name: "Suma de divisores",
    meaning: "Función suma de divisores: el total de todos los divisores positivos de n.",
    usage: "\\sigma(n) = \\sum_{d \\mid n} d, así que \\sigma(6) = 1 + 2 + 3 + 6 = 12. Un número es perfecto exactamente cuando \\sigma(n) = 2n, y la forma general \\sigma_k(n) = \\sum_{d \\mid n} d^k incluye el número de divisores como \\sigma_0. La función es multiplicativa, con \\sigma(p^k) = \\frac{p^{k+1}-1}{p-1} para potencias de primos, así que puede calcularse a partir de una factorización. La \\sigma minúscula también significa desviación típica, así que una breve aclaración ayuda en trabajos interdisciplinares. La \\Sigma mayúscula no tiene relación aquí.",
  },
  "mobius-function": {
    name: "Función de Möbius",
    meaning: "Función de Möbius: vale 0 si el cuadrado de un primo divide a n y, en caso contrario, (-1)^k para k factores primos.",
    usage: "Su papel principal es la inversión de Möbius: si g(n) = \\sum_{d \\mid n} f(d), entonces f(n) = \\sum_{d \\mid n} \\mu(d)\\, g(n/d). También cumple \\sum_{d \\mid n} \\mu(d) = 0 para n > 1, y su serie de Dirichlet es el inverso de la función zeta, \\frac{1}{\\zeta(s)} = \\sum_{n \\ge 1} \\frac{\\mu(n)}{n^s}. La letra \\mu está muy sobrecargada, pues significa una media en estadística y una medida en análisis, así que introdúcela explícitamente. En modo matemático, usa la griega \\mu, nunca una u latina como imitación.",
  },
  "number-of-divisors": {
    name: "Número de divisores",
    meaning: "Función contadora de divisores: cuántos divisores positivos tiene n.",
    usage: "d(n) = \\sum_{d \\mid n} 1, así que d(12) = 6. Para n = p_1^{a_1}\\cdots p_k^{a_k}, la fórmula d(n) = (a_1+1)\\cdots(a_k+1) muestra que es multiplicativa. Otros nombres habituales son \\tau(n) y \\sigma_0(n), así que comprueba cuál usa tu referencia. El problema de los divisores de Dirichlet estudia el orden medio, \\sum_{n \\le x} d(n) = x\\ln x + (2\\gamma - 1)x + O(\\sqrt{x}). Cuidado: la letra d es también la variable de divisor habitual dentro de esas sumas, así que prefiere \\tau(n) cuando ambas aparezcan en una misma fórmula.",
  },
};

export default text;
