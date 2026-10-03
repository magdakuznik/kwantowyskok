import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      q: "Kiedy są spotkania?",
      a: "Czwartki i wtorki: 15, 20, 22, 27, 29.10, godz. 19:00-21:30.",
    },
    {
      q: "Co jeśli nie mogę być na żywo?",
      a: "Masz bezterminowy dostęp do nagrań. Oglądasz kiedy chcesz.",
    },
    {
      q: "Gdzie odbywa się warsztat?",
      a: "On-line, w grupie na Facebooku.",
    },
    {
      q: "Co dostaję od razu po wpłacie?",
      a: "Na grupie warsztatowej już czekają na Ciebie bonusowe webinary na temat EFT i pracy z energią.",
    },
    {
      q: "Jak dostanę diagnozę aury i czakr?",
      a: "Indywidualną diagnozę sporządzam osobiście. W tym tygodniu zostało tylko 15 miejsc.",
    },
    {
      q: "Czy warsztat jest też dla mężczyzn?",
      a: "Tak. Nasza społeczność to pozytywne kobiety i mężczyźni.",
    },
    {
      q: "Jak dołączyć?",
      a: "Robisz wpłatę BLIKIEM albo przelewem, a potem przesyłasz zgłoszenie na Messenger.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="bg-[#F6B7C3] py-24 sm:py-32 px-6 border-t border-[#9C1B33]/15 transition-colors duration-300 relative overflow-hidden scroll-mt-16"
    >
      {/* Delikatna poświata w tle */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/20 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Nagłówek szeryfowy */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#9C1B33] text-center mb-16 sm:mb-20 tracking-tight text-balance uppercase">
          CZĘSTO ZADAWANE PYTANIA
        </h2>

        {/* Scalona lista akordeonowa bez pojedynczych boksów */}
        <div className="bg-[#F5E5D6] rounded-3xl p-6 sm:p-10 border border-[#9C1B33]/20 shadow-md divide-y divide-[#9C1B33]/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-6 first:pt-2 last:pb-2">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 text-left font-serif text-lg sm:text-xl font-bold text-[#2A3331] hover:text-[#9C1B33] transition-colors focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div 
                    className={`w-7 h-7 rounded-full bg-[#ebd9c7] flex items-center justify-center text-[#9C1B33] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#9C1B33] text-[#F5E5D6]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 text-base sm:text-lg text-[#2A2A2A]/85 font-sans leading-relaxed animate-in fade-in-50 duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
