import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/geometry/<slug>. */
const text: SymbolPageTranslations = {
  "angle": {
    name: "Ángulo",
    meaning: "Signo de ángulo que se coloca delante de las etiquetas de los vértices, como en el ángulo ABC con vértice en B.",
    usage:
      "En las demostraciones de geometría se escribe \\angle ABC para el ángulo con vértice en B, y \\angle ABC \\cong \\angle DEF para ángulos congruentes. Es un símbolo matemático ordinario, así que no se añade espacio extra detrás, lo que encaja con nombres como \\angle A. Los libros de texto estadounidenses suelen indicar la medida como m\\angle A = 60^{\\circ}, separando el ángulo de su amplitud. Entre los símbolos relacionados están \\measuredangle, que añade un arco para indicar un ángulo medido u orientado, y \\sphericalangle para ángulos sobre una esfera. No lo use como abreviatura de la palabra «ángulo» en el texto.",
  },
  "measured-angle": {
    name: "Ángulo medido",
    meaning: "Signo de ángulo con un arco, usado a menudo para un ángulo medido u orientado.",
    usage:
      "Algunos textos de geometría reservan \\angle para el ángulo como figura y \\measuredangle para su medida numérica, y escriben \\measuredangle ABC = 30^{\\circ}. En la geometría de olimpiadas, \\measuredangle suele denotar ángulos orientados módulo 180^{\\circ}, lo que hace que los argumentos sobre cuadriláteros cíclicos no dependan de la configuración de la figura: A, B, C y D son concíclicos exactamente cuando \\measuredangle ABC = \\measuredangle ADC. Como las convenciones varían, defina lo que quiere decir en una nota sobre la notación. Se comporta como un símbolo ordinario, así que el espaciado junto a las letras es estrecho.",
  },
  "spherical-angle": {
    name: "Ángulo esférico",
    meaning: "Signo de ángulo esférico, usado para los ángulos entre arcos de círculo máximo sobre una esfera.",
    usage:
      "La geometría esférica, la navegación y la astronomía lo usan para los ángulos formados por arcos sobre una esfera, donde los ángulos de un triángulo suman más de 180^{\\circ}. El teorema de Girard da el área de un triángulo esférico como R^2(A + B + C - \\pi), el exceso esférico. Su forma difiere tanto de \\measuredangle como del simple \\angle, así que no los intercambie a la ligera. Algunos autores lo reutilizan para ángulos sólidos u orientados, por lo que una definición de una línea ayuda al lector. Es un símbolo ordinario, así que añada \\, si queda demasiado pegado a la etiqueta que lo sigue.",
  },
  "not-congruent": {
    name: "Signo de no congruencia",
    meaning: "Signo de congruencia tachado: dos figuras u objetos no son congruentes o no son isomorfos.",
    usage:
      "En geometría, \\triangle ABC \\ncong \\triangle DEF afirma que los triángulos no son congruentes; en álgebra, \\cong suele significar «isomorfo», así que G \\ncong H dice que dos grupos no son isomorfos. Es una relación, de modo que el espaciado es automático. Prefiera este glifo precompuesto a \\not\\cong, que superpone una barra genérica que puede quedar descentrada sobre el símbolo. Entre las relaciones negadas afines están \\neq y \\nsim. Si usa \\cong para el isomorfismo, indique la categoría o la estructura cuando no sea evidente, ya que dos espacios pueden ser homeomorfos sin ser isomorfos como grupos.",
  },
  "similar-or-equal": {
    name: "Signo de semejante o igual",
    meaning: "Tilde sobre una sola raya, que se lee como «homotópicamente equivalente», «asintóticamente igual» o «isomorfo».",
    usage:
      "Su significado depende del campo: los topólogos escriben X \\simeq Y para la equivalencia homotópica, los teóricos de categorías para la equivalencia de categorías y los físicos para la igualdad aproximada. Compárelo con \\cong (tilde sobre dos rayas), reservado normalmente para el isomorfismo o la congruencia, con \\approx (dos tildes) para la aproximación numérica y con \\sim para la equivalencia asintótica o las relaciones de equivalencia. Como las convenciones se solapan, indique cuál usa. Al ser un símbolo de relación, recibe automáticamente un espaciado amplio a ambos lados, así que no hacen falta espacios manuales.",
  },
  "arc": {
    name: "Arco",
    meaning: "Arco en forma de ceño, que a veces se coloca sobre las letras para indicar un arco de circunferencia.",
    usage:
      "Por sí solo, \\frown es un arco de la clase de las relaciones, y en teoría de conjuntos se usa para la concatenación de sucesiones, s^\\frown t. Para el arco geométrico entre los puntos A y B, el símbolo debe ir sobre las letras; \\overset{\\frown}{AB} lo consigue, aunque el arco no se estira, y los acentos de arco ancho de fuentes adicionales quedan mejor sobre etiquetas largas. Su imagen especular es \\smile, y ambos se combinan en algunas notaciones para relaciones de compatibilidad. Como el símbolo simple tiene espaciado de relación, revise el resultado cuando aparezca entre letras.",
  },
  "prime-feet-minutes": {
    name: "Prima (pies/minutos)",
    meaning: "Una prima simple, que indica pies, minutos de arco o minutos de tiempo detrás de un número.",
    usage:
      "En modo matemático el apóstrofo se convierte en una prima en superíndice, así que 5'\\,9'' se lee «cinco pies y nueve pulgadas», y 12^{\\circ}\\,30' da doce grados y treinta minutos de arco. Fuera del modo matemático, el apóstrofo es una simple comilla de cierre y no parece una prima, así que escriba las medidas en modo matemático. El mismo carácter produce las primas de las derivadas, f'(x), y marca puntos o variables transformados, A' y x'. En coordenadas geográficas como 40^{\\circ}\\,26'\\,46'', inserte espacios finos entre los componentes para que no queden pegados.",
  },
  "double-prime-inches-seconds": {
    name: "Doble prima (pulgadas/segundos)",
    meaning: "Dos primas, que indican pulgadas, segundos de arco o segundos detrás de un número.",
    usage:
      "En modo matemático, '' se convierte en un único superíndice de dos primas, así que 6'' denota seis pulgadas o seis segundos de arco, y 2^{\\circ}\\,15'\\,30'' escribe un ángulo en grados, minutos y segundos. Escribir en su lugar el carácter de comillas dobles produce otro glifo y debe evitarse. En modo texto, dos apóstrofos forman unas comillas de cierre, no una prima, así que las medidas deben ir en modo matemático. La misma construcción escribe segundas derivadas, f''(x), y puntos transformados dos veces como A''. Los astrónomos la usan para los segundos de arco, como en una resolución de 0.1''.",
  },
  "line-segment": {
    name: "Segmento",
    meaning: "Barra sobre AB, la notación estándar del segmento entre los puntos A y B.",
    usage:
      "Los textos de geometría escriben \\overline{AB} para el segmento y AB sin más para su longitud, de modo que \\overline{AB} \\cong \\overline{CD} va de la mano con AB = CD. La barra se extiende sobre todo el argumento, a diferencia de \\bar{x}, que es un acento de anchura fija para una sola letra. Otros significados de \\overline son el conjugado complejo \\overline{z}, la clausura de un conjunto \\overline{A} y la negación en el álgebra de Boole, \\overline{A \\cdot B}. Las semirrectas y las rectas usan \\overrightarrow{AB} y \\overleftrightarrow{AB}, que indican la dirección o la extensión infinita.",
  },
};

export default text;
