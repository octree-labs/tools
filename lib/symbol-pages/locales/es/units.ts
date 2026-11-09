import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/units/<slug>. */
const text: SymbolPageTranslations = {
  "angstrom-a": {
    name: "Ángstrom (Å)",
    meaning: "Unidad ángstrom, 10⁻¹⁰ metros (0,1 nm), usada para radios atómicos, longitudes de enlace y longitudes de onda de rayos X.",
    usage: "\\AA es un comando del modo texto, así que en una fórmula debe ir dentro de \\text, como en el ejemplo; usarlo sin más en modo matemático produce una advertencia y un resultado incorrecto. Cristalógrafos y biólogos estructurales siguen indicando distancias como 1.54\\,\\text{\\AA} para la longitud de onda K-alpha del cobre, aunque el SI prefiere nanómetros o picómetros. El parecido \\mathring{A} funciona en modo matemático, pero es una variable con acento, no el símbolo de la unidad. Deja un espacio fino entre el número y la unidad. La minúscula \\aa da la letra escandinava, no la unidad.",
  },
  "degrees-fahrenheit": {
    name: "Grado Fahrenheit",
    meaning: "Unidad de temperatura grado Fahrenheit; a presión normal, el agua se congela a 32 °F y hierve a 212 °F.",
    usage: "La conversión es T_F = \\frac{9}{5} T_C + 32, y una diferencia de temperatura de un grado Fahrenheit equivale a 5/9 de kelvin. La construcción es igual que la del grado Celsius: un \\circ en superíndice seguido de una F recta, con un espacio fino entre el número y el signo de grado. Los datos meteorológicos de EE. UU., la climatización y algunas normas de ingeniería todavía la usan, pero las revistas científicas casi siempre exigen el SI. No escribas el grado con una o minúscula ni con \\degree, salvo que ese comando esté definido en tu configuración.",
  },
  "kelvin": {
    name: "Kelvin",
    meaning: "Kelvin, la unidad básica del SI para la temperatura termodinámica, con el cero en el cero absoluto.",
    usage: "Desde 1967 la unidad se escribe K sin signo de grado: 300 K, no 300 °K. El cero absoluto es 0 K, el punto triple del agua 273.16 K, y T(\\text{K}) = T(^{\\circ}\\text{C}) + 273.15. Los símbolos de unidades deben ir en redonda, lo que proporciona \\text; una K cursiva es una variable, como una constante de equilibrio o una rigidez. Deja un espacio fino entre el número y la unidad, 4.2\\,\\text{K}. En el texto en cursiva de un teorema es más seguro \\mathrm{K}, porque \\text heredaría la fuente cursiva.",
  },
  "meter": {
    name: "Metro",
    meaning: "Metro, la unidad básica de longitud del SI, definida a partir de la velocidad de la luz en el vacío.",
    usage: "Una m recta es la unidad, mientras que una m cursiva suele indicar masa, así que \\text{m} o \\mathrm{m} es imprescindible: compara m = 2\\,\\text{kg} con h = 2\\,\\text{m}. Las normas del SI ponen un espacio entre el valor y la unidad y nunca pluralizan el símbolo. Las unidades derivadas se combinan con potencias, \\text{m}^2 y \\text{m}^3, y los prefijos se unen directamente, \\text{km}, \\text{mm}. La velocidad se escribe \\text{m/s} o \\text{m}\\,\\text{s}^{-1}; cada revista tiene su criterio, así que consulta su guía de estilo. No confundas el símbolo con el prefijo mili, que también se escribe m.",
  },
  "kilogram": {
    name: "Kilogramo",
    meaning: "Kilogramo, la unidad básica de masa del SI, fijada hoy mediante la constante de Planck y no con un prototipo físico.",
    usage: "Es la única unidad básica del SI que lleva un prefijo incorporado, así que los múltiplos y submúltiplos se forman a partir del gramo: escribe \\text{mg}, no \\mu\\text{kg}. Las densidades se dan en \\text{kg}/\\text{m}^3 o \\text{kg}\\,\\text{m}^{-3}; la del agua es de unos 1000\\,\\text{kg}\\,\\text{m}^{-3}. El símbolo va en minúsculas, porque Kg o KG son incorrectos. Las unidades van en redonda, así que envuélvelas en \\text o \\mathrm, y añade \\, entre el número y kg. En unidades derivadas como el newton, kg va primero por convención, \\text{kg}\\,\\text{m}\\,\\text{s}^{-2}. Su símbolo y su nombre siguen en minúscula incluso al comienzo de una oración.",
  },
  "second": {
    name: "Segundo",
    meaning: "Segundo, la unidad básica de tiempo del SI, definida por la frecuencia de la transición hiperfina del cesio 133.",
    usage: "Una s recta es la unidad; una s cursiva suele representar un desplazamiento o una longitud de arco, así que el formato tiene significado en s = 5\\,\\text{m} frente a t = 5\\,\\text{s}. Evita abreviaturas como seg en textos técnicos. Los segundos inversos, \\text{s}^{-1}, miden ritmos y equivalen al hercio cuando describen una frecuencia. Las formas con prefijo incluyen \\text{ms}, \\mu\\text{s} y \\text{ns}; para el prefijo micro, el estilo del SI prefiere una mu recta, que \\mu no ofrece con las fuentes predeterminadas.",
  },
  "ampere": {
    name: "Amperio",
    meaning: "Amperio, la unidad básica del SI para la corriente eléctrica, definida a partir de la carga elemental.",
    usage: "Los circuitos están llenos de A: I = 2\\,\\text{A}, la densidad de corriente en \\text{A}/\\text{m}^2, y la carga, ya que un culombio equivale a un amperio-segundo. Una A cursiva suele indicar un área o un potencial vector, así que la redonda distingue la unidad. Las formas con prefijo como \\text{mA} y \\mu\\text{A} son habituales en electrónica. Escribe el número, un espacio fino y después el símbolo. El nombre de la unidad va en minúscula, amperio, aunque el símbolo sea mayúscula porque honra a André-Marie Ampère. Un miliamperio es una milésima parte, y se escribe 5\\,\\text{mA}.",
  },
  "volt": {
    name: "Voltio",
    meaning: "Voltio, la unidad del SI para la diferencia de potencial eléctrico: un julio de energía por culombio de carga.",
    usage: "La ley de Ohm V = IR usa una V cursiva para la magnitud tensión, mientras que la unidad va en redonda, como en 230\\,\\text{V}; confundirlas es un error tipográfico frecuente. En termodinámica, la V cursiva también indica volumen, otra razón para mantener las unidades en redonda. Las expresiones equivalentes son \\text{J}/\\text{C} y \\text{W}/\\text{A}. La intensidad del campo eléctrico se mide en \\text{V}/\\text{m}. Las versiones con prefijo \\text{mV} y \\text{kV} se escriben juntas sin espacio, mientras que el número y la unidad se separan con \\,. Las pilas, por ejemplo, son de 1.5\\,\\text{V} o 9\\,\\text{V}.",
  },
  "watt": {
    name: "Vatio",
    meaning: "Vatio, la unidad de potencia del SI: un julio transferido por segundo.",
    usage: "La potencia aparece en P = VI y P = I^2 R, y el flujo radiativo en \\text{W}/\\text{m}^2, como en la constante solar de unos 1361\\,\\text{W}\\,\\text{m}^{-2}. La letra W cursiva suele indicar trabajo, así que la unidad en redonda y la magnitud en cursiva pueden convivir: W = 10\\,\\text{J} en 2\\,\\text{s} da 5\\,\\text{W}. Las facturas de electricidad usan kilovatios hora, escritos \\text{kW}\\,\\text{h} o \\text{kWh}. No escribas W/s para la energía; un vatio ya es un ritmo. Las grandes centrales se miden en megavatios, \\text{MW}, y las pérdidas de transmisión se calculan como I^2 R.",
  },
  "joule": {
    name: "Julio",
    meaning: "Julio, la unidad del SI para la energía, el trabajo y el calor, igual a un newton metro o kg·m²/s².",
    usage: "La energía cinética \\frac{1}{2}mv^2 sale en julios cuando se usan unidades del SI, y las magnitudes molares usan \\text{kJ}/\\text{mol}. El momento de una fuerza también es N m dimensionalmente, pero por convención se escribe \\text{N}\\,\\text{m} y no J, para indicar que no es energía. La redonda distingue la unidad de la J cursiva, que puede ser una densidad de corriente, un momento de inercia o un jacobiano. Escribe el producto de unidades con un espacio fino o con \\cdot, como \\text{kg}\\cdot\\text{m}^2\\,\\text{s}^{-2}. La energía de los alimentos en kilocalorías se convierte con 1\\,\\text{kcal} = 4184\\,\\text{J}.",
  },
  "newton": {
    name: "Newton",
    meaning: "Newton, la unidad de fuerza del SI: la fuerza que acelera un kilogramo a un metro por segundo al cuadrado.",
    usage: "Los pesos y las fuerzas se expresan en newtons, así que una masa de 1 kg pesa unos 9.81\\,\\text{N} en la superficie terrestre. La tensión mecánica y la presión dividen por un área, \\text{N}/\\text{m}^2, que es el pascal. Una N recta es la unidad; una N cursiva suele ser una fuerza normal, un recuento o números relacionados con Avogadro, y la \\mathbb{N} de pizarra son los números naturales. Deja un espacio fino entre el número y la unidad. Las constantes elásticas de los muelles se miden en \\text{N}/\\text{m}. La unidad honra a Isaac Newton, por eso el símbolo va en mayúscula pero el nombre de la unidad no.",
  },
  "pascal": {
    name: "Pascal",
    meaning: "Pascal, la unidad del SI para la presión y la tensión mecánica, un newton por metro cuadrado.",
    usage: "Como el pascal es diminuto, los valores prácticos usan prefijos: la presión atmosférica ronda los 101.325\\,\\text{kPa}, los mapas del tiempo usan hectopascales (hPa) y la resistencia de los materiales se da en MPa o GPa. El módulo de Young del acero ronda los 200\\,\\text{GPa}. El símbolo lleva P mayúscula y a minúscula, ambas en redonda; \\text{Pa} lo consigue. La presión en sí es una p o P cursiva. Escribir la unidad como \\text{N}/\\text{m}^2 es equivalente, pero menos habitual en textos modernos. La presión manométrica y la absoluta difieren en aproximadamente una atmósfera, así que indica a cuál te refieres.",
  },
  "hertz": {
    name: "Hercio",
    meaning: "Hercio, la unidad de frecuencia del SI: un ciclo por segundo, dimensionalmente igual a segundos inversos.",
    usage: "El procesamiento de señales y la acústica citan frecuencias como 440\\,\\text{Hz} para el la de concierto y frecuencias de muestreo como 44.1\\,\\text{kHz}; los procesadores funcionan a GHz. La frecuencia angular \\omega = 2\\pi f se da por costumbre en \\text{rad}/\\text{s}, no en hercios, para evitar confusiones con el factor 2\\pi. Mantén la H mayúscula y la z minúscula. Los prefijos se unen directamente, \\text{MHz}, y el número lleva un espacio fino antes de la unidad. Para la actividad radiactiva, la misma dimensión se llama becquerel. El periodo es el recíproco, T = 1/f.",
  },
  "per-slash-in-units": {
    name: "Barra de división en unidades («por»)",
    meaning: "Barra oblicua que significa «por» en unidades compuestas como m/s, y divide una unidad entre otra.",
    usage: "En modo matemático, / es un símbolo ordinario sin espaciado adicional, lo que da el aspecto compacto \\text{m}/\\text{s} que necesitan las unidades. Las reglas del SI solo permiten una barra en cada unidad, así que la aceleración es \\text{m}/\\text{s}^2 y nunca m/s/s; para unidades complicadas son más claros los exponentes negativos, como \\text{J}\\,\\text{kg}^{-1}\\,\\text{K}^{-1}. Usa paréntesis cuando el denominador tenga varios factores: \\text{W}/(\\text{m}^2\\,\\text{K}). Para fracciones generales en ecuaciones destacadas, \\frac suele ser mejor que la barra, pero en línea la barra evita números apilados y apretados.",
  },
  "squared": {
    name: "Cuadrado (segunda potencia)",
    meaning: "Superíndice 2, que eleva una magnitud o una unidad a la segunda potencia, como en x² o en metros cuadrados.",
    usage: "Escribir ^2 coloca como superíndice el siguiente elemento suelto; para exponentes más largos hacen falta llaves, x^{12}, ya que x^12 daría x^1 seguido de un 2. Las unidades al cuadrado, como \\text{m}^2, describen áreas, y \\text{s}^2 aparece en la aceleración. Aplicado a funciones, \\sin^2 x significa (\\sin x)^2, una convención que no se extiende a \\sin^{-1}, que denota la inversa. Los superíndices dobles como x^2^3 producen un error; escribe x^{2^3} o (x^2)^3 según lo que quieras decir. Usa \\text{m}^2 en lugar de m cuad. en textos científicos.",
  },
  "cubed": {
    name: "Cubo (tercera potencia)",
    meaning: "Superíndice 3 para elevar al cubo: terceras potencias de números o variables y unidades cúbicas de volumen.",
    usage: "Los volúmenes se expresan en \\text{m}^3, \\text{cm}^3 o litros (1\\,\\text{L} = 10^{-3}\\,\\text{m}^3), y las densidades usan unidades por volumen cúbico, \\text{kg}/\\text{m}^3. En álgebra, los cubos aparecen en identidades como a^3 - b^3 = (a - b)(a^2 + ab + b^2). El superíndice afecta solo al elemento anterior, de modo que una unidad con prefijo se eleva al cubo entera: \\text{cm}^3 significa (cm) al cubo y no c por m al cubo. Pon llaves a los exponentes de varios elementos: x^{3n}. La raíz cúbica se escribe \\sqrt[3]{x}. Escribe \\text{m}^3, no m cúb., en textos científicos.",
  },
};

export default text;
