import React from 'react';
import { Link } from 'react-router-dom';
import "../Css/DHeader.css";
import DSidebar from "../Dcomponents/DSidebar";
import GEMSLOGO from "../../images/GEMS/GEMSLOGO.png";
import User from "../img/user.jpg";


const DHeader = () => {


  function openDSidebar() {
    const width = window.innerWidth;
    if (width <= 768) {
      document.getElementById("DSidebar_Container").style.width = "100%";
    } else {
      document.getElementById("DSidebar_Container").style.width = "23%";
    }
  }
  function closeDSidebar() {
    document.getElementById("DSidebar_Container").style.width = "0";
  }
  const handleOnChange = (v) => {
    // console.log('Clicked')
  }
  return (
    <div className='DHeader'>
      <div className="container-fluid d-flex justify-content-between">
        <div className="DHeader_Left row align-items-center w-50">
          <Link to="/admin" className="col-3 text-center Logo_Col"><img src={GEMSLOGO} alt="GEMS" className='w-100' /></Link>
          <div className="col-9 text-center SearchContainer">
            <i className='fa fa-bars d-inline me-lg-4' onClick={openDSidebar}></i>
            <input type="text" className="form-control border-0 w-50 d-inline" id="search" name="search" aria-label="Text input with dropdown button" placeholder="Search..." onChange={handleOnChange} />
          </div>
        </div>
        <div className="DHeader_Right row align-items-center w-50 justify-content-end">
          <div className="col-3 text-center Message_Col">
            <i className='fa fa-envelope me-lg-2'></i> <span>Message</span></div>
          <div className="col-3 text-center Notification_Col">
            <i className='fa fa-bell me-lg-2'></i><span>Notification</span>
          </div>
          <div className="col-3 text-center">
            <img src={User} alt="" className='rounded-circle me-lg-2' /><span>Abbas</span>
          </div>
        </div>
        <div id="DSidebar_Container">
          <DSidebar closeDSidebar={closeDSidebar} /></div>
      </div>
    </div>
  );
}

export default DHeader;
