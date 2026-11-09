import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/quantifiers/<slug>. */
const text: SymbolPageTranslations = {
  "unique-exists": {
    name: "Cuantificador de existencia única",
    meaning: "Existe exactamente uno: el cuantificador existencial seguido de un signo de exclamación que exige unicidad.",
    usage: "Los enunciados de unicidad, como la existencia de una solución única de un problema de valor inicial o de un único elemento neutro en un grupo, se escriben \\exists! x. El signo de exclamación es un símbolo de cierre en el modo matemático de TeX, así que \\exists! x queda bien espaciado, aunque algunos autores añaden \\, antes de la variable para mayor claridad. Formalmente, \\exists! x\\, P(x) abrevia \\exists x\\,(P(x) \\wedge \\forall y\\,(P(y) \\to y = x)). Evita \\exists_1, que algunos lectores interpretan como una variable con subíndice. En la prosa, «existe un único» suele leerse mejor que el símbolo.",
  },
  "for-all-x": {
    name: "Cuantificador universal sobre x",
    meaning: "Cuantificador universal aplicado a x, que afirma que el enunciado siguiente se cumple para todo valor de x.",
    usage: "Las definiciones de continuidad, los axiomas de grupo y los principios de inducción empiezan con \\forall x. El símbolo \\forall es un átomo matemático ordinario, así que TeX no inserta espacio después de la variable; añadir \\, o dos puntos, como en \\forall x\\, P(x) o \\forall x : P(x), hace que las fórmulas largas se lean mucho mejor. Algunos autores colocan el cuantificador después del enunciado y en palabras («para todo x»), lo que resulta más amable en la prosa. No uses \\forall en frases corridas como abreviatura de «para todo» salvo que tu público espere esa notación.",
  },
  "exists-x": {
    name: "Cuantificador existencial sobre x",
    meaning: "Cuantificador existencial que liga x y afirma que al menos un valor de x hace verdadero el enunciado.",
    usage: "Usos típicos son la definición de límite (\\exists \\delta > 0), la sobreyectividad (\\forall y\\, \\exists x : f(x) = y) y los testigos en lógica. El orden importa: \\forall y \\exists x no es lo mismo que \\exists x \\forall y, así que escribe las cadenas de cuantificadores con cuidado. Su forma negada, \\nexists, existe como símbolo propio para «no existe». Al igual que \\forall, \\exists no recibe espacio automático tras la variable ligada, así que añade un espacio fino o dos puntos antes del predicado. Para la unicidad, añade un signo de exclamación y obtendrás \\exists!.",
  },
  "for-all-in-set": {
    name: "Cuantificador universal acotado",
    meaning: "Cuantificador universal acotado: el enunciado debe cumplirse para todo elemento x del conjunto A.",
    usage: "Restringir el cuantificador a un conjunto, como en \\forall x \\in A, abrevia \\forall x\\,(x \\in A \\to P(x)) y es como escriben realmente la mayoría de los matemáticos. \\in tiene espaciado de relación, así que la expresión se espacia sola; basta con separarla del predicado con una coma, dos puntos o \; para facilitar la lectura. Con varias variables puedes escribir \\forall x, y \\in A en lugar de repetir el cuantificador. No confundas \\in con \\epsilon o \\varepsilon, que se parecen en algunas fuentes pero son letras, no la relación de pertenencia.",
  },
  "exists-in-set": {
    name: "Cuantificador existencial acotado",
    meaning: "Cuantificador existencial acotado: algún elemento x de A cumple la condición que sigue.",
    usage: "Esta forma compacta sustituye a \\exists x\\,(x \\in A \\wedge P(x)) y aparece continuamente en análisis, por ejemplo en la densidad de los racionales: entre dos reales cualesquiera \\exists q \\in \\mathbb{Q}. La negación de \\exists x \\in A\\, P(x) es \\forall x \\in A\\, \\neg P(x), una regla que conviene tener presente al negar definiciones. Usa \\nexists x \\in A para «ningún elemento de A». Pon dos puntos, «tal que» o \; antes del predicado para que el lector vea dónde termina el cuantificador.",
  },
  "such-that-colon": {
    name: "Dos puntos de «tal que»",
    meaning: "Los dos puntos leídos como «tal que» en enunciados cuantificados y en la notación por comprensión, que separan una variable de su condición.",
    usage: "En modo matemático, los dos puntos simples se tratan como una relación y reciben el mismo espacio grueso a ambos lados, lo que conviene a \\{x : x > 0\\} y \\forall x : P(x). Para la signatura de una función usa en su lugar \\colon, que tiene espaciado de puntuación: f\\colon A \\to B se ve bien, mientras que f : A \\to B deja un hueco antes de los dos puntos. En las definiciones, := formado por dos caracteres puede verse desalineado verticalmente; un símbolo de definición dedicado de un paquete de extensión lo resuelve. Algunos autores prefieren \\mid o una barra vertical en la notación por comprensión; elige una opción y sé coherente.",
  },
  "set-builder": {
    name: "Notación por comprensión",
    meaning: "Notación por comprensión: el conjunto de todos los x para los que se cumple la propiedad P(x), escrito con llaves y un separador.",
    usage: "En modo matemático las llaves deben escaparse como \\{ y \\}; de lo contrario solo agrupan y desaparecen del resultado. \\mid es una relación, así que recibe el espacio adecuado a ambos lados, a diferencia de una | sola, que es un símbolo ordinario y apiña las letras. Cuando la condición contiene fracciones o material alto, ajusta el tamaño de todo a la vez: \\left\\{ x \;\\middle|\; \\frac{x}{2} \\in \\mathbb{Z} \\right\\}. Los dos puntos funcionan igual de bien como separador y evitan confusiones cuando la propia condición contiene valores absolutos.",
  },
  "quantified-statement": {
    name: "Enunciado con cuantificadores anidados",
    meaning: "Una oración con cuantificadores anidados: para cada x existe algún y que hace verdadero P(x, y), y ese y puede depender de x.",
    usage: "Este esquema subyace a las definiciones épsilon-delta y a enunciados como «todo entero tiene un sucesor». Cambiar el orden a \\exists y \\forall x produce una afirmación mucho más fuerte, un único y válido para todos los x, y confundir ambas es un error clásico en las demostraciones. Los dos puntos separan el prefijo de cuantificadores de la fórmula matriz; si tu convención para los dos puntos choca con la notación de funciones en otro lugar, usa un punto o corchetes. Para que los prefijos largos se lean mejor, añade \\, entre los bloques de cuantificadores o escribe cada uno en su propia frase: para todo x existe y.",
  },
};

export default text;
