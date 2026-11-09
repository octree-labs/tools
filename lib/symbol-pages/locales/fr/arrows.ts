import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/arrows/<slug>. */
const text: SymbolPageTranslations = {
  "left-arrow": {
    name: "Flèche vers la gauche",
    meaning: "Trace une courte flèche simple pointant vers la gauche, utilisée pour l’affectation dans les algorithmes et pour les applications écrites à rebours.",
    usage: "Le pseudo-code écrit l’affectation x \\leftarrow x + 1, et \\gets est un alias intégré de cette même flèche, plus naturel à lire dans les listings d’algorithmes. En mathématiques, elle représente parfois une application écrite de droite à gauche, B \\leftarrow A, ou, dans des textes anciens, une limite approchée par la droite. Les articles d’apprentissage automatique l’utilisent pour les mises à jour de paramètres, \\theta \\leftarrow \\theta - \\eta g. C’est une relation : TeX ajoute donc un espacement épais autour. Pour une flèche plus longue, utilisez \\longleftarrow, et pour une flèche étiquetée, la flèche extensible \\xleftarrow{text}.",
  },
  "right-arrow": {
    name: "Flèche vers la droite",
    meaning: "Trace une courte flèche simple pointant vers la droite, pour les signatures de fonctions, les limites et les flèches de réaction.",
    usage: "\\rightarrow a l’alias plus court \\to, le choix habituel dans f : A \\to B et dans les limites x \\to 0. Utilisez plutôt \\mapsto pour décrire ce que devient un élément, comme dans x \\mapsto x^2. En logique, p \\rightarrow q est l’implication matérielle, distincte de la double flèche \\Rightarrow employée entre énoncés. Les chimistes l’utilisent pour écrire des réactions simples, et les théoriciens des graphes pour les arêtes orientées u \\rightarrow v. Lorsqu’il faut une étiquette au-dessus de la flèche, la flèche extensible \\xrightarrow{\\text{label}} s’allonge pour l’accueillir.",
  },
  "up-arrow": {
    name: "Flèche vers le haut",
    meaning: "Trace une flèche vers le haut, utilisée pour les limites croissantes, le spin up, les dégagements gazeux et la notation de Knuth.",
    usage: "En analyse, on écrit x_n \\uparrow x pour une suite qui croît vers sa limite, comme dans le théorème de convergence monotone. La physique l’utilise pour le spin up, |\\uparrow\\rangle, et la chimie signale par une flèche vers le haut après le produit un gaz qui se dégage d’une réaction. La notation des flèches de Knuth pour les très grands nombres écrit 3 \\uparrow\\uparrow 3 pour l’exponentiation itérée. \\uparrow fonctionne aussi comme délimiteur : \\big\\uparrow ou \\left\\uparrow ... \\right. produisent des versions plus hautes. La flèche à double trait \\Uparrow est un symbole distinct.",
  },
  "long-left-arrow": {
    name: "Longue flèche vers la gauche",
    meaning: "Trace une longue flèche simple vers la gauche, version étirée de \\leftarrow pour des applications larges ou mises en valeur.",
    usage: "\\longleftarrow est une longue flèche de longueur fixe, environ deux fois plus longue que \\leftarrow, construite à partir d’un signe moins et d’une pointe. Elle est utile lorsque les flèches relient de longues expressions, ou dans des diagrammes en ligne de suites exactes écrites de droite à gauche. Pour du texte au-dessus de la flèche, la flèche extensible \\xleftarrow{f} est préférable, car elle s’allonge avec l’étiquette. L’affectation dans les algorithmes utilise plutôt le court \\gets. Son pendant à double trait est \\Longleftarrow, qui sous-tend le symbole « est impliqué par » \\impliedby.",
  },
  "long-right-arrow": {
    name: "Longue flèche vers la droite",
    meaning: "Trace une longue flèche simple vers la droite, souvent pour des énoncés de convergence et des flèches entre longues expressions.",
    usage: "On utilise \\longrightarrow lorsqu’un \\to court paraît étriqué, par exemple dans a_n \\longrightarrow L ou entre deux longs termes d’une réduction. Une condition sous la flèche peut être ajoutée avec \\xrightarrow[n \\to \\infty]{}, qui s’étire selon l’étiquette, ou avec \\underset{n\\to\\infty}{\\longrightarrow}. La chimie utilise des flèches longues pour les réactions dont les conditions sont écrites au-dessus. C’est un symbole de longueur fixe, contrairement aux flèches extensibles. La version double est \\Longrightarrow, que \\implies imprime avec un espacement supplémentaire.",
  },
  "down-arrow": {
    name: "Flèche vers le bas",
    meaning: "Trace une flèche vers le bas, utilisée pour les limites décroissantes, le spin down, les précipités et les réductions à grands pas.",
    usage: "Une suite qui décroît vers sa limite s’écrit x_n \\downarrow x, et les limites à droite apparaissent sous la forme t \\downarrow 0. Les physiciens écrivent le spin down |\\downarrow\\rangle, et les chimistes placent une flèche après un précipité solide. En théorie des domaines et en sémantique des langages de programmation, e\\downarrow signifie qu’un calcul converge. Comme \\uparrow, c’est un délimiteur : \\Big\\downarrow donne une flèche plus haute, pratique pour esquisser des diagrammes verticaux. La version à double trait est \\Downarrow. Certains textes de topologie et de théorie des ordres écrivent aussi {\\downarrow}x pour la section commençante d’un élément.",
  },
  "left-arrow-double": {
    name: "Double flèche vers la gauche",
    meaning: "Trace une courte flèche à double trait vers la gauche, qui se lit « est impliqué par » ou marque le sens réciproque d’une démonstration.",
    usage: "Dans les démonstrations d’une équivalence, les auteurs étiquettent les deux sens (\\Rightarrow) et (\\Leftarrow), ce dernier prouvant la réciproque. Entre formules, A \\Leftarrow B signifie que B implique A. Pour une version longue et espacée entre énoncés complets, \\impliedby donne \\Longleftarrow avec un espacement supplémentaire, en miroir de \\implies. Attention à ne pas confondre \\Leftarrow avec \\leq lors d’une lecture rapide, car certains lecteurs se méprennent sur la forme. Les textes de logique reformulent plus souvent l’énoncé pour utiliser une flèche vers la droite : réservez donc \\Leftarrow aux sens réciproques.",
    example: "(\\Leftarrow)\\ \\text{Supposons } n^2 \\text{ pair. Alors } n \\text{ est pair.}",
  },
  "right-arrow-double": {
    name: "Double flèche vers la droite",
    meaning: "Trace une courte flèche à double trait vers la droite, le signe d’implication standard entre formules.",
    usage: "\\Rightarrow énonce qu’une formule en implique une autre, comme dans p \\Rightarrow q, et étiquette le sens direct (\\Rightarrow) dans les démonstrations d’équivalence. \\implies imprime le plus long \\Longrightarrow avec un espacement épais supplémentaire et convient aux implications entre énoncés complets. En probabilités, on écrit la convergence en loi X_n \\Rightarrow X, et la réécriture de termes l’utilise pour une étape de réduction. L’algèbre de Boole l’utilise pour le conditionnel. Préférez-la à la flèche simple \\to lorsque les objets sont des énoncés plutôt que des ensembles ou des fonctions.",
  },
  "up-arrow-double": {
    name: "Double flèche vers le haut",
    meaning: "Trace une flèche à double trait vers le haut, un symbole rare également utilisable comme délimiteur extensible.",
    usage: "\\Uparrow n’a pas de sens standard unique en mathématiques. On le rencontre parfois dans des diagrammes, dans certains textes de logique et de théorie de la démonstration, et en physique pour un état fortement polarisé. Comme c’est un délimiteur, \\Big\\Uparrow et \\left\\Uparrow ... \\right. l’agrandissent verticalement. Si vous avez seulement besoin d’indiquer une direction vers le haut, \\uparrow est le choix habituel. Si vous utilisez \\Uparrow pour une relation personnalisée, définissez-la dans le texte à sa première apparition, pour que le lecteur n’ait pas à deviner.",
  },
  "long-left-arrow-double": {
    name: "Longue double flèche vers la gauche",
    meaning: "Trace une longue flèche à double trait vers la gauche ; avec un espacement ajouté, c’est le signe « est impliqué par ».",
    usage: "\\Longleftarrow est le glyphe qui sous-tend \\impliedby, lequel ajoute des espaces épaisses de chaque côté pour un usage entre énoncés complets. Utilisez \\Longleftarrow directement lorsque vous voulez la longue flèche sans ce remplissage, par exemple dans une chaîne serrée à l’intérieur d’un tableau. Dans les démonstrations, elle peut introduire le sens réciproque, (\\Longleftarrow). Sa jumelle orientée vers la droite, \\Longrightarrow, sous-tend \\implies, et la version à deux pointes \\Longleftrightarrow sous-tend \\iff. Évitez de mélanger formes courtes et longues dans une même démonstration. Les flèches réciproques se lisent mieux lorsque l’hypothèse la plus forte est à droite.",
  },
  "long-right-arrow-double": {
    name: "Longue double flèche vers la droite",
    meaning: "Trace une longue flèche à double trait vers la droite ; entourée d’espaces, elle devient le signe \\implies.",
    usage: "\\Longrightarrow est le glyphe brut qu’utilise \\implies, sans l’espacement épais supplémentaire. Choisissez \\Longrightarrow lorsqu’il faut une implication dans un espace restreint, comme un indice, une cellule de matrice ou un tableau serré, et \\implies entre propositions complètes en mathématiques hors texte. Elle sert aussi pour les réductions en plusieurs étapes dans les systèmes de réécriture et pour la convergence dans certains textes de probabilités. La version courte \\Rightarrow convient mieux entre des formules courtes. Écrivez la réciproque avec \\Longleftarrow. Dans une suite d’étapes en mode hors texte, alignez les flèches avec l’environnement align pour que chaque étape commence dans la même colonne.",
    example: "a \\mid b \\text{ et } b \\mid c \\Longrightarrow a \\mid c",
  },
  "down-arrow-double": {
    name: "Double flèche vers le bas",
    meaning: "Trace une flèche à double trait vers le bas, utilisée pour l’évaluation à grands pas en sémantique des langages de programmation.",
    usage: "La sémantique opérationnelle écrit e \\Downarrow v pour signifier que l’expression e s’évalue en la valeur v dans le style à grands pas, principal usage technique de ce symbole. Dans les diagrammes et les démonstrations logiques, elle peut marquer une étape d’inférence verticale. Comme les autres flèches verticales, \\Downarrow est un délimiteur : \\Big\\Downarrow en donne une version plus haute. Ne la confondez pas avec \\downarrow, qui dans la même sémantique peut signifier la terminaison. Définissez votre convention en introduisant le jugement. La sémantique à petits pas utilise au contraire \\to ou \\longrightarrow pour les étapes de réduction uniques, et \\to^* pour leur clôture réflexive et transitive.",
  },
  "left-right-arrow": {
    name: "Flèche gauche-droite",
    meaning: "Trace une courte flèche à deux pointes, pour les correspondances, le biconditionnel et les formes mésomères.",
    usage: "La logique utilise p \\leftrightarrow q pour le connecteur biconditionnel à l’intérieur des formules, tandis que \\Leftrightarrow et \\iff sont plus courants entre énoncés complets. En combinatoire, elle décrit une correspondance bijective entre objets, et la chimie l’utilise entre formes mésomères, mais pas pour l’équilibre, qui utilise \\rightleftharpoons. La théorie des graphes peut l’employer pour des arêtes non orientées ou bidirectionnelles. C’est une relation, qui reçoit un espacement épais. Pour une version plus longue, utilisez \\longleftrightarrow. Dans les discussions sur les tables de vérité, elle équivaut au XNOR, vrai exactement lorsque les deux membres concordent.",
  },
  "long-left-right-arrow": {
    name: "Longue flèche gauche-droite",
    meaning: "Trace une longue flèche simple à deux pointes, version étirée de \\leftrightarrow pour les correspondances entre longues expressions.",
    usage: "\\longleftrightarrow convient à une correspondance entre deux objets longs, par exemple une bijection entre sous-ensembles et chaînes binaires, où la flèche courte semble perdue. C’est un symbole de longueur fixe : les étiquettes nécessitent donc \\overset ou une construction empilée. Notez que \\iff est construit à partir de \\Longleftrightarrow à double trait, et non de cette version à trait simple : n’utilisez donc pas \\longleftrightarrow pour l’équivalence logique dans les démonstrations. La physique l’utilise pour une dualité entre deux théories. La longueur supplémentaire aide aussi lorsque la flèche porte du texte empilé au-dessus.",
  },
  "up-down-arrow": {
    name: "Flèche haut-bas",
    meaning: "Trace une flèche verticale à deux pointes, surtout utilisée comme délimiteur extensible ou dans des diagrammes.",
    usage: "\\updownarrow pointe à la fois vers le haut et vers le bas, ce qui la rend pratique dans les diagrammes verticaux pour montrer une relation dans les deux sens entre des lignes. Comme c’est un délimiteur, elle peut être agrandie avec \\big, \\Big, ou \\left et \\right. En physique, elle indique parfois une superposition d’états de spin ou une oscillation verticale. Sa variante à double trait est \\Updownarrow. Si vous dessinez un diagramme commutatif complet, un environnement de diagramme dédié alignera mieux les flèches verticales que \\updownarrow placé à la main. Elle est rarement nécessaire dans les articles modernes, mais utile dans les notes de cours.",
  },
  "left-right-arrow-double": {
    name: "Double flèche gauche-droite",
    meaning: "Trace une courte flèche à double trait et à deux pointes, pour l’équivalence logique entre formules.",
    usage: "\\Leftrightarrow énonce que deux formules s’impliquent mutuellement, comme dans A \\Leftrightarrow B. Pour une équivalence entre énoncés complets en mathématiques hors texte, \\iff donne le plus long \\Longleftrightarrow avec un espacement supplémentaire. L’algèbre de Boole l’utilise pour le XNOR ou le biconditionnel. Dans les chaînes d’équations équivalentes, aligner une colonne de \\Leftrightarrow avec align est une pratique courante dans les corrigés d’exercices. Ne la confondez pas avec \\equiv, qui exprime l’identité ou la congruence plutôt que l’équivalence logique. Ne l’écrivez que lorsque chaque étape est réellement réversible ; élever les deux membres au carré, par exemple, rompt l’équivalence.",
  },
  "long-left-right-arrow-double": {
    name: "Longue double flèche gauche-droite",
    meaning: "Trace une longue flèche à double trait et à deux pointes, le même glyphe que celui qu’utilise \\iff.",
    usage: "\\Longleftrightarrow imprime la même flèche que \\iff, mais sans les espaces épaisses supplémentaires qu’ajoute \\iff. C’est donc le meilleur choix dans les indices, les tableaux ou un texte en ligne serré, tandis que \\iff se lit mieux dans les théorèmes en mode hors texte. Elle apparaît aussi dans les démonstrations où les deux sens sont traités ensemble. La version courte \\Leftrightarrow est préférée entre des formules brèves. Gardez un choix cohérent dans tout le document, en particulier dans les énoncés de théorèmes. Elle sert également dans les chaînes d’étapes algébriques réversibles alignées dans un environnement align, où la longueur supplémentaire sépare visuellement les longues équations. Comme les autres flèches, c’est une relation : TeX lui donne un espacement épais des deux côtés.",
    example: "A \\text{ inversible} \\Longleftrightarrow \\det A \\neq 0",
  },
  "up-down-arrow-double": {
    name: "Double flèche haut-bas",
    meaning: "Trace une flèche verticale à double trait et à deux pointes, utilisable comme délimiteur, pour une équivalence verticale.",
    usage: "\\Updownarrow s’utilise principalement dans des mises en page verticales, comme deux énoncés équivalents empilés dans un array, où elle joue le rôle de \\Leftrightarrow tourné d’un quart de tour. C’est un délimiteur : les versions \\Big\\Updownarrow et \\left ... \\right s’agrandissent verticalement. En dehors de tels diagrammes, elle n’a pas de sens bien établi. S’il vous faut une version à trait simple, utilisez \\updownarrow. Un simple array avec une colonne centrée garde les énoncés et la flèche alignés. Dans des diapositives de cours, elle peut aussi montrer que deux définitions empilées verticalement sont interchangeables. Associez-la à \\Leftrightarrow lorsque la même équivalence apparaît aussi horizontalement ailleurs.",
    example: "\\begin{array}{c} A \\text{ vraie} \\\\ \\Updownarrow \\\\ B \\text{ vraie} \\end{array}",
  },
  "maps-to": {
    name: "Flèche d’application",
    meaning: "Trace une flèche à talon qui indique où une fonction envoie un élément donné, comme dans x ↦ x².",
    usage: "Utilisez \\mapsto pour les éléments et \\to pour les ensembles : f : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2 énonce à la fois l’ensemble de départ, l’ensemble d’arrivée et la règle. Les articles de lambda-calcul et de programmation fonctionnelle l’utilisent pour les fonctions anonymes, et en sémantique on écrit les substitutions ou les mises à jour d’environnement [x \\mapsto v]. Elle ne diffère de \\to que par la petite barre à sa base : vérifiez donc qu’elle s’affiche nettement aux petites tailles. Pour de longues expressions, utilisez \\longmapsto. Dans les diagrammes commutatifs, les flèches au niveau des éléments sont aussi tracées avec un talon de type mapsto.",
  },
  "long-maps-to": {
    name: "Longue flèche d’application",
    meaning: "Trace une longue flèche à talon qui envoie un élément sur son image, pour des expressions plus larges qu’avec \\mapsto.",
    usage: "\\longmapsto laisse plus de place lorsque l’entrée ou la sortie est longue, comme dans (x, y) \\longmapsto x^2 + y^2, ou lorsque vous voulez que la règle sur les éléments s’aligne avec un \\longrightarrow placé au-dessus. Elle se lit comme \\mapsto et doit être associée à \\to ou \\longrightarrow sur la ligne qui énonce l’ensemble de départ et l’ensemble d’arrivée. Sa longueur fixe implique qu’une étiquette au-dessus nécessite toujours \\overset. L’utiliser de façon cohérente dans les définitions de fonctions en mode hors texte donne une présentation nette sur deux lignes.",
  },
  "northeast-arrow": {
    name: "Flèche nord-est",
    meaning: "Trace une flèche diagonale pointant vers le haut et la droite, pour les tendances croissantes et les arêtes de diagrammes.",
    usage: "\\nearrow est souvent utilisée de façon informelle pour « croît vers », comme dans a_n \\nearrow a, pendant diagonal de \\uparrow. Elle relie aussi des éléments dans des diagrammes faits à la main, des illustrations de matrices et des croquis de type diagramme de Hasse. Avec \\searrow, \\swarrow et \\nwarrow, elle forme un jeu complet de flèches diagonales. Ces flèches ne s’étirent pas : pour de longues flèches diagonales, un outil de diagrammes convient mieux. Dans des notes d’économie ou d’analyse de données, elle peut résumer une tendance à la hausse dans une cellule de tableau. Définissez son sens une fois, car il s’agit d’une notation plutôt que d’un symbole formel.",
  },
  "hook-left-arrow": {
    name: "Flèche à crochet vers la gauche",
    meaning: "Trace une flèche vers la gauche avec un crochet à sa base, la forme inversée de la flèche d’inclusion.",
    usage: "\\hookleftarrow est le miroir de \\hookrightarrow et s’utilise lorsqu’une inclusion ou une injection est tracée de droite à gauche, par exemple dans une suite exacte écrite à rebours ou dans un diagramme où la cible est à gauche. Elle est par ailleurs rare. Dans la documentation des claviers, un glyphe semblable représente la touche Entrée, mais c’est un sens distinct. Si vos flèches pointent surtout vers la droite, reformuler l’énoncé avec \\hookrightarrow est souvent plus clair. Elle a l’espacement d’une relation, comme les autres flèches. Sa longueur est égale à celle de \\hookrightarrow, ce qui équilibre les diagrammes symétriques. Lorsqu’il vous faut beaucoup de ces flèches, un environnement de diagramme dédié gère automatiquement les crochets.",
  },
  "hook-right-arrow": {
    name: "Flèche à crochet vers la droite",
    meaning: "Trace une flèche vers la droite avec un crochet à sa base, le symbole standard d’une application injective, d’une inclusion ou d’un plongement.",
    usage: "Écrire \\iota : A \\hookrightarrow X indique au lecteur que l’application est une inclusion ou une injection, sans avoir à le dire en toutes lettres. L’analyse l’utilise pour les injections continues d’espaces fonctionnels, comme dans H^1(\\Omega) \\hookrightarrow L^2(\\Omega), et les injections compactes sont parfois signalées par une décoration supplémentaire. La théorie des catégories l’emploie pour les monomorphismes. Son pendant surjectif est \\twoheadrightarrow. Le crochet rend la flèche plus longue que \\to : vérifiez donc l’alignement dans les diagrammes. C’est une relation : TeX l’entoure d’un espacement épais.",
  },
  "southeast-arrow": {
    name: "Flèche sud-est",
    meaning: "Trace une flèche diagonale pointant vers le bas et la droite, pour les tendances décroissantes et les arêtes de diagrammes.",
    usage: "\\searrow abrège souvent « décroît vers », comme dans \\varepsilon_n \\searrow 0 pour une suite décroissante. Elle complète \\nearrow, \\swarrow et \\nwarrow dans les diagrammes informels, comme une grille d’objets 2 par 2. Les physiciens l’utilisent dans des schémas de niveaux d’énergie ou de chaînes de désintégration. Ces flèches ont une taille fixe : elles conviennent donc à un usage rapide en ligne plutôt qu’à des diagrammes soignés. Le nom signifie southeast (sud-est), et non search. Les lecteurs qui la découvrent peuvent s’attendre à une icône de recherche : une brève définition aide. Dans les tableaux de variations, \\nearrow et \\searrow donnent un visuel compact.",
    example: "\\varepsilon_n \\searrow 0 \\quad \\text{quand } n \\to \\infty",
  },
  "left-harpoon-up": {
    name: "Harpon vers la gauche, barbe en haut",
    meaning: "Trace un harpon pointant vers la gauche avec sa barbe en haut, la moitié d’une pointe de flèche orientée vers la gauche.",
    usage: "\\leftharpoonup sert principalement de brique de base ou dans des notations spécialisées. Certains textes de physique placent un harpon au-dessus des vecteurs, et empiler \\rightharpoonup au-dessus de \\leftharpoondown recrée les flèches d’équilibre, bien que \\rightleftharpoons existe déjà. On peut aussi le trouver dans des schémas réactionnels. Comme les harpons se ressemblent aux petites tailles, choisissez délibérément le sens de la barbe et gardez-le cohérent. Dans la plupart des documents, il apparaît au sein d’autres constructions plutôt que seul. Ses proches sont \\rightharpoonup, \\leftharpoondown et \\rightharpoondown, qui ne diffèrent que par la direction et le côté de la barbe. Comme les autres flèches, il reçoit l’espacement d’une relation.",
  },
  "right-harpoon-up": {
    name: "Harpon vers la droite, barbe en haut",
    meaning: "Trace un harpon pointant vers la droite avec la barbe en haut, le signe habituel de la convergence faible.",
    usage: "L’analyse fonctionnelle écrit u_n \\rightharpoonup u pour la convergence faible, afin de la distinguer de la convergence forte u_n \\to u. La convergence faible-étoile s’écrit souvent \\overset{*}{\\rightharpoonup}. La physique utilise parfois un harpon vers la droite comme accent vectoriel. Il forme aussi la moitié supérieure du symbole d’équilibre \\rightleftharpoons en chimie. Distinguez bien \\rightharpoonup de \\rightharpoondown, dont la barbe est en dessous, car les lecteurs peuvent les considérer comme des notations différentes. En KaTeX et en LaTeX, le glyphe a l’espacement d’une relation : u_n \\rightharpoonup u s’espace donc comme un signe égal. En rédigeant, précisez l’espace dans lequel la convergence est faible, comme dans l’exemple.",
    example: "u_n \\rightharpoonup u \\text{ dans } H^1(\\Omega)",
  },
  "southwest-arrow": {
    name: "Flèche sud-ouest",
    meaning: "Trace une flèche diagonale pointant vers le bas et la gauche, surtout pour les diagrammes et les schémas de flux.",
    usage: "\\swarrow montre un pas vers le bas et la gauche, comme dans une grille d’objets dessinée à la main ou pour illustrer la façon dont les termes se combinent dans un déterminant de matrice. Avec \\nearrow, \\searrow et \\nwarrow, elle couvre les quatre diagonales. Elle ne s’étire pas : les longues flèches diagonales nécessitent un outil de diagrammes. Elle signale parfois une tendance dans un tableau, mais \\searrow est plus courant pour des valeurs décroissantes. Combinez-la avec un espacement \\quad dans les array pour la positionner correctement.",
  },
  "left-harpoon-down": {
    name: "Harpon vers la gauche, barbe en bas",
    meaning: "Trace un harpon pointant vers la gauche avec sa barbe en bas, la moitié inférieure d’une pointe de flèche scindée.",
    usage: "\\leftharpoondown est la moitié inférieure du symbole d’équilibre \\rightleftharpoons, où il se place sous \\rightharpoonup. Seul, il apparaît rarement, dans certains schémas réactionnels ou comme marque inversée de convergence faible. Si vous voulez une flèche d’équilibre, utilisez directement \\rightleftharpoons au lieu d’empiler des harpons à la main. Notez que les harpons sont distincts de \\leftarrow et ne doivent pas être échangés à la légère. Il a l’espacement d’une relation, comme les flèches ordinaires. Ses frères sont \\leftharpoonup, \\rightharpoonup et \\rightharpoondown. Dans la plupart des articles, vous n’en aurez pas besoin du tout, car une flèche ordinaire dit la même chose plus clairement.",
  },
  "right-harpoon-down": {
    name: "Harpon vers la droite, barbe en bas",
    meaning: "Trace un harpon pointant vers la droite avec la barbe en bas, une variante à barbe inférieure de la demi-flèche.",
    usage: "\\rightharpoondown est le miroir de \\rightharpoonup quant à la position de la barbe, et apparaît dans certaines notations d’équilibre et comme accent vectoriel. Comme \\rightharpoonup est le symbole établi de la convergence faible, utiliser \\rightharpoondown à cette fin dérouterait le lecteur. Il s’associe parfois à \\leftharpoonup dans \\leftrightharpoons, la disposition d’équilibre inversée. Comme pour tous les harpons, vérifiez que la barbe est visible dans le PDF final à la taille de police choisie. Ses frères \\leftharpoonup et \\leftharpoondown complètent le jeu des quatre harpons. Comme les autres flèches, il reçoit l’espacement d’une relation.",
  },
  "northwest-arrow": {
    name: "Flèche nord-ouest",
    meaning: "Trace une flèche diagonale pointant vers le haut et la gauche, surtout utilisée dans les diagrammes et les illustrations.",
    usage: "\\nwarrow est la moins courante des quatre flèches diagonales. Elle apparaît dans des array faits à la main qui montrent les relations entre éléments, comme les dépendances dans une table de programmation dynamique où une cellule dépend de sa voisine en haut à gauche. Combinée à \\nearrow, \\searrow et \\swarrow, elle permet d’esquisser de petits diagrammes sans paquet de dessin. Pour des diagrammes commutatifs soignés, un environnement de diagramme dédié donne des longueurs de flèches et des étiquettes correctes. Sa taille fixe et son espacement de relation la rendent pratique dans les array et les tableaux. Lire les quatre flèches diagonales comme des directions de boussole (nord-est, sud-est, sud-ouest, nord-ouest) aide à retenir les noms.",
  },
};

export default text;
