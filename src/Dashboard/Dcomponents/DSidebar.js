import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Css/DSidebar.css";
import User from "../img/user.jpg";
const DSidebar = ({ closeDSidebar }) => {
  let location = useLocation();

  useEffect(() => {

    // eslint-disable-next-line
  }, [location]);


  return (
    <div className='DSidebar'>
      <div className="closeBtn text-white p-1" onClick={closeDSidebar}>x</div>
      <div className="d-flex align-items-center ms-4 mb-4 ">
        <div className="position-relative">
          <img src={User} alt="Admin" className='rounded-circle' />
          <div className='bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1'></div>
        </div>
        <div className="Profile_text ms-3">
          <h6 className='mb-0 text-white'>Abbas</h6>
          <span className=''>Admin</span>
        </div>
      </div>
      <div className="navbar-nav w-100" >
        <Link to="/admin" className={`nav-item ${location.pathname === "/admin" ? "active" : ""}`} ><i className='fa fa-tachometer-alt me-2'></i>Dashboard</Link>
        <Link to="/admin/product" className={`nav-item ${location.pathname === "/admin/product" ? "active" : ""}`} ><i className="fa-brands fa-product-hunt me-2"></i>Product</Link>
        <Link to="/admin/blog" className={`nav-item ${location.pathname === "/admin/blog" ? "active" : ""}`} ><i className="fa-sharp fa-solid fa-blog me-2"></i>Blog</Link>
      </div>
      {/* <ul>
        <li><i className="fa fa-tachometer-alt me-3"></i>Dashboard</li>
        <li><i class="fa-brands fa-product-hunt me-3"></i>Product</li>
        <li><i class="fa-sharp fa-solid fa-blog me-3"></i>Blog</li>
      </ul> */}
    </div>
  );
}

export default DSidebar;
