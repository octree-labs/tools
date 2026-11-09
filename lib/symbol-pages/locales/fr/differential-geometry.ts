import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/differential-geometry/<slug>. */
const text: SymbolPageTranslations = {
  "manifold": {
    name: "Variété",
    meaning: "M calligraphique, la manière standard de nommer une variété différentielle dans les articles de géométrie différentielle et de topologie.",
    usage: "Écrire \\mathcal{M} plutôt qu’un simple M italique indique que l’objet est un espace et non une matrice ou un nombre, ce qui aide quand M est déjà pris. Les cartes s’écrivent \\varphi: U \\subseteq \\mathcal{M} \\to \\mathbb{R}^n et la dimension \\dim \\mathcal{M} = n. La même lettre désigne aussi les modèles de Kripke en logique et les espaces de modules en géométrie algébrique : définissez-la donc une fois dans le texte. \\mathcal n’a de glyphes fiables que pour les majuscules latines ; pour un M d’écriture plus ornée, utilisez \\mathscr{M}, et gardez un seul style dans tout l’article.",
  },
  "tangent-space": {
    name: "Espace tangent",
    meaning: "Espace tangent à la variété M au point p : l’espace vectoriel de tous les vecteurs vitesse des courbes passant par p.",
    usage: "Pour une variété de dimension n, T_p M est un espace vectoriel réel de dimension n, de base de coordonnées \\partial/\\partial x^i en p. La différentielle d’une application lisse s’écrit dF_p: T_p M \\to T_{F(p)} N, et un champ de vecteurs associe à chaque p un élément de T_p M. En mode mathématique, l’espace entre T_p et M est ignoré : le résultat est donc le compact T_pM dans les deux cas ; ajoutez \\, si vous voulez une séparation visible. Si la variété s’appelle \\mathcal{M}, écrivez T_p\\mathcal{M} par cohérence.",
  },
  "cotangent-space": {
    name: "Espace cotangent",
    meaning: "Espace cotangent en p : le dual de T_p M, formé des formes linéaires (covecteurs) sur les vecteurs tangents en p.",
    usage: "Les éléments de T^*_p M sont des covecteurs comme la différentielle df_p, et les différentielles de coordonnées dx^i forment la base duale de \\partial/\\partial x^i. Placer l’étoile avant ou après l’indice (T^*_p M ou T_p^* M) produit le même résultat, puisque TeX superpose l’exposant et l’indice quel que soit leur ordre. Préférez ^* à ^{\\ast} uniquement par concision ; les deux donnent le même astérisque. La métrique identifie T_p M à T^*_p M en abaissant un indice, et c’est ainsi que les gradients deviennent des covecteurs.",
  },
  "tangent-bundle": {
    name: "Fibré tangent",
    meaning: "Fibré tangent : la réunion disjointe de tous les espaces tangents T_p M, elle-même une variété de dimension double de celle de M.",
    usage: "Un point de TM est un couple (p, v) avec v \\in T_p M, et la projection \\pi: TM \\to M oublie le vecteur. Un champ de vecteurs est précisément une section lisse X: M \\to TM telle que \\pi \\circ X = \\mathrm{id}. L’application tangente (poussée en avant) de F: M \\to N s’écrit souvent TF ou dF: TM \\to TN. Comme TeX compose les deux lettres italiques sans espace, TM se lit correctement comme un seul nom ; si une confusion avec un produit T \\cdot M est possible, signalez-le dans le texte.",
  },
  "cotangent-bundle": {
    name: "Fibré cotangent",
    meaning: "Fibré cotangent : le fibré de tous les espaces cotangents de M, l’espace des phases naturel de la mécanique hamiltonienne.",
    usage: "Les points de T^*M sont des couples (q, p) formés d’une position et d’un covecteur, c’est pourquoi la mécanique classique s’y déroule. Il porte une forme symplectique canonique \\omega = dq^i \\wedge dp_i, et les 1-formes sur M sont des sections de T^*M. Les formes de degré supérieur sont des sections de \\Lambda^k T^*M, écrit avec \\Lambda ou \\bigwedge^k. L’astérisque est un exposant, donc T^*M et T^{*}M s’affichent de la même façon ; évitez T*M sans accent circonflexe, qui place une étoile de type opérateur binaire sur la ligne de base.",
  },
  "covariant-derivative": {
    name: "Dérivée covariante",
    meaning: "Dérivée covariante du champ de vecteurs Y dans la direction X, définie par une connexion affine \\nabla.",
    usage: "Une connexion affine est linéaire sur les fonctions en X et vérifie la règle de Leibniz \\nabla_X(fY) = (Xf)Y + f\\nabla_X Y. La connexion de Levi-Civita est l’unique connexion sans torsion compatible avec la métrique, ce qui donne \\nabla_X Y - \\nabla_Y X = [X, Y]. En coordonnées, elle se réduit à \\nabla_i Y^k = \\partial_i Y^k + \\Gamma^k_{ij} Y^j. La direction en indice est composée en petit ; pour des expressions longues comme \\nabla_{\\dot\\gamma}\\dot\\gamma, entourez l’indice d’accolades afin que le point reste attaché.",
  },
  "christoffel-symbol": {
    name: "Symbole de Christoffel",
    meaning: "Symboles de Christoffel : les coefficients de connexion qui indiquent comment les vecteurs de la base de coordonnées varient d’un point à l’autre.",
    usage: "Pour la connexion de Levi-Civita, ils se calculent à partir de la métrique par \\Gamma^k_{ij} = \\tfrac12 g^{kl}(\\partial_i g_{jl} + \\partial_j g_{il} - \\partial_l g_{ij}), et ils sont symétriques en i et j. Ce ne sont pas les composantes d’un tenseur, c’est pourquoi ils peuvent s’annuler en un point en coordonnées normales. Les majuscules grecques sont droites par défaut en LaTeX ; si votre style les veut en italique, utilisez \\varGamma. Certains textes anciens notent ceux de seconde espèce par un symbole à accolades, mais la forme \\Gamma est aujourd’hui la norme.",
  },
  "riemann-curvature": {
    name: "Tenseur de courbure de Riemann",
    meaning: "Composantes du tenseur de courbure de Riemann, qui mesure dans quelle mesure le transport parallèle le long d’une petite boucle ne ramène pas un vecteur à lui-même.",
    usage: "Avec une convention courante, R^l_{ijk} = \\partial_j \\Gamma^l_{ik} - \\partial_k \\Gamma^l_{ij} + \\Gamma^l_{jm}\\Gamma^m_{ik} - \\Gamma^l_{km}\\Gamma^m_{ij}, mais le signe et l’ordre des indices varient selon les manuels : précisez donc les vôtres. Écrit R^l_{ijk}, TeX place l directement au-dessus de i, ce qui masque quelle position est montée ; pour décaler les indices, utilisez R^l{}_{ijk}, où le groupe vide repousse l’indice vers la droite. Abaisser le premier indice donne R_{lijk}, antisymétrique dans sa première paire et dans sa dernière paire de positions selon les conventions usuelles, mais vérifiez la position des indices de votre source avant de citer des identités.",
  },
  "ricci-tensor": {
    name: "Tenseur de Ricci",
    meaning: "Tenseur de Ricci : la trace du tenseur de Riemann sur une paire d’indices, une grandeur de courbure symétrique à deux indices.",
    usage: "Il s’obtient par contraction, R_{ij} = R^k_{ikj} selon une convention courante, et il gouverne la déformation des volumes le long des géodésiques. Les équations d’Einstein s’écrivent R_{\\mu\\nu} - \\tfrac12 R g_{\\mu\\nu} = 8\\pi G T_{\\mu\\nu}, et une variété telle que R_{ij} = \\lambda g_{ij} est dite d’Einstein. Les physiciens indicent généralement avec des lettres grecques \\mu\\nu, les mathématiciens avec des lettres latines ij. Ricci-plate signifie R_{ij} = 0, la condition qui définit les métriques de Calabi-Yau. Certains auteurs écrivent \\mathrm{Ric} pour le tenseur intrinsèque (sans coordonnées) ; \\operatorname{Ric} donne le même texte droit avec l’espacement d’un opérateur.",
  },
  "scalar-curvature": {
    name: "Courbure scalaire",
    meaning: "Courbure scalaire : la trace complète du tenseur de Ricci, un nombre unique en chaque point d’une variété riemannienne.",
    usage: "Elle est définie par R = g^{ij} R_{ij} et, en dimension deux, elle vaut le double de la courbure de Gauss K. L’action d’Einstein-Hilbert l’intègre, S = \\int R \\sqrt{-g}\\, d^4x, et le problème de Yamabe cherche une métrique conforme de R constante. Comme un R seul désigne aussi les réels, une relation ou un rayon, de nombreux auteurs écrivent plutôt \\mathrm{Scal} ou s ; n’utilisez jamais R pour \\mathbb{R} dans le même article. Composez-la comme un simple R italique en mode mathématique.",
  },
  "metric-tensor": {
    name: "Tenseur métrique",
    meaning: "Composantes du tenseur métrique, la forme symétrique définie positive qui définit longueurs et angles sur une variété.",
    usage: "L’élément de longueur s’écrit ds^2 = g_{ij}\\, dx^i dx^j avec sommation implicite, et la longueur d’une courbe vaut \\int \\sqrt{g_{ij}\\dot x^i \\dot x^j}\\, dt. En relativité, la métrique est lorentzienne et indicée g_{\\mu\\nu}, par exemple la métrique de Minkowski \\eta_{\\mu\\nu}. Son déterminant apparaît dans la forme volume \\sqrt{\\det g}\\, dx^1 \\cdots dx^n, souvent abrégée en \\sqrt{g}. Ajoutez des espaces fines avec \\, entre la métrique et les différentielles pour que ds^2 = g_{ij}\\,dx^i\\,dx^j ne soit pas tassé. Sous forme matricielle, on l’écrit souvent (g_{ij}) ou simplement g.",
  },
  "inverse-metric": {
    name: "Métrique inverse",
    meaning: "Métrique inverse : la matrice inverse de g_{ij}, utilisée pour monter les indices et former traces et gradients.",
    usage: "Elle est définie par g^{ij} g_{jk} = \\delta^i_k, si bien que dans un repère orthonormé elle est égale à l’identité. Monter un indice l’utilise directement, v^i = g^{ij} v_j, et le gradient d’une fonction a pour composantes (\\nabla f)^i = g^{ij}\\partial_j f. L’opérateur de Laplace-Beltrami est \\frac{1}{\\sqrt{g}}\\partial_i(\\sqrt{g}\\, g^{ij}\\partial_j f). Ne confondez pas g^{ij} avec l’inverse d’une seule composante : c’est un coefficient de la matrice inverse, donc g^{11} \\ne 1/g_{11} sauf si la métrique est diagonale.",
  },
  "exterior-derivative": {
    name: "Dérivée extérieure",
    meaning: "Dérivée extérieure d’une forme différentielle \\omega, qui augmente son degré de un et généralise le gradient, le rotationnel et la divergence.",
    usage: "L’opérateur vérifie d \\circ d = 0 et la règle de Leibniz graduée d(\\alpha \\wedge \\beta) = d\\alpha \\wedge \\beta + (-1)^k \\alpha \\wedge d\\beta pour une k-forme \\alpha. Le théorème de Stokes devient \\int_M d\\omega = \\int_{\\partial M} \\omega, et une forme est fermée lorsque d\\omega = 0 et exacte lorsque \\omega = d\\eta. De nombreux styles composent l’opérateur en romain, \\mathrm{d}\\omega, pour le distinguer d’une variable d ; quel que soit votre choix, appliquez-le de façon cohérente, y compris dans les intégrales comme \\int f\\, dx.",
  },
  "wedge-product": {
    name: "Produit extérieur",
    meaning: "Produit extérieur de deux formes différentielles, un produit antisymétrique qui construit des formes de degré supérieur.",
    usage: "Pour une k-forme \\alpha et une l-forme \\beta, il est commutatif au sens gradué, \\alpha \\wedge \\beta = (-1)^{kl} \\beta \\wedge \\alpha, donc le produit extérieur d’une 1-forme avec elle-même est nul. Les formes volume s’écrivent dx^1 \\wedge \\cdots \\wedge dx^n. \\wedge est un opérateur binaire : TeX ajoute donc une espace moyenne des deux côtés ; \\land produit le même glyphe et se réserve plutôt au et logique. Pour la puissance extérieure ou un grand produit extérieur sur un ensemble d’indices, utilisez \\bigwedge, comme dans \\bigwedge^k V.",
  },
  "lie-derivative": {
    name: "Dérivée de Lie",
    meaning: "Dérivée de Lie le long du champ de vecteurs X, qui mesure comment un tenseur varie sous le flot engendré par X.",
    usage: "Sur les fonctions, c’est simplement \\mathcal{L}_X f = Xf ; sur les champs de vecteurs, c’est le crochet de Lie \\mathcal{L}_X Y = [X, Y] ; et sur les formes, la formule magique de Cartan donne \\mathcal{L}_X = d\\iota_X + \\iota_X d. Contrairement à \\nabla_X, elle ne nécessite ni connexion ni métrique. Un champ de Killing vérifie \\mathcal{L}_X g = 0. Le L calligraphique est le choix habituel ; \\pounds_X apparaît dans certains textes de relativité, mais \\mathcal{L} est plus clair. Évitez la confusion avec un lagrangien \\mathcal{L} dans les articles de physique qui utilisent les deux.",
  },
  "lie-bracket": {
    name: "Crochet de Lie",
    meaning: "Crochet de Lie de deux champs de vecteurs : le champ de vecteurs qui agit sur les fonctions par X(Yf) - Y(Xf).",
    usage: "Le crochet est bilinéaire, antisymétrique et vérifie l’identité de Jacobi [X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0, ce qui fait des champs de vecteurs une algèbre de Lie. En coordonnées, ses composantes sont X^j\\partial_j Y^i - Y^j\\partial_j X^i. La même notation entre crochets désigne le commutateur AB - BA de matrices ou d’opérateurs quantiques. De simples [ et ] conviennent pour des arguments courts ; pour des contenus hauts, utilisez \\left[ \\right] ou \\bigl[ \\bigr] afin que les crochets s’adaptent. Il mesure le défaut de commutation des flots de X et de Y, et les champs de vecteurs de coordonnées vérifient toujours [\\partial_i, \\partial_j] = 0.",
  },
  "connection-form": {
    name: "Forme de connexion",
    meaning: "Formes de connexion : une matrice de 1-formes décrivant une connexion relativement à un repère choisi du fibré.",
    usage: "Dans la méthode du repère mobile de Cartan, avec le corepère e^i, la première équation de structure d’une connexion sans torsion est de^i = -\\omega^i_j \\wedge e^j. Pour une connexion métrique dans un repère orthonormé, la matrice est antisymétrique, \\omega_{ij} = -\\omega_{ji}. Les physiciens appellent le même objet la connexion de spin \\omega^a{}_b. Utilisez \\omega^i{}_j pour décaler les indices lorsque leur ordre compte, et ne la confondez pas avec une forme symplectique ou de Kähler, également notée \\omega. Lors d’un changement de repère, elle se transforme de façon non homogène : comme les symboles de Christoffel, ce n’est donc pas un tenseur.",
  },
  "curvature-form": {
    name: "Forme de courbure",
    meaning: "Formes de courbure : une matrice de 2-formes qui encode la courbure d’une connexion dans un repère donné.",
    usage: "La seconde équation de structure de Cartan les définit par \\Omega^i_j = d\\omega^i_j + \\omega^i_k \\wedge \\omega^k_j, ou de façon compacte \\Omega = d\\omega + \\omega \\wedge \\omega. Le développement dans le corepère redonne le tenseur de Riemann, \\Omega^i_j = \\tfrac12 R^i_{jkl}\\, e^k \\wedge e^l. La théorie de Chern-Weil construit à partir de ces formes des classes caractéristiques comme \\operatorname{tr}(\\Omega \\wedge \\Omega). La majuscule \\Omega est droite par défaut ; \\varOmega en donne une version italique. La même lettre désigne aussi l’espace des formes \\Omega^k(M) : le contexte doit donc lever toute ambiguïté.",
  },
  "geodesic": {
    name: "Géodésique",
    meaning: "Courbe sur une variété paramétrée par t ; dans ce contexte, une géodésique, c’est-à-dire la courbe d’accélération covariante nulle.",
    usage: "Une géodésique vérifie \\nabla_{\\dot\\gamma}\\dot\\gamma = 0, soit en coordonnées \\ddot\\gamma^k + \\Gamma^k_{ij}\\dot\\gamma^i\\dot\\gamma^j = 0. Les données initiales \\gamma(0) = p et \\dot\\gamma(0) = v définissent l’application exponentielle \\exp_p(v) = \\gamma(1). Utilisez \\dot{\\gamma} et \\ddot{\\gamma} pour les dérivées temporelles ; \\gamma'(t) est l’alternative lorsque t n’est pas un temps. Écrivez \\dot\\gamma^k plutôt que \\dot{\\gamma^k} pour que le point ne surmonte que la lettre, et gardez \\gamma en minuscule, puisque \\Gamma est réservé aux symboles de Christoffel. Sur une sphère ronde, les géodésiques sont des arcs de grands cercles.",
  },
  "parallel-transport": {
    name: "Transport parallèle",
    meaning: "Transport parallèle le long de la courbe \\gamma : l’application linéaire qui déplace les vecteurs entre espaces tangents sans les faire tourner.",
    usage: "Il s’agit de l’application P_\\gamma: T_{\\gamma(0)}M \\to T_{\\gamma(1)}M, et pour une connexion compatible avec la métrique c’est une isométrie. Le transport le long de boucles fermées engendre le groupe d’holonomie, dont la non-trivialité traduit la courbure. Certains textes écrivent \\tau_\\gamma, \\Pi_\\gamma ou P^\\gamma_{t \\leftarrow s} pour indiquer les extrémités. Pour un indice d’une seule lettre, les accolades de P_{\\gamma} sont facultatives, mais gardez-les quand l’indice s’allonge, comme dans P_{\\gamma|[0,t]}. Un champ de vecteurs V est parallèle le long de \\gamma lorsque \\nabla_{\\dot\\gamma} V = 0, et P_\\gamma envoie V(0) sur V(1). Autour d’une petite boucle, le transport diffère de l’identité d’un terme proportionnel à la courbure.",
  },
};

export default text;
