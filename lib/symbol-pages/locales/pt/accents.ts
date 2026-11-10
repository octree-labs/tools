import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/accents/<slug>. */
const text: SymbolPageTranslations = {
  "hat": {
    name: "Chapéu",
    meaning: "Coloca um pequeno acento circunflexo sobre um único caractere, marcando estimadores, vetores unitários ou transformadas de Fourier.",
    usage: "Estatísticos escrevem \\hat{\\theta} para um estimador de \\theta e \\hat{y} para os valores ajustados de uma regressão, físicos usam \\hat{x} ou \\hat{\\mathbf{n}} para vetores unitários e operadores quânticos, e analistas escrevem \\hat{f} para a transformada de Fourier. O acento tem largura fixa, então só fica bem sobre um único símbolo; para várias letras, use \\widehat{xy}. Sobre um i ou um j, use as formas sem pingo \\imath e \\jmath para que o chapéu não fique em cima do pingo. No texto corrido, fora do modo matemático, o acento circunflexo equivalente é \\^{o}, e não \\hat.",
  },
  "wide-hat": {
    name: "Chapéu largo",
    meaning: "Estende um acento circunflexo sobre uma expressão de várias letras, como a transformada de Fourier de um produto.",
    usage: "Use \\widehat quando o acento precisa cobrir mais de um glifo, por exemplo \\widehat{f * g} = \\hat{f}\\,\\hat{g} para a convolução, \\widehat{ABC} para um ângulo em algumas tradições da geometria, ou \\widehat{G} para o grupo dual ou o completamento de um grupo. Nas fontes Computer Modern padrão, o chapéu só cresce até uma largura limitada, então sobre expressões longas ele para de se esticar e parece pequeno demais; nesse caso, um expoente como (f g)^\\wedge ou um operador \\mathcal{F}\\{\\cdot\\} fica mais legível. Para uma única letra, prefira \\hat{x}, que é posicionado com mais precisão sobre caracteres em itálico.",
  },
  "tilde": {
    name: "Til",
    meaning: "Coloca um pequeno til ondulado sobre um único símbolo, geralmente indicando uma aproximação, uma transformada ou uma variável modificada.",
    usage: "Um til sobre uma letra costuma sinalizar um objeto relacionado, mas alterado: \\tilde{x} para uma solução perturbada ou aproximada, \\tilde{f} para uma transformada de Laplace ou outra, \\tilde{O}(n) para a complexidade “O til”, que esconde fatores logarítmicos, ou \\tilde{X} para um recobrimento universal em topologia. Assim como \\hat, tem largura fixa, então sobre duas ou mais letras use \\widetilde. Não o confunda com \\sim, um símbolo de relação colocado entre termos (X \\sim N(0,1)), nem com o acento do modo texto \\~{n}, usado em palavras como señor. Para letras sem pingo, escreva \\tilde{\\imath}.",
  },
  "wide-tilde": {
    name: "Til largo",
    meaning: "Desenha um til extensível sobre um grupo de símbolos, usado para recobrimentos, fechos e expressões modificadas.",
    usage: "Escolha \\widetilde quando o til precisa abranger vários caracteres, como em \\widetilde{GL}_n para um grupo de recobrimento, \\widetilde{AB} para um arco em alguns textos de geometria, ou \\widetilde{f(x)} para uma função suavizada. Sua largura cresce com o conteúdo, mas só até um máximo que depende da fonte; a partir daí ele fica centralizado e parece curto. Para argumentos longos, uma notação pós-fixada ou um operador nomeado é mais claro. Sobre uma única letra, \\tilde{x} oferece melhor posicionamento e um acento menor. Para escrever o til como caractere isolado no texto, o comando a usar é \\textasciitilde.",
  },
  "dot": {
    name: "Ponto sobrescrito",
    meaning: "Acrescenta um ponto sobre uma variável, a notação de Newton para a primeira derivada em relação ao tempo.",
    usage: "Em mecânica e em sistemas dinâmicos, \\dot{x} significa dx/dt, de modo que equações como \\dot{x} = Ax ou o lagrangiano L(q, \\dot{q}, t) ficam compactas. Físicos também o usam para taxas, como \\dot{m} para a vazão mássica. O ponto é um acento matemático e funciona também sobre letras gregas: \\dot{\\theta}. Não o confunda com \\cdot (o ponto centralizado de multiplicação) nem com o acento do modo texto \\.{z}, usado em palavras polonesas. Para a segunda derivada, use \\ddot{x} em vez de empilhar dois comandos \\dot, o que desalinha os pontos.",
  },
  "double-dot": {
    name: "Ponto duplo sobrescrito",
    meaning: "Coloca dois pontos sobre uma variável para indicar sua segunda derivada em relação ao tempo, como na aceleração.",
    usage: "A segunda lei de Newton costuma ser escrita m\\ddot{x} = F, e o oscilador harmônico, \\ddot{x} + \\omega^2 x = 0. Na mecânica lagrangiana, as equações de Euler-Lagrange produzem termos \\ddot{q}. Embora lembre um trema, \\ddot é um acento matemático; para palavras alemãs ou turcas no texto, use \\\"{o}. Os pontos são centralizados no eixo inclinado do símbolo, então sobre letras em itálico ficam levemente deslocados para a direita, o que é intencional. Para a terceira derivada existe \\dddot{x}, mas além disso a notação de Leibniz ou x^{(n)} é mais clara.",
  },
  "triple-dot": {
    name: "Ponto triplo sobrescrito",
    meaning: "Coloca três pontos sobre uma variável, a notação de Newton para a terceira derivada em relação ao tempo (o solavanco, ou arranque).",
    usage: "Terceiras derivadas aparecem no planejamento de trajetórias e em controle, onde \\dddot{x} é o solavanco, e na força de reação de radiação de Abraham-Lorentz, proporcional a \\dddot{\\mathbf{x}}. Ele vem acompanhado de \\ddddot, com quatro pontos, e nenhum dos dois faz parte do núcleo mínimo do LaTeX. Seus pontos ficam mais próximos do que três chamadas manuais de \\dot conseguiriam, e ele fica na mesma altura que \\ddot. Como três pontos ficam difíceis de ler em corpo pequeno ou em índices, muitos autores passam a x^{(3)} ou d^3x/dt^3 para ordens mais altas.",
  },
  "bar": {
    name: "Barra",
    meaning: "Coloca uma barra horizontal curta sobre um símbolo, normalmente para uma média amostral ou um conjugado complexo.",
    usage: "A estatística usa \\bar{x} para a média amostral, (1/n)\\sum x_i; a análise complexa escreve \\bar{z} para o conjugado; e \\bar{A} pode denotar o fecho de um conjunto. A barra tem largura fixa, aproximadamente a de uma letra, então \\bar{xy} fica errado: use \\overline{xy} para abranger vários símbolos, que é também a escolha habitual para conjugar uma expressão como \\overline{z + w}. No texto, o acento mácron é \\={a}, e não \\bar. Vetores em negrito o aceitam sem problemas: \\bar{\\mathbf{v}}.",
  },
  "overline": {
    name: "Sobrelinha",
    meaning: "Traça uma linha sobre uma expressão inteira, para conjugados, fechos, dízimas periódicas ou nomes de segmentos.",
    usage: "Ao contrário de \\bar, o traço de \\overline se estende por toda a largura do argumento, o que o torna adequado para \\overline{z_1 z_2} = \\bar{z}_1 \\bar{z}_2, o fecho \\overline{A \\cup B}, a negação booleana \\overline{A + B}, o segmento de reta \\overline{AB} e dízimas periódicas como 0.\\overline{3}. Sobrelinhas aninhadas se empilham em alturas crescentes, o que pode parecer irregular lado a lado; acrescentar a cada uma um \\vphantom do conteúdo mais alto ajuda a alinhá-las. No modo texto não há traço superior disponível diretamente; envolva-o em modo matemático. Sua contraparte para sublinhar é \\underline.",
  },
  "underline": {
    name: "Sublinhado",
    meaning: "Traça uma linha sob uma expressão, usada para ênfase, cotas inferiores ou integrais inferiores.",
    usage: "Em matemática, \\underline é usado para integrais inferiores de Darboux, o limite inferior \\underline{\\lim}, cotas inferiores e para marcar elementos distinguidos; algumas áreas sublinham vetores em vez de usar negrito. Funciona tanto no modo texto quanto no matemático, mas no texto desativa a hifenização e a quebra de linha, então é uma má escolha para enfatizar palavras, caso em que se prefere \\emph. A profundidade do traço depende das partes descendentes, por isso \\underline{a} e \\underline{y} ficam em alturas diferentes; acrescentar um \\vphantom{y} a cada um os alinha. Seu par superior é \\overline.",
  },
  "vector-arrow": {
    name: "Seta de vetor",
    meaning: "Coloca uma pequena seta apontando para a direita sobre uma única letra, para marcá-la como vetor.",
    usage: "A física escolar e muitos textos de engenharia escrevem vetores como \\vec{F}, \\vec{v} ou \\vec{r}, enquanto a matemática pura usa mais o negrito \\mathbf{v} ou letras simples. A seta tem tamanho fixo, pensado para um caractere; sobre dois pontos como AB ela fica apertada, então use \\overrightarrow{AB}. A seta fica ligeiramente à direita do centro sobre letras em itálico, acompanhando sua inclinação. Combiná-la com um chapéu para vetores unitários (\\hat{\\vec{x}}) funciona, mas fica muito alto, por isso muitos autores usam \\hat{\\mathbf{x}}.",
  },
  "wide-vector": {
    name: "Seta de vetor larga",
    meaning: "Estende uma seta apontando para a direita sobre seu argumento, a notação padrão para o vetor de A até B.",
    usage: "A geometria e a álgebra vetorial usam \\overrightarrow{AB} para o vetor do ponto A ao ponto B, o que dá identidades como \\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}. A seta se alarga para acompanhar o conteúdo, ao contrário de \\vec, que só cabe sobre uma letra. Em teoria das categorias e em análise funcional, às vezes indica a direção de um limite ou um conjunto dirigido. A seta é desenhada com altura plena, então acrescenta um espaço vertical perceptível; no texto corrido com entrelinha apertada, considere \\vec{v} ou letras em negrito. Use \\overleftarrow para o sentido oposto.",
  },
  "left-vector": {
    name: "Seta de vetor para a esquerda",
    meaning: "Desenha uma seta apontando para a esquerda sobre todo o argumento, indicando sentido invertido ou uma sequência lida de trás para frente.",
    usage: "Menos comum que sua contraparte voltada para a direita, \\overleftarrow{AB} aparece quando um vetor ou caminho é lido de B de volta para A, para a palavra ou cadeia invertida na teoria das linguagens formais e para grandezas adjuntas ou de tempo reverso em física. Sua seta se estende por todo o argumento, assim como \\overrightarrow. Se você precisar de setas sob a expressão, o amsmath oferece \\underleftarrow e \\underrightarrow. Para um vetor de uma letra só voltado para trás não há uma forma curta embutida como \\vec, então este comando largo é a escolha habitual.",
  },
  "line-arrow-over-ab": {
    name: "Seta dupla sobre AB (reta)",
    meaning: "Desenha uma seta de duas pontas sobre seu argumento, a notação usual para a reta que passa pelos pontos A e B.",
    usage: "A geometria escolar distingue três objetos construídos a partir de dois pontos: \\overline{AB} para o segmento, \\overrightarrow{AB} para a semirreta e \\overleftrightarrow{AB} para a reta infinita. A seta se estende com o conteúdo e tem pontas nas duas extremidades. Também é usada ocasionalmente para relações bidirecionais ou limites bilaterais. Por ser bem alta, pode colidir com a linha de cima em parágrafos densos; o modo matemático destacado evita isso. A versão correspondente com a seta embaixo é \\underleftrightarrow. Tenha em mente a distinção em relação a \\overline{AB}, que denota apenas o segmento finito.",
  },
  "acute": {
    name: "Acento agudo",
    meaning: "Coloca um acento agudo (um traço ascendente) sobre um símbolo matemático, usado ocasionalmente como marca parecida com a linha.",
    usage: "Acentos do modo matemático como \\acute existem sobretudo por completude; na prática, aparecem como decorações de variáveis, por exemplo \\acute{x} para uma coordenada transformada em alguns textos de física. Para letras acentuadas em palavras, use o acento de texto \\'{e}, como em café; \\acute não funciona fora do modo matemático. A versão matemática usa a fonte itálica matemática, então \\acute{e} dentro de uma equação não combina com uma letra acentuada em redondo no parágrafo ao redor. Se você só precisa de uma marca no estilo de derivada, x' (linha) é muito mais habitual.",
  },
  "grave": {
    name: "Acento grave",
    meaning: "Coloca um acento grave (um traço descendente) sobre um símbolo do modo matemático, como decoração de variável.",
    usage: "\\grave é a contraparte matemática do acento de texto \\`{a}, visto em palavras francesas como voilà. Em equações é raramente usado e serve apenas como mais uma forma de distinguir variáveis relacionadas, ao lado de linhas, chapéus e tis. Por ser um acento matemático, compõe o argumento em itálico matemático; para uma palavra acentuada numa equação, escreva \\text{\\`{a}}. Se você está escolhendo uma decoração para uma nova variável, o leitor geralmente achará \\tilde, \\hat ou uma linha mais familiares.",
  },
  "breve": {
    name: "Acento breve",
    meaning: "Acrescenta um breve (uma pequena curva em forma de taça) sobre um símbolo, uma decoração de variável pouco comum.",
    usage: "Em matemática, \\breve{x} aparece como marca alternativa quando chapéu, barra e til já estão ocupados, por exemplo em alguns artigos de processamento de sinais e de estatística para um estimador modificado, e na notação da teoria de Lie. O breve é arredondado embaixo, ao contrário de \\check, que é pontudo. Para textos em romeno ou turco (ă, ğ), use o acento de texto \\u{a} em vez do comando matemático. O acento tem largura fixa, então só serve para letras isoladas.",
  },
  "check": {
    name: "Acento caron (háček)",
    meaning: "Coloca um caron (háček), um pequeno acento em forma de v, sobre um símbolo; usado notadamente na cohomologia de Čech.",
    usage: "A topologia algébrica escreve \\check{H}^n(X) para a cohomologia de Čech, e alguns textos usam \\check{x} para um objeto dual ou obtido por transformada inversa, o oposto de um chapéu. A forma de v o distingue do \\breve arredondado e de \\hat, que é um v invertido. No texto, um háček tcheco como č é produzido com \\v{c}, e não com \\check. O acento tem largura fixa; não existe um \\widecheck padrão no LaTeX básico, então sobre expressões longas os autores usam um expoente.",
  },
  "ring": {
    name: "Anel sobrescrito",
    meaning: "Coloca um pequeno anel sobre um símbolo, usado para interiores de conjuntos e alguns símbolos de unidades.",
    usage: "A topologia às vezes escreve \\mathring{A} para o interior de A (uma alternativa a A^\\circ ou \\operatorname{int} A), e a geometria diferencial o usa para grandezas de traço nulo ou de referência. Para o símbolo do ångström no texto, use \\AA, e para a letra escandinava å, use \\aa; \\mathring é apenas para o modo matemático. Ele difere de um expoente \\circ, que fica no canto superior direito em vez de centralizado acima. O anel é dimensionado para uma única letra. Sobre as letras i e j, use \\imath ou \\jmath para que o anel substitua o pingo.",
  },
  "overbrace": {
    name: "Chave superior",
    meaning: "Desenha uma chave horizontal acima de uma expressão, com um rótulo opcional definido por um expoente.",
    usage: "Chaves superiores anotam partes de uma fórmula, por exemplo indicando n cópias em \\overbrace{1 + 1 + \\cdots + 1}^{n} ou dando nome a um termo numa dedução. O expoente após o comando é colocado acima da ponta da chave, e envolver o rótulo em \\text o mantém em redondo e num tamanho legível. A chave acrescenta muita altura, então pertence ao modo matemático destacado; no meio do texto, ela afasta as linhas. Combine com \\underbrace na mesma expressão para anotar acima e abaixo. Para uma chave com rótulo ao lado, use \\left\\{ ... \\right.",
    example: "\\overbrace{a + a + \\cdots + a}^{n \\text{ vezes}} = na",
  },
  "underbrace": {
    name: "Chave inferior",
    meaning: "Coloca uma chave sob uma expressão, com um rótulo definido por um índice abaixo dela.",
    usage: "Livros didáticos usam \\underbrace para explicar partes de uma equação, como destacar \\underbrace{\\frac{1}{2}mv^2}_{\\text{cinética}} num balanço de energia ou contar os termos de um produto. O rótulo vai num índice logo após o comando; use \\text para palavras e conteúdo em \\scriptstyle para matemática curta. A chave se estende exatamente pela largura do argumento. Chaves aninhadas ou sobrepostas exigem cuidado: é possível pôr uma chave inferior em parte de uma expressão que já tem chave superior, mas as chaves não podem se cruzar. Assim como \\overbrace, funciona melhor no modo matemático destacado.",
  },
  "cancel": {
    name: "Cancelamento",
    meaning: "Risca uma expressão com uma linha diagonal para mostrar termos que se cancelam numa dedução.",
    usage: "Professores e notas de aula usam \\cancel para mostrar simplificações, por exemplo um fator que se cancela numa fração ou termos opostos que se anulam numa soma. O mesmo pacote oferece \\bcancel (traço na direção da barra invertida), \\xcancel (um X sobre o termo) e \\cancelto{0}{x}, que desenha uma seta até o valor para o qual o termo tende. A cor do traço pode ser alterada separadamente da cor do texto, o que ajuda em slides. \\cancel também funciona no modo texto, mas é usado sobretudo em matemática. Artigos formais raramente mostram cancelamentos dessa forma; trata-se de um recurso didático.",
  },
  "boxed-formula": {
    name: "Fórmula em caixa",
    meaning: "Desenha um quadro retangular em volta de uma expressão matemática, geralmente para destacar um resultado final.",
    usage: "Estudantes enquadram respostas finais e autores destacam identidades importantes com \\boxed{E = mc^2}. O comando funciona dentro do modo matemático, mantendo o conteúdo no estilo destacado ou de texto, conforme o caso, ao contrário de \\fbox, que passa para o modo texto e exige $...$ dentro dele. Em ambientes align, coloque \\boxed em volta de um lado ou do conteúdo de uma linha inteira, mas não atravessando o ponto de alinhamento &. O espaçamento interno e a espessura do traço seguem \\fboxsep e \\fboxrule, que podem ser ajustados localmente. Para quadros coloridos, o passo seguinte habitual é \\fcolorbox envolvendo matemática em linha.",
  },
};

export default text;
