import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/logic/<slug>. */
const text: SymbolPageTranslations = {
  "not-exists": {
    name: "Cuantificador existencial negado",
    meaning: "Cuantificador existencial negado: no existe ningún objeto con la propiedad indicada.",
    usage: "\\nexists x \\in \\mathbb{Q} : x^2 = 2 afirma que 2 no tiene raíz cuadrada racional. El símbolo es un \\exists tachado diseñado como un único glifo; \\not\\exists también funciona, pero la barra puede quedar mal colocada. Lógicamente equivale a \\forall x\\, \\neg P(x), y muchos lógicos prefieren escribir \\neg \\exists x por claridad. Añade un espacio pequeño o dos puntos tras la variable ligada, como en \\nexists x \\, P(x). Para la existencia única el símbolo es \\exists!.",
  },
  "negation": {
    name: "Negación",
    meaning: "Signo de negación lógica, un gancho en forma de L que se coloca delante de una fórmula para expresar «no».",
    usage: "En lógica se escribe \\neg p para «no p», y en lógica clásica \\neg\\neg p \\equiv p; \\lnot es un alias exacto. Algunos textos usan en su lugar \\sim p, una barra superior \\bar{p} o p', sobre todo en álgebra de Boole y en circuitos digitales. \\neg es un símbolo ordinario, así que no aparece espacio entre él y su operando, que es el aspecto deseado. Las leyes de De Morgan, \\neg(p \\land q) \\equiv \\neg p \\lor \\neg q, son una fórmula destacada típica. En contextos de programación se ven tanto ! como \\lnot.",
  },
  "logical-and": {
    name: "Conjunción lógica",
    meaning: "Y lógico (conjunción), verdadero exactamente cuando ambos operandos son verdaderos.",
    usage: "\\land es un alias de \\wedge, elegido por legibilidad en lógica, como en p \\land q o \\forall x\\, (P(x) \\land Q(x)). Como LaTeX lo clasifica como operador binario, el espacio alrededor de p \\land q se ajusta automáticamente; no añadas \\, a mano. Para la conjunción de muchas fórmulas, usa el operador grande \\bigwedge_{i=1}^{n} p_i. En álgebra de Boole, el Y suele escribirse como una multiplicación, pq o p \\cdot q. Usa \\land en lógica y \\wedge en álgebra exterior para que el código fuente se lea con claridad, aunque ambos se imprimen igual.",
  },
  "logical-or": {
    name: "Disyunción lógica",
    meaning: "O lógico (disyunción), verdadero cuando al menos uno de los operandos es verdadero.",
    usage: "\\lor es un alias de \\vee que se usa en lógica proposicional y de predicados: p \\lor \\neg p es el principio del tercero excluido. LaTeX lo espacia como operador binario, así que p \\lor q no necesita comandos de espaciado manuales. Para muchos disyuntos, \\bigvee_{i} p_i es el operador grande. La disyunción exclusiva es otro símbolo: \\oplus o \\veebar. En álgebra de Boole y diseño de circuitos el O se escribe a menudo como +. Prefiere \\lor en fórmulas lógicas y \\vee en teoría de retículos para que el código sea legible, aunque ambos se ven igual.",
  },
  "proves": {
    name: "Deducibilidad (torniquete)",
    meaning: "Torniquete: la fórmula de la derecha es derivable (demostrable) a partir de las hipótesis de la izquierda.",
    usage: "La teoría de la demostración escribe \\Gamma \\vdash \\varphi para la consecuencia sintáctica, y la teoría de tipos lo usa en los juicios de tipado \\Gamma \\vdash e : \\tau. Se distingue de \\models, que expresa la consecuencia semántica (verdad en todos los modelos); la corrección y la completitud afirman que ambas coinciden en la lógica de primer orden. Se niega con \\nvdash. \\vdash es una relación, así que el espaciado es automático. Para reglas de inferencia, \\frac o un paquete específico de árboles de demostración produce la línea horizontal, con juicios que contienen \\vdash arriba y abajo. El símbolo simétrico es \\dashv.",
  },
  "models": {
    name: "Consecuencia semántica (doble torniquete)",
    meaning: "Doble torniquete: consecuencia semántica o satisfacción, es decir, verdad en todo modelo.",
    usage: "\\mathcal{M} \\models \\varphi dice que la estructura M satisface la fórmula \\varphi, y \\Gamma \\models \\varphi dice que todo modelo de \\Gamma satisface \\varphi. Contrasta con \\vdash, que es la demostrabilidad sintáctica. Su negación es \\not\\models o el glifo específico \\nvDash. El parecido \\vDash tiene proporciones ligeramente distintas y se usa en algunas lógicas junto con \\Vdash para el forcing en teoría de conjuntos. Como es una relación, recibe espacio a ambos lados. En verificación de modelos se escribe s \\models \\phi para un estado que satisface una fórmula temporal.",
  },
  "therefore": {
    name: "Signo «por lo tanto»",
    meaning: "Tres puntos en triángulo que se leen «por lo tanto» e introducen una conclusión.",
    usage: "\\therefore es habitual en las matemáticas escolares y en derivaciones informales: x + 2 = 5, \\therefore x = 3. Los artículos formales suelen preferir palabras como «por tanto» o la flecha de implicación \\implies. Se compone como una relación, así que el espaciado entre expresiones es automático. La versión invertida, \\because, significa «porque». En el texto debe seguir en modo matemático, por ejemplo $\\therefore$, salvo que cargues un símbolo alternativo de texto. Como su significado resulta claro para la mayoría de lectores, funciona bien en diapositivas y en soluciones resueltas donde falta espacio.",
  },
  "because": {
    name: "Signo «porque»",
    meaning: "Tres puntos que forman un triángulo invertido, se leen «porque» o «ya que» e introducen una razón.",
    usage: "\\because introduce una justificación, normalmente en soluciones escolares paso a paso: \\angle A = \\angle B \\quad \\because AB = AC. Es el reflejo de \\therefore, con el punto solitario abajo. La escritura formal suele poner «ya que» con palabras o usa una anotación de texto como \\text{(por el lema 2)}. Como símbolo de relación lleva espacio a ambos lados, y \\quad o \\qquad delante separa la razón de la ecuación. Úsalo con moderación en artículos. En las demostraciones, escribir la razón con palabras suele ser más amable con el lector.",
  },
  "contradiction-falsum-bottom": {
    name: "Contradicción (falsum, mínimo)",
    meaning: "Símbolo de tachuela hacia arriba (mínimo): falsum o contradicción en lógica, y el elemento mínimo de un retículo.",
    usage: "La lógica usa \\bot para una proposición siempre falsa, de modo que derivar \\bot demuestra la negación, y \\neg p puede definirse como p \\to \\bot. La teoría de dominios y los retículos usan \\bot para el elemento mínimo, y la teoría de tipos para el tipo vacío. \\bot es un símbolo ordinario; el mismo glifo con espaciado de relación es \\perp, que es el adecuado para la ortogonalidad entre dos objetos. Su dual es \\top. En las demostraciones por reducción al absurdo, algunos autores escriben \\bot o \\Rightarrow\\Leftarrow al final del paso contradictorio.",
  },
  "tautology-verum-top": {
    name: "Tautología (verum, máximo)",
    meaning: "Símbolo de tachuela hacia abajo (máximo): verum, la proposición siempre verdadera, y el elemento máximo de un retículo.",
    usage: "En lógica \\top es una tautología, el elemento neutro de la conjunción (p \\land \\top \\equiv p). Los retículos y la teoría de dominios lo usan para el elemento máximo, y la teoría de tipos para el tipo unidad. También se usa mucho como superíndice para la traspuesta de una matriz, A^\\top, como alternativa a A^T o A^\\intercal. \\top es un símbolo ordinario. No lo confundas con la letra T, que se apoya en la línea base y tiene otras proporciones. Su dual es \\bot.",
  },
  "not-equivalent": {
    name: "Signo de no equivalencia",
    meaning: "Triple barra tachada: no congruente módulo n, o no idénticamente igual.",
    usage: "En teoría de números se escribe a \\not\\equiv b \\pmod{n} cuando n no divide a a - b, por ejemplo en la hipótesis del pequeño teorema de Fermat, a \\not\\equiv 0 \\pmod{p}. El prefijo \\not superpone una barra sobre la relación; colócalo justo delante de \\equiv. En algunas fuentes la barra parece algo descentrada, pero no hay un glifo específico estándar en las fuentes de símbolos habituales, así que \\not\\equiv es la opción usual. En lógica significa «no lógicamente equivalente». Para la simple desigualdad, usa \\neq.",
  },
};

export default text;
