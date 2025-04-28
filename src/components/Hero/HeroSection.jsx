import React from "react";

const HeroSection = () => {
  return (
    <section className="max-w-full text-black pt-12 bg-[#93C572] grid grid-cols-1 md:grid-cols-12 relative items-center justify-center">
      <div className="col-span-12 justify-center grid grid-cols-12 items-center text-center">
        <div className="col-span-3 text-4xl cursor-pointer hover:text-5xl transition-all duration-200 hidden md:block">
          LOCATIONS
        </div>
        <div className="col-span-12 md:col-span-6 text-7xl font-extrabold text-center justify-center items-center flex text-[#d93226]">
          <div className="w-96">RAFTAAR BIRIYANI</div>
        </div>
        <div className="col-span-3 text-4xl cursor-pointer hover:text-5xl transition-all duration-200 hidden md:block">
          CONTACT US
        </div>
      </div>
      <div className="md:mb-0 bg-[#f4c31d] col-span-712 md:col-span-7 lg:pl-32 pb-16 pt-16 flex flex-col items-center md:block">
        <h1 className="text-7xl lg:text-8xl font-extrabold mb-6 ">
          READY.
          <br /> SET.
          <br /> <span className="text-7xl lg:text-9xl">BIRIYANI!!</span>
        </h1>
        <button className="bg-[#d93226] transition-colors climate-crisis duration-200 hover:bg-[#d8412f] text-[#f3d984fa] font-bold py-3 px-4 rounded-full text-3xl cursor-pointer">
          ORDER NOW
        </button>
      </div>
      <img
        src="/biriyani-bowl.png"
        alt="Biriyani Bowl"
        className="w-[40em] col-span-5 h-auto rounded-md"
      />
    </section>
  );
};

export default HeroSection;
