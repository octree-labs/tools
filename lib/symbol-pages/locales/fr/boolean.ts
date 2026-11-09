import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/boolean/<slug>. */
const text: SymbolPageTranslations = {
  "nand": {
    name: "Opérateur NAND",
    meaning: "Coin surmonté d’une barre, employé comme connecteur NAND (barre de Sheffer) : vrai sauf si les deux entrées sont vraies.",
    usage: "NAND est fonctionnellement complet : toute fonction booléenne peut être construite à partir de p \\barwedge q seul, et c’est précisément pour cela que les concepteurs de circuits numériques l’utilisent. Les logiciens écrivent aussi la barre de Sheffer sous forme de barre verticale, p \\mid q, ou de flèche, p \\uparrow q ; indiquez donc votre notation une fois. \\barwedge est un opérateur binaire, avec une espace moyenne de chaque côté. Ne le confondez pas avec \\veebar, dont la barre est sous un « ou » et qui désigne généralement le ou exclusif, ni avec \\doublebarwedge, qui porte deux barres. Sa table de vérité est la négation de celle de \\wedge.",
  },
  "nor-operator-bar-over-vee": {
    name: "Opérateur NOR (barre sur le « ou »)",
    meaning: "Un « ou » logique surmonté d’un accent barre, construit à la main pour représenter NOR (flèche de Peirce) : vrai seulement quand les deux entrées sont fausses.",
    usage: "Les polices mathématiques courantes n’ont pas de commande standard unique pour le glyphe NOR : \\bar{\\vee} l’imite en plaçant un accent sur le symbole de disjonction. Effet secondaire : un symbole accentué devient un atome ordinaire et perd l’espacement d’opérateur binaire qu’avait \\vee ; écrivez donc \\mathbin{\\bar{\\vee}} pour le rétablir, idéalement dans un \\newcommand. La notation alternative p \\downarrow q (flèche de Peirce) est largement comprise et évite le problème. Ne le confondez pas avec \\veebar, dont la barre est sous le « ou » et qui signifie normalement XOR.",
  },
  "boolean-and": {
    name: "ET booléen",
    meaning: "Point centré entre deux variables, notation d’ingénieur pour le ET booléen (conjonction logique).",
    usage: "L’algèbre de commutation et l’électronique numérique notent la conjonction comme une multiplication : A \\cdot B, ou simplement AB, puisque ET se comporte comme la multiplication sur 0 et 1. En logique formelle, la même opération s’écrit A \\wedge B ou A \\land B. \\cdot est un opérateur binaire et reçoit déjà une espace moyenne ; n’utilisez pas un point, qui en mode mathématique se comporte comme une ponctuation et repose sur la ligne de base. Beaucoup de manuels omettent complètement le point dans les sommes de produits comme AB + \\overline{A}C et ne gardent \\cdot que là où la juxtaposition serait ambiguë, par exemple entre des noms de signaux de plusieurs lettres.",
  },
  "boolean-or": {
    name: "OU booléen",
    meaning: "Signe plus employé comme OU booléen en algèbre de commutation : la sortie vaut 1 dès qu’au moins une entrée vaut 1.",
    usage: "Les concepteurs de circuits notent la disjonction A + B, si bien que les sommes de produits comme AB + \\overline{A}C se lisent naturellement. Attention au sens arithmétique : en algèbre de Boole 1 + 1 = 1, alors que dans le corps à deux éléments le signe plus signifie XOR et 1 + 1 = 0 ; c’est pourquoi XOR reçoit souvent son propre symbole \\oplus. Les logiciens écrivent le même OU A \\vee B ou A \\lor B. Aucune commande spéciale n’est nécessaire : le + a déjà l’espacement d’opérateur binaire, et dans une longue expression vous pouvez couper la ligne avant un + dans un environnement multline.",
  },
  "boolean-not": {
    name: "NON booléen",
    meaning: "Barre tracée sur toute la largeur de son argument ; marque le NON booléen dans les circuits logiques et l’adhérence d’un ensemble en topologie.",
    usage: "En logique numérique, \\overline{A} est le signal inversé, et \\overline{A \\cdot B} trace une barre continue au-dessus de toute une expression : c’est la raison visuelle pour laquelle les ingénieurs la préfèrent à un \\neg préfixe. Les topologues emploient la même construction pour l’adhérence d’un ensemble. Contrairement à \\bar{A}, accent de largeur fixe prévu pour une seule lettre, \\overline s’étire pour couvrir tout le contenu des accolades. Les négations imbriquées comme \\overline{\\overline{A}} s’empilent proprement. Pour une barre un peu plus courte sur une lettre seule, certains auteurs préfèrent \\bar ; les deux conviennent tant que vous restez cohérent.",
  },
  "complement": {
    name: "Complémentaire",
    meaning: "Un prime après une variable ou un ensemble, notation compacte du complémentaire ou de la négation booléenne de A.",
    usage: "Les cours de théorie des ensembles écrivent souvent A' pour le complémentaire U \\setminus A, et certains ouvrages de conception logique écrivent A' au lieu de \\overline{A} parce que cela tient sur une ligne et se tape facilement. En mode mathématique, l’apostrophe devient automatiquement un exposant \\prime, si bien que A'' donne un double prime avec l’espacement correct. Le danger est l’ambiguïté : A' désigne aussi les dérivées, les ensembles dérivés en topologie et les espaces duaux. Les alternatives sont A^c et A^{\\complement}. Quel que soit votre choix, définissez-le une fois au début du document.",
  },
  "de-morgan": {
    name: "Loi de De Morgan",
    meaning: "La loi de De Morgan en notation booléenne : la négation d’un ET est égale au OU des négations.",
    usage: "Cette identité permet de convertir des circuits à base de ET en circuits à base de OU ; c’est pourquoi une porte NAND équivaut à une porte OU dont les entrées sont inversées. Sa forme duale s’écrit \\overline{A + B} = \\overline{A} \\cdot \\overline{B}. L’exemple montre pourquoi \\overline compte : une longue barre au-dessus de A \\cdot B se distingue visiblement de barres séparées sur chaque lettre, et cette distinction est tout le contenu de la loi. En notation ensembliste, la même loi s’écrit (A \\cap B)^c = A^c \\cup B^c, et en logique \\neg(p \\wedge q) \\equiv \\neg p \\vee \\neg q.",
  },
};

export default text;
