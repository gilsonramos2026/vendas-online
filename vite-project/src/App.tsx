import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/login/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota inicial que carrega a sua tela de Login */}
        <Route path="/" element={<Login />} />

        {/* Você pode adicionar futuras rotas do sistema aqui abaixo */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
