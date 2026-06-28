import React from 'react';

interface CategoryCardProps {
  icon: React.ReactNode;
  label: string;
}

export function CategoryCard({ icon, label }: CategoryCardProps) {
  return (
    // 🔮 Utiliza o seu vidro translúcido bg-card-bg e responde ao hover mudando para o Amber do projeto
    <button 
      type="button"
      className="w-full flex flex-col items-center justify-center gap-4 p-6 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl bg-card-bg backdrop-blur-xs text-text-primary hover:bg-amber-500 hover:text-zinc-950 dark:hover:bg-amber-500 dark:hover:text-zinc-950 hover:border-amber-500 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
    >
      {/* Container do Ícone responsivo ao hover */}
      <div className="text-3xl text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-zinc-950 transition-colors duration-300 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs sm:text-sm font-bold tracking-wide transition-colors duration-300">
        {label}
      </span>
    </button>
  );
}
