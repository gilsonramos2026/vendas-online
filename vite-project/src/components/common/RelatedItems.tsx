import ProductCard from '../ui/ProductCard';

// Array de simulação com IDs válidos e imagens de internet para testes na v4
const RELATED_PRODUCTS = [
  { 
    id: 1, 
    name: "Controle Havic HV-G92 Gamepad USB", 
    price: 120.00, 
    originalPrice: 160.00, 
    discount: "-40%", 
    rating: 5, 
    reviewCount: 88, 
    image: "https://bing.net" 
  },
  { 
    id: 2, 
    name: "Teclado Gamer Mecânico AK-900 Wired", 
    price: 960.00, 
    originalPrice: 1160.00, 
    discount: "-35%", 
    rating: 4, 
    reviewCount: 75, 
    image: "https://bing.net" 
  },
  { 
    id: 3, 
    name: "Monitor Gamer IPS LCD Ultrawide 24'", 
    price: 370.00, 
    originalPrice: 400.00, 
    discount: "-30%", 
    rating: 5, 
    reviewCount: 99, 
    image: "https://bing.net" 
  },
  { 
    id: 4, 
    name: "Water Cooler RGB Liquid CPU Cooler 120mm", 
    price: 160.00, 
    originalPrice: 170.00, 
    rating: 5, 
    reviewCount: 65, 
    image: "https://bing.net" 
  },
];

export default function RelatedItems() {
  return (
    // 🎨 Removido container fixo para casar com as margens nativas do seu Layout v4
    <section className="w-full py-12 text-text-primary border-t border-zinc-200/30 dark:border-zinc-800/50 mt-12">
      
      {/* 🔹 Header da Seção Alinhado */}
      <div className="flex items-center gap-2 text-amber-500 font-bold mb-8 text-sm uppercase tracking-wider">
        <div className="w-4 h-7 bg-amber-500 rounded-md shadow-xs"></div> 
        <h2 className="text-xl font-extrabold tracking-tight text-text-primary">Produtos Relacionados</h2>
      </div>

      {/* 🔹 Grid de 4 Colunas Responsivo (Mobile First) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {RELATED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
}
