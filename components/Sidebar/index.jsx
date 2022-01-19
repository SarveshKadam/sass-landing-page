import React, { useState } from "react";
import { MenuOutline } from "react-ionicons";

function Index({ children }) {
  const [mobileView, setMobileView] = useState(false);
  function handleMobileMenu() {
    setMobileView(!mobileView);
  }

  return (
    <div className="relative  min-h-screen md:flex ">
      <div className="bg-gray-100 text-gray-100 flex justify-between md:hidden ">
        <a href="#" className="block p-4 text-white font-bold">SWR</a>

        <button
          onClick={handleMobileMenu}
          className={`mobile-menu-button p-4 focus:outline-none focus:bg-gray-700 `}
        >
          <MenuOutline color="#500eec" height="40px" width="40px" />{" "}
        </button>
      </div>

      <div
        className={` bg-blue-200 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out sidebar ${
          !mobileView && `-translate-x-full`
        }`}
      >
        <a href="#" className="text-white flex items-center space-x-2 px-4">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <span className="text-2xl font-extrabold">Better Dev</span>
        </a>

        <nav>
          <a
            href="#"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Home
          </a>
          <a
            href=""
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            About
          </a>
          <a
            href=""
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Features
          </a>
          <a
            href=""
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Pricing
          </a>
        </nav>
      </div>

      <div className="flex-1 p-10 text-2xl font-bold">{children}</div>
    </div>
  );
}

export default Index;
