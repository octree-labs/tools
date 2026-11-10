import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/topology/<slug>. */
const text: SymbolPageTranslations = {
  "aleph-null": {
    name: "Álef-zero",
    meaning: "Álef-zero, a cardinalidade dos números naturais e o menor cardinal infinito.",
    usage: "Todo conjunto que pode ser listado como uma sequência, como \\mathbb{Z} ou \\mathbb{Q}, tem cardinalidade \\aleph_0, e contas como \\aleph_0 + \\aleph_0 = \\aleph_0 \\cdot \\aleph_0 = \\aleph_0 mostram como os cardinais infinitos absorvem as parcelas. O argumento diagonal de Cantor prova que 2^{\\aleph_0} > \\aleph_0, logo os reais são estritamente maiores. \\aleph está disponível sem pacotes extras e se comporta como um símbolo comum, então o subíndice se liga diretamente a ele. Alguns textos mais antigos escrevem \\omega para o ordinal correspondente; mantenha cardinais e ordinais distintos na sua notação.",
  },
  "aleph-one": {
    name: "Álef-um",
    meaning: "Álef-um, o primeiro cardinal não enumerável: o tamanho infinito seguinte ao enumerável.",
    usage: "A hipótese do contínuo afirma que 2^{\\aleph_0} = \\aleph_1, ou seja, que nenhum conjunto tem tamanho estritamente entre o dos inteiros e o dos reais; Gödel e Cohen mostraram que ela é independente de ZFC. Não escreva |\\mathbb{R}| = \\aleph_1 como um fato, pois essa é justamente a hipótese em aberto; use \\mathfrak{c} ou 2^{\\aleph_0} para o contínuo. \\aleph_1 é também a cardinalidade de \\omega_1, o conjunto dos ordinais enumeráveis. Os cardinais álef maiores seguem o padrão \\aleph_\\alpha, com subíndices ordinais, e o subíndice precisa de chaves se tiver mais de um elemento.",
    example: "2^{\\aleph_0} = \\aleph_1 \\quad \\text{(HC)}",
  },
  "beth": {
    name: "Bet",
    meaning: "Letra hebraica bet, usada para os números bet: conjuntos das partes iterados a partir do cardinal enumerável.",
    usage: "A sequência bet é definida por \\beth_0 = \\aleph_0 e \\beth_{\\alpha+1} = 2^{\\beth_\\alpha}, de modo que \\beth_1 é a cardinalidade dos reais e \\beth_2 a de todas as funções reais. A hipótese generalizada do contínuo é o enunciado \\aleph_\\alpha = \\beth_\\alpha para todo ordinal. Ao lado de \\aleph, o conjunto estendido de símbolos do LaTeX oferece \\beth, \\gimel e \\daleth, a segunda, a terceira e a quarta letras hebraicas. Como \\aleph, é um símbolo comum, então os subíndices se ligam diretamente; raramente aparece fora da teoria dos conjuntos.",
  },
  "weierstrass-p": {
    name: "P de Weierstrass",
    meaning: "P em estilo caligráfico para a função elíptica de Weierstrass, uma função meromorfa duplamente periódica.",
    usage: "A função de Weierstrass \\wp(z) satisfaz (\\wp')^2 = 4\\wp^3 - g_2 \\wp - g_3, e é por isso que ela parametriza curvas elípticas. O glifo é um p manuscrito especial, sem relação com nenhuma família de fontes, então \\mathcal{P} e \\mathscr{P} são símbolos diferentes. Alguns autores usam \\wp para o conjunto das partes, mas \\mathcal{P}(X) é a escolha mais comum e evita o conflito com a função elíptica. A notação com linha funciona normalmente, \\wp'(z), e o símbolo desce um pouco abaixo da linha de base, como uma letra com haste descendente.",
  },
  "fraktur-r-real-part-symbol": {
    name: "R gótico (símbolo da parte real)",
    meaning: "R maiúsculo gótico, o símbolo clássico para tomar a parte real de uma quantidade complexa.",
    usage: "Sozinho, \\Re é apenas um glifo, não um operador, então não há espaçamento automático antes do argumento; coloque depois dele parênteses ou chaves, como em \\Re(s) > 1 para o semiplano onde a série da função zeta de Riemann converge. Os teóricos analíticos dos números usam exatamente esse estilo. Se preferir outra aparência, redefina-o com \\renewcommand{\\Re}{\\operatorname{Re}} no preâmbulo, para que todas as ocorrências mudem de uma vez. Note que \\Re difere de \\mathfrak{R}, que dá um R gótico de outra fonte, com aparência ligeiramente diferente.",
  },
  "fraktur-i-imaginary-part-symbol": {
    name: "I gótico (símbolo da parte imaginária)",
    meaning: "I maiúsculo gótico, o glifo tradicional para a parte imaginária de um número complexo.",
    usage: "A integração de contorno e a teoria espectral usam \\Im para separar quantidades: a parte imaginária de uma função de Green dá a densidade de estados, e \\Im \\tau > 0 define o semiplano superior modular. Assim como \\Re, o comando só imprime um símbolo, então os parênteses ficam por sua conta. Muitos leitores acham as letras góticas fáceis de confundir, e redefinir com \\renewcommand{\\Im}{\\operatorname{Im}} troca para um “Im” reto. Se o seu texto também usa a imagem de um homomorfismo, escreva-a como \\operatorname{im}, em minúsculas, para manter as duas coisas separadas.",
  },
  "calligraphic-o": {
    name: "O caligráfico",
    meaning: "O caligráfico, usado em topologia para uma família de abertos e para várias outras estruturas.",
    usage: "Um espaço topológico costuma ser escrito (X, \\mathcal{O}), com \\mathcal{O} a coleção dos abertos, embora \\tau seja igualmente comum. A mesma letra tem muitas outras funções: a notação assintótica O grande \\mathcal{O}(n \\log n), o feixe estrutural \\mathcal{O}_X em geometria algébrica e o anel de inteiros \\mathcal{O}_K de um corpo de números. \\mathcal só aceita letras maiúsculas nas fontes padrão. Para a notação assintótica, muitos manuais de estilo preferem um O itálico simples, então escolha uma forma e aplique-a em todo o texto.",
  },
  "interior": {
    name: "Interior",
    meaning: "Interior de A, a união de todos os abertos contidos em A; escrito com um pequeno círculo sobrescrito.",
    usage: "O interior é o maior aberto contido em A e se relaciona com o fecho por meio de \\partial A = \\overline{A} \\setminus A^{\\circ}. O sobrescrito \\circ é o anel de composição colocado no alto; não deve ser confundido com o símbolo de grau das unidades. Outras notações comuns são \\operatorname{int} A e \\mathring{A}, esta última com o anel diretamente sobre a letra; \\mathring é mais adequado para letras isoladas com subíndices, como U_1. Para um intervalo fechado, [a, b]^{\\circ} = (a, b).",
  },
  "exterior": {
    name: "Exterior",
    meaning: "Exterior de um conjunto A: o interior do seu complementar, formado pelos pontos que têm uma vizinhança disjunta de A.",
    usage: "Todo espaço se divide em três partes disjuntas, o interior, a fronteira e o exterior de A, e \\text{ext}(A) = (X \\setminus A)^{\\circ}. Digitar ext no modo matemático sem nenhum envoltório produz as letras itálicas e, x, t multiplicadas entre si, então algum envoltório é necessário. \\text herda a fonte ao redor, o que o deixa em itálico dentro de um teorema; \\operatorname{ext} fica reto e dá espaçamento de operador, e \\DeclareMathOperator{\\ext}{ext} o torna reutilizável. Lembre que ext também abrevia a álgebra exterior e os grupos Ext da álgebra homológica.",
  },
  "boundary-operator": {
    name: "Operador de fronteira",
    meaning: "Fronteira de A: os pontos cujas vizinhanças, todas elas, intersectam tanto A quanto o seu complementar.",
    usage: "A fronteira de um disco é a sua circunferência, e a fronteira dos racionais nos reais é tudo, \\partial \\mathbb{Q} = \\mathbb{R}. O mesmo símbolo \\partial é o operador bordo da topologia algébrica, \\partial_n : C_n \\to C_{n-1} com \\partial \\circ \\partial = 0, e aparece no teorema de Stokes \\int_{\\partial M} \\omega = \\int_M d\\omega. Alguns textos escrevem \\operatorname{Fr} A ou \\operatorname{bd} A no lugar. Como \\partial é um símbolo comum, nada o separa do nome do conjunto; essa aparência compacta é a convenção desejada.",
  },
  "direct-limit": {
    name: "Limite direto",
    meaning: "Limite direto (colimite) de um sistema dirigido, composto como “lim” com uma seta apontando para a direita embaixo.",
    usage: "Limites diretos constroem objetos como \\mathbb{Q}, visto como \\varinjlim \\frac{1}{n}\\mathbb{Z}, ou o talo de um feixe, \\mathcal{F}_x = \\varinjlim_{U \\ni x} \\mathcal{F}(U). Em fórmulas destacadas, o conjunto de índices vai embaixo da seta; no texto corrido, vai ao lado. O pacote amsmath também oferece \\injlim, que imprime “inj lim” por extenso, então escolha a forma usada na sua área. Os teóricos de categorias costumam escrever \\operatorname*{colim}, já que os limites diretos são um caso particular de colimites. O seu correspondente para sistemas inversos é \\varprojlim.",
  },
  "inverse-limit": {
    name: "Limite inverso",
    meaning: "Limite inverso (projetivo) de um sistema, mostrado como “lim” com uma seta apontando para a esquerda embaixo.",
    usage: "Os inteiros p-ádicos são o exemplo clássico, \\mathbb{Z}_p = \\varprojlim \\mathbb{Z}/p^n\\mathbb{Z}, e grupos profinitos, como os grupos de Galois, são limites inversos de grupos finitos. Assim como em \\lim, o subíndice fica embaixo no estilo destacado. A alternativa \\projlim imprime as palavras “proj lim”, sem seta. A teoria das categorias generaliza isso para um limite arbitrário, normalmente escrito \\lim. Confira se as setas apontam para o lado certo: \\varprojlim tem a seta para a esquerda e corresponde a aplicações que descem pelo sistema; \\varinjlim, a seta para a direita.",
  },
  "quotient": {
    name: "Quociente",
    meaning: "Quociente de A por B: um grupo, anel, módulo ou espaço em que B é colapsado ou fatorado.",
    usage: "Quocientes aparecem como \\mathbb{Z}/n\\mathbb{Z}, G/H para classes laterais e X/A para o colapso de um subespaço num ponto. No modo matemático, / é um símbolo comum, sem espaço em volta, que é a aparência padrão. Para o quociente por uma relação de equivalência, coloque o til entre chaves, X/{\\sim}; caso contrário, \\sim recebe espaçamento de relação e deixa um vão. Com operandos altos, construções como \\big/ ou \\left. \\middle/ \\right. mantêm a barra proporcional. Não use \\setminus aqui; isso é diferença de conjuntos, outra operação. Diga qual estrutura o quociente carrega, pois G/H só é um grupo quando H é normal.",
  },
  "fundamental-group": {
    name: "Grupo fundamental",
    meaning: "Grupo fundamental de um espaço: as classes de homotopia de laços com um ponto base, com a concatenação como produto.",
    usage: "O cálculo padrão \\pi_1(S^1) \\cong \\mathbb{Z} conta quantas vezes um laço dá a volta na circunferência, e um espaço com \\pi_1 trivial é chamado de simplesmente conexo. Escreva o ponto base explicitamente, \\pi_1(X, x_0), quando ele importar; para espaços conexos por caminhos, costuma ser omitido. Os grupos de homotopia superiores seguem o mesmo padrão, \\pi_n(X). Use \\cong para isomorfismo, em vez de =. Se \\pi também denotar o número ou uma projeção no mesmo documento, avalie se os leitores podem confundi-los.",
  },
  "homology": {
    name: "Homologia",
    meaning: "n-ésimo grupo de homologia de um espaço ou complexo de cadeias, que mede os buracos n-dimensionais.",
    usage: "Para esferas, H_n(S^n) \\cong \\mathbb{Z}, enquanto H_k(S^n) = 0 para 0 < k < n, e a característica de Euler é a soma alternada dos postos de H_n. Os coeficientes são escritos depois de um ponto e vírgula, H_n(X; \\mathbb{Z}/2), e a homologia relativa como H_n(X, A). Subíndices indicam homologia e sobrescritos indicam cohomologia, então não os troque. As variantes são marcadas com decorações: homologia reduzida \\tilde{H}_n, homologia singular H_n^{\\mathrm{sing}}. Em álgebra homológica, ela é definida como \\ker \\partial_n / \\operatorname{im} \\partial_{n+1}. As sequências exatas longas desses grupos costumam ser desenhadas como diagramas comutativos.",
  },
  "cohomology": {
    name: "Cohomologia",
    meaning: "n-ésimo grupo de cohomologia, a teoria dual da homologia, que tem estrutura de anel pelo produto cup.",
    usage: "A cohomologia de de Rham H^n_{\\mathrm{dR}}(M) classifica as formas diferenciais fechadas módulo as exatas, e o produto cup \\smile faz de H^\\ast(X) um anel graduado. Combinar um sobrescrito e um subíndice, como em H^n_{\\mathrm{dR}}, os empilha de forma organizada; use \\mathrm para rótulos que são palavras, não variáveis. O índice sobrescrito a distingue da homologia H_n, uma convenção que vale a pena respeitar. A cohomologia de grupos H^n(G, M) e a cohomologia de feixes H^n(X, \\mathcal{F}) usam o mesmo símbolo com argumentos diferentes. A dualidade de Poincaré relaciona H^k e H_{n-k} em variedades fechadas orientadas de dimensão n, o que explica por que as duas notações costumam aparecer juntas.",
  },
  "calligraphic-c-category": {
    name: "C caligráfico (categoria)",
    meaning: "C caligráfico, o nome padrão para uma categoria arbitrária; também é usado para conjuntos de restrições ou conjuntos viáveis.",
    usage: "A teoria das categorias escreve os objetos como X \\in \\mathcal{C} e os conjuntos de morfismos como \\operatorname{Hom}_{\\mathcal{C}}(X, Y), e uma segunda categoria costuma se chamar \\mathcal{D}. Categorias concretas são frequentemente compostas em negrito ou sem serifa, como \\mathbf{Set} ou \\mathsf{Grp}, para separar nomes de variáveis. A otimização usa \\mathcal{C} para um conjunto viável convexo, como em \\min_{x \\in \\mathcal{C}} f(x). \\mathcal só fornece letras maiúsculas nas fontes padrão; \\mathscr dá um estilo manuscrito mais rebuscado, caso você precise de uma segunda família.",
  },
  "calligraphic-f-functor": {
    name: "F caligráfico (funtor)",
    meaning: "F caligráfico, que costuma nomear um funtor entre categorias, um feixe, uma sigma-álgebra ou uma transformada.",
    usage: "Um funtor \\mathcal{F} \\colon \\mathcal{C} \\to \\mathcal{D} leva objetos e morfismos preservando a composição. Fora da teoria das categorias, a mesma letra é um feixe \\mathcal{F}(U), uma sigma-álgebra ou filtração (\\mathcal{F}_t em probabilidade) ou a transformada de Fourier \\mathcal{F}\\{f\\}. Por causa dessa sobrecarga, apresente a letra explicitamente. Use \\colon em vez de : ao escrever a assinatura do funtor, para obter o espaçamento de pontuação. Muitos autores reservam F e G em itálico simples para funtores e guardam as letras caligráficas para feixes. Uma transformação natural entre dois funtores costuma ser escrita \\eta \\colon \\mathcal{F} \\Rightarrow \\mathcal{G}.",
  },
};

export default text;
