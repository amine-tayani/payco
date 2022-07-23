import React, { useState } from "react";
import { CaretRight, List, X } from "phosphor-react";

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
              className="text-gray-800 hidden lg:block hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <button className="bg-[#6284ff] flex space-x-1 items-center mx-8 lg:mx-0 py-2 lg:py-3 w-32 rounded-full px-4 text-sm text-neutral-100 hover:bg-[#4963c0] focus:outline-none">
                <span className="ml-2 font-semibold">Start now</span>
                <CaretRight size={15} weight="bold" />
              </button>
            </a>
            <a
              href="#"
              className="text-white hidden  lg:block bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Get started
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

          <div
            className={`${
              navbar
                ? "transition-opacity duration-300 ease-in-out z-50 min-w-full mt-12 top-20 min-h-screen flex fixed bg-[#191b1d]"
                : "hidden"
            } justify-between w-full lg:flex lg:w-auto lg:order-1"`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col space-y-10 mx-4 lg:mx-0 lg:text-base lg:space-y-0 mt-4 lg:flex-row lg:space-x-12 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="text-xl  lg:text-sm transition-color duration-150 ease-out hover:text-blue-400 focus:outline-none py-2 pr-4 pl-3 text-slate-100 lg:p-0 "
                  aria-current="page"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl  lg:text-sm transition-color duration-150 ease-out hover:text-blue-400 focus:outline-none py-2 pr-4 pl-3 text-slate-100 lg:p-0 "
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl  lg:text-sm transition-color duration-150 ease-out hover:text-blue-400 focus:outline-none py-2 pr-4 pl-3 text-slate-100 lg:p-0 "
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl  lg:text-sm transition-color duration-150 ease-out hover:text-blue-400 focus:outline-none py-2 pr-4 pl-3 text-slate-100 lg:p-0 "
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl  lg:text-sm transition-color duration-150 ease-out hover:text-blue-400 focus:outline-none py-2 pr-4 pl-3 text-slate-100 lg:p-0 "
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
