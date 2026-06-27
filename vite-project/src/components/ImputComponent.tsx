interface InputProps {
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password" | "tel";
  value: string;
  onChange: (value: string) => void;
}

export function InputComponent({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: InputProps) {
  
  // Função que limpa as letras e aplica o formato de celular dinamicamente
  const applyPhoneMask = (text: string) => {
    // Remove tudo o que não for número bruto
    let numeric = text.replace(/\D/g, "");

    // Trava o tamanho máximo no padrão celular brasileiro de 11 dígitos com DDD
    if (numeric.length > 11) {
      numeric = numeric.slice(0, 11);
    }

    // Formata o texto de forma progressiva conforme a digitação avança
    if (numeric.length <= 2) {
      return numeric.replace(/^(\d{2})/, "($1");
    }
    if (numeric.length <= 6) {
      return numeric.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
    }
    if (numeric.length <= 10) {
      // Mantém o hífen no quarto dígito caso seja número fixo durante a digitação
      return numeric.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    }
    // Aplica o formato celular definitivo: (99) 99999-9999
    return numeric.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;

    if (type === "tel") {
      // Envia o texto já formatado com a máscara para o estado do formulário
      onChange(applyPhoneMask(rawValue));
    } else {
      // Segue o fluxo normal para inputs comuns (email, text, password)
      onChange(rawValue);
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-text-primary text-sm font-medium opacity-80">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange} // Vinculado à função que gerencia as máscaras
        className="w-full p-3 rounded-xl bg-zinc-500/10 dark:bg-white/10 border border-zinc-300 dark:border-white/20 text-text-primary placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-hidden focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
      />
    </div>
  );
}
