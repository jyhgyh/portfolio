"use client";

import Image from "next/image";
import { useState } from "react";

export default function Accueil() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="accueil" className="pt-20 min-h-screen flex items-center bg-base-mid">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Левая часть */}
        <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-6xl font-medium text-text-primary mb-4">
            Salut Je m&apos;appelle Rinat!👋
          </h1>
          <p className="text-3xl text-text-secondary">
            Je suis développeur Full-stack et j’adore transformer des idées en sites web beaux,
            simples et agréables à utiliser.
          </p>
          <div className="flex my-6 flex-wrap justify-center md:justify-start">
            {["Full-stack", "Dising", "Business analyst"].map((t) => (
              <span
                key={t}
                className="bg-base-light text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-block bg-accent-blue hover:bg-accent-red text-white px-6 py-3 rounded-full shadow transition-colors"
          >
            Contactez-moi
          </a>
        </div>

        {/* Правая часть с анимацией переворота */}
        <div
          className="w-full md:w-1/2 text-center mt-8 md:mt-0 md:mb-0 mb-8"
          data-aos="fade-left"
        >
          <div
            className="
      w-48 h-48
      sm:w-64 sm:h-64
      md:w-96 md:h-96
      rounded-full mx-auto perspective cursor-pointer
    "
            onClick={() => setFlipped(!flipped)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 preserve-3d ${flipped ? "rotate-y-180" : ""
                }`}
            >
              {/* Передняя сторона */}
              <div className="absolute inset-0 backface-hidden">
                <Image
                  src="/I/Rinat.png"
                  alt="Photo front"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>

              {/* Задняя сторона */}
              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <Image
                  src="/I/Rinat1.png"
                  alt="Photo back"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
