import React from "react";

const FastSection = () => {
  return (
    <section className="bg-[#3051c6] col-span-12 relative text-[#fdf6d2] gap-12 grid md:grid-cols-12 items-center justify-between">
      {/* <img
    src="/blob.svg"
    className="col-span-12 justify-self-center w-40 mb-16 fill-[#f4c31d]"
    alt=""
  /> */}
      <div className="flex flex-col items-center md:mt-0 col-span-8 md:col-span-12 lg:col-span-7">
        <img
          src="/paneerBiriyani.JPG"
          alt="Meal Box"
          className="lg:h-[45rem] lg:w-[51em]"
        />
      </div>
      <div className="max-w-xl col-span-8 md:col-span-12 lg:col-span-5 p-4">
        <h2 className="text-[3rem] md:text-8xl font-extrabold mb-4 text-[#f76d28ec]">
          FAST FIRE.
          <br />
          FULL FLAVOR.
          <br />
          ZERO CHILL.
        </h2>
        <p className="text-white text-lg chewy-regular tracking-wider mb-28">
          At Raftaar Biriyani, we don’t just serve heat — we deliver it blazing
          fast. Cravings don’t wait, and neither do we. Your Biriyani rockets
          out the kitchen and lands at your door in 10 minutes flat. No mercy,
          no delays — just full-throttle flavor on a turbo timer.
        </p>
      </div>
      <div className="custom-shape-divider-bottom-1745002847">
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

export default FastSection;
