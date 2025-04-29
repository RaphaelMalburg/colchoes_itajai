import React from "react";
import Image from "next/image";

export function LandingProcess() {
  return (
    <section className="w-full py-16 px-2 flex flex-col items-center" style={{ background: 'var(--brand-main)' }}>
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left: Title and Steps */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10" style={{ color: '#fff' }}>Como funciona nossa experiência de compra</h2>
          <ol className="space-y-6 md:space-y-8">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full font-bold flex items-center justify-center text-xl shadow-md" style={{ background: '#fff', color: 'var(--brand-main)' }}>1</span>
              <div>
                <span className="font-semibold text-lg" style={{ color: '#fff' }}>Atendimento Personalizado</span>
                <p className="text-base" style={{ color: 'rgba(255,255,255,0.92)' }}>Nossa equipe entende suas necessidades e indica o colchão ideal para seu perfil e preferências.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full font-bold flex items-center justify-center text-xl shadow-md" style={{ background: '#fff', color: 'var(--brand-main)' }}>2</span>
              <div>
                <span className="font-semibold text-lg" style={{ color: '#fff' }}>Produção e Qualidade</span>
                <p className="text-base" style={{ color: 'rgba(255,255,255,0.92)' }}>Fabricamos seu colchão com tecnologia de ponta, materiais premium e rigoroso controle de qualidade.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full font-bold flex items-center justify-center text-xl shadow-md" style={{ background: '#fff', color: 'var(--brand-main)' }}>3</span>
              <div>
                <span className="font-semibold text-lg" style={{ color: '#fff' }}>Entrega Rápida e Segura</span>
                <p className="text-base" style={{ color: 'rgba(255,255,255,0.92)' }}>Levamos seu colchão até você com agilidade e todo o cuidado, garantindo uma experiência perfeita do início ao fim.</p>
              </div>
            </li>
          </ol>
        </div>
        {/* Right: Image Accent */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/process-mattress.png"
            alt="Processo de criação do colchão"
            width={400}
            height={280}
            className="rounded-2xl shadow-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
