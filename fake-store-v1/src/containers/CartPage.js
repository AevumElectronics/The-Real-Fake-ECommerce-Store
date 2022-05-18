import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct,removeSelectedProduct} from "../redux/actions/productsActions";
import { adjustQuantity, removeFromCart } from "../redux/actions/cartActions";
import { addToCart } from "../redux/actions/cartActions";
import CartCard from "../components/CartCard";
import { ArrowSmDownIcon, ArrowSmUpIcon, MinusSmIcon, PlusSmIcon, TrashIcon } from "@heroicons/react/outline";


export default function CartPage() {
  
    let cart = useSelector((state) => state.shopcart.cart);
    const dispatch = useDispatch();

    function total(){
      return cart.map((item)=>item.price*item.quantity).reduce(
        (previousValue, currentValue) => previousValue + currentValue,0).toFixed(2)
    }

   
    return(
        <div className="py-5 bg-stone-100 p-5 min-h-screen">
          <h1 className="text-2xl text-left font-semibold text-zinc-700">Shopping Cart</h1>
          <div className="flex justify-around gap-5">
            <div>
              {cart.map((item,id)=>
              <div className="bg-white flex justify-between gap-2 my-2  rounded-md shadow-md" key={id.toString()}>
                
                  <div className='pl-4 p-2 my-auto'>
                      <img src={item.image} alt={item.title}
                          className="object-cover max-w-[80px] rounded-sm" 
                      />       
                  </div>
                  <div className="ml-0 mr-auto my-auto text-left text-xl py-2 text-zinc-800"><p>{item.title}</p></div> 
                
                <div className="flex pl-5 w-fit">

                  <div className="my-auto border-2 h-10 w-20 flex px-1 rounded-md">
                    <button onClick={()=>item.quantity>1 && dispatch(adjustQuantity(item.id, item.quantity-1))}>
                      <MinusSmIcon className="w-5 stroke-1 text-zinc-800 rounded-md
                        hover:shadow-md hover:text-zinc-900 
                        hover:bg-red-500 active:bg-red-300"/>
                    </button>
                    <p className="m-auto text-lg px-1">{item.quantity}</p>
                    <button onClick={()=>dispatch(adjustQuantity(item.id,item.quantity+1))}>
                      <PlusSmIcon className="w-5 stroke-1 text-zinc-800 rounded-md
                        hover:shadow-md hover:text-zinc-900 
                        hover:bg-red-500 active:bg-red-300"/>
                    </button>
                    
                  </div>

                  <div className="my-auto text-md font-semibold w-28 text-right"><p>$ {item.price}</p></div>
                  <div className="my-auto px-5">
                    <button onClick={()=>dispatch(removeFromCart(item.id))}><TrashIcon 
                    className="w-10 my-auto  rounded-md hover:shadow-md
                      stroke-1 text-zinc-800 hover:bg-red-500 active:bg-red-300"/></button>
                  </div>
                </div>
                

              </div>)}
            </div>
          
          <div className="bg-white p-2 rounded-md shadow-md my-2 h-fit" >
            <h2 className="font-semibold text-zinc-800 text-lg text-left px-2 w-[300px]">Order Summary</h2>

            {cart.map((item,id)=>
            <div key={id}className="flex justify-between p-2 text-sm">
              <p>{item.title.split(' ',3).join(' ')}</p>
              <div className="flex gap-2 ">
                <p className="bg-zinc-100 text-zinc-700 rounded-sm px-1 my-auto">{item.quantity}X</p>
                <p className="font-semibold text-zinc-800 my-auto w-16 text-right">${(item.price*item.quantity).toFixed(2)}</p>
              </div>
              
            </div>)}

            <hr className="px-4 py-2 border-red-400"/>
            <div className="flex justify-between text-2xl text-zinc-800">
              <h2 className="p-2">Total</h2>
              <p className="bg-zinc-100 p-2 rounded-md">${total()}</p>
            </div>
            <button 
              className="bg-red-400 rounded-md shadow-md
                text-zinc-800 w-full mt-4 p-2
               hover:bg-red-500 active:bg-red-300">CHECKOUT</button>
          </div>
          </div>
          
          
        </div>
    )
}