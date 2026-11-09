import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/quantifiers/<slug>. */
const text: SymbolPageTranslations = {
  "unique-exists": {
    name: "Quantificateur d’existence unique",
    meaning: "Il existe exactement un : le quantificateur existentiel suivi d’un point d’exclamation pour exiger l’unicité.",
    usage: "Les énoncés d’unicité, comme l’existence d’une solution unique à un problème de Cauchy ou d’un unique élément neutre dans un groupe, s’écrivent \\exists! x. En mode mathématique TeX, le point d’exclamation est un symbole fermant, si bien que \\exists! x est correctement espacé, même si certains auteurs ajoutent \\, avant la variable pour plus de clarté. Formellement, \\exists! x\\, P(x) abrège \\exists x\\,(P(x) \\wedge \\forall y\\,(P(y) \\to y = x)). Évitez \\exists_1, que certains lecteurs interprètent comme une variable indicée. Dans le texte, « il existe un unique » se lit souvent mieux que le symbole.",
  },
  "for-all-x": {
    name: "Quantificateur universel sur x",
    meaning: "Quantificateur universel appliqué à x, affirmant que l’énoncé qui suit est vrai pour toute valeur de x.",
    usage: "Les définitions de la continuité, les axiomes de groupe et les principes de récurrence commencent tous par \\forall x. Le symbole \\forall est un atome mathématique ordinaire, donc TeX n’insère aucune espace après la variable ; ajouter \\, ou un deux-points, comme dans \\forall x\\, P(x) ou \\forall x : P(x), rend les longues formules bien plus lisibles. Certains auteurs placent le quantificateur après l’énoncé, en toutes lettres (« pour tout x »), ce qui est plus doux dans le texte. N’employez pas \\forall dans une phrase courante comme abréviation de « pour tout », sauf si votre public attend ce raccourci.",
  },
  "exists-x": {
    name: "Quantificateur existentiel sur x",
    meaning: "Quantificateur existentiel liant x, affirmant qu’au moins une valeur de x rend l’énoncé vrai.",
    usage: "Parmi les usages typiques figurent la définition de la limite (\\exists \\delta > 0), la surjectivité (\\forall y\\, \\exists x : f(x) = y) et les témoins en logique. L’ordre compte : \\forall y \\exists x diffère de \\exists x \\forall y, écrivez donc les suites de quantificateurs avec soin. Sa forme négative \\nexists existe comme symbole à part entière pour « il n’existe pas ». Comme \\forall, \\exists ne reçoit aucune espace automatique après la variable liée : ajoutez une espace fine ou un deux-points avant le prédicat. Pour l’unicité, ajoutez un point d’exclamation pour obtenir \\exists!.",
  },
  "for-all-in-set": {
    name: "Quantificateur universel borné",
    meaning: "Quantificateur universel borné : l’énoncé doit être vrai pour tout élément x de l’ensemble A.",
    usage: "Restreindre le quantificateur à un ensemble, comme dans \\forall x \\in A, est un raccourci pour \\forall x\\,(x \\in A \\to P(x)), et c’est ainsi qu’écrivent en pratique la plupart des mathématiciens. \\in a l’espacement d’une relation, donc l’expression s’espace d’elle-même ; séparez-la simplement du prédicat par une virgule, un deux-points ou \; pour la lisibilité. Avec plusieurs variables, on peut écrire \\forall x, y \\in A au lieu de répéter le quantificateur. Ne confondez pas \\in avec \\epsilon ou \\varepsilon, qui se ressemblent dans certaines polices mais sont des lettres, et non la relation d’appartenance.",
  },
  "exists-in-set": {
    name: "Quantificateur existentiel borné",
    meaning: "Quantificateur existentiel borné : un certain élément x de A vérifie la condition qui suit.",
    usage: "Cette forme compacte remplace \\exists x\\,(x \\in A \\wedge P(x)) et revient sans cesse en analyse, par exemple pour la densité des rationnels : entre deux réels quelconques, \\exists q \\in \\mathbb{Q}. La négation de \\exists x \\in A\\, P(x) est \\forall x \\in A\\, \\neg P(x), une règle à garder en tête quand on nie des définitions. Utilisez \\nexists x \\in A pour « aucun élément de A ». Placez un deux-points, « tel que » ou \; avant le prédicat pour que le lecteur voie où s’arrête le quantificateur.",
  },
  "such-that-colon": {
    name: "Deux-points « tel que »",
    meaning: "Deux-points lu « tel que » dans les énoncés quantifiés et la notation en compréhension, séparant une variable de sa condition.",
    usage: "En mode mathématique, un deux-points simple est traité comme une relation et reçoit la même espace épaisse des deux côtés, ce qui convient à \\{x : x > 0\\} et à \\forall x : P(x). Pour la signature d’une fonction, utilisez plutôt \\colon, qui a l’espacement d’une ponctuation : f\\colon A \\to B a un bon rendu, alors que f : A \\to B laisse un vide avant le deux-points. Pour les définitions, := formé de deux caractères peut paraître mal aligné verticalement ; un symbole de définition dédié, fourni par un paquet d’extension, corrige cela. Certains auteurs préfèrent \\mid ou une barre verticale dans la notation en compréhension ; choisissez-en un et restez cohérent.",
  },
  "set-builder": {
    name: "Notation en compréhension",
    meaning: "Notation en compréhension : l’ensemble de tous les x pour lesquels la propriété P(x) est vraie, écrit avec des accolades et un séparateur.",
    usage: "En mode mathématique, les accolades doivent être échappées en \\{ et \\}, sinon elles ne font que grouper et disparaissent du résultat. \\mid est une relation et reçoit donc l’espace voulue des deux côtés, contrairement à une | seule, qui est un symbole ordinaire et tasse les lettres. Lorsque la condition contient des fractions ou des éléments hauts, dimensionnez le tout ensemble : \\left\\{ x \;\\middle|\; \\frac{x}{2} \\in \\mathbb{Z} \\right\\}. Le deux-points fonctionne tout aussi bien comme séparateur et évite toute confusion lorsque la condition elle-même contient des valeurs absolues.",
  },
  "quantified-statement": {
    name: "Énoncé à quantificateurs imbriqués",
    meaning: "Une formule à quantificateurs imbriqués : pour tout x, il existe un y rendant P(x, y) vrai, y pouvant dépendre de x.",
    usage: "Ce schéma sous-tend les définitions epsilon-delta et des énoncés comme « tout entier a un successeur ». Inverser l’ordre en \\exists y \\forall x donne une affirmation bien plus forte, un seul y valable pour tous les x, et confondre les deux est une erreur classique dans les démonstrations. Le deux-points sépare le préfixe de quantificateurs de la matrice de la formule ; si votre convention pour le deux-points entre en conflit avec la notation des fonctions ailleurs, utilisez plutôt un point ou des crochets. Pour la lisibilité des préfixes longs, ajoutez \\, entre les blocs de quantificateurs, ou écrivez chacun dans sa propre locution : pour tout x, il existe y.",
  },
};

export default text;
