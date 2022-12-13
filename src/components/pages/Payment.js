import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import disc__Img from "../../images/discount.png";
import "../../Css/Checkout.css";
import { useCartContext } from "../../context/cart_context";
import CheckoutItem from "../CheckoutItem";
import PriceFormat from "../../Helpers/PriceFormat";
import PayPal_Logo from "../../images/Paypal_logo.png";
import PayPalCheckoutButtons from "../Paypal_Checkout_Button";

const Payment = ({ setProgress }) => {

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
  };

  return (
    <>
      <div className="payment_info container">
        <div className="payment_container">
          {/* ***************************** breadcrumbs *************************** */}

          <nav className="breadcrumb" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to={"/cart"}>Cart</Link></li>
              <li className="breadcrumb-item" aria-current="page">Information</li>
              <li className="breadcrumb-item" aria-current="page">Shipping</li>
              <li className="breadcrumb-item" aria-current="page">Payment</li>
            </ol>
          </nav>

          {/* ***************************** contact info *************************** */}
          <div className="contact__info">
            <div className="contact">
              <h6 className="contact__heading">Contact</h6>
              <div className="email">Lorem ipsum dolor sit amet.</div>
              <Link to="/checkout" className="change">Change</Link>
            </div>

            <hr />

            <div className="ship">
              <h6 className="ship_to__heading">Ship to</h6>
              <div className="address">Lorem ipsum dolor sit amet.</div>
              <Link to="/checkout" className="change">Change</Link>
            </div>
          </div>

          {/* ***************************** payment method *************************** */}
          <div className={`payment__method`}>
            <h5 className="payment_method__heading">Payment method</h5>
            <p className="Payment_title">All transactions are secure and encrypted.</p>
            <div className="paypal w-100">
              <img className="PayPal_Logo w-25" src={PayPal_Logo} alt="PayPal Logo" />
            </div>
          </div>

          {/* *************************** pay with paypal btn ************************************* */}
          <div className={`PaymentFooterBtn`}>
            <Link to="/shipping" className="return__shipping"><i className="fa-solid fa-chevron-left me-3"></i>Return to shipping</Link>
            <button type="submit" className="btn shadow-none">
              <Link to="" className="text-white"><PayPalCheckoutButtons /></Link>
            </button>
          </div>
        </div>

        {/* **************************************************************************** */}
        {/* *************************** payment ********************************* */}
        <div className="accordion accordion-flush MobileAccordion" id="accordionFlushExample" >
          <div className="accordion-item">
            <h2 className="accordion-header d-flex justify-content-between py-3" id="flush-headingOne" >
              <div className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" onClick={handleShowDetailstTxt} >
                <div className="summeryDetails"><i className="fa-solid fa-cart-shopping me-2" id=""></i>{showDetails}</div>
              </div>
              <div className="priceDetails">{PriceFormat(shipping_fee + total_price)}</div>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
              <div className="accordion-body">
                {/* ***********************order confirmation************************* */}

                {cart.map((curItem, index) => {
                  let { discount, price } = curItem;
                  DiscountAmount = DiscountAmount + (price * discount) / 100;
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
          </div>
        </div>
        <div className="payment DesktopPayment">
          {/* ***********************order confirmation************************* */}

          {cart.map((curItem, index) => {
            let { discount, price } = curItem;
            DiscountAmount = DiscountAmount + (price * discount) / 100;
            return <CheckoutItem key={curItem.id} {...curItem} />;
          })}

          {/* ***********************separater********************************** */}
          <hr />
          {/* ***********************Discount__btn********************************** */}
          <div className="discount__code d-flex my-3">
            <div className="form-floating col-9">
              <input type="text" className="form-control shadow-none" id="DiscountCode" placeholder="Discount Code" required/>
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
    </>
  );
};

export default Payment;
