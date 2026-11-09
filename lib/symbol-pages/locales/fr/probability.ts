import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/probability/<slug>. */
const text: SymbolPageTranslations = {
  "probability": {
    name: "Probabilité",
    meaning: "P ajouré (blackboard bold), la mesure de probabilité appliquée aux événements.",
    usage: "En théorie de la mesure, on écrit \\mathbb{P}(A) pour la probabilité de l’événement A, avec des axiomes comme \\mathbb{P}(\\Omega) = 1. Le style ajouré distingue la mesure d’un P ordinaire qui pourrait désigner une matrice, un polynôme ou une partition. Avec les polices standard, \\mathbb ne fonctionne que sur les majuscules : une minuscule produit des glyphes erronés. Associez-le à \\mathbb{E} et à un Var droit pour un style cohérent. Un espace probabilisé est le triplet (\\Omega, \\mathcal{F}, \\mathbb{P}), avec un F calligraphique pour la tribu. Certains auteurs utilisent plutôt \\Pr, un opérateur droit prédéfini.",
  },
  "probability-of-a": {
    name: "Probabilité de A",
    meaning: "Probabilité de l’événement A, notée avec un P majuscule italique ordinaire.",
    usage: "Les ouvrages d’introduction écrivent P(A) pour la probabilité que A se réalise, avec 0 \\le P(A) \\le 1 et la règle du complémentaire P(A^c) = 1 - P(A). Le P italique simple convient si aucune autre notion du document n’utilise cette lettre ; sinon, \\Pr(A), opérateur droit prédéfini, ou \\mathbb{P}(A) évitent le conflit. Pour de grands arguments, laissez les parenthèses s’agrandir : P\\left(\\bigcup_i A_i\\right). Taper Pr(A) sans barre oblique inverse donne un P et un r italiques, comme deux variables multipliées. La probabilité conditionnelle place \\mid à l’intérieur des parenthèses, P(A \\mid B), plutôt qu’une simple barre verticale.",
  },
  "expectation": {
    name: "Espérance",
    meaning: "Espérance d’une variable aléatoire X, notée avec un E ajouré.",
    usage: "L’espérance est la moyenne de X pondérée par sa loi, \\mathbb{E}[X] = \\sum_x x\\,p(x) ou \\int x f(x)\\,dx. Les articles d’apprentissage automatique l’emploient partout, souvent avec un indice désignant la loi : \\mathbb{E}_{x \\sim p}[\\ell(x)]. Les crochets sont l’usage, et \\left[ \\right] ou \\bigl[ \\bigr] aident lorsque l’argument contient des fractions. Le E ajouré distingue l’opérateur d’une énergie E ou d’un ensemble d’arêtes E. La linéarité, \\mathbb{E}[aX + bY] = a\\mathbb{E}[X] + b\\mathbb{E}[Y], vaut même sans indépendance, d’où son usage si libre.",
  },
  "expectation-e": {
    name: "Espérance (E)",
    meaning: "Espérance de X avec un E italique simple, la moyenne de sa loi.",
    usage: "De nombreux manuels de statistique écrivent E[X] ou E(X) pour l’espérance, avec l’identité de la variance \\operatorname{Var}(X) = E[X^2] - (E[X])^2 comme exemple classique. Un E italique peut entrer en conflit avec d’autres sens, comme une énergie ou un événement nommé E, c’est pourquoi \\mathbb{E} ou un \\mathrm{E} droit sont courants dans les articles de recherche. Si vous optez pour le droit, définissez \\DeclareMathOperator{\\E}{E} afin que l’espacement et la police restent uniformes partout. L’espérance conditionnelle suit le même style, E[X \\mid Y]. Quelle que soit la forme choisie, utilisez-la de façon cohérente du début à la fin.",
  },
  "variance": {
    name: "Variance",
    meaning: "Variance de X, l’espérance du carré de l’écart à sa moyenne, avec une étiquette droite.",
    usage: "Les identités usuelles sont \\text{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\mathbb{E}[X^2] - \\mu^2 et \\text{Var}(aX + b) = a^2\\text{Var}(X). \\text{Var} rend bien dans la plupart des cas, mais dans le texte italique d’un théorème l’étiquette devient elle aussi italique, car \\text reprend la police environnante. \\operatorname{Var} ou un \\DeclareMathOperator{\\Var}{Var} dans le préambule est plus robuste et espace correctement. Certains auteurs écrivent plutôt \\mathbb{V}, \\sigma^2 ou \\mathrm{Var}. Pour des variables indépendantes, les variances s’additionnent : \\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y), tandis que le cas général ajoute deux fois la covariance.",
  },
  "covariance": {
    name: "Covariance",
    meaning: "Covariance de X et Y, qui mesure la façon dont les deux variables aléatoires varient ensemble.",
    usage: "Définie par \\text{Cov}(X,Y) = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y], elle sous-tend la corrélation \\rho = \\text{Cov}(X,Y)/(\\sigma_X\\sigma_Y) et les matrices de covariance, généralement notées \\Sigma. Des variables indépendantes ont une covariance nulle, mais la réciproque est fausse en général. Comme pour Var, \\operatorname{Cov} ou un opérateur déclaré donne un rendu plus robuste que \\text{Cov}, qui passe en italique dans les énoncés de théorèmes. Ajoutez une espace fine après la virgule, (X,\\,Y), si les arguments semblent serrés. Pour un vecteur aléatoire, \\operatorname{Cov}(\\mathbf{X}) désigne la matrice de covariance complète. Une valeur positive signifie que les variables tendent à évoluer dans le même sens.",
  },
  "normal-distribution": {
    name: "Loi normale",
    meaning: "Loi normale (gaussienne) de moyenne mu et de variance sigma au carré.",
    usage: "Écrivez X \\sim \\mathcal{N}(\\mu, \\sigma^2) pour indiquer que X suit une loi normale ; le second paramètre est la variance, pas l’écart type, source fréquente de confusion à la lecture de documentations logicielles. La forme multivariée est \\mathcal{N}(\\boldsymbol{\\mu}, \\Sigma) avec une matrice de covariance. \\mathcal donne le N calligraphique et ne fonctionne que sur les majuscules. La densité \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-(x-\\mu)^2/(2\\sigma^2)} suit souvent en formule centrée. La loi normale centrée réduite est \\mathcal{N}(0, 1), et sa fonction de répartition est généralement notée \\Phi.",
  },
  "independence-symbol-double-perp": {
    name: "Symbole d’indépendance",
    meaning: "Deux signes \\perp superposés à l’aide d’espaces négatives, le symbole construit à la main habituel pour l’indépendance statistique.",
    usage: "Les probabilistes écrivent X \\perp\\!\\!\\!\\perp Y pour des variables aléatoires indépendantes et X \\perp\\!\\!\\!\\perp Y \\mid Z pour l’indépendance conditionnelle, notation popularisée par les modèles graphiques et l’inférence causale. Trois espaces fines négatives \\! rapprochent le second \\perp presque sur le premier, ce qui crée un T renversé à double jambage. Comme il est assemblé à la main, son aspect exact varie un peu selon les polices ; définissez une macro comme \\newcommand{\\indep}{\\mathrel{\\perp\\!\\!\\!\\perp}} pour qu’il reçoive aussi l’espacement d’une relation. Un simple \\perp sert à noter l’indépendance dans certains textes, mais il entre en conflit avec l’orthogonalité.",
  },
  "conditional": {
    name: "Barre de conditionnement",
    meaning: "Barre verticale avec espacement de relation, lue « sachant », « tel que » ou « divise ».",
    usage: "Contrairement à un simple |, \\mid ajoute de l’espace des deux côtés, exactement ce qu’il faut pour la probabilité conditionnelle P(A \\mid B), la notation en compréhension \\{x \\mid x > 0\\} et la divisibilité 3 \\mid 12. Utilisez | ou \\vert pour les valeurs absolues, où aucun espace supplémentaire n’est voulu, et \\lvert ... \\rvert quand la barre encadre quelque chose. Dans une notation en compréhension au contenu haut, \\middle| entre \\left\\{ et \\right\\} agrandit la barre en conséquence. Sa négation est \\nmid, pour « ne divise pas ». Beaucoup d’auteurs utilisent plutôt un deux-points dans la notation en compréhension, ce qui évite la confusion quand la divisibilité apparaît aussi.",
  },
  "given": {
    name: "Probabilité conditionnelle",
    meaning: "Probabilité conditionnelle de A sachant que l’événement B s’est déjà produit.",
    usage: "Définie par P(A \\mid B) = P(A \\cap B)/P(B) pour P(B) > 0, elle est la brique de base du théorème de Bayes. Utilisez toujours \\mid plutôt que | : la barre nue n’a pas d’espace autour et l’expression paraît serrée. Pour de grands arguments, écrivez P\\left(A \\,\\middle|\\, B\\right) afin que la barre s’ajuste aux parenthèses. Les conditionnements multiples, P(A \\mid B, C), mettent une virgule après la barre plutôt qu’une seconde barre. En notation de vraisemblance, p(x \\mid \\theta) suit la même convention, et certains statisticiens utilisent un point-virgule, p(x; \\theta), quand \\theta est un paramètre fixe plutôt qu’une variable aléatoire.",
  },
  "chi-squared": {
    name: "Khi-deux",
    meaning: "Khi-deux : la lettre grecque chi au carré, qui désigne une loi et une statistique de test.",
    usage: "La statistique de Pearson \\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i} compare effectifs observés et attendus, et \\chi^2_k désigne la loi à k degrés de liberté. Notez que \\chi est la lettre grecque chi ; ne tapez pas un x, qui lui ressemble un peu mais est un glyphe différent, placé autrement sur la ligne de base. Pour attacher à la fois les degrés de liberté et le carré, écrivez \\chi^2_{k} ou \\chi_{k}^{2} ; LaTeX les empile de façon identique dans les deux cas. Dans les sections de résultats, présentez les tests sous la forme \\chi^2(2) = 6.1, p = 0.047, en suivant le guide de style de votre domaine.",
  },
  "binomial-coefficient": {
    name: "Coefficient binomial",
    meaning: "Coefficient binomial « k parmi n », le nombre de sous-ensembles à k éléments d’un ensemble à n éléments.",
    usage: "Il apparaît dans la formule du binôme (x+y)^n = \\sum_k \\binom{n}{k} x^k y^{n-k}, dans la règle de Pascal et dans la loi binomiale P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k}. \\binom s’adapte au style courant ; forcez la grande forme avec \\dbinom en ligne ou la petite avec \\tbinom en formule centrée. L’ancienne syntaxe {n \\choose k} fonctionne encore dans le style plain TeX mais est déconseillée dans les documents LaTeX. Certains textes écrivent C(n,k) ou un nCk préfixé ; la notation empilée entre parenthèses est la norme dans les écrits de recherche.",
  },
  "factorial": {
    name: "Factorielle",
    meaning: "Factorielle de n, le produit de tous les entiers strictement positifs jusqu’à n.",
    usage: "Taper n! ne nécessite aucune commande : le point d’exclamation s’imprime directement en mode mathématique, avec 0! = 1 par convention. Les factorielles abondent en combinatoire et en analyse, de \\binom{n}{k} = \\frac{n!}{k!(n-k)!} aux coefficients de Taylor \\frac{f^{(n)}(a)}{n!}. Surveillez l’espacement dans des produits comme n!\\,m!, où une espace fine empêche le signe de toucher la lettre suivante, et parenthésez les arguments composés, (n+1)!. Ne confondez pas ce caractère avec \\!, qui est une espace fine négative. Parmi les notations voisines figurent la double factorielle n!! et la formule de Stirling n! \\approx \\sqrt{2\\pi n}\\,(n/e)^n.",
  },
};

export default text;
