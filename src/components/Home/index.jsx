import React from "react";
import HeroSection from "./Hero/HeroSection";
import SpicySection from "./MidSection/SpicySection";
import FastSection from "./MidSection/FastSection";
import MenuSection from "./Menu/MenuSection";
import Footer from "../Common/Footer/Footer";

export default function Home() {
  return (
    <div className="font-sans text-[#1e1e1e] luckiest-guy-regular">
      {/* Hero Section */}
      <HeroSection />
      {/* Menu Section */}
      <MenuSection />
      {/* Mid Section */}
      <SpicySection />
      {/*Second mid section*/}
      <FastSection />

      {/* Footer */}
      <Footer title={"Ready for a flavor rush?"} />
    </div>
  );
}
