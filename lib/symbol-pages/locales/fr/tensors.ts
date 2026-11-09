import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/tensors/<slug>. */
const text: SymbolPageTranslations = {
  "tensor": {
    name: "Tenseur",
    meaning: "Tenseur général de type (2,2), avec deux indices supérieurs (contravariants) et deux indices inférieurs (covariants).",
    usage: "Chaque indice supérieur se transforme avec la matrice jacobienne et chaque indice inférieur avec son inverse, de sorte que contracter un indice supérieur avec un indice inférieur donne un résultat indépendant des coordonnées. Écrits T^{ij}_{kl}, les indices inférieurs se placent juste sous les indices supérieurs, ce qui masque l’ordre des indices ; pour les tenseurs non symétriques, écrivez T^{ij}{}_{kl} afin que le bloc inférieur commence après le bloc supérieur. Le tenseur de Riemann R^i{}_{jkl} et le tenseur d’élasticité C_{ijkl} en sont des exemples courants. Les indices sont en italique par défaut ; gardez-les ainsi, sauf s’il s’agit d’étiquettes et non de positions du tenseur.",
  },
  "covariant-index": {
    name: "Indices covariants",
    meaning: "Tenseur à deux indices inférieurs, un tenseur covariant d’ordre 2 tel qu’une métrique, un tenseur des contraintes ou une forme bilinéaire.",
    usage: "Les indices inférieurs se transforment avec la jacobienne inverse, T'_{ij} = \\frac{\\partial x^k}{\\partial x'^i}\\frac{\\partial x^l}{\\partial x'^j} T_{kl}, selon la même règle que les gradients. Parmi les exemples figurent la métrique g_{ij}, le tenseur de Ricci R_{ij} et le tenseur des contraintes de Cauchy \\sigma_{ij}. Un 2-tenseur covariant agit sur deux vecteurs pour donner un nombre, T_{ij} u^i v^j. Dans l’espace euclidien en coordonnées cartésiennes, la distinction entre indices supérieurs et inférieurs disparaît, c’est pourquoi les textes d’ingénierie écrivent souvent tous les indices en bas. Tout tenseur de ce genre se décompose en une partie symétrique et une partie antisymétrique, T_{ij} = T_{(ij)} + T_{[ij]}.",
  },
  "contravariant-index": {
    name: "Indices contravariants",
    meaning: "Tenseur à deux indices supérieurs : un tenseur contravariant d’ordre 2, comme la métrique inverse ou le tenseur énergie-impulsion.",
    usage: "Les indices supérieurs se transforment comme les composantes d’un vecteur, T'^{ij} = \\frac{\\partial x'^i}{\\partial x^k}\\frac{\\partial x'^j}{\\partial x^l} T^{kl}. Le tenseur énergie-impulsion T^{\\mu\\nu} est l’exemple type en physique, avec la loi de conservation \\partial_\\mu T^{\\mu\\nu} = 0 dans l’espace-temps plat. Placez les deux indices dans un même groupe d’accolades, T^{ij} ; T^i^j provoque une erreur de double exposant. Lorsqu’un prime est aussi nécessaire, T'^{ij} fonctionne, car LaTeX fusionne le prime avec l’exposant qui suit. La contraction avec deux covecteurs, T^{ij}\\alpha_i\\beta_j, donne un scalaire, et la métrique inverse g^{ij} est l’exemple le plus courant en géométrie.",
  },
  "mixed-tensor": {
    name: "Tenseur mixte",
    meaning: "Tenseur mixte de type (1,1), avec un indice supérieur et un indice inférieur, équivalent à une application linéaire sur les vecteurs.",
    usage: "Un tenseur (1,1) envoie un vecteur v^j sur T^i_j v^j : dans une base, c’est donc simplement une matrice, et sa trace T^i_i est indépendante des coordonnées. Avec T^i_j, les deux indices sont superposés verticalement, ce qui convient au symbole de Kronecker mais reste ambigu ailleurs, puisque T^i{}_j et T_j{}^i diffèrent après abaissement par la métrique. L’astuce du groupe vide {} les décale. Abaisser l’indice supérieur avec la métrique produit un tenseur (0,2), T_{kj} = g_{ki} T^i{}_j, et la forme décalée montre quelle position a bougé.",
  },
  "kronecker-delta": {
    name: "Symbole de Kronecker",
    meaning: "Symbole de Kronecker : vaut 1 lorsque les indices sont égaux et 0 sinon ; ce sont les composantes de l’application identité.",
    usage: "Il agit comme une substitution d’indice, \\delta^i_j v^j = v^i, et sa trace en dimension n vaut \\delta^i_i = n. Il exprime aussi la dualité des bases, e^i(e_j) = \\delta^i_j, et la relation de la métrique inverse g^{ik} g_{kj} = \\delta^i_j. Comme il est symétrique, superposer les indices en \\delta^i_j est sans danger, contrairement aux tenseurs mixtes en général. En contexte cartésien, on l’écrit souvent \\delta_{ij}, avec les deux indices en bas. Ne le confondez pas avec la distribution de Dirac \\delta(x).",
  },
  "levi-civita": {
    name: "Symbole de Levi-Civita",
    meaning: "Symbole de Levi-Civita en dimension trois : +1 pour les permutations paires de 123, -1 pour les impaires et 0 si un indice se répète.",
    usage: "Il exprime les produits vectoriels et les rotationnels sous forme indicielle, (\\mathbf{a} \\times \\mathbf{b})_i = \\epsilon_{ijk} a_j b_k, et les déterminants sous la forme \\det A = \\epsilon_{ijk} A_{1i} A_{2j} A_{3k}. L’identité de contraction \\epsilon_{ijk}\\epsilon_{imn} = \\delta_{jm}\\delta_{kn} - \\delta_{jn}\\delta_{km} sert constamment dans les démonstrations d’analyse vectorielle. Beaucoup d’auteurs préfèrent \\varepsilon_{ijk}, l’epsilon arrondi, pour réserver \\epsilon aux petites quantités ; choisissez-en un et tenez-vous-y. Sur les espaces courbes, c’est une densité tensorielle, et le vrai tenseur comporte un facteur \\sqrt{g}.",
  },
  "einstein-summation": {
    name: "Convention de sommation d’Einstein",
    meaning: "Convention de sommation d’Einstein : un indice répété, une fois en haut et une fois en bas, est sommé, de sorte que A^i B_i désigne la somme sur i.",
    usage: "La convention permet à A^i B_i de représenter \\sum_i A^i B_i, l’appariement scalaire d’un vecteur et d’un covecteur, sans écrire le signe somme. Chaque indice sommé doit apparaître exactement une fois en haut et une fois en bas ; un indice qui apparaît trois fois signale une erreur. Les indices libres doivent concorder des deux côtés d’une équation, comme dans v^i = T^i_j u^j. Si la convention risque d’être inconnue des lecteurs, énoncez-la une fois et donnez la forme explicite avec \\sum dans la première équation.",
  },
  "tensor-product": {
    name: "Produit tensoriel",
    meaning: "Produit tensoriel de A et B, qui combine deux tenseurs ou espaces vectoriels en un objet d’ordre ou de dimension supérieurs.",
    usage: "Pour des espaces vectoriels, \\dim(V \\otimes W) = \\dim V \\cdot \\dim W, et pour des tenseurs les composantes se multiplient, (A \\otimes B)^{ij} = A^i B^j. Pour les matrices, le même symbole désigne le produit de Kronecker, une matrice par blocs dont les blocs sont a_{ij}B. La mécanique quantique l’utilise pour les systèmes composés, |\\psi\\rangle \\otimes |\\phi\\rangle. \\otimes est un opérateur binaire avec espacement automatique ; pour un produit sur un ensemble d’indices, utilisez le grand opérateur \\bigotimes_{i=1}^n V_i, et pour des facteurs répétés V^{\\otimes k}.",
  },
  "contraction": {
    name: "Contraction",
    meaning: "Contraction d’un tenseur mixte : sommation sur un indice supérieur et un indice inférieur répétés, qui donne sa trace.",
    usage: "Égaler un indice supérieur à un indice inférieur puis sommer supprime les deux et abaisse l’ordre de deux ; pour un tenseur (1,1), le résultat T^i_i = \\operatorname{tr} T est un scalaire. Le tenseur de Ricci est une contraction du tenseur de Riemann, et la courbure scalaire s’obtient par une nouvelle contraction avec la métrique, R = g^{ij}R_{ij}. Seul un indice supérieur peut être contracté avec un indice inférieur ; contracter deux indices inférieurs exige la métrique. Écrivez \\operatorname{tr} plutôt que tr tout court, pour que la trace soit droite et dotée de l’espacement d’opérateur.",
  },
  "metric-lowering": {
    name: "Abaissement d’indice",
    meaning: "Abaissement d’indice : la métrique convertit les composantes contravariantes v^j d’un vecteur en composantes covariantes v_i.",
    usage: "C’est l’isomorphisme musical bémol, souvent noté v^\\flat, qui identifie vecteurs et covecteurs. Dans l’espace euclidien en coordonnées cartésiennes, g_{ij} = \\delta_{ij}, si bien que l’abaissement ne change rien numériquement ; dans l’espace de Minkowski de signature (-,+,+,+), il change le signe de la composante temporelle. L’indice libre i doit concorder des deux côtés, tandis que j est sommé. Pour un tenseur complet, abaissez chaque indice séparément, T_{ij} = g_{ik} T^k{}_j, en suivant l’ordre des positions. La commande \\flat utilisée dans v^\\flat est le signe musical bémol, disponible en mode mathématique standard.",
  },
  "metric-raising": {
    name: "Élévation d’indice",
    meaning: "Élévation d’indice : la métrique inverse reconvertit les composantes covariantes v_j en composantes contravariantes v^i.",
    usage: "L’élévation est l’isomorphisme musical dièse, \\alpha^\\sharp, et c’est ainsi que l’on construit le vecteur gradient à partir de la différentielle : (\\operatorname{grad} f)^i = g^{ij}\\partial_j f. Élever puis abaisser redonne les composantes d’origine, car g^{ij} g_{jk} = \\delta^i_k. En relativité, p^\\mu = g^{\\mu\\nu} p_\\nu convertit le covecteur quadri-impulsion en vecteur. Écrivez la métrique inverse avec des indices supérieurs, jamais g^{-1}_{ij}, qui suggère une mauvaise position des indices. La commande \\sharp donne le signe dièse correspondant, et pour une métrique diagonale seul le terme j = i subsiste.",
  },
  "partial-derivative": {
    name: "Dérivée partielle",
    meaning: "Notation abrégée de la dérivée partielle par rapport à la coordonnée x^i, utilisée aussi pour les vecteurs de la base coordonnée.",
    usage: "Écrire \\partial_i f au lieu de \\frac{\\partial f}{\\partial x^i} garde compactes les formules chargées d’indices, et en géométrie \\partial_i désigne aussi le champ de vecteurs de base \\partial/\\partial x^i. La relativité utilise \\partial_\\mu sur l’espace-temps, avec le d’alembertien \\partial_\\mu\\partial^\\mu. Les dérivées partielles des composantes d’un tenseur ne sont pas des tenseurs en coordonnées curvilignes ; remplacez \\partial_i par \\nabla_i pour y remédier. Un indice précédé d’une virgule, f_{,i}, est l’équivalent traditionnel. Utilisez \\partial, et non d ou \\delta, pour les dérivées partielles. Les dérivées partielles commutent, \\partial_i\\partial_j = \\partial_j\\partial_i, ce qui explique que les champs coordonnés aient un crochet de Lie nul.",
  },
  "covariant-derivative": {
    name: "Dérivée covariante",
    meaning: "Dérivée covariante selon la i-ème direction coordonnée, le remplaçant tensoriel de la dérivée partielle \\partial_i.",
    usage: "Sur un vecteur, elle ajoute une correction faisant intervenir les symboles de Christoffel, \\nabla_i v^j = \\partial_i v^j + \\Gamma^j_{ik} v^k, et sur un covecteur le signe s’inverse, \\nabla_i w_j = \\partial_i w_j - \\Gamma^k_{ij} w_k. La notation traditionnelle avec point-virgule écrit v^j{}_{;i} pour la même chose. La compatibilité avec la métrique signifie \\nabla_k g_{ij} = 0, de sorte que l’on peut monter et descendre les indices à travers \\nabla. En général, les dérivées covariantes ne commutent pas ; leur commutateur appliqué à un vecteur donne le tenseur de Riemann. Les textes de relativité écrivent le même opérateur \\nabla_\\mu.",
  },
  "symmetrization": {
    name: "Symétrisation",
    meaning: "Partie symétrique d’un tenseur par rapport aux indices i et j, notée avec des parenthèses autour de la paire d’indices.",
    usage: "Pour deux indices, T_{(ij)} = \\tfrac12(T_{ij} + T_{ji}), et pour n indices la somme porte sur toutes les permutations, divisée par n!. La notation entre parenthèses est standard en relativité générale, par exemple dans l’équation de Killing \\nabla_{(i}\\xi_{j)} = 0. Pour exclure un indice de la symétrisation, isolez-le entre barres verticales, comme dans T_{(i|j|k)}. Les parenthèses dans un indice sont des caractères ordinaires, aucune commande spéciale n’est donc nécessaire ; gardez seulement à l’esprit que les parenthèses peuvent s’ouvrir et se fermer dans des indices différents.",
  },
  "antisymmetrization": {
    name: "Antisymétrisation",
    meaning: "Partie antisymétrique d’un tenseur par rapport à i et j, notée avec des crochets autour des indices.",
    usage: "Pour deux indices, T_{[ij]} = \\tfrac12(T_{ij} - T_{ji}), et en général c’est la somme signée sur les permutations, divisée par n!. Tout tenseur à deux indices se décompose en T_{ij} = T_{(ij)} + T_{[ij]}. La première identité de Bianchi s’écrit R_{i[jkl]} = 0, et le tenseur du champ électromagnétique vérifie \\partial_{[\\mu}F_{\\nu\\lambda]} = 0. Certains auteurs omettent le facteur 1/n! : précisez donc votre normalisation. Les crochets dans un indice sont des caractères ordinaires, sans besoin de \\lbrack. Les tenseurs covariants totalement antisymétriques correspondent aux formes différentielles.",
  },
  "tensor-rank": {
    name: "Type d’un tenseur",
    meaning: "Type d’un tenseur : p indices contravariants (supérieurs) et q covariants (inférieurs), parfois appelé abusivement son ordre.",
    usage: "Un tenseur de type (p, q) est un élément de V^{\\otimes p} \\otimes (V^*)^{\\otimes q} : un vecteur est donc de type (1, 0), un covecteur (0, 1), une application linéaire (1, 1) et une métrique (0, 2). La terminologie varie : certains ouvrages appellent p + q le rang ou l’ordre et réservent « type » au couple. La contraction envoie le type (p, q) sur (p-1, q-1). En LaTeX, le couple s’écrit simplement entre parenthèses avec une virgule ; l’espace fine après la virgule est automatique en mode mathématique, n’ajoutez donc pas d’espacement supplémentaire.",
  },
  "basis-vector": {
    name: "Vecteur de base",
    meaning: "Vecteurs de base d’un espace vectoriel ou tangent, portant un indice inférieur pour que les composantes portent des indices supérieurs.",
    usage: "Un vecteur se décompose en v = v^i e_i, l’indice inférieur de la base s’appariant avec l’indice supérieur des composantes. En géométrie, la base coordonnée est e_i = \\partial_i, et dans un repère orthonormé g(e_i, e_j) = \\delta_{ij}. En physique et en ingénierie, on écrit souvent \\mathbf{e}_i en gras ou \\hat{e}_i avec un chapeau, et \\mathbf{e}_x, \\mathbf{e}_y pour les directions cartésiennes. Gardez l’indice en bas ; écrire e^i pour les vecteurs de base entre en conflit avec la convention de la base duale. Lors d’un changement de base e'_i = A^j{}_i e_j, les composantes se transforment avec la matrice inverse.",
  },
  "dual-basis": {
    name: "Base duale",
    meaning: "Covecteurs de la base duale, définis par e^i(e_j) = \\delta^i_j, qui servent à extraire les composantes d’un vecteur.",
    usage: "Appliquer e^i à un vecteur en extrait la i-ème composante, e^i(v) = v^i, et les covecteurs se décomposent en \\alpha = \\alpha_i e^i. Pour des coordonnées, la base duale est e^i = dx^i, et dans la méthode de Cartan le corepère orthonormé e^a donne la métrique sous la forme g = \\delta_{ab}\\, e^a \\otimes e^b. Comme l’indice est en exposant, e^i peut être pris pour une puissance de e ; s’il y a le moindre risque, précisez-le ou utilisez \\theta^i, une alternative courante pour les corepères.",
  },
  "component-transform": {
    name: "Loi de transformation des composantes",
    meaning: "Loi de transformation d’un tenseur contravariant d’ordre 2 : chaque indice supérieur reçoit un facteur de la matrice de transformation.",
    usage: "Ici, \\Lambda^i_k est la matrice de transformation, une transformation de Lorentz en relativité restreinte ou, en général, la jacobienne \\partial x'^i/\\partial x^k, et les composantes primées vivent dans le nouveau repère. Un tenseur se définit précisément par le fait d’obéir à cette loi, tandis que les indices inférieurs se transforment avec la matrice inverse. LaTeX fusionne le prime et l’exposant dans T'^{ij}, il n’est donc pas nécessaire d’entourer le prime d’accolades. Décalez les indices en \\Lambda^i{}_k lorsque la matrice n’est pas symétrique, pour que le lecteur sache quelle position correspond à la ligne.",
  },
};

export default text;
