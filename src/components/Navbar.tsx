import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scrollHelper';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Dla kogo", href: "#dla-kogo" },
    { label: "O warsztacie", href: "#o-warsztacie" },
    { label: "Metoda", href: "#metoda" },
    { label: "O mnie", href: "#o-mnie" },
    { label: "Inwestycja", href: "#inwestycja" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      scrollToSection(targetId);
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F5E5D6]/95 backdrop-blur-md border-b border-[#9C1B33]/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Lewa strona: Krótki wordmark "KWANTOWY SKOK" */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#9C1B33] flex items-center gap-1.5 hover:opacity-90 transition-opacity shrink-0 whitespace-nowrap"
        >
          <span>KWANTOWY SKOK</span>
          <span className="text-xs font-normal text-[#9C1B33]">♡</span>
        </a>

        {/* Środek: Zwięzłe 1-2 słowne odnośniki w jednej linii */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-[11px] font-semibold tracking-wider uppercase text-[#2A3331]/80">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#9C1B33] transition-colors whitespace-nowrap py-1 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Prawa strona: Przycisk akcji CTA */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            onClick={onJoinClick}
            className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#F5E5D6] bg-[#9C1B33] rounded-full hover:bg-[#831429] shadow-xs hover:shadow transition-all duration-200 active:scale-95 whitespace-nowrap"
          >
            Dołącz do warsztatu
          </button>
        </div>

        {/* Przycisk menu mobilnego */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onJoinClick}
            className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#F5E5D6] bg-[#9C1B33] rounded-full hover:bg-[#831429] whitespace-nowrap"
          >
            Dołącz
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#9C1B33] hover:bg-[#ebd9c7] transition-colors"
            aria-label="Otwórz menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Rozwijane menu mobilne jako nakładka (nie przesuwa wysokości nagłówka ani strony) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 w-full bg-[#F5E5D6] border-b border-[#9C1B33]/15 px-6 py-4 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200 z-50">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-xs font-semibold uppercase tracking-wider text-[#2A3331] hover:text-[#9C1B33] py-2 border-b border-[#9C1B33]/10 last:border-0 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
