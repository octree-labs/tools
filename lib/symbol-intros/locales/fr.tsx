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
  },
};

export default fr;
