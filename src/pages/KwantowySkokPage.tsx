import React, { useState } from 'react';
import { useOrphanFixer } from '../utils/useOrphanFixer';
import { scrollToSection } from '../utils/scrollHelper';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionSection } from '../components/SolutionSection';
import { OfferSection } from '../components/OfferSection';
import { TargetAudienceSection } from '../components/TargetAudienceSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { MethodologySection } from '../components/MethodologySection';
import { AboutMeSection } from '../components/AboutMeSection';
import { InvestmentOfferSection } from '../components/InvestmentOfferSection';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { FaqSection } from '../components/FaqSection';
import { MoreReviewsSection } from '../components/MoreReviewsSection';
import { ClosingInvitationSection } from '../components/ClosingInvitationSection';
import { RegistrationModal } from '../components/RegistrationModal';
import { Footer } from '../components/Footer';

export const KwantowySkokPage: React.FC = () => {
  useOrphanFixer();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Warsztat KWANTOWY SKOK (288 PLN)');

  const handleOpenModal = (plan?: string) => {
    if (plan) setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleScrollToInvestment = () => {
    scrollToSection('inwestycja');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F5E5D6] text-[#2A2A2A] selection:bg-[#9C1B33] selection:text-[#F5E5D6]">
      {/* Pasek nawigacyjny */}
      <Navbar onJoinClick={handleScrollToInvestment} />

      <main className="flex-1">
        {/* HERO */}
        <HeroSection onJoinClick={handleScrollToInvestment} />

        {/* SEKCJA 2: Czy to jest dla Ciebie? */}
        <ProblemSection />

        {/* SEKCJA 3: OTWÓRZ SIĘ NA SZCZĘŚCIE BEZWARUNKOWE. WSZYSTKO INNE ZOSTANIE CI DANE */}
        <SolutionSection onExploreOfferClick={handleScrollToInvestment} />

        {/* SEKCJA 4: Zapraszam Cię na 3-tygodniowy warsztat on-line na żywo... */}
        <OfferSection onSelectPlan={() => handleScrollToInvestment()} />

        {/* SEKCJA 5: DLA KOGO JEST TEN TRENING? */}
        <TargetAudienceSection />

        {/* SEKCJA 6: DZIĘKI TEMU TRENINGOWI: */}
        <BenefitsSection onJoinClick={handleScrollToInvestment} />

        {/* SEKCJA 7: JAK TEGO DOŚWIADCZYSZ? */}
        <MethodologySection onJoinClick={handleScrollToInvestment} />

        {/* SEKCJA 8: O MNIE + SLIDER OPINII */}
        <AboutMeSection />

        {/* SEKCJA 9: SEKCJA OFERTA (TWOJA INWESTYCJA W SIEBIE, BLIK, PRZELEW, MESSENGER) */}
        <InvestmentOfferSection />

        {/* SEKCJA 10: FINALNE CTA */}
        <FinalCtaSection onJoinClick={handleScrollToInvestment} />

        {/* SEKCJA 11: FAQ */}
        <FaqSection />

        {/* SEKCJA 12: WIĘCEJ OPINII (opinia9 - opinia16) */}
        <MoreReviewsSection />

        {/* OSTATNIA SEKCJA PRZED STOPKĄ: ZAPROSZENIE MAGDALENY */}
        <ClosingInvitationSection />
      </main>

      {/* Stopka serwisu */}
      <Footer />

      {/* Modal zapisu / rezerwacji */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
};
