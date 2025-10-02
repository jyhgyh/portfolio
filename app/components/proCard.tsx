"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  years: string;
  description: string;
  descriptionMain: string,
  technologies: string[];
  link: string;
  linkGit: string,
  category: "work" | "study";
  rnpc: string,
  img: string;
};

const projects: Project[] = [
  {
    years: "2024",
    title: "Mobalpa E-commerce",
    description:
      "Développement d'une plateforme e-commerce pour Mobalpa avec Angular, TypeScript et Tailwind.",
    descriptionMain: "",
    technologies: ["Angular", "TypeScript", "Tailwind CSS", "MySQL", "MongoDB", "Figma", "Java"],
    link: "",
    linkGit: "https://github.com/twnguydev/mobalpa",
    category: "study",
    rnpc: "",
    img: "",
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
    img: "",
  },
  {
    years: "2024-2025",
    title: "Mindcare",
    description: "Plateforme web collaborative sur la santé mentale.",
    descriptionMain: "SeriesTracker est une application conçue pour vous aider à gérer vos séries télévisées. Elle vous permet de suivre les épisodes que vous avez regardés, de découvrir de nouvelles séries et de partager votre expérience avec vos amis. L'application est construite à l'aide de l'API BetaSeries, qui fournit des outils puissants et pratiques pour interagir avec les données des séries télévisées.",
    technologies: ["Angular", "TypeScript", "SpringBoot", "MySQL", "Tailwind CSS", "Docker"],
    link: "https://mind-care.fr/",
    linkGit: "https://github.com/MindCareFR/mindcare",
    category: "study",
    rnpc: "",
    img: "/MindCare.png",
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
    img: "",
  },
  {
    years: "2024",
    title: "Series Tracker",
    description: "SeriesTracker est une application conçue pour vous aider à gérer vos séries télévisées. Elle vous permet de suivre les épisodes que vous avez regardés, de découvrir de nouvelles séries et de partager votre expérience avec vos amis. L'application est construite à l'aide de l'API BetaSeries, qui fournit des outils puissants et pratiques pour interagir avec les données des séries télévisées.",
    descriptionMain: "",
    technologies: ["Angular", "Tailwind CSS", "REST API"],
    link: "",
    linkGit: "",
    category: "study",
    rnpc: "",
    img: "",
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
    img: "",
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
    img: "",
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
    img: "/Rinat.jpg",
  },
];

function ProCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="mb-8 p-6 bg-base-card-light m-2 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl text-text-primary font-semibold">{project.title}</h3>
        <span className="bg-base-light text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {project.years}
        </span>
      </div>
      <p className="text-gray-800 mb-1">{project.description}</p>
      <p className="text-text-secondary text-sm">
        <strong className="text-text-red">Technologies&nbsp;:</strong>{" "}
        {project.technologies.join(", ")}
      </p>
    </div>
  );
}

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "work" | "study">("all");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const allTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  ).sort();

  const filteredProjects = projects.filter((p) => {
    const categoryMatch = selectedCategory === "all" || p.category === selectedCategory;
    const techMatch = !selectedTech || p.technologies.includes(selectedTech);
    return categoryMatch && techMatch;
  });

  return (
    <section id="projets" className="py-16 bg-base-light relative">
      <h2 className="text-3xl text-text-primary font-bold mb-8 text-center">
        Projets dans lesquels j’ai mis une part de moi
      </h2>

      {/* Фильтры */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {["all", "work", "study"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat as "all" | "work" | "study")}
            className={`px-4 py-2 rounded-full border ${selectedCategory === cat ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
          >
            {cat === "all" ? "Tous" : cat === "work" ? "Travail" : "Études"}
          </button>
        ))}
      </div>

      {/* Фильтр технологий */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
            className={`px-3 py-1.5 text-sm rounded-full border transition ${selectedTech === tech
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Сетка проектов */}
      <div className="container grid md:grid-cols-2 mx-auto px-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProCard key={project.title} project={project} onClick={() => setActiveProject(project)} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-2">
            Aucun projet trouvé avec ce filtre.
          </p>
        )}
      </div>

      {/* Модалка */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/50">
          <div className="bg-base rounded-lg shadow-lg w-full max-h-[80vh] max-w-[70vw] p-6 relative overflow-y-auto">
            {/* Закрыть */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute text-xl top-2 right-3 text-red-800 hover:text-red-500"
            >
              ✕
            </button>

            {/* Заголовок */}
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-text-primary">{activeProject.title}</h3>
              <span className="bg-base-light text-gray-800 px-3 py-1 ml-2 rounded-full text-sm font-medium">
                {activeProject.years}
              </span>
            </div>

            {activeProject.img && (
              <div className="mb-4 mx-auto relative w-[60vw] h-[60vh]">
                <Image
                  src={activeProject.img}
                  alt={`Image du projet ${activeProject.title}`}
                  fill
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            )}
            
            {/* Технологии */}
            <p className="text-text-secondary text mb-2">
              <strong className="text-text-red">Technologies&nbsp;:</strong>{" "}
              {activeProject.technologies.join(", ")}
            </p>
            
            {/* Описание */}
            <p className="text-gray-700 mb-4">{activeProject.descriptionMain}</p>

            {/* Кнопка на сайт */}
            {activeProject.link && (
              <Link
                href={activeProject.link}
                target="_blank"
                rel="noopener"
                className="inline-block bg-text-pink hover:bg-blue-700 text-white px-4 py-2 rounded-full mr-2"
              >
                Voir le site
              </Link>
            )}
            {activeProject.linkGit && (
              <Link
                href={activeProject.linkGit}
                target="_blank"
                rel="noopener"
                className="inline-block bg-text-pink hover:bg-accent-hover text-white px-4 py-2 rounded-full"
              >
                Voir le code
              </Link>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
