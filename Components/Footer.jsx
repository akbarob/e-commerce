import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center font-semibold py-3   text-[#324d67] bg-slate-200/50 border-2 border-solid ">
      <p>Made with 🤎 by Akbar Badmus</p>
      <p>Akbarbadmus ™️ 2022.</p>
      <p className="flex gap-4 text-3xl">
        <AiFillInstagram /> <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
