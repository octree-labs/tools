import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/trigonometry/<slug>. */
const text: SymbolPageTranslations = {
  "sine": {
    name: "Seno",
    meaning: "Função seno, impressa em fonte reta como operador nomeado, com o espaçamento correto.",
    usage: "Digite sempre \\sin em vez de sin; as letras soltas saem como três variáveis itálicas multiplicadas entre si. O operador acrescenta um espaço fino antes do argumento, então \\sin x dispensa parênteses para um único símbolo, enquanto \\sin(2x) ou \\sin\\left(\\frac{\\pi}{2}\\right) agrupam argumentos mais longos. As potências vêm logo depois do comando: \\sin^2 x + \\cos^2 x = 1. Note que \\sin^{-1} x é a função inversa, não o inverso multiplicativo \\csc x. Fórmulas comuns incluem a identidade do arco duplo \\sin 2\\theta = 2\\sin\\theta\\cos\\theta e a série de Taylor x - x^3/3! + \\cdots. Para a grafia sen, usual nos livros brasileiros, defina \\operatorname{sen}.",
  },
  "cosine": {
    name: "Cosseno",
    meaning: "Função cosseno, composta em fonte reta como operador matemático nomeado, assim como \\sin.",
    usage: "\\cos aparece na lei dos cossenos c^2 = a^2 + b^2 - 2ab\\cos C, na fórmula de Euler e^{i\\theta} = \\cos\\theta + i\\sin\\theta e na forma angular do produto escalar, de onde vem a similaridade de cosseno do aprendizado de máquina. Digitar cos sem barra invertida dá letras itálicas e espaçamento errado. Escreva \\cos^2\\theta para o quadrado do cosseno; \\cos\\theta^2 significa o cosseno de teta ao quadrado, que é outra quantidade. O comando não recebe argumento, então agrupe argumentos compostos com parênteses, como em \\cos(\\omega t + \\phi).",
  },
  "tangent": {
    name: "Tangente",
    meaning: "Função tangente, a razão entre seno e cosseno, composta em fonte reta.",
    usage: "Definida como \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, ela não está definida onde \\cos\\theta = 0, ou seja, nos múltiplos ímpares de \\pi/2. Em geometria, as inclinações são tangentes de ângulos de inclinação, e a identidade 1 + \\tan^2\\theta = \\sec^2\\theta resulta de dividir a identidade pitagórica por \\cos^2\\theta. Os livros brasileiros e alguns textos europeus escrevem tg, que não tem comando pronto; use \\operatorname{tg} se precisar dele. A fórmula da tangente da soma \\tan(a+b) = \\frac{\\tan a + \\tan b}{1 - \\tan a\\tan b} é uma equação destacada comum.",
  },
  "cotangent": {
    name: "Cotangente",
    meaning: "Cotangente, o inverso multiplicativo da tangente, escrita como operador em fonte reta.",
    usage: "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{1}{\\tan\\theta}, com polos nos múltiplos inteiros de \\pi. Ela aparece na identidade 1 + \\cot^2\\theta = \\csc^2\\theta e na clássica expansão em frações parciais de \\pi\\cot\\pi z, usada para calcular \\sum 1/n^2. Textos russos e alguns europeus escrevem ctg, e os brasileiros costumam usar cotg; para isso, use \\operatorname{ctg} ou uma construção análoga. A sua inversa costuma ser escrita arccot, que não tem comando predefinido. Lembre que \\cot x é o inverso multiplicativo da tangente, não a função inversa \\tan^{-1} x. A sua derivada é -\\csc^2 x.",
  },
  "secant": {
    name: "Secante",
    meaning: "Secante, o inverso multiplicativo do cosseno, como operador nomeado em fonte reta.",
    usage: "\\sec\\theta = 1/\\cos\\theta, e o seu quadrado aparece como a derivada da tangente, \\frac{d}{dx}\\tan x = \\sec^2 x. A integral \\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C é um clássico dos cursos de cálculo e das fórmulas da projeção de Mercator. Digitar sec sem barra invertida deixa letras itálicas e perde o espaço antes do argumento. Em geometria, a reta secante é outro objeto, nomeado por extenso e não com este comando. Como nos demais comandos trigonométricos, as potências se ligam diretamente, \\sec^2 x, com o argumento depois delas.",
  },
  "cosecant": {
    name: "Cossecante",
    meaning: "Cossecante, o inverso multiplicativo do seno, composta como operador em fonte reta.",
    usage: "\\csc\\theta = 1/\\sin\\theta, não definida nos múltiplos inteiros de \\pi. A sua derivada é \\frac{d}{dx}\\csc x = -\\csc x\\cot x, e a identidade 1 + \\cot^2 x = \\csc^2 x completa o trio pitagórico. Alguns livros, sobretudo os britânicos mais antigos, a abreviam como cosec, e os brasileiros como cossec; essas formas exigem \\operatorname{cosec} ou equivalente. Um erro comum é escrever \\sin^{-1} x quando se quer dizer \\csc x: o expoente -1 denota a função inversa, o arco seno, e não o inverso multiplicativo. As potências vêm logo depois do comando, como em \\csc^2 x, seguidas do argumento.",
  },
  "arcsine": {
    name: "Arco seno",
    meaning: "Arco seno, a inversa do seno restrito a [-π/2, π/2], como operador em fonte reta.",
    usage: "\\arcsin x devolve o ângulo em [-\\pi/2, \\pi/2] cujo seno é x, para x em [-1, 1]. É a alternativa sem ambiguidade a \\sin^{-1} x, que alguns leitores interpretam como 1/\\sin x. A sua derivada \\frac{1}{\\sqrt{1-x^2}} dá a integral padrão \\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C, um clássico da substituição trigonométrica. As bibliotecas de software a chamam de asin, mas nomes de programação não devem aparecer em matemática composta; use sempre o comando com barra invertida, para que saia reto e bem espaçado. Agrupe argumentos compostos com parênteses.",
  },
  "arccosine": {
    name: "Arco cosseno",
    meaning: "Arco cosseno, que devolve o ângulo em [0, π] cujo cosseno é um valor dado.",
    usage: "O ângulo entre dois vetores, \\theta = \\arccos\\frac{\\mathbf{a}\\cdot\\mathbf{b}}{\\lVert\\mathbf{a}\\rVert\\lVert\\mathbf{b}\\rVert}, é talvez a sua aparição mais comum. A sua imagem é [0, \\pi] e a sua derivada é -\\frac{1}{\\sqrt{1-x^2}}, e é por isso que \\arcsin x + \\arccos x = \\frac{\\pi}{2} para todo x em [-1, 1]. \\cos^{-1} x significa a mesma coisa, mas \\arccos evita a confusão com o inverso multiplicativo. Envolva argumentos longos com \\left( \\right) para maior clareza, já que o operador não fornece parênteses próprios. Em geometria computacional, o argumento costuma ser limitado primeiro a [-1, 1] para evitar erros de arredondamento.",
  },
  "arctangent": {
    name: "Arco tangente",
    meaning: "Arco tangente, que dá o ângulo em (-π/2, π/2) cuja tangente é x.",
    usage: "\\arctan x aparece em \\int \\frac{dx}{1+x^2} = \\arctan x + C e na fórmula de Machin \\frac{\\pi}{4} = 4\\arctan\\frac{1}{5} - \\arctan\\frac{1}{239}. Para o ângulo polar de um ponto (x, y) nos quatro quadrantes, os programadores usam atan2; em artigos, escreva \\operatorname{atan2}(y, x) ou o argumento complexo \\arg(x + iy). \\tan^{-1} x é um sinônimo aceito, mais comum na engenharia. A série \\arctan x = x - x^3/3 + x^5/5 - \\cdots converge para |x| \\le 1 e dá a série de Leibniz em x = 1.",
  },
  "arccotangent": {
    name: "Arco cotangente",
    meaning: "Inversa da cotangente, digitada com \\text porque o LaTeX não tem um \\arccot embutido.",
    usage: "O LaTeX padrão define \\arcsin, \\arccos e \\arctan, mas não \\arccot, então esta entrada monta o rótulo a partir de texto. Uma abordagem mais limpa é \\operatorname{arccot} x, que acrescenta espaçamento de operador, ou \\DeclareMathOperator{\\arccot}{arccot} no preâmbulo, para que \\arccot x funcione como os seus irmãos embutidos. As convenções para a sua imagem variam: alguns textos usam (0, \\pi), outros (-\\pi/2, \\pi/2] sem o 0, então diga qual você adota. A sua derivada é -\\frac{1}{1+x^2} em qualquer das escolhas. Alguns autores escrevem \\cot^{-1}. Escolha uma forma e use-a do começo ao fim.",
  },
  "arcsecant": {
    name: "Arco secante",
    meaning: "Inversa da secante, escrita com \\text, já que o LaTeX não tem um \\arcsec predefinido.",
    usage: "Definida para |x| \\ge 1, \\text{arcsec}\\, x = \\arccos(1/x). A sua derivada é \\frac{1}{|x|\\sqrt{x^2-1}} com a imagem usual [0, \\pi] sem \\pi/2, e o valor absoluto é uma omissão frequente nos trabalhos de estudantes. Como \\text não acrescenta espaçamento de operador, insira \\, antes do argumento ou passe para \\operatorname{arcsec}. Declarar \\DeclareMathOperator{\\arcsec}{arcsec} uma vez permite escrever \\arcsec x exatamente como \\arccos x. As tabelas de integrais exprimem \\int \\frac{dx}{x\\sqrt{x^2-1}} em termos dela. É raramente usada em artigos modernos, que tendem a reescrevê-la como o arco cosseno do inverso.",
  },
  "arccosecant": {
    name: "Arco cossecante",
    meaning: "Inversa da cossecante, montada com \\text porque não existe um \\arccsc embutido.",
    usage: "Para |x| \\ge 1, \\text{arccsc}\\, x = \\arcsin(1/x), com valores em [-\\pi/2, \\pi/2] sem o 0. A sua derivada é -\\frac{1}{|x|\\sqrt{x^2-1}}. É a menos usada das seis funções trigonométricas inversas, então a maioria dos autores a converte para a forma de arco seno nas respostas finais. Para um espaçamento adequado, use \\operatorname{arccsc} ou declare-a como operador matemático no preâmbulo, em vez de depender de \\text, que também fica em itálico dentro de ambientes de teorema. Alguns livros escrevem \\csc^{-1} x, com o risco habitual de ser lido como inverso multiplicativo.",
  },
  "inverse-sine": {
    name: "Seno inverso",
    meaning: "Inversa do seno escrita com o expoente -1, equivalente ao arco seno.",
    usage: "Calculadoras e muitos textos de engenharia indicam o arco seno como \\sin^{-1}, de modo que \\sin^{-1}(0.5) = \\frac{\\pi}{6}. A notação conflita com \\sin^2 x = (\\sin x)^2: por analogia, \\sin^{-1} x poderia ser lido como 1/\\sin x, que na verdade é \\csc x. Por isso, os textos de matemática pura tendem a preferir \\arcsin. As chaves em volta de -1 são obrigatórias, e o LaTeX coloca o expoente logo depois do nome do operador, então \\sin^{-1} x sai com o expoente antes do argumento. Seja qual for a notação escolhida, use-a de forma consistente em todo o documento.",
  },
  "inverse-cosine": {
    name: "Cosseno inverso",
    meaning: "Inversa do cosseno em notação de expoente, a mesma função que o arco cosseno.",
    usage: "Física e engenharia costumam escrever \\cos^{-1} para ângulos, por exemplo o ângulo entre dois vetores calculado a partir do produto escalar normalizado. Não é o inverso multiplicativo 1/\\cos x, que é \\sec x; aqui o expoente -1 significa função inversa. A imagem é [0, \\pi], então \\cos^{-1}(-1) = \\pi. Artigos de matemática pura costumam escolher \\arccos para evitar a ambiguidade. Se o seu texto mistura \\cos^2 x para quadrados e \\cos^{-1} x para inversas, mencione a convenção uma vez para que os leitores não fiquem adivinhando.",
  },
  "inverse-tangent": {
    name: "Tangente inversa",
    meaning: "Inversa da tangente escrita como tan elevada a -1, equivalente ao arco tangente.",
    usage: "Engenharia e física usam \\tan^{-1} para ângulos de fase, como em \\phi = \\tan^{-1}(\\omega L / R) para um circuito RL, e para converter inclinações em ângulos. Como nas outras formas inversas, não é \\cot x, o inverso multiplicativo. A sua imagem é (-\\pi/2, \\pi/2), então ela não distingue quadrantes opostos; artigos que precisam do ângulo completo devem dizer que usam a versão de dois argumentos. Muitos manuais de estilo preferem \\arctan em matemática, mas aceitam \\tan^{-1} em trabalhos aplicados, desde que o significado seja consistente.",
  },
  "hyperbolic-sine": {
    name: "Seno hiperbólico",
    meaning: "Seno hiperbólico, (e^x - e^{-x})/2, composto como operador em fonte reta.",
    usage: "\\sinh x = \\frac{e^x - e^{-x}}{2} parametriza a hipérbole unitária junto com \\cosh, e é por isso que \\cosh^2 x - \\sinh^2 x = 1. Ele aparece na relatividade restrita por meio da rapidez, em problemas de catenária e nas soluções de y'' = y. A sua derivada é \\cosh x, sem troca de sinal, ao contrário do seno circular. A inversa costuma ser escrita \\operatorname{arsinh} ou \\sinh^{-1}; o LaTeX não fornece comando embutido para ela. Digitar sinh sem a barra invertida dá quatro letras itálicas e um espaçamento ruim.",
  },
  "hyperbolic-cosine": {
    name: "Cosseno hiperbólico",
    meaning: "Cosseno hiperbólico, (e^x + e^{-x})/2, como operador nomeado em fonte reta.",
    usage: "Uma corrente suspensa assume a forma de uma catenária, y = a\\cosh(x/a), a aplicação dos livros-texto. A função é par, sempre maior ou igual a 1, e satisfaz \\cosh^2 x - \\sinh^2 x = 1 e \\cosh(ix) = \\cos x. Na relatividade restrita, o fator de Lorentz é igual ao cosseno hiperbólico da rapidez. Como os demais operadores, \\cosh acrescenta um espaço fino antes de um argumento de um só símbolo, então \\cosh x fica bem sem parênteses. A sua inversa não tem comando predefinido; use \\operatorname{arcosh} ou \\cosh^{-1}.",
  },
  "hyperbolic-tangent": {
    name: "Tangente hiperbólica",
    meaning: "Tangente hiperbólica, o seno hiperbólico dividido pelo cosseno hiperbólico, com valores entre -1 e 1.",
    usage: "As redes neurais usam \\tanh como função de ativação, frequentemente comparada com a sigmoide logística por meio de \\tanh x = 2\\sigma(2x) - 1. A sua derivada é 1 - \\tanh^2 x, o que mantém compactas as fórmulas de retropropagação. Na física, ela aparece na magnetização de campo médio, m = \\tanh(\\beta J z m), e na composição relativística de velocidades. A imagem (-1, 1) a torna útil para comprimir quantidades ilimitadas. A sua inversa \\operatorname{artanh} precisa ser escrita à mão ou declarada, pois o LaTeX não tem comando embutido para ela.",
  },
  "inverse-hyperbolic-sine": {
    name: "Seno hiperbólico inverso",
    meaning: "Inversa do seno hiperbólico, rotulada com \\text porque o LaTeX não tem comando embutido para ela.",
    usage: "Ela é igual a \\ln\\left(x + \\sqrt{x^2 + 1}\\right) e dá a primitiva de \\frac{1}{\\sqrt{x^2+1}}. A notação ISO a chama de arsinh, de “área seno”, porque o seu argumento é uma área e não um arco; muitos autores ainda escrevem arcsinh ou \\sinh^{-1}. Qualquer que seja o nome escolhido, \\operatorname{arsinh} ou um \\DeclareMathOperator no preâmbulo dá um espaçamento melhor que \\text, que além disso herda o itálico dos teoremas. Cientistas de dados a usam como transformação estabilizadora da variância porque, ao contrário do logaritmo, ela lida com zero e valores negativos.",
  },
  "degree-symbol": {
    name: "Símbolo de grau",
    meaning: "Círculo sobrescrito que indica graus, tanto de ângulos quanto de temperaturas.",
    usage: "O sinal de grau habitual no modo matemático é ^{\\circ}, como em 90^{\\circ} ou \\angle ABC = 45^{\\circ}; ele eleva \\circ, o anel de composição, ao tamanho de sobrescrito. Para temperaturas, escreva 25^{\\circ}\\mathrm{C}, com um C reto. Não use uma letra o nem um algarismo 0 sobrescritos, que têm a forma errada, nem \\circ na linha de base, que significa composição de funções. No modo texto, \\textdegree dá um sinal equivalente sem entrar no modo matemático. Documentos com muitas medidas se beneficiam de uma macro de unidades que trate o espaçamento e as fontes de forma consistente.",
  },
  "radians": {
    name: "Radiano",
    meaning: "Rótulo de unidade “rad” em fonte reta, que indica um ângulo medido em radianos.",
    usage: "O radiano é adimensional, por isso a maior parte da matemática omite a unidade e escreve \\theta = \\pi/2; a física e a engenharia costumam explicitá-la, como em \\omega = 2\\pi\\,\\text{rad/s}. Coloque um espaço fino \\, entre o número e a unidade e mantenha a unidade reta; \\text faz isso, embora \\mathrm{rad} seja mais seguro, porque \\text copia a fonte ao redor em contextos itálicos. A conversão é \\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\cdot \\pi/180. Note que rad também abrevia o radical de um ideal em álgebra, normalmente escrito \\operatorname{rad}(I).",
  },
};

export default text;
