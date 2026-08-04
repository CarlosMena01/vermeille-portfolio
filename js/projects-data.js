/* Données des projets — reconstruites à partir du portfolio PDF de Vermeille Pontoire */

const PROJECTS = [
  {
    id: "vermeille",
    title: "Vermeille",
    subtitle: "Identité de marque personnelle",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/brand-vermeille-cover.jpg",
    gallery: [
      "assets/img/brand-vermeille-logo.png",
      "assets/img/brand-vermeille-cover.jpg",
      "assets/img/brand-vermeille-card-1.jpg",
      "assets/img/brand-vermeille-card-2.jpg",
      "assets/img/brand-vermeille-detail-1.jpg",
      "assets/img/brand-vermeille-detail-2.jpg"
    ],
    description: "Création de l'identité visuelle et de plusieurs supports de communication liés à ma marque personnelle, si je créais un jour un studio de graphisme. Logo réalisé sur Illustrator dans un esprit enfantin et moelleux afin de refléter le côté chaleureux et dynamique de mon studio.",
    tags: ["Logo", "Charte graphique", "Papeterie"]
  },
  {
    id: "festival-v1",
    title: "Festival du cinéma espagnol",
    subtitle: "Identité visuelle — version 1",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/festival-v1-cover.png",
    gallery: [
      "assets/img/festival-v1-cover.png",
      "assets/img/festival-v1-detail-1.png",
      "assets/img/festival-v1-detail-2.png",
      "assets/img/festival-v1-detail-3.png"
    ],
    description: "Création de l'identité visuelle d'un festival de cinéma espagnol, avec la contrainte de réaliser une typographie pour tout un alphabet, ainsi que différents supports de communication demandés pour l'événement : carton d'invitation, affiche, cartes de visite, page de site internet, logo et quelques goodies. Nous avons fait plusieurs propositions avant de sélectionner la meilleure, que j'ai déclinée ensuite.",
    tags: ["Typographie sur-mesure", "Affiche", "Goodies"]
  },
  {
    id: "festival-v2",
    title: "Festival du cinéma espagnol",
    subtitle: "Identité visuelle — version 2",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/festival-v2-cover.png",
    gallery: [
      "assets/img/festival-v2-cover.png",
      "assets/img/festival-v2-detail-1.png"
    ],
    description: "Durant ce projet, j'ai réalisé deux versions différentes, avec deux identités visuelles proches mais reposant sur des concepts distincts. Pour cette version, le concept consistait à réutiliser la forme rectangulaire visible dans le viseur d'une caméra au moment du tournage. Création de l'identité visuelle, comprenant le logo et les affiches.",
    tags: ["Concept", "Logo", "Affiches"]
  },
  {
    id: "pictogrammes",
    title: "Pictogrammes voyage",
    subtitle: "Brochure Richou Voyages",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/pictogrammes-detail-1.jpg",
    gallery: [
      "assets/img/pictogrammes-detail-1.jpg"
    ],
    description: "Chaque année, Richou Voyages publie deux brochures afin de présenter et de promouvoir ses différents voyages organisés auprès de ses clients. Pour simplifier la compréhension des informations et alléger la mise en page, j'ai été chargée de créer des pictogrammes vectoriels respectant la charte graphique et garantissant une cohérence avec l'ensemble des brochures.",
    tags: ["Pictogrammes", "Système vectoriel"]
  },
  {
    id: "vagabond",
    title: "Vagabond",
    subtitle: "Application de mobilité douce",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/vagabond-cover.png",
    gallery: [
      "assets/img/vagabond-logo.png",
      "assets/img/vagabond-cover.png",
      "assets/img/vagabond-detail-1.png",
      "assets/img/vagabond-detail-2.png",
      "assets/img/vagabond-detail-4.png"
    ],
    description: "J'ai réalisé l'identité graphique de Vagabond, une application de mobilité qui prône la flânerie et la découverte. Les utilisateurs ne choisissent pas l'itinéraire le plus rapide, mais un parcours les guidant vers des œuvres de street art, des parcs, des architectures singulières et d'autres lieux d'intérêt. Le but était de concevoir l'identité visuelle, la première version de l'application pour l'agglomération d'Angers, ainsi qu'une campagne de communication pour son lancement.",
    tags: ["App mobile", "Logo", "Campagne de lancement"]
  },
  {
    id: "cohezia",
    title: "Cohézia",
    subtitle: "Refonte des entités Richou Voyages",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/cohezia-cover.png",
    gallery: [
      "assets/img/cohezia-cover.png",
      "assets/img/cohezia-detail-1.png",
      "assets/img/cohezia-detail-2.png",
      "assets/img/cohezia-detail-3.png",
      "assets/img/cohezia-detail-4.png"
    ],
    description: "J'ai eu pour projet de concevoir les identités visuelles et la charte graphique de chacune des entités, en m'adaptant à l'identité existante de Richou Voyages, afin que l'on comprenne que ces marques font partie de l'entreprise. Ensuite, j'ai dû décliner différents supports en fonction des marques.",
    tags: ["Charte graphique", "Papeterie", "Déclinaisons de marque"]
  },
  {
    id: "cardgame",
    title: "Traits de caractère",
    subtitle: "Jeu de cartes pour enfants",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/cardgame-cover.png",
    gallery: [
      "assets/img/cardgame-cover.png",
      "assets/img/cardgame-detail-1.png",
      "assets/img/cardgame-detail-2.png",
      "assets/img/illustration-cartes.jpg"
    ],
    description: "Réalisation d'un jeu de cartes pour les enfants avec différents mini-jeux dans un même jeu. Création d'un logo, d'une boîte de jeu, des visuels des cartes « caractères », des cartes « lettres » et des cartes « calques », ainsi que d'un support pour les règles du jeu.",
    tags: ["Packaging", "Illustration", "Jeu"]
  },
  {
    id: "brochure-inspiration",
    title: "Brochure Inspiration",
    subtitle: "Richou Voyages",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/brochure-inspiration-cover.png",
    gallery: [
      "assets/img/brochure-inspiration-cover.png",
      "assets/img/brochure-inspiration-detail-1.png",
      "assets/img/brochure-inspiration-detail-2.png"
    ],
    description: "Richou Voyages a sorti une nouvelle brochure dans le but de promouvoir des voyages auprès d'une cible plus jeune : familles, couples, solos… et souhaitait une brochure entièrement repensée, à l'image de cette nouvelle cible. J'ai donc eu pour objectif de réaliser toute la création et la mise en page de cette brochure.",
    tags: ["Mise en page", "Édition"]
  },
  {
    id: "brochure-annuelle",
    title: "Brochure Annuelle",
    subtitle: "Richou Voyages",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/brochure-annuelle-cover.png",
    gallery: [
      "assets/img/brochure-annuelle-cover.png",
      "assets/img/brochure-annuelle-detail-1.png"
    ],
    description: "Richou Voyages sort tous les ans une brochure annuelle avec des voyages pour l'été et l'hiver, destinée à une cible de personnes âgées qui souhaitent voyager avec des séjours entièrement organisés, accompagnés d'un guide et d'accompagnateurs. Mon objectif était de réaliser la couverture de cette brochure, ainsi que la mise en page des pages annexes et des pages produits.",
    tags: ["Couverture", "Mise en page"]
  },
  {
    id: "pochette-cadeau",
    title: "Pochette Cadeau",
    subtitle: "Richou Voyages",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/pochette-cadeau-cover.png",
    gallery: [
      "assets/img/pochette-cadeau-cover.png",
      "assets/img/pochette-cadeau-detail-1.jpg",
      "assets/img/pochette-cadeau-detail-2.png",
      "assets/img/pochette-cadeau-detail-3.png",
      "assets/img/pochette-cadeau-detail-4.jpg"
    ],
    description: "J'ai eu pour objectif de réaliser une pochette cadeau que l'on puisse remplir en fonction du client et du voyage offert. La contrainte était de faire quelque chose de moderne, qui rappelle le voyage et dans un format assez important pour que l'on puisse y glisser les documents liés au voyage en format A5. J'ai donc réalisé deux versions différentes.",
    tags: ["Packaging", "Illustration"]
  },
  {
    id: "gobelet",
    title: "Gobelet La Piautre",
    subtitle: "Festival de bière artisanale",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/gobelet-cover.png",
    gallery: [
      "assets/img/gobelet-cover.png",
      "assets/img/gobelet-detail-1.png"
    ],
    description: "Réalisation d'un visuel pour un gobelet sur le thème des bords de Loire pour un festival organisé par la marque de bière La Piautre. Conception de l'illustration sur Illustrator.",
    tags: ["Illustration", "Packaging"]
  },
  {
    id: "orelsan",
    title: "Civilisation — Orelsan",
    subtitle: "Projet fictif — pochette d'album",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/orelsan-cover.png",
    gallery: [
      "assets/img/orelsan-cover.png",
      "assets/img/orelsan-detail-1.png",
      "assets/img/orelsan-detail-2.png"
    ],
    description: "Réalisation de l'identité graphique et de la campagne de communication de l'album Civilisation de l'artiste Orelsan. Ce projet était un projet fictif né d'une réinterprétation de la direction artistique de cet album à ma manière, inspiré de la technique de la risographie.",
    tags: ["Projet fictif", "Direction artistique", "Risographie"]
  },
  {
    id: "absolut",
    title: "Absolut Mythologik",
    subtitle: "Affiche de campagne — projet fictif",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/absolut-cover.png",
    gallery: [
      "assets/img/absolut-cover.png",
      "assets/img/absolut-detail-1.png"
    ],
    description: "Réalisation d'une affiche pour la sortie de la nouvelle bouteille « Absolut » de la marque de vodka, avec comme thème de campagne la mythologie. J'ai décidé de réutiliser l'image de Méduse ainsi que l'idée de ses cheveux de serpent, tout en y mêlant une notion artistique avec des illustrations à la manière d'Andy Warhol.",
    tags: ["Affiche", "Projet fictif"]
  },
  {
    id: "serigraphie-artisanale",
    title: "Sérigraphie artisanale",
    subtitle: "Tote bag — Studio M",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/serigraphie-artisanale-cover.png",
    gallery: [
      "assets/img/serigraphie-artisanale-cover.png",
      "assets/img/serigraphie-artisanale-detail-1.png",
      "assets/img/serigraphie-artisanale-detail-2.png",
      "assets/img/serigraphie-artisanale-detail-3.png",
      "assets/img/serigraphie-artisanale-detail-4.png"
    ],
    description: "Durant mes études à Studio M, j'ai eu l'occasion de réaliser un motif en sérigraphie manuelle. Le but était tout d'abord de créer un motif sur Illustrator, puis de l'incruster sur un support à l'aide de la technique manuelle de la sérigraphie, pour l'imprimer sur un tote bag.",
    tags: ["Sérigraphie manuelle", "Motif"]
  },
  {
    id: "serigraphie-plat",
    title: "Sérigraphie à plat",
    subtitle: "Illustration imprimée",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/serigraphie-plat-cover.jpg",
    gallery: [
      "assets/img/serigraphie-plat-cover.jpg",
      "assets/img/serigraphie-plat-detail-1.png"
    ],
    description: "Réalisation d'une illustration sur un thème choisi sur le logiciel Illustrator afin de l'imprimer dans une imprimerie que nous avons eu la chance de visiter, avec la technique d'impression de la sérigraphie.",
    tags: ["Sérigraphie", "Illustration"]
  },
  {
    id: "illustration-sardaigne",
    title: "La Sardaigne",
    subtitle: "Illustration de voyage",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-sardaigne.png",
    gallery: [
      "assets/img/illustration-sardaigne.png"
    ],
    description: "Illustration façon affiche de voyage vintage, réalisée pour évoquer les falaises et les eaux turquoise de la Sardaigne. Un exercice de style entre paysage vectoriel et ambiance estivale, dans la continuité de mon travail avec Richou Voyages.",
    tags: ["Illustration vectorielle", "Voyage"]
  },
  {
    id: "illustration-turquie",
    title: "La Turquie",
    subtitle: "Illustration de voyage",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-turquie.png",
    gallery: [
      "assets/img/illustration-turquie.png"
    ],
    description: "Scène illustrée d'une terrasse en Cappadoce au coucher du soleil, entre cheminées de fées et tapis traditionnels. Un travail sur la lumière et la couleur pour transmettre l'ambiance chaleureuse d'un voyage en Turquie.",
    tags: ["Illustration vectorielle", "Voyage"]
  },
  {
    id: "illustrations-affiches",
    title: "Affiches illustrées",
    subtitle: "Série personnelle",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-lisbonne.png",
    gallery: [
      "assets/img/illustration-lisbonne.png",
      "assets/img/illustration-vernet.png",
      "assets/img/illustration-loheac.png",
      "assets/img/illustration-venise.png",
      "assets/img/illustration-plage.png",
      "assets/img/illustration-fenetre.png",
      "assets/img/illustration-architecture.png",
      "assets/img/illustration-aperol.jpg",
      "assets/img/illustration-bottes.jpg"
    ],
    description: "Série d'affiches et d'illustrations vectorielles réalisées sur Illustrator, entre affiches de voyage (Lisbonne, Venise, Vernet-les-Bains, Lohéac) et compositions plus graphiques pensées comme des affiches décoratives. Un terrain de jeu pour explorer la couleur, le cadrage et les aplats.",
    tags: ["Illustration vectorielle", "Affiche", "Série personnelle"]
  },
  {
    id: "photos-personnelles",
    title: "Photos personnelles",
    subtitle: "Retouche & prise de vue",
    category: "photographie",
    categoryLabel: "Photographie",
    cover: "assets/img/photo-personal-1.jpg",
    gallery: [
      "assets/img/photo-personal-1.jpg",
      "assets/img/photo-personal-2.jpg",
      "assets/img/photo-personal-3.jpg",
      "assets/img/photo-personal-4.jpg",
      "assets/img/photo-personal-5.jpg",
      "assets/img/photo-personal-6.jpg",
      "assets/img/photo-personal-7.jpg",
      "assets/img/photo-personal-8.jpg"
    ],
    description: "Réalisation de photos dans le cadre de ma vie personnelle, puis retouche des photos sur Photoshop.",
    tags: ["Photographie", "Retouche"]
  },
  {
    id: "photos-studiom",
    title: "Photo Studio M",
    subtitle: "Composition & prise de vue",
    category: "photographie",
    categoryLabel: "Photographie",
    cover: "assets/img/photo-studiom-1.jpg",
    gallery: [
      "assets/img/photo-studiom-1.jpg",
      "assets/img/photo-studiom-2.jpg",
      "assets/img/photo-studiom-3.jpg",
      "assets/img/photo-studiom-4.jpg",
      "assets/img/photo-studiom-5.jpg"
    ],
    description: "Réalisation de photos en utilisant le principe des lignes graphiques et de la règle des tiers. Prise de vue de plusieurs sujets avec un appareil photo numérique durant mes études à Studio M.",
    tags: ["Composition", "Studio"]
  }
];

