import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct,removeSelectedProduct} from "../redux/actions/productsActions";
import { addToCart } from "../redux/actions/cartActions";
import { StarIcon as  StarIconSolid } from '@heroicons/react/solid';
import { StarIcon } from '@heroicons/react/outline';


export default function ProductPage() {

    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const { image, title, price, category, description ,id} = product;
    const dispatch = useDispatch();

    const fetchProductDetail = async (id) => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(selectedProduct(response.data));
    };
  
    useEffect(() => {
      if (productId && productId !== "") fetchProductDetail(productId);
      return () => {
        dispatch(removeSelectedProduct());
      };
    }, [productId]);

    //console.log("prod: ", product);

    // gradient for png images
    // bg-gradient-to-t from-stone-300 to-transparent
    return(
        <div className="flex py-5 bg-stone-100">
            <div className="w-1/2 h-[80vh] bg-white rounded-lg shadow-md ml-5">
                 <img className="max-h-[80vh] mx-auto p-5" src={image} alt={title}/> 
            </div>
            <div className="w-1/2 h-[80vh] flex flex-col justify-between px-5 text-left">
                <div>
                 <h1 className="font-semibold text-xl">{title}</h1>  
                 <p className="text-zinc-600 text-xs pt-1">{category}</p>
                 <p className="text-zinc-800 pt-5">{description}</p> 
                </div>
                

                <div>
                <div className="flex justify-between pb-3 px-5">
                    <div className='flex p-1'>
                    <StarIconSolid className='h-5 text-red-500 '/>
                    <StarIconSolid className='h-5 text-red-500 '/>
                    <StarIconSolid className='h-5 text-red-500 '/>
                    <StarIconSolid className='h-5 text-red-500 '/>
                    <StarIcon className='h-5 text-red-500 ' stroke="currentColor" strokeWidth="1"/>
                    </div>
                    <h2 className="text-md">{price}$</h2>
                </div>
                    <button 
                        onClick={()=>dispatch(addToCart(id,product))}
                        className="w-full p-5 text-md text-center
                        rounded-md hover:shadow-md
                        bg-red-400 hover:bg-red-500 active:bg-red-300">
                        Add To Cart</button>
                
                </div>
            </div>
        </div>
    )
}