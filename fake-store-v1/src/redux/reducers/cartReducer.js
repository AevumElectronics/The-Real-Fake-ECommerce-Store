import { ActionTypes } from "../constants/cart-action-types";
//import { useSelector } from "react-redux";
//state.allproducts.products


const intialState = {cart:[]};


export const cartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      //incart checks if the item is already in the cart
      const inCart = state.cart.find((item) => item.id === payload.id ? true : false);
      //if the product is NOT in the cart we return the cart+ the item in 1 quantity
      //if the product IS in the cart we return item++ if the ID match
      return {...state,
        cart: inCart? state.cart.map((item) =>
            item.id === payload.id
              ? { ...payload.product, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cart, { ...payload.product, quantity: 1 }],
      };

    case ActionTypes.REMOVE_FROM_CART:
      return {...state,
        cart: state.cart.filter((item)=> item.id !== payload.id
        )
      };

    case ActionTypes.ADJUST_QUANTITY:
      return {...state,
        cart: state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: payload.quantity }
            : item
        ),
      };


    case ActionTypes.LOAD_CURRENT_ITEM:
      return state;
    default:
      return state;
  }
};

