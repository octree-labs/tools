import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/topology/<slug>. */
const text: SymbolPageTranslations = {
  "aleph-null": {
    name: "Álef cero",
    meaning: "Álef cero, el cardinal de los números naturales y el menor cardinal infinito.",
    usage: "Todo conjunto que pueda enumerarse como una sucesión, como \\mathbb{Z} o \\mathbb{Q}, tiene cardinal \\aleph_0, y una aritmética como \\aleph_0 + \\aleph_0 = \\aleph_0 \\cdot \\aleph_0 = \\aleph_0 muestra cómo los cardinales infinitos absorben a los demás. El argumento diagonal de Cantor demuestra que 2^{\\aleph_0} > \\aleph_0, así que los reales son estrictamente más numerosos. \\aleph está disponible sin paquetes adicionales y se comporta como un símbolo ordinario, de modo que el subíndice se coloca directamente. Algunos textos antiguos escriben \\omega para el ordinal correspondiente; mantén separados cardinales y ordinales en tu notación.",
  },
  "aleph-one": {
    name: "Álef uno",
    meaning: "Álef uno, el primer cardinal no numerable: el siguiente tamaño infinito después del numerable.",
    usage: "La hipótesis del continuo afirma que 2^{\\aleph_0} = \\aleph_1, es decir, que ningún conjunto tiene un tamaño estrictamente comprendido entre los enteros y los reales; Gödel y Cohen demostraron que es independiente de ZFC. No escribas |\\mathbb{R}| = \\aleph_1 como un hecho, ya que es justamente la suposición en cuestión; usa \\mathfrak{c} o 2^{\\aleph_0} para el continuo. \\aleph_1 es también el cardinal de \\omega_1, el conjunto de los ordinales numerables. Los álef mayores siguen el patrón \\aleph_\\alpha con subíndices ordinales, y el subíndice necesita llaves si ocupa más de un token.",
  },
  "beth": {
    name: "Bet",
    meaning: "Letra hebrea bet, usada para los números bet: conjuntos potencia iterados a partir del cardinal numerable.",
    usage: "La sucesión bet se define mediante \\beth_0 = \\aleph_0 y \\beth_{\\alpha+1} = 2^{\\beth_\\alpha}, de modo que \\beth_1 es el cardinal de los reales y \\beth_2 el de todas las funciones reales. La hipótesis generalizada del continuo es el enunciado \\aleph_\\alpha = \\beth_\\alpha para todo ordinal. Junto a \\aleph, el conjunto ampliado de símbolos de LaTeX ofrece \\beth, \\gimel y \\daleth, las letras hebreas segunda a cuarta. Como \\aleph, es un símbolo ordinario, así que los subíndices se colocan directamente; rara vez aparece fuera de la teoría de conjuntos.",
  },
  "weierstrass-p": {
    name: "P de Weierstrass",
    meaning: "P de estilo caligráfico para la función elíptica de Weierstrass, una función meromorfa doblemente periódica.",
    usage: "La función de Weierstrass \\wp(z) satisface (\\wp')^2 = 4\\wp^3 - g_2 \\wp - g_3, razón por la cual parametriza curvas elípticas. El glifo es una p manuscrita especial que no pertenece a ninguna familia tipográfica, así que \\mathcal{P} o \\mathscr{P} son símbolos distintos. Algunos autores usan \\wp para el conjunto potencia, pero \\mathcal{P}(X) es la opción más habitual y evita el choque con la función elíptica. La notación con prima funciona como de costumbre, \\wp'(z), y el símbolo baja ligeramente por debajo de la línea base, como un trazo descendente.",
  },
  "fraktur-r-real-part-symbol": {
    name: "R fraktur (símbolo de parte real)",
    meaning: "R mayúscula fraktur, el símbolo clásico para tomar la parte real de una cantidad compleja.",
    usage: "Por sí solo, \\Re es simplemente un glifo, no un operador, así que no se añade espacio automático antes del argumento; ponle detrás paréntesis o llaves, como en \\Re(s) > 1 para el semiplano donde converge la serie de la función zeta de Riemann. Los especialistas en teoría analítica de números usan exactamente este estilo. Si prefieres otro aspecto, redefínelo con \\renewcommand{\\Re}{\\operatorname{Re}} en el preámbulo para que todas las apariciones cambien a la vez. Ten en cuenta que \\Re es distinto de \\mathfrak{R}, que produce una R fraktur de otra fuente y se ve ligeramente diferente.",
  },
  "fraktur-i-imaginary-part-symbol": {
    name: "I fraktur (símbolo de parte imaginaria)",
    meaning: "I mayúscula fraktur, el glifo tradicional para la parte imaginaria de un número complejo.",
    usage: "La integración de contorno y la teoría espectral usan \\Im para descomponer cantidades: la parte imaginaria de una función de Green da la densidad de estados, y \\Im \\tau > 0 define el semiplano superior modular. Como con \\Re, el comando solo imprime un símbolo, así que debes añadir los paréntesis. A muchos lectores las letras fraktur les resultan fáciles de confundir, y redefinirlo con \\renewcommand{\\Im}{\\operatorname{Im}} cambia a un «Im» recto. Si tu texto también usa la imagen de un homomorfismo, escríbela con \\operatorname{im} en minúscula para distinguir ambas.",
  },
  "calligraphic-o": {
    name: "O caligráfica",
    meaning: "O caligráfica, usada para una familia de abiertos en topología y para otras diversas estructuras.",
    usage: "Un espacio topológico suele escribirse (X, \\mathcal{O}), con \\mathcal{O} la colección de conjuntos abiertos, aunque \\tau es igual de común. La misma letra tiene muchas otras funciones: la notación asintótica O grande \\mathcal{O}(n \\log n), el haz estructural \\mathcal{O}_X en geometría algebraica y el anillo de enteros \\mathcal{O}_K de un cuerpo de números. \\mathcal solo admite letras mayúsculas en las fuentes estándar. Para la notación asintótica muchas guías de estilo prefieren una O cursiva normal, así que elige una y aplícala en todo el documento.",
  },
  "interior": {
    name: "Interior",
    meaning: "Interior de A, la unión de todos los abiertos contenidos en A; se escribe con un pequeño círculo como superíndice.",
    usage: "El interior es el mayor subconjunto abierto de A, y se relaciona con la clausura mediante \\partial A = \\overline{A} \\setminus A^{\\circ}. El superíndice \\circ es el anillo de composición colocado arriba; no debe confundirse con un signo de grado en unidades. Otras notaciones comunes son \\operatorname{int} A y \\mathring{A}, esta última con el anillo directamente sobre la letra; \\mathring encaja mejor con letras sueltas con subíndices como U_1. Para un intervalo cerrado, [a, b]^{\\circ} = (a, b).",
  },
  "exterior": {
    name: "Exterior",
    meaning: "Exterior de un conjunto A: el interior de su complemento, formado por los puntos que tienen un entorno disjunto de A.",
    usage: "Todo espacio se divide en tres partes disjuntas, el interior, la frontera y el exterior de A, y \\text{ext}(A) = (X \\setminus A)^{\\circ}. Escribir ext en modo matemático sin envoltorio produce las letras cursivas e, x, t multiplicadas entre sí, así que hace falta algún envoltorio. \\text hereda la fuente circundante, por lo que se vuelve cursiva dentro de un teorema; \\operatorname{ext} se mantiene recta y da espaciado de operador, y \\DeclareMathOperator{\\ext}{ext} permite reutilizarlo. Ten en cuenta que ext también abrevia el álgebra exterior y los grupos Ext del álgebra homológica.",
  },
  "boundary-operator": {
    name: "Operador frontera",
    meaning: "Frontera de A: los puntos cuyos entornos cortan a la vez a A y a su complemento.",
    usage: "La frontera de un disco es su circunferencia, y la frontera de los racionales en los reales es todo, \\partial \\mathbb{Q} = \\mathbb{R}. El mismo símbolo \\partial es el operador borde en topología algebraica, \\partial_n : C_n \\to C_{n-1} con \\partial \\circ \\partial = 0, y aparece en el teorema de Stokes \\int_{\\partial M} \\omega = \\int_M d\\omega. Algunos textos escriben en su lugar \\operatorname{Fr} A o \\operatorname{bd} A. Como \\partial es un símbolo ordinario, nada lo separa del nombre del conjunto; ese aspecto compacto es la convención buscada.",
  },
  "direct-limit": {
    name: "Límite directo",
    meaning: "Límite directo (colímite) de un sistema dirigido, compuesto como «lim» con una flecha hacia la derecha debajo.",
    usage: "Los límites directos construyen objetos como \\mathbb{Q} = \\varinjlim \\frac{1}{n}\\mathbb{Z} o el tallo de un haz, \\mathcal{F}_x = \\varinjlim_{U \\ni x} \\mathcal{F}(U). En modo display, el conjunto de índices va bajo la flecha; en línea va al lado. El paquete amsmath también ofrece \\injlim, que imprime «inj lim» con palabras, así que elige la forma que use tu campo. Quienes trabajan en teoría de categorías suelen escribir \\operatorname*{colim}, ya que los límites directos son un caso particular de los colímites. Su equivalente para sistemas inversos es \\varprojlim.",
  },
  "inverse-limit": {
    name: "Límite inverso",
    meaning: "Límite inverso (proyectivo) de un sistema, mostrado como «lim» con una flecha hacia la izquierda debajo.",
    usage: "Los enteros p-ádicos son el ejemplo clásico, \\mathbb{Z}_p = \\varprojlim \\mathbb{Z}/p^n\\mathbb{Z}, y los grupos profinitos, como los grupos de Galois, son límites inversos de grupos finitos. Como con \\lim, el subíndice va debajo en estilo display. La alternativa \\projlim imprime las palabras «proj lim» sin flecha. La teoría de categorías lo generaliza a un límite arbitrario, que suele escribirse \\lim. Asegúrate de que las flechas apunten en el sentido correcto: \\varprojlim lleva la flecha hacia la izquierda y corresponde a aplicaciones que descienden por el sistema, y \\varinjlim la flecha hacia la derecha.",
  },
  "quotient": {
    name: "Cociente",
    meaning: "Cociente de A por B: un grupo, anillo, módulo o espacio en el que B se colapsa o se factoriza.",
    usage: "Los cocientes aparecen como \\mathbb{Z}/n\\mathbb{Z}, G/H para clases laterales y X/A para colapsar un subespacio a un punto. En modo matemático, / es un símbolo ordinario sin espacio alrededor, que es el aspecto estándar. Para un cociente por una relación de equivalencia, pon la tilde entre llaves, X/{\\sim}; de lo contrario, \\sim recibe espaciado de relación y deja un hueco. Con operandos altos, las construcciones \\big/ o \\left. \\middle/ \\right. mantienen la barra en proporción. No uses \\setminus aquí: es la diferencia de conjuntos, una operación distinta. Indica qué estructura tiene el cociente, ya que G/H solo es un grupo cuando H es normal.",
  },
  "fundamental-group": {
    name: "Grupo fundamental",
    meaning: "Grupo fundamental de un espacio: clases de homotopía de lazos en un punto base, con la concatenación como producto.",
    usage: "El cálculo estándar \\pi_1(S^1) \\cong \\mathbb{Z} cuenta cuántas veces un lazo da la vuelta a la circunferencia, y un espacio con \\pi_1 trivial se llama simplemente conexo. Escribe explícitamente el punto base, \\pi_1(X, x_0), cuando importe; para espacios conexos por caminos a menudo se omite. Los grupos de homotopía superiores siguen el mismo patrón, \\pi_n(X). Usa \\cong para el isomorfismo en lugar de =. Si \\pi también denota el número pi o una proyección en el mismo documento, considera si los lectores podrían confundirlos.",
  },
  "homology": {
    name: "Homología",
    meaning: "n-ésimo grupo de homología de un espacio o complejo de cadenas, que mide los agujeros n-dimensionales.",
    usage: "Para las esferas, H_n(S^n) \\cong \\mathbb{Z}, mientras que H_k(S^n) = 0 para 0 < k < n, y la característica de Euler es la suma alternada de los rangos de los H_n. Los coeficientes se escriben tras un punto y coma, H_n(X; \\mathbb{Z}/2), y la homología relativa como H_n(X, A). Los subíndices indican homología y los superíndices cohomología, así que no los confundas. Las variantes se marcan con decoraciones: homología reducida \\tilde{H}_n, homología singular H_n^{\\mathrm{sing}}. En álgebra homológica se define como \\ker \\partial_n / \\operatorname{im} \\partial_{n+1}. Las sucesiones exactas largas de estos grupos suelen dibujarse como diagramas conmutativos.",
  },
  "cohomology": {
    name: "Cohomología",
    meaning: "n-ésimo grupo de cohomología, la teoría dual de la homología, dotada de estructura de anillo mediante el producto cup.",
    usage: "La cohomología de De Rham H^n_{\\mathrm{dR}}(M) clasifica las formas diferenciales cerradas módulo las exactas, y el producto cup \\smile convierte H^\\ast(X) en un anillo graduado. Combinar un superíndice y un subíndice, como en H^n_{\\mathrm{dR}}, los apila de forma ordenada; usa \\mathrm para etiquetas que son palabras y no variables. El índice superior la distingue de la homología H_n, una convención que conviene respetar. La cohomología de grupos H^n(G, M) y la cohomología de haces H^n(X, \\mathcal{F}) usan el mismo símbolo con argumentos distintos. La dualidad de Poincaré relaciona H^k y H_{n-k} en variedades n-dimensionales cerradas y orientadas, lo que explica por qué ambas notaciones aparecen a menudo juntas.",
  },
  "calligraphic-c-category": {
    name: "C caligráfica (categoría)",
    meaning: "C caligráfica, el nombre por defecto de una categoría arbitraria; también se usa para conjuntos de restricciones o conjuntos factibles.",
    usage: "La teoría de categorías escribe los objetos como X \\in \\mathcal{C} y los conjuntos de morfismos como \\operatorname{Hom}_{\\mathcal{C}}(X, Y), y una segunda categoría suele llamarse \\mathcal{D}. Las categorías concretas a menudo se componen en negrita o sin serifa, como \\mathbf{Set} o \\mathsf{Grp}, para separar los nombres de las variables. En optimización se usa \\mathcal{C} para un conjunto factible convexo, como en \\min_{x \\in \\mathcal{C}} f(x). \\mathcal solo proporciona mayúsculas en las fuentes por defecto; \\mathscr ofrece un estilo manuscrito más ornamentado si necesitas una segunda familia.",
  },
  "calligraphic-f-functor": {
    name: "F caligráfica (funtor)",
    meaning: "F caligráfica, que con frecuencia nombra un funtor entre categorías, un haz, una sigma-álgebra o una transformada.",
    usage: "Un funtor \\mathcal{F} \\colon \\mathcal{C} \\to \\mathcal{D} envía objetos y morfismos preservando la composición. Fuera de la teoría de categorías, la misma letra es un haz \\mathcal{F}(U), una sigma-álgebra o filtración (\\mathcal{F}_t en probabilidad) o la transformada de Fourier \\mathcal{F}\\{f\\}. Debido a esta sobrecarga, introduce la letra de forma explícita. Usa \\colon en lugar de : al escribir la signatura del funtor, para obtener espaciado de puntuación. Muchos autores reservan F y G en cursiva normal para los funtores y dejan las letras caligráficas para los haces. Una transformación natural entre dos funtores suele escribirse \\eta \\colon \\mathcal{F} \\Rightarrow \\mathcal{G}.",
  },
};

export default text;
