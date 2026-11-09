import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/math/<slug>. */
const text: SymbolPageTranslations = {
  "addition": {
    name: "Addition",
    meaning: "Additionne deux quantités ; c’est le signe plus binaire, également employé comme signe unaire devant un nombre positif.",
    usage: "Taper + en mode mathématique donne un opérateur binaire : TeX place automatiquement une espace moyenne de chaque côté, comme dans a + b. Lorsque le plus commence une expression ou suit un autre opérateur ou une relation, comme dans -(+3) ou x = +1, TeX le traite comme unaire et supprime l’espace. Dans une équation multline ou split coupée avant un plus, écrivez {}+ au début de la ligne de continuation pour rétablir l’espacement binaire. Pour un plus en exposant, comme dans l’ion Na^+ ou l’ensemble \\mathbb{R}^+, aucune accolade n’est nécessaire. Évitez \\oplus, sauf si vous voulez dire une somme directe ou un XOR, qui est un symbole différent.",
  },
  "subtraction": {
    name: "Soustraction",
    meaning: "Soustrait une quantité d’une autre ; en mode mathématique, la touche du trait d’union devient un vrai signe moins et non un trait d’union.",
    usage: "En mode mathématique, le caractère trait d’union est converti en un véritable signe moins, plus long qu’un trait d’union de texte et doté de l’espacement d’opérateur binaire dans a - b. Hors du mode mathématique, vous n’obtenez qu’un trait d’union court : un nombre négatif dans le texte courant doit donc quand même s’écrire $-5$ plutôt qu’être tapé tel quel. Lorsque le moins est unaire, comme dans -x ou e^{-t}, TeX supprime automatiquement l’espace qui l’entoure. Ne le confondez pas avec \\setminus, qui note la différence ensembliste A \\setminus B, ni avec le tiret demi-cadratin employé pour les intervalles. Pour un moins en exposant, comme dans x^{-1} ou Cl^-, les accolades ne sont nécessaires que si plus d’un caractère suit.",
  },
  "multiplication": {
    name: "Multiplication",
    meaning: "Produit la croix ×, employée pour la multiplication, le produit vectoriel et le produit cartésien.",
    usage: "En arithmétique, \\times permet d’écrire 3 \\times 4 ou la notation scientifique, comme 6.02 \\times 10^{23}. En algèbre linéaire et en physique, c’est le produit vectoriel \\mathbf{a} \\times \\mathbf{b}, et il sert aussi aux dimensions des matrices, par exemple une matrice m \\times n. La théorie des ensembles l’utilise pour le produit cartésien A \\times B. Comparez avec \\cdot, le choix habituel pour le produit scalaire et la multiplication entre variables, et avec l’astérisque *, qui désigne normalement la convolution. Le grand opérateur \\bigtimes n’existe pas en LaTeX standard ; pour un produit cartésien indexé, beaucoup d’auteurs écrivent donc \\prod à la place.",
  },
  "division": {
    name: "Division",
    meaning: "Donne l’obélus ÷, le signe de division de l’école primaire, formé d’un trait avec un point au-dessus et un point en dessous.",
    usage: "L’obélus apparaît dans les fiches d’exercices d’arithmétique, les expressions façon calculatrice et certains tableaux, comme dans 12 \\div 4 = 3. Les mathématiques de recherche ne l’utilisent presque jamais : écrivez plutôt une fraction avec \\frac{12}{4}, une barre oblique en ligne 12/4, ou un deux-points pour les rapports. Dans certains pays, l’obélus est complètement évité, et la norme ISO 80000-2 le déconseille. Comme \\div est un opérateur binaire, TeX l’espace comme + et -. Ne le confondez pas avec \\mid ni avec la barre oblique /, qui signifient respectivement « divise » et « quotient » en théorie des nombres et en théorie des groupes, par exemple G/N.",
  },
  "fraction": {
    name: "Fraction",
    meaning: "Compose une fraction étagée, avec le numérateur a au-dessus du dénominateur b, séparés par une barre horizontale.",
    usage: "\\frac prend deux arguments, le numérateur et le dénominateur ; \\frac{a}{b} n’est donc qu’un modèle pour n’importe quel rapport, comme \\frac{dy}{dx} ou \\frac{n(n+1)}{2}. En mathématiques en ligne, la fraction est réduite à la taille du texte, ce qui peut être étriqué ; \\dfrac impose la taille hors texte et \\tfrac la taille du texte. Pour un rapport simple dans le texte, une barre oblique, a/b, se lit souvent mieux qu’une fraction étagée. Les coefficients binomiaux s’écrivent avec \\binom{n}{k}, et non avec \\frac sans barre. Les fractions continues sont plus nettes avec \\cfrac, qui garde chaque niveau en pleine taille. Lorsqu’une fraction se trouve entre parenthèses, utilisez \\left( et \\right) pour que les parenthèses s’agrandissent à sa hauteur.",
  },
  "square-root": {
    name: "Racine carrée",
    meaning: "Trace un radical au-dessus de son argument, ce qui donne la racine carrée principale de x.",
    usage: "\\sqrt étire automatiquement le radical pour couvrir tout ce que vous placez entre accolades : \\sqrt{x^2 + y^2} reçoit une barre plus longue et un signe plus haut. C’est la manière standard d’écrire la norme euclidienne, la formule du second degré et l’écart type sous la forme \\sqrt{\\operatorname{Var}(X)}. Des radicaux portant sur des arguments de hauteurs différentes peuvent paraître irréguliers ; ajouter \\vphantom{y} ou \\mathstrut à l’intérieur aligne les racines voisines. Pour un indice, comme une racine cubique, utilisez l’argument optionnel \\sqrt[3]{x}. Dans le texte, x^{1/2} est parfois plus clair qu’un radical au-dessus d’une haute fraction.",
  },
  "n-th-root": {
    name: "Racine n-ième",
    meaning: "Écrit la racine n-ième de x, l’indice n étant placé dans le creux du radical.",
    usage: "L’indice se place entre crochets avant le radicande : \\sqrt[3]{8} = 2 est une racine cubique et \\sqrt[n]{x} désigne x^{1/n}. On la rencontre dans le critère de Cauchy pour les séries, \\limsup \\sqrt[n]{|a_n|}, et dans les moyennes géométriques \\sqrt[n]{x_1 x_2 \\cdots x_n}. TeX place parfois l’indice maladroitement, surtout pour les indices hauts ; \\leftroot{} et \\uproot{} permettent de le déplacer, comme dans \\sqrt[\\leftroot{-2}\\uproot{2}n]{x}. Gardez un indice court : pour des exposants compliqués, écrire la puissance x^{1/(k+1)} est plus lisible qu’un radical.",
  },
  "summation": {
    name: "Somme",
    meaning: "Additionne une suite de termes lorsque l’indice i varie de 1 à n, à l’aide du grand opérateur sigma majuscule.",
    usage: "\\sum est un grand opérateur : en mathématiques hors texte, les bornes i=1 et n se placent sous et au-dessus du sigma, tandis qu’en mathématiques en ligne elles passent sur le côté, en indice et en exposant. Ajoutez \\limits pour forcer les bornes empilées en ligne, ou \\nolimits pour des bornes latérales hors texte, sachant que des bornes empilées en ligne peuvent perturber l’interligne. Pour des conditions sur plusieurs lignes sous le sigma, utilisez \\substack{0 \\le i \\le m \\\\ 0 < j < n}. N’utilisez pas la lettre grecque \\Sigma pour une somme : c’est un symbole ordinaire plus petit, sans l’espacement d’opérateur. Les usages typiques sont les séries, les espérances et \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}.",
  },
  "product": {
    name: "Produit",
    meaning: "Multiplie une suite de facteurs pour i allant de 1 à n, à l’aide du grand opérateur pi majuscule.",
    usage: "\\prod se comporte comme \\sum : les bornes s’empilent au-dessus et en dessous en style hors texte et se placent sur le côté dans le texte. Il permet d’écrire les factorielles n! = \\prod_{i=1}^{n} i, les vraisemblances L(\\theta) = \\prod_{i} p(x_i \\mid \\theta) et les produits eulériens sur les nombres premiers. Ne le remplacez pas par la lettre grecque \\Pi, qui est un symbole ordinaire de taille fixe. La version renversée \\coprod note les coproduits en théorie des catégories. Lorsque le produit est une vraisemblance dont on va prendre le logarithme, il est courant de montrer explicitement le passage à une somme, puisque \\log transforme \\prod en \\sum.",
  },
  "integral": {
    name: "Intégrale",
    meaning: "Écrit un signe d’intégrale définie, avec la borne inférieure a et la borne supérieure b.",
    usage: "Contrairement à \\sum, les bornes de \\int se placent par défaut sur le côté, même en mathématiques hors texte ; ajoutez \\limits, comme dans \\int\\limits_a^b, si votre style les exige empilées. Placez une espace fine \\, avant la différentielle, comme dans \\int_a^b f(x)\\,dx ; certains auteurs utilisent un d droit via \\mathrm{d}x. Les intégrales multiples ont leurs propres commandes, \\iint et \\iiint, qui espacent mieux les signes que la répétition de \\int. Les intégrales curvilignes sur un contour utilisent \\oint. Pour la barre d’évaluation après intégration, écrivez \\Big|_a^b ou \\left. F(x) \\right|_a^b.",
  },
  "limit": {
    name: "Limite",
    meaning: "Écrit l’opérateur de limite, avec x tendant vers l’infini placé sous « lim ».",
    usage: "\\lim est un nom d’opérateur prédéfini : il s’imprime en romain droit et, en mathématiques hors texte, place l’indice x \\to \\infty juste en dessous. En ligne, l’indice passe sur le côté pour préserver l’interligne. La flèche à l’intérieur est \\to, un alias court de \\rightarrow. Les limites à droite ou à gauche s’écrivent x \\to 0^+ ou x \\downarrow 0. Les opérateurs voisins \\limsup et \\liminf fonctionnent de la même manière. Si vous avez besoin d’un mot personnalisé de type limite avec indices empilés, définissez-le avec \\DeclareMathOperator* (l’étoile active les bornes) plutôt que d’écrire \\text{lim}.",
  },
  "infinity": {
    name: "Infini",
    meaning: "Trace la lemniscate ∞, qui représente une quantité non bornée ou une limite qui croît sans borne.",
    usage: "On rencontre \\infty dans des limites comme x \\to \\infty, des intégrales impropres \\int_0^\\infty e^{-x}\\,dx et des bornes de séries \\sum_{n=1}^{\\infty}. Il désigne aussi la norme sup \\|f\\|_\\infty, l’espace L^\\infty et les fonctions lisses C^\\infty. Écrivez -\\infty et +\\infty avec le signe accolé ; TeX espace correctement le signe comme unaire. Rappelez-vous que \\infty n’est pas un nombre réel : un intervalle qui le contient doit donc être ouvert de ce côté, comme dans [0, \\infty). Pour la droite réelle achevée, \\overline{\\mathbb{R}} est une notation courante.",
  },
  "approximately-equal": {
    name: "Approximativement égal",
    meaning: "Indique que deux valeurs sont approximativement égales, comme une estimation numérique ou une constante arrondie.",
    usage: "Utilisez \\approx pour les approximations numériques comme \\pi \\approx 3.14159 et pour les développements au premier ordre, tels que \\sin x \\approx x pour x petit. C’est une relation : TeX lui donne donc un espacement épais, comme à =. Plusieurs symboles semblables ont d’autres sens : \\simeq signifie souvent asymptotiquement égal ou isomorphe, \\sim signifie équivalent asymptotiquement ou « suit la loi », \\cong désigne la congruence ou l’isomorphisme, et \\approxeq est une variante plus rare. Dans les textes de finance et d’ingénierie, \\approx marque généralement des résultats arrondis ; indiquez la précision, par exemple à trois décimales, pour que le lecteur sache à quel point l’estimation est approximative.",
  },
  "not-equal": {
    name: "Signe différent",
    meaning: "Indique que deux quantités ne sont pas égales ; c’est la négation du signe égal.",
    usage: "\\neq et son alias court \\ne produisent le même signe égal barré, et l’un ou l’autre convient. On le trouve dans des conditions comme x \\neq 0, dans des affirmations de distinction i \\neq j et, dans les articles orientés programmation, comme test d’inégalité. Écrire \\not= fonctionne aussi, mais la position de la barre peut différer légèrement du glyphe dédié. En informatique, évitez de taper != en mode mathématique : cela s’imprime comme un point d’exclamation suivi d’un signe égal. Pour « non équivalent » ou « non congru », utilisez \\not\\equiv ou \\ncong plutôt que \\neq.",
  },
  "less-than-or-equal": {
    name: "Inférieur ou égal",
    meaning: "Exprime que le membre de gauche est inférieur ou égal au membre de droite.",
    usage: "\\leq a un alias plus court, \\le, et tous deux impriment le même glyphe avec une seule barre horizontale. Taper <= en mode mathématique donne deux symboles séparés : utilisez donc toujours la commande. Les inégalités comme l’inégalité triangulaire \\|x+y\\| \\leq \\|x\\|+\\|y\\| et les encadrements comme 0 \\leq p \\leq 1 constituent son usage quotidien. La variante inclinée \\leqslant est préférée dans certaines traditions européennes et russes, et \\leqq possède une double barre. En théorie des ordres et des treillis, \\leq désigne un ordre partiel, tandis que \\preceq sert pour des préordres plus généraux.",
  },
  "greater-than-or-equal": {
    name: "Supérieur ou égal",
    meaning: "Exprime que le membre de gauche est supérieur ou égal au membre de droite.",
    usage: "\\geq et son alias \\ge sont interchangeables. Taper >= en mode mathématique imprime deux caractères séparés : utilisez donc la commande. Les contextes courants sont les minorations comme n \\geq 1, l’inégalité arithmético-géométrique et les contraintes d’optimisation comme x_i \\geq 0. La forme inclinée \\geqslant est privilégiée par certaines revues, et \\geqq possède une double barre. En théorie des ordres, la relation inversée \\succeq généralise \\geq. Gardez autant que possible une chaîne d’inégalités orientée dans un seul sens, car a \\leq b \\leq c se lit plus facilement qu’un mélange de \\leq et de \\geq.",
  },
  "implies": {
    name: "Implication",
    meaning: "Écrit une longue double flèche pour l’implication logique : l’énoncé de gauche implique celui de droite.",
    usage: "\\implies produit \\Longrightarrow entouré d’espaces épaisses supplémentaires, ce qui convient aux implications entre énoncés complets, comme dans x > 2 \\implies x^2 > 4. Pour une implication entre formules à l’intérieur d’une expression logique, beaucoup de logiciens préfèrent la flèche plus courte \\Rightarrow ou \\to, sans le large écart. Sa réciproque est \\impliedby. Dans les démonstrations, évitez d’enchaîner plusieurs \\implies d’affilée sur toute une page ; des phrases complètes avec « donc » se lisent souvent mieux. En notation de logique propositionnelle, p \\to q est plus courant que p \\implies q.",
    example: "x^2 = 4 \\implies x = 2 \\text{ ou } x = -2",
  },
  "if-and-only-if": {
    name: "Si et seulement si",
    meaning: "Écrit une longue double flèche à deux pointes pour l’équivalence logique, qui se lit « si et seulement si ».",
    usage: "\\iff produit \\Longleftrightarrow avec des espaces épaisses supplémentaires des deux côtés. Il relie deux énoncés qui s’impliquent mutuellement, comme dans un théorème du type n \\text{ pair} \\iff n^2 \\text{ pair}. Les textes de logique préfèrent souvent \\leftrightarrow ou \\Leftrightarrow pour le biconditionnel à l’intérieur des formules, en réservant \\iff aux énoncés rédigés. À cause de ce remplissage, \\iff paraît trop lâche dans des indices compacts ou des conditions de définition d’ensembles en compréhension. Ne le confondez pas avec \\equiv, qui signifie identiquement égal ou congru modulo n.",
  },
  "for-all": {
    name: "Quantificateur universel",
    meaning: "Donne le quantificateur universel ∀, qui se lit « pour tout » ou « quel que soit ».",
    usage: "\\forall ouvre les énoncés quantifiés universellement, comme dans la définition epsilon-delta \\forall \\varepsilon > 0\\ \\exists \\delta > 0. TeX le traite comme un symbole ordinaire : il n’y a donc pas d’espace automatique après la variable liée ; ajoutez \\, ou \\ ou un séparateur comme un deux-points ou un point, selon votre convention. Dans les démonstrations très rédigées, beaucoup de guides de style préfèrent écrire « pour tout » en toutes lettres plutôt que \\forall. En lambda-calcul typé et en théorie des types, il introduit aussi des types polymorphes, par exemple \\forall \\alpha.\\, \\alpha \\to \\alpha.",
  },
  "exists": {
    name: "Quantificateur existentiel",
    meaning: "Donne le quantificateur existentiel ∃, qui se lit « il existe » ou « pour un certain ».",
    usage: "\\exists affirme qu’au moins un élément vérifie une propriété, comme dans \\exists x \\in \\mathbb{R} : x^2 = 2. L’unicité s’écrit \\exists! (il existe un et un seul), et \\nexists donne le symbole nié, pour « il n’existe pas ». Comme \\forall, c’est un symbole ordinaire : insérez une espace fine ou un deux-points après la variable liée pour la lisibilité. L’ordre des quantificateurs compte : \\forall x\\, \\exists y diffère de \\exists y\\, \\forall x, alors gardez-les dans l’ordre voulu. En logique formelle, des parenthèses autour de la portée, \\exists x\\,(P(x)), évitent toute ambiguïté.",
  },
  "element-of": {
    name: "Appartenance",
    meaning: "Exprime l’appartenance : l’élément de gauche appartient à l’ensemble de droite.",
    usage: "\\in est la relation d’appartenance de base, comme dans x \\in \\mathbb{R} ou n \\in \\mathbb{N}, et reçoit l’espacement d’une relation. Son symétrique \\ni se lit « contient comme élément », et \\notin en est la négation. Ne le confondez pas avec \\epsilon ou \\varepsilon, des lettres grecques d’apparence voisine mais d’espacement et de sens différents. Dans les sommes et la notation en compréhension, il lie l’indice, comme dans \\sum_{x \\in S} f(x) ou \\{x \\in X : f(x) > 0\\}. Pour l’inclusion entre deux ensembles, utilisez \\subseteq, et non \\in.",
  },
  "not-element-of": {
    name: "Non-appartenance",
    meaning: "Exprime la non-appartenance : l’élément de gauche n’appartient pas à l’ensemble donné.",
    usage: "\\notin est une version barrée dédiée de \\in, composée comme une relation, comme dans \\sqrt{2} \\notin \\mathbb{Q}. Écrire \\not\\in donne un résultat semblable, mais \\notin place mieux la barre et constitue le choix standard. Ses compagnons naturels sont \\in et \\ni ; pour nier une inclusion, on utiliserait \\not\\subset ou \\nsubseteq. Les phrases typiques sont les raisonnements par l’absurde et les descriptions de complémentaires, comme x \\in A^c \\iff x \\notin A. Dans les quantificateurs, \\forall x \\notin S est un raccourci acceptable, mais expliciter le domaine est plus clair.",
  },
  "subset": {
    name: "Inclusion",
    meaning: "Montre qu’un ensemble est contenu dans un autre ; souvent lu comme une inclusion stricte.",
    usage: "Les conventions varient : certains auteurs utilisent \\subset pour toute inclusion, d’autres le réservent aux sous-ensembles stricts et utilisent \\subseteq lorsque l’égalité est permise. Pour lever toute ambiguïté, de nombreux articles écrivent \\subseteq pour « inclus ou égal » et \\subsetneq pour « inclus strictement », et énoncent la convention une fois. La relation inverse est \\supset. Les énoncés typiques incluent \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} et les inclusions de sous-espaces en algèbre linéaire. La négation \\not\\subset fonctionne, et \\nsubseteq donne un glyphe nié plus propre pour « inclus ou égal ». Quelle que soit la lecture adoptée, évitez d’alterner entre les deux dans un même document.",
  },
  "union": {
    name: "Union",
    meaning: "Forme la réunion d’ensembles : tous les éléments qui appartiennent à au moins l’un d’entre eux.",
    usage: "\\cup est un opérateur binaire, comme dans A \\cup B, et reçoit une espace moyenne des deux côtés. Pour la réunion d’une famille indexée, utilisez le grand opérateur \\bigcup, qui empile les bornes en mode hors texte : \\bigcup_{i=1}^{\\infty} A_i. L’union disjointe s’écrit souvent \\sqcup ou \\dot\\cup. En probabilités, A \\cup B correspond à l’événement « A ou B », d’où P(A \\cup B) = P(A) + P(B) - P(A \\cap B). N’utilisez pas la lettre U ni le « ou » logique \\lor à la place de l’union ensembliste.",
  },
  "intersection": {
    name: "Intersection",
    meaning: "Forme l’intersection d’ensembles : les éléments communs à tous.",
    usage: "\\cap est un opérateur binaire écrit entre deux ensembles, comme dans A \\cap B, tandis que \\bigcap en est la version grand opérateur pour les familles, \\bigcap_{n} U_n. En probabilités, il représente les événements conjoints : P(A \\cap B) = P(A)P(B) définit ainsi l’indépendance. Son équivalent logique est \\land (et), et la borne inférieure \\wedge de la théorie des treillis lui ressemble mais est un glyphe différent. Les lois de De Morgan l’associent à l’union : (A \\cup B)^c = A^c \\cap B^c. Si A \\cap B = \\emptyset, les ensembles sont disjoints.",
  },
  "empty-set": {
    name: "Ensemble vide",
    meaning: "Désigne l’ensemble vide, l’unique ensemble qui ne contient aucun élément.",
    usage: "\\emptyset imprime le glyphe par défaut de l’ensemble vide, un cercle barré. Beaucoup de mathématiciens préfèrent la forme plus ronde \\varnothing, distincte d’un zéro barré et courante dans les textes modernes. Choisissez-en une et utilisez-la de façon cohérente. Les usages typiques sont la disjonction A \\cap B = \\emptyset et les résultats de définitions en compréhension. Ne le confondez pas avec la lettre scandinave Ø ni avec \\phi et \\varphi. Écrire \\{\\} pour l’ensemble vide est aussi acceptable, mais notez que \\{\\emptyset\\} est un ensemble à un élément.",
  },
  "partial-derivative": {
    name: "Dérivée partielle",
    meaning: "Écrit le d rond ∂ des dérivées partielles, qui note aussi le bord d’un ensemble en topologie.",
    usage: "\\partial apparaît dans les dérivées partielles comme \\frac{\\partial f}{\\partial x} et les dérivées croisées \\frac{\\partial^2 f}{\\partial x\\,\\partial y}. En topologie et en géométrie, \\partial A est le bord d’un ensemble ou d’une variété, utilisé dans le théorème de Stokes \\int_{\\partial M} \\omega = \\int_M d\\omega. Les formes courtes avec indice, \\partial_x f et \\partial_t u, sont courantes dans les articles sur les EDP. Ne le confondez pas avec \\delta (variation) ou d (dérivée totale). Placer une espace fine entre les facteurs \\partial du dénominateur améliore l’espacement.",
  },
  "nabla": {
    name: "Nabla",
    meaning: "Écrit le nabla ∇, l’opérateur différentiel vectoriel du gradient, de la divergence et du rotationnel.",
    usage: "\\nabla f est le gradient, \\nabla \\cdot \\mathbf{F} la divergence, \\nabla \\times \\mathbf{F} le rotationnel, et \\nabla^2 ou \\Delta le laplacien. En apprentissage automatique, \\nabla_\\theta L(\\theta) désigne le gradient d’une fonction de perte par rapport aux paramètres, comme dans la descente de gradient \\theta \\leftarrow \\theta - \\eta \\nabla_\\theta L. Les géomètres différentiels utilisent \\nabla pour une connexion ou une dérivée covariante, \\nabla_X Y. C’est un symbole ordinaire : aucun espacement supplémentaire n’est inséré. Certains auteurs le mettent en gras avec \\boldsymbol{\\nabla} pour souligner qu’il s’agit d’un opérateur vectoriel.",
  },
  "plus-minus": {
    name: "Plus ou moins",
    meaning: "Donne le signe plus ou moins ±, pour deux possibilités ou une tolérance autour d’une valeur.",
    usage: "\\pm apparaît dans la formule du second degré x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a} et dans les incertitudes de mesure comme 9.81 \\pm 0.02. Son pendant \\mp (moins ou plus) s’utilise lorsque les signes doivent s’inverser ensemble, comme dans \\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b. C’est un opérateur binaire : TeX l’espace donc comme +. Dans les tableaux de résultats expérimentaux, alignez les nombres sur le signe \\pm pour la lisibilité. Les textes de finance l’utilisent pour des fourchettes, comme un rendement de 5\\% \\pm 2\\%.",
  },
  "dot-product": {
    name: "Produit scalaire",
    meaning: "Place un point centré, utilisé pour le produit scalaire et pour la multiplication entre facteurs.",
    usage: "\\cdot est un opérateur binaire placé sur l’axe mathématique, comme dans \\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i et dans des produits comme 2 \\cdot 3. Il marque aussi un argument générique, comme dans \\|\\cdot\\| ou f(\\cdot). N’utilisez pas un point final, qui se place sur la ligne de base, ni \\bullet, qui est plus gros. Pour des points de suspension entre facteurs multipliés, utilisez \\cdots, centré verticalement, plutôt que \\ldots, réservé aux listes. Utilisez \\times pour les produits vectoriels et la notation scientifique, en gardant \\cdot pour les produits scalaires.",
  },
};

export default text;
