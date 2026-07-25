import React from 'react';
import { Check, Heart, ShieldCheck, Zap, Lock, Sparkles } from 'lucide-react';
import { OFFER_DATA } from '../data/content';

interface OfferSectionProps {
  onCtaClick: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-[#FDFCF0] relative overflow-hidden">
      {/* Gentle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DDE5D7]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#58734C] bg-[#DDE5D7] px-4 py-1.5 rounded-full border border-[#B7C9B0]/40 inline-block shadow-xs">
            Acesso Imediato
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#34495E] font-semibold tracking-tight">
            Comece hoje mesmo a transformar a rotina do seu bebê
          </h2>
          <p className="text-[#5D6D7E] text-base leading-relaxed">
            Uma oportunidade especial com valor promocional para garantir seu acesso completo e todos os bônus.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-[32px] border border-[#F2ECE4] shadow-soft overflow-hidden">
          {/* Top Banner */}
          <div className="bg-[#B7C9B0] text-white px-6 py-3.5 text-center flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-white" />
            <span>OFERTA ESPECIAL: Curso Completo + 3 Bônus Exclusivos</span>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Included List */}
            <div className="md:col-span-7 space-y-4 text-left">
              <h3 className="text-2xl font-serif font-semibold text-[#34495E]">
                {OFFER_DATA.title}
              </h3>
              <p className="text-[#5D6D7E] text-xs sm:text-sm leading-relaxed">
                {OFFER_DATA.subtitle}
              </p>

              <div className="pt-2">
                <p className="text-xs font-bold text-[#34495E] uppercase tracking-wider mb-3">
                  Tudo o que está incluso no seu acesso:
                </p>
                <ul className="space-y-2.5">
                  {OFFER_DATA.includedItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#34495E]">
                      <div className="w-4 h-4 rounded-full bg-[#DDE5D7] flex items-center justify-center text-[#58734C] shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Price Box & Button */}
            <div className="md:col-span-5 bg-[#F9F7F2] p-6 sm:p-8 rounded-[24px] border border-[#F2ECE4] text-center space-y-5 shadow-xs">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#58734C] bg-[#DDE5D7] px-3 py-1 rounded-full">
                {OFFER_DATA.savingsText}
              </span>

              {/* Price display */}
              <div className="space-y-1.5 py-1">
                <p className="text-xs text-[#7F8C8D] font-medium tracking-wide">
                  De <span className="line-through decoration-[#7F8C8D]/60">R$ {OFFER_DATA.originalPrice}</span> por apenas
                </p>
                <div className="flex items-baseline justify-center gap-1.5 font-sans">
                  <span className="text-lg font-bold text-[#34495E]">R$</span>
                  <span className="text-5xl font-extrabold text-[#34495E] tracking-tight tabular-nums">
                    {OFFER_DATA.currentPrice}
                  </span>
                </div>
                <p className="text-xs text-[#34495E] font-semibold">
                  à vista no PIX ou Cartão
                </p>
                <p className="text-xs text-[#7F8C8D] font-normal">
                  ou {OFFER_DATA.installments}
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={onCtaClick}
                id="offer-cta-button"
                className="w-full bg-[#B7C9B0] hover:bg-[#A5B89D] text-white font-semibold text-base sm:text-lg px-6 py-4 rounded-full shadow-lg shadow-[#B7C9B0]/25 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>{OFFER_DATA.ctaText}</span>
                <Heart className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform" />
              </button>

              {/* Trust badges */}
              <div className="space-y-2 pt-2 border-t border-[#F2ECE4] text-[11px] text-[#7F8C8D]">
                <div className="flex items-center justify-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#58734C]" />
                  <span>Pagamento 100% Seguro</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#58734C]" />
                  <span>Acesso enviado imediatamente ao e-mail</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#58734C]" />
                  <span>Garantia incondicional de 7 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

