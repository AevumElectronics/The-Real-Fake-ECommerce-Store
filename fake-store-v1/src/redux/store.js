import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";
import { productsReducer, selectedProductsReducer, categoriesReducer } from './reducers/productsReducer'


const store = configureStore({ 
  reducer: {
    allProducts: productsReducer,
    allCategories: categoriesReducer,
    product: selectedProductsReducer,
    shopcart:cartReducer,
  }
  
});
export default store;

