import { CategorySidebar } from "../../components/cliente/CategorySidebar";
import { HeroSection } from "../../components/cliente/HeroSection";
import BestSellingSection from "../../components/common/BestSellingSection";
import CategorySection from "../../components/common/CategorySection";
import ExploreProducts from "../../components/common/ExploreProducts";
import FlashSales from "../../components/common/FlashSales";
import MusicPromoSection from "../../components/common/MusicPromoSection";
import NewArrivalSection from "../../components/common/NewArrivalSection";
import ServiceBenefits from "../../components/common/ServiceBenefits";

export function Home() {
  return (
    // 🎨 Container principal empilhado na vertical (flex-col) com espaçamento entre as seções
    <div className="w-full flex flex-col gap-12 animate-fade-in text-text-primary">
      
      {/* =================================================================== */}
      {/* 🔹 BLOCO SUPERIOR: CARROSSEL E SIDEBAR EM UMA LINHA SÓ (DESKTOP)   */}
      {/* =================================================================== */}
      {/* 🔥 lg:flex-nowrap força os dois componentes a ficarem na mesma linha horizontal em telas grandes */}
      <div className="w-full flex flex-col lg:flex-row lg:flex-nowrap gap-8 items-start min-h-[320px] md:min-h-[380px]">
        
        {/* 1. Barra Lateral de Categorias */}
        {/* 🔥 shrink-0 impede que o crescimento do banner esmague a largura da barra lateral */}
        <div className="hidden lg:block shrink-0">
          <CategorySidebar />
        </div>

        {/* 2. Banner Principal com o Carrossel de Imagens do Swiper */}
        {/* flex-1 e min-w-0 fazem o banner ocupar todo o restante da linha horizontal dinamicamente */}
        <div className="flex-1 w-full min-w-0 overflow-hidden rounded-2xl">
          <HeroSection />
        </div>

      </div>

      {/* =================================================================== */}
      {/* 🔹 BLOCO INFERIOR: SEÇÕES COMERCIAIS FLUIDAS                        */}
      {/* =================================================================== */}
      
      {/* Carrossel 1: Ofertas Relâmpago com Cronômetro */}
      <FlashSales />

      {/* Carrossel 2: Ícones Redondos de Categorias */}
      <CategorySection />

      {/* Grid 1: Quatro produtos mais vendidos do mês */}
      <BestSellingSection />

      {/* Banner Estatístico: Caixa de som promocional com tempo de encerramento */}
      <MusicPromoSection />

      {/* Grid 2: Vitrine principal de 8 produtos em duas linhas (4x2) */}
      <ExploreProducts />

      <MusicPromoSection/>

      <NewArrivalSection/>

      <ServiceBenefits/>

    </div>
  );
}
