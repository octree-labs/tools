import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/logic/<slug>. */
const text: SymbolPageTranslations = {
  "not-exists": {
    name: "Quantificateur existentiel nié",
    meaning: "Quantificateur existentiel nié : il n'existe aucun objet ayant la propriété énoncée.",
    usage: "\\nexists x \\in \\mathbb{Q} : x^2 = 2 affirme que 2 n'a pas de racine carrée rationnelle. Le symbole est un \\exists barré conçu comme un glyphe unique ; \\not\\exists fonctionne aussi, mais la barre peut être mal placée. Logiquement, il équivaut à \\forall x\\, \\neg P(x), et de nombreux logiciens préfèrent écrire \\neg \\exists x par souci de clarté. Ajoutez une petite espace ou un deux-points après la variable liée, comme dans \\nexists x \\, P(x). Pour l'existence unique, le symbole est \\exists!.",
  },
  "negation": {
    name: "Négation",
    meaning: "Signe de négation logique, un crochet en forme de L placé devant une formule pour signifier « non ».",
    usage: "En logique, on écrit \\neg p pour « non p », et \\neg\\neg p \\equiv p en logique classique ; \\lnot en est un alias exact. Certains textes utilisent plutôt \\sim p, une barre supérieure \\bar{p} ou p', notamment en algèbre de Boole et en électronique numérique. \\neg est un symbole ordinaire : aucune espace n'apparaît entre lui et son opérande, ce qui est le rendu voulu. Les lois de De Morgan, \\neg(p \\land q) \\equiv \\neg p \\lor \\neg q, en sont une formule centrée typique. En programmation, on rencontre aussi bien ! que \\lnot.",
  },
  "logical-and": {
    name: "Conjonction logique",
    meaning: "ET logique (conjonction), vrai exactement lorsque les deux opérandes sont vrais.",
    usage: "\\land est un alias de \\wedge, choisi pour la lisibilité en logique, comme dans p \\land q ou \\forall x\\, (P(x) \\land Q(x)). Comme LaTeX le classe parmi les opérateurs binaires, l'espacement autour de p \\land q est automatique ; n'ajoutez pas \\, à la main. Pour la conjonction d'un grand nombre de formules, utilisez le grand opérateur \\bigwedge_{i=1}^{n} p_i. En algèbre de Boole, le ET s'écrit souvent comme une multiplication, pq ou p \\cdot q. Employez \\land en logique et \\wedge en algèbre extérieure pour que le source reste clair, même si les deux s'impriment de la même façon.",
  },
  "logical-or": {
    name: "Disjonction logique",
    meaning: "OU logique (disjonction), vrai lorsqu'au moins un des opérandes est vrai.",
    usage: "\\lor est un alias de \\vee, utilisé en logique propositionnelle et en logique des prédicats : p \\lor \\neg p est le principe du tiers exclu. LaTeX l'espace comme un opérateur binaire, donc p \\lor q ne demande aucune commande d'espacement manuelle. Pour un grand nombre de disjoints, \\bigvee_{i} p_i est le grand opérateur. Le OU exclusif est un autre symbole : \\oplus ou \\veebar. En algèbre de Boole et en conception de circuits, le OU s'écrit souvent +. Préférez \\lor dans les formules logiques et \\vee en théorie des treillis pour un source lisible, même si les deux ont le même rendu.",
  },
  "proves": {
    name: "Thèse (taquet de déduction)",
    meaning: "Taquet (thèse) : la formule de droite est dérivable (démontrable) à partir des hypothèses de gauche.",
    usage: "La théorie de la démonstration écrit \\Gamma \\vdash \\varphi pour la conséquence syntaxique, et la théorie des types l'utilise dans les jugements de typage \\Gamma \\vdash e : \\tau. Il se distingue de \\models, qui exprime la conséquence sémantique (vérité dans tous les modèles) ; la correction et la complétude affirment que les deux coïncident en logique du premier ordre. Sa négation s'écrit \\nvdash. \\vdash est une relation, l'espacement est donc automatique. Pour les règles d'inférence, \\frac ou un paquet dédié aux arbres de preuve produit le trait horizontal, avec des jugements contenant \\vdash au-dessus et en dessous. Le symbole miroir est \\dashv.",
  },
  "models": {
    name: "Conséquence sémantique (double taquet)",
    meaning: "Double taquet : conséquence sémantique ou satisfaction, c'est-à-dire vérité dans tout modèle.",
    usage: "\\mathcal{M} \\models \\varphi signifie que la structure M satisfait la formule \\varphi, et \\Gamma \\models \\varphi que tout modèle de \\Gamma satisfait \\varphi. Il s'oppose à \\vdash, qui exprime la prouvabilité syntaxique. Sa négation est \\not\\models ou le glyphe dédié \\nvDash. Le symbole voisin \\vDash a des proportions légèrement différentes et s'emploie dans certaines logiques à côté de \\Vdash pour le forcing en théorie des ensembles. Comme c'est une relation, il reçoit une espace de chaque côté. En vérification de modèles, on écrit s \\models \\phi pour un état qui satisfait une formule temporelle.",
  },
  "therefore": {
    name: "Signe « donc »",
    meaning: "Trois points disposés en triangle, lus « donc », qui introduisent une conclusion.",
    usage: "\\therefore est courant en mathématiques scolaires et dans les calculs informels : x + 2 = 5, \\therefore x = 3. Les articles formels préfèrent généralement des mots comme « par conséquent » ou la flèche d'implication \\implies. Il est composé comme une relation, l'espacement entre les expressions est donc automatique. La version renversée, \\because, signifie « car ». Dans le texte, il doit rester en mode mathématique, par exemple $\\therefore$, sauf si vous chargez un symbole texte équivalent. Comme son sens est clair pour la plupart des lecteurs, il convient bien aux diapositives et aux corrigés où la place manque.",
  },
  "because": {
    name: "Signe « car »",
    meaning: "Trois points formant un triangle renversé, lus « car » ou « puisque », qui introduisent une justification.",
    usage: "\\because introduit une justification, typiquement dans les corrigés scolaires pas à pas : \\angle A = \\angle B \\quad \\because AB = AC. C'est le symétrique de \\therefore, avec le point isolé en bas. La rédaction formelle écrit plutôt « puisque » en toutes lettres ou utilise une annotation textuelle comme \\text{(par le lemme 2)}. En tant que symbole de relation, il reçoit une espace de chaque côté, et \\quad ou \\qquad placé devant sépare la justification de l'équation. Utilisez-le avec parcimonie dans les articles. Dans les démonstrations, écrire la justification en mots est généralement plus agréable pour le lecteur.",
  },
  "contradiction-falsum-bottom": {
    name: "Contradiction (falsum, minimum)",
    meaning: "Symbole « taquet haut » (minimum) : le faux ou la contradiction en logique, et le plus petit élément d'un treillis.",
    usage: "La logique utilise \\bot pour une proposition toujours fausse : dériver \\bot démontre la négation, et \\neg p peut se définir comme p \\to \\bot. La théorie des domaines et les treillis utilisent \\bot pour le plus petit élément, et la théorie des types pour le type vide. \\bot est un symbole ordinaire ; le même glyphe avec l'espacement d'une relation est \\perp, qui convient pour l'orthogonalité entre deux objets. Son dual est \\top. Dans les raisonnements par l'absurde, certains auteurs écrivent \\bot ou \\Rightarrow\\Leftarrow à la fin de l'étape contradictoire.",
  },
  "tautology-verum-top": {
    name: "Tautologie (verum, maximum)",
    meaning: "Symbole « taquet bas » (maximum) : le vrai, proposition toujours vraie, et le plus grand élément d'un treillis.",
    usage: "En logique, \\top est une tautologie, l'élément neutre de la conjonction (p \\land \\top \\equiv p). Les treillis et la théorie des domaines l'utilisent pour le plus grand élément, et la théorie des types pour le type unité. Il sert aussi très souvent en exposant pour la transposée d'une matrice, A^\\top, à la place de A^T ou de A^\\intercal. \\top est un symbole ordinaire. Ne le confondez pas avec la lettre T, qui repose sur la ligne de base et a d'autres proportions. Son dual est \\bot.",
  },
  "not-equivalent": {
    name: "Signe de non-équivalence",
    meaning: "Triple barre barrée : non congru modulo n, ou non identiquement égal.",
    usage: "En théorie des nombres, on écrit a \\not\\equiv b \\pmod{n} lorsque n ne divise pas a - b, par exemple dans l'hypothèse du petit théorème de Fermat, a \\not\\equiv 0 \\pmod{p}. Le préfixe \\not superpose une barre oblique à la relation ; placez-le juste avant \\equiv. Dans certaines polices, la barre paraît légèrement décentrée, mais aucune police de symboles courante ne propose de glyphe dédié standard, donc \\not\\equiv est le choix habituel. En logique, il signifie « non logiquement équivalent ». Pour une simple inégalité, utilisez plutôt \\neq.",
  },
};

export default text;
