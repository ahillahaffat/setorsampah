"use client";
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
// ... (previous imports)

import { useState } from 'react';

const Features = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const handleNavigateToAbout = () => {
    router.push('/about');
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration as needed
    });

    // Check screen width on mount
    handleScreenWidth();
    // Update screen width on resize
    window.addEventListener('resize', handleScreenWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleScreenWidth);
    };
  }, []);

  const handleScreenWidth = () => {
    // Update state based on screen width
    setIsMobile(window.innerWidth <= 425);
  };

  return (
    <motion.section
      className="p-8 flex-col flexCenter overflow-hidden py-0"
      data-aos="fade-up"
    >
      <div className="max-w-6xl relative flex items-center">
        <div className="flex flex-1 lg:min-h-[600px]">
          {isMobile ? (
            <motion.div
              className="w-1/3 relative flex-shrink-0 flex justify-center items-center"
              whileHover={{ scale: 1.1 }}
              data-aos="fade-right"
            >
              <Image src="/home-01.png" alt="phone" width={500} height={1000} />
            </motion.div>
          ) : null}

          <motion.div
            className="w-1/1 pl-8 flex flex-col justify-center items-start"
            data-aos="fade-left"
          >
            <h1 className="text-black regular-32 md:regular-40 2xl:regular-72 mb-3">
              <strong>Melangkah Bersama Menuju Ekosistem yang Lebih Sehat</strong>
            </h1>
            <p className="text-gray-120 regular-16 xl:regular-18">
              Melalui aplikasi inovatif kami, "Setor Sampah," kita berkomitmen untuk melindungi keindahan alam. Bersama-sama,
              kita bisa mengubah paradigma pengelolaan sampah di taman nasional dan gunung-gunung Indonesia. Mari wujudkan ekosistem
              yang berkelanjutan dan taman nasional bebas plastik, sebagai warisan untuk generasi mendatang.
            </p>
            <motion.button
              onClick={handleNavigateToAbout}
              className="mt-4 text-green-50 font-bold mt-10 py-3 rounded"
              whileHover={{ scale: 1.1 }}
              data-aos="fade-up"
            >
              Semua Tentang Kami disini ->
            </motion.button>
          </motion.div>

          {!isMobile ? (
            <motion.div
              className="w-1/3 relative flex-shrink-0 flex justify-center items-center"
              whileHover={{ scale: 1.1 }}
              data-aos="fade-right"
            >
              <Image src="/home-01.png" alt="phone" width={500} height={1000} />
            </motion.div>
          ) : null}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
