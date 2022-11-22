import React, { useContext, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import "../../Css/Cart.css"
// import { reducer } from "../../reducer/reducer";
// import { Link } from "react-router-dom";
import StateContext from "../../context/StateContext";
import CartItem from '../CartItem';
const Cart = (props) => {
  const location = useLocation();
  const context = useContext(StateContext);
  const { cart } = context; // Destructure
  useEffect(() => {
    props.setProgress(10)
    props.setProgress(30)
    props.setProgress(50)
    props.setProgress(100)
    window.scrollTo(0, 0)
    // eslint-disable-next-line
  }, [location]);


  return (
    <div className='cart'>
      <div className="container">
        <h2>Cart</h2>
        <div className="cart_container">
          {/* Cart Header  */}
          <div className="cart_head d-flex">
            <div className="cart_headItem cart_headItem_Product">Product</div>
            <div className="cart_headItem cart_headItem_Quantity">Quantity</div>
            <div className="cart_headItem cart_headItem_Total">Total</div>
          </div>
          {cart.map((item, index) => {
            const { id, title, color, oldPrice, newPrice, image } = item;
            const imgData = Object.values(image);
            const [pMainImg] = imgData;
            return (
              <CartItem
                key={index}
                id={id}
                pMainImg={pMainImg}
                title={title}
                color={color}
                oldPrice={oldPrice}
                newPrice={newPrice}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
