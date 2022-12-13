const ProductReducer = (state, action) => {
  if (action.type === "ADD_PRODUCT") {
    let product  = action.payload;
      return {
        ...state,
        products: [...state.products, product],
      }
  }

  return state;
};

export default ProductReducer;