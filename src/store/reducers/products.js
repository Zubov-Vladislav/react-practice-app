import axios from "axios";

export function getProductsList(store) {
  return store.products.list.map((product) => product.id);
}

const initialState = {
  isLoading: true,
  list: [],
};
export function getProductById(store, productId) {
  return store.products.list.find((product) => product.id === productId);
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCTS_TO_LIST_START": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "ADD_PRODUCTS_TO_LIST_SUCCESS": {
      return {
        ...state,
        list: [...state.list, ...action.products],
        isLoading: false,
      };
    }
    case "ADD_PRODUCTS_TO_LIST_ERROR": {
      return {
        ...state,
        list: [...state.list, ...action.products],
        isLoading: false,
      };
    }
    default:
      return state;
  }
}

export function addProductsToList() {
  return (dispatch) => {
    dispatch({
      type: "ADD_PRODUCTS_TO_LIST_START",
    });

    return axios
      .get("https://simplereactshop.herokuapp.com/api/products")
      .then((response) => {
        const cards = [...response.data.products];
        return dispatch({
          type: "ADD_PRODUCTS_TO_LIST_SUCCESS",
          products: cards,
        });
      })

      .catch((error) => {
        return dispatch({
          type: "ADD_PRODUCTS_TO_LIST_ERROR",
          error,
        });
      });
  };
}
