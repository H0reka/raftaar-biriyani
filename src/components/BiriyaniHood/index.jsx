import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const BiriyaniHood = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#F3F1E4] luckiest-guy-regular text-center overflow-hidden">
      {/* Call-to-action */}
      <section className="bg-[#d93226] text-[#f4c31d] col-span-12 py-16  text-center w-full">
        <h2 className="text-6xl md:text-8xl font-extrabold mb-6">
          Craving Biriyani?
        </h2>
        <a
          href="https://zomato.onelink.me/xqzv/50xncx6f"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black cursor-pointer hover:bg-gray-900 transition-colors duration-200 text-[#f4c31d] climate-crisis font-bold py-2 px-4 rounded-full text-3xl"
        >
          ORDER NOW
        </a>
      </section>

      {/* Body */}
      <section className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-8 bg-[#F3F1E4] py-16 lg:py-0 px-6">
        {/* Text */}
        <p className="md:text-3xl text-xl text-[#013220] max-w-lg">
          We’re working hard
          <br className="hidden sm:inline" /> to spice things up.
          <br />
          Please visit again soon!
        </p>

        {/* Sign */}
        <div className="relative w-64 shrink-0">
          {/* Sign post */}
          {/* <div className="absolute inset-x-0 bottom-0 h-8 bg-[#01322033] rounded-sm blur-sm" /> */}
          <div className="relative">
            {/* Diamond board */}
            <img src="./Cooking.png" alt="" />
          </div>
        </div>
      </section>
      {/* Banner */}
      <section className="w-full bg-[#f4c31d] text-[#013220] py-12 px-4">
        <h1 className="md:text-6xl text-4xl font-extrabold leading-none tracking-tight">
          BIRIYANIHOOD SOON IN YOUR NEIGHBOURHOOD
        </h1>
      </section>

      {/* Under construction strip */}
      <section className="w-full bg-[#013220] text-[#f4c31d] py-8">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wide">
          LET US
          <br className="sm:hidden" /> COOK!!!
        </h2>
        <div className="flex flex-row text-center items-center justify-center mt-7 gap-4">
          <div className=" border-[#f4c31d] text-white border-4 rounded-4xl text-2xl font-bold p-3 cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="border-[#f4c31d] text-white  border-4 rounded-4xl text-2xl font-bold p-3 cursor-pointer">
            <FaInstagram />
          </div>
          <div className="border-[#f4c31d] text-white  border-4 rounded-4xl text-2xl font-bold p-3 cursor-pointer">
            <FaXTwitter />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BiriyaniHood;
