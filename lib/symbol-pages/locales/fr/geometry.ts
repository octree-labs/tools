import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/geometry/<slug>. */
const text: SymbolPageTranslations = {
  "angle": {
    name: "Angle",
    meaning: "Signe d’angle placé devant les noms des sommets, comme dans l’angle ABC de sommet B.",
    usage:
      "Les démonstrations de géométrie écrivent \\angle ABC pour l’angle de sommet B, et \\angle ABC \\cong \\angle DEF pour des angles isométriques. C’est un symbole mathématique ordinaire : aucune espace n’est ajoutée après lui, ce qui convient à des noms comme \\angle A. Les manuels américains notent souvent la mesure m\\angle A = 60^{\\circ}, pour distinguer l’angle de sa mesure. Parmi les symboles apparentés figurent \\measuredangle, qui ajoute un arc pour signaler un angle mesuré ou orienté, et \\sphericalangle pour les angles sur une sphère. Évitez de l’utiliser comme abréviation du mot « angle » dans le texte.",
  },
  "measured-angle": {
    name: "Angle mesuré",
    meaning: "Signe d’angle muni d’un arc, souvent employé pour un angle mesuré ou orienté.",
    usage:
      "Certains textes de géométrie réservent \\angle à l’angle en tant que figure et \\measuredangle à sa mesure numérique, en écrivant \\measuredangle ABC = 30^{\\circ}. En géométrie olympique, \\measuredangle désigne souvent des angles orientés modulo 180^{\\circ}, ce qui rend les raisonnements sur les quadrilatères inscriptibles indépendants de la configuration de la figure : A, B, C et D sont cocycliques exactement lorsque \\measuredangle ABC = \\measuredangle ADC. Comme les conventions varient, précisez votre choix dans une remarque sur les notations. Il se comporte comme un symbole ordinaire, donc l’espacement avec les lettres voisines est serré.",
  },
  "spherical-angle": {
    name: "Angle sphérique",
    meaning: "Signe d’angle sphérique, employé pour les angles entre arcs de grands cercles sur une sphère.",
    usage:
      "La géométrie sphérique, la navigation et l’astronomie l’utilisent pour les angles formés par des arcs sur une sphère, où la somme des angles d’un triangle dépasse 180^{\\circ}. Le théorème de Girard donne l’aire d’un triangle sphérique sous la forme R^2(A + B + C - \\pi), l’excès sphérique. Sa forme diffère à la fois de \\measuredangle et du simple \\angle : ne les échangez donc pas librement. Certains auteurs le réutilisent pour des angles solides ou orientés, si bien qu’une définition d’une ligne aide le lecteur. C’est un symbole ordinaire : ajoutez \\, s’il est trop collé au nom qui le suit.",
  },
  "not-congruent": {
    name: "Signe de non-congruence",
    meaning: "Signe de congruence barré : deux figures ou objets ne sont pas isométriques, ou pas isomorphes.",
    usage:
      "En géométrie, \\triangle ABC \\ncong \\triangle DEF indique que les triangles ne sont pas isométriques ; en algèbre, \\cong signifie souvent « isomorphe », donc G \\ncong H indique que deux groupes ne sont pas isomorphes. C’est une relation, l’espacement est donc automatique. Préférez ce glyphe précomposé à \\not\\cong, qui superpose une barre générique parfois décentrée sur le symbole. Parmi les relations niées apparentées figurent \\neq et \\nsim. Si vous employez \\cong pour l’isomorphisme, précisez la catégorie ou la structure lorsqu’elle n’est pas évidente, car deux espaces peuvent être homéomorphes sans être isomorphes en tant que groupes.",
  },
  "similar-or-equal": {
    name: "Signe semblable ou égal",
    meaning: "Tilde au-dessus d’un seul trait, lu « homotopiquement équivalent », « asymptotiquement égal » ou « isomorphe ».",
    usage:
      "Son sens dépend du domaine : les topologues écrivent X \\simeq Y pour l’équivalence d’homotopie, les spécialistes des catégories pour l’équivalence de catégories et les physiciens pour l’égalité approchée. Comparez-le à \\cong (tilde au-dessus de deux traits), généralement réservé à l’isomorphisme ou à l’isométrie, à \\approx (deux tildes) pour l’approximation numérique et à \\sim pour l’équivalence asymptotique ou les relations d’équivalence. Comme ces conventions se recoupent, indiquez celle que vous suivez. En tant que symbole de relation, il reçoit automatiquement un large espacement de chaque côté : aucune espace manuelle n’est nécessaire.",
  },
  "arc": {
    name: "Arc",
    meaning: "Arc en forme de moue, parfois placé au-dessus de lettres pour désigner un arc de cercle.",
    usage:
      "Seul, \\frown est un arc de la classe des relations, et les théoriciens des ensembles l’emploient pour la concaténation de suites, s^\\frown t. Pour l’arc géométrique entre les points A et B, le symbole doit se placer au-dessus des lettres ; \\overset{\\frown}{AB} le fait, mais l’arc ne s’étire pas, et les accents d’arc large fournis par des polices supplémentaires rendent mieux sur les noms longs. Son image miroir est \\smile, et les deux se combinent dans certaines notations de relations de compatibilité. Comme le symbole seul a l’espacement d’une relation, vérifiez le résultat lorsqu’il apparaît entre des lettres.",
  },
  "prime-feet-minutes": {
    name: "Prime (pieds/minutes)",
    meaning: "Un prime simple, qui note les pieds, les minutes d’arc ou les minutes de temps après un nombre.",
    usage:
      "En mode mathématique, l’apostrophe devient un prime en exposant : 5'\\,9'' se lit « cinq pieds neuf pouces », et 12^{\\circ}\\,30' donne douze degrés trente minutes d’arc. Hors du mode mathématique, l’apostrophe est un simple guillemet fermant qui ne ressemble pas à un prime : écrivez donc les mesures en mode mathématique. Le même caractère produit les primes des dérivées, f'(x), et marque les points ou variables transformés, A' et x'. Pour des coordonnées géographiques comme 40^{\\circ}\\,26'\\,46'', insérez des espaces fines entre les composantes pour qu’elles ne se collent pas.",
  },
  "double-prime-inches-seconds": {
    name: "Double prime (pouces/secondes)",
    meaning: "Deux primes, qui notent les pouces, les secondes d’arc ou les secondes après un nombre.",
    usage:
      "En mode mathématique, '' devient un unique exposant de deux primes : 6'' désigne six pouces ou six secondes d’arc, et 2^{\\circ}\\,15'\\,30'' écrit un angle en degrés, minutes et secondes. Taper à la place le caractère guillemet droit double produit un autre glyphe et doit être évité. En mode texte, deux apostrophes forment un guillemet fermant et non un prime : les mesures relèvent donc du mode mathématique. La même construction écrit les dérivées secondes, f''(x), et les points transformés deux fois comme A''. Les astronomes l’emploient pour les secondes d’arc, comme dans une résolution de 0.1''.",
  },
  "line-segment": {
    name: "Segment",
    meaning: "Barre au-dessus de AB, la notation standard du segment entre les points A et B.",
    usage:
      "Les textes de géométrie écrivent \\overline{AB} pour le segment et simplement AB pour sa longueur, de sorte que \\overline{AB} \\cong \\overline{CD} va de pair avec AB = CD. La barre s’étend sur tout l’argument, contrairement à \\bar{x}, accent de largeur fixe destiné à une seule lettre. \\overline a d’autres sens : le conjugué complexe \\overline{z}, l’adhérence d’un ensemble \\overline{A} et la négation en algèbre de Boole, \\overline{A \\cdot B}. Les demi-droites et les droites utilisent \\overrightarrow{AB} et \\overleftrightarrow{AB}, qui indiquent la direction ou l’étendue infinie.",
  },
};

export default text;
