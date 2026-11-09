import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/special-functions/<slug>. */
const text: SymbolPageTranslations = {
  "gamma-function": {
    name: "Función gamma",
    meaning: "Función gamma, la extensión del factorial a los números complejos, con Gamma(n) = (n-1)!.",
    usage: "Se define como \\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt para \\operatorname{Re} z > 0 y cumple \\Gamma(z+1) = z\\Gamma(z) y \\Gamma(1/2) = \\sqrt{\\pi}. La fórmula de reflexión \\Gamma(z)\\Gamma(1-z) = \\pi/\\sin(\\pi z) y la aproximación de Stirling son herramientas habituales. \\Gamma compone una gamma mayúscula recta, el estilo usual; \\varGamma da una variante en cursiva. Aparece en las constantes de normalización de las distribuciones gamma, beta, chi-cuadrado y t de Student. Usa \\, antes de dt en la integral. No confundas la función con \\gamma, la constante de Euler-Mascheroni.",
  },
  "beta-function": {
    name: "Función beta",
    meaning: "Función beta B(x, y), una integral sobre [0, 1] estrechamente ligada a la función gamma.",
    usage: "La función beta es B(x, y) = \\int_0^1 t^{x-1}(1-t)^{y-1}\\,dt = \\frac{\\Gamma(x)\\Gamma(y)}{\\Gamma(x+y)} y normaliza la distribución beta en estadística bayesiana. En rigor, el símbolo es una beta griega mayúscula, pero LaTeX no tiene el comando \\Beta porque se ve idéntica a la B latina, así que B es correcto; algunos autores escriben \\mathrm{B} para marcarla como función. Es simétrica: B(x, y) = B(y, x). La versión incompleta es B(z; a, b) y la forma regularizada, I_z(a, b). Evita confundirla con los números de Bell o de Bernoulli B_n.",
  },
  "riemann-zeta-function": {
    name: "Función zeta de Riemann",
    meaning: "Función zeta de Riemann, definida para Re s > 1 como la suma de la serie de 1/n^s y extendida al plano complejo.",
    usage: "\\zeta(s) = \\sum_{n=1}^\\infty n^{-s} conecta el análisis con los números primos mediante el producto de Euler \\prod_p (1 - p^{-s})^{-1}. Entre sus valores famosos están \\zeta(2) = \\pi^2/6 (el problema de Basilea) y \\zeta(-1) = -1/12 por prolongación analítica. La hipótesis de Riemann afirma que los ceros no triviales están sobre \\operatorname{Re} s = 1/2. Usa \\zeta, que a mano puede parecerse a \\xi pero es distinta en la versión impresa. Por convención la variable es s = \\sigma + it. La zeta de Hurwitz es \\zeta(s, a), y en física \\zeta aparece a menudo en las integrales de Bose-Einstein.",
  },
  "error-function": {
    name: "Función error",
    meaning: "Función error: la integral escalada de la gaussiana e^{-t^2} de 0 a x, usada para probabilidades de la distribución normal.",
    usage: "La definición es \\text{erf}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_0^x e^{-t^2}\\,dt, con límites \\pm 1 en \\pm\\infty. La función de distribución normal estándar es \\Phi(x) = \\frac{1}{2}\\big[1 + \\text{erf}(x/\\sqrt{2})\\big], y erf resuelve la ecuación del calor con una condición inicial escalón. \\text{erf} se imprime en redonda, pero sigue la fuente del entorno, de modo que pasa a cursiva dentro de los teoremas; \\operatorname{erf}, o un \\DeclareMathOperator en el preámbulo, es más robusto y añade el espaciado adecuado. Es impar: \\text{erf}(-x) = -\\text{erf}(x). La inversa es \\text{erf}^{-1}, que se usa para calcular cuantiles de la normal.",
  },
  "complementary-error": {
    name: "Función error complementaria",
    meaning: "Función error complementaria, 1 - erf(x): la integral escalada de la cola gaussiana desde x hasta infinito.",
    usage: "\\text{erfc}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_x^\\infty e^{-t^2}\\,dt = 1 - \\text{erf}(x), y es la forma preferida para probabilidades de cola pequeñas, porque calcular numéricamente 1 - \\text{erf}(x) pierde precisión cuando x es grande. Da las tasas de error de bit en comunicaciones, Q(x) = \\frac{1}{2}\\text{erfc}(x/\\sqrt{2}), y los perfiles de difusión en transferencia de calor. La versión escalada \\text{erfcx}(x) = e^{x^2}\\text{erfc}(x) evita el subdesbordamiento. Como con erf, \\operatorname{erfc} se mantiene recta en contextos en cursiva y se espacia correctamente, por lo que es la opción más segura. Para x grande se comporta aproximadamente como e^{-x^2}/(x\\sqrt{\\pi}).",
  },
  "bessel-j": {
    name: "Función de Bessel de primera especie",
    meaning: "Función de Bessel de primera especie de orden n, la solución de la ecuación de Bessel que es finita en el origen.",
    usage: "J_n resuelve x^2 y'' + x y' + (x^2 - n^2) y = 0 y tiene la serie \\sum_m \\frac{(-1)^m}{m!\\,\\Gamma(m+n+1)} (x/2)^{2m+n}. Describe membranas de tambor que vibran, guías de onda cilíndricas y la difracción a través de una apertura circular, donde el patrón de Airy involucra J_1. Para orden no entero se escribe J_\\nu(x), con \\nu por convención. La función generatriz es e^{(x/2)(t - 1/t)} = \\sum_n J_n(x) t^n. Los órdenes compuestos necesitan llaves: J_{n+1}(x). Sus ceros suelen escribirse j_{n,k} y determinan las frecuencias de resonancia de una membrana circular.",
  },
  "bessel-y": {
    name: "Función de Bessel de segunda especie",
    meaning: "Función de Bessel de segunda especie de orden n, la solución de la ecuación de Bessel singular en el origen.",
    usage: "Y_n, también llamada función de Weber o de Neumann y escrita N_n en algunos textos de física, es la segunda solución independiente de la ecuación de Bessel, con Y_n(x) \\to -\\infty cuando x \\to 0^+. Para \\nu no entero, Y_\\nu(x) = \\frac{J_\\nu(x)\\cos(\\nu\\pi) - J_{-\\nu}(x)}{\\sin(\\nu\\pi)}, y los órdenes enteros se definen mediante un límite. En problemas de contorno sobre un disco completo, el término Y_n se descarta para garantizar la regularidad en el centro, pero se conserva en una corona circular. Las funciones de Hankel combinan ambas: H_n^{(1)} = J_n + iY_n.",
  },
  "modified-bessel-i": {
    name: "Función de Bessel modificada de primera especie",
    meaning: "Función de Bessel modificada de primera especie, una solución de la ecuación de Bessel modificada que crece exponencialmente.",
    usage: "I_n resuelve x^2 y'' + x y' - (x^2 + n^2) y = 0 y se relaciona con J_n mediante I_n(x) = i^{-n} J_n(ix). A diferencia de J_n, no oscila; crece como e^x/\\sqrt{2\\pi x}. Aparece en la conducción de calor en cilindros, en la constante de normalización 2\\pi I_0(\\kappa) de la distribución de von Mises y en la distribución de Rice. Usa \\nu para el orden general: I_\\nu(x). No la confundas con la matriz identidad I_n ni con la medida de información I(X; Y); el argumento entre paréntesis suele deshacer la ambigüedad, pero una definición ayuda.",
  },
  "modified-bessel-k": {
    name: "Función de Bessel modificada de segunda especie",
    meaning: "Función de Bessel modificada de segunda especie, la solución decreciente de la ecuación de Bessel modificada.",
    usage: "K_n, a veces llamada función de Macdonald, decae como \\sqrt{\\pi/(2x)}\\,e^{-x} para x grande y diverge en el origen. Forma pareja con I_n como las dos soluciones independientes de la ecuación de Bessel modificada. Aparece en el núcleo de covarianza de Matérn usado en procesos gaussianos, en el potencial de Yukawa en dos dimensiones y en las constantes de normalización de las distribuciones gaussianas inversas generalizadas. Ten cuidado: K(k) también denota la integral elíptica completa y K_n el grafo completo, así que especifica a qué K te refieres cuando los campos se solapan.",
  },
  "legendre-p": {
    name: "Polinomio de Legendre",
    meaning: "Polinomio de Legendre de grado n, ortogonal en [-1, 1] con peso 1.",
    usage: "Los polinomios de Legendre empiezan por P_0 = 1, P_1 = x, P_2 = \\frac{1}{2}(3x^2 - 1) y siguen la fórmula de Rodrigues P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n}(x^2 - 1)^n. La ortogonalidad se expresa como \\int_{-1}^1 P_m P_n\\,dx = \\frac{2}{2n+1}\\delta_{mn}. Aparecen en los desarrollos multipolares, los armónicos esféricos y los nodos de la cuadratura de Gauss-Legendre. Las funciones asociadas de Legendre se escriben P_n^m(x) o P_\\ell^m(\\cos\\theta). Los físicos suelen usar \\ell para el grado. No los confundas con el grafo camino P_n ni con la probabilidad P; el argumento x suele indicar el polinomio.",
  },
  "legendre-q": {
    name: "Función de Legendre de segunda especie",
    meaning: "Función de Legendre de segunda especie, la segunda solución de la ecuación de Legendre, singular en x = 1 y -1.",
    usage: "Q_n resuelve la misma ecuación que P_n, (1 - x^2) y'' - 2x y' + n(n+1) y = 0, pero no es un polinomio: por ejemplo, Q_0(x) = \\frac{1}{2}\\ln\\frac{1+x}{1-x} y Q_1(x) = x Q_0(x) - 1. Debido a las singularidades logarítmicas en \\pm 1, suele descartarse en problemas sobre la esfera completa y se conserva solo cuando el dominio excluye los polos, como un cono o la región exterior a un esferoide prolato. Las versiones asociadas son Q_n^m(x). Usa \\ln con \\frac para el logaritmo, y \\left( \\right) si el argumento se hace alto.",
  },
  "hermite-polynomial": {
    name: "Polinomio de Hermite",
    meaning: "Polinomio de Hermite de grado n, ortogonal en la recta real con peso gaussiano.",
    usage: "Los polinomios de Hermite de los físicos siguen H_n(x) = (-1)^n e^{x^2} \\frac{d^n}{dx^n} e^{-x^2}, empiezan por 1, 2x, 4x^2 - 2 y dan las autofunciones del oscilador armónico cuántico \\psi_n \\propto H_n(x) e^{-x^2/2}. Los probabilistas usan otra normalización, escrita He_n(x), con peso e^{-x^2/2}; ambas familias se relacionan mediante un reescalado, así que indica a cuál te refieres. La recurrencia es H_{n+1} = 2x H_n - 2n H_{n-1}. H también designa la entropía, el escalón de Heaviside y los hamiltonianos, por lo que una breve definición ayuda al lector.",
  },
  "laguerre-polynomial": {
    name: "Polinomio de Laguerre",
    meaning: "Polinomio de Laguerre de grado n, ortogonal en [0, ∞) con peso e^{-x}.",
    usage: "Los polinomios de Laguerre cumplen la fórmula de Rodrigues L_n(x) = \\frac{e^x}{n!} \\frac{d^n}{dx^n}(e^{-x} x^n), empiezan por L_0 = 1 y L_1 = 1 - x, y resuelven x y'' + (1 - x) y' + n y = 0. La forma generalizada L_n^{(\\alpha)}(x), con el superíndice entre paréntesis, da las funciones de onda radiales del átomo de hidrógeno. Los textos de física antiguos usan otra normalización, que difiere en un factor n!, así que revisa las fuentes antes de mezclar fórmulas. También definen la cuadratura de Gauss-Laguerre para integrales con peso e^{-x}. Evita confundirlos con un lagrangiano o una función de pérdida L.",
  },
  "chebyshev-t": {
    name: "Polinomio de Chebyshov de primera especie",
    meaning: "Polinomio de Chebyshov de primera especie, definido por T_n(cos θ) = cos(nθ).",
    usage: "Los polinomios de Chebyshov T cumplen T_0 = 1, T_1 = x y T_{n+1} = 2x T_n - T_{n-1}, lo que da T_2 = 2x^2 - 1. Son ortogonales en [-1, 1] con peso 1/\\sqrt{1 - x^2}, y entre los polinomios mónicos de grado n, 2^{1-n} T_n tiene el menor máximo en ese intervalo. Esta propiedad minimax sustenta los nodos de Chebyshov para la interpolación, que evitan el fenómeno de Runge, y los métodos espectrales de Chebyshov. La letra T a veces choca con la temperatura, el período o la traspuesta, así que defínela cuando haga falta; usa ^\\top para las traspuestas y mantener la claridad.",
  },
  "chebyshev-u": {
    name: "Polinomio de Chebyshov de segunda especie",
    meaning: "Polinomio de Chebyshov de segunda especie, con U_n(cos θ) sen θ = sen((n+1)θ).",
    usage: "Los polinomios U comparten con T_n la recurrencia U_{n+1} = 2x U_n - U_{n-1}, pero parten de U_0 = 1, U_1 = 2x. Son ortogonales en [-1, 1] con peso \\sqrt{1 - x^2} y se relacionan con los de primera especie mediante T_n'(x) = n U_{n-1}(x). U_n aparece en los polinomios característicos de los grafos camino, en problemas de autovalores de matrices de Toeplitz tridiagonales y en la cuadratura de Gauss-Chebyshov de segunda especie. Escribe la identidad que los define con \\frac y \\sin como se muestra abajo, usando \\theta en lugar de t para seguir la convención trigonométrica.",
  },
  "hypergeometric": {
    name: "Función hipergeométrica",
    meaning: "Función hipergeométrica de Gauss: la serie de potencias en z cuyos coeficientes se construyen con símbolos de Pochhammer de a, b, c.",
    usage: "Se define como {}_2F_1(a,b;c;z) = \\sum_{n \\geq 0} \\frac{(a)_n (b)_n}{(c)_n} \\frac{z^n}{n!} para |z| < 1 y se reduce a muchas funciones elementales y especiales, p. ej. \\ln(1+z) = z\\,{}_2F_1(1,1;2;-z). El grupo vacío {} da al subíndice izquierdo 2 algo a lo que unirse, que es el truco habitual para los prefijos; el comando \\prescript ofrece un control más fino. Los puntos y coma separan los parámetros del numerador, los del denominador y el argumento. La forma general {}_pF_q sigue el mismo patrón, y el teorema de Gauss da su valor en z = 1.",
  },
  "digamma": {
    name: "Función digamma",
    meaning: "Función digamma, la derivada logarítmica de la función gamma: Gamma'(x)/Gamma(x).",
    usage: "\\psi(x) = \\frac{d}{dx}\\ln\\Gamma(x) cumple \\psi(x+1) = \\psi(x) + 1/x, de modo que \\psi(n+1) = H_n - \\gamma, con H_n el número armónico y \\gamma la constante de Euler-Mascheroni, y \\psi(1) = -\\gamma. Aparece en la inferencia bayesiana variacional para distribuciones de Dirichlet, donde \\mathbb{E}[\\ln \\theta_k] = \\psi(\\alpha_k) - \\psi(\\sum_j \\alpha_j). La \\psi griega es la notación estándar; algunos textos escriben F(x). No uses \\digamma, que imprime la letra griega arcaica digamma y no la función. En mecánica cuántica \\psi es la función de onda, así que defínela.",
  },
  "polygamma": {
    name: "Función poligamma",
    meaning: "Función poligamma de orden n: la derivada (n+1)-ésima de ln Gamma(x), o la n-ésima derivada de la digamma.",
    usage: "\\psi^{(n)}(x) = \\frac{d^{n+1}}{dx^{n+1}} \\ln \\Gamma(x), con \\psi^{(0)} = \\psi la digamma y \\psi^{(1)} la función trigamma. Valores notables: \\psi^{(1)}(1) = \\pi^2/6 y, en general, \\psi^{(n)}(1) = (-1)^{n+1} n!\\,\\zeta(n+1). La trigamma da la información de Fisher y los términos de varianza de los modelos gamma y de Dirichlet. El superíndice entre paréntesis indica el orden de derivación, no una potencia; escribir solo ^n se leería como exponenciación. Las llaves alrededor de (n) son obligatorias para que se eleve todo el grupo. Muchos autores escriben la trigamma simplemente como \\psi'(x), lo cual es igual de estándar.",
  },
  "elliptic-integral-k": {
    name: "Integral elíptica completa de primera especie",
    meaning: "Integral elíptica completa de primera especie, la integral de 1/sqrt(1 - k^2 sen^2 θ) sobre un cuarto de período.",
    usage: "K(k) = \\int_0^{\\pi/2} \\frac{d\\theta}{\\sqrt{1 - k^2 \\sin^2\\theta}}, con K(0) = \\pi/2 y una divergencia logarítmica cuando k \\to 1. Da el período exacto de un péndulo, T = 4\\sqrt{L/g}\\,K(\\sin(\\theta_0/2)). El mayor escollo es la convención del argumento: algunos textos y programas usan el parámetro m = k^2 y escriben K(m), así que K(0.5) puede significar dos números distintos. Indica si usas el módulo k o el parámetro m. La versión incompleta es F(\\phi, k). La media aritmético-geométrica da una fórmula rápida: K(k) = \\frac{\\pi}{2\\,\\mathrm{AGM}(1, \\sqrt{1-k^2})}.",
  },
  "elliptic-integral-e": {
    name: "Integral elíptica completa de segunda especie",
    meaning: "Integral elíptica completa de segunda especie, la integral de sqrt(1 - k^2 sen^2 θ) sobre un cuarto de período.",
    usage: "E(k) = \\int_0^{\\pi/2} \\sqrt{1 - k^2 \\sin^2\\theta}\\,d\\theta, con E(0) = \\pi/2 y E(1) = 1. El perímetro de una elipse de semieje mayor a y excentricidad e es 4a\\,E(e), que no tiene forma cerrada elemental. La relación de Legendre la vincula con K: E K' + E' K - K K' = \\pi/2, donde las primas denotan el módulo complementario. Como con K, comprueba si la fuente usa el módulo k o el parámetro m = k^2. La letra E sola choca con la energía, la esperanza y los conjuntos de aristas, así que defínela pronto.",
  },
  "dirac-delta-function": {
    name: "Delta de Dirac",
    meaning: "Delta de Dirac: una distribución que vale cero fuera de 0 y cuya integral es 1, y que extrae f(0) bajo una integral.",
    usage: "Su propiedad definitoria es la identidad de selección \\int f(x)\\,\\delta(x - a)\\,dx = f(a). Es una distribución, no una función ordinaria, y es la derivada del escalón de Heaviside: H'(x) = \\delta(x). En procesamiento de señales modela un impulso; su transformada de Fourier es 1. El cambio de escala cumple \\delta(ax) = \\delta(x)/|a|. No la confundas con la delta de Kronecker \\delta_{ij}, un símbolo discreto que vale 1 cuando i = j. La \\delta minúscula es distinta de \\Delta (laplaciano o diferencia) y de \\partial.",
  },
  "heaviside-step-function": {
    name: "Función escalón de Heaviside",
    meaning: "Función escalón de Heaviside: 0 para x negativo y 1 para x positivo, con el salto en el origen.",
    usage: "El escalón de Heaviside H(x) modela una señal que se activa en el instante cero, y su derivada en sentido distribucional es la delta de Dirac: H'(x) = \\delta(x). El valor en 0 es una convención: suele ser 1/2 en análisis de Fourier, 1 en teoría de control y a veces se deja sin definir. Otras notaciones son \\theta(x) en física, u(t) en ingeniería y la función indicadora \\mathbf{1}_{x \\geq 0}. Defínela con un entorno cases para mayor claridad. Como H se usa también para la entropía, los polinomios de Hermite y los hamiltonianos, una breve definición en su primer uso evita confusiones al lector. Su transformada de Laplace es 1/s.",
  },
};

export default text;
