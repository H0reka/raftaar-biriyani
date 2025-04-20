import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#d93226] text-[#f4c31d] col-span-12 py-16 md:px-32 text-center">
      <h2 className="text-6xl md:text-8xl font-extrabold mb-6">
        READY FOR A FLAVOR RUSH?
      </h2>
      <button className="bg-black cursor-pointer hover:bg-gray-900 transition-colors duration-200 text-[#f4c31d] climate-crisis font-bold py-2 px-4 rounded-full text-3xl">
        ORDER NOW
      </button>
    </section>
  );
};

export default Footer;
