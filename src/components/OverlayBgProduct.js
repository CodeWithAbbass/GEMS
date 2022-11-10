import React from 'react';
import "../Css/OverlayBgProduct.css"
import NotFound from "../images/ImgNotFound.jpg";
const AnotherProduct = (props) => {
    return (
        <>
            <div className="card overlayBgProduct text-bg-dark rounded-0 border-0 h-75" id={props.id}>
                <img src={props.AnotherProductImg} className="card-img AnotherProductImg rounded-0 border-0" alt="Product" />
                <img src={props.MBAnotherProductImg} className="card-img MBAnotherProductImg rounded-0 border-0" alt="Product" />
                <div className="card-img-overlay">
                    <div className="text_box_OverlayBg align-self-end">
                        <p className="title fw-normal" >{props.title}</p>
                        <button type="button" className="btn rounded-0 shadow-0 border-1 border-dark fw-semibold bg-black text-white">{props.btntxt}</button>
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
