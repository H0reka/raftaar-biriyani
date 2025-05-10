import React from "react";

const MenuSection = () => {
  return (
    <section className="bg-[#f9f0d9] col-span-12 grid grid-cols-12 text-black py-16 md:px-32 circle-splatter relative text-center justify-center items-center p-4">
      <h2 className="text-center text-7xl md:text-8xl font-extrabold text-[#d93226] mb-12 col-span-12">
        HUNGER TRAPS
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mx-auto col-span-12">
        <div className="flex flex-col items-center climate-crisis bg-[#f4c31d] hover:text-[#ff5700] transition-all duration-200 p-4 rounded-2xl col-span-4">
          <img
            src="/chickenBiriyani.jpg"
            alt="Chicken Biriyani"
            className="mb-4"
          />
          <h3 className="text-xl font-bold">CHICKEN BIRIYANI</h3>
        </div>
        <div className="flex flex-col items-center climate-crisis bg-[#f4c31d] hover:text-[#ff5700] transition-all duration-200 p-4 rounded-2xl col-span-4">
          <img
            src="/paneerBiriyani.JPG"
            alt="Paneer Biriyani"
            className=" mb-4"
          />
          <h3 className="text-xl font-bold">PANEER BIRIYANI</h3>
        </div>
        <div className="flex flex-col items-center climate-crisis bg-[#f4c31d] hover:text-[#ff5700] transition-all duration-200 p-4 rounded-2xl col-span-4">
          <img src="./eggBiriyani.JPG" alt="Egg Biriyani" className="mb-4" />
          <h3 className="text-xl font-bold">EGG BIRIYANI</h3>
        </div>
      </div>
      <div className="col-span-12 items-center text-center">
        <a href="https://zomato.onelink.me/xqzv/50xncx6f" target="__blank">
          <button className="mt-16 bg-[#f4c31d] hover:bg-[#e4b815] mb-20  transition-colors duration-200  climate-crisis font-bold py-3 px-4 rounded-full text-3xl cursor-pointer">
            EXPLORE MORE
          </button>
        </a>
      </div>
      <div className="custom-shape-divider-bottom-1744994848">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default MenuSection;
