import React from 'react';
import { Video, Calendar, BookOpen, HeartPulse, FileText, Check } from 'lucide-react';
import { MODULES_DATA } from '../data/content';
import { ModuleItem } from '../types';

export const WhatIsIncluded: React.FC = () => {
  const getTypeIcon = (type: ModuleItem['type']) => {
    switch (type) {
      case 'video':
        return <Video className="w-5 h-5 text-[#58734C]" />;
      case 'routine':
        return <Calendar className="w-5 h-5 text-[#58734C]" />;
      case 'guide':
        return <BookOpen className="w-5 h-5 text-[#58734C]" />;
      case 'pdf':
        return <FileText className="w-5 h-5 text-[#58734C]" />;
      default:
        return <HeartPulse className="w-5 h-5 text-[#58734C]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#F2ECE4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#58734C] bg-[#DDE5D7] px-4 py-1.5 rounded-full border border-[#B7C9B0]/40 inline-block">
            Conteúdo Completo
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#34495E] font-semibold tracking-tight">
            O que está incluso no Método Bebê Zen
          </h2>
          <p className="text-[#5D6D7E] text-base leading-relaxed">
            Tudo o que você precisa para criar uma rotina leve e cheia de afeto, no seu próprio ritmo.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES_DATA.map((module) => (
            <div
              key={module.id}
              className="bg-[#F9F7F2] rounded-[28px] p-6 border border-[#F2ECE4] shadow-soft shadow-card-hover flex flex-col justify-between"
            >
              <div className="space-y-4 text-left">
                {/* Module Badge & Type */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#58734C] bg-[#DDE5D7] px-3 py-1 rounded-full border border-[#B7C9B0]/30">
                    Módulo {module.number}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#7F8C8D] font-medium">
                    {getTypeIcon(module.type)}
                    <span>{module.durationOrPages}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#34495E]">
                    {module.title}
                  </h3>
                  <p className="text-xs text-[#58734C] font-semibold mt-0.5">
                    {module.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[#5D6D7E] text-xs sm:text-sm leading-relaxed">
                  {module.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 pt-2 border-t border-[#F2ECE4]">
                  {module.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#34495E]">
                      <Check className="w-3.5 h-3.5 text-[#58734C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 text-[11px] text-[#7F8C8D] font-medium flex items-center justify-between">
                <span>Formato 100% Digital</span>
                <span>Download & Vídeo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

