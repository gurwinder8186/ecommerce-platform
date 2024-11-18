import { createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Categories from './components/Categories';
import AdminPage from './components/AdminPage';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import ShopNow from './components/ShopNow';
import NotFound from './components/NotFound';
import Help from './components/Help';
import Orders from './components/Orders';
import Returns from './components/Returns';

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Categories />} />
    <Route path="categories" element={<Categories />} />
    <Route path="orders" element={<Orders />} />
    <Route path="returns" element={<Returns />} />
    <Route path="help" element={<Help />} />
    <Route path="admin" element={<AdminPage />} />
    <Route path="register" element={<Register />} />
    <Route path="shop" element={<ShopNow />} />
    <Route path="login" element={<Login />} />
    <Route path="cart" element={<Cart />} />
    <Route path="*" element={<NotFound />} />
   

  </Route>
);
