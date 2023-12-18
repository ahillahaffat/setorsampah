"use client"
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const BrandsSection = () => {
  const slickSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    centerMode: true, // Menengahkan gambar
    centerPadding: "0", // Sesuaikan padding sesuai kebutuhan
    responsive: [
      {
        breakpoint: 1024, // Layar laptop
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Layar tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520, // Layar mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const logos = [
    "/logo/dicoding.png",
    "/logo/kampusmerdeka.png",
    "/logo/kemang.png",
    "/logo/thembahkau.png",
    "/logo/walhijamtim-01.png",
    "/logo/greenpeace-01.png",
    "/logo/ecoton-01.png",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="mb-8 text-gray-500 lg:mb-9 mx-auto max-w-6xl">
      <div className="container px-3">
        <Slider {...slickSettings} className="customer-logos">
          {logos.map((logo, index) => (
            <div key={index} className="slide">
              <img
                src={logo}
                alt={`logo-${index}`}
                className="filter grayscale w-3/4 mx-auto lg:w-3/4 md:w-4/5 sm:w-2/3" 
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandsSection;
