import React from "react";
import { motion } from "framer-motion";
import { CaretRight } from "phosphor-react";

const Hero: React.FC = () => {
  return (
    <>
      <main className="flex w-full flex-1 pb-32 mt-10 lg:mt-0 px-3 justify-center text-center lg:text-left">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 lg:mb-10 text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[40px] font-alliance leading-[1.15em] tracking-[0.001em] text-white font-black">
              Plateform that makes payment easy and fast
            </h1>
            <p className="max-w-2xl my-4 text-gray-500 md:text-lg lg:text-xl">
              Our technology will get you up and running in under an hour, with
              no contracts and a dedicated support team. Get started here
            </p>
            <button className="bg-[#6284ff] flex space-x-1 items-center my-8 mx-8 lg:mx-0 py-2 lg:py-3 w-32 rounded-full px-4 text-sm text-neutral-100 hover:bg-[#4963c0] focus:outline-none">
              <span className="ml-2 font-semibold">Start now</span>
              <CaretRight size={15} weight="bold" />
            </button>
          </div>
          <div className=" lg:mt-0 lg:col-span-5">
            <motion.img
              initial={{ translateX: 100, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 20,
              }}
              src="/assets/Group.svg"
              alt="mockup"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
