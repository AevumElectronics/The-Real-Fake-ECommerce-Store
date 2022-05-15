import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};
const intialStatecat = {
  categories: [],
};
const intialStateprod = {
  product: []
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const categoriesReducer = (state = intialStatecat, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};


 export const selectedProductsReducer = (state = intialStateprod, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return intialStateprod;
    default:
      return state;
  }
}; 