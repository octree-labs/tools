import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/latin/<slug>. */
const text: SymbolPageTranslations = {
  "o-with-umlaut-diaeresis": {
    name: "O tréma",
    meaning: "Place deux points au-dessus du o, donnant ö sous forme d’accent mathématique ; dans le texte courant, la même lettre s’écrit \\\"o.",
    usage:
      "\\ddot est un accent du mode mathématique : \\ddot{o} produit donc un o italique surmonté de deux points, adapté aux formules mais pas aux mots. Pour des mots allemands, suédois, finnois, turcs ou hongrois comme Köln ou Gödel, utilisez l’accent textuel \\\"{o} ou tapez directement ö dans un source UTF-8. En mathématiques et en physique, \\ddot{x} est la notation de Newton pour la dérivée seconde par rapport au temps, et \\dddot{x} donne la dérivée troisième. La version à un seul point, \\dot{x}, marque une dérivée première. Écrire \\ddot dans le texte courant provoque une erreur « Missing $ inserted », une erreur de débutant fréquente lorsqu’on recopie des noms accentués.",
  },
  "o-with-grave-accent": {
    name: "O accent grave",
    meaning: "Place un accent grave sur le o, produisant ò sous forme d’accent mathématique ; pour les mots, on utilise la commande textuelle \\`o.",
    usage:
      "L’accent grave marque l’accent tonique ou la qualité de la voyelle en italien (però, città), en catalan et en vietnamien, et apparaît en français dans des mots comme où. Dans un document, écrivez ces mots avec \\`{o} ou en tapant la lettre accentuée, car \\grave ne fonctionne qu’en mode mathématique et compose la lettre en italique mathématique. L’usage mathématique de \\grave est rare ; un auteur s’en sert parfois pour décorer une variable lorsque \\hat, \\tilde et \\bar sont déjà pris. Ne confondez pas l’accent grave avec l’accent aigu \\acute, incliné dans l’autre sens.",
    example: "\\grave{o} \\quad \\text{vs. l'accent de texte dans } \\text{per\\`{o}}",
  },
  "o-with-acute-accent": {
    name: "O accent aigu",
    meaning: "Place un accent aigu sur le o, donnant ó sous forme d’accent mathématique ; dans les mots, on utilise la forme textuelle \\'o.",
    usage:
      "L’accent aigu apparaît en espagnol (canción, José), en portugais, en polonais (ó dans Kraków), en islandais et en hongrois. Pour tous ces mots, écrivez \\'{o} ou tapez directement ó, car \\acute{o} ne fonctionne qu’en mode mathématique et donne une lettre italique. En mathématiques, \\acute est une décoration peu utilisée, servant parfois à distinguer une variable transformée. Gardez à l’esprit qu’un prime x' est différent d’un accent aigu. Le ő long hongrois utilise le double accent aigu \\H{o}, et non deux accents aigus.",
  },
  "o-with-circumflex": {
    name: "O accent circonflexe",
    meaning: "Place un accent circonflexe sur le o, donnant ô ; en mathématiques, la même commande \\hat marque les estimateurs et les vecteurs unitaires.",
    usage:
      "Pour des mots français, portugais ou vietnamiens comme hôtel ou côte, utilisez l’accent textuel \\^{o} ou tapez directement ô ; \\hat ne fonctionne qu’en mode mathématique. En mathématiques, \\hat est omniprésent : \\hat{\\theta} pour un estimateur, \\hat{y} pour une prédiction, \\hat{\\mathbf{x}} pour un vecteur unitaire, \\hat{H} pour un opérateur quantique et \\hat{f} pour une transformée de Fourier. Pour un accent sur plusieurs caractères, utilisez \\widehat{AB}, qui s’étire. Pour placer un chapeau sur i ou j, utilisez \\hat{\\imath} afin de supprimer le point.",
  },
  "o-with-tilde": {
    name: "O tilde",
    meaning: "Place un tilde sur le o, donnant õ ; comme accent mathématique, \\tilde décore aussi des variables comme \\tilde{x}.",
    usage:
      "En portugais (põe, Camões) et en estonien (où õ est une lettre à part entière), la commande textuelle \\~{o} ou un õ tapé directement est le bon choix dans la prose. En mode mathématique, \\tilde marque une quantité transformée, approchée ou alternative, comme une variable normalisée \\tilde{x} ou la notation soft-O \\tilde{O}(n). Pour des arguments larges, \\widetilde{AB} s’étire sur toute l’expression. Ne confondez pas l’accent avec \\sim, le tilde isolé de relation signifiant « suit la loi » ou « équivalent à ». Les tildes sur les majuscules peuvent être placés haut : vérifiez l’interligne.",
  },
  "o-with-macron": {
    name: "O macron",
    meaning: "Place un macron sur le o, donnant ō ; en mathématiques, le même accent \\bar note les moyennes et les conjugués complexes.",
    usage:
      "Les macrons marquent les voyelles longues dans les dictionnaires latins, la romanisation du japonais (Tōkyō, Ōsaka), le maori et l’hawaïen ; dans le texte, utilisez \\={o} ou tapez ō. En mathématiques, \\bar{x} est une moyenne empirique, \\bar{z} un conjugué complexe, et \\bar{A} parfois une adhérence ou un complémentaire. La barre de \\bar a une largeur fixe et courte : pour des expressions plus longues, utilisez \\overline{A \\cup B}, qui couvre tout l’argument. Certains auteurs préfèrent \\overline même pour une seule lettre, afin que conjugués et adhérences aient le même aspect.",
  },
  "o-with-dot-above": {
    name: "O point suscrit",
    meaning: "Place un point unique au-dessus du o, donnant ȯ ; en mathématiques, l’accent \\dot est la notation de Newton pour une dérivée par rapport au temps.",
    usage:
      "En tant que lettre, ȯ est peu courant ; on le trouve dans certaines translittérations et en live. Pour le texte, utilisez l’accent \\.{o} ou un caractère tapé directement, car \\dot ne fonctionne qu’en mode mathématique. En physique et en ingénierie, \\dot{x} désigne dx/dt : la vitesse s’écrit \\dot{\\mathbf{r}} et un modèle d’état s’écrit \\dot{\\mathbf{x}} = A\\mathbf{x} + B\\mathbf{u}. Deux points, \\ddot{x}, donnent la dérivée seconde. Ne confondez pas cet accent avec \\cdot, un point de multiplication centré sur l’axe mathématique et non au-dessus d’une lettre.",
  },
  "o-with-breve": {
    name: "O brève",
    meaning: "Place une brève, petite coupelle, sur le o, donnant ŏ ; pour les mots, on utilise plutôt l’accent textuel \\u{o}.",
    usage:
      "La brève marque les voyelles brèves en prosodie latine et apparaît dans la romanisation McCune-Reischauer du coréen, comme dans Chŏng. Le ă roumain et le ğ turc portent le même signe sur d’autres lettres. Dans la prose, écrivez \\u{o} ou tapez ŏ ; \\breve ne fonctionne qu’en mode mathématique et compose la lettre en italique. L’usage mathématique est rare, généralement comme décoration supplémentaire d’une variable modifiée après les chapeaux et les tildes. Ne confondez pas la brève avec le háček \\check, pointu plutôt qu’arrondi.",
  },
  "o-with-caron-hacek": {
    name: "O caron (háček)",
    meaning: "Place un caron ou háček sur le o, donnant ǒ ; dans la prose, le même signe s’écrit \\v{o}.",
    usage:
      "En pinyin, ǒ marque le troisième ton, comme dans wǒ, et le háček est central dans l’orthographe tchèque, slovaque et d’autres langues slaves, sur des lettres comme č et š. Utilisez \\v{o} ou un ǒ tapé directement dans le texte ; \\check est l’accent du mode mathématique. Les mathématiciens utilisent \\check pour la cohomologie de Čech \\check{H}, les transformées de Fourier inverses \\check{f} et les objets duaux. Il est pointu, contrairement à la brève arrondie \\breve, et pointe vers le bas, contrairement à l’accent circonflexe \\hat. Pour des arguments larges, \\widecheck n’est pas standard : réservez donc \\check aux lettres isolées.",
  },
  "o-with-double-acute": {
    name: "O double accent aigu",
    meaning: "Écrit le ő long hongrois avec un double accent aigu, une commande du mode texte pour des noms comme Erdős.",
    usage:
      "\\H est un accent textuel, et non mathématique : utilisez-le dans la prose ou à l’intérieur de \\text{...} ; en mode mathématique nu, il provoque une erreur. Le hongrois distingue ö de ő et ü de ű : le nom du mathématicien s’écrit donc Erdős, et non Erdös, et bien l’orthographier dans une bibliographie est une politesse qui vaut la commande supplémentaire. Dans BibTeX, entourez l’accent d’accolades, {\\H{o}}, pour que le tri et les changements de casse ne l’abîment pas. N’essayez pas de l’imiter avec deux accents aigus.",
    example: "\\text{nombre d'Erd\\H{o}s } = 1",
  },
  "o-with-cedilla": {
    name: "O cédille",
    meaning: "Écrit un o muni d’une cédille, lettre rare que LaTeX produit normalement avec l’accent textuel \\c{o}.",
    usage:
      "La cédille est familière grâce au ç du français et du portugais, mais elle est inhabituelle sur le o ; on la trouve dans l’orthographe du marshallais et dans quelques systèmes de transcription. Taper le caractère précomposé dans \\text fonctionne avec de nombreux moteurs de rendu web, mais une compilation LaTeX classique peut ignorer la cédille combinante : \\c{o} dans le texte est donc la forme source fiable. Ne confondez pas la cédille avec l’ogonek, le crochet du ą et du ę polonais, tourné dans l’autre sens et écrit \\k. Aucun des deux ne fonctionne en mode mathématique sans \\text.",
  },
  "o-with-dot-below": {
    name: "O point souscrit",
    meaning: "Écrit un o muni d’un point souscrit, ọ, utilisé en yoruba et en vietnamien et écrit \\d{o} dans le texte LaTeX.",
    usage:
      "Le yoruba utilise ọ comme voyelle distincte (comme dans le mot yorùbá ọjọ́), et le vietnamien emploie le point souscrit comme marque du ton lourd. Dans un source LaTeX, l’accent textuel \\d{o} donne cette lettre, et taper ọ directement fonctionne aussi avec une police qui possède le glyphe. Comme les autres accents textuels, \\d est invalide en mode mathématique nu : entourez les mots de \\text. N’utilisez pas \\dot, qui place le point au-dessus et est un accent mathématique pour les dérivées. Combiner des tons avec un point souscrit peut exiger une police dotée de glyphes précomposés.",
  },
  "o-with-underline": {
    name: "O souligné",
    meaning: "Souligne le o ; en mathématiques, \\underline marque des vecteurs, des bornes inférieures ou des symboles mis en valeur.",
    usage:
      "\\underline fonctionne en mode texte comme en mode mathématique et trace un filet sous tout son argument : \\underline{o} donne ainsi un o souligné. Certains textes d’ingénierie et de mécanique utilisent \\underline{u} pour les vecteurs au lieu du gras, et les articles d’optimisation écrivent \\underline{x} pour une borne inférieure associée à \\overline{x} pour une borne supérieure. Dans les translittérations, le macron souscrit est un accent textuel distinct, \\b{o}, plus court et centré sous la lettre. Pour mettre en valeur un mot dans la prose, préférez \\emph au soulignement, car les soulignements ne se coupent pas en fin de ligne.",
  },
  "linked-o-o-two-o-s-joined-by-a-dash": {
    name: "O-o liés (deux o reliés par un tiret)",
    meaning: "Relie deux o par un signe moins resserré à l’aide d’espaces négatives, pour imiter un glyphe o-o lié.",
    usage:
      "Cette construction n’est pas une commande standard : chaque \\! insère une espace fine négative, si bien que o\\!\\!-\\!\\!o colle un signe moins mathématique contre les deux lettres, et le résultat ressemble à deux anneaux liés. Comme elle est assemblée en mode mathématique, les o sont en italique et l’espacement dépend de la police. S’il vous faut la ligature médiévale oo ou une lettre historique similaire, une police contenant ce caractère est plus propre que cette astuce. Pour dessiner une liaison en haltère ou un lien, un véritable outil de diagrammes offre un meilleur contrôle. Réservez-la à un effet visuel rapide.",
  },
  "oe-ligature-lowercase": {
    name: "Ligature oe (minuscule)",
    meaning: "Écrit la ligature minuscule œ, utilisée dans des mots français comme cœur et œuvre ; en LaTeX, c’est \\oe.",
    usage:
      "L’orthographe française exige la ligature dans des mots comme sœur, cœur et œil : écrire oe est une faute d’orthographe, pas un simple choix typographique. Dans le source LaTeX, utilisez \\oe ou tapez directement œ ; \\oe est une commande textuelle, donc utilisez \\text en mode mathématique. L’anglais l’emploie dans des graphies anciennes ou britanniques comme fœtus. Contrairement aux ligatures ff ou fi, que TeX forme automatiquement, œ est une lettre à part entière qui n’est jamais créée en tapant oe. Pensez à l’espace qui suit \\oe, comme dans c\\oe ur, ou utilisez des accolades, comme c{\\oe}ur.",
  },
  "oe-ligature-uppercase": {
    name: "Ligature OE (majuscule)",
    meaning: "Écrit la ligature majuscule Œ utilisée en français, comme dans Œuvres complètes ; en LaTeX, c’est \\OE.",
    usage:
      "Le Œ majuscule apparaît au début de mots français et dans les titres en capitales : on écrit donc ŒUVRES et non OEUVRES. Tapez le caractère directement ou utilisez \\OE en mode texte ; en mode mathématique, il doit figurer dans \\text. Dans les petites capitales ou les titres en majuscules, vérifiez que \\MakeUppercase transforme \\oe en \\OE, ce que LaTeX fait correctement. Ne la confondez pas avec Æ, l’æsc, qui utilise un a au lieu d’un o. Des graphies anglaises anciennes comme Œdipus l’emploient aussi.",
  },
  "ae-ligature-lowercase-ash": {
    name: "Ligature ae (minuscule, æsc)",
    meaning: "Écrit le æ minuscule, appelé æsc (ash en anglais), lettre du danois, du norvégien, de l’islandais et du vieil anglais ; en LaTeX, c’est \\ae.",
    usage:
      "En danois et en norvégien, æ est une lettre à part entière de l’alphabet, classée après z : il ne faut donc jamais la remplacer par ae dans les noms. L’anglais l’utilise dans des graphies stylisées comme encyclopædia et Cæsar, et le symbole API æ note la voyelle de cat. En LaTeX, utilisez \\ae ou tapez æ directement ; c’est une commande textuelle, donc entourez-la de \\text en mode mathématique. Séparez la lettre suivante par des accolades ou une espace, comme dans \\ae{}ble. Elle est distincte de œ, qui associe o et e.",
  },
  "ae-ligature-uppercase": {
    name: "Ligature AE (majuscule)",
    meaning: "Écrit le Æ majuscule, l’æsc capitale utilisée en danois, en norvégien, en islandais et en vieil anglais.",
    usage:
      "Le Æ majuscule commence des mots danois et norvégiens et apparaît dans des noms vieil-anglais comme Ælfred. LaTeX fournit \\AE en mode texte, ou vous pouvez taper Æ directement. Dans les titres en capitales, la mise en majuscules de LaTeX convertit automatiquement \\ae en \\AE. Les bibliographies comportant des noms scandinaves doivent conserver la lettre telle quelle, car les règles de tri la placent vers la fin de l’alphabet. Ne la confondez pas avec Œ, qui joint O et E et relève de l’orthographe française. Taper le caractère directement dans un fichier UTF-8 est aujourd’hui l’option la plus simple.",
  },
  "a-with-ring-above": {
    name: "A rond en chef",
    meaning: "Écrit å, le a surmonté d’un rond, lettre du suédois, du danois, du norvégien et du finnois ; dans le texte LaTeX, c’est \\aa.",
    usage:
      "Dans les langues scandinaves, å est une voyelle distincte classée à la fin de l’alphabet, comme dans på ou Århus. LaTeX l’écrit avec \\aa ou avec l’accent rond générique \\r{a}, ou vous pouvez taper å directement. Ce sont des commandes textuelles : entourez-les de \\text en mode mathématique. N’utilisez pas l’accent mathématique \\mathring{a}, qui place un rond sur une lettre mathématique italique et sert par exemple pour l’intérieur d’un ensemble. Les logiciels de bibliographie doivent traiter {\\aa} comme une seule lettre pour le tri.",
  },
  "a-with-ring-above-angstrom": {
    name: "A rond en chef majuscule (ångström)",
    meaning: "Écrit le Å majuscule, utilisé dans des mots scandinaves et comme symbole de l’unité ångström (10^{-10} m).",
    usage:
      "Physiciens et chimistes expriment longueurs de liaison et longueurs d’onde en ångströms, comme dans 1.54 Å, et la commande \\AA de LaTeX donne le bon glyphe en mode texte. En mode mathématique, écrivez \\text{\\AA} ou utilisez une macro d’unités dédiée, car \\AA seul est une commande textuelle. Comme lettre, il commence des noms de lieux suédois et danois comme Åland. Le signe ångström Unicode distinct se normalise vers cette même lettre : utiliser Å est donc correct. Mettez une espace fine entre le nombre et l’unité, comme dans 1.54\\,\\text{Å}.",
  },
  "o-with-stroke-lowercase": {
    name: "O barré (minuscule)",
    meaning: "Écrit ø, le o barré du danois, du norvégien et du féroïen ; en LaTeX, c’est la commande textuelle \\o.",
    usage:
      "ø est une voyelle à part entière en danois et en norvégien, comme dans København ou Søren Kierkegaard, et ne doit pas être remplacée par o ou oe dans les noms. Utilisez \\o ou tapez ø directement ; c’est une commande textuelle, donc utilisez \\text en mode mathématique. Elle ressemble aux symboles de l’ensemble vide \\emptyset et \\varnothing, ainsi qu’au signe diamètre, mais ce sont des caractères différents aux sens différents : n’empruntez donc pas ø pour l’ensemble vide. La transcription phonétique utilise aussi ø pour une voyelle antérieure arrondie.",
  },
  "o-with-stroke-uppercase": {
    name: "O barré (majuscule)",
    meaning: "Écrit le Ø majuscule, comme dans Øresund, le O barré capital qui s’écrit \\O dans le texte LaTeX.",
    usage:
      "Le Ø majuscule commence des mots danois et norvégiens comme Øresund et Østergaard. En LaTeX, utilisez \\O en mode texte ou tapez Ø directement ; \\O n’est pas défini en mode mathématique sans \\text. Comme il ressemble à l’ensemble vide \\emptyset et au symbole diamètre, il est tentant de le réutiliser, mais ce sont des caractères distincts, que les lecteurs d’écran et les moteurs de recherche traitent différemment. Dans les alphabets norvégien et danois, Ø se classe après Æ et avant Å.",
  },
  "l-with-stroke-lowercase": {
    name: "L barré (minuscule)",
    meaning: "Écrit ł, le l barré polonais qui se prononce comme le w anglais ; dans le texte LaTeX, c’est \\l.",
    usage:
      "Le polonais utilise ł dans de nombreux mots et noms courants, comme złoty, Wrocław et Łukasiewicz, le logicien à l’origine de la notation polonaise. Dans un source LaTeX, écrivez \\l ou tapez ł directement ; c’est une commande textuelle, donc utilisez \\text en mode mathématique. Lorsqu’une lettre la suit immédiatement, séparez-la par des accolades, comme dans z\\l{}oty. Certaines polices n’ont pas de ł, ce qui peut produire un glyphe manquant plutôt qu’un avertissement : vérifiez le PDF. Elle est distincte du lambda minuscule barré ƛ.",
  },
  "l-with-stroke-uppercase": {
    name: "L barré (majuscule)",
    meaning: "Écrit le Ł majuscule, comme dans Łódź, le L barré polonais capital qui s’écrit \\L en LaTeX.",
    usage:
      "Le Ł majuscule commence des noms comme Łódź et Łukasiewicz : les bibliographies citant des auteurs polonais en ont besoin pour orthographier correctement les noms. Utilisez \\L en mode texte ou tapez Ł directement ; entourez-le de \\text en mode mathématique. Dans BibTeX, gardez-le entre accolades, {\\L}ukasiewicz, pour que les changements de casse et le tri fonctionnent. Ne confondez pas \\L avec \\pounds, le signe de la livre sterling, symbole différent même si tous deux ont une barre transversale sur une forme proche du L. Taper Ł directement dans un source UTF-8 est l’option la plus simple dans les configurations modernes.",
  },
  "dotless-i-math": {
    name: "I sans point (mode mathématique)",
    meaning: "Donne un i italique mathématique sans point, afin que des accents comme \\hat ou \\vec s’y posent sans heurter de point.",
    usage:
      "La raison principale d’utiliser \\imath est le placement des accents : \\hat{\\imath} donne le vecteur unitaire i chapeau de la physique sans point sous le chapeau, tandis que \\hat{i} conserve le point. On le trouve aussi sous la forme \\vec{\\imath} en analyse vectorielle, et parfois comme unité imaginaire composée. Dans le texte, le i sans point s’écrit \\i, que l’on utilise pour des mots turcs comme ılık ou pour les i accentués dans les anciens codages. Ne confondez pas \\imath avec \\iota, la lettre grecque, de forme différente.",
  },
  "dotless-j-math": {
    name: "J sans point (mode mathématique)",
    meaning: "Donne un j italique mathématique sans point, utilisé sous des accents comme pour le vecteur unitaire j chapeau.",
    usage:
      "La physique et l’ingénierie écrivent les vecteurs unitaires cartésiens \\hat{\\imath}, \\hat{\\jmath}, \\hat{k}, et \\jmath supprime le point pour que le chapeau se pose proprement. Les électriciens, qui utilisent j pour l’unité imaginaire, y placent parfois aussi des accents. En mode texte, la commande correspondante est \\j. Il n’existe pas de raison courante d’utiliser \\jmath sans accent : réservez-le donc aux formes accentuées. Notez que \\vec{\\jmath} et \\hat{\\jmath} positionnent l’accent légèrement différemment : vérifiez l’espacement.",
  },
  "inverted-question-mark": {
    name: "Point d’interrogation renversé",
    meaning: "Écrit ¿, le point d’interrogation renversé qui ouvre une question en espagnol ; LaTeX accepte aussi ?` pour l’obtenir.",
    usage:
      "L’espagnol place ¿ au début d’une question et ? à la fin, comme dans ¿Dónde está? En LaTeX, la ligature ?` (point d’interrogation suivi d’un accent grave isolé) produit le signe renversé dans les polices standard, et \\textquestiondown est la commande nommée. Taper ¿ directement fonctionne aussi avec une entrée UTF-8. C’est un caractère textuel : placez-le dans \\text en mode mathématique. Le galicien et l’asturien l’utilisent aussi, alors que le catalan ne l’utilise généralement pas. Comme ?` est une ligature, un accent grave isolé égaré après un point d’interrogation peut créer accidentellement le glyphe renversé : vérifiez les phrases interrogatives suivies d’un guillemet.",
  },
  "inverted-exclamation-mark": {
    name: "Point d’exclamation renversé",
    meaning: "Écrit ¡, le point d’exclamation renversé qui ouvre une exclamation en espagnol ; LaTeX accepte aussi !` pour l’obtenir.",
    usage:
      "L’espagnol encadre les exclamations par ¡ et !, comme dans ¡Hola!, et ce couple s’applique même en milieu de phrase. LaTeX le produit à partir de la ligature !` (point d’exclamation suivi d’un accent grave isolé) ou de la commande nommée \\textexclamdown, et taper ¡ dans un fichier UTF-8 fonctionne aussi. En mode mathématique, il doit figurer dans \\text. Ne le confondez pas avec le i minuscule ni avec la barre verticale |, qui peuvent lui ressembler dans certaines polices sans empattement. Comme pour la ligature du point d’interrogation, une séquence !` littérale dans votre source se transforme en ¡, ce qui surprend parfois les auteurs qui citent du code.",
  },
};

export default text;
