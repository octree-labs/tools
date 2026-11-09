import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/optimization/<slug>. */
const text: SymbolPageTranslations = {
  "argmax-subscript": {
    name: "Argmax avec indice",
    meaning: "Argmax sur x : le point x en lequel la fonction objectif atteint sa plus grande valeur.",
    usage: "Dans les textes d'optimisation, le maximiseur de f sur un ensemble admissible s'écrit x^* = \\arg\\max_{x \\in \\mathcal{X}} f(x). Saisi sous la forme \\arg\\max_{x}, l'indice s'attache à \\max : en style display, x apparaît donc centré sous max plutôt que sous l'ensemble arg max. \\operatorname*{arg\\,max}_{x} ou un opérateur déclaré en version étoilée le place sous le nom complet. En mode en ligne, l'indice se place en bas à droite dans tous les cas. Comme les maxima ne sont pas forcément uniques, x^* \\in \\arg\\max est techniquement plus précis que l'égalité. Pour une maximisation sur plusieurs variables, énumérez-les : \\arg\\max_{x, y}.",
  },
  "argmin-subscript": {
    name: "Argmin avec indice",
    meaning: "Argmin sur x : le point x qui minimise la fonction objectif.",
    usage: "Cette forme définit la solution d'un problème de minimisation, comme dans l'opérateur proximal \\operatorname{prox}_f(v) = \\arg\\min_x \\big(f(x) + \\frac{1}{2}\\|x - v\\|_2^2\\big). Comme \\arg ne peut pas porter de bornes, l'indice appartient à \\min, qui ne le centre sous min qu'en mode display ; \\operatorname*{arg\\,min} corrige ce placement. Les contraintes peuvent figurer en indice, \\arg\\min_{x \\in C}, ou sur plusieurs lignes à l'intérieur de \\substack. Distinguez argmin, qui renvoie un point ou un ensemble, de \\min, qui renvoie la valeur ; les confondre est une erreur fréquente dans les copies d'étudiants.",
  },
  minimize: {
    name: "Minimisation",
    meaning: "Minimum sur x : la plus petite valeur que prend une expression lorsque x varie, avec x écrit sous min.",
    usage: "\\min est un opérateur prédéfini qui accepte des bornes : en mode display, \\min_{x} place x sous le mot, tandis qu'en ligne il apparaît en indice à droite. C'est la première ligne d'un problème d'optimisation standard : \\min_x f(x) sous contraintes. Lorsque le minimum peut ne pas être atteint, par exemple sur des ensembles ouverts, utilisez plutôt \\inf. Pour forcer le placement de style display en ligne, écrivez \\min\\limits_{x}. Pour des conditions sur plusieurs lignes sous min, utilisez \\substack{x \\in \\mathbb{R}^n \\\\ Ax = b}. La valeur désignée est un nombre, contrairement à argmin, qui renvoie le minimiseur.",
  },
  maximize: {
    name: "Maximisation",
    meaning: "Maximum sur x : la plus grande valeur atteinte par l'expression lorsque x parcourt son domaine.",
    usage: "\\max_{x} fonctionne comme \\min_{x} : l'opérateur prédéfini place les bornes en dessous en style display et sur le côté en ligne. Usages typiques : la fonction duale, les problèmes minimax comme \\min_G \\max_D dans l'entraînement des GAN et la maximisation de la marge dans les SVM. Lorsque le supremum peut ne pas être atteint, \\sup est l'opérateur correct. Combiner les opérateurs est courant, et TeX gère bien les bornes empilées sur des \\min et \\max adjacents. Vous pouvez modifier le placement avec \\limits ou \\nolimits, et ajouter \\, ou \\; avant l'objectif pour aérer les expressions longues.",
  },
  "subject-to": {
    name: "Abréviation « sous contraintes » (s.t.)",
    meaning: "Abréviation de l'anglais « subject to » (sous contraintes), qui introduit les contraintes d'un problème d'optimisation.",
    usage: "Dans l'énoncé d'un problème, s.t. sépare l'objectif des contraintes : \\min_x f(x) \\quad \\text{s.t.} \\quad g_i(x) \\leq 0 ; les textes français écrivent souvent \\text{s.c.}. Utilisez \\text pour que les lettres soient droites et que le point soit conservé, et entourez-le de \\quad des deux côtés, car \\text n'ajoute aucun espacement de lui-même. De nombreux guides de style préfèrent l'expression complète \\text{sous contraintes}, en particulier dans les formulations en display alignées avec l'environnement align, où les contraintes s'empilent sur les lignes suivantes sous la première. Ne tapez pas s.t. directement en mode mathématique : vous obtiendriez un s et un t en italique, traités comme des variables, suivis d'un point.",
  },
  constraint: {
    name: "Contrainte d'inégalité",
    meaning: "Contrainte d'inégalité générique : la fonction g doit être négative ou nulle en tout point admissible x.",
    usage: "Écrire les contraintes d'inégalité sous la forme standard g_i(x) \\leq 0 est la convention en optimisation convexe : une contrainte comme x_1 + x_2 \\geq 1 devient donc 1 - x_1 - x_2 \\leq 0. \\leq a un alias court, \\le, et les deux donnent le même glyphe ; \\leqslant dessine une barre inclinée, préférée dans une partie de la typographie européenne. Indexez les contraintes multiples sous la forme g_i(x) \\leq 0 pour i = 1, \\dots, m. Dans l'analyse KKT, chaque inégalité reçoit un multiplicateur \\lambda_i \\geq 0 avec la condition des écarts complémentaires \\lambda_i g_i(x) = 0. Pour la mise en page des problèmes, alignez-les avec &.",
  },
  "equality-constraint": {
    name: "Contrainte d'égalité",
    meaning: "Contrainte d'égalité générique : la fonction h doit s'annuler en tout point admissible x.",
    usage: "Les contraintes d'égalité h_j(x) = 0 complètent les contraintes d'inégalité g_i(x) \\leq 0 dans la forme standard d'un programme non linéaire. En optimisation convexe, elles doivent être affines et s'écrivent donc souvent Ax = b. Dans le lagrangien, chacune reçoit un multiplicateur \\nu_j ou \\mu_j qui, contrairement aux multiplicateurs d'inégalité, peut être de signe quelconque. La lettre h est conventionnelle, mais elle entre en collision avec le pas ou l'entropie dans certains domaines ; choisissez des lettres qui ne se confondent pas. Pour plusieurs contraintes, indexez-les par j afin de les distinguer de l'indice d'inégalité i.",
  },
  lagrangian: {
    name: "Lagrangien",
    meaning: "Fonction de Lagrange (lagrangien), qui combine un objectif et ses contraintes pondérées par des multiplicateurs lambda.",
    usage: "Le lagrangien s'écrit \\mathcal{L}(x, \\lambda, \\nu) = f(x) + \\sum_i \\lambda_i g_i(x) + \\sum_j \\nu_j h_j(x), et la fonction duale est son infimum en x. Annuler \\nabla_x \\mathcal{L} = 0 donne la condition de stationnarité utilisée dans les problèmes d'optimisation sous contraintes et dans les dérivations des SVM. \\mathcal donne le L calligraphique et ne fonctionne que pour les majuscules. Comme le même \\mathcal{L} désigne aussi les fonctions de perte en apprentissage automatique, les articles qui mélangent les deux écrivent parfois L ou \\Lambda pour l'une d'elles. Certains manuels utilisent la convention de signe opposée, f - \\lambda g : précisez la vôtre.",
  },
  gradient: {
    name: "Gradient",
    meaning: "Gradient de f en x : le vecteur des dérivées partielles premières, orienté dans la direction de plus forte croissance.",
    usage: "Le gradient \\nabla f(x) = (\\partial f/\\partial x_1, \\dots, \\partial f/\\partial x_n)^\\top est au cœur des méthodes du premier ordre comme la descente de gradient, x_{k+1} = x_k - \\alpha \\nabla f(x_k), et son annulation est la condition d'optimalité du premier ordre pour les problèmes sans contraintes. \\nabla est le triangle renversé, appelé opérateur nabla ou del. Le même opérateur donne la divergence, \\nabla \\cdot \\mathbf{F}, et le rotationnel, \\nabla \\times \\mathbf{F}, en analyse vectorielle. Ne le confondez pas avec \\Delta, le triangle droit utilisé pour le laplacien ou les différences finies. Ajoutez un indice, \\nabla_x f, lorsque vous ne dérivez que par rapport à certaines variables.",
  },
  hessian: {
    name: "Matrice hessienne",
    meaning: "Hessienne de f en x : la matrice des dérivées partielles secondes, qui décrit la courbure locale.",
    usage: "En optimisation, \\nabla^2 f(x) est la matrice hessienne, utilisée dans la méthode de Newton, x_{k+1} = x_k - [\\nabla^2 f(x_k)]^{-1} \\nabla f(x_k), et dans les conditions du second ordre : une hessienne définie positive en un point stationnaire implique un minimum local strict. Attention : en physique et en EDP, \\nabla^2 f désigne le laplacien, un scalaire égal à la trace de la hessienne, souvent noté \\Delta f. Précisez ce que vous entendez, ou utilisez H_f ou \\nabla\\nabla^\\top f pour la matrice. Pour une fonction deux fois dérivable, la convexité équivaut à \\nabla^2 f(x) \\succeq 0 partout.",
  },
  "optimal-value": {
    name: "Solution optimale",
    meaning: "x muni d'une étoile en exposant : la solution optimale, ou minimiseur, d'un problème d'optimisation.",
    usage: "L'étoile marque le point optimal : p^* = f(x^*) est la valeur optimale, et les optima duaux s'écrivent \\lambda^*, \\nu^*. Les vitesses de convergence s'expriment en fonction de f(x_k) - f(x^*) ou de \\|x_k - x^*\\|. ^* et ^\\ast produisent le même astérisque ; ^\\star donne une étoile qui évite la confusion avec les conjugués complexes, les adjoints ou l'étoile de Kleene, qui utilisent aussi un astérisque. Lorsque x porte aussi un indice, x_k^* et x^*_k donnent un rendu identique. Distinguez x^* de \\hat{x}, qui désigne généralement une estimation ou une solution approchée.",
  },
  "feasible-set": {
    name: "Ensemble admissible",
    meaning: "X calligraphique, couramment utilisé pour nommer l'ensemble admissible ou le domaine que parcourt une variable d'optimisation.",
    usage: "Les majuscules calligraphiques nomment les ensembles en optimisation et en apprentissage : x \\in \\mathcal{X} pour la région admissible, \\mathcal{Y} pour les étiquettes, \\mathcal{D} pour une distribution de données, \\mathcal{H} pour une classe d'hypothèses. \\mathcal ne prend en charge que les majuscules ; avec des minuscules en argument, les glyphes obtenus sont imprévisibles. Si vous voulez une écriture plus ornée, \\mathscr offre un autre style, tandis que \\mathbb{X} donne du gras de tableau noir, plus souvent réservé aux ensembles de nombres. La projection sur l'ensemble s'écrit \\Pi_{\\mathcal{X}}(y). Définissez l'ensemble explicitement une fois, par exemple \\mathcal{X} = \\{x : g_i(x) \\leq 0\\}.",
  },
  "kkt-conditions": {
    name: "Conditions de Karush-Kuhn-Tucker (KKT)",
    meaning: "Condition de stationnarité du système KKT : le gradient de l'objectif est équilibré par les gradients pondérés des contraintes.",
    usage: "Cette ligne est la première des conditions de Karush-Kuhn-Tucker ; l'ensemble complet y ajoute l'admissibilité primale g(x) \\leq 0, l'admissibilité duale \\lambda \\geq 0 et les écarts complémentaires \\lambda g(x) = 0. Avec plusieurs contraintes, elle se généralise en \\nabla f(x^*) + \\sum_i \\lambda_i \\nabla g_i(x^*) + \\sum_j \\nu_j \\nabla h_j(x^*) = 0. Composez le système entier dans un environnement cases ou aligned pour plus de lisibilité. Les conventions de signe varient : si le lagrangien s'écrit f - \\lambda g, le plus devient un moins ; accordez-le donc à votre définition. Évaluer explicitement en x^* évite toute ambiguïté.",
  },
  "positive-definite": {
    name: "Matrice définie positive",
    meaning: "Condition de matrice définie positive : A \\succ 0 signifie que x^T A x > 0 pour tout vecteur x non nul.",
    usage: "En analyse matricielle et en programmation semi-définie, \\succ exprime l'ordre de Loewner : A \\succ B signifie que A - B est définie positive. Une hessienne \\nabla^2 f(x) \\succ 0 garantit la stricte convexité, et une matrice de covariance \\Sigma \\succ 0 est inversible. \\succ est un symbole de relation : il reçoit donc automatiquement l'espacement d'une relation. Évitez > pour les matrices, qui suggère une comparaison terme à terme. Parmi les symboles ressemblants figurent \\succcurlyeq, variante courbe que certains auteurs emploient pour le cas semi-défini, et \\gg, qui signifie « très supérieur à ». La notation ensembliste équivalente s'écrit A \\in \\mathbb{S}^n_{++}.",
    example: "\\Sigma \\succ 0 \\implies \\Sigma^{-1} \\text{ existe}",
  },
  "positive-semidefinite": {
    name: "Matrice semi-définie positive",
    meaning: "Condition de semi-définie positivité : A \\succeq 0 signifie que x^T A x \\geq 0 pour tout vecteur x.",
    usage: "Les contraintes semi-définies X \\succeq 0 définissent les programmes semi-définis, et la convexité d'une fonction régulière équivaut à \\nabla^2 f(x) \\succeq 0. Les matrices de Gram et de covariance sont toujours semi-définies positives. \\succeq dessine le symbole « succède » avec une barre droite en dessous ; \\succcurlyeq est une variante à barre courbe que certains textes d'optimisation préfèrent : choisissez-en une et tenez-vous-y. La version stricte est \\succ. L'ensemble de ces matrices s'écrit souvent \\mathbb{S}^n_+, et les conditions sur le complément de Schur sont une manière courante d'énoncer ces contraintes sous forme de blocs.",
    example: "\\min_{X} \\operatorname{tr}(CX) \\quad \\text{s.c.} \\quad X \\succeq 0",
  },
};

export default text;
