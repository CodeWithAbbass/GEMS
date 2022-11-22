import React, { useContext, useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import "../../Css/SingleProduct.css"
import SingleProductSlider from '../SingleProductSlider';
import StateContext from '../../context/StateContext';
import { Link } from "react-router-dom";
const SingleProduct = (props) => {
  const location = useLocation();
  const context = useContext(StateContext);
  const { id } = useParams();
  const { products, CurrencyFormat, addToCart } = context;
  const Data = products.filter((item) => item.id === id); // Filter Specific Product.

  useEffect(() => {
    props.setProgress(10)
    props.setProgress(30)
    props.setProgress(50)
    props.setProgress(100)
    window.scrollTo(0, 0)
    // eslint-disable-next-line
  }, [location]);
  


  return (
    <div className='SingleProduct'>
      {Data.map((item, index) => {
        const {id, title, description, newPrice, oldPrice, image, productMeta, color } = item; // Destructure From Object.
        let productMetaData = []; // Empty MetaData New Variable.
        if (Object.keys(productMeta).length > 0) { // Check Weather productMeta Length is greater than 0. Its mandatory to create an Object in Original Array, Weather Throw Error. 
          productMetaData = Object.values(productMeta); // Assign Values 
        }
        const [line1, line2, line3, line4] = productMetaData; // Destructure From Array
        return (
          <div className="container" key={index}>
            <div className="row d-flex flex-md-wrap justify-content-between m-0 p-0">
              <div className="col-6">
                <SingleProductSlider image={image} />
              </div>
              <div className="col-6">
                <h1>{title}</h1>
                <p>{description}</p>
                <ul className={`${productMetaData.length > 0 ? "d-block" : "d-none"}`}>
                  <li>{line1}</li>
                  <li>{line2}</li>
                  <li>{line3}</li>
                  <li>{line4}</li>
                </ul>
                {/* <Link to="#Down"className="overview">Overview{'>'}</Link> */}
                <div className="SingleProduct_DetailsFooter">
                  <div className="priceCol">
                    <p>{CurrencyFormat(newPrice)}</p>
                    <span className={`${CurrencyFormat(oldPrice) !== undefined ? "d-block" : "d-none"}`}>Hurry ! Offer Ends Soon!  <span className='oldPrice'>{CurrencyFormat(oldPrice)}</span></span>
                  </div>
                  <div className="btnCol row m-0 p-0 ">
                    <Link to="/cart" className='btn border-0 outline-0 shadow-none rounded-0 col-6' onClick={()=>{addToCart(id, title, newPrice, oldPrice, image, color, item)}}>Add to Cart</Link>
                    <button className='btn border-0 outline-0 shadow-none rounded-0 col-6'>Buy On Amazon</button>
                    <button className='btn BuyNowBtn border-0 outline-0 shadow-none rounded-0 col-6'>Buy It Now</button>
                  </div>
                  <div className="socialCol">
                    <Link to={"https://www.facebook.com/sharer.php?u=https://us.soundpeats.com/products/soundpeats-truefree-plus-wireless-in-ear-sport-earbuds"}><i className="fa-brands fa-facebook"></i></Link>
                    <Link to={"https://twitter.com/share?text=SOUNDPEATS%20TrueFree%20+%20True%20Wireless%20In-Ear%20Sports%20Earbuds&url=https://us.soundpeats.com/products/soundpeats-truefree-plus-wireless-in-ear-sport-earbuds"}><i className="fa-brands fa-twitter"></i></Link>
                    <Link to={"https://www.pinterest.com/pin-builder/?url=https%3A%2F%2Fus.soundpeats.com%2Fproducts%2Fsoundpeats-truefree-plus-wireless-in-ear-sport-earbuds&media=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0508%2F7461%2F3942%2Fproducts%2FTFp_1_1_adobespark_edbaa5b5-383f-4bd1-a4ef-0f6b4e7006cf_large.png%3Fv%3D1630635175&description=True+Wireless+%26amp%3B+Bluetooth%C2%AE+5.0+Auto+Pairing+%26amp%3B+On-ear+Control+Monaural+%26amp%3B+Binaural+Calls+More...&method=button"}><i className="fa-brands fa-square-pinterest"></i></Link>
                  </div>
                  <div className="row benefitsCol mt-4">
                    <li className='col-4'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-fill-check" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z" />
                      </svg>
                      Buyer Protection</li>
                    <li className='col-4'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                      Fast Shipping</li>
                    <li className='col-4'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-1-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z" />
                      </svg>
                      1-Year Warrenty</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default SingleProduct;
