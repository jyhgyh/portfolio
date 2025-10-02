import { useState } from "react";
import { Menu, X } from "lucide-react"; // иконки (lucide-react)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white/30 backdrop-blur-sm fixed w-full top-0 z-50 shadow">
      <nav
        className="container mx-auto px-4 py-4 flex justify-between items-center"
        role="navigation"
        aria-label="Primary"
      >
        {/* Логотип */}
        <div className="text-2xl text-text-pink font-bold">
          <a href="#accueil">Rinat Hirfanov</a>
        </div>

        {/* Десктопное меню */}
        <ul className="hidden md:flex text-text-pink items-center space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-4 py-2 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href=""
              className="ml-2 text-text-red hover:text-blue-600 transition-colors"
            >
              CV
            </a>
          </li>
        </ul>

        {/* Кнопка-бургер (только на мобилках) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-pink focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-2 text-text-pink">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="./CV_Rinat_Hirfanov.pdf"
                download="Rinat_Hirfanov_CV.pdf"
                className="ml-2 text-text-red hover:text-blue-600 transition-colors"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
