import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useProductContext } from '../../context/product_context';
import "../Css/DProduct.css";

const DProduct = () => {
  const { products, AddProduct, CalcDiscount } = useProductContext();
  const [active, setActive] = useState("Add Product");
  const [product, setProduct] = useState({
    name: "",
    id: "",
    price: "",
    stock: "",
    discount: "",
    tag: "",
    brand: "",
    feature: "",
    category: "",
    color: "",
    date: "",
    PImage1: "",
    PImage2: "",
    PImage3: "",
    PImage4: "",
    image: [],
    Meta1: "",
    Meta2: "",
    Meta3: "",
    Meta4: "",
    productMeta: [],
    description: "",
  });
  let location = useLocation();
  const style1 = {
    display: "block",
    visibility: "visible",
  }
  const style2 = {
    display: "none",
    visibility: "hidden",
  }
  const ProductFunc = (str) => {
    setActive(str);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    AddProduct(product);
    // setProduct();
    alert("Product Added Successfully");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
      productMeta: [product.Meta1, product.Meta2, product.Meta3, product.Meta4],
      image: [product.PImage1, product.PImage2, product.PImage3, product.PImage4]
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [location]);

  return (
    <div className='DProduct' id='DProductContainer'>
      <div className="DProduct_Container row flex-lg-wrap w-100 py-4 mx-auto align-items-center justify-content-evenly">
        <div className="Container_Item col-2 rounded d-flex align-items-center justify-content-between p-4" onClick={() => ProductFunc("Add Product")}>
          <i className="fa-solid fa-plus fa-3x"></i>
          <h6 className='Item_txt_value mb-0'>Add Product</h6>
        </div>
        <div className="Container_Item col-2 rounded d-flex align-items-center justify-content-between p-4" onClick={() => ProductFunc("Delete Product")}>
          <i className="fa-solid fa-minus fa-3x"></i>
          <h6 className='Item_txt_value mb-0'>Delete Product</h6>
        </div>
        <div className="Container_Item col-2 rounded d-flex align-items-center justify-content-between p-4" onClick={() => ProductFunc("Edit Product")}>
          <i className="fa-solid fa-pen-to-square fa-3x"></i>
          <h6 className='Item_txt_value mb-0'>Edit Product</h6>
        </div>
        <div className="Container_Item col-2 rounded d-flex align-items-center justify-content-between p-4" onClick={() => ProductFunc("All Products")}>
          <i className="fa-solid fa-store fa-3x"></i>
          <h6 className='Item_txt_value mb-0'>All Products</h6>
        </div>
      </div>


      {/* //////////////////////////Add Product//////////////////////////////// */}
      <div className="AddProduct text-center" id="AddProductContainer" style={active === "Add Product" ? style1 : style2}>
        <h2>What's New</h2>
        <p>Please fill in the information below:</p>
        <form className="pt-4 d-flex flex-wrap justify-content-between" id="AddProductForm" action='' method='POST' onSubmit={handleAdd}>
          <input id="name" name="name" placeholder="PRODUCT NAME" className="w-100 form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.name} type="text" onChange={onChange} required />
          <input id="id" name="id" placeholder="PRODUCT ID" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.id} type="text" onChange={onChange} required />
          <input id="price" name="price" placeholder="PRICE" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.price} type="text" onChange={onChange} required />
          <input id="stock" name="stock" placeholder="STOCK" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.stock} type="text" onChange={onChange} required />
          <input id="discount" name="discount" placeholder="PERCENTAGE DISCOUNT" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.discount} type="text" onChange={onChange} required />
          <input id="tag" name="tag" placeholder="TAG" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.tag} type="text" onChange={onChange} required />
          <input id="brand" name="brand" placeholder="BRAND" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.brand} type="text" onChange={onChange} required />
          <select id="feature" name="feature" className="form-select outline-none shadow-none rounded-0 mb-3 py-2 px-3" aria-label=".form-select-sm example" value={product.feature} onChange={onChange} required >
            <option value={""}>FEATURE?</option>
            <option name="Yes" value={"Yes"}>Yes</option>
            <option name="No" value={"No"} >No</option>
          </select>
          <select id="category" name="category" className="form-select outline-none shadow-none rounded-0 mb-3 py-2 px-3" aria-label=".form-select-sm example" value={product.category} onChange={onChange} required >
            <option value={""} >PRODUCT CATEGORY</option>
            <option name="True Wireless" value={"True Wireless"}>True Wireless</option>
            <option name="Noise Cancelling" value={"Noise Cancelling"}>Noise Cancelling</option>
            <option name="AudioPhile" value={"AudioPhile"}>AudioPhile</option>
            <option name="Others" value={"Others"}>Others</option>
          </select>
          <input id="color" name="color" placeholder="COLOR" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.color} type="text" onChange={onChange} required />
          <input id="date" name="date" placeholder="DATE" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.date} type="date" onChange={onChange} required />
          <input id="PImage1" name="PImage1" className="input-file form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.PImage1} type="file" onChange={onChange} required />
          <input id="PImage2" name="PImage2" className="input-file form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.PImage2} type="file" onChange={onChange} required />
          <input id="PImage3" name="PImage3" className="input-file form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.PImage3} type="file" onChange={onChange} />
          <input id="PImage4" name="PImage4" className="input-file form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.PImage4} type="file" onChange={onChange} />
          <textarea id="Meta1" name="Meta1" placeholder="Product Meta 1" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.Meta1} onChange={onChange}></textarea>
          <textarea id="Meta2" name="Meta2" placeholder="Product Meta 2" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.Meta2} onChange={onChange}></textarea>
          <textarea id="Meta3" name="Meta3" placeholder="Product Meta 3" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.Meta3} onChange={onChange}></textarea>
          <textarea id="Meta4" name="Meta4" placeholder="Product Meta 4" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.Meta4} onChange={onChange}></textarea>
          <textarea id="description" name="description" placeholder="DESCRIPTION" className="w-100 form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.description} onChange={onChange} required />
          <button type="submit" id="AddProduct" className="btn rounded-0 w-100 py-2 px-3" >ADD PRODUCT</button>
        </form>
      </div>

      {/* //////////////////////////Delete Product//////////////////////////////// */}
      <div className="DeleteProduct text-center" id="DeleteProductContainer" style={active === "Delete Product" ? style1 : style2}>
        <h2>Delete Products</h2>
      </div>
      {/* //////////////////////////Edit Product//////////////////////////////// */}
      <div className="EditProduct text-center" id="EditProductContainer" style={active === "Edit Product" ? style1 : style2}>
        <h2>Edit Products</h2>
      </div>
      {/* //////////////////////////All Product//////////////////////////////// */}
      <div className="AllProducts text-center" id="AllProductsContainer" style={active === "All Products" ? style1 : style2}>
        <h2>All Products</h2>

        {products.map((item, index) => {
          const { id, name, tag, feature, brand, category, color, date, discount, description, price, stock, image, productMeta } = item;
          const [MainImg, OtherImg1, OtherImg2, OtherImg3] = image; // Destructuring From Array
          const [Meta1, Meta2, Meta3, Meta4] = productMeta; // Destructuring From Array
          // const NewAmount = CalcDiscount(discount, price);
          return (
            <div className="my-4 container p-0" key={index}>
              <div className="AllProducts_MainContainer row flex-lg-wrap mx-auto align-items-center justify-content-evenly w-100">
                <div className="col-2 Product_MainImg"><img src={MainImg} alt="Product Pic" className='w-100' /></div>
                <div className="col-1 Product_OtherImg">
                  <img src={OtherImg1} alt="T3400" className='w-100' />
                  <img src={OtherImg2} alt="T3400" className='w-100 my-4' />
                  <img src={OtherImg3} alt="T3400" className='w-100' />
                </div>
                <div className="col-4 Product_HeadingTxt">
                  <strong>Name:</strong>
                  <p className="Product_HeadingTxt_Name mb-4">{name}</p>
                  <strong>Description:</strong>
                  <p className="Product_HeadingTxt_Description mb-4">{description}</p>
                  <strong>Meta Description:</strong>
                  <ol className="Product_HeadingTxt_MetaDescription">
                    <li>{Meta1}</li>
                    <li>{Meta2}</li>
                    <li>{Meta3}</li>
                    <li>{Meta4}</li>
                  </ol>

                </div>
                <div className="col-2 Product_Meta">
                  <p className="Product_Meta_items Product_Meta_ID mb-4"><strong>Product ID: </strong>{id}</p>
                  <p className="Product_Meta_items Product_Meta_Price mb-4"><strong>Price: </strong>{price}</p>
                  <p className="Product_Meta_items Product_Meta_Discount mb-4"><strong>Discount: </strong>{discount}%</p>
                  <p className="Product_Meta_items Product_Meta_Date mb-4"><strong>Date: </strong>{date}</p>
                  <p className="Product_Meta_items Product_Meta_Feature mb-4 text-capitalize"><strong>Feature: </strong>{feature}</p>
                </div>
                <div className="col-2 Product_Meta border-0">
                  <p className="Product_Meta_items Product_Meta_Stock mb-4"><strong>Stock: </strong>{stock}</p>
                  <p className="Product_Meta_items Product_Meta_Brand mb-4"><strong>Brand: </strong>{brand}</p>
                  <p className="Product_Meta_items Product_Meta_Category mb-4"><strong>Category: </strong>{category}</p>
                  <p className="Product_Meta_items Product_Meta_Color mb-4"><strong>Color: </strong>{color}</p>
                  <p className="Product_Meta_items Product_Meta_Tag mb-4"><strong>Tag: </strong>{tag}</p>
                  <strong></strong>
                </div>
                <button type="button" className="Product_EditBtn btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >EDIT NOW</button>
              </div>
            </div>
          )
        })}
      </div>


      {/* <!-- Modal --> */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog w-100">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Edit Now</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="pt-4 d-flex flex-wrap justify-content-between" id="AddProductForm" action='' method='POST' onSubmit={handleAdd}>
                <input id="name" name="name" placeholder="PRODUCT NAME" className="w-100 form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.name} type="text" onChange={onChange} required />
                <input id="id" name="id" placeholder="PRODUCT ID" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.id} type="text" onChange={onChange} required />
                <input id="price" name="price" placeholder="PRICE" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.price} type="text" onChange={onChange} required />
                <input id="stock" name="stock" placeholder="STOCK" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.stock} type="text" onChange={onChange} required />
                <input id="discount" name="discount" placeholder="PERCENTAGE DISCOUNT" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.discount} type="text" onChange={onChange} required />
                <input id="tag" name="tag" placeholder="TAG" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.tag} type="text" onChange={onChange} required />
                <input id="brand" name="brand" placeholder="BRAND" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.brand} type="text" onChange={onChange} required />
                <select id="feature" name="feature" className="form-select outline-none shadow-none rounded-0 mb-3 py-2 px-3" aria-label=".form-select-sm example" value={product.feature} onChange={onChange} required >
                  <option value={""}>FEATURE?</option>
                  <option name="Yes" value={"Yes"}>Yes</option>
                  <option name="No" value={"No"} >No</option>
                </select>
                <select id="category" name="category" className="form-select outline-none shadow-none rounded-0 mb-3 py-2 px-3" aria-label=".form-select-sm example" value={product.category} onChange={onChange} required >
                  <option value={""} >PRODUCT CATEGORY</option>
                  <option name="True Wireless" value={"True Wireless"}>True Wireless</option>
                  <option name="Noise Cancelling" value={"Noise Cancelling"}>Noise Cancelling</option>
                  <option name="AudioPhile" value={"AudioPhile"}>AudioPhile</option>
                  <option name="Others" value={"Others"}>Others</option>
                </select>
                <input id="color" name="color" placeholder="COLOR" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.color} type="text" onChange={onChange} required />
                <input id="date" name="date" placeholder="DATE" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.date} type="date" onChange={onChange} required />
                <input id="PImage1" name="PImage1" className="input-file form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.PImage1} type="file" onChange={onChange} required />
                <input id="PImage2" name="PImage2" className="input-file form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.PImage2} type="file" onChange={onChange} required />
                <input id="PImage3" name="PImage3" className="input-file form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.PImage3} type="file" onChange={onChange} />
                <input id="PImage4" name="PImage4" className="input-file form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.PImage4} type="file" onChange={onChange} />
                <textarea id="Meta1" name="Meta1" placeholder="Product Meta 1" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.Meta1} onChange={onChange}></textarea>
                <textarea id="Meta2" name="Meta2" placeholder="Product Meta 2" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.Meta2} onChange={onChange}></textarea>
                <textarea id="Meta3" name="Meta3" placeholder="Product Meta 3" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.Meta3} onChange={onChange}></textarea>
                <textarea id="Meta4" name="Meta4" placeholder="Product Meta 4" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.Meta4} onChange={onChange}></textarea>
                <textarea id="description" name="description" placeholder="DESCRIPTION" className="w-100 form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.description} onChange={onChange} required />
                <button type="submit" id="AddProduct" className="btn rounded-0 w-100 mb-3 py-2 px-3" >Save Changes</button>
                <button type="button" className="btn rounded-0 w-100 py-2 px-3" data-bs-dismiss="modal">Close</button>
              </form>
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default DProduct;
