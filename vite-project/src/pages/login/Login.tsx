import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputComponent } from "../../components/ImputComponent";

export function Login() {
  const handleLogin = () => {
    alert("Tentando fazer login...");
  };
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat p-4 md:p-8">
      {/* Painel Central: Largura controlada por porcentagem no mobile e max-w fixa em telas grandes */}
      <section className="w-11/12 sm:w-4/5 lg:w-full lg:max-w-xl min-h-[60vh] flex flex-col items-center justify-center p-6 md:p-10 backdrop-blur-sm border border-white/10 rounded-3xl shadow-[5px_5px_42px_0px_rgba(156,163,175,0.3)] bg-zinc-900/10">
        <img
          className="w-36 sm:w-44 md:w-48 h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] mb-4"
          src="/logo-store.png"
          alt="Logo"
        />

        {/* Ajuste de tamanho do título: Menor no mobile para não quebrar */}
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-6 md:mb-8">
          Login
        </h2>

        {/* Form ocupa 100% no mobile e limita o tamanho máximo em telas grandes */}
        <form className="w-full max-w-md flex flex-col gap-4">
          <InputComponent label="Nome" placeholder="Digite seu nome completo" />

          <InputComponent
            label="E-mail"
            placeholder="seuemail@exemplo.com"
            type="email"
          />

          <InputComponent
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
          />
          <Button text="Entrar" type="button" onClick={handleLogin} />
        </form>

        {/* Rodapé do card com espaçamento e alinhamento corrigidos */}
        <p className="mt-6 text-sm text-zinc-300 text-center gap-1 flex flex-wrap justify-center">
          Não tem uma conta?
          <Link
            to="/Criar-conta"
            className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
          >
            Criar Conta
          </Link>
        </p>
      </section>
    </section>
  );
}
