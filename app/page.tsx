"use client";

import { useEffect, } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/header";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header />

      {/* Accueil */}
      <section id="accueil" className="pt-20 min-h-screen flex items-center bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col flex-row items-center">
          <div className="w-1/2 text-center text-left" data-aos="fade-right">
            <h1 className="text-6xl font-bold mb-4">Привет меня зовут Ринат!👋</h1>
            <p className="text-3xl text-gray-700">Я фронтенд-разработчик, который любит превращать идеи в удобные и красивые сайты.</p>
            <div className="flex my-6 flex-wrap">
                {[
                  "Front-end", "Dising", "Business analyst",
                ].map((t) => (
                  <span key={t} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                    {t}
                  </span>
                ))}
              </div>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition-colors"
            >
              Contactez-moi
            </a>
          </div>

          <div className="w-1/2 text-center mt-8 mt-0" data-aos="fade-left">
            <div className="w-40 h-40 w-96 h-96 rounded-full mx-auto mx-0 shadow-lg overflow-hidden">
              <Image
                src="/Rinat.png"
                alt="Photo"
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

     {/* À propos */}
<section id="apropos" className="py-16 bg-white" data-aos="fade-up">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-10 text-center">Обо мне</h2>

    <div className="grid md:grid-cols-2 gap-8 items-start">
      {/* Текст */}
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <p>
          Привет 👋 Я работаю с <strong>Angular</strong>, 
          <strong> React</strong>, <strong>Next.js</strong> и 
          <strong> TypeScript</strong>. За эстетику в проектах у меня отвечает 
          <strong> Tailwind CSS</strong>. Иногда заглядываю и в бэкенд — 
          <strong> Spring Boot</strong> или <strong>Node.js</strong>.
        </p>

        <p>
          Сейчас я учусь в <strong>Web@cademie d’Epitech (Франция)</strong> и 
          постоянно прокачиваюсь через разные проекты: от платформы для 
          поддержки психического здоровья <em>(MindCare)</em> до своего портфолио 
          <em>(One Life – One Page)</em> и даже RPG-игры.
        </p>

        <p>
          Мне нравится совмещать дизайн и код, искать решения через детали и 
          строить всё так, чтобы пользователю было максимально просто и приятно. 
          Помимо веба, увлекаюсь графикой в <strong>Photoshop</strong> и 
          <strong> Illustrator</strong>, люблю разбираться в логике процессов и 
          открывать новые направления.
        </p>

        <p>
          Для меня разработка — это не только код, но и возможность создавать 
          проекты, которые действительно работают для людей 🚀
        </p>
      </div>

      {/* Дополнительный блок — языки */}
      <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Языки</h3>
        <ul className="space-y-2 text-gray-700">
          <li>🇺🇦 Украинский, 🇷🇺 Русский (родные)</li>
          <li>🇫🇷 Французский — B1</li>
          <li>🇬🇧 Английский — B1</li>
          <li>🇵🇱 Польский — A1</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Compétences */}
      <section id="competences" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Compétences</h2>

          <div className="flex space-x-8">
            {/* Techniques */}
            <div className="w-1/2 mb-8 mb-0" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-4">Compétences techniques</h3>
              <div className="flex flex-wrap">
                {[
                  "HTML", "CSS", "JS", "PHP", "Angular", "Tailwind", "TypeScript", "Adobe Photoshop", "Adobe Illustrator",
                  "React", "NextJS", "Kotlin", "MySQL", "MongoDB", "GitHub", "Figma",
                ].map((t) => (
                  <span key={t} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Personnelles */}
            <div className="w-1/2" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-4">Compétences personnelles</h3>
              <div className="flex flex-wrap">
                {["Travail en groupe", "Autonomie", "Sociable", "Gestion du stress"].map((t) => (
                  <span key={t} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projets</h2>

          <div className="mb-8 p-6 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-2">Mobalpa E-commerce</h3>
            <p className="text-gray-800 mb-1">
              J&apos;ai participé au développement en équipe d&apos;une plateforme de commerce électronique pour
              Mobalpa à l&apos;aide d&apos;Angular, TypeScript et Tailwind CSS, en me concentrant sur le front-end et
              l&apos;intégration de l&apos;API.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Technologies&nbsp;:</strong> Angular, TypeScript, Tailwind-CSS, MySQL, MongoDB, Figma
            </p>
          </div>

          <Link href="https://amanogawa.space/" target="_blank" rel="noopener">
            <div
              className="mb-8 p-6 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-semibold mb-2">Amanogawa Website</h3>
              <p className="text-gray-800 mb-1">
                J&apos;ai participé au développement du site web <em>Amanogawa</em> à l&apos;aide de HTML, Tailwind CSS et
                JavaScript, en assurant une conception adaptative et des animations interactives pour une expérience
                utilisateur dynamique.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Technologies&nbsp;:</strong> HTML, Tailwind CSS, JavaScript
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Formation */}
      <section id="formation" className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Formation</h2>

          <EduCard
            years="2023-2025"
            title="Web@cadémie by Epitech"
            country="France"
            city="Marseille"
            level="Formation Développeur Web (en cours)"
            link="https://www.webacademie.org/"
          />

          <EduCard
            years="2022-2023"
            title="Lacordaire lycée"
            country="France"
            city="Marseille"
            level="lycée general"
            link="https://www.lacordaire.com/"
          />

          <EduCard
            years="2021-2023"
            title="Académie Municipale des Arts du Spectacle et du Cirque de Kiev"
            country="Ukraine"
            city="Kyiv"
            level="Spécialisation Magicien"
            link="https://www.fedec.eu/en/members/380-kmacpa-kyiv-municipal-academy-of-performing-and-circus-arts"
          />

          <EduCard
            years="2020-2021"
            title="IT STEP"
            country="Ukraine"
            city="Kyiv"
            level="Formation Webdesign"
            link="https://itstep.org/"
          />

          <EduCard
            years="2018-2020"
            title="Club Key"
            country="Ukraine"
            city="Kyiv"
            level="Formation Web-general"
            link="https://www.clubkey.com.ua/"
          />
        </div>
      </section>

      <ContactForm />

      {/* Contact */}
      <section id="contact" className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
          <div className="flex flex-col items-center space-y-2 text-gray-800">
            <p>
              <strong>Email&nbsp;:</strong>{" "}
              <a href="mailto:rinat.hirfanov@gmail.com" className="text-blue-600 hover:underline">
                rinat.hirfanov@gmail.com
              </a>
            </p>
            <p>
              <strong>Téléphone&nbsp;:</strong>{" "}
              <a href="tel:+33712345678" className="text-blue-600 hover:underline">
                +33 7 12 34 56 78
              </a>
            </p>
            <p>
              <strong>LinkedIn&nbsp;:</strong>{" "}
              <Link
                href="https://www.linkedin.com/in/rinat-hirfanov-400a3a2b4/"
                target="_blank"
                rel="noopener"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/rinat-hirfanov
              </Link>
            </p>
            <p>
              <strong>GitHub&nbsp;:</strong>{" "}
              <Link
                href="https://github.com/jyhgyh"
                target="_blank"
                rel="noopener"
                className="text-blue-600 hover:underline"
              >
                github.com/rinathirfanov
              </Link>
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-4">
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
  link,
}: {
  years: string;
  title: string;
  level: string;
  country: string;
  city: string;
  link: string;
}) {
  return (
    <Link href={link} target="_blank" rel="noopener">
      <div className="mb-8 p-6 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow" data-aos="fade-up">
        <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 inline-block">
          {years}
        </span>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-800 mb-1">
          <strong>{level}</strong>
        </p>
        <p className="text-gray-600 text-sm">
          <strong>{country}&nbsp;:</strong>
          {city}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Description&nbsp;:</strong>
        </p>
      </div>
    </Link>
  );
}