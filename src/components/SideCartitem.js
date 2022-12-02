import React from 'react';
import { Link } from "react-router-dom";
import PriceFormat from '../Helpers/PriceFormat';
import { useCartContext } from "../context/cart_context";
import "../Css/SideCartitem.css";
const SideCartitem = ({ id, name, color, oldPrice, newPrice, image, quantity, }) => {
    const { removeItem, setDecrease, setIncrement, } = useCartContext(); // Destructure

    return (
        <div className='SideCartitem row'  key={id}>
        <div className="SideCartitem_img col-4">
            <img src={image} alt="Product img" />
        </div>
        <div className="SideCartitem_details col-8">
            <Link to={`/singleproduct/:${id}`}>{name}</Link>
            <div className="SideCartitem_details_priceList">
                <span className='priceList_newPrice'>{PriceFormat(newPrice)}</span>
                <span className='priceList_oldPrice'>{PriceFormat(oldPrice)}</span>
            </div>
            <div className="SideCartitem_details_action d-flex">
                <div className="SideCartitem_details_action_innerDiv">
                    <i className="fa-solid fa-minus col" onClick={() => setDecrease(id)}></i>
                    <input type="text" readOnly placeholder={`${quantity}`}  />
                    <i className="fa-solid fa-plus col" onClick={() => setIncrement(id)}></i>
                </div>
                <button className="Remove p-0" onClick={() => { removeItem(id) }}>Remove</button>
            </div>
        </div>
        </div>
    );
}

export default SideCartitem;

