import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { SignUp } from "../pages/login/SignUp";
import { ClientRoutes } from "./ClientRoutes";
import { AdminRoutes } from "./AdminRoutes";
import { Layout } from "../components/layout/Layout";


export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* 1. ROTAS DE AUTENTICAÇÃO */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* 
          🔥 CORREÇÃO AQUI: 
          Remova os parênteses (). Use apenas as chaves puras.
        */}
        {ClientRoutes}

        {AdminRoutes}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
