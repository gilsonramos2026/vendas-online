import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';

// Array de dados reais e links funcionais de imagens para testes visuais na v4
const BEST_SELLING_PRODUCTS = [
  { 
    id: 1, 
    name: "Jaqueta Corta Vento The North Face", 
    price: 260.00, 
    originalPrice: 360.00, 
    discount: "-27%",
    rating: 5, 
    reviewCount: 65, 
    image: "https://tse3.mm.bing.net/th/id/OIP.Lt38g-Bfqrf5RQVn7THXzQHaIn?pid=Api&P=0&h=180" 
  },
  { 
    id: 2, 
    name: "Bolsa de Viagem Gucci Duffle Canvas", 
    price: 960.00, 
    originalPrice: 1160.00, 
    discount: "-17%",
    rating: 5, 
    reviewCount: 65, 
    image:"https://tse3.mm.bing.net/th/id/OIP.OlCq0xu5YSeeZa6plq2CkwHaHa?pid=Api&P=0&h=180" 
  },
  { 
    id: 3, 
    name: "Water Cooler RGB Liquid CPU Cooler 240mm", 
    price: 160.00, 
    originalPrice: 170.00, 
    discount: "-6%",
    rating: 4.9, 
    reviewCount: 42, 
    image: "https://tse4.mm.bing.net/th/id/OIP.o3Ztd9Dpj26Q4ChkA-Fj8QHaHa?pid=Api&P=0&h=180" 
  },
  { 
    id: 4, 
    name: "Estante de Livros Minimalista em Madeira", 
    price: 360.00, 
    rating: 4.7, 
    reviewCount: 18, 
    image: "https://tse4.mm.bing.net/th/id/OIP.R_bqGX0kwmDGRiOLjC_WrQHaIp?pid=Api&P=0&h=180" 
  },
];

export default function BestSellingSection() {
  return (
    // 🎨 Removido o container fixo para alinhar perfeitamente com a margem do Layout global
    <section className="w-full py-12 text-text-primary border-t border-zinc-200/30 dark:border-zinc-800/50 mt-4">
      
      {/* 🔹 1. CABEÇALHO DA SEÇÃO COM ALINHAMENTO DINÂMICO */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
        <div className="flex flex-col gap-2">
          {/* Tag de destaque na cor Amber padrão da sua loja */}
          <div className="flex items-center gap-2 text-amber-500 font-bold text-sm uppercase tracking-wider">
            <div className="w-4 h-7 bg-amber-500 rounded-md shadow-xs"></div> 
            Este Mês
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Produtos Mais Vendidos</h2>
        </div>

        {/* Botão de navegação convertido em Link real para rotas do app */}
        <Link 
          to="/produtos?filtro=mais-vendidos" 
          className="inline-block bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all text-center cursor-pointer tracking-wide"
        >
          VER TODOS
        </Link>
      </div>

      {/* 🔹 2. GRID DE PRODUTOS RESPONSIVO (2 colunas no mobile, 4 colunas em desktops) */}
      {/* Mantive em formato Grid clássico porque os mais vendidos se comportam muito bem em blocos estáticos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {BEST_SELLING_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
