import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/physics/<slug>. */
const text: SymbolPageTranslations = {
  "reduced-planck-constant-h-bar": {
    name: "Constante de Planck réduite (h barre)",
    meaning: "Constante de Planck réduite ħ = h/2π, le quantum de moment cinétique omniprésent en mécanique quantique.",
    usage: "Elle apparaît dans le commutateur canonique [x, p] = i\\hbar, l'énergie du photon E = \\hbar\\omega et la relation d'incertitude \\Delta x\\, \\Delta p \\geq \\hbar/2. Sa valeur vaut environ 1.055 \\times 10^{-34} J s. \\hslash est une variante avec une barre oblique au lieu d'une barre horizontale ; choisissez-en une et conservez-la. Le h simple, sans barre, est la constante non réduite de E = h\\nu. En physique théorique, les unités où \\hbar = 1 sont la norme : signalez ce choix lorsque vous la faites disparaître des équations.",
  },
  "bra-vector": {
    name: "Vecteur bra",
    meaning: "Un bra en notation de Dirac : le vecteur dual (vecteur ligne), une forme linéaire qui agit sur les kets.",
    usage: "Le bra \\langle \\psi | est le transposé conjugué du ket |\\psi\\rangle : c'est donc lui que l'on place à gauche d'un produit scalaire ou d'une valeur moyenne. Utilisez \\langle, jamais le signe inférieur <, qui est une relation avec un large espacement et une forme incorrecte. Une barre | simple convient ici, mais \\rvert donne l'espacement correct d'un délimiteur fermant. Pour un usage répété, définissez \\newcommand{\\bra}[1]{\\langle #1 \\rvert}. Lorsque l'étiquette de l'état est haute, \\left\\langle \\frac{\\psi}{2} \\right| redimensionne les deux délimiteurs ensemble.",
  },
  "ket-vector": {
    name: "Vecteur ket",
    meaning: "Un ket en notation de Dirac, qui représente un état quantique comme un vecteur colonne de l'espace de Hilbert.",
    usage: "Les états sont des kets : |0\\rangle et |1\\rangle pour un qubit, |n\\rangle pour les niveaux de l'oscillateur harmonique, et des superpositions comme \\alpha|0\\rangle + \\beta|1\\rangle. Le chevron est \\rangle, et non >. Écrire \\lvert \\psi \\rangle indique explicitement à TeX un délimiteur ouvrant, de sorte que l'espacement reste correct même après un signe moins. Une macro comme \\newcommand{\\ket}[1]{\\lvert #1 \\rangle} assure la cohérence de centaines de kets. Les produits tensoriels s'écrivent |\\psi\\rangle \\otimes |\\phi\\rangle ou, en abrégé, |\\psi\\phi\\rangle. Un ket multiplié par un bra, |\\psi\\rangle\\langle\\psi|, est un projecteur ou une matrice densité.",
  },
  braket: {
    name: "Braket (produit scalaire bra-ket)",
    meaning: "Produit scalaire de deux états, la rencontre d'un bra et d'un ket ; le carré de son module donne une probabilité de transition.",
    usage: "L'amplitude \\langle \\phi | \\psi \\rangle est à symétrie hermitienne, \\langle \\phi | \\psi \\rangle = \\langle \\psi | \\phi \\rangle^*, et la normalisation s'écrit \\langle \\psi | \\psi \\rangle = 1. Les éléments de matrice encadrent un opérateur : \\langle \\phi | \\hat{A} | \\psi \\rangle. Utilisez une barre | simple au milieu plutôt que \\mid, dont l'espacement de relation écarte les deux moitiés. Pour un contenu haut, \\left\\langle \\phi \\middle| \\psi \\right\\rangle fait aussi grandir la barre centrale. Les mathématiciens écrivent la même chose (\\phi, \\psi) ou \\langle \\phi, \\psi \\rangle avec une virgule.",
  },
  laplacian: {
    name: "Laplacien",
    meaning: "Opérateur de Laplace, somme des dérivées partielles secondes ; il mesure l'écart entre une fonction et sa moyenne locale.",
    usage: "L'équation de Laplace \\nabla^2 \\phi = 0, l'équation de Poisson \\nabla^2 \\phi = -\\rho/\\varepsilon_0, l'équation de la chaleur et l'équation des ondes l'utilisent toutes. Les physiciens préfèrent \\nabla^2, qui rappelle qu'il s'agit de la divergence du gradient ; les mathématiciens écrivent souvent \\Delta, qui peut entrer en conflit avec \\Delta au sens de différence finie ou de variation. En coordonnées cartésiennes, \\nabla^2 f = f_{xx} + f_{yy} + f_{zz}, mais en coordonnées curvilignes des termes supplémentaires apparaissent. Pour le laplacien vectoriel d'un champ, mettez l'opérande en gras pour signaler ce sens différent.",
  },
  "d-alembertian": {
    name: "D'alembertien",
    meaning: "Symbole carré, l'opérateur d'onde de d'Alembert en relativité et l'opérateur de nécessité en logique modale.",
    usage: "En relativité restreinte, \\Box = \\partial^\\mu \\partial_\\mu combine dérivées temporelle et spatiales : l'équation d'onde s'écrit donc \\Box \\phi = 0 et l'équation de Klein-Gordon (\\Box + m^2)\\phi = 0. Les conventions de signe dépendent de la signature de la métrique : précisez la vôtre. Les logiciens modaux lisent \\Box p comme « nécessairement p », et \\Diamond p comme « possiblement p ». Certains textes écrivent \\Box^2 pour l'opérateur, par analogie avec \\nabla^2. Le symbole visuellement proche \\square est couramment utilisé comme marque de fin de démonstration ; vérifiez quel glyphe votre classe de document utilise pour le CQFD.",
  },
  "calligraphic-l-lagrangian": {
    name: "L calligraphique (lagrangien)",
    meaning: "L calligraphique, le symbole standard d'une densité lagrangienne et, en apprentissage automatique, d'une fonction de perte.",
    usage: "La théorie des champs écrit l'action S = \\int \\mathcal{L}\\, d^4x, avec l'équation d'Euler-Lagrange \\partial_\\mu \\frac{\\partial \\mathcal{L}}{\\partial(\\partial_\\mu \\phi)} = \\frac{\\partial \\mathcal{L}}{\\partial \\phi}. La mécanique classique utilise souvent un L simple pour le lagrangien lui-même et réserve \\mathcal{L} aux densités. Les articles d'apprentissage automatique utilisent \\mathcal{L}(\\theta) pour une perte, et les ingénieurs l'emploient pour la transformée de Laplace \\mathcal{L}\\{f\\}(s). En optimisation, le lagrangien avec multiplicateurs se note aussi \\mathcal{L}(x, \\lambda). Introduisez explicitement le sens dont vous avez besoin. Son pendant par la transformation de Legendre est le hamiltonien \\mathcal{H}.",
  },
  "calligraphic-h-hamiltonian": {
    name: "H calligraphique (hamiltonien)",
    meaning: "H calligraphique, utilisé pour le hamiltonien (fonction énergie) et souvent pour un espace de Hilbert.",
    usage: "En mécanique classique, les équations de Hamilton s'écrivent \\dot{q} = \\partial \\mathcal{H}/\\partial p et \\dot{p} = -\\partial \\mathcal{H}/\\partial q. La mécanique quantique note généralement l'opérateur hamiltonien \\hat{H} et utilise \\mathcal{H} pour l'espace de Hilbert des états : les deux sens calligraphiques peuvent donc se télescoper dans un même article. La physique statistique utilise \\mathcal{H} pour une fonctionnelle hamiltonienne dans le poids de Boltzmann e^{-\\beta \\mathcal{H}}. La théorie de l'apprentissage l'emploie pour une classe d'hypothèses. Choisissez des lettres distinctes si plusieurs sens apparaissent. Notez que \\mathcal ne couvre que les majuscules dans les polices par défaut.",
  },
  tensor: {
    name: "Tenseur",
    meaning: "Un tenseur contravariant d'ordre 2, comme le tenseur énergie-impulsion, écrit avec deux indices grecs en haut.",
    usage: "La relativité générale couple la géométrie à la matière par G_{\\mu\\nu} = 8\\pi G\\, T_{\\mu\\nu}, et la conservation s'écrit \\nabla_\\mu T^{\\mu\\nu} = 0. Les accolades regroupent les deux indices en un seul exposant ; T^\\mu\\nu placerait \\nu sur la ligne de base. Pour les tenseurs mixtes, conservez un ordre horizontal visible grâce à un groupe vide : T^{\\mu}{}_{\\nu} place l'indice inférieur après l'indice supérieur plutôt qu'en dessous. Les indices répétés en haut et en bas suivent la convention de sommation d'Einstein. Par convention, les indices grecs parcourent l'espace-temps et les indices latins l'espace seul.",
  },
  "christoffel-symbol": {
    name: "Symbole de Christoffel",
    meaning: "Symbole de Christoffel de seconde espèce, qui décrit la variation des vecteurs de la base de coordonnées pour la connexion de Levi-Civita.",
    usage: "Il se calcule à partir de la métrique par \\Gamma^\\lambda_{\\mu\\nu} = \\frac{1}{2} g^{\\lambda\\sigma}(\\partial_\\mu g_{\\sigma\\nu} + \\partial_\\nu g_{\\sigma\\mu} - \\partial_\\sigma g_{\\mu\\nu}) et apparaît dans l'équation des géodésiques et dans les dérivées covariantes. Malgré sa notation indicielle, ce n'est pas un tenseur. Écrire l'exposant et l'indice sur la même base les empile verticalement, ce qui est le style habituel ici, puisque le symbole est symétrique en ses deux indices inférieurs. Le Gamma majuscule est droit par défaut ; \\varGamma en donne une version italique si votre style l'exige.",
  },
  "partial-time": {
    name: "Dérivée partielle par rapport au temps",
    meaning: "Opérateur de dérivée partielle par rapport au temps t, toutes les variables d'espace étant fixées.",
    usage: "Il gouverne les équations d'évolution : l'équation de la chaleur \\frac{\\partial u}{\\partial t} = k \\nabla^2 u, l'équation de continuité et l'équation de Schrödinger. En ligne, un \\frac complet est à l'étroit : écrivez \\partial u/\\partial t ou la forme compacte \\partial_t u ; la forme indicée est la norme dans les articles sur les EDP. En mode display, utilisez \\frac, et \\dfrac si l'expression figure dans une fraction ou une matrice et doit garder sa taille normale. Distinguez-la de la dérivée totale d/dt et de la dérivée particulaire D/Dt utilisée en mécanique des fluides.",
  },
  "vector-field": {
    name: "Champ vectoriel",
    meaning: "Accent en flèche au-dessus d'une lettre pour la marquer comme vecteur, ici le champ électrique E.",
    usage: "La physique d'introduction note les vecteurs avec des flèches, \\vec{E}, \\vec{F} = q\\vec{E}, tandis que la plupart des revues et des ouvrages avancés préfèrent le gras, \\mathbf{E}, ou pour les lettres grecques \\boldsymbol{\\omega}. \\vec est un accent court de largeur fixe, dimensionné pour un seul caractère ; pour des vecteurs à plusieurs lettres comme un segment AB, \\overrightarrow{AB} s'étend sur toute l'étiquette. Choisissez un seul style de vecteur pour tout le document. Les vecteurs unitaires portent généralement un chapeau, \\hat{x}, et pour un i ou un j sans point sous un accent, utilisez \\imath et \\jmath.",
  },
  divergence: {
    name: "Divergence",
    meaning: "Opérateur divergence, produit scalaire de nabla et d'un champ vectoriel, qui donne le flux sortant net par unité de volume.",
    usage: "Le théorème de Gauss \\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0 et l'absence de monopôle magnétique \\nabla \\cdot \\mathbf{B} = 0 en sont les usages les plus connus, et un écoulement incompressible exige \\nabla \\cdot \\mathbf{u} = 0. \\cdot porte l'espacement d'un opérateur binaire, ce qui donne le rendu attendu. Utilisez \\cdot, et non un point ou \\bullet. Certains textes mathématiques préfèrent \\operatorname{div} \\mathbf{F}, qui évite de traiter nabla comme un vecteur. Le théorème de flux-divergence la relie au flux à travers le bord : \\int_V \\nabla \\cdot \\mathbf{F}\\, dV = \\oint_{\\partial V} \\mathbf{F} \\cdot d\\mathbf{S}.",
  },
  curl: {
    name: "Rotationnel",
    meaning: "Opérateur rotationnel, produit vectoriel de nabla et d'un champ vectoriel, qui mesure sa rotation locale ou densité de circulation.",
    usage: "La loi de Faraday \\nabla \\times \\mathbf{E} = -\\partial \\mathbf{B}/\\partial t et le théorème d'Ampère avec la correction de Maxwell s'écrivent avec lui, et en mécanique des fluides \\nabla \\times \\mathbf{u} est la vorticité. Deux identités méritent d'être retenues : le rotationnel d'un gradient est nul et la divergence d'un rotationnel est nulle. \\times est un opérateur binaire : l'espacement est donc automatique. Les textes européens écrivent parfois \\operatorname{rot} \\mathbf{F}, et d'autres utilisent \\operatorname{curl}. Le rotationnel n'est défini de cette façon qu'en dimension trois.",
  },
};

export default text;
