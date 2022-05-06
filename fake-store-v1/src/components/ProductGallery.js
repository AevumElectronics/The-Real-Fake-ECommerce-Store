import { useEffect, useState } from 'react';
//import { StarIcon as  StarIconSolid } from '@heroicons/react/solid'
//import { StarIcon } from '@heroicons/react/outline'
import ProductCard from '../components/ProductCard';

export default function ProductGallery(props, {products}){
   /*  const prodotti = async() => {
        products && console.log(products)
    } */

    return(
        <div className="m-auto">
           <h2>galleria test</h2>
           
           {prodotti? products.map((prodotto=>console.log(prodotto))) :<h2>...loading 2</h2>}
           
        </div>
    
)}
//products && products.map((prodotto,index)=> <ProductCard key={index.toString()} prodotto={prodotto} />)}
//{products.map((prodotto=>console.log(prodotto)))}
//{products && console.log(products)}

