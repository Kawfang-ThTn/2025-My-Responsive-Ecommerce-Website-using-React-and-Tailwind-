import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blogs",
  },
];

function Navbar() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="py-4">
          <div className="container flex justify-between items-center ">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
              >
                TT-Shop
              </a>

              <div className="hidden lg:block">
                <ul className="flex items-center gap-4 ">
                  {MenuLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="inline-block px-4 font-semibold text-gray-500
                      hover:text-black
                      dark:hover:text-white duration-200"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between items-center gap-4 ">
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="relative  z-10 bg-transparent w-12 h-12 rounded-full cursor-pointer pl-12 border border-gray-200 dark:border-gray-700
                focus:w-full focus:border-gray-100 focus:cursor-text focus:pl-16 focus:pr-4"
                />
                <IoMdSearch
                  className="absolute inset-y-0 my-auto h-8 w-12 px-3  text-xl text-gray-600 border-r border-transparent peer-focus:border-gray-100
                dark:text-gray-400 "
                />
              </div>
              <div className="flex items-center gap-4"> 
                <button className="relative p-3">
                  <FaCartShopping 
                  className="text-xl text-gray-600 dark:text-gray-400" 
                  />
                  <div className="absolute -top-0.5 -right-0.5 bg-primary text-white w-4 h-4 rounded-full flex items-center justify-center">
                    4
                  </div>
                </button>
                <div>
                  <DarkMode />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
