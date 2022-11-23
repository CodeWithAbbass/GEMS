import React, { useEffect, } from "react";
import { Link, useLocation } from 'react-router-dom';
import "https://kit.fontawesome.com/b3b18b68d1.js";
import "../Css/Header.css";
import { useCartContext } from "../context/cart_context";
import GEMSLOGO from ".././images/GEMS/GEMSLOGO.png"
const Header = () => {

  const { total_item } = useCartContext();
  
  const location = useLocation()

  useEffect(() => {
    // eslint-disable-next-line
  }, [location]);


  function openNav() {
    const width = window.innerWidth;
    if (width <= 768) {
      document.getElementById("mySidenav").style.width = "100%";
    } else {
      document.getElementById("mySidenav").style.width = "30%";
    }
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  if (document.querySelector(".header")) { // Header Loaded? Check! 
    const topBar = document.querySelector('.header__topBar');
    const headeNavBar = document.querySelector(".header__navBar");
    const currencyBtn = document.querySelector(".currency_Btn");
    const hamIcon = document.querySelectorAll(".hamburger__Icon");
    const rightIcon = document.querySelectorAll("#rightIcon");
    if (location.pathname !== "/") {      // Page is Not = "/"? Check! 
      topBar.style.display = "none";
      headeNavBar.style.background = "#FFFFFF";
      currencyBtn.style.color = "#000000";
      for (const iterator of hamIcon) {
        iterator.style.backgroundColor = "#000000";
      }
      for (const iterator of rightIcon) {
        iterator.style.color = "#000000";
      }
    } else {
      topBar.style.display = "block";
      currencyBtn.style.color = "#FFFFFF";
      for (const iterator of hamIcon) {
        iterator.style.backgroundColor = "#FFFFFF";
      }
      for (const iterator of rightIcon) {
        iterator.style.color = "#FFFFFF";
      }
    }

  }
  function handleHoverIn() {
    if (location.pathname === "/") {
      if (document.querySelector(".header")) {
        const headeNavBar = document.querySelector(".header__navBar");
        const currencyBtn = document.querySelector(".currency_Btn");
        const hamIcon = document.querySelectorAll(".hamburger__Icon");
        const rightIcon = document.querySelectorAll("#rightIcon");
        headeNavBar.style.transition = "all 0.5s";
        headeNavBar.style.backgroundColor = "#FFFFFF";
        currencyBtn.style.color = "#000000"
        for (const iterator of hamIcon) {
          iterator.style.backgroundColor = "#000000";
        }
        for (const iterator of rightIcon) {
          iterator.style.color = "#000000";
        }
      }
    }
  }

  function handleHoverOut() {
    if (location.pathname === "/") {
      if (document.querySelector(".header")) {
        const headeNavBar = document.querySelector(".header__navBar");
        const currencyBtn = document.querySelector(".currency_Btn");
        const hamIcon = document.querySelectorAll(".hamburger__Icon");
        const rightIcon = document.querySelectorAll("#rightIcon");
        headeNavBar.style.transition = "all 0.5s";
        headeNavBar.style.backgroundColor = "transparent";
        currencyBtn.style.color = "#FFFFFF";
        for (const iterator of hamIcon) {
          iterator.style.backgroundColor = "#FFFFFF";
        }
        for (const iterator of rightIcon) {
          iterator.style.color = "#FFFFFF";
        }
      }
    }
  }

  window.onscroll = function () {
    if (location.pathname === "/") {
      const topBar = document.querySelector('.header__topBar');
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        handleHoverIn();
        topBar.style.display = "none";
      } else {
        handleHoverOut();
        topBar.style.display = "block";
      }
    }
  };
  const handleOnChange = (v) => {
    // console.log('Clicked')
  }
  const searchBarAppearance = () => {
    const searchBar = document.querySelector(".searchBar");
    if (searchBar.style.display === "none") {
      searchBar.style.display = "block";
      searchBar.style.transition = "0.3s ease - out";
    } else {
      searchBar.style.display = "none";
    }
  }
  return (
    <div className="header">
      <div className="fixed-top header_static" tabIndex={0}>
        <p className={`header__topBar fw-bolder text-white text-center bg-dark`}>Air3 Deluxe HS will be launch on 11/18.</p>
        <div className="header__navBar d-flex justify-content-between" id="navBar" onMouseOver={handleHoverIn} onMouseOut={handleHoverOut}>
          <div className="navBar__left" onClick={openNav}>
            <div className="hamBurgerIcon">
              <div className="hamburger__Icon"></div>
              <div className="hamburger__Icon"></div>
              <div className="hamburger__Icon"></div>
            </div>
          </div>

          <div className="navBar__center align-self-center text-center">
            <Link to="/"><img className="" src={GEMSLOGO} alt="GEMS" /></Link>
          </div>
          <div className="navBar__right d-flex align-items-center justify-content-between text-white">
            <div className="dropdown navBar__currency  ps-2 pr-2 px-0">
              <button className="btn dropdown-toggle text-white fw-bold px-0 py-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="currency_Btn">USD$</span>
              </button>
              <ul className="dropdown-menu w-100 text-center px-6 py-1" aria-labelledby="dropdownMenuButton1">
                <li><button className="dropdown-item fw-bold border-bottom-0 px-0 py-1">CNY¥</button></li>
                <li><button className="dropdown-item fw-bold border border-bottom-0 px-0 py-1">EUR€</button></li>
                <li> <button className="dropdown-item fw-bold border border-bottom-0 px-0 py-1">MXN$</button></li>
              </ul>
            </div>
            <Link onClick={searchBarAppearance}><i className="fa-solid fa-magnifying-glass  searchIcon" id="rightIcon"></i></Link>
            <Link to="/user"><i className="fa-regular fa-user" id="rightIcon"></i></Link>
            <Link to="/cart"><i className="fa-solid fa-cart-shopping" id="rightIcon"></i><span className="total_cartProduct">{total_item}</span></Link>
            <div className="dropdown navBar__country px-6 px-1">
              <button className="btn dropdown-toggle text-white px-2 py-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://cdn.weglot.com/flags/circle/us.svg" alt="American" />
              </button>
              <ul
                className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1" ><li><img className=" border border-bottom-0" src="https://cdn.weglot.com/flags/circle/es.svg" alt="American" /> </li>
                <li> <img className=" border border-bottom-0" src="https://cdn.weglot.com/flags/circle/de.svg" alt="American" />
                </li>
                <li> <img className=" border border-bottom-0" src="https://cdn.weglot.com/flags/circle/cn.svg" alt="American" />
                </li>
                <li><img className=" border border-bottom-0" src="https://cdn.shopifycdn.net/s/files/1/0508/7461/3942/files/jp_1.svg?v=1635846138" alt="American" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="input-group searchBar" tabIndex={1}>
        <input type="text" className="form-control rounded-0 border-0" id="search" name="search" aria-label="Text input with dropdown button" placeholder="Search..." onChange={handleOnChange} />
      </div>
      <div id="mySidenav" className={`sidenav`} >
        <div className="container px-5">
          <Link to="#" className="closebtn" onClick={closeNav}>&times;</Link>
          <Link className="AllProducts mt-2" to="/allproducts" onClick={closeNav}>ALL PRODUCTS</Link>
          <Link className="NewArrivals mt-2" to="/newarrivals" onClick={closeNav}>NEW ARRIVALS</Link>
          <div className="accordion accordion-flush mt-2" id="accordionFlushExample">
            <div className="accordion-item bg-transparent">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">SUPPORT</button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <Link to="/helpcenter" onClick={closeNav}>Help Center</Link>
                  <Link to="/download" onClick={closeNav}>Download</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion accordion-flush mt-2" id="accordionFlushExample">
            <div className="accordion-item bg-transparent">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  COMMUNITY
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <a href="https://www.facebook.com/groups/soundpeatsglobal" target="_blank" rel="noopener noreferrer">JOIN PEATS Group</a>
                  <Link to="/blog">Blog</Link>
                  <Link to="/newarrivals">Unboxing Videos</Link>
                </div>
              </div>
            </div>
          </div>
          <Link className="Contact mt-2" to="/affiliate" onClick={closeNav}>AFFILIATE</Link>
          <Link className="Contact mt-2" to="/wheretobuy" onClick={closeNav}>WHERE TO BUY</Link>
        </div>
        <div className="container px-5 mt-5">
          <Link className="Contact py-2 bottomBtn" to="/cart" onClick={closeNav}>CART</Link>
          <Link className="Contact py-2 bottomBtn" to="/search" onClick={closeNav}>SEARCH</Link>
          <Link className="Contact py-2 bottomBtn" to="/login" onClick={closeNav}>LOGIN IN</Link>
        </div>
      </div>
    </div>
  );

};

export default Header;
