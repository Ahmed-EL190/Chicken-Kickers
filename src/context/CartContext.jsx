import { useState, useCallback } from "react";
import { CartContext } from "./CartContextValue";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((meal) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === meal.id);
      if (existing) {
        return prev.map((item) =>
          item.id === meal.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...meal, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((mealId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== mealId));
  }, []);

  const updateQuantity = useCallback((mealId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(mealId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === mealId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
