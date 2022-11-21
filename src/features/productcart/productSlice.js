import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data";
const initialState = {
  cartItems: products,
  cartCount: 0,
  cartTotal: 0,
};

const productCartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    clearCart:(state, actions)=>{
     state.cartItems = []
    }
    ,
    removeItem: (state, {payload}) => {
   
      state.cartItems = state.cartItems.filter((item) => item.id !== payload)
    },
    increase: (state, actions) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === actions.payload
      );
      cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state, actions) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === actions.payload
      );
      console.log(cartItem.quantity);
      cartItem.quantity = cartItem.quantity - 1;
    },
    getIndividualItem: (state, { payload }) => {
      state.cartItems = state.cartItems.find((item) => item.id === payload);
    },
    calculateTotals:(state)=>{
      let cartCount = 0;
      let cartTotal = 0;
      state.cartItems.forEach((item) => {
        cartCount += item.quantity;
        cartTotal += item.price * item.quantity;
      })

      state.cartCount = cartCount
      state.cartTotal = cartTotal
    }
  },
});

export const {
  removeItem,
  increase,
  decrease,
  getIndividualItem,
  clearCart,
  calculateTotals,
} = productCartSlice.actions;

export default productCartSlice.reducer;
