import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/combinatorics/<slug>. */
const text: SymbolPageTranslations = {
  "combination-ncr": {
    name: "Combinaison (nCr)",
    meaning: "Nombre de façons de choisir k éléments parmi n sans tenir compte de l’ordre, qui se lit « k parmi n ».",
    usage: "Sa valeur est C(n, k) = \\frac{n!}{k!(n-k)!}, identique au coefficient binomial \\binom{n}{k}, notation préférée dans la plupart des textes mathématiques. \\binom adapte sa taille au contexte ; \\dbinom impose la taille hors texte et \\tbinom la taille du texte. Évitez en LaTeX la syntaxe TeX de base {n \\choose k}, contre laquelle amsmath met en garde. Parmi les autres notations figurent nCr, {}^nC_k et C^k_n, cette dernière courante dans les textes français avec les indices inversés : vérifiez donc la convention. La formule de Pascal, C(n, k) = C(n-1, k-1) + C(n-1, k), engendre le triangle de Pascal.",
  },
  "permutation-npr": {
    name: "Arrangement (nPr)",
    meaning: "Nombre de dispositions ordonnées de k éléments choisis parmi n éléments distincts, aussi appelé arrangements de k parmi n.",
    usage: "Les arrangements dénombrent les sélections ordonnées : P(n, k) = \\frac{n!}{(n-k)!} = n(n-1)\\cdots(n-k+1), donc P(5, 2) = 20. Ce nombre est égal à la factorielle décroissante (n)_k ou n^{\\underline{k}}, et se relie aux combinaisons par P(n, k) = k!\\,C(n, k). Parmi les autres notations, on rencontre nPr, {}^nP_k et A^k_n (arrangements) dans les textes français et chinois. Comme P(\\cdot) désigne aussi une probabilité, un lecteur peut mal interpréter P(n, k) dans un chapitre de probabilités ; passer à (n)_k ou n^{\\underline{k}} évite ce problème. Utilisez \\cdots entre les facteurs d’un produit.",
  },
  "multinomial": {
    name: "Coefficient multinomial",
    meaning: "Coefficient multinomial : nombre de façons de répartir n éléments en groupes de tailles k_1 à k_m, dont la somme vaut n.",
    usage: "Sa valeur est n! / (k_1!\\,k_2!\\cdots k_m!), avec k_1 + \\cdots + k_m = n, et il fournit les coefficients de la formule du multinôme, (x_1 + \\cdots + x_m)^n = \\sum \\binom{n}{k_1, \\ldots, k_m} x_1^{k_1}\\cdots x_m^{k_m}. Il dénombre les anagrammes distinctes d’un mot à lettres répétées, par exemple 11!/(4!\\,4!\\,2!\\,1!) pour MISSISSIPPI. La construction réutilise \\binom avec une liste séparée par des virgules dans la partie inférieure ; le coefficient binomial \\binom{n}{k} est le cas particulier \\binom{n}{k, n-k}. Utilisez \\ldots entre des virgules, et non \\cdots.",
  },
  "falling-factorial": {
    name: "Factorielle décroissante",
    meaning: "Factorielle décroissante en notation combinatoire : n(n-1)...(n-k+1), le produit de k facteurs décroissants.",
    usage: "(n)_k dénombre les injections d’un ensemble à k éléments dans un ensemble à n éléments et vaut n!/(n-k)! pour des entiers. Attention : cette notation de type Pochhammer est ambiguë, car pour les fonctions spéciales (a)_n désigne la factorielle croissante. La notation de Knuth, n^{\\underline{k}} pour la décroissante et n^{\\overline{k}} pour la croissante, lève l’ambiguïté et est utilisée dans Concrete Mathematics ; elle s’écrit avec \\underline et \\overline dans l’exposant. Les factorielles décroissantes se convertissent en puissances ordinaires grâce aux nombres de Stirling : x^n = \\sum_k S(n,k)(x)_k. Définissez explicitement votre notation dans l’article.",
  },
  "rising-factorial": {
    name: "Factorielle croissante",
    meaning: "Factorielle croissante écrite avec un exposant entre parenthèses : n(n+1)...(n+k-1).",
    usage: "Cette notation, courante en combinatoire et en probabilités, désigne la factorielle croissante n^{(k)} = n(n+1)\\cdots(n+k-1) = \\Gamma(n+k)/\\Gamma(n). Elle est ambiguë : en analyse, f^{(k)} est la dérivée k-ième, et certains auteurs emploient x^{(k)} pour la factorielle décroissante. La notation de Knuth n^{\\overline{k}} ou le symbole de Pochhammer des fonctions spéciales (n)_k sont des alternatives, bien que ce dernier entre en conflit avec la factorielle décroissante combinatoire. Les parenthèses doivent se trouver à l’intérieur des accolades de l’exposant, ^{(k)}. Les factorielles croissantes dénombrent les placements ordonnés de k boules dans n tubes ordonnés.",
  },
  "stirling-first-kind": {
    name: "Nombre de Stirling de première espèce",
    meaning: "Nombre de Stirling non signé de première espèce : nombre de permutations de n éléments ayant exactement k cycles, en notation à crochets.",
    usage: "\\genfrac prend six arguments : délimiteur gauche, délimiteur droit, épaisseur du trait, style, numérateur, dénominateur. Fixer l’épaisseur à 0pt supprime la barre de fraction et donne la notation à crochets superposés de Concrete Mathematics. Ces nombres vérifient la récurrence {n+1 \\brack k} = n {n \\brack k} + {n \\brack k-1}, et leur somme sur k vaut n!. Plutôt que de répéter l’appel à six arguments, définissez une macro comme \\newcommand{\\stirlingI}[2]{\\genfrac{[}{]}{0pt}{}{#1}{#2}}. Le quatrième argument vide laisse la taille suivre le contexte ; utilisez 0 pour le style hors texte ou 1 pour le style texte.",
  },
  "stirling-second-kind": {
    name: "Nombre de Stirling de seconde espèce",
    meaning: "Nombre de Stirling de seconde espèce : nombre de façons de partitionner un ensemble à n éléments en k blocs non vides, en notation à accolades.",
    usage: "Ici, \\genfrac dessine les accolades échappées \\{ et \\} comme délimiteurs avec une barre de 0pt, ce qui produit la notation à accolades popularisée par Knuth. Ces nombres vérifient S(n+1, k) = k\\,S(n, k) + S(n, k-1), ont pour somme sur k le nombre de Bell B_n, et convertissent les puissances en factorielles décroissantes : x^n = \\sum_k {n \\brace k}(x)_k. Comme les accolades doivent être échappées, une barre oblique inverse oubliée est l’erreur de compilation habituelle. Encapsulez-le dans une macro comme \\stirlingII{n}{k}. La notation alternative S(n, k) est plus simple à taper et courante dans les textes d’informatique.",
  },
  "bell-number": {
    name: "Nombre de Bell",
    meaning: "Nombre de Bell B_n : nombre total de façons de partitionner un ensemble de n éléments en blocs non vides.",
    usage: "Les nombres de Bell commencent par 1, 1, 2, 5, 15, 52, 203 et sont égaux à la somme des nombres de Stirling de seconde espèce, B_n = \\sum_k S(n, k). Ils vérifient B_{n+1} = \\sum_k \\binom{n}{k} B_k et la formule de Dobinski B_n = \\frac{1}{e}\\sum_{k \\geq 0} \\frac{k^n}{k!}. Un conflit de notation à surveiller : B_n désigne aussi les nombres de Bernoulli, qui apparaissent dans la formule d’Euler-Maclaurin et les valeurs de la fonction zêta, si bien que les analystes devront peut-être renommer l’un des deux. Les accolades sont nécessaires lorsque l’indice est une expression, comme dans B_{n+1}. Ce sont les moments d’une loi de Poisson de paramètre 1.",
  },
  "fibonacci": {
    name: "Nombre de Fibonacci",
    meaning: "Nombre de Fibonacci F_n, défini par F_0 = 0, F_1 = 1 et F_n = F_{n-1} + F_{n-2}.",
    usage: "Les nombres de Fibonacci commencent par 0, 1, 1, 2, 3, 5, 8, 13 et admettent la forme close F_n = (\\varphi^n - \\psi^n)/\\sqrt{5}, la formule de Binet, où \\varphi = (1+\\sqrt5)/2 est le nombre d’or. Ils dénombrent les pavages d’un plateau 1 \\times n par des carrés et des dominos (il y en a F_{n+1}) et interviennent dans l’analyse de l’algorithme d’Euclide et des tas de Fibonacci. Certains textes commencent l’indexation à F_1 = F_2 = 1 : précisez donc vos valeurs initiales. Utilisez \\varphi pour le nombre d’or comme la plupart des auteurs ; \\phi est la variante droite. Les accolades sont nécessaires pour F_{n-1}.",
  },
  "partition": {
    name: "Nombre de partitions",
    meaning: "Fonction de partition p(n) : nombre de façons d’écrire n comme somme d’entiers strictement positifs, sans tenir compte de l’ordre.",
    usage: "Par exemple, p(4) = 5 car 4 = 3+1 = 2+2 = 2+1+1 = 1+1+1+1. La série génératrice d’Euler est \\sum_n p(n) x^n = \\prod_{k \\geq 1} \\frac{1}{1 - x^k}, et Hardy et Ramanujan ont trouvé l’équivalent asymptotique p(n) \\sim \\frac{1}{4n\\sqrt{3}} e^{\\pi\\sqrt{2n/3}}. Les congruences de Ramanujan incluent p(5k+4) \\equiv 0 \\pmod 5. Le p minuscule entre en conflit avec la notation des densités de probabilité et avec les nombres premiers : définissez-le donc dans les contextes mixtes. Les versions restreintes s’écrivent p_k(n) ou p(n, k) pour les partitions en au plus k parts.",
  },
  "derangement": {
    name: "Nombre de dérangements",
    meaning: "Nombre de dérangements D_n : nombre de permutations de n éléments dans lesquelles aucun élément ne reste à sa position initiale.",
    usage: "D_n dénombre les permutations sans point fixe et commence par 1, 0, 1, 2, 9, 44, 265. Le principe d’inclusion-exclusion donne D_n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}, donc D_n est l’entier le plus proche de n!/e et la probabilité qu’une permutation aléatoire soit un dérangement tend vers 1/e. Parmi les récurrences figure D_n = (n-1)(D_{n-1} + D_{n-2}). L’illustration classique est le problème des chapeaux. Le même nombre s’écrit aussi !n, la sous-factorielle ; D_n est plus lisible dans le texte courant. Notez que D_n désigne aussi le groupe diédral en algèbre : précisez si les deux apparaissent.",
  },
  "double-factorial": {
    name: "Double factorielle",
    meaning: "Double factorielle : produit de tous les entiers de n jusqu’à 1 ou 2 qui ont la même parité que n.",
    usage: "Pour n impair, n!! = n(n-2)\\cdots 3 \\cdot 1, donc 7!! = 105 ; pour n pair, le produit s’arrête à 2, donc 8!! = 384. Ce n’est pas (n!)!, une erreur de lecture fréquente : une courte définition aide. Parmi les identités figurent (2n)!! = 2^n n! et (2n-1)!! = \\frac{(2n)!}{2^n n!}, qui dénombre les couplages parfaits sur 2n points et apparaît dans les moments gaussiens, \\mathbb{E}[X^{2n}] = (2n-1)!! pour une loi normale centrée réduite. En TeX, ! est un symbole fermant, donc n!! ne nécessite aucun espacement particulier. Par convention, 0!! = (-1)!! = 1.",
  },
  "subfactorial": {
    name: "Sous-factorielle",
    meaning: "Sous-factorielle de n, notation avec point d’exclamation préfixé pour le nombre de dérangements de n objets.",
    usage: "!n est égal à D_n, le nombre de permutations sans point fixe : !4 = 9 et !n = \\left\\lfloor n!/e + 1/2 \\right\\rfloor pour n \\geq 1. Le point d’exclamation préfixé est compact mais facile à mal lire, surtout après une variable, où m!n ressemble à factorielle m fois n. Écrire D_n, ou ajouter un regroupement explicite, évite ce problème. En TeX, le point d’exclamation appartient à la classe des fermants, donc après une relation binaire comme = il se compose sans espace supplémentaire, comme on le souhaite. Certains auteurs utilisent le point d’exclamation inversé ou n\\text{¡}, mais cette notation est rare.",
  },
  "pochhammer": {
    name: "Symbole de Pochhammer",
    meaning: "Symbole de Pochhammer : pour les fonctions spéciales, la factorielle croissante a(a+1)...(a+n-1).",
    usage: "Dans la littérature sur les fonctions hypergéométriques et spéciales, (a)_n = a(a+1)\\cdots(a+n-1) = \\Gamma(a+n)/\\Gamma(a), avec (a)_0 = 1. C’est la brique de base des séries {}_pF_q, par exemple {}_2F_1(a,b;c;z) = \\sum_n \\frac{(a)_n (b)_n}{(c)_n} \\frac{z^n}{n!}. Les combinatoriciens utilisent le même (x)_n pour la factorielle décroissante : c’est l’un des conflits de notation les plus connus ; la DLMF et la plupart des références sur les fonctions spéciales emploient le sens croissant. La notation de Knuth a^{\\overline{n}} est sans ambiguïté si votre public est mixte. Les parenthèses sont ici ordinaires, dimensionnées selon l’argument.",
  },
};

export default text;
