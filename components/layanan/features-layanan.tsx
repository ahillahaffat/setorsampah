"use client"
import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import Langkah from "../../public/langkah-01.png";

function Features() {
  const [tab, setTab] = useState(1);
  const [selectedCard, setSelectedCard] = useState(0);
  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };
  useEffect(() => {
    heightFix();
  }, [tab]);

  useEffect(() => {
    setSelectedCard(0);
  }, []);

  const tabContent = [
    {
      title: "Daftar atau Masuk (Registrasi akun)",
      steps: [
        "Buka halaman pendaftaran atau masuk akun.",
        "Jika belum memiliki akun, lengkapi formulir pendaftaran dengan informasi yang diperlukan.",
        "Setelah berhasil registrasi atau masuk, temukan formulir setor sampah di halaman layanan.",
      ],
    },
    {
      title: "Masukkan lokasi gunung yang akan Anda kunjungi",
      steps: [
        "Temukan formulir atau bagian yang meminta informasi tentang lokasi gunung.",
        "Isilah informasi tentang lokasi gunung yang akan Anda kunjungi.",
      ],
    },
    {
      title: "Masukkan Jenis Sampah",
      steps: [
        "Pilih jenis sampah yang Anda bawa turun",
        "Pastikan klasifikasi sampah sesuai dengan ketentuan.",
        "Pastikan informasi jenis sampah tercatat dengan benar",
      ],
    },
    {
      title: "Unggah foto sampah yang telah Anda kumpulkan",
      steps: [
        "Temukan opsi atau tombol unggah foto pada formulir.",
        "Pilih file foto dari perangkat Anda.",
        "Tunggu hingga proses unggah selesai dan pastikan foto telah terkirim.",
      ],
    },
    {
      title: "Sertakan bukti registrasi pendakian",
      steps: [
        "Pastikan Anda memiliki dokumen atau bukti registrasi pendakian.",
        "Unggah atau lampirkan dokumen tersebut.",
        "Tunggu hingga proses unggah selesai dan pastikan dokumen telah terkirim.",
      ],
    },
    {
      title: "Kirim formulir",
      steps: [
        "Cek kembali semua informasi yang telah Anda masukkan.",
        'Jika semua sudah benar, tekan tombol "Kirim".',
      ],
    },
    {
      title: "Tunggu verifikasi",
      steps: [
        "Bersabarlah sistem melakukan verifikasi data Anda.",
        "Cek notifikasi pada email Anda.",
      ],
    },
    {
      title: "Selesai",
      steps: [
        "Terima kasih, Anda telah mendukung upaya kami dalam mengatasi permasalahan sampah di gunung.",
      ],
    },
  ];

  const tabContentWithNumberedList = tabContent.map((item, index) => {
    const stepsWithNumberedList = item.steps.map((step, stepIndex) => {
      const stepContent = stepIndex === 0 ? step : `        ${step}`;
      return (
        <div key={stepIndex}>
          <div className="flex mb-1">
            <div className="font-bold mr-2">{stepIndex + 1}</div>
            {stepContent}
          </div>
        </div>
      );
    });
    return { ...item, steps: stepsWithNumberedList };
  });

  return (
    <section className="relative mb-8 p-8">
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-32 md:h-32 sm:h-20 bg-gradient-to-b from-green-800 via-green-50 to-green-201 transform -translate-y-3/4 xs:transform"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="pt-12 md:pt-20">
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-16"
            id="panduan-aplikasi"
          >
            <h1 className="text-black regular-32 md:regular-40 2xl:regular-72 mb-4">
              <strong>Panduan Pengguna</strong>
            </h1>
            <p className="text-sm md:text-xl lg:text-lg text-gray-120 mb-8">
              Temukan petunjuk lengkap di bawah ini untuk mempermudah proses
              penyetoran sampah selama petualangan Anda.
            </p>
          </div>

          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="mb-8 md:mb-0">
                {tabContentWithNumberedList.map((item, index) => (
                  <div key={index} className="mb-3">
                    <a
                      className={`flex items-start text-lg p-5 rounded border ${
                        selectedCard === index
                          ? "bg-green-50"
                          : "border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(index + 1);
                        setSelectedCard(index);
                      }}
                    >
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full md:w-10 md:h-10 xs:w-8 xs:h-8 ${
                          selectedCard === index
                            ? "bg-white text-green-50"
                            : "bg-green-50 text-gray-100"
                        } mr-3`}
                      >
                        <strong className="text-sm xs:text-sm" >{index + 1}</strong>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm md:text-lg leading-snug tracking-tight mb-1 mt-2">
                          {selectedCard === index ? (
                            <span className="text-gray-100">{item.title}</span>
                          ) : (
                            <span className="text-black">{item.title}</span>
                          )}
                        </div>
                        {selectedCard === index && (
                          <div className="bg-transparent border-transparent rounded text-sm md:text-lg">
                            {item.steps.map((step, stepIndex) => (
                              <div key={stepIndex} className="mb-3">
                                {selectedCard === index ? (
                                  <span className="text-gray-100">{step}</span>
                                ) : (
                                  <span>{step}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right " >
                {tabContent.map((item, index) => (
                  <Transition
                    key={index}
                    show={selectedCard === index}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-16"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-16"
                  >
                    <div className="relative inline-flex flex-col">
                      <img
                        className="md:max-w-none mx-auto rounded "
                        src={Langkah.src}
                        width="500"
                        height="462"
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
