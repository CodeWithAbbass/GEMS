import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Css/Checkout.css";
import { useCartContext } from "../../context/cart_context";
import PriceFormat from "../../Helpers/PriceFormat";
import CheckoutForm from "../CheckoutForm";
import CheckoutItem from "../CheckoutItem";
import disc__Img from "../../images/discount.png";
import PayPalCheckoutButtons from "../Paypal_Checkout_Button";
// import { useProductContext } from "../../context/product_context";

const Checkout = ({ setProgress }) => {

  const { cart, shipping_fee, total_price } = useCartContext();
  let DiscountAmount = 0;
  useEffect(() => {
    setProgress(10);
    setProgress(30);
    setProgress(50);
    setProgress(100);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  const [showDetails, setShowDetails] = useState("Show Order Summery");

  const handleShowDetailstTxt = () => {
    if (showDetails === "Show Order Summery") {
      setShowDetails("Hide Order Summery");
    } else {
      setShowDetails("Show Order Summery");
    }
  }
  return (
    <div className="checkout__info container">

      {/* *************************** checkout__form ************************* */}

      <div className="checkout_container">

        {/* ***************************** breadcrumbs *************************** */}
        <nav className="breadcrumbs" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/cart">Cart</Link></li>
            <li className="breadcrumb-item" aria-current="page">Information</li>
            <li className="breadcrumb-item" aria-current="page">Shipping</li>
            <li className="breadcrumb-item" aria-current="page">Payment</li>
          </ol>
        </nav>
        {/* ***************************** express__checkout *************************** */}
        <div className="express__checkout">
          <div className="Paypal__checkout">Express Checkout</div>
          <div className="paypal__payment">
            <button className="btn"><PayPalCheckoutButtons /></button>
          </div>
        </div>
        {/* ***************************** divider *************************** */}
        <div className="divider">
          <div className="Or">OR</div>
        </div>
        {/* ***************************** form *************************** */}
        <div className="form_container">
          <CheckoutForm />
        </div>
      </div>

      {/* *************************** payment ********************************* */}

      <div className="accordion accordion-flush MobileAccordion" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header d-flex justify-content-between py-3" id="flush-headingOne">
            <div className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" onClick={handleShowDetailstTxt}>
              <div className="summeryDetails">
                <i className="fa-solid fa-cart-shopping me-2" id=""></i>{showDetails}
              </div>
            </div>
              <div className="priceDetails">{PriceFormat(shipping_fee + total_price)}</div>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">

              {/* ***********************order confirmation************************* */}

              {cart.map((curItem, index) => {
                let { discount, price } = curItem;
                DiscountAmount = DiscountAmount + ((price * discount) / 100);
                return <CheckoutItem key={curItem.id} {...curItem} />;
              })}

              {/* ***********************separater********************************** */}
              <hr />
              {/* ***********************Discount__btn********************************** */}
              <div className="discount__code d-flex my-3">
                <div className="form-floating col-9">
                  <input type="text" className="form-control shadow-none" id="DiscountCode" placeholder="Discount Code" required />
                  <label htmlFor="DiscountCode">Discount Code</label>
                </div>

                <button type="submit" className="btn btn-dark mx-2 col-3">Apply</button>
              </div>

              {/* ***********************separater********************************** */}
              <hr />

              <div className="shipping">
                {/* ***********************Subtotal******************************** */}
                <div className="card-total">
                  <h3 className="sub__total">Subtotal</h3>
                  <h3 className="sub__total_price"><span>{PriceFormat(total_price)}</span></h3>
                </div>

                {/* ***********************discount******************************** */}
                <div className="card-total">
                  <h3 className="discount">Discount</h3>
                  <h3 className="discount__price">
                    <span>-{PriceFormat(DiscountAmount)}</span>
                  </h3>
                </div>

                <div className="discount_tag">
                  <img src={disc__Img} alt="" />
                  <h6 className="my-2">SAVE <span className="fw-bold">{PriceFormat(DiscountAmount)}</span> AT CHECKOUT</h6>
                </div>

                {/* ***********************shipping__price************************** */}
                <div className="card-total">
                  <h3 className="discount">Shipping</h3>
                  <h3 className="discount__price">
                    <span>{PriceFormat(shipping_fee)}</span>
                  </h3>
                </div>
              </div>

              {/* ***********************separater********************************** */}
              <hr />

              {/* ***********************total__amount****************************** */}
              <div className="card-total">
                <h6 className="total">Total</h6>
                <div className="price__format d-flex align-items-end">
                  <abbr>USD</abbr>
                  <h2>{PriceFormat(shipping_fee + total_price)}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment DesktopPayment">

        {/* ***********************order confirmation************************* */}

        {cart.map((curItem, index) => {
          let { discount, price } = curItem;
          DiscountAmount = DiscountAmount + ((price * discount) / 100);
          return <CheckoutItem key={curItem.id} {...curItem} />;
        })}

        {/* ***********************separater********************************** */}
        <hr />
        {/* ***********************Discount__btn********************************** */}
        <div className="discount__code d-flex my-3">
          <div className="form-floating col-9">
            <input type="text" className="form-control shadow-none" id="DiscountCode" placeholder="Discount Code" required />
            <label htmlFor="DiscountCode">Discount Code</label>
          </div>

          <button type="submit" className="btn btn-dark mx-2 col-3">Apply</button>
        </div>

        {/* ***********************separater********************************** */}
        <hr />

        <div className="shipping">
          {/* ***********************Subtotal******************************** */}
          <div className="card-total">
            <h6 className="sub__total">Subtotal</h6>
            <h6 className="sub__total_price"><span>{PriceFormat(total_price)}</span></h6>
          </div>

          {/* ***********************discount******************************** */}
          <div className="card-total">
            <h6 className="discount">Discount</h6>
            <h6 className="discount__price"><span>-{PriceFormat(DiscountAmount)}</span></h6>
          </div>

          <div className="discount_tag">
            <img src={disc__Img} alt="" />
            <h6 className="my-2">SAVE <span className="fw-bold">{PriceFormat(DiscountAmount)}</span> AT CHECKOUT</h6>
          </div>

          {/* ***********************shipping__price************************** */}
          <div className="card-total">
            <h6 className="discount">Shipping</h6>
            <h6 className="discount__price"><span>{PriceFormat(shipping_fee)}</span></h6>
          </div>
        </div>

        {/* ***********************separater********************************** */}
        <hr />

        {/* ***********************total__amount****************************** */}
        <div className="card-total">
          <h6 className="total">Total</h6>
          <div className="price__format d-flex align-items-end">
            <abbr>USD</abbr>
            <h2>{PriceFormat(shipping_fee + total_price)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;