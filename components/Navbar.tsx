// Importing necessary dependencies and icons
"use client"; // for NextJS 13.4>
import React, { useRef, useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { signOut, useSession } from "next-auth/react";

export function Navbar() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [top, setTop] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset <= 10);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const NavLinks = () => (
    <>
      {NAV_LINKS.map(({ href, key, label }) => (
        <Link
          key={key}
          href={href}
          className="text-gray-600 hover:text-gray-900 font-bold flexCenter cursor-pointer transition-all hover:font-bold"
        >
          {label}
        </Link>
      ))}
    </>
  );

  const handleMenuToggle = () => {
    setIsMenuHidden((prev) => !prev);
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const backdrop = document.querySelectorAll(".navbar-backdrop");
    backdrop.forEach((item) =>
      item.addEventListener("click", handleMenuToggle)
    );
    return () =>
      backdrop.forEach((item) =>
        item.removeEventListener("click", handleMenuToggle)
      );
  }, []);

  const { data: session } = useSession();

  return (
    <div
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <>
        {/* Mobile Navigation */}
        <nav
          className={`relative px-4 py-4 w-full mx-auto flex justify-between items-center bg-white md:hidden`}
        >
          <Link href="/">
            <Image
              src="/navbarlogo-02.png"
              alt="logo"
              width={120}
              height={29}
            />
          </Link>
          <button
            className="flex items-center text-purple-600 p-3"
            onClick={handleMenuToggle}
          >
            <AiOutlineMenu />
          </button>
        </nav>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex max-w-6xl mx-auto justify-between items-center h-16 md:h-20 ${
            isMenuOpen ? "hidden" : "hidden md:flex"
          }`}
        >
          <Link href="/">
            <Image
              src="/navbarlogo-02.png"
              alt="logo"
              width={120}
              height={29}
            />
          </Link>
          <div className="lg:hidden">
            <button
              className="flex items-center text-purple-600 p-3"
              onClick={handleMenuToggle}
            >
              <AiOutlineMenu />
            </button>
          </div>
          <ul
            className={`hidden mt-6 absolute left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-10`}
          >
            {NavLinks()}
          </ul>
          {!session ? (
            <>
              <Link
                href="/login"
                className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-gray-600 hover:text-gray-900 font-bold transition duration-200"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="hidden lg:inline-block py-2 px-6 btn-sm text-gray-200 bg-green-200 hover:bg-green-201 font-bold rounded-md transition duration-200 flex items-center"
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              <li className="flex items-center font-bold text-gray-600 mr-4">
                <span className="mr-2">{session.user?.name}</span>
                <button
                  onClick={() => signOut()}
                  className="p-2 px-5 text-white bg-green-200 rounded-full hover:bg-green-700 hover:text-gray-900 focus:outline-none focus:ring focus:border-blue-300 transition-all"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </nav>

        {/* Mobile Menu */}
<div
  className={`navbar-menu relative z-50 ${
    isMenuHidden
      ? "opacity-0 pointer-events-none"
      : "opacity-100 pointer-events-auto"
  } transition-opacity duration-300 ease-in-out`}
>
  <div className="navbar-backdrop w-full fixed inset-0 bg-gray-800 opacity-25"></div>
  <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full bg-white border-r shadow-md">
  <div className="flex items-center px-4 pt-4"> {/* Added padding-top for the logo */}
      <Link
        className="mr-auto text-3xl font-bold leading-none"
        href="/"
      >
        <Image
          src="/navbarlogo-02.png"
          alt="logo"
          width={120}
          height={29}
        />
      </Link>
      <button className="navbar-close mr-3" onClick={handleMenuToggle} style={{ paddingTop: '4px' }}> {/* Added padding-top for the close button */}
        <AiOutlineClose />
      </button>
    </div>
    <div className="bg-white p-8 gap-6 w-full">
      <ul className="space-y-6">{NavLinks()}</ul>
    </div>
    <div className="mt-auto bg-white">
      <div className="pt-6">
        {session ? (
          <li className="flex items-center font-bold text-gray-600 mr-4">
            <span className="mr-2">{session.user?.name}</span>
            <button
              onClick={() => signOut()}
              className="p-2 px-5 bg-green-200 rounded-full hover:bg-green-700 hover:text-gray-900 focus:outline-none focus:ring focus:border-blue-300 transition-all"
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <Link
              href="/login"
              className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl"
            >
              Sign in
            </Link>
            <Link
              href="register"
              className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-500 hover:bg-purple-700 rounded-xl"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
      <p className="my-4 text-xs text-center text-gray-400">
        <span>Copyright © 2021</span>
      </p>
    </div>
  </nav>
</div>

      </>
    </div>
  );
}

export default Navbar;
