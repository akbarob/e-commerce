import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center text-[#324d67] mt-5 py-8 px-3 font-bold gap-3">
      <p>2022 Badak </p>
      <p className="flex gap-4 text-3xl">
        <AiFillInstagram /> <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
