//import { useEffect, useState } from 'react';
import { StarIcon as  StarIconSolid } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/outline'

export default function ProductCard({imageurl,title,description,price}){

    function starRatingComponent(){
        return(
            <div className='flex w-full p-1'>
                <StarIconSolid className='w-8 h-8 text-red-500 '/>
                <StarIconSolid className='w-8 h-8 text-red-500 '/>
                <StarIconSolid className='w-8 h-8 text-red-500 '/>
                <StarIconSolid className='w-8 h-8 text-red-500 '/>
                <StarIcon className='w-8 h-8 text-red-500 ' stroke="currentColor" strokeWidth="1"/>
            </div>
    )}


//border-2

    return(
        <div className="m-auto overflow-hidden  border-zinc-100 text-left w-[250px] min-h-72 
                flex flex-col justify-between
                bg-stone-200 rounded-xl shadow-2xl">
            <div className='w-full p-2 bg-white'>
                <img src={imageurl} alt={title}
                    className="m-auto max-w-full contain h-40 rounded-sm" 
                />                
            </div>
            <div className='flex flex-col justify-between '>
                <div className='px-2 overflow-hidden'>
                    <h2 className='text-md font-semibold pb-1 '>{title}</h2>
                    
                </div>    
                <div className='w-full flex justify-between text-center content-center'>
                        {starRatingComponent()}
                        <p className='font-semibold w-full text-lg m-auto px-1'>{price} $</p>
                </div>    
            </div>
            <div className='flex justify-around font-semibold text-xl'>
                <button className='py-2 w-full bg-zinc-300  hover:shadow-xl hover:bg-zinc-500'>Product</button>
                <button className='py-2 w-full bg-zinc-300  hover:shadow-xl hover:bg-zinc-500'>Add to Cart</button>
            </div>
            
        </div>
    
)}
//star & price inline
//<div id='star component'>
//<div className='flex justify-center w-full p-2'>
//    <StarIconSolid className='w-8 h-8 text-red-500 '/>
//    <StarIconSolid className='w-8 h-8 text-red-500 '/>
//    <StarIconSolid className='w-8 h-8 text-red-500 '/>
//   <StarIconSolid className='w-8 h-8 text-red-500 '/>
 //   <StarIcon className='w-8 h-8 text-red-500 ' stroke="currentColor" strokeWidth="1"/>
//</div></div>
//<p className='text-sm overflow-hidden'>{description}</p> 