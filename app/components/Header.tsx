// components/Header.tsx
"use client";

import "../globals.css";

export default function Header() {

  const navItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À propos" },
    { href: "#competences", label: "Compétences" },
    { href: "#projets", label: "Projets" },
    { href: "#formation", label: "Formation" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white fixed w-full top-0 z-50 shadow">
      <nav
        className="container mx-auto px-4 py-4 flex justify-between items-center"
        role="navigation"
        aria-label="Primary"
      >
        <div className="text-2xl font-bold">
          <a href="#accueil">Rinat Hirfanov</a>
        </div>

        <ul
          id="nav-menu"
          className={`flex flex items-center space-x-6 absolute static bg-white bg-transparent w-full left-0 top-full text-center text-left`}
        >
          {navItems.map((item) => (
            <li key={item.href} className="my-2 my-0">
              <a
                href={item.href}
                // onClick={closeMenu}
                className="block px-4 py-2 hover:text-blue-600 transition-colors"
              >
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
