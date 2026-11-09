import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/order/<slug>. */
const text: SymbolPageTranslations = {
  "curly-precedes": {
    name: "Précédence courbe",
    meaning: "Relation courbe « précède ou égal », utilisée pour les ordres larges et les relations de préférence distinctes du ≤ numérique habituel.",
    usage: "Les spécialistes de la théorie des ordres et les économistes recourent à \\preccurlyeq lorsqu'un préordre abstrait a besoin d'un symbole nettement différent de \\leq, par exemple la préférence faible d'un consommateur x \\preccurlyeq y ou l'ordre de dominance sur les partitions. Son pendant strict est \\prec, et son symétrique est \\succcurlyeq. Ne le confondez pas avec \\preceq, qui porte en dessous une barre droite au lieu de la barre courbe ; certains auteurs utilisent les deux dans un même article pour marquer deux ordres distincts. Comme c'est une relation, TeX l'entoure automatiquement d'espaces épaisses : ne l'encadrez jamais à la main avec \\, ou \;.",
    example: "x \\preccurlyeq y \\text{ et } y \\preccurlyeq z \\implies x \\preccurlyeq z",
  },
  "curly-succeeds": {
    name: "Succession courbe",
    meaning: "Relation courbe « succède ou égal », l'inverse de \\preccurlyeq pour les ordres faibles, les préférences et la majorisation.",
    usage: "En microéconomie, x \\succcurlyeq y se lit « x est faiblement préféré à y », et en algèbre linéaire il désigne parfois la majorisation ou une inégalité généralisée. Le \\succeq à barre droite lui ressemble et c'est le choix le plus courant pour les matrices semi-définies positives (A \\succeq 0) : choisissez une convention et tenez-la dans tout l'article. La version stricte est \\succ. Comme la négation d'une relation avec \\not peut être maladroite, vérifiez le rendu : il existe des négations dédiées comme \\nsucceq pour la forme à barre droite, souvent plus jolies que \\not\\succcurlyeq.",
  },
  "not-less-than": {
    name: "Signe non inférieur à",
    meaning: "Signe inférieur à barré : indique qu'une quantité n'est pas strictement plus petite qu'une autre.",
    usage: "Écrire a \\nless b revient logiquement à a \\geq b dans un ordre total, mais dans un ordre partiel les deux disent des choses différentes, et c'est précisément là que \\nless se justifie : deux éléments incomparables vérifient à la fois a \\nless b et b \\nless a. Le glyphe est un symbole précomposé unique avec une barre, donc plus propre que \\not<, dont la barre peut être décentrée. Son compagnon pour l'autre sens est \\ngtr. Pour les versions larges niées, utilisez \\nleq ou \\nleqslant plutôt que d'empiler \\not.",
    example: "a \\nless b \\text{ et } b \\nless a \\text{ (incomparables)}",
  },
  "not-greater-than": {
    name: "Signe non supérieur à",
    meaning: "Signe supérieur à barré, qui affirme que le membre de gauche n'est pas strictement plus grand que celui de droite.",
    usage: "Le nom de la commande supprime les voyelles de « greater » (\\ngtr, et non \\ngt ou \\ngreater), ce qui piège ceux qui la tapent de mémoire. Dans un ordre total, x \\ngtr y signifie simplement x \\leq y, et la plupart des auteurs préfèrent la forme positive ; \\ngtr est plus naturel dans les ordres partiels, les treillis ou pour énoncer l'échec d'une hypothèse, comme une suite qui n'est pas à partir d'un certain rang supérieure à une borne. Associez-le à \\nless pour l'autre sens et à \\ngeq pour la version large niée. Il a l'espacement d'une relation, comme > lui-même.",
  },
  "not-less-or-equal": {
    name: "Signe non inférieur ou égal à",
    meaning: "Non inférieur ou égal à : négation de ≤, avec une barre oblique sur la forme à trait horizontal.",
    usage: "Utilisez \\nleq pour énoncer qu'une inégalité est fausse, par exemple dans des contre-exemples ou dans des ensembles ordonnés où x \\nleq y n'implique pas y \\leq x. Il existe trois glyphes apparentés : \\nleq nie le \\leq à un trait, \\nleqslant nie le \\leqslant incliné et \\nleqq nie le \\leqq à double trait. Accordez la négation au style non nié utilisé dans le reste du document pour que les symboles forment une famille. Le \\nleq précomposé est préférable à \\not\\leq, qui place une barre générique pas toujours alignée sur le trait.",
    example: "\\exists\\, x, y \\in P : x \\nleq y \\text{ et } y \\nleq x",
  },
  "not-greater-or-equal": {
    name: "Signe non supérieur ou égal à",
    meaning: "Non supérieur ou égal à : la forme barrée de ≥, qui signale que l'inégalité est fausse.",
    usage: "En analyse réelle, x \\ngeq 0 équivaut simplement à x < 0, mais pour les ordres sur les vecteurs ou les matrices c'est plus faible : un vecteur peut ne pas être positif composante par composante sans être négatif, et \\ngeq est alors le symbole exact. Il appartient à la même famille que \\nleq, \\ngeqslant et \\ngeqq ; choisissez la version dont le jumeau non nié figure dans votre texte. Évitez \\not\\geq si l'apparence compte, car la barre générique est positionnée pour = et peut sembler mal placée. Comme toutes les relations, il reçoit automatiquement une espace épaisse.",
    example: "\\mathbf{v} \\ngeq \\mathbf{0} \\text{ bien que } v_1 > 0",
  },
  "minimum": {
    name: "Minimum",
    meaning: "Opérateur minimum, qui donne la plus petite valeur d'un ensemble fini ou la plus petite valeur atteinte par une fonction.",
    usage: "\\min est un nom d'opérateur prédéfini : il imprime « min » en romain avec l'espacement correct, et en mode hors texte l'indice se place en dessous, comme dans \\min_{x \\in S} f(x). En ligne, l'indice passe sur le côté pour économiser de la hauteur ; forcez-le en dessous avec \\min\\limits_{x} si c'est vraiment nécessaire. Taper simplement min en mode mathématique donne trois variables en italique multipliées, une erreur fréquente. Il n'existe pas de commande intégrée pour l'argument qui minimise : définissez \\DeclareMathOperator*{\\argmin}{arg\\,min} dans le préambule. Distinguez \\min de \\inf, qui n'est pas forcément atteint.",
  },
  "maximum": {
    name: "Maximum",
    meaning: "Opérateur maximum : le plus grand élément d'un ensemble ou la plus grande valeur atteinte par une fonction sur son domaine.",
    usage: "Les problèmes d'optimisation, la norme infinie \\|x\\|_\\infty = \\max_i |x_i| et les activations ReLU \\max(0, x) reposent tous sur \\max. Il se comporte comme \\sum pour les bornes : sous l'opérateur en style hors texte, à côté dans le texte courant. Les parenthèses qui suivent ne sont pas redimensionnées automatiquement : écrivez \\max\\left( a, b \\right) ou \\max\\bigl( \\dots \\bigr) quand l'argument contient des fractions. Lorsque le maximum peut ne pas exister, utilisez plutôt \\sup. Pour un opérateur argmax, déclarez-le avec la forme étoilée \\DeclareMathOperator* afin que son indice passe aussi en dessous dans les formules centrées.",
  },
  "infimum": {
    name: "Borne inférieure (infimum)",
    meaning: "Infimum, le plus grand minorant d'un ensemble de réels, qui existe même en l'absence de minimum.",
    usage: "L'ensemble \\{1/n : n \\in \\mathbb{N}\\} a un \\inf égal à 0 mais pas de minimum : c'est l'exemple classique qui montre pourquoi l'analyse a besoin de \\inf plutôt que de \\min. La commande compose « inf » en romain avec l'espacement d'un opérateur et des bornes en dessous en style hors texte, si bien que \\inf_{n \\ge 1} a_n s'affiche correctement dans un environnement equation. Une erreur courante consiste à confondre \\inf avec \\infty, le symbole de l'infini. Parmi les opérateurs apparentés figurent \\liminf, qui existe déjà comme commande, et la borne inférieure essentielle, à définir vous-même, par exemple avec \\operatorname*{ess\\,inf}.",
  },
  "supremum": {
    name: "Borne supérieure (supremum)",
    meaning: "Supremum : le plus petit majorant d'un ensemble, au cœur de la complétude des réels et de la définition des normes.",
    usage: "Les normes d'opérateur s'écrivent \\|A\\| = \\sup_{\\|x\\| = 1} \\|Ax\\|, et la norme uniforme d'une fonction est \\sup_x |f(x)|. La commande place son indice en dessous en mode hors texte et à droite en ligne, exactement comme \\lim. Utilisez \\limsup pour la limite supérieure plutôt que de combiner \\lim et \\sup à la main, et rappelez-vous que \\sup existe pour toute partie non vide et majorée des réels, alors que \\max peut ne pas exister. Quand la condition en indice est longue, empilez des lignes avec \\substack{...} sous l'opérateur au lieu d'entasser un seul indice très large.",
  },
  "least-upper-bound": {
    name: "Plus petit majorant",
    meaning: "Abréviation « lub » (least upper bound) du plus petit majorant, ancien synonyme de borne supérieure courant en théorie des ordres et des treillis.",
    usage: "Les manuels sur les ensembles ordonnés et les treillis écrivent parfois \\text{lub}\\, S au lieu de \\sup S, et la borne supérieure a \\vee b est le lub d'une paire. Composer l'abréviation avec \\text fonctionne, mais présente deux défauts : \\text reprend la police environnante, donc elle passe en italique dans un théorème en italique, et elle ne reçoit pas l'espacement d'opérateur avant l'argument. La solution propre est \\operatorname{lub} ou une ligne de préambule \\DeclareMathOperator{\\lub}{lub}, qui la garde en romain et espacée comme \\sup. Utilisez la déclaration étoilée si vous voulez les indices en dessous dans les formules centrées.",
  },
  "greatest-lower-bound": {
    name: "Plus grand minorant",
    meaning: "Abréviation « glb » (greatest lower bound) du plus grand minorant, le nom que donne la théorie des ordres à la borne inférieure d'un ensemble.",
    usage: "En théorie des treillis, la borne inférieure a \\wedge b est définie comme le glb de a et b, et les treillis complets sont ceux où toute partie possède un glb et un lub. Comme LaTeX ne fournit pas de \\glb, on écrit souvent \\text{glb}, qui s'affiche en romain dans le texte normal mais hérite de l'italique dans les environnements de théorème et n'a pas l'espace fine qu'un opérateur devrait avoir. Préférez \\operatorname{glb} ou \\DeclareMathOperator{\\glb}{glb} pour un résultat cohérent. Si vos lecteurs viennent de l'analyse plutôt que de la théorie des ordres, \\inf sera peut-être la notation la plus familière pour la même notion.",
  },
};

export default text;
