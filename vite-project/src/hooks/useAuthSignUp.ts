import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services";

export function useAuthSignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  // Estado profissional para renderizar erros na tela sem usar alerts
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
    setErrorMessage(null); // Reseta erros antigos

    if (!name || !email || !phoneNumber || !password || !confirmPassword) {
      return setErrorMessage("Please, fill in all fields.");
    }

    if (password !== confirmPassword) {
      return setErrorMessage("Passwords do not match.");
    }

    setLoading(true);
    try {
      const formattedPhone = getFormattedPhone(phoneNumber);
      
      // Envia a requisição limpa para o Spring Boot
      await api.post("/auth/signup", { 
        name, 
        email, 
        phoneNumber: formattedPhone, 
        password 
      });
      
      alert("Account created successfully! Check your welcome email.");
      navigate("/"); // Redireciona para o Login
    } catch (error: any) {
      // Captura a validação estruturada do seu GlobalExceptionHandler do Java
      if (error.response?.data?.validationErrors) {
        const errorMsgs = Object.values(error.response.data.validationErrors).join(" | ");
        setErrorMessage(errorMsgs);
      } else {
        setErrorMessage(error.response?.data?.message || "Email or phone number already registered.");
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
