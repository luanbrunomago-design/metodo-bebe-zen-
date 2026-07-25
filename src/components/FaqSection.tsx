import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-20 bg-[#FDFCF0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#58734C] bg-[#DDE5D7] px-4 py-1.5 rounded-full border border-[#B7C9B0]/40 inline-block">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#34495E] font-semibold tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-[#5D6D7E] text-base leading-relaxed">
            Respostas simples para as dúvidas mais comuns dos pais antes de começar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-[24px] border border-[#F2ECE4] overflow-hidden shadow-soft transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F9F7F2]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-semibold text-[#34495E] text-base sm:text-lg flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#58734C] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7F8C8D] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#58734C]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-6 text-[#5D6D7E] text-sm leading-relaxed border-t border-[#F2ECE4] bg-[#F9F7F2]/50 text-left">
                    <p className="pl-8">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA box */}
        <div className="mt-10 p-6 rounded-[28px] bg-[#DDE5D7]/50 border border-[#B7C9B0]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B7C9B0] text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#34495E]">
                Ficou com alguma outra dúvida?
              </p>
              <p className="text-xs text-[#5D6D7E]">
                Nossa equipe de suporte está pronta para te atender com carinho.
              </p>
            </div>
          </div>

          <a
            href="#footer-contact"
            className="text-xs font-bold text-[#58734C] bg-white px-5 py-2.5 rounded-full border border-[#DDE5D7] hover:bg-[#DDE5D7] transition-colors whitespace-nowrap shadow-xs uppercase tracking-wide"
          >
            Falar com suporte
          </a>
        </div>
      </div>
    </section>
  );
};

