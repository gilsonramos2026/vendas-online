interface InputProps {
   label: string;
   placeholder:string;
   type?:  'text'| 'email' | 'password' | 'tel'; 
}
export function InputComponent({label, placeholder, type = 'text'}: InputProps){
   return(
      <div className="flex flex-col gap-1 w-full">
         <label className="text-zinc-300 text-sm font-medium">{label}</label>
         <input 
            type={type} 
            placeholder={placeholder} 
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-zinc-400 focus:outline-hidden focus:border-zinc-400"
         />
      </div>
   )
}