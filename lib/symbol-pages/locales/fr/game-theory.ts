import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/game-theory/<slug>. */
const text: SymbolPageTranslations = {
  "strategy": {
    name: "Stratégie",
    meaning: "Stratégie du joueur i : un plan d’action complet choisi dans l’ensemble de stratégies S_i de ce joueur.",
    usage:
      "Dans un jeu sous forme normale, chaque joueur choisit s_i \\in S_i, et le choix collectif forme un profil s = (s_i, s_{-i}), où s_{-i} regroupe les stratégies de tous les autres. Dans les jeux sous forme extensive, une stratégie pure prescrit une action à chaque ensemble d’information, y compris ceux qui ne sont jamais atteints. L’indice désigne le joueur ; utilisez donc des exposants ou des primes, s_i', s_i^*, pour les autres stratégies d’un même joueur. Écrivez s_{-i} avec des accolades, car s_-i ne place que le signe moins en indice.",
  },
  "strategy-set": {
    name: "Ensemble de stratégies",
    meaning: "Ensemble de stratégies du joueur i : toutes les stratégies pures dont dispose ce joueur.",
    usage:
      "L’espace de tous les profils est le produit cartésien S = S_1 \\times \\cdots \\times S_n = \\prod_i S_i, et S_{-i} = \\prod_{j \\ne i} S_j. Des S_i finis donnent des jeux matriciels ; des parties convexes compactes de \\mathbb{R}^k apparaissent dans la concurrence à la Cournot et d’autres jeux continus. Les stratégies mixtes vivent dans \\Delta(S_i). Gardez les majuscules pour les ensembles de stratégies et les minuscules pour les stratégies. Dans les jeux coopératifs, S désigne souvent une coalition ; évitez de mélanger les deux usages dans un même article.",
  },
  "strategy-profile": {
    name: "Profil de stratégies",
    meaning: "Profil de stratégies : une liste contenant une stratégie pour chacun des n joueurs du jeu.",
    usage:
      "Les gains s’évaluent sur des profils complets, u_i(s), et l’analyse des déviations décompose un profil en (s_i, s_{-i}). \\ldots place les points sur la ligne de base, ce qui convient entre des virgules ; \\cdots les centre, ce qui convient aux sommes comme s_1 + \\cdots + s_n. Avec amsmath, un simple \\dots choisit automatiquement selon le contexte. Certains textes écrivent les profils en gras, \\mathbf{s}, pour les distinguer de la stratégie s_i d’un seul joueur. Le profil où i passe à s_i' tandis que les autres conservent leur stratégie s’écrit (s_i', s_{-i}). L’ordre des joueurs fixe le n-uplet ; précisez-le une fois.",
  },
  "payoff-function": {
    name: "Fonction de gain",
    meaning: "Fonction de gain (d’utilité) du joueur i, qui associe un nombre réel à chaque profil de stratégies s.",
    usage:
      "Formellement u_i: S \\to \\mathbb{R}, et un jeu sous forme normale est le triplet (N, (S_i), (u_i)). Les stratégies mixtes l’étendent par espérance, u_i(\\sigma) = \\sum_s \\sigma(s)\\, u_i(s). Les déviations unilatérales s’écrivent u_i(s_i', s_{-i}). Certains domaines notent les gains \\pi_i ou v_i ; dans les jeux coopératifs, v désigne déjà la fonction caractéristique, et u_i est alors le choix le plus sûr. Les gains n’ont besoin que d’être des utilités de von Neumann-Morgenstern ; les transformations affines positives laissent donc les équilibres inchangés. À deux joueurs, les gains sont souvent présentés sous forme de bimatrice.",
  },
  "expected-payoff": {
    name: "Gain espéré",
    meaning: "Gain espéré du joueur i, moyenne de u_i pondérée par les probabilités issues des stratégies mixtes ou des coups du hasard.",
    usage:
      "Avec des stratégies mixtes indépendantes, \\mathbb{E}_\\sigma[u_i] = \\sum_{s} \\prod_j \\sigma_j(s_j)\\, u_i(s), quantité que les joueurs maximisent dans un équilibre de Nash en stratégies mixtes. Indiquez la loi en indice, \\mathbb{E}_{s \\sim \\sigma}[u_i(s)], lorsqu’elle n’est pas évidente. Le \\mathbb{E} ajouré est un style parmi d’autres ; \\operatorname{E} et \\mathrm{E} donnent un E droit, courant en économétrie. Pour des arguments hauts, dimensionnez les crochets avec \\left[ \\right] ou \\bigl[ \\bigr]. Lorsque la nature joue, comme dans les jeux bayésiens, l’espérance porte aussi sur les types, \\mathbb{E}_\\theta[u_i(s(\\theta), \\theta)]. Réservez les crochets à l’espérance et les parenthèses aux arguments de fonctions.",
  },
  "best-response": {
    name: "Meilleure réponse",
    meaning: "Correspondance de meilleure réponse : l’ensemble des stratégies qui maximisent le gain du joueur i face aux stratégies s_{-i} des autres.",
    usage:
      "Elle est définie par BR_i(s_{-i}) = \\arg\\max_{s_i \\in S_i} u_i(s_i, s_{-i}), et un profil est un équilibre de Nash exactement lorsque s_i^* \\in BR_i(s^*_{-i}) pour tout i. Elle est en général multivoque, ce qui explique que l’existence des équilibres mixtes se démontre par le théorème du point fixe de Kakutani et non par celui de Brouwer. Tapé BR_i, TeX compose B et R comme deux variables italiques multipliées ; écrivez \\mathrm{BR}_i ou \\operatorname{BR}_i pour des lettres droites. Utilisez \\operatorname*{arg\\,max} pour l’argument du maximum. Les meilleures réponses pures existent toujours dans les jeux finis.",
  },
  "nash-equilibrium": {
    name: "Équilibre de Nash",
    meaning: "Profil d’équilibre de Nash : aucun joueur ne peut gagner à s’écarter unilatéralement de sa stratégie s_i^*.",
    usage:
      "La condition qui le définit est u_i(s_i^*, s_{-i}^*) \\ge u_i(s_i, s_{-i}^*) pour tout joueur i et toute stratégie alternative s_i. Nash a démontré que tout jeu fini possède un équilibre en stratégies mixtes, noté \\sigma^*. Les équilibres ne sont ni nécessairement uniques ni nécessairement efficaces, comme le montre le dilemme du prisonnier. L’étoile est un exposant, donc s_1^* et s^*_1 donnent le même rendu ; utilisez ^* plutôt que ^\\star, ce dernier étant une étoile à cinq branches. Dans un jeu bimatriciel, un équilibre pur est une case où le gain de chaque joueur est maximal étant donné le choix de l’autre.",
  },
  "mixed-strategy": {
    name: "Stratégie mixte",
    meaning: "Stratégie mixte du joueur i : une loi de probabilité sur les stratégies pures de ce joueur.",
    usage:
      "Une stratégie mixte est \\sigma_i \\in \\Delta(S_i), où \\sigma_i(s_i) est la probabilité de jouer s_i, et le support d’une stratégie d’équilibre ne contient que des meilleures réponses. Dans le jeu de pile ou face (matching pennies), l’unique équilibre fait jouer chaque option avec probabilité 1/2. Les jeux sous forme extensive distinguent les stratégies mixtes des stratégies de comportement, souvent notées b_i ou \\beta_i. Ne confondez pas \\sigma_i avec un écart type dans les articles qui font aussi de la statistique ; \\varsigma est un sigma final différent et ne le remplace pas. Avec mémoire parfaite, le théorème de Kuhn rend stratégies mixtes et stratégies de comportement équivalentes.",
  },
  "probability-simplex": {
    name: "Simplexe des probabilités",
    meaning: "Ensemble des lois de probabilité sur S_i, qui pour un ensemble fini est un simplexe de probabilités.",
    usage:
      "Si S_i a k éléments, \\Delta(S_i) est le simplexe de dimension k-1 \\{x \\in \\mathbb{R}^k : x_j \\ge 0, \\sum_j x_j = 1\\}. Stratégies mixtes, croyances et équilibres corrélés vivent tous dans des ensembles de cette forme. Le \\Delta majuscule est droit par défaut ; \\varDelta en donne une version italique si votre style l’exige. Ne le confondez pas avec \\triangle, un triangle géométrique, ni avec \\nabla, le symbole renversé utilisé pour les gradients. Pour deux stratégies pures, c’est simplement l’intervalle [0, 1] des probabilités attribuées à la première.",
  },
  "dominant-strategy": {
    name: "Stratégie dominante",
    meaning: "Stratégie dominante du joueur i : une stratégie qui est une meilleure réponse quoi que fassent les autres joueurs.",
    usage:
      "La dominance stricte signifie u_i(s_i^d, s_{-i}) > u_i(s_i, s_{-i}) pour toute autre s_i et tout s_{-i} ; dans le dilemme du prisonnier, trahir est strictement dominant. Enchérir sincèrement dans une enchère au second prix est faiblement dominant. L’exposant d est une étiquette, pas un indice ; beaucoup d’auteurs le composent donc en romain, s_i^{\\mathrm{d}}, pour éviter de le lire comme une variable. Placer ^d avant ou après _i donne le même empilement. Lorsque chaque joueur a une stratégie dominante, le profil obtenu est un équilibre en stratégies dominantes, et donc un équilibre de Nash.",
  },
  "dominated-strategy": {
    name: "Stratégie dominée",
    meaning: "Relation de dominance : s_i \\prec s'_i signifie que la stratégie s_i est dominée par s'_i, qui fait toujours au moins aussi bien.",
    usage:
      "Les stratégies strictement dominées ne sont jamais jouées par des joueurs rationnels, et leur élimination itérée est une procédure de résolution classique. \\prec est une relation, avec l’espacement adéquat ; pour la dominance faible utilisez \\preceq, et pour le sens inverse \\succ ou \\succeq. Certains textes indexent la relation par le joueur, comme \\prec_i. s'_i et s_i' donnent le même rendu, car le prime s’intègre à l’empilement de l’indice. Les conventions de sens varient, et certains auteurs écrivent s'_i \\succ s_i pour le même énoncé ; définissez-la donc. Une stratégie dominée par une stratégie mixte peut aussi être éliminée.",
  },
  "pareto-optimal": {
    name: "Optimum de Pareto",
    meaning: "Issue optimale au sens de Pareto : aucun autre profil n’améliore la situation d’un joueur sans dégrader celle d’un autre.",
    usage:
      "Un profil s^{PO} est un optimum de Pareto s’il n’existe aucun s tel que u_i(s) \\ge u_i(s^{PO}) pour tout i, avec inégalité stricte pour au moins un i. Le dilemme du prisonnier présente un équilibre de Nash qui n’est pas un optimum de Pareto. Écrit s^{PO}, TeX compose P et O comme deux variables italiques ; une étiquette doit être en romain, s^{\\mathrm{PO}}, ce qui évite aussi de lire PO comme un produit. Le même conseil vaut pour des étiquettes comme s^{\\mathrm{NE}}. L’optimalité de Pareto ne dit rien de l’équité ; elle exclut seulement les améliorations sans ambiguïté.",
  },
  "minimax": {
    name: "Minimax",
    meaning: "Opérateur minimax : minimiser sur j le maximum sur i, la valeur dans le pire des cas qu’un joueur minimisant peut garantir.",
    usage:
      "Dans un jeu matriciel à somme nulle où le joueur ligne reçoit a_{ij}, \\min_j \\max_i a_{ij} est la garantie du joueur colonne et \\max_i \\min_j a_{ij} celle du joueur ligne ; la seconde ne dépasse jamais la première. Le théorème du minimax de von Neumann affirme que les deux coïncident en stratégies mixtes. En style hors texte, les indices se placent dessous ; en ligne, ils apparaissent en indice, ajoutez donc \\limits si vous les voulez dessous dans le texte aussi. Pour plus d’espace entre les opérateurs, insérez \\, ou utilisez \\min_{j}\\,\\max_{i}.",
  },
  "zero-sum": {
    name: "Jeu à somme nulle",
    meaning: "Condition de somme nulle : les gains des deux joueurs s’annulent toujours, si bien que le gain de l’un est exactement la perte de l’autre.",
    usage:
      "Un tel jeu est entièrement décrit par une seule matrice A, avec u_1 = x^\\top A y et u_2 = -x^\\top A y pour des stratégies mixtes x et y. Les jeux à somme constante, u_1 + u_2 = c, sont stratégiquement équivalents. La valeur v = \\max_x \\min_y x^\\top A y se calcule par programmation linéaire. Pour n joueurs, écrivez \\sum_{i} u_i(s) = 0 pour tous les profils s. Utilisez x^\\top ou x^T pour la transposée, de façon cohérente. Les échecs et le poker à deux joueurs en sont des exemples classiques.",
  },
  "cooperative-value": {
    name: "Valeur d’une coalition",
    meaning: "Fonction caractéristique d’un jeu coopératif : la valeur totale qu’une coalition S peut s’assurer par elle-même.",
    usage:
      "Un jeu à utilité transférable est un couple (N, v) avec v: 2^N \\to \\mathbb{R} et v(\\emptyset) = 0. La superadditivité, v(S \\cup T) \\ge v(S) + v(T) pour des coalitions disjointes, rend avantageuse la formation de la grande coalition. Le cœur est l’ensemble des allocations x telles que \\sum_{i \\in S} x_i \\ge v(S) pour toute S. \\emptyset donne un cercle barré ; \\varnothing en donne la forme plus ronde et plus moderne. Ici S est une coalition, pas un ensemble de stratégies ; précisez-le explicitement.",
  },
  "shapley-value": {
    name: "Valeur de Shapley",
    meaning: "Valeur de Shapley : la part équitable de v(N) revenant au joueur i, sa contribution marginale moyenne sur tous les ordres d’arrivée.",
    usage:
      "La formule est \\phi_i(v) = \\sum_{S \\subseteq N \\setminus \\{i\\}} \\frac{|S|!\\,(n-|S|-1)!}{n!}\\,(v(S \\cup \\{i\\}) - v(S)). C’est l’unique allocation qui vérifie l’efficacité, la symétrie, la propriété du joueur nul et l’additivité. L’apprentissage automatique l’utilise pour l’attribution des variables, comme dans SHAP. Choisissez délibérément entre \\phi et \\varphi, dont l’aspect diffère nettement. Dans la différence ensembliste, échappez les accolades en \\{i\\} pour qu’elles s’impriment. Le calcul exact somme sur les 2^{n-1} coalitions pour chaque joueur, d’où le recours courant à des approximations par échantillonnage. Dans un jeu symétrique, chaque joueur reçoit v(N)/n.",
  },
  "subgame-perfect": {
    name: "Équilibre parfait en sous-jeux",
    meaning: "Équilibre parfait en sous-jeux : un équilibre de Nash dont la restriction à chaque sous-jeu est aussi un équilibre de Nash.",
    usage:
      "Selten a introduit ce concept pour écarter les menaces non crédibles ; dans les jeux finis à information parfaite, la récurrence à rebours (backward induction) trouve l’équilibre parfait en sous-jeux (SPE en anglais, ou ENPS). Tapé SPE en mode mathématique, les trois lettres sont des variables italiques multipliées, avec un crénage médiocre ; écrivez \\mathrm{SPE} ou \\text{SPE} dans les formules, et du texte ordinaire dans la prose. Les concepts de solution apparentés s’écrivent de la même façon : \\mathrm{NE}, \\mathrm{PBE} pour l’équilibre bayésien parfait. Tout équilibre parfait en sous-jeux est un équilibre de Nash, mais la réciproque est fausse. Le marchandage séquentiel et les jeux répétés en font un usage intensif.",
  },
  "information-set": {
    name: "Ensemble d’information",
    meaning: "Ensemble d’information d’un jeu sous forme extensive : les nœuds de décision qu’un joueur ne peut pas distinguer quand vient son tour.",
    usage:
      "Chaque ensemble d’information h appartient à un seul joueur, offre les mêmes actions A(h) en chacun de ses nœuds et traduit une information imparfaite, comme des coups cachés. Les stratégies de comportement associent une loi \\sigma_i(h) \\in \\Delta(A(h)) à chacun des ensembles d’information du joueur. Les conventions diffèrent : beaucoup de textes notent les ensembles d’information I ou I_i et réservent h aux historiques ; définissez donc vos notations. L’information parfaite signifie que chaque h est réduit à un seul nœud. La mémoire parfaite exige qu’un joueur n’oublie jamais ses coups ni ses informations antérieurs.",
  },
  "action": {
    name: "Action",
    meaning: "Action du joueur i, un choix fait à un seul point de décision, par opposition à une stratégie complète.",
    usage:
      "Dans les jeux à un coup, actions et stratégies pures coïncident ; beaucoup de textes écrivent donc les profils a = (a_i, a_{-i}) avec a_i \\in A_i. Dans les jeux sous forme extensive et les jeux répétés, les actions sont des coups locaux, tandis que les stratégies associent des actions aux historiques ou aux ensembles d’information. Les articles d’apprentissage et d’apprentissage par renforcement multi-agents notent a_i^t l’action au tour t. Ajoutez des primes pour les alternatives, a_i', et des accolades pour l’indice complémentaire, a_{-i}. Dans les jeux répétés, un historique est une suite de profils d’actions, h^t = (a^0, \\ldots, a^{t-1}).",
  },
};

export default text;
