import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import NavBar from './Components/navBar';
import Footer from './Components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/about';
import HeroSection from './Components/heroSection';
import Account from './Components/account';
import Cart from './Components/cart';
import Seller from './Components/becameSeller';
import Details from './Components/productsDetails';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Became a Seller" element={<Seller />} />
        <Route path="/products/:id" element={<Details />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
