import { Route } from "react-router-dom";
import { Home } from "../pages/cliente/Home";
import ProductDetails from "../pages/cliente/product/ProducrDetail";
import CartPage from "../pages/cliente/CartPage";
import CheckoutPage from "../pages/cliente/CheckoutPage";
import AccountPage from "../pages/cliente/Account";

export const ClientRoutes = (
  <>
    <Route path="/home" element={<Home />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/perfil" element={<AccountPage />} />
    <Route path="/produto/:slug" element={<ProductDetails />} />
    
  </>
);
