import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputComponent } from "../../components/ImputComponent";
import { useAuthLogin } from "../../hooks/useAuthLogin";

export function Login() {
  // Destrutura todos os estados, comportamentos e variáveis vindo do seu hook
  const {
    loginMethod,
    setLoginMethod,
    isTokenSent,
    setIsTokenSent,
    loading,
    errorMessage, 
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
    // 🎨 Removido o min-h-screen e o botão de tema redundante (o seu Header já cuida disso)
    // Centraliza o card de vidro no espaço útil vertical entre o Header e o Footer
    <div className="w-full min-h-[65vh] flex items-center justify-center py-6 sm:py-10">
      
      {/* =================================================================== */}
      {/* LOADER INTERNO DO CARD (CONECTADO AO SEU ESTADO GLASSMOPHISM) */}
      {/* =================================================================== */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950/40 backdrop-blur-md transition-all duration-300">
          <div className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-zinc-900/20 border border-white/5 shadow-2xl backdrop-blur-xl">
            <svg className="animate-spin h-14 w-14 text-amber-500" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span className="text-amber-500 font-semibold tracking-widest text-sm uppercase animate-pulse">
              Processando Autenticação...
            </span>
          </div>
        </div>
      )}

      {/* 🔮 O CARD DE VIDRO TRANSLÚCIDO: Usa o bg-card-bg nativo do seu CSS Tailwind v4 */}
      <section className="w-full max-w-md flex flex-col items-center justify-center p-6 sm:p-10 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl shadow-xl bg-card-bg backdrop-blur-md transition-all duration-300">
        
        {/* Imagem de Logo integrada */}
        <img className="w-32 h-auto drop-shadow-md mb-2 dark:invert transition-all" src="/logo-store.png" alt="Logo" />
        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-500 dark:text-amber-400 mb-6 tracking-tight">Acesse sua Conta</h2>

        {/* Bloco de Erro com Design de Vidro Vermelho Fluido */}
        {errorMessage && (
          <div className="w-full p-3 mb-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs sm:text-sm font-semibold text-center backdrop-blur-md">
            ⚠️ {errorMessage}
          </div>
        )}

        {/* Abas Alternadoras de Método de Login */}
        <div className="flex w-full bg-zinc-500/5 border border-zinc-300/30 dark:border-white/10 rounded-xl p-1 mb-6 text-xs sm:text-sm font-semibold">
          <button
            type="button"
            onClick={() => { setLoginMethod('credentials'); setIsTokenSent(false); }}
            className={`flex-1 py-2 rounded-lg transition-all cursor-pointer text-center ${loginMethod === 'credentials' ? 'bg-amber-500 dark:bg-amber-400 text-zinc-950 shadow-md' : 'text-zinc-500 dark:text-zinc-400'}`}
          >
            Login com senha
          </button>
          <button
            type="button"
            onClick={() => setLoginMethod('phone-token')}
            className={`flex-1 py-2 rounded-lg transition-all cursor-pointer text-center ${loginMethod === 'phone-token' ? 'bg-amber-500 dark:bg-amber-400 text-zinc-950 shadow-md' : 'text-zinc-500 dark:text-zinc-400'}`}
          >
            Celular
          </button>
        </div>

        {/* Formulário Reativo conectado aos Handlers do Hook */}
        <form 
          onSubmit={loginMethod === 'credentials' ? handleCredentialsLogin : (isTokenSent ? handleTokenLogin : handleSendToken)} 
          className="w-full flex flex-col gap-4"
        >
          {loginMethod === 'credentials' ? (
            <>
              <InputComponent label="E-mail ou Celular" placeholder="exemplo@email.com" type="text" value={identifier} onChange={setIdentifier} />
              <InputComponent label="Senha" placeholder="Digite sua senha" type="password" value={password} onChange={setPassword} />
              <div className="text-right">
                <Link to="/recuperar-senha" className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
                  Esqueceu a senha?
                </Link>
              </div>
              <Button text="ENTRAR →" type="submit" />
            </>
          ) : (
            <>
              {!isTokenSent ? (
                <>
                  <InputComponent label="Número de Celular" placeholder="(11) 99999-9999" type="tel" value={phoneNumber} onChange={setPhoneNumber} />
                  <Button text="ENVIAR CÓDIGO DE VERIFICAÇÃO" type="submit" />
                </>
              ) : (
                <>
                  <InputComponent label="Verificar código (Token)" placeholder="Digite os 6 dígitos" type="text" value={smsCode} onChange={setSmsCode} />
                  <Button text="VERIFICAR E ENTRAR" type="submit" />
                  <button type="button" onClick={() => setIsTokenSent(false)} className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-amber-500 transition-colors mt-1 cursor-pointer">
                    Mudar número de celular
                  </button>
                </>
              )}
            </>
          )}
        </form>

        {/* Link para Rota do SignUp integrada ao AppRoutes */}
        <p className="mt-6 text-sm opacity-80 text-center gap-1 flex flex-wrap justify-center font-medium">
          Não tem uma conta?{" "}
          <Link to="/signup" className="text-amber-600 dark:text-amber-400 font-bold hover:underline transition-colors">
            Criar conta
          </Link>
        </p>
      </section>
    </div>
  );
}
