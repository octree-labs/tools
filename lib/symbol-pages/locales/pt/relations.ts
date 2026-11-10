import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/relations/<slug>. */
const text: SymbolPageTranslations = {
  "less-than": {
    name: "Sinal de menor que",
    meaning: "A relação “menor que”, que afirma que a quantidade à esquerda é estritamente menor que a da direita.",
    usage: "Digitado diretamente no modo matemático, < vira uma relação com o espaço adequado em volta, como em 0 < x < 1 ou em uma desigualdade estrita de uma demonstração épsilon-delta. Não o use como colchete angular para produtos internos; para isso existe \\langle. No modo texto, com a antiga codificação de fonte padrão, < pode imprimir um ponto de exclamação invertido, então escreva \\textless ou use o modo matemático. Sua forma não estrita é \\leq (ou \\le), e a negação é \\not< ou \\nless. Renderizadores web como o MathJax também aceitam \\lt, o que ajuda em HTML.",
  },
  "greater-than": {
    name: "Sinal de maior que",
    meaning: "A relação “maior que”, que indica que a quantidade à esquerda é estritamente maior que a da direita.",
    usage: "No modo matemático, > é um símbolo de relação e recebe automaticamente o espaçamento de relação, então x > 0 dispensa espaços manuais. Ele fecha desigualdades estritas como \\lambda_{\\max} > 0 ou a condição n > N nas definições de limite. Não deve ser usado como colchete angular de fechamento; para isso existe \\rangle. No modo texto, com a codificação de fonte antiga, o caractere pode sair como um ponto de interrogação invertido, então use \\textgreater ou o modo matemático. Comandos relacionados são \\geq (ou \\ge), \\gg para “muito maior” e \\ngtr para a negação.",
  },
  "equivalent": {
    name: "Sinal de equivalência",
    meaning: "Relação de três traços que significa identicamente igual, congruente módulo n ou logicamente equivalente.",
    usage: "A teoria dos números escreve a \\equiv b \\pmod{n} para a congruência, a análise escreve f \\equiv 0 para dizer que uma função se anula em todo ponto e a lógica o usa para a equivalência lógica de fórmulas. Combine-o com \\pmod{n} para o módulo entre parênteses ou com \\bmod para a forma binária a \\bmod n. Ele é diferente de \\cong (isomorfismo ou congruência geométrica) e de \\triangleq ou := (definições), embora alguns autores também o usem para definições. Negue-o com \\not\\equiv. Em física, \\equiv costuma introduzir uma abreviação: \\omega \\equiv 2\\pi f.",
  },
  "proportional-to": {
    name: "Sinal de proporcionalidade",
    meaning: "Indica que uma quantidade é proporcional a outra, ou seja, igual a menos de um fator constante.",
    usage: "A física escreve F \\propto 1/r^2 para leis do inverso do quadrado, e a estatística bayesiana depende dele o tempo todo: p(\\theta \\mid x) \\propto p(x \\mid \\theta)\\, p(\\theta), descartando a constante de normalização. É uma relação, então o espaçamento é automático. Não o confunda com a letra grega \\alpha, que se parece com ele em algumas fontes mas não tem espaçamento de relação. Uma variante, \\varpropto, tem forma ligeiramente diferente. Para o crescimento na análise de algoritmos, \\sim ou \\Theta costumam ser mais claros. Explicite a constante apenas quando ela importar; caso contrário, a graça de \\propto é justamente escondê-la.",
  },
  "similar-to": {
    name: "Sinal de semelhança (til)",
    meaning: "Relação em forma de til para “tem distribuição”, “assintoticamente igual”, “semelhante” ou “equivalente segundo uma relação”.",
    usage: "Em probabilidade, X \\sim \\mathcal{N}(0, 1) se lê “X tem distribuição normal padrão”. Em assintótica, f \\sim g significa f/g \\to 1, como na fórmula de Stirling. A álgebra usa x \\sim y para uma relação de equivalência, e a geometria o usa para triângulos semelhantes. Como relação, tem espaço dos dois lados; para um til como acento sobre uma letra, use \\tilde{x}. Parentes próximos são \\simeq (assintoticamente igual ou equivalente por homotopia), \\approx (aproximadamente) e \\thicksim, uma versão mais grossa. Como prefixo com o sentido de “aproximadamente”, em \\sim 10^3, o espaçamento pode ficar estranho; escreva {\\sim}10^3.",
  },
  "congruent": {
    name: "Sinal de congruência",
    meaning: "Til sobre um sinal de igual, que indica isomorfismo de estruturas ou congruência de figuras geométricas.",
    usage: "Os algebristas escrevem G \\cong H para grupos isomorfos e V \\cong V^{**} para espaços de dimensão finita, enquanto a geometria usa \\triangle ABC \\cong \\triangle DEF para triângulos congruentes. Alguns textos de física e engenharia o usam com o sentido de “aproximadamente igual”, mas \\approx é mais claro para isso. Ele é diferente de \\simeq (um único traço, usado para equivalência por homotopia ou igualdade assintótica) e de \\equiv (três traços). Para rotular a aplicação, coloque-a sobre o símbolo com \\overset{\\phi}{\\cong} ou use uma seta como \\xrightarrow{\\sim}.",
  },
  "subset-or-equal": {
    name: "Inclusão ampla",
    meaning: "Afirma que todo elemento do conjunto à esquerda também pertence ao conjunto à direita; os conjuntos podem ser iguais.",
    usage: "Use \\subseteq para a inclusão que admite igualdade, como em A \\subseteq A, e em definições como a de uma topologia fechada para uniões de subfamílias \\mathcal{U} \\subseteq \\tau. Muitos autores usam o \\subset simples com o mesmo significado, enquanto outros reservam \\subset para a inclusão própria, então vale a pena declarar a convenção adotada. Para a inclusão própria sem ambiguidade, use \\subsetneq. A negação é \\nsubseteq ou \\not\\subseteq. Para mostrar que dois conjuntos são iguais, uma demonstração padrão prova A \\subseteq B e B \\subseteq A.",
  },
  "proper-subset": {
    name: "Subconjunto próprio",
    meaning: "Símbolo de subconjunto com o traço cortado: o conjunto à esquerda está contido no da direita, mas não é igual a ele.",
    usage: "\\subsetneq declara a inclusão própria de forma explícita, eliminando a ambiguidade de \\subset, que alguns textos tratam como não estrita. Aparece em cadeias como \\mathbb{N} \\subsetneq \\mathbb{Z} \\subsetneq \\mathbb{Q} e em argumentos de maximalidade para ideais. As variantes incluem \\subsetneqq (traço duplo com corte) e \\varsubsetneq, cujo corte atravessa apenas o traço. Não o confunda com \\nsubseteq, que significa “não é subconjunto”. Seu correspondente para superconjuntos é \\supsetneq. É uma relação, então o espaçamento em volta é automático. Ao provar que uma inclusão é estrita, mostre A \\subseteq B e exiba um elemento de B fora de A.",
  },
  "superset": {
    name: "Superconjunto",
    meaning: "Relação de superconjunto: o conjunto à esquerda contém o da direita (muitas vezes de forma estrita, conforme a convenção).",
    usage: "\\supset é a imagem espelhada de \\subset, então A \\supset B diz que B está dentro de A. Como no caso de \\subset, os autores divergem sobre se ele admite igualdade; declare sua convenção ou use \\supseteq e \\supsetneq para eliminar a dúvida. Textos de lógica de tradições mais antigas, incluindo os Principia Mathematica, usavam \\supset para a implicação material, então p \\supset q pode aparecer em artigos de filosofia. Em textos novos, \\to ou \\implies é mais claro para a implicação. A negação é \\not\\supset, e \\nsupseteq cobre a versão não estrita.",
  },
  "superset-or-equal": {
    name: "Superconjunto ou igual",
    meaning: "Relação de superconjunto ou igual: o conjunto à esquerda inclui todos os elementos do conjunto à direita.",
    usage: "Leia A \\supseteq B como “A contém B”, possivelmente com igualdade. É natural quando o conjunto maior é o sujeito, como em \\overline{A} \\supseteq A para fechos ou \\ker f \\supseteq \\operatorname{im} g em argumentos com sequências exatas. É simplesmente \\subseteq lido no sentido inverso, então escolha a forma que coloca primeiro o conjunto mais importante. A versão estrita é \\supsetneq, e a negação é \\nsupseteq. Na teoria dos reticulados e da ordem, também expressa a ordem de inclusão inversa em famílias de conjuntos.",
  },
  "perpendicular": {
    name: "Sinal de perpendicularidade",
    meaning: "Relação de perpendicularidade, que marca retas, vetores ou subespaços ortogonais e a independência de variáveis.",
    usage: "A geometria escreve AB \\perp CD, a álgebra linear escreve u \\perp v quando \\langle u, v \\rangle = 0 e W^\\perp para um complemento ortogonal, e a teoria dos números às vezes usa a \\perp b para inteiros primos entre si. Os probabilistas escrevem X \\perp Y para a independência, muitas vezes duplicado como X \\perp\\!\\!\\!\\perp Y para imitar o símbolo dedicado de independência. \\perp é uma relação com espaço dos dois lados, enquanto \\bot tem a mesma forma mas espaçamento comum, o que convém ao falso lógico ou a um elemento mínimo. Em um sobrescrito como W^\\perp, qualquer um serve, pois ali o espaçamento é suprimido.",
  },
  "parallel": {
    name: "Sinal de paralelismo",
    meaning: "Relação que significa “é paralelo a”, para retas, planos ou vetores; também é um operador de composição paralela.",
    usage: "A geometria escreve \\ell_1 \\parallel \\ell_2, a física escreve componentes como F_\\parallel (muitas vezes via \\|) e a engenharia elétrica usa R_1 \\parallel R_2 para resistores em paralelo. Os cálculos de processos o usam para a composição paralela, P \\parallel Q. O glifo é o mesmo de \\|, mas \\parallel recebe espaçamento de relação, então use-o entre objetos e reserve \\| (ou \\lVert, \\rVert) para os delimitadores de norma. Sua negação é \\nparallel. Para a divergência KL D(P \\parallel Q), o espaçamento de relação é o padrão, embora alguns prefiram \\|.",
  },
  "not-parallel": {
    name: "Sinal de não paralelismo",
    meaning: "Relação de paralelismo negada, que afirma que duas retas ou vetores não são paralelos.",
    usage: "\\nparallel desenha uma barra atravessando o traço duplo e é usado em problemas de geometria como \\ell_1 \\nparallel \\ell_2, o que implica que as retas se cortam (no plano) ou são reversas (no espaço). É uma relação com o mesmo espaçamento de \\parallel. Escrever \\not\\parallel pode funcionar, mas a barra sobreposta costuma ficar mal centrada, então o glifo dedicado fica melhor. Existe também \\nshortparallel, uma variante mais curta. Em física, uma componente não paralela é escrita com mais frequência com \\perp.",
  },
  "much-less-than": {
    name: "Sinal de muito menor que",
    meaning: "Relação “muito menor que”, que indica que a quantidade à esquerda é menor que a da direita por ordens de grandeza.",
    usage: "A física e a engenharia usam \\ll para regimes de aproximação: v \\ll c para o movimento não relativístico, ou x \\ll 1 para justificar \\sin x \\approx x. A teoria analítica dos números usa a notação de Vinogradov f \\ll g, que significa f = O(g), e a teoria da medida escreve \\mu \\ll \\nu para a continuidade absoluta. É um único glifo, então não digite << nem < <, que produzem dois símbolos de relação separados com espaçamento errado. Existe também a versão tripla \\lll para uma desigualdade ainda mais forte.",
  },
  "much-greater-than": {
    name: "Sinal de muito maior que",
    meaning: "Relação “muito maior que”, que indica que uma quantidade excede amplamente outra.",
    usage: "Use \\gg em raciocínios assintóticos ou físicos, como n \\gg 1 para aproximações de grandes amostras, kT \\gg \\hbar\\omega para o limite clássico ou a notação de Vinogradov f \\gg g, que significa g = O(f). É um único símbolo com espaçamento de relação; digitar >> produz duas relações separadas. Existe também o mais forte \\ggg. Como \\gg não é quantitativo, os artigos costumam acompanhá-lo de uma afirmação precisa, por exemplo n \\gg \\log(1/\\delta) junto com a constante envolvida. Argumentos assintóticos em física costumam declarar o regime uma vez, por exemplo L \\gg \\lambda, e então descartar os termos pequenos.",
  },
  "precedes": {
    name: "Sinal de precedência",
    meaning: "Relação “precede”, para ordens estritas que não são o “menor que” numérico usual.",
    usage: "\\prec escreve ordens estritas abstratas: preferências em economia (x \\prec y significa que y é estritamente preferido), majorização em análise matricial, ordens de dominância em partições e a relação “aconteceu antes” em sistemas distribuídos. Sua forma curva sinaliza que a ordem não é o < numérico. A versão não estrita é \\preceq, e \\preccurlyeq dá uma variante com traço curvo preferida em alguns textos. A álgebra linear escreve A \\prec B para a ordem de Loewner, o que significa que B - A é definida positiva. As negações incluem \\nprec.",
  },
  "succeeds": {
    name: "Sinal de sucessão",
    meaning: "Relação “sucede”, o inverso de \\prec, para ordens estritas abstratas.",
    usage: "\\succ se lê “sucede” ou “é preferido a”: em microeconomia, x \\succ y significa que x é estritamente preferido a y, e em análise matricial A \\succ 0 afirma que A é definida positiva (ordem de Loewner). Artigos de otimização o usam em restrições semidefinidas. É um símbolo de relação, então o espaçamento é automático. A forma não estrita é \\succeq, a forma com traço curvo é \\succcurlyeq e a negação é \\nsucc. Evite > para essas ordens, pois os leitores o entenderiam como comparação numérica.",
  },
  "precedes-or-equal": {
    name: "Sinal de precedência ou igualdade",
    meaning: "Relação “precede ou é igual a”, a versão não estrita de \\prec para ordens parciais e de preferência.",
    usage: "A teoria da ordem escreve x \\preceq y para uma ordem parcial geral, reservando \\le para números. Os economistas o usam para a preferência fraca, e os analistas matriciais escrevem A \\preceq B quando B - A é semidefinida positiva. Em otimização convexa, a desigualdade generalizada x \\preceq_K y usa um subscrito para o cone. \\preccurlyeq é parecido, com um traço inferior curvo, e alguns autores o preferem para evitar confusão com \\leq. O inverso é \\succeq, e \\npreceq o nega.",
  },
  "succeeds-or-equal": {
    name: "Sinal de sucessão ou igualdade",
    meaning: "Relação “sucede ou é igual a”, vista sobretudo em A \\succeq 0 para matrizes semidefinidas positivas.",
    usage: "As restrições de programação semidefinida são escritas X \\succeq 0, o que significa que X é simétrica semidefinida positiva, e a ordem de Loewner compara matrizes como A \\succeq B. Os economistas usam \\succeq para a preferência fraca, lida como “pelo menos tão bom quanto”. É uma relação com espaçamento padrão. A versão estrita é \\succ, a variante curva é \\succcurlyeq e a negação é \\nsucceq. Para comparações numéricas, fique com \\geq, para que os leitores não procurem uma ordem fora do padrão. Em um programa semidefinido, a restrição costuma vir em linha própria depois de “s.a.” (sujeito a).",
    example: "\\min_{X} \\operatorname{tr}(CX) \\ \\text{s.a.}\\ X \\succeq 0",
  },
  "asymptotic": {
    name: "Equivalência assintótica",
    meaning: "Relação de equivalência assintótica: duas funções crescem no mesmo ritmo, a menos de fatores constantes.",
    usage: "Em análise e teoria dos números, f \\asymp g significa que existem constantes c, C > 0 com c g \\le f \\le C g para argumentos grandes, o equivalente a f = \\Theta(g) em ciência da computação. É mais fraca que f \\sim g, que exige que a razão tenda a 1. O glifo, um par de arcos opostos, não deve ser confundido com \\approx nem com \\smile e \\frown. É uma relação, então o espaçamento é automático. Alguns textos de física também o usam de forma livre para “assintoticamente igual”, então defina-o se a precisão importar.",
  },
  "defined-as": {
    name: "Sinal de definição",
    meaning: "Dois-pontos igual, a atribuição de definição: o lado esquerdo é definido como igual ao lado direito.",
    usage: "Escrever f(x) := x^2 + 1 marca uma definição, e não uma afirmação de igualdade, e os dois-pontos ficam do lado do que está sendo definido (=: inverte o sentido). Digitados diretamente, os dois-pontos e o sinal de igual são ambos relações, então o TeX os compõe sem espaço entre eles, mas os dois-pontos não ficam centrados verticalmente em relação ao sinal de igual, o que incomoda alguns tipógrafos. O comando \\coloneqq de um pacote de ferramentas matemáticas corrige esse alinhamento. Em pseudocódigo, também indica atribuição, x := x + 1. Alternativas incluem \\triangleq e \\stackrel{\\text{def}}{=}.",
  },
  "triangle-equal": {
    name: "Igual com triângulo",
    meaning: "Sinal de igual encimado por um pequeno triângulo, lido como “é definido como”.",
    usage: "Artigos de processamento de sinais, teoria de controle e teoria da informação costumam preferir \\triangleq para definições, como em H(X) \\triangleq -\\sum p(x) \\log p(x). Ele cumpre o mesmo papel que :=, mas é simétrico, então não indica qual lado é o novo. Alguns leitores não o conhecem, então mencione a convenção uma vez na seção de notação. Alternativas incluem \\stackrel{\\text{def}}{=} ou \\overset{\\mathrm{def}}{=}, e \\equiv em física. É uma relação, então o espaçamento é automático. Explique a convenção para qualquer leitor de fora da sua área.",
  },
};

export default text;
