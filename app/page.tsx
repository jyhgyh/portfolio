"use client";

import { useEffect, } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/header";
import ContactForm from "./components/ContactForm";
import Accueil from "./components/accueil";
import ProjectsSection from "./components/proCard";
// import Projects from "./components/projects";

export default function HomePage() {
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header />

      {/* Accueil */}
      <Accueil />

      {/* À propos */}
      <section id="about" className="py-16 bg-base-light" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-text-primary mb-10 text-center">À propos de moi</h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Текст */}
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Je travaille avec <strong className="text-text-red">Angular</strong>,
                <strong className="text-text-red"> React</strong>, <strong className="text-text-red"> Next.js</strong> et
                <strong className="text-text-red"> TypeScript</strong>. Pour le style et l’esthétique, j’utilise surtout
                <strong className="text-text-red"> Tailwind CSS</strong> et <strong className="text-text-red"> CSS</strong>. Il m’arrive aussi de toucher un peu au back-end
                avec <strong className="text-text-red">Spring Boot</strong> ou <strong className="text-text-red">Node.js</strong>
                afin de mieux comprendre l’ensemble d’un projet.

                {/* Привет 👋 Я работаю с <strong className="text-text-red">Angular</strong>,
                <strong className="text-text-red"> React</strong>, <strong className="text-text-red">Next.js</strong> и
                <strong className="text-text-red"> TypeScript</strong>. За эстетику в проектах у меня отвечает
                <strong className="text-text-red"> Tailwind CSS</strong>. Иногда заглядываю и в бэкенд —
                <strong className="text-text-red"> Spring Boot</strong> или <strong className="text-text-red">Node.js</strong>. */}
              </p>

              <p>
                Actuellement, j’étudie à la <strong className="text-text-red"> Web@cademie</strong> et
                je progresse en permanence à travers différents projets :
                une plateforme de soutien en santé mentale <em>(MindCare)</em>,
                mon site portfolio <em>(One Life – One Page)</em> et même un jeu RPG.


                {/* Сейчас я учусь в <strong className="text-text-red">Web@cademie d’Epitech (Франция)</strong> и
                постоянно прокачиваюсь через разные проекты: от платформы для
                поддержки психического здоровья <em>(MindCare)</em> до своего портфолио
                <em>(One Life – One Page)</em> и даже RPG-игры. */}
              </p>

              <p>
                Ce qui me plaît le plus, c’est de combiner design et code,
                de soigner les détails et de construire des expériences simples
                et fluides pour l’utilisateur. En dehors du développement web,
                je pratique aussi le graphisme avec <strong className="text-text-red">Photoshop </strong>
                et <strong className="text-text-red">Illustrator</strong>, j’aime analyser la logique des processus
                et découvrir de nouveaux domaines.

                {/* Мне нравится совмещать дизайн и код, искать решения через детали и
                строить всё так, чтобы пользователю было максимально просто и приятно.
                Помимо веба, увлекаюсь графикой в <strong className="text-text-red">Photoshop</strong> и
                <strong className="text-text-red"> Illustrator</strong>, люблю разбираться в логике процессов и
                открывать новые направления. */}
              </p>

              <p>
                Pour moi, le développement, ce n’est pas seulement du code — c’est
                surtout l’occasion de créer des projets utiles aux gens. 🚀

                {/* Для меня разработка — это не только код, но и возможность создавать
                проекты, которые действительно работают для людей 🚀 */}
              </p>
            </div>

            {/* Дополнительный блок — языки */}
            <div className="space-y-3">
              <AboutCard
                title="Langues"
                skills={["🇺🇦 Ukrainien, 🇷🇺 Russie (natif)", "🇫🇷 Français — B1", "🇬🇧 Anglais — B1", "🇵🇱 Polonais — A1"]}
              />
              <AboutCard
                title="Qualités personnelles"
                skills={["🤝 Travail en équipe", "🎯 Le souci du détail", "🙂 Sociabilité", "💪 Gestion du stress"]}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="competences" className="py-16 bg-base">
        <div className="container  mx-auto px-4">
          <h2 className="text-3xl text-text-primary font-bold mb-10 text-center">Compétences</h2>

          <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
            {/* Frontend */}
            <SkillCard
              title="Frontend"
              skills={["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "React", "Next.js", "Tailwind"]}
            />

            {/* Backend & DB */}
            <SkillCard
              title="Backend & Bases de données"
              skills={["PHP", "MySQL", "MongoDB", "Kotlin"]}
            />

            {/* Outils & Design */}
            <SkillCard
              title="Outils & Design"
              skills={["Adobe Photoshop", "Adobe Illustrator", "Figma", "Git", "Magie"]}
            />
          </div>
        </div>
      </section>

      <ProjectsSection />
      {/* <Projects /> */}


      <section id="formation" className="py-16 bg-base" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-text-primary font-bold mb-8 text-center">
            Une formation qui m’a façonné
          </h2>

          <EduCard
            years="2023-2025"
            title="Web@cadémie by Epitech"
            country="France"
            city="Marseille"
            level="Développeur Web (en cours)"
            description='Epitech a été ma deuxième étape en France.
            Après le lycée Lacordaire, je me sentais déjà plus à l’aise. Même si je restais un peu timide avec mon français, j’ai rapidement fait connaissance avec mes camarades, qui ont tous fait preuve de compréhension face à ma situation.
            Le début n’a pas été simple : je n’avais jamais étudié la programmation, et on nous demandait déjà de résoudre des problèmes techniques. Mais cette expérience m’a appris à chercher, analyser l’information et, surtout, à ne pas avoir peur de la nouveauté.
            En franchissant ce premier cap, j’ai réussi — non sans difficultés — à progresser en français jusqu’à pouvoir communiquer à l’oral avec confiance, tout en découvrant de nombreuses technologies que j’utilise aujourd’hui dans mes projets.'
            link="https://www.webacademie.org/"
          />

          <EduCard
            years="2022-2023"
            title="Lacordaire lycée"
            country="France"
            city="Marseille"
            level="lycée general"
            description='Lacordaire a été ma première étape en France.
            C’est ici que j’ai découvert la culture française, sa langue et ses habitants. Pour moi, ce fut l’un des défis les plus difficiles : je devais apprendre la langue depuis zéro.
            Au début, je communiquais uniquement en anglais, mais grâce aux efforts partagés avec mes camarades et mes professeurs, j’ai commencé à comprendre… puis à parler moi-même.
            Même si j’étais encore réservé, j’ai vite trouvé ma place dans le groupe : nos cultures étaient proches, et mon intégration s’est faite naturellement.'
            link="https://www.lacordaire.com/"
          />

          <EduCard
            years="2021-2023"
            title="Académie Municipale des Arts du Spectacle et du Cirque de Kiev"
            country="Ukraine"
            city="Kyiv"
            level="Spécialisation Magicien"
            description='Et nous voilà à mon véritable point de départ en France.
            À l’académie de cirque, j’ai étudié l’art de surprendre — la magie. Après une première expérience en web design, j’étais heureux de découvrir un domaine totalement différent.
            Mais cette parenthèse n’a pas duré longtemps : l’invasion de mon pays, l’Ukraine, m’a obligé à changer de cap. Mon université m’a proposé de rejoindre la France dans de bonnes conditions, et j’ai continué mes études à distance.
            En parallèle, pendant mes années à Lacordaire, je poursuivais encore la magie en deuxième année. Mais à la fin, j’ai dû faire un choix : continuer comme illusionniste ou intégrer Epitech. Comme vous le savez déjà, j’ai choisi la seconde voie'
            link="https://www.fedec.eu/en/members/380-kmacpa-kyiv-municipal-academy-of-performing-and-circus-arts"
          />

          <EduCard
            years="2020-2021"
            title="IT STEP"
            country="Ukraine"
            city="Kyiv"
            level="Webdesign"
            description='IT STEP m’a donné un premier aperçu concret du monde de l’informatique.
            J’y étudiais le web design. Mais dès la fin de la première année, j’ai compris que ce n’était pas ce que je voulais faire toute ma vie.
            Nous explorions la théorie du design, l’histoire de l’art, la peinture, et nous créions nos propres maquettes. Tout cela était intéressant, mais il me manquait une véritable passion.
            Néanmoins, ce bagage reste aujourd’hui un atout précieux : mes compétences en design m’accompagnent dans chacun de mes projets.'
            link="https://itstep.org/"
          />

          <EduCard
            years="2018-2020"
            title="Club Key"
            country="Ukraine"
            city="Kyiv"
            level="Web-general"
            description='Le Club Key a marqué pour moi le tout début de l’informatique.
            Nous découvrions différents logiciels : Photoshop, Illustrator, After Effects, Figma, 3ds Max, Maya et Cinema 4D.
            Chaque module durait environ trois mois et nous présentait à la fois les outils et les métiers où ils pouvaient être utilisés.
            C’était une expérience passionnante, que je pouvais combiner avec l’école et mes autres passions.'
            link="https://www.clubkey.com.ua/"
          />
        </div>
      </section>

      <ContactForm />

      {/* Contact */}
      <section className="py-16 bg-base" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-text-primary">Contact</h2>

          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 text-center text-gray-800">
            <div className="space-y-2">
              <p>
                <strong>Email&nbsp;:</strong>{" "}
                <a href="mailto:rinat.hirfanov@gmail.com" className="text-blue-600 hover:underline">
                  rinat.hirfanov@gmail.com
                </a>
              </p>
              <p>
                <strong>Téléphone&nbsp;:</strong>{" "}
                <a href="tel:+33749483876" className="text-blue-600 hover:underline">
                  +33 7 49 48 38 76
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <strong>LinkedIn&nbsp;:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/rinat-hirfanov-400a3a2b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  linkedin.com/in/rinat-hirfanov
                </a>
              </p>
              <p>
                <strong>GitHub&nbsp;:</strong>{" "}
                <a
                  href="https://github.com/jyhgyh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  github.com/rinathirfanov
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-base-dark py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">&copy; 2025 Rinat Hirfanov. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}

function EduCard({
  years,
  title,
  level,
  country,
  city,
  description,
  link,
}: {
  years: string;
  title: string;
  level: string;
  country: string;
  city: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link} target="_blank" rel="noopener">
      <div className="mb-8 p-6 bg-base-card rounded-lg hover:shadow-lg transition-shadow" data-aos="fade-up">
        <span className="bg-base-light text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 inline-block">
          {years}
        </span>
        <span className="bg-base-light text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 inline-block">
          <strong className="text-text-red">{country}&nbsp;:</strong>{city}
        </span>
        <span className="bg-base-light text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 inline-block">
          {level}
        </span>
        <h3 className="text-2xl text-text-primary font-semibold mb-2">{title}</h3>
        <p className="text-gray-800 mb-1">

        </p>
        <p className="text-gray-600 text-text-secondary text-sm">
          <strong>Description&nbsp;:{description}</strong>
        </p>
      </div>
    </Link>
  );
}

function SkillCard({
  title,
  skills,
}: {
  title: string
  skills: string[]
}) {
  return (
    <div className="bg-base-card rounded-2xl shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-4 text-text-primary">{title}</h3>
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-base-light text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function AboutCard({
  title,
  skills,
}: {
  title: string
  skills: string[]
}) {
  return (
    <div className="bg-base-card-light rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl text-text-primary font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-text-secondary">
        {skills.map((skill) => (
          <li key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}