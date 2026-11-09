import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/trigonometry/<slug>. */
const text: SymbolPageTranslations = {
  "sine": {
    name: "Seno",
    meaning: "Función seno, impresa en redonda como operador con nombre y con el espaciado correcto.",
    usage: "Escribe siempre \\sin en lugar de sin: las letras sueltas se componen como tres variables en cursiva multiplicadas entre sí. El operador añade un espacio fino antes de su argumento, por lo que \\sin x no necesita paréntesis para un solo símbolo, mientras que \\sin(2x) o \\sin\\left(\\frac{\\pi}{2}\\right) agrupan argumentos más largos. Las potencias van justo después del comando: \\sin^2 x + \\cos^2 x = 1. Ten en cuenta que \\sin^{-1} x es la función inversa, no el recíproco \\csc x. Entre las fórmulas habituales están la identidad del ángulo doble \\sin 2\\theta = 2\\sin\\theta\\cos\\theta y la serie de Taylor x - x^3/3! + \\cdots.",
  },
  "cosine": {
    name: "Coseno",
    meaning: "Función coseno, compuesta en redonda como operador matemático con nombre, igual que \\sin.",
    usage: "\\cos aparece en el teorema del coseno c^2 = a^2 + b^2 - 2ab\\cos C, en la fórmula de Euler e^{i\\theta} = \\cos\\theta + i\\sin\\theta y en la forma angular del producto escalar, de donde procede la similitud coseno del aprendizaje automático. Escribir cos sin barra invertida produce letras en cursiva y un espaciado incorrecto. Escribe \\cos^2\\theta para el cuadrado del coseno; \\cos\\theta^2 significa el coseno de theta al cuadrado, que es otra magnitud. El comando no toma argumento por sí mismo, así que agrupa los argumentos compuestos con paréntesis, como en \\cos(\\omega t + \\phi).",
  },
  "tangent": {
    name: "Tangente",
    meaning: "Función tangente, el cociente entre seno y coseno, compuesta en redonda.",
    usage: "Definida como \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, no está definida donde \\cos\\theta = 0, es decir, en los múltiplos impares de \\pi/2. En geometría, las pendientes son tangentes de ángulos de inclinación, y la identidad 1 + \\tan^2\\theta = \\sec^2\\theta se obtiene dividiendo la identidad pitagórica entre \\cos^2\\theta. Algunos textos europeos escriben tg, que no tiene comando predefinido; usa \\operatorname{tg} si lo necesitas. La fórmula de adición \\tan(a+b) = \\frac{\\tan a + \\tan b}{1 - \\tan a\\tan b} es una ecuación destacada habitual.",
  },
  "cotangent": {
    name: "Cotangente",
    meaning: "Cotangente, el recíproco de la tangente, escrita como operador en redonda.",
    usage: "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{1}{\\tan\\theta}, con polos en los múltiplos enteros de \\pi. Aparece en la identidad 1 + \\cot^2\\theta = \\csc^2\\theta y en el clásico desarrollo en fracciones parciales de \\pi\\cot\\pi z que se usa para sumar \\sum 1/n^2. Los textos rusos y algunos europeos escriben ctg; usa \\operatorname{ctg} para ello. Su inversa suele escribirse arccot, que no tiene comando predefinido. Recuerda que \\cot x es el recíproco de la tangente, no la función inversa \\tan^{-1} x. Su derivada es -\\csc^2 x.",
  },
  "secant": {
    name: "Secante",
    meaning: "Secante, el recíproco del coseno, como operador con nombre en redonda.",
    usage: "\\sec\\theta = 1/\\cos\\theta, y su cuadrado aparece como derivada de la tangente, \\frac{d}{dx}\\tan x = \\sec^2 x. La integral \\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C es un clásico de los cursos de cálculo y de las fórmulas de la proyección de Mercator. Escribir sec sin barra invertida deja letras en cursiva y pierde el espacio antes del argumento. En geometría, una recta secante es un objeto distinto, que se nombra con palabras y no con este comando. Como en los demás comandos trigonométricos, las potencias van pegadas al comando, \\sec^2 x, con el argumento detrás.",
  },
  "cosecant": {
    name: "Cosecante",
    meaning: "Cosecante, el recíproco del seno, compuesta como operador en redonda.",
    usage: "\\csc\\theta = 1/\\sin\\theta, no definida en los múltiplos enteros de \\pi. Su derivada es \\frac{d}{dx}\\csc x = -\\csc x\\cot x, y la identidad 1 + \\cot^2 x = \\csc^2 x completa el trío pitagórico. Algunos libros, sobre todo británicos antiguos, la abrevian cosec; esa forma requiere \\operatorname{cosec}. Un error frecuente es escribir \\sin^{-1} x cuando se quiere decir \\csc x: el superíndice -1 denota la función inversa arcoseno, no el recíproco. Las potencias van justo después del comando, como en \\csc^2 x, seguidas del argumento.",
  },
  "arcsine": {
    name: "Arcoseno",
    meaning: "Arcoseno, la inversa del seno restringido a [-pi/2, pi/2], como operador en redonda.",
    usage: "\\arcsin x devuelve el ángulo de [-\\pi/2, \\pi/2] cuyo seno es x, para x en [-1, 1]. Es la alternativa sin ambigüedad a \\sin^{-1} x, que algunos lectores interpretan erróneamente como 1/\\sin x. Su derivada \\frac{1}{\\sqrt{1-x^2}} da la integral estándar \\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C, básica en la sustitución trigonométrica. Las bibliotecas de software la llaman asin, pero los nombres de programación no deben aparecer en fórmulas compuestas; usa siempre el comando con barra invertida para que se imprima en redonda y bien espaciado. Agrupa los argumentos compuestos con paréntesis.",
  },
  "arccosine": {
    name: "Arcocoseno",
    meaning: "Arcocoseno, que devuelve el ángulo de [0, pi] cuyo coseno es un valor dado.",
    usage: "El ángulo entre dos vectores, \\theta = \\arccos\\frac{\\mathbf{a}\\cdot\\mathbf{b}}{\\lVert\\mathbf{a}\\rVert\\lVert\\mathbf{b}\\rVert}, es quizá su aparición más común. Su recorrido es [0, \\pi] y su derivada es -\\frac{1}{\\sqrt{1-x^2}}, razón por la cual \\arcsin x + \\arccos x = \\frac{\\pi}{2} para todo x en [-1, 1]. \\cos^{-1} x significa lo mismo, pero \\arccos evita la confusión con el recíproco. Envuelve los argumentos largos en \\left( \\right) para mayor claridad, ya que el operador no aporta paréntesis propios. En geometría computacional, el argumento suele acotarse primero a [-1, 1] para evitar errores de redondeo.",
  },
  "arctangent": {
    name: "Arcotangente",
    meaning: "Arcotangente, que da el ángulo de (-pi/2, pi/2) cuya tangente es x.",
    usage: "\\arctan x aparece en \\int \\frac{dx}{1+x^2} = \\arctan x + C y en la fórmula de Machin \\frac{\\pi}{4} = 4\\arctan\\frac{1}{5} - \\arctan\\frac{1}{239}. Para el ángulo polar de un punto (x, y) en los cuatro cuadrantes, los programadores usan atan2; en los artículos, escribe \\operatorname{atan2}(y, x) o el argumento complejo \\arg(x + iy). \\tan^{-1} x es un sinónimo aceptado, más común en ingeniería. La serie \\arctan x = x - x^3/3 + x^5/5 - \\cdots converge para |x| \\le 1 y da la serie de Leibniz en x = 1.",
  },
  "arccotangent": {
    name: "Arcocotangente",
    meaning: "Cotangente inversa, escrita mediante \\text porque LaTeX no tiene un \\arccot predefinido.",
    usage: "El LaTeX estándar define \\arcsin, \\arccos y \\arctan, pero no \\arccot, así que esta entrada construye la etiqueta a partir de texto. Una opción más limpia es \\operatorname{arccot} x, que añade el espaciado de operador, o \\DeclareMathOperator{\\arccot}{arccot} en el preámbulo, para que \\arccot x funcione como sus hermanos predefinidos. Las convenciones sobre su recorrido varían: algunos textos usan (0, \\pi) y otros (-\\pi/2, \\pi/2] sin el 0, así que indica cuál usas. Su derivada es -\\frac{1}{1+x^2} con cualquiera de las dos. Algunos autores escriben \\cot^{-1} en su lugar. Elige una forma y úsala en todo el documento.",
  },
  "arcsecant": {
    name: "Arcosecante",
    meaning: "Secante inversa, escrita con \\text ya que LaTeX no predefine \\arcsec.",
    usage: "Definida para |x| \\ge 1, \\text{arcsec}\\, x = \\arccos(1/x). Su derivada es \\frac{1}{|x|\\sqrt{x^2-1}} con el recorrido habitual [0, \\pi] excluido \\pi/2, y el valor absoluto es un olvido frecuente en los trabajos de los estudiantes. Como \\text no añade espaciado de operador, inserta \\, antes del argumento o cambia a \\operatorname{arcsec}. Declarar una vez \\DeclareMathOperator{\\arcsec}{arcsec} permite escribir \\arcsec x igual que \\arccos x. Las tablas de integrales expresan \\int \\frac{dx}{x\\sqrt{x^2-1}} en términos de ella. Se usa poco en los artículos modernos, que suelen reescribirla como el arcocoseno del recíproco.",
  },
  "arccosecant": {
    name: "Arcocosecante",
    meaning: "Cosecante inversa, construida con \\text porque no existe un \\arccsc predefinido.",
    usage: "Para |x| \\ge 1, \\text{arccsc}\\, x = \\arcsin(1/x), con valores en [-\\pi/2, \\pi/2] excluido el 0. Su derivada es -\\frac{1}{|x|\\sqrt{x^2-1}}. Es la menos usada de las seis funciones trigonométricas inversas, por lo que la mayoría de los autores la convierten a la forma de arcoseno en los resultados finales. Para un espaciado correcto, usa \\operatorname{arccsc} o declárala como operador matemático en el preámbulo en lugar de depender de \\text, que además pasa a cursiva dentro de los entornos de teorema. Algunos libros escriben \\csc^{-1} x, con el riesgo habitual de que se lea como un recíproco.",
  },
  "inverse-sine": {
    name: "Seno inverso",
    meaning: "Seno inverso escrito con un superíndice -1, equivalente al arcoseno.",
    usage: "Las calculadoras y muchos textos de ingeniería denotan el arcoseno como \\sin^{-1}, de modo que \\sin^{-1}(0.5) = \\frac{\\pi}{6}. La notación choca con \\sin^2 x = (\\sin x)^2: por analogía, \\sin^{-1} x podría leerse como 1/\\sin x, que en realidad es \\csc x. Por eso los textos de matemática pura suelen preferir \\arcsin. Las llaves alrededor de -1 son obligatorias, y LaTeX coloca el superíndice justo después del nombre del operador, de modo que \\sin^{-1} x se muestra con el exponente antes del argumento. Sea cual sea la notación elegida, úsala de forma coherente en todo el documento.",
  },
  "inverse-cosine": {
    name: "Coseno inverso",
    meaning: "Coseno inverso en notación de superíndice, la misma función que arccos.",
    usage: "La física y la ingeniería suelen escribir \\cos^{-1} para los ángulos, por ejemplo el ángulo entre dos vectores calculado a partir de su producto escalar normalizado. No es el recíproco 1/\\cos x, que es \\sec x; aquí el superíndice -1 significa función inversa. El recorrido es [0, \\pi], así que \\cos^{-1}(-1) = \\pi. Los artículos de matemática pura suelen elegir \\arccos para evitar la ambigüedad. Si tu texto mezcla \\cos^2 x para cuadrados y \\cos^{-1} x para inversas, menciona la convención una vez para que los lectores no tengan que adivinar.",
  },
  "inverse-tangent": {
    name: "Tangente inversa",
    meaning: "Tangente inversa escrita como tan elevado a -1, equivalente a arctan.",
    usage: "La ingeniería y la física usan \\tan^{-1} para los ángulos de fase, como en \\phi = \\tan^{-1}(\\omega L / R) para un circuito RL, y para convertir pendientes en ángulos. Como en las demás formas inversas, no es \\cot x, el recíproco. Su recorrido es (-\\pi/2, \\pi/2), por lo que no distingue cuadrantes opuestos; los artículos que necesiten el ángulo completo deben indicar que usan la versión de dos argumentos. Muchas guías de estilo prefieren \\arctan en matemáticas pero aceptan \\tan^{-1} en trabajos aplicados, siempre que el significado sea coherente.",
  },
  "hyperbolic-sine": {
    name: "Seno hiperbólico",
    meaning: "Seno hiperbólico, (e^x - e^{-x})/2, compuesto como operador en redonda.",
    usage: "\\sinh x = \\frac{e^x - e^{-x}}{2} parametriza la hipérbola unitaria junto con \\cosh, y por eso \\cosh^2 x - \\sinh^2 x = 1. Aparece en la relatividad especial a través de la rapidez, en problemas de catenarias y en las soluciones de y'' = y. Su derivada es \\cosh x sin cambio de signo, a diferencia del seno circular. La inversa suele escribirse \\operatorname{arsinh} o \\sinh^{-1}; LaTeX no ofrece un comando predefinido para ella. Escribir sinh sin la barra invertida da cuatro letras en cursiva y un espaciado deficiente.",
  },
  "hyperbolic-cosine": {
    name: "Coseno hiperbólico",
    meaning: "Coseno hiperbólico, (e^x + e^{-x})/2, como operador con nombre en redonda.",
    usage: "Una cadena colgante adopta la forma de una catenaria, y = a\\cosh(x/a), la aplicación de manual. La función es par, siempre mayor o igual que 1, y cumple \\cosh^2 x - \\sinh^2 x = 1 y \\cosh(ix) = \\cos x. En relatividad especial, el factor de Lorentz es igual al coseno hiperbólico de la rapidez. Como otros operadores, \\cosh añade un espacio fino antes de un argumento de un solo símbolo, así que \\cosh x está bien sin paréntesis. Su inversa no tiene comando predefinido; usa \\operatorname{arcosh} o \\cosh^{-1}.",
  },
  "hyperbolic-tangent": {
    name: "Tangente hiperbólica",
    meaning: "Tangente hiperbólica, sinh entre cosh, con valores entre -1 y 1.",
    usage: "Las redes neuronales usan \\tanh como función de activación, a menudo comparada con la sigmoide logística mediante \\tanh x = 2\\sigma(2x) - 1. Su derivada es 1 - \\tanh^2 x, lo que mantiene compactas las fórmulas de retropropagación. En física aparece en la magnetización de campo medio, m = \\tanh(\\beta J z m), y en la suma relativista de velocidades. Su recorrido (-1, 1) la hace útil para comprimir magnitudes no acotadas. Su inversa \\operatorname{artanh} debe escribirse a mano o declararse, ya que LaTeX no tiene un comando predefinido para ella.",
  },
  "inverse-hyperbolic-sine": {
    name: "Seno hiperbólico inverso",
    meaning: "Seno hiperbólico inverso, rotulado con \\text porque LaTeX no tiene un comando predefinido para él.",
    usage: "Es igual a \\ln\\left(x + \\sqrt{x^2 + 1}\\right) y da la primitiva de \\frac{1}{\\sqrt{x^2+1}}. La notación ISO lo llama arsinh, por «área seno», porque su argumento es un área y no un arco; muchos autores siguen escribiendo arcsinh o \\sinh^{-1}. Sea cual sea el nombre que elijas, \\operatorname{arsinh} o un \\DeclareMathOperator en el preámbulo da mejor espaciado que \\text, que además hereda la cursiva de los teoremas. Los científicos de datos lo usan como transformación estabilizadora de la varianza porque, a diferencia del logaritmo, admite valores cero y negativos.",
  },
  "degree-symbol": {
    name: "Símbolo de grado",
    meaning: "Círculo en superíndice que indica grados, tanto para ángulos como para temperaturas.",
    usage: "El signo de grado habitual en modo matemático es ^{\\circ}, como en 90^{\\circ} o \\angle ABC = 45^{\\circ}; eleva \\circ, el anillo de composición, a tamaño de superíndice. Para temperaturas, escribe 25^{\\circ}\\mathrm{C} con una C recta. No uses una letra o ni un dígito 0 en superíndice, que tienen la forma equivocada, ni \\circ en la línea base, que significa composición de funciones. En modo texto, \\textdegree da un signo equivalente sin entrar en modo matemático. Los documentos con muchas medidas se benefician de una macro específica para unidades que gestione el espaciado y las fuentes de forma coherente.",
  },
  "radians": {
    name: "Radianes",
    meaning: "Etiqueta de unidad «rad» en redonda que indica un ángulo medido en radianes.",
    usage: "Los radianes son adimensionales, así que la mayoría de los textos matemáticos omiten la unidad y escriben \\theta = \\pi/2; la física y la ingeniería suelen añadirla explícitamente, como en \\omega = 2\\pi\\,\\text{rad/s}. Pon un espacio fino \\, entre el número y la unidad y mantén la unidad en redonda; \\text lo hace, aunque \\mathrm{rad} es más seguro porque \\text copia la fuente circundante en contextos en cursiva. La conversión es \\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\cdot \\pi/180. Ten en cuenta que rad también abrevia el radical de un ideal en álgebra, que suele escribirse \\operatorname{rad}(I).",
  },
};

export default text;
