import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/chemistry/<slug>. */
const text: SymbolPageTranslations = {
  "equilibrium-arrow": {
    name: "Flèche d’équilibre",
    meaning: "Paire de demi-flèches opposées (harpons) indiquant une réaction chimique en équilibre dynamique.",
    usage: "L’IUPAC recommande les harpons pour l’équilibre, comme dans N_2 + 3H_2 \\rightleftharpoons 2NH_3, tandis que deux flèches complètes indiquent un processus réversible en général. Le harpon du haut pointe vers la droite, ce qui correspond à la réaction directe. Son symétrique est \\leftrightharpoons, avec le harpon vers la gauche en haut. C’est une relation : TeX l’espace donc comme =. Pour écrire des conditions au-dessus de la flèche, par exemple un catalyseur, vous pouvez utiliser \\overset{\\text{Fe}}{\\rightleftharpoons}, même si les outils dédiés à la chimie donnent des flèches plus longues. En physique, le même symbole désigne parfois une correspondance dans les deux sens.",
  },
  "reversible-reaction": {
    name: "Flèche de réaction réversible",
    meaning: "Deux flèches complètes superposées, vers la gauche en haut et vers la droite en bas, employées pour les réactions réversibles ou les applications dans les deux sens.",
    usage: "Certains textes de chimie utilisent des doubles flèches complètes pour une réaction qui peut se produire dans les deux sens, en réservant les harpons (\\rightleftharpoons) à l’équilibre proprement dit ; la plupart des textes modernes emploient les harpons dans les deux cas. Attention à l’ordre de superposition : \\leftrightarrows place la flèche vers la gauche en haut, tandis que \\rightleftarrows place la flèche vers la droite en haut, ce qui est généralement ce que l’on veut quand la réaction directe va de gauche à droite. Ne les confondez pas avec \\leftrightarrow, une seule flèche à deux pointes. En théorie des catégories, cette paire désigne souvent une adjonction ou un couple d’applications parallèles.",
  },
  "isotope": {
    name: "Notation isotopique",
    meaning: "Notation d’un nucléide avec le nombre de masse en exposant à gauche et le numéro atomique en indice à gauche, ici le carbone 14.",
    usage: "Le groupe vide {} donne aux exposant et indice un élément auquel s’attacher, ce qui les place à gauche du symbole de l’élément. Un défaut : TeX aligne l’indice à gauche sous l’exposant, si bien que le 6, à un seul chiffre, se retrouve loin du C. Complétez-le avec \\phantom{1}6 pour aligner les nombres à droite contre le symbole. Les équations nucléaires combinent ces notations, comme dans la désintégration bêta du carbone 14 en azote 14. Utilisez \\text ou \\mathrm pour l’élément afin qu’il reste droit ; le numéro atomique est souvent omis lorsque l’élément l’implique déjà, ce qui donne {}^{14}\\text{C}.",
  },
  "superscript-charge": {
    name: "Charge en exposant",
    meaning: "Notation d’un ion avec la charge en exposant, ici le cation sodium portant une seule charge positive.",
    usage: "Pour les ions à plusieurs charges, écrivez le nombre avant le signe, \\text{Ca}^{2+} et \\text{SO}_4^{2-}, selon l’ordre de l’IUPAC. Les accolades comptent : ^{2+} garde les deux caractères en exposant. Un moins final en exposant est traité comme unaire, si bien que ^{-} s’affiche proprement. Utilisez \\mathrm{Na} au lieu de \\text{Na} si la formule peut apparaître dans un théorème en italique ou une légende, car \\text reprend la police environnante alors que \\mathrm est toujours droit. Quand indice et charge coïncident, la charge se place au-dessus du nombre d’atomes, comme dans l’ion sulfate.",
  },
  "subscript-count": {
    name: "Nombre d’atomes en indice",
    meaning: "Formule moléculaire de l’eau, où l’indice 2 compte les atomes d’hydrogène de chaque molécule.",
    usage: "Les symboles des éléments doivent être droits, c’est pourquoi chaque groupe de lettres est entouré de \\text ; un H_2O en italique ressemblerait à des variables. Un équivalent plus court est \\mathrm{H_2O}, qui garde tout droit, indice compris, et résiste à l’italique environnant. Les indices ne comptent que des atomes et ne doivent jamais être confondus avec les charges en exposant. Les formules avec parenthèses suivent le même principe : \\mathrm{Ca(OH)_2}. Pour beaucoup de chimie, un paquet dédié fait gagner du temps, mais pour quelques formules cette méthode manuelle convient parfaitement.",
  },
  "degrees-celsius": {
    name: "Degré Celsius",
    meaning: "Unité degré Celsius, formée d’un petit cercle surélevé et d’un C droit ; l’eau gèle à 0 °C.",
    usage: "Le signe degré s’obtient avec \\circ en exposant ; un o ou un 0 est incorrect. Le style SI place une espace entre le nombre et l’unité : écrivez donc 25\\,^{\\circ}\\text{C} avec une espace fine, et ne mettez jamais d’espace entre le signe degré et le C. Les écarts de température en degrés Celsius sont égaux aux écarts en kelvins, ce qui compte dans les calculs de capacité thermique. \\text passe en italique dans les théorèmes ; \\mathrm{C} évite ce problème. Les paquets d’unités fournissent des commandes sémantiques, mais cette construction est la méthode manuelle courante et fonctionne partout, y compris dans KaTeX.",
  },
  "bond": {
    name: "Liaison simple",
    meaning: "Liaison covalente simple entre deux atomes de carbone, représentée par un trait court entre les symboles des éléments.",
    usage: "En mode mathématique, le trait d’union devient un signe moins avec l’espacement d’un opérateur binaire : la liaison apparaît donc entourée d’espaces, ce qui ressemble plutôt à une soustraction. L’écrire \\text{C}{-}\\text{C} supprime cet espacement et donne une liaison serrée. Les longueurs et énergies de liaison sont souvent indiquées à côté, par exemple une liaison C-C d’environ 154 pm. Pour les formules semi-développées comme \\mathrm{CH_3{-}CH_3}, la même astuce des accolades s’applique. Au-delà de quelques liaisons, des outils de dessin ou un paquet de structures produisent de vraies formules topologiques.",
  },
  "double-bond": {
    name: "Liaison double",
    meaning: "Double liaison carbone-carbone, composée d’une liaison sigma et d’une liaison pi, caractéristique des alcènes comme l’éthène.",
    usage: "Comme = est une relation en mode mathématique, TeX insère de larges espaces des deux côtés, ce qui ressemble à une équation plutôt qu’à une liaison. L’entourer d’accolades, \\text{C}{=}\\text{C}, en fait un symbole ordinaire et rapproche les atomes. Les alcènes s’écrivent comme \\mathrm{H_2C{=}CH_2}. La double liaison est plus courte et plus forte qu’une liaison simple et bloque la rotation, d’où l’isomérie cis-trans. Veillez à ce que le lecteur ne puisse pas confondre la liaison avec un signe égal dans une ligne de réaction, en la gardant serrée contre les atomes.",
  },
  "triple-bond": {
    name: "Liaison triple",
    meaning: "Triple liaison carbone-carbone, typique des alcynes comme l’éthyne (acétylène), représentée par trois traits horizontaux.",
    usage: "\\equiv est une relation, le même symbole que pour la congruence (a \\equiv b \\pmod n) et l’identité, et il est donc largement espacé par défaut ; {\\equiv} produit une liaison plus serrée entre les atomes. Une triple liaison comporte une composante sigma et deux composantes pi, et c’est la plus courte des liaisons carbone-carbone. Le diazote s’écrit \\mathrm{N{\\equiv}N}. Certaines polices dessinent \\equiv un peu large, ce qui convient bien à la chimie. Évitez \\cong ou \\approx, qui se ressemblent un peu mais signifient isomorphisme et approximation.",
  },
  "partial-charge": {
    name: "Charge partielle",
    meaning: "Charge partielle positive portée par un atome dans une liaison polarisée, écrite avec un delta minuscule suivi d’un plus.",
    usage: "Dans l’eau, les hydrogènes portent \\delta^{+} et l’oxygène \\delta^{-}, séparation de charges à l’origine des liaisons hydrogène. Ici, delta signifie « une fraction de » et non une variation : ne le confondez donc pas avec \\Delta. Pour placer l’étiquette au-dessus d’un atome, utilisez \\overset{\\delta^{+}}{\\text{H}}, qui garde la formule lisible. Certains textes écrivent \\delta+ en ligne sans exposant ; la forme en exposant est plus courante dans les documents composés. Associez-la à \\delta^{-} sur l’atome partenaire électronégatif ; \\delta\\delta^{+} désigne une charge partielle encore plus faible.",
  },
  "electron": {
    name: "Électron",
    meaning: "Symbole de l’électron, un e minuscule avec une charge négative en exposant, employé dans les demi-équations d’oxydoréduction.",
    usage: "Les demi-équations équilibrent les charges avec des électrons, comme dans \\text{Cu}^{2+} + 2e^{-} \\to \\text{Cu}. Le positon s’écrit e^{+}. Les guides de style de physique composent souvent les symboles de particules en romain, \\mathrm{e}^{-}, ce qui évite aussi la confusion avec le nombre d’Euler lorsque des exponentielles figurent à proximité. Comme e^- fonctionne avec un exposant d’un seul élément, les accolades sont facultatives, mais elles restent cohérentes avec les charges de plusieurs caractères. En notation nucléaire, un électron peut aussi s’écrire {}^{\\phantom{-}0}_{-1}e, ou \\beta^{-} lorsqu’il est émis lors d’une désintégration. L’antineutrino de la désintégration bêta s’écrit \\bar{\\nu}_e à côté.",
  },
  "aqueous": {
    name: "Symbole d’état aqueux",
    meaning: "Symbole d’état aqueux : l’espèce est dissoute dans l’eau, comme les ions en solution.",
    usage: "Les symboles d’état suivent la formule, soit en ligne comme \\text{NaCl(aq)}, soit en indice, \\text{NaCl}_{\\text{(aq)}} ; les deux sont admis, choisissez-en un. Taper (aq) en mode mathématique sans \\text donnerait un a et un q en italique avec l’espacement mathématique : l’enveloppe est donc importante. Les équations ioniques nettes s’appuient sur cette étiquette pour indiquer quelles espèces se dissocient. Si vous écrivez de nombreuses équations, définissez une macro comme \\newcommand{\\aq}{\\text{(aq)}}. \\mathrm{(aq)} est une autre solution qui reste droite dans un contexte en italique. Il marque aussi les protons hydratés, écrits \\text{H}^{+}\\text{(aq)}.",
  },
  "solid": {
    name: "Symbole d’état solide",
    meaning: "Symbole d’état indiquant qu’une espèce est solide, souvent un précipité ou une électrode métallique.",
    usage: "Les réactions de précipitation aboutissent à un solide, comme \\text{AgCl(s)}, et la thermochimie en dépend : l’enthalpie de formation du carbone se rapporte au graphite à l’état solide. Certains textes anciens utilisent plutôt une flèche vers le bas pour un précipité ; le symbole entre parenthèses est la forme préférée par l’IUPAC. Écrivez-le immédiatement après la formule, sans espace. L’entourer de \\text garde le s droit ; en mode mathématique, un s non entouré serait en italique et pourrait être pris pour l’unité seconde ou pour une variable.",
  },
  "liquid": {
    name: "Symbole d’état liquide",
    meaning: "Symbole d’état d’un liquide pur, comme l’eau ou le mercure, écrit après la formule chimique.",
    usage: "Les équations de combustion distinguent \\text{H}_2\\text{O(l)} de \\text{H}_2\\text{O(g)}, car la variation d’enthalpie diffère de la chaleur de vaporisation. Notez la différence entre (l), un liquide pur, et (aq), une solution aqueuse. Le texte droit est particulièrement important ici : dans certaines polices, un l italique ressemble au chiffre 1 ou à une barre verticale, ce qui peut dérouter le lecteur. Utiliser \\text ou \\mathrm garantit une lettre droite et nette. Gardez le symbole directement accolé à la formule, sans espacement supplémentaire.",
  },
  "gas-state-symbol-g": {
    name: "Symbole d’état gazeux (g)",
    meaning: "Symbole d’état de la phase gazeuse, accolé aux formules des gaz et des vapeurs dans les équations.",
    usage: "Les espèces en phase gazeuse comptent pour les constantes d’équilibre exprimées en pressions, K_p, et pour les calculs sur les gaz parfaits ; les marquer avec (g) rend ces dépendances explicites. Les textes anciens utilisent parfois une flèche vers le haut pour indiquer un dégagement gazeux, mais le symbole d’état est aujourd’hui préféré. Une bonne habitude consiste à étiqueter chaque espèce d’une équation thermochimique, afin que les valeurs d’enthalpie soient sans ambiguïté. Si votre document contient de nombreuses formules, une macro comme \\newcommand{\\gas}{\\text{(g)}} évite les fautes de frappe. \\mathrm{(g)} donne le même résultat droit dans un texte en italique.",
  },
};

export default text;
