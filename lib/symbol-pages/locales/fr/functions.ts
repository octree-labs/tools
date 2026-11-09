import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/functions/<slug>. */
const text: SymbolPageTranslations = {
  "function": {
    name: "Fonction",
    meaning: "Fonction f appliquée à un argument x, la notation de base pour la valeur d’une fonction.",
    usage:
      "Les noms d’une seule lettre comme f, g et h se composent en italique, ce qui convient aux symboles désignant des fonctions. Les fonctions nommées de plusieurs lettres sont différentes : écrivez \\sin x ou \\log x, et pour vos propres noms utilisez \\operatorname{softmax}(z) afin qu’ils s’impriment en romain et non comme un produit de lettres italiques. En optimisation, f(x) est souvent la fonction objectif, comme dans \\min_x f(x) sous contraintes. Lorsque l’argument est haut, utilisez \\left( \\right) ou \\bigl( \\bigr) pour dimensionner les parenthèses. Pour un argument vectoriel, f(\\mathbf{x}) avec un x gras est courant.",
  },
  "function-definition": {
    name: "Définition d’une fonction",
    meaning: "Déclare f comme fonction de l’ensemble de départ A vers l’ensemble d’arrivée B.",
    usage:
      "Cette ligne de signature ouvre la plupart des définitions en analyse et en algèbre, souvent suivie de la règle sur les éléments x \\mapsto x^2. Un simple deux-points donne un espacement de relation des deux côtés, trop large ; \\colon donne l’espacement serré d’une ponctuation, f\\colon A \\to B. \\to et \\rightarrow produisent la même flèche ; \\longrightarrow la met en valeur dans les formules hors texte. Associez-la à \\mapsto pour la règle sur les éléments : f\\colon \\mathbb{R} \\to \\mathbb{R}, x \\mapsto x^2. Les diagrammes comportant plusieurs applications entre plusieurs objets se tracent mieux avec un environnement dédié aux diagrammes commutatifs.",
  },
  "composition": {
    name: "Composition de fonctions",
    meaning: "Composée de f et de g : on applique d’abord g, puis f au résultat.",
    usage:
      "La composition se lit de droite à gauche : (f \\circ g)(x) = f(g(x)) ; elle est associative mais généralement pas commutative. \\circ est un opérateur binaire, l’espacement autour est donc automatique. N’utilisez pas un \\circ sur la ligne de base pour les degrés, qui demandent ^{\\circ}, et ne le confondez pas avec \\cdot ou \\bullet, qui évoquent une multiplication. La composition itérée s’écrit souvent f^{\\circ n} pour éviter toute confusion avec les puissances f^n. La formule classique qui la fait intervenir est la dérivation des fonctions composées : (f \\circ g)'(x) = f'(g(x))\\,g'(x), avec la dérivée intérieure à droite.",
  },
  "inverse-function": {
    name: "Fonction réciproque",
    meaning: "Fonction réciproque de f, l’application qui défait f, de sorte que f^{-1}(f(x)) = x.",
    usage:
      "Seules les bijections admettent une réciproque sur tout leur ensemble d’arrivée, mais f^{-1}(B) sert aussi à noter l’image réciproque d’un ensemble B par une fonction quelconque, notion différente qui n’exige aucune inversibilité. L’exposant -1 ne signifie pas l’inverse multiplicatif : f^{-1}(x) diffère de 1/f(x), confusion fréquente chez les étudiants qui touche aussi \\sin^{-1}. Les accolades sont nécessaires, car -1 compte deux lexèmes. Le théorème d’inversion locale donne la dérivée (f^{-1})'(y) = 1/f'(x) où y = f(x), pourvu que f'(x) \\neq 0.",
  },
  "image": {
    name: "Image",
    meaning: "Image de f, l’ensemble de toutes les valeurs effectivement prises par f, notée avec un « Im » droit.",
    usage:
      "En algèbre linéaire, \\text{Im}(T) est l’espace engendré par les colonnes de l’application, et le théorème du rang s’écrit \\dim\\ker T + \\dim \\text{Im}\\, T = \\dim V. Attention, \\Im est une autre commande : elle donne un I gothique utilisé pour la partie imaginaire d’un nombre complexe. Beaucoup d’auteurs écrivent \\operatorname{im} en minuscules ou déclarent \\DeclareMathOperator{\\im}{im}, qui s’espace correctement et n’hérite pas de l’italique des théorèmes comme le fait \\text. La notation ensembliste f(A) est une alternative lorsque vous voulez l’image d’une partie donnée plutôt que de tout l’ensemble de départ.",
  },
  "kernel": {
    name: "Noyau",
    meaning: "Noyau de f : tout ce que f envoie sur zéro, un sous-espace vectoriel ou un sous-groupe distingué.",
    usage:
      "\\ker est un opérateur prédéfini ; il s’imprime donc en romain avec le bon espacement : \\ker T = \\{v \\in V \\mid T(v) = 0\\}. Un morphisme est injectif exactement lorsque son noyau est trivial, et le premier théorème d’isomorphisme énonce G/\\ker\\varphi \\cong \\operatorname{im}\\varphi. Les parenthèses sont facultatives pour un symbole seul, \\ker A. En algèbre linéaire, le noyau est aussi appelé espace nul, parfois noté N(A) ou \\operatorname{null}(A). Il n’existe pas d’opérateur intégré pour l’image qui lui corresponde ; déclarez donc \\im ou utilisez \\operatorname{im}.",
  },
  "domain": {
    name: "Domaine de définition",
    meaning: "Domaine de définition de f, l’ensemble des entrées sur lesquelles la fonction est définie.",
    usage:
      "L’analyse convexe s’en sert beaucoup : \\operatorname{dom} f = \\{x \\mid f(x) < \\infty\\} est le domaine effectif d’une fonction convexe à valeurs dans la droite achevée. \\text{dom} s’imprime en romain mais peut passer en italique dans un environnement de théorème et n’a pas l’espacement d’un opérateur ; \\operatorname{dom} évite ces deux problèmes. Dans une signature f\\colon A \\to B, A est déjà l’ensemble de départ ; \\text{dom}(f) est donc surtout utile lorsque le domaine est implicite ou partiel, comme pour les opérateurs non bornés sur les espaces de Hilbert. Certains textes utilisent D(f) ou D_f ; suivez la convention de votre domaine.",
  },
  "codomain": {
    name: "Ensemble d’arrivée",
    meaning: "Ensemble d’arrivée de f, l’ensemble cible déclaré pour les valeurs de la fonction.",
    usage:
      "Dans f\\colon A \\to B, l’ensemble d’arrivée est B, qui peut être plus grand que l’image ; f est surjective exactement lorsque \\text{Im}(f) = \\text{cod}(f). La théorie des catégories écrit \\operatorname{cod} f à côté de \\operatorname{dom} f pour le but et la source d’un morphisme. Comme pour les autres étiquettes textuelles, \\operatorname{cod} donne un meilleur espacement et évite que l’italique déborde dans les énoncés de théorèmes. Certains auteurs écrivent \\operatorname{codom} pour plus de clarté. Distinguer l’ensemble d’arrivée de l’ensemble des valeurs est important, car certains livres emploient le mot anglais range pour l’ensemble d’arrivée et d’autres pour l’image.",
    example: "f \\text{ est surjective} \\iff \\text{Im}(f) = \\text{cod}(f)",
  },
  "range": {
    name: "Ensemble des valeurs",
    meaning: "Ensemble des valeurs de f (range en anglais), désignant le plus souvent l’ensemble des valeurs que f atteint effectivement.",
    usage:
      "Le terme anglais range est ambigu : la plupart des textes modernes le traitent comme l’image, mais certains plus anciens l’emploient pour l’ensemble d’arrivée ; précisez donc votre définition. En algèbre linéaire, \\text{range}(A) est l’espace engendré par les colonnes, et le théorème fondamental de l’algèbre linéaire affirme qu’il est l’orthogonal du noyau de A^{\\top}. Composer avec \\operatorname{range} donne des lettres droites avec l’espacement d’un opérateur ; les spécialistes de théorie des opérateurs écrivent souvent \\mathcal{R}(A) ou \\operatorname{ran} T. \\text{range} fonctionne, mais suit la police du texte environnant, italique comprise.",
  },
  "surjective": {
    name: "Flèche de surjection",
    meaning: "Flèche à double pointe indiquant une application ou un morphisme surjectif.",
    usage:
      "Les algébristes écrivent f\\colon A \\twoheadrightarrow B pour dire que f est surjective, par exemple pour la projection canonique G \\twoheadrightarrow G/N. Elle va de pair avec \\hookrightarrow pour les injections, si bien qu’une suite exacte courte 0 \\to A \\hookrightarrow B \\twoheadrightarrow C \\to 0 montre les deux d’un coup d’œil. Il existe une version vers la gauche, \\twoheadleftarrow, pour les applications dessinées dans l’autre sens. La flèche est une relation, l’espacement autour est donc automatique. Évitez de l’utiliser pour une convergence ou une implication ; \\to et \\implies sont la norme dans ces cas.",
  },
  "restriction": {
    name: "Restriction",
    meaning: "Restriction de f à une partie A : la règle est conservée mais l’ensemble de départ est réduit.",
    usage:
      "La restriction f|_A conserve la règle mais réduit l’ensemble de départ, de sorte que f|_A\\colon A \\to B. Une barre simple est courte et l’indice peut sembler détaché ; beaucoup d’auteurs écrivent f\\big|_A pour une barre plus haute, ou utilisent la flèche \\restriction, qui ressemble à un demi-harpon. Ne la confondez pas avec la barre d’évaluation F(x)\\big|_a^b, de même forme mais d’usage différent. Les restrictions sont courantes en topologie, où l’on vérifie la continuité de f|_U sur des ouverts, et en théorie des faisceaux, où s|_U restreint une section à un ouvert plus petit.",
  },
  "function-evaluation": {
    name: "Évaluation d’une fonction",
    meaning: "Indique que la fonction f envoie l’entrée x sur la valeur y.",
    usage:
      "Cette équation est la lecture d’une fonction au niveau des éléments : y est l’image de x, ce qu’on écrit aussi x \\mapsto y. En cours d’algèbre, résoudre f(x) = y en x permet de trouver la fonction réciproque, ce qui donne x = f^{-1}(y). L’espacement autour de = est automatique ; évitez d’ajouter des espaces manuelles. Pour une liste de valeurs, alignez plusieurs équations avec l’environnement align, en plaçant & devant chaque signe égal. Lorsque le nom de la fonction compte plusieurs lettres, utilisez \\operatorname pour qu’il ne soit pas en italique : \\operatorname{relu}(x) = y plutôt que relu(x) = y.",
  },
  "piecewise-function": {
    name: "Fonction définie par morceaux",
    meaning: "Définition par morceaux avec l’environnement cases, qui donne des règles différentes sur des intervalles différents.",
    usage:
      "Dans cases, chaque ligne contient une valeur, un &, puis sa condition, et se termine par \\\\ ; LaTeX ajoute automatiquement l’accolade gauche et aucun délimiteur à droite. Exemples typiques : la valeur absolue, la fonction d’activation ReLU, la fonction signe et l’échelon de Heaviside. Placez les mots dans \\text{}, comme dans \\text{si } x > 0, pour qu’ils s’impriment en romain avec un espacement normal. Les fractions des lignes sont composées par défaut en style texte ; utilisez \\dfrac lorsqu’elles paraissent trop petites. Vérifiez que les conditions couvrent le domaine sans chevauchement, souvent en terminant par une ligne \\text{sinon}.",
  },
};

export default text;
