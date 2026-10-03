import React from 'react';
import { Users, Video, Calendar, Infinity as InfinityIcon, Sparkles, Heart } from 'lucide-react';

interface OfferSectionProps {
  onSelectPlan: (plan: string) => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onSelectPlan }) => {
  const details = [
    {
      icon: Users,
      title: "Grupa na Facebooku",
      desc: "Bezpieczna, dedykowana przestrzeń kobiecej wymiany, pytań i wzajemnego wsparcia.",
    },
    {
      icon: Video,
      title: "5 spotkań na żywo",
      desc: "Głębokie, transformacyjne sesje on-line prowadzone w czasie rzeczywistym.",
    },
    {
      icon: Calendar,
      title: "Czwartki i wtorki 15, 20, 22, 27, 29.10 g. 19-21.30.",
      desc: "Harmonogram 5 intensywnych spotkań warsztatowych.",
    },
    {
      icon: InfinityIcon,
      title: "Bezterminowy dostęp. Oglądasz kiedy chcesz.",
      desc: "Nagrania wideo i wszystkie materiały warsztatowe zostają z Tobą na zawsze.",
    },
  ];

  return (
    <section 
      id="oferta" 
      className="bg-[#F5E5D6] py-24 sm:py-32 px-6 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Nagłówek sekcji oferty */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#9C1B33] mb-4">
            Zapraszam Cię na 3-tygodniowy warsztat on-line na żywo
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#9C1B33] font-semibold tracking-tight mb-3">
            Trening Bezwarunkowego Szczęścia
          </h2>

          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2A3331] tracking-tight mb-6">
            KWANTOWY SKOK
            <span className="block font-serif text-2xl sm:text-3xl md:text-4xl font-normal italic text-[#2A3331] mt-2">
              w Twoje Nowe Życie
            </span>
          </h3>

          {/* Cytat / Motto */}
          <div className="inline-block relative px-8 py-3 my-2">
            <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#9C1B33] font-medium tracking-tight">
              „Jestem szczęśliwa, bo Jestem!”
            </span>
            <div className="flex items-center justify-center gap-3 mt-3 text-[#9C1B33]">
              <span className="w-12 h-px bg-[#9C1B33]/40" />
              <Heart className="w-4 h-4 fill-[#9C1B33] text-[#9C1B33]" />
              <span className="w-12 h-px bg-[#9C1B33]/40" />
            </div>
          </div>
        </div>

        {/* Jedna scalona sekcja listy z eleganckimi ikonami */}
        <div className="bg-[#ebd9c7]/60 rounded-3xl p-8 sm:p-12 border border-[#9C1B33]/20 shadow-xs divide-y divide-[#9C1B33]/15 mb-16 sm:mb-20">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={`flex items-start gap-5 sm:gap-6 ${
                  index === 0 
                    ? 'pb-6 sm:pb-8' 
                    : index === details.length - 1 
                    ? 'pt-6 sm:pt-8' 
                    : 'py-6 sm:py-8'
                }`}
              >
                {/* Ikona w stylu butikowym */}
                <div className="w-12 h-12 rounded-2xl bg-[#F6B7C3]/60 text-[#9C1B33] flex items-center justify-center border border-[#9C1B33]/20 shrink-0 mt-0.5 shadow-2xs">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2A3331] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#2A2A2A]/80 leading-relaxed font-sans font-normal mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bordowy box na samym dole z bonusem specjalnym */}
        <div className="w-full bg-[#9C1B33] text-[#F5E5D6] p-8 sm:p-12 rounded-3xl shadow-xl shadow-[#9C1B33]/20 text-center relative overflow-hidden">
          {/* Świetlisty akcent */}
          <div 
            className="absolute top-0 right-0 w-64 h-64 bg-[#F5E5D6]/15 rounded-full blur-2xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5E5D6]/20 text-[#F5E5D6] text-xs uppercase tracking-widest font-semibold mb-6 border border-[#F5E5D6]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Oferta limitowana</span>
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5E5D6] tracking-tight mb-4 text-balance">
              TYLKO TERAZ BONUS SPECJALNY
            </h4>

            <p className="font-serif text-xl sm:text-2xl text-[#F5E5D6]/90 leading-relaxed font-normal mb-8 text-pretty">
              Diagnoza Twojej Aury<br className="hidden sm:inline" /> i&nbsp;Czakr, którą sporządzę osobiście.
            </p>

            <button
              onClick={() => onSelectPlan("Warsztat z Bonusem Specjalnym")}
              className="px-8 py-4 rounded-full bg-[#F5E5D6] text-[#9C1B33] font-bold text-sm uppercase tracking-wider hover:bg-[#ebd9c7] shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 inline-flex items-center gap-3"
            >
              <span>Zarezerwuj miejsce z Bonusem</span>
              <Sparkles className="w-4 h-4 text-[#9C1B33] shrink-0" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
