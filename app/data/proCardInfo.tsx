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
    description:
      "Développement d'une plateforme e-commerce pour Mobalpa avec Angular, TypeScript et Tailwind.",
    descriptionMain: "Mobalpa E-commerce est une plateforme de vente en ligne conçue pour offrir une expérience d’achat fluide, moderne et intuitive. Le projet vise à aider Mobalpa, marque spécialisée dans les cuisines et aménagements sur mesure, à développer ses ventes en ligne tout en intégrant des outils d’analyse en temps réel. Ces fonctionnalités permettent de suivre les performances, d’identifier les tendances et d’optimiser les stratégies commerciales grâce à l’analyse prédictive du comportement client.",
    technologies: ["Angular", "TypeScript", "Tailwind CSS", "MySQL", "MongoDB", "Figma", "Java"],
    link: "",
    linkGit: "https://github.com/twnguydev/mobalpa",
    category: "study",
    rnpc: "",
    img: ["/projects/mobalpa.png", "/projects/mobalpa2.webp", "/projects/mobalpa3.webp",]
  },
  {
    years: "2024-2025",
    title: "Amanogawa",
    description:
      "Développement du site Amanogawa avec HTML, Tailwind CSS et JavaScript (projet de travail).",
    descriptionMain: "",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Figma"],
    link: "https://amanogawa.space/",
    linkGit: "",
    category: "work",
    rnpc: "",
    img: ["/projects/amanogawa.png",]
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
        // blockTitle: "Management",
        sections: [
          {
            blockTitle: "Management",
            title: "Analyser le marché et définir un ensemble de besoins métier",
            tooltip: "RNCP38436BC01 - Cadrer un projet...",
            items: [
              "Analyser le marché...",
              "Rédiger un Cahier des Charges...",
              "Rédiger des spécifications techniques...",
              "Préparer une présentation technique..."
            ]
          },
          {
            blockTitle: "Management",
            title: "Architecture",
            tooltip: "RNCP38436BC01 - Structurer l’architecture...",
            items: [
              "Modélisation et conception UI",
              "Déploiement de l’environnement",
              "Réalisation de maquettes UI/UX",
              "Identification des BDD"
            ]
          },
          {
          blockTitle: "Management",
            title: "Développement",
            tooltip: "RNCP38436BC02 - Développement web",
            items: [
              "Développer le prototype",
              "Implémenter le front-end",
              "Respect des normes d’accessibilité",
              "Plan de tests"
            ]
          },
          {
          blockTitle: "Management",
            title: "Qualité",
            items: [
              "Analyse ergonomie / accessibilité",
              "Monitoring et amélioration continue",
              "Support et maintenance"
            ]
          }
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
