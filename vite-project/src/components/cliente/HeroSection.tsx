import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Importação dos estilos obrigatórios do Swiper
import 'swiper/css';
import 'swiper/css/pagination';

export function HeroSection() {
  return (
    // 🎨 CORREÇÃO: Adicionado lg:w-full, lg:flex-grow e min-w-0 para forçar o Swiper a ocupar o espaço em monitores grandes
    <div className="w-full lg:w-full lg:grow min-w-0 bg-zinc-950 text-white p-6 md:p-12 rounded-2xl overflow-hidden min-h-[320px] md:min-h-[380px] shadow-lg relative flex flex-col justify-center">
      <Swiper 
        modules={[Pagination, Autoplay]} 
        pagination={{ clickable: true }} 
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full h-full" // 👈 Força largura total para o cálculo interno do Swiper v4
      >
        {[1, 2, 3].map((slide) => (
          <SwiperSlide key={slide}>
            <div className="flex flex-col md:flex-row items-center justify-between h-full gap-6 pb-6 md:pb-0">
              
              {/* Textos e Chamada de Ação */}
              <div className="space-y-4 text-center md:text-left flex-1">
                <div className="flex items-center justify-center md:justify-start gap-2.5 opacity-90">
                  <span className="text-3xl md:text-4xl font-light"></span>
                  <span className="text-xs md:text-sm uppercase tracking-widest font-semibold text-zinc-400">
                    iPhone 14 Series
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Desconto de até <br className="hidden sm:inline"/> 10% no voucher
                </h1>
                
                <Link 
                  to="/produtos" 
                  className="inline-flex items-center gap-1.5 border-b-2 border-white pb-1 font-bold text-sm hover:text-amber-400 hover:border-amber-400 transition-all mt-2"
                >
                  Compre Agora &rarr;
                </Link>
              </div>
              
              {/* Imagem do Produto */}
              <div className="hidden sm:flex items-center justify-center flex-shrink-0">
                <div className="w-40 h-40 md:w-56 md:h-56 bg-zinc-900 border border-zinc-800 rounded-3xl flex items-center justify-center text-sm font-bold text-zinc-500 shadow-inner">
                  [ Imagem do iPhone ]
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
