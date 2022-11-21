import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Productdetail from './components/Productdetail';
import { useSelector } from 'react-redux';
import { calculateTotals } from './features/productcart/productSlice';
import { useDispatch } from 'react-redux';
function App() {
  const { cartItems } = useSelector((store) => store.productcart);
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(calculateTotals());
    }, [cartItems]);
  const { isModalOpen } = useSelector((store) => store.modal)
  return (
    <div>
      <Navbar />
      {isModalOpen && <Productdetail />}

      <div className="">
          <Products />  
      </div>
    </div>
  );
}

export default App;
