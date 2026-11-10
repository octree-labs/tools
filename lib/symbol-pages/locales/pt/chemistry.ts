import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/chemistry/<slug>. */
const text: SymbolPageTranslations = {
  "equilibrium-arrow": {
    name: "Seta de equilíbrio",
    meaning: "Par de meias-setas opostas (arpões) que indica uma reação química em equilíbrio dinâmico.",
    usage: "A IUPAC recomenda arpões para o equilíbrio, como em N_2 + 3H_2 \\rightleftharpoons 2NH_3, enquanto duas setas completas indicam um processo reversível em geral. O arpão de cima aponta para a direita, acompanhando a reação direta. Seu espelho é \\leftrightharpoons, com o arpão para a esquerda em cima. É uma relação, então o TeX o espaça como o =. Para escrever condições acima da seta, como um catalisador, pode-se usar \\overset{\\text{Fe}}{\\rightleftharpoons}, embora ferramentas próprias de química deem setas mais longas. Na física, o mesmo símbolo às vezes denota uma correspondência nos dois sentidos.",
  },
  "reversible-reaction": {
    name: "Reação reversível",
    meaning: "Duas setas completas empilhadas, a da esquerda em cima e a da direita embaixo, usadas para reações reversíveis ou aplicações nos dois sentidos.",
    usage: "Alguns textos de química usam setas duplas completas para uma reação que pode ocorrer nos dois sentidos, reservando os arpões (\\rightleftharpoons) para o equilíbrio propriamente dito; a maior parte da escrita moderna usa arpões nos dois casos. Atenção à ordem de empilhamento: \\leftrightarrows coloca a seta para a esquerda em cima, enquanto \\rightleftarrows coloca a seta para a direita em cima, o que costuma ser o desejado quando a reação direta vai da esquerda para a direita. Não as confunda com \\leftrightarrow, uma única seta de duas pontas. Na teoria das categorias, o par muitas vezes denota uma adjunção ou um par de aplicações paralelas.",
  },
  "isotope": {
    name: "Isótopo",
    meaning: "Notação de nuclídeo com o número de massa como sobrescrito à esquerda e o número atômico como subscrito à esquerda, aqui o carbono-14.",
    usage: "O grupo vazio {} dá aos índices algo a que se prender, colocando-os à esquerda do símbolo do elemento. Um defeito: o TeX alinha o subscrito à esquerda sob o sobrescrito, então o 6 de um só algarismo fica longe do C. Complete-o com \\phantom{1}6 para alinhar os números à direita, junto ao símbolo. Equações nucleares combinam essas notações, como no decaimento beta do carbono-14 em nitrogênio-14. Use \\text ou \\mathrm para o elemento, para que fique em tipo reto; o número atômico costuma ser omitido quando o elemento já o determina, o que dá {}^{14}\\text{C}.",
  },
  "superscript-charge": {
    name: "Carga em sobrescrito",
    meaning: "Notação de íon com a carga em sobrescrito, aqui o cátion sódio com uma única carga positiva.",
    usage: "Escreva íons com carga múltipla com o número antes do sinal, \\text{Ca}^{2+} e \\text{SO}_4^{2-}, seguindo a ordem da IUPAC. As chaves importam: ^{2+} mantém os dois caracteres no sobrescrito. Um menos final num sobrescrito é tratado como unário, então ^{-} sai limpo. Use \\mathrm{Na} em vez de \\text{Na} se a fórmula puder aparecer dentro de um teorema ou legenda em itálico, pois \\text copia a fonte ao redor, enquanto \\mathrm é sempre reto. Quando subscritos e cargas coincidem, a carga fica acima da contagem, como no sulfato.",
  },
  "subscript-count": {
    name: "Contagem em subscrito",
    meaning: "Fórmula molecular da água, com o subscrito 2 contando os átomos de hidrogênio em cada molécula.",
    usage: "Símbolos de elementos devem ser retos, e por isso cada grupo de letras vai dentro de \\text; um H_2O em itálico pareceria um produto de variáveis. Um equivalente mais curto é \\mathrm{H_2O}, que mantém tudo reto, inclusive o subscrito, e é imune ao itálico ao redor. Subscritos contam apenas átomos e nunca devem ser confundidos com cargas em sobrescrito. Fórmulas com parênteses seguem o mesmo padrão, \\mathrm{Ca(OH)_2}. Para muita química, um pacote próprio de química poupa trabalho, mas para algumas fórmulas essa abordagem manual é perfeitamente adequada.",
  },
  "degrees-celsius": {
    name: "Graus Celsius",
    meaning: "Unidade grau Celsius, formada por um círculo elevado e um C reto; a água congela a 0 °C.",
    usage: "O sinal de grau é \\circ num sobrescrito; um o ou um 0 está errado. O estilo do SI põe um espaço entre o número e a unidade, então escreva 25\\,^{\\circ}\\text{C} com um espaço fino, e nunca coloque espaço entre o sinal de grau e o C. Diferenças de temperatura em Celsius são iguais às diferenças em kelvin, o que importa em trabalhos com capacidade térmica. \\text fica em itálico dentro de teoremas; \\mathrm{C} evita isso. Pacotes de unidades oferecem comandos semânticos, mas essa construção é a abordagem manual comum e funciona em qualquer lugar, inclusive no KaTeX.",
  },
  "bond": {
    name: "Ligação simples",
    meaning: "Ligação covalente simples entre dois átomos de carbono, desenhada como um traço curto entre os símbolos dos elementos.",
    usage: "No modo matemático o hífen vira um sinal de menos com espaçamento de operador binário, então a ligação aparece com espaços em volta, parecendo mais uma subtração. Escrevê-la como \\text{C}{-}\\text{C} remove o espaçamento e dá uma ligação justa. Comprimentos e energias de ligação costumam ser citados junto, por exemplo uma ligação C-C de cerca de 154 pm. Para fórmulas estruturais condensadas como \\mathrm{CH_3{-}CH_3}, vale o mesmo truque das chaves. Para algo além de algumas ligações, ferramentas de desenho ou um pacote de estruturas produzem fórmulas estruturais de verdade.",
  },
  "double-bond": {
    name: "Ligação dupla",
    meaning: "Ligação dupla carbono-carbono, uma ligação sigma e uma pi, característica de alcenos como o eteno.",
    usage: "Como = é uma relação no modo matemático, o TeX insere espaços largos dos dois lados, o que parece uma equação e não uma ligação. Colocá-lo entre chaves, \\text{C}{=}\\text{C}, o transforma num símbolo comum e aproxima os átomos. Alcenos se escrevem como \\mathrm{H_2C{=}CH_2}. A ligação dupla é mais curta e mais forte que uma simples e impede a rotação, dando origem aos isômeros cis-trans. Mantenha-a junta aos átomos para que o leitor não a confunda com um sinal de igual numa linha de reação.",
  },
  "triple-bond": {
    name: "Ligação tripla",
    meaning: "Ligação tripla carbono-carbono, típica de alcinos como o etino (acetileno), desenhada com três traços horizontais.",
    usage: "\\equiv é uma relação, o mesmo símbolo usado para congruência (a \\equiv b \\pmod n) e identidade, então por padrão recebe espaçamento largo; {\\equiv} produz uma ligação mais justa entre os átomos. Uma ligação tripla tem uma componente sigma e duas pi e é a mais curta das ligações carbono-carbono. O gás nitrogênio se escreve \\mathrm{N{\\equiv}N}. Algumas fontes desenham \\equiv um pouco largo, o que cai bem na química. Evite \\cong ou \\approx, que se parecem um pouco mas significam isomorfismo e aproximação.",
  },
  "partial-charge": {
    name: "Carga parcial",
    meaning: "Carga parcial positiva num átomo de uma ligação polar, escrita como um delta minúsculo com um sinal de mais.",
    usage: "Na água, os hidrogênios têm \\delta^{+} e o oxigênio \\delta^{-}, a separação de cargas que dá origem às ligações de hidrogênio. Aqui o delta significa «uma fração de», não uma variação, então não o confunda com \\Delta. Para pôr o rótulo acima de um átomo, use \\overset{\\delta^{+}}{\\text{H}}, que mantém a fórmula legível. Alguns textos escrevem \\delta+ no meio da linha sem sobrescrito; a forma com sobrescrito é mais comum em textos compostos. Combine-o com \\delta^{-} no parceiro mais eletronegativo; \\delta\\delta^{+} denota uma carga parcial ainda menor.",
  },
  "electron": {
    name: "Elétron",
    meaning: "Símbolo do elétron, um e minúsculo com uma carga negativa em sobrescrito, usado em semirreações redox.",
    usage: "As semiequações equilibram a carga com elétrons, como em \\text{Cu}^{2+} + 2e^{-} \\to \\text{Cu}. O pósitron é e^{+}. Guias de estilo da física costumam compor símbolos de partículas em tipo reto, \\mathrm{e}^{-}, o que também evita confusão com o número de Euler quando há exponenciais por perto. Como e^- com um sobrescrito de um só token funciona, as chaves são opcionais, mas mantêm a consistência com cargas de vários caracteres. Na notação nuclear, um elétron também pode ser escrito {}^{\\phantom{-}0}_{-1}e ou como \\beta^{-} quando emitido num decaimento. O antineutrino do decaimento beta é escrito \\bar{\\nu}_e ao lado dele.",
  },
  "aqueous": {
    name: "Aquoso",
    meaning: "Símbolo de estado para aquoso: a espécie está dissolvida em água, como os íons em solução.",
    usage: "Os símbolos de estado vêm depois da fórmula, na mesma linha como \\text{NaCl(aq)} ou como subscrito, \\text{NaCl}_{\\text{(aq)}}; as duas formas são aceitas, então escolha uma. Digitar (aq) no modo matemático sem \\text daria a e q em itálico com espaçamento matemático, por isso o envoltório importa. Equações iônicas líquidas dependem desse rótulo para mostrar quais espécies se dissociam. Ao escrever muitas equações, defina uma macro como \\newcommand{\\aq}{\\text{(aq)}}. \\mathrm{(aq)} é uma alternativa que continua reta em contextos itálicos. Ele também marca prótons hidratados, escritos \\text{H}^{+}\\text{(aq)}.",
  },
  "solid": {
    name: "Sólido",
    meaning: "Símbolo de estado que marca uma espécie como sólida, muitas vezes um precipitado ou um eletrodo metálico.",
    usage: "Reações de precipitação terminam com um sólido, como \\text{AgCl(s)}, e a termoquímica depende disso: a entalpia de formação do carbono se refere ao grafite no estado sólido. Alguns textos mais antigos usam uma seta para baixo para indicar um precipitado; o símbolo entre parênteses é a forma preferida pela IUPAC. Escreva-o logo depois da fórmula, sem espaço. Colocá-lo em \\text mantém o s reto; no modo matemático, um s sem envoltório ficaria em itálico e poderia ser confundido com a unidade segundo ou com uma variável.",
  },
  "liquid": {
    name: "Líquido",
    meaning: "Símbolo de estado para um líquido puro, como a água ou o mercúrio, escrito depois da fórmula química.",
    usage: "Equações de combustão distinguem \\text{H}_2\\text{O(l)} de \\text{H}_2\\text{O(g)} porque a variação de entalpia difere pelo calor de vaporização. Note a diferença entre (l), um líquido puro, e (aq), uma solução em água. O tipo reto é especialmente importante aqui: em algumas fontes, um l itálico parece o algarismo 1 ou uma barra vertical, o que pode confundir o leitor. Usar \\text ou \\mathrm garante uma letra reta e nítida. Mantenha o símbolo diretamente junto à fórmula, sem espaçamento extra.",
  },
  "gas-state-symbol-g": {
    name: "Símbolo de estado gasoso (g)",
    meaning: "Símbolo de estado para a fase gasosa, junto às fórmulas de gases e vapores nas equações.",
    usage: "As espécies em fase gasosa importam para as constantes de equilíbrio em pressão, K_p, e para os cálculos com gases ideais; marcá-las com (g) torna essas dependências explícitas. Textos mais antigos às vezes usam uma seta para cima para mostrar um gás que escapa, mas hoje se prefere o símbolo de estado. Um bom hábito é rotular todas as espécies numa equação termoquímica, para que os valores de entalpia não sejam ambíguos. Se o documento tiver muitas fórmulas, uma macro como \\newcommand{\\gas}{\\text{(g)}} evita erros de digitação. \\mathrm{(g)} dá o mesmo resultado reto dentro de texto em itálico.",
  },
};

export default text;
