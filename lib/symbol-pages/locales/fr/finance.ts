import type { SymbolPageTranslations } from "../types";

/** French copy for /fr/symbols/finance/<slug>. */
const text: SymbolPageTranslations = {
  "dollar-sign": {
    name: "Signe dollar",
    meaning: "Signe dollar échappé : il affiche un $ littéral au lieu d’ouvrir ou de fermer le mode mathématique.",
    usage:
      "En LaTeX, un $ non échappé bascule le mode mathématique ; les prix exigent donc \\$, comme dans \\$19.99. La commande fonctionne en mode texte comme en mode mathématique, ce qui rend simples des formules comme \\$100 \\times 1.05 = \\$105. Le même échappement vaut dans les outils fondés sur Markdown et dans les moteurs de rendu KaTeX. Pour des tableaux remplis de montants, le paquet siunitx aligne les nombres sur la virgule décimale tandis que le symbole figure dans l’en-tête de colonne. Écrire USD lève toute ambiguïté lorsque plusieurs dollars, canadien ou australien par exemple, apparaissent dans un même document.",
  },
  "euro-sign": {
    name: "Signe euro",
    meaning: "Signe de l’euro saisi comme caractère littéral dans \\text, pour les prix et montants financiers en euros.",
    usage:
      "Coller le caractère € dans \\text fonctionne lorsque le document est en UTF-8 et que la police contient le glyphe, ce qui est le cas de la plupart des configurations modernes. Avec pdfLaTeX, \\texteuro est la forme commande, et \\euro donne le dessin officiel, géométriquement fixé. La position du signe varie selon les pays : l’Allemagne et la France écrivent 10 €, tandis que l’Irlande et les Pays-Bas le placent souvent devant. Dans les tableaux, préférez indiquer le signe dans l’en-tête de colonne plutôt que de le répéter dans chaque cellule. Avec XeLaTeX et LuaLaTeX, le caractère provient directement de la police choisie.",
  },
  "pound-sterling-sign": {
    name: "Signe livre sterling",
    meaning: "Signe de la livre sterling saisi comme caractère littéral dans \\text, pour les montants en livres britanniques.",
    usage:
      "Taper directement le caractère £ dans \\text fonctionne dans les documents UTF-8. LaTeX propose aussi une commande intégrée \\pounds, utilisable en texte comme en mathématiques ; mais avec les polices Computer Modern par défaut, elle provient de la police italique et paraît penchée, ce qui surprend beaucoup d’utilisateurs ; changer de codage de police donne un glyphe droit. Selon l’usage britannique, le signe précède le montant sans espace, comme dans £1,500. Le même glyphe sert à plusieurs autres livres. Dans les tableaux financiers, alignez sur le séparateur décimal et placez le signe dans l’en-tête pour alléger la présentation.",
  },
  "yen-sign": {
    name: "Signe yen",
    meaning: "Signe du yen ou du yuan saisi comme caractère littéral dans \\text, pour les montants en yens japonais et en yuans chinois.",
    usage:
      "Le même glyphe sert au yen japonais et au yuan renminbi chinois ; c’est pourquoi les articles ajoutent souvent JPY ou CNY pour lever l’ambiguïté. Taper ¥ dans \\text fonctionne dans les documents UTF-8 avec une police qui le contient ; \\textyen est l’alternative sous forme de commande avec pdfLaTeX. Les montants en yens ont rarement des décimales, faute de subdivision d’usage courant, d’où l’écriture typique \\text{¥}1{,}200. Certaines polices le dessinent avec une barre, d’autres avec deux ; les deux formes sont admises, mais gardez la même police dans tout le document.",
  },
  "indian-rupee-sign": {
    name: "Signe roupie indienne",
    meaning: "Signe de la roupie indienne saisi comme caractère littéral dans \\text, pour les montants en roupies indiennes.",
    usage:
      "L’Inde a adopté le signe de la roupie en 2010 ; beaucoup de polices plus anciennes ne le possèdent donc pas, dont Computer Modern par défaut, et avec pdfLaTeX il n’affiche souvent rien. Compiler avec XeLaTeX ou LuaLaTeX et une police qui contient le glyphe, comme Noto Sans ou une police système récente, est la voie la plus fiable. Si le glyphe manque, Rs. ou INR sont des équivalents textuels admis. La numération indienne groupe les chiffres en lakhs et crores, par exemple 1,00,000 ; utilisez {,} en mode mathématique pour que la virgule n’ajoute pas d’espace parasite après elle.",
  },
  "bitcoin-sign": {
    name: "Signe bitcoin",
    meaning: "Signe du bitcoin saisi comme caractère littéral dans \\text, pour les montants libellés en bitcoins.",
    usage:
      "Le glyphe du bitcoin est plus récent que la plupart des polices ; pdfLaTeX avec les polices standard ne peut donc généralement pas l’imprimer, et la solution pratique passe par XeLaTeX ou LuaLaTeX avec une police qui le contient, ou par une police d’icônes. Beaucoup d’articles de finance et d’économie écrivent simplement BTC, qui ne pose jamais de problème de police, et sat pour la plus petite unité, sachant que 1 BTC vaut 100 000 000 satoshis. Les montants en bitcoins comptent couramment jusqu’à huit décimales ; l’alignement décimal dans les tableaux importe donc plus que d’habitude. Vérifiez attentivement le PDF, car un glyphe manquant disparaît souvent sans bruit, avec un simple avertissement dans le journal.",
  },
  "percent-sign": {
    name: "Signe pour cent",
    meaning: "Signe pour cent échappé : il affiche % au lieu de commencer un commentaire LaTeX.",
    usage:
      "En LaTeX, un % nu met en commentaire le reste de la ligne, source classique de texte qui disparaît ; chaque pourcentage exige donc \\%. La commande fonctionne en mode texte et en mode mathématique, comme dans un taux d’intérêt de 5\\% ou r = 3.5\\%. L’espacement varie selon les styles : l’anglais écrit généralement 5% sans espace, alors que l’usage français et les conventions SI insèrent une espace fine, 5\\,\\%. siunitx gère cela de façon cohérente si vous composez de nombreuses grandeurs. Pour parler d’écarts, écrivez « points de pourcentage » afin de distinguer une hausse de 4 % à 5 % d’une variation relative de 1 %.",
  },
  "per-mille-sign": {
    name: "Signe pour mille",
    meaning: "Signe pour mille, c’est-à-dire parties par millier, saisi comme caractère littéral dans \\text.",
    usage:
      "Le pour mille exprime des taux en parties par millier : 5 ‰ valent donc 0,5 %. On le trouve dans les tables d’assurance et de mortalité, pour la salinité et les rapports isotopiques comme \\delta^{13}C en géochimie, et pour les seuils d’alcoolémie de plusieurs pays. Avec pdfLaTeX, la forme commande est \\textperthousand ; en mode mathématique, entourez-la de \\text comme ici. Ne le confondez pas avec le point de base, qui vaut une partie pour dix mille et possède son propre glyphe, rarement disponible. Si la police du lecteur risque de ne pas l’avoir, écrire « pour mille » est une solution de repli sans ambiguïté.",
  },
  "basis-point": {
    name: "Point de base",
    meaning: "Abréviation du point de base : un centième de point de pourcentage, utilisé pour les taux d’intérêt et les écarts de taux.",
    usage:
      "Un point de base vaut 0,01 % : un taux qui passe de 4,25 % à 4,50 % a donc progressé de 25 pb. Les écarts de rendement obligataires, les décisions des banques centrales et les frais des fonds sont exprimés ainsi, car les variations en pourcentage d’un taux sont ambiguës. Entourer l’abréviation de \\text la garde droite et empêche TeX de lire b et p comme deux variables italiques multipliées. Séparez le nombre de l’unité par une espace fine, \\, comme dans 25\\,\\text{bp}. Les textes anglophones écrivent bp, bps ou bips, les textes français pb. Curiosité : bp est aussi l’unité de TeX pour le « big point » PostScript, 1/72 de pouce, mais le contexte évite toute confusion.",
  },
  "npv": {
    name: "Valeur actuelle nette (VAN)",
    meaning: "Valeur actuelle nette : somme des flux de trésorerie futurs actualisés, diminuée de l’investissement initial.",
    usage:
      "La VAN (NPV en anglais) se calcule par \\text{NPV} = \\sum_{t=0}^{n} \\frac{C_t}{(1+r)^t}, où C_0 est généralement la mise de fonds initiale, négative, et r le taux d’actualisation. Un projet est retenu lorsque la VAN est strictement positive. Entourer le sigle de \\text le garde droit et évite que TeX le traite comme N fois P fois V avec un espacement italique. \\mathrm{NPV} donne le même aspect mais ignore le style du texte environnant, ce qui est plus sûr dans les théorèmes. Si vous l’employez comme fonction, par exemple \\text{NPV}(r), \\operatorname{NPV} ajoute l’espacement convenable avant la parenthèse.",
  },
  "irr": {
    name: "Taux de rendement interne (TRI)",
    meaning: "Taux de rendement interne : taux d’actualisation pour lequel la valeur actuelle nette d’un projet est nulle.",
    usage:
      "Le TRI (IRR en anglais) est défini implicitement par 0 = \\sum_{t=0}^{n} C_t / (1 + \\text{IRR})^t ; il n’a donc pas de forme close en général et se calcule numériquement. Un projet est intéressant lorsque son TRI dépasse le coût du capital. Des flux qui changent de signe plus d’une fois peuvent produire plusieurs TRI, faiblesse connue par rapport à la VAN. Utilisez \\text ou \\mathrm pour garder le sigle droit ; tapé tel quel en mode mathématique, IRR donne trois variables italiques espacées comme un produit. Lorsqu’il figure dans un dénominateur, utilisez \\left( \\right) pour un dimensionnement propre autour de la fraction.",
  },
  "roi": {
    name: "Retour sur investissement (ROI)",
    meaning: "Retour sur investissement : gain tiré d’un investissement rapporté à son coût, généralement exprimé en pourcentage.",
    usage:
      "Le ROI se calcule par \\text{ROI} = (\\text{gain} - \\text{coût}) / \\text{coût}, souvent multiplié par 100\\% pour l’affichage. Contrairement au TRI, il ignore la chronologie des flux ; on recourt donc à des variantes annualisées pour comparer des durées de plusieurs années. Le composer avec \\text garde les lettres droites et espacées comme un mot ; tapées telles quelles en mathématiques, R, O et I deviennent des variables italiques, et le O peut être pris pour un zéro. Dans une fraction, utilisez \\frac avec des morceaux \\text au numérateur et au dénominateur, ou \\dfrac dans un paragraphe pour rester lisible.",
    example: "\\text{ROI} = \\frac{\\text{gain} - \\text{investissement}}{\\text{investissement}} \\times 100\\%",
  },
  "summation": {
    name: "Somme sur les périodes",
    meaning: "Somme sur les périodes t de 1 à n, la manière standard d’agréger des flux de trésorerie d’une période à l’autre.",
    usage:
      "Les formules financières somment sur les périodes : valeur actuelle d’une annuité, \\sum_{t=1}^{n} \\frac{C}{(1+r)^t}, prix d’une obligation avec coupons et valeur nominale, ou VAN, qui commence à t = 0 pour inclure la mise de fonds initiale. En mode hors texte, les bornes se placent au-dessus et au-dessous du sigma ; en ligne, elles passent à droite en plus petit. Utilisez \\sum\\limits pour forcer les bornes empilées dans un paragraphe. Choisissez l’indice de départ délibérément, car commencer à 0 ou à 1 change le résultat. En temps continu, l’analogue est une intégrale avec actualisation par e^{-rt}.",
  },
  "present-value": {
    name: "Valeur actuelle",
    meaning: "Valeur actuelle d’un flux unique C reçu à la date t, actualisé au taux r par période.",
    usage:
      "Actualiser revient à diviser un montant futur par le facteur de croissance (1+r)^t : 1 000 reçus dans 3 ans à 5 % valent environ 863,84 aujourd’hui. Sommer ce terme sur les périodes donne la VAN et le prix des obligations. En mode hors texte, \\frac trace une fraction en pleine taille ; dans le texte, elle rétrécit, et \\tfrac ou la forme avec barre oblique C/(1+r)^t peuvent se lire plus facilement. Si le dénominateur se complique, par exemple avec un taux variable (1 + r_t), utilisez \\prod ou gardez l’exposant entre accolades : ^{t} compte dès que t fait plus d’un caractère, comme ^{t-1}.",
  },
  "compound-interest": {
    name: "Intérêts composés",
    meaning: "Formule des intérêts composés : montant A au bout de t années lorsque le capital P rapporte un taux r capitalisé n fois par an.",
    usage:
      "Ici P est le capital, r le taux nominal annuel, n le nombre de périodes de capitalisation par an et t le nombre d’années ; une capitalisation mensuelle correspond à n = 12. Quand n augmente, le montant tend vers la formule continue Pe^{rt}. L’exposant doit être entre accolades, ^{nt}, sinon seul n est élevé. La barre oblique r/n garde la ligne compacte ; dans les équations hors texte, \\left(1 + \\frac{r}{n}\\right)^{nt} est plus courant, et la paire \\left( \\right) agrandit les parenthèses à la taille de la fraction. N’écrivez pas \\frac dans des parenthèses non ajustées, qui restent visiblement trop courtes.",
  },
  "continuous-compounding": {
    name: "Capitalisation continue",
    meaning: "Formule de capitalisation continue : le capital P devient Pe^{rt} au bout d’une durée t au taux continu r.",
    usage:
      "C’est la limite des intérêts composés lorsque la capitalisation devient infiniment fréquente, puisque (1 + r/n)^{nt} \\to e^{rt}. Elle est omniprésente dans l’évaluation des produits dérivés, comme le facteur d’actualisation e^{-rT} de la formule de Black-Scholes. Mettez l’exposant entre accolades, e^{rt}, pour que les deux lettres soient surélevées. Certains styles composent le nombre d’Euler en romain, \\mathrm{e}^{rt}, pour le distinguer d’une variable nommée e ; les deux usages sont admis s’ils restent cohérents. Pour des exposants longs, \\exp(rt) se lit mieux qu’un minuscule exposant, surtout avec des fractions dans l’exposant.",
  },
};

export default text;
