import React from 'react';
import { Sparkles, Heart, Smile, Shield, CheckCircle } from 'lucide-react';
import { SOLUTION_DATA } from '../data/content';

export const SolutionSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#58734C]" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-[#58734C]" />;
      case 'smile':
        return <Smile className="w-5 h-5 text-[#58734C]" />;
      default:
        return <Shield className="w-5 h-5 text-[#58734C]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FDFCF0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#58734C] bg-[#DDE5D7] px-4 py-1.5 rounded-full border border-[#B7C9B0]/40 inline-block shadow-xs">
            {SOLUTION_DATA.badge}
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-serif text-[#34495E] font-semibold tracking-tight">
            {SOLUTION_DATA.title}
          </h2>

          <p className="text-[#34495E] text-lg sm:text-xl font-serif italic leading-relaxed bg-white/80 p-6 sm:p-8 rounded-[32px] border border-[#F2ECE4] shadow-soft text-left sm:text-center">
            "{SOLUTION_DATA.mainExplanation}"
          </p>

          <p className="text-[#5D6D7E] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-2">
            {SOLUTION_DATA.secondaryText}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SOLUTION_DATA.benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-[32px] bg-white border border-[#F2ECE4] shadow-soft shadow-card-hover flex flex-col justify-between"
            >
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#DDE5D7] border border-[#B7C9B0]/30 flex items-center justify-center shrink-0">
                    {getIcon(benefit.icon)}
                  </div>
                  <span className="text-xs font-bold text-[#58734C] bg-[#DDE5D7]/60 px-3 py-0.5 rounded-full uppercase tracking-wide">
                    Benefício {index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-semibold text-[#34495E]">
                  {benefit.title}
                </h3>

                <p className="text-[#5D6D7E] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#F2ECE4] flex items-center gap-2 text-xs font-semibold text-[#58734C]">
                <CheckCircle className="w-4 h-4 text-[#B7C9B0]" />
                <span>Aplicado na rotina diária</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

