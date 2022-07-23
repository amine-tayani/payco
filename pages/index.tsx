import type { NextPage } from "next";
import Hero from "@/components/blocks/Hero";
import NavigationBar from "@/components/blocks/NavigationBar";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-[#191b1d] font-inter min-h-screen justify-center py-2">
      <NavigationBar />
      <Hero />
    </div>
  );
};

export default Home;
