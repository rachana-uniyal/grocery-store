import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((currentCart) => {
      const itemIndex = currentCart.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex > -1) {
        const newCart = [...currentCart];
        newCart[itemIndex].quantity += 1;
        return newCart;
      } else {
        return [...currentCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity - 1 >= 1 ? item.quantity - 1 : 1 };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (itemId, quantity) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === itemId ? { ...item, quantity: quantity >= 1 ? quantity : 1 } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
