import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/productcart/productSlice";
import { closeModal } from "../features/modal/modalSlice";
const Productdetail = () => {
  const dispatch = useDispatch();
  return (
    <div className="productcarddetail">
      <button
        onClick={() => {
          dispatch(clearCart());
          dispatch(closeModal())
        }}
      >
        Remove all Items
      </button>
      <button onClick={() => dispatch(closeModal())}>Cancel</button>
    </div>
  );
};

export default Productdetail;
