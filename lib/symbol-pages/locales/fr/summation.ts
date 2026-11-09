import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/summation/<slug>. */
const text: SymbolPageTranslations = {
  "summation": {
    name: "Somme",
    meaning: "Opérateur de sommation en forme de sigma majuscule, qui additionne les termes d’une suite.",
    usage: "Les bornes s’ajoutent avec _ et ^ : \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}. En mode hors texte, les bornes sont centrées sous et au-dessus d’un sigma agrandi, tandis qu’en ligne elles se placent sur le côté et le signe reste petit ; \\limits et \\nolimits modifient ce comportement. Utilisez \\sum plutôt que \\Sigma, qui n’est que la lettre grecque et qui ne s’agrandit pas et n’empile pas les bornes. Pour des conditions sur plusieurs lignes sous le signe, \\substack{0 \\le i \\le m \\\\ 0 < j < n} les empile proprement. Une somme avec seulement un indice, \\sum_i, est courante en physique et en apprentissage automatique lorsque l’intervalle est évident.",
  },
  "summation-to-infinity": {
    name: "Somme jusqu’à l’infini",
    meaning: "Somme dont l’indice va de n = 0 à l’infini, la forme utilisée pour les séries entières.",
    usage: "Commencer à zéro est naturel pour les séries entières et les séries de Taylor : e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} et la série géométrique \\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r} pour |r| < 1. Vérifiez soigneusement l’indice de départ, car passer de n = 0 à n = 1 supprime le premier terme et change la forme close. En mode hors texte, les bornes sont empilées ; en ligne, elles passent à côté du sigma. Lorsque la borne supérieure est l’infini, \\sum_{n \\ge 0} est une alternative compacte. Les séries génératrices d’une suite a_n s’écrivent de la même façon, \\sum_{n=0}^{\\infty} a_n x^n.",
  },
  "product": {
    name: "Produit",
    meaning: "Opérateur de produit en forme de pi majuscule, qui multiplie les termes d’une suite.",
    usage: "Les bornes fonctionnent comme pour \\sum : n! = \\prod_{k=1}^{n} k, et en statistique la vraisemblance L(\\theta) = \\prod_{i=1}^{n} f(x_i \\mid \\theta). Il est plus grand que la lettre \\Pi et place les bornes au-dessus et en dessous en style hors texte : ne le remplacez donc pas par la lettre grecque. Passer au logarithme transforme un produit en somme, \\log\\prod_i a_i = \\sum_i \\log a_i, une étape présente dans presque toute dérivation du maximum de vraisemblance. Les produits cartésiens d’ensembles, \\prod_{i \\in I} X_i, utilisent la même commande. Son pendant renversé, \\coprod, désigne les coproduits.",
  },
  "coproduct": {
    name: "Coproduit",
    meaning: "Signe de produit renversé désignant le coproduit, par exemple une union disjointe d’ensembles.",
    usage: "La théorie des catégories et la topologie algébrique emploient \\coprod_{i \\in I} X_i pour le coproduit d’une famille : union disjointe pour les ensembles et les espaces, somme directe pour les groupes abéliens ou les modules. C’est un grand opérateur comme \\prod, donc les bornes s’empilent en dessous et au-dessus en style hors texte. Ne le confondez pas avec \\amalg, sa petite version binaire pour exactement deux objets, X \\amalg Y. Les unions disjointes s’écrivent aussi \\bigsqcup, dont la forme évoque une coupe ; choisissez celle qu’utilise votre domaine. La construction duale, le produit catégorique, utilise \\prod.",
  },
  "big-union-with-index": {
    name: "Grande union indexée",
    meaning: "Grande union sur une famille indexée d’ensembles, de A_1 à A_n.",
    usage: "Les unions finies et dénombrables, \\bigcup_{i=1}^{n} A_i ou \\bigcup_{n=1}^{\\infty} A_n, apparaissent en théorie de la mesure pour l’additivité dénombrable, dans l’inégalité de la borne de l’union en probabilités et en topologie pour les recouvrements ouverts. \\bigcup est le grand opérateur ; \\cup est la version binaire pour deux ensembles, A \\cup B. Les bornes s’empilent en dessous et au-dessus en mode hors texte et passent sur le côté en ligne. Les ensembles d’indices ne sont pas forcément numériques : \\bigcup_{\\alpha \\in \\Lambda} U_\\alpha est courant pour des recouvrements quelconques. Pour une union d’ensembles deux à deux disjoints, passez à \\bigsqcup ou précisez la disjonction en toutes lettres.",
  },
  "big-intersection-with-index": {
    name: "Grande intersection indexée",
    meaning: "Grande intersection sur une famille indexée d’ensembles, de A_1 à A_n.",
    usage: "Les intersections de familles indexées servent à énoncer des résultats comme le théorème des segments emboîtés, \\bigcap_{n=1}^{\\infty} [a_n, b_n] \\neq \\varnothing, ou à définir la tribu engendrée par une collection comme l’intersection de toutes les tribus qui la contiennent. Utilisez \\bigcap pour les familles et \\cap pour deux ensembles, A \\cap B. Les lois de De Morgan relient les deux grands opérateurs : \\left(\\bigcup_i A_i\\right)^c = \\bigcap_i A_i^c. En style hors texte, les indices se placent en dessous et au-dessus ; en ligne, n’ajoutez \\limits qu’en cas de besoin. Une intersection sur une famille d’indices vide n’a de sens que relativement à un ensemble ambiant : précisez donc lequel.",
  },
  "big-wedge": {
    name: "Grande conjonction",
    meaning: "Grand opérateur en coin pour la conjonction de nombreux énoncés ou pour une puissance extérieure.",
    usage: "En logique, \\bigwedge_{i=1}^{n} \\varphi_i est la conjonction de n formules, la forme n-aire de \\wedge (aussi \\land) ; la forme normale conjonctive est une \\bigwedge de clauses. En théorie des treillis, il désigne la borne inférieure (meet) d’un ensemble, et en géométrie différentielle \\bigwedge^k V est la k-ième puissance extérieure d’un espace vectoriel. Les bornes se comportent comme celles de \\sum : empilées en mode hors texte, à côté du signe en ligne. Ne le confondez pas avec \\Lambda, la majuscule grecque, que certains auteurs utilisent en taille normale pour les puissances extérieures. Son opérateur dual est \\bigvee.",
  },
  "big-vee": {
    name: "Grande disjonction",
    meaning: "Grand opérateur en V pour la disjonction de nombreux énoncés ou pour la borne supérieure dans un treillis.",
    usage: "La logique utilise \\bigvee_{i=1}^{n} \\varphi_i pour une disjonction de n termes, qui généralise \\vee (aussi \\lor) ; la forme normale disjonctive est littéralement une \\bigvee de termes \\bigwedge. En théorie des ordres et des treillis, \\bigvee S est la borne supérieure (join) d’un ensemble S. En tant que grand opérateur, ses bornes s’empilent en mode hors texte et passent sur le côté en ligne. N’utilisez pas à sa place la lettre V ou un \\vee avec indice, qui restent petits et ne positionnent pas les bornes. En topologie algébrique, \\bigvee_{i} S^1 désigne un bouquet de cercles, obtenu en recollant des espaces pointés en leurs points base.",
  },
  "big-direct-sum": {
    name: "Grande somme directe",
    meaning: "Grand plus cerclé, la somme directe d’une famille d’espaces ou de modules.",
    usage: "Un opérateur diagonalisable décompose son espace en sous-espaces propres, V = \\bigoplus_{\\lambda} E_\\lambda, et les anneaux gradués s’écrivent \\bigoplus_{n \\ge 0} R_n. \\oplus est la forme binaire pour deux termes, U \\oplus W. En informatique et en cryptographie, \\bigoplus_{i} x_i désigne souvent le XOR de nombreux bits, avec le même glyphe. Les bornes s’empilent en style hors texte comme pour \\sum. Notez que la somme directe d’une infinité de modules diffère du produit direct \\prod, qui autorise une infinité de composantes non nulles : choisissez donc l’opérateur qui correspond à votre construction.",
  },
  "big-tensor-product": {
    name: "Grand produit tensoriel",
    meaning: "Grand fois cerclé, le produit tensoriel d’une famille d’espaces ou d’opérateurs.",
    usage: "L’informatique quantique écrit l’espace des états de n qubits sous la forme \\bigotimes_{i=1}^{n} \\mathbb{C}^2, et l’algèbre multilinéaire construit l’algèbre tensorielle T(V) = \\bigoplus_k V^{\\otimes k}. La forme binaire \\otimes relie deux facteurs, A \\otimes B, et désigne aussi le produit de Kronecker de matrices. En tant que grand opérateur, \\bigotimes prend des bornes empilées en mode hors texte. Gardez la notation en exposant V^{\\otimes n} pour les puissances tensorielles répétées d’un même espace ; elle est plus compacte qu’un grand opérateur avec bornes. Précisez l’anneau ou le corps de base lorsqu’il n’est pas évident, comme dans \\otimes_R.",
  },
  "big-circle-dot": {
    name: "Grand point cerclé",
    meaning: "Grand point cerclé, utilisé pour un produit n-aire terme à terme ou symétrique.",
    usage: "\\bigodot est la version grand opérateur de \\odot. En apprentissage automatique, \\odot désigne le produit de Hadamard, ou produit terme à terme, donc \\bigodot_{i=1}^{n} \\mathbf{v}_i peut désigner le produit terme à terme de nombreux vecteurs ; les articles sur la décomposition tensorielle utilisent \\odot pour le produit de Khatri-Rao, et certains ouvrages d’algèbre l’emploient pour les puissances symétriques. Comme son sens varie selon le domaine, définissez-le dans votre section de notations. Les bornes s’empilent comme celles de \\sum en style hors texte. Ne le confondez pas avec \\bigcirc, un grand cercle vide doté de l’espacement d’un opérateur binaire, et non un grand opérateur.",
  },
  "big-square-union": {
    name: "Grande union carrée",
    meaning: "Grande coupe carrée, désignant l’union disjointe d’une famille indexée d’ensembles.",
    usage: "Écrire X = \\bigsqcup_{i \\in I} X_i indique à la fois une union et le fait que les morceaux sont deux à deux disjoints, une convention courante en topologie, en théorie de la mesure et en théorie des catégories. La forme binaire est \\sqcup, comme dans A \\sqcup B. \\coprod est une alternative que certains auteurs préfèrent pour la même construction catégorique, alors que \\bigcup seul ne dit rien de la disjonction. En théorie des domaines et en sémantique dénotationnelle, \\bigsqcup désigne en revanche la borne supérieure d’un ensemble filtrant. En tant que grand opérateur, ses bornes s’empilent en mode hors texte et se placent sur le côté en ligne.",
  },
  "double-sum": {
    name: "Somme double",
    meaning: "Deux sommes imbriquées, sur i de 1 à m et sur j de 1 à n, comme pour additionner les coefficients d’une matrice.",
    usage: "Les sommes doubles additionnent tous les coefficients d’un tableau m par n, comme dans la norme de Frobenius \\lVert A \\rVert_F^2 = \\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{ij}^2. LaTeX place les deux opérateurs côte à côte avec un espacement adapté : inutile donc d’ajouter un espace à la main entre eux. Lorsque les deux indices partagent une condition, un seul signe comme \\sum_{i,j} ou \\sum_{1 \\le i < j \\le n} est plus compact, et \\substack empile plusieurs conditions sous un même sigma. Intervertir l’ordre de sommes doubles finies est toujours valide, mais les sommes infinies exigent la convergence absolue ou des termes positifs.",
  },
  "indexed-sum": {
    name: "Somme sur un ensemble d’indices",
    meaning: "Somme sur chaque élément k d’un ensemble K plutôt que sur un intervalle numérique.",
    usage: "Les sommes indexées par un ensemble sont naturelles lorsque l’ensemble d’indices n’est pas un intervalle : sommes sur les nombres premiers \\sum_{p \\le x}, sur les diviseurs \\sum_{d \\mid n}, ou sur les sommets dans le lemme des poignées de main \\sum_{v \\in V} \\deg v = 2|E|. Elles ont un sens pour tout ensemble fini, et pour les ensembles infinis lorsque la série converge absolument, puisqu’aucun ordre n’est sous-entendu. Pour plusieurs conditions, utilisez \\substack, comme dans \\sum_{\\substack{k \\in K \\\\ k \\ne 0}}. En mode hors texte, la condition est centrée sous le sigma : gardez-la courte pour éviter un large vide autour de l’opérateur.",
  },
};

export default text;
