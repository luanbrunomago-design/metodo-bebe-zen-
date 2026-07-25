import React from 'react';
import { Mail, Shield, FileText } from 'lucide-react';
import { FOOTER_DATA } from '../data/content';
import { ModalState } from '../types';

interface FooterProps {
  onOpenModal: (type: ModalState['type']) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer id="footer-contact" className="bg-[#2C3E50] text-[#D5DBDB] py-12 md:py-16 border-t border-[#34495E]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 pb-12 border-b border-[#34495E]">
          {/* Brand & Description */}
          <div className="md:col-span-6 space-y-3 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#B7C9B0] text-white flex items-center justify-center font-serif italic font-bold">
                Z
              </div>
              <span className="font-serif font-semibold text-xl text-white tracking-tight">
                Método Bebê Zen
              </span>
            </div>
            <p className="text-[#A6ACAF] text-xs sm:text-sm leading-relaxed max-w-md">
              Uma abordagem acolhedora de massagens e rotina relaxante para trazer paz e conexão aos primeiros meses de vida do seu bebê.
            </p>
          </div>

          {/* Links & Contact */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B7C9B0]">
              Links Úteis
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  onClick={() => onOpenModal('terms')}
                  className="hover:text-[#B7C9B0] transition-colors cursor-pointer flex items-center gap-1.5 text-[#BDC3C7]"
                >
                  <FileText className="w-3.5 h-3.5 text-[#B7C9B0]" />
                  <span>Termos de Uso</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('privacy')}
                  className="hover:text-[#B7C9B0] transition-colors cursor-pointer flex items-center gap-1.5 text-[#BDC3C7]"
                >
                  <Shield className="w-3.5 h-3.5 text-[#B7C9B0]" />
                  <span>Política de Privacidade</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('contact')}
                  className="hover:text-[#B7C9B0] transition-colors cursor-pointer flex items-center gap-1.5 text-[#BDC3C7]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B7C9B0]" />
                  <span>Fale Conosco</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Support Contacts */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B7C9B0]">
              Atendimento ao Aluno
            </h4>
            <div className="space-y-2 text-xs text-[#BDC3C7]">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B7C9B0] shrink-0" />
                <span>{FOOTER_DATA.contactEmail}</span>
              </p>
              <span className="text-[11px] text-[#7F8C8D] block pt-1">
                Segunda a Sexta, das 09h às 18h
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="space-y-4 text-center md:text-left text-[11px] text-[#7F8C8D] leading-relaxed">
          <p>{FOOTER_DATA.disclaimer}</p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-[#34495E]">
            <p>{FOOTER_DATA.copyright}</p>
            <p className="text-[#95A5A6]">Marca de Cuidado Infantil Confiável</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

