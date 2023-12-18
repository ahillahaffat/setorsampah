import Image from "next/image";
import React from "react";

const DescAbout = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 py-10 lg:py-20" data-aos="fade-right">
      <div className="flex flex-col lg:flex-row lg:min-h-[500px]">
        <div className="w-full lg:w-1/3 relative mb-6 lg:mb-0 md:flex md:items-center md:justify-center">
          <Image
            src="/Recycle-01.png"
            alt="Description of the image"
            width={500}
            height={44}
          />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col py-6">
          <h1 className="text-black regular-24 md:regular-32 2xl:regular-48 mb-3 lg:mb-4">
            <strong>Melangkah Bersama Menuju Ekosistem yang Lebih Sehat</strong>
          </h1>
          <p className="text-gray-120 regular-16 xl:regular-18">
            Di beberapa daerah seperti Gunung Semeru di Indonesia, penumpukan
            sampah telah menjadi masalah serius yang mengancam keindahan alam.
            Hal ini tidak hanya terbatas pada satu lokasi, tetapi tersebar di
            taman nasional dan gunung-gunung lainnya di Indonesia. Hal ini
            diperparah oleh pengelolaan yang terbatas, infrastruktur yang
            kurang, dan kurangnya disiplin pengunjung dalam membuang sampah.
            Lalu bagaimana solusinya?<br></br>
            <br></br>
            Salah satu solusi efektif adalah melibatkan masyarakat dalam program
            pemulihan atau pengelolaan sampah. Meski terkadang dianggap rendah,
            edukasi yang baik tentang peran penting dalam menjaga lingkungan
            bisa mengubah persepsi negatif ini. Kampanye yang kuat untuk
            menghargai pekerjaan ini dalam menjaga alam dapat membantu mengatasi
            stigma yang melekat. Namun, mengapa kita tidak menerapkan dengan
            tepat?
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescAbout;
