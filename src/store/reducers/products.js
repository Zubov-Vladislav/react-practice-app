export function getProductsList(store) {
  return store.products.list.map((product) => product.id);
}
const initialState = {
  isLoading: false,
  list: [],
};
export function getProductById(store, productId) {
  return store.products.list.find((product) => product.id === productId);
}

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
