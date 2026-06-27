import { Route } from "react-router-dom";



const Cart = () => <div className="text-white p-8">🛍️ Carrinho de Compras</div>;

export const ClientRoutes = (
  <>
    <Route path="/home" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
  </>
);
