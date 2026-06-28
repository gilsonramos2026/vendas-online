import { Link } from "react-router-dom";
import { InputComponent } from "../../components/ImputComponent";
import { Button } from "../../components/Button";
import { useAuthSignUp } from "../../hooks/useAuthSignUp";

export function SignUp() {
  // Destrutura todos os estados e comportamentos isolados vindos do seu hook
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
    // 🎨 Ajustado para se encaixar no grid do Layout sem quebrar as margens laterais
    <div className="w-full min-h-[65vh] flex items-center justify-center py-6 sm:py-10">
      
      {/* 🔮 CARD DE VIDRO TRANSLÚCIDO: Totalmente integrado ao seu bg-card-bg v4 */}
      <section className="w-full max-w-md flex flex-col items-center justify-center p-6 sm:p-10 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl shadow-xl bg-card-bg backdrop-blur-md transition-all duration-300">
        
        {/* Logo da loja adaptável ao Modo Escuro */}
        <img
          className="w-32 h-auto drop-shadow-md mb-2 dark:invert transition-all"
          src="/logo-store.png"
          alt="Logo"
        />

        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-500 dark:text-amber-400 mb-6 tracking-tight">
          Crie sua Conta
        </h2>

        {/* Bloco de Erro em formato de Vidro Vermelho Fluido integrado ao tema */}
        {errorMessage && (
          <div className="w-full p-3 mb-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs sm:text-sm font-semibold text-center backdrop-blur-md">
            ⚠️ {errorMessage}
          </div>
        )}

        {/* Formulário de Cadastro estruturado em bloco único */}
        <form onSubmit={handleSignUp} className="w-full flex flex-col gap-4">
          <InputComponent
            label="Nome Completo"
            placeholder="Digite seu nome completo"
            value={name}
            onChange={setName}
          />

          <InputComponent
            label="E-mail"
            placeholder="seu-email@exemplo.com"
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
            placeholder="Crie uma senha forte"
            type="password"
            value={password}
            onChange={setPassword}
          />
          
          <InputComponent
            label="Confirmar Senha"
            placeholder="Repita a senha criada"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />

          <Button text={loading ? "CRIANDO CONTA..." : "CRIAR CONTA →"} type="submit" />
        </form>

        {/* 🔗 Rota de Link atualizada para apontar exatamente para o seu /login */}
        <p className="mt-6 text-sm opacity-80 text-center gap-1 flex flex-wrap justify-center font-medium">
          Já tem uma account?{" "}
          <Link
            to="/login"
            className="text-amber-600 dark:text-amber-400 font-bold hover:underline transition-colors"
          >
            Entrar
          </Link>
        </p>
      </section>
    </div>
  );
}
