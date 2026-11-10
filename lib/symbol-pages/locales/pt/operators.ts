import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/operators/<slug>. */
const text: SymbolPageTranslations = {
  "direct-sum": {
    name: "Soma direta",
    meaning: "Mais circulado, usado para somas diretas de espaços ou módulos e para o “ou exclusivo” (XOR) na álgebra booleana.",
    usage: "Em álgebra linear se escreve V = U \\oplus W quando todo vetor se decompõe de modo único em partes de U e de W, e na teoria de módulos se constrói \\mathbb{Z} \\oplus \\mathbb{Z}. Em computação e criptografia, a \\oplus b é o XOR bit a bit, como nas cifras de uso único c = m \\oplus k. É um operador binário, então recebe espaçamento médio. Para uma soma direta sobre um conjunto de índices, use o operador grande \\bigoplus_{i \\in I} V_i, que aceita limites como \\sum. Não o confunda com \\pm nem com um + simples; em algumas álgebras, \\oplus também indica uma adição deformada.",
  },
  "tensor-product": {
    name: "Produto tensorial",
    meaning: "Vezes circulado: o produto tensorial de vetores, espaços, módulos ou matrizes (produto de Kronecker).",
    usage: "A álgebra multilinear escreve V \\otimes W, a mecânica quântica escreve estados compostos |\\psi\\rangle \\otimes |\\phi\\rangle e a álgebra matricial usa A \\otimes B para o produto de Kronecker. Em aprendizado de máquina às vezes aparece para produtos externos. É um operador binário com espaçamento médio. Para produtos iterados, use o operador grande \\bigotimes_{i=1}^n V_i e, para o produto tensorial sobre um anel, coloque o anel como subscrito, M \\otimes_R N. Não use \\times, que é o produto cartesiano ou o produto vetorial.",
  },
  "circle-dot": {
    name: "Ponto circulado",
    meaning: "Ponto dentro de um círculo, comumente usado para o produto elemento a elemento (de Hadamard) de vetores ou matrizes.",
    usage: "Artigos de aprendizado profundo escrevem h_t = o_t \\odot \\tanh(c_t) para produtos elemento a elemento em LSTMs e máscaras de atenção, e a álgebra linear numérica usa A \\odot B para o produto de Hadamard, muitas vezes ao lado de \\circ com o mesmo significado. Diagramas de física usam um ponto circulado para um vetor que sai do plano da página, mas ali ele é um símbolo, não um operador. É um operador binário com espaçamento médio; existe também a forma grande \\bigodot. Indique na seção de notação se \\odot significa produto de Hadamard, já que alguns autores o usam para XNOR ou outras operações.",
  },
  "circle-minus": {
    name: "Menos circulado",
    meaning: "Sinal de menos dentro de um círculo, usado para complementos ortogonais dentro de um espaço e para algumas operações do tipo diferença.",
    usage: "Na teoria dos espaços de Hilbert, H \\ominus K indica o complemento ortogonal de um subespaço fechado K dentro de H, o par de \\oplus. O processamento morfológico de imagens usa A \\ominus B para a erosão, e alguns textos de teoria dos conjuntos o usam para a diferença simétrica, embora ali \\triangle seja mais comum. É um operador binário, então o espaçamento é automático. Como seu significado varia, defina-o uma vez no artigo. Não existe uma versão padrão como operador grande. No uso como diferença simétrica, A \\ominus B é igual a (A \\setminus B) \\cup (B \\setminus A).",
  },
  "circle-slash": {
    name: "Barra circulada",
    meaning: "Barra dentro de um círculo, que normalmente indica a divisão elemento a elemento (de Hadamard) de vetores ou matrizes.",
    usage: "Textos de computação matricial e de aprendizado de máquina escrevem A \\oslash B para a divisão entrada a entrada, combinando-a com \\odot para a multiplicação entrada a entrada, como em atualizações normalizadas x \\oslash \\sqrt{v}. O LaTeX o trata como operador binário, então ele recebe o mesmo espaçamento médio que \\odot e \\otimes. Note que ele é diferente de \\varnothing e \\emptyset, que parecem um círculo cortado mas são símbolos comuns para o conjunto vazio, e da letra escandinava \\o. Como não é universalmente conhecido, apresente-o na seção de notação.",
  },
  "star": {
    name: "Estrela",
    meaning: "Operador binário em forma de estrela de cinco pontas, usado para convolução, dualidade de Hodge e produtos personalizados.",
    usage: "O processamento de sinais às vezes escreve a correlação cruzada como f \\star g, a geometria diferencial usa \\star para o operador estrela de Hodge e os algebristas o usam para operações binárias genéricas ou para o produto estrela de Moyal. Valores ótimos em otimização são escritos x^\\star, como alternativa a x^*. \\star é um operador binário, diferente de \\ast (o asterisco) e do símbolo produzido por \\bigstar. Como seu espaçamento é o de um operador binário, usá-lo como operador prefixado, como a estrela de Hodge, pode exigir chaves: {\\star}\\omega.",
  },
  "asterisk": {
    name: "Asterisco",
    meaning: "Asterisco como operador binário, normalmente para convolução ou para uma operação de grupo genérica.",
    usage: "No modo matemático, \\ast é o mesmo glifo que digitar *, um operador binário com espaçamento médio, usado para convolução (f \\ast g)(t) = \\int f(\\tau) g(t - \\tau)\\,d\\tau e para operações binárias genéricas em álgebra. Como sobrescrito, A^* ou A^\\ast indica adjunto, transposta conjugada, espaço dual ou fecho de Kleene, conforme a área. Ele fica centrado no eixo matemático, ao contrário do asterisco elevado do texto. Para um valor ótimo marcado, x^\\star, alguns autores preferem \\star para manter os significados separados.",
  },
  "composition": {
    name: "Composição",
    meaning: "Operador de pequeno círculo, padrão para a composição de funções e também usado para graus.",
    usage: "(f \\circ g)(x) = f(g(x)) é o uso principal. Como sobrescrito, 90^\\circ dá graus, embora um símbolo de grau dedicado de uma fonte complementar de texto possa ficar melhor, e A^\\circ muitas vezes indica o interior ou o conjunto polar. Alguns autores usam \\circ para o produto de Hadamard, caso em que \\odot é a alternativa mais clara. \\circ é um operador binário, então recebe espaço médio; \\bigcirc é um círculo maior e \\cdot um ponto cheio. Evite usar a letra o para a composição.",
  },
  "bullet": {
    name: "Ponto cheio",
    meaning: "Ponto redondo cheio como operador binário, usado como marcador de posição, para produtos genéricos e para objetos graduados.",
    usage: "A teoria das categorias e a álgebra homológica usam \\bullet como marcador de índice, como em C_\\bullet para um complexo de cadeias e H^\\bullet para a cohomologia total. Ele também serve de argumento genérico, f(\\bullet, y), e de símbolo de operação em álgebra. Os marcadores de listas itemize são produzidos por \\textbullet, não pelo \\bullet matemático. Comparado com \\cdot, é maior e mais pesado; \\cdot é a escolha certa para a multiplicação comum ou para produtos escalares. Como operador binário, recebe espaçamento médio, mas como marcador em f(\\bullet) o espaçamento fica bom, pois não há operando à esquerda.",
  },
  "diamond": {
    name: "Losango",
    meaning: "Operador binário em forma de pequeno losango, usado para operações genéricas e em algumas notações modais e algébricas.",
    usage: "\\diamond aparece como operação binária arbitrária (a \\diamond b), no produto losango da teoria de Lie e na teoria dos autômatos. A lógica modal escreve a possibilidade com um losango maior, normalmente \\Diamond ou \\lozenge, e não com esta versão pequena de operador binário. Como \\diamond é um operador binário, usá-lo como operador prefixado diante de uma fórmula produz um espaçamento estranho; use \\Diamond ou envolva-o assim: {\\diamond}p. Ele é diferente de \\diamondsuit, o naipe de ouros, que é um símbolo comum.",
  },
  "big-circle": {
    name: "Círculo grande",
    meaning: "Operador binário em forma de círculo aberto grande, maior que \\circ, usado para produtos especiais e diagramas.",
    usage: "\\bigcirc é sobretudo um símbolo à escolha para operações personalizadas, por exemplo um produto do tipo caixa, ou na lógica temporal, em que um círculo indica o operador de próximo instante, \\bigcirc p. É um operador binário, não um operador grande com limites, então não cresce no modo de exibição como \\bigcup. Para circular um símbolo, sobrepor \\bigcirc é desajeitado; um nó circulado de um pacote de desenho ou \\textcircled funciona melhor. Para a composição, o \\circ menor é o padrão. Para um operador circulado como \\oplus ou \\otimes, os comandos dedicados são mais adequados que sobreposições.",
  },
  "triangle-up": {
    name: "Triângulo para cima",
    meaning: "Triângulo aberto apontando para cima, usado para triângulos em geometria, para a diferença simétrica e para o laplaciano.",
    usage: "A geometria escreve \\triangle ABC para um triângulo, a teoria dos conjuntos escreve A \\triangle B para a diferença simétrica e alguns textos o usam para o operador de Laplace, embora \\Delta ou \\nabla^2 sejam mais habituais. No LaTeX padrão, \\triangle é um símbolo comum, não um operador binário, então em A \\triangle B talvez convenha \\mathbin{\\triangle} para o espaçamento correto, ou usar \\bigtriangleup, que já é um operador binário. Ele é maior e tem forma diferente da letra grega maiúscula \\Delta.",
  },
  "triangle-down": {
    name: "Triângulo para baixo",
    meaning: "Pequeno triângulo aberto apontando para baixo, um símbolo comum e não um operador.",
    usage: "\\triangledown é um triângulo menor, com espaçamento comum, apontando para baixo, usado como decoração ou marcador em algumas notações. Não é o mesmo que \\nabla, o operador gradiente, que tem outra forma e é o que se quer em \\nabla f; nem é \\bigtriangledown, que é um operador binário maior. Se usar \\triangledown como operação, envolva-o em \\mathbin para obter espaçamento de operador. Para versões cheias, existe \\blacktriangledown. Em artigos finalizados aparece raramente, sobretudo como referência a um marcador de gráfico em legendas ou como operação personalizada.",
  },
  "square": {
    name: "Quadrado",
    meaning: "Símbolo de quadrado aberto, usado para o d'alembertiano, para a necessidade modal e como marca de fim de demonstração.",
    usage: "Os físicos escrevem \\square para o operador de onda de d'Alembert, \\square = \\partial_t^2/c^2 - \\nabla^2, a lógica modal usa \\square p para “necessariamente p” (muitas vezes como \\Box), e o quadrado vazado serve de marca de “c.q.d.” no fim das demonstrações. Nas demonstrações do amsthm, essa marca é colocada automaticamente via \\qedsymbol, então raramente é preciso digitá-la. \\square é um símbolo comum; \\blacksquare dá a versão cheia. Muitos textos de lógica escrevem \\Box para a necessidade; os dois glifos são quase idênticos. Quando usado como operador antes de um campo, nenhum espaçamento extra é necessário.",
  },
  "wedge": {
    name: "Cunha",
    meaning: "Operador binário em forma de cunha, para o “e” lógico, o produto exterior e o ínfimo em reticulados.",
    usage: "A geometria diferencial constrói formas como dx \\wedge dy, com \\omega \\wedge \\eta = (-1)^{kl} \\eta \\wedge \\omega. A lógica usa p \\wedge q para a conjunção (\\land é um sinônimo), a teoria dos reticulados escreve a \\wedge b para o maior limitante inferior e os probabilistas escrevem s \\wedge t para \\min(s, t). É um operador binário com espaçamento médio. Para conjunções sobre um conjunto de índices, use o operador grande \\bigwedge. Em topologia, X \\wedge Y é o produto smash de espaços pontuados. Não o confunda com o acento circunflexo \\hat ou \\widehat.",
  },
  "vee": {
    name: "Cunha invertida",
    meaning: "Operador binário em forma de V, para o “ou” lógico, o supremo em reticulados e a soma em cunha de espaços.",
    usage: "A lógica escreve p \\vee q para a disjunção inclusiva, e \\lor é um sinônimo idêntico. A teoria dos reticulados usa a \\vee b para o menor limitante superior, a probabilidade escreve s \\vee t para \\max(s, t) e a topologia usa X \\vee Y para a soma em cunha, que cola espaços em um ponto base. Para muitos termos, use \\bigvee_{i} p_i. Ele é diferente da letra v e de \\veebar, que alguns textos usam para o “ou exclusivo”. O símbolo tem espaçamento de operador binário.",
  },
  "amalgamation": {
    name: "Amalgamação",
    meaning: "Operador de amalgamação, usado para uniões disjuntas e coprodutos.",
    usage: "A teoria das categorias e a topologia escrevem X \\amalg Y para o coproduto ou a união disjunta, e a teoria dos grupos usa G \\ast_H K para produtos livres amalgamados, com \\amalg em alguns textos. \\amalg é um operador binário. Para a versão indexada com limites, use o operador grande \\coprod_{i \\in I} X_i, que tem a mesma aparência mas se ajusta ao estilo de exibição. Alternativas para a união disjunta são \\sqcup e \\bigsqcup, que têm forma mais achatada e são mais comuns na teoria dos conjuntos.",
  },
  "dagger": {
    name: "Adaga",
    meaning: "Símbolo de adaga, usado principalmente em sobrescritos para adjuntos e conjugados hermitianos.",
    usage: "A mecânica quântica escreve A^\\dagger para o adjunto hermitiano, de modo que a^\\dagger é o operador de criação, e a álgebra linear usa A^\\dagger para a pseudoinversa de Moore-Penrose em alguns textos (A^+ é a alternativa). A adaga também marca notas de rodapé ou entradas especiais em tabelas. Na matemática é um operador binário, mas como sobrescrito seu espaçamento não importa. No modo texto, use \\textdagger. A versão dupla \\ddagger é usada para notas de rodapé de segundo nível e algumas notações especiais. A teoria quântica de campos a usa constantemente para operadores de criação e aniquilação.",
  },
  "double-dagger": {
    name: "Adaga dupla",
    meaning: "Símbolo de adaga dupla, usado como marcador de nota de rodapé e, ocasionalmente, como decoração em sobrescrito.",
    usage: "\\ddagger é o segundo símbolo de nota de rodapé depois de \\dagger em muitos estilos, marcando afiliações ou notas de tabela. Na matemática às vezes decora operadores, por exemplo um estado de transição X^\\ddagger em cinética química (energia de ativação \\Delta G^\\ddagger). Como comando matemático é um operador binário, mas como sobrescrito o espaçamento não importa. No modo texto, use \\textdaggerdbl. Como seu significado não é padronizado, explique-o no primeiro uso. Colocado como sobrescrito, dispensa chaves: X^\\ddagger funciona diretamente.",
  },
  "wreath-product": {
    name: "Produto entrelaçado",
    meaning: "Operador de produto entrelaçado, escrito entre grupos.",
    usage: "A teoria dos grupos escreve G \\wr H para o produto entrelaçado, por exemplo o grupo hiperoctaédrico \\mathbb{Z}_2 \\wr S_n, e os subgrupos de Sylow dos grupos simétricos são produtos entrelaçados iterados. O símbolo é uma pequena linha vertical ondulada, composta como operador binário. Lembra um til girado, mas, ao contrário da relação \\sim, tem espaçamento de operador binário. Alguns autores escrevem os fatores na ordem inversa, então indique qual grupo age. Os grupos do cubo de Rubik e os grupos de automorfismos de árvores são exemplos clássicos em que aparecem produtos entrelaçados.",
  },
  "set-minus": {
    name: "Diferença de conjuntos",
    meaning: "Operador de diferença de conjuntos: A \\setminus B é o conjunto dos elementos de A que não estão em B.",
    usage: "Use \\setminus para a diferença de conjuntos, A \\setminus B, e para remoções, \\mathbb{R} \\setminus \\{0\\}. É um operador binário com o espaçamento adequado, enquanto \\backslash tem a mesma aparência mas é um símbolo comum, usado para quocientes como G \\backslash X (classes laterais à esquerda). Uma variante menor, \\smallsetminus, combina melhor com algumas fontes. Alguns autores escrevem A - B, mas \\setminus evita confusão com a subtração. Combinado com \\complement: A \\setminus B = A \\cap B^\\complement. Em frações como G \\backslash X / H, para classes laterais duplas, mantenha \\backslash para o quociente.",
  },
};

export default text;
