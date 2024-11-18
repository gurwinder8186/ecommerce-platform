import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categories from './Categories.tsx'
import Layout from './Layout.tsx';
import AdminPage from './AdminPage.tsx';

function App() {
const Orders = () => <h2>Your Orders</h2>;
const Returns = () => <h2>Returns</h2>;
const Help = () => <h2>Help Center</h2>;

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Categories />} />
        <Route path="categories" element={<Categories />} />
        <Route path="orders" element={<Orders />} />
        <Route path="returns" element={<Returns />} />
        <Route path="help" element={<Help />} />
        <Route path="admin" element={<AdminPage />} />

      </Route>
    </Routes>
  </BrowserRouter>
    
  )
}

export default App
