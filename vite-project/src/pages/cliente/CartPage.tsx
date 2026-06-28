import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash } from '@phosphor-icons/react';

// Mocks iniciais de teste (depois serão alimentados pelo estado global)
const INITIAL_ITEMS = [
  { id: 1, name: "Monitor Gamer IPS LCD 24'", price: 650.00, qty: 1, img: "https://bing.net" },
  { id: 2, name: "Controle Havic HV G-92 Gamepad", price: 550.00, qty: 2, img: "https://bing.net" }
];

export default function CartPage() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  // Funções reativas para atualizar a quantidade direto na tabela
  const updateQuantity = (id: number, action: 'add' | 'sub') => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = action === 'add' ? item.qty + 1 : item.qty - 1;
        return { ...item, qty: newQty > 0 ? newQty : 1 };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  // Cálculos contábeis reativos
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const total = subtotal; // Adicione taxas ou descontos de cupom aqui se necessário

  return (
    // 🎨 Removido o container fixo para alinhar 100% com o grid global do seu Layout
    <main className="w-full text-text-primary animate-fade-in py-6 sm:py-10">
      
      {/* Breadcrumb Traduzido */}
      <nav className="text-xs sm:text-sm opacity-60 mb-8 font-medium tracking-wide">
        <Link to="/home" className="hover:text-amber-500 transition-colors">Início</Link> / 
        <span className="font-bold opacity-100 text-amber-500"> Carrinho</span>
      </nav>

      {/* 🔹 1. TABELA RESPONSIVA DE ITENS */}
      <div className="w-full overflow-x-auto pb-4">
        <div className="min-w-[700px]">
          
          {/* Cabeçalho da Tabela (Estilo Grid em Vidro) */}
          <div className="grid grid-cols-4 gap-4 py-4 px-6 border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-500/5 rounded-2xl mb-6 font-bold text-sm tracking-wide uppercase opacity-80">
            <span>Produto</span>
            <span>Preço</span>
            <span className="text-center">Quantidade</span>
            <span className="text-right">Subtotal</span>
          </div>

          {/* Listagem Dinâmica de Produtos */}
          <div className="space-y-4">
            {items.length > 0 ? (
              items.map((item) => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onQuantityChange={updateQuantity}
                  onRemove={removeItem}
                />
              ))
            ) : (
              <div className="text-center py-12 border border-dashed border-zinc-300 dark:border-zinc-800 rounded-2xl opacity-60 font-medium">
                Seu carrinho está vazio. 😢
              </div>
            )}
          </div>

        </div>
      </div>

      {/* 🔹 2. BOTÕES DE COMPLEMENTO */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 mb-16">
        <Link 
          to="/home" 
          className="border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-500/5 hover:border-zinc-400 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl text-center cursor-pointer transition-all active:scale-98"
        >
          Voltar para a Loja
        </Link>
        <button 
          onClick={() => alert("Carrinho Atualizado!")}
          type="button" 
          className="border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-500/5 hover:border-zinc-400 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl cursor-pointer transition-all active:scale-98"
        >
          Limpar / Atualizar
        </button>
      </div>

      {/* 🔹 3. RODAPÉ: CUPOM E RESUMO DE FECHAMENTO (BENTO GRID 4 v4) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Bloco do Cupom */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 w-full">
          <input 
            type="text" 
            placeholder="Código do Cupom" 
            className="flex-1 p-3.5 text-sm rounded-xl bg-zinc-500/5 border border-zinc-300/30 dark:border-white/10 text-text-primary placeholder-zinc-400 focus:outline-hidden focus:border-amber-500 dark:focus:border-amber-400 transition-colors" 
          />
          <button type="button" className="bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-bold text-xs px-6 py-3.5 rounded-xl hover:opacity-90 active:scale-95 transition-all cursor-pointer whitespace-nowrap">
            APLICAR CUPOM
          </button>
        </div>

        <div className="lg:col-span-2 hidden lg:block" />

        {/* Caixa resumo Totalizadores */}
        <div className="lg:col-span-5 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 sm:p-8 space-y-4 bg-card-bg backdrop-blur-md shadow-xl w-full">
          <h2 className="text-xl font-black tracking-tight">Total do Carrinho</h2>
          
          <div className="flex justify-between border-b border-zinc-200/30 dark:border-zinc-800/30 pb-3 text-sm font-semibold opacity-90">
            <span>Subtotal:</span> 
            <span>{subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-200/30 dark:border-zinc-800/30 pb-3 text-sm font-semibold opacity-90">
            <span>Frete:</span> 
            <span className="text-emerald-500 font-bold uppercase tracking-wider text-xs bg-emerald-500/10 px-2 py-0.5 rounded-md">Grátis</span>
          </div>
          <div className="flex justify-between items-baseline font-black text-lg pt-1">
            <span>Total Geral:</span> 
            <span className="text-red-500 text-xl">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </div>
          
          <button 
            type="button" 
            disabled={items.length === 0}
            className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-sm py-4 rounded-xl shadow-md hover:shadow-lg active:scale-98 transition-all tracking-wide uppercase mt-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Finalizar Compra
          </button>
        </div>

      </div>
    </main>
  );
}

{/* =================================================================== */}
{/* 🔹 4. COMPONENTE DE LINHA INDIVIDUAL (CART ITEM)                    */}
{/* =================================================================== */}
interface ItemProps {
  id: number;
  name: string;
  price: number;
  qty: number;
  img: string;
}

function CartItem({ item, onQuantityChange, onRemove }: { 
  item: ItemProps; 
  onQuantityChange: (id: number, action: 'add' | 'sub') => void;
  onRemove: (id: number) => void;
}) {
  return (
    <div className="grid grid-cols-4 gap-4 items-center py-4 px-6 border border-zinc-200/30 dark:border-zinc-800/30 bg-card-bg backdrop-blur-xs rounded-2xl hover:shadow-md transition-all group">
      
      {/* Identificação com botão de lixeira no hover */}
      <div className="flex items-center gap-4 relative">
        <div className="w-14 h-14 bg-zinc-500/5 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl p-1.5 flex items-center justify-center shrink-0 relative overflow-hidden">
          <img src={item.img} className="h-full w-auto object-contain" alt={item.name} />
          {/* Botão flutuante para excluir item */}
          <button 
            onClick={() => onRemove(item.id)}
            type="button"
            className="absolute inset-0 bg-red-600/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            title="Remover produto"
          >
            <Trash size={18} weight="bold" />
          </button>
        </div> 
        <span className="font-bold text-sm leading-tight line-clamp-2 opacity-90">{item.name}</span>
      </div>
      
      {/* Preço Unitário */}
      <span className="font-semibold text-sm opacity-80">
        {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </span>
      
      {/* Controle incremental reativo (substituindo o antigo input manual) */}
      <div className="flex justify-center">
        <div className="flex border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl overflow-hidden bg-zinc-500/5 items-center h-10 max-w-[120px]">
          <button onClick={() => onQuantityChange(item.id, 'sub')} type="button" className="w-9 h-full flex items-center justify-center font-bold hover:bg-amber-500 hover:text-zinc-950 transition-colors cursor-pointer"><Minus size={12} weight="bold" /></button>
          <span className="px-3 font-black font-mono text-xs">{item.qty}</span>
          <button onClick={() => onQuantityChange(item.id, 'add')} type="button" className="w-9 h-full flex items-center justify-center font-bold hover:bg-amber-500 hover:text-zinc-950 transition-colors cursor-pointer"><Plus size={12} weight="bold" /></button>
        </div>
      </div>
      
      {/* Subtotal Calculado */}
      <span className="text-right font-black text-sm text-amber-600 dark:text-amber-400">
        {(item.price * item.qty).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </span>

    </div>
  );
}
