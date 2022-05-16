import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct,removeSelectedProduct} from "../redux/actions/productsActions";
import { adjustQuantity, removeFromCart } from "../redux/actions/cartActions";
import { addToCart } from "../redux/actions/cartActions";


export default function CartPage() {

    let cart = useSelector((state) => state.shopcart.cart);
    const dispatch = useDispatch();


   
    return(
        <div className="py-5 bg-stone-100">
          <h1>Cart Page</h1>
          {cart.map((item,id)=><div key={id.toString()}>
            <p>{item.title}</p>
            <p>{item.quantity}</p>
            <button onClick={()=>dispatch(removeFromCart(item.id))}>delete item</button>
            <button onClick={()=>dispatch(adjustQuantity(item.id,item.quantity+1))}>+</button>
            <button onClick={()=>item.quantity>1 && dispatch(adjustQuantity(item.id, item.quantity-1))}>-</button>
          </div>)}
          
          
        </div>
    )
}