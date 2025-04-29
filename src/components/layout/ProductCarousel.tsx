"use client";

import React from "react";
import Image from "next/image";

const products = [
  {
    name: "Base Box Casal Absolut",
    image: "/produtos-colchoes-itajai/base-sommier-absolut-casal.jpg",
  },
  {
    name: "Base Box Queen Absolut",
    image: "/produtos-colchoes-itajai/base-sommier-absolut-queen.jpg",
  },
  {
    name: "Base Box King Absolut",
    image: "/produtos-colchoes-itajai/base-sommier-absolut-king.jpg",
  },
  {
    name: "Base Elétrica Articulada Casal",
    image: "/produtos-colchoes-itajai/base-eletrica-articulada-com-2-motores-casal.jpg",
  },
  {
    name: "Base Elétrica Articulada King",
    image: "/produtos-colchoes-itajai/base-eletrica-articulada-king.jpg",
  },
  {
    name: "Base Elétrica Articulada Solteiro",
    image: "/produtos-colchoes-itajai/base-eletrica-articulada-solteiro.jpg",
  },
  {
    name: "Base Box Casal Bau Cori",
    image: "/produtos-colchoes-itajai/base-sommier-bau-cori-casal.jpg",
  },
  {
    name: "Base Box King Bau Cori",
    image: "/produtos-colchoes-itajai/base-sommier-bau-cori-king.jpg",
  },
  {
    name: "Base Box Queen Bau Cori",
    image: "/produtos-colchoes-itajai/base-sommier-bau-cori-queen.jpg",
  },
  {
    name: "Base Box Solteiro Absolut",
    image: "/produtos-colchoes-itajai/base-sommier-absolut-solteiro.jpg",
  },
];

export function ProductCarousel() {
  const [active, setActive] = React.useState(0);

  const next = () => setActive((prev) => (prev + 1) % products.length);
  const prev = () => setActive((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-4">
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-lg bg-white">
        <Image
          src={products[active].image}
          alt={products[active].name}
          fill
          style={{ objectFit: "cover" }}
          className="transition-all duration-500 rounded-3xl"
          sizes="100vw"
          priority
        />
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--brand-main)]/90 hover:bg-[var(--brand-main)] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 opacity-90 hover:opacity-100 transition-opacity"
          aria-label="Anterior"
          style={{ pointerEvents: 'auto' }}
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--brand-main)]/90 hover:bg-[var(--brand-main)] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 opacity-90 hover:opacity-100 transition-opacity"
          aria-label="Próximo"
          style={{ pointerEvents: 'auto' }}
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 items-center justify-center mt-2">
        {products.map((p, idx) => (
          <button
            key={p.name}
            onClick={() => setActive(idx)}
            className={`w-3 h-3 rounded-full border-2 ${idx === active ? "bg-[var(--brand-main)] border-[var(--brand-main)]" : "bg-white border-[var(--brand-main)]/30"}`}
            aria-label={`Selecionar ${p.name}`}
          />
        ))}
      </div>
      <div className="text-center mt-2">
        <span className="font-semibold text-[var(--brand-main)] text-lg">{products[active].name}</span>
      </div>
    </div>
  );
}
