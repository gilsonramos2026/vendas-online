import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputComponent } from "../../components/ImputComponent";
import { useTheme } from "../../context/ThemeContext"; // Importando o hook de tema

export function Login() {
  const { theme, toggleTheme } = useTheme(); // Captura o tema atual e a função de troca
  const [loginMethod, setLoginMethod] = useState<'credentials' | 'phone-token'>('credentials');
  const [isTokenSent, setIsTokenSent] = useState(false);

  const handleLogin = () => {
    alert("Processing login...");
  };

  const handleSendToken = () => {
    setIsTokenSent(true);
    alert("Verification code sent to your phone!");
  };

  return (
    // bg-bg-primary garante que se a imagem falhar, a cor de fundo correta do tema assume
    <section className="min-h-screen w-full flex items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat p-4 md:p-8 bg-bg-primary transition-colors duration-300 relative">
      
      {/* Botão flutuante minimalista de Alternância de Tema */}
      <button
        type="button"
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-3 rounded-xl bg-amber-400 text-zinc-950 font-bold shadow-lg hover:bg-amber-300 transition-all cursor-pointer flex items-center gap-2 text-xs sm:text-sm z-50"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      {/* Painel Central: Utiliza bg-card-bg e text-text-primary controlados pelo tema */}
      <section className="w-11/12 sm:w-4/5 lg:w-full lg:max-w-xl min-h-[60vh] flex flex-col items-center justify-center p-6 md:p-10 backdrop-blur-md border border-white/10 dark:border-zinc-800/50 rounded-3xl shadow-[5px_5px_42px_0px_rgba(156,163,175,0.15)] bg-card-bg text-text-primary transition-all duration-300">
        
        <img
          className="w-36 sm:w-44 md:w-48 h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] mb-4"
          src="/logo-store.png"
          alt="Logo"
        />

        <h2 className="text-3xl sm:text-4xl font-bold text-amber-500 dark:text-amber-400 mb-6 md:mb-8">
          Login
        </h2>

        {/* Seletor de Abas adaptado para Dark/Light */}
        <div className="flex w-full max-w-md bg-zinc-200/50 dark:bg-white/5 border border-zinc-300/30 dark:border-white/10 rounded-xl p-1 mb-6">
          <button
            type="button"
            onClick={() => { setLoginMethod('credentials'); setIsTokenSent(false); }}
            className={`w-1/2 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              loginMethod === 'credentials'
                ? 'bg-amber-500 dark:bg-amber-400 text-zinc-950 shadow-md'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Login com senha
          </button>
          <button
            type="button"
            onClick={() => setLoginMethod('phone-token')}
            className={`w-1/2 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              loginMethod === 'phone-token'
                ? 'bg-amber-500 dark:bg-amber-400 text-zinc-950 shadow-md'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Celular
          </button>
        </div>

        {/* Formulário Dinâmico */}
        <form className="w-full max-w-md flex flex-col gap-4">
          {loginMethod === 'credentials' ? (
            <>
              <InputComponent 
                label="Email ou Celular" 
                placeholder="example@email.com ou (11) 99999-9999" 
                type="text" 
              />
              <InputComponent
                label="Senha"
                placeholder="Senha"
                type="password"
              />
              <div className="text-right">
                <Link to="/esqueci-senha" className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Esqueci minha senha?
                </Link>
              </div>
              <Button text="Entrar" type="button" onClick={handleLogin} />
            </>
          ) : (
            <>
              {!isTokenSent ? (
                <>
                  <InputComponent
                    label="Número de Celular"
                    placeholder="(11) 99999-9999"
                    type="tel"
                  />
                  <Button text="Enviar código de verificação" type="button" onClick={handleSendToken} />
                </>
              ) : (
                <>
                  <InputComponent
                    label="Verificar código (Token)"
                    placeholder="Digite os seis dígitos"
                    type="text"
                  />
                  <Button text="Verificar e entrar" type="button" onClick={handleLogin} />
                  <button 
                    type="button" 
                    onClick={() => setIsTokenSent(false)} 
                    className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors mt-1 cursor-pointer"
                  >
                    Mudar número de celular
                  </button>
                </>
              )}
            </>
          )}
        </form>

        {/* Rodapé de Cadastro adaptado */}
        <p className="mt-8 text-sm text-zinc-600 dark:text-zinc-300 text-center gap-1 flex flex-wrap justify-center">
          Não tem uma conta?
          <Link
            to="/signup"
            className="text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 font-semibold transition-colors"
          >
            Criar conta
          </Link>
        </p>

      </section>
    </section>
  );
}
