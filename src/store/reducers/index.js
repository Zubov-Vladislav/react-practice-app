import { combineReducers } from "redux";
import { reducer as cart } from "./cart";
import { reducer as products } from "./products";

export const rootReducer = combineReducers({
  cart: cart,
  products: products,
});
