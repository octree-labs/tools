import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/machine-learning/<slug>. */
const text: SymbolPageTranslations = {
  expectation: {
    name: "Espérance",
    meaning: "E majuscule ajouré (gras de tableau noir), la notation standard de l'espérance d'une variable aléatoire.",
    usage: "L'espérance est omniprésente en probabilités et en apprentissage automatique : \\mathbb{E}[X] = \\sum_x x\\,p(x), le risque \\mathbb{E}_{(x,y)\\sim\\mathcal{D}}[\\ell(f(x),y)], ou la variance écrite \\mathbb{E}[X^2] - \\mathbb{E}[X]^2. Placez la distribution en indice pour rendre explicite la source d'aléa. Les ouvrages plus anciens utilisent un E romain simple ou \\operatorname{E} ; les deux conviennent s'ils sont employés de façon cohérente. Notez que \\mathbb ne fournit que des majuscules : \\mathbb{e} donne un résultat inutilisable. Utilisez des crochets pour l'argument, et \\left[ \\right] lorsqu'il contient de grandes fractions. Définir une macro comme \\newcommand{\\E}{\\mathbb{E}} garantit une notation uniforme.",
  },
  "kl-divergence": {
    name: "Divergence de Kullback-Leibler",
    meaning: "Divergence de Kullback-Leibler de Q par rapport à P : la perte logarithmique supplémentaire attendue lorsqu'on utilise Q à la place de la vraie distribution P.",
    usage: "La divergence KL s'écrit D_{\\text{KL}}(P \\| Q) = \\sum_x P(x) \\log \\frac{P(x)}{Q(x)} ; elle est centrale en inférence variationnelle, dans l'ELBO et pour la régularisation des politiques en apprentissage par renforcement. Elle n'est pas symétrique : l'ordre de P et Q compte, et la double barre les sépare. \\| est un symbole ordinaire sans espace autour, ce qui peut paraître serré ; beaucoup d'auteurs écrivent \\parallel, qui reçoit l'espacement d'une relation, ou ajoutent \\, de part et d'autre. \\text{KL} en indice hérite de la police du texte environnant, donc \\mathrm{KL} est plus sûr dans un énoncé de théorème en italique. Pour de grandes fractions à l'intérieur, utilisez \\left( \\right).",
  },
  "kl-divergence-short-form": {
    name: "Divergence KL (forme abrégée)",
    meaning: "Notation abrégée de la divergence de Kullback-Leibler entre les distributions P et Q, sans le préfixe D.",
    usage: "De nombreux articles d'apprentissage automatique omettent le D et écrivent \\text{KL}(P \\| Q), notamment dans des fonctions de perte comme l'objectif du VAE, avec un terme \\text{KL}(q_\\phi(z|x) \\| p(z)). Le sens est exactement celui de D_{\\text{KL}}(P \\| Q), asymétrie comprise : la KL directe tend à couvrir toute la masse, la KL inverse à se concentrer sur un mode. Comme \\text{} reprend la police du texte environnant, KL peut sortir en italique dans un théorème ; \\operatorname{KL} ou \\mathrm{KL} corrige cela, et \\operatorname ajoute en plus l'espace adéquat avant la parenthèse. Envisagez \\,\\|\\, ou \\parallel pour aérer les barres.",
  },
  argmax: {
    name: "Argmax",
    meaning: "L'argument du maximum : la valeur d'entrée pour laquelle une fonction atteint sa plus grande valeur.",
    usage: "Écrit \\arg\\max, il combine deux opérateurs prédéfinis : \\arg, qui ne prend jamais de limites, et \\max, qui en prend. Résultat : en style display, un indice se place sous max seulement, et la contrainte est décentrée. Une approche plus propre consiste à utiliser \\operatorname*{arg\\,max}, ou à définir \\DeclareMathOperator*{\\argmax}{arg\\,max} dans le préambule, ce qui centre l'indice sous le mot entier. On le rencontre dans les règles de classification comme \\hat{y} = \\arg\\max_k p(k|x), dans l'estimation du maximum de vraisemblance et dans les politiques gloutonnes en apprentissage par renforcement. Notez qu'il renvoie un ensemble lorsque le maximiseur n'est pas unique.",
  },
  argmin: {
    name: "Argmin",
    meaning: "L'argument du minimum : l'entrée pour laquelle une fonction atteint sa plus petite valeur.",
    usage: "\\arg\\min est la façon dont la plupart des problèmes d'optimisation et d'apprentissage définissent une solution, par exemple les moindres carrés \\hat{\\beta} = \\arg\\min_\\beta \\|y - X\\beta\\|_2^2 ou l'affectation aux clusters dans k-means. Saisi ainsi, c'est \\arg suivi de \\min : en mode display, l'indice se centre sous min plutôt que sous l'expression entière. Pour un indice centré, utilisez \\operatorname*{arg\\,min} ou déclarez un opérateur étoilé dans le préambule. Certains auteurs écrivent argmin d'un seul tenant, sans espace ; l'espace fine de arg\\,min suit le style le plus répandu. Rappelez-vous que le résultat peut être un ensemble si les minimiseurs ne sont pas uniques.",
  },
  "argmax-subscript": {
    name: "Argmax avec indice",
    meaning: "Argmax avec la variable d'optimisation thêta en indice : la valeur du paramètre qui maximise un objectif.",
    usage: "Cette forme nomme la variable optimisée ; c'est la manière standard d'écrire le maximum de vraisemblance, \\hat{\\theta}_{\\text{MLE}} = \\arg\\max_\\theta \\sum_i \\log p(x_i|\\theta), ainsi que l'estimation MAP. Comme l'indice ne s'attache qu'à \\max, en mode display thêta se place sous max et non au centre de « arg max ». Le remplacer par \\operatorname*{arg\\,max}_{\\theta} ou par un \\argmax déclaré donne un placement centré, ce qu'attendent la plupart des revues. En mode en ligne, l'indice apparaît à droite dans les deux cas. Vous pouvez aussi indiquer des contraintes dans l'indice, comme \\theta \\in \\Theta, en utilisant \\substack pour plusieurs lignes.",
  },
  "argmin-subscript": {
    name: "Argmin avec indice",
    meaning: "Argmin sur thêta : la valeur du paramètre qui minimise une perte ou une fonction objectif.",
    usage: "C'est ainsi qu'on écrit habituellement la minimisation du risque empirique : \\theta^* = \\arg\\min_\\theta \\frac{1}{N}\\sum_i \\ell(f_\\theta(x_i), y_i). En style display, l'indice se place sous min uniquement, ce qui paraît légèrement décentré ; \\operatorname*{arg\\,min}_{\\theta} corrige cela et garde un espacement cohérent. Si vous l'écrivez souvent, une macro de préambule évite de la ressaisir et garantit un rendu identique. Les objectifs régularisés ajoutent souvent un terme de pénalité, comme en régression ridge ou lasso. Lorsque le minimiseur est unique, le signe égal convient ; sinon, \\in est la relation plus précise, car argmin renvoie un ensemble.",
  },
  softmax: {
    name: "Fonction softmax",
    meaning: "Nom de la fonction softmax : transforme un vecteur de logits en distribution de probabilité par exponentiation puis normalisation.",
    usage: "La softmax se définit composante par composante comme \\text{softmax}(z)_i = e^{z_i} / \\sum_j e^{z_j} ; elle termine presque tous les classifieurs ainsi que le mécanisme d'attention, où l'on calcule \\text{softmax}(QK^\\top/\\sqrt{d_k})V. Comme \\text{} utilise la police du texte environnant, elle passe en italique dans les environnements de théorème ou d'emphase. \\operatorname{softmax} est généralement le meilleur choix : toujours droit, il ajoute l'espacement d'opérateur avant la parenthèse, exactement comme \\sin. Un paramètre de température s'écrit \\text{softmax}(z/T). Utilisez \\left( \\right) lorsque l'argument contient une fraction. Dans les articles très orientés code, précisez selon quel axe la softmax normalise, par exemple la dimension des classes.",
  },
  relu: {
    name: "ReLU",
    meaning: "Nom de la fonction d'activation unité linéaire rectifiée (ReLU), qui renvoie max(0, x) et annule les entrées négatives.",
    usage: "La ReLU est définie par \\text{ReLU}(x) = \\max(0, x), de dérivée 1 pour les entrées positives et 0 pour les négatives. C'est l'activation par défaut des couches cachées dans les réseaux modernes ; parmi ses variantes figurent la Leaky ReLU, \\max(\\alpha x, x), et la GELU. Écrire \\text{ReLU} fonctionne, mais suit le style du texte environnant et penche donc dans un environnement en italique ; \\operatorname{ReLU} ou \\mathrm{ReLU} reste droit, et \\operatorname gère aussi l'espacement avant l'argument. Appliquée à un vecteur, précisez qu'elle agit composante par composante, comme dans \\text{ReLU}(\\mathbf{W}\\mathbf{x} + \\mathbf{b}).",
  },
  "gradient-of-l": {
    name: "Gradient de la perte L",
    meaning: "Gradient de la perte L par rapport aux paramètres thêta : le vecteur des dérivées partielles utilisé pendant l'entraînement.",
    usage: "C'est la quantité que calcule la rétropropagation, et elle pilote la mise à jour de la descente de gradient \\theta \\leftarrow \\theta - \\eta \\nabla_\\theta \\mathcal{L}. L'indice de \\nabla indique par rapport à quelles variables vous dérivez, ce qui importe lorsque la perte dépend à la fois des paramètres et des entrées, par exemple \\nabla_x \\mathcal{L} dans les attaques adverses. \\mathcal donne le L calligraphique et ne prend en charge que les majuscules. Dans le texte courant, l'indice se place en bas à droite du nabla, ce qui est l'usage. Pour les estimations stochastiques, un chapeau aide : \\hat{\\nabla}_\\theta \\mathcal{L} ou \\tilde{g}.",
  },
  "partial-derivative": {
    name: "Dérivée partielle",
    meaning: "Dérivée partielle de la perte L par rapport à un paramètre thêta : la sensibilité de la perte à chaque paramètre.",
    usage: "Cette fraction est la brique scalaire de la rétropropagation ; la règle de dérivation en chaîne devient \\frac{\\partial \\mathcal{L}}{\\partial w} = \\frac{\\partial \\mathcal{L}}{\\partial a} \\frac{\\partial a}{\\partial w}. Utilisez \\partial, le d rond, pour les dérivées partielles et un d droit pour les dérivées totales. Dans le texte courant, \\frac se réduit pour tenir dans la ligne, ce qui est souvent peu lisible ; \\tfrac, la forme avec barre oblique \\partial \\mathcal{L}/\\partial \\theta, ou un \\dfrac en display peuvent mieux convenir. Pour un usage répété, une macro ou la commande \\pdv du paquet physics abrège la saisie. Lorsque thêta est un vecteur, beaucoup d'auteurs passent plutôt à \\nabla_\\theta \\mathcal{L}.",
  },
  "theta-star": {
    name: "Thêta étoile",
    meaning: "Thêta surmonté d'une étoile en exposant : la valeur optimale du paramètre, typiquement le minimiseur d'une perte.",
    usage: "Un symbole étoilé désigne l'optimum, comme dans \\theta^* = \\arg\\min_\\theta \\mathcal{L}(\\theta), et les résultats de convergence majorent \\|\\theta_t - \\theta^*\\|. Saisir ^* place un astérisque en taille d'exposant. Les alternatives sont ^\\ast, identique, et ^\\star, qui donne une étoile à cinq branches que certains auteurs préfèrent, car l'astérisque peut être confondu avec un conjugué ou un adjoint. Distinguez-le de \\hat{\\theta}, qui désigne par convention une estimation tirée des données plutôt que le véritable optimum. Si thêta porte aussi un indice, l'ordre importe peu : \\theta^*_t et \\theta_t^* donnent le même rendu.",
  },
  "weight-matrix": {
    name: "Matrice de poids",
    meaning: "W droit en gras, la notation conventionnelle d'une matrice de poids dans une couche de réseau de neurones.",
    usage: "Les majuscules grasses désignent des matrices et les minuscules grasses des vecteurs ; une couche dense s'écrit donc \\mathbf{y} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}, avec des poids propres à chaque couche notés \\mathbf{W}^{(l)} ou \\mathbf{W}_l. \\mathbf produit des lettres latines grasses droites ; il ne met pas en gras les lettres grecques ni la plupart des symboles, utilisez donc \\boldsymbol ou \\bm pour \\boldsymbol{\\Sigma} ou un \\theta gras. Beaucoup d'articles d'apprentissage profond abandonnent complètement le gras et écrivent W ; choisissez une convention et gardez-la partout. La transposée s'écrit généralement \\mathbf{W}^\\top, plus lisible que ^T.",
  },
  "bias-vector": {
    name: "Vecteur de biais",
    meaning: "b minuscule en gras, la notation habituelle d'un vecteur de biais ajouté après une transformation linéaire.",
    usage: "Le biais décale la pré-activation de chaque neurone, comme dans \\mathbf{z} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}, et ses versions par couche s'écrivent \\mathbf{b}^{(l)}. Par convention, une minuscule grasse signale un vecteur colonne. \\mathbf donne du gras droit ; si vous voulez des vecteurs en gras italique, comme certaines revues de physique, utilisez plutôt \\boldsymbol{b} ou \\bm{b}. Soyez cohérent dans l'indexation : la i-ème composante du biais est b_i en italique simple, non en gras, puisque c'est un scalaire. Dans les modèles linéaires, l'ordonnée à l'origine s'écrit souvent b ou w_0 plutôt qu'un vecteur gras.",
  },
  "cross-entropy": {
    name: "Entropie croisée",
    meaning: "Entropie croisée entre une distribution réelle p et un modèle q : la longueur de code moyenne lorsqu'on code p à l'aide de q.",
    usage: "L'entropie croisée vaut H(p, q) = -\\sum_x p(x) \\log q(x), et c'est la fonction de perte de la classification : avec des étiquettes one-hot, elle se réduit à -\\log q(y). Elle se décompose en H(p, q) = H(p) + D_{\\text{KL}}(p \\| q), ce qui explique pourquoi la minimiser en q minimise aussi la divergence KL. Attention au conflit de notation : avec des variables aléatoires, H(X, Y) désigne généralement l'entropie conjointe, si bien que certains auteurs écrivent H_\\times(p, q) ou \\mathrm{CE}(p, q) pour plus de clarté. La virgule reçoit l'espacement normal d'une ponctuation : aucun ajustement manuel n'est nécessaire.",
  },
  entropy: {
    name: "Entropie",
    meaning: "Entropie de Shannon d'une variable aléatoire X : l'incertitude moyenne, ou quantité d'information, de ses issues.",
    usage: "L'entropie vaut H(X) = -\\sum_x p(x) \\log p(x), mesurée en bits avec \\log_2 et en nats avec \\ln. Elle est maximale pour la distribution uniforme, où H(X) = \\log |\\mathcal{X}|, et elle intervient dans la construction des arbres de décision via le gain d'information ainsi qu'en apprentissage par renforcement à entropie maximale. Les grandeurs apparentées partagent la lettre : entropie conditionnelle H(Y|X), entropie conjointe H(X, Y) et entropie différentielle h(X) pour les variables continues, généralement en minuscule. Certains articles écrivent \\mathbb{H}[X] pour éviter la confusion avec une hessienne H ou une classe d'hypothèses.",
  },
  "mutual-information": {
    name: "Information mutuelle",
    meaning: "Information mutuelle entre X et Y : de combien la connaissance d'une variable aléatoire réduit l'incertitude sur l'autre.",
    usage: "L'information mutuelle vaut I(X; Y) = H(X) - H(X \\mid Y) = D_{\\text{KL}}(p(x,y) \\| p(x)p(y)), et elle est nulle exactement lorsque X et Y sont indépendantes. Le point-virgule est conventionnel et sépare les deux arguments, qui peuvent eux-mêmes être des listes, comme dans I(X_1, X_2; Y) ; une virgule serait ambiguë. TeX traite ; comme une ponctuation et ajoute automatiquement une espace fine après. L'information mutuelle conditionnelle s'écrit I(X; Y \\mid Z). Elle sous-tend le goulot d'étranglement de l'information (information bottleneck), les pertes contrastives InfoNCE et la sélection de variables.",
  },
  "log-likelihood": {
    name: "Log-vraisemblance",
    meaning: "Log-vraisemblance des données x sous les paramètres thêta, la quantité maximisée dans l'estimation du maximum de vraisemblance.",
    usage: "Passer au logarithme transforme les produits de vraisemblances indépendantes en sommes, \\log \\prod_i p(x_i|\\theta) = \\sum_i \\log p(x_i|\\theta), plus faciles à dériver et numériquement stables. Son opposé est la perte NLL (log-vraisemblance négative) bien connue. Conseil typographique : un | seul est un symbole ordinaire et ne reçoit aucune espace de part et d'autre ; \\mid est une relation et ajoute un espacement équilibré, ce qui donne p(x \\mid \\theta). Certains auteurs utilisent un point-virgule, p(x; \\theta), pour signaler que thêta est un paramètre fixé plutôt qu'une variable aléatoire sur laquelle on conditionne, ce qui correspond à la lecture fréquentiste.",
  },
  "probability-distribution": {
    name: "Distribution de probabilité",
    meaning: "Probabilité (densité ou masse) de x sous une distribution p, la notation de base d'une distribution en apprentissage automatique.",
    usage: "Le p minuscule de p(x) désigne une densité ou une fonction de masse, tandis que le P majuscule de P(X = x) ou \\Pr est souvent réservé aux probabilités d'événements. L'apprentissage automatique surcharge librement p et laisse l'argument indiquer de quelle distribution il s'agit, comme p(x) face à p(z) ; quand cela devient confus, ajoutez des indices comme p_\\theta(x) ou p_{\\text{données}}(x). La normalisation exige \\sum_x p(x) = 1 ou \\int p(x)\\,dx = 1, avec une espace fine \\, avant dx. L'échantillonnage s'écrit x \\sim p(x), à l'aide de \\sim.",
  },
  "conditional-probability": {
    name: "Probabilité conditionnelle",
    meaning: "Probabilité conditionnelle de y sachant x, comme la distribution des étiquettes prédite par un classifieur pour une entrée.",
    usage: "Les modèles discriminants apprennent directement p(y | x), tandis que les modèles génératifs apprennent p(x | y) et p(y) puis appliquent la formule de Bayes, p(y|x) = p(x|y)p(y)/p(x). La barre verticale saisie comme | est un caractère ordinaire et ne reçoit aucune espace autour ; \\mid est une relation et donne p(y \\mid x), plus lisible et recommandé par la plupart des guides de style. Pour une expression conditionnante haute, \\middle| placé entre \\left( et \\right) ajuste la barre à la taille des parenthèses. Des indices comme p_\\theta(y \\mid x) indiquent les paramètres du modèle.",
  },
  "sum-over-classes": {
    name: "Somme sur les classes",
    meaning: "Somme sur les classes c de 1 à C, utilisée dans les pertes multiclasses et la normalisation des probabilités.",
    usage: "Les sommes sur les classes apparaissent dans l'entropie croisée catégorielle, -\\sum_{c=1}^{C} y_c \\log \\hat{y}_c, et dans le dénominateur de la softmax. En mode display, les bornes se placent au-dessus et au-dessous du grand sigma ; en ligne, elles se mettent à droite en plus petit, ce qui économise de la hauteur de ligne. Forcez le placement display en ligne avec \\sum\\limits, ou l'inverse avec \\nolimits. Utiliser C pour le nombre de classes et c pour l'indice est une convention courante ; évitez simplement de réutiliser C pour un coût ou une constante dans la même équation. Le symbole \\Sigma est une lettre grecque et ne doit pas remplacer \\sum.",
  },
  "product-over-samples": {
    name: "Produit sur les échantillons",
    meaning: "Produit sur les échantillons i de 1 à N, typiquement la vraisemblance d'un jeu de données i.i.d.",
    usage: "Pour des échantillons indépendants, la vraisemblance se factorise en \\prod_{i=1}^{N} p(x_i \\mid \\theta), et le passage au logarithme la transforme en somme. \\prod est le grand opérateur pi majuscule, dimensionné pour le mode display ; ne le remplacez pas par \\Pi, la lettre grecque, qui reste petite et n'a pas de bornes. Le mode display place les bornes au-dessus et au-dessous, tandis que le texte en ligne les met sur le côté ; \\prod\\limits outrepasse ce comportement. Pour un coproduit, \\coprod est le symbole renversé correspondant. En pratique, les longs produits sont numériquement instables, autre raison pour laquelle les articles passent souvent à la forme logarithmique.",
  },
  "l1-norm": {
    name: "Norme L1",
    meaning: "Norme L1 de thêta : la somme des valeurs absolues de ses composantes.",
    usage: "La norme L1, \\|\\theta\\|_1 = \\sum_i |\\theta_i|, est la pénalité du lasso et favorise les solutions parcimonieuses, car sa boule unité a des coins sur les axes. \\| donne la double barre mais la traite comme un symbole ordinaire, si bien que l'espacement peut être faux lorsqu'un signe moins suit ; \\lVert \\theta \\rVert_1 les marque comme délimiteurs gauche et droit et les espace correctement. Pour des arguments hauts, utilisez \\left\\| ... \\right\\| pour ajuster la taille. Beaucoup d'articles définissent une macro \\norm via \\DeclarePairedDelimiter de mathtools, par souci de cohérence. Ne la confondez pas avec |\\theta|, qui désigne une valeur absolue ou un cardinal.",
  },
  "l2-norm": {
    name: "Norme L2",
    meaning: "Norme euclidienne (L2) de thêta : la racine carrée de la somme des carrés de ses composantes.",
    usage: "La norme L2 \\|\\theta\\|_2 = \\sqrt{\\sum_i \\theta_i^2} mesure une longueur, et son carré apparaît comme pénalité ridge ou de décroissance des poids (weight decay) \\lambda\\|\\theta\\|_2^2. Notez l'ordre des scripts : \\|\\theta\\|_2^2 est la norme au carré, et TeX superpose proprement l'indice et l'exposant. Beaucoup d'auteurs omettent l'indice 2 quand le contexte est clair. Pour un meilleur espacement des délimiteurs, utilisez \\lVert et \\rVert au lieu de \\|, et \\left\\| \\right\\| pour des contenus hauts comme des fractions. Pour les matrices, \\|A\\|_2 désigne généralement la norme spectrale et non la norme composante par composante, qui est la norme de Frobenius.",
  },
  "frobenius-norm": {
    name: "Norme de Frobenius",
    meaning: "Norme de Frobenius de la matrice W : la racine carrée de la somme des carrés de tous ses coefficients.",
    usage: "La norme de Frobenius vaut \\|\\mathbf{W}\\|_F = \\sqrt{\\sum_{i,j} w_{ij}^2} = \\sqrt{\\operatorname{tr}(\\mathbf{W}^\\top \\mathbf{W})}, l'analogue matriciel de la norme L2 des vecteurs. On l'utilise pour la décroissance des poids sur des matrices, l'erreur d'approximation de rang faible et les objectifs de factorisation matricielle. Elle diffère de la norme spectrale \\|\\mathbf{W}\\|_2, qui est la plus grande valeur singulière. L'indice F est une simple lettre italique ; certains écrivent \\mathrm{F}. Comme pour les normes vectorielles, \\lVert et \\rVert donnent un meilleur espacement que \\|, surtout lorsque la norme est élevée au carré ou précédée d'un coefficient.",
  },
};

export default text;
