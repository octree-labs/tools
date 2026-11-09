import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/order/<slug>. */
const text: SymbolPageTranslations = {
  "curly-precedes": {
    name: "Precedencia curva",
    meaning: "Relación curva «precede o es igual», usada para órdenes no estrictos y relaciones de preferencia distintas del ≤ numérico habitual.",
    usage: "Los especialistas en teoría del orden y los economistas recurren a \\preccurlyeq cuando un preorden abstracto necesita un símbolo visiblemente distinto de \\leq, por ejemplo la preferencia débil de un consumidor x \\preccurlyeq y o el orden de dominancia entre particiones. Su pareja estricta es \\prec, y su reflejo es \\succcurlyeq. No lo confundas con \\preceq, que tiene debajo una barra recta en lugar de la curva; algunos autores usan ambos en un mismo artículo para marcar dos órdenes distintos. Como es una relación, TeX lo rodea automáticamente de espacios gruesos, así que nunca lo rellenes a mano con \\, o \;.",
    example: "x \\preccurlyeq y \\text{ y } y \\preccurlyeq z \\implies x \\preccurlyeq z",
  },
  "curly-succeeds": {
    name: "Sucesión curva",
    meaning: "Relación curva «sucede o es igual», la inversa de \\preccurlyeq para órdenes débiles, preferencias y mayorización.",
    usage: "En microeconomía x \\succcurlyeq y se lee «x se prefiere débilmente a y», y en álgebra lineal a veces indica mayorización o una desigualdad generalizada. El \\succeq de barra recta se parece y es la opción más común para matrices semidefinidas positivas (A \\succeq 0), así que elige una convención y mantenla en todo el artículo. La versión estricta es \\succ. Como negar un símbolo de relación con \\not puede quedar torpe, revisa el resultado: existen negaciones específicas como \\nsucceq para la forma de barra recta, que suelen verse mejor que \\not\\succcurlyeq.",
  },
  "not-less-than": {
    name: "Signo no menor que",
    meaning: "Signo menor que negado: indica que una cantidad no es estrictamente menor que otra.",
    usage: "Escribir a \\nless b equivale lógicamente a a \\geq b en un orden total, pero en un orden parcial ambas expresiones dicen cosas distintas, y es justo ahí donde \\nless tiene sentido: dos elementos incomparables cumplen a la vez a \\nless b y b \\nless a. El glifo es un único símbolo precompuesto con barra, así que queda más limpio que \\not<, cuya barra puede quedar descentrada. Su compañero para el otro sentido es \\ngtr. Para las versiones no estrictas negadas usa \\nleq o \\nleqslant en lugar de apilar \\not.",
    example: "a \\nless b \\text{ y } b \\nless a \\text{ (incomparables)}",
  },
  "not-greater-than": {
    name: "Signo no mayor que",
    meaning: "Signo mayor que negado, que afirma que el lado izquierdo no es estrictamente mayor que el derecho.",
    usage: "El nombre del comando elimina las vocales de «greater» (\\ngtr, no \\ngt ni \\ngreater), lo que confunde a quien lo escribe de memoria. En un orden lineal x \\ngtr y significa simplemente x \\leq y, por lo que la mayoría prefiere la forma positiva; \\ngtr resulta más natural en órdenes parciales, retículos o al expresar que falla una hipótesis, como una sucesión que no acaba siendo mayor que una cota. Combínalo con \\nless para el sentido opuesto y con \\ngeq para la versión no estricta negada. Tiene el espaciado de relación, igual que >.",
    example: "f(n) \\ngtr g(n) \\quad \\text{para infinitos } n",
  },
  "not-less-or-equal": {
    name: "Signo no menor o igual que",
    meaning: "No menor o igual que: negación de ≤ con una barra que atraviesa la forma de barra horizontal.",
    usage: "Usa \\nleq para indicar que una desigualdad no se cumple, por ejemplo en contraejemplos o en conjuntos parcialmente ordenados donde x \\nleq y no implica y \\leq x. Hay tres glifos relacionados: \\nleq niega el \\leq de una barra, \\nleqslant niega el inclinado \\leqslant y \\nleqq niega el de doble barra \\leqq. Haz coincidir la negación con el estilo no negado que use el resto del documento para que los símbolos parezcan de la misma familia. Es preferible el \\nleq precompuesto a \\not\\leq, que coloca una barra genérica que puede no alinearse con la barra horizontal.",
    example: "\\exists\\, x, y \\in P : x \\nleq y \\text{ y } y \\nleq x",
  },
  "not-greater-or-equal": {
    name: "Signo no mayor o igual que",
    meaning: "No mayor o igual que: la forma tachada de ≥, que indica que la desigualdad no se cumple.",
    usage: "En análisis real x \\ngeq 0 es simplemente x < 0, pero en órdenes de vectores o matrices es más débil: un vector puede no ser no negativo componente a componente sin ser negativo, así que ahí \\ngeq es el símbolo honesto. Pertenece a la misma familia que \\nleq, \\ngeqslant y \\ngeqq, y conviene elegir la versión cuyo gemelo no negado aparece en tu texto. Evita \\not\\geq si te importa el aspecto, porque la barra genérica está pensada para = y puede verse mal colocada. Como todas las relaciones, recibe espaciado grueso automáticamente.",
    example: "\\mathbf{v} \\ngeq \\mathbf{0} \\text{ aunque } v_1 > 0",
  },
  "minimum": {
    name: "Mínimo",
    meaning: "Operador mínimo, que da el menor valor de un conjunto finito o el menor valor que alcanza una función.",
    usage: "\\min es un nombre de operador predefinido: imprime «min» en redonda con el espaciado correcto, y en modo destacado el subíndice va debajo, como en \\min_{x \\in S} f(x). En línea, el subíndice se desplaza al lado para ahorrar altura; fuérzalo debajo con \\min\\limits_{x} si de verdad lo necesitas. Escribir min sin más en modo matemático produce tres variables en cursiva multiplicadas, un error frecuente. Para el argumento que minimiza no hay comando incorporado, así que define \\DeclareMathOperator*{\\argmin}{arg\\,min} en el preámbulo. Distingue \\min de \\inf, que no tiene por qué alcanzarse.",
  },
  "maximum": {
    name: "Máximo",
    meaning: "Operador máximo: el mayor elemento de un conjunto o el mayor valor que alcanza una función en su dominio.",
    usage: "Los problemas de optimización, la norma del máximo \\|x\\|_\\infty = \\max_i |x_i| y las activaciones ReLU \\max(0, x) dependen de \\max. Se comporta como \\sum en cuanto a los límites: debajo del operador en estilo destacado y a su lado en el texto en línea. Los paréntesis que lo siguen no se ajustan solos, así que escribe \\max\\left( a, b \\right) o \\max\\bigl( \\dots \\bigr) cuando el argumento contenga fracciones. Cuando el máximo podría no existir, usa \\sup. Para un operador argmax, decláralo con la forma con asterisco \\DeclareMathOperator* para que su subíndice también vaya debajo en las fórmulas destacadas.",
  },
  "infimum": {
    name: "Ínfimo",
    meaning: "Ínfimo, la mayor cota inferior de un conjunto de números reales, que existe incluso cuando no hay mínimo.",
    usage: "El conjunto \\{1/n : n \\in \\mathbb{N}\\} tiene \\inf igual a 0 pero no tiene mínimo, el ejemplo clásico de por qué el análisis necesita \\inf en lugar de \\min. El comando compone «inf» en redonda con espaciado de operador y límites debajo en estilo destacado, así que \\inf_{n \\ge 1} a_n se ve bien en un entorno equation. Un despiste habitual es confundir \\inf con \\infty, que es el símbolo de infinito. Entre los operadores relacionados están \\liminf, que ya existe como comando, y el ínfimo esencial, que tendrías que definir tú, por ejemplo con \\operatorname*{ess\\,inf}.",
  },
  "supremum": {
    name: "Supremo",
    meaning: "Supremo: la menor cota superior de un conjunto, fundamental para la completitud de los reales y para definir normas.",
    usage: "Las normas de operador se escriben \\|A\\| = \\sup_{\\|x\\| = 1} \\|Ax\\|, y la norma uniforme de una función es \\sup_x |f(x)|. El comando coloca su subíndice debajo en modo destacado y a la derecha en línea, igual que \\lim. Usa \\limsup para el límite superior en lugar de combinar \\lim y \\sup a mano, y recuerda que \\sup existe para todo subconjunto no vacío y acotado de los reales, mientras que \\max puede no existir. Cuando la condición del subíndice es larga, apila líneas con \\substack{...} bajo el operador en lugar de meter un único subíndice muy ancho.",
  },
  "least-upper-bound": {
    name: "Mínima cota superior",
    meaning: "Abreviatura «lub» (least upper bound) de la mínima cota superior, un sinónimo antiguo de supremo habitual en teoría del orden y retículos.",
    usage: "Los libros de conjuntos ordenados y retículos a veces escriben \\text{lub}\\, S en lugar de \\sup S, y el supremo a \\vee b es la lub de un par. Componerlo con \\text funciona, pero tiene dos inconvenientes: \\text copia la fuente del entorno, así que dentro de un teorema en cursiva se vuelve cursiva, y no da espaciado de operador antes del argumento. Lo más limpio es \\operatorname{lub} o una línea en el preámbulo \\DeclareMathOperator{\\lub}{lub}, que lo mantiene en redonda y espaciado como \\sup. Usa la declaración con asterisco si quieres los subíndices debajo en las fórmulas destacadas.",
  },
  "greatest-lower-bound": {
    name: "Máxima cota inferior",
    meaning: "Abreviatura «glb» (greatest lower bound) de la máxima cota inferior, el nombre que da la teoría del orden al ínfimo de un conjunto.",
    usage: "En teoría de retículos el ínfimo a \\wedge b se define como la glb de a y b, y los retículos completos son aquellos en los que todo subconjunto tiene glb y lub. Como LaTeX no incluye un \\glb, se suele escribir \\text{glb}, que sale en redonda en el texto normal pero hereda la cursiva dentro de los entornos de teorema y carece del espacio fino que debería tener un operador. Prefiere \\operatorname{glb} o \\DeclareMathOperator{\\glb}{glb} para obtener resultados coherentes. Si tus lectores vienen del análisis y no de la teoría del orden, \\inf puede ser la notación más familiar para el mismo concepto.",
  },
};

export default text;
