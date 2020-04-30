export function getProductsList(store) {
  return store.products.list;
}
const initialState = {
  isLoading: false,
  list: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCTS_TO_LIST": {
      return {
        ...state,
        list: [...state.list, ...action.products],
      };
    }
    default:
      return state;
  }
}

export function addProductsToList(products) {
  return {
    type: "ADD_PRODUCTS_TO_LIST",
    products,
  };
}
