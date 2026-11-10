import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/math/<slug>. */
const text: SymbolPageTranslations = {
  "addition": {
    name: "Adição",
    meaning: "Soma duas quantidades; é o sinal de mais binário, usado também como sinal unário para indicar números positivos.",
    usage: "Digitar + no modo matemático produz um operador binário, então o TeX coloca automaticamente um espaço médio de cada lado, como em a + b. Quando o mais inicia uma expressão ou vem depois de outro operador ou de uma relação, como em -(+3) ou x = +1, o TeX o trata como unário e remove o espaço. Numa equação multline ou split que quebra antes de um mais, escreva {}+ no início da linha de continuação para restaurar o espaçamento binário. Para um mais sobrescrito, como no íon Na^+ ou no conjunto \\mathbb{R}^+, não são necessárias chaves. Evite \\oplus, a menos que você queira dizer soma direta ou XOR, que é outro símbolo.",
  },
  "subtraction": {
    name: "Subtração",
    meaning: "Subtrai uma quantidade de outra; no modo matemático, o caractere de hífen se torna um verdadeiro sinal de menos, e não um hífen.",
    usage: "Dentro do modo matemático, o hífen é convertido em um sinal de menos propriamente dito, mais longo que o hífen do texto e com espaçamento de operador binário em a - b. Fora do modo matemático você obtém apenas um hífen curto, então um número negativo no texto corrido deve ser escrito como $-5$, e não digitado diretamente. Quando o menos é unário, como em -x ou e^{-t}, o TeX remove o espaço ao redor automaticamente. Não o confunda com \\setminus, que denota a diferença de conjuntos A \\setminus B, nem com o traço meia-risca usado em intervalos. Para um menos sobrescrito, como em x^{-1} ou Cl^-, as chaves só são necessárias quando vem mais de um caractere.",
  },
  "multiplication": {
    name: "Multiplicação",
    meaning: "Produz o sinal de vezes ×, usado para multiplicação, para o produto vetorial e para produtos cartesianos.",
    usage: "Na aritmética, \\times escreve 3 \\times 4 ou a notação científica, como 6.02 \\times 10^{23}. Em álgebra linear e em física, é o produto vetorial, \\mathbf{a} \\times \\mathbf{b}, e também indica as dimensões de matrizes, como uma matriz m \\times n. A teoria dos conjuntos o usa para o produto cartesiano A \\times B. Compare com \\cdot, a escolha habitual para o produto escalar e para a multiplicação entre variáveis, e com o asterisco *, que normalmente indica convolução. O operador grande \\bigtimes não existe no LaTeX padrão, então, para um produto cartesiano indexado, muitos autores escrevem \\prod.",
  },
  "division": {
    name: "Divisão",
    meaning: "Produz o óbelo ÷, o sinal de divisão da escola, com um ponto acima e outro abaixo de um traço.",
    usage: "O óbelo aparece em listas de exercícios de aritmética, em expressões no estilo de calculadora e em algumas tabelas, como em 12 \\div 4 = 3. A matemática de pesquisa quase nunca o usa; em vez disso, escreva uma fração com \\frac{12}{4}, uma barra em linha 12/4 ou dois-pontos para razões. Em alguns países o óbelo é evitado por completo, e a ISO 80000-2 desaconselha seu uso. Como \\div é um operador binário, o TeX o espaça como + e -. Não o confunda com \\mid nem com a barra /, que significam, respectivamente, “divide” e quociente em teoria dos números e teoria de grupos, por exemplo G/N.",
  },
  "fraction": {
    name: "Fração",
    meaning: "Compõe uma fração empilhada, com o numerador a sobre o denominador b, separados por um traço horizontal.",
    usage: "\\frac recebe dois argumentos, o numerador e o denominador, então \\frac{a}{b} é apenas um modelo para qualquer razão, como \\frac{dy}{dx} ou \\frac{n(n+1)}{2}. Na matemática em linha ela encolhe para o tamanho de texto, o que pode ficar apertado; \\dfrac força o tamanho de exibição e \\tfrac força o tamanho de texto. Para razões simples em linha, uma barra, a/b, costuma ser mais legível que uma fração empilhada. Coeficientes binomiais usam \\binom{n}{k}, e não \\frac sem traço. Frações contínuas ficam mais limpas com \\cfrac, que mantém todos os níveis em tamanho cheio. Quando uma fração está entre parênteses, use \\left( e \\right) para que eles cresçam até a altura dela.",
  },
  "square-root": {
    name: "Raiz quadrada",
    meaning: "Desenha um radical sobre o argumento, dando a raiz quadrada principal de x.",
    usage: "\\sqrt estica automaticamente o radical para cobrir o que estiver entre chaves, então \\sqrt{x^2 + y^2} ganha um vínculo mais longo e um sinal mais alto. É a forma padrão de escrever a norma euclidiana, a fórmula quadrática e o desvio padrão como \\sqrt{\\operatorname{Var}(X)}. Radicais sobre argumentos de alturas diferentes podem ficar desiguais; acrescentar \\vphantom{y} ou \\mathstrut dentro deles faz raízes vizinhas combinarem. Para um índice, como na raiz cúbica, use o argumento opcional \\sqrt[3]{x}. No texto em linha, x^{1/2} às vezes é mais claro que um radical sobre uma fração alta.",
  },
  "n-th-root": {
    name: "Raiz n-ésima",
    meaning: "Escreve a raiz n-ésima de x, com o índice n colocado na abertura do sinal de radical.",
    usage: "O índice vai entre colchetes antes do radicando, então \\sqrt[3]{8} = 2 é uma raiz cúbica e \\sqrt[n]{x} denota x^{1/n}. Ela aparece no teste da raiz para séries, \\limsup \\sqrt[n]{|a_n|}, e em médias geométricas \\sqrt[n]{x_1 x_2 \\cdots x_n}. O TeX às vezes posiciona mal o índice, sobretudo quando ele é alto; \\leftroot{} e \\uproot{} o deslocam, como em \\sqrt[\\leftroot{-2}\\uproot{2}n]{x}. Mantenha o índice curto: para expoentes complicados, escrever a potência x^{1/(k+1)} é mais legível que um radical.",
  },
  "summation": {
    name: "Somatório",
    meaning: "Soma uma sequência de termos com o índice i variando de 1 a n, usando o operador grande sigma maiúsculo.",
    usage: "\\sum é um operador grande: na matemática em destaque, os limites i=1 e n ficam abaixo e acima do sigma, enquanto na matemática em linha vão para o lado como subscrito e sobrescrito. Acrescente \\limits para forçar limites empilhados em linha, ou \\nolimits para limites laterais em destaque, embora limites empilhados em linha possam atrapalhar o espaçamento entre linhas. Para condições em várias linhas sob o sigma, use \\substack{0 \\le i \\le m \\\\ 0 < j < n}. Não use a letra grega \\Sigma para somatórios; ela é um símbolo comum menor, sem espaçamento de operador. Usos típicos incluem séries, esperanças e \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}.",
  },
  "product": {
    name: "Produtório",
    meaning: "Multiplica uma sequência de fatores para i de 1 a n, usando o operador grande pi maiúsculo.",
    usage: "\\prod se comporta como \\sum: os limites ficam empilhados acima e abaixo no estilo de destaque e ao lado no texto em linha. Ele escreve fatoriais como n! = \\prod_{i=1}^{n} i, verossimilhanças L(\\theta) = \\prod_{i} p(x_i \\mid \\theta) e produtos de Euler sobre os primos. Não o substitua pela letra grega \\Pi, que é um símbolo comum de tamanho fixo. A versão de cabeça para baixo, \\coprod, denota coprodutos em teoria das categorias. Quando o produtório é uma verossimilhança da qual você vai tomar o log, é comum mostrar explicitamente a conversão em soma, já que \\log transforma \\prod em \\sum.",
  },
  "integral": {
    name: "Integral",
    meaning: "Escreve o sinal de integral definida com limite inferior a e limite superior b.",
    usage: "Ao contrário de \\sum, os limites de \\int ficam ao lado por padrão, mesmo na matemática em destaque; acrescente \\limits, como em \\int\\limits_a^b, se o seu estilo exigir limites empilhados. Coloque um espaço fino \\, antes do diferencial, como em \\int_a^b f(x)\\,dx, e alguns autores usam um d reto com \\mathrm{d}x. Integrais múltiplas têm comandos próprios, \\iint e \\iiint, que espaçam os sinais melhor do que repetir \\int. Integrais de contorno usam \\oint. Para a barra de avaliação depois da integração, escreva \\Big|_a^b ou \\left. F(x) \\right|_a^b.",
  },
  "limit": {
    name: "Limite",
    meaning: "Escreve o operador de limite com x tendendo ao infinito colocado sob “lim”.",
    usage: "\\lim é um nome de operador predefinido, então é impresso em romano reto e, na matemática em destaque, coloca o subscrito x \\to \\infty logo abaixo. Em linha, o subscrito vai para o lado para manter organizado o espaçamento entre linhas. A seta usada é \\to, um atalho curto de \\rightarrow. Limites laterais são escritos x \\to 0^+ ou x \\downarrow 0. Os operadores relacionados \\limsup e \\liminf funcionam da mesma maneira. Se precisar de uma palavra própria do tipo limite com subscritos empilhados, defina-a com \\DeclareMathOperator* (o asterisco ativa os limites) em vez de escrever \\text{lim}.",
  },
  "infinity": {
    name: "Infinito",
    meaning: "Desenha a lemniscata ∞, que representa uma quantidade ilimitada ou um limite que cresce sem limitação.",
    usage: "Você verá \\infty em limites como x \\to \\infty, em integrais impróprias \\int_0^\\infty e^{-x}\\,dx e em limites de séries \\sum_{n=1}^{\\infty}. Ele também nomeia a norma do supremo \\|f\\|_\\infty, o espaço L^\\infty e as funções suaves C^\\infty. Escreva -\\infty e +\\infty com o sinal junto; o TeX espaça corretamente o sinal como unário. Lembre que \\infty não é um número real, então um intervalo que o contém deve ser aberto nessa extremidade, como em [0, \\infty). Para a reta estendida, \\overline{\\mathbb{R}} é uma notação comum.",
  },
  "approximately-equal": {
    name: "Aproximadamente igual",
    meaning: "Afirma que dois valores são aproximadamente iguais, como uma estimativa numérica ou uma constante arredondada.",
    usage: "Use \\approx para aproximações numéricas como \\pi \\approx 3.14159 e para expansões de primeira ordem como \\sin x \\approx x para x pequeno. É uma relação, então o TeX lhe dá o espaçamento largo do =. Vários símbolos parecidos têm outros significados: \\simeq costuma indicar assintoticamente igual ou isomorfo, \\sim indica assintótico ou “tem distribuição”, \\cong denota congruência ou isomorfismo, e \\approxeq é uma variante mais rara. Em textos de finanças e engenharia, \\approx em geral marca resultados arredondados; informe a precisão, por exemplo com três casas decimais, para que o leitor saiba quão grosseira é a estimativa.",
  },
  "not-equal": {
    name: "Sinal de diferente",
    meaning: "Diz que duas quantidades não são iguais; é a negação do sinal de igual.",
    usage: "\\neq e seu atalho curto \\ne produzem o mesmo sinal de igual cortado, e qualquer um pode ser usado. Ele aparece em condições como x \\neq 0, em afirmações de distinção i \\neq j e, em artigos voltados à programação, como o teste de desigualdade. Escrever \\not= também funciona, mas a posição do traço pode diferir um pouco do glifo dedicado. Em textos de computação, evite digitar != no modo matemático; isso imprime um ponto de exclamação seguido de um sinal de igual. Para “não equivalente” ou “não congruente”, use \\not\\equiv ou \\ncong em vez de \\neq.",
  },
  "less-than-or-equal": {
    name: "Menor ou igual",
    meaning: "Expressa que o lado esquerdo é menor ou igual ao lado direito.",
    usage: "\\leq tem um atalho mais curto, \\le, e ambos imprimem o mesmo glifo com uma única barra horizontal. Digitar <= no modo matemático produz dois símbolos separados, então use sempre o comando. Desigualdades como a desigualdade triangular \\|x+y\\| \\leq \\|x\\|+\\|y\\| e limitações como 0 \\leq p \\leq 1 são o seu trabalho do dia a dia. A variante inclinada \\leqslant é preferida em algumas tradições europeias e russas, e \\leqq tem barra dupla. Em teoria da ordem e de reticulados, \\leq nomeia uma ordem parcial, enquanto \\preceq é usado para pré-ordens mais gerais.",
  },
  "greater-than-or-equal": {
    name: "Maior ou igual",
    meaning: "Expressa que o lado esquerdo é maior ou igual ao lado direito.",
    usage: "\\geq e seu atalho \\ge são intercambiáveis. Digitar >= no modo matemático imprime dois caracteres separados, então use o comando. Contextos comuns são cotas inferiores como n \\geq 1, a desigualdade entre as médias aritmética e geométrica e restrições de otimização como x_i \\geq 0. A forma inclinada \\geqslant é preferida por algumas revistas, e \\geqq tem barra dupla. Em teoria da ordem, a relação inversa \\succeq generaliza \\geq. Sempre que possível, mantenha uma cadeia de desigualdades apontando para um só lado, pois a \\leq b \\leq c se lê mais facilmente do que misturar \\leq e \\geq.",
  },
  "implies": {
    name: "Implicação",
    meaning: "Escreve uma seta dupla longa para a implicação lógica, indicando que o enunciado da esquerda implica o da direita.",
    usage: "\\implies produz \\Longrightarrow cercado de espaçamento extra largo, adequado para implicações entre enunciados inteiros, como em x > 2 \\implies x^2 > 4. Para a implicação entre fórmulas dentro de uma expressão lógica, muitos lógicos preferem as setas mais curtas \\Rightarrow ou \\to, sem o espaço amplo. A recíproca é \\impliedby. Em demonstrações, evite empilhar vários \\implies seguidos ao longo da página; frases completas com “portanto” costumam ficar mais legíveis. Na notação da lógica proposicional, p \\to q é mais comum que p \\implies q.",
    example: "x^2 = 4 \\implies x = 2 \\text{ ou } x = -2",
  },
  "if-and-only-if": {
    name: "Equivalência (se e somente se)",
    meaning: "Escreve uma seta dupla longa com duas pontas para a equivalência lógica, lida “se e somente se”.",
    usage: "\\iff produz \\Longleftrightarrow com espaçamento extra largo dos dois lados. Ele liga dois enunciados que se implicam mutuamente, como num teorema do tipo n \\text{ é par} \\iff n^2 \\text{ é par}. Textos de lógica costumam preferir \\leftrightarrow ou \\Leftrightarrow para o bicondicional dentro de fórmulas, reservando \\iff para enunciados em prosa. Por causa desse espaçamento, \\iff fica folgado demais dentro de subscritos compactos ou de condições na notação de conjuntos. Não o confunda com \\equiv, que significa identicamente igual ou côngruo módulo n.",
  },
  "for-all": {
    name: "Quantificador universal",
    meaning: "Produz o quantificador universal ∀, lido “para todo” ou “para cada”.",
    usage: "\\forall inicia enunciados quantificados universalmente, como na definição épsilon-delta \\forall \\varepsilon > 0\\ \\exists \\delta > 0. O TeX o trata como um símbolo comum, então não há espaço automático depois da variável ligada; acrescente \\, ou \\ ou um separador como dois-pontos ou ponto, conforme a sua convenção. Em demonstrações com muito texto, muitos guias de estilo preferem escrever “para todo” por extenso em vez de \\forall. No cálculo lambda tipado e na teoria de tipos, ele também introduz tipos polimórficos, por exemplo \\forall \\alpha.\\, \\alpha \\to \\alpha.",
  },
  "exists": {
    name: "Quantificador existencial",
    meaning: "Produz o quantificador existencial ∃, lido “existe” ou “para algum”.",
    usage: "\\exists afirma que pelo menos um elemento satisfaz uma propriedade, como em \\exists x \\in \\mathbb{R} : x^2 = 2. A unicidade se escreve \\exists! (existe exatamente um), e \\nexists dá o símbolo negado, “não existe”. Assim como \\forall, é um símbolo comum, então insira um espaço fino ou dois-pontos depois da variável ligada para facilitar a leitura. A ordem dos quantificadores importa: \\forall x\\, \\exists y é diferente de \\exists y\\, \\forall x, então mantenha-os na sequência pretendida. Em textos de lógica formal, parênteses em torno do escopo, \\exists x\\,(P(x)), evitam ambiguidade.",
  },
  "element-of": {
    name: "Pertinência",
    meaning: "Indica pertinência: o elemento à esquerda pertence ao conjunto à direita.",
    usage: "\\in é a relação básica de pertinência, como em x \\in \\mathbb{R} ou n \\in \\mathbb{N}, e recebe espaçamento de relação. Seu espelho \\ni se lê “contém como elemento”, e \\notin é a negação. Não o confunda com \\epsilon nem com \\varepsilon, letras gregas de aparência semelhante mas com espaçamento e significado diferentes. Em somatórios e na notação de conjuntos por compreensão, ele liga o índice, como em \\sum_{x \\in S} f(x) ou \\{x \\in X : f(x) > 0\\}. Para relações de inclusão entre dois conjuntos, use \\subseteq, e não \\in.",
  },
  "not-element-of": {
    name: "Não pertinência",
    meaning: "Indica não pertinência: o elemento à esquerda não pertence ao conjunto dado.",
    usage: "\\notin é uma versão cortada própria de \\in, composta como relação, como em \\sqrt{2} \\notin \\mathbb{Q}. Escrever \\not\\in dá um resultado parecido, mas \\notin posiciona melhor o traço e é a escolha padrão. Seus companheiros naturais são \\in e \\ni, e para inclusões negadas você usaria \\not\\subset ou \\nsubseteq. Frases típicas incluem demonstrações por absurdo e descrições de complementares, como x \\in A^c \\iff x \\notin A. Em quantificadores, \\forall x \\notin S é uma abreviação aceitável, mas explicitar o domínio é mais claro.",
  },
  "subset": {
    name: "Subconjunto",
    meaning: "Mostra que um conjunto está contido em outro; muitas vezes lido como subconjunto próprio ou estrito.",
    usage: "As convenções variam: alguns autores usam \\subset para qualquer subconjunto, outros o reservam para subconjuntos próprios e usam \\subseteq quando a igualdade é permitida. Para não deixar ambiguidade, muitos artigos escrevem \\subseteq para “subconjunto ou igual” e \\subsetneq para “subconjunto próprio”, e enunciam a convenção uma vez. A relação inversa é \\supset. Enunciados típicos incluem \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} e inclusões de subespaços em álgebra linear. A negação \\not\\subset funciona, e \\nsubseteq dá um glifo negado mais limpo para “subconjunto ou igual”. Qualquer que seja a leitura adotada, evite alternar entre as duas num mesmo documento.",
  },
  "union": {
    name: "União",
    meaning: "Forma a união de conjuntos: todos os elementos que pertencem a pelo menos um deles.",
    usage: "\\cup é um operador binário, como em A \\cup B, e recebe espaçamento médio dos dois lados. Para a união de uma família indexada, use o operador grande \\bigcup, que empilha os limites no modo de destaque: \\bigcup_{i=1}^{\\infty} A_i. A união disjunta costuma ser escrita \\sqcup ou \\dot\\cup. Em probabilidade, A \\cup B corresponde ao evento “A ou B”, o que dá P(A \\cup B) = P(A) + P(B) - P(A \\cap B). Não use a letra U nem o \\lor lógico no lugar da união de conjuntos.",
  },
  "intersection": {
    name: "Interseção",
    meaning: "Forma a interseção de conjuntos: os elementos comuns a todos eles.",
    usage: "\\cap é um operador binário escrito entre conjuntos, como em A \\cap B, enquanto \\bigcap é a versão de operador grande para famílias, \\bigcap_{n} U_n. Em probabilidade, representa eventos conjuntos, de modo que P(A \\cap B) = P(A)P(B) define independência. Sua contraparte lógica é \\land (e), e o ínfimo de reticulados \\wedge parece semelhante, mas é outro glifo. As leis de De Morgan o combinam com a união: (A \\cup B)^c = A^c \\cap B^c. Se A \\cap B = \\emptyset, os conjuntos são disjuntos.",
  },
  "empty-set": {
    name: "Conjunto vazio",
    meaning: "Denota o conjunto vazio, o único conjunto que não tem nenhum elemento.",
    usage: "\\emptyset imprime o glifo padrão do conjunto vazio, um círculo cortado por um traço. Muitos matemáticos preferem a forma mais arredondada \\varnothing, que se distingue de um zero cortado e é comum em textos modernos. Escolha uma e use-a de forma consistente. Usos típicos são a disjunção A \\cap B = \\emptyset e resultados da notação por compreensão. Não o confunda com a letra escandinava Ø nem com \\phi e \\varphi. Escrever \\{\\} para o conjunto vazio também é aceitável, mas note que \\{\\emptyset\\} é um conjunto com um elemento.",
  },
  "partial-derivative": {
    name: "Derivada parcial",
    meaning: "Escreve o ∂ curvo das derivadas parciais, usado também para fronteiras de conjuntos em topologia.",
    usage: "\\partial aparece em derivadas parciais como \\frac{\\partial f}{\\partial x} e em derivadas mistas \\frac{\\partial^2 f}{\\partial x\\,\\partial y}. Em topologia e geometria, \\partial A é a fronteira de um conjunto ou o bordo de uma variedade, usado no teorema de Stokes \\int_{\\partial M} \\omega = \\int_M d\\omega. Formas curtas com subscrito, como \\partial_x f e \\partial_t u, são comuns em artigos de EDP. Não o confunda com \\delta (variação) nem com d (derivada total). Colocar um espaço fino entre os fatores \\partial no denominador melhora o espaçamento.",
  },
  "nabla": {
    name: "Nabla",
    meaning: "Escreve o nabla ∇, o operador diferencial vetorial do gradiente, do divergente e do rotacional.",
    usage: "\\nabla f é o gradiente, \\nabla \\cdot \\mathbf{F} o divergente, \\nabla \\times \\mathbf{F} o rotacional, e \\nabla^2 ou \\Delta o laplaciano. Em aprendizado de máquina, \\nabla_\\theta L(\\theta) denota o gradiente de uma função de perda em relação aos parâmetros, como na descida do gradiente \\theta \\leftarrow \\theta - \\eta \\nabla_\\theta L. Geômetras diferenciais usam \\nabla para uma conexão ou derivada covariante, \\nabla_X Y. É um símbolo comum, então nenhum espaçamento extra é inserido. Alguns autores o põem em negrito com \\boldsymbol{\\nabla} para destacar que é um operador vetorial.",
  },
  "plus-minus": {
    name: "Mais ou menos",
    meaning: "Produz o sinal de mais ou menos ±, para duas alternativas ou para uma tolerância em torno de um valor.",
    usage: "\\pm aparece na fórmula quadrática x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a} e na incerteza de medidas como 9.81 \\pm 0.02. Sua contraparte \\mp (menos ou mais) é usada quando os sinais precisam se alternar juntos, como em \\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b. É um operador binário, então o TeX o espaça como o +. Em tabelas de resultados experimentais, alinhe os números em torno do sinal \\pm para facilitar a leitura. Textos de finanças o usam para faixas, como um retorno de 5\\% \\pm 2\\%.",
  },
  "dot-product": {
    name: "Produto escalar",
    meaning: "Coloca um ponto centralizado, usado para o produto escalar e para a multiplicação entre fatores.",
    usage: "\\cdot é um operador binário posicionado no eixo matemático, como em \\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i e em produtos como 2 \\cdot 3. Ele também marca um argumento genérico, como em \\|\\cdot\\| ou f(\\cdot). Não use um ponto final, que fica na linha de base, nem \\bullet, que é maior. Para reticências entre fatores multiplicados, use \\cdots, centralizado verticalmente, e não \\ldots, próprio de listas. Use \\times para produtos vetoriais e notação científica, reservando \\cdot para produtos escalares e internos.",
  },
};

export default text;
