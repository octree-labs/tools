import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/physics/<slug>. */
const text: SymbolPageTranslations = {
  "reduced-planck-constant-h-bar": {
    name: "Constante de Planck reduzida (h cortado)",
    meaning: "Constante de Planck reduzida ħ = h/2π, o quantum de momento angular que aparece em toda a mecânica quântica.",
    usage: "Ela aparece no comutador canônico [x, p] = i\\hbar, na energia do fóton E = \\hbar\\omega e na relação de incerteza \\Delta x\\, \\Delta p \\geq \\hbar/2. Seu valor é de aproximadamente 1.055 \\times 10^{-34} J s. \\hslash é uma variante com um traço inclinado em vez de uma barra horizontal; escolha uma e mantenha-a. O h simples, sem a barra, é a constante não reduzida de E = h\\nu. Em trabalhos teóricos, unidades com \\hbar = 1 são padrão, então mencione essa escolha ao eliminá-la das equações.",
  },
  "bra-vector": {
    name: "Vetor bra",
    meaning: "Um bra na notação de Dirac: o vetor dual (linha), um funcional linear que atua sobre kets.",
    usage: "O bra \\langle \\psi | é o conjugado transposto do ket |\\psi\\rangle, por isso é o que se coloca à esquerda de um produto interno ou de um valor esperado. Use \\langle, nunca o sinal de menor que <, que é uma relação com espaçamento largo e formato errado. Uma | simples é aceitável aqui, mas \\rvert dá o espaçamento correto de delimitador de fechamento. Para uso frequente, defina \\newcommand{\\bra}[1]{\\langle #1 \\rvert}. Quando o rótulo do estado é alto, \\left\\langle \\frac{\\psi}{2} \\right| ajusta os dois delimitadores juntos.",
  },
  "ket-vector": {
    name: "Vetor ket",
    meaning: "Um ket na notação de Dirac, que representa um estado quântico como vetor coluna no espaço de Hilbert.",
    usage: "Estados são kets: |0\\rangle e |1\\rangle para um qubit, |n\\rangle para os níveis do oscilador harmônico e superposições como \\alpha|0\\rangle + \\beta|1\\rangle. O colchete angular é \\rangle, não >. Escrever \\lvert \\psi \\rangle dá ao TeX um delimitador de abertura explícito, de modo que o espaçamento fica correto mesmo depois de um sinal de menos. Uma macro como \\newcommand{\\ket}[1]{\\lvert #1 \\rangle} mantém centenas de kets consistentes. Produtos tensoriais são escritos |\\psi\\rangle \\otimes |\\phi\\rangle ou, de forma compacta, |\\psi\\phi\\rangle. Um ket vezes um bra, |\\psi\\rangle\\langle\\psi|, é um projetor ou uma matriz densidade.",
  },
  "braket": {
    name: "Braket (produto bra-ket)",
    meaning: "Produto interno de dois estados, um bra encontrando um ket; o quadrado do seu módulo dá uma probabilidade de transição.",
    usage: "A amplitude \\langle \\phi | \\psi \\rangle é simétrica conjugada, \\langle \\phi | \\psi \\rangle = \\langle \\psi | \\phi \\rangle^*, e a normalização se escreve \\langle \\psi | \\psi \\rangle = 1. Elementos de matriz envolvem um operador: \\langle \\phi | \\hat{A} | \\psi \\rangle. Use uma | simples no meio em vez de \\mid, cujo espaçamento de relação afasta as duas metades. Para conteúdos altos, \\left\\langle \\phi \\middle| \\psi \\right\\rangle faz a barra central crescer também. Matemáticos escrevem a mesma coisa como (\\phi, \\psi) ou \\langle \\phi, \\psi \\rangle, com vírgula.",
  },
  "laplacian": {
    name: "Laplaciano",
    meaning: "Operador de Laplace, a soma das derivadas parciais de segunda ordem; mede quanto uma função difere de sua média local.",
    usage: "A equação de Laplace \\nabla^2 \\phi = 0, a equação de Poisson \\nabla^2 \\phi = -\\rho/\\varepsilon_0, a equação do calor e a equação da onda o utilizam. Físicos preferem \\nabla^2, que lembra que se trata do divergente do gradiente; matemáticos costumam escrever \\Delta, que pode conflitar com \\Delta como diferença finita ou variação. Em coordenadas cartesianas, \\nabla^2 f = f_{xx} + f_{yy} + f_{zz}, mas em coordenadas curvilíneas surgem termos adicionais. Para o laplaciano vetorial de um campo, escreva o operando em negrito para sinalizar o significado diferente.",
  },
  "d-alembertian": {
    name: "D'alembertiano",
    meaning: "Símbolo de quadrado, o operador de onda de d'Alembert na relatividade e o operador de necessidade na lógica modal.",
    usage: "Na relatividade especial, \\Box = \\partial^\\mu \\partial_\\mu combina derivadas temporais e espaciais, de modo que a equação da onda é \\Box \\phi = 0 e a equação de Klein-Gordon é (\\Box + m^2)\\phi = 0. As convenções de sinal variam com a assinatura da métrica, então declare a sua. Lógicos modais leem \\Box p como «necessariamente p», com \\Diamond p para «possivelmente p». Alguns textos escrevem \\Box^2 para o operador, por analogia com \\nabla^2. O visualmente parecido \\square é muito usado como marca de fim de demonstração; verifique qual glifo sua classe de documento usa para o QED.",
  },
  "calligraphic-l-lagrangian": {
    name: "L caligráfico (lagrangiana)",
    meaning: "L caligráfico, o símbolo padrão para uma densidade lagrangiana e, em aprendizado de máquina, para uma função de perda.",
    usage: "A teoria de campos escreve a ação como S = \\int \\mathcal{L}\\, d^4x, com a equação de Euler-Lagrange \\partial_\\mu \\frac{\\partial \\mathcal{L}}{\\partial(\\partial_\\mu \\phi)} = \\frac{\\partial \\mathcal{L}}{\\partial \\phi}. A mecânica clássica costuma usar L simples para a própria lagrangiana e reservar \\mathcal{L} para densidades. Artigos de aprendizado de máquina usam \\mathcal{L}(\\theta) para uma perda, e engenheiros o usam para a transformada de Laplace \\mathcal{L}\\{f\\}(s). Em otimização, a função lagrangiana com multiplicadores também é \\mathcal{L}(x, \\lambda). Introduza explicitamente o significado de que precisa. Sua contraparte pela transformada de Legendre é o hamiltoniano \\mathcal{H}.",
  },
  "calligraphic-h-hamiltonian": {
    name: "H caligráfico (hamiltoniano)",
    meaning: "H caligráfico, usado para o hamiltoniano (função energia) e frequentemente para um espaço de Hilbert.",
    usage: "Na mecânica clássica, as equações de Hamilton são \\dot{q} = \\partial \\mathcal{H}/\\partial p e \\dot{p} = -\\partial \\mathcal{H}/\\partial q. A mecânica quântica costuma escrever o operador hamiltoniano como \\hat{H} e usar \\mathcal{H} para o espaço de Hilbert dos estados, de modo que os dois significados caligráficos podem colidir num mesmo artigo. A física estatística usa \\mathcal{H} para um funcional hamiltoniano no peso de Boltzmann e^{-\\beta \\mathcal{H}}. A teoria do aprendizado o usa para uma classe de hipóteses. Escolha letras distintas se mais de um aparecer. Note que \\mathcal só cobre letras maiúsculas nas fontes padrão.",
  },
  "tensor": {
    name: "Tensor",
    meaning: "Um tensor contravariante de ordem 2, como o tensor energia-momento, escrito com dois índices gregos superiores.",
    usage: "A relatividade geral acopla a geometria à matéria por G_{\\mu\\nu} = 8\\pi G\\, T_{\\mu\\nu}, e a conservação se escreve \\nabla_\\mu T^{\\mu\\nu} = 0. As chaves agrupam os dois índices num único sobrescrito; T^\\mu\\nu colocaria \\nu na linha de base. Para tensores mistos, mantenha visível a ordem horizontal com um grupo vazio: T^{\\mu}{}_{\\nu} coloca o índice inferior depois do superior, e não embaixo dele. Índices repetidos em cima e embaixo seguem a convenção de soma de Einstein. Por convenção, índices gregos percorrem o espaço-tempo e índices latinos apenas o espaço.",
  },
  "christoffel-symbol": {
    name: "Símbolo de Christoffel",
    meaning: "Símbolo de Christoffel de segunda espécie, que codifica como os vetores da base coordenada variam para a conexão de Levi-Civita.",
    usage: "Ele é calculado a partir da métrica como \\Gamma^\\lambda_{\\mu\\nu} = \\frac{1}{2} g^{\\lambda\\sigma}(\\partial_\\mu g_{\\sigma\\nu} + \\partial_\\nu g_{\\sigma\\mu} - \\partial_\\sigma g_{\\mu\\nu}) e aparece na equação da geodésica e nas derivadas covariantes. Apesar da notação de índices, não é um tensor. Escrever o sobrescrito e o subscrito na mesma base os empilha verticalmente, que é o estilo usual aqui, porque o símbolo é simétrico no par inferior. O Gama maiúsculo é reto por padrão; \\varGamma dá uma versão itálica se o seu estilo exigir.",
  },
  "partial-time": {
    name: "Derivada parcial em relação ao tempo",
    meaning: "Operador de derivada parcial em relação ao tempo t, mantendo fixas todas as variáveis espaciais.",
    usage: "Ela rege as equações de evolução: a equação do calor \\frac{\\partial u}{\\partial t} = k \\nabla^2 u, a equação da continuidade e a equação de Schrödinger. No meio do texto, um \\frac completo fica apertado, então escreva \\partial u/\\partial t ou a forma compacta \\partial_t u; a forma com subscrito é padrão em artigos de EDP. Em fórmulas destacadas use \\frac, e \\dfrac se ela aparecer dentro de uma fração ou matriz e precisar manter o tamanho cheio. Distinga-a da derivada total d/dt e da derivada material D/Dt usada na mecânica dos fluidos.",
  },
  "vector-field": {
    name: "Campo vetorial",
    meaning: "Acento de seta sobre uma letra, que a marca como vetor, aqui o campo elétrico E.",
    usage: "A física introdutória escreve vetores com setas, \\vec{E}, \\vec{F} = q\\vec{E}, enquanto a maioria das revistas e dos textos avançados prefere negrito, \\mathbf{E}, ou, para letras gregas, \\boldsymbol{\\omega}. \\vec é um acento curto de largura fixa, dimensionado para um único caractere; para vetores de várias letras, como um segmento AB, \\overrightarrow{AB} se estende sobre todo o rótulo. Escolha um único estilo de vetor para o documento inteiro. Vetores unitários costumam levar chapéu, \\hat{x}, e para i e j sem pingo dentro de acentos use \\imath e \\jmath.",
  },
  "divergence": {
    name: "Divergente",
    meaning: "Operador divergente, o produto escalar de nabla com um campo vetorial, que dá o fluxo líquido para fora por unidade de volume.",
    usage: "A lei de Gauss \\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0 e a lei da inexistência de monopolos \\nabla \\cdot \\mathbf{B} = 0 são seus usos mais conhecidos, e o escoamento incompressível exige \\nabla \\cdot \\mathbf{u} = 0. \\cdot tem espaçamento de operador binário, que é a aparência esperada. Use \\cdot, não um ponto final nem \\bullet. Alguns textos matemáticos preferem \\operatorname{div} \\mathbf{F}, que evita tratar nabla como um vetor. O teorema da divergência o relaciona ao fluxo na fronteira: \\int_V \\nabla \\cdot \\mathbf{F}\\, dV = \\oint_{\\partial V} \\mathbf{F} \\cdot d\\mathbf{S}.",
  },
  "curl": {
    name: "Rotacional",
    meaning: "Operador rotacional, o produto vetorial de nabla com um campo vetorial, que mede sua rotação local ou densidade de circulação.",
    usage: "A lei de Faraday \\nabla \\times \\mathbf{E} = -\\partial \\mathbf{B}/\\partial t e a lei de Ampère com a correção de Maxwell são escritas com ele, e em fluidos \\nabla \\times \\mathbf{u} é a vorticidade. Vale lembrar duas identidades: o rotacional de um gradiente é zero e o divergente de um rotacional é zero. \\times é um operador binário, então o espaçamento é automático. Textos europeus às vezes escrevem \\operatorname{rot} \\mathbf{F}, e outros usam \\operatorname{curl}. O rotacional só é definido dessa forma em três dimensões.",
  },
};

export default text;
