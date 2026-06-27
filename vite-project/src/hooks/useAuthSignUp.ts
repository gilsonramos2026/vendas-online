import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services";

export function useAuthSignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  // Estado profissional para renderizar erros em português na tela de vidro
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Estados dos inputs isolados no hook
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Limpa caracteres especiais do telefone para sincronizar com o backend
  const getFormattedPhone = (rawPhone: string) => {
    const cleanNumber = rawPhone.replace(/\D/g, "");
    return cleanNumber.startsWith("55") ? `+${cleanNumber}` : `+55${cleanNumber}`;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null); // Reseta erros antigos antes de tentar

    // TRADUÇÃO: Alertas internos do React
    if (!name || !email || !phoneNumber || !password || !confirmPassword) {
      return setErrorMessage("Por favor, preencha todos os campos do formulário.");
    }

    if (password !== confirmPassword) {
      return setErrorMessage("As senhas digitadas não coincidem. Digite novamente.");
    }

    setLoading(true);
    try {
      const formattedPhone = getFormattedPhone(phoneNumber);
      
      // Faz o envio real para as rotas do Spring Boot
      await api.post("/auth/signup", { 
        name, 
        email, 
        phoneNumber: formattedPhone, 
        password 
      });
      
      // Mensagem informativa de sucesso
      alert("Conta criada com sucesso! Verifique sua caixa de entrada para o e-mail de boas-vindas.");
      navigate("/"); // Manda de volta para o login
    } catch (error: any) {
      // Captura o mapa de erros de tamanho/formato que configuramos no Java
      if (error.response?.data?.validationErrors) {
        const errorMsgs = Object.values(error.response.data.validationErrors).join(" | ");
        setErrorMessage(errorMsgs);
      } else {
        // TRADUÇÃO: Erro de conflito caso o registro já exista no Postgres
        setErrorMessage(error.response?.data?.message || "E-mail ou número de celular já cadastrados no sistema.");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
}
