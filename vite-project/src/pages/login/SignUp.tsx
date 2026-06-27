import { Link } from "react-router-dom";
import { InputComponent } from "../../components/ImputComponent";
import { Button } from "../../components/Button";
import { useAuthSignUp } from "../../hooks/useAuthSignUp"; // Importa o novo hook

export function SignUp() {
  // Destrutura todos os estados e comportamentos isolados
  const {
    loading,
    errorMessage,
    name,
    setName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleSignUp
  } = useAuthSignUp();

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat p-4 md:p-8 bg-bg-primary transition-colors duration-300">
      
      <section className="w-11/12 sm:w-4/5 lg:w-full lg:max-w-xl min-h-[60vh] flex flex-col items-center justify-center p-6 md:p-10 backdrop-blur-md border border-white/10 dark:border-zinc-800/50 rounded-3xl shadow-[5px_5px_42px_0px_rgba(156,163,175,0.15)] bg-card-bg text-text-primary transition-all duration-300">
        <img
          className="w-36 sm:w-44 md:w-48 h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] mb-4"
          src="/logo-store.png"
          alt="Logo"
        />

        <h2 className="text-3xl sm:text-4xl font-bold text-amber-500 dark:text-amber-400 mb-6 md:mb-8">
          Sign Up
        </h2>

        {/* Bloco de Erro em formato de Vidro Vermelho Fluido integrado ao tema */}
        {errorMessage && (
          <div className="w-full max-w-md p-3 mb-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-semibold text-center backdrop-blur-md animate-fade-in">
            ⚠️ {errorMessage}
          </div>
        )}

        <form onSubmit={handleSignUp} className="w-full max-w-md flex flex-col gap-4">
          <InputComponent
            label="Nome Completo"
            placeholder="Digite seu nome completo"
            value={name}
            onChange={setName}
          />

          <InputComponent
            label="Email"
            placeholder="your-email@example.com"
            type="email"
            value={email}
            onChange={setEmail}
          />

          <InputComponent
            label="Celular"
            placeholder="(11) 99999-9999"
            type="tel"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />

          <InputComponent
            label="Senha"
            placeholder="Digite uma senha"
            type="password"
            value={password}
            onChange={setPassword}
          />
          
          <InputComponent
            label="Confirmar Senha"
            placeholder="Repita sua senha"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />

          <Button text={loading ? "Criando conta..." : "Criar Conta"} type="submit" />
        </form>

        <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-300 text-center gap-1 flex flex-wrap justify-center">
          Já tem uma conta?
          <Link
            to="/"
            className="text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 font-semibold transition-colors"
          >
            Entrar
          </Link>
        </p>
      </section>
    </section>
  );
}
