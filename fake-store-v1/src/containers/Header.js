import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import React from "react";
import logo from "../img/aevum-logo.png"


const Header = () => {
  return (
    <div className="bg-stone-100 h-16 flex justify-between pr-[1%]">
      <img src={logo} alt="logo"/>
      <form className="my-auto w-[80%] md:w-[50%] rounded-md overflow-hidden">
        <fieldset className="flex h-12">
          <input placeholder="Search Product"
            className="w-full border-2 border-red-300 
              rounded-md rounded-r-none px-2
              focus:border-red-500 focus:outline-none peer"></input>
          <SearchIcon className="h-full my-auto p-1 bg-red-300 peer-focus:bg-red-500 text-zinc-800 stroke-1" />
        </fieldset>
      </form>
      <ShoppingCartIcon className="w-10 h-10 my-auto text-zinc-800 stroke-1"/>
    </div>
  );
};

export default Header;