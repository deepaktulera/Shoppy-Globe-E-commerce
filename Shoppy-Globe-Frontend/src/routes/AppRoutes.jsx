import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import ProductDetail from '../pages/ProductDetail';
import CategoryPage from '../pages/CategoryPage';
import Cart from '../pages/Cart';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/category' element={<CategoryPage />}></Route>
        <Route path='/category/:id' element={<CategoryPage />}></Route>
        <Route path='/product_detail/:id' element={<ProductDetail />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}

export default AppRoutes;
