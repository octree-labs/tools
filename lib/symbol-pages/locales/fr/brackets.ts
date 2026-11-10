import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/brackets/<slug>. */
const text: SymbolPageTranslations = {
  "angle-bracket-left": {
    name: "Chevron gauche",
    meaning: "Chevron ouvrant, utilisé pour les produits scalaires, les valeurs moyennes et les sous-groupes engendrés.",
    usage: "Le chevron gauche ouvre des notations comme le produit scalaire \\langle u, v \\rangle, un bra-ket \\langle \\psi | \\phi \\rangle, le sous-groupe \\langle g \\rangle ou une moyenne temporelle \\langle x \\rangle. N’utilisez jamais pour cela le signe inférieur < : c’est une relation, avec un espacement large et une forme inadaptée. Il fonctionne avec \\left et \\right pour un dimensionnement automatique, et avec \\big, \\Big et leurs variantes pour des tailles manuelles. Associez-le toujours à \\rangle ; si un seul côté doit être visible, utilisez \\left. ou \\right. comme partenaire invisible.",
  },
  "angle-bracket-right": {
    name: "Chevron droit",
    meaning: "Chevron fermant qui termine les produits scalaires, les kets, les moyennes et les autres notations à chevrons.",
    usage: "\\rangle ferme ce que \\langle ouvre : \\langle f, g \\rangle dans les espaces de Hilbert, le ket de Dirac |\\psi\\rangle et les présentations comme \\langle a, b \\mid a^2 = b^3 \\rangle. Le signe supérieur > ne peut pas le remplacer : c’est une relation, entourée d’espace supplémentaire, et son angle est plus ouvert. Quand le contenu est haut, avec des fractions ou des sommes, utilisez \\left\\langle ... \\right\\rangle pour que les deux côtés grandissent ensemble. Un ket isolé s’écrit |\\psi\\rangle et n’a pas besoin d’un \\langle correspondant.",
  },
  "angle-brackets": {
    name: "Chevrons",
    meaning: "Encadre une expression de chevrons, pour les moyennes, les produits scalaires ou le sous-espace engendré.",
    usage: "Cette paire sert aux valeurs moyennes en physique, \\langle E \\rangle, aux produits scalaires \\langle x, y \\rangle et au sous-groupe ou à l’idéal engendré par des éléments, \\langle a \\rangle. Pour des arguments hauts, passez à \\left\\langle \\frac{a}{b} \\right\\rangle. Si vous écrivez souvent des produits scalaires, définissez une macro, par exemple avec un outil de délimiteurs appariés, pour un dimensionnement cohérent. En notation de Dirac, beaucoup préfèrent un jeu de macros bra-ket dédié, car l’espacement autour de la barre verticale dans \\langle \\phi | \\psi \\rangle peut être irrégulier : \\mid ajoute un espacement de relation, alors que | n’en ajoute aucun.",
  },
  "ceiling-left": {
    name: "Crochet de partie entière supérieure gauche",
    meaning: "Crochet gauche de la partie entière supérieure, moitié ouvrante de la fonction plafond qui arrondit à l’entier supérieur.",
    usage: "\\lceil ouvre la notation \\lceil x \\rceil, le plus petit entier supérieur ou égal à x. C’est un délimiteur : il fonctionne avec \\left\\lceil ... \\right\\rceil pour un contenu haut comme \\frac{n}{2}, et avec les tailles de type \\big. Le crochet de partie entière supérieure a son trait horizontal en haut, alors que celui de partie entière inférieure, \\lfloor, l’a en bas : une paire facile à confondre en relecture. Certains auteurs utilisent aussi \\lceil et \\rceil comme guillemets d’angle pour la numérotation de Gödel, où \\ulcorner est une alternative.",
  },
  "ceiling-right": {
    name: "Crochet de partie entière supérieure droit",
    meaning: "Crochet droit de la partie entière supérieure, qui ferme la notation de l’arrondi à l’entier supérieur.",
    usage: "Associez \\rceil à \\lceil pour écrire \\lceil \\log_2 n \\rceil, le nombre de bits nécessaires dans de nombreux algorithmes, ou \\lceil n/k \\rceil pour le nombre de blocs de taille k nécessaires pour couvrir n éléments. Contrairement aux parenthèses, ce crochet n’a pas d’équivalent ASCII : la commande est le seul moyen d’obtenir le symbole. Utilisez \\right\\rceil lorsque le crochet gauche correspondant a été placé avec \\left. Si vous écrivez souvent des parties entières, une macro de délimiteurs appariés comme \\ceil{x} garde des tailles cohérentes dans tout le document.",
    example: "\\text{blocs} = \\lceil n / k \\rceil",
  },
  "ceiling": {
    name: "Partie entière supérieure",
    meaning: "Arrondit x au plus petit entier supérieur ou égal : la fonction partie entière supérieure (plafond).",
    usage: "Les parties entières supérieures apparaissent en analyse d’algorithmes (\\lceil \\log_2 n \\rceil comparaisons, \\lceil n/2 \\rceil dans le tri fusion), en théorie des nombres et dans les problèmes de dénombrement comme le principe des tiroirs, où un tiroir contient au moins \\lceil n/k \\rceil objets. Pour les valeurs négatives, rappelez-vous que \\lceil -2.5 \\rceil = -2. Quand l’argument est une fraction ou une expression haute, utilisez \\left\\lceil ... \\right\\rceil pour que les crochets grandissent. Ne la remplacez pas par des crochets [x] : les ouvrages anciens utilisaient [x] pour la partie entière inférieure, ce qui rend la notation ambiguë.",
  },
  "floor-left": {
    name: "Crochet de partie entière inférieure gauche",
    meaning: "Crochet gauche de la partie entière inférieure, moitié ouvrante de la fonction plancher qui arrondit à l’entier inférieur.",
    usage: "\\lfloor ouvre des notations comme \\lfloor x \\rfloor et \\lfloor n/2 \\rfloor. Ce crochet a son trait en bas, contrairement à \\lceil, dont le trait est en haut. En tant que délimiteur, sa taille se règle avec \\left\\lfloor ou \\bigl\\lfloor. En théorie des nombres, le même crochet apparaît dans des formules comme la formule de Legendre pour l’exposant d’un nombre premier divisant n!. Si votre police ou votre moteur de rendu affiche un simple crochet droit, vérifiez que vous avez tapé \\lfloor et non [, qui est un glyphe différent.",
  },
  "floor-right": {
    name: "Crochet de partie entière inférieure droit",
    meaning: "Crochet droit de la partie entière inférieure, qui ferme la notation de l’arrondi à l’entier inférieur.",
    usage: "Fermez tout \\lfloor par \\rfloor, par exemple dans \\lfloor x \\rfloor ou dans la division entière \\lfloor a/b \\rfloor que de nombreux langages de programmation implémentent pour des opérandes positifs. Si le crochet gauche a été placé avec \\left\\lfloor, le droit doit être \\right\\rfloor dans le même groupe mathématique, sinon LaTeX signale un \\right manquant. La paire sert aussi à arrondir à l’entier le plus proche via \\lfloor x + 1/2 \\rfloor. Une macro de délimiteurs appariés comme \\floor{x} garde une notation cohérente dans les longs documents.",
  },
  "floor": {
    name: "Partie entière inférieure",
    meaning: "Arrondit x au plus grand entier inférieur ou égal : la fonction partie entière (plancher).",
    usage: "La partie entière apparaît dans la division entière, dans la partie fractionnaire \\{x\\} = x - \\lfloor x \\rfloor, dans le milieu de la recherche dichotomique \\lfloor (lo + hi)/2 \\rfloor et dans des sommes de théorie des nombres comme la formule de Legendre. Pour les nombres négatifs, elle arrondit en s’éloignant de zéro : \\lfloor -2.5 \\rfloor = -3, ce qui diffère de la troncature. La littérature ancienne écrivait [x] pour la partie entière (crochet de Gauss), mais la notation à crochets de plancher est aujourd’hui préférée car elle est sans ambiguïté. Utilisez \\left\\lfloor ... \\right\\rfloor autour des fractions pour que les crochets suivent la hauteur du contenu.",
  },
  "double-vertical-bar": {
    name: "Double barre verticale",
    meaning: "Double barre verticale, délimiteur des normes et, dans certains contextes, symbole du parallélisme.",
    usage: "\\| imprime deux traits verticaux et s’emploie surtout par paires pour les normes, \\|x\\|. Seul, c’est un symbole ordinaire : quand vous voulez la relation « est parallèle à », utilisez \\parallel, qui ajoute l’espacement d’une relation. Pour les normes, \\lVert et \\rVert sont recommandés, car ils indiquent à LaTeX quel côté ouvre et lequel ferme, d’où un espacement correct à côté des opérateurs et des signes moins. Sa taille se règle avec \\left\\| ... \\right\\| ou \\big\\|. En mode texte, \\| ne donne pas les barres ; utilisez \\textbardbl ou passez en mode mathématique.",
  },
  "norm": {
    name: "Norme",
    meaning: "Encadre un vecteur ou une fonction de doubles barres pour noter sa norme, c’est-à-dire sa longueur ou sa taille.",
    usage: "Les normes sont partout en analyse et en algèbre linéaire : la norme euclidienne \\|x\\|_2, la norme uniforme \\|f\\|_\\infty, la norme de Frobenius \\|A\\|_F et l’inégalité triangulaire \\|x + y\\| \\le \\|x\\| + \\|y\\|. Un indice après la barre fermante précise de quelle norme il s’agit. Écrire \\lVert x \\rVert plutôt que \\| x \\| donne un meilleur espacement dans des expressions comme \\|{-x}\\|, car LaTeX connaît alors le rôle de chaque barre. Pour un contenu haut, comme des fractions dans la norme, utilisez \\left\\| ... \\right\\|. Les barres simples |x| sont réservées aux valeurs absolues.",
  },
  "double-bracket-left": {
    name: "Double crochet gauche",
    meaning: "Double crochet (crochet blanc) gauche, utilisé pour les crochets sémantiques, les intervalles d’entiers et la notation d’Iverson.",
    usage: "En sémantique des langages de programmation, \\llbracket e \\rrbracket désigne le sens d’une expression, comme en sémantique dénotationnelle. Les ouvrages de tradition française et la combinatoire écrivent \\llbracket 1, n \\rrbracket pour l’intervalle d’entiers \\{1, \\dots, n\\}, et certains auteurs l’utilisent pour le crochet d’Iverson. La commande ne fait partie ni du noyau de LaTeX ni des polices de symboles de l’AMS : il faut un paquet de symboles qui la fournisse ; KaTeX la prend en charge directement. Il ne s’agrandit qu’avec les paquets qui en fournissent des versions extensibles : pour un contenu haut, vérifiez votre configuration. Associez-le à \\rrbracket.",
  },
  "double-bracket-right": {
    name: "Double crochet droit",
    meaning: "Double crochet droit, qui ferme la notation de crochet sémantique ou d’intervalle d’entiers.",
    usage: "Fermez \\llbracket par \\rrbracket pour écrire \\llbracket P \\rrbracket_\\sigma, le sens du programme P dans l’état \\sigma, ou l’intervalle d’entiers \\llbracket a, b \\rrbracket. Ne l’imitez pas avec ]] ni avec ]\\!], qui donnent une forme et un espacement différents de ceux du glyphe de crochet blanc. Les auteurs qui emploient beaucoup de crochets sémantiques définissent souvent une macro comme \\sem{e} afin de pouvoir changer le style du crochet en un seul endroit, par exemple en passant à [\\![ e ]\\!] si la police de doubles crochets n’est pas disponible.",
  },
  "double-brackets": {
    name: "Doubles crochets",
    meaning: "Encadre une expression de doubles crochets, pour la sémantique dénotationnelle ou les intervalles d’entiers.",
    usage: "Cette paire de crochets donne la fonction sémantique en sémantique formelle, \\llbracket x \\rrbracket_\\rho pour la valeur de x dans l’environnement \\rho, et l’intervalle discret \\llbracket m, n \\rrbracket en combinatoire. Elle apparaît aussi dans le crochet d’Iverson et dans la notation du saut pour les discontinuités en EDP numériques, \\llbracket u \\rrbracket = u^+ - u^-. Comme le glyphe n’est pas dans les polices par défaut, le source a besoin d’un paquet de symboles ; consultez la note sur les paquets de cette page. Les traits creux le distinguent visuellement de crochets ordinaires imbriqués.",
  },
  "parentheses": {
    name: "Parenthèses",
    meaning: "Parenthèses qui s’agrandissent automatiquement à la hauteur de leur contenu.",
    usage: "\\left( et \\right) mesurent leur contenu et choisissent une taille adaptée : \\left( \\frac{a}{b} \\right)^2 reçoit de grandes parenthèses, tandis qu’un simple (x) reste petit. Chaque \\left exige un \\right dans le même groupe, et un saut de ligne dans align ne peut pas les séparer. En abuser alourdit les expressions simples, et \\left...\\right ajoute un peu d’espace en tant qu’atome interne, ce qui peut rendre f\\left(x\\right) trop aéré ; pour les arguments de fonctions, \\bigl( ... \\bigr) ou de simples parenthèses conviennent souvent mieux. Elles s’adaptent à l’élément le plus haut, y compris les bornes des sommes.",
  },
  "square-brackets": {
    name: "Crochets",
    meaning: "Crochets qui s’adaptent à leur contenu, pour le regroupement, les commutateurs ou les intervalles fermés.",
    usage: "Les crochets servent de niveau de regroupement supérieur aux parenthèses, pour l’intervalle fermé [a, b], le commutateur [A, B] = AB - BA, l’espérance \\mathbb{E}[X] et les matrices. Avec \\left[ ... \\right], les crochets s’étirent autour de fractions, d’intégrales ou de matrices, comme dans \\left[ \\frac{x^2}{2} \\right]_0^1 pour une primitive évaluée. Dans un environnement bmatrix, les crochets sont déjà fournis : inutile d’ajouter \\left[ vous-même. Pour des crochets imbriqués dans une longue expression, les tailles manuelles comme \\Bigl[ ... \\Bigr] offrent un contrôle plus fin.",
  },
  "curly-braces": {
    name: "Accolades",
    meaning: "Accolades qui s’étirent à la hauteur du contenu, pour les ensembles définis en compréhension et les définitions groupées.",
    usage: "Les accolades doivent être échappées en \\{ et \\}, car les accolades nues sont des caractères de groupement de LaTeX et n’impriment rien. Avec \\left\\{ ... \\right\\}, elles grandissent autour d’un contenu haut comme \\left\\{ \\frac{p}{q} : q \\neq 0 \\right\\}. Pour une barre de compréhension qui grandit aussi, utilisez \\middle| entre elles. Pour les définitions par morceaux, l’environnement cases trace déjà l’accolade gauche : inutile d’écrire \\left\\{ ... \\right. à la main. En mode texte, utilisez \\textbraceleft, ou simplement \\{ dans une formule.",
  },
  "vertical-bar": {
    name: "Barres verticales",
    meaning: "Barres verticales qui s’adaptent à leur contenu, pour les valeurs absolues et les déterminants.",
    usage: "Utilisez \\left| ... \\right| quand une valeur absolue contient une fraction ou une somme, comme dans \\left| \\frac{a}{b} \\right|, et pour les déterminants de grandes matrices (même si vmatrix est plus simple). Pour LaTeX, un | simple est ambigu : il ne distingue pas une barre ouvrante d’une barre fermante, ce qui peut gâcher l’espacement autour d’un signe moins initial. Pour des résultats cohérents, définissez une macro avec \\lvert et \\rvert, ou utilisez \\left\\lvert ... \\right\\rvert. Pour les séparateurs d’ensembles en compréhension et les probabilités conditionnelles, utilisez plutôt \\mid ou \\middle|.",
  },
  "big-parentheses": {
    name: "Grandes parenthèses",
    meaning: "Parenthèses fixées au deuxième palier de taille, plus grandes que \\big mais plus petites que \\bigg.",
    usage: "TeX propose quatre tailles manuelles : \\big, \\Big, \\bigg et \\Bigg. \\Big( convient autour d’une fraction isolée ou d’une somme à petites bornes et, contrairement à \\left, il n’examine pas le contenu : il peut donc enjamber des sauts de ligne dans les environnements multilignes et donne des résultats prévisibles. Pour un espacement correct, utilisez \\Bigl( pour ouvrir et \\Bigr) pour fermer, car un \\Big seul produit un atome ordinaire. Les tailles manuelles sont souvent préférables à \\left...\\right dans les arguments de fonctions, où \\left ajoute de l’espace. Les tailles sont fixes et ne rétrécissent donc pas dans les indices.",
  },
  "bigg-parentheses": {
    name: "Très grandes parenthèses",
    meaning: "La plus grande des quatre tailles manuelles de délimiteurs de TeX, pour un contenu très haut comme des fractions imbriquées.",
    usage: "\\Bigg( produit des parenthèses d’environ deux fois et demie la taille normale, adaptées aux fractions empilées, aux grandes intégrales avec bornes ou aux sommes de fractions. Comme la taille est fixe, elle reste prévisible d’une ligne à l’autre d’un align, où \\left et \\right ne peuvent pas être séparés. Utilisez \\Biggl et \\Biggr pour l’espacement correct à l’ouverture et à la fermeture. Si le contenu est encore plus haut, \\left( ... \\right) peut dépasser \\Bigg grâce à des pièces extensibles. L’ordre du plus petit au plus grand est \\big, \\Big, \\bigg, \\Bigg.",
  },
  "left-delimiter-with-invisible-right": {
    name: "Délimiteur gauche avec fermeture invisible",
    meaning: "N’affiche qu’une parenthèse gauche redimensionnable ; \\right. est un délimiteur fermant invisible qui complète la paire.",
    usage: "Tout \\left doit être apparié à un \\right, et la forme avec point \\right. permet de fermer le groupe sans rien imprimer. C’est utile quand une expression entre parenthèses se poursuit sur une autre ligne d’un align (ouvrez avec \\left( sur une ligne, fermez avec \\right. et recommencez avec \\left. ... \\right) sur la suivante), ou pour des accolades d’un seul côté. Les tailles des deux moitiés sont calculées indépendamment : ajoutez un \\vphantom du contenu haut pour les égaliser. Pour les fonctions définies par morceaux, l’environnement cases est plus propre que \\left\\{ ... \\right.",
  },
  "right-delimiter-with-invisible-left": {
    name: "Délimiteur droit avec ouverture invisible",
    meaning: "N’imprime qu’une parenthèse fermante redimensionnable ; \\left. sert de partenaire ouvrant invisible.",
    usage: "\\left. est l’ouverture invisible qui permet à \\right) de s’adapter au contenu. Un usage courant est la barre d’évaluation \\left. \\frac{df}{dx} \\right|_{x=0}, où seul le trait vertical de droite doit apparaître et s’étirer. Il sert aussi à terminer une parenthèse ouverte sur une ligne précédente d’une équation multiligne. Comme chaque moitié est dimensionnée séparément, insérez \\vphantom{...} avec l’élément le plus haut de l’autre ligne pour égaliser les hauteurs. Le point lui-même n’est pas imprimé, mais il ajoute la petite espace du délimiteur nul.",
  },
  "half-open-interval-brackets": {
    name: "Délimiteurs d’intervalle semi-ouvert",
    meaning: "Associe un crochet gauche à une parenthèse droite, la notation d’un intervalle semi-ouvert.",
    usage: "\\left et \\right n’ont pas à être de même forme : \\left[ ... \\right) écrit l’intervalle semi-ouvert [a, b), fermé en a et ouvert en b, courant en probabilités (les fonctions de répartition sont continues à droite sur [x, \\infty)) et en théorie de la mesure. Les paires mixtes permettent aussi (a, b], écrit \\left( ... \\right]. Pour des intervalles simples, [0, 1) sans \\left/\\right suffit et reste plus propre. Certains ouvrages européens utilisent plutôt des crochets retournés, comme dans [a, b[, que vous pouvez taper directement.",
  },
};

export default text;
