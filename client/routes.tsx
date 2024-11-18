import { createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Categories from './components/Categories';
// import CategoryDetails from './components/CategoryDetails';
// import ProductsList from './components/ProductsList';
// import ProductDetails from './components/ProductDetails';
// import NewProduct from './components/NewProduct';

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    {/* Categories Routes */}
    <Route index element={<Categories />} />
    {/* <Route path="categories/:id" element={<CategoryDetails />} /> */}

    {/* Products Routes */}
    {/* <Route path="products" element={<ProductsList />} /> */}
    {/* <Route path="products/:id" element={<ProductDetails />} /> */}
    {/* <Route path="products/new" element={<NewProduct />} /> */}
  </Route>
);
