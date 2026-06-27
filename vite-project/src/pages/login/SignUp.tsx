import { Link } from "react-router-dom";
import { InputComponent } from "../../components/ImputComponent";
import { Button } from "../../components/Button";

export function SignUp() {
 

  const handleSignUp = () => {
    alert("Account created successfully!");
  };

  return (
    // bg-bg-primary garante a cor de fundo correta caso a imagem de background falhe ou demore para carregar
    <section className="min-h-screen w-full flex items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat p-4 md:p-8 bg-bg-primary transition-colors duration-300">
      
      {/* Painel Central adaptado com as variáveis semânticas bg-card-bg e text-text-primary */}
      <section className="w-11/12 sm:w-4/5 lg:w-full lg:max-w-xl min-h-[60vh] flex flex-col items-center justify-center p-6 md:p-10 backdrop-blur-md border border-white/10 dark:border-zinc-800/50 rounded-3xl shadow-[5px_5px_42px_0px_rgba(156,163,175,0.15)] bg-card-bg text-text-primary transition-all duration-300">
        <img
          className="w-36 sm:w-44 md:w-48 h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] mb-4"
          src="/logo-store.png"
          alt="Logo"
        />

        <h2 className="text-3xl sm:text-4xl font-bold text-amber-500 dark:text-amber-400 mb-6 md:mb-8">
          Sign Up
        </h2>

        <form className="w-full max-w-md flex flex-col gap-4">
          <InputComponent
            label="Nome Completo"
            placeholder="Digite seu nome completo"
          />

          <InputComponent
            label="Email"
            placeholder="your-email@example.com"
            type="email"
          />

          {/* ADICIONADO: Campo obrigatório para sincronizar com a tabela do banco de dados */}
          <InputComponent
            label="Celular"
            placeholder="(11) 99999-9999"
            type="tel"
          />

          <InputComponent
            label="Senha"
            placeholder="Digite uma senha"
            type="password"
          />
          
          {/* CORREÇÃO: Ajustado o texto do label para ficar profissional */}
          <InputComponent
            label="Confirmar Senha"
            placeholder="Repita sua senha"
            type="password"
          />

          <Button text="Criar Conta" type="button" onClick={handleSignUp} />
        </form>

        {/* Rodapé adaptado para ler as cores do tema de forma legível */}
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
