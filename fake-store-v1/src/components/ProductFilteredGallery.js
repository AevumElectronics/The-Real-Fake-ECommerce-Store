//import { useEffect, useState } from 'react';
//import { StarIcon as  StarIconSolid } from '@heroicons/react/solid'
//import { StarIcon } from '@heroicons/react/outline'
import ProductCard from '../components/ProductCard';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductFilteredGallery({catfilter}){
    const products = useSelector((state) => state.allProducts.products);
    //const filteredproducts= products.filter()
    return(
        <div>
            {catfilter&&<div className='text-left px-5 pt-2'>
                <h1 className='text-2xl font-semibold text-zinc-700'>{catfilter}</h1></div>}
           <div className='flex flex-wrap justify-between min-h-screen w-full items-start pt-2 px-5 gap-x-2 gap-y-5'>
           {products? products.map(prodotto=> 
                (prodotto.category==catfilter || catfilter=="") && <Link key={prodotto.id} to={`/product/${prodotto.id}`} >
                    <ProductCard
                            key={prodotto.id}
                            imageurl={prodotto.image}
                            title={prodotto.title}
                            description={prodotto.description}
                            price={prodotto.price}
                        />
                </Link>)
            :<h2>...loading 2</h2>}
            </div>
        </div>
    
)}
///${prodotto.category}
//<Link to={`/product/${prodotto.id}`}></Link>
//{products? products.map((prodotto=>console.log('ciao',prodotto))) :<h2>...loading 2</h2>}
//products && products.map((prodotto,index)=> <ProductCard key={index.toString()} prodotto={prodotto} />)}
//{products.map((prodotto=>console.log(prodotto)))}
//{products && console.log(products)}

