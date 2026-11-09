import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
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
        body: "Cliquez sur « Open in Octree » pour enregistrer le document comme projet, ajouter des images et des fichiers .bib, ou demander à l’IA de le modifier.",
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
        body: "Cliquez sur « Generate LaTeX ». Le code s’affiche progressivement sous forme de document complet, avec la classe de document, les packages et la structure déjà en place.",
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
          L’onglet « Preview » compile le tableau avec une distribution TeX Live complète sur le
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
        body: "Dans Excel, choisissez Fichier > Enregistrer sous > CSV (délimité par des virgules) ; dans Google Sheets, Fichier > Télécharger > Valeurs séparées par des virgules. Gardez la ligne d’en-tête en première ligne.",
      },
      {
        title: "Importez le fichier .csv",
        body: "Déposez le fichier dans la zone d’import ou cliquez pour le choisir. Le tableau LaTeX s’affiche progressivement dans l’onglet « Code » sous forme de document complet.",
      },
      {
        title: "Prévisualisez et exportez",
        body: "Ouvrez l’onglet « Preview » pour compiler le tableau en PDF, puis exportez le fichier .tex, le PDF ou une image JPG, ou ouvrez-le dans Octree pour placer le tableau dans votre article.",
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
        body: "Cliquez sur « Convert ». L’IA lit l’équation, reconnaît fractions, racines, sommes, intégrales, matrices et lettres grecques, et écrit du LaTeX standard avec amsmath : le résultat compile dans Overleaf, Octree ou n’importe quelle distribution TeX.",
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
          "Tapez l’équation en texte brut ou en notation mathématique, ou importez-en une image, puis cliquez sur « Convert to LaTeX ». Le convertisseur renvoie du code LaTeX qui utilise amsmath et affiche un aperçu rendu pour que vous puissiez le vérifier avant de le copier dans votre document.",
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
        <IntroLink href="/symbols">référence des symboles LaTeX</IntroLink> ou essayez le{" "}
        <IntroLink href="/tools/math-to-latex">convertisseur de maths en LaTeX</IntroLink> pour la
        notation mathématique en texte brut.
      </>
    ),
  },
};

export default translations;
