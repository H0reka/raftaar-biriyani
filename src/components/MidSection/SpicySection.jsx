import React from "react";

const SpicySection = () => {
  return (
    <section className="bg-[#1e392a] col-span-12 text-[#f4c31d] py-16 md:px-32 grid md:grid-cols-12 items-center">
      {/* <img
          src="/blob.svg"
          className="col-span-12 justify-self-center w-40 mb-16 fill-[#f4c31d]"
          alt=""
        /> */}
      <h2 className="text-[4rem] md:text-7xl col-span-12 text-center font-extrabold mb-16">
        Fast AF. Fresh AF. Biryani Goals
      </h2>
      <div className="col-span-12 flex md:flex-row flex-col flex-wrap justify-between gap-10 md:gap-0">
        <div className="text-center items-center justify-center flex flex-col gap-4">
          <img src="/fastDelivery.png" alt="" className="w-32" />
          <span>10-min Delivery</span>
        </div>
        <div className="text-center items-center justify-center flex flex-col gap-4">
          <img src="/nutrition.png" alt="" className="w-32" />
          <span>Good nutritional value</span>
        </div>
        <div className="text-center items-center justify-center flex flex-col gap-4">
          <img src="/fresh.png" alt="" className="w-32" />
          <span>Fresh Ingredients</span>
        </div>
        <div className="text-center items-center justify-center flex flex-col gap-4">
          <img src="/spicy.png" alt="" className="w-32" />
          <span>Spicy</span>
        </div>
        <div className="text-center items-center justify-center flex flex-col gap-4">
          <img src="/authentic.png" alt="" className="w-32" />
          <span>Authentic Taste</span>
        </div>
      </div>
    </section>
  );
};

export default SpicySection;
