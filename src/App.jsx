import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Login from "./components/Login";
import Register from "./components/Register";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Cart from "./components/Cart";
import Email from "./components/Email";
import Admin from "./Pages/admin/Admin";
import AllProducts from "./Pages/AllProducts";
import ProductDetail from "./Pages/ProductDetail";
import PaymentSuccess from "./utils/PaymentSuccess";
import PaymentFailed from "./utils/PaymentFailed";
import Orders from "./components/Orders";


const App = () => {  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth/*" element={<Auth/>} />    
      <Route path="/login/*" element={<Login/>} />
      <Route path="/admin/*" element={<Admin/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/men" element={<Men/>} />
      <Route path="/women" element={<Women/>} />
      <Route path="/kids" element={<Kids/>} />
      <Route path="/all-products" element={<AllProducts/>} />
      <Route path="/product-detail/:id" element={<ProductDetail/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/complete" element={<PaymentSuccess/>} />
      <Route path="/cancel" element={<PaymentFailed/>} />
      <Route path="/orders" element={<Orders/>} />
    </Routes>

  
    </>
  );
};

export default App;



