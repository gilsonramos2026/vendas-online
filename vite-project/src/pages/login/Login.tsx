import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputComponent } from "../../components/ImputComponent";
import { useTheme } from "../../context/ThemeContext"; 
import { api } from "../../services"; // Importação do serviço central da API

export function Login() {
  const { theme, toggleTheme } = useTheme(); 
  const navigate = useNavigate(); // Inicializa o roteador de navegação

  const [loginMethod, setLoginMethod] = useState<'credentials' | 'phone-token'>('credentials');
  const [isTokenSent, setIsTokenSent] = useState(false);
  const [loading, setLoading] = useState(false); // Estado de carregamento das requisições

  // Estados dos Inputs vinculados corretamente
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [smsCode, setSmsCode] = useState("");

  // Função central para decodificar a Role do JWT e mandar para a tela certa
  const saveSessionAndRedirect = (token: string) => {
    localStorage.setItem("@vendas-online:token", token);
    
    try {
      // Decodifica a parte central do Token JWT (Payload)
      const payloadBase64 = token.split(".")[1];
      const decodedPayload = JSON.parse(atob(payloadBase64));
      
      localStorage.setItem("@vendas-online:role", decodedPayload.role);
      localStorage.setItem("@vendas-online:name", decodedPayload.name);

      // Redireciona o fluxo baseado na Role do banco do Spring Boot
      if (decodedPayload.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.error("Erro ao ler token JWT:", error);
      navigate("/home");
    }
  };

  // ABA 1: Envio do Login Tradicional por Senha
  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier || !password) return alert("Preencha todos os campos!");

    setLoading(true);
    try {
      const response = await api.post("/auth/login/credentials", { identifier, password });
      saveSessionAndRedirect(response.data);
    } catch (error: any) {
      alert(error.response?.data?.message || "Identificador ou senha incorretos.");
    } finally {
      setLoading(false);
    }
  };

  // ABA 2 - PASSO 1: Solicitar Código SMS para o Celular
  const handleSendToken = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return alert("Digite o número de celular completo!");

    setLoading(true);
    try {
      await api.post("/auth/phone/send-token", { phoneNumber });
      setIsTokenSent(true);
      alert("Código de verificação enviado com sucesso!");
    } catch (error: any) {
      alert(error.response?.data?.message || "Erro ao gerar código. Verifique o número.");
    } finally {
      setLoading(false);
    }
  };

  // ABA 2 - PASSO 2: Enviar Código de 6 Dígitos e Logar
  const handleTokenLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!smsCode) return alert("Por favor, insira o token recebido.");

    setLoading(true);
    try {
      const response = await api.post("/auth/login/phone-token", { phoneNumber, code: smsCode });
      saveSessionAndRedirect(response.data);
    } catch (error: any) {
      alert(error.response?.data?.message || "Código incorreto ou já expirado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat p-4 md:p-8 bg-bg-primary transition-colors duration-300 relative">
      
      <button
        type="button"
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-3 rounded-xl bg-amber-400 text-zinc-950 font-bold shadow-lg hover:bg-amber-300 transition-all cursor-pointer flex items-center gap-2 text-xs sm:text-sm z-50"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      <section className="w-11/12 sm:w-4/5 lg:w-full lg:max-w-xl min-h-[60vh] flex flex-col items-center justify-center p-6 md:p-10 backdrop-blur-md border border-white/10 dark:border-zinc-800/50 rounded-3xl shadow-[5px_5px_42px_0px_rgba(156,163,175,0.15)] bg-card-bg text-text-primary transition-all duration-300">
        
        <img
          className="w-36 sm:w-44 md:w-48 h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] mb-4"
          src="/logo-store.png"
          alt="Logo"
        />

        <h2 className="text-3xl sm:text-4xl font-bold text-amber-500 dark:text-amber-400 mb-6 md:mb-8">
          Login
        </h2>

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

        {/* O formulário decide qual método disparar no onSubmit */}
        <form 
          onSubmit={loginMethod === 'credentials' ? handleCredentialsLogin : (isTokenSent ? handleTokenLogin : handleSendToken)} 
          className="w-full max-w-md flex flex-col gap-4"
        >
          {loginMethod === 'credentials' ? (
            <>
              <InputComponent 
                label="Email ou Celular" 
                placeholder="example@email.com ou +5511999999999" 
                type="text" 
                value={identifier}
                onChange={setIdentifier}
              />
              <InputComponent
                label="Senha"
                placeholder="Senha"
                type="password"
                value={password}
                onChange={setPassword}
              />
              <div className="text-right">
                <Link to="/esqueci-senha" className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Esqueci minha senha?
                </Link>
              </div>
              <Button text={loading ? "Entrando..." : "Entrar"} type="submit" />
            </>
          ) : (
            <>
              {!isTokenSent ? (
                <>
                  <InputComponent
                    label="Número de Celular"
                    placeholder="+5511999999999"
                    type="tel"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                  />
                  <Button text={loading ? "Enviando..." : "Enviar código de verificação"} type="submit" />
                </>
              ) : (
                <>
                  <InputComponent
                    label="Verificar código (Token)"
                    placeholder="Digite os seis dígitos"
                    type="text"
                    value={smsCode}
                    onChange={setSmsCode}
                  />
                  <Button text={loading ? "Verificando..." : "Verificar e entrar"} type="submit" />
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
