interface InputProps {
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password" | "tel";
  value: string;
  onChange: (value: string) => void;
  loading?: boolean; // ADICIONADO: Propriedade opcional para ativar o loading
}

export function InputComponent({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  loading = false, // Padrão é falso
}: InputProps) {
  
  const applyPhoneMask = (text: string) => {
    let numeric = text.replace(/\D/g, "");
    if (numeric.length > 11) numeric = numeric.slice(0, 11);
    if (numeric.length <= 2) return numeric.replace(/^(\d{2})/, "($1");
    if (numeric.length <= 6) return numeric.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
    if (numeric.length <= 10) return numeric.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    return numeric.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    if (type === "tel") {
      onChange(applyPhoneMask(rawValue));
    } else {
      onChange(rawValue);
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-text-primary text-sm font-medium opacity-80">
        {label}
      </label>
      
      {/* Container relativo para conseguir posicionar o spinner por cima do input */}
      <div className="relative w-full flex items-center">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={loading} // Bloqueia o input enquanto estiver carregando
          // pr-10 garante que o texto digitado não fique por baixo do ícone de loading
          className="w-full p-3 pr-10 rounded-xl bg-zinc-500/10 dark:bg-white/10 border border-zinc-300 dark:border-white/20 text-text-primary placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-hidden focus:border-amber-500 dark:focus:border-amber-400 transition-colors disabled:opacity-50"
        />

        {/* Renderiza o Spinner animado do Tailwind se a propriedade loading for TRUE */}
        {loading && (
          <div className="absolute right-3 flex items-center pointer-events-none">
            <svg 
              className="animate-spin h-5 w-5 text-amber-500 dark:text-amber-400" 
              xmlns="http://w3.org" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
