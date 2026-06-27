import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputComponent } from "../../components/ImputComponent";

export function Login() {
  // Estado para controlar qual aba está ativa: 'credentials' ou 'phone-token'
  const [loginMethod, setLoginMethod] = useState<'credentials' | 'phone-token'>('credentials');
  // Estado para simular se o token de SMS já foi enviado para mudar o input
  const [isTokenSent, setIsTokenSent] = useState(false);

  const handleLogin = () => {
    alert("Processing login...");
  };

  const handleSendToken = () => {
    // Simula o envio do SMS/WhatsApp com o código
    setIsTokenSent(true);
    alert("Verification code sent to your phone!");
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat p-4 md:p-8">
      <section className="w-11/12 sm:w-4/5 lg:w-full lg:max-w-xl min-h-[60vh] flex flex-col items-center justify-center p-6 md:p-10 backdrop-blur-sm border border-white/10 rounded-3xl shadow-[5px_5px_42px_0px_rgba(156,163,175,0.3)] bg-zinc-900/10">
        
        <img
          className="w-36 sm:w-44 md:w-48 h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] mb-4"
          src="/logo-store.png"
          alt="Logo"
        />

        {/* Seletor de Abas (Tabs) para alternar o método de entrada */}
        <div className="flex w-full max-w-md bg-white/5 border border-white/10 rounded-xl p-1 mb-6">
          <button
            type="button"
            onClick={() => { setLoginMethod('credentials'); setIsTokenSent(false); }}
            className={`w-1/2 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              loginMethod === 'credentials'
                ? 'bg-amber-400 text-zinc-950 shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Login com senha
          </button>
          <button
            type="button"
            onClick={() => setLoginMethod('phone-token')}
            className={`w-1/2 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              loginMethod === 'phone-token'
                ? 'bg-amber-400 text-zinc-950 shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Celular
          </button>
        </div>

        {/* Formulário Dinâmico */}
        <form className="w-full max-w-md flex flex-col gap-4">
          
          {loginMethod === 'credentials' ? (
            /* MÉTODO 1: LOGIN TRADICIONAL COM SENHA */
            <>
              <InputComponent 
                label="Email ou Celular" 
                placeholder="example@email.com o4 (11) 99999-9999" 
                type="text" 
              />
              <InputComponent
                label="Senha"
                placeholder="Senha"
                type="password"
              />
              <div className="text-right">
                <Link to="/esqueci-senha" className="text-xs sm:text-sm text-zinc-300 hover:text-white transition-colors">
                  Esqueci minha senha?
                </Link>
              </div>
              <Button text="Sign In" type="button" onClick={handleLogin} />
            </>
          ) : (
            /* MÉTODO 2: LOGIN VIA TOKEN ENVIADO POR CELULAR */
            <>
              {!isTokenSent ? (
                /* Passo 1: Digitar o celular para pedir o token */
                <>
                  <InputComponent
                    label="Numero de Celular"
                    placeholder="(11) 99999-9999"
                    type="tel"
                  />
                  <Button text="Enviar código de verificação" type="button" onClick={handleSendToken} />
                </>
              ) : (
                /* Passo 2: O token foi enviado, mostra o campo para digitar o código */
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
                    className="text-xs text-zinc-400 hover:text-white transition-colors mt-1"
                  >
                    Mudar numero de celular
                  </button>
                </>
              )}
            </>
          )}

        </form>

        {/* Rodapé de Cadastro */}
        <p className="mt-8 text-sm text-zinc-300 text-center gap-1 flex flex-wrap justify-center">
          Não tem uma conta?
          <Link
            to="/signup"
            className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
          >
            Criar conta
          </Link>
        </p>

      </section>
    </section>
  );
}
