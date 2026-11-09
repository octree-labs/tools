import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/functions/<slug>. */
const text: SymbolPageTranslations = {
  "function": {
    name: "Función",
    meaning: "Función f aplicada a un argumento x, la notación básica para el valor de una función.",
    usage:
      "Los nombres de una sola letra como f, g y h se escriben en cursiva, lo cual es correcto para símbolos que representan funciones. Las funciones con nombre de varias letras son distintas: escribe \\sin x o \\log x, y para tus propios nombres usa \\operatorname{softmax}(z), de modo que se impriman en redonda y no como un producto de letras en cursiva. En optimización, f(x) suele ser la función objetivo, como en \\min_x f(x) sujeto a restricciones. Cuando el argumento es alto, usa \\left( \\right) o \\bigl( \\bigr) para dimensionar los paréntesis. Para argumentos vectoriales es habitual f(\\mathbf{x}) con la x en negrita.",
  },
  "function-definition": {
    name: "Definición de función",
    meaning: "Declara f como una función del dominio A en el codominio B.",
    usage:
      "Esta línea de signatura abre la mayoría de las definiciones en análisis y álgebra, a menudo seguida de la regla sobre los elementos x \\mapsto x^2. Escribir unos dos puntos sin más da espaciado de relación a ambos lados, que queda demasiado ancho; \\colon da el espaciado ajustado propio de la puntuación, f\\colon A \\to B. \\to y \\rightarrow producen la misma flecha; \\longrightarrow añade énfasis en las fórmulas destacadas. Combínala con \\mapsto para la regla sobre los elementos: f\\colon \\mathbb{R} \\to \\mathbb{R}, x \\mapsto x^2. Los diagramas con varias aplicaciones entre varios objetos se dibujan mejor con un entorno específico para diagramas conmutativos.",
  },
  "composition": {
    name: "Composición de funciones",
    meaning: "Composición de f con g, que consiste en aplicar primero g y después f al resultado.",
    usage:
      "La composición se lee de derecha a izquierda: (f \\circ g)(x) = f(g(x)), y es asociativa pero, en general, no conmutativa. \\circ es un operador binario, así que el espaciado a su alrededor es automático. No uses un \\circ a la altura de la línea base para los grados, que necesitan ^{\\circ}, y no lo confundas con \\cdot ni con \\bullet, que sugieren multiplicación. La composición repetida suele escribirse f^{\\circ n} para evitar la ambigüedad con las potencias f^n. La regla de la cadena es la fórmula clásica en la que aparece: (f \\circ g)'(x) = f'(g(x))\\,g'(x), con la derivada interior a la derecha.",
  },
  "inverse-function": {
    name: "Función inversa",
    meaning: "Función inversa de f, la aplicación que deshace f de modo que f^{-1}(f(x)) = x.",
    usage:
      "Solo las biyecciones tienen inversa en todo su codominio, pero f^{-1}(B) también se usa para la preimagen de un conjunto B bajo cualquier función, un concepto distinto que no requiere invertibilidad. El superíndice -1 no significa recíproco: f^{-1}(x) es distinto de 1/f(x), una confusión frecuente entre estudiantes que también afecta a \\sin^{-1}. Las llaves son necesarias porque -1 son dos tokens. El teorema de la función inversa da la derivada (f^{-1})'(y) = 1/f'(x), donde y = f(x), siempre que f'(x) \\neq 0.",
  },
  "image": {
    name: "Imagen",
    meaning: "Imagen de f, el conjunto de todos los valores que f toma realmente, escrita con un «Im» en redonda.",
    usage:
      "En álgebra lineal, \\text{Im}(T) es el espacio de columnas de la aplicación, y el teorema del rango y la nulidad se escribe \\dim\\ker T + \\dim \\text{Im}\\, T = \\dim V. Ten en cuenta que \\Im es un comando distinto: da una I fraktur que se usa para la parte imaginaria de un número complejo. Muchos autores escriben \\operatorname{im} en minúscula o declaran \\DeclareMathOperator{\\im}{im}, que espacia correctamente y no hereda la cursiva del texto de los teoremas como le ocurre a \\text. La notación de conjuntos f(A) es una alternativa cuando quieres la imagen de un subconjunto concreto y no de todo el dominio.",
  },
  "kernel": {
    name: "Núcleo",
    meaning: "Núcleo de f: todo lo que f envía a cero, que forma un subespacio o un subgrupo normal.",
    usage:
      "\\ker es un operador predefinido, así que se imprime en redonda con el espaciado correcto: \\ker T = \\{v \\in V \\mid T(v) = 0\\}. Un homomorfismo es inyectivo exactamente cuando su núcleo es trivial, y el primer teorema de isomorfía afirma que G/\\ker\\varphi \\cong \\operatorname{im}\\varphi. Los paréntesis son opcionales para un solo símbolo, \\ker A. En álgebra lineal el núcleo también se llama espacio nulo, a veces escrito N(A) o \\operatorname{null}(A). No existe un operador predefinido para la imagen que lo acompañe, así que declara \\im o usa \\operatorname{im}.",
  },
  "domain": {
    name: "Dominio",
    meaning: "Dominio de f, el conjunto de entradas sobre el que está definida la función.",
    usage:
      "El análisis convexo lo usa mucho: \\operatorname{dom} f = \\{x \\mid f(x) < \\infty\\} es el dominio efectivo de una función convexa con valores extendidos. \\text{dom} se imprime en redonda, pero puede adoptar la cursiva dentro de un entorno de teorema y carece del espaciado de operador; \\operatorname{dom} evita ambos problemas. En una signatura f\\colon A \\to B, A ya es el dominio, así que \\text{dom}(f) es más útil cuando el dominio es implícito o parcial, como ocurre con los operadores no acotados en espacios de Hilbert. Algunos textos usan D(f) o D_f, así que sigue la convención de tu campo.",
  },
  "codomain": {
    name: "Codominio",
    meaning: "Codominio de f, el conjunto de llegada declarado para los valores de la función.",
    usage:
      "En f\\colon A \\to B el codominio es B, que puede ser mayor que la imagen; f es sobreyectiva exactamente cuando \\text{Im}(f) = \\text{cod}(f). La teoría de categorías escribe \\operatorname{cod} f junto a \\operatorname{dom} f para el destino y el origen de un morfismo. Como con otras etiquetas de texto, \\operatorname{cod} da mejor espaciado y evita que se cuele la cursiva en los enunciados de teoremas. Algunos autores escriben \\operatorname{codom} completo para mayor claridad. Distinguir el codominio del rango es importante, porque algunos libros usan la palabra rango para el codominio y otros para la imagen.",
    example: "f \\text{ es sobreyectiva} \\iff \\text{Im}(f) = \\text{cod}(f)",
  },
  "range": {
    name: "Rango de una función",
    meaning: "Rango de f, que normalmente designa el conjunto de valores que f alcanza realmente.",
    usage:
      "La palabra es ambigua: la mayoría de los textos modernos tratan el rango como la imagen, pero algunos más antiguos lo usan para el codominio, así que indica tu definición. En álgebra lineal, \\text{range}(A) es el espacio de columnas, y el teorema fundamental del álgebra lineal dice que es el complemento ortogonal del espacio nulo de A^{\\top}. Componerlo con \\operatorname{range} da letras rectas con espaciado de operador; los especialistas en teoría de operadores suelen escribir \\mathcal{R}(A) o \\operatorname{ran} T. \\text{range} funciona, pero sigue la fuente del texto que lo rodea, incluida la cursiva.",
  },
  "surjective": {
    name: "Aplicación sobreyectiva",
    meaning: "Flecha de doble punta que indica una aplicación o un morfismo sobreyectivo.",
    usage:
      "Los algebristas escriben f\\colon A \\twoheadrightarrow B para indicar que f es sobreyectiva, por ejemplo la aplicación cociente G \\twoheadrightarrow G/N. Se combina con \\hookrightarrow para las inyecciones, de modo que una sucesión exacta corta 0 \\to A \\hookrightarrow B \\twoheadrightarrow C \\to 0 muestra ambas de un vistazo. Existe una versión hacia la izquierda, \\twoheadleftarrow, para aplicaciones dibujadas en el otro sentido. La flecha es una relación, así que el espaciado a su alrededor es automático. Evita usarla para indicar convergencia o implicación; ahí lo estándar es \\to y \\implies.",
  },
  "restriction": {
    name: "Restricción",
    meaning: "Restricción de f a un subconjunto A, que conserva la regla pero reduce el dominio.",
    usage:
      "La restricción f|_A conserva la regla pero reduce el dominio, así que f|_A\\colon A \\to B. Una barra simple es corta y el subíndice puede parecer separado de ella; muchos autores escriben f\\big|_A para obtener una barra más alta, o usan la flecha \\restriction, que parece un medio arpón. No la confundas con la barra de evaluación, F(x)\\big|_a^b, que usa la misma forma con otro propósito. Las restricciones son habituales en topología, donde se comprueba la continuidad de f|_U en abiertos, y en la teoría de haces, donde s|_U restringe una sección a un abierto más pequeño.",
  },
  "function-evaluation": {
    name: "Evaluación de una función",
    meaning: "Afirma que la función f envía la entrada x al valor de salida y.",
    usage:
      "La ecuación es la lectura de una función a nivel de elementos: y es la imagen de x, lo que también se escribe x \\mapsto y. En los cursos de álgebra, despejar x en f(x) = y es la forma de hallar funciones inversas, lo que da x = f^{-1}(y). El espaciado alrededor de = es automático, así que no añadas espacios manuales. Para una lista de valores, alinea varias ecuaciones con el entorno align, poniendo & delante de cada signo igual. Cuando el nombre de la función tiene varias letras, usa \\operatorname para que no salga en cursiva: \\operatorname{relu}(x) = y en lugar de relu(x) = y.",
  },
  "piecewise-function": {
    name: "Función definida a trozos",
    meaning: "Definición a trozos con el entorno cases, que da reglas distintas en intervalos distintos.",
    usage:
      "Dentro de cases, cada fila contiene un valor, un & y después su condición, y las filas terminan con \\\; LaTeX añade automáticamente la llave izquierda y ningún delimitador derecho. Usos típicos son el valor absoluto, la activación ReLU, la función signo y el escalón de Heaviside. Envuelve las palabras en \\text{}, como en \\text{si } x > 0, para que se impriman en redonda con el espaciado normal. Las fracciones de las filas se componen por defecto en estilo de texto, así que usa \\dfrac cuando se vean demasiado pequeñas. Asegúrate de que las condiciones cubren el dominio sin solaparse, a menudo terminando con una fila \\text{en otro caso}.",
  },
};

export default text;
