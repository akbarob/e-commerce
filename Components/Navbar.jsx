import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/stateContext";

import Cart from "./Cart";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  return (
    <div className="flex justify-between my-2 mx-4 relative">
      <p className="text-gray-400 text-lg">
        <Link href="/">Badak Headphones</Link>
      </p>
      <button
        className="text-2xl text-gray-300 cursor-pointer relative transition-all duration-75 ease-in-out bg-transparent hover:scale-110"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <AiOutlineShopping className="" />
        <span className="absolute -right-3 -top-1 text-sm text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold">
          {totalQuantity}
        </span>
      </button>
      {console.log(showCart)}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
