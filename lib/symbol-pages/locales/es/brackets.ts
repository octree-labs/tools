import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/brackets/<slug>. */
const text: SymbolPageTranslations = {
  "angle-bracket-left": {
    name: "Corchete angular izquierdo",
    meaning: "Corchete angular de apertura, usado para productos internos, valores esperados y subgrupos generados.",
    usage: "El corchete angular izquierdo abre notaciones como el producto interno \\langle u, v \\rangle, un bra-ket \\langle \\psi | \\phi \\rangle, el subgrupo \\langle g \\rangle o un promedio temporal \\langle x \\rangle. Nunca uses para esto el signo menor que <: es una relación con espaciado amplio y la forma equivocada. Funciona con \\left y \\right para el tamaño automático, y con \\big, \\Big y similares para tamaños manuales. Emparéjalo siempre con \\rangle; si solo necesitas que se vea un lado, usa \\left. o \\right. como pareja invisible.",
  },
  "angle-bracket-right": {
    name: "Corchete angular derecho",
    meaning: "Corchete angular de cierre que termina productos internos, kets, promedios y otras notaciones con corchetes angulares.",
    usage: "\\rangle cierra lo que abre \\langle: \\langle f, g \\rangle en espacios de Hilbert, el ket de Dirac |\\psi\\rangle y presentaciones como \\langle a, b \\mid a^2 = b^3 \\rangle. El signo mayor que > no sirve como sustituto, ya que es una relación con espacio adicional alrededor y un ángulo más abierto. Cuando el contenido es alto, como con fracciones o sumas, usa \\left\\langle ... \\right\\rangle para que ambos lados crezcan a la vez. Un ket aislado se escribe |\\psi\\rangle y no necesita un \\langle correspondiente.",
  },
  "angle-brackets": {
    name: "Corchetes angulares",
    meaning: "Encierra una expresión entre corchetes angulares, para promedios, productos internos o el subespacio generado.",
    usage: "Esta pareja se usa para valores esperados en física, \\langle E \\rangle, para productos internos \\langle x, y \\rangle y para el subgrupo o ideal generado por unos elementos, \\langle a \\rangle. Para argumentos altos pasa a \\left\\langle \\frac{a}{b} \\right\\rangle. Si escribes productos internos a menudo, define una macro, por ejemplo con una herramienta de delimitadores emparejados, para que el tamaño sea coherente. En la notación de Dirac muchos prefieren un conjunto específico de macros bra-ket, porque el espaciado alrededor de la barra vertical dentro de \\langle \\phi | \\psi \\rangle puede ser irregular; \\mid añade espaciado de relación, mientras que | no añade ninguno.",
  },
  "ceiling-left": {
    name: "Techo izquierdo",
    meaning: "Corchete de techo izquierdo, la mitad de apertura de la función techo, que redondea hacia arriba a un entero.",
    usage: "\\lceil abre la notación de techo \\lceil x \\rceil, el menor entero mayor o igual que x. Es un delimitador, así que funciona con \\left\\lceil ... \\right\\rceil para contenido alto como \\frac{n}{2}, y con tamaños al estilo de \\big. El corchete de techo tiene el trazo horizontal arriba, mientras que el de suelo \\lfloor lo tiene abajo, una pareja fácil de confundir al revisar pruebas. Algunos autores usan también \\lceil y \\rceil como comillas de esquina para la numeración de Gödel, donde \\ulcorner es una alternativa.",
  },
  "ceiling-right": {
    name: "Techo derecho",
    meaning: "Corchete de techo derecho, que cierra la notación de la función techo para redondear hacia arriba.",
    usage: "Empareja \\rceil con \\lceil para escribir \\lceil \\log_2 n \\rceil, el número de bits necesarios en muchos algoritmos, o \\lceil n/k \\rceil para el número de bloques de tamaño k necesarios para cubrir n elementos. A diferencia de los paréntesis, el techo no tiene equivalente ASCII, así que el comando es la única forma de obtener el símbolo. Usa \\right\\rceil cuando el corchete izquierdo correspondiente se haya puesto con \\left. Si escribes techos a menudo, una macro de delimitadores emparejados como \\ceil{x} mantiene los tamaños coherentes en todo el documento.",
    example: "\\text{bloques} = \\lceil n / k \\rceil",
  },
  "ceiling": {
    name: "Función techo",
    meaning: "Redondea x hacia arriba al menor entero mayor o igual que x: la función techo.",
    usage: "Los techos aparecen en el análisis de algoritmos (\\lceil \\log_2 n \\rceil comparaciones, \\lceil n/2 \\rceil en la ordenación por mezcla), en teoría de números y en problemas de conteo como el principio del palomar, donde alguna caja contiene al menos \\lceil n/k \\rceil elementos. Para entradas negativas recuerda que \\lceil -2.5 \\rceil = -2. Cuando el argumento sea una fracción o una expresión alta, usa \\left\\lceil ... \\right\\rceil para que los corchetes crezcan. No lo sustituyas por corchetes [x]: los textos antiguos usaban [x] para el suelo, lo que lo vuelve ambiguo.",
  },
  "floor-left": {
    name: "Suelo izquierdo",
    meaning: "Corchete de suelo izquierdo, la mitad de apertura de la función suelo, que redondea hacia abajo a un entero.",
    usage: "\\lfloor abre notaciones como \\lfloor x \\rfloor y \\lfloor n/2 \\rfloor. El corchete de suelo tiene la barra abajo, a diferencia de \\lceil, cuya barra está arriba. Como delimitador, su tamaño puede ajustarse con \\left\\lfloor o \\bigl\\lfloor. En teoría de números el mismo corchete aparece en fórmulas como la fórmula de Legendre para la potencia de un primo que divide a n!. Si tu fuente o tu visor muestra un corchete recto normal, comprueba que escribiste \\lfloor y no [, que es un glifo distinto.",
  },
  "floor-right": {
    name: "Suelo derecho",
    meaning: "Corchete de suelo derecho, que cierra la notación de la función suelo para redondear hacia abajo.",
    usage: "Cierra cualquier \\lfloor con \\rfloor, por ejemplo en \\lfloor x \\rfloor o en la división entera \\lfloor a/b \\rfloor que muchos lenguajes de programación implementan para operandos positivos. Si el corchete izquierdo se puso con \\left\\lfloor, el derecho debe ser \\right\\rfloor dentro del mismo grupo matemático, o LaTeX informará de que falta un \\right. La pareja también se usa para redondear al entero más cercano mediante \\lfloor x + 1/2 \\rfloor. Una macro de delimitadores emparejados como \\floor{x} mantiene la notación coherente en documentos largos.",
  },
  "floor": {
    name: "Función suelo",
    meaning: "Redondea x hacia abajo al mayor entero menor o igual que x: la función suelo.",
    usage: "El suelo aparece en la división entera, en la parte fraccionaria \\{x\\} = x - \\lfloor x \\rfloor, en el punto medio de la búsqueda binaria \\lfloor (lo + hi)/2 \\rfloor y en sumas de teoría de números como la fórmula de Legendre. Para números negativos redondea alejándose de cero: \\lfloor -2.5 \\rfloor = -3, lo que difiere del truncamiento. La literatura antigua escribía [x] para el suelo (el corchete de Gauss), pero hoy se prefiere la notación con corchetes de suelo porque no es ambigua. Usa \\left\\lfloor ... \\right\\rfloor alrededor de fracciones para que los corchetes se ajusten a la altura del contenido.",
  },
  "double-vertical-bar": {
    name: "Doble barra vertical",
    meaning: "Doble barra vertical, el delimitador de las normas y, en algunos contextos, el símbolo de paralelismo.",
    usage: "\\| imprime dos líneas verticales y se usa sobre todo por parejas para normas, \\|x\\|. Como símbolo suelto tiene espaciado ordinario, así que cuando quieras expresar la relación «es paralelo a» usa \\parallel, que añade espaciado de relación. Para las normas se recomiendan \\lVert y \\rVert, porque indican a LaTeX qué lado abre y cuál cierra, lo que da un espaciado correcto junto a operadores y signos menos. Su tamaño puede ajustarse con \\left\\| ... \\right\\| o \\big\\|. En modo texto \\| no produce las barras; usa \\textbardbl o pasa al modo matemático.",
  },
  "norm": {
    name: "Norma",
    meaning: "Encierra un vector o una función entre barras dobles para denotar su norma, es decir, su longitud o tamaño.",
    usage: "Las normas están en todas partes en análisis y álgebra lineal: la norma euclídea \\|x\\|_2, la norma del supremo \\|f\\|_\\infty, la norma de Frobenius \\|A\\|_F y la desigualdad triangular \\|x + y\\| \\le \\|x\\| + \\|y\\|. Un subíndice tras la barra de cierre indica de qué norma se trata. Escribir \\lVert x \\rVert en lugar de \\| x \\| da un mejor espaciado en expresiones como \\|{-x}\\|, porque así LaTeX conoce el papel de cada barra. Para contenido alto, como fracciones dentro de la norma, usa \\left\\| ... \\right\\|. Las barras simples |x| se reservan para los valores absolutos.",
  },
  "double-bracket-left": {
    name: "Corchete doble izquierdo",
    meaning: "Corchete recto doble (hueco) izquierdo, usado para corchetes semánticos, intervalos de enteros y la notación de Iverson.",
    usage: "En la semántica de lenguajes de programación, \\llbracket e \\rrbracket denota el significado de una expresión, como en la semántica denotacional. Los textos de tradición francesa y la combinatoria escriben \\llbracket 1, n \\rrbracket para el intervalo de enteros \\{1, \\dots, n\\}, y algunos autores lo usan para el corchete de Iverson. El comando no está en el núcleo de LaTeX ni en las fuentes de símbolos de la AMS, así que necesita un paquete de símbolos que lo proporcione; KaTeX lo admite directamente. Solo crece con paquetes que ofrezcan versiones extensibles, así que para contenido alto comprueba tu configuración. Emparéjalo con \\rrbracket.",
  },
  "double-bracket-right": {
    name: "Corchete doble derecho",
    meaning: "Corchete recto doble derecho, que cierra la notación de corchete semántico o de intervalo de enteros.",
    usage: "Cierra \\llbracket con \\rrbracket para escribir \\llbracket P \\rrbracket_\\sigma, el significado del programa P en el estado \\sigma, o el rango de enteros \\llbracket a, b \\rrbracket. No lo imites con ]] ni con ]\\!], que dan una forma y un espaciado distintos de los del glifo de corchete hueco. Los autores que usan muchos corchetes semánticos suelen definir una macro como \\sem{e} para poder cambiar el estilo del corchete en un solo lugar, por ejemplo pasando a [\\![ e ]\\!] si la fuente de corchetes dobles no está disponible.",
  },
  "double-brackets": {
    name: "Corchetes dobles",
    meaning: "Envuelve una expresión entre corchetes rectos dobles, para la semántica denotacional o intervalos de enteros.",
    usage: "Esta pareja de corchetes da la función semántica en semántica formal, \\llbracket x \\rrbracket_\\rho para el valor de x en el entorno \\rho, y el intervalo discreto \\llbracket m, n \\rrbracket en combinatoria. También aparece en el corchete de Iverson y en la notación de salto para discontinuidades en EDP numéricas, \\llbracket u \\rrbracket = u^+ - u^-. Como el glifo no está en las fuentes predeterminadas, el código necesita un paquete de símbolos; consulta la nota sobre paquetes de esta página. Los trazos huecos lo distinguen visualmente de los corchetes ordinarios anidados.",
  },
  "parentheses": {
    name: "Paréntesis",
    meaning: "Paréntesis que crecen automáticamente hasta la altura de lo que encierran.",
    usage: "\\left( y \\right) miden su contenido y eligen un tamaño acorde, de modo que \\left( \\frac{a}{b} \\right)^2 recibe paréntesis altos mientras que un simple (x) se queda pequeño. Todo \\left necesita un \\right en el mismo grupo, y un salto de línea dentro de align no puede separarlos. Abusar de ellos hace que las expresiones sencillas parezcan pesadas, y \\left...\\right añade un poco de espacio extra como átomo interno, lo que puede hacer que f\\left(x\\right) se vea holgado; para los argumentos de funciones, \\bigl( ... \\bigr) o los paréntesis simples suelen ser mejores. Se ajustan al elemento más alto, incluidos los límites de los sumatorios.",
  },
  "square-brackets": {
    name: "Corchetes",
    meaning: "Corchetes que se ajustan a su contenido, para agrupar, conmutadores o intervalos cerrados.",
    usage: "Los corchetes sirven como siguiente nivel de agrupación por fuera de los paréntesis, para el intervalo cerrado [a, b], el conmutador [A, B] = AB - BA, la esperanza \\mathbb{E}[X] y las matrices. Con \\left[ ... \\right] los corchetes se estiran alrededor de fracciones, integrales o matrices, como en \\left[ \\frac{x^2}{2} \\right]_0^1 para primitivas evaluadas. Dentro de un entorno bmatrix los corchetes ya vienen incluidos, así que no necesitas \\left[ por tu cuenta. Para corchetes anidados en una expresión larga, los tamaños manuales como \\Bigl[ ... \\Bigr] dan un control más fino.",
  },
  "curly-braces": {
    name: "Llaves",
    meaning: "Llaves que se estiran hasta la altura del contenido, para la notación de conjuntos por comprensión y definiciones agrupadas.",
    usage: "Las llaves deben escaparse como \\{ y \\}, porque las llaves sin escapar son caracteres de agrupación de LaTeX y no imprimen nada. Con \\left\\{ ... \\right\\} crecen alrededor de contenido alto como \\left\\{ \\frac{p}{q} : q \\neq 0 \\right\\}. Para una barra de conjunto por comprensión que también crezca, usa \\middle| entre ellas. Para definiciones a trozos, el entorno cases ya dibuja la llave izquierda, así que no necesitas \\left\\{ ... \\right. a mano. En modo texto, usa \\textbraceleft o simplemente \\{ dentro de una fórmula.",
  },
  "vertical-bar": {
    name: "Barras verticales",
    meaning: "Barras verticales que cambian de tamaño según su contenido, para valores absolutos y determinantes.",
    usage: "Usa \\left| ... \\right| cuando un valor absoluto contenga una fracción o una suma, como en \\left| \\frac{a}{b} \\right|, y para determinantes de matrices altas (aunque vmatrix es más sencillo). Para LaTeX, una | simple es ambigua: no distingue una barra de apertura de una de cierre, lo que puede estropear el espaciado alrededor de un signo menos inicial. Para obtener resultados coherentes define una macro con \\lvert y \\rvert, o usa \\left\\lvert ... \\right\\rvert. Para los separadores de conjuntos por comprensión y las probabilidades condicionadas, usa \\mid o \\middle|.",
  },
  "big-parentheses": {
    name: "Paréntesis grandes",
    meaning: "Paréntesis fijados en el segundo escalón de tamaño, mayores que \\big pero menores que \\bigg.",
    usage: "TeX ofrece cuatro tamaños manuales: \\big, \\Big, \\bigg y \\Bigg. \\Big( se ajusta alrededor de fracciones sueltas o sumas con límites pequeños y, a diferencia de \\left, no examina el contenido, así que puede abarcar saltos de línea en entornos de varias líneas y da resultados predecibles. Para un espaciado correcto, usa \\Bigl( para abrir y \\Bigr) para cerrar, ya que un \\Big a secas produce un átomo ordinario. Los tamaños manuales suelen ser preferibles a \\left...\\right en los argumentos de funciones, donde \\left añade espacio extra. Los tamaños son fijos, así que no se reducen en los subíndices.",
  },
  "bigg-parentheses": {
    name: "Paréntesis muy grandes",
    meaning: "El mayor de los cuatro tamaños manuales de delimitadores de TeX, para contenido muy alto como fracciones anidadas.",
    usage: "\\Bigg( produce paréntesis de aproximadamente dos veces y media el tamaño normal, adecuados alrededor de fracciones apiladas, integrales grandes con límites o sumas de fracciones. Como el tamaño es fijo, resulta predecible entre las líneas de un align, donde \\left y \\right no pueden separarse. Usa \\Biggl y \\Biggr para el espaciado correcto de apertura y cierre. Si el contenido es aún más alto, \\left( ... \\right) puede crecer más allá de \\Bigg usando piezas extensibles. La secuencia de menor a mayor es \\big, \\Big, \\bigg, \\Bigg.",
  },
  "left-delimiter-with-invisible-right": {
    name: "Delimitador izquierdo con cierre invisible",
    meaning: "Muestra solo un paréntesis izquierdo redimensionable; \\right. es un delimitador de cierre invisible que completa la pareja.",
    usage: "Todo \\left debe tener su \\right, y la forma con punto \\right. permite cerrar el grupo sin imprimir nada. Esto es útil cuando una expresión entre paréntesis continúa en otra línea de un align (abre con \\left( en una línea, cierra con \\right. y vuelve a empezar con \\left. ... \\right) en la siguiente), o para llaves de un solo lado. Los tamaños de las dos mitades se calculan de forma independiente, así que añade un \\vphantom del contenido alto para igualarlos. Para funciones a trozos, el entorno cases es una opción más limpia que \\left\\{ ... \\right.",
  },
  "right-delimiter-with-invisible-left": {
    name: "Delimitador derecho con apertura invisible",
    meaning: "Imprime solo un paréntesis de cierre redimensionable; \\left. actúa como pareja de apertura invisible.",
    usage: "\\left. es la apertura invisible que permite a \\right) ajustar su tamaño al contenido. Un uso habitual es la barra de evaluación \\left. \\frac{df}{dx} \\right|_{x=0}, donde solo debe aparecer y estirarse la línea vertical de la derecha. También sirve para terminar un paréntesis que se abrió en una línea anterior de una ecuación de varias líneas. Como cada mitad se dimensiona por separado, inserta \\vphantom{...} con la pieza más alta de la otra línea para igualar las alturas. El punto en sí no se imprime, pero sí añade el pequeño espacio del delimitador nulo.",
  },
  "half-open-interval-brackets": {
    name: "Corchetes de intervalo semiabierto",
    meaning: "Combina un corchete izquierdo con un paréntesis derecho, la notación de un intervalo semiabierto.",
    usage: "\\left y \\right no tienen por qué coincidir en forma, así que \\left[ ... \\right) escribe el intervalo semiabierto [a, b), cerrado en a y abierto en b, habitual en probabilidad (las funciones de distribución acumulada son continuas por la derecha en [x, \\infty)) y en teoría de la medida. Las parejas mixtas también sirven para (a, b], que se escribe \\left( ... \\right]. Para intervalos sencillos basta con [0, 1) sin \\left/\\right, que queda más limpio. Algunos textos europeos usan en su lugar corchetes invertidos, como en [a, b[, que puedes escribir directamente.",
  },
};

export default text;