const TIMELINE = {
  formation: [
    { date: "2018 — 2019", title: "BAC STD2A", place: "Lycée Jeanne Delanoue, Cholet", desc: "Baccalauréat Sciences et Technologies du Design et des Arts Appliqués." },
    { date: "Juillet 2020", title: "BTS Communication", place: "ESUPEC, Cholet", desc: "Obtention de mon BTS Communication." },
    { date: "Juin 2022", title: "Bachelor Infographie", place: "Studio M — école de l'ESPL, Angers", desc: "Obtention de mon Bachelor Infographie." },
    { date: "Aujourd'hui", title: "Bachelor Design Graphique", place: "EEGP, Angers", desc: "Obtention de mon Bachelor Design Graphique." }
  ],
  experience: [
    { date: "Juin 2018", title: "Graphiste (stage)", place: "Publi Impress, La Séguinière", desc: "Première expérience en agence de communication visuelle." },
    { date: "Juin 2019", title: "Graphiste textile (stage)", place: "ICODE, Saint-Macaire-en-Mauges", desc: "Création graphique appliquée au textile." },
    { date: "Mai — Juin 2021", title: "Assistante communication et graphisme (stage)", place: "Mraude, Trélazé", desc: "Support graphique et communication pour l'agence." },
    { date: "Février 2022", title: "Assistante commerciale (stage)", place: "Univision, Cholet", desc: "Immersion côté commercial, complémentaire à mon profil créatif." },
    { date: "2022 — 2024", title: "Graphiste et assistante communication (alternance)", place: "Richou Voyages, Cholet", desc: "Création de supports de communication et refonte d'identités visuelles pour le groupe." },
    { date: "2024 — 2025", title: "Graphiste et assistante communication", place: "Richou Voyages, Cholet", desc: "Poursuite de mon poste au sein de l'entreprise, en charge de la création graphique." }
  ]
};
