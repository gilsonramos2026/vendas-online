import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services";

export function useAuthLogin() {
  const navigate = useNavigate();
  
  const [loginMethod, setLoginMethod] = useState<'credentials' | 'phone-token'>('credentials');
  const [isTokenSent, setIsTokenSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // Estado centralizado para capturar as mensagens de erro da API
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Estados dos inputs isolados no hook
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [smsCode, setSmsCode] = useState("");

  // Formata e limpa o telefone para o padrão internacional do Java
  const getFormattedPhone = (rawPhone: string) => {
    const cleanNumber = rawPhone.replace(/\D/g, "");
    return cleanNumber.startsWith("55") ? `+${cleanNumber}` : `+55${cleanNumber}`;
  };

  // Decode Base64 com suporte nativo a acentos e caracteres especiais do Brasil
  const saveSessionAndRedirect = (token: string) => {
    localStorage.setItem("@vendas-online:token", token);
    try {
      const payloadBase64 = token.split(".")[1];
      // Normaliza a string base64 substituindo caracteres de url e decodifica em UTF-8
      const base64 = payloadBase64.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      
      const decodedPayload = JSON.parse(jsonPayload);
      
      localStorage.setItem("@vendas-online:role", decodedPayload.role);
      localStorage.setItem("@vendas-online:name", decodedPayload.name);

      if (decodedPayload.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.error("Erro ao ler token JWT:", error);
      setErrorMessage("Failed to process your login session. Try again.");
    }
  };

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null); // Limpa erros antigos antes de tentar de novo
    if (!identifier || !password) return setErrorMessage("Please, fill in all fields.");

    setLoading(true);
    try {
      const response = await api.post("/auth/login/credentials", { identifier, password });
      saveSessionAndRedirect(response.data);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Invalid identifier or password.");
    } finally { // CORREÇÃO: trocado de finaly para finally
      setLoading(false);
    }
  };

  const handleSendToken = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    if (!phoneNumber) return setErrorMessage("Please, enter your phone number complete.");

    setLoading(true);
    try {
      const formattedPhone = getFormattedPhone(phoneNumber);
      await api.post("/auth/phone/send-token", { phoneNumber: formattedPhone });
      setIsTokenSent(true);
      alert("Verification code sent to your phone!"); 
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Account not found with this phone number.");
    } finally { // CORREÇÃO: trocado de finaly para finally
      setLoading(false);
    }
  };

  const handleTokenLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    if (!smsCode) return setErrorMessage("Please, type the 6-digit verification code.");

    setLoading(true);
    try {
      const formattedPhone = getFormattedPhone(phoneNumber);
      const response = await api.post("/auth/login/phone-token", { 
        phoneNumber: formattedPhone, 
        code: smsCode 
      });
      saveSessionAndRedirect(response.data);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "The code is incorrect or has expired.");
    } finally { // CORREÇÃO: trocado de finaly para finally
      setLoading(false);
    }
  };

  return {
    loginMethod,
    setLoginMethod,
    isTokenSent,
    setIsTokenSent,
    loading,
    errorMessage, 
    setErrorMessage,
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
  };
}
