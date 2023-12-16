"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import styles from "../layanan/HeroLayanan.module.css";
import { useRouter } from 'next/navigation';

const Hero1 = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
    };
    const handleInitialLoad = () => {
      setIsInitialLoad(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("DOMContentLoaded", handleInitialLoad);

    AOS.init(); // Initialize AOS

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("DOMContentLoaded", handleInitialLoad);
    };
  }, []);

  const textAnimationClass = isInitialLoad ? styles.fadeInText : "";
  const isAboutPage = router.pathname === '/about'; // Check if the current page is the "about" page

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div
        className={`relative h-full flex items-center justify-center ${textAnimationClass}`}
        data-aos="fade"
        data-aos-duration="1000"
      >
        <div className="flex flex-col items-center text-center text-white z-10">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Lestari Bumi</strong> Kurangi Plastik
          </h2>
          <p className="regular-24 md:regular-32 2xl:regular-32 mb-8">#LessPlasticMoreLife</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover object-center"
            data-aos="zoom-in"
          >
            <source src="/sequence.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero1;