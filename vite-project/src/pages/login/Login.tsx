import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputComponent } from "../../components/ImputComponent";
import { useTheme } from "../../context/ThemeContext"; 
import { useAuthLogin } from "../../hooks/useAuthLogin"; // Injeta o hook criado

export function Login() {
  const { theme, toggleTheme } = useTheme(); 
  
  // Destrutura todos os estados, comportamentos e a nova variável de erro vindos do hook
  const {
    loginMethod,
    setLoginMethod,
    isTokenSent,
    setIsTokenSent,
    loading,
    errorMessage, // Adicionado para renderizar na tela
    identifier,
    setIdentifier,
    password,
    setPassword,
    phoneNumber,
    setPhoneNumber,
    smsCode,
    setSmsCode,
    handleCredentialsLogin,
    handleSendToken,
    handleTokenLogin
  } = useAuthLogin();

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat p-4 md:p-8 bg-bg-primary transition-colors duration-300 relative">
      
      {/* Botão flutuante minimalista de Alternância de Tema */}
      <button
        type="button"
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2.5 md:p-3 rounded-lg md:rounded-xl bg-amber-400 text-zinc-950 font-bold shadow-lg hover:bg-amber-300 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm z-50"
      >
        <span>{theme === "light" ? "🌙" : "☀️"}</span>
        <span className="hidden md:block">{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
      </button>

      <section className="w-11/12 sm:w-4/5 lg:w-full lg:max-w-xl min-h-[60vh] flex flex-col items-center justify-center p-6 md:p-10 backdrop-blur-md border border-white/10 dark:border-zinc-800/50 rounded-3xl shadow-[5px_5px_42px_0px_rgba(156,163,175,0.15)] bg-card-bg text-text-primary transition-all duration-300">
        
        <img className="w-36 sm:w-44 md:w-48 h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] mb-4" src="/logo-store.png" alt="Logo" />
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-500 dark:text-amber-400 mb-6 md:mb-8">Login</h2>

        {/* Bloco de Erro com Design de Vidro Vermelho Fluido */}
        {errorMessage && (
          <div className="w-full max-w-md p-3 mb-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-semibold text-center backdrop-blur-md animate-fade-in">
            ⚠️ {errorMessage}
          </div>
        )}

        <div className="flex w-full max-w-md bg-zinc-200/50 dark:bg-white/5 border border-zinc-300/30 dark:border-white/10 rounded-xl p-1 mb-6">
          <button
            type="button"
            onClick={() => { setLoginMethod('credentials'); setIsTokenSent(false); }}
            className={`w-1/2 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${loginMethod === 'credentials' ? 'bg-amber-500 dark:bg-amber-400 text-zinc-950 shadow-md' : 'text-zinc-600 dark:text-zinc-400'}`}
          >
            Login com senha
          </button>
          <button
            type="button"
            onClick={() => setLoginMethod('phone-token')}
            className={`w-1/2 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${loginMethod === 'phone-token' ? 'bg-amber-500 dark:bg-amber-400 text-zinc-950 shadow-md' : 'text-zinc-600 dark:text-zinc-400'}`}
          >
            Celular
          </button>
        </div>

        <form 
          onSubmit={loginMethod === 'credentials' ? handleCredentialsLogin : (isTokenSent ? handleTokenLogin : handleSendToken)} 
          className="w-full max-w-md flex flex-col gap-4"
        >
          {loginMethod === 'credentials' ? (
            <>
              <InputComponent label="Email ou Celular" placeholder="example@email.com" type="text" value={identifier} onChange={setIdentifier} />
              <InputComponent label="Senha" placeholder="Senha" type="password" value={password} onChange={setPassword} />
              <div className="text-right"><Link to="/esqueci-senha" className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 hover:text-white transition-colors">Esqueci minha senha?</Link></div>
              <Button text={loading ? "Entrando..." : "Entrar"} type="submit" />
            </>
          ) : (
            <>
              {!isTokenSent ? (
                <>
                  <InputComponent label="Número de Celular" placeholder="(11) 99999-9999" type="tel" value={phoneNumber} onChange={setPhoneNumber} />
                  <Button text={loading ? "Enviando..." : "Enviar código de verificação"} type="submit" />
                </>
              ) : (
                <>
                  <InputComponent label="Verificar código (Token)" placeholder="Digite os seis dígitos" type="text" value={smsCode} onChange={setSmsCode} />
                  <Button text={loading ? "Verificando..." : "Verificar e entrar"} type="submit" />
                  <button type="button" onClick={() => setIsTokenSent(false)} className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-white transition-colors mt-1 cursor-pointer">Mudar número de celular</button>
                </>
              )}
            </>
          )}
        </form>

        <p className="mt-8 text-sm text-zinc-600 dark:text-zinc-300 text-center gap-1 flex flex-wrap justify-center">
          Não tem uma conta? <Link to="/signup" className="text-amber-600 dark:text-amber-400 font-semibold transition-colors">Criar conta</Link>
        </p>
      </section>
    </section>
  );
}
