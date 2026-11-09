import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/modal-logic/<slug>. */
const text: SymbolPageTranslations = {
  possibly: {
    name: "Opérateur de possibilité",
    meaning: "Opérateur de possibilité : \\Diamond p se lit « possiblement p » et est vrai en un monde si p est vrai dans au moins un monde accessible.",
    usage: "C'est le dual de la nécessité, \\Diamond p \\leftrightarrow \\neg\\Box\\neg p, et dans le système T on a p \\to \\Diamond p. La logique temporelle le lit « finalement » (à un moment futur), et la logique dynamique écrit \\langle a \\rangle p pour la même idée. \\Diamond est un grand symbole ordinaire ; \\diamond est un petit opérateur binaire et \\lozenge un losange étroit : ne les intervertissez pas. TeX traite \\Diamond comme un symbole ordinaire, donc \\Diamond p se compose sans espace ; ajoutez \\, uniquement si votre charte typographique le demande.",
  },
  "not-necessary": {
    name: "Négation de la nécessité",
    meaning: "Nécessité niée : \\neg\\Box p affirme que p n'est pas nécessaire, ce qui équivaut à \\Diamond\\neg p.",
    usage: "La dualité \\neg\\Box p \\leftrightarrow \\Diamond\\neg p permet de faire rentrer les négations, à la manière modale des lois de De Morgan pour les quantificateurs. Sémantiquement, la formule est vraie en un monde lorsqu'un monde accessible rend p faux. \\neg est un symbole ordinaire, donc \\neg\\Box p se compose serré ; écrivez \\lnot si vous préférez, c'est un alias. Il n'existe pas de commande standard unique pour une boîte barrée, et un glyphe combiné dérouterait les lecteurs : gardez la forme à deux symboles. En lecture épistémique, \\neg K_a p dit que l'agent ne sait pas p, ce qui est plus faible que savoir \\neg p.",
  },
  "not-possible": {
    name: "Négation de la possibilité",
    meaning: "Possibilité niée : \\neg\\Diamond p affirme que p est impossible, ce qui équivaut à \\Box\\neg p.",
    usage: "L'impossibilité est la nécessité de la négation, \\neg\\Diamond p \\leftrightarrow \\Box\\neg p, et elle est vraie en un monde lorsqu'aucun monde accessible ne satisfait p. Une contradiction est impossible dans toute logique modale normale : \\neg\\Diamond\\bot. Les lectures épistémiques disent qu'un agent considère p comme exclu. La commande \\neg peut être remplacée par \\lnot, au rendu identique. Évitez d'improviser un losange barré avec \\not\\Diamond, conçu pour les relations et qui place mal la barre. Faire entrer la négation, \\Diamond\\neg p, change le sens : p pourrait être faux.",
  },
  "necessary-implication": {
    name: "Implication nécessaire",
    meaning: "Implication nécessitée : \\Box(p \\to q) affirme que, dans tout monde accessible, p implique q (implication stricte).",
    usage: "C'est l'antécédent de l'axiome de distribution K, \\Box(p \\to q) \\to (\\Box p \\to \\Box q), que contient toute logique modale normale. C. I. Lewis a introduit l'implication stricte exactement sous cette forme, si bien que \\Box(p \\to q) se lit souvent « p implique strictement q ». \\to et \\rightarrow donnent la même flèche ; \\implies est une flèche longue avec davantage d'espace, mieux adaptée au raisonnement de niveau méta qu'aux connecteurs du langage objet. Les parenthèses sont obligatoires, car \\Box lie plus fortement que \\to. La règle de nécessitation permet de dériver \\Box(p \\to q) de tout théorème p \\to q.",
  },
  "possible-conjunction": {
    name: "Conjonction possible",
    meaning: "Conjonction possible : \\Diamond(p \\land q) affirme qu'il existe un monde accessible où p et q sont vrais simultanément.",
    usage: "Elle implique \\Diamond p \\land \\Diamond q, mais pas la réciproque, puisque p et q peuvent être possibles dans des mondes différents ; cette asymétrie est un classique des examens. Sa duale est \\Box(\\neg p \\lor \\neg q). \\land et \\wedge donnent le même symbole ; \\land se lit mieux dans les articles de logique. Gardez les parenthèses, car \\Diamond p \\land q s'analyse comme (\\Diamond p) \\land q. En termes de Kripke, un seul monde témoin doit satisfaire les deux conjoints à la fois. Par exemple, la pluie est possible et l'absence de pluie est possible, mais « pluie et absence de pluie » ensemble ne l'est pas.",
  },
  knows: {
    name: "Opérateur de connaissance",
    meaning: "Opérateur épistémique de connaissance : K_a p se lit « l'agent a sait que p ».",
    usage: "La logique épistémique modélise généralement la connaissance avec S5 : l'axiome de vérité K_a p \\to p, l'introspection positive K_a p \\to K_a K_a p et l'introspection négative. Sémantiquement, K_a p est vrai lorsque p est vrai dans tous les mondes que l'agent a ne peut pas distinguer du monde réel. Le dual \\hat{K}_a p ou M_a p signifie que a considère p comme possible. Utilisez un K droit, \\mathsf{K}_a ou \\mathrm{K}_a, si le K italique entre en conflit avec la logique nommée K, et écrivez les noms d'agents de plusieurs lettres sous la forme \\text{Alice} en indice.",
  },
  believes: {
    name: "Opérateur de croyance",
    meaning: "Opérateur de croyance : B_a p se lit « l'agent a croit que p », ce qui, contrairement à la connaissance, peut être faux.",
    usage: "La logique doxastique utilise généralement KD45 : la cohérence B_a p \\to \\neg B_a\\neg p et les deux axiomes d'introspection, mais pas d'axiome de vérité, si bien que B_a p \\to p échoue. Le lien connaissance-croyance K_a p \\to B_a p est un principe de liaison courant. Les articles sur la révision des croyances écrivent B_a(p \\mid q) pour la croyance conditionnelle. Comme pour K_a, envisagez un \\mathsf{B} droit si le B italique sert à autre chose, et ne le confondez pas avec la boîte \\Box, qui est l'opérateur générique de nécessité.",
  },
  "common-knowledge": {
    name: "Connaissance commune",
    meaning: "Connaissance commune dans un groupe G : tout le monde sait p, tout le monde sait que tout le monde sait p, et ainsi de suite indéfiniment.",
    usage: "Si E_G p signifie que chacun dans G sait p, la connaissance commune est la conjonction infinie E_G p \\land E_G E_G p \\land \\cdots, et elle vérifie l'axiome de point fixe C_G p \\leftrightarrow E_G(p \\land C_G p). Les énigmes des enfants sales (muddy children) et de l'attaque coordonnée reposent sur l'écart entre E_G et C_G. La connaissance distribuée s'écrit D_G p. G est un ensemble d'agents : écrivez-le en majuscule italique et définissez-le explicitement.",
  },
  "always-temporal-box": {
    name: "Opérateur « toujours » (boîte temporelle)",
    meaning: "Le « toujours » temporel : \\Box p affirme que p est vrai maintenant et à chaque instant futur de l'exécution.",
    usage: "En logique temporelle linéaire, \\Box s'écrit souvent G (globalement), et les propriétés de sûreté prennent la forme \\Box\\neg\\mathit{bad}. Il est dual de « finalement », \\Box p \\leftrightarrow \\neg\\Diamond\\neg p, et \\Box\\Diamond p exprime que p se produit infiniment souvent. La même boîte désigne la nécessité en logique modale aléthique : précisez donc quelle lecture s'applique. \\Box et \\square donnent des carrés presque identiques ; \\Box est l'opérateur modal conventionnel, et aucune espace n'est ajoutée automatiquement avant p. CTL le préfixe d'un quantificateur de chemin, comme dans AG p.",
  },
  "eventually-temporal-diamond": {
    name: "Opérateur « finalement » (losange temporel)",
    meaning: "Le « finalement » temporel : \\Diamond p affirme que p est vrai à un instant présent ou futur.",
    usage: "La logique temporelle linéaire l'écrit aussi F p (futur), et on peut le définir à partir de « jusqu'à » par \\Diamond p \\equiv \\top\\,\\mathcal{U}\\,p. Les propriétés de vivacité ont typiquement cette forme, comme \\Box(\\mathit{req} \\to \\Diamond\\mathit{grant}). \\Diamond\\Box p signifie que p finit par être vrai pour toujours. En logique modale aléthique, le même losange signifie « possiblement » : précisez donc la lecture temporelle. Utilisez \\Diamond et non \\diamond, qui est un opérateur binaire plus petit. En logique arborescente (CTL), il est préfixé d'un quantificateur de chemin, comme dans AF p ou EF p.",
  },
  until: {
    name: "Opérateur « jusqu'à » (until)",
    meaning: "Opérateur « jusqu'à » de la logique temporelle : p \\mathcal{U} q est vrai si q finit par être vrai et si p est vrai à chaque instant avant cela.",
    usage: "Le « jusqu'à » fort exige que q se produise ; le « jusqu'à » faible p \\mathcal{W} q admet aussi que p reste vrai pour toujours. « Finalement » s'en déduit par \\Diamond q \\equiv \\top \\mathcal{U} q. Écrit tel quel, \\mathcal{U} est un symbole ordinaire, donc p\\mathcal{U}q se compose sans espace autour du U ; enveloppez-le sous la forme p \\mathbin{\\mathcal{U}} q pour obtenir l'espacement d'un opérateur binaire, ou définissez \\newcommand{\\until}{\\mathbin{\\mathcal{U}}}. Beaucoup d'articles sur LTL utilisent un U droit, \\mathbin{\\mathsf{U}}, au lieu de la lettre calligraphique. Les logiques du passé ajoutent « depuis » (since), son image miroir tournée vers le passé.",
  },
  next: {
    name: "Opérateur « suivant » (next)",
    meaning: "Opérateur temporel « suivant » : \\bigcirc p affirme que p est vrai dans l'état immédiatement suivant.",
    usage: "C'est le seul opérateur de LTL lié à des pas de temps discrets ; on l'écrit aussi X p. La loi de développement p \\mathcal{U} q \\leftrightarrow q \\lor (p \\land \\bigcirc(p \\mathcal{U} q)) l'utilise pour déplier « jusqu'à » un pas à la fois. \\bigcirc est un grand cercle de la même taille que \\Box et \\Diamond, avec lesquels il s'accorde visuellement ; \\circ est un petit opérateur de composition et ne convient pas ici. Certains articles préfèrent \\mathsf{X} pour plus de clarté dans des spécifications riches en texte brut.",
  },
  accessibility: {
    name: "Relation d'accessibilité",
    meaning: "Relation d'accessibilité de la sémantique de Kripke : w R v signifie que le monde v est accessible (considéré comme possible) depuis le monde w.",
    usage: "Les propriétés de R correspondent aux axiomes modaux : la réflexivité donne T (\\Box p \\to p), la transitivité donne 4 (\\Box p \\to \\Box\\Box p), et une relation d'équivalence donne S5. La vérité de \\Box p en w exige p en tout v tel que wRv. Saisi sous la forme w R v, TeX traite R comme une lettre ordinaire et les espaces disparaissent, ce qui produit wRv ; utilisez w \\mathrel{R} v pour l'espacement d'une relation, ou définissez une macro. Certains auteurs écrivent plutôt R(w, v) ou w \\to v.",
  },
  "kripke-model": {
    name: "Modèle de Kripke",
    meaning: "Satisfaction dans un modèle de Kripke : la formule p est vraie au monde w du modèle \\mathcal{M}.",
    usage: "Un modèle de Kripke \\mathcal{M} = (W, R, V) comporte des mondes, une relation d'accessibilité et une valuation, et la vérité se définit monde par monde, par exemple \\mathcal{M}, w \\models \\Box p si et seulement si p est vrai en tous les R-successeurs. \\models est une relation correctement espacée ; \\vDash donne un glyphe de double tourniquet similaire, et ses négations sont \\not\\models ou \\nvDash. N'utilisez pas \\vdash, qui signifie la prouvabilité et non la vérité. Lorsque le modèle est fixé, les auteurs abrègent en w \\models p ou w \\Vdash p.",
  },
  "possible-world": {
    name: "Monde possible",
    meaning: "Un monde possible : un point d'un cadre de Kripke en lequel les formules sont évaluées comme vraies ou fausses.",
    usage: "Les mondes sont pris dans un ensemble W, et un cadre est le couple (W, R) muni d'une relation d'accessibilité. Selon la logique, un monde peut représenter l'état d'un programme, un instant dans le temps ou une alternative épistémique. L'usage réserve les minuscules w, v, u aux mondes et w_0 au monde réel. Comme un w italique isolé est très courant, introduisez-le explicitement, et préférez w \\in W dans la première formule pour ancrer la lecture.",
  },
  "deontic-ought": {
    name: "Obligation déontique",
    meaning: "Obligation déontique : O p se lit « il doit être le cas que p » ou « p est obligatoire ».",
    usage: "La logique déontique standard est la logique modale normale KD, avec l'axiome D, O p \\to P p, qui exprime la cohérence des obligations, tandis que l'axiome de vérité O p \\to p échoue délibérément. Les énigmes des obligations contraires au devoir (contrary-to-duty), comme le paradoxe de Chisholm, montrent ses limites et motivent l'obligation dyadique O(p \\mid q). En mode mathématique, O p se compose Op sans espace : écrivez donc O\\,p ou utilisez un \\mathbf{O} ou \\mathsf{O} droit pour éviter qu'il soit lu comme la notation grand O.",
  },
  "deontic-permitted": {
    name: "Permission déontique",
    meaning: "Permission déontique : P p se lit « p est permis », le dual de l'obligation.",
    usage: "La permission se définit par P p \\leftrightarrow \\neg O\\neg p, et l'interdiction par F p \\leftrightarrow O\\neg p. En logique déontique standard, toute obligation est permise : O p \\to P p. La permission de libre choix, selon laquelle P(p \\lor q) devrait impliquer P p, est une énigme connue que le système standard ne valide pas. Un P italique entre en collision avec la notation des probabilités ; beaucoup d'auteurs utilisent donc \\mathsf{P} ou \\mathbf{P}, et ajoutent \\, après pour séparer l'opérateur de la formule.",
  },
};

export default text;
