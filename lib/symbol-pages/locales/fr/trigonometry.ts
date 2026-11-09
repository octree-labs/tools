import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/trigonometry/<slug>. */
const text: SymbolPageTranslations = {
  "sine": {
    name: "Sinus",
    meaning: "Fonction sinus, composée en romain comme un opérateur nommé, avec l’espacement correct.",
    usage: "Tapez toujours \\sin plutôt que sin : les lettres seules sont composées comme trois variables en italique multipliées entre elles. L’opérateur ajoute une espace fine avant son argument, si bien que \\sin x n’a pas besoin de parenthèses pour un symbole unique, tandis que \\sin(2x) ou \\sin\\left(\\frac{\\pi}{2}\\right) regroupent les arguments plus longs. Les puissances se placent juste après la commande : \\sin^2 x + \\cos^2 x = 1. Notez que \\sin^{-1} x désigne la fonction réciproque, et non l’inverse \\csc x. Parmi les formules courantes figurent l’identité de duplication \\sin 2\\theta = 2\\sin\\theta\\cos\\theta et la série de Taylor x - x^3/3! + \\cdots.",
  },
  "cosine": {
    name: "Cosinus",
    meaning: "Fonction cosinus, composée en romain comme un opérateur mathématique nommé, à l’image de \\sin.",
    usage: "\\cos apparaît dans la loi des cosinus (théorème d’Al-Kashi) c^2 = a^2 + b^2 - 2ab\\cos C, dans la formule d’Euler e^{i\\theta} = \\cos\\theta + i\\sin\\theta et dans l’expression du produit scalaire à l’aide de l’angle, d’où vient la similarité cosinus de l’apprentissage automatique. Taper cos sans barre oblique inverse donne des lettres en italique et un espacement incorrect. Écrivez \\cos^2\\theta pour le carré du cosinus ; \\cos\\theta^2 signifie le cosinus de thêta au carré, ce qui est une autre quantité. La commande ne prend elle-même aucun argument : regroupez donc les arguments composés entre parenthèses, comme dans \\cos(\\omega t + \\phi).",
  },
  "tangent": {
    name: "Tangente",
    meaning: "Fonction tangente, quotient du sinus par le cosinus, composée en romain.",
    usage: "Définie par \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, elle n’est pas définie là où \\cos\\theta = 0, c’est-à-dire aux multiples impairs de \\pi/2. En géométrie, les pentes sont les tangentes des angles d’inclinaison, et l’identité 1 + \\tan^2\\theta = \\sec^2\\theta s’obtient en divisant l’identité de Pythagore par \\cos^2\\theta. Certains textes européens écrivent tg, qui n’a pas de commande prédéfinie ; utilisez \\operatorname{tg} si vous en avez besoin. La formule d’addition \\tan(a+b) = \\frac{\\tan a + \\tan b}{1 - \\tan a\\tan b} est une équation hors texte fréquente.",
  },
  "cotangent": {
    name: "Cotangente",
    meaning: "Cotangente, l’inverse de la tangente, écrite comme un opérateur en romain.",
    usage: "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{1}{\\tan\\theta}, avec des pôles aux multiples entiers de \\pi. Elle apparaît dans l’identité 1 + \\cot^2\\theta = \\csc^2\\theta et dans le développement classique en éléments simples de \\pi\\cot\\pi z, qui sert à calculer \\sum 1/n^2. Les textes russes et certains textes européens écrivent ctg ; utilisez \\operatorname{ctg} pour cela. Sa réciproque s’écrit couramment arccot, qui n’a pas de commande prédéfinie. Rappelez-vous que \\cot x est l’inverse de la tangente, et non la fonction réciproque \\tan^{-1} x. Sa dérivée vaut -\\csc^2 x.",
  },
  "secant": {
    name: "Sécante",
    meaning: "Sécante, l’inverse du cosinus, sous forme d’opérateur nommé en romain.",
    usage: "\\sec\\theta = 1/\\cos\\theta, et son carré apparaît comme dérivée de la tangente, \\frac{d}{dx}\\tan x = \\sec^2 x. L’intégrale \\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C est un classique des cours d’analyse et des formules de la projection de Mercator. Taper sec sans barre oblique inverse laisse des lettres en italique et supprime l’espace avant l’argument. En géométrie, une droite sécante est un autre objet, que l’on nomme en toutes lettres plutôt qu’avec cette commande. Comme pour les autres commandes trigonométriques, les puissances se placent directement après, \\sec^2 x, suivies de l’argument.",
  },
  "cosecant": {
    name: "Cosécante",
    meaning: "Cosécante, l’inverse du sinus, composée comme un opérateur en romain.",
    usage: "\\csc\\theta = 1/\\sin\\theta, non définie aux multiples entiers de \\pi. Sa dérivée est \\frac{d}{dx}\\csc x = -\\csc x\\cot x, et l’identité 1 + \\cot^2 x = \\csc^2 x complète le trio pythagoricien. Certains ouvrages, notamment britanniques anciens, l’abrègent en cosec ; cette forme nécessite \\operatorname{cosec}. Une erreur courante consiste à écrire \\sin^{-1} x quand on veut dire \\csc x : l’exposant -1 désigne la fonction réciproque arc sinus, et non l’inverse. Les puissances se placent juste après la commande, comme dans \\csc^2 x, suivies de l’argument.",
  },
  "arcsine": {
    name: "Arc sinus",
    meaning: "Arc sinus, la réciproque du sinus restreint à [-pi/2, pi/2], composée comme un opérateur en romain.",
    usage: "\\arcsin x renvoie l’angle de [-\\pi/2, \\pi/2] dont le sinus vaut x, pour x dans [-1, 1]. C’est l’alternative sans ambiguïté à \\sin^{-1} x, que certains lecteurs interprètent à tort comme 1/\\sin x. Sa dérivée \\frac{1}{\\sqrt{1-x^2}} donne l’intégrale usuelle \\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C, pilier du changement de variable trigonométrique. Les bibliothèques logicielles l’appellent asin, mais les noms de programmation n’ont pas leur place dans des formules composées ; utilisez toujours la commande avec barre oblique inverse pour qu’elle soit en romain et bien espacée. Regroupez les arguments composés entre parenthèses.",
  },
  "arccosine": {
    name: "Arc cosinus",
    meaning: "Arc cosinus, qui renvoie l’angle de [0, pi] dont le cosinus est une valeur donnée.",
    usage: "L’angle entre deux vecteurs, \\theta = \\arccos\\frac{\\mathbf{a}\\cdot\\mathbf{b}}{\\lVert\\mathbf{a}\\rVert\\lVert\\mathbf{b}\\rVert}, est sans doute son apparition la plus fréquente. Son ensemble d’arrivée est [0, \\pi] et sa dérivée vaut -\\frac{1}{\\sqrt{1-x^2}}, ce qui explique que \\arcsin x + \\arccos x = \\frac{\\pi}{2} pour tout x dans [-1, 1]. \\cos^{-1} x signifie la même chose, mais \\arccos évite la confusion avec l’inverse. Entourez les arguments longs de \\left( \\right) pour plus de clarté, car l’opérateur ne fournit pas de parenthèses lui-même. En géométrie algorithmique, on ramène souvent d’abord l’argument dans [-1, 1] pour éviter les erreurs d’arrondi.",
  },
  "arctangent": {
    name: "Arc tangente",
    meaning: "Arc tangente, qui donne l’angle de (-pi/2, pi/2) dont la tangente vaut x.",
    usage: "\\arctan x apparaît dans \\int \\frac{dx}{1+x^2} = \\arctan x + C et dans la formule de Machin \\frac{\\pi}{4} = 4\\arctan\\frac{1}{5} - \\arctan\\frac{1}{239}. Pour l’angle polaire d’un point (x, y) dans les quatre quadrants, les programmeurs utilisent atan2 ; dans un article, écrivez \\operatorname{atan2}(y, x) ou l’argument complexe \\arg(x + iy). \\tan^{-1} x est un synonyme admis, plus courant en ingénierie. La série \\arctan x = x - x^3/3 + x^5/5 - \\cdots converge pour |x| \\le 1 et donne la série de Leibniz en x = 1.",
  },
  "arccotangent": {
    name: "Arc cotangente",
    meaning: "Réciproque de la cotangente, saisie via \\text car LaTeX ne fournit pas de commande \\arccot prédéfinie.",
    usage: "LaTeX standard définit \\arcsin, \\arccos et \\arctan mais pas \\arccot : cette entrée construit donc l’étiquette à partir de texte. Une approche plus propre est \\operatorname{arccot} x, qui ajoute l’espacement d’opérateur, ou \\DeclareMathOperator{\\arccot}{arccot} dans le préambule, pour que \\arccot x fonctionne comme ses homologues prédéfinis. Les conventions sur son ensemble d’arrivée diffèrent : certains textes utilisent (0, \\pi), d’autres (-\\pi/2, \\pi/2] privé de 0 ; précisez donc celle que vous adoptez. Sa dérivée vaut -\\frac{1}{1+x^2} dans les deux cas. Certains auteurs écrivent plutôt \\cot^{-1}. Choisissez une forme et tenez-vous-y dans tout le document.",
  },
  "arcsecant": {
    name: "Arc sécante",
    meaning: "Réciproque de la sécante, écrite avec \\text puisque LaTeX ne prédéfinit pas \\arcsec.",
    usage: "Définie pour |x| \\ge 1, \\text{arcsec}\\, x = \\arccos(1/x). Sa dérivée vaut \\frac{1}{|x|\\sqrt{x^2-1}} avec l’ensemble d’arrivée usuel [0, \\pi] privé de \\pi/2, et la valeur absolue est un oubli fréquent dans les copies d’étudiants. Comme \\text n’ajoute pas d’espacement d’opérateur, insérez \\, avant l’argument ou passez à \\operatorname{arcsec}. Déclarer une fois \\DeclareMathOperator{\\arcsec}{arcsec} permet d’écrire \\arcsec x exactement comme \\arccos x. Les tables d’intégrales expriment \\int \\frac{dx}{x\\sqrt{x^2-1}} à l’aide de cette fonction. Elle est rarement employée dans les articles récents, qui la réécrivent plutôt comme l’arc cosinus de l’inverse.",
  },
  "arccosecant": {
    name: "Arc cosécante",
    meaning: "Réciproque de la cosécante, construite avec \\text car il n’existe pas de commande \\arccsc prédéfinie.",
    usage: "Pour |x| \\ge 1, \\text{arccsc}\\, x = \\arcsin(1/x), à valeurs dans [-\\pi/2, \\pi/2] privé de 0. Sa dérivée vaut -\\frac{1}{|x|\\sqrt{x^2-1}}. C’est la moins utilisée des six fonctions trigonométriques réciproques, si bien que la plupart des auteurs la convertissent en arc sinus dans les réponses finales. Pour un espacement correct, utilisez \\operatorname{arccsc} ou déclarez-la comme opérateur mathématique dans le préambule plutôt que de compter sur \\text, qui passe en plus en italique dans les environnements de théorème. Certains ouvrages écrivent \\csc^{-1} x, avec le risque habituel d’être lu comme un inverse.",
  },
  "inverse-sine": {
    name: "Sinus réciproque",
    meaning: "Réciproque du sinus notée avec un exposant -1, équivalente à l’arc sinus.",
    usage: "Les calculatrices et de nombreux textes d’ingénierie notent l’arc sinus \\sin^{-1}, d’où \\sin^{-1}(0.5) = \\frac{\\pi}{6}. Cette notation entre en conflit avec \\sin^2 x = (\\sin x)^2 : par analogie, \\sin^{-1} x pourrait être lu comme 1/\\sin x, qui est en réalité \\csc x. C’est pourquoi les textes de mathématiques pures préfèrent généralement \\arcsin. Les accolades autour de -1 sont obligatoires, et LaTeX place l’exposant juste après le nom de l’opérateur, si bien que \\sin^{-1} x s’affiche avec l’exposant avant l’argument. Quelle que soit la notation choisie, employez-la de façon cohérente dans tout le document.",
  },
  "inverse-cosine": {
    name: "Cosinus réciproque",
    meaning: "Réciproque du cosinus en notation à exposant, la même fonction que arccos.",
    usage: "La physique et l’ingénierie écrivent souvent \\cos^{-1} pour les angles, par exemple l’angle entre deux vecteurs calculé à partir de leur produit scalaire normalisé. Ce n’est pas l’inverse 1/\\cos x, qui est \\sec x ; l’exposant -1 désigne ici la fonction réciproque. L’ensemble des valeurs est [0, \\pi], donc \\cos^{-1}(-1) = \\pi. Les articles de mathématiques pures choisissent généralement \\arccos pour éviter l’ambiguïté. Si votre texte mélange \\cos^2 x pour les carrés et \\cos^{-1} x pour les réciproques, signalez la convention une fois pour que les lecteurs n’aient pas à deviner.",
  },
  "inverse-tangent": {
    name: "Tangente réciproque",
    meaning: "Réciproque de la tangente notée tan à la puissance -1, équivalente à arctan.",
    usage: "L’ingénierie et la physique utilisent \\tan^{-1} pour les déphasages, comme dans \\phi = \\tan^{-1}(\\omega L / R) pour un circuit RL, et pour convertir des pentes en angles. Comme pour les autres formes réciproques, ce n’est pas \\cot x, l’inverse. Son ensemble de valeurs est (-\\pi/2, \\pi/2) : elle ne distingue donc pas les quadrants opposés, et un article qui a besoin de l’angle complet doit préciser qu’il utilise la version à deux arguments. De nombreux guides de style préfèrent \\arctan en mathématiques mais acceptent \\tan^{-1} dans les travaux appliqués, tant que le sens reste cohérent.",
  },
  "hyperbolic-sine": {
    name: "Sinus hyperbolique",
    meaning: "Sinus hyperbolique, (e^x - e^{-x})/2, composé comme un opérateur en romain.",
    usage: "\\sinh x = \\frac{e^x - e^{-x}}{2} paramètre l’hyperbole unité avec \\cosh, ce qui explique que \\cosh^2 x - \\sinh^2 x = 1. Il apparaît en relativité restreinte via la rapidité, dans les problèmes de chaînette et dans les solutions de y'' = y. Sa dérivée est \\cosh x, sans changement de signe, contrairement au sinus circulaire. Sa réciproque s’écrit souvent \\operatorname{arsinh} ou \\sinh^{-1} ; LaTeX ne fournit pas de commande prédéfinie pour elle. Taper sinh sans barre oblique inverse donne quatre lettres en italique et un mauvais espacement.",
  },
  "hyperbolic-cosine": {
    name: "Cosinus hyperbolique",
    meaning: "Cosinus hyperbolique, (e^x + e^{-x})/2, sous forme d’opérateur nommé en romain.",
    usage: "Une chaîne suspendue prend la forme d’une chaînette, y = a\\cosh(x/a), l’application classique des manuels. La fonction est paire, toujours supérieure ou égale à 1, et vérifie \\cosh^2 x - \\sinh^2 x = 1 et \\cosh(ix) = \\cos x. En relativité restreinte, le facteur de Lorentz est égal au cosinus hyperbolique de la rapidité. Comme les autres opérateurs, \\cosh ajoute une espace fine avant un argument d’un seul symbole, si bien que \\cosh x se passe de parenthèses. Sa réciproque n’a pas de commande prédéfinie ; utilisez \\operatorname{arcosh} ou \\cosh^{-1}.",
  },
  "hyperbolic-tangent": {
    name: "Tangente hyperbolique",
    meaning: "Tangente hyperbolique, quotient de sinh par cosh, à valeurs entre -1 et 1.",
    usage: "Les réseaux de neurones utilisent \\tanh comme fonction d’activation, souvent comparée à la sigmoïde logistique via \\tanh x = 2\\sigma(2x) - 1. Sa dérivée vaut 1 - \\tanh^2 x, ce qui garde les formules de rétropropagation compactes. En physique, elle apparaît dans l’aimantation en champ moyen, m = \\tanh(\\beta J z m), et dans l’addition relativiste des vitesses. Son ensemble de valeurs (-1, 1) la rend pratique pour comprimer des quantités non bornées. Sa réciproque \\operatorname{artanh} doit être écrite à la main ou déclarée, car LaTeX n’a pas de commande prédéfinie pour elle.",
  },
  "inverse-hyperbolic-sine": {
    name: "Argument sinus hyperbolique",
    meaning: "Réciproque du sinus hyperbolique, notée avec \\text car LaTeX n’a pas de commande prédéfinie pour elle.",
    usage: "Elle est égale à \\ln\\left(x + \\sqrt{x^2 + 1}\\right) et donne la primitive de \\frac{1}{\\sqrt{x^2+1}}. La notation ISO l’appelle arsinh, pour « area sinus » (argument sinus hyperbolique), car son argument est une aire et non un arc ; beaucoup d’auteurs écrivent encore arcsinh ou \\sinh^{-1}. Quel que soit le nom choisi, \\operatorname{arsinh} ou un \\DeclareMathOperator dans le préambule donne un meilleur espacement que \\text, qui hérite en outre de l’italique des théorèmes. Les spécialistes des données l’utilisent comme transformation stabilisatrice de variance car, contrairement au logarithme, elle accepte les valeurs nulles et négatives.",
  },
  "degree-symbol": {
    name: "Symbole degré",
    meaning: "Petit cercle en exposant qui indique les degrés, pour les angles comme pour les températures.",
    usage: "Le signe degré usuel en mode mathématique est ^{\\circ}, comme dans 90^{\\circ} ou \\angle ABC = 45^{\\circ} ; il place en exposant \\circ, le rond de la composition. Pour les températures, écrivez 25^{\\circ}\\mathrm{C} avec un C droit. N’utilisez pas la lettre o ou le chiffre 0 en exposant, dont la forme est incorrecte, ni \\circ sur la ligne de base, qui désigne la composition de fonctions. En mode texte, \\textdegree donne un signe assorti sans passer en mode mathématique. Les documents comportant beaucoup de mesures gagnent à utiliser une macro dédiée aux unités, qui gère l’espacement et les polices de façon cohérente.",
  },
  "radians": {
    name: "Radians",
    meaning: "Étiquette d’unité « rad » en romain, indiquant un angle mesuré en radians.",
    usage: "Les radians sont sans dimension : la plupart des textes mathématiques omettent donc l’unité et écrivent \\theta = \\pi/2, tandis que la physique et l’ingénierie l’ajoutent souvent explicitement, comme dans \\omega = 2\\pi\\,\\text{rad/s}. Placez une espace fine \\, entre le nombre et l’unité et gardez l’unité en romain ; \\text le fait, mais \\mathrm{rad} est plus sûr, car \\text reprend la police environnante dans les contextes en italique. La conversion s’écrit \\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\cdot \\pi/180. Notez que rad abrège aussi le radical d’un idéal en algèbre, généralement noté \\operatorname{rad}(I).",
  },
};

export default text;
