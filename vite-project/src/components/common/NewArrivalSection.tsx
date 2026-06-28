import { Link } from 'react-router-dom';

export default function NewArrivalSection() {
  return (
    // 🎨 Removido container fixo para casar com as margens nativas do seu Layout
    <section className="w-full py-12 text-text-primary border-t border-zinc-200/30 dark:border-zinc-800/50 mt-4">
      
      {/* 🔹 1. CABEÇALHO DA SEÇÃO */}
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2 text-amber-500 font-bold text-sm uppercase tracking-wider">
          <div className="w-4 h-7 bg-amber-500 rounded-md shadow-xs"></div> 
          Novidades
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Novas Chegadas</h2>
      </div>

      {/* 🔹 2. GRID BENTO BOX RESPONSIVO (Altura dinâmica em mobile, fixa h-[600px] em telas grandes) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 lg:h-[550px]">
        
        {/* CARD GIGANTE 1: PlayStation 5 (Ocupa 2 colunas no desktop) */}
        <div className="md:col-span-2 bg-zinc-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-end min-h-[300px] relative overflow-hidden group shadow-lg border border-zinc-900">
          <img 
            src="https://orami.co.id" 
            alt="PS5" 
            className="absolute right-0 bottom-0 h-3/4 md:h-4/5 object-contain opacity-80 group-hover:scale-103 transition-transform duration-500" 
          />
          <div className="relative z-10 space-y-2">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">PlayStation 5</h3>
            <p className="text-xs sm:text-sm opacity-70 max-w-xs leading-relaxed">
              Edições exclusivas em preto e branco já disponíveis no estoque.
            </p>
            <Link 
              to="/produtos?busca=ps5" 
              className="inline-block underline font-bold text-xs sm:text-sm hover:text-amber-400 transition-colors pt-2"
            >
              Comprar Agora &rarr;
            </Link>
          </div>
        </div>

        {/* COLUNA DA DIREITA: Sub-divisão em grid */}
        <div className="md:col-span-2 grid grid-rows-1 md:grid-rows-2 gap-4 sm:gap-6">
          
          {/* CARD DESTAQUE 2: Coleções Femininas */}
          <div className="bg-zinc-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-end min-h-[220px] relative overflow-hidden group shadow-lg border border-zinc-900">
            <img 
              src="https://orami.co.id" 
              alt="Moda Feminina" 
              className="absolute right-0 bottom-0 h-full w-1/2 object-contain opacity-60 group-hover:scale-103 transition-transform duration-500" 
            />
            <div className="relative z-10 space-y-1.5 max-w-xs">
              <h3 className="text-xl font-extrabold tracking-tight">Coleções Femininas</h3>
              <p className="text-xs opacity-75 leading-relaxed">Estilos selecionados com conceitos inovadores para a estação.</p>
              <Link to="/produtos?categoria=moda-feminina" className="inline-block underline font-bold text-xs hover:text-amber-400 transition-colors pt-1">
                Comprar Agora &rarr;
              </Link>
            </div>
          </div>

          {/* PAR INFERIOR: Grid dividido em 2 colunas horizontais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            
            {/* CARD METADE 3: Speakers */}
            <div className="bg-zinc-950 text-white rounded-2xl p-5 flex flex-col justify-end min-h-[180px] relative overflow-hidden group shadow-lg border border-zinc-900">
              <img 
                src="https://orami.co.id" 
                alt="Speakers" 
                className="absolute right-2 top-2 h-1/2 object-contain opacity-70 group-hover:rotate-6 transition-all duration-300" 
              />
              <div className="relative z-10">
                <h3 className="font-extrabold text-base tracking-tight">Áudio & Som</h3>
                <Link to="/produtos?categoria=audio" className="underline text-xs font-bold text-zinc-400 hover:text-amber-400 transition-colors block mt-1">
                  Ver Novidades
                </Link>
              </div>
            </div>

            {/* CARD METADE 4: Perfume */}
            <div className="bg-zinc-950 text-white rounded-2xl p-5 flex flex-col justify-end min-h-[180px] relative overflow-hidden group shadow-lg border border-zinc-900">
              <img 
                src="https://orami.co.id" 
                alt="Perfume" 
                className="absolute right-2 top-2 h-1/2 object-contain opacity-70 group-hover:scale-105 transition-all duration-300" 
              />
              <div className="relative z-10">
                <h3 className="font-extrabold text-base tracking-tight">Perfumes</h3>
                <Link to="/produtos?categoria=beleza" className="underline text-xs font-bold text-zinc-400 hover:text-amber-400 transition-colors block mt-1">
                  Ver Novidades
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
