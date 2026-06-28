import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';

// Array completo contendo exatamente os 8 produtos para preencher as duas linhas do Grid (4x2)
const PRODUCTS = [
  { 
    id: 1, 
    name: "Ração de Cachorro Breed Dry Dog Food Premium", 
    price: 100.00, 
    rating: 4, 
    reviewCount: 35, 
    image: "https://tse3.mm.bing.net/th/id/OIP.a6sLPaMlJI1n3huAZUdAZQHaHa?pid=Api&P=0&h=180" 
  },
  { 
    id: 2, 
    name: "Câmera Fotográfica CANON EOS DSLR Premium", 
    price: 360.00, 
    originalPrice: 420.00,
    discount: "-14%",
    rating: 4.5, 
    reviewCount: 95, 
    image: "https://tse3.mm.bing.net/th/id/OIP.Ezfu4JlKvsr8AMDOPk7LqAHaG3?pid=Api&P=0&h=180" 
  },
  { 
    id: 3, 
    name: "Notebook Asus ZenBook Intel i7 16GB", 
    price: 4500.00, 
    rating: 4.8, 
    reviewCount: 112, 
    image: "https://tse2.mm.bing.net/th/id/OIP.oRx8FhEzfWwmtZVj_RFUsgHaHa?pid=Api&P=0&h=180" 
  },
  { 
    id: 4, 
    name: "Monitor Gamer Curvo 27' 165Hz 1ms", 
    price: 1250.00, 
    rating: 4.6, 
    reviewCount: 74, 
    image: "https://tse2.mm.bing.net/th/id/OIP.8xLFDpkTC5vvTqdYmxiBAAHaHa?pid=Api&P=0&h=180" 
  },
  { 
    id: 5, 
    name: "Cadeira Gamer Reclinável Ergonomica", 
    price: 890.00, 
    originalPrice: 1100.00,
    discount: "-19%",
    rating: 4.3, 
    reviewCount: 49, 
    image: "https://tse1.mm.bing.net/th/id/OIP.ajSfRyps9x-wdgBmJ9VZ3gHaHa?pid=Api&P=0&h=180" 
  },
  { 
    id: 6, 
    name: "Smartphone Android 5G 128GB Câmera Tripla", 
    price: 1999.00, 
    rating: 4.4, 
    reviewCount: 160, 
    image: "https://tse1.mm.bing.net/th/id/OIP.KuN_Zhd5zMsGWQDlSr2-RQHaHa?pid=Api&P=0&h=180" 
  },
  { 
    id: 7, 
    name: "Controle GP11 Shooter USB Gamepad PC/PS3", 
    price: 660.00, 
    rating: 4, 
    reviewCount: 55, 
    image: "https://tse3.mm.bing.net/th/id/OIP.TbDD2wFSLwewJP-gqt3-bAHaEK?pid=Api&P=0&h=180", 
    colors: ['bg-black', 'bg-red-500'] 
  },
  { 
    id: 8, 
    name: "Caixa de Som Portátil Bluetooth Impermeável", 
    price: 299.90, 
    rating: 4.7, 
    reviewCount: 230, 
    image: "https://tse1.mm.bing.net/th/id/OIP.GSX-uidTWLAO-ZxNyU2_oQHaHa?pid=Api&P=0&h=180" 
  },
];

export default function ExploreProducts() {
  return (
    // 🎨 Removido o container fixo para casar com as margens nativas do seu Layout
    <section className="w-full py-12 text-text-primary border-t border-zinc-200/30 dark:border-zinc-800/50 mt-4">
      
      {/* 🔹 1. CABEÇALHO DA VITRINE */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
        <div className="flex flex-col gap-2">
          {/* Tag de destaque lateral alinhada com as outras seções da Home */}
          <div className="flex items-center gap-2 text-amber-500 font-bold text-sm uppercase tracking-wider">
            <div className="w-4 h-7 bg-amber-500 rounded-md shadow-xs"></div> 
            Nossos Produtos
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Explore Nossos Produtos</h2>
        </div>
      </div>

      {/* 🔹 2. GRID DE PRODUTOS RESPONSIVO (2 colunas no mobile, 4 colunas em desktops montando 2 linhas perfeitas) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* 🔹 3. BOTÃO DE ACESSO AO CATÁLOGO COMPLETO */}
      <div className="text-center mt-12">
        <Link 
          to="/produtos"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-sm px-10 py-4 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer tracking-wide uppercase"
        >
          Ver Todos os Produtos &rarr;
        </Link>
      </div>

    </section>
  );
}
