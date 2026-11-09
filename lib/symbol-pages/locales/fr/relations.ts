import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/relations/<slug>. */
const text: SymbolPageTranslations = {
  "less-than": {
    name: "Signe inférieur à",
    meaning: "La relation « strictement inférieur à », qui affirme que la quantité de gauche est strictement plus petite que celle de droite.",
    usage: "Saisi directement en mode mathématique, < devient une relation entourée de l’espacement adéquat, comme dans 0 < x < 1 ou dans une inégalité stricte d’une démonstration epsilon-delta. Ne l’utilisez pas comme chevron pour les produits scalaires : c’est le rôle de \\langle. En mode texte avec l’ancien codage de police par défaut, < peut s’afficher comme un point d’exclamation renversé ; écrivez donc \\textless ou passez en mode mathématique. Sa forme large est \\leq (ou \\le), et sa négation \\not< ou \\nless. Les moteurs de rendu web comme MathJax acceptent aussi \\lt, ce qui est pratique en HTML.",
  },
  "greater-than": {
    name: "Signe supérieur à",
    meaning: "La relation « strictement supérieur à », qui énonce que la quantité de gauche est strictement plus grande que celle de droite.",
    usage: "En mode mathématique, > est un symbole de relation et reçoit automatiquement l’espacement correspondant : x > 0 ne demande aucune espace manuelle. Il ferme des inégalités strictes comme \\lambda_{\\max} > 0 ou la condition n > N dans les définitions de limite. Il ne doit pas servir de chevron fermant : c’est le rôle de \\rangle. En mode texte avec l’ancien codage de police, le caractère peut s’afficher comme un point d’interrogation renversé ; utilisez donc \\textgreater ou le mode mathématique. Les commandes voisines sont \\geq (ou \\ge), \\gg pour « très supérieur » et \\ngtr pour sa négation.",
  },
  "equivalent": {
    name: "Équivalence (triple barre)",
    meaning: "Relation à trois barres signifiant « identiquement égal », « congru modulo n » ou « logiquement équivalent ».",
    usage: "La théorie des nombres écrit a \\equiv b \\pmod{n} pour la congruence, l’analyse écrit f \\equiv 0 pour dire qu’une fonction est partout nulle, et la logique l’emploie pour l’équivalence logique de formules. Associez-le à \\pmod{n} pour le modulo entre parenthèses ou à \\bmod pour la forme binaire a \\bmod n. Il se distingue de \\cong (isomorphisme ou congruence géométrique) et de \\triangleq ou := (définitions), même si certains auteurs l’utilisent aussi pour les définitions. On le nie avec \\not\\equiv. En physique, \\equiv introduit souvent une notation abrégée : \\omega \\equiv 2\\pi f.",
  },
  "proportional-to": {
    name: "Proportionnalité",
    meaning: "Indique qu’une quantité est proportionnelle à une autre, c’est-à-dire égale à un facteur constant près.",
    usage: "La physique écrit F \\propto 1/r^2 pour les lois en inverse du carré, et la statistique bayésienne en fait un usage constant : p(\\theta \\mid x) \\propto p(x \\mid \\theta)\\, p(\\theta), en omettant la constante de normalisation. C’est une relation, donc l’espacement est automatique. Ne le confondez pas avec la lettre grecque \\alpha, qui lui ressemble dans certaines polices mais n’a pas l’espacement d’une relation. Une variante, \\varpropto, a une forme légèrement différente. Pour les ordres de grandeur en analyse d’algorithmes, \\sim ou \\Theta sont généralement plus clairs. N’écrivez la constante que lorsqu’elle compte ; sinon, tout l’intérêt de \\propto est de la masquer.",
  },
  "similar-to": {
    name: "Tilde (relation)",
    meaning: "Relation en tilde pour « suit la loi », « asymptotiquement équivalent », « semblable » ou « équivalent pour une relation ».",
    usage: "En probabilités, X \\sim \\mathcal{N}(0, 1) se lit « X suit une loi normale centrée réduite ». En analyse asymptotique, f \\sim g signifie f/g \\to 1, comme dans la formule de Stirling. L’algèbre utilise x \\sim y pour une relation d’équivalence, et la géométrie pour des triangles semblables. En tant que relation, il est espacé des deux côtés ; pour un accent tilde sur une lettre, utilisez \\tilde{x}. Ses proches parents sont \\simeq (asymptotiquement égal ou homotopiquement équivalent), \\approx (approximativement) et \\thicksim, une version plus grasse. Comme préfixe signifiant « environ », comme dans \\sim 10^3, l’espacement peut sembler étrange ; écrivez {\\sim}10^3.",
  },
  "congruent": {
    name: "Isomorphisme (isométrie)",
    meaning: "Tilde au-dessus d’un signe égal, désignant l’isomorphisme de structures ou l’isométrie de figures géométriques.",
    usage: "Les algébristes écrivent G \\cong H pour des groupes isomorphes et V \\cong V^{**} pour les espaces de dimension finie, tandis que la géométrie utilise \\triangle ABC \\cong \\triangle DEF pour des triangles isométriques. Certains textes de physique et d’ingénierie l’emploient au sens de « approximativement égal », mais \\approx est plus clair pour cela. Il diffère de \\simeq (une seule barre, utilisé pour l’équivalence d’homotopie ou l’égalité asymptotique) et de \\equiv (trois barres). Pour nommer l’application, placez-la au-dessus du symbole avec \\overset{\\phi}{\\cong} ou utilisez une flèche comme \\xrightarrow{\\sim}.",
  },
  "subset-or-equal": {
    name: "Inclusion large",
    meaning: "Indique que tout élément de l’ensemble de gauche appartient aussi à l’ensemble de droite ; les ensembles peuvent être égaux.",
    usage: "Utilisez \\subseteq pour l’inclusion qui autorise l’égalité, comme dans A \\subseteq A, et dans des définitions comme celle d’une topologie stable par réunion de sous-familles \\mathcal{U} \\subseteq \\tau. Beaucoup d’auteurs utilisent simplement \\subset dans le même sens, tandis que d’autres réservent \\subset à l’inclusion stricte ; il vaut donc la peine de préciser votre convention. Pour une inclusion stricte sans ambiguïté, utilisez \\subsetneq. La négation est \\nsubseteq ou \\not\\subseteq. Pour montrer que deux ensembles sont égaux, une démonstration classique établit A \\subseteq B et B \\subseteq A.",
  },
  "proper-subset": {
    name: "Inclusion stricte",
    meaning: "Symbole d’inclusion à barre barrée : l’ensemble de gauche est contenu dans celui de droite sans lui être égal.",
    usage: "\\subsetneq exprime explicitement l’inclusion stricte et lève l’ambiguïté de \\subset, que certains textes considèrent comme large. On le trouve dans des chaînes comme \\mathbb{N} \\subsetneq \\mathbb{Z} \\subsetneq \\mathbb{Q} et dans les arguments de maximalité pour les idéaux. Parmi les variantes figurent \\subsetneqq (double barre barrée) et \\varsubsetneq, dont le trait ne coupe que la barre. Ne le confondez pas avec \\nsubseteq, qui signifie « n’est pas du tout un sous-ensemble ». Son pendant pour les sur-ensembles est \\supsetneq. C’est une relation, donc l’espacement autour est géré automatiquement. Pour démontrer qu’une inclusion est stricte, montrez A \\subseteq B et exhibez un élément de B hors de A.",
  },
  "superset": {
    name: "Sur-ensemble",
    meaning: "Relation de sur-ensemble : l’ensemble de gauche contient celui de droite (souvent au sens strict, selon la convention).",
    usage: "\\supset est l’image miroir de \\subset : A \\supset B dit que B est inclus dans A. Comme pour \\subset, les auteurs ne s’accordent pas sur le fait qu’il autorise l’égalité ; précisez votre convention ou utilisez \\supseteq et \\supsetneq pour lever le doute. Des textes de logique de traditions plus anciennes, dont les Principia Mathematica, utilisaient \\supset pour l’implication matérielle : vous pourrez donc rencontrer p \\supset q dans des articles de philosophie. Dans un texte nouveau, \\to ou \\implies est plus clair pour l’implication. La négation est \\not\\supset, et \\nsupseteq couvre la version large.",
  },
  "superset-or-equal": {
    name: "Sur-ensemble au sens large",
    meaning: "Relation de sur-ensemble au sens large : l’ensemble de gauche contient tous les éléments de l’ensemble de droite.",
    usage: "Lisez A \\supseteq B comme « A contient B », éventuellement avec égalité. Il est naturel lorsque le plus grand ensemble est le sujet, comme dans \\overline{A} \\supseteq A pour les adhérences ou \\ker f \\supseteq \\operatorname{im} g dans les raisonnements sur les suites exactes. C’est simplement \\subseteq lu dans l’autre sens : choisissez la forme qui place l’ensemble important en premier. La version stricte est \\supsetneq, et la négation \\nsupseteq. En théorie des treillis et des ordres, il exprime aussi l’ordre d’inclusion inverse sur des familles d’ensembles.",
  },
  "perpendicular": {
    name: "Perpendicularité",
    meaning: "Relation de perpendicularité, qui marque des droites, vecteurs ou sous-espaces orthogonaux, ainsi que l’indépendance de variables.",
    usage: "La géométrie écrit AB \\perp CD, l’algèbre linéaire écrit u \\perp v lorsque \\langle u, v \\rangle = 0 et W^\\perp pour un supplémentaire orthogonal, et la théorie des nombres emploie parfois a \\perp b pour des entiers premiers entre eux. Les probabilistes écrivent X \\perp Y pour l’indépendance, souvent doublé en X \\perp\\!\\!\\!\\perp Y pour imiter le symbole dédié à l’indépendance. \\perp est une relation espacée des deux côtés, alors que \\bot a la même forme mais un espacement ordinaire, ce qui convient au « faux » logique ou à un plus petit élément. Dans un exposant comme W^\\perp, les deux conviennent, puisque l’espacement y est supprimé.",
  },
  "parallel": {
    name: "Parallélisme",
    meaning: "Relation « est parallèle à » pour des droites, des plans ou des vecteurs ; c’est aussi un opérateur de composition parallèle.",
    usage: "La géométrie écrit \\ell_1 \\parallel \\ell_2, la physique écrit des composantes comme F_\\parallel (souvent via \\|), et l’électrotechnique utilise R_1 \\parallel R_2 pour des résistances en parallèle. Les calculs de processus l’emploient pour la composition parallèle, P \\parallel Q. Le glyphe est le même que \\|, mais \\parallel reçoit l’espacement d’une relation : utilisez-le entre des objets, et \\| (ou \\lVert, \\rVert) comme délimiteurs de norme. Sa négation est \\nparallel. Pour la divergence de Kullback-Leibler D(P \\parallel Q), l’espacement de relation est l’usage, même si certains préfèrent \\|.",
  },
  "not-parallel": {
    name: "Non-parallélisme",
    meaning: "Relation de parallélisme niée, qui énonce que deux droites ou vecteurs ne sont pas parallèles.",
    usage: "\\nparallel trace une barre oblique à travers la double barre ; on l’utilise dans des problèmes de géométrie comme \\ell_1 \\nparallel \\ell_2, ce qui implique que les droites sont sécantes (dans le plan) ou non coplanaires (dans l’espace). C’est une relation, avec le même espacement que \\parallel. Écrire \\not\\parallel peut fonctionner, mais la barre superposée est souvent mal centrée : le glyphe dédié a un meilleur rendu. Il existe aussi \\nshortparallel, une variante plus courte. En physique, une composante non parallèle s’écrit plus souvent avec \\perp.",
  },
  "much-less-than": {
    name: "Signe très inférieur à",
    meaning: "Relation « très inférieur à », indiquant que la quantité de gauche est plus petite que celle de droite de plusieurs ordres de grandeur.",
    usage: "La physique et l’ingénierie utilisent \\ll pour les régimes d’approximation : v \\ll c pour un mouvement non relativiste, ou x \\ll 1 pour justifier \\sin x \\approx x. La théorie analytique des nombres utilise la notation de Vinogradov f \\ll g, qui signifie f = O(g), et la théorie de la mesure écrit \\mu \\ll \\nu pour la continuité absolue. C’est un glyphe unique : ne tapez pas << ou < <, qui donnent deux symboles de relation séparés avec un mauvais espacement. La version triple \\lll existe pour une inégalité encore plus marquée.",
  },
  "much-greater-than": {
    name: "Signe très supérieur à",
    meaning: "Relation « très supérieur à », indiquant qu’une quantité dépasse largement une autre.",
    usage: "Utilisez \\gg dans les raisonnements asymptotiques ou physiques, comme n \\gg 1 pour les approximations en grand échantillon, kT \\gg \\hbar\\omega pour la limite classique, ou la notation de Vinogradov f \\gg g qui signifie g = O(f). C’est un seul symbole avec l’espacement d’une relation ; taper >> produit deux relations séparées. La version plus forte \\ggg existe aussi. Comme \\gg n’est pas quantitatif, les articles le font souvent suivre d’un énoncé précis, par exemple n \\gg \\log(1/\\delta) accompagné de la constante en jeu. Les raisonnements asymptotiques en physique énoncent souvent le régime une fois, par exemple L \\gg \\lambda, puis négligent les petits termes.",
  },
  "precedes": {
    name: "Précédence stricte",
    meaning: "Relation « précède » pour des ordres stricts qui ne sont pas l’ordre numérique habituel.",
    usage: "\\prec sert à écrire des ordres stricts abstraits : les préférences en économie (x \\prec y signifie que y est strictement préféré), la majorisation en analyse matricielle, les ordres de dominance sur les partitions et la relation « s’est produit avant » des systèmes distribués. Sa forme incurvée signale que l’ordre n’est pas le < numérique. La version large est \\preceq, et \\preccurlyeq donne une variante à barre incurvée privilégiée par certains textes. L’algèbre linéaire écrit A \\prec B pour l’ordre de Loewner, ce qui signifie que B - A est définie positive. Parmi les négations figure \\nprec.",
  },
  "succeeds": {
    name: "Succession stricte",
    meaning: "Relation « succède à », l’inverse de \\prec, pour des ordres stricts abstraits.",
    usage: "\\succ se lit « succède à » ou « est préféré à » : en microéconomie, x \\succ y signifie que x est strictement préféré à y, et en analyse matricielle A \\succ 0 énonce que A est définie positive (ordre de Loewner). Les articles d’optimisation l’utilisent dans les contraintes semi-définies. C’est un symbole de relation, donc l’espacement est automatique. La forme large est \\succeq, la forme à barre incurvée \\succcurlyeq et la négation \\nsucc. Évitez > pour ces ordres, car le lecteur y verrait une comparaison numérique.",
  },
  "precedes-or-equal": {
    name: "Précédence large",
    meaning: "Relation « précède ou égal », la version large de \\prec pour les ordres partiels et les relations de préférence.",
    usage: "La théorie des ordres écrit x \\preceq y pour un ordre partiel général, en réservant \\le aux nombres. Les économistes l’emploient pour la préférence faible, et les spécialistes d’analyse matricielle écrivent A \\preceq B lorsque B - A est semi-définie positive. En optimisation convexe, l’inégalité généralisée x \\preceq_K y porte le cône en indice. \\preccurlyeq lui ressemble, avec une barre inférieure incurvée, et certains auteurs le préfèrent pour éviter la confusion avec \\leq. L’inverse est \\succeq, et \\npreceq en est la négation.",
  },
  "succeeds-or-equal": {
    name: "Succession large",
    meaning: "Relation « succède ou égal », surtout rencontrée dans A \\succeq 0 pour les matrices semi-définies positives.",
    usage: "Les contraintes de programmation semi-définie s’écrivent X \\succeq 0, ce qui signifie que X est symétrique semi-définie positive, et l’ordre de Loewner compare des matrices par A \\succeq B. Les économistes utilisent \\succeq pour la préférence faible, lue « au moins aussi bon que ». C’est une relation avec l’espacement standard. La version stricte est \\succ, la variante incurvée \\succcurlyeq et la négation \\nsucceq. Pour les comparaisons numériques, restez à \\geq afin que le lecteur ne cherche pas un ordre non standard. Dans un programme semi-défini, la contrainte figure généralement sur sa propre ligne après « s.t. » (« sous contrainte »).",
  },
  "asymptotic": {
    name: "Équivalence asymptotique (même ordre)",
    meaning: "Relation d’équivalence asymptotique : deux fonctions croissent au même rythme à des facteurs constants près.",
    usage: "En analyse et en théorie des nombres, f \\asymp g signifie qu’il existe des constantes c, C > 0 telles que c g \\le f \\le C g pour de grands arguments, ce qui équivaut à f = \\Theta(g) en informatique. C’est plus faible que f \\sim g, qui exige que le rapport tende vers 1. Le glyphe, une paire d’arcs opposés, ne doit pas être confondu avec \\approx ni avec \\smile et \\frown. C’est une relation, donc l’espacement est automatique. Certains textes de physique l’emploient aussi de façon lâche pour « asymptotiquement égal » : définissez-le si la précision compte.",
  },
  "defined-as": {
    name: "Égalité de définition",
    meaning: "Deux-points égal, l’affectation de définition : le membre de gauche est défini comme égal au membre de droite.",
    usage: "Écrire f(x) := x^2 + 1 marque une définition plutôt qu’une affirmation d’égalité, et le deux-points se place du côté de l’objet défini (=: inverse le sens). Tapés directement, le deux-points et le signe égal sont tous deux des relations, si bien que TeX les compose sans espace entre eux, mais le deux-points n’est pas centré verticalement sur le signe égal, ce qui gêne certains typographes. La commande \\coloneqq d’un paquet d’outils mathématiques corrige cet alignement. En pseudo-code, il désigne aussi l’affectation, x := x + 1. Parmi les alternatives figurent \\triangleq et \\stackrel{\\text{def}}{=}.",
  },
  "triangle-equal": {
    name: "Signe égal à triangle",
    meaning: "Signe égal surmonté d’un petit triangle, qui se lit « est défini comme ».",
    usage: "Les articles de traitement du signal, d’automatique et de théorie de l’information préfèrent souvent \\triangleq pour les définitions, comme dans H(X) \\triangleq -\\sum p(x) \\log p(x). Il joue le même rôle que :=, mais il est symétrique et n’indique donc pas quel membre est nouveau. Certains lecteurs le connaissent mal : mentionnez la convention une fois dans la section des notations. Les alternatives sont \\stackrel{\\text{def}}{=} ou \\overset{\\mathrm{def}}{=}, et \\equiv en physique. C’est une relation, donc l’espacement est automatique. Explicitez la convention pour tout lecteur extérieur à votre domaine.",
  },
};

export default text;
