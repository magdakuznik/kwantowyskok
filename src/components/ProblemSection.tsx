import React from 'react';
import { Check } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const questions = [
    "Miewasz obniżony nastrój z powodu zewnętrznych okoliczności?",
    "Masz za sobą trudny okres w życiu?",
    "Chcesz zakończyć toksyczny związek? Pożegnać samotność? Wyjść z długów? Wesprzeć zdrowie?",
    "Pragniesz otworzyć się na stan radości i przepływu, nawet jeśli w Twoim życiu nie wszystko jest idealne?",
  ];

  return (
    <section 
      id="problem" 
      className="bg-[#F5E5D6] py-20 sm:py-28 px-6 transition-colors duration-300 scroll-mt-16"
    >
      <div className="max-w-3xl mx-auto">
        
        {/* Nagłówek szeryfowy */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#9C1B33] text-center mb-14 sm:mb-16 tracking-tight text-balance">
          Czy to jest dla Ciebie?
        </h2>

        {/* Jedna scalona sekcja listy */}
        <div className="bg-[#ebd9c7]/60 rounded-3xl p-8 sm:p-12 border border-[#9C1B33]/20 shadow-xs divide-y divide-[#9C1B33]/15">
          {questions.map((question, index) => (
            <div 
              key={index}
              className={`flex items-start gap-5 sm:gap-6 ${
                index === 0 
                  ? 'pb-6 sm:pb-8' 
                  : index === questions.length - 1 
                  ? 'pt-6 sm:pt-8' 
                  : 'py-6 sm:py-8'
              }`}
            >
              {/* Bordowy okrągły wskaźnik */}
              <div className="w-6 h-6 rounded-full bg-[#9C1B33] text-[#F5E5D6] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>

              {/* Tekst pytania */}
              <p className="font-sans text-lg sm:text-xl text-[#2A2A2A] leading-relaxed font-normal">
                {question}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
