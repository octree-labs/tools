import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/calculus/<slug>. */
const text: SymbolPageTranslations = {
  "integral": {
    name: "Integral",
    meaning: "Desenha o sinal de integral, usado para primitivas e integrais definidas, como a área sob uma curva.",
    usage: "Escreva os limites como índice e expoente: \\int_a^b f(x)\\,dx dá uma integral definida, e por padrão os limites ficam ao lado do sinal no estilo destacado. Acrescente \\limits logo após \\int para empilhar os limites acima e abaixo, um estilo que alguns textos de física preferem. Coloque um espaço fino \\, antes do diferencial para que dx não encoste no integrando. Para integrais repetidas, \\int\\int deixa um vão desajeitado; use \\iint ou \\iiint, que ajustam o espaçamento automaticamente. Na matemática em linha o sinal encolhe bastante, então integrais longas ou aninhadas costumam ficar melhores num ambiente destacado.",
  },
  "double-integral": {
    name: "Integral dupla",
    meaning: "Sinal de integral dupla, para integrar uma função de duas variáveis sobre uma região plana.",
    usage: "Uma integral dupla aparece sempre que se integra sobre uma área, como em \\iint_D f(x,y)\\,dA para a massa, para a probabilidade sobre uma densidade conjunta ou para o fluxo através de uma superfície. Digitar \\int\\int à mão produz dois sinais com espaço demais entre eles; \\iint os aproxima num único par compacto. Coloque a região num único índice, \\iint_{D}, em vez de dividir os limites entre os dois sinais. Se você precisar de limites separados para cada variável, escreva \\int_a^b\\!\\int_c^d, já que o comando combinado aceita apenas um conjunto de limites. O espaço fino negativo \\! impede que esses pares montados à mão se afastem.",
  },
  "triple-integral": {
    name: "Integral tripla",
    meaning: "Sinal de integral tripla, usado para integrar sobre uma região sólida tridimensional.",
    usage: "Integrais de volume como \\iiint_V \\rho\\,dV para a massa total, ou o lado esquerdo do teorema da divergência \\iiint_V \\nabla\\cdot\\mathbf{F}\\,dV, usam esse símbolo. Assim como \\iint, ele aproxima os três sinais mais do que \\int\\int\\int faria, de modo que o resultado se lê como um único operador. A região vai num único índice; para limites iterados explícitos em cada variável, encadeie comandos \\int separados. Existe também \\iiiint, para quatro sinais, e \\idotsint, que desenha dois sinais separados por reticências para uma integral n-upla. Em coordenadas esféricas, lembre-se do jacobiano: dV = r^2\\sin\\theta\\,dr\\,d\\theta\\,d\\phi.",
  },
  "contour-integral": {
    name: "Integral de contorno",
    meaning: "Sinal de integral com um pequeno círculo, indicando a integração ao longo de uma curva fechada.",
    usage: "A análise complexa depende muito dela: o teorema integral de Cauchy afirma que \\oint_\\gamma f(z)\\,dz = 0 para f holomorfa, e o teorema dos resíduos calcula essas integrais como 2\\pi i vezes uma soma de resíduos. Na física, aparece na circulação e nas leis de Ampère e de Faraday, por exemplo \\oint_C \\mathbf{B}\\cdot d\\boldsymbol{\\ell}. Indique o contorno no índice; \\oint_{\\partial S} sinaliza a fronteira de uma superfície. Uma integral de superfície fechada com um círculo sobre dois sinais não faz parte do conjunto padrão de comandos, então muitos autores simplesmente escrevem \\iint_{\\partial V} e dizem que a superfície é fechada.",
  },
  "derivative": {
    name: "Derivada",
    meaning: "Notação de Leibniz para o operador derivada em relação a x, construída com uma fração.",
    usage: "Escrever \\frac{d}{dx} dá a forma de operador usada em regras como \\frac{d}{dx}\\sin x = \\cos x, enquanto \\frac{dy}{dx} denota a derivada de uma variável dependente. Muitos manuais de estilo compõem o d do diferencial em redondo, como \\mathrm{d}, para distingui-lo de uma variável chamada d; uma macro como \\newcommand{\\diff}{\\mathrm{d}} mantém isso consistente. No texto corrido, \\frac encolhe para um tamanho minúsculo, então prefira ali \\tfrac ou a forma com barra dy/dx. Para ordens superiores, escreva \\frac{d^2y}{dx^2}, com o expoente no d do numerador, mas no x do denominador.",
  },
  "partial-derivative-operator": {
    name: "Operador de derivada parcial",
    meaning: "Operador da derivada parcial em relação a x, mantendo todas as outras variáveis fixas.",
    usage: "O cálculo de várias variáveis e as EDPs estão cheios dele: a equação do calor \\frac{\\partial u}{\\partial t} = k\\frac{\\partial^2 u}{\\partial x^2}, os gradientes e as matrizes jacobianas o utilizam. O \\partial curvo o distingue do d comum de \\frac{d}{dx}, reservado a funções de uma variável. Derivadas parciais mistas se escrevem \\frac{\\partial^2 f}{\\partial x\\,\\partial y}, com um espaço fino entre os fatores do denominador. Quando as frações ficam apertadas, a abreviação com índice \\partial_x f ou f_x é uma alternativa compacta, comum na física e em longos sistemas de EDPs, em que frações empilhadas aumentariam demais a altura das linhas.",
  },
  "limit": {
    name: "Limite",
    meaning: "Operador de limite com a condição de aproximação x \\to a escrita abaixo dele.",
    usage: "Como \\lim é um operador predefinido, é composto em redondo e coloca o índice embaixo no modo destacado, como em \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1. Em linha, o índice passa para o lado para economizar altura; force-o para baixo com \\lim\\limits_{x\\to a} apenas se a altura extra for aceitável. Limites laterais usam x \\to a^+ ou x \\to a^-, e limites no infinito, x \\to \\infty. Os operadores relacionados \\limsup e \\liminf se comportam da mesma forma. Use \\to para a seta, em vez de um hífen seguido do sinal de maior que, que seria impresso como dois símbolos separados.",
  },
  "summation": {
    name: "Somatório",
    meaning: "Sinal de somatório com índice começando em n = 1 e indo até o infinito, a forma de uma série infinita.",
    usage: "Séries infinitas como a do problema de Basileia \\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6} ou a série harmônica divergente são escritas assim. No modo destacado, os limites ficam empilhados acima e abaixo de um sigma grande; em linha, passam para a direita de um sigma menor, o que mantém o espaçamento entre linhas uniforme. Acrescente \\limits se precisar de limites empilhados em linha, ou use \\displaystyle com moderação. Não use a letra grega \\Sigma como substituto: é uma letra de tamanho comum, não um operador, e não recebe limites corretamente. A convergência costuma ser enunciada por meio das somas parciais, S_N = \\sum_{n=1}^{N} a_n.",
  },
  "product": {
    name: "Produtório",
    meaning: "Operador de produto sobre n de 1 até o infinito, usado para escrever produtos infinitos.",
    usage: "Resultados clássicos como o produto de Euler para a função zeta e o produto de Wallis para \\pi são escritos com ele. Assim como \\sum, os limites ficam abaixo e acima do operador no estilo destacado e ao lado em linha. Não o confunda com \\Pi, a letra grega maiúscula, que tem forma parecida, mas mantém tamanho comum e recebe os limites como índices simples. Diz-se que um produto infinito converge quando seus produtos parciais tendem a um limite não nulo, por isso os autores costumam escrever \\prod_{n=1}^{\\infty}(1+a_n) junto com a condição \\sum |a_n| < \\infty, que garante a convergência.",
  },
  "differential": {
    name: "Diferencial",
    meaning: "Diferencial de x, que fecha uma integral e indica a variável de integração.",
    usage: "Digitado simplesmente como dx, o d sai em itálico e fica colado ao integrando, então a correção habitual é um espaço fino: \\int f(x)\\,dx. O estilo ISO e muitas revistas compõem o d em redondo com \\mathrm{d}x; uma macro como \\newcommand{\\dd}{\\mathrm{d}} mantém isso consistente ao longo de um artigo. Em integrais múltiplas, separe os diferenciais com espaços finos, dx\\,dy, ou abrevie-os como dA ou dV. O mesmo diferencial aparece nas derivadas de Leibniz \\frac{dy}{dx} e nas formas diferenciais, em que os produtos se escrevem dx \\wedge dy e a ordem importa, porque o produto exterior é antissimétrico.",
  },
  "prime-derivative": {
    name: "Derivada com linha",
    meaning: "Notação de Lagrange com linha para a primeira derivada de f avaliada em x.",
    usage: "Digitar um apóstrofo no modo matemático produz uma linha como expoente, então f' é uma abreviação de f^{\\prime}. A notação com linha é compacta para funções de uma variável, como no teorema do valor médio f'(c) = \\frac{f(b)-f(a)}{b-a}. Se você também precisar de um expoente, escreva f'^2, que combina ambos num único expoente, ou agrupe como (f'(x))^2; escrever f^2' provoca um erro de expoente duplo. Evite colar um caractere de aspa curva, que não vira linha, e evite um \\prime isolado fora de um expoente, que é impresso em tamanho cheio na linha de base. Na física, a linha também pode marcar uma coordenada transformada, como x'.",
  },
  "double-prime": {
    name: "Linha dupla (segunda derivada)",
    meaning: "Segunda derivada de f em x na notação com linhas, que descreve a concavidade ou a aceleração.",
    usage: "Dois apóstrofos no modo matemático se combinam num único expoente com duas linhas, equivalente a f^{\\prime\\prime}. O teste da segunda derivada a utiliza: se f'(c) = 0 e f''(c) > 0, então c é um mínimo local. Na mecânica, x''(t) dá a aceleração, embora a forma com pontos \\ddot{x} seja preferida para derivadas em relação ao tempo. Três linhas, f''', ainda são legíveis, mas além disso passe a f^{(4)}(x), com a ordem entre parênteses para que não seja confundida com uma potência. Nunca digite um caractere de aspas duplas no lugar de dois apóstrofos; ele é renderizado como um glifo completamente diferente.",
  },
  "approaches": {
    name: "Seta de convergência (“tende a”)",
    meaning: "Seta para a direita, lida como “tende a” em limites ou como “leva em” entre conjuntos.",
    usage: "Tem dupla função: em limites, x \\to 0 ou n \\to \\infty; em assinaturas de funções, f\\colon X \\to Y. \\to é apenas um sinônimo de \\rightarrow, então o resultado é idêntico; escolha o que ficar mais legível no código-fonte. Não o confunda com \\mapsto, que mostra para onde vai um elemento individual (x \\mapsto x^2), nem com \\longrightarrow, uma seta mais longa para o modo destacado. Para modos de convergência, decore-a: \\xrightarrow{d} para a convergência em distribuição, ou empilhe um rótulo com \\overset{p}{\\to}. Tem espaçamento de relação, então não são necessários espaços manuais ao redor.",
  },
  "evaluated-at": {
    name: "Barra de avaliação",
    meaning: "Barra vertical de avaliação com limites, que mostra uma primitiva avaliada de a até b.",
    usage: "Depois de integrar, escrever F(x)\\Big|_{a}^{b} = F(b) - F(a) é a abreviação padrão vinda do teorema fundamental do cálculo. \\Big fixa a barra num único tamanho ampliado, adequado a frações comuns; para expressões mais altas, use \\bigg| ou combine \\left. com \\right|_{a}^{b} para que a barra cresça conforme o que vem antes dela. Alguns autores preferem colchetes, \\Big[ F(x) \\Big]_a^b, que não deixam dúvida sobre quanto está sendo avaliado. Um | simples, sem ajuste de tamanho, é curto demais e faz os limites se amontoarem junto à primitiva, sobretudo depois de uma fração.",
  },
};

export default text;
