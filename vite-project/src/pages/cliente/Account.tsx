import { useState } from "react";
import { Link } from "react-router-dom";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    // 🎨 Removido o container fixo para alinhar 100% com o grid global do seu Layout
    <main className="w-full text-text-primary animate-fade-in py-6 sm:py-10">
      
      {/* 🔹 1. BREADCRUMB E BOAS-VINDAS RESPONSIVO */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-12 text-sm font-semibold tracking-wide">
        <nav className="opacity-60">
          <Link to="/home" className="hover:text-amber-500 transition-colors">Início</Link> / 
          <span className="text-amber-500 opacity-100"> Minha Conta</span>
        </nav>
        <p className="font-medium">
          Olá, bem-vindo! <span className="text-amber-500 font-bold">Gilson Ramos</span>
        </p>
      </div>

      {/* Grid de Organização Bento (Painel Lateral vs Formulário de Dados) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* =================================================================== */}
        {/* 🔹 2. BARRA LATERAL DE NAVEGAÇÃO DA CONTA                           */}
        {/* =================================================================== */}
        <aside className="lg:col-span-3 space-y-6 font-bold text-sm select-none">
          <section className="space-y-2">
            <h3 className="text-base tracking-tight opacity-90">Gerenciar Minha Conta</h3>
            <ul className="opacity-70 space-y-2 ml-4 font-medium">
              <li>
                <button 
                  onClick={() => setActiveTab("profile")} 
                  className={`cursor-pointer transition-colors ${activeTab === "profile" ? "text-amber-500 font-bold" : "hover:text-amber-500"}`}
                >
                  Meu Perfil
                </button>
              </li>
              <li><button onClick={() => setActiveTab("addresses")} className={`cursor-pointer hover:text-amber-500 transition-colors ${activeTab === "addresses" ? "text-amber-500 font-bold" : ""}`}>Caderno de Endereços</button></li>
              <li><button onClick={() => setActiveTab("payments")} className={`cursor-pointer hover:text-amber-500 transition-colors ${activeTab === "payments" ? "text-amber-500 font-bold" : ""}`}>Opções de Pagamento</button></li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-base tracking-tight opacity-90">Meus Pedidos</h3>
            <ul className="opacity-70 space-y-2 ml-4 font-medium">
              <li><button onClick={() => setActiveTab("returns")} className={`cursor-pointer hover:text-amber-500 transition-colors ${activeTab === "returns" ? "text-amber-500 font-bold" : ""}`}>Minhas Devoluções</button></li>
              <li><button onClick={() => setActiveTab("cancellations")} className={`cursor-pointer hover:text-amber-500 transition-colors ${activeTab === "cancellations" ? "text-amber-500 font-bold" : ""}`}>Meus Cancelamentos</button></li>
            </ul>
          </section>

          <button onClick={() => setActiveTab("wishlist")} className={`text-base tracking-tight opacity-90 block cursor-pointer text-left hover:text-amber-500 transition-colors ${activeTab === "wishlist" ? "text-amber-500 font-bold" : ""}`}>
            Lista de Desejos (WishList)
          </button>
        </aside>

        {/* =================================================================== */}
        {/* 🔹 3. FORMULÁRIO DE EDIÇÃO EM GLASSMORPHISM (TAILWIND v4)           */}
        {/* =================================================================== */}
        <section className="lg:col-span-9 border border-zinc-200/50 dark:border-zinc-800/50 p-6 sm:p-8 rounded-3xl bg-card-bg backdrop-blur-md shadow-xl w-full">
          <h2 className="text-xl font-black tracking-tight text-amber-500 mb-6">
            Editar Seu Perfil
          </h2>
          
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full" onSubmit={(e) => e.preventDefault()}>
            <AccountInput label="Primeiro Nome" placeholder="Gilson" />
            <AccountInput label="Sobrenome" placeholder="Ramos" />
            <AccountInput label="E-mail" placeholder="gilsonramos@exemplo.com" type="email" />
            <AccountInput label="Endereço Principal" placeholder="Av. Paulista, 1000 - São Paulo, SP" />
            
            {/* Bloco de Redefinição de Senha Segura */}
            <div className="col-span-1 sm:col-span-2 space-y-3.5 pt-2">
              <label className="text-sm font-bold opacity-80 tracking-wide block">Alteração de Senha</label>
              <input 
                type="password" 
                placeholder="Senha Atual" 
                className="w-full p-3.5 text-sm rounded-xl bg-zinc-500/5 border border-zinc-300/30 dark:border-white/10 text-text-primary placeholder-zinc-400 focus:outline-hidden focus:border-amber-500 dark:focus:border-amber-400 transition-colors" 
              />
              <input 
                type="password" 
                placeholder="Nova Senha" 
                className="w-full p-3.5 text-sm rounded-xl bg-zinc-500/5 border border-zinc-300/30 dark:border-white/10 text-text-primary placeholder-zinc-400 focus:outline-hidden focus:border-amber-500 dark:focus:border-amber-400 transition-colors" 
              />
              <input 
                type="password" 
                placeholder="Confirmar Nova Senha" 
                className="w-full p-3.5 text-sm rounded-xl bg-zinc-500/5 border border-zinc-300/30 dark:border-white/10 text-text-primary placeholder-zinc-400 focus:outline-hidden focus:border-amber-500 dark:focus:border-amber-400 transition-colors" 
              />
            </div>

            {/* Botões de Controle e Envio do Formulário */}
            <div className="col-span-1 sm:col-span-2 flex justify-end items-center gap-4 pt-4 border-t border-zinc-200/30 dark:border-zinc-800/30 mt-2">
              <button 
                type="button"
                className="px-6 py-3 text-xs sm:text-sm font-bold opacity-60 hover:opacity-100 hover:text-red-500 transition-all cursor-pointer"
              >
                Cancelar
              </button>
              <button 
                type="button" 
                onClick={() => alert("Alterações salvas de forma segura! 🎉")}
                className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        </section>

      </div>
    </main>
  );
}

{/* =================================================================== */}
{/* 🔹 4. COMPONENTE DE INPUT REUTILIZÁVEL INTEGRADO                    */}
{/* =================================================================== */}
interface AccountInputProps {
  label: string;
  placeholder: string;
  type?: string;
}

function AccountInput({ label, placeholder, type = "text" }: AccountInputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-bold opacity-80 tracking-wide">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full p-3.5 text-sm rounded-xl bg-zinc-500/5 border border-zinc-300/30 dark:border-white/10 text-text-primary placeholder-zinc-400 focus:outline-hidden focus:border-amber-500 dark:focus:border-amber-400 transition-colors duration-200"
      />
    </div>
  );
}
