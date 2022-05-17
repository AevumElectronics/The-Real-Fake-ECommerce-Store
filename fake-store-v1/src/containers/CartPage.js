import React, { useEffect } from "react";
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


   
    return(
        <div className="py-5 bg-stone-100 p-20 min-h-screen">
          <h1 className="text-2xl text-left font-semibold text-zinc-700">Shopping Cart</h1>

          {cart.map((item,id)=>
          <div className="bg-white flex justify-between gap-2 my-2  rounded-md shadow-md" key={id.toString()}>
            
              <div className='pl-4 p-2 my-auto'>
                  <img src={item.image} alt={item.title}
                      className="object-cover max-w-[80px] rounded-sm" 
                  />       
              </div>
              <div className="ml-0 mr-auto my-auto text-left text-xl py-2"><p>{item.title}</p></div> 
            
            <div className="flex pl-5">

              <div className="my-auto border-2 h-10 w-20 flex px-1 rounded-md">
                <button onClick={()=>item.quantity>1 && dispatch(adjustQuantity(item.id, item.quantity-1))}>
                  <MinusSmIcon className="w-5 stroke-1 text-zinc-700 rounded-md
                   hover:bg-red-300 hover:shadow-md hover:text-zinc-900 active:bg-red-500"/>
                </button>
                <p className="m-auto text-lg px-1">{item.quantity}</p>
                <button onClick={()=>dispatch(adjustQuantity(item.id,item.quantity+1))}>
                  <PlusSmIcon className="w-5 stroke-1 text-zinc-700 rounded-md
                   hover:bg-red-300 hover:shadow-md hover:text-zinc-900 active:bg-red-500"/>
                </button>
                
              </div>

              <div className="my-auto text-md font-semibold w-28 text-right"><p>$ {item.price}</p></div>
              <div className="my-auto px-5">
                <button onClick={()=>dispatch(removeFromCart(item.id))}><TrashIcon 
                className="w-10 my-auto hover:bg-red-300 rounded-md hover:shadow-md
                  stroke-1 text-zinc-800 active:bg-red-500"/></button>
              </div>
            </div>
            

          </div>)}

          <CartCard/>
{/*           {cart.map((item,id)=><div key={id.toString()}>
            <p>{item.title}</p>
            <p>{item.quantity}</p>
            
            <button onClick={()=>dispatch(adjustQuantity(item.id,item.quantity+1))}>+</button>
            <button onClick={()=>item.quantity>1 && dispatch(adjustQuantity(item.id, item.quantity-1))}>-</button>
          </div>)} */}
          
          
        </div>
    )
}