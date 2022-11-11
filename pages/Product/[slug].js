import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Product from "../../Components/Product";
import { useStateContext } from "../../context/stateContext";
import { useEffect } from "react";

const ProductDetails = ({ products, product }) => {
  const [index, setIndex] = useState(0);
  const { image, name, details, price } = product;

  const { incQty, decQty, qty, setQty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  useEffect(() => {
    setQty(1);
  }, [product]);

  return (
    <div className="">
      <div className="flex gap-10 m-10 mt-16 text-[#324d67] z-10">
        <div>
          <div className="">
            <img
              src={urlFor(image && image[index])}
              alt={name}
              className="w-[400px] rounded-xl bg-[#ebebeb] cursor-pointer transition-all ease-in-out duration-75 hover:bg-[#f02d34]"
            />
          </div>
          <div className="flex md:flex-row flex-col gap-2 mt-4">
            {image.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                onMouseEnter={() => setIndex(i)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
              />
            ))}
          </div>
        </div>
        <div className="mt-3">
          <h1 className="font-bold capitalize text-2xl">{name}</h1>
          <div className="flex gap-2 items-center mt-3 text-[ #f02d34]">
            <div className="flex text-red-500">
              <AiFillStar />

              <AiFillStar />

              <AiFillStar />

              <AiFillStar />

              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4 className="font-bold">Details:</h4>
          <p>{details}</p>
          <p className="text-gray-400">
            <span className="decoration-double line-through font-extrabold">
              N
            </span>
            {price}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-3 ">
            <h3>Quantity;</h3>
            <p className="flex gap-3 items-center border-2 rounded-md justify-between">
              <span
                className="text-[#f02d34] border-r-[1px] border-solid cursor-pointer py-1.5 px-3"
                onClick={decQty}
              >
                <AiOutlineMinus />
              </span>
              <span className=" border-solid text-xl py-1.5 px-3">{qty}</span>

              <span
                className="border-l-[1px] text-[ rgb(49, 168, 49)] cursor-pointer py-1.5 px-3"
                onClick={incQty}
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              className="py-3 px-5 border-[1px] border-solid rounded-md mt-10 text-lg font-medium bg-white w-[200px] transition-all hover:scale-110 ease-in-out cursor-pointer"
              onClick={() => onAdd(product, qty)}
            >
              add to cart
            </button>
            <button
              onClick={handleBuyNow}
              className="py-3 px-5 border-[1px] border-solid rounded-md mt-10 text-lg font-medium bg-red-500 w-[200px] transition-all hover:scale-110 ease-in-out cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className=" ">
        <h2 className="text-center m-10 text-2xl font-bold text-[#324d67]">
          You may also like
        </h2>
        <div className=" h-[400px] w-full overflow-x-hidden my-10">
          <div className="flex justify-center gap-x-6 mt-5  z-10">
            {products.map((item, i) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product" ] {
        slug{
            current
        }
    }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product"  && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type =='product']`;
  const product = await client.fetch(query);
  console.log(product);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
