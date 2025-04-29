import React from "react";
import { Button } from "../ui/button";

export function LandingFinalCta() {
  return (
    <section className="w-full py-12 px-4 flex flex-col items-center justify-center mt-16" style={{ background: 'var(--brand-main)' }}>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">Pronto para transformar seu sono?</h2>
      <p className="text-white text-lg mb-6 text-center max-w-2xl">
        Fale agora com um especialista Ortobom e descubra a melhor solução para você. Atendimento rápido, personalizado e sem compromisso!
      </p>
      <Button asChild className="px-10 py-4 text-lg font-semibold rounded-full shadow-md bg-white" style={{ color: 'var(--brand-main)' }}>
        <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
      </Button>
    </section>
  );
}
