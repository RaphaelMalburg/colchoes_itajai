import React from "react";
import { Award, CheckCircle, Truck, Leaf, Shield, Handshake } from "lucide-react";
import Image from "next/image";

export function Differentials() {
  return (
    <section className="w-full py-16 px-2 flex flex-col items-center border-b border-var(--brand-main)" style={{ background: '#f6f8fa' }}>
      <div className="max-w-6xl w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: 'var(--brand-main)' }}>Por que escolher nossos produtos?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full mb-8">
          <div className="flex flex-col items-center text-center gap-3 p-4">
            <Award className="w-10 h-10" style={{ color: 'var(--brand-main)' }} />
            <span className="font-semibold text-lg" style={{ color: 'var(--brand-main)' }}>80+ Anos de Experiência</span>
            <span className="text-base" style={{ color: '#3e5c59' }}>Temos mais de 80 anos de tradição em fabricação.</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-4">
            <CheckCircle className="w-10 h-10" style={{ color: 'var(--brand-main)' }} />
            <span className="font-semibold text-lg" style={{ color: 'var(--brand-main)' }}>Nosso Garantia</span>
            <span className="text-base" style={{ color: '#3e5c59' }}>Nossos colchões não possuem limite de peso.</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-4">
            <Truck className="w-10 h-10" style={{ color: 'var(--brand-main)' }} />
            <span className="font-semibold text-lg" style={{ color: 'var(--brand-main)' }}>Período de Teste em Casa</span>
            <span className="text-base" style={{ color: '#3e5c59' }}>Todos os produtos são testados para alérgicos.</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-4">
            <Leaf className="w-10 h-10" style={{ color: 'var(--brand-main)' }} />
            <span className="font-semibold text-lg" style={{ color: 'var(--brand-main)' }}>Eco-Friendly</span>
            <span className="text-base" style={{ color: '#3e5c59' }}>Materiais orgânicos, 7% passa pelo colchão.</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-4">
            <Handshake className="w-10 h-10" style={{ color: 'var(--brand-main)' }} />
            <span className="font-semibold text-lg" style={{ color: 'var(--brand-main)' }}>Natureza Artesanal</span>
            <span className="text-base" style={{ color: '#3e5c59' }}>Desenvolvido por especialistas ortopédicos.</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-4">
            <Shield className="w-10 h-10" style={{ color: 'var(--brand-main)' }} />
            <span className="font-semibold text-lg" style={{ color: 'var(--brand-main)' }}>Colchão Certificado</span>
            <span className="text-base" style={{ color: '#3e5c59' }}>Substância refrescante até 5º a menos.</span>
          </div>
        </div>
        <div className="w-full flex justify-start mt-8">
          <Image
            src="/differentials-mattress.png"
            alt="Colchão destaque"
            width={320}
            height={100}
            className="object-contain drop-shadow-lg -mb-8 -ml-8"
            priority
          />
        </div>
      </div>
    </section>
  );
}
