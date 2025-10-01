// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function Projects() {
//   const [selectedProject, setSelectedProject] = useState<any>(null);

//   const projects = [
//     {
//       id: 1,
//       title: "MindCare",
//       description:
//         "Une plateforme qui aide les personnes atteintes de troubles mentaux à organiser leurs tâches quotidiennes.",
//       image: "/mindcare.png",
//       tags: ["Angular", "Spring Boot", "Tailwind"],
//       link: "https://mindcare.fr",
//     },
//     {
//       id: 2,
//       title: "One Life - One Page",
//       description:
//         "Un site portfolio moderne et responsive, permettant de présenter ses projets de manière claire et esthétique.",
//       image: "/onelife.png",
//       tags: ["Next.js", "Tailwind", "TypeScript"],
//       link: "https://onelife.com",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-base-mid">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-text-primary mb-10">
//           Mes Projets
//         </h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {projects.map((p) => (
//             <div
//               key={p.id}
//               className="bg-base-light rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
//               onClick={() => setSelectedProject(p)}
//             >
//               <Image
//                 src={p.image}
//                 alt={p.title}
//                 width={600}
//                 height={400}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-2xl font-semibold text-text-primary">
//                   {p.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           {/* фон с размытием */}
//           <div
//             className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
//             onClick={() => setSelectedProject(null)}
//           ></div>

//           {/* сама карточка */}
//           <div className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8 z-10">
//             <button
//               onClick={() => setSelectedProject(null)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
//             >
//               ✕
//             </button>
//             <Image
//               src={selectedProject.image}
//               alt={selectedProject.title}
//               width={800}
//               height={500}
//               className="w-full h-64 object-cover rounded-lg mb-6"
//             />
//             <h3 className="text-3xl font-bold text-text-primary mb-4">
//               {selectedProject.title}
//             </h3>
//             <p className="text-text-secondary mb-4">
//               {selectedProject.description}
//             </p>
//             <div className="flex flex-wrap mb-6">
//               {selectedProject.tags.map((t: string) => (
//                 <span
//                   key={t}
//                   className="bg-base-light text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//             <a
//               href={selectedProject.link}
//               target="_blank"
//               className="inline-block bg-accent-blue hover:bg-accent-red text-white px-6 py-3 rounded-full shadow transition-colors"
//             >
//               Voir le site
//             </a>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
