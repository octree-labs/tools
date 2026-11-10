import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/chemistry/<slug>. */
const text: SymbolPageTranslations = {
  "equilibrium-arrow": {
    name: "Flecha de equilibrio",
    meaning: "Par de semiflechas (arpones) opuestas que indica una reacción química en equilibrio dinámico.",
    usage: "La IUPAC recomienda los arpones para el equilibrio, como en N_2 + 3H_2 \\rightleftharpoons 2NH_3, mientras que dos flechas completas indican en general un proceso reversible. El arpón superior apunta a la derecha, en el sentido de la reacción directa. Su simétrico es \\leftrightharpoons, con el arpón hacia la izquierda arriba. Es una relación, así que TeX lo espacia como =. Para escribir condiciones sobre la flecha, como un catalizador, puedes usar \\overset{\\text{Fe}}{\\rightleftharpoons}, aunque las herramientas específicas de química producen flechas más largas. En física el mismo símbolo denota a veces una correspondencia en ambos sentidos.",
  },
  "reversible-reaction": {
    name: "Flecha de reacción reversible",
    meaning: "Dos flechas completas apiladas, la de la izquierda arriba y la de la derecha abajo, usadas para reacciones reversibles o aplicaciones en ambos sentidos.",
    usage: "Algunos textos de química usan flechas dobles completas para una reacción que puede transcurrir en ambos sentidos y reservan los arpones (\\rightleftharpoons) para el equilibrio propiamente dicho; la mayoría de los textos actuales usan arpones en ambos casos. Fíjate en el orden de apilamiento: \\leftrightarrows pone la flecha izquierda arriba, mientras que \\rightleftarrows pone la flecha derecha arriba, que suele ser lo deseado cuando la reacción directa va de izquierda a derecha. No las confundas con \\leftrightarrow, una única flecha con dos puntas. En teoría de categorías el par suele denotar una adjunción o un par de morfismos paralelos.",
  },
  "isotope": {
    name: "Isótopo",
    meaning: "Notación de nucleidos con el número másico como superíndice a la izquierda y el número atómico como subíndice a la izquierda, aquí el carbono-14.",
    usage: "El grupo vacío {} da a los índices algo a lo que unirse y los coloca a la izquierda del símbolo del elemento. Un defecto: TeX alinea a la izquierda el subíndice bajo el superíndice, así que el 6 de una sola cifra queda lejos de la C. Rellénalo con \\phantom{1}6 para alinear los números a la derecha contra el símbolo. Las ecuaciones nucleares combinan estas notaciones, como en la desintegración beta del carbono-14 a nitrógeno-14. Usa \\text o \\mathrm para el elemento, de modo que quede en redonda; el número atómico se omite a menudo cuando el elemento ya lo determina, lo que da {}^{14}\\text{C}.",
  },
  "superscript-charge": {
    name: "Carga iónica en superíndice",
    meaning: "Notación de iones con la carga como superíndice, aquí el catión sodio con una única carga positiva.",
    usage: "Escribe los iones con varias cargas poniendo el número antes del signo, \\text{Ca}^{2+} y \\text{SO}_4^{2-}, según el orden de la IUPAC. Las llaves importan: ^{2+} mantiene ambos caracteres en el superíndice. Un signo menos final en un superíndice se trata como unario, así que ^{-} se compone limpiamente. Usa \\mathrm{Na} en lugar de \\text{Na} si la fórmula puede aparecer dentro de un teorema o un pie de figura en cursiva, ya que \\text copia la fuente circundante mientras que \\mathrm siempre es redonda. Cuando coinciden subíndices y cargas, la carga se sitúa sobre el número de átomos, como en el sulfato.",
  },
  "subscript-count": {
    name: "Subíndice de número de átomos",
    meaning: "Fórmula molecular del agua, con el subíndice 2 contando los átomos de hidrógeno de cada molécula.",
    usage: "Los símbolos de los elementos deben ir en redonda, por eso cada grupo de letras va dentro de \\text; H_2O en cursiva parecería un conjunto de variables. Un equivalente más corto es \\mathrm{H_2O}, que mantiene todo en redonda, incluido el subíndice, y no se ve afectado por la cursiva circundante. Los subíndices solo cuentan átomos y nunca deben confundirse con las cargas en superíndice. Las fórmulas con paréntesis siguen el mismo patrón, \\mathrm{Ca(OH)_2}. Para un uso intensivo de la química, un paquete específico ahorra trabajo, pero para unas pocas fórmulas este método manual es perfectamente adecuado.",
  },
  "degrees-celsius": {
    name: "Grados Celsius",
    meaning: "Unidad grado Celsius, formada por un círculo elevado y una C en redonda; el agua se congela a 0 °C.",
    usage: "La marca de grado es \\circ en un superíndice; una o o un 0 son incorrectos. El estilo del SI pone un espacio entre el número y la unidad, así que escribe 25\\,^{\\circ}\\text{C} con un espacio fino, y nunca pongas un espacio entre el signo de grado y la C. Las diferencias de temperatura en grados Celsius equivalen a diferencias en kelvin, un hecho importante en los cálculos de capacidad calorífica. \\text pasa a cursiva dentro de los teoremas; \\mathrm{C} lo evita. Los paquetes de unidades ofrecen comandos semánticos, pero esta construcción es el método manual habitual y funciona en todas partes, incluido KaTeX.",
  },
  "bond": {
    name: "Enlace simple",
    meaning: "Enlace covalente simple entre dos átomos de carbono, dibujado como una línea corta entre los símbolos de los elementos.",
    usage: "En modo matemático el guion se convierte en un signo menos con espaciado de operador binario, así que el enlace aparece con huecos a ambos lados y parece más bien una resta. Escribirlo como \\text{C}{-}\\text{C} elimina el espaciado y da un enlace compacto. Las longitudes y energías de enlace suelen citarse junto a él, por ejemplo un enlace C-C de unos 154 pm. Para fórmulas estructurales condensadas como \\mathrm{CH_3{-}CH_3} se aplica el mismo truco de las llaves. Para algo más que unos pocos enlaces, las herramientas de dibujo o un paquete de estructuras producen auténticas fórmulas esqueletales.",
  },
  "double-bond": {
    name: "Enlace doble",
    meaning: "Enlace doble carbono-carbono, formado por un enlace sigma y uno pi, característico de los alquenos como el eteno.",
    usage: "Como = es una relación en modo matemático, TeX inserta espacios gruesos a ambos lados, lo que parece una ecuación más que un enlace. Ponerlo entre llaves, \\text{C}{=}\\text{C}, lo convierte en un símbolo ordinario y acerca los átomos. Los alquenos se escriben como \\mathrm{H_2C{=}CH_2}. El enlace doble es más corto y más fuerte que el simple y restringe la rotación, lo que da lugar a isómeros cis-trans. Asegúrate de que el lector no pueda confundir el enlace con un signo igual en una línea de reacción manteniéndolo pegado a los átomos.",
  },
  "triple-bond": {
    name: "Enlace triple",
    meaning: "Enlace triple carbono-carbono, típico de alquinos como el etino (acetileno), dibujado con tres líneas horizontales.",
    usage: "\\equiv es una relación, el mismo símbolo que se usa para la congruencia (a \\equiv b \\pmod n) y la identidad, así que por defecto se espacia ampliamente; {\\equiv} produce un enlace más compacto entre los átomos. Un enlace triple tiene una componente sigma y dos pi y es el más corto de los enlaces carbono-carbono. El nitrógeno gaseoso se escribe \\mathrm{N{\\equiv}N}. Algunas fuentes dibujan \\equiv algo ancho, lo que conviene en química. Evita \\cong o \\approx, que se parecen un poco pero significan isomorfismo y aproximación.",
  },
  "partial-charge": {
    name: "Carga parcial",
    meaning: "Carga parcial positiva sobre un átomo en un enlace polar, escrita como una delta minúscula con un signo más.",
    usage: "En el agua los hidrógenos llevan \\delta^{+} y el oxígeno \\delta^{-}, la separación de cargas que origina los puentes de hidrógeno. Aquí delta significa «una fracción de», no un cambio, así que no la confundas con \\Delta. Para colocar la etiqueta sobre un átomo, usa \\overset{\\delta^{+}}{\\text{H}}, que mantiene la fórmula legible. Algunos textos escriben \\delta+ en línea sin superíndice; la forma con superíndice es más común en textos compuestos tipográficamente. Combínala con \\delta^{-} en el átomo más electronegativo; \\delta\\delta^{+} denota una carga parcial aún menor.",
  },
  "electron": {
    name: "Electrón",
    meaning: "Símbolo del electrón, una e minúscula con un superíndice de carga negativa, usado en semirreacciones redox.",
    usage: "Las semiecuaciones ajustan la carga con electrones, como en \\text{Cu}^{2+} + 2e^{-} \\to \\text{Cu}. El positrón es e^{+}. Las guías de estilo de física suelen escribir los símbolos de partículas en redonda, \\mathrm{e}^{-}, lo que además evita la confusión con el número de Euler cuando aparecen exponenciales cerca. Como e^- funciona con un superíndice de un solo elemento, las llaves son opcionales, pero mantienen la coherencia con las cargas de varios caracteres. En notación nuclear un electrón también puede escribirse {}^{\\phantom{-}0}_{-1}e, o \\beta^{-} cuando se emite en una desintegración. El antineutrino de la desintegración beta se escribe \\bar{\\nu}_e junto a él.",
  },
  "aqueous": {
    name: "Estado acuoso",
    meaning: "Símbolo de estado acuoso: la especie está disuelta en agua, como los iones en disolución.",
    usage: "Los símbolos de estado siguen a la fórmula, ya sea en línea, \\text{NaCl(aq)}, o como subíndice, \\text{NaCl}_{\\text{(aq)}}; ambas formas se aceptan, así que elige una. Escribir (aq) en modo matemático sin \\text daría una a y una q en cursiva con espaciado matemático, así que el envoltorio importa. Las ecuaciones iónicas netas se basan en esta etiqueta para mostrar qué especies se disocian. Si escribes muchas ecuaciones, define una macro como \\newcommand{\\aq}{\\text{(aq)}}. \\mathrm{(aq)} es una alternativa que se mantiene en redonda en contextos en cursiva. También marca los protones hidratados, escritos \\text{H}^{+}\\text{(aq)}.",
  },
  "solid": {
    name: "Estado sólido",
    meaning: "Símbolo de estado que indica que una especie es sólida, a menudo un precipitado o un electrodo metálico.",
    usage: "Las reacciones de precipitación terminan con un sólido, como \\text{AgCl(s)}, y la termoquímica depende de ello: la entalpía de formación del carbono se refiere al grafito en estado sólido. Algunos textos antiguos usan una flecha hacia abajo para un precipitado; el símbolo entre paréntesis es la forma preferida por la IUPAC. Escríbelo justo después de la fórmula, sin espacio. Envolverlo en \\text mantiene la s en redonda; en modo matemático una s sin envolver saldría en cursiva y podría confundirse con la unidad segundo o con una variable.",
  },
  "liquid": {
    name: "Estado líquido",
    meaning: "Símbolo de estado para un líquido puro, como el agua o el mercurio, escrito tras la fórmula química.",
    usage: "Las ecuaciones de combustión distinguen \\text{H}_2\\text{O(l)} de \\text{H}_2\\text{O(g)} porque la variación de entalpía difiere en el calor de vaporización. Observa la diferencia entre (l), un líquido puro, y (aq), una disolución en agua. El texto en redonda es especialmente importante aquí: en algunas fuentes una l en cursiva se parece al dígito 1 o a una barra vertical, lo que puede confundir al lector. Usar \\text o \\mathrm garantiza una letra redonda clara. Mantén el símbolo unido directamente a la fórmula, sin espacio adicional.",
  },
  "gas-state-symbol-g": {
    name: "Símbolo de estado gaseoso (g)",
    meaning: "Símbolo de estado para la fase gaseosa, unido a las fórmulas de gases y vapores en las ecuaciones.",
    usage: "Las especies en fase gaseosa importan para las constantes de equilibrio en función de la presión, K_p, y para los cálculos con gases ideales; marcarlas con (g) hace explícitas esas dependencias. Los textos antiguos usan a veces una flecha hacia arriba para indicar que se desprende un gas, pero hoy se prefiere el símbolo de estado. Una buena costumbre es etiquetar todas las especies de una ecuación termoquímica para que los valores de entalpía no sean ambiguos. Si tu documento tiene muchas fórmulas, una macro como \\newcommand{\\gas}{\\text{(g)}} evita erratas. \\mathrm{(g)} da el mismo resultado en redonda dentro de un texto en cursiva.",
  },
};

export default text;
