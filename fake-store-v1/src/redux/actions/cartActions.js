import { ActionTypes } from "../constants/cart-action-types";

export const addToCart = (itemID,product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
      product: product,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQuantity = (itemID, quantity) => {
  return {
    type: ActionTypes.ADJUST_QUANTITY,
    payload: {
      id: itemID,
      quantity: quantity,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: ActionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};