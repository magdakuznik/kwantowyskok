import React from 'react';
import { ArrowRight } from 'lucide-react';
import magda3Img from './magda3.png';

interface FinalCtaSectionProps {
  onJoinClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onJoinClick }) => {
  const learningPoints = [
    "oczyszczać Twoją przestrzeń energetyczną",
    "uwalniać negatywne przekonania",
    "wchodzić w stan głębokiej medytacji i uzyskiwać stan fal mózgowych Gamma",
    "programować Twoją podświadomość na realizację Twoich celów",
  ];

  return (
    <section 
      id="finalne-cta" 
      className="bg-[#F5E5D6] py-20 sm:py-28 px-6 md:px-12 border-t border-[#9C1B33]/15 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* KOLUMNA TEKSTOWA: Na mobile pod zdjęciem (order-last), na desktopie po lewej (lg:order-first) */}
          <div className="lg:col-span-7 text-center lg:text-left order-last lg:order-first">
            {/* Nagłówek szeryfowy */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#9C1B33] mb-10 sm:mb-12 tracking-tight text-balance uppercase">
              DZIĘKI TEMU WARSZTATOWI NAUCZYSZ SIĘ:
            </h2>

            {/* Scalona sekcja listy */}
            <div className="bg-[#ebd9c7]/60 rounded-3xl p-6 sm:p-10 border border-[#9C1B33]/20 shadow-xs divide-y divide-[#9C1B33]/15 mb-10 text-left">
              {learningPoints.map((point, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 sm:gap-5 ${
                    index === 0 
                      ? 'pb-4 sm:pb-5' 
                      : index === learningPoints.length - 1 
                      ? 'pt-4 sm:pt-5' 
                      : 'py-4 sm:py-5'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-[#9C1B33] shrink-0 mt-1 flex items-center justify-center shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5E5D6]" />
                  </div>
                  <p className="font-sans text-base sm:text-lg text-[#2A2A2A] leading-relaxed font-normal">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Wezwanie do działania */}
            <div className="space-y-3 mb-8">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2A3331] tracking-tight">
                Dołącz do Nas!
              </h3>
              <p className="font-serif italic text-xl sm:text-2xl text-[#9C1B33] font-medium">
                Otwórz się na Twoje nowe życie.
              </p>
            </div>

            {/* Przycisk: Dołączam */}
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={onJoinClick}
                className="inline-flex items-center gap-3 px-10 py-4.5 rounded-full bg-[#9C1B33] text-[#F5E5D6] font-bold text-sm uppercase tracking-wider hover:bg-[#831429] shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
              >
                <span>Dołączam</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>

          {/* KOLUMNA ZE ZDJĘCIEM: Na mobile na górze (order-first), na desktopie po prawej (lg:order-last) */}
          <div className="lg:col-span-5 flex justify-center items-center order-first lg:order-last">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none flex justify-center aspect-square">
              <img 
                src={magda3Img} 
                alt="Magdalena Anna Kuźnik" 
                className="w-full h-full object-contain drop-shadow-2xl"
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
