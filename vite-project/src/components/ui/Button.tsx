// 1. Definimos a interface com os tipos das propriedades do botão
interface ButtonProps {
   text: string;
   type?: 'button' | 'submit' | 'reset'; // Define o comportamento do botão no formulário
   onClick?: () => void;                 // Função opcional de clique
}

// 2. Aplicamos a tipagem no componente adaptado para temas do Tailwind v4
export function Button({ text, type = 'button', onClick }: ButtonProps) {
   return (
      <button
         type={type}
         onClick={onClick}
         // bg-amber-500 (Light) e bg-amber-400 (Dark) mantém o padrão visual das abas e títulos
         // text-zinc-950 garante contraste total sobre o fundo amarelo em qualquer tema
         className="w-full py-3 px-4 mt-2 bg-amber-500 dark:bg-amber-400 hover:bg-amber-600 dark:hover:bg-amber-300 active:bg-amber-700 dark:active:bg-amber-500 text-zinc-950 font-bold uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer"
      >
         {text}
      </button>
   )
}
