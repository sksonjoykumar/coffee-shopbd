import { createContext, useState } from "react";
import React from "react";
import coffeeProducts from "../database/data";
import { toast } from "react-toastify";

export const StoreContext = createContext();
function GlobalContext({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [selectProduct, setSelectProduct] = useState(null);

  // addToCart
  const addToCart = (item) => {
    setCartItems((prevItem) => [...prevItem, item]);
    toast.success(`${cartItems.length + 1} items added!`);
  };

  // check the product is in the cart
  const isInCart = (itemId) => cartItems.some((item) => item.id === itemId);

  // removeFromCart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    toast.error(`1 items remove!`);
  };

  // Function to handle product click (show product details)
  const handleClickProduct = (productId) => {
    const product = coffeeProducts.find((p) => p.id === productId);
    setSelectProduct(product);
  };

  // GetTotalPrice
  const getTotalCartPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  // context value
  const contextValue = {
    coffeeProducts,
    cartItems,
    setCartItems,
    addToCart,
    isInCart,
    removeFromCart,
    selectProduct,
    setSelectProduct,
    handleClickProduct,
    getTotalCartPrice,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default GlobalContext;
