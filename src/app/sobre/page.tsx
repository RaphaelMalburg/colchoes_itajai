import React from "react";
import Image from "next/image";

export default function SobrePage() {
  return (
    <section className="relative w-full min-h-[520px] flex flex-col gap-20 items-center justify-center px-0 py-28 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e7edf8] to-[#dbeafe]">
      {/* Background accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-blue-200 via-blue-100 to-white opacity-70 blur-3xl animate-blob-move pointer-events-none" />
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        {/* Bloco Colchões Itajaí */}
        <div className="flex-1 flex flex-col items-start justify-center bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-blue-100 max-w-xl w-full">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4 text-blue-900 leading-tight drop-shadow-sm text-left w-full">
            Sobre a Colchões Itajaí
          </h1>
          <p className="text-lg md:text-xl font-light mb-4 text-blue-800 text-left w-full">
            A <span className="font-semibold text-blue-700">Colchões Itajaí</span> é uma loja especializada em produtos <span className="font-semibold text-blue-700">Ortobom</span>, referência nacional em conforto e tecnologia para o sono. Nossa missão é transformar o seu descanso em uma experiência única, oferecendo colchões, camas e acessórios de altíssima qualidade.
          </p>
          <p className="text-base text-blue-700 mb-4 text-left w-full">
            Trabalhamos exclusivamente com a linha Ortobom, reconhecida por sua tradição, inovação e compromisso com o bem-estar. Venha conhecer nossa loja e descubra o verdadeiro significado de conforto premium.
          </p>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center h-[340px]">
          <Image src="/sobre-ortobom-fabrica.jpg" alt="Fábrica Ortobom" width={340} height={340} className="rounded-3xl object-cover border border-blue-100 shadow-lg" />
        </div>
      </div>

      {/* História da Ortobom */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10 px-6">
        <div className="flex-1 flex flex-col items-start justify-center bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-blue-100 max-w-xl w-full">
          <h2 className="text-2xl font-bold mb-3 text-blue-900">História da Ortobom</h2>
          <p className="text-base text-blue-800 mb-4">
            Fundada em São Paulo, em 1969, a Ortobom começou sua trajetória no ramo metalúrgico, fabricando camas e móveis. Em 1975, inaugurou no Rio de Janeiro sua primeira fábrica de colchões, tornando-se referência nacional em qualidade e tecnologia para o sono.
          </p>
          <p className="text-base text-blue-800 mb-2">
            O nome Ortobom une ortopedia e conforto, traduzindo o compromisso da marca com a saúde e o bem-estar dos brasileiros. Hoje, a Ortobom é líder no segmento e reconhecida em todo o Brasil.
          </p>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center h-[340px]">
          <Image src="/sobre-ortobom-colchao.jpg" alt="Colchão Ortobom" width={340} height={340} className="rounded-3xl object-cover border border-blue-100 shadow-lg" />
        </div>
      </div>

      {/* Missão, Visão, Propósito Ortobom */}
      <div className="relative z-10 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-white/90 rounded-3xl shadow-xl p-8 border border-blue-100 flex flex-col items-center text-center">
          <Image src="/icone-missao.svg" alt="Missão" width={48} height={48} className="mb-3" />
          <h3 className="font-bold text-blue-900 mb-2">Missão</h3>
          <p className="text-blue-800 text-sm">Proporcionar o máximo de bem-estar e conforto aos clientes, contribuindo para sua saúde e qualidade de vida.</p>
        </div>
        <div className="bg-white/90 rounded-3xl shadow-xl p-8 border border-blue-100 flex flex-col items-center text-center">
          <Image src="/icone-visao.svg" alt="Visão" width={48} height={48} className="mb-3" />
          <h3 className="font-bold text-blue-900 mb-2">Visão</h3>
          <p className="text-blue-800 text-sm">Ser reconhecida como a maior e melhor referência em produtos e serviços para o sono e conforto, sinônimo de qualidade no Brasil.</p>
        </div>
        <div className="bg-white/90 rounded-3xl shadow-xl p-8 border border-blue-100 flex flex-col items-center text-center">
          <Image src="/icone-proposito.svg" alt="Propósito" width={48} height={48} className="mb-3" />
          <h3 className="font-bold text-blue-900 mb-2">Propósito</h3>
          <p className="text-blue-800 text-sm">Ajudar a construir um mundo com mais qualidade de vida e conforto, proporcionando noites reparadoras e produtos sustentáveis.</p>
        </div>
      </div>

      {/* Qualidade e Inovação Ortobom */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        <div className="flex-1 flex flex-col items-start justify-center bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-blue-100 max-w-xl w-full">
          <h2 className="text-2xl font-bold mb-3 text-blue-900">Qualidade e Inovação</h2>
          <p className="text-base text-blue-800 mb-4">
            A Ortobom investe continuamente em tecnologia, pesquisa e desenvolvimento para entregar colchões e camas que proporcionam conforto, durabilidade e cuidado com a saúde. Cada produto é fabricado com matéria-prima de alta qualidade, garantindo noites de sono tranquilas para milhões de brasileiros.
          </p>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center h-[340px]">
          <Image src="/sobre-ortobom-tecnologia.jpg" alt="Tecnologia Ortobom" width={340} height={340} className="rounded-3xl object-cover border border-blue-100 shadow-lg" />
        </div>
      </div>
    </section>
  );
}
