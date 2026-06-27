import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CATEGORIES = [
  "Moda Feminina", "Moda Masculina", "Eletrônicos", 
  "Casa & Estilo de Vida", "Medicina", "Esportes & Outdoor", 
  "Bebês & Brinquedos", "Mercado & Pets", "Saúde & Beleza"
];

export default function HeroSection() {
  return (
    <section className="container mx-auto flex gap-8 py-6">
      {/* Sidebar de Categorias */}
      <nav className="w-64 hidden lg:block border-r pr-4 space-y-4">
        {CATEGORIES.map((cat) => (
          <div key={cat} className="flex justify-between items-center cursor-pointer hover:text-orange-500 transition">
            <span>{cat}</span>
            {cat.includes("Moda") && <span>›</span>}
          </div>
        ))}
      </nav>

      {/* Banner Principal (Carousel) */}
      <div className="flex-1 bg-black text-white p-8 md:p-12 rounded-sm overflow-hidden">
        <Swiper 
          modules={[Pagination, Autoplay]} 
          pagination={{ clickable: true }} 
          autoplay={{ delay: 3000 }}
          className="h-full"
        >
          {[1, 2, 3].map((slide) => (
            <SwiperSlide key={slide}>
              <div className="flex items-center justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl"></span>
                    <span>iPhone 14 Series</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Desconto de até <br/> 10% no voucher
                  </h1>
                  <a href="#" className="inline-block border-b border-white hover:text-orange-500 hover:border-orange-500 transition">
                    Compre Agora →
                  </a>
                </div>
                <div className="hidden md:block">
                  {/* Substitua pelo seu iPhone image */}
                  <div className="w-48 h-48 bg-gray-800 rounded-full flex items-center justify-center">iPhone</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}