import axios from "axios";

export function getProductsList(store) {
  return store.products.list.map((product) => product.id);
}

const initialState = {
  isLoading: true,
  list: [],
  sizes: [],
  buttonFilter: [
    {
      value: "XS",
      active: false,
    },
    {
      value: "S",
      active: true,
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

export function addInSizes(store) {
  console.log(store);
  filterSize(store);
  const sizes = store.sizes;

  const filters = store.buttonFilter;
  filters.forEach((el) => {
    const position = sizes.indexOf(el.value);
    if (position === -1 && el.active) {
      sizes.push(el.value);
    } else if (position > -1 && !el.active) {
      sizes.splice(position, 1);
    }
  });
  return sizes;
}

  
export function handlerFilter(store = initialState, value) {
  const buttonFilter = store.buttonFilter;

  const newButtonFilter = buttonFilter.map((filter) => {
    if (filter.value === value) {
      console.log(filter);
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
  function inArray(arr) {
    return function (x) {
      return arr.includes(x);
    };
  }
  const filter = []
  console.log(filter);
  
  store.list.forEach((list) => {
    // console.log(list.availableSizes.filter(inArray(store.sizes)).length);
    let filters = []
    console.log(filters);
    
    if (list.availableSizes.filter(inArray(store.sizes)).length === 0) {
      
      
    } else {
      filter.push(store.list)
    }
  });
  
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
      return {
        ...state,
        buttonFilter: handlerFilter(state, action.size),
        sizes: addInSizes(state),
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
