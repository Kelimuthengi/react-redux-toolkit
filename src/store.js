import { configureStore } from "@reduxjs/toolkit";
import productCartReducer from './features/productcart/productSlice'
import modalReducer from './features/modal/modalSlice'
export const store = configureStore({
  reducer: {
    productcart: productCartReducer,
    modal: modalReducer,
  },
});