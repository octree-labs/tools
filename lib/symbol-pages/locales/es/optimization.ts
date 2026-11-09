import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/optimization/<slug>. */
const text: SymbolPageTranslations = {
  "argmax-subscript": {
    name: "Argmax con subíndice",
    meaning: "Argmax sobre x: el punto x en el que la función objetivo alcanza su valor más grande.",
    usage: "En los textos de optimización, el maximizador de f sobre un conjunto factible se escribe x^* = \\arg\\max_{x \\in \\mathcal{X}} f(x). Escrito como \\arg\\max_{x}, el subíndice se une a \\max, así que en estilo display la x queda centrada bajo max y no bajo todo arg max. \\operatorname*{arg\\,max}_{x} o un operador declarado con asterisco lo coloca bajo el nombre completo. En matemáticas en línea, el subíndice queda abajo a la derecha en cualquier caso. Como los máximos pueden no ser únicos, x^* \\in \\arg\\max es técnicamente más preciso que la igualdad. Para maximizar sobre varias variables, enuméralas: \\arg\\max_{x, y}.",
  },
  "argmin-subscript": {
    name: "Argmin con subíndice",
    meaning: "Argmin sobre x: el punto x que minimiza la función objetivo.",
    usage: "Esta forma define la solución de un problema de minimización, como en el operador proximal \\operatorname{prox}_f(v) = \\arg\\min_x \\big(f(x) + \\frac{1}{2}\\|x - v\\|_2^2\\big). Como \\arg no admite límites, el subíndice pertenece a \\min, que solo lo centra bajo min en modo display; \\operatorname*{arg\\,min} corrige la posición. Las restricciones pueden ir en el subíndice, \\arg\\min_{x \\in C}, o, si ocupan varias líneas, dentro de \\substack. Distingue argmin, que devuelve un punto o un conjunto, de \\min, que devuelve el valor; mezclarlos es un error frecuente en los trabajos de estudiantes.",
  },
  "minimize": {
    name: "Minimización",
    meaning: "Mínimo sobre x: el menor valor que toma una expresión cuando x varía, escrito con x debajo de min.",
    usage: "\\min es un operador predefinido que admite límites, así que en matemáticas display \\min_{x} coloca la x bajo la palabra, mientras que en línea aparece como subíndice a la derecha. Es la primera línea de un problema de optimización estándar: \\min_x f(x) sujeto a restricciones. Cuando el mínimo puede no alcanzarse, como ocurre con conjuntos abiertos, usa \\inf. Para forzar la colocación de estilo display en línea, escribe \\min\\limits_{x}. Para condiciones de varias líneas bajo min, usa \\substack{x \\in \\mathbb{R}^n \\\\ Ax = b}. El valor que denota es un número, a diferencia de argmin, que devuelve el minimizador.",
  },
  "maximize": {
    name: "Maximización",
    meaning: "Máximo sobre x: el mayor valor que alcanza la expresión cuando x recorre su dominio.",
    usage: "\\max_{x} funciona como \\min_{x}: el operador predefinido coloca los límites debajo en estilo display y al lado en línea. Usos típicos son la función dual, los problemas minimax como \\min_G \\max_D en el entrenamiento de GAN y la maximización del margen en las SVM. Cuando el supremo puede no alcanzarse, el operador correcto es \\sup. Combinar operadores es habitual, y TeX maneja bien los límites apilados en \\min y \\max contiguos. Puedes cambiar la colocación con \\limits o \\nolimits, y añadir \\, o \\; antes del objetivo para dar aire a las expresiones largas.",
  },
  "subject-to": {
    name: "Abreviatura s.t. (sujeto a)",
    meaning: "Abreviatura del inglés «subject to» (sujeto a), que introduce las restricciones de un problema de optimización.",
    usage: "En el enunciado de un problema, s.t. separa el objetivo de las restricciones: \\min_x f(x) \\quad \\text{s.t.} \\quad g_i(x) \\leq 0; en textos en español es habitual la abreviatura equivalente s.a. Usa \\text para que las letras salgan en redonda y se conserve el punto, y rodéala de \\quad por ambos lados, porque \\text no añade espaciado propio. Muchas guías de estilo prefieren la frase completa \\text{sujeto a}, sobre todo en formulaciones display alineadas con el entorno align, donde las restricciones se apilan en las líneas siguientes bajo la primera. No escribas s.t. directamente en modo matemático: imprimiría s y t en cursiva como variables, con un punto.",
  },
  "constraint": {
    name: "Restricción de desigualdad",
    meaning: "Restricción de desigualdad genérica: la función g debe ser no positiva en un punto factible x.",
    usage: "Escribir las restricciones de desigualdad en la forma estándar g_i(x) \\leq 0 es la convención en optimización convexa, así que una restricción como x_1 + x_2 \\geq 1 se convierte en 1 - x_1 - x_2 \\leq 0. \\leq tiene el alias corto \\le, y ambos dan el mismo glifo; \\leqslant dibuja una barra inclinada que se prefiere en cierta tipografía europea. Indexa varias restricciones como g_i(x) \\leq 0 para i = 1, \\dots, m. En el análisis KKT, cada desigualdad recibe un multiplicador \\lambda_i \\geq 0 con la holgura complementaria \\lambda_i g_i(x) = 0. Para maquetar problemas, alinéalas con &.",
  },
  "equality-constraint": {
    name: "Restricción de igualdad",
    meaning: "Restricción de igualdad genérica: la función h debe anularse en cualquier punto factible x.",
    usage: "Las restricciones de igualdad h_j(x) = 0 complementan a las de desigualdad g_i(x) \\leq 0 en la forma estándar de un programa no lineal. En optimización convexa deben ser afines, por lo que a menudo se escriben como Ax = b. En el lagrangiano, cada una recibe un multiplicador \\nu_j o \\mu_j que, a diferencia de los multiplicadores de desigualdad, puede tener cualquier signo. La letra h es la convencional, pero choca con el tamaño de paso o la entropía en algunos campos; elige letras que no entren en conflicto. Si hay varias restricciones, indéxalas con j para mantenerlas separadas del índice i de las desigualdades.",
  },
  "lagrangian": {
    name: "Lagrangiano",
    meaning: "Función lagrangiana, que combina un objetivo con sus restricciones ponderadas por los multiplicadores lambda.",
    usage: "El lagrangiano es \\mathcal{L}(x, \\lambda, \\nu) = f(x) + \\sum_i \\lambda_i g_i(x) + \\sum_j \\nu_j h_j(x), y la función dual es su ínfimo sobre x. Imponer \\nabla_x \\mathcal{L} = 0 da la condición de estacionariedad que se usa en problemas de cálculo con restricciones y en las deducciones de las SVM. \\mathcal da la L caligráfica y solo funciona con letras mayúsculas. Como el mismo \\mathcal{L} denota también funciones de pérdida en aprendizaje automático, los artículos que mezclan ambos usos escriben a veces L o \\Lambda para uno de ellos. Algunos libros usan la convención de signo opuesta, f - \\lambda g, así que indica la tuya.",
  },
  "gradient": {
    name: "Gradiente",
    meaning: "Gradiente de f en x: el vector de primeras derivadas parciales, que apunta en la dirección de máximo ascenso.",
    usage: "El gradiente \\nabla f(x) = (\\partial f/\\partial x_1, \\dots, \\partial f/\\partial x_n)^\\top impulsa los métodos de primer orden como el descenso de gradiente, x_{k+1} = x_k - \\alpha \\nabla f(x_k), y su anulación es la condición de optimalidad de primer orden para problemas sin restricciones. \\nabla es el triángulo invertido, llamado a veces del o nabla. El mismo operador da la divergencia, \\nabla \\cdot \\mathbf{F}, y el rotacional, \\nabla \\times \\mathbf{F}, en cálculo vectorial. No lo confundas con \\Delta, el triángulo hacia arriba que se usa para el laplaciano o las diferencias finitas. Añade un subíndice, \\nabla_x f, cuando derives solo respecto de algunas variables.",
  },
  "hessian": {
    name: "Matriz hessiana",
    meaning: "Hessiana de f en x: la matriz de segundas derivadas parciales, que describe la curvatura local.",
    usage: "En optimización, \\nabla^2 f(x) es la hessiana, usada en el método de Newton, x_{k+1} = x_k - [\\nabla^2 f(x_k)]^{-1} \\nabla f(x_k), y en las condiciones de segundo orden: una hessiana definida positiva en un punto estacionario implica un mínimo local estricto. Cuidado: en física y en EDP, \\nabla^2 f significa el laplaciano, un escalar igual a la traza de la hessiana, que a menudo se escribe \\Delta f. Aclara a cuál te refieres, o usa H_f o \\nabla\\nabla^\\top f para la matriz. La convexidad de una función dos veces diferenciable equivale a \\nabla^2 f(x) \\succeq 0 en todo punto.",
  },
  "optimal-value": {
    name: "Solución óptima",
    meaning: "x con una estrella como superíndice: la solución óptima o el minimizador de un problema de optimización.",
    usage: "La estrella marca el punto óptimo, de modo que p^* = f(x^*) es el valor óptimo, y los óptimos duales se escriben \\lambda^*, \\nu^*. Las tasas de convergencia se expresan en términos de f(x_k) - f(x^*) o \\|x_k - x^*\\|. ^* y ^\\ast producen el mismo asterisco; ^\\star da una estrella que evita la confusión con los conjugados complejos, los adjuntos o la estrella de Kleene, que también usan un asterisco. Cuando x lleva además un subíndice, x_k^* y x^*_k se ven idénticos. Distingue x^* de \\hat{x}, que suele denotar una estimación o una solución aproximada.",
  },
  "feasible-set": {
    name: "Conjunto factible",
    meaning: "X caligráfica, usada habitualmente para nombrar el conjunto factible o el dominio en el que varía una variable de optimización.",
    usage: "Las mayúsculas caligráficas nombran conjuntos en optimización y aprendizaje: x \\in \\mathcal{X} para la región factible, \\mathcal{Y} para las etiquetas, \\mathcal{D} para una distribución de datos y \\mathcal{H} para una clase de hipótesis. \\mathcal solo admite letras mayúsculas; con minúsculas los glifos son impredecibles. Si quieres una caligrafía más ornamentada, \\mathscr da otro estilo, mientras que \\mathbb{X} da la negrita de pizarra, más usada para sistemas numéricos. La proyección sobre el conjunto se escribe \\Pi_{\\mathcal{X}}(y). Define el conjunto explícitamente una vez, por ejemplo \\mathcal{X} = \\{x : g_i(x) \\leq 0\\}.",
  },
  "kkt-conditions": {
    name: "Condiciones de Karush-Kuhn-Tucker (KKT)",
    meaning: "Condición de estacionariedad del sistema KKT: el gradiente del objetivo se equilibra con los gradientes ponderados de las restricciones.",
    usage: "Esta línea es la primera de las condiciones de Karush-Kuhn-Tucker; el sistema completo añade la factibilidad primal g(x) \\leq 0, la factibilidad dual \\lambda \\geq 0 y la holgura complementaria \\lambda g(x) = 0. Con varias restricciones se generaliza a \\nabla f(x^*) + \\sum_i \\lambda_i \\nabla g_i(x^*) + \\sum_j \\nu_j \\nabla h_j(x^*) = 0. Compón el sistema completo en un entorno cases o aligned para que sea legible. Las convenciones de signo varían: si el lagrangiano se escribe f - \\lambda g, el más se convierte en menos, así que hazlo coincidir con tu definición. Evaluar explícitamente en x^* evita ambigüedades.",
  },
  "positive-definite": {
    name: "Matriz definida positiva",
    meaning: "Condición de matriz definida positiva: A \\succ 0 significa que x^T A x > 0 para todo vector x no nulo.",
    usage: "En análisis matricial y programación semidefinida, \\succ expresa el orden de Loewner, de modo que A \\succ B significa que A - B es definida positiva. Una hessiana \\nabla^2 f(x) \\succ 0 certifica la convexidad estricta, y una matriz de covarianza \\Sigma \\succ 0 es invertible. \\succ es un símbolo de relación, así que recibe automáticamente espaciado de relación. Evita usar > para matrices, porque sugiere una comparación elemento a elemento. Entre los símbolos parecidos están \\succcurlyeq, una variante curva que algunos autores usan para el caso semidefinido, y \\gg, que significa «mucho mayor que». Como notación de conjuntos equivalente, escribe A \\in \\mathbb{S}^n_{++}.",
    example: "\\Sigma \\succ 0 \\implies \\Sigma^{-1} \\text{ existe}",
  },
  "positive-semidefinite": {
    name: "Matriz semidefinida positiva",
    meaning: "Condición de semidefinida positiva: A \\succeq 0 significa que x^T A x \\geq 0 para todo vector x.",
    usage: "Las restricciones semidefinidas X \\succeq 0 definen los programas semidefinidos, y la convexidad de una función suave equivale a \\nabla^2 f(x) \\succeq 0. Las matrices de Gram y de covarianza son siempre semidefinidas positivas. \\succeq dibuja el símbolo de «sucede a» con una barra recta debajo; \\succcurlyeq es una variante de barra curva que prefieren algunos textos de optimización, así que elige una y mantenla. La versión estricta es \\succ. El conjunto de estas matrices se suele escribir \\mathbb{S}^n_+, y las condiciones del complemento de Schur son una forma habitual de expresar estas restricciones en forma de bloques.",
    example: "\\min_{X} \\operatorname{tr}(CX) \\quad \\text{s.a.} \\quad X \\succeq 0",
  },
};

export default text;
