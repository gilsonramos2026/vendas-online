import { Link } from 'react-router-dom';
import { CaretRight } from '@phosphor-icons/react';

const CATEGORIES = [
  { name: 'Moda Feminina', slug: 'moda-feminina', hasSub: true },
  { name: 'Moda Masculina', slug: 'moda-masculina', hasSub: true },
  { name: 'Eletrônicos', slug: 'eletronicos', hasSub: false },
  { name: 'Casa & Estilo de Vida', slug: 'casa-estilo-de-vida', hasSub: false },
  { name: 'Medicina', slug: 'medicina', hasSub: false },
  { name: 'Esportes & Outdoor', slug: 'esportes-outdoor', hasSub: false },
  { name: 'Bebês & Brinquedos', slug: 'bebes-brinquedos', hasSub: false },
  { name: 'Mercado & Pets', slug: 'mercado-pets', hasSub: false },
  { name: 'Saúde & Beleza', slug: 'saude-beleza', hasSub: false },
];

export function CategorySidebar() {
  return (
    // 🎨 Ajustado com as bordas e fontes nativas do seu Tailwind v4
    <aside className="w-64 border-r border-zinc-200/50 dark:border-zinc-800 py-2 hidden lg:block text-text-primary">
      <nav className="flex flex-col pr-4 space-y-1">
        {CATEGORIES.map((cat, index) => (
          <Link
            key={index}
            to={`/produtos?categoria=${cat.slug}`}
            className="flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-xl hover:bg-zinc-500/5 hover:text-amber-500 transition-all opacity-90 hover:opacity-100 group"
          >
            <span>{cat.name}</span>
            {cat.hasSub && (
              <CaretRight 
                size={14} 
                weight="bold" 
                className="text-zinc-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all" 
              />
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
