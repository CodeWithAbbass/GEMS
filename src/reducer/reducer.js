export const reducer = (state, action) => {
  // if (action.type === "REMOVE_ITEM") {
  //   return {
  //     ...state,
  //     item: state.item.filter((curElem) => {
  //       return curElem.id !== action.payload;
  //     }),
  //   };
  // }

  // if (action.type === "CLEAR_CART") {
  //   return { ...state, item: [] };
  // }

  // if (action.type === "INCREMENT") {
  //   const updatedCart = state.item.map((curElem) => {
  //     if (curElem.id === action.payload) {
  //       return { ...curElem, quantity: curElem.quantity + 1 };
  //     }
  //     return curElem;
  //   });

  //   return { ...state, item: updatedCart };
  // }

  // if (action.type === "DECREMENT") {
  //   const updatedCart = state.item
  //     .map((curElem) => {
  //       if (curElem.id === action.payload) {
  //         return { ...curElem, quantity: curElem.quantity - 1 };
  //       }
  //       return curElem;
  //     })
  //     .filter((curElem) => curElem.quantity !== 0);
  //   return { ...state, item: updatedCart };
  // }

  // if (action.type === "GET_TOTAL") {
  //   let { totalItem, totalAmount } = state.item.reduce(
  //     (accum, curVal) => {
  //       let { price, quantity } = curVal;

  //       let updatedTotalAmount = price * quantity;
  //       accum.totalAmount += updatedTotalAmount;

  //       accum.totalItem += quantity;
  //       return accum;
  //     },
  //     {
  //       totalItem: 0,
  //       totalAmount: 0,
  //     }
  //   );
  //   return { ...state, totalItem, totalAmount };
  // }

  if (action.type === "ADD_TO_CART") {
    let { id, title, newPrice, oldPrice, image, color, item } = action.payload;
    let cartProduct = {
      id: id + color,
      title: title,
      color,
      newPrice,
      oldPrice,
      image: image,
      max: item.stock,
    };
    state.push(cartProduct);
    return {...state};
  }

  // // to set the increment and decrement
  // if (action.type === "SET_DECREMENT") {
  //   let updatedProduct = state.cart.map((curElem) => {
  //     if (curElem.id === action.payload) {
  //       let decAmount = curElem.amount - 1;

  //       if (decAmount <= 1) {
  //         decAmount = 1;
  //       }

  //       return {
  //         ...curElem,
  //         amount: decAmount,
  //       };
  //     } else {
  //       return curElem;
  //     }
  //   });
  //   return { ...state, cart: updatedProduct };
  // }

  // if (action.type === "SET_INCREMENT") {
  //   let updatedProduct = state.map((curElem) => {
  //     if (curElem.id === action.payload) {
  //       let incAmount = curElem.amount + 1;

  //       if (incAmount >= curElem.max) {
  //         incAmount = curElem.max;
  //       }

  //       return {
  //         ...curElem,
  //         amount: incAmount,
  //       };
  //     } else {
  //       return curElem;
  //     }
  //   });
  //   return { ...state, cart: updatedProduct };
  // }

  // if (action.type === "REMOVE_ITEM") {
  //   let updatedCart = state.cart.filter(
  //     (curItem) => curItem.id !== action.payload
  //   );
  //   return {
  //     ...state,
  //     cart: updatedCart,
  //   };
  // }

  // // to empty or to clear to cart
  // if (action.type === "CLEAR_CART") {
  //   return {
  //     ...state,
  //     cart: [],
  //   };
  // }

  // if (action.type === "CART_TOTAL_ITEM") {
  //   let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
  //     let { amount } = curElem;

  //     initialVal = initialVal + amount;
  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_item: updatedItemVal,
  //   };
  // }

  // if (action.type === "CART_TOTAL_PRICE") {
  //   let total_price = state.cart.reduce((initialVal, curElem) => {
  //     let { price, amount } = curElem;

  //     initialVal = initialVal + price * amount;
  //     // 25000 + 0 = 25000
  //     // 10199 + 25000 = 121

  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_price,
  //   };
  // }

  return state;

};
