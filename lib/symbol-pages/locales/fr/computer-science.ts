import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/computer-science/<slug>. */
const text: SymbolPageTranslations = {
  "big-o": {
    name: "Notation grand O",
    meaning: "Borne supérieure asymptotique : f(n) = O(n) signifie que f ne croît pas plus vite qu’un multiple constant de n pour n grand.",
    usage: "Le grand O est l’outil de base de l’analyse d’algorithmes : la recherche linéaire s’exécute en O(n), le tri fusion en O(n \\log n), la multiplication matricielle naïve en O(n^3). En toute rigueur, O(g) est un ensemble de fonctions, si bien que f \\in O(g) est la forme exacte, même si f(n) = O(g(n)) est la convention quasi universelle. Certains auteurs préfèrent un \\mathcal{O}(n) calligraphique pour distinguer l’opérateur d’une variable nommée O ; choisissez une forme et gardez-la dans tout l’article. Écrivez l’argument avec le coût réel à l’intérieur, comme O(n^2 \\log n), plutôt que O(n^2) \\cdot \\log n, et rappelez-vous que O ne borne que par le haut : il n’affirme pas que la borne est atteinte.",
  },
  "big-omega": {
    name: "Notation grand Oméga",
    meaning: "Borne inférieure asymptotique : f(n) = Omega(n) signifie que f croît au moins aussi vite qu’une constante fois n pour n grand.",
    usage: "Le oméga majuscule énonce des bornes inférieures, la plus célèbre étant qu’un tri par comparaisons demande \\Omega(n \\log n) comparaisons dans le pire cas. Il se tape avec la majuscule grecque droite \\Omega ; amsmath propose aussi \\varOmega pour une forme inclinée, que certains typographes préfèrent pour les variables mais qui paraît étrange comme opérateur. Notez que la théorie analytique des nombres utilise le sens plus ancien de Hardy et Littlewood, où \\Omega signifie que la borne n’est pas un o(g) : vérifiez quelle définition suit une source. Associez-le à O pour encadrer un temps d’exécution, et passez à \\Theta dès que les deux bornes coïncident.",
    example: "\\text{le tri par comparaisons prend un temps } \\Omega(n \\log n)",
  },
  "big-theta": {
    name: "Notation grand Thêta",
    meaning: "Borne asymptotique exacte : f(n) = Theta(n) signifie que f est encadrée par deux multiples constants de n.",
    usage: "Thêta est la bonne affirmation quand vous avez démontré des bornes supérieure et inférieure qui coïncident : la recherche dichotomique est en \\Theta(\\log n), et le cas intermédiaire du théorème maître donne \\Theta(n^{\\log_b a} \\log n). Formellement, f \\in \\Theta(g) exactement lorsque f \\in O(g) et f \\in \\Omega(g). Beaucoup d’articles écrivent O là où \\Theta est voulu ; les relecteurs des conférences théoriques le remarquent, donc utilisez \\Theta quand l’optimalité de la borne est le propos. La majuscule \\Theta est droite par défaut ; ne la confondez pas avec la minuscule \\theta, qui désigne généralement un angle ou un vecteur de paramètres, et évitez \\vartheta, variante de la minuscule.",
  },
  "little-o": {
    name: "Notation petit o",
    meaning: "Borne supérieure asymptotique stricte : f(n) = o(n) signifie que f(n)/n tend vers 0 quand n croît.",
    usage: "Le petit o exprime qu’une fonction est négligeable devant une autre, comme dans \\log n = o(n) ou n = o(n^2). Il est strictement plus fort que le grand O : toute fonction en o(g) est en O(g), mais n est un O(n) sans être un o(n). Les analystes l’emploient constamment dans les développements limités, comme \\sin x = x + o(x) quand x \\to 0 ; indiquez donc toujours le point limite lorsqu’il ne s’agit pas de l’infini. Comme c’est simplement la lettre italique o, il n’existe pas de commande dédiée ; veillez à ce que le lecteur ne le prenne pas pour un zéro, et gardez-le en minuscule pour éviter la collision avec le grand O.",
    example: "\\log n = o(n) \\quad \\text{car} \\quad \\lim_{n\\to\\infty} \\frac{\\log n}{n} = 0",
  },
  "little-omega": {
    name: "Notation petit oméga",
    meaning: "Borne inférieure asymptotique stricte : f(n) = omega(n) signifie que f(n)/n tend vers l’infini.",
    usage: "Le petit oméga est le symétrique du petit o : f = \\omega(g) exactement lorsque g = o(f), donc n^2 = \\omega(n) et n \\log n = \\omega(n). Il apparaît moins souvent que \\Omega, surtout dans les preuves de bornes inférieures et les algorithmes probabilistes où une quantité doit croître strictement plus vite que linéairement. Utilisez la minuscule grecque \\omega, et non le w latin, qui lui ressemble dans certaines polices. Attention, le même symbole est surchargé : en théorie des graphes, \\omega(G) est le nombre de clique, et en théorie des nombres \\omega(n) compte les facteurs premiers distincts ; définissez donc votre usage quand les contextes se mélangent.",
  },
  "modulo": {
    name: "Opérateur modulo",
    meaning: "Opérateur binaire modulo : compose « mod » entre deux opérandes, comme dans a mod n, avec l’espacement d’un opérateur.",
    usage: "Utilisez \\bmod pour l’opération de reste au sein d’une expression, comme 17 \\bmod 5 = 2 ou la fonction de hachage h(k) = k \\bmod m. Il produit un mod droit avec une espace moyenne de chaque côté, exactement comme un opérateur binaire. Pour les congruences, utilisez plutôt \\pmod : a \\equiv b \\pmod{n} imprime la forme entre parenthèses, précédée d’une espace supplémentaire. amsmath définit aussi \\mod{n}, qui donne un écart plus large sans parenthèses, et \\pod{n}, qui garde les parenthèses mais supprime le mot. Taper simplement les lettres mod les mettrait en italique comme un produit de variables ; utilisez donc toujours l’une de ces commandes.",
  },
  "logarithm": {
    name: "Logarithme",
    meaning: "Compose le nom de la fonction logarithme en romain droit, avec l’espacement correct avant son argument.",
    usage: "\\log fait partie des noms de fonctions prédéfinis de LaTeX : il imprime un log droit et insère une espace fine avant l’argument, contrairement à log tapé directement, qui met en italique trois variables. Ajoutez une base en indice, comme \\log_2 n pour le logarithme binaire ; en analyse d’algorithmes, \\log sans indice désigne généralement la base 2, alors qu’en mathématiques il désigne souvent le logarithme népérien, donc précisez la convention. LaTeX prédéfinit aussi \\lg pour la base 2 et \\ln pour le logarithme népérien. Lorsque l’argument comporte plus d’un symbole, ajoutez des parenthèses, par exemple \\log(n+1), et utilisez \\left( \\right) pour les arguments hauts.",
  },
  "natural-log": {
    name: "Logarithme népérien",
    meaning: "Imprime le nom du logarithme népérien, ln, en caractères droits avec l’espacement d’un opérateur.",
    usage: "\\ln est la commande prédéfinie pour le logarithme de base e : elle donne un ln droit suivi de l’espacement approprié, comme le font \\sin ou \\exp. On la rencontre dans des identités d’analyse comme \\frac{d}{dx}\\ln x = \\frac{1}{x}, en théorie de l’information quand l’entropie se mesure en nats, et dans les log-vraisemblances. Beaucoup de mathématiciens écrivent \\log pour le logarithme népérien, tandis que les ingénieurs et les informaticiens réservent \\ln à la base e et \\log à la base 10 ou 2 ; restez cohérent. Pour un argument comme une fraction, entourez-le de \\left( et \\right) afin que les parenthèses s’adaptent à sa taille.",
  },
};

export default text;
