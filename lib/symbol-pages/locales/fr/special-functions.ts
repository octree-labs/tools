import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/special-functions/<slug>. */
const text: SymbolPageTranslations = {
  "gamma-function": {
    name: "Fonction gamma",
    meaning: "Fonction gamma, le prolongement de la factorielle aux nombres complexes, avec Gamma(n) = (n-1)!.",
    usage: "Définie par \\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt pour \\operatorname{Re} z > 0, elle vérifie \\Gamma(z+1) = z\\Gamma(z) et \\Gamma(1/2) = \\sqrt{\\pi}. La formule des compléments \\Gamma(z)\\Gamma(1-z) = \\pi/\\sin(\\pi z) et la formule de Stirling sont des outils classiques. \\Gamma compose un gamma majuscule droit, le style habituel ; \\varGamma donne une variante italique. Elle intervient dans les constantes de normalisation des lois gamma, bêta, du khi-deux et de Student. Placez \\, avant dt dans l’intégrale. Ne confondez pas la fonction avec \\gamma, la constante d’Euler-Mascheroni.",
  },
  "beta-function": {
    name: "Fonction bêta",
    meaning: "Fonction bêta B(x, y), une intégrale sur [0, 1] étroitement liée à la fonction gamma.",
    usage: "La fonction bêta vaut B(x, y) = \\int_0^1 t^{x-1}(1-t)^{y-1}\\,dt = \\frac{\\Gamma(x)\\Gamma(y)}{\\Gamma(x+y)} et sert de constante de normalisation à la loi bêta en statistique bayésienne. À strictement parler, le symbole est un bêta grec majuscule, mais LaTeX n’a pas de commande \\Beta parce qu’il est identique au B latin ; B est donc correct, et certains auteurs écrivent \\mathrm{B} pour signaler qu’il s’agit d’une fonction. Elle est symétrique : B(x, y) = B(y, x). La version incomplète s’écrit B(z; a, b) et la forme régularisée I_z(a, b). Évitez la confusion avec les nombres de Bell ou de Bernoulli B_n.",
  },
  "riemann-zeta-function": {
    name: "Fonction zêta de Riemann",
    meaning: "Fonction zêta de Riemann, définie pour Re s > 1 comme la somme de la série des 1/n^s et prolongée au plan complexe.",
    usage: "\\zeta(s) = \\sum_{n=1}^\\infty n^{-s} relie l’analyse aux nombres premiers via le produit eulérien \\prod_p (1 - p^{-s})^{-1}. Parmi ses valeurs célèbres figurent \\zeta(2) = \\pi^2/6 (le problème de Bâle) et \\zeta(-1) = -1/12 par prolongement analytique. L’hypothèse de Riemann affirme que les zéros non triviaux se trouvent sur la droite \\operatorname{Re} s = 1/2. Utilisez \\zeta, qui peut ressembler à \\xi à la main mais s’en distingue à l’impression. Par convention, la variable s’écrit s = \\sigma + it. La zêta de Hurwitz se note \\zeta(s, a), et en physique \\zeta apparaît souvent dans les intégrales de Bose-Einstein.",
  },
  "error-function": {
    name: "Fonction d’erreur",
    meaning: "Fonction d’erreur : l’intégrale normalisée de la gaussienne e^{-t^2} de 0 à x, utilisée pour les probabilités de la loi normale.",
    usage: "La définition est \\text{erf}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_0^x e^{-t^2}\\,dt, avec pour limites \\pm 1 en \\pm\\infty. La fonction de répartition de la loi normale centrée réduite est \\Phi(x) = \\frac{1}{2}\\big[1 + \\text{erf}(x/\\sqrt{2})\\big], et erf résout l’équation de la chaleur pour une condition initiale en échelon. \\text{erf} s’imprime en romain, mais suit la police environnante et passe donc en italique dans les théorèmes ; \\operatorname{erf}, ou un \\DeclareMathOperator dans le préambule, est plus robuste et ajoute l’espacement approprié. Elle est impaire : \\text{erf}(-x) = -\\text{erf}(x). Sa réciproque est \\text{erf}^{-1}, utilisée pour calculer les quantiles de la loi normale.",
  },
  "complementary-error": {
    name: "Fonction d’erreur complémentaire",
    meaning: "Fonction d’erreur complémentaire, 1 - erf(x) : l’intégrale normalisée de la queue gaussienne de x à l’infini.",
    usage: "\\text{erfc}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_x^\\infty e^{-t^2}\\,dt = 1 - \\text{erf}(x) ; c’est la forme à privilégier pour les petites probabilités de queue, car le calcul numérique de 1 - \\text{erf}(x) perd en précision quand x est grand. Elle donne le taux d’erreur binaire en télécommunications, Q(x) = \\frac{1}{2}\\text{erfc}(x/\\sqrt{2}), et les profils de diffusion en transfert thermique. La version mise à l’échelle \\text{erfcx}(x) = e^{x^2}\\text{erfc}(x) évite le dépassement inférieur. Comme pour erf, \\operatorname{erfc} reste droit dans un contexte italique et s’espace correctement : c’est le choix le plus sûr. Pour x grand, elle se comporte à peu près comme e^{-x^2}/(x\\sqrt{\\pi}).",
  },
  "bessel-j": {
    name: "Fonction de Bessel de première espèce",
    meaning: "Fonction de Bessel de première espèce d’ordre n, la solution de l’équation de Bessel qui reste finie à l’origine.",
    usage: "J_n résout x^2 y'' + x y' + (x^2 - n^2) y = 0 et admet le développement en série \\sum_m \\frac{(-1)^m}{m!\\,\\Gamma(m+n+1)} (x/2)^{2m+n}. Elle décrit les membranes de tambour en vibration, les guides d’ondes cylindriques et la diffraction par une ouverture circulaire, où la tache d’Airy fait intervenir J_1. Pour un ordre non entier, on écrit par convention J_\\nu(x) avec \\nu. La fonction génératrice est e^{(x/2)(t - 1/t)} = \\sum_n J_n(x) t^n. Les ordres composés exigent des accolades : J_{n+1}(x). Ses zéros, souvent notés j_{n,k}, fixent les fréquences de résonance d’une membrane circulaire.",
  },
  "bessel-y": {
    name: "Fonction de Bessel de deuxième espèce",
    meaning: "Fonction de Bessel de deuxième espèce d’ordre n, la solution de l’équation de Bessel singulière à l’origine.",
    usage: "Y_n, appelée aussi fonction de Weber ou de Neumann et notée N_n dans certains ouvrages de physique, est la seconde solution indépendante de l’équation de Bessel, avec Y_n(x) \\to -\\infty quand x \\to 0^+. Pour \\nu non entier, Y_\\nu(x) = \\frac{J_\\nu(x)\\cos(\\nu\\pi) - J_{-\\nu}(x)}{\\sin(\\nu\\pi)}, les ordres entiers étant définis par passage à la limite. Dans les problèmes aux limites sur un disque entier, le terme en Y_n est écarté pour assurer la régularité au centre, mais il est conservé sur une couronne. Les fonctions de Hankel combinent les deux : H_n^{(1)} = J_n + iY_n.",
  },
  "modified-bessel-i": {
    name: "Fonction de Bessel modifiée de première espèce",
    meaning: "Fonction de Bessel modifiée de première espèce, une solution de l’équation de Bessel modifiée à croissance exponentielle.",
    usage: "I_n résout x^2 y'' + x y' - (x^2 + n^2) y = 0 et se relie à J_n par I_n(x) = i^{-n} J_n(ix). Contrairement à J_n, elle n’oscille pas ; elle croît comme e^x/\\sqrt{2\\pi x}. Elle apparaît dans la conduction thermique dans les cylindres, dans la constante de normalisation 2\\pi I_0(\\kappa) de la loi de von Mises et dans la loi de Rice. Utilisez \\nu pour un ordre quelconque : I_\\nu(x). Ne la confondez pas avec la matrice identité I_n ni avec l’information mutuelle I(X; Y) ; l’argument entre parenthèses lève généralement l’ambiguïté, mais une définition aide.",
  },
  "modified-bessel-k": {
    name: "Fonction de Bessel modifiée de deuxième espèce",
    meaning: "Fonction de Bessel modifiée de deuxième espèce, la solution décroissante de l’équation de Bessel modifiée.",
    usage: "K_n, parfois appelée fonction de Macdonald, décroît comme \\sqrt{\\pi/(2x)}\\,e^{-x} pour x grand et diverge à l’origine. Elle forme avec I_n le couple de solutions indépendantes de l’équation de Bessel modifiée. Elle apparaît dans le noyau de covariance de Matérn utilisé pour les processus gaussiens, dans le potentiel de Yukawa en deux dimensions et dans les constantes de normalisation des lois gaussiennes inverses généralisées. Attention : K(k) désigne aussi l’intégrale elliptique complète et K_n le graphe complet ; précisez donc de quel K il s’agit lorsque les domaines se recoupent.",
  },
  "legendre-p": {
    name: "Polynôme de Legendre",
    meaning: "Polynôme de Legendre de degré n, orthogonal sur [-1, 1] pour le poids 1.",
    usage: "Les polynômes de Legendre commencent par P_0 = 1, P_1 = x, P_2 = \\frac{1}{2}(3x^2 - 1) et suivent la formule de Rodrigues P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n}(x^2 - 1)^n. L’orthogonalité s’écrit \\int_{-1}^1 P_m P_n\\,dx = \\frac{2}{2n+1}\\delta_{mn}. Ils interviennent dans les développements multipolaires, les harmoniques sphériques et les nœuds de la quadrature de Gauss-Legendre. Les fonctions de Legendre associées s’écrivent P_n^m(x) ou P_\\ell^m(\\cos\\theta). Les physiciens notent souvent le degré \\ell. Ne les confondez pas avec la chaîne P_n en théorie des graphes ni avec la probabilité P ; l’argument x signale en général le polynôme.",
  },
  "legendre-q": {
    name: "Fonction de Legendre de deuxième espèce",
    meaning: "Fonction de Legendre de deuxième espèce, la seconde solution de l’équation de Legendre, singulière en x = 1 et -1.",
    usage: "Q_n résout la même équation que P_n, (1 - x^2) y'' - 2x y' + n(n+1) y = 0, mais ce n’est pas un polynôme : par exemple Q_0(x) = \\frac{1}{2}\\ln\\frac{1+x}{1-x} et Q_1(x) = x Q_0(x) - 1. En raison des singularités logarithmiques en \\pm 1, on l’écarte généralement dans les problèmes posés sur la sphère entière et on ne la conserve que lorsque le domaine exclut les pôles, comme un cône ou la région extérieure à un sphéroïde allongé. Les versions associées s’écrivent Q_n^m(x). Utilisez \\ln avec \\frac pour le logarithme, et \\left( \\right) si l’argument devient haut.",
  },
  "hermite-polynomial": {
    name: "Polynôme d’Hermite",
    meaning: "Polynôme d’Hermite de degré n, orthogonal sur la droite réelle pour un poids gaussien.",
    usage: "Les polynômes d’Hermite des physiciens suivent H_n(x) = (-1)^n e^{x^2} \\frac{d^n}{dx^n} e^{-x^2}, commencent par 1, 2x, 4x^2 - 2 et donnent les fonctions propres de l’oscillateur harmonique quantique \\psi_n \\propto H_n(x) e^{-x^2/2}. Les probabilistes utilisent une autre normalisation, notée He_n(x), avec le poids e^{-x^2/2} ; les deux familles se déduisent l’une de l’autre par changement d’échelle, précisez donc laquelle vous employez. La relation de récurrence est H_{n+1} = 2x H_n - 2n H_{n-1}. H désigne aussi l’entropie, la fonction de Heaviside et les hamiltoniens : une courte définition aide le lecteur.",
  },
  "laguerre-polynomial": {
    name: "Polynôme de Laguerre",
    meaning: "Polynôme de Laguerre de degré n, orthogonal sur [0, ∞) pour le poids e^{-x}.",
    usage: "Les polynômes de Laguerre vérifient la formule de Rodrigues L_n(x) = \\frac{e^x}{n!} \\frac{d^n}{dx^n}(e^{-x} x^n), commencent par L_0 = 1 et L_1 = 1 - x, et résolvent x y'' + (1 - x) y' + n y = 0. La forme généralisée L_n^{(\\alpha)}(x), avec l’exposant entre parenthèses, donne les fonctions d’onde radiales de l’atome d’hydrogène. Les anciens ouvrages de physique utilisent une autre normalisation, qui diffère d’un facteur n! ; vérifiez donc vos sources avant de mélanger des formules. Ils définissent aussi la quadrature de Gauss-Laguerre pour les intégrales de poids e^{-x}. Évitez la confusion avec un lagrangien ou une fonction de perte L.",
  },
  "chebyshev-t": {
    name: "Polynôme de Tchebychev de première espèce",
    meaning: "Polynôme de Tchebychev de première espèce, défini par T_n(cos θ) = cos(nθ).",
    usage: "Les polynômes de Tchebychev T vérifient T_0 = 1, T_1 = x et T_{n+1} = 2x T_n - T_{n-1}, ce qui donne T_2 = 2x^2 - 1. Ils sont orthogonaux sur [-1, 1] pour le poids 1/\\sqrt{1 - x^2}, et parmi les polynômes unitaires de degré n, 2^{1-n} T_n a le plus petit maximum sur cet intervalle. Cette propriété minimax fonde les nœuds de Tchebychev pour l’interpolation, qui évitent le phénomène de Runge, ainsi que les méthodes spectrales de Tchebychev. La lettre T entre parfois en conflit avec la température, la période ou une transposée : définissez-la si nécessaire, et utilisez ^\\top pour les transposées afin de rester clair.",
  },
  "chebyshev-u": {
    name: "Polynôme de Tchebychev de deuxième espèce",
    meaning: "Polynôme de Tchebychev de deuxième espèce, avec U_n(cos θ) sin θ = sin((n+1)θ).",
    usage: "Les polynômes U partagent avec T_n la récurrence U_{n+1} = 2x U_n - U_{n-1}, mais partent de U_0 = 1, U_1 = 2x. Ils sont orthogonaux sur [-1, 1] pour le poids \\sqrt{1 - x^2} et se relient à ceux de première espèce par T_n'(x) = n U_{n-1}(x). U_n apparaît dans les polynômes caractéristiques des chaînes (graphes), dans les problèmes aux valeurs propres de matrices de Toeplitz tridiagonales et dans la quadrature de Gauss-Tchebychev de deuxième espèce. Écrivez l’identité de définition avec \\frac et \\sin comme ci-dessous, en utilisant \\theta plutôt que t pour respecter la convention trigonométrique.",
  },
  "hypergeometric": {
    name: "Fonction hypergéométrique",
    meaning: "Fonction hypergéométrique de Gauss : la série entière en z dont les coefficients sont construits à partir des symboles de Pochhammer de a, b, c.",
    usage: "Elle est définie par {}_2F_1(a,b;c;z) = \\sum_{n \\geq 0} \\frac{(a)_n (b)_n}{(c)_n} \\frac{z^n}{n!} pour |z| < 1 et se spécialise en de nombreuses fonctions élémentaires et spéciales, par exemple \\ln(1+z) = z\\,{}_2F_1(1,1;2;-z). Le groupe vide {} fournit au 2 en indice à gauche un support auquel s’accrocher, l’astuce classique pour les préindices ; la commande \\prescript offre un contrôle plus fin. Les points-virgules séparent les paramètres du numérateur, ceux du dénominateur et l’argument. La forme générale {}_pF_q suit le même schéma, et le théorème de Gauss donne sa valeur en z = 1.",
  },
  "digamma": {
    name: "Fonction digamma",
    meaning: "Fonction digamma, la dérivée logarithmique de la fonction gamma : Gamma'(x)/Gamma(x).",
    usage: "\\psi(x) = \\frac{d}{dx}\\ln\\Gamma(x) vérifie \\psi(x+1) = \\psi(x) + 1/x, d’où \\psi(n+1) = H_n - \\gamma, avec H_n le nombre harmonique et \\gamma la constante d’Euler-Mascheroni, et \\psi(1) = -\\gamma. Elle apparaît en inférence bayésienne variationnelle pour les lois de Dirichlet, où \\mathbb{E}[\\ln \\theta_k] = \\psi(\\alpha_k) - \\psi(\\sum_j \\alpha_j). Le \\psi grec est la notation standard ; certains textes écrivent F(x). N’utilisez pas \\digamma, qui imprime la lettre grecque archaïque digamma et non la fonction. En mécanique quantique, \\psi désigne la fonction d’onde : définissez-la.",
  },
  "polygamma": {
    name: "Fonction polygamma",
    meaning: "Fonction polygamma d’ordre n : la dérivée (n+1)-ième de ln Gamma(x), ou la dérivée n-ième de la digamma.",
    usage: "\\psi^{(n)}(x) = \\frac{d^{n+1}}{dx^{n+1}} \\ln \\Gamma(x), avec \\psi^{(0)} = \\psi la digamma et \\psi^{(1)} la fonction trigamma. Valeurs remarquables : \\psi^{(1)}(1) = \\pi^2/6 et, en général, \\psi^{(n)}(1) = (-1)^{n+1} n!\\,\\zeta(n+1). La trigamma donne l’information de Fisher et les termes de variance des modèles gamma et de Dirichlet. L’exposant entre parenthèses indique l’ordre de dérivation, pas une puissance ; écrire ^n seul se lirait comme une exponentiation. Les accolades autour de (n) sont obligatoires pour que tout le groupe soit mis en exposant. Beaucoup d’auteurs écrivent simplement la trigamma \\psi'(x), ce qui est tout aussi standard.",
  },
  "elliptic-integral-k": {
    name: "Intégrale elliptique complète de première espèce",
    meaning: "Intégrale elliptique complète de première espèce, l’intégrale de 1/sqrt(1 - k^2 sin^2 θ) sur un quart de période.",
    usage: "K(k) = \\int_0^{\\pi/2} \\frac{d\\theta}{\\sqrt{1 - k^2 \\sin^2\\theta}}, avec K(0) = \\pi/2 et une divergence logarithmique quand k \\to 1. Elle donne la période exacte d’un pendule, T = 4\\sqrt{L/g}\\,K(\\sin(\\theta_0/2)). Le principal piège est la convention d’argument : certains ouvrages et logiciels utilisent le paramètre m = k^2 et écrivent K(m), si bien que K(0.5) peut désigner deux nombres différents. Précisez si vous utilisez le module k ou le paramètre m. La version incomplète est F(\\phi, k). La moyenne arithmético-géométrique fournit une formule rapide : K(k) = \\frac{\\pi}{2\\,\\mathrm{AGM}(1, \\sqrt{1-k^2})}.",
  },
  "elliptic-integral-e": {
    name: "Intégrale elliptique complète de deuxième espèce",
    meaning: "Intégrale elliptique complète de deuxième espèce, l’intégrale de sqrt(1 - k^2 sin^2 θ) sur un quart de période.",
    usage: "E(k) = \\int_0^{\\pi/2} \\sqrt{1 - k^2 \\sin^2\\theta}\\,d\\theta, avec E(0) = \\pi/2 et E(1) = 1. Le périmètre d’une ellipse de demi-grand axe a et d’excentricité e vaut 4a\\,E(e), qui n’a pas de forme close élémentaire. La relation de Legendre la relie à K : E K' + E' K - K K' = \\pi/2, où les primes désignent le module complémentaire. Comme pour K, vérifiez si la source utilise le module k ou le paramètre m = k^2. La lettre E seule entre en conflit avec l’énergie, l’espérance et les ensembles d’arêtes : définissez-la tôt.",
  },
  "dirac-delta-function": {
    name: "Distribution de Dirac",
    meaning: "Delta de Dirac : une distribution nulle hors de 0 et d’intégrale 1, qui extrait f(0) sous une intégrale.",
    usage: "Sa propriété caractéristique est l’identité de filtrage \\int f(x)\\,\\delta(x - a)\\,dx = f(a). C’est une distribution et non une fonction ordinaire, et c’est la dérivée de la fonction de Heaviside : H'(x) = \\delta(x). En traitement du signal, elle modélise une impulsion ; sa transformée de Fourier vaut 1. Le changement d’échelle obéit à \\delta(ax) = \\delta(x)/|a|. Ne la confondez pas avec le symbole de Kronecker \\delta_{ij}, symbole discret égal à 1 lorsque i = j. Le \\delta minuscule est distinct de \\Delta (laplacien ou différence) et de \\partial.",
  },
  "heaviside-step-function": {
    name: "Fonction de Heaviside",
    meaning: "Fonction échelon de Heaviside : 0 pour x négatif et 1 pour x positif, avec le saut à l’origine.",
    usage: "La fonction de Heaviside H(x) modélise un signal enclenché à l’instant zéro, et sa dérivée au sens des distributions est le delta de Dirac : H'(x) = \\delta(x). La valeur en 0 relève de la convention : souvent 1/2 en analyse de Fourier, 1 en automatique, parfois laissée indéfinie. D’autres notations existent : \\theta(x) en physique, u(t) en ingénierie et l’indicatrice \\mathbf{1}_{x \\geq 0}. Définissez-la avec un environnement cases pour plus de clarté. Comme H désigne aussi l’entropie, les polynômes d’Hermite et les hamiltoniens, une courte définition à la première occurrence évite toute confusion au lecteur. Sa transformée de Laplace est 1/s.",
  },
};

export default text;
