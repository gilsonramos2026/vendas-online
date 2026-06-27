import { Link } from 'react-router-dom';
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo, PaperPlaneRight } from '@phosphor-icons/react';

export default function Footer() {
  return (
    // 🎨 Aplicado o seu bg-card-bg translúcido e text-text-primary da v4
    <footer className="w-full bg-card-bg text-text-primary border-t border-zinc-200/50 dark:border-zinc-800 py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Novidades e Assinatura */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold tracking-wide uppercase">Novidades</h3>
          <p className="text-sm opacity-80">Assine e ganhe 10% de desconto no seu primeiro pedido.</p>
          <div className="relative border border-zinc-300 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-500/5">
            <input 
              type="email" 
              placeholder="Digite seu e-mail" 
              className="bg-transparent p-2.5 w-full text-sm outline-hidden text-text-primary placeholder-zinc-400" 
            />
            <button className="absolute right-3 top-2.5 text-amber-500 hover:text-amber-400 transition-colors cursor-pointer">
              <PaperPlaneRight size={18} weight="bold" />
            </button>
          </div>
        </div>

        {/* Suporte */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold tracking-wide uppercase">Suporte</h3>
          <p className="text-sm opacity-70">Av. Paulista, 1000 - São Paulo, SP.</p>
          <p className="text-sm opacity-70 hover:text-amber-500 transition-colors">suporte@sualoja.com</p>
          <p className="text-sm opacity-70">0800 777 8888</p>
        </div>

        {/* Conta - Transformado em Links reais */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold tracking-wide uppercase">Conta</h3>
          <ul className="text-sm opacity-70 space-y-2.5 font-medium">
            <li><Link to="/perfil" className="hover:text-amber-500 transition-colors">Minha Conta</Link></li>
            <li><Link to="/login" className="hover:text-amber-500 transition-colors">Login / Cadastro</Link></li>
            <li><Link to="/cart" className="hover:text-amber-500 transition-colors">Meu Carrinho</Link></li>
            <li><Link to="/home" className="hover:text-amber-500 transition-colors">Ir para a Loja</Link></li>
          </ul>
        </div>

        {/* Links Rápidos */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold tracking-wide uppercase">Links Rápidos</h3>
          <ul className="text-sm opacity-70 space-y-2.5 font-medium">
            <li><Link to="/privacidade" className="hover:text-amber-500 transition-colors">Política de Privacidade</Link></li>
            <li><Link to="/termos" className="hover:text-amber-500 transition-colors">Termos de Uso</Link></li>
            <li><Link to="/faq" className="hover:text-amber-500 transition-colors">Perguntas Frequentes (FAQ)</Link></li>
            <li><Link to="/contatos" className="hover:text-amber-500 transition-colors">Fale Conosco</Link></li>
          </ul>
        </div>

        {/* Aplicativo e Redes Sociais */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold tracking-wide uppercase">Baixar App</h3>
          <p className="text-xs opacity-70">Economize mais usando o nosso aplicativo mobile.</p>
          <div className="flex gap-3 items-center">
            {/* Box temporário para QR Code integrado ao tema */}
            <div className="w-16 h-16 bg-zinc-500/10 border border-zinc-300/20 rounded-xl flex items-center justify-center text-[10px] text-center opacity-60">QR Code</div>
            <div className="flex flex-col gap-1.5 flex-1">
              <button className="bg-zinc-500/10 border border-zinc-300/20 hover:bg-zinc-500/20 transition-colors py-1 rounded-lg text-[11px] font-bold cursor-pointer">Google Play</button>
              <button className="bg-zinc-500/10 border border-zinc-300/20 hover:bg-zinc-500/20 transition-colors py-1 rounded-lg text-[11px] font-bold cursor-pointer">App Store</button>
            </div>
          </div>
          {/* Redes Sociais com hover ativo em Amber */}
          <div className="flex gap-4 pt-2 text-text-primary opacity-80">
            <a href="#facebook" className="hover:text-amber-500 hover:scale-110 transition-all"><FacebookLogo size={22} weight="bold" /></a>
            <a href="#twitter" className="hover:text-amber-500 hover:scale-110 transition-all"><TwitterLogo size={22} weight="bold" /></a>
            <a href="#instagram" className="hover:text-amber-500 hover:scale-110 transition-all"><InstagramLogo size={22} weight="bold" /></a>
            <a href="#linkedin" className="hover:text-amber-500 hover:scale-110 transition-all"><LinkedinLogo size={22} weight="bold" /></a>
          </div>
        </div>
      </div>

      {/* Linha de Copyright baseada nas bordas finas do seu tema v4 */}
      <div className="text-center pt-8 text-xs opacity-50 border-t border-zinc-200/50 dark:border-zinc-800/50 mt-8">
        &copy; {new Date().getFullYear()} Vendas Online. Todos os direitos reservados.
      </div>
    </footer>
  );
}
