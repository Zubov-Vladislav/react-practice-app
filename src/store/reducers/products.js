import axios from "axios";

const defaultSizes = ["XS", "S", "M", "L", "XL", "XXL"];

export function getProductsList(store) {
  const filteredList = filterSize(store.products);

  return filteredList.map((product) => product.id);
}

const initialState = {
  isLoading: true,
  list: [],
  sizes: defaultSizes.slice(0),
  buttonFilter: [
    {
      value: "XS",
      active: false,
    },
    {
      value: "S",
      active: false,
    },
    {
      value: "M",
      active: false,
    },
    {
      value: "L",
      active: false,
    },
    {
      value: "XL",
      active: false,
    },
    {
      value: "XXL",
      active: false,
    },
  ],
};

export function getProductById(store, productId) {
  return store.products.list.find((product) => product.id === productId);
}

export function handlesFilterSize(size) {
  return (dispatch) => {
    dispatch({
      type: "HANDLES_FILTER_SIZE",
      size,
    });
  };
}

export function addInSizes(buttonFilters, sizes) {
  const filters = buttonFilters;
  console.clear();

  filters.forEach((el) => {
    const position = sizes.indexOf(el.value);
    if (position === -1 && el.active) {
      sizes.push(el.value);
    } else if (position > -1 && !el.active) {
      sizes.splice(position, 1);
    }
  });

  const isFilters = filters.reduce((accumulator, el) => {
    return (accumulator = accumulator || el.active);
  }, false);

  const result = isFilters ? sizes : ["XS", "S", "M", "L", "XL", "XXL"];
  return result;
}

export function handlerFilter(store = initialState, value) {
  const buttonFilter = store.buttonFilter;

  const newButtonFilter = buttonFilter.map((filter) => {
    if (filter.value === value) {
      return {
        ...filter,
        active: !filter.active,
      };
    }
    return filter;
  });
  return newButtonFilter;
}

export function filterSize(store) {
  const sizes = store.sizes;
  let products = store.list;

  products = products.filter((productItem) => {
    return sizes.find((filterItem) =>
      productItem.availableSizes.find((size) => size === filterItem)
    );
  });

  return products;
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
    case "HANDLES_FILTER_SIZE": {
      const newButtonFilter = handlerFilter(state, action.size);
      return {
        ...state,
        buttonFilter: newButtonFilter,
        sizes: addInSizes(newButtonFilter, state.sizes),
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
        console.log(error);

        return dispatch({
          type: "ADD_PRODUCTS_TO_LIST_ERROR",
          error,
        });
      });
  };
}
