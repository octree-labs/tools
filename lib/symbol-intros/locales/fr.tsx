import type { IntroLocale } from "../localized";
import { Cmd, IntroLink, IntroP } from "../ui";

/** French (route locale `fr`, language tag `fr`). */
const fr: IntroLocale = {
  languageTag: "fr",
  labels: {
    symbol: "Symbole",
    command: "Commande",
    use: "Usage",
    package: "Paquet",
    builtIn: "intégré",
    copy: "Copier",
  },
  intros: {
    arrows: {
      title: "Flèches en LaTeX : comment écrire une flèche en LaTeX",
      intro: (
        <IntroP>
          En LaTeX, les flèches sont des commandes du mode mathématique nommées d&rsquo;après leur
          direction : pour taper une flèche, écrivez <Cmd>$\rightarrow$</Cmd> pour &rarr;,{" "}
          <Cmd>$\leftarrow$</Cmd> pour &larr; et <Cmd>$\Rightarrow$</Cmd> pour la double flèche
          &rArr;. Le tableau ci-dessous présente les 12 flèches les plus utilisées, avec le paquet
          requis pour chacune ; la liste complète des symboles de flèches suit plus bas sur la page.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : les flèches les plus utilisées",
      use: {
        "\\rightarrow": "Flèche vers la droite",
        "\\to": "Application vers un ensemble, limites (x \u2192 \u221e)",
        "\\leftarrow": "Flèche vers la gauche, affectation",
        "\\leftrightarrow": "Flèche gauche-droite (dans les deux sens)",
        "\\Rightarrow": "Implication (double flèche)",
        "\\Leftrightarrow": "Si et seulement si",
        "\\mapsto": "Règle d\u2019une fonction, x \u21a6 x\u00b2",
        "\\longrightarrow": "Longue flèche vers la droite",
        "\\uparrow": "Flèche vers le haut",
        "\\downarrow": "Flèche vers le bas",
        "\\hookrightarrow": "Injection, inclusion",
        "\\xrightarrow{f}": "Flèche avec texte au-dessus, s\u2019étire selon le texte",
      },
      faqHeading: "Questions fréquentes sur les flèches en LaTeX",
      faq: [
        {
          question: "Comment écrire une flèche en LaTeX ?",
          answer:
            "Les flèches sont des symboles mathématiques : placez-les en mode mathématique. $\\rightarrow$ (ou le raccourci $\\to$) donne une flèche vers la droite, $\\leftarrow$ une flèche vers la gauche et $\\leftrightarrow$ une flèche gauche-droite. Mettre la première lettre en majuscule donne la version à double trait, par exemple \\Rightarrow et \\Leftrightarrow. Aucune de ces commandes ne nécessite de paquet.",
        },
        {
          question: "Comment faire une flèche longue en LaTeX ?",
          answer:
            "Ajoutez le préfixe long au nom : \\longrightarrow, \\longleftarrow et \\longleftrightarrow, ou \\Longrightarrow et \\Longleftrightarrow pour les doubles flèches, et \\longmapsto pour une longue flèche « associe ». Si la flèche doit s\u2019allonger avec une étiquette, utilisez plutôt \\xrightarrow{...} du paquet amsmath.",
        },
        {
          question: "Comment mettre du texte au-dessus d\u2019une flèche en LaTeX ?",
          answer:
            "Chargez amsmath et utilisez \\xrightarrow{text} ou \\xleftarrow{text} ; la flèche s\u2019étire pour s\u2019adapter à l\u2019étiquette. Un argument optionnel ajoute du texte sous la flèche : \\xrightarrow[below]{above}. Pour une flèche de taille fixe, vous pouvez aussi écrire \\overset{f}{\\rightarrow}.",
        },
        {
          question: "Comment écrire une double flèche en LaTeX ?",
          answer:
            "Utilisez \\Rightarrow pour \u21d2, \\Leftarrow pour \u21d0 et \\Leftrightarrow pour \u21d4. En logique, \\implies (amsmath) et la commande intégrée \\iff donnent les mêmes flèches avec un espacement plus large. Pour deux flèches superposées, utilisez \\rightleftarrows (amssymb), ou \\rightleftharpoons pour les équilibres chimiques.",
        },
        {
          question: "Comment utiliser une flèche en mode texte en LaTeX ?",
          answer:
            "Écrire \\rightarrow hors du mode mathématique provoque l\u2019erreur « Missing $ inserted ». Entourez-la de $ comme dans $\\rightarrow$, ou utilisez les commandes du mode texte \\textrightarrow, \\textleftarrow, \\textuparrow et \\textdownarrow, qui font partie du noyau LaTeX (textcomp) et s\u2019accordent avec la police du texte environnant.",
        },
      ],
    },

    math: {
      title: "Symboles mathématiques en LaTeX : l\u2019essentiel",
      intro: (
        <IntroP>
          Les symboles mathématiques de LaTeX ne fonctionnent qu&rsquo;en mode mathématique :
          entourez-les de <Cmd>{"$...$"}</Cmd> pour les formules en ligne ou de{" "}
          <Cmd>{"\\[...\\]"}</Cmd> pour une équation centrée. Les plus courants sont intégrés :{" "}
          <Cmd>{"\\pm"}</Cmd>, <Cmd>{"\\times"}</Cmd>, <Cmd>{"\\div"}</Cmd> et <Cmd>{"\\cdot"}</Cmd>{" "}
          pour l&rsquo;arithmétique, <Cmd>{"\\neq"}</Cmd>, <Cmd>{"\\leq"}</Cmd>, <Cmd>{"\\geq"}</Cmd>{" "}
          et <Cmd>{"\\approx"}</Cmd> pour les comparaisons, <Cmd>{"\\infty"}</Cmd>,{" "}
          <Cmd>{"\\sqrt{x}"}</Cmd> et <Cmd>{"\\frac{a}{b}"}</Cmd>. Les exposants et les indices
          s&rsquo;écrivent avec <Cmd>{"^"}</Cmd> et <Cmd>{"_"}</Cmd>, avec des accolades dès
          qu&rsquo;il y a plus d&rsquo;un caractère : <Cmd>{"x^{2n}"}</Cmd>. Des symboles
          supplémentaires comme <Cmd>{"\\mathbb{R}"}</Cmd> et <Cmd>{"\\therefore"}</Cmd> viennent
          d&rsquo;amssymb. Le tableau présente les symboles mathématiques les plus utilisés, avec le
          paquet requis pour chacun ; la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : les symboles mathématiques courants",
      use: {
        "\\pm": "Plus ou moins",
        "\\times": "Multiplication (fois)",
        "\\div": "Division",
        "\\cdot": "Point centré, multiplication",
        "\\neq": "Différent de",
        "\\leq": "Inférieur ou égal à",
        "\\approx": "Approximativement égal à",
        "\\infty": "Infini",
        "\\sqrt{x}": "Racine carrée (\\sqrt[n]{x} pour la racine n-ième)",
        "\\frac{a}{b}": "Fraction",
        "x^{2n}": "Exposant (puissance)",
        "\\mathbb{R}": "Nombres réels",
      },
      faqHeading: "Questions fréquentes sur les symboles mathématiques en LaTeX",
      faq: [
        {
          question: "Comment écrire des symboles mathématiques en LaTeX ?",
          answer:
            "Placez-les en mode mathématique : $...$ pour les formules en ligne et \\[...\\] ou un environnement equation pour les formules centrées, puis utilisez la commande du symbole, par exemple $a \\times b \\neq c$. Utiliser une commande mathématique hors du mode mathématique provoque l\u2019erreur Missing $ inserted.",
        },
        {
          question: "Quels paquets faut-il pour les symboles mathématiques en LaTeX ?",
          answer:
            "La plupart des symboles sont intégrés. Ajoutez \\usepackage{amsmath} pour des environnements comme align et des commandes comme \\text et \\operatorname, et \\usepackage{amssymb} pour des symboles supplémentaires tels que \\mathbb{R}, \\therefore, \\nexists et \\varnothing. mathtools étend amsmath avec des corrections et des outils supplémentaires.",
        },
        {
          question: "Comment trouver la commande LaTeX d\u2019un symbole ?",
          answer:
            "Cherchez sur cette page ou sur les pages de catégorie et cliquez sur une carte pour copier sa commande. Si vous savez seulement à quoi ressemble le symbole, Detexify vous permet de le dessiner et propose les commandes correspondantes, et la Comprehensive LaTeX Symbol List recense des milliers de symboles.",
        },
      ],
    },

    "set-theory": {
      title: "Symboles de théorie des ensembles en LaTeX : inclusion, appartenance, union et ensemble vide",
      intro: (
        <IntroP>
          Les symboles de théorie des ensembles sont pour la plupart intégrés à LaTeX.
          L&rsquo;appartenance s&rsquo;écrit <Cmd>{"\\in"}</Cmd> (∈) et la non-appartenance{" "}
          <Cmd>{"\\notin"}</Cmd> ; l&rsquo;inclusion stricte est <Cmd>{"\\subset"}</Cmd> (⊂) et
          l&rsquo;inclusion au sens large <Cmd>{"\\subseteq"}</Cmd> (⊆) ; l&rsquo;union et
          l&rsquo;intersection sont <Cmd>{"\\cup"}</Cmd> et <Cmd>{"\\cap"}</Cmd>, la différence
          d&rsquo;ensembles est <Cmd>{"\\setminus"}</Cmd>, et l&rsquo;ensemble vide{" "}
          <Cmd>{"\\emptyset"}</Cmd> (∅). Quelques extras nécessitent amssymb : l&rsquo;ensemble vide
          plus arrondi <Cmd>{"\\varnothing"}</Cmd>, le sous-ensemble propre{" "}
          <Cmd>{"\\subsetneq"}</Cmd> et les ensembles de nombres comme <Cmd>{"\\mathbb{N}"}</Cmd> et{" "}
          <Cmd>{"\\mathbb{R}"}</Cmd>. Les accolades doivent être échappées, un ensemble
          s&rsquo;écrit donc <Cmd>{"\\{1, 2, 3\\}"}</Cmd>. Le tableau présente les symboles de
          théorie des ensembles les plus utilisés, avec le paquet requis pour chacun ; la liste
          complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : les symboles de théorie des ensembles les plus utilisés",
      use: {
        "\\in": "Appartient à",
        "\\notin": "N\u2019appartient pas à",
        "\\subset": "Sous-ensemble (inclusion)",
        "\\subseteq": "Sous-ensemble ou égal",
        "\\subsetneq": "Sous-ensemble propre (différent)",
        "\\cup": "Union",
        "\\cap": "Intersection",
        "A \\setminus B": "Différence d\u2019ensembles",
        "\\emptyset": "Ensemble vide (\\varnothing avec amssymb)",
        "\\mathbb{R}": "Nombres réels (aussi \\mathbb{N}, \\mathbb{Z}, \\mathbb{Q})",
        "\\{ x \\in A \\mid x > 0 \\}": "Définition d\u2019un ensemble en compréhension",
        "\\mathcal{P}(A)": "Ensemble des parties",
      },
      faqHeading: "Questions fréquentes sur la théorie des ensembles en LaTeX",
      faq: [
        {
          question: "Comment écrire « sous-ensemble » (inclusion) en LaTeX ?",
          answer:
            "Utilisez \\subset pour ⊂ et \\subseteq pour ⊆, tous deux intégrés : $A \\subseteq B$. Pour un sous-ensemble propre qui exclut explicitement l\u2019égalité, amssymb fournit \\subsetneq (⊊). Les versions sur-ensemble sont \\supset, \\supseteq et \\supsetneq, et \\not\\subset donne la négation.",
        },
        {
          question: "Comment écrire « appartient à » en LaTeX ?",
          answer:
            "\\in affiche ∈, comme dans $x \\in A$, et \\notin affiche ∉. La forme inversée \\ni (∋) se lit « contient comme élément ». Les trois sont intégrés.",
        },
        {
          question: "Comment écrire l\u2019ensemble vide en LaTeX ?",
          answer:
            "\\emptyset affiche ∅ et est intégré. Beaucoup d\u2019auteurs préfèrent le \\varnothing, plus arrondi, qui nécessite \\usepackage{amssymb}. Dans tous les cas, n\u2019utilisez pas \\phi ni \\O, qui sont une lettre grecque et une lettre scandinave.",
        },
      ],
    },

    logic: {
      title: "Symboles de logique en LaTeX",
      intro: (
        <>
          <IntroP>
            Les connecteurs de la logique propositionnelle sont <Cmd>\land</Cmd> (et),{" "}
            <Cmd>\lor</Cmd> (ou) et <Cmd>\lnot</Cmd> (non) ; <Cmd>\wedge</Cmd>, <Cmd>\vee</Cmd> et{" "}
            <Cmd>\neg</Cmd> en sont des alias identiques. L&rsquo;implication et
            l&rsquo;équivalence s&rsquo;écrivent de préférence avec <Cmd>\implies</Cmd> (du paquet
            amsmath) et <Cmd>\iff</Cmd>, qui ajoutent un espacement de relation autour des
            flèches ; les simples <Cmd>\Rightarrow</Cmd> et <Cmd>\Leftrightarrow</Cmd> fonctionnent
            aussi. Les quantificateurs sont <Cmd>\forall</Cmd> et <Cmd>\exists</Cmd>, avec{" "}
            <Cmd>\nexists</Cmd> pour « il n&rsquo;existe pas », et les constantes vrai et faux
            sont <Cmd>\top</Cmd> et <Cmd>\bot</Cmd>.
          </IntroP>
          <IntroP>
            La théorie de la démonstration et la sémantique ont leurs propres taquets :{" "}
            <Cmd>\vdash</Cmd> signifie « démontre » ou conséquence syntaxique,{" "}
            <Cmd>\models</Cmd> (aussi <Cmd>\vDash</Cmd>) signifie « satisfait » ou conséquence
            sémantique, et <Cmd>\nvdash</Cmd> est la négation du premier. Les marqueurs
            d&rsquo;inférence <Cmd>\therefore</Cmd> et <Cmd>\because</Cmd> viennent
            d&rsquo;amssymb, tout comme <Cmd>\nexists</Cmd> et <Cmd>\vDash</Cmd>.
            L&rsquo;équivalence logique de formules s&rsquo;écrit souvent <Cmd>\equiv</Cmd>, le ou
            exclusif <Cmd>\oplus</Cmd>, et la barre de Sheffer (NAND) <Cmd>\uparrow</Cmd>. Les
            opérateurs modaux <Cmd>\Box</Cmd> et <Cmd>\Diamond</Cmd> figurent sur la page des{" "}
            <IntroLink href="/fr/symbols/modal-logic">symboles de logique modale</IntroLink>.
          </IntroP>
          <IntroP>
            Tous ces symboles s&rsquo;utilisent uniquement en mode mathématique : entourez-les de{" "}
            <Cmd>$...$</Cmd> et chargez <Cmd>\usepackage{"{amsmath, amssymb}"}</Cmd> dans le
            préambule. Une formule typique : <Cmd>\forall x\, (P(x) \implies Q(x))</Cmd>. Pour
            voir comment ils se combinent avec les ensembles, les fonctions et les relations,
            consultez notre guide des{" "}
            <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
              expressions mathématiques en LaTeX
            </IntroLink>
            .
          </IntroP>
        </>
      ),
    },

    physics: {
      title: "Symboles de mécanique quantique en LaTeX",
      intro: (
        <IntroP>
          Les symboles de mécanique quantique que les physiciens tapent le plus sont tous intégrés
          à LaTeX : la constante de Planck réduite <Cmd>\hbar</Cmd>, le bra{" "}
          <Cmd>\langle \psi |</Cmd> et le ket <Cmd>| \psi \rangle</Cmd>, les opérateurs coiffés
          d&rsquo;un chapeau comme <Cmd>\hat{"{H}"}</Cmd>, l&rsquo;adjoint <Cmd>A^\dagger</Cmd>, le
          laplacien <Cmd>\nabla^2</Cmd> et la dérivée temporelle <Cmd>\partial_t</Cmd>. Pour une
          notation bra-ket plus courte, les paquets braket et physics ajoutent{" "}
          <Cmd>\bra{"{}"}</Cmd>, <Cmd>\ket{"{}"}</Cmd> et <Cmd>\braket{"{}"}</Cmd>. Le tableau
          présente les symboles de physique quantique les plus utilisés, avec le paquet requis pour
          chacun ; la liste complète des symboles de physique suit plus bas.
        </IntroP>
      ),
      use: {
        "\\hbar": "Constante de Planck réduite (h barre)",
        "\\langle \\psi |": "Bra, construit avec les commandes de base",
        "| \\psi \\rangle": "Ket, construit avec les commandes de base",
        "\\langle \\phi | \\psi \\rangle": "Produit scalaire (bra-ket)",
        "\\bra{\\psi}": "Bra",
        "\\ket{\\psi}": "Ket",
        "\\braket{\\phi|\\psi}": "Produit scalaire (physics : \\braket{\\phi}{\\psi})",
        "\\hat{H}": "Opérateur hamiltonien",
        "A^\\dagger": "Adjoint hermitien (dague)",
        "\\nabla^2": "Laplacien",
        "\\partial_t \\psi": "Dérivée par rapport au temps",
        "\\otimes": "Produit tensoriel d\u2019états",
      },
      faqHeading: "Questions fréquentes",
      faq: [
        {
          question: "Comment écrire la notation bra-ket en LaTeX ?",
          answer:
            "Sans paquet, écrivez un bra \\langle \\psi |, un ket | \\psi \\rangle et un produit scalaire \\langle \\phi | \\psi \\rangle. Avec \\usepackage{braket}, vous pouvez écrire \\bra{\\psi}, \\ket{\\psi} et \\braket{\\phi|\\psi} ; avec \\usepackage{physics}, le produit scalaire prend au contraire deux arguments, \\braket{\\phi}{\\psi}. Ne chargez qu\u2019un seul des deux paquets, car tous deux définissent ces commandes.",
        },
        {
          question: "Comment écrire h barre en LaTeX ?",
          answer:
            "La constante de Planck réduite \u210f s\u2019écrit \\hbar ; elle est intégrée et s\u2019utilise en mode mathématique : $\\hbar$. L\u2019équation de Schr\u00f6dinger s\u2019écrit alors i\\hbar \\partial_t \\psi = \\hat{H} \\psi.",
        },
        {
          question: "Comment écrire des opérateurs et la dague en LaTeX ?",
          answer:
            "Marquez les opérateurs d\u2019un chapeau, \\hat{H} ou \\hat{p}, et écrivez l\u2019adjoint hermitien avec \\dagger en exposant, A^\\dagger. Les valeurs moyennes s\u2019écrivent \\langle \\hat{A} \\rangle, ou \\expval{A} avec le paquet physics, et les commutateurs [\\hat{x}, \\hat{p}] = i\\hbar.",
        },
      ],
    },

    functions: {
      title: "Composition de fonctions et isomorphisme en LaTeX",
      intro: (
        <IntroP>
          En LaTeX, la composition de fonctions s&rsquo;écrit <Cmd>\circ</Cmd>, comme dans{" "}
          <Cmd>g \circ f</Cmd>, et le symbole d&rsquo;isomorphisme est <Cmd>\cong</Cmd> (&cong;),
          avec <Cmd>\simeq</Cmd> pour une équivalence plus faible ; tous trois sont intégrés. Une
          fonction se déclare avec <Cmd>f \colon A \to B</Cmd>, où <Cmd>\colon</Cmd> donne le bon
          espacement, et sa règle avec <Cmd>\mapsto</Cmd>, comme dans <Cmd>x \mapsto x^2</Cmd>.
          L&rsquo;application identité est <Cmd>\operatorname{"{id}"}</Cmd> du paquet amsmath. Le
          tableau présente les commandes de fonctions et d&rsquo;applications les plus utilisées,
          avec le paquet requis pour chacune ; la liste complète des symboles suit plus bas.
        </IntroP>
      ),
      use: {
        "f \\colon A \\to B": "Fonction de A dans B",
        "x \\mapsto x^2": "Associe (règle de la fonction)",
        "g \\circ f": "Composition, g rond f",
        "f^{-1}": "Fonction réciproque",
        "\\cong": "Isomorphe à",
        "\\simeq": "Homotopiquement équivalent, isomorphisme faible",
        "\\xrightarrow{\\sim}": "Flèche d\u2019isomorphisme",
        "\\operatorname{id}_A": "Application identité",
        "\\hookrightarrow": "Injection, inclusion",
        "\\twoheadrightarrow": "Surjection",
        "f|_A": "Restriction à A",
      },
      faqHeading: "Questions fréquentes",
      faq: [
        {
          question: "Comment écrire la composition de fonctions en LaTeX ?",
          answer:
            "Utilisez \\circ, qui est intégré : $g \\circ f$ affiche g ∘ f, qui se lit « g rond f ». Écrivez (g \\circ f)(x) = g(f(x)) pour la règle. N\u2019utilisez ni un o minuscule ni \\cdot, dont la taille et l\u2019espacement ne conviennent pas.",
        },
        {
          question: "Comment écrire le symbole d\u2019isomorphisme en LaTeX ?",
          answer:
            "Le symbole d\u2019isomorphisme standard ≅ est \\cong, intégré : $G \\cong H$. Pour une équivalence d\u2019homotopie ou une notion plus faible, utilisez \\simeq (≃), et pour une flèche qui est un isomorphisme, \\xrightarrow{\\sim} d\u2019amsmath, ou \\cong placé au-dessus d\u2019une flèche avec \\xrightarrow{\\cong}.",
        },
        {
          question: "Comment écrire f: A → B en LaTeX ?",
          answer:
            "Écrivez f \\colon A \\to B. La commande \\colon donne l\u2019espacement d\u2019un signe de ponctuation ; un deux-points simple est espacé comme une relation et laisse trop de place avant A. Utilisez \\mapsto pour la règle, comme dans x \\mapsto x^2.",
        },
      ],
    },

    chemistry: {
      title: "Symboles de chimie en LaTeX : flèches de réaction, équilibre et formules",
      intro: (
        <IntroP>
          Pour les symboles de chimie en LaTeX, le paquet mhchem fait l&rsquo;essentiel du
          travail : <Cmd>{"\\ce{2H2 + O2 -> 2H2O}"}</Cmd> compose une réaction entière avec des
          symboles d&rsquo;éléments droits, des indices et une flèche de réaction. Sans mhchem, la
          flèche de réaction est <Cmd>{"\\rightarrow"}</Cmd>, le symbole d&rsquo;équilibre{" "}
          <Cmd>{"\\rightleftharpoons"}</Cmd>, et les formules s&rsquo;écrivent{" "}
          <Cmd>{"\\mathrm{H_2O}"}</Cmd> en mode mathématique pour que les lettres des éléments
          restent droites. Les conditions de réaction se placent au-dessus d&rsquo;une flèche
          extensible avec <Cmd>{"\\xrightarrow{\\Delta}"}</Cmd> du paquet amsmath. Le tableau
          présente les symboles de chimie les plus utilisés, avec le paquet requis pour chacun ; la
          liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : réactions, flèches et formules",
      use: {
        "\\ce{2H2 + O2 -> 2H2O}": "Réaction complète",
        "\\ce{A <=> B}": "Équilibre avec mhchem",
        "\\rightarrow": "Donne (flèche de réaction)",
        "\\rightleftharpoons": "Symbole d\u2019équilibre (harpons)",
        "\\xrightarrow{\\Delta}": "Flèche avec chauffage ou conditions au-dessus",
        "\\mathrm{H_2O}": "Formule chimique en mode mathématique",
        "\\mathrm{Na^+}": "Charge d\u2019un ion",
        "{}^{14}_{6}\\mathrm{C}": "Isotope (nombre de masse et numéro atomique)",
        "\\Delta H^\\circ": "Variation d\u2019enthalpie standard",
        "\\uparrow": "Dégagement gazeux",
        "\\downarrow": "Précipité",
        "\\ce{HC#CH}": "Triple liaison (= pour une double liaison)",
      },
      faqHeading: "Questions fréquentes sur la chimie en LaTeX",
      faq: [
        {
          question: "Comment écrire la flèche de réaction en LaTeX ?",
          answer:
            "En mode mathématique, la flèche de réaction est \\rightarrow, ou \\longrightarrow pour une flèche plus longue. Avec mhchem, tapez -> dans \\ce{...}, par exemple \\ce{A + B -> C}. Pour afficher des conditions au-dessus de la flèche, utilisez \\xrightarrow{\\Delta} d\u2019amsmath, ou ->[\\Delta] dans \\ce.",
        },
        {
          question: "Comment écrire le symbole d\u2019équilibre en LaTeX ?",
          answer:
            "Le symbole d\u2019équilibre ⇌ est \\rightleftharpoons, qui est intégré : $\\mathrm{N_2} + 3\\mathrm{H_2} \\rightleftharpoons 2\\mathrm{NH_3}$. Avec mhchem, écrivez <=> dans \\ce{...} ; le paquet propose aussi <=>> et <<=> pour les équilibres déplacés vers la droite ou vers la gauche.",
        },
        {
          question: "Comment écrire des formules chimiques avec des indices en LaTeX ?",
          answer:
            "Utilisez \\ce{H2SO4} du paquet mhchem, qui met les chiffres en indice et garde les lettres droites. Sans mhchem, écrivez \\mathrm{H_2SO_4} en mode mathématique ; un simple H_2SO_4 composerait les lettres en italique, comme des variables.",
        },
      ],
    },

    probability: {
      title: "Symboles de probabilité et de statistiques en LaTeX",
      intro: (
        <IntroP>
          En LaTeX, le symbole de probabilité est <Cmd>\Pr</Cmd> ou <Cmd>\mathbb{"{P}"}</Cmd>, et
          l&rsquo;opérateur d&rsquo;espérance <Cmd>\mathbb{"{E}"}[X]</Cmd>. Le tableau présente les
          huit commandes les plus utilisées, avec le paquet requis pour chacune ; la liste complète
          des symboles de probabilité et de statistiques suit plus bas.
        </IntroP>
      ),
      use: {
        "\\Pr(A)": "Opérateur de probabilité (Pr droit)",
        "\\mathbb{P}(A)": "Symbole de probabilité, gras de tableau noir",
        "\\mathbb{E}[X]": "Opérateur d\u2019espérance",
        "\\operatorname{Var}(X)": "Variance",
        "\\operatorname{Cov}(X, Y)": "Covariance",
        "P(A \\mid B)": "Probabilité conditionnelle",
        "X \\sim \\mathcal{N}(\\mu, \\sigma^2)": "Suit la loi (normale)",
        "\\binom{n}{k}": "Coefficient binomial",
      },
      faqHeading: "Questions fréquentes",
      faq: [
        {
          question: "Comment écrire le symbole de probabilité en LaTeX ?",
          answer:
            "Utilisez l\u2019opérateur intégré \\Pr, comme dans \\Pr(A), pour un Pr droit avec l\u2019espacement d\u2019un opérateur, ou le gras de tableau noir \\mathbb{P}(A) avec \\usepackage{amssymb}. Pour une probabilité conditionnelle, écrivez P(A \\mid B) ; \\mid espace correctement la barre, contrairement à un simple |.",
        },
        {
          question: "Comment écrire l\u2019opérateur d\u2019espérance en LaTeX ?",
          answer:
            "Écrivez \\mathbb{E}[X] (amssymb) pour un E en gras de tableau noir, ou \\operatorname{E}[X] (amsmath) pour un E droit. Pour le réutiliser, déclarez-le une fois dans le préambule avec \\DeclareMathOperator{\\E}{\\mathbb{E}}, puis écrivez \\E[X].",
        },
        {
          question: "Comment écrire la variance en LaTeX ?",
          answer:
            "La variance n\u2019a pas de commande intégrée : écrivez \\operatorname{Var}(X) avec amsmath, ou déclarez \\DeclareMathOperator{\\Var}{Var} dans le préambule et utilisez \\Var(X). L\u2019écart type est \\sigma, et la variance peut aussi s\u2019écrire \\sigma^2.",
        },
      ],
    },

    greek: {
      title: "Lettres grecques en LaTeX : l\u2019alphabet grec complet",
      intro: (
        <IntroP>
          En LaTeX, les lettres grecques s&rsquo;écrivent en mode mathématique avec une barre
          oblique inverse suivie du nom de la lettre : <Cmd>{"\\alpha"}</Cmd>,{" "}
          <Cmd>{"\\beta"}</Cmd>, <Cmd>{"\\gamma"}</Cmd>, <Cmd>{"\\pi"}</Cmd>. Mettez une majuscule
          au nom pour obtenir la forme majuscule, par exemple <Cmd>{"\\Gamma"}</Cmd>,{" "}
          <Cmd>{"\\Delta"}</Cmd> et <Cmd>{"\\Omega"}</Cmd> ; les majuscules identiques aux lettres
          latines, comme Alpha et Bêta, n&rsquo;ont pas de commande : on tape simplement A et B.
          Plusieurs lettres ont des variantes : <Cmd>{"\\varepsilon"}</Cmd>,{" "}
          <Cmd>{"\\vartheta"}</Cmd>, <Cmd>{"\\varphi"}</Cmd> et <Cmd>{"\\varsigma"}</Cmd>. Toutes
          sont intégrées. Le tableau présente les lettres grecques les plus utilisées ;
          l&rsquo;alphabet grec complet en LaTeX suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : les lettres grecques les plus utilisées",
      use: {
        "\\alpha": "Alpha",
        "\\beta": "Bêta",
        "\\gamma": "Gamma (\\Gamma en majuscule)",
        "\\delta": "Delta (\\Delta en majuscule)",
        "\\epsilon": "Epsilon ϵ (\\varepsilon pour ε)",
        "\\theta": "Thêta (variante \\vartheta, \\Theta en majuscule)",
        "\\lambda": "Lambda (\\Lambda en majuscule)",
        "\\mu": "Mu",
        "\\pi": "Pi (\\Pi en majuscule)",
        "\\sigma": "Sigma (\\Sigma en majuscule)",
        "\\phi": "Phi ϕ (\\varphi pour φ, \\Phi en majuscule)",
        "\\omega": "Oméga (\\Omega en majuscule)",
      },
      faqHeading: "Questions fréquentes sur les lettres grecques en LaTeX",
      faq: [
        {
          question: "Comment écrire des lettres grecques en LaTeX ?",
          answer:
            "Tapez une barre oblique inverse suivie du nom de la lettre en mode mathématique : $\\alpha$, $\\beta$, $\\gamma$, $\\theta$, $\\pi$. Pour la majuscule, mettez une majuscule à la première lettre : \\Gamma, \\Delta, \\Theta, \\Lambda, \\Xi, \\Pi, \\Sigma, \\Upsilon, \\Phi, \\Psi, \\Omega. Aucun paquet n\u2019est nécessaire.",
        },
        {
          question: "Pourquoi n\u2019y a-t-il pas de commande \\Alpha en LaTeX ?",
          answer:
            "Les majuscules Alpha, Bêta, Epsilon, Zêta, Êta, Iota, Kappa, Mu, Nu, Omicron, Rhô, Tau et Khi sont identiques à des lettres latines ; LaTeX ne les définit donc pas : tapez A, B, E, etc. De même, l\u2019omicron minuscule est simplement o.",
        },
        {
          question: "Comment mettre une lettre grecque en gras en LaTeX ?",
          answer:
            "Utilisez \\boldsymbol{\\alpha} d\u2019amsmath ou \\bm{\\alpha} du paquet bm. \\mathbf n\u2019agit que sur les lettres latines, les chiffres et les majuscules grecques : \\mathbf{\\alpha} laisse donc l\u2019alpha inchangé.",
        },
      ],
    },

    quantifiers: {
      title: "Quantificateurs en LaTeX : pour tout, il existe et appartient à",
      intro: (
        <IntroP>
          Les quantificateurs en LaTeX sont <Cmd>{"\\forall"}</Cmd> (pour tout, ∀) et{" "}
          <Cmd>{"\\exists"}</Cmd> (il existe, ∃), tous deux intégrés ; <Cmd>{"\\nexists"}</Cmd>,
          pour « il n&rsquo;existe pas », vient d&rsquo;amssymb, et l&rsquo;existence unique
          s&rsquo;écrit <Cmd>{"\\exists!"}</Cmd>. Les énoncés quantifiés les combinent
          généralement avec l&rsquo;appartenance, <Cmd>{"\\in"}</Cmd>, et un séparateur comme une
          virgule ou un deux-points : <Cmd>{"\\forall x \\in \\mathbb{R},\\ x^2 \\geq 0"}</Cmd>. La
          négation est <Cmd>{"\\neg"}</Cmd>, l&rsquo;implication et l&rsquo;équivalence sont{" "}
          <Cmd>{"\\implies"}</Cmd> et <Cmd>{"\\iff"}</Cmd>. Le tableau présente les symboles de
          quantificateurs les plus utilisés, avec le paquet requis pour chacun ; la liste complète
          suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : quantificateurs et connecteurs",
      use: {
        "\\forall": "Pour tout",
        "\\exists": "Il existe",
        "\\nexists": "Il n\u2019existe pas",
        "\\exists!": "Il existe un unique",
        "\\forall x \\in A": "Pour tout x dans A",
        "\\in": "Appartient à",
        "\\notin": "N\u2019appartient pas à",
        "\\neg": "Non",
        "\\land": "Et",
        "\\lor": "Ou",
        "\\implies": "Implique",
        "\\iff": "Si et seulement si",
      },
      faqHeading: "Questions fréquentes sur les quantificateurs en LaTeX",
      faq: [
        {
          question: "Comment écrire « pour tout » en LaTeX ?",
          answer:
            "Utilisez \\forall en mode mathématique : $\\forall x \\in \\mathbb{R}$ affiche ∀x ∈ ℝ. La commande est intégrée. Ajoutez un séparateur après la variable liée, par exemple \\forall x,\\ P(x) ou \\forall x : P(x), pour garder la formule lisible.",
        },
        {
          question: "Comment écrire « il existe » et « il n\u2019existe pas » en LaTeX ?",
          answer:
            "« Il existe » s\u2019écrit \\exists (∃), intégré. « Il n\u2019existe pas » s\u2019écrit \\nexists (∄), qui nécessite \\usepackage{amssymb} ; \\not\\exists fonctionne aussi sans paquet, mais le rendu est moins soigné. Pour l\u2019existence unique, écrivez \\exists!.",
        },
        {
          question: "Comment écrire « tel que » en LaTeX ?",
          answer:
            "Dans une définition en compréhension, utilisez une barre verticale ou un deux-points : \\{ x \\in A \\mid x > 0 \\} ou \\{ x : x > 0 \\} ; \\mid donne le bon espacement. Dans un énoncé quantifié, on utilise couramment une virgule ou \\text{ tel que }, comme dans \\exists x \\in A \\text{ tel que } x > 0.",
        },
      ],
    },

    boolean: {
      title: "Symboles d\u2019algèbre booléenne en LaTeX : ET, OU, XOR",
      intro: (
        <IntroP>
          Les symboles d&rsquo;algèbre booléenne en LaTeX reprennent les connecteurs logiques : le
          symbole ET est <Cmd>\land</Cmd> (&and;), le symbole OU est <Cmd>\lor</Cmd> (&or;) et la
          négation NON est <Cmd>\lnot</Cmd> (&not;). Le XOR (ou exclusif) s&rsquo;écrit{" "}
          <Cmd>\oplus</Cmd> (&oplus;), ou <Cmd>\veebar</Cmd> avec amssymb. L&rsquo;implication et
          l&rsquo;équivalence sont <Cmd>\Rightarrow</Cmd> et <Cmd>\iff</Cmd>, les constantes vrai
          et faux sont <Cmd>\top</Cmd> et <Cmd>\bot</Cmd>, et les quantificateurs sont{" "}
          <Cmd>\forall</Cmd> et <Cmd>\exists</Cmd>. Tous s&rsquo;utilisent en mode mathématique.
          Le tableau présente les commandes les plus utilisées, avec le paquet requis pour
          chacune ; la liste complète des symboles de portes logiques suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : les opérateurs booléens les plus utilisés",
      use: {
        "\\land": "ET (alias \\wedge)",
        "\\lor": "OU (alias \\vee)",
        "\\lnot": "NON (alias \\neg)",
        "\\overline{A}": "NON, notation avec barre",
        "\\oplus": "XOR (ou exclusif)",
        "\\veebar": "XOR, notation logique",
        "\\barwedge": "NAND (NON-ET)",
        "\\Rightarrow": "Implique",
        "\\iff": "Si et seulement si (équivalence)",
        "\\top": "Vrai, 1",
        "\\bot": "Faux, 0",
        "\\forall x \\, \\exists y": "Pour tout, il existe",
      },
      faqHeading: "Questions fréquentes sur l\u2019algèbre booléenne en LaTeX",
      faq: [
        {
          question: "Comment écrire les symboles ET et OU en LaTeX ?",
          answer:
            "ET (∧) s\u2019écrit \\land ou son alias \\wedge, et OU (∨) \\lor ou \\vee. Les deux sont intégrés et s\u2019utilisent en mode mathématique : $A \\land B$, $A \\lor B$. NON s\u2019écrit \\lnot ou \\neg. En notation de circuits, vous pouvez aussi écrire A \\cdot B pour ET, A + B pour OU et \\overline{A} pour NON.",
        },
        {
          question: "Comment écrire XOR en LaTeX ?",
          answer:
            "Utilisez \\oplus (⊕), qui est intégré : $A \\oplus B$. Les ouvrages de logique emploient parfois \\veebar (⊻), qui nécessite \\usepackage{amssymb}. Le XNOR s\u2019écrit généralement \\odot ou \\overline{A \\oplus B}.",
        },
        {
          question: "Quel paquet faut-il pour les symboles d\u2019algèbre booléenne en LaTeX ?",
          answer:
            "Aucun pour les plus courants : \\land, \\lor, \\lnot, \\oplus, \\Rightarrow, \\iff, \\top, \\bot, \\forall et \\exists sont intégrés. Chargez amssymb pour \\veebar et \\barwedge, et amsmath pour \\implies.",
        },
      ],
    },

    brackets: {
      title: "Crochets en LaTeX : accolades, chevrons, partie entière et normes",
      intro: (
        <IntroP>
          Les délimiteurs de LaTeX sont de deux sortes : ceux que l&rsquo;on tape directement,
          comme <Cmd>{"("}</Cmd>, <Cmd>{")"}</Cmd>, <Cmd>{"["}</Cmd> et <Cmd>{"]"}</Cmd>, et ceux
          qui demandent une commande, comme <Cmd>{"\\{"}</Cmd> et <Cmd>{"\\}"}</Cmd> pour les
          accolades, <Cmd>{"\\langle"}</Cmd> et <Cmd>{"\\rangle"}</Cmd> pour les chevrons,{" "}
          <Cmd>{"\\lfloor"}</Cmd> et <Cmd>{"\\rfloor"}</Cmd> pour la partie entière, et{" "}
          <Cmd>{"\\lVert"}</Cmd> et <Cmd>{"\\rVert"}</Cmd> pour une norme. Placez{" "}
          <Cmd>{"\\left"}</Cmd> et <Cmd>{"\\right"}</Cmd> devant n&rsquo;importe quelle paire et
          LaTeX ajuste la taille des délimiteurs à leur contenu, une fraction par exemple. Les
          doubles crochets nécessitent le paquet stmaryrd. Le tableau présente les crochets et
          délimiteurs les plus utilisés, avec le paquet requis pour chacun ; la liste complète suit
          plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : les crochets les plus utilisés",
      use: {
        "\\left( \\frac{a}{b} \\right)": "Parenthèses qui s\u2019adaptent au contenu",
        "\\{ x \\}": "Accolades (échappées)",
        "\\langle x \\rangle": "Chevrons, produit scalaire",
        "\\lfloor x \\rfloor": "Partie entière (par défaut)",
        "\\lceil x \\rceil": "Partie entière par excès",
        "\\lvert x \\rvert": "Valeur absolue",
        "\\lVert x \\rVert": "Norme",
        "\\llbracket x \\rrbracket": "Doubles crochets",
        "\\bigl( x \\bigr)": "Tailles manuelles : \\big, \\Big, \\bigg, \\Bigg",
        "[a, b)": "Intervalle semi-ouvert",
        "\\underbrace{a + b}_{n}": "Accolade sous une expression (\\overbrace au-dessus)",
      },
      faqHeading: "Questions fréquentes sur les crochets en LaTeX",
      faq: [
        {
          question: "Comment écrire des accolades en LaTeX ?",
          answer:
            "Les accolades servent à grouper en LaTeX, donc un { ou un } seul n\u2019est pas imprimé. Échappez-les : \\{ et \\} fonctionnent en mode texte comme en mode mathématique, par exemple $\\{1, 2, 3\\}$. Utilisez \\left\\{ et \\right\\} pour des accolades qui grandissent avec leur contenu ; \\lbrace et \\rbrace en sont des équivalents nommés.",
        },
        {
          question: "Comment écrire des chevrons en LaTeX ?",
          answer:
            "Utilisez \\langle et \\rangle, comme dans $\\langle u, v \\rangle$. N\u2019utilisez pas les touches < et > : ce sont des symboles de relation, avec une autre forme et un autre espacement. Pour un contenu haut, écrivez \\left\\langle ... \\right\\rangle.",
        },
        {
          question: "Comment écrire des doubles crochets en LaTeX ?",
          answer:
            "Chargez \\usepackage{stmaryrd} et écrivez \\llbracket x \\rrbracket pour les doubles crochets ⟦x⟧ utilisés en sémantique et pour les intervalles d\u2019entiers. Sans le paquet, [\\![ x ]\\!] les imite en rapprochant deux crochets avec une espace fine négative.",
        },
      ],
    },

    calculus: {
      title: "Symboles d\u2019analyse en LaTeX : dérivées, intégrales et limites",
      intro: (
        <IntroP>
          Les principaux symboles d&rsquo;analyse en LaTeX sont tous intégrés. Une dérivée en LaTeX
          est une fraction, <Cmd>{"\\frac{dy}{dx}"}</Cmd>, ou un prime, <Cmd>{"f'(x)"}</Cmd> ; une
          dérivée partielle utilise <Cmd>{"\\partial"}</Cmd>, comme dans{" "}
          <Cmd>{"\\frac{\\partial f}{\\partial x}"}</Cmd> ; une intégrale s&rsquo;écrit{" "}
          <Cmd>{"\\int_a^b f(x)\\,dx"}</Cmd> ; et une limite <Cmd>{"\\lim_{x \\to 0}"}</Cmd>. Les
          intégrales multiples comme <Cmd>{"\\iint"}</Cmd> et <Cmd>{"\\iiint"}</Cmd> viennent
          d&rsquo;amsmath, et le paquet physics ajoute des raccourcis comme <Cmd>{"\\dv"}</Cmd> et{" "}
          <Cmd>{"\\pdv"}</Cmd>. Le tableau présente les symboles d&rsquo;analyse les plus utilisés,
          avec le paquet requis pour chacun ; la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : dérivées, intégrales et limites",
      use: {
        "\\frac{dy}{dx}": "Dérivée (notation de Leibniz)",
        "f'(x)": "Dérivée (notation prime) ; f''(x) pour la dérivée seconde",
        "\\frac{d^2 y}{dx^2}": "Dérivée seconde",
        "\\frac{\\partial f}{\\partial x}": "Dérivée partielle",
        "\\dot{x}": "Dérivée par rapport au temps (point de Newton) ; \\ddot{x} pour la seconde",
        "\\int_a^b f(x)\\,dx": "Intégrale définie",
        "\\iint_D f\\,dA": "Intégrale double (\\iiint pour une triple)",
        "\\oint_C": "Intégrale curviligne fermée (sur un contour)",
        "\\lim_{x \\to 0}": "Limite",
        "\\nabla f": "Gradient",
        "\\dv{f}{x}": "Raccourci pour la dérivée",
        "\\pdv{f}{x}": "Raccourci pour la dérivée partielle",
      },
      faqHeading: "Questions fréquentes sur les symboles d\u2019analyse en LaTeX",
      faq: [
        {
          question: "Comment écrire une dérivée en LaTeX ?",
          answer:
            "Écrivez-la comme une fraction en mode mathématique : $\\frac{dy}{dx}$ pour dy/dx et $\\frac{d^2y}{dx^2}$ pour la dérivée seconde. La notation prime s\u2019écrit f'(x) et f''(x), et la notation pointée de Newton \\dot{x} et \\ddot{x}. Toutes sont intégrées ; le paquet physics ajoute le raccourci \\dv{y}{x}.",
        },
        {
          question: "Comment écrire une dérivée partielle en LaTeX ?",
          answer:
            "Utilisez le symbole intégré \\partial dans une fraction : $\\frac{\\partial f}{\\partial x}$, et $\\frac{\\partial^2 f}{\\partial x \\partial y}$ pour une dérivée seconde croisée. Avec \\usepackage{physics}, \\pdv{f}{x} et \\pdv{f}{x}{y} donnent le même résultat.",
        },
        {
          question: "Comment écrire une intégrale avec ses bornes en LaTeX ?",
          answer:
            "Utilisez \\int avec un indice et un exposant : $\\int_a^b f(x)\\,dx$. Ajoutez \\limits (\\int\\limits_a^b) pour placer les bornes au-dessus et au-dessous du signe. Pour les intégrales doubles et triples, chargez amsmath et utilisez \\iint et \\iiint, qui espacent correctement les signes ; \\oint donne une intégrale sur un contour fermé.",
        },
      ],
    },

    combinatorics: {
      title: "Coefficient binomial et factorielle en LaTeX : symboles de combinatoire",
      intro: (
        <IntroP>
          Pour écrire « k parmi n » en LaTeX, chargez amsmath et utilisez{" "}
          <Cmd>\binom{"{n}{k}"}</Cmd>, qui affiche le coefficient binomial entre parenthèses et
          adapte sa taille au mode en ligne ou hors texte ; <Cmd>\dbinom</Cmd> et{" "}
          <Cmd>\tbinom</Cmd> imposent la grande ou la petite taille. Une factorielle en LaTeX ne
          demande aucune commande : <Cmd>n!</Cmd> est simplement la lettre suivie d&rsquo;un point
          d&rsquo;exclamation, et la formule du coefficient binomial s&rsquo;écrit donc{" "}
          <Cmd>\frac{"{n!}{k!(n-k)!}"}</Cmd>. Le tableau présente les commandes de combinatoire les
          plus utilisées, avec le paquet requis pour chacune ; la liste complète des symboles suit
          plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : binômes, factorielles et permutations",
      use: {
        "\\binom{n}{k}": "k parmi n (coefficient binomial)",
        "\\dbinom{n}{k}": "Binôme en grande taille, même en ligne",
        "\\tbinom{n}{k}": "Binôme en taille texte, même hors texte",
        "{n \\choose k}": "Syntaxe TeX de base (à éviter avec amsmath)",
        "n!": "Factorielle",
        "n!!": "Double factorielle",
        "\\frac{n!}{k!(n-k)!}": "Formule du coefficient binomial",
        "\\binom{n}{k_1, k_2, \\ldots, k_m}": "Coefficient multinomial",
        "P(n, k) = \\frac{n!}{(n-k)!}": "Arrangements (nPr)",
        "n^{\\underline{k}}": "Factorielle décroissante",
      },
      faqHeading: "Questions fréquentes sur la combinatoire en LaTeX",
      faq: [
        {
          question: "Comment écrire « k parmi n » en LaTeX ?",
          answer:
            "Chargez amsmath et écrivez \\binom{n}{k}, qui affiche n au-dessus de k entre parenthèses et adapte sa taille au mode en ligne ou hors texte. Utilisez \\dbinom{n}{k} pour imposer la grande taille et \\tbinom{n}{k} pour la petite taille du texte. La forme TeX de base {n \\choose k} fonctionne aussi, mais amsmath la déconseille.",
        },
        {
          question: "Comment écrire une factorielle en LaTeX ?",
          answer:
            "Une factorielle ne demande aucune commande : écrivez n! en mode mathématique. La double factorielle est n!!, et pour une expression, mettez-la entre parenthèses, comme dans (n+1)!. La formule du coefficient binomial est \\frac{n!}{k!(n-k)!}.",
        },
        {
          question: "Comment écrire un coefficient multinomial en LaTeX ?",
          answer:
            "Réutilisez \\binom avec une liste dans l\u2019argument inférieur : \\binom{n}{k_1, k_2, \\ldots, k_m}. Ou écrivez la formule développée \\frac{n!}{k_1!\\,k_2!\\cdots k_m!}.",
        },
      ],
    },

    complex: {
      title: "Symbole des nombres complexes et conjugué en LaTeX",
      intro: (
        <IntroP>
          Le symbole de l&rsquo;ensemble des nombres complexes est le C ajouré &#8450;, qui
          s&rsquo;écrit <Cmd>\mathbb{"{C}"}</Cmd> en LaTeX avec le paquet amssymb. Le conjugué
          d&rsquo;un nombre complexe s&rsquo;écrit <Cmd>\bar{"{z}"}</Cmd> pour une seule lettre ou{" "}
          <Cmd>\overline{"{z}"}</Cmd> pour une expression entière, et les physiciens écrivent{" "}
          <Cmd>z^*</Cmd>. Les parties réelle et imaginaire sont <Cmd>\Re</Cmd> et <Cmd>\Im</Cmd>,
          ou la forme droite <Cmd>\operatorname{"{Re}"}</Cmd> ; le module est <Cmd>|z|</Cmd> et
          l&rsquo;argument <Cmd>\arg z</Cmd>. Le tableau présente les symboles des nombres
          complexes les plus utilisés, avec le paquet requis pour chacun ; la liste complète suit
          plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : notation des nombres complexes",
      use: {
        "\\mathbb{C}": "Ensemble des nombres complexes",
        "z = a + bi": "Forme algébrique",
        "\\bar{z}": "Conjugué (une seule lettre)",
        "\\overline{z + w}": "Conjugué d\u2019une expression",
        "z^*": "Conjugué, notation des physiciens",
        "\\Re(z)": "Partie réelle, ℜ gothique",
        "\\Im(z)": "Partie imaginaire, ℑ gothique",
        "\\operatorname{Re}(z)": "Partie réelle, en romain droit (de même Im)",
        "|z|": "Module (valeur absolue)",
        "\\arg z": "Argument",
        "re^{i\\theta}": "Forme exponentielle (polaire)",
        "\\mathrm{i}": "Unité imaginaire en romain droit",
      },
      faqHeading: "Questions fréquentes sur les nombres complexes en LaTeX",
      faq: [
        {
          question: "Quel est le symbole des nombres complexes ?",
          answer:
            "L\u2019ensemble des nombres complexes se note par un C ajouré, ℂ. En LaTeX, écrivez \\mathbb{C} avec \\usepackage{amssymb} (ou amsfonts), comme dans z \\in \\mathbb{C}. Les nombres réels s\u2019écrivent \\mathbb{R} dans le même style.",
        },
        {
          question: "Comment écrire le conjugué d\u2019un nombre complexe en LaTeX ?",
          answer:
            "Utilisez \\bar{z} pour une seule lettre et \\overline{z + w} pour une expression plus longue, car \\overline s\u2019étire sur tout son argument. Les physiciens et les ingénieurs écrivent souvent z^* à la place, et la transconjuguée d\u2019une matrice s\u2019écrit A^\\dagger ou A^*.",
        },
        {
          question: "Comment écrire les parties réelle et imaginaire en LaTeX ?",
          answer:
            "Les commandes intégrées \\Re et \\Im affichent les lettres gothiques ℜ et ℑ. Pour les formes droites Re et Im qu\u2019emploient la plupart des textes modernes, écrivez \\operatorname{Re}(z) et \\operatorname{Im}(z) avec amsmath, ou redéfinissez une fois les commandes d\u2019origine avec \\renewcommand{\\Re}{\\operatorname{Re}}.",
        },
      ],
    },

    "computer-science": {
      title: "Symboles d\u2019informatique en LaTeX : notation grand O, partie entière et algorithmes",
      intro: (
        <IntroP>
          La plupart des symboles d&rsquo;informatique en LaTeX sont des commandes mathématiques
          ordinaires. La notation grand O s&rsquo;écrit <Cmd>{"O(n \\log n)"}</Cmd> ou, dans de
          nombreux articles, sous la forme calligraphique <Cmd>{"\\mathcal{O}(n)"}</Cmd> ; ses
          cousines sont <Cmd>{"\\Omega(n)"}</Cmd>, <Cmd>{"\\Theta(n)"}</Cmd> et le petit o{" "}
          <Cmd>{"o(n)"}</Cmd>. Les parties entières par défaut et par excès sont{" "}
          <Cmd>{"\\lfloor x \\rfloor"}</Cmd> et <Cmd>{"\\lceil x \\rceil"}</Cmd>, le XOR est{" "}
          <Cmd>{"\\oplus"}</Cmd>, l&rsquo;affectation en pseudo-code est <Cmd>{"\\gets"}</Cmd>, et
          une définition avec := s&rsquo;écrit le plus proprement avec <Cmd>{"\\coloneqq"}</Cmd> du
          paquet mathtools. Le tableau présente les symboles d&rsquo;informatique les plus
          utilisés, avec le paquet requis pour chacun ; la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : complexité, arrondis et algorithmes",
      use: {
        "O(n \\log n)": "Grand O (borne supérieure)",
        "\\mathcal{O}(n)": "Grand O, style calligraphique",
        "\\Omega(n)": "Grand Oméga (borne inférieure)",
        "\\Theta(n^2)": "Grand Thêta (borne exacte)",
        "o(n)": "Petit o",
        "\\lfloor \\log_2 n \\rfloor": "Partie entière du logarithme en base 2",
        "\\lceil n/2 \\rceil": "Partie entière par excès",
        "a \\bmod n": "Modulo comme opérateur binaire",
        "\\oplus": "XOR (ou exclusif)",
        "x \\gets x + 1": "Affectation en pseudo-code",
        "\\coloneqq": "Défini comme (:=)",
        "\\{0,1\\}^*": "Toutes les chaînes binaires (étoile de Kleene)",
      },
      faqHeading: "Questions fréquentes sur les symboles d\u2019informatique en LaTeX",
      faq: [
        {
          question: "Comment écrire la notation grand O en LaTeX ?",
          answer:
            "Tapez O(n) en mode mathématique : $O(n \\log n)$. Beaucoup d\u2019auteurs préfèrent la forme calligraphique $\\mathcal{O}(n)$, qui ne nécessite aucun paquet. Grand Oméga et grand Thêta utilisent les majuscules grecques \\Omega(n) et \\Theta(n), et le petit o s\u2019écrit o(n). Écrivez \\log et non log, pour que le nom de la fonction soit en romain droit.",
        },
        {
          question: "Comment écrire la partie entière par défaut et par excès en LaTeX ?",
          answer:
            "Utilisez les délimiteurs intégrés \\lfloor x \\rfloor pour ⌊x⌋ et \\lceil x \\rceil pour ⌈x⌉. Pour un contenu haut, placez \\left et \\right devant, comme dans \\left\\lfloor \\frac{n}{2} \\right\\rfloor, ou définissez \\floor et \\ceil avec \\DeclarePairedDelimiter de mathtools.",
        },
        {
          question: "Comment écrire modulo en LaTeX ?",
          answer:
            "Utilisez \\bmod pour l\u2019opérateur binaire, a \\bmod n, et \\pmod{n} pour une congruence, comme dans a \\equiv b \\pmod{n}, qui affiche (mod n) avec l\u2019espacement correct. Les deux sont intégrés ; amsmath ajoute \\mod{n} et \\pod{n} pour d\u2019autres styles d\u2019espacement.",
        },
      ],
    },

    "differential-geometry": {
      title: "Symboles de géométrie différentielle en LaTeX : formes, connexions et courbure",
      intro: (
        <IntroP>
          Les symboles de géométrie différentielle en LaTeX reposent sur quelques commandes
          intégrées. Le produit extérieur de formes s&rsquo;écrit{" "}
          <Cmd>{"\\alpha \\wedge \\beta"}</Cmd>, avec <Cmd>{"\\bigwedge^k V"}</Cmd> pour la
          puissance extérieure ; la différentielle extérieure est <Cmd>{"d\\omega"}</Cmd> ; la
          dérivée covariante est <Cmd>{"\\nabla_X Y"}</Cmd> ; et la dérivée de Lie{" "}
          <Cmd>{"\\mathcal{L}_X"}</Cmd>. Les symboles de Christoffel et les tenseurs de courbure
          sont des lettres indicées, <Cmd>{"\\Gamma^k_{ij}"}</Cmd> et <Cmd>{"R^l{}_{ijk}"}</Cmd>, et
          l&rsquo;espace tangent en un point s&rsquo;écrit <Cmd>{"T_pM"}</Cmd>. Le tableau présente
          les symboles de géométrie différentielle les plus utilisés ; tous sont intégrés, et la
          liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : variétés, formes et courbure",
      use: {
        "T_pM": "Espace tangent en p",
        "T^*_pM": "Espace cotangent en p",
        "\\nabla_X Y": "Dérivée covariante (connexion)",
        "\\Gamma^k_{ij}": "Symboles de Christoffel",
        "R^l{}_{ijk}": "Tenseur de courbure de Riemann",
        "g_{ij}": "Tenseur métrique",
        "\\alpha \\wedge \\beta": "Produit extérieur de formes",
        "\\bigwedge^k V": "Puissance extérieure, k-formes",
        "d\\omega": "Différentielle extérieure",
        "\\mathcal{L}_X": "Dérivée de Lie",
        "[X, Y]": "Crochet de Lie de champs de vecteurs",
        "\\star\\omega": "Étoile de Hodge",
      },
      faqHeading: "Questions fréquentes sur la géométrie différentielle en LaTeX",
      faq: [
        {
          question: "Comment écrire le produit extérieur en LaTeX ?",
          answer:
            "Utilisez \\wedge entre les formes, $\\alpha \\wedge \\beta$ ; c\u2019est un opérateur binaire avec l\u2019espacement correct. Pour la puissance extérieure ou un grand produit extérieur sur un ensemble d\u2019indices, utilisez le grand opérateur \\bigwedge, comme dans \\bigwedge^k V ou \\bigwedge_{i=1}^{n} dx_i. Les deux sont intégrés.",
        },
        {
          question: "Comment écrire la dérivée covariante en LaTeX ?",
          answer:
            "Écrivez \\nabla avec la direction en indice : $\\nabla_X Y$, ou \\nabla_\\mu V^\\nu en notation indicielle. Les dérivées partielles selon les coordonnées s\u2019écrivent \\partial_\\mu, et la notation avec point-virgule V^\\nu{}_{;\\mu} est aussi courante dans les textes de physique.",
        },
        {
          question: "Comment écrire la dérivée de Lie et la différentielle extérieure en LaTeX ?",
          answer:
            "La dérivée de Lie est un L calligraphique avec un indice, \\mathcal{L}_X T. La différentielle extérieure est un simple d, d\\omega ; certains auteurs l\u2019écrivent en romain droit avec \\mathrm{d}\\omega pour la distinguer d\u2019une variable.",
        },
      ],
    },

    finance: {
      title: "Symboles monétaires et financiers en LaTeX : dollar, euro et formules",
      intro: (
        <IntroP>
          Les symboles monétaires en LaTeX demandent un peu d&rsquo;attention, car le signe dollar
          ouvre le mode mathématique. Échappez-le en <Cmd>{"\\$"}</Cmd> pour afficher un dollar ; la
          livre sterling s&rsquo;écrit <Cmd>{"\\pounds"}</Cmd>, et l&rsquo;euro{" "}
          <Cmd>{"\\texteuro"}</Cmd>, ou <Cmd>{"\\euro"}</Cmd> du paquet eurosym pour le dessin
          officiel. Le pourcentage s&rsquo;écrit <Cmd>{"\\%"}</Cmd>, car un % seul commence un
          commentaire, et le pour mille <Cmd>{"\\textperthousand"}</Cmd>. Les formules financières
          comme la valeur actuelle nette ou les intérêts composés sont des mathématiques ordinaires,
          construites avec <Cmd>{"\\sum"}</Cmd> et <Cmd>{"\\frac"}</Cmd>. Le tableau présente les
          symboles financiers les plus utilisés, avec le paquet requis pour chacun ; la liste
          complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : devises, pourcentages et formules",
      use: {
        "\\$": "Signe dollar",
        "\\pounds": "Livre sterling",
        "\\texteuro": "Signe euro (textcomp, intégré)",
        "\\euro": "Signe euro officiel",
        "\\textyen": "Signe yen (textcomp, intégré)",
        "\\%": "Pourcentage",
        "\\textperthousand": "Pour mille (textcomp, intégré)",
        "\\mathrm{NPV} = \\sum_{t=0}^{n} \\frac{C_t}{(1+r)^t}": "Valeur actuelle nette (VAN)",
        "A = P\\left(1 + \\frac{r}{n}\\right)^{nt}": "Intérêts composés",
        "A = Pe^{rt}": "Capitalisation continue",
        "\\pm": "Plus ou moins",
      },
      faqHeading: "Questions fréquentes sur les symboles financiers en LaTeX",
      faq: [
        {
          question: "Comment écrire un signe dollar en LaTeX ?",
          answer:
            "Échappez-le : \\$ affiche $ en mode texte comme en mode mathématique, par exemple \\$100. Un $ seul ouvre ou ferme le mode mathématique ; c\u2019est pourquoi un signe dollar non échappé dans un prix provoque des erreurs ou transforme le reste de la ligne en formule.",
        },
        {
          question: "Comment écrire le signe euro en LaTeX ?",
          answer:
            "\\texteuro (de textcomp, désormais intégré au noyau LaTeX) affiche le signe euro de la police courante sans paquet supplémentaire. Pour le dessin officiel de l\u2019UE, chargez \\usepackage{eurosym} et écrivez \\euro. Avec XeLaTeX ou LuaLaTeX, vous pouvez aussi taper € directement.",
        },
        {
          question: "Comment écrire un signe pourcentage en LaTeX ?",
          answer:
            "Écrivez \\%. Un % seul commence un commentaire, et tout ce qui le suit sur la ligne disparaît du document. Pour le pour mille, utilisez \\textperthousand, et pour les nombres avec unités, le paquet siunitx propose \\qty{5}{\\percent}.",
        },
      ],
    },

    "game-theory": {
      title: "Symboles de théorie des jeux en LaTeX : stratégies, gains et équilibres",
      intro: (
        <IntroP>
          En LaTeX, la notation de la théorie des jeux se compose surtout de lettres indicées :
          l&rsquo;essentiel est d&rsquo;écrire des indices cohérents. La stratégie d&rsquo;un joueur
          est <Cmd>{"s_i"}</Cmd>, les stratégies de tous les autres sont <Cmd>{"s_{-i}"}</Cmd>, le
          gain est <Cmd>{"u_i(s_i, s_{-i})"}</Cmd>, et un équilibre de Nash se signale par une
          étoile, <Cmd>{"s^*"}</Cmd>. Les stratégies mixtes s&rsquo;écrivent{" "}
          <Cmd>{"\\sigma_i \\in \\Delta(S_i)"}</Cmd>, les préférences <Cmd>{"\\succ"}</Cmd> et{" "}
          <Cmd>{"\\succeq"}</Cmd>, et une meilleure réponse se lit mieux avec{" "}
          <Cmd>{"\\operatorname{BR}_i"}</Cmd> d&rsquo;amsmath. Les matrices de gains sont des
          tableaux construits avec array. Le tableau présente les symboles de théorie des jeux les
          plus utilisés, avec le paquet requis pour chacun ; la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : stratégies, gains et équilibres",
      use: {
        "s_i \\in S_i": "Stratégie du joueur i",
        "s_{-i}": "Stratégies de tous les autres joueurs",
        "u_i(s_i, s_{-i})": "Gain (utilité) du joueur i",
        "s^* = (s_1^*, \\ldots, s_n^*)": "Profil d\u2019équilibre de Nash",
        "\\operatorname{BR}_i(s_{-i})": "Meilleure réponse",
        "\\sigma_i \\in \\Delta(S_i)": "Stratégie mixte",
        "\\mathbb{E}[u_i(\\sigma)]": "Gain espéré",
        "a \\succ b": "Préférence stricte",
        "a \\succeq b": "Préférence large",
        "\\max_{s_i} \\min_{s_{-i}} u_i": "Valeur maximin",
        "\\phi_i(v)": "Valeur de Shapley",
        "v(S)": "Valeur de la coalition S",
      },
      faqHeading: "Questions fréquentes sur la théorie des jeux en LaTeX",
      faq: [
        {
          question: "Comment écrire une matrice de gains en LaTeX ?",
          answer:
            "Utilisez un environnement array en mode hors texte, avec un filet vertical après les étiquettes de lignes : \\begin{array}{c|cc} & L & R \\\\ \\hline U & 3,3 & 0,5 \\\\ D & 5,0 & 1,1 \\end{array}. Pour un jeu sous forme normale avec le nom des joueurs, le paquet sgame fournit un environnement game.",
        },
        {
          question: "Comment écrire s moins i (s_{-i}) en LaTeX ?",
          answer:
            "Mettez le signe moins et l\u2019indice entre accolades : s_{-i}. Sans accolades, s_-i n\u2019abaisse que le signe moins. Il en va de même pour les profils comme (s_i', s_{-i}) et les meilleures réponses BR_i(s_{-i}).",
        },
        {
          question: "Comment noter un équilibre de Nash en LaTeX ?",
          answer:
            "Utilisez une étoile en exposant : s^* pour le profil et s_i^* pour la stratégie d\u2019équilibre d\u2019un joueur. La condition d\u2019équilibre s\u2019écrit u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) pour tout s_i \\in S_i.",
        },
      ],
    },

    geometry: {
      title: "Symboles de géométrie en LaTeX : perpendiculaire, parallèle, angle et triangle",
      intro: (
        <IntroP>
          Les symboles de géométrie sont pour la plupart intégrés à LaTeX. Le symbole
          perpendiculaire, qui sert aussi pour l&rsquo;orthogonalité, est <Cmd>{"\\perp"}</Cmd> (⊥),
          parallèle s&rsquo;écrit <Cmd>{"\\parallel"}</Cmd> (∥), un angle{" "}
          <Cmd>{"\\angle ABC"}</Cmd> et un triangle <Cmd>{"\\triangle ABC"}</Cmd>. Isométrique
          (congruent) s&rsquo;écrit <Cmd>{"\\cong"}</Cmd> et semblable <Cmd>{"\\sim"}</Cmd>. Un
          segment reçoit une barre, <Cmd>{"\\overline{AB}"}</Cmd>, une demi-droite ou un vecteur une
          flèche, <Cmd>{"\\overrightarrow{AB}"}</Cmd>, et le signe degré est un petit cercle en
          exposant, <Cmd>{"90^\\circ"}</Cmd>. Seuls quelques extras, comme{" "}
          <Cmd>{"\\measuredangle"}</Cmd> et <Cmd>{"\\nparallel"}</Cmd>, nécessitent amssymb. Le
          tableau présente les symboles de géométrie les plus utilisés, avec le paquet requis pour
          chacun ; la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : les symboles de géométrie les plus utilisés",
      use: {
        "\\perp": "Perpendiculaire, orthogonal",
        "\\parallel": "Parallèle",
        "\\nparallel": "Non parallèle",
        "\\angle ABC": "Angle",
        "\\measuredangle ABC": "Angle orienté (mesure d\u2019angle)",
        "\\triangle ABC": "Triangle",
        "\\cong": "Isométrique (congruent)",
        "\\sim": "Semblable",
        "\\overline{AB}": "Segment",
        "\\overrightarrow{AB}": "Demi-droite ou vecteur",
        "\\overleftrightarrow{AB}": "Droite passant par A et B",
        "90^\\circ": "Signe degré",
      },
      faqHeading: "Questions fréquentes sur les symboles de géométrie en LaTeX",
      faq: [
        {
          question: "Comment écrire le symbole perpendiculaire ou orthogonal en LaTeX ?",
          answer:
            "Utilisez \\perp en mode mathématique : $AB \\perp CD$ affiche AB ⊥ CD. La même commande sert pour les vecteurs orthogonaux, u \\perp v, et pour l\u2019orthogonal d\u2019un sous-espace, V^\\perp. Elle est intégrée, aucun paquet n\u2019est donc nécessaire.",
        },
        {
          question: "Comment écrire un symbole de triangle en LaTeX ?",
          answer:
            "\\triangle affiche △, comme dans $\\triangle ABC$, et ne nécessite aucun paquet. amssymb ajoute le triangle plus petit \\vartriangle et le triangle plein \\blacktriangle.",
        },
        {
          question: "Comment écrire le symbole degré en LaTeX ?",
          answer:
            "En mode mathématique, écrivez un petit cercle en exposant : $90^\\circ$. En mode texte, \\textdegree affiche °, et le paquet siunitx donne un rendu homogène avec \\ang{45} ou \\qty{90}{\\degree}.",
        },
      ],
    },

    "graph-theory": {
      title: "Symboles de théorie des graphes en LaTeX : sommets, arêtes, degré et coloration",
      intro: (
        <IntroP>
          En LaTeX, la notation de la théorie des graphes repose surtout sur des lettres usuelles et
          des opérateurs intégrés. Un graphe s&rsquo;écrit <Cmd>{"G = (V, E)"}</Cmd>,
          l&rsquo;adjacence <Cmd>{"u \\sim v"}</Cmd>, le degré d&rsquo;un sommet{" "}
          <Cmd>{"\\deg(v)"}</Cmd> (l&rsquo;opérateur <Cmd>{"\\deg"}</Cmd> est intégré), et les
          graphes complets et bipartis complets <Cmd>{"K_n"}</Cmd> et <Cmd>{"K_{m,n}"}</Cmd>. Les
          invariants de graphes utilisent des lettres grecques : nombre chromatique{" "}
          <Cmd>{"\\chi(G)"}</Cmd>, nombre de clique <Cmd>{"\\omega(G)"}</Cmd>, nombre de stabilité{" "}
          <Cmd>{"\\alpha(G)"}</Cmd>, et degrés maximal et minimal <Cmd>{"\\Delta(G)"}</Cmd> et{" "}
          <Cmd>{"\\delta(G)"}</Cmd>. Pour dessiner le graphe lui-même, utilisez TikZ. Le tableau
          présente les symboles de théorie des graphes les plus utilisés ; tous sont intégrés, et
          la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : les symboles de théorie des graphes les plus utilisés",
      use: {
        "G = (V, E)": "Graphe d\u2019ensemble de sommets V et d\u2019ensemble d\u2019arêtes E",
        "u \\sim v": "u est adjacent à v",
        "\\deg(v)": "Degré d\u2019un sommet",
        "\\deg^{+}(v)": "Degré sortant (\\deg^{-} pour le degré entrant)",
        "N(v)": "Voisinage de v",
        "K_n": "Graphe complet",
        "K_{m,n}": "Graphe biparti complet",
        "\\chi(G)": "Nombre chromatique",
        "\\omega(G)": "Nombre de clique",
        "\\alpha(G)": "Nombre de stabilité",
        "\\Delta(G)": "Degré maximal (\\delta(G) pour le minimal)",
        "G \\cong H": "Graphes isomorphes",
      },
      faqHeading: "Questions fréquentes sur la théorie des graphes en LaTeX",
      faq: [
        {
          question: "Comment écrire le degré d\u2019un sommet en LaTeX ?",
          answer:
            "Utilisez l\u2019opérateur intégré \\deg, qui affiche deg en romain droit avec l\u2019espacement correct : $\\deg(v)$. Pour les graphes orientés, \\deg^{+}(v) et \\deg^{-}(v) donnent le degré sortant et le degré entrant, et le lemme des poignées de main s\u2019écrit \\sum_{v \\in V} \\deg(v) = 2|E|.",
        },
        {
          question: "Comment dessiner un graphe en LaTeX ?",
          answer:
            "Chargez \\usepackage{tikz}, placez les sommets avec \\node[circle,draw] (a) at (0,0) {a}; et reliez-les avec \\draw (a) -- (b);. Pour des graphes plus grands, la bibliothèque graphs de TikZ et le paquet tkz-graph raccourcissent la syntaxe.",
        },
        {
          question: "Comment écrire le nombre chromatique en LaTeX ?",
          answer:
            "Le nombre chromatique s\u2019écrit \\chi(G), avec la lettre grecque chi. L\u2019indice chromatique (nombre chromatique des arêtes) se note souvent \\chi'(G), le nombre de clique \\omega(G) et le nombre de stabilité \\alpha(G). Tous sont intégrés.",
        },
      ],
    },

    latin: {
      title: "Lettres latines en LaTeX : lettres spéciales et accents",
      intro: (
        <IntroP>
          Les lettres latines au-delà de A à Z, comme les ligatures æ et œ, les lettres
          scandinaves ø et å, le ß allemand et le ł polonais, ont chacune une courte commande
          LaTeX : <Cmd>\ae</Cmd>, <Cmd>\oe</Cmd>, <Cmd>\o</Cmd>, <Cmd>\aa</Cmd>, <Cmd>\ss</Cmd> et{" "}
          <Cmd>\l</Cmd>, avec des versions majuscules comme <Cmd>\AE</Cmd> et <Cmd>\O</Cmd>. Les
          lettres accentuées combinent une commande d&rsquo;accent et la lettre de base, par
          exemple <Cmd>\&apos;e</Cmd> pour é et <Cmd>\~n</Cmd> pour ñ. Toutes ces commandes sont
          intégrées et fonctionnent en mode texte. Le tableau présente les lettres latines les plus
          utilisées ; la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : lettres spéciales et accents",
      use: {
        "\\ae": "Ligature æ (\\AE pour Æ)",
        "\\oe": "Ligature œ, e dans l\u2019o (\\OE pour Œ)",
        "\\o": "o barré ø (\\O pour Ø)",
        "\\aa": "a rond en chef å (\\AA pour Å)",
        "\\ss": "Eszett allemand ß",
        "\\l": "ł polonais (\\L pour Ł)",
        "\\i": "i sans point, base pour les accents",
        "\\'e": "Accent aigu é",
        "\\\"o": "Tréma ö",
        "\\~n": "Tilde ñ",
        "\\c{c}": "Cédille ç",
        "\\v{s}": "Caron (háček) š",
      },
      faqHeading: "Questions fréquentes sur les lettres latines en LaTeX",
      faq: [
        {
          question: "Comment taper des lettres latines spéciales comme æ, ø et ß en LaTeX ?",
          answer:
            "Chacune a une commande intégrée en mode texte : \\ae et \\AE pour æ et Æ, \\oe et \\OE pour œ et Œ, \\o et \\O pour ø et Ø, \\aa et \\AA pour å et Å, \\ss pour ß, et \\l et \\L pour ł et Ł. Depuis 2018, LaTeX lit aussi l\u2019UTF-8, vous pouvez donc taper ces lettres directement.",
        },
        {
          question: "Comment utiliser ces caractères latins en mode mathématique ?",
          answer:
            "Ces commandes ne fonctionnent qu\u2019en mode texte : entourez-les de \\text{...} d\u2019amsmath, comme dans $x_{\\text{\\ae}}$. En mode mathématique, les lettres sans point ont leurs propres commandes, \\imath et \\jmath, utilisées pour les vecteurs accentués comme \\hat{\\imath}.",
        },
        {
          question: "Pourquoi les lettres accentuées ne se copient-elles pas ou ne se coupent-elles pas correctement dans mon PDF ?",
          answer:
            "Avec le codage de police OT1 par défaut, LaTeX construit les lettres accentuées à partir de deux éléments. Ajoutez \\usepackage[T1]{fontenc} au préambule pour que é, ö et ñ deviennent des glyphes uniques, correctement coupés, recherchables et copiables.",
        },
      ],
    },

    "linear-algebra": {
      title: "Symboles d\u2019algèbre linéaire en LaTeX : matrices, vecteurs, transposée et normes",
      intro: (
        <IntroP>
          L&rsquo;algèbre linéaire en LaTeX commence par les environnements de matrices
          d&rsquo;amsmath : <Cmd>{"pmatrix"}</Cmd> pour les parenthèses, <Cmd>{"bmatrix"}</Cmd> pour
          les crochets et <Cmd>{"vmatrix"}</Cmd> pour un déterminant. Un vecteur s&rsquo;écrit{" "}
          <Cmd>{"\\mathbf{v}"}</Cmd> ou <Cmd>{"\\vec{v}"}</Cmd>, la transposée{" "}
          <Cmd>{"A^\\top"}</Cmd> (ou <Cmd>{"A^T"}</Cmd>), l&rsquo;inverse <Cmd>{"A^{-1}"}</Cmd>, la
          transconjuguée <Cmd>{"A^\\dagger"}</Cmd> et la norme <Cmd>{"\\|x\\|"}</Cmd>. Le
          déterminant <Cmd>{"\\det"}</Cmd> est intégré, tandis que la trace et le rang
          s&rsquo;écrivent de préférence avec <Cmd>{"\\operatorname{tr}"}</Cmd> et{" "}
          <Cmd>{"\\operatorname{rank}"}</Cmd>. Le tableau présente les symboles d&rsquo;algèbre
          linéaire les plus utilisés, avec le paquet requis pour chacun ; la liste complète suit
          plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : matrices, vecteurs et opérations",
      use: {
        "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}": "Matrice entre parenthèses",
        "\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}": "Matrice entre crochets",
        "\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}": "Barres de déterminant",
        "\\mathbf{v}": "Vecteur en gras",
        "\\vec{v}": "Vecteur avec une flèche",
        "A^\\top": "Transposée",
        "A^{-1}": "Inverse",
        "A^\\dagger": "Transconjuguée (adjointe)",
        "\\det(A)": "Déterminant",
        "\\operatorname{tr}(A)": "Trace",
        "\\|x\\|_2": "Norme euclidienne",
        "\\langle u, v \\rangle": "Produit scalaire",
      },
      faqHeading: "Questions fréquentes sur l\u2019algèbre linéaire en LaTeX",
      faq: [
        {
          question: "Comment écrire une matrice en LaTeX ?",
          answer:
            "Chargez amsmath et utilisez un environnement de matrice en mode mathématique, en séparant les colonnes par & et les lignes par \\\\ : \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}. pmatrix donne des parenthèses, bmatrix des crochets, Bmatrix des accolades, vmatrix des barres simples pour un déterminant et Vmatrix des doubles barres.",
        },
        {
          question: "Comment écrire la transposée en LaTeX ?",
          answer:
            "Écrivez A^\\top, qui affiche un petit T, ou simplement A^T, ou encore A^\\intercal d\u2019amssymb. Choisissez une notation et tenez-vous-y ; A^\\top est courant dans les textes récents car on ne peut pas la confondre avec une variable T.",
        },
        {
          question: "Comment écrire un vecteur en LaTeX ?",
          answer:
            "Utilisez \\mathbf{v} pour un vecteur en gras ou \\vec{v} pour un accent fléché ; \\boldsymbol{v} d\u2019amsmath fonctionne aussi pour les lettres grecques. Un vecteur colonne est une matrice à une colonne : \\begin{pmatrix} x \\\\ y \\end{pmatrix}.",
        },
      ],
    },

    "machine-learning": {
      title: "Symbole du gradient en LaTeX et autres notations d\u2019apprentissage automatique",
      intro: (
        <IntroP>
          Le symbole du gradient en LaTeX est <Cmd>\nabla</Cmd>, qui affiche &nabla; et ne
          nécessite aucun paquet : écrivez <Cmd>\nabla f</Cmd> pour le gradient de <Cmd>f</Cmd>, ou{" "}
          <Cmd>\nabla_\theta \mathcal{"{L}"}</Cmd> pour le gradient d&rsquo;une fonction de perte
          par rapport aux paramètres. Les dérivées partielles utilisent <Cmd>\partial</Cmd>, les
          prédictions s&rsquo;écrivent <Cmd>\hat{"{y}"}</Cmd>, l&rsquo;espérance{" "}
          <Cmd>\mathbb{"{E}"}</Cmd> et l&rsquo;argmax <Cmd>\operatorname*{"{arg\\,max}"}</Cmd>. Le
          tableau présente les commandes les plus utilisées pour écrire un gradient en LaTeX, avec
          le paquet requis pour chacune ; la liste complète des symboles d&rsquo;apprentissage
          automatique suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : gradients, pertes et estimateurs",
      use: {
        "\\nabla": "Symbole du gradient (nabla)",
        "\\nabla_\\theta \\mathcal{L}": "Gradient de la perte par rapport à θ",
        "\\partial": "Dérivée partielle",
        "\\frac{\\partial \\mathcal{L}}{\\partial w}": "Dérivée partielle de la perte",
        "\\mathcal{L}": "Fonction de perte",
        "\\theta": "Paramètres du modèle",
        "\\hat{y}": "Prédiction, estimation",
        "\\mathbb{E}": "Espérance",
        "\\operatorname*{arg\\,max}_\\theta": "Argmax avec indice en dessous",
        "\\operatorname*{arg\\,min}_\\theta": "Argmin avec indice en dessous",
        "\\|w\\|_2": "Norme L2 des poids",
        "\\odot": "Produit de Hadamard (terme à terme)",
      },
      faqHeading: "Questions fréquentes sur la notation d\u2019apprentissage automatique en LaTeX",
      faq: [
        {
          question: "Comment écrire le symbole du gradient en LaTeX ?",
          answer:
            "Le symbole du gradient ∇ s\u2019écrit \\nabla ; il est intégré à LaTeX et s\u2019utilise en mode mathématique : $\\nabla f$. Placez la variable de dérivation en indice, comme dans \\nabla_\\theta \\mathcal{L}(\\theta), et écrivez le laplacien \\nabla^2 f. Aucun paquet n\u2019est nécessaire.",
        },
        {
          question: "Comment écrire une dérivée partielle en LaTeX ?",
          answer:
            "Utilisez \\partial : \\frac{\\partial f}{\\partial x} pour une dérivée première et \\frac{\\partial^2 f}{\\partial x^2} pour une dérivée seconde. Une composante du gradient s\u2019écrit de la même façon, par exemple \\frac{\\partial \\mathcal{L}}{\\partial w_i}.",
        },
        {
          question: "Comment écrire argmax et argmin en LaTeX ?",
          answer:
            "Avec amsmath, écrivez \\operatorname*{arg\\,max}_\\theta f(\\theta) ; l\u2019étoile place l\u2019indice en dessous en mode hors texte. Pour un usage répété, déclarez-le une fois dans le préambule avec \\DeclareMathOperator*{\\argmax}{arg\\,max}, puis écrivez \\argmax_\\theta. Le raccourci \\arg\\max_\\theta fonctionne aussi, mais l\u2019indice se place alors sous max seul et non sous l\u2019ensemble arg max.",
        },
        {
          question: "Comment écrire l\u2019espérance et la fonction de perte en LaTeX ?",
          answer:
            "L\u2019espérance est le E ajouré \\mathbb{E}, qui nécessite \\usepackage{amssymb}, comme dans \\mathbb{E}_{x \\sim p}[f(x)]. La fonction de perte est généralement un L calligraphique, \\mathcal{L}, qui est intégré.",
        },
      ],
    },

    "modal-logic": {
      title: "Symboles de logique modale en LaTeX : carré, losange et sémantique de Kripke",
      intro: (
        <IntroP>
          Les deux symboles fondamentaux de la logique modale en LaTeX sont <Cmd>{"\\Box"}</Cmd>{" "}
          pour la nécessité (□) et <Cmd>{"\\Diamond"}</Cmd> pour la possibilité (◇), tous deux
          d&rsquo;amssymb ; <Cmd>{"\\Box p"}</Cmd> se lit « il est nécessaire que p » et{" "}
          <Cmd>{"\\Diamond p"}</Cmd> « il est possible que p ». La sémantique de Kripke utilise{" "}
          <Cmd>{"\\models"}</Cmd> (intégré) ou <Cmd>{"\\Vdash"}</Cmd>, comme dans{" "}
          <Cmd>{"\\mathcal{M}, w \\models p"}</Cmd>, avec une relation d&rsquo;accessibilité{" "}
          <Cmd>{"wRv"}</Cmd>. La logique épistémique note la connaissance <Cmd>{"K_a p"}</Cmd>, et la
          logique temporelle ajoute <Cmd>{"\\bigcirc p"}</Cmd> pour « au prochain instant » et{" "}
          <Cmd>{"p \\mathbin{\\mathcal{U}} q"}</Cmd> pour « jusqu&rsquo;à ». Le tableau présente les
          symboles de logique modale les plus utilisés, avec le paquet requis pour chacun ; la liste
          complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : opérateurs modaux, épistémiques et temporels",
      use: {
        "\\Box p": "Nécessairement p",
        "\\Diamond p": "Possiblement p",
        "\\Box(p \\to q)": "Nécessité d\u2019une implication (axiome K)",
        "\\neg\\Box\\neg p": "Non nécessairement non p, équivaut à \\Diamond p",
        "\\mathcal{M}, w \\models p": "p est vrai dans le monde w",
        "w \\Vdash p": "Forçage, satisfaction",
        "wRv": "Relation d\u2019accessibilité",
        "K_a p": "L\u2019agent a sait que p",
        "B_a p": "L\u2019agent a croit que p",
        "C_G p": "Connaissance commune dans le groupe G",
        "\\bigcirc p": "Au prochain instant (logique temporelle)",
        "p \\mathbin{\\mathcal{U}} q": "Jusqu\u2019à (logique temporelle)",
      },
      faqHeading: "Questions fréquentes sur la logique modale en LaTeX",
      faq: [
        {
          question: "Comment écrire les symboles carré et losange en LaTeX ?",
          answer:
            "Chargez \\usepackage{amssymb} et écrivez \\Box p pour la nécessité et \\Diamond p pour la possibilité. Le paquet latexsym fournit les deux mêmes commandes. Attention : la commande intégrée \\diamond est un petit opérateur binaire, pas le losange modal.",
        },
        {
          question: "Comment écrire le symbole de satisfaction (double taquet) en LaTeX ?",
          answer:
            "\\models est intégré et affiche ⊨, comme dans $\\mathcal{M}, w \\models \\varphi$. amssymb ajoute \\vDash (⊨), \\Vdash (⊩) pour le forçage et \\nvDash pour « ne satisfait pas » ; \\vdash (⊢), pour la prouvabilité, est intégré.",
        },
        {
          question: "Comment écrire « jusqu\u2019à » et « au prochain instant » en logique temporelle en LaTeX ?",
          answer:
            "Utilisez \\bigcirc p pour « au prochain instant », et faites du U calligraphique un opérateur binaire pour « jusqu\u2019à » : p \\mathbin{\\mathcal{U}} q, qui donne l\u2019espacement correct. « Toujours » et « un jour » s\u2019écrivent généralement \\Box p et \\Diamond p, ou \\mathbf{G} p et \\mathbf{F} p.",
        },
      ],
    },

    "number-theory": {
      title: "Symboles de théorie des nombres en LaTeX",
      intro: (
        <IntroP>
          Le modulo et la valeur absolue s&rsquo;écrivent de plusieurs façons en LaTeX :{" "}
          <Cmd>\bmod</Cmd> pour un reste, <Cmd>\pmod{"{n}"}</Cmd> après une congruence, et{" "}
          <Cmd>\lvert z \rvert</Cmd> pour le module (valeur absolue) d&rsquo;un nombre. Le tableau
          présente les huit commandes les plus utilisées, avec le paquet requis pour chacune ; la
          liste complète des symboles de théorie des nombres suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : congruences, divisibilité et PGCD",
      use: {
        "a \\bmod n": "Modulo comme opération binaire",
        "a \\equiv b \\pmod{n}": "Congruence avec (mod n)",
        "a \\equiv b \\mod{n}": "Congruence sans parenthèses",
        "\\lvert z \\rvert": "Module / valeur absolue",
        "a \\mid b": "a divise b",
        "a \\nmid b": "a ne divise pas b",
        "\\gcd(a, b)": "Plus grand commun diviseur (PGCD)",
        "\\operatorname{lcm}(a, b)": "Plus petit commun multiple (PPCM)",
      },
      faqHeading: "Questions fréquentes sur la théorie des nombres en LaTeX",
      faq: [
        {
          question: "Comment écrire mod (modulo) en LaTeX ?",
          answer:
            "Utilisez \\bmod pour l\u2019opération binaire, comme dans a \\bmod n, et \\pmod{n} après une congruence : a \\equiv b \\pmod{n} ajoute les parenthèses et l\u2019espacement à votre place. amsmath fournit aussi \\mod{n} (sans parenthèses) et \\pod{n} (parenthèses sans le mot mod).",
        },
        {
          question: "Comment écrire le module (valeur absolue) en LaTeX ?",
          answer:
            "Écrivez \\lvert z \\rvert avec amsmath, ou \\left| z \\right| quand les barres doivent grandir avec un contenu haut. Pour un usage fréquent, mathtools permet de déclarer \\DeclarePairedDelimiter{\\abs}{\\lvert}{\\rvert}, puis d\u2019écrire \\abs{z}.",
        },
        {
          question: "Comment écrire « divise » en LaTeX ?",
          answer:
            "Utilisez \\mid, comme dans a \\mid b, que LaTeX espace comme une relation ; un simple | est trop serré. La négation \\nmid (a ne divise pas b) nécessite \\usepackage{amssymb}. En français, le PGCD s\u2019écrit souvent \\operatorname{pgcd}(a, b), tandis que \\gcd est intégré.",
        },
      ],
    },

    operators: {
      title: "Opérateurs en LaTeX : plus cerclé, fois, point et grands opérateurs",
      intro: (
        <IntroP>
          Les opérateurs de LaTeX se répartissent en deux groupes. Les opérateurs binaires se
          placent entre deux termes avec un espacement moyen : <Cmd>{"\\times"}</Cmd>,{" "}
          <Cmd>{"\\cdot"}</Cmd>, <Cmd>{"\\ast"}</Cmd>, <Cmd>{"\\circ"}</Cmd>, et la famille des
          symboles cerclés <Cmd>{"\\oplus"}</Cmd> (plus cerclé, ⊕), <Cmd>{"\\otimes"}</Cmd> (⊗),{" "}
          <Cmd>{"\\odot"}</Cmd> (⊙) et <Cmd>{"\\ominus"}</Cmd>. Les grands opérateurs prennent des
          bornes et grandissent en mode hors texte : <Cmd>{"\\sum"}</Cmd>, <Cmd>{"\\prod"}</Cmd>,{" "}
          <Cmd>{"\\bigoplus"}</Cmd>, <Cmd>{"\\bigotimes"}</Cmd> et <Cmd>{"\\bigcup"}</Cmd>. Tous
          sont intégrés. Les opérateurs nommés comme <Cmd>{"\\max"}</Cmd>, <Cmd>{"\\sin"}</Cmd> et{" "}
          <Cmd>{"\\det"}</Cmd> sont prédéfinis, et vous pouvez déclarer les vôtres avec{" "}
          <Cmd>{"\\DeclareMathOperator"}</Cmd> d&rsquo;amsmath. Le tableau présente les opérateurs
          LaTeX les plus utilisés ; la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : opérateurs binaires et grands opérateurs",
      use: {
        "\\oplus": "Plus cerclé : somme directe, XOR",
        "\\otimes": "Fois cerclé : produit tensoriel",
        "\\odot": "Point cerclé : produit de Hadamard",
        "\\ominus": "Moins cerclé",
        "\\oslash": "Barre oblique cerclée",
        "\\times": "Produit vectoriel, multiplication",
        "\\cdot": "Point centré",
        "\\ast": "Opérateur astérisque, convolution",
        "\\circ": "Composition",
        "\\star": "Opérateur étoile",
        "\\bigoplus_{i=1}^{n} V_i": "Somme directe indexée",
        "\\bigotimes_{i=1}^{n} V_i": "Produit tensoriel indexé",
      },
      faqHeading: "Questions fréquentes sur les opérateurs en LaTeX",
      faq: [
        {
          question: "Comment écrire un plus cerclé en LaTeX ?",
          answer:
            "Utilisez \\oplus pour ⊕, le plus cerclé employé pour les sommes directes et le XOR. C\u2019est un opérateur binaire intégré : $A \\oplus B$. Pour une somme directe de nombreux termes, utilisez le grand opérateur \\bigoplus_{i=1}^{n} V_i.",
        },
        {
          question: "Comment écrire l\u2019opérateur point cerclé (odot) en LaTeX ?",
          answer:
            "\\odot affiche ⊙ et sert pour le produit de Hadamard (terme à terme), $A \\odot B$. La grande version est \\bigodot. Les deux sont intégrés.",
        },
        {
          question: "Comment définir un nouvel opérateur en LaTeX ?",
          answer:
            "Chargez amsmath et écrivez \\DeclareMathOperator{\\Tr}{Tr} dans le préambule ; \\Tr(A) affiche alors Tr en romain droit avec l\u2019espacement d\u2019un opérateur. Utilisez \\DeclareMathOperator* lorsque les bornes doivent se placer en dessous, comme pour \\argmax. Pour un usage ponctuel, \\operatorname{Tr} fait la même chose directement dans la formule.",
        },
      ],
    },

    optimization: {
      title: "Symboles d\u2019optimisation en LaTeX : argmax, argmin et contraintes",
      intro: (
        <IntroP>
          En LaTeX, la notation de l&rsquo;optimisation s&rsquo;articule autour de{" "}
          <Cmd>{"\\min"}</Cmd>, <Cmd>{"\\max"}</Cmd> et de leurs versions arg.{" "}
          <Cmd>{"\\min_{x}"}</Cmd> et <Cmd>{"\\max_{x}"}</Cmd> sont intégrés et placent la variable
          sous l&rsquo;opérateur en mode hors texte, mais il n&rsquo;existe pas de{" "}
          <Cmd>{"\\argmax"}</Cmd> intégré : écrivez <Cmd>{"\\operatorname*{arg\\,max}_x"}</Cmd> ou
          déclarez <Cmd>{"\\argmax"}</Cmd> une fois avec <Cmd>{"\\DeclareMathOperator*"}</Cmd>{" "}
          d&rsquo;amsmath. Les contraintes suivent <Cmd>{"\\text{s.t.}"}</Cmd> (« sous contraintes »),
          le lagrangien s&rsquo;écrit <Cmd>{"\\mathcal{L}(x, \\lambda)"}</Cmd>, l&rsquo;optimum{" "}
          <Cmd>{"x^*"}</Cmd>, et les contraintes semi-définies utilisent <Cmd>{"\\succeq 0"}</Cmd>.
          Le tableau présente les symboles d&rsquo;optimisation les plus utilisés, avec le paquet
          requis pour chacun ; la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : objectifs, contraintes et optimalité",
      use: {
        "\\operatorname*{arg\\,max}_{x} f(x)": "Argmax avec la variable en dessous",
        "\\operatorname*{arg\\,min}_{x} f(x)": "Argmin avec la variable en dessous",
        "\\min_{x \\in \\mathcal{X}} f(x)": "Minimiser sur un ensemble",
        "\\max_{x} f(x)": "Maximiser",
        "\\text{s.t.}": "Sous contraintes (abréviation anglaise s.t.)",
        "g_i(x) \\leq 0": "Contrainte d\u2019inégalité",
        "h_j(x) = 0": "Contrainte d\u2019égalité",
        "\\mathcal{L}(x, \\lambda)": "Lagrangien",
        "\\nabla f(x^*) = 0": "Condition d\u2019optimalité du premier ordre",
        "\\nabla^2 f(x)": "Matrice hessienne",
        "X \\succeq 0": "Semi-définie positive",
        "\\lambda_i \\geq 0": "Variables duales (multiplicateurs)",
      },
      faqHeading: "Questions fréquentes sur l\u2019optimisation en LaTeX",
      faq: [
        {
          question: "Comment écrire argmax en LaTeX ?",
          answer:
            "Écrivez \\operatorname*{arg\\,max}_{x} f(x) avec amsmath ; l\u2019étoile place x sous l\u2019opérateur en mode hors texte. Pour le réutiliser, ajoutez \\DeclareMathOperator*{\\argmax}{arg\\,max} au préambule et écrivez \\argmax_x f(x). \\arg\\max affiche aussi arg max, mais son indice ne s\u2019attache qu\u2019à max.",
        },
        {
          question: "Comment écrire un problème d\u2019optimisation sous contraintes en LaTeX ?",
          answer:
            "Placez l\u2019objectif et les contraintes dans un environnement aligned : \\min_{x} \\quad & f(x) \\\\ \\text{s.c.} \\quad & g(x) \\leq 0. Le paquet optidef fournit les environnements mini et maxi, qui alignent l\u2019objectif et les contraintes pour vous.",
        },
        {
          question: "Comment écrire « sous contraintes » en LaTeX ?",
          answer:
            "Utilisez \\text{s.c.} ou \\text{sous contraintes} (\\text{s.t.} dans un texte en anglais) avec amsmath, pour que les mots soient composés en romain droit avec un espacement normal. Écrire s.c. directement en mode mathématique affiche les variables italiques s et c.",
        },
      ],
    },

    order: {
      title: "Inférieur, supérieur et inférieur ou égal en LaTeX",
      intro: (
        <IntroP>
          En LaTeX, les signes inférieur et supérieur se tapent directement en mode mathématique :{" "}
          <Cmd>&lt;</Cmd> et <Cmd>&gt;</Cmd>. Inférieur ou égal s&rsquo;écrit <Cmd>\leq</Cmd> (ou
          l&rsquo;alias <Cmd>\le</Cmd>), supérieur ou égal <Cmd>\geq</Cmd> (<Cmd>\ge</Cmd>) et
          différent <Cmd>\neq</Cmd> ; ces trois commandes sont intégrées, donc{" "}
          <Cmd>$a \leq b$</Cmd> fonctionne dans n&rsquo;importe quel document. Très inférieur
          s&rsquo;écrit <Cmd>\ll</Cmd>, et les formes inclinées, approchées et barrées viennent
          d&rsquo;amssymb. Le tableau présente les symboles d&rsquo;inégalité les plus utilisés,
          avec le paquet requis pour chacun ; la liste complète des symboles d&rsquo;ordre suit plus
          bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : les symboles d\u2019inégalité les plus utilisés",
      use: {
        "<": "Strictement inférieur (à taper directement)",
        ">": "Strictement supérieur (à taper directement)",
        "\\leq": "Inférieur ou égal (alias \\le)",
        "\\geq": "Supérieur ou égal (alias \\ge)",
        "\\neq": "Différent de (alias \\ne)",
        "\\ll": "Très inférieur à",
        "\\gg": "Très supérieur à",
        "\\leqslant": "Inférieur ou égal, forme inclinée",
        "\\lesssim": "Inférieur ou approximativement égal",
        "\\not<": "Non inférieur à",
        "\\nleq": "Non inférieur ou égal à",
        "\\prec": "Précède (ordre partiel) ; \\succ pour « succède »",
      },
      faqHeading: "Questions fréquentes sur les symboles d\u2019inégalité en LaTeX",
      faq: [
        {
          question: "Comment écrire « inférieur ou égal » en LaTeX ?",
          answer:
            "Écrivez \\leq, ou son alias plus court \\le, en mode mathématique : $a \\leq b$. Supérieur ou égal s\u2019écrit \\geq ou \\ge. Les deux sont intégrés. Pour la forme inclinée, d\u2019usage courant dans les textes français, chargez amssymb et utilisez \\leqslant et \\geqslant.",
        },
        {
          question: "Comment taper le signe inférieur en LaTeX ?",
          answer:
            "En mode mathématique, tapez < directement : $a < b$. Dans le texte courant, hors mode mathématique, le codage de police OT1 par défaut affiche ¡ au lieu de < : entourez-le de $ comme dans $<$, utilisez \\textless (et \\textgreater pour >), ou chargez \\usepackage[T1]{fontenc}.",
        },
        {
          question: "Comment écrire « non inférieur » ou « différent » en LaTeX ?",
          answer:
            "Différent s\u2019écrit \\neq ou \\ne. Pour les autres relations, placez \\not devant le symbole, comme dans \\not<, ou chargez amssymb pour les négations dédiées \\nless, \\ngtr, \\nleq et \\ngeq, plus propres qu\u2019une barre superposée.",
        },
        {
          question: "Quelle est la différence entre \\leq et \\le en LaTeX ?",
          answer:
            "Aucune : \\le est un alias de \\leq et les deux affichent ≤, de même que \\ge est un alias de \\geq et \\ne un alias de \\neq. Utilisez celui que vous préférez, de façon cohérente.",
        },
      ],
    },

    relations: {
      title: "Symboles de relation en LaTeX : différent, approximativement égal et inférieur",
      intro: (
        <IntroP>
          Les symboles de relation comparent deux expressions, et les plus courants sont tous
          intégrés à LaTeX. Différent s&rsquo;écrit <Cmd>{"\\neq"}</Cmd> (≠), approximativement égal{" "}
          <Cmd>{"\\approx"}</Cmd> (≈), inférieur et supérieur se tapent <Cmd>{"<"}</Cmd> et{" "}
          <Cmd>{">"}</Cmd>, et inférieur ou égal s&rsquo;écrit <Cmd>{"\\leq"}</Cmd> (≤).
          L&rsquo;équivalence est <Cmd>{"\\equiv"}</Cmd>, semblable <Cmd>{"\\sim"}</Cmd>, congruent
          (isomorphe) <Cmd>{"\\cong"}</Cmd> et proportionnel à <Cmd>{"\\propto"}</Cmd>. Niez
          n&rsquo;importe quelle relation en plaçant <Cmd>{"\\not"}</Cmd> devant, ou chargez
          amssymb pour des formes dédiées comme <Cmd>{"\\nleq"}</Cmd> et des formes inclinées comme{" "}
          <Cmd>{"\\leqslant"}</Cmd>. Le tableau présente les relations les plus utilisées, avec le
          paquet requis pour chacune ; la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : les symboles de relation les plus utilisés",
      use: {
        "\\neq": "Différent (alias \\ne)",
        "\\approx": "Approximativement égal",
        "<": "Strictement inférieur",
        ">": "Strictement supérieur",
        "\\leq": "Inférieur ou égal",
        "\\geq": "Supérieur ou égal",
        "\\equiv": "Équivalent, identique, congru modulo n",
        "\\sim": "Semblable, suit la loi",
        "\\cong": "Congruent, isomorphe",
        "\\propto": "Proportionnel à",
        "\\ll": "Très inférieur à (\\gg pour très supérieur)",
        "\\leqslant": "Inférieur ou égal, forme inclinée",
      },
      faqHeading: "Questions fréquentes sur les symboles de relation en LaTeX",
      faq: [
        {
          question: "Comment écrire « différent » en LaTeX ?",
          answer:
            "Utilisez \\neq (ou son alias \\ne) en mode mathématique : $a \\neq b$ affiche a ≠ b. Aucun paquet n\u2019est nécessaire. Pour les autres relations niées, placez \\not devant, comme dans \\not\\equiv, ou utilisez les versions dédiées d\u2019amssymb comme \\nleq et \\ncong.",
        },
        {
          question: "Comment écrire « approximativement égal » en LaTeX ?",
          answer:
            "\\approx affiche ≈, le symbole standard pour « approximativement égal » : $\\pi \\approx 3.14$. Ses proches parents sont \\simeq (≃), \\cong (≅), \\sim (∼) et \\doteq (≐), tous intégrés, ainsi que \\approxeq (≊) d\u2019amssymb.",
        },
        {
          question: "Comment écrire « inférieur à » en LaTeX ?",
          answer:
            "En mode mathématique, tapez < et > directement : $a < b$. Dans le texte courant, hors mode mathématique, utilisez \\textless et \\textgreater ou entourez le signe de $...$, car avec l\u2019ancien codage de police OT1 un < seul peut s\u2019afficher comme un point d\u2019exclamation inversé.",
        },
      ],
    },

    "special-functions": {
      title: "Fonctions spéciales en LaTeX : Gamma, Bêta, zêta, erf et Bessel",
      intro: (
        <IntroP>
          En LaTeX, les fonctions spéciales s&rsquo;écrivent avec des lettres grecques ou des noms
          en romain droit. La fonction Gamma est <Cmd>{"\\Gamma(z)"}</Cmd>, la fonction zêta de
          Riemann <Cmd>{"\\zeta(s)"}</Cmd>, la fonction digamma <Cmd>{"\\psi(x)"}</Cmd> et la
          distribution de Dirac <Cmd>{"\\delta(x)"}</Cmd>. Les fonctions désignées par des lettres
          latines doivent être en romain droit : il n&rsquo;existe pas de <Cmd>{"\\erf"}</Cmd>{" "}
          intégré, écrivez donc <Cmd>{"\\operatorname{erf}(x)"}</Cmd> ou déclarez-le une fois avec{" "}
          <Cmd>{"\\DeclareMathOperator"}</Cmd> d&rsquo;amsmath. Les fonctions de Bessel et les
          polynômes orthogonaux sont des lettres indicées comme <Cmd>{"J_n(x)"}</Cmd> et{" "}
          <Cmd>{"P_n(x)"}</Cmd>, et la fonction hypergéométrique s&rsquo;écrit{" "}
          <Cmd>{"{}_2F_1(a, b; c; z)"}</Cmd>. Le tableau présente les fonctions spéciales les plus
          utilisées, avec le paquet requis pour chacune ; la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : les fonctions spéciales les plus utilisées",
      use: {
        "\\Gamma(z)": "Fonction Gamma",
        "\\mathrm{B}(x, y)": "Fonction Bêta (B majuscule droit)",
        "\\zeta(s)": "Fonction zêta de Riemann",
        "\\operatorname{erf}(x)": "Fonction d\u2019erreur",
        "\\operatorname{erfc}(x)": "Fonction d\u2019erreur complémentaire",
        "J_n(x)": "Fonction de Bessel de première espèce",
        "Y_n(x)": "Fonction de Bessel de seconde espèce",
        "P_n(x)": "Polynôme de Legendre",
        "H_n(x)": "Polynôme d\u2019Hermite",
        "{}_2F_1(a, b; c; z)": "Fonction hypergéométrique de Gauss",
        "\\psi(x)": "Fonction digamma",
        "\\delta(x)": "Distribution de Dirac",
      },
      faqHeading: "Questions fréquentes sur les fonctions spéciales en LaTeX",
      faq: [
        {
          question: "Comment écrire la fonction Gamma en LaTeX ?",
          answer:
            "Utilisez la lettre grecque majuscule : $\\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt$. Aucun paquet n\u2019est nécessaire. La fonction Bêta s\u2019écrit généralement avec un B droit, \\mathrm{B}(x, y), pour ne pas être confondue avec une variable.",
        },
        {
          question: "Comment écrire la fonction d\u2019erreur erf en LaTeX ?",
          answer:
            "LaTeX n\u2019a pas de commande \\erf. Utilisez \\operatorname{erf}(x) d\u2019amsmath, ou ajoutez \\DeclareMathOperator{\\erf}{erf} au préambule et écrivez \\erf(x). erf est alors composé en romain droit avec l\u2019espacement d\u2019un opérateur, contrairement à erf tapé tel quel, qui affiche trois variables en italique.",
        },
        {
          question: "Comment écrire la fonction hypergéométrique en LaTeX ?",
          answer:
            "Utilisez un groupe vide pour attacher l\u2019indice à gauche : {}_2F_1(a, b; c; z). Le paquet mathtools fournit aussi \\prescript{}{2}{F}_{1} pour les indices placés avant, et la forme généralisée {}_pF_q suit le même principe.",
        },
      ],
    },

    summation: {
      title: "Somme en LaTeX : notation sigma, produits et bornes",
      intro: (
        <IntroP>
          Une somme s&rsquo;écrit en LaTeX avec <Cmd>{"\\sum"}</Cmd>, qui affiche le sigma majuscule
          (Σ) comme grand opérateur : <Cmd>{"\\sum_{i=1}^{n} a_i"}</Cmd> place l&rsquo;indice en
          dessous et la borne supérieure au-dessus. Le symbole produit fonctionne de la même façon
          avec <Cmd>{"\\prod_{i=1}^{n}"}</Cmd>. En mode hors texte, les bornes se placent au-dessus
          et au-dessous du signe ; en ligne, elles passent sur le côté, sauf si vous ajoutez{" "}
          <Cmd>{"\\limits"}</Cmd> ou <Cmd>{"\\displaystyle"}</Cmd>. Les conditions sur plusieurs
          lignes sous une somme utilisent <Cmd>{"\\substack"}</Cmd> d&rsquo;amsmath, et les grands
          opérateurs ensemblistes <Cmd>{"\\bigcup"}</Cmd> et <Cmd>{"\\bigcap"}</Cmd> suivent les
          mêmes règles. Le tableau présente les symboles de sommation les plus utilisés, avec le
          paquet requis pour chacun ; la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : sommes, produits et bornes",
      use: {
        "\\sum_{i=1}^{n} a_i": "Somme (notation sigma)",
        "\\sum_{n=1}^{\\infty} \\frac{1}{n^2}": "Série infinie",
        "\\prod_{i=1}^{n} x_i": "Produit",
        "\\coprod": "Coproduit",
        "\\sum\\limits_{i=1}^{n}": "Bornes au-dessus et au-dessous en mode en ligne",
        "\\displaystyle\\sum_{i=1}^{n}": "Somme en taille hors texte dans une formule en ligne",
        "\\sum_{i=1}^{n} \\sum_{j=1}^{m} a_{ij}": "Somme double",
        "\\sum_{\\substack{i < j \\\\ i \\neq k}}": "Conditions sur plusieurs lignes",
        "\\bigcup_{i \\in I} A_i": "Réunion indexée",
        "\\bigcap_{i=1}^{n} A_i": "Intersection indexée",
        "\\sum_{k=0}^{n} \\binom{n}{k}": "Somme de coefficients binomiaux",
      },
      faqHeading: "Questions fréquentes sur les sommes en LaTeX",
      faq: [
        {
          question: "Comment écrire une somme en LaTeX ?",
          answer:
            "Utilisez \\sum avec un indice et un exposant en mode mathématique : $\\sum_{i=1}^{n} a_i$. Mettez entre accolades les bornes de plus d\u2019un caractère. Dans une équation hors texte (\\[...\\]), les bornes apparaissent au-dessus et au-dessous du sigma ; en ligne, elles apparaissent sur le côté.",
        },
        {
          question: "Comment placer les bornes au-dessus et au-dessous de la somme dans une formule en ligne ?",
          answer:
            "Ajoutez \\limits après l\u2019opérateur, \\sum\\limits_{i=1}^{n}, ou passez toute la somme en taille hors texte avec \\displaystyle\\sum_{i=1}^{n}. À utiliser avec parcimonie, car cela augmente l\u2019interligne du paragraphe.",
        },
        {
          question: "Comment écrire le symbole produit en LaTeX ?",
          answer:
            "\\prod affiche le symbole produit ∏ et prend des bornes comme \\sum : $\\prod_{i=1}^{n} x_i$. N\u2019utilisez pas \\Pi, qui est la lettre grecque : elle ne grandit pas en mode hors texte et ne place pas correctement ses bornes.",
        },
      ],
    },

    tensors: {
      title: "Notation tensorielle en LaTeX : indices, convention d\u2019Einstein et paquet tensor",
      intro: (
        <IntroP>
          En LaTeX, la notation tensorielle se construit avec des exposants et des indices :{" "}
          <Cmd>{"T^{ij}_{kl}"}</Cmd> pour un tenseur à deux indices supérieurs et deux indices
          inférieurs, <Cmd>{"g_{\\mu\\nu}"}</Cmd> pour la métrique et <Cmd>{"\\delta^i_j"}</Cmd>{" "}
          pour le symbole de Kronecker. Lorsque l&rsquo;ordre d&rsquo;indices mixtes compte,
          décalez-les avec un groupe vide, <Cmd>{"T^{i}{}_{j}"}</Cmd>, ou chargez le paquet tensor
          et écrivez <Cmd>{"\\tensor{T}{^i_j}"}</Cmd>. Le symbole de Levi-Civita s&rsquo;écrit{" "}
          <Cmd>{"\\epsilon_{ijk}"}</Cmd>, le produit tensoriel <Cmd>{"\\otimes"}</Cmd>, et la
          convention de sommation d&rsquo;Einstein consiste simplement à répéter un indice,{" "}
          <Cmd>{"A^i B_i"}</Cmd>. Le tableau présente les symboles tensoriels les plus utilisés,
          avec le paquet requis pour chacun ; la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : indices et opérations tensorielles",
      use: {
        "T^{ij}_{kl}": "Tenseur à indices supérieurs et inférieurs",
        "T^{i}{}_{j}": "Indices décalés (l\u2019ordre compte)",
        "\\tensor{T}{^i_j^k}": "Indices décalés en toute simplicité",
        "g_{\\mu\\nu}": "Tenseur métrique",
        "\\delta^i_j": "Symbole de Kronecker",
        "\\epsilon_{ijk}": "Symbole de Levi-Civita",
        "A^i B_i": "Convention d\u2019Einstein (indice répété)",
        "A \\otimes B": "Produit tensoriel",
        "\\partial_\\mu": "Dérivée partielle selon une coordonnée",
        "\\nabla_\\mu T^{\\nu}": "Dérivée covariante",
        "T_{(ij)}": "Symétrisation",
        "T_{[ij]}": "Antisymétrisation",
      },
      faqHeading: "Questions fréquentes sur la notation tensorielle en LaTeX",
      faq: [
        {
          question: "Comment écrire un tenseur avec des indices supérieurs et inférieurs en LaTeX ?",
          answer:
            "Combinez exposants et indices : $T^{ij}_{kl}$. Si l\u2019ordre horizontal des indices compte, insérez un groupe vide pour qu\u2019ils ne se superposent pas : T^{i}{}_{j} place j après i. Le paquet tensor automatise cela avec \\tensor{T}{^i_j} et T\\indices{^i_j}.",
        },
        {
          question: "Comment écrire le symbole de Kronecker et le symbole de Levi-Civita en LaTeX ?",
          answer:
            "Le symbole de Kronecker s\u2019écrit \\delta_{ij} ou \\delta^i_j, et le symbole de Levi-Civita \\epsilon_{ijk} ou \\varepsilon_{ijk}, selon la forme d\u2019epsilon d\u2019usage dans votre domaine. Ce sont des lettres grecques intégrées munies d\u2019indices.",
        },
        {
          question: "Comment écrire la convention de sommation d\u2019Einstein en LaTeX ?",
          answer:
            "Il n\u2019y a pas de commande spéciale : répéter un indice en haut et en bas sous-entend la somme, donc A^i B_i signifie \\sum_i A^i B_i. N\u2019écrivez le \\sum explicite que si vous voulez le montrer, et utilisez des indices grecs comme \\mu et \\nu pour les composantes d\u2019espace-temps.",
        },
      ],
    },

    topology: {
      title: "Symboles de topologie en LaTeX : adhérence, frontière, homéomorphisme et aleph",
      intro: (
        <IntroP>
          Les symboles de topologie sont pour la plupart intégrés à LaTeX. L&rsquo;adhérence
          d&rsquo;un ensemble s&rsquo;écrit <Cmd>{"\\overline{A}"}</Cmd>, sa frontière{" "}
          <Cmd>{"\\partial A"}</Cmd>, et son intérieur <Cmd>{"A^\\circ"}</Cmd> ou{" "}
          <Cmd>{"\\operatorname{int} A"}</Cmd>. « Homéomorphe » s&rsquo;écrit généralement{" "}
          <Cmd>{"\\cong"}</Cmd> (≅), « homotopiquement équivalent » <Cmd>{"\\simeq"}</Cmd>, le
          groupe fondamental <Cmd>{"\\pi_1(X)"}</Cmd> et l&rsquo;homologie <Cmd>{"H_n(X)"}</Cmd>. La
          notation ensembliste s&rsquo;applique telle quelle : l&rsquo;appartenance s&rsquo;écrit{" "}
          <Cmd>{"\\in"}</Cmd> et l&rsquo;inclusion au sens large <Cmd>{"\\subseteq"}</Cmd>. Pour les
          cardinaux, <Cmd>{"\\aleph_0"}</Cmd> est intégré et <Cmd>{"\\beth"}</Cmd> vient
          d&rsquo;amssymb. Le tableau présente les symboles de topologie les plus utilisés, avec le
          paquet requis pour chacun ; la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : les symboles de topologie les plus utilisés",
      use: {
        "\\overline{A}": "Adhérence",
        "\\partial A": "Frontière",
        "A^\\circ": "Intérieur (aussi \\operatorname{int} A)",
        "X \\cong Y": "Homéomorphes",
        "X \\simeq Y": "Homotopiquement équivalents",
        "\\pi_1(X, x_0)": "Groupe fondamental",
        "H_n(X)": "n-ième groupe d\u2019homologie",
        "\\mathcal{T}": "Topologie sur un ensemble",
        "x \\in U \\subseteq X": "Appartient à, inclus ou égal",
        "S^n": "Sphère de dimension n",
        "\\aleph_0": "Aleph zéro (cardinal du dénombrable)",
        "\\beth_1": "Nombre beth",
      },
      faqHeading: "Questions fréquentes sur les symboles de topologie en LaTeX",
      faq: [
        {
          question: "Comment écrire le symbole « homéomorphe » en LaTeX ?",
          answer:
            "La plupart des textes utilisent \\cong (≅) : $X \\cong Y$. Certains auteurs utilisent \\approx (≈) ou \\simeq (≃), bien que \\simeq désigne généralement l\u2019équivalence d\u2019homotopie. Les trois sont intégrés ; précisez votre convention une fois si elle peut prêter à confusion.",
        },
        {
          question: "Comment écrire le symbole beth en LaTeX ?",
          answer:
            "\\beth affiche ℶ et nécessite \\usepackage{amssymb}, qui fournit aussi \\gimel et \\daleth. \\aleph (ℵ) est intégré. Les cardinaux prennent des indices comme d\u2019habitude : \\aleph_0, \\beth_1, et \\mathfrak{c} (amssymb) pour la puissance du continu.",
        },
        {
          question: "Comment écrire l\u2019adhérence et l\u2019intérieur d\u2019un ensemble en LaTeX ?",
          answer:
            "L\u2019adhérence s\u2019écrit \\overline{A}, \\bar{A} pour une seule lettre, ou \\operatorname{cl}(A). L\u2019intérieur s\u2019écrit A^\\circ ou \\operatorname{int}(A) avec amsmath, et la frontière \\partial A. Préférez \\overline à \\bar pour tout ce qui dépasse une lettre.",
        },
      ],
    },

    trigonometry: {
      title: "Trigonométrie en LaTeX : sin, cos, tan et fonctions trigonométriques réciproques",
      intro: (
        <IntroP>
          Les fonctions trigonométriques ont leurs propres commandes en LaTeX : <Cmd>{"\\sin"}</Cmd>,{" "}
          <Cmd>{"\\cos"}</Cmd>, <Cmd>{"\\tan"}</Cmd>, <Cmd>{"\\cot"}</Cmd>, <Cmd>{"\\sec"}</Cmd> et{" "}
          <Cmd>{"\\csc"}</Cmd>, ainsi que les réciproques <Cmd>{"\\arcsin"}</Cmd>,{" "}
          <Cmd>{"\\arccos"}</Cmd> et <Cmd>{"\\arctan"}</Cmd> et les fonctions hyperboliques{" "}
          <Cmd>{"\\sinh"}</Cmd>, <Cmd>{"\\cosh"}</Cmd> et <Cmd>{"\\tanh"}</Cmd>. Utilisez toujours
          la commande plutôt que de taper sin : la commande compose le nom en romain droit avec
          l&rsquo;espacement correct, alors que sin tapé tel quel affiche trois variables en
          italique. Les puissances se placent juste après le nom, <Cmd>{"\\sin^2 \\theta"}</Cmd>, et
          les degrés sont un petit cercle en exposant, <Cmd>{"30^\\circ"}</Cmd>. Le tableau présente
          les symboles trigonométriques les plus utilisés, avec le paquet requis pour chacun ; la
          liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : fonctions et identités trigonométriques",
      use: {
        "\\sin \\theta": "Sinus",
        "\\cos \\theta": "Cosinus",
        "\\tan \\theta": "Tangente",
        "\\sec \\theta": "Sécante (\\csc cosécante, \\cot cotangente)",
        "\\arcsin x": "Arc sinus",
        "\\arccos x": "Arc cosinus",
        "\\arctan x": "Arc tangente",
        "\\sin^{-1} x": "Arc sinus, notation en puissance",
        "\\sin^2 \\theta + \\cos^2 \\theta = 1": "Identité pythagoricienne",
        "\\sinh x": "Sinus hyperbolique (\\cosh, \\tanh)",
        "30^\\circ": "Degrés",
        "\\operatorname{arcsec} x": "Arc sécante (non intégré)",
      },
      faqHeading: "Questions fréquentes sur la trigonométrie en LaTeX",
      faq: [
        {
          question: "Comment écrire sin, cos et tan en LaTeX ?",
          answer:
            "Utilisez les commandes intégrées en mode mathématique : $\\sin x$, $\\cos x$, $\\tan x$, et \\cot, \\sec et \\csc pour les inverses. Taper sin sans barre oblique inverse affiche le produit en italique s·i·n, d\u2019où l\u2019existence de ces commandes.",
        },
        {
          question: "Comment écrire les fonctions trigonométriques réciproques comme arcsin en LaTeX ?",
          answer:
            "\\arcsin, \\arccos et \\arctan sont intégrées, tout comme \\sinh, \\cosh, \\tanh et \\coth. \\arcsec, \\arccsc, \\arccot, \\sech et \\csch ne le sont pas : écrivez \\operatorname{arcsec} x, ou ajoutez \\DeclareMathOperator{\\arcsec}{arcsec} au préambule avec amsmath. La notation en puissance \\sin^{-1} x fonctionne aussi.",
        },
        {
          question: "Comment écrire sinus au carré et les degrés en LaTeX ?",
          answer:
            "Placez l\u2019exposant juste après la commande : \\sin^2 \\theta. Pour les degrés, utilisez un petit cercle en exposant, $30^\\circ$, ou \\ang{30} de siunitx pour une mise en forme homogène dans le texte et les tableaux.",
        },
      ],
    },

    units: {
      title: "Unités en LaTeX : siunitx, symbole degré et unités SI",
      intro: (
        <IntroP>
          Les unités s&rsquo;écrivent le plus facilement en LaTeX avec le paquet siunitx :{" "}
          <Cmd>{"\\qty{9.81}{\\metre\\per\\second\\squared}"}</Cmd> compose un nombre et son unité
          en romain droit avec l&rsquo;espacement correct, <Cmd>{"\\unit{\\kilo\\gram}"}</Cmd>{" "}
          affiche une unité seule, et <Cmd>{"\\num{6.022e23}"}</Cmd> met en forme un nombre. Sans
          siunitx, composez les unités en romain droit à la main, comme dans{" "}
          <Cmd>{"9.81\\,\\mathrm{m/s^2}"}</Cmd>, avec une espace fine <Cmd>{"\\,"}</Cmd> entre le
          nombre et l&rsquo;unité. Le symbole degré s&rsquo;écrit <Cmd>{"^\\circ"}</Cmd> en mode
          mathématique ou <Cmd>{"\\qty{20}{\\degreeCelsius}"}</Cmd> avec siunitx, et
          l&rsquo;angström <Cmd>{"\\AA"}</Cmd>. Le tableau présente les commandes d&rsquo;unités les
          plus utilisées, avec le paquet requis pour chacune ; la liste complète suit plus bas.
        </IntroP>
      ),
      quickRefHeading: "Aide-mémoire : unités avec et sans siunitx",
      use: {
        "\\qty{9.81}{\\metre\\per\\second\\squared}": "Grandeur avec unité",
        "\\unit{\\kilo\\gram}": "Unité seule",
        "\\num{6.022e23}": "Nombre mis en forme",
        "\\qty{20}{\\degreeCelsius}": "Degrés Celsius",
        "\\ang{45}": "Angle en degrés",
        "\\qty{10}{\\micro\\metre}": "Préfixe SI (micromètre)",
        "\\qty{5}{\\kilo\\ohm}": "Kiloohm",
        "9.81\\,\\mathrm{m/s^2}": "Unités à la main, sans paquet",
        "^\\circ": "Signe degré en mode mathématique",
        "\\AA": "Angström (mode texte)",
        "\\textdegree": "Signe degré en mode texte",
        "\\hbar": "Constante de Planck réduite",
      },
      faqHeading: "Questions fréquentes sur les unités en LaTeX",
      faq: [
        {
          question: "Comment écrire des unités en LaTeX ?",
          answer:
            "Chargez \\usepackage{siunitx} et écrivez \\qty{3.0}{\\metre\\per\\second} pour une valeur avec unité, \\unit{\\kilo\\gram} pour une unité seule et \\num{1.5e-3} pour un nombre. La version 3 de siunitx utilise \\qty et \\unit ; les anciennes commandes \\SI et \\si fonctionnent toujours. Sans le paquet, écrivez 3.0\\,\\mathrm{m/s}.",
        },
        {
          question: "Comment écrire le symbole degré en LaTeX ?",
          answer:
            "En mode mathématique, utilisez un petit cercle en exposant : $90^\\circ$, ou $20^\\circ\\mathrm{C}$ pour une température. En mode texte, \\textdegree affiche °. Avec siunitx, \\ang{90} et \\qty{20}{\\degreeCelsius} donnent un espacement homogène partout.",
        },
        {
          question: "siunitx entre-t-il en conflit avec le paquet physics ?",
          answer:
            "Les deux paquets définissent une commande \\qty, donc les charger ensemble provoque un conflit. Si vous avez besoin de physics, utilisez pour les grandeurs avec unités l\u2019ancienne forme de siunitx \\SI{9.81}{\\metre\\per\\second\\squared}, que la version 3 de siunitx prend toujours en charge.",
        },
      ],
    },

    accents: {
      title: "Accents et lettres spéciales en LaTeX",
      intro: (
        <>
          <IntroP>
            En mode texte, LaTeX construit les lettres accentuées à partir d&rsquo;une commande et
            de la lettre de base : l&rsquo;accent aigu <Cmd>\&apos;e</Cmd> (é), l&rsquo;accent grave{" "}
            <Cmd>\`e</Cmd> (è), l&rsquo;accent circonflexe <Cmd>\^e</Cmd> (ê), le tréma{" "}
            <Cmd>\&quot;o</Cmd> (ö), le tilde <Cmd>\~n</Cmd> (ñ), la cédille <Cmd>\c{"{c}"}</Cmd>{" "}
            (ç), le caron <Cmd>\v{"{s}"}</Cmd> (š), la brève <Cmd>\u{"{a}"}</Cmd> (ă), le double
            accent aigu hongrois <Cmd>\H{"{o}"}</Cmd> (ő), le point suscrit <Cmd>\.z</Cmd> (ż), le
            macron <Cmd>\=a</Cmd> (ā), le point souscrit <Cmd>\d{"{a}"}</Cmd>, la barre souscrite{" "}
            <Cmd>\b{"{a}"}</Cmd>, le rond en chef <Cmd>\r{"{a}"}</Cmd> (å) et l&rsquo;ogonek{" "}
            <Cmd>\k{"{e}"}</Cmd> (ę). Certaines lettres ont leur propre commande : <Cmd>\l</Cmd>{" "}
            (ł), <Cmd>\o</Cmd> (ø), <Cmd>\ae</Cmd> (æ) et <Cmd>\ss</Cmd> (ß). Pour accentuer un i ou
            un j, utilisez les formes sans point <Cmd>\i</Cmd> et <Cmd>\j</Cmd>, comme dans{" "}
            <Cmd>\&apos;{"{\\i}"}</Cmd> pour í, afin que l&rsquo;accent ne heurte pas le point.
          </IntroP>
          <IntroP>
            Le mode mathématique utilise un jeu d&rsquo;accents distinct, placé sur une variable
            plutôt que sur une lettre : <Cmd>\hat{"{x}"}</Cmd>, <Cmd>\bar{"{x}"}</Cmd>,{" "}
            <Cmd>\vec{"{v}"}</Cmd>, <Cmd>\tilde{"{x}"}</Cmd>, <Cmd>\dot{"{x}"}</Cmd> et{" "}
            <Cmd>\ddot{"{x}"}</Cmd> pour les dérivées, <Cmd>\acute</Cmd>, <Cmd>\grave</Cmd>,{" "}
            <Cmd>\breve</Cmd> et <Cmd>\check</Cmd>. Pour plus d&rsquo;un caractère, LaTeX de base
            propose les versions extensibles <Cmd>\widehat{"{xy}"}</Cmd> et{" "}
            <Cmd>\widetilde{"{xy}"}</Cmd>, ainsi que <Cmd>\overline{"{z}"}</Cmd> pour les conjugués
            et <Cmd>\overrightarrow{"{AB}"}</Cmd> pour les vecteurs ; aucune de ces commandes ne
            nécessite amsmath.
          </IntroP>
          <IntroP>
            Depuis 2018, LaTeX lit l&rsquo;UTF-8 par défaut : vous pouvez donc taper é, ö ou ñ
            directement dans le source (les installations plus anciennes nécessitent{" "}
            <Cmd>\usepackage[utf8]{"{inputenc}"}</Cmd>). Ajoutez{" "}
            <Cmd>\usepackage[T1]{"{fontenc}"}</Cmd> pour que les lettres accentuées soient des
            glyphes uniques, correctement coupés et copiables, au lieu d&rsquo;être composées de
            deux éléments. Pour un exemple concret, consultez notre guide des{" "}
            <IntroLink
              href="https://www.useoctree.com/blog/spanish-characters-latex-accents-special-letters"
              external
            >
              caractères espagnols et accents en LaTeX
            </IntroLink>
            , ou la présentation des{" "}
            <IntroLink href="https://www.useoctree.com/learn/special-characters" external>
              caractères spéciaux en LaTeX
            </IntroLink>
            . Cliquez sur une carte ci-dessous pour copier sa commande.
          </IntroP>
        </>
      ),
    },
  },
};

export default fr;
