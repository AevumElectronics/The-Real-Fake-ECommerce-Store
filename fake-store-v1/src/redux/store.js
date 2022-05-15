import { configureStore } from "@reduxjs/toolkit";
import { productsReducer, selectedProductsReducer, categoriesReducer } from './reducers/productsReducer'


const store = configureStore({ 
  reducer: {
    allProducts: productsReducer,
    allCategories: categoriesReducer,
    product: selectedProductsReducer,
  }
  
});
export default store;

