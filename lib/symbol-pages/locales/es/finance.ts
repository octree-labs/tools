import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/finance/<slug>. */
const text: SymbolPageTranslations = {
  "dollar-sign": {
    name: "Signo de dólar",
    meaning: "Signo de dólar escapado: imprime un $ literal en lugar de abrir o cerrar el modo matemático.",
    usage:
      "Un $ sin escapar activa o desactiva el modo matemático en LaTeX, así que los precios necesitan \\$, como en \\$19.99. Funciona tanto en modo texto como en modo matemático, lo que hace sencillas fórmulas como \\$100 \\times 1.05 = \\$105. En las herramientas basadas en Markdown y en los renderizadores de KaTeX se aplica el mismo escape. En tablas llenas de importes, el paquete siunitx puede alinear los números en el separador decimal mientras el símbolo va en la cabecera de la columna. Escribir USD evita ambigüedades cuando en un mismo documento aparecen varias monedas llamadas dólar, como el dólar canadiense o el australiano.",
  },
  "euro-sign": {
    name: "Signo del euro",
    meaning: "Signo de la moneda euro introducido como carácter literal dentro de \\text, para precios e importes financieros en euros.",
    usage:
      "Pegar el carácter € dentro de \\text funciona cuando el documento está en UTF-8 y la fuente tiene el glifo, algo que cumplen la mayoría de las configuraciones modernas. Con pdfLaTeX, \\texteuro es la forma en comando, y \\euro da el diseño oficial de geometría fija. La posición del signo varía según el país: en Alemania y Francia se escribe 10 €, mientras que en Irlanda y los Países Bajos suele ir delante. En las tablas, conviene poner el signo en la cabecera de la columna en lugar de repetirlo en cada celda. En XeLaTeX y LuaLaTeX, el carácter se toma directamente de la fuente elegida.",
  },
  "pound-sterling-sign": {
    name: "Signo de la libra esterlina",
    meaning: "Signo de la libra esterlina como carácter literal dentro de \\text, usado para importes en libras británicas.",
    usage:
      "Escribir el carácter £ directamente dentro de \\text funciona en documentos UTF-8. LaTeX también tiene un comando integrado \\pounds que funciona en texto y en matemáticas, pero con las fuentes Computer Modern por defecto se toma de la fuente cursiva y sale inclinado, lo que sorprende a muchos usuarios; cambiar la codificación de fuente da un glifo recto. Según la convención británica, el signo precede al importe sin espacio, como en £1,500. El mismo glifo sirve para otras monedas llamadas libra. En las tablas financieras, alinea por el separador decimal y deja el signo en la cabecera para reducir el ruido visual.",
  },
  "yen-sign": {
    name: "Signo del yen",
    meaning: "Signo del yen o del yuan introducido como carácter literal dentro de \\text, para importes en yenes japoneses y yuanes chinos.",
    usage:
      "El mismo glifo sirve para el yen japonés y para el yuan renminbi chino, por eso los artículos suelen añadir JPY o CNY para eliminar la ambigüedad. Escribir ¥ dentro de \\text funciona en documentos UTF-8 con una fuente que lo contenga; \\textyen es la alternativa en forma de comando con pdfLaTeX. Los importes en yenes rara vez llevan decimales, ya que la moneda no tiene subunidad de uso cotidiano, así que lo habitual es \\text{¥}1{,}200. Algunas fuentes lo dibujan con un solo travesaño y otras con dos; ambas formas se aceptan, pero mantén la misma fuente en todo el documento.",
  },
  "indian-rupee-sign": {
    name: "Signo de la rupia india",
    meaning: "Signo de la rupia india como carácter literal dentro de \\text, usado para importes en rupias indias.",
    usage:
      "India adoptó el signo de la rupia en 2010, así que muchas fuentes antiguas no lo incluyen, entre ellas la Computer Modern por defecto; con pdfLaTeX a menudo no imprime nada. La vía más fiable es compilar con XeLaTeX o LuaLaTeX y una fuente como Noto Sans o una fuente reciente del sistema que incluya el glifo. Si el glifo no está disponible, Rs. o INR son alternativas textuales aceptadas. La numeración india agrupa las cifras en lakhs y crores, p. ej. 1,00,000; usa {,} en modo matemático para que la coma no añada un espacio no deseado detrás.",
  },
  "bitcoin-sign": {
    name: "Signo de bitcoin",
    meaning: "Signo de bitcoin introducido como carácter literal dentro de \\text, para importes expresados en bitcoin.",
    usage:
      "El glifo de bitcoin es más reciente que la mayoría de las fuentes, así que pdfLaTeX con las fuentes estándar normalmente no puede imprimirlo; la vía práctica es XeLaTeX o LuaLaTeX con una fuente que lo incluya, o una fuente de iconos. Muchos artículos de finanzas y economía escriben simplemente BTC, que nunca da problemas de fuente, y usan sat para la unidad más pequeña, donde 1 BTC equivale a 100,000,000 satoshis. Los importes en bitcoin suelen llevar hasta ocho decimales, así que la alineación decimal en las tablas importa más de lo habitual. Revisa el PDF con atención, porque un glifo ausente a menudo falla en silencio, con solo un aviso en el log.",
  },
  "percent-sign": {
    name: "Signo de porcentaje",
    meaning: "Signo de porcentaje escapado: imprime % en lugar de iniciar un comentario de LaTeX.",
    usage:
      "En LaTeX, un % sin escapar convierte en comentario el resto de la línea, una causa clásica de texto que desaparece, así que todo porcentaje necesita \\%. Funciona en modo texto y en modo matemático, como en un tipo de interés del 5\\% o r = 3.5\\%. El espaciado varía según el estilo: en inglés se escribe 5% sin espacio, mientras que algunas convenciones europeas y del SI insertan un espacio fino, 5\\,\\%. siunitx lo resuelve de forma coherente si compones muchas magnitudes. Al hablar de puntos porcentuales, escribe p. p. o puntos porcentuales para distinguir una subida del 4% al 5% de una variación relativa del 1%.",
  },
  "per-mille-sign": {
    name: "Signo de por mil",
    meaning: "Signo de por mil, que indica partes por mil, introducido como carácter literal dentro de \\text.",
    usage:
      "El por mil expresa tasas en partes por mil, de modo que 5‰ equivale a 0,5%. Aparece en tablas de seguros y de mortalidad, en la salinidad y en razones isotópicas como \\delta^{13}C en geoquímica, y en los límites de alcoholemia de varios países. La forma en comando con pdfLaTeX es \\textperthousand; dentro de las matemáticas, envuélvelo en \\text como aquí. No lo confundas con el punto básico, que equivale a partes por diez mil y tiene su propio glifo, poco soportado. Si la fuente del lector puede no tenerlo, escribir «por mil» o «partes por mil» es una alternativa sin ambigüedad.",
  },
  "basis-point": {
    name: "Punto básico",
    meaning: "Abreviatura de punto básico: una centésima de punto porcentual, usada para tipos de interés y diferenciales.",
    usage:
      "Un punto básico es 0,01%, así que un tipo que sube del 4,25% al 4,50% se ha movido 25 bp. Los diferenciales de los bonos, las decisiones de los bancos centrales y las comisiones de los fondos se expresan así porque las variaciones porcentuales de un tipo son ambiguas. Envolver bp en \\text lo mantiene recto e impide que TeX lea b y p como dos variables en cursiva multiplicadas. Separa el número de la unidad con un espacio fino o \\, como en 25\\,\\text{bp}. Algunos autores usan bps o bips. Curiosamente, bp también es la unidad propia de TeX para el punto grande de PostScript, 1/72 de pulgada, aunque el contexto basta para distinguirlas.",
  },
  "npv": {
    name: "VAN (valor actual neto)",
    meaning: "Valor actual neto: la suma de los flujos de caja futuros descontados menos la inversión inicial.",
    usage:
      "El VAN se calcula como \\text{NPV} = \\sum_{t=0}^{n} \\frac{C_t}{(1+r)^t}, donde C_0 suele ser el desembolso inicial negativo y r la tasa de descuento. Un proyecto se acepta cuando el VAN es mayor que 0. Envolver la sigla en \\text la mantiene recta e impide que TeX la trate como N por P por V con espaciado de cursiva. \\mathrm{NPV} da el mismo aspecto pero ignora el estilo del texto que la rodea, lo que es más seguro dentro de teoremas. Si la usas como función, como \\text{NPV}(r), \\operatorname{NPV} añade el espaciado adecuado antes del paréntesis. En textos en español puedes escribir igualmente \\text{VAN}.",
  },
  "irr": {
    name: "TIR (tasa interna de retorno)",
    meaning: "Tasa interna de retorno: la tasa de descuento a la que el valor actual neto de un proyecto es igual a cero.",
    usage:
      "La TIR se define implícitamente mediante 0 = \\sum_{t=0}^{n} C_t / (1 + \\text{IRR})^t, así que en general no tiene forma cerrada y se resuelve numéricamente. Un proyecto resulta atractivo cuando su TIR supera el coste de capital. Los flujos de caja que cambian de signo más de una vez pueden producir varias TIR, una debilidad conocida frente al VAN. Usa \\text o \\mathrm para que la sigla quede recta; escribir IRR tal cual en modo matemático da tres variables en cursiva con espaciado de producto. Cuando aparece en un denominador, usa \\left( \\right) para que los paréntesis se ajusten limpiamente a la fracción.",
  },
  "roi": {
    name: "ROI (retorno de la inversión)",
    meaning: "Retorno de la inversión: la ganancia de una inversión en relación con su coste, normalmente expresada como porcentaje.",
    usage:
      "El ROI se calcula como \\text{ROI} = (\\text{ganancia} - \\text{coste}) / \\text{coste}, a menudo multiplicado por 100\\% para presentarlo. A diferencia de la TIR, ignora el momento en que se producen los flujos de caja, así que para comparaciones de varios años se usan variantes anualizadas. Componerlo con \\text mantiene las letras rectas y espaciadas como una palabra; escritas tal cual en matemáticas, R, O e I se convierten en variables en cursiva, y la O puede confundirse con un cero. En fracciones, usa \\frac con piezas de \\text en el numerador y el denominador, o \\dfrac dentro de un párrafo para que se lea bien.",
    example: "\\text{ROI} = \\frac{\\text{ganancia} - \\text{coste}}{\\text{coste}} \\times 100\\%",
  },
  "summation": {
    name: "Sumatorio",
    meaning: "Sumatorio sobre los periodos t de 1 a n, la forma estándar de agregar flujos de caja a lo largo de varios periodos.",
    usage:
      "Las fórmulas financieras suman sobre periodos: el valor actual de una renta, \\sum_{t=1}^{n} \\frac{C}{(1+r)^t}, el precio de un bono con cupones más el valor nominal, y el VAN, que empieza en t = 0 para incluir el desembolso inicial. En las fórmulas destacadas los límites van encima y debajo de la sigma; en línea, se desplazan a la derecha en un tamaño menor. Usa \\sum\\limits para forzar los límites apilados dentro de un párrafo. Elige el índice inicial con cuidado, ya que empezar en 0 o en 1 cambia el resultado. En tiempo continuo, el análogo es una integral con descuento e^{-rt}.",
  },
  "present-value": {
    name: "Valor actual",
    meaning: "Valor actual de un único flujo de caja C recibido en el instante t, descontado a una tasa r por periodo.",
    usage:
      "Descontar consiste en dividir un importe futuro entre el factor de crecimiento (1+r)^t, así que 1000 recibidos dentro de 3 años al 5 % valen hoy unos 863,84. Sumar este término sobre los periodos da el VAN y el precio de los bonos. En las fórmulas destacadas, \\frac dibuja una fracción a tamaño completo; en el texto en línea se reduce, así que \\tfrac o la forma con barra C/(1+r)^t pueden leerse mejor. Si el denominador se complica, por ejemplo con un tipo variable (1 + r_t), usa \\prod o mantén el exponente entre llaves: ^{t} es necesario cuando t tiene más de un carácter, como ^{t-1}.",
  },
  "compound-interest": {
    name: "Interés compuesto",
    meaning: "Fórmula del interés compuesto: el importe A al cabo de t años cuando el capital P rinde un tipo r capitalizado n veces al año.",
    usage:
      "Aquí P es el capital, r el tipo nominal anual, n el número de periodos de capitalización por año y t el número de años; la capitalización mensual usa n = 12. A medida que n crece, el importe se aproxima a la fórmula de capitalización continua Pe^{rt}. El exponente debe ir entre llaves, ^{nt}, ya que si no solo se eleva la n. La barra en línea r/n mantiene la fórmula compacta; en las ecuaciones destacadas es más habitual \\left(1 + \\frac{r}{n}\\right)^{nt}, donde el par \\left( \\right) agranda los paréntesis para ajustarlos a la fracción. No escribas \\frac dentro de paréntesis sin escalar, que quedan visiblemente demasiado cortos.",
  },
  "continuous-compounding": {
    name: "Capitalización continua",
    meaning: "Fórmula de capitalización continua: el capital P crece hasta Pe^{rt} al cabo de un tiempo t con un tipo r capitalizado de forma continua.",
    usage:
      "Es el límite del interés compuesto cuando la capitalización se vuelve infinitamente frecuente, ya que (1 + r/n)^{nt} \\to e^{rt}. Se usa en toda la valoración de derivados, como en el factor de descuento e^{-rT} de la fórmula de Black-Scholes. Pon el exponente entre llaves, e^{rt}, para que ambas letras queden elevadas. Algunos estilos escriben el número de Euler en redonda, \\mathrm{e}^{rt}, para distinguirlo de una variable llamada e; ambas opciones se aceptan si se usan de forma coherente. Con exponentes largos, \\exp(rt) se lee mejor que un superíndice diminuto, sobre todo si el exponente contiene fracciones.",
  },
};

export default text;
