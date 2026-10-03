import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Heart } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A3331]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#F5E5D6] rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#9C1B33]/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Przycisk zamknięcia */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 rounded-full text-[#2A2A2A]/60 hover:text-[#9C1B33] hover:bg-[#ebd9c7] transition-colors"
          aria-label="Zamknij okno"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9C1B33]">
                Rezerwacja miejsca
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A3331] mt-1 mb-2">
                Kwantowy Skok do Twojego Nowego Życia
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 font-sans">
                Wybrany pakiet: <span className="font-medium text-[#9C1B33]">{selectedPlan || "Płatność jednorazowa (1990 zł)"}</span>
              </p>
            </div>

            {/* Przypomnienie o bonusie */}
            <div className="bg-[#F6B7C3]/50 border border-[#9C1B33]/20 rounded-2xl p-4 mb-6 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#9C1B33] shrink-0 mt-0.5" />
              <div className="text-xs text-[#2A3331]">
                <p className="font-serif font-bold text-sm text-[#9C1B33]">
                  Gwarancja Bonusu Gratis:
                </p>
                <p className="mt-0.5">
                  Indywidualna diagnoza Twojej Aury i Czakr sporządzona osobiście przez mentorkę.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2A3331] font-semibold mb-1.5">
                  Twoje Imię i Nazwisko *
                </label>
                <input
                  type="text"
                  required
                  placeholder="np. Anna Kowalska"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6F3] border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#9C1B33] focus:ring-1 focus:ring-[#9C1B33] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2A3331] font-semibold mb-1.5">
                  Adres E-mail *
                </label>
                <input
                  type="email"
                  required
                  placeholder="twoj.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6F3] border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#9C1B33] focus:ring-1 focus:ring-[#9C1B33] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2A3331] font-semibold mb-1.5">
                  Numer Telefonu (opcjonalnie)
                </label>
                <input
                  type="tel"
                  placeholder="+48 000 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6F3] border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#9C1B33] focus:ring-1 focus:ring-[#9C1B33] transition-colors text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#9C1B33] text-[#F5E5D6] font-semibold text-sm uppercase tracking-wider hover:bg-[#831429] shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 flex items-center justify-center gap-2"
                >
                  <span>Potwierdzam udział w warsztacie</span>
                  <Heart className="w-4 h-4 fill-[#F5E5D6] text-[#F5E5D6]" />
                </button>
              </div>

              <p className="text-[11px] text-center text-stone-600 mt-2 font-sans">
                Bezpieczne połączenie. Zgłoszenie nie zobowiązuje do natychmiastowej zapłaty – szczegóły prześlemy mailowo.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#9C1B33] text-[#F5E5D6] mx-auto flex items-center justify-center mb-6 shadow-md">
              <CheckCircle2 className="w-9 h-9 stroke-[2]" />
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#9C1B33] mb-3">
              Dziękujemy, {name}!
            </h3>

            <p className="font-sans text-base text-[#2A2A2A] leading-relaxed mb-6">
              Twoje miejsce na warsztacie <strong className="font-serif text-[#9C1B33]">KWANTOWY SKOK</strong> zostało wstępnie zarezerwowane. Na adres <span className="font-semibold text-[#9C1B33]">{email}</span> wysłaliśmy szczegóły organizacyjne oraz instrukcję do bezpłatnej <strong className="text-[#9C1B33]">Diagnozy Aury i Czakr</strong>.
            </p>

            <div className="p-4 bg-[#FAF6F3] rounded-2xl border border-stone-300 mb-8 text-xs text-stone-700 font-sans">
              <p>🗓️ Pierwsze spotkanie: <strong>15.10.2026</strong> (czwartek)</p>
              <p className="mt-1">✨ Harmonogram: 5 sesji na żywo we wtorki i czwartki</p>
            </div>

            <button
              onClick={handleReset}
              className="py-3 px-8 rounded-full bg-[#9C1B33] text-[#F5E5D6] font-semibold text-xs uppercase tracking-wider hover:bg-[#831429] transition-all"
            >
              Wróć do strony
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
