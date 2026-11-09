import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/greek/<slug>. */
const text: SymbolPageTranslations = {
  "alpha": {
    name: "Alpha",
    meaning: "Lettre grecque alpha minuscule, nom par défaut des angles, des seuils de signification, des taux d’apprentissage et des coefficients.",
    usage:
      "En statistique, \\alpha est le seuil de signification d’un test, comme dans \\alpha = 0.05, et le paramètre de forme des lois bêta et gamma. Les physiciens l’emploient pour la constante de structure fine \\alpha \\approx 1/137 et pour les particules alpha. En géométrie, il désigne des angles, souvent aux côtés de \\beta et \\gamma. Il n’existe pas de commande \\Alpha pour la majuscule, car l’alpha majuscule est identique au A latin : écrivez A ou \\mathrm{A}. Veillez à ne pas confondre \\alpha avec le a latin, ni avec le signe de proportionnalité \\propto, dans les polices imitant l’écriture manuscrite.",
    example: "P(\\text{rejeter } H_0 \\mid H_0 \\text{ vraie}) = \\alpha",
  },
  "beta": {
    name: "Bêta",
    meaning: "Lettre grecque bêta minuscule, standard pour les coefficients de régression, les angles et le second paramètre d’une loi.",
    usage:
      "Les modèles de régression s’écrivent y = \\beta_0 + \\beta_1 x + \\varepsilon, et \\hat{\\beta} désigne les coefficients estimés. Dans les tests d’hypothèses, \\beta est le risque de deuxième espèce, de sorte que la puissance vaut 1 - \\beta. La physique l’utilise pour v/c en relativité et pour la température inverse \\beta = 1/(k_B T). En finance, le bêta d’une action mesure sa sensibilité au marché. Il n’existe pas de commande \\Beta, car le bêta majuscule ressemble au B latin. Le eszett allemand, ß, est un caractère différent, écrit \\ss, qu’il ne faut pas substituer à \\beta.",
  },
  "gamma": {
    name: "Gamma",
    meaning: "Lettre grecque gamma minuscule, utilisée pour la constante d’Euler-Mascheroni, le facteur de Lorentz et les facteurs d’actualisation.",
    usage:
      "\\gamma est le facteur de Lorentz \\gamma = 1/\\sqrt{1 - v^2/c^2} en relativité restreinte et la constante d’Euler-Mascheroni \\gamma \\approx 0.5772 en analyse. L’apprentissage par renforcement l’emploie comme facteur d’actualisation dans \\sum_t \\gamma^t r_t, et la physique pour les rayons gamma et les photons. En géométrie, il désigne souvent le troisième angle d’un triangle après \\alpha et \\beta, et en analyse complexe, \\gamma est une courbe ou un lacet. Notez que la majuscule \\Gamma, qui désigne la fonction gamma, est une commande distincte : n’écrivez pas \\Gamma pour la constante.",
  },
  "gamma-upper": {
    name: "Gamma majuscule",
    meaning: "Lettre grecque Gamma majuscule, surtout connue pour la fonction gamma Γ(z) qui prolonge la factorielle.",
    usage:
      "\\Gamma(n) = (n-1)! pour les entiers positifs, et \\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}\\,dt en général. Elle note aussi les symboles de Christoffel \\Gamma^k_{ij} en géométrie différentielle, la loi gamma, et un contexte de typage \\Gamma \\vdash e : \\tau en théorie des types. Les lettres grecques majuscules sont droites par défaut en LaTeX ; pour une version italique, utilisez \\varGamma. En théorie des graphes, \\Gamma(v) désigne parfois le voisinage d’un sommet. Ne la confondez pas avec un L latin retourné, ni avec \\gamma, la constante minuscule.",
  },
  "delta": {
    name: "Delta",
    meaning: "Lettre grecque delta minuscule, utilisée pour les petites quantités, la distribution de Dirac et le symbole de Kronecker.",
    usage:
      "L’analyse l’associe à epsilon dans les définitions de limite et de continuité, comme dans |x - a| < \\delta. La distribution de Dirac \\delta(x) vérifie \\int f(x)\\delta(x - a)\\,dx = f(a), et le symbole de Kronecker \\delta_{ij} vaut 1 si i = j et 0 sinon. Le calcul des variations écrit \\delta S pour une variation, et la chimie utilise \\delta+ et \\delta- pour les charges partielles. Elle diffère de \\partial, le signe bouclé de la dérivée partielle, et de la majuscule \\Delta, employée pour les variations finies.",
  },
  "delta-upper": {
    name: "Delta majuscule",
    meaning: "Lettre grecque Delta majuscule, utilisée pour la variation finie d’une grandeur, le laplacien et les discriminants.",
    usage:
      "La physique et la chimie écrivent \\Delta x pour un déplacement et \\Delta H pour une variation d’enthalpie, comme dans \\Delta G = \\Delta H - T\\Delta S. En analyse, \\Delta est l’opérateur de Laplace \\Delta u = \\nabla^2 u, et en algèbre, le discriminant \\Delta = b^2 - 4ac. Les géomètres l’utilisent pour un triangle, bien que \\triangle, symbole distinct et non rempli, convienne mieux. Les lettres grecques majuscules sont droites ; utilisez \\varDelta pour une version italique. Ne confondez pas \\Delta avec \\nabla, qui est le même triangle renversé.",
  },
  "epsilon": {
    name: "Epsilon",
    meaning: "Epsilon minuscule lunaire ϵ, utilisé pour les petites quantités positives et les termes d’erreur.",
    usage:
      "\\epsilon imprime la forme lunaire ϵ, tandis que \\varepsilon donne la forme ouverte et arrondie ε que beaucoup de lecteurs associent à l’epsilon manuscrit. Les analystes emploient l’une ou l’autre pour un nombre arbitrairement petit dans \\forall \\epsilon > 0, mais gardez la même forme dans tout un article. Beaucoup d’auteurs réservent \\epsilon aux petites quantités et \\varepsilon aux termes d’erreur ou au bruit. Ne confondez ni l’un ni l’autre avec le signe d’appartenance \\in, qui ressemble à ϵ mais est une relation avec un espacement différent. La physique utilise aussi \\epsilon_0 pour la permittivité du vide.",
  },
  "epsilon-variant": {
    name: "Epsilon (variante)",
    meaning: "Variante de l’epsilon minuscule ε, forme ouverte et arrondie souvent préférée pour les termes d’erreur et les petits nombres.",
    usage:
      "\\varepsilon donne la forme arrondie ε, plus proche de l’epsilon manuscrit que l’epsilon lunaire \\epsilon. La statistique écrit le terme de bruit d’une régression \\varepsilon_i \\sim \\mathcal{N}(0, \\sigma^2), et de nombreux manuels d’analyse préfèrent \\varepsilon dans les démonstrations epsilon-delta. La physique utilise \\varepsilon_0 pour la permittivité du vide et \\varepsilon_{ijk} pour le symbole de Levi-Civita. Comme les deux formes se mélangent facilement par inadvertance, envisagez de redéfinir l’une d’elles dans le préambule pour ne taper qu’une seule commande. Évitez de l’utiliser à la place du signe d’appartenance \\in.",
  },
  "zeta": {
    name: "Zêta",
    meaning: "Lettre grecque zêta minuscule, surtout connue pour la fonction zêta de Riemann et le taux d’amortissement.",
    usage:
      "La fonction zêta de Riemann \\zeta(s) = \\sum_{n=1}^{\\infty} n^{-s} en est l’usage emblématique, avec le résultat du problème de Bâle \\zeta(2) = \\pi^2/6. Les ingénieurs utilisent \\zeta comme taux d’amortissement d’un système du second ordre, comme dans \\ddot{x} + 2\\zeta\\omega_n \\dot{x} + \\omega_n^2 x = 0. L’analyse complexe l’emploie pour une variable complexe muette, et la théorie des nombres pour les racines de l’unité \\zeta_n = e^{2\\pi i/n}. Il n’existe pas de commande \\Zeta, car le zêta majuscule est identique au Z latin. Sa forme manuscrite se confond facilement avec \\xi : vérifiez quelle lettre une source veut dire.",
  },
  "eta": {
    name: "Êta",
    meaning: "Lettre grecque êta minuscule, utilisée pour les taux d’apprentissage, le rendement, la viscosité et la métrique de Minkowski.",
    usage:
      "En apprentissage automatique, \\eta est le taux d’apprentissage conventionnel dans des mises à jour comme w \\leftarrow w - \\eta \\nabla L(w). La thermodynamique écrit le rendement \\eta = W/Q_h, la mécanique des fluides l’utilise pour la viscosité dynamique, et la relativité écrit la métrique de Minkowski \\eta_{\\mu\\nu}. La statistique l’emploie parfois pour le prédicteur linéaire \\eta = X\\beta d’un modèle linéaire généralisé. L’êta majuscule ressemble au H latin, d’où l’absence de commande \\Eta. Ne confondez pas \\eta avec le n latin sur des diapositives en police sans empattement, où le jambage peut être peu visible.",
  },
  "theta": {
    name: "Thêta",
    meaning: "Lettre grecque thêta minuscule, nom usuel des angles et des paramètres de modèle en statistique et en apprentissage automatique.",
    usage:
      "La trigonométrie et les coordonnées polaires utilisent \\theta pour les angles, comme dans (r\\cos\\theta, r\\sin\\theta). La statistique et l’apprentissage automatique l’emploient pour les vecteurs de paramètres, avec \\hat{\\theta} pour un estimateur et \\theta^* pour l’optimum. Les bornes de complexité grand thêta utilisent la majuscule \\Theta, et non \\theta. La variante \\vartheta, d’allure cursive, sert parfois pour un second angle ou en physique. Pour un estimateur, \\hat{\\theta} centre mieux le chapeau que \\widehat{\\theta}, prévu pour des arguments plus larges. En notation bayésienne, \\theta désigne aussi la quantité inconnue dans la loi a posteriori p(\\theta \\mid x).",
  },
  "theta-upper": {
    name: "Thêta majuscule",
    meaning: "Lettre grecque Thêta majuscule, standard pour les bornes asymptotiques exactes et les espaces de paramètres.",
    usage:
      "L’analyse d’algorithmes écrit \\Theta(n \\log n) pour une borne valable à la fois par-dessus et par-dessous, aux côtés de O et \\Omega. La statistique utilise \\Theta pour un espace de paramètres, comme dans \\theta \\in \\Theta. La physique l’emploie pour la fonction échelon de Heaviside \\Theta(x) et, dans certains textes, pour la température. Les lettres grecques majuscules sont droites en LaTeX ; \\varTheta donne une forme italique si un style l’exige. Ne confondez pas \\Theta avec le glyphe de l’ensemble vide ni avec le chiffre 0 barré.",
  },
  "iota": {
    name: "Iota",
    meaning: "Lettre grecque iota minuscule, lettre étroite sans point utilisée pour les injections canoniques et la notation indicielle.",
    usage:
      "\\iota désigne couramment une inclusion ou un plongement, comme dans \\iota : A \\hookrightarrow X, et le produit intérieur \\iota_X \\omega en géométrie différentielle. APL et certains langages fonctionnels utilisent iota pour un générateur d’indices, ce qui apparaît dans les textes d’informatique. Comme il ressemble à un i sans point, veillez à ne pas le confondre avec \\imath, le i sans point utilisé sous les accents. Il n’existe pas de commande \\Iota : l’iota majuscule ressemble au I latin. Il est assez rare pour qu’une définition d’une ligne à sa première apparition aide le lecteur.",
  },
  "kappa": {
    name: "Kappa",
    meaning: "Lettre grecque kappa minuscule, utilisée pour la courbure, les conditionnements et le kappa de Cohen.",
    usage:
      "La géométrie différentielle écrit la courbure d’une courbe \\kappa = |\\gamma''(s)|, et l’analyse numérique utilise \\kappa(A) = \\|A\\|\\|A^{-1}\\| pour le conditionnement d’une matrice. La statistique a le \\kappa de Cohen pour l’accord inter-juges, et la physique l’emploie pour la conductivité thermique ou la constante diélectrique. La variante \\varkappa donne un autre glyphe que certains auteurs préfèrent. Il n’existe pas de commande \\Kappa, car le kappa majuscule est identique au K latin. N’échangez pas \\kappa et le k latin, car de nombreuses formules utilisent les deux.",
  },
  "lambda": {
    name: "Lambda",
    meaning: "Lettre grecque lambda minuscule, utilisée pour les valeurs propres, les longueurs d’onde, les intensités et le coefficient de régularisation.",
    usage:
      "L’algèbre linéaire écrit Av = \\lambda v pour une valeur propre et un vecteur propre. La physique utilise \\lambda pour la longueur d’onde dans c = \\lambda f, les probabilités pour le paramètre d’une loi de Poisson ou exponentielle, et l’optimisation pour les multiplicateurs de Lagrange et le poids de pénalité en régression ridge ou lasso, \\lambda\\|w\\|^2. L’informatique écrit les fonctions anonymes avec le lambda-calcul, \\lambda x.\\, x + 1. Sa majuscule \\Lambda est une commande distincte aux usages différents. Les calendriers de taux d’apprentissage et le lissage exponentiel empruntent aussi \\lambda pour les facteurs de décroissance.",
  },
  "lambda-upper": {
    name: "Lambda majuscule",
    meaning: "Lettre grecque Lambda majuscule, courante pour la matrice diagonale des valeurs propres et la constante cosmologique.",
    usage:
      "La décomposition spectrale A = Q\\Lambda Q^{-1} utilise \\Lambda pour la matrice diagonale des valeurs propres. La cosmologie écrit la constante cosmologique \\Lambda, et le modèle standard de la cosmologie se compose \\Lambda\\text{CDM}. La physique des particules l’emploie pour le baryon Lambda, et la théorie des réseaux ou la théorie des nombres peuvent utiliser \\Lambda pour un réseau ou pour la fonction de von Mangoldt \\Lambda(n). Les majuscules grecques sont droites en LaTeX ; utilisez \\varLambda pour une forme italique. Ne la confondez pas avec le « et » logique \\wedge, un glyphe différent, espacé comme un opérateur.",
  },
  "mu": {
    name: "Mu",
    meaning: "Lettre grecque mu minuscule, standard pour la moyenne, les mesures, les coefficients de frottement et le préfixe micro.",
    usage:
      "Les probabilités écrivent l’espérance \\mu = E[X], de sorte qu’une loi normale se note \\mathcal{N}(\\mu, \\sigma^2). La théorie de la mesure utilise \\mu pour une mesure, et la physique pour le coefficient de frottement, la perméabilité magnétique \\mu_0 et la masse réduite. Comme préfixe d’unité dans \\mu m ou \\mu s, il s’affiche en italique mathématique, alors que les normes typographiques demandent un signe micro droit ; l’envelopper dans \\mathrm ne change pas la forme d’une lettre grecque. L’optimisation utilise \\mu pour les paramètres de barrière des méthodes de points intérieurs.",
  },
  "nu": {
    name: "Nu",
    meaning: "Lettre grecque nu minuscule, utilisée pour la fréquence, les degrés de liberté et la viscosité cinématique.",
    usage:
      "La physique écrit l’énergie d’un photon E = h\\nu, où \\nu est la fréquence, et la mécanique des fluides utilise \\nu pour la viscosité cinématique. La statistique emploie \\nu pour les degrés de liberté de la loi de Student, et la physique des particules écrit les neutrinos \\nu_e, \\nu_\\mu. La relativité utilise les indices grecs \\mu\\nu pour les composantes des tenseurs, comme dans g_{\\mu\\nu}. Dans beaucoup de polices, \\nu ressemble fort au v latin : évitez d’utiliser les deux lettres dans la même formule. Il n’existe pas de commande \\Nu ; le nu majuscule est le N latin.",
  },
  "xi": {
    name: "Xi",
    meaning: "Lettre grecque xi minuscule, lettre sinueuse utilisée pour les variables aléatoires, les variables muettes et l’amortissement.",
    usage:
      "Les textes de probabilités utilisent souvent \\xi pour une variable aléatoire ou un terme de bruit, et l’analyse pour un point intermédiaire, comme dans le théorème des accroissements finis f(b) - f(a) = f'(\\xi)(b - a). L’analyse de Fourier écrit les variables de fréquence \\xi dans \\hat{f}(\\xi). Certains textes d’ingénierie utilisent \\xi pour le taux d’amortissement au lieu de \\zeta. Comme \\xi et \\zeta sont difficiles à distinguer à la main, vérifiez quelle lettre une source veut dire. Sa majuscule \\Xi est une commande distincte.",
  },
  "xi-upper": {
    name: "Xi majuscule",
    meaning: "Lettre grecque Xi majuscule, lettre à trois barres utilisée pour le baryon Xi et certaines fonctions spéciales.",
    usage:
      "\\Xi est relativement rare en mathématiques. Les physiciens des particules l’utilisent pour les baryons Xi, notés \\Xi^0 et \\Xi^-, et il désigne parfois la fonction xi de Riemann \\Xi(t) en théorie analytique des nombres. La physique statistique écrit parfois la fonction de partition grand-canonique \\Xi. Comme les autres majuscules grecques en LaTeX, elle est droite ; \\varXi donne la forme italique. Ne la confondez pas avec le signe d’équivalence \\equiv, dont les trois barres ont la même longueur et qui a l’espacement d’une relation.",
  },
  "pi": {
    name: "Pi",
    meaning: "Lettre grecque pi minuscule, la constante du cercle 3,14159…, également utilisée pour les permutations et les politiques.",
    usage:
      "\\pi est le rapport de la circonférence d’un cercle à son diamètre ; il apparaît dans A = \\pi r^2, e^{i\\pi} + 1 = 0 et dans les angles en radians comme \\pi/2. L’apprentissage par renforcement utilise \\pi pour une politique \\pi(a \\mid s), la combinatoire pour une permutation, et la théorie des nombres écrit \\pi(x) pour la fonction de compte des nombres premiers. La variante \\varpi est un glyphe différent. Lorsque pi est une constante, certains guides de style préfèrent une forme droite, mais LaTeX standard donne un \\pi italique. N’utilisez pas le grand opérateur \\prod à la place de \\pi, ni l’inverse.",
  },
  "pi-upper": {
    name: "Pi majuscule",
    meaning: "Lettre grecque Pi majuscule, lettre ordinaire utilisée pour les projections, le profit et la pression osmotique.",
    usage:
      "\\Pi est une lettre de taille fixe, et non l’opérateur de produit : pour un produit indexé, utilisez \\prod, qui s’agrandit et place les bornes. En tant que lettre, \\Pi désigne des projections, la fonction de profit en économie, la pression osmotique et le pi-calcul en informatique. La théorie des types écrit les types de fonctions dépendants \\Pi_{x:A} B(x). La théorie de la complexité utilise \\Pi_k pour les niveaux de la hiérarchie polynomiale. Les majuscules grecques sont droites par défaut, et \\varPi donne une variante italique si besoin.",
  },
  "rho": {
    name: "Rhô",
    meaning: "Lettre grecque rhô minuscule, utilisée pour la masse volumique, les coefficients de corrélation et la densité de charge.",
    usage:
      "La physique utilise \\rho pour la masse volumique, \\rho = m/V, et pour la densité de charge dans les équations de Maxwell \\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0. La statistique écrit la corrélation de Pearson \\rho_{XY} et la corrélation des rangs de Spearman \\rho. La théorie des représentations utilise \\rho pour une représentation, et la mécanique quantique pour une matrice densité. La variante \\varrho, à la queue bouclée, permet à certains auteurs de séparer deux sens. Ne confondez pas \\rho avec le p latin, qui lui ressemble dans beaucoup de polices.",
  },
  "sigma": {
    name: "Sigma",
    meaning: "Lettre grecque sigma minuscule, pour l’écart type, les fonctions d’activation et les tribus (sigma-algèbres).",
    usage:
      "La statistique écrit l’écart type \\sigma et la variance \\sigma^2. L’apprentissage automatique utilise \\sigma(x) = 1/(1 + e^{-x}) pour la sigmoïde logistique et \\sigma pour une fonction d’activation générique. La théorie de la mesure parle de \\sigma-algèbres, la physique utilise \\sigma pour les sections efficaces, la conductivité et les matrices de Pauli \\sigma_x, et l’algèbre linéaire \\sigma_i pour les valeurs singulières. La variante sigma final \\varsigma ressemble à un s latin et sert rarement en mathématiques. N’utilisez pas la majuscule \\Sigma pour une somme : c’est le rôle de \\sum.",
  },
  "sigma-upper": {
    name: "Sigma majuscule",
    meaning: "Lettre grecque Sigma majuscule en tant que lettre, utilisée surtout pour les matrices de covariance et les alphabets.",
    usage:
      "En statistique, \\Sigma désigne une matrice de covariance, comme dans \\mathbf{x} \\sim \\mathcal{N}(\\boldsymbol{\\mu}, \\Sigma), et la SVD s’écrit A = U\\Sigma V^\\top. La théorie des langages formels utilise \\Sigma pour un alphabet et \\Sigma^* pour l’ensemble des mots sur cet alphabet. Pour une somme, utilisez plutôt \\sum : \\Sigma est une lettre ordinaire de taille fixe, qui ne grandit pas en mode hors texte et ne porte pas de bornes. La théorie de la complexité utilise \\Sigma_k^p pour la hiérarchie polynomiale. Les majuscules grecques sont droites ; \\varSigma est la variante italique.",
  },
  "tau": {
    name: "Tau",
    meaning: "Lettre grecque tau minuscule, utilisée pour les constantes de temps, le moment d’une force, le temps propre et la corrélation des rangs de Kendall.",
    usage:
      "La physique écrit le moment d’une force \\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}, une constante de temps dans e^{-t/\\tau} et le temps propre \\tau en relativité. La statistique a le \\tau de Kendall, et certains auteurs utilisent \\tau = 2\\pi comme constante du cercle. La théorie des nombres utilise \\tau(n) pour le nombre de diviseurs, et les formes modulaires \\tau pour un point du demi-plan supérieur. La théorie des types note souvent les types \\tau et \\sigma. Il n’existe pas de commande \\Tau, car le tau majuscule est le T latin. Dans certaines polices, \\tau ressemble à un petit t : choisissez des noms distincts pour des variables voisines.",
  },
  "upsilon": {
    name: "Upsilon",
    meaning: "Lettre grecque upsilon minuscule, rarement utilisée, qui ressemble beaucoup au u ou au v latins.",
    usage:
      "L’upsilon minuscule \\upsilon est peu courant en mathématiques, en grande partie parce qu’on le confond facilement avec u et avec \\nu. Il apparaît en physique des particules, pour le méson Upsilon, généralement écrit en majuscule, et parfois comme vitesse ou comme variable d’indice générique. S’il vous faut une nouvelle variable, une lettre moins ambiguë est souvent un meilleur choix. Si vous l’utilisez, définissez-le explicitement. Le \\upsilon de LaTeX est italique comme les autres minuscules grecques, tandis que la majuscule \\Upsilon a sa propre commande.",
  },
  "upsilon-upper": {
    name: "Upsilon majuscule",
    meaning: "Lettre grecque Upsilon majuscule, surtout connue pour le méson Upsilon en physique des particules.",
    usage:
      "\\Upsilon désigne la famille de mésons du bottomonium, \\Upsilon(1S), \\Upsilon(2S), en physique des particules. En mathématiques, elle est rare et nomme parfois une fonction ou un ensemble quand les autres lettres sont prises. Contrairement à l’alpha ou au bêta majuscules, l’upsilon majuscule a une forme propre en Computer Modern, avec des bras recourbés : ce n’est donc pas un simple Y latin, et il a sa propre commande. Comme les autres majuscules grecques, il est droit ; \\varUpsilon donne la forme italique. Surveillez sa lisibilité sur les diapositives, où il peut ressembler à un Y.",
  },
  "phi": {
    name: "Phi",
    meaning: "Lettre grecque phi minuscule, utilisée pour les angles, le nombre d’or, l’indicatrice d’Euler et les fonctions de plongement (feature maps).",
    usage:
      "\\phi donne la forme fermée et barrée, tandis que \\varphi donne la forme ouverte et bouclée ; beaucoup d’auteurs choisissent \\varphi pour les fonctions et gardent \\phi pour les angles. La théorie des nombres écrit l’indicatrice d’Euler \\varphi(n) ou \\phi(n), le nombre d’or est \\phi = (1 + \\sqrt{5})/2, et les coordonnées sphériques utilisent \\phi pour un angle. L’apprentissage automatique utilise \\phi(x) pour une fonction de plongement dans les méthodes à noyau, et la physique pour les potentiels scalaires et les fonctions d’onde. Ne confondez pas \\phi avec \\emptyset ni avec le Ø scandinave.",
  },
  "phi-upper": {
    name: "Phi majuscule",
    meaning: "Lettre grecque Phi majuscule, utilisée pour la fonction de répartition de la loi normale centrée réduite, le flux magnétique et les potentiels.",
    usage:
      "La statistique écrit la fonction de répartition de la loi normale centrée réduite \\Phi(z), avec la minuscule \\phi(z) pour la densité. La physique utilise \\Phi_B pour le flux magnétique et \\Phi pour le potentiel électrique, tandis que l’ingénierie l’emploie pour les flux en général. En algèbre linéaire et en optimisation, \\Phi peut désigner une matrice de plan d’expérience formée de fonctions de base. Les majuscules grecques sont droites en LaTeX ; \\varPhi donne la variante italique. Ne confondez pas \\Phi avec \\emptyset ni avec le symbole cerclé \\oslash. Son inverse \\Phi^{-1} donne les quantiles de la loi normale, comme z_{0.975} \\approx 1.96.",
  },
  "chi": {
    name: "Khi",
    meaning: "Lettre grecque khi minuscule, utilisée pour la loi du khi carré, les fonctions indicatrices et la susceptibilité.",
    usage:
      "La statistique du khi carré \\chi^2 = \\sum (O_i - E_i)^2/E_i en est l’usage le plus connu, avec \\chi^2_k pour la loi à k degrés de liberté. La théorie des ensembles et les probabilités écrivent la fonction indicatrice (ou caractéristique) d’un ensemble \\chi_A. La topologie utilise \\chi(M) pour la caractéristique d’Euler, la théorie des graphes \\chi(G) pour le nombre chromatique, et la physique \\chi pour la susceptibilité magnétique. Notez que \\chi descend sous la ligne de base : vérifiez le placement des indices. Ne le confondez pas avec le x latin ni avec l’opérateur \\times.",
  },
  "psi": {
    name: "Psi",
    meaning: "Lettre grecque psi minuscule, lettre conventionnelle de la fonction d’onde quantique et de la fonction digamma.",
    usage:
      "La mécanique quantique écrit les fonctions d’onde \\psi(x, t) et les états |\\psi\\rangle en notation de Dirac, avec l’équation de Schrödinger i\\hbar\\,\\partial_t \\psi = \\hat{H}\\psi. Les fonctions spéciales utilisent \\psi(x) = \\Gamma'(x)/\\Gamma(x) pour la fonction digamma. La mécanique des fluides emploie \\psi pour la fonction de courant, et l’analyse par ondelettes pour une ondelette mère. En notation bra-ket, \\langle \\psi | \\phi \\rangle utilise \\langle et \\rangle, et non les signes inférieur et supérieur. La majuscule \\Psi est une commande distincte. La normalisation impose \\int |\\psi|^2\\,dx = 1.",
  },
  "psi-upper": {
    name: "Psi majuscule",
    meaning: "Lettre grecque Psi majuscule, souvent une fonction d’onde à plusieurs corps ou un état en mécanique quantique.",
    usage:
      "La physique utilise \\Psi pour une fonction d’onde totale ou à plusieurs particules et réserve \\psi aux états à une particule, comme dans l’équation de Schrödinger dépendante du temps pour \\Psi(\\mathbf{r}, t). La physique des particules écrit le méson J/\\psi en minuscule, mais \\Psi sert pour certains états du charmonium. En mathématiques, il peut désigner une fonction ou un foncteur quand les autres lettres sont prises. Les majuscules grecques sont droites ; \\varPsi donne une version italique. La psychologie utilise aussi ce symbole comme emblème, mais cet usage apparaît rarement dans les formules.",
  },
  "omega": {
    name: "Oméga",
    meaning: "Lettre grecque oméga minuscule, utilisée pour la pulsation, les issues d’une expérience aléatoire et le premier ordinal infini.",
    usage:
      "La physique écrit la pulsation \\omega = 2\\pi f, de sorte qu’un oscillateur harmonique s’écrit x(t) = A\\cos(\\omega t + \\varphi). Les probabilités utilisent \\omega \\in \\Omega pour une issue de l’univers, et la théorie des ensembles \\omega pour le premier ordinal infini. La théorie de la complexité écrit petit oméga \\omega(n) pour les minorations strictes, et la géométrie différentielle \\omega pour les formes différentielles. La théorie des nombres a \\omega(n), le nombre de facteurs premiers distincts. Prenez garde à ne pas confondre \\omega avec le w latin dans des notes manuscrites.",
  },
  "omega-upper": {
    name: "Oméga majuscule",
    meaning: "Lettre grecque Oméga majuscule, utilisée pour l’ohm, l’univers des possibles et les minorations asymptotiques.",
    usage:
      "Comme unité, \\Omega est l’ohm : une résistance s’écrit 10\\,\\mathrm{k}\\Omega, avec une espace fine entre le nombre et l’unité. Les probabilités notent l’univers \\Omega dans le triplet (\\Omega, \\mathcal{F}, P). L’analyse d’algorithmes utilise \\Omega(n \\log n) pour une minoration, aux côtés de O et \\Theta. L’analyse écrit souvent un domaine ouvert \\Omega \\subset \\mathbb{R}^n. Les majuscules grecques sont droites, et \\varOmega donne une variante italique. Ne confondez pas \\Omega avec le mho, un oméga renversé autrefois utilisé pour le siemens.",
  },
};

export default text;
