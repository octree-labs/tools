import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/accents/<slug>. */
const text: SymbolPageTranslations = {
  "hat": {
    name: "Chapeau",
    meaning: "Place un petit accent circonflexe sur un seul caractère, pour noter un estimateur, un vecteur unitaire ou une transformée de Fourier.",
    usage: "Les statisticiens écrivent \\hat{\\theta} pour un estimateur de \\theta et \\hat{y} pour les valeurs ajustées d’une régression, les physiciens utilisent \\hat{x} ou \\hat{\\mathbf{n}} pour les vecteurs unitaires et les opérateurs quantiques, et les analystes écrivent \\hat{f} pour la transformée de Fourier. L’accent a une largeur fixe : il ne rend bien que sur un seul symbole ; pour plusieurs lettres, passez à \\widehat{xy}. Sur un i ou un j, utilisez les formes sans point \\imath et \\jmath pour que le chapeau ne repose pas sur un point. Dans le texte, hors du mode mathématique, l’accent circonflexe équivalent est \\^{o}, et non \\hat.",
  },
  "wide-hat": {
    name: "Chapeau large",
    meaning: "Étire un accent circonflexe sur une expression de plusieurs lettres, comme la transformée de Fourier d’un produit.",
    usage: "Utilisez \\widehat quand l’accent doit couvrir plus d’un glyphe, par exemple \\widehat{f * g} = \\hat{f}\\,\\hat{g} pour la convolution, \\widehat{ABC} pour un angle dans certaines traditions géométriques, ou \\widehat{G} pour le groupe dual ou le complété d’un groupe. Dans les polices Computer Modern standard, le chapeau ne s’élargit que jusqu’à une largeur limitée : sur une longue expression il cesse de s’étirer et paraît trop petit ; un exposant comme (f g)^\\wedge ou un opérateur \\mathcal{F}\\{\\cdot\\} se lit alors mieux. Pour une seule lettre, préférez \\hat{x}, mieux positionné sur les caractères italiques.",
  },
  "tilde": {
    name: "Tilde",
    meaning: "Place un petit tilde ondulé sur un seul symbole, souvent pour une approximation, une transformée ou une variable modifiée.",
    usage: "Un tilde sur une lettre signale en général un objet apparenté mais modifié : \\tilde{x} pour une solution perturbée ou approchée, \\tilde{f} pour une transformée de Laplace ou autre, \\tilde{O}(n) pour la complexité « O tilde » qui masque les facteurs logarithmiques, ou \\tilde{X} pour un revêtement universel en topologie. Comme \\hat, il a une largeur fixe : sur deux lettres ou plus, utilisez \\widetilde. Ne le confondez pas avec \\sim, symbole de relation placé entre deux termes (X \\sim N(0,1)), ni avec l’accent du mode texte \\~{n} des mots comme señor. Pour les lettres sans point, écrivez \\tilde{\\imath}.",
  },
  "wide-tilde": {
    name: "Tilde large",
    meaning: "Trace un tilde extensible sur un groupe de symboles, utilisé pour les revêtements, les adhérences et les expressions modifiées.",
    usage: "Choisissez \\widetilde quand le tilde doit couvrir plusieurs caractères, comme dans \\widetilde{GL}_n pour un groupe de revêtement, \\widetilde{AB} pour un arc dans certains ouvrages de géométrie, ou \\widetilde{f(x)} pour une fonction lissée. Sa largeur croît avec le contenu, mais seulement jusqu’à un maximum dépendant de la police, au-delà duquel il reste centré et paraît court ; pour de longs arguments, une notation postfixée ou un opérateur nommé est plus clair. Sur une seule lettre, \\tilde{x} est mieux placé et plus petit. Pour écrire le tilde comme caractère isolé dans le texte, la commande à employer est \\textasciitilde.",
  },
  "dot": {
    name: "Point suscrit",
    meaning: "Ajoute un point au-dessus d’une variable, la notation de Newton pour la dérivée première par rapport au temps.",
    usage: "En mécanique et en systèmes dynamiques, \\dot{x} signifie dx/dt, ce qui permet d’écrire de façon compacte des équations comme \\dot{x} = Ax ou le lagrangien L(q, \\dot{q}, t). Les physiciens l’emploient aussi pour des débits, comme \\dot{m} pour le débit massique. Le point est un accent mathématique et fonctionne aussi sur les lettres grecques : \\dot{\\theta}. Ne le confondez pas avec \\cdot (point de multiplication centré) ni avec l’accent du mode texte \\.{z} des mots polonais. Pour la dérivée seconde, utilisez \\ddot{x} plutôt que d’empiler deux commandes \\dot, ce qui désaligne les points.",
  },
  "double-dot": {
    name: "Double point suscrit",
    meaning: "Place deux points au-dessus d’une variable pour noter sa dérivée seconde par rapport au temps, comme l’accélération.",
    usage: "La deuxième loi de Newton s’écrit couramment m\\ddot{x} = F, et l’oscillateur harmonique \\ddot{x} + \\omega^2 x = 0. En mécanique lagrangienne, les équations d’Euler-Lagrange font apparaître des termes en \\ddot{q}. Bien qu’il ressemble à un tréma, \\ddot est un accent mathématique ; pour les mots allemands ou turcs dans le texte, utilisez \\\"{o}. Les points sont centrés sur l’axe incliné du symbole : sur les lettres italiques ils se décalent légèrement vers la droite, ce qui est voulu. Pour la dérivée troisième, \\dddot{x} existe, mais au-delà la notation de Leibniz ou x^{(n)} est plus claire.",
  },
  "triple-dot": {
    name: "Triple point suscrit",
    meaning: "Place trois points au-dessus d’une variable, la notation newtonienne de la dérivée troisième par rapport au temps (le jerk, ou à-coup).",
    usage: "Les dérivées troisièmes apparaissent en planification de trajectoire et en automatique, où \\dddot{x} est le jerk, ainsi que dans la force de réaction de rayonnement d’Abraham-Lorentz, proportionnelle à \\dddot{\\mathbf{x}}. Il va de pair avec \\ddddot pour quatre points, et aucun des deux ne fait partie du noyau minimal de LaTeX. Ses points sont plus serrés que ne le permettraient trois appels manuels à \\dot, et il se place à la même hauteur que \\ddot. Comme trois points deviennent difficiles à lire en petit corps ou en indice, beaucoup d’auteurs passent à x^{(3)} ou d^3x/dt^3 pour les ordres supérieurs.",
  },
  "bar": {
    name: "Barre suscrite",
    meaning: "Place une courte barre horizontale sur un symbole, typiquement pour une moyenne empirique ou un conjugué complexe.",
    usage: "Les statistiques utilisent \\bar{x} pour la moyenne empirique, (1/n)\\sum x_i ; l’analyse complexe écrit \\bar{z} pour le conjugué ; et \\bar{A} peut désigner l’adhérence d’un ensemble. La barre a une largeur fixe, à peu près celle d’une lettre, si bien que \\bar{xy} rend mal : utilisez \\overline{xy} pour couvrir plusieurs symboles, ce qui est aussi le choix habituel pour conjuguer une expression comme \\overline{z + w}. Dans le texte, l’accent macron s’écrit \\={a}, et non \\bar. Les vecteurs en gras l’acceptent sans problème : \\bar{\\mathbf{v}}.",
  },
  "overline": {
    name: "Surlignement",
    meaning: "Trace une ligne au-dessus de toute une expression, pour les conjugués, les adhérences, les développements décimaux périodiques ou les noms de segments.",
    usage: "Contrairement à \\bar, le filet de \\overline s’étend sur toute la largeur de son argument : il convient donc à \\overline{z_1 z_2} = \\bar{z}_1 \\bar{z}_2, à l’adhérence \\overline{A \\cup B}, à la négation booléenne \\overline{A + B}, au segment \\overline{AB} et aux développements périodiques comme 0.\\overline{3}. Les surlignements imbriqués s’empilent à des hauteurs croissantes, ce qui peut paraître irrégulier côte à côte ; ajouter à chacun un \\vphantom du contenu le plus haut aide à les aligner. En mode texte, aucun surlignement n’est disponible directement ; passez en mode mathématique. Son pendant pour le soulignement est \\underline.",
  },
  "underline": {
    name: "Soulignement",
    meaning: "Trace un filet sous une expression, utilisé pour la mise en relief, les bornes inférieures ou les intégrales inférieures.",
    usage: "En mathématiques, \\underline sert pour les intégrales inférieures de Darboux, la limite inférieure \\underline{\\lim}, les minorants et pour marquer des éléments distingués ; certains domaines soulignent les vecteurs au lieu de les mettre en gras. Il fonctionne en mode texte comme en mode mathématique, mais dans le texte il désactive la césure et les retours à la ligne : c’est donc un mauvais choix pour mettre des mots en valeur, où l’on préfère \\emph. La profondeur du filet dépend des jambages, si bien que \\underline{a} et \\underline{y} se placent à des hauteurs différentes ; ajouter un \\vphantom{y} à chacun les aligne. Son jumeau supérieur est \\overline.",
  },
  "vector-arrow": {
    name: "Flèche de vecteur",
    meaning: "Place une petite flèche vers la droite au-dessus d’une seule lettre pour indiquer qu’il s’agit d’un vecteur.",
    usage: "La physique scolaire et de nombreux ouvrages d’ingénierie notent les vecteurs \\vec{F}, \\vec{v} ou \\vec{r}, tandis que les mathématiques pures utilisent plus souvent le gras \\mathbf{v} ou des lettres simples. La flèche a une taille fixe prévue pour un caractère ; au-dessus de deux points comme AB elle paraît à l’étroit, utilisez donc \\overrightarrow{AB}. Sur les lettres italiques, la flèche est légèrement décalée vers la droite pour suivre leur inclinaison. La combiner avec un chapeau pour les vecteurs unitaires (\\hat{\\vec{x}}) fonctionne mais devient très haut ; beaucoup d’auteurs écrivent plutôt \\hat{\\mathbf{x}}.",
  },
  "wide-vector": {
    name: "Flèche de vecteur large",
    meaning: "Étire une flèche vers la droite au-dessus de son argument, la notation standard du vecteur allant de A à B.",
    usage: "La géométrie et le calcul vectoriel utilisent \\overrightarrow{AB} pour le vecteur du point A au point B, d’où des identités comme la relation de Chasles \\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}. La flèche s’élargit selon le contenu, contrairement à \\vec, qui ne couvre qu’une lettre. En théorie des catégories et en analyse fonctionnelle, elle marque parfois le sens d’une limite ou un ensemble ordonné filtrant. La flèche est tracée en pleine hauteur et ajoute un espace vertical notable ; dans un texte à interligne serré, envisagez \\vec{v} ou des lettres grasses. Utilisez \\overleftarrow pour le sens inverse.",
  },
  "left-vector": {
    name: "Flèche vers la gauche suscrite",
    meaning: "Trace une flèche vers la gauche sur toute la largeur de l’argument, pour un sens inversé ou une suite lue à rebours.",
    usage: "Moins courante que sa jumelle orientée vers la droite, \\overleftarrow{AB} apparaît lorsqu’un vecteur ou un chemin se lit de B vers A, pour le mot ou la chaîne retournés en théorie des langages formels, et pour les grandeurs adjointes ou à rebours du temps en physique. Sa flèche s’étend sur tout l’argument, exactement comme \\overrightarrow. Si vous voulez les flèches sous l’expression, amsmath fournit \\underleftarrow et \\underrightarrow. Pour un vecteur inversé d’une seule lettre, il n’existe pas de forme courte intégrée comme \\vec : cette commande large est donc le choix habituel.",
  },
  "line-arrow-over-ab": {
    name: "Double flèche suscrite (droite AB)",
    meaning: "Trace une flèche à deux pointes au-dessus de son argument, la notation usuelle de la droite passant par les points A et B.",
    usage: "La géométrie scolaire distingue trois objets construits à partir de deux points : \\overline{AB} pour le segment, \\overrightarrow{AB} pour la demi-droite et \\overleftrightarrow{AB} pour la droite infinie. La flèche s’étire avec le contenu et porte une pointe à chaque extrémité. Elle sert aussi parfois pour des relations bidirectionnelles ou des limites bilatérales. Comme elle est assez haute, elle peut heurter la ligne du dessus dans un paragraphe dense ; le mode hors texte évite ce problème. La version correspondante sous l’expression est \\underleftrightarrow. Gardez à l’esprit la différence avec \\overline{AB}, qui ne désigne que le segment fini.",
  },
  "acute": {
    name: "Accent aigu",
    meaning: "Place un accent aigu (trait montant) sur un symbole mathématique, parfois employé comme marque analogue au prime.",
    usage: "Les accents du mode mathématique comme \\acute existent surtout par souci d’exhaustivité ; en pratique, ils servent de décorations de variables, par exemple \\acute{x} pour une coordonnée transformée dans certains ouvrages de physique. Pour les lettres accentuées dans les mots, utilisez l’accent du mode texte \\'{e}, comme dans café ; \\acute ne fonctionne pas hors du mode mathématique. La version mathématique utilise la police italique mathématique : \\acute{e} dans une équation ne correspond donc pas à une lettre romaine accentuée du paragraphe environnant. Si vous voulez simplement une marque de type dérivée, x' (prime) est bien plus courant.",
  },
  "grave": {
    name: "Accent grave",
    meaning: "Place un accent grave (trait descendant) sur un symbole en mode mathématique, comme décoration de variable.",
    usage: "\\grave est l’équivalent en mode mathématique de l’accent du mode texte \\`{a} que l’on voit dans des mots comme voilà. Dans les équations il est rarement utilisé et sert simplement à distinguer des variables apparentées, au même titre que les primes, les chapeaux et les tildes. Comme c’est un accent mathématique, il compose son argument en italique mathématique ; pour un mot accentué dans une équation, écrivez plutôt \\text{\\`{a}}. Si vous choisissez une décoration pour une nouvelle variable, le lecteur trouvera en général \\tilde, \\hat ou un prime plus familiers.",
  },
  "breve": {
    name: "Brève",
    meaning: "Ajoute une brève (petite courbe en forme de coupe) au-dessus d’un symbole, une décoration de variable peu courante.",
    usage: "En mathématiques, \\breve{x} sert de marque de rechange quand le chapeau, la barre et le tilde sont déjà pris, par exemple dans certains articles de traitement du signal et de statistique pour un estimateur modifié, ainsi que dans des notations de théorie de Lie. La brève est arrondie en bas, contrairement à \\check, qui est pointu. Pour du texte en roumain ou en turc (ă, ğ), utilisez l’accent du mode texte \\u{a} plutôt que la commande mathématique. L’accent a une largeur fixe et ne convient donc qu’aux lettres isolées.",
  },
  "check": {
    name: "Caron (háček)",
    meaning: "Place un caron (háček), petit accent en forme de v, au-dessus d’un symbole ; utilisé notamment pour la cohomologie de Čech.",
    usage: "La topologie algébrique écrit \\check{H}^n(X) pour la cohomologie de Čech, et certains ouvrages utilisent \\check{x} pour un objet dual ou obtenu par transformation inverse, à l’opposé du chapeau. Sa forme en v le distingue de la brève arrondie \\breve et de \\hat, qui est un v renversé. Dans le texte, un háček tchèque comme č s’obtient avec \\v{c}, et non avec \\check. L’accent a une largeur fixe ; le noyau de LaTeX ne fournit pas de \\widecheck standard, si bien que sur de longues expressions les auteurs utilisent plutôt un exposant.",
  },
  "ring": {
    name: "Rond suscrit",
    meaning: "Place un petit rond au-dessus d’un symbole, utilisé pour l’intérieur d’un ensemble et certains symboles d’unités.",
    usage: "La topologie écrit parfois \\mathring{A} pour l’intérieur de A (une alternative à A^\\circ ou \\operatorname{int} A), et la géométrie différentielle l’utilise pour des grandeurs de trace nulle ou de référence. Pour le symbole de l’ångström dans le texte, utilisez \\AA, et pour la lettre scandinave å, \\aa ; \\mathring est réservé au mode mathématique. Il diffère d’un \\circ en exposant, placé en haut à droite plutôt que centré au-dessus. Le rond est dimensionné pour une seule lettre. Sur les lettres i et j, utilisez \\imath ou \\jmath pour que le rond remplace le point.",
  },
  "overbrace": {
    name: "Accolade horizontale supérieure",
    meaning: "Trace une accolade horizontale au-dessus d’une expression, avec une étiquette facultative donnée en exposant.",
    usage: "Les accolades supérieures annotent des parties d’une formule, par exemple pour indiquer n exemplaires dans \\overbrace{1 + 1 + \\cdots + 1}^{n} ou pour nommer un terme dans un calcul. L’exposant qui suit la commande se place au-dessus de la pointe de l’accolade, et entourer l’étiquette de \\text la garde droite et d’une taille lisible. L’accolade ajoute beaucoup de hauteur : elle a sa place en mode hors texte, car en ligne elle écarterait les lignes. Combinez-la avec \\underbrace sur la même expression pour annoter au-dessus et au-dessous. Pour une accolade avec une étiquette sur le côté, utilisez plutôt \\left\\{ ... \\right.",
    example: "\\overbrace{a + a + \\cdots + a}^{n \\text{ fois}} = na",
  },
  "underbrace": {
    name: "Accolade horizontale inférieure",
    meaning: "Place une accolade sous une expression, avec une étiquette donnée en indice en dessous.",
    usage: "Les manuels utilisent \\underbrace pour expliquer les morceaux d’une équation, par exemple pour signaler \\underbrace{\\frac{1}{2}mv^2}_{\\text{cinétique}} dans un bilan d’énergie ou pour compter les facteurs d’un produit. L’étiquette se place en indice juste après la commande ; utilisez \\text pour les mots et du contenu en \\scriptstyle pour de courtes formules. L’accolade s’étire exactement sur la largeur de son argument. Les accolades imbriquées ou superposées demandent de l’attention : on peut placer une accolade inférieure sous une partie d’une expression déjà surmontée d’une accolade, mais les accolades ne peuvent pas se croiser. Comme \\overbrace, elle convient surtout au mode hors texte.",
  },
  "cancel": {
    name: "Barre de simplification",
    meaning: "Barre une expression d’un trait diagonal pour montrer des termes qui se simplifient dans un calcul.",
    usage: "Les enseignants et les notes de cours utilisent \\cancel pour montrer une simplification, par exemple un facteur qui se simplifie dans une fraction ou des termes opposés qui s’annulent dans une somme. Le même paquet propose \\bcancel (dans le sens de la barre oblique inverse), \\xcancel (une croix sur le terme) et \\cancelto{0}{x}, qui trace une flèche vers la valeur prise par le terme. La couleur du trait peut être modifiée indépendamment de celle du texte, ce qui est utile dans les diaporamas. \\cancel fonctionne aussi en mode texte, mais sert surtout en mode mathématique. Les articles formels montrent rarement les simplifications ainsi ; c’est un procédé pédagogique.",
  },
  "boxed-formula": {
    name: "Formule encadrée",
    meaning: "Trace un cadre rectangulaire autour d’une expression mathématique, souvent pour mettre en valeur un résultat final.",
    usage: "Les étudiants encadrent leurs résultats finaux et les auteurs mettent en valeur des identités clés avec \\boxed{E = mc^2}. La commande fonctionne en mode mathématique et conserve le style hors texte ou en ligne selon le cas, contrairement à \\fbox, qui passe en mode texte et demande $...$ à l’intérieur. Dans les environnements align, placez \\boxed autour d’un membre ou du contenu d’une ligne entière, mais pas à cheval sur le point d’alignement &. La marge intérieure et l’épaisseur du filet suivent \\fboxsep et \\fboxrule, que vous pouvez ajuster localement. Pour des cadres en couleur, l’étape suivante habituelle est \\fcolorbox autour d’une formule en ligne.",
  },
};

export default text;
