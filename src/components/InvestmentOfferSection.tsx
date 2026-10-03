import React, { useState } from 'react';
import { Sparkles, MessageCircle, Copy, Check, ExternalLink, ShieldCheck, X, ZoomIn } from 'lucide-react';
import opinia1Img from './opinia1.jpeg';
import opinia2Img from './opinia2.jpeg';
import opinia3Img from './opinia3.jpeg';
import opinia4Img from './opinia4.jpeg';
import opinia5Img from './opinia5.jpeg';
import opinia6Img from './opinia6.jpeg';
import opinia7Img from './opinia7.jpeg';
import opinia8Img from './opinia8.jpeg';

export const InvestmentOfferSection: React.FC = () => {
  const [copiedBlik, setCopiedBlik] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [activeReviewImg, setActiveReviewImg] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: 'blik' | 'account') => {
    navigator.clipboard.writeText(text);
    if (type === 'blik') {
      setCopiedBlik(true);
      setTimeout(() => setCopiedBlik(false), 2000);
    } else {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    }
  };

  const summaryPoints = [
    "3 tygodnie podnoszenia wibracji",
    "Oczyszczanie Twojej Aury i Czakr",
    "Regularne EFT na żywo",
    "Kwantowy Skok w nową energię",
  ];

  return (
    <section 
      id="inwestycja" 
      className="bg-[#F6B7C3] py-24 sm:py-32 px-6 border-t border-[#9C1B33]/15 transition-colors duration-300 relative overflow-hidden scroll-mt-16"
    >
      {/* Subtelna poświata w tle */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-white/20 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Nagłówek sekcji */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#9C1B33] text-center mb-16 sm:mb-20 tracking-tight text-balance uppercase">
          TWOJA INWESTYCJA W SIEBIE
        </h2>

        {/* Karta Cenowa & Terminy */}
        <div className="bg-[#F5E5D6] rounded-3xl p-8 sm:p-12 border border-[#9C1B33]/20 shadow-lg mb-16">
          
          {/* Ceny */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 border-b border-[#9C1B33]/15 text-center">
            
            {/* Opcja do 10.10 */}
            <div className="bg-[#ebd9c7]/70 p-6 sm:p-8 rounded-2xl border-2 border-[#9C1B33] relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#9C1B33] text-[#F5E5D6] text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-2xs whitespace-nowrap">
                Wczesny zapis
              </span>
              <p className="text-xs uppercase tracking-widest text-[#9C1B33] font-semibold mb-1">
                do 10.10
              </p>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#2A3331] my-2">
                288 PLN
              </div>
              <p className="text-xs text-stone-600 font-sans">
                Najniższa cena przedsprzedażowa
              </p>
            </div>

            {/* Opcja od 11.10 */}
            <div className="bg-[#ebd9c7]/40 p-6 sm:p-8 rounded-2xl border border-[#9C1B33]/20">
              <p className="text-xs uppercase tracking-widest text-stone-600 font-semibold mb-1">
                od 11.10
              </p>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#2A3331] my-2">
                333 PLN
              </div>
              <p className="text-xs text-stone-600 font-sans">
                Cena regularna warsztatu
              </p>
            </div>

          </div>

          {/* Opis oferty */}
          <div className="pt-8 text-center space-y-2">
            <p className="font-serif text-xl sm:text-2xl font-bold text-[#2A3331]">
              Za 3-tygodniowy warsztat KWANTOWY SKOK
            </p>
            <p className="font-sans text-base text-[#2A2A2A]/80 font-normal">
              Bezterminowy dostęp do nagrań.
            </p>
          </div>

          {/* BONUS SPECJALNY */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#9C1B33] text-[#F5E5D6] text-center relative overflow-hidden shadow-md">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5E5D6]/20 text-[11px] font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PLUS Tylko Teraz</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
              BONUS SPECJALNY
            </h3>

            <p className="font-serif italic text-lg sm:text-xl text-[#F5E5D6]/90 mb-4 max-w-xl mx-auto text-pretty">
              Twoja Indywidualna Diagnoza Aury<br className="hidden sm:inline" /> i&nbsp;Czakr, którą sporządzę osobiście.
            </p>

            <div className="inline-block px-4 py-1.5 rounded-full bg-[#F5E5D6] text-[#9C1B33] text-xs font-bold uppercase tracking-wider">
              Uwaga! Zostało tylko 15 miejsc na Diagnozy w tym tygodniu.
            </div>
          </div>

        </div>

        {/* SCREENY OPINII: opinia1 do opinia8 pod boxem z ceną, nad boxem Reasumując */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              { src: opinia1Img, alt: "Opinia o warsztatach 1" },
              { src: opinia2Img, alt: "Opinia o warsztatach 2" },
              { src: opinia3Img, alt: "Opinia o warsztatach 3" },
              { src: opinia4Img, alt: "Opinia o warsztatach 4" },
              { src: opinia5Img, alt: "Opinia o warsztatach 5" },
              { src: opinia6Img, alt: "Opinia o warsztatach 6" },
              { src: opinia7Img, alt: "Opinia o warsztatach 7" },
              { src: opinia8Img, alt: "Opinia o warsztatach 8" },
            ].map((opinia, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveReviewImg(opinia.src)}
                className="group relative bg-[#F5E5D6] p-2 sm:p-3 rounded-2xl sm:rounded-3xl border border-[#9C1B33]/20 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden"
              >
                <img 
                  src={opinia.src} 
                  alt={opinia.alt} 
                  className="w-full h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xs group-hover:scale-[1.01] transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#9C1B33]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl sm:rounded-3xl">
                  <span className="p-3 rounded-full bg-[#F5E5D6]/90 text-[#9C1B33] shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REASUMUJĄC - scalona sekcja listy */}
        <div className="bg-[#F5E5D6] rounded-3xl p-8 sm:p-12 border border-[#9C1B33]/20 shadow-md mb-16">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#9C1B33] text-center mb-8 tracking-tight uppercase">
            REASUMUJĄC
          </h3>

          <div className="divide-y divide-[#9C1B33]/15 mb-8">
            {summaryPoints.map((point, index) => (
              <div 
                key={index}
                className={`flex items-start gap-4 ${
                  index === 0 
                    ? 'pb-4' 
                    : index === summaryPoints.length - 1 
                    ? 'pt-4' 
                    : 'py-4'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-[#9C1B33] shrink-0 mt-1 flex items-center justify-center shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5E5D6]" />
                </div>
                <p className="font-sans text-base sm:text-lg text-[#2A2A2A] font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#9C1B33]/20 text-center">
            <p className="font-serif text-lg sm:text-2xl font-extrabold text-[#9C1B33] tracking-tight uppercase">
              WSZYSTKO TO W CENIE JEDNEJ GODZINY TERAPII Z EFT!
            </p>
          </div>
        </div>

        {/* JAK DOŁĄCZYĆ? - DANE DO WPŁATY & MESSENGER */}
        <div className="bg-[#F5E5D6] rounded-3xl p-8 sm:p-12 border-2 border-[#9C1B33] shadow-xl text-center">
          
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#9C1B33] mb-4 tracking-tight uppercase">
            JAK DOŁĄCZYĆ?
          </h3>

          <p className="font-sans text-base sm:text-lg text-[#2A2A2A] font-medium mb-8">
            Dziękuję za wpłatę na konto 👇
          </p>

          {/* Box BLIK & Dane Bankowe */}
          <div className="bg-[#ebd9c7]/75 rounded-2xl p-6 sm:p-8 border border-[#9C1B33]/20 max-w-xl mx-auto mb-8 text-left space-y-5">
            
            {/* BLIK */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#9C1B33]/20">
              <div>
                <span className="text-xs uppercase tracking-widest text-stone-600 font-semibold block">
                  Płatność szybka na numer
                </span>
                <span className="font-sans text-xl sm:text-2xl font-bold text-[#9C1B33] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9C1B33]" />
                  BLIK: 668 997 560
                </span>
              </div>
              <button
                onClick={() => copyToClipboard("668997560", "blik")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5E5D6] border border-[#9C1B33]/25 text-[#9C1B33] text-xs font-semibold hover:bg-[#9C1B33] hover:text-[#F5E5D6] transition-all shadow-2xs self-start sm:self-center"
              >
                {copiedBlik ? <Check className="w-4 h-4 text-emerald-600 shrink-0" /> : <Copy className="w-4 h-4 shrink-0" />}
                <span>{copiedBlik ? "Skopiowano!" : "Kopiuj numer"}</span>
              </button>
            </div>

            {/* Dane do przelewu */}
            <div className="space-y-1.5 text-sm sm:text-base text-[#2A2A2A] font-sans">
              <p className="font-bold text-[#2A3331]">QUANTUM TUNING</p>
              <p>Magdalena Kuźnik</p>
              <p>ul. Jesionowa 15</p>
              <p>62-005 Owińska</p>
            </div>

            {/* Numer Konta */}
            <div className="pt-3 border-t border-[#9C1B33]/15">
              <span className="text-xs uppercase tracking-widest text-stone-600 font-semibold block mb-1">
                Numer konta bankowego
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="font-mono text-sm sm:text-base font-bold text-[#2A3331] tracking-wide break-all">
                  15 1030 0019 0109 8503 0022 4073
                </span>
                <button
                  onClick={() => copyToClipboard("15103000190109850300224073", "account")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5E5D6] border border-[#9C1B33]/25 text-[#9C1B33] text-xs font-semibold hover:bg-[#9C1B33] hover:text-[#F5E5D6] transition-all shadow-2xs self-start sm:self-center shrink-0"
                >
                  {copiedAccount ? <Check className="w-4 h-4 text-emerald-600 shrink-0" /> : <Copy className="w-4 h-4 shrink-0" />}
                  <span>{copiedAccount ? "Skopiowano!" : "Kopiuj konto"}</span>
                </button>
              </div>
            </div>

          </div>

          <p className="font-serif italic text-lg sm:text-xl text-[#9C1B33] font-medium mb-3">
            Dziękuję serdecznie!
          </p>

          <p className="text-sm sm:text-base text-[#2A2A2A] font-sans mb-6 max-w-xl mx-auto font-medium">
            Na grupie warsztatowej JUŻ czekają na Ciebie Bonusowe webinary na temat EFT i pracy z energią.
          </p>

          {/* Instrukcja Messenger */}
          <div className="bg-[#ebd9c7]/50 p-4 sm:p-6 rounded-2xl border border-[#9C1B33]/15 max-w-xl mx-auto mb-8 text-sm sm:text-base text-[#2A2A2A] space-y-3 overflow-hidden">
            <p className="font-semibold text-[#2A3331]">
              Po wpłacie prześlij Twoje zgłoszenie na Messenger:
            </p>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-1 sm:gap-2">
                <span className="text-[#2A3331] font-medium">Magdalena Anna Kuźnik:</span>
                <a 
                  href="https://www.facebook.com/terapiaduszy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#9C1B33] font-semibold underline underline-offset-2 hover:opacity-80 inline-flex items-center justify-center gap-1 break-all"
                >
                  <span>facebook.com/terapiaduszy</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-1 sm:gap-2">
                <span className="text-[#2A3331] font-medium">lub Messenger mojej strony:</span>
                <a 
                  href="https://www.facebook.com/energotransformacja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#9C1B33] font-semibold underline underline-offset-2 hover:opacity-80 inline-flex items-center justify-center gap-1 break-all"
                >
                  <span>facebook.com/energotransformacja</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Główny przycisk Messenger */}
          <a
            href="https://m.me/terapiaduszy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#9C1B33] text-[#F5E5D6] font-bold text-sm uppercase tracking-wider hover:bg-[#831429] shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Napisz na Messengerze</span>
          </a>

        </div>

      </div>

      {/* Lightbox / Modal podglądu powiększonej opinii */}
      {activeReviewImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveReviewImg(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[92vh] bg-[#F5E5D6] p-3 sm:p-5 rounded-3xl border border-[#9C1B33]/30 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveReviewImg(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#9C1B33] text-[#F5E5D6] flex items-center justify-center shadow-lg hover:bg-[#831429] transition-colors z-20 cursor-pointer"
              aria-label="Zamknij podgląd"
            >
              <X className="w-5 h-5 shrink-0" />
            </button>
            <img 
              src={activeReviewImg} 
              alt="Powiększona opinia" 
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-2xl shadow-sm"
            />
          </div>
        </div>
      )}
    </section>
  );
};
