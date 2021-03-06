import React, { useEffect, useState} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setCategories } from "../redux/actions/productsActions";
import ProductGallery from "../components/ProductGallery";
import ProductFilteredGallery from "../components/ProductFilteredGallery";
import CategoryMenu from "../components/CategoryMenu";
//import Slider from "../components/Slider";
import { GlobeIcon, SparklesIcon, GiftIcon } from "@heroicons/react/outline";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const fetchProducts = async () => {
    
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      }).then(setIsLoading(false) );
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = useSelector((state) => state.allCategories.categories);
  const fetchCategories = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((err) => {
        console.log("Err: ", err);
      }).then();
    dispatch(setCategories(response.data));
  };

  

  useEffect(() => {
    fetchCategories();
  }, []);

  const[catfilter,setCatfilter]=useState('');

//  console.log("Products :", products);
 // console.log("Categories :", categories); 
  //console.log("catfilter:", catfilter);

  return (
    <div className="bg-stone-100">
      
      <div className="flex ">
        <div className="p-2">
          <CategoryMenu setCatfilter={setCatfilter}/>
        </div>
        
        <div className="">
          <div>{isLoading?<h2 className="text-center p-10 mx-auto">loading</h2>:
            <ProductFilteredGallery catfilter={catfilter}/>}</div>

          <div className="flex justify-center py-2 px-5 gap-x-5">
            
            <div className="rounded-md bg-white shadow-md flex p-2 w-1/3">
              <SparklesIcon className="h-10 text-red-400 my-auto"/>
              <p className="text-md my-auto text-center w-full">The Real Fake Store</p>
            </div>
            <div className="rounded-md  bg-white shadow-md flex p-2  w-1/3">
              <GlobeIcon className="h-10 text-red-400 my-auto"/>
              <p className="text-md my-auto  text-center w-full">Worldwide Imaginary Delivery</p>
            </div>
            <div className="rounded-md  bg-white shadow-md flex p-2  w-1/3">
              <GiftIcon className="h-10 text-red-400 my-auto"/>
              <div className="my-auto w-full">
                <p className="text-md text-center">Gift Coupon:</p>
                <p className="text-center text-xs">Pay for one and get none</p>
              </div>
            </div>

          </div>
          {isLoading?<h2 className="text-center p-10 mx-auto">...</h2>:
          <ProductGallery/>}
        </div>
        
      </div>
      
    </div>
  );
};

export default ProductPage;

//