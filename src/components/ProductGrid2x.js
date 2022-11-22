import React, { useState, useContext } from 'react';
import ".././Css/ProductGrid2x.css"
import { Link } from "react-router-dom";
import StateContext from "../context/StateContext";

const ProductGrid2x = ({ id, discount, tag, brand, title, description, newPrice, oldPrice, pMainImg, pOtherImg, }) => {

    const context = useContext(StateContext);
    const { CurrencyFormat } = context; // Destructure
    const [isHovering, setIsHovering] = useState(false);
    function handleHoverIn() {
        setIsHovering(true);
    }
    function handleHoverOut() {
        setIsHovering(false)
    }

    return (
        <div className='ProductGrid2x'>
            <Link to={`/singleproduct/${id}`} onMouseOver={handleHoverIn} onMouseOut={handleHoverOut}>
                <div className="item_header d-flex">
                    <li className='item_header_items discount me-2 text-center'>{discount}</li>
                    <li className='item_header_items tag me-2 text-center'>{tag}</li>
                </div>
                <div className="pImg">
                    <img className={`pMainImg ${isHovering ? "active_pMainImg" : " "} `} src={pMainImg} alt="" />
                    <img className={`pOtherImg ${isHovering ? "active_pOtherImg" : " "}`} src={pOtherImg} alt="" />
                </div>
                <div className="item_info mt-5">
                    <div className="brand"><p>{brand}</p></div>
                    <h2 className="title_heading d-flex justify-content-between">
                        <p>{title}</p>
                        <i className={`fas fa-long-arrow-alt-right ${isHovering ? "active_i" : ""}`} />
                    </h2>
                    <div className={`item_footer ${isHovering ? "active_footer" : ""}`}>
                        <div className="description"><p>{description}</p></div>
                        <div className="priceList">
                            <span className="priceList_newPrice">{CurrencyFormat(newPrice)}</span>
                            <span className="priceList_oldPrice ms-3">{CurrencyFormat(oldPrice)}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
  );
}

export default ProductGrid2x;
