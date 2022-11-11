import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/stateContext";

import Cart from "./Cart";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  return (
    <div className="flex justify-between items-center mb-2 px-5  z-50 border-2 border-solid border-slate-300 h-[52px] backdrop-blur-sm w-full">
      <p className="text-gray-400 text-lg w-full">
        <Link href="/" className="font-bold text-2xl">
          Badak Headphones
        </Link>
      </p>
      <button
        className="text-2xl text-gray-300 cursor-pointer relative transition-all duration-75 ease-in-out bg-transparent hover:scale-110"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <AiOutlineShopping className="" size={40} />
        <span className="absolute -right-2 -top-1 text-sm text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold flex items-center justify-center">
          {totalQuantity}
        </span>
      </button>
      {console.log(showCart)}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
