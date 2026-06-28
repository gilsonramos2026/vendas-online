import { Link } from 'react-router-dom';
import { useCountdown } from '../../hooks/useCountdown';

export default function MusicPromoSection() {
  // Mantida a contagem regressiva atrelada ao final do ano atual (2026)
  const { days, hours, minutes, seconds } = useCountdown('2026-12-31T23:59:59');

  // 🔥 CORREÇÃO: Colocado na ordem cronológica correta de leitura (Dias -> Horas -> Minutos -> Segundos)
  const timerItems = [
    { label: 'Dias', value: days },
    { label: 'Horas', value: hours },
    { label: 'Minutos', value: minutes },
    { label: 'Segundos', value: seconds },
  ];

  return (
    // 🎨 Substituído bg-black por zinc-950 para conversar perfeitamente com os tons escuros e com o carrossel superior
    <section className="w-full bg-zinc-950 text-white py-12 px-6 md:px-16 mt-4 rounded-3xl overflow-hidden shadow-xl border border-zinc-900">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* 🔹 1. BLOCO DE TEXTOS E CRONÔMETRO REDONDO */}
        <div className="flex-1 space-y-6 text-center md:text-left w-full">
          <span className="text-amber-500 dark:text-amber-400 text-sm font-bold uppercase tracking-widest">
            Oferta Especial
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Melhore sua <br className="hidden md:inline"/> Experiência Musical
          </h2>
          
          {/* Círculos numéricos do Contador Regressivo */}
          <div className="flex gap-3 justify-center md:justify-start">
            {timerItems.map((item) => (
              <div 
                key={item.label} 
                className="bg-zinc-900 border border-zinc-800 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center p-2 shadow-inner group hover:border-amber-500 transition-colors"
              >
                {/* O uso do font-mono evita que os círculos fiquem pulsando/tremendo na tela */}
                <span className="text-lg sm:text-2xl font-black font-mono text-amber-500 tracking-tight">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Botão de conversão direta integrado ao roteador */}
          <Link 
            to="/produtos?categoria=audio"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-sm px-10 py-4 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all tracking-wide uppercase"
          >
            Comprar Agora!
          </Link>
        </div>

        {/* 🔹 2. AREA DA IMAGEM COM DROP SHADOW AVANÇADO */}
        <div className="flex-1 flex justify-center w-full">
          <img 
            src="https://w7.pngwing.com/pngs/122/791/png-transparent-jbl-boombox-wireless-speaker-loudspeaker-boombox-electronics-sound-wireless.png" 
            alt="Caixa de som Bluetooth Premium" 
            className="w-full max-w-sm sm:max-w-md object-contain drop-shadow-[0_20px_50px_rgba(245,158,11,0.15)] hover:scale-103 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
}
