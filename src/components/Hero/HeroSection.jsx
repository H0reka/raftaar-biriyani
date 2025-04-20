import React from "react";

const HeroSection = () => {
  return (
    <section className="max-w-full text-black pb-3 pt-12 bg-[#93C572] grid grid-cols-1 md:grid-cols-12 relative items-center justify-center">
      <div className="md:mb-0 bg-[#f4c31d] col-span-9 md:pl-32 pb-16 pt-16 flex flex-col items-center md:block">
        <h1 className="text-7xl md:text-8xl font-extrabold mb-6 ">
          FEEL THE <br /> NEED FOR <br />{" "}
          <span className="text-7xl md:text-9xl">SPICE!!</span>
        </h1>
        <button className="bg-[#d93226] transition-colors climate-crisis duration-200 hover:bg-[#d8412f] text-[#f3d984fa] font-bold py-3 px-4 rounded-full text-3xl cursor-pointer">
          ORDER NOW
        </button>
      </div>
      <img
        src="/biriyani-bowl.png"
        alt="Biriyani Bowl"
        className="w-[35em] col-span-1 md:col-span-3  md:absolute md:-top-14 md:right-32 h-auto rounded-md shadow-md"
      />
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

export default HeroSection;
