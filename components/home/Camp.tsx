// components/Camp.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
}

const CampSite = ({ backgroundImage }: CampProps) => {
  return (
    <motion.div
      className={`h-full w-full min-w-[320px] sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px] 2xl:min-w-[1440px] ${backgroundImage} bg-cover bg-no-repeat 
              lg:rounded-b-5xl
              xl:rounded-5xl
              md:rounded-b-3xl 
              2xl:rounded-5xl relative`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex h-full flex-col items-start justify-between p-6">
        <div className="flexCenter gap-4"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h2 className="text-2xl md:text-4xl 2xl:text-6xl capitalize text-white text-left xl:-mt-20 xl:-ml-80">
            <strong>
              Langkah Digital, Jejak Hijau, <br /> Untuk Taman Nasional <br />{" "}
              Tanpa Jejak Plastik.
            </strong>
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

const Camp = () => {
  return (
    <motion.section
      className="2xl:max-container relative flex flex-col md:pt-0 xl:pt-40 xs:pt-16 sm:pt-20 pt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hide-scrollbar flex h-[440px] w-full items-start justify-start gap-5 overflow-x-auto lg:h-[500px] xl:h-[640px] hidden md:block">
        <CampSite backgroundImage="bg-bg-img-1" />
      </div>
      <div className="flexEnd mt-10 px-6 xl:-mt-60">
        <div className="bg-green-50 p-8 xl:max-w-[1000px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-32 md:regular-40 2xl:regular-72 capitalize text-white">
            <strong>Lestari Bumi</strong> Kurangi Plastik
          </h2>
          <p className="regular-16 xl:regular-18 mt-4 text-white">
            Berawal dari meningkatnya jumlah tumpukan sampah yang mengancam
            keindahan alam dan ekosistem di gunung serta taman nasional di
            Indonesia, yang disebabkan oleh keterbatasan pengelolaan dan
            perilaku pengunjung. Oleh karenanya kami menciptakan sebuah aplikasi
            web inovatif bernama "Setor Sampah". Aplikasi ini bertujuan
            menciptakan mekanisme efektif dalam memantau, memverifikasi, dan
            mengelola sampah yang dibawa pendaki saat berangkat dan pulang.
          </p>
          <div>
            <Image
              src="/quote.svg"
              alt="camp-2"
              width={186}
              height={219}
              className="camp-quote"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Camp;
