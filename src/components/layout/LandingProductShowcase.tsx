import React from "react";
import { ProductCarousel } from "./ProductCarousel";
import Image from "next/image";

export function LandingProductShowcase() {
  return (
    <section className="w-full max-w-6xl mx-auto rounded-3xl bg-white shadow-xl mt-12 px-4 sm:px-12 py-12 flex flex-col items-center mt-0" style={{ boxShadow: '0 4px 32px 0 rgba(92, 141, 137, 0.10)' }}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center" style={{ color: 'var(--brand-main)', letterSpacing: '-0.01em' }}>Destaques Ortobom</h2>
      <p className="text-lg mb-10 text-center max-w-2xl" style={{ color: '#3e5c59', fontWeight: 400 }}>
        Conheça nossos colchões e camas mais procurados: qualidade, tecnologia e conforto para transformar seu descanso. Escolha o seu e sinta a diferença Ortobom!
      </p>
      <div className="w-full flex flex-col items-center">
        <ProductCarousel />
      </div>
    </section>
  );
}
