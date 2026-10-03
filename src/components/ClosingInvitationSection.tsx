import React from 'react';
import { Heart } from 'lucide-react';

export const ClosingInvitationSection: React.FC = () => {
  return (
    <section className="bg-[#F6B7C3] py-20 sm:py-28 px-6 border-t border-[#9C1B33]/15 transition-colors duration-300 relative overflow-hidden">
      {/* Subtelne tło dekoracyjne */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F5E5D6]/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Karta z zaproszeniem - beżowy box na różowym tle */}
        <div className="bg-[#F5E5D6] rounded-3xl p-8 sm:p-14 border border-[#9C1B33]/20 shadow-md">
          
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#9C1B33]/10 text-[#9C1B33] mb-6">
            <Heart className="w-6 h-6 fill-[#9C1B33]/20 stroke-[#9C1B33]" />
          </div>

          <div className="space-y-6 sm:space-y-8 max-w-2xl mx-auto text-base sm:text-xl text-[#2A2A2A] font-sans leading-relaxed">
            <p className="font-medium text-[#2A2A2A]">
              Dołącz do naszej wspierającej społeczności pozytywnych kobiet i&nbsp;mężczyzn.
            </p>

            <p className="font-medium text-[#2A2A2A]">
              Poznaj wyjątkowe techniki energetyczne i&nbsp;kwantowe.
            </p>

            <p className="font-serif text-xl sm:text-2xl font-bold text-[#9C1B33] leading-snug">
              Zacznij Nowy Etap Twojego Życia, którego źródłem będzie Bezwarunkowe Szczęście.
            </p>
          </div>

          {/* Podpis z kursywą */}
          <div className="mt-10 sm:mt-12 pt-8 border-t border-[#9C1B33]/20 inline-block text-center">
            <p className="font-sans text-base sm:text-lg text-[#2A2A2A] mb-1">
              Zapraszam,
            </p>
            <p className="font-serif italic text-3xl sm:text-4xl text-[#9C1B33] font-bold tracking-wide">
              Magdalena
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
