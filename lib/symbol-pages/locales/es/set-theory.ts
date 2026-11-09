import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/set-theory/<slug>. */
const text: SymbolPageTranslations = {
  "empty-set-variant": {
    name: "Conjunto vacío (variante)",
    meaning: "Símbolo variante del conjunto vacío: un círculo redondo con una barra diagonal, el conjunto sin elementos.",
    usage: "\\varnothing y \\emptyset significan lo mismo, el conjunto vacío, pero tienen un aspecto distinto: \\emptyset en Computer Modern es un cero estrecho y alto con una barra, mientras que \\varnothing es un círculo redondo con una barra que muchos matemáticos prefieren. Usa uno de forma coherente, por ejemplo A \\cap B = \\varnothing para conjuntos disjuntos. No es la letra griega \\phi ni \\varphi, ni la letra escandinava \\O, así que evita usarlas como sustitutos. Algunos autores redefinen \\emptyset como \\varnothing en el preámbulo para que todas las apariciones cambien a la vez.",
  },
  "contains": {
    name: "Superconjunto",
    meaning: "Relación de pertenencia invertida: el conjunto de la izquierda contiene el elemento de la derecha.",
    usage: "A \\ni x dice lo mismo que x \\in A, con el conjunto en primer lugar, lo que resulta natural en expresiones como un entorno U \\ni x. Los textos antiguos y algunos lógicos también usaban \\ni para «tal que», aunque hoy lo estándar es \\mid o dos puntos. \\owns es un alias de \\ni. Se niega con \\not\\ni. No lo confundas con la letra épsilon ni con un \\in girado a mano; \\ni es una relación propiamente dicha, con el espaciado correspondiente.",
  },
  "not-subset": {
    name: "No inclusión",
    meaning: "Signo de subconjunto tachado: el conjunto de la izquierda no es subconjunto del de la derecha.",
    usage: "\\not\\subset superpone una barra a \\subset mediante el prefijo genérico \\not. El resultado es aceptable, aunque la barra a veces queda descentrada; los glifos dedicados \\nsubseteq (no es subconjunto ni igual) y \\nsubset, presente en algunos paquetes de símbolos, se ven mejor. Como el propio \\subset es ambiguo entre la inclusión estricta y la no estricta, \\nsubseteq suele ser la negación más clara. Ejemplo: \\mathbb{Q} \\not\\subset \\mathbb{Z}, porque 1/2 es racional pero no entero. Escribe \\not justo antes de la relación, sin espacio ni llaves, para que se combinen correctamente.",
    example: "\\mathbb{Q} \\not\\subset \\mathbb{Z} \\text{ ya que } \\tfrac{1}{2} \\notin \\mathbb{Z}",
  },
  "big-union": {
    name: "Unión grande",
    meaning: "Operador grande de unión para la unión de una familia indexada de conjuntos, con límites encima y debajo.",
    usage: "\\bigcup_{i=1}^{\\infty} A_i escribe una unión numerable, y \\bigcup_{\\alpha \\in I} U_\\alpha una unión sobre un conjunto de índices, como en los recubrimientos abiertos. Se comporta como \\sum: los límites van debajo y encima en estilo display y al costado en línea, y \\limits los fuerza debajo en línea. No lo uses entre dos conjuntos; A \\cup B usa el \\cup binario. Entre los operadores grandes relacionados están \\bigcap, \\bigsqcup para uniones disjuntas y \\biguplus para la unión de multiconjuntos. Las leyes de De Morgan lo relacionan con \\bigcap y los complementarios.",
  },
  "big-intersection": {
    name: "Intersección grande",
    meaning: "Operador grande de intersección para intersecar una familia indexada de conjuntos.",
    usage: "\\bigcap_{n=1}^{\\infty} (0, 1/n) = \\varnothing es un ejemplo estándar, y en topología se escribe \\bigcap_{\\alpha} F_\\alpha para intersecciones de cerrados. Como los demás operadores grandes, sus límites se sitúan debajo y encima en modo display y a su lado en línea, y aumenta de tamaño en estilo display. Para dos conjuntos usa en su lugar el \\cap binario. Los intervalos encajados, el conjunto de Cantor \\bigcap_n C_n y la definición de la sigma-álgebra generada como la intersección de todas las sigma-álgebras que lo contienen lo usan.",
  },
  "complement": {
    name: "Complementario",
    meaning: "Símbolo de complementario, normalmente como superíndice de un conjunto para denotar todos los elementos que quedan fuera de él.",
    usage: "A^\\complement denota el complementario de A respecto de un universo, de modo que A \\cup A^\\complement = U. Es un símbolo ordinario con forma de C estilizada. Las alternativas habituales son A^c, A' y \\overline{A}, pero la barra puede confundirse con la clausura topológica y la prima con las derivadas, así que \\complement no da lugar a ambigüedad. Escríbelo como superíndice; aislado rara vez aparece. La ley de De Morgan, (A \\cup B)^\\complement = A^\\complement \\cap B^\\complement, es un uso clásico.",
  },
  "natural-numbers": {
    name: "Números naturales",
    meaning: "N de pizarra (negrita de pizarra), el símbolo estándar del conjunto de los números naturales 1, 2, 3, etcétera.",
    usage: "Que \\mathbb{N} incluya el 0 varía: la lógica y la informática suelen empezar en 0, mientras que la teoría de números a menudo empieza en 1, así que enuncia tu convención o escribe \\mathbb{N}_0 o bien \\mathbb{Z}_{\\ge 0} y \\mathbb{Z}_{>0}. La fuente \\mathbb, en la tipografía estándar de negrita de pizarra, solo cubre letras mayúsculas, así que \\mathbb{1} o las letras minúsculas no se mostrarán como se espera sin otro paquete de fuentes. Muchos autores definen \\newcommand{\\N}{\\mathbb{N}} para abreviar. Las sucesiones suelen escribirse (a_n)_{n \\in \\mathbb{N}}. Las demostraciones por inducción suelen comenzar con «para todo n \\in \\mathbb{N}».",
  },
  "integers": {
    name: "Números enteros",
    meaning: "Z de pizarra, el conjunto de todos los enteros: positivos, negativos y el cero.",
    usage: "La Z procede del alemán Zahlen. Entre las construcciones habituales están el grupo cíclico \\mathbb{Z}/n\\mathbb{Z}, los enteros p-ádicos \\mathbb{Z}_p (atención: algunos autores usan \\mathbb{Z}_n para el grupo cíclico), el retículo \\mathbb{Z}^n y \\mathbb{Z}[i] para los enteros de Gauss. Los subconjuntos se escriben con subíndices como \\mathbb{Z}_{\\ge 0}. \\mathbb solo funciona con letras mayúsculas en las fuentes estándar. Evita simularla con la negrita \\mathbf{Z}, que era la convención impresa antigua. En teoría de anillos, \\mathbb{Z} es el anillo inicial, y todo grupo abeliano es un \\mathbb{Z}-módulo.",
  },
  "rational-numbers": {
    name: "Números racionales",
    meaning: "Q de pizarra, el cuerpo de los números racionales (cocientes de enteros).",
    usage: "La Q viene de quotient (cociente). Aparece en extensiones de cuerpos como \\mathbb{Q}(\\sqrt{2}), en enunciados de densidad como que \\mathbb{Q} es denso en \\mathbb{R}, y en teoría algebraica de números con \\overline{\\mathbb{Q}} para los números algebraicos. Los números p-ádicos se escriben \\mathbb{Q}_p. Los racionales positivos son \\mathbb{Q}_{>0} o \\mathbb{Q}^+. Como \\mathbb solo cubre letras mayúsculas, aquí no hay problema. Definir \\newcommand{\\Q}{\\mathbb{Q}} ahorra escritura en documentos con mucha álgebra. Su clausura algebraica es numerable, mientras que su compleción respecto del valor absoluto usual da \\mathbb{R}. Los puntos racionales de las curvas se escriben C(\\mathbb{Q}).",
  },
  "real-numbers": {
    name: "Números reales",
    meaning: "R de pizarra, el conjunto de los números reales que forman la recta numérica continua.",
    usage: "\\mathbb{R}^n es el espacio euclídeo, f : \\mathbb{R} \\to \\mathbb{R} una función real, y \\mathbb{R}_{\\ge 0} o \\mathbb{R}_+ los reales no negativos (las convenciones difieren sobre si \\mathbb{R}^+ incluye el 0). Los espacios de matrices se escriben \\mathbb{R}^{m \\times n}. La recta real ampliada es \\overline{\\mathbb{R}} o [-\\infty, \\infty]. Evita \\Re, que imprime una R fraktur para la parte real de un número complejo, no para el conjunto de los reales. Muchos autores definen una macro corta \\R. Su completitud, el hecho de que todo conjunto acotado tenga supremo, es lo que lo distingue de \\mathbb{Q}.",
  },
  "complex-numbers": {
    name: "Números complejos",
    meaning: "C de pizarra, el cuerpo de los números complejos de la forma a + bi con a y b reales.",
    usage: "El análisis complejo trabaja con funciones f : \\mathbb{C} \\to \\mathbb{C}, el álgebra lineal con \\mathbb{C}^n y con matrices hermíticas en \\mathbb{C}^{n \\times n}, y la geometría algebraica con anillos de polinomios \\mathbb{C}[x]. El plano perforado es \\mathbb{C} \\setminus \\{0\\} o \\mathbb{C}^\\times, y la esfera de Riemann \\hat{\\mathbb{C}} o \\mathbb{C} \\cup \\{\\infty\\}. El teorema fundamental del álgebra dice que \\mathbb{C} es algebraicamente cerrado. No uses \\mathcal{C}, que suele denotar una categoría o una clase de funciones como C^\\infty. El espacio proyectivo complejo se escribe \\mathbb{CP}^n o \\mathbb{P}^n_\\mathbb{C}.",
  },
  "power-set": {
    name: "Conjunto potencia",
    meaning: "P caligráfica, la notación habitual del conjunto potencia (el conjunto de todos los subconjuntos) de un conjunto.",
    usage: "\\mathcal{P}(A) es el conjunto potencia, con |\\mathcal{P}(A)| = 2^{|A|} para A finito, y el teorema de Cantor dice que no existe ninguna sobreyección A \\to \\mathcal{P}(A). Algunos autores usan en su lugar \\wp, la p de Weierstrass, o 2^A. \\mathcal{P} también se usa para medidas de probabilidad, particiones o la clase P de la teoría de la complejidad, así que el contexto importa. El alfabeto caligráfico solo cubre letras mayúsculas. Para una P de aspecto más manuscrito, un comando de fuente script como \\mathscr, de un paquete adicional, es una alternativa.",
  },
  "cardinality": {
    name: "Cardinal",
    meaning: "Barras verticales alrededor de un conjunto, que dan su cardinal: el número de elementos que contiene.",
    usage: "Para conjuntos finitos, |A| cuenta los elementos, como en la fórmula de inclusión-exclusión |A \\cup B| = |A| + |B| - |A \\cap B|; para conjuntos infinitos es el número cardinal. La misma notación significa valor absoluto para los números y determinante para las matrices, así que el contexto decide. Entre las alternativas están \\#A y \\operatorname{card}(A). Para un espaciado que distinga la izquierda de la derecha, escribe \\lvert A \\rvert, y usa \\left| ... \\right| alrededor de contenidos altos como \\mathcal{P}(\\mathbb{N}). En combinatoria, |A| = |B| para conjuntos finitos suele demostrarse exhibiendo una biyección.",
  },
  "aleph": {
    name: "Álef",
    meaning: "Letra hebrea álef, usada para los números cardinales infinitos, empezando por el infinito numerable, álef cero.",
    usage: "\\aleph_0 es el cardinal de \\mathbb{N}, \\aleph_1 el cardinal siguiente, y la hipótesis del continuo afirma que 2^{\\aleph_0} = \\aleph_1. Escribe los subíndices como \\aleph_0 y no como \\aleph0. Otras letras hebreas disponibles en modo matemático son \\beth, \\gimel y \\daleth; los números bet, con \\beth_1 = 2^{\\aleph_0}, miden el continuo. \\aleph es un símbolo ordinario. No lo confundas con \\alpha ni con la N de los números naturales. El argumento diagonal de Cantor muestra que los reales son no numerables, así que su cardinal es estrictamente mayor que \\aleph_0.",
  },
};

export default text;
