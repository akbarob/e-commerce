import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { urlFor } from "../lib/client";
import { useStateContext } from "../context/stateContext";
import getStripe from "../lib/Getstripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    setShowCart,
    cartItems,
    totalPrice,
    totalQuantity,
    qty,
    incQty,
    decQty,
    onAdd,
    ToggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;
    console.log("RESPONSEs", response);

    const data = await response.json();
    console.log("body_data:", data.id);

    toast.loading("Redirecting...");
    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          {" "}
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantity} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="flex flex-col items-center justify-center m-10">
            <AiOutlineShopping size={150} />
            <h3 className="font-semibold text-xl">Your bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => {
                  setShowCart(false);
                }}
                className="btn w-full"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item, i) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  alt={item?.name}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex">
                    <h5>{item?.name}</h5>
                    <h4>${item?.price}</h4>
                  </div>
                  <div className="flex mt-10">
                    <p className="flex gap-3 items-center border-2 rounded-md justify-between w-[100px]">
                      <span
                        className="text-[#f02d34] border-r-[1px] border-solid cursor-pointer py-1.5 px-3"
                        onClick={() => ToggleCartItemQuantity(item._id, "dec")}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className=" border-solid text-xl py-1.5 px-3">
                        {item.quantity}
                      </span>

                      <span
                        className="border-l-[1px] text-[ rgb(49, 168, 49)] cursor-pointer py-1.5 px-3"
                        onClick={() => ToggleCartItemQuantity(item._id, "inc")}
                      >
                        <AiOutlinePlus />
                      </span>
                    </p>{" "}
                    <button
                      className="remove-item"
                      type="button"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems?.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal: </h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
