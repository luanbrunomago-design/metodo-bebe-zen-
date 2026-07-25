import React from 'react';
import { Sparkles, ShieldCheck, Zap, Video, CheckCircle2 } from 'lucide-react';
import { HERO_DATA } from '../data/content';

interface HeaderHeroProps {
  onCtaClick?: () => void;
}

export const HeaderHero: React.FC<HeaderHeroProps> = () => {
  return (
    <header className="relative bg-warm-canvas pt-4 pb-16 md:py-16 overflow-hidden">
      {/* Gentle background accent shapes in Natural Tones */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#DDE5D7] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#E2B4BD]/20 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Navbar */}
        <nav className="flex items-center justify-between py-3 mb-8 md:mb-14 border-b border-[#F2ECE4]">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#B7C9B0] flex items-center justify-center text-white shadow-sm italic font-serif text-xl">
              Z
            </div>
            <div>
              <span className="font-serif font-semibold text-xl text-[#5D6D7E] tracking-tight block leading-none">
                Método Bebê Zen
              </span>
              <span className="text-[11px] text-[#7F8C8D] font-medium tracking-wider uppercase">
                Cuidado Integral & Conexão
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5D6D7E] bg-white/80 backdrop-blur-xs px-4 py-1.5 rounded-full border border-[#F2ECE4]">
            <span className="w-2 h-2 rounded-full bg-[#B7C9B0] animate-pulse" />
            {HERO_DATA.targetAge}
          </div>
        </nav>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Soft Target Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDE5D7] border border-[#B7C9B0]/40 text-[#58734C] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#58734C]" />
              <span>{HERO_DATA.targetAge} • Cuidado Integral</span>
            </div>

            {/* Main Product Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#34495E] leading-[1.12] font-semibold tracking-tight">
              Cultive momentos de <span className="italic text-[#8FA885]">paz e conexão</span> com seu bebê.
            </h1>

            {/* Subtitle */}
            <p className="text-[#5D6D7E] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              {HERO_DATA.subtitle}
            </p>

            {/* Trust Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-2 border-t border-[#F2ECE4] text-xs font-medium text-[#5D6D7E]">
              <div className="flex items-center gap-1.5">
                <Video className="w-4 h-4 text-[#8FA885] shrink-0" />
                <span>100% On-line</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#8FA885] shrink-0" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#8FA885] shrink-0" />
                <span>7 Dias de Garantia</span>
              </div>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame Card */}
              <div className="p-3.5 bg-white/80 backdrop-blur-xs rounded-[32px] shadow-soft border border-[#F2ECE4] relative overflow-hidden">
                <img
                  src={HERO_DATA.heroImage}
                  alt={HERO_DATA.heroImageAlt}
                  className="w-full h-80 sm:h-96 object-cover rounded-[24px]"
                />
                
                {/* Floating Soft Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#DDE5D7] shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#DDE5D7] flex items-center justify-center text-[#58734C] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#34495E]">
                      Rotina de Massagens e Sono
                    </p>
                    <p className="text-[11px] text-[#7F8C8D]">
                      Passo a passo em vídeos curtos e acolhedores
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

