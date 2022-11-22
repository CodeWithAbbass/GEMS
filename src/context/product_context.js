import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();


const initialState = {
  isLoading: false,
  isError: false,
  products: [
    {
      id: "12341",
      tag: "NEW",
      brand: "SoundPeates",
      name: "SOUNDPEATS Life Wireless Earbuds",
      category: "AudioPhile",
      color: "Black",
      date: "05/08/22",
      discount: "-12%",
      description: "Best Budget Solution for ANC Wireless Earbuds",
      newPrice: "39",
      oldPrice: "45",
      quantity: 1,
      stock: 5,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
      image: [
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/5_61575362-ea8e-44b3-9fdd-d8bb54d97e68_700x.jpg?v=1668768268",
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/4_a399eded-22b7-411d-9642-2bedac206ce7_700x.jpg?v=1668768268",
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/1_083d03d2-ef4e-4f34-997a-2b2d115f92c8_700x.jpg?v=1668768268",
      ]
    },
    {
      id: "12342",
      tag: "NEW",
      brand: "SoundPeates",
      name: "BEST Wireless Earbuds",
      category: "True Wireless",
      color: "Black",
      date: "06/08/22",
      discount: "0%",
      description: "Best Budget Solution for ANC Wireless Earbuds",
      newPrice: "50",
      oldPrice: "69",
      quantity: 1,
      stock: 6,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
      image: [
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/2_c18d8e59-91f7-4ab0-af8a-753475cf5b96_700x.jpg?v=1630635974",
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/8_700x.jpg?v=1637308390",
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/5_700x.png?v=1637309328",
      ]
    },
    {
      id: "12343",
      tag: "Personal",
      brand: "BRAND",
      name: "SOUNDPEATS Free2 Classic Wireless Earbuds",
      category: "Noise Cancelling",
      color: "Black",
      date: "07/08/22",
      discount: "5%",
      description: "Stylish Design with Ultra-long Battery Life for 30hrs",
      newPrice: "39.99",
      oldPrice: "",
      quantity: 1,
      stock: 7,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
      image: [
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/Free2classic_35f34fc0-30dc-43ab-9d14-4b2e53b34764_700x.png?v=1658806095",
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/2_c061dae1-5613-4bd5-a2b6-04d8f12def70_700x.jpg?v=1658806095",
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/3_5b5e2ee6-86b0-4a09-aef5-b8ccc3dd63e0_700x.jpg?v=1658806095",
      ]
    },
    {
      id: "12344",
      tag: "Old",
      brand: "Adidas",
      name: "SOUNDPEATS TrueFree + True Wireless In-Ear Sports Earbuds",
      category: "Others",
      color: "Black",
      date: "07/08/22",
      discount: "10%",
      description: "Zero Boundaries. Max Performance.",
      newPrice: "49.99",
      oldPrice: "",
      quantity: 1,
      stock: 8,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
      image: [
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_1_2_700x.png?v=1637316524",
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_1_4_700x.png?v=1637316524",
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_3_4_700x.png?v=1637316524",
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_1_4_700x.png?v=1637316524",
      ]
    },
    {
      id: "12345",
      tag: "Old",
      brand: "BRAND",
      name: "SOUNDPEATS TrueFree + True Wireless In-Ear Sports Earbuds",
      category: "CATEGORY",
      color: "Black",
      date: "07/08/22",
      discount: "10%",
      description: "Zero Boundaries. Max Performance.",
      newPrice: "49.99",
      oldPrice: "",
      quantity: 1,
      stock: 9,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
      image: [
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_1_2_700x.png?v=1637316524",
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_1_4_700x.png?v=1637316524",
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_3_4_700x.png?v=1637316524",
        "https://cdn.shopify.com/s/files/1/0508/7461/3942/products/TFp_1_4_700x.png?v=1637316524",
      ]
    },
  ],
  // featureProducts: [],
  // isSingleLoading: false,
  // singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);



  useEffect(() => {
    // getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{
      ...state,
    }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };