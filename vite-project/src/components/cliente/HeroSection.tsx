import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import iphone from "../../assets/iphone.png";

// Importação dos estilos obrigatórios do Swiper
import 'swiper/css';
import 'swiper/css/pagination';

export function HeroSection() {
  return (
    <div className="w-full lg:w-full lg:grow min-w-0 bg-zinc-950 text-white p-6 md:p-12 rounded-2xl overflow-hidden min-h-[320px] md:min-h-[380px] shadow-lg relative flex flex-col justify-center">
      <Swiper 
        modules={[Pagination, Autoplay]} 
        pagination={{ clickable: true }} 
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full h-full"
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
              
              {/* 🔹 IMAGEM DO PRODUTO REFORMULADA */}
              <div className="hidden sm:flex items-center justify-center flex-shrink-0 flex-1 h-full max-w-[280px] md:max-w-[340px]">
                {/* 
                  🔥 MUDANÇAS AQUI:
                  - Removido o quadrado cinza de fundo.
                  - Adicionada a classe 'animate-bounce' controlada ou efeito hover de escala.
                  - Drop-shadow avançado cria uma iluminação branca/neon sutil por trás do aparelho no fundo preto.
                */}
                <img 
                  src={iphone} 
                  alt="iPhone 14 Pro" 
                  className="w-full h-auto object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.18)] max-h-[220px] md:max-h-[280px] transition-transform duration-700 hover:scale-105 select-none"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
