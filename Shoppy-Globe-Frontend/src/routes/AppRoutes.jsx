import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const CategoryPage = lazy(() => import('../pages/CategoryPage'))
const HomePage = lazy(() => import ('../pages/HomePage'))
const Cart = lazy(() => import ('../pages/Cart'))
const ProductDetail = lazy(() => import('../pages/ProductDetail'))
const NotFound = lazy(() => import("../pages/NotFound"));
const CheckoutPage = lazy(() => import('../pages/CheckoutPage'))

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>} />
      <Route path="/category" element={<Suspense fallback={<div>Loading...</div>}><CategoryPage /></Suspense>} />
      <Route path="/category/:id" element={<Suspense fallback={<div>Loading...</div>}><CategoryPage /></Suspense>} />
      <Route path="/product_detail/:id" element={<Suspense fallback={<div>Loading...</div>}><ProductDetail /></Suspense>} />
      <Route path="/cart" element={<Suspense fallback={<div>Loading...</div>}><Cart /></Suspense> } />
      <Route path="/checkout" element={<Suspense fallback={<div>Loading...</div>}><CheckoutPage /></Suspense> } />
      <Route path="*" element={ <Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense>}/>

    </Routes>
  );
};

export default AppRoutes;
