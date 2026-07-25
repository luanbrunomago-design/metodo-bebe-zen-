import React from 'react';
import { Moon, BatteryCharging, HeartPulse, HelpCircle, HeartHandshake } from 'lucide-react';
import { PROBLEM_DATA } from '../data/content';

export const ProblemSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'moon':
        return <Moon className="w-5 h-5 text-[#58734C]" />;
      case 'battery-charging':
        return <BatteryCharging className="w-5 h-5 text-[#58734C]" />;
      case 'heart-pulse':
        return <HeartPulse className="w-5 h-5 text-[#58734C]" />;
      default:
        return <HelpCircle className="w-5 h-5 text-[#58734C]" />;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white border-y border-[#F2ECE4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#58734C] bg-[#DDE5D7] px-4 py-1.5 rounded-full border border-[#B7C9B0]/40 inline-block">
            {PROBLEM_DATA.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#34495E] font-semibold tracking-tight">
            {PROBLEM_DATA.title}
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PROBLEM_DATA.painPoints.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-[24px] bg-[#F9F7F2] border border-[#F2ECE4] shadow-soft flex items-start gap-4 transition-all duration-200 hover:border-[#DDE5D7]"
            >
              <div className="p-3.5 rounded-2xl bg-white border border-[#DDE5D7] shrink-0">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-1.5 text-left">
                <h3 className="font-serif font-semibold text-[#34495E] text-base sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-[#5D6D7E] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Welcoming Reassuring Quote Box */}
        <div className="bg-[#E2B4BD]/10 border border-[#E2B4BD]/25 p-6 sm:p-8 rounded-[32px] text-center max-w-3xl mx-auto relative shadow-xs">
          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#E2B4BD] mx-auto mb-3 shadow-xs border border-[#E2B4BD]/30">
            <HeartHandshake className="w-5 h-5 text-[#C48B96]" />
          </div>
          <p className="text-lg sm:text-xl font-serif italic text-[#34495E] leading-relaxed max-w-2xl mx-auto">
            "{PROBLEM_DATA.quote}"
          </p>
          <span className="block mt-3 text-xs font-bold uppercase tracking-widest text-[#7F8C8D]">
            Acolhimento & Método Bebê Zen
          </span>
        </div>
      </div>
    </section>
  );
};

