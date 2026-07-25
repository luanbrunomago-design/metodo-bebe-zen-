import React, { useState } from 'react';
import { HeaderHero } from './components/HeaderHero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { WhatIsIncluded } from './components/WhatIsIncluded';
import { BonusSection } from './components/BonusSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { ModalState } from './types';

export default function App() {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    type: null,
  });

  const handleOpenModal = (type: ModalState['type']) => {
    setModalState({
      isOpen: true,
      type,
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      type: null,
    });
  };

  const handleCtaClick = () => {
    // Smooth scroll to offer section or open checkout modal directly
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenModal('checkout');
    }
  };

  return (
    <div className="min-h-screen bg-warm-canvas text-stone-800 antialiased selection:bg-emerald-100 selection:text-emerald-900 font-sans">
      {/* 1. Header / Hero Section */}
      <HeaderHero onCtaClick={handleCtaClick} />

      {/* 2. Problem Section */}
      <ProblemSection />

      {/* 3. Solution Presentation & Benefits */}
      <SolutionSection />

      {/* 4. What's Included / Course Modules */}
      <WhatIsIncluded />

      {/* 5. Bonus Section & Ambient Audio Demo */}
      <BonusSection />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. Offer & Pricing Card */}
      <OfferSection onCtaClick={() => handleOpenModal('checkout')} />

      {/* 8. Guarantee */}
      <GuaranteeSection />

      {/* 9. FAQ Section */}
      <FaqSection />

      {/* 10. Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* 11. Modals (Terms, Privacy, Contact, Checkout) */}
      <Modals modalState={modalState} onClose={handleCloseModal} />
    </div>
  );
}
