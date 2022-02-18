import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log(action.payload);

      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      return {
        items: [...state.items, action.payload],
        totalAmount: updatedTotalAmount,
      };
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, defaultCartState);

  // add item to cart
  const addItem = (item) => {
    dispatch({ type: "ADD", payload: item });
  };

  //   remove item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
