import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  
  const cartSize = cart.length;
  console.log(cartSize);

  const clearCart = ()=> setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
