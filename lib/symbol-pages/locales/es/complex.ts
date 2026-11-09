import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/complex/<slug>. */
const text: SymbolPageTranslations = {
  "imaginary-unit": {
    name: "Unidad imaginaria",
    meaning: "La unidad imaginaria, un número cuyo cuadrado es −1; la base de la aritmética compleja.",
    usage: "Matemáticos y físicos escriben i para la raíz cuadrada de -1, lo que da z = a + bi y el i\\hbar de la ecuación de Schrödinger. En modo matemático una i simple va en cursiva, igual que una variable de índice, así que en artículos que también suman sobre i es más seguro usar la i redonda \\mathrm{i}, que es lo que recomienda la norma ISO de composición tipográfica; una macro como \\newcommand{\\iu}{\\mathrm{i}} mantiene la coherencia. No uses \\imath para la unidad imaginaria: es una i sin punto pensada para colocar acentos, como \\hat{\\imath} para vectores unitarios. En teoría de juegos también se usa i como índice de jugador.",
  },
  "imaginary-unit-engineering": {
    name: "Unidad imaginaria (ingeniería)",
    meaning: "Símbolo de ingeniería para la unidad imaginaria, elegido porque la i se reserva para la corriente eléctrica.",
    usage: "Los ingenieros eléctricos escriben las impedancias como Z = R + jX y los fasores como V e^{j\\omega t}, y Python usa j para los literales complejos por el mismo motivo histórico. Los textos de procesamiento de señales también siguen esta convención y escriben la transformada de Fourier con e^{-j\\omega t}. Como con la i, una j redonda \\mathrm{j} distingue la constante de una variable de índice j. \\jmath, la j sin punto, es para acentos como \\hat{\\jmath}, no para la unidad imaginaria. Ten en cuenta que muchos libros colocan la j antes del número y escriben j5 en lugar de 5j.",
  },
  "complex-number": {
    name: "Número complejo",
    meaning: "Forma binómica (cartesiana) de un número complejo, con parte real a y parte imaginaria b.",
    usage: "Todo número complejo puede escribirse como a + bi con a y b reales; esta forma es la más adecuada para sumar y para leer \\Re z = a y \\Im z = b. La multiplicación y las potencias suelen ser más fáciles en forma polar r e^{i\\theta}. Escribir bi, con la unidad al final, es la convención habitual, aunque los ingenieros suelen escribir a + jb. Si tu documento compone la i en redonda, mantenla también en redonda aquí: a + b\\mathrm{i}. Cuando b es negativo, escribe a - bi en lugar de a + (-b)i, y en números concretos pon la i después de las cifras, como en 3 + 4i.",
  },
  "real-part": {
    name: "Parte real",
    meaning: "Parte real del número complejo z: para z = a + bi devuelve el número real a.",
    usage: "El comando predefinido \\Re imprime una R mayúscula gótica (Fraktur), el símbolo tradicional de la parte real, pero a muchos autores actuales les resulta poco legible y escriben \\operatorname{Re}(z), que produce «Re» en redonda con espaciado de operador. En cualquier caso, \\Re es solo un símbolo, no un operador, así que TeX no añade espacio antes del argumento; usa paréntesis o un espacio fino. Una identidad útil es \\Re z = (z + \\bar{z})/2. En procesamiento de señales es habitual \\Re\\{\\cdot\\} con llaves para extraer la señal física de un fasor.",
  },
  "imaginary-part": {
    name: "Parte imaginaria",
    meaning: "Parte imaginaria de z, el coeficiente real b en z = a + bi (no el término bi en sí).",
    usage: "Un error frecuente de los estudiantes es pensar que \\Im(3 + 4i) = 4i; es 4, un número real. El símbolo es una I gótica (Fraktur) y, como \\Re, puede resultar oscuro, así que \\operatorname{Im}(z) es una alternativa popular y más legible. Ojo: Im también abrevia la imagen de una aplicación en álgebra; si aparecen ambos significados, escribe \\operatorname{im} f para la imagen y evita así el conflicto. Son datos útiles que \\Im z = (z - \\bar{z})/(2i) y que el semiplano superior es el conjunto donde \\Im z > 0.",
  },
  "complex-conjugate": {
    name: "Conjugado complejo",
    meaning: "Conjugado complejo de z, su reflexión respecto del eje real: el conjugado de a + bi es a − bi.",
    usage: "Los matemáticos escriben \\bar{z}, e identidades como z\\bar{z} = |z|^2 lo hacen esencial para dividir números complejos. \\bar es un acento de ancho fijo pensado para un solo carácter; para conjugar una expresión usa \\overline{z + w}, que se extiende sobre todo el argumento y hace legible \\overline{z + w} = \\bar{z} + \\bar{w}. Los físicos escriben más a menudo z^* y reservan la barra para otros usos, como los adjuntos de Dirac \\bar{\\psi}. En el cálculo de Wirtinger, \\partial / \\partial \\bar{z} trata \\bar{z} como una variable independiente.",
  },
  "complex-conjugate-star": {
    name: "Conjugado complejo (asterisco)",
    meaning: "Notación con asterisco para el conjugado complejo, estándar en física e ingeniería eléctrica.",
    usage: "La mecánica cuántica escribe las probabilidades como \\psi^* \\psi y los productos internos con componentes conjugadas, así que allí z^* es lo habitual. En un superíndice el asterisco funciona tal cual se escribe; z^{\\ast} da el mismo glifo. Para matrices, A^* suele significar en matemáticas la traspuesta conjugada, mientras que los físicos escriben A^\\dagger para ella y reservan A^* para la conjugación elemento a elemento, así que indica tu convención. Un asterisco también puede marcar un óptimo (x^*) o un espacio dual (V^*), así que evita esta notación si esos significados aparecen cerca.",
  },
  "modulus": {
    name: "Módulo",
    meaning: "Módulo (valor absoluto) de z, su distancia al origen: √(a² + b²) para z = a + bi.",
    usage: "Las barras verticales simples sirven en casos sencillos, pero son ambiguas para TeX, que no distingue la de apertura de la de cierre; eso provoca un mal espaciado en expresiones como |-z|. Usa \\lvert z \\rvert, o define una macro, para obtener el espaciado correcto, y \\left| \\frac{z}{w} \\right| cuando el contenido es alto. Nunca uses \\mid aquí: es una relación con espaciado ancho. Las propiedades clave son |zw| = |z||w| y la desigualdad triangular |z + w| \\leq |z| + |w|. En contextos vectoriales, las barras dobles \\| \\| denotan en cambio una norma.",
  },
  "argument": {
    name: "Argumento",
    meaning: "Argumento de z: el ángulo desde el semieje real positivo hasta z, definido salvo múltiplos de 2π.",
    usage: "\\arg es un nombre de operador predefinido, así que se imprime en redonda y con el espaciado correcto; escribir arg sin barra invertida da letras en cursiva. Como el ángulo es multivaluado, \\arg z se trata a menudo como un conjunto \\{\\theta + 2\\pi k\\}, y \\arg(zw) = \\arg z + \\arg w solo se cumple módulo 2\\pi. Para el valor principal, univaluado, se escribe \\operatorname{Arg} z con mayúscula. No confundas \\arg con operadores del tipo argmax, que devuelven el valor de entrada que optimiza y necesitan su propia declaración.",
  },
  "principal-argument": {
    name: "Argumento principal",
    meaning: "Valor principal del argumento, el único ángulo en (−π, π] que forma z con el semieje real positivo.",
    usage: "La mayúscula distingue este Arg univaluado del \\arg multivaluado. El corte de rama está sobre el semieje real negativo, por eso \\text{Arg}(-1) = \\pi pero los valores justo por debajo del corte tienden a -\\pi. Algunos libros usan [0, 2\\pi), así que indica a qué intervalo te refieres. LaTeX no tiene un comando \\Arg; \\text{Arg} funciona, pero pasa a cursiva dentro de los entornos de teorema. \\operatorname{Arg} o \\DeclareMathOperator{\\Arg}{Arg} es más robusto y da el espaciado adecuado antes del argumento. Por ejemplo, \\text{Arg}(i) = \\pi/2, mientras que \\arg i es todo el conjunto \\pi/2 + 2\\pi k.",
  },
  "polar-form": {
    name: "Forma polar",
    meaning: "Forma polar (exponencial) de un número complejo: el módulo r por un número complejo unitario de ángulo θ.",
    usage: "Multiplicar en forma polar consiste simplemente en multiplicar los módulos y sumar los ángulos, así que (r e^{i\\theta})^n = r^n e^{in\\theta}, que es el teorema de De Moivre en forma compacta. Las raíces de la unidad e^{2\\pi i k/n} y los fasores A e^{i\\omega t} salen directamente de esta notación. Pon todo el exponente entre llaves; e^i\\theta elevaría e solo a i. Cuando los exponentes se recargan, \\exp(i\\theta) se lee mejor que un superíndice diminuto. Algunas guías de estilo componen la constante en redonda, \\mathrm{e}, para distinguirla de una variable.",
  },
  "euler-s-formula": {
    name: "Fórmula de Euler",
    meaning: "Fórmula de Euler, que relaciona la exponencial compleja con el coseno y el seno; sitúa e^{iθ} en la circunferencia unidad.",
    usage: "Tomar \\theta = \\pi da la identidad de Euler e^{i\\pi} + 1 = 0, y despejar el coseno de la fórmula da \\cos\\theta = (e^{i\\theta} + e^{-i\\theta})/2. Observa que \\cos y \\sin son comandos de operador: se imprimen en redonda y añaden un espacio fino antes de \\theta, mientras que escribir cos daría tres letras en cursiva. No hacen falta paréntesis para un argumento de un solo símbolo como \\theta, pero úsalos con argumentos compuestos, \\sin(2\\theta). En contextos de ingeniería la misma identidad se escribe con j en lugar de i.",
  },
  "complex-exponential": {
    name: "Exponencial compleja",
    meaning: "Función exponencial evaluada en un número complejo z = x + iy, igual a eˣ(cos y + i sen y).",
    usage: "La exponencial compleja es entera, nunca se anula y es periódica de periodo 2\\pi i, por eso su inversa, el logaritmo, es multivaluada. Con exponentes cortos e^{z} está bien; para algo como e^{-(x - \\mu)^2/2\\sigma^2} el superíndice se vuelve diminuto y \\exp\\left( -\\frac{(x-\\mu)^2}{2\\sigma^2} \\right) se lee mejor. \\exp es un operador predefinido. Pon siempre entre llaves los exponentes de varios elementos. Algunas editoriales piden la constante en redonda, \\mathrm{e}, para distinguirla de una variable e. Su derivada es ella misma, lo que la convierte en la pieza básica de las soluciones de las EDO lineales.",
  },
  "complex-logarithm": {
    name: "Logaritmo complejo",
    meaning: "Logaritmo complejo de z, una inversa multivaluada de la exponencial: ln|z| + i arg z.",
    usage: "Como la exponencial se repite cada 2\\pi i, \\log z tiene infinitos valores que difieren en 2\\pi i k. La rama principal suele escribirse con mayúscula, \\operatorname{Log} z = \\ln|z| + i \\operatorname{Arg} z, y es analítica fuera del corte de rama sobre los reales negativos. \\log y \\ln son ambos operadores predefinidos; en análisis es habitual escribir \\log para el logaritmo natural, mientras que \\ln hace explícita la base. Tras \\log aparece automáticamente un espacio fino, así que \\log z no necesita paréntesis para una sola variable.",
  },
  "complex-power": {
    name: "Potencia compleja",
    meaning: "Potencia compleja de z elevado a w, definida como exp(w log z) y en general multivaluada.",
    usage: "El sorprendente resultado i^i = e^{-\\pi/2} (en la rama principal) procede de esta definición. Como \\log z es multivaluado, z^w tiene muchos valores salvo que w sea entero, y reglas como (z^a)^b = z^{ab} pueden fallar. Pon entre llaves los exponentes de más de un elemento: z^{w+1}, no z^w+1. En torres como z^{w^v}, TeX reduce cada nivel, así que considera la notación \\exp por legibilidad. Indica la rama explícitamente cuando dependas de un valor concreto, por ejemplo escribiendo \\exp(w \\operatorname{Log} z).",
  },
  "unit-circle": {
    name: "Circunferencia unidad",
    meaning: "Ecuación de la circunferencia unidad en el plano complejo: todos los números complejos a distancia 1 del origen.",
    usage: "Los puntos de la circunferencia unidad son exactamente los e^{i\\theta}, y las raíces n-ésimas de la unidad están sobre ella. Suele denotarse \\mathbb{T} o S^1, y como grupo con la multiplicación es el grupo circular que se usa en análisis de Fourier. Las integrales de contorno sobre ella se escriben \\oint_{|z|=1}, con la condición como subíndice. Para la conjugación sobre la circunferencia, \\bar{z} = 1/z es una simplificación práctica. Si el espaciado alrededor de las barras no queda bien en contexto, usa \\lvert z \\rvert; el disco abierto |z| < 1 y el disco cerrado |z| \\le 1 siguen el mismo patrón.",
  },
  "upper-half-plane": {
    name: "Semiplano superior",
    meaning: "H en negrita de pizarra, casi siempre el semiplano superior {z : Im z > 0}; también los cuaterniones.",
    usage: "En análisis complejo y teoría de números, \\mathbb{H} es el dominio de las formas modulares, sobre el que actúa SL_2(\\mathbb{Z}) mediante transformaciones de Möbius, y está dotado de la métrica hiperbólica. En álgebra la misma letra denota los cuaterniones de Hamilton, que llevan su nombre, así que si aparecen ambos escribe \\mathcal{H} o explica a cuál te refieres. Con las fuentes estándar, \\mathbb solo proporciona letras mayúsculas; los argumentos en minúscula producen basura o errores. Los conjuntos relacionados se componen igual: \\mathbb{C}, \\mathbb{R}, \\mathbb{Z}. Su frontera es la recta real junto con un punto del infinito.",
  },
};

export default text;
