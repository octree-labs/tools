import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/linear-algebra/<slug>. */
const text: SymbolPageTranslations = {
  "bold-vector": {
    name: "Vecteur en gras",
    meaning: "Lettre droite en gras, la convention typographique usuelle pour un vecteur comme x de R^n.",
    usage:
      "Les ouvrages d’algèbre linéaire et les articles de physique marquent les vecteurs en gras, comme dans A\\mathbf{x} = \\mathbf{b}. \\mathbf n’agit que sur les lettres latines et les chiffres ; les lettres grecques comme \\alpha restent inchangées, utilisez donc \\boldsymbol{\\alpha} pour elles. Notez que \\mathbf donne du gras droit, alors que \\boldsymbol{x} donne du gras italique ; la norme ISO préfère le gras italique pour les vecteurs, tandis que de nombreux manuels utilisent le droit. Parmi les alternatives figurent \\vec{x} avec une flèche, courant en physique d’initiation, et le soulignement dans les notes de style manuscrit. Choisissez une convention et appliquez-la systématiquement, idéalement au moyen d’une macro pour pouvoir la modifier en un seul endroit.",
  },
  "transpose": {
    name: "Transposée",
    meaning: "Transposée de la matrice A écrite avec le symbole \\top, qui échange lignes et colonnes.",
    usage:
      "Utiliser \\top en exposant donne une marque droite et nette en forme de T, impossible à confondre avec une variable nommée T ; c’est pourquoi de nombreux articles d’apprentissage automatique et de statistique écrivent \\mathbf{x}^{\\top}\\mathbf{y} ou (AB)^{\\top} = B^{\\top}A^{\\top}. A^T a un aspect proche mais utilise un T italique, et \\intercal est une troisième option, plus basse et plus étroite. Quel que soit votre choix, définissez une courte macro pour qu’un changement de style ultérieur se fasse en une ligne. Pour les matrices complexes, la transposée conjuguée s’écrit généralement A^{*} ou A^{H}, \\dagger étant courant en physique.",
  },
  "transpose-t": {
    name: "Transposée (T)",
    meaning: "Transposée de A notée par un T italique en exposant, la forme la plus courante dans les manuels.",
    usage:
      "Écrire A^T est rapide et universellement compris : les équations normales des moindres carrés A^T A\\mathbf{x} = A^T\\mathbf{b} apparaissent sous cette forme dans la plupart des livres d’algèbre linéaire. L’inconvénient est l’ambiguïté lorsque T est aussi une variable, comme un horizon temporel ou une température, car A^T pourrait alors se lire comme une puissance. Dans ce cas, passez à A^{\\top} ou au A^{\\mathsf{T}} droit. Les accolades sont nécessaires dès que l’exposant comporte plus d’un élément : l’inverse de la transposée s’écrit A^{-T}, et non A^-T. Une matrice symétrique est une matrice telle que A^T = A.",
  },
  "inverse": {
    name: "Matrice inverse",
    meaning: "Inverse de la matrice carrée A, la matrice dont le produit avec A est l’identité.",
    usage:
      "Elle vérifie AA^{-1} = A^{-1}A = I et n’existe que si \\det(A) \\neq 0. Les accolades sont indispensables : A^-1 ne mettrait en exposant que le signe moins et laisserait le 1 sur la ligne de base. Pour une matrice 2 × 2, la formule explicite avec \\frac{1}{ad-bc} multiplié par la comatrice transposée est souvent composée en entier avec bmatrix. Dans les articles numériques, les lecteurs savent que l’inverse est rarement calculée explicitement ; écrire \\mathbf{x} = A^{-1}\\mathbf{b} reste donc acceptable comme notation. Les pseudo-inverses s’écrivent A^{+} ou A^{\\dagger}, et (AB)^{-1} = B^{-1}A^{-1} inverse l’ordre.",
  },
  "determinant": {
    name: "Déterminant",
    meaning: "Déterminant d’une matrice carrée A, le scalaire donnant son facteur d’échelle de volume orienté.",
    usage:
      "\\det est un opérateur prédéfini : il s’imprime en romain avec l’espacement correct, alors que taper det(A) mettrait en italique trois variables distinctes. Parmi les identités clés figurent \\det(AB) = \\det(A)\\det(B) et \\det(A^{-1}) = 1/\\det(A). Contrairement à \\sin, \\det peut recevoir des limites placées dessous en mode hors texte, comme \\lim. Pour une matrice explicite, l’environnement vmatrix trace directement les barres verticales, si bien que \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc se lit naturellement. Les parenthèses sont facultatives lorsque l’argument est une seule lettre, \\det A, comme pour les autres opérateurs.",
  },
  "trace": {
    name: "Trace",
    meaning: "Trace de A, la somme de ses coefficients diagonaux, écrite avec l’étiquette droite « tr ».",
    usage:
      "La trace apparaît dans des identités comme \\operatorname{tr}(AB) = \\operatorname{tr}(BA) et dans la norme de Frobenius \\lVert A \\rVert_F^2 = \\operatorname{tr}(A^{\\top}A). \\text{tr} donne des lettres droites, mais hérite de la police du texte environnant, passant en italique dans un théorème, et n’ajoute pas l’espacement d’opérateur. Le choix plus robuste est \\operatorname{tr}, ou un \\DeclareMathOperator{\\tr}{tr} global dans le préambule, pour que \\tr A soit correctement espacé sans parenthèses. Les physiciens écrivent souvent Tr avec une majuscule, en particulier pour les matrices densité. La trace est aussi égale à la somme des valeurs propres comptées avec multiplicité.",
  },
  "rank": {
    name: "Rang",
    meaning: "Rang de A : la dimension de l’espace engendré par ses colonnes, écrite avec une étiquette droite.",
    usage:
      "Le théorème du rang s’écrit \\operatorname{rank}(A) + \\operatorname{nullity}(A) = n, et une matrice carrée est inversible exactement lorsqu’elle est de rang plein. \\text{rank} donne des lettres droites, mais l’italique d’un environnement de théorème peut s’y propager et il n’a pas l’espacement d’opérateur. Préférez \\operatorname{rank}(A), ou déclarez une fois \\DeclareMathOperator{\\rank}{rank} et écrivez \\rank A. Il n’existe pas de commande \\rank intégrée, donc la taper sans définition provoque une erreur « Undefined control sequence ». En français, on écrit aussi \\operatorname{rg}(A). L’approximation de faible rang par SVD tronquée est un cas fréquent où vous composerez cette notation.",
  },
  "norm": {
    name: "Norme",
    meaning: "Doubles barres verticales autour de x, désignant sa norme, sa longueur ou sa grandeur.",
    usage:
      "Utiliser \\lVert et \\rVert au lieu de \\| des deux côtés indique à LaTeX quelle barre ouvre et laquelle ferme, ce qui donne l’espacement correct dans des expressions comme \\lVert -x \\rVert, où \\|-x\\| traiterait le moins comme un opérateur binaire. L’indice précise la norme : \\lVert x \\rVert_2 pour la norme euclidienne, \\lVert x \\rVert_1, \\lVert x \\rVert_\\infty, ou \\lVert A \\rVert_F pour celle de Frobenius. Pour un contenu haut, utilisez \\left\\lVert ... \\right\\rVert. L’inégalité triangulaire \\lVert x+y \\rVert \\le \\lVert x \\rVert + \\lVert y \\rVert en est un usage typique, et une macro \\norm économise beaucoup de frappe dans les longs articles.",
  },
  "inner-product": {
    name: "Produit scalaire",
    meaning: "Chevrons autour de deux vecteurs, désignant leur produit scalaire.",
    usage:
      "Les produits scalaires généralisent le produit scalaire usuel : \\langle x, y \\rangle = \\sum_i x_i y_i dans R^n, et l’inégalité de Cauchy-Schwarz |\\langle x, y \\rangle| \\le \\lVert x \\rVert \\lVert y \\rVert en est l’exemple classique. Ne tapez jamais à la place les signes inférieur et supérieur : < et > sont des relations, avec un large espacement et un angle incorrect. Pour des arguments volumineux, \\left\\langle ... \\right\\rangle ajuste la taille des chevrons. En mécanique quantique, les mêmes chevrons forment la notation bra-ket, \\langle \\psi | \\phi \\rangle, avec une barre au milieu. Certains ouvrages écrivent (x, y) ou x \\cdot y pour la même quantité.",
  },
  "kronecker-delta": {
    name: "Symbole de Kronecker",
    meaning: "Symbole de Kronecker : vaut 1 lorsque les indices i et j sont égaux et 0 sinon.",
    usage:
      "Il décrit la matrice identité coefficient par coefficient, I_{ij} = \\delta_{ij}, et exprime l’orthonormalité d’une base, \\langle e_i, e_j \\rangle = \\delta_{ij}. En notation indicielle, il agit comme un opérateur de substitution : \\sum_j \\delta_{ij} a_j = a_i, ce qui simplifie les calculs tensoriels. Ne le confondez pas avec la distribution de Dirac \\delta(x), définie sur des variables continues, même si les deux utilisent le \\delta minuscule. Les accolades autour de ij gardent les deux indices en indice ; \\delta_ij n’abaisserait que le i et laisserait j sur la ligne de base. En calcul tensoriel avec indices mixtes, écrivez plutôt \\delta^i_j.",
  },
  "identity-matrix": {
    name: "Matrice identité",
    meaning: "Matrice identité de taille n × n, avec des uns sur la diagonale et des zéros ailleurs.",
    usage:
      "L’indice indique la taille : pour une matrice A de taille m × n, on a à la fois AI_n = A et I_m A = A, avec une identité différente de chaque côté. Lorsque la dimension est évidente, un simple I suffit ; certains auteurs préfèrent le gras \\mathbf{I} ou écrivent E, surtout dans les anciens textes européens. Pour les tailles de plusieurs caractères, ajoutez des accolades : I_{n+1} ou I_{10}, car I_10 n’abaisserait que le 1. Le polynôme caractéristique \\det(A - \\lambda I_n) est l’endroit typique où elle apparaît, et \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} écrit I_2 explicitement.",
  },
  "zero-matrix": {
    name: "Matrice nulle",
    meaning: "Zéro en gras, désignant le vecteur nul ou la matrice nulle par opposition au scalaire 0.",
    usage:
      "Le gras distingue l’élément neutre de l’addition d’un espace vectoriel du nombre zéro, comme dans A\\mathbf{x} = \\mathbf{0} pour un système homogène ou \\mathbf{v} + \\mathbf{0} = \\mathbf{v}. \\mathbf fonctionne sur les chiffres, c’est donc la forme la plus simple ; \\boldsymbol{0} donne le même résultat dans la plupart des polices. Pour une matrice nulle de taille explicite, écrivez \\mathbf{0}_{m \\times n} ou un O majuscule, O_{m \\times n}. Beaucoup d’articles abandonnent le gras et écrivent 0 lorsque le contexte rend le type évident, ce qui est acceptable si c’est cohérent. Alignez-vous sur le style de gras utilisé pour les autres vecteurs.",
  },
  "matrix": {
    name: "Matrice",
    meaning: "Environnement bmatrix composant une matrice entre crochets, avec & entre les colonnes.",
    usage:
      "Les coefficients d’une ligne sont séparés par &, les lignes se terminent par \\\\, et les crochets s’adaptent au contenu, donc aucun \\left[ n’est nécessaire. Les environnements voisins ne changent que les délimiteurs : pmatrix utilise des parenthèses, vmatrix des barres verticales pour les déterminants, Vmatrix des doubles barres et matrix aucun délimiteur. L’environnement array est l’ancienne alternative ; il exige une spécification de colonnes comme {cc} mais autorise les filets verticaux et l’alignement par colonne. Pour les matrices génériques, comblez les vides avec \\cdots, \\vdots et \\ddots, comme dans a_{11} & \\cdots & a_{1n}. En ligne, smallmatrix à l’intérieur de \\bigl[ \\bigr] évite d’étirer la ligne.",
  },
  "column-vector": {
    name: "Vecteur colonne",
    meaning: "pmatrix à une seule colonne, empilant x au-dessus de y pour former un vecteur colonne entre parenthèses.",
    usage:
      "Chaque \\\\ commence une nouvelle ligne, donc une seule colonne de coefficients devient un vecteur vertical, la manière habituelle d’écrire des coordonnées dans R^2 ou le second membre d’un système linéaire. Les parenthèses (pmatrix) et les crochets (bmatrix) sont aussi standard l’un que l’autre ; choisissez un style pour tout le document. Pour économiser de l’espace vertical dans le texte courant, écrivez plutôt une ligne transposée, (x, y)^{\\top}. Pour les vecteurs longs, utilisez \\vdots dans une ligne centrale, comme dans x_1 \\\\ \\vdots \\\\ x_n. Les vecteurs colonnes en ligne paraissent tassés et écartent les lignes ; smallmatrix est l’alternative compacte lorsqu’on ne peut l’éviter.",
  },
};

export default text;
