import React from "react";
import Features from "@/components/layanan/features-layanan";
import Navbar from "@/components/Navbar";
import HeroLayanan from "@/components/layanan/hero-layanan";
import Footer from "@/components/Footer";

const Layanan = () => {
  return (
    <div>
      <Navbar />
      <HeroLayanan />
      <Features />
      <Footer />
    </div>
  );
};

export default Layanan;
