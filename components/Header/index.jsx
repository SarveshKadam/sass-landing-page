import React from "react";
import { MenuOutline,MapOutline } from "react-ionicons";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-50 mb-3 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ml-28 mr-28">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-blue-700"
              href="/"
            >
              <MapOutline
                color={'#500eec'} 
                height="50px"
                width="50px"
                />
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuOutline color="#500eec" height="40px" width="40px" />{" "}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                {/* <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-700 hover:opacity-75"
                  href="#pablo"
                > */}
                <button class="bg-blue-500 text-xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href="/login">Sign In</a>
                </button>{" "}
                {/* </a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
