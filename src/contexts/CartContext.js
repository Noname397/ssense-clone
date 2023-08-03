import React, { useState, useContext, createContext, useEffect } from "react";
import { UserAuth } from "./AuthContext";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = UserAuth();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("")) ||JSON.parse(localStorage.getItem("cart")) || []
  );

  function deepCompare(obj1, obj2) {
    // Check if both inputs are objects
    if (
      typeof obj1 !== "object" ||
      obj1 === null ||
      typeof obj2 !== "object" ||
      obj2 === null
    ) {
      return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of properties is the same
    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      // Check if both objects have the same property
      if (!obj2.hasOwnProperty(key)) {
        return false;
      }

      // Recursively compare nested objects (if any)
      if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        if (!deepCompare(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        // Compare primitive properties
        return false;
      }
    }

    return true;
  }

  const addToCart = (newItem) => {
    let newCart;
    const indexItem = findIndexItem(newItem);
    newCart = [...cart];
    if (indexItem == -1) newCart.push(newItem);
    else {
      console.log(newCart[indexItem].quantity);
      newCart[indexItem].quantity = newCart[indexItem].quantity + 1;
      console.log(newCart)
    }
    setCart(newCart);
  };

  const findIndexItem = (newItem) => {
    return cart.findIndex((item, index) => {
      return deepCompare(item.product, newItem.product);
    });
  };

  const removeFromCart = (newItem) => {
    const indexItem = findIndexItem(newItem);

    if (indexItem !== -1){
      let newCart = [...cart];
      newCart.splice(indexItem,1);
      setCart(newCart);
    }
  };

  const findSumOfArray = (arr) => {
    return arr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  };
  const [totalItems, setTotalItems] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart)
    setTotalItems(findSumOfArray(cart.map((item) => item.quantity)));
    setTotalCost(findSumOfArray(cart.map((item) => {
      return (item.quantity * (item.product?.price))
    })))
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, findIndexItem, totalItems,totalCost }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const UserCart = () => {
  return useContext(CartContext);
};
