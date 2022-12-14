import React from 'react';
import { Link } from 'react-router-dom';
import "../Css/OverlayBgProduct.css"

import NotFound from "../images/ImgNotFound.jpg";
const AnotherProduct = ({id,AnotherProductImg, MBAnotherProductImg, title, btntxt }) => {
    return (
        <>
            <div className="card overlayBgProduct text-bg-dark rounded-0 border-0 h-75" id={id}>
                <img src={AnotherProductImg} className="card-img AnotherProductImg rounded-0 border-0" alt="Product" />
                <img src={MBAnotherProductImg} className="card-img MBAnotherProductImg rounded-0 border-0" alt="Product" />
                <div className="card-img-overlay">
                    <div className="text_box_OverlayBg align-self-end">
                        <p className="title fw-normal" >{title}</p>
                        <Link to="/allproducts" className="btn rounded-0 shadow-0 border-1 border-dark fw-semibold bg-black text-white">{btntxt}</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
AnotherProduct.defaultProps = {
    AnotherProductImg: NotFound,
    title: "NOT FOUND",
    btntxt: "MORE"
  }

export default AnotherProduct;
