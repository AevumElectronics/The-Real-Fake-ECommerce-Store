//import { useEffect, useState } from 'react';
//import { StarIcon as  StarIconSolid } from '@heroicons/react/solid'
//import { StarIcon } from '@heroicons/react/outline'
import ProductCard from '../components/ProductCard';
import { useSelector } from "react-redux";

export default function ProductGallery(){
    const products = useSelector((state) => state.allProducts.products);
    return(
        <div>
           <div className='flex flex-wrap justify-between items-start pt-2 px-5 gap-x-2 gap-y-5'>
           {products? products.map(prodotto=> <ProductCard
                     key={prodotto.id}
                     imageurl={prodotto.image}
                     title={prodotto.title}
                     description={prodotto.description}
                     price={prodotto.price}
                  />)
            :<h2>...loading 2</h2>}
            </div>
        </div>
    
)}

//{products? products.map((prodotto=>console.log('ciao',prodotto))) :<h2>...loading 2</h2>}
//products && products.map((prodotto,index)=> <ProductCard key={index.toString()} prodotto={prodotto} />)}
//{products.map((prodotto=>console.log(prodotto)))}
//{products && console.log(products)}

