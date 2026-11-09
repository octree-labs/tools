import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/graph-theory/<slug>. */
const text: SymbolPageTranslations = {
  "vertex": {
    name: "Sommet",
    meaning: "Lettre minuscule italique v, la lettre conventionnelle pour désigner un sommet d’un graphe.",
    usage:
      "Les sommets s’écrivent avec des lettres minuscules comme u, v, w, et l’appartenance se note v \\in V(G). Le degré d’un sommet est \\deg(v), son voisinage N(v), et une arête entre deux sommets s’écrit souvent uv ou \\{u, v\\}. Comme il s’agit d’une simple lettre, l’essentiel est la cohérence : ne réutilisez pas v pour un vecteur ou une vitesse dans le même texte. L’indexation par des indices, v_1, \\dots, v_n, fournit un ordre utile pour les matrices d’adjacence. Lorsque les sommets portent des étiquettes ou des poids, des fonctions comme w(v) gardent une notation claire.",
  },
  "edge": {
    name: "Arête",
    meaning: "Lettre minuscule italique e, la lettre habituelle pour désigner une arête d’un graphe.",
    usage:
      "Une arête e = uv ou e = \\{u, v\\} relie deux sommets ; dans les graphes orientés, un arc s’écrit e = (u, v), l’ordre comptant. L’appartenance se note e \\in E(G) et les poids des arêtes w(e). Comme e désigne aussi le nombre d’Euler, certains auteurs écrivent cette constante en romain, \\mathrm{e}, pour éviter toute confusion lorsque graphes et exponentielles apparaissent ensemble, par exemple dans les arguments probabilistes. Les arêtes indicées e_1, \\dots, e_m numérotent les colonnes d’une matrice d’incidence. Les extrémités de e s’écrivent parfois e^- et e^+ pour l’origine et la cible.",
  },
  "graph": {
    name: "Graphe",
    meaning: "Définition d’un graphe G comme couple formé d’un ensemble de sommets V et d’un ensemble d’arêtes E.",
    usage:
      "C’est la première ligne de la plupart des raisonnements de théorie des graphes ; elle fixe V comme ensemble des sommets et E \\subseteq \\binom{V}{2} comme ensemble des arêtes pour un graphe simple, ou E \\subseteq V \\times V pour un graphe orienté. Abréviations courantes : n = |V| et m = |E|. Les graphes pondérés l’étendent en G = (V, E, w). Utilisez des parenthèses, et non des chevrons, pour le couple. Dans les textes plus longs, écrivez V(G) et E(G) lorsque plusieurs graphes interviennent. La lettre calligraphique \\mathcal{G} est parfois réservée à une famille de graphes ou à un modèle graphique.",
  },
  "vertex-set": {
    name: "Ensemble des sommets",
    meaning: "Ensemble des sommets du graphe G, écrit comme fonction de G lorsque plusieurs graphes sont étudiés.",
    usage:
      "V(G) précise à quel graphe appartient un ensemble de sommets, ce qui importe quand on compare un graphe à un sous-graphe H, où V(H) \\subseteq V(G). L’ordre du graphe est |V(G)|, souvent abrégé en n ou |G|. Pour le complémentaire et le graphe adjoint, V(\\overline{G}) = V(G) tandis que V(L(G)) = E(G). Le V italique ordinaire est la norme ; aucune commande spéciale n’est nécessaire. Écrivez les définitions en compréhension avec les accolades \\{ \\} et utilisez \\mid ou un deux-points pour la condition. Une somme sur les sommets s’écrit \\sum_{v \\in V(G)}.",
  },
  "edge-set": {
    name: "Ensemble des arêtes",
    meaning: "Ensemble des arêtes du graphe G, c’est-à-dire de toutes les paires de sommets reliées par une arête.",
    usage:
      "On écrit E(G) explicitement lorsque plusieurs graphes sont en jeu ; son cardinal |E(G)|, aussi noté e(G) ou \\|G\\| dans certains textes, est la taille du graphe. Le lemme des poignées de main le relie aux degrés : \\sum_v \\deg(v) = 2|E(G)|. Un graphe simple vérifie |E(G)| \\leq \\binom{n}{2}, et un arbre possède exactement n - 1 arêtes. Attention : E est très surchargé, notamment avec l’espérance en combinatoire probabiliste ; le \\mathbb{E} ajouré pour l’espérance aide à distinguer les deux.",
  },
  "adjacency": {
    name: "Adjacence",
    meaning: "Relation d’adjacence : u et v sont reliés par une arête dans le graphe.",
    usage:
      "\\sim est une relation binaire, donc TeX place des espaces épaisses équilibrées autour, ce qui donne une lecture correcte de u \\sim v. Pour préciser le graphe, écrivez u \\sim_G v. Certains auteurs utilisent plutôt u \\leftrightarrow v ou uv \\in E(G). La non-adjacence s’écrit u \\nsim v. Ne confondez pas \\sim avec \\simeq (équivalence asymptotique ou homotopie), \\approx (approximativement égal) ou \\backsim (tilde inversé). En probabilités, x \\sim p signifie « tiré selon », donc définissez explicitement l’adjacence dans les articles interdisciplinaires. Les voisinages en découlent naturellement : N(v) = \\{u : u \\sim v\\}.",
  },
  "degree": {
    name: "Degré",
    meaning: "Degré du sommet v : le nombre d’arêtes incidentes, les boucles comptant deux fois.",
    usage:
      "\\deg fait partie des noms d’opérateurs prédéfinis de LaTeX : il s’imprime en romain avec l’espacement correct, contrairement à deg tapé directement, qui donne trois lettres italiques. Le lemme des poignées de main énonce \\sum_v \\deg(v) = 2|E|, et beaucoup d’auteurs abrègent en d(v) ou d_G(v). Les degrés minimum et maximum s’écrivent \\delta(G) et \\Delta(G). Pour un graphe en indice, \\deg_G(v) fonctionne naturellement. La même commande compose aussi le degré d’un polynôme, \\deg(p), en algèbre. Un graphe régulier vérifie \\deg(v) = k pour tout sommet.",
  },
  "in-degree": {
    name: "Degré entrant",
    meaning: "Degré entrant du sommet v dans un graphe orienté : le nombre d’arcs qui aboutissent en v.",
    usage:
      "Dans un graphe orienté, chaque arc ajoute un au degré sortant de son origine et un au degré entrant de sa cible, donc \\sum_v \\deg^-(v) = \\sum_v \\deg^+(v) = |E|. Une source vérifie \\deg^-(v) = 0. L’exposant moins est la convention la plus répandue, mais certains textes écrivent d^-(v), \\deg_{\\text{in}}(v) ou \\mathrm{indeg}(v). Mettez l’exposant entre accolades, ^{-}, pour qu’il soit clairement rattaché. Dans les contextes PageRank et chaînes de Markov, le degré entrant reflète le nombre de pages pointant vers un nœud. Le tri topologique par l’algorithme de Kahn retire successivement les sommets de degré entrant nul.",
  },
  "out-degree": {
    name: "Degré sortant",
    meaning: "Degré sortant du sommet v dans un graphe orienté : le nombre d’arcs qui partent de v.",
    usage:
      "Le degré sortant compte les arcs dont v est l’origine ; un puits vérifie \\deg^+(v) = 0. Sommé sur tous les sommets, il vaut |E|, comme le degré entrant total. L’exposant plus est courant, avec d^+(v) et \\deg_{\\text{out}}(v) comme variantes, donc définissez votre notation. Un graphe orienté possède un circuit eulérien exactement lorsqu’il est connexe (en ignorant les sommets isolés) et que \\deg^+(v) = \\deg^-(v) en chaque sommet. En termes de matrice d’adjacence, le degré sortant est une somme de ligne et le degré entrant une somme de colonne. Mettez l’exposant entre accolades, ^{+}, pour la clarté du source.",
  },
  "path": {
    name: "Graphe chemin",
    meaning: "Graphe chemin à n sommets : n sommets reliés en ligne par n - 1 arêtes.",
    usage:
      "P_n est une famille de base de la théorie des graphes, avec C_n et K_n. Les conventions varient, ce qui est une vraie source de confusion : beaucoup de textes font compter les sommets à n, tandis que d’autres, dont Diestel, écrivent P^k pour un chemin à k arêtes. Précisez la vôtre. Les chemins ont un nombre chromatique égal à 2 pour n \\geq 2 et sont des arbres. Dans le dénombrement, le nombre de chemins diffère de celui des marches, car les sommets ne peuvent pas se répéter. L’indice est un simple indice ; pour des indices plus longs, utilisez des accolades, P_{n+1}. Ne confondez pas avec P(n, k), les arrangements.",
  },
  "cycle": {
    name: "Cycle",
    meaning: "Graphe cycle à n sommets (n au moins 3), formant une unique boucle fermée ; aussi le n-ième nombre de Catalan en combinatoire.",
    usage:
      "En théorie des graphes, C_n est le cycle à n sommets et n arêtes ; il est biparti exactement lorsque n est pair, donc \\chi(C_n) = 2 pour n pair et 3 pour n impair. En combinatoire, la même notation désigne couramment le nombre de Catalan C_n = \\frac{1}{n+1}\\binom{2n}{n}, qui compte les parenthésages bien formés, les arbres binaires et les chemins de Dyck : 1, 1, 2, 5, 14, 42. Comme cette page est partagée entre les deux domaines, indiquez tôt le sens choisi. Les accolades sont nécessaires pour les indices composés, C_{2k+1}.",
  },
  "complete-graph": {
    name: "Graphe complet",
    meaning: "Graphe complet à n sommets, dans lequel chaque paire de sommets distincts est reliée par une arête.",
    usage:
      "K_n possède \\binom{n}{2} = n(n-1)/2 arêtes et a pour nombre chromatique n. La lettre rend hommage à Kuratowski, dont le théorème affirme qu’un graphe est planaire si et seulement s’il ne contient aucune subdivision de K_5 ni de K_{3,3}. Les nombres de Ramsey s’énoncent avec des graphes complets : R(3,3) = 6 signifie que toute 2-coloration des arêtes de K_6 contient un triangle monochrome. La formule de Cayley dénombre n^{n-2} arbres couvrants de K_n. Utilisez des accolades pour les indices de plusieurs caractères comme K_{n+1}. Une clique de taille k dans G est un sous-graphe isomorphe à K_k.",
  },
  "bipartite": {
    name: "Graphe biparti complet",
    meaning: "Graphe biparti complet : deux parties de tailles m et n, chaque sommet d’une partie étant relié à chaque sommet de l’autre.",
    usage:
      "K_{m,n} possède m + n sommets et mn arêtes, et K_{1,n} est le graphe étoile. K_{3,3}, le graphe des trois maisons, est l’un des deux sous-graphes interdits de Kuratowski pour la planarité. Notez que la virgule se trouve dans les accolades : K_{m,n} ; écrire K_m,n place n sur la ligne de base. TeX ajoute une petite espace après la virgule en indice, ce qui rend bien ; pour un rendu plus serré, certains écrivent K_{m\\,n} sans virgule, mais c’est rare. Le problème de Zarankiewicz demande combien d’arêtes un graphe peut avoir sans contenir de copie de K_{s,t}.",
    example: "|E(K_{m,n})| = mn, \\quad K_{3,3} \\text{ n'est pas planaire}",
  },
  "adjacency-matrix": {
    name: "Matrice d’adjacence",
    meaning: "Coefficient en ligne i, colonne j de la matrice d’adjacence : 1 si les sommets i et j sont adjacents, 0 sinon.",
    usage:
      "Pour un graphe simple non orienté, la matrice d’adjacence est symétrique avec des zéros sur la diagonale ; dans les graphes pondérés, A_{ij} contient le poids de l’arête. Un résultat classique : (A^k)_{ij} compte les marches de longueur k de i à j, donc \\operatorname{tr}(A^3)/6 est le nombre de triangles. Les degrés sont des sommes de lignes, \\deg(i) = \\sum_j A_{ij}, et le laplacien est L = D - A. Écrivez A_{ij} avec des accolades ; A_ij ne mettrait en indice que le i. Pour des indices séparés par une virgule, A_{i,j} est plus clair lorsque les indices sont des expressions comme A_{i+1,j}.",
    example: "(A^k)_{ij} = \\#\\{\\text{marches de longueur } k \\text{ de } i \\text{ vers } j\\}",
  },
  "incidence-matrix": {
    name: "Matrice d’incidence",
    meaning: "Lettre majuscule B, désignant par convention la matrice d’incidence d’un graphe, avec une ligne par sommet et une colonne par arête.",
    usage:
      "Pour un graphe non orienté, B_{ve} = 1 lorsque le sommet v est une extrémité de l’arête e. Pour un graphe orienté ou muni d’une orientation arbitraire, les coefficients valent -1 à l’origine et +1 à la cible (ou l’inverse, selon l’auteur), et alors BB^\\top = L = D - A, le laplacien du graphe. Certains ouvrages notent cette matrice M ou N au lieu de B. C’est une matrice n \\times m, donc indiquez ses dimensions. Pour une matrice d’incidence non orientée, BB^\\top vaut D + A, le laplacien sans signe, source fréquente d’erreurs de signe.",
  },
  "connected": {
    name: "Connexité",
    meaning: "Relation de connexité : il existe un chemin entre les sommets u et v, qui appartiennent donc à la même composante connexe.",
    usage:
      "\\leftrightarrow est une flèche de la classe des relations, elle reçoit donc un espacement symétrique. En théorie des graphes, u \\leftrightarrow v signifie souvent que u et v sont connectés, tandis que pour les chaînes de Markov il indique que deux états communiquent. Les graphes orientés demandent de la prudence : l’accessibilité mutuelle est la relation de forte connexité, parfois écrite u \\rightleftarrows v. Ne confondez pas \\leftrightarrow avec la flèche plus longue \\longleftrightarrow ni avec la double flèche \\Leftrightarrow, qui exprime l’équivalence logique. Certains auteurs écrivent u \\sim v pour l’adjacence et réservent \\leftrightarrow à la connexité, ce qui est clair si c’est annoncé. C’est une relation d’équivalence dont les classes sont les composantes connexes.",
    example: "u \\leftrightarrow v \\iff \\exists \\text{ un chemin } u\\text{-}v \\text{ dans } G",
  },
  "tree": {
    name: "Arbre",
    meaning: "Lettre majuscule T, la lettre habituelle pour un arbre : un graphe connexe sans cycle.",
    usage:
      "Un arbre à n sommets possède exactement n - 1 arêtes, un unique chemin entre deux sommets quelconques et au moins deux feuilles lorsque n \\geq 2. Les arbres couvrants s’écrivent T \\subseteq G, et la formule de Cayley affirme que K_n possède n^{n-2} arbres couvrants étiquetés. Les algorithmes d’arbre couvrant de poids minimum, comme ceux de Kruskal et de Prim, minimisent w(T) = \\sum_{e \\in T} w(e). Le T italique suffit ; attention aux conflits avec l’exposant de transposition ou le temps, et préférez ^\\top pour les transposées dans les documents qui traitent aussi d’arbres. Les arbres enracinés s’écrivent souvent (T, r).",
  },
  "forest": {
    name: "Forêt",
    meaning: "Lettre majuscule F, désignant par convention une forêt : un graphe acyclique dont les composantes connexes sont des arbres.",
    usage:
      "Une forêt à n sommets et k composantes connexes possède n - k arêtes, ce qui généralise la formule des arbres. Les forêts couvrantes apparaissent dans l’algorithme de Kruskal, qui fait croître une forêt en ajoutant l’arête la moins chère ne créant pas de cycle, et dans la vision matroïdale des graphes, où les forêts sont les ensembles indépendants du matroïde graphique. Simple lettre, F ne nécessite aucune commande, mais elle entre en conflit avec les faces des graphes planaires (formule d’Euler V - E + F = 2) et les nombres de Fibonacci ; changez de lettre si les deux apparaissent. L’arboricité d’un graphe compte les forêts nécessaires pour recouvrir ses arêtes.",
  },
  "chromatic-number": {
    name: "Nombre chromatique",
    meaning: "Nombre chromatique de G : le plus petit nombre de couleurs permettant de colorier les sommets de sorte que deux sommets adjacents soient de couleurs différentes.",
    usage:
      "Écrit avec la lettre grecque \\chi, le nombre chromatique vérifie \\omega(G) \\leq \\chi(G) \\leq \\Delta(G) + 1, et le théorème de Brooks abaisse la borne supérieure à \\Delta(G), sauf pour les graphes complets et les cycles impairs. Le théorème des quatre couleurs affirme que \\chi(G) \\leq 4 pour les graphes planaires. La version pour les arêtes est l’indice chromatique \\chi'(G). Ne confondez pas \\chi avec le x latin, qui lui ressemble dans certaines polices, ni avec la caractéristique d’Euler, qui utilise aussi \\chi. Le calcul de \\chi(G) est NP-difficile, si bien que de nombreux articles donnent des bornes plutôt que des valeurs exactes.",
  },
  "clique": {
    name: "Nombre de clique",
    meaning: "Nombre de clique de G : la taille du plus grand sous-graphe complet contenu dans le graphe.",
    usage:
      "Le nombre de clique minore le nombre chromatique, \\omega(G) \\leq \\chi(G), et les graphes où l’égalité vaut pour tout sous-graphe induit sont dits parfaits. Il est le pendant du nombre de stabilité : \\omega(G) = \\alpha(\\overline{G}), où \\overline{G} est le complémentaire. Le déterminer est NP-difficile. Utilisez la lettre grecque minuscule \\omega, et non w. Le symbole est surchargé ailleurs : notation asymptotique petit oméga et \\omega(n), le nombre de facteurs premiers distincts ; une courte définition aide donc dans les contextes mixtes. Le théorème de Turán borne le nombre d’arêtes d’un graphe tel que \\omega(G) \\leq r.",
  },
  "independent-set": {
    name: "Nombre de stabilité",
    meaning: "Nombre de stabilité de G : la taille du plus grand ensemble de sommets deux à deux non adjacents, c’est-à-dire du plus grand stable.",
    usage:
      "Le nombre de stabilité vérifie \\alpha(G) \\cdot \\chi(G) \\geq |V(G)|, puisque chaque classe de couleur est un stable, et \\alpha(G) = \\omega(\\overline{G}). L’identité de Gallai le relie au nombre de transversalité : \\alpha(G) + \\tau(G) = |V(G)|. Son calcul est NP-difficile en général mais facile pour les graphes bipartis grâce au théorème de König. Utilisez \\alpha, la lettre grecque, bien distincte du a dans la plupart des polices. Les analogues pour les arêtes sont \\alpha'(G) ou \\nu(G), le nombre de couplage. La borne de Caro-Wei donne \\alpha(G) \\geq \\sum_v 1/(\\deg(v)+1).",
  },
  "matching": {
    name: "Couplage",
    meaning: "Lettre majuscule M, la lettre usuelle pour un couplage : un ensemble d’arêtes dont deux quelconques n’ont aucun sommet commun.",
    usage:
      "Un couplage M \\subseteq E(G) est parfait lorsqu’il couvre tous les sommets, de sorte que |M| = |V(G)|/2, et maximum lorsqu’il n’en existe pas de plus grand ; sa taille est le nombre de couplage \\nu(G). Le théorème de Hall donne la condition d’existence d’un couplage parfait dans un graphe biparti : |N(S)| \\geq |S| pour toute partie S d’un des côtés. Parmi les algorithmes figurent Hopcroft-Karp pour les graphes bipartis et l’algorithme des fleurs d’Edmonds dans le cas général. Les chemins augmentants s’écrivent souvent relativement à M, et la différence symétrique M \\triangle M' apparaît dans de nombreuses démonstrations. Évitez M si une matrice doit aussi être nommée.",
    example: "M \\subseteq E(G), \\quad |M| = |V(G)|/2 \\text{ si } M \\text{ est parfait}",
  },
  "planar-graph": {
    name: "Graphe planaire",
    meaning: "Plongement d’un graphe G dans le plan, où les arêtes ne se rencontrent qu’en leurs extrémités communes ; G est alors planaire.",
    usage:
      "La flèche à crochet \\hookrightarrow désigne par convention une injection ou un plongement, donc G \\hookrightarrow \\mathbb{R}^2 indique que G peut être dessiné dans le plan sans croisement. Les graphes planaires connexes vérifient la formule d’Euler V - E + F = 2, et les graphes planaires simples d’au moins trois sommets ont au plus 3V - 6 arêtes. Les théorèmes de Kuratowski et de Wagner les caractérisent en interdisant K_5 et K_{3,3}. \\hookrightarrow est une flèche espacée comme une relation ; sa symétrique est \\hookleftarrow. Le plongement dans la sphère est équivalent, et pour d’autres surfaces on écrit G \\hookrightarrow S_g.",
  },
};

export default text;
