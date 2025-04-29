"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Button } from "../ui/button";
import { ProductCard } from "./ProductCard";
import { ProductDialog } from "./ProductDialog";
import productsData from "../../data/products.json";
import InfiniteScroll from 'react-infinite-scroll-component';

// Número do WhatsApp para consulta
const WHATSAPP_NUMBER = "5547999999999"; // Substitua pelo número real

export function ProductsSection() {
  const [dialogProduct, setDialogProduct] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Carregar produtos do catálogo
  const products = useMemo(() => productsData, []);

  // Agrupar produtos por categoria
  const groupedProducts = useMemo(() => {
    const groups: { [key: string]: any[] } = {};
    products.forEach((p: any) => {
      const categoria = p.categoria || p["Categoria"];
      if (!groups[categoria]) groups[categoria] = [];
      groups[categoria].push(p);
    });
    return groups;
  }, [products]);

  // Normalize category names for comparison
  function normalize(str: string) {
    return (str || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  // Get all unique categories for menu
  const categories = useMemo(() => Object.keys(groupedProducts), [groupedProducts]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Ensure selectedCategory is set after categories are loaded
  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]);
    }
    // Only run when categories change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  // Filtered products for selected category (robust normalization)
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];
    let list = products;
    if (search) {
      list = products.filter((p: any) => {
        const nome = normalize(p.nome || p["Nome do Produto"]);
        const cat = normalize(p.categoria || p["Categoria"]);
        const tam = normalize(p.tamanho || p["Tamanho"]);
        return (
          nome.includes(normalize(search)) ||
          cat.includes(normalize(search)) ||
          tam.includes(normalize(search))
        );
      });
    }
    return list.filter((p: any) => normalize(p.categoria || p["Categoria"]) === normalize(selectedCategory));
  }, [products, search, selectedCategory]);

  // Ordenar: produtos com imagem primeiro
  const orderedProducts = useMemo(() => {
    return filteredProducts.slice().sort((a: any, b: any) => {
      const aHasImg = a.imagens && a.imagens.length > 0 && a.imagens[0];
      const bHasImg = b.imagens && b.imagens.length > 0 && b.imagens[0];
      if (aHasImg && !bHasImg) return -1;
      if (!aHasImg && bHasImg) return 1;
      return 0;
    });
  }, [filteredProducts]);

  const [visibleCount, setVisibleCount] = useState(12);
  const loadMore = () => setVisibleCount((prev) => prev + 12);

  return (
    <section id="produtos" className="w-full bg-gradient-to-b from-[#f8fafc] via-[#e7edf8] to-[#dbeafe] py-10">
      <div className="max-w-3xl mx-auto px-4 flex flex-col gap-4">
        {/* Barra de categorias e busca - sempre empilhado */}
        <div className="flex flex-col gap-2 mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 leading-tight">Conheça nossa linha de produtos</h2>
          <div className="flex flex-wrap gap-2">
            {Object.keys(groupedProducts).map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full border border-blue-200 text-blue-700 font-semibold transition-colors text-sm md:text-base ${selectedCategory === cat ? 'bg-blue-700 text-white border-blue-700' : 'bg-white hover:bg-blue-50'}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full max-w-xs px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-900 bg-white shadow-sm min-h-[44px] text-base"
            style={{ fontSize: "1rem" }}
          />
        </div>
        {/* Grid de produtos - responsivo */}
        <div className="w-full">
          {selectedCategory && (
            <>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 mt-4 sm:mt-8 px-2 md:px-0">
                {selectedCategory}
              </h3>
              <InfiniteScroll
                dataLength={visibleCount}
                next={loadMore}
                hasMore={visibleCount < orderedProducts.length}
                loader={<div className="text-center py-4 text-blue-700">Carregando mais produtos...</div>}
                endMessage={<div className="text-center py-4 text-blue-700">Todos os produtos exibidos.</div>}
                scrollThreshold={0.95}
              >
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  {orderedProducts.slice(0, visibleCount).map((product: any, idx: number) => (
                    <ProductCard
                      key={
                        (product.id || product.nome || product["Nome do Produto"] || "") +
                        "-" +
                        (product.tamanho || product["Tamanho"] || "") +
                        "-" +
                        idx
                      }
                      product={product}
                      onClick={() => {
                        setDialogProduct(product);
                        setDialogOpen(true);
                      }}
                    />
                  ))}
                </div>
              </InfiniteScroll>
            </>
          )}
          <ProductDialog
            product={dialogProduct}
            open={dialogOpen}
            onOpenChange={setDialogOpen}
            whatsappNumber={WHATSAPP_NUMBER}
          />
        </div>
      </div>
    </section>
  );
}
