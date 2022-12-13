import React from 'react';
import "../Css/DHome.css";
const DHome = () => {
  

  return (
    <div className='DHome'>
     <div className="DHome_Container row flex-lg-wrap w-100 py-4 mx-auto align-items-center justify-content-evenly">
      <div className="Container_Item col-2 rounded d-flex align-items-center justify-content-between p-4">
        <i className='fa fa-chart-line fa-3x'></i>
        <div className="Item_txt">
        <p className='Item_txt_heading'>Today Sale</p>
        <h6 className='Item_txt_value'>$1234</h6></div>
      </div>
      <div className="Container_Item col-2 rounded d-flex align-items-center justify-content-between p-4">
        <i className='fa fa-chart-bar fa-3x'></i>
        <div className="Item_txt">
        <p className='Item_txt_heading'>Total Sale</p>
        <h6 className='Item_txt_value'>$1234</h6>
        </div>
      </div>
      <div className="Container_Item col-2 rounded d-flex align-items-center justify-content-between p-4">
        <i className='fa fa-chart-area fa-3x'></i>
        <div className="Item_txt">
        <p className='Item_txt_heading'>Today Orders</p>
        <h6 className='Item_txt_value'>$1234</h6>
        </div>
      </div>
      <div className="Container_Item col-2 rounded d-flex align-items-center justify-content-between p-4">
        <i className='fa fa-chart-pie fa-3x'></i>
        <div className="Item_txt">
        <p className='Item_txt_heading'>Total Orders</p>
        <h6 className='Item_txt_value'>$1234</h6>
        </div>
      </div>
     </div>
    </div>
  );
}

export default DHome;
