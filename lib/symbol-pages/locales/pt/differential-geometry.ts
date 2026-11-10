import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/differential-geometry/<slug>. */
const text: SymbolPageTranslations = {
  "manifold": {
    name: "Variedade",
    meaning: "M caligráfico, a forma padrão de nomear uma variedade diferenciável em artigos de geometria diferencial e topologia.",
    usage: "Escrever \\mathcal{M} em vez de um M itálico simples indica que o objeto é um espaço, e não uma matriz ou um número, o que ajuda quando M já está em uso. As cartas são escritas \\varphi: U \\subseteq \\mathcal{M} \\to \\mathbb{R}^n e a dimensão como \\dim \\mathcal{M} = n. A mesma letra também designa modelos de Kripke em lógica e espaços de módulos em geometria algébrica, então defina-a uma vez no texto. O \\mathcal só tem glifos confiáveis para as letras latinas maiúsculas; para um M cursivo mais ornamentado, use \\mathscr{M}, e mantenha um único estilo em todo o artigo.",
  },
  "tangent-space": {
    name: "Espaço tangente",
    meaning: "Espaço tangente à variedade M no ponto p: o espaço vetorial de todos os vetores velocidade das curvas que passam por p.",
    usage: "Para uma variedade de dimensão n, T_p M é um espaço vetorial real de dimensão n com base coordenada \\partial/\\partial x^i em p. O diferencial de uma aplicação diferenciável é escrito dF_p: T_p M \\to T_{F(p)} N, e um campo vetorial associa a cada p um elemento de T_p M. No modo matemático, o espaço entre T_p e M é ignorado, então o resultado é o compacto T_pM de qualquer forma; acrescente \\, se quiser uma separação visível. Se a variedade se chamar \\mathcal{M}, escreva T_p\\mathcal{M} por coerência.",
  },
  "cotangent-space": {
    name: "Espaço cotangente",
    meaning: "Espaço cotangente em p: o dual de T_p M, formado pelos funcionais lineares (covetores) sobre os vetores tangentes em p.",
    usage: "Os elementos de T^*_p M são covetores como o diferencial df_p, e os diferenciais coordenados dx^i formam a base dual de \\partial/\\partial x^i. Colocar o asterisco antes ou depois do subíndice (T^*_p M ou T_p^* M) produz o mesmo resultado, pois o TeX empilha o expoente e o subíndice independentemente da ordem. Use ^* em vez de ^{\\ast} apenas por brevidade; ambos dão o mesmo asterisco. A métrica identifica T_p M com T^*_p M abaixando um índice, e é assim que os gradientes se tornam covetores.",
  },
  "tangent-bundle": {
    name: "Fibrado tangente",
    meaning: "Fibrado tangente: a união disjunta de todos os espaços tangentes T_p M, que é ela mesma uma variedade com o dobro da dimensão de M.",
    usage: "Um ponto de TM é um par (p, v) com v \\in T_p M, e a projeção \\pi: TM \\to M esquece o vetor. Um campo vetorial é exatamente uma seção diferenciável X: M \\to TM com \\pi \\circ X = \\mathrm{id}. A aplicação tangente de F: M \\to N costuma ser escrita TF ou dF: TM \\to TN. Como o TeX compõe as duas letras itálicas sem espaço, TM é lido corretamente como um único nome; se houver risco de confusão com um produto T \\cdot M, mencione isso no texto.",
  },
  "cotangent-bundle": {
    name: "Fibrado cotangente",
    meaning: "Fibrado cotangente: o fibrado de todos os espaços cotangentes de M, o espaço de fase natural da mecânica hamiltoniana.",
    usage: "Os pontos de T^*M são pares (q, p) formados por uma posição e um covetor, e é por isso que a mecânica clássica vive aqui. Ele possui uma forma simplética canônica \\omega = dq^i \\wedge dp_i, e as 1-formas em M são seções de T^*M. As formas de grau maior são seções de \\Lambda^k T^*M, escrito com \\Lambda ou \\bigwedge^k. O asterisco é um expoente, então T^*M e T^{*}M são renderizados da mesma forma; evite T*M sem o acento circunflexo, que coloca na linha de base uma estrela com espaçamento de operador binário.",
  },
  "covariant-derivative": {
    name: "Derivada covariante",
    meaning: "Derivada covariante do campo vetorial Y na direção de X, definida por uma conexão afim \\nabla.",
    usage: "Uma conexão afim é linear sobre as funções em X e satisfaz a regra de Leibniz \\nabla_X(fY) = (Xf)Y + f\\nabla_X Y. A conexão de Levi-Civita é a única sem torção e compatível com a métrica, o que dá \\nabla_X Y - \\nabla_Y X = [X, Y]. Em coordenadas, ela se reduz a \\nabla_i Y^k = \\partial_i Y^k + \\Gamma^k_{ij} Y^j. A direção em subíndice é composta em tamanho pequeno; para expressões longas como \\nabla_{\\dot\\gamma}\\dot\\gamma, coloque o subíndice entre chaves para que o ponto continue preso à letra.",
  },
  "christoffel-symbol": {
    name: "Símbolo de Christoffel",
    meaning: "Símbolos de Christoffel: os coeficientes da conexão, que indicam como os vetores da base coordenada variam de ponto a ponto.",
    usage: "Para a conexão de Levi-Civita, eles são calculados a partir da métrica como \\Gamma^k_{ij} = \\tfrac12 g^{kl}(\\partial_i g_{jl} + \\partial_j g_{il} - \\partial_l g_{ij}) e são simétricos em i e j. Eles não são as componentes de um tensor, e é por isso que podem se anular em um ponto em coordenadas normais. As letras gregas maiúsculas são retas por padrão no LaTeX; se o seu estilo exigir itálico, use \\varGamma. Alguns textos antigos escrevem os de segunda espécie com um símbolo de chaves, mas a forma com \\Gamma é a padrão hoje.",
  },
  "riemann-curvature": {
    name: "Tensor de curvatura de Riemann",
    meaning: "Componentes do tensor de curvatura de Riemann, que medem quanto o transporte paralelo ao longo de um pequeno laço deixa de devolver um vetor ao seu estado inicial.",
    usage: "Com uma convenção comum, R^l_{ijk} = \\partial_j \\Gamma^l_{ik} - \\partial_k \\Gamma^l_{ij} + \\Gamma^l_{jm}\\Gamma^m_{ik} - \\Gamma^l_{km}\\Gamma^m_{ij}, mas o sinal e a ordem dos índices variam entre os livros, então indique a sua. Escrito como R^l_{ijk}, o TeX empilha l diretamente sobre i, ocultando qual posição está elevada; para escalonar os índices, use R^l{}_{ijk}, em que o grupo vazio empurra o subíndice para a direita. Abaixar o primeiro índice dá R_{lijk}, que é antissimétrico no primeiro par e no último par de posições nas convenções usuais, mas verifique a posição dos índices na sua fonte antes de citar identidades.",
  },
  "ricci-tensor": {
    name: "Tensor de Ricci",
    meaning: "Tensor de Ricci: o traço do tensor de Riemann em um par de índices, uma grandeza de curvatura simétrica com dois índices.",
    usage: "Ele é obtido por contração, R_{ij} = R^k_{ikj} numa convenção comum, e governa a distorção de volume ao longo das geodésicas. As equações de campo de Einstein são R_{\\mu\\nu} - \\tfrac12 R g_{\\mu\\nu} = 8\\pi G T_{\\mu\\nu}, e uma variedade com R_{ij} = \\lambda g_{ij} é chamada de variedade de Einstein. Os físicos costumam usar índices gregos \\mu\\nu, e os matemáticos índices latinos ij. Ricci-plana significa R_{ij} = 0, a condição que define as métricas de Calabi-Yau. Alguns autores escrevem \\mathrm{Ric} para o tensor sem coordenadas; \\operatorname{Ric} dá o mesmo texto reto com espaçamento de operador.",
  },
  "scalar-curvature": {
    name: "Curvatura escalar",
    meaning: "Curvatura escalar: o traço completo do tensor de Ricci, um único número em cada ponto de uma variedade riemanniana.",
    usage: "Ela é definida por R = g^{ij} R_{ij} e, em dimensão dois, é igual ao dobro da curvatura gaussiana K. A ação de Einstein-Hilbert a integra, S = \\int R \\sqrt{-g}\\, d^4x, e o problema de Yamabe busca uma métrica conforme de R constante. Como um R isolado também designa os reais, uma relação ou um raio, muitos autores escrevem \\mathrm{Scal} ou s; nunca use R no lugar de \\mathbb{R} no mesmo artigo. Componha-a como um R itálico simples no modo matemático.",
  },
  "metric-tensor": {
    name: "Tensor métrico",
    meaning: "Componentes do tensor métrico, a forma simétrica positiva definida que determina comprimentos e ângulos em uma variedade.",
    usage: "O elemento de linha é escrito ds^2 = g_{ij}\\, dx^i dx^j, com soma implícita, e o comprimento de uma curva é \\int \\sqrt{g_{ij}\\dot x^i \\dot x^j}\\, dt. Na relatividade, a métrica é lorentziana e indexada g_{\\mu\\nu}, por exemplo a métrica de Minkowski \\eta_{\\mu\\nu}. Seu determinante aparece na forma de volume \\sqrt{\\det g}\\, dx^1 \\cdots dx^n, frequentemente abreviada \\sqrt{g}. Acrescente espaços finos com \\, entre a métrica e os diferenciais para que ds^2 = g_{ij}\\,dx^i\\,dx^j não fique apertado. Na forma matricial, ela costuma ser escrita (g_{ij}) ou simplesmente g.",
  },
  "inverse-metric": {
    name: "Métrica inversa",
    meaning: "Métrica inversa: a matriz inversa de g_{ij}, usada para elevar índices e formar traços e gradientes.",
    usage: "Ela é definida por g^{ij} g_{jk} = \\delta^i_k, então, em um referencial ortonormal, é igual à identidade. Elevar um índice a usa diretamente, v^i = g^{ij} v_j, e o gradiente de uma função tem componentes (\\nabla f)^i = g^{ij}\\partial_j f. O operador de Laplace-Beltrami é \\frac{1}{\\sqrt{g}}\\partial_i(\\sqrt{g}\\, g^{ij}\\partial_j f). Não confunda g^{ij} com o inverso de uma única componente; trata-se de uma entrada da matriz inversa, então g^{11} \\ne 1/g_{11}, a menos que a métrica seja diagonal.",
  },
  "exterior-derivative": {
    name: "Derivada exterior",
    meaning: "Derivada exterior de uma forma diferencial \\omega, que aumenta seu grau em um e generaliza o gradiente, o rotacional e o divergente.",
    usage: "O operador satisfaz d \\circ d = 0 e a regra de Leibniz graduada d(\\alpha \\wedge \\beta) = d\\alpha \\wedge \\beta + (-1)^k \\alpha \\wedge d\\beta para uma k-forma \\alpha. O teorema de Stokes se torna \\int_M d\\omega = \\int_{\\partial M} \\omega, e uma forma é fechada quando d\\omega = 0 e exata quando \\omega = d\\eta. Muitos estilos compõem o operador reto, \\mathrm{d}\\omega, para distingui-lo de uma variável d; qualquer que seja a escolha, use-a de forma consistente, inclusive em integrais como \\int f\\, dx.",
  },
  "wedge-product": {
    name: "Produto exterior",
    meaning: "Produto exterior de duas formas diferenciais, um produto antissimétrico que constrói formas de grau maior.",
    usage: "Para uma k-forma \\alpha e uma l-forma \\beta, ele é comutativo graduado, \\alpha \\wedge \\beta = (-1)^{kl} \\beta \\wedge \\alpha, então o produto de uma 1-forma por ela mesma é zero. As formas de volume são escritas dx^1 \\wedge \\cdots \\wedge dx^n. O \\wedge é um operador binário, então o TeX acrescenta um espaço médio dos dois lados; \\land produz o mesmo glifo e é melhor reservá-lo para o “e” lógico. Para a potência exterior ou um produto exterior grande sobre um conjunto de índices, use \\bigwedge, como em \\bigwedge^k V.",
  },
  "lie-derivative": {
    name: "Derivada de Lie",
    meaning: "Derivada de Lie ao longo do campo vetorial X, que mede como um tensor varia sob o fluxo gerado por X.",
    usage: "Em funções, é simplesmente \\mathcal{L}_X f = Xf; em campos vetoriais, é o colchete de Lie \\mathcal{L}_X Y = [X, Y]; e em formas, a fórmula mágica de Cartan dá \\mathcal{L}_X = d\\iota_X + \\iota_X d. Ao contrário de \\nabla_X, ela não precisa de conexão nem de métrica. Um campo de Killing satisfaz \\mathcal{L}_X g = 0. O L caligráfico é a escolha usual; \\pounds_X aparece em alguns textos de relatividade, mas \\mathcal{L} é mais claro. Evite confundi-la com uma lagrangiana \\mathcal{L} em artigos de física que usam as duas.",
  },
  "lie-bracket": {
    name: "Colchete de Lie",
    meaning: "Colchete de Lie de dois campos vetoriais: o campo vetorial que age sobre as funções por X(Yf) - Y(Xf).",
    usage: "O colchete é bilinear, antissimétrico e satisfaz a identidade de Jacobi [X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0, o que faz dos campos vetoriais uma álgebra de Lie. Em coordenadas, suas componentes são X^j\\partial_j Y^i - Y^j\\partial_j X^i. A mesma notação de colchetes designa o comutador AB - BA de matrizes ou de operadores quânticos. Os [ e ] simples bastam para argumentos curtos; para conteúdos altos, use \\left[ \\right] ou \\bigl[ \\bigr] para que os colchetes se ajustem ao tamanho. Ele mede quanto os fluxos de X e Y deixam de comutar, e os campos coordenados sempre satisfazem [\\partial_i, \\partial_j] = 0.",
  },
  "connection-form": {
    name: "Forma de conexão",
    meaning: "1-formas de conexão: uma matriz de 1-formas que descreve uma conexão em relação a um referencial escolhido do fibrado.",
    usage: "No método do referencial móvel de Cartan, com correferencial e^i, a primeira equação de estrutura para uma conexão sem torção é de^i = -\\omega^i_j \\wedge e^j. Para uma conexão métrica em um referencial ortonormal, a matriz é antissimétrica, \\omega_{ij} = -\\omega_{ji}. Os físicos chamam o mesmo objeto de conexão de spin \\omega^a{}_b. Use \\omega^i{}_j para escalonar os índices quando a ordem importar, e não confunda isso com uma forma simplética ou de Kähler, também escrita \\omega. Sob uma mudança de referencial, ela se transforma de modo não homogêneo, então, como os símbolos de Christoffel, não é um tensor.",
  },
  "curvature-form": {
    name: "Forma de curvatura",
    meaning: "2-formas de curvatura: uma matriz de 2-formas que codifica a curvatura de uma conexão em um dado referencial.",
    usage: "A segunda equação de estrutura de Cartan as define como \\Omega^i_j = d\\omega^i_j + \\omega^i_k \\wedge \\omega^k_j, ou, de forma compacta, \\Omega = d\\omega + \\omega \\wedge \\omega. Expandir no correferencial recupera o tensor de Riemann, \\Omega^i_j = \\tfrac12 R^i_{jkl}\\, e^k \\wedge e^l. A teoria de Chern-Weil constrói classes características como \\operatorname{tr}(\\Omega \\wedge \\Omega) a partir dessas formas. O \\Omega maiúsculo é reto por padrão; \\varOmega dá uma versão em itálico. A mesma letra também designa o espaço das formas \\Omega^k(M), então o contexto deve deixar o sentido claro.",
  },
  "geodesic": {
    name: "Geodésica",
    meaning: "Uma curva em uma variedade parametrizada por t; neste contexto, uma geodésica, a curva de aceleração covariante nula.",
    usage: "Uma geodésica satisfaz \\nabla_{\\dot\\gamma}\\dot\\gamma = 0, que em coordenadas se escreve \\ddot\\gamma^k + \\Gamma^k_{ij}\\dot\\gamma^i\\dot\\gamma^j = 0. Os dados iniciais \\gamma(0) = p e \\dot\\gamma(0) = v definem a aplicação exponencial \\exp_p(v) = \\gamma(1). Use \\dot{\\gamma} e \\ddot{\\gamma} para derivadas em relação ao tempo; \\gamma'(t) é a alternativa quando t não é o tempo. Escreva \\dot\\gamma^k em vez de \\dot{\\gamma^k} para que o ponto fique apenas sobre a letra, e mantenha \\gamma minúsculo, pois \\Gamma é reservado aos símbolos de Christoffel. Em uma esfera redonda, as geodésicas são arcos de círculos máximos.",
  },
  "parallel-transport": {
    name: "Transporte paralelo",
    meaning: "Transporte paralelo ao longo da curva \\gamma: a aplicação linear que leva vetores de um espaço tangente a outro sem girá-los.",
    usage: "Ele é uma aplicação P_\\gamma: T_{\\gamma(0)}M \\to T_{\\gamma(1)}M e, para uma conexão compatível com a métrica, é uma isometria. O transporte ao longo de laços fechados gera o grupo de holonomia, cuja não trivialidade reflete a curvatura. Alguns textos escrevem \\tau_\\gamma, \\Pi_\\gamma ou P^\\gamma_{t \\leftarrow s} para registrar as extremidades. Para um subíndice de uma só letra, as chaves em P_{\\gamma} são opcionais, mas mantenha-as quando o subíndice crescer, como em P_{\\gamma|[0,t]}. Um campo vetorial V é paralelo ao longo de \\gamma quando \\nabla_{\\dot\\gamma} V = 0, e P_\\gamma leva V(0) em V(1). Em torno de um pequeno laço, o transporte difere da identidade por um termo proporcional à curvatura.",
  },
};

export default text;
