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
    "img": ["/projects/amanogawa.png", "/projects/amanogawa2.webp", "/projects/amanogawa3.webp"],
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
    description: "Application Android avec Kotlin.",
    descriptionMain: "",
    technologies: ["Kotlin"],
    link: "",
    linkGit: "",
    category: "study",
    rnpc: "",
    img: ["/projects/Mobile.png", "/projects/Mobile1.png", "/projects/Mobile2.png"]
  },
  {
    years: "2024",
    title: "Series Tracker",
    description:
      "SeriesTracker est une application conçue pour vous aider à gérer vos séries télévisées. Elle vous permet de suivre les épisodes que vous avez regardés, de découvrir de nouvelles séries et de partager votre expérience avec vos amis.",
    descriptionMain: "",
    technologies: ["Angular", "Tailwind CSS", "REST API"],
    link: "",
    linkGit: "",
    category: "study",
    rnpc: "",
    img: ["/projects/Series.png", "/projects/Series1.png", "/projects/Series2.png"]
  },
  {
    years: "2024",
    title: "Hackathon",
    description: "Projet d'équipe React + Python.",
    descriptionMain: "",
    technologies: ["React", "Tailwind CSS", "Python"],
    link: "",
    linkGit: "",
    category: "study",
    rnpc: "",
    img: ["/projects/",]
  },
  {
    years: "2024",
    title: "MyCinema",
    description: "Projet PHP/MySQL de gestion de films.",
    descriptionMain: "",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    link: "",
    linkGit: "",
    category: "study",
    rnpc: "",
    img: ["/projects/cinema.png", "/projects/cinema1.png", "/projects/cinema2.png", "/projects/cinema3.png",]
  },
  {
    years: "2024",
    title: "Civic",
    description: "Projet scolaire Angular + Tailwind.",
    descriptionMain: "",
    technologies: ["Angular", "Tailwind CSS", "Figma"],
    link: "",
    linkGit: "",
    category: "study",
    rnpc: "",
    img: ["/projects/civic.png", "/projects/civic1.png", "/projects/civic2.png", "/projects/civic3.png",]
  },
];
