interface CheckoutInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

export function CheckoutInput({ label, placeholder, type = "text", required = false }: CheckoutInputProps) {
  return (
    <div className="flex flex-col gap-2 w-full text-text-primary">
      <label className="text-sm font-bold opacity-80 tracking-wide">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full p-3.5 text-sm rounded-xl bg-zinc-500/5 border border-zinc-300/30 dark:border-white/10 text-text-primary placeholder-zinc-400 focus:outline-hidden focus:border-amber-500 dark:focus:border-amber-400 transition-colors duration-200" 
      />
    </div>
  );
}
