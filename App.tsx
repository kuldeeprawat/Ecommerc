import * as React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/header';
import About from './pages/about';
import Contact from './pages/contact';
import ProductDetail from './components/productDetail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import { CartPage } from './components/common/cart';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/cart" element={<CartPage />}></Route>
        <Route path="/products/:productId" element={<ProductDetail />}></Route>
      </Routes>
    </Router>
  );
}
