import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula",
    city: "Itajaí/SC",
    text: "O atendimento foi excelente e o colchão chegou rapidinho. Recomendo muito!",
    rating: 5,
  },
  {
    name: "Carlos Henrique",
    city: "Balneário Camboriú/SC",
    text: "Comprei minha cama box Ortobom e estou dormindo muito melhor. Loja de confiança!",
    rating: 5,
  },
  {
    name: "Mariana Silva",
    city: "Navegantes/SC",
    text: "Equipe super atenciosa e produtos de altíssima qualidade. Voltarei a comprar!",
    rating: 5,
  },
];

export function LandingTestimonials() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4" style={{ background: 'rgba(92, 141, 137, 0.07)' }}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: 'var(--brand-main)' }}>O que dizem nossos clientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white/90 rounded-2xl shadow-lg">
            <div className="flex gap-1 justify-center mt-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5" style={{ color: '#FFC83D', fill: '#FFC83D' }} />
              ))}
            </div>
            <p className="font-medium text-center mt-4 mb-2" style={{ color: '#3e5c59' }}>
              “{t.text}”
            </p>
            <span className="text-sm font-semibold block mb-4 text-center" style={{ color: 'var(--brand-main)' }}>{t.name} - {t.city}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
