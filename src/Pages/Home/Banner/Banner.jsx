import React from "react";
import img from "../../../assets/images/Banner.png";
import Slider from "../Slider/Slider";

const Banner = () => {
  return (
    <div className="bg-white text-white relative h-screen">
      <div className="hidden lg:block">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
      </div>

      <div className="pt-20 flex justify-between items-center ml-40">
        <div className="relative z-10 p-8">
          <div className="mb-4">
            <p className="text-[20px] text-primary font-spartan font-semibold mb-3">We Are Creative Digital Agency</p>
            <p className="text-[40px] font-bold loading-[55px] font-spartan">Strategic Concepts For Businesses.</p>
            <p className="text-base mt-4 mb-9">
              Invest your spare change in Bitcoin and save with <br /> crypto to e arn
              interest in real time.{" "}
            </p>
          </div>
          <button className="bg-[#E74C3C] text-white font-semibold px-7 py-4 rounded-full">
            Discover More
          </button>
        </div>

        {/* <Slider></Slider> */}
      </div>
    </div>
  );
};

export default Banner;
