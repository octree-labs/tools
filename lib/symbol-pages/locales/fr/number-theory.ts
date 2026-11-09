import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/number-theory/<slug>. */
const text: SymbolPageTranslations = {
  "does-not-divide": {
    name: "Symbole « ne divise pas »",
    meaning: "Barre verticale barrée indiquant qu'un entier ne divise pas un autre.",
    usage: "Les arithméticiens écrivent 3 \\nmid 10 et l'emploient dans des hypothèses comme celle du petit théorème de Fermat : si p \\nmid a, alors a^{p-1} \\equiv 1 \\pmod p. C'est la négation de \\mid, avec le même espacement de relation ; \\not\\mid produit une barre oblique souvent mal placée, préférez donc \\nmid. Évitez un | ordinaire barré à la main. En informatique, il apparaît dans des conditions sur les pas, les périodes et les tailles de tables de hachage, comme k \\nmid n. Parmi les négations précomposées apparentées figurent \\nparallel et \\nleq.",
  },
  gcd: {
    name: "PGCD (plus grand commun diviseur)",
    meaning: "Plus grand commun diviseur de a et b, le plus grand entier qui divise les deux.",
    usage: "\\gcd est un opérateur prédéfini : il s'imprime en romain droit et, comme \\lim, accepte des bornes en dessous en style display. L'identité de Bézout affirme que \\gcd(a, b) = ax + by pour certains entiers x et y, et a et b sont premiers entre eux lorsque \\gcd(a, b) = 1. Beaucoup d'articles de théorie des nombres omettent le nom et écrivent (a, b), notation compacte mais qui entre en conflit avec les couples et les intervalles ouverts. L'algorithme d'Euclide repose sur \\gcd(a, b) = \\gcd(b, a \\bmod b), où \\bmod donne l'espacement d'un opérateur binaire. Notez que \\gcd affiche l'abréviation anglaise gcd ; les textes français écrivent souvent pgcd. Il n'existe pas de commande prédéfinie équivalente pour le plus petit commun multiple.",
  },
  lcm: {
    name: "PPCM (plus petit commun multiple)",
    meaning: "Plus petit commun multiple de a et b, le plus petit entier strictement positif que les deux divisent.",
    usage: "Contrairement à \\gcd, il n'existe pas de commande \\lcm prédéfinie, c'est pourquoi cette entrée utilise \\text. Une ligne de préambule \\DeclareMathOperator{\\lcm}{lcm} fournit un véritable opérateur à l'espacement assorti ; sinon, utilisez \\operatorname{lcm} en ligne (ou ppcm, l'abréviation française). L'identité \\gcd(a, b)\\cdot\\text{lcm}(a, b) = |ab| relie les deux. Les plus petits communs multiples apparaissent lors de l'addition de fractions de dénominateurs différents, dans la période de cycles combinés et dans l'ordre d'un élément d'un groupe produit. Certains textes écrivent [a, b] pour le PPCM, en miroir de (a, b) pour le PGCD.",
  },
  modulo: {
    name: "Notation modulo",
    meaning: "« mod n » entre parenthèses placé après une congruence, qui en indique le module.",
    usage: "Écrivez a \\equiv b \\pmod{n} pour exprimer que n divise a - b. \\pmod ajoute les parenthèses et une espace généreuse avant elles, ce qui convient aux congruences en display. Ses commandes sœurs servent d'autres cas : \\bmod est l'opérateur binaire du reste, comme dans a \\bmod n = r ; \\mod donne le mot mod sans parenthèses ; et \\pod ne donne que les parenthèses. Dans le texte courant, la grande espace insérée par \\pmod peut sembler excessive, si bien que certains auteurs passent à \\bmod ou à une macro personnalisée. Les énoncés du théorème des restes chinois enchaînent plusieurs congruences de modules différents.",
  },
  "euler-phi": {
    name: "Indicatrice d'Euler",
    meaning: "Indicatrice d'Euler : le nombre d'entiers de 1 à n premiers avec n, écrite avec le phi bouclé.",
    usage: "Le théorème d'Euler a^{\\varphi(n)} \\equiv 1 \\pmod n pour \\gcd(a, n) = 1 et la formule produit \\varphi(n) = n\\prod_{p \\mid n}(1 - 1/p) en sont les apparitions classiques. \\varphi donne la forme ouverte et bouclée, tandis que \\phi donne la forme d'un cercle traversé par un trait droit ; les deux désignent la même fonction, et le choix relève de la charte typographique. Beaucoup de manuels de théorie des nombres choisissent \\varphi afin de laisser \\phi libre pour d'autres usages, comme le nombre d'or ou un angle. La génération de clés RSA utilise \\varphi(pq) = (p-1)(q-1).",
  },
  "phi-function": {
    name: "Fonction phi",
    meaning: "L'indicatrice d'Euler écrite avec le phi à trait droit plutôt qu'avec la variante bouclée.",
    usage: "De nombreux manuels écrivent l'indicatrice \\phi(n), par exemple \\phi(p) = p - 1 pour un nombre premier p et \\phi(p^k) = p^k - p^{k-1}. Dans la police Computer Modern par défaut, \\phi est un cercle traversé d'un trait vertical, alors que \\varphi est la forme bouclée. Les deux désignent la même fonction : choisissez-en une et restez cohérent. Si le nombre d'or, un angle ou un potentiel apparaît aussi, réservez \\phi à un sens et \\varphi à l'autre. La multiplicativité, \\phi(mn) = \\phi(m)\\phi(n) pour m et n premiers entre eux, est une formule fréquemment affichée.",
  },
  prime: {
    name: "Nombre premier",
    meaning: "p minuscule en italique, la lettre conventionnelle d'un nombre premier en théorie des nombres.",
    usage: "Par convention, p, et q pour un second nombre premier, désignent des nombres premiers, si bien que des énoncés comme « pour tout nombre premier p », ou des sommes et produits indexés par p, n'ont guère besoin d'explication supplémentaire. Le produit eulérien \\zeta(s) = \\prod_p (1 - p^{-s})^{-1} est le cas classique où l'indice parcourt implicitement les nombres premiers. Saisir p en mode mathématique donne la lettre italique ; gardez-la en mode mathématique dans le texte aussi, pour qu'elle corresponde aux formules affichées. Pour éviter toute ambiguïté avec des probabilités ou des p-valeurs, énoncez la convention tôt. Les puissances de nombres premiers s'écrivent p^k, et les nombres p-adiques \\mathbb{Q}_p.",
  },
  "prime-notation": {
    name: "Notation du n-ième nombre premier",
    meaning: "p_n avec indice, qui désigne le n-ième nombre premier : p_1 = 2, p_2 = 3, p_3 = 5.",
    usage: "Les suites de nombres premiers sont indexées ainsi dans des résultats comme la preuve d'Euclide, où p_1 p_2 \\cdots p_n + 1 possède un facteur premier hors de la liste, et dans l'équivalent asymptotique p_n \\sim n\\ln n issu du théorème des nombres premiers. Les indices de plusieurs caractères exigent des accolades, p_{n+1}, sinon seul le n est abaissé. Le postulat de Bertrand devient p_{n+1} < 2p_n. La primorielle, produit des n premiers nombres premiers, s'écrit souvent p_n\\#. La fonction de compte des nombres premiers \\pi(x) est essentiellement la réciproque de n \\mapsto p_n.",
  },
  "legendre-symbol": {
    name: "Symbole de Legendre",
    meaning: "Symbole de Legendre (a/p) : vaut 1, -1 ou 0 selon que a est ou non un résidu quadratique modulo p.",
    usage: "Pour un nombre premier impair p, \\left(\\frac{a}{p}\\right) vaut 1 si a est un carré non nul modulo p, -1 s'il ne l'est pas, et 0 si p \\mid a. La loi de réciprocité quadratique est l'identité célèbre qui relie \\left(\\frac{p}{q}\\right) et \\left(\\frac{q}{p}\\right) via le signe (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}. \\left( \\right) ajuste automatiquement la taille des parenthèses à la fraction. N'utilisez pas \\binom, qui omet la barre de fraction qu'exige le symbole ; \\genfrac{(}{)}{}{}{a}{p} est une alternative équivalente. Le critère d'Euler le calcule comme a^{(p-1)/2} modulo p.",
  },
  "integer-part": {
    name: "Partie entière",
    meaning: "Crochets autour de x, notation ancienne de la partie entière (ou plancher) de x.",
    usage: "La théorie des nombres classique et de nombreux textes d'olympiades écrivent [x] pour le plus grand entier inférieur ou égal à x, comme dans la formule de Legendre donnant l'exposant de p dans n!, qui somme [n/p^k] pour k \\ge 1. L'usage moderne préfère \\lfloor x \\rfloor, sans ambiguïté, car les crochets servent aussi à grouper des expressions, à noter des intervalles fermés et à former des crochets d'Iverson. Si vous conservez [x], définissez-le explicitement. Pour les nombres négatifs, partie entière et troncature diffèrent : \\lfloor -2.5 \\rfloor = -3, alors que la troncature vers zéro donne -2.",
  },
  "fractional-part": {
    name: "Partie fractionnaire",
    meaning: "Partie fractionnaire de x, définie comme x moins sa partie entière, écrite avec des accolades échappées.",
    usage: "Comme les accolades nues ne font que grouper en LaTeX, les accolades visibles doivent être échappées en \\{ et \\}. La partie fractionnaire vérifie x = \\lfloor x \\rfloor + \\{x\\} avec 0 \\le \\{x\\} < 1, et elle apparaît dans les résultats d'équirépartition, comme le théorème de Weyl selon lequel \\{n\\alpha\\} est équiréparti pour \\alpha irrationnel. Les mêmes accolades désignent aussi des ensembles, si bien que \\{x\\} pourrait se lire comme le singleton contenant x ; définissez la notation ou écrivez \\operatorname{frac}(x). Pour des contenus plus hauts, utilisez \\left\\{ ... \\right\\}.",
  },
  "sum-of-divisors": {
    name: "Somme des diviseurs",
    meaning: "Fonction somme des diviseurs : le total de tous les diviseurs positifs de n.",
    usage: "\\sigma(n) = \\sum_{d \\mid n} d, donc \\sigma(6) = 1 + 2 + 3 + 6 = 12. Un nombre est parfait exactement lorsque \\sigma(n) = 2n, et la forme générale \\sigma_k(n) = \\sum_{d \\mid n} d^k inclut le nombre de diviseurs sous la forme \\sigma_0. La fonction est multiplicative, avec \\sigma(p^k) = \\frac{p^{k+1}-1}{p-1} pour les puissances de nombres premiers, ce qui permet de la calculer à partir d'une factorisation. Le \\sigma minuscule désigne aussi l'écart type : une courte remarque aide dans les travaux interdisciplinaires. Le \\Sigma majuscule n'a ici aucun rapport.",
  },
  "mobius-function": {
    name: "Fonction de Möbius",
    meaning: "Fonction de Möbius : vaut 0 si le carré d'un nombre premier divise n, et sinon (-1)^k pour k facteurs premiers.",
    usage: "Son rôle principal est la formule d'inversion de Möbius : si g(n) = \\sum_{d \\mid n} f(d), alors f(n) = \\sum_{d \\mid n} \\mu(d)\\, g(n/d). Elle vérifie aussi \\sum_{d \\mid n} \\mu(d) = 0 pour n > 1, et sa série de Dirichlet est l'inverse de la fonction zêta, \\frac{1}{\\zeta(s)} = \\sum_{n \\ge 1} \\frac{\\mu(n)}{n^s}. La lettre \\mu est très surchargée, désignant une moyenne en statistique et une mesure en analyse : introduisez-la donc explicitement. En mode mathématique, utilisez le \\mu grec, jamais un u latin comme sosie.",
  },
  "number-of-divisors": {
    name: "Nombre de diviseurs",
    meaning: "Fonction de comptage des diviseurs : le nombre de diviseurs positifs de n.",
    usage: "d(n) = \\sum_{d \\mid n} 1, donc d(12) = 6. Pour n = p_1^{a_1}\\cdots p_k^{a_k}, la formule d(n) = (a_1+1)\\cdots(a_k+1) montre qu'elle est multiplicative. On la note aussi couramment \\tau(n) et \\sigma_0(n) : vérifiez donc laquelle utilise votre référence. Le problème des diviseurs de Dirichlet étudie l'ordre moyen, \\sum_{n \\le x} d(n) = x\\ln x + (2\\gamma - 1)x + O(\\sqrt{x}). Attention : la lettre d est aussi la variable de diviseur habituelle dans ces sommes, préférez donc \\tau(n) lorsque les deux apparaîtraient dans une même formule.",
  },
};

export default text;
