import React from 'react';
import { Sparkles } from 'lucide-react';
import heroMagdaImg from './hero-magda.png';

interface HeroSectionProps {
  onJoinClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onJoinClick }) => {
  return (
    <section 
      id="hero" 
      className="relative bg-[#F6B7C3] pt-10 pb-20 sm:pt-14 sm:pb-28 px-6 md:px-12 overflow-hidden border-b border-[#9C1B33]/15 scroll-mt-16"
    >
      {/* Delikatna poświata w tle */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] sm:h-[600px] rounded-full bg-[#F5E5D6]/30 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* ZDJĘCIE HERO: hero-magda wyśrodkowane na górze */}
        <div className="w-full flex justify-center items-center">
          <div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[580px] lg:max-w-[640px] aspect-square flex justify-center">
            <img 
              src={heroMagdaImg} 
              alt="Magdalena Anna Kuźnik - Kwantowy Skok" 
              className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-300"
              width={1000}
              height={1000}
              fetchPriority="high"
            />
          </div>
        </div>

        {/* SENTENCJA KURSYWĄ */}
        <div className="max-w-4xl mx-auto text-center space-y-5 px-4 mt-8 sm:mt-12">
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-relaxed sm:leading-snug md:leading-normal text-[#2A3331] font-normal tracking-tight text-balance">
            „Wszystko jest Energią. Wskocz ze mną w wibrację Bezwarunkowego Szczęścia, a Wszechświat dopasuje się do Ciebie.”
          </p>

          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-[#9C1B33] tracking-tight pt-2 text-balance">
            Doświadcz Kwantowego Skoku do Twojego Nowego Życia.
          </p>

          {/* Elegancka linia z serduszkiem — ♡ — */}
          <div className="flex items-center justify-center gap-3 pt-3 pb-1 w-44 mx-auto text-[#9C1B33]">
            <span className="h-px bg-[#9C1B33]/40 flex-1" />
            <span className="font-serif text-2xl leading-none">♡</span>
            <span className="h-px bg-[#9C1B33]/40 flex-1" />
          </div>

          {/* Przycisk CTA */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={onJoinClick}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#9C1B33] text-[#F5E5D6] font-semibold text-xs sm:text-sm uppercase tracking-widest hover:bg-[#831429] shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              <span>Dołącz do warsztatu</span>
              <Sparkles className="w-4 h-4 text-[#F5E5D6]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
