import React from 'react';
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import PaymentList from '../images/PaymentList-removebg-preview.png'
import '../Css/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="why_choose_us py-5 text-center ">
            <h2 className='py-4'>SHOP BUDS FROM OUR 'GRAM</h2>
            <div className="why_choose_us_items d-flex flex-wrap justify-content-between align-items-center w-100">
              <div className="why_choose_us_item d-flex flex-wrap justify-content-center align-items-center my-3">
                <i className='fas fa-plane'></i><p> Worldwide Shipping</p>
              </div>
              <div className="why_choose_us_item d-flex flex-wrap justify-content-center align-items-center my-3">
               <i className="fa-regular fa-sack-dollar"></i><p> Money-Back Guarantee</p>
              </div>
              <div className="why_choose_us_item d-flex flex-wrap justify-content-center align-items-center my-3">
                <i className="fa-regular fa-shield-halved"></i><p> Hassle-Free Warranty</p>
              </div>
              <div className="why_choose_us_item d-flex flex-wrap justify-content-center align-items-center my-3">
                <i className='fas fa-headset'></i><p> Online Customer Service</p>
              </div>
            </div>
          </div>
      {/* ***************DESKTOP FOOTER******************** */}
      <div className='newsletter text-white text-center pt-5 '>
          <p className='mb-4'>Sign up for our newsletter for the latest news and exclusive deals</p>
          <form action='' className=''>
            <div className='input-icon'>
              <input type="email" className="form-control ps-3 py-3 rounded-0 m-auto border-0 outline-0 shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" />
              <i className="fa fa-angle-right" />
            </div>
          </form>
        </div>
      <div className='footer_desktop text-center text-white bg-black'>
        <section>
          <div className="col">
              {/* // ******************Supponser Companies****************** */}
            <div className='hidden-phone d-flex justify-content-around opacity-25' style={{ paddingTop: '78px' }}>
              <div><img className='cell' src={img1} alt="" /> </div>
              <div><img className='cell' src={img2} alt="" /> </div>
              <div><img className='cell' src={img3} alt="" /> </div>
              <div><img className='cell' src={img4} alt="" /> </div>
            </div>
            <div className='row p-5 m-0' style={{ textAlign: 'left' }}>
              {/* // ******************SoundPeats Menus****************** */}
              <div className='col'>
                <h6 className='text-uppercase text-white pb-3'><strong>SOUNDPEATS</strong></h6>
                <li className="Linklist__Item py-2">
                  <a href="/pages/about-us" className="d-block py-2 Link--primary">ABOUT US</a>
                  <a href="/pages/affiliate" className="d-block py-2 Link--primary">AFFILIATE</a>
                  <a href="/pages/media" className="d-block py-2 Link--primary">NEWSROOM</a>
                </li>
              </div>

              {/* // ******************Account Menus****************** */}
              <div className='col' >
                <h6 className='text-uppercase text-white pb-3'><strong>ACCOUNT</strong></h6>
                <li className="Linklist__Item py-2">
                  <a href="/collections/all-products" className="d-block py-2 Link--primary">ALL PRODUCT</a>
                  <a href="/pages/shipping-policy" className="d-block py-2 Link--primary">SHIPPING POLICY</a>
                  <a href="/pages/soundpeats-wireless-earbuds-wheretobuy" className="d-block py-2 Link--primary">WHERE TO BUY</a>
                </li>
              </div>

              {/* // ******************Support Menus****************** */}
              <div className='col'>
                <h6 className='text-uppercase text-white pb-3'><strong>SUPPORT</strong></h6>
                <li className="Linklist__Item py-2">
                  <a href="/pages/faq" className="d-block py-2 Link--primary">HELP CENTER</a>
                  <a href="/pages/download" className="d-block py-2 Link--primary">DOWNLOADS</a>
                  <a href="/pages/warranty" className="d-block py-2 Link--primary">WARRANTY &amp; SERVICE</a>
                  <a href="/pages/claim-your-warranty" className="d-block py-2 Link--primary">CLAIM YOUR WARRANTY</a>
                  <a href="/pages/return-refund-policy" className="d-block py-2 Link--primary">RETURN &amp; REFUND POLICY</a>
                </li>
              </div>

              {/* // ******************Shop Menus****************** */}
              <div className='col'>
                <h6 className='text-uppercase text-white pb-3'><strong>SHOP</strong></h6>
                <li className="Linklist__Item py-2">
                  <a href="/collections/all-products pb-3" className="d-block py-2 Link--primary">ALL PRODUCT</a>
                  <a href="/pages/shipping-policy pb-3" className="d-block py-2 Link--primary">SHIPPING POLICY</a>
                  <a href="/pages/soundpeats-wireless-earbuds-wheretobuy" className="d-block py-2 Link--primary">WHERE TO BUY</a>
                </li>
              </div>

              {/* // ******************Social Icons****************** */}
              <div className="col align-self-end ">
                <a className='twitter text-light px-2' href="https://twitter.com/SOUNDPEATS/" target={'_blank'}><i className="fa-brands fa-twitter socialIcon" /></a>
                <a className='facebook text-light px-2' href="https://www.facebook.com/SOUNDPEATS.Official/" target={'_blank'}><i className="fa-brands fa-facebook socialIcon" /></a>
                <a className='instagram text-light px-2' href="https://www.instagram.com/soundpeats_global/" target={'_blank'}><i className="fa-brands fa-instagram socialIcon" /></a>
                <a className='youtube text-light px-2' href="https://www.youtube.com/channel/UCYRNJk2TjaTj_fWJ5omNoBA/" target={'_blank'}><i className="fa-brands fa-youtube socialIcon" /></a>
                <a className='tiktok text-light px-2' href="https://www.tiktok.com/@soundpeatsaudio/" target={'_blank'}><i className="fa-brands fa-tiktok socialIcon" /></a>
              </div>
            </div>
          </div>

              {/* // ******************Companies****************** */}
          <div className="d-flex my-5">
            <div className="curiourCompany w-25 d-flex justify-content-evenly align-items-center ">
              <div className="dropdown navBar__currency  ps-2 px-0">
                <button className="btn dropdown-toggle text-white fw-bold px-0 py-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="currency_Btn">USD$</span>
                </button>
                <ul className="dropdown-menu w-100 text-center px-6 py-1" aria-labelledby="dropdownMenuButton1">
                  <li><button className="dropdown-item fw-bold border-bottom-0 px-0 py-1">CNY¥</button></li>
                  <li><button className="dropdown-item fw-bold border border-bottom-0 px-0 py-1">EUR€</button></li>
                  <li> <button className="dropdown-item fw-bold border border-bottom-0 px-0 py-1">MXN$</button></li>
                </ul>
              </div>
              <li className=''><img className='w-100' src="https://cdn.shopifycdn.net/s/files/1/0508/7461/3942/files/upslogo.png?v=1626084099" alt="" /></li>
              <li className=''><img className='w-100' src="https://cdn.shopifycdn.net/s/files/1/0508/7461/3942/files/dhllogo.png?v=1626084099" alt="" /></li>
              <li className=''><img className='w-100' src="https://cdn.shopifycdn.net/s/files/1/0508/7461/3942/files/fedexlogo.png?v=1626084099" alt="" /></li>
            </div>
            <div className="PaymentList w-50 ">
              <li><img className='w-100' src={PaymentList} alt="" /></li>
            </div>
            <div className="appcrb w-25 d-flex align-items-center justify-content-evenly ">
              <div className="applestore w-25"><img className='w-100' src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/apple_311x.png?v=1626084508" alt="" /></div>
              <div className="playstore w-25"><a href="https://play.google.com/store/apps/details?id=com.thirtydays.headset"><img className='w-100' src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/google_314x.png?v=1626084523" alt="" /></a></div>
            </div>
          </div>
        </section>

              {/* // ******************Bottom Footer****************** */}
        <div className='desktop__Footer_bottom Footer__content py-5 d-flex bg-black justify-content-evenly' >
          <p className="Footer__ThemeAuthor w-25"> © 2019-2022, <a href="/en-mx" title="">SOUNDPEATS</a>. All Rights Reserved</p>
          <a href="/en-mx/pages/privacy-policy">Privacy Policy</a>
          <a href="//en-mx/pages/cookie-preferences">Cookie Policy</a>
          <a href="/en-mx/pages/terms-of-use">Term of Use</a>
          <a href="/en-mx/pages/weee">WEEE</a>
          <a href="/en-mx/pages/intellectual-property-rights">Intellectual Property Rights</a>
          <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery">粤ICP备2020078239号</a>
        </div>
      </div>

      {/* ***************MOBILE FOOTER******************** */}
      <div className="footer__mobile me-4 ms-4">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseTwo">SOUNDPEATS</button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <Link className='text-decoration-none link-light d-block py-2' to="/about">ABOUT US</Link>
                <Link className='text-decoration-none link-light d-block py-2' to="/affiliate">AFFILIATE</Link>
                <Link className='text-decoration-none link-light d-block py-2' to="/newsroom">NEWSROOM</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion accordion-flush mt-2" id="accordionFlushExample">
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseTwo">ACCOUNT</button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <Link className='text-decoration-none link-light d-block py-2' to="/login">ACCOUNT LOGIN</Link>
                <Link className='text-decoration-none link-light d-block py-2' to="/signup">REGISTER</Link>
                <Link className='text-decoration-none link-light d-block py-2' to="/cart">CART</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion accordion-flush mt-2" id="accordionFlushExample">
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseTwo">SUPPORT</button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <Link className='text-decoration-none link-light d-block py-2 py-2' to="/helpcenter">HELP CENTER</Link>
                <Link className='text-decoration-none link-light d-block py-2 py-2' to="/download">DOWNLOADS</Link>
                <Link className='text-decoration-none link-light d-block py-2 py-2' to="/warranty">WARRANTY & SERVICES</Link>
                <Link className='text-decoration-none link-light d-block py-2 py-2' to="/claim">CLAIM YOUR WARRANTY</Link>
                <Link className='text-decoration-none link-light d-block py-2 py-2' to="/refundpolicy">RETURN & REFUND POLICY</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion accordion-flush mt-2" id="accordionFlushExample">
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseTwo">SHOP</button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <Link className='text-decoration-none link-light d-block py-2' to="/allproducts">ALL PRODUCTS</Link>
                <Link className='text-decoration-none link-light d-block py-2' to="/shippingpolicy">SHIPPING POLICY</Link>
                <Link className='text-decoration-none link-light d-block py-2' to="/wheretobuy">WHERE TO BUY</Link>
              </div>
            </div>
          </div>
        </div>
        {/* *****************CTA*************** */}
        <div className=" mt-2 ">
          <a className='twitter text-light pe-4' href="https://twitter.com/SOUNDPEATS/" target={'_blank'}><i className="fa-brands fa-twitter socialIcon" /></a>
          <a className='facebook text-light pe-4' href="https://www.facebook.com/SOUNDPEATS.Official/" target={'_blank'}><i className="fa-brands fa-facebook socialIcon" /></a>
          <a className='instagram text-light pe-4' href="https://www.instagram.com/soundpeats_global/" target={'_blank'}><i className="fa-brands fa-instagram socialIcon" /></a>
          <a className='youtube text-light pe-4' href="https://www.youtube.com/channel/UCYRNJk2TjaTj_fWJ5omNoBA/" target={'_blank'}><i className="fa-brands fa-youtube socialIcon" /></a>
          <a className='tiktok text-light pe-4' href="https://www.tiktok.com/@soundpeatsaudio/" target={'_blank'}><i className="fa-brands fa-tiktok socialIcon" /></a>
        </div>
        {/* *****************COMPANY*************** */}
        <div className='d-flex flex-wrap text-center opacity-100 justify-content-center pt-5'>
          <div className='w-50 mb-2'><img className='cell w-50' src={img1} alt="" /></div>
          <div className='w-50 mb-2'><img className='cell w-50' src={img2} alt="" /></div>
          <div className='w-50 mb-2'><img className='cell w-50' src={img3} alt="" /></div>
          <div className='w-50 mb-2'><img className='cell w-50' src={img4} alt="" /></div>
        </div>
        {/* *****************COPYRIGHT*************** */}
        <div className='Footer__content text-center bg-black pb-5 '>
          <p className="Footer__ThemeAuthor"> © 2019-2022,<a href="/en-mx" title="">
            SOUNDPEATS</a>. All Rights Reserved</p>
          <a href="/en-mx/pages/privacy-policy">Privacy Policy</a>
          <a href="//en-mx/pages/cookie-preferences">Cookie Policy</a>
          <a href="/en-mx/pages/terms-of-use">Term of Use</a>
          <a href="/en-mx/pages/weee">WEEE</a>
          <a href="/en-mx/pages/intellectual-property-rights">Intellectual Property Rights</a>
          <a href="/en-mx/pages/intellectual-property-rights">粤ICP备2020078239号</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
