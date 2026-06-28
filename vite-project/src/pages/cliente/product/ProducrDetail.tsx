import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Heart, Truck, ArrowClockwise } from '@phosphor-icons/react';
import RelatedItems from '../../../components/common/RelatedItems';

// Simulação de Imagens para o Produto
const PRODUCT_IMAGES = [
  "https://tse2.mm.bing.net/th/id/OIP.2DwMQm9Qn3KHJuHwwZUxdAAAAA?pid=Api&P=0&h=180", // Principal
  "https://tse1.mm.bing.net/th/id/OIP.kLQNMFrs85Q43slyxF60ZwAAAA?pid=Api&P=0&h=180", // Thumb 1
  "https://tse4.mm.bing.net/th/id/OIP.y-W9mSg8aGMKgyGP0uNRKgHaHa?pid=Api&P=0&h=180", // Thumb 2
  "https://tse4.mm.bing.net/th/id/OIP.Ps64AcXCuO81tQQ12WrU4wHaHa?pid=Api&P=0&h=180", // Thumb 3
];

export default function ProductDetails() {
  const { slug } = useParams();
  
  // 🔹 Hooks e Estados Isolados Reativos
  const [activeImg, setActiveImg] = useState(PRODUCT_IMAGES[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<'azul' | 'vermelho'>('azul');
  const [selectedSize, setSelectedSize] = useState('M');

  // Funções de controle de quantidade protegidas contra números inválidos
  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    // 🎨 O contêiner já adota text-text-primary e remove as margens fixas para alinhar com o Layout v4
    <div className="w-full text-text-primary animate-fade-in py-6 sm:py-10">
      
      {/* 🔹 Caminho de Navegação (Breadcrumb Traduzido) */}
      <nav className="text-xs sm:text-sm opacity-60 mb-8 font-medium tracking-wide">
        <Link to="/home" className="hover:text-amber-500 transition-colors">Início</Link> / 
        <Link to="/produtos?categoria=gaming" className="mx-1 hover:text-amber-500 transition-colors"> Games</Link> / 
        <span className="font-bold opacity-100 text-amber-500"> Havic HV G-92 Gamepad</span>
      </nav>

      {/* Grid Principal Adaptado para Mobile First */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        {/* =================================================================== */}
        {/* 🔹 1. GALERIA DE IMAGENS COMPATÍVEL COM TELA CHEIA E TEMA v4        */}
        {/* =================================================================== */}
        <div className="flex flex-col-reverse sm:flex-row gap-4 w-full">
          
          {/* Miniaturas Laterais (Ficam embaixo no mobile e na esquerda em computadores) */}
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0 justify-center">
            {PRODUCT_IMAGES.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImg(imgUrl)}
                className={`w-20 h-20 sm:w-24 sm:h-24 bg-zinc-500/5 border rounded-2xl flex items-center justify-center p-2 backdrop-blur-xs cursor-pointer transition-all ${
                  activeImg === imgUrl ? 'border-amber-500 shadow-md scale-95' : 'border-zinc-200/50 dark:border-zinc-800/50 hover:border-zinc-400'
                }`}
              >
                <img src={imgUrl} alt={`Miniatura ${idx + 1}`} className="h-full w-auto object-contain rounded-xl" />
              </button>
            ))}
          </div>
          
          {/* Imagem em Destaque Principal */}
          <div className="flex-1 bg-zinc-500/5 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 flex items-center justify-center min-h-[300px] sm:min-h-[420px] backdrop-blur-md shadow-lg relative group">
            <img 
              src={activeImg} 
              alt="Produto Principal" 
              className="h-60 sm:h-80 w-auto object-contain group-hover:scale-103 transition-transform duration-500 will-change-transform" 
            />
          </div>
        </div>

                {/* =================================================================== */}
        {/* 🔹 2. DETALHES DE COMPRA E PREÇOS (LADO DIREITO DO GRID)            */}
        {/* =================================================================== */}
        <div className="space-y-5 sm:space-y-6 w-full">
          
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Controle Havic HV G-92 Gamepad
            </h1>
            
            {/* Bloco de Avaliações e Estoque Reativo */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold flex-wrap">
              <div className="flex text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} weight="fill" />
                ))}
              </div>
              <span className="opacity-50">(150 Avaliações)</span>
              <span className="opacity-30">|</span>
              <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-lg animate-pulse">
                Em Estoque
              </span>
            </div>
          </div>

          {/* Formatação de Preço Nacionalizado (R$) */}
          <p className="text-2xl sm:text-3xl font-black text-red-500 tracking-tight">
            {(192.00).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
          
          <p className="text-xs sm:text-sm opacity-80 leading-relaxed max-w-md">
            Película de vinil de alta qualidade para controle de PlayStation 5 com adesivo de canal de ar para instalação fácil e sem bolhas, além de remoção limpa. Sensível à pressão.
          </p>
          
          <hr className="border-zinc-200/50 dark:border-zinc-800/50" />

          {/* Seleção de Cores Integrada */}
          <div className="flex items-center gap-4 text-sm font-bold">
            <span className="opacity-80">Cores:</span>
            <div className="flex gap-3">
              <button 
                type="button"
                onClick={() => setSelectedColor('azul')}
                className={`w-6 h-6 rounded-full bg-blue-400 cursor-pointer transition-transform ${selectedColor === 'azul' ? 'scale-115 ring-2 ring-amber-500 ring-offset-2 dark:ring-offset-zinc-950' : 'hover:scale-105'}`}
                title="Azul Estelar"
              />
              <button 
                type="button"
                onClick={() => setSelectedColor('vermelho')}
                className={`w-6 h-6 rounded-full bg-red-500 cursor-pointer transition-transform ${selectedColor === 'vermelho' ? 'scale-115 ring-2 ring-amber-500 ring-offset-2 dark:ring-offset-zinc-950' : 'hover:scale-105'}`}
                title="Vermelho Vulcão"
              />
            </div>
          </div>

          {/* Seleção de Tamanhos com Design de Vidro v4 */}
          <div className="flex items-center gap-3 text-sm font-bold flex-wrap">
            <span className="opacity-80 mr-1">Opções:</span>
            {['Padrão', 'Pró', 'Elite'].map(size => (
              <button 
                key={size} 
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`border text-xs py-2 px-4 rounded-xl font-bold transition-all cursor-pointer ${
                  selectedSize === size 
                    ? 'bg-amber-500 border-amber-500 text-zinc-950 shadow-md' 
                    : 'border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-500/5 hover:border-zinc-400 text-text-primary'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Bloco de Controle de Quantidade e CTAs (Mobile First) */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
            
            {/* Input Incremental de Quantidade */}
            <div className="flex border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl overflow-hidden bg-zinc-500/5 shrink-0 justify-between items-center h-12">
              <button onClick={handleDecrease} type="button" className="w-12 h-full flex items-center justify-center font-bold text-lg hover:bg-amber-500 hover:text-zinc-950 transition-colors cursor-pointer"><Minus size={14} weight="bold" /></button>
              <span className="px-6 font-black font-mono text-sm">{quantity}</span>
              <button onClick={handleIncrease} type="button" className="w-12 h-full flex items-center justify-center font-bold text-lg hover:bg-amber-500 hover:text-zinc-950 transition-colors cursor-pointer"><Plus size={14} weight="bold" /></button>
            </div>
            
            {/* Botão Principal de Compra */}
            <button type="button" className="flex-1 h-12 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-sm px-8 rounded-xl shadow-md hover:shadow-lg active:scale-98 transition-all tracking-wide uppercase cursor-pointer">
              Comprar Agora
            </button>
            
            {/* Favoritar */}
            <button type="button" className="h-12 w-12 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl flex items-center justify-center hover:text-red-500 bg-zinc-500/5 hover:border-zinc-400 transition-colors cursor-pointer shrink-0">
              <Heart size={20} weight="bold" />
            </button>
          </div>

          {/* 🔹 3. BLOCO DE SERVIÇOS E GARANTIAS (BENTO LAYOUT INTEGRADO) */}
          <div className="border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl bg-zinc-500/5 backdrop-blur-xs overflow-hidden mt-6 max-w-md">
            <div className="flex items-center gap-4 p-4 border-b border-zinc-200/50 dark:border-zinc-800/50">
              <div className="text-amber-500"><Truck size={28} weight="duotone" /></div>
              <div>
                <p className="font-bold text-sm">Frete Grátis</p>
                <p className="text-xs opacity-70 underline cursor-pointer mt-0.5">Insira seu CEP para verificar a disponibilidade de entrega</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="text-amber-500"><ArrowClockwise size={28} weight="bold" /></div>
              <div>
                <p className="font-bold text-sm">Devolução Descomplicada</p>
                <p className="text-xs opacity-70 mt-0.5">Devolução grátis em até 30 dias. <span className="underline cursor-pointer font-semibold text-amber-500">Saber mais</span></p>
              </div>
            </div>
          </div>

        </div>

      </div>
      <RelatedItems/>
    </div>
  );
}
