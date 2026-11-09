import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/relations/<slug>. */
const text: SymbolPageTranslations = {
  "less-than": {
    name: "Signo menor que",
    meaning: "La relación «menor que», que afirma que la cantidad de la izquierda es estrictamente menor que la de la derecha.",
    usage: "Escrito directamente en modo matemático, < se convierte en una relación con el espaciado adecuado a su alrededor, como en 0 < x < 1 o en una desigualdad estricta de una demostración épsilon-delta. No lo uses como corchete angular para productos internos; para eso está \\langle. En modo texto con la antigua codificación de fuentes predeterminada, < puede imprimirse como un signo de exclamación invertido, así que escribe \\textless o usa el modo matemático. Su forma no estricta es \\leq (o \\le), y la negación es \\not< o \\nless. Los renderizadores web como MathJax también aceptan \\lt, lo que resulta útil en HTML.",
  },
  "greater-than": {
    name: "Signo mayor que",
    meaning: "La relación «mayor que», que establece que la cantidad de la izquierda es estrictamente mayor que la de la derecha.",
    usage: "En modo matemático, > es un símbolo de relación y recibe automáticamente el espaciado de relación, así que x > 0 no necesita espacios manuales. Cierra desigualdades estrictas como \\lambda_{\\max} > 0 o la condición n > N en las definiciones de límite. No debe usarse como corchete angular de cierre; para eso está \\rangle. En modo texto con la codificación de fuentes antigua, el carácter puede imprimirse como un signo de interrogación invertido, así que usa \\textgreater o el modo matemático. Los comandos relacionados son \\geq (o \\ge), \\gg para «mucho mayor que» y \\ngtr para su negación.",
  },
  "equivalent": {
    name: "Equivalencia (triple barra)",
    meaning: "Relación de tres barras que significa «idénticamente igual», «congruente módulo n» o «lógicamente equivalente».",
    usage: "La teoría de números escribe a \\equiv b \\pmod{n} para la congruencia, el análisis escribe f \\equiv 0 para decir que una función se anula en todas partes, y la lógica lo usa para la equivalencia lógica de fórmulas. Combínalo con \\pmod{n} para el módulo entre paréntesis o con \\bmod para la forma binaria a \\bmod n. Es distinto de \\cong (isomorfismo o congruencia geométrica) y de \\triangleq o := (definiciones), aunque algunos autores también lo usan para definiciones. Se niega con \\not\\equiv. En física, \\equiv suele introducir una abreviatura: \\omega \\equiv 2\\pi f.",
  },
  "proportional-to": {
    name: "Proporcionalidad",
    meaning: "Indica que una cantidad es proporcional a otra, es decir, igual salvo un factor constante.",
    usage: "La física escribe F \\propto 1/r^2 para las leyes del inverso del cuadrado, y la estadística bayesiana recurre a él constantemente: p(\\theta \\mid x) \\propto p(x \\mid \\theta)\\, p(\\theta), omitiendo la constante de normalización. Es una relación, así que el espaciado es automático. No lo confundas con la letra griega \\alpha, que se le parece en algunas fuentes pero no tiene espaciado de relación. La variante \\varpropto tiene una forma ligeramente distinta. Para órdenes de crecimiento en el análisis de algoritmos, \\sim o \\Theta suelen ser más claros. Escribe la constante solo cuando importe; si no, la gracia de \\propto es precisamente ocultarla.",
  },
  "similar-to": {
    name: "Tilde (relación)",
    meaning: "Relación de tilde para «se distribuye como», «asintóticamente igual», «semejante» o «equivalente bajo una relación».",
    usage: "En probabilidad, X \\sim \\mathcal{N}(0, 1) se lee «X sigue una distribución normal estándar». En análisis asintótico, f \\sim g significa f/g \\to 1, como en la fórmula de Stirling. El álgebra usa x \\sim y para una relación de equivalencia, y la geometría lo usa para triángulos semejantes. Como relación lleva espacio a ambos lados; para una tilde como acento sobre una letra usa \\tilde{x}. Sus parientes cercanos son \\simeq (asintóticamente igual u homotópicamente equivalente), \\approx (aproximadamente) y \\thicksim, una versión más gruesa. Como prefijo con el sentido de «aproximadamente», como en \\sim 10^3, el espaciado puede quedar raro; escribe {\\sim}10^3.",
  },
  "congruent": {
    name: "Isomorfismo (congruencia)",
    meaning: "Tilde sobre un signo igual que denota isomorfismo de estructuras o congruencia de figuras geométricas.",
    usage: "Los algebristas escriben G \\cong H para grupos isomorfos y V \\cong V^{**} para espacios de dimensión finita, mientras que la geometría usa \\triangle ABC \\cong \\triangle DEF para triángulos congruentes. Algunos textos de física e ingeniería lo usan con el sentido de «aproximadamente igual», pero \\approx es más claro para eso. Se diferencia de \\simeq (una sola barra, usado para la equivalencia homotópica o la igualdad asintótica) y de \\equiv (tres barras). Para indicar la aplicación, colócala sobre el símbolo con \\overset{\\phi}{\\cong} o usa una flecha como \\xrightarrow{\\sim}.",
  },
  "subset-or-equal": {
    name: "Inclusión no estricta",
    meaning: "Indica que todo elemento del conjunto de la izquierda pertenece también al de la derecha; los conjuntos pueden ser iguales.",
    usage: "Usa \\subseteq para la inclusión que admite la igualdad, como en A \\subseteq A, y en definiciones como la de una topología cerrada bajo uniones de subfamilias \\mathcal{U} \\subseteq \\tau. Muchos autores usan \\subset a secas con el mismo significado, mientras que otros reservan \\subset para la inclusión estricta, así que conviene aclarar tu convención. Para la inclusión estricta sin ambigüedad, usa \\subsetneq. La negación es \\nsubseteq o \\not\\subseteq. Para demostrar que dos conjuntos son iguales, una prueba estándar muestra A \\subseteq B y B \\subseteq A.",
  },
  "proper-subset": {
    name: "Subconjunto propio",
    meaning: "Símbolo de subconjunto con la barra tachada: el conjunto de la izquierda está contenido en el de la derecha pero no es igual a él.",
    usage: "\\subsetneq expresa explícitamente la inclusión estricta y elimina la ambigüedad de \\subset, que algunos textos tratan como no estricto. Aparece en cadenas como \\mathbb{N} \\subsetneq \\mathbb{Z} \\subsetneq \\mathbb{Q} y en argumentos de maximalidad para ideales. Entre sus variantes están \\subsetneqq (doble barra tachada) y \\varsubsetneq, cuyo trazo cruza solo la barra. No lo confundas con \\nsubseteq, que significa «no es subconjunto en absoluto». Su equivalente para superconjuntos es \\supsetneq. Es una relación, así que el espaciado a su alrededor se gestiona automáticamente. Al demostrar que una inclusión es estricta, muestra A \\subseteq B y exhibe un elemento de B que no esté en A.",
  },
  "superset": {
    name: "Superconjunto",
    meaning: "Relación de superconjunto: el conjunto de la izquierda contiene al de la derecha (a menudo en sentido estricto, según la convención).",
    usage: "\\supset es la imagen especular de \\subset, así que A \\supset B dice que B está dentro de A. Igual que con \\subset, los autores no coinciden en si admite la igualdad; aclara tu convención o usa \\supseteq y \\supsetneq para despejar dudas. Los textos de lógica de tradiciones más antiguas, incluidos los Principia Mathematica, usaban \\supset para la implicación material, por lo que puedes encontrar p \\supset q en artículos de filosofía. En textos nuevos, \\to o \\implies es más claro para la implicación. La negación es \\not\\supset, y \\nsupseteq cubre la versión no estricta.",
  },
  "superset-or-equal": {
    name: "Superconjunto o igual",
    meaning: "Relación de superconjunto o igual: el conjunto de la izquierda incluye todos los elementos del de la derecha.",
    usage: "Lee A \\supseteq B como «A contiene a B», posiblemente con igualdad. Resulta natural cuando el conjunto mayor es el sujeto, como en \\overline{A} \\supseteq A para clausuras o \\ker f \\supseteq \\operatorname{im} g en argumentos con sucesiones exactas. Es simplemente \\subseteq leído en la otra dirección, así que elige la forma que ponga primero el conjunto importante. La versión estricta es \\supsetneq, y la negación \\nsupseteq. En teoría de retículos y del orden también expresa el orden de inclusión inverso sobre familias de conjuntos.",
  },
  "perpendicular": {
    name: "Perpendicularidad",
    meaning: "Relación de perpendicularidad, que marca rectas, vectores o subespacios ortogonales, así como la independencia de variables.",
    usage: "La geometría escribe AB \\perp CD, el álgebra lineal escribe u \\perp v cuando \\langle u, v \\rangle = 0 y W^\\perp para un complemento ortogonal, y la teoría de números a veces usa a \\perp b para enteros coprimos. Los probabilistas escriben X \\perp Y para la independencia, a menudo duplicado como X \\perp\\!\\!\\!\\perp Y para imitar el símbolo específico de independencia. \\perp es una relación con espacio a ambos lados, mientras que \\bot tiene la misma forma pero espaciado ordinario, lo que conviene para el «falso» lógico o un elemento mínimo. En un superíndice como W^\\perp sirve cualquiera de los dos, ya que ahí el espaciado se suprime.",
  },
  "parallel": {
    name: "Paralelismo",
    meaning: "Relación «es paralelo a» para rectas, planos o vectores; también es un operador de composición paralela.",
    usage: "La geometría escribe \\ell_1 \\parallel \\ell_2, la física escribe componentes como F_\\parallel (a menudo mediante \\|), y la ingeniería eléctrica usa R_1 \\parallel R_2 para resistencias en paralelo. Los cálculos de procesos lo usan para la composición paralela, P \\parallel Q. El glifo es el mismo que \\|, pero \\parallel recibe espaciado de relación, así que úsalo entre objetos y \\| (o \\lVert, \\rVert) como delimitadores de norma. Su negación es \\nparallel. Para la divergencia de Kullback-Leibler D(P \\parallel Q), el espaciado de relación es lo habitual, aunque algunos prefieren \\|.",
  },
  "not-parallel": {
    name: "No paralelismo",
    meaning: "Relación de paralelismo negada, que indica que dos rectas o vectores no son paralelos.",
    usage: "\\nparallel traza una barra oblicua sobre la doble barra y se usa en problemas de geometría como \\ell_1 \\nparallel \\ell_2, lo que implica que las rectas se cortan (en el plano) o se cruzan (en el espacio). Es una relación con el mismo espaciado que \\parallel. Escribir \\not\\parallel puede funcionar, pero la barra superpuesta suele quedar mal centrada, así que el glifo dedicado se ve mejor. También existe \\nshortparallel, una variante más corta. En física, una componente no paralela se escribe más a menudo con \\perp.",
  },
  "much-less-than": {
    name: "Signo mucho menor que",
    meaning: "Relación «mucho menor que», que indica que la cantidad de la izquierda es menor que la de la derecha en órdenes de magnitud.",
    usage: "La física y la ingeniería usan \\ll para los regímenes de aproximación: v \\ll c para el movimiento no relativista, o x \\ll 1 para justificar \\sin x \\approx x. La teoría analítica de números usa la notación de Vinogradov f \\ll g, que significa f = O(g), y la teoría de la medida escribe \\mu \\ll \\nu para la continuidad absoluta. Es un único glifo, así que no escribas << ni < <, que dan dos símbolos de relación separados con un espaciado incorrecto. La versión triple \\lll existe para una desigualdad aún más fuerte.",
  },
  "much-greater-than": {
    name: "Signo mucho mayor que",
    meaning: "Relación «mucho mayor que», que indica que una cantidad supera ampliamente a otra.",
    usage: "Usa \\gg en razonamientos asintóticos o físicos, como n \\gg 1 para aproximaciones de muestras grandes, kT \\gg \\hbar\\omega para el límite clásico o la notación de Vinogradov f \\gg g, que significa g = O(f). Es un solo símbolo con espaciado de relación; escribir >> produce dos relaciones separadas. También existe la versión más fuerte \\ggg. Como \\gg no es cuantitativo, los artículos suelen acompañarlo de un enunciado preciso, por ejemplo n \\gg \\log(1/\\delta) junto con la constante implicada. Los razonamientos asintóticos en física suelen enunciar el régimen una vez, por ejemplo L \\gg \\lambda, y después descartan los términos pequeños.",
  },
  "precedes": {
    name: "Relación de precedencia estricta",
    meaning: "Relación «precede a» para órdenes estrictos que no son el «menor que» numérico habitual.",
    usage: "\\prec sirve para escribir órdenes estrictos abstractos: las preferencias en economía (x \\prec y significa que y se prefiere estrictamente), la mayorización en análisis matricial, los órdenes de dominancia sobre particiones y la relación «ocurrió antes» en sistemas distribuidos. Su forma curva indica que el orden no es el < numérico. La versión no estricta es \\preceq, y \\preccurlyeq da una variante con barra curva que prefieren algunos textos. El álgebra lineal escribe A \\prec B para el orden de Loewner, lo que significa que B - A es definida positiva. Entre sus negaciones está \\nprec.",
  },
  "succeeds": {
    name: "Relación de sucesor estricta",
    meaning: "Relación «sucede a», la inversa de \\prec, para órdenes estrictos abstractos.",
    usage: "\\succ se lee «sucede a» o «se prefiere a»: en microeconomía x \\succ y significa que x se prefiere estrictamente a y, y en análisis matricial A \\succ 0 indica que A es definida positiva (orden de Loewner). Los artículos de optimización lo usan en restricciones semidefinidas. Es un símbolo de relación, así que el espaciado es automático. La forma no estricta es \\succeq, la de barra curva \\succcurlyeq y la negación \\nsucc. Evita > para estos órdenes, ya que el lector lo tomaría por una comparación numérica.",
  },
  "precedes-or-equal": {
    name: "Relación de precedencia no estricta",
    meaning: "Relación «precede o es igual a», la versión no estricta de \\prec para órdenes parciales y de preferencia.",
    usage: "La teoría del orden escribe x \\preceq y para un orden parcial general y reserva \\le para los números. Los economistas lo usan para la preferencia débil, y los especialistas en análisis matricial escriben A \\preceq B cuando B - A es semidefinida positiva. En optimización convexa, la desigualdad generalizada x \\preceq_K y lleva el cono como subíndice. \\preccurlyeq se le parece, con una barra inferior curva, y algunos autores lo prefieren para evitar confusiones con \\leq. La inversa es \\succeq, y \\npreceq la niega.",
  },
  "succeeds-or-equal": {
    name: "Relación de sucesor no estricta",
    meaning: "Relación «sucede o es igual a», vista sobre todo en A \\succeq 0 para matrices semidefinidas positivas.",
    usage: "Las restricciones de programación semidefinida se escriben X \\succeq 0, lo que significa que X es simétrica semidefinida positiva, y el orden de Loewner compara matrices como A \\succeq B. Los economistas usan \\succeq para la preferencia débil, que se lee «al menos tan bueno como». Es una relación con el espaciado estándar. La versión estricta es \\succ, la variante curva \\succcurlyeq y la negación \\nsucceq. Para comparaciones numéricas quédate con \\geq, para que el lector no busque un orden no estándar. En un programa semidefinido, la restricción suele ir en su propia línea tras «s.t.» («sujeto a»).",
  },
  "asymptotic": {
    name: "Equivalencia asintótica (mismo orden)",
    meaning: "Relación de equivalencia asintótica: dos funciones crecen al mismo ritmo salvo factores constantes.",
    usage: "En análisis y teoría de números, f \\asymp g significa que existen constantes c, C > 0 con c g \\le f \\le C g para argumentos grandes, lo que equivale a f = \\Theta(g) en informática. Es más débil que f \\sim g, que exige que el cociente tienda a 1. El glifo, un par de arcos opuestos, no debe confundirse con \\approx ni con \\smile y \\frown. Es una relación, así que el espaciado es automático. Algunos textos de física también lo usan de forma laxa para «asintóticamente igual», así que defínelo si importa la precisión.",
  },
  "defined-as": {
    name: "Igualdad por definición",
    meaning: "Dos puntos igual, la asignación por definición: el lado izquierdo se define como igual al lado derecho.",
    usage: "Escribir f(x) := x^2 + 1 marca una definición y no una afirmación de igualdad, y los dos puntos van del lado de lo que se define (=: invierte la dirección). Escritos directamente, los dos puntos y el signo igual son ambos relaciones, así que TeX los compone sin espacio entre ellos, pero los dos puntos no quedan centrados verticalmente respecto al signo igual, lo que molesta a algunos tipógrafos. El comando \\coloneqq de un paquete de herramientas matemáticas corrige esa alineación. En pseudocódigo también denota asignación, x := x + 1. Las alternativas incluyen \\triangleq y \\stackrel{\\text{def}}{=}.",
  },
  "triangle-equal": {
    name: "Signo igual con triángulo",
    meaning: "Signo igual coronado por un pequeño triángulo, que se lee «se define como».",
    usage: "Los artículos de procesamiento de señales, teoría de control y teoría de la información suelen preferir \\triangleq para las definiciones, como en H(X) \\triangleq -\\sum p(x) \\log p(x). Cumple la misma función que :=, pero es simétrico, así que no indica qué lado es el nuevo. A algunos lectores les resulta poco familiar, así que menciona la convención una vez en la sección de notación. Las alternativas incluyen \\stackrel{\\text{def}}{=} u \\overset{\\mathrm{def}}{=}, y \\equiv en física. Es una relación, así que el espaciado es automático. Explica la convención a cualquier lector ajeno a tu campo.",
  },
};

export default text;
