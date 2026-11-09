import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/math/<slug>. */
const text: SymbolPageTranslations = {
  "addition": {
    name: "Suma",
    meaning: "Suma dos cantidades; es el signo más binario, que también se usa como signo unario para los números positivos.",
    usage: "Al escribir + en modo matemático se obtiene un operador binario, de modo que TeX coloca automáticamente un espacio medio a cada lado, como en a + b. Cuando el signo más abre una expresión o sigue a otro operador o a una relación, como en -(+3) o x = +1, TeX lo trata como unario y suprime el espacio. En una ecuación multline o split que se corta antes de un signo más, escribe {}+ al comienzo de la línea de continuación para recuperar el espaciado binario. Para un signo más en superíndice, como en el ion Na^+ o en el conjunto \\mathbb{R}^+, no hacen falta llaves. Evita \\oplus salvo que te refieras a una suma directa o a XOR, que es un símbolo distinto.",
  },
  "subtraction": {
    name: "Resta",
    meaning: "Resta una cantidad de otra; en modo matemático la tecla del guion se convierte en un verdadero signo menos, no en un guion.",
    usage: "Dentro del modo matemático el carácter de guion se convierte en un signo menos propiamente dicho, más largo que el guion de texto y con espaciado de operador binario en a - b. Fuera del modo matemático solo se obtiene un guion corto, así que un número negativo en el texto corrido debe escribirse igualmente como $-5$ en lugar de teclearlo sin más. Cuando el menos es unario, como en -x o e^{-t}, TeX elimina automáticamente el espacio que lo rodea. No lo confundas con \\setminus, que denota la diferencia de conjuntos A \\setminus B, ni con la raya corta (en dash) que se usa para los intervalos. Para un signo menos en superíndice, como en x^{-1} o Cl^-, las llaves solo son necesarias cuando sigue más de un carácter.",
  },
  "multiplication": {
    name: "Multiplicación",
    meaning: "Produce el aspa ×, que se usa para la multiplicación, el producto vectorial y el producto cartesiano.",
    usage: "En aritmética, \\times permite escribir 3 \\times 4 o la notación científica, como 6.02 \\times 10^{23}. En álgebra lineal y en física es el producto vectorial, \\mathbf{a} \\times \\mathbf{b}, y también indica las dimensiones de una matriz, como en una matriz m \\times n. La teoría de conjuntos lo usa para el producto cartesiano A \\times B. Compáralo con \\cdot, la opción habitual para el producto escalar y para la multiplicación entre variables, y con el asterisco *, que normalmente denota la convolución. El operador grande \\bigtimes no forma parte de LaTeX estándar, por lo que, para un producto cartesiano indexado, muchos autores escriben \\prod en su lugar.",
  },
  "division": {
    name: "División",
    meaning: "Da el óbelo ÷, el signo de división de la escuela primaria, con un punto encima y otro debajo de una barra.",
    usage: "El óbelo aparece en fichas de aritmética, en expresiones de estilo calculadora y en algunas tablas, como en 12 \\div 4 = 3. La matemática de investigación casi nunca lo usa; en su lugar se escribe una fracción con \\frac{12}{4}, una barra en línea 12/4 o dos puntos para las razones. En algunos países el óbelo se evita por completo, y la norma ISO 80000-2 desaconseja su uso. Como \\div es un operador binario, TeX lo espacia igual que + y -. No lo confundas con \\mid ni con la barra /, que en teoría de números y teoría de grupos significan «divide» y «cociente», respectivamente, por ejemplo G/N.",
  },
  "fraction": {
    name: "Fracción",
    meaning: "Compone una fracción apilada con el numerador a sobre el denominador b, separados por una raya horizontal.",
    usage: "\\frac recibe dos argumentos, el numerador y el denominador, así que \\frac{a}{b} es solo un marcador para cualquier cociente, como \\frac{dy}{dx} o \\frac{n(n+1)}{2}. En las fórmulas en línea se reduce al tamaño de texto, lo que puede quedar apretado; \\dfrac fuerza el tamaño de display y \\tfrac fuerza el tamaño de texto. Para cocientes sencillos en línea, una barra, a/b, suele leerse mejor que una fracción apilada. Los coeficientes binomiales se escriben con \\binom{n}{k}, no con \\frac sin raya. Las fracciones continuas quedan más limpias con \\cfrac, que mantiene cada nivel a tamaño completo. Cuando una fracción va entre paréntesis, usa \\left( y \\right) para que los paréntesis crezcan hasta su altura.",
  },
  "square-root": {
    name: "Raíz cuadrada",
    meaning: "Dibuja un signo radical sobre su argumento, lo que da la raíz cuadrada principal de x.",
    usage: "\\sqrt estira automáticamente el radical para cubrir todo lo que pongas entre llaves, de modo que \\sqrt{x^2 + y^2} recibe una barra superior más larga y un signo más alto. Es la forma estándar de escribir la norma euclídea, la fórmula cuadrática y la desviación típica como \\sqrt{\\operatorname{Var}(X)}. Los radicales sobre argumentos de alturas distintas pueden quedar desiguales; añadir \\vphantom{y} o \\mathstrut dentro hace que las raíces vecinas coincidan. Para un índice, como en una raíz cúbica, usa el argumento opcional \\sqrt[3]{x}. En el texto en línea, x^{1/2} es a veces más claro que un radical sobre una fracción alta.",
  },
  "n-th-root": {
    name: "Raíz n-ésima",
    meaning: "Escribe la raíz n-ésima de x, con el índice n situado en el ángulo del signo radical.",
    usage: "El índice va entre corchetes antes del radicando, así que \\sqrt[3]{8} = 2 es una raíz cúbica y \\sqrt[n]{x} denota x^{1/n}. Aparece en el criterio de la raíz para series, \\limsup \\sqrt[n]{|a_n|}, y en las medias geométricas \\sqrt[n]{x_1 x_2 \\cdots x_n}. A veces TeX coloca el índice de forma poco afortunada, sobre todo si es alto; \\leftroot{} y \\uproot{} permiten desplazarlo, como en \\sqrt[\\leftroot{-2}\\uproot{2}n]{x}. Mantén el índice breve: para exponentes complicados, escribir la potencia x^{1/(k+1)} se lee mejor que un radical.",
  },
  "summation": {
    name: "Sumatorio",
    meaning: "Suma una sucesión de términos mientras el índice i recorre de 1 a n, mediante el operador grande sigma mayúscula.",
    usage: "\\sum es un operador grande: en las fórmulas destacadas los límites i=1 y n se sitúan debajo y encima de la sigma, mientras que en las fórmulas en línea pasan al costado como subíndices y superíndices. Añade \\limits para forzar los límites apilados en línea, o \\nolimits para los límites laterales en display, aunque los límites apilados en línea pueden alterar el interlineado. Para condiciones de varias líneas bajo la sigma usa \\substack{0 \\le i \\le m \\\\ 0 < j < n}. No uses la letra griega \\Sigma para el sumatorio; es un símbolo ordinario más pequeño y sin espaciado de operador. Entre sus usos típicos están las series, las esperanzas y \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}.",
  },
  "product": {
    name: "Productorio",
    meaning: "Multiplica una sucesión de factores para i desde 1 hasta n, mediante el operador grande pi mayúscula.",
    usage: "\\prod se comporta como \\sum: los límites se apilan encima y debajo en estilo display y se sitúan al costado en el texto en línea. Permite escribir factoriales como n! = \\prod_{i=1}^{n} i, verosimilitudes L(\\theta) = \\prod_{i} p(x_i \\mid \\theta) y productos de Euler sobre los primos. No lo sustituyas por la letra griega \\Pi, que es un símbolo ordinario de tamaño fijo. La versión invertida \\coprod denota coproductos en teoría de categorías. Cuando el producto es una verosimilitud de la que vas a tomar el logaritmo, es habitual mostrar explícitamente el paso a una suma, ya que \\log convierte \\prod en \\sum.",
  },
  "integral": {
    name: "Integral",
    meaning: "Escribe el signo de integral definida con límite inferior a y límite superior b.",
    usage: "A diferencia de \\sum, los límites de \\int se colocan al costado por defecto incluso en las fórmulas destacadas; añade \\limits, como en \\int\\limits_a^b, si tu estilo los exige apilados. Pon un espacio fino \\, antes del diferencial, como en \\int_a^b f(x)\\,dx, y algunos autores usan una d recta mediante \\mathrm{d}x. Las integrales múltiples tienen comandos propios, \\iint y \\iiint, que espacian los signos mejor que repetir \\int. Las integrales de contorno usan \\oint. Para la barra de evaluación tras integrar, escribe \\Big|_a^b o \\left. F(x) \\right|_a^b.",
  },
  "limit": {
    name: "Límite",
    meaning: "Escribe el operador límite con x tendiendo a infinito colocado debajo de «lim».",
    usage: "\\lim es un nombre de operador predefinido, así que se imprime en redonda y, en las fórmulas destacadas, coloca el subíndice x \\to \\infty justo debajo. En línea, el subíndice pasa al costado para mantener ordenado el interlineado. La flecha interior es \\to, un alias corto de \\rightarrow. Los límites laterales se escriben x \\to 0^+ o x \\downarrow 0. Los operadores relacionados \\limsup y \\liminf funcionan del mismo modo. Si necesitas una palabra propia similar a un límite con subíndices apilados, defínela con \\DeclareMathOperator* (el asterisco activa los límites) en lugar de escribir \\text{lim}.",
  },
  "infinity": {
    name: "Infinito",
    meaning: "Dibuja la lemniscata ∞, que representa una cantidad no acotada o un límite que crece sin cota.",
    usage: "Verás \\infty en límites como x \\to \\infty, en integrales impropias \\int_0^\\infty e^{-x}\\,dx y en los límites de series \\sum_{n=1}^{\\infty}. También da nombre a la norma del supremo \\|f\\|_\\infty, al espacio L^\\infty y a las funciones suaves C^\\infty. Escribe -\\infty y +\\infty con el signo unido; TeX espacia correctamente el signo como unario. Recuerda que \\infty no es un número real, así que un intervalo que lo contenga debe ser abierto en ese extremo, como en [0, \\infty). Para la recta real ampliada, \\overline{\\mathbb{R}} es una notación habitual.",
  },
  "approximately-equal": {
    name: "Aproximadamente igual",
    meaning: "Indica que dos valores son aproximadamente iguales, como una estimación numérica o una constante redondeada.",
    usage: "Usa \\approx para aproximaciones numéricas como \\pi \\approx 3.14159 y para desarrollos de primer orden como \\sin x \\approx x para x pequeño. Es una relación, así que TeX le da un espaciado amplio, como a =. Varios símbolos parecidos tienen otros significados: \\simeq suele significar asintóticamente igual o isomorfo, \\sim significa asintótico o «se distribuye como», \\cong denota congruencia o isomorfismo, y \\approxeq es una variante menos frecuente. En textos de finanzas e ingeniería, \\approx suele marcar resultados redondeados; indica la precisión, por ejemplo hasta tres cifras decimales, para que el lector sepa cuán aproximada es la estimación.",
  },
  "not-equal": {
    name: "Distinto de",
    meaning: "Indica que dos cantidades no son iguales; es la negación del signo igual.",
    usage: "\\neq y su alias corto \\ne producen el mismo signo igual tachado, y se puede usar cualquiera de los dos. Aparece en condiciones como x \\neq 0, en afirmaciones de distinción i \\neq j y, en artículos orientados a la programación, como prueba de desigualdad. Escribir \\not= también funciona, pero la posición de la barra puede diferir ligeramente de la del glifo dedicado. En textos de informática, evita teclear != en modo matemático; se imprime como un signo de exclamación seguido de un signo igual. Para «no equivalente» o «no congruente», usa \\not\\equiv o \\ncong en lugar de \\neq.",
  },
  "less-than-or-equal": {
    name: "Menor o igual que",
    meaning: "Expresa que el lado izquierdo es menor o igual que el lado derecho.",
    usage: "\\leq tiene un alias más corto, \\le, y ambos imprimen el mismo glifo con una sola barra horizontal. Teclear <= en modo matemático da dos símbolos separados, así que usa siempre el comando. Desigualdades como la desigualdad triangular \\|x+y\\| \\leq \\|x\\|+\\|y\\| y cotas como 0 \\leq p \\leq 1 son su trabajo diario. La variante inclinada \\leqslant se prefiere en algunas tradiciones europeas y rusas, y \\leqq tiene doble barra. En teoría del orden y de retículos, \\leq denota un orden parcial, mientras que \\preceq se usa para preórdenes más generales.",
  },
  "greater-than-or-equal": {
    name: "Mayor o igual que",
    meaning: "Expresa que el lado izquierdo es mayor o igual que el lado derecho.",
    usage: "\\geq y su alias \\ge son intercambiables. Teclear >= en modo matemático imprime dos caracteres separados, así que usa el comando. Los contextos habituales son las cotas inferiores como n \\geq 1, la desigualdad entre las medias aritmética y geométrica (AM-GM) y las restricciones en optimización como x_i \\geq 0. Algunas revistas prefieren la forma inclinada \\geqslant, y \\geqq tiene doble barra. En teoría del orden, la relación inversa \\succeq generaliza \\geq. Mantén, siempre que puedas, una cadena de desigualdades en un solo sentido, ya que a \\leq b \\leq c se lee más fácilmente que una mezcla de \\leq y \\geq.",
  },
  "implies": {
    name: "Implica",
    meaning: "Escribe una flecha doble larga para la implicación lógica: el enunciado de la izquierda implica el de la derecha.",
    usage: "\\implies produce \\Longrightarrow rodeada de un espaciado extra amplio, adecuado para implicaciones entre enunciados completos, como en x > 2 \\implies x^2 > 4. Para la implicación entre fórmulas dentro de una expresión lógica, muchos lógicos prefieren la más corta \\Rightarrow o \\to, sin ese hueco amplio. Su recíproca es \\impliedby. En las demostraciones, evita encadenar varias \\implies seguidas a lo largo de una página; las frases completas con «por tanto» suelen leerse mejor. En la notación de la lógica proposicional, p \\to q es más habitual que p \\implies q.",
    example: "x^2 = 4 \\implies x = 2 \\text{ o } x = -2",
  },
  "if-and-only-if": {
    name: "Si y solo si",
    meaning: "Escribe una flecha larga de doble trazo con dos puntas para la equivalencia lógica, que se lee «si y solo si».",
    usage: "\\iff produce \\Longleftrightarrow con un espaciado extra amplio a ambos lados. Une dos enunciados que se implican mutuamente, como en un teorema del tipo n \\text{ is even} \\iff n^2 \\text{ is even}. Los textos de lógica suelen preferir \\leftrightarrow o \\Leftrightarrow para el bicondicional dentro de las fórmulas, y reservan \\iff para los enunciados en prosa. Debido a ese relleno, \\iff queda demasiado holgado dentro de subíndices compactos o de condiciones en notación de conjuntos por comprensión. No lo confundas con \\equiv, que significa idénticamente igual o congruente módulo n.",
  },
  "for-all": {
    name: "Para todo",
    meaning: "Da el cuantificador universal ∀, que se lee «para todo» o «para cada».",
    usage: "\\forall encabeza los enunciados cuantificados universalmente, como en la definición épsilon-delta \\forall \\varepsilon > 0\\ \\exists \\delta > 0. TeX lo trata como un símbolo ordinario, así que no hay espacio automático después de la variable ligada; añade \\, o \\ o un separador como dos puntos o un punto, según tu convención. En demostraciones con mucha prosa, muchas guías de estilo prefieren escribir «para todo» con palabras en lugar de \\forall. En el cálculo lambda tipado y en la teoría de tipos también introduce tipos polimórficos, por ejemplo \\forall \\alpha.\\, \\alpha \\to \\alpha.",
  },
  "exists": {
    name: "Existe",
    meaning: "Da el cuantificador existencial ∃, que se lee «existe» o «para algún».",
    usage: "\\exists afirma que al menos un elemento cumple una propiedad, como en \\exists x \\in \\mathbb{R} : x^2 = 2. La unicidad se escribe \\exists! (existe exactamente uno), y \\nexists da el símbolo negado, «no existe». Al igual que \\forall, es un símbolo ordinario, así que inserta un espacio fino o dos puntos después de la variable ligada para facilitar la lectura. El orden de los cuantificadores importa: \\forall x\\, \\exists y difiere de \\exists y\\, \\forall x, así que mantenlos en la secuencia deseada. En la escritura de lógica formal, los paréntesis alrededor del alcance, \\exists x\\,(P(x)), evitan ambigüedades.",
  },
  "element-of": {
    name: "Pertenece a",
    meaning: "Indica pertenencia: el elemento de la izquierda pertenece al conjunto de la derecha.",
    usage: "\\in es la relación básica de pertenencia a un conjunto, como en x \\in \\mathbb{R} o n \\in \\mathbb{N}, y recibe espaciado de relación. Su simétrico \\ni se lee «contiene como elemento», y \\notin es su negación. No lo confundas con \\epsilon ni con \\varepsilon, que son letras griegas de aspecto parecido pero con espaciado y significado distintos. En sumas y en la notación de conjuntos por comprensión liga el índice, como en \\sum_{x \\in S} f(x) o \\{x \\in X : f(x) > 0\\}. Para las relaciones de inclusión entre dos conjuntos usa \\subseteq, no \\in.",
  },
  "not-element-of": {
    name: "No pertenece a",
    meaning: "Indica no pertenencia: el elemento de la izquierda no pertenece al conjunto dado.",
    usage: "\\notin es una versión tachada específica de \\in, compuesta como relación, como en \\sqrt{2} \\notin \\mathbb{Q}. Escribir \\not\\in da un resultado parecido, pero \\notin coloca mejor la barra y es la opción estándar. Sus compañeros naturales son \\in y \\ni, y para la inclusión negada se usaría \\not\\subset o \\nsubseteq. Entre las frases típicas están las demostraciones por reducción al absurdo y las descripciones de complementarios, como x \\in A^c \\iff x \\notin A. En los cuantificadores, \\forall x \\notin S es una abreviatura aceptable, pero explicitar el dominio es más claro.",
  },
  "subset": {
    name: "Subconjunto",
    meaning: "Indica que un conjunto está contenido en otro; a menudo se lee como subconjunto propio o estricto.",
    usage: "Las convenciones varían: algunos autores usan \\subset para cualquier subconjunto, y otros lo reservan para los subconjuntos propios y usan \\subseteq cuando se admite la igualdad. Para evitar ambigüedades, muchos artículos escriben \\subseteq para «subconjunto o igual» y \\subsetneq para «subconjunto propio», y enuncian la convención una vez. La relación inversa es \\supset. Entre los enunciados típicos están \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} y las inclusiones de subespacios en álgebra lineal. La negación \\not\\subset funciona, y \\nsubseteq da un glifo más limpio para «no es subconjunto ni igual». Adoptes la lectura que adoptes, evita alternar entre ambas dentro de un mismo documento.",
  },
  "union": {
    name: "Unión",
    meaning: "Forma la unión de conjuntos: todos los elementos que pertenecen al menos a uno de ellos.",
    usage: "\\cup es un operador binario, como en A \\cup B, y recibe un espacio medio a ambos lados. Para la unión de una familia indexada, usa el operador grande \\bigcup, que apila los límites en modo display: \\bigcup_{i=1}^{\\infty} A_i. La unión disjunta suele escribirse \\sqcup o \\dot\\cup. En probabilidad, A \\cup B corresponde al suceso «A o B», lo que da P(A \\cup B) = P(A) + P(B) - P(A \\cap B). No uses la letra U ni el \\lor lógico en lugar de la unión de conjuntos.",
  },
  "intersection": {
    name: "Intersección",
    meaning: "Forma la intersección de conjuntos: los elementos comunes a todos ellos.",
    usage: "\\cap es un operador binario que se escribe entre conjuntos, como en A \\cap B, mientras que \\bigcap es la versión de operador grande para familias, \\bigcap_{n} U_n. En probabilidad representa sucesos conjuntos, de modo que P(A \\cap B) = P(A)P(B) define la independencia. Su contrapartida lógica es \\land (y), y el ínfimo de la teoría de retículos, \\wedge, se le parece pero es un glifo distinto. Las leyes de De Morgan la relacionan con la unión: (A \\cup B)^c = A^c \\cap B^c. Si A \\cap B = \\emptyset, los conjuntos son disjuntos.",
  },
  "empty-set": {
    name: "Conjunto vacío",
    meaning: "Denota el conjunto vacío, el único conjunto que no contiene ningún elemento.",
    usage: "\\emptyset imprime el glifo por defecto del conjunto vacío, un círculo con una barra. Muchos matemáticos prefieren la forma más redonda \\varnothing, que se distingue de un cero tachado y es habitual en los textos modernos. Elige una y úsala de forma coherente. Sus usos típicos son la disjunción A \\cap B = \\emptyset y los resultados en notación de conjuntos por comprensión. No lo confundas con la letra escandinava Ø ni con \\phi y \\varphi. Escribir \\{\\} para el conjunto vacío también es aceptable, pero ten en cuenta que \\{\\emptyset\\} es un conjunto con un elemento.",
  },
  "partial-derivative": {
    name: "Derivada parcial",
    meaning: "Escribe la ∂ curva de las derivadas parciales, que también denota la frontera de un conjunto en topología.",
    usage: "\\partial aparece en derivadas parciales como \\frac{\\partial f}{\\partial x} y en derivadas parciales cruzadas \\frac{\\partial^2 f}{\\partial x\\,\\partial y}. En topología y geometría, \\partial A es la frontera de un conjunto o de una variedad, como en el teorema de Stokes \\int_{\\partial M} \\omega = \\int_M d\\omega. Para formas abreviadas con subíndice, \\partial_x f y \\partial_t u son habituales en los artículos de EDP. No la confundas con \\delta (variación) ni con d (derivada total). Colocar un espacio fino entre los factores \\partial del denominador mejora el espaciado.",
  },
  "nabla": {
    name: "Nabla",
    meaning: "Escribe el nabla ∇, el operador diferencial vectorial del gradiente, la divergencia y el rotacional.",
    usage: "\\nabla f es el gradiente, \\nabla \\cdot \\mathbf{F} la divergencia, \\nabla \\times \\mathbf{F} el rotacional, y \\nabla^2 o \\Delta el laplaciano. En aprendizaje automático, \\nabla_\\theta L(\\theta) denota el gradiente de una función de pérdida respecto de los parámetros, como en el descenso de gradiente \\theta \\leftarrow \\theta - \\eta \\nabla_\\theta L. Los geómetras diferenciales usan \\nabla para una conexión o una derivada covariante, \\nabla_X Y. Es un símbolo ordinario, así que no se inserta espaciado adicional. Algunos autores lo ponen en negrita con \\boldsymbol{\\nabla} para subrayar que es un operador vectorial.",
  },
  "plus-minus": {
    name: "Más menos",
    meaning: "Da el signo más o menos ±, para dos alternativas o para una tolerancia alrededor de un valor.",
    usage: "\\pm aparece en la fórmula cuadrática x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a} y en la incertidumbre de medida, como 9.81 \\pm 0.02. Su contrapartida \\mp (menos más) se usa cuando los signos deben alternarse a la vez, como en \\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b. Es un operador binario, así que TeX lo espacia como +. En las tablas de resultados experimentales, alinea los números en torno al signo \\pm para facilitar la lectura. Los textos de finanzas lo usan para rangos como una rentabilidad del 5\\% \\pm 2\\%.",
  },
  "dot-product": {
    name: "Producto escalar",
    meaning: "Coloca un punto centrado, que se usa para el producto escalar y para la multiplicación entre factores.",
    usage: "\\cdot es un operador binario situado en el eje matemático, como en \\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i y en productos como 2 \\cdot 3. También marca un argumento genérico, como en \\|\\cdot\\| o f(\\cdot). No uses un punto, que se apoya en la línea base, ni \\bullet, que es más grande. Para unos puntos suspensivos entre factores multiplicados usa \\cdots, centrados verticalmente, frente a \\ldots para las listas. Usa \\times para el producto vectorial y la notación científica, y reserva \\cdot para los productos escalares e internos.",
  },
};

export default text;
