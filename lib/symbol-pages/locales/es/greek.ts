import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/greek/<slug>. */
const text: SymbolPageTranslations = {
  "alpha": {
    name: "Alfa",
    meaning: "Letra griega alfa minúscula, el nombre habitual para ángulos, niveles de significación, tasas de aprendizaje y coeficientes.",
    usage:
      "En estadística, \\alpha es el nivel de significación de una prueba, como en \\alpha = 0.05, y el parámetro de forma de las distribuciones beta y gamma. Los físicos la usan para la constante de estructura fina \\alpha \\approx 1/137 y para las partículas alfa. En geometría designa ángulos, a menudo junto a \\beta y \\gamma. No existe el comando \\Alpha, porque la alfa mayúscula es idéntica a la A latina; escribe A o \\mathrm{A}. Procura que \\alpha no se confunda con la a latina ni con el signo de proporcionalidad \\propto en fuentes de estilo manuscrito.",
    example: "P(\\text{rechazar } H_0 \\mid H_0 \\text{ verdadera}) = \\alpha",
  },
  "beta": {
    name: "Beta",
    meaning: "Letra griega beta minúscula, estándar para coeficientes de regresión, ángulos y el segundo parámetro de una distribución.",
    usage:
      "Los modelos de regresión escriben y = \\beta_0 + \\beta_1 x + \\varepsilon, y \\hat{\\beta} indica los coeficientes estimados. En el contraste de hipótesis, \\beta es la probabilidad de error de tipo II, de modo que la potencia es 1 - \\beta. La física la usa para v/c en relatividad y para la temperatura inversa \\beta = 1/(k_B T). En finanzas se habla de la beta de una acción frente al mercado. No existe el comando \\Beta, ya que la beta mayúscula es igual a la B latina. La eszett alemana, ß, es un carácter distinto que se escribe \\ss y no debe usarse en lugar de \\beta.",
  },
  "gamma": {
    name: "Gamma",
    meaning: "Letra griega gamma minúscula, usada para la constante de Euler-Mascheroni, el factor de Lorentz y los factores de descuento.",
    usage:
      "\\gamma es el factor de Lorentz \\gamma = 1/\\sqrt{1 - v^2/c^2} en relatividad especial y la constante de Euler-Mascheroni \\gamma \\approx 0.5772 en análisis. El aprendizaje por refuerzo la usa como factor de descuento en \\sum_t \\gamma^t r_t, y la física la emplea para los rayos gamma y los fotones. En geometría suele nombrar el tercer ángulo de un triángulo después de \\alpha y \\beta, y en análisis complejo \\gamma es una curva o un contorno. Ten en cuenta que la mayúscula \\Gamma, que denota la función gamma, es un comando aparte; no escribas \\Gamma para la constante.",
  },
  "gamma-upper": {
    name: "Gamma mayúscula",
    meaning: "Letra griega Gamma mayúscula, conocida sobre todo por la función gamma Γ(z), que extiende el factorial.",
    usage:
      "\\Gamma(n) = (n-1)! para enteros positivos y, en general, \\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}\\,dt. También sirve para los símbolos de Christoffel \\Gamma^k_{ij} en geometría diferencial, para la distribución gamma y para un contexto de tipado \\Gamma \\vdash e : \\tau en teoría de tipos. Las letras griegas mayúsculas son rectas por defecto en LaTeX; para una versión cursiva usa \\varGamma. En teoría de grafos a veces se escribe \\Gamma(v) para la vecindad de un vértice. No la confundas con una L latina girada ni con \\gamma, la constante en minúscula.",
  },
  "delta": {
    name: "Delta",
    meaning: "Letra griega delta minúscula, usada para cantidades pequeñas, la función delta de Dirac y la delta de Kronecker.",
    usage:
      "El análisis la empareja con épsilon en las definiciones de límite y continuidad, como en |x - a| < \\delta. La delta de Dirac \\delta(x) cumple \\int f(x)\\delta(x - a)\\,dx = f(a), y la delta de Kronecker \\delta_{ij} vale 1 cuando i = j y 0 en otro caso. El cálculo de variaciones escribe \\delta S para una variación, y la química usa \\delta+ y \\delta- para las cargas parciales. Se distingue de \\partial, el signo curvo de derivada parcial, y de la mayúscula \\Delta, usada para incrementos finitos.",
  },
  "delta-upper": {
    name: "Delta mayúscula",
    meaning: "Letra griega Delta mayúscula, usada para el incremento finito de una magnitud, el laplaciano y los discriminantes.",
    usage:
      "La física y la química escriben \\Delta x para un cambio de posición y \\Delta H para la variación de entalpía, como en \\Delta G = \\Delta H - T\\Delta S. En análisis, \\Delta es el operador de Laplace \\Delta u = \\nabla^2 u, y en álgebra es el discriminante \\Delta = b^2 - 4ac. Los geómetras la usan para un triángulo, aunque \\triangle es un símbolo aparte, sin relleno, más adecuado para ello. Las letras griegas mayúsculas son rectas; usa \\varDelta para una versión cursiva. No confundas \\Delta con \\nabla, que es el mismo triángulo invertido.",
  },
  "epsilon": {
    name: "Épsilon",
    meaning: "Épsilon minúscula lunada ϵ, usada para cantidades positivas pequeñas y términos de error.",
    usage:
      "\\epsilon imprime la forma lunada ϵ, mientras que \\varepsilon da la forma abierta y curva ε que muchos lectores asocian con la épsilon manuscrita. Los analistas usan cualquiera de las dos para un número arbitrariamente pequeño en \\forall \\epsilon > 0, pero conviene mantener una sola forma en todo el artículo. Muchos autores reservan \\epsilon para cantidades pequeñas y usan \\varepsilon para términos de error o ruido. No confundas ninguna de ellas con el signo de pertenencia \\in, que se parece a ϵ pero es una relación con otro espaciado. La física también usa \\epsilon_0 para la permitividad del vacío.",
  },
  "epsilon-variant": {
    name: "Épsilon (variante)",
    meaning: "Variante de la épsilon minúscula ε, la forma abierta y curva que suele preferirse para términos de error y números pequeños.",
    usage:
      "\\varepsilon dibuja la forma redondeada ε, más parecida a la épsilon manuscrita que la lunada \\epsilon. La estadística escribe el término de ruido de una regresión como \\varepsilon_i \\sim \\mathcal{N}(0, \\sigma^2), y muchos libros de análisis prefieren \\varepsilon en las demostraciones épsilon-delta. La física usa \\varepsilon_0 para la permitividad del vacío y \\varepsilon_{ijk} para el símbolo de Levi-Civita. Como es fácil mezclar las dos formas por accidente, plantéate redefinir una de ellas en el preámbulo para escribir un único comando. Evita usarla como sustituto del signo de pertenencia \\in.",
  },
  "zeta": {
    name: "Zeta",
    meaning: "Letra griega zeta minúscula, conocida sobre todo por la función zeta de Riemann y el coeficiente de amortiguamiento.",
    usage:
      "La función zeta de Riemann \\zeta(s) = \\sum_{n=1}^{\\infty} n^{-s} es su uso más característico, junto con el resultado del problema de Basilea \\zeta(2) = \\pi^2/6. Los ingenieros usan \\zeta como coeficiente de amortiguamiento de un sistema de segundo orden, como en \\ddot{x} + 2\\zeta\\omega_n \\dot{x} + \\omega_n^2 x = 0. El análisis complejo la usa como variable compleja muda, y la teoría de números para las raíces de la unidad \\zeta_n = e^{2\\pi i/n}. No existe el comando \\Zeta porque la zeta mayúscula es igual a la Z latina. Su forma manuscrita se confunde fácilmente con \\xi, así que comprueba qué letra quiere decir cada fuente.",
  },
  "eta": {
    name: "Eta",
    meaning: "Letra griega eta minúscula, usada para tasas de aprendizaje, rendimiento, viscosidad y la métrica de Minkowski.",
    usage:
      "En aprendizaje automático, \\eta es la tasa de aprendizaje convencional en actualizaciones como w \\leftarrow w - \\eta \\nabla L(w). La termodinámica escribe el rendimiento como \\eta = W/Q_h, la dinámica de fluidos la usa para la viscosidad dinámica y la relatividad escribe la métrica de Minkowski \\eta_{\\mu\\nu}. La estadística a veces la usa para el predictor lineal \\eta = X\\beta de un modelo lineal generalizado. La eta mayúscula se parece a la H latina, por lo que no existe el comando \\Eta. No confundas \\eta con la n latina en diapositivas con fuente sin serifa, donde el trazo descendente puede verse poco.",
  },
  "theta": {
    name: "Theta",
    meaning: "Letra griega theta minúscula, el nombre habitual de los ángulos y de los parámetros de un modelo en estadística y aprendizaje automático.",
    usage:
      "La trigonometría y las coordenadas polares usan \\theta para los ángulos, como en (r\\cos\\theta, r\\sin\\theta). La estadística y el aprendizaje automático la usan para vectores de parámetros, con \\hat{\\theta} para un estimador y \\theta^* para el óptimo. Las cotas de complejidad Theta grande usan la mayúscula \\Theta, no \\theta. La variante \\vartheta es una forma de aspecto caligráfico que a veces se usa para un segundo ángulo o en física. Al escribir un estimador, \\hat{\\theta} centra mejor el acento que \\widehat{\\theta}, pensado para argumentos más anchos. En notación bayesiana, \\theta también designa la cantidad desconocida en la distribución a posteriori p(\\theta \\mid x).",
  },
  "theta-upper": {
    name: "Theta mayúscula",
    meaning: "Letra griega Theta mayúscula, estándar para las cotas asintóticas ajustadas y los espacios de parámetros.",
    usage:
      "El análisis de algoritmos escribe \\Theta(n \\log n) para una cota que se cumple tanto por arriba como por abajo, junto a O y \\Omega. La estadística usa \\Theta para un espacio de parámetros, como en \\theta \\in \\Theta. La física la usa para la función escalón de Heaviside \\Theta(x) y, en algunos textos, para la temperatura. Las letras griegas mayúsculas son rectas en LaTeX; \\varTheta da una forma cursiva si el estilo lo exige. No confundas \\Theta con el glifo del conjunto vacío ni con el dígito 0 atravesado por una barra.",
  },
  "iota": {
    name: "Iota",
    meaning: "Letra griega iota minúscula, una letra estrecha sin punto que se usa para aplicaciones de inclusión y notación de índices.",
    usage:
      "\\iota suele nombrar una inclusión o una inmersión, como en \\iota : A \\hookrightarrow X, y el producto interior \\iota_X \\omega en geometría diferencial. APL y algunos lenguajes funcionales usan iota para un generador de índices, algo que aparece en textos de informática. Como se parece a una i sin punto, asegúrate de no confundirla con \\imath, la i sin punto que se usa bajo los acentos. No existe el comando \\Iota; la iota mayúscula se parece a la I latina. Es tan poco frecuente que una definición de una línea la primera vez que la uses ayuda a los lectores.",
  },
  "kappa": {
    name: "Kappa",
    meaning: "Letra griega kappa minúscula, usada para la curvatura, los números de condición y el kappa de Cohen.",
    usage:
      "La geometría diferencial escribe la curvatura de una curva como \\kappa = |\\gamma''(s)|, y el análisis numérico usa \\kappa(A) = \\|A\\|\\|A^{-1}\\| para el número de condición de una matriz. La estadística tiene el \\kappa de Cohen para la concordancia entre evaluadores, y la física la usa para la conductividad térmica o la constante dieléctrica. La variante \\varkappa ofrece otro glifo que algunos autores prefieren. No existe el comando \\Kappa porque la kappa mayúscula es idéntica a la K latina. No intercambies \\kappa con la k latina, ya que muchas fórmulas usan ambas.",
  },
  "lambda": {
    name: "Lambda",
    meaning: "Letra griega lambda minúscula, usada para valores propios, longitudes de onda, tasas y la intensidad de la regularización.",
    usage:
      "El álgebra lineal escribe Av = \\lambda v para un valor propio y su vector propio. La física usa \\lambda para la longitud de onda en c = \\lambda f, la probabilidad la usa para la tasa de una distribución de Poisson o exponencial, y la optimización para los multiplicadores de Lagrange y el peso de la penalización en ridge o lasso, \\lambda\\|w\\|^2. La informática escribe funciones anónimas con el cálculo lambda, \\lambda x.\\, x + 1. Su mayúscula \\Lambda es un comando aparte con otros usos. Los programas de tasa de aprendizaje y el suavizado exponencial también toman \\lambda para los factores de decaimiento.",
  },
  "lambda-upper": {
    name: "Lambda mayúscula",
    meaning: "Letra griega Lambda mayúscula, habitual para la matriz diagonal de valores propios y la constante cosmológica.",
    usage:
      "La descomposición espectral A = Q\\Lambda Q^{-1} usa \\Lambda para la matriz diagonal de valores propios. La cosmología escribe la constante cosmológica como \\Lambda, y el modelo cosmológico estándar se compone como \\Lambda\\text{CDM}. La física de partículas la usa para el barión lambda, y la teoría de retículos o la teoría de números pueden usar \\Lambda para un retículo o para la función de von Mangoldt \\Lambda(n). Las griegas mayúsculas son rectas en LaTeX; usa \\varLambda para una forma cursiva. No la confundas con el «y» lógico \\wedge, un glifo distinto con espaciado de operador.",
  },
  "mu": {
    name: "Mu",
    meaning: "Letra griega mu minúscula, estándar para la media, las medidas, los coeficientes de rozamiento y el prefijo micro.",
    usage:
      "La probabilidad escribe la media como \\mu = E[X], de modo que una distribución normal es \\mathcal{N}(\\mu, \\sigma^2). La teoría de la medida usa \\mu para una medida, y la física la usa para el coeficiente de rozamiento, la permeabilidad magnética \\mu_0 y la masa reducida. Como prefijo de unidad en \\mu m o \\mu s se compone en cursiva matemática, mientras que las normas tipográficas piden un signo micro recto, y envolverla en \\mathrm no cambia la forma de una letra griega. La optimización usa \\mu para los parámetros de barrera en los métodos de punto interior.",
  },
  "nu": {
    name: "Nu",
    meaning: "Letra griega nu minúscula, usada para la frecuencia, los grados de libertad y la viscosidad cinemática.",
    usage:
      "La física escribe la energía de un fotón como E = h\\nu, donde \\nu es la frecuencia, y la dinámica de fluidos usa \\nu para la viscosidad cinemática. La estadística usa \\nu para los grados de libertad de la distribución t de Student, y la física de partículas escribe los neutrinos como \\nu_e, \\nu_\\mu. La relatividad usa índices griegos \\mu\\nu para las componentes de los tensores, como en g_{\\mu\\nu}. En muchas fuentes \\nu se parece mucho a la v latina, así que evita usar ambas letras en la misma fórmula. No existe el comando \\Nu; la nu mayúscula es la N latina.",
  },
  "xi": {
    name: "Xi",
    meaning: "Letra griega xi minúscula, una letra sinuosa usada para variables aleatorias, variables mudas y el amortiguamiento.",
    usage:
      "Los textos de probabilidad suelen usar \\xi para una variable aleatoria o un término de ruido, y el análisis la usa para un punto intermedio, como en el teorema del valor medio f(b) - f(a) = f'(\\xi)(b - a). El análisis de Fourier escribe las variables de frecuencia como \\xi en \\hat{f}(\\xi). Algunos textos de ingeniería usan \\xi para el coeficiente de amortiguamiento en lugar de \\zeta. Como \\xi y \\zeta son difíciles de distinguir a mano, comprueba qué letra quiere decir cada fuente. Su mayúscula \\Xi es un comando aparte.",
  },
  "xi-upper": {
    name: "Xi mayúscula",
    meaning: "Letra griega Xi mayúscula, una letra de tres barras usada para el barión Xi y algunas funciones especiales.",
    usage:
      "\\Xi es relativamente poco frecuente en matemáticas. Los físicos de partículas la usan para los bariones Xi, escritos \\Xi^0 y \\Xi^-, y a veces nombra la función xi de Riemann \\Xi(t) en teoría analítica de números. La mecánica estadística escribe en ocasiones la función de partición gran canónica como \\Xi. Como las demás griegas mayúsculas en LaTeX, es recta; \\varXi da la forma cursiva. No la confundas con el signo de equivalencia \\equiv, que tiene tres barras de igual longitud y espaciado de relación.",
  },
  "pi": {
    name: "Pi",
    meaning: "Letra griega pi minúscula, la constante del círculo 3,14159…, usada también para permutaciones y políticas.",
    usage:
      "\\pi es la razón entre la circunferencia de un círculo y su diámetro, y aparece en A = \\pi r^2, e^{i\\pi} + 1 = 0 y en ángulos en radianes como \\pi/2. El aprendizaje por refuerzo usa \\pi para una política \\pi(a \\mid s), la combinatoria la usa para una permutación y la teoría de números escribe \\pi(x) para la función contadora de primos. La variante \\varpi es un glifo distinto. Cuando pi es una constante, algunas guías de estilo prefieren una forma recta, pero LaTeX estándar da una \\pi cursiva. No uses el operador grande \\prod en lugar de \\pi, ni al revés.",
  },
  "pi-upper": {
    name: "Pi mayúscula",
    meaning: "Letra griega Pi mayúscula, una letra ordinaria usada para proyecciones, el beneficio y la presión osmótica.",
    usage:
      "\\Pi es una letra de tamaño fijo, no el operador producto; para productos sobre un índice usa \\prod, que se escala y coloca los límites. Como letra, \\Pi nombra aplicaciones de proyección, la función de beneficio en economía, la presión osmótica y el cálculo pi en informática. La teoría de tipos escribe los tipos de funciones dependientes como \\Pi_{x:A} B(x). La teoría de la complejidad usa \\Pi_k para los niveles de la jerarquía polinómica. Las griegas mayúsculas son rectas por defecto, y \\varPi da una variante cursiva si hace falta.",
  },
  "rho": {
    name: "Rho",
    meaning: "Letra griega rho minúscula, usada para la densidad, los coeficientes de correlación y la densidad de carga.",
    usage:
      "La física usa \\rho para la densidad de masa, \\rho = m/V, y para la densidad de carga en las ecuaciones de Maxwell \\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0. La estadística escribe la correlación de Pearson como \\rho_{XY} y la correlación de rangos de Spearman como \\rho. La teoría de representaciones usa \\rho para una representación, y la mecánica cuántica para una matriz densidad. La variante \\varrho tiene una cola curva que algunos autores usan para separar dos significados. No confundas \\rho con la p latina, que se le parece en muchas fuentes.",
  },
  "sigma": {
    name: "Sigma",
    meaning: "Letra griega sigma minúscula, usada para la desviación típica, las funciones de activación y las sigma-álgebras.",
    usage:
      "La estadística escribe la desviación típica como \\sigma y la varianza como \\sigma^2. El aprendizaje automático usa \\sigma(x) = 1/(1 + e^{-x}) para la sigmoide logística y \\sigma para una función de activación genérica. La teoría de la medida habla de \\sigma-álgebras, la física usa \\sigma para secciones eficaces, conductividad y las matrices de Pauli \\sigma_x, y el álgebra lineal usa \\sigma_i para los valores singulares. La variante de sigma final \\varsigma se parece a una s latina y casi no se usa en matemáticas. No uses la mayúscula \\Sigma para sumatorios; para eso está \\sum.",
  },
  "sigma-upper": {
    name: "Sigma mayúscula",
    meaning: "Letra griega Sigma mayúscula como letra, usada sobre todo para matrices de covarianza y alfabetos.",
    usage:
      "En estadística, \\Sigma denota una matriz de covarianza, como en \\mathbf{x} \\sim \\mathcal{N}(\\boldsymbol{\\mu}, \\Sigma), y la SVD escribe A = U\\Sigma V^\\top. La teoría de lenguajes formales usa \\Sigma para un alfabeto y \\Sigma^* para todas las cadenas sobre él. Para sumatorios usa \\sum en su lugar: \\Sigma es una letra ordinaria de tamaño fijo que no crece en modo destacado ni lleva límites. La teoría de la complejidad usa \\Sigma_k^p para la jerarquía polinómica. Las griegas mayúsculas son rectas; \\varSigma es la variante cursiva.",
  },
  "tau": {
    name: "Tau",
    meaning: "Letra griega tau minúscula, usada para constantes de tiempo, el momento de fuerza, el tiempo propio y la correlación de rangos de Kendall.",
    usage:
      "La física escribe el momento de fuerza como \\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}, una constante de tiempo en e^{-t/\\tau} y el tiempo propio \\tau en relatividad. La estadística tiene la \\tau de Kendall, y algunos autores usan \\tau = 2\\pi como constante del círculo. La teoría de números usa \\tau(n) para el número de divisores, y las formas modulares usan \\tau para un punto del semiplano superior. La teoría de tipos suele escribir los tipos como \\tau y \\sigma. No existe el comando \\Tau, ya que la tau mayúscula es igual a la T latina. En algunas fuentes \\tau se parece a una t pequeña, así que elige nombres distintos para variables cercanas.",
  },
  "upsilon": {
    name: "Ípsilon",
    meaning: "Letra griega ípsilon minúscula, poco usada, que se parece mucho a la u o la v latinas.",
    usage:
      "La \\upsilon minúscula es poco común en matemáticas, sobre todo porque se confunde fácilmente con la u y con \\nu. Aparece en física de partículas, para el mesón ípsilon, que suele escribirse en mayúscula, y ocasionalmente como velocidad o como variable de índice genérica. Si necesitas una variable nueva, a menudo es mejor elegir una letra menos ambigua. Cuando la uses, defínela explícitamente. La \\upsilon de LaTeX es cursiva como las demás griegas minúsculas, mientras que la mayúscula \\Upsilon tiene su propio comando.",
  },
  "upsilon-upper": {
    name: "Ípsilon mayúscula",
    meaning: "Letra griega Ípsilon mayúscula, conocida sobre todo por el mesón ípsilon en física de partículas.",
    usage:
      "\\Upsilon denota la familia de mesones del bottomonio, \\Upsilon(1S), \\Upsilon(2S), en física de partículas. En matemáticas es rara y a veces nombra una función o un conjunto cuando las demás letras están ocupadas. A diferencia de la alfa o la beta mayúsculas, la ípsilon mayúscula tiene una forma propia en Computer Modern, con los brazos curvados, así que no es solo una Y latina y tiene su propio comando. Como las demás griegas mayúsculas, es recta; \\varUpsilon da la forma cursiva. Cuida su legibilidad en diapositivas, donde puede parecer una Y.",
  },
  "phi": {
    name: "Fi",
    meaning: "Letra griega fi minúscula, usada para ángulos, el número áureo, la función phi de Euler y las aplicaciones de características.",
    usage:
      "\\phi da la forma cerrada con trazo vertical, mientras que \\varphi da la forma abierta con bucle; muchos autores eligen \\varphi para funciones y reservan \\phi para ángulos. La teoría de números escribe la función phi de Euler como \\varphi(n) o \\phi(n), el número áureo es \\phi = (1 + \\sqrt{5})/2 y las coordenadas esféricas usan \\phi para un ángulo. El aprendizaje automático usa \\phi(x) para una aplicación de características en los métodos de núcleo, y la física la usa para potenciales escalares y funciones de onda. No confundas \\phi con \\emptyset ni con la Ø escandinava.",
  },
  "phi-upper": {
    name: "Fi mayúscula",
    meaning: "Letra griega Fi mayúscula, usada para la función de distribución normal estándar, el flujo magnético y los potenciales.",
    usage:
      "La estadística escribe la función de distribución acumulada normal estándar como \\Phi(z), con la minúscula \\phi(z) para la densidad. La física usa \\Phi_B para el flujo magnético y \\Phi para el potencial eléctrico, y la ingeniería la usa para el flujo en general. En álgebra lineal y optimización, \\Phi puede nombrar una matriz de diseño de funciones base. Las griegas mayúsculas son rectas en LaTeX; \\varPhi da la variante cursiva. No confundas \\Phi con \\emptyset ni con el símbolo circular \\oslash. Su inversa \\Phi^{-1} da los cuantiles normales, como z_{0.975} \\approx 1.96.",
  },
  "chi": {
    name: "Ji",
    meaning: "Letra griega ji minúscula, usada para la distribución ji cuadrado, las funciones características y la susceptibilidad.",
    usage:
      "El estadístico ji cuadrado \\chi^2 = \\sum (O_i - E_i)^2/E_i es su uso más conocido, junto con \\chi^2_k para la distribución con k grados de libertad. La teoría de conjuntos y la probabilidad escriben la función indicadora o característica de un conjunto como \\chi_A. La topología usa \\chi(M) para la característica de Euler, la teoría de grafos usa \\chi(G) para el número cromático y la física usa \\chi para la susceptibilidad magnética. Ten en cuenta que \\chi baja por debajo de la línea base, así que revisa la colocación de los subíndices. No la confundas con la x latina ni con el operador \\times.",
  },
  "psi": {
    name: "Psi",
    meaning: "Letra griega psi minúscula, la letra convencional para una función de onda cuántica y la función digamma.",
    usage:
      "La mecánica cuántica escribe las funciones de onda como \\psi(x, t) y los estados como |\\psi\\rangle en notación de Dirac, con la ecuación de Schrödinger i\\hbar\\,\\partial_t \\psi = \\hat{H}\\psi. Las funciones especiales usan \\psi(x) = \\Gamma'(x)/\\Gamma(x) para la función digamma. La dinámica de fluidos usa \\psi para la función de corriente, y el análisis de ondículas usa \\psi para una ondícula madre. En la notación bra-ket, \\langle \\psi | \\phi \\rangle usa \\langle y \\rangle, no los signos menor que y mayor que. La mayúscula \\Psi es un comando aparte. La normalización exige \\int |\\psi|^2\\,dx = 1.",
  },
  "psi-upper": {
    name: "Psi mayúscula",
    meaning: "Letra griega Psi mayúscula, a menudo una función de onda de muchos cuerpos o un estado en mecánica cuántica.",
    usage:
      "La física usa \\Psi para una función de onda total o de muchas partículas y reserva \\psi para los estados de una partícula, como en la ecuación de Schrödinger dependiente del tiempo para \\Psi(\\mathbf{r}, t). La física de partículas escribe el mesón J/\\psi en minúscula, pero \\Psi se usa para algunos estados del charmonio. En matemáticas puede nombrar una función o un funtor cuando las demás letras están ocupadas. Las griegas mayúsculas son rectas; \\varPsi da una versión cursiva. La psicología también usa el símbolo como emblema, pero ese uso rara vez aparece en fórmulas.",
  },
  "omega": {
    name: "Omega",
    meaning: "Letra griega omega minúscula, usada para la frecuencia angular, los resultados de un experimento aleatorio y el primer ordinal infinito.",
    usage:
      "La física escribe la frecuencia angular como \\omega = 2\\pi f, de modo que un oscilador armónico es x(t) = A\\cos(\\omega t + \\varphi). La probabilidad usa \\omega \\in \\Omega para un resultado del espacio muestral, y la teoría de conjuntos usa \\omega para el primer ordinal infinito. La teoría de la complejidad escribe la omega pequeña \\omega(n) para cotas inferiores estrictas, y la geometría diferencial usa \\omega para las formas diferenciales. La teoría de números tiene \\omega(n), el número de factores primos distintos. Ten cuidado de no confundir \\omega con la w latina en apuntes a mano.",
  },
  "omega-upper": {
    name: "Omega mayúscula",
    meaning: "Letra griega Omega mayúscula, usada para el ohmio, los espacios muestrales y las cotas asintóticas inferiores.",
    usage:
      "Como unidad, \\Omega es el ohmio, así que una resistencia se escribe 10\\,\\mathrm{k}\\Omega; separa el número y la unidad con un espacio fino. La probabilidad escribe el espacio muestral como \\Omega en la terna (\\Omega, \\mathcal{F}, P). El análisis de algoritmos usa \\Omega(n \\log n) para una cota inferior, junto a O y \\Theta. El análisis suele escribir un dominio abierto como \\Omega \\subset \\mathbb{R}^n. Las griegas mayúsculas son rectas, y \\varOmega da una variante cursiva. No confundas \\Omega con el mho, una omega invertida que antes se usaba para el siemens.",
  },
};

export default text;
