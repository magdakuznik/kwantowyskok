import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import magda4Img from './magda4.png';
import omnieImg from './omnie.png';

export const AboutMeSection: React.FC = () => {
  const testimonials = [
    {
      author: "Grzegorz Śpiewak",
      text: "Madziu, jak dla mnie to najbardziej rozwinięta duchowo osoba przekazująca czystą wiedzę, bez sekty, bez lansu, bez podczepów 👋",
    },
    {
      author: "Katarzyna Chrapkiewicz",
      text: "Polecam warsztaty u Magdy. Powiem szczerze najlepiej wydane pieniądze w moim życiu jeśli chodzi o mój rozwój.",
    },
    {
      author: "Berta Lambryczak",
      text: "Warsztaty Madziu z Tobą są wartościowe, polecam z całego serca.",
    },
    {
      author: "Oleksandra Lesia Pylypiv",
      text: "Ja też cały czas podążam za Madzią… od 2021 roku byłam na wszystkich możliwych warsztatach u Madzi… Gorąco polecam… dzięki Madzi zmieniłam swoje życie ❤️",
    },
    {
      author: "Barbara Grygiel",
      text: "Polecam warsztaty u Madzi, jestem wdzięczna za to co u mnie się zadziałało i zmieniło na korzyść oczywiście.",
    },
    {
      author: "Izabella Sarba",
      text: "Są tacy co wędrują za Tobą Madziu już ładnych kilka lat 😅 stworzyłaś niesamowitą społeczność gdzie się wspieramy. Starzy wyjadacze jak powiedziałaś. Wciąż tworzysz warte treści i my za tobą podążamy…",
    },
    {
      author: "Justyna Katra",
      text: "Polecam z całego serca warsztaty u Magdaleny, z którą pierwszy raz miałam kontakt 3 lata temu na webinarach z EFT. Od tej pory nastąpiło wiele pozytywnych zmian w moim życiu i wiele pracy wykonałam, aby realizować swoją ścieżkę życiową. Magdalena jest wspaniałą osobą i skuteczną terapeutą, w łatwy i przyjazny sposób tłumaczy metody pracy ze sobą. Obecnie jestem na warsztatach z QUANTUM TUNING, już nie mogę się doczekać na kolejny moduł, aby jeszcze skuteczniej pracować w ramach pracy terapeutycznej 🙏🙏🙏🙂❤️",
    },
    {
      author: "Ela Matusiewicz",
      text: "Jestem fanką warsztatów prowadzonych przez Magdę. 😀\n\nNiesamowita wiedza przedstawiona w bardzo prosty, a zarazem skuteczny sposób trafia do każdego. 😀\n\nPo każdym warsztacie czuję wielki postęp na mojej drodze rozwoju i przyznam szczerze, że z niecierpliwością oczekuję dnia, w którym się spotykamy. 😀\n\nJestem przekonana, że moja przygoda z Madzią będzie jeszcze długo trwała, bo mamy jeszcze wiele tematów do przerobienia. 😀",
    },
    {
      author: "Aga Rest",
      text: "Niesamowita energia jaka emanuje z Madzi sprawia, że wszystko wygląda promiennie. Bardzo duża dawka wiedzy, przekazana w bardzo przystępny sposób. Polecam warsztaty z całego serca.",
    },
    {
      author: "Ewelina Arcus",
      text: "Cudowne warsztaty. Rewelacyjna atmosfera. Osoba prowadząca ma olbrzymie doświadczenie. Doskonale prowadzi każdy warsztat. Dopasowuje poziom wiedzy do każdego uczestnika. Uczestnicząca osoba czuje się zaopiekowana.\n\nPo każdym przerobionym warsztacie poziom mojej świadomości wzrasta, a życie staje się bardziej głębokie i sprawcze. Polecam każdemu kto pragnie zrozumieć ten świat oraz poznać dogłębnie siebie. Zrozumieć swoje problemy, ich genezę i pożegnać się z nimi na zawsze. W swoim tempie i pod okiem Mistrza.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="o-mnie" 
      className="bg-[#F5E5D6] py-24 sm:py-32 px-6 border-t border-[#9C1B33]/15 transition-colors duration-300 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Nagłówek sekcji */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#9C1B33] text-center mb-16 sm:mb-20 tracking-tight text-balance uppercase">
          KIM JESTEM, ABY CIĘ PROWADZIĆ?
        </h2>

        {/* Karta Bio wyśrodkowana na desktopie i mobile */}
        <div className="bg-[#ebd9c7]/50 rounded-3xl p-8 sm:p-14 border border-[#9C1B33]/15 shadow-xs mb-20 max-w-4xl mx-auto">
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 text-center text-base sm:text-lg text-[#2A2A2A] font-sans leading-relaxed font-normal">
            
            {/* Imię i nazwisko na środku */}
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#9C1B33] font-bold text-center">
              Nazywam się Magdalena Anna Kuźnik.
            </p>

            {/* Zdjęcie magda4 wyśrodkowane pod tekstem "Nazywam się Magdalena Anna Kuźnik." */}
            <div className="py-4 sm:py-6 flex justify-center items-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[440px] aspect-square flex justify-center">
                <img 
                  src={magda4Img} 
                  alt="Magdalena Anna Kuźnik" 
                  className="w-full h-full object-contain drop-shadow-2xl mx-auto hover:scale-[1.01] transition-transform duration-300"
                  width={1000}
                  height={1000}
                  loading="lazy"
                />
              </div>
            </div>

            <p>
              Jestem terapeutą DDA, DDD, Certyfikowanym Trenerem EFT, uzdrowicielem energetycznym, twórcą metody QUANTUM TUNING.
            </p>

            <p>
              Kilkunastoletni okres intensywnej medytacji pod bezpośrednim prowadzeniem tybetańskich mistrzów otworzył mnie na postrzeganie ukrytego wymiaru energii, odczyt Kronik Akaszy, jasnowidzenie aury i czakr.
            </p>

            <p>
              W mojej pracy łączę doświadczenie terapeutyczne z pracą energetyczną, aby poprowadzić Cię przez Twoją wielowymiarową transformację.
            </p>

            <p>
              Przede wszystkim jednak jestem osobą, która sama doświadczyła wielu wyzwań: problemy finansowe, trudne związki, depresja, choroba nowotworowa.
            </p>

            <p className="font-serif italic text-xl sm:text-2xl text-[#9C1B33] font-medium py-1">
              Ale podniosłam się z tego.
            </p>

            <p>
              Od 2020 roku przeprowadziłam kilka dużych cykli warsztatów (Przebudzenie do Miłości, Przebudzenie Obfitości, Przebudzenie Mocy) i stworzyłam własną metodę pracy z wahadłem radiestezyjnym QUANTUM TUNING.
            </p>

            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9C1B33]/10 text-[#9C1B33] text-sm font-semibold border border-[#9C1B33]/20">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>W prowadzonych przeze mnie warsztatach online wzięło udział ponad 1500 osób.</span>
              </div>
            </div>

            <p className="font-medium text-[#2A3331]">
              Przeszłam przez moją Ciemną Noc Duszy, aby poprowadzić Cię do Światła.
            </p>

            <p className="font-serif text-xl sm:text-2xl font-bold text-[#9C1B33] pt-2">
              Uzdrowiłam moje Ciało i Duszę, więc wiem jak Ty możesz to zrobić.
            </p>

          </div>
        </div>

        {/* Zdjęcie omnie nad opiniami */}
        <div className="mb-16 sm:mb-20 flex justify-center items-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-square flex justify-center">
            <img 
              src={omnieImg} 
              alt="Magdalena Anna Kuźnik" 
              className="w-full h-full object-contain drop-shadow-2xl mx-auto hover:scale-[1.01] transition-transform duration-300"
              width={1000}
              height={1000}
              loading="lazy"
            />
          </div>
        </div>

        {/* OPINIE MOICH KLIENTÓW - SLIDER */}
        <div className="pt-2 max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#9C1B33] tracking-tight uppercase mb-4">
              OPINIE MOICH KLIENTÓW
            </h3>

            {/* Facebook Badge: Ikonka Facebooka, 5 gwiazdek i (60 opinii) */}
            <div className="inline-flex flex-col items-center justify-center gap-1.5">
              <div className="flex items-center gap-1.5 text-[#1877F2]">
                <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="font-sans font-bold text-lg sm:text-xl lowercase tracking-tight leading-none">
                  facebook
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-bold text-[#2A2A2A] text-base sm:text-lg">5.0</span>
                <div className="flex items-center gap-0.5 sm:gap-1 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#F59E0B]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[#2A2A2A]/70 text-sm sm:text-base font-sans font-medium">
                  (60 opinii)
                </span>
              </div>
            </div>
          </div>

          <div className="relative bg-[#ebd9c7]/75 rounded-3xl p-8 sm:p-14 border border-[#9C1B33]/20 shadow-md">
            
            {/* Treść opinii z obsługą akapitów */}
            <div className="min-h-[140px] flex flex-col justify-between">
              <div className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#2A2A2A] leading-relaxed mb-8 font-normal whitespace-pre-line">
                „{testimonials[currentIndex].text}”
              </div>

              {/* Sam autor opinii i kontrolki nawigacji */}
              <div className="flex items-center justify-between gap-4 pt-6 border-t border-[#9C1B33]/15">
                <div>
                  <h4 className="font-sans font-bold text-lg sm:text-xl text-[#9C1B33]">
                    {testimonials[currentIndex].author}
                  </h4>
                </div>

                {/* Przyciski nawigacji slidera */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-[#F5E5D6] border border-[#9C1B33]/20 text-[#9C1B33] hover:bg-[#9C1B33] hover:text-[#F5E5D6] transition-all duration-200 shadow-xs active:scale-90"
                    aria-label="Poprzednia opinia"
                    title="Poprzednia opinia"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-[#F5E5D6] border border-[#9C1B33]/20 text-[#9C1B33] hover:bg-[#9C1B33] hover:text-[#F5E5D6] transition-all duration-200 shadow-xs active:scale-90"
                    aria-label="Następna opinia"
                    title="Następna opinia"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Kropki wskaźnika opinii */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? 'w-7 bg-[#9C1B33]' 
                      : 'w-2 bg-[#9C1B33]/25 hover:bg-[#9C1B33]/50'
                  }`}
                  aria-label={`Przejdź do opinii ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
