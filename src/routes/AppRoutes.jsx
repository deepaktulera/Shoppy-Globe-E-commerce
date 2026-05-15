import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFound from '../components/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/category'></Route>
        <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}

export default AppRoutes;
