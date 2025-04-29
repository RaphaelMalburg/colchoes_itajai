import * as React from "react";
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

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const images = product.imagens || [];
  const description = product.descricao;
  return (
    <div
      className="relative rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100 flex flex-col items-center p-7 text-center group bg-white/90 backdrop-blur-md cursor-pointer"
      onClick={onClick}
    >
      {/* IMAGEM: aumentar tamanho */}
      <div className="flex items-center justify-center w-52 h-52 mb-4 rounded-xl bg-blue-50 border border-blue-100 overflow-hidden">
        <ImageCarousel images={images} alt={product.nome || "Produto"} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-blue-900 mb-2 drop-shadow-sm">
        {product.nome || product["Nome do Produto"]}
      </h3>
      <p className="text-blue-700 text-sm mb-1 min-h-[24px]">
        {product.categoria || product["Categoria"]}
      </p>
      <p className="text-blue-700 text-xs mb-4 min-h-[18px]">
        {product.tamanho || product["Tamanho"]}
      </p>
      <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full px-6 py-2 mt-auto shadow-sm">
        <span>Ver detalhes</span>
      </Button>
      {images.length === 0 && (
        <div className="text-xs text-blue-500 mt-2">Nenhuma imagem disponível</div>
      )}
      {description && (
        <div className="absolute left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 border-t border-blue-100 rounded-b-2xl p-3 text-blue-900 text-xs shadow-lg z-10">
          {description}
        </div>
      )}
    </div>
  );
}
