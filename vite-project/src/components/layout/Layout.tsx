import { Outlet } from "react-router-dom";// Importa direto do arquivo de índice centralizado
import { Truck, CurrencyDollar, Headset, ShieldCheck } from "@phosphor-icons/react";
import { Header } from "./Header";
import Footer from "./Footer";

export function Layout() {
  return (
    // 🎨 Usa as variáveis de cor nativas do seu Tailwind v4 (pinta a tela inteira e gerencia o scroll)
    <div className="min-h-screen w-full bg-bg-primary text-text-primary transition-colors duration-300 flex flex-col font-sans">
      
      {/* 1. O Header Fixo no Topo com Efeito de Vidro */}
      <Header />

      {/* =================================================================== */}
      {/* BARRA DE DESTAQUES TRADUZIDA (MX-AUTO + PX PARA MARGENS NOS CANTOS) */}
      {/* =================================================================== */}
      <section className="w-full bg-card-bg border-b border-zinc-200/50 dark:border-zinc-800 py-4 backdrop-blur-md transition-colors duration-300 shadow-2xs">
        {/* 🔥 max-w-7xl + mx-auto + px-4 adicionam a margem perfeita nos dois cantos da tela */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          
          {/* Destaque 1: Envio Rápido */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 dark:text-amber-400 flex-shrink-0">
              <Truck size={24} weight="duotone" />
            </div>
            <div>
              <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider">Envio Rápido</h5>
              <p className="text-[11px] opacity-70">Frete grátis para todo o Brasil</p>
            </div>
          </div>

          {/* Destaque 2: Devolução */}
          <div className="flex items-center gap-3 border-l border-zinc-200/30 dark:border-zinc-800/50 pl-2 md:pl-4">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 dark:text-amber-400 flex-shrink-0">
              <CurrencyDollar size={24} weight="duotone" />
            </div>
            <div>
              <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider">Devolução</h5>
              <p className="text-[11px] opacity-70">Até 30 dias para reembolso</p>
            </div>
          </div>

          {/* Destaque 3: Compra Segura */}
          <div className="flex items-center gap-3 border-l border-zinc-200/30 dark:border-zinc-800/50 pl-2 md:pl-4">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 dark:text-amber-400 flex-shrink-0">
              <ShieldCheck size={24} weight="duotone" />
            </div>
            <div>
              <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider">Compra Segura</h5>
              <p className="text-[11px] opacity-70">Dados totalmente protegidos</p>
            </div>
          </div>

          {/* Destaque 4: Suporte 24/7 */}
          <div className="flex items-center gap-3 border-l border-zinc-200/30 dark:border-zinc-800/50 pl-2 md:pl-4">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 dark:text-amber-400 flex-shrink-0">
              <Headset size={24} weight="duotone" />
            </div>
            <div>
              <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider">Suporte 24/7</h5>
              <p className="text-[11px] opacity-70">Atendimento via chat ou e-mail</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CONTEÚDO DINÂMICO (ONDE AS PÁGINAS COMO HOME, LOGIN E CART SÃO INJETADAS) */}
      {/* max-w-7xl + mx-auto + px garantem que nenhuma tela quebre ou encoste nas bordas do monitor */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <Outlet />
      </main>

      {/* 4. O Footer Translúcido Fixo no Rodapé */}
      <Footer />
    </div>
  );
}
