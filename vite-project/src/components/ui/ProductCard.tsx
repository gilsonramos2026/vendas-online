import { Link } from 'react-router-dom'; // 👈 1. Importação do Link adicionada
import { Heart, Eye, Star, ShoppingCart } from '@phosphor-icons/react';

interface Product {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  reviewCount: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const roundedRating = Math.round(product.rating);

  return (
    <div className="group relative w-full flex flex-col text-text-primary h-full">
      
      {/* 🔹 1. ÁREA DA IMAGEM */}
      <div className="relative bg-zinc-500/5 border border-zinc-200/50 dark:border-zinc-800/50 h-64 flex items-center justify-center rounded-2xl overflow-hidden backdrop-blur-xs transition-all duration-300">
        
        {product.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm z-10 animate-pulse">
            {product.discount}
          </span>
        )}
        
        {/* Ícones Flutuantes */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10 md:opacity-0 md:group-hover:opacity-100 md:translate-x-2 md:group-hover:translate-x-0 transition-all duration-300">
          <button 
            type="button" 
            className="bg-card-bg text-text-primary p-2.5 rounded-full border border-zinc-200/30 dark:border-zinc-800/30 shadow-md hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
            title="Adicionar aos favoritos"
          >
            <Heart size={16} weight="bold" />
          </button>
          {/* 🔗 2. O olhinho de visualização também pode mandar para os detalhes */}
          <Link 
            to={`/produto/${product.id}`}
            className="bg-card-bg text-text-primary p-2.5 rounded-full border border-zinc-200/30 dark:border-zinc-800/30 shadow-md hover:bg-amber-500 hover:text-zinc-950 dark:hover:bg-amber-500 dark:hover:text-zinc-950 hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
            title="Visualização rápida"
          >
            <Eye size={16} weight="bold" />
          </Link>
        </div>

        {/* 🔗 3. Imagem envolvida em um Link para abrir os detalhes ao clicar nela */}
        <Link to={`/produto/${product.id}`} className="h-44 w-auto flex items-center justify-center cursor-pointer z-0">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500 will-change-transform" 
          />
        </Link>

        <button 
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="absolute bottom-0 w-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-bold text-xs py-3.5 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg cursor-pointer"
          aria-label={`Adicionar ${product.name} ao carrinho`}
        >
          <ShoppingCart size={16} weight="bold" />
          ADICIONAR AO CARRINHO
        </button>
      </div>

      {/* 🔹 2. INFORMAÇÕES */}
      <div className="mt-4 space-y-1.5 px-1 flex-1">
        {/* 🔗 4. Título do produto envolvido em um Link para abrir ao clicar no texto */}
        <h3 className="font-bold text-sm leading-snug line-clamp-1 opacity-90 group-hover:text-amber-500 transition-colors">
          <Link to={`/produto/${product.id}`} className="hover:underline cursor-pointer">
            {product.name}
          </Link>
        </h3>
        
        <div className="flex items-baseline gap-2.5 font-bold">
          <span className="text-red-600 text-base">
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
          {product.originalPrice && (
            <span className="text-zinc-400 line-through text-xs font-semibold">
              {product.originalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-1.5 text-xs">
          <div className="flex text-amber-500" aria-label={`Avaliação: ${product.rating} de 5 estrelas`}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} weight={i < roundedRating ? "fill" : "regular"} />
            ))}
          </div>
          <span className="text-zinc-400 font-medium">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}
