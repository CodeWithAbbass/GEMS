import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import StateContext from "../context/StateContext";


const CartItem = ({ id, title, color, oldPrice, newPrice, pMainImg }) => {

    const context = useContext(StateContext);
    const { CurrencyFormat, setDecrement, setIncrement, removeItem, clearCart, } = context; // Destructure
    return (
        <div className="cart_item d-flex" key={id}>
            {/* Item Details  */}
            <div className="cart_item_details d-flex">
                <div className="cart_item_img">
                    <img src={pMainImg} alt="item" />
                </div>
                <div className="cart_item_details_info align-self-center">
                    <h2><Link to={`/singleproduct/${id}`}>{title}</Link></h2>
                    <p>{color}</p>
                    <div className="cart_item_details_info_priceList">
                        <span className="">{CurrencyFormat(newPrice)}</span>
                        <span className="oldPrice ms-2">{CurrencyFormat(oldPrice)}</span>
                    </div>
                </div>
            </div>
            {/* Action  */}
            <div className="cart_item_action d-flex flex-column align-self-center">
                <div className="cart_item_action_innerDiv">
                    <i className="fa-solid fa-minus" onClick={() => { setDecrement(id) }}></i>
                    <input type="text" placeholder={"1"} />
                    <i className="fa-solid fa-plus" onClick={() => { setIncrement(id) }}></i>
                </div>
                <button className="Remove p-0">Remove</button>
            </div>
            {/* Total  */}
            <div className="cart_item_priceList d-flex justify-content-end">
                <div className="cart_item_priceList_innerDiv align-self-center">
                    <span className="Total">{CurrencyFormat(newPrice)}</span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
