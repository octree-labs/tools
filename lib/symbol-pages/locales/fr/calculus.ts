import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/calculus/<slug>. */
const text: SymbolPageTranslations = {
  "integral": {
    name: "Intégrale",
    meaning: "Trace le signe intégrale, utilisé pour les primitives et les intégrales définies comme l’aire sous une courbe.",
    usage: "Écrivez les bornes en indice et en exposant : \\int_a^b f(x)\\,dx donne une intégrale définie, et par défaut les bornes se placent à côté du signe en style hors texte. Ajoutez \\limits juste après \\int pour les empiler au-dessus et au-dessous, un style que préfèrent certains ouvrages de physique. Placez une espace fine \\, avant la différentielle pour que dx ne touche pas l’intégrande. Pour les intégrales répétées, \\int\\int laisse un écart disgracieux ; utilisez \\iint ou \\iiint, qui resserrent automatiquement l’espacement. En mode mathématique en ligne, le signe rétrécit nettement : les intégrales longues ou imbriquées se lisent donc mieux dans un environnement hors texte.",
  },
  "double-integral": {
    name: "Intégrale double",
    meaning: "Signe d’intégrale double, pour intégrer une fonction de deux variables sur un domaine plan.",
    usage: "Une intégrale double apparaît dès que l’on intègre sur une surface, comme dans \\iint_D f(x,y)\\,dA pour une masse, pour une probabilité sur une densité jointe ou pour un flux à travers une surface. Taper \\int\\int à la main produit deux signes trop espacés ; \\iint les rapproche en une paire compacte. Placez le domaine dans un seul indice, \\iint_{D}, plutôt que de répartir les bornes sur les deux signes. Si vous avez besoin de bornes distinctes pour chaque variable, écrivez plutôt \\int_a^b\\!\\int_c^d, car la commande combinée n’accepte qu’un seul jeu de bornes. L’espace fine négative \\! empêche ces paires construites à la main de s’écarter.",
  },
  "triple-integral": {
    name: "Intégrale triple",
    meaning: "Signe d’intégrale triple, utilisé pour intégrer sur un solide de l’espace à trois dimensions.",
    usage: "Les intégrales de volume comme \\iiint_V \\rho\\,dV pour la masse totale, ou le membre de gauche du théorème de flux-divergence \\iiint_V \\nabla\\cdot\\mathbf{F}\\,dV, utilisent ce symbole. Comme \\iint, il rapproche les trois signes davantage que \\int\\int\\int, si bien que le résultat se lit comme un seul opérateur. Le domaine se place dans un seul indice ; pour des bornes itérées explicites sur chaque variable, enchaînez plutôt des commandes \\int séparées. Il existe aussi \\iiiint pour quatre signes et \\idotsint, qui trace deux signes séparés par des points pour une intégrale multiple d’ordre n. En coordonnées sphériques, n’oubliez pas le jacobien : dV = r^2\\sin\\theta\\,dr\\,d\\theta\\,d\\phi.",
  },
  "contour-integral": {
    name: "Intégrale curviligne fermée",
    meaning: "Signe intégrale muni d’un petit cercle, indiquant une intégration le long d’une courbe fermée.",
    usage: "L’analyse complexe en fait un usage intensif : le théorème intégral de Cauchy affirme que \\oint_\\gamma f(z)\\,dz = 0 pour f holomorphe, et le théorème des résidus évalue ces intégrales comme 2\\pi i fois une somme de résidus. En physique, elle apparaît dans la circulation et dans les lois d’Ampère et de Faraday, par exemple \\oint_C \\mathbf{B}\\cdot d\\boldsymbol{\\ell}. Nommez le contour en indice ; \\oint_{\\partial S} désigne le bord d’une surface. Une intégrale sur une surface fermée, avec un cercle sur deux signes, ne fait pas partie des commandes standard : beaucoup d’auteurs écrivent simplement \\iint_{\\partial V} en précisant que la surface est fermée.",
  },
  "derivative": {
    name: "Dérivée",
    meaning: "Notation de Leibniz pour l’opérateur de dérivation par rapport à x, construite avec une fraction.",
    usage: "\\frac{d}{dx} donne la forme opérateur employée dans des règles comme \\frac{d}{dx}\\sin x = \\cos x, tandis que \\frac{dy}{dx} désigne la dérivée d’une variable dépendante. Beaucoup de guides de style composent le d de la différentielle en romain, \\mathrm{d}, pour le distinguer d’une variable nommée d ; une macro comme \\newcommand{\\diff}{\\mathrm{d}} garantit la cohérence. Dans le texte courant, \\frac rétrécit à une taille minuscule : préférez-y \\tfrac ou la forme avec barre oblique dy/dx. Pour les ordres supérieurs, écrivez \\frac{d^2y}{dx^2}, avec l’exposant sur le d au numérateur mais sur le x au dénominateur.",
  },
  "partial-derivative-operator": {
    name: "Opérateur de dérivée partielle",
    meaning: "Opérateur de dérivée partielle par rapport à x, toutes les autres variables étant fixées.",
    usage: "Le calcul à plusieurs variables et les EDP en regorgent : l’équation de la chaleur \\frac{\\partial u}{\\partial t} = k\\frac{\\partial^2 u}{\\partial x^2}, les gradients et les matrices jacobiennes l’utilisent tous. Le \\partial arrondi le distingue du d ordinaire de \\frac{d}{dx}, réservé aux fonctions d’une seule variable. Les dérivées croisées s’écrivent \\frac{\\partial^2 f}{\\partial x\\,\\partial y}, avec une espace fine entre les facteurs du dénominateur. Quand les fractions s’accumulent, l’abréviation en indice \\partial_x f ou f_x est une alternative compacte, courante en physique et dans les longs systèmes d’EDP où les fractions empilées feraient exploser l’interligne.",
  },
  "limit": {
    name: "Limite",
    meaning: "Opérateur de limite, avec la condition x \\to a écrite en dessous.",
    usage: "Comme \\lim est un opérateur prédéfini, il est composé en romain droit et place son indice en dessous en mode hors texte, comme dans \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1. En ligne, l’indice passe sur le côté pour économiser de la hauteur ; forcez-le en dessous avec \\lim\\limits_{x\\to a} seulement si la hauteur supplémentaire est acceptable. Les limites à gauche et à droite s’écrivent x \\to a^+ ou x \\to a^-, et les limites à l’infini x \\to \\infty. Les opérateurs voisins \\limsup et \\liminf se comportent de la même façon. Utilisez \\to pour la flèche plutôt qu’un trait d’union suivi d’un signe supérieur, qui s’imprimeraient comme deux symboles distincts.",
  },
  "summation": {
    name: "Somme",
    meaning: "Signe somme avec un indice allant de n = 1 à l’infini, la forme d’une série.",
    usage: "Les séries comme le problème de Bâle \\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6} ou la série harmonique divergente s’écrivent ainsi. En mode hors texte, les bornes s’empilent au-dessus et au-dessous d’un grand sigma ; en ligne, elles passent à droite d’un sigma plus petit, ce qui garde un interligne régulier. Ajoutez \\limits si vous voulez des bornes empilées en ligne, ou \\displaystyle avec parcimonie. N’utilisez pas la lettre grecque \\Sigma à la place : c’est une lettre de taille ordinaire, pas un opérateur, et elle ne reçoit pas correctement les bornes. La convergence s’énonce souvent à l’aide des sommes partielles, S_N = \\sum_{n=1}^{N} a_n.",
  },
  "product": {
    name: "Produit",
    meaning: "Opérateur produit pour n allant de 1 à l’infini, utilisé pour écrire des produits infinis.",
    usage: "Des résultats classiques comme le produit eulérien de la fonction zêta et le produit de Wallis pour \\pi s’écrivent avec lui. Comme pour \\sum, les bornes se placent sous et sur l’opérateur en style hors texte, et sur le côté en ligne. Ne le confondez pas avec \\Pi, la majuscule grecque, de forme semblable mais de taille ordinaire, qui reçoit les bornes comme de simples indices. Un produit infini est dit convergent lorsque ses produits partiels tendent vers une limite non nulle ; les auteurs écrivent donc souvent \\prod_{n=1}^{\\infty}(1+a_n) accompagné de la condition \\sum |a_n| < \\infty, qui garantit la convergence.",
  },
  "differential": {
    name: "Différentielle",
    meaning: "Différentielle de x, qui clôt une intégrale et désigne la variable d’intégration.",
    usage: "Tapé simplement dx, le d sort en italique et colle à l’intégrande : la correction habituelle est une espace fine, \\int f(x)\\,dx. La norme ISO et de nombreuses revues composent le d en romain avec \\mathrm{d}x ; une macro comme \\newcommand{\\dd}{\\mathrm{d}} garantit la cohérence dans tout l’article. Dans les intégrales multiples, séparez les différentielles par des espaces fines, dx\\,dy, ou abrégez-les en dA ou dV. La même différentielle apparaît dans les dérivées de Leibniz \\frac{dy}{dx} et dans les formes différentielles, où les produits s’écrivent dx \\wedge dy et où l’ordre compte, car le produit extérieur est antisymétrique.",
  },
  "prime-derivative": {
    name: "Dérivée avec prime",
    meaning: "Notation de Lagrange avec prime pour la dérivée première de f évaluée en x.",
    usage: "Une apostrophe en mode mathématique produit un prime en exposant : f' est donc un raccourci pour f^{\\prime}. La notation avec prime est compacte pour les fonctions d’une variable, comme dans le théorème des accroissements finis f'(c) = \\frac{f(b)-f(a)}{b-a}. Si vous avez aussi besoin d’un exposant, écrivez f'^2, qui combine les deux en un seul exposant, ou regroupez (f'(x))^2 ; écrire f^2' provoque une erreur d’exposant double. Évitez de coller une apostrophe typographique, qui ne devient pas un prime, et évitez un \\prime isolé hors d’un exposant, qui s’imprime en pleine taille sur la ligne de base. En physique, un prime peut aussi marquer une coordonnée transformée comme x'.",
  },
  "double-prime": {
    name: "Double prime",
    meaning: "Dérivée seconde de f en x en notation avec primes, qui décrit la concavité ou l’accélération.",
    usage: "Deux apostrophes en mode mathématique se combinent en un seul exposant à deux primes, équivalent à f^{\\prime\\prime}. Le critère de la dérivée seconde l’utilise : si f'(c) = 0 et f''(c) > 0, alors c est un minimum local. En mécanique, x''(t) donne l’accélération, même si la forme pointée \\ddot{x} est préférée pour les dérivées par rapport au temps. Trois primes f''' restent lisibles, mais au-delà passez à f^{(4)}(x), avec l’ordre entre parenthèses pour ne pas le confondre avec une puissance. Ne tapez jamais un guillemet droit double à la place de deux apostrophes : il s’affiche avec un glyphe complètement différent.",
  },
  "approaches": {
    name: "Flèche « tend vers »",
    meaning: "Flèche vers la droite qui se lit « tend vers » dans les limites ou « va de… dans » entre ensembles.",
    usage: "Elle a un double rôle : dans les limites, x \\to 0 ou n \\to \\infty ; dans les signatures de fonctions, f\\colon X \\to Y. \\to est simplement un alias de \\rightarrow, le résultat est donc identique ; choisissez celui qui se lit le mieux dans le source. Ne la confondez pas avec \\mapsto, qui indique l’image d’un élément particulier (x \\mapsto x^2), ni avec \\longrightarrow, une flèche plus longue pour les formules hors texte. Pour les modes de convergence, décorez-la : \\xrightarrow{d} pour la convergence en loi, ou empilez une étiquette avec \\overset{p}{\\to}. Elle a l’espacement d’une relation : inutile d’ajouter des espaces à la main autour.",
  },
  "evaluated-at": {
    name: "Barre d’évaluation",
    meaning: "Barre verticale d’évaluation avec bornes, montrant une primitive évaluée entre a et b.",
    usage: "Après une intégration, écrire F(x)\\Big|_{a}^{b} = F(b) - F(a) est l’abréviation standard issue du théorème fondamental de l’analyse. \\Big fixe la barre à une taille agrandie, qui convient aux fractions ordinaires ; pour des expressions plus hautes, utilisez \\bigg| ou associez \\left. à \\right|_{a}^{b} pour que la barre grandisse selon ce qui la précède. Certains auteurs préfèrent les crochets, \\Big[ F(x) \\Big]_a^b, qui ne laissent aucun doute sur la partie évaluée. Une simple | sans taille est trop courte et colle les bornes contre la primitive, surtout après une fraction.",
  },
};

export default text;
