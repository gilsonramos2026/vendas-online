// 1. Definimos a interface com os tipos das propriedades do botão
interface ButtonProps {
   text: string;
   type?: 'button' | 'submit' | 'reset'; // Define o comportamento do botão no formulário
   onClick?: () => void;                 // Função opcional de clique
}

// 2. Aplicamos a tipagem no componente
export function Button({ text, type = 'button', onClick }: ButtonProps) {
   return (
      <button
         type={type}
         onClick={onClick}
         className="w-full py-3 px-4 mt-2 bg-yellow-500 hover:bg-yellow-100 active:bg-yellow-600 text-blue-500 font-bold uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer"
      >
         {text}
      </button>
   )
}
