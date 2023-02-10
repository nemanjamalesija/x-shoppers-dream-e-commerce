import React from 'react';
import {
  About,
  Error,
  Home,
  Products,
  SingleProductPage,
  SharedLayout,
  SharedLayoutProduct,
  Cart,
} from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<SharedLayoutProduct />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProductPage />} />
          </Route>
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
