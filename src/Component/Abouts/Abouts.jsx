import React from "react";
import about from '../../assets/images/about/about-image.jpg'

const Abouts = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-52">
        <div className="hero-content flex-col lg:flex-row gap-12">
          <img
            src={about} alt=""
            className="w-[636px] h-[615px]"
          />
          <div className=" justify-end ">
            <p className="font-sans text-[15px] mb-5 text-primary font-semibold">DECENTRALISED ECONOMY</p>
            <h1 className="text-[35px] font-spartan text-black w-full font-bold">We’ve built a platform to buy and sell shares.</h1>
            <p className="py-6 text-[#727272]">
            Spend real fights effective anything extra by leading. Mouthwatering leading how real formula also locked-in have can mountain thought. Jumbo plus shine sale.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;