import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import SearchResultsPage from './components/SearchResultsPage';
import ProductDetailPage from './components/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import BlogPage from './pages/BlogPage';
import Post1 from './pages/Post1';
import Post2 from './pages/Post2';
import Post3 from './pages/Post3';
import './App.css';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentConfirmationPage from './pages/PaymentConfirmationPage';
import OrderPage from './pages/OrderPage';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import ChangePassword from './components/ChangePassword';

function App() {
  const location = useLocation();

  const authRoutes = ["/login", "/signup", "/user", "/changepassword"];

  const hideHeader = authRoutes.includes(location.pathname);

  return (
    <div className="app-root">
      {!hideHeader && <Header />}

      <div className="app-main">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<User />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path='/post/1' element={<Post1 />} />
          <Route path='/post/2' element={<Post2 />} />
          <Route path='/post/3' element={<Post3 />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment-confirmation" element={<PaymentConfirmationPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;