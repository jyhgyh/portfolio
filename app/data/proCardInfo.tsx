export type Project = {
  title: string;
  years: string;
  description: string;
  descriptionMain: string;
  technologies: string[];
  link: string;
  linkGit: string;
  category: "work" | "study";
  rnpc: string;
  img: string[];

  // ⬇️ Новое поле
  blocks?: {
    sections: {
      blockTitle: string;   // ← заголовок, который ты хочешь "внутри"
      title: string;
      tooltip?: string;
      items: string[];
    }[];
  }[];
};


export const projects: Project[] = [
  {
    years: "2024",
    title: "Mobalpa E-commerce",
    description: "Développement d'une plateforme e-commerce pour Mobalpa avec Angular, TypeScript et Tailwind.",
    descriptionMain:
      "Mobalpa E-commerce est une plateforme de vente en ligne conçue pour offrir une expérience d’achat fluide, moderne et intuitive. Le projet vise à aider Mobalpa, marque spécialisée dans les cuisines et aménagements sur mesure, à développer ses ventes en ligne tout en intégrant des outils d’analyse en temps réel. Ces fonctionnalités permettent de suivre les performances, d’identifier les tendances et d’optimiser les stratégies commerciales grâce à l’analyse prédictive du comportement client.",
    technologies: [
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "MongoDB",
      "Figma",
      "Java"
    ],
    link: "",
    linkGit: "https://github.com/twnguydev/mobalpa",
    category: "study",
    rnpc: "",
    img: [
      "/projects/mobalpa.png",
      "/projects/mobalpa2.webp",
      "/projects/mobalpa3.webp"
    ],
    blocks: [
      {
        sections: [
          /* ---------------------- MANAGEMENT ---------------------- */
          {
            blockTitle: "Management",
            title: "Idéation et conception",
            tooltip: "RNCP38436BC01 - Cadrer un projet et conceptualiser une solution web",
            items: [
              "Rédiger un Cahier Des Charges (CDC) en partant d'une expression de besoins, afin de cadrer fonctionnellement un projet de solution web dans le respect des réglementations en vigueur et notamment le RGPD",
              // "Compréhension des besoins métier",
              "Rédiger des spécifications techniques en analysant un CDC, afin de cadrer techniquement un projet de développement de solution web",
              "Rédiger une présentation permettant la validation des maquettes, des choix techniques et du schéma global du projet"
            ]
          },
          {
            blockTitle: "",
            title: "Organisation du projet",
            tooltip: "RNCP38436BC01 - Cadrer un projet et conceptualiser une solution web",
            items: [
              "Déployer un environnement de travail en mettant en place les outils de versionnage, de partage et de collaboration nécessaires"
            ]
          },

          /* ---------------------- DÉVELOPPEMENT ---------------------- */
          {
            blockTitle: "Développement",
            title: "Design et UX/UI",
            tooltip: "RNCP38436BC02 - Développer une solution web",
            items: [
              "Réaliser une maquette Figma en respectant les bonnes pratiques d’ergonomie et d’accessibilité",
              "Intégrer les maquettes Figma en Angular"
            ]
          },
          {
            blockTitle: "",
            title: "Architecture et base de données",
            tooltip: "RNCP38436BC02 - Développer une solution web",
            items: [
              "Identifier les fonctionnalités à développer en modélisant les éléments clés et leurs interconnexions",
              "Participer à la structuration de l’architecture technique du projet"
            ]
          },
          {
            blockTitle: "",
            title: "Développement Front-End",
            tooltip: "RNCP38436BC02 - Développer une solution web",
            items: [
              "Développer le prototype de la solution web",
              "Implémenter la partie « front-end » de la solution en Angular",
              "Implémenter la communication avec l’API via des services HTTP",
              "Gérer les états, composants et le routing Angular",
              "Mettre en place un design responsive avec Tailwind CSS",
              "Tests éventuels (unitaires / intégration)"
            ]
          },

          /* ---------------------- SÉCURITÉ ---------------------- */
          {
            blockTitle: "Sécurité",
            title: "Authentification sécurisée",
            tooltip: "RNCP38436BC02 - Développer une solution web",
            items: [
              "Implémenter des règles d’authentification en respectant les bonnes pratiques de sécurité"
            ]
          },

          /* ---------------------- QUALITÉ ---------------------- */
          {
            blockTitle: "Qualité",
            title: "Cycle de vie d’une application",
            tooltip: "RNCP38436BC03 - Déployer un système d’assurance qualité",
            items: [
              "Analyser la qualité de l'ergonomie et l'accessibilité de la solution (normes, navigation, bonnes pratiques)",
              "Identifier les axes d'amélioration pour optimiser l'expérience utilisateur"
            ]
          }
        ]
      }
    ]
  },
  {
    "years": "2024-2025",
    "title": "Amanogawa",
    "description": "Développement et amélioration du site Amanogawa avec HTML, Tailwind CSS et JavaScript",
    "descriptionMain": "Amanogawa est une plateforme communautaire dédiée à l’anime et à la culture japonaise, proposant des articles, critiques, galeries et actualités liées à l’animation. Rejoint en cours de développement, mon rôle a consisté à moderniser l’interface existante, améliorer l’expérience utilisateur et renforcer l’accessibilité pour la communauté ukrainienne et francophone. Le travail visait également à harmoniser le design, optimiser les performances front-end et assurer la cohérence visuelle du site.",
    "technologies": ["HTML", "Tailwind CSS", "JavaScript", "Figma", "Angular"],
    "link": "https://amanogawa.space/",
    "linkGit": "",
    "category": "work",
    "rnpc": "",
    "img": ["/projects/amanogawa.png"],
    "blocks": [
      {
        "sections": [
          {
            "blockTitle": "Management",
            "title": "Participation au projet",
            "tooltip": "",
            "items": [
              "Analyse des maquettes, de l’architecture et des choix techniques déjà en place afin d’assurer une continuité cohérente du développement",
              "Compréhension des besoins métier et des priorités avant l’intégration de nouvelles fonctionnalités",
            ]
          },
          {
            "blockTitle": "Organisation du projet",
            "title": "Environnement de travail et outils",
            "tooltip": "",
            "items": [
              "Mise en place d’un environnement de travail adapté au contexte distant, incluant outils de versionnage, collaboration et communication, afin de garantir une participation efficace dans un projet déjà structuré"
            ]
          },
          {
            "blockTitle": "Développement",
            "title": "Front-end",
            "tooltip": "",
            "items": [
              "Amélioration et modernisation de l’interface utilisateur existante",
              "Intégration ou réintégration de maquettes Figma partiellement implémentées",
              "Développement de nouvelles sections, composants et éléments interactifs",
              "Optimisation du responsive design et amélioration des performances CSS/JS",
              "Implémentation et ajustement de la communication avec l’API (HTTP services)",
              "Gestion du routing, refactorisation de composants et maintien de la cohérence du design",
              "Correction de bugs, nettoyage du code et amélioration globale de la qualité front-end"
            ]
          },
          {
            "blockTitle": "Qualité",
            "title": "Amélioration continue",
            "tooltip": "",
            "items": [
              "Analyse de l’ergonomie, de l’accessibilité et de l’architecture visuelle afin d’identifier les améliorations possibles",
              "Contribution à la mise en place de bonnes pratiques en matière de design, performance et maintenance"
            ]
          }
        ]
      }
    ]
  },
  {
    years: "2024",
    title: "MindCare",
    description: "Solution digitale autour de la santé mentale...",
    descriptionMain: "MindCare est notre projet de fin d'études...",
    technologies: ["Angular", "Tailwind", "TypeScript", "Laravel", "MySQL"],
    link: "",
    linkGit: "",
    category: "study",
    rnpc: "",
    img: ["/projects/MindCare.png", "/projects/MindCare1.png", "/projects/MindCare2.png"],
    blocks: [
      {
        sections: [
          {
            blockTitle: "Management",
            title: "Analyser le marché et définir un ensemble de besoins métier",
            tooltip: "RNCP38436BC01 - Cadrer un projet et conceptualiser une solution web",
            items: [
              "Rédiger un Cahier Des Charges (CDC) en partant d'une expression de besoins, afin de cadrer fonctionnellement un projet de solution web dans le respect des réglementations en vigueur et notamment le RGPD",
              "Rédiger des spécifications techniques en analysant un CDC, afin de cadrer techniquement un projet de développement de solution web",
              "Rédiger une présentation pour présenter les choix techniques, les maquettes, et le schéma de la solution web en argumentant les choix faits afin de permettre au client ou au décideur de valider la proposition de solution",
            ]
          },
          {
            blockTitle: "Architecture",
            title: "Modélisation et conception de l'interface utilisateur",
            tooltip: "RNCP38436BC01 - Cadrer un projet et conceptualiser une solution web",
            items: [
              "Déployer un environnement de travail en mettant en place les outils de versionnage, de partage et de collaboration/communication nécessaires, afin de cadrer opérationnellement un projet de développement de solution web",
              "Réaliser une maquette afin de permettre au client de valider la structure de la solution web en respectant les bonnes pratiques en termes d'ergonomie et d'accessibilité",
              "Identifier les fonctionnalités à développer, en modélisant les divers éléments et leurs interconnexions, afin de structurer l'architecture de la solution web et de Base De Données (BDD)"
            ]
          },
          {
            blockTitle: "Développement",
            title: "Front",
            tooltip: "RNCP38436BC02 - Développer une solution web",
            items: [
              "Développer le prototype de la solution web afin de présenter l'architecture technique au client",
              "Rédiger le code de la solution en transcrivant les fonctionnalités du CDC, en respectant les normes d'accessibilité, d'ergonomie, de référencement, et la réglementation en vigueur afin de développer la solution web",
              "Intégrer les différents éléments de la solution web en fonction des maquettes, en respectant les dernières normes des langages utilisés (HTML, CSS, JS, …)",
              'Implémenter la partie "front-end" d`une solution web',
              "Implémenter un plan de tests en concevant les différents tests unitaires et d'intégration afin de vérifier que l'ensemble des fonctionnalités développées fonctionne bien séparément et à l'unisson"
            ]
          },
          {
            blockTitle: "",
            title: "Back",
            tooltip: "RNCP38436BC02 - Développer une solution web",
            items: [
              'Implémenter la logique et la base de données assurant la persistance des données côté serveur (le "back-end")',
              "Implémenter un plan de tests en concevant les différents tests unitaires et d'intégration afin de vérifier que l'ensemble des fonctionnalités développées fonctionne bien séparément et à l'unisson",
              "Déployer une application web en utilisant un serveur afin de rendre l'application accessible aux utilisateurs",
            ]
          },
          {
            blockTitle: "Sécurité",
            title: "Authentification sécurisée",
            tooltip: "RNCP38436BC02 - Développer une solution web",
            items: [
              "Implémenter des règles d'authentification, en respectant les bonnes pratiques en matière de sécurité, afin de sécuriser l'accès à une solution web",
            ]
          },
          {
            blockTitle: "Qualité",
            title: "Qualité",
            tooltip: "RNCP38436BC03 - Déployer un système d’assurance qualité tout au long du cycle de vie d’une solution web",
            items: [
              "Analyse ergonomie / accessibilité",
              "Monitoring et amélioration continue",
              "Support et maintenance"
            ]
          },
          {
            blockTitle: "",
            title: "Monitoring et amélioration continue",
            tooltip: "RNCP38436BC02 - Développer une solution web",
            items: [
              "Monitorer le lancement d'une solution web, en recueillant les retours utilisateurs, afin d'évaluer la qualité de la solution web déployée",
              "Identifier des améliorations qualitatives et de performance d'une solution web, en analysant les retours utilisateurs et les données d'analyse du trafic, afin d'améliorer la qualité et la disponibilité d'une solution web déployée"
            ]
          },
          {
            blockTitle: "",
            title: "Support et maintenance",
            tooltip: "RNCP38436BC02 - Développer une solution web",
            items: [
              "Rédiger une documentation technique à destination des équipes parties prenantes en réalisant la documentation technique et fonctionnelle de la solution web, afin de garantir sa pérennité et son évolution future",
              "Rédiger une documentation utilisateur pour apporter un support aux utilisateurs, afin de garantir l'autonomie et la satisfaction des utilisateurs de la solution web"
            ]
          },
        ]
      }
    ]
  },
  {
    years: "2025",
    title: "Mobile App",
    description: "Application Android en Kotlin exploitant capteurs, caméra et carte.",
    descriptionMain:
      "Mobile App est une application Android développée en Kotlin qui permet aux utilisateurs de découvrir davantage le lieu où ils se trouvent. En combinant les capteurs du téléphone (caméra, GPS, accéléromètre, gyroscope) avec plusieurs API publiques, l’application affiche la météo, l’adresse précise, l’heure locale et des informations Wikipédia sur les lieux à proximité ou sur un point choisi sur la carte. Le projet a été réalisé en autonomie afin d’explorer l’écosystème Android moderne (Jetpack Compose, CameraX, Google Maps SDK, Retrofit) et de concevoir une expérience utilisateur simple, intuitive et orientée découverte.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "CameraX",
      "Google Maps SDK",
      "Retrofit2",
      "OpenWeather",
      "Wikipedia GeoSearch",
      "OpenStreetMap Nominatim"
    ],
    link: "",
    linkGit: "",
    category: "study",
    rnpc: "",
    img: ["/projects/Mobile.png", "/projects/Mobile1.png", "/projects/Mobile2.png"],
    blocks: [
      {
        sections: [
          {
            blockTitle: "Management",
            title: "Conception et cadrage d’un projet mobile individuel",
            tooltip: "RNCP38436BC01 - Cadrer un projet et conceptualiser une solution web / mobile",
            items: [
              "Définir l’objectif principal de l’application : aider l’utilisateur à en savoir plus sur l’endroit où il se trouve grâce aux capteurs du téléphone et à des API publiques",
              "Analyser les contraintes techniques (Android, capteurs disponibles, API externes) afin de choisir une architecture et un périmètre fonctionnel réalistes",
              "Rédiger une première description fonctionnelle des écrans et des cas d’usage (mode caméra, mode carte, informations contextuelles)",
              "Organiser le travail en autonomie en planifiant les étapes : intégration des capteurs, mise en place des API, construction de l’interface et tests manuels"
            ]
          },
          {
            blockTitle: "Architecture",
            title: "Architecture mobile et intégration des services",
            tooltip: "RNCP38436BC01 - Cadrer un projet et conceptualiser une solution web / mobile",
            items: [
              "Concevoir une architecture séparant la logique de récupération des données (API, capteurs) de l’affichage (Jetpack Compose)",
              "Structurer l’application autour de plusieurs Activities (écran principal, caméra, carte) afin de clarifier la navigation",
              "Mettre en place Retrofit2 pour centraliser les appels aux API (météo, géocodage, Wikipédia, fuseau horaire)",
              "Définir le flux de données entre la carte, les capteurs et les différentes API pour afficher des informations cohérentes à partir d’un point géographique"
            ]
          },
          {
            blockTitle: "Développement",
            title: "Interface et expérience utilisateur (Jetpack Compose)",
            tooltip: "RNCP38436BC02 - Développer une solution web / mobile",
            items: [
              "Créer l’écran principal avec Jetpack Compose, proposant un menu simple permettant de choisir entre le mode caméra (ARActivity) et le mode carte (MapActivity)",
              "Concevoir une interface claire pour guider l’utilisateur dans la découverte des informations liées à sa position ou à un point sélectionné sur la carte",
              "Mettre en place une mise en page responsive adaptée aux différents formats d’écran Android",
              "Gérer la navigation entre les écrans en assurant une expérience fluide et compréhensible"
            ]
          },
          {
            blockTitle: "",
            title: "Intégration des capteurs et des fonctionnalités du téléphone",
            tooltip: "RNCP38436BC02 - Développer une solution web / mobile",
            items: [
              "Exploiter la caméra avec CameraX pour afficher un flux vidéo en temps réel dans ARActivity",
              "Utiliser l’accéléromètre et le gyroscope pour calculer et afficher l’inclinaison du téléphone (pitch / roll) en surimpression sur la caméra",
              "Récupérer la position GPS de l’utilisateur pour centrer la carte, créer un marqueur « Vous êtes ici » et déclencher les appels API associés",
              "Configurer Google Maps SDK pour afficher la carte, gérer les clics sur la carte et placer des marqueurs sur les lieux sélectionnés"
            ]
          },
          {
            blockTitle: "",
            title: "APIs et données contextuelles",
            tooltip: "RNCP38436BC02 - Développer une solution web / mobile",
            items: [
              "Consommer l’API OpenWeather afin d’afficher la température et les conditions météo du point sélectionné",
              "Utiliser OpenStreetMap Nominatim pour effectuer un reverse geocoding et récupérer l’adresse textuelle (pays, ville, rue)",
              "Interroger l’API Wikipedia GeoSearch pour trouver la curiosité ou le point d’intérêt le plus proche et proposer l’ouverture de l’article dans le navigateur",
              "Appeler une API de fuseau horaire pour afficher l’heure locale liée à la zone géographique sélectionnée"
            ]
          },
          {
            blockTitle: "Téléphone & permissions",
            title: "Permissions et interaction avec l’utilisateur",
            tooltip: "RNCP38436BC02 - Développer une solution web / mobile",
            items: [
              "Gérer les permissions sensitives (CAMERA, ACCESS_FINE_LOCATION) via le système Android pour garantir un comportement conforme aux bonnes pratiques",
              "Informer l’utilisateur en cas de refus de permission et limiter les fonctionnalités en conséquence",
              "Assurer que les éléments utilisés (caméra, GPS, capteurs) sont bien disponibles sur le téléphone ou l’émulateur lors des tests"
            ]
          },
          {
            blockTitle: "Qualité",
            title: "Ergonomie et expérience utilisateur",
            tooltip: "RNCP38436BC03 - Déployer un système d’assurance qualité tout au long du cycle de vie d’une solution web / mobile",
            items: [
              "Veiller à ce que l’interface reste simple, lisible et intuitive malgré la quantité d’informations affichées (météo, adresse, heure, lieu Wikipédia)",
              "Tester manuellement plusieurs scénarios (position actuelle, clic sur la carte, absence temporaire de localisation) pour vérifier la robustesse du flux",
              "Optimiser les messages Toast et les feedbacks visuels pour aider l’utilisateur à comprendre ce qui se passe (chargement, erreurs d’API, absence de résultats)",
              "Identifier des pistes d’amélioration futures : gestion d’erreurs plus avancée, mise en cache des réponses API, historique des lieux consultés"
            ]
          }
        ]
      }
    ]
  },
  {
    "years": "2024",
    "title": "Series Tracker",
    "description": "Application web permettant de gérer ses séries, suivre sa progression et consulter les détails des épisodes grâce à l’API BetaSeries.",
    "descriptionMain": "SeriesTracker est une application développée avec Angular et Tailwind CSS permettant aux utilisateurs de suivre facilement l’avancement de leurs séries. Grâce à l’intégration de l’API BetaSeries, l’application offre un accès complet aux informations sur les séries et les épisodes, tout en permettant l’authentification via Google, la gestion des épisodes vus, l’ajout aux favoris et la consultation des détails des saisons et des épisodes. Conçu comme un projet d'apprentissage, il met en pratique la modularité Angular, l'architecture orientée services et la gestion de la persistance locale (localStorage).",
    "technologies": ["Angular", "Tailwind CSS", "REST API", "localStorage", "Routing", "Modular Components"],
    "link": "",
    "linkGit": "",
    "category": "study",
    "rnpc": "",
    "img": ["/projects/Series.png", "/projects/Series1.png", "/projects/Series2.png"],
    "blocks": [
      {
        "sections": [
          {
            "blockTitle": "Management",
            "title": "Gestion du projet et organisation",
            "tooltip": "RNCP38436BC01 - Cadrer un projet et conceptualiser une solution web",
            "items": [
              "Analyse du sujet, définition des fonctionnalités principales et répartition du travail au sein d’un binôme",
              "Rédaction du cahier fonctionnel et des choix techniques avant le développement",
              "Planification du projet (itérations, priorisation des fonctionnalités obligatoires)",
              "Suivi du projet et adaptation des tâches selon l’avancement"
            ]
          },
          {
            "blockTitle": "Architecture",
            "title": "Structure technique et conception",
            "tooltip": "RNCP38436BC01 - Concevoir une architecture fonctionnelle et technique",
            "items": [
              "Mise en place d’une architecture modulaire Angular (components / services / models)",
              "Intégration d’un système de routage pour la navigation interne",
              "Utilisation de services Angular pour consommer l’API BetaSeries",
              "Stockage persistant des données utilisateur via localStorage"
            ]
          },
          {
            "blockTitle": "Développement",
            "title": "Front-end et intégration API",
            "tooltip": "RNCP38436BC02 - Développer une solution web",
            "items": [
              "Authentification via Google et gestion de la session",
              "Affichage de la liste des séries suivies par l’utilisateur",
              "Ajout d’une série dans la liste via l’icône +",
              "Affichage des détails de la série : titre, image, saisons, épisodes, durée, résumé, genres, note",
              "Possibilité d’archiver / ajouter aux favoris une série",
              "Affichage des épisodes non vus organisés par saison",
              "Actions sur un épisode : marquer comme vu, marquer tous les précédents comme vus, commenter",
              "Affichage des épisodes déjà vus et possibilité de les marquer comme non-vus",
              "Utilisation complète de l’API BetaSeries (plusieurs endpoints différents)"
            ]
          },
          {
            "blockTitle": "UI / UX",
            "title": "Interface utilisateur",
            "tooltip": "RNCP38436BC03 - Qualité et accessibilité",
            "items": [
              "Création d’une interface responsive avec Tailwind CSS",
              "Organisation des écrans selon les besoins de navigation de l’utilisateur",
              "Affichage clair des séries, épisodes, saisons et états (vu / non vu)",
              "Amélioration de l’expérience utilisateur grâce à une structure logique et intuitive"
            ]
          },
          {
            "blockTitle": "Qualité",
            "title": "Qualité et maintenance",
            "tooltip": "RNCP38436BC03 - Déployer un système d’assurance qualité",
            "items": [
              "Respect des bonnes pratiques Angular (services, components modulaires)",
              "Gestion des erreurs API et retours utilisateur clairs",
              "Refactorisation régulière du code pour améliorer la lisibilité",
              "Optimisation des performances (chargement conditionnel, appels API limités)"
            ]
          }
        ]
      }
    ]
  },
  {
    years: "2024",
    title: "MyCinema",
    description: "Projet PHP/MySQL de gestion de films.",
    descriptionMain: "MyCinema est une application web de gestion de films développée en PHP et MySQL dans le cadre de ma première expérience de projet complet. Elle permet d’interagir avec une base de données de cinéma afin de rechercher des films, gérer les abonnements des clients, consulter l’historique des visionnages et administrer différentes informations liées aux membres. Le projet inclut également un espace client et un espace administrateur, une pagination dynamique, ainsi que des filtres avancés par genre, distributeur ou date de projection. Une attention particulière a été portée à la structuration du code, à la séparation logique/affichage et à l’amélioration progressive de la base de données.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    link: "",
    linkGit: "",
    category: "study",
    rnpc: "",
    img: ["/projects/cinema.png", "/projects/cinema1.png", "/projects/cinema2.png", "/projects/cinema3.png",],
    blocks: [
      {
        "sections": [
          {
            "blockTitle": "Management",
            "title": "Analyse du besoin et cadrage",
            "tooltip": "RNCP38436BC01",
            "items": [
              "Analyse du sujet et définition des fonctionnalités obligatoires afin de cadrer le périmètre du projet",
              "Compréhension de la base de données fournie pour identifier les contraintes techniques",
              "Organisation du travail et planification des étapes de développement dans un projet individuel"
            ]
          },
          {
            "blockTitle": "Architecture",
            "title": "Conception de la structure et de la base de données",
            "tooltip": "RNCP38436BC01",
            "items": [
              "Séparation logique entre l’affichage (front) et la logique métier (PHP)",
              "Amélioration progressive de la base de données (nouvelles colonnes, images, liens externes)",
              "Définition des modèles d’interaction (films, membres, abonnements, séances)"
            ]
          },
          {
            "blockTitle": "Développement",
            "title": "Développement back-end et front-end",
            "tooltip": "RNCP38436BC02",
            "items": [
              "Développement des fonctionnalités de recherche de films par nom, genre, distributeur ou date",
              "Mise en place d’un système complet pour gérer les membres et leurs abonnements",
              "Implémentation de la pagination dynamique pour tous les résultats",
              "Création d’un espace client et d’un espace administrateur",
              "Ajout des fonctionnalités bonus : images des films et liens vers les sites d’avis",
              "Refactorisation du code et organisation modulaire"
            ]
          },
          {
            "blockTitle": "Qualité",
            "title": "Assurance qualité et pérennité",
            "tooltip": "RNCP38436BC03",
            "items": [
              "Respect des bonnes pratiques PHP/MySQL et validation HTML5",
              "Vérification du bon fonctionnement des filtres, de la pagination et des formulaires",
              "Documentation du fonctionnement du site et des structures principales"
            ]
          }
        ]
      }
    ]
  },
  {
    "years": "2024",
    "title": "Civic",
    "description": "Projet full-stack Angular + Tailwind + Java Spring en cours de développement.",
    "descriptionMain": "Civic est une application full-stack en cours de développement, inspirée des plateformes de services publics comme «Дія». Le projet regroupe les documents principaux d’un utilisateur, propose un accès centralisé aux services administratifs (résidence, fiscalité, permis, certificats, aides sociales) et intègre un système de news et de fonctionnalités interactives. Le développement comprend à la fois le front-end Angular/Tailwind et le back-end Java Spring Boot/MySQL, entièrement conçus et réalisés par moi-même.",
    "technologies": ["Angular", "Tailwind CSS", "Figma", "Java", "Spring Boot", "MySQL"],
    "link": "",
    "linkGit": "https://github.com/jyhgyh/Main",
    "category": "study",
    "rnpc": "",
    "img": [
      "/projects/civic.png",
      "/projects/civic1.png",
      "/projects/civic2.png",
      "/projects/civic3.png"
    ],
    "blocks": [
      {
        "sections": [
          {
            "blockTitle": "Management",
            "title": "Analyse, conception et documentation",
            "tooltip": "RNCP38436BC01 - Cadrer un projet et conceptualiser une solution web",
            "items": [
              "Analyse des besoins à partir des services administratifs existants et création d’un cahier des charges complet",
              "Conception de l’architecture fonctionnelle et rédaction d’une documentation détaillée (pages, modules, flux, permissions)",
              "Création des maquettes Figma et définition de la logique des écrans, inspirée de plateformes gouvernementales comme «Дія»"
            ]
          },
          {
            "blockTitle": "Architecture",
            "title": "Architecture front-end et back-end",
            "tooltip": "RNCP38436BC01 - Conceptualisation d’une solution web",
            "items": [
              "Création d'une architecture full-stack comprenant un front-end Angular/Tailwind et un back-end Java Spring Boot",
              "Organisation du front-end en modules (Documents, Services, News, Profil) avec routing avancé",
              "Définition des schémas de base de données MySQL pour la gestion des documents, services et notifications"
            ]
          },
          {
            "blockTitle": "Développement",
            "title": "Front-end Angular",
            "tooltip": "RNCP38436BC02 - Développer une solution web",
            "items": [
              "Implémentation des pages principales : documents, services, actualités, profil",
              "Création de composants dynamiques (carrousels, cartes documentaires, listes de services)",
              "Intégration complète avec l’API interne (Spring Boot) via des services HTTP Angular",
              "Responsive design et système d’UI basé sur Tailwind CSS"
            ]
          },
          {
            "blockTitle": "",
            "title": "Back-end Spring Boot",
            "tooltip": "RNCP38436BC02 - Développer une solution web",
            "items": [
              "Mise en place du serveur Spring Boot et des micro-services REST",
              "Création des endpoints pour documents, notifications, services administratifs",
              "Connexion à MySQL, création des entités et des repositories",
              "Gestion des données utilisateur (sans données réelles) selon des modèles administratifs"
            ]
          },
          {
            "blockTitle": "Sécurité",
            "title": "Sécurisation du projet (en cours)",
            "tooltip": "RNCP38436BC02",
            "items": [
              "Gestion des permissions front-end pour les sections sensibles",
              "Mise en place prévue : authentification sécurisée, JWT, règles d’accès par rôles",
              "Respect des bonnes pratiques pour la manipulation de données personnelles (RGPD)"
            ]
          },
          {
            "blockTitle": "Qualité",
            "title": "Assurance qualité et évolution",
            "tooltip": "RNCP38436BC03",
            "items": [
              "Analyse de l’ergonomie, de l’accessibilité et de la cohérence de l’interface",
              "Documentation progressive du projet (front + back + API)",
              "Planification des évolutions : intégration de services supplémentaires, sécurité renforcée, optimisation UX"
            ]
          }
        ]
      }
    ]
  }
];
