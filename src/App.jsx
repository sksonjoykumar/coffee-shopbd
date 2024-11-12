import React from "react";
import { Route, Routes, ScrollRestoration } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Toast from "./components/toast-message/Toast";
import AllProducts from "./components/all-products/AllProducts";
import Footer from "./pages/footer/Footer";
import Cart from "./components/cart/Cart";
import ProductDetails from "./components/product-details/ProductDetails";
import NotFound from "./pages/not-found/NotFound";
import SignInForm from "./components/signin-form/SignInForm";

function App() {
  return (
    <main>
      <Toast bottomRight={"bottom-right"} />
      <ScrollRestoration />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/signin" element={<SignInForm/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
