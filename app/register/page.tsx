"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Register = () => {
  const [error, setError] = useState("");
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/dashboard");
        }
    }, [sessionStatus, router]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        if (!password || password.length < 3) {
            setError("Password is invalid");
            return;
        }

        try {
      const res = await fetch("/api/register", {
        method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            if (res.status === 400) {
                setError("This email is already registered");
            }
            if (res.status === 200) {
                setError("");
                router.push("/login");
            }
        } catch (error) {
            setError("Error, try again");
            console.log(error);
        }
    };

    if (sessionStatus === "loading") {
      return (
          <div className="flex justify-center items-center h-screen bg-black">
              <div className="p-8 rounded-lg">
                  <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                      <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
                      <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
                      <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                      <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                  </svg>
              </div>
          </div>
      );
  }
  return (
    sessionStatus !== "authenticated" && (
      <div className="2xl:container min-h-screen flex items-center mx-auto">
        <div className="absolute top-0 left-0 p-4 flex items-center">
          <a href="/">
            <Image
              src="/navbarlogo-02.png"
              alt="tailus logo"
              width={120}
              height={200}
            />
          </a>
        </div>

        <div className="relative w-full lg:w-5/12">
          <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12 rounded-lg bg-white bg-opacity-80">
            <div className="space-y-4 text-left">
              <h2 className="text-4xl font-semibold text-blue-200">Daftar</h2>
              <h3 className="text-1xl font-semibold text-gray-500">
                Selamat datang! Masukkan data diri anda.
              </h3>
            </div>
            <form className="space-y-6 py-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Masukkan Nama"
                  className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 focus:invalid:outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Masukkan Email"
                  className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 focus:invalid:outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 focus:invalid:outline-none"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="flex flex-col items-end">
                <input
                  type="password"
                  className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 focus:invalid:outline-none"
                  placeholder="Ulangi Password"
                  required
                />
                <p className="text-red-400 text-[16px] mb-4">
          </p>
                <button type="reset" className="w-max p-3 -mr-3">
                  <span className="text-sm tracking-wide text-gray-800">
                    Forgot password?
                  </span>
                </button>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-xl bg-blue-200 transition duration-300 transform hover:bg-blue-120 focus:bg-blue-70 active:bg-blue-130"
                >
                  <span className="font-semibold text-white text-lg">
                    Daftar
                  </span>
                </button>
              </div>
            </form>

            <div className="text-center mt-4">
              <Link
                className="text-sm text-gray-800 hover:underline"
                href="/login"
              >
                Apakah sudah mempunyai akun?
                <u> Masuk disini</u>
              </Link>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 w-6/12 lg:w-7/12 m-3 ml-auto hidden lg:block">
          <Image
            src="/walrus-01.png"
            alt="Pattern"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
      </div>
    )
  );
};

export default Register;
