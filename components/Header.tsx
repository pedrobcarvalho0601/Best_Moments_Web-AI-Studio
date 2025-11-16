
import React, { useState } from 'react';
import type { Section } from '../App';

interface HeaderProps {
    activeSection: Section;
    setActiveSection: (section: Section) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { key: Section; label: string }[] = [
    { key: 'home', label: 'Início' },
    { key: 'sobre', label: 'Sobre Nós' },
    { key: 'atividades', label: 'Atividades' },
    { key: 'testemunhos', label: 'Testemunhos' },
    { key: 'galeria', label: 'Galeria' },
    { key: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (section: Section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => handleNavClick('home')} className="text-2xl font-bold text-sky-700 hover:text-sky-600 transition-colors duration-300">
          Best Moments
        </button>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNavClick(link.key)}
              className={`pb-1 border-b-2 transition-colors duration-300 ${
                activeSection === link.key
                  ? 'text-sky-600 border-sky-600'
                  : 'text-slate-600 border-transparent hover:text-sky-600'
              }`}
              aria-current={activeSection === link.key ? 'page' : undefined}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.key)}
                className={`text-slate-600 hover:text-sky-600 transition-colors duration-300 ${
                  activeSection === link.key ? 'font-bold text-sky-600' : ''
                }`}
                aria-current={activeSection === link.key ? 'page' : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
