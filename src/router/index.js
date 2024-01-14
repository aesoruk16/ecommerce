import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/index';
import ProductDetail from '../views/ProductDetail/ProductDetail';
 
const AppRouter = () => {
 
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detail" element={<ProductDetail />} />
        </Routes>
    </Router>
  );
};

export default AppRouter;
