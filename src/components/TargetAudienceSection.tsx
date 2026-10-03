import React from 'react';

export const TargetAudienceSection: React.FC = () => {
  const points = [
    "Dla Ciebie, jeśli chcesz wejść w wysokie wibracje, pomimo trudnej sytuacji życiowej.",
    "Dla Ciebie, jeśli chcesz przestać uzależniać Twoje szczęście od zewnętrznych okoliczności, innych ludzi, partnera, a nawet zdrowia.",
    "Dla Ciebie, jeśli rozumiesz, że aby zmienić Twoje życie, najpierw zmieniasz energię.",
    "Dla Ciebie, jeśli pragniesz otworzyć się na bezwarunkowe szczęście, miłość i poczucie bezpieczeństwa już teraz.",
  ];

  return (
    <section 
      id="dla-kogo" 
      className="bg-[#F6B7C3] py-24 sm:py-32 px-6 border-t border-[#9C1B33]/15 transition-colors duration-300 relative overflow-hidden scroll-mt-16"
    >
      {/* Delikatna poświata w tle */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-white/20 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Nagłówek szeryfowy */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#9C1B33] text-center mb-16 sm:mb-20 tracking-tight text-balance uppercase">
          DLA KOGO JEST TEN TRENING?
        </h2>

        {/* Jedna scalona sekcja listy zamiast pojedynczych boksów */}
        <div className="bg-[#F5E5D6] rounded-3xl p-8 sm:p-12 border border-[#9C1B33]/20 shadow-md divide-y divide-[#9C1B33]/15">
          {points.map((point, index) => (
            <div 
              key={index}
              className={`flex items-start gap-5 sm:gap-6 ${
                index === 0 
                  ? 'pb-6 sm:pb-8' 
                  : index === points.length - 1 
                  ? 'pt-6 sm:pt-8' 
                  : 'py-6 sm:py-8'
              }`}
            >
              {/* Bordowy punkt */}
              <div className="w-5 h-5 rounded-full bg-[#9C1B33] shrink-0 mt-1 flex items-center justify-center shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5E5D6]" />
              </div>

              {/* Treść punktu */}
              <p className="font-sans text-lg sm:text-xl text-[#2A2A2A] leading-relaxed font-normal">
                {point}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
