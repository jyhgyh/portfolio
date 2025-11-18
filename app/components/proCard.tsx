"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "../data/proCardInfo";

/* ===========================================
   🔥 Компонент секций для модалки
=========================================== */
function ProjectSkills({ blocks }: { blocks: Project["blocks"] }) {
  if (!blocks) return null;

  return (
    <div
    // className={`grid gap-6 mt-8 ${
    //   isTwoColumns ? "md:grid-cols-2 grid-cols-1" : "grid-cols-1"
    // }`}
    >
      {blocks.map((block, blockIndex) => (
        <div key={blockIndex} className="space-y-6 mt-8">

          {block.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">

              {/* Заголовок блока */}
              <h2 className="text-2xl text-text-primary font-bold">
                {section.blockTitle}
              </h2>

              {/* Карточка секции */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">

                {/* Заголовок секции */}
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-lg text-gray-900">
                    {section.title}
                  </h4>

                  {section.tooltip && (
                    <div className="relative group">
                      <span className="text-gray-500 text-sm cursor-pointer">ℹ️</span>

                      <div className="absolute right-0 ml-6 top-1/2 -translate-y-1/2
                                bg-black text-white text-xs rounded-md px-3 py-2
                                hidden group-hover:block z-20 w-40">
                        {section.tooltip}
                      </div>
                    </div>
                  )}
                </div>

                {/* Список */}
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-gray-700 text-sm flex gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>
      ))}
    </div>
  );
}


/* ===========================================
    🔥 Карточка проекта
=========================================== */
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

/* ===========================================
    🔥 Основная секция с проектами
=========================================== */
export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "work" | "study">("all");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (activeProject) setCurrentIndex(0);
  }, [activeProject]);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);

  // Закрытие по клику вне модалки
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setActiveProject(null);
      }
    };

    if (activeProject) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeProject]);

  const allTechnologies = Array.from(new Set(projects.flatMap((p) => p.technologies))).sort();

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

      {/* Категории */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {["all", "work", "study"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat as "all" | "work" | "study")}
            className={`px-4 py-2 rounded-full border ${selectedCategory === cat
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700"
              }`}
          >
            {cat === "all" ? "Tous" : cat === "work" ? "Travail" : "Études"}
          </button>
        ))}
      </div>

      {/* Технологии */}
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

      {/* Сетка */}
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
          <div
            ref={modalRef}
            className="bg-base rounded-lg shadow-lg w-full max-h-[80vh] max-w-[70vw] p-6 relative overflow-y-auto"
          >
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

            {/* Карусель */}
            {activeProject.img && activeProject.img.length > 0 && (
              <div className="relative mb-6 mx-auto w-full max-w-[900px] flex justify-center items-center">

                {activeProject.img.length > 1 && (
                  <button
                    onClick={() =>
                      setCurrentIndex((prev) => (prev - 1 + activeProject.img.length) % activeProject.img.length)
                    }
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                  >
                    ‹
                  </button>
                )}

                <Image
                  src={activeProject.img[currentIndex]}
                  alt={`Image ${currentIndex + 1} du projet ${activeProject.title}`}
                  width={900}
                  height={600}
                  className="rounded-lg object-contain max-h-[70vh] w-auto transition-all duration-300"
                />

                {activeProject.img.length > 1 && (
                  <button
                    onClick={() => setCurrentIndex((prev) => (prev + 1) % activeProject.img.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                  >
                    ›
                  </button>
                )}
              </div>
            )}

            {/* Technologies */}
            <p className="text-text-secondary mb-2">
              <strong className="text-text-red">Technologies&nbsp;:</strong>{" "}
              {activeProject.technologies.join(", ")}
            </p>

            {/* Основное описание */}
            <p className="text-gray-700 mb-4">{activeProject.descriptionMain}</p>

            {/* 🔥 ВСТАВЛЕНО СЮДА — ПРАВИЛЬНОЕ МЕСТО */}
            {activeProject.blocks && (
              <ProjectSkills blocks={activeProject.blocks} />
            )}

            {/* Кнопки */}
            <div className="mt-6">
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
        </div>
      )}
    </section>
  );
}
