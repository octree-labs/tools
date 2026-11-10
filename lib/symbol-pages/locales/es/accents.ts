import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/accents/<slug>. */
const text: SymbolPageTranslations = {
  "hat": {
    name: "Acento circunflejo (sombrero)",
    meaning: "Coloca un pequeño circunflejo sobre un carácter, para marcar estimadores, vectores unitarios o transformadas de Fourier.",
    usage: "Los estadísticos escriben \\hat{\\theta} para un estimador de \\theta y \\hat{y} para los valores ajustados en una regresión, los físicos usan \\hat{x} o \\hat{\\mathbf{n}} para vectores unitarios y operadores cuánticos, y los analistas escriben \\hat{f} para la transformada de Fourier. El acento tiene un ancho fijo, así que solo queda bien sobre un único símbolo; para varias letras pasa a \\widehat{xy}. Sobre una i o una j, usa las formas sin punto \\imath y \\jmath para que el sombrero no quede encima de un punto. En el texto corrido, fuera del modo matemático, el acento circunflejo equivalente es \\^{o}, no \\hat.",
  },
  "wide-hat": {
    name: "Circunflejo ancho",
    meaning: "Extiende un circunflejo sobre una expresión de varias letras, como la transformada de Fourier de un producto.",
    usage: "Usa \\widehat cuando el acento deba cubrir más de un glifo, por ejemplo \\widehat{f * g} = \\hat{f}\\,\\hat{g} para la convolución, \\widehat{ABC} para un ángulo en algunas tradiciones geométricas o \\widehat{G} para el grupo dual o la compleción de un grupo. En las fuentes estándar Computer Modern el sombrero solo crece hasta un ancho limitado, de modo que sobre expresiones largas deja de estirarse y se ve pequeño; en ese caso se lee mejor un superíndice como (f g)^\\wedge o un operador \\mathcal{F}\\{\\cdot\\}. Para una sola letra es preferible \\hat{x}, que se coloca con más precisión sobre los caracteres en cursiva.",
  },
  "tilde": {
    name: "Tilde",
    meaning: "Pone una pequeña tilde ondulada sobre un solo símbolo, que a menudo indica una aproximación, una transformada o una variable modificada.",
    usage: "Una tilde sobre una letra suele señalar un objeto relacionado pero alterado: \\tilde{x} para una solución perturbada o aproximada, \\tilde{f} para una transformada de Laplace u otra, \\tilde{O}(n) para la complejidad O suave que oculta factores logarítmicos, o \\tilde{X} para un recubrimiento universal en topología. Como \\hat, tiene un ancho fijo, así que sobre dos o más letras usa \\widetilde. No la confundas con \\sim, un símbolo de relación que se coloca entre términos (X \\sim N(0,1)), ni con el acento de modo texto \\~{n} usado en palabras como señor. Para letras sin punto escribe \\tilde{\\imath}.",
  },
  "wide-tilde": {
    name: "Tilde ancha",
    meaning: "Dibuja una tilde extensible sobre un grupo de símbolos, usada para recubrimientos, clausuras y expresiones modificadas.",
    usage: "Elige \\widetilde cuando la tilde deba abarcar varios caracteres, como en \\widetilde{GL}_n para un grupo recubridor, \\widetilde{AB} para un arco en algunos textos de geometría o \\widetilde{f(x)} para una función suavizada. Su ancho crece con el contenido, pero solo hasta un máximo que depende de la fuente; a partir de ahí queda centrada y se ve corta, así que para argumentos largos es más clara una notación posfija o un operador con nombre. Sobre una sola letra, \\tilde{x} ofrece una mejor colocación y un acento más pequeño. Para escribir la tilde como carácter independiente en el texto, el comando adecuado es \\textasciitilde.",
  },
  "dot": {
    name: "Punto superior",
    meaning: "Añade un punto sobre una variable, la notación de Newton para la primera derivada respecto del tiempo.",
    usage: "En mecánica y sistemas dinámicos, \\dot{x} significa dx/dt, de modo que ecuaciones como \\dot{x} = Ax o el lagrangiano L(q, \\dot{q}, t) se escriben de forma compacta. Los físicos también lo usan para tasas, como \\dot{m} para el caudal másico. El punto es un acento matemático y funciona también sobre letras griegas: \\dot{\\theta}. No lo confundas con \\cdot (un punto de multiplicación centrado) ni con el acento de modo texto \\.{z} usado en palabras polacas. Para la segunda derivada usa \\ddot{x} en lugar de apilar dos comandos \\dot, lo que desalinearía los puntos.",
  },
  "double-dot": {
    name: "Doble punto superior",
    meaning: "Coloca dos puntos sobre una variable para denotar su segunda derivada respecto del tiempo, como la aceleración.",
    usage: "La segunda ley de Newton suele escribirse m\\ddot{x} = F, y el oscilador armónico \\ddot{x} + \\omega^2 x = 0. En mecánica lagrangiana, las ecuaciones de Euler-Lagrange producen términos en \\ddot{q}. Aunque se parece a una diéresis, \\ddot es un acento matemático; para palabras alemanas o turcas en el texto usa \\\"{o}. Los puntos se centran sobre el eje inclinado del símbolo, así que sobre letras en cursiva se desplazan un poco a la derecha, lo cual es intencionado. Para la tercera derivada existe \\dddot{x}, aunque a partir de ahí es más clara la notación de Leibniz o x^{(n)}.",
  },
  "triple-dot": {
    name: "Triple punto superior",
    meaning: "Pone tres puntos sobre una variable, notación al estilo de Newton para la tercera derivada respecto del tiempo (el tirón).",
    usage: "Las terceras derivadas aparecen en planificación de movimiento y control, donde \\dddot{x} es el tirón, y en la fuerza de reacción de radiación de Abraham-Lorentz, proporcional a \\dddot{\\mathbf{x}}. Viene acompañado de \\ddddot para cuatro puntos, y ninguno de los dos forma parte del núcleo mínimo de LaTeX. Sus puntos están más juntos de lo que permitirían tres llamadas manuales a \\dot, y queda a la misma altura que \\ddot. Como tres puntos se leen mal en tamaños pequeños o en subíndices, muchos autores pasan a x^{(3)} o d^3x/dt^3 para órdenes superiores.",
  },
  "bar": {
    name: "Barra superior",
    meaning: "Coloca una barra horizontal corta sobre un símbolo, normalmente para una media muestral o un conjugado complejo.",
    usage: "La estadística usa \\bar{x} para la media muestral, (1/n)\\sum x_i; el análisis complejo escribe \\bar{z} para el conjugado; y \\bar{A} puede denotar la clausura de un conjunto. La barra tiene un ancho fijo, más o menos el de una letra, así que \\bar{xy} queda mal: usa \\overline{xy} para abarcar varios símbolos, que es también la opción habitual para conjugar una expresión como \\overline{z + w}. En el texto, el acento macrón es \\={a}, no \\bar. Los vectores en negrita lo admiten sin problema: \\bar{\\mathbf{v}}.",
  },
  "overline": {
    name: "Línea superior",
    meaning: "Traza una línea sobre toda una expresión, para conjugados, clausuras, decimales periódicos o nombres de segmentos.",
    usage: "A diferencia de \\bar, la línea de \\overline se estira hasta el ancho completo de su argumento, por lo que sirve para \\overline{z_1 z_2} = \\bar{z}_1 \\bar{z}_2, la clausura \\overline{A \\cup B}, la negación booleana \\overline{A + B}, el segmento \\overline{AB} y decimales periódicos como 0.\\overline{3}. Las líneas superiores anidadas se apilan a alturas crecientes, lo que puede verse desigual cuando están una junto a otra; añadir a cada una un \\vphantom del contenido más alto ayuda a alinearlas. En modo texto no hay una línea superior directa; envuélvela en modo matemático. Su equivalente para subrayar es \\underline.",
  },
  "underline": {
    name: "Subrayado",
    meaning: "Traza una línea debajo de una expresión, usada para énfasis, cotas inferiores o integrales inferiores.",
    usage: "En matemáticas \\underline se usa para las integrales inferiores de Darboux, el límite inferior \\underline{\\lim}, las cotas inferiores y para marcar elementos distinguidos; algunos campos subrayan los vectores en lugar de usar negrita. Funciona tanto en modo texto como en modo matemático, pero en el texto desactiva la división silábica y los saltos de línea, así que es una mala opción para enfatizar palabras, donde se prefiere \\emph. La profundidad de la línea depende de los descendentes, de modo que \\underline{a} y \\underline{y} quedan a alturas distintas; añadir un \\vphantom{y} a cada uno los alinea. Su gemelo superior es \\overline.",
  },
  "vector-arrow": {
    name: "Flecha de vector",
    meaning: "Coloca una pequeña flecha hacia la derecha sobre una sola letra para marcarla como vector.",
    usage: "La física escolar y muchos textos de ingeniería escriben los vectores como \\vec{F}, \\vec{v} o \\vec{r}, mientras que la matemática pura usa más a menudo la negrita \\mathbf{v} o letras simples. La flecha tiene un tamaño fijo pensado para un carácter; sobre dos puntos como AB queda apretada, así que usa \\overrightarrow{AB} en su lugar. Sobre las letras en cursiva la flecha se sitúa un poco a la derecha del centro para seguir su inclinación. Combinarla con un sombrero para vectores unitarios (\\hat{\\vec{x}}) funciona, pero queda muy alta, por lo que muchos autores usan \\hat{\\mathbf{x}}.",
  },
  "wide-vector": {
    name: "Flecha de vector ancha",
    meaning: "Extiende una flecha hacia la derecha sobre su argumento, la notación estándar para el vector de A a B.",
    usage: "La geometría y el álgebra vectorial usan \\overrightarrow{AB} para el vector del punto A al punto B, lo que da identidades como \\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}. La flecha se ensancha para ajustarse al contenido, a diferencia de \\vec, que solo cubre una letra. En teoría de categorías y análisis funcional a veces marca la dirección de un límite o un conjunto dirigido. La flecha se dibuja a altura completa, así que añade un espacio vertical apreciable; en texto en línea con interlineado ajustado considera \\vec{v} o letras en negrita. Usa \\overleftarrow para la dirección contraria.",
  },
  "left-vector": {
    name: "Flecha hacia la izquierda superior",
    meaning: "Dibuja una flecha hacia la izquierda que abarca el argumento, para indicar una dirección invertida o una secuencia leída hacia atrás.",
    usage: "Menos común que su equivalente hacia la derecha, \\overleftarrow{AB} aparece cuando un vector o un camino se lee de B hacia A, para la palabra o cadena invertida en teoría de lenguajes formales y para magnitudes adjuntas o de tiempo invertido en física. Su flecha se estira sobre todo el argumento igual que \\overrightarrow. Si necesitas las flechas debajo de la expresión, amsmath ofrece \\underleftarrow y \\underrightarrow. Para un vector hacia atrás de una sola letra no existe una forma corta incorporada como \\vec, así que este comando ancho es la opción habitual.",
  },
  "line-arrow-over-ab": {
    name: "Flecha doble superior (recta AB)",
    meaning: "Dibuja una flecha de dos puntas sobre su argumento, la notación habitual para la recta que pasa por los puntos A y B.",
    usage: "La geometría escolar distingue tres objetos construidos a partir de dos puntos: \\overline{AB} para el segmento, \\overrightarrow{AB} para la semirrecta y \\overleftrightarrow{AB} para la recta infinita. La flecha se estira con el contenido y tiene puntas en ambos extremos. También se usa ocasionalmente para relaciones bidireccionales o límites bilaterales. Como es bastante alta, puede chocar con la línea de arriba en párrafos densos; las fórmulas de presentación lo evitan. La versión correspondiente con la flecha debajo es \\underleftrightarrow. Ten presente la diferencia con \\overline{AB}, que denota solo el segmento finito.",
  },
  "acute": {
    name: "Acento agudo",
    meaning: "Coloca un acento agudo (un trazo ascendente) sobre un símbolo matemático, usado a veces como una marca similar a la prima.",
    usage: "Los acentos de modo matemático como \\acute existen sobre todo por completitud; en la práctica aparecen como decoraciones de variables, por ejemplo \\acute{x} para una coordenada transformada en algunos textos de física. Para letras acentuadas en palabras, usa el acento de texto \\'{e}, como en café; \\acute no funciona fuera del modo matemático. La versión matemática usa la fuente cursiva matemática, así que \\acute{e} dentro de una ecuación no coincide con una letra redonda acentuada del párrafo que la rodea. Si solo necesitas una marca al estilo de una derivada, x' (prima) es mucho más habitual.",
  },
  "grave": {
    name: "Acento grave",
    meaning: "Pone un acento grave (un trazo descendente) sobre un símbolo en modo matemático como decoración de una variable.",
    usage: "\\grave es el equivalente en modo matemático del acento de texto \\`{a} que se ve en palabras francesas como voilà. En las ecuaciones se usa poco y sirve simplemente como otra forma de distinguir variables relacionadas, junto con primas, sombreros y tildes. Como es un acento matemático, compone su argumento en cursiva matemática; para una palabra acentuada dentro de una ecuación escribe \\text{\\`{a}}. Si estás eligiendo una decoración para una variable nueva, al lector le resultarán más familiares \\tilde, \\hat o una prima.",
  },
  "breve": {
    name: "Breve",
    meaning: "Añade un breve (una pequeña curva en forma de copa) sobre un símbolo, una decoración de variable poco común.",
    usage: "En matemáticas \\breve{x} aparece como marca alternativa cuando el sombrero, la barra y la tilde ya están ocupados, por ejemplo en algunos artículos de procesamiento de señales y estadística para un estimador modificado, y en notación de teoría de Lie. El breve es redondo por abajo, a diferencia de \\check, que es puntiagudo. Para texto en rumano o turco (ă, ğ), usa el acento de texto \\u{a} en lugar del comando matemático. El acento tiene un ancho fijo, así que solo se ajusta a letras sueltas.",
  },
  "check": {
    name: "Carón (háček)",
    meaning: "Coloca un carón (háček), un pequeño acento en forma de v, sobre un símbolo; se usa sobre todo en la cohomología de Čech.",
    usage: "La topología algebraica escribe \\check{H}^n(X) para la cohomología de Čech, y algunos textos usan \\check{x} para un objeto dual o transformado inversamente, lo opuesto a un sombrero. La forma de v lo distingue del redondo \\breve y de \\hat, que es una v invertida. En el texto, un háček checo como č se produce con \\v{c}, no con \\check. El acento tiene un ancho fijo; el núcleo de LaTeX no incluye un \\widecheck estándar, así que sobre expresiones largas los autores usan un superíndice.",
  },
  "ring": {
    name: "Anillo superior",
    meaning: "Coloca un pequeño anillo sobre un símbolo, usado para el interior de conjuntos y algunos símbolos de unidades.",
    usage: "La topología escribe a veces \\mathring{A} para el interior de A (una alternativa a A^\\circ o \\operatorname{int} A), y la geometría diferencial lo usa para magnitudes de traza nula o de referencia. Para el símbolo del ángstrom en el texto usa \\AA, y para la letra escandinava å usa \\aa; \\mathring es solo para el modo matemático. Se diferencia de un \\circ en superíndice, que queda arriba a la derecha en vez de centrado encima. El anillo está dimensionado para una sola letra. Sobre las letras i y j, usa \\imath o \\jmath para que el anillo sustituya al punto.",
  },
  "overbrace": {
    name: "Llave superior",
    meaning: "Dibuja una llave horizontal sobre una expresión, con una etiqueta opcional añadida mediante un superíndice.",
    usage: "Las llaves superiores anotan partes de una fórmula, por ejemplo para indicar n copias en \\overbrace{1 + 1 + \\cdots + 1}^{n} o para nombrar un término en una deducción. El superíndice que sigue al comando se coloca sobre la punta de la llave, y envolver la etiqueta en \\text la mantiene recta y con un tamaño legible. La llave añade mucha altura, así que su sitio son las fórmulas de presentación; en línea separará los renglones. Combínala con \\underbrace sobre la misma expresión para anotar por encima y por debajo. Para una llave con la etiqueta a un lado, usa \\left\\{ ... \\right. en su lugar.",
    example: "\\overbrace{a + a + \\cdots + a}^{n \\text{ veces}} = na",
  },
  "underbrace": {
    name: "Llave inferior",
    meaning: "Pone una llave debajo de una expresión, con una etiqueta añadida mediante un subíndice bajo ella.",
    usage: "Los libros de texto usan \\underbrace para explicar partes de una ecuación, como marcar \\underbrace{\\frac{1}{2}mv^2}_{\\text{cinética}} en un balance de energía o contar los términos de un producto. La etiqueta va en un subíndice justo después del comando; usa \\text para las palabras y contenido en \\scriptstyle para fórmulas cortas. La llave se estira hasta el ancho exacto de su argumento. Las llaves anidadas o superpuestas requieren cuidado: puedes poner una llave inferior bajo parte de una expresión que ya tiene una llave superior, pero las llaves no pueden cruzarse. Como \\overbrace, funciona mejor en las fórmulas de presentación.",
  },
  "cancel": {
    name: "Tachado de cancelación",
    meaning: "Tacha una expresión con una línea diagonal para mostrar términos que se cancelan en una deducción.",
    usage: "Los profesores y los apuntes de clase usan \\cancel para mostrar una simplificación, por ejemplo un factor que se cancela en una fracción o términos opuestos que se anulan en una suma. El mismo paquete ofrece \\bcancel (en la dirección de la barra invertida), \\xcancel (una X sobre el término) y \\cancelto{0}{x}, que dibuja una flecha hacia el valor al que tiende el término. El color del trazo puede cambiarse independientemente del color del texto, lo que ayuda en las diapositivas. \\cancel también funciona en modo texto, pero se usa sobre todo en fórmulas. Los artículos formales rara vez muestran así la cancelación; es un recurso didáctico.",
  },
  "boxed-formula": {
    name: "Fórmula enmarcada",
    meaning: "Dibuja un marco rectangular alrededor de una expresión matemática, a menudo para resaltar un resultado final.",
    usage: "Los estudiantes enmarcan las respuestas finales y los autores destacan identidades clave con \\boxed{E = mc^2}. El comando funciona dentro del modo matemático y mantiene el contenido en estilo de presentación o de texto según corresponda, a diferencia de \\fbox, que cambia a modo texto y necesita $...$ dentro. En los entornos align, pon \\boxed alrededor de un lado o del contenido de toda una línea, pero no a través del punto de alineación &. El relleno y el grosor de la línea siguen \\fboxsep y \\fboxrule, así que puedes ajustarlos localmente. Para marcos de color, el siguiente paso habitual es \\fcolorbox alrededor de una fórmula en línea.",
  },
};

export default text;
