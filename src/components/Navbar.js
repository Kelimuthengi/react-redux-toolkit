import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const { cartCount } = useSelector((store) => store.productcart);
  return (
    <div>
      <div className="navbar">
        <div>REDUX TOOLKIT PRACTICE</div>

        <ul>
          <li>
            CART TOTAL <h6>{cartCount}</h6>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
