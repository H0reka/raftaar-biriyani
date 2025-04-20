import React from "react";

const SpicySection = () => {
  return (
    <section className="bg-[#1e392a] col-span-12 text-[#f4c31d] py-16 md:px-32 grid md:grid-cols-12 items-center justify-between">
      {/* <img
          src="/blob.svg"
          className="col-span-12 justify-self-center w-40 mb-16 fill-[#f4c31d]"
          alt=""
        /> */}
      <div className="max-w-xl col-span-6 flex flex-col justify-center p-4 md:block">
        <h2 className="text-[4rem] md:text-8xl font-extrabold mb-4">
          FIRE-EEEND <br /> FOR SPICE!
        </h2>
        <div className="text-white text-lg chewy-regular md:tracking-wider">
          At Raftaar Biriyani, we’re all about bringing the heat. We serve up
          Biriyani with an extra dose of spice for those who stan intense
          flavors. Get ready for a Biriyani experience that’s fast, fiery, and
          full of attitude.
        </div>
      </div>
      <div className="flex flex-col items-center md:mt-0 col-span-6 p-4">
        <img
          src="https://placehold.co/800x600"
          alt="Meal Box"
          className="mb-4 rounded-2xl"
        />
      </div>
    </section>
  );
};

export default SpicySection;
