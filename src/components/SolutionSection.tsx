import React from 'react';
import { ArrowDown } from 'lucide-react';
import magda2Img from './magda2.png';

interface SolutionSectionProps {
  onExploreOfferClick: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onExploreOfferClick }) => {
  return (
    <section 
      id="o-warsztacie" 
      className="bg-[#F6B7C3] py-20 sm:py-28 px-6 md:px-12 border-y border-[#9C1B33]/15 relative overflow-hidden scroll-mt-16"
    >
      {/* Delikatna poświata w kolorze #F5E5D6 */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#F5E5D6]/25 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* KOLUMNA TEKSTOWA: Na mobile pod zdjęciem (order-last), na desktopie po lewej (lg:order-first) */}
          <div className="lg:col-span-7 text-center lg:text-left order-last lg:order-first">
            {/* Nagłówek szeryfowy - zmniejszony font, 3 linie */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-bold text-[#9C1B33] uppercase leading-tight tracking-tight mb-8 sm:mb-10">
              <span className="block">OTWÓRZ SIĘ NA</span>
              <span className="block">SZCZĘŚCIE BEZWARUNKOWE.</span>
              <span className="block">WSZYSTKO INNE ZOSTANIE CI DANE.</span>
            </h2>

            {/* Teksty akapitowe */}
            <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-[#2A2A2A] font-sans font-light">
              <p>
                Możesz zrealizować każdy cel. Możesz wyjść z każdej opresji. Ale jest jeden warunek - najpierw wejdź w wibrację bezwarunkowego szczęścia. Wtedy manifestujesz z Pełni, a nie z braku.
              </p>

              <p className="font-normal text-[#2A3331]">
                Nie uzależniaj Twojego szczęścia od sytuacji życiowej, partnera, czy zdrowia. Bądź szczęśliwa już Teraz.
              </p>
            </div>

            {/* Wyróżnione na bordowo pytanie i przycisk */}
            <div className="mt-10 sm:mt-12 pt-8 border-t border-[#9C1B33]/20">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#9C1B33] tracking-tight">
                Chcesz tego doświadczyć?
              </p>

              <div className="mt-6 flex justify-center lg:justify-start">
                <button
                  onClick={onExploreOfferClick}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#9C1B33] text-[#F5E5D6] font-medium text-sm tracking-wider uppercase hover:bg-[#831429] shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
                >
                  <span>Zobacz szczegóły warsztatu</span>
                  <ArrowDown className="w-4 h-4 animate-bounce text-[#F5E5D6] shrink-0" />
                </button>
              </div>
            </div>
          </div>

          {/* KOLUMNA ZE ZDJĘCIEM: Na mobile na górze (order-first), na desktopie po prawej (lg:order-last) */}
          <div className="lg:col-span-5 flex justify-center items-center order-first lg:order-last">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none flex justify-center aspect-square">
              <img 
                src={magda2Img} 
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
