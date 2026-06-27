import { Route } from "react-router-dom";

const Home = () => <div className="text-white p-8">🛒 Home / Área de Compras do Cliente</div>;
const Cart = () => <div className="text-white p-8">🛍️ Carrinho de Compras</div>;

export const ClientRoutes = (
  <>
    <Route path="/home" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
  </>
);
