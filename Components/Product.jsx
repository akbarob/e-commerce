import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  {
    console.log(name);
  }
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="cursor-pointer hover:scale-110 transition-all ease-in-out  mx-4">
          <img
            src={urlFor(image && image[0])}
            className="w-[250px] h-[250px]  bg-gray-300 rounded-lg "
          />
          <p className="capitalize">{name}</p>
          <p>
            <span className="decoration-double line-through font-extrabold">
              N
            </span>
            {price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
