const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, quantity, product } = action.payload;

    // tackle the existing product

    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.quantity + quantity;

          if (newAmount >= curElem.stock) {
            newAmount = curElem.stock;
          }
          return {
            ...curElem,
            quantity: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        quantity,
        discount: product.discount,
        image: product.image[0],
        price: product.price,
        stock: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  // to set the increment and decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.quantity - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          quantity: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.quantity + 1;

        if (incAmount >= curElem.stock) {
          incAmount = curElem.stock;
        }

        return {
          ...curElem,
          quantity: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // to empty or to clear to cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { quantity } = curElem;

      initialVal = initialVal + quantity;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialNumber, curElem) => {
      let { price, quantity, discount } = curElem;
      let NewAmount;
      if (discount > 0) {
        NewAmount = (price - ((price * discount) / 100));
        initialNumber = initialNumber + NewAmount * quantity;
      } else {
        initialNumber = initialNumber + price * quantity;
      }
      //    initialNumber =         0     +   50  x    1    === 50
      //    initialNumber =         50    +   50  x    1    === 100
      //    initialNumber =         100   +   100 x    1    === 200
      return initialNumber;
    }, 0);

    return {
      ...state,
      total_price,
    };
  }

  return state;
};

export default cartReducer;