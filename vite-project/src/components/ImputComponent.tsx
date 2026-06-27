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
  return (
    <div className="flex flex-col gap-1 w-full">
      {/* text-text-primary muda de cinza/branco para preto automaticamente */}
      <label className="text-text-primary text-sm font-medium opacity-80">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 rounded-xl bg-zinc-500/10 dark:bg-white/10 border border-zinc-300 dark:border-white/20 text-text-primary placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-hidden focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
      />
    </div>
  );
}
