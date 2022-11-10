import React from 'react';
import "../Css/Productitem.css";
const Productitem = ({ id, subtitle, title, ProductImage, btntxt = "DISCOVER" }) => {
    return (
        <>
            <div className="product text-center d-flex mb-4 justify-content-between">
                <div className="text_box align-self-end">
                    <p className="subtitle fw-bold" >{subtitle}</p>
                    <p className="title fw-bold" >{title}</p>
                    <button type="button" className="btn rounded-0 shadow-0 border-1 border-dark fw-semibold bg-black text-white">{btntxt}</button>
                </div>
                <img className='align-self-center' src={ProductImage} alt="Earbuds" />
            </div>
        </>
    );
}

export default Productitem;