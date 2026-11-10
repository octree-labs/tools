import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/arrows/<slug>. */
const text: SymbolPageTranslations = {
  "left-arrow": {
    name: "Seta para a esquerda",
    meaning: "Desenha uma seta simples e curta apontando para a esquerda, usada para a atribuição em algoritmos e para aplicações escritas ao contrário.",
    usage: "O pseudocódigo escreve a atribuição como x \\leftarrow x + 1, e \\gets é um sinônimo embutido exatamente dessa seta, que soa mais natural em listagens de algoritmos. Em matemática, às vezes indica uma aplicação escrita da direita para a esquerda, B \\leftarrow A, ou, em textos antigos, um limite pela direita. Artigos de aprendizado de máquina a usam para atualizações de parâmetros, \\theta \\leftarrow \\theta - \\eta g. É uma relação, então o TeX acrescenta espaçamento largo ao redor. Para uma seta mais longa, use \\longleftarrow, e para uma com rótulo, a extensível \\xleftarrow{text}.",
  },
  "right-arrow": {
    name: "Seta para a direita",
    meaning: "Desenha uma seta simples e curta apontando para a direita, para assinaturas de funções, limites e setas de reação.",
    usage: "\\rightarrow tem o sinônimo mais curto \\to, a escolha habitual em f : A \\to B e em limites x \\to 0. Use \\mapsto quando descrever o que acontece com um elemento, como em x \\mapsto x^2. Em lógica, p \\rightarrow q é a implicação material, distinta da seta dupla \\Rightarrow usada entre enunciados. Químicos escrevem reações simples com ela, e a teoria dos grafos a usa para arestas orientadas u \\rightarrow v. Quando precisar de um rótulo sobre a seta, a extensível \\xrightarrow{\\text{label}} cresce para acomodá-lo.",
  },
  "up-arrow": {
    name: "Seta para cima",
    meaning: "Desenha uma seta para cima, usada para limites crescentes, spin para cima, desprendimento de gás e a notação de Knuth.",
    usage: "A análise escreve x_n \\uparrow x para uma sequência que cresce até o seu limite, como no teorema da convergência monótona. A física a usa para o spin para cima, |\\uparrow\\rangle, e a química marca com uma seta para cima, depois do produto, um gás que sai de uma reação. A notação de setas de Knuth para números enormes escreve 3 \\uparrow\\uparrow 3 para a exponenciação iterada. \\uparrow também funciona como delimitador, então \\big\\uparrow ou \\left\\uparrow ... \\right. produzem versões mais altas. A seta de haste dupla \\Uparrow é um símbolo separado.",
  },
  "long-left-arrow": {
    name: "Seta longa para a esquerda",
    meaning: "Desenha uma seta simples e longa para a esquerda, versão esticada de \\leftarrow para aplicações largas ou em destaque.",
    usage: "\\longleftarrow é uma seta longa de comprimento fixo, cerca de duas vezes o comprimento de \\leftarrow, formada por um sinal de menos e uma ponta de seta. É útil quando as setas apontam entre expressões longas ou em diagramas em linha de sequências exatas escritas da direita para a esquerda. Para texto sobre a seta, a extensível \\xleftarrow{f} é melhor, porque cresce com o rótulo. A atribuição em algoritmos costuma usar a curta \\gets. Sua contraparte de haste dupla é \\Longleftarrow, na qual se baseia o símbolo “é implicado por”, \\impliedby.",
  },
  "long-right-arrow": {
    name: "Seta longa para a direita",
    meaning: "Desenha uma seta simples e longa para a direita, frequente em enunciados de convergência e entre expressões longas.",
    usage: "Usa-se \\longrightarrow quando um \\to curto fica apertado, por exemplo em a_n \\longrightarrow L ou entre dois termos longos de uma redução. Uma condição sob a seta pode ser acrescentada com \\xrightarrow[n \\to \\infty]{}, que se estica até o tamanho do rótulo, ou com \\underset{n\\to\\infty}{\\longrightarrow}. A química usa setas longas para reações com as condições escritas acima. É um símbolo de comprimento fixo, ao contrário das setas extensíveis. A versão dupla é \\Longrightarrow, que é o que \\implies imprime com espaçamento extra.",
  },
  "down-arrow": {
    name: "Seta para baixo",
    meaning: "Desenha uma seta para baixo, usada para limites decrescentes, spin para baixo, precipitados e reduções de passo grande.",
    usage: "Uma sequência que decresce até o seu limite é escrita x_n \\downarrow x, e limites laterais aparecem como t \\downarrow 0. Físicos escrevem o spin para baixo como |\\downarrow\\rangle, e químicos põem uma seta depois de um precipitado sólido. Na teoria de domínios e na semântica de linguagens de programação, e\\downarrow significa que uma computação converge. Assim como \\uparrow, é um delimitador, então \\Big\\downarrow dá uma seta mais alta, prática em esboços de diagramas verticais. A versão de haste dupla é \\Downarrow. Alguns textos de topologia e teoria da ordem também escrevem {\\downarrow}x para o conjunto inferior gerado por um elemento.",
  },
  "left-arrow-double": {
    name: "Seta dupla para a esquerda",
    meaning: "Desenha uma seta curta de haste dupla para a esquerda, lida “é implicado por” ou marcando a parte recíproca de uma demonstração.",
    usage: "Em demonstrações de uma equivalência, os autores rotulam as duas direções como (\\Rightarrow) e (\\Leftarrow), esta última provando a recíproca. Entre fórmulas, A \\Leftarrow B significa que B implica A. Para uma versão longa e espaçada entre enunciados completos, \\impliedby dá \\Longleftarrow com espaço extra, espelhando \\implies. Cuidado para não confundir \\Leftarrow com \\leq numa leitura rápida, já que alguns leitores interpretam mal a forma. Textos de lógica costumam reorganizar a frase para usar uma seta para a direita, então reserve \\Leftarrow para as recíprocas.",
  },
  "right-arrow-double": {
    name: "Seta dupla para a direita",
    meaning: "Desenha uma seta curta de haste dupla para a direita, o sinal padrão de implicação entre fórmulas.",
    usage: "\\Rightarrow afirma que uma fórmula implica outra, como em p \\Rightarrow q, e rotula a direção direta (\\Rightarrow) em demonstrações de equivalência. \\implies imprime a seta mais longa \\Longrightarrow com espaçamento extra largo e convém a implicações entre enunciados completos. A probabilidade escreve a convergência fraca de distribuições como X_n \\Rightarrow X, e a reescrita de termos a usa para um passo de redução. A álgebra booleana a usa para o condicional. Prefira-a à seta simples \\to quando os objetos forem enunciados, e não conjuntos ou funções.",
  },
  "up-arrow-double": {
    name: "Seta dupla para cima",
    meaning: "Desenha uma seta de haste dupla para cima, um símbolo raro que também pode ser usado como delimitador extensível.",
    usage: "\\Uparrow não tem um significado padrão único em matemática. Aparece de vez em quando em diagramas, em alguns textos de lógica e teoria da prova, e em física para um estado fortemente polarizado. Como é um delimitador, \\Big\\Uparrow e \\left\\Uparrow ... \\right. a escalam verticalmente. Se você só precisa indicar a direção para cima, \\uparrow é a escolha habitual. Se usar \\Uparrow para uma relação própria, defina-a no texto na primeira vez em que aparecer, para que o leitor não precise adivinhar.",
  },
  "long-left-arrow-double": {
    name: "Seta longa dupla para a esquerda",
    meaning: "Desenha uma seta longa de haste dupla para a esquerda; com espaçamento adicional, é o sinal “é implicado por”.",
    usage: "\\Longleftarrow é o glifo por trás de \\impliedby, que acrescenta espaços largos de cada lado para uso entre enunciados inteiros. Use \\Longleftarrow diretamente quando quiser a seta longa sem esse espaçamento, por exemplo numa cadeia apertada dentro de uma tabela. Em demonstrações, pode introduzir a direção recíproca, (\\Longleftarrow). Sua gêmea apontando para a direita, \\Longrightarrow, está por trás de \\implies, e a de duas pontas, \\Longleftrightarrow, por trás de \\iff. Evite misturar formas curtas e longas numa mesma demonstração. Setas recíprocas ficam mais legíveis quando a hipótese mais forte está à direita.",
  },
  "long-right-arrow-double": {
    name: "Seta longa dupla para a direita",
    meaning: "Desenha uma seta longa de haste dupla para a direita; cercada de espaços, torna-se o sinal \\implies.",
    usage: "\\Longrightarrow é o glifo puro que \\implies usa, sem o espaçamento extra largo. Escolha \\Longrightarrow quando precisar de uma implicação num espaço apertado, como um subscrito, uma célula de matriz ou uma tabela compacta, e \\implies entre orações completas na matemática em destaque. Também é usada para reduções de vários passos em sistemas de reescrita e para convergência em alguns textos de probabilidade. A versão curta \\Rightarrow é melhor entre fórmulas curtas. Escreva a recíproca com \\Longleftarrow. Numa sequência de passos em destaque, alinhe as setas com o ambiente align para que cada passo comece na mesma coluna.",
    example: "a \\mid b \\text{ e } b \\mid c \\Longrightarrow a \\mid c",
  },
  "down-arrow-double": {
    name: "Seta dupla para baixo",
    meaning: "Desenha uma seta de haste dupla para baixo, usada para a avaliação de passo grande na semântica de linguagens de programação.",
    usage: "A semântica operacional escreve e \\Downarrow v para dizer que a expressão e é avaliada para o valor v no estilo de passo grande, o principal uso técnico desse símbolo. Em diagramas e demonstrações lógicas, pode marcar um passo de inferência vertical. Como as demais setas verticais, \\Downarrow é um delimitador, então \\Big\\Downarrow produz uma versão mais alta. Não a confunda com \\downarrow, que na mesma semântica pode significar terminação. Defina sua convenção ao introduzir o julgamento. A semântica de passo pequeno, por outro lado, usa \\to ou \\longrightarrow para passos de redução únicos, e \\to^* para o seu fecho reflexivo e transitivo.",
  },
  "left-right-arrow": {
    name: "Seta para a esquerda e para a direita",
    meaning: "Desenha uma seta curta de duas pontas, para correspondências, o bicondicional e estruturas de ressonância.",
    usage: "A lógica usa p \\leftrightarrow q para o conectivo bicondicional dentro de fórmulas, enquanto \\Leftrightarrow e \\iff são mais comuns entre enunciados inteiros. Em combinatória, descreve uma correspondência bijetiva entre objetos, e a química a usa entre estruturas de ressonância, e não para o equilíbrio, que usa \\rightleftharpoons. A teoria dos grafos pode usá-la para arestas não orientadas ou bidirecionais. É uma relação e recebe espaçamento largo. Para uma versão mais longa, use \\longleftrightarrow. Nas discussões sobre tabelas-verdade, equivale ao XNOR, verdadeiro exatamente quando os dois lados coincidem.",
  },
  "long-left-right-arrow": {
    name: "Seta longa para a esquerda e para a direita",
    meaning: "Desenha uma seta simples longa de duas pontas, um \\leftrightarrow esticado para correspondências entre expressões longas.",
    usage: "\\longleftrightarrow convém a uma correspondência entre dois objetos extensos, por exemplo uma bijeção entre subconjuntos e sequências binárias, em que a seta curta parece perdida. É um símbolo de comprimento fixo, então rótulos precisam de \\overset ou de uma construção empilhada. Note que \\iff é formado pela seta de haste dupla \\Longleftrightarrow, e não por esta versão de haste simples, então não use \\longleftrightarrow para a equivalência lógica em demonstrações. A física a usa para uma dualidade entre duas teorias. O comprimento extra também ajuda quando a seta leva texto empilhado acima dela.",
  },
  "up-down-arrow": {
    name: "Seta para cima e para baixo",
    meaning: "Desenha uma seta vertical de duas pontas, usada sobretudo como delimitador escalável ou em diagramas.",
    usage: "\\updownarrow aponta para cima e para baixo, o que a torna prática em diagramas verticais para mostrar uma relação nos dois sentidos entre linhas. Por ser um delimitador, pode ser ampliada com \\big, \\Big ou \\left e \\right. Em física, às vezes indica uma superposição de estados de spin ou uma oscilação vertical. Sua variante de haste dupla é \\Updownarrow. Se você estiver desenhando um diagrama comutativo completo, um ambiente de diagramas dedicado alinha as setas verticais melhor do que posicionar \\updownarrow à mão. Raramente é necessária em artigos modernos, mas é útil em notas de aula.",
  },
  "left-right-arrow-double": {
    name: "Seta dupla para a esquerda e para a direita",
    meaning: "Desenha uma seta curta de haste dupla e duas pontas para a equivalência lógica entre fórmulas.",
    usage: "\\Leftrightarrow afirma que duas fórmulas se implicam mutuamente, como em A \\Leftrightarrow B. Para a equivalência entre enunciados completos na matemática em destaque, \\iff dá a seta mais longa \\Longleftrightarrow com espaçamento extra. A álgebra booleana a usa para o XNOR ou o bicondicional. Em cadeias de equações equivalentes, alinhar uma coluna de \\Leftrightarrow com align é um padrão comum em livros de soluções. Não a confunda com \\equiv, que expressa identidade ou congruência, e não equivalência lógica. Só a escreva quando cada passo for realmente reversível; elevar os dois lados ao quadrado, por exemplo, quebra a equivalência.",
  },
  "long-left-right-arrow-double": {
    name: "Seta longa dupla para a esquerda e para a direita",
    meaning: "Desenha uma seta longa de haste dupla e duas pontas, o mesmo glifo que \\iff usa.",
    usage: "\\Longleftrightarrow imprime a mesma seta que \\iff, mas sem os espaços extra largos que \\iff acrescenta. Isso a torna a melhor escolha dentro de subscritos, tabelas ou texto em linha apertado, enquanto \\iff fica melhor em teoremas em destaque. Também aparece em demonstrações em que as duas direções são argumentadas juntas. A curta \\Leftrightarrow é preferível entre fórmulas breves. Mantenha uma escolha consistente ao longo do documento, sobretudo nos enunciados de teoremas. Também serve em cadeias de passos algébricos reversíveis alinhados num ambiente align, em que o comprimento extra separa visualmente equações longas. Como as outras setas, é uma relação, então o TeX lhe dá espaçamento largo dos dois lados.",
  },
  "up-down-arrow-double": {
    name: "Seta dupla para cima e para baixo",
    meaning: "Desenha uma seta vertical de haste dupla e duas pontas, um símbolo que pode servir de delimitador para a equivalência na vertical.",
    usage: "\\Updownarrow é usada principalmente em disposições verticais, como dois enunciados equivalentes empilhados num array, em que faz o papel de um \\Leftrightarrow deitado de lado. É um delimitador, então as versões \\Big\\Updownarrow e \\left ... \\right crescem verticalmente. Fora desses diagramas, não tem significado amplamente estabelecido. Se precisar de uma versão de haste simples, use \\updownarrow. Um array simples com uma coluna centralizada mantém os enunciados e a seta alinhados. Em slides de aula, também pode mostrar que duas definições empilhadas verticalmente são intercambiáveis. Combine-a com \\Leftrightarrow quando a mesma equivalência aparecer também na horizontal em outro lugar.",
    example: "\\begin{array}{c} A \\text{ vale} \\\\ \\Updownarrow \\\\ B \\text{ vale} \\end{array}",
  },
  "maps-to": {
    name: "Seta de aplicação",
    meaning: "Desenha uma seta com barra que mostra para onde uma função leva um elemento individual, como em x ↦ x².",
    usage: "Use \\mapsto para elementos e \\to para conjuntos: f : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2 indica domínio, contradomínio e regra de uma só vez. Artigos de cálculo lambda e de programação funcional a usam para funções anônimas, e a semântica escreve substituições ou atualizações de ambiente como [x \\mapsto v]. Ela difere de \\to apenas pela pequena barra na cauda, então verifique se aparece com nitidez em tamanhos pequenos. Para expressões longas, use \\longmapsto. Em diagramas comutativos, as setas entre elementos também são desenhadas com cauda de mapsto.",
  },
  "long-maps-to": {
    name: "Seta longa de aplicação",
    meaning: "Desenha uma seta longa com barra que leva um elemento à sua imagem, para expressões mais largas do que com \\mapsto.",
    usage: "\\longmapsto dá mais espaço quando a entrada ou a saída é longa, como em (x, y) \\longmapsto x^2 + y^2, ou quando você quer que a regra para elementos fique alinhada com um \\longrightarrow acima dela. Lê-se da mesma forma que \\mapsto e deve ser combinada com \\to ou \\longrightarrow na linha que indica domínio e contradomínio. Como o comprimento é fixo, um rótulo acima ainda exige \\overset. Usá-la de forma consistente em definições de funções em destaque dá um visual limpo em duas linhas.",
  },
  "northeast-arrow": {
    name: "Seta nordeste",
    meaning: "Desenha uma seta diagonal apontando para cima e para a direita, para tendências crescentes e arestas de diagramas.",
    usage: "\\nearrow costuma ser usada informalmente para “cresce até”, como em a_n \\nearrow a, a contraparte diagonal de \\uparrow. Também liga entradas em diagramas feitos à mão, ilustrações de matrizes e esboços no estilo de diagramas de Hasse. Com \\searrow, \\swarrow e \\nwarrow, forma o conjunto completo de setas diagonais. Elas não se esticam, então, para setas diagonais longas, uma ferramenta de diagramas é mais adequada. Em notas de economia e de análise de dados, pode resumir uma tendência de alta numa célula de tabela. Defina o significado uma vez, já que se trata de notação, e não de um símbolo formal.",
  },
  "hook-left-arrow": {
    name: "Seta com gancho para a esquerda",
    meaning: "Desenha uma seta para a esquerda com um gancho na cauda, a forma invertida da seta de inclusão.",
    usage: "\\hookleftarrow espelha \\hookrightarrow e é usada quando uma inclusão ou injeção é desenhada da direita para a esquerda, por exemplo numa sequência exata escrita ao contrário ou num diagrama em que o contradomínio fica à esquerda. Fora isso, é rara. Na documentação de teclados, um glifo parecido representa a tecla Enter, mas esse é outro significado. Se as suas setas apontam quase todas para a direita, reescrever o enunciado com \\hookrightarrow costuma ser mais claro. Tem espaçamento de relação, como as outras setas. Seu comprimento coincide com o de \\hookrightarrow, então diagramas espelhados ficam equilibrados. Quando precisar de muitas setas assim, um ambiente de diagramas dedicado trata os ganchos automaticamente.",
  },
  "hook-right-arrow": {
    name: "Seta com gancho para a direita",
    meaning: "Desenha uma seta para a direita com a cauda em gancho, o símbolo padrão de uma aplicação injetiva, inclusão ou imersão.",
    usage: "Escrever \\iota : A \\hookrightarrow X diz ao leitor que a aplicação é uma inclusão ou injeção, sem precisar dizê-lo em palavras. A análise a usa para imersões contínuas de espaços de funções, como em H^1(\\Omega) \\hookrightarrow L^2(\\Omega), e as imersões compactas às vezes recebem uma decoração adicional. A teoria das categorias a usa para monomorfismos. A contraparte sobrejetiva é \\twoheadrightarrow. O gancho deixa a seta mais longa que \\to, então verifique o alinhamento em diagramas. É uma relação, então o TeX a cerca de espaçamento largo.",
  },
  "southeast-arrow": {
    name: "Seta sudeste",
    meaning: "Desenha uma seta diagonal apontando para baixo e para a direita, para tendências decrescentes e arestas de diagramas.",
    usage: "\\searrow muitas vezes abrevia “decresce até”, como em \\varepsilon_n \\searrow 0 para uma sequência monótona decrescente. Complementa \\nearrow, \\swarrow e \\nwarrow em diagramas informais, como uma grade 2 por 2 de objetos. Físicos a usam em esboços de níveis de energia ou de cadeias de decaimento. As setas têm tamanho fixo, então servem para uso rápido em linha, e não para diagramas caprichados. O nome vem de southeast (sudeste), e não de search. Leitores que não a conhecem podem esperar um ícone de busca, então uma breve definição ajuda. Em tabelas que resumem monotonicidade, \\nearrow e \\searrow dão um visual compacto.",
    example: "\\varepsilon_n \\searrow 0 \\quad \\text{quando } n \\to \\infty",
  },
  "left-harpoon-up": {
    name: "Arpão para a esquerda com farpa para cima",
    meaning: "Desenha um arpão apontando para a esquerda com a farpa em cima, metade de uma ponta de seta voltada para a esquerda.",
    usage: "\\leftharpoonup é usado principalmente como peça de construção ou em notações especializadas. Alguns textos de física põem um arpão sobre vetores, e empilhar \\rightharpoonup sobre \\leftharpoondown recria as setas de equilíbrio, embora \\rightleftharpoons já exista. Também pode aparecer em diagramas de reações. Como os arpões se parecem muito em tamanhos pequenos, escolha a direção da farpa de propósito e mantenha a consistência. Na maioria dos documentos, aparece dentro de outras construções, e não sozinho. Seus parentes são \\rightharpoonup, \\leftharpoondown e \\rightharpoondown, que diferem apenas na direção e no lado da farpa. Como as outras setas, recebe espaçamento de relação.",
  },
  "right-harpoon-up": {
    name: "Arpão para a direita com farpa para cima",
    meaning: "Desenha um arpão apontando para a direita com a farpa em cima, o sinal usual da convergência fraca.",
    usage: "A análise funcional escreve u_n \\rightharpoonup u para a convergência fraca, distinguindo-a da convergência forte u_n \\to u. A convergência fraca-estrela costuma ser escrita \\overset{*}{\\rightharpoonup}. A física às vezes usa um arpão para a direita como acento de vetor. Ele também forma a metade superior do símbolo de equilíbrio \\rightleftharpoons na química. Mantenha \\rightharpoonup separado de \\rightharpoondown, cuja farpa fica embaixo, já que os leitores podem tratá-los como notações diferentes. No KaTeX e no LaTeX, o glifo tem espaçamento de relação, então u_n \\rightharpoonup u se espaça como um sinal de igual. Ao escrever, mencione o espaço em que a convergência é fraca, como no exemplo.",
    example: "u_n \\rightharpoonup u \\text{ em } H^1(\\Omega)",
  },
  "southwest-arrow": {
    name: "Seta sudoeste",
    meaning: "Desenha uma seta diagonal apontando para baixo e para a esquerda, sobretudo para diagramas e esboços de fluxo.",
    usage: "\\swarrow mostra um passo para baixo e para a esquerda, como numa grade de objetos desenhada à mão ou para ilustrar como os termos se combinam num determinante de matriz. Junto com \\nearrow, \\searrow e \\nwarrow, cobre as quatro diagonais. Ela não se estica, então setas diagonais longas exigem uma ferramenta de diagramas. De vez em quando marca uma tendência numa tabela, mas \\searrow é mais comum para valores decrescentes. Combine-a com o espaçamento \\quad em arrays para posicioná-la corretamente.",
  },
  "left-harpoon-down": {
    name: "Arpão para a esquerda com farpa para baixo",
    meaning: "Desenha um arpão apontando para a esquerda com a farpa embaixo, a metade inferior de uma ponta de seta dividida.",
    usage: "\\leftharpoondown é a metade inferior do símbolo de equilíbrio \\rightleftharpoons, em que fica sob \\rightharpoonup. Sozinho, aparece raramente, em alguns diagramas de reações ou como marcador de convergência fraca invertida. Se você quer uma seta de equilíbrio, use \\rightleftharpoons diretamente, em vez de empilhar arpões à mão. Note que os arpões são distintos de \\leftarrow e não devem ser trocados por ela sem cuidado. Tem espaçamento de relação, como as setas comuns. Seus irmãos são \\leftharpoonup, \\rightharpoonup e \\rightharpoondown. Na maioria dos artigos você nem vai precisar dele, já que uma seta simples diz o mesmo com mais clareza.",
  },
  "right-harpoon-down": {
    name: "Arpão para a direita com farpa para baixo",
    meaning: "Desenha um arpão apontando para a direita com a farpa embaixo, variante de meia seta com a farpa inferior.",
    usage: "\\rightharpoondown é o espelho de \\rightharpoonup quanto à posição da farpa e aparece em algumas notações de equilíbrio e em acentos de vetor. Como \\rightharpoonup é o símbolo estabelecido para a convergência fraca, usar \\rightharpoondown com esse sentido confundiria o leitor. Às vezes forma par com \\leftharpoonup em \\leftrightharpoons, que é a disposição de equilíbrio invertida. Como em todos os arpões, verifique se a farpa fica visível no PDF final no tamanho de fonte escolhido. Seus irmãos \\leftharpoonup e \\leftharpoondown completam o conjunto de quatro arpões. Como as outras setas, recebe espaçamento de relação.",
  },
  "northwest-arrow": {
    name: "Seta noroeste",
    meaning: "Desenha uma seta diagonal apontando para cima e para a esquerda, usada sobretudo em diagramas e ilustrações.",
    usage: "\\nwarrow é a menos comum das quatro setas diagonais. Aparece em arrays feitos à mão que mostram como as entradas se relacionam, como as dependências numa tabela de programação dinâmica em que uma célula depende da vizinha superior esquerda. Combinada com \\nearrow, \\searrow e \\swarrow, permite esboçar pequenos diagramas sem um pacote de desenho. Para diagramas comutativos caprichados, um ambiente de diagramas dedicado dá comprimentos de seta e rótulos adequados. Seu tamanho fixo e o espaçamento de relação a tornam prática dentro de arrays e tabelas. Ler as quatro setas diagonais como direções da bússola em inglês (northeast, southeast, southwest, northwest) ajuda a lembrar os nomes.",
  },
};

export default text;
