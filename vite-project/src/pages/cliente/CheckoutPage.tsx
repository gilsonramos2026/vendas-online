import { Link } from 'react-router-dom';
import { CheckoutInput } from '../../components/ui/CheckoutInput';

// Mock de dados dos produtos selecionados para o resumo
const SUMMARY_ITEMS = [
  { id: 1, name: "Monitor Gamer IPS LCD 24'", price: 650.00, img: "https://bing.net" },
  { id: 2, name: "Controle Havic HV G-92 Gamepad", price: 1100.00, img: "https://bing.net" }
];

export default function CheckoutPage() {
  const subtotal = SUMMARY_ITEMS.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal;

  return (
    // 🎨 Removido o container fixo para alinhar 100% com o grid global do seu Layout
    <main className="w-full text-text-primary animate-fade-in py-6 sm:py-10">
      
      {/* Breadcrumb Traduzido */}
      <nav className="text-xs sm:text-sm opacity-60 mb-10 font-medium tracking-wide">
        <Link to="/home" className="hover:text-amber-500 transition-colors">Início</Link> / 
        <Link to="/cart" className="hover:text-amber-500 transition-colors">Carrinho</Link> / 
        <span className="font-bold opacity-100 text-amber-500"> Finalizar Compra</span>
      </nav>

      {/* Grid Bento Layout dividido em duas colunas (Formulário vs Resumo) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* 🔹 COLUNA DA ESQUERDA: DADOS DE FATURAMENTO */}
        <section className="lg:col-span-6 space-y-6 w-full">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">
            Detalhes do Faturamento
          </h1>
          
          <form className="space-y-4 w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CheckoutInput label="Nome" placeholder="Seu nome" required />
              <CheckoutInput label="Sobrenome" placeholder="Seu sobrenome" required />
            </div>
            <CheckoutInput label="Nome da Empresa (Opcional)" placeholder="Empresa LTDA" />
            <CheckoutInput label="Endereço Residencial" placeholder="Rua, número, bairro..." required />
            <CheckoutInput label="Complemento (Opcional)" placeholder="Apartamento, bloco, etc." />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CheckoutInput label="Cidade" placeholder="Sua cidade" required />
              <CheckoutInput label="Estado" placeholder="SP, RJ, MG..." required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CheckoutInput label="Telefone" placeholder="(11) 99999-9999" type="tel" required />
              <CheckoutInput label="E-mail" placeholder="seu-email@exemplo.com" type="email" required />
            </div>

            {/* Checkbox customizado estilizado para o tema v4 */}
            <div className="flex items-center gap-3 pt-2">
              <input 
                type="checkbox" 
                id="save-info" 
                className="w-4 h-4 rounded-sm border-zinc-300 text-amber-500 focus:ring-amber-500 cursor-pointer" 
              />
              <label htmlFor="save-info" className="text-xs sm:text-sm font-medium opacity-80 cursor-pointer select-none">
                Salvar essas informações para compras mais rápidas na próxima vez
              </label>
            </div>
          </form>
        </section>

        {/* =================================================================== */}
        {/* RESUMO DO PEDIDO E PAGAMENTO (CONTINUA NO ARQUIVO DA PARTE 2)       */}
        {/* =================================================================== */}

                {/* =================================================================== */}
        {/* 🔹 COLUNA DA DIREITA: RESUMO DO PEDIDO E PAGAMENTO                 */}
        {/* =================================================================== */}
        <section className="lg:col-span-6 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 sm:p-8 space-y-6 bg-card-bg backdrop-blur-md shadow-xl w-full">
          <h2 className="text-xl font-black tracking-tight mb-2">Resumo do Pedido</h2>
          
          {/* Listagem de Itens do Resumo */}
          <div className="space-y-4">
            {SUMMARY_ITEMS.map((item) => (
              <div key={item.id} className="flex justify-between items-center group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-500/5 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl p-1 flex items-center justify-center shrink-0">
                    <img src={item.img} className="h-full w-auto object-contain" alt={item.name} />
                  </div>
                  <span className="text-sm font-bold opacity-80 group-hover:text-amber-500 transition-colors line-clamp-1">{item.name}</span>
                </div>
                <span className="font-black text-sm whitespace-nowrap">
                  {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
              </div>
            ))}
          </div>

          <hr className="border-zinc-200/30 dark:border-zinc-800/30" />

          {/* Subtotais Financeiros */}
          <div className="space-y-3 text-sm font-semibold opacity-90">
            <div className="flex justify-between border-b border-zinc-200/20 dark:border-zinc-800/20 pb-2">
              <span>Subtotal:</span> 
              <span>{subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div className="flex justify-between border-b border-zinc-200/20 dark:border-zinc-800/20 pb-2">
              <span>Frete:</span> 
              <span className="text-emerald-500 font-bold uppercase text-xs bg-emerald-500/10 px-2 py-0.5 rounded-md">Grátis</span>
            </div>
            <div className="flex justify-between items-baseline font-black text-base pt-1">
              <span>Total Geral:</span> 
              <span className="text-red-500 text-xl">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
          </div>

          <hr className="border-zinc-200/30 dark:border-zinc-800/30" />

          {/* Opções de Pagamento Customizadas */}
          <div className="space-y-3.5 font-bold text-sm">
            <div className="flex justify-between items-center bg-zinc-500/5 p-3 rounded-xl border border-zinc-200/30 dark:border-zinc-800/30">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input type="radio" name="pay-method" defaultChecked className="w-4 h-4 text-amber-500 focus:ring-amber-500" /> 
                Pix / Cartão de Crédito
              </label>
              {/* Texto simulando bandeiras integradas ao tema */}
              <span className="text-[10px] uppercase font-black text-zinc-400 tracking-wider">🔒 Ambiente Seguro</span>
            </div>
            
            <div className="flex justify-between items-center bg-zinc-500/5 p-3 rounded-xl border border-zinc-200/30 dark:border-zinc-800/30">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input type="radio" name="pay-method" className="w-4 h-4 text-amber-500 focus:ring-amber-500" /> 
                Boleto Bancário
              </label>
            </div>
          </div>

          {/* Bloco de Cupom de Desconto */}
          <div className="flex gap-3 w-full pt-2">
            <input 
              type="text" 
              placeholder="Código do Cupom" 
              className="flex-1 p-3 text-xs rounded-xl bg-zinc-500/5 border border-zinc-300/30 dark:border-white/10 text-text-primary placeholder-zinc-400 focus:outline-hidden focus:border-amber-500 dark:focus:border-amber-400 transition-colors" 
            />
            <button type="button" className="bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-bold text-xs px-5 rounded-xl hover:opacity-90 active:scale-95 transition-all cursor-pointer whitespace-nowrap">
              APLICAR
            </button>
          </div>

          {/* Botão de Disparo Final */}
          <button 
            type="button" 
            onClick={() => alert("Pedido realizado com sucesso! 🎉")}
            className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-sm py-4 rounded-xl shadow-md hover:shadow-lg active:scale-98 transition-all tracking-wide uppercase mt-4 cursor-pointer"
          >
            FINALIZAR PEDIDO →
          </button>
        </section>

      </div>
    </main>
  );
}
