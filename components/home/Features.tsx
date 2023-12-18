"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Features = () => {
  const router = useRouter();
  const handleNavigateToAbout = () => {
    router.push("/about");
  };
  return (
    <div className="max-w-6xl mx-auto p-8 py-10 lg:py-20" data-aos="fade-right">
      <div className="flex flex-col lg:flex-row lg:min-h-[500px]">
        <div className="w-full lg:w-1/2 relative mb-6 lg:mb-0 md:flex md:items-center md:justify-center">
          <Image src="/home-01.png" alt="Home Icon" width={500} height={50} />
        </div>
        <div className="w-full lg:w-2/3 flex-col py-6">
          <h1 className="text-black regular-24 md:regular-32 2xl:regular-48 mb-3 lg:mb-4">
            <strong>Melangkah Bersama Menuju Ekosistem yang Lebih Sehat</strong>
          </h1>
          <p className="text-gray-120 regular-16 xl:regular-18">
            Melalui aplikasi inovatif kami, "Setor Sampah," kita berkomitmen
            untuk melindungi keindahan alam. Bersama-sama, kita bisa mengubah
            paradigma pengelolaan sampah di taman nasional dan gunung-gunung
            Indonesia. Mari wujudkan ekosistem yang berkelanjutan dan taman
            nasional bebas plastik, sebagai warisan untuk generasi mendatang.
          </p>
          <button
            onClick={handleNavigateToAbout}
            className="mt-4 bg-gradient-to-r from-green-800 via-green-50 to-white hover:scale-105 font-bold py-4 px-4 rounded transform transition-transform duration-300 ease-in-out opacity-80 hover:opacity-100 md:py-3 md:px-3 md:text-sm xs:py-2 xs:px-2 xs:text-xs"
            data-aos="fade-up"
          >
            Semua Tentang Kami disini ->
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
