import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/functions/<slug>. */
const text: SymbolPageTranslations = {
  "function": {
    name: "Função",
    meaning: "Função f aplicada a um argumento x, a notação básica para o valor de uma função.",
    usage: "Nomes de uma só letra, como f, g e h, são compostos em itálico, o que é correto para símbolos que representam funções. Funções com nomes de várias letras são diferentes: escreva \\sin x ou \\log x e, para nomes próprios, use \\operatorname{softmax}(z), para que saiam em tipo reto em vez de um produto de letras itálicas. Em otimização, f(x) costuma ser a função objetivo, como em \\min_x f(x) sujeito a restrições. Quando o argumento é alto, use \\left( \\right) ou \\bigl( \\bigr) para dimensionar os parênteses. Para argumentos vetoriais, é comum f(\\mathbf{x}) com x em negrito.",
  },
  "function-definition": {
    name: "Definição de função",
    meaning: "Declara f como uma função do domínio A no contradomínio B.",
    usage: "Essa linha de assinatura abre a maioria das definições em análise e álgebra, muitas vezes seguida da regra para os elementos, x \\mapsto x^2. Digitar dois-pontos simples dá espaçamento de relação dos dois lados, o que fica largo demais; \\colon dá o espaçamento justo de pontuação, f\\colon A \\to B. \\to e \\rightarrow produzem a mesma seta; \\longrightarrow dá destaque em fórmulas destacadas. Combine-a com \\mapsto para a regra nos elementos: f\\colon \\mathbb{R} \\to \\mathbb{R}, x \\mapsto x^2. Diagramas com várias aplicações entre vários objetos ficam melhores com um ambiente próprio para diagramas comutativos.",
  },
  "composition": {
    name: "Composição",
    meaning: "Composição de f com g, ou seja, aplicar primeiro g e depois f ao resultado.",
    usage: "A composição se lê da direita para a esquerda: (f \\circ g)(x) = f(g(x)), e ela é associativa, mas em geral não comutativa. \\circ é um operador binário, então o espaçamento em volta é automático. Não use um \\circ na linha de base para graus, que precisam de ^{\\circ}, e não o confunda com \\cdot ou \\bullet, que sugerem multiplicação. A composição repetida costuma ser escrita f^{\\circ n} para evitar ambiguidade com as potências f^n. A regra da cadeia é a fórmula clássica que a envolve: (f \\circ g)'(x) = f'(g(x))\\,g'(x), com a derivada interna à direita.",
  },
  "inverse-function": {
    name: "Função inversa",
    meaning: "Função inversa de f, a aplicação que desfaz f, de modo que f^{-1}(f(x)) = x.",
    usage: "Só bijeções têm inversa em todo o contradomínio, mas f^{-1}(B) também é usado para a pré-imagem de um conjunto B por qualquer função, um conceito diferente que não exige invertibilidade. O expoente -1 não significa recíproco: f^{-1}(x) difere de 1/f(x), uma confusão comum entre estudantes que também afeta \\sin^{-1}. As chaves são necessárias porque -1 tem dois tokens. O teorema da função inversa dá a derivada (f^{-1})'(y) = 1/f'(x), onde y = f(x), desde que f'(x) \\neq 0.",
  },
  "image": {
    name: "Imagem",
    meaning: "Imagem de f, o conjunto de todos os valores que f de fato assume, escrita com um «Im» reto.",
    usage: "Em álgebra linear, \\text{Im}(T) é o espaço coluna da aplicação, e o teorema do núcleo e da imagem diz \\dim\\ker T + \\dim \\text{Im}\\, T = \\dim V. Atenção: \\Im é outro comando, que dá um I fraktur usado para a parte imaginária de um número complexo. Muitos autores escrevem \\operatorname{im} em minúsculas ou declaram \\DeclareMathOperator{\\im}{im}, que tem o espaçamento correto e não herda o itálico do texto de teoremas como acontece com \\text. A notação de conjunto f(A) é uma alternativa quando se quer a imagem de um subconjunto específico, e não de todo o domínio.",
  },
  "kernel": {
    name: "Núcleo",
    meaning: "Núcleo de f: tudo o que f leva em zero, um subespaço ou subgrupo normal.",
    usage: "\\ker é um operador predefinido, então sai em tipo reto com o espaçamento certo: \\ker T = \\{v \\in V \\mid T(v) = 0\\}. Um homomorfismo é injetor exatamente quando seu núcleo é trivial, e o primeiro teorema do isomorfismo afirma G/\\ker\\varphi \\cong \\operatorname{im}\\varphi. Os parênteses são opcionais para um único símbolo, \\ker A. Em álgebra linear o núcleo também é chamado de espaço nulo, às vezes escrito N(A) ou \\operatorname{null}(A). Não há operador predefinido para a imagem que faça par com ele, então declare \\im ou use \\operatorname{im}.",
  },
  "domain": {
    name: "Domínio",
    meaning: "Domínio de f, o conjunto de entradas nas quais a função está definida.",
    usage: "A análise convexa o usa bastante: \\operatorname{dom} f = \\{x \\mid f(x) < \\infty\\} é o domínio efetivo de uma função convexa com valores estendidos. \\text{dom} sai em tipo reto, mas pode virar itálico num ambiente de teorema e não tem espaçamento de operador; \\operatorname{dom} evita os dois problemas. Numa assinatura f\\colon A \\to B, A já é o domínio, então \\text{dom}(f) é mais útil quando o domínio é implícito ou parcial, como para operadores ilimitados em espaços de Hilbert. Alguns textos usam D(f) ou D_f, então siga a convenção da sua área.",
  },
  "codomain": {
    name: "Contradomínio",
    meaning: "Contradomínio de f, o conjunto-alvo declarado para os valores da função.",
    usage: "Em f\\colon A \\to B o contradomínio é B, que pode ser maior que a imagem; f é sobrejetora exatamente quando \\text{Im}(f) = \\text{cod}(f). A teoria das categorias escreve \\operatorname{cod} f ao lado de \\operatorname{dom} f para o alvo e a origem de um morfismo. Como em outros rótulos de texto, \\operatorname{cod} dá melhor espaçamento e evita o vazamento de itálico em enunciados de teoremas. Alguns autores escrevem \\operatorname{codom} por extenso para maior clareza. Distinguir contradomínio de conjunto de valores importa, porque alguns livros usam a palavra «range» para o contradomínio e outros para a imagem.",
  },
  "range": {
    name: "Conjunto imagem (range)",
    meaning: "Conjunto imagem de f, que em geral designa o conjunto dos valores que f de fato atinge.",
    usage: "O termo é ambíguo: a maioria dos textos modernos trata «range» como a imagem, mas alguns mais antigos o usam para o contradomínio, então declare sua definição. Em álgebra linear, \\text{range}(A) é o espaço coluna, e o teorema fundamental da álgebra linear diz que ele é o complemento ortogonal do espaço nulo de A^{\\top}. Compor com \\operatorname{range} dá letras retas com espaçamento de operador; especialistas em teoria de operadores costumam escrever \\mathcal{R}(A) ou \\operatorname{ran} T. \\text{range} funciona, mas segue a fonte do texto ao redor, inclusive o itálico.",
  },
  "surjective": {
    name: "Função sobrejetora",
    meaning: "Seta de ponta dupla, que marca uma aplicação ou morfismo sobrejetor.",
    usage: "Algebristas escrevem f\\colon A \\twoheadrightarrow B para dizer que f é sobrejetora, por exemplo a aplicação quociente G \\twoheadrightarrow G/N. Ela faz par com \\hookrightarrow para injeções, de modo que uma sequência exata curta 0 \\to A \\hookrightarrow B \\twoheadrightarrow C \\to 0 mostra as duas de relance. Há uma versão para a esquerda, \\twoheadleftarrow, para aplicações desenhadas no sentido oposto. A seta é uma relação, então o espaçamento em volta é automático. Evite usá-la para indicar convergência ou implicação; ali o padrão é \\to e \\implies.",
  },
  "restriction": {
    name: "Restrição",
    meaning: "Restrição de f a um subconjunto A, que mantém a regra mas reduz o domínio.",
    usage: "A restrição f|_A mantém a regra mas reduz o domínio, de modo que f|_A\\colon A \\to B. Uma barra simples é curta e o subscrito pode parecer solto dela; muitos autores escrevem f\\big|_A para uma barra mais alta, ou usam a seta \\restriction, que parece meio arpão. Não confunda isso com a barra de avaliação, F(x)\\big|_a^b, que usa a mesma forma para outro fim. Restrições são comuns em topologia, onde se verifica a continuidade de f|_U em abertos, e na teoria de feixes, onde s|_U restringe uma seção a um aberto menor.",
  },
  "function-evaluation": {
    name: "Avaliação de função",
    meaning: "Afirma que a função f leva a entrada x no valor de saída y.",
    usage: "A equação é a leitura da função no nível dos elementos: y é a imagem de x, também escrita x \\mapsto y. Em cursos de álgebra, resolver f(x) = y em x é como se encontram funções inversas, dando x = f^{-1}(y). O espaçamento em volta de = é automático, então evite acrescentar espaços manuais. Para uma lista de valores, alinhe várias equações com o ambiente align, colocando & antes de cada sinal de igual. Quando o nome da função tem várias letras, use \\operatorname para que não fique em itálico: \\operatorname{relu}(x) = y em vez de relu(x) = y.",
  },
  "piecewise-function": {
    name: "Função definida por partes",
    meaning: "Definição por partes com o ambiente cases, que dá regras diferentes em intervalos diferentes.",
    usage: "Dentro de cases, cada linha contém um valor, um & e depois sua condição, e as linhas terminam com \\; o LaTeX acrescenta a chave esquerda automaticamente e nenhum delimitador à direita. Usos típicos são o valor absoluto, a ativação ReLU, a função sinal e o degrau de Heaviside. Coloque palavras em \\text{}, como em \\text{se } x > 0, para que saiam em tipo reto com espaçamento normal. Frações nas linhas são compostas em estilo de texto por padrão, então use \\dfrac quando parecerem pequenas demais. Verifique se as condições cobrem o domínio sem sobreposição, muitas vezes terminando com uma linha \\text{caso contrário}.",
  },
};

export default text;
