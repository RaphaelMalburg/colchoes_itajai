import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetClose, SheetContent } from "../ui/sheet";

export function Header() {
  return (
    <header className="w-full px-4 sm:px-10 py-3 sm:py-5 flex items-center justify-between z-50 relative min-h-[56px] sm:min-h-0" style={{ background: 'var(--brand-main)' }}>
      {/* Logo e nome */}
      <Link href="/" className="flex items-start select-none">
        <span className="font-[var(--font-quicksand)] font-bold text-white text-base sm:text-sm tracking-tight leading-none">Colchões Itajaí</span>
      </Link>
      {/* Navegação Desktop */}
      <nav className="hidden md:flex items-center gap-10">
        <Link href="/" className="text-white font-[var(--font-poppins)] text-base hover:bg-white hover:text-[var(--brand-main)] rounded-md px-2 py-1 underline-offset-4 transition">Home</Link>
        <Link href="/sobre" className="text-white font-[var(--font-poppins)] text-base hover:bg-white hover:text-[var(--brand-main)] rounded-md px-2 py-1 underline-offset-4 transition">Sobre Nós</Link>
        <Link href="#produtos" className="text-white font-[var(--font-poppins)] text-base hover:bg-white hover:text-[var(--brand-main)] rounded-md px-2 py-1 underline-offset-4 transition">Produtos</Link>
        <Link href="/contato" className="text-white font-[var(--font-poppins)] text-base hover:bg-white hover:text-[var(--brand-main)] rounded-md px-2 py-1 underline-offset-4 transition">Contato</Link>
        <Link href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="ml-4 px-7 py-2 rounded-full bg-white text-[var(--brand-main)] font-bold font-[var(--font-poppins)] shadow hover:bg-[#FFC83D] hover:text-[var(--brand-main)] transition">Fazer Orçamento</Link>
      </nav>
      {/* Burger Menu Mobile/Tablet */}
      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="w-7 h-7" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <div className="flex flex-col gap-4 p-6 w-64">
              <SheetClose asChild>
                <Link href="/" className="hover:bg-white hover:text-[var(--brand-main)] transition-colors text-lg font-semibold">Home</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/sobre" className="hover:bg-white hover:text-[var(--brand-main)] transition-colors text-lg font-semibold">Sobre Nós</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#produtos" className="hover:bg-white hover:text-[var(--brand-main)] transition-colors text-lg font-semibold">Produtos</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/contato" className="hover:bg-white hover:text-[var(--brand-main)] transition-colors text-lg font-semibold">Contato</Link>
              </SheetClose>
              <Link href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="ml-4 px-7 py-2 rounded-full bg-white text-[var(--brand-main)] font-bold font-[var(--font-poppins)] shadow hover:bg-[#FFC83D] hover:text-[var(--brand-main)] transition w-full">Fazer Orçamento</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
