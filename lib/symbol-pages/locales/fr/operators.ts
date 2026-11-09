import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/operators/<slug>. */
const text: SymbolPageTranslations = {
  "direct-sum": {
    name: "Somme directe",
    meaning: "Plus cerclé, utilisé pour les sommes directes d'espaces ou de modules et pour le ou exclusif (XOR) en algèbre de Boole.",
    usage: "En algèbre linéaire, on écrit V = U \\oplus W lorsque tout vecteur se décompose de façon unique en une partie de U et une partie de W, et la théorie des modules construit \\mathbb{Z} \\oplus \\mathbb{Z}. En informatique et en cryptographie, a \\oplus b désigne le XOR bit à bit, comme dans le masque jetable c = m \\oplus k. C'est un opérateur binaire : il reçoit donc un espacement moyen. Pour une somme directe sur un ensemble d'indices, employez le grand opérateur \\bigoplus_{i \\in I} V_i, qui accepte des bornes comme \\sum. Ne le confondez pas avec \\pm ni avec un simple + ; dans certaines algèbres, \\oplus désigne aussi une addition déformée.",
  },
  "tensor-product": {
    name: "Produit tensoriel",
    meaning: "Fois cerclé, le produit tensoriel de vecteurs, d'espaces, de modules ou de matrices (produit de Kronecker).",
    usage: "L'algèbre multilinéaire écrit V \\otimes W, la mécanique quantique écrit les états composites |\\psi\\rangle \\otimes |\\phi\\rangle, et l'algèbre matricielle utilise A \\otimes B pour le produit de Kronecker. En apprentissage automatique, il sert parfois à noter le produit extérieur de deux vecteurs. C'est un opérateur binaire avec un espacement moyen. Pour les produits itérés, utilisez le grand opérateur \\bigotimes_{i=1}^n V_i, et pour le produit tensoriel sur un anneau, placez l'anneau en indice : M \\otimes_R N. N'utilisez pas \\times, qui désigne le produit cartésien ou le produit vectoriel.",
  },
  "circle-dot": {
    name: "Point cerclé",
    meaning: "Point cerclé, couramment utilisé pour le produit terme à terme (produit d'Hadamard) de vecteurs ou de matrices.",
    usage: "Les articles d'apprentissage profond écrivent h_t = o_t \\odot \\tanh(c_t) pour les produits terme à terme dans les LSTM et les masques d'attention, et l'algèbre linéaire numérique utilise A \\odot B pour le produit d'Hadamard, souvent en concurrence avec \\circ pour le même sens. Dans les schémas de physique, un point cerclé représente un vecteur sortant de la page, mais il s'agit alors d'un symbole et non d'un opérateur. C'est un opérateur binaire avec un espacement moyen ; la grande forme \\bigodot existe aussi. Précisez dans votre section de notations que \\odot désigne le produit d'Hadamard, car certains auteurs l'emploient pour le XNOR ou d'autres opérations.",
  },
  "circle-minus": {
    name: "Moins cerclé",
    meaning: "Moins cerclé, utilisé pour les supplémentaires orthogonaux dans un espace et pour certaines opérations de type différence.",
    usage: "En théorie des espaces de Hilbert, H \\ominus K désigne le supplémentaire orthogonal d'un sous-espace fermé K dans H, pendant de \\oplus. Le traitement d'image morphologique utilise A \\ominus B pour l'érosion, et certains textes de théorie des ensembles l'emploient pour la différence symétrique, même si \\triangle y est plus courant. C'est un opérateur binaire : l'espacement est donc automatique. Comme son sens varie, définissez-le une fois dans votre article. Il n'existe pas de version standard en grand opérateur. Au sens de la différence symétrique, A \\ominus B est égal à (A \\setminus B) \\cup (B \\setminus A).",
  },
  "circle-slash": {
    name: "Barre oblique cerclée",
    meaning: "Barre oblique cerclée, qui désigne généralement la division terme à terme (division d'Hadamard) de vecteurs ou de matrices.",
    usage: "Les textes de calcul matriciel et d'apprentissage automatique écrivent A \\oslash B pour la division terme à terme, en l'associant à \\odot pour la multiplication terme à terme, comme dans les mises à jour normalisées x \\oslash \\sqrt{v}. LaTeX le traite comme un opérateur binaire : il reçoit donc le même espacement moyen que \\odot et \\otimes. Notez qu'il diffère de \\varnothing et \\emptyset, qui ressemblent à un cercle barré mais sont des symboles ordinaires pour l'ensemble vide, ainsi que de la lettre scandinave \\o. Comme il n'est pas universellement connu, présentez-le dans la section de notations.",
  },
  star: {
    name: "Étoile",
    meaning: "Opérateur binaire en étoile à cinq branches, utilisé pour la convolution, la dualité de Hodge et des produits personnalisés.",
    usage: "Le traitement du signal écrit parfois l'intercorrélation f \\star g, la géométrie différentielle utilise \\star pour l'opérateur étoile de Hodge, et les algébristes l'emploient pour des opérations binaires génériques ou pour le produit étoile de Moyal. En optimisation, les valeurs optimales s'écrivent x^\\star, en alternative à x^*. \\star est un opérateur binaire, distinct de \\ast (l'astérisque) et du symbole produit par \\bigstar. Comme son espacement est celui d'un opérateur binaire, l'utiliser comme opérateur préfixe, par exemple pour l'étoile de Hodge, peut nécessiter des accolades : {\\star}\\omega.",
  },
  asterisk: {
    name: "Astérisque",
    meaning: "Astérisque employé comme opérateur binaire, généralement pour la convolution ou une loi de groupe générique.",
    usage: "En mode mathématique, \\ast donne le même glyphe que la saisie de *, un opérateur binaire avec un espacement moyen, utilisé pour la convolution (f \\ast g)(t) = \\int f(\\tau) g(t - \\tau)\\,d\\tau et pour les opérations binaires génériques en algèbre. En exposant, A^* ou A^\\ast désigne l'adjoint, la transconjuguée, l'espace dual ou l'étoile de Kleene selon le domaine. Il est centré sur l'axe mathématique, contrairement à l'astérisque surélevé du texte. Pour une valeur optimale étoilée x^\\star, certains auteurs préfèrent \\star afin de bien séparer les sens.",
  },
  composition: {
    name: "Composition",
    meaning: "Petit opérateur rond, standard pour la composition de fonctions et utilisé aussi pour les degrés.",
    usage: "(f \\circ g)(x) = f(g(x)) en est l'usage principal. En exposant, 90^\\circ donne des degrés, même si un symbole de degré dédié issu d'une police text-companion peut donner un meilleur rendu, et A^\\circ désigne souvent l'intérieur ou l'ensemble polaire. Certains auteurs utilisent \\circ pour le produit d'Hadamard, pour lequel \\odot est l'alternative la plus claire. \\circ est un opérateur binaire : il reçoit donc un espacement moyen ; \\bigcirc est un cercle plus grand et \\cdot un point plein. Évitez d'utiliser la lettre o pour la composition.",
  },
  bullet: {
    name: "Point épais (bullet)",
    meaning: "Point rond plein employé comme opérateur binaire, pour les emplacements vides, les produits génériques et les objets gradués.",
    usage: "La théorie des catégories et l'algèbre homologique utilisent \\bullet comme indice muet, comme dans C_\\bullet pour un complexe de chaînes et H^\\bullet pour la cohomologie totale. Il sert aussi d'argument générique, f(\\bullet, y), et de symbole d'opération en algèbre. Les puces des listes itemize sont produites par \\textbullet, et non par le \\bullet mathématique. Comparé à \\cdot, il est plus grand et plus épais ; \\cdot est le bon choix pour la multiplication ordinaire ou le produit scalaire. Comme opérateur binaire, il reçoit un espacement moyen, mais en tant qu'emplacement dans f(\\bullet) l'espacement reste correct puisqu'il n'a pas d'opérande à gauche.",
  },
  diamond: {
    name: "Losange",
    meaning: "Petit opérateur binaire en losange, utilisé pour des opérations génériques et dans certaines notations modales et algébriques.",
    usage: "\\diamond apparaît comme opération binaire quelconque (a \\diamond b), dans le produit losange de la théorie de Lie et en théorie des automates. La logique modale note la possibilité avec un losange plus grand, généralement \\Diamond ou \\lozenge, plutôt qu'avec cette petite version d'opérateur binaire. Comme \\diamond est un opérateur binaire, l'utiliser comme opérateur préfixe devant une formule donne un espacement étrange ; utilisez \\Diamond ou encadrez-le ainsi : {\\diamond}p. Il diffère de \\diamondsuit, l'enseigne de carreau des cartes à jouer, qui est un symbole ordinaire.",
  },
  "big-circle": {
    name: "Grand cercle",
    meaning: "Grand opérateur binaire en cercle ouvert, plus grand que \\circ, utilisé pour des produits particuliers et des schémas.",
    usage: "\\bigcirc est surtout un symbole de choix pour des opérations personnalisées, par exemple un produit en boîte, ou en logique temporelle, où un cercle désigne l'opérateur « au prochain instant », \\bigcirc p. C'est un opérateur binaire et non un grand opérateur à bornes : il ne grandit donc pas en mode display comme \\bigcup. Superposer \\bigcirc pour entourer un symbole est maladroit ; un nœud cerclé d'un package de dessin ou \\textcircled convient mieux. Pour la composition, le petit \\circ est la norme. Pour un opérateur cerclé comme \\oplus ou \\otimes, les commandes dédiées conviennent mieux que des superpositions.",
  },
  "triangle-up": {
    name: "Triangle vers le haut",
    meaning: "Triangle ouvert pointant vers le haut, utilisé pour les triangles en géométrie, la différence symétrique et le laplacien.",
    usage: "La géométrie écrit \\triangle ABC pour un triangle, la théorie des ensembles écrit A \\triangle B pour la différence symétrique, et certains textes l'emploient pour l'opérateur de Laplace, même si \\Delta ou \\nabla^2 sont plus habituels. En LaTeX standard, \\triangle est un symbole ordinaire et non un opérateur binaire : dans A \\triangle B, vous voudrez peut-être \\mathbin{\\triangle} pour un espacement correct, ou utiliser \\bigtriangleup, qui est déjà un opérateur binaire. Il est plus grand et de forme différente de la majuscule grecque \\Delta.",
  },
  "triangle-down": {
    name: "Triangle vers le bas",
    meaning: "Petit triangle ouvert pointant vers le bas, symbole ordinaire plutôt qu'opérateur.",
    usage: "\\triangledown est un triangle plus petit pointant vers le bas, avec un espacement ordinaire, utilisé comme décoration ou marqueur dans certaines notations. Ce n'est pas l'opérateur gradient \\nabla, qui a une forme différente et que vous devez utiliser pour \\nabla f ; ce n'est pas non plus \\bigtriangledown, qui est un opérateur binaire plus grand. Si vous utilisez \\triangledown comme opération, encadrez-le avec \\mathbin pour obtenir l'espacement d'un opérateur. Pour les versions pleines, \\blacktriangledown est disponible. Dans les articles finis, il apparaît rarement, surtout comme référence à un marqueur de graphique dans les légendes ou comme opération personnalisée.",
  },
  square: {
    name: "Carré",
    meaning: "Carré ouvert, utilisé pour le d'alembertien, la nécessité modale et les marques de fin de démonstration.",
    usage: "Les physiciens écrivent \\square pour l'opérateur d'onde de d'Alembert, \\square = \\partial_t^2/c^2 - \\nabla^2, la logique modale utilise \\square p pour « nécessairement p » (souvent sous la forme \\Box), et le carré vide sert de marque CQFD à la fin des démonstrations. Dans les démonstrations amsthm, cette marque est placée automatiquement via \\qedsymbol : vous la tapez donc rarement vous-même. \\square est un symbole ordinaire ; \\blacksquare donne la version pleine. De nombreux textes de logique écrivent \\Box pour la nécessité ; les deux glyphes sont presque identiques. Utilisé comme opérateur devant un champ, il ne nécessite aucun espacement supplémentaire.",
  },
  wedge: {
    name: "Symbole wedge",
    meaning: "Opérateur binaire en chevron, pour le ET logique, le produit extérieur et la borne inférieure dans un treillis.",
    usage: "La géométrie différentielle construit des formes comme dx \\wedge dy, avec \\omega \\wedge \\eta = (-1)^{kl} \\eta \\wedge \\omega. La logique utilise p \\wedge q pour la conjonction (\\land est un alias), la théorie des treillis écrit a \\wedge b pour la borne inférieure, et les probabilistes écrivent s \\wedge t pour \\min(s, t). C'est un opérateur binaire avec un espacement moyen. Pour une conjonction sur un ensemble d'indices, utilisez le grand opérateur \\bigwedge. En topologie, X \\wedge Y est le smash-produit d'espaces pointés. Ne le confondez pas avec l'accent circonflexe \\hat ou \\widehat.",
  },
  vee: {
    name: "Symbole vee",
    meaning: "Opérateur binaire en V, pour le OU logique, la borne supérieure dans un treillis et le bouquet d'espaces.",
    usage: "La logique écrit p \\vee q pour la disjonction inclusive, et \\lor en est un alias identique. La théorie des treillis utilise a \\vee b pour la borne supérieure, les probabilités écrivent s \\vee t pour \\max(s, t), et la topologie utilise X \\vee Y pour le bouquet, qui recolle des espaces en un point base. Pour de nombreux termes, utilisez \\bigvee_{i} p_i. Il diffère de la lettre v et de \\veebar, que certains textes emploient pour le ou exclusif. Le symbole a l'espacement d'un opérateur binaire.",
  },
  amalgamation: {
    name: "Amalgame",
    meaning: "Opérateur d'amalgame, utilisé pour les unions disjointes et les coproduits.",
    usage: "La théorie des catégories et la topologie écrivent X \\amalg Y pour le coproduit ou l'union disjointe, et la théorie des groupes utilise G \\ast_H K pour les produits libres amalgamés, avec \\amalg dans certains textes. \\amalg est un opérateur binaire. Pour la version indexée avec bornes, utilisez le grand opérateur \\coprod_{i \\in I} X_i, de même aspect mais qui s'agrandit en style display. Parmi les alternatives pour l'union disjointe figurent \\sqcup et \\bigsqcup, de forme plus aplatie et plus courants en théorie des ensembles.",
  },
  dagger: {
    name: "Obèle (dague)",
    meaning: "Symbole de la dague, surtout utilisé en exposant pour les adjoints et les conjugués hermitiens.",
    usage: "La mécanique quantique écrit A^\\dagger pour l'adjoint hermitien, si bien que a^\\dagger est l'opérateur de création, et l'algèbre linéaire utilise A^\\dagger pour la pseudo-inverse de Moore-Penrose dans certains textes (A^+ est l'alternative). La dague marque aussi les notes de bas de page ou des entrées particulières dans les tableaux. En mathématiques, c'est un opérateur binaire, mais en exposant son espacement n'a pas d'importance. En mode texte, utilisez \\textdagger. La version double \\ddagger sert pour les notes de second niveau et certaines notations particulières. La théorie quantique des champs l'utilise en permanence pour les opérateurs de création et d'annihilation.",
  },
  "double-dagger": {
    name: "Double obèle (double dague)",
    meaning: "Symbole de la double dague, utilisé comme appel de note et parfois comme décoration en exposant.",
    usage: "\\ddagger est le deuxième symbole de note après \\dagger dans de nombreux styles, pour marquer des affiliations ou des notes de tableau. En mathématiques, il décore parfois des opérateurs, par exemple un état de transition X^\\ddagger en cinétique chimique (énergie d'activation \\Delta G^\\ddagger). Comme commande mathématique, c'est un opérateur binaire, mais en exposant l'espacement n'a pas d'importance. En mode texte, utilisez \\textdaggerdbl. Son sens n'étant pas normalisé, expliquez-le à sa première occurrence. Placé en exposant, il ne nécessite pas d'accolades : X^\\ddagger fonctionne directement.",
  },
  "wreath-product": {
    name: "Produit en couronne",
    meaning: "Opérateur en couronne, écrit entre deux groupes pour leur produit en couronne.",
    usage: "La théorie des groupes écrit G \\wr H pour le produit en couronne, par exemple le groupe hyperoctaédral \\mathbb{Z}_2 \\wr S_n, et les sous-groupes de Sylow des groupes symétriques sont des produits en couronne itérés. Le symbole est une petite ligne verticale ondulée composée comme un opérateur binaire. Il ressemble un peu à un tilde pivoté, mais contrairement à la relation \\sim, il porte l'espacement d'un opérateur binaire. Certains auteurs écrivent les facteurs dans l'ordre inverse : précisez donc quel groupe agit. Les groupes du Rubik's Cube et les groupes d'automorphismes d'arbres sont des exemples classiques où apparaissent des produits en couronne.",
  },
  "set-minus": {
    name: "Différence ensembliste",
    meaning: "Opérateur de différence ensembliste : A \\setminus B est l'ensemble des éléments de A qui ne sont pas dans B.",
    usage: "Utilisez \\setminus pour la différence ensembliste, A \\setminus B, et pour retirer des éléments, \\mathbb{R} \\setminus \\{0\\}. C'est un opérateur binaire avec l'espacement adéquat, tandis que \\backslash a le même aspect mais est un symbole ordinaire, utilisé pour des quotients comme G \\backslash X (classes à gauche). Une variante plus petite, \\smallsetminus, convient mieux à certaines polices. Certains auteurs écrivent A - B, mais \\setminus évite la confusion avec la soustraction. Combiné avec \\complement : A \\setminus B = A \\cap B^\\complement. Dans des écritures fractionnaires comme G \\backslash X / H pour les doubles classes, gardez plutôt \\backslash pour le quotient.",
  },
};

export default text;
