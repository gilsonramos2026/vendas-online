import { Route } from "react-router-dom";

const Dashboard = () => <div className="text-white p-8">⚙️ Painel de Controle (Admin Dashboard)</div>;
const ProductsControl = () => <div className="text-white p-8">📦 Gerenciamento de Produtos</div>;

export const AdminRoutes = (
  <>
    <Route path="/admin" element={<Dashboard />} />
    <Route path="/admin/products" element={<ProductsControl />} />
  </>
);
