import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/arrows/<slug>. */
const text: SymbolPageTranslations = {
  "left-arrow": {
    name: "Flecha a la izquierda",
    meaning: "Dibuja una flecha simple corta que apunta a la izquierda, usada para la asignación en algoritmos y para aplicaciones escritas al revés.",
    usage: "El pseudocódigo escribe la asignación como x \\leftarrow x + 1, y \\gets es un alias integrado de exactamente esta flecha, que se lee con más naturalidad en los listados de algoritmos. En matemáticas a veces indica una aplicación escrita de derecha a izquierda, B \\leftarrow A, o, en textos antiguos, un límite al que se tiende por la derecha. Los artículos de aprendizaje automático la usan para las actualizaciones de parámetros, \\theta \\leftarrow \\theta - \\eta g. Es una relación, así que TeX añade un espaciado amplio a su alrededor. Para una flecha más larga usa \\longleftarrow, y para una con etiqueta, la extensible \\xleftarrow{text}.",
  },
  "right-arrow": {
    name: "Flecha a la derecha",
    meaning: "Dibuja una flecha simple corta que apunta a la derecha, para signaturas de funciones, límites y flechas de reacción.",
    usage: "\\rightarrow tiene el alias más corto \\to, que es la opción habitual en f : A \\to B y en límites x \\to 0. Usa en su lugar \\mapsto cuando describas lo que le ocurre a un elemento, como en x \\mapsto x^2. En lógica, p \\rightarrow q es la implicación material, distinta de la flecha doble \\Rightarrow que se usa entre enunciados. Los químicos escriben con ella las reacciones sencillas, y en teoría de grafos se usa para las aristas dirigidas u \\rightarrow v. Cuando necesites una etiqueta sobre la flecha, la extensible \\xrightarrow{\\text{label}} se alarga para ajustarse a ella.",
  },
  "up-arrow": {
    name: "Flecha hacia arriba",
    meaning: "Dibuja una flecha hacia arriba, usada para límites crecientes, el espín hacia arriba, el desprendimiento de gases y la notación de Knuth.",
    usage: "El análisis escribe x_n \\uparrow x para una sucesión que crece hacia su límite, como en el teorema de la convergencia monótona. La física la usa para el espín hacia arriba, |\\uparrow\\rangle, y la química marca con una flecha hacia arriba tras el producto un gas que se desprende de una reacción. La notación de flechas de Knuth para números enormes escribe 3 \\uparrow\\uparrow 3 para la exponenciación iterada. \\uparrow también funciona como delimitador, así que \\big\\uparrow o \\left\\uparrow ... \\right. producen versiones más altas. La flecha de doble trazo \\Uparrow es un símbolo aparte.",
  },
  "long-left-arrow": {
    name: "Flecha larga a la izquierda",
    meaning: "Dibuja una flecha simple larga a la izquierda, una versión alargada de \\leftarrow para aplicaciones anchas o destacadas.",
    usage: "\\longleftarrow es una flecha larga de longitud fija, aproximadamente el doble de larga que \\leftarrow, construida con un signo menos y una punta de flecha. Resulta útil cuando las flechas apuntan entre expresiones largas o en diagramas en línea de sucesiones exactas escritas de derecha a izquierda. Para poner texto sobre la flecha es mejor la extensible \\xleftarrow{f}, porque se alarga con la etiqueta. La asignación en algoritmos suele usar en su lugar la corta \\gets. Su equivalente de doble trazo es \\Longleftarrow, en la que se basa el símbolo «es implicado por», \\impliedby.",
  },
  "long-right-arrow": {
    name: "Flecha larga a la derecha",
    meaning: "Dibuja una flecha simple larga a la derecha, frecuente en enunciados de convergencia y en flechas entre expresiones largas.",
    usage: "Se usa \\longrightarrow cuando un \\to corto queda apretado, por ejemplo en a_n \\longrightarrow L o entre dos términos largos de una reducción. Se puede añadir una condición bajo la flecha con \\xrightarrow[n \\to \\infty]{}, que se alarga según la etiqueta, o con \\underset{n\\to\\infty}{\\longrightarrow}. La química usa flechas largas para las reacciones con las condiciones escritas encima. Es un símbolo de longitud fija, a diferencia de las flechas extensibles. La versión doble es \\Longrightarrow, que es lo que imprime \\implies con espaciado adicional.",
  },
  "down-arrow": {
    name: "Flecha hacia abajo",
    meaning: "Dibuja una flecha hacia abajo, usada para límites decrecientes, el espín hacia abajo, los precipitados y las reducciones de paso grande.",
    usage: "Una sucesión que decrece hacia su límite se escribe x_n \\downarrow x, y los límites laterales aparecen como t \\downarrow 0. Los físicos escriben el espín hacia abajo como |\\downarrow\\rangle, y los químicos ponen una flecha tras un precipitado sólido. En teoría de dominios y en la semántica de lenguajes de programación, e\\downarrow significa que un cómputo converge. Al igual que \\uparrow, es un delimitador, así que \\Big\\downarrow da una flecha más alta, útil en esbozos de diagramas verticales. La versión de doble trazo es \\Downarrow. Algunos textos de topología y teoría del orden escriben también {\\downarrow}x para el conjunto inferior de un elemento.",
  },
  "left-arrow-double": {
    name: "Flecha doble a la izquierda",
    meaning: "Dibuja una flecha corta de doble trazo hacia la izquierda, que se lee «es implicado por» o marca la mitad recíproca de una demostración.",
    usage: "En las demostraciones de una equivalencia, los autores etiquetan las dos implicaciones como (\\Rightarrow) y (\\Leftarrow); esta última demuestra la recíproca. Entre fórmulas, A \\Leftarrow B significa que B implica A. Para una versión larga y espaciada entre enunciados completos, \\impliedby da \\Longleftarrow con espacio adicional, como reflejo de \\implies. Ten cuidado de no confundir \\Leftarrow con \\leq en una lectura rápida, ya que algunos lectores confunden la forma. Los textos de lógica suelen reordenar para usar una flecha hacia la derecha, así que reserva \\Leftarrow para las implicaciones recíprocas.",
    example: "(\\Leftarrow)\\ \\text{Supongamos que } n^2 \\text{ es par. Entonces } n \\text{ es par.}",
  },
  "right-arrow-double": {
    name: "Flecha doble a la derecha",
    meaning: "Dibuja una flecha corta de doble trazo hacia la derecha, el signo de implicación estándar entre fórmulas.",
    usage: "\\Rightarrow afirma que una fórmula implica otra, como en p \\Rightarrow q, y etiqueta la implicación directa (\\Rightarrow) en las demostraciones de equivalencias. \\implies imprime la más larga \\Longrightarrow con un espaciado extra amplio y es adecuada para implicaciones entre enunciados completos. En probabilidad se escribe la convergencia débil de distribuciones como X_n \\Rightarrow X, y en los sistemas de reescritura de términos se usa para un paso de reducción. El álgebra de Boole la usa para el condicional. Prefiérela a la flecha simple \\to cuando los objetos son enunciados y no conjuntos ni funciones.",
  },
  "up-arrow-double": {
    name: "Flecha doble hacia arriba",
    meaning: "Dibuja una flecha de doble trazo hacia arriba, un símbolo poco frecuente que también puede usarse como delimitador extensible.",
    usage: "\\Uparrow no tiene un único significado estándar en matemáticas. Aparece ocasionalmente en diagramas, en algunos textos de lógica y teoría de la demostración, y en física para un estado fuertemente polarizado. Como es un delimitador, \\Big\\Uparrow y \\left\\Uparrow ... \\right. lo escalan verticalmente. Si solo necesitas indicar la dirección hacia arriba, \\uparrow es la opción habitual. Si usas \\Uparrow para una relación propia, defínela en el texto la primera vez que aparezca para que el lector no tenga que adivinarla.",
  },
  "long-left-arrow-double": {
    name: "Flecha doble larga a la izquierda",
    meaning: "Dibuja una flecha larga de doble trazo hacia la izquierda; con espaciado añadido es el signo «es implicado por».",
    usage: "\\Longleftarrow es el glifo en el que se basa \\impliedby, que añade espacios amplios a cada lado para usarlo entre enunciados completos. Usa \\Longleftarrow directamente cuando quieras la flecha larga sin ese relleno, por ejemplo dentro de una cadena compacta en una tabla. En las demostraciones puede introducir la implicación recíproca, (\\Longleftarrow). Su gemela hacia la derecha, \\Longrightarrow, es la base de \\implies, y la de dos puntas \\Longleftrightarrow es la base de \\iff. Evita mezclar las formas corta y larga en una misma demostración. Las flechas recíprocas se leen mejor cuando la hipótesis más fuerte está a la derecha.",
  },
  "long-right-arrow-double": {
    name: "Flecha doble larga a la derecha",
    meaning: "Dibuja una flecha larga de doble trazo hacia la derecha; rodeada de espacios se convierte en el signo \\implies.",
    usage: "\\Longrightarrow es el glifo sin más que usa \\implies, sin el espaciado extra amplio. Elige \\Longrightarrow cuando necesites una implicación en un espacio reducido, como un subíndice, una celda de matriz o una tabla compacta, y \\implies entre cláusulas completas en las fórmulas destacadas. También se usa para reducciones de varios pasos en sistemas de reescritura y para la convergencia en algunos textos de probabilidad. La versión corta \\Rightarrow es mejor entre fórmulas cortas. Escribe la recíproca con \\Longleftarrow. En una secuencia de pasos destacados, alinea las flechas con el entorno align para que cada paso empiece en la misma columna.",
    example: "a \\mid b \\text{ y } b \\mid c \\Longrightarrow a \\mid c",
  },
  "down-arrow-double": {
    name: "Flecha doble hacia abajo",
    meaning: "Dibuja una flecha de doble trazo hacia abajo, usada para la evaluación de paso grande en la semántica de lenguajes de programación.",
    usage: "La semántica operacional escribe e \\Downarrow v para indicar que la expresión e se evalúa al valor v en estilo de paso grande, el principal uso técnico de este símbolo. En diagramas y en demostraciones lógicas puede marcar un paso de inferencia vertical. Como las demás flechas verticales, \\Downarrow es un delimitador, así que \\Big\\Downarrow da una versión más alta. No la confundas con \\downarrow, que en la misma semántica puede significar terminación. Define tu convención al introducir el juicio. La semántica de paso pequeño, en cambio, usa \\to o \\longrightarrow para los pasos de reducción individuales, y \\to^* para su clausura reflexiva y transitiva.",
  },
  "left-right-arrow": {
    name: "Flecha bidireccional",
    meaning: "Dibuja una flecha corta de dos puntas, para correspondencias, el bicondicional y las estructuras resonantes.",
    usage: "La lógica usa p \\leftrightarrow q para la conectiva bicondicional dentro de las fórmulas, mientras que \\Leftrightarrow y \\iff son más habituales entre enunciados completos. En combinatoria describe una correspondencia biyectiva entre objetos, y la química la usa entre estructuras resonantes, no para el equilibrio, que usa \\rightleftharpoons. La teoría de grafos puede usarla para aristas no dirigidas o bidireccionales. Es una relación y recibe espaciado amplio. Para una versión más larga usa \\longleftrightarrow. En las discusiones sobre tablas de verdad equivale a XNOR: es verdadera exactamente cuando ambos lados coinciden.",
  },
  "long-left-right-arrow": {
    name: "Flecha bidireccional larga",
    meaning: "Dibuja una flecha simple larga de dos puntas, una \\leftrightarrow alargada para correspondencias entre expresiones largas.",
    usage: "\\longleftrightarrow es adecuada para una correspondencia entre dos objetos extensos, por ejemplo una biyección entre subconjuntos y cadenas binarias, donde la flecha corta queda perdida. Es un símbolo de longitud fija, así que las etiquetas necesitan \\overset o una construcción apilada. Ten en cuenta que \\iff se construye con la \\Longleftrightarrow de doble trazo, no con esta versión de trazo simple, así que no uses \\longleftrightarrow para la equivalencia lógica en las demostraciones. La física la usa para una dualidad entre dos teorías. La longitud adicional también ayuda cuando la flecha lleva texto apilado encima.",
  },
  "up-down-arrow": {
    name: "Flecha bidireccional vertical",
    meaning: "Dibuja una flecha vertical de dos puntas, usada sobre todo como delimitador escalable o en diagramas.",
    usage: "\\updownarrow apunta hacia arriba y hacia abajo, lo que la hace útil en diagramas verticales para mostrar una relación en ambos sentidos entre filas. Al ser un delimitador, puede agrandarse con \\big, \\Big o con \\left y \\right. En física indica ocasionalmente una superposición de estados de espín o una oscilación vertical. Su variante de doble trazo es \\Updownarrow. Si vas a dibujar un diagrama conmutativo completo, un entorno específico para diagramas alineará las flechas verticales mejor que colocar \\updownarrow a mano. Rara vez se necesita en artículos modernos, pero es útil en apuntes de clase.",
  },
  "left-right-arrow-double": {
    name: "Flecha doble bidireccional",
    meaning: "Dibuja una flecha corta de doble trazo y dos puntas para la equivalencia lógica entre fórmulas.",
    usage: "\\Leftrightarrow afirma que dos fórmulas se implican mutuamente, como en A \\Leftrightarrow B. Para la equivalencia entre enunciados completos en las fórmulas destacadas, \\iff da la más larga \\Longleftrightarrow con espaciado adicional. El álgebra de Boole la usa para XNOR o el bicondicional. En cadenas de ecuaciones equivalentes, alinear una columna de \\Leftrightarrow con align es un patrón habitual en los solucionarios. No la confundas con \\equiv, que expresa identidad o congruencia y no equivalencia lógica. Escríbela solo cuando cada paso sea realmente reversible; elevar al cuadrado ambos lados, por ejemplo, rompe la equivalencia.",
  },
  "long-left-right-arrow-double": {
    name: "Flecha doble bidireccional larga",
    meaning: "Dibuja una flecha larga de doble trazo y dos puntas, el mismo glifo que usa \\iff.",
    usage: "\\Longleftrightarrow imprime la misma flecha que \\iff, pero sin los espacios extra amplios que añade \\iff. Eso la convierte en la mejor opción dentro de subíndices, tablas o texto en línea compacto, mientras que \\iff se lee mejor en los teoremas destacados. También aparece en demostraciones en las que ambas implicaciones se argumentan a la vez. La corta \\Leftrightarrow es preferible entre fórmulas breves. Mantén una elección coherente en todo el documento, sobre todo en los enunciados de los teoremas. También sirve en cadenas de pasos algebraicos reversibles alineados en un entorno align, donde la longitud adicional separa visualmente las ecuaciones largas. Como las demás flechas, es una relación, así que TeX le da espaciado amplio a ambos lados.",
  },
  "up-down-arrow-double": {
    name: "Flecha doble bidireccional vertical",
    meaning: "Dibuja una flecha vertical de doble trazo y dos puntas, un símbolo que puede actuar como delimitador para la equivalencia vertical.",
    usage: "\\Updownarrow se usa sobre todo en disposiciones verticales, como dos enunciados equivalentes apilados en un array, donde hace el papel de \\Leftrightarrow girada. Es un delimitador, así que las versiones \\Big\\Updownarrow y \\left ... \\right crecen verticalmente. Fuera de esos diagramas no tiene un significado ampliamente establecido. Si necesitas una versión de trazo simple, usa \\updownarrow. Un array sencillo con una columna centrada mantiene alineados los enunciados y la flecha. En diapositivas de clase también puede mostrar que dos definiciones apiladas verticalmente son intercambiables. Combínala con \\Leftrightarrow cuando la misma equivalencia aparezca también en horizontal en otro lugar.",
    example: "\\begin{array}{c} A \\text{ se cumple} \\\\ \\Updownarrow \\\\ B \\text{ se cumple} \\end{array}",
  },
  "maps-to": {
    name: "Flecha de aplicación",
    meaning: "Dibuja una flecha con barra que muestra adónde envía una función un elemento concreto, como en x ↦ x².",
    usage: "Usa \\mapsto para los elementos y \\to para los conjuntos: f : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2 enuncia a la vez el dominio, el codominio y la regla. Los artículos de cálculo lambda y de programación funcional la usan para las funciones anónimas, y la semántica escribe las sustituciones o las actualizaciones de entorno como [x \\mapsto v]. Se distingue de \\to solo por la pequeña barra en su cola, así que asegúrate de que se vea con claridad a tamaños pequeños. Para expresiones largas usa \\longmapsto. En los diagramas conmutativos, las flechas entre elementos también se dibujan con cola de mapsto.",
  },
  "long-maps-to": {
    name: "Flecha de aplicación larga",
    meaning: "Dibuja una flecha larga con barra que lleva un elemento a su imagen, para expresiones más anchas que con \\mapsto.",
    usage: "\\longmapsto deja más espacio cuando la entrada o la salida son largas, como en (x, y) \\longmapsto x^2 + y^2, o cuando quieres que la regla sobre elementos quede alineada con una \\longrightarrow situada encima. Se lee igual que \\mapsto y debe emparejarse con \\to o \\longrightarrow en la línea que enuncia el dominio y el codominio. Al tener longitud fija, una etiqueta encima sigue necesitando \\overset. Usarla de forma coherente en las definiciones de funciones destacadas da un aspecto limpio en dos líneas.",
  },
  "northeast-arrow": {
    name: "Flecha noreste",
    meaning: "Dibuja una flecha diagonal que apunta hacia arriba y a la derecha, para tendencias crecientes y aristas de diagramas.",
    usage: "\\nearrow se usa a menudo de manera informal para «crece hacia», como en a_n \\nearrow a, el equivalente diagonal de \\uparrow. También conecta entradas en diagramas hechos a mano, ilustraciones de matrices y esbozos de tipo diagrama de Hasse. Junto con \\searrow, \\swarrow y \\nwarrow forma un juego completo de flechas diagonales. No se estiran, así que para flechas diagonales largas es más adecuada una herramienta de diagramas. En apuntes de economía y de análisis de datos puede resumir una tendencia al alza en una celda de tabla. Define su significado una vez, ya que es una notación y no un símbolo formal.",
  },
  "hook-left-arrow": {
    name: "Flecha con gancho a la izquierda",
    meaning: "Dibuja una flecha a la izquierda con un gancho en la cola, la forma invertida de la flecha de inclusión.",
    usage: "\\hookleftarrow es el reflejo de \\hookrightarrow y se usa cuando una inclusión o inyección se dibuja de derecha a izquierda, por ejemplo en una sucesión exacta escrita al revés o en un diagrama en el que el destino está a la izquierda. Fuera de eso es poco frecuente. En la documentación de teclados, un glifo parecido representa la tecla Intro, pero ese es un significado distinto. Si la mayoría de tus flechas apuntan a la derecha, reescribir el enunciado con \\hookrightarrow suele ser más claro. Tiene espaciado de relación, como las demás flechas. Su longitud coincide con la de \\hookrightarrow, así que los diagramas simétricos quedan equilibrados. Cuando necesitas muchas flechas de este tipo, un entorno específico para diagramas gestiona los ganchos automáticamente.",
  },
  "hook-right-arrow": {
    name: "Flecha con gancho a la derecha",
    meaning: "Dibuja una flecha a la derecha con la cola en forma de gancho, el símbolo estándar de una aplicación inyectiva, una inclusión o una inmersión.",
    usage: "Escribir \\iota : A \\hookrightarrow X indica al lector que la aplicación es una inclusión o una inyección sin necesidad de decirlo con palabras. El análisis la usa para las inmersiones continuas entre espacios de funciones, como en H^1(\\Omega) \\hookrightarrow L^2(\\Omega), y las inmersiones compactas a veces se marcan con un adorno adicional. La teoría de categorías la usa para los monomorfismos. Su contrapartida sobreyectiva es \\twoheadrightarrow. El gancho hace que la flecha sea más larga que \\to, así que comprueba la alineación en los diagramas. Es una relación, así que TeX la rodea de espaciado amplio.",
  },
  "southeast-arrow": {
    name: "Flecha sureste",
    meaning: "Dibuja una flecha diagonal que apunta hacia abajo y a la derecha, para tendencias decrecientes y aristas de diagramas.",
    usage: "\\searrow abrevia a menudo «decrece hacia», como en \\varepsilon_n \\searrow 0 para una sucesión monótona decreciente. Completa a \\nearrow, \\swarrow y \\nwarrow en diagramas informales, como una cuadrícula de 2 por 2 objetos. Los físicos la usan en esbozos de niveles de energía o de cadenas de desintegración. Estas flechas tienen tamaño fijo, así que sirven para un uso rápido en línea más que para diagramas cuidados. El nombre significa southeast (sureste), no search (buscar). Quien no la conozca puede esperar un icono de búsqueda, así que conviene una breve definición. En las tablas que resumen la monotonía, \\nearrow y \\searrow ofrecen una representación visual compacta.",
    example: "\\varepsilon_n \\searrow 0 \\quad \\text{cuando } n \\to \\infty",
  },
  "left-harpoon-up": {
    name: "Arpón a la izquierda con púa arriba",
    meaning: "Dibuja un arpón que apunta a la izquierda con la púa arriba, la mitad de una punta de flecha hacia la izquierda.",
    usage: "\\leftharpoonup se usa principalmente como pieza de construcción o en notaciones especializadas. Algunos textos de física ponen un arpón sobre los vectores, y apilar \\rightharpoonup sobre \\leftharpoondown recrea las flechas de equilibrio, aunque ya existe \\rightleftharpoons. También puede aparecer en diagramas de reacciones. Como los arpones se parecen mucho a tamaños pequeños, elige deliberadamente la dirección de la púa y mantenla de forma coherente. En la mayoría de los documentos aparece dentro de otras construcciones más que sola. Sus parientes son \\rightharpoonup, \\leftharpoondown y \\rightharpoondown, que solo difieren en la dirección y en el lado de la púa. Como las demás flechas, recibe espaciado de relación.",
  },
  "right-harpoon-up": {
    name: "Arpón a la derecha con púa arriba",
    meaning: "Dibuja un arpón que apunta a la derecha con la púa arriba, el signo habitual de la convergencia débil.",
    usage: "El análisis funcional escribe u_n \\rightharpoonup u para la convergencia débil, distinguiéndola de la convergencia fuerte u_n \\to u. La convergencia débil-* suele escribirse \\overset{*}{\\rightharpoonup}. La física usa ocasionalmente un arpón a la derecha como acento vectorial. También forma la mitad superior del símbolo de equilibrio \\rightleftharpoons en química. Distingue \\rightharpoonup de \\rightharpoondown, cuya púa queda debajo, ya que los lectores pueden tomarlos por notaciones diferentes. En KaTeX y en LaTeX el glifo tiene espaciado de relación, así que u_n \\rightharpoonup u se espacia como un signo igual. Al escribir, menciona el espacio en el que la convergencia es débil, como en el ejemplo.",
    example: "u_n \\rightharpoonup u \\text{ en } H^1(\\Omega)",
  },
  "southwest-arrow": {
    name: "Flecha suroeste",
    meaning: "Dibuja una flecha diagonal que apunta hacia abajo y a la izquierda, sobre todo para diagramas y esbozos de flujo.",
    usage: "\\swarrow indica un paso hacia abajo y a la izquierda, como en una cuadrícula de objetos dibujada a mano o al ilustrar cómo se combinan los términos en el determinante de una matriz. Junto con \\nearrow, \\searrow y \\nwarrow cubre las cuatro diagonales. No se estira, así que las flechas diagonales largas necesitan una herramienta de diagramas. A veces marca una tendencia en una tabla, pero \\searrow es más habitual para valores decrecientes. Combínala con el espaciado \\quad en los arrays para colocarla correctamente.",
  },
  "left-harpoon-down": {
    name: "Arpón a la izquierda con púa abajo",
    meaning: "Dibuja un arpón que apunta a la izquierda con la púa debajo, la mitad inferior de una punta de flecha partida.",
    usage: "\\leftharpoondown es la mitad inferior del símbolo de equilibrio \\rightleftharpoons, donde se sitúa debajo de \\rightharpoonup. Por sí solo aparece rara vez, en algunos diagramas de reacciones o como marcador invertido de convergencia débil. Si quieres una flecha de equilibrio, usa directamente \\rightleftharpoons en lugar de apilar arpones a mano. Ten en cuenta que los arpones son distintos de \\leftarrow y no deben intercambiarse a la ligera. Tiene espaciado de relación, como las flechas ordinarias. Sus hermanos son \\leftharpoonup, \\rightharpoonup y \\rightharpoondown. En la mayoría de los artículos no lo necesitarás en absoluto, ya que una flecha normal dice lo mismo con más claridad.",
  },
  "right-harpoon-down": {
    name: "Arpón a la derecha con púa abajo",
    meaning: "Dibuja un arpón que apunta a la derecha con la púa en la parte inferior, una variante de la media flecha con la púa abajo.",
    usage: "\\rightharpoondown es el reflejo de \\rightharpoonup en cuanto a la posición de la púa, y aparece en algunas notaciones de equilibrio y en acentos vectoriales. Como \\rightharpoonup es el símbolo establecido de la convergencia débil, usar \\rightharpoondown para ello confundiría al lector. A veces se combina con \\leftharpoonup en \\leftrightharpoons, que es la disposición de equilibrio invertida. Como con todos los arpones, comprueba que la púa sea visible en el PDF final con el tamaño de fuente elegido. Sus hermanos \\leftharpoonup y \\leftharpoondown completan el juego de cuatro arpones. Como las demás flechas, recibe espaciado de relación.",
  },
  "northwest-arrow": {
    name: "Flecha noroeste",
    meaning: "Dibuja una flecha diagonal que apunta hacia arriba y a la izquierda, usada sobre todo en diagramas e ilustraciones.",
    usage: "\\nwarrow es la menos frecuente de las cuatro flechas diagonales. Aparece en arrays hechos a mano que muestran cómo se relacionan las entradas, como las dependencias en una tabla de programación dinámica en la que una celda depende de su vecina superior izquierda. Combinada con \\nearrow, \\searrow y \\swarrow permite esbozar pequeños diagramas sin un paquete de dibujo. Para diagramas conmutativos cuidados, un entorno específico para diagramas proporciona longitudes de flecha y etiquetas adecuadas. Su tamaño fijo y su espaciado de relación la hacen práctica dentro de arrays y tablas. Leer las cuatro flechas diagonales como direcciones de la brújula en inglés (northeast, southeast, southwest, northwest) ayuda a recordar sus nombres.",
  },
};

export default text;
