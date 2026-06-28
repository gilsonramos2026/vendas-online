import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { DeviceMobile, Desktop, Watch, Camera, Headset, GameController, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { CategoryCard } from '../ui/CategoryCard'; // 👈 Importando o seu card do arquivo separado

// Importação base de estruturas do Swiper
import 'swiper/css';

const CATEGORIES = [
  { icon: <DeviceMobile weight="duotone" />, label: 'Celulares' },
  { icon: <Desktop weight="duotone" />, label: 'Computadores' },
  { icon: <Watch weight="duotone" />, label: 'SmartWatch' },
  { icon: <Camera weight="duotone" />, label: 'Câmeras' },
  { icon: <Headset weight="duotone" />, label: 'Headphones' },
  { icon: <GameController weight="duotone" />, label: 'Gaming' },
];

export default function CategorySection() {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  return (
    <section className="w-full py-12 text-text-primary border-t border-zinc-200/30 dark:border-zinc-800/50 mt-4">
      
      {/* 🔹 CABEÇALHO DA SEÇÃO COM CONTROLES CUSTOMIZADOS */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-amber-500 font-bold text-sm uppercase tracking-wider">
            <div className="w-4 h-7 bg-amber-500 rounded-md shadow-xs"></div> 
            Categorias
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Navegar por Categoria</h2>
        </div>
        
        {/* Setas de navegação do carrossel */}
        <div className="flex gap-2.5">
          <button 
            onClick={() => swiperRef?.slidePrev()}
            type="button" 
            className="p-2.5 bg-zinc-500/5 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl hover:bg-amber-500 hover:text-zinc-950 transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center"
          >
            <CaretLeft size={16} weight="bold" />
          </button>
          <button 
            onClick={() => swiperRef?.slideNext()}
            type="button" 
            className="p-2.5 bg-zinc-500/5 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl hover:bg-amber-500 hover:text-zinc-950 transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center"
          >
            <CaretRight size={16} weight="bold" />
          </button>
        </div>
      </div>

      {/* 🔹 CARROSSEL EM UMA LINHA SÓ */}
      <div className="w-full relative px-1">
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperRef}
          spaceBetween={16}
          slidesPerView={2} // Mobile: 2 itens por vez deslizando de lado
          breakpoints={{
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 } // Desktop: Trava os 6 itens na mesma linha horizontal
          }}
          className="w-full"
        >
          {CATEGORIES.map((cat, i) => (
            <SwiperSlide key={i} className="h-auto">
              <CategoryCard icon={cat.icon} label={cat.label} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}
