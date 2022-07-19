import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";
import { CaretRight, List, X } from "phosphor-react";

const Home: NextPage = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="flex flex-col bg-[#191b1d] font-inter  min-h-screen justify-center py-2">
      <Head>
        <title>Payco</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="ml-10 mt-4 md:mt-0 md:ml-8">
                <a
                  href="/"
                  className="text-2xl tracking-[-0.01em] font-alliance text-white "
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
          <div>
            <div
              className={`flex-1 fixed bg-[#191b1d] transition-opacity duration-300 ease-in-out z-50 min-w-full mt-12 min-h-screen md:block md:pb-0 md:mt-0 ${
                navbar ? "opacity-100" : "opacity-0"
              }`}
            >
              <ul className="items-center justify-center font-inter font-medium space-y-8 mx-10 md:flex md:space-x-6 md:space-y-0">
                <li className="text-neutral-400 hover:text-blue-500">
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li className="text-neutral-400 hover:text-blue-500">
                  <a href="javascript:void(0)">Blog</a>
                </li>
                <li className="text-neutral-400 hover:text-blue-500">
                  <a href="javascript:void(0)">About US</a>
                </li>
                <li className="text-neutral-400 hover:text-blue-500">
                  <a href="javascript:void(0)">Contact US</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex w-full flex-1 mt-20 pt-10 pb-7 px-3 justify-center text-center">
        <div className="flex flex-col space-y-8">
          <h1 className="text-[40px] font-alliance leading-[1.15em] tracking-[0.001em] text-white font-black">
            Plateform that makes payment easy and fast
          </h1>
          <p className="text-neutral-500 text-lg font-inter px-4 font-medium">
            Our technology will get you up and running in under an hour, with no
            contracts and a dedicated support team. Get started here
          </p>
          <button className="bg-[#6284ff] flex space-x-1 items-center mx-8 font-medium w-32 rounded-full py-2 px-4 text-sm text-neutral-100 hover:text-neutral-100 focus:outline-none">
            <span className="ml-1">Start now</span>
            <CaretRight size={22} weight="bold" />
          </button>
          <img
            className="px-4 mt-4 transform hover:rotate-3d transition-transform ease-out duration-300 md:rotate-3d"
            src="/assets/mastercard.svg"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
