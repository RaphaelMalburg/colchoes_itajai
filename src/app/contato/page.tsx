import React from "react";

export default function ContatoPage() {
  return (
    <section className="relative w-full min-h-[520px] flex items-center justify-center px-0 py-28 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e7edf8] to-[#dbeafe]">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-blue-200 via-blue-100 to-white opacity-70 blur-3xl animate-blob-move pointer-events-none" />
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        <div className="flex-1 flex flex-col items-start justify-center bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-blue-100 max-w-xl w-full">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4 text-blue-900 leading-tight drop-shadow-sm text-left w-full">
            Fale Conosco
          </h1>
          <p className="text-lg md:text-xl font-light mb-6 text-blue-800 text-left w-full">
            Tem dúvidas, sugestões ou deseja solicitar um orçamento personalizado? Preencha o formulário abaixo ou entre em contato pelos nossos canais oficiais.
          </p>
          <form className="w-full flex flex-col gap-4">
            <input type="text" placeholder="Seu nome" className="rounded-lg border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80" />
            <input type="email" placeholder="Seu e-mail" className="rounded-lg border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80" />
            <textarea placeholder="Sua mensagem" rows={4} className="rounded-lg border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 resize-none" />
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full px-6 py-2 mt-2 shadow transition-all">Enviar mensagem</button>
          </form>
          <div className="mt-8 text-sm text-blue-700 text-left w-full">
            <div>WhatsApp: <a href="https://wa.me/5547999999999" className="underline hover:text-blue-900">(47) 99999-9999</a></div>
            <div>Email: <a href="mailto:contato@colchoesitajai.com.br" className="underline hover:text-blue-900">contato@colchoesitajai.com.br</a></div>
          </div>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center h-[340px]">
          <div className="w-[340px] h-[340px] rounded-3xl bg-gradient-to-br from-blue-100 via-white to-blue-200 border border-blue-100 shadow-lg backdrop-blur-xl animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
}
