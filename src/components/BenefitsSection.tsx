import React from 'react';
import { ArrowRight } from 'lucide-react';
import magda5Img from './magda5.png';

interface BenefitsSectionProps {
  onJoinClick: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onJoinClick }) => {
  const benefits = [
    "Otworzysz się na stan Bezwarunkowego Szczęścia nawet jeśli Twoje życie nie jest jeszcze idealne",
    "Uwolnisz poczucie braku i tożsamość ofiary.",
    'Poznasz formułę: "TAK, ALE" dzięki której wyjdziesz z sinusoidy życiowych okoliczności.',
    "Doświadczysz głębokiej, wielopoziomowej transformacji regularnie stosując techniki EFT, Kwantowego Skoku, Medytacji",
    "Odblokujesz Twoją energię dzięki Oczyszaniu Aury i Czakr",
    "Przestaniesz uzależniać Twoje szczęście i poczucie własnej wartości od przeszłości, zmiennych okoliczności, innych ludzi",
    "Odpuścisz Identyfikację, której źródłem był lęk, potrzeba aprobaty i społeczne programowanie",
    "Otworzysz się na pełne wybaczenie: sobie i innym",
    "Nauczysz się jak być Tu i Teraz, bez negatywnych myśli i czarnych scenariuszy",
    "Ugruntujesz się w nowej Tożsamości opartej na Radykalnej Akceptacji",
  ];

  return (
    <section 
      id="korzysci" 
      className="bg-[#F5E5D6] py-24 sm:py-32 px-6 transition-colors duration-300 border-t border-[#9C1B33]/15"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Nagłówek szeryfowy */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#9C1B33] text-center mb-10 sm:mb-16 tracking-tight text-balance uppercase">
          DZIĘKI TEMU TRENINGOWI:
        </h2>

        {/* Zdjęcie magda5 na górze sekcji - widoczne na urządzeniach mobilnych (lg:hidden) */}
        <div className="lg:hidden mb-10 flex justify-center items-center">
          <div className="relative w-full max-w-[300px] sm:max-w-[360px] aspect-square">
            <img 
              src={magda5Img} 
              alt="Magdalena Anna Kuźnik" 
              className="w-full h-full object-contain drop-shadow-2xl mx-auto"
              width={1000}
              height={1000}
              loading="lazy"
            />
          </div>
        </div>

        {/* Jedna scalona sekcja listy zamiast pojedynczych boksów */}
        <div className="bg-[#ebd9c7]/60 rounded-3xl p-8 sm:p-12 border border-[#9C1B33]/20 shadow-xs divide-y divide-[#9C1B33]/15">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`flex items-start gap-5 ${
                index === 0 
                  ? 'pb-5 sm:pb-6' 
                  : index === benefits.length - 1 
                  ? 'pt-5 sm:pt-6' 
                  : 'py-5 sm:py-6'
              }`}
            >
              {/* Bordowy punkt */}
              <div className="w-4 h-4 rounded-full bg-[#9C1B33] shrink-0 mt-1 flex items-center justify-center shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5E5D6]" />
              </div>

              {/* Tekst korzyści */}
              <p className="font-sans text-base sm:text-lg text-[#2A2A2A] leading-relaxed font-normal">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Zwieńczenie: Czy chcesz tego doświadczyć? */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#9C1B33]/20 text-center">
          <p className="font-serif text-2xl sm:text-3xl font-bold text-[#9C1B33] tracking-tight mb-8">
            Czy chcesz tego doświadczyć?
          </p>

          <button
            onClick={onJoinClick}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#9C1B33] text-[#F5E5D6] font-semibold text-sm uppercase tracking-wider hover:bg-[#831429] shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
          >
            <span>Tak, chcę tego doświadczyć</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>

          {/* Zdjęcie magda5 pod tekstem i przyciskiem - widoczne na komputerach (hidden lg:flex) */}
          <div className="hidden lg:flex mt-12 sm:mt-16 justify-center items-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[460px] aspect-square">
              <img 
                src={magda5Img} 
                alt="Magdalena Anna Kuźnik" 
                className="w-full h-full object-contain drop-shadow-2xl mx-auto hover:scale-[1.01] transition-transform duration-300"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
