import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { SignUp } from "../pages/login/SignUp";
import { ClientRoutes } from "./ClientRoutes";
import { AdminRoutes } from "./AdminRoutes";

export function AppRoutes() {
  return (
    <Routes>
      {/* 1. ROTAS PÚBLICAS */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* 2. ROTAS DO USUÁRIO NORMAL (CLIENT) */}
      {ClientRoutes}

      {/* 3. ROTAS DO ADMINISTRADOR (ADMIN) */}
      {AdminRoutes}

      {/* Rota de segurança: se digitar qualquer link inválido, joga pro Login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
