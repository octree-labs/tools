import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/complex/<slug>. */
const text: SymbolPageTranslations = {
  "imaginary-unit": {
    name: "Unidade imaginária",
    meaning: "A unidade imaginária, um número cujo quadrado é −1; a base da aritmética dos números complexos.",
    usage: "Matemáticos e físicos escrevem i para a raiz quadrada de -1, obtendo z = a + bi e o i\\hbar da equação de Schrödinger. No modo matemático, o i simples fica em itálico, igual a uma variável de índice, então em textos que também somam sobre i é mais seguro usar o i reto \\mathrm{i}, que é o que recomenda a norma ISO de composição tipográfica; uma macro como \\newcommand{\\iu}{\\mathrm{i}} mantém isso consistente. Não use \\imath para a unidade imaginária: trata-se de um i sem pingo destinado a receber acentos, como \\hat{\\imath} para vetores unitários. Na teoria dos jogos, i também designa o índice de um jogador.",
  },
  "imaginary-unit-engineering": {
    name: "Unidade imaginária na engenharia",
    meaning: "Símbolo da unidade imaginária usado na engenharia, escolhido porque a letra i é reservada para a corrente elétrica.",
    usage: "Engenheiros eletricistas escrevem impedâncias como Z = R + jX e fasores como V e^{j\\omega t}, e o Python usa j nos literais complexos pela mesma razão histórica. Os textos de processamento de sinais seguem a mesma convenção, escrevendo a transformada de Fourier com e^{-j\\omega t}. Assim como no caso de i, um j reto \\mathrm{j} distingue a constante de uma variável de índice j. O \\jmath, j sem pingo, serve para acentos como \\hat{\\jmath}, e não para a unidade imaginária. Note que muitos livros colocam o j antes do número, escrevendo j5 em vez de 5j.",
  },
  "complex-number": {
    name: "Número complexo",
    meaning: "Forma algébrica (retangular) de um número complexo, com parte real a e parte imaginária b.",
    usage: "Todo número complexo pode ser escrito como a + bi com a e b reais; essa forma é a mais adequada para a adição e para ler diretamente \\Re z = a e \\Im z = b. A multiplicação e as potências costumam ser mais simples na forma polar r e^{i\\theta}. Escrever bi, com a unidade no final, é a convenção usual, embora engenheiros frequentemente escrevam a + jb. Se o documento compõe o i reto, mantenha-o reto aqui também: a + b\\mathrm{i}. Quando b é negativo, escreva a - bi em vez de a + (-b)i e, para números específicos, coloque o i depois dos algarismos, como em 3 + 4i.",
  },
  "real-part": {
    name: "Parte real",
    meaning: "Parte real do número complexo z: para z = a + bi, fornece o número real a.",
    usage: "O comando nativo \\Re imprime um R maiúsculo fraktur, o símbolo tradicional da parte real, mas muitos autores modernos o acham pouco legível e escrevem \\operatorname{Re}(z), que produz “Re” reto com espaçamento de operador. Em qualquer caso, \\Re é apenas um símbolo, não um operador, então o TeX não acrescenta espaço antes do argumento; use parênteses ou um espaço fino. Uma identidade útil é \\Re z = (z + \\bar{z})/2. Em processamento de sinais, \\Re\\{\\cdot\\} com chaves é comum para extrair o sinal físico de um fasor.",
  },
  "imaginary-part": {
    name: "Parte imaginária",
    meaning: "Parte imaginária de z, o coeficiente real b em z = a + bi (e não o termo bi em si).",
    usage: "Um erro frequente entre estudantes é pensar que \\Im(3 + 4i) = 4i; o valor é 4, um número real. O símbolo é um I fraktur e, como \\Re, pode parecer obscuro, então \\operatorname{Im}(z) é uma alternativa popular e mais legível. Cuidado: em álgebra, Im também abrevia a imagem de uma aplicação; se os dois sentidos aparecerem, escreva \\operatorname{im} f para a imagem, evitando o conflito. Fatos úteis incluem \\Im z = (z - \\bar{z})/(2i) e o de que o semiplano superior é o conjunto em que \\Im z > 0.",
  },
  "complex-conjugate": {
    name: "Conjugado complexo",
    meaning: "Conjugado complexo de z, sua reflexão em relação ao eixo real: o conjugado de a + bi é a − bi.",
    usage: "Os matemáticos escrevem \\bar{z}, e identidades como z\\bar{z} = |z|^2 o tornam central na divisão de números complexos. O \\bar é um acento de largura fixa, pensado para um único caractere; para conjugar uma expressão, use \\overline{z + w}, que se estende sobre todo o argumento e torna legível \\overline{z + w} = \\bar{z} + \\bar{w}. Os físicos escrevem com mais frequência z^* e reservam a barra para outros fins, como os adjuntos de Dirac \\bar{\\psi}. No cálculo de Wirtinger, \\partial / \\partial \\bar{z} trata \\bar{z} como uma variável independente.",
  },
  "complex-conjugate-star": {
    name: "Conjugado complexo com asterisco",
    meaning: "Notação com asterisco para o conjugado complexo, padrão na física e na engenharia elétrica.",
    usage: "A mecânica quântica escreve as probabilidades como \\psi^* \\psi e os produtos internos com componentes conjugadas, então z^* é a norma nessa área. Em um expoente, o asterisco funciona como digitado; z^{\\ast} produz o mesmo glifo. Para matrizes, A^* costuma designar a transposta conjugada na matemática, enquanto os físicos escrevem A^\\dagger para isso e reservam A^* para a simples conjugação entrada a entrada, então indique sua convenção. Um asterisco também pode marcar um ótimo (x^*) ou um espaço dual (V^*), então evite essa notação se esses sentidos aparecerem por perto.",
  },
  "modulus": {
    name: "Módulo",
    meaning: "Módulo (valor absoluto) de z, sua distância à origem: √(a² + b²) para z = a + bi.",
    usage: "Barras verticais simples funcionam nos casos simples, mas são ambíguas para o TeX, que não consegue distinguir a de abertura da de fechamento; isso causa espaçamento ruim em expressões como |-z|. Use \\lvert z \\rvert, ou defina uma macro, para obter o espaçamento correto, e \\left| \\frac{z}{w} \\right| quando o conteúdo for alto. Nunca use \\mid aqui: é uma relação com espaçamento largo. As propriedades fundamentais são |zw| = |z||w| e a desigualdade triangular |z + w| \\leq |z| + |w|. Em contextos vetoriais, as barras duplas \\| \\| designam uma norma.",
  },
  "argument": {
    name: "Argumento",
    meaning: "Argumento de z: o ângulo do semieixo real positivo até z, definido a menos de múltiplos de 2π.",
    usage: "O \\arg é um nome de operador nativo, então é impresso reto e com o espaçamento correto; digitar arg sem a barra invertida produz letras em itálico. Como o ângulo é multivalorado, \\arg z é frequentemente tratado como um conjunto \\{\\theta + 2\\pi k\\}, e \\arg(zw) = \\arg z + \\arg w vale apenas módulo 2\\pi. Para o valor principal, que é unívoco, escreve-se \\operatorname{Arg} z com letra maiúscula. Não confunda \\arg com operadores do tipo argmax, que devolvem o ponto que otimiza e precisam de declaração própria.",
  },
  "principal-argument": {
    name: "Argumento principal",
    meaning: "Valor principal do argumento, o único ângulo em (−π, π] que z forma com o semieixo real positivo.",
    usage: "A letra maiúscula distingue esse Arg unívoco do \\arg multivalorado. O corte de ramificação fica ao longo do semieixo real negativo, e é por isso que \\text{Arg}(-1) = \\pi, enquanto os valores logo abaixo do corte se aproximam de -\\pi. Alguns livros usam [0, 2\\pi), então diga qual intervalo você adota. O LaTeX não tem um comando \\Arg; \\text{Arg} funciona, mas fica em itálico dentro de ambientes de teorema. \\operatorname{Arg} ou \\DeclareMathOperator{\\Arg}{Arg} é mais robusto e dá o espaçamento adequado antes do argumento. Por exemplo, \\text{Arg}(i) = \\pi/2, enquanto \\arg i é todo o conjunto \\pi/2 + 2\\pi k.",
  },
  "polar-form": {
    name: "Forma polar",
    meaning: "Forma polar (exponencial) de um número complexo: o módulo r vezes um número complexo unitário de ângulo θ.",
    usage: "Multiplicar na forma polar significa simplesmente multiplicar os módulos e somar os ângulos, de modo que (r e^{i\\theta})^n = r^n e^{in\\theta}, que é a fórmula de De Moivre em versão compacta. As raízes da unidade e^{2\\pi i k/n} e os fasores A e^{i\\omega t} decorrem diretamente dessa notação. Coloque todo o expoente entre chaves; e^i\\theta elevaria e apenas a i. Quando os expoentes ficam carregados, \\exp(i\\theta) é mais legível que um expoente minúsculo. Alguns guias de estilo compõem a constante como um e reto, \\mathrm{e}, para distingui-la de uma variável.",
  },
  "euler-s-formula": {
    name: "Fórmula de Euler",
    meaning: "Fórmula de Euler, que relaciona a exponencial complexa ao cosseno e ao seno; ela coloca e^{iθ} sobre a circunferência unitária.",
    usage: "Tomar \\theta = \\pi dá a identidade de Euler e^{i\\pi} + 1 = 0, e isolar o cosseno na fórmula fornece \\cos\\theta = (e^{i\\theta} + e^{-i\\theta})/2. Observe que \\cos e \\sin são comandos de operador: são impressos retos e acrescentam um espaço fino antes de \\theta, ao passo que escrever cos produziria três letras em itálico. Não são necessários parênteses para um argumento formado por um único símbolo como \\theta, mas use-os para argumentos compostos, \\sin(2\\theta). Em contextos de engenharia, a mesma identidade é escrita com j no lugar de i.",
  },
  "complex-exponential": {
    name: "Exponencial complexa",
    meaning: "Função exponencial avaliada em um número complexo z = x + iy, igual a eˣ(cos y + i sen y).",
    usage: "A exponencial complexa é inteira, nunca se anula e é periódica de período 2\\pi i, razão pela qual sua inversa, o logaritmo, é multivalorada. Com expoentes curtos, e^{z} funciona bem; para algo como e^{-(x - \\mu)^2/2\\sigma^2}, o expoente fica minúsculo, e \\exp\\left( -\\frac{(x-\\mu)^2}{2\\sigma^2} \\right) é mais legível. O \\exp é um operador predefinido. Coloque sempre entre chaves os expoentes com mais de um elemento. Algumas editoras pedem o e reto \\mathrm{e} para a constante, o que a distingue de uma variável e. Sua derivada é ela mesma, o que faz dela o componente básico das soluções de EDOs lineares.",
  },
  "complex-logarithm": {
    name: "Logaritmo complexo",
    meaning: "Logaritmo complexo de z, uma inversa multivalorada da exponencial: ln|z| + i arg z.",
    usage: "Como a exponencial se repete a cada 2\\pi i, \\log z tem infinitos valores que diferem por 2\\pi i k. O ramo principal costuma ser escrito com maiúscula, \\operatorname{Log} z = \\ln|z| + i \\operatorname{Arg} z, e é analítico fora do corte de ramificação sobre os reais negativos. \\log e \\ln são ambos operadores nativos; os analistas costumam escrever \\log para o logaritmo natural, enquanto \\ln deixa a base explícita. Um espaço fino aparece automaticamente depois de \\log, então \\log z dispensa parênteses quando o argumento é uma única variável.",
  },
  "complex-power": {
    name: "Potência complexa",
    meaning: "Potência complexa de z elevado a w, definida como exp(w log z) e em geral multivalorada.",
    usage: "O fato surpreendente i^i = e^{-\\pi/2} (no ramo principal) decorre dessa definição. Como \\log z é multivalorado, z^w tem vários valores, a menos que w seja inteiro, e regras como (z^a)^b = z^{ab} podem falhar. Coloque entre chaves os expoentes com mais de um elemento: z^{w+1}, e não z^w+1. Para torres como z^{w^v}, o TeX reduz cada nível, então considere a notação \\exp para ganhar legibilidade. Indique explicitamente o ramo quando depender de um valor específico, por exemplo escrevendo \\exp(w \\operatorname{Log} z).",
  },
  "unit-circle": {
    name: "Circunferência unitária",
    meaning: "Equação da circunferência unitária no plano complexo: todos os números complexos a distância 1 da origem.",
    usage: "Os pontos da circunferência unitária são exatamente os e^{i\\theta}, e as raízes n-ésimas da unidade estão sobre ela. Ela costuma ser denotada \\mathbb{T} ou S^1 e, como grupo para a multiplicação, é o grupo do círculo usado na análise de Fourier. As integrais de contorno sobre ela são escritas \\oint_{|z|=1}, com a condição como subíndice. Sobre a circunferência, a conjugação satisfaz \\bar{z} = 1/z, uma simplificação prática. Se o espaçamento em torno das barras parecer errado no contexto, use \\lvert z \\rvert; o disco aberto |z| < 1 e o disco fechado |z| \\le 1 seguem o mesmo padrão.",
  },
  "upper-half-plane": {
    name: "Semiplano superior",
    meaning: "H em negrito de quadro-negro, na maioria das vezes o semiplano superior {z : Im z > 0}; também os quatérnios.",
    usage: "Em análise complexa e teoria dos números, \\mathbb{H} é o domínio das formas modulares, sobre o qual SL_2(\\mathbb{Z}) age por transformações de Möbius, e ele é munido da métrica hiperbólica. Em álgebra, a mesma letra designa os quatérnios de Hamilton, que levam seu nome, então se ambos aparecerem escreva \\mathcal{H} ou explicite qual deles você quer dizer. Com as fontes padrão, \\mathbb fornece apenas letras maiúsculas; argumentos minúsculos produzem lixo ou erros. Conjuntos relacionados são compostos da mesma forma: \\mathbb{C}, \\mathbb{R}, \\mathbb{Z}. Sua fronteira é a reta real junto com um ponto no infinito.",
  },
};

export default text;
