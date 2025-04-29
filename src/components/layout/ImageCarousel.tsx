import React, { useState } from "react";
import clsx from "clsx";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  folder?: string; // e.g., '/produtos/'
}

export function ImageCarousel({ images, alt, className = "", folder = "/produtos-colchoes-itajai/" }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  // Corrigir caminhos com espaços e acentuação
  const getImageSrc = (image: string) => {
    // Se já for um caminho absoluto (começa com http ou /), retorna direto
    if (/^(https?:\/\/|\/)/.test(image)) return image;
    // Corrige espaços e acentos para URL
    return folder + image;
  };

  if (!images || images.length === 0) {
    return (
      <div className={clsx("flex items-center justify-center w-full h-full bg-blue-50 text-blue-400 text-xs border border-blue-100 rounded-lg", className)}>
        <span role="img" aria-label="Sem imagem" className="text-3xl mr-2">🖼️</span>
        Nenhuma imagem disponível
      </div>
    );
  }
  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className={clsx("relative flex items-center justify-center w-full h-full", className)}>
      {images && images.length > 0 && images[0] ? (
        <img
          src={getImageSrc(images[current])}
          alt={alt}
          className="w-full h-full object-contain transition-all duration-300 bg-white"
          loading="lazy"
          onError={e => {
            e.currentTarget.onerror = null;
            (e.currentTarget as HTMLImageElement).style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
            if (fallback && fallback.style) fallback.style.display = 'flex';
          }}
        />
      ) : null}
      {/* Mensagem se não houver imagem */}
      {(!images || images.length === 0 || !images[0]) && (
        <div className="flex items-center justify-center w-full h-full text-blue-400 text-center text-sm font-semibold bg-blue-50">
          Imagem não disponível
        </div>
      )}
      {/* Fallback se houver erro de carregamento */}
      <div style={{display: 'none'}} className="flex items-center justify-center w-full h-full text-blue-400 text-center text-sm font-semibold bg-blue-50">
        Imagem não disponível
      </div>
      {images.length > 1 && (
        <>
          <button
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-blue-100/70 hover:bg-blue-300 text-blue-900 rounded-full w-7 h-7 flex items-center justify-center shadow group-hover:opacity-100 opacity-70"
            onClick={goPrev}
            aria-label="Imagem anterior"
            tabIndex={0}
          >
            &#8592;
          </button>
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-100/70 hover:bg-blue-300 text-blue-900 rounded-full w-7 h-7 flex items-center justify-center shadow group-hover:opacity-100 opacity-70"
            onClick={goNext}
            aria-label="Próxima imagem"
            tabIndex={0}
          >
            &#8594;
          </button>
          <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-1">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-2 h-2 rounded-full bg-blue-400 ${idx === current ? "opacity-100" : "opacity-40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
