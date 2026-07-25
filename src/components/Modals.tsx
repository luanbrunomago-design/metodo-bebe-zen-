import React, { useState } from 'react';
import { X, Check, Copy, Shield, Lock, CreditCard, QrCode, Mail, Send, CheckCircle2, Heart } from 'lucide-react';
import { ModalState } from '../types';
import { OFFER_DATA } from '../data/content';

interface ModalsProps {
  modalState: ModalState;
  onClose: () => void;
}

export const Modals: React.FC<ModalsProps> = ({ modalState, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [copiedPix, setCopiedPix] = useState<boolean>(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);

  if (!modalState.isOpen || !modalState.type) return null;

  const mockPixCode = "00020126580014br.gov.bcb.pix0136metodobebezen-3700-1234-5678-0000520400005303986540537.005802BR5920Metodo Bebe Zen Cursos6009SAO PAULO62070503***6304E8A9";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(mockPixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutSuccess(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C3E50]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-[32px] max-w-lg w-full max-h-[90vh] overflow-y-auto border border-[#F2ECE4] shadow-2xl relative text-left p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F9F7F2] border border-[#F2ECE4] flex items-center justify-center text-[#7F8C8D] hover:text-[#34495E] transition-colors cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 1. TERMS OF USE */}
        {modalState.type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-[#58734C]">
              <Shield className="w-5 h-5" />
              <h3 className="text-xl font-serif font-semibold text-[#34495E]">
                Termos de Uso
              </h3>
            </div>

            <div className="text-[#5D6D7E] text-xs sm:text-sm leading-relaxed space-y-3 pt-2 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                Bem-vindo ao <strong>Método Bebê Zen</strong>. Ao adquirir ou utilizar este produto digital, você concorda com os termos aqui estabelecidos:
              </p>
              <h4 className="font-bold text-[#34495E] pt-1">1. Licença de Uso Pessoal</h4>
              <p>
                O conteúdo do curso (vídeo aulas, materiais em PDF e bônus) é de uso estritamente pessoal e intransferível. É proibida a reprodução, venda ou compartilhamento não autorizado.
              </p>
              <h4 className="font-bold text-[#34495E] pt-1">2. Caráter Educativo e Orientações Médicas</h4>
              <p>
                As técnicas de massagem e rotina de sono são educativas para promover bem-estar e afeto. Elas não substituem consultas, tratamentos ou diagnósticos do seu médico pediatra.
              </p>
              <h4 className="font-bold text-[#34495E] pt-1">3. Política de Cancelamento e Reembolso</h4>
              <p>
                Oferecemos garantia incondicional de 7 dias a contar da data da compra. Se solicitar o reembolso dentro deste prazo, devolveremos 100% do valor pago.
              </p>
            </div>

            <button
              onClick={onClose}
              className="mt-4 w-full bg-[#DDE5D7] text-[#58734C] font-semibold text-xs py-3.5 rounded-full border border-[#B7C9B0]/30 hover:bg-[#B7C9B0] hover:text-white transition-colors cursor-pointer"
            >
              Compreendi e Concordo
            </button>
          </div>
        )}

        {/* 2. PRIVACY POLICY */}
        {modalState.type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-[#58734C]">
              <Shield className="w-5 h-5" />
              <h3 className="text-xl font-serif font-semibold text-[#34495E]">
                Política de Privacidade
              </h3>
            </div>

            <div className="text-[#5D6D7E] text-xs sm:text-sm leading-relaxed space-y-3 pt-2 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                Sua privacidade e a segurança dos dados da sua família são prioridades fundamentais no <strong>Método Bebê Zen</strong>.
              </p>
              <h4 className="font-bold text-[#34495E] pt-1">1. Coleta de Dados Necessários</h4>
              <p>
                Coletamos apenas informações essenciais (como nome e endereço de e-mail) para liberar seu acesso à plataforma de alunos e enviar comprovantes de compra.
              </p>
              <h4 className="font-bold text-[#34495E] pt-1">2. Proteção de Dados</h4>
              <p>
                Não vendemos nem compartilhamos seus dados pessoais com terceiros. Todas as transações financeiras são processadas em ambiente criptografado e seguro.
              </p>
              <h4 className="font-bold text-[#34495E] pt-1">3. Comunicações por E-mail</h4>
              <p>
                Enviaremos apenas mensagens relacionadas ao seu curso, atualizações e orientações de apoio. Você pode se descadastrar de nossas mensagens a qualquer momento.
              </p>
            </div>

            <button
              onClick={onClose}
              className="mt-4 w-full bg-[#DDE5D7] text-[#58734C] font-semibold text-xs py-3.5 rounded-full border border-[#B7C9B0]/30 hover:bg-[#B7C9B0] hover:text-white transition-colors cursor-pointer"
            >
              Entendido
            </button>
          </div>
        )}

        {/* 3. CONTACT SUPPORT */}
        {modalState.type === 'contact' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-[#58734C]">
              <Mail className="w-5 h-5" />
              <h3 className="text-xl font-serif font-semibold text-[#34495E]">
                Fale com Nosso Atendimento
              </h3>
            </div>

            <p className="text-[#5D6D7E] text-xs sm:text-sm">
              Estamos aqui para te apoiar. Preencha o formulário abaixo ou fale direto pelo WhatsApp.
            </p>

            {contactSubmitted ? (
              <div className="p-6 bg-[#DDE5D7]/50 rounded-[24px] border border-[#B7C9B0]/30 text-center space-y-2 py-8">
                <CheckCircle2 className="w-10 h-10 text-[#58734C] mx-auto" />
                <h4 className="font-serif font-semibold text-[#34495E] text-base">Mensagem Enviada!</h4>
                <p className="text-xs text-[#5D6D7E]">
                  Agradecemos seu contato. Responderemos no seu e-mail em até 2 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#34495E] mb-1">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria Silva"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#F2ECE4] bg-[#F9F7F2] text-xs focus:outline-hidden focus:border-[#B7C9B0]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#34495E] mb-1">
                    Seu E-mail
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="maria@exemplo.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#F2ECE4] bg-[#F9F7F2] text-xs focus:outline-hidden focus:border-[#B7C9B0]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#34495E] mb-1">
                    Sua Mensagem
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Como podemos te ajudar hoje?"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#F2ECE4] bg-[#F9F7F2] text-xs focus:outline-hidden focus:border-[#B7C9B0]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B7C9B0] hover:bg-[#A5B89D] text-white font-semibold text-xs py-3.5 rounded-full shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* 4. CHECKOUT SIMULATOR */}
        {modalState.type === 'checkout' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-[#F2ECE4] pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#58734C] bg-[#DDE5D7] px-3 py-0.5 rounded-full">
                  Checkout Seguro
                </span>
                <h3 className="text-xl font-serif font-semibold text-[#34495E] mt-1">
                  Método Bebê Zen
                </h3>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-[#7F8C8D] font-medium">Valor com Desconto</p>
                <p className="text-xl font-extrabold text-[#34495E] font-sans tabular-nums">R$ {OFFER_DATA.currentPrice}</p>
              </div>
            </div>

            {checkoutSuccess ? (
              <div className="py-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#DDE5D7] text-[#58734C] flex items-center justify-center mx-auto shadow-xs border border-[#B7C9B0]/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-2xl font-serif font-semibold text-[#34495E]">
                    Inscrição Confirmada!
                  </h4>
                  <p className="text-xs text-[#5D6D7E] max-w-sm mx-auto">
                    Enviamos os seus dados de acesso ao curso para o e-mail{' '}
                    <strong className="text-[#34495E]">{userEmail || 'seu e-mail'}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-[#DDE5D7]/50 rounded-[20px] border border-[#B7C9B0]/30 text-left text-xs text-[#34495E] space-y-2">
                  <p className="font-semibold text-[#58734C] flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-[#58734C]" />
                    <span>Boas-vindas ao Método Bebê Zen</span>
                  </p>
                  <p>
                    Seu acesso aos vídeos, guias em PDF e áudios relaxantes está liberado. Você já pode iniciar assistindo à primeira aula!
                  </p>
                </div>

                <button
                  onClick={() => {
                    setCheckoutSuccess(false);
                    onClose();
                  }}
                  className="w-full bg-[#B7C9B0] hover:bg-[#A5B89D] text-white font-semibold text-xs py-3.5 rounded-full transition-colors uppercase tracking-wider"
                >
                  Concluir e Ir para o Curso
                </button>
              </div>
            ) : (
              <form onSubmit={handleSimulatePayment} className="space-y-4">
                {/* Email input for access delivery */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-[#34495E]">
                    Seu e-mail para receber o curso
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="digite.seu.email@exemplo.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#F2ECE4] bg-[#F9F7F2] text-xs focus:outline-hidden focus:border-[#B7C9B0]"
                  />
                  <p className="text-[10px] text-[#7F8C8D]">
                    Enviaremos o login e senha de acesso direto para esta caixa de entrada.
                  </p>
                </div>

                {/* Payment method selector */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#34495E]">
                    Forma de Pagamento
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        paymentMethod === 'pix'
                          ? 'bg-[#DDE5D7] border-[#B7C9B0] text-[#58734C] shadow-xs'
                          : 'bg-[#F9F7F2] border-[#F2ECE4] text-[#5D6D7E] hover:border-[#DDE5D7]'
                      }`}
                    >
                      <QrCode className="w-4 h-4 text-[#58734C]" />
                      <span>PIX (Instantâneo)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        paymentMethod === 'card'
                          ? 'bg-[#DDE5D7] border-[#B7C9B0] text-[#58734C] shadow-xs'
                          : 'bg-[#F9F7F2] border-[#F2ECE4] text-[#5D6D7E] hover:border-[#DDE5D7]'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-[#58734C]" />
                      <span>Cartão de Crédito</span>
                    </button>
                  </div>
                </div>

                {/* PIX view */}
                {paymentMethod === 'pix' && (
                  <div className="p-4 bg-[#F9F7F2] rounded-[20px] border border-[#F2ECE4] space-y-3 text-center">
                    <p className="text-xs text-[#5D6D7E] font-medium">
                      Chave PIX gerada para a sua inscrição:
                    </p>

                    <div className="bg-white p-3 rounded-xl border border-[#DDE5D7] flex items-center justify-between gap-2">
                      <code className="text-[10px] text-[#34495E] font-mono truncate max-w-[240px]">
                        {mockPixCode}
                      </code>
                      <button
                        type="button"
                        onClick={handleCopyPix}
                        className="bg-[#DDE5D7] text-[#58734C] hover:bg-[#B7C9B0] hover:text-white text-[11px] font-bold px-3 py-1.5 rounded-lg border border-[#B7C9B0]/30 flex items-center gap-1 cursor-pointer shrink-0 transition-colors"
                      >
                        {copiedPix ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#58734C]" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#58734C]" />
                            <span>Copiar PIX</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-[#7F8C8D]">
                      Após copiar e pagar pelo app do seu banco, clique no botão abaixo para concluir.
                    </p>
                  </div>
                )}

                {/* Card view */}
                {paymentMethod === 'card' && (
                  <div className="p-4 bg-[#F9F7F2] rounded-[20px] border border-[#F2ECE4] space-y-2 text-xs">
                    <div>
                      <label className="block text-[11px] font-medium text-[#5D6D7E] mb-1">
                        Número do Cartão
                      </label>
                      <input
                        type="text"
                        required={paymentMethod === 'card'}
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-3 py-2 rounded-lg border border-[#F2ECE4] bg-white text-xs"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-medium text-[#5D6D7E] mb-1">
                          Validade
                        </label>
                        <input
                          type="text"
                          required={paymentMethod === 'card'}
                          placeholder="MM/AA"
                          className="w-full px-3 py-2 rounded-lg border border-[#F2ECE4] bg-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-[#5D6D7E] mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          required={paymentMethod === 'card'}
                          placeholder="123"
                          className="w-full px-3 py-2 rounded-lg border border-[#F2ECE4] bg-white text-xs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#B7C9B0] hover:bg-[#A5B89D] text-white font-semibold text-sm py-4 rounded-full shadow-lg shadow-[#B7C9B0]/25 transition-colors flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <Lock className="w-4 h-4 text-white" />
                  <span>Confirmar Inscrição por R$ {OFFER_DATA.currentPrice}</span>
                </button>

                <div className="text-center text-[11px] text-[#7F8C8D] flex items-center justify-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#58734C]" />
                  <span>Ambiente protegido com criptografia de 256 bits</span>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

