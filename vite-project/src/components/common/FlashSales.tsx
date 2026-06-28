import { Link } from 'react-router-dom';
import { useCountdown } from '../../hooks/useCountdown';
import ProductCard from '../ui/ProductCard';

// Array de simulação de produtos (Mocks) com IDs obrigatórios adicionados para o TypeScript
const FLASH_PRODUCTS = [
  {
    id: 1, // 👈 Adicionado
    name: "Controle Sem Fio DualSense - PS5",
    price: 389.90,
    originalPrice: 469.90,
    discount: "-17%",
    rating: 4.8,
    reviewCount: 124,
        image: "https://tse4.mm.bing.net/th/id/OIP.V7fXZhNiTzs6pMsFTT1H0gHaHa?pid=Api&P=0&h=180" 
  },
  {
    id: 2, // 👈 Adicionado
    name: "Teclado Mecânico Gamer RGB",
    price: 249.00,
    originalPrice: 499.00,
    discount: "-50%",
    rating: 4.5,
    reviewCount: 88,
    image: "https://tse3.mm.bing.net/th/id/OIP.gOvJfY4Ar1bqxGHzecgxIwHaDg?pid=Api&P=0&h=180"
  },
  {
    id: 3, // 👈 Adicionado
    name: "Headset Gamer Bluetooth 7.1",
    price: 189.90,
    originalPrice: 279.90,
    discount: "-32%",
    rating: 4.2,
    reviewCount: 56,
    image: "https://tse1.mm.bing.net/th/id/OIP.hOU-YcrH-KI52LtEr9WcLAHaHW?pid=Api&P=0&h=180"
  },
  {
    id: 4, // 👈 Adicionado
    name: "Smartwatch Sport AMOLED",
    price: 320.00,
    originalPrice: 399.00,
    discount: "-20%",
    rating: 4.6,
    reviewCount: 210,
    image: "https://tse3.mm.bing.net/th/id/OIP.aSACABybDIRpM1vLDsRkTgHaHa?pid=Api&P=0&h=180"
  }
];

export default function FlashSales() {
  const { hours, minutes, seconds } = useCountdown('2026-12-31T23:59:59');

  return (
    <section className="max-w-7xl mx-auto py-12 w-full text-text-primary border-t border-zinc-200/30 dark:border-zinc-800/50 mt-4">
      
      {/* 🔹 1. CABEÇALHO DA SEÇÃO COM CRONÔMETRO REATIVO */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-amber-500 font-bold text-sm uppercase tracking-wider">
            <div className="w-4 h-7 bg-amber-500 rounded-md shadow-xs"></div> 
            Hoje
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ofertas Relâmpago</h2>
        </div>

        {/* Blocos numéricos do Contador Regressivo */}
        <div className="flex items-center gap-4 bg-zinc-500/5 border border-zinc-200/30 dark:border-zinc-800/50 p-3 rounded-2xl backdrop-blur-xs">
          {[{ label: 'Horas', val: hours }, { label: 'Minutos', val: minutes }, { label: 'Segundos', val: seconds }].map((t, idx) => (
            <div key={t.label} className="flex items-center gap-4">
              <div className="text-center min-w-[50px]">
                <span className="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-widest block mb-0.5">{t.label}</span>
                <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-amber-500">
                  {String(t.val).padStart(2, '0')}
                </div>
              </div>
              {idx < 2 && <span className="text-xl font-bold opacity-30 text-amber-500 select-none animate-pulse">:</span>}
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 2. GRID DE PRODUTOS RESPONSIVO */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {FLASH_PRODUCTS.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>

      {/* 🔹 3. BOTÃO DE CHAMADA DE AÇÃO (CENTRALIZADO) */}
      <div className="text-center mt-10">
        <Link 
          to="/produtos"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm px-10 py-3.5 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer tracking-wide"
        >
          VER TODOS OS PRODUTOS &rarr;
        </Link>
      </div>

    </section>
  );
}
