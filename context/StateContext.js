import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  // Hamburger Menu
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  // Cart
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  // increase/decrease quanitity
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }
  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  }

  // add to cart
  const onAdd = (product, quantity) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    // if the item is already in the cart, increase quantity instead of adding duplicate item
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
        }
      })
      setCartItems(updatedCartItems);
    }
    
    else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  }

  // remove item in cart
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  // increase/decrease quantity in cart
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);

    // remove item and add item again with correct quantity
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
      }
    }
  }

  return (
    <Context.Provider
      value={{
        showHamburgerMenu,
        setShowHamburgerMenu,
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);