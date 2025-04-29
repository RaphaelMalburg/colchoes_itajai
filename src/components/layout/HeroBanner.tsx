import React from "react";
import Image from "next/image";

export function HeroBanner() {
  return (
    <section className="relative w-full min-h-[1px] sm:min-h-[500px] flex flex-col justify-end px-0 pt-0 pb-0" style={{ background: 'var(--brand-main)' }}>
      {/* Imagem de colchão atrás */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-end justify-end pointer-events-none">
        <Image
          src="/camaHero.png"
          alt="Colchão Ortobom visto de cima"
          fill
          className="object-contain object-right-bottom opacity-95 drop-shadow-2xl mt-20 md:mt-0"
          priority
          sizes="(max-width: 640px) 90vw, 60vw"
        />
      </div>
      {/* Conteúdo hero */}
      <div className="relative z-10 flex flex-col items-start justify-start h-[340px] sm:h-[600px] px-2 xs:px-4 sm:px-28 w-full max-w-7xl mb-8 mt-4 sm:mt-0">
        {/* Slogan e CTA */}
        <div className="mb-4 mt-2 xs:mt-4 sm:mt-8 max-w-[94vw] sm:max-w-xl">
          <span className="block text-[var(--brand-main)] text-sm sm:text-base font-semibold mb-2 tracking-widest font-[var(--font-poppins)]">Exclusivo em Itajaí</span>
          <h2 className="text-white text-2xl sm:text-5xl font-bold leading-tight mb-2 sm:mb-4 font-[var(--font-poppins)] drop-shadow-[0_2px_16px_rgba(0,0,0,0.25)] md:drop-shadow-[0_4px_32px_rgba(0,0,0,0.32)]">Sono premium é Ortobom</h2>
          <p className="text-white/90 text-base sm:text-lg mb-3 sm:mb-8 font-[var(--font-poppins)] drop-shadow-[0_2px_16px_rgba(0,0,0,0.19)] md:drop-shadow-[0_4px_32px_rgba(0,0,0,0.28)]">Descubra colchões, camas e acessórios com tecnologia, conforto e design para transformar suas noites.</p>
          <a href="#produtos" className="inline-block rounded-full bg-white text-[var(--brand-main)] font-bold px-7 py-3 sm:px-10 sm:py-4 text-base sm:text-lg shadow-lg hover:bg-[#FFC83D] hover:text-white transition-colors font-[var(--font-poppins)]">Ver Produtos</a>
        </div>
        {/* Nome estilizado Colchões Itajaí */}
        <span
          className="font-[var(--font-quicksand)] text-[45px] xs:text-[48px] md:text-[100px] lg:text-[130px] xl:text-[220px] tracking-tight leading-none text-[#FFC83D] drop-shadow-[0_4px_24px_rgba(0,0,0,0.22)] select-none opacity-95 -ml-1 xs:-ml-2 sm:-ml-10 mt-2 mb-0 whitespace-pre z-20"
          style={{ fontWeight: 500, lineHeight: '1', letterSpacing: '-0.01em' }}
        >
          Colchões Itajaí
        </span>
      </div>
    </section>
  );
}
