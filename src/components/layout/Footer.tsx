import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-[#f6f8fa] text-[var(--brand-main)] shadow-none py-6 px-2 sm:py-8 sm:px-4 mt-0 border-t-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-lg sm:text-xl font-display font-bold mb-1">Colchões Itajaí</span>
          <span className="text-xs sm:text-sm" style={{ color: '#3e5c59' }}>Conforto, tecnologia e elegância para o seu lar.</span>
        </div>
        <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6 font-medium text-sm items-center justify-center">
          <a href="/" className="hover:text-[#FFC83D] transition-colors">Home</a>
          <a href="/sobre" className="hover:text-[#FFC83D] transition-colors">Sobre Nós</a>
          <a href="#produtos" className="hover:text-[#FFC83D] transition-colors">Produtos</a>
          <a href="/contato" className="hover:text-[#FFC83D] transition-colors">Contato</a>
        </nav>
        <div className="text-xs sm:text-sm text-center md:text-right" style={{ color: '#3e5c59' }}>
          <div>Av. Exemplo, 123 - Itajaí/SC</div>
          <div>WhatsApp: (47) 99999-9999</div>
          <div>Email: contato@colchoesitajai.com.br</div>
        </div>
      </div>
      <div className="mt-4 text-[10px] sm:text-xs text-center" style={{ color: 'var(--brand-main)' }}>
        &copy; {new Date().getFullYear()} Colchões Itajaí. Todos os direitos reservados.
      </div>
    </footer>
  );
}
