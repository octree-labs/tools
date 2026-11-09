import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/latin/<slug>. */
const text: SymbolPageTranslations = {
  "o-with-umlaut-diaeresis": {
    name: "O con diéresis",
    meaning: "Pone dos puntos sobre la o y da ö como acento matemático; en el texto corrido la misma letra se escribe \\\"o.",
    usage:
      "\\ddot es un acento de modo matemático, así que \\ddot{o} produce una o cursiva con dos puntos, adecuada dentro de fórmulas pero no para palabras. Para palabras en alemán, sueco, finés, turco o húngaro como Köln o Gödel, usa el acento de texto \\\"{o} o escribe ö directamente en un archivo fuente UTF-8. En matemáticas y física, \\ddot{x} es la notación de Newton para la segunda derivada respecto al tiempo, y \\dddot{x} da la tercera. La versión de un solo punto, \\dot{x}, indica la primera derivada. Escribir \\ddot en el texto corrido provoca un error de dólar ausente, un fallo típico de principiante al copiar nombres con acentos.",
  },
  "o-with-grave-accent": {
    name: "O con acento grave",
    meaning: "Coloca un acento grave sobre la o y produce ò como acento matemático; para palabras se usa el comando de texto \\`o.",
    usage:
      "El acento grave marca el acento tónico o la cualidad de la vocal en italiano (però, città), catalán y vietnamita, y aparece en palabras francesas como où. En un documento, escribe esas palabras con \\`{o} o tecleando la letra acentuada, porque \\grave solo funciona en modo matemático y compone la letra en cursiva matemática. El uso matemático de \\grave es raro; de vez en cuando un autor lo usa para decorar una variable cuando \\hat, \\tilde y \\bar ya están ocupados. No confundas el acento grave con el agudo \\acute, que se inclina en sentido contrario.",
    example: "\\grave{o} \\quad \\text{frente al acento de texto en } \\text{per\\`{o}}",
  },
  "o-with-acute-accent": {
    name: "O con acento agudo",
    meaning: "Coloca un acento agudo sobre la o y da ó como acento matemático; en palabras se usa la forma de texto \\'o.",
    usage:
      "El acento agudo aparece en español (canción, José), portugués, polaco (ó en Kraków), islandés y húngaro. Para cualquiera de esas palabras escribe \\'{o} o teclea ó directamente, ya que \\acute{o} solo funciona en modo matemático y produce una letra cursiva. En matemáticas, \\acute es una decoración poco usada, a veces empleada para distinguir una variable transformada. Ten presente que una prima x' es distinta de un acento agudo. La ő larga del húngaro usa el doble acento agudo \\H{o}, no dos acentos agudos.",
    example: "\\acute{o} \\quad \\text{frente a } \\text{Krak\\'{o}w}",
  },
  "o-with-circumflex": {
    name: "O con circunflejo",
    meaning: "Coloca un circunflejo sobre la o y da ô; en matemáticas, el mismo comando \\hat marca estimadores y vectores unitarios.",
    usage:
      "Para palabras en francés, portugués o vietnamita como hôtel o côte, usa el acento de texto \\^{o} o escribe ô directamente; \\hat solo funciona en modo matemático. En matemáticas, \\hat está en todas partes: \\hat{\\theta} para un estimador, \\hat{y} para una predicción, \\hat{\\mathbf{x}} para un vector unitario, \\hat{H} para un operador cuántico y \\hat{f} para una transformada de Fourier. Para acentos sobre varios caracteres usa \\widehat{AB}, que se estira. Al poner un circunflejo sobre la i o la j, usa \\hat{\\imath} para que desaparezca el punto.",
  },
  "o-with-tilde": {
    name: "O con tilde",
    meaning: "Pone una tilde sobre la o y da õ; como acento matemático, \\tilde también decora variables como \\tilde{x}.",
    usage:
      "En portugués (põe, Camões) y en estonio (donde õ es una letra propia), el comando de texto \\~{o} o una õ tecleada es la opción correcta en la prosa. En modo matemático, \\tilde marca una cantidad transformada, aproximada o alternativa, como una variable normalizada \\tilde{x} o la notación O suave \\tilde{O}(n). Para argumentos anchos, \\widetilde{AB} se estira sobre toda la expresión. No confundas el acento con \\sim, la tilde independiente que funciona como relación y significa «se distribuye como» o «es asintótico a». Las tildes sobre mayúsculas pueden quedar altas, así que revisa el interlineado.",
  },
  "o-with-macron": {
    name: "O con macrón",
    meaning: "Pone una barra de macrón sobre la o y da ō; el mismo acento \\bar denota medias y conjugados complejos en matemáticas.",
    usage:
      "El macrón marca las vocales largas en los diccionarios de latín, en la romanización del japonés (Tōkyō, Ōsaka), en maorí y en hawaiano; en el texto usa \\={o} o escribe ō. En matemáticas, \\bar{x} es una media muestral, \\bar{z} un conjugado complejo y \\bar{A} a veces una clausura o un complemento. La barra de \\bar tiene una anchura corta fija, así que para expresiones más largas usa \\overline{A \\cup B}, que abarca todo el argumento. Algunos autores prefieren \\overline incluso para letras sueltas, para que conjugados y clausuras tengan un aspecto uniforme.",
  },
  "o-with-dot-above": {
    name: "O con punto superior",
    meaning: "Coloca un solo punto sobre la o y da ȯ; en matemáticas, el acento \\dot es la notación de Newton para la derivada respecto al tiempo.",
    usage:
      "Como letra, ȯ es poco común; aparece en algunas transliteraciones y en livonio. Para el texto usa el acento \\.{o} o un carácter tecleado, ya que \\dot solo funciona en modo matemático. En física e ingeniería, \\dot{x} denota dx/dt, de modo que la velocidad es \\dot{\\mathbf{r}} y un modelo en espacio de estados se escribe \\dot{\\mathbf{x}} = A\\mathbf{x} + B\\mathbf{u}. Dos puntos, \\ddot{x}, dan la segunda derivada. No confundas el acento con \\cdot, un punto de multiplicación centrado en el eje matemático, no situado sobre una letra.",
  },
  "o-with-breve": {
    name: "O con breve",
    meaning: "Coloca un breve, una pequeña copa, sobre la o y da ŏ; para palabras se usa en su lugar el acento de texto \\u{o}.",
    usage:
      "El breve marca las vocales breves en la prosodia latina y aparece en la romanización McCune-Reischauer del coreano, como en Chŏng. La ă rumana y la ğ turca usan la misma marca sobre otras letras. En la prosa escribe \\u{o} o teclea ŏ; \\breve solo funciona en modo matemático y compone la letra en cursiva. Su uso matemático es raro, normalmente como una decoración más para una variable modificada después de circunflejos y tildes. No confundas el breve con el carón \\check, que es puntiagudo en lugar de redondeado.",
    example: "\\breve{o} \\quad \\text{frente a } \\text{Ch\\u{o}ng}",
  },
  "o-with-caron-hacek": {
    name: "O con carón (háček)",
    meaning: "Coloca un carón o háček sobre la o y da ǒ; en la prosa la misma marca se escribe con \\v{o}.",
    usage:
      "En el pinyin hanyu, ǒ marca el tercer tono, como en wǒ, y el háček es fundamental en la ortografía checa, eslovaca y de otras lenguas eslavas, sobre letras como č y š. Usa \\v{o} o una ǒ tecleada en el texto; \\check es el acento de modo matemático. Los matemáticos usan \\check para la cohomología de Čech \\check{H}, las transformadas de Fourier inversas \\check{f} y los objetos duales. Es puntiagudo, a diferencia del breve redondeado \\breve, y apunta hacia abajo, a diferencia del circunflejo \\hat. Para argumentos anchos, \\widecheck no es estándar, así que limita \\check a letras sueltas.",
  },
  "o-with-double-acute": {
    name: "O con doble acento agudo",
    meaning: "Escribe la ő larga del húngaro con doble acento agudo, un comando de modo texto para nombres como Erdős.",
    usage:
      "\\H es un acento de texto, no un acento matemático, así que úsalo en la prosa o dentro de \\text{...}; en modo matemático puro produce un error. El húngaro distingue ö de ő y ü de ű, de modo que el nombre del matemático es Erdős, no Erdös, y escribirlo bien en una bibliografía es una cortesía que merece el comando extra. En BibTeX, envuelve el acento entre llaves, {\\H{o}}, para que la ordenación y los cambios de mayúsculas no lo estropeen. No intentes imitarlo con dos acentos agudos.",
  },
  "o-with-cedilla": {
    name: "O con cedilla",
    meaning: "Escribe una o con el gancho de la cedilla debajo, una letra poco común que LaTeX produce normalmente con el acento de texto \\c{o}.",
    usage:
      "La cedilla es conocida por la ç del francés y del portugués, pero sobre la o es inusual; aparece en la ortografía del marshalés y en algunos sistemas de transcripción. Teclear el carácter precompuesto dentro de \\text funciona en muchos renderizadores web, pero una compilación clásica de LaTeX puede no reconocer la cedilla combinable, así que \\c{o} en el texto es la forma fiable en el código fuente. No confundas la cedilla con el ogonek, el gancho de las polacas ą y ę, que se curva en sentido contrario y se escribe \\k. Ninguno de los dos funciona en modo matemático sin \\text.",
  },
  "o-with-dot-below": {
    name: "O con punto inferior",
    meaning: "Escribe una o con un punto debajo, ọ, usada en yoruba y vietnamita, que en el texto de LaTeX se escribe \\d{o}.",
    usage:
      "El yoruba usa ọ como vocal independiente (como en palabras yorùbá del tipo ọjọ́), y el vietnamita usa el punto inferior como marca del tono grave entrecortado. En un archivo fuente de LaTeX, el acento de texto \\d{o} produce esta letra, y teclear ọ directamente también funciona con una fuente que tenga el glifo. Como los demás acentos de texto, \\d no es válido en modo matemático puro; envuelve las palabras en \\text. No uses \\dot, que pone el punto encima y es un acento matemático para derivadas. Combinar tonos con un punto inferior puede requerir una fuente con glifos precompuestos.",
  },
  "o-with-underline": {
    name: "O subrayada",
    meaning: "Subraya la o; en matemáticas, \\underline marca vectores, cotas inferiores o símbolos destacados.",
    usage:
      "\\underline funciona tanto en modo texto como en modo matemático y traza una raya bajo todo su argumento, así que \\underline{o} da una o subrayada. Algunos textos de ingeniería y mecánica usan \\underline{u} para los vectores en lugar de la negrita, y los artículos de optimización escriben \\underline{x} para una cota inferior emparejada con \\overline{x} para una cota superior. En las transliteraciones, el macrón inferior es otro acento de texto, \\b{o}, más corto y centrado bajo la letra. Para dar énfasis en la prosa, prefiere \\emph al subrayado, porque los subrayados no se parten entre líneas.",
  },
  "linked-o-o-two-o-s-joined-by-a-dash": {
    name: "O-o enlazadas (dos oes unidas por un guion)",
    meaning: "Une dos oes con un signo menos apretado mediante espacios negativos, imitando un glifo o-o enlazado.",
    usage:
      "Esta construcción no es un comando estándar: cada \\! inserta un espacio fino negativo, así que o\\!\\!-\\!\\!o arrastra un signo menos matemático contra ambas letras y el resultado parece dos anillos enlazados. Como se construye en modo matemático, las oes son cursivas y el espaciado depende de la fuente. Si necesitas la ligadura medieval oo o una letra histórica similar, una fuente que incluya ese carácter es más limpia que este apaño. Para dibujar un enlace en forma de mancuerna o una conexión, una herramienta de diagramas adecuada da mejor control. Úsala solo para un efecto visual rápido.",
  },
  "oe-ligature-lowercase": {
    name: "Ligadura oe (minúscula)",
    meaning: "Escribe la ligadura œ minúscula, usada en palabras francesas como cœur y œuvre; en LaTeX es \\oe.",
    usage:
      "La ortografía francesa exige la ligadura en palabras como sœur, cœur y œil, así que escribir oe es una falta de ortografía, no solo una elección tipográfica. En el código fuente de LaTeX usa \\oe o escribe œ directamente; \\oe es un comando de texto, así que usa \\text dentro de las fórmulas. El inglés la usa en grafías antiguas o británicas como fœtus. A diferencia de las ligaduras ff o fi, que TeX forma automáticamente, œ es una letra aparte y nunca se crea al teclear oe. Recuerda dejar un espacio después de \\oe, como en c\\oe ur, o usar llaves, como en c{\\oe}ur.",
  },
  "oe-ligature-uppercase": {
    name: "Ligadura OE (mayúscula)",
    meaning: "Escribe la ligadura Œ mayúscula usada en francés, como en Œuvres complètes; en LaTeX es \\OE.",
    usage:
      "La Œ mayúscula aparece al comienzo de palabras francesas y en títulos en mayúsculas, así que se escribe ŒUVRES y no OEUVRES. Teclea el carácter directamente o usa \\OE en modo texto; dentro de una fórmula debe ir en \\text. En versalitas o en encabezados en mayúsculas, comprueba que \\MakeUppercase convierte \\oe en \\OE, cosa que LaTeX hace correctamente. No la confundas con Æ, el ash, que lleva una a en lugar de una o. Grafías inglesas antiguas como Œdipus también la usan.",
  },
  "ae-ligature-lowercase-ash": {
    name: "Ligadura ae (minúscula, ash)",
    meaning: "Escribe la æ minúscula, llamada ash, una letra del danés, el noruego, el islandés y el inglés antiguo; en LaTeX es \\ae.",
    usage:
      "En danés y noruego, æ es una letra de pleno derecho del alfabeto que se ordena después de la z, así que nunca debe sustituirse por ae en los nombres. El inglés la usa en grafías estilizadas como encyclopædia y Cæsar, y el símbolo æ del AFI representa la vocal de cat. En LaTeX usa \\ae o escribe æ directamente; es un comando de texto, así que envuélvelo en \\text dentro de las fórmulas. Separa la letra siguiente con llaves o un espacio, como en \\ae{}ble. Es distinta de œ, que une o y e.",
  },
  "ae-ligature-uppercase": {
    name: "Ligadura AE (mayúscula)",
    meaning: "Escribe la Æ mayúscula, el ash en mayúscula usado en danés, noruego, islandés e inglés antiguo.",
    usage:
      "La Æ mayúscula inicia palabras danesas y noruegas y aparece en nombres del inglés antiguo como Ælfred. LaTeX ofrece \\AE en modo texto, o puedes teclear Æ directamente. En los encabezados en mayúsculas, la conversión a mayúsculas de LaTeX transforma \\ae en \\AE automáticamente. Las bibliografías con nombres escandinavos deben conservar la letra tal cual, porque las reglas de ordenación la sitúan cerca del final del alfabeto. No la confundas con Œ, que une O y E y pertenece a la ortografía francesa. Teclearla directamente en un archivo UTF-8 es hoy la opción más sencilla.",
  },
  "a-with-ring-above": {
    name: "A con anillo",
    meaning: "Escribe å, la a con anillo, una letra del sueco, el danés, el noruego y el finés; en el texto de LaTeX es \\aa.",
    usage:
      "En las lenguas escandinavas, å es una vocal independiente que se ordena al final del alfabeto, como en på o Århus. LaTeX la escribe con \\aa o con el acento general de anillo \\r{a}, o puedes teclear å directamente. Son comandos de texto, así que envuélvelos en \\text dentro de las fórmulas. No uses el acento matemático \\mathring{a}, que coloca un anillo sobre una letra matemática cursiva y está pensado para cosas como el interior de un conjunto. El software de bibliografía debe tratar {\\aa} como una sola letra al ordenar.",
  },
  "a-with-ring-above-angstrom": {
    name: "A mayúscula con anillo (ångström)",
    meaning: "Escribe la Å mayúscula, usada en palabras escandinavas y como símbolo de la unidad ångström (10^{-10} m).",
    usage:
      "Los físicos y los químicos expresan longitudes de enlace y longitudes de onda en ångströms, como en 1.54 Å, y el comando \\AA de LaTeX da el glifo correcto en modo texto. En una fórmula, escribe \\text{\\AA} o una macro de unidades específica, ya que \\AA por sí solo es un comando de texto. Como letra, inicia topónimos suecos y daneses como Åland. El signo de ångström independiente de Unicode se normaliza a esta misma letra, así que usar Å es correcto. Deja un espacio fino entre el número y la unidad, como en 1.54\\,\\text{Å}.",
  },
  "o-with-stroke-lowercase": {
    name: "O barrada (minúscula)",
    meaning: "Escribe ø, la o barrada del danés, el noruego y el feroés; en LaTeX es el comando de texto \\o.",
    usage:
      "ø es una vocal de pleno derecho en danés y noruego, como en København o Søren Kierkegaard, y no debe sustituirse por o ni por oe en los nombres. Usa \\o o escribe ø directamente; es un comando de texto, así que usa \\text en las fórmulas. Se parece a los símbolos de conjunto vacío \\emptyset y \\varnothing, y al signo de diámetro, pero son caracteres distintos con significados distintos, así que no tomes prestada ø para el conjunto vacío. La transcripción fonética también usa ø para una vocal anterior redondeada.",
  },
  "o-with-stroke-uppercase": {
    name: "O barrada (mayúscula)",
    meaning: "Escribe la Ø mayúscula, como en Øresund, la O barrada mayúscula que en el texto de LaTeX se escribe \\O.",
    usage:
      "La Ø mayúscula inicia palabras danesas y noruegas como Øresund y Østergaard. En LaTeX, usa \\O en modo texto o escribe Ø directamente; \\O no está definido en modo matemático sin \\text. Como se parece al conjunto vacío \\emptyset y al símbolo de diámetro, es tentador reutilizarla, pero son caracteres distintos y los lectores de pantalla y los buscadores los tratan de forma diferente. En los alfabetos noruego y danés, Ø se ordena después de Æ y antes de Å.",
  },
  "l-with-stroke-lowercase": {
    name: "L barrada (minúscula)",
    meaning: "Escribe ł, la l barrada del polaco, que se pronuncia como la w inglesa; en el texto de LaTeX es \\l.",
    usage:
      "El polaco usa ł en muchas palabras y nombres comunes, como złoty, Wrocław y Łukasiewicz, el lógico que creó la notación polaca. En un archivo fuente de LaTeX escribe \\l o teclea ł directamente; es un comando de texto, así que usa \\text en las fórmulas. Cuando le sigue directamente otra letra, sepárala con llaves, como en z\\l{}oty. Algunas fuentes no tienen ł, lo que puede producir un glifo ausente en lugar de una advertencia, así que revisa el PDF. Es distinta de la lambda minúscula tachada ƛ.",
  },
  "l-with-stroke-uppercase": {
    name: "L barrada (mayúscula)",
    meaning: "Escribe la Ł mayúscula, como en Łódź, la L barrada mayúscula del polaco que en LaTeX se escribe \\L.",
    usage:
      "La Ł mayúscula inicia nombres como Łódź y Łukasiewicz, así que las bibliografías que citan a autores polacos la necesitan para escribir bien los nombres. Usa \\L en modo texto o teclea Ł directamente; envuélvela en \\text dentro de las fórmulas. En BibTeX mantenla entre llaves, {\\L}ukasiewicz, para que los cambios de mayúsculas y la ordenación funcionen. No confundas \\L con \\pounds, el signo de la libra esterlina, que es un símbolo distinto aunque ambos tengan una barra cruzada sobre una forma parecida a una L. Teclear Ł directamente en un archivo UTF-8 es la opción más sencilla en las instalaciones modernas.",
  },
  "dotless-i-math": {
    name: "I sin punto (matemática)",
    meaning: "Da una i cursiva matemática sin punto, para que acentos como \\hat o \\vec se apoyen en ella sin chocar con un punto.",
    usage:
      "La razón principal para usar \\imath es la colocación de los acentos: \\hat{\\imath} da el vector unitario i con circunflejo de la física sin un punto bajo el acento, mientras que \\hat{i} conserva el punto. También aparece como \\vec{\\imath} en cálculo vectorial y a veces como unidad imaginaria compuesta. En el texto, la i sin punto es \\i, que se usaría para palabras turcas como ılık o para la i acentuada en codificaciones antiguas. No confundas \\imath con \\iota, que es la letra griega y tiene otra forma.",
  },
  "dotless-j-math": {
    name: "J sin punto (matemática)",
    meaning: "Da una j cursiva matemática sin punto, usada bajo acentos como en el vector unitario j con circunflejo.",
    usage:
      "La física y la ingeniería escriben los vectores unitarios cartesianos como \\hat{\\imath}, \\hat{\\jmath}, \\hat{k}, y \\jmath elimina el punto para que el circunflejo quede limpio. Los ingenieros eléctricos que usan j para la unidad imaginaria a veces también le ponen acentos. En modo texto, el comando correspondiente es \\j. No hay una razón estándar para usar \\jmath sin acento, así que resérvalo para las formas acentuadas. Ten en cuenta que \\vec{\\jmath} y \\hat{\\jmath} colocan el acento de forma ligeramente distinta, así que revisa el espaciado.",
  },
  "inverted-question-mark": {
    name: "Signo de interrogación de apertura",
    meaning: "Escribe ¿, el signo de interrogación invertido que abre una pregunta en español; LaTeX también acepta ?` para él.",
    usage:
      "El español coloca ¿ al principio de una pregunta y ? al final, como en ¿Dónde está? En LaTeX, la ligadura ?` (un signo de interrogación seguido de una comilla invertida) produce el signo invertido en las fuentes estándar, y \\textquestiondown es el comando con nombre. Teclear ¿ directamente también funciona con entrada UTF-8. Es un carácter de texto, así que ponlo dentro de \\text en las fórmulas. El gallego y el asturiano también lo usan, mientras que el catalán por lo general no. Como ?` es una ligadura, una comilla invertida suelta tras un signo de interrogación puede crear sin querer el glifo invertido, así que revisa las frases que terminan en una pregunta seguida de una comilla.",
  },
  "inverted-exclamation-mark": {
    name: "Signo de exclamación de apertura",
    meaning: "Escribe ¡, el signo de exclamación invertido que abre una exclamación en español; LaTeX también acepta !` para él.",
    usage:
      "El español encierra las exclamaciones entre ¡ y !, como en ¡Hola!, y el mismo emparejamiento se aplica incluso en mitad de una oración. LaTeX lo produce con la ligadura !` (un signo de exclamación seguido de una comilla invertida) o con el comando con nombre \\textexclamdown, y teclear ¡ en un archivo UTF-8 también funciona. En una fórmula debe ir dentro de \\text. No lo confundas con la i minúscula ni con la barra vertical |, que pueden parecerse en algunas fuentes sin serifa. Como con la ligadura del signo de interrogación, una secuencia literal !` en el código fuente se convertirá en ¡, lo que a veces sorprende a quienes citan código.",
  },
};

export default text;
