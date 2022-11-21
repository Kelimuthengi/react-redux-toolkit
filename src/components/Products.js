import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { openModal } from '../features/modal/modalSlice'

import { useDispatch } from 'react-redux'
const Products = () => {


  const dispatch = useDispatch();
   const { cartItems, cartTotal } = useSelector((store) => store.productcart);
   if(cartItems.length === 0){
    return (
      <div>
        <h5>You have an empty cart!</h5>
      </div>
    )
   }
  return (
    <div>
      <div className="cardholders">
        {cartItems.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
      <div>
        <button onClick={() => dispatch(openModal())}>Clear Cart</button>
        <h5>{cartTotal}</h5>
      </div>
    </div>
  );
}

export default Products
