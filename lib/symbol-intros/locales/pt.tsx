import type { IntroLocale } from "../localized";
import { Cmd, IntroLink, IntroP } from "../ui";

/** Brazilian Portuguese (route locale `pt`). */
const pt: IntroLocale = {
  languageTag: "pt",
  labels: {
    symbol: "Símbolo",
    command: "Comando",
    use: "Uso",
    package: "Pacote",
    builtIn: "integrado",
    copy: "Copiar",
  },
  intros: {
    arrows: {
      title: "Setas no LaTeX: como fazer uma seta no LaTeX",
      intro: (
        <IntroP>
          As setas no LaTeX são comandos do modo matemático que levam o nome da sua direção: para
          fazer uma seta no LaTeX, use <Cmd>{"$\\rightarrow$"}</Cmd> para &rarr;,{" "}
          <Cmd>{"$\\leftarrow$"}</Cmd> para &larr; e <Cmd>{"$\\Rightarrow$"}</Cmd> para a seta dupla
          &rArr;. A tabela reúne as 12 setas mais usadas, com o pacote de que cada uma precisa; a
          lista completa de símbolos de setas está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: as setas mais usadas",
      use: {
        "\\rightarrow": "Seta para a direita",
        "\\to": "Aplicação entre conjuntos, limites (x \u2192 \u221e)",
        "\\leftarrow": "Seta para a esquerda, atribuição",
        "\\leftrightarrow": "Seta bidirecional (esquerda-direita)",
        "\\Rightarrow": "Implica (seta dupla)",
        "\\Leftrightarrow": "Se e somente se",
        "\\mapsto": "Regra de uma função, x \u21a6 x\u00b2",
        "\\longrightarrow": "Seta longa para a direita",
        "\\uparrow": "Seta para cima",
        "\\downarrow": "Seta para baixo",
        "\\hookrightarrow": "Injeção, inclusão",
        "\\xrightarrow{f}": "Seta com texto em cima, estica conforme o texto",
      },
      faqHeading: "Perguntas frequentes sobre setas no LaTeX",
      faq: [
        {
          question: "Como faço uma seta no LaTeX?",
          answer:
            "Setas são símbolos matemáticos, então ficam no modo matemático: $\\rightarrow$ (ou a forma curta $\\to$) gera uma seta para a direita, $\\leftarrow$ uma seta para a esquerda e $\\leftrightarrow$ uma seta bidirecional. Com a primeira letra maiúscula você obtém a versão de traço duplo, por exemplo \\Rightarrow e \\Leftrightarrow. Nenhuma delas precisa de pacote.",
        },
        {
          question: "Como faço uma seta longa no LaTeX?",
          answer:
            "Acrescente o prefixo long ao nome: \\longrightarrow, \\longleftarrow e \\longleftrightarrow, ou \\Longrightarrow e \\Longleftrightarrow para setas duplas, e \\longmapsto para uma seta de aplicação longa. Se a seta precisar crescer junto com um rótulo, use \\xrightarrow{...} do amsmath.",
        },
        {
          question: "Como coloco texto em cima de uma seta no LaTeX?",
          answer:
            "Carregue o amsmath e use \\xrightarrow{texto} ou \\xleftarrow{texto}; a seta se estica para caber o rótulo. Um argumento opcional coloca texto embaixo da seta: \\xrightarrow[embaixo]{em cima}. Para uma seta de tamanho fixo, você também pode escrever \\overset{f}{\\rightarrow}.",
        },
        {
          question: "Como faço uma seta dupla no LaTeX?",
          answer:
            "Use \\Rightarrow para \u21d2, \\Leftarrow para \u21d0 e \\Leftrightarrow para \u21d4. Em lógica, \\implies (amsmath) e o comando integrado \\iff dão as mesmas setas com um espaçamento maior. Para duas setas sobrepostas, use \\rightleftarrows (amssymb), ou \\rightleftharpoons para equilíbrios químicos.",
        },
        {
          question: "Como uso uma seta no modo texto do LaTeX?",
          answer:
            "Digitar \\rightarrow fora do modo matemático gera o erro \u201cMissing $ inserted\u201d. Envolva o comando como $\\rightarrow$ ou use os comandos de modo texto \\textrightarrow, \\textleftarrow, \\textuparrow e \\textdownarrow, que fazem parte do núcleo do LaTeX (textcomp) e usam a mesma fonte do texto ao redor.",
        },
      ],
    },
    math: {
      title: "Símbolos matemáticos no LaTeX: o essencial",
      intro: (
        <IntroP>
          Os símbolos matemáticos do LaTeX só funcionam no modo matemático, então coloque-os entre{" "}
          <Cmd>{"$...$"}</Cmd> para fórmulas no meio do texto ou entre <Cmd>{"\\[...\\]"}</Cmd> para
          uma equação em destaque. Os do dia a dia são integrados: <Cmd>{"\\pm"}</Cmd>,{" "}
          <Cmd>{"\\times"}</Cmd>, <Cmd>{"\\div"}</Cmd> e <Cmd>{"\\cdot"}</Cmd> para a aritmética,{" "}
          <Cmd>{"\\neq"}</Cmd>, <Cmd>{"\\leq"}</Cmd>, <Cmd>{"\\geq"}</Cmd> e{" "}
          <Cmd>{"\\approx"}</Cmd> para comparações, <Cmd>{"\\infty"}</Cmd>,{" "}
          <Cmd>{"\\sqrt{x}"}</Cmd> e <Cmd>{"\\frac{a}{b}"}</Cmd>. Expoentes e índices usam{" "}
          <Cmd>{"^"}</Cmd> e <Cmd>{"_"}</Cmd>, com chaves quando ocupam mais de um caractere:{" "}
          <Cmd>{"x^{2n}"}</Cmd>. Símbolos extras como <Cmd>{"\\mathbb{R}"}</Cmd> e{" "}
          <Cmd>{"\\therefore"}</Cmd> vêm do amssymb. A tabela reúne os símbolos matemáticos mais
          usados, com o pacote de que cada um precisa; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: símbolos matemáticos do dia a dia",
      use: {
        "\\pm": "Mais ou menos",
        "\\times": "Multiplicação (vezes)",
        "\\div": "Divisão",
        "\\cdot": "Ponto centralizado, multiplicação",
        "\\neq": "Diferente de",
        "\\leq": "Menor ou igual a",
        "\\approx": "Aproximadamente igual",
        "\\infty": "Infinito",
        "\\sqrt{x}": "Raiz quadrada (\\sqrt[n]{x} para a raiz n-ésima)",
        "\\frac{a}{b}": "Fração",
        "x^{2n}": "Sobrescrito (expoente)",
        "\\mathbb{R}": "Números reais",
      },
      faqHeading: "Perguntas frequentes sobre símbolos matemáticos no LaTeX",
      faq: [
        {
          question: "Como escrevo símbolos matemáticos no LaTeX?",
          answer:
            "Coloque-os no modo matemático: $...$ para fórmulas no meio do texto e \\[...\\] ou um ambiente equation para as destacadas, e use o comando do símbolo, por exemplo $a \\times b \\neq c$. Usar um comando matemático fora do modo matemático gera o erro Missing $ inserted.",
        },
        {
          question: "De quais pacotes preciso para os símbolos matemáticos no LaTeX?",
          answer:
            "A maioria dos símbolos é integrada. Adicione \\usepackage{amsmath} para ambientes como align e comandos como \\text e \\operatorname, e \\usepackage{amssymb} para símbolos extras como \\mathbb{R}, \\therefore, \\nexists e \\varnothing. O mathtools estende o amsmath com correções e ferramentas adicionais.",
        },
        {
          question: "Como encontro o comando LaTeX de um símbolo?",
          answer:
            "Pesquise nesta página ou nas páginas de categorias e clique em um cartão para copiar o comando. Se você só sabe a aparência do símbolo, o Detexify permite desenhá-lo e sugere os comandos correspondentes, e a Comprehensive LaTeX Symbol List cobre milhares de símbolos.",
        },
      ],
    },
    "set-theory": {
      title: "Símbolos de teoria dos conjuntos no LaTeX: subconjunto, pertinência, união e conjunto vazio",
      intro: (
        <IntroP>
          Os símbolos de teoria dos conjuntos no LaTeX são quase todos integrados. “Pertence a” é{" "}
          <Cmd>{"\\in"}</Cmd> (∈) e “não pertence a” é <Cmd>{"\\notin"}</Cmd>; “subconjunto” é{" "}
          <Cmd>{"\\subset"}</Cmd> (⊂) e “subconjunto ou igual”, <Cmd>{"\\subseteq"}</Cmd> (⊆); a
          união e a interseção são <Cmd>{"\\cup"}</Cmd> e <Cmd>{"\\cap"}</Cmd>, a diferença de
          conjuntos é <Cmd>{"\\setminus"}</Cmd> e o conjunto vazio é <Cmd>{"\\emptyset"}</Cmd> (∅).
          Alguns extras exigem o amssymb: o conjunto vazio mais arredondado{" "}
          <Cmd>{"\\varnothing"}</Cmd>, o subconjunto próprio <Cmd>{"\\subsetneq"}</Cmd> e conjuntos
          numéricos como <Cmd>{"\\mathbb{N}"}</Cmd> e <Cmd>{"\\mathbb{R}"}</Cmd>. As chaves precisam
          ser escapadas, então um conjunto se escreve <Cmd>{"\\{1, 2, 3\\}"}</Cmd>. A tabela reúne os
          símbolos de teoria dos conjuntos mais usados, com o pacote de que cada um precisa; a lista
          completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: os símbolos de teoria dos conjuntos mais usados",
      use: {
        "\\in": "Pertence a",
        "\\notin": "Não pertence a",
        "\\subset": "Subconjunto",
        "\\subseteq": "Subconjunto ou igual",
        "\\subsetneq": "Subconjunto próprio (não igual)",
        "\\cup": "União",
        "\\cap": "Interseção",
        "A \\setminus B": "Diferença de conjuntos",
        "\\emptyset": "Conjunto vazio (\\varnothing no amssymb)",
        "\\mathbb{R}": "Números reais (também \\mathbb{N}, \\mathbb{Z}, \\mathbb{Q})",
        "\\{ x \\in A \\mid x > 0 \\}": "Notação de compreensão",
        "\\mathcal{P}(A)": "Conjunto das partes",
      },
      faqHeading: "Perguntas frequentes sobre teoria dos conjuntos no LaTeX",
      faq: [
        {
          question: "Como escrevo subconjunto no LaTeX?",
          answer:
            "Use \\subset para ⊂ e \\subseteq para ⊆, ambos integrados: $A \\subseteq B$. Para um subconjunto próprio que exclua explicitamente a igualdade, o amssymb oferece \\subsetneq (⊊). As versões de superconjunto são \\supset, \\supseteq e \\supsetneq, e \\not\\subset faz a negação.",
        },
        {
          question: "Como escrevo o símbolo de pertinência no LaTeX?",
          answer:
            "\\in gera ∈, como em $x \\in A$, e \\notin gera ∉. A forma invertida \\ni (∋) se lê “contém como elemento”. Os três são integrados.",
        },
        {
          question: "Como escrevo o conjunto vazio no LaTeX?",
          answer:
            "\\emptyset gera ∅ e é integrado. Muitos autores preferem o mais arredondado \\varnothing, que precisa de \\usepackage{amssymb}. Em todo caso, não use \\phi nem \\O, que são uma letra grega e uma letra escandinava.",
        },
      ],
    },
    logic: {
      title: "Símbolos de lógica no LaTeX",
      intro: (
        <>
          <IntroP>
            Os conectivos da lógica proposicional são <Cmd>{"\\land"}</Cmd> (e),{" "}
            <Cmd>{"\\lor"}</Cmd> (ou) e <Cmd>{"\\lnot"}</Cmd> (não); <Cmd>{"\\wedge"}</Cmd>,{" "}
            <Cmd>{"\\vee"}</Cmd> e <Cmd>{"\\neg"}</Cmd> são sinônimos idênticos. A implicação e a
            equivalência ficam melhores com <Cmd>{"\\implies"}</Cmd> (do amsmath) e{" "}
            <Cmd>{"\\iff"}</Cmd>, que acrescentam espaçamento de relação em volta das setas;{" "}
            <Cmd>{"\\Rightarrow"}</Cmd> e <Cmd>{"\\Leftrightarrow"}</Cmd> puros também funcionam. Os
            quantificadores são <Cmd>{"\\forall"}</Cmd> e <Cmd>{"\\exists"}</Cmd>, com{" "}
            <Cmd>{"\\nexists"}</Cmd> para &ldquo;não existe&rdquo;, e as constantes verdadeiro e
            falso são <Cmd>{"\\top"}</Cmd> e <Cmd>{"\\bot"}</Cmd>.
          </IntroP>
          <IntroP>
            A teoria da prova e a semântica têm seus próprios símbolos de dedução:{" "}
            <Cmd>{"\\vdash"}</Cmd> significa &ldquo;prova&rdquo; ou consequência sintática,{" "}
            <Cmd>{"\\models"}</Cmd> (também <Cmd>{"\\vDash"}</Cmd>) significa
            &ldquo;satisfaz&rdquo; ou consequência semântica, e <Cmd>{"\\nvdash"}</Cmd> nega o
            primeiro. Os marcadores de inferência <Cmd>{"\\therefore"}</Cmd> e{" "}
            <Cmd>{"\\because"}</Cmd> vêm do amssymb, assim como <Cmd>{"\\nexists"}</Cmd> e{" "}
            <Cmd>{"\\vDash"}</Cmd>. A equivalência lógica entre fórmulas costuma ser escrita{" "}
            <Cmd>{"\\equiv"}</Cmd>, a disjunção exclusiva é <Cmd>{"\\oplus"}</Cmd> e o traço de
            Sheffer (NAND) é <Cmd>{"\\uparrow"}</Cmd>. Os operadores modais <Cmd>{"\\Box"}</Cmd> e{" "}
            <Cmd>{"\\Diamond"}</Cmd> estão na página de{" "}
            <IntroLink href="/pt/symbols/modal-logic">símbolos de lógica modal</IntroLink>.
          </IntroP>
          <IntroP>
            Tudo isso funciona apenas no modo matemático, então coloque os símbolos entre{" "}
            <Cmd>{"$...$"}</Cmd> e carregue <Cmd>{"\\usepackage{amsmath, amssymb}"}</Cmd> no
            preâmbulo. Uma fórmula típica: <Cmd>{"\\forall x\\, (P(x) \\implies Q(x))"}</Cmd>. Para
            ver como eles se combinam com conjuntos, funções e relações, leia nosso guia de{" "}
            <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
              expressões matemáticas no LaTeX
            </IntroLink>
            .
          </IntroP>
        </>
      ),
    },
    physics: {
      title: "Símbolos de mecânica quântica no LaTeX",
      intro: (
        <IntroP>
          Os símbolos de mecânica quântica que os físicos mais escrevem são todos integrados ao
          LaTeX: a constante de Planck reduzida <Cmd>{"\\hbar"}</Cmd>, o bra{" "}
          <Cmd>{"\\langle \\psi |"}</Cmd> e o ket <Cmd>{"| \\psi \\rangle"}</Cmd>, operadores com
          chapéu como <Cmd>{"\\hat{H}"}</Cmd>, o adjunto <Cmd>{"A^\\dagger"}</Cmd>, o laplaciano{" "}
          <Cmd>{"\\nabla^2"}</Cmd> e a derivada temporal <Cmd>{"\\partial_t"}</Cmd>. Para uma
          notação bra-ket mais curta, os pacotes braket e physics acrescentam{" "}
          <Cmd>{"\\bra{}"}</Cmd>, <Cmd>{"\\ket{}"}</Cmd> e <Cmd>{"\\braket{}"}</Cmd>. A tabela reúne
          os símbolos de física quântica mais usados, com o pacote de que cada um precisa; a lista
          completa de símbolos de física está mais abaixo.
        </IntroP>
      ),
      use: {
        "\\hbar": "Constante de Planck reduzida (h cortado)",
        "\\langle \\psi |": "Bra, com comandos básicos",
        "| \\psi \\rangle": "Ket, com comandos básicos",
        "\\langle \\phi | \\psi \\rangle": "Produto interno (bra-ket)",
        "\\bra{\\psi}": "Bra",
        "\\ket{\\psi}": "Ket",
        "\\braket{\\phi|\\psi}": "Produto interno (physics: \\braket{\\phi}{\\psi})",
        "\\hat{H}": "Operador hamiltoniano",
        "A^\\dagger": "Adjunto hermitiano (adaga)",
        "\\nabla^2": "Laplaciano",
        "\\partial_t \\psi": "Derivada temporal",
        "\\otimes": "Produto tensorial de estados",
      },
      faqHeading: "Perguntas frequentes",
      faq: [
        {
          question: "Como escrevo a notação bra-ket no LaTeX?",
          answer:
            "Sem nenhum pacote, escreva um bra como \\langle \\psi |, um ket como | \\psi \\rangle e um produto interno como \\langle \\phi | \\psi \\rangle. Com \\usepackage{braket} você pode escrever \\bra{\\psi}, \\ket{\\psi} e \\braket{\\phi|\\psi}; com \\usepackage{physics} o produto interno recebe dois argumentos, \\braket{\\phi}{\\psi}. Carregue apenas um dos dois pacotes, já que ambos definem esses comandos.",
        },
        {
          question: "Como escrevo h cortado no LaTeX?",
          answer:
            "A constante de Planck reduzida \u210f é \\hbar, que é integrada e usada no modo matemático: $\\hbar$. A equação de Schr\u00f6dinger fica então i\\hbar \\partial_t \\psi = \\hat{H} \\psi.",
        },
        {
          question: "Como escrevo operadores e a adaga no LaTeX?",
          answer:
            "Marque os operadores com um chapéu, \\hat{H} ou \\hat{p}, e escreva o adjunto hermitiano com \\dagger como sobrescrito, A^\\dagger. Valores esperados são \\langle \\hat{A} \\rangle, ou \\expval{A} com o pacote physics, e comutadores são [\\hat{x}, \\hat{p}] = i\\hbar.",
        },
      ],
    },
    functions: {
      title: "Composição de funções e isomorfismo no LaTeX",
      intro: (
        <IntroP>
          A composição de funções no LaTeX é <Cmd>{"\\circ"}</Cmd>, como em{" "}
          <Cmd>{"g \\circ f"}</Cmd>, e o símbolo de isomorfismo no LaTeX é <Cmd>{"\\cong"}</Cmd>{" "}
          (&cong;), com <Cmd>{"\\simeq"}</Cmd> para uma equivalência mais fraca; os três são
          integrados. Uma função é declarada com <Cmd>{"f \\colon A \\to B"}</Cmd>, em que{" "}
          <Cmd>{"\\colon"}</Cmd> dá o espaçamento correto, e sua regra com <Cmd>{"\\mapsto"}</Cmd>,
          como em <Cmd>{"x \\mapsto x^2"}</Cmd>. A aplicação identidade é{" "}
          <Cmd>{"\\operatorname{id}"}</Cmd> do amsmath. A tabela reúne os comandos de funções e
          aplicações mais usados, com o pacote de que cada um precisa; a lista completa de símbolos
          está mais abaixo.
        </IntroP>
      ),
      use: {
        "f \\colon A \\to B": "Função de A em B",
        "x \\mapsto x^2": "Leva x em (regra da função)",
        "g \\circ f": "Composição, g após f",
        "f^{-1}": "Função inversa",
        "\\cong": "Isomorfo a",
        "\\simeq": "Homotopicamente equivalente, isomorfismo fraco",
        "\\xrightarrow{\\sim}": "Seta de isomorfismo",
        "\\operatorname{id}_A": "Aplicação identidade",
        "\\hookrightarrow": "Injeção, inclusão",
        "\\twoheadrightarrow": "Sobrejeção",
        "f|_A": "Restrição a A",
      },
      faqHeading: "Perguntas frequentes",
      faq: [
        {
          question: "Como escrevo a composição de funções no LaTeX?",
          answer:
            "Use \\circ, que é integrado: $g \\circ f$ gera g ∘ f, que se lê \u201cg após f\u201d. Escreva (g \\circ f)(x) = g(f(x)) para a regra. Não use um o minúsculo nem \\cdot, que têm tamanho e espaçamento errados.",
        },
        {
          question: "Como escrevo o símbolo de isomorfismo no LaTeX?",
          answer:
            "O símbolo de isomorfismo padrão ≅ é \\cong, integrado: $G \\cong H$. Para uma equivalência homotópica ou uma noção mais fraca, use \\simeq (≃), e para uma seta que é um isomorfismo, use \\xrightarrow{\\sim} do amsmath, ou \\cong sobre uma seta com \\xrightarrow{\\cong}.",
        },
        {
          question: "Como escrevo f: A → B no LaTeX?",
          answer:
            "Escreva f \\colon A \\to B. O comando \\colon dá o espaçamento de um sinal de pontuação; dois-pontos comuns são espaçados como uma relação e deixam espaço demais antes de A. Use \\mapsto para a regra, como em x \\mapsto x^2.",
        },
      ],
    },
    chemistry: {
      title: "Símbolos de química no LaTeX: setas de reação, equilíbrio e fórmulas",
      intro: (
        <IntroP>
          Para os símbolos de química no LaTeX, o pacote mhchem faz quase todo o trabalho:{" "}
          <Cmd>{"\\ce{2H2 + O2 -> 2H2O}"}</Cmd> compõe uma reação completa com os símbolos dos
          elementos em letra reta, índices e uma seta de reação. Sem o mhchem, a seta de reação é{" "}
          <Cmd>{"\\rightarrow"}</Cmd>, o símbolo de equilíbrio é <Cmd>{"\\rightleftharpoons"}</Cmd>{" "}
          e as fórmulas são escritas como <Cmd>{"\\mathrm{H_2O}"}</Cmd> no modo matemático para que
          as letras dos elementos não saiam em itálico. As condições de reação ficam sobre uma seta
          extensível com <Cmd>{"\\xrightarrow{\\Delta}"}</Cmd> do amsmath. A tabela reúne os
          símbolos de química mais usados, com o pacote de que cada um precisa; a lista completa
          está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: reações, setas e fórmulas",
      use: {
        "\\ce{2H2 + O2 -> 2H2O}": "Reação completa",
        "\\ce{A <=> B}": "Equilíbrio no mhchem",
        "\\rightarrow": "Produz (seta de reação)",
        "\\rightleftharpoons": "Símbolo de equilíbrio (arpões)",
        "\\xrightarrow{\\Delta}": "Seta com calor ou condições em cima",
        "\\mathrm{H_2O}": "Fórmula química no modo matemático",
        "\\mathrm{Na^+}": "Carga de um íon",
        "{}^{14}_{6}\\mathrm{C}": "Isótopo (número de massa e número atômico)",
        "\\Delta H^\\circ": "Variação de entalpia padrão",
        "\\uparrow": "Liberação de gás",
        "\\downarrow": "Precipitado",
        "\\ce{HC#CH}": "Ligação tripla (= para uma ligação dupla)",
      },
      faqHeading: "Perguntas frequentes sobre química no LaTeX",
      faq: [
        {
          question: "Como escrevo a seta de reação no LaTeX?",
          answer:
            "No modo matemático, a seta de reação é \\rightarrow, ou \\longrightarrow para uma mais longa. Com o mhchem, escreva -> dentro de \\ce{...}, por exemplo \\ce{A + B -> C}. Para colocar condições sobre a seta, use \\xrightarrow{\\Delta} do amsmath, ou ->[\\Delta] dentro de \\ce.",
        },
        {
          question: "Como escrevo o símbolo de equilíbrio no LaTeX?",
          answer:
            "O símbolo de equilíbrio ⇌ é \\rightleftharpoons, que é integrado: $\\mathrm{N_2} + 3\\mathrm{H_2} \\rightleftharpoons 2\\mathrm{NH_3}$. No mhchem, escreva <=> dentro de \\ce{...}; ele também oferece <=>> e <<=> para equilíbrios deslocados para a direita ou para a esquerda.",
        },
        {
          question: "Como escrevo fórmulas químicas com índices no LaTeX?",
          answer:
            "Use \\ce{H2SO4} do mhchem, que coloca os dígitos como índices e mantém as letras em letra reta. Sem o mhchem, escreva \\mathrm{H_2SO_4} no modo matemático; um simples H_2SO_4 deixaria as letras em itálico, como se fossem variáveis.",
        },
      ],
    },
    probability: {
      title: "Símbolos de probabilidade e estatística no LaTeX",
      intro: (
        <IntroP>
          O símbolo de probabilidade no LaTeX é <Cmd>{"\\Pr"}</Cmd> ou <Cmd>{"\\mathbb{P}"}</Cmd>, e o
          operador esperança é <Cmd>{"\\mathbb{E}[X]"}</Cmd>. A tabela reúne os oito comandos mais
          usados, com o pacote de que cada um precisa; a lista completa de símbolos de probabilidade
          e estatística está mais abaixo.
        </IntroP>
      ),
      use: {
        "\\Pr(A)": "Operador de probabilidade (Pr em letra reta)",
        "\\mathbb{P}(A)": "Símbolo de probabilidade, negrito de quadro-negro",
        "\\mathbb{E}[X]": "Operador esperança",
        "\\operatorname{Var}(X)": "Variância",
        "\\operatorname{Cov}(X, Y)": "Covariância",
        "P(A \\mid B)": "Probabilidade condicional",
        "X \\sim \\mathcal{N}(\\mu, \\sigma^2)": "Tem distribuição (normal)",
        "\\binom{n}{k}": "Coeficiente binomial",
      },
      faqHeading: "Perguntas frequentes",
      faq: [
        {
          question: "Como escrevo o símbolo de probabilidade no LaTeX?",
          answer:
            "Use o operador integrado \\Pr, como em \\Pr(A), para obter Pr em letra reta com espaçamento de operador, ou o negrito de quadro-negro \\mathbb{P}(A) com \\usepackage{amssymb}. Para a probabilidade condicional, escreva P(A \\mid B); \\mid espaça a barra corretamente, o que um | simples não faz.",
        },
        {
          question: "Como escrevo o operador esperança no LaTeX?",
          answer:
            "Escreva \\mathbb{E}[X] (amssymb) para um E em negrito de quadro-negro, ou \\operatorname{E}[X] (amsmath) para um E em letra reta. Para reutilizá-lo, declare-o uma vez no preâmbulo com \\DeclareMathOperator{\\E}{\\mathbb{E}} e depois escreva \\E[X].",
        },
        {
          question: "Como escrevo a variância no LaTeX?",
          answer:
            "A variância não tem um comando integrado, então escreva \\operatorname{Var}(X) com o amsmath, ou declare \\DeclareMathOperator{\\Var}{Var} no preâmbulo e use \\Var(X). O desvio padrão é \\sigma, e a variância também pode ser escrita \\sigma^2.",
        },
      ],
    },
    greek: {
      title: "Letras gregas no LaTeX: o alfabeto grego completo",
      intro: (
        <IntroP>
          As letras gregas no LaTeX são escritas com uma barra invertida e o nome da letra no modo
          matemático: <Cmd>{"\\alpha"}</Cmd>, <Cmd>{"\\beta"}</Cmd>, <Cmd>{"\\gamma"}</Cmd>,{" "}
          <Cmd>{"\\pi"}</Cmd>. Escreva o nome com inicial maiúscula para a forma maiúscula, como{" "}
          <Cmd>{"\\Gamma"}</Cmd>, <Cmd>{"\\Delta"}</Cmd> e <Cmd>{"\\Omega"}</Cmd>; as maiúsculas
          iguais a letras latinas, como Alfa e Beta, não têm comando, então são escritas A e B.
          Várias letras têm formas variantes: <Cmd>{"\\varepsilon"}</Cmd>,{" "}
          <Cmd>{"\\vartheta"}</Cmd>, <Cmd>{"\\varphi"}</Cmd> e <Cmd>{"\\varsigma"}</Cmd>. Todas são
          integradas. A tabela reúne as letras gregas mais usadas; o alfabeto grego completo no
          LaTeX está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: as letras gregas mais usadas",
      use: {
        "\\alpha": "Alfa",
        "\\beta": "Beta",
        "\\gamma": "Gama (\\Gamma maiúscula)",
        "\\delta": "Delta (\\Delta maiúscula)",
        "\\epsilon": "Épsilon ϵ (\\varepsilon para ε)",
        "\\theta": "Teta (variante \\vartheta, \\Theta maiúscula)",
        "\\lambda": "Lambda (\\Lambda maiúscula)",
        "\\mu": "Mi",
        "\\pi": "Pi (\\Pi maiúscula)",
        "\\sigma": "Sigma (\\Sigma maiúscula)",
        "\\phi": "Fi ϕ (\\varphi para φ, \\Phi maiúscula)",
        "\\omega": "Ômega (\\Omega maiúscula)",
      },
      faqHeading: "Perguntas frequentes sobre letras gregas no LaTeX",
      faq: [
        {
          question: "Como escrevo letras gregas no LaTeX?",
          answer:
            "Digite uma barra invertida e o nome da letra no modo matemático: $\\alpha$, $\\beta$, $\\gamma$, $\\theta$, $\\pi$. Para a maiúscula, coloque a primeira letra em maiúscula: \\Gamma, \\Delta, \\Theta, \\Lambda, \\Xi, \\Pi, \\Sigma, \\Upsilon, \\Phi, \\Psi, \\Omega. Nenhum pacote é necessário.",
        },
        {
          question: "Por que não existe o comando \\Alpha no LaTeX?",
          answer:
            "As maiúsculas Alfa, Beta, Épsilon, Zeta, Eta, Iota, Capa, Mi, Ni, Ômicron, Rô, Tau e Qui são iguais a letras latinas, por isso o LaTeX não as define; escreva A, B, E etc. O ômicron minúsculo, da mesma forma, é simplesmente o.",
        },
        {
          question: "Como deixo uma letra grega em negrito no LaTeX?",
          answer:
            "Use \\boldsymbol{\\alpha} do amsmath ou \\bm{\\alpha} do pacote bm. \\mathbf só afeta letras latinas, dígitos e gregas maiúsculas, então \\mathbf{\\alpha} deixa o alfa inalterado.",
        },
      ],
    },
    quantifiers: {
      title: "Quantificadores no LaTeX: para todo, existe e pertinência",
      intro: (
        <IntroP>
          Os quantificadores no LaTeX são <Cmd>{"\\forall"}</Cmd> (para todo, ∀) e{" "}
          <Cmd>{"\\exists"}</Cmd> (existe, ∃), ambos integrados; <Cmd>{"\\nexists"}</Cmd> para “não
          existe” vem do amssymb, e a existência única se escreve <Cmd>{"\\exists!"}</Cmd>. Os
          enunciados quantificados costumam combiná-los com a pertinência, <Cmd>{"\\in"}</Cmd>, e um
          separador como vírgula ou dois-pontos:{" "}
          <Cmd>{"\\forall x \\in \\mathbb{R},\\ x^2 \\geq 0"}</Cmd>. A negação é{" "}
          <Cmd>{"\\neg"}</Cmd>, e a implicação e a equivalência são <Cmd>{"\\implies"}</Cmd> e{" "}
          <Cmd>{"\\iff"}</Cmd>. A tabela reúne os símbolos de quantificadores mais usados, com o
          pacote de que cada um precisa; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: quantificadores e conectivos",
      use: {
        "\\forall": "Para todo",
        "\\exists": "Existe",
        "\\nexists": "Não existe",
        "\\exists!": "Existe exatamente um",
        "\\forall x \\in A": "Para todo x em A",
        "\\in": "Pertence a",
        "\\notin": "Não pertence a",
        "\\neg": "Não",
        "\\land": "E",
        "\\lor": "Ou",
        "\\implies": "Implica",
        "\\iff": "Se e somente se",
      },
      faqHeading: "Perguntas frequentes sobre quantificadores no LaTeX",
      faq: [
        {
          question: "Como escrevo “para todo” no LaTeX?",
          answer:
            "Use \\forall no modo matemático: $\\forall x \\in \\mathbb{R}$ gera ∀x ∈ ℝ. É integrado. Acrescente um separador depois da variável ligada, por exemplo \\forall x,\\ P(x) ou \\forall x : P(x), para que a fórmula fique clara.",
        },
        {
          question: "Como escrevo “existe” e “não existe” no LaTeX?",
          answer:
            "“Existe” é \\exists (∃), integrado. “Não existe” é \\nexists (∄), que precisa de \\usepackage{amssymb}; \\not\\exists também funciona sem pacote, mas fica menos limpo. Para a existência única, escreva \\exists!.",
        },
        {
          question: "Como escrevo “tal que” no LaTeX?",
          answer:
            "Na notação de compreensão, use uma barra vertical ou dois-pontos: \\{ x \\in A \\mid x > 0 \\} ou \\{ x : x > 0 \\}; \\mid dá o espaçamento correto. Em um enunciado quantificado é comum usar uma vírgula ou \\text{ tal que }, como em \\exists x \\in A \\text{ tal que } x > 0.",
        },
      ],
    },
    boolean: {
      title: "Símbolos de álgebra booleana no LaTeX: AND, OR e XOR",
      intro: (
        <IntroP>
          Os símbolos de álgebra booleana no LaTeX reaproveitam os conectivos lógicos: o símbolo AND
          é <Cmd>{"\\land"}</Cmd> (&and;), o símbolo OR é <Cmd>{"\\lor"}</Cmd> (&or;) e NOT é{" "}
          <Cmd>{"\\lnot"}</Cmd> (&not;). O XOR no LaTeX é <Cmd>{"\\oplus"}</Cmd> (&oplus;), ou{" "}
          <Cmd>{"\\veebar"}</Cmd> do amssymb. A implicação e a equivalência são{" "}
          <Cmd>{"\\Rightarrow"}</Cmd> e <Cmd>{"\\iff"}</Cmd>, as constantes verdadeiro e falso são{" "}
          <Cmd>{"\\top"}</Cmd> e <Cmd>{"\\bot"}</Cmd>, e os quantificadores são{" "}
          <Cmd>{"\\forall"}</Cmd> e <Cmd>{"\\exists"}</Cmd>. Todos ficam no modo matemático. A tabela
          reúne os comandos mais usados, com o pacote de que cada um precisa; a lista completa de
          símbolos de portas lógicas está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: operações booleanas",
      use: {
        "\\land": "AND, conjunção (sinônimo \\wedge)",
        "\\lor": "OR, disjunção (sinônimo \\vee)",
        "\\lnot": "NOT, negação (sinônimo \\neg)",
        "\\overline{A}": "NOT, notação com barra",
        "\\oplus": "XOR (ou exclusivo)",
        "\\veebar": "XOR, estilo da lógica",
        "\\barwedge": "NAND",
        "\\Rightarrow": "Implica",
        "\\iff": "Se e somente se (equivalência)",
        "\\top": "Verdadeiro, 1",
        "\\bot": "Falso, 0",
        "\\forall x \\, \\exists y": "Para todo, existe",
      },
      faqHeading: "Perguntas frequentes sobre símbolos booleanos no LaTeX",
      faq: [
        {
          question: "Como escrevo os símbolos AND e OR no LaTeX?",
          answer:
            "AND (∧) é \\land ou seu sinônimo \\wedge, e OR (∨) é \\lor ou \\vee. Ambos são integrados e ficam no modo matemático: $A \\land B$, $A \\lor B$. NOT é \\lnot ou \\neg. Na notação de circuitos, você também pode escrever A \\cdot B para AND, A + B para OR e \\overline{A} para NOT.",
        },
        {
          question: "Como escrevo XOR no LaTeX?",
          answer:
            "Use \\oplus (⊕), que é integrado: $A \\oplus B$. Textos de lógica às vezes usam \\veebar (⊻), que precisa de \\usepackage{amssymb}. O XNOR costuma ser escrito \\odot ou \\overline{A \\oplus B}.",
        },
        {
          question: "De qual pacote preciso para os símbolos de álgebra booleana no LaTeX?",
          answer:
            "De nenhum para os habituais: \\land, \\lor, \\lnot, \\oplus, \\Rightarrow, \\iff, \\top, \\bot, \\forall e \\exists são integrados. Carregue o amssymb para \\veebar e \\barwedge, e o amsmath para \\implies.",
        },
      ],
    },
    brackets: {
      title: "Delimitadores no LaTeX: chaves, colchetes angulares, função piso e normas",
      intro: (
        <IntroP>
          Os delimitadores do LaTeX são de dois tipos: os que se digitam diretamente, como{" "}
          <Cmd>{"("}</Cmd>, <Cmd>{")"}</Cmd>, <Cmd>{"["}</Cmd> e <Cmd>{"]"}</Cmd>, e os que precisam
          de um comando, como <Cmd>{"\\{"}</Cmd> e <Cmd>{"\\}"}</Cmd> para as chaves,{" "}
          <Cmd>{"\\langle"}</Cmd> e <Cmd>{"\\rangle"}</Cmd> para os colchetes angulares,{" "}
          <Cmd>{"\\lfloor"}</Cmd> e <Cmd>{"\\rfloor"}</Cmd> para a função piso, e{" "}
          <Cmd>{"\\lVert"}</Cmd> e <Cmd>{"\\rVert"}</Cmd> para uma norma. Se você colocar{" "}
          <Cmd>{"\\left"}</Cmd> e <Cmd>{"\\right"}</Cmd> antes de qualquer par, o LaTeX ajusta o
          tamanho dos delimitadores ao conteúdo, por exemplo uma fração. Os colchetes duplos
          precisam do pacote stmaryrd. A tabela reúne os delimitadores mais usados, com o pacote de
          que cada um precisa; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: os delimitadores mais usados",
      use: {
        "\\left( \\frac{a}{b} \\right)": "Parênteses que se ajustam ao conteúdo",
        "\\{ x \\}": "Chaves (escapadas)",
        "\\langle x \\rangle": "Colchetes angulares, produto escalar",
        "\\lfloor x \\rfloor": "Função piso (parte inteira)",
        "\\lceil x \\rceil": "Função teto",
        "\\lvert x \\rvert": "Valor absoluto",
        "\\lVert x \\rVert": "Norma",
        "\\llbracket x \\rrbracket": "Colchetes duplos",
        "\\bigl( x \\bigr)": "Tamanhos manuais: \\big, \\Big, \\bigg, \\Bigg",
        "[a, b)": "Intervalo semiaberto",
        "\\underbrace{a + b}_{n}": "Chave sob uma expressão (\\overbrace em cima)",
      },
      faqHeading: "Perguntas frequentes sobre delimitadores no LaTeX",
      faq: [
        {
          question: "Como escrevo chaves no LaTeX?",
          answer:
            "As chaves são os caracteres de agrupamento do LaTeX, então um { ou } sozinho não é impresso. Escape-as: \\{ e \\} funcionam no texto e no modo matemático, por exemplo $\\{1, 2, 3\\}$. Use \\left\\{ e \\right\\} para chaves que crescem com o conteúdo; \\lbrace e \\rbrace são alternativas com nome.",
        },
        {
          question: "Como escrevo colchetes angulares no LaTeX?",
          answer:
            "Use \\langle e \\rangle, como em $\\langle u, v \\rangle$. Não use as teclas < e >: elas são símbolos de relação, com outra forma e outro espaçamento. Para conteúdo alto, escreva \\left\\langle ... \\right\\rangle.",
        },
        {
          question: "Como escrevo colchetes duplos no LaTeX?",
          answer:
            "Carregue \\usepackage{stmaryrd} e escreva \\llbracket x \\rrbracket para os colchetes duplos ⟦x⟧ usados em semântica e para intervalos de inteiros. Sem o pacote, [\\![ x ]\\!] os imita juntando dois colchetes com um espaço fino negativo.",
        },
      ],
    },
    calculus: {
      title: "Símbolos de cálculo no LaTeX: derivadas, integrais e limites",
      intro: (
        <IntroP>
          Os símbolos básicos de cálculo no LaTeX são todos integrados. Uma derivada no LaTeX é uma
          fração, <Cmd>{"\\frac{dy}{dx}"}</Cmd>, ou uma linha, <Cmd>{"f'(x)"}</Cmd>; uma derivada
          parcial usa <Cmd>{"\\partial"}</Cmd>, como em{" "}
          <Cmd>{"\\frac{\\partial f}{\\partial x}"}</Cmd>; uma integral é{" "}
          <Cmd>{"\\int_a^b f(x)\\,dx"}</Cmd>; e um limite é <Cmd>{"\\lim_{x \\to 0}"}</Cmd>. Integrais
          múltiplas como <Cmd>{"\\iint"}</Cmd> e <Cmd>{"\\iiint"}</Cmd> vêm do amsmath, e o pacote
          physics acrescenta atalhos como <Cmd>{"\\dv"}</Cmd> e <Cmd>{"\\pdv"}</Cmd>. A tabela reúne
          os símbolos de cálculo mais usados, com o pacote de que cada um precisa; a lista completa
          está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: derivadas, integrais e limites",
      use: {
        "\\frac{dy}{dx}": "Derivada (notação de Leibniz)",
        "f'(x)": "Derivada (notação com linha); f''(x) para a segunda",
        "\\frac{d^2 y}{dx^2}": "Segunda derivada",
        "\\frac{\\partial f}{\\partial x}": "Derivada parcial",
        "\\dot{x}": "Derivada temporal (ponto de Newton); \\ddot{x} para a segunda",
        "\\int_a^b f(x)\\,dx": "Integral definida",
        "\\iint_D f\\,dA": "Integral dupla (\\iiint para a tripla)",
        "\\oint_C": "Integral de contorno (integral de linha fechada)",
        "\\lim_{x \\to 0}": "Limite",
        "\\nabla f": "Gradiente",
        "\\dv{f}{x}": "Atalho para a derivada",
        "\\pdv{f}{x}": "Atalho para a derivada parcial",
      },
      faqHeading: "Perguntas frequentes sobre símbolos de cálculo no LaTeX",
      faq: [
        {
          question: "Como escrevo uma derivada no LaTeX?",
          answer:
            "Escreva-a como uma fração no modo matemático: $\\frac{dy}{dx}$ para dy/dx e $\\frac{d^2y}{dx^2}$ para a segunda derivada. A notação com linha é f'(x) e f''(x), e a notação de ponto de Newton é \\dot{x} e \\ddot{x}. Todas são integradas; o pacote physics acrescenta \\dv{y}{x} como atalho.",
        },
        {
          question: "Como escrevo uma derivada parcial no LaTeX?",
          answer:
            "Use o símbolo integrado \\partial dentro de uma fração: $\\frac{\\partial f}{\\partial x}$, e $\\frac{\\partial^2 f}{\\partial x \\partial y}$ para uma segunda derivada mista. Com \\usepackage{physics}, \\pdv{f}{x} e \\pdv{f}{x}{y} produzem o mesmo resultado.",
        },
        {
          question: "Como escrevo uma integral com limites no LaTeX?",
          answer:
            "Use \\int com um índice e um expoente: $\\int_a^b f(x)\\,dx$. Acrescente \\limits (\\int\\limits_a^b) para colocar os limites em cima e embaixo do sinal. Para integrais duplas e triplas, carregue o amsmath e use \\iint e \\iiint, que espaçam os sinais corretamente; \\oint dá uma integral de contorno fechado.",
        },
      ],
    },
    combinatorics: {
      title: "Coeficiente binomial e fatorial no LaTeX: símbolos de combinatória",
      intro: (
        <IntroP>
          Para escrever “n escolhe k” no LaTeX, carregue o amsmath e use <Cmd>{"\\binom{n}{k}"}</Cmd>,
          que imprime o coeficiente binomial entre parênteses e ajusta o tamanho a fórmulas no meio
          do texto ou em destaque; <Cmd>{"\\dbinom"}</Cmd> e <Cmd>{"\\tbinom"}</Cmd> forçam o tamanho
          grande ou pequeno. Um fatorial no LaTeX não precisa de comando nenhum:{" "}
          <Cmd>{"n!"}</Cmd> é a letra seguida de um ponto de exclamação, então a fórmula do
          coeficiente binomial é <Cmd>{"\\frac{n!}{k!(n-k)!}"}</Cmd>. A tabela reúne os comandos de
          combinatória mais usados, com o pacote de que cada um precisa; a lista completa de
          símbolos está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: coeficientes binomiais e fatoriais",
      use: {
        "\\binom{n}{k}": "n escolhe k (coeficiente binomial)",
        "\\dbinom{n}{k}": "Binomial em tamanho de destaque, mesmo no meio do texto",
        "\\tbinom{n}{k}": "Binomial em tamanho de texto, mesmo em fórmulas destacadas",
        "{n \\choose k}": "\\choose do TeX puro (evite com o amsmath)",
        "n!": "Fatorial",
        "n!!": "Fatorial duplo",
        "\\frac{n!}{k!(n-k)!}": "Fórmula do coeficiente binomial",
        "\\binom{n}{k_1, k_2, \\ldots, k_m}": "Coeficiente multinomial",
        "P(n, k) = \\frac{n!}{(n-k)!}": "Arranjos (permutações de n elementos tomados k a k)",
        "n^{\\underline{k}}": "Fatorial decrescente",
      },
      faqHeading: "Perguntas frequentes sobre símbolos de combinatória no LaTeX",
      faq: [
        {
          question: "Como escrevo “n escolhe k” no LaTeX?",
          answer:
            "Carregue o amsmath e escreva \\binom{n}{k}, que imprime n sobre k entre parênteses e ajusta o tamanho a fórmulas no meio do texto ou em destaque. Use \\dbinom{n}{k} para forçar o tamanho grande das fórmulas destacadas e \\tbinom{n}{k} para o tamanho pequeno de texto. A forma do TeX puro {n \\choose k} também funciona, mas o amsmath a desaconselha.",
        },
        {
          question: "Como escrevo um fatorial no LaTeX?",
          answer:
            "Um fatorial não precisa de comando: escreva n! no modo matemático. O fatorial duplo é n!!, e para uma expressão coloque-a entre parênteses, como em (n+1)!. A fórmula do coeficiente binomial é \\frac{n!}{k!(n-k)!}.",
        },
        {
          question: "Como escrevo um coeficiente multinomial no LaTeX?",
          answer:
            "Reaproveite \\binom com uma lista no argumento de baixo: \\binom{n}{k_1, k_2, \\ldots, k_m}. Ou escreva-o por extenso como \\frac{n!}{k_1!\\,k_2!\\cdots k_m!}.",
        },
      ],
    },
    complex: {
      title: "Símbolo dos números complexos e conjugado no LaTeX",
      intro: (
        <IntroP>
          O símbolo dos números complexos é o C de quadro-negro &#8450;, que no LaTeX se escreve{" "}
          <Cmd>{"\\mathbb{C}"}</Cmd> com o pacote amssymb. O conjugado complexo no LaTeX é{" "}
          <Cmd>{"\\bar{z}"}</Cmd> para uma única letra ou <Cmd>{"\\overline{z}"}</Cmd> para uma
          expressão inteira, e na física se escreve <Cmd>{"z^*"}</Cmd>. As partes real e imaginária
          são <Cmd>{"\\Re"}</Cmd> e <Cmd>{"\\Im"}</Cmd>, ou a forma reta{" "}
          <Cmd>{"\\operatorname{Re}"}</Cmd>; o módulo é <Cmd>{"|z|"}</Cmd> e o argumento{" "}
          <Cmd>{"\\arg z"}</Cmd>. A tabela reúne os símbolos de números complexos mais usados, com o
          pacote de que cada um precisa; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: notação de números complexos",
      use: {
        "\\mathbb{C}": "Conjunto dos números complexos",
        "z = a + bi": "Forma algébrica",
        "\\bar{z}": "Conjugado complexo (uma letra)",
        "\\overline{z + w}": "Conjugado de uma expressão",
        "z^*": "Conjugado, notação da física",
        "\\Re(z)": "Parte real, ℜ gótico (Fraktur)",
        "\\Im(z)": "Parte imaginária, ℑ gótico (Fraktur)",
        "\\operatorname{Re}(z)": "Parte real, em letra reta (também Im)",
        "|z|": "Módulo (valor absoluto)",
        "\\arg z": "Argumento",
        "re^{i\\theta}": "Forma polar",
        "\\mathrm{i}": "Unidade imaginária em letra reta",
      },
      faqHeading: "Perguntas frequentes sobre números complexos no LaTeX",
      faq: [
        {
          question: "Qual é o símbolo dos números complexos?",
          answer:
            "O conjunto dos números complexos é o C de quadro-negro, ℂ. No LaTeX, escreva \\mathbb{C} com \\usepackage{amssymb} (ou amsfonts), como em z \\in \\mathbb{C}. Os números reais são \\mathbb{R}, no mesmo estilo.",
        },
        {
          question: "Como escrevo o conjugado complexo no LaTeX?",
          answer:
            "Use \\bar{z} para uma única letra e \\overline{z + w} para uma expressão mais longa, já que \\overline se estende sobre todo o argumento. Na física e na engenharia é comum escrever z^*, e a transposta conjugada de uma matriz é A^\\dagger ou A^*.",
        },
        {
          question: "Como escrevo as partes real e imaginária no LaTeX?",
          answer:
            "Os comandos integrados \\Re e \\Im imprimem as letras góticas ℜ e ℑ. Para as formas retas Re e Im usadas pela maioria dos textos atuais, escreva \\operatorname{Re}(z) e \\operatorname{Im}(z) com o amsmath, ou redefina os originais uma vez com \\renewcommand{\\Re}{\\operatorname{Re}}.",
        },
      ],
    },
    "computer-science": {
      title: "Símbolos de ciência da computação no LaTeX: O grande, função piso e notação de algoritmos",
      intro: (
        <IntroP>
          A maioria dos símbolos de ciência da computação no LaTeX são comandos matemáticos comuns.
          A notação O grande no LaTeX é <Cmd>{"O(n \\log n)"}</Cmd> ou, em muitos artigos, a
          caligráfica <Cmd>{"\\mathcal{O}(n)"}</Cmd>; suas parentes são <Cmd>{"\\Omega(n)"}</Cmd>,{" "}
          <Cmd>{"\\Theta(n)"}</Cmd> e o o pequeno <Cmd>{"o(n)"}</Cmd>. As funções piso e teto são{" "}
          <Cmd>{"\\lfloor x \\rfloor"}</Cmd> e <Cmd>{"\\lceil x \\rceil"}</Cmd>, o XOR é{" "}
          <Cmd>{"\\oplus"}</Cmd>, a atribuição em pseudocódigo é <Cmd>{"\\gets"}</Cmd>, e uma
          definição com := fica mais limpa com <Cmd>{"\\coloneqq"}</Cmd> do mathtools. A tabela
          reúne os símbolos de ciência da computação mais usados, com o pacote de que cada um
          precisa; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: complexidade, arredondamento e algoritmos",
      use: {
        "O(n \\log n)": "O grande (limite superior)",
        "\\mathcal{O}(n)": "O grande, estilo caligráfico",
        "\\Omega(n)": "Ômega grande (limite inferior)",
        "\\Theta(n^2)": "Teta grande (limite justo)",
        "o(n)": "o pequeno",
        "\\lfloor \\log_2 n \\rfloor": "Piso do logaritmo na base 2",
        "\\lceil n/2 \\rceil": "Função teto",
        "a \\bmod n": "Módulo como operador binário",
        "\\oplus": "XOR",
        "x \\gets x + 1": "Atribuição em pseudocódigo",
        "\\coloneqq": "Definido como (:=)",
        "\\{0,1\\}^*": "Todas as cadeias binárias (estrela de Kleene)",
      },
      faqHeading: "Perguntas frequentes sobre símbolos de ciência da computação no LaTeX",
      faq: [
        {
          question: "Como escrevo a notação O grande no LaTeX?",
          answer:
            "Escreva O(n) no modo matemático: $O(n \\log n)$. Muitos autores preferem a forma caligráfica $\\mathcal{O}(n)$, que não precisa de pacotes. Ômega grande e Teta grande usam as maiúsculas gregas \\Omega(n) e \\Theta(n), e o o pequeno é o(n). Escreva \\log em vez de log, para que o nome da função saia em letra reta.",
        },
        {
          question: "Como escrevo as funções piso e teto no LaTeX?",
          answer:
            "Use os delimitadores integrados \\lfloor x \\rfloor para ⌊x⌋ e \\lceil x \\rceil para ⌈x⌉. Para conteúdo alto, coloque \\left e \\right antes, como em \\left\\lfloor \\frac{n}{2} \\right\\rfloor, ou defina \\floor e \\ceil com \\DeclarePairedDelimiter do mathtools.",
        },
        {
          question: "Como escrevo mod no LaTeX?",
          answer:
            "Use \\bmod para o operador binário, a \\bmod n, e \\pmod{n} para uma congruência, como em a \\equiv b \\pmod{n}, que imprime (mod n) com o espaçamento correto. Ambos são integrados; o amsmath acrescenta \\mod{n} e \\pod{n} para outros estilos de espaçamento.",
        },
      ],
    },
    "differential-geometry": {
      title: "Símbolos de geometria diferencial no LaTeX: formas, conexões e curvatura",
      intro: (
        <IntroP>
          Os símbolos de geometria diferencial no LaTeX são construídos com poucos comandos
          integrados. O produto exterior de formas é <Cmd>{"\\alpha \\wedge \\beta"}</Cmd>, com{" "}
          <Cmd>{"\\bigwedge^k V"}</Cmd> para a potência exterior; a derivada exterior é{" "}
          <Cmd>{"d\\omega"}</Cmd>; a derivada covariante é <Cmd>{"\\nabla_X Y"}</Cmd>; e a derivada
          de Lie é <Cmd>{"\\mathcal{L}_X"}</Cmd>. Os símbolos de Christoffel e os tensores de
          curvatura são letras com índices, <Cmd>{"\\Gamma^k_{ij}"}</Cmd> e{" "}
          <Cmd>{"R^l{}_{ijk}"}</Cmd>, e o espaço tangente em um ponto é <Cmd>{"T_pM"}</Cmd>. A tabela
          reúne os símbolos de geometria diferencial mais usados; todos são integrados, e a lista
          completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: variedades, formas e curvatura",
      use: {
        "T_pM": "Espaço tangente em p",
        "T^*_pM": "Espaço cotangente em p",
        "\\nabla_X Y": "Derivada covariante (conexão)",
        "\\Gamma^k_{ij}": "Símbolos de Christoffel",
        "R^l{}_{ijk}": "Tensor de curvatura de Riemann",
        "g_{ij}": "Tensor métrico",
        "\\alpha \\wedge \\beta": "Produto exterior de formas",
        "\\bigwedge^k V": "Potência exterior, k-formas",
        "d\\omega": "Derivada exterior",
        "\\mathcal{L}_X": "Derivada de Lie",
        "[X, Y]": "Colchete de Lie de campos vetoriais",
        "\\star\\omega": "Estrela de Hodge",
      },
      faqHeading: "Perguntas frequentes sobre símbolos de geometria diferencial no LaTeX",
      faq: [
        {
          question: "Como escrevo o produto exterior (cunha) no LaTeX?",
          answer:
            "Use \\wedge entre formas, $\\alpha \\wedge \\beta$; é um operador binário com o espaçamento correto. Para a potência exterior ou um produto exterior grande sobre um conjunto de índices, use o operador grande \\bigwedge, como em \\bigwedge^k V ou \\bigwedge_{i=1}^{n} dx_i. Ambos são integrados.",
        },
        {
          question: "Como escrevo a derivada covariante no LaTeX?",
          answer:
            "Escreva \\nabla com a direção como índice: $\\nabla_X Y$, ou \\nabla_\\mu V^\\nu em notação de índices. As derivadas parciais ao longo das coordenadas são escritas \\partial_\\mu, e a notação com ponto e vírgula V^\\nu{}_{;\\mu} também é comum em textos de física.",
        },
        {
          question: "Como escrevo a derivada de Lie e a derivada exterior no LaTeX?",
          answer:
            "A derivada de Lie é um L caligráfico com índice, \\mathcal{L}_X T. A derivada exterior é um d comum, d\\omega; alguns autores a escrevem em letra reta com \\mathrm{d}\\omega para distingui-la de uma variável.",
        },
      ],
    },
    finance: {
      title: "Símbolos de moeda e finanças no LaTeX: dólar, euro e fórmulas",
      intro: (
        <IntroP>
          Os símbolos de moeda no LaTeX exigem um pouco de cuidado, porque o cifrão inicia o modo
          matemático. Escape-o como <Cmd>{"\\$"}</Cmd> para imprimir um cifrão (útil também para o
          real, R$); o símbolo da libra é <Cmd>{"\\pounds"}</Cmd>, e o do euro é{" "}
          <Cmd>{"\\texteuro"}</Cmd>, ou <Cmd>{"\\euro"}</Cmd> do pacote eurosym para o desenho
          oficial. A porcentagem é <Cmd>{"\\%"}</Cmd>, porque um % sem escape inicia um comentário, e
          o por mil é <Cmd>{"\\textperthousand"}</Cmd>. Fórmulas financeiras como o valor presente
          líquido ou os juros compostos são matemática comum construída com <Cmd>{"\\sum"}</Cmd> e{" "}
          <Cmd>{"\\frac"}</Cmd>. A tabela reúne os símbolos financeiros mais usados, com o pacote de
          que cada um precisa; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: moedas, porcentagens e fórmulas",
      use: {
        "\\$": "Cifrão (dólar)",
        "\\pounds": "Libra esterlina",
        "\\texteuro": "Símbolo do euro (textcomp, integrado)",
        "\\euro": "Símbolo oficial do euro",
        "\\textyen": "Símbolo do iene (textcomp, integrado)",
        "\\%": "Porcentagem",
        "\\textperthousand": "Por mil (textcomp, integrado)",
        "\\mathrm{NPV} = \\sum_{t=0}^{n} \\frac{C_t}{(1+r)^t}": "Valor presente líquido (VPL)",
        "A = P\\left(1 + \\frac{r}{n}\\right)^{nt}": "Juros compostos",
        "A = Pe^{rt}": "Capitalização contínua",
        "\\pm": "Mais ou menos",
      },
      faqHeading: "Perguntas frequentes sobre símbolos financeiros no LaTeX",
      faq: [
        {
          question: "Como escrevo o cifrão no LaTeX?",
          answer:
            "Escape-o: \\$ imprime $ tanto no modo texto quanto no modo matemático, por exemplo \\$100 ou R\\$ 50. Um $ sem escape abre ou fecha o modo matemático, por isso um cifrão sem escape em um preço causa erros ou transforma o resto da linha em uma fórmula.",
        },
        {
          question: "Como escrevo o símbolo do euro no LaTeX?",
          answer:
            "\\texteuro (do textcomp, que agora faz parte do núcleo do LaTeX) imprime o símbolo do euro da fonte atual sem pacotes adicionais. Para o desenho oficial da UE, carregue \\usepackage{eurosym} e escreva \\euro. Com XeLaTeX ou LuaLaTeX, você também pode digitar € diretamente.",
        },
        {
          question: "Como escrevo o sinal de porcentagem no LaTeX?",
          answer:
            "Escreva \\%. Um % sem escape inicia um comentário, então tudo o que vem depois dele na linha some do documento. Para o por mil, use \\textperthousand, e para números com unidades o pacote siunitx oferece \\qty{5}{\\percent}.",
        },
      ],
    },
    "game-theory": {
      title: "Símbolos de teoria dos jogos no LaTeX: estratégias, payoffs e equilíbrios",
      intro: (
        <IntroP>
          A notação de teoria dos jogos no LaTeX é feita principalmente de letras com índices, então
          o segredo é usar índices coerentes. A estratégia de um jogador é <Cmd>{"s_i"}</Cmd>, as
          estratégias de todos os outros são <Cmd>{"s_{-i}"}</Cmd>, o payoff é{" "}
          <Cmd>{"u_i(s_i, s_{-i})"}</Cmd>, e um equilíbrio de Nash é marcado com um asterisco,{" "}
          <Cmd>{"s^*"}</Cmd>. As estratégias mistas usam <Cmd>{"\\sigma_i \\in \\Delta(S_i)"}</Cmd>,
          as preferências usam <Cmd>{"\\succ"}</Cmd> e <Cmd>{"\\succeq"}</Cmd>, e a melhor resposta
          fica melhor com <Cmd>{"\\operatorname{BR}_i"}</Cmd> do amsmath. As matrizes de payoff são
          tabelas montadas com array. A tabela reúne os símbolos de teoria dos jogos mais usados,
          com o pacote de que cada um precisa; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: estratégias, payoffs e equilíbrios",
      use: {
        "s_i \\in S_i": "Estratégia do jogador i",
        "s_{-i}": "Estratégias de todos os outros jogadores",
        "u_i(s_i, s_{-i})": "Payoff (utilidade) do jogador i",
        "s^* = (s_1^*, \\ldots, s_n^*)": "Perfil de equilíbrio de Nash",
        "\\operatorname{BR}_i(s_{-i})": "Melhor resposta",
        "\\sigma_i \\in \\Delta(S_i)": "Estratégia mista",
        "\\mathbb{E}[u_i(\\sigma)]": "Payoff esperado",
        "a \\succ b": "Preferência estrita",
        "a \\succeq b": "Preferência fraca",
        "\\max_{s_i} \\min_{s_{-i}} u_i": "Valor maximin",
        "\\phi_i(v)": "Valor de Shapley",
        "v(S)": "Valor da coalizão S",
      },
      faqHeading: "Perguntas frequentes sobre símbolos de teoria dos jogos no LaTeX",
      faq: [
        {
          question: "Como escrevo uma matriz de payoff no LaTeX?",
          answer:
            "Use um array dentro de uma fórmula destacada, com uma linha vertical depois dos rótulos das linhas: \\begin{array}{c|cc} & L & R \\\\ \\hline U & 3,3 & 0,5 \\\\ D & 5,0 & 1,1 \\end{array}. Para um jogo na forma estratégica com os nomes dos jogadores, o pacote sgame oferece um ambiente game.",
        },
        {
          question: "Como escrevo s menos i no LaTeX?",
          answer:
            "Coloque o sinal de menos e o índice entre chaves: s_{-i}. Sem as chaves, s_-i rebaixa apenas o sinal de menos. O mesmo vale para perfis como (s_i', s_{-i}) e melhores respostas como BR_i(s_{-i}).",
        },
        {
          question: "Como marco um equilíbrio de Nash no LaTeX?",
          answer:
            "Use um asterisco como sobrescrito: s^* para o perfil e s_i^* para a estratégia de equilíbrio de um jogador. A condição de equilíbrio é u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) para todo s_i \\in S_i.",
        },
      ],
    },
    geometry: {
      title: "Símbolos de geometria no LaTeX: perpendicular, paralelo, ângulo e triângulo",
      intro: (
        <IntroP>
          Os símbolos de geometria no LaTeX são, em sua maioria, integrados. Perpendicular, que
          também é o símbolo de ortogonalidade, é <Cmd>{"\\perp"}</Cmd> (⊥), paralelo é{" "}
          <Cmd>{"\\parallel"}</Cmd> (∥), um ângulo é <Cmd>{"\\angle ABC"}</Cmd> e um triângulo é{" "}
          <Cmd>{"\\triangle ABC"}</Cmd>. Congruente é <Cmd>{"\\cong"}</Cmd> e semelhante é{" "}
          <Cmd>{"\\sim"}</Cmd>. Um segmento leva uma barra, <Cmd>{"\\overline{AB}"}</Cmd>, uma
          semirreta ou um vetor leva uma seta, <Cmd>{"\\overrightarrow{AB}"}</Cmd>, e o símbolo de
          grau é um círculo sobrescrito, <Cmd>{"90^\\circ"}</Cmd>. Só alguns extras, como{" "}
          <Cmd>{"\\measuredangle"}</Cmd> e <Cmd>{"\\nparallel"}</Cmd>, precisam do amssymb. A
          tabela reúne os símbolos de geometria mais usados, com o pacote de que cada um precisa; a
          lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: os símbolos de geometria mais usados",
      use: {
        "\\perp": "Perpendicular, ortogonal",
        "\\parallel": "Paralelo",
        "\\nparallel": "Não paralelo",
        "\\angle ABC": "Ângulo",
        "\\measuredangle ABC": "Ângulo medido",
        "\\triangle ABC": "Triângulo",
        "\\cong": "Congruente",
        "\\sim": "Semelhante",
        "\\overline{AB}": "Segmento",
        "\\overrightarrow{AB}": "Semirreta ou vetor",
        "\\overleftrightarrow{AB}": "Reta que passa por A e B",
        "90^\\circ": "Símbolo de grau",
      },
      faqHeading: "Perguntas frequentes sobre símbolos de geometria no LaTeX",
      faq: [
        {
          question: "Como escrevo o símbolo de perpendicular ou ortogonal no LaTeX?",
          answer:
            "Use \\perp no modo matemático: $AB \\perp CD$ imprime AB ⊥ CD. O mesmo comando serve para vetores ortogonais, u \\perp v, e para o complemento ortogonal V^\\perp. É integrado, então não precisa de pacote.",
        },
        {
          question: "Como escrevo o símbolo de triângulo no LaTeX?",
          answer:
            "\\triangle imprime △, como em $\\triangle ABC$, e não precisa de pacotes. O amssymb acrescenta o menor \\vartriangle e o preenchido \\blacktriangle.",
        },
        {
          question: "Como escrevo o símbolo de grau no LaTeX?",
          answer:
            "No modo matemático, escreva um círculo como sobrescrito: $90^\\circ$. No texto, \\textdegree imprime °, e o pacote siunitx dá um resultado uniforme com \\ang{45} ou \\qty{90}{\\degree}.",
        },
      ],
    },
    "graph-theory": {
      title: "Símbolos de teoria dos grafos no LaTeX: vértices, arestas, grau e coloração",
      intro: (
        <IntroP>
          A notação de teoria dos grafos no LaTeX é feita principalmente de letras comuns e
          operadores integrados. Um grafo é <Cmd>{"G = (V, E)"}</Cmd>, a adjacência é{" "}
          <Cmd>{"u \\sim v"}</Cmd>, o grau de um vértice é <Cmd>{"\\deg(v)"}</Cmd> (o operador{" "}
          <Cmd>{"\\deg"}</Cmd> é integrado), e os grafos completos e bipartidos completos são{" "}
          <Cmd>{"K_n"}</Cmd> e <Cmd>{"K_{m,n}"}</Cmd>. Os invariantes de grafos usam letras gregas: o
          número cromático <Cmd>{"\\chi(G)"}</Cmd>, o número de clique <Cmd>{"\\omega(G)"}</Cmd>, o
          número de independência <Cmd>{"\\alpha(G)"}</Cmd>, e os graus máximo e mínimo{" "}
          <Cmd>{"\\Delta(G)"}</Cmd> e <Cmd>{"\\delta(G)"}</Cmd>. Para desenhar o grafo em si, use o
          TikZ. A tabela reúne os símbolos de teoria dos grafos mais usados; todos são integrados,
          e a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: os símbolos de teoria dos grafos mais usados",
      use: {
        "G = (V, E)": "Grafo com conjunto de vértices V e conjunto de arestas E",
        "u \\sim v": "u é adjacente a v",
        "\\deg(v)": "Grau de um vértice",
        "\\deg^{+}(v)": "Grau de saída (\\deg^{-} para o grau de entrada)",
        "N(v)": "Vizinhança de v",
        "K_n": "Grafo completo",
        "K_{m,n}": "Grafo bipartido completo",
        "\\chi(G)": "Número cromático",
        "\\omega(G)": "Número de clique",
        "\\alpha(G)": "Número de independência",
        "\\Delta(G)": "Grau máximo (\\delta(G) para o mínimo)",
        "G \\cong H": "Grafos isomorfos",
      },
      faqHeading: "Perguntas frequentes sobre símbolos de teoria dos grafos no LaTeX",
      faq: [
        {
          question: "Como escrevo o grau de um vértice no LaTeX?",
          answer:
            "Use o operador integrado \\deg, que imprime deg em letra reta com o espaçamento correto: $\\deg(v)$. Para grafos direcionados, \\deg^{+}(v) e \\deg^{-}(v) dão o grau de saída e o grau de entrada, e o lema do aperto de mãos se escreve \\sum_{v \\in V} \\deg(v) = 2|E|.",
        },
        {
          question: "Como desenho um grafo no LaTeX?",
          answer:
            "Carregue \\usepackage{tikz}, posicione os vértices com \\node[circle,draw] (a) at (0,0) {a}; e ligue-os com \\draw (a) -- (b);. Para grafos maiores, a biblioteca graphs do TikZ e o pacote tkz-graph simplificam a sintaxe.",
        },
        {
          question: "Como escrevo o número cromático no LaTeX?",
          answer:
            "O número cromático é \\chi(G), com a letra grega qui. O índice cromático (número cromático de arestas) costuma ser escrito \\chi'(G), o número de clique \\omega(G) e o número de independência \\alpha(G). Todos são integrados.",
        },
      ],
    },
    latin: {
      title: "Letras latinas no LaTeX: letras especiais e acentos",
      intro: (
        <IntroP>
          As letras latinas que vão além de A a Z, como as ligaduras æ e œ, as escandinavas ø e å, o
          ß alemão e o ł polonês, têm cada uma um comando curto no LaTeX: <Cmd>{"\\ae"}</Cmd>,{" "}
          <Cmd>{"\\oe"}</Cmd>, <Cmd>{"\\o"}</Cmd>, <Cmd>{"\\aa"}</Cmd>, <Cmd>{"\\ss"}</Cmd> e{" "}
          <Cmd>{"\\l"}</Cmd>, com versões maiúsculas como <Cmd>{"\\AE"}</Cmd> e <Cmd>{"\\O"}</Cmd>.
          As letras acentuadas combinam um comando de acento com a letra base, por exemplo{" "}
          <Cmd>{"\\'e"}</Cmd> para é e <Cmd>{"\\~n"}</Cmd> para ñ (ou <Cmd>{"\\~a"}</Cmd> para ã).
          Todos são integrados e funcionam no modo texto. A tabela reúne os símbolos latinos mais
          usados; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: letras especiais e acentos",
      use: {
        "\\ae": "Ligadura æ (\\AE para Æ)",
        "\\oe": "Ligadura œ (\\OE para Œ)",
        "\\o": "O cortado ø (\\O para Ø)",
        "\\aa": "A com anel å (\\AA para Å)",
        "\\ss": "Eszett alemão ß",
        "\\l": "Ł polonês ł (\\L para Ł)",
        "\\i": "I sem pingo, base para acentos",
        "\\'e": "Acento agudo é",
        "\\\"o": "Trema ö",
        "\\~n": "Til ñ",
        "\\c{c}": "Cedilha ç",
        "\\v{s}": "Caron (háček) š",
      },
      faqHeading: "Perguntas frequentes sobre letras latinas no LaTeX",
      faq: [
        {
          question: "Como escrevo letras latinas especiais como æ, ø e ß no LaTeX?",
          answer:
            "Cada uma tem um comando integrado de modo texto: \\ae e \\AE para æ e Æ, \\oe e \\OE para œ e Œ, \\o e \\O para ø e Ø, \\aa e \\AA para å e Å, \\ss para ß, e \\l e \\L para ł e Ł. Desde 2018 o LaTeX também lê UTF-8, então você pode digitar as letras diretamente.",
        },
        {
          question: "Como uso esses caracteres latinos no modo matemático?",
          answer:
            "Os comandos só funcionam no modo texto, então coloque-os dentro de \\text{...} do amsmath, como em $x_{\\text{\\ae}}$. No modo matemático, as letras sem pingo têm comandos próprios, \\imath e \\jmath, usados para vetores com acento como \\hat{\\imath}.",
        },
        {
          question: "Por que as letras acentuadas não são copiadas nem hifenizadas corretamente no meu PDF?",
          answer:
            "Com a codificação de fonte OT1 padrão, o LaTeX monta as letras acentuadas a partir de duas peças. Acrescente \\usepackage[T1]{fontenc} ao preâmbulo para que é, ã e ç sejam glifos únicos, hifenizados, pesquisáveis e copiados corretamente.",
        },
      ],
    },
    "linear-algebra": {
      title: "Símbolos de álgebra linear no LaTeX: matrizes, vetores, transposta e normas",
      intro: (
        <IntroP>
          A álgebra linear no LaTeX começa com os ambientes de matrizes do amsmath:{" "}
          <Cmd>{"pmatrix"}</Cmd> para parênteses, <Cmd>{"bmatrix"}</Cmd> para colchetes e{" "}
          <Cmd>{"vmatrix"}</Cmd> para um determinante. Um vetor é <Cmd>{"\\mathbf{v}"}</Cmd> ou{" "}
          <Cmd>{"\\vec{v}"}</Cmd>, a transposta é <Cmd>{"A^\\top"}</Cmd> (ou <Cmd>{"A^T"}</Cmd>), a
          inversa <Cmd>{"A^{-1}"}</Cmd>, a transposta conjugada <Cmd>{"A^\\dagger"}</Cmd> e a norma{" "}
          <Cmd>{"\\|x\\|"}</Cmd>. O determinante <Cmd>{"\\det"}</Cmd> é integrado, enquanto o traço
          e o posto ficam melhores com <Cmd>{"\\operatorname{tr}"}</Cmd> e{" "}
          <Cmd>{"\\operatorname{rank}"}</Cmd>. A tabela reúne os símbolos de álgebra linear mais
          usados, com o pacote de que cada um precisa; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: matrizes, vetores e operações",
      use: {
        "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}": "Matriz entre parênteses",
        "\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}": "Matriz entre colchetes",
        "\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}": "Barras de determinante",
        "\\mathbf{v}": "Vetor em negrito",
        "\\vec{v}": "Vetor com seta",
        "A^\\top": "Transposta",
        "A^{-1}": "Inversa",
        "A^\\dagger": "Transposta conjugada",
        "\\det(A)": "Determinante",
        "\\operatorname{tr}(A)": "Traço",
        "\\|x\\|_2": "Norma euclidiana",
        "\\langle u, v \\rangle": "Produto escalar (produto interno)",
      },
      faqHeading: "Perguntas frequentes sobre álgebra linear no LaTeX",
      faq: [
        {
          question: "Como escrevo uma matriz no LaTeX?",
          answer:
            "Carregue o amsmath e use um ambiente de matrizes no modo matemático, separando as colunas com & e as linhas com \\\\: \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}. pmatrix dá parênteses, bmatrix colchetes, Bmatrix chaves, vmatrix barras simples para um determinante e Vmatrix barras duplas.",
        },
        {
          question: "Como escrevo a transposta no LaTeX?",
          answer:
            "Escreva A^\\top, que imprime um T pequeno, ou simplesmente A^T, ou A^\\intercal do amssymb. Escolha uma forma e use-a de modo consistente; A^\\top é comum nos textos atuais porque não se confunde com uma variável T.",
        },
        {
          question: "Como escrevo um vetor no LaTeX?",
          answer:
            "Use \\mathbf{v} para um vetor em negrito ou \\vec{v} para um acento de seta; \\boldsymbol{v} do amsmath também funciona com letras gregas. Um vetor coluna é uma matriz de uma única coluna: \\begin{pmatrix} x \\\\ y \\end{pmatrix}.",
        },
      ],
    },
    "machine-learning": {
      title: "Símbolo do gradiente no LaTeX e outras notações de aprendizado de máquina",
      intro: (
        <IntroP>
          O símbolo do gradiente no LaTeX é <Cmd>{"\\nabla"}</Cmd>, que imprime &nabla; e não precisa
          de pacote: escreva <Cmd>{"\\nabla f"}</Cmd> para o gradiente de <Cmd>{"f"}</Cmd>, ou{" "}
          <Cmd>{"\\nabla_\\theta \\mathcal{L}"}</Cmd> para o gradiente de uma função de perda em
          relação aos parâmetros. As derivadas parciais usam <Cmd>{"\\partial"}</Cmd>, as previsões
          são <Cmd>{"\\hat{y}"}</Cmd>, a esperança é <Cmd>{"\\mathbb{E}"}</Cmd> e o argmax é{" "}
          <Cmd>{"\\operatorname*{arg\\,max}"}</Cmd>. A tabela reúne os comandos mais usados para
          escrever um gradiente no LaTeX, com o pacote de que cada um precisa; a lista completa de
          símbolos de aprendizado de máquina está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: gradientes, perdas e otimização",
      use: {
        "\\nabla": "Símbolo do gradiente (nabla)",
        "\\nabla_\\theta \\mathcal{L}": "Gradiente da perda em relação a θ",
        "\\partial": "Derivada parcial",
        "\\frac{\\partial \\mathcal{L}}{\\partial w}": "Derivada parcial da perda",
        "\\mathcal{L}": "Função de perda",
        "\\theta": "Parâmetros do modelo",
        "\\hat{y}": "Previsão, estimativa",
        "\\mathbb{E}": "Esperança",
        "\\operatorname*{arg\\,max}_\\theta": "Argmax com o índice embaixo",
        "\\operatorname*{arg\\,min}_\\theta": "Argmin com o índice embaixo",
        "\\|w\\|_2": "Norma L2 dos pesos",
        "\\odot": "Produto de Hadamard (elemento a elemento)",
      },
      faqHeading: "Perguntas frequentes sobre notação de aprendizado de máquina no LaTeX",
      faq: [
        {
          question: "Como escrevo o símbolo do gradiente no LaTeX?",
          answer:
            "O símbolo do gradiente ∇ é \\nabla, é integrado ao LaTeX e é usado no modo matemático: $\\nabla f$. Coloque a variável em relação à qual você deriva como índice, como em \\nabla_\\theta \\mathcal{L}(\\theta), e escreva o laplaciano como \\nabla^2 f. Não precisa de pacote.",
        },
        {
          question: "Como escrevo uma derivada parcial no LaTeX?",
          answer:
            "Use \\partial: \\frac{\\partial f}{\\partial x} para uma primeira derivada e \\frac{\\partial^2 f}{\\partial x^2} para uma segunda derivada. Uma componente do gradiente é escrita do mesmo jeito, por exemplo \\frac{\\partial \\mathcal{L}}{\\partial w_i}.",
        },
        {
          question: "Como escrevo argmax e argmin no LaTeX?",
          answer:
            "Com o amsmath, escreva \\operatorname*{arg\\,max}_\\theta f(\\theta); o asterisco coloca o índice embaixo nas fórmulas destacadas. Se você usa com frequência, declare-o uma vez no preâmbulo com \\DeclareMathOperator*{\\argmax}{arg\\,max} e depois escreva \\argmax_\\theta. O atalho \\arg\\max_\\theta também funciona, mas aí o índice fica só embaixo de max, e não embaixo de todo o arg max.",
        },
        {
          question: "Como escrevo a esperança e a função de perda no LaTeX?",
          answer:
            "A esperança é o E de quadro-negro \\mathbb{E}, que precisa de \\usepackage{amssymb}, como em \\mathbb{E}_{x \\sim p}[f(x)]. A função de perda costuma ser um L caligráfico, \\mathcal{L}, que é integrado.",
        },
      ],
    },
    "modal-logic": {
      title: "Símbolos de lógica modal no LaTeX: caixa, diamante e semântica de Kripke",
      intro: (
        <IntroP>
          Os dois símbolos básicos da lógica modal no LaTeX são <Cmd>{"\\Box"}</Cmd> para a
          necessidade (□) e <Cmd>{"\\Diamond"}</Cmd> para a possibilidade (◇), ambos do amssymb;{" "}
          <Cmd>{"\\Box p"}</Cmd> se lê “é necessário que p” e <Cmd>{"\\Diamond p"}</Cmd> “é possível
          que p”. A semântica de Kripke usa <Cmd>{"\\models"}</Cmd> (integrado) ou{" "}
          <Cmd>{"\\Vdash"}</Cmd>, como em <Cmd>{"\\mathcal{M}, w \\models p"}</Cmd>, com uma relação
          de acessibilidade <Cmd>{"wRv"}</Cmd>. A lógica epistêmica escreve o conhecimento como{" "}
          <Cmd>{"K_a p"}</Cmd>, e a lógica temporal acrescenta <Cmd>{"\\bigcirc p"}</Cmd> para
          “próximo” e <Cmd>{"p \\mathbin{\\mathcal{U}} q"}</Cmd> para “até”. A tabela reúne os
          símbolos de lógica modal mais usados, com o pacote de que cada um precisa; a lista
          completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: operadores modais, epistêmicos e temporais",
      use: {
        "\\Box p": "Necessariamente p",
        "\\Diamond p": "Possivelmente p",
        "\\Box(p \\to q)": "Necessidade de uma implicação (axioma K)",
        "\\neg\\Box\\neg p": "Não necessariamente não p, equivale a \\Diamond p",
        "\\mathcal{M}, w \\models p": "p é verdadeira no mundo w",
        "w \\Vdash p": "Forcing, satisfação",
        "wRv": "Relação de acessibilidade",
        "K_a p": "O agente a sabe que p",
        "B_a p": "O agente a acredita que p",
        "C_G p": "Conhecimento comum no grupo G",
        "\\bigcirc p": "Próximo (lógica temporal)",
        "p \\mathbin{\\mathcal{U}} q": "Até (lógica temporal)",
      },
      faqHeading: "Perguntas frequentes sobre símbolos de lógica modal no LaTeX",
      faq: [
        {
          question: "Como escrevo os símbolos de caixa e diamante no LaTeX?",
          answer:
            "Carregue \\usepackage{amssymb} e escreva \\Box p para a necessidade e \\Diamond p para a possibilidade. O pacote latexsym oferece os mesmos dois comandos. Observe que o comando integrado \\diamond é um pequeno operador binário, não o diamante modal.",
        },
        {
          question: "Como escrevo o símbolo de satisfação (catraca dupla) no LaTeX?",
          answer:
            "\\models é integrado e imprime ⊨, como em $\\mathcal{M}, w \\models \\varphi$. O amssymb acrescenta \\vDash (⊨), \\Vdash (⊩) para o forcing e \\nvDash para “não satisfaz”; \\vdash (⊢) para a derivabilidade é integrado.",
        },
        {
          question: "Como escrevo “até” e “próximo” da lógica temporal no LaTeX?",
          answer:
            "Use \\bigcirc p para “próximo”, e transforme o U caligráfico em um operador binário para “até”: p \\mathbin{\\mathcal{U}} q, que dá o espaçamento correto. “Sempre” e “eventualmente” costumam ser escritos \\Box p e \\Diamond p, ou \\mathbf{G} p e \\mathbf{F} p.",
        },
      ],
    },
    "number-theory": {
      title: "Símbolos de teoria dos números no LaTeX",
      intro: (
        <IntroP>
          O módulo e a operação mod no LaTeX têm várias formas: <Cmd>{"\\bmod"}</Cmd> para um resto,{" "}
          <Cmd>{"\\pmod{n}"}</Cmd> depois de uma congruência, e <Cmd>{"\\lvert z \\rvert"}</Cmd> para
          o módulo (valor absoluto) de um número. A tabela reúne os oito comandos mais usados, com o
          pacote de que cada um precisa; a lista completa de símbolos de teoria dos números está
          mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: divisibilidade e aritmética modular",
      use: {
        "a \\bmod n": "Módulo como operação binária",
        "a \\equiv b \\pmod{n}": "Congruência com (mod n)",
        "a \\equiv b \\mod{n}": "Congruência sem parênteses",
        "\\lvert z \\rvert": "Módulo / valor absoluto",
        "a \\mid b": "a divide b",
        "a \\nmid b": "a não divide b",
        "\\gcd(a, b)": "Máximo divisor comum",
        "\\operatorname{lcm}(a, b)": "Mínimo múltiplo comum",
      },
      faqHeading: "Perguntas frequentes sobre símbolos de teoria dos números no LaTeX",
      faq: [
        {
          question: "Como escrevo mod (módulo) no LaTeX?",
          answer:
            "Use \\bmod para a operação binária, como em a \\bmod n, e \\pmod{n} depois de uma congruência: a \\equiv b \\pmod{n} acrescenta os parênteses e o espaçamento para você. O amsmath também oferece \\mod{n} (sem parênteses) e \\pod{n} (parênteses sem a palavra mod).",
        },
        {
          question: "Como escrevo o módulo (valor absoluto) no LaTeX?",
          answer:
            "Escreva \\lvert z \\rvert com o amsmath, ou \\left| z \\right| quando as barras precisarem crescer com um conteúdo alto. Se você usa com frequência, o mathtools permite declarar \\DeclarePairedDelimiter{\\abs}{\\lvert}{\\rvert} e depois escrever \\abs{z}.",
        },
        {
          question: "Como escrevo “divide” no LaTeX?",
          answer:
            "Use \\mid, como em a \\mid b, que o LaTeX espaça como uma relação; uma | sozinha fica apertada demais. A negação \\nmid (a não divide b) precisa de \\usepackage{amssymb}.",
        },
      ],
    },
    operators: {
      title: "Operadores no LaTeX: mais circulado, vezes, ponto e operadores grandes",
      intro: (
        <IntroP>
          Os operadores do LaTeX se dividem em dois grupos. Os operadores binários ficam entre dois
          termos com um espaçamento médio: <Cmd>{"\\times"}</Cmd>, <Cmd>{"\\cdot"}</Cmd>,{" "}
          <Cmd>{"\\ast"}</Cmd>, <Cmd>{"\\circ"}</Cmd> e a família de operadores circulados{" "}
          <Cmd>{"\\oplus"}</Cmd> (mais circulado, ⊕), <Cmd>{"\\otimes"}</Cmd> (⊗),{" "}
          <Cmd>{"\\odot"}</Cmd> (⊙) e <Cmd>{"\\ominus"}</Cmd>. Os operadores grandes aceitam limites
          e crescem nas fórmulas destacadas: <Cmd>{"\\sum"}</Cmd>, <Cmd>{"\\prod"}</Cmd>,{" "}
          <Cmd>{"\\bigoplus"}</Cmd>, <Cmd>{"\\bigotimes"}</Cmd> e <Cmd>{"\\bigcup"}</Cmd>. Todos são
          integrados. Operadores com nome como <Cmd>{"\\max"}</Cmd>, <Cmd>{"\\sin"}</Cmd> e{" "}
          <Cmd>{"\\det"}</Cmd> já vêm predefinidos, e você pode declarar os seus com{" "}
          <Cmd>{"\\DeclareMathOperator"}</Cmd> do amsmath. A tabela reúne os operadores do LaTeX
          mais usados; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: operadores binários e grandes",
      use: {
        "\\oplus": "Mais circulado: soma direta, XOR",
        "\\otimes": "Vezes circulado: produto tensorial",
        "\\odot": "Ponto circulado: produto de Hadamard",
        "\\ominus": "Menos circulado",
        "\\oslash": "Barra circulada",
        "\\times": "Produto vetorial, multiplicação",
        "\\cdot": "Ponto centralizado",
        "\\ast": "Operador asterisco, convolução",
        "\\circ": "Composição",
        "\\star": "Operador estrela",
        "\\bigoplus_{i=1}^{n} V_i": "Soma direta sobre um índice",
        "\\bigotimes_{i=1}^{n} V_i": "Produto tensorial sobre um índice",
      },
      faqHeading: "Perguntas frequentes sobre operadores no LaTeX",
      faq: [
        {
          question: "Como escrevo o mais circulado no LaTeX?",
          answer:
            "Use \\oplus para ⊕, o mais circulado usado para somas diretas e XOR. É um operador binário integrado: $A \\oplus B$. Para uma soma direta de muitos termos, use o operador grande \\bigoplus_{i=1}^{n} V_i.",
        },
        {
          question: "Como escrevo o operador odot (ponto circulado) no LaTeX?",
          answer:
            "\\odot imprime ⊙ e é usado para o produto de Hadamard (elemento a elemento), $A \\odot B$. A versão grande é \\bigodot. Ambos são integrados.",
        },
        {
          question: "Como defino um operador novo no LaTeX?",
          answer:
            "Carregue o amsmath e escreva \\DeclareMathOperator{\\Tr}{Tr} no preâmbulo; assim \\Tr(A) imprime Tr em letra reta com o espaçamento de operador. Use \\DeclareMathOperator* quando os limites devem ficar embaixo, como em \\argmax. Para um uso pontual, \\operatorname{Tr} faz o mesmo dentro da fórmula.",
        },
      ],
    },
    optimization: {
      title: "Símbolos de otimização no LaTeX: argmax, argmin e restrições",
      intro: (
        <IntroP>
          A notação de otimização no LaTeX gira em torno de <Cmd>{"\\min"}</Cmd>,{" "}
          <Cmd>{"\\max"}</Cmd> e suas versões arg. <Cmd>{"\\min_{x}"}</Cmd> e{" "}
          <Cmd>{"\\max_{x}"}</Cmd> são integrados e colocam a variável embaixo do operador nas
          fórmulas destacadas, mas não existe um <Cmd>{"\\argmax"}</Cmd> integrado: escreva{" "}
          <Cmd>{"\\operatorname*{arg\\,max}_x"}</Cmd> ou declare <Cmd>{"\\argmax"}</Cmd> uma vez com{" "}
          <Cmd>{"\\DeclareMathOperator*"}</Cmd> do amsmath. As restrições vêm depois de{" "}
          <Cmd>{"\\text{s.t.}"}</Cmd> (“sujeito a”), o lagrangiano é{" "}
          <Cmd>{"\\mathcal{L}(x, \\lambda)"}</Cmd>, o ótimo é <Cmd>{"x^*"}</Cmd>, e as restrições
          semidefinidas usam <Cmd>{"\\succeq 0"}</Cmd>. A tabela reúne os símbolos de otimização
          mais usados, com o pacote de que cada um precisa; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: objetivos, restrições e otimalidade",
      use: {
        "\\operatorname*{arg\\,max}_{x} f(x)": "Argmax com a variável embaixo",
        "\\operatorname*{arg\\,min}_{x} f(x)": "Argmin com a variável embaixo",
        "\\min_{x \\in \\mathcal{X}} f(x)": "Minimizar sobre um conjunto",
        "\\max_{x} f(x)": "Maximizar",
        "\\text{s.t.}": "Sujeito a (em português também \\text{s.a.})",
        "g_i(x) \\leq 0": "Restrição de desigualdade",
        "h_j(x) = 0": "Restrição de igualdade",
        "\\mathcal{L}(x, \\lambda)": "Lagrangiano",
        "\\nabla f(x^*) = 0": "Condição de otimalidade de primeira ordem",
        "\\nabla^2 f(x)": "Matriz hessiana",
        "X \\succeq 0": "Semidefinida positiva",
        "\\lambda_i \\geq 0": "Variáveis duais (multiplicadores)",
      },
      faqHeading: "Perguntas frequentes sobre símbolos de otimização no LaTeX",
      faq: [
        {
          question: "Como escrevo argmax no LaTeX?",
          answer:
            "Escreva \\operatorname*{arg\\,max}_{x} f(x) com o amsmath; o asterisco coloca x embaixo do operador nas fórmulas destacadas. Para reutilizar, acrescente \\DeclareMathOperator*{\\argmax}{arg\\,max} ao preâmbulo e escreva \\argmax_x f(x). \\arg\\max também imprime arg max, mas o índice fica associado só ao max.",
        },
        {
          question: "Como escrevo um problema de otimização com restrições no LaTeX?",
          answer:
            "Coloque o objetivo e as restrições em um ambiente aligned: \\min_{x} \\quad & f(x) \\\\ \\text{s.a.} \\quad & g(x) \\leq 0. O pacote optidef oferece os ambientes mini e maxi, que alinham o objetivo e as restrições para você.",
        },
        {
          question: "Como escrevo “sujeito a” no LaTeX?",
          answer:
            "Use \\text{s.a.} ou \\text{sujeito a} do amsmath (em inglês, \\text{s.t.}) para que as palavras saiam em texto reto com o espaçamento normal. Se você digitar s.a. diretamente no modo matemático, são impressas as variáveis s e a em itálico.",
        },
      ],
    },
    order: {
      title: "Menor que, maior que e menor ou igual a no LaTeX",
      intro: (
        <IntroP>
          No LaTeX, os sinais de menor que e maior que são digitados diretamente no modo matemático
          como <Cmd>{"<"}</Cmd> e <Cmd>{">"}</Cmd>. Menor ou igual a no LaTeX é{" "}
          <Cmd>{"\\leq"}</Cmd> (ou o sinônimo <Cmd>{"\\le"}</Cmd>), maior ou igual a é{" "}
          <Cmd>{"\\geq"}</Cmd> (<Cmd>{"\\ge"}</Cmd>) e diferente de é <Cmd>{"\\neq"}</Cmd>; os três
          são integrados, então <Cmd>{"$a \\leq b$"}</Cmd> funciona em qualquer documento. Muito
          menor que é <Cmd>{"\\ll"}</Cmd>, e as formas inclinadas, aproximadas e negadas vêm do
          amssymb. A tabela reúne os símbolos de desigualdade mais usados, com o pacote de que cada
          um precisa; a lista completa de símbolos de ordem está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: desigualdades e ordem",
      use: {
        "<": "Menor que (digitado diretamente)",
        ">": "Maior que (digitado diretamente)",
        "\\leq": "Menor ou igual a (sinônimo \\le)",
        "\\geq": "Maior ou igual a (sinônimo \\ge)",
        "\\neq": "Diferente de (sinônimo \\ne)",
        "\\ll": "Muito menor que",
        "\\gg": "Muito maior que",
        "\\leqslant": "Menor ou igual a, inclinado",
        "\\lesssim": "Menor ou aproximadamente igual a",
        "\\not<": "Não menor que",
        "\\nleq": "Nem menor nem igual a",
        "\\prec": "Precede (ordem parcial); \\succ para “sucede”",
      },
      faqHeading: "Perguntas frequentes sobre símbolos de desigualdade no LaTeX",
      faq: [
        {
          question: "Como escrevo menor ou igual a no LaTeX?",
          answer:
            "Escreva \\leq, ou o sinônimo mais curto \\le, no modo matemático: $a \\leq b$. Maior ou igual a é \\geq ou \\ge. Ambos são integrados. Para o estilo inclinado comum em textos europeus, carregue o amssymb e use \\leqslant e \\geqslant.",
        },
        {
          question: "Como escrevo o símbolo de menor que no LaTeX?",
          answer:
            "No modo matemático, digite < diretamente: $a < b$. No texto corrido, fora do modo matemático, a codificação de fonte OT1 padrão imprime ¡ em vez de <, então coloque-o como $<$, use \\textless (e \\textgreater para >) ou carregue \\usepackage[T1]{fontenc}.",
        },
        {
          question: "Como escrevo “não menor que” ou “diferente de” no LaTeX?",
          answer:
            "Diferente de é \\neq ou \\ne. Para as demais relações, coloque \\not antes do símbolo, como em \\not<, ou carregue o amssymb para as negações específicas \\nless, \\ngtr, \\nleq e \\ngeq, que ficam mais limpas que uma barra sobreposta.",
        },
        {
          question: "Qual é a diferença entre \\leq e \\le no LaTeX?",
          answer:
            "Nenhuma: \\le é um sinônimo de \\leq e ambos imprimem ≤, assim como \\ge é sinônimo de \\geq e \\ne é sinônimo de \\neq. Use o que preferir, mas de forma consistente.",
        },
      ],
    },
    relations: {
      title: "Símbolos de relação no LaTeX: diferente de, aproximadamente igual e menor que",
      intro: (
        <IntroP>
          Os símbolos de relação no LaTeX comparam duas expressões, e os habituais são todos
          integrados. Diferente de no LaTeX é <Cmd>{"\\neq"}</Cmd> (≠), aproximadamente igual é{" "}
          <Cmd>{"\\approx"}</Cmd> (≈), menor que e maior que são digitados como <Cmd>{"<"}</Cmd> e{" "}
          <Cmd>{">"}</Cmd>, e menor ou igual a é <Cmd>{"\\leq"}</Cmd> (≤). A equivalência é{" "}
          <Cmd>{"\\equiv"}</Cmd>, semelhante é <Cmd>{"\\sim"}</Cmd>, congruente é{" "}
          <Cmd>{"\\cong"}</Cmd> e proporcional a é <Cmd>{"\\propto"}</Cmd>. Você pode negar qualquer
          relação colocando <Cmd>{"\\not"}</Cmd> antes, ou carregar o amssymb para formas específicas
          como <Cmd>{"\\nleq"}</Cmd> e inclinadas como <Cmd>{"\\leqslant"}</Cmd>. A tabela reúne as
          relações mais usadas, com o pacote de que cada uma precisa; a lista completa está mais
          abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: os símbolos de relação mais usados",
      use: {
        "\\neq": "Diferente de (sinônimo \\ne)",
        "\\approx": "Aproximadamente igual",
        "<": "Menor que",
        ">": "Maior que",
        "\\leq": "Menor ou igual a",
        "\\geq": "Maior ou igual a",
        "\\equiv": "Equivalente, idêntico, congruente módulo n",
        "\\sim": "Semelhante, “tem distribuição”",
        "\\cong": "Congruente, isomorfo",
        "\\propto": "Proporcional a",
        "\\ll": "Muito menor que (\\gg para muito maior que)",
        "\\leqslant": "Menor ou igual a, inclinado",
      },
      faqHeading: "Perguntas frequentes sobre símbolos de relação no LaTeX",
      faq: [
        {
          question: "Como escrevo “diferente de” no LaTeX?",
          answer:
            "Use \\neq (ou o sinônimo \\ne) no modo matemático: $a \\neq b$ imprime a ≠ b. Não precisa de pacote. Para outras relações negadas, coloque \\not antes, como em \\not\\equiv, ou use as versões específicas do amssymb, como \\nleq e \\ncong.",
        },
        {
          question: "Como escrevo “aproximadamente igual” no LaTeX?",
          answer:
            "\\approx imprime ≈ e é o símbolo padrão de aproximadamente igual: $\\pi \\approx 3.14$. Seus parentes próximos são \\simeq (≃), \\cong (≅), \\sim (∼) e \\doteq (≐), todos integrados, e \\approxeq (≊) do amssymb.",
        },
        {
          question: "Como escrevo “menor que” no LaTeX?",
          answer:
            "No modo matemático, digite < e > diretamente: $a < b$. No texto corrido, fora do modo matemático, use \\textless e \\textgreater ou coloque o sinal entre $...$, já que com a antiga codificação de fonte OT1 um < sozinho pode sair como um ponto de exclamação invertido.",
        },
      ],
    },
    "special-functions": {
      title: "Funções especiais no LaTeX: gama, beta, zeta, erf e Bessel",
      intro: (
        <IntroP>
          As funções especiais no LaTeX são escritas com letras gregas ou com nomes em letra reta. A
          função gama é <Cmd>{"\\Gamma(z)"}</Cmd>, a função zeta de Riemann <Cmd>{"\\zeta(s)"}</Cmd>,
          a função digama <Cmd>{"\\psi(x)"}</Cmd> e o delta de Dirac <Cmd>{"\\delta(x)"}</Cmd>. As
          funções com nomes de letras latinas devem ficar em letra reta: não existe um{" "}
          <Cmd>{"\\erf"}</Cmd> integrado, então escreva <Cmd>{"\\operatorname{erf}(x)"}</Cmd> ou
          declare-o uma vez com <Cmd>{"\\DeclareMathOperator"}</Cmd> do amsmath. As funções de
          Bessel e os polinômios ortogonais são letras com índices, como <Cmd>{"J_n(x)"}</Cmd> e{" "}
          <Cmd>{"P_n(x)"}</Cmd>, e a função hipergeométrica é{" "}
          <Cmd>{"{}_2F_1(a, b; c; z)"}</Cmd>. A tabela reúne as funções especiais mais usadas, com o
          pacote de que cada uma precisa; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: as funções especiais mais usadas",
      use: {
        "\\Gamma(z)": "Função gama",
        "\\mathrm{B}(x, y)": "Função beta (B maiúsculo reto)",
        "\\zeta(s)": "Função zeta de Riemann",
        "\\operatorname{erf}(x)": "Função erro",
        "\\operatorname{erfc}(x)": "Função erro complementar",
        "J_n(x)": "Função de Bessel de primeira espécie",
        "Y_n(x)": "Função de Bessel de segunda espécie",
        "P_n(x)": "Polinômio de Legendre",
        "H_n(x)": "Polinômio de Hermite",
        "{}_2F_1(a, b; c; z)": "Função hipergeométrica de Gauss",
        "\\psi(x)": "Função digama",
        "\\delta(x)": "Delta de Dirac",
      },
      faqHeading: "Perguntas frequentes sobre funções especiais no LaTeX",
      faq: [
        {
          question: "Como escrevo a função gama no LaTeX?",
          answer:
            "Use a letra grega maiúscula: $\\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt$. Não precisa de pacote. A função beta costuma ser escrita com um B reto, \\mathrm{B}(x, y), para não ser confundida com uma variável.",
        },
        {
          question: "Como escrevo a função erro erf no LaTeX?",
          answer:
            "O LaTeX não tem um comando \\erf. Use \\operatorname{erf}(x) do amsmath, ou acrescente \\DeclareMathOperator{\\erf}{erf} ao preâmbulo e escreva \\erf(x). Assim erf sai em letra reta com o espaçamento de operador, ao contrário de erf digitado direto, que imprime três variáveis em itálico.",
        },
        {
          question: "Como escrevo a função hipergeométrica no LaTeX?",
          answer:
            "Use um grupo vazio para colocar o índice à esquerda: {}_2F_1(a, b; c; z). O pacote mathtools também oferece \\prescript{}{2}{F}_{1} para índices à esquerda, e a forma generalizada {}_pF_q segue o mesmo padrão.",
        },
      ],
    },
    summation: {
      title: "Somatório no LaTeX: notação sigma, produtórios e limites",
      intro: (
        <IntroP>
          Um somatório no LaTeX é escrito com <Cmd>{"\\sum"}</Cmd>, que imprime o sigma maiúsculo
          (Σ) como operador grande: <Cmd>{"\\sum_{i=1}^{n} a_i"}</Cmd> coloca o índice embaixo e o
          limite superior em cima. O símbolo de produtório funciona do mesmo jeito com{" "}
          <Cmd>{"\\prod_{i=1}^{n}"}</Cmd>. Nas fórmulas destacadas, os limites ficam em cima e
          embaixo do sinal; nas fórmulas no meio do texto, vão para o lado, a menos que você
          acrescente <Cmd>{"\\limits"}</Cmd> ou <Cmd>{"\\displaystyle"}</Cmd>. Condições de várias
          linhas sob um somatório usam <Cmd>{"\\substack"}</Cmd> do amsmath, e os operadores grandes
          de conjuntos <Cmd>{"\\bigcup"}</Cmd> e <Cmd>{"\\bigcap"}</Cmd> seguem as mesmas regras. A
          tabela reúne os símbolos de somatório mais usados, com o pacote de que cada um precisa; a
          lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: somatórios, produtórios e limites",
      use: {
        "\\sum_{i=1}^{n} a_i": "Somatório (notação sigma)",
        "\\sum_{n=1}^{\\infty} \\frac{1}{n^2}": "Série infinita",
        "\\prod_{i=1}^{n} x_i": "Produtório",
        "\\coprod": "Coproduto",
        "\\sum\\limits_{i=1}^{n}": "Limites em cima e embaixo em uma fórmula no meio do texto",
        "\\displaystyle\\sum_{i=1}^{n}": "Somatório em tamanho de destaque no meio do texto",
        "\\sum_{i=1}^{n} \\sum_{j=1}^{m} a_{ij}": "Somatório duplo",
        "\\sum_{\\substack{i < j \\\\ i \\neq k}}": "Condições em várias linhas",
        "\\bigcup_{i \\in I} A_i": "União sobre um índice",
        "\\bigcap_{i=1}^{n} A_i": "Interseção sobre um índice",
        "\\sum_{k=0}^{n} \\binom{n}{k}": "Soma de coeficientes binomiais",
      },
      faqHeading: "Perguntas frequentes sobre somatório no LaTeX",
      faq: [
        {
          question: "Como escrevo um somatório no LaTeX?",
          answer:
            "Use \\sum com um índice e um expoente no modo matemático: $\\sum_{i=1}^{n} a_i$. Coloque entre chaves os limites com mais de um caractere. Em uma equação destacada (\\[...\\]), os limites aparecem em cima e embaixo do sigma; no meio do texto, aparecem ao lado.",
        },
        {
          question: "Como coloco os limites em cima e embaixo do somatório no meio do texto?",
          answer:
            "Acrescente \\limits depois do operador, \\sum\\limits_{i=1}^{n}, ou dê ao somatório inteiro o tamanho de destaque com \\displaystyle\\sum_{i=1}^{n}. Use com moderação, porque isso aumenta o espaçamento entre as linhas do parágrafo.",
        },
        {
          question: "Como escrevo o símbolo de produtório no LaTeX?",
          answer:
            "\\prod imprime o símbolo de produtório ∏ e aceita limites do mesmo jeito que \\sum: $\\prod_{i=1}^{n} x_i$. Não use \\Pi, que é a letra grega: ela não cresce nas fórmulas destacadas nem posiciona bem os limites.",
        },
      ],
    },
    tensors: {
      title: "Notação tensorial no LaTeX: índices, convenção de soma de Einstein e o pacote tensor",
      intro: (
        <IntroP>
          A notação tensorial no LaTeX é construída com sobrescritos e subscritos:{" "}
          <Cmd>{"T^{ij}_{kl}"}</Cmd> para um tensor com dois índices superiores e dois inferiores,{" "}
          <Cmd>{"g_{\\mu\\nu}"}</Cmd> para a métrica e <Cmd>{"\\delta^i_j"}</Cmd> para o delta de
          Kronecker. Quando a ordem dos índices mistos importa, escalone-os com um grupo vazio,{" "}
          <Cmd>{"T^{i}{}_{j}"}</Cmd>, ou carregue o pacote tensor e escreva{" "}
          <Cmd>{"\\tensor{T}{^i_j}"}</Cmd>. O símbolo de Levi-Civita é{" "}
          <Cmd>{"\\epsilon_{ijk}"}</Cmd>, o produto tensorial é <Cmd>{"\\otimes"}</Cmd>, e a
          convenção de soma de Einstein consiste simplesmente em repetir um índice,{" "}
          <Cmd>{"A^i B_i"}</Cmd>. A tabela reúne os símbolos tensoriais mais usados, com o pacote de
          que cada um precisa; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: índices e operações com tensores",
      use: {
        "T^{ij}_{kl}": "Tensor com índices superiores e inferiores",
        "T^{i}{}_{j}": "Índices escalonados (a ordem importa)",
        "\\tensor{T}{^i_j^k}": "Índices escalonados de forma simples",
        "g_{\\mu\\nu}": "Tensor métrico",
        "\\delta^i_j": "Delta de Kronecker",
        "\\epsilon_{ijk}": "Símbolo de Levi-Civita",
        "A^i B_i": "Convenção de soma de Einstein (índice repetido)",
        "A \\otimes B": "Produto tensorial",
        "\\partial_\\mu": "Derivada parcial em relação a uma coordenada",
        "\\nabla_\\mu T^{\\nu}": "Derivada covariante",
        "T_{(ij)}": "Simetrização",
        "T_{[ij]}": "Antissimetrização",
      },
      faqHeading: "Perguntas frequentes sobre notação tensorial no LaTeX",
      faq: [
        {
          question: "Como escrevo um tensor com índices superiores e inferiores no LaTeX?",
          answer:
            "Combine sobrescritos e subscritos: $T^{ij}_{kl}$. Se a ordem horizontal dos índices importa, insira um grupo vazio para que eles não se empilhem: T^{i}{}_{j} coloca j depois de i. O pacote tensor automatiza isso com \\tensor{T}{^i_j} e T\\indices{^i_j}.",
        },
        {
          question: "Como escrevo o delta de Kronecker e o símbolo de Levi-Civita no LaTeX?",
          answer:
            "O delta de Kronecker é \\delta_{ij} ou \\delta^i_j, e o símbolo de Levi-Civita é \\epsilon_{ijk} ou \\varepsilon_{ijk}, conforme a forma de épsilon usada na sua área. Ambos são letras gregas integradas com índices.",
        },
        {
          question: "Como escrevo a convenção de soma de Einstein no LaTeX?",
          answer:
            "Não há nenhum comando especial: repetir um índice em cima e embaixo implica a soma, então A^i B_i significa \\sum_i A^i B_i. Escreva o \\sum explícito só quando quiser mostrá-lo, e use índices gregos como \\mu e \\nu para as componentes do espaço-tempo.",
        },
      ],
    },
    topology: {
      title: "Símbolos de topologia no LaTeX: fecho, fronteira, homeomorfismo e alef",
      intro: (
        <IntroP>
          Os símbolos de topologia no LaTeX são, em sua maioria, integrados. O fecho (aderência) de
          um conjunto é <Cmd>{"\\overline{A}"}</Cmd>, sua fronteira é <Cmd>{"\\partial A"}</Cmd> e
          seu interior é <Cmd>{"A^\\circ"}</Cmd> ou <Cmd>{"\\operatorname{int} A"}</Cmd>. A relação
          de homeomorfismo costuma ser escrita <Cmd>{"\\cong"}</Cmd> (≅), a equivalência homotópica{" "}
          <Cmd>{"\\simeq"}</Cmd>, o grupo fundamental <Cmd>{"\\pi_1(X)"}</Cmd> e a homologia{" "}
          <Cmd>{"H_n(X)"}</Cmd>. A notação de conjuntos continua valendo: pertence a é{" "}
          <Cmd>{"\\in"}</Cmd> e subconjunto ou igual é <Cmd>{"\\subseteq"}</Cmd>. Para os cardinais,{" "}
          <Cmd>{"\\aleph_0"}</Cmd> é integrado e <Cmd>{"\\beth"}</Cmd> vem do amssymb. A tabela
          reúne os símbolos de topologia mais usados, com o pacote de que cada um precisa; a lista
          completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: os símbolos de topologia mais usados",
      use: {
        "\\overline{A}": "Fecho (aderência)",
        "\\partial A": "Fronteira",
        "A^\\circ": "Interior (também \\operatorname{int} A)",
        "X \\cong Y": "Homeomorfos",
        "X \\simeq Y": "Homotopicamente equivalentes",
        "\\pi_1(X, x_0)": "Grupo fundamental",
        "H_n(X)": "n-ésimo grupo de homologia",
        "\\mathcal{T}": "Topologia sobre um conjunto",
        "x \\in U \\subseteq X": "Pertence a, subconjunto ou igual",
        "S^n": "n-esfera",
        "\\aleph_0": "Alef zero (cardinal enumerável)",
        "\\beth_1": "Número bet",
      },
      faqHeading: "Perguntas frequentes sobre símbolos de topologia no LaTeX",
      faq: [
        {
          question: "Como escrevo o símbolo de homeomorfismo no LaTeX?",
          answer:
            "A maioria dos textos usa \\cong (≅): $X \\cong Y$. Alguns autores usam \\approx (≈) ou \\simeq (≃), embora \\simeq costume indicar equivalência homotópica. Os três são integrados; indique sua convenção uma vez se houver risco de ambiguidade.",
        },
        {
          question: "Como escrevo o símbolo bet no LaTeX?",
          answer:
            "\\beth imprime ℶ e precisa de \\usepackage{amssymb}, que também oferece \\gimel e \\daleth. \\aleph (ℵ) é integrado. Os cardinais levam índices normalmente: \\aleph_0, \\beth_1, e \\mathfrak{c} (amssymb) para a cardinalidade do contínuo.",
        },
        {
          question: "Como escrevo o fecho e o interior de um conjunto no LaTeX?",
          answer:
            "O fecho é \\overline{A}, ou \\bar{A} para uma única letra, ou \\operatorname{cl}(A). O interior é A^\\circ ou \\operatorname{int}(A) com o amsmath, e a fronteira é \\partial A. Use \\overline em vez de \\bar para tudo o que tiver mais de uma letra.",
        },
      ],
    },
    trigonometry: {
      title: "Trigonometria no LaTeX: seno, cosseno, tangente e funções trigonométricas inversas",
      intro: (
        <IntroP>
          As funções trigonométricas do LaTeX têm comandos próprios: <Cmd>{"\\sin"}</Cmd>,{" "}
          <Cmd>{"\\cos"}</Cmd>, <Cmd>{"\\tan"}</Cmd>, <Cmd>{"\\cot"}</Cmd>, <Cmd>{"\\sec"}</Cmd> e{" "}
          <Cmd>{"\\csc"}</Cmd>, além das inversas <Cmd>{"\\arcsin"}</Cmd>, <Cmd>{"\\arccos"}</Cmd> e{" "}
          <Cmd>{"\\arctan"}</Cmd> e das hiperbólicas <Cmd>{"\\sinh"}</Cmd>, <Cmd>{"\\cosh"}</Cmd> e{" "}
          <Cmd>{"\\tanh"}</Cmd>. Use sempre o comando em vez de digitar sin, porque o comando coloca
          o nome em letra reta com o espaçamento correto, enquanto sin digitado direto imprime três
          variáveis em itálico. (Em português escreve-se sen, mas o comando do LaTeX é <Cmd>{"\\sin"}</Cmd>.) As
          potências vêm logo depois do nome, <Cmd>{"\\sin^2 \\theta"}</Cmd>, e os graus são um
          círculo sobrescrito, <Cmd>{"30^\\circ"}</Cmd>. A tabela reúne os símbolos trigonométricos
          mais usados, com o pacote de que cada um precisa; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: funções e identidades trigonométricas",
      use: {
        "\\sin \\theta": "Seno",
        "\\cos \\theta": "Cosseno",
        "\\tan \\theta": "Tangente",
        "\\sec \\theta": "Secante (\\csc cossecante, \\cot cotangente)",
        "\\arcsin x": "Arco seno",
        "\\arccos x": "Arco cosseno",
        "\\arctan x": "Arco tangente",
        "\\sin^{-1} x": "Arco seno, notação de potência",
        "\\sin^2 \\theta + \\cos^2 \\theta = 1": "Identidade pitagórica",
        "\\sinh x": "Seno hiperbólico (\\cosh, \\tanh)",
        "30^\\circ": "Graus",
        "\\operatorname{arcsec} x": "Arco secante (não integrado)",
      },
      faqHeading: "Perguntas frequentes sobre trigonometria no LaTeX",
      faq: [
        {
          question: "Como escrevo seno, cosseno e tangente no LaTeX?",
          answer:
            "Use os comandos integrados no modo matemático: $\\sin x$, $\\cos x$, $\\tan x$, e \\cot, \\sec e \\csc para as recíprocas. Digitar sin sem barra invertida imprime o produto em itálico s·i·n, e é por isso que os comandos existem. Se você preferir a grafia brasileira sen, declare \\DeclareMathOperator{\\sen}{sen} com o amsmath.",
        },
        {
          question: "Como escrevo funções trigonométricas inversas como o arco seno no LaTeX?",
          answer:
            "\\arcsin, \\arccos e \\arctan são integrados, assim como \\sinh, \\cosh, \\tanh e \\coth. \\arcsec, \\arccsc, \\arccot, \\sech e \\csch não são: escreva \\operatorname{arcsec} x, ou acrescente \\DeclareMathOperator{\\arcsec}{arcsec} ao preâmbulo com o amsmath. A notação de potência \\sin^{-1} x também funciona.",
        },
        {
          question: "Como escrevo seno ao quadrado e graus no LaTeX?",
          answer:
            "Coloque o expoente logo depois do comando: \\sin^2 \\theta. Para os graus, use um círculo como sobrescrito, $30^\\circ$, ou \\ang{30} do siunitx para uma formatação uniforme no texto e nas tabelas.",
        },
      ],
    },
    units: {
      title: "Unidades no LaTeX: siunitx, símbolo de grau e unidades do SI",
      intro: (
        <IntroP>
          As unidades no LaTeX ficam mais fáceis com o pacote siunitx:{" "}
          <Cmd>{"\\qty{9.81}{\\metre\\per\\second\\squared}"}</Cmd> compõe um número e sua unidade com
          letras retas e o espaçamento correto, <Cmd>{"\\unit{\\kilo\\gram}"}</Cmd> imprime uma
          unidade sozinha e <Cmd>{"\\num{6.022e23}"}</Cmd> formata um número. Sem o siunitx, coloque
          as unidades em letra reta à mão, como em <Cmd>{"9.81\\,\\mathrm{m/s^2}"}</Cmd>, com um
          espaço fino <Cmd>{"\\,"}</Cmd> entre o número e a unidade. O símbolo de grau é{" "}
          <Cmd>{"^\\circ"}</Cmd> no modo matemático ou <Cmd>{"\\qty{20}{\\degreeCelsius}"}</Cmd> com o
          siunitx, e o ångström é <Cmd>{"\\AA"}</Cmd>. A tabela reúne os comandos de unidades mais
          usados, com o pacote de que cada um precisa; a lista completa está mais abaixo.
        </IntroP>
      ),
      quickRefHeading: "Referência rápida: unidades com e sem siunitx",
      use: {
        "\\qty{9.81}{\\metre\\per\\second\\squared}": "Grandeza com unidade",
        "\\unit{\\kilo\\gram}": "Unidade sozinha",
        "\\num{6.022e23}": "Número formatado",
        "\\qty{20}{\\degreeCelsius}": "Graus Celsius",
        "\\ang{45}": "Ângulo em graus",
        "\\qty{10}{\\micro\\metre}": "Prefixo do SI (micrômetro)",
        "\\qty{5}{\\kilo\\ohm}": "Quilo-ohm",
        "9.81\\,\\mathrm{m/s^2}": "Unidades à mão, sem pacote",
        "^\\circ": "Símbolo de grau no modo matemático",
        "\\AA": "Ångström (modo texto)",
        "\\textdegree": "Símbolo de grau no modo texto",
        "\\hbar": "Constante de Planck reduzida",
      },
      faqHeading: "Perguntas frequentes sobre unidades no LaTeX",
      faq: [
        {
          question: "Como escrevo unidades no LaTeX?",
          answer:
            "Carregue \\usepackage{siunitx} e escreva \\qty{3.0}{\\metre\\per\\second} para um valor com unidade, \\unit{\\kilo\\gram} para uma unidade sozinha e \\num{1.5e-3} para um número. A versão 3 do siunitx usa \\qty e \\unit; os antigos \\SI e \\si continuam funcionando. Sem o pacote, escreva 3.0\\,\\mathrm{m/s}.",
        },
        {
          question: "Como escrevo o símbolo de grau no LaTeX?",
          answer:
            "No modo matemático, use um círculo como sobrescrito: $90^\\circ$, ou $20^\\circ\\mathrm{C}$ para temperatura. No texto, \\textdegree imprime °. Com o siunitx, \\ang{90} e \\qty{20}{\\degreeCelsius} dão um espaçamento uniforme em todo lugar.",
        },
        {
          question: "O siunitx entra em conflito com o pacote physics?",
          answer:
            "Os dois pacotes definem um comando \\qty, então carregá-los juntos causa um conflito. Se você precisa do physics, use para grandezas com unidades a forma antiga do siunitx, \\SI{9.81}{\\metre\\per\\second\\squared}, que a versão 3 do siunitx ainda aceita.",
        },
      ],
    },
    accents: {
      title: "Acentos e letras especiais no LaTeX",
      intro: (
        <>
          <IntroP>
            No texto, o LaTeX monta as letras acentuadas a partir de um comando e da letra base: o
            acento agudo <Cmd>{"\\'e"}</Cmd> (é), o grave <Cmd>{"\\`a"}</Cmd> (à), o circunflexo{" "}
            <Cmd>{"\\^e"}</Cmd> (ê), o trema <Cmd>{"\\\"o"}</Cmd> (ö), o til <Cmd>{"\\~a"}</Cmd> (ã),
            a cedilha <Cmd>{"\\c{c}"}</Cmd> (ç), o caron <Cmd>{"\\v{s}"}</Cmd> (š), a breve{" "}
            <Cmd>{"\\u{a}"}</Cmd> (ă), o duplo agudo húngaro <Cmd>{"\\H{o}"}</Cmd> (ő), o ponto
            superior <Cmd>{"\\.z"}</Cmd> (ż), o mácron <Cmd>{"\\=a"}</Cmd> (ā), o ponto inferior{" "}
            <Cmd>{"\\d{a}"}</Cmd>, a barra inferior <Cmd>{"\\b{a}"}</Cmd>, o anel{" "}
            <Cmd>{"\\r{a}"}</Cmd> (å) e o ogonek <Cmd>{"\\k{e}"}</Cmd> (ę). Algumas letras inteiras
            têm comando próprio: <Cmd>{"\\l"}</Cmd> (ł), <Cmd>{"\\o"}</Cmd> (ø), <Cmd>{"\\ae"}</Cmd>{" "}
            (æ) e <Cmd>{"\\ss"}</Cmd> (ß). Para acentuar um i ou um j, use as formas sem pingo{" "}
            <Cmd>{"\\i"}</Cmd> e <Cmd>{"\\j"}</Cmd>, como em <Cmd>{"\\'{\\i}"}</Cmd> para í, para que
            o acento não colida com o pingo.
          </IntroP>
          <IntroP>
            O modo matemático usa um conjunto diferente, que fica sobre uma variável e não sobre uma
            letra do texto: <Cmd>{"\\hat{x}"}</Cmd>, <Cmd>{"\\bar{x}"}</Cmd>, <Cmd>{"\\vec{v}"}</Cmd>,{" "}
            <Cmd>{"\\tilde{x}"}</Cmd>, <Cmd>{"\\dot{x}"}</Cmd> e <Cmd>{"\\ddot{x}"}</Cmd> para
            derivadas, <Cmd>{"\\acute"}</Cmd>, <Cmd>{"\\grave"}</Cmd>, <Cmd>{"\\breve"}</Cmd> e{" "}
            <Cmd>{"\\check"}</Cmd>. Para mais de um caractere, o LaTeX básico oferece os acentos
            extensíveis <Cmd>{"\\widehat{xy}"}</Cmd> e <Cmd>{"\\widetilde{xy}"}</Cmd>, além de{" "}
            <Cmd>{"\\overline{z}"}</Cmd> para conjugados e <Cmd>{"\\overrightarrow{AB}"}</Cmd> para
            vetores; nenhum deles precisa do amsmath.
          </IntroP>
          <IntroP>
            Desde 2018 o LaTeX lê UTF-8 por padrão, então você pode digitar é, ã ou ç diretamente no
            código-fonte (instalações antigas precisam de{" "}
            <Cmd>{"\\usepackage[utf8]{inputenc}"}</Cmd>). Acrescente{" "}
            <Cmd>{"\\usepackage[T1]{fontenc}"}</Cmd> para que as letras acentuadas sejam glifos únicos,
            hifenizados e copiados corretamente, em vez de montados a partir de duas peças. Para um
            exemplo prático, veja nosso guia de{" "}
            <IntroLink
              href="https://www.useoctree.com/blog/spanish-characters-latex-accents-special-letters"
              external
            >
              caracteres do espanhol e acentos no LaTeX
            </IntroLink>
            , que vale também para o português, ou a introdução aos{" "}
            <IntroLink href="https://www.useoctree.com/learn/special-characters" external>
              caracteres especiais no LaTeX
            </IntroLink>
            . Clique em qualquer cartão abaixo para copiar o comando.
          </IntroP>
        </>
      ),
    },
  },
};

export default pt;
