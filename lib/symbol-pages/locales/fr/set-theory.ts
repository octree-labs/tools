import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/set-theory/<slug>. */
const text: SymbolPageTranslations = {
  "empty-set-variant": {
    name: "Ensemble vide (variante)",
    meaning: "Variante du symbole de l’ensemble vide : un cercle bien rond barré d’une diagonale, l’ensemble sans aucun élément.",
    usage: "\\varnothing et \\emptyset ont le même sens, l’ensemble vide, mais un aspect différent : en Computer Modern, \\emptyset est un zéro étroit et haut barré, tandis que \\varnothing est un cercle rond barré que beaucoup de mathématiciens préfèrent. Utilisez-en un seul de façon cohérente, par exemple A \\cap B = \\varnothing pour des ensembles disjoints. Ce n’est ni la lettre grecque \\phi ou \\varphi, ni la lettre scandinave \\O : évitez donc de les utiliser à sa place. Certains auteurs redéfinissent \\emptyset en \\varnothing dans le préambule, afin que toutes les occurrences changent d’un coup.",
  },
  "contains": {
    name: "Contient",
    meaning: "Relation d’appartenance inversée : l’ensemble de gauche contient l’élément de droite.",
    usage: "A \\ni x dit la même chose que x \\in A, mais avec l’ensemble en premier, ce qui se lit naturellement dans des tournures comme un voisinage U \\ni x. Des textes anciens et certains logiciens employaient aussi \\ni pour « tel que », bien que \\mid ou un deux-points soient aujourd’hui la norme. \\owns est un alias de \\ni. On le nie avec \\not\\ni. Ne le confondez pas avec la lettre epsilon ni avec un \\in retourné à la main : \\ni est une véritable relation, avec l’espacement correspondant.",
  },
  "not-subset": {
    name: "Non-inclusion",
    meaning: "Signe d’inclusion barré : l’ensemble de gauche n’est pas un sous-ensemble de l’ensemble de droite.",
    usage: "\\not\\subset superpose une barre à \\subset grâce au préfixe générique \\not. Le résultat est acceptable, même si la barre est parfois décentrée ; les glyphes dédiés \\nsubseteq (non inclus ou égal) et \\nsubset, présent dans certains paquets de symboles, ont un meilleur rendu. Comme \\subset lui-même est ambigu entre inclusion stricte et inclusion large, \\nsubseteq est souvent la négation la plus claire. Exemple : \\mathbb{Q} \\not\\subset \\mathbb{Z}, car 1/2 est rationnel mais n’est pas un entier. Placez \\not juste avant la relation, sans espace ni accolades, pour qu’il se combine correctement.",
    example: "\\mathbb{Q} \\not\\subset \\mathbb{Z} \\text{ car } \\tfrac{1}{2} \\notin \\mathbb{Z}",
  },
  "big-union": {
    name: "Grande union",
    meaning: "Grand opérateur de réunion, pour la réunion d’une famille indexée d’ensembles, avec des bornes au-dessus et en dessous.",
    usage: "\\bigcup_{i=1}^{\\infty} A_i écrit une réunion dénombrable, et \\bigcup_{\\alpha \\in I} U_\\alpha une réunion sur un ensemble d’indices, comme pour les recouvrements ouverts. Il se comporte comme \\sum : les bornes se placent en dessous et au-dessus en style hors texte et sur le côté dans le texte, et \\limits les force en dessous en ligne. Ne l’utilisez pas entre deux ensembles : A \\cup B s’écrit avec le \\cup binaire. Les grands opérateurs voisins sont \\bigcap, \\bigsqcup pour les unions disjointes et \\biguplus pour l’union de multiensembles. Les lois de De Morgan l’associent à \\bigcap et aux complémentaires.",
  },
  "big-intersection": {
    name: "Grande intersection",
    meaning: "Grand opérateur d’intersection, pour intersecter une famille indexée d’ensembles.",
    usage: "\\bigcap_{n=1}^{\\infty} (0, 1/n) = \\varnothing est un exemple classique, et en topologie on écrit \\bigcap_{\\alpha} F_\\alpha pour des intersections de fermés. Comme les autres grands opérateurs, ses bornes se placent en dessous et au-dessus en mode hors texte et à côté dans le texte, et il s’agrandit en style hors texte. Pour deux ensembles, utilisez plutôt le \\cap binaire. Les intervalles emboîtés, l’ensemble de Cantor \\bigcap_n C_n et la définition de la tribu engendrée comme intersection de toutes les tribus qui la contiennent l’utilisent tous.",
  },
  "complement": {
    name: "Complémentaire",
    meaning: "Symbole du complémentaire, généralement placé en exposant d’un ensemble pour désigner tous les éléments hors de celui-ci.",
    usage: "A^\\complement désigne le complémentaire de A relativement à un univers, de sorte que A \\cup A^\\complement = U. C’est un symbole ordinaire qui ressemble à un C stylisé. Les alternatives courantes sont A^c, A' et \\overline{A}, mais la barre peut être confondue avec l’adhérence topologique et le prime avec une dérivée : \\complement, lui, est sans ambiguïté. Écrivez-le en exposant ; seul, il apparaît rarement. La loi de De Morgan, (A \\cup B)^\\complement = A^\\complement \\cap B^\\complement, en est un usage classique.",
  },
  "natural-numbers": {
    name: "Entiers naturels",
    meaning: "N ajouré (gras de tableau), le symbole standard de l’ensemble des entiers naturels 1, 2, 3, etc.",
    usage: "L’inclusion de 0 dans \\mathbb{N} varie : la logique et l’informatique commencent généralement à 0, tandis que la théorie des nombres commence souvent à 1 ; précisez donc votre convention ou écrivez \\mathbb{N}_0 ou \\mathbb{Z}_{\\ge 0} et \\mathbb{Z}_{>0}. La police \\mathbb, dans la fonte ajourée standard, ne couvre que les lettres majuscules : \\mathbb{1} ou des minuscules ne s’afficheront pas comme prévu sans un autre paquet de polices. Beaucoup d’auteurs définissent \\newcommand{\\N}{\\mathbb{N}} par concision. Les suites s’écrivent souvent (a_n)_{n \\in \\mathbb{N}}. Les démonstrations par récurrence commencent typiquement par « pour tout n \\in \\mathbb{N} ».",
  },
  "integers": {
    name: "Entiers relatifs",
    meaning: "Z ajouré, l’ensemble de tous les entiers : positifs, négatifs et zéro.",
    usage: "Le Z vient de l’allemand Zahlen. Les constructions courantes incluent le groupe cyclique \\mathbb{Z}/n\\mathbb{Z}, les entiers p-adiques \\mathbb{Z}_p (attention : certains auteurs utilisent plutôt \\mathbb{Z}_n pour le groupe cyclique), le réseau \\mathbb{Z}^n et \\mathbb{Z}[i] pour les entiers de Gauss. Les sous-ensembles s’écrivent avec des indices, comme \\mathbb{Z}_{\\ge 0}. \\mathbb ne fonctionne que sur les majuscules avec les polices standard. Évitez de l’imiter avec le gras \\mathbf{Z}, qui était l’ancienne convention typographique. En théorie des anneaux, \\mathbb{Z} est l’anneau initial, et tout groupe abélien est un \\mathbb{Z}-module.",
  },
  "rational-numbers": {
    name: "Nombres rationnels",
    meaning: "Q ajouré, le corps des nombres rationnels (les fractions d’entiers).",
    usage: "Q signifie quotient. On le trouve dans les extensions de corps comme \\mathbb{Q}(\\sqrt{2}), dans les énoncés de densité, comme la densité de \\mathbb{Q} dans \\mathbb{R}, et en théorie algébrique des nombres avec \\overline{\\mathbb{Q}} pour les nombres algébriques. Les nombres p-adiques s’écrivent \\mathbb{Q}_p. Les rationnels positifs s’écrivent \\mathbb{Q}_{>0} ou \\mathbb{Q}^+. Comme \\mathbb ne couvre que les majuscules, aucun problème ici. Définir \\newcommand{\\Q}{\\mathbb{Q}} économise de la frappe dans les documents riches en algèbre. Sa clôture algébrique est dénombrable, tandis que son complété pour la valeur absolue usuelle donne \\mathbb{R}. Les points rationnels d’une courbe s’écrivent C(\\mathbb{Q}).",
  },
  "real-numbers": {
    name: "Nombres réels",
    meaning: "R ajouré, l’ensemble des nombres réels qui forment la droite numérique continue.",
    usage: "\\mathbb{R}^n est l’espace euclidien, f : \\mathbb{R} \\to \\mathbb{R} une fonction réelle, et \\mathbb{R}_{\\ge 0} ou \\mathbb{R}_+ les réels positifs ou nuls (les conventions diffèrent quant à l’inclusion de 0 dans \\mathbb{R}^+). Les espaces de matrices s’écrivent \\mathbb{R}^{m \\times n}. La droite réelle achevée s’écrit \\overline{\\mathbb{R}} ou [-\\infty, \\infty]. Évitez \\Re, qui imprime un R gothique désignant la partie réelle d’un nombre complexe, et non l’ensemble des réels. Beaucoup d’auteurs définissent une macro courte \\R. Sa complétude, le fait que toute partie bornée admette une borne supérieure, est ce qui le distingue de \\mathbb{Q}.",
  },
  "complex-numbers": {
    name: "Nombres complexes",
    meaning: "C ajouré, le corps des nombres complexes de la forme a + bi, avec a et b réels.",
    usage: "L’analyse complexe travaille avec des fonctions f : \\mathbb{C} \\to \\mathbb{C}, l’algèbre linéaire avec \\mathbb{C}^n et les matrices hermitiennes de \\mathbb{C}^{n \\times n}, et la géométrie algébrique avec les anneaux de polynômes \\mathbb{C}[x]. Le plan épointé s’écrit \\mathbb{C} \\setminus \\{0\\} ou \\mathbb{C}^\\times, et la sphère de Riemann \\hat{\\mathbb{C}} ou \\mathbb{C} \\cup \\{\\infty\\}. Le théorème fondamental de l’algèbre affirme que \\mathbb{C} est algébriquement clos. N’utilisez pas \\mathcal{C}, qui désigne généralement une catégorie ou une classe de fonctions comme C^\\infty. L’espace projectif complexe s’écrit \\mathbb{CP}^n ou \\mathbb{P}^n_\\mathbb{C}.",
  },
  "power-set": {
    name: "Ensemble des parties",
    meaning: "P calligraphique, la notation usuelle de l’ensemble des parties (l’ensemble de tous les sous-ensembles) d’un ensemble.",
    usage: "\\mathcal{P}(A) est l’ensemble des parties, avec |\\mathcal{P}(A)| = 2^{|A|} pour A fini, et le théorème de Cantor affirme qu’il n’existe aucune surjection A \\to \\mathcal{P}(A). Certains auteurs utilisent plutôt \\wp, le p de Weierstrass, ou 2^A. \\mathcal{P} sert aussi pour les mesures de probabilité, les partitions ou la classe P en théorie de la complexité : le contexte compte donc. L’alphabet calligraphique ne couvre que les majuscules. Pour un P plus cursif, une commande de police script comme \\mathscr, fournie par un paquet supplémentaire, est une alternative.",
  },
  "cardinality": {
    name: "Cardinal",
    meaning: "Barres verticales autour d’un ensemble, qui donnent son cardinal : le nombre d’éléments qu’il contient.",
    usage: "Pour les ensembles finis, |A| compte les éléments, comme dans la formule d’inclusion-exclusion |A \\cup B| = |A| + |B| - |A \\cap B| ; pour les ensembles infinis, c’est le nombre cardinal. La même notation désigne la valeur absolue pour les nombres et le déterminant pour les matrices : c’est le contexte qui tranche. Les alternatives incluent \\#A et \\operatorname{card}(A). Pour un espacement qui distingue la gauche de la droite, écrivez \\lvert A \\rvert, et utilisez \\left| ... \\right| autour de contenus hauts comme \\mathcal{P}(\\mathbb{N}). En combinatoire, |A| = |B| pour des ensembles finis se démontre souvent en exhibant une bijection.",
  },
  "aleph": {
    name: "Aleph",
    meaning: "Lettre hébraïque aleph, utilisée pour les cardinaux infinis, à commencer par l’infini dénombrable aleph zéro.",
    usage: "\\aleph_0 est le cardinal de \\mathbb{N}, \\aleph_1 le cardinal suivant, et l’hypothèse du continu affirme que 2^{\\aleph_0} = \\aleph_1. Écrivez les indices sous la forme \\aleph_0 plutôt que \\aleph0. Les autres lettres hébraïques disponibles en mathématiques sont \\beth, \\gimel et \\daleth, les nombres beth \\beth_1 = 2^{\\aleph_0} mesurant le continu. \\aleph est un symbole ordinaire. Ne le confondez pas avec \\alpha ni avec N pour les entiers naturels. L’argument diagonal de Cantor montre que les réels ne sont pas dénombrables, de sorte que leur cardinal dépasse strictement \\aleph_0.",
  },
};

export default text;
