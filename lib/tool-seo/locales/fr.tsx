import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import { GuideCode, GuidePre, GuideTable } from "@/lib/template-guides/ui";
import type { ToolSeoLocale } from "..";

const translations: ToolSeoLocale = {
  "latex-preview": {
    heading: "Éditer LaTeX en ligne : compilateur LaTeX gratuit et visionneuse PDF",
    intro: (
      <>
        <p>
          Cette page réunit un éditeur, un compilateur et une visionneuse LaTeX en ligne. Écrivez
          votre document à gauche, le PDF compilé s’affiche à droite. La compilation utilise une
          distribution TeX Live complète sur le service de compilation d’Octree : amsmath, TikZ,
          pgfplots, beamer, geometry, hyperref et le reste de TeX Live fonctionnent sans rien
          installer.
        </p>
        <p>
          pdfLaTeX est le moteur par défaut ; le service passe à XeLaTeX pour fontspec et les
          polices système, et à LuaLaTeX pour le code Lua. Aucun compte n’est nécessaire.
          L’éditeur ne contient qu’un seul fichier : les images, les fichiers .bib et les projets
          multi-fichiers se gèrent dans l’éditeur Octree, où un compte gratuit enregistre aussi
          votre travail. Le shell escape est désactivé, minted n’est donc pas disponible.
        </p>
      </>
    ),
    stepsHeading: "Comment utiliser l’éditeur LaTeX en ligne",
    steps: [
      {
        title: "Écrivez ou collez un document complet",
        body: (
          <>
            Remplacez l’exemple par votre propre code LaTeX, de <Cmd>\documentclass</Cmd> à{" "}
            <Cmd>\end{"{document}"}</Cmd>. L’éditeur colore la syntaxe LaTeX et complète les
            commandes courantes.
          </>
        ),
      },
      {
        title: "Regardez le PDF se mettre à jour",
        body: "L’aperçu se recompile environ une seconde après votre dernière frappe. Si la compilation échoue, une fenêtre affiche le message d’erreur et le journal.",
      },
      {
        title: "Conservez le résultat",
        body: "Cliquez sur « Ouvrir dans Octree » pour enregistrer le document comme projet, ajouter des images et des fichiers .bib, ou demander à l’IA de le modifier.",
      },
    ],
    tipsHeading: "Erreurs LaTeX courantes et comment les corriger",
    tips: [
      {
        title: "File `name.sty' not found",
        body: (
          <>
            Un package appelé avec <Cmd>\usepackage</Cmd> est mal orthographié ou ne fait pas
            partie de TeX Live. Vérifiez le nom ; tous les packages CTAN fournis avec TeX Live sont
            installés.
          </>
        ),
      },
      {
        title: "Missing $ inserted",
        body: (
          <>
            Une commande réservée au mode mathématique, comme <Cmd>^</Cmd>, <Cmd>_</Cmd> ou{" "}
            <Cmd>\alpha</Cmd>, apparaît hors du mode mathématique. Entourez-la de{" "}
            <Cmd>$...$</Cmd>, ou échappez un tiret bas littéral avec <Cmd>\_</Cmd>.
          </>
        ),
      },
      {
        title: "Undefined control sequence",
        body: (
          <>
            Une commande est mal orthographiée ou son package n’est pas chargé, par exemple{" "}
            <Cmd>\mathbb</Cmd> sans <Cmd>amssymb</Cmd>. Le journal indique la ligne concernée.
          </>
        ),
      },
      {
        title: "Vous ne trouvez pas l’erreur",
        body: "Cliquez sur « Fix this error with AI in Octree » dans la fenêtre d’erreur. Octree ouvre le document avec le journal d’erreur joint, et l’IA sait exactement quoi corriger.",
      },
    ],
    faqHeading: "FAQ de l’éditeur LaTeX en ligne",
    faq: [
      {
        question: "Peut-on éditer du LaTeX en ligne sans rien installer ?",
        answer:
          "Oui. Tapez ou collez du LaTeX dans l’éditeur de cette page et le PDF s’affiche à côté. La compilation s’exécute sur une installation TeX Live complète sur les serveurs d’Octree : aucune distribution TeX locale n’est nécessaire.",
      },
      {
        question: "Cette visionneuse LaTeX est-elle gratuite, et faut-il un compte ?",
        answer:
          "Elle est gratuite et ne demande aucun compte. Rien n’est enregistré sur cette page : copiez votre code avant de partir, ou ouvrez-le dans Octree avec un compte gratuit pour le conserver comme projet.",
      },
      {
        question: "Quel compilateur LaTeX l’aperçu en ligne utilise-t-il ?",
        answer:
          "pdfLaTeX par défaut. Le service de compilation passe à XeLaTeX quand le document charge fontspec, polyglossia, unicode-math ou xeCJK, et à LuaLaTeX quand il utilise \\directlua ou luacode.",
      },
      {
        question: "Peut-on importer des images ou une bibliographie .bib ?",
        answer:
          "Pas sur cette page : elle compile un seul fichier main.tex. Un environnement thebibliography fonctionne, mais les fichiers graphiques et les fichiers .bib nécessitent l’éditeur Octree, qui gère les projets multi-fichiers.",
      },
      {
        question: "Pourquoi un package comme minted ne compile-t-il pas ?",
        answer:
          "minted et les autres packages qui nécessitent le shell escape (\\write18) sont désactivés pour des raisons de sécurité. Utilisez plutôt le package listings ou verbatim pour le code.",
      },
    ],
    related: (
      <>
        Vous débutez en LaTeX ? Commencez par l’
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introduction à LaTeX
        </IntroLink>
        , parcourez des <IntroLink href="/templates">modèles LaTeX</IntroLink> prêts à l’emploi,
        ou décrivez un document et laissez le{" "}
        <IntroLink href="/tools/ai-latex-generator">générateur LaTeX par IA</IntroLink> l’écrire.
      </>
    ),
  },

  "math-to-latex": {
    heading: "Convertir des maths manuscrites en LaTeX en ligne",
    intro: (
      <>
        <p>
          Ce convertisseur de maths en LaTeX transforme une image de mathématiques manuscrites ou
          imprimées en code LaTeX. Importez une photo, un scan ou une capture d’écran d’une
          équation : un modèle d’IA de vision transcrit fractions, racines, sommes, intégrales,
          matrices et lettres grecques en notation amsmath standard.
        </p>
        <p>
          Le résultat est un document LaTeX complet, que l’aperçu compile avec pdfLaTeX sur une
          distribution TeX Live complète du service de compilation d’Octree. Aucun compte n’est
          nécessaire. L’outil donne les meilleurs résultats sur une équation ou quelques lignes à
          la fois ; mieux vaut découper les longues pages de calcul en plusieurs images.
        </p>
      </>
    ),
    stepsHeading: "Comment convertir des maths en LaTeX",
    steps: [
      {
        title: "Prenez une image nette",
        body: "Photographiez ou faites une capture d’écran des maths : une ligne de votre cahier, un tableau blanc, une note sur tablette ou une formule de manuel. Recadrez sur la partie utile.",
      },
      {
        title: "Importez-la",
        body: "Déposez le fichier JPEG ou PNG dans la zone d’import. Le LaTeX s’affiche progressivement dans le panneau de code pendant que l’IA lit l’image.",
      },
      {
        title: "Vérifiez l’aperçu et copiez",
        body: "Ouvrez l’onglet d’aperçu pour comparer le rendu compilé à l’original, puis copiez le code, téléchargez-le ou ouvrez-le dans Octree pour continuer à l’éditer.",
      },
    ],
    tipsHeading: "Conseils pour des conversions précises",
    tips: [
      {
        title: "Une expression ou un court bloc par image",
        body: "Le convertisseur est conçu pour les équations et les dérivations courtes ; découpez une page entière de calculs en plusieurs imports.",
      },
      {
        title: "Écrivez lisiblement, avec un bon contraste",
        body: "Encre foncée sur papier uni, éclairage homogène et prise de vue bien de face limitent les confusions de symboles comme 1 et l, ou x et ×.",
      },
      {
        title: "Vérifiez toujours les symboles",
        body: "La reconnaissance d’écriture manuscrite fait des erreurs. Contrôlez indices, exposants et lettres grecques dans l’aperçu avant d’utiliser le code.",
      },
    ],
    faqHeading: "FAQ maths vers LaTeX",
    faq: [
      {
        question: "Comment convertir des maths manuscrites en LaTeX ?",
        answer:
          "Importez une photo ou un scan des maths manuscrites au format JPEG ou PNG. L’IA les lit et renvoie le LaTeX dans un document complet qui charge amsmath et amssymb, et l’aperçu le compile pour que vous puissiez vérifier chaque symbole.",
      },
      {
        question: "Ce convertisseur LaTeX en ligne est-il gratuit ?",
        answer:
          "Oui. La conversion, l’aperçu, la copie et le téléchargement sont gratuits et ne demandent aucun compte. Un compte Octree gratuit n’est nécessaire que pour enregistrer le résultat comme projet.",
      },
      {
        question: "Est-ce que ça marche avec l’écriture manuscrite sur iPad ou tablette ?",
        answer:
          "Oui. Exportez la page ou une capture d’écran depuis GoodNotes, Notability, OneNote ou une application similaire sous forme d’image, recadrez sur l’équation et importez-la.",
      },
      {
        question: "Peut-on taper les maths au lieu d’importer une image ?",
        answer:
          "Cette page convertit des images. Pour convertir des maths tapées ou une description en langage courant comme « intégrale de x au carré de 0 à 1 », utilisez le convertisseur d’équations en LaTeX.",
      },
      {
        question: "Le LaTeX obtenu compile-t-il dans Overleaf ?",
        answer:
          "Oui. Le résultat utilise la notation amsmath standard et compile avec pdfLaTeX sur n’importe quelle distribution TeX, y compris Overleaf et Octree. L’aperçu de cette page le compile avec une TeX Live complète.",
      },
    ],
    related: (
      <>
        Découvrez le fonctionnement des maths en LaTeX dans le{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guide des expressions mathématiques
        </IntroLink>
        , convertissez des maths tapées avec le{" "}
        <IntroLink href="/tools/equation-to-latex">convertisseur d’équations en LaTeX</IntroLink>,
        ou cherchez une commande dans la{" "}
        <IntroLink href="/symbols">référence des symboles LaTeX</IntroLink>.
      </>
    ),
  },

  "pdf-to-latex": {
    heading: "Convertir un PDF en LaTeX en ligne",
    intro: (
      <>
        <p>
          Un PDF contient les pages finales, pas le LaTeX qui les a produites : convertir un PDF
          en LaTeX revient donc à recréer son texte et ses maths sous forme de source éditable. La
          méthode dépend de l’origine du PDF : les articles arXiv sont généralement accompagnés de
          leur source d’origine, et pour tout le reste, le convertisseur de cette page recrée le
          LaTeX avec l’IA.
        </p>
        <p>
          Importez un PDF de 3 Mo et 20 pages maximum et récupérez un document LaTeX complet,
          compilé avec une distribution TeX Live complète sur le service de compilation d’Octree
          pour que vous puissiez le vérifier. Aucun compte n’est nécessaire. Le résultat ne
          conserve ni les polices, ni la mise en page, ni les images d’origine, et mieux vaut
          convertir les longs documents une section à la fois.
        </p>
      </>
    ),
    stepsHeading: "Comment convertir un PDF en LaTeX",
    steps: [
      {
        title: "Vérifiez d’abord arXiv",
        body: "Si le PDF est un article arXiv, la source LaTeX originale des auteurs est généralement disponible. Téléchargez-la via le lien « TeX Source » de la page arXiv de l’article au lieu de convertir le PDF.",
      },
      {
        title: "Importez le PDF",
        body: "Déposez un PDF de 3 Mo et 20 pages maximum dans le convertisseur ci-dessus. L’IA lit le texte et les maths et renvoie un document LaTeX complet qui charge amsmath ; l’aperçu le compile pour que vous puissiez le comparer à l’original.",
      },
      {
        title: "Convertissez les longs fichiers par morceaux",
        body: "Pour un PDF long, extrayez les pages dont vous avez besoin, ou faites une capture d’écran d’un bloc d’équations et utilisez le convertisseur de maths en LaTeX.",
      },
      {
        title: "Assemblez et éditez",
        body: "Collez les morceaux dans l’éditeur LaTeX en ligne pour les corriger avec un aperçu PDF en direct, ou ouvrez-les dans Octree pour enregistrer le document comme projet.",
      },
    ],
    tipsHeading: "Conseils avant de convertir",
    tips: [
      {
        title: "Les figures ne sont pas extraites",
        body: "Les images et graphiques du PDF ne sont pas recréés en LaTeX. Réintégrez-les avec \\includegraphics, ou redessinez les schémas avec l’outil image vers TikZ.",
      },
      {
        title: "Relisez les maths",
        body: "La reconnaissance fait des erreurs dans les formules et tableaux denses. Comparez indices, signes et alignements avec l’original.",
      },
    ],
    faqHeading: "FAQ PDF vers LaTeX",
    faq: [
      {
        question: "Comment convertir un PDF en LaTeX ?",
        answer:
          "Un PDF ne contient pas sa source LaTeX : le texte et les maths doivent être recréés. Pour les articles arXiv, téléchargez la source originale via le lien « TeX Source » de la page arXiv de l’article. Pour les autres PDF, importez le fichier (3 Mo et 20 pages maximum) dans le convertisseur de cette page, puis comparez l’aperçu compilé à l’original.",
      },
      {
        question: "La conversion d’un PDF en LaTeX est-elle gratuite ?",
        answer:
          "Oui. Le convertisseur de PDF, le convertisseur de maths en LaTeX et l’éditeur LaTeX en ligne ne demandent aucun compte. Un compte Octree gratuit n’est nécessaire que pour enregistrer le résultat comme projet.",
      },
      {
        question: "Peut-on convertir un article entier ou une thèse ?",
        answer:
          "Le convertisseur accepte des PDF de 3 Mo et 20 pages maximum, et la longueur du résultat est limitée à chaque conversion : mieux vaut convertir une thèse chapitre par chapitre. Pour les articles publiés sur arXiv, téléchargez plutôt leur source originale.",
      },
      {
        question: "Le résultat conserve-t-il la mise en page exacte du PDF ?",
        answer:
          "Non. Le texte, les titres et les maths sont recréés en LaTeX propre et éditable ; les polices, les espacements, la mise en page et les images ne sont pas copiés.",
      },
      {
        question: "Peut-on convertir un PDF scanné ?",
        answer:
          "Les scans nets de pages imprimées ou écrites à la main proprement peuvent fonctionner. Les scans en basse résolution, de travers ou peu contrastés entraînent des erreurs de symboles : vérifiez le résultat attentivement.",
      },
    ],
    related: (
      <>
        Convertissez des captures d’écran d’équations avec le{" "}
        <IntroLink href="/tools/math-to-latex">convertisseur de maths en LaTeX</IntroLink>, éditez
        le résultat dans l’
        <IntroLink href="/tools/latex-preview">éditeur LaTeX en ligne</IntroLink>, ou lisez le{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guide des maths en LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "image-to-tikz": {
    heading: "Convertir une image en TikZ : transformez un schéma en LaTeX éditable",
    intro: (
      <>
        <p>
          Ce convertisseur d’image en TikZ transforme l’image d’un schéma en code TikZ que vous
          pouvez éditer et compiler. Importez un organigramme, un schéma-bloc, un arbre, un graphe
          ou un croquis : un modèle d’IA de vision le reconstruit sous forme de nœuds et de chemins
          dans un document LaTeX autonome, en conservant autant que possible les étiquettes et les
          couleurs.
        </p>
        <p>
          L’aperçu compile le résultat avec pdfLaTeX sur une distribution TeX Live complète du
          service de compilation d’Octree. Aucun compte n’est nécessaire. Le résultat est une
          reproduction fidèle, pas un calque au pixel près : prévoyez quelques retouches manuelles
          pour les figures qui doivent correspondre exactement.
        </p>
      </>
    ),
    stepsHeading: "Comment convertir une image en TikZ",
    steps: [
      {
        title: "Importez le schéma",
        body: "Déposez une capture d’écran, un export ou une photo du schéma au format JPEG, PNG, GIF ou WebP, jusqu’à 20 Mo.",
      },
      {
        title: "Laissez l’IA le redessiner en TikZ",
        body: (
          <>
            Le modèle lit les formes, les flèches, les étiquettes et les couleurs, puis écrit un
            document LaTeX autonome contenant un <Cmd>tikzpicture</Cmd>, avec des bibliothèques
            comme positioning, arrows et shapes.geometric.
          </>
        ),
      },
      {
        title: "Comparez, puis affinez",
        body: "Ouvrez l’onglet d’aperçu pour comparer le schéma compilé à votre image. Copiez ou téléchargez le code, ou ouvrez-le dans Octree pour l’ajuster avec l’IA.",
      },
    ],
    tipsHeading: "Conseils pour une meilleure conversion",
    tips: [
      {
        title: "Recadrez sur le schéma",
        body: "Supprimez légendes, texte de la page et autres figures ; un seul schéma par image donne les meilleurs résultats.",
      },
      {
        title: "Privilégiez des sources propres",
        body: "Les exports et captures d’écran valent mieux que les photos. Pour un croquis à la main, utilisez une encre foncée sur papier uni et photographiez bien de face.",
      },
      {
        title: "Les graphiques de données relèvent de pgfplots",
        body: "Le convertisseur redessine des formes ; il ne récupère pas les points de données. Pour des graphiques construits à partir de chiffres, utilisez le générateur pgfplots.",
      },
    ],
    faqHeading: "FAQ image vers TikZ",
    faq: [
      {
        question: "Comment convertir une image en TikZ ?",
        answer:
          "Importez le schéma au format JPEG, PNG, GIF ou WebP. L’IA renvoie un document LaTeX complet contenant un tikzpicture qui le redessine, et l’aperçu compile ce code pour que vous puissiez le comparer à l’original.",
      },
      {
        question: "Le code TikZ est-il une copie exacte de mon image ?",
        answer:
          "Non. C’est une reproduction avec des nœuds et des chemins éditables, pas un calque. La disposition, les étiquettes et les flèches sont généralement conservées, mais les espacements, les courbes et les couleurs peuvent différer : attendez-vous à ajuster des coordonnées pour une figure de publication.",
      },
      {
        question: "Quels schémas se convertissent le mieux ?",
        answer:
          "Les organigrammes, schémas-blocs, arbres, graphes, machines à états et figures géométriques simples. Les figures denses avec de nombreux éléments qui se chevauchent, les photographies et les graphiques de données se convertissent mal.",
      },
      {
        question: "Peut-on convertir un croquis à la main ou une photo de tableau blanc ?",
        answer:
          "Oui, si les traits et les étiquettes sont lisibles. Recadrez la photo sur le schéma et soignez l’éclairage ; un crayon pâle ou un angle de travers réduisent la précision.",
      },
      {
        question: "Le convertisseur d’image en TikZ est-il gratuit ?",
        answer:
          "Oui, et il ne demande aucun compte. Le code généré compile avec pdfLaTeX et TeX Live : il fonctionne dans Overleaf, Octree ou une installation LaTeX locale.",
      },
    ],
    related: (
      <>
        Apprenez les commandes du résultat avec le{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          guide TikZ
        </IntroLink>
        . Pas d’image de départ ? Décrivez le schéma au{" "}
        <IntroLink href="/tools/tikz-generator">générateur TikZ</IntroLink>, ou tracez des données
        avec le <IntroLink href="/tools/pgfplots-generator">générateur pgfplots</IntroLink>.
      </>
    ),
  },

  "tikz-generator": {
    heading: "Générateur TikZ en ligne : créez des schémas TikZ à partir d’une description",
    intro: (
      <>
        <p>
          Ce générateur TikZ écrit du code TikZ à partir d’une description du schéma en langage
          courant. Il produit un document LaTeX complet avec un tikzpicture commenté et les
          bibliothèques nécessaires, comme positioning, arrows.meta et shapes : vous partez d’une
          base fonctionnelle plutôt que d’une page blanche.
        </p>
        <p>
          L’aperçu compile le code avec pdfLaTeX sur une distribution TeX Live complète du service
          de compilation d’Octree. Aucun compte n’est nécessaire. Le code généré est en lecture
          seule ici ; pour un éditeur TikZ en ligne avec aperçu en direct, collez-le dans l’éditeur
          LaTeX ou ouvrez-le dans Octree, où un compte gratuit l’enregistre.
        </p>
      </>
    ),
    stepsHeading: "Comment créer un schéma TikZ en ligne",
    steps: [
      {
        title: "Décrivez le schéma",
        body: "Nommez les nœuds, leurs liaisons et la disposition, par exemple « un organigramme avec Début, Traitement et Fin reliés de gauche à droite ».",
      },
      {
        title: "Générez le TikZ",
        body: "L’IA écrit un document LaTeX complet avec un tikzpicture commenté et les bibliothèques TikZ dont il a besoin.",
      },
      {
        title: "Prévisualisez et éditez",
        body: "Vérifiez le schéma compilé dans l’onglet d’aperçu. Pour modifier le code à la main, collez-le dans l’éditeur LaTeX en ligne ou ouvrez-le dans Octree.",
      },
    ],
    tipsHeading: "Conseils pour de meilleurs schémas TikZ",
    tips: [
      {
        title: "Soyez précis",
        body: "Indiquez les étiquettes des nœuds, les formes, le sens des flèches et les couleurs. Préciser « de gauche à droite » ou « de haut en bas » règle la plupart des problèmes de disposition.",
      },
      {
        title: "Avancez par petites étapes",
        body: "Générez d’abord une version simple, puis demandez une modification à la fois dans Octree au lieu de réécrire la requête de zéro.",
      },
      {
        title: "Utilisez pgfplots pour les graphes de fonctions",
        body: "Pour des axes, des courbes de fonctions et des graphiques de données, le générateur pgfplots produit un code plus propre que du TikZ brut.",
      },
    ],
    faqHeading: "FAQ du générateur TikZ",
    faq: [
      {
        question: "Peut-on utiliser TikZ en ligne sans installer LaTeX ?",
        answer:
          "Oui. Le générateur TikZ écrit le code et le compile sur les serveurs d’Octree avec une distribution TeX Live complète : l’aperçu du schéma fonctionne dans le navigateur sans rien installer.",
      },
      {
        question: "Existe-t-il un éditeur TikZ en ligne avec aperçu en direct ?",
        answer:
          "Le code généré est en lecture seule sur cette page. Collez-le dans l’éditeur LaTeX en ligne gratuit sur tools.useoctree.com/tools/latex-preview, qui recompile pendant la saisie, ou ouvrez-le dans Octree pour l’éditer avec l’IA et l’enregistrer comme projet.",
      },
      {
        question: "Quels types de schémas TikZ peut-il générer ?",
        answer:
          "Organigrammes, arbres, graphes et réseaux, schémas-blocs, machines à états, esquisses de réseaux de neurones, diagrammes de Venn, diagrammes commutatifs et figures géométriques. Les dessins techniques très détaillés demandent généralement des retouches manuelles ensuite.",
      },
      {
        question: "Le générateur TikZ est-il gratuit ?",
        answer:
          "Oui. Générer, prévisualiser, copier et télécharger le code ne demande aucun compte. Un compte Octree gratuit n’est nécessaire que pour enregistrer le schéma comme projet.",
      },
      {
        question: "Le code fonctionne-t-il dans Overleaf ?",
        answer:
          "Oui. Le résultat est un document LaTeX standard qui charge tikz et des bibliothèques TikZ standard, et compile avec pdfLaTeX : il fonctionne dans Overleaf, Octree et les distributions TeX locales.",
      },
    ],
    related: (
      <>
        Apprenez la syntaxe dans le{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          guide TikZ
        </IntroLink>
        , éditez du code TikZ dans l’
        <IntroLink href="/tools/latex-preview">éditeur LaTeX en ligne</IntroLink>, ou transformez
        une image existante en code avec{" "}
        <IntroLink href="/tools/image-to-tikz">image vers TikZ</IntroLink>.
      </>
    ),
  },

  "ai-latex-generator": {
    heading: "Générateur LaTeX par IA : transformez une description en code LaTeX",
    intro: (
      <>
        <p>
          Ce générateur LaTeX par IA écrit du code LaTeX à partir d’une description en langage
          courant. Demandez une présentation beamer, un compte rendu de TP, un article sur deux
          colonnes ou un tableau : il renvoie un document complet avec la bonne classe de document,
          des packages comme amsmath, amssymb et graphicx, et une structure de sections à
          compléter.
        </p>
        <p>
          L’aperçu compile le code avec une distribution TeX Live complète sur le service de
          compilation d’Octree : pdfLaTeX par défaut, XeLaTeX ou LuaLaTeX quand le code l’exige.
          Aucun compte n’est nécessaire ; inscrivez-vous gratuitement seulement si vous voulez
          enregistrer le résultat comme projet.
        </p>
      </>
    ),
    stepsHeading: "Comment générer du LaTeX avec l’IA",
    steps: [
      {
        title: "Décrivez ce dont vous avez besoin",
        body: "Écrivez une ou deux phrases : le type de document, ses sections et tout élément particulier, comme un tableau, une équation ou une mise en page sur deux colonnes.",
      },
      {
        title: "Générez le code LaTeX",
        body: "Cliquez sur « Générer LaTeX ». Le code s’affiche progressivement sous forme de document complet, avec la classe de document, les packages et la structure déjà en place.",
      },
      {
        title: "Prévisualisez, puis copiez ou continuez l’édition",
        body: "Passez à l’onglet d’aperçu pour voir le PDF compilé. Copiez le code, téléchargez-le en .tex ou en PDF, ou ouvrez-le dans Octree pour le retravailler.",
      },
    ],
    tipsHeading: "Conseils pour un meilleur résultat LaTeX",
    tips: [
      {
        title: "Indiquez la classe de document",
        body: "Précisez article, report, diapositives beamer ou letter, et listez les sections voulues ; une requête vague donne un document générique.",
      },
      {
        title: "Demandez une chose à la fois",
        body: "Un seul tableau, une mise en page de figures ou une série de diapositives sort plus propre qu’une thèse entière en une seule requête. Les demandes longues peuvent être tronquées.",
      },
      {
        title: "Remplacez le texte d’exemple",
        body: "Le générateur écrit une structure et un contenu d’exemple, pas vos recherches. Vérifiez chaque équation, et ne gardez jamais une citation que vous n’avez pas vérifiée.",
      },
    ],
    faqHeading: "FAQ du générateur LaTeX par IA",
    faq: [
      {
        question: "Qu’est-ce qu’un générateur LaTeX par IA ?",
        answer:
          "Il transforme une description en langage courant en code LaTeX. Vous décrivez le document, et le générateur écrit un fichier .tex complet avec la classe de document, les packages nécessaires, les sections et un contenu d’exemple que vous modifiez ensuite.",
      },
      {
        question: "Le générateur de code LaTeX est-il gratuit ?",
        answer:
          "Oui. Vous pouvez générer, prévisualiser, copier et télécharger du LaTeX sans compte. Un compte Octree gratuit n’est nécessaire que si vous voulez enregistrer le document comme projet et continuer à l’éditer.",
      },
      {
        question: "Le LaTeX généré compile-t-il ?",
        answer:
          "L’aperçu le compile avec une TeX Live complète sur le service de compilation d’Octree (pdfLaTeX par défaut, XeLaTeX ou LuaLaTeX quand le code en a besoin). En cas d’échec, la fenêtre d’erreur propose d’ouvrir le document dans Octree pour que l’IA corrige l’erreur à partir du journal.",
      },
      {
        question: "Peut-il rédiger un article entier à ma place ?",
        answer:
          "Il écrit le squelette d’un article : la classe de document, les packages, les sections et un contenu d’exemple, comme une équation ou un tableau types. Ce contenu est un texte provisoire, et les documents très longs peuvent être tronqués : considérez le résultat comme un point de départ.",
      },
      {
        question: "Quels types de documents peut-il générer ?",
        answer:
          "Articles, rapports, présentations beamer, lettres, CV, feuilles d’exercices, tableaux et équations isolées sont des demandes fréquentes. Si un document nécessite un package particulier, mentionnez-le dans la description.",
      },
    ],
    related: (
      <>
        Vous voulez comprendre le code qu’il écrit ? Lisez l’
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introduction à LaTeX
        </IntroLink>
        , ou collez n’importe quel code LaTeX dans l’
        <IntroLink href="/tools/latex-preview">éditeur LaTeX en ligne</IntroLink> pour l’éditer
        avec un aperçu PDF en direct.
      </>
    ),
  },

  "table-to-latex": {
    heading: "Convertir un tableau en LaTeX : générateur de tableaux LaTeX à partir d’un CSV",
    intro: (
      <>
        <p>
          Ce générateur de tableaux LaTeX transforme un fichier CSV en tableau LaTeX mis en forme.
          Importez un .csv exporté depuis Excel, Google Sheets ou n’importe quel tableur : un modèle
          d’IA (OpenAI gpt-4o-mini) écrit un document LaTeX complet autour d’un environnement{" "}
          <Cmd>tabular</Cmd>, charge booktabs pour des filets horizontaux propres et règle la ligne
          d’en-tête et l’alignement des colonnes. C’est le moyen le plus rapide de convertir Excel
          en LaTeX : enregistrez d’abord la feuille en CSV, car les fichiers .xlsx ne sont pas lus
          directement.
        </p>
        <p>
          L’onglet « Aperçu » compile le tableau avec une distribution TeX Live complète sur le
          service de compilation d’Octree : vous voyez le résultat avant d’exporter le fichier .tex,
          un PDF ou une image JPG. Le fichier est lu dans votre navigateur et envoyé sous forme de
          texte, et chaque conversion renvoie environ 2 000 tokens de LaTeX, de quoi contenir un
          tableau de résultats de quelques dizaines de lignes. L’outil est gratuit et ne demande
          aucun compte.
        </p>
      </>
    ),
    stepsHeading: "Comment convertir un fichier CSV en tableau LaTeX",
    steps: [
      {
        title: "Enregistrez votre tableau en CSV",
        body: "Dans Excel, choisissez Fichier > Enregistrer sous > CSV UTF-8 (délimité par des virgules) ; dans Google Sheets, Fichier > Télécharger > Valeurs séparées par des virgules. Gardez la ligne d’en-tête en première ligne.",
      },
      {
        title: "Importez le fichier .csv",
        body: "Déposez le fichier dans la zone d’import ou cliquez pour le choisir. Le tableau LaTeX s’affiche progressivement dans l’onglet « Code » sous forme de document complet.",
      },
      {
        title: "Prévisualisez et exportez",
        body: "Ouvrez l’onglet « Aperçu » pour compiler le tableau en PDF, puis exportez le fichier .tex, le PDF ou une image JPG, ou ouvrez-le dans Octree pour placer le tableau dans votre article.",
      },
    ],
    tipsHeading: "Problèmes de tableaux courants et comment les corriger",
    tips: [
      {
        title: "Les caractères spéciaux cassent le tableau",
        body: (
          <>
            <Cmd>&amp;</Cmd>, <Cmd>%</Cmd>, <Cmd>$</Cmd>, <Cmd>#</Cmd> et <Cmd>_</Cmd> dans les
            cellules doivent être échappés en <Cmd>\&amp;</Cmd>, <Cmd>\%</Cmd>, <Cmd>\$</Cmd>,{" "}
            <Cmd>\#</Cmd> et <Cmd>\_</Cmd>. Si l’aperçu échoue, le journal indique la ligne à
            corriger.
          </>
        ),
      },
      {
        title: "Le tableau dépasse de la page",
        body: (
          <>
            Les tableaux larges débordent de la largeur du texte. Utilisez des pages en paysage, une
            police plus petite comme <Cmd>\small</Cmd>, ou placez le tabular dans{" "}
            <Cmd>\resizebox{"{\\textwidth}{!}{...}"}</Cmd> de graphicx.
          </>
        ),
      },
      {
        title: "Les grands tableurs sont tronqués",
        body: "Chaque conversion renvoie environ 2 000 tokens de LaTeX, soit un tableau de quelques dizaines de lignes. Découpez les feuilles plus grandes en plusieurs fichiers CSV, ou ne gardez que les lignes utiles à l’article.",
      },
    ],
    faqHeading: "FAQ du générateur de tableaux LaTeX",
    faq: [
      {
        question: "Comment convertir un tableau Excel en LaTeX ?",
        answer:
          "Enregistrez la feuille en fichier CSV dans Excel (Fichier > Enregistrer sous > CSV), puis importez le .csv ici. L’outil ne lit pas directement les fichiers .xlsx, mais un export CSV de la feuille contient les mêmes valeurs de cellules. Vous obtenez un tableau booktabs dans un document LaTeX complet, que vous pouvez prévisualiser, télécharger et coller dans votre article.",
      },
      {
        question: "Quels formats de fichier le générateur de tableaux LaTeX accepte-t-il ?",
        answer:
          "Uniquement les fichiers .csv. Excel, Google Sheets, LibreOffice Calc et Numbers savent tous exporter une feuille en CSV. Le JSON, les fichiers .xlsx et les tableaux collés ne sont pas acceptés sur cette page.",
      },
      {
        question: "Le résultat utilise-t-il booktabs ?",
        answer:
          "Oui. Le document généré charge booktabs, et le tableau utilise normalement ses filets \\toprule, \\midrule et \\bottomrule. Copiez l’environnement tabular ou table dans votre propre document et ajoutez \\usepackage{booktabs} à son préambule.",
      },
      {
        question: "Le convertisseur CSV vers LaTeX est-il gratuit ?",
        answer:
          "Oui, il est gratuit et ne demande aucun compte. Le tableau est écrit par un modèle d’IA (OpenAI gpt-4o-mini) : vérifiez les nombres et l’alignement des colonnes dans l’aperçu avant de l’utiliser.",
      },
    ],
    related: (
      <>
        Découvrez tabular, multirow et les types de colonnes dans le{" "}
        <IntroLink href="https://www.useoctree.com/learn/tables" external>
          guide des tableaux LaTeX
        </IntroLink>
        , tracez les mêmes données avec le{" "}
        <IntroLink href="/tools/pgfplots-generator">générateur PGFPlots</IntroLink>, ou consultez
        tous les <IntroLink href="/tools/latex-converter">convertisseurs LaTeX</IntroLink>.
      </>
    ),
  },

  "equation-to-latex": {
    heading: "Convertir une équation en LaTeX : comment fonctionne le convertisseur",
    intro: (
      <p>
        Convertissez n’importe quelle équation mathématique en LaTeX en trois étapes. L’outil
        accepte les équations tapées, les captures d’écran et les équations manuscrites, et produit
        du LaTeX à coller directement dans un article, un devoir ou des notes de cours.
      </p>
    ),
    stepsHeading: "Convertir une équation en LaTeX en trois étapes",
    steps: [
      {
        title: "Saisissez ou importez votre équation",
        body: "Tapez l’équation en langage courant (« intégrale de x au carré de 0 à 1 »), collez-la dans n’importe quelle notation, ou déposez une image : une capture d’une formule de manuel, une photo de tableau blanc ou une équation manuscrite depuis votre iPad ou votre téléphone.",
      },
      {
        title: "Convertissez en LaTeX",
        body: "Cliquez sur « Convertir en LaTeX ». L’IA lit l’équation, reconnaît fractions, racines, sommes, intégrales, matrices et lettres grecques, et écrit du LaTeX standard avec amsmath : le résultat compile dans Overleaf, Octree ou n’importe quelle distribution TeX.",
      },
      {
        title: "Vérifiez l’aperçu et copiez le code",
        body: "L’équation rendue s’affiche à côté du code pour que vous puissiez vérifier chaque symbole. Copiez le LaTeX, téléchargez-le en fichier .tex ou en PDF, ou ouvrez-le dans Octree pour continuer à l’éditer.",
      },
    ],
    tipsHeading: "À quoi sert-il ?",
    tips: [
      {
        title: "Devoirs et feuilles d’exercices",
        body: "Transformez une solution manuscrite en rendu tapé sans devoir d’abord apprendre toutes les commandes LaTeX.",
      },
      {
        title: "Articles de recherche et thèses",
        body: "Transférez des équations depuis vos notes, vos diapositives ou d’anciens PDF vers votre manuscrit, sous forme de LaTeX propre et éditable.",
      },
      {
        title: "Notes de cours",
        body: "Photographiez le tableau ou votre cahier après le cours et convertissez chaque formule en LaTeX pour vos notes.",
      },
      {
        title: "Captures de formules de manuels",
        body: "Importez un extrait d’une page de manuel ou de revue et obtenez le LaTeX de la formule au lieu de la retaper.",
      },
      {
        title: "Écriture manuscrite sur iPad ou tablette",
        body: "Exportez vos équations manuscrites depuis GoodNotes, Notability ou OneNote sous forme d’images et convertissez-les en une seule étape.",
      },
    ],
    faqHeading: "FAQ équation vers LaTeX",
    faq: [
      {
        question: "Comment convertir une équation en LaTeX ?",
        answer:
          "Tapez l’équation en texte brut ou en notation mathématique, ou importez-en une image, puis cliquez sur « Convertir en LaTeX ». Le convertisseur renvoie du code LaTeX qui utilise amsmath et affiche un aperçu rendu pour que vous puissiez le vérifier avant de le copier dans votre document.",
      },
      {
        question: "Peut-on convertir une équation manuscrite en LaTeX ?",
        answer:
          "Oui. Importez une photo ou un scan d’une équation manuscrite au format JPEG, PNG, GIF ou WebP, y compris une écriture exportée depuis une application iPad ou tablette. Des images nettes et bien contrastées, avec une équation par image, donnent le LaTeX le plus précis.",
      },
      {
        question: "Le convertisseur d’équations en LaTeX est-il gratuit ?",
        answer:
          "Oui. Le convertisseur est gratuit et ne demande aucun compte. Vous pouvez copier le LaTeX, télécharger un fichier .tex ou un PDF compilé, ou ouvrir le résultat dans l’éditeur Octree.",
      },
      {
        question: "Quels packages LaTeX le résultat nécessite-t-il ?",
        answer:
          "Le code généré utilise une notation mathématique standard qui compile avec les packages amsmath, amssymb et amsfonts. Si vous téléchargez le fichier .tex, le préambule les inclut déjà, et le résultat fonctionne dans Overleaf et toutes les distributions TeX courantes.",
      },
    ],
    related: (
      <>
        Vous cherchez les commandes derrière le résultat ? Parcourez la{" "}
        <IntroLink href="/symbols">référence des symboles LaTeX</IntroLink>. Les maths en texte
        brut se tapent directement dans le champ ci-dessus ; pour continuer à éditer le résultat
        comme document complet, utilisez l’
        <IntroLink href="/tools/latex-preview">éditeur LaTeX en ligne</IntroLink>.
      </>
    ),
  },

  "arxiv-to-latex": {
    heading: "arXiv vers LaTeX : télécharger la source LaTeX de n’importe quel article",
    intro: (
      <>
        <p>
          La plupart des articles d’arXiv ont été rédigés en LaTeX, et arXiv conserve la source
          déposée par les auteurs : les fichiers .tex, la bibliographie, les fichiers de style et
          les figures. Cet outil récupère pour vous cette source LaTeX arXiv. Collez un
          identifiant ou un lien : vous pouvez parcourir les fichiers, lire le fichier .tex
          principal et télécharger le code source arXiv en .zip, sans décompresser vous-même une
          archive .tar.gz.
        </p>
        <p>
          Les téléchargements proviennent directement du service e-print d’arXiv et rien n’est
          conservé. Les sources jusqu’à 30 Mo et 200 fichiers sont prises en charge. Les articles
          déposés uniquement en PDF n’ont pas de TeX à télécharger ; l’outil le signale et vous
          oriente plutôt vers un convertisseur.
        </p>
      </>
    ),
    stepsHeading: "Comment télécharger la source TeX d’un article arXiv",
    steps: [
      {
        title: "Collez l’identifiant ou le lien arXiv",
        body: "Saisissez un identifiant comme 2401.12345, un identifiant à l’ancien format comme hep-th/9711200, ou n’importe quel lien arxiv.org/abs ou arxiv.org/pdf. Ajoutez une version (2401.12345v2) pour obtenir cette révision précise ; sans version, vous obtenez la plus récente.",
      },
      {
        title: "Parcourez la source LaTeX",
        body: "L’outil télécharge l’e-print de l’article depuis arXiv, le décompresse et affiche tous les fichiers. Le fichier .tex principal, celui qui contient \\documentclass et \\begin{document}, s’ouvre dans la visionneuse ; cliquez sur n’importe quel autre fichier .tex, .bib ou .sty pour le lire.",
      },
      {
        title: "Téléchargez-la ou modifiez-la",
        body: "Téléchargez le code source arXiv en .zip, ou ouvrez le fichier principal dans Octree avec ses fichiers \\input et \\include intégrés. Importez ensuite les figures du .zip pour le compiler avec ses images.",
      },
    ],
    faqHeading: "FAQ sur la source LaTeX des articles arXiv",
    faq: [
      {
        question: "Comment télécharger la source LaTeX d’un article arXiv ?",
        answer:
          "Collez l’identifiant ou l’URL arXiv de l’article dans l’outil de cette page. Il récupère la source déposée par les auteurs sur arXiv, liste tous les fichiers, affiche le fichier .tex principal et vous permet de tout télécharger en .zip. Sur arxiv.org, les mêmes fichiers se trouvent derrière le lien « TeX Source » de la page de résumé de l’article, sous forme d’archive .tar.gz.",
      },
      {
        question: "Pourquoi un article indique-t-il qu’il n’a pas de source LaTeX ?",
        answer:
          "Certains auteurs ne déposent qu’un PDF sur arXiv : il n’y a alors aucun fichier .tex à télécharger. Pour ces articles, le convertisseur PDF vers LaTeX peut recréer le texte et les maths sous forme de LaTeX modifiable, sans toutefois retrouver la source originale.",
      },
      {
        question: "Quel est le fichier .tex principal ?",
        answer:
          "Les sources arXiv contiennent souvent plusieurs fichiers .tex. L’outil choisit celui que le fichier 00README d’arXiv désigne comme fichier de premier niveau, s’il existe ; sinon, le fichier qui contient \\documentclass et \\begin{document} et qu’aucun autre fichier n’inclut avec \\input. Les sections chargées avec \\input ou \\include apparaissent comme des fichiers distincts dans l’arborescence.",
      },
      {
        question: "Peut-on réutiliser la source LaTeX d’un article arXiv ?",
        answer:
          "La source est utile pour voir comment un article a été composé, vérifier une équation ou reprendre une macro. La réutilisation du texte, des figures ou de l’article entier dépend de la licence choisie par les auteurs sur arXiv, indiquée sur la page de résumé ; dans tous les cas, citez les auteurs.",
      },
    ],
    related: (
      <>
        Pas de source sur arXiv ? Essayez le{" "}
        <IntroLink href="/tools/pdf-to-latex">convertisseur PDF vers LaTeX</IntroLink>. Modifiez et
        compilez la source dans l’<IntroLink href="/tools/latex-preview">éditeur LaTeX en ligne</IntroLink>,
        ou comptez ses mots avec le{" "}
        <IntroLink href="/tools/latex-word-counter">compteur de mots LaTeX</IntroLink>.
      </>
    ),
  },

  "citation-generator": {
    heading: "Générateur de citations BibTeX pour LaTeX",
    intro: (
      <>
        <p>
          Ce générateur de citations BibTeX transforme les références d’un livre, d’un article de
          revue, d’une communication de conférence ou d’une page web en entrée BibTeX à coller
          dans un fichier .bib et à citer depuis LaTeX. Collez des champs structurés ou une
          référence en texte libre : le générateur écrit une entrée avec un type d’entrée, une clé
          de citation et les champs qu’il parvient à identifier (author, title, year, journal ou
          booktitle, volume, pages, publisher et DOI).
        </p>
        <p>
          Un modèle d’IA (OpenAI gpt-4o-mini) rédige les entrées à partir du texte collé. Il
          n’interroge ni Crossref, ni PubMed, ni un catalogue de bibliothèque : un DOI ou une URL
          seuls ne suffisent donc pas pour obtenir un résultat fiable. Indiquez le titre et les
          auteurs, et comparez le résultat à la source. L’outil est gratuit, ne demande aucun
          compte et exporte un fichier references.bib compatible avec BibTeX, natbib et biblatex.
        </p>
      </>
    ),
    stepsHeading: "Comment générer une citation BibTeX",
    steps: [
      {
        title: "Décrivez la source",
        body: "Collez le titre, les auteurs, l’année et le lieu de publication (revue, conférence ou éditeur) d’un livre, d’un article ou d’une communication, dans n’importe quel ordre ou sous forme de référence en texte libre. Vous pouvez aussi ajouter un DOI ou une URL, mais indiquez tous les détails dont vous disposez : le générateur ne va pas les chercher.",
      },
      {
        title: "Générez l’entrée BibTeX",
        body: (
          <>
            Cliquez sur « Générer BibTeX ». L’IA choisit le type d’entrée (<Cmd>@article</Cmd>,{" "}
            <Cmd>@book</Cmd>, <Cmd>@inproceedings</Cmd>, etc.), écrit une clé de citation comme{" "}
            <Cmd>goodfellow2016deep</Cmd> et remplit les champs qu’elle parvient à identifier.
          </>
        ),
      },
      {
        title: "Vérifiez-la et enregistrez-la",
        body: (
          <>
            Comparez les champs avec la page de l’éditeur, puis copiez l’entrée ou cliquez sur
            « Exporter en .bib » pour télécharger <Cmd>references.bib</Cmd>. L’onglet « Aperçu »
            ouvre dans Octree un document de test natbib qui cite toutes les clés.
          </>
        ),
      },
    ],
    tipsHeading: "Erreurs BibTeX courantes et comment les corriger",
    tips: [
      {
        title: "Citation undefined",
        body: (
          <>
            La clé utilisée dans <Cmd>\cite{"{...}"}</Cmd> doit correspondre exactement à celle qui
            suit <Cmd>@article{"{"}</Cmd>, et le document doit contenir{" "}
            <Cmd>\bibliography{"{references}"}</Cmd> avec un style comme{" "}
            <Cmd>\bibliographystyle{"{plain}"}</Cmd>. Lancez BibTeX, puis LaTeX deux fois.
          </>
        ),
      },
      {
        title: "Noms dans le mauvais ordre",
        body: (
          <>
            Séparez les auteurs par <Cmd>and</Cmd>, pas par des virgules :{" "}
            <Cmd>author = {"{Smith, John and Doe, Jane}"}</Cmd>. Une virgule à l’intérieur d’un nom
            indique l’ordre Nom, Prénom.
          </>
        ),
      },
      {
        title: "Les majuscules disparaissent",
        body: (
          <>
            De nombreux styles mettent les titres en minuscules. Entourez les sigles et les noms
            propres d’accolades, par exemple <Cmd>{"{BERT}"}</Cmd> ou <Cmd>{"{Bayesian}"}</Cmd>,
            pour conserver leurs majuscules.
          </>
        ),
      },
    ],
    faqHeading: "FAQ du générateur de citations BibTeX",
    faq: [
      {
        question: "Comment générer une citation BibTeX ?",
        answer:
          "Collez les détails de la source (titre, auteurs, année, revue ou éditeur) dans le champ et cliquez sur « Générer BibTeX ». L’outil renvoie une entrée BibTeX complète, avec un type d’entrée, une clé de citation et les champs correspondants, que vous pouvez copier ou télécharger sous forme de fichier references.bib.",
      },
      {
        question: "Peut-il créer une entrée BibTeX à partir d’un DOI ou d’une URL ?",
        answer:
          "Vous pouvez coller un DOI ou une URL, mais le générateur ne les recherche ni dans Crossref ni sur le web : un modèle d’IA rédige l’entrée à partir du texte fourni. Pour un article connu, il remplit souvent les champs correctement, mais il peut se tromper : vérifiez chaque champ, ou collez le titre, les auteurs et le lieu de publication en plus du DOI.",
      },
      {
        question: "Met-il en forme les citations APA, MLA ou IEEE ?",
        answer:
          "Il produit uniquement du BibTeX. Le style de citation se choisit dans votre document LaTeX, par exemple avec \\bibliographystyle{IEEEtran} ou \\bibliographystyle{apalike}, ou avec biblatex et style=apa : la même entrée .bib peut ainsi être imprimée dans n’importe quel style.",
      },
      {
        question: "Le générateur BibTeX est-il gratuit ?",
        answer:
          "Oui. Il est gratuit et ne demande aucun compte. Rien n’est enregistré sur cette page : copiez l’entrée ou exportez le fichier .bib avant de partir.",
      },
    ],
    related: (
      <>
        Consultez des exemples commentés dans le{" "}
        <IntroLink href="https://www.useoctree.com/learn/bibliography-examples" external>
          guide des bibliographies LaTeX
        </IntroLink>
        , commencez un article à partir des <IntroLink href="/templates">modèles LaTeX</IntroLink>,
        ou compilez votre document dans l’
        <IntroLink href="/tools/latex-preview">éditeur LaTeX en ligne</IntroLink>.
      </>
    ),
  },

  "html-to-latex": {
    heading: "Convertir du HTML en LaTeX en ligne",
    intro: (
      <>
        <p>
          Ce convertisseur HTML vers LaTeX transforme du balisage web en document LaTeX complet et
          compilable. Collez du HTML dans l’éditeur : un modèle d’IA (OpenAI gpt-4o-mini) associe
          chaque élément à son équivalent LaTeX. Les titres <Cmd>{"<h1>"}</Cmd> à{" "}
          <Cmd>{"<h3>"}</Cmd> deviennent des sections, <Cmd>{"<ul>"}</Cmd> et <Cmd>{"<ol>"}</Cmd>{" "}
          deviennent itemize et enumerate, <Cmd>{"<table>"}</Cmd> devient tabular, et{" "}
          <Cmd>{"<strong>"}</Cmd>, <Cmd>{"<em>"}</Cmd>, <Cmd>{"<code>"}</Cmd> et les liens
          deviennent les commandes LaTeX correspondantes, avec amsmath, amssymb et hyperref dans le
          préambule.
        </p>
        <p>
          L’onglet « Aperçu » compile le résultat avec une distribution TeX Live complète sur le
          service de compilation d’Octree : vous voyez le PDF avant de télécharger le fichier
          .tex. L’outil prend du balisage collé, pas une URL, et chaque conversion renvoie environ
          2 000 tokens de LaTeX : mieux vaut convertir les longues pages en plusieurs parties. Il
          est gratuit et ne demande aucun compte.
        </p>
      </>
    ),
    stepsHeading: "Comment convertir du HTML en LaTeX",
    steps: [
      {
        title: "Collez votre HTML",
        body: "Remplacez l’exemple par votre propre balisage : une page complète, un fragment d’article ou le code source d’un tableau copié depuis un site web ou un export de CMS.",
      },
      {
        title: "Lancez la conversion en LaTeX",
        body: (
          <>
            Cliquez sur « Convertir en LaTeX ». Le LaTeX s’affiche progressivement dans l’onglet
            « Code » sous forme de document complet, de <Cmd>\documentclass{"{article}"}</Cmd> à{" "}
            <Cmd>\end{"{document}"}</Cmd>.
          </>
        ),
      },
      {
        title: "Prévisualisez et exportez",
        body: "Ouvrez l’onglet « Aperçu » pour compiler le document en PDF, puis exportez-le en fichier .tex ou en PDF, ou ouvrez-le dans Octree pour continuer à l’éditer.",
      },
    ],
    tipsHeading: "Conseils pour une conversion propre",
    tips: [
      {
        title: "Retirez ce que LaTeX ne peut pas utiliser",
        body: "Supprimez scripts, styles en ligne, navigation et publicités avant la conversion. Le CSS appliqué aux paragraphes, comme les couleurs et les polices, n’a pas d’équivalent LaTeX direct, et une entrée plus courte laisse plus de place au contenu.",
      },
      {
        title: "Les images deviennent des emplacements réservés",
        body: (
          <>
            Une balise <Cmd>{"<img>"}</Cmd> ne peut devenir qu’une ligne{" "}
            <Cmd>\includegraphics</Cmd> ; le fichier image lui-même n’est pas téléchargé, l’aperçu
            ne peut donc pas l’afficher. Ajoutez les fichiers dans Octree ou commentez ces lignes.
          </>
        ),
      },
      {
        title: "Caractères spéciaux",
        body: (
          <>
            Si la compilation échoue sur un symbole, vérifiez que les <Cmd>&amp;</Cmd>,{" "}
            <Cmd>%</Cmd>, <Cmd>#</Cmd> et <Cmd>_</Cmd> du texte ont bien été échappés en{" "}
            <Cmd>\&amp;</Cmd>, <Cmd>\%</Cmd>, <Cmd>\#</Cmd> et <Cmd>\_</Cmd>.
          </>
        ),
      },
    ],
    faqHeading: "FAQ HTML vers LaTeX",
    faq: [
      {
        question: "Comment convertir du HTML en LaTeX ?",
        answer:
          "Collez le HTML dans l’éditeur de cette page et cliquez sur « Convertir en LaTeX ». Les titres deviennent des commandes \\section, les listes deviennent itemize ou enumerate, les tableaux deviennent tabular, et le gras, l’italique et les liens deviennent \\textbf, \\emph et \\href. Vérifiez le résultat dans l’onglet « Aperçu » et téléchargez le .tex ou le PDF.",
      },
      {
        question: "Cet outil peut-il convertir du LaTeX en HTML ?",
        answer:
          "Non, il convertit uniquement du HTML en LaTeX. Pour passer de LaTeX à HTML, la solution habituelle est un outil TeX local comme make4ht ou htlatex de TeX4ht, ou Pandoc (pandoc paper.tex -o paper.html). Pour la publication web, le convertisseur LaTeX vers Markdown de ce site est une autre option.",
      },
      {
        question: "Quelle longueur de HTML peut-on convertir ?",
        answer:
          "Il n’y a pas de limite fixe en entrée, mais chaque conversion renvoie environ 2 000 tokens de LaTeX, soit quelques pages. Convertissez une longue page section par section, ou retirez d’abord scripts, styles et navigation pour n’envoyer que le contenu.",
      },
      {
        question: "Le convertisseur HTML vers LaTeX est-il gratuit ?",
        answer:
          "Oui, il est gratuit et ne demande aucun compte. La conversion utilise un modèle d’IA (OpenAI gpt-4o-mini) : relisez le résultat, en particulier les tableaux avec des cellules fusionnées.",
      },
    ],
    related: (
      <>
        Besoin d’un autre format ? Consultez tous les{" "}
        <IntroLink href="/tools/latex-converter">convertisseurs LaTeX</IntroLink>, convertissez du{" "}
        <IntroLink href="/tools/markdown-to-latex">Markdown en LaTeX</IntroLink>, ou apprenez les
        bases avec le{" "}
        <IntroLink href="https://www.useoctree.com/learn/tables" external>
          guide des tableaux LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "latex-to-word": {
    heading: "Convertir LaTeX en Word (DOCX) en ligne",
    intro: (
      <>
        <p>
          Ce convertisseur LaTeX vers Word transforme un document .tex en fichier Microsoft Word
          .docx modifiable. Il procède en deux passes. D’abord, un modèle d’IA (OpenAI
          gpt-4o-mini) lit votre LaTeX et le réécrit en HTML sémantique propre : il conserve les
          titres <GuideCode>\section</GuideCode>, les listes, les tableaux{" "}
          <GuideCode>tabular</GuideCode>, le gras et l’italique, les liens et les notes de bas de
          page, et supprime le préambule et les commandes de mise en page, qui n’ont pas de sens
          dans Word. Ensuite, ce HTML est converti de façon déterministe en éléments natifs de
          Word : styles Titre 1 à Titre 6, listes à puces et numérotées, tableaux avec ligne
          d’en-tête et passages de texte mis en forme.
        </p>
        <p>
          Le résultat est un vrai fichier .docx : le suivi des modifications, les commentaires et
          la table des matières fonctionnent comme dans n’importe quel fichier Word. Les maths
          sont écrites en texte Unicode lisible plutôt qu’en équations Word, les figures sont
          remplacées par leurs légendes, et l’entrée est limitée à 60 000 caractères. Le
          convertisseur est gratuit, ne demande aucun compte et ne conserve rien une fois le
          fichier renvoyé.
        </p>
        <GuideTable
          headers={["LaTeX", "Résultat dans Word"]}
          rows={[
            [<GuideCode key="1">\title, \section, \subsection</GuideCode>, "Styles Titre, Titre 1, Titre 2"],
            [<GuideCode key="2">itemize, enumerate, description</GuideCode>, "Listes à puces et numérotées, niveaux d’imbrication conservés"],
            [<GuideCode key="3">tabular, booktabs, longtable</GuideCode>, "Tableau Word avec ligne d’en-tête en gras ; légende au-dessus"],
            [<GuideCode key="4">\textbf, \emph, \underline, \texttt</GuideCode>, "Texte en gras, en italique, souligné, à chasse fixe"],
            [<GuideCode key="5">$inline math$</GuideCode>, "Texte lisible avec symboles Unicode, exposants et indices"],
            [<GuideCode key="6">equation, align, \[ \]</GuideCode>, "Un paragraphe centré par ligne d’équation, avec son numéro"],
            [<GuideCode key="7">\href, \url, \footnote</GuideCode>, "Lien hypertexte cliquable ; texte de la note entre parenthèses"],
            [<GuideCode key="8">\cite, thebibliography</GuideCode>, "Repères [key] et section « References » numérotée"],
            [<GuideCode key="9">figure, \includegraphics</GuideCode>, "Légende seule (les fichiers image ne sont pas envoyés)"],
          ]}
        />
      </>
    ),
    stepsHeading: "Comment convertir LaTeX en Word",
    steps: [
      {
        title: "Collez votre LaTeX",
        body: "Collez le contenu de votre fichier .tex, un document complet ou un extrait, jusqu’à 60 000 caractères.",
      },
      {
        title: "Lancez la conversion en Word",
        body: "Cliquez sur « Convert to Word ». Une fois la conversion terminée, document.docx se télécharge automatiquement ; le bouton de téléchargement reste affiché pour en obtenir une autre copie.",
      },
      {
        title: "Ouvrez le fichier dans Word",
        body: "Ouvrez le fichier dans Microsoft Word, Google Docs, LibreOffice ou Pages. Les titres utilisent les styles de titre propres à Word (Titre 1, Titre 2, etc.) : le volet de navigation et la table des matières fonctionnent donc immédiatement.",
      },
    ],
    tipsHeading: "Limites et comment les contourner",
    tips: [
      {
        title: "Les équations sont en texte brut",
        body: (
          <>
            Les maths deviennent du texte Unicode lisible comme x² + y² = r², et non des équations
            Word modifiables. Pour obtenir des équations Word natives (OMML), lancez Pandoc en
            local : <Cmd>pandoc paper.tex -o paper.docx --citeproc --bibliography=refs.bib</Cmd>,
            ou rendez une formule clé en image avec le{" "}
            <IntroLink href="/tools/latex-to-png">convertisseur LaTeX vers PNG</IntroLink>.
          </>
        ),
      },
      {
        title: "Les figures apparaissent sous forme de légendes",
        body: "Les fichiers image ne sont pas envoyés avec le texte : chaque figure est donc remplacée par sa légende. Insérez ensuite les images dans Word.",
      },
      {
        title: "Le texte est trop long",
        body: "La limite est de 60 000 caractères. Convertissez une thèse chapitre par chapitre et collez les parties dans un même fichier Word.",
      },
    ],
    faqHeading: "FAQ LaTeX vers Word",
    faq: [
      {
        question: "Comment convertir un fichier LaTeX en Word ?",
        answer:
          "Collez le contenu de votre fichier .tex dans l’éditeur et cliquez sur « Convert to Word ». Le convertisseur lit la structure du LaTeX, la reconstruit sous forme de document Word avec de vrais titres, listes, tableaux et mises en forme de texte, et télécharge document.docx sur votre ordinateur. Ouvrez-le dans Microsoft Word, Google Docs, LibreOffice ou Pages.",
      },
      {
        question: "Que deviennent les équations quand on convertit du LaTeX en Word ?",
        answer:
          "Les maths en ligne et hors texte sont converties en texte brut lisible avec des symboles Unicode (par exemple x² + y² = r² ou ∫ f(x) dx), les équations hors texte étant centrées sur leur propre ligne. Ce ne sont pas des objets équation Word natifs. Si vous avez besoin d’équations Word modifiables (OMML), lancez Pandoc en local : pandoc paper.tex -o paper.docx. Pour une formule au rendu parfait, rendez-la en image avec l’outil LaTeX vers PNG et collez l’image.",
      },
      {
        question: "Les tableaux, les listes et les bibliographies sont-ils conservés ?",
        answer:
          "Les tableaux (tabular, booktabs, longtable) deviennent de vrais tableaux Word avec une ligne d’en-tête ; itemize et enumerate deviennent des listes à puces et numérotées ; le gras, l’italique, le souligné, la chasse fixe, les liens et les notes de bas de page sont conservés. Les citations apparaissent sous la forme [key] ou en texte auteur-année, et un environnement thebibliography devient une section « References » numérotée. Les figures sont remplacées par leurs légendes, car le convertisseur n’a pas accès aux fichiers image.",
      },
      {
        question: "La conversion de LaTeX en Word est-elle gratuite, et mon document est-il conservé ?",
        answer:
          "Le convertisseur est gratuit, sans inscription. Votre LaTeX est envoyé à notre serveur pour la conversion ; le fichier Word est généré en mémoire puis renvoyé en continu à votre navigateur, et rien n’est conservé une fois la réponse envoyée. Les documents jusqu’à 60 000 caractères sont pris en charge, ce qui couvre un article ou un chapitre de thèse classique.",
      },
    ],
    related: (
      <>
        Besoin plutôt de Markdown pour Notion ou GitHub ? Utilisez le{" "}
        <IntroLink href="/tools/latex-to-markdown">convertisseur LaTeX vers Markdown</IntroLink>,
        compilez un PDF dans l’<IntroLink href="/tools/latex-preview">éditeur LaTeX en ligne</IntroLink>,
        ou consultez tous les <IntroLink href="/tools/latex-converter">convertisseurs LaTeX</IntroLink>.
      </>
    ),
  },

  "latex-to-png": {
    heading: "Convertir LaTeX en PNG : vos équations en image",
    intro: (
      <>
        <p>
          Ce convertisseur LaTeX vers PNG rend une équation, une figure TikZ ou la première page
          d’un document sous forme d’image PNG. Votre code est compilé avec une installation TeX
          Live complète sur le service de compilation d’Octree, celui qu’utilise aussi l’
          <IntroLink href="/tools/latex-preview">éditeur LaTeX en ligne</IntroLink> : tous les
          packages que vous utiliseriez en local sont disponibles. Le PDF revient dans votre
          navigateur, où pdf.js pixellise sa première page à la résolution (DPI) choisie et produit
          un PNG sur fond transparent ou blanc. Aucune IA n’intervient, et rien n’est conservé une
          fois la compilation terminée.
        </p>
        <p>
          Pour une formule seule, la classe <GuideCode>standalone</GuideCode> avec l’option{" "}
          <GuideCode>preview</GuideCode> recadre la page sur l’équation, et{" "}
          <GuideCode>border=4pt</GuideCode> ajoute une petite marge autour. Utilisez l’image dans
          des diapositives, Word et Google Docs, des fichiers README, Notion, Slack ou un e-mail :
          partout où les maths ne peuvent pas être composées. L’outil est gratuit et ne demande
          aucun compte.
        </p>
        <GuidePre>{`\\documentclass[preview,border=4pt]{standalone}
\\usepackage{amsmath,amssymb}
\\begin{document}
$\\displaystyle \\hat{H}\\psi = E\\psi$
\\end{document}`}</GuidePre>
      </>
    ),
    stepsHeading: "Comment convertir LaTeX en PNG",
    steps: [
      {
        title: "Écrivez l’équation ou le document",
        body: (
          <>
            Modifiez l’exemple, qui utilise{" "}
            <Cmd>\documentclass[preview,border=4pt]{"{standalone}"}</Cmd> pour que l’image soit
            recadrée sur la formule, ou collez n’importe quel document complet.
          </>
        ),
      },
      {
        title: "Choisissez la résolution et le fond",
        body: "Choisissez 1× (96 DPI), 2× (192 DPI) ou 4× (384 DPI), et laissez « Transparent background » coché pour les diapositives et les thèmes sombres, ou décochez-le pour un fond blanc.",
      },
      {
        title: "Convertissez et enregistrez",
        body: "Cliquez sur « Convert to PNG ». Téléchargez latex.png ou copiez l’image dans le presse-papiers pour la coller dans PowerPoint, Google Docs, Notion ou Slack.",
      },
    ],
    tipsHeading: "Conseils pour de meilleures images",
    tips: [
      {
        title: "La formule touche le bord",
        body: (
          <>
            Augmentez <Cmd>border=4pt</Cmd> dans les options de la classe de document. Utilisez{" "}
            <Cmd>$\displaystyle ...$</Cmd> en ligne plutôt que <Cmd>\[ ... \]</Cmd>, qui occupe
            toute la largeur de la ligne.
          </>
        ),
      },
      {
        title: "Une image pour une diapositive sombre",
        body: (
          <>
            Chargez <Cmd>xcolor</Cmd> et écrivez <Cmd>\color{"{white}"}</Cmd> avant la formule ;
            avec un fond transparent, le texte blanc ressort sur n’importe quel thème sombre.
          </>
        ),
      },
      {
        title: "Une seule page s’affiche",
        body: "Seule la première page du PDF est rendue. Faites une conversion par équation, ou compilez un document de plusieurs pages en PDF dans l’éditeur LaTeX en ligne.",
      },
    ],
    faqHeading: "FAQ LaTeX vers PNG",
    faq: [
      {
        question: "Comment convertir une équation LaTeX en image PNG ?",
        answer:
          "Placez votre équation dans un document standalone (l’exemple par défaut utilise \\documentclass[preview,border=4pt]{standalone}), choisissez une résolution et cliquez sur « Convert to PNG ». Le LaTeX est compilé en PDF sur notre serveur, la première page est rendue dans votre navigateur, et vous pouvez télécharger le PNG ou le copier directement dans le presse-papiers.",
      },
      {
        question: "Peut-on obtenir un PNG LaTeX sur fond transparent ?",
        answer:
          "Oui. Laissez l’option « Transparent background » cochée. Comme la classe standalone ne peint aucune couleur de page, tous les pixels hors de la formule restent transparents : l’image s’intègre proprement aux diapositives sombres, aux fonds colorés et aux pages web. Décochez l’option pour un fond blanc opaque.",
      },
      {
        question: "Quelle résolution choisir pour des diapositives ou pour l’impression ?",
        answer:
          "1× (96 DPI) suffit pour un aperçu rapide ou un message de chat. Choisissez 2× (192 DPI) pour Google Slides, PowerPoint, Word, Google Docs et Notion, où l’image s’affiche à peu près à sa taille naturelle sur les écrans haute densité. Choisissez 4× (384 DPI) si l’image doit être imprimée ou agrandie.",
      },
      {
        question: "Est-ce que ça marche avec un document LaTeX complet, et pas seulement une équation ?",
        answer:
          "Oui. Tout document qui compile avec pdflatex fonctionne, y compris un article, une présentation beamer ou une figure TikZ. Seule la première page est rendue en PNG ; pour un document de plusieurs pages, utilisez l’outil d’aperçu LaTeX pour compiler et télécharger le PDF complet.",
      },
    ],
    related: (
      <>
        Besoin du document entier ? Compilez-le dans l’
        <IntroLink href="/tools/latex-preview">éditeur LaTeX en ligne</IntroLink>, transformez-le
        en <IntroLink href="/tools/latex-to-word">fichier Word</IntroLink>, ou cherchez des
        commandes dans le{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guide des maths en LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "markdown-to-latex": {
    heading: "Convertir Markdown en LaTeX en ligne",
    intro: (
      <>
        <p>
          Ce convertisseur Markdown vers LaTeX transforme du texte .md en document LaTeX complet
          et compilable. Un modèle d’IA (OpenAI gpt-4o-mini) réécrit les titres en sections, le
          gras et l’italique en <Cmd>\textbf</Cmd> et <Cmd>\textit</Cmd>, les listes à puces et
          numérotées en itemize et enumerate, les tableaux en tabular, les blocs de code délimités
          en listings de code et les liens en hyperliens. Il charge des packages comme booktabs,
          listings et hyperref, et conserve les maths en ligne et hors texte sous forme de maths
          LaTeX.
        </p>
        <p>
          L’onglet « Aperçu » compile le résultat avec une distribution TeX Live complète sur le
          service de compilation d’Octree : vous voyez le PDF avant de télécharger le fichier
          .tex. L’entrée est du texte collé, et chaque conversion renvoie environ 2 000 tokens de
          LaTeX, de quoi couvrir quelques pages ; découpez les fichiers plus longs. L’outil est
          gratuit, ne demande aucun compte et convient aux fichiers README, aux notes de cours et
          aux brouillons rédigés dans Obsidian, Notion ou Typora qui doivent devenir un article ou
          un chapitre de thèse.
        </p>
      </>
    ),
    stepsHeading: "Comment convertir du Markdown en LaTeX",
    steps: [
      {
        title: "Collez votre Markdown",
        body: "Remplacez l’exemple par votre propre contenu .md : des notes Obsidian ou Notion, un README, ou un brouillon avec titres, listes, tableaux, blocs de code et maths.",
      },
      {
        title: "Lancez la conversion en LaTeX",
        body: (
          <>
            Cliquez sur « Convertir en LaTeX ». Un document complet s’affiche progressivement dans
            l’onglet « Code », avec les titres <Cmd>#</Cmd> en <Cmd>\section</Cmd>, les listes en
            itemize et enumerate, et les maths <Cmd>$...$</Cmd> et <Cmd>$$...$$</Cmd> conservées en
            maths LaTeX.
          </>
        ),
      },
      {
        title: "Prévisualisez et exportez",
        body: "Ouvrez l’onglet « Aperçu » pour compiler le document en PDF, puis exportez le fichier .tex ou le PDF, ou ouvrez-le dans Octree pour continuer à écrire.",
      },
    ],
    tipsHeading: "Problèmes courants et comment les corriger",
    tips: [
      {
        title: "Undefined control sequence dans les maths",
        body: (
          <>
            Les maths Markdown sont transmises telles quelles : des commandes propres à KaTeX ou un{" "}
            <Cmd>\mathbb</Cmd> sans amssymb peuvent donc échouer. Le journal indique la ligne ;
            corrigez la commande ou ajoutez le package.
          </>
        ),
      },
      {
        title: "Les images n’apparaissent pas",
        body: (
          <>
            <Cmd>![alt](image.png)</Cmd> devient une ligne <Cmd>\includegraphics</Cmd>, mais le
            fichier image n’est pas importé. Importez-le dans Octree ou commentez la ligne pour
            compiler.
          </>
        ),
      },
      {
        title: "Les longs documents s’arrêtent avant la fin",
        body: "Chaque conversion renvoie environ 2 000 tokens de LaTeX. Convertissez un long fichier un chapitre ou une section à la fois, puis assemblez les parties.",
      },
    ],
    faqHeading: "FAQ Markdown vers LaTeX",
    faq: [
      {
        question: "Comment convertir du Markdown en LaTeX en ligne ?",
        answer:
          "Collez votre Markdown dans l’éditeur de cette page et cliquez sur « Convertir en LaTeX ». L’outil renvoie un document LaTeX complet avec les packages nécessaires, que vous pouvez prévisualiser en PDF et télécharger en fichier .tex. Aucune installation ni aucun compte ne sont nécessaires.",
      },
      {
        question: "Les équations mathématiques sont-elles conservées ?",
        answer:
          "Oui. Les maths en ligne entre $...$ et les maths hors texte entre $$...$$ sont conservées en maths LaTeX, et amsmath et amssymb sont chargés dans le préambule : les équations écrites pour MathJax ou KaTeX compilent donc généralement sans modification.",
      },
      {
        question: "Quelle différence avec Pandoc ?",
        answer:
          "Pandoc (pandoc notes.md -o notes.tex) est un convertisseur déterministe en ligne de commande, à installer en local. Cet outil fonctionne dans le navigateur, utilise un modèle d’IA (OpenAI gpt-4o-mini) pour écrire le LaTeX et compile immédiatement un aperçu PDF. Relisez le résultat, car l’IA peut reformuler ou restructurer le contenu.",
      },
      {
        question: "Peut-on convertir un fichier .md en .tex ?",
        answer:
          "Ouvrez le fichier .md dans n’importe quel éditeur de texte, copiez son contenu dans le convertisseur et cliquez sur « Convertir en LaTeX », puis utilisez « Exporter » pour télécharger document.tex. La page accepte du texte collé, pas l’import de fichiers.",
      },
    ],
    related: (
      <>
        Vous voulez faire l’inverse ? Utilisez le{" "}
        <IntroLink href="/tools/latex-to-markdown">convertisseur LaTeX vers Markdown</IntroLink>,
        consultez tous les <IntroLink href="/tools/latex-converter">convertisseurs LaTeX</IntroLink>,
        ou lisez l’
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introduction à LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "latex-converter": {
    heading: "Convertisseurs LaTeX : convertir vers et depuis LaTeX en ligne",
    intro: (
      <>
        <p>
          Les convertisseurs LaTeX d’Octree couvrent les formats que l’on a le plus souvent besoin
          de faire entrer dans LaTeX ou d’en faire sortir. Vers LaTeX : Markdown, HTML, MathML et
          diagrammes Mermaid, tableaux CSV issus d’Excel ou de Google Sheets, PDF, photos
          d’équations, images de schémas et articles arXiv. Depuis LaTeX : Markdown pour GitHub et
          Notion, Word .docx pour les relecteurs et les plateformes de soumission, images PNG pour
          les diapositives, et PDF via l’éditeur LaTeX en ligne.
        </p>
        <p>
          Chaque convertisseur est gratuit, fonctionne dans le navigateur et ne demande aucun
          compte. La plupart utilisent un modèle d’IA, car passer d’un format à un autre demande
          du discernement ; les résultats en LaTeX sont compilés avec une distribution TeX Live
          complète sur le service de compilation d’Octree, pour que vous puissiez vérifier le PDF
          avant de le télécharger. arXiv vers LaTeX, LaTeX vers PNG et LaTeX vers PDF n’utilisent
          aucune IA. Le tableau ci-dessus liste chaque convertisseur avec son entrée, sa sortie et
          son meilleur usage.
        </p>
      </>
    ),
    stepsHeading: "Comment utiliser les convertisseurs LaTeX",
    steps: [
      {
        title: "Partez de ce que vous avez",
        body: "Choisissez la carte qui correspond à votre entrée : Markdown, HTML, MathML, Mermaid, un fichier CSV, un PDF, une image ou un identifiant arXiv pour obtenir du LaTeX, ou un document LaTeX pour obtenir du Markdown, un fichier Word, une image PNG ou un PDF.",
      },
      {
        title: "Collez ou importez, puis convertissez",
        body: "Chaque convertisseur s’ouvre sur sa propre page. Collez votre contenu ou importez votre fichier et lancez la conversion ; les convertisseurs à IA affichent le résultat au fur et à mesure de son écriture.",
      },
      {
        title: "Vérifiez le résultat et exportez",
        body: "Les résultats en LaTeX sont accompagnés d’un aperçu PDF compilé : vous pouvez les vérifier avant de télécharger le fichier .tex. Ouvrez un résultat LaTeX dans Octree pour continuer à l’éditer.",
      },
    ],
    tipsHeading: "Conseils pour de meilleures conversions",
    tips: [
      {
        title: "Relisez le résultat de l’IA",
        body: "Les convertisseurs à IA gèrent les entrées désordonnées et les packages inhabituels, mais ils peuvent reformuler ou omettre du contenu. Comparez l’aperçu à votre source avant de soumettre quoi que ce soit.",
      },
      {
        title: "Convertissez les longs documents en plusieurs parties",
        body: "Les convertisseurs Markdown, HTML, Mermaid, CSV et LaTeX vers Markdown renvoient environ 2 000 tokens par conversion, soit quelques pages, et LaTeX vers Word accepte jusqu’à 60 000 caractères. Découpez une thèse par chapitre.",
      },
      {
        title: "Les figures voyagent à part",
        body: "Aucun convertisseur n’envoie les fichiers image avec le texte. Les figures deviennent des lignes \\includegraphics, des liens d’image ou des légendes : ajoutez les fichiers ensuite.",
      },
    ],
    faqHeading: "FAQ des convertisseurs LaTeX",
    faq: [
      {
        question: "Qu’est-ce qu’un convertisseur LaTeX ?",
        answer:
          "Un convertisseur LaTeX traduit entre une source LaTeX et un autre format. Les convertisseurs vers LaTeX prennent du Markdown, du HTML, du MathML, du Mermaid, des tableaux CSV, des PDF ou des images et produisent du code .tex ; les convertisseurs depuis LaTeX prennent une source .tex et produisent du Markdown, des images PNG, des documents Word ou des PDF. Cette page rassemble tous les convertisseurs gratuits d’Octree, dans les deux sens.",
      },
      {
        question: "Quels convertisseurs utilisent l’IA, et lesquels sont déterministes ?",
        answer:
          "Markdown, HTML, MathML, Mermaid, tableau (CSV), PDF, image et équation vers LaTeX, ainsi que LaTeX vers Markdown, utilisent un modèle d’IA. LaTeX vers Word utilise l’IA pour une première passe, puis construit le .docx de façon déterministe. arXiv vers LaTeX, LaTeX vers PNG et LaTeX vers PDF n’utilisent aucune IA : ils téléchargent ou compilent votre entrée telle quelle.",
      },
      {
        question: "Comment convertir gratuitement du LaTeX en Word ou en PDF ?",
        answer:
          "Pour Word, ouvrez le convertisseur LaTeX vers Word, collez votre document et téléchargez document.docx. Pour le PDF, ouvrez l’éditeur LaTeX en ligne, collez votre document et téléchargez le PDF compilé. Les deux sont gratuits et ne demandent aucun compte.",
      },
      {
        question: "La taille des documents est-elle limitée ?",
        answer:
          "LaTeX vers Word accepte jusqu’à 60 000 caractères, et PDF vers LaTeX accepte des PDF jusqu’à 3 Mo et 20 pages. Les convertisseurs Markdown, HTML, Mermaid, CSV et LaTeX vers Markdown renvoient environ 2 000 tokens par conversion, soit quelques pages : convertissez les longs documents en plusieurs parties. Les outils basés sur la compilation acceptent tout document qui compile dans la limite de temps du serveur.",
      },
    ],
    related: (
      <>
        Vous débutez en LaTeX ? Lisez l’
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introduction à LaTeX
        </IntroLink>
        , éditez un document dans l’
        <IntroLink href="/tools/latex-preview">éditeur LaTeX en ligne</IntroLink>, ou parcourez la{" "}
        <IntroLink href="/">liste complète des outils LaTeX</IntroLink>.
      </>
    ),
  },

  "latex-to-markdown": {
    heading: "Convertir LaTeX en Markdown en ligne",
    intro: (
      <>
        <p>
          Ce convertisseur LaTeX vers Markdown transforme un document ou un extrait .tex en
          Markdown standard et propre. Un modèle d’IA (OpenAI gpt-4o-mini) réécrit les sections en
          titres <Cmd>#</Cmd>, itemize et enumerate en listes, les tableaux tabular et booktabs en
          tableaux Markdown, <Cmd>\textbf</Cmd> et <Cmd>\emph</Cmd> en gras et en italique, les
          environnements de code en blocs de code délimités et <Cmd>\href</Cmd> en liens. Les maths
          restent en LaTeX entre <Cmd>$...$</Cmd> et <Cmd>$$...$$</Cmd>, que GitHub, Obsidian et
          les autres moteurs de rendu KaTeX ou MathJax affichent.
        </p>
        <p>
          L’outil est gratuit, ne demande aucun compte et prend du texte collé. Chaque conversion
          renvoie environ 2 000 tokens de Markdown : convertissez les longs articles en plusieurs
          parties. Les figures deviennent des liens d’image quand c’est possible et les citations
          ne sont pas résolues à partir d’un fichier .bib, prévoyez donc de les corriger à la
          main. Utilisez-le pour publier un article sur un blog, transformer des notes de cours en
          README ou déplacer des notes LaTeX dans Notion ou Obsidian.
        </p>
      </>
    ),
    stepsHeading: "Comment convertir LaTeX en Markdown",
    steps: [
      {
        title: "Collez votre LaTeX",
        body: "Collez un document .tex complet ou un simple extrait, comme une section, un tableau ou une liste. Le préambule n’est pas nécessaire.",
      },
      {
        title: "Lancez la conversion en Markdown",
        body: "Cliquez sur « Convertir en Markdown ». Le Markdown s’affiche progressivement dans l’éditeur de sortie, au fur et à mesure de son écriture.",
      },
      {
        title: "Copiez-le ou téléchargez-le",
        body: "Copiez le Markdown depuis l’éditeur de sortie, ou utilisez « Exporter en Markdown » pour télécharger document.md pour GitHub, Obsidian, Notion ou un site statique.",
      },
    ],
    tipsHeading: "Conseils pour une conversion propre",
    tips: [
      {
        title: "Les maths ont besoin d’un moteur de rendu",
        body: (
          <>
            Les équations restent sous la forme <Cmd>$...$</Cmd> et <Cmd>$$...$$</Cmd>. GitHub,
            Obsidian, Jupyter et la plupart des générateurs de sites statiques avec KaTeX ou
            MathJax les affichent ; les visionneuses Markdown basiques montrent le LaTeX brut.
          </>
        ),
      },
      {
        title: "Macros personnalisées",
        body: (
          <>
            Les commandes définies avec <Cmd>\newcommand</Cmd> n’ont pas d’équivalent en Markdown.
            Incluez leurs définitions dans l’entrée pour que le convertisseur puisse les
            développer, et vérifiez le résultat.
          </>
        ),
      },
      {
        title: "Figures et citations",
        body: (
          <>
            Les figures deviennent, quand c’est possible, des liens d’image Markdown vers les noms
            de fichiers d’origine, et les clés <Cmd>\cite</Cmd> ne sont pas résolues à partir d’un
            fichier .bib. Placez les images à côté du fichier .md et corrigez les références à la
            main.
          </>
        ),
      },
    ],
    faqHeading: "FAQ LaTeX vers Markdown",
    faq: [
      {
        question: "Comment convertir du LaTeX en Markdown ?",
        answer:
          "Collez votre LaTeX dans l’éditeur de gauche et cliquez sur « Convertir en Markdown ». Les sections deviennent des titres #, itemize et enumerate deviennent des listes, tabular devient un tableau Markdown, \\textbf et \\emph deviennent du gras et de l’italique, et les environnements de code deviennent des blocs de code délimités. Copiez le résultat ou exportez document.md.",
      },
      {
        question: "Les équations sont-elles conservées ?",
        answer:
          "Oui. Les maths en ligne sont conservées entre $...$ et les maths hors texte entre $$...$$, écrites en LaTeX : elles s’affichent partout où le Markdown est rendu avec MathJax ou KaTeX, y compris sur GitHub, dans Obsidian et dans les notebooks Jupyter.",
      },
      {
        question: "Quelle longueur de LaTeX peut-on convertir ?",
        answer:
          "Il n’y a pas de limite fixe en entrée, mais chaque conversion renvoie environ 2 000 tokens de Markdown, soit quelques pages. Convertissez une thèse ou un long article un chapitre ou une section à la fois.",
      },
      {
        question: "Est-ce gratuit, et est-ce mieux que Pandoc ?",
        answer:
          "C’est gratuit et sans compte. L’outil utilise un modèle d’IA (OpenAI gpt-4o-mini), qui s’en sort avec les packages inhabituels et les sources désordonnées, mais dont le résultat doit être relu. Pandoc (pandoc paper.tex -o paper.md) est déterministe et plus adapté aux documents très longs, mais il doit être installé en local.",
      },
    ],
    related: (
      <>
        Vous voulez faire l’inverse ? Utilisez le{" "}
        <IntroLink href="/tools/markdown-to-latex">convertisseur Markdown vers LaTeX</IntroLink>,
        exportez vers <IntroLink href="/tools/latex-to-word">Word</IntroLink>, ou consultez tous
        les <IntroLink href="/tools/latex-converter">convertisseurs LaTeX</IntroLink>.
      </>
    ),
  },

  "latex-word-counter": {
    heading: "Compter les mots d’un document LaTeX en ligne",
    intro: (
      <p>
        Compter les mots en LaTeX est plus difficile que dans un traitement de texte : un simple
        comptage des mots d’un fichier .tex inclut aussi des commandes comme{" "}
        <Cmd>\begin{"{itemize}"}</Cmd>, les étiquettes et les équations. Ce compteur de mots LaTeX
        gratuit lit la source comme doit le faire un outil qui comprend TeX, en ignorant le
        balisage et les maths, et vous donne le nombre de mots du texte que le lecteur voit
        réellement.
      </p>
    ),
    stepsHeading: "Comment compter les mots en LaTeX",
    steps: [
      {
        title: "Collez votre source LaTeX",
        body: "Collez dans l’éditeur le fichier .tex entier, préambule compris, ou seulement la section que vous voulez mesurer.",
      },
      {
        title: "Laissez-le compter",
        body: "Le nombre de mots se met à jour automatiquement pendant la saisie. Votre source passe par texcount, le compteur fourni avec TeX Live et utilisé par Overleaf : les commandes et le balisage sont donc correctement retirés.",
      },
      {
        title: "Lisez la répartition",
        body: "Consultez le nombre total de mots ainsi que les chiffres séparés pour le corps de texte, les en-têtes et les légendes, et retenez celui que demande votre revue, votre cours ou votre école doctorale.",
      },
    ],
    tipsHeading: "Ce qui est compté",
    tips: [
      {
        title: "Corps de texte",
        body: "Les mots des paragraphes, des listes et des notes de bas de page, y compris le texte à l’intérieur des commandes de mise en forme comme \\textbf{...} et \\emph{...}. C’est le chiffre principal auquel se réfèrent la plupart des limites de mots.",
      },
      {
        title: "En-têtes",
        body: "Les mots des titres \\section, \\subsection, \\chapter et similaires, comptés à part pour que vous puissiez les inclure ou les exclure.",
      },
      {
        title: "Légendes",
        body: "Les mots des légendes de figures et de tableaux écrites avec \\caption{...}, également comptés à part.",
      },
      {
        title: "Ce qui n’est pas compté",
        body: "Les commandes et leurs options, les étiquettes, les renvois et les clés de citation (\\label, \\ref, \\cite), les commentaires après %, et les maths : les formules en ligne $...$ et les équations hors texte ne sont pas des mots, si bien qu’une équation ne gonfle jamais le total.",
      },
    ],
    faqHeading: "FAQ du comptage de mots LaTeX",
    faq: [
      {
        question: "Comment obtenir le nombre de mots d’un document LaTeX ?",
        answer:
          "Collez votre source .tex dans le compteur de mots LaTeX ci-dessus : le nombre de mots s’affiche immédiatement, avec des totaux séparés pour le corps de texte, les en-têtes et les légendes. Hors ligne, lancez texcount sur le fichier en ligne de commande : texcount -inc -total main.tex.",
      },
      {
        question: "Le nombre de mots LaTeX inclut-il les équations ?",
        answer:
          "Non. Les maths en ligne comme $E = mc^2$ et les équations hors texte sont traitées comme des formules et non comme des mots : elles ne sont pas ajoutées au nombre de mots.",
      },
      {
        question: "Comment se compare-t-il à texcount et au comptage de mots d’Overleaf ?",
        answer:
          "Il exécute texcount, le script Perl fourni avec TeX Live et MiKTeX : les chiffres correspondent donc à texcount -total sur votre machine. Le comptage de mots d’Overleaf repose lui aussi sur texcount, les totaux devraient donc être très proches. La différence, c’est que vous n’avez besoin ni d’une installation TeX locale ni d’un compte.",
      },
      {
        question: "La bibliographie et les commentaires sont-ils inclus dans le nombre de mots ?",
        answer:
          "Non. Les commentaires après % sont ignorés, et texcount ignore la bibliographie par défaut : les références issues de \\bibliography ou d’un environnement thebibliography ne sont pas comptées. Les clés de citation dans \\cite{...} ne sont pas non plus comptées comme des mots.",
      },
    ],
    related: (
      <>
        Besoin du document dans un autre format ? Essayez le{" "}
        <IntroLink href="/tools/latex-to-word">convertisseur LaTeX vers Word</IntroLink> si votre
        soumission exige un .docx, ou parcourez la{" "}
        <IntroLink href="/symbols">référence des symboles LaTeX</IntroLink>.
      </>
    ),
  },

  "mathml-to-latex": {
    heading: "Convertir MathML en LaTeX en ligne",
    intro: (
      <>
        <p>
          Ce convertisseur MathML vers LaTeX transforme du balisage MathML en maths LaTeX à coller
          dans un article. Collez un élément <Cmd>{"<math>"}</Cmd> : un modèle d’IA (OpenAI
          gpt-4o-mini) réécrit l’arbre en code amsmath. <Cmd>{"<mfrac>"}</Cmd> devient{" "}
          <Cmd>\frac</Cmd>, <Cmd>{"<msqrt>"}</Cmd> devient <Cmd>\sqrt</Cmd>, <Cmd>{"<msup>"}</Cmd>{" "}
          et <Cmd>{"<msub>"}</Cmd> deviennent des exposants et des indices, et{" "}
          <Cmd>{"<mtable>"}</Cmd> devient une matrice ou un bloc aligné. Les lettres grecques et
          les opérateurs écrits en caractères Unicode reviennent généralement sous forme de
          commandes LaTeX.
        </p>
        <p>
          Le résultat est un document LaTeX complet, et l’onglet « Aperçu » le compile avec une
          distribution TeX Live complète sur le service de compilation d’Octree, pour que vous
          puissiez vérifier chaque symbole. L’éditeur colore la syntaxe XML : il sert donc aussi
          d’éditeur MathML en ligne simple. Chaque conversion renvoie jusqu’à environ 1 500 tokens
          de LaTeX, largement de quoi traiter quelques équations. L’outil est gratuit et ne
          demande aucun compte.
        </p>
      </>
    ),
    stepsHeading: "Comment convertir du MathML en LaTeX",
    steps: [
      {
        title: "Collez le MathML",
        body: (
          <>
            Collez un élément <Cmd>{"<math>"}</Cmd> copié depuis une page web, un export de Word ou
            de MathType, ou du MathML tiré d’un fichier EPUB ou JATS XML.
          </>
        ),
      },
      {
        title: "Lancez la conversion en LaTeX",
        body: "Cliquez sur « Convertir en LaTeX ». L’équation revient dans un document LaTeX complet qui charge amsmath et amssymb.",
      },
      {
        title: "Vérifiez l’aperçu",
        body: "Ouvrez l’onglet « Aperçu » pour compiler le document et comparer l’équation composée à l’original, puis copiez les maths, exportez le fichier .tex ou le PDF, ou ouvrez-le dans Octree.",
      },
    ],
    tipsHeading: "Conseils pour convertir du MathML",
    tips: [
      {
        title: "Copiez l’élément math en entier",
        body: (
          <>
            Incluez tout, de <Cmd>{"<math>"}</Cmd> à <Cmd>{"</math>"}</Cmd>. Un fragment qui commence
            au milieu d’un <Cmd>{"<mrow>"}</Cmd> peut perdre des parenthèses ou des termes.
          </>
        ),
      },
      {
        title: "Obtenir du MathML depuis Word",
        body: "Word enregistre les équations en OMML, pas en MathML. Dans Word pour Windows, activez Options d’équation > « Copier MathML dans le Presse-papiers en tant que texte brut », puis copiez l’équation et collez-la ici.",
      },
      {
        title: "Vous ne voulez que l’équation",
        body: (
          <>
            Copiez les lignes situées entre <Cmd>\begin{"{document}"}</Cmd> et{" "}
            <Cmd>\end{"{document}"}</Cmd> dans votre propre fichier ; le préambule n’a besoin que de{" "}
            <Cmd>\usepackage{"{amsmath,amssymb}"}</Cmd>.
          </>
        ),
      },
    ],
    faqHeading: "FAQ MathML vers LaTeX",
    faq: [
      {
        question: "Comment convertir du MathML en LaTeX ?",
        answer:
          "Collez le balisage MathML dans l’éditeur et cliquez sur « Convertir en LaTeX ». Les éléments comme mfrac, msqrt, msup, msub, mover et mtable sont réécrits en \\frac, \\sqrt, exposants, indices, accents et matrices, et le résultat s’affiche sous forme de document LaTeX complet que vous pouvez compiler dans l’onglet « Aperçu ».",
      },
      {
        question: "Le Content MathML est-il pris en charge ?",
        answer:
          "L’outil est conçu pour le Presentation MathML, celui qu’exportent les navigateurs, Word et MathType. Le Content MathML (apply, ci, cn) est généralement converti lui aussi, puisqu’un modèle d’IA lit le balisage, mais vérifiez le résultat dans l’aperçu.",
      },
      {
        question: "Peut-on convertir plusieurs équations à la fois ?",
        answer:
          "Oui. Collez plusieurs éléments math à la suite : ils sont convertis dans un même document. Chaque conversion renvoie jusqu’à environ 1 500 tokens de LaTeX, découpez donc les fichiers très longs.",
      },
      {
        question: "Le convertisseur MathML vers LaTeX est-il gratuit ?",
        answer:
          "Oui, il est gratuit et ne demande aucun compte. La conversion utilise OpenAI gpt-4o-mini, et l’aperçu compile avec une distribution TeX Live complète : vous pouvez donc vérifier l’équation avant de l’utiliser.",
      },
    ],
    related: (
      <>
        Écrivez des équations à la main avec le{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guide des maths en LaTeX
        </IntroLink>
        , convertissez une photo d’équation avec l’outil{" "}
        <IntroLink href="/tools/math-to-latex">maths vers LaTeX</IntroLink>, ou consultez tous les{" "}
        <IntroLink href="/tools/latex-converter">convertisseurs LaTeX</IntroLink>.
      </>
    ),
  },

  "mermaid-to-latex": {
    heading: "Convertir un diagramme Mermaid en TikZ pour LaTeX",
    intro: (
      <>
        <p>
          Ce convertisseur transforme le code d’un diagramme Mermaid en TikZ : un organigramme
          esquissé dans un fichier Markdown, un README GitHub ou Notion peut ainsi entrer dans un
          article LaTeX sous forme de graphique vectoriel natif. Collez la définition Mermaid : un
          modèle d’IA (OpenAI gpt-4o-mini) réécrit chaque nœud, étiquette et flèche dans un{" "}
          <Cmd>tikzpicture</Cmd>, avec des positions explicites pour que les nœuds ne se
          chevauchent pas, au sein d’un document standalone ou article complet qui charge tikz et
          les bibliothèques nécessaires.
        </p>
        <p>
          L’onglet « Aperçu » compile le diagramme avec une distribution TeX Live complète sur le
          service de compilation d’Octree : vous pouvez vérifier la disposition avant d’exporter
          le fichier .tex ou le PDF. Mermaid dispose les diagrammes automatiquement, pas TikZ :
          les grands diagrammes peuvent donc demander des ajustements d’espacement. Les
          organigrammes donnent les meilleurs résultats ; chaque conversion renvoie jusqu’à
          environ 2 000 tokens de LaTeX. L’outil est gratuit et ne demande aucun compte.
        </p>
      </>
    ),
    stepsHeading: "Comment convertir Mermaid en TikZ",
    steps: [
      {
        title: "Collez le code Mermaid",
        body: (
          <>
            Collez la définition du diagramme, en commençant par son type, comme{" "}
            <Cmd>graph TD</Cmd>, <Cmd>flowchart LR</Cmd> ou <Cmd>sequenceDiagram</Cmd>, sans le
            bloc <Cmd>```mermaid</Cmd> qui l’entoure.
          </>
        ),
      },
      {
        title: "Lancez la conversion en TikZ",
        body: "Cliquez sur « Convertir en LaTeX ». L’IA réécrit les nœuds, les étiquettes et les flèches dans un tikzpicture, au sein d’un document LaTeX complet.",
      },
      {
        title: "Prévisualisez, ajustez et exportez",
        body: "Ouvrez l’onglet « Aperçu » pour compiler le diagramme en PDF. Si des éléments se chevauchent, modifiez les distances ou les positions des nœuds dans le code, puis exportez diagram.tex ou diagram.pdf, ou ouvrez-le dans Octree.",
      },
    ],
    tipsHeading: "Problèmes courants et comment les corriger",
    tips: [
      {
        title: "Les nœuds se chevauchent",
        body: (
          <>
            Augmentez <Cmd>node distance</Cmd> dans les options du tikzpicture, ou changez le
            placement d’un nœud, par exemple <Cmd>below of=</Cmd> en <Cmd>right of=</Cmd>. TikZ ne
            dispose pas les graphes automatiquement comme le fait Mermaid.
          </>
        ),
      },
      {
        title: "Bibliothèque non chargée",
        body: (
          <>
            Une erreur sur une pointe de flèche ou une forme inconnue signifie généralement qu’il
            manque un <Cmd>\usetikzlibrary</Cmd>, par exemple <Cmd>arrows.meta</Cmd>,{" "}
            <Cmd>shapes</Cmd> ou <Cmd>positioning</Cmd>. Ajoutez-le au préambule.
          </>
        ),
      },
      {
        title: "Commencez petit",
        body: "Les organigrammes se convertissent de la façon la plus fiable. Pour les diagrammes grands ou complexes, convertissez une partie à la fois et assemblez les tikzpictures.",
      },
    ],
    faqHeading: "FAQ Mermaid vers LaTeX",
    faq: [
      {
        question: "Comment utiliser un diagramme Mermaid dans LaTeX ?",
        answer:
          "LaTeX ne sait pas afficher Mermaid directement. Collez le code Mermaid dans ce convertisseur : il réécrit le diagramme en TikZ, le package de dessin natif de LaTeX. Copiez le tikzpicture dans votre document et chargez le package tikz, ou exportez le fichier .tex complet.",
      },
      {
        question: "Quels types de diagrammes Mermaid sont pris en charge ?",
        answer:
          "Les organigrammes et les graphes (graph et flowchart) se convertissent de la façon la plus fiable. Les diagrammes de séquence, d’états et de classes peuvent aussi être convertis, puisqu’un modèle d’IA lit le code, mais attendez-vous à ajuster les positions dans le TikZ obtenu.",
      },
      {
        question: "Pourquoi convertir Mermaid en TikZ plutôt qu’utiliser une image ?",
        answer:
          "Un diagramme TikZ est un graphique vectoriel dessiné par LaTeX lui-même : il utilise la même police que votre texte, reste net à n’importe quel zoom et se modifie dans la source. Un PNG ou un SVG exporté ne peut pas être modifié sans repasser par Mermaid.",
      },
      {
        question: "Le convertisseur Mermaid vers LaTeX est-il gratuit ?",
        answer:
          "Oui, il est gratuit et ne demande aucun compte. La conversion utilise OpenAI gpt-4o-mini et renvoie jusqu’à environ 2 000 tokens de LaTeX, et l’aperçu compile avec une distribution TeX Live complète.",
      },
    ],
    related: (
      <>
        Apprenez les commandes de dessin avec le{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          guide TikZ
        </IntroLink>
        , décrivez un schéma en mots avec le{" "}
        <IntroLink href="/tools/tikz-generator">générateur TikZ</IntroLink>, ou redessinez un
        croquis avec l’outil <IntroLink href="/tools/image-to-tikz">image vers TikZ</IntroLink>.
      </>
    ),
  },

  "pgfplots-generator": {
    heading: "Générateur PGFPlots : créer un graphique pgfplots en LaTeX",
    intro: (
      <>
        <p>
          Ce générateur PGFPlots transforme la description d’un graphique en langage courant en
          code pgfplots. Décrivez une fonction, une série de points ou un type de graphique : un
          modèle d’IA (OpenAI GPT-5) écrit un document LaTeX complet avec un environnement{" "}
          <Cmd>tikzpicture</Cmd> et <Cmd>axis</Cmd> commenté. Courbes de fonctions et graphiques
          linéaires, diagrammes en barres, nuages de points, histogrammes et surfaces 3D, avec les
          étiquettes d’axes, les plages, la légende et les couleurs demandées.
        </p>
        <p>
          L’onglet « Aperçu » compile le graphique avec une distribution TeX Live complète sur le
          service de compilation d’Octree : vous voyez le PDF avant d’exporter le fichier .tex.
          Comme le graphique est dessiné par LaTeX, il utilise la police de votre document et
          reste net à toutes les tailles, contrairement à une image collée depuis un tableur. Le
          générateur est gratuit et ne demande aucun compte ; le code produit vous appartient et
          se modifie librement, des étiquettes de graduation aux styles de tracé.
        </p>
      </>
    ),
    stepsHeading: "Comment générer un graphique pgfplots",
    steps: [
      {
        title: "Décrivez le graphique",
        body: "Indiquez ce qu’il faut tracer : la fonction ou les points de données, le type de graphique (courbe, barres, nuage de points, aire, histogramme ou surface 3D), les plages des axes, les étiquettes, la légende et les couleurs. Vous pouvez aussi coller un petit tableau de valeurs.",
      },
      {
        title: "Générez le code",
        body: (
          <>
            Cliquez sur « Générer le graphique ». L’IA écrit un document complet avec{" "}
            <Cmd>\pgfplotsset{"{compat=1.18}"}</Cmd> et un environnement <Cmd>axis</Cmd> commenté.
          </>
        ),
      },
      {
        title: "Prévisualisez et exportez",
        body: "Ouvrez l’onglet « Aperçu » pour compiler le graphique en PDF. Modifiez le code pour l’affiner, puis exportez pgfplot.tex ou pgfplot.pdf, ou ouvrez-le dans Octree.",
      },
    ],
    tipsHeading: "Erreurs pgfplots courantes et comment les corriger",
    tips: [
      {
        title: "Dimension too large",
        body: (
          <>
            Une fonction qui croît très vite, comme <Cmd>exp(x)</Cmd> sur un large domaine, dépasse
            les capacités de l’arithmétique de TeX. Réduisez le <Cmd>domain</Cmd>, ajoutez{" "}
            <Cmd>restrict y to domain</Cmd> ou utilisez un axe logarithmique.
          </>
        ),
      },
      {
        title: "Courbes en dents de scie",
        body: (
          <>
            Augmentez <Cmd>samples</Cmd>, par exemple <Cmd>samples=200</Cmd>, pour des courbes
            lisses. Gardez une valeur plus basse pour les graphiques 3D, beaucoup plus lents à
            compiler.
          </>
        ),
      },
      {
        title: "Tracer vos propres données",
        body: (
          <>
            Remplacez les coordonnées générées par vos valeurs avec <Cmd>\addplot table</Cmd> ou{" "}
            <Cmd>\addplot coordinates</Cmd> ; le style des axes reste le même.
          </>
        ),
      },
    ],
    faqHeading: "FAQ du générateur PGFPlots",
    faq: [
      {
        question: "Qu’est-ce qu’un générateur PGFPlots ?",
        answer:
          "Il écrit le code pgfplots à votre place. pgfplots est le package LaTeX qui dessine des graphiques avec TikZ ; au lieu d’apprendre ses options d’axes, vous décrivez le graphique en langage courant et obtenez un document complet à compiler, modifier et coller dans un article.",
      },
      {
        question: "Quels types de graphiques peut-il créer ?",
        answer:
          "Tout ce que pgfplots sait dessiner : courbes de fonctions, graphiques linéaires, diagrammes en barres, nuages de points, histogrammes, barres d’erreur, graphiques en aires et surfaces ou maillages 3D. Décrivez les données, les axes et le style voulus, et le code en tient compte.",
      },
      {
        question: "Comment insérer le graphique dans mon document LaTeX ?",
        answer:
          "Ajoutez \\usepackage{pgfplots} et \\pgfplotsset{compat=1.18} à votre préambule, puis copiez l’environnement tikzpicture du code généré dans votre document, en général à l’intérieur d’un environnement figure avec une légende.",
      },
      {
        question: "Le générateur PGFPlots est-il gratuit ?",
        answer:
          "Oui, il est gratuit et ne demande aucun compte. Le code est écrit par un modèle d’IA (OpenAI GPT-5) et compilé avec une distribution TeX Live complète : vérifiez dans l’aperçu qu’il correspond à ce que vous avez demandé.",
      },
    ],
    related: (
      <>
        Apprenez les options d’axes avec le{" "}
        <IntroLink href="https://www.useoctree.com/learn/pgfplots" external>
          guide pgfplots
        </IntroLink>
        , dessinez des schémas avec le{" "}
        <IntroLink href="/tools/tikz-generator">générateur TikZ</IntroLink>, ou transformez un CSV
        en tableau avec le{" "}
        <IntroLink href="/tools/table-to-latex">générateur de tableaux LaTeX</IntroLink>.
      </>
    ),
  },
};

export default translations;
