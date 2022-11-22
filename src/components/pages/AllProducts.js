import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StateContext from "../../context/StateContext";
import ProductGrid3x from "../ProductGrid3x";
import ProductGrid2x from '../ProductGrid2x';
import "../../Css/AllProducts.css"

const AllProducts = (props) => {
  const location = useLocation()
  const context = useContext(StateContext);
  const { products } = context; // Destructure
  const [data, setData] = useState(products);
  const [Grid2xActive, setGrid2xActive] = useState(true);
  const [Grid3xActive, setGrid3xActive] = useState(false);
  useEffect(() => {
    props.setProgress(10)
    props.setProgress(30)
    props.setProgress(50)
    props.setProgress(100)
    window.scrollTo(0, 0)
    // eslint-disable-next-line
  }, [location]);

  const filterRes = (category) => {
    props.setProgress(100)
    const result = products.filter(item => item.category === category)
    setData(result);
  }
  const filterAllRes = () => {
    props.setProgress(100)
    const result = products.filter(item => item)
    setData(result)
  }
  const Sort = () => {
    const userSelect = document.querySelector('.form-select').value;
    const CopyAllProducts = products.map(a => a) // Copy Array of Object Because we don't want to change original array.

    switch (userSelect) {
      case "New to Old":
        const resultNewtoOld = CopyAllProducts.sort((a, b) => a.date.localeCompare(b.date));
        setData(resultNewtoOld);
        break;
      case "Old to New":
        const resultOldtoNew = CopyAllProducts.reverse((a, b) => a.date.localeCompare(b.date));
        setData(resultOldtoNew);
        break;
      case "Feature":
        const resultFeature = CopyAllProducts.sort((a, b) => a.discount.localeCompare(b.discount));
        setData(resultFeature);
        break;
      case "Best Selling":
        const resultBestSelling = CopyAllProducts.sort((a, b) => a.discount.localeCompare(b.discount));
        setData(resultBestSelling);
        break;
      case "A - Z":
        const resultAZ = CopyAllProducts.sort((a, b) => a.title.localeCompare(b.title));
        setData(resultAZ);
        break;
      case "Z - A":
        const resultZA = CopyAllProducts.sort((a, b) => b.title.localeCompare(a.title));
        setData(resultZA);
        break;
      case "Low to High":
        const resultLowtoHigh = CopyAllProducts.sort((a, b) => a.newPrice.localeCompare(b.newPrice));
        setData(resultLowtoHigh);
        break;
      case "High to Low":
        const resultHightoLow = CopyAllProducts.sort((a, b) => b.newPrice.localeCompare(a.newPrice));
        setData(resultHightoLow);
        break;
      default:
        const defaultResult = CopyAllProducts.sort((a, b) => a.title.localeCompare(b.title));
        setData(defaultResult);
    }

  }

  const Grid2x = () => {
    setGrid3xActive(false);
    setGrid2xActive(true);
  }
  const Grid3x = () => {
    setGrid2xActive(false);
    setGrid3xActive(true);
  }
  return (
    <div className='AllProduct text-center'>
      <h2 className='mt-5'>ALL PRODUCTS</h2>
      <div className="container AllProduct_filter my-5 d-flex flex-wrap justify-content-between bg-white">
        {/* Desktop Filter Menu */}
        <div className="AllProduct_filterMenus Desktop_Filter_Menu d-flex flex-wrap align-content-center justify-content-center">
          <button className='btn border-0 outline-0 shadow-none radius-0' onClick={() => filterAllRes()}>All Products</button>
          <button className='btn border-0 outline-0 shadow-none radius-0' onClick={() => filterRes("True Wireless")}>True Wireless</button>
          <button className='btn border-0 outline-0 shadow-none radius-0' onClick={() => filterRes("Noise Cancelling")}>Noise Cancelling</button>
          <button className='btn border-0 outline-0 shadow-none radius-0' onClick={() => filterRes("AudioPhile")}>AudioPhile</button>
          <button className='btn border-0 outline-0 shadow-none radius-0' onClick={() => filterRes("Others")}>Others</button>
        </div>
        {/* Mobile Filter Menu */}
        <div className="AllProduct_filterMenus Mobile_Filter_Menu mt-4">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item bg-transparent">
              <div className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed bg-transparent d-block text-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseTwo">All Products</button>
              </div>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <button className='text-decoration-none link-light d-block py-2' onClick={() => filterAllRes()}>All Products</button>
                  <button className='text-decoration-none link-light d-block py-2' onClick={() => filterRes("True Wireless")}>True Wireless</button>
                  <button className='text-decoration-none link-light d-block py-2' onClick={() => filterRes("Noise Cancelling")}>Noise Cancelling</button>
                  <button className='text-decoration-none link-light d-block py-2' onClick={() => filterRes("AudioPhile")}>AudioPhile</button>
                  <button className='text-decoration-none link-light d-block py-2' onClick={() => filterRes("Others")}>Others</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="AllProduct_collectionToolbar d-flex flex-wrap align-items-center">
          <div className="Grid_Icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`bi bi-grid-fill me-2 ${Grid2xActive ? "active_Grid" : ""}`} viewBox="0 0 16 16" onClick={Grid2x}>
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`bi bi-grid-3x3-gap-fill ${Grid3xActive ? "active_Grid" : ""}`} viewBox="0 0 16 16" onClick={Grid3x}>
              <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
            </svg>
          </div>
          <select className="form-select rounded-0 shadow-none ms-2" aria-label="Default select example" onChange={Sort}>
            <option value="New to Old" defaultValue={"Date,New to Old"}>Date,New to Old</option>
            <option value="Old to New">Date,Old to New</option>
            <option value="Feature">Feature</option>
            <option value="Best Selling">Best Selling</option>
            <option value="A - Z">Alphabetically, A-Z</option>
            <option value="Z - A">Alphabetically, Z-A</option>
            <option value="Low to High">Price,Low to High</option>
            <option value="High to Low">Price,High to Low</option>
          </select>
        </div>
      </div>

      <div className={`container d-flex justify-content-center g-0 ${Grid3xActive ? "d-block" : "d-none"}`}>
        <div className="row w-100 justify-content-between">
          {data.map((item, index) => {
            const { id, title, tag, brand, category, weight, discount, description, newPrice, oldPrice, image } = item;
            const imgData = Object.values(image);
            const [pMainImg, pOtherImg] = imgData; // Destructuring From Array
            return (
              <div className="col-4 m-0 p-0 ProductGrid3x_Column mb-5" key={index}>
                <ProductGrid3x
                  id={id}
                  title={title}
                  tag={tag}
                  brand={brand}
                  category={category}
                  weight={weight}
                  discount={discount}
                  description={description}
                  newPrice={newPrice}
                  oldPrice={oldPrice}
                  pMainImg={pMainImg}
                  pOtherImg={pOtherImg}
                />
              </div>)
          })}
        </div>
      </div>
      <div className={`container ProductGrid2x_Column d-flex justify-content-center g-0 ${Grid2xActive ? "d-block" : "d-none"}`}>
        <div className="row w-100 justify-content-between m-0">
          {data.map((item, index) => {
            const { id, title, tag, brand, category, weight, discount, description, newPrice, oldPrice, image } = item;
            const imgData = Object.values(image);
            const [pMainImg, pOtherImg] = imgData; // Destructuring From Array
            return (
              <div className="col-6 m-0 p-0 mb-5" key={index}>
                <ProductGrid2x
                  id={id}
                  title={window.innerWidth <= 768 ? `${title.slice(0, 28)}...` : title}
                  tag={tag}
                  brand={brand}
                  category={category}
                  weight={weight}
                  discount={discount}
                  description={window.innerWidth <= 768 ? `${description.slice(0, 50)}...` : description}
                  newPrice={newPrice}
                  oldPrice={oldPrice}
                  pMainImg={pMainImg}
                  pOtherImg={pOtherImg}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
