import { Truck, Headset, ShieldCheck } from '@phosphor-icons/react';

const BENEFITS = [
  {
    icon: <Truck size={28} weight="duotone" />, // Mudado para duotone para um design mais moderno
    title: "ENTREGA RÁPIDA E GRÁTIS",
    desc: "Frete grátis para todo o Brasil em pedidos acima de R$ 300"
  },
  {
    icon: <Headset size={28} weight="duotone" />,
    title: "SUPORTE HUMANO 24/7",
    desc: "Atendimento amigável disponível 24 horas por dia"
  },
  {
    icon: <ShieldCheck size={28} weight="duotone" />,
    title: "GARANTIA DE REEMBOLSO",
    desc: "Devalvemos seu dinheiro em até 30 dias se não gostar"
  }
];

export default function ServiceBenefits() {
  return (
    // 🎨 Removido o container fixo para alinhar 100% com o grid útil do seu Layout
    <section className="w-full py-16 text-text-primary border-t border-zinc-200/30 dark:border-zinc-800/50 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 text-center">
        {BENEFITS.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-5 group">
            
            {/* 🔮 Combo de Círculos com Efeito de Vidro e Hover Animado */}
            <div className="w-20 h-20 bg-zinc-500/10 border border-zinc-200/50 dark:border-zinc-800/50 rounded-full flex items-center justify-center p-2 backdrop-blur-xs group-hover:border-amber-500 transition-all duration-300">
              {/* Círculo interno dinâmico usando o Amber do seu projeto */}
              <div className="w-full h-full bg-zinc-950 dark:bg-zinc-100 text-amber-500 dark:text-amber-600 rounded-full flex items-center justify-center group-hover:scale-95 transition-transform duration-300 shadow-md">
                {item.icon}
              </div>
            </div>
            
            {/* Textos Informativos */}
            <div className="space-y-1.5 max-w-xs">
              <h3 className="font-extrabold text-sm sm:text-base tracking-wide uppercase opacity-90 group-hover:text-amber-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium opacity-70 leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
