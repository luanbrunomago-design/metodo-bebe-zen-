import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FDFCF0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#58734C] bg-[#DDE5D7] px-4 py-1.5 rounded-full border border-[#B7C9B0]/40 inline-block">
            Histórias de Transformação
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#34495E] font-semibold tracking-tight">
            O que dizem os pais que aplicaram o método
          </h2>
          <p className="text-[#5D6D7E] text-base leading-relaxed">
            Relatos reais de mães e pais que conquistaram noites mais tranquilas e momentos inesquecíveis de carinho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[28px] p-6 sm:p-7 border border-[#F2ECE4] shadow-soft flex flex-col justify-between text-left relative"
            >
              <div className="space-y-4">
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#B7C9B0]/40" />
                </div>

                {/* Highlight Title */}
                <h3 className="font-serif font-semibold text-[#34495E] text-base leading-snug">
                  "{testimonial.highlight}"
                </h3>

                {/* Quote Text */}
                <p className="text-[#5D6D7E] text-xs sm:text-sm leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="mt-6 pt-4 border-t border-[#F2ECE4] flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#DDE5D7] shadow-xs shrink-0"
                />
                <div>
                  <h4 className="text-sm font-semibold text-[#34495E] leading-tight">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-[#5D6D7E] mt-0.5">
                    <Heart className="w-3 h-3 text-[#E2B4BD] fill-[#E2B4BD]" />
                    <span>{testimonial.babyName} ({testimonial.babyAge})</span>
                  </div>
                  <span className="text-[11px] text-[#7F8C8D] block">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust banner below testimonials */}
        <div className="mt-12 text-center bg-[#DDE5D7]/50 p-4 rounded-full border border-[#B7C9B0]/30 max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-[#34495E] font-medium">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B7C9B0]" />
          <span>Avaliação média de 4,9 estrelas baseada em mais de 2.800 inscrições.</span>
        </div>
      </div>
    </section>
  );
};

