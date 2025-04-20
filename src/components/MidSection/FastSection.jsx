import React from "react";

const FastSection = () => {
  return (
    <section className="bg-[#3051c6] col-span-12 text-[#fdf6d2] gap-12 grid md:grid-cols-12 items-center justify-between">
      {/* <img
    src="/blob.svg"
    className="col-span-12 justify-self-center w-40 mb-16 fill-[#f4c31d]"
    alt=""
  /> */}
      <div className="flex flex-col items-center md:mt-0 col-span-6">
        <img src="https://placehold.co/800x900" alt="Meal Box" />
      </div>
      <div className="max-w-xl col-span-6 p-4 mb-12">
        <h2 className="text-[3.5rem] md:text-8xl font-extrabold mb-4 text-[#f76d28ec]">
          FAST FIRE.
          <br />
          FULL FLAVOR.
          <br />
          ZERO CHILL.
        </h2>
        <p className="text-white text-lg chewy-regular tracking-wider">
          At Raftaar Biriyani, we don’t just serve heat — we deliver it blazing
          fast. Cravings don’t wait, and neither do we. Your Biriyani rockets
          out the kitchen and lands at your door in 10 minutes flat. No mercy,
          no delays — just full-throttle flavor on a turbo timer.
        </p>
      </div>
    </section>
  );
};

export default FastSection;
