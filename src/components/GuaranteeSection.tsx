import React from 'react';
import { ShieldCheck, RotateCcw } from 'lucide-react';
import { GUARANTEE_DATA } from '../data/content';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-[#F2ECE4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F9F7F2] border border-[#F2ECE4] rounded-[32px] p-6 sm:p-10 shadow-soft flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left">
          {/* Shield Badge */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#DDE5D7] border-2 border-[#B7C9B0]/40 flex items-center justify-center text-[#58734C] shrink-0 shadow-xs">
            <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          {/* Text Content */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#58734C] bg-[#DDE5D7] px-3.5 py-1 rounded-full border border-[#B7C9B0]/30">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Garantia de Satisfação de 7 Dias</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#34495E]">
              {GUARANTEE_DATA.title}
            </h3>

            <p className="text-[#5D6D7E] text-sm sm:text-base leading-relaxed">
              "{GUARANTEE_DATA.message}"
            </p>

            <p className="text-xs text-[#7F8C8D] font-medium pt-1">
              Sem perguntas constrangedoras, sem letras miúdas. Seu bem-estar e a paz da sua família estão em primeiro lugar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

