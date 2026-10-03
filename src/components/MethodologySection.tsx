import React from 'react';
import { Sparkles, Activity, Brain } from 'lucide-react';

interface MethodologySectionProps {
  onJoinClick: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onJoinClick }) => {
  return (
    <section 
      id="metoda" 
      className="bg-[#F6B7C3] py-24 sm:py-32 px-6 border-t border-[#9C1B33]/15 transition-colors duration-300 relative overflow-hidden scroll-mt-16"
    >
      {/* Delikatna poświata w tle */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Główny nagłówek */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#9C1B33] text-center mb-16 sm:mb-20 tracking-tight text-balance uppercase">
          JAK TEGO DOŚWIADCZYSZ?
        </h2>

        <div className="space-y-12 sm:space-y-16">
          
          {/* MODUŁ 1: OCZYSZCZANIE AURY I CZAKR */}
          <div className="bg-[#F5E5D6] p-8 sm:p-12 rounded-3xl border border-[#9C1B33]/20 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#F6B7C3]/50 text-[#9C1B33] flex items-center justify-center border border-[#9C1B33]/15 shrink-0">
                <Sparkles className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#9C1B33] tracking-tight uppercase">
                OCZYSZCZANIE AURY I CZAKR
              </h3>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#2A2A2A] font-sans leading-relaxed">
              <p>
                Co trzyma Cię w okowach starej rzeczywistości? Twoje pole energetyczne, w którym przechowujesz energię starych porażek, zranień i rozczarowań.
              </p>
              <p>
                Na warsztatach będziemy regularnie oczyszczać Twoją aurę i czakry, dzięki czemu odzyskasz energię, wejdziesz na wyższy poziom wibracyjny i dostroisz się energetycznie do Twojego nowego życia.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#9C1B33]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-serif italic text-lg sm:text-xl font-medium text-[#9C1B33]">
                Czy chcesz otworzyć się na energię Twojego nowego życia?
              </p>
              <button
                onClick={onJoinClick}
                className="px-5 py-2.5 rounded-full bg-[#9C1B33] text-[#F5E5D6] font-medium text-xs uppercase tracking-wider hover:bg-[#831429] transition-all self-start sm:self-auto shrink-0 shadow-xs"
              >
                Chcę tego
              </button>
            </div>
          </div>

          {/* MODUŁ 2: UWOLNISZ NEGATYWNE PRZEKONANIA I EMOCJE Z EFT */}
          <div className="bg-[#F5E5D6] p-8 sm:p-12 rounded-3xl border border-[#9C1B33]/20 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#F6B7C3]/50 text-[#9C1B33] flex items-center justify-center border border-[#9C1B33]/15 shrink-0">
                <Activity className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#9C1B33] tracking-tight uppercase">
                UWOLNISZ NEGATYWNE PRZEKONANIA I EMOCJE Z EFT
              </h3>
            </div>

            <p className="text-base sm:text-lg font-medium text-[#2A2A2A] mb-4">
              Według badań naukowych, już jedna, pół godzinna sesja EFT:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "obniża poziom kortyzolu (hormonu stresu) o ponad 40%",
                "zmniejsza objawy depresji o ponad 40%! (Nelms & Castel, 2016)",
                "redukuje lęk o ponad 40% (Clond, 2015)",
                "reguluje geny odpowiedzialne za stan zapalny i odporność (Maharaj, 2016)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base sm:text-lg text-[#2A2A2A]">
                  <span className="w-2 h-2 rounded-full bg-[#9C1B33] shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-5 rounded-2xl bg-[#ebd9c7]/70 border border-[#9C1B33]/15 mb-6 text-sm sm:text-base text-[#2A2A2A] space-y-2">
              <p>
                Istnieje ponad 25O badań klinicznych potwierdzających skuteczność EFT na lęk, fobie, depresję, ptsd i inne problemy emocjonalne.
              </p>
              <p className="font-serif text-lg font-bold text-[#9C1B33] pt-1">
                To nie magia. To neurobiologia!
              </p>
            </div>

            <div className="pt-6 border-t border-[#9C1B33]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-serif italic text-lg sm:text-xl font-medium text-[#9C1B33]">
                Czy chcesz tego doświadczyć?
              </p>
              <button
                onClick={onJoinClick}
                className="px-5 py-2.5 rounded-full bg-[#9C1B33] text-[#F5E5D6] font-medium text-xs uppercase tracking-wider hover:bg-[#831429] transition-all self-start sm:self-auto shrink-0 shadow-xs"
              >
                Chcę tego
              </button>
            </div>
          </div>

          {/* MODUŁ 3: SKOK KWANTOWY - ZAPROGRAMUJ SIĘ NA ZDROWIE I SUKCES */}
          <div className="bg-[#F5E5D6] p-8 sm:p-12 rounded-3xl border border-[#9C1B33]/20 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#F6B7C3]/50 text-[#9C1B33] flex items-center justify-center border border-[#9C1B33]/15 shrink-0">
                <Brain className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#9C1B33] tracking-tight uppercase">
                SKOK KWANTOWY - ZAPROGRAMUJ SIĘ NA ZDROWIE I SUKCES
              </h3>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#2A2A2A] font-sans leading-relaxed">
              <p>
                Twój układ nerwowy pozwala Ci doświadczyć tylko tego, co jest Ci bliskie i znane.
                Zaprogramuj się na zdrowie, sukces i miłość regularnie stosując głęboką medytację i wizualizację.
              </p>
              <p>
                Na warsztacie zastosujesz moją autorską metodę Kwantowego Skoku, która kilkakrotnie pomogła mi całkowicie zmienić moje życie, otworzyć się na wysokie dochody i uzdrowić moje ciało.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#9C1B33]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-serif italic text-lg sm:text-xl font-medium text-[#9C1B33]">
                Czy też chcesz tego doświadczyć?
              </p>
              <button
                onClick={onJoinClick}
                className="px-5 py-2.5 rounded-full bg-[#9C1B33] text-[#F5E5D6] font-medium text-xs uppercase tracking-wider hover:bg-[#831429] transition-all self-start sm:self-auto shrink-0 shadow-xs"
              >
                Chcę tego
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
