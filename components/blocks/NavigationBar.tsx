import React, { useState } from "react";
import { List, X } from "phosphor-react";
import { motion } from "framer-motion";

const NavigationBar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header>
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a
            href="/"
            className="text-3xl px-6 mt-4 tracking-[-0.01em] font-alliance text-white "
          >
            Payco
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-gray-800 hidden lg:block font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <button className="bg-[#6284ff]  font-semibold flex space-x-1 mx-8 lg:mx-0 py-2 rounded-xl px-6 text-sm text-neutral-100 hover:bg-[#4963c0] focus:outline-none">
                Login
              </button>
            </a>

            <div className="md:hidden">
              <button
                aria-label="Open Menu"
                onClick={() => setNavbar(!navbar)}
                className="bg-[#6284ff] mt-4 flex items-center rounded-xl py-2 px-4 mr-6 text-sm text-neutral-100 hover:text-neutral-100 focus:outline-none md:mr-0 md:mt-0 md:hidden"
              >
                <span className="mr-2">Menu</span>
                {navbar ? (
                  <X size={18} weight="bold" />
                ) : (
                  <List size={18} weight="bold" />
                )}
              </button>
            </div>
          </div>

          <motion.div
            className={`${
              navbar
                ? "flex fixed top-20 max-w-full bg-[#191b1d] overflow-hidden z-50 mt-12 min-h-screen "
                : "hidden overflow-auto"
            } justify-between w-full lg:flex lg:w-auto lg:order-1"`}
          >
            <ul className="flex flex-col space-y-10 mx-4 lg:mx-0 lg:text-base lg:space-y-0 mt-4 lg:flex-row lg:space-x-12 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="text-xl lg:text-sm transition-color font-medium duration-150 ease-out hover:text-blue-400 focus:outline-none py-2 pr-4 pl-3 text-slate-100 lg:p-0 "
                  aria-current="page"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-[0.002em] font-medium lg:text-sm transition-color duration-150 ease-out hover:text-blue-400 focus:outline-none py-2 pr-4 pl-3 text-slate-100 lg:p-0 "
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-[0.002em] font-medium lg:text-sm transition-color duration-150 ease-out hover:text-blue-400 focus:outline-none py-2 pr-4 pl-3 text-slate-100 lg:p-0 "
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-[0.002em] font-medium lg:text-sm transition-color duration-150 ease-out hover:text-blue-400 focus:outline-none py-2 pr-4 pl-3 text-slate-100 lg:p-0 "
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-[0.002em] font-medium lg:text-sm transition-color duration-150 ease-out hover:text-blue-400 focus:outline-none py-2 pr-4 pl-3 text-slate-100 lg:p-0 "
                >
                  Pricing
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
