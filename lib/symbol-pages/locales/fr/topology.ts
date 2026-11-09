import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/topology/<slug>. */
const text: SymbolPageTranslations = {
  "aleph-null": {
    name: "Aleph zéro",
    meaning: "Aleph zéro, le cardinal de l’ensemble des entiers naturels et le plus petit cardinal infini.",
    usage: "Tout ensemble que l’on peut énumérer sous forme de suite, comme \\mathbb{Z} ou \\mathbb{Q}, a pour cardinal \\aleph_0, et une arithmétique comme \\aleph_0 + \\aleph_0 = \\aleph_0 \\cdot \\aleph_0 = \\aleph_0 montre comment les cardinaux infinis absorbent les autres. L’argument diagonal de Cantor prouve que 2^{\\aleph_0} > \\aleph_0 : les réels sont donc strictement plus nombreux. \\aleph est disponible sans paquet supplémentaire et se comporte comme un symbole ordinaire, si bien que l’indice s’attache directement. Certains textes anciens écrivent \\omega pour l’ordinal correspondant ; gardez cardinaux et ordinaux bien distincts dans vos notations.",
  },
  "aleph-one": {
    name: "Aleph un",
    meaning: "Aleph un, le premier cardinal non dénombrable : la taille infinie qui suit immédiatement le dénombrable.",
    usage: "L’hypothèse du continu affirme que 2^{\\aleph_0} = \\aleph_1, c’est-à-dire qu’aucun ensemble n’a une taille strictement comprise entre celle des entiers et celle des réels ; Gödel et Cohen ont montré qu’elle est indépendante de ZFC. N’écrivez pas |\\mathbb{R}| = \\aleph_1 comme un fait, puisque c’est précisément l’hypothèse en question ; utilisez \\mathfrak{c} ou 2^{\\aleph_0} pour le continu. \\aleph_1 est aussi le cardinal de \\omega_1, l’ensemble des ordinaux dénombrables. Les alephs plus grands suivent le schéma \\aleph_\\alpha avec des indices ordinaux, et l’indice doit être entre accolades s’il compte plus d’un token.",
  },
  "beth": {
    name: "Beth",
    meaning: "Lettre hébraïque beth, utilisée pour les nombres beth : des ensembles des parties itérés à partir du cardinal dénombrable.",
    usage: "La suite des beth est définie par \\beth_0 = \\aleph_0 et \\beth_{\\alpha+1} = 2^{\\beth_\\alpha}, de sorte que \\beth_1 est le cardinal des réels et \\beth_2 celui de l’ensemble des fonctions réelles. L’hypothèse généralisée du continu est l’énoncé \\aleph_\\alpha = \\beth_\\alpha pour tout ordinal. À côté de \\aleph, le jeu de symboles étendu de LaTeX propose \\beth, \\gimel et \\daleth, les deuxième à quatrième lettres hébraïques. Comme \\aleph, c’est un symbole ordinaire, donc les indices s’attachent directement ; on le rencontre rarement hors de la théorie des ensembles.",
  },
  "weierstrass-p": {
    name: "P de Weierstrass",
    meaning: "P de style calligraphique désignant la fonction elliptique de Weierstrass, une fonction méromorphe doublement périodique.",
    usage: "La fonction de Weierstrass \\wp(z) vérifie (\\wp')^2 = 4\\wp^3 - g_2 \\wp - g_3, ce qui explique qu’elle paramètre les courbes elliptiques. Le glyphe est un p manuscrit particulier, sans lien avec une famille de polices, si bien que \\mathcal{P} ou \\mathscr{P} sont des symboles différents. Certains auteurs utilisent \\wp pour l’ensemble des parties, mais \\mathcal{P}(X) est le choix le plus courant et évite la confusion avec la fonction elliptique. La notation prime fonctionne comme d’habitude, \\wp'(z), et le symbole descend légèrement sous la ligne de base, comme un jambage.",
  },
  "fraktur-r-real-part-symbol": {
    name: "R gothique (symbole de partie réelle)",
    meaning: "R majuscule gothique, le symbole classique pour prendre la partie réelle d’une quantité complexe.",
    usage: "À lui seul, \\Re n’est qu’un glyphe et non un opérateur : aucune espace automatique n’est ajoutée avant l’argument ; faites-le suivre de parenthèses ou d’accolades, comme dans \\Re(s) > 1 pour le demi-plan où converge la série de la fonction zêta de Riemann. Les spécialistes de théorie analytique des nombres utilisent exactement ce style. Si vous préférez un autre rendu, redéfinissez-le avec \\renewcommand{\\Re}{\\operatorname{Re}} dans le préambule afin que toutes les occurrences changent d’un coup. Notez que \\Re diffère de \\mathfrak{R}, qui donne un R gothique issu d’une autre police et d’aspect légèrement différent.",
  },
  "fraktur-i-imaginary-part-symbol": {
    name: "I gothique (symbole de partie imaginaire)",
    meaning: "I majuscule gothique, le glyphe traditionnel de la partie imaginaire d’un nombre complexe.",
    usage: "L’intégration sur un contour et la théorie spectrale utilisent \\Im pour décomposer les quantités : la partie imaginaire d’une fonction de Green donne la densité d’états, et \\Im \\tau > 0 définit le demi-plan de Poincaré des formes modulaires. Comme pour \\Re, la commande n’imprime qu’un symbole, il faut donc ajouter les parenthèses. Beaucoup de lecteurs trouvent les lettres gothiques faciles à mal lire, et la redéfinition \\renewcommand{\\Im}{\\operatorname{Im}} passe à un « Im » droit. Si votre texte utilise aussi l’image d’un homomorphisme, notez-la \\operatorname{im} en minuscules pour distinguer les deux.",
  },
  "calligraphic-o": {
    name: "O calligraphique",
    meaning: "O calligraphique, utilisé pour une famille d’ouverts en topologie et pour plusieurs autres structures.",
    usage: "Un espace topologique s’écrit souvent (X, \\mathcal{O}), où \\mathcal{O} est la famille des ouverts, même si \\tau est tout aussi courant. La même lettre a bien d’autres usages : la notation asymptotique grand O \\mathcal{O}(n \\log n), le faisceau structural \\mathcal{O}_X en géométrie algébrique et l’anneau des entiers \\mathcal{O}_K d’un corps de nombres. \\mathcal ne prend en charge que les majuscules dans les polices standard. Pour la notation asymptotique, de nombreux guides de style préfèrent un O italique simple : choisissez-en un et appliquez-le partout.",
  },
  "interior": {
    name: "Intérieur",
    meaning: "Intérieur de A, la réunion de tous les ouverts contenus dans A ; il s’écrit avec un petit rond en exposant.",
    usage: "L’intérieur est le plus grand ouvert contenu dans A, et il est lié à l’adhérence par \\partial A = \\overline{A} \\setminus A^{\\circ}. L’exposant \\circ est le rond de composition placé en hauteur ; il ne faut pas le confondre avec un symbole de degré dans les unités. D’autres notations courantes sont \\operatorname{int} A et \\mathring{A}, cette dernière plaçant le rond directement au-dessus de la lettre ; \\mathring convient mieux aux lettres seules munies d’indices comme U_1. Pour un intervalle fermé, [a, b]^{\\circ} = (a, b).",
  },
  "exterior": {
    name: "Extérieur",
    meaning: "Extérieur d’un ensemble A : l’intérieur de son complémentaire, formé des points ayant un voisinage disjoint de A.",
    usage: "Tout espace se décompose en trois parties disjointes, l’intérieur, la frontière et l’extérieur de A, et \\text{ext}(A) = (X \\setminus A)^{\\circ}. Taper ext en mode mathématique sans enveloppe donne les lettres italiques e, x, t multipliées entre elles, d’où la nécessité d’une enveloppe. \\text hérite de la police environnante et passe donc en italique dans un théorème ; \\operatorname{ext} reste droit et fournit l’espacement d’opérateur, et \\DeclareMathOperator{\\ext}{ext} permet de le réutiliser. Sachez que ext abrège aussi l’algèbre extérieure et les groupes Ext de l’algèbre homologique.",
  },
  "boundary-operator": {
    name: "Opérateur de bord",
    meaning: "Frontière de A : les points dont tout voisinage rencontre à la fois A et son complémentaire.",
    usage: "La frontière d’un disque est son cercle, et la frontière des rationnels dans les réels est tout l’espace, \\partial \\mathbb{Q} = \\mathbb{R}. Le même symbole \\partial est l’opérateur de bord en topologie algébrique, \\partial_n : C_n \\to C_{n-1} avec \\partial \\circ \\partial = 0, et il apparaît dans le théorème de Stokes \\int_{\\partial M} \\omega = \\int_M d\\omega. Certains textes écrivent plutôt \\operatorname{Fr} A ou \\operatorname{bd} A. Comme \\partial est un symbole ordinaire, rien ne le sépare du nom de l’ensemble ; cet aspect serré est la convention voulue.",
  },
  "direct-limit": {
    name: "Limite inductive",
    meaning: "Limite inductive (colimite) d’un système filtrant, composée comme « lim » avec une flèche vers la droite en dessous.",
    usage: "Les limites inductives construisent des objets comme \\mathbb{Q} = \\varinjlim \\frac{1}{n}\\mathbb{Z} ou la fibre d’un faisceau, \\mathcal{F}_x = \\varinjlim_{U \\ni x} \\mathcal{F}(U). En mode hors texte, l’ensemble d’indices se place sous la flèche ; en ligne, il se place à côté. Le paquet amsmath propose aussi \\injlim, qui imprime « inj lim » en toutes lettres : choisissez la forme en usage dans votre domaine. Les spécialistes de théorie des catégories écrivent souvent \\operatorname*{colim} à la place, puisque les limites inductives sont un cas particulier des colimites. Son pendant pour les systèmes projectifs est \\varprojlim.",
  },
  "inverse-limit": {
    name: "Limite projective",
    meaning: "Limite projective (ou inverse) d’un système, représentée par « lim » avec une flèche vers la gauche en dessous.",
    usage: "Les entiers p-adiques en sont l’exemple classique, \\mathbb{Z}_p = \\varprojlim \\mathbb{Z}/p^n\\mathbb{Z}, et les groupes profinis comme les groupes de Galois sont des limites projectives de groupes finis. Comme pour \\lim, l’indice se place en dessous en style hors texte. L’alternative \\projlim imprime les mots « proj lim » sans flèche. La théorie des catégories généralise cela à une limite quelconque, généralement notée \\lim. Veillez au sens des flèches : \\varprojlim porte la flèche vers la gauche et correspond à des applications qui descendent le système, \\varinjlim la flèche vers la droite.",
  },
  "quotient": {
    name: "Quotient",
    meaning: "Quotient de A par B : un groupe, un anneau, un module ou un espace dans lequel B est écrasé ou factorisé.",
    usage: "Les quotients apparaissent dans \\mathbb{Z}/n\\mathbb{Z}, G/H pour les classes à gauche et X/A pour écraser un sous-espace en un point. En mode mathématique, / est un symbole ordinaire sans espace autour, ce qui est le rendu standard. Pour un quotient par une relation d’équivalence, mettez le tilde entre accolades, X/{\\sim}, sinon \\sim reçoit l’espacement d’une relation et laisse un trou. Avec des opérandes hauts, les constructions \\big/ ou \\left. \\middle/ \\right. gardent la barre proportionnée. N’utilisez pas \\setminus ici : c’est la différence ensembliste, une autre opération. Précisez quelle structure porte le quotient, car G/H n’est un groupe que si H est distingué.",
  },
  "fundamental-group": {
    name: "Groupe fondamental",
    meaning: "Groupe fondamental d’un espace : les classes d’homotopie de lacets en un point base, avec la concaténation comme produit.",
    usage: "Le calcul classique \\pi_1(S^1) \\cong \\mathbb{Z} compte combien de fois un lacet fait le tour du cercle, et un espace dont le \\pi_1 est trivial est dit simplement connexe. Écrivez explicitement le point base, \\pi_1(X, x_0), quand il importe ; pour les espaces connexes par arcs, on l’omet souvent. Les groupes d’homotopie supérieurs suivent le même schéma, \\pi_n(X). Utilisez \\cong pour l’isomorphisme plutôt que =. Si \\pi désigne aussi le nombre pi ou une projection dans le même document, demandez-vous si les lecteurs risquent de les confondre.",
  },
  "homology": {
    name: "Homologie",
    meaning: "n-ième groupe d’homologie d’un espace ou d’un complexe de chaînes, qui mesure les trous de dimension n.",
    usage: "Pour les sphères, H_n(S^n) \\cong \\mathbb{Z} tandis que H_k(S^n) = 0 pour 0 < k < n, et la caractéristique d’Euler est la somme alternée des rangs des H_n. Les coefficients s’écrivent après un point-virgule, H_n(X; \\mathbb{Z}/2), et l’homologie relative s’écrit H_n(X, A). Les indices marquent l’homologie, les exposants la cohomologie : ne les confondez pas. Les variantes se signalent par des décorations : homologie réduite \\tilde{H}_n, homologie singulière H_n^{\\mathrm{sing}}. En algèbre homologique, elle est définie comme \\ker \\partial_n / \\operatorname{im} \\partial_{n+1}. Les suites exactes longues de ces groupes sont généralement dessinées sous forme de diagrammes commutatifs.",
  },
  "cohomology": {
    name: "Cohomologie",
    meaning: "n-ième groupe de cohomologie, la théorie duale de l’homologie, munie d’une structure d’anneau par le cup-produit.",
    usage: "La cohomologie de de Rham H^n_{\\mathrm{dR}}(M) classe les formes différentielles fermées modulo les formes exactes, et le cup-produit \\smile fait de H^\\ast(X) un anneau gradué. Combiner un exposant et un indice, comme dans H^n_{\\mathrm{dR}}, les empile proprement ; utilisez \\mathrm pour les étiquettes qui sont des mots et non des variables. L’indice en exposant la distingue de l’homologie H_n, une convention qu’il vaut la peine de respecter. La cohomologie des groupes H^n(G, M) et la cohomologie des faisceaux H^n(X, \\mathcal{F}) utilisent le même symbole avec des arguments différents. La dualité de Poincaré relie H^k et H_{n-k} sur les variétés fermées orientées de dimension n, ce qui explique pourquoi les deux notations apparaissent souvent ensemble.",
  },
  "calligraphic-c-category": {
    name: "C calligraphique (catégorie)",
    meaning: "C calligraphique, le nom par défaut d’une catégorie quelconque ; également utilisé pour des ensembles de contraintes ou ensembles admissibles.",
    usage: "La théorie des catégories écrit les objets X \\in \\mathcal{C} et les ensembles de morphismes \\operatorname{Hom}_{\\mathcal{C}}(X, Y), une seconde catégorie étant généralement appelée \\mathcal{D}. Les catégories concrètes sont souvent composées en gras ou en linéale, comme \\mathbf{Set} ou \\mathsf{Grp}, pour distinguer les noms des variables. En optimisation, \\mathcal{C} désigne un ensemble admissible convexe, comme dans \\min_{x \\in \\mathcal{C}} f(x). \\mathcal ne fournit que des majuscules dans les polices par défaut ; \\mathscr offre un style manuscrit plus bouclé si vous avez besoin d’une seconde famille.",
  },
  "calligraphic-f-functor": {
    name: "F calligraphique (foncteur)",
    meaning: "F calligraphique, qui désigne souvent un foncteur entre catégories, un faisceau, une tribu ou une transformée.",
    usage: "Un foncteur \\mathcal{F} \\colon \\mathcal{C} \\to \\mathcal{D} envoie objets et morphismes en préservant la composition. Hors de la théorie des catégories, la même lettre désigne un faisceau \\mathcal{F}(U), une tribu ou une filtration (\\mathcal{F}_t en probabilités), ou encore la transformée de Fourier \\mathcal{F}\\{f\\}. En raison de cette surcharge, introduisez la lettre explicitement. Utilisez \\colon plutôt que : pour écrire la signature du foncteur, afin d’obtenir un espacement de ponctuation. Beaucoup d’auteurs réservent les italiques simples F, G aux foncteurs et gardent les lettres calligraphiques pour les faisceaux. Une transformation naturelle entre deux foncteurs s’écrit souvent \\eta \\colon \\mathcal{F} \\Rightarrow \\mathcal{G}.",
  },
};

export default text;
