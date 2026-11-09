import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/summation/<slug>. */
const text: SymbolPageTranslations = {
  "summation": {
    name: "Sumatoria",
    meaning: "Operador de suma con sigma mayúscula que suma los términos de una sucesión.",
    usage: "Los límites se añaden con _ y ^: \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}. En las fórmulas destacadas los límites se centran debajo y encima de una sigma agrandada, mientras que en línea quedan a un lado y el signo sigue siendo pequeño; \\limits y \\nolimits cambian este comportamiento. Usa \\sum y no \\Sigma, que es solo la letra griega y ni se escala ni apila los límites. Para condiciones de varias líneas bajo el signo, \\substack{0 \\le i \\le m \\\\ 0 < j < n} las apila de forma ordenada. Una suma con solo subíndice, \\sum_i, es habitual en física y aprendizaje automático cuando el rango es evidente.",
  },
  "summation-to-infinity": {
    name: "Sumatoria hasta el infinito",
    meaning: "Suma con índice desde n = 0 hasta el infinito, la forma empleada para las series de potencias.",
    usage: "Empezar en cero es natural para las series de potencias y de Taylor: e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} y la serie geométrica \\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r} para |r| < 1. Comprueba con cuidado el índice inicial, ya que pasar de n = 0 a n = 1 elimina el primer término y cambia la forma cerrada. En modo destacado los límites se apilan; en línea se desplazan junto a la sigma. Cuando el límite superior es infinito, \\sum_{n \\ge 0} es una alternativa compacta. Las funciones generatrices de una sucesión a_n se escriben de la misma manera, \\sum_{n=0}^{\\infty} a_n x^n.",
  },
  "product": {
    name: "Productorio",
    meaning: "Operador de producto con pi mayúscula que multiplica los términos de una sucesión.",
    usage: "Los límites funcionan como en \\sum: n! = \\prod_{k=1}^{n} k, y en estadística la verosimilitud L(\\theta) = \\prod_{i=1}^{n} f(x_i \\mid \\theta). Es más grande que la letra \\Pi y coloca los límites encima y debajo en estilo destacado, así que no lo sustituyas por la letra griega. Tomar logaritmos convierte un producto en una suma, \\log\\prod_i a_i = \\sum_i \\log a_i, un paso presente en casi toda derivación de máxima verosimilitud. Los productos cartesianos de conjuntos, \\prod_{i \\in I} X_i, usan el mismo comando. Su versión invertida, \\coprod, denota coproductos.",
  },
  "coproduct": {
    name: "Coproducto",
    meaning: "Signo de producto invertido que denota el coproducto, como una unión disjunta de conjuntos.",
    usage: "La teoría de categorías y la topología algebraica usan \\coprod_{i \\in I} X_i para el coproducto de una familia: unión disjunta para conjuntos y espacios, suma directa para grupos abelianos o módulos. Es un operador grande como \\prod, de modo que en estilo destacado los límites se apilan debajo y encima. No lo confundas con \\amalg, su versión binaria pequeña para exactamente dos objetos, X \\amalg Y. Las uniones disjuntas también se escriben con \\bigsqcup, que tiene forma de copa; elige la que se use en tu campo. La construcción dual, el producto categórico, usa \\prod.",
  },
  "big-union-with-index": {
    name: "Gran unión indexada",
    meaning: "Gran unión sobre una familia indexada de conjuntos, de A_1 a A_n.",
    usage: "Las uniones finitas y numerables, \\bigcup_{i=1}^{n} A_i o \\bigcup_{n=1}^{\\infty} A_n, aparecen en teoría de la medida para la aditividad numerable, en la cota de la unión en probabilidad y en topología para los recubrimientos abiertos. \\bigcup es el operador grande; \\cup es la versión binaria para dos conjuntos, A \\cup B. Los límites se apilan debajo y encima en las fórmulas destacadas y se desplazan a un lado en línea. Los conjuntos de índices no tienen por qué ser numéricos: \\bigcup_{\\alpha \\in \\Lambda} U_\\alpha es habitual para recubrimientos arbitrarios. Para una unión de conjuntos disjuntos dos a dos, cambia a \\bigsqcup o indica la disjunción con palabras.",
  },
  "big-intersection-with-index": {
    name: "Gran intersección indexada",
    meaning: "Gran intersección sobre una familia indexada de conjuntos, de A_1 a A_n.",
    usage: "Las intersecciones de familias indexadas expresan resultados como la propiedad de los intervalos encajados, \\bigcap_{n=1}^{\\infty} [a_n, b_n] \\neq \\varnothing, o definen la sigma-álgebra generada por una colección como la intersección de todas las que la contienen. Usa \\bigcap para familias y \\cap para dos conjuntos, A \\cap B. La ley de De Morgan relaciona los dos operadores grandes: \\left(\\bigcup_i A_i\\right)^c = \\bigcap_i A_i^c. En estilo destacado los índices se sitúan debajo y encima; en línea, añade \\limits solo si hace falta. Una intersección sobre una familia de índices vacía solo tiene sentido respecto a un conjunto ambiente, así que indica cuál es.",
  },
  "big-wedge": {
    name: "Gran conjunción",
    meaning: "Operador cuña grande para la conjunción de muchos enunciados o para una potencia exterior.",
    usage: "En lógica, \\bigwedge_{i=1}^{n} \\varphi_i es la conjunción de n fórmulas, la forma n-aria de \\wedge (también \\land); la forma normal conjuntiva es una \\bigwedge de cláusulas. En teoría de retículos denota el ínfimo (meet) de un conjunto, y en geometría diferencial \\bigwedge^k V es la k-ésima potencia exterior de un espacio vectorial. Los límites se comportan como los de \\sum: apilados en modo destacado, junto al signo en línea. No lo confundas con \\Lambda, la mayúscula griega, que algunos autores usan para las potencias exteriores en tamaño normal. Su operador dual es \\bigvee.",
  },
  "big-vee": {
    name: "Gran disyunción",
    meaning: "Operador uve grande para la disyunción de muchos enunciados o para el supremo en un retículo.",
    usage: "La lógica usa \\bigvee_{i=1}^{n} \\varphi_i para una disyunción de n términos, que generaliza \\vee (también \\lor); la forma normal disyuntiva es literalmente una \\bigvee de términos \\bigwedge. En teoría del orden y de retículos, \\bigvee S es el supremo (join) de un conjunto S. Como operador grande, sus límites se apilan en las fórmulas destacadas y se desplazan a un lado en línea. Evita usar en su lugar la letra V o un \\vee con subíndice, ya que quedan pequeños y no colocan los límites. En topología algebraica, \\bigvee_{i} S^1 denota una suma en cuña de circunferencias, que pega espacios punteados por sus puntos base.",
  },
  "big-direct-sum": {
    name: "Gran suma directa",
    meaning: "Signo más en círculo grande, la suma directa de una familia de espacios o módulos.",
    usage: "Un operador diagonalizable descompone su espacio en subespacios propios, V = \\bigoplus_{\\lambda} E_\\lambda, y los anillos graduados aparecen como \\bigoplus_{n \\ge 0} R_n. \\oplus es la forma binaria para dos sumandos, U \\oplus W. En informática y criptografía, \\bigoplus_{i} x_i suele significar el XOR de muchos bits, con el mismo símbolo. Los límites se apilan en estilo destacado como en \\sum. Ten en cuenta que la suma directa de infinitos módulos difiere del producto directo \\prod, que admite infinitas componentes no nulas, así que elige el operador que corresponda a tu construcción.",
  },
  "big-tensor-product": {
    name: "Gran producto tensorial",
    meaning: "Signo por en círculo grande, el producto tensorial de una familia de espacios u operadores.",
    usage: "La computación cuántica escribe el espacio de estados de n cúbits como \\bigotimes_{i=1}^{n} \\mathbb{C}^2, y el álgebra multilineal construye el álgebra tensorial T(V) = \\bigoplus_k V^{\\otimes k}. La forma binaria \\otimes une dos factores, A \\otimes B, y también denota el producto de Kronecker de matrices. Como operador grande, \\bigotimes lleva límites apilados en las fórmulas destacadas. Conserva la forma con superíndice V^{\\otimes n} para las potencias tensoriales repetidas de un mismo espacio; es más compacta que un operador grande con límites. Indica el anillo o cuerpo base cuando no sea obvio, como en \\otimes_R.",
  },
  "big-circle-dot": {
    name: "Gran punto en círculo",
    meaning: "Punto en círculo grande, usado para un producto n-ario elemento a elemento o simétrico.",
    usage: "\\bigodot es la versión de operador grande de \\odot. En aprendizaje automático, \\odot es el producto de Hadamard o elemento a elemento, por lo que \\bigodot_{i=1}^{n} \\mathbf{v}_i puede denotar el producto elemento a elemento de muchos vectores; los artículos sobre descomposición tensorial usan \\odot para el producto de Khatri-Rao, y algunos textos de álgebra lo emplean para potencias simétricas. Como su significado varía según el campo, defínelo en tu sección de notación. Los límites se apilan como los de \\sum en estilo destacado. No lo confundas con \\bigcirc, que es un círculo vacío grande con espaciado de operador binario, no un operador grande.",
  },
  "big-square-union": {
    name: "Gran unión cuadrada",
    meaning: "Copa cuadrada grande que denota la unión disjunta de una familia indexada de conjuntos.",
    usage: "Escribir X = \\bigsqcup_{i \\in I} X_i indica a la vez una unión y que las piezas son disjuntas dos a dos, una convención habitual en topología, teoría de la medida y teoría de categorías. La forma binaria es \\sqcup, como en A \\sqcup B. \\coprod es una alternativa que algunos autores prefieren para la misma construcción categórica, mientras que \\bigcup por sí solo no dice nada sobre la disjunción. En teoría de dominios y semántica denotacional, \\bigsqcup denota en cambio la mínima cota superior de un conjunto dirigido. Como operador grande, sus límites se apilan en las fórmulas destacadas y quedan a un lado en línea.",
  },
  "double-sum": {
    name: "Suma doble",
    meaning: "Dos sumas anidadas, sobre i de 1 a m y sobre j de 1 a n, como al sumar las entradas de una matriz.",
    usage: "Las sumas dobles suman todas las entradas de una matriz de m por n, como en la norma de Frobenius \\lVert A \\rVert_F^2 = \\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{ij}^2. LaTeX coloca los dos operadores uno junto al otro con el espaciado adecuado, por lo que no hace falta añadir espacio manual entre ellos. Cuando ambos índices comparten una condición, un único signo como \\sum_{i,j} o \\sum_{1 \\le i < j \\le n} es más compacto, y \\substack apila varias condiciones bajo una sola sigma. Intercambiar el orden de sumas dobles finitas siempre es válido, pero las infinitas requieren convergencia absoluta o términos no negativos.",
  },
  "indexed-sum": {
    name: "Suma sobre un conjunto de índices",
    meaning: "Suma sobre cada elemento k de un conjunto K en lugar de sobre un rango numérico.",
    usage: "Las sumas indexadas por conjuntos son naturales cuando el conjunto de índices no es un intervalo: sumas sobre primos \\sum_{p \\le x}, sobre divisores \\sum_{d \\mid n} o sobre vértices en el lema del apretón de manos \\sum_{v \\in V} \\deg v = 2|E|. Tienen sentido para cualquier conjunto finito, y para los infinitos cuando la serie converge absolutamente, ya que no se presupone ningún orden. Para varias condiciones usa \\substack, como en \\sum_{\\substack{k \\in K \\\\ k \\ne 0}}. En modo destacado la condición se centra bajo la sigma, así que mantenla breve para evitar un hueco ancho alrededor del operador.",
  },
};

export default text;
