import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../../Css/Cart.css"
import { useCartContext } from "../../context/cart_context";
import CartItem from '../CartItem';
import PriceFormat from '../../Helpers/PriceFormat';
const Cart = ({setProgress}) => {
  const location = useLocation();
  const { cart, clearCart, total_price } = useCartContext();
  useEffect(() => {
    setProgress(10);
    setProgress(30);
    setProgress(50);
    setProgress(100);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [location]);


  ////////////////////////////////////////////
  if (cart.length === 0) {
    return (
        <div className="Continue_Shopping w-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="EmptyStateTitle">Your cart is empty</h1>
          <Link to={"/allproducts"} className="Continue_Shopping_Btn">Continue Shopping</Link>
        </div>
    );
  }
  ////////////////////////////////////////////
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
          {cart.map((curItem, index) => {
            return (
              <CartItem
                key={curItem.id}
                {...curItem}
              />
            )
          })}
          <div className="card-total">
            <h3>Cart Total : <span>{PriceFormat(total_price)}</span>
            </h3>
            <Link to={"/checkout"}>Checkout</Link>
            <Link className="clear-cart" onClick={() => { clearCart() }}>Clear Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;







