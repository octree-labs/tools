import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/complex/<slug>. */
const text: SymbolPageTranslations = {
  "imaginary-unit": {
    name: "Unité imaginaire",
    meaning: "L’unité imaginaire, un nombre dont le carré vaut −1 ; c’est la base de l’arithmétique complexe.",
    usage: "Mathématiciens et physiciens notent i la racine carrée de -1, ce qui donne z = a + bi et le i\\hbar de l’équation de Schrödinger. En mode mathématique, un i simple est en italique, comme une variable d’indice : dans les articles qui somment aussi sur i, il est donc plus sûr d’utiliser un \\mathrm{i} droit, ce que recommande la norme typographique ISO ; une macro comme \\newcommand{\\iu}{\\mathrm{i}} assure la cohérence. N’utilisez pas \\imath pour l’unité imaginaire : c’est un i sans point destiné à recevoir des accents, comme \\hat{\\imath} pour les vecteurs unitaires. En théorie des jeux, i sert aussi d’indice de joueur.",
  },
  "imaginary-unit-engineering": {
    name: "Unité imaginaire des ingénieurs",
    meaning: "Symbole de l’unité imaginaire en ingénierie, choisi parce que i est réservé au courant électrique.",
    usage: "Les électriciens écrivent les impédances Z = R + jX et les phaseurs V e^{j\\omega t}, et Python utilise j pour les littéraux complexes pour la même raison historique. Les textes de traitement du signal suivent aussi cet usage et écrivent la transformée de Fourier avec e^{-j\\omega t}. Comme pour i, un \\mathrm{j} droit distingue la constante d’une variable d’indice j. \\jmath, le j sans point, sert aux accents comme \\hat{\\jmath}, et non à l’unité imaginaire. Notez que de nombreux manuels placent j avant le nombre, en écrivant j5 plutôt que 5j.",
  },
  "complex-number": {
    name: "Nombre complexe",
    meaning: "Forme algébrique (cartésienne) d’un nombre complexe, de partie réelle a et de partie imaginaire b.",
    usage: "Tout nombre complexe peut s’écrire a + bi avec a et b réels ; cette forme est la plus commode pour l’addition et pour lire \\Re z = a et \\Im z = b. La multiplication et les puissances sont généralement plus simples sous forme polaire r e^{i\\theta}. Écrire bi, avec l’unité en dernier, est la convention courante, bien que les ingénieurs écrivent souvent a + jb. Si votre document compose i en romain, gardez-le droit ici aussi : a + b\\mathrm{i}. Lorsque b est négatif, écrivez a - bi plutôt que a + (-b)i, et pour des nombres précis placez i après les chiffres, comme dans 3 + 4i.",
  },
  "real-part": {
    name: "Partie réelle",
    meaning: "Partie réelle du nombre complexe z : pour z = a + bi, elle renvoie le réel a.",
    usage: "La commande prédéfinie \\Re affiche un R majuscule en gothique (Fraktur), le symbole traditionnel de la partie réelle, mais de nombreux auteurs modernes le trouvent difficile à lire et écrivent plutôt \\operatorname{Re}(z), qui affiche « Re » en romain avec l’espacement d’un opérateur. Dans les deux cas, \\Re n’est qu’un symbole et non un opérateur : TeX n’ajoute donc aucune espace avant l’argument ; utilisez des parenthèses ou une espace fine. Une identité utile est \\Re z = (z + \\bar{z})/2. En traitement du signal, \\Re\\{\\cdot\\} avec des accolades est courant pour extraire le signal physique d’un phaseur.",
  },
  "imaginary-part": {
    name: "Partie imaginaire",
    meaning: "Partie imaginaire de z, le coefficient réel b dans z = a + bi (et non le terme bi lui-même).",
    usage: "Une erreur fréquente chez les étudiants consiste à croire que \\Im(3 + 4i) = 4i ; elle vaut 4, un nombre réel. Le symbole est un I gothique (Fraktur) et, comme \\Re, il peut paraître obscur : \\operatorname{Im}(z) est donc une alternative répandue et plus lisible. Attention, Im abrège aussi l’image d’une application en algèbre ; si les deux sens apparaissent, écrivez \\operatorname{im} f pour l’image afin d’éviter les conflits. Parmi les faits utiles : \\Im z = (z - \\bar{z})/(2i), et le demi-plan supérieur est l’ensemble où \\Im z > 0.",
  },
  "complex-conjugate": {
    name: "Conjugué complexe",
    meaning: "Conjugué complexe de z, son symétrique par rapport à l’axe réel : le conjugué de a + bi est a − bi.",
    usage: "Les mathématiciens écrivent \\bar{z}, et des identités comme z\\bar{z} = |z|^2 le rendent essentiel pour diviser des nombres complexes. \\bar est un accent de largeur fixe prévu pour un seul caractère ; pour conjuguer une expression, utilisez \\overline{z + w}, qui s’étend sur tout l’argument et rend lisible \\overline{z + w} = \\bar{z} + \\bar{w}. Les physiciens écrivent plus souvent z^* et réservent la barre à d’autres usages, comme les adjoints de Dirac \\bar{\\psi}. Dans le calcul de Wirtinger, \\partial / \\partial \\bar{z} traite \\bar{z} comme une variable indépendante.",
  },
  "complex-conjugate-star": {
    name: "Conjugué complexe en astérisque",
    meaning: "Notation du conjugué complexe par un astérisque, standard en physique et en électrotechnique.",
    usage: "La mécanique quantique écrit les probabilités \\psi^* \\psi et les produits scalaires avec des composantes conjuguées : la notation z^* est donc la règle dans ce domaine. En exposant, l’astérisque convient tel quel ; z^{\\ast} donne le même glyphe. Pour les matrices, A^* désigne souvent la transconjuguée en mathématiques, tandis que les physiciens écrivent A^\\dagger pour celle-ci et gardent A^* pour la simple conjugaison terme à terme : précisez donc votre convention. Une étoile peut aussi marquer un optimum (x^*) ou un espace dual (V^*) ; évitez cette notation si ces sens apparaissent à proximité.",
  },
  "modulus": {
    name: "Module",
    meaning: "Module (valeur absolue) de z, sa distance à l’origine : √(a² + b²) pour z = a + bi.",
    usage: "De simples barres verticales suffisent dans les cas simples, mais elles sont ambiguës pour TeX, qui ne distingue pas l’ouvrante de la fermante ; cela provoque un mauvais espacement dans des expressions comme |-z|. Utilisez \\lvert z \\rvert, ou définissez une macro, pour obtenir un espacement correct, et \\left| \\frac{z}{w} \\right| lorsque le contenu est haut. N’utilisez jamais \\mid ici : c’est une relation à l’espacement large. Les propriétés clés sont |zw| = |z||w| et l’inégalité triangulaire |z + w| \\leq |z| + |w|. Dans un contexte vectoriel, les doubles barres \\| \\| désignent plutôt une norme.",
  },
  "argument": {
    name: "Argument",
    meaning: "Argument de z : l’angle entre l’axe réel positif et z, défini à un multiple de 2π près.",
    usage: "\\arg est un nom d’opérateur prédéfini : il s’affiche en romain avec l’espacement correct ; taper arg sans la barre oblique inverse donne des lettres en italique. Comme l’angle est multivalué, \\arg z est souvent traité comme un ensemble \\{\\theta + 2\\pi k\\}, et \\arg(zw) = \\arg z + \\arg w n’est vrai que modulo 2\\pi. Pour la valeur principale univoque, on écrit \\operatorname{Arg} z avec une majuscule. Ne confondez pas \\arg avec les opérateurs de type argmax, qui renvoient l’argument réalisant l’optimum et nécessitent leur propre déclaration.",
  },
  "principal-argument": {
    name: "Argument principal",
    meaning: "Valeur principale de l’argument, l’unique angle dans ]−π, π] que fait z avec l’axe réel positif.",
    usage: "La majuscule distingue cet Arg univoque du \\arg multivalué. La coupure se situe le long de l’axe réel négatif, c’est pourquoi \\text{Arg}(-1) = \\pi alors que les valeurs juste en dessous de la coupure tendent vers -\\pi. Certains ouvrages utilisent plutôt [0, 2\\pi[ : indiquez donc l’intervalle choisi. LaTeX n’a pas de commande \\Arg ; \\text{Arg} fonctionne mais passe en italique dans les environnements de théorème. \\operatorname{Arg} ou \\DeclareMathOperator{\\Arg}{Arg} est plus robuste et donne le bon espacement avant l’argument. Par exemple, \\text{Arg}(i) = \\pi/2 alors que \\arg i est tout l’ensemble \\pi/2 + 2\\pi k.",
  },
  "polar-form": {
    name: "Forme polaire",
    meaning: "Forme polaire (exponentielle) d’un nombre complexe : le module r multiplié par un complexe de module 1 d’angle θ.",
    usage: "Multiplier sous forme polaire revient simplement à multiplier les modules et à additionner les angles, donc (r e^{i\\theta})^n = r^n e^{in\\theta}, la formule de Moivre sous une forme compacte. Les racines de l’unité e^{2\\pi i k/n} et les phaseurs A e^{i\\omega t} découlent directement de cette notation. Mettez tout l’exposant entre accolades ; e^i\\theta n’élèverait e qu’à la puissance i. Lorsque les exposants deviennent chargés, \\exp(i\\theta) est plus lisible qu’un minuscule exposant. Certains guides de style composent la constante en romain, \\mathrm{e}, pour la distinguer d’une variable.",
  },
  "euler-s-formula": {
    name: "Formule d’Euler",
    meaning: "Formule d’Euler, qui relie l’exponentielle complexe au cosinus et au sinus ; elle place e^{iθ} sur le cercle unité.",
    usage: "Poser \\theta = \\pi donne l’identité d’Euler e^{i\\pi} + 1 = 0, et résoudre la formule pour le cosinus donne \\cos\\theta = (e^{i\\theta} + e^{-i\\theta})/2. Notez que \\cos et \\sin sont des commandes d’opérateur : elles s’affichent en romain et ajoutent une espace fine avant \\theta, alors qu’écrire cos donnerait trois lettres en italique. Aucune parenthèse n’est nécessaire pour un argument formé d’un seul symbole comme \\theta, mais utilisez-en pour les arguments composés, \\sin(2\\theta). En ingénierie, la même identité s’écrit avec j à la place de i.",
  },
  "complex-exponential": {
    name: "Exponentielle complexe",
    meaning: "Fonction exponentielle évaluée en un nombre complexe z = x + iy, égale à eˣ(cos y + i sin y).",
    usage: "L’exponentielle complexe est entière, ne s’annule jamais et est périodique de période 2\\pi i, ce qui explique pourquoi sa réciproque, le logarithme, est multivaluée. Avec des exposants courts, e^{z} convient ; pour une expression comme e^{-(x - \\mu)^2/2\\sigma^2}, l’exposant devient minuscule et \\exp\\left( -\\frac{(x-\\mu)^2}{2\\sigma^2} \\right) se lit mieux. \\exp est un opérateur prédéfini. Mettez toujours entre accolades les exposants de plusieurs éléments. Certains éditeurs demandent un \\mathrm{e} droit pour la constante, ce qui la distingue d’une variable e. Sa dérivée est elle-même, ce qui en fait la brique de base des solutions des équations différentielles linéaires.",
  },
  "complex-logarithm": {
    name: "Logarithme complexe",
    meaning: "Logarithme complexe de z, réciproque multivaluée de l’exponentielle : ln|z| + i arg z.",
    usage: "Comme l’exponentielle se répète tous les 2\\pi i, \\log z admet une infinité de valeurs différant de 2\\pi i k. La branche principale s’écrit souvent avec une majuscule, \\operatorname{Log} z = \\ln|z| + i \\operatorname{Arg} z, et elle est holomorphe en dehors de la coupure sur les réels négatifs. \\log et \\ln sont tous deux des opérateurs prédéfinis ; les analystes écrivent couramment \\log pour le logarithme népérien, tandis que \\ln rend la base explicite. Une espace fine apparaît automatiquement après \\log, si bien que \\log z ne nécessite pas de parenthèses pour une seule variable.",
  },
  "complex-power": {
    name: "Puissance complexe",
    meaning: "Puissance complexe z élevé à la puissance w, définie par exp(w log z) et généralement multivaluée.",
    usage: "Le fait surprenant i^i = e^{-\\pi/2} (sur la branche principale) découle de cette définition. Comme \\log z est multivalué, z^w a plusieurs valeurs sauf si w est entier, et des règles comme (z^a)^b = z^{ab} peuvent être fausses. Mettez entre accolades les exposants de plus d’un élément : z^{w+1}, et non z^w+1. Pour des tours comme z^{w^v}, TeX réduit chaque niveau : envisagez donc la notation \\exp pour la lisibilité. Indiquez explicitement la branche lorsque vous vous appuyez sur une valeur précise, par exemple en écrivant \\exp(w \\operatorname{Log} z).",
  },
  "unit-circle": {
    name: "Cercle unité",
    meaning: "Équation du cercle unité dans le plan complexe : tous les nombres complexes situés à distance 1 de l’origine.",
    usage: "Les points du cercle unité sont exactement les e^{i\\theta}, et les racines n-ièmes de l’unité s’y trouvent. On le note souvent \\mathbb{T} ou S^1 et, en tant que groupe pour la multiplication, c’est le groupe du cercle utilisé en analyse de Fourier. Les intégrales de contour sur ce cercle s’écrivent \\oint_{|z|=1}, avec la condition en indice. Sur le cercle, le conjugué vérifie \\bar{z} = 1/z, une simplification pratique. Si l’espacement autour des barres semble incorrect dans le contexte, utilisez \\lvert z \\rvert ; le disque ouvert |z| < 1 et le disque fermé |z| \\le 1 suivent le même modèle.",
  },
  "upper-half-plane": {
    name: "Demi-plan supérieur",
    meaning: "H ajouré (gras de tableau noir), le plus souvent le demi-plan supérieur {z : Im z > 0} ; désigne aussi les quaternions.",
    usage: "En analyse complexe et en théorie des nombres, \\mathbb{H} est le domaine des formes modulaires, sur lequel SL_2(\\mathbb{Z}) agit par homographies (transformations de Möbius), et il est muni de la métrique hyperbolique. En algèbre, la même lettre désigne les quaternions de Hamilton, nommés d’après lui : si les deux apparaissent, écrivez \\mathcal{H} ou précisez celui dont vous parlez. Avec les polices standard, \\mathbb ne fournit que des majuscules ; des arguments en minuscules produisent des glyphes incohérents ou des erreurs. Les ensembles apparentés se composent de la même façon : \\mathbb{C}, \\mathbb{R}, \\mathbb{Z}. Son bord est la droite réelle complétée d’un point à l’infini.",
  },
};

export default text;
