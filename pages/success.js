import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/stateContext";
import { Fireworks } from "../lib/utils";
const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems("");
    setTotalPrice(0);
    setTotalQuantity(0);
    Fireworks();
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank You for Your Purchase!</h2>
        <p>check your email inbox for the receipt</p>
        <p>
          if you have any questions, pleasse email
          <a href="mailto:badak07@live.com">badak07@live.com</a>
        </p>
        <Link href="/">
          <button className="btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
