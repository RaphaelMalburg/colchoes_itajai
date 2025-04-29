import React, { useState } from "react";
import { Button } from "../ui/button";
import { ImageCarousel } from "./ImageCarousel";

interface Product {
  categoria?: string;
  nome?: string;
  tamanho?: string;
  componentes?: string;
  descricao?: string;
  imagens?: string[];
  [key: string]: any;
}

interface ProductDialogProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  whatsappNumber: string;
}

export function ProductDialog({ product, open, onOpenChange, whatsappNumber }: ProductDialogProps) {
  if (!product) return null;
  const intro = `Olá! Gostaria de consultar o preço do produto: ${product.nome || product["Nome do Produto"]}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(intro)}`;
  const images = product.imagens || [];

  // Novo estado para maximizar imagem
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    open ? (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
        {/* Backdrop: fechar ao clicar fora */}
        <div className="fixed inset-0 z-40" onClick={() => onOpenChange(false)} />
        <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-4 md:p-6 relative max-h-[95vh] overflow-y-auto z-50">
          <button
            className="sticky top-2 right-2 text-2xl text-blue-700 hover:text-blue-900 z-20 bg-white/80 rounded-full px-2"
            aria-label="Fechar"
            onClick={() => onOpenChange(false)}
            style={{ minWidth: 40, minHeight: 40 }}
          >
            ×
          </button>
          <div className="flex flex-col items-center">
            {/* Imagem maior e com zoom ao clicar */}
            <div className="w-64 h-64 md:w-96 md:h-96 mb-4 flex items-center justify-center cursor-zoom-in" onClick={() => setZoomOpen(true)}>
              <ImageCarousel images={images} alt={product.nome || "Produto"} className="w-full h-full object-contain" />
            </div>
            <h2 className="text-xl font-bold text-blue-900 mb-2 text-center break-words">{product.nome || product["Nome do Produto"]}</h2>
            <div className="text-blue-700 text-sm mb-2">Categoria: {product.categoria || product["Categoria"]}</div>
            <div className="text-blue-700 text-sm mb-2">Tamanho: {product.tamanho || product["Tamanho"]}</div>
            {product.componentes || product["Componentes"] ? (
              <div className="text-blue-700 text-xs mb-2">Componentes: {product.componentes || product["Componentes"]}</div>
            ) : null}
            {product.descricao && (
              <div className="text-blue-900 text-sm mb-2 font-medium text-center break-words">{product.descricao}</div>
            )}
            {images.length === 0 && (
              <div className="text-xs text-blue-500 mt-2">Nenhuma imagem disponível</div>
            )}
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-6 py-2 mt-4 shadow-sm w-full text-base min-h-[44px]">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Consultar preço no WhatsApp
              </a>
            </Button>
          </div>
        </div>
        {/* Lightbox/Zoom da imagem */}
        {zoomOpen && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setZoomOpen(false)}>
            <img src={images && images.length > 0 ? `/produtos-colchoes-itajai/${images[0]}` : '/produtos-colchoes-itajai/generica.jpg'} alt={product.nome || "Produto"} className="max-w-3xl max-h-[90vh] rounded-xl shadow-2xl border-4 border-white cursor-zoom-out" />
          </div>
        )}
      </div>
    ) : null
  );
}
