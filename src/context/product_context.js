import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
import GEMS11 from "../images/Product_Image/GEMS11.png";
import GEMS12 from "../images/Product_Image/GEMS12.png";
import GEMS13 from "../images/Product_Image/GEMS13.png";
import GEMS14 from "../images/Product_Image/GEMS14.png";
import GEMS21 from "../images/Product_Image/GEMS21.png";
import GEMS22 from "../images/Product_Image/GEMS22.png";
import GEMS23 from "../images/Product_Image/GEMS23.png";
import GEMS24 from "../images/Product_Image/GEMS24.png";
import GEMS31 from "../images/Product_Image/GEMS31.png";
import GEMS32 from "../images/Product_Image/GEMS32.png";
import GEMS33 from "../images/Product_Image/GEMS33.png";
import GEMS34 from "../images/Product_Image/GEMS34.png";
import GEMS41 from "../images/Product_Image/GEMS41.png";
import GEMS42 from "../images/Product_Image/GEMS42.png";
import GEMS43 from "../images/Product_Image/GEMS43.png";
import GEMS44 from "../images/Product_Image/GEMS44.png";
import GEMS51 from "../images/Product_Image/GEMS51.png";
import GEMS52 from "../images/Product_Image/GEMS52.png";
import GEMS53 from "../images/Product_Image/GEMS53.png";
import GEMS54 from "../images/Product_Image/GEMS54.png";
import GEMS61 from "../images/Product_Image/GEMS61.png";
import GEMS62 from "../images/Product_Image/GEMS62.png";
import GEMS63 from "../images/Product_Image/GEMS63.png";
import GEMS64 from "../images/Product_Image/GEMS64.png";
import GEMS71 from "../images/Product_Image/GEMS71.png";
import GEMS72 from "../images/Product_Image/GEMS72.png";
import GEMS73 from "../images/Product_Image/GEMS73.png";
import GEMS74 from "../images/Product_Image/GEMS74.png";


const AppContext = createContext();


const initialState = {
  products: [
    {
      id: "12341",
      tag: "NEW",
      feature: "no",
      brand: "SoundPeates",
      name: "SOUNDPEATS Life Wireless Earbuds",
      category: "AudioPhile",
      color: "Black",
      date: "05/08/22",
      discount: "12",
      description: "Best Budget Solution for ANC Wireless Earbuds",
      price: "39",
      quantity: 1,
      stock: 5,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
      image: [GEMS11, GEMS12, GEMS13, GEMS14,]
    },
    {
      id: "12342",
      tag: "NEW",
      feature: "no",
      brand: "HUAWAI",
      name: "BEST Wireless Earbuds",
      category: "True Wireless",
      color: "Black",
      date: "06/08/22",
      discount: "0",
      description: "Best Budget Solution for ANC Wireless Earbuds",
      price: "50",
      quantity: 1,
      stock: 6,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
      image: [GEMS21, GEMS22, GEMS23, GEMS24,]
    },
    {
      id: "12343",
      tag: "Personal",
      feature: "no",
      brand: "SOUNDPEATS",
      name: "SOUNDPEATS Free2 Classic Wireless Earbuds",
      category: "Noise Cancelling",
      color: "Black",
      date: "07/08/22",
      discount: "5",
      description: "Stylish Design with Ultra-long Battery Life for 30hrs",
      price: "39.99",
      quantity: 1,
      stock: 7,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
      image: [GEMS31, GEMS32, GEMS33, GEMS34,]
    },
    {
      id: "12344",
      tag: "Old",
      feature: "no",
      brand: "GEMS",
      name: "GEMS WaterProof In-Ear Sports Earbuds",
      category: "Others",
      color: "Black",
      date: "07/08/22",
      discount: "20",
      description: "Zero Boundaries. Max Performance.",
      price: "49.99",
      quantity: 1,
      stock: 8,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
      image: [GEMS41, GEMS42, GEMS43, GEMS44,]
    },
    {
      id: "12345",
      tag: "Feature",
      feature: "yes",
      brand: "GEMS",
      name: "GEMS Reduce Disturbance In-Ear Sports Earbuds",
      category: "Others",
      color: "Black",
      date: "07/08/22",
      discount: "50",
      description: "Zero Boundaries. Max Performance.",
      price: "49.99",
      quantity: 1,
      stock: 9,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
      image: [GEMS51, GEMS52, GEMS53, GEMS54,]
    },
    {
      id: "12346",
      tag: "Feature",
      feature: "yes",
      brand: "GEMS",
      name: "GEMS True Wireless + TrueFree In-Ear Sports Earbuds",
      category: "Noise Cancelling",
      color: "Black",
      date: "08/08/22",
      discount: "10",
      description: "Max Performance. Zero Boundaries.",
      price: "79.99",
      quantity: 1,
      stock: 9,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
      image: [GEMS61, GEMS62, GEMS63, GEMS64,]
    },
    {
      id: "12347",
      tag: "Feature",
      feature: "yes",
      brand: "SAMSUNG",
      name: "SAMSUNG TrueFree + True Wireless In-Ear Sports Earbuds",
      category: "Others",
      color: "Black",
      date: "07/08/22",
      discount: "15",
      description: "Zero Boundaries. Max Performance.",
      price: "49.99",
      quantity: 1,
      stock: 9,
      productMeta: [
        "Active Noise Canceling 25dB & V5.2",
        "12mm Large Drivers & Premium Bass",
        "25 Hrs Total Playtime & Type-C Charge",
        "Standardized Smart Control & Game Mode",
      ],
      image: [GEMS71, GEMS72, GEMS73, GEMS74,]
    },
  ],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Minus discount  
  const CalcDiscount = (discount, amount) => {
    if (discount > 0) {
      let NewAmount = (amount - ((amount * discount) / 100));
      return NewAmount;
    }else{
      return amount;
    }
  }

  const AddProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider value={{
      ...state,
      AddProduct,
      CalcDiscount,
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