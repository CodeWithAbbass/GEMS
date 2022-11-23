import React from 'react';
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import PriceFormat from '../Helpers/PriceFormat';


const CartItem = ({ id, name, color, oldPrice, newPrice, image, quantity, }) => {
    const { removeItem, setDecrease, setIncrement, } = useCartContext(); // Destructure
    return (
        <div className="cart_item d-flex" key={id}>
            {/* Item Details  */}
            <div className="cart_item_details d-flex">
                <div className="cart_item_img">
                    <img src={image} alt="item" />
                </div>
                <div className="cart_item_details_info align-self-center">
                    <h2><Link to={`/singleproduct/${id}`}>{window.innerWidth <= 768 ? `${name.slice(0, 50)}...` : name}</Link></h2>
                    <p>{color}</p>
                    <div className="cart_item_details_info_priceList">
                        <span className="">{PriceFormat(newPrice)}</span>
                        <span className="oldPrice ms-2">{PriceFormat(oldPrice)}</span>
                    </div>
                </div>
            </div>
            {/* Action  */}
            <div className="cart_item_action d-flex flex-column align-self-center">
                <div className="cart_item_action_innerDiv">
                    <i className="fa-solid fa-minus" onClick={() => setDecrease(id)}></i>
                    <input type="text" readOnly placeholder={`${quantity}`}  />
                    <i className="fa-solid fa-plus" onClick={() => setIncrement(id)}></i>
                </div>
                <button className="Remove p-0" onClick={() => { removeItem(id) }}>Remove</button>
            </div>
            {/* Total  */}
            <div className="cart_item_priceList d-flex justify-content-end">
                <div className="cart_item_priceList_innerDiv align-self-center">
                    <span className="Total">{PriceFormat(newPrice)}</span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;