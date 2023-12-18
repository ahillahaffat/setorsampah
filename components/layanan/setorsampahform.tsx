"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { PhotographIcon as PhotoIcon, ExclamationCircleIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

const SetorSampahForm = () => {
  const { data: session } = useSession();

  const [setorSampah, setSetorSampah] = useState({
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    lokasigunung: "",
    tanggalNaik: new Date().toISOString().split("T")[0],
    tanggalTurun: new Date().toISOString().split("T")[0],
    kertas: 0,
    plastik: 0,
    kaleng: 0,
    buktiSampah: null,
    buktiRegistrasi: null,
    totalPoin: 0,
  });

  const [formIncomplete, setFormIncomplete] = useState(false);

  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const calculatePoints = () => {
    const poinPerKgKertas = 5;
    const poinPerKgPlastik = 10;
    const poinPerKgKaleng = 10;

    const weightKertas = parseFloat(setorSampah.kertas);
    const weightPlastik = parseFloat(setorSampah.plastik);
    const weightKaleng = parseFloat(setorSampah.kaleng);

    const poinKertas = Math.max(0, weightKertas / 0.1) * poinPerKgKertas;
    const poinPlastik = Math.max(0, weightPlastik / 0.1) * poinPerKgPlastik;
    const poinKaleng = Math.max(0, weightKaleng / 0.1) * poinPerKgKaleng;
    const totalPoin = poinKertas + poinPlastik + poinKaleng;
    console.log("Total Poin:", totalPoin);

    return totalPoin;
  };

  const handleFileChange = (event, fileKey) => {
    const file = event.target.files[0];
    setSetorSampah({
      ...setorSampah,
      [fileKey]: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      setorSampah.lokasigunung.trim() === "" ||
      setorSampah.buktiSampah === null ||
      setorSampah.buktiRegistrasi === null
    ) {
      setFormIncomplete(true);

      // Set a timer to hide the alert after 3 seconds
      setTimeout(() => {
        setFormIncomplete(false);
      }, 3000);

      return;
    }
    const totalPoin = calculatePoints();

    const formData = new FormData();
    for (const key in setorSampah) {
      formData.append(key, setorSampah[key]);
    }

    const data = {
      name: setorSampah.name,
      email: setorSampah.email,
      lokasigunung: setorSampah.lokasigunung,
      tanggalNaik: setorSampah.tanggalNaik,
      tanggalTurun: setorSampah.tanggalTurun,
      kertas: setorSampah.kertas,
      plastik: setorSampah.plastik,
      kaleng: setorSampah.kaleng,
      buktiSampah: setorSampah.buktiSampah,
      buktiRegistrasi: setorSampah.buktiRegistrasi,
      totalPoin: totalPoin,
    };

    try {
      const response = await fetch("https://setorsampah.vercel.app/api/datauser",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (response.status === 200 || response.status === 201) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <form className="space-y-6 max-w-6xl mx-auto pt-36 p-8" onSubmit={handleSubmit}>
      {formIncomplete && (
        <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationCircleIcon
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium">Form is incomplete!</h3>
              <div className="mt-2 text-sm">
                <p>Please fill in all required fields.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="text-left">
      <h1
        className="regular-24 md:regular-40 2xl:regular-72 mb-4"
        data-aos="zoom-y-out"
      >
        <strong>Input Form </strong>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-50 to-green-201">
          <strong> Setor Sampah</strong>
        </span>
      </h1>
    </div>
      <div className="border-t border-b pb-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="nama"
              className="block text-sm font-medium leading-6 text-gray-90"
            >
              Nama
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={setorSampah.name}
                readOnly
                name="name"
                id="name"
                required
                className=" cursor-not-allowed bg-gray-200 w-full rounded-md border-0 py-1.5 text-gray-700 focus:ring-gray-200 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-90"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={setorSampah.email}
                readOnly
                name="email"
                id="email"
                autoComplete="email"
                className="cursor-not-allowed bg-gray-200 block w-full rounded-md border-0 py-1.5 text-gray-700 sm:text-sm focus:ring-gray-200 sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="lokasi-gunung"
              className="block text-sm font-medium leading-6 text-gray-90"
            >
              Lokasi Gunung
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={setorSampah.lokasigunung}
                placeholder="Masukkan Lokasi Gunung"
                onChange={(e) =>
                  setSetorSampah({
                    ...setorSampah,
                    lokasigunung: e.target.value,
                  })
                }
                autoComplete="lokasi-gunung"
                className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-90 shadow-sm ring-1 ring-inset ring-gray-50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-20 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 relative">
            <label
              htmlFor="tanggal-naik"
              className="block text-sm font-medium leading-6 text-gray-90"
            >
              Tanggal Naik
            </label>
            <div className="mt-2 flex">
              <input
                type="date"
                value={setorSampah.tanggalNaik}
                onChange={(e) =>
                  setSetorSampah({
                    ...setorSampah,
                    tanggalNaik: e.target.value,
                  })
                }
                className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-90 shadow-sm ring-1 ring-inset ring-gray-50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-20 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 relative">
            <label
              htmlFor="tanggal-turun"
              className="block text-sm font-medium leading-6 text-gray-90"
            >
              Tanggal Turun
            </label>
            <div className="mt-2 flex">
              <input
                type="date"
                value={setorSampah.tanggalTurun}
                onChange={(e) =>
                  setSetorSampah({
                    ...setorSampah,
                    tanggalTurun: e.target.value,
                  })
                }
                className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-90 shadow-sm ring-1 ring-inset ring-gray-50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-20 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-semibold leading-6 text-gray-900 mt-8">
        Sampah Bawaan
      </h2>
      <div className="col-span-full">
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-90"
        >
          Kertas (kg)
        </label>
        <div className="mt-2">
          <input
            type="number"
            value={setorSampah.kertas}
            onChange={(e) =>
              setSetorSampah({ ...setorSampah, kertas: e.target.value })
            }
            autoComplete="kertas"
            className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-90 shadow-sm ring-1 ring-inset ring-gray-50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-20 sm:text-sm sm:leading-6"
              />
        </div>
      </div>
      <div className="col-span-full">
        <label
          htmlFor="nama"
          className="block text-sm font-medium leading-6 text-gray-90"
        >
          Plastik (kg)
        </label>
        <div className="mt-2">
          <input
            type="number"
            value={setorSampah.plastik}
            onChange={(e) =>
              setSetorSampah({ ...setorSampah, plastik: e.target.value })
            }
            autoComplete="plastik"
            className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-90 shadow-sm ring-1 ring-inset ring-gray-50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-20 sm:text-sm sm:leading-6"
              />
        </div>
      </div>
      <div className="col-span-full">
        <label
          htmlFor="nama"
          className="block text-sm font-medium leading-6 text-gray-90"
        >
          Kaleng (kg)
        </label>
        <div className="mt-2">
          <input
            type="number"
            value={setorSampah.kaleng}
            onChange={(e) =>
              setSetorSampah({ ...setorSampah, kaleng: e.target.value })
            }
            autoComplete="kaleng"
            className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-90 shadow-sm ring-1 ring-inset ring-gray-50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-20 sm:text-sm sm:leading-6"
              />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        {/* First file upload section */}
        <div className="sm:col-span-3">
          <label
            htmlFor="bukti-sampah"
            className="block text-sm font-medium leading-6 text-gray-90"
          >
            Bukti Sampah
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            {setorSampah.buktiSampah ? (
              // If the file is present, display a preview or some indication
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <p className="mt-4 text-sm leading-6 text-green-600">
                  File added successfully!
                </p>
              </div>
            ) : (
              // If no file is present, allow file upload
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload-1"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-green-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-50 focus-within:ring-offset-2 hover:text-green-50"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload-1"
                      name="file-upload-1"
                      type="file"
                      accept=".pdf, .jpg, .png"
                      onChange={(e) => handleFileChange(e, "buktiSampah")}
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, PDF up to 5MB
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Second file upload section */}
        <div className="sm:col-span-3">
          <label
            htmlFor="bukti-registrasi"
            className="block text-sm font-medium leading-6 text-gray-90"
          >
            Bukti Registrasi
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            {setorSampah.buktiRegistrasi ? (
              // If the file is present, display a preview or some indication
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <p className="mt-4 text-sm leading-6 text-green-600">
                  File added successfully!
                </p>
              </div>
            ) : (
              // If no file is present, allow file upload
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload-2"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-green-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-50 focus-within:ring-offset-2 hover:text-green-50"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload-2"
                      name="file-upload-2"
                      type="file"
                      accept=".pdf, .jpg, .png"
                      onChange={(e) => handleFileChange(e, "buktiRegistrasi")}
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-90">
                  PNG, JPG, PDF up to 5MB
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-end gap-x-6">
    <Link
    href="/layanan"
      type="button"
      className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-50 focus:outline-none"
    >
      Cancel
    </Link>
    <button
      type="submit"
      className="rounded-md bg-green-50 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-300 hover:text-gray-900 focus:outline-none focus:ring focus:border-green-50"
    >
      Save
    </button>
  </div>
    </form>
  );
};

export default SetorSampahForm;
