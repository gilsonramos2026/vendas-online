import { useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass, Sun, Moon, List, X, ShoppingCart, User } from "@phosphor-icons/react";
import { useTheme } from "../../context/ThemeContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 🎨 Ajustado para usar bg-card-bg (seu vidro translúcido) e text-text-primary do seu arquivo CSS
    <header className="w-full bg-card-bg text-text-primary border-b border-zinc-200/50 dark:border-zinc-800 backdrop-blur-md transition-colors duration-300">
      
      {/* 🔹 1. BARRA SUPERIOR DE ANÚNCIOS (FAIXA ESCURA DO PROJETO) */}
      <div className="w-full bg-zinc-950 text-white py-2 px-4 text-xs sm:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>☀️ Promoção de Verão — Toda a linha com 50% de DESCONTO!</span>
            <Link to="/home" className="underline font-bold text-amber-400 hover:text-amber-300 ml-1">Comprar agora</Link>
          </div>
          
          {/* Seletor de Idioma */}
          <select 
            className="bg-zinc-900 border border-zinc-800 rounded-md py-0.5 px-2 text-xs text-zinc-300 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
            onChange={(e) => console.log("Idioma:", e.target.value)}
          >
            <option value="pt">Português</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* 🔹 2. BARRA DE NAVEGAÇÃO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        
        {/* Logo (Inverte a cor se o usuário estiver em modo escuro) */}
        <Link to="/home" className="flex-shrink-0">
          <img className="w-16 sm:w-20 object-contain dark:invert transition-all" src="/logo-store.png" alt="Logo" />
        </Link>

        {/* Links de Navegação (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-sm tracking-wide opacity-90">
          <Link to="/home" className="hover:text-amber-500 transition-colors">INÍCIO</Link>
          <Link to="/produtos" className="hover:text-amber-500 transition-colors">PRODUTOS</Link>
          <Link to="/contatos" className="hover:text-amber-500 transition-colors">CONTATOS</Link>
          <Link to="/admin" className="hover:text-amber-500 transition-colors text-xs bg-zinc-500/10 px-2 py-1 rounded">PAINEL</Link>
        </nav>

        {/* Barra de Busca baseada nas cores do seu tema v4 */}
        <div className="hidden sm:flex flex-1 max-w-xs relative items-center">
          <input 
            type="text" 
            placeholder="Buscar produto..." 
            className="w-full pl-3 pr-10 py-2 text-sm rounded-xl bg-zinc-500/5 border border-zinc-300/30 dark:border-white/10 text-text-primary placeholder-zinc-400 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
          />
          <MagnifyingGlass size={18} className="absolute right-3 text-zinc-400" />
        </div>

        {/* Botões de Ação (Tema, Carrinho, Usuário) */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Alternador de Tema */}
          <button 
            onClick={toggleTheme} 
            type="button"
            className="p-2 rounded-xl hover:bg-zinc-500/10 transition-colors cursor-pointer"
            title={theme === "light" ? "Ativar Modo Escuro" : "Ativar Modo Claro"}
          >
            {theme === "light" ? <Moon size={22} weight="bold" /> : <Sun size={22} weight="bold" />}
          </button>

          {/* Ícone de Carrinho */}
          <Link to="/cart" className="p-2 rounded-xl hover:bg-zinc-500/10 transition-colors relative">
            <ShoppingCart size={22} weight="bold" />
            <span className="absolute top-1 right-1 bg-amber-500 text-zinc-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </Link>

          {/* Ícone de Perfil */}
          <Link to="/login" className="p-2 rounded-xl hover:bg-zinc-500/10 transition-colors">
            <User size={22} weight="bold" />
          </Link>

          {/* Botão Hamburger (Mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            type="button" 
            className="md:hidden p-2 rounded-xl hover:bg-zinc-500/10 transition-colors cursor-pointer"
          >
            {isOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </div>

      {/* 🔹 3. MENU LATERAL RESPONSIVO (MOBILE HAMBURGER) */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-bg-primary p-4 space-y-4 transition-colors duration-300">
          
          {/* Busca interna para Celular */}
          <div className="sm:hidden flex relative items-center w-full">
            <input 
              type="text" 
              placeholder="Buscar produto..." 
              className="w-full pl-3 pr-10 py-2 text-sm rounded-xl bg-zinc-500/5 border border-zinc-300/30 dark:border-white/10 text-text-primary"
            />
            <MagnifyingGlass size={18} className="absolute right-3 text-zinc-400" />
          </div>

          {/* Links verticais móveis */}
          <nav className="flex flex-col gap-3 font-bold text-sm tracking-wide">
            <Link to="/home" onClick={() => setIsOpen(false)} className="py-2 border-b border-zinc-300/20 hover:text-amber-500">INÍCIO</Link>
            <Link to="/produtos" onClick={() => setIsOpen(false)} className="py-2 border-b border-zinc-300/20 hover:text-amber-500">PRODUTOS</Link>
            <Link to="/contatos" onClick={() => setIsOpen(false)} className="py-2 border-b border-zinc-300/20 hover:text-amber-500">CONTATOS</Link>
            <Link to="/admin" onClick={() => setIsOpen(false)} className="py-2 text-amber-500">PAINEL ADMINISTRATIVO</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
