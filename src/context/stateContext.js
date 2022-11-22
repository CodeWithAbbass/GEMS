import React from "react";
import { useState, useReducer } from "react";
import { reducer } from "../reducer/reducer";
const StateContext = (props) => {
  const productInitial = [
    {
      id: "12341",
      tag: "NEW",
      brand: "SoundPeates",
      title: "SOUNDPEATS Life Wireless Earbuds",
      category: "AudioPhile",
      color: "Black",
      date: "05/08/22",
      discount: "-12%",
      description: "Best Budget Solution for ANC Wireless Earbuds",
      newPrice: "39",
      oldPrice: "45",
      stock: 5,
      productMeta: {
        line1: "Active Noise Canceling 25dB & V5.2",
        line2: "12mm Large Drivers & Premium Bass",
        line3: "25 Hrs Total Playtime & Type-C Charge",
        line4: "Standardized Smart Control & Game Mode",
      },
      image: {
        pMainImg1: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/5_61575362-ea8e-44b3-9fdd-d8bb54d97e68_700x.jpg?v=1668768268",
        pMainImg2: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/4_a399eded-22b7-411d-9642-2bedac206ce7_700x.jpg?v=1668768268",
        pMainImg3: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/1_083d03d2-ef4e-4f34-997a-2b2d115f92c8_700x.jpg?v=1668768268",
      },
    },
    {
      id: "12342",
      tag: "NEW",
      brand: "SoundPeates",
      title: "BEST Wireless Earbuds",
      category: "True Wireless",
      color: "Black",
      date: "06/08/22",
      discount: "0%",
      description: "Best Budget Solution for ANC Wireless Earbuds",
      newPrice: "50",
      oldPrice: "69",
      stock: 6,
      productMeta: {
        line1: "Active Noise Canceling 25dB & V5.2",
        line2: "12mm Large Drivers & Premium Bass",
        line3: "25 Hrs Total Playtime & Type-C Charge",
        line4: "Standardized Smart Control & Game Mode",
      },
      image: {
        pMainImg1: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/2_c18d8e59-91f7-4ab0-af8a-753475cf5b96_700x.jpg?v=1630635974",
        pMainImg2: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/8_700x.jpg?v=1637308390",
        pMainImg3: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/5_700x.png?v=1637309328",
      }

    },
    {
      id: "12343",
      tag: "Personal",
      brand: "BRAND",
      title: "SOUNDPEATS Free2 Classic Wireless Earbuds",
      category: "Noise Cancelling",
      color: "Black",
      date: "07/08/22",
      discount: "5%",
      description: "Stylish Design with Ultra-long Battery Life for 30hrs",
      newPrice: "39.99",
      oldPrice: "",
      stock: 7,
      productMeta: {
        line1: "Active Noise Canceling 25dB & V5.2",
        line2: "12mm Large Drivers & Premium Bass",
        line3: "25 Hrs Total Playtime & Type-C Charge",
        line4: "Standardized Smart Control & Game Mode",
      },
      image: {
        pMainImg1: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/Free2classic_35f34fc0-30dc-43ab-9d14-4b2e53b34764_700x.png?v=1658806095",
        pMainImg2: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/2_c061dae1-5613-4bd5-a2b6-04d8f12def70_700x.jpg?v=1658806095",
        pMainImg3: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/3_5b5e2ee6-86b0-4a09-aef5-b8ccc3dd63e0_700x.jpg?v=1658806095",
      }
    },
    {
      id: "12344",
      tag: "Old",
      brand: "Adidas",
      title: "SOUNDPEATS TrueFree + True Wireless In-Ear Sports Earbuds",
      category: "Others",
      color: "Black",
      date: "07/08/22",
      discount: "10%",
      description: "Zero Boundaries. Max Performance.",
      newPrice: "49.99",
      oldPrice: "",
      stock: 8,
      productMeta: {
        line1: "Active Noise Canceling 25dB & V5.2",
        line2: "12mm Large Drivers & Premium Bass",
        line3: "25 Hrs Total Playtime & Type-C Charge",
        line4: "Standardized Smart Control & Game Mode",
      },
      image: {
        pMainImg1: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_1_2_700x.png?v=1637316524",
        pMainImg2: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_1_4_700x.png?v=1637316524",
        pMainImg3: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_3_4_700x.png?v=1637316524",
        pMainImg4: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_1_4_700x.png?v=1637316524",
      }
    },
    {
      id: "12345",
      tag: "Old",
      brand: "BRAND",
      title: "SOUNDPEATS TrueFree + True Wireless In-Ear Sports Earbuds",
      category: "CATEGORY",
      color: "Black",
      date: "07/08/22",
      discount: "10%",
      description: "Zero Boundaries. Max Performance.",
      newPrice: "49.99",
      oldPrice: "",
      stock: 9,
      productMeta: {
        line1: "Active Noise Canceling 25dB & V5.2",
        line2: "12mm Large Drivers & Premium Bass",
        line3: "25 Hrs Total Playtime & Type-C Charge",
        line4: "Standardized Smart Control & Game Mode",
      },
      image: {
        pMainImg1: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_1_2_700x.png?v=1637316524",
        pMainImg2: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_1_4_700x.png?v=1637316524",
        pMainImg3: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_3_4_700x.png?v=1637316524",
        pMainImg4: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_1_4_700x.png?v=1637316524",
      }
    },
  ];

  const cart = [
    {
      id: "12341",
      title: "SOUNDPEATS Life Wireless Earbuds",
      color: "Black",
      discount: "-12%",
      newPrice: "39",
      oldPrice: "45",
      stock: 5,
      image: {
        pMainImg1: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/5_61575362-ea8e-44b3-9fdd-d8bb54d97e68_700x.jpg?v=1668768268",
        pMainImg2: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/4_a399eded-22b7-411d-9642-2bedac206ce7_700x.jpg?v=1668768268",
        pMainImg3: "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/1_083d03d2-ef4e-4f34-997a-2b2d115f92c8_700x.jpg?v=1668768268",
      },
    },
  ];
  const [products, setProduct] = useState(productInitial);
  const [state, dispatch] = useReducer(reducer, cart);

  // // Get SingleProduct 
  // const getSingleProduct = (id) => {
  //   const Data = products.filter((item) => item.id === id);
  //   return Data;
  // }

  // //  Add a Product 
  // const addProductItem = (id, name, tag, brand, category, date, discount, description, newPrice, oldPrice, pMainImg, pOtherImg) => {
  //   const productDetails = {
  //     id: id,
  //     name: name,
  //     tag: tag,
  //     brand: brand,
  //     category: category,
  //     date: date,
  //     discount: discount,
  //     description: description,
  //     newPrice: newPrice,
  //     oldPrice: oldPrice,
  //     pMainImg: pMainImg,
  //     pOtherImg: pOtherImg,
  //   }
  //   setProduct(products.concat(productDetails))
  //   products.map((items) => {
  //     return items;
  //   })
  // }

  // CurrencyFormat Helper 
  const CurrencyFormat = (price) => {
    if (price > 0) {
      return Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD", maximumFractionDigits: 2,
      }).format(price)
    }
  };

  const addToCart = (id, title, newPrice, oldPrice, image, color, item) => {
    // const item = products.filter((item)=>item.id===id);
    dispatch({ type: "ADD_TO_CART", payload: { id, title, newPrice, oldPrice, image, color, item } });
  }

  // increment and decrement the product

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // to remove the individual item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <StateContext.Provider value={{
      products,
      cart,
      state,
      addToCart,
      setDecrease,
      setIncrement,
      removeItem,
      clearCart,
      // getSingleProduct,
      // addProductItem,
      CurrencyFormat,
    }}>
      {props.children}
    </StateContext.Provider>
  );
}

export default StateContext;
