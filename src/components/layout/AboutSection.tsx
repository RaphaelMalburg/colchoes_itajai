import React from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="w-full py-12 md:py-20 px-2 md:px-0 flex justify-center border-b border-var(--brand-main)" style={{ background: '#f6f8fa' }}>
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
          <Image
            src="/about-mattress.jpg"
            alt="Pessoa relaxando em cama confortável"
            width={400}
            height={320}
            className="rounded-2xl shadow-xl object-cover"
            priority
          />
        </div>
        {/* Right: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: 'var(--brand-main)' }}>Promessa de Qualidade para Seu Sono</h2>
          <p className="text-base md:text-lg font-light mb-6" style={{ color: '#3e5c59' }}>
            Na <span className="font-semibold" style={{ color: 'var(--brand-main)' }}>Colchões Itajaí</span>, acreditamos que um bom colchão transforma vidas. Unimos tecnologia, conforto e design para entregar noites perfeitas de descanso.
          </p>
          <p className="text-sm md:text-base mb-6" style={{ color: '#3e5c59' }}>
            Nossa linha exclusiva foi desenvolvida para oferecer suporte, adaptação ao corpo e durabilidade. Você merece acordar renovado todos os dias!
          </p>
          <a href="#sobre" className="inline-block rounded-full bg-[#FFC83D] font-bold px-8 py-3 text-base shadow-lg hover:bg-[#f8b800] transition-colors" style={{ color: 'var(--brand-main)' }}>Saiba Mais Sobre Nós</a>
        </div>
      </div>
    </section>
  );
}
