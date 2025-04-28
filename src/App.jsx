import React from "react";
import HeroSection from "./components/Hero/HeroSection";
import SpicySection from "./components/MidSection/SpicySection";
import FastSection from "./components/MidSection/FastSection";
import MenuSection from "./components/Menu/MenuSection";
import Footer from "./components/Footer/Footer";

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
      <Footer />
    </div>
  );
}
