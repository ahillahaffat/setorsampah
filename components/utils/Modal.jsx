import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Transition from "../utils/Transition";
import { PhotographIcon as PhotoIcon } from "@heroicons/react/solid";

function Modal({ id, ariaLabel, show, handleClose }) {
  const modalContent = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!show || !modalContent.current || modalContent.current.contains(target)) return;
      setTimeout(() => {
        handleClose();
      }, 0);
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [show, handleClose, modalContent]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      handleClose();
    };
    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  }, [handleClose]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
    handleClose();
  };

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 z-50 bg-white bg-opacity-75 transition-opacity backdrop-blur-sm"
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />

      {/* Modal dialog */}
      <Transition
        id={id}
        className={`fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabel}
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0 scale-95"
        enterEnd="opacity-100 scale-100"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100 scale-100"
        leaveEnd="opacity-0 scale-95"
      >
        <div className="bg-white overflow-auto max-w-6xl w-full max-h-full rounded shadow-lg relative p-8 animate__animated animate__fadeIn">
          <div className="border-b border-gray-900/10 pb-2">
            <div className="flex justify-between items-center p-4">
              <h2 className="text-lg font-semibold leading-6 text-gray-900">
                Setor Sampah
              </h2>
              <button
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
                onClick={handleClose}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          <form onSubmit={handleFormSubmit} className="space-y-8">
        <div className="border-b border-gray-900/10 pb-8">
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="nama"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nama
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="nama"
                      id="nama"
                      autoComplete="nama"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="lokasi-gunung"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Lokasi Gunung
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lokasi-gunung"
                      id="lokasi-gunung"
                      autoComplete="lokasi-gunung"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3 relative">
                  <label
                    htmlFor="tanggal-naik"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tanggal Naik
                  </label>
                  <div className="mt-2 flex">
                    <input
                      type="date"
                      name="tanggal-naik"
                      id="tanggal-naik"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3 relative">
                  <label
                    htmlFor="tanggal-turun"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tanggal Turun
                  </label>
                  <div className="mt-2 flex">
                    <input
                      type="date"
                      name="tanggal-turun"
                      id="tanggal-turun"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-lg font-semibold leading-6 text-gray-900 mt-8">
          Sampah Bawaan
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* First file upload section */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="bukti-sampah"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Bukti Sampah
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload-1"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload-1"
                          name="file-upload-1"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Second file upload section */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="bukti-registrasi"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Bukti Registrasi
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload-2"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload-2"
                          name="file-upload-2"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
        </form>
        </div>
      </Transition>
    </>
  );
}

export default Modal;

Modal.propTypes = {
  id: PropTypes.string,
  ariaLabel: PropTypes.string,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};