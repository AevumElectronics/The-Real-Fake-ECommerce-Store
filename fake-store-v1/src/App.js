import React, {useEffect, useState} from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import ProductGallery from './components/ProductGallery'
import axios from "axios";

function App() {
  const [products,setProducts]=useState();
  // later to dispatch stuff


  const fetchProducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => {
/*         dispatch( {
            type: ActionTypes.PRODUCTS_ERROR,
            payload: err,
        }) */
        console.log("Err", err);
    });
    /* dispatch(setProducts(response.data)); */
    setProducts(response.data)
    //console.log(response.data);
};

useEffect(() => {
    fetchProducts();
}, []);
//console.log(products[0].title);

//const renderList = products.map((product) => {
//  const {title, image, price, category} = product;


  return (
    <div className="bg-zinc-800 min-h-screen">
      <div className='flex flex-wrap justify-center m-auto gap-5 p-10'>
        {products? <ProductGallery/>:<h2>...loading</h2>}
      </div>
    </div>
  );
}
//products.map((prodotto,index)=> <ProductCard key={index.toString()} prodotto={prodotto} />)
export default App;
//https://medium.com/geekculture/implementing-react-hooks-redux-with-axios-the-right-way-part-1-34ceab44de4f