import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/units/<slug>. */
const text: SymbolPageTranslations = {
  "angstrom-a": {
    name: "Ångström (Å)",
    meaning: "Unité ångström, 10⁻¹⁰ mètre (0,1 nm), utilisée pour les rayons atomiques, les longueurs de liaison et les longueurs d’onde des rayons X.",
    usage: "\\AA est une commande du mode texte : en mode mathématique, il faut donc l’entourer de \\text, comme dans l’exemple ; l’utiliser seul en mode mathématique produit un avertissement et un résultat incorrect. Les cristallographes et les biologistes structuraux citent encore des distances comme 1.54\\,\\text{\\AA} pour la longueur d’onde K-alpha du cuivre, bien que le SI préfère les nanomètres ou les picomètres. Le sosie \\mathring{A} fonctionne en mode mathématique, mais c’est une variable accentuée, pas le symbole de l’unité. Placez une espace fine entre le nombre et l’unité. La minuscule \\aa donne la lettre scandinave, pas l’unité.",
  },
  "degrees-fahrenheit": {
    name: "Degré Fahrenheit",
    meaning: "Unité de température degré Fahrenheit ; sous pression normale, l’eau gèle à 32 °F et bout à 212 °F.",
    usage: "La conversion s’écrit T_F = \\frac{9}{5} T_C + 32, et un écart de température d’un degré Fahrenheit vaut 5/9 de kelvin. La construction est la même que pour le degré Celsius : un \\circ en exposant suivi d’un F droit, avec une espace fine entre le nombre et le signe de degré. Les données météorologiques américaines, le génie climatique et certaines normes d’ingénierie l’utilisent encore, mais les revues scientifiques exigent presque toujours le SI. N’écrivez pas le degré avec un o minuscule, ni avec \\degree, sauf si cette commande est définie dans votre configuration.",
  },
  "kelvin": {
    name: "Kelvin",
    meaning: "Kelvin, l’unité de base du SI pour la température thermodynamique, dont le zéro correspond au zéro absolu.",
    usage: "Depuis 1967, l’unité s’écrit K sans signe de degré : 300 K, et non 300 °K. Le zéro absolu vaut 0 K, le point triple de l’eau 273.16 K, et T(\\text{K}) = T(^{\\circ}\\text{C}) + 273.15. Les symboles d’unités doivent être en romain, ce que fournit \\text ; un K italique est une variable, comme une constante d’équilibre ou une raideur. Laissez une espace fine entre le nombre et l’unité, 4.2\\,\\text{K}. Dans le texte italique d’un théorème, \\mathrm{K} est plus sûr, car \\text reprendrait la police italique.",
  },
  "meter": {
    name: "Mètre",
    meaning: "Mètre, l’unité de base de longueur du SI, définie à partir de la vitesse de la lumière dans le vide.",
    usage: "Un m droit est l’unité, tandis qu’un m italique désigne généralement une masse : \\text{m} ou \\mathrm{m} est donc indispensable. Comparez m = 2\\,\\text{kg} et h = 2\\,\\text{m}. Les règles du SI imposent une espace entre la valeur et l’unité et interdisent de mettre le symbole au pluriel. Les unités dérivées se combinent avec des puissances, \\text{m}^2 et \\text{m}^3, et les préfixes s’accolent directement, \\text{km}, \\text{mm}. Une vitesse s’écrit \\text{m/s} ou \\text{m}\\,\\text{s}^{-1} ; les revues diffèrent, consultez donc leurs consignes. Ne confondez pas le symbole avec le préfixe milli, qui s’écrit aussi m.",
  },
  "kilogram": {
    name: "Kilogramme",
    meaning: "Kilogramme, l’unité de base de masse du SI, désormais fixée par la constante de Planck et non plus par un prototype matériel.",
    usage: "C’est la seule unité de base du SI qui comporte déjà un préfixe : les multiples et sous-multiples se forment donc à partir du gramme. Écrivez \\text{mg}, et non \\mu\\text{kg}. Les masses volumiques s’expriment en \\text{kg}/\\text{m}^3 ou \\text{kg}\\,\\text{m}^{-3} ; celle de l’eau vaut environ 1000\\,\\text{kg}\\,\\text{m}^{-3}. Le symbole s’écrit en minuscules : Kg ou KG sont incorrects. Les unités sont en romain, entourez-les donc de \\text ou \\mathrm, et ajoutez \\, entre le nombre et kg. Dans les unités dérivées comme le newton, kg vient en premier par convention, \\text{kg}\\,\\text{m}\\,\\text{s}^{-2}. Son symbole et son nom restent en minuscules, même en début de phrase.",
  },
  "second": {
    name: "Seconde",
    meaning: "Seconde, l’unité de base de temps du SI, définie par la fréquence de la transition hyperfine du césium 133.",
    usage: "Un s droit est l’unité ; un s italique désigne souvent un déplacement ou une longueur d’arc, si bien que la graphie porte un sens dans s = 5\\,\\text{m} face à t = 5\\,\\text{s}. Évitez les abréviations comme sec dans un texte technique. L’inverse de la seconde, \\text{s}^{-1}, mesure des taux et équivaut au hertz pour une fréquence. Les formes préfixées incluent \\text{ms}, \\mu\\text{s} et \\text{ns} ; pour le préfixe micro, le SI préfère un mu droit, ce que \\mu ne fournit pas avec les polices par défaut.",
  },
  "ampere": {
    name: "Ampère",
    meaning: "Ampère, l’unité de base du SI pour l’intensité du courant électrique, définie à partir de la charge élémentaire.",
    usage: "Les circuits regorgent de A : I = 2\\,\\text{A}, la densité de courant en \\text{A}/\\text{m}^2, et la charge, puisqu’un coulomb vaut un ampère-seconde. Un A italique désigne en général une aire ou un potentiel vecteur : le romain distingue donc l’unité. Les formes préfixées comme \\text{mA} et \\mu\\text{A} sont courantes en électronique. Écrivez le nombre, une espace fine, puis le symbole. Dans le texte, le nom de l’unité s’écrit en minuscule, ampère, bien que le symbole soit en majuscule, car il honore André-Marie Ampère. Un milliampère en est le millième, et s’écrit 5\\,\\text{mA}.",
  },
  "volt": {
    name: "Volt",
    meaning: "Volt, l’unité SI de différence de potentiel électrique : un joule d’énergie par coulomb de charge.",
    usage: "La loi d’Ohm V = IR utilise un V italique pour la grandeur tension, tandis que l’unité elle-même est en romain, comme dans 230\\,\\text{V} ; les confondre est une erreur de composition fréquente. En thermodynamique, le V italique désigne aussi le volume, autre raison de garder les unités en romain. Les écritures équivalentes sont \\text{J}/\\text{C} et \\text{W}/\\text{A}. Le champ électrique se mesure en \\text{V}/\\text{m}. Les formes préfixées \\text{mV} et \\text{kV} s’accolent sans espace, tandis que le nombre et l’unité sont séparés par \\,. Les piles, par exemple, font 1.5\\,\\text{V} ou 9\\,\\text{V}.",
  },
  "watt": {
    name: "Watt",
    meaning: "Watt, l’unité SI de puissance : un joule transféré par seconde.",
    usage: "La puissance apparaît dans P = VI et P = I^2 R, et le flux radiatif en \\text{W}/\\text{m}^2, comme la constante solaire d’environ 1361\\,\\text{W}\\,\\text{m}^{-2}. La lettre W italique désigne en général le travail : l’unité en romain et la grandeur en italique peuvent donc se côtoyer, W = 10\\,\\text{J} en 2\\,\\text{s} donne 5\\,\\text{W}. Les factures d’électricité utilisent le kilowattheure, écrit \\text{kW}\\,\\text{h} ou \\text{kWh}. N’écrivez pas W/s pour une énergie : le watt est déjà un débit. Les grandes centrales se mesurent en mégawatts, \\text{MW}, et les pertes en ligne se calculent par I^2 R.",
  },
  "joule": {
    name: "Joule",
    meaning: "Joule, l’unité SI d’énergie, de travail et de chaleur, égale à un newton-mètre, soit kg·m²/s².",
    usage: "L’énergie cinétique \\frac{1}{2}mv^2 s’obtient en joules lorsqu’on utilise les unités SI, et les grandeurs molaires s’expriment en \\text{kJ}/\\text{mol}. Le moment d’une force a aussi la dimension N m, mais on l’écrit par convention \\text{N}\\,\\text{m} plutôt que J, pour signaler qu’il ne s’agit pas d’une énergie. Le romain distingue l’unité du J italique, qui peut désigner une densité de courant, un moment d’inertie ou un jacobien. Écrivez le produit d’unités avec une espace fine ou \\cdot, par exemple \\text{kg}\\cdot\\text{m}^2\\,\\text{s}^{-2}. L’énergie alimentaire en kilocalories se convertit par 1\\,\\text{kcal} = 4184\\,\\text{J}.",
  },
  "newton": {
    name: "Newton",
    meaning: "Newton, l’unité SI de force : la force qui communique à une masse d’un kilogramme une accélération d’un mètre par seconde carrée.",
    usage: "Les poids et les forces s’expriment en newtons : une masse de 1 kg pèse donc environ 9.81\\,\\text{N} à la surface de la Terre. Contrainte et pression divisent par une aire, \\text{N}/\\text{m}^2, c’est-à-dire le pascal. Un N droit est l’unité ; un N italique désigne souvent une force normale, un effectif ou des nombres liés à Avogadro, et le \\mathbb{N} ajouré désigne les entiers naturels. Gardez une espace fine entre le nombre et l’unité. Les raideurs de ressort se mesurent en \\text{N}/\\text{m}. L’unité honore Isaac Newton : le symbole prend donc une majuscule, mais pas le nom de l’unité.",
  },
  "pascal": {
    name: "Pascal",
    meaning: "Pascal, l’unité SI de pression et de contrainte, un newton par mètre carré.",
    usage: "Le pascal étant minuscule, les valeurs pratiques utilisent des préfixes : la pression atmosphérique vaut environ 101.325\\,\\text{kPa}, les cartes météo utilisent l’hectopascal (hPa), et la résistance des matériaux s’exprime en MPa ou GPa. Le module de Young de l’acier avoisine 200\\,\\text{GPa}. Le symbole comporte un P majuscule et un a minuscule, tous deux en romain ; \\text{Pa} s’en charge. La pression elle-même est un p ou un P italique. Écrire l’unité \\text{N}/\\text{m}^2 est équivalent, mais moins courant dans les textes modernes. Pression relative et pression absolue diffèrent d’environ une atmosphère : précisez donc laquelle vous visez.",
  },
  "hertz": {
    name: "Hertz",
    meaning: "Hertz, l’unité SI de fréquence : un cycle par seconde, dimensionnellement égal à l’inverse de la seconde.",
    usage: "Le traitement du signal et l’acoustique citent des fréquences comme 440\\,\\text{Hz} pour le la du diapason et des fréquences d’échantillonnage comme 44.1\\,\\text{kHz} ; les processeurs tournent en GHz. La pulsation \\omega = 2\\pi f se donne par usage en \\text{rad}/\\text{s}, et non en hertz, pour éviter toute confusion sur le facteur 2\\pi. Gardez le H majuscule et le z minuscule. Les préfixes s’accolent directement, \\text{MHz}, et le nombre prend une espace fine avant l’unité. Pour l’activité radioactive, la même dimension s’appelle le becquerel. La période est l’inverse, T = 1/f.",
  },
  "per-slash-in-units": {
    name: "Barre oblique dans les unités (« par »)",
    meaning: "Barre oblique signifiant « par » dans les unités composées comme m/s, qui divise une unité par une autre.",
    usage: "En mode mathématique, / est un symbole ordinaire sans espacement supplémentaire, ce qui donne l’aspect serré \\text{m}/\\text{s} dont les unités ont besoin. Les règles du SI n’autorisent qu’une seule barre oblique par unité : l’accélération s’écrit donc \\text{m}/\\text{s}^2, jamais m/s/s ; pour les unités compliquées, les exposants négatifs comme \\text{J}\\,\\text{kg}^{-1}\\,\\text{K}^{-1} sont plus clairs. Utilisez des parenthèses quand le dénominateur a plusieurs facteurs : \\text{W}/(\\text{m}^2\\,\\text{K}). Pour les fractions générales dans les équations centrées, \\frac vaut en général mieux qu’une barre, mais dans le texte la barre évite des nombres empilés et à l’étroit.",
  },
  "squared": {
    name: "Carré (puissance deux)",
    meaning: "Exposant 2, qui élève une grandeur ou une unité à la puissance deux, comme dans x² ou les mètres carrés.",
    usage: "Taper ^2 met en exposant le seul élément qui suit ; pour des exposants plus longs, il faut des accolades, x^{12}, car x^12 donnerait x^1 suivi d’un 2. Les unités au carré, comme \\text{m}^2, décrivent des aires, et \\text{s}^2 apparaît dans l’accélération. Appliqué aux fonctions, \\sin^2 x signifie (\\sin x)^2, une convention qui ne s’étend pas à \\sin^{-1}, qui désigne la réciproque. Les doubles exposants comme x^2^3 provoquent une erreur ; écrivez x^{2^3} ou (x^2)^3 selon le sens voulu. Utilisez \\text{m}^2 plutôt que m carré dans un texte scientifique.",
  },
  "cubed": {
    name: "Cube (puissance trois)",
    meaning: "Exposant 3 pour le cube : puissances troisièmes de nombres ou de variables, et unités cubiques de volume.",
    usage: "Les volumes s’expriment en \\text{m}^3, \\text{cm}^3 ou en litres (1\\,\\text{L} = 10^{-3}\\,\\text{m}^3), et les masses volumiques utilisent des unités « par mètre cube », \\text{kg}/\\text{m}^3. En algèbre, les cubes apparaissent dans des identités comme a^3 - b^3 = (a - b)(a^2 + ab + b^2). L’exposant ne porte que sur l’élément précédent, si bien qu’une unité préfixée est élevée au cube en entier : \\text{cm}^3 signifie (cm) au cube, et non c fois m au cube. Mettez des accolades aux exposants de plusieurs éléments : x^{3n}. La racine cubique s’écrit \\sqrt[3]{x}. Écrivez \\text{m}^3, et non m cube, dans un texte scientifique.",
  },
};

export default text;
