"use client";

import { useState } from "react";
import Link from "next/link";

type Project = {
  title: string;
  years: string;
  description: string;
  technologies: string[];
  link: string;
  category: "work" | "study";
  img: string;
};

const projects: Project[] = [
  {
    years: "2024",
    title: "Mobalpa E-commerce",
    description:
      "Développement d'une plateforme e-commerce pour Mobalpa avec Angular, TypeScript et Tailwind.",
    technologies: ["Angular", "TypeScript", "Tailwind CSS", "MySQL", "MongoDB", "Figma", "Java"],
    link: "https://github.com/twnguydev/mobalpa",
    category: "study",
    img: "../publik",
},
  {
    years: "2024-2025",
    title: "Amanogawa",
    description:
      "Développement du site Amanogawa avec HTML, Tailwind CSS et JavaScript (projet de travail).",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Figma"],
    link: "https://amanogawa.space/",
    category: "work",
    img: "../publik",
},
  {
    years: "2024-2025",
    title: "Mindcare",
    description: "Plateforme web collaborative sur la santé mentale.",
    technologies: ["Angular", "TypeScript", "SpringBoot", "MySQL", "Tailwind CSS", "Docker"],
    link: "",
    category: "study",
    img: "../publik",
},
  {
    years: "2025",
    title: "Mobile App",
    description: "Application Android avec Kotlin.",
    technologies: ["Kotlin"],
    link: "",
    category: "study",
    img: "../publik",
},
  {
    years: "2024",
    title: "Series Tracker",
    description: "SeriesTracker est une application conçue pour vous aider à gérer vos séries télévisées. Elle vous permet de suivre les épisodes que vous avez regardés, de découvrir de nouvelles séries et de partager votre expérience avec vos amis. L'application est construite à l'aide de l'API BetaSeries, qui fournit des outils puissants et pratiques pour interagir avec les données des séries télévisées. ",
    technologies: ["Angular", "Tailwind CSS", "REST API"],
    link: "",
    category: "study",
    img: "../publik",
},
  {
    years: "2024",
    title: "Hackathon",
    description: "Projet d'équipe React + Python.",
    technologies: ["React", "Tailwind CSS", "Python"],
    link: "",
    category: "study",
    img: "../publik",
},
  {
    years: "2024",
    title: "MyCinema",
    description: "Projet PHP/MySQL de gestion de films.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    link: "",
    category: "study",
    img: "../publik",
},
  {
    years: "2024",
    title: "Civic",
    description: "Projet scolaire Angular + Tailwind.",
    technologies: ["Angular", "Tailwind CSS", "Figma"],
    link: "",
    category: "study",
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
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
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
            className={`px-3 py-1.5 text-sm rounded-full border transition ${
              selectedTech === tech
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
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            {/* Закрыть */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:hover:text-white"
            >
              ✕
            </button>

            {/* Заголовок */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-text-primary">{activeProject.title}</h3>
              <span className="bg-base-light text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                {activeProject.years}
              </span>
            </div>

            <img src={activeProject.img} alt="Project photo" />

            {/* Описание */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">{activeProject.description}</p>

            {/* Технологии */}
            <p className="text-text-secondary text-sm mb-4">
              <strong className="text-text-red">Technologies&nbsp;:</strong>{" "}
              {activeProject.technologies.join(", ")}
            </p>

            {/* Кнопка на сайт */}
            {activeProject.link && (
              <Link
                href={activeProject.link}
                target="_blank"
                rel="noopener"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
              >
                Voir le site
              </Link>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
