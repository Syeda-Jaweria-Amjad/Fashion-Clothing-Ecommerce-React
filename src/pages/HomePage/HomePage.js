import React from "react";
import Card from "../../components/Card/Card";
import Hero from "../../components/HeroSection/Hero";

const HomePage = () => {
  return (
    <div>
      <div>
        <Hero />
        <div className="sm:text-2xl md:text-3xl lg:text-4xl text-black flex justify-center p-6 font-extrabold mt-7">
          PRE-LAUNCH COLLECTION
        </div>
        <div className="container mx-auto px-4 flex flex-wrap gap-8 my-8 justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="w-full">
              <div className="">
                <Card />
              </div>
            </div>
            <div className="w-full">
              <div className="">
                <Card />
              </div>
            </div>
            <div className="w-full">
              <div className="">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
