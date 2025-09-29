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
            <h1 className="text-6xl text-yellow-300 font-bold mb-4">Salut Je suis Rinat!👋</h1>
            <p className="text-3xl text-gray-700">Je suis développeur front-end et j’adore transformer des idées en sites web beaux, simples et agréables à utiliser.</p>
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
          <h2 className="text-3xl font-bold mb-10 text-center">À propos de moi</h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Текст */}
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <p>
                Je travaille avec <strong>Angular</strong>,
                <strong>React</strong>, <strong>Next.js</strong> et 
                <strong>TypeScript</strong>. Pour le style et l’esthétique, j’utilise surtout
                <strong>Tailwind CSS</strong> et <strong>CSS</strong>. Il m’arrive aussi de toucher un peu au back-end
                avec <strong>Spring Boot</strong> ou <strong>Node.js</strong> 
                afin de mieux comprendre l’ensemble d’un projet.

                {/* Привет 👋 Я работаю с <strong>Angular</strong>,
                <strong> React</strong>, <strong>Next.js</strong> и
                <strong> TypeScript</strong>. За эстетику в проектах у меня отвечает
                <strong> Tailwind CSS</strong>. Иногда заглядываю и в бэкенд —
                <strong> Spring Boot</strong> или <strong>Node.js</strong>. */}
              </p>

              <p>
                  Actuellement, j’étudie à la <strong>Web@cademie</strong> et
                  je progresse en permanence à travers différents projets :
                  une plateforme de soutien en santé mentale <em>(MindCare)</em>,
                  mon site portfolio <em>(One Life – One Page)</em> et même un jeu RPG.


                {/* Сейчас я учусь в <strong>Web@cademie d’Epitech (Франция)</strong> и
                постоянно прокачиваюсь через разные проекты: от платформы для
                поддержки психического здоровья <em>(MindCare)</em> до своего портфолио
                <em>(One Life – One Page)</em> и даже RPG-игры. */}
              </p>

              <p>
                Ce qui me plaît le plus, c’est de combiner design et code,
                de soigner les détails et de construire des expériences simples
                et fluides pour l’utilisateur. En dehors du développement web,
                je pratique aussi le graphisme avec <strong>Photoshop</strong> et
                <strong>Illustrator</strong>, j’aime analyser la logique des processus
                et découvrir de nouveaux domaines.
                
                {/* Мне нравится совмещать дизайн и код, искать решения через детали и
                строить всё так, чтобы пользователю было максимально просто и приятно.
                Помимо веба, увлекаюсь графикой в <strong>Photoshop</strong> и
                <strong> Illustrator</strong>, люблю разбираться в логике процессов и
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
              title="Языки"
              skills={["🇺🇦 Украинский, 🇷🇺 Русский (родные)", "🇫🇷 Французский — B1", "🇬🇧 Английский — B1", "🇵🇱 Польский — A1"]}
              />  
              <AboutCard
              title="Личные качества"
              skills={["🤝 Работа в команде", "🎯 Внимание к мелочам", "🙂 Коммуникабельность", "💪 Умение справляться со стрессом"]}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="competences" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Compétences</h2>

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

      {/* Projets */}
      <section id="projets" className="py-16 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Проекты, в которые вложил часть себя</h2>
        <div className="container grid md:grid-cols-2 mx-auto px-4">

          <ProCard
            years="2024"
            title="Mobalpa E-commerce"
            description=" J&apos;ai participé au développement en équipe d&apos;une plateforme de commerce électronique pour
              Mobalpa à l&apos;aide d&apos;Angular, TypeScript et Tailwind CSS, en me concentrant sur le front-end et
              l&apos;intégration de l&apos;API."
            technologies="Angular, TypeScript, Tailwind-CSS, MySQL, MongoDB, Figma"
            link="https://github.com/twnguydev/mobalpa"
          />

          <ProCard
            years="2024-2025"
            title="Amonogawa"
            description="J&apos;ai participé au développement du site web <em>Amanogawa</em> à l&apos;aide de HTML, Tailwind CSS et
                JavaScript, en assurant une conception adaptative et des animations interactives pour une expérience
                utilisateur dynamique."
            technologies="HTML, Tailwind CSS, JavaScript"
            link="https://amanogawa.space/"
          />
        </div>
      </section>

      {/* Formation */}
      <section id="formation" className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-1/2 mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Учёба, которая меня сформировала</h2>

          <EduCard
            years="2023-2025"
            title="Web@cadémie by Epitech"
            country="France"
            city="Marseille"
            level="Développeur Web (en cours)"
            description='Epitech стал моей второй отановкой во Франции.
            Здесть я уже чуствовал себя уверенее после лицея Лакордер.
            Все еще стесняясь своего французского я быстро познакомился с ребятами рядом со мной,
            все они отнеслись с пониманием к моей ситуации.
            Для меня было достаточно сложно в начале понимать что и как правильно делать, так как я никогда не изучал програмирование,
            а задания требовали сразу решать техническии задачи. Но этот опыт научил меня искать и анализироват иформацию,
            а так жене бояться нового.
            Пройдя первый этап я смог не без трудностей но уверенно подтянуть свой язык,
            до увереного устного общения и изучить много интересных технологий который сейчас использую для работы.'
            link="https://www.webacademie.org/"
          />

          <EduCard
            years="2022-2023"
            title="Lacordaire lycée"
            country="France"
            city="Marseille"
            level="lycée general"
            description='Лакордер стал первой моей остановкой во Франции.
            Именно тут я начал свое занкомство с Францие, ее культурой, языком и людьми.
            Для меня это было одно из самых сложгных испытаний, так как мне надо было учить язык с нуля.
            Сначала я говорил только на английском, но общими стараниями я смог начать понимать ребят и учителей,
            а потом и сам заговорил.
            Все еще стенсяясь говорить на французском я быстро влился в колектив,
            так как наши культуры оказались достаточно близки, так что проблем с интеграцией у меня не возникло.'
            link="https://www.lacordaire.com/"
          />

          <EduCard
            years="2021-2023"
            title="Académie Municipale des Arts du Spectacle et du Cirque de Kiev"
            country="Ukraine"
            city="Kyiv"
            level="Spécialisation Magicien"
            description='Вот мы добрались до моей отправной точки во Францию.
            В цирковой аккадемии я изучал магию, если быть точным искуство удивлять.
            Выбрав цирк после веб дизайна, я был рад начать изучать что-то новое, но не долго мне удалось проучиться там нормально,
            так как началось вторжение Росии в мою страну, Украину.
            Мой университет предложил мне выехать во Францию, организовав для нас комфортные условия.
            Я продолжал учиться удаленно и закончив первый курс
            мне пришлось думать что делать дальше, учась в Лакордере я паралельно продолжал учиться магии на втором курсе.
            Но закончив учебу в Лакордере мне пришлось выберать оставаться фокусником или поступать в Epitech
            и как вы уже занее, я выбрал второй вариант.'
            link="https://www.fedec.eu/en/members/380-kmacpa-kyiv-municipal-academy-of-performing-and-circus-arts"
          />

          <EduCard
            years="2020-2021"
            title="IT STEP"
            country="Ukraine"
            city="Kyiv"
            level="Webdesign"
            description='IT STEP дал мне понимание что такое работа в IT сфере.
            Я учился на веб дизайнера, но после первого курса я понял что это не то чем я хочу заниматься.
            Учеба была интересная, но меня она не вовлекала. Мы изучали теорию дизайна, создавали свои дизайны,
            изучали работы вебдизайнеров, искуство и его историю и живопоись. Мне все это было интересно,
            но я понимал что это не то чем я хочу заниматься всю свою жизнь. Но как назвык очень полезен
            в моей нынешней работе и я им постоянно пользуюсь'
            link="https://itstep.org/"
          />

          <EduCard
            years="2018-2020"
            title="Club Key"
            country="Ukraine"
            city="Kyiv"
            level="Web-general"
            description='Club Key стал для меня отправной точкой в IT.
            Мы узучали разные програмы Photoshop, Illustrator, Афтерэфектс, Figma, 3дМакс, Мая и Синема 4д.
            Каждый курс длился по 3 месяца и ознакамливал с возможностями этих програм
            и професиеями в которых они могут и пользоваться.
            Это был интересный опыт который я мог совмещать со шклой и другими хобби.'
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
      <div className="mb-8 p-6 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow" data-aos="fade-up">
        <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 inline-block">
          {years}
        </span>
        <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 inline-block">
          <strong>{country}&nbsp;:</strong>{city}
        </span>
        <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 inline-block">
          {level}
        </span>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-800 mb-1">

        </p>
        <p className="text-gray-600 text-sm">
          <strong>Description&nbsp;:{description}</strong>
        </p>
      </div>
    </Link>
  );
}

function ProCard({
  title,
  years,
  description,
  technologies,
  link
}: {
  title: string
  years: string
  description: string
  technologies: string
  link: string
}) {
  return (
    <Link href={link} target="_blank" rel="noopener">
      <div
        className="mb-8 p-6 bg-gray-100 m-2 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-800 mb-1">
          {description}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Technologies&nbsp;:</strong> {technologies}
        </p>
      </div>
    </Link>
  )
}

function SkillCard({
  title,
  skills,
}: {
  title: string
  skills: string[]
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
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
    <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-700">
        {skills.map((skill)  => (
          <li key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}