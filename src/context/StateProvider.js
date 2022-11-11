import React from "react";
import stateContext from "./stateContext";
import { useState } from "react";

const StateProvider = (props) => {
  const host = 'http://localhost:5000';
  const productInitial = [];
  const [product, setProduct] = useState(productInitial);
// discount:number, tag:string
// image:file
// brand:string
// title:string
// desicription:string
// AmountAfterDiscount:number, total Amount:number

//  Add a Product 
 const Product = async (id,  name, category, quantity, weight, discount, date, author, description,  pMainImage, pOtherImage,) => {
  // const url = 'api/notes/addnote';
  // const response = await fetch(`${host}/${url}`, {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'auth-token':localStorage.getItem("token")
  //     },body: JSON.stringify({title, description, tag}) // body data type must match "Content-Type" header
  // });
  const productRes = await response.json();
  setProduct(product.concat(productRes))
}




  //Get the button
//const backToTopBtn = document.querySelector(".scrollUp");
// When the user scrolls down 20px from the top of the document, show the button
// const ScrollUpFunc = function (element) {
//     if (!(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
//       ))  
//       {
//         element.style.display = "none";
//     } else {
//         element.style.display = 'block';
//     }
//     };

  return (
    <stateContext.Provider value={{
      // ScrollUpFunc,
      Product
      }}>
    {props.children}
</stateContext.Provider>
  );
}

export default StateProvider;
