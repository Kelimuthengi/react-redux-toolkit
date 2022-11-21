import React from "react";
import {
  removeItem,
  increase,
  decrease,
} from "../features/productcart/productSlice";
import { useDispatch } from "react-redux";
const Product = ({ title, src, id, price, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="cardholders">
        <div className="productcard">
          <img src={src} alt="" />
          <p>{title}</p>
          <h4>{price}</h4>
          <button onClick={() => dispatch(increase(id))}>+</button>
          <h4>{quantity}</h4>
          <button
            onClick={() => {
              if (quantity === 0) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease(id));
            }}
          >
            -
          </button>
          <div>
            <button onClick={() => dispatch(removeItem(id))}>
              Remove Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
