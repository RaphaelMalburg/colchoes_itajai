import React from "react";
import { notFound } from "next/navigation";

const categorias = {
  "camas-especiais": {
    nome: "Camas Especiais",
    descricao: "Modelos exclusivos para quem busca conforto e sofisticação.",
    imagem: "/produtos-colchoes-itajai/camas-especiais.jpg",
  },
  colchoes: {
    nome: "Colchões",
    descricao: "Tecnologia de ponta para noites de sono perfeitas.",
    imagem: "/produtos-colchoes-itajai/colchoes.jpg",
  },
  sofas: {
    nome: "Sofás",
    descricao: "Design moderno e conforto para sua sala.",
    imagem: "/produtos-colchoes-itajai/sofas.jpg",
  },
  poltronas: {
    nome: "Poltronas",
    descricao: "Elegância e aconchego em cada detalhe.",
    imagem: "/produtos-colchoes-itajai/poltronas.jpg",
  },
  recamiers: {
    nome: "Recamiers",
    descricao: "Peças versáteis para compor seu ambiente.",
    imagem: "/produtos-colchoes-itajai/recamiers.jpg",
  },
  cabeceiras: {
    nome: "Cabeceiras",
    descricao: "Sofisticação e personalidade para o seu quarto.",
    imagem: "/produtos-colchoes-itajai/cabeceiras.jpg",
  },
  acessorios: {
    nome: "Acessórios",
    descricao: "Itens que completam o seu conforto.",
    imagem: "/produtos-colchoes-itajai/acessorios.jpg",
  },
  moveis: {
    nome: "Móveis",
    descricao: "Móveis planejados para valorizar seu espaço.",
    imagem: "/produtos-colchoes-itajai/moveis.jpg",
  },
};

export default async function CategoriaPage({ params }: { params: { categoria: string } }) {
  // Aguarda params caso necessário (Next.js server components)
  const awaitedParams = typeof params.then === "function" ? await params : params;
  const categoriaKey = awaitedParams.categoria?.toLowerCase();
  const data = categorias[categoriaKey as keyof typeof categorias];
  if (!data) return notFound();

  return (
    <section className="w-full bg-white py-16 px-4 flex justify-center border-b border-blue-100 min-h-[60vh]">
      <div className="max-w-3xl w-full text-center">
        <img
          src={data.imagem}
          alt={data.nome}
          className="w-40 h-40 object-cover rounded-2xl mx-auto mb-6 border-2 border-blue-200 shadow-lg"
        />
        <h1 className="text-3xl md:text-4xl font-display font-bold text-blue-700 mb-4">{data.nome}</h1>
        <p className="text-lg text-blue-900 mb-8">{data.descricao}</p>
        <div className="text-blue-700 text-base">Em breve, mais detalhes e opções deste produto!</div>
      </div>
    </section>
  );
}
