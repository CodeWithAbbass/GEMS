import React, { useState} from 'react';
import ".././Css/ProductGrid2x.css"
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import PriceFormat from '../Helpers/PriceFormat';

const ProductGrid2x = ({ id, discount, tag, brand, name, description, newPrice, oldPrice, pMainImg, pOtherImg, }) => {

    const { } = useCartContext(); // Destructure
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
                    <h2 className="name_heading d-flex justify-content-between">
                        <p>{name}</p>
                        <i className={`fas fa-long-arrow-alt-right ${isHovering ? "active_i" : ""}`} />
                    </h2>
                    <div className={`item_footer ${isHovering ? "active_footer" : ""}`}>
                        <div className="description"><p>{description}</p></div>
                        <div className="priceList">
                            <span className="priceList_newPrice">{PriceFormat(newPrice)}</span>
                            <span className="priceList_oldPrice ms-3">{PriceFormat(oldPrice)}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
  );
}

export default ProductGrid2x;
