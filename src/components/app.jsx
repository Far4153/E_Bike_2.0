import React from "react";
import Mainbody from "./Mainbody.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./LogIn.jsx";
import SignUp from "./SignUp.jsx";
import Bikes from "./Bikes.jsx";
import AboutUs from "./AboutUs.jsx";
import Product_page from "./Product_page.jsx";
import Cart from "./Cart.jsx";
// import Product from "./Card.jsx";
import Checkout from "./Checkout.jsx";
import { CartProvider } from './CartContext';
import Payment from "./Payment.jsx"
import Confirmation from "./Confirmation.jsx";
import EmptyCart from "./EmptyCart.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Mainbody />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Bikes" element={<Bikes />} />
          <Route path="/About_Us" element={<AboutUs />} />
          <Route path="/Product_page/:ProductId" element={<Product_page />} />

          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/EmptyCart" element={<EmptyCart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
