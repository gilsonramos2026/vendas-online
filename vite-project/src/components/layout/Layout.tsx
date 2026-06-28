import { Outlet } from "react-router-dom";
import { Truck, CurrencyDollar, Headset, ShieldCheck } from "@phosphor-icons/react";
import { Header } from "./Header";
import Footer from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen w-full bg-bg-primary text-text-primary transition-colors duration-500 flex flex-col font-sans antialiased">
      
      {/* Cabeçalho Fixo */}
      <Header />

      {/* 🌟 BARRA DE VANTAGENS REFORMULADA (Estilo Minimalista Premium) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="w-full bg-card-bg border border-zinc-200/40 dark:border-zinc-800/40 py-4 px-6 rounded-2xl backdrop-blur-md shadow-xs grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 flex-shrink-0"><Truck size={22} weight="duotone" /></div>
            <div>
              <h5 className="text-xs font-black uppercase tracking-wider">Envio Rápido</h5>
              <p className="text-[11px] opacity-60 mt-0.5">Frete grátis em todo o Brasil</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-l border-zinc-200/20 dark:border-zinc-800/20 pl-4">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 flex-shrink-0"><CurrencyDollar size={22} weight="duotone" /></div>
            <div>
              <h5 className="text-xs font-black uppercase tracking-wider">Devolução</h5>
              <p className="text-[11px] opacity-60 mt-0.5">Até 30 dias para reembolso</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-l border-zinc-200/20 dark:border-zinc-800/20 pl-4">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 flex-shrink-0"><ShieldCheck size={22} weight="duotone" /></div>
            <div>
              <h5 className="text-xs font-black uppercase tracking-wider">Compra Segura</h5>
              <p className="text-[11px] opacity-60 mt-0.5">Dados 100% criptografados</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-l border-zinc-200/20 dark:border-zinc-800/20 pl-4">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 flex-shrink-0"><Headset size={22} weight="duotone" /></div>
            <div>
              <h5 className="text-xs font-black uppercase tracking-wider">Suporte 24/7</h5>
              <p className="text-[11px] opacity-60 mt-0.5">Atendimento via chat e e-mail</p>
            </div>
          </div>

        </div>
      </section>

      {/* Conteúdo Dinâmico Centralizado */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
