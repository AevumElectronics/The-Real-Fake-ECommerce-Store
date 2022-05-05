import { useEffect, useState } from 'react';

import { StarIcon as  StarIconSolid } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/outline'
import axios from "axios";

export default function TestProductCard(){

    const [item,setItem]=useState(null);
    const producturl= 'https://fakestoreapi.com/products/1';
    useEffect(() => {
      axios.get(producturl).then((response) => {
        setItem(response.data);
      });
    }, []);
    if (!item) return <h2>...Loading</h2>;
  
    //console.log(item) 



    return(
        <div className="m-auto overflow-hidden border-2 border-zinc-100 text-left w-[300px] bg-stone-200 rounded-xl shadow-2xl">
            <div className='w-full py-2 bg-white'>
                <img src={item.image} alt={item.title}
                    className="m-auto max-w-full contain h-56 bg-zinc-900 rounded-sm" 
                />                
            </div>
            
            <div className='px-5 pt-2'>
                <h2 className='text-xl font-semibold pb-1'>{item.title}</h2>
                <p className='text-sm'>{item.description}</p>
                <div id='star component'>
                    <div className='flex justify-center w-full p-2'>
                        <StarIconSolid className='w-8 h-8 text-red-500 '/>
                        <StarIconSolid className='w-8 h-8 text-red-500 '/>
                        <StarIconSolid className='w-8 h-8 text-red-500 '/>
                        <StarIconSolid className='w-8 h-8 text-red-500 '/>
                        <StarIcon className='w-8 h-8 text-red-500 ' stroke="currentColor" strokeWidth="1"/>
                </div></div>
            </div>    
                
                <div className='flex justify-around font-semibold text-xl'>
                    <button className='py-3 w-full bg-zinc-300  hover:shadow-xl hover:bg-zinc-500'>Product</button>
                    <button className='py-3 w-full bg-zinc-300  hover:shadow-xl hover:bg-zinc-500'>Add to Cart</button>
                </div>
            
        </div>
    
)}