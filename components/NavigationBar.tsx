import React, { useState } from "react";
import { List, X } from "phosphor-react";

const NavigationBar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="ml-10 mt-4 md:mt-0 md:ml-8">
              <a
                href="/"
                className="text-3xl tracking-[-0.01em] font-alliance text-white "
              >
                Payco
              </a>
            </div>
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
        </div>
        <div
          className={`flex-1 fixed bg-[#191b1d] transition-opacity duration-300 ease-in-out z-50 min-w-full mt-12 min-h-screen md:block md:pb-0 md:mt-0 ${
            navbar ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="items-center justify-center font-inter text-xl space-y-12 mx-10 md:flex md:space-x-6 md:space-y-0">
            <li className="text-neutral-400 hover:text-blue-500">
              <a href="#">Home</a>
            </li>
            <li className="text-neutral-400 hover:text-blue-500">
              <a href="#">Blog</a>
            </li>
            <li className="text-neutral-400 hover:text-blue-500">
              <a href="#">About US</a>
            </li>
            <li className="text-neutral-400 hover:text-blue-500">
              <a href="#">Contact US</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
