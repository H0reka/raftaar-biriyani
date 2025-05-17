import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = (props) => {
  return (
    <section className="bg-[#d93226] text-[#f4c31d] col-span-12 py-16  text-center w-full">
      <h2 className="text-6xl md:text-8xl font-extrabold mb-6">
        {props.title}
      </h2>
      <a
        href="https://zomato.onelink.me/xqzv/50xncx6f"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black cursor-pointer hover:bg-gray-900 transition-colors duration-200 text-[#f4c31d] climate-crisis font-bold py-2 px-4 rounded-full text-3xl"
      >
        ORDER NOW
      </a>
      <div className="flex flex-row text-center items-center justify-center mt-7 gap-4">
        <div className=" border-black border-4 rounded-4xl text-2xl font-bold p-3 cursor-pointer">
          <FaFacebookF />
        </div>
        <div className="border-black border-4 rounded-4xl text-2xl font-bold p-3 cursor-pointer">
          <FaInstagram />
        </div>
        <div className="border-black border-4 rounded-4xl text-2xl font-bold p-3 cursor-pointer">
          <FaXTwitter />
        </div>
      </div>
    </section>
  );
};

export default Footer;
