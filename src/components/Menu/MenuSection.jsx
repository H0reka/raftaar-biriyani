import React from "react";

const MenuSection = () => {
  return (
    <section className="bg-[#f9f0d9] col-span-12 grid grid-cols-12 text-black py-16 md:px-32 circle-splatter relative text-center justify-center items-center p-4">
      <h2 className="text-center text-7xl md:text-8xl font-extrabold text-[#d93226] mb-12 col-span-12">
        THIRST TRAPS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mx-auto col-span-12">
        <div className="flex flex-col items-center climate-crisis bg-[#f4c31d] hover:text-[#ff5700] transition-all duration-200 p-4 rounded-2xl col-span-4">
          <img
            src="https://placehold.co/600x600"
            alt="Chicken Biriyani"
            className="mb-4"
          />
          <h3 className="text-xl font-bold">CHICKEN BIRIYANI</h3>
        </div>
        <div className="flex flex-col items-center climate-crisis bg-[#f4c31d] hover:text-[#ff5700] transition-all duration-200 p-4 rounded-2xl col-span-4">
          <img
            src="https://placehold.co/600x600"
            alt="Fried Chicken"
            className=" mb-4"
          />
          <h3 className="text-xl font-bold">FRIED CHICKEN</h3>
        </div>
        <div className="flex flex-col items-center climate-crisis bg-[#f4c31d] hover:text-[#ff5700] transition-all duration-200 p-4 rounded-2xl col-span-4">
          <img
            src="https://placehold.co/600x600"
            alt="Chili Chicken"
            className="mb-4"
          />
          <h3 className="text-xl font-bold">CHILI CHICKEN</h3>
        </div>
      </div>
      <div className="col-span-12 items-center text-center">
        <button className="mt-16 bg-[#f4c31d] hover:bg-[#e4b815]  transition-colors duration-200  climate-crisis font-bold py-3 px-4 rounded-full text-3xl mb-16 cursor-pointer">
          EXPLORE MORE
        </button>
      </div>
      <div class="custom-shape-divider-bottom-1745002847">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default MenuSection;
